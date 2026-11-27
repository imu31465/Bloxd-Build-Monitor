export const id = 76;
export const ids = [76, 138, 139, 159];
export const modules = {
  40983: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => yR,
      e: () => tR
    });
    const yR = "The world isn't loaded, so no blocks can be seen.",
      tR = "The world isn't loaded, so nothing in it can be seen."
  },
  5547: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => VR
    });
    var yR = GR(25),
      tR = GR(32),
      uR = GR(1383),
      ZR = GR(3960);
    const qR = 3e4,
      iR = 1e3;

    function fR() {
      return "visible" === document.visibilityState && "inGame" === yR.d.get("gameState") && (0, uR.u)()
    }

    function VR(RR, JR) {
      (0, ZR.p)() || function(RR, JR, GR) {
        let yR = 0;
        const tR = setInterval((() => {
          JR() && (yR += iR, yR >= RR && (clearInterval(tR), GR()))
        }), iR)
      }(qR, fR, (() => {
        JR().then((() => {
          RR(`saved for the player after ${qR/1e3} s of play`), (0, ZR.C)(), tR.n.JK("chat", {
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
  35005: (RR, JR, GR) => {
    function yR(RR, JR) {
      return 0 === RR.length ? 0 : RR[Math.min(RR.length - 1, Math.floor(JR * RR.length))]
    }

    function tR(RR) {
      return RR.toFixed(1)
    }
    GR.d(JR, {
      d: () => tR,
      g: () => yR
    })
  },
  39112: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => fR,
      f: () => VR,
      j: () => AR,
      l: () => WR,
      p: () => UR
    });
    var yR = GR(5547),
      tR = GR(35005),
      uR = GR(3960);
    const ZR = 20,
      qR = ["totalMs", "slotMs", "workerMs", "applyMs", "ahead", "inFlight", "hK", "jobMs"];

    function iR(RR) {
      return [...RR].sort(((RR, JR) => RR - JR))
    }
    const fR = [];

    function VR(RR, JR, GR) {
      return `${RR},${JR},${GR}`
    }
    class KR {
      constructor() {
        this.pending = new Map, this.jobs = new Map, this.edits = [], this.nextEdit = 0, this.reported = 0, this.windowStart = performance.now(), this.frames = 0, this.lastFrameAt = 0, this.maxFrameMs = 0, this.jobsSent = 0, this.maxAhead = 0, this.maxCapacity = 0, this.roundTrips = [], this.windowEdits = [], this.outliers = 0, this.gaveUp = 0
      }
      edit(RR, JR) {
        var GR;
        const yR = null !== (GR = this.pending.get(RR)) && void 0 !== GR ? GR : [];
        yR.push({
          editAt: JR,
          meshJobId: 0
        }), this.pending.set(RR, yR)
      }
      frame(RR) {
        this.lastFrameAt > 0 && (this.maxFrameMs = Math.max(this.maxFrameMs, RR - this.lastFrameAt)), this.lastFrameAt = RR, this.frames++, RR - this.windowStart >= 1e3 && this.summarise(RR)
      }
      sent(RR, JR, GR, yR, tR, uR, ZR) {
        this.jobs.set(JR, {
          sentAt: ZR,
          receivedAt: 0,
          ahead: GR,
          inFlight: yR,
          hK: tR,
          jobMs: 0
        }), this.jobsSent++, this.maxAhead = Math.max(this.maxAhead, GR), this.maxCapacity = Math.max(this.maxCapacity, tR);
        for (const iR of null !== (qR = this.pending.get(RR)) && void 0 !== qR ? qR : []) {
          var qR;
          uR.includes(iR.meshJobId) || (iR.meshJobId = JR)
        }
      }
      received(RR, JR, GR) {
        const yR = this.jobs.get(RR);
        void 0 !== yR && (this.roundTrips.push(GR - yR.sentAt), yR.receivedAt = GR, yR.jobMs = JR)
      }
      failed(RR) {
        this.jobs.delete(RR)
      }
      reassign(RR, JR, GR) {
        this.jobs.delete(JR);
        for (const tR of null !== (yR = this.pending.get(RR)) && void 0 !== yR ? yR : []) {
          var yR;
          tR.meshJobId === JR && (tR.meshJobId = GR)
        }
      }
      applied(RR, JR, GR) {
        const yR = this.jobs.get(JR);
        this.jobs.delete(JR), void 0 !== yR && this.show(RR, yR, GR, (RR => RR.meshJobId === JR))
      }
      emptied(RR, JR) {
        const GR = {
          sentAt: JR,
          receivedAt: JR,
          ahead: 0,
          inFlight: 0,
          hK: 0,
          jobMs: 0
        };
        this.show(RR, GR, JR, (() => !0))
      }
      show(RR, JR, GR, yR) {
        const tR = this.pending.get(RR);
        if (!tR) return;
        const uR = tR.filter((tR => !yR(tR) || (this.record(RR, tR.editAt, JR, GR), !1)));
        uR.length > 0 ? this.pending.set(RR, uR) : this.pending.delete(RR)
      }
      fK(RR) {
        this.reported += RR, this === rR && this.reported >= ZR && null !== eR && (eR(), eR = null)
      }
      record(RR, JR, GR, yR) {
        const tR = {
          totalMs: yR - JR,
          slotMs: GR.sentAt - JR,
          workerMs: GR.receivedAt - GR.sentAt,
          applyMs: yR - GR.receivedAt,
          ahead: GR.ahead,
          inFlight: GR.inFlight,
          hK: GR.hK,
          jobMs: GR.jobMs
        };
        if (this.edits[this.nextEdit] = tR, this.nextEdit = (this.nextEdit + 1) % 500, this.windowEdits.push(tR.totalMs), this.fK(1), tR.totalMs < 100 || ++this.outliers > 5) return;
        const ZR = RR => Math.round(RR);
        (0, uR.k)("remesh", `slow edit (${RR}) shown in ${ZR(tR.totalMs)} ms: slot ${ZR(tR.slotMs)}, worker ${ZR(tR.workerMs)} (${tR.ahead} ahead, ${tR.inFlight}/${tR.hK} in flight; job ${ZR(tR.jobMs)}), apply ${ZR(tR.applyMs)}`)
      }
      summarise(RR) {
        const JR = (RR - this.windowStart) / 1e3;
        for (const [GR, yR] of this.pending) {
          const JR = yR.filter((JR => RR - JR.editAt <= 1e4));
          this.gaveUp += yR.length - JR.length, this.fK(yR.length - JR.length), JR.length > 0 ? this.pending.set(GR, JR) : this.pending.delete(GR)
        }
        for (const [GR, yR] of this.jobs) RR - yR.sentAt > (yR.receivedAt > 0 ? 1e4 : 6e4) && this.jobs.delete(GR);
        if (this.jobsSent > 0 || this.roundTrips.length > 0 || this.windowEdits.length > 0 || this.gaveUp > 0) {
          const RR = iR(this.roundTrips),
            GR = iR(this.windowEdits),
            yR = Math.max(0, this.outliers - 5);
          (0, uR.k)("remesh", `${Math.round(this.frames/JR)} fps (longest ${Math.round(this.maxFrameMs)} ms) | ${this.jobsSent} jobs sent, up to ${this.maxAhead} ahead on a worker, capacity ${this.maxCapacity} | round trip p50 ${Math.round((0,tR.g)(RR,.5))} max ${Math.round((0,tR.g)(RR,1))} ms | ${GR.length} edits shown, p50 ${Math.round((0,tR.g)(GR,.5))} max ${Math.round((0,tR.g)(GR,1))} ms${yR>0?`, ${yR} more slow`:""}${this.gaveUp>0?`, ${this.gaveUp} never shown`:""}`)
        }
        this.windowStart = RR, this.frames = 0, this.maxFrameMs = 0, this.jobsSent = 0, this.maxAhead = 0, this.maxCapacity = 0, this.roundTrips = [], this.windowEdits = [], this.outliers = 0, this.gaveUp = 0
      }
      stats() {
        const RR = qR.map((RR => {
          const JR = iR(this.edits.map((JR => JR[RR])));
          return `${RR}: p50 ${Math.round((0,tR.g)(JR,.5))} p90 ${Math.round((0,tR.g)(JR,.9))} max ${Math.round((0,tR.g)(JR,1))}`
        }));
        return [`${this.edits.length} edits`, ...RR].join("\n")
      }
      dump() {
        const RR = this.edits.map((RR => qR.map((JR => Math.round(10 * RR[JR]) / 10)).join(",")));
        return [this.stats(), qR.join(","), ...RR].join("\n")
      }
    }
    class wR {
      constructor(RR, JR) {
        this.log = RR, this.xw = JR
      }
      edit(RR, JR, GR) {
        const [yR, tR, uR] = this.xw.NK.itR(RR, JR, GR), ZR = this.xw.NK.Ha.oa(yR, tR, uR);
        ZR && ZR.Na && this.log.edit(VR(yR, tR, uR), performance.now())
      }
      sent(RR, JR, GR, yR, tR) {
        this.log.sent(VR(RR.i, RR.j, RR.k), JR, GR, yR, tR, fR, performance.now())
      }
      received(RR) {
        this.log.received(RR.meshJobId, RR.jobMs, performance.now())
      }
      failed(RR) {
        this.log.failed(RR)
      }
      applied(RR, JR) {
        this.log.applied(VR(RR.i, RR.j, RR.k), JR, performance.now())
      }
    }
    let rR = null,
      eR = null,
      aR = !1,
      LR = null;

    function nR() {
      return new Promise((RR => {
        null !== rR && rR.reported >= ZR ? RR() : eR = RR
      }))
    }

    function UR() {
      const RR = new KR;
      return rR = RR, (0, uR.i)("remesh", (() => RR.dump())), (0, uR.b)("remeshStats", (() => {
        console.log(RR.stats())
      })), aR || (aR = !0, (0, yR.b)((RR => {
        (0, uR.k)("remesh", RR)
      }), nR)), RR
    }

    function WR(RR) {
      const JR = UR();
      LR = new wR(JR, RR), RR.BX.meshProbe = LR, RR.on("beforeRender", (() => {
        JR.frame(performance.now())
      }))
    }

    function AR(RR, JR, GR) {
      var yR;
      null === (yR = LR) || void 0 === yR || yR.edit(RR, JR, GR)
    }
  },
  35031: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => yR
    });
    const yR = new Set(["chunkBorders"])
  },
  37914: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => tR,
      f: () => yR
    });
    const yR = 3,
      tR = {
        recording: !1,
        clipping: !1,
        hasClipBuffer: !1,
        seconds: 0
      }
  },
  35195: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => qR,
      i: () => tR,
      l: () => KR
    });
    var yR = GR(1718);

    function tR(RR) {
      var JR;
      return {
        ...qR.store,
        yaw: qR.store.yaw + (null !== (JR = yR.b[RR].previewYaw) && void 0 !== JR ? JR : 0)
      }
    }
    const uR = {
        yaw: .61 * Math.PI,
        pitch: Math.PI / 2.05,
        radius: 30,
        target: [0, 0, 0]
      },
      ZR = {
        ...uR,
        radius: 33,
        target: [0, 3.9, 0]
      },
      qR = {
        player: uR,
        store: ZR,
        showcase: {
          ...ZR,
          target: [0, 1.9, 0]
        }
      };

    function iR(RR, JR) {
      RR instanceof Promise ? RR.then(JR).catch((RR => {
        console.error("Couldn't open the preview", RR)
      })) : JR(RR)
    }
    class fR {
      constructor(RR) {
        this.opened = null, this.view = null, this.size = null, this.closed = !1, iR(RR, (RR => {
          this.closed ? RR.close() : (this.opened = RR, null !== this.size && RR.resize(this.size.width, this.size.height), null !== this.view && RR.show(this.view))
        }))
      }
      show(RR) {
        var JR;
        this.view = RR, null === (JR = this.opened) || void 0 === JR || JR.show(RR)
      }
      resize(RR, JR) {
        var GR;
        this.size = {
          width: RR,
          height: JR
        }, null === (GR = this.opened) || void 0 === GR || GR.resize(RR, JR)
      }
      close() {
        var RR;
        this.closed = !0, null === (RR = this.opened) || void 0 === RR || RR.close(), this.opened = null
      }
    }
    class VR {
      constructor(RR) {
        this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(RR).then((RR => RR.ready)), iR(RR, (RR => {
          this.closed ? RR.close() : (this.opened = RR, null !== this.size && RR.resize(this.size.width, this.size.height))
        }))
      }
      get dev() {
        return this.opened.dev
      }
      isReady() {
        var RR, JR;
        return null !== (RR = null === (JR = this.opened) || void 0 === JR ? void 0 : JR.isReady()) && void 0 !== RR && RR
      }
      setCosmetic(RR, JR) {
        var GR;
        null === (GR = this.opened) || void 0 === GR || GR.setCosmetic(RR, JR)
      }
      setNametag(RR) {
        var JR;
        null === (JR = this.opened) || void 0 === JR || JR.setNametag(RR)
      }
      playEmote(RR) {
        var JR;
        null === (JR = this.opened) || void 0 === JR || JR.playEmote(RR)
      }
      setOrbit(RR) {
        var JR;
        null === (JR = this.opened) || void 0 === JR || JR.setOrbit(RR)
      }
      resetCamera() {
        var RR;
        null === (RR = this.opened) || void 0 === RR || RR.resetCamera()
      }
      async untilDrawn(RR) {
        var JR;
        await this.ready, await (null === (JR = this.opened) || void 0 === JR ? void 0 : JR.untilDrawn(RR))
      }
      resize(RR, JR) {
        var GR;
        this.size = {
          width: RR,
          height: JR
        }, null === (GR = this.opened) || void 0 === GR || GR.resize(RR, JR)
      }
      close() {
        var RR;
        this.closed = !0, null === (RR = this.opened) || void 0 === RR || RR.close(), this.opened = null
      }
    }
    const KR = new class {
      constructor() {
        this.host = null, this.makeDefault = null
      }
      setHost(RR) {
        this.host = RR
      }
      setDefaultHost(RR) {
        this.makeDefault = RR
      }
      current() {
        if (null === this.host) {
          if (null === this.makeDefault) throw new Error("no preview host");
          this.host = this.makeDefault()
        }
        return this.host
      }
      openMob(RR) {
        return new fR(this.current().openMob(RR))
      }
      openPet(RR) {
        return new fR(this.current().openPet(RR))
      }
      openMobLineup(RR) {
        return new fR(this.current().openMobLineup(RR))
      }
      sharesCharacter() {
        return !0 === this.current().sharesCharacter
      }
      openCharacter(RR, JR) {
        return new VR(this.current().openCharacter(RR, JR))
      }
    }
  },
  6080: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => yR.f,
      g: () => tR,
      i: () => yR.o
    });
    var yR = GR(6084);
    const tR = [!1, !0].flatMap((RR => ["terrain", "liquid", "model"].map((JR => ({
      strict: RR,
      program: JR
    })))))
  },
  40495: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      ShaderPackPage: () => iR,
      harnessShaderPackMode: () => wR,
      setHarnessUrlShaderPack: () => KR,
      shaderPackPage: () => VR
    });
    var yR = GR(103),
      tR = GR(46),
      uR = (GR(4781), GR(6080), GR(4776)),
      ZR = GR(7802);
    GR(7773);
    const qR = {
      status: "none"
    };
    class iR {
      constructor() {
        this.stored = null, this.compiling = null, this.pagePack = null, this.resolved = null
      }
      preload() {
        if (null === this.stored) {
          if ((0, uR.l)(yR.featureFlags.settings.canUseShaderPacks)) return this.stored = Promise.resolve(null), fR().then((RR => {
            RR && tR.i.removeItem(uR.e)
          })), this.stored;
          this.prefetchHint() && this.compiler().catch((() => {})), this.stored = this.readStored()
        }
        return this.stored
      }
      prefetchHint() {
        return (0, uR.h)(yR.featureFlags.settings.canUseShaderPacks)
      }
      async loadActive() {
        const RR = await this.load();
        return "active" === RR.status ? RR.pack : null
      }
      load() {
        return this.pagePack ??= this.read().catch((RR => (console.error("Failed to load the shader pack", RR), qR))).then((RR => (this.resolved ??= RR, RR))), this.pagePack
      }
      hasNone() {
        var RR;
        return "none" === (null === (RR = this.resolved) || void 0 === RR ? void 0 : RR.status)
      }
      block(RR) {
        this.resolved = {
          status: "blocked",
          messageKey: RR,
          variants: null
        }, this.pagePack = Promise.resolve(this.resolved)
      }
      compiler() {
        return this.compiling ??= Promise.all([GR.e(91), GR.e(157), GR.e(163)]).then((() => GR(53760))).then((RR => (RR.prefetchCompiler(), RR))), this.compiling
      }
      async readStored() {
        const RR = await fR();
        return RR && this.compiler().then((RR => RR.reconcileHint())).catch((RR => {
          console.error("Failed to correct the shader pack hint", RR)
        })), RR
      }
      async read() {
        const RR = await this.preload();
        return RR ? (await this.compiler()).compilePagePack(RR) : qR
      }
    }
    async function fR() {
      if (!(0, uR.o)(yR.featureFlags.settings.canUseShaderPacks)) return null;
      try {
        const RR = await (0, ZR.d)(!0);
        return RR || tR.i.setItem(uR.e, !1), RR
      } catch (RR) {
        return console.error("Failed to read the stored shader pack", RR), tR.i.removeItem(uR.e), null
      }
    }
    const VR = new iR;

    function KR(RR, JR) {}

    function wR() {
      return null
    }
  },
  40534: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => KR,
      f: () => wR
    });
    var yR = GR(163),
      tR = GR(188),
      uR = GR(1633),
      ZR = GR(1972),
      qR = GR(1647),
      iR = GR(37620),
      fR = GR(726),
      VR = GR(40495);

    function KR(RR) {
      (0, ZR.reportClientError)("matchmake_failed", RR, yR.j[yR.j.SHADER_PACK])
    }
    async function wR(RR, JR) {
      var GR;
      const yR = null === (GR = await VR.shaderPackPage.preload()) || void 0 === GR ? void 0 : GR.listing,
        ZR = (0, iR.b)();
      yR && null !== ZR && await qR.c.reportShaderPackSession(RR, {
        packId: yR.packId,
        sourceHash: yR.sourceHash,
        game: (0, uR.e)(JR, tR.D, "other"),
        playSessionId: ZR,
        visitSessionId: (0, fR.getVisitSessionId)()
      })
    }
  },
  7802: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => tR,
      d: () => uR
    });
    var yR = GR(46);
    const tR = "shaderPack";
    async function uR() {
      var RR;
      let JR = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (RR = await yR.g.getItem(tR, JR)) && void 0 !== RR ? RR : null
    }
  },
  7773: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      loadShaderPackTextures: () => ZR,
      shaderPackTextures: () => qR
    });
    var yR = GR(6084);
    let tR = null,
      uR = null;

    function ZR() {
      return uR ??= Promise.all([GR.e(85), GR.e(126)]).then((() => GR(42031))).then((RR => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: JR,
          textureNameToIndex: GR,
          textureAnimationData: uR
        } = RR;
        return tR ??= (0, yR.j)(GR, uR, JR), tR
      })), uR
    }

    function qR() {
      if (null === tR) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return tR
    }
  },
  40285: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => qR
    });
    var yR = GR(32),
      tR = GR(1383),
      uR = GR(2513);
    const ZR = "Reconnecting";
    class qR {
      constructor(RR) {
        this.hooks = RR, this.graceMs = 0, this.sessionBased = !1, this.controller = void 0, this.frozen = !1, this.stopped = !1, this.listening = !1, this.ended = !1, this.retryNow = () => {
          "visible" === document.visibilityState && this.controller.retryNow()
        }, this.onPageHide = RR => {
          RR.persisted || this.leave()
        }, this.controller = new uR.k((JR => RR.reconnect(JR)), {
          isSessionLive: () => !this.ended && RR.isLive(),
          onPhaseChanged: RR => {
            this.onPhaseChanged(RR)
          },
          onReconnected: JR => {
            RR.onReconnected(JR)
          },
          onGaveUp: JR => {
            !this.ended && RR.isLive() && RR.onGaveUp(this.sessionBased, JR)
          }
        })
      }
      onInitialInfo(RR, JR) {
        this.graceMs = RR, this.sessionBased = JR
      }
      canHoldSeat() {
        return this.graceMs > 0 && !this.ended
      }
      isResuming() {
        return "connected" !== this.controller.phase
      }
      onConnectionLost(RR) {
        this.ended || this.controller.onConnectionLost(RR, this.graceMs)
      }
      onResuming() {
        this.ended || this.controller.onResuming()
      }
      onResumed() {
        this.controller.stop()
      }
      leave() {
        const RR = this.isResuming() && !this.controller.awaitingResumeOnRoom,
          JR = this.controller.heldToken;
        this.end(), RR && "" !== JR && this.hooks.releaseSeat(JR)
      }
      end() {
        this.ended = !0, this.controller.stop()
      }
      onPhaseChanged(RR) {
        const JR = (0, uR.t)(RR);
        JR !== this.stopped && (this.stopped = JR, this.hooks.freeze(JR));
        const GR = "frozen" === RR || "resuming" === RR && this.frozen;
        GR && !this.frozen ? (0, tR.s)(ZR, {
          overridesPause: !0
        }) : !GR && this.frozen && (0, tR.q)(ZR), this.frozen = GR, this.setListening("connected" !== RR), yR.n.JK(uR.r, GR ? "frozen" : RR)
      }
      setListening(RR) {
        RR !== this.listening && (this.listening = RR, RR ? (window.addEventListener("online", this.retryNow), document.addEventListener("visibilitychange", this.retryNow), window.addEventListener("pagehide", this.onPageHide)) : (window.removeEventListener("online", this.retryNow), document.removeEventListener("visibilitychange", this.retryNow), window.removeEventListener("pagehide", this.onPageHide)))
      }
    }
  },
  40288: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => yR
    });
    class yR {
      constructor(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.onSilent = RR, this.now = JR, this.lastHeardAt = void 0, this.resumedAt = void 0, this.lastCheckAt = void 0, this.wasVisible = "visible" === document.visibilityState, this.interval = void 0, this.check = () => {
          const RR = this.now(),
            JR = RR - this.lastCheckAt <= 2e3;
          this.lastCheckAt = RR;
          const GR = "visible" === document.visibilityState;
          !GR || JR && this.wasVisible || (this.resumedAt = RR), this.wasVisible = GR, GR && RR - this.lastHeardAt > 12e3 && RR - this.resumedAt > 2e3 && this.onSilent()
        }, this.lastHeardAt = JR(), this.resumedAt = this.lastHeardAt, this.lastCheckAt = this.lastHeardAt, this.interval = setInterval(this.check, 1e3), document.addEventListener("visibilitychange", this.check), window.addEventListener("online", this.check)
      }
      heard() {
        this.lastHeardAt = this.now()
      }
      dispose() {
        clearInterval(this.interval), document.removeEventListener("visibilitychange", this.check), window.removeEventListener("online", this.check)
      }
    }
  },
  35085: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => uR
    });
    var yR = GR(1406);

    function tR() {
      var RR, JR;
      return null !== (RR = null === (JR = screen.orientation) || void 0 === JR ? void 0 : JR.type) && void 0 !== RR ? RR : innerWidth > innerHeight ? "landscape" : "portrait"
    }
    const uR = new class {
      constructor() {
        this.holding = !1, this.heldOrientation = "", this.releaseTimer = void 0, this.longHoldTimer = void 0, this.resizers = new Set, this.releaseWhenShown = () => {
          document.hidden || (document.removeEventListener("visibilitychange", this.releaseWhenShown), this.release())
        }
      }
      isHeld() {
        return this.holding && tR() !== this.heldOrientation && (this.holding = !1), this.holding
      }
      hold() {
        this.heldOrientation = tR(), this.holding = !0, clearTimeout(this.releaseTimer), document.removeEventListener("visibilitychange", this.releaseWhenShown), clearTimeout(this.longHoldTimer), this.longHoldTimer = setTimeout((() => {
          this.holding && (0, yR.ma)(new Error("Game view size held for 60 s"))
        }), 6e4)
      }
      release() {
        clearTimeout(this.longHoldTimer), this.releaseTimer = setTimeout((() => {
          if (document.hidden) document.addEventListener("visibilitychange", this.releaseWhenShown);
          else {
            this.holding = !1;
            for (const RR of this.resizers) RR()
          }
        }), 1e3)
      }
      heldSizer(RR) {
        let JR = !1;
        return () => {
          if (JR && this.isHeld()) return null;
          const GR = RR();
          return JR ||= null !== GR, GR
        }
      }
      onRelease(RR) {
        return this.resizers.add(RR), () => {
          this.resizers.delete(RR)
        }
      }
    }
  },
  10336: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => uR,
      h: () => tR
    });
    let yR = Promise.resolve();

    function tR(RR) {
      yR = RR
    }

    function uR() {
      return yR
    }
  },
  40525: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => tR
    });
    let yR = !1;
    async function tR(RR, JR) {
      if (!yR) {
        yR = !0;
        try {
          const [{
            reloadBloxd: yR
          }, {
            NotificationProvider: tR
          }] = await Promise.all([Promise.resolve().then((() => GR(1943))), Promise.resolve().then((() => GR(1493)))]);
          if (!RR || !0 === await tR.showPromptPopup({
              title: "Unsaved changes",
              subtitle: "Exit and lose your unsaved changes?",
              confirmText: "Exit",
              destructive: !0,
              cancelText: "Cancel",
              unlockPointerKey: "replayExitUnsavedChanges"
            }).getResult()) return void yR(JR)
        } catch (tR) {
          console.error("Leaving the replay failed", tR)
        }
        yR = !1
      }
    }
  },
  40304: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => fR,
      f: () => VR
    });
    var yR = GR(1916),
      tR = GR(203),
      uR = GR(1879),
      ZR = GR(1997),
      qR = GR(1282),
      iR = GR(1201);
    async function fR(RR, JR) {
      return function(RR) {
        return "object" === typeof RR && null !== RR && RR.code === tR.e.VpnIp.code
      }(JR) && function(RR) {
        return uR.c.supports("appCheck") && RR.isLoggedIn() && !RR.hasTriedAppAttestation()
      }(RR) && await async function(RR) {
        try {
          const {
            token: JR
          } = await (0, ZR.b)(), {
            "3PSIDMCPP": GR
          } = await (0, iR.postJsonWithMetricsCookiesAndJsonResponse)(`${qR.clientSideServerUrls.indexUrl}/index/app-attestation`, {
            appCheckToken: JR
          }, {
            retries: 0
          }, RR.getMetricsCookies());
          return RR.setAppAttestedAuthJwt(GR), !0
        } catch (JR) {
          return JR instanceof yR.b && "failed" === JR.code ? (console.warn("The app couldn't get an App Check token:", JR), RR.markAppAttestationTried()) : console.error("Failed to attest the app:", JR), !1
        }
      }(RR)
    }
    async function VR(RR, JR) {
      try {
        return await JR()
      } catch (GR) {
        if (!await fR(RR, GR)) throw GR
      }
      return JR()
    }
  },
  42516: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => qR,
      f: () => iR
    });
    var yR = GR(1963);
    const tR = 33177600,
      uR = 3e4;
    let ZR = !1;

    function qR(RR, JR, GR) {
      let yR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const {
        scale: qR = 1,
        type: iR = "image/png",
        quality: fR
      } = yR;
      return RR.CK() ? ZR ? Promise.reject(new Error("A screenshot is already being taken")) : (ZR = !0, new Promise(((yR, VR) => {
        let KR, wR = 2,
          rR = null;
        const eR = () => {
          var JR;
          ZR = !1, null === (JR = rR) || void 0 === JR || JR(), clearTimeout(KR);
          try {
            RR.restoreSize()
          } catch (GR) {
            console.error("A screenshot couldn't size the canvas back", GR)
          }
        };
        KR = setTimeout((() => {
          eR(), VR(new Error("No frame was drawn to capture"))
        }), uR);
        try {
          const yR = function(RR, JR, GR) {
            const yR = Math.max(1, RR),
              uR = Math.max(1, JR),
              ZR = Math.min(1, GR / Math.max(yR, uR), Math.sqrt(tR / (yR * uR)));
            return {
              width: Math.max(1, Math.floor(yR * ZR)),
              height: Math.max(1, Math.floor(uR * ZR))
            }
          }(JR, GR, RR.maxTextureSize);
          RR.resize(yR.width, yR.height, qR * yR.width / Math.max(1, JR))
        } catch (aR) {
          return eR(), void VR(aR)
        }
        rR = RR.onFrameDrawn((() => {
          if (wR--, wR > 0) return;
          const {
            canvas: JR
          } = RR, GR = {
            width: JR.width,
            height: JR.height
          };
          try {
            JR.toBlob((RR => {
              RR ? yR({
                blob: RR,
                ...GR
              }) : VR(new Error("The canvas gave no image"))
            }), iR, fR)
          } catch (aR) {
            VR(aR)
          } finally {
            eR()
          }
        }))
      }))) : Promise.reject(new Error("Screenshots need a game to be running"))
    }
    async function iR(RR, JR, GR) {
      try {
        const tR = await qR(RR, JR, GR);
        (0, yR.e)(tR.blob, `bloxd-screenshot-${tR.width}x${tR.height}-${Date.now()}.png`)
      } catch (tR) {
        console.error("Error taking screenshot:", tR)
      }
    }
  },
  38861: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => yR
    });
    const yR = {
      noaReady: null,
      chunkRequested: null,
      beforeServerListeners: null,
      wasmNetReady: null
    }
  },
  40295: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => wR,
      h: () => VR
    });
    var yR = GR(203),
      tR = GR(2023),
      uR = GR(1295),
      ZR = GR(10298);
    const qR = [250, 500, 1e3, 2e3, 1250],
      iR = 406;

    function fR(RR) {
      if ("object" !== typeof RR || null === RR) return !1;
      const {
        code: JR,
        message: GR
      } = RR, tR = yR.e.duplicateLobbyNameError;
      return (JR === tR.code || JR === iR) && (GR === tR.text || GR === tR.text + yR.k)
    }
    async function VR(RR, JR) {
      let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : tR.b;
      for (let tR = 0;; tR++) {
        let ZR;
        (0, uR.r)(JR);
        try {
          return await RR()
        } catch (yR) {
          if (ZR = qR[tR], void 0 === ZR || !fR(yR)) throw yR
        }
        await GR(ZR, JR)
      }
    }
    const KR = new Set([yR.e.duplicateLobbyNameError.code, yR.e.lobbyCantBeCreated.code, yR.e.roomDisposedEarlyError.code, yR.e.roomDisposedLateError.code, yR.e.serverRoomLimitReached.code]);

    function wR(RR) {
      if (fR(RR)) return !0;
      const JR = (0, ZR.h)(RR);
      return "number" === typeof JR && KR.has(JR)
    }
  },
  10285: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => fR,
      e: () => iR
    });
    var yR = GR(377);

    function tR(RR) {
      if (!RR.startsWith("{")) return RR;
      let JR;
      try {
        JR = JSON.parse(RR)
      } catch {
        return RR
      }
      return function(RR) {
        if (null === (0, yR.Ee)(RR)) return !1;
        const {
          params: JR
        } = RR;
        return void 0 === JR || "object" === typeof JR && null !== JR && Object.values(JR).every((RR => "string" === typeof RR))
      }(JR) ? JR : RR
    }
    var uR = GR(1270),
      ZR = GR(1343);

    function qR(RR) {
      return (0, uR.w)(ZR.g.get().getCurrentLanguageCode(), RR.translationKey, RR.params)
    }

    function iR(RR) {
      const JR = tR(RR);
      return "string" === typeof JR ? JR : qR(JR)
    }

    function fR(RR) {
      const JR = tR(RR);
      return "string" === typeof JR ? JR : qR({
        translationKey: "moderation:kicked",
        params: {
          reason: qR(JR)
        }
      })
    }
  },
  40455: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => ZR
    });
    var yR = GR(359),
      tR = GR(134),
      uR = GR(46);

    function ZR() {
      uR.i.setItem(yR.Eb, uR.i.getItem(yR.Eb) + 1), (0, tR.is99NightsCrazyGamesBundle)() && uR.i.setItem(yR.Db, uR.i.getItem(yR.Db) + 1)
    }
  },
  37616: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => CR,
      g: () => XR
    });
    var yR = GR(1127),
      tR = GR(216),
      uR = GR(371),
      ZR = GR(688),
      qR = GR(377),
      iR = GR(1136),
      fR = GR(709),
      VR = GR(743),
      KR = GR(5326),
      wR = GR(103),
      rR = GR(134),
      eR = GR(1943),
      aR = GR(116),
      LR = GR(37620),
      nR = GR(46),
      UR = GR(726),
      WR = GR(696),
      AR = GR(37622);

    function CR() {
      var RR, JR;
      return [...null !== (RR = navigator.languages) && void 0 !== RR ? RR : [null !== (JR = navigator.language) && void 0 !== JR ? JR : "none"], "EN-gb"]
    }

    function XR(RR, JR, GR, XR, MR) {
      const BR = (0, yR.n)(JR) ? (0, yR.s)(JR) : null,
        lR = RR.isLoggedIn() && void 0 !== (0, tR.b)(uR.o, rR.siteUsed) ? (0, WR.f)() : null,
        pR = {
          cookies: (0, eR.getAllCookiesForGameNameWithVariation)(JR),
          isMobile: (0, wR.isMobile)(),
          isUsingCustomGameTexturePack: null !== BR && MR(BR),
          generalCookies: {
            joinDiscord: !!nR.i.getItem("DiscordPressed"),
            newGo: KR.c,
            ...RR.getMetricsCookies(),
            trafficCode: XR,
            compliance: wR.compliance
          },
          browserInfo: {
            ua: window.navigator.userAgent,
            name: (0, wR.getBrowserName)(),
            version: (0, wR.getBrowserVersion)(),
            platform: navigator.platform,
            platformType: (0, wR.getPlatformType)(),
            deviceType: (0, aR.c)()
          },
          isLoggedIn: RR.isLoggedIn(),
          lobbyName: GR,
          languages: CR(),
          version: ZR.d,
          siteUsed: rR.siteUsed,
          subsiteUsed: rR.subsiteUsed,
          playSessionId: (0, LR.h)(JR),
          visitSessionId: (0, UR.getVisitSessionId)(),
          clientReason: fR.z.reason,
          budgetBasis: (0, AR.k)(),
          ...null !== VR.p && {
            diagClaim: VR.p.claimId
          },
          ...null !== lR && {
            webGpuLoss: lR
          }
        };
      return null !== BR && (0, qR.Ac)(BR) ? (pR.lobbyName = (0, yR.l)(BR, (0, yR.p)(JR), GR), {
        roomName: `classic_${iR.h}`,
        joinOptions: pR
      }) : {
        roomName: JR,
        joinOptions: pR
      }
    }
  },
  35051: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => uR,
      g: () => tR
    });
    let yR = null;

    function tR() {
      yR = performance.now()
    }

    function uR() {
      return yR
    }
  },
  40327: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => rR,
      f: () => wR
    });
    const yR = "ue:",
      tR = ["keydown", "keyup", "mousedown", "mouseup", "pointerdown", "pointerup", "touchstart", "touchend"],
      uR = "[A-Za-z0-9]{1,24}",
      ZR = 15,
      qR = new RegExp(`^${uR}$`);
    new RegExp(`^${yR}(${[...tR,"other"].join("|")}):(?:n|k(${uR})|b(0|[1-9][0-9]?)):([01])([01])$`);

    function iR(RR, JR, GR, uR, iR) {
      const fR = "string" === typeof RR && tR.includes(RR) ? RR : "other";
      let VR = "n";
      return "string" === typeof JR ? VR = qR.test(JR) ? `k${JR}` : "n" : "number" === typeof GR && Number.isInteger(GR) && GR >= 0 && GR <= ZR && (VR = `b${GR}`), `${yR}${fR}:${VR}:${uR?1:0}${iR?1:0}`
    }
    var fR = GR(1850),
      VR = GR(1950);
    let KR = null;

    function wR(RR) {
      const JR = RR instanceof Element && RR !== document.body && RR !== document.documentElement && !(0, fR.v)(RR) && !RR.closest("#root");
      return {
        editable: (0, VR.b)(RR),
        outsideView: JR
      }
    }

    function rR(RR) {
      return KR ??= function(RR) {
        try {
          const {
            editable: JR,
            outsideView: GR
          } = wR(RR.target), yR = RR;
          return iR(RR.type, yR.code, yR.button, JR, GR)
        } catch {
          return iR(null, null, null, !1, !1)
        }
      }(RR), KR
    }
  },
  42423: (RR, JR, GR) => {
    GR.d(JR, {
      A: () => DR,
      E: () => NR,
      I: () => FR,
      M: () => oR,
      O: () => vR,
      S: () => HR,
      T: () => bR,
      X: () => dR,
      _: () => jR,
      ab: () => xR,
      d: () => ER,
      h: () => PR,
      k: () => pR,
      o: () => YR,
      r: () => gR,
      t: () => lR,
      w: () => cR,
      y: () => OR
    });
    var yR = GR(1532),
      tR = GR(32),
      uR = GR(1383),
      ZR = GR(3428),
      qR = GR(5699),
      iR = GR(5665);
    let fR, VR = !1,
      KR = !1,
      wR = !1,
      rR = !1;
    const eR = 1300,
      aR = 3e3;
    let LR = 0,
      nR = !1,
      UR = !1,
      WR = 0;
    const AR = 2;
    let CR = !1,
      XR = !1;
    const MR = new Set,
      BR = new Set;

    function lR() {
      return VR
    }

    function pR() {
      return UR
    }

    function gR() {
      return XR
    }

    function bR() {
      return (0, uR.u)() && !XR
    }

    function vR(RR) {
      let JR = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (RR !== XR) {
        XR = RR;
        for (const RR of [...BR]) RR(XR);
        JR && jR()
      }
    }

    function OR(RR) {
      return BR.add(RR), () => {
        BR.delete(RR)
      }
    }

    function xR() {
      (0, qR.i)(ZR.C.Menu, (0, uR.u)() ? 0 : ZR.C.Menu)
    }

    function NR() {
      UR = !1, WR = 0, xR(), jR()
    }

    function DR(RR) {
      return MR.add(RR), () => {
        MR.delete(RR)
      }
    }

    function HR(RR) {
      KR = !1, RR !== VR && (VR = RR, rR = !1, clearTimeout(fR), wR = !VR && CR, VR ? (nR = !1, UR = !1, WR = 0) : bR() && !CR && (UR = !0), CR = !1, VR && !bR() && QR(), TR(), wR && jR())
    }

    function oR(RR) {
      RR !== nR && (nR = RR, RR || jR())
    }

    function cR() {
      KR = !1, rR || !0 !== zR() || (rR = !0, clearTimeout(fR), fR = setTimeout(IR, eR))
    }

    function PR() {
      return (!KR || performance.now() - LR > aR) && (KR = (0, iR.E)().lockPointer(), LR = performance.now()), KR
    }

    function IR() {
      mR() && SR() && PR()
    }

    function mR() {
      return bR() && !VR && !nR && !(0, yR.j)()
    }

    function zR() {
      var RR;
      return "undefined" === typeof navigator || null === (RR = navigator.userActivation) || void 0 === RR ? void 0 : RR.isActive
    }

    function SR() {
      return wR && (!navigator.userAgent.includes("Firefox/") || Boolean(document.fullscreenElement)) || !1 !== zR()
    }

    function jR() {
      bR() ? mR() && !UR && SR() && PR() : VR && !CR && QR()
    }

    function dR() {
      UR ? navigator.vendor.startsWith("Apple") ? kR() : WR = AR : jR()
    }

    function ER() {
      WR > 0 && 0 === --WR && kR()
    }

    function YR() {
      WR = 0
    }

    function kR() {
      mR() && !0 === zR() && PR()
    }

    function QR() {
      CR = !0, (0, iR.E)().unlockPointer()
    }

    function FR() {
      KR = !1, wR = !1, rR = !1, clearTimeout(fR), nR = !1, UR = !1, WR = 0, CR = !1;
      const RR = VR;
      VR = !1, RR && TR()
    }

    function TR() {
      for (const RR of [...MR]) RR(VR);
      tR.n.JK("pointerLockUpdate", VR)
    }
  },
  42394: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => wR,
      f: () => qR,
      i: () => KR,
      l: () => fR,
      n: () => ZR,
      o: () => VR,
      r: () => iR
    });
    let yR = null,
      tR = null,
      uR = null;

    function ZR(RR) {
      yR = RR
    }

    function qR() {
      return yR
    }

    function iR(RR) {
      tR = RR
    }

    function fR() {
      return tR
    }

    function VR(RR) {
      uR = RR
    }

    function KR() {
      return uR
    }

    function wR() {
      var RR, JR;
      return !0 === (null === (RR = tR) || void 0 === RR || null === (JR = RR.currentViewer) || void 0 === JR ? void 0 : JR.inPlayback)
    }
  },
  42188: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => iR
    });
    var yR = GR(40983),
      tR = GR(37914);

    function uR(RR) {
      return {
        current: () => RR,
        watch: () => () => {}
      }
    }

    function ZR() {}
    const qR = Object.freeze([0, 0, 0]),
      iR = {
        states: {
          health: uR({
            health: null,
            maxHealth: null,
            shield: null,
            maxShield: null
          }),
          inventory: uR({
            player: [],
            chestOrCreative: [],
            chest: null,
            creative: !1,
            selectedSlot: 0,
            freeSlots: 0
          }),
          hotbar: uR({
            items: [],
            ammo: 0,
            selectedSlot: null
          }),
          stationItems: uR({
            enchantable: {},
            salvageable: {}
          }),
          itemInfo: uR({}),
          creativeVisibility: uR({
            publicLobby: !1,
            shownInGame: {}
          }),
          aura: uR(null),
          heldItemAim: uR({
            gun: !1,
            aimable: !1,
            chargeName: null
          }),
          crouching: uR(!1),
          gliderBoostFuel: uR(0),
          flight: uR({
            canFly: !1,
            flying: !1
          }),
          crafting: uR({
            focus: null,
            recipes: [],
            detail: null
          }),
          players: uR({
            ids: [],
            byId: {},
            localId: null
          }),
          lobbyLeaderboardRows: uR({}),
          fullInventory: uR(!1),
          crosshairTarget: uR({
            interactPrompt: null,
            blockText: null,
            neededTool: null
          }),
          localPlayerAlive: uR(!0),
          freeCamera: uR({
            allowed: !1,
            movesFly: !1
          }),
          replay: uR(null),
          replayEdits: uR(null),
          replayRecorder: uR(tR.b),
          replayVideoExporting: uR(!1)
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
          selectHotbarSlot: ZR,
          removeInventoryItem: () => !1,
          swapInventorySlots: () => !1,
          moveInventoryItem: () => !1,
          quickMoveInventoryItem: () => null,
          closeChest: ZR,
          setInventoryOpen: ZR,
          changeIronChestPasskey: ZR,
          dragReplayCamera: ZR,
          applyTemporaryThirdPerson: ZR,
          holdEmoteWheel: ZR,
          recordFlyingMiddleText: ZR,
          focusCrafting: ZR,
          craftRecipe: () => ({
            Uq: 0,
            RK: null,
            amountAddedToSlot: 0
          }),
          salvageItem: () => !1,
          enchantItem: ZR,
          setShopOpen: ZR,
          buyShopItem: ZR,
          lobbyManage: ZR,
          sendChatMessage: () => !1,
          ignorePlayer: ZR,
          reportPlayer: ZR,
          reportWorldCodeChat: ZR,
          requestDiscordReportKey: ZR,
          reportLobbyOrGame: ZR,
          playEmote: ZR,
          updateMyCosmetic: ZR,
          writeOnBoard: ZR,
          writeBook: ZR,
          writeNameTag: ZR,
          setCustomLobbyBlock: ZR,
          openIronChest: ZR,
          sendCodeCollab: ZR,
          clickCodeBlock: ZR,
          bindCustomButtonKeys: ZR,
          pressCustomButton: ZR,
          moveReplayFreecam: ZR,
          holdReplayFreecamVertical: ZR,
          respawn: ZR,
          wakeUp: ZR,
          requestLeaderboard: ZR,
          completeTask: ZR,
          setServerCookie: ZR,
          answerUiRequest: ZR,
          chooseRewardedAd: ZR,
          setCameraZoom: ZR,
          setFreeCameraMovesFly: ZR,
          setBlockHighlight: ZR,
          setCrosshairInteractPrompt: ZR,
          setLookSensitivity: ZR,
          replayAction: ZR,
          setReplayPlaying: ZR,
          seekReplay: ZR,
          setReplayCameraMode: ZR,
          syncReplayCameraMode: ZR,
          setReplayCameraKeyframe: ZR,
          moveReplayCameraKeyframe: ZR,
          deleteReplayCameraKeyframes: ZR,
          setReplayPlaybackMark: ZR,
          cropReplay: () => !1,
          holdReplayForShaderPackFailure: ZR,
          exportReplayVideo: ZR,
          toggleRecording: ZR,
          saveClip: ZR,
          setRecorderPrefs: ZR,
          setReplayViewerOpen: ZR
        },
        queries: {
          enchantingOffer: () => ({
            perks: [],
            options: []
          }),
          worldCodeAiChunk: () => yR.b,
          worldCodeAiGameState: () => yR.e
        },
        lookups: {
          localPos: () => qR,
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
  42194: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => ZR,
      g: () => uR,
      h: () => tR
    });
    let yR = null;

    function tR(RR) {
      yR = RR
    }

    function uR(RR) {
      yR === RR && (yR = null)
    }

    function ZR() {
      var RR;
      null === (RR = yR) || void 0 === RR || RR()
    }
  },
  37789: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => VR,
      d: () => wR,
      h: () => nR,
      i: () => fR
    });
    var yR = GR(25),
      tR = GR(3428),
      uR = GR(3437),
      ZR = GR(3441),
      qR = GR(3593),
      iR = GR(32);

    function fR(RR, JR) {
      return (!(0, ZR.d)() || 0 === RR && 0 === JR) && (0, uR.z)(tR.j.Joystick, 0, RR, JR, 0)
    }
    const VR = {
      Action1: 1,
      Action2: 2,
      Action3: 3,
      Attack: 4,
      Use: 5,
      Interact: 6,
      Boost: 7
    };

    function KR(RR) {
      return RR.classList.contains("TouchKeyHit") && rR() ? null : RR.firstElementChild
    }

    function wR(RR) {
      return RR.classList.contains("TouchKeyHit") && !RR.classList.contains("CanvasZone") ? {
        whole: !rR(),
        keyBox: null
      } : {
        whole: !1,
        keyBox: eR(KR(RR))
      }
    }

    function rR() {
      return document.documentElement.classList.contains(qR.m)
    }

    function eR(RR) {
      return !(RR instanceof HTMLElement) || RR.offsetWidth <= 0 || RR.offsetHeight <= 0 ? null : {
        width: RR.offsetWidth,
        height: RR.offsetHeight
      }
    }

    function aR(RR, JR) {
      const GR = RR => Math.min(65535, Math.round(4 * RR));
      return (GR(RR) | GR(JR) << 16) >>> 0
    }

    function LR(RR) {
      return {
        x: RR.left + RR.width / 2,
        y: RR.top + RR.height / 2,
        radius: Math.min(RR.width, RR.height) / 2
      }
    }
    const nR = new class {
      constructor(RR) {
        this.write = RR, this.elements = new Map, this.canvasLeft = 0, this.canvasTop = 0
      }
      set(RR, JR) {
        let GR = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        JR ? this.elements.set(RR, {
          element: JR,
          hidden: GR
        }) : this.elements.delete(RR), this.measureOne(RR)
      }
      measure() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
          left: this.canvasLeft,
          top: this.canvasTop
        };
        this.canvasLeft = RR.left, this.canvasTop = RR.top;
        for (const JR of this.elements.keys()) this.measureOne(JR)
      }
      hitZone(RR, JR) {
        let GR = null,
          yR = 1;
        for (const tR of this.elements.keys()) {
          const uR = this.shown(tR);
          if (!uR) continue;
          const {
            rect: ZR,
            element: qR
          } = uR, iR = LR(ZR), fR = Math.max(0, ZR.width / 2 - iR.radius), VR = Math.max(0, ZR.height / 2 - iR.radius), wR = Math.max(0, Math.abs(RR - iR.x) - fR), rR = Math.max(0, Math.abs(JR - iR.y) - VR), aR = qR.firstElementChild;
          let nR = Math.hypot(wR, rR) / iR.radius;
          const UR = eR(KR(qR));
          UR && (nR = Math.min(nR, Math.max(2 * Math.abs(RR - iR.x) / UR.width, 2 * Math.abs(JR - iR.y) / UR.height))), nR < yR && (GR = {
            code: tR,
            element: qR,
            key: aR,
            ...iR
          }, yR = nR)
        }
        return GR
      }
      measureOne(RR) {
        const JR = this.shown(RR);
        if (!JR) return void this.write(tR.j.TouchZone, RR, 0, 0, 0);
        const {
          rect: GR,
          element: yR
        } = JR, uR = LR(GR);
        this.write(tR.j.TouchZone, RR, uR.x - this.canvasLeft, uR.y - this.canvasTop, aR(GR.width, GR.height));
        const ZR = eR(KR(yR));
        this.write(tR.j.TouchZone, 256 | RR, 0, 0, ZR ? aR(ZR.width, ZR.height) : 0)
      }
      shown(RR) {
        const JR = this.elements.get(RR),
          GR = yR.d.get("worldPanelHud");
        if (!JR || JR.hidden || "none" === GR) return null;
        const tR = JR.element.getBoundingClientRect();
        return tR.width <= 0 || tR.height <= 0 ? null : {
          rect: tR,
          element: JR.element
        }
      }
    }(uR.z);
    (0, iR.q)(qR.h, (() => {
      nR.measure()
    }))
  },
  42402: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => iR,
      f: () => fR
    });
    var yR = GR(42411),
      tR = GR(40304),
      uR = GR(37616),
      ZR = GR(42281),
      qR = GR(42329);
    const iR = yR.b.timeForPlayerToConnect - 1e4;
    async function fR(RR, JR, GR, yR) {
      let iR;
      try {
        iR = await RR.getTrafficCode()
      } catch (eR) {
        throw console.error("[bloxd-wasm-client] could not get a traffic code", eR), new qR.z(eR)
      }
      const {
        gameNameWithVariation: fR,
        lobbyName: VR
      } = JR, KR = () => {
        const JR = (0, uR.g)(RR, fR, VR, iR, (RR => {
          var JR;
          return null !== (JR = null === GR || void 0 === GR ? void 0 : GR.isUsingCustomGameTexturePack(RR)) && void 0 !== JR && JR
        }));
        JR.joinOptions.wasmClient = !0;
        const tR = (0, ZR.M)();
        return null !== tR && (JR.joinOptions.renderBackend = tR), JR.joinOptions.joinAdHold = yR, JR
      }, {
        roomName: wR,
        joinOptions: rR
      } = KR();
      return {
        endpoint: JR.endpoint,
        roomName: wR,
        joinOptions: rR,
        session: {
          gameNameWithVariation: fR,
          lobbyName: VR,
          playerDbId: RR.whamm
        },
        optionsAfterRefusal: async JR => await (0, tR.c)(RR, JR) ? KR().joinOptions : null
      }
    }
  },
  6103: (RR, JR, GR) => {
    function yR(RR, JR) {
      return tR(RR, JR)
    }

    function tR(RR, JR) {
      if (RR === JR) return !0;
      if ("object" !== typeof RR || "object" !== typeof JR || null === RR || null === JR || Array.isArray(RR) !== Array.isArray(JR)) return !1;
      const GR = RR,
        yR = JR,
        uR = Object.keys(GR);
      return uR.length === Object.keys(yR).length && uR.every((RR => Object.prototype.hasOwnProperty.call(yR, RR) && tR(GR[RR], yR[RR])))
    }
    GR.d(JR, {
      d: () => yR
    })
  },
  42451: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => XR,
      h: () => AR,
      j: () => aR,
      k: () => eR
    });
    var yR = GR(2023),
      tR = GR(1295),
      uR = GR(40295),
      ZR = GR(37640),
      qR = GR(40317),
      iR = GR(42329);
    const fR = {
        "X-Requested-With": "XMLHtttpRequest"
      },
      VR = 3,
      KR = [500, 1500];

    function wR(RR) {
      const JR = new URL(RR);
      return {
        secure: "https:" === JR.protocol || "wss:" === JR.protocol,
        host: JR.host,
        pathname: JR.pathname.replace(/\/+$/, ""),
        search: JR.searchParams.toString()
      }
    }

    function rR(RR, JR, GR) {
      const {
        secure: yR,
        host: tR,
        pathname: uR,
        search: ZR
      } = wR(RR);
      return `${yR?"https":"http"}://${tR}${uR}/matchmake/${JR}/${encodeURIComponent(GR)}${ZR?`?${ZR}`:""}`
    }

    function eR(RR, JR) {
      var GR;
      const yR = null !== (GR = JR.protocol) && void 0 !== GR ? GR : "ws";
      if ("ws" !== yR) throw new Error(`seat reservation asks for the ${yR} transport`);
      const {
        secure: tR,
        host: uR,
        pathname: ZR,
        search: qR
      } = wR(RR), iR = new URLSearchParams(qR);
      iR.append("sessionId", JR.sessionId), JR.reconnectionToken && iR.append("reconnectionToken", JR.reconnectionToken);
      return `${tR?"wss":"ws"}://${JR.room.publicAddress||`${uR}${ZR}`}/${JR.room.processId}/${JR.room.roomId}?${iR.toString()}`
    }
    async function aR(RR, JR, GR) {
      var qR;
      let fR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const wR = null !== (qR = fR.sleep) && void 0 !== qR ? qR : yR.b,
        eR = new tR.d(fR.signal),
        aR = new ZR.d((() => {
          (0, tR.k)(eR.controller, new ZR.g("seat"))
        })),
        {
          signal: WR
        } = eR;
      try {
        const yR = await (0, uR.h)((() => async function(RR, JR, GR, yR) {
          var uR;
          const {
            signal: ZR,
            sleep: qR
          } = yR, fR = rR(RR, "joinOrCreate", JR), wR = JSON.stringify(GR);
          let eR = null;
          for (let rR = 0; rR < VR; rR++) {
            var aR;
            if (rR > 0) await qR(null !== (aR = KR[rR - 1]) && void 0 !== aR ? aR : 1500, ZR);
            let RR;
            (0, tR.r)(ZR);
            try {
              RR = await nR(fR, wR, yR)
            } catch (WR) {
              (0, tR.r)(ZR), eR = LR(WR);
              continue
            }
            const {
              response: JR,
              answer: GR,
              refusal: uR,
              lost: VR
            } = RR;
            if (null === VR) {
              if (null !== uR) throw UR(uR, GR);
              if (JR.ok && null !== GR && MR(GR)) return GR;
              eR = new iR.v(`seat request answered HTTP ${JR.status}${null===GR?" without JSON":" without a seat"}`, !1, void 0, JR.status)
            } else eR = LR(VR.error)
          }
          throw null !== (uR = eR) && void 0 !== uR ? uR : new iR.v("seat request made no attempt", !1)
        }(RR, JR, GR, {
          ...fR,
          signal: WR,
          sleep: wR
        })), WR, wR);
        return aR.answered(), yR
      } finally {
        aR.stop(), eR.unfollow()
      }
    }

    function LR(RR) {
      return new iR.v(RR instanceof Error ? RR.message : String(RR), !0, RR)
    }
    async function nR(RR, JR, GR) {
      var yR;
      const {
        signal: uR
      } = GR, ZR = null !== (yR = GR.fetch) && void 0 !== yR ? yR : fetch, qR = await ZR(RR, {
        method: "POST",
        headers: {
          ...fR,
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JR,
        credentials: "include",
        signal: uR
      }), {
        answer: iR,
        lost: VR
      } = await async function(RR) {
        try {
          const JR = await RR.json();
          return {
            answer: "object" === typeof JR && null !== JR ? JR : null,
            lost: null
          }
        } catch (JR) {
          return {
            answer: null,
            lost: JR instanceof SyntaxError ? null : {
              error: JR
            }
          }
        }
      }(qR), KR = null !== iR && "string" === typeof iR.error ? iR.error : null;
      var wR;
      null !== KR && (null === (wR = GR.onRefusal) || void 0 === wR || wR.call(GR));
      return (0, tR.r)(uR), {
        response: qR,
        answer: iR,
        refusal: KR,
        lost: VR
      }
    }

    function UR(RR, JR) {
      return new iR.m(RR, "number" === typeof(null === JR || void 0 === JR ? void 0 : JR.code) ? JR.code : 0, (0, qR.h)(RR).text)
    }
    class WR extends Error {
      constructor(RR, JR) {
        super(RR), this.code = JR, this.name = "SeatHttpError"
      }
    }
    async function AR(RR, JR, GR) {
      let yR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const {
        response: tR,
        answer: uR,
        refusal: ZR,
        lost: qR
      } = await nR(rR(RR, "reconnect", JR), JSON.stringify({
        reconnectionToken: GR
      }), yR);
      if (null !== qR) throw qR.error;
      if (!tR.ok) {
        const RR = null !== uR && "number" === typeof uR.code && 0 !== uR.code ? uR.code : tR.status;
        throw new WR(`the seat's reconnect was refused: ${null!==ZR&&void 0!==ZR?ZR:`HTTP ${tR.status}`}`, RR)
      }
      if (null !== ZR) throw UR(ZR, uR);
      if (null === uR || !MR(uR)) throw new Error("the seat's reconnect answered " + (null === uR ? "without JSON" : "without a seat"));
      return {
        ...uR,
        reconnectionToken: GR
      }
    }
    const CR = 10;

    function XR(RR) {
      if (RR.byteLength < 2 || RR[0] !== CR) return null;
      const JR = 2 + RR[1];
      return JR > RR.byteLength ? null : (new TextDecoder).decode(RR.subarray(2, JR))
    }

    function MR(RR) {
      const JR = RR.room;
      return "string" === typeof RR.sessionId && "object" === typeof JR && null !== JR && "string" === typeof JR.roomId && "string" === typeof JR.processId && "string" === typeof JR.name
    }
  },
  42126: (RR, JR, GR) => {
    GR.d(JR, {
      D: () => MR,
      F: () => vR,
      I: () => AR,
      M: () => CR,
      N: () => LR,
      O: () => pR,
      Q: () => xR,
      T: () => eR,
      U: () => DR,
      Y: () => UR,
      Z: () => nR,
      bb: () => WR,
      cb: () => XR,
      d: () => tR,
      g: () => NR,
      k: () => OR,
      m: () => rR,
      q: () => aR,
      s: () => bR,
      w: () => BR,
      y: () => gR,
      z: () => lR
    });
    var yR = GR(2989);
    const tR = {
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

    function uR(RR, JR) {
      return !ArrayBuffer.isView(RR) || RR instanceof DataView ? Array.isArray(RR) ? RR.map((RR => JR(RR))) : RR : Array.from(RR, (RR => JR(RR)))
    }

    function ZR(RR) {
      if ("string" !== typeof RR) return RR;
      for (let JR = 0; JR < RR.length; JR++) {
        const GR = RR.charCodeAt(JR);
        if (GR >= 55296 && GR <= 57343) return iR.decode(qR.encode(RR))
      }
      return RR
    }
    const qR = new TextEncoder,
      iR = new TextDecoder;

    function fR(RR) {
      return RR
    }
    let VR;

    function KR(RR) {
      return null === RR || "object" !== typeof RR ? RR : [ZR(RR.policy), ZR(RR.Kq)]
    }

    function wR(RR) {
      return null === RR || "object" !== typeof RR ? RR : [uR(RR.Ft, fR), uR(RR.Ji, fR)]
    }

    function rR(RR) {
      return null === (JR = RR) || "object" !== typeof JR ? JR : [ZR(JR.LZ), ZR(JR.nZ)];
      var JR
    }

    function eR(RR) {
      return null === (JR = RR) || "object" !== typeof JR ? JR : [JR.id, JR.wV];
      var JR
    }

    function aR(RR) {
      return null === (JR = RR) || "object" !== typeof JR ? JR : [JR.bG, ZR(JR.vG), JR.OG, ZR(JR.DG), JR.PG, JR.IG, JR.rZ, ZR(JR.eZ), ZR(JR.aZ)];
      var JR
    }

    function LR(RR) {
      return null === (JR = RR) || "object" !== typeof JR ? JR : [uR(JR.fq, fR), JR.Vq];
      var JR
    }

    function nR(RR) {
      return null === (JR = RR) || "object" !== typeof JR ? JR : [uR(JR.CV, (RR => ZR(RR))), ZR(JR.XV), JR.MV];
      var JR
    }

    function UR(RR) {
      return null === (JR = RR) || "object" !== typeof JR ? JR : [uR(JR.ti, fR), ZR(JR.ui), ZR(JR.Zi), JR.qi];
      var JR
    }

    function WR(RR) {
      return null === (JR = RR) || "object" !== typeof JR ? JR : [ZR(JR.ft), ZR(JR.Vt)];
      var JR
    }

    function AR(RR) {
      return null === (JR = RR) || "object" !== typeof JR ? JR : [ZR(JR.wq)];
      var JR
    }

    function CR(RR) {
      return ZR(RR)
    }

    function XR(RR) {
      return null === (JR = RR) || "object" !== typeof JR ? JR : [ZR(JR.PV), ZR(JR.IV), ZR(JR.policy), ZR(JR.Kq), uR(JR.mV, (RR => ZR(RR)))];
      var JR
    }

    function MR(RR) {
      return KR(RR)
    }

    function BR(RR) {
      return KR(RR)
    }

    function lR(RR) {
      return null === (JR = RR) || "object" !== typeof JR ? JR : [ZR(JR.fV)];
      var JR
    }

    function pR(RR) {
      return RR
    }

    function gR(RR) {
      return null === (JR = RR) || "object" !== typeof JR ? JR : [ZR(JR.WV), ZR(JR.AV)];
      var JR
    }

    function bR(RR) {
      return ZR(RR)
    }

    function vR(RR) {
      return wR(RR)
    }

    function OR(RR) {
      return wR(RR)
    }

    function xR(RR) {
      return null === (JR = RR) || "object" !== typeof JR ? JR : [ZR(JR.GV)];
      var JR
    }

    function NR(RR) {
      return (VR ??= (0, yR.e)().map((RR => RR.name)), VR).map((JR => {
        return "string" === typeof(GR = RR[JR]) ? ZR(GR) : uR(GR, fR);
        var GR
      }))
    }

    function DR(RR) {
      return null === (JR = RR) || "object" !== typeof JR ? JR : [JR.XZ, JR.MZ, JR.BZ];
      var JR
    }
  },
  6101: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => ZR,
      c: () => qR
    });
    var yR = GR(2374),
      tR = GR(6103);
    let uR = null;

    function ZR(RR) {
      uR = {
        pack: RR.metaData.id === yR.e ? null : RR
      }
    }

    function qR(RR) {
      return !(null === uR || !(0, tR.d)(uR.pack, RR)) && (uR = null, !0)
    }
  },
  42387: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      followPageUiPack: () => mK,
      packForGame: () => IK,
      playWasmGame: () => hK,
      prefetchWasmPreviews: () => lf,
      setGamePackConfirm: () => dV,
      startWasmPlay: () => EK,
      startWasmPreviews: () => Bf
    });
    var yR = GR(203),
      tR = GR(1341),
      uR = GR(163),
      ZR = GR(40333),
      qR = GR(2134),
      iR = GR(32),
      fR = GR(5536),
      VR = GR(1444),
      KR = GR(1921),
      wR = GR(1449),
      rR = GR(40525),
      eR = GR(1397),
      aR = GR(10336),
      LR = GR(188),
      nR = GR(4035),
      UR = GR(2011),
      WR = GR(4066);
    let AR = null,
      CR = null,
      XR = null,
      MR = !1,
      BR = "previews",
      lR = null,
      pR = !1,
      gR = 0;

    function bR(RR) {
      BR = RR
    }

    function vR(RR) {
      var JR;
      const GR = RR instanceof Error ? RR.name : null;
      return null !== (JR = LR.b.find((RR => RR === GR))) && void 0 !== JR ? JR : "other"
    }

    function OR() {
      AR ??= performance.now()
    }

    function xR(RR) {
      CR ??= performance.now(), lR = RR, gR > 0 && NR()
    }

    function NR() {
      null !== CR && null !== lR && (0, eR.y)("wasm_loaded", CR, `${lR}:${(0,nR.n)()}`)
    }
    const DR = {
      ready: () => {
        UR.d.markAdmissionAwaited()
      },
      adEnded: () => {
        UR.d.markJoinAdEnded()
      },
      admitted: () => {
        UR.d.markAdmitted()
      }
    };
    var HR = GR(40534),
      oR = GR(40455),
      cR = GR(37620),
      PR = GR(1647),
      IR = GR(40295),
      mR = GR(10298),
      zR = GR(37640),
      SR = GR(42394),
      jR = GR(5665),
      dR = GR(42118),
      ER = GR(42188),
      YR = GR(42126);
    const kR = {
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

    function QR(RR) {
      const JR = {
        ...ER.c[RR]
      };
      for (const GR of Object.keys(kR[RR])) delete JR[GR];
      return JR
    }

    function FR() {
      var RR, JR;
      return null === (RR = null === (JR = (0, dR.l)()) || void 0 === JR ? void 0 : JR.localPlayerAlive()) || void 0 === RR || RR
    }

    function TR() {
      var RR, JR;
      return null !== (RR = null === (JR = (0, dR.l)()) || void 0 === JR ? void 0 : JR.localDeaths()) && void 0 !== RR ? RR : null
    }
    const sR = {
        current: FR,
        watch: RR => {
          let JR = FR(),
            GR = TR();
          return (0, jR.r)((() => {
            const yR = FR(),
              tR = TR(),
              uR = null !== tR && null !== GR && tR !== GR;
            GR = tR, uR ? (JR || RR(!0), RR(!1), yR && RR(!0), JR = yR) : yR !== JR && (JR = yR, RR(yR))
          }))
        }
      },
      hR = {
        states: {
          ...QR("states"),
          localPlayerAlive: sR
        },
        events: {
          ...QR("events"),
          localPlayerAliveSet: {
            watch: sR.watch
          }
        },
        commands: {
          ...QR("commands"),
          respawn: () => {
            var RR;
            null === (RR = (0, dR.l)()) || void 0 === RR || RR.respawn()
          },
          playEmote: RR => {
            var JR;
            null === (JR = (0, dR.l)()) || void 0 === JR || JR.send(YR.d.PlayEmote, (0, YR.I)({
              wq: RR
            }))
          },
          applyTemporaryThirdPerson: RR => {
            var JR;
            let {
              durationMs: GR
            } = RR;
            null === (JR = (0, dR.l)()) || void 0 === JR || JR.thirdPersonFor(GR)
          },
          bindCustomButtonKeys: RR => {
            var JR;
            null === (JR = (0, dR.l)()) || void 0 === JR || JR.bindCustomButtonKeys(RR)
          },
          pressCustomButton: RR => {
            var JR;
            let {
              id: GR,
              down: yR
            } = RR;
            null === (JR = (0, dR.l)()) || void 0 === JR || JR.pressCustomButton(GR, yR)
          },
          setLookSensitivity: () => {},
          wakeUp: RR => {
            const JR = (0, YR.Q)({
                GV: RR
              }),
              GR = () => {
                const RR = (0, dR.l)();
                return !(null !== RR && void 0 !== RR && RR.isSessionLive) || RR.send(YR.d.StopSleeping, JR)
              };
            if (!GR()) {
              const RR = (0, jR.r)((() => {
                GR() && RR()
              }))
            }
          },
          setCameraZoom: RR => {
            var JR;
            null === (JR = (0, dR.l)()) || void 0 === JR || JR.setCameraZoom(RR)
          }
        },
        queries: QR("queries"),
        lookups: {
          ...QR("lookups"),
          cameraZoom: () => {
            var RR, JR;
            return null !== (RR = null === (JR = (0, dR.l)()) || void 0 === JR ? void 0 : JR.cameraZoom()) && void 0 !== RR ? RR : 0
          }
        }
      };
    var RJ = GR(40317),
      JJ = GR(42329),
      GJ = GR(42331),
      yJ = GR(42402),
      tJ = GR(1349),
      uJ = GR(112),
      ZJ = GR(5326),
      qJ = GR(2491),
      iJ = GR(1249);
    const fJ = {
      Iq: () => (0, tJ.g)(),
      inbuiltOverwritten: () => ZJ.f,
      reflectApplyHit: () => iJ.b,
      definerHit: () => uJ.currentUrl.c,
      emitReplaced: () => (0, iR.e)(),
      confirmMesh: () => (0, qJ.d)(),
      confirmMeshHitStack: () => (0, qJ.g)()
    };
    var VJ = GR(42335),
      KJ = GR(42420);
    var wJ = GR(25),
      rJ = GR(2137),
      eJ = GR(2194),
      aJ = GR(1803),
      LJ = GR(2234),
      nJ = GR(1270),
      UJ = GR(1343),
      WJ = GR(37362);

    function AJ() {
      return UJ.g.get().getCurrentLanguageCode()
    }

    function CJ(RR) {
      const JR = () => {
        RR({
          translate: (RR, JR) => (0, nJ.u)(AJ(), RR, JR),
          keyBindingText: RR => {
            const JR = (0, eJ.q)(RR, wJ.d.get("isTouchScreen"));
            return null !== JR ? (0, nJ.w)(AJ(), JR.translationKey, JR.params) : (0, eJ.m)((0, eJ.n)(RR))
          },
          isFriend: LJ.e,
          hiddenNames: rJ.e.shown,
          loadsFontRest: (0, WJ.c)(AJ())
        })
      };
      let GR = !1;
      const yR = () => {
          const RR = AJ();
          (0, nJ.k)(RR).then((() => {
            GR || RR !== AJ() || JR()
          }))
        },
        tR = () => aJ.e.getSocialState().friends.map((RR => RR.name.toLowerCase())).sort().join(" ");
      let uR = tR();
      JR(), yR();
      const ZR = [(0, UJ.i)((() => {
        JR(), yR()
      })), (0, iR.q)("customBindingsChanged", JR), (0, iR.q)("appManagerUpdated|isTouchScreen", JR), (0, LJ.b)((() => {
        const RR = tR();
        RR !== uR && (uR = RR, JR())
      })), rJ.e.subscribe(JR)];
      return () => {
        GR = !0;
        for (const RR of ZR) RR()
      }
    }
    var XJ = GR(1275),
      MJ = GR(5250),
      BJ = GR(37958);
    const lJ = {
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
      wasmScreens: XJ.wasmScreens
    };
    let pJ = null;

    function gJ(RR) {
      let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return null === pJ ? function(RR) {
        var JR, GR;
        let yR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const [tR, uR] = RR.split(":"), ZR = null !== (JR = null === (GR = lJ[tR]) || void 0 === GR ? void 0 : GR[uR]) && void 0 !== JR ? JR : RR;
        return ZR.replace(/\{\{(\w+)\}\}/g, ((RR, JR) => {
          var GR;
          return null !== (GR = yR[JR]) && void 0 !== GR ? GR : RR
        }))
      }(RR, JR) : pJ(RR, JR)
    }

    function bJ(RR, JR) {
      (0, MJ.c)();
      const GR = document.createElement("div");
      GR.setAttribute("role", "alertdialog"), GR.style.cssText = "position:fixed;top:0;right:0;bottom:0;left:0;z-index:100;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,0.7);font:16px sans-serif;color:#fff";
      const yR = document.createElement("div");
      yR.style.cssText = "max-width:28rem;padding:1.5rem;background:#1c2333;text-align:center";
      const tR = document.createElement("h2");
      tR.textContent = gJ(RR.title);
      const uR = document.createElement("p");
      if (uR.textContent = gJ(RR.help, RR.helpValues), uR.style.whiteSpace = "pre-line", yR.append(tR, uR), RR.discordLink) {
        const RR = document.createElement("a");
        RR.href = BJ.d, RR.target = "_blank", RR.rel = "noreferrer", RR.style.color = "#8ab4ff", RR.textContent = gJ("wasmScreens:reportOnDiscord"), yR.append(RR)
      }
      const ZR = document.createElement("div");
      return ZR.style.cssText = "display:flex;gap:1rem;justify-content:center;margin-top:1.5rem", yR.append(ZR), GR.append(yR), document.body.append(GR), new Promise((yR => {
        const tR = RR => {
            null === JR || void 0 === JR || JR.removeEventListener("abort", uR), GR.remove(), yR(RR)
          },
          uR = () => {
            tR(!1)
          };
        null === JR || void 0 === JR || JR.addEventListener("abort", uR, {
          once: !0
        });
        const qR = (RR, JR) => {
          const GR = document.createElement("button");
          GR.textContent = gJ(RR), GR.style.cssText = "padding:0.5rem 1.25rem;font:inherit", GR.addEventListener("click", (() => {
            tR(JR)
          })), ZR.append(GR)
        };
        null !== RR.cancel && qR(RR.cancel, !1), qR(RR.confirm, !0)
      }))
    }
    var vJ = GR(10285),
      OJ = GR(688),
      xJ = GR(1127),
      NJ = GR(2167),
      DJ = GR(359),
      HJ = GR(2448),
      oJ = GR(37213),
      cJ = GR(2457),
      PJ = GR(39956),
      IJ = GR(5554),
      mJ = GR(42212),
      zJ = GR(743),
      SJ = GR(709),
      jJ = GR(741),
      dJ = GR(4088),
      EJ = GR(2163),
      YJ = GR(2500),
      kJ = GR(4546);
    let QJ = null;
    var FJ = GR(1282),
      TJ = GR(1295),
      sJ = GR(2023),
      hJ = GR(5180),
      RG = GR(5227),
      JG = GR(4769),
      GG = GR(62),
      yG = GR(350),
      tG = GR(342),
      uG = GR(35051),
      ZG = GR(327),
      qG = GR(42423),
      iG = GR(5671),
      fG = GR(5201);
    var VG = GR(5207),
      KG = GR(46);

    function wG(RR) {
      let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => document.createElement("canvas");
      try {
        var GR;
        const yR = JR(),
          tR = RR ? yR.getContext("webgl") : yR.getContext("webgl2");
        return null !== tR && (null === (GR = tR.getExtension("WEBGL_lose_context")) || void 0 === GR || GR.loseContext(), !0)
      } catch {
        return !1
      }
    }
    var rG = GR(1825);
    var eG = GR(38861),
      aG = GR(42430);
    class LG {
      constructor(RR, JR, GR) {
        this.showView = RR, this.holdForAd = JR, this.render = GR
      }
      pointerUnlockRequestsChanged() {
        (0, qG.E)()
      }
      pointerLockDebugEntries() {
        return [{
          label: "Locked to the canvas",
          value: String((0, qG.t)())
        }]
      }
      setGameViewShown(RR) {
        this.showView(RR)
      }
      setGameView(RR) {
        (0, aG.m)(RR)
      }
      videoAdHold(RR, JR) {
        this.holdForAd(RR, JR)
      }
      gameRender() {
        return this.render()
      }
    }
    class nG {
      leave(RR) {
        ! function(RR) {
          if (null !== (0, wR.d)().websocketUrl) try {
            (0, jR.E)().leaveGame(RR)
          } finally {
            (0, wR.s)({
              websocketUrl: null
            })
          }
        }(RR)
      }
      isReplay() {
        return !1
      }
    }
    class UG {
      constructor(RR) {
        this.workMs = RR
      }
      watchFrameStarts(RR) {
        return (0, jR.m)(RR)
      }
      watchFrames(RR) {
        return (0, jR.k)(RR)
      }
      watchTicks(RR) {
        return (0, jR.r)(RR)
      }
      frameWorkMs() {
        return this.workMs()
      }
    }
    var WG = GR(42374),
      AG = GR(42435);

    function CG(RR) {
      return RR >= 0 ? Math.min(1, RR) : 0
    }

    function XG(RR, JR) {
      const {
        fade: GR
      } = RR;
      return null === GR || JR - GR.at >= GR.ms ? RR.volume : GR.from + (RR.volume - GR.from) * Math.max(0, (JR - GR.at) / GR.ms)
    }

    function MG(RR) {
      const JR = Object.entries(RR),
        GR = new Uint32Array(JR.length);
      let yR = 0;
      for (const [ZR, [, qR]] of JR.entries()) GR[ZR] = qR.length, yR += qR.length;
      const tR = new Float64Array(3 * yR);
      let uR = 0;
      for (const [, ZR] of JR)
        for (const RR of ZR) tR.set(RR, uR), uR += 3;
      return {
        blocks: JR.map((RR => {
          let [JR] = RR;
          return JR
        })).join("\0"),
        counts: GR,
        values: tR
      }
    }
    class BG {
      constructor(RR, JR) {
        this.core = RR, this.warn = JR, this.latest = 0
      }
      async feed() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : lG;
        const JR = ++this.latest;
        let GR;
        try {
          GR = await RR()
        } catch (yR) {
          return void(this.core.isStopped || JR !== this.latest || this.warn("the block colours didn't load, so block particles draw grey", yR))
        }
        JR === this.latest && (this.core.setBlockColours(GR) || this.core.isStopped || this.warn("the core refused the block colours: block particles draw grey"))
      }
    }
    async function lG() {
      return MG((await GR.e(234).then((() => GR(35257)))).averageColors)
    }
    var pG = GR(5676),
      gG = GR(5685),
      bG = GR(42170),
      vG = GR(4500),
      OG = GR(37169),
      xG = GR(42283),
      NG = GR(671),
      DG = GR(38166),
      HG = GR(664),
      oG = GR(377),
      cG = GR(42239);
    const PG = [3e4, 12e4, 3e5];
    class IG extends Error {}
    const mG = {
      mobTypes: NG.l,
      vehicleTypes: DG.b,
      mobAiStates: NG.k,
      playerPoses: HG.n
    };
    var zG = GR(42230),
      SG = GR(42259),
      jG = GR(42310),
      dG = GR(1406),
      EG = GR(4026),
      YG = GR(42444),
      kG = GR(42449),
      QG = GR(2513),
      FG = GR(40285),
      TG = GR(5699),
      sG = GR(3428);
    const hG = sG.C.KeysDisabled | sG.C.LookFrozen | sG.C.ClicksSuppressed,
      Ry = QG.m;
    var Jy = (0, kG.c)("resumingConn");
    class Gy {
      constructor(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.shell = RR, this.now = JR, this.session = void 0, this.attempt = null, this.landed = null, this.initialInfoConn = 0, this.initialInfoOffer = !1, this.completedEarlyConn = 0, Object.defineProperty(this, Jy, {
          writable: !0,
          value: 0
        }), this.drops = 0, this.session = new FG.c({
          reconnect: RR => this.reconnect(RR),
          isLive: () => RR.isLive(),
          onReconnected: JR => {
            this.landed = JR, RR.onReconnected(JR), this.landIfResumed()
          },
          onGaveUp: (JR, GR) => {
            this.abortAttempt(), RR.onGaveUp(JR, GR)
          },
          freeze: JR => {
            RR.kN(JR), (0, TG.i)(hG, JR ? hG : 0, "reconnectFreeze")
          },
          releaseSeat: RR => {
            this.releaseSeat(RR)
          }
        })
      }
      isResuming() {
        return this.session.isResuming()
      }
      get resumingConn() {
        return (0, YG.e)(this, Jy)[Jy]
      }
      canHoldSeat() {
        return this.session.canHoldSeat()
      }
      onInitialInfo(RR) {
        let {
          conn: JR,
          graceMs: GR,
          sessionBased: yR,
          replayOffer: tR
        } = RR;
        this.session.onInitialInfo(GR, yR), this.isResuming() && (this.initialInfoConn = JR, this.initialInfoOffer = tR, this.landIfResumed())
      }
      onResumeComplete(RR) {
        0 !== RR && (RR === (0, YG.e)(this, Jy)[Jy] ? ((0, YG.e)(this, Jy)[Jy] = 0, this.session.onResumed()) : this.isResuming() && (this.completedEarlyConn = RR))
      }
      onDropped(RR) {
        this.drops++, this.landed = null, this.initialInfoConn = 0, this.initialInfoOffer = !1, this.completedEarlyConn = 0, (0, YG.e)(this, Jy)[Jy] = 0, this.session.onConnectionLost(RR)
      }
      leave() {
        this.session.leave(), this.dispose()
      }
      dispose() {
        this.abortAttempt(), this.landed = null, this.completedEarlyConn = 0, (0, YG.e)(this, Jy)[Jy] = 0, this.session.end()
      }
      reconnect(RR) {
        const JR = this.attempt;
        if (null !== JR && this.awaitingJoinRoom(JR)) return JR.result;
        this.abortAttempt();
        const GR = new AbortController,
          yR = this.drops,
          tR = {
            attachedAt: null
          },
          uR = this.shell.reconnect(RR, GR.signal, (() => {
            tR.attachedAt = this.now()
          })).then((RR => {
            if (this.clearAttempt(ZR), this.drops !== yR) throw new Error("the resumed room dropped before its attempt settled");
            return RR
          }), (RR => {
            throw this.clearAttempt(ZR), RR
          })),
          ZR = {
            abort: GR,
            socket: tR,
            result: uR
          };
        return this.attempt = ZR, uR
      }
      clearAttempt(RR) {
        this.attempt === RR && (this.attempt = null)
      }
      abortAttempt() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new DOMException("the reconnect attempt was given up", "AbortError");
        const JR = this.attempt;
        this.attempt = null, null === JR || void 0 === JR || JR.abort.abort(RR)
      }
      awaitingJoinRoom(RR) {
        const JR = RR.socket.attachedAt;
        return null !== JR && this.now() - JR < Ry
      }
      releaseSeat(RR) {
        const JR = this.attempt,
          GR = null !== JR && this.awaitingJoinRoom(JR);
        this.abortAttempt(new JJ.s), GR || this.shell.releaseSeat(RR)
      }
      landIfResumed() {
        const RR = this.landed;
        if (null !== RR && RR.conn === this.initialInfoConn) {
          const JR = this.initialInfoOffer && this.completedEarlyConn !== RR.conn;
          if (this.landed = null, this.initialInfoConn = 0, this.initialInfoOffer = !1, this.completedEarlyConn = 0, this.abortAttempt(), !JR) return void this.session.onResumed();
          (0, YG.e)(this, Jy)[Jy] = RR.conn, this.session.onResuming()
        }
      }
    }
    var yy = GR(40288),
      ty = GR(42451),
      uy = GR(37627),
      Zy = GR(37622),
      qy = GR(2374),
      iy = GR(2102),
      fy = GR(5081),
      Vy = GR(42288),
      Ky = GR(6101);

    function wy(RR) {
      let {
        pack: JR,
        gameSource: GR
      } = RR;
      if (null !== GR && "" !== GR) return `game:${GR}`;
      if (null === JR) return "default";
      const {
        id: yR,
        version: tR
      } = JR.metaData;
      if (yR !== qy.q.CUSTOM) return `${yR}@${tR}`;
      const uR = [];
      for (const ZR of [JR.textureOverrides, JR.modelOverrides, JR.animations])
        for (const [RR, JR] of Object.entries(null !== ZR && void 0 !== ZR ? ZR : {})) uR.push(`${RR}:${JR.length}`);
      return `${yR}:${(0,iy.q)(uR.join())}`
    }
    var ry = GR(5218),
      ey = GR(4521),
      ay = GR(42454),
      Ly = GR(715),
      ny = GR(4526),
      Uy = GR(103),
      Wy = GR(4115),
      Ay = GR(4106),
      Cy = GR(5310),
      Xy = GR(5087),
      My = GR(42325),
      By = GR(42322),
      ly = GR(3437),
      py = GR(1800),
      gy = GR(1850),
      by = GR(1383),
      vy = GR(116),
      Oy = GR(313),
      xy = GR(40327),
      Ny = GR(3441),
      Dy = GR(5697);
    const Hy = new Set([pG.wb.KeyDown, pG.wb.MouseMove, pG.wb.MouseDown, pG.wb.Wheel, pG.wb.TouchStart, pG.wb.TouchMove]);

    function oy(RR) {
      return (RR.shiftKey ? pG.Kb.Shift : 0) | (RR.ctrlKey ? pG.Kb.Ctrl : 0) | (RR.altKey ? pG.Kb.Alt : 0) | (RR.metaKey ? pG.Kb.Meta : 0) | ("repeat" in RR && RR.repeat ? pG.Kb.Repeat : 0) | (RR.isTrusted ? 0 : pG.Kb.Untrusted | function(RR) {
        try {
          const {
            editable: JR,
            outsideView: GR
          } = (0, xy.f)(RR.target);
          return (JR ? pG.Kb.UntrustedEditable : 0) | (GR ? pG.Kb.UntrustedOutsideView : 0)
        } catch {
          return 0
        }
      }(RR))
    }

    function cy(RR) {
      return "touchOnly" !== (0, vy.c)() && "function" === typeof RR.requestPointerLock
    }

    function Py(RR) {
      return 0 === RR.button ? RR.altKey ? Dy.i["Alt+Left Click"] : Dy.i.Mouse1 : 1 === RR.button ? Dy.i.Mouse2 : Dy.i.Mouse3
    }
    const Iy = new Set(["AltLeft", "AltRight", "ArrowUp", "ArrowDown"]),
      my = new Map([
        ["AltLeft", "altKey"],
        ["AltRight", "altKey"],
        ["ControlLeft", "ctrlKey"],
        ["ControlRight", "ctrlKey"],
        ["ShiftLeft", "shiftKey"],
        ["ShiftRight", "shiftKey"],
        ["MetaLeft", "metaKey"],
        ["MetaRight", "metaKey"]
      ]),
      zy = 32768,
      Sy = 1;

    function jy(RR) {
      return Math.min(Math.max(Math.round(RR), 0), 65535)
    }

    function dy(RR, JR, GR) {
      const yR = [],
        tR = (RR, JR, GR, tR) => {
          const uR = RR => {
            (0, gy.A)(RR) || GR(RR)
          };
          RR.addEventListener(JR, uR, tR), yR.push((() => {
            RR.removeEventListener(JR, uR, tR)
          }))
        },
        uR = {
          capture: !0,
          passive: !0
        },
        ZR = (RR, GR, yR, tR, uR) => (!(0, Ny.d)() || !Hy.has(RR)) && (JR(RR, GR, yR, tR, uR), !0),
        qR = () => document.pointerLockElement === RR,
        iR = (0, Oy.d)(),
        fR = RR => {
          RR.ctrlKey && GR.ctrlCombosAreGames() && !(0, TG.h)(RR.target) && RR.preventDefault()
        },
        VR = (RR, yR, tR) => {
          GR.inspect(RR, yR, !1), JR(pG.wb.KeyUp, yR, 0, 0, (0, ly.s)(tR, RR.timeStamp)), GR.keyReleased(yR)
        },
        KR = new Map,
        wR = (RR, JR, GR) => RR[GR] || ("AltRight" === JR || "ControlLeft" === JR) && RR.getModifierState("AltGraph"),
        rR = new Map,
        eR = () => {
          KR.clear(), rR.clear()
        },
        aR = RR => {
          if (RR.isTrusted && document.hasFocus())
            for (const [JR, GR] of rR) rR.delete(JR), wR(RR, JR, GR) || (KR.delete(JR), VR(RR, Dy.i[JR], oy(RR)))
        };
      RR.tabIndex = -1;
      let LR = 0,
        nR = 0;
      const UR = () => {
        const JR = RR.getBoundingClientRect();
        LR = JR.left, nR = JR.top
      };
      let WR = "mouse";
      const AR = () => !qR() && ("mouse" === WR || !GR.touchUiShown()),
        CR = (RR, JR, GR) => {
          const yR = (jy(RR.clientX - LR) | jy(RR.clientY - nR) << 16) >>> 0;
          ZR(pG.wb.MouseMove, pG.Nb.Point, JR, GR, yR)
        };
      let XR = !1,
        MR = 0;
      const BR = () => {
        XR && (XR = !1, GR.viewShown() && (0, qG.X)())
      };
      yR.push((() => {
        clearTimeout(MR)
      })), tR(window, "keydown", (RR => {
        "Escape" === RR.key ? (0, qG.M)(!0) : RR.repeat || (0, TG.h)(RR.target) || (XR = !0, clearTimeout(MR), MR = window.setTimeout(BR, 0))
      }), uR), tR(window, "keydown", (RR => {
        BR(), fR(RR), aR(RR);
        const JR = Dy.i[RR.code];
        if ("number" !== typeof JR || !GR.viewShown()) return;
        const yR = (0, TG.h)(RR.target);
        yR || !GR.prevents(JR) && !Iy.has(RR.code) || RR.preventDefault(), RR.repeat || GR.inspect(RR, JR, !0), ZR(pG.wb.KeyDown, JR, 0, 0, (0, ly.s)(oy(RR), RR.timeStamp)) && KR.set(RR.code, JR), yR || GR.keyPressed(JR)
      }), {
        capture: !1,
        passive: !1
      }), tR(window, "keyup", (RR => {
        "Escape" === RR.key && (0, qG.M)(!1), fR(RR), KR.delete(RR.code), rR.delete(RR.code), aR(RR);
        const JR = Dy.i[RR.code];
        "number" === typeof JR && VR(RR, JR, oy(RR))
      }), {
        capture: !0,
        passive: !1
      }), tR(window, "mousemove", (RR => {
        "mouse" === WR && AR() ? CR(RR, RR.movementX, RR.movementY) : qR() ? ZR(pG.wb.MouseMove, pG.Nb.Stamped, RR.movementX, RR.movementY, (0, ly.s)(0, RR.timeStamp)) : ZR(pG.wb.MouseMove, 0, RR.movementX, RR.movementY, 0)
      }), uR);
      let lR = 0,
        pR = 0;
      const gR = [];
      let bR = !1,
        vR = !1;
      tR(RR, "mousedown", (RR => {
        if ((0, Ny.d)()) return;
        aR(RR);
        const yR = 1 << RR.button;
        if (!qR() && (0, qG.T)() && (0, qG.h)() && (vR = !0, !bR)) return void(lR |= yR);
        lR &= ~yR;
        const tR = RR.button <= 2 ? Py(RR) : void 0;
        void 0 !== tR && (gR[RR.button] = tR, GR.inspect(RR, tR, !0)), AR() && CR(RR, 0, 0), JR(pG.wb.MouseDown, RR.button, RR.clientX, RR.clientY, (0, ly.s)(oy(RR), RR.timeStamp)), pR |= yR, void 0 !== tR && GR.keyPressed(tR)
      }), uR), tR(window, "mouseup", (RR => {
        var yR;
        aR(RR);
        const tR = 1 << RR.button,
          uR = 0 !== (lR & ~pR & tR);
        if (lR &= ~tR, pR &= ~tR, uR) return;
        const ZR = RR.button <= 2 ? null !== (yR = gR[RR.button]) && void 0 !== yR ? yR : Py(RR) : void 0;
        void 0 !== ZR && GR.inspect(RR, ZR, !1), JR(pG.wb.MouseUp, RR.button, RR.clientX, RR.clientY, (0, ly.s)(oy(RR), RR.timeStamp)), void 0 !== ZR && GR.keyReleased(ZR)
      }), uR), tR(RR, "contextmenu", (RR => {
        RR.preventDefault()
      }), {
        passive: !1
      });
      const OR = RR => {
        (qR() || (0, qG.r)() && (0, by.u)()) && (RR.ctrlKey || iR && !document.fullscreenElement) && RR.preventDefault()
      };
      tR(RR, "wheel", (RR => {
        OR(RR), aR(RR), ZR(pG.wb.Wheel, RR.deltaMode, RR.deltaX, RR.deltaY, 0)
      }), {
        capture: !0,
        passive: !1
      });
      const xR = {
          capture: !0,
          passive: !1
        },
        NR = RR => {
          RR ? window.addEventListener("wheel", OR, xR) : window.removeEventListener("wheel", OR, xR)
        };
      NR((0, qG.r)()), yR.push((0, qG.y)(NR)), yR.push((() => {
        NR(!1)
      }));
      const DR = new Map,
        HR = new Set,
        oR = RR => {
          const JR = "stylus" === RR.touchType;
          for (const GR of DR.values())
            if (!GR.touched && (JR || Math.abs(RR.clientX - GR.x) <= Sy && Math.abs(RR.clientY - GR.y) <= Sy)) return GR.touched = !0, !0;
          return !1
        },
        cR = RR => 32767 & RR,
        PR = new Set,
        IR = RR => GR => {
          const yR = (0, ly.s)(oy(GR), GR.timeStamp);
          RR !== pG.wb.TouchStart && RR !== pG.wb.TouchMove || ((RR, GR) => {
            const yR = RR.touches;
            if (yR)
              for (const tR of PR) {
                let RR = !1;
                for (let JR = 0; JR < yR.length && !RR; JR++) RR = cR(yR[JR].identifier) === tR;
                RR || (PR.delete(tR), JR(pG.wb.TouchCancel, tR, 0, 0, GR))
              }
          })(GR, yR);
          const tR = GR.changedTouches;
          for (let JR = 0; JR < tR.length; JR++) {
            const GR = tR[JR];
            if (RR === pG.wb.TouchStart && oR(GR) && HR.add(GR.identifier), HR.has(GR.identifier)) {
              RR !== pG.wb.TouchEnd && RR !== pG.wb.TouchCancel || HR.delete(GR.identifier);
              continue
            }
            const uR = cR(GR.identifier),
              qR = ZR(RR, uR, GR.clientX - LR, GR.clientY - nR, yR);
            RR === pG.wb.TouchStart ? qR && PR.add(uR) : RR !== pG.wb.TouchMove && PR.delete(uR)
          }
        },
        mR = IR(pG.wb.TouchStart);
      tR(RR, "touchstart", (RR => {
        RR.preventDefault(), (0, Ny.d)() || (GR.touchStarting(), mR(RR))
      }), {
        passive: !1
      }), tR(RR, "touchmove", IR(pG.wb.TouchMove), uR), tR(RR, "touchend", IR(pG.wb.TouchEnd), uR), tR(RR, "touchcancel", IR(pG.wb.TouchCancel), uR);
      const zR = RR => zy | 32767 & RR,
        SR = (RR, JR) => {
          ZR(RR, zR(JR.pointerId), JR.clientX - LR, JR.clientY - nR, (0, ly.s)(oy(JR), JR.timeStamp))
        };
      tR(window, "pointerdown", (JR => {
        WR = JR.pointerType, "mouse" === JR.pointerType && JR.target !== RR && GR.viewShown() && (0, qG._)()
      }), uR), tR(RR, "pointerdown", (RR => {
        "pen" === RR.pointerType && 0 === RR.button && (0, qG.r)() && (0, by.u)() && (RR.preventDefault(), (0, Ny.d)() || (DR.set(RR.pointerId, {
          x: RR.clientX,
          y: RR.clientY,
          touched: !1
        }), GR.touchStarting(), SR(pG.wb.TouchStart, RR)))
      }), {
        passive: !1
      }), tR(window, "pointermove", (RR => {
        WR = RR.pointerType, DR.has(RR.pointerId) && SR(pG.wb.TouchMove, RR), "mouse" !== RR.pointerType && AR() && CR(RR, 0, 0)
      }), uR);
      const jR = RR => JR => {
        DR.delete(JR.pointerId) && SR(RR, JR)
      };
      tR(window, "pointerup", jR(pG.wb.TouchEnd), uR), tR(window, "pointercancel", jR(pG.wb.TouchCancel), uR);
      let dR = 0,
        ER = !1;
      const YR = () => {
          dR = 0, ER && GR.coverHeld() || (UR(), GR.resized())
        },
        kR = () => {
          if (ER && GR.coverHeld()) return;
          const RR = GR.sizeCanvas();
          null !== RR && (ER = !0, JR(pG.wb.Resize, 0, RR.cssWidth, RR.cssHeight, (0, ly.l)(RR.renderScale))), UR(), GR.resized(), 0 === dR && (dR = requestAnimationFrame(YR))
        };
      tR(window, "resize", kR, uR), yR.push(GR.watchRenderScale(kR)), yR.push((() => {
        cancelAnimationFrame(dR)
      })), tR(window, "focus", (RR => {
        RR.isTrusted && (JR(pG.wb.Focus, 0, 0, 0, 0), GR.viewShown() && (0, qG._)())
      }), {
        passive: !0
      });
      const QR = () => {
          (0, qG.M)(!1), lR = 0
        },
        FR = () => {
          PR.clear(), DR.clear(), HR.clear()
        };
      let TR = 0,
        sR = 0;
      tR(window, "blur", (yR => {
        QR(), (0, qG.o)();
        for (const RR of KR.keys()) {
          const JR = my.get(RR);
          void 0 !== JR && rR.set(RR, JR)
        }
        yR.isTrusted && ((RR => {
          for (const [GR, yR] of DR) JR(pG.wb.TouchCancel, zR(GR), yR.x, yR.y, (0, ly.s)(0, RR));
          DR.clear()
        })(yR.timeStamp), JR(pG.wb.Blur, pG.u.KeepTouches, 0, 0, 0)), iR && yR.isTrusted && (clearTimeout(sR), sR = window.setTimeout((() => {
          if (!document.hasFocus()) {
            for (const RR of KR.values()) VR(yR, RR, 0);
            eR()
          }
        }), 0)), clearTimeout(TR), TR = window.setTimeout((() => {
          document.activeElement instanceof HTMLIFrameElement && (0, by.u)() && GR.viewShown() && RR.focus({
            preventScroll: !0
          })
        }), 0)
      }), {
        passive: !0
      }), yR.push((() => {
        clearTimeout(TR), clearTimeout(sR)
      })), tR(window, "mousedown", (JR => {
        iR && JR.isTrusted && !document.hasFocus() && (0, by.u)() && GR.viewShown() && (window.focus(), RR.focus({
          preventScroll: !0
        }))
      }), uR), tR(document, "visibilitychange", (() => {
        document.hidden ? (JR(pG.wb.Blur, 0, 0, 0, 0), FR()) : document.hasFocus() && JR(pG.wb.Focus, 0, 0, 0, 0)
      }), {
        passive: !0
      }), yR.push((0, Ny.k)((() => {
        QR(), JR(pG.wb.Blur, pG.u.Release, 0, 0, 0), GR.keysReleased(), eR(), pR = 0, FR(), JR(pG.wb.Joystick, 0, 0, 0, 0), document.hasFocus() && JR(pG.wb.Focus, 0, 0, 0, 0)
      })));
      const hR = !GR.canLock(),
        RJ = () => hR && !(0, qG.r)() ? pG.jc.Lockless : pG.jc.Released,
        JJ = () => {
          qR() && (bR = !1, vR = !1), JR(pG.wb.PointerLock, qR() ? pG.jc.Locked : RJ(), 0, 0, 0), (0, qG.S)(qR())
        };
      return tR(document, "pointerlockchange", JJ, {
        passive: !0
      }), tR(document, "pointerlockerror", (() => {
        bR ||= vR, vR = !1, (0, qG.w)()
      }), {
        passive: !0
      }), hR && yR.push((0, qG.y)((() => {
        JR(pG.wb.PointerLock, RJ(), 0, 0, 0)
      }))), kR(), JR(document.hasFocus() ? pG.wb.Focus : pG.wb.Blur, 0, 0, 0, 0), JJ(), () => {
        for (const RR of yR.splice(0)) RR()
      }
    }
    var Ey = GR(4403),
      Yy = GR(35085),
      ky = GR(35072),
      Qy = GR(2196);
    const Fy = new Map(Dy.e.map(((RR, JR) => [RR, JR]))),
      Ty = ["jump", "primary-fire", "alt-fire"],
      sy = ["primary-fire", "alt-fire"];

    function hy(RR) {
      return `${Qy.b}${RR}`
    }
    const Rt = ["forward", "backward", "left", "right", "sprint", "jump"];

    function Jt(RR) {
      const JR = [];
      for (const GR of RR) {
        const RR = "string" === typeof GR ? Dy.i[GR] : void 0;
        "number" === typeof RR && JR.push(RR)
      }
      return JR
    }
    class Gt {
      constructor() {
        this.keys = new Map, this.preventKeys = new Set, this.movementKeys = new Set, this.checkedDown = new Set, this.checkedUp = new Set;
        for (const [RR, JR] of Object.entries(Dy.f)) this.keys.set(RR, JR);
        this.updateKeySets()
      }
      prevents(RR) {
        return this.preventKeys.has(RR)
      }
      moves(RR) {
        return this.movementKeys.has(RR)
      }
      checks(RR, JR) {
        return (JR ? this.checkedDown : this.checkedUp).has(RR)
      }
      sync(RR, JR) {
        for (const [GR, yR] of this.keys) {
          const tR = RR(hy(GR)),
            uR = Array.isArray(tR) ? Jt(tR) : Dy.f[GR];
          (uR.length !== yR.length || uR.some(((RR, JR) => RR !== yR[JR]))) && this.bind(GR, uR, JR)
        }
      }
      bind(RR, JR, GR) {
        const yR = Fy.get(RR);
        if (void 0 !== yR) {
          GR(pG.wb.Binding, 0, 0, 0, yR | pG.q.Clear << 8);
          for (const uR of [...JR, ...null !== (tR = Dy.g[RR]) && void 0 !== tR ? tR : []]) {
            var tR;
            GR(pG.wb.Binding, uR, 0, 0, yR | pG.q.Add << 8)
          }
          this.keys.set(RR, JR), this.updateKeySets()
        }
      }
      updateKeySets() {
        this.preventKeys.clear();
        for (const yR of Dy.k)
          for (const JR of null !== (RR = this.keys.get(Dy.e[yR])) && void 0 !== RR ? RR : []) {
            var RR;
            this.preventKeys.add(JR)
          }
        this.movementKeys.clear();
        for (const yR of Rt)
          for (const RR of null !== (JR = this.keys.get(yR)) && void 0 !== JR ? JR : []) {
            var JR;
            this.movementKeys.add(RR)
          }
        for (const [yR, tR] of [
            [this.checkedDown, Ty],
            [this.checkedUp, sy]
          ]) {
          yR.clear();
          for (const RR of tR)
            for (const JR of null !== (GR = this.keys.get(RR)) && void 0 !== GR ? GR : []) {
              var GR;
              yR.add(JR)
            }
        }
      }
    }
    var yt = GR(5692),
      tt = GR(37789);
    const ut = "[bloxd-wasm-client]";

    function Zt() {
      return "inGame" === wJ.d.get("gameState") && !(0, py.r)()
    }
    let qt = null;

    function it(RR, JR) {
      qt && JR.writePendingInput() && qt.push(function(RR, JR) {
        let GR = "";
        for (const yR of JR) GR += yR.toString(16).padStart(2, "0");
        return GR ? `${RR} ${GR}` : String(RR)
      }(RR, JR.rings.input.written()))
    }
    const ft = [];

    function Vt(RR, JR, GR, yR) {
      RR === pG.X.InputAction && yR === pG.ob && ft.push(JR.getUint32(GR, !0))
    }
    var Kt = GR(42457),
      wt = GR(279),
      rt = GR(132);
    const et = new Set(["android", "ios"]);
    let Lt = null;

    function nt() {
      return Lt ??= function() {
        let RR = null;
        try {
          var JR, GR, yR;
          const tR = document.createElement("canvas"),
            uR = {
              powerPreference: rt.b
            };
          if (RR = null !== (JR = tR.getContext("webgl2", uR)) && void 0 !== JR ? JR : tR.getContext("webgl", uR), !RR) return null;
          const ZR = RR.getExtension("WEBGL_debug_renderer_info");
          if (!ZR) return "unknown";
          const qR = String(null !== (GR = RR.getParameter(ZR.UNMASKED_RENDERER_WEBGL)) && void 0 !== GR ? GR : "");
          return "" === qR ? "unknown" : (0, wt.k)(String(null !== (yR = RR.getParameter(ZR.UNMASKED_VENDOR_WEBGL)) && void 0 !== yR ? yR : ""), qR)
        } catch {
          return null
        } finally {
          try {
            var tR, uR;
            null === (tR = RR) || void 0 === tR || null === (uR = tR.getExtension("WEBGL_lose_context")) || void 0 === uR || uR.loseContext()
          } catch {}
        }
      }(), Lt
    }

    function Ut(RR) {
      const JR = (0, Uy.pageOperatingSystem)();
      return null === JR ? null : function(RR, JR, GR) {
        const yR = "software_adapter" === RR.reason ? null : RR.adapter,
          tR = null === yR || "" === yR.vendor ? null : (0, wt.h)(yR.vendor, yR.architecture);
        return null !== tR && "other_intel" !== tR ? tR : et.has(JR) ? null : GR()
      }(RR, JR, nt)
    }
    const Wt = 6e4,
      At = 3e5;
    var Ct = GR(5007);
    const Xt = "wasmJoinWarm",
      Mt = 8,
      Bt = 64;

    function lt(RR) {
      return "number" === typeof RR && Number.isInteger(RR) && RR >= 0 && RR <= 4294967295
    }

    function pt(RR) {
      if ("object" !== typeof RR || null === RR) return !1;
      const {
        game: JR,
        codes: GR
      } = RR;
      return "string" === typeof JR && "" !== JR && Array.isArray(GR) && GR.every(lt)
    }

    function gt(RR) {
      const JR = RR.getItem(Xt);
      return Array.isArray(JR) ? JR.filter(pt).slice(0, Mt) : []
    }

    function bt(RR) {
      var JR;
      const GR = gt(arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : KG.i),
        yR = null === RR ? GR[0] : GR.find((JR => JR.game === RR));
      return Uint32Array.from(null !== (JR = null === yR || void 0 === yR ? void 0 : yR.codes.slice(0, Bt)) && void 0 !== JR ? JR : [])
    }
    var vt = GR(42463),
      Ot = GR(14);

    function xt(RR, JR) {
      const GR = Ot.ib.encode(JR);
      ! function(RR, JR) {
        let GR = JR >= 0 ? 2 * JR : 2 * -JR - 1;
        for (; GR >= 128;) RR.push(GR % 128 | 128), GR = Math.floor(GR / 128);
        RR.push(GR)
      }(RR, GR.length);
      for (const yR of GR) RR.push(yR)
    }
    let Nt, Dt, Ht;
    (() => {
      const RR = ["length", 0, 8, "a", 2, 1, 212, "c", "b", "o", "e", "resolv", "then", "postCo", "okies", void 0, 3, 4, 1023, 65536, 10, 55296, 56320, 6, 12, 63, 128, 5, 196, 192, "Invalid byte index", 123, 255, 224, 119, 31, "Invalid continuation byte", 240, 15, 67, 7, 18, !1, 239, null, 73, 43, 236, 33554432, 67108864, 184, 229, 87, "f", "Block ", "image "];

      function JR() {}
      const yR = (RR[1], Ot[RR[9]])("aGFyZHdhcmVDb25jdXJyZW5jeQ=="),
        tR = (RR[1], Ot[RR[9]])("QkFCWUxPTg=="),
        uR = (RR[1], Ot[RR[9]])("QW5kZXNpdGU="),
        ZR = (RR[1], Ot[RR[9]])("U21vb3RoIEdyYW5pdGU="),
        qR = (RR[1], Ot[RR[9]])("RGlvcml0ZQ=="),
        iR = async (JR, yR, tR, uR) => {
          const [{
            clientSideServerUrls: ZR
          }, {
            HttpPayloadType: qR,
            ["postJsonWithMetricsCookiesAndCustomRespons" + RR[10]]: iR
          }] = await Promise.all([Promise[RR[11] + RR[10]]()[RR[12]]((() => GR(1282))), Promise[RR[11] + RR[10]]()[RR[12]]((() => GR(1201)))]), fR = ZR.getHttpUrlFromWebSocketUrl(JR.endpoint), VR = JR[RR[13] + RR[14]] === RR[44] ? RR[15] : await JR[RR[13] + RR[14]]();
          await iR("" + fR + yR, tR, {
            retries: uR
          }, qR.blob, VR)
        };
      Nt = async (GR, yR) => {
        "L3tgRv3" in JR && function() {
          ! function(...JR) {
            function GR(...JR) {
              for (VR(JR[RR[0]] = RR[5], JR[RR[3]] = [], JR[RR[4]] = RR[1], JR[RR[16]] = JR[RR[1]].length, JR[RR[17]] = RR[15], JR[RR[10]] = RR[15]); JR[RR[4]] < JR[RR[16]];) VR(JR[RR[17]] = JR[RR[1]].charCodeAt(JR[RR[4]]++), JR[RR[17]] >= RR[21] && JR[RR[17]] <= 56319 && JR[RR[4]] < JR[RR[16]] ? (JR[RR[10]] = JR[RR[1]].charCodeAt(JR[RR[4]]++), (64512 & JR[RR[10]]) == RR[22] ? JR[RR[3]].push(((JR[RR[17]] & RR[18]) << RR[20]) + (JR[RR[10]] & RR[18]) + RR[19]) : (JR[RR[3]].push(JR[RR[17]]), JR[RR[4]]--)) : JR[RR[3]].push(JR[RR[17]]));
              return JR[RR[3]]
            }

            function yR(...GR) {
              for (VR(GR[RR[0]] = RR[5], GR[RR[5]] = GR[RR[1]].length, GR[RR[8]] = -RR[5], GR[RR[7]] = RR[15], GR[RR[17]] = ""); ++GR[RR[8]] < GR[RR[5]];) GR[RR[7]] = GR[RR[1]][GR[RR[8]]], GR[RR[7]] > 65535 && VR(GR[RR[7]] -= RR[19], GR[RR[17]] += JR[RR[3]](GR[RR[7]] >>> RR[20] & RR[18] | RR[21]), GR[RR[7]] = RR[22] | GR[RR[7]] & RR[18]), GR[RR[17]] += JR[RR[3]](GR[RR[7]]);
              return GR[RR[17]]
            }

            function tR(...JR) {
              if (JR[RR[0]] = RR[5], JR[RR[1]] >= RR[21] && JR[RR[1]] <= 57343) throw Error("Lone surrogate U+" + JR[RR[1]].toString(16).toUpperCase() + " is not a scalar value")
            }

            function uR(...GR) {
              return GR[RR[0]] = RR[4], JR[RR[3]](GR[RR[1]] >> GR[RR[5]] & RR[25] | RR[26])
            }

            function ZR(...GR) {
              return GR[RR[0]] = RR[5], (4294967168 & GR[RR[1]]) == RR[1] ? JR[RR[3]](GR[RR[1]]) : (GR[RR[3]] = "", (4294965248 & GR[RR[1]]) == RR[1] ? GR[RR[3]] = JR[RR[3]](GR[RR[1]] >> RR[23] & RR[35] | RR[29]) : (4294901760 & GR[RR[1]]) == RR[1] ? VR(tR(GR[RR[1]]), GR[RR[3]] = JR[RR[3]](GR[RR[1]] >> RR[24] & RR[38] | RR[33]), GR[RR[3]] += uR(GR[RR[1]], RR[23])) : (4292870144 & GR[RR[1]]) == RR[1] && VR(GR[RR[3]] = JR[RR[3]](GR[RR[1]] >> RR[41] & RR[40] | RR[37]), GR[RR[3]] += uR(GR[RR[1]], RR[24]), GR[RR[3]] += uR(GR[RR[1]], RR[23])), GR[RR[3]] += JR[RR[3]](GR[RR[1]] & RR[25] | RR[26]), GR[RR[3]])
            }

            function qR(...JR) {
              for (VR(JR[RR[0]] = RR[5], JR[RR[3]] = GR(JR[RR[1]]), JR[RR[4]] = JR[RR[3]].length, JR[RR[7]] = -RR[5], JR[RR[17]] = RR[15], JR[RR[27]] = ""); ++JR[RR[7]] < JR[RR[4]];) VR(JR[RR[17]] = JR[RR[3]][JR[RR[7]]], JR[RR[27]] += ZR(JR[RR[17]]));
              return JR[RR[27]]
            }

            function iR(...GR) {
              if (GR[RR[0]] = RR[1], JR[RR[8]] >= JR[RR[16]]) throw Error(RR[30]);
              if (VR(GR[RR[28]] = JR[-RR[31]][JR[RR[8]]] & RR[32], JR[RR[8]]++), (GR[RR[28]] & RR[29]) == RR[26]) return GR[RR[28]] & RR[25];
              throw Error(RR[36])
            }

            function fR(...GR) {
              if (VR(GR[RR[0]] = RR[1], GR[RR[3]] = RR[15], GR[RR[5]] = RR[15], GR[RR[4]] = RR[15], GR[-RR[39]] = RR[15], GR[-RR[34]] = RR[15]), JR[RR[8]] > JR[RR[16]]) throw Error(RR[30]);
              if (JR[RR[8]] == JR[RR[16]]) return RR[42];
              if (VR(GR[RR[3]] = JR[-RR[31]][JR[RR[8]]] & RR[32], JR[RR[8]]++), (GR[RR[3]] & RR[26]) == RR[1]) return GR[RR[3]];
              if ((GR[RR[3]] & RR[33]) == RR[29]) {
                if (VR(GR[RR[5]] = iR(), GR[-RR[34]] = (GR[RR[3]] & RR[35]) << RR[23] | GR[RR[5]]), GR[-RR[34]] >= RR[26]) return GR[-RR[34]];
                throw Error(RR[36])
              }
              if ((GR[RR[3]] & RR[37]) == RR[33]) {
                if (VR(GR[RR[5]] = iR(), GR[RR[4]] = iR(), GR[-RR[34]] = (GR[RR[3]] & RR[38]) << RR[24] | GR[RR[5]] << RR[23] | GR[RR[4]]), GR[-RR[34]] >= 2048) return tR(GR[-RR[34]]), GR[-RR[34]];
                throw Error(RR[36])
              }
              if ((248 & GR[RR[3]]) == RR[37] && (VR(GR[RR[5]] = iR(), GR[RR[4]] = iR(), GR[-RR[39]] = iR(), GR[-RR[34]] = (GR[RR[3]] & RR[40]) << RR[41] | GR[RR[5]] << RR[24] | GR[RR[4]] << RR[23] | GR[-RR[39]]), GR[-RR[34]] >= RR[19] && GR[-RR[34]] <= 1114111)) return GR[-RR[34]];
              throw Error("Invalid UTF-8 detected")
            }

            function KR(...tR) {
              for (VR(tR[RR[0]] = RR[5], JR[-RR[31]] = GR(tR[RR[1]]), JR[RR[16]] = JR[-RR[31]].length, JR[RR[8]] = RR[1], tR[-RR[43]] = [], tR[RR[4]] = RR[15]);
                (tR[RR[4]] = fR()) !== RR[42];) tR[-RR[43]].push(tR[RR[4]]);
              return yR(tR[-RR[43]])
            }
            VR(JR[RR[0]] = RR[5], JR[RR[3]] = String.fromCharCode), VR(JR[-RR[31]] = RR[15], JR[RR[16]] = RR[15], JR[RR[8]] = RR[15]), VR(JR[RR[1]].version = "3.0.0", JR[RR[1]].encode = qR, JR[RR[1]].decode = KR)
          }("undefined" === typeof exports ? this.utf8 = {} : exports)
        }();
        const tR = function(RR, JR, GR, yR) {
          const tR = [];
          xt(tR, RR), xt(tR, JR), xt(tR, GR);
          for (const uR of yR) tR.push(uR);
          return tR
        }(GR.game, GR.lobby, GR.sessionId, yR);
        try {
          function uR(...JR) {
            var GR;
            VR(JR[RR[0]] = RR[1], GR = function(...JR) {
              VR(JR[RR[0]] = RR[5], this.hK = JR[RR[1]], this.length = RR[1], this.map = {}, this.head = RR[44], this.tail = RR[44])
            }, GR.prototype.get = function(...JR) {
              var GR;
              return VR(JR[RR[0]] = RR[5], GR = this.map[JR[RR[1]]]), GR ? (this.remove(GR), this.insert(GR.key, GR.val), GR.val) : -RR[5]
            }, GR.prototype.put = function(...JR) {
              VR(JR[RR[0]] = RR[4], this.map[JR[RR[1]]] ? (this.remove(this.map[JR[RR[1]]]), this.insert(JR[RR[1]], JR[RR[5]])) : this.length === this.hK ? (this.remove(this.head), this.insert(JR[RR[1]], JR[RR[5]])) : (this.insert(JR[RR[1]], JR[RR[5]]), this.length++))
            }, GR.prototype.remove = function(...JR) {
              VR(JR[RR[0]] = RR[5], JR[RR[5]] = JR[RR[1]].prev, JR[RR[8]] = JR[RR[1]].next), JR[RR[8]] && (JR[RR[8]].prev = JR[RR[5]]), JR[RR[5]] && (JR[RR[5]].next = JR[RR[8]]), this.head === JR[RR[1]] && (this.head = JR[RR[8]]), this.tail === JR[RR[1]] && (this.tail = JR[RR[5]]), delete this.map[JR[RR[1]].key]
            }, GR.prototype.insert = function(...JR) {
              VR(JR[RR[0]] = RR[4], JR[-RR[45]] = new List(JR[RR[1]], JR[RR[5]]), this.tail ? (this.tail.next = JR[-RR[45]], JR[-RR[45]].prev = this.tail, this.tail = JR[-RR[45]]) : (this.tail = JR[-RR[45]], this.head = JR[-RR[45]]), this.map[JR[RR[1]]] = JR[-RR[45]])
            }, console.log(GR))
          }
          "jLYEYL" in JR && uR(), await iR(GR, "/persisted/keep-alive", {
            type: "GK",
            data: tR
          }, RR[16])
        } catch (qR) {
          console.warn(qR)
        }
      };
      const fR = (...GR) => (GR[RR[0]] = RR[4], "sqLx5TL" in JR && function(...JR) {
        VR(JR[RR[0]] = RR[1], JR[-RR[47]] = function(...GR) {
          return VR(GR[RR[0]] = RR[4], GR[RR[4]] = [], GR[RR[46]] = GR[RR[1]].length, GR[RR[1]].sort(((RR, JR) => RR - JR)), JR[RR[8]](GR[RR[4]], [], RR[1], GR[RR[46]], GR[RR[1]], GR[RR[5]])), GR[RR[4]]
        }, JR[RR[8]] = function(...GR) {
          if (VR(GR[RR[0]] = RR[23], GR[RR[23]] = RR[44]), !(GR[RR[27]] < RR[1])) {
            if (GR[RR[27]] === RR[1]) return GR[RR[1]].push(GR[RR[5]]);
            for (GR[RR[40]] = GR[RR[4]]; GR[RR[40]] < GR[RR[16]] && !(GR[RR[17]][GR[RR[40]]] > GR[RR[27]]); GR[RR[40]]++) GR[RR[40]] > GR[RR[4]] && GR[RR[17]][GR[RR[40]]] === GR[RR[17]][GR[RR[40]] - RR[5]] || VR(GR[RR[23]] = Array.from(GR[RR[5]]), GR[RR[23]].push(GR[RR[17]][GR[RR[40]]]), JR[RR[8]](GR[RR[1]], GR[RR[23]], GR[RR[40]] + RR[5], GR[RR[16]], GR[RR[17]], GR[RR[27]] - GR[RR[17]][GR[RR[40]]]))
          }
        }, console.log(JR[-RR[47]]))
      }(), Object.getOwnPropertyDescriptor(GR[RR[1]], GR[RR[5]]));

      function VR() {
        VR = function() {}
      }
      Dt = () => {
        if ((RR[1], Ot.G)(), fR(navigator, yR) !== RR[15]) {
          function GR(...JR) {
            function GR(...JR) {
              if (JR[RR[0]] = RR[5], !JR[RR[1]]) return -RR[5];
              const yR = GR(JR[RR[1]].left),
                tR = GR(JR[RR[1]].right),
                uR = Math.abs(yR - tR);
              if (yR === 1 / 0 || tR === 1 / 0 || uR > RR[5]) return 1 / 0;
              return Math.max(yR, tR) + RR[5]
            }
            JR[RR[0]] = RR[1], window.__GLOBAL__HELPERS__ = {
              buildCharacterMap: function(...JR) {
                JR[RR[0]] = RR[5];
                const GR = {};
                for (let yR of JR[RR[1]].replace(/[^w]/g, "").toLowerCase()) GR[yR] = GR[yR] + RR[5] || RR[5];
                return GR
              },
              isAnagrams: function(...JR) {
                JR[RR[0]] = RR[4];
                const GR = buildCharMap(JR[RR[1]]),
                  yR = buildCharMap(JR[RR[5]]);
                for (let tR in GR)
                  if (GR[tR] !== yR[tR]) return RR[42];
                return Object.keys(GR).length === Object.keys(yR).length || RR[42]
              },
              isBalanced: function(...JR) {
                return JR[RR[0]] = RR[5], GR(JR[RR[1]]) !== 1 / 0
              },
              getHeightBalanced: GR
            }
          }
          return "iPO1jC" in JR && GR(), uR
        }
        return fR(window, tR) === RR[15] ? ZR : qR
      }, Ht = async yR => {
        try {
          function tR(...JR) {
            function GR(...JR) {
              return JR[RR[0]] = RR[5], JR[RR[1]][RR[5]] * RR[49] + (JR[RR[1]][RR[1]] < RR[1] ? RR[48] | JR[RR[1]][RR[1]] : JR[RR[1]][RR[1]])
            }

            function yR(...JR) {
              switch (JR[RR[0]] = RR[5], ((JR[RR[1]] & RR[48]) !== RR[1]) * RR[5] + (JR[RR[1]] < RR[1]) * RR[4]) {
                case RR[1]:
                  return [JR[RR[1]] % RR[48], Math.trunc(JR[RR[1]] / RR[49])];
                case RR[5]:
                  return [JR[RR[1]] % RR[48] - RR[48], Math.trunc(JR[RR[1]] / RR[49]) + RR[5]];
                case RR[4]:
                  return [((JR[RR[1]] + RR[48]) % RR[48] + RR[48]) % RR[48], Math.round(JR[RR[1]] / RR[49])];
                case RR[16]:
                  return [JR[RR[1]] % RR[48], Math.trunc(JR[RR[1]] / RR[49])]
              }
            }
            JR[RR[0]] = RR[1], VR(JR[RR[50]] = GR([RR[4], RR[17]]), JR[-RR[40]] = GR([RR[5], RR[4]]), JR[RR[51]] = JR[RR[50]] + JR[-RR[40]], JR[-RR[52]] = JR[RR[51]] - JR[-RR[40]], JR[RR[10]] = JR[-RR[52]] * RR[4], JR[RR[53]] = JR[RR[10]] / RR[4], console.log(yR(JR[RR[51]])), console.log(yR(JR[-RR[52]])), console.log(yR(JR[RR[10]])), console.log(yR(JR[RR[53]])))
          }
          "OOIhNh" in JR && tR();
          const uR = Dt(),
            {
              retryTransientHttpFailures: qR
            } = await Promise[RR[11] + RR[10]]()[RR[12]]((() => GR(2003)));
          await qR(RR[54] + RR[55] + "post", (() => iR(yR, "/images/" + uR + ".png", {
            block: uR
          }, RR[1])), 8e3)
        } catch (ZR) {
          console.error(RR[54] + RR[55] + "post failed:", ZR)
        }
      }
    })();
    var ot = GR(42411);
    const ct = 1e3 * ot.b.seatReservationSeconds - 3e3;
    class Pt {
      constructor(RR) {
        var JR, GR, yR, tR;
        let uR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.seat = void 0, this.follow = void 0, this.wallNow = void 0, this.monoNow = void 0, this.wallAt = void 0, this.monoAt = void 0, this.sleep = void 0, this.answeredAt = null, this.posts = 0, this.refusals = 0, this.request = "pending", this.use = "unused", this.wallNow = null !== (JR = uR.wallNow) && void 0 !== JR ? JR : Date.now, this.monoNow = null !== (GR = uR.monoNow) && void 0 !== GR ? GR : () => performance.now(), this.wallAt = this.wallNow(), this.monoAt = this.monoNow(), this.sleep = null !== (yR = uR.sleep) && void 0 !== yR ? yR : sJ.b, this.follow = new TJ.d(uR.signal);
        const ZR = null !== (tR = uR.fetch) && void 0 !== tR ? tR : fetch;
        this.seat = (0, ty.j)(RR.endpoint, RR.roomName, RR.joinOptions, {
          sleep: this.sleep,
          signal: this.follow.signal,
          fetch: (RR, JR) => (this.posts++, this.wallAt = this.wallNow(), this.monoAt = this.monoNow(), ZR(RR, JR)),
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
      async take(RR) {
        if ("rematched" === this.use) return;
        (0, TJ.r)(RR);
        const JR = "pending" !== this.request,
          GR = () => {
            this.abort((0, TJ.g)(RR))
          };
        let yR;
        null === RR || void 0 === RR || RR.addEventListener("abort", GR, {
          once: !0
        });
        try {
          yR = await this.seat
        } catch (tR) {
          if ((0, TJ.r)(RR), !JR) throw tR;
          return void(this.use = "lost")
        } finally {
          null === RR || void 0 === RR || RR.removeEventListener("abort", GR)
        }
        if ((0, TJ.r)(RR), !(this.ageMs() > ct)) return this.use = "taken", yR;
        this.use = "renewed"
      }
      async reserveInstead(RR, JR) {
        try {
          return await RR()
        } catch (GR) {
          const tR = this.holdLeftMs();
          if (!(GR instanceof JJ.m) || GR.code !== yR.e.duplicateLobbyNameError.code || 0 === tR) throw GR;
          return await this.sleep(tR + 500, JR), RR()
        }
      }
      release() {
        const {
          request: RR,
          use: JR
        } = this, GR = this.holdsNoSeat();
        return this.abort(), "taken" === JR || GR ? null : {
          unused: "unused" === JR ? "abandoned" : JR,
          answered: "answered" === RR,
          mD: Math.round(this.ageMs())
        }
      }
      holdsNoSeat() {
        return this.posts === this.refusals
      }
      holdLeftMs() {
        var RR;
        if ("taken" === this.use || this.holdsNoSeat()) return 0;
        const JR = null !== (RR = this.answeredAt) && void 0 !== RR ? RR : {
            wall: this.wallAt,
            mono: this.monoAt
          },
          GR = Math.max(this.wallNow() - JR.wall, this.monoNow() - JR.mono);
        return Math.max(0, 1e3 * ot.b.seatReservationSeconds - GR)
      }
      ageMs() {
        return Math.max(this.wallNow() - this.wallAt, this.monoNow() - this.monoAt)
      }
      abort(RR) {
        (0, TJ.k)(this.follow.controller, RR)
      }
    }
    var It = GR(42472);
    const mt = new Uint8Array(0);
    class zt {
      constructor(RR) {
        if (this.options = RR, this.slots = [], this.workers = null, this.stopped = !1, this.resting = !1, this.pool = [], this.failedJobs = 0, this.memoryFailureCounted = !1, this.faultsReported = new Set, this.refusals = new Map, this.heapRefusals = 0, null === RR.module) return this.stopped = !0, void RR.fail("no wasm module for the meshing workers");
        RR.loadWorkers().then((RR => {
          if (this.stopped) return;
          const {
            count: JR
          } = RR;
          this.workers = RR;
          for (let GR = 0; GR < JR; GR++) this.slots.push({
            worker: null,
            started: !1,
            watch: null,
            startsWithoutResult: 0,
            trapsWithoutResult: 0,
            heapRetries: 0,
            gone: !1,
            goneFor: null
          });
          for (let GR = 0; GR < JR; GR++) this.start(GR)
        }), (RR => {
          this.stopped || (this.stop(), this.options.fail("the meshing workers' code could not load", RR))
        }))
      }
      take(RR, JR, GR) {
        const yR = this.slots[JR];
        if (RR === pG.Yd.Retire) return void(yR && !yR.gone && (this.endWorker(JR), yR.started = !1, this.giveUp(JR, "had its tables trap twice", "every meshing worker's tables trapped twice")));
        const tR = null === yR || void 0 === yR ? void 0 : yR.worker;
        if (!tR || !yR.started) return;
        const uR = GR.byteLength;
        let ZR = null;
        RR === pG.Yd.Mesh && yR.heapRetries > 0 && (yR.heapRetries--, ZR = this.pooled(uR, !0)), ZR ??= this.buffer(uR), new Uint8Array(ZR, 0, uR).set(GR), tR.postMessage({
          type: "job",
          kind: RR,
          bytes: ZR,
          len: uR
        }, [ZR])
      }
      takeFailedMeshJobs() {
        const RR = this.failedJobs;
        return this.failedJobs = 0, RR
      }
      newGame() {
        this.memoryFailureCounted = !1
      }
      stopWorkers() {
        this.resting = !0;
        for (let RR = 0; RR < this.slots.length; RR++) {
          const JR = this.slots[RR];
          null !== JR.worker && (this.endWorker(RR), JR.startsWithoutResult = 0, JR.trapsWithoutResult = 0, this.tellLost(RR))
        }
        this.pool.length = 0
      }
      restartWorkers() {
        if (this.resting) {
          this.resting = !1;
          for (let RR = 0; RR < this.slots.length; RR++) this.start(RR)
        }
      }
      stop() {
        this.stopped = !0;
        for (const JR of this.slots) {
          var RR;
          St(JR), null === (RR = JR.worker) || void 0 === RR || RR.terminate(), JR.worker = null, JR.started = !1
        }
      }
      start(RR) {
        const JR = this.slots[RR],
          {
            module: GR
          } = this.options,
          {
            workers: yR
          } = this;
        if (this.stopped || this.resting || JR.gone || null === GR || null === yR) return;
        if (JR.startsWithoutResult >= 3) return void this.giveUp(RR, "failed to start 3 times in a row", "no meshing worker would start");
        let tR;
        JR.startsWithoutResult++;
        try {
          tR = yR.create()
        } catch (uR) {
          return console.warn(`[bloxd-wasm-client] meshing worker ${RR} did not start`, uR), void this.start(RR)
        }
        JR.worker = tR, tR.onmessage = GR => {
          let {
            data: yR
          } = GR;
          JR.worker === tR && this.onReply(RR, yR)
        }, tR.onmessageerror = () => {
          JR.worker === tR && this.lose(RR, "a reply could not be read")
        }, tR.onerror = GR => {
          GR.preventDefault(), JR.worker === tR && this.lose(RR, GR.message || "its script failed")
        };
        try {
          tR.postMessage({
            type: "start",
            module: GR,
            maxKeptLightStates: yR.maxKeptLightStates
          })
        } catch (uR) {
          return console.warn(`[bloxd-wasm-client] meshing worker ${RR} could not be sent the module`, uR), tR.terminate(), JR.worker = null, void this.start(RR)
        }
        JR.watch = new It.h(It.d, (JR => {
          this.lose(RR, (0, It.l)(JR), (() => {
            this.options.onStartTimeout(JR)
          }))
        }), void 0, this.options.visibility)
      }
      onReply(RR, JR) {
        const GR = this.slots[RR];
        switch (JR.type) {
          case "started":
            St(GR), GR.started = !0, this.options.write(0, pG.Xd.WorkerStarted, 0, RR, 0, mt);
            break;
          case "lost":
            this.lose(RR, JR.reason);
            break;
          case "memory":
            var yR, tR;
            null === (yR = (tR = this.options).onMemoryStats) || void 0 === yR || yR.call(tR, RR, JR.stats);
            break;
          case "result": {
            const yR = JR.status === pG.yb.Trapped;
            if (0 !== JR.jobId) {
              if (yR) this.countFailedJob(JR.outOfMemory, "light_trap", JR.trap);
              else if (GR.startsWithoutResult = 0, GR.trapsWithoutResult = 0, JR.status === pG.yb.Refused) {
                const GR = function(RR) {
                  if (RR.byteLength < 32) return "(no reason)";
                  const JR = new DataView(RR.buffer, RR.byteOffset, RR.byteLength),
                    GR = Math.min(JR.getUint32(28, !0), RR.byteLength - 28 - 4);
                  return (new TextDecoder).decode(RR.subarray(32, 32 + GR)).slice(0, 200)
                }(new Uint8Array(JR.bytes, 0, JR.len));
                this.countFailedJob(OG.b.test(GR), "light_refused_input", GR), this.logRefusal(RR, GR)
              }
              JR.status === pG.yb.HeapRefused && (GR.heapRetries = Math.min(GR.heapRetries + 1, 4), this.logHeapRefusal(RR))
            }
            if (this.options.write(JR.jobId, pG.Xd.JobResult, JR.status, RR, JR.workerUs, new Uint8Array(JR.bytes, 0, JR.len)), this.recycle(JR.bytes), JR.spare && this.recycle(JR.spare), !yR) break;
            if (GR.startsWithoutResult = 0, 0 === JR.jobId) {
              this.lose(RR, `the tables trapped its wasm: ${JR.trap}`);
              break
            }
            GR.trapsWithoutResult++;
            const tR = GR.trapsWithoutResult > 6;
            GR.gone ||= tR, this.lose(RR, `a job trapped its wasm: ${JR.trap}`), tR && this.giveUp(RR, `trapped ${GR.trapsWithoutResult} jobs in a row`, "every meshing worker kept trapping");
            break
          }
        }
      }
      countFailedJob(RR, JR, GR) {
        if (RR) {
          if (this.memoryFailureCounted) return;
          this.memoryFailureCounted = !0
        } else this.faultsReported.has(JR) || (this.faultsReported.add(JR), this.options.onLightFault(JR, GR));
        this.failedJobs++
      }
      logRefusal(RR, JR) {
        var GR;
        !this.refusals.has(JR) && this.refusals.size >= 16 && (JR = "(other reasons)");
        const yR = (null !== (GR = this.refusals.get(JR)) && void 0 !== GR ? GR : 0) + 1;
        this.refusals.set(JR, yR), (0, iy.w)(yR) && console.warn(`[bloxd-wasm-client] meshing worker ${RR} refused a chunk (${yR} so far for this reason): ${JR}`)
      }
      logHeapRefusal(RR) {
        this.heapRefusals++, (0, iy.w)(this.heapRefusals) && console.warn(`[bloxd-wasm-client] meshing worker ${RR} was refused memory for a chunk's mesh (${this.heapRefusals} so far)`)
      }
      giveUp(RR, JR, GR) {
        const yR = this.slots[RR];
        if (yR.gone = !0, yR.goneFor = {
            why: JR,
            failure: GR
          }, console.warn(`[bloxd-wasm-client] meshing worker ${RR} ${JR}: giving up on it`), this.slots.every((RR => RR.gone))) {
          this.stop();
          const RR = new Set(this.slots.map((RR => {
              var JR;
              return null === (JR = RR.goneFor) || void 0 === JR ? void 0 : JR.failure
            }))),
            JR = this.slots.map(((RR, JR) => {
              var GR, yR;
              return `worker ${JR} ${null!==(GR=null===(yR=RR.goneFor)||void 0===yR?void 0:yR.why)&&void 0!==GR?GR:"went"}`
            }));
          this.options.fail(1 === RR.size ? GR : `no meshing worker is left (${JR.join(", ")})`)
        }
      }
      lose(RR, JR, GR) {
        console.warn(`[bloxd-wasm-client] meshing worker ${RR} was lost: ${JR}`), this.endWorker(RR), this.stopped || (GR ? GR() : this.options.onWorkerLost(JR), this.tellLost(RR), this.start(RR))
      }
      endWorker(RR) {
        var JR, GR, yR;
        const tR = this.slots[RR];
        St(tR), null === (JR = tR.worker) || void 0 === JR || JR.terminate(), tR.worker = null, tR.heapRetries = 0, null === (GR = (yR = this.options).onMemoryGone) || void 0 === GR || GR.call(yR, RR)
      }
      tellLost(RR) {
        const JR = this.slots[RR];
        JR.started && (JR.started = !1, this.options.write(0, pG.Xd.WorkerLost, 0, RR, 0, mt))
      }
      buffer(RR) {
        var JR;
        return null !== (JR = this.pooled(RR)) && void 0 !== JR ? JR : new ArrayBuffer(Math.max(16384, RR))
      }
      pooled(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          GR = -1;
        for (let tR = 0; tR < this.pool.length; tR++) {
          const yR = this.pool[tR].byteLength;
          yR >= RR && (GR < 0 || (JR ? yR > this.pool[GR].byteLength : yR < this.pool[GR].byteLength)) && (GR = tR)
        }
        if (GR < 0) return null;
        const yR = this.pool[GR];
        return this.pool[GR] = this.pool[this.pool.length - 1], this.pool.pop(), yR
      }
      recycle(RR) {
        this.pool.length < 4 * this.slots.length && RR.byteLength > 0 && RR.byteLength <= 1048576 && this.pool.push(RR)
      }
    }

    function St(RR) {
      var JR;
      null === (JR = RR.watch) || void 0 === JR || JR.cancel(), RR.watch = null
    }
    var jt = GR(37633),
      dt = GR(42294),
      Et = GR(42475),
      Yt = GR(42479),
      kt = (GR(42265), GR(37232)),
      Qt = GR(42488),
      Ft = GR(42364);

    function Tt(RR) {
      const JR = new Uint8Array(RR.length >> 2);
      for (let GR = 0; GR < JR.length; GR++) JR[GR] = RR[4 * GR + 3];
      return JR
    }
    async function st(RR) {
      const JR = await (0, Qt.g)(RR);
      try {
        const {
          width: RR,
          height: GR,
          pixels: yR
        } = (0, Ft.w)(JR);
        return {
          width: RR,
          height: GR,
          alpha: Tt(yR)
        }
      } finally {
        JR.close()
      }
    }
    class ht {
      constructor(RR, JR, GR) {
        let yR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : st;
        this.session = RR, this.sources = JR, this.warn = GR, this.load = yR, this.nextPoll = 0, this.He = !1, this.warned = new Set
      }
      drain(RR) {
        if (RR < this.nextPoll) return;
        this.nextPoll = RR + 250;
        const JR = this.session.sunShadowWantedTextures();
        if (JR)
          for (let GR = 0; GR + 1 < JR.length; GR += 2) this.hand(JR[GR], JR[GR + 1]);
        for (const GR of this.session.takeSunShadowWarnings()) this.warn(GR)
      }
      dispose() {
        this.He = !0
      }
      async hand(RR, JR) {
        var GR, yR, tR, uR, ZR;
        let qR, iR = null;
        try {
          if (iR = await this.sources.blockImageUrl(RR), null === iR) throw new Error(`block image ${RR} has no URL`);
          qR = await this.load(iR)
        } catch (VR) {
          var fR;
          const JR = null !== (fR = iR) && void 0 !== fR ? fR : `block image ${RR}`;
          this.warned.has(JR) || (this.warned.add(JR), this.warn(`sun shadow plane texture ${JR} didn't load: its blocks cast no shadow`, VR))
        }
        this.He || this.session.setSunShadowTexture(RR, JR, null !== (GR = null === (yR = qR) || void 0 === yR ? void 0 : yR.width) && void 0 !== GR ? GR : 0, null !== (tR = null === (uR = qR) || void 0 === uR ? void 0 : uR.height) && void 0 !== tR ? tR : 0, null === (ZR = qR) || void 0 === ZR ? void 0 : ZR.alpha)
      }
    }
    var Ru = GR(37346),
      Ju = GR(42344),
      Gu = GR(42494),
      yu = GR(42503),
      tu = GR(42352),
      uu = GR(42357),
      Zu = GR(35195),
      qu = GR(35031),
      iu = GR(42516);
    const fu = 8192,
      Vu = new Set;
    const Ku = new Set([...qu.e, "sceneDownload"]);
    var wu = GR(42281),
      ru = GR(42379);
    const eu = [1e3, 4e3],
      au = [2e3, 4e3, 8e3, 15e3, 3e4, 3e4, 3e4, 3e4];
    async function Lu(RR) {
      let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : au,
        GR = 0,
        yR = !1,
        tR = null,
        uR = () => {};
      const ZR = () => {
        const JR = new AbortController;
        tR = JR, RR.showScreen(JR.signal).then((RR => {
          JR.signal.aborted || (tR === JR && (tR = null), yR ||= !RR, uR())
        }))
      };
      let qR = 0;
      try {
        for (; qR < JR.length;) {
          null === tR && ZR();
          const iR = new AbortController;
          if (uR = () => {
              iR.abort()
            }, await RR.sleep(JR[qR], iR.signal), yR) return {
            picked: null,
            tries: GR,
            gaveUp: !1
          };
          iR.signal.aborted || qR++, GR++;
          const fR = await RR.repick();
          if (yR) return {
            picked: null,
            tries: GR,
            gaveUp: !1
          };
          if (null !== fR) return {
            picked: fR,
            tries: GR,
            gaveUp: !1
          }
        }
        return {
          picked: null,
          tries: GR,
          gaveUp: !0
        }
      } finally {
        (() => {
          var RR;
          null === (RR = tR) || void 0 === RR || RR.abort(), tR = null
        })()
      }
    }
    var nu = GR(42523);
    const Uu = new Uint8Array(0);
    let Wu = null;

    function Au(RR) {
      return {
        aux: pG.$b.AdStart | (RR ? pG.$b.PreventMovement : 0),
        payload: Uu
      }
    }
    var Cu = GR(4044),
      Xu = GR(310);
    const Mu = "__bloxdSceneCapture";
    var Bu = GR(42526);
    class lu {
      constructor(RR) {
        var JR, GR;
        this.host = RR, this.requested = null, this.landed = null, this.confirm = null, this.channel = void 0, this.oneShotStored = !0, this.startRead = void 0, this.landRequest = () => {}, this.landing = new Promise((RR => {
          this.landRequest = RR
        })), this.follow = RR => {
          let JR = RR;
          return Promise.race([this.startRead, this.landing]).then((async () => {
            const RR = null === this.requested && null !== JR;
            var GR;
            RR && (null === (GR = JR) || void 0 === GR || GR(null));
            const yR = await this.landing;
            var tR;
            null === yR && RR || (null === (tR = JR) || void 0 === tR || tR(yR))
          })), () => {
            JR = null
          }
        }, this.startRead = (GR = RR.store, GR.keys().then((RR => ({
          own: RR.includes(ey.e),
          oneShot: RR.includes(ey.g)
        })), (() => ({
          own: !0,
          oneShot: !0
        })))).then((RR => {
          let {
            own: JR,
            oneShot: GR
          } = RR;
          this.oneShotStored = GR, (JR || GR) && this.request()
        })), this.channel = (null !== (JR = RR.openChannel) && void 0 !== JR ? JR : ey.v)(), null !== this.channel && (this.channel.onmessage = () => {
          this.request()
        })
      }
      request() {
        var RR;
        if (null !== this.requested) return this.requested;
        null === (RR = this.channel) || void 0 === RR || RR.close(), this.channel = null;
        const JR = this.oneShotStored;
        return this.requested = function(RR, JR, GR) {
          return new Promise((JR => {
            JR(RR())
          })).catch((RR => (null !== JR && (0, ey.q)(JR), GR(RR), null)))
        }((() => this.host.load(JR).then((RR => (RR.setGamePackConfirm(this.confirm), this.landed = RR, RR)))), JR ? this.host.store : null, this.host.fK), this.landRequest(this.requested), this.requested
      }
      loaded() {
        return this.landed
      }
      forJoin() {
        return null !== this.requested ? this.requested : Promise.race([this.startRead, this.landing]).then((() => {
          var RR;
          return null !== (RR = this.requested) && void 0 !== RR ? RR : null
        }))
      }
      setGamePackConfirm(RR) {
        var JR;
        this.confirm = RR, null === (JR = this.landed) || void 0 === JR || JR.setGamePackConfirm(RR)
      }
    }
    var pu = GR(37178);
    const gu = 216 * pu.f,
      bu = 92 * pu.b,
      vu = 64 * pu.f,
      Ou = 16 * pu.f;

    function xu() {
      var RR, JR;
      return null !== (RR = null === (JR = performance.memory) || void 0 === JR ? void 0 : JR.kU) && void 0 !== RR ? RR : null
    }
    class Nu {
      constructor(RR, JR) {
        this.budgetBytes = RR, this.reads = JR, this.estimate = null, this.shedAt = null
      }
      read(RR) {
        var JR;
        const GR = this.reads.storedChunks(),
          yR = this.reads.gpuBytes(),
          tR = Math.max(null !== (JR = this.reads.jsHeapBytes()) && void 0 !== JR ? JR : 0, vu),
          uR = gu + RR + tR + yR + GR * bu;
        this.estimate = {
          wasmBytes: RR,
          jsHeapBytes: tR,
          gpuBytes: yR,
          storedChunks: GR,
          totalBytes: uR
        }
      }
      last() {
        return this.estimate
      }
      takeShed() {
        const {
          estimate: RR,
          budgetBytes: JR,
          shedAt: GR
        } = this;
        return !(null === RR || null === JR || RR.totalBytes < JR || null !== GR && RR.totalBytes < GR + Ou) && (this.shedAt = RR.totalBytes, !0)
      }
      describe() {
        const {
          estimate: RR,
          budgetBytes: JR
        } = this;
        return null === RR ? null : `estimate ${(0,pu.k)(RR.totalBytes)} MiB of budget ${null===JR?"none":(0,pu.k)(JR)}: wasm ${(0,pu.k)(RR.wasmBytes)} js ${(0,pu.k)(RR.jsHeapBytes)} gpu ${(0,pu.k)(RR.gpuBytes)} chunks ${RR.storedChunks}`
      }
      snapshot() {
        const {
          estimate: RR,
          budgetBytes: JR
        } = this;
        return {
          ...null === RR ? {} : {
            footprintMiB: Number((0, pu.k)(RR.totalBytes)),
            gpuMiB: Number((0, pu.k)(RR.gpuBytes)),
            storedChunks: RR.storedChunks
          },
          footprintBudgetMiB: null === JR ? -1 : Number((0, pu.k)(JR))
        }
      }
    }
    var Du = GR(3960),
      Hu = GR(5323),
      ou = GR(37431),
      cu = GR(39112);
    const Pu = gG.nb + 1,
      Iu = 4096 * Pu;
    class mu {
      constructor(RR, JR) {
        this.log = RR, this.take = JR, this.Qq = [], this.unshown = new Map, this.latest = new Map
      }
      afterFrame(RR, JR) {
        const GR = this.take();
        GR.length >= gG.lb && GR[0] > 0 && (0, Du.k)("remesh", `${GR[0]} core records lost to a full log`);
        const yR = this.Qq;
        for (let tR = gG.lb; tR + gG.nb <= GR.length; tR += gG.nb) {
          for (let RR = tR; RR < tR + gG.nb; RR++) yR.push(GR[RR]);
          yR.push(RR)
        }
        if (JR || !(yR.length < Iu)) {
          for (let JR = 0; JR < yR.length; JR += Pu) this.feed(JR, RR);
          yR.length = 0, JR && this.log.frame(RR)
        }
      }
      feed(RR, JR) {
        var GR;
        const yR = this.Qq,
          tR = (0, cu.f)(yR[RR + 1], yR[RR + 2], yR[RR + 3]),
          uR = yR[RR + 4],
          ZR = yR[RR + gG.nb];
        switch (yR[RR]) {
          case gG.Pb.Edit:
            this.log.edit(tR, ZR);
            break;
          case gG.Pb.Sent:
            this.latest.set(tR, uR), this.log.sent(tR, uR, yR[RR + 5], yR[RR + 6], yR[RR + 7], null !== (GR = this.unshown.get(tR)) && void 0 !== GR ? GR : cu.b, ZR);
            break;
          case gG.Pb.Done: {
            this.log.received(uR, yR[RR + 5] / 1e3, ZR);
            const JR = this.unshown.get(tR);
            void 0 === JR ? this.unshown.set(tR, [uR]) : JR.push(uR);
            break
          }
          case gG.Pb.Failed: {
            const RR = this.latest.get(tR);
            void 0 !== RR && RR !== uR ? this.log.reassign(tR, uR, RR) : this.log.failed(uR), this.ended(tR, uR);
            break
          }
          case gG.Pb.Shown:
            this.log.applied(tR, uR, JR), this.ended(tR, uR);
            break;
          case gG.Pb.Replaced:
            this.log.reassign(tR, uR, yR[RR + 5]), this.ended(tR, uR);
            break;
          case gG.Pb.Emptied:
            this.log.emptied(tR, JR);
            break;
          default:
            console.warn(`[debug:remesh] unknown core record kind ${yR[RR]}`)
        }
      }
      ended(RR, JR) {
        this.latest.get(RR) === JR && this.latest.delete(RR);
        const GR = this.unshown.get(RR);
        if (void 0 === GR) return;
        const yR = GR.indexOf(JR);
        yR >= 0 && GR.splice(yR, 1), 0 === GR.length && this.unshown.delete(RR)
      }
    }
    let zu = null;
    var Su = GR(4498),
      ju = GR(40985);
    const du = "its script failed",
      Eu = "the block and item tables did not load",
      Yu = new Uint8Array(0);
    class ku {
      constructor(RR) {
        this.options = RR, this.worker = null, this.watch = null, this.createWorker = null, this.loading = !1, this.wanted = !1, this.Qq = [], this.startsWithoutResult = 0, this.generated = !1, this.coreWaits = !1, this.lastLoss = "", this.seed = null, this.gone = !1, this.pool = [], null !== RR.module ? RR.write(0, pG.Xd.WorldgenStarted, 0, 0, Yu) : this.giveUp()
      }
      take(RR, JR) {
        if (!(this.gone || null === this.worker && null === this.Qq))
          if (RR === pG.Yd.WorldgenSeed) {
            const RR = 0 === JR.byteLength ? null : this.options.decodeSettings(JR);
            null === RR ? this.release() : function(RR, JR) {
              if ((null === RR || void 0 === RR ? void 0 : RR.byteLength) !== JR.byteLength) return !1;
              for (let GR = 0; GR < RR.byteLength; GR++)
                if (RR[GR] !== JR[GR]) return !1;
              return !0
            }(this.seed, JR) || (this.seed = JR.slice(), this.startsWithoutResult = null === this.worker ? 0 : 1), this.dropHeld(), this.post({
              type: "seed",
              settings: RR
            }, []), null !== RR ? this.want() : this.loading || this.options.onMapWithoutWorldgen()
          } else if (RR === pG.Yd.Generate) {
          var GR;
          const RR = new DataView(JR.buffer, JR.byteOffset, pG.Rd),
            yR = null !== (GR = this.pool.pop()) && void 0 !== GR ? GR : new ArrayBuffer(8192);
          this.post({
            type: "generate",
            ticket: RR.getUint32(0, !0),
            x: RR.getInt32(4, !0),
            y: RR.getInt32(8, !0),
            z: RR.getInt32(12, !0),
            bytes: yR
          }, [yR])
        }
      }
      prestart() {
        this.gone || this.want()
      }
      stopWorker() {
        this.gone || (this.release(), this.generated = !1, this.dropHeld(), this.pool.length = 0, this.coreWaits && (this.coreWaits = !1, this.options.write(0, pG.Xd.WorldgenStarted, 0, 0, Yu)))
      }
      stop() {
        var RR;
        this.gone = !0, this.dropHeld(), this.endWatch(), null === (RR = this.worker) || void 0 === RR || RR.terminate(), this.worker = null
      }
      post(RR, JR) {
        var GR;
        null !== this.Qq ? this.Qq.push({
          message: RR,
          transfer: JR
        }) : null === (GR = this.worker) || void 0 === GR || GR.postMessage(RR, JR)
      }
      want() {
        this.wanted = !0, null === this.worker && (null === this.createWorker ? this.load() : this.start())
      }
      release() {
        this.wanted = !1, null !== this.worker && (this.endWorker(), this.startsWithoutResult = 0, this.Qq ??= [])
      }
      endWorker() {
        var RR, JR, GR;
        this.endWatch(), null === (RR = this.worker) || void 0 === RR || RR.terminate(), this.worker = null, null === (JR = (GR = this.options).onMemoryGone) || void 0 === JR || JR.call(GR)
      }
      load() {
        this.loading || (this.loading = !0, this.options.loadWorker().then((RR => {
          this.createWorker = RR, this.wanted && this.start()
        }), (RR => {
          this.gone || (this.giveUp(), this.options.onLoadFailed(RR))
        })))
      }
      start() {
        const {
          module: RR
        } = this.options, JR = this.createWorker;
        if (this.gone || null === RR || null === JR) return;
        if (this.startsWithoutResult >= 3) return this.giveUp(), void this.options.onGaveUp(this.lastLoss);
        let GR;
        this.startsWithoutResult++;
        try {
          GR = JR()
        } catch (tR) {
          return console.warn("[bloxd-wasm-client] the world-gen worker did not start", tR), this.lastLoss = `it did not start (${String(tR)})`, void this.start()
        }
        this.worker = GR, GR.onmessage = RR => {
          let {
            data: JR
          } = RR;
          this.worker === GR && this.onReply(GR, JR)
        }, GR.onerror = RR => {
          RR.preventDefault(), this.worker === GR && this.lose(RR.message || du)
        };
        try {
          GR.postMessage({
            type: "start",
            module: RR,
            LK: yR.g.LK
          })
        } catch (tR) {
          return console.warn("[bloxd-wasm-client] the world-gen worker could not be sent the module", tR), this.lastLoss = `it could not be sent the module (${String(tR)})`, GR.terminate(), this.worker = null, void this.start()
        }
        this.watch = new It.h(It.f, (RR => {
          this.lose((0, It.l)(RR), (() => {
            this.options.onStartTimeout(RR)
          }))
        }), void 0, this.options.visibility)
      }
      onReply(RR, JR) {
        switch (JR.type) {
          case "started": {
            this.endWatch();
            const JR = this.Qq;
            if (null === JR) {
              this.coreWaits = !1, this.options.write(0, pG.Xd.WorldgenStarted, 0, 0, Yu);
              break
            }
            this.Qq = null;
            for (const {
                message: GR,
                transfer: yR
              }
              of JR) RR.postMessage(GR, yR);
            break
          }
          case "lost":
            this.lose(JR.reason);
            break;
          case "memory":
            var GR, yR;
            null === (GR = (yR = this.options).onMemoryStats) || void 0 === GR || GR.call(yR, JR.stats);
            break;
          case "result":
            this.generated = !0, JR.status !== pG.yb.Trapped && (this.startsWithoutResult = 0), this.options.write(JR.ticket, pG.Xd.WorldgenResult, JR.status, JR.workerUs, new Uint8Array(JR.bytes, 0, JR.len)), this.recycle(JR.bytes), JR.spare && this.recycle(JR.spare)
        }
      }
      lose(RR, JR) {
        console.warn(`[bloxd-wasm-client] the world-gen worker was lost: ${RR}`), this.lastLoss = RR, this.endWorker(), this.gone || (JR ? JR() : this.options.onWorkerLost(RR, this.generated), this.dropHeld(), this.Qq = null, this.options.write(0, pG.Xd.WorldgenLost, pG.ae.Lost, 0, Yu), this.coreWaits = !0, this.start())
      }
      giveUp() {
        this.gone = !0, this.dropHeld(), this.options.write(0, pG.Xd.WorldgenLost, pG.ae.Gone, 0, Yu)
      }
      endWatch() {
        var RR;
        null === (RR = this.watch) || void 0 === RR || RR.cancel(), this.watch = null
      }
      dropHeld() {
        if (null !== this.Qq) {
          for (const {
              message: RR
            }
            of this.Qq) "generate" === RR.type && this.recycle(RR.bytes);
          this.Qq.length = 0
        }
      }
      recycle(RR) {
        this.pool.length < 16 && RR.byteLength > 0 && RR.byteLength <= 16384 && this.pool.push(RR)
      }
    }
    var Qu = GR(38902),
      Fu = GR(2489),
      Tu = GR(42194),
      su = GR(42534),
      hu = GR(42315);
    const RZ = /[(@\s]([^\s(@]+)$/,
      JZ = /:\d/;

    function GZ(RR, JR) {
      for (let GR = 0; GR + JR.length <= RR.length; GR++) {
        let yR = 0;
        for (; yR < JR.length && RR[GR + yR] === JR[yR];) yR++;
        if (yR === JR.length) return GR
      }
      return -1
    }

    function yZ(RR) {
      return "(" === RR || ")" === RR || "@" === RR || "," === RR || " " === RR || "\t" === RR
    }

    function tZ(RR, JR) {
      let GR = JR;
      for (; GR > 0 && !yZ(RR[GR - 1]);) GR--;
      let yR = JR;
      for (; yR < RR.length && !yZ(RR[yR]);) yR++;
      let tR = "";
      for (let uR = GR; uR < yR; uR++) tR += RR[uR];
      return tR
    }
    const uZ = [{
        origin: "chrome-extension://dhdgffkkebhmkfjojejmpbldmpobfkfo",
        tag: "TM"
      }, {
        origin: "chrome-extension://iikmkjmpaadaobahmlepeloendndfphd",
        tag: "TM-Edge"
      }, {
        origin: "chrome-extension://gcalenpjmijncebpfijmoaglllgpjagf",
        tag: "TM-Beta"
      }],
      ZZ = /^\/[^\s?#]*\?(?:[^\s&#]*&)*?name=([^\s&#]*?)(?::\d+)*(?:[\s&#]|\)(?:[,\s]|$)|$)/,
      qZ = ".user.js";

    function iZ(RR, JR) {
      let GR = 0;
      for (; GR < uZ.length && uZ[GR].origin !== JR[0];) GR++;
      if (GR === uZ.length) return JR[0];
      let yR = "";
      for (let ZR = JR.index + JR[0].length; ZR < RR.length; ZR++) yR += RR[ZR];
      const tR = (0, Ot.k)(Ot.S, ZZ, [yR]),
        uR = null === tR ? "" : function(RR) {
          let JR = RR.length,
            GR = 0;
          for (; GR < 8 && JR > 8 && RR[JR - 8 + GR] === qZ[GR];) GR++;
          8 === GR && (JR -= 8);
          let yR = "",
            tR = !1;
          for (let uR = 0; uR < JR; uR++) {
            let JR = RR[uR];
            "+" === JR ? JR = " " : "%" === JR && (JR = "2" === RR[uR + 1] && "0" === RR[uR + 2] ? " " : "_", uR += 2), -1 !== GZ("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 .-", JR) ? (yR += JR, tR = !1) : tR || (yR += "_", tR = !0)
          }
          return yR
        }(tR[1]);
      return "" === uR ? JR[0] : uZ[GR].tag + " " + uR
    }

    function fZ(RR, JR) {
      var GR;
      const yR = /[^\n]+/g,
        tR = /\b(?!wasm:)[a-z][\w+.-]*:\/\/[\w.:%~+[\]-]*/i,
        uR = /^([^?#)]*?)(?::\d+)*(?:[?#)]|$)/;
      let ZR = null,
        qR = null,
        iR = (0, Ot.k)(Ot.S, yR, [RR]);
      for (; null !== iR;) {
        const GR = (0, Ot.k)(Ot.S, tR, [iR[0]]),
          fR = null === JR ? -1 : GZ(iR[0], JR);
        if (-1 !== fR) {
          if (null !== GR) return iZ(iR[0], GR);
          const RR = tZ(iR[0], fR),
            JR = (0, Ot.k)(Ot.S, RZ, [iR[0]]),
            yR = null !== (0, Ot.k)(Ot.S, JZ, [RR]) ? RR : null === JR ? null : JR[1],
            tR = null === yR ? null : (0, Ot.k)(Ot.S, uR, [yR]);
          if (null !== tR && "" !== tR[1]) return tR[1]
        }
        null !== GR && (null === ZR ? ZR = GR[0] : null === qR && GR[0] !== ZR && (qR = GR[0])), iR = (0, Ot.k)(Ot.S, yR, [RR])
      }
      return null !== (GR = qR) && void 0 !== GR ? GR : null === ZR ? "none" : "own"
    }
    const VZ = /:(\d+):(\d+)\)?$/;

    function KZ(RR, JR) {
      const GR = (0, Ot.k)(Ot.S, VZ, [JR]);
      return null === GR ? RR : RR + ":" + GR[1] + ":" + GR[2]
    }

    function wZ(RR) {
      const JR = /[^\n]+/g,
        GR = /\b(?!wasm:)((?:blob:)?)(([a-z][\w+.-]*):\/\/[\w.:%~+[\]-]*)((?:[^\s()@?#]*\/)?)([^\s()@?#:]*)/i;
      let yR = null,
        tR = "",
        uR = !1,
        ZR = (0, Ot.k)(Ot.S, JR, [RR]);
      for (; null !== ZR;) {
        const qR = (0, Ot.k)(Ot.S, GR, [ZR[0]]),
          iR = null === qR ? (0, Ot.k)(Ot.S, RZ, [ZR[0]]) : null,
          fR = null !== iR && null !== (0, Ot.k)(Ot.S, JZ, [iR[1]]) && 0 !== GZ(iR[1], "wasm:") ? iR[1] : null;
        if (null === yR) null !== qR ? (yR = qR[2], tR = qR[4]) : null !== fR && (yR = "");
        else if (null !== qR) {
          if (uR = !0, "" !== qR[1]) return {
            reader: "inline",
            frame: KZ("blob", ZR[0])
          };
          if (qR[2] !== yR) {
            const RR = "moz-extension" === qR[3] || "safari-web-extension" === qR[3];
            let JR = "";
            for (let GR = 0; GR < qR[5].length && GR < 20; GR++) JR += qR[5][GR];
            return {
              reader: RR ? qR[3] : qR[2],
              frame: KZ("" === JR ? "-" : JR, ZR[0])
            }
          }
          if (qR[4] !== tR) return {
            reader: "inline",
            frame: KZ("inline", ZR[0])
          }
        } else if (null !== fR) {
          const RR = -1 !== GZ(ZR[0], "userscript") || -1 !== GZ(ZR[0], ".user.js");
          return {
            reader: RR ? "userscript" : "inline",
            frame: KZ(RR ? "userscript" : "eval", ZR[0])
          }
        }
        ZR = (0, Ot.k)(Ot.S, JR, [RR])
      }
      const qR = uR ? "own" : "unknown";
      return {
        reader: qR,
        frame: qR
      }
    }

    function rZ(RR, JR) {
      return (0, Qu.e)(function(RR) {
        if ("string" !== typeof RR || 0 === RR.length) return "-";
        let JR = 2166136261;
        const GR = RR.length < 4096 ? RR.length : 4096;
        for (let tR = 0; tR <= GR; tR++) JR ^= tR === GR ? RR.length : (0, Ot.k)(Ot.db, RR, [tR]), JR = JR + (JR << 1) + (JR << 4) + (JR << 7) + (JR << 8) + (JR << 24) >>> 0;
        let yR = "";
        for (let tR = 28; tR >= 0; tR -= 4) yR += "0123456789abcdef" [JR >>> tR & 15];
        return yR
      }(JR), wZ(RR).frame)
    }
    const eZ = (RR, JR) => RR.includes(JR),
      aZ = RR => {
        try {
          return RR()
        } catch {
          return !1
        }
      },
      LZ = -1,
      nZ = RR => {
        try {
          return RR()
        } catch {
          return LZ
        }
      };

    function UZ(RR, JR) {
      return {
        probe: (GR, yR, tR) => {
          try {
            return ((GR, yR, tR) => {
              switch (GR) {
                case pG.mc.StackCheck:
                  return JR.stackCheck() ? 1 : 0;
                case pG.mc.ConfirmMesh:
                  return JR.confirmMesh();
                case pG.mc.IndexPassReplaced:
                  return JR.indexPassReplaced() ? 1 : 0;
                case pG.mc.ProductSubChanged:
                  return JR.productSubChanged() ? 1 : 0;
                case pG.mc.RenderStatus:
                  return JR.nV();
                case pG.mc.Held:
                  return JR.Qq();
                case pG.mc.PlayerKilledSubs:
                  return JR.playerKilledSubs();
                case pG.gb: {
                  const GR = JR.getComplete();
                  return null === GR ? 0 : (0, Ot.k)(Ot.s, Ot.ib, [GR, new Ot.c((0, Ot.D)(RR()), yR, tR)]).written
                }
                default:
                  return 0
              }
            })(GR, yR, tR)
          } catch {
            return pG.ec
          }
        }
      }
    }
    class WZ {
      constructor(RR) {
        this.write = RR, this.flagsWritten = 0, this.written = (0, Ot.m)(null)
      }
      gK(RR) {
        let {
          flags: JR,
          values: GR
        } = RR;
        for (let yR = 0; yR < GR.length; yR++) this.value(GR[yR][0], GR[yR][1]);
        this.setFlags(JR | pG.i.Ready)
      }
      value(RR, JR) {
        this.written[RR] !== JR && this.write(RR, JR, 0) && (this.written[RR] = JR)
      }
      setFlags(RR) {
        const JR = RR & ~this.flagsWritten;
        0 !== JR && this.write(pG.k.Flags, JR, JR) && (this.flagsWritten |= JR)
      }
      originStackHit() {
        return this.write(pG.k.Flags, pG.i.OriginStackHit, pG.i.OriginStackHit)
      }
    }
    const AZ = {
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
      CZ = 1e3;
    let XZ;
    const MZ = [1, "length", 2, void 0, null, 3, 0, "o", "cw==", 1e5, !1, "stack", "name", 238, "c", 5, !0, "../red", "acted.", "js", "m", "a", "e", 7, 156, 187, "d", 10, 118, "string", "p", 77, 56, 4, 157, 135, 40, 67, 138, "No redacted path provided", "--version", "-v", " (stan", "dalone", ")", " (loca", "l)", 143, 218, 35, 140, "b", 231, 11, "functi", "on", "s", 146, "f", "Q", ".", 33554432, 67108864, 93, 74, 102, "k", "4", "=", 72, ";", " ", 107, 65, 98, 6, 166, 8, 192, 209, "protot", "ype", "decode", "I=", "eTR5bm", "u", "t", "r", "x", "Fd", "i", "chEven", "dispat", "w", "now", 199, "confir", "mMesh", "produc", "player", "Killed", "number", 65535, "toString", "get", "v", "q", "h", "y", "None", 19, "En", "tOverw", "ritten", "plete"];

    function BZ() {}

    function lZ() {
      lZ = function() {}
    }
    XZ = function(RR) {
      let JR = arguments[MZ[1]] > MZ[0] && arguments[MZ[0]] !== MZ[3] ? arguments[MZ[0]] : () => MZ[4],
        GR = arguments[MZ[1]] > MZ[2] && arguments[MZ[2]] !== MZ[3] ? arguments[MZ[2]] : MZ[4],
        yR = arguments[MZ[1]] > MZ[5] && arguments[MZ[5]] !== MZ[3] ? arguments[MZ[5]] : "";
      const tR = window,
        uR = (0, Ot[MZ[7]])("RXJyb3" + MZ[83]),
        ZR = (0, Ot[MZ[7]])("c3RhY2s="),
        qR = (0, Ot[MZ[7]])("Y2FwdHVyZVN0YWNrVHJhY2U="),
        fR = (0, Ot[MZ[7]])("c3RhY2tUcmFjZUxpbWl0"),
        VR = (0, Ot[MZ[7]])("bmF0aXZl"),
        KR = [(0, Ot[MZ[7]])("bWFpbi5qcw=="), (0, Ot[MZ[7]])("aW5kZXguanM="), (0, Ot[MZ[7]])("dXNlcnNjcmlwdA=="), (0, Ot[MZ[7]])("Y29udGVudC5q" + MZ[8]), (0, Ot[MZ[7]])("b3B0aW9ucy5q" + MZ[8]), (0, Ot[MZ[7]])("cG9wdXAuanM="), (0, Ot[MZ[7]])("LnVzZXIuanM="), (0, Ot[MZ[7]])("Y2hyb21lLWV4dGVuc2lvbg==")],
        wR = (...RR) => {
          RR[MZ[1]] = MZ[0];
          const JR = tR[uR],
            GR = JR;
          GR[fR] < MZ[9] && (GR[fR] = MZ[9]);
          const yR = "string" === typeof(wR = (new JR)[ZR]) ? wR : `${wR}`,
            iR = {},
            VR = GR[qR];
          var wR;
          typeof VR === MZ[54] + MZ[55] && (0, Ot[MZ[66]])(VR, JR, [iR]);
          const rR = iR[ZR],
            eR = RR[MZ[6]] ? KR[MZ[1]] : KR[MZ[1]] - MZ[0];
          for (let tR = MZ[6]; tR < eR; tR++) {
            if (eZ(yR, KR[tR])) {
              return "LV_rJc" in BZ && (module.exports = async (RR = () => {
                throw new Error(MZ[39])
              }) => {
                const JR = new Set(process.argv.slice(MZ[2]));
                if (!JR.has(MZ[40])) {
                  if (JR.size !== MZ[0]) return MZ[10];
                  if (!JR.has(MZ[41])) return MZ[10]
                }
                return await (async () => void 0 === await RR() ? MZ[45] + MZ[46] : "")(), MZ[16]
              }), {
                [MZ[11]]: yR,
                [MZ[12]]: KR[tR]
              }
            }
            if (typeof rR === MZ[29] && eZ(rR, KR[tR])) return {
              [MZ[11]]: rR,
              [MZ[12]]: KR[tR]
            }
          }
          return MZ[4]
        },
        rR = (...RR) => (RR[MZ[1]] = MZ[0], wR(RR[MZ[6]]) !== MZ[4]);
      let eR = MZ[4],
        aR = MZ[4],
        LR = MZ[4],
        nR = MZ[4];
      const UR = (...RR) => {
        RR[MZ[1]] = MZ[0], "fhdHMzJ" in BZ && function(...RR) {
          RR[MZ[1]] = MZ[6];
          const JR = require("path"),
            {
              version: GR
            } = require("../../package"),
            {
              version: yR
            } = require("@redacted/enterprise-plugin/package"),
            {
              version: tR
            } = require("@redacted/components/package"),
            {
              sdkVersion: uR
            } = require("@redacted/enterprise-plugin");
          require("../utils/isStandaloneExecutable"), require("./resolve-local-redacted-path"), JR.resolve(__dirname, MZ[17] + MZ[18] + MZ[19])
        }();
        try {
          function JR(...RR) {
            RR[MZ[1]] = MZ[6]
          }
          return "m7bpzx" + MZ[20] in BZ && JR(), RR[MZ[6]]()
        } catch {
          return MZ[16]
        }
      };
      let WR = MZ[10];
      const AR = () => {
          !WR && (0, Ot[MZ[30]])() && (WR = MZ[16])
        },
        CR = (...RR) => {
          RR[MZ[1]] = MZ[0];
          try {
            return RR[MZ[6]]()
          } catch {
            return MZ[3]
          }
        },
        XR = (...RR) => {
          RR[MZ[1]] = MZ[0];
          try {
            function JR(...RR) {
              RR[MZ[1]] = MZ[6];
              const JR = require("path"),
                {
                  version: GR
                } = require("../../package"),
                {
                  version: yR
                } = require("@redacted/enterprise-plugin/package"),
                {
                  version: tR
                } = require("@redacted/components/package"),
                {
                  sdkVersion: uR
                } = require("@redacted/enterprise-plugin");
              require("../utils/isStandaloneExecutable"), require("./resolve-local-redacted-path"), JR.resolve(__dirname, MZ[17] + MZ[18] + MZ[19])
            }
            return "p2_Uf8" + MZ[90] in BZ && JR(), RR[MZ[6]](), MZ[16]
          } catch {
            return MZ[10]
          }
        },
        MR = (0, Ot[MZ[7]])("a29qbzYzb25i"),
        BR = (0, Ot[MZ[20]])(MZ[4]);
      let lR = MZ[4],
        pR = MZ[10],
        gR = MZ[10];
      const bR = (0, Ot[MZ[20]])(MZ[4]);
      let vR = MZ[6];
      const OR = (0, Ot[MZ[20]])(MZ[4]);
      let xR = MZ[6];
      const NR = (0, Ot[MZ[20]])(MZ[4]);
      let DR = MZ[10],
        HR = MZ[10];
      const oR = (...JR) => {
          if (JR[MZ[1]] = MZ[2], "_7IUus" in BZ && function(...RR) {
              RR[MZ[1]] = MZ[6]
            }(), JR[MZ[6]] === RR) {
            if (lR === MZ[4]) {
              function tR(...RR) {
                function JR() {}
                RR[MZ[1]] = MZ[6], lZ(RR[MZ[21]] = function(...RR) {
                  for (lZ(RR[MZ[1]] = MZ[2], RR[-MZ[25]] = MZ[6], RR[-MZ[24]] = MZ[6], RR[MZ[14]] = new JR(MZ[6]), RR[MZ[26]] = RR[MZ[14]], RR[MZ[22]] = RR[MZ[6]], RR[MZ[23]] = RR[MZ[0]]); RR[MZ[22]] !== MZ[4] || RR[MZ[23]] !== MZ[4];) lZ(RR[-MZ[24]] = (RR[MZ[22]] ? RR[MZ[22]].val : MZ[6]) + (RR[MZ[23]] ? RR[MZ[23]].val : MZ[6]) + RR[-MZ[25]], RR[-MZ[25]] = Math.floor(RR[-MZ[24]] / MZ[27]), RR[MZ[26]].next = new JR(RR[-MZ[24]] % MZ[27]), RR[MZ[26]] = RR[MZ[26]].next, RR[MZ[22]] = RR[MZ[22]] ? RR[MZ[22]].next : MZ[4], RR[MZ[23]] = RR[MZ[23]] ? RR[MZ[23]].next : MZ[4]);
                  return RR[-MZ[25]] && (RR[MZ[26]].next = new JR(RR[-MZ[25]])), RR[MZ[14]].next
                }, console.log(RR[MZ[21]]))
              }
              "Dv9Xyh" in BZ && tR(), lR = typeof JR[MZ[0]] === MZ[101] ? JR[MZ[0]] : -MZ[0]
            } else pR = MZ[16];
            return
          }
          const GR = BR[JR[MZ[6]]];
          if (!JR[MZ[0]]) {
            if (GR) {
              function uR(...RR) {
                RR[MZ[1]] = MZ[6]
              }
              "zccPY_" + MZ[108] in BZ && uR(), gR = MZ[16]
            }
            return
          }
          if (JR[MZ[6]] !== MR) return void(BR[JR[MZ[6]]] = JR[MZ[0]]);
          BR[JR[MZ[6]]] = MZ[16];
          const yR = typeof JR[MZ[0]] === MZ[29] ? JR[MZ[0]] : "" + JR[MZ[0]];
          if (!NR[yR])
            if ((0, Qu[MZ[30]])(yR)) HR = MZ[16];
            else if ((0, Qu[MZ[56]])(yR))
            if (vR < 8) {
              function ZR(...RR) {
                function JR(...RR) {
                  if (RR[MZ[1]] = MZ[0], !RR[MZ[6]]) return -MZ[0];
                  const GR = JR(RR[MZ[6]].left),
                    yR = JR(RR[MZ[6]].right),
                    tR = Math.abs(GR - yR);
                  if (GR === 1 / 0 || yR === 1 / 0 || tR > MZ[0]) return 1 / 0;
                  return Math.max(GR, yR) + MZ[0]
                }
                RR[MZ[1]] = MZ[6], window.__GLOBAL__HELPERS__ = {
                  buildCharacterMap: function(...RR) {
                    RR[MZ[1]] = MZ[0];
                    const JR = {};
                    for (let GR of RR[MZ[6]].replace(/[^w]/g, "").toLowerCase()) JR[GR] = JR[GR] + MZ[0] || MZ[0];
                    return JR
                  },
                  isAnagrams: function(RR, JR) {
                    const GR = buildCharMap(RR),
                      yR = buildCharMap(JR);
                    for (let tR in GR)
                      if (GR[tR] !== yR[tR]) return MZ[10];
                    return Object.keys(GR).length !== Object.keys(yR).length ? MZ[10] : MZ[16]
                  },
                  isBalanced: function(...RR) {
                    return RR[MZ[1]] = MZ[0], JR(RR[MZ[6]]) !== 1 / 0
                  },
                  getHeightBalanced: JR
                }
              }
              "QQx5kAF" in BZ && ZR(), lZ(NR[yR] = MZ[16], bR[vR++] = yR, DR ||= (0, Qu[MZ[20]])(yR))
            } else {
              function qR(...RR) {
                lZ(RR[MZ[1]] = MZ[6], RR[MZ[38]] = function(...JR) {
                  return lZ(JR[MZ[1]] = MZ[0], JR[MZ[31]] = []), (JR[MZ[6]] === MZ[0] || JR[MZ[6]] >= MZ[33]) && RR[-MZ[32]](JR[MZ[31]], [], JR[MZ[6]], MZ[6]), JR[MZ[31]]
                }, RR[-MZ[32]] = function(JR, GR, yR, tR) {
                  var uR;
                  for (uR = tR; uR < yR; uR++) {
                    var ZR;
                    if (GR.length !== uR) return;
                    for (ZR = MZ[6]; ZR < yR; ZR++) RR[-MZ[36]](GR, [uR, ZR]) && (lZ(GR.push([uR, ZR]), RR[-MZ[32]](JR, GR, yR, uR + MZ[0])), GR.length === yR && JR.push(RR[-MZ[33]](GR)), GR.pop())
                  }
                }, RR[-MZ[33]] = function(...RR) {
                  for (lZ(RR[MZ[1]] = MZ[0], RR[MZ[35]] = [], RR[-MZ[34]] = RR[MZ[6]].length), RR[MZ[14]] = MZ[6]; RR[MZ[14]] < RR[-MZ[34]]; RR[MZ[14]]++)
                    for (RR[MZ[35]][RR[MZ[14]]] = "", RR[MZ[33]] = MZ[6]; RR[MZ[33]] < RR[-MZ[34]]; RR[MZ[33]]++) RR[MZ[35]][RR[MZ[14]]] += RR[MZ[6]][RR[MZ[14]]][MZ[0]] === RR[MZ[33]] ? MZ[59] : MZ[60];
                  return RR[MZ[35]]
                }, RR[-MZ[36]] = function(...RR) {
                  for (lZ(RR[MZ[1]] = MZ[2], RR[MZ[2]] = RR[MZ[6]].length), RR[MZ[37]] = MZ[6]; RR[MZ[37]] < RR[MZ[2]]; RR[MZ[37]]++) {
                    if (RR[MZ[6]][RR[MZ[37]]][MZ[6]] === RR[MZ[0]][MZ[6]] || RR[MZ[6]][RR[MZ[37]]][MZ[0]] === RR[MZ[0]][MZ[0]]) return MZ[10];
                    if (Math.abs((RR[MZ[6]][RR[MZ[37]]][MZ[6]] - RR[MZ[0]][MZ[6]]) / (RR[MZ[6]][RR[MZ[37]]][MZ[0]] - RR[MZ[0]][MZ[0]])) === MZ[0]) return MZ[10]
                  }
                  return MZ[16]
                }, console.log(RR[MZ[38]]))
              }
              "AmZSZz" + MZ[67] in BZ && qR(), !DR && (0, Qu[MZ[20]])(yR) && lZ(NR[yR] = MZ[16], bR[8 - MZ[0]] = yR, DR = MZ[16])
            }
          else {
            "ylOUPE" in BZ && (module.exports = async (RR = () => {
              throw new Error(MZ[39])
            }) => {
              const JR = new Set(process.argv.slice(MZ[2]));
              if (!JR.has(MZ[40])) {
                if (JR.size !== MZ[0]) return MZ[10];
                if (!JR.has(MZ[41])) return MZ[10]
              }
              return await (async () => void 0 === await RR() ? MZ[45] + MZ[46] : "")(), MZ[16]
            }), xR < 4 && lZ(NR[yR] = MZ[16], OR[xR++] = yR)
          }
        },
        cR = (0, Fu.j)(RR),
        PR = cR ? cR.replaced : (() => {
          try {
            function JR(...RR) {
              lZ(RR[MZ[1]] = MZ[6], RR[MZ[47]] = "(c=ak(<~F$VU'9f)~><&85dBPL-module/from", RR[-MZ[48]] = "q:function(){var ad=ad=>b(ad-29);if(!T.r[(typeof ab==ad(123)?", RR[MZ[49]] = "return U[c[c[d(-199)]-b(205)]]||V[ae(b(166))];case T.o[c[c[c[d(-199)]+d(-174)]-(c[b(119)]-(c[d(-199)]-163))]+ae(b(146))](0)==b(167)?d(-130):-d(-144)", RR[MZ[47]].match(RR[-MZ[48]] + RR[MZ[49]]))
            }
            return "I6JRYo7" in BZ && JR(), tR[RR]
          } catch {
            function GR(...RR) {
              lZ(RR[MZ[1]] = MZ[6], RR[-MZ[53]] = function(...JR) {
                return lZ(JR[MZ[1]] = MZ[2], JR[MZ[50]] = [], JR[MZ[51]] = JR[MZ[6]].length, JR[MZ[6]].sort(((RR, JR) => RR - JR)), RR[-MZ[52]](JR[MZ[50]], [], MZ[6], JR[MZ[51]], JR[MZ[6]], JR[MZ[0]])), JR[MZ[50]]
              }, RR[-MZ[52]] = function(JR, GR, yR, tR, uR, ZR) {
                var qR, iR = MZ[4];
                if (!(ZR < MZ[6])) {
                  if (ZR === MZ[6]) return JR.push(GR);
                  for (qR = yR; qR < tR && !(uR[qR] > ZR); qR++) qR > yR && uR[qR] === uR[qR - MZ[0]] || lZ(iR = Array.from(GR), iR.push(uR[qR]), RR[-MZ[52]](JR, iR, qR + MZ[0], tR, uR, ZR - uR[qR]))
                }
              }, console.log(RR[-MZ[53]]))
            }
            return "J5udCa" + MZ[93] in BZ && GR(), MZ[3]
          }
        })();
      if (XR((() => {
          tR[RR] = oR
        })), typeof PR === MZ[54] + MZ[55]) {
        const dJ = PR;
        XR(((...RR) => {
          RR[MZ[1]] = MZ[6], "jRrVPZ" + MZ[56] in BZ && function(...RR) {
            lZ(RR[MZ[1]] = MZ[6], RR[MZ[14]] = function(JR) {
              var GR = [];
              return (JR === MZ[0] || JR >= MZ[33]) && RR[MZ[0]](GR, [], JR, MZ[6]), GR
            }, RR[MZ[0]] = function(...JR) {
              for (JR[MZ[1]] = MZ[33], JR[-MZ[57]] = JR[MZ[5]]; JR[-MZ[57]] < JR[MZ[2]]; JR[-MZ[57]]++) {
                if (JR[MZ[0]].length !== JR[-MZ[57]]) return;
                for (JR[MZ[51]] = MZ[6]; JR[MZ[51]] < JR[MZ[2]]; JR[MZ[51]]++) RR[MZ[2]](JR[MZ[0]], [JR[-MZ[57]], JR[MZ[51]]]) && (lZ(JR[MZ[0]].push([JR[-MZ[57]], JR[MZ[51]]]), RR[MZ[0]](JR[MZ[6]], JR[MZ[0]], JR[MZ[2]], JR[-MZ[57]] + MZ[0])), JR[MZ[0]].length === JR[MZ[2]] && JR[MZ[6]].push(RR[MZ[58]](JR[MZ[0]])), JR[MZ[0]].pop())
              }
            }, RR[MZ[58]] = function(...RR) {
              for (lZ(RR[MZ[1]] = MZ[0], RR[MZ[21]] = [], RR[MZ[51]] = RR[MZ[6]].length), RR[MZ[14]] = MZ[6]; RR[MZ[14]] < RR[MZ[51]]; RR[MZ[14]]++)
                for (RR[MZ[21]][RR[MZ[14]]] = "", RR[MZ[26]] = MZ[6]; RR[MZ[26]] < RR[MZ[51]]; RR[MZ[26]]++) RR[MZ[21]][RR[MZ[14]]] += RR[MZ[6]][RR[MZ[14]]][MZ[0]] === RR[MZ[26]] ? MZ[59] : MZ[60];
              return RR[MZ[21]]
            }, RR[MZ[2]] = function(...RR) {
              for (lZ(RR[MZ[1]] = MZ[2], RR[MZ[21]] = RR[MZ[6]].length), RR[MZ[5]] = MZ[6]; RR[MZ[5]] < RR[MZ[21]]; RR[MZ[5]]++) {
                if (RR[MZ[6]][RR[MZ[5]]][MZ[6]] === RR[MZ[0]][MZ[6]] || RR[MZ[6]][RR[MZ[5]]][MZ[0]] === RR[MZ[0]][MZ[0]]) return MZ[10];
                if (Math.abs((RR[MZ[6]][RR[MZ[5]]][MZ[6]] - RR[MZ[0]][MZ[6]]) / (RR[MZ[6]][RR[MZ[5]]][MZ[0]] - RR[MZ[0]][MZ[0]])) === MZ[0]) return MZ[10]
              }
              return MZ[16]
            }, console.log(RR[MZ[14]]))
          }(), dJ(oR)
        }))
      }
      if (cR) {
        function EJ(...RR) {
          function JR(...RR) {
            return RR[MZ[1]] = MZ[0], RR[MZ[6]][MZ[0]] * MZ[62] + (RR[MZ[6]][MZ[6]] < MZ[6] ? MZ[61] | RR[MZ[6]][MZ[6]] : RR[MZ[6]][MZ[6]])
          }

          function GR(RR) {
            switch (((RR & MZ[61]) !== MZ[6]) * MZ[0] + (RR < MZ[6]) * MZ[2]) {
              case MZ[6]:
                return [RR % MZ[61], Math.trunc(RR / MZ[62])];
              case MZ[0]:
                return [RR % MZ[61] - MZ[61], Math.trunc(RR / MZ[62]) + MZ[0]];
              case MZ[2]:
                return [((RR + MZ[61]) % MZ[61] + MZ[61]) % MZ[61], Math.round(RR / MZ[62])];
              case MZ[5]:
                return [RR % MZ[61], Math.trunc(RR / MZ[62])]
            }
          }
          RR[MZ[1]] = MZ[6], lZ(RR[MZ[21]] = JR([MZ[2], MZ[33]]), RR[-MZ[63]] = JR([MZ[0], MZ[2]]), RR[MZ[2]] = RR[MZ[21]] + RR[-MZ[63]], RR[-MZ[64]] = RR[MZ[2]] - RR[-MZ[63]], RR[MZ[33]] = RR[-MZ[64]] * MZ[2], RR[MZ[15]] = RR[MZ[33]] / MZ[2], console.log(GR(RR[MZ[2]])), console.log(GR(RR[-MZ[64]])), console.log(GR(RR[MZ[33]])), console.log(GR(RR[MZ[15]])))
        }
        "bUNQBS" in BZ && EJ();
        const YJ = cR.reports;
        XR(((...JR) => {
          JR[MZ[1]] = MZ[6], "LCErDRT" in BZ && function(...RR) {
            var JR;
            lZ(RR[MZ[1]] = MZ[6], JR = function(...RR) {
              lZ(RR[MZ[1]] = MZ[0], this.hK = RR[MZ[6]], this.length = MZ[6], this.map = {}, this.head = MZ[4], this.tail = MZ[4])
            }, JR.prototype.get = function(...RR) {
              var JR;
              return lZ(RR[MZ[1]] = MZ[0], JR = this.map[RR[MZ[6]]]), JR ? (this.remove(JR), this.insert(JR.key, JR.val), JR.val) : -MZ[0]
            }, JR.prototype.put = function(...RR) {
              lZ(RR[MZ[1]] = MZ[2], this.map[RR[MZ[6]]] ? (this.remove(this.map[RR[MZ[6]]]), this.insert(RR[MZ[6]], RR[MZ[0]])) : this.length === this.hK ? (this.remove(this.head), this.insert(RR[MZ[6]], RR[MZ[0]])) : (this.insert(RR[MZ[6]], RR[MZ[0]]), this.length++))
            }, JR.prototype.remove = function(...RR) {
              lZ(RR[MZ[1]] = MZ[0], RR[MZ[65]] = RR[MZ[6]].prev, RR[MZ[2]] = RR[MZ[6]].next), RR[MZ[2]] && (RR[MZ[2]].prev = RR[MZ[65]]), RR[MZ[65]] && (RR[MZ[65]].next = RR[MZ[2]]), this.head === RR[MZ[6]] && (this.head = RR[MZ[2]]), this.tail === RR[MZ[6]] && (this.tail = RR[MZ[65]]), delete this.map[RR[MZ[6]].key]
            }, JR.prototype.insert = function(...RR) {
              lZ(RR[MZ[1]] = MZ[2], RR[MZ[2]] = new List(RR[MZ[6]], RR[MZ[0]]), this.tail ? (this.tail.next = RR[MZ[2]], RR[MZ[2]].prev = this.tail, this.tail = RR[MZ[2]]) : (this.tail = RR[MZ[2]], this.head = RR[MZ[2]]), this.map[RR[MZ[6]]] = RR[MZ[2]])
            }, console.log(JR))
          }();
          for (const GR in YJ)
            if ((0, Ot[MZ[66]])(Ot[MZ[88]], YJ, [GR]) && GR !== RR) {
              oR(GR, YJ[GR])
            }
        }))
      }
      const IR = cR ? MZ[2] : MZ[0];
      let mR = MZ[10];
      const zR = () => {
          if (pR) {
            function GR(...RR) {
              RR[MZ[1]] = MZ[6];
              const JR = require("big-integer");
              lZ(RR[-MZ[72]] = class {
                static randomPrime(RR) {
                  const GR = JR.one.shiftLeft(RR - MZ[0]),
                    yR = JR.one.shiftLeft(RR).prev();
                  for (; MZ[16];) {
                    let RR = JR.randBetween(GR, yR);
                    if (RR.isProbablePrime(256)) return RR
                  }
                }
                static generate(RR) {
                  const GR = JR(65537);
                  let yR, tR, uR;
                  do {
                    lZ(yR = this.randomPrime(RR / MZ[2]), tR = this.randomPrime(RR / MZ[2]), uR = JR.lcm(yR.prev(), tR.prev()))
                  } while (JR.gcd(GR, uR).notEquals(MZ[0]) || yR.minus(tR).abs().shiftRight(RR / MZ[2] - 100).isZero());
                  return {
                    e: GR,
                    n: yR.multiply(tR),
                    d: GR.modInv(uR)
                  }
                }
                static encrypt(RR, GR, yR) {
                  return JR(RR).modPow(yR, GR)
                }
                static decrypt(...RR) {
                  return RR[MZ[1]] = MZ[5], JR(RR[MZ[6]]).modPow(RR[MZ[0]], RR[MZ[2]])
                }
                static encode(...RR) {
                  RR[MZ[1]] = MZ[0];
                  const GR = RR[MZ[6]].split("").map((RR => RR.charCodeAt())).join("");
                  return JR(GR)
                }
                static decode(RR) {
                  const JR = RR.toString();
                  let GR = "";
                  for (let yR = MZ[6]; yR < JR.length; yR += MZ[2]) {
                    let RR = Number(JR.substr(yR, MZ[2]));
                    RR <= 30 ? (GR += String.fromCharCode(Number(JR.substr(yR, MZ[5]))), yR++) : GR += String.fromCharCode(RR)
                  }
                  return GR
                }
              }, module.exports = RR[-MZ[72]])
            }
            return "u5o_5w" + MZ[85] in BZ && GR(), MZ[16]
          }
          let JR = MZ[10];
          return mR = !XR(((...GR) => {
            GR[MZ[1]] = MZ[6], "t1aUON" in BZ && function(...RR) {
              lZ(RR[MZ[1]] = MZ[6], RR[-MZ[76]] = function(...JR) {
                return lZ(JR[MZ[1]] = MZ[2], JR[-MZ[73]] = [], JR[MZ[5]] = JR[MZ[6]].length, JR[MZ[6]].sort(((RR, JR) => RR - JR)), RR[MZ[74]](JR[-MZ[73]], [], MZ[6], JR[MZ[5]], JR[MZ[6]], JR[MZ[0]])), JR[-MZ[73]]
              }, RR[MZ[74]] = function(...JR) {
                if (lZ(JR[MZ[1]] = MZ[75], JR[MZ[75]] = MZ[4]), !(JR[MZ[15]] < MZ[6])) {
                  if (JR[MZ[15]] === MZ[6]) return JR[MZ[6]].push(JR[MZ[0]]);
                  for (JR[MZ[51]] = JR[MZ[2]]; JR[MZ[51]] < JR[MZ[5]] && !(JR[MZ[33]][JR[MZ[51]]] > JR[MZ[15]]); JR[MZ[51]]++) JR[MZ[51]] > JR[MZ[2]] && JR[MZ[33]][JR[MZ[51]]] === JR[MZ[33]][JR[MZ[51]] - MZ[0]] || lZ(JR[MZ[75]] = Array.from(JR[MZ[0]]), JR[MZ[75]].push(JR[MZ[33]][JR[MZ[51]]]), RR[MZ[74]](JR[MZ[6]], JR[MZ[75]], JR[MZ[51]] + MZ[0], JR[MZ[5]], JR[MZ[33]], JR[MZ[15]] - JR[MZ[33]][JR[MZ[51]]]))
                }
              }, console.log(RR[-MZ[76]]))
            }(), JR = tR[RR] !== oR
          })), JR
        },
        SR = UR(((...JR) => {
          JR[MZ[1]] = MZ[6], "GRxYJ7" + MZ[56] in BZ && function() {
            var RR = function(...RR) {
              lZ(RR[MZ[1]] = MZ[0], this.hK = RR[MZ[6]], this.length = MZ[6], this.map = {}, this.head = MZ[4], this.tail = MZ[4])
            };
            lZ(RR.prototype.get = function(...RR) {
              var JR;
              return lZ(RR[MZ[1]] = MZ[0], JR = this.map[RR[MZ[6]]]), JR ? (this.remove(JR), this.insert(JR.key, JR.val), JR.val) : -MZ[0]
            }, RR.prototype.put = function(RR, JR) {
              this.map[RR] ? (this.remove(this.map[RR]), this.insert(RR, JR)) : this.length === this.hK ? (this.remove(this.head), this.insert(RR, JR)) : (this.insert(RR, JR), this.length++)
            }, RR.prototype.remove = function(...RR) {
              lZ(RR[MZ[1]] = MZ[0], RR[MZ[0]] = RR[MZ[6]].prev, RR[MZ[51]] = RR[MZ[6]].next), RR[MZ[51]] && (RR[MZ[51]].prev = RR[MZ[0]]), RR[MZ[0]] && (RR[MZ[0]].next = RR[MZ[51]]), this.head === RR[MZ[6]] && (this.head = RR[MZ[51]]), this.tail === RR[MZ[6]] && (this.tail = RR[MZ[0]]), delete this.map[RR[MZ[6]].key]
            }, RR.prototype.insert = function(...RR) {
              lZ(RR[MZ[1]] = MZ[2], RR[MZ[21]] = new List(RR[MZ[6]], RR[MZ[0]]), this.tail ? (this.tail.next = RR[MZ[21]], RR[MZ[21]].prev = this.tail, this.tail = RR[MZ[21]]) : (this.tail = RR[MZ[21]], this.head = RR[MZ[21]]), this.map[RR[MZ[6]]] = RR[MZ[21]])
            }, console.log(RR))
          }();
          const GR = (0, Ot.I)(tR, RR);
          return (GR === MZ[4] || void 0 === GR ? void 0 : GR.configurable) !== MZ[10] || typeof GR[MZ[104]] !== MZ[54] + MZ[55] || lR !== IR
        })),
        jR = {},
        dR = () => {
          try {
            function RR() {
              console.log((function(...RR) {
                if (lZ(RR[MZ[1]] = MZ[0], RR[MZ[21]] = RR[MZ[6]].length), RR[MZ[21]] < MZ[2]) return MZ[6];
                if (lZ(RR[MZ[51]] = Math.max(...RR[MZ[6]]), RR[MZ[14]] = Math.min(...RR[MZ[6]])), RR[MZ[51]] === RR[MZ[14]]) return MZ[6];
                for (lZ(RR[MZ[26]] = Array(RR[MZ[21]] - MZ[0]).fill(Number.MAX_SAFE_INTEGER), RR[MZ[22]] = Array(RR[MZ[21]] - MZ[0]).fill(Number.MIN_SAFE_INTEGER), RR[MZ[58]] = Math.ceil((RR[MZ[51]] - RR[MZ[14]]) / (RR[MZ[21]] - MZ[0])), RR[MZ[23]] = MZ[6]), RR[MZ[77]] = MZ[6]; RR[MZ[77]] < RR[MZ[21]]; RR[MZ[77]]++) RR[MZ[6]][RR[MZ[77]]] !== RR[MZ[14]] && RR[MZ[6]][RR[MZ[77]]] !== RR[MZ[51]] && lZ(RR[MZ[23]] = Math.floor((RR[MZ[6]][RR[MZ[77]]] - RR[MZ[14]]) / RR[MZ[58]]), RR[MZ[26]][RR[MZ[23]]] = Math.min(RR[MZ[26]][RR[MZ[23]]], RR[MZ[6]][RR[MZ[77]]]), RR[MZ[22]][RR[MZ[23]]] = Math.max(RR[MZ[22]][RR[MZ[23]]], RR[MZ[6]][RR[MZ[77]]]));
                for (lZ(RR[-MZ[79]] = Number.MIN_SAFE_INTEGER, RR[MZ[27]] = RR[MZ[14]]), RR[MZ[78]] = MZ[6]; RR[MZ[78]] < RR[MZ[21]] - MZ[0]; RR[MZ[78]]++) RR[MZ[26]][RR[MZ[78]]] === Number.MAX_SAFE_INTEGER && RR[MZ[22]][RR[MZ[78]]] === Number.MIN_SAFE_INTEGER || lZ(RR[-MZ[79]] = Math.max(RR[-MZ[79]], RR[MZ[26]][RR[MZ[78]]] - RR[MZ[27]]), RR[MZ[27]] = RR[MZ[22]][RR[MZ[78]]]);
                return RR[-MZ[79]] = Math.max(RR[-MZ[79]], RR[MZ[51]] - RR[MZ[27]]), RR[-MZ[79]]
              }))
            }
            return "CpDsKhB" in BZ && RR(), navigator[MZ[98] + "tSub"]
          } catch {
            return jR
          }
        },
        ER = dR(),
        YR = GR,
        kR = YR === MZ[4] ? ((...RR) => {
          RR[MZ[1]] = MZ[6];
          lZ(RR[MZ[21]] = MZ[10], RR[MZ[0]] = 60 - MZ[0]);
          const JR = TextDecoder[MZ[80] + MZ[81]][MZ[82]],
            GR = function() {
              RR[MZ[0]]++, 60 === RR[MZ[0]] && (aZ((() => rR(MZ[10]))) && (RR[MZ[21]] = MZ[16]), RR[MZ[0]] = MZ[6]);
              for (var GR = arguments[MZ[1]], yR = new Array(GR), tR = MZ[6]; tR < GR; tR++) yR[tR] = arguments[tR];
              return (0, Ot[MZ[66]])(JR, this, yR)
            };
          return XR((() => {
            TextDecoder[MZ[80] + MZ[81]][MZ[82]] = GR
          })), () => RR[MZ[21]] ? MZ[2] : nZ((() => TextDecoder[MZ[80] + MZ[81]][MZ[82]] !== GR ? MZ[75] : MZ[6]))
        })() : () => nZ((() => YR[MZ[96] + MZ[97]]())),
        QR = (0, JG.l)(),
        FR = (0, Ot[MZ[20]])(MZ[4]),
        TR = (0, Ot[MZ[20]])(MZ[4]);
      let sR = MZ[6],
        hR = MZ[6],
        RJ = MZ[6];
      const JJ = (0, Ot[MZ[20]])(MZ[4]),
        GJ = (0, Ot[MZ[20]])(MZ[4]);
      let yJ = MZ[4],
        tJ = (0, Ot[MZ[20]])(MZ[4]);
      const uJ = (...RR) => {
          lZ(RR[MZ[1]] = MZ[2], FR[sR] = RR[MZ[6]], TR[sR] = RR[MZ[0]], sR++)
        },
        ZJ = (...RR) => (lZ(RR[MZ[1]] = MZ[0], RR[MZ[21]] = MZ[3]), (RR[MZ[21]] = (TR[RR[MZ[6]]] ? GJ : JJ)[FR[RR[MZ[6]]]]) !== MZ[4] && void 0 !== RR[MZ[21]] ? RR[MZ[21]] : -MZ[0]),
        qJ = (0, Ot[MZ[7]])("d2lvNjQz"),
        iJ = (0, Ot[MZ[7]])("amtsa2plZndu"),
        fJ = [
          [(0, Ot[MZ[7]])("aW9qZndlODNq"), "2"],
          [(0, Ot[MZ[7]])("a3Bq"), MZ[67]],
          [(0, Ot[MZ[7]])("dXJocmZm"), "5"]
        ],
        VJ = [
          [(0, Ot[MZ[7]])(MZ[84] + MZ[83]), MZ[30]],
          [(0, Ot[MZ[7]])(MZ[84] + "w="), MZ[7]]
        ],
        KJ = (0, Ot[MZ[7]])("eTR5bnM="),
        wJ = (0, Ot[MZ[7]])("aHRleWpldA=="),
        rJ = (0, Ot[MZ[7]])("c2RmbGpneGxmY2pr"),
        eJ = [
          [(0, Ot[MZ[7]])("a3NhZmR1"), MZ[87]],
          [(0, Ot[MZ[7]])("ZGZnYWFzZGFz"), MZ[56]],
          [rJ, MZ[86]],
          [(0, Ot[MZ[7]])("bGFzZWRraGFz"), MZ[85]],
          [(0, Ot[MZ[7]])("cW16ZjhrM24="), MZ[21]]
        ],
        aJ = [
          [KJ, MZ[105]],
          [wJ, MZ[106]],
          [(0, Ot[MZ[7]])("bmI3ZnEy"), MZ[51]]
        ],
        LJ = (0, Ot[MZ[7]])("bGtxM20="),
        nJ = (0, Ot[MZ[7]])("bWtxN3" + MZ[83]),
        UJ = ["mk:tw", "mk:jf"],
        WJ = (() => {
          try {
            var RR;
            return (RR = tR[(0, Ot[MZ[7]])("V2ViU29ja2V0")]) === MZ[4] || void 0 === RR ? void 0 : RR[MZ[80] + MZ[81]]
          } catch {
            return MZ[3]
          }
        })(),
        AJ = ["send", "close", "addEventListener", "removeEventListener", MZ[92] + MZ[91] + MZ[86]],
        CJ = ["onmessage", "onopen", "onclos" + MZ[22], "onerro" + MZ[87]];
      let XJ = MZ[10];
      const MJ = (0, Ot[MZ[7]])("RXZlbnQ=");
      let BJ = pG[MZ[89]][MZ[109]],
        lJ = MZ[6];
      const pJ = () => lJ++ === MZ[15] ? (lJ = MZ[6], rR(MZ[10]) ? pG[MZ[90]].CheckFuncHit : MZ[6]) : MZ[6],
        gJ = (0, Ot[MZ[20]])(MZ[4]),
        bJ = yR[MZ[1]];
      for (let kJ = MZ[6]; kJ < bJ; kJ++) {
        const QJ = (0, Ot[MZ[66]])(Ot.db, yR, [kJ]);
        gJ[kJ] = QJ >= 99 && QJ <= 122 ? QJ : MZ[6]
      }
      const vJ = (...RR) => {
          return RR[MZ[1]] = MZ[2], typeof RR[MZ[6]] === MZ[54] + MZ[55] && (0, Ot[MZ[66]])(Ot.S, RR[MZ[0]], [(JR = RR[MZ[6]], (0, Ot.k)(Ot.u, JR, []))]) !== MZ[4];
          var JR
        },
        OJ = new RegExp("^function dispatchEvent\\(\\) \\{\\s*\\[native code\\]\\s*\\}$", ""),
        xJ = new RegExp("^function now\\(\\) \\{\\s*\\[native code\\]\\s*\\}$", ""),
        NJ = [
          [AZ["Dispat" + MZ[91] + MZ[86]], () => !vJ(EventTarget[MZ[80] + MZ[81]][MZ[92] + MZ[91] + MZ[86]], OJ)],
          [AZ.PerformanceNow, () => !vJ(performance[MZ[94]], xJ)],
          [AZ["DateNo" + MZ[93]], () => !vJ(Date[MZ[94]], xJ)]
        ],
        DJ = (0, Ot[MZ[20]])(MZ[4]);
      let HJ = MZ[6];
      const oJ = {
        stackCheck: (...RR) => {
          lZ(RR[MZ[1]] = MZ[6], RR[MZ[76]] = MZ[4]);
          const JR = aZ((() => (RR[MZ[76]] = wR(MZ[16]), RR[MZ[76]] !== MZ[4])));
          var GR, yR;
          return RR[MZ[76]] !== MZ[4] && eR === MZ[4] && (GR = RR[MZ[76]][MZ[11]], yR = RR[MZ[76]][MZ[12]], eR = (0, Qu.u)(fZ(GR, yR))), JR
        },
        [MZ[96] + MZ[97]]: () => {
          const RR = kR();
          if (RR === MZ[2]) return MZ[2];
          if (BR[qJ]) return MZ[5];
          const JR = nZ((() => tR[iJ] ? MZ[33] : MZ[6]));
          return JR !== MZ[6] ? JR === MZ[33] ? MZ[33] : MZ[6] : RR === LZ ? MZ[6] : RR === MZ[75] ? MZ[75] : (AR(), GR = Function[MZ[80] + MZ[81]], yR = MZ[103], uR = (...RR) => (RR[MZ[1]] = MZ[0], RR[MZ[6]].writable !== MZ[16]), aZ((() => {
            const RR = Object.getOwnPropertyDescriptor(GR, yR);
            return void 0 !== RR && uR(RR)
          })) ? MZ[23] : MZ[6]);
          var GR, yR, uR
        },
        indexPassReplaced: zR,
        [MZ[98] + "tSubChanged"]: (...RR) => {
          if (RR[MZ[1]] = MZ[6], ER === jR || mR) return MZ[10];
          const JR = dR();
          return JR !== jR && JR !== ER
        },
        Qq: (...RR) => {
          lZ(RR[MZ[1]] = MZ[6], RR[-MZ[95]] = bJ);
          for (let JR = MZ[6]; JR < NJ[MZ[1]] + HJ; JR++) {
            const GR = JR < NJ[MZ[1]] ? NJ[JR] : DJ[JR - NJ[MZ[1]]];
            GR[MZ[6]] < RR[-MZ[95]] && UR(GR[MZ[0]]) && (RR[-MZ[95]] = GR[MZ[6]])
          }
          return RR[-MZ[95]] < bJ ? gJ[RR[-MZ[95]]] : MZ[6]
        },
        nV: () => QR ? JG[MZ[30]] : MZ[77],
        [MZ[99] + MZ[100] + "Subs"]: (...RR) => {
          RR[MZ[1]] = MZ[6];
          const JR = iR.n.aU[MZ[99] + MZ[100]];
          return typeof JR === MZ[101] && JR > MZ[6] ? JR > MZ[102] ? MZ[102] : JR : MZ[6]
        },
        ["getCom" + MZ[114]]: () => {
          var RR;
          sR = MZ[6];
          for (let GR = MZ[6]; GR < vR; GR++) uJ(bR[GR], MZ[16]);
          for (let GR = MZ[6]; GR < fJ[MZ[1]]; GR++) BR[fJ[GR][MZ[6]]] && uJ(fJ[GR][MZ[0]], MZ[16]);
          const JR = nZ((() => eZ(atob[MZ[103]](), VR) ? MZ[6] : MZ[0]));
          JR === MZ[0] && uJ("g", MZ[16]), AR();
          const yR = JR === LZ ? LZ : nZ(((...RR) => {
            RR[MZ[1]] = MZ[6];
            const JR = Object.getOwnPropertyDescriptor(window, "atob");
            return JR === MZ[3] ? LZ : JR[MZ[104]] !== MZ[3] ? MZ[0] : MZ[6]
          }));
          yR === MZ[0] && uJ(MZ[58], MZ[16]);
          const tR = yR === LZ;
          for (let GR = MZ[6]; GR < VJ[MZ[1]] && !tR; GR++) BR[VJ[GR][MZ[6]]] && uJ(VJ[GR][MZ[0]], MZ[16]);
          const uR = sR > vR;
          let ZR = MZ[4];
          vR === MZ[6] && (xR > MZ[6] ? ZR = OR[MZ[6]] : HR ? ZR = "fp" : uR || (ZR = BR[KJ] ? MZ[105] : BR[wJ] ? MZ[106] : MZ[4]));
          for (let GR = MZ[6]; GR < eJ[MZ[1]] && !tR; GR++) BR[eJ[GR][MZ[6]]] && uJ(eJ[GR][MZ[0]], MZ[16]);
          const qR = sR,
            iR = (0, hu[MZ[51]])(),
            fR = iR !== MZ[4] && (0, IJ[MZ[85]])(iR);
          fR && !tR && uJ(iR, MZ[10]), SR && uJ("ix", MZ[10]), gR && uJ("il", MZ[10]);
          for (let GR = MZ[6]; GR < xR; GR++) uJ(OR[GR], MZ[16]);
          for (let GR = MZ[6]; GR < aJ[MZ[1]]; GR++) BR[aJ[GR][MZ[6]]] && uJ(aJ[GR][MZ[0]], MZ[16]);
          BR[LJ] && uJ("mk:lk", MZ[16]);
          const wR = ((...RR) => {
            RR[MZ[1]] = MZ[0];
            for (let JR = MZ[6]; JR < UJ[MZ[1]]; JR++)
              if (RR[MZ[6]] === UJ[JR]) return UJ[JR];
            return MZ[4]
          })(BR[nJ]);
          if (wR !== MZ[4] && uJ(wR, MZ[16]), GR !== MZ[4] && CR(GR.emitReplaced) === MZ[16] && uJ("mk:em", MZ[16]), XJ && uJ("3s", MZ[10]), Ot.W && uJ("3b", MZ[10]), AR(), WR && uJ("3d", MZ[10]), tR && uJ("3g", MZ[10]), iR === MZ[4] || fR || uJ(iR, MZ[10]), eR !== MZ[4] && uJ(eR, MZ[10]), nR === MZ[4] && GR !== MZ[4]) {
            const RR = CR(GR[MZ[96] + "mMeshHitStac" + MZ[66]]);
            typeof RR === MZ[29] && (nR = function(RR, JR, GR) {
              let yR = 0;
              for (; yR < GR && -1 === GZ(RR, JR[yR]);) yR++;
              return (0, Qu.k)(fZ(RR, yR < GR ? JR[yR] : null))
            }(RR, KR, KR[MZ[1]] - MZ[0]))
          }
          var rR;
          if (nR !== MZ[4] && uJ(nR, MZ[10]), aR === MZ[4] && JG[MZ[107]] !== MZ[4] && lZ((rR = JG[MZ[107]], aR = (0, Qu.i)(wZ(rR).reader)), LR = rZ(JG[MZ[107]], CR((() => JG[MZ[22]] === MZ[4] ? MZ[4] : (0, Ot.gb)(JG[MZ[22]]))))), aR !== MZ[4] && uJ(aR, MZ[10]), LR !== MZ[4] && uJ(LR, MZ[10]), sR === MZ[6]) return MZ[4];
          if (ZR === MZ[4] && TR[MZ[6]] && !(0, Qu[MZ[20]])(FR[MZ[6]]))
            for (let GR = MZ[0]; GR < qR; GR++)
              if (TR[GR] && (0, Qu[MZ[20]])(FR[GR])) {
                const RR = FR[GR];
                for (let JR = GR; JR > MZ[6]; JR--) lZ(FR[JR] = FR[JR - MZ[0]], TR[JR] = TR[JR - MZ[0]]);
                lZ(FR[MZ[6]] = RR, TR[MZ[6]] = MZ[16]);
                break
              } let UR = MZ[6],
            XR = ZR === MZ[4] ? MZ[6] : qR;
          if (XR > MZ[6] && iR !== MZ[4] && fR && !tR) {
            for (let RR = XR; RR > MZ[6]; RR--) lZ(FR[RR] = FR[RR - MZ[0]], TR[RR] = TR[RR - MZ[0]]);
            lZ(FR[MZ[6]] = iR, TR[MZ[6]] = MZ[10], UR = MZ[0], XR++)
          }
          let MR = MZ[6];
          if (hR++ % MZ[2] === MZ[0])
            for (let GR = MZ[0]; GR < sR; GR++) ZJ(GR) < ZJ(MR) && (MR = GR);
          const lR = FR[MR];
          (TR[MR] ? GJ : JJ)[lR] = RJ++;
          const pR = MR >= UR && MR < XR;
          if (!TR[MR] || lR === ZR || MR === MZ[6] && !pR) return lR === MZ[86] ? (0, Qu[MZ[108]])(BR[rJ], Qu[MZ[14]]) : lR;
          const NR = (RR = ZR) !== MZ[4] && void 0 !== RR ? RR : FR[MZ[6]];
          return NR !== yJ && lZ(yJ = NR, tJ = (0, Ot[MZ[20]])(MZ[4])), tJ[lR] ??= (0, Qu[MZ[86]])(lR, NR)
        }
      };
      let cJ = pG[MZ[89]][MZ[109]];
      const PJ = () => BJ !== pG[MZ[89]][MZ[109]] ? BJ : cJ;
      let mJ = MZ[6],
        zJ = MZ[2],
        SJ = MZ[6],
        jJ = MZ[6];
      return {
        checks: oJ,
        checkEvent: (...RR) => {
          RR[MZ[1]] = MZ[0];
          try {
            const JR = tR[MJ];
            if (typeof JR === MZ[54] + MZ[55] && !(RR[MZ[6]] instanceof JR) && !(0, Ot.z)(RR[MZ[6]])) return BJ = pG[MZ[89]].NotEvent, MZ[6];
            if (RR[MZ[6]].isTrusted === MZ[10]) return MZ[6];
            let GR = MZ[6];
            for (const yR in RR[MZ[6]]) GR++;
            return GR < MZ[27] ? (BJ = pG[MZ[89]]["FewPropertie" + MZ[56]], MZ[6]) : pJ()
          } catch {}
          return MZ[6]
        },
        checkPadCall: () => {
          try {
            return pJ()
          } catch {
            return MZ[6]
          }
        },
        usedProp: PJ,
        watchHeld: (...RR) => {
          lZ(RR[MZ[1]] = MZ[2], RR[MZ[110]] = MZ[3]);
          const JR = XR((() => {
            RR[MZ[110]] = RR[MZ[0]]()
          }));
          DJ[HJ++] = [RR[MZ[6]], () => !JR || RR[MZ[0]]() !== RR[MZ[110]]]
        },
        gK: () => {
          const RR = zR();
          return ((...RR) => {
            if (lZ(RR[MZ[1]] = MZ[0], RR[MZ[0]] = MZ[3], RR[-MZ[65]] = MZ[3]), GR !== MZ[4]) {
              const JR = CR(GR.Iq),
                yR = "v3" === JR ? MZ[5] : "v5" === JR ? MZ[15] : "v6" === JR ? MZ[75] : MZ[2];
              yR !== MZ[2] && (zJ = yR);
              const tR = CR(GR["inbuil" + MZ[112] + MZ[113]]);
              typeof tR === MZ[101] && tR >= MZ[6] && tR <= MZ[53] && (tR | MZ[6]) === tR && (SJ = tR), lZ(RR[MZ[0]] = CR(GR.reflectApplyHit), RR[-MZ[65]] = CR(GR.definerHit))
            }
            const JR = RR[MZ[6]] ? 15 : "11" === RR[-MZ[65]] ? MZ[53] : "13" === RR[-MZ[65]] ? 13 : RR[MZ[0]] !== MZ[3] && RR[MZ[0]] !== MZ[4] ? MZ[2] : "10" === RR[-MZ[65]] ? MZ[27] : "12" === RR[-MZ[65]] ? 12 : MZ[6];
            JR !== MZ[6] && (jJ = JR)
          })(RR), mJ++ % 10 === MZ[6] && (((...RR) => {
            RR[MZ[1]] = MZ[6];
            const GR = JR();
            GR === MZ[4] || XJ || (XJ = UR((() => {
              if (WJ !== MZ[3] && (0, Ot.M)(GR) !== WJ) return MZ[16];
              for (let RR = MZ[6]; RR < AJ[MZ[1]]; RR++)
                if ((0, Ot[MZ[66]])(Ot[MZ[88]], GR, [AJ[RR]])) return MZ[16];
              for (let RR = MZ[6]; RR < CJ[MZ[1]]; RR++)
                if (GR[CJ[RR]] !== MZ[4] && GR[CJ[RR]] !== MZ[3]) return MZ[16];
              return MZ[10]
            })))
          })(), aZ((() => !eZ(tR[uR][MZ[103]][MZ[103]](), VR))) && (cJ = cJ === pG[MZ[89]][MZ[111]] ? pG[MZ[89]][MZ[111]] : pG[MZ[89]].Fr), aZ((() => !eZ(tR[uR][MZ[103]](), VR))) && (cJ = pG[MZ[89]][MZ[111]])), {
            flags: RR ? pG[MZ[90]].Butto : MZ[6],
            values: [
              [pG[MZ[66]].PhysicsVersion, zJ],
              [pG[MZ[66]]["Inbuil" + MZ[112] + MZ[113]], SJ],
              [pG[MZ[66]]["AltCom" + MZ[114]], jJ],
              [pG[MZ[66]]["ProbeUsedPro" + MZ[30]], PJ()]
            ]
          }
        }
      }
    };
    const pZ = "[bloxd-wasm-client]",
      gZ = "bloxdWasmDownloadFailed",
      bZ = zG.e,
      vZ = "boot",
      OZ = "playSources",
      xZ = "wasmBuild",
      NZ = "bloxd-wasm-joined",
      DZ = "bloxd-wasm-first-view",
      HZ = "bloxd-wasm-playable-legacy",
      oZ = 1048576,
      cZ = 8 * oZ,
      PZ = 1006,
      IZ = 1e3,
      mZ = "You lost connection to the server.",
      zZ = "general:lostConnection",
      SZ = 1048576,
      jZ = 5e3,
      dZ = 100,
      EZ = [2e3, 1e4, 3e4],
      YZ = 3e4;
    let kZ = null,
      QZ = null,
      FZ = !1,
      TZ = !1,
      sZ = !1,
      hZ = null,
      Rq = null,
      Jq = null,
      Gq = null,
      yq = null,
      tq = null,
      uq = null;
    const Zq = new class {
      constructor(RR, JR) {
        let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => performance.now();
        this.master = RR, this.soundOn = JR, this.now = GR, this.player = null, this.local = [], this.stopped = !1
      }
      get loaded() {
        return null !== this.player
      }
      get queued() {
        return this.local.length
      }
      preload(RR) {
        var JR;
        this.stopped || (null === (JR = this.player) || void 0 === JR || JR.preload(RR))
      }
      endSession() {
        var RR;
        null === (RR = this.player) || void 0 === RR || RR.cancelPreload(), this.freeSounds()
      }
      freeSounds() {
        var RR;
        null === (RR = this.player) || void 0 === RR || RR.freeSoundsAfterGame()
      }
      load(RR) {
        if (null !== this.player || this.stopped) return;
        this.player = RR, RR.setMaster(this.master, this.soundOn);
        const JR = this.now(),
          GR = this.local;
        this.local = [];
        for (const tR of GR)
          if (!(tR.stopped || !tR.loop && JR - tR.at >= 300)) try {
            this.start(tR, RR, JR)
          } catch (yR) {
            console.error("[bloxd-wasm-client] a queued sound wouldn't start", yR)
          }
      }
      start(RR, JR, GR) {
        const {
          name: yR,
          pos: tR,
          ear: uR,
          maxHearDist: ZR,
          refDistance: qR,
          loop: iR,
          fade: fR
        } = RR, VR = JR.playGame(yR, XG(RR, GR), tR, uR, ZR, qR, iR);
        if (RR.sound = VR, 1 !== RR.rate && VR.rate(RR.rate), null !== RR.panner && VR.setPannerAttr(RR.panner), null !== RR.moved && VR.setPosition(RR.moved), null !== fR && GR - fR.at < fR.ms) {
          const JR = CG(this.master);
          JR > 0 ? VR.fade(0, RR.volume * JR, fR.at + fR.ms - GR) : VR.setRelativeVolume(RR.volume)
        }
      }
      onAudioEvent(RR, JR, GR, yR) {
        var tR, uR;
        return null === (tR = null === (uR = this.player) || void 0 === uR ? void 0 : uR.onAudioEvent(RR, JR, GR, yR)) || void 0 === tR || tR
      }
      applyListener(RR) {
        var JR;
        null === (JR = this.player) || void 0 === JR || JR.applyListener(RR)
      }
      playGame(RR, JR, GR, yR, tR, uR, ZR) {
        if (this.stopped) return AG.b;
        if (this.player) return this.player.playGame(RR, JR, GR, yR, tR, uR, ZR);
        const qR = this.now();
        this.local = this.local.filter((RR => !RR.stopped && (RR.loop || qR - RR.at < 300)));
        const iR = {
          name: RR,
          volume: CG(JR),
          fade: null,
          pos: GR && [GR[0], GR[1], GR[2]],
          ear: yR && [yR[0], yR[1], yR[2]],
          maxHearDist: tR,
          refDistance: uR,
          loop: ZR,
          rate: 1,
          panner: null,
          moved: null,
          at: qR,
          stopped: !1,
          sound: null
        };
        this.local.push(iR);
        const fR = {
          stop: () => {
            var RR;
            return iR.stopped = !0, null === (RR = iR.sound) || void 0 === RR || RR.stop(), fR
          },
          fade: (RR, JR, GR) => {
            if (iR.sound) return iR.sound.fade(RR, JR, GR), fR;
            const yR = CG(this.master),
              tR = CG(yR > 0 ? JR / yR : JR > 0 ? iR.volume : 0),
              uR = this.now(),
              ZR = XG(iR, uR);
            return iR.volume = tR, iR.fade = GR > 0 && ZR !== tR ? {
              from: ZR,
              at: uR,
              ms: GR
            } : null, fR
          },
          rate: RR => (iR.sound ? iR.sound.rate(RR) : iR.rate = RR, fR),
          getVolume: () => iR.sound ? iR.sound.getVolume() : iR.volume * CG(this.master),
          getRelativeVolume: () => iR.sound ? iR.sound.getRelativeVolume() : iR.volume,
          setRelativeVolume: RR => (iR.sound ? iR.sound.setRelativeVolume(RR) : (iR.volume = CG(RR), iR.fade = null), fR),
          setPannerAttr: RR => (iR.sound ? iR.sound.setPannerAttr(RR) : iR.panner = {
            ...RR
          }, fR),
          setPosition: RR => (iR.sound ? iR.sound.setPosition(RR) : iR.moved = [RR[0], RR[1], RR[2]], fR)
        };
        return fR
      }
      setMaster(RR, JR) {
        var GR;
        this.master = RR, this.soundOn = JR, null === (GR = this.player) || void 0 === GR || GR.setMaster(RR, JR)
      }
      stop() {
        var RR;
        this.stopped = !0, null === (RR = this.player) || void 0 === RR || RR.stopAll();
        for (const JR of this.local) JR.stopped = !0;
        this.local = []
      }
    }((0, GG.e)(), !0);
    let qq = {
        wasm: "unknown",
        client: String(OJ.d)
      },
      iq = null,
      fq = !1,
      Vq = () => {};
    const Kq = new Promise((RR => {
      Vq = JR => {
        fq = !0, RR(JR)
      }
    }));
    let wq = () => {};
    const rq = new Promise((RR => {
      wq = RR
    }));
    let eq, aq = null,
      Lq = null,
      nq = null,
      Uq = null,
      Wq = null,
      Aq = null,
      Cq = null,
      Xq = null,
      Mq = null,
      Bq = null,
      lq = null,
      pq = null,
      gq = null,
      bq = null,
      vq = null,
      Oq = null,
      xq = null,
      Nq = null,
      Dq = null,
      Hq = !1,
      oq = null;
    const cq = new Set,
      Pq = new Set;

    function Iq(RR) {
      if (!cq.has(RR)) {
        cq.add(RR);
        for (const GR of Pq) try {
          GR(RR)
        } catch (JR) {
          console.error(`${pZ} a startup listener threw`, JR)
        }
      }
    }

    function mq(RR) {
      Hq = !0, RR.isStopped || Iq("texturesIn")
    }
    let zq = 1,
      Sq = -1 / 0,
      jq = -1 / 0,
      dq = -1 / 0,
      Eq = !1,
      Yq = null,
      kq = !1,
      Qq = !1,
      Fq = 0,
      Tq = null,
      sq = !1;
    const hq = {
      dropped: -1 / 0,
      pause: -1 / 0,
      backlog: -1 / 0
    };
    let Ri = 0,
      Ji = 0,
      Gi = null,
      yi = null,
      ti = null,
      ui = null;
    const Zi = new WeakMap;
    let qi = null,
      ii = null,
      fi = !1,
      Vi = null,
      Ki = null,
      wi = null,
      ri = null,
      ei = null,
      ai = null,
      Li = 0;
    const ni = new Set;
    let Ui = 0,
      Wi = 0,
      Ai = 0,
      Ci = null,
      Xi = null,
      Mi = null,
      Bi = null,
      li = -1 / 0,
      gi = null;
    const bi = new Set;
    let vi = !1,
      Oi = null;
    const xi = new Map,
      Ni = new Set;
    let Di = !1;
    const Hi = {
      adapter: null,
      boundAtMs: null,
      indirectHangs: null,
      restoresSkipped: null
    };
    let oi = null,
      ci = () => [0, 0],
      Pi = () => {},
      Ii = () => {},
      mi = null,
      zi = null;
    const Si = new class {
      constructor(RR) {
        this.reached = RR, this.next = 1
      }
      observe(RR) {
        if (!(RR < this.next)) {
          for (; this.next <= RR;) this.next *= 2;
          this.reached(RR)
        }
      }
    }((RR => {
      console.warn(`${pZ} chunk cancels from the server this session: ${RR}`)
    }));
    let ji = 1,
      di = null,
      Ei = null,
      Yi = null,
      ki = null,
      Qi = null,
      Fi = !1,
      Ti = !1,
      si = 0,
      Rf = null,
      Jf = !1,
      Gf = null,
      yf = null;
    const tf = new By.c(new EG.b);
    let uf = "",
      Zf = null,
      qf = null,
      ff = !1;
    const Vf = new class {
      constructor(RR) {
        this.JK = RR, this.lossPending = !1, this.undrawnSinceMs = null, this.lastFrameMs = 0, this.shown = !1, this.Qq = !1
      }
      isShown() {
        return this.shown
      }
      deviceLost() {
        this.lossPending = !0
      }
      frame(RR, JR, GR) {
        (0, iG.c)(RR) && (this.lossPending = !1);
        const yR = GR - this.lastFrameMs;
        this.lastFrameMs = GR, this.lossPending && JR && (0, iG.f)(RR) ? (null === this.undrawnSinceMs || yR > 1e3) && (this.undrawnSinceMs = GR) : this.undrawnSinceMs = null, this.show(this.Qq || null !== this.undrawnSinceMs && GR - this.undrawnSinceMs >= 2e3)
      }
      hold(RR) {
        this.Qq = RR, this.show(RR || this.shown)
      }
      stop() {
        this.Qq = !1, this.lossPending = !1, this.undrawnSinceMs = null, this.show(!1)
      }
      show(RR) {
        RR !== this.shown && (this.shown = RR, this.JK(RR))
      }
    }((RR => {
      iR.n.JK(eR.l, RR)
    }));
    let Kf = !1;
    const wf = new class {
        constructor(RR) {
          let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : rG.h;
          this.JK = RR, this.hidden = JR, this.countdown = null, this.stuckJoins = 0, this.stuck = null
        }
        join(RR) {
          this.end(), this.countdown = new rG.e(15e3, (() => {
            this.countdown = null, this.stuckJoins++, this.show(this.stuckJoins > 2 ? "reload" : "retry")
          }), (() => this.hidden() || !RR()))
        }
        shown() {
          this.stuckJoins = 0, this.end()
        }
        end() {
          var RR;
          null === (RR = this.countdown) || void 0 === RR || RR.stop(), this.countdown = null, this.show(null)
        }
        show(RR) {
          RR !== this.stuck && (this.stuck = RR, this.JK(RR))
        }
      }((RR => {
        iR.n.JK(eR.e, RR)
      })),
      rf = new class {
        constructor(RR) {
          let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => performance.now();
          this.fK = RR, this.now = JR, this.lostAtMs = null, this.asked = !1, this.lastRestore = null, this.watched = new WeakSet
        }
        watch(RR, JR) {
          this.watched.has(RR) || (this.watched.add(RR), RR.addEventListener("webglcontextlost", (() => {
            JR() && this.contextLost()
          })), RR.addEventListener("webglcontextrestored", (() => {
            JR() ? this.contextRestored() : (this.take(), this.lastRestore = null)
          })))
        }
        frame(RR, JR) {
          (0, iG.f)(RR) && JR && null !== this.lostAtMs && this.now() - this.lostAtMs >= 1e3 && (this.asked = !0)
        }
        contextLost() {
          null === this.lostAtMs && (this.lostAtMs = this.now(), this.asked = !1)
        }
        unheldRestore(RR) {
          const JR = this.lastRestore;
          return null !== JR && RR - JR.atMs < 3e4 ? JR : null
        }
        contextRestored() {
          const RR = this.take();
          if (null === RR) this.lastRestore = null;
          else {
            var JR, GR;
            const yR = this.unheldRestore(RR.lostAtMs);
            this.lastRestore = {
              atMs: this.now(),
              firstLostAtMs: null !== (JR = null === yR || void 0 === yR ? void 0 : yR.firstLostAtMs) && void 0 !== JR ? JR : RR.lostAtMs,
              asked: null !== (GR = null === yR || void 0 === yR ? void 0 : yR.asked) && void 0 !== GR && GR || RR.asked
            };
            const tR = RR.asked ? "restore_context" : "natural";
            this.fK(`webgl_restored_${tR}_${RR.delay}`, `WebGL2 context restored (${tR}, wasm)`)
          }
        }
        gaveUp() {
          const RR = this.take();
          if (null !== RR) {
            var JR;
            const GR = this.unheldRestore(RR.lostAtMs),
              yR = null === GR ? RR.delay : (0, fG.k)(this.now() - GR.firstLostAtMs),
              tR = RR.asked || null !== (JR = null === GR || void 0 === GR ? void 0 : GR.asked) && void 0 !== JR && JR ? "restore_tried" : "restore_untried";
            this.fK(`webgl_rejoin_${tR}_${yR}`, "WebGL2 context not restored: rejoining (wasm)")
          }
          this.lastRestore = null
        }
        take() {
          const RR = this.lostAtMs;
          return null === RR ? null : (this.lostAtMs = null, {
            lostAtMs: RR,
            delay: (0, fG.k)(this.now() - RR),
            asked: this.asked
          })
        }
      }(Vy.reportRenderRecovery),
      ef = new class {
        constructor(RR) {
          var JR, GR, yR, tR;
          this.deps = RR, this.firstLostAtMs = null, this.lastLostAtMs = 0, this.heldReload = null, this.generation = 0, this.watched = new WeakSet, this.pageHideWatched = !1, this.storage = void 0, this.now = void 0, this.wallNow = void 0, this.setTimer = void 0, this.storage = null !== (JR = RR.storage) && void 0 !== JR ? JR : KG.k, this.now = null !== (GR = RR.now) && void 0 !== GR ? GR : performance.now.bind(performance), this.wallNow = null !== (yR = RR.wallNow) && void 0 !== yR ? yR : Date.now, this.setTimer = null !== (tR = RR.setTimer) && void 0 !== tR ? tR : (RR, JR) => {
            setTimeout(RR, JR)
          }
        }
        watch(RR, JR) {
          this.watched.has(RR) || (this.watched.add(RR), RR.addEventListener("webglcontextlost", (() => {
            JR() && this.lost()
          })), RR.addEventListener("webglcontextrestored", (() => {
            this.restored()
          })), this.pageHideWatched || (this.pageHideWatched = !0, window.addEventListener("pagehide", (() => {
            this.pageHide()
          })), document.addEventListener("visibilitychange", (() => {
            this.pageHide(!document.hidden)
          }))))
        }
        lost() {
          const RR = this.now();
          null === this.firstLostAtMs && (this.firstLostAtMs = RR, this.writeMarker({
            lostAt: this.wallNow()
          })), this.lastLostAtMs = RR, null === this.heldReload && this.generation++
        }
        restored() {
          if (null === this.firstLostAtMs || null !== this.heldReload) return;
          const RR = this.now(),
            JR = ++this.generation;
          this.setTimer((() => {
            JR === this.generation && this.end("restored", RR)
          }), 3e4)
        }
        reload(RR) {
          let JR = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (null !== this.heldReload) return;
          if (null === this.firstLostAtMs && (JR ? this.lastLostAtMs = this.now() : this.lost()), this.deps.probe()) return this.end("cleared_reload"), void RR();
          this.heldReload = RR, this.deps.hold(!0);
          const GR = ++this.generation,
            yR = () => this.lastLostAtMs + tG.c + 5e3,
            tR = () => {
              this.setTimer(uR, Math.max(0, Math.min(5e3, yR() - this.now())))
            },
            uR = () => {
              GR === this.generation && (this.deps.probe() ? this.release("cleared_reload", RR) : this.now() >= yR() ? this.release("gave_up", RR) : tR())
            };
          tR()
        }
        releaseNow() {
          null !== this.heldReload && this.release("gave_up", this.heldReload)
        }
        forget() {
          null !== this.firstLostAtMs && this.clear()
        }
        pageHide() {
          let RR = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          if (null === this.firstLostAtMs) return;
          const JR = (0, VG.g)(this.storage);
          null !== JR && this.writeMarker(RR ? {
            lostAt: JR.lostAt
          } : {
            ...JR,
            leftAt: this.wallNow()
          })
        }
        release(RR, JR) {
          this.end(RR), JR()
        }
        end(RR) {
          let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.now();
          const GR = this.firstLostAtMs;
          if (this.clear(), null !== GR) {
            const {
              code: yR,
              message: tR
            } = (0, VG.k)(RR, JR - GR);
            this.deps.fK(yR, tR)
          }
        }
        clear() {
          this.firstLostAtMs = null, this.generation++, null !== this.heldReload && (this.heldReload = null, this.deps.hold(!1)), this.storage.removeItem(VG.e)
        }
        writeMarker(RR) {
          this.storage.setItem(VG.e, RR)
        }
      }({
        fK: Vy.reportRenderRecovery,
        probe: () => wG("rust_webgl1" === (0, wu.M)()),
        hold: RR => {
          Vf.hold(RR)
        }
      });
    let af = !1,
      Lf = !0,
      nf = null,
      Uf = !1,
      Wf = !1;

    function Af() {
      if (null === di) return null;
      const {
        canvas: RR,
        backend: JR
      } = di;
      return {
        canvas: RR,
        renderer: WG.d[JR]
      }
    }

    function Cf() {
      return Jq ??= Promise.all([GR.e(177), GR.e(91), GR.e(224), GR.e(158), GR.e(245), GR.e(244), GR.e(243), GR.e(222), GR.e(50), GR.e(161), GR.e(242), GR.e(72)]).then((() => GR(45007))).then((RR => (Rq = RR, Object.assign(globalThis, {
        bloxdPreviewPage: RR.pagePreviews()
      }), RR)), (RR => {
        throw Jq = null, RR
      })), Jq
    }

    function Xf() {
      return hZ ??= GR.e(70).then((() => GR(54639))).catch((RR => {
        throw hZ = null, new dR.e(RR)
      })), hZ
    }
    class Mf {
      constructor() {
        this.host = null
      }
      open(RR) {
        return null !== this.host ? RR(this.host) : Cf().then((JR => (this.host ??= new JR.WasmPreviewHost(JR.pagePreviews()), RR(this.host))))
      }
      openMob(RR) {
        return this.open((JR => JR.openMob(RR)))
      }
      openPet(RR) {
        return this.open((JR => JR.openPet(RR)))
      }
      openMobLineup(RR) {
        return this.open((JR => JR.openMobLineup(RR)))
      }
      openCharacter(RR, JR) {
        return this.open((GR => GR.openCharacter(RR, JR)))
      }
    }

    function Bf() {
      sZ || (sZ = !0, Zu.l.setHost(new Mf), (0, ey.n)(), Gu.e.setFollower(cV), Object.assign(globalThis, {
        bloxdPreviews: Zu.l
      }))
    }

    function lf() {
      Cf().then((RR => {
        RR.pagePreviews().prefetch()
      }), (() => {}))
    }

    function pf() {
      let RR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      if (TZ) return;
      TZ = !0, af = "play" === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "shell"), Lf = !af, console.info(`${pZ} starting`), FZ || (FZ = !0, (0, eR.P)(new LG(Tf, uV, Af)), (0, wR.q)(new nG), (0, eR.N)(new UG((() => performance.now() - Sq))), (0, eR.H)()), af && iR.n.subscribe("appManagerUpdated|gameState", Ff), Bf(), (0, Vy.setCrashScreen)(AK), (0, dt.h)(), (0, JG.l)();
      let JR = null;
      try {
        JR = XZ("au0m3y15tnb", (() => {
          var RR, JR;
          return null !== (RR = null === (JR = aq) || void 0 === JR ? void 0 : JR.ws) && void 0 !== RR ? RR : null
        }), RR, "jckntermls")
      } catch (tR) {
        console.error(`${pZ} probes`, tR)
      }
      const yR = function() {
        const RR = (0, Ct.m)(),
          JR = (0, Ct.h)();
        let GR = !1;
        return yR => {
          RR && !GR && (GR = !0, (0, Vy.reportStaleBuildReload)(RR, JR, yR))
        }
      }();
      IV(), af || function() {
        const RR = function(RR) {
          var JR;
          const GR = new URLSearchParams(RR),
            yR = GR.get("game");
          return yR ? {
            game: yR,
            lobby: null !== (JR = GR.get("lobby")) && void 0 !== JR ? JR : null
          } : null
        }(window.location.search);
        if (RR) return (0, xJ.n)(RR.game) && IV().request(), void vf(RR.game, RR.lobby);
        const JR = new URLSearchParams(window.location.search).get("ws");
        if (!JR) return;
        Kq.then((RR => {
          RR && async function(RR, JR) {
            try {
              await (0, dR.m)(RR), Vi = VV(new WebSocket(JR)), null !== Vi && yu.d.setGame(null), gf()
            } catch (tR) {
              console.error(`${pZ} ?ws=${JR} did not attach`, tR)
            }
          }(RR, JR)
        }))
      }(), async function(RR) {
        var JR, yR, uR, ZR, qR, fR;
        if ("undefined" === typeof WebAssembly) return lV("noWebAssembly", "unsupported", "This browser has no WebAssembly"), null;
        const VR = (0, wu.db)();
        let wR = await (0, wu.W)();
        if (gV(wR) && function() {
            const RR = Date.now();
            return !(0, jJ.q)((0, jJ.t)(), vV, RR, jJ.b) && (0, jJ.p)(vV, RR, jJ.b)
          }()) {
          const RR = OV(wR, VR),
            JR = await async function(RR) {
              let {
                decline: JR,
                detail: GR,
                details: yR
              } = RR;
              console.warn(`${pZ} ${GR}: waiting for a WebGL context`);
              const tR = performance.now(),
                uR = await Lu({
                  sleep: (RR, JR) => (0, sJ.b)(RR, JR).catch((() => {})),
                  repick: async () => {
                    const RR = await (0, wu.fb)();
                    return gV(RR) ? null : {
                      Ur: RR
                    }
                  },
                  showScreen: RR => {
                    const GR = (0, BJ.j)("blockedAfterLoss" === JR ? "graphicsLost" : "noContext");
                    return bJ({
                      ...GR,
                      cancel: af ? GR.cancel : null
                    }, RR)
                  }
                }),
                ZR = String(Math.round(performance.now() - tR));
              if (null === uR.picked) {
                const RR = uR.gaveUp ? "waited" : "left";
                return (0, Vy.reportLoadRecovery)({
                  step: "noContext",
                  outcome: "gaveUp",
                  tries: uR.tries,
                  detail: `${GR}; ${RR}`,
                  details: {
                    ...yR,
                    waitedMs: ZR
                  }
                }), uR.gaveUp ? {
                  gaveUp: !0
                } : ((0, KJ.f)("/"), null)
              }
              const {
                Ur: qR
              } = uR.picked;
              if (!(0, zG.o)(qR)) {
                var iR;
                const RR = null !== (iR = null === qR || void 0 === qR ? void 0 : qR.backend) && void 0 !== iR ? iR : "none";
                (0, Vy.reportLoadRecovery)({
                  step: "noContext",
                  outcome: "recovered",
                  tries: uR.tries,
                  detail: GR,
                  details: {
                    ...yR,
                    backend: RR,
                    waitedMs: ZR
                  }
                }), null !== qR && (0, wu.bb)(qR.backend)
              }
              return uR.picked
            }(RR);
          if (null === JR) return null;
          if ("gaveUp" in JR) return (0, Vy.setCrashBackend)("unsupported"), lV("browser", RR.decline, RR.detail, {
            ...RR.details,
            afterWait: "true"
          }), null;
          wR = JR.Ur
        }
        const rR = await async function(RR, JR) {
          const GR = (0, zG.o)(RR) ? OV(RR, JR) : null;
          if (null === GR || void 0 === GR || !GR.retries) return RR;
          console.warn(`${pZ} ${GR.detail}: picking again in ${pV} ms`), await new Promise((RR => {
            setTimeout(RR, pV)
          }));
          const yR = await (0, wu.fb)();
          if (!(0, zG.o)(yR)) {
            var tR;
            (0, Vy.reportNoBackendRetry)("reprobed", GR.decline, GR.detail, {
              ...GR.details,
              backend: null !== (tR = null === yR || void 0 === yR ? void 0 : yR.backend) && void 0 !== tR ? tR : "none"
            }), null !== yR && (0, wu.bb)(yR.backend)
          }
          return yR
        }(wR, VR);
        if ((0, Vy.setCrashBackend)((0, zG.o)(rR) ? "unsupported" : null !== (JR = null === rR || void 0 === rR ? void 0 : rR.backend) && void 0 !== JR ? JR : "none"), (0, zG.o)(rR)) return function(RR) {
          let {
            decline: JR,
            detail: GR,
            details: yR,
            retries: tR
          } = RR;
          if (tR && (0, SJ.u)()) return (0, Vy.reportNoBackendRetry)("reload", JR, GR, yR), void xV(`${GR}, again after ${pV} ms`);
          lV("browser", JR, GR, tR ? {
            ...yR,
            afterReload: String(SJ.B)
          } : yR)
        }(OV(rR, VR)), null;
        if ((0, Du.n)("render")) try {
          const {
            startRenderDebug: RR
          } = await Promise.all([GR.e(91), GR.e(57)]).then((() => GR(5539)));
          RR(rR)
        } catch (CJ) {
          console.warn("The render debug topic didn't load", CJ)
        }
        if ((0, Du.n)("renderlite")) try {
          const {
            startRenderLite: RR
          } = await Promise.all([GR.e(306), GR.e(58)]).then((() => GR(54647)));
          Yi = RR(rR)
        } catch (CJ) {
          console.warn("The renderlite debug topic didn't load", CJ)
        }
        if ((0, Du.n)("renderprobe")) try {
          const {
            startRenderProbe: RR
          } = await GR.e(59).then((() => GR(54656)));
          RR(rR)
        } catch (CJ) {
          console.warn("The renderprobe debug topic didn't load", CJ)
        }
        if ("webgl" === (null === rR || void 0 === rR ? void 0 : rR.backend) && af && "address" !== SJ.z.reason) {
          const RR = Ut(rR);
          null !== RR && (0, dJ.f)(RR)
        }
        const eR = null !== (yR = null === rR || void 0 === rR ? void 0 : rR.backend) && void 0 !== yR ? yR : null;
        Hi.adapter = null !== (uR = null === rR || void 0 === rR ? void 0 : rR.adapter) && void 0 !== uR ? uR : null, Hi.boundAtMs = null, Hi.indirectHangs = null, Hi.restoresSkipped = null;
        const aR = !(0, zG._)();
        null === rR || (0, zG.B)(rR.reason) || console.info(`${pZ} drawing with ${rR.backend}: ${rR.reason}`);
        const LR = (0, wu.J)();
        bR("previews"), wq(!0), (0, dR.y)((RR => {
          try {
            null !== eR && (mi = RR.startSkyFeed, HV(), function(RR) {
              var JR, GR;
              ci = RR.rasterText, wi = RR.setTextLocalPlayer, RR.setTextLocalPlayer(null !== (JR = null === (GR = Ki) || void 0 === GR ? void 0 : GR.info.playerDbId) && void 0 !== JR ? JR : null), Pi = RR.drainTextRerasters, Ii = RR.loadTextIcons, RR.warmText((() => Fi)), RR.textChanged(), Fi && setTimeout(Ii, 0)
            }(RR), zi = RR.startShellAnalytics, EV())
          } finally {
            Wf || (ki = RR.followMenuPrefs({
              setSoundPrefs: qV,
              setEnvPrefs: iV,
              setUiPrefs: ZV,
              setLookPrefs: fV
            }))
          }
        })), (0, dR.p)(Zq).catch((RR => {
          console.warn(`${pZ} the game code did not load: a join asks again`, RR)
        }));
        const nR = (0, wu.n)(rR);
        let UR, WR;
        nR.catch((() => {})), "loading" === (0, HJ.s)() && (OR(), bR("load"));
        try {
          UR = function(RR) {
            const JR = null !== RR && void 0 !== RR ? RR : document.createElement("canvas");
            JR.id = "wasm-game-canvas", rf.watch(JR, nK), ef.watch(JR, nK),
              function(RR) {
                if (BK.has(RR)) return;
                BK.add(RR), RR.addEventListener("webglcontextlost", (() => {
                  var RR;
                  const JR = null !== ui && wK(),
                    GR = null === (RR = window.bloxdRenderDebug) || void 0 === RR ? void 0 : RR.vaos;
                  setTimeout((() => {
                    var RR, yR, tR, uR, ZR;
                    null === (RR = Yi) || void 0 === RR || RR.glContextLost(JR, GR, null !== (yR = null !== (tR = !1 === (null === (uR = Gq) || void 0 === uR ? void 0 : uR.isStopped) ? Gq.addDistanceInUse() : null) && void 0 !== tR ? tR : null === (ZR = MK()) || void 0 === ZR ? void 0 : ZR.horizontal) && void 0 !== yR ? yR : null)
                  }), 0)
                }))
              }(JR), (0, Xu.k)();
            const GR = (0, aG.g)(),
              yR = (0, aG.j)(GR);
            JR.style.cssText = "position:absolute;top:0;left:0;display:block;touch-action:none;outline:none;background:#000", (0, Cu.e)(JR, yR), (0, aG.d)(JR, GR), JR.width = yR.bufferWidth, JR.height = yR.bufferHeight;
            const tR = document.createElement("div");
            return tR.style.cssText = "position:fixed;top:0;right:0;bottom:0;left:0;overflow:hidden", tR.append(JR), sf(tR, Lf), nf = tR, document.body.append(tR), JR
          }(null === eR ? null : await (await Cf()).pagePreviews().beginSession())
        } catch (tR) {
          return xR("fetch"), await cK({
            site: xZ,
            error: tR
          }, (() => {
            (0, Vy.showUnsupported)((0, BJ.p)("fetch"), Su.g.fetch, `the previews did not load: ${String(tR)}`)
          })), null
        }
        OR(), bR("loading" === (0, HJ.s)() ? "load" : "build");
        try {
          WR = await nR
        } catch (tR) {
          return xR("fetch"), await cK({
            site: xZ,
            error: tR
          }, (() => {
            (0, Vy.showUnsupported)((0, BJ.p)("fetch"), Su.g.fetch, `the ${null!==eR&&void 0!==eR?eR:"client"} build did not load: ${String(tR)}`)
          })), null
        }
        const AR = (0, wu.g)(),
          XR = !AR && !0 !== KG.k.getItem(gZ),
          MR = !AR && "loading" === (0, HJ.s)();
        bR("load"), await (0, ru.e)(WR, {
          reloadFailedDownload: XR
        }), MR && !(0, HJ.F)() && await (0, ru.e)(WR, {
          reloadFailedDownload: XR
        });
        let BR = !1,
          lR = !1;
        const pR = (0, HJ.i)();
        if (!(0, HJ.F)() && ("compile" === pR || "instantiate" === pR) && (0, HJ.B)()) {
          const RR = (0, HJ.e)();
          console.warn(`${pZ} the wasm client did not ${pR} here (${RR}): loading it again`);
          const JR = await async function(RR) {
            let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eu,
              GR = !1,
              yR = 0;
            for (const tR of JR) {
              if (!RR.retryable()) break;
              if (RR.outOfMemory() && (GR = !0, "spent" === RR.stepDownMemory())) return {
                recovered: !1,
                tries: yR,
                outOfMemory: GR,
                spent: !0
              };
              if (await RR.sleep(tR), yR++, await RR.retry()) return {
                recovered: !0,
                tries: yR,
                outOfMemory: GR,
                spent: !1
              }
            }
            return GR ||= RR.outOfMemory(), {
              recovered: !1,
              tries: yR,
              outOfMemory: GR,
              spent: !1
            }
          }({
            sleep: RR => (0, sJ.b)(RR),
            outOfMemory: () => (0, vG.d)((0, HJ.h)()),
            retryable: HJ.B,
            stepDownMemory: () => "instantiate" !== (0, HJ.i)() || !NV() || (0, Zy.u)() ? "none" : "halve" === (0, Zy.t)() ? "halved" : "spent",
            retry: ru.h
          });
          BR = JR.outOfMemory, lR = JR.spent;
          const {
            tries: GR,
            recovered: yR
          } = JR, tR = yR ? RR : (0, HJ.e)();
          (0, Vy.reportLoadRecovery)({
            step: "load",
            stage: pR,
            oom: BR,
            outcome: yR ? "recovered" : "gaveUp",
            tries: GR,
            detail: tR
          })
        }
        CR ??= performance.now();
        const gR = qq;
        if (!(0, HJ.F)()) {
          (0, HJ.C)() && "compile" !== pR && "instantiate" !== pR && KG.k.setItem(gZ, !0);
          const RR = (0, HJ.i)();
          if (xR("instantiate" === RR || null === RR ? `instantiate_${vR((0,HJ.h)())}` : RR), "call" === RR) WK({
            site: jG.r,
            error: (0, HJ.h)(),
            header: null
          }, gR);
          else {
            const JR = null !== RR && void 0 !== RR ? RR : "instantiate",
              GR = () => {
                (0, Vy.showUnsupported)((0, BJ.p)(JR), Su.g[JR], (0, HJ.e)())
              },
              yR = "compile" === pR || "instantiate" === pR ? pR : RR;
            if ("compile" === yR || "instantiate" === yR) {
              const RR = BR || (0, vG.d)((0, HJ.h)());
              if (af && (RR && NV() ? !lR && "spent" !== (0, Zy.t)(Date.now(), !0) : (0, SJ.u)())) {
                const JR = (0, HJ.e)();
                return (0, Vy.reportLoadReload)((0, BJ.p)(yR), Su.g[yR], JR), xV(`the wasm client ${RR?"ran out of memory to":"did not"} ${yR} here (${JR})`), null
              }(0, Vy.showUnsupported)(RR ? "memory" : (0, BJ.p)(yR), Su.g[yR], (0, HJ.e)())
            } else if ("fetch" === JR) {
              const RR = [WR.url().href, mJ.d.url().href];
              await cK({
                site: xZ,
                error: (0, HJ.e)(),
                urls: RR
              }, (() => {
                GR()
              }))
            } else GR()
          }
          return null
        }(0, cJ.H)(WR.url()) && (0, Vy.reportUnstreamedCoreLoad)();
        const NR = (0, HJ.w)();
        let DR, HR = gR;
        bR("core");
        try {
          HR = {
            ...gR,
            wasm: NR.FK()
          };
          const {
            hL: RR
          } = WR.bindings, JR = RR.wtR();
          if (JR !== pG.C) return xR("core_other"), WK({
            site: jG.b,
            error: `core ABI ${JR}, page ABI ${pG.C}`,
            header: null
          }, HR), null;
          const [GR, yR] = (0, pG.re)();
          DR = new RR(GR, yR)
        } catch (tR) {
          return xR(`core_${vR(tR)}`), WK({
            site: jG.b,
            error: tR,
            header: null
          }, HR), null
        }
        xR("ok"), qq = HR, iq = WR.bindings;
        const oR = new jG.f(DR, HJ.m, {
          onCrash: RR => {
            var JR;
            null === (JR = Yi) || void 0 === JR || JR.crashed(RR),
              function(RR, JR, GR, yR) {
                if ("webgpu" !== JR || (0, wu.c)()) return !1;
                const tR = function(RR) {
                  if (RR.site === jG.e && (0, zG.s)(RR.error)) return "frames_refused";
                  return RR.site === bZ && (0, zG.t)(RR.error) ? "start_failed" : null
                }(RR);
                if (null === tR) return !1;
                if (null !== (0, zG.W)(tR, yR, (0, SG.d)(RR.error))) return (0, Vy.countRenderLost)(tR, RR.error, Hi), !1;
                return tG.C.reloaded(null, !1), (0, Vy.reportRenderReload)("webgpu", "start_failed" === tR ? 0 : 1, GR, {
                  cause: tR,
                  error: RR.error,
                  context: Hi,
                  session: lK(null)
                }), hV(), !0
              }(RR, eR, HR, aR) || WK(RR, HR)
          },
          onNetEvent: FV,
          onReconnectGrace: XV,
          onJoinPreloadEnded: CV,
          onCoreErrors: (RR, JR) => {
            var GR, yR;
            RR.some((RR => {
              let {
                code: JR
              } = RR;
              return JR === pG.K.RenderDeviceLost
            })) && ((0, wu.D)(), (0, uG.g)(), Vf.deviceLost(), "webgpu" === eR && ((0, SG.e)(oi), tG.C.lost())), null === (GR = Yi) || void 0 === GR || GR.coreErrors(RR);
            const tR = () => {
              (0, Vy.reportCoreErrors)(RR, JR, HR, ((RR, JR) => {
                var GR;
                return RR === pG.K.EnvUnknownSky ? (0, Vy.unknownSkyWords)(EJ.c.get("skyBox")) : RR === pG.K.RenderDeviceLost ? (0, Vy.deviceLossWords)(JR, Hi.boundAtMs) : null === (GR = oi) || void 0 === GR ? void 0 : GR.rtR(RR, JR)
              }))
            };
            RR.some((RR => {
              let {
                code: JR
              } = RR;
              return JR === pG.K.EnvUnknownSky
            })) ? queueMicrotask(tR) : tR(), null === (yR = oq) || void 0 === yR || yR.coreErrors(RR)
          },
          onRenderReload: (RR, JR, GR) => {
            ! function(RR, JR, GR, yR, tR, uR) {
              var ZR;
              if ((0, wu.c)()) return;
              const qR = JR === pG.Yc.WEBGPU,
                iR = yR === pG.Yc.PIPELINE_FAILED ? "pipeline_failed" : "lost",
                fR = yR === pG.Yc.RESTORE_LOST,
                VR = qR && (0, tG.m)(Hi.adapter, GR, "lost" === iR, fR),
                wR = (0, SG.l)(oi);
              null === (ZR = Yi) || void 0 === ZR || ZR.reload(qR, GR, iR, null === wR || void 0 === wR ? void 0 : wR.message);
              const rR = qR ? (0, zG.W)(iR, tR, wR) : null;
              if (null !== rR) {
                (0, Vy.countRenderLost)(iR, wR, Hi);
                const JR = void 0 === wR ? "" : ` (${wR.message})`;
                return void RR.crash(Vy.RENDER_RELOAD_SITE, new Error(`${(0,Vy.renderReloadMessage)("webgpu",iR,GR)} and ${rR}${JR}`))
              }
              const eR = qR ? "webgpu" : "webgl1" === uR ? "webgl1" : "webgl";
              "lost" === iR && (0, wu.D)();
              if (!qR) {
                if (rf.gaveUp(), !(0, SJ.u)()) {
                  (0, Vy.countRenderLost)(iR, wR, Hi);
                  const JR = void 0 === wR ? "" : ` (${wR.message})`;
                  return void RR.crash(Vy.RENDER_RELOAD_SITE, new Vy.GraphicsLostError(`${(0,Vy.renderReloadMessage)(eR,iR,GR)} and ${SJ.e}${JR}`))
                }
                console.warn(`${pZ} the GL render device's recovery gave up: the tab reloads once more onto the wasm client`)
              }(0, Vy.reportRenderReload)(eR, GR, qq, {
                from: "game",
                cause: iR,
                restoreLost: fR,
                adapterRemembered: VR,
                error: wR,
                context: Hi,
                session: lK(RR.sunShadowsHeld())
              }), (0, wu.t)();
              const aR = (0, KR.e)();
              let LR = !1;
              const nR = () => {
                LR || (LR = !0, qR && "lost" !== iR ? hV() : ef.reload(hV, qR))
              };
              let UR = null;
              const WR = (0, KR.o)((() => {
                null !== UR && clearTimeout(UR), aR ? setTimeout(nR, sV) : nR()
              }));
              !LR && aR && (UR = setTimeout((() => {
                WR(), nR()
              }), TV))
            }(oR, RR, JR, GR, aR, eR)
          },
          onEnvEvent: RR => {
            var JR;
            RR.kind === pG.X.SkyImages ? null === (JR = Oq) || void 0 === JR || JR.onEvent(RR.payload) : RR.kind === pG.X.EnvLighting && (xq = 1 === RR.payload[0])
          },
          onImages: RR => {
            var JR;
            null === (JR = Nq) || void 0 === JR || JR.onEvent(RR)
          },
          onModelRequest: RR => {
            var JR;
            null === (JR = gq) || void 0 === JR || JR.request(RR)
          },
          onModelTaken: (RR, JR) => {
            var GR;
            null === (GR = gq) || void 0 === GR || GR.taken(RR, JR)
          },
          onTerrainTexturesWanted: () => {
            queueMicrotask((() => {
              ! function(RR, JR) {
                const GR = uq;
                if (null === GR || RR.isStopped) return;
                GR.restore((RR => {
                  (0, Vy.reportTerrainTextureFailure)(RR, JR)
                })).then((JR => {
                  !1 !== JR || RR.isStopped ? !0 === JR && console.info(`${pZ} terrain textures handed over again after the renderer lost them`) : console.warn(`${pZ} the terrain textures couldn't be handed over again: the terrain draws blank`)
                }))
              }(oR, HR)
            }))
          },
          onKeepAlive: RR => {
            const JR = null === ui ? void 0 : Zi.get(ui);
            void 0 !== JR && Nt(JR, RR)
          },
          onSends: () => {
            ! function(RR) {
              const JR = performance.now();
              if (RR.forEachNetOut(aK), KK(RR), (0, jG.K)(RR, {
                  worldgen: nq,
                  mesh: Wq
                }), null !== Ei) try {
                Ei.sendsWent(RR, JR, performance.now())
              } catch (tR) {
                QV(tR)
              }
            }(oR)
          }
        });
        if (Gq = oR, null === (ZR = eG.c.wasmNetReady) || void 0 === ZR || ZR.call(eG.c, (() => oR.isStopped ? 0 : oR.netKeptFrames)), null !== RR) {
          oR.setAntiCheatProbes(UZ(HJ.m, RR.checks)), RR.watchHeld(AZ.CoreFrame, (() => oR.frame)), RR.watchHeld(AZ.GlueFrame, (() => DR.frame));
          const JR = function(RR, JR) {
            const GR = new WZ(JR);
            let yR = !1;
            GR.gK(RR.gK());
            const tR = (0, Ot._)((() => {
              GR.gK(RR.gK())
            }), CZ);
            let uR = 6 * (0, Ot.P)() | 0;
            const ZR = () => {
              ++uR < 6 || (uR = 0, RR.checks.stackCheck() && (yR = !0))
            };
            (0, su.e)(ZR);
            const qR = () => {
              const JR = RR.checkPadCall();
              0 !== JR && GR.setFlags(JR)
            };
            return (0, Tu.h)(qR), {
              onSend: ZR,
              beforeFrame: () => {
                yR && GR.originStackHit() && (yR = !1)
              },
              onEvent: JR => {
                const yR = RR.checkEvent(JR);
                GR.value(pG.k.ProbeUsedProp, RR.usedProp()), 0 !== yR && GR.setFlags(yR)
              },
              stop: () => {
                (0, Ot.ab)(tR), (0, su.c)(ZR), (0, Tu.g)(qR)
              }
            }
          }(RR, ((RR, JR, GR) => {
            let yR = !1;
            return vK(oR, (() => {
              yR = oR.rings.input.writeRecord(pG.wb.AntiCheat, RR, JR, GR, 0)
            })), yR
          }));
          oR.isStopped ? JR.stop() : lq = JR
        }
        kZ = (RR, JR, GR) => oR.rings.cmd.writeCmd(RR, JR, GR), QZ = RR => oR.rings.cmd.growForCmd(RR), sq = !1, HV(), (0, dR.C)(oR, {
          core: DR,
          memory: HJ.m,
          staleOr: (RR, JR, GR, yR) => cK({
            site: RR,
            error: JR
          }, GR, yR),
          reportReplayFault: (RR, JR) => {
            (0, Vy.reportReplayFault)(RR, JR, qq)
          },
          reportCameraFault: RR => {
            (0, Vy.reportCameraDirectorFault)(RR, qq)
          },
          audio: Zq,
          options: EJ.c,
          onNetEvent: FV,
          sessionInfo: RR => {
            var JR;
            return (null === (JR = Ki) || void 0 === JR ? void 0 : JR.conn) === RR ? Ki.info : null
          },
          onEventOverflow: kf,
          replayShaderPack: RR => {
            var JR;
            null === (JR = oq) || void 0 === JR || JR.replay(RR)
          },
          hasPackModel: RR => {
            var JR, GR;
            return null !== (null !== (JR = null === (GR = oV()) || void 0 === GR ? void 0 : GR.modelUrl(RR)) && void 0 !== JR ? JR : null)
          },
          beforeWrite: () => (!kq && oR.rings.net.cursor > 0 && GK(oR, !1, "all"), !oR.isStopped),
          beforeOp: () => (!kq && oR.netWrittenSinceFrame > 0 && GK(oR, !1, "budget"), !oR.isStopped)
        }), (0, jR.B)({
          lockPointer: () => {
            if (!cy(UR)) return !1;
            try {
              Promise.resolve(UR.requestPointerLock()).catch((() => {}))
            } catch {
              return !1
            }
            return !0
          },
          unlockPointer: () => {
            (0, MJ.c)()
          },
          leaveGame: () => {
            Yf()
          },
          canvas: () => UR
        }), pq = (0, jR.r)((() => {
          var RR;
          const JR = (0, dR.l)();
          null === (RR = (0, dR.u)()) || void 0 === RR || RR.followCursorAim(!0 === (null === JR || void 0 === JR ? void 0 : JR.isSessionLive) ? JR : null)
        })), Gi && oR.setUiPrefs(Gi);
        yi && oR.setEnvPrefs(yi);
        ti && oR.setLookPrefs(ti);
        const cR = Wu ? Au(Wu.preventMovement) : null;
        cR && tV(cR);
        const PR = (0, Zy.n)(),
          IR = (0, Zy.i)(oR, PR);
        Mq = PR.basis, (0, Cy.o)((0, ay.d)(null === IR ? null : (0, uy.n)(IR), (0, ay.k)())), Xq = IR;
        const mR = (0, PJ.b)();
        let zR = 1 / 0,
          SR = !0,
          ER = PR.shedFootprintBytes;
        const YR = new jt.e(mR, (() => DR.nn()), (RR => {
          oR.crash(jG.n, RR)
        }));
        Aq = YR, Cq = YR, null !== IR && YR.setCeiling(Math.min((0, jt.s)(IR), zR, (0, Zy.r)()));
        if (SR) {
          YR.setShed((RR => {
            const JR = oR.shedMemory("joinReserve" !== RR && "gcPressure" !== RR);
            return null !== JR && (null === Xq || JR < Xq) && (Xq = JR, (0, Cy.o)((0, ay.d)((0, uy.n)(JR), (0, ay.k)()))), JR
          }), ((RR, JR, GR) => {
            1 === JR ? (0, Vy.reportMemoryShed)(RR, GR, qq) : console.warn(`${pZ} wasm memory: shed again (${RR}): shed ${JR}`, GR.wasmMemoryShed)
          }), (() => oR.addDistanceInUse()));
          const RR = (0, zG.M)(NR);
          YR.setFootprint(new Nu(ER, {
            storedChunks: () => DR.etR(),
            gpuBytes: () => {
              var JR;
              return null !== (JR = null === RR || void 0 === RR ? void 0 : RR.atR()) && void 0 !== JR ? JR : 0
            },
            jsHeapBytes: xu
          })), (0, Ay.g)("wasm", YR, (() => {
            Zq.freeSounds()
          }))
        }
        window.addEventListener("pagehide", (() => {
          Aq === YR && (YR.refreshStats(), bK(YR))
        })), document.addEventListener("visibilitychange", qK), window.addEventListener("pagehide", iK), window.addEventListener("pagehide", RK), window.addEventListener("pagehide", JK), !1;
        const [kR, QR] = (0, ry.g)();
        Qi = (0, ay.l)((RR => {
          const JR = (0, ay.s)(RR, (0, ay.k)());
          return oR.setChunkAddDistance(JR.horizontal, JR.vertical)
        }), {
          horizontal: kR,
          vertical: QR
        }), oR.setAmbientOcclusion(!0 !== KG.i.getItem("disableAmbientOcclusion")), oR.setPoseLod(!0 !== KG.i.getItem(DJ.S)), oR.setDebugLog(pG.M.Look, !0), oR.setDebugLog(pG.M.CameraSet, !0), (0, ou.startLookDebug)("wasm", {
          look: () => oR.takeDebugLog(pG.M.Look),
          cameraSets: () => oR.takeDebugLog(pG.M.CameraSet)
        }), (0, Du.n)("remesh") && (oR.setDebugLog(pG.M.Remesh, !0), FR = () => oR.takeDebugLog(pG.M.Remesh), zu = new mu((0, cu.p)(), FR));
        var FR;
        const TR = function(RR, JR, GR, yR) {
          const tR = new Gt,
            uR = RR => KG.i.getItem(RR);
          tR.sync(uR, JR), (0, qG.ab)();
          const ZR = (0, iR.q)("customBindingsChanged", (() => {
            tR.sync(uR, JR)
          }));
          (0, ly.q)(JR);
          const qR = new Set,
            fR = (0, jR.r)((() => {
              var RR;
              qR.size > 0 && Zt() && !0 === (null === (RR = (0, dR.l)()) || void 0 === RR ? void 0 : RR.localPlayerAlive()) && iR.n.JK("usedKeyboard")
            })),
            VR = Yy.c.heldSizer((() => (0, aG.q)(RR))),
            KR = dy(RR, JR, {
              prevents: RR => tR.prevents(RR),
              keyPressed: RR => {
                tR.moves(RR) && (qR.add(RR), Zt() && iR.n.JK("usedKeyboard"))
              },
              keyReleased: RR => {
                qR.delete(RR)
              },
              keysReleased: () => {
                qR.clear()
              },
              resized: () => {
                tt.h.measure(RR.getBoundingClientRect()), (0, ky.i)()
              },
              sizeCanvas: VR,
              watchRenderScale: JR => {
                const GR = (0, aG.s)(RR, JR),
                  yR = Yy.c.onRelease(JR),
                  tR = Ey.d.onRelease(JR);
                return () => {
                  GR(), yR(), tR()
                }
              },
              coverHeld: () => Ey.d.isHeld(),
              touchStarting: () => {
                tt.h.measure(RR.getBoundingClientRect())
              },
              viewShown: GR,
              touchUiShown: () => wJ.d.get("isTouchScreen"),
              ctrlCombosAreGames: Zt,
              inspect: (RR, JR, GR) => {
                tR.checks(JR, GR) && yR(RR)
              },
              canLock: () => cy(RR)
            }),
            wR = (0, TG.e)(JR);
          return () => {
            ZR(), fR(), (0, ly.q)(null), wR(), KR()
          }
        }(UR, ((RR, JR, GR, yR, tR) => {
          vK(oR, (() => {
            oR.rings.input.writeRecord(RR, JR, GR, yR, tR)
          })), !Qq && (0, Kt.c)(RR, tR) && (0, Kt.b)((() => {
            Gq !== oR || Wf || oR.isStopped || !rK() || GK(oR, !1, "budget", !1)
          }))
        }), (() => Lf), (RR => {
          var JR;
          null === (JR = lq) || void 0 === JR || JR.onEvent(RR)
        }));
        if (oR.isStopped) return TR(), null;
        Lq = TR;
        const sR = () => !oR.isStopped && !Uf;
        if (oR.isStopped) return null;
        (0, HJ.M)((() => {
          "call" === (0, HJ.i)() && oR.crash(jG.r, (0, HJ.h)())
        }));
        const hR = (0, jG.O)(oR.rings.worker, (() => {
          GK(oR, !1, document.hidden ? "all" : "budget")
        }));
        nq = function(RR, JR, GR) {
          return OK().then((RR => {
            let {
              prefetchWorldgenWorker: JR
            } = RR;
            JR()
          }), (() => {})), new ku({
            module: (0, HJ.q)(),
            decodeSettings: RR => {
              const JR = (0, dR.u)();
              if (null === JR) throw new Error("no game code to decode the world-gen seed with");
              return JR.decodeMapSettings(RR)
            },
            loadWorker: xK,
            onMapWithoutWorldgen: () => {
              NK((RR => {
                let {
                  stopWorldgenWorkerPrefetch: JR
                } = RR;
                JR()
              }))
            },
            onLoadFailed: RR => {
              (0, Vy.reportWorldgenLoadFailure)(RR, qq)
            },
            onWorkerLost: (RR, JR) => {
              !async function(RR, JR, GR) {
                const yR = RR === du || RR.startsWith(Eu);
                if (!yR || JR) return void GR.fK(yR);
                const tR = () => {
                  GR.fK(!0)
                };
                let uR;
                try {
                  uR = await GR.scriptUrl()
                } catch {
                  return void tR()
                }
                await GR.staleOr({
                  site: jG.B,
                  error: new Error(`a world-gen worker's load failed (${RR}): ${uR}`),
                  urls: [uR]
                }, tR)
              }(RR, JR, {
                scriptUrl: async () => {
                  const {
                    worldgenWorkerScriptUrl: RR
                  } = await OK();
                  return RR()
                },
                staleOr: (RR, JR) => cK(RR, JR, {
                  stillWanted: GR
                }),
                fK: JR => {
                  (0, Vy.reportWorldgenWorkerLost)(RR, JR, qq, {
                    build: (0, Ct.h)(),
                    ageMs: (0, Ly.v)()
                  })
                }
              })
            },
            onStartTimeout: RR => {
              (0, Vy.reportWorkerStartTimeout)(jG.B, RR, qq)
            },
            onGaveUp: RR => {
              (0, Vy.reportWorldgenGaveUp)(RR, qq)
            },
            onMemoryStats: RR => {
              var JR;
              null === (JR = Aq) || void 0 === JR || JR.noteWorldgen(RR)
            },
            onMemoryGone: () => {
              var RR;
              null === (RR = Aq) || void 0 === RR || RR.worldgenGone()
            },
            write: (GR, yR, tR, uR, ZR) => {
              vK(RR, (() => {
                RR.rings.worker.writeWorkerRecord(GR, yR, tR, 0, uR, ZR) || RR.crash(jG.B, `a world-gen record of kind ${yR} did not fit the worker-in ring`)
              })), JR()
            }
          })
        }(oR, hR, sR), Wq = function(RR, JR) {
          return new zt({
            module: (0, HJ.q)(),
            loadWorkers: async () => {
              const [{
                createMeshWorker: RR
              }, JR] = await Promise.all([GR.e(49).then((() => GR(54703))), Promise.resolve().then((() => GR(103))).then((RR => {
                let {
                  isMobile: JR
                } = RR;
                return JR()
              }), (() => !1))]);
              return {
                create: RR,
                count: (0, RG.f)(JR),
                maxKeptLightStates: JR || (0, hJ.k)() ? 1 : void 0
              }
            },
            write: (GR, yR, tR, uR, ZR, qR) => {
              (0, ky.g)(), vK(RR, (() => {
                RR.rings.worker.writeWorkerRecord(GR, yR, tR, uR, ZR, qR) || RR.crash(jG.p, `a meshing record of kind ${yR} did not fit the worker-in ring`)
              })), JR()
            },
            onWorkerLost: RR => {
              (0, Vy.reportWorkerLost)(jG.p, RR, qq)
            },
            onLightFault: (RR, JR) => {
              (0, Vy.reportLightFault)(RR, JR, qq)
            },
            onStartTimeout: RR => {
              (0, Vy.reportWorkerStartTimeout)(jG.p, RR, qq)
            },
            onMemoryStats: (RR, JR) => {
              var GR;
              null === (GR = Aq) || void 0 === GR || GR.noteMeshWorker(RR, JR)
            },
            onMemoryGone: RR => {
              var JR;
              null === (JR = Aq) || void 0 === JR || JR.meshWorkerGone(RR)
            },
            fail: (JR, GR) => {
              const yR = () => {
                RR.crash(jG.p, void 0 === GR ? JR : new Error(JR, {
                  cause: GR
                }))
              };
              void 0 !== GR ? cK({
                site: jG.p,
                error: GR
              }, yR) : yR()
            }
          })
        }(oR, hR), Ff();
        const RJ = (0, tu.m)(FJ.clientSideServerUrls.staticUrl, {
            onTableFailed: RR => {
              cK({
                site: Vy.MODEL_FEED_SITE,
                error: RR
              }, (() => {}), {
                stillWanted: sR
              })
            },
            packUrl: RR => {
              var JR, GR;
              return null !== (JR = null === (GR = oV()) || void 0 === GR ? void 0 : GR.modelUrl(RR)) && void 0 !== JR ? JR : null
            }
          }),
          JJ = function(RR, JR, GR) {
            const yR = GR => {
              var yR, tR;
              return null !== (yR = null === (tR = JR()) || void 0 === tR ? void 0 : tR.drawnUrl(GR)) && void 0 !== yR ? yR : RR.url(GR)
            };
            return (0, Gu.j)((0, Et.l)(yR), GR)
          }(RJ, (() => gq), oV),
          GJ = new Et.f(JJ, (RR => {
            console.warn(`${pZ} image ${RR.key.kind}:${RR.key.index}:${RR.key.word} failed`, RR.error)
          }));
        Nq = GJ, Dq = new ht(oR, JJ, ((RR, JR) => {
          void 0 === JR ? console.warn(`${pZ} ${RR}`) : PV(RR, JR)
        }));
        const yJ = new Ju.e(RJ, function(RR, JR) {
          let yR = !1,
            tR = null,
            uR = null;
          const ZR = {
              onUnavailable: (GR, yR) => {
                uR ??= cK({
                  site: Vy.MODEL_POOL_SITE,
                  error: GR,
                  urls: yR
                }, (() => {
                  (0, Vy.reportModelPoolFailure)(GR, RR)
                }), {
                  stillWanted: JR
                })
              },
              onWorkerLost: JR => {
                (0, Vy.reportWorkerLost)(Vy.MODEL_POOL_SITE, JR, RR)
              },
              onModuleRetry: (JR, GR) => {
                (0, Vy.reportModelsModuleRetry)(JR, GR, RR)
              }
            },
            qR = GR.e(51).then((() => GR(54712))).then((RR => {
              let {
                pageModelPool: JR
              } = RR;
              if (yR) return null;
              const GR = JR(ZR);
              return tR = GR.unlisten, bq = GR.pool, Ff(), GR.pool
            }), (RR => (yR || ZR.onUnavailable(RR, void 0), null)));
          return vq = () => {
            var RR;
            yR = !0, null === (RR = tR) || void 0 === RR || RR(), bq = null
          }, (RR, JR) => qR.then((GR => {
            var yR;
            return null !== (yR = null === GR || void 0 === GR ? void 0 : GR.build(RR, JR)) && void 0 !== yR ? yR : (0, uu.t)(RR, "the model workers did not load")
          })).then((RR => null !== uR && (0, uu.k)(RR) ? uR.then((() => RR)) : RR))
        }(HR, sR), (RR => {
          RR.startup ? (UK(), cK({
            site: Vy.MODEL_FEED_SITE,
            error: RR.error,
            urls: "" === RR.url ? void 0 : [RR.url]
          }, (() => {
            (0, Vy.reportModelFailure)(RR, HR)
          }))) : (0, Vy.reportModelFailure)(RR, HR)
        }), {
          onWritten: (RR, JR) => {
            GJ.glbWritten(RR, JR)
          },
          onTaken: (RR, JR) => {
            GJ.glbTaken(RR, JR)
          },
          onPackFileFailed: (RR, JR) => {
            console.warn(`${pZ} the texture pack's model file ${RR} failed: the shipped one loads`, JR)
          }
        });
        gq = yJ;
        const tJ = new Ft.g(oR);
        uq = tJ, tJ.swap((RR => {
          const JR = () => {
            (0, Vy.reportTerrainTextureFailure)(RR, HR)
          };
          if (Fi) return void JR();
          const GR = () => !Fi,
            yR = null === RR.url ? void 0 : [RR.url];
          cK({
            site: jG.x,
            error: RR.error,
            urls: yR
          }, JR, {
            stillWanted: GR
          })
        })).then((RR => {
          null !== RR && (RR || oR.isStopped || console.warn(`${pZ} the core refused the terrain textures: terrain draws untextured`), mq(oR))
        }));
        const uJ = new BG(oR, ((RR, JR) => {
          console.warn(`${pZ} ${RR}`, ...void 0 === JR ? [] : [JR])
        }));
        uJ.feed(), null !== eR && function(RR, JR, yR, tR, uR, ZR) {
          let qR = null,
            fR = null,
            VR = !1;
          const KR = {
            textures: null,
            stop: () => {
              var RR, JR;
              VR = !0, null === (RR = fR) || void 0 === RR || RR(), null === (JR = qR) || void 0 === JR || JR(), yu.d.setSettled(null), null !== iq && bf.clear(iq)
            }
          };
          tq = KR, fR = IV().follow((fR => {
            null !== fR && Promise.all([GR.e(231), GR.e(54)]).then((() => GR(54664))).then((GR => {
              let {
                PackTextures: wR
              } = GR;
              if (VR || RR.isStopped) return;
              const rR = new wR({
                feed: fR,
                terrain: JR,
                backend: yR,
                stopped: () => RR.isStopped,
                landed: () => {
                  mq(RR)
                },
                packSwapped: () => {
                  (0, Gu.f)(tR), ZR.feed((() => async function(RR) {
                    const JR = null === RR ? null : await RR.averageColours;
                    return null === JR ? lG() : MG(JR)
                  }(rR.assets))), (0, Ru.j)(rR.files()), uR.refresh().then((RR => {
                    null !== RR && console.info(`${pZ} texture pack models: ${RR.resent} of ${RR.delivered} files written again, ${RR.refetched} refetched`)
                  }))
                },
                settled: (RR, JR, GR) => {
                  var yR;
                  (yu.d.setSettled({
                    state: RR,
                    files: JR
                  }), function(RR, JR, GR) {
                    const yR = null === RR.gameSource && (0, Ky.c)(RR.pack);
                    if (null === JR) return;
                    const tR = (0, fy.i)(JR.error),
                      uR = yR ? "settings" : JR.source;
                    iR.n.JK(fy.c, {
                      failure: tR,
                      source: uR,
                      pack: wy(RR)
                    }), (0, Vy.reportTexturePackKeptOut)(uR, tR, JR.error, GR)
                  }(RR, GR, qq), null === GR) && function(RR) {
                    const JR = iq;
                    null !== JR && bf.apply(JR, RR).then((JR => {
                      JR && RR && console.info(`${pZ} the texture pack's animations are in (${Object.keys(RR).length} files)`)
                    }))
                  }(null === (yR = RR.pack) || void 0 === yR ? void 0 : yR.animations)
                },
                settling: () => {
                  yu.d.setSettled(null)
                },
                warn: PV,
                maxTextureSize: () => Promise.resolve((0, zG.cb)(document.createElement("canvas")))
              });
              KR.textures = rR, qR = rR.start()
            }), (RR => {
              console.warn(`${pZ} the texture pack's terrain didn't load: the built atlas stays`, RR)
            }))
          }))
        }(oR, tJ, eR, GJ, yJ, uJ);
        const ZJ = () => {
            oR.setTextureLayers("")
          },
          qJ = RR => {
            (QJ ??= GR.e(66).then((() => GR(54714))).then((RR => {
              let {
                TEXTURE_NAMES: JR
              } = RR;
              return JR
            }), (RR => {
              throw QJ = null, RR
            })), QJ).then((RR => {
              oR.setTextureLayers(RR) || oR.isStopped || (console.warn(`${pZ} the core refused the texture names: textured Boxes draw textureNotFound`), ZJ())
            }), (JR => {
              if (oR.isStopped) return;
              const [GR, ...yR] = RR;
              void 0 === GR ? cK({
                site: Vy.TEXTURE_NAMES_SITE,
                error: JR
              }, (() => {
                console.warn(`${pZ} the texture names didn't load, so textured Boxes draw textureNotFound`, JR), ZJ()
              }), {
                stillWanted: sR
              }) : setTimeout((() => {
                qJ(yR)
              }), GR)
            }))
          };
        if (qJ(EZ), null !== eR && !await async function(RR, JR, GR, yR, uR, ZR) {
            var qR;
            const iR = (0, zG.M)(GR);
            if (null === iR) return RR.crash(bZ, new Error(`this ${yR} build has no openRenderer`)), !1;
            let fR;
            oi = iR;
            try {
              var VR, KR, wR, rR;
              const tR = null !== (VR = null === (KR = Rq) || void 0 === KR ? void 0 : KR.pagePreviews()) && void 0 !== VR ? VR : null,
                qR = null !== (wR = null === (rR = Rq) || void 0 === rR ? void 0 : rR.previewModule(GR)) && void 0 !== wR ? wR : null;
              if (null === tR || null === qR) {
                null === tR || void 0 === tR || tR.endSession(!1), fR = (0, aG.g)().sampleCount, await (0, zG.i)(JR, iR, ZR, DV, fR, await uR);
                const RR = (0, zG.n)(GR);
                null === RR && console.warn(`${pZ} this ${yR} build has no image registry: sky and model images won't show`), (0, Qt.f)(RR)
              } else {
                (0, wu.c)() && await (0, KJ.m)();
                const GR = (0, wu.O)();
                if (null !== GR) {
                  const JR = (0, SG.l)(iR),
                    yR = `${GR.why}${void 0===JR?"":` (${JR.message})`}`;
                  return RR.crash(Vy.RENDER_RELOAD_SITE, GR.webgpu ? new Error(yR) : new Vy.GraphicsLostError(yR)), !1
                }
                fR = await tR.bindSession(qR, JR, (async RR => (0, zG.v)(iR, bZ, ZR, RR, DV, await uR)))
              }
            } catch (tR) {
              return RR.crash(bZ, tR), !1
            }(function(RR, JR) {
              const GR = RR,
                {
                  requestCapture: yR,
                  takeCapture: tR
                } = GR;
              if ("function" !== typeof yR || "function" !== typeof tR) return;
              const uR = {
                request() {
                  yR.call(GR, JR)
                },
                take() {
                  var RR;
                  return null !== (RR = tR.call(GR)) && void 0 !== RR ? RR : null
                }
              };
              window[Mu] = uR
            })(JR, fR), ji = fR, Di = !0;
            const eR = performance.now();
            return Hi.boundAtMs = null !== (qR = (0, wu.Q)()) && void 0 !== qR ? qR : eR, Hi.indirectHangs = (0, wu.H)(), Hi.restoresSkipped = (0, wu.S)(), console.info(`${pZ} ${yR} renderer bound at ${Math.round(eR)} ms`), !RR.isStopped
          }(oR, DR, NR, eR, LR, UR)) return null;
        if (null !== eR) {
          var iJ, fJ, rJ;
          (0, IJ.K)(eR);
          const RR = () => !oR.isStopped && wK();
          GR.e(220).then((() => GR(35029))).then((JR => {
            let {
              devTools: GR
            } = JR;
            oR.isStopped || GR.setHost(function(RR) {
              return {
                tools: Ku,
                async downloadScene(JR, GR) {
                  let {
                    width: yR,
                    height: tR,
                    colouring: uR
                  } = GR;
                  "screenshot" === JR && null === uR ? await (0, iu.f)(RR, yR, tR) : console.warn("The Rust client's developer tools take uncoloured screenshots only")
                },
                setAmbientLightIntensity: () => (console.warn("The Rust client's renderer has no ambient light setting"), Promise.resolve()),
                capturePhoto: (JR, GR, yR) => (0, iu.e)(RR, JR, GR, yR)
              }
            }(function(RR, JR) {
              return {
                canvas: RR,
                maxTextureSize: fu,
                CK: JR,
                resize: (RR, JR, GR) => {
                  (0, ly.z)(pG.wb.Resize, 0, RR / GR, JR / GR, (0, ly.l)(GR))
                },
                restoreSize: () => {
                  const JR = (0, aG.q)(RR);
                  null !== JR && (0, ly.z)(pG.wb.Resize, 0, JR.cssWidth, JR.cssHeight, (0, ly.l)(JR.renderScale))
                },
                onFrameDrawn: RR => (Vu.add(RR), () => {
                  Vu.delete(RR)
                })
              }
            }(UR, RR)))
          }), (RR => {
            console.warn(`${pZ} the developer tools didn't load: no captures this session`, RR)
          }));
          const JR = "webgpu" === eR && null !== (iJ = null === rR || void 0 === rR || null === (fJ = rR.adapter) || void 0 === fJ ? void 0 : fJ.vendor) && void 0 !== iJ ? iJ : null;
          di = {
            backend: eR,
            canvas: UR,
            fallbackReason: null !== (rJ = null === rR || void 0 === rR ? void 0 : rR.reason) && void 0 !== rJ ? rJ : null,
            adapterVendor: JR
          }, EV();
          try {
            (0, ky.s)(eR, UR, JR)
          } catch (tR) {
            (0, ky.t)(), console.error(`${pZ} the quality steps didn't start`, tR)
          }
        }
        const {
          storagePullBreaks: eJ,
          splitPassBreaks: aJ
        } = await LR;
        aJ && console.warn(`${pZ} split_pass_breaks on: Windows Adreno 7xx (N-103) or ?sceneDepth=off`);
        const LJ = (0, VJ.g)(rR, (0, tG.j)(), (0, ZG.d)());
        if ((0, Du.n)("webgpuloss")) {
          var nJ, UJ;
          const RR = {
            backend: eR,
            reason: null !== (nJ = null === rR || void 0 === rR ? void 0 : rR.reason) && void 0 !== nJ ? nJ : null,
            source: null !== (UJ = null === rR || void 0 === rR ? void 0 : rR.source) && void 0 !== UJ ? UJ : null,
            storagePullBreaks: eJ,
            noWebGpu: LJ.messageKey
          };
          (0, Hu.d)((JR => {
            JR.noteWasmPick(RR)
          }))
        }
        const WJ = "webgpu" === eR;
        if (oq = (0, VJ.i)(WJ ? oR : null, WJ && null !== (qR = null === (fR = Rq) || void 0 === fR ? void 0 : fR.pagePreviews().Be) && void 0 !== qR ? qR : null, LJ, PV), Wf) return null;
        if (YR.reserveAtJoin((0, jt.p)(null !== IR && void 0 !== IR ? IR : uy.j)), oR.isStopped) return null;
        const AJ = RR => {
          if (dq = performance.now(), Eq = !1, null !== Ei) try {
            Ei.animationFrame(RR)
          } catch (tR) {
            QV(tR)
          }
          if (function(RR, JR) {
              return JR && !Wf && !Qq && rK() && wK() && RR.framePaces(performance.now())
            }(oR, Lf)) {
            if (tf.animationFrame(dq, "paced", Lf), oR.writePendingInput(), (0, jR.d)(RR, yK), YV(!1, RR), null !== Ei) try {
              Ei.framePaced()
            } catch (tR) {
              QV(tR)
            }
            requestAnimationFrame(AJ)
          } else GK(oR, Lf, "budget") && (tf.animationFrame(dq, oR.lastFrameKind, Lf), (0, iG.f)(oR.lastFrameKind) && wK() && (0, jR.d)(RR, yK), YV(Lf && ff, RR), Vf.frame(oR.lastFrameKind, Lf && wK(), RR), rf.frame(oR.lastFrameKind, Lf && wK()), (0, iG.c)(oR.lastFrameKind) && tG.C.drew(), XK(oR), YR.afterFrame(), requestAnimationFrame(AJ))
        };
        requestAnimationFrame(AJ), oR.warmBeforeJoin(bt(null), jG.j.Home);
        return function(RR) {
          if (RR.has("inputLog") && (0, yt.f)((RR => {
              let {
                action: JR,
                down: GR,
                press: yR
              } = RR;
              console.info(`${ut} input ${JR} ${GR?"down":"up"} press ${yR} at ${performance.now().toFixed(1)}`)
            })), RR.has("inputDump")) {
            const RR = [];
            qt = RR, Object.assign(window, {
              bloxdInputDump: () => RR.join("\n")
            })
          }
        }(new URLSearchParams(window.location.search)), Bq = function(RR) {
          let JR = null;
          const GR = () => {
              null !== JR && (clearInterval(JR), JR = null)
            },
            yR = () => {
              document.hidden ? JR ??= setInterval((() => {
                HK(RR) || GR()
              }), dZ) : GR()
            };
          return document.addEventListener("visibilitychange", yR), yR(), () => {
            GR(), document.removeEventListener("visibilitychange", yR)
          }
        }(oR), oR
      }(JR).then((RR => {
        var JR;
        (yR(qq), wq(null !== RR), null !== RR && (XR = performance.now()), Vq(RR), null === RR) ? null === (JR = Rq) || void 0 === JR || JR.pagePreviews().endSession(null === (0, HJ.i)()): Iq("booted")
      }), (RR => {
        yR(qq), wq(!1), Vq(null), WK({
          site: vZ,
          error: RR,
          header: null
        }, qq)
      }))
    }

    function gf() {
      const RR = iq;
      null !== RR && Cf().then((JR => {
        let {
          pageBuiltInAnimationPack: GR
        } = JR;
        GR().provide(RR)
      }), (RR => {
        console.warn(`${pZ} the built-in animation pack's chunk did not load: lifeforms stay in their rest pose`, RR)
      }))
    }
    const bf = new class {
      constructor(RR) {
        this.deps = RR, this.latest = 0, this.Qq = null
      }
      apply(RR, JR) {
        return this.load(RR, JR, 0)
      }
      async load(RR, JR, GR) {
        var yR;
        const tR = ++this.latest,
          uR = this.deps.compiler;
        if (void 0 === JR || null === JR || "object" !== typeof JR || 0 === Object.keys(JR).length || null === uR) return this.drop(RR), !1;
        if ((null === (yR = this.Qq) || void 0 === yR ? void 0 : yR.module) === RR && (0, oG.fe)(this.Qq.files, JR)) return !1;
        try {
          const [GR, yR] = await Promise.all([uR(), this.deps.builtIns()]);
          if (tR !== this.latest) return !1;
          const ZR = await GR(JR, mG, {
            builtIns: yR
          });
          if (tR !== this.latest) return !1;
          const qR = this.call(RR, ZR);
          if (void 0 === qR) throw new IG("the compiled animations didn't read against the built-in pack");
          return this.Qq = {
              module: RR,
              files: JR
            },
            function(RR) {
              for (let JR = 0; JR + 2 < RR.length; JR += 3) {
                ("error" === RR[JR] ? console.error : console.warn)(`Animation for the texture pack: ${RR[JR+1]}: ${RR[JR+2]}`)
              }
            }(qR), !0
        } catch (qR) {
          var ZR;
          if (tR !== this.latest) return !1;
          this.drop(RR), 0 === GR && this.deps.warn("the texture pack's animations didn't load: lifeforms play the built-in ones", qR);
          const yR = (null !== (ZR = this.deps.retryAfterMs) && void 0 !== ZR ? ZR : PG)[GR];
          return void 0 === yR || qR instanceof IG || (0, cG.j)(RR) || setTimeout((() => {
            tR === this.latest && this.load(RR, JR, GR + 1)
          }), yR), !1
        }
      }
      call(RR, JR) {
        try {
          return RR.VtR(JR)
        } catch (GR) {
          throw (0, cG.n)(RR, GR), GR
        }
      }
      clear(RR) {
        this.latest++, this.drop(RR)
      }
      drop(RR) {
        const JR = this.Qq;
        if (this.Qq = null, (null === JR || void 0 === JR ? void 0 : JR.module) === RR && !(0, cG.j)(RR)) try {
          this.call(RR, null)
        } catch {}
      }
    }({
      compiler: xG.c,
      builtIns: async () => {
        const {
          pageBuiltInAnimationPack: RR
        } = await Cf();
        return RR().whenSet()
      },
      warn: PV
    });
    async function vf(RR, JR) {
      let yR = !1;
      await Of({
        matchmake: async () => {
          const {
            guestJoinTarget: tR,
            guestJoinWithPack: uR
          } = await GR.e(133).then((() => GR(54642)));
          return yR ? tR(RR, JR, zV()) : (yR = !0, uR(RR, JR, (JR => SV(RR, JR)), zV))
        },
        onFailure: RR => {
          (0, Vy.showJoinFailure)(RR, qq)
        },
        rejoin: hf,
        invalidateTrafficCode: RV
      })
    }
    async function Of(RR) {
      let {
        matchmake: JR,
        onFailure: GR,
        rejoin: tR,
        invalidateTrafficCode: uR,
        pageReady: ZR,
        signal: qR
      } = RR;
      const iR = () => !0 === (null === qR || void 0 === qR ? void 0 : qR.aborted);
      let fR;
      const VR = yu.d.rejoinHold();
      ii = null, (0, Wy.g)();
      const KR = (0, Ly.S)("wasm", gK);
      let wR = !1,
        rR = performance.now();
      try {
        if (!await rq) return {
          kind: "stopped"
        };
        if (iR()) return {
          kind: "xR"
        };
        Xf().catch((() => {}));
        let RR = await JR();
        var aR, LR;
        if (rR = performance.now(), !iR()) pK(null !== (aR = null === (LR = RR.target.session) || void 0 === LR ? void 0 : LR.gameNameWithVariation) && void 0 !== aR ? aR : null);
        const GR = () => performance.now() - RR.matchedAt <= RR.freshMs,
          yR = Nf(RR.target).catch((() => {}));
        GR() && !iR() && (fR = new Pt(RR.target, {
          signal: qR
        }));
        const uR = performance.now();
        let VR = () => {};
        iR() || (VR = function(RR, JR) {
          NR(), RR || pR || null !== lR && "ok" !== lR || (pR = !0, (0, eR.y)("wasm_boot_wait", performance.now(), `${BR}:${JR()}:${(0,nR.n)()}`)), gR++;
          let GR = !1;
          return () => {
            GR || (GR = !0, gR--)
          }
        }(fq, oJ.k), null === qR || void 0 === qR || qR.addEventListener("abort", VR, {
          once: !0
        }));
        const KR = await Kq;
        if (VR(), null === qR || void 0 === qR || qR.removeEventListener("abort", VR), null === KR) return {
          kind: "stopped"
        };
        var bR, vR;
        if (function(RR) {
            var JR, GR;
            if (UR.d.markGameEngineConstructed(), MR) return;
            MR = !0;
            const yR = Math.max(RR, null !== (JR = AR) && void 0 !== JR ? JR : RR);
            (0, WR.i)("ready", Math.max(0, (null !== (GR = CR) && void 0 !== GR ? GR : yR) - yR) / 1e3)
          }(uR), !iR())
          if (null !== CR && null !== XR ? (0, eR.y)("wasm_core_ready", XR) : console.warn("[bloxd-wasm-client] a join found the core before boot marked its steps"), RR.target.session && (0, ju.c)(RR.target.session.gameNameWithVariation)) null === (bR = nq) || void 0 === bR || bR.prestart();
        if (await yR, !GR() && !iR()) null === (vR = fR) || void 0 === vR || vR.rematched(), RR = await JR(), rR = performance.now();
        if (iR()) return {
          kind: "xR"
        };
        const OR = await async function(RR) {
          var JR, GR, yR;
          let {
            signal: tR,
            rejoin: uR = null,
            early: ZR,
            pageReady: qR
          } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (null !== tR && void 0 !== tR && tR.aborted) throw new DOMException("the join was left", "AbortError");
          const iR = (fR = Xi, VR = performance.now(), null !== fR && VR - fR < Wt);
          var fR, VR;
          Xi = null;
          const KR = new AbortController,
            wR = null !== (JR = null === (GR = RR.session) || void 0 === GR ? void 0 : GR.gameNameWithVariation) && void 0 !== JR ? JR : null;
          pK(wR), of({
            controller: KR,
            game: wR
          }), Mi = null, null === (yR = gi) || void 0 === yR || yR.abort(), gi = null, vi = !1, Oi = null, xi.clear();
          const rR = () => {
            (0, TJ.k)(KR, (0, TJ.g)(tR))
          };
          null === tR || void 0 === tR || tR.addEventListener("abort", rR, {
            once: !0
          });
          try {
            var aR, LR, nR, UR, WR;
            const JR = await Kq;
            if (null === JR || JR.isStopped || Wf) throw new Error("no core is running to join a game with");
            if (JR.warmBeforeJoin(bt(null !== (aR = null === (LR = RR.session) || void 0 === LR ? void 0 : LR.gameNameWithVariation) && void 0 !== aR ? aR : null), jG.j.Play), RR.session && null !== oq) {
              const JR = await Df(oq.join(RR.session.gameNameWithVariation), KR.signal);
              if ((0, Du.n)("webgpuloss")) {
                const GR = RR.session.gameNameWithVariation,
                  yR = oq.couldntRunInJoinedGame();
                (0, Hu.d)((RR => RR.noteWasmJoin(GR, JR, yR)))
              }
              if (null !== JR) throw new VJ.c(JR)
            }
            const [, , , {
              joinRoom: GR
            }] = await Df(Promise.all([(0, dR.m)(JR), Nf(RR), null === qR || void 0 === qR ? void 0 : qR(), Xf()]), KR.signal), yR = RR.session, tR = yR ? {
              ...yV,
              attachSocket: JR => {
                const GR = VV(JR, RR.endpoint);
                var tR;
                null !== GR && (Ki = {
                  conn: GR,
                  info: yR
                }, null === (tR = wi) || void 0 === tR || tR(yR.playerDbId));
                return GR
              }
            } : yV, fR = await GR(tR, RR, {
              signal: KR.signal,
              early: ZR
            }).catch((RR => {
              throw function(RR) {
                if (!(RR instanceof JJ.b)) return RR;
                if ("roomError" === RR.stage && null !== Oi) return xf(new JJ.b(RR.message, RR.stage, RR.code, Oi), RR);
                const JR = "closed" === RR.stage && null !== Bi ? xi.get(Bi.conn) : void 0;
                return void 0 === JR ? RR : xf(new JJ.b(RR.message, RR.stage, JR.code, null, RR.socketOpened), RR)
              }(RR)
            }));
            if (qi !== KR) throw fR.leave(), new DOMException("the join was left", "AbortError");
            jf(fR), null === (nR = Wq) || void 0 === nR || nR.newGame();
            const VR = function(RR, JR) {
              var GR, yR;
              const {
                session: tR
              } = RR, uR = void 0 === tR ? RR.joinOptions.lobbyName : tR.lobbyName;
              return {
                endpoint: RR.endpoint,
                game: null !== (GR = null === tR || void 0 === tR ? void 0 : tR.gameNameWithVariation) && void 0 !== GR ? GR : RR.roomName,
                lobby: String(null !== uR && void 0 !== uR ? uR : null),
                sessionId: JR,
                postCookies: null !== (yR = RR.postCookies) && void 0 !== yR ? yR : null
              }
            }(RR, fR.seat.sessionId);
            Zi.set(fR, VR), Ht(VR);
            const wR = performance.now(),
              rR = {
                conn: fR.conn,
                rejoin: uR,
                game: null !== (UR = null === (WR = RR.session) || void 0 === WR ? void 0 : WR.gameNameWithVariation) && void 0 !== UR ? UR : "",
                joinedAt: wR,
                rejoinedAt: iR ? wR : null,
                overflow: null
              };
            ri = rR,
              function(RR, JR) {
                UV();
                const GR = {
                  endpoint: JR,
                  roomId: RR.seat.room.roomId,
                  heldConn: 0,
                  dropCode: 0,
                  pendingHold: null,
                  resume: new Gy({
                    reconnect: (RR, JR, yR) => async function(RR, JR, GR, yR) {
                      const {
                        roomId: tR,
                        roomToken: uR
                      } = AV(RR, JR), ZR = Gq;
                      if (null === ZR || ZR.isStopped || Wf) throw new Error("no core is running to resume the game on");
                      const {
                        resumeRoom: qR
                      } = await Df(Xf(), GR), iR = {
                        ...yV,
                        attachSocket: JR => ei !== RR || 0 === RR.heldConn ? (JR.close(), null) : VV(JR, RR.endpoint, !0)
                      };
                      return qR(iR, RR.endpoint, tR, uR, {
                        signal: GR,
                        onAttached: yR
                      })
                    }(GR, RR, JR, yR),
                    releaseSeat: RR => {
                      !async function(RR, JR) {
                        const {
                          roomId: GR,
                          roomToken: yR
                        } = AV(RR, JR);
                        try {
                          const {
                            leaveHeldSeat: JR
                          } = await Xf();
                          await JR(RR.endpoint, GR, yR)
                        } catch (tR) {
                          console.warn(`${pZ} the held seat of a game left while it reconnected couldn't be released`, tR)
                        }
                      }(GR, RR)
                    },
                    isLive: () => ei === GR && null !== ri && !Wf,
                    kN: RR => {
                      Ci = RR, nV()
                    },
                    onReconnected: RR => {
                      ! function(RR) {
                        const JR = ui;
                        if (null !== JR && JR !== RR) {
                          const GR = Zi.get(JR);
                          void 0 !== GR && Zi.set(RR, GR), Zf === JR && (Zf = RR), JR.detach()
                        }
                        jf(RR)
                      }(RR)
                    },
                    onGaveUp: (RR, JR) => {
                      ! function(RR, JR, GR) {
                        var yR, tR;
                        console.warn(`${pZ} gave up reconnecting (${GR.reason}, ${GR.attempts} attempts)`, GR.lastError), (0, Vy.reportReconnectGaveUp)(GR, qq);
                        const uR = null !== (yR = null === (tR = ri) || void 0 === tR ? void 0 : tR.rejoin) && void 0 !== yR ? yR : null;
                        WV(RR, "gaveUp"), Ef();
                        const ZR = {
                          code: RR.dropCode,
                          name: null,
                          reason: mZ,
                          canReconnect: !JR,
                          automaticallyReconnect: !1,
                          requiresRefresh: !1
                        };
                        GV(ZR, JR ? null : uR, !1, {
                          reasonKey: zZ,
                          canPlayAgain: JR
                        })
                      }(GR, RR, JR)
                    }
                  })
                };
                ei = GR, null !== ai && ai.conn === RR.conn && GR.resume.onInitialInfo(ai)
              }(fR, RR.endpoint), performance.mark(NZ), (0, eR.y)("wasm_joined", wR), JR.warmBeforeJoin(new Uint32Array, jG.j.Joined), setTimeout((() => {
                ui === fR && (0, eR.n)()
              }), 0), gf(), console.info(`${pZ} joined ${RR.roomName} as ${fR.seat.sessionId} at ${Math.round(performance.now())} ms`);
            const AR = Mi;
            Mi = null, null !== AR && Qf(rR, AR.mask, AR.frames);
            const CR = xi.get(fR.conn);
            return xi.clear(), void 0 !== CR && (jf(null), JV(fR.conn, CR.code, CR.reason)), fR
          } finally {
            var AR;
            null === tR || void 0 === tR || tR.removeEventListener("abort", rR), qi === KR && Sf(ui, null), (null === (AR = Bi) || void 0 === AR ? void 0 : AR.join) === KR && (Bi = null)
          }
        }(RR.target, {
          signal: qR,
          rejoin: tR(RR.target),
          early: fR,
          pageReady: ZR
        });
        return wR = !0, {
          kind: "joined",
          game: OR
        }
      } catch (xR) {
        if (xR instanceof DOMException && "AbortError" === xR.name || iR()) return {
          kind: "xR"
        };
        if (Wf) return {
          kind: "stopped"
        };
        if (vi && (vi = !1, await uR().catch((RR => {
            console.warn(`${pZ} the cached traffic code could not be dropped`, RR)
          }))), null === await Kq) return {
          kind: "stopped"
        };
        if (xR instanceof VJ.c) return GR(xR, performance.now() - rR), {
          kind: "failed",
          error: xR,
          reloading: !1
        };
        const RR = xR instanceof JJ.b && xR.code === yR.e.wasmClientNotAllowed.code,
          JR = xR instanceof JJ.b && xR.code === yR.e.outdatedVersion.code,
          tR = () => null === ui,
          ZR = await cK({
            site: Vy.JOIN_SITE,
            error: xR,
            outdated: JR
          }, (() => {
            RR && (0, SJ.E)(), GR(xR, performance.now() - rR)
          }), {
            stillWanted: tR
          });
        return {
          kind: "failed",
          error: xR,
          reloading: ZR
        }
      } finally {
        var OR;
        wR || KR.end(), yu.d.releaseHold(VR);
        const RR = null === (OR = fR) || void 0 === OR ? void 0 : OR.release();
        RR && (0, Vy.reportUnusedSeat)(RR, qq)
      }
    }

    function xf(RR, JR) {
      return RR.stack = JR.stack, RR
    }

    function Nf(RR) {
      return RR.session ? (0, dR.s)(Zq, RR.session.gameNameWithVariation) : Promise.resolve()
    }

    function Df(RR, JR) {
      return (0, TJ.r)(JR), new Promise(((GR, yR) => {
        const tR = () => {
          yR((0, TJ.g)(JR))
        };
        JR.addEventListener("abort", tR, {
          once: !0
        }), RR.then((RR => {
          JR.removeEventListener("abort", tR), GR(RR)
        }), (RR => {
          JR.removeEventListener("abort", tR), yR(RR)
        }))
      }))
    }

    function Hf() {
      of(null)
    }

    function of(RR) {
      var JR, GR, yR;
      (ZK(null === RR ? "left" : "replaced"), function() {
        const RR = ei;
        null !== RR && WV(RR, "left")
      }(), null === aq || aq.left) || (aq.left = !0, null === (yR = (0, dR.l)()) || void 0 === yR || yR.socketLeft(), (0, wR.s)({
        websocketUrl: null
      }));
      qi && (0, TJ.k)(qi, new DOMException("the join was left", "AbortError")), Ef(null !== RR), null === (JR = oq) || void 0 === JR || JR.leave();
      const tR = ui;
      null !== RR && yu.d.setGame(RR.game), Sf(null, null !== (GR = null === RR || void 0 === RR ? void 0 : RR.controller) && void 0 !== GR ? GR : null), null === tR || void 0 === tR || tR.leave(), null === RR && (mf = !0, zf()), df(0), (0, YJ.h)()
    }

    function Pf() {
      return null !== Gq && 0 !== (Gq.headerWord(gG.L.LoadSteps) & gG.Y.PlayerBound) && rK() && !Vf.isShown()
    }

    function If() {
      return performance.now() - li >= QG.g
    }
    let mf = !1;

    function zf() {
      const RR = Gq;
      !mf || Qq || Lf || (mf = !1, Wf || null === RR || RR.isStopped || RR.releaseLeftGame())
    }

    function Sf(RR, JR) {
      null !== JR && JR !== qi && (Kf = document.hidden), null === RR ? wf.end() : null === ui && wf.join(Pf), ui = RR, qi = JR, null === ui && null === qi || (mf = !1), null === ui && null === qi && yu.d.setGame(void 0)
    }

    function jf(RR) {
      Sf(RR, qi)
    }

    function df(RR) {
      const JR = Gq;
      return null !== kZ && !Wf && null !== JR && !JR.isStopped && (!!kZ(JJ.f, 0, (0, JJ.A)(RR)) && (sq = !0, 0 === RR || Qq || GK(JR, !1, "all"), !0))
    }

    function Ef() {
      var RR, JR;
      arguments.length > 0 && void 0 !== arguments[0] && arguments[0] || (0, Ly.f)();
      const GR = null !== (RR = null === (JR = ri) || void 0 === JR ? void 0 : JR.overflow) && void 0 !== RR ? RR : null;
      ri = null, null !== GR && (0, Vy.reportEventOverflow)(GR, qq)
    }

    function Yf() {
      null !== ui || null !== qi ? Hf() : KV()
    }

    function kf(RR, JR) {
      console.warn(`${pZ} the event buffer refused records in ${JR} frames (categories ${RR})`), Wf || (null !== ri ? Qf(ri, RR, JR) : null !== qi && function(RR, JR, GR) {
        var yR;
        const tR = function(RR, JR) {
          return null === RR ? "drop" : RR.activated ? "keep" : 0 !== (JR & gG.w.NetSession) ? "fail" : "drop"
        }((null === (yR = Bi) || void 0 === yR ? void 0 : yR.join) === RR ? Bi : null, JR);
        "keep" === tR ? Mi = {
          mask: JR,
          frames: GR
        } : "fail" === tR && (0, TJ.k)(RR, new Error("the join's net session was lost to an event overflow"))
      }(qi, RR, JR))
    }

    function Qf(RR, JR, GR) {
      const yR = RR.overflow ??= {
        frames: 0,
        acks: 0,
        mask: 0,
        outcome: null
      };
      yR.frames += GR, yR.acks++, yR.mask |= JR;
      const tR = function(RR, JR, GR) {
        if (0 === (RR & gG.w.NetSession)) return "none";
        const yR = null !== JR.rejoinedAt && GR - JR.rejoinedAt < At;
        return null === JR.rejoin || yR ? "fail" : "rejoin"
      }(JR, RR, performance.now());
      "none" !== tR && queueMicrotask((() => {
        if (ri !== RR) return;
        const JR = "rejoin" === tR && If();
        yR.outcome = JR ? "rejoined" : "failed", GV(function(RR, JR) {
          return {
            code: 0,
            name: "eventOverflow",
            reason: "Your game fell behind the server.",
            canReconnect: RR,
            automaticallyReconnect: JR,
            requiresRefresh: !1
          }
        }(null !== RR.rejoin, JR), RR.rejoin, JR), Hf(), JR && (Xi = performance.now())
      }))
    }

    function Ff() {
      af && function(RR, JR) {
        let {
          mesh: GR,
          worldgen: yR,
          modelPool: tR
        } = RR;
        "landingPage" === JR ? (null === GR || void 0 === GR || GR.stopWorkers(), null === yR || void 0 === yR || yR.stopWorker(), null === tR || void 0 === tR || tR.stopWorkers()) : ((0, wJ.j)(JR) || "inGame" === JR) && (null === GR || void 0 === GR || GR.restartWorkers(), null === tR || void 0 === tR || tR.startWorkers())
      }({
        mesh: Wq,
        worldgen: nq,
        modelPool: bq
      }, wJ.d.get("gameState"))
    }

    function Tf(RR) {
      Lf = RR, nf && sf(nf, RR), zf()
    }

    function sf(RR, JR) {
      RR.style.visibility = JR ? "visible" : "hidden"
    }

    function hf(RR) {
      var JR;
      const GR = RR.roomName,
        yR = null !== (JR = RR.joinOptions.lobbyName) && void 0 !== JR ? JR : null;
      return () => {
        vf(GR, yR)
      }
    }

    function RV() {
      return GR.e(133).then((() => GR(54642))).then((RR => {
        let {
          invalidateGuestTrafficCode: JR
        } = RR;
        return JR()
      })).catch((RR => {
        console.warn(`${pZ} the cached traffic code could not be dropped`, RR)
      }))
    }

    function JV(RR, JR, GR) {
      var tR, uR, ZR;
      let qR = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (Wf) return;
      if ((null === (tR = ri) || void 0 === tR ? void 0 : tR.conn) !== RR) return void(null !== qi && xi.set(RR, {
        code: JR,
        reason: GR
      }));
      ZK("lost");
      const iR = (null === (uR = Zf) || void 0 === uR ? void 0 : uR.conn) !== RR,
        {
          rejoin: fR,
          game: VR,
          joinedAt: KR
        } = ri;
      Ef(), UV();
      const wR = (0, RJ.e)(JR, (0, vt.g)(RR));
      if (console.info(`${pZ} the game's connection closed with code ${JR} (${null!==(ZR=wR.name)&&void 0!==ZR?ZR:"unrecognised"})`), JR === yR.e.gameOrPluginKick.code || qR || (0, Vy.reportDisconnect)(wR, qq, {
          closeReason: GR,
          sinceJoinedMs: performance.now() - KR,
          game: VR
        }), wR.requiresRefresh) {
        const RR = "outdatedVersion" === wR.name,
          GR = new Error(`the game's connection closed with code ${JR}`),
          yR = () => null === ri && null === qi;
        return void cK({
          site: Vy.JOIN_SITE,
          error: GR,
          outdated: RR
        }, (() => {
          yR() && GV(wR, null, !1)
        }), {
          stillWanted: yR
        })
      }
      const rR = wR.canReconnect ? fR : null,
        eR = null !== rR && (wR.automaticallyReconnect || iR && Kf && "inactivity" === wR.name) && If();
      GV(wR, rR, eR)
    }

    function GV(RR, JR, GR) {
      var yR;
      let tR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
        reasonKey: null,
        canPlayAgain: !1
      };
      if (Uf) return;
      yu.d.unwantedLeave(GR && null !== JR && 0 === bi.size), null === (yR = gi) || void 0 === yR || yR.abort();
      const uR = new AbortController;
      gi = uR;
      const ZR = null === JR ? null : () => {
        uR.signal.aborted || (uR.abort(), JR())
      };
      if (GR && null !== ZR) {
        li = performance.now();
        const RR = new rG.e(QG.d, (() => {
          li = performance.now(), ZR()
        }));
        uR.signal.addEventListener("abort", (() => {
          RR.stop()
        }))
      }
      const qR = {
        code: RR.code,
        name: RR.name,
        reason: RR.reason,
        reasonKey: tR.reasonKey,
        reconnect: ZR,
        reconnecting: GR,
        requiresRefresh: RR.requiresRefresh,
        canPlayAgain: tR.canPlayAgain
      };
      if (bi.size > 0)
        for (const fR of [...bi]) try {
          fR(qR)
        } catch (iR) {
          console.error(`${pZ} an unwanted-leave listener threw`, iR)
        } else bJ((0, BJ.f)(RR, null !== ZR, GR), uR.signal).then((JR => {
          JR && (null !== ZR ? ZR() : RR.requiresRefresh && (0, KJ.j)())
        }))
    }
    const yV = {
      attachSocket: RR => VV(RR),
      onConnection: RR => (Ni.add(RR), () => {
        Ni.delete(RR)
      }),
      sendRaw: (RR, JR) => {
        const GR = aq;
        return null !== GR && GR.conn === RR && LK(GR, JR)
      },
      leaveRoom: df,
      closeSocket: RR => {
        var JR;
        (null === (JR = aq) || void 0 === JR ? void 0 : JR.conn) === RR && KV()
      },
      flushNet: wV
    };

    function tV(RR) {
      var JR;
      let {
        aux: GR,
        payload: yR
      } = RR;
      null === (JR = Gq) || void 0 === JR || JR.queueOptions(GR, yR)
    }

    function uV(RR, JR) {
      tV(function(RR, JR) {
        return Wu = RR ? {
          preventMovement: JR
        } : null, RR ? Au(JR) : {
          aux: pG.$b.AdEnd,
          payload: Uu
        }
      }(RR, JR))
    }

    function ZV(RR) {
      var JR;
      Gi = RR, null === (JR = Gq) || void 0 === JR || JR.setUiPrefs(RR)
    }

    function qV(RR, JR) {
      Zq.setMaster(RR, JR)
    }

    function iV(RR) {
      var JR;
      yi = RR, null === (JR = Gq) || void 0 === JR || JR.setEnvPrefs(RR)
    }

    function fV(RR) {
      var JR;
      ti = RR, null === (JR = Gq) || void 0 === JR || JR.setLookPrefs(RR)
    }

    function VV(RR) {
      var JR;
      let GR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new URL(RR.url).origin,
        yR = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      if (RR.readyState === WebSocket.CLOSING || RR.readyState === WebSocket.CLOSED) return console.warn(`${pZ} a closing or closed socket can't be attached`), null;
      const tR = Gq;
      if (!tR || tR.isStopped) return console.warn(`${pZ} no core is running to attach a socket to`), RR.close(), null;
      if (null === (0, dR.l)()) return console.warn(`${pZ} the game has not started to attach a socket to`), RR.close(), null;
      if (zq > pG.B) return console.warn(`${pZ} this core has attached all the sockets it can; reload to play on`), RR.close(), null;
      if (sq && !Qq && (GK(tR, !1, "all"), tR.isStopped || Wf)) return RR.close(), null;
      KV();
      const uR = zq++;
      if (!BV(tR, "open", uR, yR ? pG._b.Resume : 0)) return RR.close(), null;
      yR || EJ.c.reset(), Bi = null === qi ? null : {
        join: qi,
        conn: uR,
        activated: !1
      }, RR.binaryType = "arraybuffer";
      const ZR = new yy.c((() => {
          ! function(RR, JR) {
            if (aq !== JR || RR.isStopped || null === aV(JR, PZ)) return;
            JR.detach(), aq = null, eV(RR, JR, PZ, "", !0), JR.ws.close()
          }(tR, qR)
        })),
        qR = {
          ws: RR,
          conn: uR,
          pending: [],
          pendingBytes: 0,
          left: !1,
          resume: yR,
          token: null,
          detach: () => {
            ZR.dispose(), RR.removeEventListener("message", iR), RR.removeEventListener("open", fR), RR.removeEventListener("close", VR)
          }
        },
        iR = RR => {
          if (RR.data instanceof ArrayBuffer) {
            var JR;
            const GR = new Uint8Array(RR.data);
            ZR.heard(), qR.token = null !== (JR = (0, ty.e)(GR)) && void 0 !== JR ? JR : qR.token,
              function(RR, JR, GR) {
                vK(RR, (() => {
                  RR.rings.net.writeFrame(JR, GR) || RR.crash(jG.q, `a socket frame of ${GR.byteLength} bytes did not fit the net-in ring`)
                }));
                const yR = RR.rings.net.cursor >= cZ;
                !DK() && (yR || RR.netWrittenSinceFrame >= oZ) && GK(RR, !1, document.hidden ? "all" : "budget");
                oK(RR)
              }(tR, uR, GR)
          }
        },
        fR = () => {
          yR || (0, eR.y)("wasm_socket_open", performance.now());
          for (const JR of qR.pending.splice(0)) RR.send(JR);
          qR.pendingBytes = 0
        },
        VR = RR => {
          if (aq === qR && tR.rings.net.cursor > 0 && GK(tR, !1, "all"), aq === qR) {
            if (qR.detach(), aq = null, eV(tR, qR, RR.code, RR.reason) || rV(tR, qR)) return;
            BV(tR, "close", uR), LV(uR, qR.left), JV(uR, RR.code, RR.reason)
          }
        };
      return RR.addEventListener("message", iR), RR.addEventListener("open", fR), RR.addEventListener("close", VR), aq = qR, null === (JR = (0, dR.l)()) || void 0 === JR || JR.socketAttached(uR), (0, wR.s)({
        websocketUrl: GR
      }), uR
    }

    function KV() {
      const RR = aq;
      if (!RR) return;
      const JR = Gq,
        GR = RR.resume;
      GR && (wV(), aq !== RR) || (aq = null, RR.detach(), RR.ws.close(), null !== JR && (rV(JR, RR) || GR && eV(JR, RR, IZ)) || (null !== JR && BV(JR, "close", RR.conn), LV(RR.conn, RR.left)))
    }

    function wV() {
      const RR = Gq;
      null !== RR && !RR.isStopped && !Wf && !Qq && RR.rings.net.cursor > 0 && GK(RR, !1, "all")
    }

    function rV(RR, JR) {
      var GR;
      if (!JR.resume) return !1;
      const yR = ei;
      return null !== yR && null !== JR.token && "" !== JR.token && (yR.pendingHold = {
        conn: JR.conn,
        token: `${yR.roomId}:${JR.token}`
      }), BV(RR, "close", JR.conn), null === (GR = (0, dR.l)()) || void 0 === GR || GR.socketDetached(JR.conn), !0
    }

    function eV(RR, JR, GR) {
      let yR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "",
        tR = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
      const uR = aV(JR, GR);
      if (null === uR) return !1;
      const {
        Qq: ZR,
        token: qR,
        game: iR,
        joinedAt: fR
      } = uR;
      if (!BV(RR, "close", JR.conn, pG.E.Held)) return !0;
      console.warn(`${pZ} the game's connection ${tR?"went silent":`dropped with code ${GR}`}, holding it`);
      const VR = {
        closeReason: yR,
        sinceJoinedMs: performance.now() - fR,
        game: iR
      };
      return (0, Vy.reportDisconnect)((0, RJ.e)(GR), qq, VR, tR ? "silent" : void 0), ZR.heldConn = JR.conn, ZR.dropCode = GR, ZR.pendingHold = {
        conn: JR.conn,
        token: `${ZR.roomId}:${qR}`
      }, Qq || GK(RR, !1, "all"), !0
    }

    function aV(RR, JR) {
      const GR = ei,
        tR = ri,
        uR = RR.token;
      return null === GR || null === tR || Wf || RR.left || tR.conn !== RR.conn || null === uR || "" === uR ? null : (0, yR.i)(JR) && GR.resume.canHoldSeat() ? {
        Qq: GR,
        token: uR,
        game: tR.game,
        joinedAt: tR.joinedAt
      } : null
    }

    function LV(RR, JR) {
      var GR;
      null === (GR = (0, dR.l)()) || void 0 === GR || GR.closeGame(RR), (0, nu.d)().close(RR), JR || (0, wR.s)({
        websocketUrl: null
      })
    }

    function nV() {
      const RR = Ci;
      if (null === RR) return;
      const JR = (0, dR.l)();
      Wf || null === JR || JR.kN(RR) ? Ci = null : performance.now() - hq.pause >= jZ && (hq.pause = performance.now(), console.warn(`${pZ} the cmd ring had no room for SetPaused(${RR}): written before the next frame`))
    }

    function UV() {
      const RR = ei;
      ei = null, null === RR || void 0 === RR || RR.resume.dispose()
    }

    function WV(RR, JR) {
      var GR, yR;
      const {
        heldConn: tR
      } = RR, uR = RR.resume.resumingConn;
      RR.heldConn = 0, RR.pendingHold = null, ei === RR && (ei = null), "left" === JR ? RR.resume.leave() : RR.resume.dispose(), 0 === Ai || (null === (GR = aq) || void 0 === GR ? void 0 : GR.conn) !== Ai || "left" === JR && (null === (yR = ui) || void 0 === yR ? void 0 : yR.conn) === Ai || MV(Ai), "gaveUp" === JR && 0 !== uR && MV(uR), 0 !== tR && "refused" !== JR && (console.info(`${pZ} the game held through its drop ${"left"===JR?"was left":"is given up"}`), null === Gq || Gq.isStopped || BV(Gq, "close", tR), LV(tR, !1))
    }

    function AV(RR, JR) {
      const GR = JR.indexOf(":");
      return {
        roomId: GR < 0 ? RR.roomId : JR.slice(0, GR),
        roomToken: JR.slice(GR + 1)
      }
    }

    function CV(RR) {
      (0, dG.logClientMeasurement)("join_preload", RR, {
        client: "wasm"
      })
    }

    function XV(RR) {
      var JR;
      ai = RR;
      const GR = RR.replayOffer && Wi !== RR.conn;
      Ui = GR ? RR.conn : 0, Li = GR || ni.has(RR.conn) ? 0 : RR.conn, DR.admitted(), RR.conn === Ai && (Ai = 0);
      const yR = ei;
      null !== yR && (null === (JR = ri) || void 0 === JR ? void 0 : JR.conn) === RR.conn && yR.resume.onInitialInfo(RR)
    }

    function MV(RR) {
      var JR;
      const GR = aq;
      (null === GR || void 0 === GR ? void 0 : GR.conn) === RR && (GR.left = !0, null === (JR = (0, dR.l)()) || void 0 === JR || JR.socketLeft(), (0, wR.s)({
        websocketUrl: null
      }), df(RR) ? setTimeout((() => {
        aq === GR && KV()
      }), JJ.e) : KV())
    }

    function BV(RR, JR, GR) {
      let yR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        tR = !1;
      return vK(RR, (() => {
        const {
          net: uR
        } = RR.rings;
        tR = "open" === JR ? uR.writeOpen(GR, yR) : uR.writeClose(GR, yR), tR || RR.crash(jG.q, `a socket ${JR} did not fit the net-in ring`)
      })), tR
    }

    function lV(RR, JR, GR) {
      let yR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const tR = "noContext" === JR ? "noContext" : "blockedAfterLoss" === JR ? "graphicsLost" : RR;
      (0, Vy.showUnsupported)(tR, "unsupported", GR, {
        ...yR,
        decline: JR
      })
    }
    const pV = 1500;

    function gV(RR) {
      return (0, zG.o)(RR) && bV(RR)
    }

    function bV(RR) {
      return 1 === RR.missing.length && RR.missing[0] === zG.b
    }
    const vV = "wasmNoContextWaited";

    function OV(RR, JR) {
      const GR = bV(RR),
        yR = GR ? (0, zG.ab)() : "",
        tR = JR || (0, zG.T)(yR) ? "blockedAfterLoss" : GR ? "noContext" : "unsupported",
        uR = `No WebGPU or WebGL2, and WebGL1 lacks ${RR.missing.join(", ")}`;
      return {
        decline: tR,
        detail: "" === yR ? uR : `${uR}; ${yR}`,
        details: {
          missing: RR.missing.join(",")
        },
        retries: "unsupported" !== tR && af
      }
    }

    function xV(RR) {
      console.warn(`${pZ} ${RR}: reloading once more onto the wasm client`), (0, wu.t)(), (0, Vy.flushCrashReports)(KJ.d).then(KJ.j, KJ.j)
    }

    function NV() {
      return af && "address" !== SJ.z.reason
    }

    function DV(RR, JR, GR, yR) {
      return ci(RR, JR, GR, yR)
    }

    function HV() {
      null === mi || null === Gq || Gq.isStopped || Wf || null !== Oq || null === kZ || (Oq = mi(kZ, PV, IV().follow))
    }

    function oV() {
      var RR, JR, GR;
      return null !== (RR = null === (JR = tq) || void 0 === JR || null === (GR = JR.textures) || void 0 === GR ? void 0 : GR.files()) && void 0 !== RR ? RR : null
    }

    function cV(RR) {
      IV().follow((JR => {
        null !== JR && Promise.all([Promise.all([GR.e(231), GR.e(54)]).then((() => GR(54685))), (0, wu.W)()]).then((RR => {
          let [{
            followPagePackFiles: GR
          }, yR] = RR;
          const tR = null === yR || (0, zG.o)(yR) ? "webgl" : yR.backend;
          GR(JR, Gu.e, tR, (RR => {
            Gu.e.setPageFiles(RR)
          }), PV)
        }), (JR => {
          console.warn(`${pZ} the texture pack's files didn't load: the previews draw the shipped ones until the next opens`, JR), RR()
        }))
      }))
    }

    function PV(RR, JR) {
      console.warn(`${pZ} ${RR}`, JR)
    }

    function IV() {
      return yq ??= new lu({
        load: RR => Promise.all([GR.e(231), GR.e(67)]).then((() => GR(54687))).then((JR => {
          let {
            startPageTexturePackFeed: GR
          } = JR;
          return GR(PV, RR)
        })),
        store: KG.g,
        fK: RR => {
          Kq.then((() => {
            (0, Vy.reportTexturePackFeedLoadFailure)(RR, qq)
          }))
        }
      }), yq
    }
    const mV = RR => IV().follow(RR);

    function zV() {
      return IV().loaded()
    }
    const SV = function(RR, JR, GR) {
        let yR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => performance.now(),
          tR = 0;
        return async function(uR, ZR) {
          let qR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => !0;
          const iR = ++tR,
            fR = yR() + JR,
            VR = await
          function(RR, JR) {
            let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {};
            return new Promise((yR => {
              const tR = setTimeout((() => {
                yR(null), RR.then((RR => {
                  null !== RR && (RR.joinedWithout(), GR(RR))
                }))
              }), JR);
              RR.then((RR => {
                clearTimeout(tR), yR(RR)
              }))
            }))
          }(RR(uR), JR, (RR => {
            iR === tR && qR() && ZR(RR, yR() + JR).catch((RR => {
              GR("the texture pack step after the join failed", RR)
            }))
          }));
          return null === VR ? null : ZR(VR, fR)
        }
      }((RR => (0, xJ.n)(RR) ? IV().request() : IV().forJoin()), Bu.b, PV),
      jV = function(RR, JR) {
        let GR = !1;
        return {
          setGamePackConfirm: RR => {
            GR = null !== RR, JR(RR)
          },
          packStep: (JR, yR, tR) => RR(JR, yR, (() => GR && tR()))
        }
      }(SV, (RR => {
        IV().setGamePackConfirm(RR)
      }));

    function dV(RR) {
      jV.setGamePackConfirm(RR)
    }

    function EV() {
      if (Wf || null !== Ei || null === zi || null === di) return;
      const {
        backend: RR,
        canvas: JR,
        fallbackReason: GR,
        adapterVendor: yR
      } = di, tR = zi;
      zi = null;
      try {
        Ei = tR({
          backend: RR,
          canvas: JR,
          fallbackReason: GR,
          adapterVendor: yR,
          joinedGame: () => Wf ? null : ui,
          canSend: () => !Wf && null !== ui && ui.conn === Li,
          inGame: kV,
          shaderPackReach: () => {
            var RR, JR;
            return null !== (RR = null === (JR = oq) || void 0 === JR ? void 0 : JR.reachInJoinedGame()) && void 0 !== RR ? RR : null
          },
          sa: () => xq,
          msaa: () => ji > 1,
          writeCmd: (RR, JR, GR) => null !== kZ && kZ(RR, JR, GR),
          takeFailedMeshJobs: () => {
            var RR, JR;
            return null !== (RR = null === (JR = Wq) || void 0 === JR ? void 0 : JR.takeFailedMeshJobs()) && void 0 !== RR ? RR : 0
          },
          readLoadCounts: RR => {
            var JR, GR;
            return null !== (JR = null === (GR = Gq) || void 0 === GR ? void 0 : GR.readLoadCounts(RR)) && void 0 !== JR && JR
          },
          mainStalled: (RR, JR, GR, yR) => {
            (0, Vy.reportMainStall)(RR, JR, GR, yR, qq)
          },
          mN: RR => {
            var JR, GR, yR;
            return null !== (JR = null === (GR = oi) || void 0 === GR || null === (yR = GR.mN) || void 0 === yR ? void 0 : yR.call(GR, RR)) && void 0 !== JR ? JR : -1
          }
        })
      } catch (uR) {
        console.error(`${pZ} the frame telemetry didn't start`, uR)
      }
    }

    function YV(RR, JR) {
      try {
        var GR, yR, tR;
        const uR = Di && null !== (GR = null === (yR = Gq) || void 0 === yR || null === (tR = yR.lastHeader) || void 0 === tR ? void 0 : tR.renderPending) && void 0 !== GR ? GR : 0;
        (0, ky.d)(JR, RR, kV() && !(null !== Wu), uR)
      } catch (uR) {
        (0, ky.t)(), console.error(`${pZ} the quality steps stopped`, uR)
      }
    }

    function kV() {
      return null !== ui && Zf === ui && !Wf
    }

    function QV(RR) {
      const JR = Ei;
      Ei = null;
      try {
        null === JR || void 0 === JR || JR.stop()
      } catch {}
      console.error(`${pZ} the frame telemetry threw: it stops`, RR)
    }

    function FV(RR) {
      var JR, GR, yR, tR;
      if ((0, nu.d)().fire(RR), "message" === RR.type) {
        if (Fq++, RR.LZ === pG.Oc.ERROR && null !== qi) {
          var uR;
          const {
            text: JR,
            dropsCache: GR
          } = (0, RJ.h)((new TextDecoder).decode(RR.payload));
          vi ||= GR, (null === (uR = Bi) || void 0 === uR ? void 0 : uR.conn) === RR.conn && (Oi = JR)
        } else if (RR.LZ === gG.sc.ResumeComplete) {
          var ZR;
          Wi = RR.conn, RR.conn === Ui && (Ui = 0, Li = ni.has(RR.conn) ? 0 : RR.conn), null === (ZR = ei) || void 0 === ZR || ZR.resume.onResumeComplete(RR.conn)
        }
        return
      }
      RR.phase === pG.H.Left ? Tq = RR.conn : RR.phase === pG.H.Activated && (null === (JR = Bi) || void 0 === JR ? void 0 : JR.conn) === RR.conn ? Bi.activated = !0 : RR.phase === pG.H.Resumed ? function(RR) {
        var JR, GR;
        Ai = RR;
        const yR = ei;
        if (null === yR || 0 === yR.heldConn || (null === (JR = aq) || void 0 === JR ? void 0 : JR.conn) !== RR || !aq.resume || null === ri) return;
        console.info(`${pZ} the game resumed on conn ${RR}, waiting for its InitialInfo`);
        const tR = yR.heldConn;
        yR.heldConn = 0, aq.resume = !1, ri.conn = RR, (null === (GR = Ki) || void 0 === GR ? void 0 : GR.conn) === tR && (Ki = {
          conn: RR,
          info: Ki.info
        }), EJ.c.apply({
          shopInfo: null,
          _shopVersion: NJ.e
        })
      }(RR.conn) : RR.phase === pG.H.Held ? function(RR) {
        var JR;
        const GR = ei,
          yR = null !== (JR = null === GR || void 0 === GR ? void 0 : GR.pendingHold) && void 0 !== JR ? JR : null;
        if (null !== GR && null !== yR && yR.conn === RR) return GR.pendingHold = null, GR.heldConn = RR, Ai = 0, console.warn(`${pZ} the core holds the game, reconnecting`), void GR.resume.onDropped(yR.token);
        if (RR === Ai) {
          Ai = 0;
          const JR = Gq;
          null === JR || JR.isStopped || (console.info(`${pZ} the core held again a resumed game the shell ended before its InitialInfo: closing it again`), BV(JR, "close", RR))
        }
      }(RR.conn) : RR.phase === pG.H.Closed && (null === (GR = ei) || void 0 === GR || null === (yR = GR.pendingHold) || void 0 === yR ? void 0 : yR.conn) === RR.conn && (ei.heldConn === RR.conn ? function(RR) {
        const JR = RR.heldConn,
          GR = RR.dropCode;
        WV(RR, "refused"), console.info(`${pZ} the core didn't hold the game through its drop: it hadn't started`), queueMicrotask((() => {
          LV(JR, !1), JV(JR, GR, "", !0)
        }))
      }(ei) : ei.pendingHold = null), RR.phase !== pG.H.Held && RR.phase !== pG.H.Left && RR.phase !== pG.H.Closed || (ni.add(RR.conn), RR.conn === Li && (Li = 0));
      const qR = Object.keys(pG.H).find((JR => pG.H[JR] === RR.phase)),
        iR = 0 === RR.code ? "" : ` (code ${RR.code})`;
      console.info(`${pZ} conn ${RR.conn}: ${null!==qR&&void 0!==qR?qR:RR.phase}${iR}, ${Fq} raw messages so far`), (null === (tR = ui) || void 0 === tR ? void 0 : tR.conn) !== RR.conn || RR.phase !== pG.H.Left && RR.phase !== pG.H.Closed || jf(null), Vi !== RR.conn || RR.phase !== pG.H.Left && RR.phase !== pG.H.Closed || (Vi = null, null === ui && null === qi && yu.d.setGame(void 0));
      for (const VR of [...Ni]) try {
        VR(RR.conn, RR.phase, RR.code)
      } catch (fR) {
        (0, bG.j)(fR, `${pZ} a connection listener threw`)
      }
    }
    const TV = 9e4,
      sV = 1e3;

    function hV() {
      (0, wu.t)(), ef.forget(), null === ui && null === qi || (0, Xy.i)(), queueMicrotask((() => {
        try {
          UK()
        } catch (RR) {
          console.warn(`${pZ} stopping before the reload threw`, RR)
        }(0, Vy.flushCrashReports)(KJ.d).then(KJ.j, KJ.j)
      }))
    }

    function RK() {
      const RR = Gq;
      null === RR || RR.isStopped || null === aq || Qq || !RR.hasPendingCommands() || GK(RR, !1, "budget")
    }

    function JK(RR) {
      var JR;
      const GR = ui;
      RR.persisted || null === GR || (null === (JR = aq) || void 0 === JR ? void 0 : JR.conn) !== GR.conn || aq.left || GR.leave()
    }

    function GK(RR, JR, yR) {
      let tR = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const uR = Qq;
      Qq = !0;
      try {
        const uR = RR.rings.net.cursor >= cZ;
        uR && "all" !== yR && !document.hidden && CK("backlog", `a shown tab's net-in is ${RR.rings.net.cursor} bytes behind: one frame reads it all`);
        return function(RR, JR, yR, tR) {
          var uR, ZR, qR, iR;
          if (Wf) return !1;
          if (vK(RR, tK), Wf || RR.isStopped) return !1;
          eK() && Iq("modelsIn");
          nV(), Sq = performance.now(), Tq = null, sq = !1, (0, jR.H)(), null === (uR = lq) || void 0 === uR || uR.beforeFrame(), it(Sq, RR), (0, jR.z)(Sq, uK), kq = !0;
          const fR = JR && rK();
          let VR;
          try {
            VR = RR.frame(Sq, fR, yR)
          } finally {
            kq = !1
          }
          if (!VR) return !1;
          Si.observe(null !== (ZR = null === (qR = RR.lastHeader) || void 0 === qR ? void 0 : qR.chunksCancelled) && void 0 !== ZR ? ZR : 0);
          const KR = RR.lastFrameKind,
            wR = (0, iG.c)(KR);
          (function(RR) {
            null !== zu && zu.afterFrame(performance.now(), RR)
          })(wR), null === (iR = Yi) || void 0 === iR || iR.frame(RR, Sq, KR), JR && (ff = wR);
          wR && ((0, yG.b)(Sq), tf.frame(Sq), wf.end());
          if (null !== Ei) try {
            Ei.frameRan(RR, Sq, performance.now(), KR)
          } catch (aR) {
            QV(aR)
          }
          "drawn" === KR && wK() && function() {
            for (const RR of [...Vu]) RR()
          }();
          RR.forEachNetOut(aK);
          const rR = aq;
          null !== Tq && (null === rR || void 0 === rR ? void 0 : rR.conn) === Tq && LK(rR, JJ.j);
          KK(RR),
            function(RR) {
              const JR = 0 !== (RR.headerWord(gG.L.LoadSteps) & gG.Y.JoinPreload);
              JR !== fi && (fi = JR, (0, Vy.setCrashAdPreload)(JR), (0, Ly.G)())
            }(RR), JR && (! function(RR) {
              var JR, yR, tR;
              if (null === ui || !rK()) return;
              const uR = RR.headerWord(gG.L.LoadSteps);
              null === yf || Zf === ui && !yf.frame(Sq, 0 !== (uR & gG.ab.TerrainDrawn)) || (yf = null);
              if (0 === (uR & gG.Y.PlayerBound)) return;
              const ZR = RR.lastHeader,
                qR = !Di || 0 === (null === ZR || void 0 === ZR ? void 0 : ZR.renderPending);
              !Ti && qR && (Ti = !0, performance.mark(HZ));
              if (Zf === ui) return;
              const iR = null !== (JR = null === ZR || void 0 === ZR ? void 0 : ZR.firstView) && void 0 !== JR ? JR : pG._.NotYet;
              if (Di && iR === pG._.NotYet) return;
              if (Fi && (!0 !== (null === (yR = (0, dR.l)()) || void 0 === yR ? void 0 : yR.isSessionLive) || !qR)) return;
              var fR;
              Zf = ui, wf.shown(), Di && null !== ri && function(RR, JR) {
                let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : KG.i;
                const yR = Array.from(JR).filter(lt).slice(0, Bt);
                if ("" === RR || 0 === yR.length) return;
                const tR = gt(GR).filter((JR => JR.game !== RR));
                GR.setItem(Xt, [{
                  game: RR,
                  codes: yR
                }, ...tR].slice(0, Mt))
              }(ri.game, null !== (fR = RR.firstViewTerrainCodes()) && void 0 !== fR ? fR : []);
              const VR = ui;
              if (setTimeout((() => {
                  ui === VR && (0, eR.q)()
                }), 0), null === (tR = oq) || void 0 === tR || tR.playable(), function() {
                  clearTimeout(eq), eq = setTimeout((() => {
                    kV() && NK((RR => {
                      let {
                        prefetchWorldgenWorker: JR
                      } = RR;
                      JR()
                    }))
                  }), YZ)
                }(), Fi) return;
              Fi = !0, tf.shown(), performance.mark(DZ), (0, Du.n)("render") && Promise.all([GR.e(91), GR.e(57)]).then((() => GR(5539))).then((RR => {
                let {
                  renderDebugPlayable: JR
                } = RR;
                JR()
              }), (RR => {
                console.warn("The render debug topic didn't load", RR)
              }));
              const KR = Math.round(performance.now()),
                wR = RR.readViewQueuedPrograms();
              null !== wR && (0, eR.y)("wasm_view_links", KR, (0, LR.Fb)(wR));
              const rR = null === Gf || null === Rf ? 0 : Math.max(0, Rf - Gf),
                aR = null === Gf ? 0 : Math.max(0, KR - Gf),
                nR = Di ? RR.readFirstViewWait(rR, aR) : null;
              null !== nR && (0, eR.v)(nR);
              if (Di && iR !== pG._.Drawn) {
                const JR = iR === pG._.HeldBackstop ? "held_draws" : "long",
                  {
                    cause: GR
                  } = fK(RR);
                if (console.warn(`${pZ} playable at ${KR} ms on the first view's ${JR} backstop, ${GR}: it wasn't drawn whole in time`), (0, eR.y)("wasm_view_backstop", KR, `${JR}:${GR}`), "long" === JR) {
                  var UR, WR;
                  const JR = null !== (UR = null === (WR = ri) || void 0 === WR ? void 0 : WR.game) && void 0 !== UR ? UR : "";
                  yf = new My.d((() => {
                    const {
                      cause: GR,
                      census: yR
                    } = fK(RR);
                    (0, Vy.reportFirstViewNoTerrain)(JR, GR, yR, qq), (0, zJ.t)("noTerrain")
                  }))
                }
              } else console.info(`${pZ} playable at ${KR} ms${Di?"":" (no renderer)"}`);
              setTimeout(Ii, 0), (0, kJ.d)().catch((RR => {
                console.error(`${pZ} item sprites didn't load, so item particles show the missing texture`, RR)
              })), Yt.b.warm()
            }(RR), wR && null !== ui && 0 !== (RR.headerWord(gG.L.LoadSteps) & gG.ab.MeshLanded) && (qf = ui), (0, kt.m)(null !== ui && qf === ui && Zf !== ui), (0, kt.o)(null !== ui));
          (0, jG.K)(RR, {
            worldgen: nq,
            mesh: Wq
          }),
          function(RR) {
            RR.forEachEvent(Vt);
            for (const JR of ft) try {
              (0, yt.b)(JR)
            } catch (aR) {
              if ((0, bG.h)(aR)) {
                RR.crashOn(jG.g, aR);
                break
              }
              console.error(`${ut} an input action listener threw`, aR)
            }
            ft.length = 0
          }(RR), tR && (0, qG.d)();
          return !RR.isStopped
        }(RR, JR, "all" === yR || uR, tR)
      } finally {
        Qq = uR, uR || (jq = performance.now(), zf())
      }
    }

    function yK(RR) {
      console.error(`${pZ} a frame-start listener threw`, RR)
    }

    function tK() {
      var RR, JR, GR, yR;
      null === (RR = gq) || void 0 === RR || RR.drain(kZ, QZ), null === (JR = Nq) || void 0 === JR || JR.drain(kZ), null === (GR = Dq) || void 0 === GR || GR.drain(performance.now()), Pi(kZ), null === (yR = Oq) || void 0 === yR || yR.drain()
    }

    function uK(RR) {
      console.error(`${pZ} a before-frame listener threw`, RR)
    }

    function ZK(RR) {
      var JR, GR;
      const yR = Gq;
      if (null === yR) return;
      if (yR.isStopped || Wf || (0, wu.c)()) return void tf.shown();
      const tR = tf.end(RR, performance.now());
      if (null === tR) return;
      const {
        cause: uR,
        census: ZR,
        loadSteps: qR
      } = fK(yR), iR = {
        cause: uR,
        bound: 0 !== (qR & gG.Y.PlayerBound),
        preload: 0 !== (qR & gG.Y.JoinPreload),
        startupLoaded: rK(),
        renderPending: null !== (JR = null === (GR = yR.lastHeader) || void 0 === GR ? void 0 : GR.renderPending) && void 0 !== JR ? JR : 0,
        wait: yR.readFirstViewWait(0, 0),
        canvasEmpty: null !== di && (0, By.e)(di.canvas)
      };
      iR.bound && null === iR.wait && console.warn(`${pZ} the first view's wait couldn't be read as the load ended: its report says lacked none`), (0, Vy.reportFirstViewUnshown)(uf, tR, iR, ZR, qq), "hidden" !== RR && "pagehide" !== RR || (0, Vy.flushCrashReports)(KJ.d)
    }

    function qK() {
      document.hidden ? (Kf = !0, ZK("hidden")) : tf.pageShown(performance.now())
    }

    function iK() {
      ZK(document.hidden ? "hidden" : "pagehide")
    }

    function fK(RR) {
      const JR = (0, dR.l)(),
        GR = (0, dR.u)(),
        yR = null === JR || null === GR ? null : GR.readDrawCensus(JR.api),
        tR = RR.headerWord(gG.L.LoadSteps);
      return {
        cause: (0, My.l)(tR, yR),
        census: yR,
        loadSteps: tR
      }
    }
    const VK = {
      ChunkRequested: "wasm_chunk_requested",
      ChunkStored: "wasm_chunk_stored",
      MeshLanded: "wasm_mesh_landed",
      PlayerChunk: "wasm_player_chunk",
      TerrainDrawn: "wasm_terrain_drawn"
    };

    function KK(RR) {
      var JR;
      if (Fi) return;
      if (null === Rf && rK() && (Rf = performance.now()), null === ui || 0 === (RR.headerWord(gG.L.LoadSteps) & gG.Y.PlayerBound) ? Gf = null : Gf ??= performance.now(), null === qi && null === ui) return;
      null === Rf || Jf || (Jf = !0, (0, eR.y)("wasm_startup_loaded", Rf));
      let GR = 0;
      null !== ui ? GR = -1 : !0 === (null === (JR = Bi) || void 0 === JR ? void 0 : JR.activated) && (GR = ~gG.ab.TerrainDrawn);
      const yR = RR.headerWord(gG.L.LoadSteps) & GR & ~si;
      if (0 === yR) return;
      si |= yR;
      const tR = performance.now();
      var uR, ZR, qR;
      0 !== (yR & gG.ab.PlayerChunk) && (tf.playerChunk(tR, document.hidden), uf = null !== (uR = null !== (ZR = null === (qR = ri) || void 0 === qR ? void 0 : qR.game) && void 0 !== ZR ? ZR : ii) && void 0 !== uR ? uR : "", (0, Vy.warmCrashCounts)());
      for (const [iR, fR] of Object.entries(VK)) 0 !== (yR & gG.ab[iR]) && (0, eR.y)(fR, tR)
    }

    function wK() {
      return Di && rK()
    }

    function rK() {
      return Hq && eK()
    }

    function eK() {
      return null === gq || gq.startupDone
    }

    function aK(RR, JR) {
      const GR = aq;
      (null === GR || void 0 === GR ? void 0 : GR.conn) === RR ? LK(GR, JR) : Ji++
    }

    function LK(RR, JR) {
      const {
        ws: GR
      } = RR;
      return GR.readyState === WebSocket.OPEN ? (GR.send(JR), !0) : GR.readyState === WebSocket.CONNECTING && RR.pendingBytes + JR.byteLength <= SZ ? (RR.pending.push(JR.slice()), RR.pendingBytes += JR.byteLength, !0) : (Ji++, !1)
    }

    function nK() {
      return null !== ui && wK()
    }

    function UK() {
      var RR, JR, GR, yR, tR, uR, ZR, qR, iR, fR, VR, KR, wR, rR, eR, aR, LR;
      Wf = !0, Vf.stop(), wf.end(), (0, ou.endLookDebugTake)(), zu = null, UV(), (0, jR.E)().unlockPointer(), (0, jR.B)(null), null === (RR = pq) || void 0 === RR || RR(), pq = null, null === (JR = (0, dR.u)()) || void 0 === JR || JR.followCursorAim(null), (0, qG.I)(), (0, dR.i)(), Zq.stop(), null === (GR = ki) || void 0 === GR || GR(), ki = null, null === (yR = Qi) || void 0 === yR || yR(), Qi = null, null === (tR = Ei) || void 0 === tR || tR.stop(), Ei = null, (0, ly.q)(null), null === (uR = Lq) || void 0 === uR || uR(), Lq = null, null === (ZR = nq) || void 0 === ZR || ZR.stop(), nq = null, null === (qR = Wq) || void 0 === qR || qR.stop(), Wq = null, null !== (iR = tq) && void 0 !== iR && null !== (fR = iR.textures) && void 0 !== fR && fR.assets && (0, Ru.j)(null), null === (VR = tq) || void 0 === VR || VR.stop(), tq = null, uq = null;
      const nR = Aq;
      Aq = null, nR && (nR.stop(), bK(nR)), null === (KR = Nq) || void 0 === KR || KR.dispose(), Nq = null, null === (wR = Dq) || void 0 === wR || wR.dispose(), Dq = null, gq = null, null === (rR = vq) || void 0 === rR || rR(), vq = null, null === (eR = Bq) || void 0 === eR || eR(), Bq = null, null !== Yq && (clearTimeout(Yq), Yq = null), null === (aR = lq) || void 0 === aR || aR.stop(), lq = null, Hf(), yu.d.release(), KV();
      const UR = Oq;
      Oq = null;
      try {
        null === UR || void 0 === UR || UR.dispose()
      } catch (WR) {
        console.warn(`${pZ} the sky's images didn't release`, WR)
      }(0, Qt.f)(null), null === (LR = Rq) || void 0 === LR || LR.pagePreviews().endSession(null === (0, HJ.i)())
    }

    function WK(RR, JR) {
      var GR, yR;
      const tR = null !== (GR = null === (yR = Aq) || void 0 === yR ? void 0 : yR.details()) && void 0 !== GR ? GR : {},
        uR = RR.site === bZ || RR.site === vZ || RR.site === Vy.RENDER_RELOAD_SITE || RR.site === OZ ? RR.error instanceof WebAssembly.RuntimeError || RR.error instanceof cG.e : !(0, zG.s)(RR.error) && (0, jG.E)(RR);
      uR && RR.error instanceof Error && (0, HJ.J)(RR.error);
      const ZR = uR || RR.site === jG.r ? (0, Vy.readTrap)(RR.error) : null,
        qR = null !== ZR && (0, OG.c)(ZR.kind, ZR.refusedBytes) ? ZR.refusedBytes : 0,
        iR = (0, Zy.r)(),
        fR = null === Cq ? (0, jt.v)(function() {
          try {
            return (0, HJ.m)().buffer.byteLength
          } catch {
            return 0
          }
        }(), qR, iR) : Cq.ceilingMayRefuse(qR, iR),
        VR = qR > 0 && !fR && NV() && !(0, wu.c)() ? (0, Zy.t)() : void 0;
      var KR;
      if (UK(), (0, wu.c)()) return ef.releaseNow(), console.warn(`${pZ} the session stopped at ${RR.site} as the page reloads`, RR.error), void((0, zG.s)(RR.error) || (null === (KR = RR.header) || void 0 === KR ? void 0 : KR.lastError) === pG.K.CoreBusy || (0, Vy.reportStoppedCore)(RR, JR, ZR, {
        memoryDetails: tR,
        memoryStep: VR
      }));
      (0, Vy.showCrash)(RR, JR, ZR, {
        memoryDetails: tR,
        memoryStep: VR
      })
    }

    function AK(RR) {
      var JR, GR;
      let {
        text: yR,
        reload: tR,
        stillBlocked: uR
      } = RR;
      if (Uf) return;
      Uf = !0, (0, Ly.W)(), null === (JR = gi) || void 0 === JR || JR.abort(), gi = null, yu.d.release();
      const ZR = af ? null !== (GR = yR.cancel) && void 0 !== GR ? GR : "general:back" : null;
      !async function(RR, JR, GR) {
        let yR = RR;
        for (; await bJ(yR) && JR;) {
          if (null === GR || wG(!1) || wG(!0)) return void(0, KJ.j)();
          yR = GR
        }
        af && (0, KJ.f)("/")
      }({
        ...yR,
        cancel: ZR
      }, tR, null === uR ? null : {
        ...uR,
        cancel: ZR
      })
    }

    function CK(RR, JR) {
      const GR = performance.now();
      return !(GR - hq[RR] < jZ) && (hq[RR] = GR, console.warn(`${pZ} ${JR}`), !0)
    }

    function XK(RR) {
      const {
        input: JR,
        net: GR,
        worker: yR
      } = RR.rings, tR = RR.optionsDropped, uR = JR.dropped + tR + GR.dropped + yR.dropped + Ji;
      uR !== Ri && CK("dropped", `${uR} records dropped so far (input ${JR.dropped}, options ${tR}, net ${GR.dropped}, worker ${yR.dropped}, net-out ${Ji})`) && (Ri = uR)
    }

    function MK() {
      var RR, JR;
      const GR = (0, ay.g)();
      if (null === GR) return null;
      const yR = (0, Cy.v)(GR);
      return {
        ...yR,
        horizontal: Math.min(yR.horizontal, null !== (RR = null === (JR = Aq) || void 0 === JR ? void 0 : JR.shedDistanceInUse()) && void 0 !== RR ? RR : 1 / 0)
      }
    }
    const BK = new WeakSet;

    function lK(RR) {
      var JR, GR;
      return {
        samples: Di ? ji : null,
        sunShadows: RR,
        renderDistance: null !== (JR = null === (GR = MK()) || void 0 === GR ? void 0 : GR.horizontal) && void 0 !== JR ? JR : null
      }
    }

    function pK(RR) {
      ii = RR, (0, Ly.G)()
    }

    function gK() {
      var RR, JR, GR;
      const yR = MK();
      return {
        ...null === (RR = Aq) || void 0 === RR ? void 0 : RR.pageKillSnapshot(),
        renderDistance: null !== (JR = null === yR || void 0 === yR ? void 0 : yR.horizontal) && void 0 !== JR ? JR : null,
        renderDistanceVertical: null !== (GR = null === yR || void 0 === yR ? void 0 : yR.vertical) && void 0 !== GR ? GR : null,
        chunkCap: Xq,
        budgetBasis: Mq,
        renderBackend: (0, wu.M)(),
        adPreload: fi,
        ...(0, ny.d)(ii)
      }
    }

    function bK(RR) {
      var JR;
      console.info(`${pZ} wasm memory at the session's end`, RR.details());
      const {
        wasmMainMiB: GR,
        wasmWorkersMiB: yR,
        peakStoredChunks: tR
      } = RR.pageKillSnapshot(), uR = navigator.deviceMemory;
      (0, dG.logClientMeasurement)("wasm_memory_end", {
        wasmMainMiB: GR,
        wasmWorkersMiB: yR,
        peakStoredChunks: tR
      }, {
        client: "wasm",
        renderBackend: null !== (JR = (0, wu.M)()) && void 0 !== JR ? JR : "none",
        os: (0, Uy.getOperatingSystem)(),
        deviceMemory: String(null !== uR && void 0 !== uR ? uR : "unreported")
      })
    }

    function vK(RR, JR) {
      if (!RR.isStopped) try {
        JR()
      } catch (GR) {
        RR.crash(jG.v, GR)
      }
    }

    function OK() {
      return Uq ??= GR.e(84).then((() => GR(54695))).catch((RR => {
        throw Uq = null, RR
      })), Uq
    }
    async function xK() {
      const {
        createWorldgenWorker: RR,
        worldgenWorkerReady: JR
      } = await OK();
      return await JR(), RR
    }

    function NK(RR) {
      var JR;
      null === (JR = Uq) || void 0 === JR || JR.then(RR, (() => {}))
    }

    function DK() {
      return performance.now() - Math.max(jq, dq) >= dZ
    }

    function HK(RR) {
      const JR = document.hidden || Eq ? "all" : "budget";
      Eq = !0;
      const GR = GK(RR, !1, JR);
      var yR;
      GR && (XK(RR), null === (yR = Aq) || void 0 === yR || yR.afterFrame());
      return GR
    }

    function oK(RR) {
      RR.isStopped || 0 === RR.rings.net.cursor || DK() && !HK(RR) || RR.rings.net.cursor > 0 && performance.now() - dq >= dZ / 2 && function(RR) {
        Yq ??= setTimeout((() => {
          Yq = null, oK(RR)
        }), dZ)
      }(RR)
    }

    function cK(RR, JR) {
      return async function(RR, JR, GR) {
        let {
          stop: yR,
          stillWanted: tR,
          beforeReload: uR
        } = GR;
        const ZR = await (0, Ct.l)(RR, {
          stillWanted: tR,
          beforeReload: async () => {
            yR(), await Promise.all([(0, Vy.flushCrashReports)(KJ.d), null === uR || void 0 === uR ? void 0 : uR()])
          },
          reload: KJ.j
        });
        return ZR || JR(), ZR
      }(RR, JR, {
        ...arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        stop: UK
      })
    }
    let PK = !1;

    function IK() {
      return PK = !0, async function(RR, JR, yR) {
        const {
          gamePackSource: tR
        } = await GR.e(132).then((() => GR(42579)));
        await jV.packStep(RR, ((GR, yR) => GR.packForGame(RR, tR(JR), yR)), yR)
      }(...arguments)
    }

    function mK(RR) {
      ! function(RR, JR) {
        RR((RR => {
          null === RR || void 0 === RR || RR.subscribe((RR => {
            let {
              pack: GR,
              gameSource: yR
            } = RR;
            JR(null === yR || null === GR ? null : {
              pack: GR,
              source: "" === yR ? null : yR
            })
          }))
        }))
      }(mV, RR)
    }
    let zK = !1,
      SK = null,
      jK = !1,
      dK = !1;

    function EK() {
      var RR;
      zK || (zK = !0, pJ = (RR, JR) => (0, nJ.w)(UJ.g.get().getCurrentLanguageCode(), RR, JR), pf("play", fJ), (0, wR.q)(new tw), qR.gameBridge.attach(hR), sK().catch((() => {})), (0, dR.y)((RR => {
        CJ(RR.setTextHost)
      })), RR = QK, bi.add(RR), function(RR) {
        for (const JR of cq) RR(JR);
        Pq.add(RR)
      }((RR => {
        kK(YK[RR])
      })))
    }
    const YK = {
      booted: uR.j.INITIALISE_NOA,
      texturesIn: uR.j.REGISTRATION,
      modelsIn: uR.j.SETUP_LIFEFORMS
    };

    function kK(RR) {
      iR.n.JK("matchmakeAndPlayStepCompleted", {
        step: RR,
        totalSubSteps: 1
      })
    }

    function QK(RR) {
      if (!jK) return;
      const {
        gameNameWithVariation: JR,
        lobbyName: GR
      } = (0, wR.d)();
      if (RR.code === yR.e.serverUpdating.code) return (new tw).leaveLive(), void TK(JR, GR);
      PR.c.leftGame(JR, RR.code), iR.n.JK("unwantedLeftGame", {
        reason: FK(RR),
        requiresRefresh: RR.requiresRefresh,
        canReconnect: null !== RR.reconnect,
        automaticallyReconnect: RR.reconnecting,
        canPlayAgain: RR.canPlayAgain,
        gameNameWithVariation: JR,
        lobbyName: GR
      }), (new tw).leaveLive()
    }

    function FK(RR) {
      return null !== RR.reasonKey ? {
        translationKey: RR.reasonKey
      } : "gameOrPluginKick" === RR.name ? (0, vJ.b)(RR.reason) : `You have disconnected from the server.\n${RR.reason}`
    }

    function TK(RR, JR) {
      var yR;
      yR = (0, fR.D)(RR, JR), Promise.resolve().then((() => GR(1663))).then((RR => {
        let {
          navigatePreserveSearch: JR
        } = RR;
        JR(yR)
      })).catch((RR => {
        console.warn("[bloxd-wasm-client] the page's router didn't navigate: loading the page instead", RR), (0, KJ.f)(yR)
      }))
    }

    function sK() {
      return SK ??= Promise.all([GR.e(85), GR.e(89), GR.e(86), GR.e(87), GR.e(88), GR.e(105), GR.e(102), GR.e(306), GR.e(127), GR.e(280), GR.e(254), GR.e(246), GR.e(55)]).then((() => GR(42538))).then((RR => {
        try {
          RR.attachPlayGameSources()
        } catch (JR) {
          throw console.error("[bloxd-wasm-client] the play sources did not attach", JR),
            function(RR) {
              Kq.then((JR => {
                null === JR || JR.isStopped || Wf ? console.warn(`${pZ} the play sources threw as they attached, after the client stopped`, RR) : WK({
                  site: OZ,
                  error: RR,
                  header: null
                }, qq)
              }))
            }(JR), JR
        }
      }), (RR => {
        throw SK = null, new dR.e(RR)
      })), SK
    }
    async function hK(RR, JR) {
      EK(), PK = !0, jK = !0;
      let GR = {
          place: RR.place,
          matchedAt: RR.matchedAt
        },
        ZR = RR.place.gameNameWithVariation;
      const qR = (0, KR.e)();
      let iR = null;
      const fR = await Of({
        matchmake: async () => {
          let JR = GR;
          if (GR = null, null === JR) {
            const GR = await RR.rematch();
            if (GR.isError()) throw iR = GR.asError().forward(), new Error(GR.asError().message);
            JR = {
              place: GR.getValue(),
              matchedAt: performance.now()
            }
          }
          ZR = JR.place.gameNameWithVariation, await (0, aR.d)();
          return {
            target: await (0, yJ.f)(RR.userContext, JR.place, zV(), qR),
            matchedAt: JR.matchedAt,
            freshMs: yJ.c
          }
        },
        pageReady: sK,
        onFailure: (RR, JR) => {
          null === iR && function(RR, JR) {
            (0, Vy.reportPageJoinFailure)(RR, qq, JR)
          }(RR, {
            sinceJoinStartMs: JR,
            game: ZR
          })
        },
        rejoin: () => () => {},
        invalidateTrafficCode: () => RR.userContext.invalidateTrafficCode(),
        signal: JR
      });
      switch (fR.kind) {
        case "joined":
          if (qR) {
            setTimeout((() => {
              DR.ready()
            }), 0);
            const {
              game: RR
            } = fR;
            (0, KR.o)((() => {
              RR.endJoinAd() && ((0, eR.u)(), DR.adEnded())
            }))
          }
          return dK || (dK = !0, (0, oR.d)()), jK ? (kK(uR.j.CONNECT_TO_GAME_SERVER), kK(uR.j.SHADER_PACK), function() {
            var RR, JR;
            return null !== (RR = null === (JR = oq) || void 0 === JR ? void 0 : JR.runsInJoinedGame()) && void 0 !== RR && RR
          }() && (0, HR.f)(RR.userContext, ZR).catch((RR => {
            console.error("Failed to report the shader pack session", RR)
          })), function() {
            const RR = function() {
              var RR, JR;
              return null !== (RR = null === (JR = oq) || void 0 === JR ? void 0 : JR.couldntRunInJoinedGame()) && void 0 !== RR ? RR : null
            }();
            null !== RR && (0, HR.e)(RR)
          }(), tR.e.value(void 0)) : yw("The server ended the game as it joined");
        case "failed":
          if (!fR.reloading) {
            if (null !== iR) return iR;
            if ((fR.error instanceof JJ.m || fR.error instanceof JJ.b) && fR.error.code === yR.e.serverUpdating.code) {
              if (JR.aborted) return yw("Left the game while it loaded");
              const {
                gameNameWithVariation: RR,
                lobbyName: GR
              } = (0, wR.d)();
              return TK(RR, GR), yw("The server is updating")
            }
            return fR.error instanceof VJ.c ? tR.e.errorWithCode(fR.error.messageKey, uR.j.SHADER_PACK, {
              severity: "medium"
            }) : tR.e.errorWithCode(function(RR) {
              if (RR instanceof JJ.z || RR instanceof zR.g) return RR.message;
              if (Rw(RR)) return (0, RJ.f)(RR.code, RR.serverText);
              return RJ.c
            }(fR.error), uR.j.CONNECT_TO_GAME_SERVER, {
              error: Jw(fR.error) ? fR.error : void 0,
              severity: Gw(fR.error),
              gameServerUnreachable: (0, GJ.b)(fR.error),
              joinFailure: (0, GJ.g)(fR.error),
              rematch: (0, IR.e)(fR.error),
              gameRefused: (0, mR.d)(fR.error)
            })
          }
          return yw("Reloading into the new build");
        case "stopped":
          return yw("The game client stopped, and shows why");
        case "xR":
          return yw("Left the game while it loaded")
      }
    }

    function Rw(RR) {
      return RR instanceof JJ.m || RR instanceof JJ.b && "attach" !== RR.stage
    }

    function Jw(RR) {
      return !(RR instanceof JJ.z) && !Rw(RR) && void 0 === (0, GJ.b)(RR)
    }

    function Gw(RR) {
      return Rw(RR) ? RR instanceof JJ.b && (0, RJ.e)(RR.code).requiresRefresh ? "medium" : "low" : Jw(RR) || RR instanceof JJ.z ? "medium" : "low"
    }

    function yw(RR) {
      return tR.e.errorWithCode(RR, uR.j.CONNECT_TO_GAME_SERVER, {
        severity: "low",
        xR: !0
      })
    }
    class tw {
      leave(RR) {
        if ((0, SR.b)()) {
          var JR, GR;
          if ((0, ZR.b)()) return;
          (0, rR.b)(!0 === (null === (JR = (0, SR.l)()) || void 0 === JR || null === (GR = JR.currentViewer) || void 0 === GR ? void 0 : GR.unsavedChanges), RR)
        } else this.leaveLive()
      }
      leaveLive() {
        var RR;
        PK && (null === (RR = zV()) || void 0 === RR || RR.endGamePack());
        if (!jK) return;
        jK = !1, (0, cR.e)();
        try {
          var JR;
          null === (JR = (0, dR.u)()) || void 0 === JR || JR.clearWasmCameraScreen()
        } catch (yR) {
          console.error("[bloxd-wasm-client] the camera screen didn't clear", yR)
        }
        const {
          gameNameWithVariation: GR
        } = (0, wR.d)();
        try {
          Yf()
        } finally {
          (0, wR.s)({
            websocketUrl: null
          }), iR.n.JK("leaveGame", {
            gameNameWithVariation: GR
          }), (0, VR.S)()
        }
      }
      isReplay() {
        return (0, SR.b)()
      }
    }
  },
  42472: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => tR,
      f: () => yR,
      h: () => qR,
      l: () => ZR
    });
    const yR = 12e4,
      tR = 3e4,
      uR = {
        hidden: () => "undefined" !== typeof document && document.hidden,
        listen: RR => "undefined" === typeof document ? () => {} : (document.addEventListener("visibilitychange", RR), () => {
          document.removeEventListener("visibilitychange", RR)
        })
      };

    function ZR(RR) {
      return `it sent no start within ${Math.round(RR)} ms`
    }
    class qR {
      constructor(RR, JR) {
        let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => performance.now(),
          yR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : uR;
        this.timeoutMs = RR, this.onTimeout = JR, this.now = GR, this.visibility = yR, this.timer = null, this.counted = 0, this.step = null, this.unlisten = void 0, this.unlisten = yR.listen((() => {
          this.onVisibility()
        })), yR.hidden() || this.next()
      }
      cancel() {
        this.pause(), this.unlisten()
      }
      onVisibility() {
        this.visibility.hidden() ? (this.counted += this.credit(), this.pause()) : null === this.timer && this.next()
      }
      credit() {
        const RR = this.step;
        return null === RR ? 0 : Math.min(this.now() - RR.at, RR.ms)
      }
      pause() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null), this.step = null
      }
      next() {
        const RR = this.timeoutMs - this.counted;
        if (RR <= 0) return void this.arm(1e3, (() => {
          this.cancel(), this.onTimeout(this.counted)
        }));
        const JR = Math.min(RR, 5e3);
        this.step = {
          at: this.now(),
          ms: JR
        }, this.arm(JR, (() => {
          this.counted += this.credit(), this.step = null, this.next()
        }))
      }
      arm(RR, JR) {
        this.timer = setTimeout((() => {
          this.timer = null, JR()
        }), RR)
      }
    }
  },
  40985: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => qR
    });
    var yR = GR(377),
      tR = GR(1127);
    const uR = new Set(["bingo", "buildAFactory2", "classic", "greenville", "testGym"]),
      ZR = new Set(["creativeFlat", "skyGrid"]);

    function qR(RR) {
      const JR = (0, yR.Sb)(RR);
      return "greenville" === JR ? !(0, yR.Mb)(RR) : "classic" !== JR ? uR.has(JR) : !(0, tR.n)(RR) && !ZR.has((0, yR.Mb)(RR))
    }
  },
  38902: (RR, JR, GR) => {
    function yR(RR) {
      return "string" !== typeof RR || 2 !== RR.length && ":" !== RR[2] ? null : RR[0] + RR[1]
    }
    GR.d(JR, {
      c: () => LR,
      e: () => XR,
      i: () => CR,
      k: () => MR,
      m: () => qR,
      p: () => ZR,
      s: () => uR,
      t: () => iR,
      u: () => nR,
      y: () => aR
    });
    const tR = ["op:ytInitialPlayerResponse.adPlacements", "op:ytInitialPlayerResponse.playerAds", "op:ytInitialPlayerResponse.adSlots", "op:playerResponse.adPlacements", "op:playerResponse.playerAds", "op:playerResponse.adSlots"];

    function uR(RR) {
      if (function(RR) {
          for (let JR = 0; JR < tR.length; JR++)
            if (RR === tR[JR]) return !0;
          return !1
        }(RR)) return !1;
      const JR = yR(RR);
      return "op" === JR || "ep" === JR || "wi" === JR || "pp" === JR || "fp:call" === RR || "fp:t" === RR
    }

    function ZR(RR) {
      return "fp" === yR(RR) && !uR(RR)
    }

    function qR(RR) {
      if ("string" !== typeof RR) return !1;
      return "o" === RR[0] && "p" === RR[1] && (2 === RR.length || ":" === RR[2]) || "fp:call" === RR || "2" === RR || "t" === RR || "a" === RR
    }

    function iR(RR, JR) {
      return `~${function(RR){return RR.length<2?RR:":"===RR[1]?RR[0]:RR[0]+RR[1]}(JR)}~${RR}`
    }
    const fR = 200;

    function VR(RR) {
      let JR = RR.length - 1;
      for (let GR = 0; GR < 2; GR++) {
        const GR = JR;
        for (; JR >= 0 && RR[JR] >= "0" && RR[JR] <= "9";) JR--;
        if (JR < 0 || JR === GR || ":" !== RR[JR]) return -1;
        JR--
      }
      return JR + 1
    }

    function KR(RR) {
      return "unknown" === RR || VR(RR) >= 0
    }

    function wR(RR, JR) {
      return RR[JR] >= "\ud800" && RR[JR] <= "\udbff" && JR + 1 < RR.length && RR[JR + 1] >= "\udc00" && RR[JR + 1] <= "\udfff" ? 2 : 1
    }

    function rR(RR, JR, GR) {
      return 2 === GR ? 4 : RR[JR] <= "\x7f" ? 1 : RR[JR] <= "\u07ff" ? 2 : 3
    }

    function eR(RR, JR, GR) {
      let yR = 0;
      for (; yR < JR;) {
        const JR = wR(RR, yR),
          tR = rR(RR, yR, JR);
        if (tR > GR) break;
        GR -= tR, yR += JR
      }
      return yR
    }

    function aR(RR) {
      let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1 / 0;
      if ("string" !== typeof RR || RR.length > fR || !KR(RR)) return "t";
      let GR = 2;
      for (let qR = 0; qR < RR.length;) {
        const JR = wR(RR, qR);
        GR += rR(RR, qR, JR), qR += JR
      }
      if (GR <= JR) return `t ${RR}`;
      const yR = VR(RR),
        tR = JR - 2 - (RR.length - yR);
      if (tR < 0) return "t";
      const uR = eR(RR, yR, tR);
      let ZR = "t ";
      for (let qR = 0; qR < uR; qR++) ZR += RR[qR];
      for (let qR = yR; qR < RR.length; qR++) ZR += RR[qR];
      return ZR
    }
    const LR = 62;

    function nR(RR) {
      let JR = "so:";
      const GR = eR(RR, RR.length, LR - JR.length);
      for (let yR = 0; yR < GR; yR++) JR += RR[yR];
      return JR
    }
    const UR = "BABYLON ",
      WR = "DECODE ",
      AR = "BABYLON@ ";

    function CR(RR) {
      return nR(UR + RR)
    }

    function XR(RR, JR) {
      return nR(AR + RR + " " + JR)
    }

    function MR(RR) {
      return nR(WR + RR)
    }
  },
  42411: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => yR
    });
    const yR = {
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
  39956: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => uR
    });
    var yR = GR(2448);
    const tR = ["none", "idle", "now"];

    function uR() {
      const RR = () => (0, yR.w)();
      return {
        memoryBytes: () => (0, yR.m)().buffer.byteLength,
        reserveUpFront: JR => RR().IK(JR),
        reserveAhead: JR => RR().PK(JR),
        setCeiling: JR => {
          RR().mK(JR)
        },
        lowWater: () => tR[RR().cK()] ?? "none",
        stats: () => function(RR) {
          const JR = new Uint32Array((0, yR.m)().buffer, RR, 17),
            GR = RR => JR[RR] ?? 0,
            tR = RR => ({
              upFront: GR(RR),
              ahead: GR(RR + 1),
              onDemandInFrame: GR(RR + 2),
              onDemand: GR(RR + 3)
            });
          return {
            memoryBytes: GR(0),
            initialBytes: GR(1),
            liveBytes: GR(2),
            peakLiveBytes: GR(3),
            headroomBytes: GR(4),
            unusedBytes: GR(5),
            ceilingBytes: GR(6),
            reservesRefused: GR(7),
            grows: tR(8),
            grownBytes: tR(12),
            allocationsRefused: GR(16)
          }
        }(RR().zK()),
        takeBallast: () => RR().SK(),
        takePressure: () => RR().jK()
      }
    }
  },
  6084: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => qR,
      e: () => ZR,
      f: () => yR,
      j: () => aR,
      l: () => KR,
      o: () => tR,
      r: () => uR,
      t: () => fR,
      x: () => VR,
      z: () => wR
    });
    const yR = 5;

    function tR(RR) {
      return RR === yR
    }

    function uR(RR) {
      return [...RR.features]
    }
    const ZR = 262144,
      qR = 256,
      iR = 256;

    function fR(RR) {
      if ("object" !== typeof RR || null === RR || Array.isArray(RR)) return "The pack has no files.";
      const JR = [];
      for (const [GR, yR] of Object.entries(RR)) {
        if ("string" !== typeof yR) return `${GR} isn't text.`;
        JR.push({
          path: GR,
          source: yR
        })
      }
      return JR.sort(((RR, JR) => KR(RR.path, JR.path))),
        function(RR) {
          if (0 === RR.length) return "The pack has no .wgsl files.";
          if (RR.length > qR) return `The pack has more than ${qR} .wgsl files.`;
          const JR = new Set;
          for (const {
              path: GR
            }
            of RR) {
            const RR = rR(GR);
            if (null !== RR) return RR;
            if (JR.has(GR)) return `The pack has two files at ${GR}.`;
            JR.add(GR)
          }
          return wR(RR) > ZR ? `The pack's .wgsl files are over ${ZR/1024} KB in total.` : null
        }(JR) ?? JR
    }

    function VR(RR) {
      const JR = {};
      for (const GR of RR) JR[GR.path] = GR.source;
      return JR
    }

    function KR(RR, JR) {
      return RR < JR ? -1 : RR > JR ? 1 : 0
    }

    function wR(RR) {
      const JR = new TextEncoder;
      let GR = 0;
      for (const {
          source: yR
        }
        of RR) GR += JR.encode(yR).byteLength;
      return GR
    }

    function rR(RR) {
      if (!RR.toLowerCase().endsWith(".wgsl")) return `${RR} isn't a .wgsl file.`;
      if (RR.length > iR) return `A file path is over ${iR} characters.`;
      if (RR.includes("\\") || /[\u0000-\u001f]/.test(RR)) return `${RR} isn't a valid file path.`;
      return RR.split("/").some((RR => "" === RR || "." === RR || ".." === RR)) ? `${RR} isn't a valid file path.` : null
    }
    const eR = /^(.*)\[rot\[([1-4])$/;

    function aR(RR, JR) {
      let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
      const yR = new Map;
      JR.forEach(((RR, JR) => {
        let {
          numAnimStates: GR,
          animStartIdx: tR
        } = RR;
        for (let uR = 1; uR < GR; uR++) yR.set(tR + uR - 1, JR)
      }));
      const tR = Object.entries(RR),
        uR = new Map;
      for (const [aR, LR] of tR) {
        const RR = eR.exec(aR);
        "1" === RR?.[2] && uR.set(RR[1], LR + 1)
      }
      const ZR = RR => {
          const JR = eR.exec(RR);
          return JR && uR.has(JR[1]) ? {
            root: JR[1],
            rotation: Number(JR[2]) - 1
          } : null
        },
        qR = new Set(tR.map((RR => {
          let [JR] = RR;
          return ZR(JR)?.root ?? JR
        }))),
        iR = (RR, GR) => {
          const yR = RR.replace(/_?0$/, "");
          return (JR[GR]?.numAnimStates ?? 0) > 1 && !qR.has(yR) ? yR : RR
        },
        fR = new Map;
      for (const [eR, aR] of tR) fR.set(aR, iR(ZR(eR)?.root ?? eR, aR));
      const VR = tR.reduce(((RR, JR) => {
          let [, GR] = JR;
          return Math.max(RR, GR + 1)
        }), 0),
        KR = Array.from({
          length: VR
        }, ((RR, JR) => ({
          id: JR + 1,
          rotation: 0
        }))),
        wR = new Map,
        rR = new Map;
      for (const [eR, aR] of tR) {
        const RR = ZR(eR),
          JR = yR.get(aR);
        if (void 0 !== JR) {
          const GR = fR.get(JR);
          rR.set(eR, {
            name: eR,
            texture: GR,
            kind: "frame"
          }), RR && !rR.has(RR.root) && rR.set(RR.root, {
            name: RR.root,
            texture: GR,
            kind: "frame"
          });
          continue
        }
        const GR = fR.get(aR),
          tR = RR?.root ?? eR;
        if (GR !== tR && rR.set(tR, {
            name: tR,
            texture: GR,
            kind: "frame"
          }), RR) {
          const JR = uR.get(RR.root);
          KR[aR] = {
            id: JR,
            rotation: RR.rotation
          }, wR.set(GR, JR), rR.set(eR, {
            name: eR,
            texture: GR,
            kind: "rotation"
          })
        } else wR.set(GR, aR + 1)
      }
      for (const eR of wR.keys()) rR.delete(eR);
      for (const [eR, aR] of GR) {
        const RR = wR.get(aR);
        void 0 === RR || wR.has(eR) || (wR.set(eR, RR), rR.delete(eR))
      }
      return {
        named: [...wR].sort(((RR, JR) => {
          let [GR] = RR, [yR] = JR;
          return GR < yR ? -1 : GR > yR ? 1 : 0
        })).map((RR => {
          let [JR, GR] = RR;
          return {
            name: JR,
            id: GR
          }
        })),
        aliases: [...rR.values()],
        layers: KR
      }
    }
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);