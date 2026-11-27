export const id = 75;
export const ids = [75, 130, 131, 152];
export const modules = {
  40527: (ee, ie, He) => {
    He.d(ie, {
      c: () => ye,
      d: () => be
    });
    const ye = "The world isn't loaded, so no blocks can be seen.",
      be = "The world isn't loaded, so nothing in it can be seen."
  },
  5144: (ee, ie, He) => {
    He.d(ie, {
      e: () => oe
    });
    var ye = He(18),
      be = He(27),
      Me = He(1246),
      Ke = He(3037);
    const Ue = 3e4,
      Fe = 1e3;

    function Je() {
      return "visible" === document.visibilityState && "inGame" === ye.e.get("gameState") && (0, Me.x)()
    }

    function oe(ee, ie) {
      (0, Ke.r)() || function(ee, ie, He) {
        let ye = 0;
        const be = setInterval((() => {
          ie() && (ye += Fe, ye >= ee && (clearInterval(be), He()))
        }), Fe)
      }(Ue, Je, (() => {
        ie().then((() => {
          ee(`saved for the player after ${Ue/1e3} s of play`), (0, Ke.B)(), be.h.yR("chat", {
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
  34730: (ee, ie, He) => {
    function ye(ee, ie) {
      return 0 === ee.length ? 0 : ee[Math.min(ee.length - 1, Math.floor(ie * ee.length))]
    }

    function be(ee) {
      return ee.toFixed(1)
    }
    He.d(ie, {
      d: () => be,
      e: () => ye
    })
  },
  38779: (ee, ie, He) => {
    He.d(ie, {
      c: () => Je,
      d: () => oe,
      h: () => Ee,
      l: () => Be,
      p: () => ze
    });
    var ye = He(5144),
      be = He(34730),
      Me = He(3037);
    const Ke = 20,
      Ue = ["totalMs", "slotMs", "workerMs", "applyMs", "ahead", "inFlight", "bk", "jobMs"];

    function Fe(ee) {
      return [...ee].sort(((ee, ie) => ee - ie))
    }
    const Je = [];

    function oe(ee, ie, He) {
      return `${ee},${ie},${He}`
    }
    class Re {
      constructor() {
        this.pending = new Map, this.jobs = new Map, this.edits = [], this.nextEdit = 0, this.reported = 0, this.windowStart = performance.now(), this.frames = 0, this.lastFrameAt = 0, this.maxFrameMs = 0, this.jobsSent = 0, this.maxAhead = 0, this.maxCapacity = 0, this.roundTrips = [], this.windowEdits = [], this.outliers = 0, this.gaveUp = 0
      }
      edit(ee, ie) {
        var He;
        const ye = null !== (He = this.pending.get(ee)) && void 0 !== He ? He : [];
        ye.push({
          editAt: ie,
          meshJobId: 0
        }), this.pending.set(ee, ye)
      }
      frame(ee) {
        this.lastFrameAt > 0 && (this.maxFrameMs = Math.max(this.maxFrameMs, ee - this.lastFrameAt)), this.lastFrameAt = ee, this.frames++, ee - this.windowStart >= 1e3 && this.summarise(ee)
      }
      sent(ee, ie, He, ye, be, Me, Ke) {
        this.jobs.set(ie, {
          sentAt: Ke,
          receivedAt: 0,
          ahead: He,
          inFlight: ye,
          bk: be,
          jobMs: 0
        }), this.jobsSent++, this.maxAhead = Math.max(this.maxAhead, He), this.maxCapacity = Math.max(this.maxCapacity, be);
        for (const Fe of null !== (Ue = this.pending.get(ee)) && void 0 !== Ue ? Ue : []) {
          var Ue;
          Me.includes(Fe.meshJobId) || (Fe.meshJobId = ie)
        }
      }
      received(ee, ie, He) {
        const ye = this.jobs.get(ee);
        void 0 !== ye && (this.roundTrips.push(He - ye.sentAt), ye.receivedAt = He, ye.jobMs = ie)
      }
      failed(ee) {
        this.jobs.delete(ee)
      }
      reassign(ee, ie, He) {
        this.jobs.delete(ie);
        for (const be of null !== (ye = this.pending.get(ee)) && void 0 !== ye ? ye : []) {
          var ye;
          be.meshJobId === ie && (be.meshJobId = He)
        }
      }
      applied(ee, ie, He) {
        const ye = this.jobs.get(ie);
        this.jobs.delete(ie), void 0 !== ye && this.show(ee, ye, He, (ee => ee.meshJobId === ie))
      }
      emptied(ee, ie) {
        const He = {
          sentAt: ie,
          receivedAt: ie,
          ahead: 0,
          inFlight: 0,
          bk: 0,
          jobMs: 0
        };
        this.show(ee, He, ie, (() => !0))
      }
      show(ee, ie, He, ye) {
        const be = this.pending.get(ee);
        if (!be) return;
        const Me = be.filter((be => !ye(be) || (this.record(ee, be.editAt, ie, He), !1)));
        Me.length > 0 ? this.pending.set(ee, Me) : this.pending.delete(ee)
      }
      RR(ee) {
        this.reported += ee, this === qe && this.reported >= Ke && null !== fe && (fe(), fe = null)
      }
      record(ee, ie, He, ye) {
        const be = {
          totalMs: ye - ie,
          slotMs: He.sentAt - ie,
          workerMs: He.receivedAt - He.sentAt,
          applyMs: ye - He.receivedAt,
          ahead: He.ahead,
          inFlight: He.inFlight,
          bk: He.bk,
          jobMs: He.jobMs
        };
        if (this.edits[this.nextEdit] = be, this.nextEdit = (this.nextEdit + 1) % 500, this.windowEdits.push(be.totalMs), this.RR(1), be.totalMs < 100 || ++this.outliers > 5) return;
        const Ke = ee => Math.round(ee);
        (0, Me.m)("remesh", `slow edit (${ee}) shown in ${Ke(be.totalMs)} ms: slot ${Ke(be.slotMs)}, worker ${Ke(be.workerMs)} (${be.ahead} ahead, ${be.inFlight}/${be.bk} in flight; job ${Ke(be.jobMs)}), apply ${Ke(be.applyMs)}`)
      }
      summarise(ee) {
        const ie = (ee - this.windowStart) / 1e3;
        for (const [He, ye] of this.pending) {
          const ie = ye.filter((ie => ee - ie.editAt <= 1e4));
          this.gaveUp += ye.length - ie.length, this.RR(ye.length - ie.length), ie.length > 0 ? this.pending.set(He, ie) : this.pending.delete(He)
        }
        for (const [He, ye] of this.jobs) ee - ye.sentAt > (ye.receivedAt > 0 ? 1e4 : 6e4) && this.jobs.delete(He);
        if (this.jobsSent > 0 || this.roundTrips.length > 0 || this.windowEdits.length > 0 || this.gaveUp > 0) {
          const ee = Fe(this.roundTrips),
            He = Fe(this.windowEdits),
            ye = Math.max(0, this.outliers - 5);
          (0, Me.m)("remesh", `${Math.round(this.frames/ie)} fps (longest ${Math.round(this.maxFrameMs)} ms) | ${this.jobsSent} jobs sent, up to ${this.maxAhead} ahead on a worker, capacity ${this.maxCapacity} | round trip p50 ${Math.round((0,be.e)(ee,.5))} max ${Math.round((0,be.e)(ee,1))} ms | ${He.length} edits shown, p50 ${Math.round((0,be.e)(He,.5))} max ${Math.round((0,be.e)(He,1))} ms${ye>0?`, ${ye} more slow`:""}${this.gaveUp>0?`, ${this.gaveUp} never shown`:""}`)
        }
        this.windowStart = ee, this.frames = 0, this.maxFrameMs = 0, this.jobsSent = 0, this.maxAhead = 0, this.maxCapacity = 0, this.roundTrips = [], this.windowEdits = [], this.outliers = 0, this.gaveUp = 0
      }
      stats() {
        const ee = Ue.map((ee => {
          const ie = Fe(this.edits.map((ie => ie[ee])));
          return `${ee}: p50 ${Math.round((0,be.e)(ie,.5))} p90 ${Math.round((0,be.e)(ie,.9))} max ${Math.round((0,be.e)(ie,1))}`
        }));
        return [`${this.edits.length} edits`, ...ee].join("\n")
      }
      dump() {
        const ee = this.edits.map((ee => Ue.map((ie => Math.round(10 * ee[ie]) / 10)).join(",")));
        return [this.stats(), Ue.join(","), ...ee].join("\n")
      }
    }
    class ke {
      constructor(ee, ie) {
        this.log = ee, this.uk = ie
      }
      edit(ee, ie, He) {
        const [ye, be, Me] = this.uk.xR.ube(ee, ie, He), Ke = this.uk.xR.aT.cT(ye, be, Me);
        Ke && Ke.YT && this.log.edit(oe(ye, be, Me), performance.now())
      }
      sent(ee, ie, He, ye, be) {
        this.log.sent(oe(ee.i, ee.j, ee.k), ie, He, ye, be, Je, performance.now())
      }
      received(ee) {
        this.log.received(ee.meshJobId, ee.jobMs, performance.now())
      }
      failed(ee) {
        this.log.failed(ee)
      }
      applied(ee, ie) {
        this.log.applied(oe(ee.i, ee.j, ee.k), ie, performance.now())
      }
    }
    let qe = null,
      fe = null,
      Te = !1,
      pe = null;

    function Xe() {
      return new Promise((ee => {
        null !== qe && qe.reported >= Ke ? ee() : fe = ee
      }))
    }

    function ze() {
      const ee = new Re;
      return qe = ee, (0, Me.i)("remesh", (() => ee.dump())), (0, Me.c)("remeshStats", (() => {
        console.log(ee.stats())
      })), Te || (Te = !0, (0, ye.e)((ee => {
        (0, Me.m)("remesh", ee)
      }), Xe)), ee
    }

    function Be(ee) {
      const ie = ze();
      pe = new ke(ie, ee), ee.iW.meshProbe = pe, ee.on("beforeRender", (() => {
        ie.frame(performance.now())
      }))
    }

    function Ee(ee, ie, He) {
      var ye;
      null === (ye = pe) || void 0 === ye || ye.edit(ee, ie, He)
    }
  },
  34754: (ee, ie, He) => {
    He.d(ie, {
      d: () => ye
    });
    const ye = new Set(["chunkBorders"])
  },
  37629: (ee, ie, He) => {
    He.d(ie, {
      b: () => be,
      d: () => ye
    });
    const ye = 3,
      be = {
        recording: !1,
        clipping: !1,
        hasClipBuffer: !1,
        seconds: 0
      }
  },
  34927: (ee, ie, He) => {
    He.d(ie, {
      b: () => Ke,
      d: () => be,
      h: () => oe
    });
    var ye = He(1557);

    function be(ee) {
      var ie;
      return {
        ...Ke.store,
        yaw: Ke.store.yaw + (null !== (ie = ye.b[ee].previewYaw) && void 0 !== ie ? ie : 0)
      }
    }
    const Me = {
        yaw: .61 * Math.PI,
        pitch: Math.PI / 2.05,
        radius: 30,
        target: [0, 0, 0]
      },
      Ke = {
        player: Me,
        store: {
          ...Me,
          radius: 33,
          target: [0, 3.9, 0]
        }
      };

    function Ue(ee, ie) {
      ee instanceof Promise ? ee.then(ie).catch((ee => {
        console.error("Couldn't open the preview", ee)
      })) : ie(ee)
    }
    class Fe {
      constructor(ee) {
        this.opened = null, this.view = null, this.size = null, this.closed = !1, Ue(ee, (ee => {
          this.closed ? ee.close() : (this.opened = ee, null !== this.size && ee.resize(this.size.width, this.size.height), null !== this.view && ee.show(this.view))
        }))
      }
      show(ee) {
        var ie;
        this.view = ee, null === (ie = this.opened) || void 0 === ie || ie.show(ee)
      }
      resize(ee, ie) {
        var He;
        this.size = {
          width: ee,
          height: ie
        }, null === (He = this.opened) || void 0 === He || He.resize(ee, ie)
      }
      close() {
        var ee;
        this.closed = !0, null === (ee = this.opened) || void 0 === ee || ee.close(), this.opened = null
      }
    }
    class Je {
      constructor(ee) {
        this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(ee).then((ee => ee.ready)), Ue(ee, (ee => {
          this.closed ? ee.close() : (this.opened = ee, null !== this.size && ee.resize(this.size.width, this.size.height))
        }))
      }
      get dev() {
        return this.opened.dev
      }
      isReady() {
        var ee, ie;
        return null !== (ee = null === (ie = this.opened) || void 0 === ie ? void 0 : ie.isReady()) && void 0 !== ee && ee
      }
      setCosmetic(ee, ie) {
        var He;
        null === (He = this.opened) || void 0 === He || He.setCosmetic(ee, ie)
      }
      playEmote(ee) {
        var ie;
        null === (ie = this.opened) || void 0 === ie || ie.playEmote(ee)
      }
      setOrbit(ee) {
        var ie;
        null === (ie = this.opened) || void 0 === ie || ie.setOrbit(ee)
      }
      resetCamera() {
        var ee;
        null === (ee = this.opened) || void 0 === ee || ee.resetCamera()
      }
      async untilDrawn(ee) {
        var ie;
        await this.ready, await (null === (ie = this.opened) || void 0 === ie ? void 0 : ie.untilDrawn(ee))
      }
      resize(ee, ie) {
        var He;
        this.size = {
          width: ee,
          height: ie
        }, null === (He = this.opened) || void 0 === He || He.resize(ee, ie)
      }
      close() {
        var ee;
        this.closed = !0, null === (ee = this.opened) || void 0 === ee || ee.close(), this.opened = null
      }
    }
    const oe = new class {
      constructor() {
        this.host = null, this.makeDefault = null
      }
      setHost(ee) {
        this.host = ee
      }
      setDefaultHost(ee) {
        this.makeDefault = ee
      }
      current() {
        if (null === this.host) {
          if (null === this.makeDefault) throw new Error("no preview host");
          this.host = this.makeDefault()
        }
        return this.host
      }
      openMob(ee) {
        return new Fe(this.current().openMob(ee))
      }
      openPet(ee) {
        return new Fe(this.current().openPet(ee))
      }
      openMobLineup(ee) {
        return new Fe(this.current().openMobLineup(ee))
      }
      openCharacter(ee, ie) {
        return new Je(this.current().openCharacter(ee, ie))
      }
    }
  },
  5563: (ee, ie, He) => {
    He.d(ie, {
      c: () => ye.e,
      g: () => be,
      h: () => ye.m
    });
    var ye = He(5570);
    const be = [!1, !0].flatMap((ee => ["terrain", "liquid", "model"].map((ie => ({
      strict: ee,
      program: ie
    })))))
  },
  40056: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      ShaderPackPage: () => Fe,
      harnessShaderPackMode: () => ke,
      setHarnessUrlShaderPack: () => Re,
      shaderPackPage: () => oe
    });
    var ye = He(97),
      be = He(35),
      Me = (He(3811), He(5563), He(3808)),
      Ke = He(7296);
    He(7262);
    const Ue = {
      status: "none"
    };
    class Fe {
      constructor() {
        this.stored = null, this.compiling = null, this.pagePack = null, this.resolved = null
      }
      preload() {
        if (null === this.stored) {
          if ((0, Me.j)(ye.featureFlags.settings.canUseShaderPacks)) return this.stored = Promise.resolve(null), Je().then((ee => {
            ee && be.i.removeItem(Me.b)
          })), this.stored;
          this.prefetchHint() && this.compiler().catch((() => {})), this.stored = this.readStored()
        }
        return this.stored
      }
      prefetchHint() {
        return (0, Me.f)(ye.featureFlags.settings.canUseShaderPacks)
      }
      async loadActive() {
        const ee = await this.load();
        return "active" === ee.status ? ee.pack : null
      }
      load() {
        return this.pagePack ??= this.read().catch((ee => (console.error("Failed to load the shader pack", ee), Ue))).then((ee => (this.resolved ??= ee, ee))), this.pagePack
      }
      hasNone() {
        var ee;
        return "none" === (null === (ee = this.resolved) || void 0 === ee ? void 0 : ee.status)
      }
      block(ee) {
        this.resolved = {
          status: "blocked",
          messageKey: ee,
          variants: null
        }, this.pagePack = Promise.resolve(this.resolved)
      }
      compiler() {
        return this.compiling ??= Promise.all([He.e(89), He.e(149), He.e(156)]).then((() => He(44931))).then((ee => (ee.prefetchCompiler(), ee))), this.compiling
      }
      async readStored() {
        const ee = await Je();
        return ee && this.compiler().then((ee => ee.reconcileHint())).catch((ee => {
          console.error("Failed to correct the shader pack hint", ee)
        })), ee
      }
      async read() {
        const ee = await this.preload();
        return ee ? (await this.compiler()).compilePagePack(ee) : Ue
      }
    }
    async function Je() {
      if (!(0, Me.k)(ye.featureFlags.settings.canUseShaderPacks)) return null;
      try {
        const ee = await (0, Ke.h)(!0);
        return ee || be.i.setItem(Me.b, !1), ee
      } catch (ee) {
        return console.error("Failed to read the stored shader pack", ee), be.i.removeItem(Me.b), null
      }
    }
    const oe = new Fe;

    function Re(ee, ie) {}

    function ke() {
      return null
    }
  },
  40103: (ee, ie, He) => {
    He.d(ie, {
      e: () => Re,
      i: () => ke
    });
    var ye = He(153),
      be = He(182),
      Me = He(1479),
      Ke = He(1814),
      Ue = He(1490),
      Fe = He(37260),
      Je = He(660),
      oe = He(40056);

    function Re(ee) {
      (0, Ke.reportClientError)("matchmake_failed", ee, ye.k[ye.k.SHADER_PACK])
    }
    async function ke(ee, ie) {
      var He;
      const ye = null === (He = await oe.shaderPackPage.preload()) || void 0 === He ? void 0 : He.listing,
        Ke = (0, Fe.b)();
      ye && null !== Ke && await Ue.b.reportShaderPackSession(ee, {
        packId: ye.packId,
        sourceHash: ye.sourceHash,
        game: (0, Me.e)(ie, be.C, "other"),
        playSessionId: Ke,
        visitSessionId: (0, Je.getVisitSessionId)()
      })
    }
  },
  7296: (ee, ie, He) => {
    He.d(ie, {
      e: () => be,
      h: () => Me
    });
    var ye = He(35);
    const be = "shaderPack";
    async function Me() {
      var ee;
      let ie = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (ee = await ye.e.getItem(be, ie)) && void 0 !== ee ? ee : null
    }
  },
  7262: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      loadShaderPackTextures: () => Ke,
      shaderPackTextures: () => Ue
    });
    var ye = He(5570);
    let be = null,
      Me = null;

    function Ke() {
      return Me ??= Promise.all([He.e(84), He.e(206)]).then((() => He(41616))).then((ee => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: ie,
          textureNameToIndex: He,
          textureAnimationData: Me
        } = ee;
        return be ??= (0, ye.h)(He, Me, ie), be
      })), Me
    }

    function Ue() {
      if (null === be) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return be
    }
  },
  39832: (ee, ie, He) => {
    He.d(ie, {
      b: () => Ue
    });
    var ye = He(27),
      be = He(1246),
      Me = He(3228);
    const Ke = "Reconnecting";
    class Ue {
      constructor(ee) {
        this.hooks = ee, this.graceMs = 0, this.sessionBased = !1, this.controller = void 0, this.frozen = !1, this.stopped = !1, this.listening = !1, this.ended = !1, this.retryNow = () => {
          "visible" === document.visibilityState && this.controller.retryNow()
        }, this.onPageHide = ee => {
          ee.persisted || this.leave()
        }, this.controller = new Me.c((ie => ee.reconnect(ie)), {
          isSessionLive: () => !this.ended && ee.isLive(),
          onPhaseChanged: ee => {
            this.onPhaseChanged(ee)
          },
          onReconnected: ie => {
            ee.onReconnected(ie)
          },
          onGaveUp: ie => {
            !this.ended && ee.isLive() && ee.onGaveUp(this.sessionBased, ie)
          }
        })
      }
      onInitialInfo(ee, ie) {
        this.graceMs = ee, this.sessionBased = ie
      }
      canHoldSeat() {
        return this.graceMs > 0 && !this.ended
      }
      isResuming() {
        return "connected" !== this.controller.phase
      }
      onConnectionLost(ee) {
        this.ended || this.controller.onConnectionLost(ee, this.graceMs)
      }
      onResuming() {
        this.ended || this.controller.onResuming()
      }
      onResumed() {
        this.controller.stop()
      }
      leave() {
        const ee = this.isResuming() && !this.controller.awaitingResumeOnRoom,
          ie = this.controller.heldToken;
        this.end(), ee && "" !== ie && this.hooks.releaseSeat(ie)
      }
      end() {
        this.ended = !0, this.controller.stop()
      }
      onPhaseChanged(ee) {
        const ie = (0, Me.s)(ee);
        ie !== this.stopped && (this.stopped = ie, this.hooks.freeze(ie));
        const He = "frozen" === ee || "resuming" === ee && this.frozen;
        He && !this.frozen ? (0, be.w)(Ke, {
          overridesPause: !0
        }) : !He && this.frozen && (0, be.v)(Ke), this.frozen = He, this.setListening("connected" !== ee), ye.h.yR(Me.o, He ? "frozen" : ee)
      }
      setListening(ee) {
        ee !== this.listening && (this.listening = ee, ee ? (window.addEventListener("online", this.retryNow), document.addEventListener("visibilitychange", this.retryNow), window.addEventListener("pagehide", this.onPageHide)) : (window.removeEventListener("online", this.retryNow), document.removeEventListener("visibilitychange", this.retryNow), window.removeEventListener("pagehide", this.onPageHide)))
      }
    }
  },
  39834: (ee, ie, He) => {
    He.d(ie, {
      d: () => ye
    });
    class ye {
      constructor(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.onSilent = ee, this.now = ie, this.lastHeardAt = void 0, this.resumedAt = void 0, this.lastCheckAt = void 0, this.wasVisible = "visible" === document.visibilityState, this.interval = void 0, this.check = () => {
          const ee = this.now(),
            ie = ee - this.lastCheckAt <= 2e3;
          this.lastCheckAt = ee;
          const He = "visible" === document.visibilityState;
          !He || ie && this.wasVisible || (this.resumedAt = ee), this.wasVisible = He, He && ee - this.lastHeardAt > 12e3 && ee - this.resumedAt > 2e3 && this.onSilent()
        }, this.lastHeardAt = ie(), this.resumedAt = this.lastHeardAt, this.lastCheckAt = this.lastHeardAt, this.interval = setInterval(this.check, 1e3), document.addEventListener("visibilitychange", this.check), window.addEventListener("online", this.check)
      }
      heard() {
        this.lastHeardAt = this.now()
      }
      dispose() {
        clearInterval(this.interval), document.removeEventListener("visibilitychange", this.check), window.removeEventListener("online", this.check)
      }
    }
  },
  34807: (ee, ie, He) => {
    He.d(ie, {
      c: () => Me
    });
    var ye = He(1268);

    function be() {
      var ee, ie;
      return null !== (ee = null === (ie = screen.orientation) || void 0 === ie ? void 0 : ie.type) && void 0 !== ee ? ee : innerWidth > innerHeight ? "landscape" : "portrait"
    }
    const Me = new class {
      constructor() {
        this.holding = !1, this.heldOrientation = "", this.releaseTimer = void 0, this.longHoldTimer = void 0, this.resizers = new Set, this.releaseWhenShown = () => {
          document.hidden || (document.removeEventListener("visibilitychange", this.releaseWhenShown), this.release())
        }
      }
      isHeld() {
        return this.holding && be() !== this.heldOrientation && (this.holding = !1), this.holding
      }
      hold() {
        this.heldOrientation = be(), this.holding = !0, clearTimeout(this.releaseTimer), document.removeEventListener("visibilitychange", this.releaseWhenShown), clearTimeout(this.longHoldTimer), this.longHoldTimer = setTimeout((() => {
          this.holding && (0, ye.vT)(new Error("Game view size held for 60 s"))
        }), 6e4)
      }
      release() {
        clearTimeout(this.longHoldTimer), this.releaseTimer = setTimeout((() => {
          if (document.hidden) document.addEventListener("visibilitychange", this.releaseWhenShown);
          else {
            this.holding = !1;
            for (const ee of this.resizers) ee()
          }
        }), 1e3)
      }
      heldSizer(ee) {
        let ie = !1;
        return () => {
          if (ie && this.isHeld()) return null;
          const He = ee();
          return ie ||= null !== He, He
        }
      }
      onRelease(ee) {
        return this.resizers.add(ee), () => {
          this.resizers.delete(ee)
        }
      }
    }
  },
  40099: (ee, ie, He) => {
    He.d(ie, {
      e: () => be
    });
    let ye = !1;
    async function be(ee, ie) {
      if (!ye) {
        ye = !0;
        try {
          const [{
            reloadBloxd: ye
          }, {
            NotificationProvider: be
          }] = await Promise.all([Promise.resolve().then((() => He(1768))), Promise.resolve().then((() => He(1340)))]);
          if (!ee || !0 === await be.showPromptPopup({
              title: "Unsaved changes",
              subtitle: "Exit and lose your unsaved changes?",
              confirmText: "Exit",
              destructive: !0,
              cancelText: "Cancel",
              unlockPointerKey: "replayExitUnsavedChanges"
            }).getResult()) return void ye(ie)
        } catch (be) {
          console.error("Leaving the replay failed", be)
        }
        ye = !1
      }
    }
  },
  39841: (ee, ie, He) => {
    He.d(ie, {
      b: () => Je,
      f: () => oe
    });
    var ye = He(1720),
      be = He(186),
      Me = He(1682),
      Ke = He(1842),
      Ue = He(1141),
      Fe = He(1083);
    async function Je(ee, ie) {
      return function(ee) {
        return "object" === typeof ee && null !== ee && ee.code === be.c.VpnIp.code
      }(ie) && function(ee) {
        return Me.c.supports("appCheck") && ee.isLoggedIn() && !ee.hasTriedAppAttestation()
      }(ee) && await async function(ee) {
        try {
          const {
            token: ie
          } = await (0, Ke.b)(), {
            "3PSIDMCPP": He
          } = await (0, Fe.postJsonWithMetricsCookiesAndJsonResponse)(`${Ue.clientSideServerUrls.indexUrl}/index/app-attestation`, {
            appCheckToken: ie
          }, {
            retries: 0
          }, ee.getMetricsCookies());
          return ee.setAppAttestedAuthJwt(He), !0
        } catch (ie) {
          return ie instanceof ye.d && "failed" === ie.code ? (console.warn("The app couldn't get an App Check token:", ie), ee.markAppAttestationTried()) : console.error("Failed to attest the app:", ie), !1
        }
      }(ee)
    }
    async function oe(ee, ie) {
      try {
        return await ie()
      } catch (He) {
        if (!await Je(ee, He)) throw He
      }
      return ie()
    }
  },
  42065: (ee, ie, He) => {
    He.d(ie, {
      d: () => Ue,
      f: () => Fe
    });
    var ye = He(1790);
    const be = 33177600,
      Me = 3e4;
    let Ke = !1;

    function Ue(ee, ie, He) {
      let ye = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const {
        scale: Ue = 1,
        type: Fe = "image/png",
        quality: Je
      } = ye;
      return ee.tR() ? Ke ? Promise.reject(new Error("A screenshot is already being taken")) : (Ke = !0, new Promise(((ye, oe) => {
        let Re, ke = 2,
          qe = null;
        const fe = () => {
          var ie;
          Ke = !1, null === (ie = qe) || void 0 === ie || ie(), clearTimeout(Re);
          try {
            ee.restoreSize()
          } catch (He) {
            console.error("A screenshot couldn't size the canvas back", He)
          }
        };
        Re = setTimeout((() => {
          fe(), oe(new Error("No frame was drawn to capture"))
        }), Me);
        try {
          const ye = function(ee, ie, He) {
            const ye = Math.max(1, ee),
              Me = Math.max(1, ie),
              Ke = Math.min(1, He / Math.max(ye, Me), Math.sqrt(be / (ye * Me)));
            return {
              width: Math.max(1, Math.floor(ye * Ke)),
              height: Math.max(1, Math.floor(Me * Ke))
            }
          }(ie, He, ee.maxTextureSize);
          ee.resize(ye.width, ye.height, Ue * ye.width / Math.max(1, ie))
        } catch (Te) {
          return fe(), void oe(Te)
        }
        qe = ee.onFrameDrawn((() => {
          if (ke--, ke > 0) return;
          const {
            canvas: ie
          } = ee, He = {
            width: ie.width,
            height: ie.height
          };
          try {
            ie.toBlob((ee => {
              ee ? ye({
                blob: ee,
                ...He
              }) : oe(new Error("The canvas gave no image"))
            }), Fe, Je)
          } catch (Te) {
            oe(Te)
          } finally {
            fe()
          }
        }))
      }))) : Promise.reject(new Error("Screenshots need a game to be running"))
    }
    async function Fe(ee, ie, He) {
      try {
        const be = await Ue(ee, ie, He);
        (0, ye.e)(be.blob, `bloxd-screenshot-${be.width}x${be.height}-${Date.now()}.png`)
      } catch (be) {
        console.error("Error taking screenshot:", be)
      }
    }
  },
  38519: (ee, ie, He) => {
    He.d(ie, {
      d: () => ye
    });
    const ye = {
      noaReady: null,
      chunkRequested: null,
      beforeServerListeners: null,
      wasmNetReady: null
    }
  },
  39837: (ee, ie, He) => {
    He.d(ie, {
      d: () => ke,
      e: () => oe
    });
    var ye = He(186),
      be = He(1862),
      Me = He(1155),
      Ke = He(9669);
    const Ue = [250, 500, 1e3, 2e3, 1250],
      Fe = 406;

    function Je(ee) {
      if ("object" !== typeof ee || null === ee) return !1;
      const {
        code: ie,
        message: He
      } = ee, be = ye.c.duplicateLobbyNameError;
      return (ie === be.code || ie === Fe) && (He === be.text || He === be.text + ye.l)
    }
    async function oe(ee, ie) {
      let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : be.e;
      for (let be = 0;; be++) {
        let Ke;
        (0, Me.r)(ie);
        try {
          return await ee()
        } catch (ye) {
          if (Ke = Ue[be], void 0 === Ke || !Je(ye)) throw ye
        }
        await He(Ke, ie)
      }
    }
    const Re = new Set([ye.c.duplicateLobbyNameError.code, ye.c.lobbyCantBeCreated.code, ye.c.roomDisposedEarlyError.code, ye.c.roomDisposedLateError.code, ye.c.serverRoomLimitReached.code]);

    function ke(ee) {
      if (Je(ee)) return !0;
      const ie = (0, Ke.h)(ee);
      return "number" === typeof ie && Re.has(ie)
    }
  },
  9663: (ee, ie, He) => {
    He.d(ie, {
      b: () => Je,
      c: () => Fe
    });
    var ye = He(347);

    function be(ee) {
      if (!ee.startsWith("{")) return ee;
      let ie;
      try {
        ie = JSON.parse(ee)
      } catch {
        return ee
      }
      return function(ee) {
        if (null === (0, ye.Be)(ee)) return !1;
        const {
          params: ie
        } = ee;
        return void 0 === ie || "object" === typeof ie && null !== ie && Object.values(ie).every((ee => "string" === typeof ee))
      }(ie) ? ie : ee
    }
    var Me = He(1127),
      Ke = He(1196);

    function Ue(ee) {
      return (0, Me.s)(Ke.f.get().getCurrentLanguageCode(), ee.translationKey, ee.params)
    }

    function Fe(ee) {
      const ie = be(ee);
      return "string" === typeof ie ? ie : Ue(ie)
    }

    function Je(ee) {
      const ie = be(ee);
      return "string" === typeof ie ? ie : Ue({
        translationKey: "moderation:kicked",
        params: {
          reason: Ue(ie)
        }
      })
    }
  },
  40001: (ee, ie, He) => {
    He.d(ie, {
      c: () => Ke
    });
    var ye = He(335),
      be = He(125),
      Me = He(35);

    function Ke() {
      Me.i.setItem(ye.Ob, Me.i.getItem(ye.Ob) + 1), (0, be.is99NightsCrazyGamesBundle)() && Me.i.setItem(ye.Nb, Me.i.getItem(ye.Nb) + 1)
    }
  },
  37252: (ee, ie, He) => {
    He.d(ie, {
      e: () => ge,
      f: () => Oe
    });
    var ye = He(1033),
      be = He(198),
      Me = He(345),
      Ke = He(618),
      Ue = He(347),
      Fe = He(1036),
      Je = He(645),
      oe = He(677),
      Re = He(4908),
      ke = He(97),
      qe = He(125),
      fe = He(1768),
      Te = He(107),
      pe = He(37260),
      Xe = He(35),
      ze = He(660),
      Be = He(627),
      Ee = He(37266);

    function ge() {
      var ee, ie;
      return [...null !== (ee = navigator.languages) && void 0 !== ee ? ee : [null !== (ie = navigator.language) && void 0 !== ie ? ie : "none"], "En-GB"]
    }

    function Oe(ee, ie, He, Oe, de) {
      const We = (0, ye.k)(ie) ? (0, ye.r)(ie) : null,
        te = ee.isLoggedIn() && void 0 !== (0, be.b)(Me.q, qe.siteUsed) ? (0, Be.e)() : null,
        Ze = {
          cookies: (0, fe.getAllCookiesForGameNameWithVariation)(ie),
          isMobile: (0, ke.isMobile)(),
          isUsingCustomGameTexturePack: null !== We && de(We),
          generalCookies: {
            joinDiscord: !!Xe.i.getItem("DiscordPressed"),
            newGo: Re.d,
            ...ee.getMetricsCookies(),
            trafficCode: Oe,
            compliance: ke.compliance
          },
          browserInfo: {
            ua: window.navigator.userAgent,
            name: (0, ke.getBrowserName)(),
            version: (0, ke.getBrowserVersion)(),
            platform: navigator.platform,
            platformType: (0, ke.getPlatformType)(),
            deviceType: (0, Te.b)()
          },
          isLoggedIn: ee.isLoggedIn(),
          lobbyName: He,
          languages: ge(),
          version: Ke.b,
          siteUsed: qe.siteUsed,
          subsiteUsed: qe.subsiteUsed,
          playSessionId: (0, pe.h)(ie),
          visitSessionId: (0, ze.getVisitSessionId)(),
          clientReason: Je.y.reason,
          budgetBasis: (0, Ee.k)(),
          ...null !== oe.o && {
            diagClaim: oe.o.claimId
          },
          ...null !== te && {
            webGpuLoss: te
          }
        };
      return null !== We && (0, Ue.Jc)(We) ? (Ze.lobbyName = (0, ye.g)(We, (0, ye.n)(ie), He), {
        roomName: `classic_${Fe.i}`,
        joinOptions: Ze
      }) : {
        roomName: ie,
        joinOptions: Ze
      }
    }
  },
  39860: (ee, ie, He) => {
    He.d(ie, {
      b: () => qe,
      d: () => ke
    });
    const ye = "ue:",
      be = ["keydown", "keyup", "mousedown", "mouseup", "pointerdown", "pointerup", "touchstart", "touchend"],
      Me = "[A-Za-z0-9]{1,24}",
      Ke = 15,
      Ue = new RegExp(`^${Me}$`);
    new RegExp(`^${ye}(${[...be,"other"].join("|")}):(?:n|k(${Me})|b(0|[1-9][0-9]?)):([01])([01])$`);

    function Fe(ee, ie, He, Me, Fe) {
      const Je = "string" === typeof ee && be.includes(ee) ? ee : "other";
      let oe = "n";
      return "string" === typeof ie ? oe = Ue.test(ie) ? `k${ie}` : "n" : "number" === typeof He && Number.isInteger(He) && He >= 0 && He <= Ke && (oe = `b${He}`), `${ye}${Je}:${oe}:${Me?1:0}${Fe?1:0}`
    }
    var Je = He(1657),
      oe = He(1774);
    let Re = null;

    function ke(ee) {
      const ie = ee instanceof Element && ee !== document.body && ee !== document.documentElement && !(0, Je.n)(ee) && !ee.closest("#root");
      return {
        editable: (0, oe.e)(ee),
        outsideView: ie
      }
    }

    function qe(ee) {
      return Re ??= function(ee) {
        try {
          const {
            editable: ie,
            outsideView: He
          } = ke(ee.target), ye = ee;
          return Fe(ee.type, ye.code, ye.button, ie, He)
        } catch {
          return Fe(null, null, null, !1, !1)
        }
      }(ee), Re
    }
  },
  41759: (ee, ie, He) => {
    He.d(ie, {
      b: () => Fe
    });
    var ye = He(40527),
      be = He(37629);

    function Me(ee) {
      return {
        current: () => ee,
        watch: () => () => {}
      }
    }

    function Ke() {}
    const Ue = Object.freeze([0, 0, 0]),
      Fe = {
        states: {
          health: Me({
            health: null,
            maxHealth: null,
            shield: null,
            maxShield: null
          }),
          inventory: Me({
            player: [],
            chestOrCreative: [],
            chest: null,
            creative: !1,
            selectedSlot: 0,
            freeSlots: 0
          }),
          hotbar: Me({
            items: [],
            ammo: 0,
            selectedSlot: null
          }),
          stationItems: Me({
            enchantable: {},
            salvageable: {}
          }),
          itemInfo: Me({}),
          creativeVisibility: Me({
            publicLobby: !1,
            shownInGame: {}
          }),
          aura: Me(null),
          heldItemAim: Me({
            gun: !1,
            aimable: !1,
            chargeName: null
          }),
          crouching: Me(!1),
          gliderBoostFuel: Me(0),
          flight: Me({
            canFly: !1,
            flying: !1
          }),
          crafting: Me({
            focus: null,
            recipes: [],
            detail: null
          }),
          players: Me({
            ids: [],
            byId: {},
            localId: null
          }),
          lobbyLeaderboardRows: Me({}),
          fullInventory: Me(!1),
          crosshairTarget: Me({
            interactPrompt: null,
            blockText: null,
            neededTool: null
          }),
          localPlayerAlive: Me(!0),
          freeCamera: Me({
            allowed: !1,
            movesFly: !1
          }),
          replay: Me(null),
          replayEdits: Me(null),
          replayRecorder: Me(be.b),
          replayVideoExporting: Me(!1)
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
          selectHotbarSlot: Ke,
          removeInventoryItem: () => !1,
          swapInventorySlots: () => !1,
          moveInventoryItem: () => !1,
          quickMoveInventoryItem: () => null,
          closeChest: Ke,
          setInventoryOpen: Ke,
          changeIronChestPasskey: Ke,
          dragReplayCamera: Ke,
          applyTemporaryThirdPerson: Ke,
          holdEmoteWheel: Ke,
          recordFlyingMiddleText: Ke,
          focusCrafting: Ke,
          craftRecipe: () => ({
            eR: 0,
            RJ: null,
            amountAddedToSlot: 0
          }),
          salvageItem: () => !1,
          enchantItem: Ke,
          setShopOpen: Ke,
          buyShopItem: Ke,
          lobbyManage: Ke,
          sendChatMessage: () => !1,
          ignorePlayer: Ke,
          reportPlayer: Ke,
          reportWorldCodeChat: Ke,
          requestDiscordReportKey: Ke,
          reportLobbyOrGame: Ke,
          playEmote: Ke,
          updateMyCosmetic: Ke,
          writeOnBoard: Ke,
          writeBook: Ke,
          writeNameTag: Ke,
          setCustomLobbyBlock: Ke,
          openIronChest: Ke,
          sendCodeCollab: Ke,
          clickCodeBlock: Ke,
          bindCustomButtonKeys: Ke,
          pressCustomButton: Ke,
          moveReplayFreecam: Ke,
          holdReplayFreecamVertical: Ke,
          respawn: Ke,
          wakeUp: Ke,
          requestLeaderboard: Ke,
          completeTask: Ke,
          setServerCookie: Ke,
          answerUiRequest: Ke,
          chooseRewardedAd: Ke,
          setCameraZoom: Ke,
          setFreeCameraMovesFly: Ke,
          setBlockHighlight: Ke,
          setCrosshairInteractPrompt: Ke,
          setLookSensitivity: Ke,
          replayAction: Ke,
          setReplayPlaying: Ke,
          seekReplay: Ke,
          setReplayCameraMode: Ke,
          syncReplayCameraMode: Ke,
          setReplayCameraKeyframe: Ke,
          moveReplayCameraKeyframe: Ke,
          deleteReplayCameraKeyframes: Ke,
          setReplayPlaybackMark: Ke,
          cropReplay: () => !1,
          holdReplayForShaderPackFailure: Ke,
          exportReplayVideo: Ke,
          toggleRecording: Ke,
          saveClip: Ke,
          setRecorderPrefs: Ke,
          setReplayViewerOpen: Ke
        },
        queries: {
          enchantingOffer: () => ({
            perks: [],
            options: []
          }),
          worldCodeAiChunk: () => ye.c,
          worldCodeAiGameState: () => ye.d
        },
        lookups: {
          localPos: () => Ue,
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
  42058: (ee, ie, He) => {
    He.d(ie, {
      e: () => Ke,
      g: () => Me
    });
    var ye = He(2181),
      be = He(1033);

    function Me(ee, ie) {
      return null !== ee.gameSource && (0, ye.k)(ie, ee.gameSource)
    }

    function Ke(ee, ie) {
      if (null === ee.gameSource || "" === ee.gameSource || null === ie) return !0;
      const He = (0, be.k)(ie) ? (0, be.r)(ie) : null;
      return null !== He && Me(ee, He)
    }
  },
  42037: (ee, ie, He) => {
    He.d(ie, {
      b: () => Ue
    });
    var ye = He(604),
      be = He(42039),
      Me = He(41936);
    async function Ke(ee) {
      const ie = await (0, be.k)({
        Helmet: He(38801),
        Chestplate: He(38804),
        Gauntlets: He(38823),
        Leggings: He(38810),
        Boots: He(38817)
      } [ye.b[ee]]);
      try {
        return (0, Me.q)(ie)
      } finally {
        ie.close()
      }
    }
    const Ue = new class {
      constructor() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ke,
          ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : be.r;
        this.decode = ee, this.register = ie, this.decoded = new Map
      }
      warm() {
        for (let ee = 0; ee < ye.b.length; ee++) this.part(ee).catch((ie => {
          console.warn(`The grayscale armour ${ye.b[ee]} image didn't decode ahead of use`, ie)
        }))
      }
      async load(ee, ie) {
        const {
          width: He,
          height: Me,
          pixels: Ke
        } = await this.part(ee), Ue = new ImageData(function(ee, ie) {
          const He = new Uint8ClampedArray(ee.length);
          for (let ye = 0; ye < ee.length; ye += 4) He[ye] = Math.round(ee[ye] * ie[0] / 255), He[ye + 1] = Math.round(ee[ye + 1] * ie[1] / 255), He[ye + 2] = Math.round(ee[ye + 2] * ie[2] / 255), He[ye + 3] = ee[ye + 3];
          return He
        }(Ke, function(ee) {
          return [ee >>> 16 & 255, ee >>> 8 & 255, 255 & ee]
        }(ie)), He, Me);
        let Fe;
        try {
          Fe = await createImageBitmap(Ue, {
            premultiplyAlpha: "none",
            colorSpaceConversion: "none"
          })
        } catch (Je) {
          throw new be.e("decode", `grayscale armour ${ye.b[ee]}`, {
            cause: Je
          })
        }
        return {
          id: this.register(Fe),
          width: He,
          height: Me
        }
      }
      part(ee) {
        const ie = this.decoded.get(ee);
        if (void 0 !== ie) return ie;
        const He = this.decode(ee).catch((ie => {
          throw this.decoded.delete(ee), ie instanceof be.e ? ie : new be.e("decode", `grayscale armour ${ye.b[ee]}`, {
            cause: ie
          })
        }));
        return this.decoded.set(ee, He), He
      }
    }
  },
  42028: (ee, ie, He) => {
    He.d(ie, {
      c: () => Ke,
      f: () => pe,
      g: () => oe,
      h: () => Re,
      j: () => Te
    });
    var ye = He(41925),
      be = He(42037),
      Me = He(42039);
    const Ke = 396,
      Ue = 1,
      Fe = 2,
      Je = 3,
      oe = {
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
      Re = {
        File: 0,
        Item: 1
      },
      ke = 0,
      qe = 1,
      fe = 2;

    function Te(ee) {
      const ie = (0, ye.r)();
      ie.catch((() => {}));
      let be = null;
      return {
        glbUrl: ee,
        lifeformAtlasUrl: async ee => (await ie).lifeformAtlasUrl(ee),
        armourAtlasUrl: async () => (await He.e(228).then((() => He(34995)))).armourAtlasUrl,
        capeUrl: async ee => (await ie).capeUrl(ee),
        attachmentImageUrl: async ee => (await ie).attachmentImageUrl(ee),
        blockImageUrl: async ee => (await ie).blockImageUrl(ee),
        groupAtlasUrl: async ee => (await ie).groupAtlasUrl(ee),
        particleTextureUrl: async ee => (await ie).particleTextureUrl(ee),
        particleItemUrl: async ee => (be ??= He.e(44).then((() => He(54328))).catch((ee => {
          throw be = null, ee
        })), (await be).particleItemUrl(ee))
      }
    }
    class pe {
      constructor(ee, ie) {
        var He, Ke, Ue, Fe;
        let Je = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        this.sources = ee, this.onFailure = ie, this.loading = new Map, this.glbImages = new Map, this.glbWrittenImages = new Map, this.glbTakenCount = new Map, this.answered = new Map, this.ready = [], this.load = void 0, this.release = void 0, this.fetchFile = void 0, this.greyscaleArmour = void 0, this.xf = !1, this.load = null !== (He = Je.load) && void 0 !== He ? He : (ee, ie) => (0, Me.o)(ee, Je.fetchImage, ie), this.release = null !== (Ke = Je.release) && void 0 !== Ke ? Ke : Me.t, this.fetchFile = null !== (Ue = Je.fetchFile) && void 0 !== Ue ? Ue : ee => (0, ye.k)(ee), this.greyscaleArmour = null !== (Fe = Je.greyscaleArmour) && void 0 !== Fe ? Fe : be.b
      }
      get waiting() {
        return this.ready.length
      }
      get inFlight() {
        return this.loading.size
      }
      glbWritten(ee, ie) {
        this.glbWrittenImages.set(ee, de(ie))
      }
      glbTaken(ee, ie) {
        const He = this.glbWrittenImages.get(ee);
        this.glbWrittenImages.delete(ee), ie && this.setGlbImages(ee, void 0 !== He && He.length > 0 ? He : void 0)
      }
      setGlbImages(ee, ie) {
        var He;
        this.glbTakenCount.set(ee, (null !== (He = this.glbTakenCount.get(ee)) && void 0 !== He ? He : 0) + 1), void 0 === ie ? this.glbImages.delete(ee) : this.glbImages.set(ee, ie);
        const ye = [];
        for (const {
            key: be
          }
          of this.loading.values()) be.kind === oe.Glb && be.word === ee && ye.push(be);
        for (let be = this.ready.length - 1; be >= 0; be--) {
          const {
            key: ie,
            id: He
          } = this.ready[be];
          ie.kind === oe.Glb && ie.word === ee && (this.ready.splice(be, 1), null !== He && (this.answered.delete(He), this.release(He)), ye.push(ie))
        }
        this.loadAgain(ye)
      }
      onEvent(ee) {
        if (this.xf) return;
        const ie = new DataView(ee.buffer, ee.byteOffset, ee.byteLength);
        for (let He = 0; He + 8 <= ee.byteLength; He += 8) {
          const ee = ie.getUint8(He),
            ye = ie.getUint32(He + 4, !0);
          if (ee === Je) {
            this.answered.delete(ye), this.release(ye);
            continue
          }
          const be = {
            kind: ie.getUint8(He + 1),
            index: ie.getUint8(He + 2),
            word: ye
          };
          ee === Ue ? this.want(be) : ee === Fe && this.loading.delete(Xe(be))
        }
      }
      reload(ee, ie) {
        const He = He => ee.includes(He.kind) && (void 0 === ie || ie(He)),
          ye = new Map;
        for (const be of this.answered.values()) He(be) && ye.set(Xe(be), be);
        for (const [be, {
            key: Me
          }] of this.loading) He(Me) && ye.set(be, Me);
        this.loadAgain(ye.values())
      }
      loadAgain(ee) {
        for (const ie of ee) this.loading.delete(Xe(ie)), this.want(ie)
      }
      drain(ee) {
        if (null !== ee)
          for (; this.ready.length > 0;) {
            if (!ee(Ke, 0, this.ready[0].record)) return;
            this.ready.shift()
          }
      }
      dispose() {
        this.xf = !0, this.loading.clear(), this.ready.length = 0;
        for (const ee of this.answered.keys()) this.release(ee);
        this.answered.clear()
      }
      want(ee) {
        const ie = Xe(ee);
        if (this.loading.has(ie)) return;
        const He = {
          key: ee
        };
        this.loading.set(ie, He), this.loadKey(ee).then((ye => {
          this.xf || this.loading.get(ie) !== He ? this.release(ye.id) : (this.loading.delete(ie), this.answered.set(ye.id, ee), this.ready.push({
            record: Be(ee, ke, ye),
            key: ee,
            id: ye.id
          }))
        }), (ye => {
          if (this.xf || this.loading.get(ie) !== He) return;
          this.loading.delete(ie), this.onFailure({
            key: ee,
            error: ye
          });
          const be = ye instanceof Me.e && "decode" === ye.stage ? qe : fe;
          this.ready.push({
            record: Be(ee, be, null),
            key: ee,
            id: null
          })
        }))
      }
      async loadKey(ee) {
        switch (ee.kind) {
          case oe.Glb:
            return this.load(await this.glbImage(ee), "none");
          case oe.LifeformAtlas:
            return this.load(ze(await this.sources.lifeformAtlasUrl(ee.word), ee), "none");
          case oe.ArmourAtlas:
            return this.load(ze(await this.sources.armourAtlasUrl(), ee), "none");
          case oe.Cape:
            return this.load(ze(await this.sources.capeUrl(ee.word), ee), "none");
          case oe.AttachmentImage:
            return this.load(ze(await this.sources.attachmentImageUrl(ee.word), ee), "none");
          case oe.GroupAtlas:
            return this.load(ze(await this.sources.groupAtlasUrl(ee.word), ee), "none");
          case oe.BlockImage:
            return this.load(ze(await this.sources.blockImageUrl(ee.word), ee), "none");
          case oe.Particle: {
            const ie = await (ee.index === Re.Item ? this.sources.particleItemUrl(ee.word) : this.sources.particleTextureUrl(ee.word));
            return this.load(ze(ie, ee), "flipY")
          }
          case oe.GreyscaleArmour:
            return this.greyscaleArmour.load(ee.index, ee.word);
          default:
            throw new Me.e("fetch", `image kind ${ee.kind}`, {
              cause: null
            })
        }
      }
      async glbImage(ee) {
        var ie;
        let He = this.glbImages.get(ee.word);
        if (void 0 === He) {
          const ie = this.glbTakenCount.get(ee.word),
            ye = ze(await this.sources.glbUrl(ee.word), ee);
          try {
            He = de(await this.fetchFile(ye))
          } catch (be) {
            throw new Me.e("fetch", ye, {
              cause: be
            })
          }
          this.glbTakenCount.get(ee.word) === ie && this.glbImages.set(ee.word, He)
        }
        const ye = null === (ie = He) || void 0 === ie ? void 0 : ie[ee.index];
        if (!ye) throw new Me.e("decode", `image ${ee.index} of file ${2147483647&ee.word}`, {
          cause: null
        });
        return ye
      }
    }

    function Xe(ee) {
      let {
        kind: ie,
        index: He,
        word: ye
      } = ee;
      return `${ie}:${He}:${ye}`
    }

    function ze(ee, ie) {
      if (null === ee) throw new Me.e("fetch", `no URL for image ${Xe(ie)}`, {
        cause: null
      });
      return ee
    }

    function Be(ee, ie, He) {
      var ye, be, Me;
      const Ke = new Uint8Array(16),
        Ue = new DataView(Ke.buffer);
      return Ue.setUint8(0, ee.kind), Ue.setUint8(1, ee.index), Ue.setUint8(2, ie), Ue.setUint32(4, ee.word, !0), Ue.setUint32(8, null !== (ye = null === He || void 0 === He ? void 0 : He.id) && void 0 !== ye ? ye : 0, !0), Ue.setUint16(12, Math.min(null !== (be = null === He || void 0 === He ? void 0 : He.width) && void 0 !== be ? be : 0, 65535), !0), Ue.setUint16(14, Math.min(null !== (Me = null === He || void 0 === He ? void 0 : He.height) && void 0 !== Me ? Me : 0, 65535), !0), Ke
    }
    const Ee = 1179937895,
      ge = 1313821514,
      Oe = 5130562;

    function de(ee) {
      var ie;
      const He = new DataView(ee.buffer, ee.byteOffset, ee.byteLength);
      if (ee.byteLength < 20 || He.getUint32(0, !0) !== Ee || He.getUint32(16, !0) !== ge) return [];
      let ye, be = 20 + He.getUint32(12, !0);
      try {
        ye = JSON.parse((new TextDecoder).decode(ee.subarray(20, be)))
      } catch {
        return []
      }
      for (; be + 8 <= ee.byteLength && He.getUint32(be + 4, !0) !== Oe;) be += 8 + He.getUint32(be, !0);
      const Me = null !== (ie = ye.images) && void 0 !== ie ? ie : [];
      if (0 === Me.length || be + 8 > ee.byteLength) return Me.map((() => null));
      const Ke = ee.subarray(be + 8, Math.min(ee.byteLength, be + 8 + He.getUint32(be, !0)));
      return Me.map((ee => {
        var ie, He, be;
        const Me = void 0 === ee.bufferView || null === (ie = ye.bufferViews) || void 0 === ie ? void 0 : ie[ee.bufferView];
        if (!Me || 0 !== (null !== (He = Me.buffer) && void 0 !== He ? He : 0) || void 0 === Me.byteLength) return null;
        const Ue = null !== (be = Me.byteOffset) && void 0 !== be ? be : 0,
          Fe = Ue + Me.byteLength;
        return Fe <= Ke.byteLength ? Ke.slice(Ue, Fe) : null
      }))
    }
  },
  41766: (ee, ie, He) => {
    He.d(ie, {
      c: () => Ke,
      d: () => Me,
      g: () => be
    });
    let ye = null;

    function be(ee) {
      ye = ee
    }

    function Me(ee) {
      ye === ee && (ye = null)
    }

    function Ke() {
      var ee;
      null === (ee = ye) || void 0 === ee || ee()
    }
  },
  37409: (ee, ie, He) => {
    He.d(ie, {
      b: () => oe,
      c: () => ke,
      g: () => Xe,
      j: () => Je
    });
    var ye = He(18),
      be = He(2492),
      Me = He(2495),
      Ke = He(2503),
      Ue = He(2591),
      Fe = He(27);

    function Je(ee, ie) {
      return (!(0, Ke.b)() || 0 === ee && 0 === ie) && (0, Me.y)(be.f.Joystick, 0, ee, ie, 0)
    }
    const oe = {
      Action1: 1,
      Action2: 2,
      Action3: 3,
      Attack: 4,
      Use: 5,
      Interact: 6,
      Boost: 7
    };

    function Re(ee) {
      return ee.classList.contains("TouchKeyHit") && qe() ? null : ee.firstElementChild
    }

    function ke(ee) {
      return ee.classList.contains("TouchKeyHit") && !ee.classList.contains("CanvasZone") ? {
        whole: !qe(),
        keyBox: null
      } : {
        whole: !1,
        keyBox: fe(Re(ee))
      }
    }

    function qe() {
      return document.documentElement.classList.contains(Ue.l)
    }

    function fe(ee) {
      return !(ee instanceof HTMLElement) || ee.offsetWidth <= 0 || ee.offsetHeight <= 0 ? null : {
        width: ee.offsetWidth,
        height: ee.offsetHeight
      }
    }

    function Te(ee, ie) {
      const He = ee => Math.min(65535, Math.round(4 * ee));
      return (He(ee) | He(ie) << 16) >>> 0
    }

    function pe(ee) {
      return {
        x: ee.left + ee.width / 2,
        y: ee.top + ee.height / 2,
        radius: Math.min(ee.width, ee.height) / 2
      }
    }
    const Xe = new class {
      constructor(ee) {
        this.write = ee, this.elements = new Map, this.canvasLeft = 0, this.canvasTop = 0
      }
      set(ee, ie) {
        let He = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        ie ? this.elements.set(ee, {
          element: ie,
          hidden: He
        }) : this.elements.delete(ee), this.measureOne(ee)
      }
      measure() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
          left: this.canvasLeft,
          top: this.canvasTop
        };
        this.canvasLeft = ee.left, this.canvasTop = ee.top;
        for (const ie of this.elements.keys()) this.measureOne(ie)
      }
      hitZone(ee, ie) {
        let He = null,
          ye = 1;
        for (const be of this.elements.keys()) {
          const Me = this.shown(be);
          if (!Me) continue;
          const {
            rect: Ke,
            element: Ue
          } = Me, Fe = pe(Ke), Je = Math.max(0, Ke.width / 2 - Fe.radius), oe = Math.max(0, Ke.height / 2 - Fe.radius), ke = Math.max(0, Math.abs(ee - Fe.x) - Je), qe = Math.max(0, Math.abs(ie - Fe.y) - oe), Te = Ue.firstElementChild;
          let Xe = Math.hypot(ke, qe) / Fe.radius;
          const ze = fe(Re(Ue));
          ze && (Xe = Math.min(Xe, Math.max(2 * Math.abs(ee - Fe.x) / ze.width, 2 * Math.abs(ie - Fe.y) / ze.height))), Xe < ye && (He = {
            code: be,
            element: Ue,
            key: Te,
            ...Fe
          }, ye = Xe)
        }
        return He
      }
      measureOne(ee) {
        const ie = this.shown(ee);
        if (!ie) return void this.write(be.f.TouchZone, ee, 0, 0, 0);
        const {
          rect: He,
          element: ye
        } = ie, Me = pe(He);
        this.write(be.f.TouchZone, ee, Me.x - this.canvasLeft, Me.y - this.canvasTop, Te(He.width, He.height));
        const Ke = fe(Re(ye));
        this.write(be.f.TouchZone, 256 | ee, 0, 0, Ke ? Te(Ke.width, Ke.height) : 0)
      }
      shown(ee) {
        const ie = this.elements.get(ee),
          He = ye.e.get("worldPanelHud");
        if (!ie || ie.hidden || "none" === He) return null;
        const be = ie.element.getBoundingClientRect();
        return be.width <= 0 || be.height <= 0 ? null : {
          rect: be,
          element: ie.element
        }
      }
    }(Me.y);
    (0, Fe.j)(Ue.f, (() => {
      Xe.measure()
    }))
  },
  41814: (ee, ie, He) => {
    He.d(ie, {
      e: () => Fe,
      h: () => Je
    });
    var ye = He(41950),
      be = He(39841),
      Me = He(37252),
      Ke = He(41823),
      Ue = He(41782);
    const Fe = ye.d.timeForPlayerToConnect - 1e4;
    async function Je(ee, ie, He, ye) {
      let Fe;
      try {
        Fe = await ee.getTrafficCode()
      } catch (fe) {
        throw console.error("[bloxd-wasm-client] could not get a traffic code", fe), new Ue.w(fe)
      }
      const {
        gameNameWithVariation: Je,
        lobbyName: oe
      } = ie, Re = () => {
        const ie = (0, Me.f)(ee, Je, oe, Fe, (ee => {
          var ie;
          return null !== (ie = null === He || void 0 === He ? void 0 : He.isUsingCustomGameTexturePack(ee)) && void 0 !== ie && ie
        }));
        ie.joinOptions.wasmClient = !0;
        const be = (0, Ke.C)();
        return null !== be && (ie.joinOptions.renderBackend = be), ie.joinOptions.joinAdHold = ye, ie
      }, {
        roomName: ke,
        joinOptions: qe
      } = Re();
      return {
        endpoint: ie.endpoint,
        roomName: ke,
        joinOptions: qe,
        session: {
          gameNameWithVariation: Je,
          lobbyName: oe,
          playerDbId: ee.whamm
        },
        optionsAfterRefusal: async ie => await (0, be.b)(ee, ie) ? Re().joinOptions : null
      }
    }
  },
  42048: (ee, ie, He) => {
    He.d(ie, {
      d: () => oe,
      h: () => Me,
      j: () => Re,
      n: () => Ke
    });
    var ye = He(42028),
      be = He(41925);
    const Me = new class {
      constructor() {
        this.page = null, this.session = void 0, this.follower = null, this.isWanted = !1, this.listeners = new Set, this.pageListeners = new Set, this.wantedListeners = new Set
      }
      get current() {
        return void 0 === this.session ? this.page : this.session
      }
      setPageFiles(ee) {
        this.change((() => {
          this.page = ee
        }))
      }
      setSessionFiles(ee) {
        const ie = void 0 !== this.session && void 0 === ee;
        if (this.change((() => {
            this.session = ee
          })), ie)
          for (const He of [...this.pageListeners]) He()
      }
      showsPage() {
        return void 0 === this.session
      }
      onPageShown(ee) {
        return this.pageListeners.add(ee), () => {
          this.pageListeners.delete(ee)
        }
      }
      setFollower(ee) {
        this.follower = ee, this.startFollower()
      }
      wanted() {
        this.isWanted = !0;
        for (const ee of [...this.wantedListeners]) ee();
        this.startFollower()
      }
      onWanted(ee) {
        return this.wantedListeners.add(ee), () => {
          this.wantedListeners.delete(ee)
        }
      }
      onChange(ee) {
        return this.listeners.add(ee), () => {
          this.listeners.delete(ee)
        }
      }
      startFollower() {
        const ee = this.follower;
        this.isWanted && null !== ee && (this.follower = null, ee((() => {
          this.follower = ee
        })))
      }
      change(ee) {
        const ie = this.current;
        if (ee(), this.current !== ie)
          for (const He of this.listeners) He()
      }
    };

    function Ke(ee, ie) {
      return {
        ...ee,
        armourAtlasUrl: () => {
          var He, ye;
          return null !== (He = null === (ye = ie()) || void 0 === ye ? void 0 : ye.armourAtlasUrl()) && void 0 !== He ? He : ee.armourAtlasUrl()
        },
        lifeformAtlasUrl: He => Fe(ie(), (ee => ee.LIFEFORM_ATLAS_PATHS[He]), (() => ee.lifeformAtlasUrl(He))),
        groupAtlasUrl: He => Fe(ie(), (ee => ee.GROUP_ATLAS_PATHS[He]), (() => ee.groupAtlasUrl(He))),
        particleItemUrl: ye => Je(ie(), (async () => {
          const ee = await He.e(44).then((() => He(54328))).catch((() => null));
          return (null === ee || void 0 === ee ? void 0 : ee.particleItemSprite(ye)) || null
        }), (() => ee.particleItemUrl(ye))),
        blockImageUrl: He => Je(ie(), (async () => {
          var ee, ie;
          return null !== (ee = null === (ie = await Ue()) || void 0 === ie ? void 0 : ie.blockImageName(He)) && void 0 !== ee ? ee : null
        }), (() => ee.blockImageUrl(He)))
      }
    }

    function Ue() {
      return (0, be.r)().catch((() => null))
    }

    function Fe(ee, ie, He) {
      return Je(ee, (async () => {
        var ee;
        const He = await Ue(),
          ye = null === He ? null : ie(He),
          be = null !== (ee = null === ye || void 0 === ye ? void 0 : ye.slice(ye.lastIndexOf("/") + 1)) && void 0 !== ee ? ee : null;
        return "Player_Atlas" === be ? null : be
      }), He)
    }
    async function Je(ee, ie, He) {
      if (null !== ee) {
        const He = await ie(),
          ye = null === He ? null : ee.textureUrl(He);
        if (null !== ye) return ye
      }
      return He()
    }
    const oe = 0;

    function Re(ee) {
      const ie = [ye.g.ArmourAtlas, ye.g.LifeformAtlas, ye.g.GroupAtlas, ye.g.BlockImage, ye.g.Particle];
      ee.reload(ie, (ee => {
        switch (ee.kind) {
          case ye.g.Particle:
            return ee.index === ye.h.Item;
          case ye.g.LifeformAtlas:
            return ee.word !== oe;
          default:
            return !0
        }
      }))
    }
  },
  41952: (ee, ie, He) => {
    He.d(ie, {
      c: () => ye,
      g: () => Ue,
      j: () => be,
      l: () => Me
    });
    const ye = 1e3;

    function be() {
      Fe((() => {
        window.location.reload()
      }))
    }

    function Me() {
      return new Promise((() => {}))
    }

    function Ke(ee) {
      Fe((() => {
        window.location.replace(ee(window.location.href))
      }))
    }

    function Ue(ee) {
      Promise.resolve().then((() => He(103))).then((ie => {
        let {
          currentUrl: He
        } = ie;
        Ke((() => He.mergeSearchParamsInto(ee)))
      }), (() => {
        Ke((() => ee))
      }))
    }

    function Fe(ee) {
      null !== window.onbeforeunload ? Promise.resolve().then((() => He(1768))).then((ie => {
        let {
          prepareForUnloadWithoutConfirmation: He
        } = ie;
        try {
          He()
        } catch (ye) {
          console.warn("[bloxd-wasm-client] prepareForUnloadWithoutConfirmation threw: leaving plainly", ye), window.onbeforeunload = null
        }
        ee()
      }), (() => {
        window.onbeforeunload = null, ee()
      })) : ee()
    }
  },
  37028: (ee, ie, He) => {
    He.d(ie, {
      e: () => Te,
      g: () => oe,
      h: () => qe,
      l: () => Re,
      o: () => pe,
      q: () => fe,
      u: () => ke
    });
    const ye = 30,
      be = 4;
    let Me = 0,
      Ke = !1,
      Ue = !1,
      Fe = Number.NEGATIVE_INFINITY,
      Je = [];

    function oe() {
      0 === Me && (Ke = !1, Ue = !1), Me++;
      let ee = !1;
      return () => {
        ee || (ee = !0, Me--)
      }
    }

    function Re(ee) {
      ee && (Ue = !0)
    }

    function ke() {
      return Ue
    }

    function qe(ee) {
      Ke = ee
    }

    function fe(ee) {
      return !(Me > 0 && (Ke || ee - Fe < 1e3 / ye - be)) && (Fe = ee, !0)
    }

    function Te(ee) {
      Je.push(ee)
    }

    function pe() {
      if (0 === Je.length) return;
      const ee = Je;
      Je = [];
      for (const He of ee) try {
        He()
      } catch (ie) {
        console.warn("[bloxd-previews] an after-draw callback threw", ie)
      }
    }
  },
  5596: (ee, ie, He) => {
    function ye(ee, ie) {
      return be(ee, ie)
    }

    function be(ee, ie) {
      if (ee === ie) return !0;
      if ("object" !== typeof ee || "object" !== typeof ie || null === ee || null === ie || Array.isArray(ee) !== Array.isArray(ie)) return !1;
      const He = ee,
        ye = ie,
        Me = Object.keys(He);
      return Me.length === Object.keys(ye).length && Me.every((ee => Object.prototype.hasOwnProperty.call(ye, ee) && be(He[ee], ye[ee])))
    }
    He.d(ie, {
      d: () => ye
    })
  },
  41999: (ee, ie, He) => {
    He.d(ie, {
      e: () => Oe,
      f: () => Ee,
      g: () => Te,
      j: () => fe
    });
    var ye = He(1862),
      be = He(1155),
      Me = He(39837),
      Ke = He(37286),
      Ue = He(39854),
      Fe = He(41782);
    const Je = {
        "X-Requested-With": "XMLHtttpRequest"
      },
      oe = 3,
      Re = [500, 1500];

    function ke(ee) {
      const ie = new URL(ee);
      return {
        secure: "https:" === ie.protocol || "wss:" === ie.protocol,
        host: ie.host,
        pathname: ie.pathname.replace(/\/+$/, ""),
        search: ie.searchParams.toString()
      }
    }

    function qe(ee, ie, He) {
      const {
        secure: ye,
        host: be,
        pathname: Me,
        search: Ke
      } = ke(ee);
      return `${ye?"https":"http"}://${be}${Me}/matchmake/${ie}/${encodeURIComponent(He)}${Ke?`?${Ke}`:""}`
    }

    function fe(ee, ie) {
      var He;
      const ye = null !== (He = ie.protocol) && void 0 !== He ? He : "ws";
      if ("ws" !== ye) throw new Error(`seat reservation asks for the ${ye} transport`);
      const {
        secure: be,
        host: Me,
        pathname: Ke,
        search: Ue
      } = ke(ee), Fe = new URLSearchParams(Ue);
      Fe.append("sessionId", ie.sessionId), ie.reconnectionToken && Fe.append("reconnectionToken", ie.reconnectionToken);
      return `${be?"wss":"ws"}://${ie.room.publicAddress||`${Me}${Ke}`}/${ie.room.processId}/${ie.room.roomId}?${Fe.toString()}`
    }
    async function Te(ee, ie, He) {
      var Ue;
      let Je = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const ke = null !== (Ue = Je.sleep) && void 0 !== Ue ? Ue : ye.e,
        fe = new be.d(Je.signal),
        Te = new Ke.c((() => {
          (0, be.j)(fe.controller, new Ke.d("seat"))
        })),
        {
          signal: Be
        } = fe;
      try {
        const ye = await (0, Me.e)((() => async function(ee, ie, He, ye) {
          var Me;
          const {
            signal: Ke,
            sleep: Ue
          } = ye, Je = qe(ee, "joinOrCreate", ie), ke = JSON.stringify(He);
          let fe = null;
          for (let qe = 0; qe < oe; qe++) {
            var Te;
            if (qe > 0) await Ue(null !== (Te = Re[qe - 1]) && void 0 !== Te ? Te : 1500, Ke);
            let ee;
            (0, be.r)(Ke);
            try {
              ee = await Xe(Je, ke, ye)
            } catch (Be) {
              (0, be.r)(Ke), fe = pe(Be);
              continue
            }
            const {
              response: ie,
              answer: He,
              refusal: Me,
              lost: oe
            } = ee;
            if (null === oe) {
              if (null !== Me) throw ze(Me, He);
              if (ie.ok && null !== He && de(He)) return He;
              fe = new Fe.s(`seat request answered HTTP ${ie.status}${null===He?" without JSON":" without a seat"}`, !1, void 0, ie.status)
            } else fe = pe(oe.error)
          }
          throw null !== (Me = fe) && void 0 !== Me ? Me : new Fe.s("seat request made no attempt", !1)
        }(ee, ie, He, {
          ...Je,
          signal: Be,
          sleep: ke
        })), Be, ke);
        return Te.answered(), ye
      } finally {
        Te.stop(), fe.unfollow()
      }
    }

    function pe(ee) {
      return new Fe.s(ee instanceof Error ? ee.message : String(ee), !0, ee)
    }
    async function Xe(ee, ie, He) {
      var ye;
      const {
        signal: Me
      } = He, Ke = null !== (ye = He.fetch) && void 0 !== ye ? ye : fetch, Ue = await Ke(ee, {
        method: "POST",
        headers: {
          ...Je,
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: ie,
        credentials: "include",
        signal: Me
      }), {
        answer: Fe,
        lost: oe
      } = await async function(ee) {
        try {
          const ie = await ee.json();
          return {
            answer: "object" === typeof ie && null !== ie ? ie : null,
            lost: null
          }
        } catch (ie) {
          return {
            answer: null,
            lost: ie instanceof SyntaxError ? null : {
              error: ie
            }
          }
        }
      }(Ue), Re = null !== Fe && "string" === typeof Fe.error ? Fe.error : null;
      var ke;
      null !== Re && (null === (ke = He.onRefusal) || void 0 === ke || ke.call(He));
      return (0, be.r)(Me), {
        response: Ue,
        answer: Fe,
        refusal: Re,
        lost: oe
      }
    }

    function ze(ee, ie) {
      return new Fe.h(ee, "number" === typeof(null === ie || void 0 === ie ? void 0 : ie.code) ? ie.code : 0, (0, Ue.k)(ee).text)
    }
    class Be extends Error {
      constructor(ee, ie) {
        super(ee), this.code = ie, this.name = "SeatHttpError"
      }
    }
    async function Ee(ee, ie, He) {
      let ye = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const {
        response: be,
        answer: Me,
        refusal: Ke,
        lost: Ue
      } = await Xe(qe(ee, "reconnect", ie), JSON.stringify({
        reconnectionToken: He
      }), ye);
      if (null !== Ue) throw Ue.error;
      if (!be.ok) {
        const ee = null !== Me && "number" === typeof Me.code && 0 !== Me.code ? Me.code : be.status;
        throw new Be(`the seat's reconnect was refused: ${null!==Ke&&void 0!==Ke?Ke:`HTTP ${be.status}`}`, ee)
      }
      if (null !== Ke) throw ze(Ke, Me);
      if (null === Me || !de(Me)) throw new Error("the seat's reconnect answered " + (null === Me ? "without JSON" : "without a seat"));
      return {
        ...Me,
        reconnectionToken: He
      }
    }
    const ge = 10;

    function Oe(ee) {
      if (ee.byteLength < 2 || ee[0] !== ge) return null;
      const ie = 2 + ee[1];
      return ie > ee.byteLength ? null : (new TextDecoder).decode(ee.subarray(2, ie))
    }

    function de(ee) {
      const ie = ee.room;
      return "string" === typeof ee.sessionId && "object" === typeof ie && null !== ie && "string" === typeof ie.roomId && "string" === typeof ie.processId && "string" === typeof ie.name
    }
  },
  41712: (ee, ie, He) => {
    He.d(ie, {
      $: () => Xe,
      B: () => de,
      D: () => Pe,
      E: () => Ee,
      F: () => ge,
      I: () => pe,
      J: () => Ze,
      N: () => Ye,
      R: () => fe,
      U: () => ae,
      X: () => ze,
      ab: () => Be,
      db: () => Oe,
      e: () => be,
      g: () => Ve,
      i: () => Ae,
      j: () => qe,
      m: () => Te,
      p: () => De,
      r: () => We,
      v: () => we,
      x: () => te
    });
    var ye = He(3246);
    const be = {
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

    function Me(ee, ie) {
      return !ArrayBuffer.isView(ee) || ee instanceof DataView ? Array.isArray(ee) ? ee.map((ee => ie(ee))) : ee : Array.from(ee, (ee => ie(ee)))
    }

    function Ke(ee) {
      if ("string" !== typeof ee) return ee;
      for (let ie = 0; ie < ee.length; ie++) {
        const He = ee.charCodeAt(ie);
        if (He >= 55296 && He <= 57343) return Fe.decode(Ue.encode(ee))
      }
      return ee
    }
    const Ue = new TextEncoder,
      Fe = new TextDecoder;

    function Je(ee) {
      return ee
    }
    let oe;

    function Re(ee) {
      return null === ee || "object" !== typeof ee ? ee : [Ke(ee.policy), Ke(ee.UF)]
    }

    function ke(ee) {
      return null === ee || "object" !== typeof ee ? ee : [Me(ee.di, Je), Me(ee.SF, Je)]
    }

    function qe(ee) {
      return null === (ie = ee) || "object" !== typeof ie ? ie : [Ke(ie.nF), Ke(ie.jF)];
      var ie
    }

    function fe(ee) {
      return null === (ie = ee) || "object" !== typeof ie ? ie : [ie.id, ie.pJ];
      var ie
    }

    function Te(ee) {
      return null === (ie = ee) || "object" !== typeof ie ? ie : [ie.ue, Ke(ie.Se), ie.ne, Ke(ie.Ie), ie.Qe, ie.ei, ie.zF, Ke(ie.BF), Ke(ie.EF)];
      var ie
    }

    function pe(ee) {
      return null === (ie = ee) || "object" !== typeof ie ? ie : [Me(ie.fo, Je), ie.po];
      var ie
    }

    function Xe(ee) {
      return null === (ie = ee) || "object" !== typeof ie ? ie : [Me(ie.BJ, (ee => Ke(ee))), Ke(ie.EJ), ie.gJ];
      var ie
    }

    function ze(ee) {
      return null === (ie = ee) || "object" !== typeof ie ? ie : [Me(ie.iJ, Je), Ke(ie.HJ), ie.yJ];
      var ie
    }

    function Be(ee) {
      return null === (ie = ee) || "object" !== typeof ie ? ie : [Ke(ie.te), Ke(ie.Ze)];
      var ie
    }

    function Ee(ee) {
      return null === (ie = ee) || "object" !== typeof ie ? ie : [Ke(ie.oo)];
      var ie
    }

    function ge(ee) {
      return Ke(ee)
    }

    function Oe(ee) {
      return null === (ie = ee) || "object" !== typeof ie ? ie : [Ke(ie.mF), Ke(ie.lF), Ke(ie.policy), Ke(ie.UF)];
      var ie
    }

    function de(ee) {
      return Re(ee)
    }

    function We(ee) {
      return Re(ee)
    }

    function te(ee) {
      return null === (ie = ee) || "object" !== typeof ie ? ie : [Ke(ie.Xo)];
      var ie
    }

    function Ze(ee) {
      return ee
    }

    function we(ee) {
      return null === (ie = ee) || "object" !== typeof ie ? ie : [Ke(ie.bJ), Ke(ie.MJ)];
      var ie
    }

    function De(ee) {
      return Ke(ee)
    }

    function Pe(ee) {
      return ke(ee)
    }

    function Ae(ee) {
      return ke(ee)
    }

    function Ye(ee) {
      return null === (ie = ee) || "object" !== typeof ie ? ie : [Ke(ie.XJ)];
      var ie
    }

    function Ve(ee) {
      return (oe ??= (0, ye.f)().map((ee => ee.name)), oe).map((ie => {
        return "string" === typeof(He = ee[ie]) ? Ke(He) : Me(He, Je);
        var He
      }))
    }

    function ae(ee) {
      return null === (ie = ee) || "object" !== typeof ie ? ie : [ie.Ro, ie.ko, ie.qo];
      var ie
    }
  },
  42054: (ee, ie, He) => {
    He.d(ie, {
      e: () => Me
    });
    var ye = He(42058),
      be = He(42048);
    const Me = new class {
      constructor(ee) {
        this.pack = ee, this.game = void 0, this.settle = null, this.hold = null, this.endedWhileHeld = !1, this.gameListeners = new Set, ee.onWanted((() => {
          this.release()
        }))
      }
      setGame(ee) {
        if (void 0 === ee && null !== this.hold) return void(this.endedWhileHeld = !0);
        this.hold = null, this.endedWhileHeld = !1;
        const ie = this.inGame();
        if (this.game = ee, this.update(), this.inGame() !== ie)
          for (const He of this.gameListeners) He()
      }
      inGame() {
        return void 0 !== this.game
      }
      onGameChange(ee) {
        return this.gameListeners.add(ee), () => {
          this.gameListeners.delete(ee)
        }
      }
      unwantedLeave(ee) {
        ee && void 0 !== this.game ? this.hold = {
          game: this.game
        } : this.release()
      }
      rejoinHold() {
        return this.hold
      }
      releaseHold(ee) {
        null !== ee && ee === this.hold && this.release()
      }
      release() {
        if (null === this.hold) return;
        const ee = this.endedWhileHeld;
        this.hold = null, this.endedWhileHeld = !1, ee && this.setGame(void 0)
      }
      setSettled(ee) {
        this.settle = ee, this.update()
      }
      update() {
        void 0 === this.game ? this.pack.setSessionFiles(void 0) : null !== this.settle && (0, ye.e)(this.settle.state, this.game) && this.pack.setSessionFiles(this.settle.files)
      }
    }(be.h)
  },
  5587: (ee, ie, He) => {
    He.d(ie, {
      c: () => Ke,
      g: () => Ue
    });
    var ye = He(2181),
      be = He(5596);
    let Me = null;

    function Ke(ee) {
      Me = {
        pack: ee.metaData.id === ye.b ? null : ee
      }
    }

    function Ue(ee) {
      return !(null === Me || !(0, be.d)(Me.pack, ee)) && (Me = null, !0)
    }
  },
  41771: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      followPageUiPack: () => BR,
      packForGame: () => zR,
      playWasmGame: () => YR,
      prefetchWasmPreviews: () => FJ,
      setGamePackConfirm: () => go,
      startWasmPlay: () => WR,
      startWasmPreviews: () => UJ
    });
    var ye = He(186),
      be = He(1192),
      Me = He(153),
      Ke = He(39867),
      Ue = He(1983),
      Fe = He(27),
      Je = He(5129),
      oe = He(1294),
      Re = He(1728),
      ke = He(1305),
      qe = He(40099),
      fe = He(1260),
      Te = He(182),
      pe = He(3123),
      Xe = He(1857),
      ze = He(3159);
    let Be = null,
      Ee = null,
      ge = null,
      Oe = !1,
      de = "previews",
      We = null,
      te = !1,
      Ze = 0;

    function we(ee) {
      de = ee
    }

    function De(ee) {
      var ie;
      const He = ee instanceof Error ? ee.name : null;
      return null !== (ie = Te.d.find((ee => ee === He))) && void 0 !== ie ? ie : "other"
    }

    function Pe() {
      Be ??= performance.now()
    }

    function Ae(ee) {
      Ee ??= performance.now(), We = ee, Ze > 0 && Ye()
    }

    function Ye() {
      null !== Ee && null !== We && (0, fe.n)("wasm_loaded", Ee, `${We}:${(0,pe.o)()}`)
    }
    const Ve = {
      ready: () => {
        Xe.c.markAdmissionAwaited()
      },
      adEnded: () => {
        Xe.c.markJoinAdEnded()
      },
      admitted: () => {
        Xe.c.markAdmitted()
      }
    };
    var ae = He(40103),
      ce = He(40001),
      xe = He(37260),
      Le = He(1490),
      Ce = He(39837),
      ve = He(9669),
      ue = He(37286),
      me = He(41780),
      le = He(5262),
      Se = He(41704),
      ne = He(41759),
      je = He(41712);
    const se = {
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

    function Ie(ee) {
      const ie = {
        ...ne.b[ee]
      };
      for (const He of Object.keys(se[ee])) delete ie[He];
      return ie
    }

    function he() {
      var ee, ie;
      return null === (ee = null === (ie = (0, Se.h)()) || void 0 === ie ? void 0 : ie.localPlayerAlive()) || void 0 === ee || ee
    }

    function Ne() {
      var ee, ie;
      return null !== (ee = null === (ie = (0, Se.h)()) || void 0 === ie ? void 0 : ie.localDeaths()) && void 0 !== ee ? ee : null
    }
    const Ge = {
        current: he,
        watch: ee => {
          let ie = he(),
            He = Ne();
          return (0, le.w)((() => {
            const ye = he(),
              be = Ne(),
              Me = null !== be && null !== He && be !== He;
            He = be, Me ? (ie || ee(!0), ee(!1), ye && ee(!0), ie = ye) : ye !== ie && (ie = ye, ee(ye))
          }))
        }
      },
      re = {
        states: {
          ...Ie("states"),
          localPlayerAlive: Ge
        },
        events: {
          ...Ie("events"),
          localPlayerAliveSet: {
            watch: Ge.watch
          }
        },
        commands: {
          ...Ie("commands"),
          respawn: () => {
            var ee;
            null === (ee = (0, Se.h)()) || void 0 === ee || ee.respawn()
          },
          playEmote: ee => {
            var ie;
            null === (ie = (0, Se.h)()) || void 0 === ie || ie.send(je.e.PlayEmote, (0, je.E)({
              oo: ee
            }))
          },
          applyTemporaryThirdPerson: ee => {
            var ie;
            let {
              durationMs: He
            } = ee;
            null === (ie = (0, Se.h)()) || void 0 === ie || ie.thirdPersonFor(He)
          },
          bindCustomButtonKeys: ee => {
            var ie;
            null === (ie = (0, Se.h)()) || void 0 === ie || ie.bindCustomButtonKeys(ee)
          },
          pressCustomButton: ee => {
            var ie;
            let {
              id: He,
              down: ye
            } = ee;
            null === (ie = (0, Se.h)()) || void 0 === ie || ie.pressCustomButton(He, ye)
          },
          setLookSensitivity: () => {},
          wakeUp: ee => {
            const ie = (0, je.N)({
                XJ: ee
              }),
              He = () => {
                const ee = (0, Se.h)();
                return !(null !== ee && void 0 !== ee && ee.isSessionLive) || ee.send(je.e.StopSleeping, ie)
              };
            if (!He()) {
              const ee = (0, le.w)((() => {
                He() && ee()
              }))
            }
          },
          setCameraZoom: ee => {
            var ie;
            null === (ie = (0, Se.h)()) || void 0 === ie || ie.setCameraZoom(ee)
          }
        },
        queries: Ie("queries"),
        lookups: {
          ...Ie("lookups"),
          cameraZoom: () => {
            var ee, ie;
            return null !== (ee = null === (ie = (0, Se.h)()) || void 0 === ie ? void 0 : ie.cameraZoom()) && void 0 !== ee ? ee : 0
          }
        }
      };
    var Qe = He(39854),
      ei = He(41782),
      ii = He(41789),
      Hi = He(41814),
      yi = He(1198),
      bi = He(103),
      Mi = He(4908),
      Ki = He(4118),
      Ui = He(1112);
    const Fi = {
      uF: () => (0, yi.f)(),
      inbuiltOverwritten: () => Mi.g,
      reflectApplyHit: () => Ui.b,
      definerHit: () => bi.currentUrl.c,
      emitReplaced: () => (0, Fe.b)(),
      confirmMesh: () => (0, Ki.b)(),
      confirmMeshHitStack: () => (0, Ki.c)()
    };
    var Ji = He(41798),
      oi = He(41952);
    var Ri = He(18),
      ki = He(1988),
      qi = He(2046),
      fi = He(1625),
      Ti = He(2083),
      Xi = He(1127),
      zi = He(1196),
      Bi = He(37102);

    function Ei() {
      return zi.f.get().getCurrentLanguageCode()
    }

    function gi(ee) {
      const ie = () => {
        ee({
          translate: (ee, ie) => (0, Xi.p)(Ei(), ee, ie),
          keyBindingText: ee => {
            const ie = (0, qi.p)(ee, Ri.e.get("isTouchScreen"));
            return null !== ie ? (0, Xi.s)(Ei(), ie.translationKey, ie.params) : (0, qi.k)((0, qi.o)(ee))
          },
          isFriend: Ti.i,
          hiddenNames: ki.c.shown,
          loadsFontRest: (0, Bi.b)(Ei())
        })
      };
      let He = !1;
      const ye = () => {
          const ee = Ei();
          (0, Xi.k)(ee).then((() => {
            He || ee !== Ei() || ie()
          }))
        },
        be = () => fi.b.getSocialState().friends.map((ee => ee.name.toLowerCase())).sort().join(" ");
      let Me = be();
      ie(), ye();
      const Ke = [(0, zi.h)((() => {
        ie(), ye()
      })), (0, Fe.j)("customBindingsChanged", ie), (0, Fe.j)("appManagerUpdated|isTouchScreen", ie), (0, Ti.e)((() => {
        const ee = be();
        ee !== Me && (Me = ee, ie())
      })), ki.c.subscribe(ie)];
      return () => {
        He = !0;
        for (const ee of Ke) ee()
      }
    }
    var Oi = He(1132),
      di = He(4836),
      Wi = He(37669);
    const ti = {
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
      wasmScreens: Oi.wasmScreens
    };
    let Zi = null;

    function wi(ee) {
      let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return null === Zi ? function(ee) {
        var ie, He;
        let ye = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const [be, Me] = ee.split(":"), Ke = null !== (ie = null === (He = ti[be]) || void 0 === He ? void 0 : He[Me]) && void 0 !== ie ? ie : ee;
        return Ke.replace(/\{\{(\w+)\}\}/g, ((ee, ie) => {
          var He;
          return null !== (He = ye[ie]) && void 0 !== He ? He : ee
        }))
      }(ee, ie) : Zi(ee, ie)
    }

    function Di(ee, ie) {
      (0, di.e)();
      const He = document.createElement("div");
      He.setAttribute("role", "alertdialog"), He.style.cssText = "position:fixed;top:0;right:0;bottom:0;left:0;z-index:100;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,0.7);font:16px sans-serif;color:#fff";
      const ye = document.createElement("div");
      ye.style.cssText = "max-width:28rem;padding:1.5rem;background:#1c2333;text-align:center";
      const be = document.createElement("h2");
      be.textContent = wi(ee.title);
      const Me = document.createElement("p");
      if (Me.textContent = wi(ee.help, ee.helpValues), Me.style.whiteSpace = "pre-line", ye.append(be, Me), ee.discordLink) {
        const ee = document.createElement("a");
        ee.href = Wi.c, ee.target = "_blank", ee.rel = "noreferrer", ee.style.color = "#8ab4ff", ee.textContent = wi("wasmScreens:reportOnDiscord"), ye.append(ee)
      }
      const Ke = document.createElement("div");
      return Ke.style.cssText = "display:flex;gap:1rem;justify-content:center;margin-top:1.5rem", ye.append(Ke), He.append(ye), document.body.append(He), new Promise((ye => {
        const be = ee => {
            null === ie || void 0 === ie || ie.removeEventListener("abort", Me), He.remove(), ye(ee)
          },
          Me = () => {
            be(!1)
          };
        null === ie || void 0 === ie || ie.addEventListener("abort", Me, {
          once: !0
        });
        const Ue = (ee, ie) => {
          const He = document.createElement("button");
          He.textContent = wi(ee), He.style.cssText = "padding:0.5rem 1.25rem;font:inherit", He.addEventListener("click", (() => {
            be(ie)
          })), Ke.append(He)
        };
        null !== ee.cancel && Ue(ee.cancel, !1), Ue(ee.confirm, !0)
      }))
    }
    var Pi = He(9663),
      Ai = He(618),
      Yi = He(1033),
      Vi = He(2020),
      ai = He(335),
      ci = He(3094),
      xi = He(37003),
      Li = He(3101),
      Ci = He(39520),
      vi = He(5153),
      ui = He(41955),
      mi = He(677),
      li = He(645),
      Si = He(670),
      ni = He(3172),
      ji = He(2018),
      si = He(4121),
      Ii = He(3601);
    let Ni = null;
    var Gi = He(1141),
      ri = He(1155),
      Qi = He(1862),
      eH = He(4771),
      iH = He(4826),
      HH = He(3802),
      yH = He(50),
      bH = He(330),
      MH = He(325),
      KH = He(41977),
      UH = He(5265),
      FH = He(39553);
    var JH = He(4804),
      oH = He(35);

    function RH(ee) {
      let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => document.createElement("canvas");
      try {
        var He;
        const ye = ie(),
          be = ee ? ye.getContext("webgl") : ye.getContext("webgl2");
        return null !== be && (null === (He = be.getExtension("WEBGL_lose_context")) || void 0 === He || He.loseContext(), !0)
      } catch {
        return !1
      }
    }
    var kH = He(38519),
      qH = He(41981);
    class fH {
      constructor(ee, ie, He) {
        this.showView = ee, this.holdForAd = ie, this.render = He
      }
      pointerUnlockRequestsChanged() {
        (0, KH.E)()
      }
      pointerLockDebugEntries() {
        return [{
          label: "Locked to the canvas",
          value: String((0, KH.t)())
        }]
      }
      setGameViewShown(ee) {
        this.showView(ee)
      }
      setGameView(ee) {
        (0, qH.k)(ee)
      }
      videoAdHold(ee, ie) {
        this.holdForAd(ee, ie)
      }
      gameRender() {
        return this.render()
      }
    }
    class TH {
      leave(ee) {
        ! function(ee) {
          if (null !== (0, ke.e)().websocketUrl) try {
            (0, le.O)().leaveGame(ee)
          } finally {
            (0, ke.v)({
              websocketUrl: null
            })
          }
        }(ee)
      }
      isReplay() {
        return !1
      }
    }
    class pH {
      constructor(ee) {
        this.workMs = ee
      }
      watchFrameStarts(ee) {
        return (0, le.q)(ee)
      }
      watchFrames(ee) {
        return (0, le.o)(ee)
      }
      watchTicks(ee) {
        return (0, le.w)(ee)
      }
      frameWorkMs() {
        return this.workMs()
      }
    }
    var XH = He(41948),
      zH = He(41985);

    function BH(ee) {
      return ee >= 0 ? Math.min(1, ee) : 0
    }

    function EH(ee, ie) {
      const {
        fade: He
      } = ee;
      return null === He || ie - He.at >= He.ms ? ee.volume : He.from + (ee.volume - He.from) * Math.max(0, (ie - He.at) / He.ms)
    }

    function gH(ee) {
      const ie = Object.entries(ee),
        He = new Uint32Array(ie.length);
      let ye = 0;
      for (const [Ke, [, Ue]] of ie.entries()) He[Ke] = Ue.length, ye += Ue.length;
      const be = new Float64Array(3 * ye);
      let Me = 0;
      for (const [, Ke] of ie)
        for (const ee of Ke) be.set(ee, Me), Me += 3;
      return {
        blocks: ie.map((ee => {
          let [ie] = ee;
          return ie
        })).join("\0"),
        counts: He,
        values: be
      }
    }
    class OH {
      constructor(ee, ie) {
        this.core = ee, this.warn = ie, this.latest = 0
      }
      async feed() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : dH;
        const ie = ++this.latest;
        let He;
        try {
          He = await ee()
        } catch (ye) {
          return void(this.core.isStopped || ie !== this.latest || this.warn("the block colours didn't load, so block particles draw grey", ye))
        }
        ie === this.latest && (this.core.setBlockColours(He) || this.core.isStopped || this.warn("the core refused the block colours: block particles draw grey"))
      }
    }
    async function dH() {
      return gH((await He.e(228).then((() => He(34995)))).averageColors)
    }
    var WH = He(5271),
      tH = He(5279),
      ZH = He(41743),
      wH = He(3559),
      DH = He(36950),
      PH = He(41855),
      AH = He(608),
      YH = He(37883),
      VH = He(604),
      aH = He(347),
      cH = He(41836);
    const xH = [3e4, 12e4, 3e5];
    class LH extends Error {}
    const CH = {
      mobTypes: AH.k,
      vehicleTypes: YH.d,
      mobAiStates: AH.i,
      playerPoses: VH.l
    };
    var vH = He(41827),
      uH = He(41846),
      mH = He(41887),
      lH = He(1268),
      SH = He(41992),
      nH = He(41995),
      jH = He(3228),
      sH = He(39832),
      IH = He(5291),
      hH = He(2492);
    const NH = hH.p.KeysDisabled | hH.p.LookFrozen | hH.p.ClicksSuppressed,
      GH = jH.f;
    var rH = (0, nH.b)("resumingConn");
    class QH {
      constructor(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.shell = ee, this.now = ie, this.session = void 0, this.attempt = null, this.landed = null, this.initialInfoConn = 0, this.initialInfoOffer = !1, this.completedEarlyConn = 0, Object.defineProperty(this, rH, {
          writable: !0,
          value: 0
        }), this.drops = 0, this.session = new sH.b({
          reconnect: ee => this.reconnect(ee),
          isLive: () => ee.isLive(),
          onReconnected: ie => {
            this.landed = ie, ee.onReconnected(ie), this.landIfResumed()
          },
          onGaveUp: (ie, He) => {
            this.abortAttempt(), ee.onGaveUp(ie, He)
          },
          freeze: ie => {
            ee.vY(ie), (0, IH.h)(NH, ie ? NH : 0, "reconnectFreeze")
          },
          releaseSeat: ee => {
            this.releaseSeat(ee)
          }
        })
      }
      isResuming() {
        return this.session.isResuming()
      }
      get resumingConn() {
        return (0, SH.d)(this, rH)[rH]
      }
      canHoldSeat() {
        return this.session.canHoldSeat()
      }
      onInitialInfo(ee) {
        let {
          conn: ie,
          graceMs: He,
          sessionBased: ye,
          replayOffer: be
        } = ee;
        this.session.onInitialInfo(He, ye), this.isResuming() && (this.initialInfoConn = ie, this.initialInfoOffer = be, this.landIfResumed())
      }
      onResumeComplete(ee) {
        0 !== ee && (ee === (0, SH.d)(this, rH)[rH] ? ((0, SH.d)(this, rH)[rH] = 0, this.session.onResumed()) : this.isResuming() && (this.completedEarlyConn = ee))
      }
      onDropped(ee) {
        this.drops++, this.landed = null, this.initialInfoConn = 0, this.initialInfoOffer = !1, this.completedEarlyConn = 0, (0, SH.d)(this, rH)[rH] = 0, this.session.onConnectionLost(ee)
      }
      leave() {
        this.session.leave(), this.dispose()
      }
      dispose() {
        this.abortAttempt(), this.landed = null, this.completedEarlyConn = 0, (0, SH.d)(this, rH)[rH] = 0, this.session.end()
      }
      reconnect(ee) {
        const ie = this.attempt;
        if (null !== ie && this.awaitingJoinRoom(ie)) return ie.result;
        this.abortAttempt();
        const He = new AbortController,
          ye = this.drops,
          be = {
            attachedAt: null
          },
          Me = this.shell.reconnect(ee, He.signal, (() => {
            be.attachedAt = this.now()
          })).then((ee => {
            if (this.clearAttempt(Ke), this.drops !== ye) throw new Error("the resumed room dropped before its attempt settled");
            return ee
          }), (ee => {
            throw this.clearAttempt(Ke), ee
          })),
          Ke = {
            abort: He,
            socket: be,
            result: Me
          };
        return this.attempt = Ke, Me
      }
      clearAttempt(ee) {
        this.attempt === ee && (this.attempt = null)
      }
      abortAttempt() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new DOMException("the reconnect attempt was given up", "AbortError");
        const ie = this.attempt;
        this.attempt = null, null === ie || void 0 === ie || ie.abort.abort(ee)
      }
      awaitingJoinRoom(ee) {
        const ie = ee.socket.attachedAt;
        return null !== ie && this.now() - ie < GH
      }
      releaseSeat(ee) {
        const ie = this.attempt,
          He = null !== ie && this.awaitingJoinRoom(ie);
        this.abortAttempt(new ei.o), He || this.shell.releaseSeat(ee)
      }
      landIfResumed() {
        const ee = this.landed;
        if (null !== ee && ee.conn === this.initialInfoConn) {
          const ie = this.initialInfoOffer && this.completedEarlyConn !== ee.conn;
          if (this.landed = null, this.initialInfoConn = 0, this.initialInfoOffer = !1, this.completedEarlyConn = 0, this.abortAttempt(), !ie) return void this.session.onResumed();
          (0, SH.d)(this, rH)[rH] = ee.conn, this.session.onResuming()
        }
      }
    }
    var ey = He(39834),
      iy = He(41999),
      Hy = He(37272),
      yy = He(37266),
      by = He(2181),
      My = He(1952),
      Ky = He(4673),
      Uy = He(41864),
      Fy = He(5587);

    function Jy(ee) {
      let {
        pack: ie,
        gameSource: He
      } = ee;
      if (null !== He && "" !== He) return `game:${He}`;
      if (null === ie) return "default";
      const {
        id: ye,
        version: be
      } = ie.metaData;
      if (ye !== by.o.CUSTOM) return `${ye}@${be}`;
      const Me = [];
      for (const Ke of [ie.textureOverrides, ie.modelOverrides, ie.animations])
        for (const [ee, ie] of Object.entries(null !== Ke && void 0 !== Ke ? Ke : {})) Me.push(`${ee}:${ie.length}`);
      return `${ye}:${(0,My.s)(Me.join())}`
    }
    var oy = He(4818),
      Ry = He(3580),
      ky = He(42006),
      qy = He(649),
      fy = He(3582),
      Ty = He(97),
      py = He(3196),
      Xy = He(3186),
      zy = He(4886),
      By = He(4685),
      Ey = He(41915),
      gy = He(41910),
      Oy = He(2495),
      dy = He(1620),
      Wy = He(1657),
      ty = He(1246),
      Zy = He(107),
      wy = He(304),
      Dy = He(39860),
      Py = He(2503),
      Ay = He(5286);
    const Yy = new Set([WH.qb.KeyDown, WH.qb.MouseMove, WH.qb.MouseDown, WH.qb.Wheel, WH.qb.TouchStart, WH.qb.TouchMove]);

    function Vy(ee) {
      return (ee.shiftKey ? WH.Fb.Shift : 0) | (ee.ctrlKey ? WH.Fb.Ctrl : 0) | (ee.altKey ? WH.Fb.Alt : 0) | (ee.metaKey ? WH.Fb.Meta : 0) | ("repeat" in ee && ee.repeat ? WH.Fb.Repeat : 0) | (ee.isTrusted ? 0 : WH.Fb.Untrusted | function(ee) {
        try {
          const {
            editable: ie,
            outsideView: He
          } = (0, Dy.d)(ee.target);
          return (ie ? WH.Fb.UntrustedEditable : 0) | (He ? WH.Fb.UntrustedOutsideView : 0)
        } catch {
          return 0
        }
      }(ee))
    }

    function ay(ee) {
      return "touchOnly" !== (0, Zy.b)() && "function" === typeof ee.requestPointerLock
    }

    function cy(ee) {
      return 0 === ee.button ? ee.altKey ? Ay.p["Alt+Left Click"] : Ay.p.Mouse1 : 1 === ee.button ? Ay.p.Mouse2 : Ay.p.Mouse3
    }
    const xy = new Set(["AltLeft", "AltRight", "ArrowUp", "ArrowDown"]),
      Ly = new Map([
        ["AltLeft", "altKey"],
        ["AltRight", "altKey"],
        ["ControlLeft", "ctrlKey"],
        ["ControlRight", "ctrlKey"],
        ["ShiftLeft", "shiftKey"],
        ["ShiftRight", "shiftKey"],
        ["MetaLeft", "metaKey"],
        ["MetaRight", "metaKey"]
      ]),
      Cy = 32768,
      vy = 1;

    function uy(ee) {
      return Math.min(Math.max(Math.round(ee), 0), 65535)
    }

    function my(ee, ie, He) {
      const ye = [],
        be = (ee, ie, He, be) => {
          const Me = ee => {
            (0, Wy.r)(ee) || He(ee)
          };
          ee.addEventListener(ie, Me, be), ye.push((() => {
            ee.removeEventListener(ie, Me, be)
          }))
        },
        Me = {
          capture: !0,
          passive: !0
        },
        Ke = (ee, He, ye, be, Me) => (!(0, Py.b)() || !Yy.has(ee)) && (ie(ee, He, ye, be, Me), !0),
        Ue = () => document.pointerLockElement === ee,
        Fe = (0, wy.f)(),
        Je = ee => {
          ee.ctrlKey && He.ctrlCombosAreGames() && !(0, IH.d)(ee.target) && ee.preventDefault()
        },
        oe = (ee, ye, be) => {
          He.inspect(ee, ye, !1), ie(WH.qb.KeyUp, ye, 0, 0, (0, Oy.s)(be, ee.timeStamp)), He.keyReleased(ye)
        },
        Re = new Map,
        ke = (ee, ie, He) => ee[He] || ("AltRight" === ie || "ControlLeft" === ie) && ee.getModifierState("AltGraph"),
        qe = new Map,
        fe = () => {
          Re.clear(), qe.clear()
        },
        Te = ee => {
          if (ee.isTrusted && document.hasFocus())
            for (const [ie, He] of qe) qe.delete(ie), ke(ee, ie, He) || (Re.delete(ie), oe(ee, Ay.p[ie], Vy(ee)))
        };
      ee.tabIndex = -1;
      let pe = 0,
        Xe = 0;
      const ze = () => {
        const ie = ee.getBoundingClientRect();
        pe = ie.left, Xe = ie.top
      };
      let Be = "mouse";
      const Ee = () => !Ue() && ("mouse" === Be || !He.touchUiShown()),
        ge = (ee, ie, He) => {
          const ye = (uy(ee.clientX - pe) | uy(ee.clientY - Xe) << 16) >>> 0;
          Ke(WH.qb.MouseMove, WH.Hb.Point, ie, He, ye)
        };
      let Oe = !1,
        de = 0;
      const We = () => {
        Oe && (Oe = !1, He.viewShown() && (0, KH.V)())
      };
      ye.push((() => {
        clearTimeout(de)
      })), be(window, "keydown", (ee => {
        "Escape" === ee.key ? (0, KH.M)(!0) : ee.repeat || (0, IH.d)(ee.target) || (Oe = !0, clearTimeout(de), de = window.setTimeout(We, 0))
      }), Me), be(window, "keydown", (ee => {
        We(), Je(ee), Te(ee);
        const ie = Ay.p[ee.code];
        if ("number" !== typeof ie || !He.viewShown()) return;
        const ye = (0, IH.d)(ee.target);
        ye || !He.prevents(ie) && !xy.has(ee.code) || ee.preventDefault(), ee.repeat || He.inspect(ee, ie, !0), Ke(WH.qb.KeyDown, ie, 0, 0, (0, Oy.s)(Vy(ee), ee.timeStamp)) && Re.set(ee.code, ie), ye || He.keyPressed(ie)
      }), {
        capture: !1,
        passive: !1
      }), be(window, "keyup", (ee => {
        "Escape" === ee.key && (0, KH.M)(!1), Je(ee), Re.delete(ee.code), qe.delete(ee.code), Te(ee);
        const ie = Ay.p[ee.code];
        "number" === typeof ie && oe(ee, ie, Vy(ee))
      }), {
        capture: !0,
        passive: !1
      }), be(window, "mousemove", (ee => {
        "mouse" === Be && Ee() ? ge(ee, ee.movementX, ee.movementY) : Ue() ? Ke(WH.qb.MouseMove, WH.Hb.Stamped, ee.movementX, ee.movementY, (0, Oy.s)(0, ee.timeStamp)) : Ke(WH.qb.MouseMove, 0, ee.movementX, ee.movementY, 0)
      }), Me);
      let te = 0,
        Ze = 0;
      const we = [];
      let De = !1,
        Pe = !1;
      be(ee, "mousedown", (ee => {
        if ((0, Py.b)()) return;
        Te(ee);
        const ye = 1 << ee.button;
        if (!Ue() && (0, KH.T)() && (0, KH.f)() && (Pe = !0, !De)) return void(te |= ye);
        te &= ~ye;
        const be = ee.button <= 2 ? cy(ee) : void 0;
        void 0 !== be && (we[ee.button] = be, He.inspect(ee, be, !0)), Ee() && ge(ee, 0, 0), ie(WH.qb.MouseDown, ee.button, ee.clientX, ee.clientY, (0, Oy.s)(Vy(ee), ee.timeStamp)), Ze |= ye, void 0 !== be && He.keyPressed(be)
      }), Me), be(window, "mouseup", (ee => {
        var ye;
        Te(ee);
        const be = 1 << ee.button,
          Me = 0 !== (te & ~Ze & be);
        if (te &= ~be, Ze &= ~be, Me) return;
        const Ke = ee.button <= 2 ? null !== (ye = we[ee.button]) && void 0 !== ye ? ye : cy(ee) : void 0;
        void 0 !== Ke && He.inspect(ee, Ke, !1), ie(WH.qb.MouseUp, ee.button, ee.clientX, ee.clientY, (0, Oy.s)(Vy(ee), ee.timeStamp)), void 0 !== Ke && He.keyReleased(Ke)
      }), Me), be(ee, "contextmenu", (ee => {
        ee.preventDefault()
      }), {
        passive: !1
      });
      const Ae = ee => {
        (Ue() || (0, KH.p)() && (0, ty.x)()) && (ee.ctrlKey || Fe && !document.fullscreenElement) && ee.preventDefault()
      };
      be(ee, "wheel", (ee => {
        Ae(ee), Te(ee), Ke(WH.qb.Wheel, ee.deltaMode, ee.deltaX, ee.deltaY, 0)
      }), {
        capture: !0,
        passive: !1
      });
      const Ye = {
          capture: !0,
          passive: !1
        },
        Ve = ee => {
          ee ? window.addEventListener("wheel", Ae, Ye) : window.removeEventListener("wheel", Ae, Ye)
        };
      Ve((0, KH.p)()), ye.push((0, KH.z)(Ve)), ye.push((() => {
        Ve(!1)
      }));
      const ae = new Map,
        ce = new Set,
        xe = ee => {
          const ie = "stylus" === ee.touchType;
          for (const He of ae.values())
            if (!He.touched && (ie || Math.abs(ee.clientX - He.x) <= vy && Math.abs(ee.clientY - He.y) <= vy)) return He.touched = !0, !0;
          return !1
        },
        Le = ee => 32767 & ee,
        Ce = new Set,
        ve = ee => He => {
          const ye = (0, Oy.s)(Vy(He), He.timeStamp);
          ee !== WH.qb.TouchStart && ee !== WH.qb.TouchMove || ((ee, He) => {
            const ye = ee.touches;
            if (ye)
              for (const be of Ce) {
                let ee = !1;
                for (let ie = 0; ie < ye.length && !ee; ie++) ee = Le(ye[ie].identifier) === be;
                ee || (Ce.delete(be), ie(WH.qb.TouchCancel, be, 0, 0, He))
              }
          })(He, ye);
          const be = He.changedTouches;
          for (let ie = 0; ie < be.length; ie++) {
            const He = be[ie];
            if (ee === WH.qb.TouchStart && xe(He) && ce.add(He.identifier), ce.has(He.identifier)) {
              ee !== WH.qb.TouchEnd && ee !== WH.qb.TouchCancel || ce.delete(He.identifier);
              continue
            }
            const Me = Le(He.identifier),
              Ue = Ke(ee, Me, He.clientX - pe, He.clientY - Xe, ye);
            ee === WH.qb.TouchStart ? Ue && Ce.add(Me) : ee !== WH.qb.TouchMove && Ce.delete(Me)
          }
        },
        ue = ve(WH.qb.TouchStart);
      be(ee, "touchstart", (ee => {
        ee.preventDefault(), (0, Py.b)() || (He.touchStarting(), ue(ee))
      }), {
        passive: !1
      }), be(ee, "touchmove", ve(WH.qb.TouchMove), Me), be(ee, "touchend", ve(WH.qb.TouchEnd), Me), be(ee, "touchcancel", ve(WH.qb.TouchCancel), Me);
      const me = ee => Cy | 32767 & ee,
        le = (ee, ie) => {
          Ke(ee, me(ie.pointerId), ie.clientX - pe, ie.clientY - Xe, (0, Oy.s)(Vy(ie), ie.timeStamp))
        };
      be(window, "pointerdown", (ie => {
        Be = ie.pointerType, "mouse" === ie.pointerType && ie.target !== ee && He.viewShown() && (0, KH.X)()
      }), Me), be(ee, "pointerdown", (ee => {
        "pen" === ee.pointerType && 0 === ee.button && (0, KH.p)() && (0, ty.x)() && (ee.preventDefault(), (0, Py.b)() || (ae.set(ee.pointerId, {
          x: ee.clientX,
          y: ee.clientY,
          touched: !1
        }), He.touchStarting(), le(WH.qb.TouchStart, ee)))
      }), {
        passive: !1
      }), be(window, "pointermove", (ee => {
        Be = ee.pointerType, ae.has(ee.pointerId) && le(WH.qb.TouchMove, ee), "mouse" !== ee.pointerType && Ee() && ge(ee, 0, 0)
      }), Me);
      const Se = ee => ie => {
        ae.delete(ie.pointerId) && le(ee, ie)
      };
      be(window, "pointerup", Se(WH.qb.TouchEnd), Me), be(window, "pointercancel", Se(WH.qb.TouchCancel), Me);
      let ne = 0;
      const je = () => {
          ne = 0, ze(), He.resized()
        },
        se = () => {
          const ee = He.sizeCanvas();
          null !== ee && ie(WH.qb.Resize, 0, ee.cssWidth, ee.cssHeight, (0, Oy.j)(ee.renderScale)), ze(), He.resized(), 0 === ne && (ne = requestAnimationFrame(je))
        };
      be(window, "resize", se, Me), ye.push(He.watchRenderScale(se)), ye.push((() => {
        cancelAnimationFrame(ne)
      })), be(window, "focus", (ee => {
        ee.isTrusted && (ie(WH.qb.Focus, 0, 0, 0, 0), He.viewShown() && (0, KH.X)())
      }), {
        passive: !0
      });
      const Ie = () => {
          (0, KH.M)(!1), te = 0
        },
        he = () => {
          Ce.clear(), ae.clear(), ce.clear()
        };
      let Ne = 0,
        Ge = 0;
      be(window, "blur", (ye => {
        Ie(), (0, KH.l)();
        for (const ee of Re.keys()) {
          const ie = Ly.get(ee);
          void 0 !== ie && qe.set(ee, ie)
        }
        ye.isTrusted && ((ee => {
          for (const [He, ye] of ae) ie(WH.qb.TouchCancel, me(He), ye.x, ye.y, (0, Oy.s)(0, ee));
          ae.clear()
        })(ye.timeStamp), ie(WH.qb.Blur, WH.l.KeepTouches, 0, 0, 0)), Fe && ye.isTrusted && (clearTimeout(Ge), Ge = window.setTimeout((() => {
          if (!document.hasFocus()) {
            for (const ee of Re.values()) oe(ye, ee, 0);
            fe()
          }
        }), 0)), clearTimeout(Ne), Ne = window.setTimeout((() => {
          document.activeElement instanceof HTMLIFrameElement && (0, ty.x)() && He.viewShown() && ee.focus({
            preventScroll: !0
          })
        }), 0)
      }), {
        passive: !0
      }), ye.push((() => {
        clearTimeout(Ne), clearTimeout(Ge)
      })), be(window, "mousedown", (ie => {
        Fe && ie.isTrusted && !document.hasFocus() && (0, ty.x)() && He.viewShown() && (window.focus(), ee.focus({
          preventScroll: !0
        }))
      }), Me), be(document, "visibilitychange", (() => {
        document.hidden ? (ie(WH.qb.Blur, 0, 0, 0, 0), he()) : document.hasFocus() && ie(WH.qb.Focus, 0, 0, 0, 0)
      }), {
        passive: !0
      }), ye.push((0, Py.i)((() => {
        Ie(), ie(WH.qb.Blur, WH.l.Release, 0, 0, 0), He.keysReleased(), fe(), Ze = 0, he(), ie(WH.qb.Joystick, 0, 0, 0, 0), document.hasFocus() && ie(WH.qb.Focus, 0, 0, 0, 0)
      })));
      const re = !He.canLock(),
        Qe = () => re && !(0, KH.p)() ? WH.gc.Lockless : WH.gc.Released,
        ei = () => {
          Ue() && (De = !1, Pe = !1), ie(WH.qb.PointerLock, Ue() ? WH.gc.Locked : Qe(), 0, 0, 0), (0, KH.P)(Ue())
        };
      return be(document, "pointerlockchange", ei, {
        passive: !0
      }), be(document, "pointerlockerror", (() => {
        De ||= Pe, Pe = !1, (0, KH.x)()
      }), {
        passive: !0
      }), re && ye.push((0, KH.z)((() => {
        ie(WH.qb.PointerLock, Qe(), 0, 0, 0)
      }))), se(), ie(document.hasFocus() ? WH.qb.Focus : WH.qb.Blur, 0, 0, 0, 0), ei(), () => {
        for (const ee of ye.splice(0)) ee()
      }
    }
    var ly = He(34807),
      Sy = He(34798),
      ny = He(2048);
    const jy = new Map(Ay.d.map(((ee, ie) => [ee, ie]))),
      sy = ["jump", "primary-fire", "alt-fire"],
      Iy = ["primary-fire", "alt-fire"];

    function hy(ee) {
      return `${ny.d}${ee}`
    }
    const Ny = ["forward", "backward", "left", "right", "sprint", "jump"];

    function Gy(ee) {
      const ie = [];
      for (const He of ee) {
        const ee = "string" === typeof He ? Ay.p[He] : void 0;
        "number" === typeof ee && ie.push(ee)
      }
      return ie
    }
    class ry {
      constructor() {
        this.keys = new Map, this.preventKeys = new Set, this.movementKeys = new Set, this.checkedDown = new Set, this.checkedUp = new Set;
        for (const [ee, ie] of Object.entries(Ay.h)) this.keys.set(ee, ie);
        this.updateKeySets()
      }
      prevents(ee) {
        return this.preventKeys.has(ee)
      }
      moves(ee) {
        return this.movementKeys.has(ee)
      }
      checks(ee, ie) {
        return (ie ? this.checkedDown : this.checkedUp).has(ee)
      }
      sync(ee, ie) {
        for (const [He, ye] of this.keys) {
          const be = ee(hy(He)),
            Me = Array.isArray(be) ? Gy(be) : Ay.h[He];
          (Me.length !== ye.length || Me.some(((ee, ie) => ee !== ye[ie]))) && this.bind(He, Me, ie)
        }
      }
      bind(ee, ie, He) {
        const ye = jy.get(ee);
        if (void 0 !== ye) {
          He(WH.qb.Binding, 0, 0, 0, ye | WH.k.Clear << 8);
          for (const Me of [...ie, ...null !== (be = Ay.l[ee]) && void 0 !== be ? be : []]) {
            var be;
            He(WH.qb.Binding, Me, 0, 0, ye | WH.k.Add << 8)
          }
          this.keys.set(ee, ie), this.updateKeySets()
        }
      }
      updateKeySets() {
        this.preventKeys.clear();
        for (const ye of Ay.t)
          for (const ie of null !== (ee = this.keys.get(Ay.d[ye])) && void 0 !== ee ? ee : []) {
            var ee;
            this.preventKeys.add(ie)
          }
        this.movementKeys.clear();
        for (const ye of Ny)
          for (const ee of null !== (ie = this.keys.get(ye)) && void 0 !== ie ? ie : []) {
            var ie;
            this.movementKeys.add(ee)
          }
        for (const [ye, be] of [
            [this.checkedDown, sy],
            [this.checkedUp, Iy]
          ]) {
          ye.clear();
          for (const ee of be)
            for (const ie of null !== (He = this.keys.get(ee)) && void 0 !== He ? He : []) {
              var He;
              ye.add(ie)
            }
        }
      }
    }
    var Qy = He(5282),
      eb = He(37409);
    const ib = "[bloxd-wasm-client]";

    function Hb() {
      return "inGame" === Ri.e.get("gameState") && !(0, dy.q)()
    }
    let yb = null;

    function bb(ee, ie) {
      yb && ie.writePendingInput() && yb.push(function(ee, ie) {
        let He = "";
        for (const ye of ie) He += ye.toString(16).padStart(2, "0");
        return He ? `${ee} ${He}` : String(ee)
      }(ee, ie.rings.input.written()))
    }
    const Mb = [];

    function Kb(ee, ie, He, ye) {
      ee === WH.U.InputAction && ye === WH.nb && Mb.push(ie.getUint32(He, !0))
    }
    var Ub = He(42008),
      Fb = He(260),
      Jb = He(123);
    const ob = new Set(["android", "ios"]);
    let Rb = null;

    function kb() {
      return Rb ??= function() {
        let ee = null;
        try {
          var ie, He, ye;
          const be = document.createElement("canvas"),
            Me = {
              powerPreference: Jb.e
            };
          if (ee = null !== (ie = be.getContext("webgl2", Me)) && void 0 !== ie ? ie : be.getContext("webgl", Me), !ee) return null;
          const Ke = ee.getExtension("WEBGL_debug_renderer_info");
          if (!Ke) return "unknown";
          const Ue = String(null !== (He = ee.getParameter(Ke.UNMASKED_RENDERER_WEBGL)) && void 0 !== He ? He : "");
          return "" === Ue ? "unknown" : (0, Fb.i)(String(null !== (ye = ee.getParameter(Ke.UNMASKED_VENDOR_WEBGL)) && void 0 !== ye ? ye : ""), Ue)
        } catch {
          return null
        } finally {
          try {
            var be, Me;
            null === (be = ee) || void 0 === be || null === (Me = be.getExtension("WEBGL_lose_context")) || void 0 === Me || Me.loseContext()
          } catch {}
        }
      }(), Rb
    }

    function qb(ee) {
      const ie = (0, Ty.pageOperatingSystem)();
      return null === ie ? null : function(ee, ie, He) {
        const ye = "software_adapter" === ee.reason ? null : ee.adapter,
          be = null === ye || "" === ye.vendor ? null : (0, Fb.e)(ye.vendor, ye.architecture);
        return null !== be && "other_intel" !== be ? be : ob.has(ie) ? null : He()
      }(ee, ie, kb)
    }
    const fb = 6e4,
      Tb = 3e5;
    var pb = He(4055);
    var Xb = He(42015),
      zb = He(8);

    function Bb(ee, ie) {
      const He = zb.gb.encode(ie);
      ! function(ee, ie) {
        let He = ie >= 0 ? 2 * ie : 2 * -ie - 1;
        for (; He >= 128;) ee.push(He % 128 | 128), He = Math.floor(He / 128);
        ee.push(He)
      }(ee, He.length);
      for (const ye of He) ee.push(ye)
    }
    let Eb, gb, Ob;
    (() => {
      const ee = ["length", 0, 1, 2, "b", 46, void 0, "c", !1, "d", !0, 230, "o", "e", null, 235, "a", "resolv", "then", "postCo", "okies", 3, 8, 16, 4, "emJkN0", 512, "012345", 173, 15, 114, 29, 5, 6, 234, 1023, 36, 63, 128, 12, 255, 20, 162, 159, 146, 32, 24, 7, 18, 10, 19, 64, 137, 158, 65535, 97, 104, "abc", "ba7816bf8f01cfea", "414140de5dae2223", "b00361a396177a9c", "b410ff61f20015ad", 909522486, 1549556828, 256, "6789AB", "CDEF", "6789ab", "cdef", 184, 138, "f", 72, 204, 110, 92, 55296, 56319, 56320, 57343, 65536, 127, 2047, 192, 31, 224, 2097151, 240, 154, 13, 22, 11, 25, 17, 28, 34, 39, 14, 41, 61, 1116352408, 1899447441, 1245643825, 373957723, 961987163, 1508970993, 1841331548, 1424204075, 670586216, 310598401, 607225278, 1426881987, 1925078388, 2132889090, 1680079193, 1046744716, 459576895, 272742522, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 1740746414, 1473132947, 1341970488, 1084653625, 958395405, 710438585, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2117940946, 1838011259, 1564481375, 1474664885, 1035236496, 949202525, 778901479, 694614492, 200395387, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2067236844, 1933114872, 1866530822, 1538233109, 1090935817, 965641998, 1779033703, 1150833019, 1013904242, 1521486534, 1359893119, 1694144372, 528734635, 1541459225, 9, 123, 217, "g", 161, 214, 167, 33, "Invalid byte index", 68, 30, "Invalid continuation byte", 189, 216, 165, 26, 27, 149, "u", 100, 108, "Block ", "image "];

      function ie(ie, He, ye) {
        if (ie === ee[25]) return He + ye
      }

      function ye() {}
      "IQBM1J" in ye && function(...ie) {
        Re(ie[ee[0]] = ee[1], ie[ee[11]] = function(...He) {
          return He[ee[0]] = ee[3], ie[ee[2]]({}, He[ee[1]], He[ee[2]])
        }, ie[ee[2]] = function(...He) {
          if (Re(He[ee[0]] = ee[21], He[-ee[5]] = {}), He[ee[1]][He[ee[2]] + He[ee[3]]] !== ee[6]) return He[ee[1]][He[ee[2]] + He[ee[3]]];
          if (He[ee[2]] === He[ee[3]]) return ee[10];
          for (He[ee[4]] = ee[1]; He[ee[4]] < He[ee[2]].length; He[ee[4]]++) He[-ee[5]][He[ee[2]][He[ee[4]]]] === ee[6] && (He[-ee[5]][He[ee[2]][He[ee[4]]]] = ee[1]), He[-ee[5]][He[ee[3]][He[ee[4]]]] === ee[6] && (He[-ee[5]][He[ee[3]][He[ee[4]]]] = ee[1]), Re(He[-ee[5]][He[ee[2]][He[ee[4]]]]++, He[-ee[5]][He[ee[3]][He[ee[4]]]]--);
          for (He[ee[7]] in He[-ee[5]])
            if (He[-ee[5]][He[ee[7]]] !== ee[1]) return He[ee[1]][He[ee[2]] + He[ee[3]]] = ee[8], ee[8];
          for (He[ee[9]] = ee[2]; He[ee[9]] < He[ee[2]].length; He[ee[9]]++)
            if (ie[ee[2]](He[ee[1]], He[ee[2]].substr(ee[1], He[ee[9]]), He[ee[3]].substr(ee[1], He[ee[9]])) && ie[ee[2]](He[ee[1]], He[ee[2]].substr(He[ee[9]]), He[ee[3]].substr(He[ee[9]])) || ie[ee[2]](He[ee[1]], He[ee[2]].substr(ee[1], He[ee[9]]), He[ee[3]].substr(He[ee[3]].length - He[ee[9]])) && ie[ee[2]](He[ee[1]], He[ee[2]].substr(He[ee[9]]), He[ee[3]].substr(ee[1], He[ee[3]].length - He[ee[9]]))) return He[ee[1]][He[ee[2]] + He[ee[3]]] = ee[10], ee[10];
          return He[ee[1]][He[ee[2]] + He[ee[3]]] = ee[8], ee[8]
        }, console.log(ie[ee[11]]))
      }();
      const be = (ee[1], zb[ee[12]])("aGFyZHdhcmVDb25jdXJyZW5jeQ=="),
        Me = (ee[1], zb[ee[12]])("QkFCWUxPTg=="),
        Ke = (ee[1], zb[ee[12]])("QW5kZXNpdGU="),
        Ue = (ee[1], zb[ee[12]])("U21vb3RoIEdyYW5pdGU="),
        Fe = (ee[1], zb[ee[12]])("RGlvcml0ZQ=="),
        Je = async (ie, be, Me, Ke) => {
          "g2jypg" in ye && function(...ie) {
            ie[ee[0]] = ee[1]
          }();
          const [{
            clientSideServerUrls: Ue
          }, {
            HttpPayloadType: Fe,
            ["postJsonWithMetricsCookiesAndCustomRespons" + ee[13]]: Je
          }] = await Promise.all([Promise[ee[17] + ee[13]]()[ee[18]](((...ie) => (ie[ee[0]] = ee[1], "s3jEFCK" in ye && function(...ie) {
            var He;
            Re(ie[ee[0]] = ee[1], He = function(ie) {
              Re(this.bk = ie, this.length = ee[1], this.map = {}, this.head = ee[14], this.tail = ee[14])
            }, He.prototype.get = function(...ie) {
              var He;
              return Re(ie[ee[0]] = ee[2], He = this.map[ie[ee[1]]]), He ? (this.remove(He), this.insert(He.key, He.val), He.val) : -ee[2]
            }, He.prototype.put = function(...ie) {
              Re(ie[ee[0]] = ee[3], this.map[ie[ee[1]]] ? (this.remove(this.map[ie[ee[1]]]), this.insert(ie[ee[1]], ie[ee[2]])) : this.length === this.bk ? (this.remove(this.head), this.insert(ie[ee[1]], ie[ee[2]])) : (this.insert(ie[ee[1]], ie[ee[2]]), this.length++))
            }, He.prototype.remove = function(...ie) {
              Re(ie[ee[0]] = ee[2], ie[ee[16]] = ie[ee[1]].prev, ie[-ee[15]] = ie[ee[1]].next), ie[-ee[15]] && (ie[-ee[15]].prev = ie[ee[16]]), ie[ee[16]] && (ie[ee[16]].next = ie[-ee[15]]), this.head === ie[ee[1]] && (this.head = ie[-ee[15]]), this.tail === ie[ee[1]] && (this.tail = ie[ee[16]]), delete this.map[ie[ee[1]].key]
            }, He.prototype.insert = function(...ie) {
              Re(ie[ee[0]] = ee[3], ie[ee[16]] = new List(ie[ee[1]], ie[ee[2]]), this.tail ? (this.tail.next = ie[ee[16]], ie[ee[16]].prev = this.tail, this.tail = ie[ee[16]]) : (this.tail = ie[ee[16]], this.head = ie[ee[16]]), this.map[ie[ee[1]]] = ie[ee[16]])
            }, console.log(He))
          }(), He(1141)))), Promise[ee[17] + ee[13]]()[ee[18]](((...ie) => (ie[ee[0]] = ee[1], "Fbs93y" in ye && function(...ie) {
            function He(...ie) {
              ie[ee[0]] = ee[2];
              const He = {};
              for (let ye of ie[ee[1]].replace(/[^w]/g, "").toLowerCase()) He[ye] = He[ye] + ee[2] || ee[2];
              return He
            }

            function ye(...ie) {
              ie[ee[0]] = ee[3];
              const He = buildCharMap(ie[ee[1]]),
                ye = buildCharMap(ie[ee[2]]);
              for (let be in He)
                if (He[be] !== ye[be]) return ee[8];
              return Object.keys(He).length !== Object.keys(ye).length ? ee[8] : ee[10]
            }

            function be(...ie) {
              ie[ee[0]] = ee[2];
              return Me(ie[ee[1]]) !== 1 / 0
            }

            function Me(...ie) {
              if (ie[ee[0]] = ee[2], !ie[ee[1]]) return -ee[2];
              const He = Me(ie[ee[1]].left),
                ye = Me(ie[ee[1]].right),
                be = Math.abs(He - ye);
              if (He === 1 / 0 || ye === 1 / 0 || be > ee[2]) return 1 / 0;
              return Math.max(He, ye) + ee[2]
            }
            ie[ee[0]] = ee[1], window.__GLOBAL__HELPERS__ = {
              buildCharacterMap: He,
              isAnagrams: ye,
              isBalanced: be,
              getHeightBalanced: Me
            }
          }(), He(1083))))]), oe = Ue.getHttpUrlFromWebSocketUrl(ie.endpoint), ke = ie[ee[19] + ee[20]] === ee[14] ? ee[6] : await ie[ee[19] + ee[20]]();
          await Je("" + oe + be, Me, {
            retries: Ke
          }, Fe.blob, ke)
        };
      Eb = async (He, Me) => {
        "EILv8G" + ee[190] in ye && (module.exports = async (ie = () => {
          throw new Error("No redacted path provided")
        }) => {
          const He = new Set(process.argv.slice(ee[3]));
          if (!He.has("--version")) {
            if (He.size !== ee[2]) return ee[8];
            if (!He.has("-v")) return ee[8]
          }
          return await (async () => void 0 === await ie() ? " (local)" : "")(), ee[10]
        });
        const Ke = function(ee, ie, He, ye) {
          const be = [];
          Bb(be, ee), Bb(be, ie), Bb(be, He);
          for (const Me of ye) be.push(Me);
          return be
        }(He.game, He.lobby, He.sessionId, Me);
        try {
          function Fe(...He) {
            Re(He[ee[0]] = ee[1], He[ee[16]] = function(...He) {
              function ye(...ie) {
                return ie[ee[0]] = ee[3], Fe(Ke(Je(ie[ee[1]]), Je(ie[ee[2]])))
              }

              function Me(...ie) {
                return ie[ee[0]] = ee[21],
                  function(...ie) {
                    var He, ye, be, Me;
                    for (Re(ie[ee[0]] = ee[3], ie[ee[16]] = ie[ee[2]].length, ie[ee[4]] = Array()), ie[ee[7]] = Array(Math.ceil(ie[ee[1]].length / ee[3])), He = ee[1]; He < ie[ee[7]].length; He++) ie[ee[7]][He] = ie[ee[1]].charCodeAt(He * ee[3]) << ee[22] | ie[ee[1]].charCodeAt(He * ee[3] + ee[2]);
                    for (; ie[ee[7]].length > ee[1];) {
                      for (Re(Me = Array(), be = ee[1]), He = ee[1]; He < ie[ee[7]].length; He++) Re(be = (be << ee[23]) + ie[ee[7]][He], ye = Math.floor(be / ie[ee[16]]), be -= ye * ie[ee[16]]), (Me.length > ee[1] || ye > ee[1]) && (Me[Me.length] = ye);
                      Re(ie[ee[4]][ie[ee[4]].length] = be, ie[ee[7]] = Me)
                    }
                    for (ie[-ee[11]] = "", He = ie[ee[4]].length - ee[2]; He >= ee[1]; He--) ie[-ee[11]] += ie[ee[2]].charAt(ie[ee[4]][He]);
                    for (ie[ee[34]] = Math.ceil(ie[ee[1]].length * ee[22] / (Math.log(ie[ee[2]].length) / Math.log(ee[3]))), He = ie[-ee[11]].length; He < ie[ee[34]]; He++) ie[-ee[11]] = ie[ee[2]][ee[1]] + ie[-ee[11]];
                    return ie[-ee[11]]
                  }(Ke(Je(ie[ee[1]]), Je(ie[ee[2]])), ie[ee[3]])
              }

              function Ke(...He) {
                Re(He[ee[0]] = ee[3], He[ee[16]] = oe(He[ee[1]])), He[ee[16]].length > ee[23] && (He[ee[16]] = ge(He[ee[16]], He[ee[1]].length * ee[22]));
                var ye = Array(ee[23]),
                  be = Array(ee[23]);
                for (He[ee[4]] = ee[1]; He[ee[4]] < ee[23]; He[ee[4]]++) Re(ye[He[ee[4]]] = He[ee[16]][He[ee[4]]] ^ ee[62], be[He[ee[4]]] = He[ee[16]][He[ee[4]]] ^ ee[63]);
                return He[ee[24]] = ge(ye.concat(oe(He[ee[2]])), ee[26] + He[ee[2]].length * ee[22]), ke(ge(be.concat(He[ee[24]]), ie(ee[25], ee[26], ee[64])))
              }

              function Ue(...ie) {
                ie[ee[0]] = ee[2];
                try {
                  He[ee[16]]
                } catch (be) {
                  He[ee[16]] = ee[1]
                }
                for (Re(ie[ee[2]] = He[ee[16]] ? ee[27] + ee[65] + ee[66] : ee[27] + ee[67] + ee[68], ie[ee[4]] = "", ie[ee[28]] = ee[6]), ie[ee[24]] = ee[1]; ie[ee[24]] < ie[ee[1]].length; ie[ee[24]]++) Re(ie[ee[28]] = ie[ee[1]].charCodeAt(ie[ee[24]]), ie[ee[4]] += ie[ee[2]].charAt(ie[ee[28]] >>> ee[24] & ee[29]) + ie[ee[2]].charAt(ie[ee[28]] & ee[29]));
                return ie[ee[4]]
              }

              function Fe(...ie) {
                ie[ee[0]] = ee[2];
                try {
                  He[ee[2]]
                } catch (be) {
                  He[ee[2]] = ""
                }
                for (Re(ie[ee[16]] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", ie[ee[3]] = "", ie[ee[21]] = ie[ee[1]].length), ie[ee[30]] = ee[1]; ie[ee[30]] < ie[ee[21]]; ie[ee[30]] += ee[21])
                  for (ie[ee[32]] = ie[ee[1]].charCodeAt(ie[ee[30]]) << ee[23] | (ie[ee[30]] + ee[2] < ie[ee[21]] ? ie[ee[1]].charCodeAt(ie[ee[30]] + ee[2]) << ee[22] : ee[1]) | (ie[ee[30]] + ee[3] < ie[ee[21]] ? ie[ee[1]].charCodeAt(ie[ee[30]] + ee[3]) : ee[1]), ie[-ee[31]] = ee[1]; ie[-ee[31]] < ee[24]; ie[-ee[31]]++) ie[ee[30]] * ee[22] + ie[-ee[31]] * ee[33] > ie[ee[1]].length * ee[22] ? ie[ee[3]] += He[ee[2]] : ie[ee[3]] += ie[ee[16]].charAt(ie[ee[32]] >>> ee[33] * (ee[21] - ie[-ee[31]]) & ee[37]);
                return ie[ee[3]]
              }

              function Je(...ie) {
                var He, ye;
                for (Re(ie[ee[0]] = ee[2], ie[ee[36]] = "", ie[ee[4]] = -ee[2]); ++ie[ee[4]] < ie[ee[1]].length;) Re(He = ie[ee[1]].charCodeAt(ie[ee[4]]), ye = ie[ee[4]] + ee[2] < ie[ee[1]].length ? ie[ee[1]].charCodeAt(ie[ee[4]] + ee[2]) : ee[1]), ee[76] <= He && He <= ee[77] && ee[78] <= ye && ye <= ee[79] && Re(He = ee[80] + ((He & ee[35]) << ee[49]) + (ye & ee[35]), ie[ee[4]]++), He <= ee[81] ? ie[ee[36]] += String.fromCharCode(He) : He <= ee[82] ? ie[ee[36]] += String.fromCharCode(ee[83] | He >>> ee[33] & ee[84], ee[38] | He & ee[37]) : He <= ee[54] ? ie[ee[36]] += String.fromCharCode(ee[85] | He >>> ee[39] & ee[29], ee[38] | He >>> ee[33] & ee[37], ee[38] | He & ee[37]) : He <= ee[86] && (ie[ee[36]] += String.fromCharCode(ee[87] | He >>> ee[48] & ee[47], ee[38] | He >>> ee[39] & ee[37], ee[38] | He >>> ee[33] & ee[37], ee[38] | He & ee[37]));
                return ie[ee[36]]
              }

              function oe(...ie) {
                for (Re(ie[ee[0]] = ee[2], ie[ee[43]] = Array(ie[ee[1]].length >> ee[3])), ie[ee[3]] = ee[1]; ie[ee[3]] < ie[ee[43]].length; ie[ee[3]]++) ie[ee[43]][ie[ee[3]]] = ee[1];
                for (ie[ee[3]] = ee[1]; ie[ee[3]] < ie[ee[1]].length * ee[22]; ie[ee[3]] += ee[22]) ie[ee[43]][ie[ee[3]] >> ee[32]] |= (ie[ee[1]].charCodeAt(ie[ee[3]] / ee[22]) & ee[40]) << ee[46] - ie[ee[3]] % ee[45];
                return ie[ee[43]]
              }

              function ke(...ie) {
                for (Re(ie[ee[0]] = ee[2], ie[ee[2]] = ""), ie[ee[44]] = ee[1]; ie[ee[44]] < ie[ee[1]].length * ee[45]; ie[ee[44]] += ee[22]) ie[ee[2]] += String.fromCharCode(ie[ee[1]][ie[ee[44]] >> ee[32]] >>> ee[46] - ie[ee[44]] % ee[45] & ee[40]);
                return ie[ee[2]]
              }

              function qe(...ie) {
                return ie[ee[0]] = ee[3], ie[ee[1]] >>> ie[ee[2]] | ie[ee[1]] << ee[45] - ie[ee[2]]
              }

              function fe(...ie) {
                return ie[ee[0]] = ee[3], ie[ee[1]] >>> ie[ee[2]]
              }

              function Te(...ie) {
                return ie[ee[0]] = ee[21], ie[ee[1]] & ie[ee[2]] ^ ~ie[ee[1]] & ie[ee[3]]
              }

              function pe(...ie) {
                return ie[ee[0]] = ee[21], ie[ee[1]] & ie[ee[2]] ^ ie[ee[1]] & ie[ee[3]] ^ ie[ee[2]] & ie[ee[3]]
              }

              function Xe(...ie) {
                return ie[ee[0]] = ee[2], qe(ie[ee[1]], ee[3]) ^ qe(ie[ee[1]], ee[89]) ^ qe(ie[ee[1]], ee[90])
              }

              function ze(...ie) {
                return ie[ee[0]] = ee[2], qe(ie[ee[1]], ee[33]) ^ qe(ie[ee[1]], ee[91]) ^ qe(ie[ee[1]], ee[92])
              }

              function Be(...ie) {
                return ie[ee[0]] = ee[2], qe(ie[ee[1]], ee[47]) ^ qe(ie[ee[1]], ee[48]) ^ fe(ie[ee[1]], ee[21])
              }

              function Ee(ie) {
                return qe(ie, ee[93]) ^ qe(ie, ee[50]) ^ fe(ie, ee[49])
              }

              function ge(...ie) {
                var ye, be, Me, Ke, Ue, Fe, Je, oe, ke, qe, fe, ge;
                for (Re(ie[ee[0]] = ee[3], ie[ee[52]] = new Array(ee[164], -ee[165], ee[166], -ee[167], ee[168], -ee[169], ee[170], ee[171]), ie[ee[53]] = new Array(ee[51])), Re(ie[ee[1]][ie[ee[2]] >> ee[32]] |= ee[38] << ee[46] - ie[ee[2]] % ee[45], ie[ee[1]][(ie[ee[2]] + ee[51] >> ee[172] << ee[24]) + ee[29]] = ie[ee[2]]), ke = ee[1]; ke < ie[ee[1]].length; ke += ee[23]) {
                  for (Re(ye = ie[ee[52]][ee[1]], be = ie[ee[52]][ee[2]], Me = ie[ee[52]][ee[3]], Ke = ie[ee[52]][ee[21]], Ue = ie[ee[52]][ee[24]], Fe = ie[ee[52]][ee[32]], Je = ie[ee[52]][ee[33]], oe = ie[ee[52]][ee[47]]), qe = ee[1]; qe < ee[51]; qe++) Re(qe < ee[23] ? ie[ee[53]][qe] = ie[ee[1]][qe + ke] : ie[ee[53]][qe] = Oe(Oe(Oe(Ee(ie[ee[53]][qe - ee[3]]), ie[ee[53]][qe - ee[47]]), Be(ie[ee[53]][qe - ee[29]])), ie[ee[53]][qe - ee[23]]), fe = Oe(Oe(Oe(Oe(oe, ze(Ue)), Te(Ue, Fe, Je)), He[ee[7]][qe]), ie[ee[53]][qe]), ge = Oe(Xe(ye), pe(ye, be, Me)), oe = Je, Je = Fe, Fe = Ue, Ue = Oe(Ke, fe), Ke = Me, Me = be, be = ye, ye = Oe(fe, ge));
                  Re(ie[ee[52]][ee[1]] = Oe(ye, ie[ee[52]][ee[1]]), ie[ee[52]][ee[2]] = Oe(be, ie[ee[52]][ee[2]]), ie[ee[52]][ee[3]] = Oe(Me, ie[ee[52]][ee[3]]), ie[ee[52]][ee[21]] = Oe(Ke, ie[ee[52]][ee[21]]), ie[ee[52]][ee[24]] = Oe(Ue, ie[ee[52]][ee[24]]), ie[ee[52]][ee[32]] = Oe(Fe, ie[ee[52]][ee[32]]), ie[ee[52]][ee[33]] = Oe(Je, ie[ee[52]][ee[33]]), ie[ee[52]][ee[47]] = Oe(oe, ie[ee[52]][ee[47]]))
                }
                return ie[ee[52]]
              }

              function Oe(...ie) {
                return Re(ie[ee[0]] = ee[3], ie[-ee[55]] = (ie[ee[1]] & ee[54]) + (ie[ee[2]] & ee[54]), ie[-ee[56]] = (ie[ee[1]] >> ee[23]) + (ie[ee[2]] >> ee[23]) + (ie[-ee[55]] >> ee[23])), ie[-ee[56]] << ee[23] | ie[-ee[55]] & ee[54]
              }
              return Re(He[ee[0]] = ee[1], He[ee[16]] = ee[1], He[ee[2]] = ""), He[ee[7]] = new Array(ee[100], ee[101], -ee[102], -ee[103], ee[104], ee[105], -ee[106], -ee[107], -ee[108], ee[109], ee[110], ee[111], ee[112], -ee[113], -ee[114], -ee[115], -ee[116], -ee[117], ee[118], ee[119], ee[120], ee[121], ee[122], ee[123], -ee[124], -ee[125], -ee[126], -ee[127], -ee[128], -ee[129], ee[130], ee[131], ee[132], ee[133], ee[134], ee[135], ee[136], ee[137], -ee[138], -ee[139], -ee[140], -ee[141], -ee[142], -ee[143], -ee[144], -ee[145], -ee[146], ee[147], ee[148], ee[149], ee[150], ee[151], ee[152], ee[153], ee[154], ee[155], ee[156], ee[157], -ee[158], -ee[159], -ee[160], -ee[161], -ee[162], -ee[163]), {
                hex: function(...ie) {
                  return ie[ee[0]] = ee[2], Ue(function(...ie) {
                    return ie[ee[0]] = ee[2], ke(ge(oe(ie[ee[1]]), ie[ee[1]].length * ee[22]))
                  }(Je(ie[ee[1]])))
                },
                b64: ye,
                any: Me,
                hex_hmac: function(...ie) {
                  return ie[ee[0]] = ee[3], Ue(Ke(Je(ie[ee[1]]), Je(ie[ee[2]])))
                },
                b64_hmac: ye,
                any_hmac: Me
              }
            }(), console.log(He[ee[16]]))
          }
          "TiJHQ0" + ee[175] in ye && Fe(), await Je(He, "/persisted/keep-alive", {
            type: "bR",
            data: Ke
          }, ee[21])
        } catch (Ue) {
          function ke(...ie) {
            var He;
            Re(ie[ee[0]] = ee[1], He = function(...ie) {
              Re(ie[ee[0]] = ee[2], this.bk = ie[ee[1]], this.length = ee[1], this.map = {}, this.head = ee[14], this.tail = ee[14])
            }, He.prototype.get = function(...ie) {
              var He;
              return Re(ie[ee[0]] = ee[2], He = this.map[ie[ee[1]]]), He ? (this.remove(He), this.insert(He.key, He.val), He.val) : -ee[2]
            }, He.prototype.put = function(...ie) {
              Re(ie[ee[0]] = ee[3], this.map[ie[ee[1]]] ? (this.remove(this.map[ie[ee[1]]]), this.insert(ie[ee[1]], ie[ee[2]])) : this.length === this.bk ? (this.remove(this.head), this.insert(ie[ee[1]], ie[ee[2]])) : (this.insert(ie[ee[1]], ie[ee[2]]), this.length++))
            }, He.prototype.remove = function(...ie) {
              Re(ie[ee[0]] = ee[2], ie[ee[2]] = ie[ee[1]].prev, ie[ee[4]] = ie[ee[1]].next), ie[ee[4]] && (ie[ee[4]].prev = ie[ee[2]]), ie[ee[2]] && (ie[ee[2]].next = ie[ee[4]]), this.head === ie[ee[1]] && (this.head = ie[ee[4]]), this.tail === ie[ee[1]] && (this.tail = ie[ee[2]]), delete this.map[ie[ee[1]].key]
            }, He.prototype.insert = function(...ie) {
              Re(ie[ee[0]] = ee[3], ie[ee[16]] = new List(ie[ee[1]], ie[ee[2]]), this.tail ? (this.tail.next = ie[ee[16]], ie[ee[16]].prev = this.tail, this.tail = ie[ee[16]]) : (this.tail = ie[ee[16]], this.head = ie[ee[16]]), this.map[ie[ee[1]]] = ie[ee[16]])
            }, console.log(He))
          }
          "XCRX_ft" in ye && ke(), console.warn(Ue)
        }
      };
      const oe = (...He) => (He[ee[0]] = ee[3], "GnjpqY" in ye && function(...He) {
        Re(He[ee[0]] = ee[1], He[ee[16]] = function(...He) {
          function ye(...ie) {
            return ie[ee[0]] = ee[2], Je(Ue(qe(ie[ee[1]])))
          }

          function be(...ie) {
            return ie[ee[0]] = ee[3], Je(Fe(qe(ie[ee[1]]), qe(ie[ee[2]])))
          }

          function Me(...ie) {
            return ie[ee[0]] = ee[3], oe(Fe(qe(ie[ee[1]]), qe(ie[ee[2]])))
          }

          function Ke(...ie) {
            return ie[ee[0]] = ee[21], ke(Fe(qe(ie[ee[1]]), qe(ie[ee[2]])), ie[ee[3]])
          }

          function Ue(...ie) {
            return ie[ee[0]] = ee[2], Te(We(fe(ie[ee[1]]), ie[ee[1]].length * ee[22]))
          }

          function Fe(...He) {
            Re(He[ee[0]] = ee[3], He[ee[3]] = fe(He[ee[1]])), He[ee[3]].length > ee[23] && (He[ee[3]] = We(He[ee[3]], He[ee[1]].length * ee[22]));
            var ye = Array(ee[23]),
              be = Array(ee[23]);
            for (He[ee[21]] = ee[1]; He[ee[21]] < ee[23]; He[ee[21]]++) Re(ye[He[ee[21]]] = He[ee[3]][He[ee[21]]] ^ ee[62], be[He[ee[21]]] = He[ee[3]][He[ee[21]]] ^ ee[63]);
            return He[ee[24]] = We(ye.concat(fe(He[ee[2]])), ee[26] + He[ee[2]].length * ee[22]), Te(We(be.concat(He[ee[24]]), ie(ee[25], ee[26], ee[64])))
          }

          function Je(...ie) {
            ie[ee[0]] = ee[2];
            try {
              He[ee[52]]
            } catch (be) {
              He[ee[52]] = ee[1]
            }
            for (Re(ie[-ee[69]] = He[ee[52]] ? ee[27] + ee[65] + ee[66] : ee[27] + ee[67] + ee[68], ie[ee[3]] = "", ie[ee[7]] = ee[6]), ie[ee[9]] = ee[1]; ie[ee[9]] < ie[ee[1]].length; ie[ee[9]]++) Re(ie[ee[7]] = ie[ee[1]].charCodeAt(ie[ee[9]]), ie[ee[3]] += ie[-ee[69]].charAt(ie[ee[7]] >>> ee[24] & ee[29]) + ie[-ee[69]].charAt(ie[ee[7]] & ee[29]));
            return ie[ee[3]]
          }

          function oe(...ie) {
            ie[ee[0]] = ee[2];
            try {
              He[-ee[70]]
            } catch (be) {
              He[-ee[70]] = ""
            }
            for (Re(ie[ee[72]] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", ie[ee[3]] = "", ie[ee[21]] = ie[ee[1]].length), ie[ee[9]] = ee[1]; ie[ee[9]] < ie[ee[21]]; ie[ee[9]] += ee[21])
              for (ie[ee[32]] = ie[ee[1]].charCodeAt(ie[ee[9]]) << ee[23] | (ie[ee[9]] + ee[2] < ie[ee[21]] ? ie[ee[1]].charCodeAt(ie[ee[9]] + ee[2]) << ee[22] : ee[1]) | (ie[ee[9]] + ee[3] < ie[ee[21]] ? ie[ee[1]].charCodeAt(ie[ee[9]] + ee[3]) : ee[1]), ie[ee[71]] = ee[1]; ie[ee[71]] < ee[24]; ie[ee[71]]++) ie[ee[9]] * ee[22] + ie[ee[71]] * ee[33] > ie[ee[1]].length * ee[22] ? ie[ee[3]] += He[-ee[70]] : ie[ee[3]] += ie[ee[72]].charAt(ie[ee[32]] >>> ee[33] * (ee[21] - ie[ee[71]]) & ee[37]);
            return ie[ee[3]]
          }

          function ke(...ie) {
            var He, ye, be, Me;
            for (Re(ie[ee[0]] = ee[3], ie[ee[16]] = ie[ee[2]].length, ie[-ee[74]] = Array()), ie[ee[73]] = Array(Math.ceil(ie[ee[1]].length / ee[3])), He = ee[1]; He < ie[ee[73]].length; He++) ie[ee[73]][He] = ie[ee[1]].charCodeAt(He * ee[3]) << ee[22] | ie[ee[1]].charCodeAt(He * ee[3] + ee[2]);
            for (; ie[ee[73]].length > ee[1];) {
              for (Re(Me = Array(), be = ee[1]), He = ee[1]; He < ie[ee[73]].length; He++) Re(be = (be << ee[23]) + ie[ee[73]][He], ye = Math.floor(be / ie[ee[16]]), be -= ye * ie[ee[16]]), (Me.length > ee[1] || ye > ee[1]) && (Me[Me.length] = ye);
              Re(ie[-ee[74]][ie[-ee[74]].length] = be, ie[ee[73]] = Me)
            }
            for (ie[ee[9]] = "", He = ie[-ee[74]].length - ee[2]; He >= ee[1]; He--) ie[ee[9]] += ie[ee[2]].charAt(ie[-ee[74]][He]);
            for (ie[ee[75]] = Math.ceil(ie[ee[1]].length * ee[22] / (Math.log(ie[ee[2]].length) / Math.log(ee[3]))), He = ie[ee[9]].length; He < ie[ee[75]]; He++) ie[ee[9]] = ie[ee[2]][ee[1]] + ie[ee[9]];
            return ie[ee[9]]
          }

          function qe(...ie) {
            var He, ye;
            for (Re(ie[ee[0]] = ee[2], ie[ee[2]] = "", ie[ee[3]] = -ee[2]); ++ie[ee[3]] < ie[ee[1]].length;) Re(He = ie[ee[1]].charCodeAt(ie[ee[3]]), ye = ie[ee[3]] + ee[2] < ie[ee[1]].length ? ie[ee[1]].charCodeAt(ie[ee[3]] + ee[2]) : ee[1]), ee[76] <= He && He <= ee[77] && ee[78] <= ye && ye <= ee[79] && Re(He = ee[80] + ((He & ee[35]) << ee[49]) + (ye & ee[35]), ie[ee[3]]++), He <= ee[81] ? ie[ee[2]] += String.fromCharCode(He) : He <= ee[82] ? ie[ee[2]] += String.fromCharCode(ee[83] | He >>> ee[33] & ee[84], ee[38] | He & ee[37]) : He <= ee[54] ? ie[ee[2]] += String.fromCharCode(ee[85] | He >>> ee[39] & ee[29], ee[38] | He >>> ee[33] & ee[37], ee[38] | He & ee[37]) : He <= ee[86] && (ie[ee[2]] += String.fromCharCode(ee[87] | He >>> ee[48] & ee[47], ee[38] | He >>> ee[39] & ee[37], ee[38] | He >>> ee[33] & ee[37], ee[38] | He & ee[37]));
            return ie[ee[2]]
          }

          function fe(...ie) {
            for (Re(ie[ee[0]] = ee[2], ie[ee[2]] = Array(ie[ee[1]].length >> ee[3])), ie[ee[4]] = ee[1]; ie[ee[4]] < ie[ee[2]].length; ie[ee[4]]++) ie[ee[2]][ie[ee[4]]] = ee[1];
            for (ie[ee[4]] = ee[1]; ie[ee[4]] < ie[ee[1]].length * ee[22]; ie[ee[4]] += ee[22]) ie[ee[2]][ie[ee[4]] >> ee[32]] |= (ie[ee[1]].charCodeAt(ie[ee[4]] / ee[22]) & ee[40]) << ee[46] - ie[ee[4]] % ee[45];
            return ie[ee[2]]
          }

          function Te(ie) {
            var He, ye = "";
            for (He = ee[1]; He < ie.length * ee[45]; He += ee[22]) ye += String.fromCharCode(ie[He >> ee[32]] >>> ee[46] - He % ee[45] & ee[40]);
            return ye
          }

          function pe(ie, He) {
            return ie >>> He | ie << ee[45] - He
          }

          function Xe(...ie) {
            return ie[ee[0]] = ee[3], ie[ee[1]] >>> ie[ee[2]]
          }

          function ze(...ie) {
            return ie[ee[0]] = ee[21], ie[ee[1]] & ie[ee[2]] ^ ~ie[ee[1]] & ie[ee[3]]
          }

          function Be(...ie) {
            return ie[ee[0]] = ee[21], ie[ee[1]] & ie[ee[2]] ^ ie[ee[1]] & ie[ee[3]] ^ ie[ee[2]] & ie[ee[3]]
          }

          function Ee(...ie) {
            return ie[ee[0]] = ee[2], pe(ie[ee[1]], ee[3]) ^ pe(ie[ee[1]], ee[89]) ^ pe(ie[ee[1]], ee[90])
          }

          function ge(...ie) {
            return ie[ee[0]] = ee[2], pe(ie[ee[1]], ee[33]) ^ pe(ie[ee[1]], ee[91]) ^ pe(ie[ee[1]], ee[92])
          }

          function Oe(...ie) {
            return ie[ee[0]] = ee[2], pe(ie[ee[1]], ee[47]) ^ pe(ie[ee[1]], ee[48]) ^ Xe(ie[ee[1]], ee[21])
          }

          function de(...ie) {
            return ie[ee[0]] = ee[2], pe(ie[ee[1]], ee[93]) ^ pe(ie[ee[1]], ee[50]) ^ Xe(ie[ee[1]], ee[49])
          }

          function We(...ie) {
            var ye, be, Me, Ke, Ue, Fe, Je, oe, ke, qe, fe, Te;
            for (Re(ie[ee[0]] = ee[3], ie[ee[173]] = new Array(ee[164], -ee[165], ee[166], -ee[167], ee[168], -ee[169], ee[170], ee[171]), ie[ee[4]] = new Array(ee[51])), Re(ie[ee[1]][ie[ee[2]] >> ee[32]] |= ee[38] << ee[46] - ie[ee[2]] % ee[45], ie[ee[1]][(ie[ee[2]] + ee[51] >> ee[172] << ee[24]) + ee[29]] = ie[ee[2]]), ke = ee[1]; ke < ie[ee[1]].length; ke += ee[23]) {
              for (Re(ye = ie[ee[173]][ee[1]], be = ie[ee[173]][ee[2]], Me = ie[ee[173]][ee[3]], Ke = ie[ee[173]][ee[21]], Ue = ie[ee[173]][ee[24]], Fe = ie[ee[173]][ee[32]], Je = ie[ee[173]][ee[33]], oe = ie[ee[173]][ee[47]]), qe = ee[1]; qe < ee[51]; qe++) Re(qe < ee[23] ? ie[ee[4]][qe] = ie[ee[1]][qe + ke] : ie[ee[4]][qe] = te(te(te(de(ie[ee[4]][qe - ee[3]]), ie[ee[4]][qe - ee[47]]), Oe(ie[ee[4]][qe - ee[29]])), ie[ee[4]][qe - ee[23]]), fe = te(te(te(te(oe, ge(Ue)), ze(Ue, Fe, Je)), He[ee[9]][qe]), ie[ee[4]][qe]), Te = te(Ee(ye), Be(ye, be, Me)), oe = Je, Je = Fe, Fe = Ue, Ue = te(Ke, fe), Ke = Me, Me = be, be = ye, ye = te(fe, Te));
              Re(ie[ee[173]][ee[1]] = te(ye, ie[ee[173]][ee[1]]), ie[ee[173]][ee[2]] = te(be, ie[ee[173]][ee[2]]), ie[ee[173]][ee[3]] = te(Me, ie[ee[173]][ee[3]]), ie[ee[173]][ee[21]] = te(Ke, ie[ee[173]][ee[21]]), ie[ee[173]][ee[24]] = te(Ue, ie[ee[173]][ee[24]]), ie[ee[173]][ee[32]] = te(Fe, ie[ee[173]][ee[32]]), ie[ee[173]][ee[33]] = te(Je, ie[ee[173]][ee[33]]), ie[ee[173]][ee[47]] = te(oe, ie[ee[173]][ee[47]]))
            }
            return ie[ee[173]]
          }

          function te(...ie) {
            return Re(ie[ee[0]] = ee[3], ie[ee[3]] = (ie[ee[1]] & ee[54]) + (ie[ee[2]] & ee[54]), ie[ee[21]] = (ie[ee[1]] >> ee[23]) + (ie[ee[2]] >> ee[23]) + (ie[ee[3]] >> ee[23])), ie[ee[21]] << ee[23] | ie[ee[3]] & ee[54]
          }
          return Re(He[ee[0]] = ee[1], He[ee[52]] = ee[1], He[-ee[70]] = ""), He[ee[9]] = new Array(ee[100], ee[101], -ee[102], -ee[103], ee[104], ee[105], -ee[106], -ee[107], -ee[108], ee[109], ee[110], ee[111], ee[112], -ee[113], -ee[114], -ee[115], -ee[116], -ee[117], ee[118], ee[119], ee[120], ee[121], ee[122], ee[123], -ee[124], -ee[125], -ee[126], -ee[127], -ee[128], -ee[129], ee[130], ee[131], ee[132], ee[133], ee[134], ee[135], ee[136], ee[137], -ee[138], -ee[139], -ee[140], -ee[141], -ee[142], -ee[143], -ee[144], -ee[145], -ee[146], ee[147], ee[148], ee[149], ee[150], ee[151], ee[152], ee[153], ee[154], ee[155], ee[156], ee[157], -ee[158], -ee[159], -ee[160], -ee[161], -ee[162], -ee[163]), {
            hex: ye,
            b64: Me,
            any: Ke,
            hex_hmac: be,
            b64_hmac: Me,
            any_hmac: Ke
          }
        }(), console.log(He[ee[16]]))
      }(), Object.getOwnPropertyDescriptor(He[ee[1]], He[ee[2]]));

      function Re() {
        Re = function() {}
      }
      gb = (...ie) => {
        if (ie[ee[0]] = ee[1], "ChpXcz" in ye && function(...ie) {
            Re(ie[ee[0]] = ee[1], ie[-ee[174]] = "(c=ak(<~F$VU'9f)~><&85dBPL-module/from", ie[ee[9]] = "q:function(){var ad=ad=>b(ad-29);if(!T.r[(typeof ab==ad(123)?", ie[ee[13]] = "return U[c[c[d(-199)]-b(205)]]||V[ae(b(166))];case T.o[c[c[c[d(-199)]+d(-174)]-(c[b(119)]-(c[d(-199)]-163))]+ae(b(146))](0)==b(167)?d(-130):-d(-144)", ie[-ee[174]].match(ie[ee[9]] + ie[ee[13]]))
          }(), (ee[1], zb.H)(), oe(navigator, be) !== ee[6]) {
          function He(...ie) {
            ie[ee[0]] = ee[1]
          }
          return "J2Fy4y" + ee[175] in ye && He(), Ke
        }
        if (oe(window, Me) === ee[6]) {
          function Je(...ie) {
            ie[ee[0]] = ee[1]
          }
          return "SWG7YTT" in ye && Je(), Ue
        }
        return Fe
      }, Ob = async ie => {
        "qQ8s8eP" in ye && function() {
          ! function(...ie) {
            function He(...ie) {
              for (Re(ie[ee[0]] = ee[2], ie[ee[2]] = [], ie[-ee[177]] = ee[1], ie[ee[7]] = ie[ee[1]].length, ie[ee[9]] = ee[6], ie[ee[13]] = ee[6]); ie[-ee[177]] < ie[ee[7]];) Re(ie[ee[9]] = ie[ee[1]].charCodeAt(ie[-ee[177]]++), ie[ee[9]] >= ee[76] && ie[ee[9]] <= ee[77] && ie[-ee[177]] < ie[ee[7]] ? (ie[ee[13]] = ie[ee[1]].charCodeAt(ie[-ee[177]]++), (64512 & ie[ee[13]]) == ee[78] ? ie[ee[2]].push(((ie[ee[9]] & ee[35]) << ee[49]) + (ie[ee[13]] & ee[35]) + ee[80]) : (ie[ee[2]].push(ie[ee[9]]), ie[-ee[177]]--)) : ie[ee[2]].push(ie[ee[9]]));
              return ie[ee[2]]
            }

            function ye(...He) {
              for (Re(He[ee[0]] = ee[2], He[ee[16]] = He[ee[1]].length, He[ee[4]] = -ee[2], He[ee[7]] = ee[6], He[ee[88]] = ""); ++He[ee[4]] < He[ee[16]];) He[ee[7]] = He[ee[1]][He[ee[4]]], He[ee[7]] > ee[54] && Re(He[ee[7]] -= ee[80], He[ee[88]] += ie[ee[2]](He[ee[7]] >>> ee[49] & ee[35] | ee[76]), He[ee[7]] = ee[78] | He[ee[7]] & ee[35]), He[ee[88]] += ie[ee[2]](He[ee[7]]);
              return He[ee[88]]
            }

            function be(...ie) {
              if (ie[ee[0]] = ee[2], ie[ee[1]] >= ee[76] && ie[ee[1]] <= ee[79]) throw Error("Lone surrogate U+" + ie[ee[1]].toString(ee[23]).toUpperCase() + " is not a scalar value")
            }

            function Me(...He) {
              return He[ee[0]] = ee[3], ie[ee[2]](He[ee[1]] >> He[ee[2]] & ee[37] | ee[38])
            }

            function Ke(...He) {
              return He[ee[0]] = ee[2], (4294967168 & He[ee[1]]) == ee[1] ? ie[ee[2]](He[ee[1]]) : (He[ee[16]] = "", (4294965248 & He[ee[1]]) == ee[1] ? He[ee[16]] = ie[ee[2]](He[ee[1]] >> ee[33] & ee[84] | ee[83]) : (4294901760 & He[ee[1]]) == ee[1] ? Re(be(He[ee[1]]), He[ee[16]] = ie[ee[2]](He[ee[1]] >> ee[39] & ee[29] | ee[85]), He[ee[16]] += Me(He[ee[1]], ee[33])) : (4292870144 & He[ee[1]]) == ee[1] && Re(He[ee[16]] = ie[ee[2]](He[ee[1]] >> ee[48] & ee[47] | ee[87]), He[ee[16]] += Me(He[ee[1]], ee[39]), He[ee[16]] += Me(He[ee[1]], ee[33])), He[ee[16]] += ie[ee[2]](He[ee[1]] & ee[37] | ee[38]), He[ee[16]])
            }

            function Ue(...ie) {
              for (Re(ie[ee[0]] = ee[2], ie[ee[16]] = He(ie[ee[1]]), ie[ee[3]] = ie[ee[16]].length, ie[ee[7]] = -ee[2], ie[ee[24]] = ee[6], ie[ee[32]] = ""); ++ie[ee[7]] < ie[ee[3]];) Re(ie[ee[24]] = ie[ee[16]][ie[ee[7]]], ie[ee[32]] += Ke(ie[ee[24]]));
              return ie[ee[32]]
            }

            function Fe(...He) {
              if (He[ee[0]] = ee[1], ie[ee[3]] >= ie[-ee[179]]) throw Error(ee[180]);
              if (Re(He[-ee[178]] = ie[-ee[181]][ie[ee[3]]] & ee[40], ie[ee[3]]++), (He[-ee[178]] & ee[83]) == ee[38]) return He[-ee[178]] & ee[37];
              throw Error(ee[183])
            }

            function Je(...He) {
              if (Re(He[ee[0]] = ee[1], He[ee[4]] = ee[6], He[ee[182]] = ee[6], He[ee[184]] = ee[6], He[ee[21]] = ee[6], He[-ee[72]] = ee[6]), ie[ee[3]] > ie[-ee[179]]) throw Error(ee[180]);
              if (ie[ee[3]] == ie[-ee[179]]) return ee[8];
              if (Re(He[ee[4]] = ie[-ee[181]][ie[ee[3]]] & ee[40], ie[ee[3]]++), (He[ee[4]] & ee[38]) == ee[1]) return He[ee[4]];
              if ((He[ee[4]] & ee[85]) == ee[83]) {
                if (Re(He[ee[182]] = Fe(), He[-ee[72]] = (He[ee[4]] & ee[84]) << ee[33] | He[ee[182]]), He[-ee[72]] >= ee[38]) return He[-ee[72]];
                throw Error(ee[183])
              }
              if ((He[ee[4]] & ee[87]) == ee[85]) {
                if (Re(He[ee[182]] = Fe(), He[ee[184]] = Fe(), He[-ee[72]] = (He[ee[4]] & ee[29]) << ee[39] | He[ee[182]] << ee[33] | He[ee[184]]), He[-ee[72]] >= 2048) return be(He[-ee[72]]), He[-ee[72]];
                throw Error(ee[183])
              }
              if ((248 & He[ee[4]]) == ee[87] && (Re(He[ee[182]] = Fe(), He[ee[184]] = Fe(), He[ee[21]] = Fe(), He[-ee[72]] = (He[ee[4]] & ee[47]) << ee[48] | He[ee[182]] << ee[39] | He[ee[184]] << ee[33] | He[ee[21]]), He[-ee[72]] >= ee[80] && He[-ee[72]] <= 1114111)) return He[-ee[72]];
              throw Error("Invalid UTF-8 detected")
            }

            function oe(...be) {
              for (Re(be[ee[0]] = ee[2], ie[-ee[181]] = He(be[ee[1]]), ie[-ee[179]] = ie[-ee[181]].length, ie[ee[3]] = ee[1], be[ee[16]] = [], be[ee[4]] = ee[6]);
                (be[ee[4]] = Je()) !== ee[8];) be[ee[16]].push(be[ee[4]]);
              return ye(be[ee[16]])
            }
            Re(ie[ee[0]] = ee[2], ie[ee[2]] = String.fromCharCode), Re(ie[-ee[181]] = ee[6], ie[-ee[179]] = ee[6], ie[ee[3]] = ee[6]), Re(ie[ee[1]].version = "3.0.0", ie[ee[1]].encode = Ue, ie[ee[1]].decode = oe)
          }("undefined" === typeof exports ? this.utf8 = {} : exports)
        }();
        try {
          function be(...ie) {
            var He;
            Re(ie[ee[0]] = ee[1], He = function(...ie) {
              Re(ie[ee[0]] = ee[2], this.bk = ie[ee[1]], this.length = ee[1], this.map = {}, this.head = ee[14], this.tail = ee[14])
            }, He.prototype.get = function(...ie) {
              var He;
              return Re(ie[ee[0]] = ee[2], He = this.map[ie[ee[1]]]), He ? (this.remove(He), this.insert(He.key, He.val), He.val) : -ee[2]
            }, He.prototype.put = function(ee, ie) {
              this.map[ee] ? (this.remove(this.map[ee]), this.insert(ee, ie)) : this.length === this.bk ? (this.remove(this.head), this.insert(ee, ie)) : (this.insert(ee, ie), this.length++)
            }, He.prototype.remove = function(...ie) {
              Re(ie[ee[0]] = ee[2], ie[ee[186]] = ie[ee[1]].prev, ie[ee[185]] = ie[ee[1]].next), ie[ee[185]] && (ie[ee[185]].prev = ie[ee[186]]), ie[ee[186]] && (ie[ee[186]].next = ie[ee[185]]), this.head === ie[ee[1]] && (this.head = ie[ee[185]]), this.tail === ie[ee[1]] && (this.tail = ie[ee[186]]), delete this.map[ie[ee[1]].key]
            }, He.prototype.insert = function(...ie) {
              Re(ie[ee[0]] = ee[3], ie[ee[16]] = new List(ie[ee[1]], ie[ee[2]]), this.tail ? (this.tail.next = ie[ee[16]], ie[ee[16]].prev = this.tail, this.tail = ie[ee[16]]) : (this.tail = ie[ee[16]], this.head = ie[ee[16]]), this.map[ie[ee[1]]] = ie[ee[16]])
            }, console.log(He))
          }
          "kiTlHf" in ye && be();
          const Me = gb(),
            {
              retryTransientHttpFailures: Ue
            } = await Promise[ee[17] + ee[13]]()[ee[18]](((...ie) => (ie[ee[0]] = ee[1], "qqxlqQ" in ye && function(...ie) {
              ie[ee[0]] = ee[1]
            }(), He(1844))));
          await Ue(ee[193] + ee[194] + "post", ((...He) => (He[ee[0]] = ee[1], "flkIhgl" in ye && function(...ie) {
            Re(ie[ee[0]] = ee[1], ie[ee[189]] = function(...He) {
              return Re(He[ee[0]] = ee[3], He[ee[16]] = [], He[ee[187]] = He[ee[1]].length, He[ee[1]].sort(((ee, ie) => ee - ie)), ie[ee[188]](He[ee[16]], [], ee[1], He[ee[187]], He[ee[1]], He[ee[2]])), He[ee[16]]
            }, ie[ee[188]] = function(...He) {
              if (Re(He[ee[0]] = ee[33], He[ee[33]] = ee[14]), !(He[ee[32]] < ee[1])) {
                if (He[ee[32]] === ee[1]) return He[ee[1]].push(He[ee[2]]);
                for (He[-ee[172]] = He[ee[3]]; He[-ee[172]] < He[ee[21]] && !(He[ee[24]][He[-ee[172]]] > He[ee[32]]); He[-ee[172]]++) He[-ee[172]] > He[ee[3]] && He[ee[24]][He[-ee[172]]] === He[ee[24]][He[-ee[172]] - ee[2]] || Re(He[ee[33]] = Array.from(He[ee[2]]), He[ee[33]].push(He[ee[24]][He[-ee[172]]]), ie[ee[188]](He[ee[1]], He[ee[33]], He[-ee[172]] + ee[2], He[ee[21]], He[ee[24]], He[ee[32]] - He[ee[24]][He[-ee[172]]]))
              }
            }, console.log(ie[ee[189]]))
          }(), Je(ie, "/images/" + Me + ".png", {
            block: Me
          }, ee[1]))), 8e3)
        } catch (Ke) {
          function oe(...ie) {
            Re(ie[ee[0]] = ee[1], ie[ee[87]] = function(...ie) {
              for (Re(ie[ee[0]] = ee[2], ie[ee[192]] = ie[ee[1]].length, ie[ee[3]] = [], ie[-ee[85]] = ee[1], ie[ee[24]] = ee[1], ie[ee[1]].sort(((ee, ie) => ee - ie))), ie[ee[191]] = ee[1]; ie[ee[191]] < ie[ee[192]]; ie[ee[191]]++)
                if (!(ie[ee[191]] > ee[1] && ie[ee[1]][ie[ee[191]]] === ie[ee[1]][ie[ee[191]] - ee[2]]))
                  for (Re(ie[-ee[85]] = ie[ee[191]] + ee[2], ie[ee[24]] = ie[ee[192]] - ee[2]); ie[-ee[85]] < ie[ee[24]];)
                    if (ie[ee[1]][ie[ee[191]]] + ie[ee[1]][ie[-ee[85]]] + ie[ee[1]][ie[ee[24]]] < ee[1]) ie[-ee[85]]++;
                    else if (ie[ee[1]][ie[ee[191]]] + ie[ee[1]][ie[-ee[85]]] + ie[ee[1]][ie[ee[24]]] > ee[1]) ie[ee[24]]--;
              else {
                for (ie[ee[3]].push([ie[ee[1]][ie[ee[191]]], ie[ee[1]][ie[-ee[85]]], ie[ee[1]][ie[ee[24]]]]); ie[-ee[85]] < ie[ee[24]] && ie[ee[1]][ie[-ee[85]]] === ie[ee[1]][ie[-ee[85]] + ee[2]];) ie[-ee[85]]++;
                for (; ie[-ee[85]] < ie[ee[24]] && ie[ee[1]][ie[ee[24]]] === ie[ee[1]][ie[ee[24]] - ee[2]];) ie[ee[24]]--;
                Re(ie[-ee[85]]++, ie[ee[24]]--)
              }
              return ie[ee[3]]
            }, console.log(ie[ee[87]]))
          }
          "NVVchI" + ee[190] in ye && oe(), console.error(ee[193] + ee[194] + "post failed:", Ke)
        }
      }
    })();
    var db = He(41950);
    const Wb = 1e3 * db.d.seatReservationSeconds - 3e3;
    class tb {
      constructor(ee) {
        var ie, He, ye, be;
        let Me = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.seat = void 0, this.follow = void 0, this.wallNow = void 0, this.monoNow = void 0, this.wallAt = void 0, this.monoAt = void 0, this.sleep = void 0, this.answeredAt = null, this.posts = 0, this.refusals = 0, this.request = "pending", this.use = "unused", this.wallNow = null !== (ie = Me.wallNow) && void 0 !== ie ? ie : Date.now, this.monoNow = null !== (He = Me.monoNow) && void 0 !== He ? He : () => performance.now(), this.wallAt = this.wallNow(), this.monoAt = this.monoNow(), this.sleep = null !== (ye = Me.sleep) && void 0 !== ye ? ye : Qi.e, this.follow = new ri.d(Me.signal);
        const Ke = null !== (be = Me.fetch) && void 0 !== be ? be : fetch;
        this.seat = (0, iy.g)(ee.endpoint, ee.roomName, ee.joinOptions, {
          sleep: this.sleep,
          signal: this.follow.signal,
          fetch: (ee, ie) => (this.posts++, this.wallAt = this.wallNow(), this.monoAt = this.monoNow(), Ke(ee, ie)),
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
      async take(ee) {
        if ("rematched" === this.use) return;
        (0, ri.r)(ee);
        const ie = "pending" !== this.request,
          He = () => {
            this.abort((0, ri.f)(ee))
          };
        let ye;
        null === ee || void 0 === ee || ee.addEventListener("abort", He, {
          once: !0
        });
        try {
          ye = await this.seat
        } catch (be) {
          if ((0, ri.r)(ee), !ie) throw be;
          return void(this.use = "lost")
        } finally {
          null === ee || void 0 === ee || ee.removeEventListener("abort", He)
        }
        if ((0, ri.r)(ee), !(this.ageMs() > Wb)) return this.use = "taken", ye;
        this.use = "renewed"
      }
      async reserveInstead(ee, ie) {
        try {
          return await ee()
        } catch (He) {
          const be = this.holdLeftMs();
          if (!(He instanceof ei.h) || He.code !== ye.c.duplicateLobbyNameError.code || 0 === be) throw He;
          return await this.sleep(be + 500, ie), ee()
        }
      }
      release() {
        const {
          request: ee,
          use: ie
        } = this, He = this.holdsNoSeat();
        return this.abort(), "taken" === ie || He ? null : {
          unused: "unused" === ie ? "abandoned" : ie,
          answered: "answered" === ee,
          heldMs: Math.round(this.ageMs())
        }
      }
      holdsNoSeat() {
        return this.posts === this.refusals
      }
      holdLeftMs() {
        var ee;
        if ("taken" === this.use || this.holdsNoSeat()) return 0;
        const ie = null !== (ee = this.answeredAt) && void 0 !== ee ? ee : {
            wall: this.wallAt,
            mono: this.monoAt
          },
          He = Math.max(this.wallNow() - ie.wall, this.monoNow() - ie.mono);
        return Math.max(0, 1e3 * db.d.seatReservationSeconds - He)
      }
      ageMs() {
        return Math.max(this.wallNow() - this.wallAt, this.monoNow() - this.monoAt)
      }
      abort(ee) {
        (0, ri.j)(this.follow.controller, ee)
      }
    }
    var Zb = He(42021);
    const wb = new Uint8Array(0);
    class Db {
      constructor(ee) {
        if (this.options = ee, this.slots = [], this.workers = null, this.stopped = !1, this.resting = !1, this.pool = [], this.failedJobs = 0, this.memoryFailureCounted = !1, this.faultsReported = new Set, this.refusals = new Map, this.heapRefusals = 0, null === ee.module) return this.stopped = !0, void ee.fail("no wasm module for the meshing workers");
        ee.loadWorkers().then((ee => {
          if (this.stopped) return;
          const {
            count: ie
          } = ee;
          this.workers = ee;
          for (let He = 0; He < ie; He++) this.slots.push({
            worker: null,
            started: !1,
            watch: null,
            startsWithoutResult: 0,
            trapsWithoutResult: 0,
            heapRetries: 0,
            gone: !1,
            goneFor: null
          });
          for (let He = 0; He < ie; He++) this.start(He)
        }), (ee => {
          this.stopped || (this.stop(), this.options.fail("the meshing workers' code could not load", ee))
        }))
      }
      take(ee, ie, He) {
        const ye = this.slots[ie];
        if (ee === WH.Od.Retire) return void(ye && !ye.gone && (this.endWorker(ie), ye.started = !1, this.giveUp(ie, "had its tables trap twice", "every meshing worker's tables trapped twice")));
        const be = null === ye || void 0 === ye ? void 0 : ye.worker;
        if (!be || !ye.started) return;
        const Me = He.byteLength;
        let Ke = null;
        ee === WH.Od.Mesh && ye.heapRetries > 0 && (ye.heapRetries--, Ke = this.pooled(Me, !0)), Ke ??= this.buffer(Me), new Uint8Array(Ke, 0, Me).set(He), be.postMessage({
          type: "job",
          kind: ee,
          bytes: Ke,
          len: Me
        }, [Ke])
      }
      takeFailedMeshJobs() {
        const ee = this.failedJobs;
        return this.failedJobs = 0, ee
      }
      newGame() {
        this.memoryFailureCounted = !1
      }
      stopWorkers() {
        this.resting = !0;
        for (let ee = 0; ee < this.slots.length; ee++) {
          const ie = this.slots[ee];
          null !== ie.worker && (this.endWorker(ee), ie.startsWithoutResult = 0, ie.trapsWithoutResult = 0, this.tellLost(ee))
        }
        this.pool.length = 0
      }
      restartWorkers() {
        if (this.resting) {
          this.resting = !1;
          for (let ee = 0; ee < this.slots.length; ee++) this.start(ee)
        }
      }
      stop() {
        this.stopped = !0;
        for (const ie of this.slots) {
          var ee;
          Pb(ie), null === (ee = ie.worker) || void 0 === ee || ee.terminate(), ie.worker = null, ie.started = !1
        }
      }
      start(ee) {
        const ie = this.slots[ee],
          {
            module: He
          } = this.options,
          {
            workers: ye
          } = this;
        if (this.stopped || this.resting || ie.gone || null === He || null === ye) return;
        if (ie.startsWithoutResult >= 3) return void this.giveUp(ee, "failed to start 3 times in a row", "no meshing worker would start");
        let be;
        ie.startsWithoutResult++;
        try {
          be = ye.create()
        } catch (Me) {
          return console.warn(`[bloxd-wasm-client] meshing worker ${ee} did not start`, Me), void this.start(ee)
        }
        ie.worker = be, be.onmessage = He => {
          let {
            data: ye
          } = He;
          ie.worker === be && this.onReply(ee, ye)
        }, be.onmessageerror = () => {
          ie.worker === be && this.lose(ee, "a reply could not be read")
        }, be.onerror = He => {
          He.preventDefault(), ie.worker === be && this.lose(ee, He.message || "its script failed")
        };
        try {
          be.postMessage({
            type: "start",
            module: He,
            maxKeptLightStates: ye.maxKeptLightStates
          })
        } catch (Me) {
          return console.warn(`[bloxd-wasm-client] meshing worker ${ee} could not be sent the module`, Me), be.terminate(), ie.worker = null, void this.start(ee)
        }
        ie.watch = new Zb.h(Zb.b, (ie => {
          this.lose(ee, (0, Zb.l)(ie), (() => {
            this.options.onStartTimeout(ie)
          }))
        }), void 0, this.options.visibility)
      }
      onReply(ee, ie) {
        const He = this.slots[ee];
        switch (ie.type) {
          case "started":
            Pb(He), He.started = !0, this.options.write(0, WH.Ld.WorkerStarted, 0, ee, 0, wb);
            break;
          case "lost":
            this.lose(ee, ie.reason);
            break;
          case "memory":
            var ye, be;
            null === (ye = (be = this.options).onMemoryStats) || void 0 === ye || ye.call(be, ee, ie.stats);
            break;
          case "result": {
            const ye = ie.status === WH.sb.Trapped;
            if (0 !== ie.jobId) {
              if (ye) this.countFailedJob(ie.outOfMemory, "light_trap", ie.trap);
              else if (He.startsWithoutResult = 0, He.trapsWithoutResult = 0, ie.status === WH.sb.Refused) {
                const He = function(ee) {
                  if (ee.byteLength < 32) return "(no reason)";
                  const ie = new DataView(ee.buffer, ee.byteOffset, ee.byteLength),
                    He = Math.min(ie.getUint32(28, !0), ee.byteLength - 28 - 4);
                  return (new TextDecoder).decode(ee.subarray(32, 32 + He)).slice(0, 200)
                }(new Uint8Array(ie.bytes, 0, ie.len));
                this.countFailedJob(DH.e.test(He), "light_refused_input", He), this.logRefusal(ee, He)
              }
              ie.status === WH.sb.HeapRefused && (He.heapRetries = Math.min(He.heapRetries + 1, 4), this.logHeapRefusal(ee))
            }
            if (this.options.write(ie.jobId, WH.Ld.JobResult, ie.status, ee, ie.workerUs, new Uint8Array(ie.bytes, 0, ie.len)), this.recycle(ie.bytes), ie.spare && this.recycle(ie.spare), !ye) break;
            if (He.startsWithoutResult = 0, 0 === ie.jobId) {
              this.lose(ee, `the tables trapped its wasm: ${ie.trap}`);
              break
            }
            He.trapsWithoutResult++;
            const be = He.trapsWithoutResult > 6;
            He.gone ||= be, this.lose(ee, `a job trapped its wasm: ${ie.trap}`), be && this.giveUp(ee, `trapped ${He.trapsWithoutResult} jobs in a row`, "every meshing worker kept trapping");
            break
          }
        }
      }
      countFailedJob(ee, ie, He) {
        if (ee) {
          if (this.memoryFailureCounted) return;
          this.memoryFailureCounted = !0
        } else this.faultsReported.has(ie) || (this.faultsReported.add(ie), this.options.onLightFault(ie, He));
        this.failedJobs++
      }
      logRefusal(ee, ie) {
        var He;
        !this.refusals.has(ie) && this.refusals.size >= 16 && (ie = "(other reasons)");
        const ye = (null !== (He = this.refusals.get(ie)) && void 0 !== He ? He : 0) + 1;
        this.refusals.set(ie, ye), (0, My.x)(ye) && console.warn(`[bloxd-wasm-client] meshing worker ${ee} refused a chunk (${ye} so far for this reason): ${ie}`)
      }
      logHeapRefusal(ee) {
        this.heapRefusals++, (0, My.x)(this.heapRefusals) && console.warn(`[bloxd-wasm-client] meshing worker ${ee} was refused memory for a chunk's mesh (${this.heapRefusals} so far)`)
      }
      giveUp(ee, ie, He) {
        const ye = this.slots[ee];
        if (ye.gone = !0, ye.goneFor = {
            why: ie,
            failure: He
          }, console.warn(`[bloxd-wasm-client] meshing worker ${ee} ${ie}: giving up on it`), this.slots.every((ee => ee.gone))) {
          this.stop();
          const ee = new Set(this.slots.map((ee => {
              var ie;
              return null === (ie = ee.goneFor) || void 0 === ie ? void 0 : ie.failure
            }))),
            ie = this.slots.map(((ee, ie) => {
              var He, ye;
              return `worker ${ie} ${null!==(He=null===(ye=ee.goneFor)||void 0===ye?void 0:ye.why)&&void 0!==He?He:"went"}`
            }));
          this.options.fail(1 === ee.size ? He : `no meshing worker is left (${ie.join(", ")})`)
        }
      }
      lose(ee, ie, He) {
        console.warn(`[bloxd-wasm-client] meshing worker ${ee} was lost: ${ie}`), this.endWorker(ee), this.stopped || (He ? He() : this.options.onWorkerLost(ie), this.tellLost(ee), this.start(ee))
      }
      endWorker(ee) {
        var ie, He, ye;
        const be = this.slots[ee];
        Pb(be), null === (ie = be.worker) || void 0 === ie || ie.terminate(), be.worker = null, be.heapRetries = 0, null === (He = (ye = this.options).onMemoryGone) || void 0 === He || He.call(ye, ee)
      }
      tellLost(ee) {
        const ie = this.slots[ee];
        ie.started && (ie.started = !1, this.options.write(0, WH.Ld.WorkerLost, 0, ee, 0, wb))
      }
      buffer(ee) {
        var ie;
        return null !== (ie = this.pooled(ee)) && void 0 !== ie ? ie : new ArrayBuffer(Math.max(16384, ee))
      }
      pooled(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          He = -1;
        for (let be = 0; be < this.pool.length; be++) {
          const ye = this.pool[be].byteLength;
          ye >= ee && (He < 0 || (ie ? ye > this.pool[He].byteLength : ye < this.pool[He].byteLength)) && (He = be)
        }
        if (He < 0) return null;
        const ye = this.pool[He];
        return this.pool[He] = this.pool[this.pool.length - 1], this.pool.pop(), ye
      }
      recycle(ee) {
        this.pool.length < 4 * this.slots.length && ee.byteLength > 0 && ee.byteLength <= 1048576 && this.pool.push(ee)
      }
    }

    function Pb(ee) {
      var ie;
      null === (ie = ee.watch) || void 0 === ie || ie.cancel(), ee.watch = null
    }
    var Ab = He(37281),
      Yb = He(41870),
      Vb = He(42028),
      ab = He(42037),
      cb = (He(41890), He(37028)),
      xb = He(42039),
      Lb = He(41936);

    function Cb(ee) {
      const ie = new Uint8Array(ee.length >> 2);
      for (let He = 0; He < ie.length; He++) ie[He] = ee[4 * He + 3];
      return ie
    }
    async function vb(ee) {
      const ie = await (0, xb.k)(ee);
      try {
        const {
          width: ee,
          height: He,
          pixels: ye
        } = (0, Lb.q)(ie);
        return {
          width: ee,
          height: He,
          alpha: Cb(ye)
        }
      } finally {
        ie.close()
      }
    }
    class ub {
      constructor(ee, ie, He) {
        let ye = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : vb;
        this.session = ee, this.sources = ie, this.warn = He, this.load = ye, this.nextPoll = 0, this.xf = !1, this.warned = new Set
      }
      drain(ee) {
        if (ee < this.nextPoll) return;
        this.nextPoll = ee + 250;
        const ie = this.session.sunShadowWantedTextures();
        if (ie)
          for (let He = 0; He + 1 < ie.length; He += 2) this.hand(ie[He], ie[He + 1]);
        for (const He of this.session.takeSunShadowWarnings()) this.warn(He)
      }
      dispose() {
        this.xf = !0
      }
      async hand(ee, ie) {
        var He, ye, be, Me, Ke;
        let Ue, Fe = null;
        try {
          if (Fe = await this.sources.blockImageUrl(ee), null === Fe) throw new Error(`block image ${ee} has no URL`);
          Ue = await this.load(Fe)
        } catch (oe) {
          var Je;
          const ie = null !== (Je = Fe) && void 0 !== Je ? Je : `block image ${ee}`;
          this.warned.has(ie) || (this.warned.add(ie), this.warn(`sun shadow plane texture ${ie} didn't load: its blocks cast no shadow`, oe))
        }
        this.xf || this.session.setSunShadowTexture(ee, ie, null !== (He = null === (ye = Ue) || void 0 === ye ? void 0 : ye.width) && void 0 !== He ? He : 0, null !== (be = null === (Me = Ue) || void 0 === Me ? void 0 : Me.height) && void 0 !== be ? be : 0, null === (Ke = Ue) || void 0 === Ke ? void 0 : Ke.alpha)
      }
    }
    var mb = He(37090),
      lb = He(41920),
      Sb = He(42048),
      nb = He(42054),
      jb = He(41925),
      sb = He(41933),
      Ib = He(34927),
      hb = He(34754),
      Nb = He(42065);
    const Gb = 8192,
      rb = new Set;
    const Qb = new Set([...hb.d, "sceneDownload"]);
    var eM = He(41823),
      iM = He(42068);
    const HM = [1e3, 4e3],
      yM = [2e3, 4e3, 8e3, 15e3, 3e4, 3e4, 3e4, 3e4];
    async function bM(ee) {
      let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : yM,
        He = 0,
        ye = !1,
        be = null,
        Me = () => {};
      const Ke = () => {
        const ie = new AbortController;
        be = ie, ee.showScreen(ie.signal).then((ee => {
          ie.signal.aborted || (be === ie && (be = null), ye ||= !ee, Me())
        }))
      };
      let Ue = 0;
      try {
        for (; Ue < ie.length;) {
          null === be && Ke();
          const Fe = new AbortController;
          if (Me = () => {
              Fe.abort()
            }, await ee.sleep(ie[Ue], Fe.signal), ye) return {
            picked: null,
            tries: He,
            gaveUp: !1
          };
          Fe.signal.aborted || Ue++, He++;
          const Je = await ee.repick();
          if (ye) return {
            picked: null,
            tries: He,
            gaveUp: !1
          };
          if (null !== Je) return {
            picked: Je,
            tries: He,
            gaveUp: !1
          }
        }
        return {
          picked: null,
          tries: He,
          gaveUp: !0
        }
      } finally {
        (() => {
          var ee;
          null === (ee = be) || void 0 === ee || ee.abort(), be = null
        })()
      }
    }
    var MM = He(42077);
    const KM = new Uint8Array(0);
    let UM = null;

    function FM(ee) {
      return {
        aux: WH.Yb.AdStart | (ee ? WH.Yb.PreventMovement : 0),
        payload: KM
      }
    }
    var JM = He(3128),
      oM = He(295);
    const RM = "__bloxdSceneCapture";
    var kM = He(42086);
    class qM {
      constructor(ee) {
        var ie, He;
        this.host = ee, this.requested = null, this.landed = null, this.confirm = null, this.channel = void 0, this.oneShotStored = !0, this.startRead = void 0, this.landRequest = () => {}, this.landing = new Promise((ee => {
          this.landRequest = ee
        })), this.follow = ee => {
          let ie = ee;
          return Promise.race([this.startRead, this.landing]).then((async () => {
            const ee = null === this.requested && null !== ie;
            var He;
            ee && (null === (He = ie) || void 0 === He || He(null));
            const ye = await this.landing;
            var be;
            null === ye && ee || (null === (be = ie) || void 0 === be || be(ye))
          })), () => {
            ie = null
          }
        }, this.startRead = (He = ee.store, He.keys().then((ee => ({
          own: ee.includes(Ry.e),
          oneShot: ee.includes(Ry.g)
        })), (() => ({
          own: !0,
          oneShot: !0
        })))).then((ee => {
          let {
            own: ie,
            oneShot: He
          } = ee;
          this.oneShotStored = He, (ie || He) && this.request()
        })), this.channel = (null !== (ie = ee.openChannel) && void 0 !== ie ? ie : Ry.v)(), null !== this.channel && (this.channel.onmessage = () => {
          this.request()
        })
      }
      request() {
        var ee;
        if (null !== this.requested) return this.requested;
        null === (ee = this.channel) || void 0 === ee || ee.close(), this.channel = null;
        const ie = this.oneShotStored;
        return this.requested = function(ee, ie, He) {
          return new Promise((ie => {
            ie(ee())
          })).catch((ee => (null !== ie && (0, Ry.p)(ie), He(ee), null)))
        }((() => this.host.load(ie).then((ee => (ee.setGamePackConfirm(this.confirm), this.landed = ee, ee)))), ie ? this.host.store : null, this.host.RR), this.landRequest(this.requested), this.requested
      }
      loaded() {
        return this.landed
      }
      forJoin() {
        return null !== this.requested ? this.requested : Promise.race([this.startRead, this.landing]).then((() => {
          var ee;
          return null !== (ee = this.requested) && void 0 !== ee ? ee : null
        }))
      }
      setGamePackConfirm(ee) {
        var ie;
        this.confirm = ee, null === (ie = this.landed) || void 0 === ie || ie.setGamePackConfirm(ee)
      }
    }
    var fM = He(36956);
    const TM = 216 * fM.g,
      pM = 92 * fM.d,
      XM = 64 * fM.g,
      zM = 16 * fM.g;

    function BM() {
      var ee, ie;
      return null !== (ee = null === (ie = performance.memory) || void 0 === ie ? void 0 : ie.lB) && void 0 !== ee ? ee : null
    }
    class EM {
      constructor(ee, ie) {
        this.budgetBytes = ee, this.reads = ie, this.estimate = null, this.shedAt = null
      }
      read(ee) {
        var ie;
        const He = this.reads.storedChunks(),
          ye = this.reads.gpuBytes(),
          be = Math.max(null !== (ie = this.reads.jsHeapBytes()) && void 0 !== ie ? ie : 0, XM),
          Me = TM + ee + be + ye + He * pM;
        this.estimate = {
          wasmBytes: ee,
          jsHeapBytes: be,
          gpuBytes: ye,
          storedChunks: He,
          totalBytes: Me
        }
      }
      last() {
        return this.estimate
      }
      takeShed() {
        const {
          estimate: ee,
          budgetBytes: ie,
          shedAt: He
        } = this;
        return !(null === ee || null === ie || ee.totalBytes < ie || null !== He && ee.totalBytes < He + zM) && (this.shedAt = ee.totalBytes, !0)
      }
      describe() {
        const {
          estimate: ee,
          budgetBytes: ie
        } = this;
        return null === ee ? null : `estimate ${(0,fM.m)(ee.totalBytes)} MiB of budget ${null===ie?"none":(0,fM.m)(ie)}: wasm ${(0,fM.m)(ee.wasmBytes)} js ${(0,fM.m)(ee.jsHeapBytes)} gpu ${(0,fM.m)(ee.gpuBytes)} chunks ${ee.storedChunks}`
      }
      snapshot() {
        const {
          estimate: ee,
          budgetBytes: ie
        } = this;
        return {
          ...null === ee ? {} : {
            footprintMiB: Number((0, fM.m)(ee.totalBytes)),
            gpuMiB: Number((0, fM.m)(ee.gpuBytes)),
            storedChunks: ee.storedChunks
          },
          footprintBudgetMiB: null === ie ? -1 : Number((0, fM.m)(ie))
        }
      }
    }
    var gM = He(3037),
      OM = He(4899),
      dM = He(37161),
      WM = He(38779);
    const tM = tH.cb + 1,
      ZM = 4096 * tM;
    class wM {
      constructor(ee, ie) {
        this.log = ee, this.take = ie, this.lJ = [], this.unshown = new Map, this.latest = new Map
      }
      afterFrame(ee, ie) {
        const He = this.take();
        He.length >= tH.ab && He[0] > 0 && (0, gM.m)("remesh", `${He[0]} core records lost to a full log`);
        const ye = this.lJ;
        for (let be = tH.ab; be + tH.cb <= He.length; be += tH.cb) {
          for (let ee = be; ee < be + tH.cb; ee++) ye.push(He[ee]);
          ye.push(ee)
        }
        if (ie || !(ye.length < ZM)) {
          for (let ie = 0; ie < ye.length; ie += tM) this.feed(ie, ee);
          ye.length = 0, ie && this.log.frame(ee)
        }
      }
      feed(ee, ie) {
        var He;
        const ye = this.lJ,
          be = (0, WM.d)(ye[ee + 1], ye[ee + 2], ye[ee + 3]),
          Me = ye[ee + 4],
          Ke = ye[ee + tH.cb];
        switch (ye[ee]) {
          case tH.Ab.Edit:
            this.log.edit(be, Ke);
            break;
          case tH.Ab.Sent:
            this.latest.set(be, Me), this.log.sent(be, Me, ye[ee + 5], ye[ee + 6], ye[ee + 7], null !== (He = this.unshown.get(be)) && void 0 !== He ? He : WM.c, Ke);
            break;
          case tH.Ab.Done: {
            this.log.received(Me, ye[ee + 5] / 1e3, Ke);
            const ie = this.unshown.get(be);
            void 0 === ie ? this.unshown.set(be, [Me]) : ie.push(Me);
            break
          }
          case tH.Ab.Failed: {
            const ee = this.latest.get(be);
            void 0 !== ee && ee !== Me ? this.log.reassign(be, Me, ee) : this.log.failed(Me), this.ended(be, Me);
            break
          }
          case tH.Ab.Shown:
            this.log.applied(be, Me, ie), this.ended(be, Me);
            break;
          case tH.Ab.Replaced:
            this.log.reassign(be, Me, ye[ee + 5]), this.ended(be, Me);
            break;
          case tH.Ab.Emptied:
            this.log.emptied(be, ie);
            break;
          default:
            console.warn(`[debug:remesh] unknown core record kind ${ye[ee]}`)
        }
      }
      ended(ee, ie) {
        this.latest.get(ee) === ie && this.latest.delete(ee);
        const He = this.unshown.get(ee);
        if (void 0 === He) return;
        const ye = He.indexOf(ie);
        ye >= 0 && He.splice(ye, 1), 0 === He.length && this.unshown.delete(ee)
      }
    }
    let DM = null;
    var PM = He(3550),
      AM = He(40533);
    const YM = "its script failed",
      VM = "the block and item tables did not load",
      aM = new Uint8Array(0);
    class cM {
      constructor(ee) {
        this.options = ee, this.worker = null, this.watch = null, this.createWorker = null, this.loading = !1, this.wanted = !1, this.lJ = [], this.startsWithoutResult = 0, this.generated = !1, this.coreWaits = !1, this.lastLoss = "", this.seed = null, this.gone = !1, this.pool = [], null !== ee.module ? ee.write(0, WH.Ld.WorldgenStarted, 0, 0, aM) : this.giveUp()
      }
      take(ee, ie) {
        if (!(this.gone || null === this.worker && null === this.lJ))
          if (ee === WH.Od.WorldgenSeed) {
            const ee = 0 === ie.byteLength ? null : this.options.decodeSettings(ie);
            null === ee ? this.release() : function(ee, ie) {
              if ((null === ee || void 0 === ee ? void 0 : ee.byteLength) !== ie.byteLength) return !1;
              for (let He = 0; He < ee.byteLength; He++)
                if (ee[He] !== ie[He]) return !1;
              return !0
            }(this.seed, ie) || (this.seed = ie.slice(), this.startsWithoutResult = null === this.worker ? 0 : 1), this.dropHeld(), this.post({
              type: "seed",
              settings: ee
            }, []), null !== ee ? this.want() : this.loading || this.options.onMapWithoutWorldgen()
          } else if (ee === WH.Od.Generate) {
          var He;
          const ee = new DataView(ie.buffer, ie.byteOffset, WH.Ed),
            ye = null !== (He = this.pool.pop()) && void 0 !== He ? He : new ArrayBuffer(8192);
          this.post({
            type: "generate",
            ticket: ee.getUint32(0, !0),
            x: ee.getInt32(4, !0),
            y: ee.getInt32(8, !0),
            z: ee.getInt32(12, !0),
            bytes: ye
          }, [ye])
        }
      }
      prestart() {
        this.gone || this.want()
      }
      stopWorker() {
        this.gone || (this.release(), this.generated = !1, this.dropHeld(), this.pool.length = 0, this.coreWaits && (this.coreWaits = !1, this.options.write(0, WH.Ld.WorldgenStarted, 0, 0, aM)))
      }
      stop() {
        var ee;
        this.gone = !0, this.dropHeld(), this.endWatch(), null === (ee = this.worker) || void 0 === ee || ee.terminate(), this.worker = null
      }
      post(ee, ie) {
        var He;
        null !== this.lJ ? this.lJ.push({
          message: ee,
          transfer: ie
        }) : null === (He = this.worker) || void 0 === He || He.postMessage(ee, ie)
      }
      want() {
        this.wanted = !0, null === this.worker && (null === this.createWorker ? this.load() : this.start())
      }
      release() {
        this.wanted = !1, null !== this.worker && (this.endWorker(), this.startsWithoutResult = 0, this.lJ ??= [])
      }
      endWorker() {
        var ee, ie, He;
        this.endWatch(), null === (ee = this.worker) || void 0 === ee || ee.terminate(), this.worker = null, null === (ie = (He = this.options).onMemoryGone) || void 0 === ie || ie.call(He)
      }
      load() {
        this.loading || (this.loading = !0, this.options.loadWorker().then((ee => {
          this.createWorker = ee, this.wanted && this.start()
        }), (ee => {
          this.gone || (this.giveUp(), this.options.onLoadFailed(ee))
        })))
      }
      start() {
        const {
          module: ee
        } = this.options, ie = this.createWorker;
        if (this.gone || null === ee || null === ie) return;
        if (this.startsWithoutResult >= 3) return this.giveUp(), void this.options.onGaveUp(this.lastLoss);
        let He;
        this.startsWithoutResult++;
        try {
          He = ie()
        } catch (be) {
          return console.warn("[bloxd-wasm-client] the world-gen worker did not start", be), this.lastLoss = `it did not start (${String(be)})`, void this.start()
        }
        this.worker = He, He.onmessage = ee => {
          let {
            data: ie
          } = ee;
          this.worker === He && this.onReply(He, ie)
        }, He.onerror = ee => {
          ee.preventDefault(), this.worker === He && this.lose(ee.message || YM)
        };
        try {
          He.postMessage({
            type: "start",
            module: ee,
            BR: ye.g.BR
          })
        } catch (be) {
          return console.warn("[bloxd-wasm-client] the world-gen worker could not be sent the module", be), this.lastLoss = `it could not be sent the module (${String(be)})`, He.terminate(), this.worker = null, void this.start()
        }
        this.watch = new Zb.h(Zb.f, (ee => {
          this.lose((0, Zb.l)(ee), (() => {
            this.options.onStartTimeout(ee)
          }))
        }), void 0, this.options.visibility)
      }
      onReply(ee, ie) {
        switch (ie.type) {
          case "started": {
            this.endWatch();
            const ie = this.lJ;
            if (null === ie) {
              this.coreWaits = !1, this.options.write(0, WH.Ld.WorldgenStarted, 0, 0, aM);
              break
            }
            this.lJ = null;
            for (const {
                message: He,
                transfer: ye
              }
              of ie) ee.postMessage(He, ye);
            break
          }
          case "lost":
            this.lose(ie.reason);
            break;
          case "memory":
            var He, ye;
            null === (He = (ye = this.options).onMemoryStats) || void 0 === He || He.call(ye, ie.stats);
            break;
          case "result":
            this.generated = !0, ie.status !== WH.sb.Trapped && (this.startsWithoutResult = 0), this.options.write(ie.ticket, WH.Ld.WorldgenResult, ie.status, ie.workerUs, new Uint8Array(ie.bytes, 0, ie.len)), this.recycle(ie.bytes), ie.spare && this.recycle(ie.spare)
        }
      }
      lose(ee, ie) {
        console.warn(`[bloxd-wasm-client] the world-gen worker was lost: ${ee}`), this.lastLoss = ee, this.endWorker(), this.gone || (ie ? ie() : this.options.onWorkerLost(ee, this.generated), this.dropHeld(), this.lJ = null, this.options.write(0, WH.Ld.WorldgenLost, WH.Sd.Lost, 0, aM), this.coreWaits = !0, this.start())
      }
      giveUp() {
        this.gone = !0, this.dropHeld(), this.options.write(0, WH.Ld.WorldgenLost, WH.Sd.Gone, 0, aM)
      }
      endWatch() {
        var ee;
        null === (ee = this.watch) || void 0 === ee || ee.cancel(), this.watch = null
      }
      dropHeld() {
        if (null !== this.lJ) {
          for (const {
              message: ee
            }
            of this.lJ) "generate" === ee.type && this.recycle(ee.bytes);
          this.lJ.length = 0
        }
      }
      recycle(ee) {
        this.pool.length < 16 && ee.byteLength > 0 && ee.byteLength <= 16384 && this.pool.push(ee)
      }
    }
    var xM = He(38559),
      LM = He(4112),
      CM = He(41766),
      vM = He(42091),
      uM = He(41903);
    const mM = /[(@\s]([^\s(@]+)$/,
      lM = /:\d/;

    function SM(ee, ie) {
      for (let He = 0; He + ie.length <= ee.length; He++) {
        let ye = 0;
        for (; ye < ie.length && ee[He + ye] === ie[ye];) ye++;
        if (ye === ie.length) return He
      }
      return -1
    }

    function nM(ee) {
      return "(" === ee || ")" === ee || "@" === ee || "," === ee || " " === ee || "\t" === ee
    }

    function jM(ee, ie) {
      let He = ie;
      for (; He > 0 && !nM(ee[He - 1]);) He--;
      let ye = ie;
      for (; ye < ee.length && !nM(ee[ye]);) ye++;
      let be = "";
      for (let Me = He; Me < ye; Me++) be += ee[Me];
      return be
    }
    const sM = [{
        origin: "chrome-extension://dhdgffkkebhmkfjojejmpbldmpobfkfo",
        tag: "TM"
      }, {
        origin: "chrome-extension://iikmkjmpaadaobahmlepeloendndfphd",
        tag: "TM-Edge"
      }, {
        origin: "chrome-extension://gcalenpjmijncebpfijmoaglllgpjagf",
        tag: "TM-Beta"
      }],
      IM = /^\/[^\s?#]*\?(?:[^\s&#]*&)*?name=([^\s&#]*?)(?::\d+)*(?:[\s&#]|\)(?:[,\s]|$)|$)/,
      hM = ".user.js";

    function NM(ee, ie) {
      let He = 0;
      for (; He < sM.length && sM[He].origin !== ie[0];) He++;
      if (He === sM.length) return ie[0];
      let ye = "";
      for (let Ke = ie.index + ie[0].length; Ke < ee.length; Ke++) ye += ee[Ke];
      const be = (0, zb.j)(zb.T, IM, [ye]),
        Me = null === be ? "" : function(ee) {
          let ie = ee.length,
            He = 0;
          for (; He < 8 && ie > 8 && ee[ie - 8 + He] === hM[He];) He++;
          8 === He && (ie -= 8);
          let ye = "",
            be = !1;
          for (let Me = 0; Me < ie; Me++) {
            let ie = ee[Me];
            "+" === ie ? ie = " " : "%" === ie && (ie = "2" === ee[Me + 1] && "0" === ee[Me + 2] ? " " : "_", Me += 2), -1 !== SM("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 .-", ie) ? (ye += ie, be = !1) : be || (ye += "_", be = !0)
          }
          return ye
        }(be[1]);
      return "" === Me ? ie[0] : sM[He].tag + " " + Me
    }

    function GM(ee, ie) {
      var He;
      const ye = /[^\n]+/g,
        be = /\b(?!wasm:)[a-z][\w+.-]*:\/\/[\w.:%~+[\]-]*/i,
        Me = /^([^?#)]*?)(?::\d+)*(?:[?#)]|$)/;
      let Ke = null,
        Ue = null,
        Fe = (0, zb.j)(zb.T, ye, [ee]);
      for (; null !== Fe;) {
        const He = (0, zb.j)(zb.T, be, [Fe[0]]),
          Je = null === ie ? -1 : SM(Fe[0], ie);
        if (-1 !== Je) {
          if (null !== He) return NM(Fe[0], He);
          const ee = jM(Fe[0], Je),
            ie = (0, zb.j)(zb.T, mM, [Fe[0]]),
            ye = null !== (0, zb.j)(zb.T, lM, [ee]) ? ee : null === ie ? null : ie[1],
            be = null === ye ? null : (0, zb.j)(zb.T, Me, [ye]);
          if (null !== be && "" !== be[1]) return be[1]
        }
        null !== He && (null === Ke ? Ke = He[0] : null === Ue && He[0] !== Ke && (Ue = He[0])), Fe = (0, zb.j)(zb.T, ye, [ee])
      }
      return null !== (He = Ue) && void 0 !== He ? He : null === Ke ? "none" : "own"
    }
    const rM = /:(\d+):(\d+)\)?$/;

    function QM(ee, ie) {
      const He = (0, zb.j)(zb.T, rM, [ie]);
      return null === He ? ee : ee + ":" + He[1] + ":" + He[2]
    }

    function eK(ee) {
      const ie = /[^\n]+/g,
        He = /\b(?!wasm:)((?:blob:)?)(([a-z][\w+.-]*):\/\/[\w.:%~+[\]-]*)((?:[^\s()@?#]*\/)?)([^\s()@?#:]*)/i;
      let ye = null,
        be = "",
        Me = !1,
        Ke = (0, zb.j)(zb.T, ie, [ee]);
      for (; null !== Ke;) {
        const Ue = (0, zb.j)(zb.T, He, [Ke[0]]),
          Fe = null === Ue ? (0, zb.j)(zb.T, mM, [Ke[0]]) : null,
          Je = null !== Fe && null !== (0, zb.j)(zb.T, lM, [Fe[1]]) && 0 !== SM(Fe[1], "wasm:") ? Fe[1] : null;
        if (null === ye) null !== Ue ? (ye = Ue[2], be = Ue[4]) : null !== Je && (ye = "");
        else if (null !== Ue) {
          if (Me = !0, "" !== Ue[1]) return {
            reader: "inline",
            frame: QM("blob", Ke[0])
          };
          if (Ue[2] !== ye) {
            const ee = "moz-extension" === Ue[3] || "safari-web-extension" === Ue[3];
            let ie = "";
            for (let He = 0; He < Ue[5].length && He < 20; He++) ie += Ue[5][He];
            return {
              reader: ee ? Ue[3] : Ue[2],
              frame: QM("" === ie ? "-" : ie, Ke[0])
            }
          }
          if (Ue[4] !== be) return {
            reader: "inline",
            frame: QM("inline", Ke[0])
          }
        } else if (null !== Je) {
          const ee = -1 !== SM(Ke[0], "userscript") || -1 !== SM(Ke[0], ".user.js");
          return {
            reader: ee ? "userscript" : "inline",
            frame: QM(ee ? "userscript" : "eval", Ke[0])
          }
        }
        Ke = (0, zb.j)(zb.T, ie, [ee])
      }
      const Ue = Me ? "own" : "unknown";
      return {
        reader: Ue,
        frame: Ue
      }
    }

    function iK(ee, ie) {
      return (0, xM.i)(function(ee) {
        if ("string" !== typeof ee || 0 === ee.length) return "-";
        let ie = 2166136261;
        const He = ee.length < 4096 ? ee.length : 4096;
        for (let be = 0; be <= He; be++) ie ^= be === He ? ee.length : (0, zb.j)(zb.bb, ee, [be]), ie = ie + (ie << 1) + (ie << 4) + (ie << 7) + (ie << 8) + (ie << 24) >>> 0;
        let ye = "";
        for (let be = 28; be >= 0; be -= 4) ye += "0123456789abcdef" [ie >>> be & 15];
        return ye
      }(ie), eK(ee).frame)
    }
    const HK = (ee, ie) => ee.includes(ie),
      yK = ee => {
        try {
          return ee()
        } catch {
          return !1
        }
      },
      bK = -1,
      MK = ee => {
        try {
          return ee()
        } catch {
          return bK
        }
      };

    function KK(ee, ie) {
      return {
        probe: (He, ye, be) => {
          try {
            return ((He, ye, be) => {
              switch (He) {
                case WH.kc.StackCheck:
                  return ie.stackCheck() ? 1 : 0;
                case WH.kc.ConfirmMesh:
                  return ie.confirmMesh();
                case WH.kc.IndexPassReplaced:
                  return ie.indexPassReplaced() ? 1 : 0;
                case WH.kc.ProductSubChanged:
                  return ie.productSubChanged() ? 1 : 0;
                case WH.kc.RenderStatus:
                  return ie.QJ();
                case WH.kc.Held:
                  return ie.lJ();
                case WH.kc.PlayerKilledSubs:
                  return ie.playerKilledSubs();
                case WH.bb: {
                  const He = ie.getComplete();
                  return null === He ? 0 : (0, zb.j)(zb.w, zb.gb, [He, new zb.b((0, zb.E)(ee()), ye, be)]).written
                }
                default:
                  return 0
              }
            })(He, ye, be)
          } catch {
            return WH.ac
          }
        }
      }
    }
    class UK {
      constructor(ee) {
        this.write = ee, this.flagsWritten = 0, this.written = (0, zb.m)(null)
      }
      YR(ee) {
        let {
          flags: ie,
          values: He
        } = ee;
        for (let ye = 0; ye < He.length; ye++) this.value(He[ye][0], He[ye][1]);
        this.setFlags(ie | WH.e.Ready)
      }
      value(ee, ie) {
        this.written[ee] !== ie && this.write(ee, ie, 0) && (this.written[ee] = ie)
      }
      setFlags(ee) {
        const ie = ee & ~this.flagsWritten;
        0 !== ie && this.write(WH.g.Flags, ie, ie) && (this.flagsWritten |= ie)
      }
      originStackHit() {
        return this.write(WH.g.Flags, WH.e.OriginStackHit, WH.e.OriginStackHit)
      }
    }
    const FK = {
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
      JK = 1e3;
    let oK;
    const RK = [0, 1, "a", "length", 2, 4, 6, "f", null, 3, 128, 5, 10, 86, void 0, "o", "cw==", "b", "d", 153, 1e5, 8, 16, 87, "SuUawT", 512, "012345", 15, 59, 106, 68, 105, 1023, 63, 12, 255, 29, 32, 181, 24, 7, 18, 19, 64, 222, 220, 65535, 196, "stack", "name", 58, "c", 171, !1, 100, !0, 183, 122, 77, "h", "e", 139, "i", "A", "m", 256, "__GLOB", "AL__HE", "LPERS_", "_", "=", ";", " ", "string", "u", "No redacted path provided", "--version", "-v", " (stan", "dalone", ")", " (loca", "l)", "p", "functi", "on", "j", "J", "protot", "ype", "decode", "I=", "eTR5bm", "s", "t", "r", "qd", "chEven", "dispat", "now", 94, "confir", "mMesh", "produc", "player", "Killed", "number", "toString", "get", "v", "q", 246, "C", "None", 11, 144, 13, "En", "g", "tOverw", "ritten", "plete"];

    function kK() {}

    function qK() {
      qK = function() {}
    }
    oK = function(ee) {
      let ie = arguments[RK[3]] > RK[1] && arguments[RK[1]] !== RK[14] ? arguments[RK[1]] : (...ee) => (ee[RK[3]] = RK[0], "PPwTVw3" in kK && function(...ee) {
          function ie() {}
          ee[RK[3]] = RK[0], qK(ee[-RK[13]] = function(...ee) {
            for (qK(ee[RK[3]] = RK[4], ee[RK[10]] = RK[0], ee[RK[9]] = RK[0], ee[RK[5]] = new ie(RK[0]), ee[RK[11]] = ee[RK[5]], ee[RK[6]] = ee[RK[0]], ee[RK[7]] = ee[RK[1]]); ee[RK[6]] !== RK[8] || ee[RK[7]] !== RK[8];) qK(ee[RK[9]] = (ee[RK[6]] ? ee[RK[6]].val : RK[0]) + (ee[RK[7]] ? ee[RK[7]].val : RK[0]) + ee[RK[10]], ee[RK[10]] = Math.floor(ee[RK[9]] / RK[12]), ee[RK[11]].next = new ie(ee[RK[9]] % RK[12]), ee[RK[11]] = ee[RK[11]].next, ee[RK[6]] = ee[RK[6]] ? ee[RK[6]].next : RK[8], ee[RK[7]] = ee[RK[7]] ? ee[RK[7]].next : RK[8]);
            return ee[RK[10]] && (ee[RK[11]].next = new ie(ee[RK[10]])), ee[RK[5]].next
          }, console.log(ee[-RK[13]]))
        }(), RK[8]),
        He = arguments[RK[3]] > RK[4] && arguments[RK[4]] !== RK[14] ? arguments[RK[4]] : RK[8],
        ye = arguments[RK[3]] > RK[9] && arguments[RK[9]] !== RK[14] ? arguments[RK[9]] : "";
      const be = window,
        Me = (0, zb[RK[15]])("RXJyb3" + RK[91]),
        Ke = (0, zb[RK[15]])("c3RhY2s="),
        Ue = (0, zb[RK[15]])("Y2FwdHVyZVN0YWNrVHJhY2U="),
        Je = (0, zb[RK[15]])("c3RhY2tUcmFjZUxpbWl0"),
        oe = (0, zb[RK[15]])("bmF0aXZl"),
        Re = [(0, zb[RK[15]])("bWFpbi5qcw=="), (0, zb[RK[15]])("aW5kZXguanM="), (0, zb[RK[15]])("dXNlcnNjcmlwdA=="), (0, zb[RK[15]])("Y29udGVudC5q" + RK[16]), (0, zb[RK[15]])("b3B0aW9ucy5q" + RK[16]), (0, zb[RK[15]])("cG9wdXAuanM="), (0, zb[RK[15]])("LnVzZXIuanM="), (0, zb[RK[15]])("Y2hyb21lLWV4dGVuc2lvbg==")],
        ke = (...ee) => {
          ee[RK[3]] = RK[1];
          const ie = be[Me],
            He = ie;
          He[Je] < RK[20] && (He[Je] = RK[20]);
          const ye = "string" === typeof(ke = (new ie)[Ke]) ? ke : `${ke}`,
            Fe = {},
            oe = He[Ue];
          var ke;
          if (typeof oe === RK[84] + RK[85]) {
            function Te() {
              var ee = function(...ee) {
                function He(ee, ie) {
                  return Ke(be(Ue(ee), Ue(ie)))
                }

                function ye(...ee) {
                  return ee[RK[3]] = RK[9],
                    function(ee, ie) {
                      var He, ye, be, Me, Ke, Ue, Fe, Je, oe = ie.length;
                      for (He = Array(), ye = Array(Math.ceil(ee.length / RK[4])), Ke = RK[0]; Ke < ye.length; Ke++) ye[Ke] = ee.charCodeAt(Ke * RK[4]) << RK[21] | ee.charCodeAt(Ke * RK[4] + RK[1]);
                      for (; ye.length > RK[0];) {
                        for (qK(Je = Array(), Fe = RK[0]), Ke = RK[0]; Ke < ye.length; Ke++) qK(Fe = (Fe << RK[22]) + ye[Ke], Ue = Math.floor(Fe / oe), Fe -= Ue * oe), (Je.length > RK[0] || Ue > RK[0]) && (Je[Je.length] = Ue);
                        qK(He[He.length] = Fe, ye = Je)
                      }
                      for (be = "", Ke = He.length - RK[1]; Ke >= RK[0]; Ke--) be += ie.charAt(He[Ke]);
                      for (Me = Math.ceil(ee.length * RK[21] / (Math.log(ie.length) / Math.log(RK[4]))), Ke = be.length; Ke < Me; Ke++) be = ie[RK[0]] + be;
                      return be
                    }(be(Ue(ee[RK[0]]), Ue(ee[RK[1]])), ee[RK[4]])
                }

                function be(...ee) {
                  qK(ee[RK[3]] = RK[4], ee[RK[4]] = Fe(ee[RK[0]])), ee[RK[4]].length > RK[22] && (ee[RK[4]] = ze(ee[RK[4]], ee[RK[0]].length * RK[21]));
                  var ie = Array(RK[22]),
                    He = Array(RK[22]);
                  for (ee[RK[23]] = RK[0]; ee[RK[23]] < RK[22]; ee[RK[23]]++) qK(ie[ee[RK[23]]] = 909522486 ^ ee[RK[4]][ee[RK[23]]], He[ee[RK[23]]] = 1549556828 ^ ee[RK[4]][ee[RK[23]]]);
                  return ee[RK[5]] = ze(ie.concat(Fe(ee[RK[1]])), RK[25] + ee[RK[1]].length * RK[21]), Je(ze(He.concat(ee[RK[5]]), function(ee, ie, He) {
                    if (ee === RK[24]) return ie + He
                  }(RK[24], RK[25], RK[65])))
                }

                function Me(ie) {
                  var He, ye, Me, Ke;
                  try {
                    ee[RK[2]]
                  } catch (be) {
                    ee[RK[2]] = RK[0]
                  }
                  for (qK(He = ee[RK[2]] ? RK[26] + "6789ABCDEF" : RK[26] + "6789abcdef", ye = "", Me = void 0), Ke = RK[0]; Ke < ie.length; Ke++) qK(Me = ie.charCodeAt(Ke), ye += He.charAt(Me >>> RK[5] & RK[27]) + He.charAt(Me & RK[27]));
                  return ye
                }

                function Ke(...He) {
                  He[RK[3]] = RK[1];
                  try {
                    ee[RK[28]]
                  } catch (ie) {
                    ee[RK[28]] = ""
                  }
                  for (qK(He[RK[31]] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", He[RK[4]] = "", He[RK[9]] = He[RK[0]].length), He[-RK[29]] = RK[0]; He[-RK[29]] < He[RK[9]]; He[-RK[29]] += RK[9])
                    for (He[RK[11]] = He[RK[0]].charCodeAt(He[-RK[29]]) << RK[22] | (He[-RK[29]] + RK[1] < He[RK[9]] ? He[RK[0]].charCodeAt(He[-RK[29]] + RK[1]) << RK[21] : RK[0]) | (He[-RK[29]] + RK[4] < He[RK[9]] ? He[RK[0]].charCodeAt(He[-RK[29]] + RK[4]) : RK[0]), He[-RK[30]] = RK[0]; He[-RK[30]] < RK[5]; He[-RK[30]]++) He[-RK[29]] * RK[21] + He[-RK[30]] * RK[6] > He[RK[0]].length * RK[21] ? He[RK[4]] += ee[RK[28]] : He[RK[4]] += He[RK[31]].charAt(He[RK[11]] >>> RK[6] * (RK[9] - He[-RK[30]]) & RK[33]);
                  return He[RK[4]]
                }

                function Ue(...ee) {
                  var ie, He;
                  for (qK(ee[RK[3]] = RK[1], ee[RK[2]] = "", ee[RK[4]] = -RK[1]); ++ee[RK[4]] < ee[RK[0]].length;) qK(ie = ee[RK[0]].charCodeAt(ee[RK[4]]), He = ee[RK[4]] + RK[1] < ee[RK[0]].length ? ee[RK[0]].charCodeAt(ee[RK[4]] + RK[1]) : RK[0]), 55296 <= ie && ie <= 56319 && 56320 <= He && He <= 57343 && qK(ie = 65536 + ((ie & RK[32]) << RK[12]) + (He & RK[32]), ee[RK[4]]++), ie <= 127 ? ee[RK[2]] += String.fromCharCode(ie) : ie <= 2047 ? ee[RK[2]] += String.fromCharCode(192 | ie >>> RK[6] & 31, RK[10] | ie & RK[33]) : ie <= RK[46] ? ee[RK[2]] += String.fromCharCode(224 | ie >>> RK[34] & RK[27], RK[10] | ie >>> RK[6] & RK[33], RK[10] | ie & RK[33]) : ie <= 2097151 && (ee[RK[2]] += String.fromCharCode(240 | ie >>> RK[41] & RK[40], RK[10] | ie >>> RK[34] & RK[33], RK[10] | ie >>> RK[6] & RK[33], RK[10] | ie & RK[33]));
                  return ee[RK[2]]
                }

                function Fe(ee) {
                  var ie, He = Array(ee.length >> RK[4]);
                  for (ie = RK[0]; ie < He.length; ie++) He[ie] = RK[0];
                  for (ie = RK[0]; ie < ee.length * RK[21]; ie += RK[21]) He[ie >> RK[11]] |= (ee.charCodeAt(ie / RK[21]) & RK[35]) << RK[39] - ie % RK[37];
                  return He
                }

                function Je(...ee) {
                  for (qK(ee[RK[3]] = RK[1], ee[-RK[38]] = ""), ee[-RK[36]] = RK[0]; ee[-RK[36]] < ee[RK[0]].length * RK[37]; ee[-RK[36]] += RK[21]) ee[-RK[38]] += String.fromCharCode(ee[RK[0]][ee[-RK[36]] >> RK[11]] >>> RK[39] - ee[-RK[36]] % RK[37] & RK[35]);
                  return ee[-RK[38]]
                }

                function oe(...ee) {
                  return ee[RK[3]] = RK[4], ee[RK[0]] >>> ee[RK[1]] | ee[RK[0]] << RK[37] - ee[RK[1]]
                }

                function Re(...ee) {
                  return ee[RK[3]] = RK[4], ee[RK[0]] >>> ee[RK[1]]
                }

                function ke(...ee) {
                  return ee[RK[3]] = RK[9], ee[RK[0]] & ee[RK[1]] ^ ~ee[RK[0]] & ee[RK[4]]
                }

                function qe(...ee) {
                  return ee[RK[3]] = RK[9], ee[RK[0]] & ee[RK[1]] ^ ee[RK[0]] & ee[RK[4]] ^ ee[RK[1]] & ee[RK[4]]
                }

                function fe(...ee) {
                  return ee[RK[3]] = RK[1], oe(ee[RK[0]], RK[4]) ^ oe(ee[RK[0]], RK[116]) ^ oe(ee[RK[0]], 22)
                }

                function Te(ee) {
                  return oe(ee, RK[6]) ^ oe(ee, RK[114]) ^ oe(ee, 25)
                }

                function pe(...ee) {
                  return ee[RK[3]] = RK[1], oe(ee[RK[0]], RK[40]) ^ oe(ee[RK[0]], RK[41]) ^ Re(ee[RK[0]], RK[9])
                }

                function Xe(...ee) {
                  return ee[RK[3]] = RK[1], oe(ee[RK[0]], 17) ^ oe(ee[RK[0]], RK[42]) ^ Re(ee[RK[0]], RK[12])
                }

                function ze(...ie) {
                  var He, ye, be, Me, Ke, Ue, Fe, Je, oe, Re, ze, Ee;
                  for (qK(ie[RK[3]] = RK[4], ie[RK[4]] = new Array(1779033703, -1150833019, 1013904242, -1521486534, 1359893119, -1694144372, 528734635, 1541459225), ie[RK[44]] = new Array(RK[43])), qK(ie[RK[0]][ie[RK[1]] >> RK[11]] |= RK[10] << RK[39] - ie[RK[1]] % RK[37], ie[RK[0]][(ie[RK[1]] + RK[43] >> 9 << RK[5]) + RK[27]] = ie[RK[1]]), oe = RK[0]; oe < ie[RK[0]].length; oe += RK[22]) {
                    for (qK(He = ie[RK[4]][RK[0]], ye = ie[RK[4]][RK[1]], be = ie[RK[4]][RK[4]], Me = ie[RK[4]][RK[9]], Ke = ie[RK[4]][RK[5]], Ue = ie[RK[4]][RK[11]], Fe = ie[RK[4]][RK[6]], Je = ie[RK[4]][RK[40]]), Re = RK[0]; Re < RK[43]; Re++) qK(ie[RK[44]][Re] = Re < RK[22] ? ie[RK[0]][Re + oe] : Be(Be(Be(Xe(ie[RK[44]][Re - RK[4]]), ie[RK[44]][Re - RK[40]]), pe(ie[RK[44]][Re - RK[27]])), ie[RK[44]][Re - RK[22]]), ze = Be(Be(Be(Be(Je, Te(Ke)), ke(Ke, Ue, Fe)), ee[-RK[45]][Re]), ie[RK[44]][Re]), Ee = Be(fe(He), qe(He, ye, be)), Je = Fe, Fe = Ue, Ue = Ke, Ke = Be(Me, ze), Me = be, be = ye, ye = He, He = Be(ze, Ee));
                    qK(ie[RK[4]][RK[0]] = Be(He, ie[RK[4]][RK[0]]), ie[RK[4]][RK[1]] = Be(ye, ie[RK[4]][RK[1]]), ie[RK[4]][RK[4]] = Be(be, ie[RK[4]][RK[4]]), ie[RK[4]][RK[9]] = Be(Me, ie[RK[4]][RK[9]]), ie[RK[4]][RK[5]] = Be(Ke, ie[RK[4]][RK[5]]), ie[RK[4]][RK[11]] = Be(Ue, ie[RK[4]][RK[11]]), ie[RK[4]][RK[6]] = Be(Fe, ie[RK[4]][RK[6]]), ie[RK[4]][RK[40]] = Be(Je, ie[RK[4]][RK[40]]))
                  }
                  return ie[RK[4]]
                }

                function Be(...ee) {
                  return qK(ee[RK[3]] = RK[4], ee[-RK[47]] = (ee[RK[0]] & RK[46]) + (ee[RK[1]] & RK[46]), ee[RK[17]] = (ee[RK[0]] >> RK[22]) + (ee[RK[1]] >> RK[22]) + (ee[-RK[47]] >> RK[22])), ee[RK[17]] << RK[22] | ee[-RK[47]] & RK[46]
                }
                return qK(ee[RK[3]] = RK[0], ee[RK[2]] = RK[0], ee[RK[28]] = ""), ee[-RK[45]] = new Array(1116352408, 1899447441, -1245643825, -373957723, 961987163, 1508970993, -1841331548, -1424204075, -670586216, 310598401, 607225278, 1426881987, 1925078388, -2132889090, -1680079193, -1046744716, -459576895, -272742522, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, -1740746414, -1473132947, -1341970488, -1084653625, -958395405, -710438585, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, -2117940946, -1838011259, -1564481375, -1474664885, -1035236496, -949202525, -778901479, -694614492, -200395387, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, -2067236844, -1933114872, -1866530822, -1538233109, -1090935817, -965641998), {
                  hex: function(ee) {
                    return Me(function(...ee) {
                      return ee[RK[3]] = RK[1], Je(ze(Fe(ee[RK[0]]), ee[RK[0]].length * RK[21]))
                    }(Ue(ee)))
                  },
                  b64: He,
                  any: ye,
                  hex_hmac: function(...ee) {
                    return ee[RK[3]] = RK[4], Me(be(Ue(ee[RK[0]]), Ue(ee[RK[1]])))
                  },
                  b64_hmac: He,
                  any_hmac: ye
                }
              }();
              console.log(ee)
            }
            "Y_VasA" in kK && Te(), (0, zb[RK[86]])(oe, ie, [Fe])
          }
          const qe = Fe[Ke],
            fe = ee[RK[0]] ? Re[RK[3]] : Re[RK[3]] - RK[1];
          for (let pe = RK[0]; pe < fe; pe++) {
            if (HK(ye, Re[pe])) {
              function Xe(...ee) {
                ee[RK[3]] = RK[0]
              }
              return "cnlawXz" in kK && Xe(), {
                [RK[48]]: ye,
                [RK[49]]: Re[pe]
              }
            }
            if (typeof qe === RK[73] && HK(qe, Re[pe])) return {
              [RK[48]]: qe,
              [RK[49]]: Re[pe]
            }
          }
          return RK[8]
        },
        qe = ee => ("sJiGi9" in kK && function(...ee) {
          ee[RK[3]] = RK[0]
        }(), ke(ee) !== RK[8]);
      let fe = RK[8],
        Te = RK[8],
        pe = RK[8],
        Xe = RK[8];
      const ze = (...ee) => {
        ee[RK[3]] = RK[1], "ohNBaq" + RK[87] in kK && function(...ee) {
          qK(ee[RK[3]] = RK[0], ee[RK[54]] = function(...ie) {
            return qK(ie[RK[3]] = RK[1], ie[-RK[50]] = []), (ie[RK[0]] === RK[1] || ie[RK[0]] >= RK[5]) && ee[RK[1]](ie[-RK[50]], [], ie[RK[0]], RK[0]), ie[-RK[50]]
          }, ee[RK[1]] = function(ie, He, ye, be) {
            var Me;
            for (Me = be; Me < ye; Me++) {
              var Ke;
              if (He.length !== Me) return;
              for (Ke = RK[0]; Ke < ye; Ke++) ee[RK[4]](He, [Me, Ke]) && (qK(He.push([Me, Ke]), ee[RK[1]](ie, He, ye, Me + RK[1])), He.length === ye && ie.push(ee[-RK[29]](He)), He.pop())
            }
          }, ee[-RK[29]] = function(...ee) {
            for (qK(ee[RK[3]] = RK[1], ee[RK[1]] = [], ee[RK[4]] = ee[RK[0]].length), ee[RK[51]] = RK[0]; ee[RK[51]] < ee[RK[4]]; ee[RK[51]]++)
              for (ee[RK[1]][ee[RK[51]]] = "", ee[-RK[52]] = RK[0]; ee[-RK[52]] < ee[RK[4]]; ee[-RK[52]]++) ee[RK[1]][ee[RK[51]]] += ee[RK[0]][ee[RK[51]]][RK[1]] === ee[-RK[52]] ? "Q" : ".";
            return ee[RK[1]]
          }, ee[RK[4]] = function(...ee) {
            for (qK(ee[RK[3]] = RK[4], ee[RK[4]] = ee[RK[0]].length), ee[RK[9]] = RK[0]; ee[RK[9]] < ee[RK[4]]; ee[RK[9]]++) {
              if (ee[RK[0]][ee[RK[9]]][RK[0]] === ee[RK[1]][RK[0]] || ee[RK[0]][ee[RK[9]]][RK[1]] === ee[RK[1]][RK[1]]) return RK[53];
              if (Math.abs((ee[RK[0]][ee[RK[9]]][RK[0]] - ee[RK[1]][RK[0]]) / (ee[RK[0]][ee[RK[9]]][RK[1]] - ee[RK[1]][RK[1]])) === RK[1]) return RK[53]
            }
            return RK[55]
          }, console.log(ee[RK[54]]))
        }();
        try {
          return ee[RK[0]]()
        } catch {
          return RK[55]
        }
      };
      let Be = RK[53];
      const Ee = () => {
          if (!Be && (0, zb[RK[93]])()) {
            function ee(...ee) {
              ee[RK[3]] = RK[0]
            }
            "OoXbmd" + RK[63] in kK && ee(), Be = RK[55]
          }
        },
        ge = (...ee) => {
          ee[RK[3]] = RK[1], "DON6g6" in kK && function(...ee) {
            function ie() {}
            ee[RK[3]] = RK[0], qK(ee[RK[2]] = function(...ee) {
              for (qK(ee[RK[3]] = RK[4], ee[RK[4]] = RK[0], ee[RK[17]] = RK[0], ee[RK[51]] = new ie(RK[0]), ee[RK[11]] = ee[RK[51]], ee[RK[6]] = ee[RK[0]], ee[RK[7]] = ee[RK[1]]); ee[RK[6]] !== RK[8] || ee[RK[7]] !== RK[8];) qK(ee[RK[17]] = (ee[RK[6]] ? ee[RK[6]].val : RK[0]) + (ee[RK[7]] ? ee[RK[7]].val : RK[0]) + ee[RK[4]], ee[RK[4]] = Math.floor(ee[RK[17]] / RK[12]), ee[RK[11]].next = new ie(ee[RK[17]] % RK[12]), ee[RK[11]] = ee[RK[11]].next, ee[RK[6]] = ee[RK[6]] ? ee[RK[6]].next : RK[8], ee[RK[7]] = ee[RK[7]] ? ee[RK[7]].next : RK[8]);
              return ee[RK[4]] && (ee[RK[11]].next = new ie(ee[RK[4]])), ee[RK[51]].next
            }, console.log(ee[RK[2]]))
          }();
          try {
            return "a6O2q6Z" in kK && (module.exports = async (ee = () => {
              throw new Error(RK[75])
            }) => {
              const ie = new Set(process.argv.slice(RK[4]));
              if (!ie.has(RK[76])) {
                if (ie.size !== RK[1]) return RK[53];
                if (!ie.has(RK[77])) return RK[53]
              }
              return await (async () => void 0 === await ee() ? RK[81] + RK[82] : "")(), RK[55]
            }), ee[RK[0]]()
          } catch {
            function ie(...ee) {
              qK(ee[RK[3]] = RK[0], ee[RK[57]] = function(...ie) {
                return ie[RK[3]] = RK[4], ee[RK[1]]({}, ie[RK[0]], ie[RK[1]])
              }, ee[RK[1]] = function(ie, He, ye) {
                var be, Me, Ke, Ue = {};
                if (ie[He + ye] !== RK[14]) return ie[He + ye];
                if (He === ye) return RK[55];
                for (be = RK[0]; be < He.length; be++) Ue[He[be]] === RK[14] && (Ue[He[be]] = RK[0]), Ue[ye[be]] === RK[14] && (Ue[ye[be]] = RK[0]), qK(Ue[He[be]]++, Ue[ye[be]]--);
                for (Me in Ue)
                  if (Ue[Me] !== RK[0]) return ie[He + ye] = RK[53], RK[53];
                for (Ke = RK[1]; Ke < He.length; Ke++)
                  if (ee[RK[1]](ie, He.substr(RK[0], Ke), ye.substr(RK[0], Ke)) && ee[RK[1]](ie, He.substr(Ke), ye.substr(Ke)) || ee[RK[1]](ie, He.substr(RK[0], Ke), ye.substr(ye.length - Ke)) && ee[RK[1]](ie, He.substr(Ke), ye.substr(RK[0], ye.length - Ke))) return ie[He + ye] = RK[55], RK[55];
                return ie[He + ye] = RK[53], RK[53]
              }, console.log(ee[RK[57]]))
            }
            return "h6h7YB" in kK && ie(), RK[14]
          }
        },
        Oe = (...ee) => {
          ee[RK[3]] = RK[1], "_3xbUxL" in kK && function() {
            var ee = function(...ee) {
              if (qK(ee[RK[3]] = RK[1], ee[RK[2]] = ee[RK[0]].length), ee[RK[2]] < RK[4]) return RK[0];
              if (qK(ee[RK[31]] = Math.max(...ee[RK[0]]), ee[-RK[58]] = Math.min(...ee[RK[0]])), ee[RK[31]] === ee[-RK[58]]) return RK[0];
              for (qK(ee[RK[18]] = Array(ee[RK[2]] - RK[1]).fill(Number.MAX_SAFE_INTEGER), ee[RK[60]] = Array(ee[RK[2]] - RK[1]).fill(Number.MIN_SAFE_INTEGER), ee[RK[7]] = Math.ceil((ee[RK[31]] - ee[-RK[58]]) / (ee[RK[2]] - RK[1])), ee[RK[40]] = RK[0]), ee[RK[59]] = RK[0]; ee[RK[59]] < ee[RK[2]]; ee[RK[59]]++) ee[RK[0]][ee[RK[59]]] !== ee[-RK[58]] && ee[RK[0]][ee[RK[59]]] !== ee[RK[31]] && qK(ee[RK[40]] = Math.floor((ee[RK[0]][ee[RK[59]]] - ee[-RK[58]]) / ee[RK[7]]), ee[RK[18]][ee[RK[40]]] = Math.min(ee[RK[18]][ee[RK[40]]], ee[RK[0]][ee[RK[59]]]), ee[RK[60]][ee[RK[40]]] = Math.max(ee[RK[60]][ee[RK[40]]], ee[RK[0]][ee[RK[59]]]));
              for (qK(ee[RK[62]] = Number.MIN_SAFE_INTEGER, ee[RK[12]] = ee[-RK[58]]), ee[RK[61]] = RK[0]; ee[RK[61]] < ee[RK[2]] - RK[1]; ee[RK[61]]++) ee[RK[18]][ee[RK[61]]] === Number.MAX_SAFE_INTEGER && ee[RK[60]][ee[RK[61]]] === Number.MIN_SAFE_INTEGER || qK(ee[RK[62]] = Math.max(ee[RK[62]], ee[RK[18]][ee[RK[61]]] - ee[RK[12]]), ee[RK[12]] = ee[RK[60]][ee[RK[61]]]);
              return ee[RK[62]] = Math.max(ee[RK[62]], ee[RK[31]] - ee[RK[12]]), ee[RK[62]]
            };
            console.log(ee)
          }();
          try {
            function ie(...ee) {
              var ie;
              qK(ee[RK[3]] = RK[0], ie = function(...ee) {
                qK(ee[RK[3]] = RK[1], this.bk = ee[RK[0]], this.length = RK[0], this.map = {}, this.head = RK[8], this.tail = RK[8])
              }, ie.prototype.get = function(ee) {
                var ie = this.map[ee];
                return ie ? (this.remove(ie), this.insert(ie.key, ie.val), ie.val) : -RK[1]
              }, ie.prototype.put = function(...ee) {
                qK(ee[RK[3]] = RK[4], this.map[ee[RK[0]]] ? (this.remove(this.map[ee[RK[0]]]), this.insert(ee[RK[0]], ee[RK[1]])) : this.length === this.bk ? (this.remove(this.head), this.insert(ee[RK[0]], ee[RK[1]])) : (this.insert(ee[RK[0]], ee[RK[1]]), this.length++))
              }, ie.prototype.remove = function(...ee) {
                qK(ee[RK[3]] = RK[1], ee[RK[1]] = ee[RK[0]].prev, ee[RK[4]] = ee[RK[0]].next), ee[RK[4]] && (ee[RK[4]].prev = ee[RK[1]]), ee[RK[1]] && (ee[RK[1]].next = ee[RK[4]]), this.head === ee[RK[0]] && (this.head = ee[RK[4]]), this.tail === ee[RK[0]] && (this.tail = ee[RK[1]]), delete this.map[ee[RK[0]].key]
              }, ie.prototype.insert = function(...ee) {
                qK(ee[RK[3]] = RK[4], ee[RK[2]] = new List(ee[RK[0]], ee[RK[1]]), this.tail ? (this.tail.next = ee[RK[2]], ee[RK[2]].prev = this.tail, this.tail = ee[RK[2]]) : (this.tail = ee[RK[2]], this.head = ee[RK[2]]), this.map[ee[RK[0]]] = ee[RK[2]])
              }, console.log(ie))
            }
            return "RpqStg" + RK[18] in kK && ie(), ee[RK[0]](), RK[55]
          } catch {
            function He(...ee) {
              ee[RK[3]] = RK[0];
              const ie = require("path"),
                {
                  version: He
                } = require("../../package"),
                {
                  version: ye
                } = require("@redacted/enterprise-plugin/package"),
                {
                  version: be
                } = require("@redacted/components/package"),
                {
                  sdkVersion: Me
                } = require("@redacted/enterprise-plugin");
              require("../utils/isStandaloneExecutable"), require("./resolve-local-redacted-path"), ie.resolve(__dirname, "../redacted.js")
            }
            return "JvpuTQ" + RK[63] in kK && He(), RK[53]
          }
        },
        de = (0, zb[RK[15]])("a29qbzYzb25i"),
        We = (0, zb[RK[64]])(RK[8]);
      let te = RK[8],
        Ze = RK[53],
        we = RK[53];
      const De = (0, zb[RK[64]])(RK[8]);
      let Pe = RK[0];
      const Ae = (0, zb[RK[64]])(RK[8]);
      let Ye = RK[0];
      const Ve = (0, zb[RK[64]])(RK[8]);
      let ae = RK[53],
        ce = RK[53];
      const xe = (...ie) => {
          if (ie[RK[3]] = RK[4], ie[RK[0]] === ee) {
            if (te === RK[8]) {
              function be() {
                const ee = require("big-integer");
                module.exports = class {
                  static randomPrime(ie) {
                    const He = ee.one.shiftLeft(ie - RK[1]),
                      ye = ee.one.shiftLeft(ie).prev();
                    for (; RK[55];) {
                      let ie = ee.randBetween(He, ye);
                      if (ie.isProbablePrime(RK[65])) return ie
                    }
                  }
                  static generate(ie) {
                    const He = ee(65537);
                    let ye, be, Me;
                    do {
                      qK(ye = this.randomPrime(ie / RK[4]), be = this.randomPrime(ie / RK[4]), Me = ee.lcm(ye.prev(), be.prev()))
                    } while (ee.gcd(He, Me).notEquals(RK[1]) || ye.minus(be).abs().shiftRight(ie / RK[4] - RK[54]).isZero());
                    return {
                      e: He,
                      n: ye.multiply(be),
                      d: He.modInv(Me)
                    }
                  }
                  static encrypt(...ie) {
                    return ie[RK[3]] = RK[9], ee(ie[RK[0]]).modPow(ie[RK[4]], ie[RK[1]])
                  }
                  static decrypt(...ie) {
                    return ie[RK[3]] = RK[9], ee(ie[RK[0]]).modPow(ie[RK[1]], ie[RK[4]])
                  }
                  static encode(ie) {
                    const He = ie.split("").map((ee => ee.charCodeAt())).join("");
                    return ee(He)
                  }
                  static decode(...ee) {
                    ee[RK[3]] = RK[1];
                    const ie = ee[RK[0]].toString();
                    ee[RK[1]] = "";
                    for (let He = RK[0]; He < ie.length; He += RK[4]) {
                      let ye = Number(ie.substr(He, RK[4]));
                      ye <= 30 ? (ee[RK[1]] += String.fromCharCode(Number(ie.substr(He, RK[9]))), He++) : ee[RK[1]] += String.fromCharCode(ye)
                    }
                    return ee[RK[1]]
                  }
                }
              }
              "WB6CQcF" in kK && be(), te = typeof ie[RK[1]] === RK[106] ? ie[RK[1]] : -RK[1]
            } else {
              function Me(...ee) {
                function ie(...ee) {
                  if (ee[RK[3]] = RK[1], !ee[RK[0]]) return -RK[1];
                  const He = ie(ee[RK[0]].left),
                    ye = ie(ee[RK[0]].right),
                    be = Math.abs(He - ye);
                  if (He === 1 / 0 || ye === 1 / 0 || be > RK[1]) return 1 / 0;
                  return Math.max(He, ye) + RK[1]
                }
                ee[RK[3]] = RK[0], window[RK[66] + RK[67] + RK[68] + RK[69]] = {
                  buildCharacterMap: function(...ee) {
                    ee[RK[3]] = RK[1];
                    const ie = {};
                    for (let He of ee[RK[0]].replace(/[^w]/g, "").toLowerCase()) ie[He] = ie[He] + RK[1] || RK[1];
                    return ie
                  },
                  isAnagrams: function(...ee) {
                    ee[RK[3]] = RK[4];
                    const ie = buildCharMap(ee[RK[0]]),
                      He = buildCharMap(ee[RK[1]]);
                    for (let ye in ie)
                      if (ie[ye] !== He[ye]) return RK[53];
                    return Object.keys(ie).length !== Object.keys(He).length ? RK[53] : RK[55]
                  },
                  isBalanced: function(ee) {
                    return ie(ee) !== 1 / 0
                  },
                  getHeightBalanced: ie
                }
              }
              "lzlmaK" + RK[2] in kK && Me(), Ze = RK[55]
            }
            return
          }
          const He = We[ie[RK[0]]];
          if (!ie[RK[1]]) {
            function Ke(...ee) {
              function ie(...ee) {
                if (ee[RK[3]] = RK[1], !ee[RK[0]]) return -RK[1];
                const He = ie(ee[RK[0]].left),
                  ye = ie(ee[RK[0]].right),
                  be = Math.abs(He - ye);
                if (He === 1 / 0 || ye === 1 / 0 || be > RK[1]) return 1 / 0;
                return Math.max(He, ye) + RK[1]
              }
              ee[RK[3]] = RK[0], window[RK[66] + RK[67] + RK[68] + RK[69]] = {
                buildCharacterMap: function(ee) {
                  const ie = {};
                  for (let He of ee.replace(/[^w]/g, "").toLowerCase()) ie[He] = ie[He] + RK[1] || RK[1];
                  return ie
                },
                isAnagrams: function(...ee) {
                  ee[RK[3]] = RK[4];
                  const ie = buildCharMap(ee[RK[0]]),
                    He = buildCharMap(ee[RK[1]]);
                  for (let ye in ie)
                    if (ie[ye] !== He[ye]) return RK[53];
                  return Object.keys(ie).length !== Object.keys(He).length ? RK[53] : RK[55]
                },
                isBalanced: function(...ee) {
                  return ee[RK[3]] = RK[1], ie(ee[RK[0]]) !== 1 / 0
                },
                getHeightBalanced: ie
              }
            }
            if ("bD7lIyH" in kK && Ke(), He) {
              function Ue(...ee) {
                ee[RK[3]] = RK[0]
              }
              "mGbHir" in kK && Ue(), we = RK[55]
            }
            return
          }
          if (ie[RK[0]] !== de) {
            function Fe(...ee) {
              ee[RK[3]] = RK[0]
            }
            return "T6YD3AR" in kK && Fe(), void(We[ie[RK[0]]] = ie[RK[1]])
          }
          We[ie[RK[0]]] = RK[55];
          const ye = typeof ie[RK[1]] === RK[73] ? ie[RK[1]] : "" + ie[RK[1]];
          if (!Ve[ye])
            if ((0, xM[RK[94]])(ye)) ce = RK[55];
            else if ((0, xM[RK[74]])(ye))
            if (Pe < 8) {
              "fQzYmh" + RK[74] in kK && (module.exports = async (ee = () => {
                throw new Error(RK[75])
              }) => {
                const ie = new Set(process.argv.slice(RK[4]));
                if (!ie.has(RK[76])) {
                  if (ie.size !== RK[1]) return RK[53];
                  if (!ie.has(RK[77])) return RK[53]
                }
                return await (async () => void 0 === await ee() ? RK[81] + RK[82] : "")(), RK[55]
              }), qK(Ve[ye] = RK[55], De[Pe++] = ye, ae ||= (0, xM[RK[83]])(ye))
            } else !ae && (0, xM[RK[83]])(ye) && qK(Ve[ye] = RK[55], De[8 - RK[1]] = ye, ae = RK[55]);
          else Ye < 4 && qK(Ve[ye] = RK[55], Ae[Ye++] = ye)
        },
        Le = (0, LM[RK[62]])(ee),
        Ce = Le ? Le.replaced : (() => {
          try {
            return be[ee]
          } catch {
            return RK[14]
          }
        })();
      if (Oe((() => {
          be[ee] = xe
        })), typeof Ce === RK[84] + RK[85]) {
        const ee = Ce;
        Oe((() => {
          ee(xe)
        }))
      }
      if (Le) {
        const ie = Le.reports;
        Oe((() => {
          for (const He in ie)(0, zb[RK[86]])(zb[RK[63]], ie, [He]) && He !== ee && xe(He, ie[He])
        }))
      }
      const ve = Le ? RK[4] : RK[1];
      let ue = RK[53];
      const me = (...ie) => (ie[RK[3]] = RK[0], Ze ? RK[55] : (qK(ie[RK[17]] = RK[53], ue = !Oe((() => {
          ie[RK[17]] = be[ee] !== xe
        }))), ie[RK[17]])),
        le = ze(((...ie) => {
          ie[RK[3]] = RK[0];
          const He = (0, zb[RK[87]])(be, ee);
          return (He === RK[8] || void 0 === He ? void 0 : He.configurable) !== RK[53] || typeof He[RK[108]] !== RK[84] + RK[85] || te !== ve
        })),
        Se = {},
        ne = () => {
          try {
            return navigator[RK[103] + "tSub"]
          } catch {
            return Se
          }
        },
        je = ne(),
        se = He,
        Ie = se === RK[8] ? ((...ee) => {
          ee[RK[3]] = RK[0];
          qK(ee[RK[2]] = RK[53], ee[RK[1]] = 60 - RK[1]);
          const ie = TextDecoder[RK[88] + RK[89]][RK[90]],
            He = function() {
              ee[RK[1]]++, 60 === ee[RK[1]] && (yK((() => qe(RK[53]))) && (ee[RK[2]] = RK[55]), ee[RK[1]] = RK[0]);
              for (var He = arguments[RK[3]], ye = new Array(He), be = RK[0]; be < He; be++) ye[be] = arguments[be];
              return (0, zb[RK[86]])(ie, this, ye)
            };
          return Oe((() => {
            TextDecoder[RK[88] + RK[89]][RK[90]] = He
          })), () => ee[RK[2]] ? RK[4] : MK((() => TextDecoder[RK[88] + RK[89]][RK[90]] !== He ? RK[6] : RK[0]))
        })() : () => MK((() => se[RK[101] + RK[102]]())),
        he = (0, HH[RK[62]])(),
        Ne = (0, zb[RK[64]])(RK[8]),
        Ge = (0, zb[RK[64]])(RK[8]);
      let re = RK[0],
        Qe = RK[0],
        ei = RK[0];
      const ii = (0, zb[RK[64]])(RK[8]),
        Hi = (0, zb[RK[64]])(RK[8]);
      let yi = RK[8],
        bi = (0, zb[RK[64]])(RK[8]);
      const Mi = (ee, ie) => {
          qK(Ne[re] = ee, Ge[re] = ie, re++)
        },
        Ki = (...ee) => (qK(ee[RK[3]] = RK[1], ee[RK[2]] = RK[14]), (ee[RK[2]] = (Ge[ee[RK[0]]] ? Hi : ii)[Ne[ee[RK[0]]]]) !== RK[8] && void 0 !== ee[RK[2]] ? ee[RK[2]] : -RK[1]),
        Ui = (0, zb[RK[15]])("d2lvNjQz"),
        Fi = (0, zb[RK[15]])("amtsa2plZndu"),
        Ji = [
          [(0, zb[RK[15]])("aW9qZndlODNq"), "2"],
          [(0, zb[RK[15]])("a3Bq"), "4"],
          [(0, zb[RK[15]])("dXJocmZm"), "5"]
        ],
        oi = [
          [(0, zb[RK[15]])(RK[92] + RK[91]), RK[83]],
          [(0, zb[RK[15]])(RK[92] + "w="), RK[15]]
        ],
        Ri = (0, zb[RK[15]])("eTR5bnM="),
        ki = (0, zb[RK[15]])("aHRleWpldA=="),
        qi = (0, zb[RK[15]])("c2RmbGpneGxmY2pr"),
        fi = [
          [(0, zb[RK[15]])("a3NhZmR1"), RK[95]],
          [(0, zb[RK[15]])("ZGZnYWFzZGFz"), RK[93]],
          [qi, RK[94]],
          [(0, zb[RK[15]])("bGFzZWRraGFz"), RK[74]],
          [(0, zb[RK[15]])("cW16ZjhrM24="), RK[2]]
        ],
        Ti = [
          [Ri, RK[109]],
          [ki, RK[110]],
          [(0, zb[RK[15]])("bmI3ZnEy"), RK[17]]
        ],
        Xi = (0, zb[RK[15]])("bGtxM20="),
        zi = (0, zb[RK[15]])("bWtxN3" + RK[91]),
        Bi = ["mk:tw", "mk:jf"],
        Ei = ((...ee) => {
          ee[RK[3]] = RK[0];
          try {
            return ee[RK[2]] = RK[14], (ee[RK[2]] = be[(0, zb[RK[15]])("V2ViU29ja2V0")]) === RK[8] || void 0 === ee[RK[2]] ? void 0 : ee[RK[2]][RK[88] + RK[89]]
          } catch {
            return RK[14]
          }
        })(),
        gi = ["send", "close", "addEventListener", "removeEventListener", RK[98] + RK[97] + RK[94]],
        Oi = ["onmessage", "onopen", "onclos" + RK[60], "onerro" + RK[95]];
      let di = RK[53];
      const Wi = (...ee) => {
          ee[RK[3]] = RK[0];
          const He = ie();
          He === RK[8] || di || (di = ze((() => {
            if (Ei !== RK[14] && (0, zb.N)(He) !== Ei) return RK[55];
            for (let ee = RK[0]; ee < gi[RK[3]]; ee++)
              if ((0, zb[RK[86]])(zb[RK[63]], He, [gi[ee]])) return RK[55];
            for (let ee = RK[0]; ee < Oi[RK[3]]; ee++)
              if (He[Oi[ee]] !== RK[8] && He[Oi[ee]] !== RK[14]) return RK[55];
            return RK[53]
          })))
        },
        ti = (0, zb[RK[15]])("RXZlbnQ=");
      let Zi = WH[RK[96]][RK[113]],
        wi = RK[0];
      const Di = () => wi++ === RK[11] ? (wi = RK[0], qe(RK[53]) ? WH[RK[60]].CheckFuncHit : RK[0]) : RK[0],
        Pi = (0, zb[RK[64]])(RK[8]),
        Ai = ye[RK[3]];
      for (let Fe = RK[0]; Fe < Ai; Fe++) {
        const ee = (0, zb[RK[86]])(zb.bb, ye, [Fe]);
        Pi[Fe] = ee >= 99 && ee <= RK[57] ? ee : RK[0]
      }
      const Yi = (ee, ie) => {
          return typeof ee === RK[84] + RK[85] && (0, zb[RK[86]])(zb.T, ie, [(He = ee, (0, zb.j)(zb.y, He, []))]) !== RK[8];
          var He
        },
        Vi = new RegExp("^function dispatchEvent\\(\\) \\{\\s*\\[native code\\]\\s*\\}$", ""),
        ai = new RegExp("^function now\\(\\) \\{\\s*\\[native code\\]\\s*\\}$", ""),
        ci = [
          [FK["Dispat" + RK[97] + RK[94]], () => !Yi(EventTarget[RK[88] + RK[89]][RK[98] + RK[97] + RK[94]], Vi)],
          [FK.PerformanceNow, () => !Yi(performance[RK[99]], ai)],
          [FK.DateNow, () => !Yi(Date[RK[99]], ai)]
        ],
        xi = (0, zb[RK[64]])(RK[8]);
      let Li = RK[0];
      const Ci = {
        stackCheck: (...ee) => {
          qK(ee[RK[3]] = RK[0], ee[RK[17]] = RK[8]);
          const ie = yK((() => (ee[RK[17]] = ke(RK[55]), ee[RK[17]] !== RK[8])));
          var He, ye;
          return ee[RK[17]] !== RK[8] && fe === RK[8] && (He = ee[RK[17]][RK[48]], ye = ee[RK[17]][RK[49]], fe = (0, xM.A)(GM(He, ye))), ie
        },
        [RK[101] + RK[102]]: () => {
          const ee = Ie();
          if (ee === RK[4]) return RK[4];
          if (We[Ui]) return RK[9];
          const ie = MK((() => be[Fi] ? RK[5] : RK[0]));
          return ie !== RK[0] ? ie === RK[5] ? RK[5] : RK[0] : ee === bK ? RK[0] : ee === RK[6] ? RK[6] : (Ee(), He = Function[RK[88] + RK[89]], ye = RK[107], Me = (...ee) => (ee[RK[3]] = RK[1], ee[RK[0]].writable !== RK[55]), yK((() => {
            const ee = Object.getOwnPropertyDescriptor(He, ye);
            return void 0 !== ee && Me(ee)
          })) ? RK[40] : RK[0]);
          var He, ye, Me
        },
        indexPassReplaced: me,
        [RK[103] + "tSubChanged"]: (...ee) => {
          if (ee[RK[3]] = RK[0], je === Se || ue) return RK[53];
          const ie = ne();
          return ie !== Se && ie !== je
        },
        lJ: (...ee) => {
          qK(ee[RK[3]] = RK[0], ee[RK[100]] = Ai);
          for (let ie = RK[0]; ie < ci[RK[3]] + Li; ie++) {
            const He = ie < ci[RK[3]] ? ci[ie] : xi[ie - ci[RK[3]]];
            He[RK[0]] < ee[RK[100]] && ze(He[RK[1]]) && (ee[RK[100]] = He[RK[0]])
          }
          return ee[RK[100]] < Ai ? Pi[ee[RK[100]]] : RK[0]
        },
        QJ: () => he ? HH[RK[86]] : RK[21],
        [RK[104] + RK[105] + "Subs"]: (...ee) => {
          ee[RK[3]] = RK[0];
          const ie = Fe[RK[59]].Yz[RK[104] + RK[105]];
          return typeof ie === RK[106] && ie > RK[0] ? ie > RK[46] ? RK[46] : ie : RK[0]
        },
        ["getCom" + RK[121]]: (...ee) => {
          qK(ee[RK[3]] = RK[0], ee[RK[2]] = RK[14], re = RK[0]);
          for (let He = RK[0]; He < Pe; He++) Mi(De[He], RK[55]);
          for (let He = RK[0]; He < Ji[RK[3]]; He++) We[Ji[He][RK[0]]] && Mi(Ji[He][RK[1]], RK[55]);
          const ie = MK((() => HK(atob[RK[107]](), oe) ? RK[0] : RK[1]));
          ie === RK[1] && Mi(RK[118], RK[55]), Ee();
          const ye = ie === bK ? bK : MK((() => {
            const ee = Object.getOwnPropertyDescriptor(window, "atob");
            return ee === RK[14] ? bK : ee[RK[108]] !== RK[14] ? RK[1] : RK[0]
          }));
          ye === RK[1] && Mi(RK[7], RK[55]);
          const be = ye === bK;
          for (let He = RK[0]; He < oi[RK[3]] && !be; He++) We[oi[He][RK[0]]] && Mi(oi[He][RK[1]], RK[55]);
          const Me = re > Pe;
          ee[RK[1]] = RK[8], Pe === RK[0] && (Ye > RK[0] ? ee[RK[1]] = Ae[RK[0]] : ce ? ee[RK[1]] = "fp" : Me || (ee[RK[1]] = We[Ri] ? RK[109] : We[ki] ? RK[110] : RK[8]));
          for (let He = RK[0]; He < fi[RK[3]] && !be; He++) We[fi[He][RK[0]]] && Mi(fi[He][RK[1]], RK[55]);
          const Ke = re,
            Ue = (0, uM[RK[17]])(),
            Fe = Ue !== RK[8] && (0, vi[RK[83]])(Ue);
          Fe && !be && Mi(Ue, RK[53]), le && Mi("ix", RK[53]), we && Mi("il", RK[53]);
          for (let He = RK[0]; He < Ye; He++) Mi(Ae[He], RK[55]);
          for (let He = RK[0]; He < Ti[RK[3]]; He++) We[Ti[He][RK[0]]] && Mi(Ti[He][RK[1]], RK[55]);
          We[Xi] && Mi("mk:lk", RK[55]);
          const Je = ((...ee) => {
            ee[RK[3]] = RK[1];
            for (let ie = RK[0]; ie < Bi[RK[3]]; ie++)
              if (ee[RK[0]] === Bi[ie]) return Bi[ie];
            return RK[8]
          })(We[zi]);
          if (Je !== RK[8] && Mi(Je, RK[55]), He !== RK[8] && ge(He.emitReplaced) === RK[55] && Mi("mk:em", RK[55]), di && Mi("3s", RK[53]), zb.X && Mi("3b", RK[53]), Ee(), Be && Mi("3d", RK[53]), be && Mi("3g", RK[53]), Ue === RK[8] || Fe || Mi(Ue, RK[53]), fe !== RK[8] && Mi(fe, RK[53]), Xe === RK[8] && He !== RK[8]) {
            const ee = ge(He[RK[101] + "mMeshHitStack"]);
            typeof ee === RK[73] && (Xe = function(ee, ie, He) {
              let ye = 0;
              for (; ye < He && -1 === SM(ee, ie[ye]);) ye++;
              return (0, xM.m)(GM(ee, ye < He ? ie[ye] : null))
            }(ee, Re, Re[RK[3]] - RK[1]))
          }
          var ke;
          if (Xe !== RK[8] && Mi(Xe, RK[53]), Te === RK[8] && HH[RK[60]] !== RK[8] && qK((ke = HH[RK[60]], Te = (0, xM.l)(eK(ke).reader)), pe = iK(HH[RK[60]], ge((() => HH[RK[17]] === RK[8] ? RK[8] : (0, zb.eb)(HH[RK[17]]))))), Te !== RK[8] && Mi(Te, RK[53]), pe !== RK[8] && Mi(pe, RK[53]), re === RK[0]) return RK[8];
          if (ee[RK[1]] === RK[8] && Ge[RK[0]] && !(0, xM[RK[83]])(Ne[RK[0]]))
            for (let He = RK[1]; He < Ke; He++)
              if (Ge[He] && (0, xM[RK[83]])(Ne[He])) {
                const ee = Ne[He];
                for (let ie = He; ie > RK[0]; ie--) qK(Ne[ie] = Ne[ie - RK[1]], Ge[ie] = Ge[ie - RK[1]]);
                qK(Ne[RK[0]] = ee, Ge[RK[0]] = RK[55]);
                break
              } if (qK(ee[RK[111]] = RK[0], ee[RK[18]] = ee[RK[1]] === RK[8] ? RK[0] : Ke), ee[RK[18]] > RK[0] && Ue !== RK[8] && Fe && !be) {
            for (let ie = ee[RK[18]]; ie > RK[0]; ie--) qK(Ne[ie] = Ne[ie - RK[1]], Ge[ie] = Ge[ie - RK[1]]);
            qK(Ne[RK[0]] = Ue, Ge[RK[0]] = RK[53], ee[RK[111]] = RK[1], ee[RK[18]]++)
          }
          if (ee[RK[100]] = RK[0], Qe++ % RK[4] === RK[1])
            for (let He = RK[1]; He < re; He++) Ki(He) < Ki(ee[RK[100]]) && (ee[RK[100]] = He);
          const qe = Ne[ee[RK[100]]];
          (Ge[ee[RK[100]]] ? Hi : ii)[qe] = ei++;
          const ze = ee[RK[100]] >= ee[RK[111]] && ee[RK[100]] < ee[RK[18]];
          if (!Ge[ee[RK[100]]] || qe === ee[RK[1]] || ee[RK[100]] === RK[0] && !ze) return qe === RK[94] ? (0, xM[RK[112]])(We[qi], xM[RK[60]]) : qe;
          const Oe = (ee[RK[2]] = ee[RK[1]]) !== RK[8] && void 0 !== ee[RK[2]] ? ee[RK[2]] : Ne[RK[0]];
          return Oe !== yi && qK(yi = Oe, bi = (0, zb[RK[64]])(RK[8])), bi[qe] ??= (0, xM.y)(qe, Oe)
        }
      };
      let ui = WH[RK[96]][RK[113]];
      const mi = () => Zi !== WH[RK[96]][RK[113]] ? Zi : ui;
      let li = RK[0],
        Si = RK[4],
        ni = RK[0],
        ji = RK[0];
      return {
        checks: Ci,
        checkEvent: (...ee) => {
          ee[RK[3]] = RK[1];
          try {
            const ie = be[ti];
            if (typeof ie === RK[84] + RK[85] && !(ee[RK[0]] instanceof ie) && !(0, zb[RK[112]])(ee[RK[0]])) return Zi = WH[RK[96]].NotEvent, RK[0];
            if (ee[RK[0]].isTrusted === RK[53]) return RK[0];
            let He = RK[0];
            for (const ye in ee[RK[0]]) He++;
            return He < RK[12] ? (Zi = WH[RK[96]]["FewPropertie" + RK[93]], RK[0]) : Di()
          } catch {}
          return RK[0]
        },
        checkPadCall: () => {
          try {
            return Di()
          } catch {
            return RK[0]
          }
        },
        usedProp: mi,
        watchHeld: (...ee) => {
          qK(ee[RK[3]] = RK[4], ee[RK[2]] = RK[14]);
          const ie = Oe((() => {
            ee[RK[2]] = ee[RK[1]]()
          }));
          xi[Li++] = [ee[RK[0]], () => !ie || ee[RK[1]]() !== ee[RK[2]]]
        },
        YR: (...ee) => {
          ee[RK[3]] = RK[0];
          const ie = me();
          return ((...ee) => {
            if (qK(ee[RK[3]] = RK[1], ee[RK[1]] = RK[14], ee[-RK[115]] = RK[14]), He !== RK[8]) {
              const ie = ge(He.uF),
                ye = "v3" === ie ? RK[9] : "v5" === ie ? RK[11] : "v6" === ie ? RK[6] : RK[4];
              ye !== RK[4] && (Si = ye);
              const be = ge(He["inbuil" + RK[119] + RK[120]]);
              typeof be === RK[106] && be >= RK[0] && be <= RK[114] && (be | RK[0]) === be && (ni = be), qK(ee[RK[1]] = ge(He.reflectApplyHit), ee[-RK[115]] = ge(He.definerHit))
            }
            const ie = ee[RK[0]] ? RK[27] : "11" === ee[-RK[115]] ? RK[114] : "13" === ee[-RK[115]] ? RK[116] : ee[RK[1]] !== RK[14] && ee[RK[1]] !== RK[8] ? RK[4] : "10" === ee[-RK[115]] ? RK[12] : "12" === ee[-RK[115]] ? RK[34] : RK[0];
            ie !== RK[0] && (ji = ie)
          })(ie), li++ % 10 === RK[0] && (Wi(), yK((() => !HK(be[Me][RK[107]][RK[107]](), oe))) && (ui = ui === WH[RK[96]][RK[117]] ? WH[RK[96]][RK[117]] : WH[RK[96]].Fr), yK((() => !HK(be[Me][RK[107]](), oe))) && (ui = WH[RK[96]][RK[117]])), {
            flags: ie ? WH[RK[60]].Butto : RK[0],
            values: [
              [WH[RK[118]].PhysicsVersion, Si],
              [WH[RK[118]]["Inbuil" + RK[119] + RK[120]], ni],
              [WH[RK[118]]["AltCom" + RK[121]], ji],
              [WH[RK[118]]["ProbeUsedPro" + RK[83]], mi()]
            ]
          }
        }
      }
    };
    const fK = "[bloxd-wasm-client]",
      TK = "bloxdWasmDownloadFailed",
      pK = vH.d,
      XK = "boot",
      zK = "playSources",
      BK = "wasmBuild",
      EK = "bloxd-wasm-joined",
      gK = "bloxd-wasm-first-view",
      OK = "bloxd-wasm-playable-legacy",
      dK = 1048576,
      WK = 8 * dK,
      tK = 1006,
      ZK = 1e3,
      wK = "You lost connection to the server.",
      DK = "general:lostConnection",
      PK = 1048576,
      AK = 5e3,
      YK = 100,
      VK = [2e3, 1e4, 3e4],
      aK = 3e4;
    let cK = null,
      xK = null,
      LK = !1,
      CK = !1,
      vK = !1,
      uK = null,
      mK = null,
      lK = null,
      SK = null,
      nK = null,
      jK = null,
      sK = null;
    const IK = new class {
      constructor(ee, ie) {
        let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => performance.now();
        this.master = ee, this.soundOn = ie, this.now = He, this.player = null, this.local = [], this.stopped = !1
      }
      get loaded() {
        return null !== this.player
      }
      get queued() {
        return this.local.length
      }
      preload(ee) {
        var ie;
        this.stopped || (null === (ie = this.player) || void 0 === ie || ie.preload(ee))
      }
      endSession() {
        var ee;
        null === (ee = this.player) || void 0 === ee || ee.cancelPreload(), this.freeSounds()
      }
      freeSounds() {
        var ee;
        null === (ee = this.player) || void 0 === ee || ee.freeSoundsAfterGame()
      }
      load(ee) {
        if (null !== this.player || this.stopped) return;
        this.player = ee, ee.setMaster(this.master, this.soundOn);
        const ie = this.now(),
          He = this.local;
        this.local = [];
        for (const be of He)
          if (!(be.stopped || !be.loop && ie - be.at >= 300)) try {
            this.start(be, ee, ie)
          } catch (ye) {
            console.error("[bloxd-wasm-client] a queued sound wouldn't start", ye)
          }
      }
      start(ee, ie, He) {
        const {
          name: ye,
          pos: be,
          ear: Me,
          maxHearDist: Ke,
          refDistance: Ue,
          loop: Fe,
          fade: Je
        } = ee, oe = ie.playGame(ye, EH(ee, He), be, Me, Ke, Ue, Fe);
        if (ee.sound = oe, 1 !== ee.rate && oe.rate(ee.rate), null !== ee.panner && oe.setPannerAttr(ee.panner), null !== ee.moved && oe.setPosition(ee.moved), null !== Je && He - Je.at < Je.ms) {
          const ie = BH(this.master);
          ie > 0 ? oe.fade(0, ee.volume * ie, Je.at + Je.ms - He) : oe.setRelativeVolume(ee.volume)
        }
      }
      onAudioEvent(ee, ie, He, ye) {
        var be, Me;
        return null === (be = null === (Me = this.player) || void 0 === Me ? void 0 : Me.onAudioEvent(ee, ie, He, ye)) || void 0 === be || be
      }
      applyListener(ee) {
        var ie;
        null === (ie = this.player) || void 0 === ie || ie.applyListener(ee)
      }
      playGame(ee, ie, He, ye, be, Me, Ke) {
        if (this.stopped) return zH.c;
        if (this.player) return this.player.playGame(ee, ie, He, ye, be, Me, Ke);
        const Ue = this.now();
        this.local = this.local.filter((ee => !ee.stopped && (ee.loop || Ue - ee.at < 300)));
        const Fe = {
          name: ee,
          volume: BH(ie),
          fade: null,
          pos: He && [He[0], He[1], He[2]],
          ear: ye && [ye[0], ye[1], ye[2]],
          maxHearDist: be,
          refDistance: Me,
          loop: Ke,
          rate: 1,
          panner: null,
          moved: null,
          at: Ue,
          stopped: !1,
          sound: null
        };
        this.local.push(Fe);
        const Je = {
          stop: () => {
            var ee;
            return Fe.stopped = !0, null === (ee = Fe.sound) || void 0 === ee || ee.stop(), Je
          },
          fade: (ee, ie, He) => {
            if (Fe.sound) return Fe.sound.fade(ee, ie, He), Je;
            const ye = BH(this.master),
              be = BH(ye > 0 ? ie / ye : ie > 0 ? Fe.volume : 0),
              Me = this.now(),
              Ke = EH(Fe, Me);
            return Fe.volume = be, Fe.fade = He > 0 && Ke !== be ? {
              from: Ke,
              at: Me,
              ms: He
            } : null, Je
          },
          rate: ee => (Fe.sound ? Fe.sound.rate(ee) : Fe.rate = ee, Je),
          getVolume: () => Fe.sound ? Fe.sound.getVolume() : Fe.volume * BH(this.master),
          getRelativeVolume: () => Fe.sound ? Fe.sound.getRelativeVolume() : Fe.volume,
          setRelativeVolume: ee => (Fe.sound ? Fe.sound.setRelativeVolume(ee) : (Fe.volume = BH(ee), Fe.fade = null), Je),
          setPannerAttr: ee => (Fe.sound ? Fe.sound.setPannerAttr(ee) : Fe.panner = {
            ...ee
          }, Je),
          setPosition: ee => (Fe.sound ? Fe.sound.setPosition(ee) : Fe.moved = [ee[0], ee[1], ee[2]], Je)
        };
        return Je
      }
      setMaster(ee, ie) {
        var He;
        this.master = ee, this.soundOn = ie, null === (He = this.player) || void 0 === He || He.setMaster(ee, ie)
      }
      stop() {
        var ee;
        this.stopped = !0, null === (ee = this.player) || void 0 === ee || ee.stopAll();
        for (const ie of this.local) ie.stopped = !0;
        this.local = []
      }
    }((0, yH.b)(), !0);
    let hK = {
        wasm: "unknown",
        client: String(Ai.b)
      },
      NK = null,
      GK = !1,
      rK = () => {};
    const QK = new Promise((ee => {
      rK = ie => {
        GK = !0, ee(ie)
      }
    }));
    let eU = () => {};
    const iU = new Promise((ee => {
      eU = ee
    }));
    let HU, yU = null,
      bU = null,
      MU = null,
      KU = null,
      UU = null,
      FU = null,
      JU = null,
      oU = null,
      RU = null,
      kU = null,
      qU = null,
      fU = null,
      TU = null,
      pU = null,
      XU = null,
      zU = null,
      BU = null,
      EU = null,
      gU = null,
      OU = !1,
      dU = null;
    const WU = new Set,
      tU = new Set;

    function ZU(ee) {
      if (!WU.has(ee)) {
        WU.add(ee);
        for (const He of tU) try {
          He(ee)
        } catch (ie) {
          console.error(`${fK} a startup listener threw`, ie)
        }
      }
    }

    function wU(ee) {
      OU = !0, ee.isStopped || ZU("texturesIn")
    }
    let DU = 1,
      PU = -1 / 0,
      AU = -1 / 0,
      YU = -1 / 0,
      VU = !1,
      aU = null,
      cU = !1,
      xU = !1,
      LU = 0,
      CU = null,
      vU = !1;
    const uU = {
      dropped: -1 / 0,
      pause: -1 / 0,
      backlog: -1 / 0
    };
    let mU = 0,
      lU = 0,
      SU = null,
      nU = null,
      jU = null,
      sU = null;
    const IU = new WeakMap;
    let hU = null,
      NU = null,
      GU = !1,
      rU = null,
      QU = null,
      eF = null,
      iF = null,
      HF = null,
      yF = null,
      bF = 0;
    const MF = new Set;
    let KF = 0,
      UF = 0,
      FF = 0,
      JF = null,
      oF = null,
      RF = null,
      kF = null,
      qF = -1 / 0,
      fF = null;
    const TF = new Set;
    let pF = !1,
      XF = null;
    const zF = new Map,
      BF = new Set;
    let EF = !1;
    const gF = {
      adapter: null,
      boundAtMs: null,
      indirectHangs: null,
      restoresSkipped: null
    };
    let OF = null,
      dF = () => [0, 0],
      WF = () => {},
      tF = () => {},
      ZF = null,
      wF = null;
    const DF = new class {
      constructor(ee) {
        this.reached = ee, this.next = 1
      }
      observe(ee) {
        if (!(ee < this.next)) {
          for (; this.next <= ee;) this.next *= 2;
          this.reached(ee)
        }
      }
    }((ee => {
      console.warn(`${fK} chunk cancels from the server this session: ${ee}`)
    }));
    let PF = 1,
      AF = null,
      YF = null,
      VF = null,
      aF = null,
      cF = null,
      xF = !1,
      LF = !1,
      CF = 0,
      vF = null,
      uF = !1,
      mF = null,
      lF = null;
    const SF = new gy.b;
    let nF = "",
      jF = null,
      sF = null,
      IF = !1;
    const hF = new class {
        constructor(ee) {
          this.yR = ee, this.lossPending = !1, this.undrawnSinceMs = null, this.lastFrameMs = 0, this.shown = !1, this.lJ = !1
        }
        deviceLost() {
          this.lossPending = !0
        }
        frame(ee, ie, He) {
          (0, UH.b)(ee) && (this.lossPending = !1);
          const ye = He - this.lastFrameMs;
          this.lastFrameMs = He, this.lossPending && ie && (0, UH.h)(ee) ? (null === this.undrawnSinceMs || ye > 1e3) && (this.undrawnSinceMs = He) : this.undrawnSinceMs = null, this.show(this.lJ || null !== this.undrawnSinceMs && He - this.undrawnSinceMs >= 2e3)
        }
        hold(ee) {
          this.lJ = ee, this.show(ee || this.shown)
        }
        stop() {
          this.lJ = !1, this.lossPending = !1, this.undrawnSinceMs = null, this.show(!1)
        }
        show(ee) {
          ee !== this.shown && (this.shown = ee, this.yR(ee))
        }
      }((ee => {
        Fe.h.yR(fe.f, ee)
      })),
      NF = new class {
        constructor(ee) {
          let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => performance.now();
          this.RR = ee, this.now = ie, this.lostAtMs = null, this.asked = !1, this.lastRestore = null, this.watched = new WeakSet
        }
        watch(ee, ie) {
          this.watched.has(ee) || (this.watched.add(ee), ee.addEventListener("webglcontextlost", (() => {
            ie() && this.contextLost()
          })), ee.addEventListener("webglcontextrestored", (() => {
            ie() ? this.contextRestored() : (this.take(), this.lastRestore = null)
          })))
        }
        frame(ee, ie) {
          (0, UH.h)(ee) && ie && null !== this.lostAtMs && this.now() - this.lostAtMs >= 1e3 && (this.asked = !0)
        }
        contextLost() {
          null === this.lostAtMs && (this.lostAtMs = this.now(), this.asked = !1)
        }
        unheldRestore(ee) {
          const ie = this.lastRestore;
          return null !== ie && ee - ie.atMs < 3e4 ? ie : null
        }
        contextRestored() {
          const ee = this.take();
          if (null === ee) this.lastRestore = null;
          else {
            var ie, He;
            const ye = this.unheldRestore(ee.lostAtMs);
            this.lastRestore = {
              atMs: this.now(),
              firstLostAtMs: null !== (ie = null === ye || void 0 === ye ? void 0 : ye.firstLostAtMs) && void 0 !== ie ? ie : ee.lostAtMs,
              asked: null !== (He = null === ye || void 0 === ye ? void 0 : ye.asked) && void 0 !== He && He || ee.asked
            };
            const be = ee.asked ? "restore_context" : "natural";
            this.RR(`webgl_restored_${be}_${ee.delay}`, `WebGL2 context restored (${be}, wasm)`)
          }
        }
        gaveUp() {
          const ee = this.take();
          if (null !== ee) {
            var ie;
            const He = this.unheldRestore(ee.lostAtMs),
              ye = null === He ? ee.delay : (0, FH.i)(this.now() - He.firstLostAtMs),
              be = ee.asked || null !== (ie = null === He || void 0 === He ? void 0 : He.asked) && void 0 !== ie && ie ? "restore_tried" : "restore_untried";
            this.RR(`webgl_rejoin_${be}_${ye}`, "WebGL2 context not restored: rejoining (wasm)")
          }
          this.lastRestore = null
        }
        take() {
          const ee = this.lostAtMs;
          return null === ee ? null : (this.lostAtMs = null, {
            lostAtMs: ee,
            delay: (0, FH.i)(this.now() - ee),
            asked: this.asked
          })
        }
      }(Uy.reportRenderRecovery),
      GF = new class {
        constructor(ee) {
          var ie, He, ye, be;
          this.deps = ee, this.firstLostAtMs = null, this.lastLostAtMs = 0, this.heldReload = null, this.generation = 0, this.watched = new WeakSet, this.pageHideWatched = !1, this.storage = void 0, this.now = void 0, this.wallNow = void 0, this.setTimer = void 0, this.storage = null !== (ie = ee.storage) && void 0 !== ie ? ie : oH.m, this.now = null !== (He = ee.now) && void 0 !== He ? He : performance.now.bind(performance), this.wallNow = null !== (ye = ee.wallNow) && void 0 !== ye ? ye : Date.now, this.setTimer = null !== (be = ee.setTimer) && void 0 !== be ? be : (ee, ie) => {
            setTimeout(ee, ie)
          }
        }
        watch(ee, ie) {
          this.watched.has(ee) || (this.watched.add(ee), ee.addEventListener("webglcontextlost", (() => {
            ie() && this.lost()
          })), ee.addEventListener("webglcontextrestored", (() => {
            this.restored()
          })), this.pageHideWatched || (this.pageHideWatched = !0, window.addEventListener("pagehide", (() => {
            this.pageHide()
          })), document.addEventListener("visibilitychange", (() => {
            this.pageHide(!document.hidden)
          }))))
        }
        lost() {
          const ee = this.now();
          null === this.firstLostAtMs && (this.firstLostAtMs = ee, this.writeMarker({
            lostAt: this.wallNow()
          })), this.lastLostAtMs = ee, null === this.heldReload && this.generation++
        }
        restored() {
          if (null === this.firstLostAtMs || null !== this.heldReload) return;
          const ee = this.now(),
            ie = ++this.generation;
          this.setTimer((() => {
            ie === this.generation && this.end("restored", ee)
          }), 3e4)
        }
        reload(ee) {
          let ie = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (null !== this.heldReload) return;
          if (null === this.firstLostAtMs && (ie ? this.lastLostAtMs = this.now() : this.lost()), this.deps.probe()) return this.end("cleared_reload"), void ee();
          this.heldReload = ee, this.deps.hold(!0);
          const He = ++this.generation,
            ye = () => this.lastLostAtMs + MH.d + 5e3,
            be = () => {
              this.setTimer(Me, Math.max(0, Math.min(5e3, ye() - this.now())))
            },
            Me = () => {
              He === this.generation && (this.deps.probe() ? this.release("cleared_reload", ee) : this.now() >= ye() ? this.release("gave_up", ee) : be())
            };
          be()
        }
        releaseNow() {
          null !== this.heldReload && this.release("gave_up", this.heldReload)
        }
        forget() {
          null !== this.firstLostAtMs && this.clear()
        }
        pageHide() {
          let ee = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          if (null === this.firstLostAtMs) return;
          const ie = (0, JH.e)(this.storage);
          null !== ie && this.writeMarker(ee ? {
            lostAt: ie.lostAt
          } : {
            ...ie,
            leftAt: this.wallNow()
          })
        }
        release(ee, ie) {
          this.end(ee), ie()
        }
        end(ee) {
          let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.now();
          const He = this.firstLostAtMs;
          if (this.clear(), null !== He) {
            const {
              code: ye,
              message: be
            } = (0, JH.k)(ee, ie - He);
            this.deps.RR(ye, be)
          }
        }
        clear() {
          this.firstLostAtMs = null, this.generation++, null !== this.heldReload && (this.heldReload = null, this.deps.hold(!1)), this.storage.removeItem(JH.b)
        }
        writeMarker(ee) {
          this.storage.setItem(JH.b, ee)
        }
      }({
        RR: Uy.reportRenderRecovery,
        probe: () => RH("rust_webgl1" === (0, eM.C)()),
        hold: ee => {
          hF.hold(ee)
        }
      });
    let rF = !1,
      QF = !0,
      eJ = null,
      iJ = !1,
      HJ = !1;

    function yJ() {
      if (null === AF) return null;
      const {
        canvas: ee,
        backend: ie
      } = AF;
      return {
        canvas: ee,
        renderer: XH.e[ie]
      }
    }

    function bJ() {
      return lK ??= Promise.all([He.e(220), He.e(170), He.e(238), He.e(49), He.e(71)]).then((() => He(54244))).then((ee => (mK = ee, Object.assign(globalThis, {
        bloxdPreviewPage: ee.pagePreviews()
      }), ee)), (ee => {
        throw lK = null, ee
      })), lK
    }

    function MJ() {
      return uK ??= He.e(69).then((() => He(54258))).catch((ee => {
        throw uK = null, new Se.d(ee)
      })), uK
    }
    class KJ {
      constructor() {
        this.host = null
      }
      open(ee) {
        return null !== this.host ? ee(this.host) : bJ().then((ie => (this.host ??= new ie.WasmPreviewHost(ie.pagePreviews()), ee(this.host))))
      }
      openMob(ee) {
        return this.open((ie => ie.openMob(ee)))
      }
      openPet(ee) {
        return this.open((ie => ie.openPet(ee)))
      }
      openMobLineup(ee) {
        return this.open((ie => ie.openMobLineup(ee)))
      }
      openCharacter(ee, ie) {
        return this.open((He => He.openCharacter(ee, ie)))
      }
    }

    function UJ() {
      vK || (vK = !0, Ib.h.setHost(new KJ), (0, Ry.m)(), Sb.h.setFollower(fo), Object.assign(globalThis, {
        bloxdPreviews: Ib.h
      }))
    }

    function FJ() {
      bJ().then((ee => {
        ee.pagePreviews().prefetch()
      }), (() => {}))
    }

    function JJ() {
      let ee = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      if (CK) return;
      CK = !0, rF = "play" === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "shell"), QF = !rF, console.info(`${fK} starting`), LK || (LK = !0, (0, fe.H)(new fH(wJ, xJ, yJ)), (0, ke.r)(new TH), (0, fe.E)(new pH((() => performance.now() - PU))), (0, fe.x)()), rF && Fe.h.subscribe("appManagerUpdated|gameState", ZJ), UJ(), (0, Uy.setCrashScreen)(eR), (0, Yb.i)(), (0, HH.i)();
      let ie = null;
      try {
        ie = oK("90sbr0dbtwq", (() => {
          var ee, ie;
          return null !== (ee = null === (ie = yU) || void 0 === ie ? void 0 : ie.ws) && void 0 !== ee ? ee : null
        }), ee, "yuhqvdtpwj")
      } catch (be) {
        console.error(`${fK} probes`, be)
      }
      const ye = function() {
        const ee = (0, pb.p)(),
          ie = (0, pb.l)();
        let He = !1;
        return ye => {
          ee && !He && (He = !0, (0, Uy.reportStaleBuildReload)(ee, ie, ye))
        }
      }();
      po(), rF || function() {
        const ee = function(ee) {
          var ie;
          const He = new URLSearchParams(ee),
            ye = He.get("game");
          return ye ? {
            game: ye,
            lobby: null !== (ie = He.get("lobby")) && void 0 !== ie ? ie : null
          } : null
        }(window.location.search);
        if (ee) return (0, Yi.k)(ee.game) && po().request(), void kJ(ee.game, ee.lobby);
        const ie = new URLSearchParams(window.location.search).get("ws");
        if (!ie) return;
        QK.then((ee => {
          ee && async function(ee, ie) {
            try {
              await (0, Se.l)(ee), rU = mJ(new WebSocket(ie)), null !== rU && nb.e.setGame(null), oJ()
            } catch (be) {
              console.error(`${fK} ?ws=${ie} did not attach`, be)
            }
          }(ee, ie)
        }))
      }(), async function(ee) {
        var ie, ye, Me, Ke, Ue, Je;
        if ("undefined" === typeof WebAssembly) return yo("noWebAssembly", "unsupported", "This browser has no WebAssembly"), null;
        const oe = (0, eM.T)();
        let ke = await (0, eM.N)();
        if (Mo(ke) && function() {
            const ee = Date.now();
            return !(0, Si.m)((0, Si.o)(), Uo, ee, Si.b) && (0, Si.l)(Uo, ee, Si.b)
          }()) {
          const ee = Fo(ke, oe),
            ie = await async function(ee) {
              let {
                decline: ie,
                detail: He,
                details: ye
              } = ee;
              console.warn(`${fK} ${He}: waiting for a WebGL context`);
              const be = performance.now(),
                Me = await bM({
                  sleep: (ee, ie) => (0, Qi.e)(ee, ie).catch((() => {})),
                  repick: async () => {
                    const ee = await (0, eM.V)();
                    return Mo(ee) ? null : {
                      tq: ee
                    }
                  },
                  showScreen: ee => {
                    const He = (0, Wi.j)("blockedAfterLoss" === ie ? "graphicsLost" : "noContext");
                    return Di({
                      ...He,
                      cancel: rF ? He.cancel : null
                    }, ee)
                  }
                }),
                Ke = String(Math.round(performance.now() - be));
              if (null === Me.picked) {
                const ee = Me.gaveUp ? "waited" : "left";
                return (0, Uy.reportLoadRecovery)({
                  step: "noContext",
                  outcome: "gaveUp",
                  tries: Me.tries,
                  detail: `${He}; ${ee}`,
                  details: {
                    ...ye,
                    waitedMs: Ke
                  }
                }), Me.gaveUp ? {
                  gaveUp: !0
                } : ((0, oi.g)("/"), null)
              }
              const {
                tq: Ue
              } = Me.picked;
              if (!(0, vH.p)(Ue)) {
                var Fe;
                const ee = null !== (Fe = null === Ue || void 0 === Ue ? void 0 : Ue.backend) && void 0 !== Fe ? Fe : "none";
                (0, Uy.reportLoadRecovery)({
                  step: "noContext",
                  outcome: "recovered",
                  tries: Me.tries,
                  detail: He,
                  details: {
                    ...ye,
                    backend: ee,
                    waitedMs: Ke
                  }
                }), null !== Ue && (0, eM.S)(Ue.backend)
              }
              return Me.picked
            }(ee);
          if (null === ie) return null;
          if ("gaveUp" in ie) return (0, Uy.setCrashBackend)("unsupported"), yo("browser", ee.decline, ee.detail, {
            ...ee.details,
            afterWait: "true"
          }), null;
          ke = ie.tq
        }
        const qe = await async function(ee, ie) {
          const He = (0, vH.p)(ee) ? Fo(ee, ie) : null;
          if (null === He || void 0 === He || !He.retries) return ee;
          console.warn(`${fK} ${He.detail}: picking again in ${bo} ms`), await new Promise((ee => {
            setTimeout(ee, bo)
          }));
          const ye = await (0, eM.V)();
          if (!(0, vH.p)(ye)) {
            var be;
            (0, Uy.reportNoBackendRetry)("reprobed", He.decline, He.detail, {
              ...He.details,
              backend: null !== (be = null === ye || void 0 === ye ? void 0 : ye.backend) && void 0 !== be ? be : "none"
            }), null !== ye && (0, eM.S)(ye.backend)
          }
          return ye
        }(ke, oe);
        if ((0, Uy.setCrashBackend)((0, vH.p)(qe) ? "unsupported" : null !== (ie = null === qe || void 0 === qe ? void 0 : qe.backend) && void 0 !== ie ? ie : "none"), (0, vH.p)(qe)) return function(ee) {
          let {
            decline: ie,
            detail: He,
            details: ye,
            retries: be
          } = ee;
          if (be && (0, li.u)()) return (0, Uy.reportNoBackendRetry)("reload", ie, He, ye), void Jo(`${He}, again after ${bo} ms`);
          yo("browser", ie, He, be ? {
            ...ye,
            afterReload: String(li.D)
          } : ye)
        }(Fo(qe, oe)), null;
        if ((0, gM.q)("render")) try {
          const {
            startRenderDebug: ee
          } = await Promise.all([He.e(89), He.e(56)]).then((() => He(5138)));
          ee(qe)
        } catch (Oi) {
          console.warn("The render debug topic didn't load", Oi)
        }
        if ((0, gM.q)("renderlite")) try {
          const {
            startRenderLite: ee
          } = await Promise.all([He.e(300), He.e(57)]).then((() => He(54272)));
          VF = ee(qe)
        } catch (Oi) {
          console.warn("The renderlite debug topic didn't load", Oi)
        }
        if ((0, gM.q)("renderprobe")) try {
          const {
            startRenderProbe: ee
          } = await He.e(58).then((() => He(54277)));
          ee(qe)
        } catch (Oi) {
          console.warn("The renderprobe debug topic didn't load", Oi)
        }
        if ("webgl" === (null === qe || void 0 === qe ? void 0 : qe.backend) && rF && "address" !== li.y.reason) {
          const ee = qb(qe);
          null !== ee && (0, ni.j)(ee)
        }
        const fe = null !== (ye = null === qe || void 0 === qe ? void 0 : qe.backend) && void 0 !== ye ? ye : null;
        gF.adapter = null !== (Me = null === qe || void 0 === qe ? void 0 : qe.adapter) && void 0 !== Me ? Me : null, gF.boundAtMs = null, gF.indirectHangs = null, gF.restoresSkipped = null;
        const Te = !(0, vH.ab)();
        null === qe || (0, vH.G)(qe.reason) || console.info(`${fK} drawing with ${qe.backend}: ${qe.reason}`);
        const pe = (0, eM.y)();
        we("previews"), eU(!0), (0, Se.r)((ee => {
          try {
            null !== fe && (ZF = ee.startSkyFeed, ko(), function(ee) {
              var ie, He;
              dF = ee.rasterText, eF = ee.setTextLocalPlayer, ee.setTextLocalPlayer(null !== (ie = null === (He = QU) || void 0 === He ? void 0 : He.info.playerDbId) && void 0 !== ie ? ie : null), WF = ee.drainTextRerasters, tF = ee.loadTextIcons, ee.warmText((() => xF)), ee.textChanged(), xF && setTimeout(tF, 0)
            }(ee), wF = ee.startShellAnalytics, Oo())
          } finally {
            HJ || (aF = ee.followMenuPrefs({
              setSoundPrefs: CJ,
              setEnvPrefs: vJ,
              setUiPrefs: LJ,
              setLookPrefs: uJ
            }))
          }
        })), (0, Se.n)(IK).catch((ee => {
          console.warn(`${fK} the game code did not load: a join asks again`, ee)
        }));
        const Xe = (0, eM.h)(qe);
        let ze, Be;
        Xe.catch((() => {})), "loading" === (0, ci.B)() && (Pe(), we("load"));
        try {
          ze = function(ee) {
            const ie = null !== ee && void 0 !== ee ? ee : document.createElement("canvas");
            ie.id = "wasm-game-canvas", NF.watch(ie, Go), GF.watch(ie, Go),
              function(ee) {
                if (bR.has(ee)) return;
                bR.add(ee), ee.addEventListener("webglcontextlost", (() => {
                  var ee;
                  const ie = null !== sU && jo(),
                    He = null === (ee = window.bloxdRenderDebug) || void 0 === ee ? void 0 : ee.vaos;
                  setTimeout((() => {
                    var ee, ye, be, Me, Ke;
                    null === (ee = VF) || void 0 === ee || ee.glContextLost(ie, He, null !== (ye = null !== (be = !1 === (null === (Me = SK) || void 0 === Me ? void 0 : Me.isStopped) ? SK.addDistanceInUse() : null) && void 0 !== be ? be : null === (Ke = yR()) || void 0 === Ke ? void 0 : Ke.horizontal) && void 0 !== ye ? ye : null)
                  }), 0)
                }))
              }(ie), (0, oM.j)();
            const He = (0, qH.f)(),
              ye = (0, qH.g)(He);
            ie.style.cssText = "position:absolute;top:0;left:0;display:block;touch-action:none;outline:none;background:#000", (0, JM.f)(ie, ye), (0, qH.b)(ie, He), ie.width = ye.bufferWidth, ie.height = ye.bufferHeight;
            const be = document.createElement("div");
            return be.style.cssText = "position:fixed;top:0;right:0;bottom:0;left:0;overflow:hidden", be.append(ie), DJ(be, QF), eJ = be, document.body.append(be), ie
          }(null === fe ? null : await (await bJ()).pagePreviews().beginSession())
        } catch (be) {
          return Ae("fetch"), await pR({
            site: BK,
            error: be
          }, (() => {
            (0, Uy.showUnsupported)((0, Wi.s)("fetch"), PM.d.fetch, `the previews did not load: ${String(be)}`)
          })), null
        }
        Pe(), we("loading" === (0, ci.B)() ? "load" : "build");
        try {
          Be = await Xe
        } catch (be) {
          return Ae("fetch"), await pR({
            site: BK,
            error: be
          }, (() => {
            (0, Uy.showUnsupported)((0, Wi.s)("fetch"), PM.d.fetch, `the ${null!==fe&&void 0!==fe?fe:"client"} build did not load: ${String(be)}`)
          })), null
        }
        const ge = (0, eM.c)(),
          Oe = !ge && !0 !== oH.m.getItem(TK),
          de = !ge && "loading" === (0, ci.B)();
        we("load"), await (0, iM.c)(Be, {
          reloadFailedDownload: Oe
        }), de && !(0, ci.Y)() && await (0, iM.c)(Be, {
          reloadFailedDownload: Oe
        });
        let We = !1,
          te = !1;
        const Ze = (0, ci.o)();
        if (!(0, ci.Y)() && ("compile" === Ze || "instantiate" === Ze) && (0, ci.T)()) {
          const ee = (0, ci.j)();
          console.warn(`${fK} the wasm client did not ${Ze} here (${ee}): loading it again`);
          const ie = await async function(ee) {
            let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : HM,
              He = !1,
              ye = 0;
            for (const be of ie) {
              if (!ee.retryable()) break;
              if (ee.outOfMemory() && (He = !0, "spent" === ee.stepDownMemory())) return {
                recovered: !1,
                tries: ye,
                outOfMemory: He,
                spent: !0
              };
              if (await ee.sleep(be), ye++, await ee.retry()) return {
                recovered: !0,
                tries: ye,
                outOfMemory: He,
                spent: !1
              }
            }
            return He ||= ee.outOfMemory(), {
              recovered: !1,
              tries: ye,
              outOfMemory: He,
              spent: !1
            }
          }({
            sleep: ee => (0, Qi.e)(ee),
            outOfMemory: () => (0, wH.c)((0, ci.m)()),
            retryable: ci.T,
            stepDownMemory: () => "instantiate" !== (0, ci.o)() || !oo() || (0, yy.x)() ? "none" : "halve" === (0, yy.u)() ? "halved" : "spent",
            retry: iM.e
          });
          We = ie.outOfMemory, te = ie.spent;
          const {
            tries: He,
            recovered: ye
          } = ie, be = ye ? ee : (0, ci.j)();
          (0, Uy.reportLoadRecovery)({
            step: "load",
            stage: Ze,
            oom: We,
            outcome: ye ? "recovered" : "gaveUp",
            tries: He,
            detail: be
          })
        }
        Ee ??= performance.now();
        const Ye = hK;
        if (!(0, ci.Y)()) {
          (0, ci.W)() && "compile" !== Ze && "instantiate" !== Ze && oH.m.setItem(TK, !0);
          const ee = (0, ci.o)();
          if (Ae("instantiate" === ee || null === ee ? `instantiate_${De((0,ci.m)())}` : ee), "call" === ee) Qo({
            site: mH.q,
            error: (0, ci.m)(),
            header: null
          }, Ye);
          else {
            const ie = null !== ee && void 0 !== ee ? ee : "instantiate",
              He = () => {
                (0, Uy.showUnsupported)((0, Wi.s)(ie), PM.d[ie], (0, ci.j)())
              },
              ye = "compile" === Ze || "instantiate" === Ze ? Ze : ee;
            if ("compile" === ye || "instantiate" === ye) {
              const ee = We || (0, wH.c)((0, ci.m)());
              if (rF && (ee && oo() ? !te && "spent" !== (0, yy.u)(Date.now(), !0) : (0, li.u)())) {
                const ie = (0, ci.j)();
                return (0, Uy.reportLoadReload)((0, Wi.s)(ye), PM.d[ye], ie), Jo(`the wasm client ${ee?"ran out of memory to":"did not"} ${ye} here (${ie})`), null
              }(0, Uy.showUnsupported)(ee ? "memory" : (0, Wi.s)(ye), PM.d[ye], (0, ci.j)())
            } else if ("fetch" === ie) {
              const ee = [Be.url().href, ui.e.url().href];
              await pR({
                site: BK,
                error: (0, ci.j)(),
                urls: ee
              }, (() => {
                He()
              }))
            } else He()
          }
          return null
        }(0, Li.N)(Be.url()) && (0, Uy.reportUnstreamedCoreLoad)();
        const Ve = (0, ci.F)();
        let ae, ce = Ye;
        we("core");
        try {
          ce = {
            ...Ye,
            wasm: Ve.ik()
          };
          const {
            Np: ee
          } = Be.bindings, ie = ee.jbe();
          if (ie !== WH.s) return Ae("core_other"), Qo({
            site: mH.c,
            error: `core ABI ${ie}, page ABI ${WH.s}`,
            header: null
          }, ce), null;
          const [He, ye] = (0, WH.ke)();
          ae = new ee(He, ye)
        } catch (be) {
          return Ae(`core_${De(be)}`), Qo({
            site: mH.c,
            error: be,
            header: null
          }, ce), null
        }
        Ae("ok"), hK = ce, NK = Be.bindings;
        const xe = new mH.h(ae, ci.t, {
          onCrash: ee => {
            var ie;
            null === (ie = VF) || void 0 === ie || ie.crashed(ee),
              function(ee, ie, He, ye) {
                if ("webgpu" !== ie || (0, eM.b)()) return !1;
                const be = function(ee) {
                  if (ee.site === mH.d && (0, vH.s)(ee.error)) return "frames_refused";
                  return ee.site === pK && (0, vH.t)(ee.error) ? "start_failed" : null
                }(ee);
                if (null === be) return !1;
                if (null !== (0, vH.Y)(be, ye, (0, uH.d)(ee.error))) return (0, Uy.countRenderLost)(be, ee.error, gF), !1;
                return MH.F.reloaded(null, !1), (0, Uy.reportRenderReload)("webgpu", "start_failed" === be ? 0 : 1, He, {
                  cause: be,
                  error: ee.error,
                  context: gF,
                  session: MR(null)
                }), Ao(), !0
              }(ee, fe, ce, Te) || Qo(ee, ce)
          },
          onNetEvent: wo,
          onReconnectGrace: eo,
          onJoinPreloadEnded: QJ,
          onCoreErrors: (ee, ie) => {
            var He, ye;
            ee.some((ee => {
              let {
                code: ie
              } = ee;
              return ie === WH.E.RenderDeviceLost
            })) && ((0, eM.q)(), hF.deviceLost(), "webgpu" === fe && ((0, uH.e)(OF), MH.F.lost())), null === (He = VF) || void 0 === He || He.coreErrors(ee);
            const be = () => {
              (0, Uy.reportCoreErrors)(ee, ie, ce, ((ee, ie) => {
                var He;
                return ee === WH.E.EnvUnknownSky ? (0, Uy.unknownSkyWords)(ji.c.get("skyBox")) : ee === WH.E.RenderDeviceLost ? (0, Uy.deviceLossWords)(ie, gF.boundAtMs) : null === (He = OF) || void 0 === He ? void 0 : He.sbe(ee, ie)
              }))
            };
            ee.some((ee => {
              let {
                code: ie
              } = ee;
              return ie === WH.E.EnvUnknownSky
            })) ? queueMicrotask(be) : be(), null === (ye = dU) || void 0 === ye || ye.coreErrors(ee)
          },
          onRenderReload: (ee, ie, He) => {
            ! function(ee, ie, He, ye, be, Me) {
              var Ke;
              if ((0, eM.b)()) return;
              const Ue = ie === WH.Pc.WEBGPU,
                Fe = ye === WH.Pc.PIPELINE_FAILED ? "pipeline_failed" : "lost",
                Je = ye === WH.Pc.RESTORE_LOST,
                oe = Ue && (0, MH.p)(gF.adapter, He, "lost" === Fe, Je),
                ke = (0, uH.k)(OF);
              null === (Ke = VF) || void 0 === Ke || Ke.reload(Ue, He, Fe, null === ke || void 0 === ke ? void 0 : ke.message);
              const qe = Ue ? (0, vH.Y)(Fe, be, ke) : null;
              if (null !== qe) {
                (0, Uy.countRenderLost)(Fe, ke, gF);
                const ie = void 0 === ke ? "" : ` (${ke.message})`;
                return void ee.crash(Uy.RENDER_RELOAD_SITE, new Error(`${(0,Uy.renderReloadMessage)("webgpu",Fe,He)} and ${qe}${ie}`))
              }
              const fe = Ue ? "webgpu" : "webgl1" === Me ? "webgl1" : "webgl";
              "lost" === Fe && (0, eM.q)();
              if (!Ue) {
                if (NF.gaveUp(), !(0, li.u)()) {
                  (0, Uy.countRenderLost)(Fe, ke, gF);
                  const ie = void 0 === ke ? "" : ` (${ke.message})`;
                  return void ee.crash(Uy.RENDER_RELOAD_SITE, new Uy.GraphicsLostError(`${(0,Uy.renderReloadMessage)(fe,Fe,He)} and ${li.e}${ie}`))
                }
                console.warn(`${fK} the GL render device's recovery gave up: the tab reloads once more onto the wasm client`)
              }(0, Uy.reportRenderReload)(fe, He, hK, {
                from: "game",
                cause: Fe,
                restoreLost: Je,
                adapterRemembered: oe,
                error: ke,
                context: gF,
                session: MR(ee.sunShadowsHeld())
              }), (0, eM.m)();
              const Te = (0, Re.g)();
              let pe = !1;
              const Xe = () => {
                pe || (pe = !0, Ue && "lost" !== Fe ? Ao() : GF.reload(Ao, Ue))
              };
              let ze = null;
              const Be = (0, Re.s)((() => {
                null !== ze && clearTimeout(ze), Te ? setTimeout(Xe, Po) : Xe()
              }));
              !pe && Te && (ze = setTimeout((() => {
                Be(), Xe()
              }), Do))
            }(xe, ee, ie, He, Te, fe)
          },
          onEnvEvent: ee => {
            var ie;
            ee.kind === WH.U.SkyImages ? null === (ie = zU) || void 0 === ie || ie.onEvent(ee.payload) : ee.kind === WH.U.EnvLighting && (BU = 1 === ee.payload[0])
          },
          onImages: ee => {
            var ie;
            null === (ie = EU) || void 0 === ie || ie.onEvent(ee)
          },
          onModelRequest: ee => {
            var ie;
            null === (ie = TU) || void 0 === ie || ie.request(ee)
          },
          onModelTaken: (ee, ie) => {
            var He;
            null === (He = TU) || void 0 === He || He.taken(ee, ie)
          },
          onTerrainTexturesWanted: () => {
            queueMicrotask((() => {
              ! function(ee, ie) {
                const He = sK;
                if (null === He || ee.isStopped) return;
                He.restore((ee => {
                  (0, Uy.reportTerrainTextureFailure)(ee, ie)
                })).then((ie => {
                  !1 !== ie || ee.isStopped ? !0 === ie && console.info(`${fK} terrain textures handed over again after the renderer lost them`) : console.warn(`${fK} the terrain textures couldn't be handed over again: the terrain draws blank`)
                }))
              }(xe, ce)
            }))
          },
          onKeepAlive: ee => {
            const ie = null === sU ? void 0 : IU.get(sU);
            void 0 !== ie && Eb(ie, ee)
          },
          onSends: () => {
            ! function(ee) {
              const ie = performance.now();
              if (ee.forEachNetOut(ho), no(ee), (0, mH.F)(ee, {
                  worldgen: MU,
                  mesh: UU
                }), null !== YF) try {
                YF.sendsWent(ee, ie, performance.now())
              } catch (be) {
                Zo(be)
              }
            }(xe)
          }
        });
        if (SK = xe, null === (Ke = kH.d.wasmNetReady) || void 0 === Ke || Ke.call(kH.d, (() => xe.isStopped ? 0 : xe.netKeptFrames)), null !== ee) {
          xe.setAntiCheatProbes(KK(ci.t, ee.checks)), ee.watchHeld(FK.CoreFrame, (() => xe.frame)), ee.watchHeld(FK.GlueFrame, (() => ae.frame));
          const ie = function(ee, ie) {
            const He = new UK(ie);
            let ye = !1;
            He.YR(ee.YR());
            const be = (0, zb.Z)((() => {
              He.YR(ee.YR())
            }), JK);
            let Me = 6 * (0, zb.O)() | 0;
            const Ke = () => {
              ++Me < 6 || (Me = 0, ee.checks.stackCheck() && (ye = !0))
            };
            (0, vM.j)(Ke);
            const Ue = () => {
              const ie = ee.checkPadCall();
              0 !== ie && He.setFlags(ie)
            };
            return (0, CM.g)(Ue), {
              onSend: Ke,
              beforeFrame: () => {
                ye && He.originStackHit() && (ye = !1)
              },
              onEvent: ie => {
                const ye = ee.checkEvent(ie);
                He.value(WH.g.ProbeUsedProp, ee.usedProp()), 0 !== ye && He.setFlags(ye)
              },
              stop: () => {
                (0, zb.ab)(be), (0, vM.g)(Ke), (0, CM.d)(Ue)
              }
            }
          }(ee, ((ee, ie, He) => {
            let ye = !1;
            return JR(xe, (() => {
              ye = xe.rings.input.writeRecord(WH.qb.AntiCheat, ee, ie, He, 0)
            })), ye
          }));
          xe.isStopped ? ie.stop() : qU = ie
        }
        cK = (ee, ie, He) => xe.rings.cmd.writeCmd(ee, ie, He), xK = ee => xe.rings.cmd.growForCmd(ee), vU = !1, ko(), (0, Se.u)(xe, {
          core: ae,
          memory: ci.t,
          staleOr: (ee, ie, He, ye) => pR({
            site: ee,
            error: ie
          }, He, ye),
          reportReplayFault: (ee, ie) => {
            (0, Uy.reportReplayFault)(ee, ie, hK)
          },
          reportCameraFault: ee => {
            (0, Uy.reportCameraDirectorFault)(ee, hK)
          },
          audio: IK,
          options: ji.c,
          onNetEvent: wo,
          sessionInfo: ee => {
            var ie;
            return (null === (ie = QU) || void 0 === ie ? void 0 : ie.conn) === ee ? QU.info : null
          },
          onEventOverflow: WJ,
          replayShaderPack: ee => {
            var ie;
            null === (ie = dU) || void 0 === ie || ie.replay(ee)
          },
          hasPackModel: ee => {
            var ie, He;
            return null !== (null !== (ie = null === (He = qo()) || void 0 === He ? void 0 : He.modelUrl(ee)) && void 0 !== ie ? ie : null)
          },
          beforeWrite: () => (!cU && xe.rings.net.cursor > 0 && ao(xe, !1, "all"), !xe.isStopped),
          beforeOp: () => (!cU && xe.netWrittenSinceFrame > 0 && ao(xe, !1, "budget"), !xe.isStopped)
        }), (0, le.K)({
          lockPointer: () => {
            if (!ay(ze)) return !1;
            try {
              Promise.resolve(ze.requestPointerLock()).catch((() => {}))
            } catch {
              return !1
            }
            return !0
          },
          unlockPointer: () => {
            (0, di.e)()
          },
          leaveGame: () => {
            dJ()
          },
          canvas: () => ze
        }), fU = (0, le.w)((() => {
          var ee;
          const ie = (0, Se.h)();
          null === (ee = (0, Se.q)()) || void 0 === ee || ee.followCursorAim(!0 === (null === ie || void 0 === ie ? void 0 : ie.isSessionLive) ? ie : null)
        })), SU && xe.setUiPrefs(SU);
        nU && xe.setEnvPrefs(nU);
        jU && xe.setLookPrefs(jU);
        const Le = UM ? FM(UM.preventMovement) : null;
        Le && cJ(Le);
        const Ce = (0, yy.n)(),
          ve = (0, yy.h)(xe, Ce);
        RU = Ce.basis, (0, zy.f)((0, ky.e)(null === ve ? null : (0, Hy.q)(ve), (0, ky.l)())), oU = ve;
        const ue = (0, Ci.c)();
        let me = 1 / 0,
          ne = !0,
          je = Ce.shedFootprintBytes;
        const se = new Ab.c(ue, (() => ae.oX()), (ee => {
          xe.crash(mH.j, ee)
        }));
        FU = se, JU = se, null !== ve && se.setCeiling(Math.min((0, Ab.k)(ve), me, (0, yy.r)()));
        if (ne) {
          se.setShed((ee => {
            const ie = xe.shedMemory("joinReserve" !== ee && "gcPressure" !== ee);
            return null !== ie && (null === oU || ie < oU) && (oU = ie, (0, zy.f)((0, ky.e)((0, Hy.q)(ie), (0, ky.l)()))), ie
          }), ((ee, ie, He) => {
            1 === ie ? (0, Uy.reportMemoryShed)(ee, He, hK) : console.warn(`${fK} wasm memory: shed again (${ee}): shed ${ie}`, He.wasmMemoryShed)
          }), (() => xe.addDistanceInUse()));
          const ee = (0, vH.Q)(Ve);
          se.setFootprint(new EM(je, {
            storedChunks: () => ae.Ibe(),
            gpuBytes: () => {
              var ie;
              return null !== (ie = null === ee || void 0 === ee ? void 0 : ee.hbe()) && void 0 !== ie ? ie : 0
            },
            jsHeapBytes: BM
          })), (0, Xy.i)("wasm", se, (() => {
            IK.freeSounds()
          }))
        }
        window.addEventListener("pagehide", (() => {
          FU === se && (se.refreshStats(), FR(se))
        })), document.addEventListener("visibilitychange", vo), window.addEventListener("pagehide", uo), window.addEventListener("pagehide", Yo), window.addEventListener("pagehide", Vo), !1;
        const [Ie, he] = (0, oy.g)();
        cF = (0, ky.n)((ee => {
          const ie = (0, ky.s)(ee, (0, ky.l)());
          return xe.setChunkAddDistance(ie.horizontal, ie.vertical)
        }), {
          horizontal: Ie,
          vertical: he
        }), xe.setAmbientOcclusion(!0 !== oH.i.getItem("disableAmbientOcclusion")), xe.setPoseLod(!0 !== oH.i.getItem(ai.S)), xe.setDebugLog(WH.H.Look, !0), xe.setDebugLog(WH.H.CameraSet, !0), (0, dM.startLookDebug)("wasm", {
          look: () => xe.takeDebugLog(WH.H.Look),
          cameraSets: () => xe.takeDebugLog(WH.H.CameraSet)
        }), (0, gM.q)("remesh") && (xe.setDebugLog(WH.H.Remesh, !0), Ne = () => xe.takeDebugLog(WH.H.Remesh), DM = new wM((0, WM.p)(), Ne));
        var Ne;
        const Ge = function(ee, ie, He, ye) {
          const be = new ry,
            Me = ee => oH.i.getItem(ee);
          be.sync(Me, ie), (0, KH.$)();
          const Ke = (0, Fe.j)("customBindingsChanged", (() => {
            be.sync(Me, ie)
          }));
          (0, Oy.o)(ie);
          const Ue = new Set,
            Je = (0, le.w)((() => {
              var ee;
              Ue.size > 0 && Hb() && !0 === (null === (ee = (0, Se.h)()) || void 0 === ee ? void 0 : ee.localPlayerAlive()) && Fe.h.yR("usedKeyboard")
            })),
            oe = ly.c.heldSizer((() => (0, qH.l)(ee))),
            Re = my(ee, ie, {
              prevents: ee => be.prevents(ee),
              keyPressed: ee => {
                be.moves(ee) && (Ue.add(ee), Hb() && Fe.h.yR("usedKeyboard"))
              },
              keyReleased: ee => {
                Ue.delete(ee)
              },
              keysReleased: () => {
                Ue.clear()
              },
              resized: () => {
                eb.g.measure(ee.getBoundingClientRect()), (0, Sy.g)()
              },
              sizeCanvas: oe,
              watchRenderScale: ie => {
                const He = (0, qH.m)(ee, ie),
                  ye = ly.c.onRelease(ie);
                return () => {
                  He(), ye()
                }
              },
              touchStarting: () => {
                eb.g.measure(ee.getBoundingClientRect())
              },
              viewShown: He,
              touchUiShown: () => Ri.e.get("isTouchScreen"),
              ctrlCombosAreGames: Hb,
              inspect: (ee, ie, He) => {
                be.checks(ie, He) && ye(ee)
              },
              canLock: () => ay(ee)
            }),
            ke = (0, IH.b)(ie);
          return () => {
            Ke(), Je(), (0, Oy.o)(null), ke(), Re()
          }
        }(ze, ((ee, ie, He, ye, be) => {
          JR(xe, (() => {
            xe.rings.input.writeRecord(ee, ie, He, ye, be)
          })), !xU && (0, Ub.g)(ee, be) && (0, Ub.d)((() => {
            SK !== xe || HJ || xe.isStopped || !so() || ao(xe, !1, "budget", !1)
          }))
        }), (() => QF), (ee => {
          var ie;
          null === (ie = qU) || void 0 === ie || ie.onEvent(ee)
        }));
        if (xe.isStopped) return Ge(), null;
        bU = Ge;
        const re = () => !xe.isStopped && !iJ;
        if (xe.isStopped) return null;
        (0, ci.$)((() => {
          "call" === (0, ci.o)() && xe.crash(mH.q, (0, ci.m)())
        }));
        const Qe = (0, mH.G)(xe.rings.worker, (() => {
          ao(xe, !1, document.hidden ? "all" : "budget")
        }));
        MU = function(ee, ie, He) {
          return oR().then((ee => {
            let {
              prefetchWorldgenWorker: ie
            } = ee;
            ie()
          }), (() => {})), new cM({
            module: (0, ci.x)(),
            decodeSettings: ee => {
              const ie = (0, Se.q)();
              if (null === ie) throw new Error("no game code to decode the world-gen seed with");
              return ie.decodeMapSettings(ee)
            },
            loadWorker: RR,
            onMapWithoutWorldgen: () => {
              kR((ee => {
                let {
                  stopWorldgenWorkerPrefetch: ie
                } = ee;
                ie()
              }))
            },
            onLoadFailed: ee => {
              (0, Uy.reportWorldgenLoadFailure)(ee, hK)
            },
            onWorkerLost: (ee, ie) => {
              !async function(ee, ie, He) {
                const ye = ee === YM || ee.startsWith(VM);
                if (!ye || ie) return void He.RR(ye);
                const be = () => {
                  He.RR(!0)
                };
                let Me;
                try {
                  Me = await He.scriptUrl()
                } catch {
                  return void be()
                }
                await He.staleOr({
                  site: mH.y,
                  error: new Error(`a world-gen worker's load failed (${ee}): ${Me}`),
                  urls: [Me]
                }, be)
              }(ee, ie, {
                scriptUrl: async () => {
                  const {
                    worldgenWorkerScriptUrl: ee
                  } = await oR();
                  return ee()
                },
                staleOr: (ee, ie) => pR(ee, ie, {
                  stillWanted: He
                }),
                RR: ie => {
                  (0, Uy.reportWorldgenWorkerLost)(ee, ie, hK, {
                    build: (0, pb.l)(),
                    ageMs: (0, qy.z)()
                  })
                }
              })
            },
            onStartTimeout: ee => {
              (0, Uy.reportWorkerStartTimeout)(mH.y, ee, hK)
            },
            onGaveUp: ee => {
              (0, Uy.reportWorldgenGaveUp)(ee, hK)
            },
            onMemoryStats: ee => {
              var ie;
              null === (ie = FU) || void 0 === ie || ie.noteWorldgen(ee)
            },
            onMemoryGone: () => {
              var ee;
              null === (ee = FU) || void 0 === ee || ee.worldgenGone()
            },
            write: (He, ye, be, Me, Ke) => {
              JR(ee, (() => {
                ee.rings.worker.writeWorkerRecord(He, ye, be, 0, Me, Ke) || ee.crash(mH.y, `a world-gen record of kind ${ye} did not fit the worker-in ring`)
              })), ie()
            }
          })
        }(xe, Qe, re), UU = function(ee, ie) {
          return new Db({
            module: (0, ci.x)(),
            loadWorkers: async () => {
              const [{
                createMeshWorker: ee
              }, ie] = await Promise.all([He.e(48).then((() => He(54308))), Promise.resolve().then((() => He(97))).then((ee => {
                let {
                  isMobile: ie
                } = ee;
                return ie()
              }), (() => !1))]);
              return {
                create: ee,
                count: (0, iH.f)(ie),
                maxKeptLightStates: ie || (0, eH.o)() ? 1 : void 0
              }
            },
            write: (He, ye, be, Me, Ke, Ue) => {
              (0, Sy.e)(), JR(ee, (() => {
                ee.rings.worker.writeWorkerRecord(He, ye, be, Me, Ke, Ue) || ee.crash(mH.m, `a meshing record of kind ${ye} did not fit the worker-in ring`)
              })), ie()
            },
            onWorkerLost: ee => {
              (0, Uy.reportWorkerLost)(mH.m, ee, hK)
            },
            onLightFault: (ee, ie) => {
              (0, Uy.reportLightFault)(ee, ie, hK)
            },
            onStartTimeout: ee => {
              (0, Uy.reportWorkerStartTimeout)(mH.m, ee, hK)
            },
            onMemoryStats: (ee, ie) => {
              var He;
              null === (He = FU) || void 0 === He || He.noteMeshWorker(ee, ie)
            },
            onMemoryGone: ee => {
              var ie;
              null === (ie = FU) || void 0 === ie || ie.meshWorkerGone(ee)
            },
            fail: (ie, He) => {
              const ye = () => {
                ee.crash(mH.m, void 0 === He ? ie : new Error(ie, {
                  cause: He
                }))
              };
              void 0 !== He ? pR({
                site: mH.m,
                error: He
              }, ye) : ye()
            }
          })
        }(xe, Qe), ZJ();
        const ei = (0, jb.t)(Gi.clientSideServerUrls.staticUrl, {
            onTableFailed: ee => {
              pR({
                site: Uy.MODEL_FEED_SITE,
                error: ee
              }, (() => {}), {
                stillWanted: re
              })
            },
            packUrl: ee => {
              var ie, He;
              return null !== (ie = null === (He = qo()) || void 0 === He ? void 0 : He.modelUrl(ee)) && void 0 !== ie ? ie : null
            }
          }),
          ii = function(ee, ie, He) {
            const ye = He => {
              var ye, be;
              return null !== (ye = null === (be = ie()) || void 0 === be ? void 0 : be.drawnUrl(He)) && void 0 !== ye ? ye : ee.url(He)
            };
            return (0, Sb.n)((0, Vb.j)(ye), He)
          }(ei, (() => TU), qo),
          Hi = new Vb.f(ii, (ee => {
            console.warn(`${fK} image ${ee.key.kind}:${ee.key.index}:${ee.key.word} failed`, ee.error)
          }));
        EU = Hi, gU = new ub(xe, ii, ((ee, ie) => {
          void 0 === ie ? console.warn(`${fK} ${ee}`) : To(ee, ie)
        }));
        const yi = new lb.f(ei, function(ee, ie) {
          let ye = !1,
            be = null,
            Me = null;
          const Ke = {
              onUnavailable: (He, ye) => {
                Me ??= pR({
                  site: Uy.MODEL_POOL_SITE,
                  error: He,
                  urls: ye
                }, (() => {
                  (0, Uy.reportModelPoolFailure)(He, ee)
                }), {
                  stillWanted: ie
                })
              },
              onWorkerLost: ie => {
                (0, Uy.reportWorkerLost)(Uy.MODEL_POOL_SITE, ie, ee)
              },
              onModuleRetry: (ie, He) => {
                (0, Uy.reportModelsModuleRetry)(ie, He, ee)
              }
            },
            Ue = He.e(50).then((() => He(54314))).then((ee => {
              let {
                pageModelPool: ie
              } = ee;
              if (ye) return null;
              const He = ie(Ke);
              return be = He.unlisten, pU = He.pool, ZJ(), He.pool
            }), (ee => (ye || Ke.onUnavailable(ee, void 0), null)));
          return XU = () => {
            var ee;
            ye = !0, null === (ee = be) || void 0 === ee || ee(), pU = null
          }, (ee, ie) => Ue.then((He => {
            var ye;
            return null !== (ye = null === He || void 0 === He ? void 0 : He.build(ee, ie)) && void 0 !== ye ? ye : (0, sb.s)(ee, "the model workers did not load")
          })).then((ee => null !== Me && (0, sb.j)(ee) ? Me.then((() => ee)) : ee))
        }(ce, re), (ee => {
          ee.startup ? (ro(), pR({
            site: Uy.MODEL_FEED_SITE,
            error: ee.error,
            urls: "" === ee.url ? void 0 : [ee.url]
          }, (() => {
            (0, Uy.reportModelFailure)(ee, ce)
          }))) : (0, Uy.reportModelFailure)(ee, ce)
        }), {
          onWritten: (ee, ie) => {
            Hi.glbWritten(ee, ie)
          },
          onTaken: (ee, ie) => {
            Hi.glbTaken(ee, ie)
          },
          onPackFileFailed: (ee, ie) => {
            console.warn(`${fK} the texture pack's model file ${ee} failed: the shipped one loads`, ie)
          }
        });
        TU = yi;
        const bi = new Lb.f(xe);
        sK = bi, bi.swap((ee => {
          const ie = () => {
            (0, Uy.reportTerrainTextureFailure)(ee, ce)
          };
          if (xF) return void ie();
          const He = () => !xF,
            ye = null === ee.url ? void 0 : [ee.url];
          pR({
            site: mH.w,
            error: ee.error,
            urls: ye
          }, ie, {
            stillWanted: He
          })
        })).then((ee => {
          null !== ee && (ee || xe.isStopped || console.warn(`${fK} the core refused the terrain textures: terrain draws untextured`), wU(xe))
        }));
        const Mi = new OH(xe, ((ee, ie) => {
          console.warn(`${fK} ${ee}`, ...void 0 === ie ? [] : [ie])
        }));
        Mi.feed(), null !== fe && function(ee, ie, ye, be, Me, Ke) {
          let Ue = null,
            Je = null,
            oe = !1;
          const Re = {
            textures: null,
            stop: () => {
              var ee, ie;
              oe = !0, null === (ee = Je) || void 0 === ee || ee(), null === (ie = Ue) || void 0 === ie || ie(), nb.e.setSettled(null), null !== NK && RJ.clear(NK)
            }
          };
          jK = Re, Je = po().follow((Je => {
            null !== Je && Promise.all([He.e(225), He.e(53)]).then((() => He(54282))).then((He => {
              let {
                PackTextures: ke
              } = He;
              if (oe || ee.isStopped) return;
              const qe = new ke({
                feed: Je,
                terrain: ie,
                backend: ye,
                stopped: () => ee.isStopped,
                landed: () => {
                  wU(ee)
                },
                packSwapped: () => {
                  (0, Sb.j)(be), Ke.feed((() => async function(ee) {
                    const ie = null === ee ? null : await ee.averageColours;
                    return null === ie ? dH() : gH(ie)
                  }(qe.assets))), (0, mb.n)(qe.files()), Me.refresh().then((ee => {
                    null !== ee && console.info(`${fK} texture pack models: ${ee.resent} of ${ee.delivered} files written again, ${ee.refetched} refetched`)
                  }))
                },
                settled: (ee, ie, He) => {
                  var ye;
                  (nb.e.setSettled({
                    state: ee,
                    files: ie
                  }), function(ee, ie, He) {
                    const ye = null === ee.gameSource && (0, Fy.g)(ee.pack);
                    if (null === ie) return;
                    const be = (0, Ky.h)(ie.error),
                      Me = ye ? "settings" : ie.source;
                    Fe.h.yR(Ky.d, {
                      failure: be,
                      source: Me,
                      pack: Jy(ee)
                    }), (0, Uy.reportTexturePackKeptOut)(Me, be, ie.error, He)
                  }(ee, He, hK), null === He) && function(ee) {
                    const ie = NK;
                    null !== ie && RJ.apply(ie, ee).then((ie => {
                      ie && ee && console.info(`${fK} the texture pack's animations are in (${Object.keys(ee).length} files)`)
                    }))
                  }(null === (ye = ee.pack) || void 0 === ye ? void 0 : ye.animations)
                },
                settling: () => {
                  nb.e.setSettled(null)
                },
                warn: To,
                maxTextureSize: () => Promise.resolve((0, vH.db)(document.createElement("canvas")))
              });
              Re.textures = qe, Ue = qe.start()
            }), (ee => {
              console.warn(`${fK} the texture pack's terrain didn't load: the built atlas stays`, ee)
            }))
          }))
        }(xe, bi, fe, Hi, yi, Mi);
        const Ki = () => {
            xe.setTextureLayers("")
          },
          Ui = ee => {
            (Ni ??= He.e(65).then((() => He(54320))).then((ee => {
              let {
                TEXTURE_NAMES: ie
              } = ee;
              return ie
            }), (ee => {
              throw Ni = null, ee
            })), Ni).then((ee => {
              xe.setTextureLayers(ee) || xe.isStopped || (console.warn(`${fK} the core refused the texture names: textured Boxes draw textureNotFound`), Ki())
            }), (ie => {
              if (xe.isStopped) return;
              const [He, ...ye] = ee;
              void 0 === He ? pR({
                site: Uy.TEXTURE_NAMES_SITE,
                error: ie
              }, (() => {
                console.warn(`${fK} the texture names didn't load, so textured Boxes draw textureNotFound`, ie), Ki()
              }), {
                stillWanted: re
              }) : setTimeout((() => {
                Ui(ye)
              }), He)
            }))
          };
        if (Ui(VK), null !== fe && !await async function(ee, ie, He, ye, Me, Ke) {
            var Ue;
            const Fe = (0, vH.Q)(He);
            if (null === Fe) return ee.crash(pK, new Error(`this ${ye} build has no openRenderer`)), !1;
            let Je;
            OF = Fe;
            try {
              var oe, Re, ke, qe;
              const be = null !== (oe = null === (Re = mK) || void 0 === Re ? void 0 : Re.pagePreviews()) && void 0 !== oe ? oe : null,
                Ue = null !== (ke = null === (qe = mK) || void 0 === qe ? void 0 : qe.previewModule(He)) && void 0 !== ke ? ke : null;
              if (null === be || null === Ue) {
                null === be || void 0 === be || be.endSession(!1), Je = (0, qH.f)().sampleCount, await (0, vH.g)(ie, Fe, Ke, Ro, Je, await Me);
                const ee = (0, vH.o)(He);
                null === ee && console.warn(`${fK} this ${ye} build has no image registry: sky and model images won't show`), (0, xb.h)(ee)
              } else {
                (0, eM.b)() && await (0, oi.l)();
                const He = (0, eM.G)();
                if (null !== He) {
                  const ie = (0, uH.k)(Fe),
                    ye = `${He.why}${void 0===ie?"":` (${ie.message})`}`;
                  return ee.crash(Uy.RENDER_RELOAD_SITE, He.webgpu ? new Error(ye) : new Uy.GraphicsLostError(ye)), !1
                }
                Je = await be.bindSession(Ue, ie, (async ee => (0, vH.u)(Fe, pK, Ke, ee, Ro, await Me)))
              }
            } catch (be) {
              return ee.crash(pK, be), !1
            }(function(ee, ie) {
              const He = ee,
                {
                  requestCapture: ye,
                  takeCapture: be
                } = He;
              if ("function" !== typeof ye || "function" !== typeof be) return;
              const Me = {
                request() {
                  ye.call(He, ie)
                },
                take() {
                  var ee;
                  return null !== (ee = be.call(He)) && void 0 !== ee ? ee : null
                }
              };
              window[RM] = Me
            })(ie, Je), PF = Je, EF = !0;
            const fe = performance.now();
            return gF.boundAtMs = null !== (Ue = (0, eM.H)()) && void 0 !== Ue ? Ue : fe, gF.indirectHangs = (0, eM.u)(), gF.restoresSkipped = (0, eM.L)(), console.info(`${fK} ${ye} renderer bound at ${Math.round(fe)} ms`), !ee.isStopped
          }(xe, ae, Ve, fe, pe, ze)) return null;
        if (null !== fe) {
          var Fi, ki, qi;
          (0, vi.I)(fe);
          const ee = () => !xe.isStopped && jo();
          He.e(214).then((() => He(34751))).then((ie => {
            let {
              devTools: He
            } = ie;
            xe.isStopped || He.setHost(function(ee) {
              return {
                tools: Qb,
                async downloadScene(ie, He) {
                  let {
                    width: ye,
                    height: be,
                    colouring: Me
                  } = He;
                  "screenshot" === ie && null === Me ? await (0, Nb.f)(ee, ye, be) : console.warn("The Rust client's developer tools take uncoloured screenshots only")
                },
                setAmbientLightIntensity: () => (console.warn("The Rust client's renderer has no ambient light setting"), Promise.resolve()),
                capturePhoto: (ie, He, ye) => (0, Nb.d)(ee, ie, He, ye)
              }
            }(function(ee, ie) {
              return {
                canvas: ee,
                maxTextureSize: Gb,
                tR: ie,
                resize: (ee, ie, He) => {
                  (0, Oy.y)(WH.qb.Resize, 0, ee / He, ie / He, (0, Oy.j)(He))
                },
                restoreSize: () => {
                  const ie = (0, qH.l)(ee);
                  null !== ie && (0, Oy.y)(WH.qb.Resize, 0, ie.cssWidth, ie.cssHeight, (0, Oy.j)(ie.renderScale))
                },
                onFrameDrawn: ee => (rb.add(ee), () => {
                  rb.delete(ee)
                })
              }
            }(ze, ee)))
          }), (ee => {
            console.warn(`${fK} the developer tools didn't load: no captures this session`, ee)
          }));
          const ie = "webgpu" === fe && null !== (Fi = null === qe || void 0 === qe || null === (ki = qe.adapter) || void 0 === ki ? void 0 : ki.vendor) && void 0 !== Fi ? Fi : null;
          AF = {
            backend: fe,
            canvas: ze,
            fallbackReason: null !== (qi = null === qe || void 0 === qe ? void 0 : qe.reason) && void 0 !== qi ? qi : null,
            adapterVendor: ie
          }, Oo();
          try {
            (0, Sy.r)(fe, ze, ie)
          } catch (be) {
            (0, Sy.t)(), console.error(`${fK} the quality steps didn't start`, be)
          }
        }
        const {
          storagePullBreaks: fi,
          splitPassBreaks: Ti
        } = await pe;
        Ti && console.warn(`${fK} split_pass_breaks on: Windows Adreno 7xx (N-103) or ?sceneDepth=off`);
        const Xi = (0, Ji.i)(qe, (0, MH.m)());
        if ((0, gM.q)("webgpuloss")) {
          var zi, Bi;
          const ee = {
            backend: fe,
            reason: null !== (zi = null === qe || void 0 === qe ? void 0 : qe.reason) && void 0 !== zi ? zi : null,
            source: null !== (Bi = null === qe || void 0 === qe ? void 0 : qe.source) && void 0 !== Bi ? Bi : null,
            storagePullBreaks: fi,
            noWebGpu: Xi.messageKey
          };
          (0, OM.d)((ie => {
            ie.noteWasmPick(ee)
          }))
        }
        const Ei = "webgpu" === fe;
        if (dU = (0, Ji.j)(Ei ? xe : null, Ei && null !== (Ue = null === (Je = mK) || void 0 === Je ? void 0 : Je.pagePreviews().Zf) && void 0 !== Ue ? Ue : null, Xi, To), HJ) return null;
        if (se.reserveAtJoin((0, Ab.j)(null !== ve && void 0 !== ve ? ve : Hy.g)), xe.isStopped) return null;
        const gi = ee => {
          if (YU = performance.now(), VU = !1, null !== YF) try {
            YF.animationFrame(ee)
          } catch (be) {
            Zo(be)
          }
          if (function(ee, ie) {
              return ie && !HJ && !xU && so() && jo() && ee.framePaces(performance.now())
            }(xe, QF)) {
            if (xe.writePendingInput(), (0, le.d)(ee, co), Wo(!1, ee), null !== YF) try {
              YF.framePaced()
            } catch (be) {
              Zo(be)
            }
            requestAnimationFrame(gi)
          } else ao(xe, QF, "budget") && ((0, UH.h)(xe.lastFrameKind) && jo() && (0, le.d)(ee, co), Wo(QF && IF, ee), hF.frame(xe.lastFrameKind, QF && jo(), ee), NF.frame(xe.lastFrameKind, QF && jo()), (0, UH.b)(xe.lastFrameKind) && MH.F.drew(), HR(xe), se.afterFrame(), requestAnimationFrame(gi))
        };
        requestAnimationFrame(gi);
        return function(ee) {
          if (ee.has("inputLog") && (0, Qy.j)((ee => {
              let {
                action: ie,
                down: He,
                press: ye
              } = ee;
              console.info(`${ib} input ${ie} ${He?"down":"up"} press ${ye} at ${performance.now().toFixed(1)}`)
            })), ee.has("inputDump")) {
            const ee = [];
            yb = ee, Object.assign(window, {
              bloxdInputDump: () => ee.join("\n")
            })
          }
        }(new URLSearchParams(window.location.search)), kU = function(ee) {
          let ie = null;
          const He = () => {
              null !== ie && (clearInterval(ie), ie = null)
            },
            ye = () => {
              document.hidden ? ie ??= setInterval((() => {
                fR(ee) || He()
              }), YK) : He()
            };
          return document.addEventListener("visibilitychange", ye), ye(), () => {
            He(), document.removeEventListener("visibilitychange", ye)
          }
        }(xe), xe
      }(ie).then((ee => {
        var ie;
        (ye(hK), eU(null !== ee), null !== ee && (ge = performance.now()), rK(ee), null === ee) ? null === (ie = mK) || void 0 === ie || ie.pagePreviews().endSession(null === (0, ci.o)()): ZU("booted")
      }), (ee => {
        ye(hK), eU(!1), rK(null), Qo({
          site: XK,
          error: ee,
          header: null
        }, hK)
      }))
    }

    function oJ() {
      const ee = NK;
      null !== ee && bJ().then((ie => {
        let {
          pageBuiltInAnimationPack: He
        } = ie;
        He().provide(ee)
      }), (ee => {
        console.warn(`${fK} the built-in animation pack's chunk did not load: lifeforms stay in their rest pose`, ee)
      }))
    }
    const RJ = new class {
      constructor(ee) {
        this.deps = ee, this.latest = 0, this.lJ = null
      }
      apply(ee, ie) {
        return this.load(ee, ie, 0)
      }
      async load(ee, ie, He) {
        var ye;
        const be = ++this.latest,
          Me = this.deps.compiler;
        if (void 0 === ie || null === ie || "object" !== typeof ie || 0 === Object.keys(ie).length || null === Me) return this.drop(ee), !1;
        if ((null === (ye = this.lJ) || void 0 === ye ? void 0 : ye.module) === ee && (0, aH.ee)(this.lJ.files, ie)) return !1;
        try {
          const [He, ye] = await Promise.all([Me(), this.deps.builtIns()]);
          if (be !== this.latest) return !1;
          const Ke = await He(ie, CH, {
            builtIns: ye
          });
          if (be !== this.latest) return !1;
          const Ue = this.call(ee, Ke);
          if (void 0 === Ue) throw new LH("the compiled animations didn't read against the built-in pack");
          return this.lJ = {
              module: ee,
              files: ie
            },
            function(ee) {
              for (let ie = 0; ie + 2 < ee.length; ie += 3) {
                ("error" === ee[ie] ? console.error : console.warn)(`Animation for the texture pack: ${ee[ie+1]}: ${ee[ie+2]}`)
              }
            }(Ue), !0
        } catch (Ue) {
          var Ke;
          if (be !== this.latest) return !1;
          this.drop(ee), 0 === He && this.deps.warn("the texture pack's animations didn't load: lifeforms play the built-in ones", Ue);
          const ye = (null !== (Ke = this.deps.retryAfterMs) && void 0 !== Ke ? Ke : xH)[He];
          return void 0 === ye || Ue instanceof LH || (0, cH.h)(ee) || setTimeout((() => {
            be === this.latest && this.load(ee, ie, He + 1)
          }), ye), !1
        }
      }
      call(ee, ie) {
        try {
          return ee.nbe(ie)
        } catch (He) {
          throw (0, cH.j)(ee, He), He
        }
      }
      clear(ee) {
        this.latest++, this.drop(ee)
      }
      drop(ee) {
        const ie = this.lJ;
        if (this.lJ = null, (null === ie || void 0 === ie ? void 0 : ie.module) === ee && !(0, cH.h)(ee)) try {
          this.call(ee, null)
        } catch {}
      }
    }({
      compiler: PH.e,
      builtIns: async () => {
        const {
          pageBuiltInAnimationPack: ee
        } = await bJ();
        return ee().whenSet()
      },
      warn: To
    });
    async function kJ(ee, ie) {
      let ye = !1;
      await qJ({
        matchmake: async () => {
          const {
            guestJoinTarget: be,
            guestJoinWithPack: Me
          } = await He.e(125).then((() => He(54263)));
          return ye ? be(ee, ie, zo()) : (ye = !0, Me(ee, ie, (ie => Bo(ee, ie)), zo))
        },
        onFailure: ee => {
          (0, Uy.showJoinFailure)(ee, hK)
        },
        rejoin: PJ,
        invalidateTrafficCode: AJ
      })
    }
    async function qJ(ee) {
      let {
        matchmake: ie,
        onFailure: He,
        rejoin: be,
        invalidateTrafficCode: Me,
        pageReady: Ke,
        signal: Ue
      } = ee;
      const Fe = () => !0 === (null === Ue || void 0 === Ue ? void 0 : Ue.aborted);
      let Je;
      const oe = nb.e.rejoinHold();
      NU = null, (0, py.f)();
      const Re = (0, qy.Y)("wasm", UR);
      let ke = !1,
        qe = performance.now();
      try {
        if (!await iU) return {
          kind: "stopped"
        };
        if (Fe()) return {
          kind: "Ce"
        };
        MJ().catch((() => {}));
        let ee = await ie();
        var Te, we;
        if (qe = performance.now(), !Fe()) KR(null !== (Te = null === (we = ee.target.session) || void 0 === we ? void 0 : we.gameNameWithVariation) && void 0 !== Te ? Te : null);
        const He = () => performance.now() - ee.matchedAt <= ee.freshMs,
          ye = TJ(ee.target).catch((() => {}));
        He() && !Fe() && (Je = new tb(ee.target, {
          signal: Ue
        }));
        const Me = performance.now();
        let oe = () => {};
        Fe() || (oe = function(ee, ie) {
          Ye(), ee || te || null !== We && "ok" !== We || (te = !0, (0, fe.n)("wasm_boot_wait", performance.now(), `${de}:${ie()}:${(0,pe.o)()}`)), Ze++;
          let He = !1;
          return () => {
            He || (He = !0, Ze--)
          }
        }(GK, xi.i), null === Ue || void 0 === Ue || Ue.addEventListener("abort", oe, {
          once: !0
        }));
        const Re = await QK;
        if (oe(), null === Ue || void 0 === Ue || Ue.removeEventListener("abort", oe), null === Re) return {
          kind: "stopped"
        };
        var De, Pe;
        if (function(ee) {
            var ie, He;
            if (Xe.c.markGameEngineConstructed(), Oe) return;
            Oe = !0;
            const ye = Math.max(ee, null !== (ie = Be) && void 0 !== ie ? ie : ee);
            (0, ze.i)("ready", Math.max(0, (null !== (He = Ee) && void 0 !== He ? He : ye) - ye) / 1e3)
          }(Me), !Fe())
          if (null !== Ee && null !== ge ? (0, fe.n)("wasm_core_ready", ge) : console.warn("[bloxd-wasm-client] a join found the core before boot marked its steps"), ee.target.session && (0, AM.b)(ee.target.session.gameNameWithVariation)) null === (De = MU) || void 0 === De || De.prestart();
        if (await ye, !He() && !Fe()) null === (Pe = Je) || void 0 === Pe || Pe.rematched(), ee = await ie(), qe = performance.now();
        if (Fe()) return {
          kind: "Ce"
        };
        const Ae = await async function(ee) {
          var ie, He, ye;
          let {
            signal: be,
            rejoin: Me = null,
            early: Ke,
            pageReady: Ue
          } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (null !== be && void 0 !== be && be.aborted) throw new DOMException("the join was left", "AbortError");
          const Fe = (Je = oF, oe = performance.now(), null !== Je && oe - Je < fb);
          var Je, oe;
          oF = null;
          const Re = new AbortController,
            ke = null !== (ie = null === (He = ee.session) || void 0 === He ? void 0 : He.gameNameWithVariation) && void 0 !== ie ? ie : null;
          KR(ke), zJ({
            controller: Re,
            game: ke
          }), RF = null, null === (ye = fF) || void 0 === ye || ye.abort(), fF = null, pF = !1, XF = null, zF.clear();
          const qe = () => {
            (0, ri.j)(Re, (0, ri.f)(be))
          };
          null === be || void 0 === be || be.addEventListener("abort", qe, {
            once: !0
          });
          try {
            var Te, pe, Xe;
            const ie = await QK;
            if (null === ie || ie.isStopped || HJ) throw new Error("no core is running to join a game with");
            if (ee.session && null !== dU) {
              const ie = await pJ(dU.join(ee.session.gameNameWithVariation), Re.signal);
              if ((0, gM.q)("webgpuloss")) {
                const He = ee.session.gameNameWithVariation,
                  ye = dU.couldntRunInJoinedGame();
                (0, OM.d)((ee => ee.noteWasmJoin(He, ie, ye)))
              }
              if (null !== ie) throw new Ji.e(ie)
            }
            const [, , , {
              joinRoom: He
            }] = await pJ(Promise.all([(0, Se.l)(ie), TJ(ee), null === Ue || void 0 === Ue ? void 0 : Ue(), MJ()]), Re.signal), ye = ee.session, be = ye ? {
              ...aJ,
              attachSocket: ie => {
                const He = mJ(ie, ee.endpoint);
                var be;
                null !== He && (QU = {
                  conn: He,
                  info: ye
                }, null === (be = eF) || void 0 === be || be(ye.playerDbId));
                return He
              }
            } : aJ, Je = await He(be, ee, {
              signal: Re.signal,
              early: Ke
            }).catch((ee => {
              throw function(ee) {
                if (!(ee instanceof ei.c)) return ee;
                if ("roomError" === ee.stage && null !== XF) return fJ(new ei.c(ee.message, ee.stage, ee.code, XF), ee);
                const ie = "closed" === ee.stage && null !== kF ? zF.get(kF.conn) : void 0;
                return void 0 === ie ? ee : fJ(new ei.c(ee.message, ee.stage, ie.code, null, ee.socketOpened), ee)
              }(ee)
            }));
            if (hU !== Re) throw Je.leave(), new DOMException("the join was left", "AbortError");
            EJ(Je), null === (Te = UU) || void 0 === Te || Te.newGame();
            const oe = function(ee, ie) {
              var He, ye;
              const {
                session: be
              } = ee, Me = void 0 === be ? ee.joinOptions.lobbyName : be.lobbyName;
              return {
                endpoint: ee.endpoint,
                game: null !== (He = null === be || void 0 === be ? void 0 : be.gameNameWithVariation) && void 0 !== He ? He : ee.roomName,
                lobby: String(null !== Me && void 0 !== Me ? Me : null),
                sessionId: ie,
                postCookies: null !== (ye = ee.postCookies) && void 0 !== ye ? ye : null
              }
            }(ee, Je.seat.sessionId);
            IU.set(Je, oe), Ob(oe);
            const ke = performance.now(),
              qe = {
                conn: Je.conn,
                rejoin: Me,
                game: null !== (pe = null === (Xe = ee.session) || void 0 === Xe ? void 0 : Xe.gameNameWithVariation) && void 0 !== pe ? pe : "",
                joinedAt: ke,
                rejoinedAt: Fe ? ke : null,
                overflow: null
              };
            iF = qe,
              function(ee, ie) {
                NJ();
                const He = {
                  endpoint: ie,
                  roomId: ee.seat.room.roomId,
                  heldConn: 0,
                  dropCode: 0,
                  pendingHold: null,
                  resume: new QH({
                    reconnect: (ee, ie, ye) => async function(ee, ie, He, ye) {
                      const {
                        roomId: be,
                        roomToken: Me
                      } = rJ(ee, ie), Ke = SK;
                      if (null === Ke || Ke.isStopped || HJ) throw new Error("no core is running to resume the game on");
                      const {
                        resumeRoom: Ue
                      } = await pJ(MJ(), He), Fe = {
                        ...aJ,
                        attachSocket: ie => HF !== ee || 0 === ee.heldConn ? (ie.close(), null) : mJ(ie, ee.endpoint, !0)
                      };
                      return Ue(Fe, ee.endpoint, be, Me, {
                        signal: He,
                        onAttached: ye
                      })
                    }(He, ee, ie, ye),
                    releaseSeat: ee => {
                      !async function(ee, ie) {
                        const {
                          roomId: He,
                          roomToken: ye
                        } = rJ(ee, ie);
                        try {
                          const {
                            leaveHeldSeat: ie
                          } = await MJ();
                          await ie(ee.endpoint, He, ye)
                        } catch (be) {
                          console.warn(`${fK} the held seat of a game left while it reconnected couldn't be released`, be)
                        }
                      }(He, ee)
                    },
                    isLive: () => HF === He && null !== iF && !HJ,
                    vY: ee => {
                      JF = ee, hJ()
                    },
                    onReconnected: ee => {
                      ! function(ee) {
                        const ie = sU;
                        if (null !== ie && ie !== ee) {
                          const He = IU.get(ie);
                          void 0 !== He && IU.set(ee, He), jF === ie && (jF = ee), ie.detach()
                        }
                        EJ(ee)
                      }(ee)
                    },
                    onGaveUp: (ee, ie) => {
                      ! function(ee, ie, He) {
                        var ye, be;
                        console.warn(`${fK} gave up reconnecting (${He.reason}, ${He.attempts} attempts)`, He.lastError), (0, Uy.reportReconnectGaveUp)(He, hK);
                        const Me = null !== (ye = null === (be = iF) || void 0 === be ? void 0 : be.rejoin) && void 0 !== ye ? ye : null;
                        GJ(ee, "gaveUp"), OJ();
                        const Ke = {
                          code: ee.dropCode,
                          name: null,
                          reason: wK,
                          canReconnect: !ie,
                          automaticallyReconnect: !1,
                          requiresRefresh: !1
                        };
                        VJ(Ke, ie ? null : Me, !1, {
                          reasonKey: DK,
                          canPlayAgain: ie
                        })
                      }(He, ee, ie)
                    }
                  })
                };
                HF = He, null !== yF && yF.conn === ee.conn && He.resume.onInitialInfo(yF)
              }(Je, ee.endpoint), performance.mark(EK), (0, fe.n)("wasm_joined", ke), setTimeout((() => {
                sU === Je && (0, fe.h)()
              }), 0), oJ(), console.info(`${fK} joined ${ee.roomName} as ${Je.seat.sessionId} at ${Math.round(performance.now())} ms`);
            const ze = RF;
            RF = null, null !== ze && tJ(qe, ze.mask, ze.frames);
            const Be = zF.get(Je.conn);
            return zF.clear(), void 0 !== Be && (EJ(null), YJ(Je.conn, Be.code, Be.reason)), Je
          } finally {
            var ze;
            null === be || void 0 === be || be.removeEventListener("abort", qe), hU === Re && BJ(sU, null), (null === (ze = kF) || void 0 === ze ? void 0 : ze.join) === Re && (kF = null)
          }
        }(ee.target, {
          signal: Ue,
          rejoin: be(ee.target),
          early: Je,
          pageReady: Ke
        });
        return ke = !0, {
          kind: "joined",
          game: Ae
        }
      } catch (Ve) {
        if (Ve instanceof DOMException && "AbortError" === Ve.name || Fe()) return {
          kind: "Ce"
        };
        if (HJ) return {
          kind: "stopped"
        };
        if (pF && (pF = !1, await Me().catch((ee => {
            console.warn(`${fK} the cached traffic code could not be dropped`, ee)
          }))), null === await QK) return {
          kind: "stopped"
        };
        if (Ve instanceof Ji.e) return He(Ve, performance.now() - qe), {
          kind: "failed",
          error: Ve,
          reloading: !1
        };
        const ee = Ve instanceof ei.c && Ve.code === ye.c.wasmClientNotAllowed.code,
          ie = Ve instanceof ei.c && Ve.code === ye.c.outdatedVersion.code,
          be = () => null === sU,
          Ke = await pR({
            site: Uy.JOIN_SITE,
            error: Ve,
            outdated: ie
          }, (() => {
            ee && (0, li.H)(), He(Ve, performance.now() - qe)
          }), {
            stillWanted: be
          });
        return {
          kind: "failed",
          error: Ve,
          reloading: Ke
        }
      } finally {
        var Ae;
        ke || Re.end(), nb.e.releaseHold(oe);
        const ee = null === (Ae = Je) || void 0 === Ae ? void 0 : Ae.release();
        ee && (0, Uy.reportUnusedSeat)(ee, hK)
      }
    }

    function fJ(ee, ie) {
      return ee.stack = ie.stack, ee
    }

    function TJ(ee) {
      return ee.session ? (0, Se.o)(IK, ee.session.gameNameWithVariation) : Promise.resolve()
    }

    function pJ(ee, ie) {
      return (0, ri.r)(ie), new Promise(((He, ye) => {
        const be = () => {
          ye((0, ri.f)(ie))
        };
        ie.addEventListener("abort", be, {
          once: !0
        }), ee.then((ee => {
          ie.removeEventListener("abort", be), He(ee)
        }), (ee => {
          ie.removeEventListener("abort", be), ye(ee)
        }))
      }))
    }

    function XJ() {
      zJ(null)
    }

    function zJ(ee) {
      var ie, He, ye;
      (Co(null === ee ? "left" : "replaced"), function() {
        const ee = HF;
        null !== ee && GJ(ee, "left")
      }(), null === yU || yU.left) || (yU.left = !0, null === (ye = (0, Se.h)()) || void 0 === ye || ye.socketLeft(), (0, ke.v)({
        websocketUrl: null
      }));
      hU && (0, ri.j)(hU, new DOMException("the join was left", "AbortError")), OJ(null !== ee), null === (ie = dU) || void 0 === ie || ie.leave();
      const be = sU;
      null !== ee && nb.e.setGame(ee.game), BJ(null, null !== (He = null === ee || void 0 === ee ? void 0 : ee.controller) && void 0 !== He ? He : null), null === be || void 0 === be || be.leave(), gJ(0), (0, si.e)()
    }

    function BJ(ee, ie) {
      sU = ee, hU = ie, null === sU && null === hU && nb.e.setGame(void 0)
    }

    function EJ(ee) {
      BJ(ee, hU)
    }

    function gJ(ee) {
      const ie = SK;
      return null !== cK && !HJ && null !== ie && !ie.isStopped && (!!cK(ei.e, 0, (0, ei.y)(ee)) && (vU = !0, 0 === ee || xU || ao(ie, !1, "all"), !0))
    }

    function OJ() {
      var ee, ie;
      arguments.length > 0 && void 0 !== arguments[0] && arguments[0] || (0, qy.f)();
      const He = null !== (ee = null === (ie = iF) || void 0 === ie ? void 0 : ie.overflow) && void 0 !== ee ? ee : null;
      iF = null, null !== He && (0, Uy.reportEventOverflow)(He, hK)
    }

    function dJ() {
      null !== sU || null !== hU ? XJ() : lJ()
    }

    function WJ(ee, ie) {
      console.warn(`${fK} the event buffer refused records in ${ie} frames (categories ${ee})`), HJ || (null !== iF ? tJ(iF, ee, ie) : null !== hU && function(ee, ie, He) {
        var ye;
        const be = function(ee, ie) {
          return null === ee ? "drop" : ee.activated ? "keep" : 0 !== (ie & tH.t.NetSession) ? "fail" : "drop"
        }((null === (ye = kF) || void 0 === ye ? void 0 : ye.join) === ee ? kF : null, ie);
        "keep" === be ? RF = {
          mask: ie,
          frames: He
        } : "fail" === be && (0, ri.j)(ee, new Error("the join's net session was lost to an event overflow"))
      }(hU, ee, ie))
    }

    function tJ(ee, ie, He) {
      const ye = ee.overflow ??= {
        frames: 0,
        acks: 0,
        mask: 0,
        outcome: null
      };
      ye.frames += He, ye.acks++, ye.mask |= ie;
      const be = function(ee, ie, He) {
        if (0 === (ee & tH.t.NetSession)) return "none";
        const ye = null !== ie.rejoinedAt && He - ie.rejoinedAt < Tb;
        return null === ie.rejoin || ye ? "fail" : "rejoin"
      }(ie, ee, performance.now());
      "none" !== be && queueMicrotask((() => {
        if (iF !== ee) return;
        const ie = "rejoin" === be && performance.now() - qF >= Qe.d;
        ye.outcome = ie ? "rejoined" : "failed", VJ(function(ee, ie) {
          return {
            code: 0,
            name: "eventOverflow",
            reason: "Your game fell behind the server.",
            canReconnect: ee,
            automaticallyReconnect: ie,
            requiresRefresh: !1
          }
        }(null !== ee.rejoin, ie), ee.rejoin, ie), XJ(), ie && (oF = performance.now())
      }))
    }

    function ZJ() {
      rF && function(ee, ie) {
        let {
          mesh: He,
          worldgen: ye,
          modelPool: be
        } = ee;
        "landingPage" === ie ? (null === He || void 0 === He || He.stopWorkers(), null === ye || void 0 === ye || ye.stopWorker(), null === be || void 0 === be || be.stopWorkers()) : ((0, Ri.i)(ie) || "inGame" === ie) && (null === He || void 0 === He || He.restartWorkers(), null === be || void 0 === be || be.startWorkers())
      }({
        mesh: UU,
        worldgen: MU,
        modelPool: pU
      }, Ri.e.get("gameState"))
    }

    function wJ(ee) {
      QF = ee, eJ && DJ(eJ, ee)
    }

    function DJ(ee, ie) {
      ee.style.visibility = ie ? "visible" : "hidden"
    }

    function PJ(ee) {
      var ie;
      const He = ee.roomName,
        ye = null !== (ie = ee.joinOptions.lobbyName) && void 0 !== ie ? ie : null;
      return () => {
        kJ(He, ye)
      }
    }

    function AJ() {
      return He.e(125).then((() => He(54263))).then((ee => {
        let {
          invalidateGuestTrafficCode: ie
        } = ee;
        return ie()
      })).catch((ee => {
        console.warn(`${fK} the cached traffic code could not be dropped`, ee)
      }))
    }

    function YJ(ee, ie, He) {
      var be, Me;
      let Ke = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (HJ) return;
      if ((null === (be = iF) || void 0 === be ? void 0 : be.conn) !== ee) return void(null !== hU && zF.set(ee, {
        code: ie,
        reason: He
      }));
      Co("lost");
      const {
        rejoin: Ue,
        game: Fe,
        joinedAt: Je
      } = iF;
      OJ(), NJ();
      const oe = (0, Qe.g)(ie, (0, Xb.e)(ee));
      if (console.info(`${fK} the game's connection closed with code ${ie} (${null!==(Me=oe.name)&&void 0!==Me?Me:"unrecognised"})`), ie === ye.c.gameOrPluginKick.code || Ke || (0, Uy.reportDisconnect)(oe, hK, {
          closeReason: He,
          sinceJoinedMs: performance.now() - Je,
          game: Fe
        }), oe.requiresRefresh) {
        const ee = "outdatedVersion" === oe.name,
          He = new Error(`the game's connection closed with code ${ie}`),
          ye = () => null === iF && null === hU;
        return void pR({
          site: Uy.JOIN_SITE,
          error: He,
          outdated: ee
        }, (() => {
          ye() && VJ(oe, null, !1)
        }), {
          stillWanted: ye
        })
      }
      const Re = oe.canReconnect ? Ue : null,
        ke = null !== Re && oe.automaticallyReconnect && performance.now() - qF >= Qe.d;
      VJ(oe, Re, ke)
    }

    function VJ(ee, ie, He) {
      var ye;
      let be = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
        reasonKey: null,
        canPlayAgain: !1
      };
      if (iJ) return;
      nb.e.unwantedLeave(He && null !== ie && 0 === TF.size), null === (ye = fF) || void 0 === ye || ye.abort();
      const Me = new AbortController;
      fF = Me;
      const Ke = null === ie ? null : () => {
        Me.signal.aborted || (Me.abort(), ie())
      };
      if (He && null !== Ke) {
        qF = performance.now();
        const ee = setTimeout(Ke, Qe.b);
        Me.signal.addEventListener("abort", (() => {
          clearTimeout(ee)
        }))
      }
      const Ue = {
        code: ee.code,
        name: ee.name,
        reason: ee.reason,
        reasonKey: be.reasonKey,
        reconnect: Ke,
        reconnecting: He,
        requiresRefresh: ee.requiresRefresh,
        canPlayAgain: be.canPlayAgain
      };
      if (TF.size > 0)
        for (const Je of [...TF]) try {
          Je(Ue)
        } catch (Fe) {
          console.error(`${fK} an unwanted-leave listener threw`, Fe)
        } else Di((0, Wi.i)(ee, null !== Ke, He), Me.signal).then((ie => {
          ie && (null !== Ke ? Ke() : ee.requiresRefresh && (0, oi.j)())
        }))
    }
    const aJ = {
      attachSocket: ee => mJ(ee),
      onConnection: ee => (BF.add(ee), () => {
        BF.delete(ee)
      }),
      sendRaw: (ee, ie) => {
        const He = yU;
        return null !== He && He.conn === ee && No(He, ie)
      },
      leaveRoom: gJ,
      closeSocket: ee => {
        var ie;
        (null === (ie = yU) || void 0 === ie ? void 0 : ie.conn) === ee && lJ()
      },
      flushNet: SJ
    };

    function cJ(ee) {
      var ie;
      let {
        aux: He,
        payload: ye
      } = ee;
      null === (ie = SK) || void 0 === ie || ie.queueOptions(He, ye)
    }

    function xJ(ee, ie) {
      cJ(function(ee, ie) {
        return UM = ee ? {
          preventMovement: ie
        } : null, ee ? FM(ie) : {
          aux: WH.Yb.AdEnd,
          payload: KM
        }
      }(ee, ie))
    }

    function LJ(ee) {
      var ie;
      SU = ee, null === (ie = SK) || void 0 === ie || ie.setUiPrefs(ee)
    }

    function CJ(ee, ie) {
      IK.setMaster(ee, ie)
    }

    function vJ(ee) {
      var ie;
      nU = ee, null === (ie = SK) || void 0 === ie || ie.setEnvPrefs(ee)
    }

    function uJ(ee) {
      var ie;
      jU = ee, null === (ie = SK) || void 0 === ie || ie.setLookPrefs(ee)
    }

    function mJ(ee) {
      var ie;
      let He = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new URL(ee.url).origin,
        ye = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      if (ee.readyState === WebSocket.CLOSING || ee.readyState === WebSocket.CLOSED) return console.warn(`${fK} a closing or closed socket can't be attached`), null;
      const be = SK;
      if (!be || be.isStopped) return console.warn(`${fK} no core is running to attach a socket to`), ee.close(), null;
      if (null === (0, Se.h)()) return console.warn(`${fK} the game has not started to attach a socket to`), ee.close(), null;
      if (DU > WH.r) return console.warn(`${fK} this core has attached all the sockets it can; reload to play on`), ee.close(), null;
      if (vU && !xU && (ao(be, !1, "all"), be.isStopped || HJ)) return ee.close(), null;
      lJ();
      const Me = DU++;
      if (!Ho(be, "open", Me, ye ? WH.Xb.Resume : 0)) return ee.close(), null;
      ye || ji.c.reset(), kF = null === hU ? null : {
        join: hU,
        conn: Me,
        activated: !1
      }, ee.binaryType = "arraybuffer";
      const Ke = new ey.d((() => {
          ! function(ee, ie) {
            if (yU !== ie || ee.isStopped || null === sJ(ie, tK)) return;
            ie.detach(), yU = null, jJ(ee, ie, tK, "", !0), ie.ws.close()
          }(be, Ue)
        })),
        Ue = {
          ws: ee,
          conn: Me,
          pending: [],
          pendingBytes: 0,
          left: !1,
          resume: ye,
          token: null,
          detach: () => {
            Ke.dispose(), ee.removeEventListener("message", Fe), ee.removeEventListener("open", Je), ee.removeEventListener("close", oe)
          }
        },
        Fe = ee => {
          if (ee.data instanceof ArrayBuffer) {
            var ie;
            const He = new Uint8Array(ee.data);
            Ke.heard(), Ue.token = null !== (ie = (0, iy.e)(He)) && void 0 !== ie ? ie : Ue.token,
              function(ee, ie, He) {
                JR(ee, (() => {
                  ee.rings.net.writeFrame(ie, He) || ee.crash(mH.p, `a socket frame of ${He.byteLength} bytes did not fit the net-in ring`)
                }));
                const ye = ee.rings.net.cursor >= WK;
                !qR() && (ye || ee.netWrittenSinceFrame >= dK) && ao(ee, !1, document.hidden ? "all" : "budget");
                TR(ee)
              }(be, Me, He)
          }
        },
        Je = () => {
          ye || (0, fe.n)("wasm_socket_open", performance.now());
          for (const ie of Ue.pending.splice(0)) ee.send(ie);
          Ue.pendingBytes = 0
        },
        oe = ee => {
          if (yU === Ue && be.rings.net.cursor > 0 && ao(be, !1, "all"), yU === Ue) {
            if (Ue.detach(), yU = null, jJ(be, Ue, ee.code, ee.reason) || nJ(be, Ue)) return;
            Ho(be, "close", Me), IJ(Me, Ue.left), YJ(Me, ee.code, ee.reason)
          }
        };
      return ee.addEventListener("message", Fe), ee.addEventListener("open", Je), ee.addEventListener("close", oe), yU = Ue, null === (ie = (0, Se.h)()) || void 0 === ie || ie.socketAttached(Me), (0, ke.v)({
        websocketUrl: He
      }), Me
    }

    function lJ() {
      const ee = yU;
      if (!ee) return;
      const ie = SK,
        He = ee.resume;
      He && (SJ(), yU !== ee) || (yU = null, ee.detach(), ee.ws.close(), null !== ie && (nJ(ie, ee) || He && jJ(ie, ee, ZK)) || (null !== ie && Ho(ie, "close", ee.conn), IJ(ee.conn, ee.left)))
    }

    function SJ() {
      const ee = SK;
      null !== ee && !ee.isStopped && !HJ && !xU && ee.rings.net.cursor > 0 && ao(ee, !1, "all")
    }

    function nJ(ee, ie) {
      var He;
      if (!ie.resume) return !1;
      const ye = HF;
      return null !== ye && null !== ie.token && "" !== ie.token && (ye.pendingHold = {
        conn: ie.conn,
        token: `${ye.roomId}:${ie.token}`
      }), Ho(ee, "close", ie.conn), null === (He = (0, Se.h)()) || void 0 === He || He.socketDetached(ie.conn), !0
    }

    function jJ(ee, ie, He) {
      let ye = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "",
        be = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
      const Me = sJ(ie, He);
      if (null === Me) return !1;
      const {
        lJ: Ke,
        token: Ue,
        game: Fe,
        joinedAt: Je
      } = Me;
      if (!Ho(ee, "close", ie.conn, WH.v.Held)) return !0;
      console.warn(`${fK} the game's connection ${be?"went silent":`dropped with code ${He}`}, holding it`);
      const oe = {
        closeReason: ye,
        sinceJoinedMs: performance.now() - Je,
        game: Fe
      };
      return (0, Uy.reportDisconnect)((0, Qe.g)(He), hK, oe, be ? "silent" : void 0), Ke.heldConn = ie.conn, Ke.dropCode = He, Ke.pendingHold = {
        conn: ie.conn,
        token: `${Ke.roomId}:${Ue}`
      }, xU || ao(ee, !1, "all"), !0
    }

    function sJ(ee, ie) {
      const He = HF,
        be = iF,
        Me = ee.token;
      return null === He || null === be || HJ || ee.left || be.conn !== ee.conn || null === Me || "" === Me ? null : (0, ye.j)(ie) && He.resume.canHoldSeat() ? {
        lJ: He,
        token: Me,
        game: be.game,
        joinedAt: be.joinedAt
      } : null
    }

    function IJ(ee, ie) {
      var He;
      null === (He = (0, Se.h)()) || void 0 === He || He.closeGame(ee), (0, MM.c)().close(ee), ie || (0, ke.v)({
        websocketUrl: null
      })
    }

    function hJ() {
      const ee = JF;
      if (null === ee) return;
      const ie = (0, Se.h)();
      HJ || null === ie || ie.vY(ee) ? JF = null : performance.now() - uU.pause >= AK && (uU.pause = performance.now(), console.warn(`${fK} the cmd ring had no room for SetPaused(${ee}): written before the next frame`))
    }

    function NJ() {
      const ee = HF;
      HF = null, null === ee || void 0 === ee || ee.resume.dispose()
    }

    function GJ(ee, ie) {
      var He, ye;
      const {
        heldConn: be
      } = ee, Me = ee.resume.resumingConn;
      ee.heldConn = 0, ee.pendingHold = null, HF === ee && (HF = null), "left" === ie ? ee.resume.leave() : ee.resume.dispose(), 0 === FF || (null === (He = yU) || void 0 === He ? void 0 : He.conn) !== FF || "left" === ie && (null === (ye = sU) || void 0 === ye ? void 0 : ye.conn) === FF || io(FF), "gaveUp" === ie && 0 !== Me && io(Me), 0 !== be && "refused" !== ie && (console.info(`${fK} the game held through its drop ${"left"===ie?"was left":"is given up"}`), null === SK || SK.isStopped || Ho(SK, "close", be), IJ(be, !1))
    }

    function rJ(ee, ie) {
      const He = ie.indexOf(":");
      return {
        roomId: He < 0 ? ee.roomId : ie.slice(0, He),
        roomToken: ie.slice(He + 1)
      }
    }

    function QJ(ee) {
      (0, lH.logClientMeasurement)("join_preload", ee, {
        client: "wasm"
      })
    }

    function eo(ee) {
      var ie;
      yF = ee;
      const He = ee.replayOffer && UF !== ee.conn;
      KF = He ? ee.conn : 0, bF = He || MF.has(ee.conn) ? 0 : ee.conn, Ve.admitted(), ee.conn === FF && (FF = 0);
      const ye = HF;
      null !== ye && (null === (ie = iF) || void 0 === ie ? void 0 : ie.conn) === ee.conn && ye.resume.onInitialInfo(ee)
    }

    function io(ee) {
      var ie;
      const He = yU;
      (null === He || void 0 === He ? void 0 : He.conn) === ee && (He.left = !0, null === (ie = (0, Se.h)()) || void 0 === ie || ie.socketLeft(), (0, ke.v)({
        websocketUrl: null
      }), gJ(ee) ? setTimeout((() => {
        yU === He && lJ()
      }), ei.d) : lJ())
    }

    function Ho(ee, ie, He) {
      let ye = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        be = !1;
      return JR(ee, (() => {
        const {
          net: Me
        } = ee.rings;
        be = "open" === ie ? Me.writeOpen(He, ye) : Me.writeClose(He, ye), be || ee.crash(mH.p, `a socket ${ie} did not fit the net-in ring`)
      })), be
    }

    function yo(ee, ie, He) {
      let ye = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const be = "noContext" === ie ? "noContext" : "blockedAfterLoss" === ie ? "graphicsLost" : ee;
      (0, Uy.showUnsupported)(be, "unsupported", He, {
        ...ye,
        decline: ie
      })
    }
    const bo = 1500;

    function Mo(ee) {
      return (0, vH.p)(ee) && Ko(ee)
    }

    function Ko(ee) {
      return 1 === ee.missing.length && ee.missing[0] === vH.b
    }
    const Uo = "wasmNoContextWaited";

    function Fo(ee, ie) {
      const He = Ko(ee),
        ye = He ? (0, vH.cb)() : "",
        be = ie || (0, vH.W)(ye) ? "blockedAfterLoss" : He ? "noContext" : "unsupported",
        Me = `No WebGPU or WebGL2, and WebGL1 lacks ${ee.missing.join(", ")}`;
      return {
        decline: be,
        detail: "" === ye ? Me : `${Me}; ${ye}`,
        details: {
          missing: ee.missing.join(",")
        },
        retries: "unsupported" !== be && rF
      }
    }

    function Jo(ee) {
      console.warn(`${fK} ${ee}: reloading once more onto the wasm client`), (0, eM.m)(), (0, Uy.flushCrashReports)(oi.c).then(oi.j, oi.j)
    }

    function oo() {
      return rF && "address" !== li.y.reason
    }

    function Ro(ee, ie, He, ye) {
      return dF(ee, ie, He, ye)
    }

    function ko() {
      null === ZF || null === SK || SK.isStopped || HJ || null !== zU || null === cK || (zU = ZF(cK, To, po().follow))
    }

    function qo() {
      var ee, ie, He;
      return null !== (ee = null === (ie = jK) || void 0 === ie || null === (He = ie.textures) || void 0 === He ? void 0 : He.files()) && void 0 !== ee ? ee : null
    }

    function fo(ee) {
      po().follow((ie => {
        null !== ie && Promise.all([Promise.all([He.e(225), He.e(53)]).then((() => He(54294))), (0, eM.N)()]).then((ee => {
          let [{
            followPagePackFiles: He
          }, ye] = ee;
          const be = null === ye || (0, vH.p)(ye) ? "webgl" : ye.backend;
          He(ie, Sb.h, be, (ee => {
            Sb.h.setPageFiles(ee)
          }), To)
        }), (ie => {
          console.warn(`${fK} the texture pack's files didn't load: the previews draw the shipped ones until the next opens`, ie), ee()
        }))
      }))
    }

    function To(ee, ie) {
      console.warn(`${fK} ${ee}`, ie)
    }

    function po() {
      return nK ??= new qM({
        load: ee => Promise.all([He.e(225), He.e(66)]).then((() => He(54297))).then((ie => {
          let {
            startPageTexturePackFeed: He
          } = ie;
          return He(To, ee)
        })),
        store: oH.e,
        RR: ee => {
          QK.then((() => {
            (0, Uy.reportTexturePackFeedLoadFailure)(ee, hK)
          }))
        }
      }), nK
    }
    const Xo = ee => po().follow(ee);

    function zo() {
      return po().loaded()
    }
    const Bo = function(ee, ie, He) {
        let ye = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => performance.now(),
          be = 0;
        return async function(Me, Ke) {
          let Ue = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => !0;
          const Fe = ++be,
            Je = ye() + ie,
            oe = await
          function(ee, ie) {
            let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {};
            return new Promise((ye => {
              const be = setTimeout((() => {
                ye(null), ee.then((ee => {
                  null !== ee && (ee.joinedWithout(), He(ee))
                }))
              }), ie);
              ee.then((ee => {
                clearTimeout(be), ye(ee)
              }))
            }))
          }(ee(Me), ie, (ee => {
            Fe === be && Ue() && Ke(ee, ye() + ie).catch((ee => {
              He("the texture pack step after the join failed", ee)
            }))
          }));
          return null === oe ? null : Ke(oe, Je)
        }
      }((ee => (0, Yi.k)(ee) ? po().request() : po().forJoin()), kM.e, To),
      Eo = function(ee, ie) {
        let He = !1;
        return {
          setGamePackConfirm: ee => {
            He = null !== ee, ie(ee)
          },
          packStep: (ie, ye, be) => ee(ie, ye, (() => He && be()))
        }
      }(Bo, (ee => {
        po().setGamePackConfirm(ee)
      }));

    function go(ee) {
      Eo.setGamePackConfirm(ee)
    }

    function Oo() {
      if (HJ || null !== YF || null === wF || null === AF) return;
      const {
        backend: ee,
        canvas: ie,
        fallbackReason: He,
        adapterVendor: ye
      } = AF, be = wF;
      wF = null;
      try {
        YF = be({
          backend: ee,
          canvas: ie,
          fallbackReason: He,
          adapterVendor: ye,
          joinedGame: () => HJ ? null : sU,
          canSend: () => !HJ && null !== sU && sU.conn === bF,
          inGame: to,
          shaderPackReach: () => {
            var ee, ie;
            return null !== (ee = null === (ie = dU) || void 0 === ie ? void 0 : ie.reachInJoinedGame()) && void 0 !== ee ? ee : null
          },
          GT: () => BU,
          msaa: () => PF > 1,
          writeCmd: (ee, ie, He) => null !== cK && cK(ee, ie, He),
          takeFailedMeshJobs: () => {
            var ee, ie;
            return null !== (ee = null === (ie = UU) || void 0 === ie ? void 0 : ie.takeFailedMeshJobs()) && void 0 !== ee ? ee : 0
          },
          readLoadCounts: ee => {
            var ie, He;
            return null !== (ie = null === (He = SK) || void 0 === He ? void 0 : He.readLoadCounts(ee)) && void 0 !== ie && ie
          },
          mainStalled: (ee, ie, He, ye) => {
            (0, Uy.reportMainStall)(ee, ie, He, ye, hK)
          },
          RP: ee => {
            var ie, He, ye;
            return null !== (ie = null === (He = OF) || void 0 === He || null === (ye = He.RP) || void 0 === ye ? void 0 : ye.call(He, ee)) && void 0 !== ie ? ie : -1
          }
        })
      } catch (Me) {
        console.error(`${fK} the frame telemetry didn't start`, Me)
      }
    }

    function Wo(ee, ie) {
      try {
        var He, ye, be;
        const Me = EF && null !== (He = null === (ye = SK) || void 0 === ye || null === (be = ye.lastHeader) || void 0 === be ? void 0 : be.renderPending) && void 0 !== He ? He : 0;
        (0, Sy.c)(ie, ee, to() && !(null !== UM), Me)
      } catch (Me) {
        (0, Sy.t)(), console.error(`${fK} the quality steps stopped`, Me)
      }
    }

    function to() {
      return null !== sU && jF === sU && !HJ
    }

    function Zo(ee) {
      const ie = YF;
      YF = null;
      try {
        null === ie || void 0 === ie || ie.stop()
      } catch {}
      console.error(`${fK} the frame telemetry threw: it stops`, ee)
    }

    function wo(ee) {
      var ie, He, ye, be;
      if ((0, MM.c)().fire(ee), "message" === ee.type) {
        if (LU++, ee.nF === WH.Cc.ERROR && null !== hU) {
          var Me;
          const {
            text: ie,
            dropsCache: He
          } = (0, Qe.k)((new TextDecoder).decode(ee.payload));
          pF ||= He, (null === (Me = kF) || void 0 === Me ? void 0 : Me.conn) === ee.conn && (XF = ie)
        } else if (ee.nF === tH.ic.ResumeComplete) {
          var Ke;
          UF = ee.conn, ee.conn === KF && (KF = 0, bF = MF.has(ee.conn) ? 0 : ee.conn), null === (Ke = HF) || void 0 === Ke || Ke.resume.onResumeComplete(ee.conn)
        }
        return
      }
      ee.phase === WH.x.Left ? CU = ee.conn : ee.phase === WH.x.Activated && (null === (ie = kF) || void 0 === ie ? void 0 : ie.conn) === ee.conn ? kF.activated = !0 : ee.phase === WH.x.Resumed ? function(ee) {
        var ie, He;
        FF = ee;
        const ye = HF;
        if (null === ye || 0 === ye.heldConn || (null === (ie = yU) || void 0 === ie ? void 0 : ie.conn) !== ee || !yU.resume || null === iF) return;
        console.info(`${fK} the game resumed on conn ${ee}, waiting for its InitialInfo`);
        const be = ye.heldConn;
        ye.heldConn = 0, yU.resume = !1, iF.conn = ee, (null === (He = QU) || void 0 === He ? void 0 : He.conn) === be && (QU = {
          conn: ee,
          info: QU.info
        }), ji.c.apply({
          shopInfo: null,
          _shopVersion: Vi.c
        })
      }(ee.conn) : ee.phase === WH.x.Held ? function(ee) {
        var ie;
        const He = HF,
          ye = null !== (ie = null === He || void 0 === He ? void 0 : He.pendingHold) && void 0 !== ie ? ie : null;
        if (null !== He && null !== ye && ye.conn === ee) return He.pendingHold = null, He.heldConn = ee, FF = 0, console.warn(`${fK} the core holds the game, reconnecting`), void He.resume.onDropped(ye.token);
        if (ee === FF) {
          FF = 0;
          const ie = SK;
          null === ie || ie.isStopped || (console.info(`${fK} the core held again a resumed game the shell ended before its InitialInfo: closing it again`), Ho(ie, "close", ee))
        }
      }(ee.conn) : ee.phase === WH.x.Closed && (null === (He = HF) || void 0 === He || null === (ye = He.pendingHold) || void 0 === ye ? void 0 : ye.conn) === ee.conn && (HF.heldConn === ee.conn ? function(ee) {
        const ie = ee.heldConn,
          He = ee.dropCode;
        GJ(ee, "refused"), console.info(`${fK} the core didn't hold the game through its drop: it hadn't started`), queueMicrotask((() => {
          IJ(ie, !1), YJ(ie, He, "", !0)
        }))
      }(HF) : HF.pendingHold = null), ee.phase !== WH.x.Held && ee.phase !== WH.x.Left && ee.phase !== WH.x.Closed || (MF.add(ee.conn), ee.conn === bF && (bF = 0));
      const Ue = Object.keys(WH.x).find((ie => WH.x[ie] === ee.phase)),
        Fe = 0 === ee.code ? "" : ` (code ${ee.code})`;
      console.info(`${fK} conn ${ee.conn}: ${null!==Ue&&void 0!==Ue?Ue:ee.phase}${Fe}, ${LU} raw messages so far`), (null === (be = sU) || void 0 === be ? void 0 : be.conn) !== ee.conn || ee.phase !== WH.x.Left && ee.phase !== WH.x.Closed || EJ(null), rU !== ee.conn || ee.phase !== WH.x.Left && ee.phase !== WH.x.Closed || (rU = null, null === sU && null === hU && nb.e.setGame(void 0));
      for (const oe of [...BF]) try {
        oe(ee.conn, ee.phase, ee.code)
      } catch (Je) {
        (0, ZH.j)(Je, `${fK} a connection listener threw`)
      }
    }
    const Do = 9e4,
      Po = 1e3;

    function Ao() {
      (0, eM.m)(), GF.forget(), null === sU && null === hU || (0, By.f)(), queueMicrotask((() => {
        try {
          ro()
        } catch (ee) {
          console.warn(`${fK} stopping before the reload threw`, ee)
        }(0, Uy.flushCrashReports)(oi.c).then(oi.j, oi.j)
      }))
    }

    function Yo() {
      const ee = SK;
      null === ee || ee.isStopped || null === yU || xU || !ee.hasPendingCommands() || ao(ee, !1, "budget")
    }

    function Vo(ee) {
      var ie;
      const He = sU;
      ee.persisted || null === He || (null === (ie = yU) || void 0 === ie ? void 0 : ie.conn) !== He.conn || yU.left || He.leave()
    }

    function ao(ee, ie, ye) {
      let be = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const Me = xU;
      xU = !0;
      try {
        const Me = ee.rings.net.cursor >= WK;
        Me && "all" !== ye && !document.hidden && iR("backlog", `a shown tab's net-in is ${ee.rings.net.cursor} bytes behind: one frame reads it all`);
        return function(ee, ie, ye, be) {
          var Me, Ke, Ue, Fe;
          if (HJ) return !1;
          if (JR(ee, xo), HJ || ee.isStopped) return !1;
          Io() && ZU("modelsIn");
          hJ(), PU = performance.now(), CU = null, vU = !1, (0, le.Q)(), null === (Me = qU) || void 0 === Me || Me.beforeFrame(), bb(PU, ee), (0, le.H)(PU, Lo), cU = !0;
          const Je = ie && so();
          let oe;
          try {
            oe = ee.frame(PU, Je, ye)
          } finally {
            cU = !1
          }
          if (!oe) return !1;
          DF.observe(null !== (Ke = null === (Ue = ee.lastHeader) || void 0 === Ue ? void 0 : Ue.chunksCancelled) && void 0 !== Ke ? Ke : 0);
          const Re = ee.lastFrameKind,
            ke = (0, UH.b)(Re);
          (function(ee) {
            null !== DM && DM.afterFrame(performance.now(), ee)
          })(ke), null === (Fe = VF) || void 0 === Fe || Fe.frame(ee, PU, Re), ie && (IF = ke);
          ke && ((0, bH.d)(PU), SF.frame(PU));
          if (null !== YF) try {
            YF.frameRan(ee, PU, performance.now(), Re)
          } catch (pe) {
            Zo(pe)
          }
          "drawn" === Re && jo() && function() {
            for (const ee of [...rb]) ee()
          }();
          ee.forEachNetOut(ho);
          const qe = yU;
          null !== CU && (null === qe || void 0 === qe ? void 0 : qe.conn) === CU && No(qe, ei.f);
          no(ee),
            function(ee) {
              const ie = 0 !== (ee.headerWord(tH.F.LoadSteps) & tH.T.JoinPreload);
              ie !== GU && (GU = ie, (0, Uy.setCrashAdPreload)(ie), (0, qy.M)())
            }(ee), ie && (! function(ee) {
              var ie, ye, be;
              if (null === sU || !so()) return;
              const Me = ee.headerWord(tH.F.LoadSteps);
              null === lF || jF === sU && !lF.frame(PU, 0 !== (Me & tH.U.TerrainDrawn)) || (lF = null);
              if (0 === (Me & tH.T.PlayerBound)) return;
              const Ke = ee.lastHeader,
                Ue = !EF || 0 === (null === Ke || void 0 === Ke ? void 0 : Ke.renderPending);
              !LF && Ue && (LF = !0, performance.mark(OK));
              if (jF === sU) return;
              const Fe = null !== (ie = null === Ke || void 0 === Ke ? void 0 : Ke.firstView) && void 0 !== ie ? ie : WH.V.NotYet;
              if (EF && Fe === WH.V.NotYet) return;
              if (xF && (!0 !== (null === (ye = (0, Se.h)()) || void 0 === ye ? void 0 : ye.isSessionLive) || !Ue)) return;
              jF = sU;
              const Je = sU;
              if (setTimeout((() => {
                  sU === Je && (0, fe.i)()
                }), 0), null === (be = dU) || void 0 === be || be.playable(), function() {
                  clearTimeout(HU), HU = setTimeout((() => {
                    to() && kR((ee => {
                      let {
                        prefetchWorldgenWorker: ie
                      } = ee;
                      ie()
                    }))
                  }), aK)
                }(), xF) return;
              xF = !0, SF.shown(), performance.mark(gK), (0, gM.q)("render") && Promise.all([He.e(89), He.e(56)]).then((() => He(5138))).then((ee => {
                let {
                  renderDebugPlayable: ie
                } = ee;
                ie()
              }), (ee => {
                console.warn("The render debug topic didn't load", ee)
              }));
              const oe = Math.round(performance.now()),
                Re = ee.readViewQueuedPrograms();
              null !== Re && (0, fe.n)("wasm_view_links", oe, (0, Te.Eb)(Re));
              const ke = null === mF || null === vF ? 0 : Math.max(0, vF - mF),
                qe = null === mF ? 0 : Math.max(0, oe - mF),
                pe = EF ? ee.readFirstViewWait(ke, qe) : null;
              null !== pe && (0, fe.m)(pe);
              if (EF && Fe !== WH.V.Drawn) {
                const ie = Fe === WH.V.HeldBackstop ? "held_draws" : "long",
                  {
                    cause: He
                  } = mo(ee);
                if (console.warn(`${fK} playable at ${oe} ms on the first view's ${ie} backstop, ${He}: it wasn't drawn whole in time`), (0, fe.n)("wasm_view_backstop", oe, `${ie}:${He}`), "long" === ie) {
                  var Xe, ze;
                  const ie = null !== (Xe = null === (ze = iF) || void 0 === ze ? void 0 : ze.game) && void 0 !== Xe ? Xe : "";
                  lF = new Ey.d((() => {
                    const {
                      cause: He,
                      census: ye
                    } = mo(ee);
                    (0, Uy.reportFirstViewNoTerrain)(ie, He, ye, hK), (0, mi.s)("noTerrain")
                  }))
                }
              } else console.info(`${fK} playable at ${oe} ms${EF?"":" (no renderer)"}`);
              setTimeout(tF, 0), (0, Ii.d)().catch((ee => {
                console.error(`${fK} item sprites didn't load, so item particles show the missing texture`, ee)
              })), ab.b.warm()
            }(ee), ke && null !== sU && 0 !== (ee.headerWord(tH.F.LoadSteps) & tH.U.MeshLanded) && (sF = sU), (0, cb.h)(null !== sU && sF === sU && jF !== sU), (0, cb.l)(null !== sU));
          (0, mH.F)(ee, {
            worldgen: MU,
            mesh: UU
          }),
          function(ee) {
            ee.forEachEvent(Kb);
            for (const ie of Mb) try {
              (0, Qy.d)(ie)
            } catch (pe) {
              if ((0, ZH.g)(pe)) {
                ee.crashOn(mH.i, pe);
                break
              }
              console.error(`${ib} an input action listener threw`, pe)
            }
            Mb.length = 0
          }(ee), be && (0, KH.d)();
          return !ee.isStopped
        }(ee, ie, "all" === ye || Me, be)
      } finally {
        xU = Me, Me || (AU = performance.now())
      }
    }

    function co(ee) {
      console.error(`${fK} a frame-start listener threw`, ee)
    }

    function xo() {
      var ee, ie, He, ye;
      null === (ee = TU) || void 0 === ee || ee.drain(cK, xK), null === (ie = EU) || void 0 === ie || ie.drain(cK), null === (He = gU) || void 0 === He || He.drain(performance.now()), WF(cK), null === (ye = zU) || void 0 === ye || ye.drain()
    }

    function Lo(ee) {
      console.error(`${fK} a before-frame listener threw`, ee)
    }

    function Co(ee) {
      var ie, He;
      const ye = SK;
      if (null === ye || ye.isStopped || HJ || (0, eM.b)()) return;
      const be = SF.end(ee, performance.now());
      if (null === be) return;
      const {
        cause: Me,
        census: Ke,
        loadSteps: Ue
      } = mo(ye), Fe = {
        cause: Me,
        bound: 0 !== (Ue & tH.T.PlayerBound),
        preload: 0 !== (Ue & tH.T.JoinPreload),
        startupLoaded: so(),
        renderPending: null !== (ie = null === (He = ye.lastHeader) || void 0 === He ? void 0 : He.renderPending) && void 0 !== ie ? ie : 0,
        wait: ye.readFirstViewWait(0, 0)
      };
      Fe.bound && null === Fe.wait && console.warn(`${fK} the first view's wait couldn't be read as the load ended: its report says lacked none`), (0, Uy.reportFirstViewUnshown)(nF, be, Fe, Ke, hK), "hidden" !== ee && "pagehide" !== ee || (0, Uy.flushCrashReports)(oi.c)
    }

    function vo() {
      document.hidden && Co("hidden")
    }

    function uo() {
      Co(document.hidden ? "hidden" : "pagehide")
    }

    function mo(ee) {
      const ie = (0, Se.h)(),
        He = (0, Se.q)(),
        ye = null === ie || null === He ? null : He.readDrawCensus(ie.api),
        be = ee.headerWord(tH.F.LoadSteps);
      return {
        cause: (0, Ey.m)(be, ye),
        census: ye,
        loadSteps: be
      }
    }
    const So = {
      ChunkRequested: "wasm_chunk_requested",
      ChunkStored: "wasm_chunk_stored",
      MeshLanded: "wasm_mesh_landed",
      PlayerChunk: "wasm_player_chunk",
      TerrainDrawn: "wasm_terrain_drawn"
    };

    function no(ee) {
      var ie;
      if (xF) return;
      if (null === vF && so() && (vF = performance.now()), null === sU || 0 === (ee.headerWord(tH.F.LoadSteps) & tH.T.PlayerBound) ? mF = null : mF ??= performance.now(), null === hU && null === sU) return;
      null === vF || uF || (uF = !0, (0, fe.n)("wasm_startup_loaded", vF));
      let He = 0;
      null !== sU ? He = -1 : !0 === (null === (ie = kF) || void 0 === ie ? void 0 : ie.activated) && (He = ~tH.U.TerrainDrawn);
      const ye = ee.headerWord(tH.F.LoadSteps) & He & ~CF;
      if (0 === ye) return;
      CF |= ye;
      const be = performance.now();
      var Me, Ke, Ue;
      0 !== (ye & tH.U.PlayerChunk) && (SF.playerChunk(be), nF = null !== (Me = null !== (Ke = null === (Ue = iF) || void 0 === Ue ? void 0 : Ue.game) && void 0 !== Ke ? Ke : NU) && void 0 !== Me ? Me : "", (0, Uy.warmCrashCounts)());
      for (const [Fe, Je] of Object.entries(So)) 0 !== (ye & tH.U[Fe]) && (0, fe.n)(Je, be)
    }

    function jo() {
      return EF && so()
    }

    function so() {
      return OU && Io()
    }

    function Io() {
      return null === TU || TU.startupDone
    }

    function ho(ee, ie) {
      const He = yU;
      (null === He || void 0 === He ? void 0 : He.conn) === ee ? No(He, ie) : lU++
    }

    function No(ee, ie) {
      const {
        ws: He
      } = ee;
      return He.readyState === WebSocket.OPEN ? (He.send(ie), !0) : He.readyState === WebSocket.CONNECTING && ee.pendingBytes + ie.byteLength <= PK ? (ee.pending.push(ie.slice()), ee.pendingBytes += ie.byteLength, !0) : (lU++, !1)
    }

    function Go() {
      return null !== sU && jo()
    }

    function ro() {
      var ee, ie, He, ye, be, Me, Ke, Ue, Fe, Je, oe, Re, ke, qe, fe, Te, pe;
      HJ = !0, hF.stop(), (0, dM.endLookDebugTake)(), DM = null, NJ(), (0, le.O)().unlockPointer(), (0, le.K)(null), null === (ee = fU) || void 0 === ee || ee(), fU = null, null === (ie = (0, Se.q)()) || void 0 === ie || ie.followCursorAim(null), (0, KH.I)(), (0, Se.g)(), IK.stop(), null === (He = aF) || void 0 === He || He(), aF = null, null === (ye = cF) || void 0 === ye || ye(), cF = null, null === (be = YF) || void 0 === be || be.stop(), YF = null, (0, Oy.o)(null), null === (Me = bU) || void 0 === Me || Me(), bU = null, null === (Ke = MU) || void 0 === Ke || Ke.stop(), MU = null, null === (Ue = UU) || void 0 === Ue || Ue.stop(), UU = null, null !== (Fe = jK) && void 0 !== Fe && null !== (Je = Fe.textures) && void 0 !== Je && Je.assets && (0, mb.n)(null), null === (oe = jK) || void 0 === oe || oe.stop(), jK = null, sK = null;
      const Xe = FU;
      FU = null, Xe && (Xe.stop(), FR(Xe)), null === (Re = EU) || void 0 === Re || Re.dispose(), EU = null, null === (ke = gU) || void 0 === ke || ke.dispose(), gU = null, TU = null, null === (qe = XU) || void 0 === qe || qe(), XU = null, null === (fe = kU) || void 0 === fe || fe(), kU = null, null !== aU && (clearTimeout(aU), aU = null), null === (Te = qU) || void 0 === Te || Te.stop(), qU = null, XJ(), nb.e.release(), lJ();
      const ze = zU;
      zU = null;
      try {
        null === ze || void 0 === ze || ze.dispose()
      } catch (Be) {
        console.warn(`${fK} the sky's images didn't release`, Be)
      }(0, xb.h)(null), null === (pe = mK) || void 0 === pe || pe.pagePreviews().endSession(null === (0, ci.o)())
    }

    function Qo(ee, ie) {
      var He, ye;
      const be = null !== (He = null === (ye = FU) || void 0 === ye ? void 0 : ye.details()) && void 0 !== He ? He : {},
        Me = ee.site === pK || ee.site === XK || ee.site === Uy.RENDER_RELOAD_SITE || ee.site === zK ? ee.error instanceof WebAssembly.RuntimeError || ee.error instanceof cH.b : !(0, vH.s)(ee.error) && (0, mH.A)(ee);
      Me && ee.error instanceof Error && (0, ci._)(ee.error);
      const Ke = Me || ee.site === mH.q ? (0, Uy.readTrap)(ee.error) : null,
        Ue = null !== Ke && (0, DH.g)(Ke.kind, Ke.refusedBytes) ? Ke.refusedBytes : 0,
        Fe = (0, yy.r)(),
        Je = null === JU ? (0, Ab.l)(function() {
          try {
            return (0, ci.t)().buffer.byteLength
          } catch {
            return 0
          }
        }(), Ue, Fe) : JU.ceilingMayRefuse(Ue, Fe),
        oe = Ue > 0 && !Je && oo() && !(0, eM.b)() ? (0, yy.u)() : void 0;
      var Re;
      if (ro(), (0, eM.b)()) return GF.releaseNow(), console.warn(`${fK} the session stopped at ${ee.site} as the page reloads`, ee.error), void((0, vH.s)(ee.error) || (null === (Re = ee.header) || void 0 === Re ? void 0 : Re.lastError) === WH.E.CoreBusy || (0, Uy.reportStoppedCore)(ee, ie, Ke, {
        memoryDetails: be,
        memoryStep: oe
      }));
      (0, Uy.showCrash)(ee, ie, Ke, {
        memoryDetails: be,
        memoryStep: oe
      })
    }

    function eR(ee) {
      var ie, He;
      let {
        text: ye,
        reload: be,
        stillBlocked: Me
      } = ee;
      if (iJ) return;
      iJ = !0, (0, qy.Z)(), null === (ie = fF) || void 0 === ie || ie.abort(), fF = null, nb.e.release();
      const Ke = rF ? null !== (He = ye.cancel) && void 0 !== He ? He : "general:back" : null;
      !async function(ee, ie, He) {
        let ye = ee;
        for (; await Di(ye) && ie;) {
          if (null === He || RH(!1) || RH(!0)) return void(0, oi.j)();
          ye = He
        }
        rF && (0, oi.g)("/")
      }({
        ...ye,
        cancel: Ke
      }, be, null === Me ? null : {
        ...Me,
        cancel: Ke
      })
    }

    function iR(ee, ie) {
      const He = performance.now();
      return !(He - uU[ee] < AK) && (uU[ee] = He, console.warn(`${fK} ${ie}`), !0)
    }

    function HR(ee) {
      const {
        input: ie,
        net: He,
        worker: ye
      } = ee.rings, be = ee.optionsDropped, Me = ie.dropped + be + He.dropped + ye.dropped + lU;
      Me !== mU && iR("dropped", `${Me} records dropped so far (input ${ie.dropped}, options ${be}, net ${He.dropped}, worker ${ye.dropped}, net-out ${lU})`) && (mU = Me)
    }

    function yR() {
      var ee, ie;
      const He = (0, ky.h)();
      if (null === He) return null;
      const ye = (0, zy.j)(He);
      return {
        ...ye,
        horizontal: Math.min(ye.horizontal, null !== (ee = null === (ie = FU) || void 0 === ie ? void 0 : ie.shedDistanceInUse()) && void 0 !== ee ? ee : 1 / 0)
      }
    }
    const bR = new WeakSet;

    function MR(ee) {
      var ie, He;
      return {
        samples: EF ? PF : null,
        sunShadows: ee,
        renderDistance: null !== (ie = null === (He = yR()) || void 0 === He ? void 0 : He.horizontal) && void 0 !== ie ? ie : null
      }
    }

    function KR(ee) {
      NU = ee, (0, qy.M)()
    }

    function UR() {
      var ee, ie, He;
      const ye = yR();
      return {
        ...null === (ee = FU) || void 0 === ee ? void 0 : ee.pageKillSnapshot(),
        renderDistance: null !== (ie = null === ye || void 0 === ye ? void 0 : ye.horizontal) && void 0 !== ie ? ie : null,
        renderDistanceVertical: null !== (He = null === ye || void 0 === ye ? void 0 : ye.vertical) && void 0 !== He ? He : null,
        chunkCap: oU,
        budgetBasis: RU,
        renderBackend: (0, eM.C)(),
        adPreload: GU,
        ...(0, fy.e)(NU)
      }
    }

    function FR(ee) {
      var ie;
      console.info(`${fK} wasm memory at the session's end`, ee.details());
      const {
        wasmMainMiB: He,
        wasmWorkersMiB: ye,
        peakStoredChunks: be
      } = ee.pageKillSnapshot(), Me = navigator.deviceMemory;
      (0, lH.logClientMeasurement)("wasm_memory_end", {
        wasmMainMiB: He,
        wasmWorkersMiB: ye,
        peakStoredChunks: be
      }, {
        client: "wasm",
        renderBackend: null !== (ie = (0, eM.C)()) && void 0 !== ie ? ie : "none",
        os: (0, Ty.getOperatingSystem)(),
        deviceMemory: String(null !== Me && void 0 !== Me ? Me : "unreported")
      })
    }

    function JR(ee, ie) {
      if (!ee.isStopped) try {
        ie()
      } catch (He) {
        ee.crash(mH.u, He)
      }
    }

    function oR() {
      return KU ??= He.e(83).then((() => He(54302))).catch((ee => {
        throw KU = null, ee
      })), KU
    }
    async function RR() {
      const {
        createWorldgenWorker: ee,
        worldgenWorkerReady: ie
      } = await oR();
      return await ie(), ee
    }

    function kR(ee) {
      var ie;
      null === (ie = KU) || void 0 === ie || ie.then(ee, (() => {}))
    }

    function qR() {
      return performance.now() - Math.max(AU, YU) >= YK
    }

    function fR(ee) {
      const ie = document.hidden || VU ? "all" : "budget";
      VU = !0;
      const He = ao(ee, !1, ie);
      var ye;
      He && (HR(ee), null === (ye = FU) || void 0 === ye || ye.afterFrame());
      return He
    }

    function TR(ee) {
      ee.isStopped || 0 === ee.rings.net.cursor || qR() && !fR(ee) || ee.rings.net.cursor > 0 && performance.now() - YU >= YK / 2 && function(ee) {
        aU ??= setTimeout((() => {
          aU = null, TR(ee)
        }), YK)
      }(ee)
    }

    function pR(ee, ie) {
      return async function(ee, ie, He) {
        let {
          stop: ye,
          stillWanted: be,
          beforeReload: Me
        } = He;
        const Ke = await (0, pb.m)(ee, {
          stillWanted: be,
          beforeReload: async () => {
            ye(), await Promise.all([(0, Uy.flushCrashReports)(oi.c), null === Me || void 0 === Me ? void 0 : Me()])
          },
          reload: oi.j
        });
        return Ke || ie(), Ke
      }(ee, ie, {
        ...arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        stop: ro
      })
    }
    let XR = !1;

    function zR() {
      return XR = !0, async function(ee, ie, ye) {
        const {
          gamePackSource: be
        } = await He.e(124).then((() => He(42130)));
        await Eo.packStep(ee, ((He, ye) => He.packForGame(ee, be(ie), ye)), ye)
      }(...arguments)
    }

    function BR(ee) {
      ! function(ee, ie) {
        ee((ee => {
          null === ee || void 0 === ee || ee.subscribe((ee => {
            let {
              pack: He,
              gameSource: ye
            } = ee;
            ie(null === ye || null === He ? null : {
              pack: He,
              source: "" === ye ? null : ye
            })
          }))
        }))
      }(Xo, ee)
    }
    let ER = !1,
      gR = null,
      OR = !1,
      dR = !1;

    function WR() {
      var ee;
      ER || (ER = !0, Zi = (ee, ie) => (0, Xi.s)(zi.f.get().getCurrentLanguageCode(), ee, ie), JJ("play", Fi), (0, ke.r)(new LR), Ue.gameBridge.attach(re), AR().catch((() => {})), (0, Se.r)((ee => {
        gi(ee.setTextHost)
      })), ee = wR, TF.add(ee), function(ee) {
        for (const ie of WU) ee(ie);
        tU.add(ee)
      }((ee => {
        ZR(tR[ee])
      })))
    }
    const tR = {
      booted: Me.k.INITIALISE_NOA,
      texturesIn: Me.k.REGISTRATION,
      modelsIn: Me.k.SETUP_LIFEFORMS
    };

    function ZR(ee) {
      Fe.h.yR("matchmakeAndPlayStepCompleted", {
        step: ee,
        totalSubSteps: 1
      })
    }

    function wR(ee) {
      if (!OR) return;
      const {
        gameNameWithVariation: ie,
        lobbyName: He
      } = (0, ke.e)();
      if (ee.code === ye.c.serverUpdating.code) return (new LR).leaveLive(), void PR(ie, He);
      Le.b.leftGame(ie, ee.code), Fe.h.yR("unwantedLeftGame", {
        reason: DR(ee),
        requiresRefresh: ee.requiresRefresh,
        canReconnect: null !== ee.reconnect,
        automaticallyReconnect: ee.reconnecting,
        canPlayAgain: ee.canPlayAgain,
        gameNameWithVariation: ie,
        lobbyName: He
      }), (new LR).leaveLive()
    }

    function DR(ee) {
      return null !== ee.reasonKey ? {
        translationKey: ee.reasonKey
      } : "gameOrPluginKick" === ee.name ? (0, Pi.b)(ee.reason) : `You have disconnected from the server.\n${ee.reason}`
    }

    function PR(ee, ie) {
      var ye;
      ye = (0, Je.D)(ee, ie), Promise.resolve().then((() => He(1502))).then((ee => {
        let {
          navigatePreserveSearch: ie
        } = ee;
        ie(ye)
      })).catch((ee => {
        console.warn("[bloxd-wasm-client] the page's router didn't navigate: loading the page instead", ee), (0, oi.g)(ye)
      }))
    }

    function AR() {
      return gR ??= Promise.all([He.e(84), He.e(87), He.e(85), He.e(86), He.e(103), He.e(100), He.e(300), He.e(207), He.e(250), He.e(274), He.e(244), He.e(54)]).then((() => He(42095))).then((ee => {
        try {
          ee.attachPlayGameSources()
        } catch (ie) {
          throw console.error("[bloxd-wasm-client] the play sources did not attach", ie),
            function(ee) {
              QK.then((ie => {
                null === ie || ie.isStopped || HJ ? console.warn(`${fK} the play sources threw as they attached, after the client stopped`, ee) : Qo({
                  site: zK,
                  error: ee,
                  header: null
                }, hK)
              }))
            }(ie), ie
        }
      }), (ee => {
        throw gR = null, new Se.d(ee)
      })), gR
    }
    async function YR(ee, ie) {
      WR(), XR = !0, OR = !0;
      let He = {
          place: ee.place,
          matchedAt: ee.matchedAt
        },
        Ke = ee.place.gameNameWithVariation;
      const Ue = (0, Re.g)();
      let Fe = null;
      const Je = await qJ({
        matchmake: async () => {
          let ie = He;
          if (He = null, null === ie) {
            const He = await ee.rematch();
            if (He.isError()) throw Fe = He.asError().forward(), new Error(He.asError().message);
            ie = {
              place: He.getValue(),
              matchedAt: performance.now()
            }
          }
          Ke = ie.place.gameNameWithVariation;
          return {
            target: await (0, Hi.h)(ee.userContext, ie.place, zo(), Ue),
            matchedAt: ie.matchedAt,
            freshMs: Hi.e
          }
        },
        pageReady: AR,
        onFailure: (ee, ie) => {
          null === Fe && function(ee, ie) {
            (0, Uy.reportPageJoinFailure)(ee, hK, ie)
          }(ee, {
            sinceJoinStartMs: ie,
            game: Ke
          })
        },
        rejoin: () => () => {},
        invalidateTrafficCode: () => ee.userContext.invalidateTrafficCode(),
        signal: ie
      });
      switch (Je.kind) {
        case "joined":
          if (Ue) {
            setTimeout((() => {
              Ve.ready()
            }), 0);
            const {
              game: ee
            } = Je;
            (0, Re.s)((() => {
              ee.endJoinAd() && ((0, fe.k)(), Ve.adEnded())
            }))
          }
          return dR || (dR = !0, (0, ce.c)()), OR ? (ZR(Me.k.CONNECT_TO_GAME_SERVER), ZR(Me.k.SHADER_PACK), function() {
            var ee, ie;
            return null !== (ee = null === (ie = dU) || void 0 === ie ? void 0 : ie.runsInJoinedGame()) && void 0 !== ee && ee
          }() && (0, ae.i)(ee.userContext, Ke).catch((ee => {
            console.error("Failed to report the shader pack session", ee)
          })), function() {
            const ee = function() {
              var ee, ie;
              return null !== (ee = null === (ie = dU) || void 0 === ie ? void 0 : ie.couldntRunInJoinedGame()) && void 0 !== ee ? ee : null
            }();
            null !== ee && (0, ae.e)(ee)
          }(), be.e.value(void 0)) : xR("The server ended the game as it joined");
        case "failed":
          if (!Je.reloading) {
            if (null !== Fe) return Fe;
            if ((Je.error instanceof ei.h || Je.error instanceof ei.c) && Je.error.code === ye.c.serverUpdating.code) {
              if (ie.aborted) return xR("Left the game while it loaded");
              const {
                gameNameWithVariation: ee,
                lobbyName: He
              } = (0, ke.e)();
              return PR(ee, He), xR("The server is updating")
            }
            return Je.error instanceof Ji.e ? be.e.errorWithCode(Je.error.messageKey, Me.k.SHADER_PACK, {
              severity: "medium"
            }) : be.e.errorWithCode(function(ee) {
              if (ee instanceof ei.w || ee instanceof ue.d) return ee.message;
              if (VR(ee)) return (0, Qe.h)(ee.code, ee.serverText);
              return Qe.e
            }(Je.error), Me.k.CONNECT_TO_GAME_SERVER, {
              error: aR(Je.error) ? Je.error : void 0,
              severity: cR(Je.error),
              gameServerUnreachable: (0, ii.b)(Je.error),
              joinFailure: (0, ii.g)(Je.error),
              rematch: (0, Ce.d)(Je.error),
              gameRefused: (0, ve.d)(Je.error)
            })
          }
          return xR("Reloading into the new build");
        case "stopped":
          return xR("The game client stopped, and shows why");
        case "Ce":
          return xR("Left the game while it loaded")
      }
    }

    function VR(ee) {
      return ee instanceof ei.h || ee instanceof ei.c && "attach" !== ee.stage
    }

    function aR(ee) {
      return !(ee instanceof ei.w) && !VR(ee) && void 0 === (0, ii.b)(ee)
    }

    function cR(ee) {
      return VR(ee) ? ee instanceof ei.c && (0, Qe.g)(ee.code).requiresRefresh ? "medium" : "low" : aR(ee) || ee instanceof ei.w ? "medium" : "low"
    }

    function xR(ee) {
      return be.e.errorWithCode(ee, Me.k.CONNECT_TO_GAME_SERVER, {
        severity: "low",
        Ce: !0
      })
    }
    class LR {
      leave(ee) {
        if ((0, me.b)()) {
          var ie, He;
          if ((0, Ke.d)()) return;
          (0, qe.e)(!0 === (null === (ie = (0, me.i)()) || void 0 === ie || null === (He = ie.currentViewer) || void 0 === He ? void 0 : He.unsavedChanges), ee)
        } else this.leaveLive()
      }
      leaveLive() {
        var ee;
        XR && (null === (ee = zo()) || void 0 === ee || ee.endGamePack());
        if (!OR) return;
        OR = !1, (0, xe.f)();
        try {
          var ie;
          null === (ie = (0, Se.q)()) || void 0 === ie || ie.clearWasmCameraScreen()
        } catch (ye) {
          console.error("[bloxd-wasm-client] the camera screen didn't clear", ye)
        }
        const {
          gameNameWithVariation: He
        } = (0, ke.e)();
        try {
          dJ()
        } finally {
          (0, ke.v)({
            websocketUrl: null
          }), Fe.h.yR("leaveGame", {
            gameNameWithVariation: He
          }), (0, oe.Q)()
        }
      }
      isReplay() {
        return (0, me.b)()
      }
    }
  },
  42021: (ee, ie, He) => {
    He.d(ie, {
      b: () => be,
      f: () => ye,
      h: () => Ue,
      l: () => Ke
    });
    const ye = 12e4,
      be = 3e4,
      Me = {
        hidden: () => "undefined" !== typeof document && document.hidden,
        listen: ee => "undefined" === typeof document ? () => {} : (document.addEventListener("visibilitychange", ee), () => {
          document.removeEventListener("visibilitychange", ee)
        })
      };

    function Ke(ee) {
      return `it sent no start within ${Math.round(ee)} ms`
    }
    class Ue {
      constructor(ee, ie) {
        let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => performance.now(),
          ye = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Me;
        this.timeoutMs = ee, this.onTimeout = ie, this.now = He, this.visibility = ye, this.timer = null, this.counted = 0, this.step = null, this.unlisten = void 0, this.unlisten = ye.listen((() => {
          this.onVisibility()
        })), ye.hidden() || this.next()
      }
      cancel() {
        this.pause(), this.unlisten()
      }
      onVisibility() {
        this.visibility.hidden() ? (this.counted += this.credit(), this.pause()) : null === this.timer && this.next()
      }
      credit() {
        const ee = this.step;
        return null === ee ? 0 : Math.min(this.now() - ee.at, ee.ms)
      }
      pause() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null), this.step = null
      }
      next() {
        const ee = this.timeoutMs - this.counted;
        if (ee <= 0) return void this.arm(1e3, (() => {
          this.cancel(), this.onTimeout(this.counted)
        }));
        const ie = Math.min(ee, 5e3);
        this.step = {
          at: this.now(),
          ms: ie
        }, this.arm(ie, (() => {
          this.counted += this.credit(), this.step = null, this.next()
        }))
      }
      arm(ee, ie) {
        this.timer = setTimeout((() => {
          this.timer = null, ie()
        }), ee)
      }
    }
  },
  40533: (ee, ie, He) => {
    He.d(ie, {
      b: () => Ue
    });
    var ye = He(347),
      be = He(1033);
    const Me = new Set(["bingo", "buildAFactory2", "classic", "greenville", "testGym"]),
      Ke = new Set(["creativeFlat", "skyGrid"]);

    function Ue(ee) {
      const ie = (0, ye.Xb)(ee);
      return "greenville" === ie ? !(0, ye.Qb)(ee) : "classic" !== ie ? Me.has(ie) : !(0, be.k)(ee) && !Ke.has((0, ye.Qb)(ee))
    }
  },
  38559: (ee, ie, He) => {
    function ye(ee) {
      return "string" !== typeof ee || 2 !== ee.length && ":" !== ee[2] ? null : ee[0] + ee[1]
    }
    He.d(ie, {
      A: () => Xe,
      C: () => Te,
      e: () => pe,
      i: () => Oe,
      l: () => ge,
      m: () => de,
      p: () => Ue,
      t: () => Ke,
      u: () => Me,
      y: () => Fe
    });
    const be = ["op:ytInitialPlayerResponse.adPlacements", "op:ytInitialPlayerResponse.playerAds", "op:ytInitialPlayerResponse.adSlots", "op:playerResponse.adPlacements", "op:playerResponse.playerAds", "op:playerResponse.adSlots"];

    function Me(ee) {
      if (function(ee) {
          for (let ie = 0; ie < be.length; ie++)
            if (ee === be[ie]) return !0;
          return !1
        }(ee)) return !1;
      const ie = ye(ee);
      return "op" === ie || "ep" === ie || "wi" === ie || "pp" === ie || "fp:call" === ee || "fp:t" === ee
    }

    function Ke(ee) {
      return "fp" === ye(ee) && !Me(ee)
    }

    function Ue(ee) {
      if ("string" !== typeof ee) return !1;
      return "o" === ee[0] && "p" === ee[1] && (2 === ee.length || ":" === ee[2]) || "fp:call" === ee || "2" === ee || "t" === ee || "a" === ee
    }

    function Fe(ee, ie) {
      return `~${function(ee){return ee.length<2?ee:":"===ee[1]?ee[0]:ee[0]+ee[1]}(ie)}~${ee}`
    }
    const Je = 200;

    function oe(ee) {
      let ie = ee.length - 1;
      for (let He = 0; He < 2; He++) {
        const He = ie;
        for (; ie >= 0 && ee[ie] >= "0" && ee[ie] <= "9";) ie--;
        if (ie < 0 || ie === He || ":" !== ee[ie]) return -1;
        ie--
      }
      return ie + 1
    }

    function Re(ee) {
      return "unknown" === ee || oe(ee) >= 0
    }

    function ke(ee, ie) {
      return ee[ie] >= "\ud800" && ee[ie] <= "\udbff" && ie + 1 < ee.length && ee[ie + 1] >= "\udc00" && ee[ie + 1] <= "\udfff" ? 2 : 1
    }

    function qe(ee, ie, He) {
      return 2 === He ? 4 : ee[ie] <= "\x7f" ? 1 : ee[ie] <= "\u07ff" ? 2 : 3
    }

    function fe(ee, ie, He) {
      let ye = 0;
      for (; ye < ie;) {
        const ie = ke(ee, ye),
          be = qe(ee, ye, ie);
        if (be > He) break;
        He -= be, ye += ie
      }
      return ye
    }

    function Te(ee) {
      let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1 / 0;
      if ("string" !== typeof ee || ee.length > Je || !Re(ee)) return "t";
      let He = 2;
      for (let Ue = 0; Ue < ee.length;) {
        const ie = ke(ee, Ue);
        He += qe(ee, Ue, ie), Ue += ie
      }
      if (He <= ie) return `t ${ee}`;
      const ye = oe(ee),
        be = ie - 2 - (ee.length - ye);
      if (be < 0) return "t";
      const Me = fe(ee, ye, be);
      let Ke = "t ";
      for (let Ue = 0; Ue < Me; Ue++) Ke += ee[Ue];
      for (let Ue = ye; Ue < ee.length; Ue++) Ke += ee[Ue];
      return Ke
    }
    const pe = 62;

    function Xe(ee) {
      let ie = "so:";
      const He = fe(ee, ee.length, pe - ie.length);
      for (let ye = 0; ye < He; ye++) ie += ee[ye];
      return ie
    }
    const ze = "BABYLON ",
      Be = "DECODE ",
      Ee = "BABYLON@ ";

    function ge(ee) {
      return Xe(ze + ee)
    }

    function Oe(ee, ie) {
      return Xe(Ee + ee + " " + ie)
    }

    function de(ee) {
      return Xe(Be + ee)
    }
  },
  41950: (ee, ie, He) => {
    He.d(ie, {
      d: () => ye
    });
    const ye = {
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
  38817: ee => {
    ee.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAKUlEQVQYGWM8CwQMeAATHjmw1JBQwAh06v+LFy8yvH//noGXl/ccuq8A/vQKd00yOdIAAAAASUVORK5CYII="
  },
  38804: ee => {
    ee.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAALUlEQVQYGWM8CwQMeAATHjmw1JBQwAh06v8DBw4wCAoKMnBzczN8/PjxHLLPAORwCnfkvOdNAAAAAElFTkSuQmCC"
  },
  38823: ee => {
    ee.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAKUlEQVQYGWM8CwQMeAATHjmw1JBQwAh06v8DBw4wCAoKMvz58+ccuq8A8vQKd2AxC9MAAAAASUVORK5CYII="
  },
  38801: ee => {
    ee.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAANUlEQVQYGWM8CwQMeAATHjmw1JBQAHLp/wMHDvy/ePHi/4CAgP937tz5Ly6u+5/P3uw/KAgAgjwWhHm22JoAAAAASUVORK5CYII="
  },
  38810: ee => {
    ee.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAKUlEQVQYGWM8CwQMeAATHjmw1JBQwAh06v8DBw4wCAoKMvz58+ccuq8A8vQKd2AxC9MAAAAASUVORK5CYII="
  },
  39520: (ee, ie, He) => {
    He.d(ie, {
      c: () => Me
    });
    var ye = He(3094);
    const be = ["none", "idle", "now"];

    function Me() {
      const ee = () => (0, ye.F)();
      return {
        memoryBytes: () => (0, ye.t)().buffer.byteLength,
        reserveUpFront: ie => ee().SR(ie),
        reserveAhead: ie => ee().lR(ie),
        setCeiling: ie => {
          ee().nR(ie)
        },
        lowWater: () => be[ee().mR()] ?? "none",
        stats: () => function(ee) {
          const ie = new Uint32Array((0, ye.t)().buffer, ee, 17),
            He = ee => ie[ee] ?? 0,
            be = ee => ({
              upFront: He(ee),
              ahead: He(ee + 1),
              onDemandInFrame: He(ee + 2),
              onDemand: He(ee + 3)
            });
          return {
            memoryBytes: He(0),
            initialBytes: He(1),
            liveBytes: He(2),
            peakLiveBytes: He(3),
            headroomBytes: He(4),
            unusedBytes: He(5),
            ceilingBytes: He(6),
            reservesRefused: He(7),
            grows: be(8),
            grownBytes: be(12),
            allocationsRefused: He(16)
          }
        }(ee().jR()),
        takeBallast: () => ee().sR(),
        takePressure: () => ee().IR()
      }
    }
  },
  5570: (ee, ie, He) => {
    He.d(ie, {
      b: () => Ue,
      d: () => Ke,
      e: () => ye,
      h: () => Te,
      k: () => Re,
      m: () => be,
      q: () => Me,
      r: () => Je,
      s: () => oe,
      t: () => ke
    });
    const ye = 5;

    function be(ee) {
      return ee === ye
    }

    function Me(ee) {
      return [...ee.features]
    }
    const Ke = 262144,
      Ue = 256,
      Fe = 256;

    function Je(ee) {
      if ("object" !== typeof ee || null === ee || Array.isArray(ee)) return "The pack has no files.";
      const ie = [];
      for (const [He, ye] of Object.entries(ee)) {
        if ("string" !== typeof ye) return `${He} isn't text.`;
        ie.push({
          path: He,
          source: ye
        })
      }
      return ie.sort(((ee, ie) => Re(ee.path, ie.path))),
        function(ee) {
          if (0 === ee.length) return "The pack has no .wgsl files.";
          if (ee.length > Ue) return `The pack has more than ${Ue} .wgsl files.`;
          const ie = new Set;
          for (const {
              path: He
            }
            of ee) {
            const ee = qe(He);
            if (null !== ee) return ee;
            if (ie.has(He)) return `The pack has two files at ${He}.`;
            ie.add(He)
          }
          return ke(ee) > Ke ? `The pack's .wgsl files are over ${Ke/1024} KB in total.` : null
        }(ie) ?? ie
    }

    function oe(ee) {
      const ie = {};
      for (const He of ee) ie[He.path] = He.source;
      return ie
    }

    function Re(ee, ie) {
      return ee < ie ? -1 : ee > ie ? 1 : 0
    }

    function ke(ee) {
      const ie = new TextEncoder;
      let He = 0;
      for (const {
          source: ye
        }
        of ee) He += ie.encode(ye).byteLength;
      return He
    }

    function qe(ee) {
      if (!ee.toLowerCase().endsWith(".wgsl")) return `${ee} isn't a .wgsl file.`;
      if (ee.length > Fe) return `A file path is over ${Fe} characters.`;
      if (ee.includes("\\") || /[\u0000-\u001f]/.test(ee)) return `${ee} isn't a valid file path.`;
      return ee.split("/").some((ee => "" === ee || "." === ee || ".." === ee)) ? `${ee} isn't a valid file path.` : null
    }
    const fe = /^(.*)\[rot\[([1-4])$/;

    function Te(ee, ie) {
      let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
      const ye = new Map;
      ie.forEach(((ee, ie) => {
        let {
          numAnimStates: He,
          animStartIdx: be
        } = ee;
        for (let Me = 1; Me < He; Me++) ye.set(be + Me - 1, ie)
      }));
      const be = Object.entries(ee),
        Me = new Map;
      for (const [Te, pe] of be) {
        const ee = fe.exec(Te);
        "1" === ee?.[2] && Me.set(ee[1], pe + 1)
      }
      const Ke = ee => {
          const ie = fe.exec(ee);
          return ie && Me.has(ie[1]) ? {
            root: ie[1],
            rotation: Number(ie[2]) - 1
          } : null
        },
        Ue = new Set(be.map((ee => {
          let [ie] = ee;
          return Ke(ie)?.root ?? ie
        }))),
        Fe = (ee, He) => {
          const ye = ee.replace(/_?0$/, "");
          return (ie[He]?.numAnimStates ?? 0) > 1 && !Ue.has(ye) ? ye : ee
        },
        Je = new Map;
      for (const [fe, Te] of be) Je.set(Te, Fe(Ke(fe)?.root ?? fe, Te));
      const oe = be.reduce(((ee, ie) => {
          let [, He] = ie;
          return Math.max(ee, He + 1)
        }), 0),
        Re = Array.from({
          length: oe
        }, ((ee, ie) => ({
          id: ie + 1,
          rotation: 0
        }))),
        ke = new Map,
        qe = new Map;
      for (const [fe, Te] of be) {
        const ee = Ke(fe),
          ie = ye.get(Te);
        if (void 0 !== ie) {
          const He = Je.get(ie);
          qe.set(fe, {
            name: fe,
            texture: He,
            kind: "frame"
          }), ee && !qe.has(ee.root) && qe.set(ee.root, {
            name: ee.root,
            texture: He,
            kind: "frame"
          });
          continue
        }
        const He = Je.get(Te),
          be = ee?.root ?? fe;
        if (He !== be && qe.set(be, {
            name: be,
            texture: He,
            kind: "frame"
          }), ee) {
          const ie = Me.get(ee.root);
          Re[Te] = {
            id: ie,
            rotation: ee.rotation
          }, ke.set(He, ie), qe.set(fe, {
            name: fe,
            texture: He,
            kind: "rotation"
          })
        } else ke.set(He, Te + 1)
      }
      for (const fe of ke.keys()) qe.delete(fe);
      for (const [fe, Te] of He) {
        const ee = ke.get(Te);
        void 0 === ee || ke.has(fe) || (ke.set(fe, ee), qe.delete(fe))
      }
      return {
        named: [...ke].sort(((ee, ie) => {
          let [He] = ee, [ye] = ie;
          return He < ye ? -1 : He > ye ? 1 : 0
        })).map((ee => {
          let [ie, He] = ee;
          return {
            name: ie,
            id: He
          }
        })),
        aliases: [...qe.values()],
        layers: Re
      }
    }
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);