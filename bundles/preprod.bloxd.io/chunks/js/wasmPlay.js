export const id = 75;
export const ids = [75, 129, 130, 151];
export const modules = {
  40765: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => OM,
      f: () => SM
    });
    const OM = "The world isn't loaded, so no blocks can be seen.",
      SM = "The world isn't loaded, so nothing in it can be seen."
  },
  5062: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => zM
    });
    var OM = iM(19),
      SM = iM(22),
      jM = iM(1313),
      aM = iM(3122);
    const PM = 3e4,
      nM = 1e3;

    function QM() {
      return "visible" === document.visibilityState && "inGame" === OM.d.get("gameState") && (0, jM.B)()
    }

    function zM(MM, rM) {
      (0, aM.q)() || function(MM, rM, iM) {
        let OM = 0;
        const SM = setInterval((() => {
          rM() && (OM += nM, OM >= MM && (clearInterval(SM), iM()))
        }), nM)
      }(PM, QM, (() => {
        rM().then((() => {
          MM(`saved for the player after ${PM/1e3} s of play`), (0, aM.F)(), SM.i.Tz("chat", {
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
  34896: (MM, rM, iM) => {
    function OM(MM, rM) {
      return 0 === MM.length ? 0 : MM[Math.min(MM.length - 1, Math.floor(rM * MM.length))]
    }

    function SM(MM) {
      return MM.toFixed(1)
    }
    iM.d(rM, {
      e: () => SM,
      f: () => OM
    })
  },
  38922: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => QM,
      e: () => zM,
      i: () => UM,
      l: () => EM,
      n: () => lM
    });
    var OM = iM(5062),
      SM = iM(34896),
      jM = iM(3122);
    const aM = 20,
      PM = ["totalMs", "slotMs", "workerMs", "applyMs", "ahead", "inFlight", "vL", "jobMs"];

    function nM(MM) {
      return [...MM].sort(((MM, rM) => MM - rM))
    }
    const QM = [];

    function zM(MM, rM, iM) {
      return `${MM},${rM},${iM}`
    }
    class LM {
      constructor() {
        this.pending = new Map, this.jobs = new Map, this.edits = [], this.nextEdit = 0, this.reported = 0, this.windowStart = performance.now(), this.frames = 0, this.lastFrameAt = 0, this.maxFrameMs = 0, this.jobsSent = 0, this.maxAhead = 0, this.maxCapacity = 0, this.roundTrips = [], this.windowEdits = [], this.outliers = 0, this.gaveUp = 0
      }
      edit(MM, rM) {
        var iM;
        const OM = null !== (iM = this.pending.get(MM)) && void 0 !== iM ? iM : [];
        OM.push({
          editAt: rM,
          meshJobId: 0
        }), this.pending.set(MM, OM)
      }
      frame(MM) {
        this.lastFrameAt > 0 && (this.maxFrameMs = Math.max(this.maxFrameMs, MM - this.lastFrameAt)), this.lastFrameAt = MM, this.frames++, MM - this.windowStart >= 1e3 && this.summarise(MM)
      }
      sent(MM, rM, iM, OM, SM, jM, aM) {
        this.jobs.set(rM, {
          sentAt: aM,
          receivedAt: 0,
          ahead: iM,
          inFlight: OM,
          vL: SM,
          jobMs: 0
        }), this.jobsSent++, this.maxAhead = Math.max(this.maxAhead, iM), this.maxCapacity = Math.max(this.maxCapacity, SM);
        for (const nM of null !== (PM = this.pending.get(MM)) && void 0 !== PM ? PM : []) {
          var PM;
          jM.includes(nM.meshJobId) || (nM.meshJobId = rM)
        }
      }
      received(MM, rM, iM) {
        const OM = this.jobs.get(MM);
        void 0 !== OM && (this.roundTrips.push(iM - OM.sentAt), OM.receivedAt = iM, OM.jobMs = rM)
      }
      failed(MM) {
        this.jobs.delete(MM)
      }
      reassign(MM, rM, iM) {
        this.jobs.delete(rM);
        for (const SM of null !== (OM = this.pending.get(MM)) && void 0 !== OM ? OM : []) {
          var OM;
          SM.meshJobId === rM && (SM.meshJobId = iM)
        }
      }
      applied(MM, rM, iM) {
        const OM = this.jobs.get(rM);
        this.jobs.delete(rM), void 0 !== OM && this.show(MM, OM, iM, (MM => MM.meshJobId === rM))
      }
      emptied(MM, rM) {
        const iM = {
          sentAt: rM,
          receivedAt: rM,
          ahead: 0,
          inFlight: 0,
          vL: 0,
          jobMs: 0
        };
        this.show(MM, iM, rM, (() => !0))
      }
      show(MM, rM, iM, OM) {
        const SM = this.pending.get(MM);
        if (!SM) return;
        const jM = SM.filter((SM => !OM(SM) || (this.record(MM, SM.editAt, rM, iM), !1)));
        jM.length > 0 ? this.pending.set(MM, jM) : this.pending.delete(MM)
      }
      aL(MM) {
        this.reported += MM, this === HM && this.reported >= aM && null !== hM && (hM(), hM = null)
      }
      record(MM, rM, iM, OM) {
        const SM = {
          totalMs: OM - rM,
          slotMs: iM.sentAt - rM,
          workerMs: iM.receivedAt - iM.sentAt,
          applyMs: OM - iM.receivedAt,
          ahead: iM.ahead,
          inFlight: iM.inFlight,
          vL: iM.vL,
          jobMs: iM.jobMs
        };
        if (this.edits[this.nextEdit] = SM, this.nextEdit = (this.nextEdit + 1) % 500, this.windowEdits.push(SM.totalMs), this.aL(1), SM.totalMs < 100 || ++this.outliers > 5) return;
        const aM = MM => Math.round(MM);
        (0, jM.k)("remesh", `slow edit (${MM}) shown in ${aM(SM.totalMs)} ms: slot ${aM(SM.slotMs)}, worker ${aM(SM.workerMs)} (${SM.ahead} ahead, ${SM.inFlight}/${SM.vL} in flight; job ${aM(SM.jobMs)}), apply ${aM(SM.applyMs)}`)
      }
      summarise(MM) {
        const rM = (MM - this.windowStart) / 1e3;
        for (const [iM, OM] of this.pending) {
          const rM = OM.filter((rM => MM - rM.editAt <= 1e4));
          this.gaveUp += OM.length - rM.length, this.aL(OM.length - rM.length), rM.length > 0 ? this.pending.set(iM, rM) : this.pending.delete(iM)
        }
        for (const [iM, OM] of this.jobs) MM - OM.sentAt > (OM.receivedAt > 0 ? 1e4 : 6e4) && this.jobs.delete(iM);
        if (this.jobsSent > 0 || this.roundTrips.length > 0 || this.windowEdits.length > 0 || this.gaveUp > 0) {
          const MM = nM(this.roundTrips),
            iM = nM(this.windowEdits),
            OM = Math.max(0, this.outliers - 5);
          (0, jM.k)("remesh", `${Math.round(this.frames/rM)} fps (longest ${Math.round(this.maxFrameMs)} ms) | ${this.jobsSent} jobs sent, up to ${this.maxAhead} ahead on a worker, capacity ${this.maxCapacity} | round trip p50 ${Math.round((0,SM.f)(MM,.5))} max ${Math.round((0,SM.f)(MM,1))} ms | ${iM.length} edits shown, p50 ${Math.round((0,SM.f)(iM,.5))} max ${Math.round((0,SM.f)(iM,1))} ms${OM>0?`, ${OM} more slow`:""}${this.gaveUp>0?`, ${this.gaveUp} never shown`:""}`)
        }
        this.windowStart = MM, this.frames = 0, this.maxFrameMs = 0, this.jobsSent = 0, this.maxAhead = 0, this.maxCapacity = 0, this.roundTrips = [], this.windowEdits = [], this.outliers = 0, this.gaveUp = 0
      }
      stats() {
        const MM = PM.map((MM => {
          const rM = nM(this.edits.map((rM => rM[MM])));
          return `${MM}: p50 ${Math.round((0,SM.f)(rM,.5))} p90 ${Math.round((0,SM.f)(rM,.9))} max ${Math.round((0,SM.f)(rM,1))}`
        }));
        return [`${this.edits.length} edits`, ...MM].join("\n")
      }
      dump() {
        const MM = this.edits.map((MM => PM.map((rM => Math.round(10 * MM[rM]) / 10)).join(",")));
        return [this.stats(), PM.join(","), ...MM].join("\n")
      }
    }
    class mM {
      constructor(MM, rM) {
        this.log = MM, this.Cm = rM
      }
      edit(MM, rM, iM) {
        const [OM, SM, jM] = this.Cm.uL.rOM(MM, rM, iM), aM = this.Cm.uL.yJ.lJ(OM, SM, jM);
        aM && aM.JJ && this.log.edit(zM(OM, SM, jM), performance.now())
      }
      sent(MM, rM, iM, OM, SM) {
        this.log.sent(zM(MM.i, MM.j, MM.k), rM, iM, OM, SM, QM, performance.now())
      }
      received(MM) {
        this.log.received(MM.meshJobId, MM.jobMs, performance.now())
      }
      failed(MM) {
        this.log.failed(MM)
      }
      applied(MM, rM) {
        this.log.applied(zM(MM.i, MM.j, MM.k), rM, performance.now())
      }
    }
    let HM = null,
      hM = null,
      JM = !1,
      dM = null;

    function yM() {
      return new Promise((MM => {
        null !== HM && HM.reported >= aM ? MM() : hM = MM
      }))
    }

    function lM() {
      const MM = new LM;
      return HM = MM, (0, jM.i)("remesh", (() => MM.dump())), (0, jM.b)("remeshStats", (() => {
        console.log(MM.stats())
      })), JM || (JM = !0, (0, OM.c)((MM => {
        (0, jM.k)("remesh", MM)
      }), yM)), MM
    }

    function EM(MM) {
      const rM = lM();
      dM = new mM(rM, MM), MM.kU.meshProbe = dM, MM.on("beforeRender", (() => {
        rM.frame(performance.now())
      }))
    }

    function UM(MM, rM, iM) {
      var OM;
      null === (OM = dM) || void 0 === OM || OM.edit(MM, rM, iM)
    }
  },
  34926: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => OM
    });
    const OM = new Set(["chunkBorders"])
  },
  35055: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => aM,
      e: () => SM,
      i: () => zM
    });
    var OM = iM(1645);

    function SM(MM) {
      var rM;
      return {
        ...aM.store,
        yaw: aM.store.yaw + (null !== (rM = OM.d[MM].previewYaw) && void 0 !== rM ? rM : 0)
      }
    }
    const jM = {
        yaw: .61 * Math.PI,
        pitch: Math.PI / 2.05,
        radius: 30,
        target: [0, 0, 0]
      },
      aM = {
        player: jM,
        store: {
          ...jM,
          radius: 33,
          target: [0, 3.9, 0]
        }
      };

    function PM(MM, rM) {
      MM instanceof Promise ? MM.then(rM).catch((MM => {
        console.error("Couldn't open the preview", MM)
      })) : rM(MM)
    }
    class nM {
      constructor(MM) {
        this.opened = null, this.view = null, this.size = null, this.closed = !1, PM(MM, (MM => {
          this.closed ? MM.close() : (this.opened = MM, null !== this.size && MM.resize(this.size.width, this.size.height), null !== this.view && MM.show(this.view))
        }))
      }
      show(MM) {
        var rM;
        this.view = MM, null === (rM = this.opened) || void 0 === rM || rM.show(MM)
      }
      resize(MM, rM) {
        var iM;
        this.size = {
          width: MM,
          height: rM
        }, null === (iM = this.opened) || void 0 === iM || iM.resize(MM, rM)
      }
      close() {
        var MM;
        this.closed = !0, null === (MM = this.opened) || void 0 === MM || MM.close(), this.opened = null
      }
    }
    class QM {
      constructor(MM) {
        this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(MM).then((MM => MM.ready)), PM(MM, (MM => {
          this.closed ? MM.close() : (this.opened = MM, null !== this.size && MM.resize(this.size.width, this.size.height))
        }))
      }
      get dev() {
        return this.opened.dev
      }
      isReady() {
        var MM, rM;
        return null !== (MM = null === (rM = this.opened) || void 0 === rM ? void 0 : rM.isReady()) && void 0 !== MM && MM
      }
      setCosmetic(MM, rM) {
        var iM;
        null === (iM = this.opened) || void 0 === iM || iM.setCosmetic(MM, rM)
      }
      playEmote(MM) {
        var rM;
        null === (rM = this.opened) || void 0 === rM || rM.playEmote(MM)
      }
      setOrbit(MM) {
        var rM;
        null === (rM = this.opened) || void 0 === rM || rM.setOrbit(MM)
      }
      resetCamera() {
        var MM;
        null === (MM = this.opened) || void 0 === MM || MM.resetCamera()
      }
      async untilDrawn(MM) {
        var rM;
        await this.ready, await (null === (rM = this.opened) || void 0 === rM ? void 0 : rM.untilDrawn(MM))
      }
      resize(MM, rM) {
        var iM;
        this.size = {
          width: MM,
          height: rM
        }, null === (iM = this.opened) || void 0 === iM || iM.resize(MM, rM)
      }
      close() {
        var MM;
        this.closed = !0, null === (MM = this.opened) || void 0 === MM || MM.close(), this.opened = null
      }
    }
    const zM = new class {
      constructor() {
        this.host = null, this.makeDefault = null
      }
      setHost(MM) {
        this.host = MM
      }
      setDefaultHost(MM) {
        this.makeDefault = MM
      }
      current() {
        if (null === this.host) {
          if (null === this.makeDefault) throw new Error("no preview host");
          this.host = this.makeDefault()
        }
        return this.host
      }
      openMob(MM) {
        return new nM(this.current().openMob(MM))
      }
      openPet(MM) {
        return new nM(this.current().openPet(MM))
      }
      openMobLineup(MM) {
        return new nM(this.current().openMobLineup(MM))
      }
      openCharacter(MM, rM) {
        return new QM(this.current().openCharacter(MM, rM))
      }
    }
  },
  5435: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => OM.g,
      g: () => SM,
      k: () => OM.o
    });
    var OM = iM(5442);
    const SM = [!1, !0].flatMap((MM => ["terrain", "liquid", "model"].map((rM => ({
      strict: MM,
      program: rM
    })))))
  },
  40300: (MM, rM, iM) => {
    iM.r(rM), iM.d(rM, {
      ShaderPackPage: () => nM,
      harnessShaderPackMode: () => mM,
      setHarnessUrlShaderPack: () => LM,
      shaderPackPage: () => zM
    });
    var OM = iM(83),
      SM = iM(30),
      jM = (iM(3860), iM(5435), iM(3855)),
      aM = iM(7148);
    iM(7120);
    const PM = {
      status: "none"
    };
    class nM {
      constructor() {
        this.stored = null, this.compiling = null, this.pagePack = null, this.resolved = null
      }
      preload() {
        if (null === this.stored) {
          if ((0, jM.f)(OM.featureFlags.settings.canUseShaderPacks)) return this.stored = Promise.resolve(null), QM().then((MM => {
            MM && SM.g.removeItem(jM.c)
          })), this.stored;
          this.prefetchHint() && this.compiler().catch((() => {})), this.stored = this.readStored()
        }
        return this.stored
      }
      prefetchHint() {
        return (0, jM.d)(OM.featureFlags.settings.canUseShaderPacks)
      }
      async loadActive() {
        const MM = await this.load();
        return "active" === MM.status ? MM.pack : null
      }
      load() {
        return this.pagePack ??= this.read().catch((MM => (console.error("Failed to load the shader pack", MM), PM))).then((MM => (this.resolved ??= MM, MM))), this.pagePack
      }
      hasNone() {
        var MM;
        return "none" === (null === (MM = this.resolved) || void 0 === MM ? void 0 : MM.status)
      }
      block(MM) {
        this.resolved = {
          status: "blocked",
          messageKey: MM,
          variants: null
        }, this.pagePack = Promise.resolve(this.resolved)
      }
      compiler() {
        return this.compiling ??= Promise.all([iM.e(89), iM.e(149), iM.e(155)]).then((() => iM(44389))).then((MM => (MM.prefetchCompiler(), MM))), this.compiling
      }
      async readStored() {
        const MM = await QM();
        return MM && this.compiler().then((MM => MM.reconcileHint())).catch((MM => {
          console.error("Failed to correct the shader pack hint", MM)
        })), MM
      }
      async read() {
        const MM = await this.preload();
        return MM ? (await this.compiler()).compilePagePack(MM) : PM
      }
    }
    async function QM() {
      if (!(0, jM.i)(OM.featureFlags.settings.canUseShaderPacks)) return null;
      try {
        const MM = await (0, aM.d)(!0);
        return MM || SM.g.setItem(jM.c, !1), MM
      } catch (MM) {
        return console.error("Failed to read the stored shader pack", MM), SM.g.removeItem(jM.c), null
      }
    }
    const zM = new nM;

    function LM(MM, rM) {}

    function mM() {
      return null
    }
  },
  40342: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => LM,
      e: () => mM
    });
    var OM = iM(143),
      SM = iM(170),
      jM = iM(1562),
      aM = iM(3258),
      PM = iM(1573),
      nM = iM(37416),
      QM = iM(673),
      zM = iM(40300);

    function LM(MM) {
      (0, aM.reportClientError)("matchmake_failed", MM, OM.n[OM.n.SHADER_PACK])
    }
    async function mM(MM, rM) {
      var iM;
      const OM = null === (iM = await zM.shaderPackPage.preload()) || void 0 === iM ? void 0 : iM.listing,
        aM = (0, nM.d)();
      OM && null !== aM && await PM.c.reportShaderPackSession(MM, {
        packId: OM.packId,
        sourceHash: OM.sourceHash,
        game: (0, jM.d)(rM, SM.v, "other"),
        playSessionId: aM,
        visitSessionId: (0, QM.e)()
      })
    }
  },
  7148: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => SM,
      d: () => jM
    });
    var OM = iM(30);
    const SM = "shaderPack";
    async function jM() {
      var MM;
      let rM = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (MM = await OM.f.getItem(SM, rM)) && void 0 !== MM ? MM : null
    }
  },
  7120: (MM, rM, iM) => {
    iM.r(rM), iM.d(rM, {
      loadShaderPackTextures: () => aM,
      shaderPackTextures: () => PM
    });
    var OM = iM(5442);
    let SM = null,
      jM = null;

    function aM() {
      return jM ??= Promise.all([iM.e(84), iM.e(204)]).then((() => iM(41585))).then((MM => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: rM,
          textureNameToIndex: iM,
          textureAnimationData: jM
        } = MM;
        return SM ??= (0, OM.j)(iM, jM, rM), SM
      })), jM
    }

    function PM() {
      if (null === SM) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return SM
    }
  },
  34971: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => jM
    });
    var OM = iM(1329);

    function SM() {
      var MM, rM;
      return null !== (MM = null === (rM = screen.orientation) || void 0 === rM ? void 0 : rM.type) && void 0 !== MM ? MM : innerWidth > innerHeight ? "landscape" : "portrait"
    }
    const jM = new class {
      constructor() {
        this.holding = !1, this.heldOrientation = "", this.releaseTimer = void 0, this.longHoldTimer = void 0, this.resizers = new Set, this.releaseWhenShown = () => {
          document.hidden || (document.removeEventListener("visibilitychange", this.releaseWhenShown), this.release())
        }
      }
      isHeld() {
        return this.holding && SM() !== this.heldOrientation && (this.holding = !1), this.holding
      }
      hold() {
        this.heldOrientation = SM(), this.holding = !0, clearTimeout(this.releaseTimer), document.removeEventListener("visibilitychange", this.releaseWhenShown), clearTimeout(this.longHoldTimer), this.longHoldTimer = setTimeout((() => {
          this.holding && (0, OM.CJ)(new Error("Game view size held for 60 s"))
        }), 6e4)
      }
      release() {
        clearTimeout(this.longHoldTimer), this.releaseTimer = setTimeout((() => {
          if (document.hidden) document.addEventListener("visibilitychange", this.releaseWhenShown);
          else {
            this.holding = !1;
            for (const MM of this.resizers) MM()
          }
        }), 1e3)
      }
      heldSizer(MM) {
        let rM = !1;
        return () => {
          if (rM && this.isHeld()) return null;
          const iM = MM();
          return rM ||= null !== iM, iM
        }
      }
      onRelease(MM) {
        return this.resizers.add(MM), () => {
          this.resizers.delete(MM)
        }
      }
    }
  },
  40331: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => SM
    });
    let OM = !1;
    async function SM(MM, rM) {
      if (!OM) {
        OM = !0;
        try {
          const [{
            reloadBloxd: OM
          }, {
            NotificationProvider: SM
          }] = await Promise.all([Promise.resolve().then((() => iM(1830))), Promise.resolve().then((() => iM(1429)))]);
          if (!MM || !0 === await SM.showPromptPopup({
              title: "Unsaved changes",
              subtitle: "Exit and lose your unsaved changes?",
              confirmText: "Exit",
              destructive: !0,
              cancelText: "Cancel",
              unlockPointerKey: "replayExitUnsavedChanges"
            }).getResult()) return void OM(rM)
        } catch (SM) {
          console.error("Leaving the replay failed", SM)
        }
        OM = !1
      }
    }
  },
  42067: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => PM,
      h: () => nM
    });
    var OM = iM(1845);
    const SM = 33177600,
      jM = 3e4;
    let aM = !1;

    function PM(MM, rM, iM) {
      let OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const {
        scale: PM = 1,
        type: nM = "image/png",
        quality: QM
      } = OM;
      return MM.lL() ? aM ? Promise.reject(new Error("A screenshot is already being taken")) : (aM = !0, new Promise(((OM, zM) => {
        let LM, mM = 2,
          HM = null;
        const hM = () => {
          var rM;
          aM = !1, null === (rM = HM) || void 0 === rM || rM(), clearTimeout(LM);
          try {
            MM.restoreSize()
          } catch (iM) {
            console.error("A screenshot couldn't size the canvas back", iM)
          }
        };
        LM = setTimeout((() => {
          hM(), zM(new Error("No frame was drawn to capture"))
        }), jM);
        try {
          const OM = function(MM, rM, iM) {
            const OM = Math.max(1, MM),
              jM = Math.max(1, rM),
              aM = Math.min(1, iM / Math.max(OM, jM), Math.sqrt(SM / (OM * jM)));
            return {
              width: Math.max(1, Math.floor(OM * aM)),
              height: Math.max(1, Math.floor(jM * aM))
            }
          }(rM, iM, MM.maxTextureSize);
          MM.resize(OM.width, OM.height, PM * OM.width / Math.max(1, rM))
        } catch (JM) {
          return hM(), void zM(JM)
        }
        HM = MM.onFrameDrawn((() => {
          if (mM--, mM > 0) return;
          const {
            canvas: rM
          } = MM, iM = {
            width: rM.width,
            height: rM.height
          };
          try {
            rM.toBlob((MM => {
              MM ? OM({
                blob: MM,
                ...iM
              }) : zM(new Error("The canvas gave no image"))
            }), nM, QM)
          } catch (JM) {
            zM(JM)
          } finally {
            hM()
          }
        }))
      }))) : Promise.reject(new Error("Screenshots need a game to be running"))
    }
    async function nM(MM, rM, iM) {
      try {
        const SM = await PM(MM, rM, iM);
        (0, OM.c)(SM.blob, `bloxd-screenshot-${SM.width}x${SM.height}-${Date.now()}.png`)
      } catch (SM) {
        console.error("Error taking screenshot:", SM)
      }
    }
  },
  38675: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => OM
    });
    const OM = {
      noaReady: null,
      chunkRequested: null,
      beforeServerListeners: null,
      wasmNetReady: null
    }
  },
  40249: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => aM
    });
    var OM = iM(313),
      SM = iM(119),
      jM = iM(30);

    function aM() {
      jM.g.setItem(OM.Cb, jM.g.getItem(OM.Cb) + 1), (0, SM.is99NightsCrazyGamesBundle)() && jM.g.setItem(OM.Ab, jM.g.getItem(OM.Ab) + 1)
    }
  },
  41734: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => PM
    });
    var OM = iM(40765);

    function SM(MM) {
      return {
        current: () => MM,
        watch: () => () => {}
      }
    }

    function jM() {}
    const aM = Object.freeze([0, 0, 0]),
      PM = {
        states: {
          health: SM({
            health: null,
            maxHealth: null,
            shield: null,
            maxShield: null
          }),
          inventory: SM({
            player: [],
            chestOrCreative: [],
            chest: null,
            creative: !1,
            selectedSlot: 0,
            freeSlots: 0
          }),
          hotbar: SM({
            items: [],
            ammo: 0,
            selectedSlot: null
          }),
          stationItems: SM({
            enchantable: {},
            salvageable: {}
          }),
          itemInfo: SM({}),
          creativeVisibility: SM({
            publicLobby: !1,
            shownInGame: {}
          }),
          aura: SM(null),
          heldItemAim: SM({
            gun: !1,
            aimable: !1,
            chargeName: null
          }),
          crouching: SM(!1),
          gliderBoostFuel: SM(0),
          flight: SM({
            canFly: !1,
            flying: !1
          }),
          crafting: SM({
            focus: null,
            recipes: [],
            detail: null
          }),
          players: SM({
            ids: [],
            byId: {},
            localId: null
          }),
          lobbyLeaderboardRows: SM({}),
          fullInventory: SM(!1),
          crosshairTarget: SM({
            interactPrompt: null,
            blockText: null,
            neededTool: null
          }),
          localPlayerAlive: SM(!0),
          freeCamera: SM({
            allowed: !1,
            movesFly: !1
          }),
          replay: SM(null),
          replayEdits: SM(null),
          replayRecorder: SM({
            recording: !1,
            clipping: !1,
            hasClipBuffer: !1,
            seconds: 0
          }),
          replayVideoExporting: SM(!1)
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
          selectHotbarSlot: jM,
          removeInventoryItem: () => !1,
          swapInventorySlots: () => !1,
          moveInventoryItem: () => !1,
          quickMoveInventoryItem: () => null,
          closeChest: jM,
          setInventoryOpen: jM,
          changeIronChestPasskey: jM,
          dragReplayCamera: jM,
          applyTemporaryThirdPerson: jM,
          holdEmoteWheel: jM,
          recordFlyingMiddleText: jM,
          focusCrafting: jM,
          craftRecipe: () => ({
            Ha: 0,
            Pz: null,
            amountAddedToSlot: 0
          }),
          salvageItem: () => !1,
          enchantItem: jM,
          setShopOpen: jM,
          buyShopItem: jM,
          lobbyManage: jM,
          sendChatMessage: jM,
          ignorePlayer: jM,
          reportPlayer: jM,
          reportWorldCodeChat: jM,
          requestDiscordReportKey: jM,
          reportLobbyOrGame: jM,
          playEmote: jM,
          updateMyCosmetic: jM,
          writeOnBoard: jM,
          writeBook: jM,
          writeNameTag: jM,
          setCustomLobbyBlock: jM,
          openIronChest: jM,
          sendCodeCollab: jM,
          clickCodeBlock: jM,
          bindCustomButtonKeys: jM,
          pressCustomButton: jM,
          moveReplayFreecam: jM,
          holdReplayFreecamVertical: jM,
          respawn: jM,
          wakeUp: jM,
          requestLeaderboard: jM,
          completeTask: jM,
          setServerCookie: jM,
          answerUiRequest: jM,
          chooseRewardedAd: jM,
          setCameraZoom: jM,
          setFreeCameraMovesFly: jM,
          setBlockHighlight: jM,
          setCrosshairInteractPrompt: jM,
          setLookSensitivity: jM,
          replayAction: jM,
          setReplayPlaying: jM,
          seekReplay: jM,
          setReplayCameraMode: jM,
          syncReplayCameraMode: jM,
          setReplayCameraKeyframe: jM,
          moveReplayCameraKeyframe: jM,
          deleteReplayCameraKeyframes: jM,
          setReplayPlaybackMark: jM,
          cropReplay: () => !1,
          holdReplayForShaderPackFailure: jM,
          exportReplayVideo: jM,
          toggleRecording: jM,
          saveClip: jM,
          setRecorderPrefs: jM,
          setReplayViewerOpen: jM
        },
        queries: {
          enchantingOffer: () => ({
            perks: [],
            options: []
          }),
          worldCodeAiChunk: () => OM.c,
          worldCodeAiGameState: () => OM.f
        },
        lookups: {
          localPos: () => aM,
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
  42065: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => aM,
      c: () => jM
    });
    var OM = iM(2263),
      SM = iM(1073);

    function jM(MM, rM) {
      return null !== MM.gameSource && (0, OM.m)(rM, MM.gameSource)
    }

    function aM(MM, rM) {
      if (null === MM.gameSource || "" === MM.gameSource || null === rM) return !0;
      const iM = (0, SM.m)(rM) ? (0, SM.p)(rM) : null;
      return null !== iM && jM(MM, iM)
    }
  },
  42041: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => PM
    });
    var OM = iM(613),
      SM = iM(42045),
      jM = iM(41900);
    async function aM(MM) {
      const rM = await (0, SM.g)({
        Helmet: iM(38935),
        Chestplate: iM(38941),
        Gauntlets: iM(38961),
        Leggings: iM(38950),
        Boots: iM(38954)
      } [OM.b[MM]]);
      try {
        return (0, jM.p)(rM)
      } finally {
        rM.close()
      }
    }
    const PM = new class {
      constructor() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : aM,
          rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : SM.n;
        this.decode = MM, this.register = rM, this.decoded = new Map
      }
      warm() {
        for (let MM = 0; MM < OM.b.length; MM++) this.part(MM).catch((rM => {
          console.warn(`The grayscale armour ${OM.b[MM]} image didn't decode ahead of use`, rM)
        }))
      }
      async load(MM, rM) {
        const {
          width: iM,
          height: jM,
          pixels: aM
        } = await this.part(MM), PM = new ImageData(function(MM, rM) {
          const iM = new Uint8ClampedArray(MM.length);
          for (let OM = 0; OM < MM.length; OM += 4) iM[OM] = Math.round(MM[OM] * rM[0] / 255), iM[OM + 1] = Math.round(MM[OM + 1] * rM[1] / 255), iM[OM + 2] = Math.round(MM[OM + 2] * rM[2] / 255), iM[OM + 3] = MM[OM + 3];
          return iM
        }(aM, function(MM) {
          return [MM >>> 16 & 255, MM >>> 8 & 255, 255 & MM]
        }(rM)), iM, jM);
        let nM;
        try {
          nM = await createImageBitmap(PM, {
            premultiplyAlpha: "none",
            colorSpaceConversion: "none"
          })
        } catch (QM) {
          throw new SM.d("decode", `grayscale armour ${OM.b[MM]}`, {
            cause: QM
          })
        }
        return {
          id: this.register(nM),
          width: iM,
          height: jM
        }
      }
      part(MM) {
        const rM = this.decoded.get(MM);
        if (void 0 !== rM) return rM;
        const iM = this.decode(MM).catch((rM => {
          throw this.decoded.delete(MM), rM instanceof SM.d ? rM : new SM.d("decode", `grayscale armour ${OM.b[MM]}`, {
            cause: rM
          })
        }));
        return this.decoded.set(MM, iM), iM
      }
    }
  },
  42039: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => aM,
      d: () => dM,
      f: () => zM,
      i: () => LM,
      m: () => JM
    });
    var OM = iM(41884),
      SM = iM(42041),
      jM = iM(42045);
    const aM = 396,
      PM = 1,
      nM = 2,
      QM = 3,
      zM = {
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
      LM = {
        File: 0,
        Item: 1
      },
      mM = 0,
      HM = 1,
      hM = 2;

    function JM(MM) {
      const rM = (0, OM.o)();
      rM.catch((() => {}));
      let SM = null;
      return {
        glbUrl: MM,
        lifeformAtlasUrl: async MM => (await rM).lifeformAtlasUrl(MM),
        armourAtlasUrl: async () => (await iM.e(231).then((() => iM(35131)))).armourAtlasUrl,
        capeUrl: async MM => (await rM).capeUrl(MM),
        attachmentImageUrl: async MM => (await rM).attachmentImageUrl(MM),
        blockImageUrl: async MM => (await rM).blockImageUrl(MM),
        groupAtlasUrl: async MM => (await rM).groupAtlasUrl(MM),
        particleTextureUrl: async MM => (await rM).particleTextureUrl(MM),
        particleItemUrl: async MM => (SM ??= iM.e(43).then((() => iM(53811))).catch((MM => {
          throw SM = null, MM
        })), (await SM).particleItemUrl(MM))
      }
    }
    class dM {
      constructor(MM, rM) {
        var iM, aM, PM, nM;
        let QM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        this.sources = MM, this.onFailure = rM, this.loading = new Map, this.glbImages = new Map, this.glbWrittenImages = new Map, this.glbTakenCount = new Map, this.answered = new Map, this.ready = [], this.load = void 0, this.release = void 0, this.fetchFile = void 0, this.greyscaleArmour = void 0, this.dh = !1, this.load = null !== (iM = QM.load) && void 0 !== iM ? iM : (MM, rM) => (0, jM.j)(MM, QM.fetchImage, rM), this.release = null !== (aM = QM.release) && void 0 !== aM ? aM : jM.o, this.fetchFile = null !== (PM = QM.fetchFile) && void 0 !== PM ? PM : MM => (0, OM.j)(MM), this.greyscaleArmour = null !== (nM = QM.greyscaleArmour) && void 0 !== nM ? nM : SM.c
      }
      get waiting() {
        return this.ready.length
      }
      get inFlight() {
        return this.loading.size
      }
      glbWritten(MM, rM) {
        this.glbWrittenImages.set(MM, eM(rM))
      }
      glbTaken(MM, rM) {
        const iM = this.glbWrittenImages.get(MM);
        this.glbWrittenImages.delete(MM), rM && this.setGlbImages(MM, void 0 !== iM && iM.length > 0 ? iM : void 0)
      }
      setGlbImages(MM, rM) {
        var iM;
        this.glbTakenCount.set(MM, (null !== (iM = this.glbTakenCount.get(MM)) && void 0 !== iM ? iM : 0) + 1), void 0 === rM ? this.glbImages.delete(MM) : this.glbImages.set(MM, rM);
        const OM = [];
        for (const {
            key: SM
          }
          of this.loading.values()) SM.kind === zM.Glb && SM.word === MM && OM.push(SM);
        for (let SM = this.ready.length - 1; SM >= 0; SM--) {
          const {
            key: rM,
            id: iM
          } = this.ready[SM];
          rM.kind === zM.Glb && rM.word === MM && (this.ready.splice(SM, 1), null !== iM && (this.answered.delete(iM), this.release(iM)), OM.push(rM))
        }
        this.loadAgain(OM)
      }
      onEvent(MM) {
        if (this.dh) return;
        const rM = new DataView(MM.buffer, MM.byteOffset, MM.byteLength);
        for (let iM = 0; iM + 8 <= MM.byteLength; iM += 8) {
          const MM = rM.getUint8(iM),
            OM = rM.getUint32(iM + 4, !0);
          if (MM === QM) {
            this.answered.delete(OM), this.release(OM);
            continue
          }
          const SM = {
            kind: rM.getUint8(iM + 1),
            index: rM.getUint8(iM + 2),
            word: OM
          };
          MM === PM ? this.want(SM) : MM === nM && this.loading.delete(yM(SM))
        }
      }
      reload(MM, rM) {
        const iM = iM => MM.includes(iM.kind) && (void 0 === rM || rM(iM)),
          OM = new Map;
        for (const SM of this.answered.values()) iM(SM) && OM.set(yM(SM), SM);
        for (const [SM, {
            key: jM
          }] of this.loading) iM(jM) && OM.set(SM, jM);
        this.loadAgain(OM.values())
      }
      loadAgain(MM) {
        for (const rM of MM) this.loading.delete(yM(rM)), this.want(rM)
      }
      drain(MM) {
        if (null !== MM)
          for (; this.ready.length > 0;) {
            if (!MM(aM, 0, this.ready[0].record)) return;
            this.ready.shift()
          }
      }
      dispose() {
        this.dh = !0, this.loading.clear(), this.ready.length = 0;
        for (const MM of this.answered.keys()) this.release(MM);
        this.answered.clear()
      }
      want(MM) {
        const rM = yM(MM);
        if (this.loading.has(rM)) return;
        const iM = {
          key: MM
        };
        this.loading.set(rM, iM), this.loadKey(MM).then((OM => {
          this.dh || this.loading.get(rM) !== iM ? this.release(OM.id) : (this.loading.delete(rM), this.answered.set(OM.id, MM), this.ready.push({
            record: EM(MM, mM, OM),
            key: MM,
            id: OM.id
          }))
        }), (OM => {
          if (this.dh || this.loading.get(rM) !== iM) return;
          this.loading.delete(rM), this.onFailure({
            key: MM,
            error: OM
          });
          const SM = OM instanceof jM.d && "decode" === OM.stage ? HM : hM;
          this.ready.push({
            record: EM(MM, SM, null),
            key: MM,
            id: null
          })
        }))
      }
      async loadKey(MM) {
        switch (MM.kind) {
          case zM.Glb:
            return this.load(await this.glbImage(MM), "none");
          case zM.LifeformAtlas:
            return this.load(lM(await this.sources.lifeformAtlasUrl(MM.word), MM), "none");
          case zM.ArmourAtlas:
            return this.load(lM(await this.sources.armourAtlasUrl(), MM), "none");
          case zM.Cape:
            return this.load(lM(await this.sources.capeUrl(MM.word), MM), "none");
          case zM.AttachmentImage:
            return this.load(lM(await this.sources.attachmentImageUrl(MM.word), MM), "none");
          case zM.GroupAtlas:
            return this.load(lM(await this.sources.groupAtlasUrl(MM.word), MM), "none");
          case zM.BlockImage:
            return this.load(lM(await this.sources.blockImageUrl(MM.word), MM), "none");
          case zM.Particle: {
            const rM = await (MM.index === LM.Item ? this.sources.particleItemUrl(MM.word) : this.sources.particleTextureUrl(MM.word));
            return this.load(lM(rM, MM), "flipY")
          }
          case zM.GreyscaleArmour:
            return this.greyscaleArmour.load(MM.index, MM.word);
          default:
            throw new jM.d("fetch", `image kind ${MM.kind}`, {
              cause: null
            })
        }
      }
      async glbImage(MM) {
        var rM;
        let iM = this.glbImages.get(MM.word);
        if (void 0 === iM) {
          const rM = this.glbTakenCount.get(MM.word),
            OM = lM(await this.sources.glbUrl(MM.word), MM);
          try {
            iM = eM(await this.fetchFile(OM))
          } catch (SM) {
            throw new jM.d("fetch", OM, {
              cause: SM
            })
          }
          this.glbTakenCount.get(MM.word) === rM && this.glbImages.set(MM.word, iM)
        }
        const OM = null === (rM = iM) || void 0 === rM ? void 0 : rM[MM.index];
        if (!OM) throw new jM.d("decode", `image ${MM.index} of file ${2147483647&MM.word}`, {
          cause: null
        });
        return OM
      }
    }

    function yM(MM) {
      let {
        kind: rM,
        index: iM,
        word: OM
      } = MM;
      return `${rM}:${iM}:${OM}`
    }

    function lM(MM, rM) {
      if (null === MM) throw new jM.d("fetch", `no URL for image ${yM(rM)}`, {
        cause: null
      });
      return MM
    }

    function EM(MM, rM, iM) {
      var OM, SM, jM;
      const aM = new Uint8Array(16),
        PM = new DataView(aM.buffer);
      return PM.setUint8(0, MM.kind), PM.setUint8(1, MM.index), PM.setUint8(2, rM), PM.setUint32(4, MM.word, !0), PM.setUint32(8, null !== (OM = null === iM || void 0 === iM ? void 0 : iM.id) && void 0 !== OM ? OM : 0, !0), PM.setUint16(12, Math.min(null !== (SM = null === iM || void 0 === iM ? void 0 : iM.width) && void 0 !== SM ? SM : 0, 65535), !0), PM.setUint16(14, Math.min(null !== (jM = null === iM || void 0 === iM ? void 0 : iM.height) && void 0 !== jM ? jM : 0, 65535), !0), aM
    }
    const UM = 1179937895,
      GM = 1313821514,
      CM = 5130562;

    function eM(MM) {
      var rM;
      const iM = new DataView(MM.buffer, MM.byteOffset, MM.byteLength);
      if (MM.byteLength < 20 || iM.getUint32(0, !0) !== UM || iM.getUint32(16, !0) !== GM) return [];
      let OM, SM = 20 + iM.getUint32(12, !0);
      try {
        OM = JSON.parse((new TextDecoder).decode(MM.subarray(20, SM)))
      } catch {
        return []
      }
      for (; SM + 8 <= MM.byteLength && iM.getUint32(SM + 4, !0) !== CM;) SM += 8 + iM.getUint32(SM, !0);
      const jM = null !== (rM = OM.images) && void 0 !== rM ? rM : [];
      if (0 === jM.length || SM + 8 > MM.byteLength) return jM.map((() => null));
      const aM = MM.subarray(SM + 8, Math.min(MM.byteLength, SM + 8 + iM.getUint32(SM, !0)));
      return jM.map((MM => {
        var rM, iM, SM;
        const jM = void 0 === MM.bufferView || null === (rM = OM.bufferViews) || void 0 === rM ? void 0 : rM[MM.bufferView];
        if (!jM || 0 !== (null !== (iM = jM.buffer) && void 0 !== iM ? iM : 0) || void 0 === jM.byteLength) return null;
        const PM = null !== (SM = jM.byteOffset) && void 0 !== SM ? SM : 0,
          nM = PM + jM.byteLength;
        return nM <= aM.byteLength ? aM.slice(PM, nM) : null
      }))
    }
  },
  41739: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => aM,
      c: () => jM,
      e: () => SM
    });
    let OM = null;

    function SM(MM) {
      OM = MM
    }

    function jM(MM) {
      OM === MM && (OM = null)
    }

    function aM() {
      var MM;
      null === (MM = OM) || void 0 === MM || MM()
    }
  },
  37524: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => zM,
      g: () => mM,
      k: () => yM,
      m: () => QM
    });
    var OM = iM(19),
      SM = iM(2619),
      jM = iM(2622),
      aM = iM(2624),
      PM = iM(2690),
      nM = iM(22);

    function QM(MM, rM) {
      return (!(0, aM.c)() || 0 === MM && 0 === rM) && (0, jM.z)(SM.l.Joystick, 0, MM, rM, 0)
    }
    const zM = {
      Action1: 1,
      Action2: 2,
      Action3: 3,
      Attack: 4,
      Use: 5,
      Interact: 6,
      Boost: 7
    };

    function LM(MM) {
      return MM.classList.contains("TouchKeyHit") && HM() ? null : MM.firstElementChild
    }

    function mM(MM) {
      return MM.classList.contains("TouchKeyHit") && !MM.classList.contains("CanvasZone") ? {
        whole: !HM(),
        keyBox: null
      } : {
        whole: !1,
        keyBox: hM(LM(MM))
      }
    }

    function HM() {
      return document.documentElement.classList.contains(PM.k)
    }

    function hM(MM) {
      return !(MM instanceof HTMLElement) || MM.offsetWidth <= 0 || MM.offsetHeight <= 0 ? null : {
        width: MM.offsetWidth,
        height: MM.offsetHeight
      }
    }

    function JM(MM, rM) {
      const iM = MM => Math.min(65535, Math.round(4 * MM));
      return (iM(MM) | iM(rM) << 16) >>> 0
    }

    function dM(MM) {
      return {
        x: MM.left + MM.width / 2,
        y: MM.top + MM.height / 2,
        radius: Math.min(MM.width, MM.height) / 2
      }
    }
    const yM = new class {
      constructor(MM) {
        this.write = MM, this.elements = new Map, this.canvasLeft = 0, this.canvasTop = 0
      }
      set(MM, rM) {
        let iM = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        rM ? this.elements.set(MM, {
          element: rM,
          hidden: iM
        }) : this.elements.delete(MM), this.measureOne(MM)
      }
      measure() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
          left: this.canvasLeft,
          top: this.canvasTop
        };
        this.canvasLeft = MM.left, this.canvasTop = MM.top;
        for (const rM of this.elements.keys()) this.measureOne(rM)
      }
      hitZone(MM, rM) {
        let iM = null,
          OM = 1;
        for (const SM of this.elements.keys()) {
          const jM = this.shown(SM);
          if (!jM) continue;
          const {
            rect: aM,
            element: PM
          } = jM, nM = dM(aM), QM = Math.max(0, aM.width / 2 - nM.radius), zM = Math.max(0, aM.height / 2 - nM.radius), mM = Math.max(0, Math.abs(MM - nM.x) - QM), HM = Math.max(0, Math.abs(rM - nM.y) - zM), JM = PM.firstElementChild;
          let yM = Math.hypot(mM, HM) / nM.radius;
          const lM = hM(LM(PM));
          lM && (yM = Math.min(yM, Math.max(2 * Math.abs(MM - nM.x) / lM.width, 2 * Math.abs(rM - nM.y) / lM.height))), yM < OM && (iM = {
            code: SM,
            element: PM,
            key: JM,
            ...nM
          }, OM = yM)
        }
        return iM
      }
      measureOne(MM) {
        const rM = this.shown(MM);
        if (!rM) return void this.write(SM.l.TouchZone, MM, 0, 0, 0);
        const {
          rect: iM,
          element: OM
        } = rM, jM = dM(iM);
        this.write(SM.l.TouchZone, MM, jM.x - this.canvasLeft, jM.y - this.canvasTop, JM(iM.width, iM.height));
        const aM = hM(LM(OM));
        this.write(SM.l.TouchZone, 256 | MM, 0, 0, aM ? JM(aM.width, aM.height) : 0)
      }
      shown(MM) {
        const rM = this.elements.get(MM),
          iM = OM.d.get("worldPanelHud");
        if (!rM || rM.hidden || "none" === iM) return null;
        const SM = rM.element.getBoundingClientRect();
        return SM.width <= 0 || SM.height <= 0 ? null : {
          rect: SM,
          element: rM.element
        }
      }
    }(jM.z);
    (0, nM.j)(PM.f, (() => {
      yM.measure()
    }))
  },
  41787: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => nM,
      d: () => QM
    });
    var OM = iM(41930),
      SM = iM(40089),
      jM = iM(37414),
      aM = iM(41793),
      PM = iM(41764);
    const nM = OM.b.timeForPlayerToConnect - 1e4;
    async function QM(MM, rM, iM, OM) {
      let nM;
      try {
        nM = await MM.getTrafficCode()
      } catch (hM) {
        throw console.error("[bloxd-wasm-client] could not get a traffic code", hM), new PM.w(hM)
      }
      const {
        gameNameWithVariation: QM,
        lobbyName: zM
      } = rM, LM = () => {
        const rM = (0, jM.f)(MM, QM, zM, nM, (MM => {
          var rM;
          return null !== (rM = null === iM || void 0 === iM ? void 0 : iM.isUsingCustomGameTexturePack(MM)) && void 0 !== rM && rM
        }));
        rM.joinOptions.wasmClient = !0;
        const SM = (0, aM.G)();
        return null !== SM && (rM.joinOptions.renderBackend = SM), rM.joinOptions.joinAdHold = OM, rM
      }, {
        roomName: mM,
        joinOptions: HM
      } = LM();
      return {
        endpoint: rM.endpoint,
        roomName: mM,
        joinOptions: HM,
        session: {
          gameNameWithVariation: QM,
          lobbyName: zM,
          playerDbId: MM.whamm
        },
        optionsAfterRefusal: async rM => await (0, SM.e)(MM, rM) ? LM().joinOptions : null
      }
    }
  },
  42055: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => zM,
      g: () => jM,
      j: () => LM,
      n: () => aM
    });
    var OM = iM(42039),
      SM = iM(41884);
    const jM = new class {
      constructor() {
        this.page = null, this.session = void 0, this.follower = null, this.isWanted = !1, this.listeners = new Set, this.pageListeners = new Set, this.wantedListeners = new Set
      }
      get current() {
        return void 0 === this.session ? this.page : this.session
      }
      setPageFiles(MM) {
        this.change((() => {
          this.page = MM
        }))
      }
      setSessionFiles(MM) {
        const rM = void 0 !== this.session && void 0 === MM;
        if (this.change((() => {
            this.session = MM
          })), rM)
          for (const iM of [...this.pageListeners]) iM()
      }
      showsPage() {
        return void 0 === this.session
      }
      onPageShown(MM) {
        return this.pageListeners.add(MM), () => {
          this.pageListeners.delete(MM)
        }
      }
      setFollower(MM) {
        this.follower = MM, this.startFollower()
      }
      wanted() {
        this.isWanted = !0;
        for (const MM of [...this.wantedListeners]) MM();
        this.startFollower()
      }
      onWanted(MM) {
        return this.wantedListeners.add(MM), () => {
          this.wantedListeners.delete(MM)
        }
      }
      onChange(MM) {
        return this.listeners.add(MM), () => {
          this.listeners.delete(MM)
        }
      }
      startFollower() {
        const MM = this.follower;
        this.isWanted && null !== MM && (this.follower = null, MM((() => {
          this.follower = MM
        })))
      }
      change(MM) {
        const rM = this.current;
        if (MM(), this.current !== rM)
          for (const iM of this.listeners) iM()
      }
    };

    function aM(MM, rM) {
      return {
        ...MM,
        armourAtlasUrl: () => {
          var iM, OM;
          return null !== (iM = null === (OM = rM()) || void 0 === OM ? void 0 : OM.armourAtlasUrl()) && void 0 !== iM ? iM : MM.armourAtlasUrl()
        },
        lifeformAtlasUrl: iM => nM(rM(), (MM => MM.LIFEFORM_ATLAS_PATHS[iM]), (() => MM.lifeformAtlasUrl(iM))),
        groupAtlasUrl: iM => nM(rM(), (MM => MM.GROUP_ATLAS_PATHS[iM]), (() => MM.groupAtlasUrl(iM))),
        particleItemUrl: OM => QM(rM(), (async () => {
          const MM = await iM.e(43).then((() => iM(53811))).catch((() => null));
          return (null === MM || void 0 === MM ? void 0 : MM.particleItemSprite(OM)) || null
        }), (() => MM.particleItemUrl(OM))),
        blockImageUrl: iM => QM(rM(), (async () => {
          var MM, rM;
          return null !== (MM = null === (rM = await PM()) || void 0 === rM ? void 0 : rM.blockImageName(iM)) && void 0 !== MM ? MM : null
        }), (() => MM.blockImageUrl(iM)))
      }
    }

    function PM() {
      return (0, SM.o)().catch((() => null))
    }

    function nM(MM, rM, iM) {
      return QM(MM, (async () => {
        var MM;
        const iM = await PM(),
          OM = null === iM ? null : rM(iM),
          SM = null !== (MM = null === OM || void 0 === OM ? void 0 : OM.slice(OM.lastIndexOf("/") + 1)) && void 0 !== MM ? MM : null;
        return "Player_Atlas" === SM ? null : SM
      }), iM)
    }
    async function QM(MM, rM, iM) {
      if (null !== MM) {
        const iM = await rM(),
          OM = null === iM ? null : MM.textureUrl(iM);
        if (null !== OM) return OM
      }
      return iM()
    }
    const zM = 0;

    function LM(MM) {
      const rM = [OM.f.ArmourAtlas, OM.f.LifeformAtlas, OM.f.GroupAtlas, OM.f.BlockImage, OM.f.Particle];
      MM.reload(rM, (MM => {
        switch (MM.kind) {
          case OM.f.Particle:
            return MM.index === OM.i.Item;
          case OM.f.LifeformAtlas:
            return MM.word !== zM;
          default:
            return !0
        }
      }))
    }
  },
  41932: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => OM,
      f: () => PM,
      j: () => aM,
      k: () => SM,
      o: () => jM
    });
    const OM = 1e3;

    function SM() {
      nM((() => {
        window.location.reload()
      }))
    }

    function jM() {
      return new Promise((() => {}))
    }

    function aM(MM) {
      nM((() => {
        window.location.replace(MM(window.location.href))
      }))
    }

    function PM(MM) {
      Promise.resolve().then((() => iM(94))).then((rM => {
        let {
          currentUrl: iM
        } = rM;
        aM((() => iM.mergeSearchParamsInto(MM)))
      }), (() => {
        aM((() => MM))
      }))
    }

    function nM(MM) {
      null !== window.onbeforeunload ? Promise.resolve().then((() => iM(1830))).then((rM => {
        let {
          prepareForUnloadWithoutConfirmation: iM
        } = rM;
        try {
          iM()
        } catch (OM) {
          console.warn("[bloxd-wasm-client] prepareForUnloadWithoutConfirmation threw: leaving plainly", OM), window.onbeforeunload = null
        }
        MM()
      }), (() => {
        window.onbeforeunload = null, MM()
      })) : MM()
    }
  },
  5463: (MM, rM, iM) => {
    function OM(MM, rM) {
      return SM(MM, rM)
    }

    function SM(MM, rM) {
      if (MM === rM) return !0;
      if ("object" !== typeof MM || "object" !== typeof rM || null === MM || null === rM || Array.isArray(MM) !== Array.isArray(rM)) return !1;
      const iM = MM,
        OM = rM,
        jM = Object.keys(iM);
      return jM.length === Object.keys(OM).length && jM.every((MM => Object.prototype.hasOwnProperty.call(OM, MM) && SM(iM[MM], OM[MM])))
    }
    iM.d(rM, {
      d: () => OM
    })
  },
  42012: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => CM,
      f: () => UM,
      g: () => JM,
      h: () => hM
    });
    var OM = iM(1919),
      SM = iM(1215),
      jM = iM(40087),
      aM = iM(37437),
      PM = iM(40100),
      nM = iM(41764);
    const QM = {
        "X-Requested-With": "XMLHtttpRequest"
      },
      zM = 3,
      LM = [500, 1500];

    function mM(MM) {
      const rM = new URL(MM);
      return {
        secure: "https:" === rM.protocol || "wss:" === rM.protocol,
        host: rM.host,
        pathname: rM.pathname.replace(/\/+$/, ""),
        search: rM.searchParams.toString()
      }
    }

    function HM(MM, rM, iM) {
      const {
        secure: OM,
        host: SM,
        pathname: jM,
        search: aM
      } = mM(MM);
      return `${OM?"https":"http"}://${SM}${jM}/matchmake/${rM}/${encodeURIComponent(iM)}${aM?`?${aM}`:""}`
    }

    function hM(MM, rM) {
      var iM;
      const OM = null !== (iM = rM.protocol) && void 0 !== iM ? iM : "ws";
      if ("ws" !== OM) throw new Error(`seat reservation asks for the ${OM} transport`);
      const {
        secure: SM,
        host: jM,
        pathname: aM,
        search: PM
      } = mM(MM), nM = new URLSearchParams(PM);
      nM.append("sessionId", rM.sessionId), rM.reconnectionToken && nM.append("reconnectionToken", rM.reconnectionToken);
      return `${SM?"wss":"ws"}://${rM.room.publicAddress||`${jM}${aM}`}/${rM.room.processId}/${rM.room.roomId}?${nM.toString()}`
    }
    async function JM(MM, rM, iM) {
      var PM;
      let QM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const mM = null !== (PM = QM.sleep) && void 0 !== PM ? PM : OM.c,
        hM = new SM.e(QM.signal),
        JM = new aM.e((() => {
          (0, SM.j)(hM.controller, new aM.i("seat"))
        })),
        {
          signal: EM
        } = hM;
      try {
        const OM = await (0, jM.g)((() => async function(MM, rM, iM, OM) {
          var jM;
          const {
            signal: aM,
            sleep: PM
          } = OM, QM = HM(MM, "joinOrCreate", rM), mM = JSON.stringify(iM);
          let hM = null;
          for (let HM = 0; HM < zM; HM++) {
            var JM;
            if (HM > 0) await PM(null !== (JM = LM[HM - 1]) && void 0 !== JM ? JM : 1500, aM);
            let MM;
            (0, SM.p)(aM);
            try {
              MM = await yM(QM, mM, OM)
            } catch (EM) {
              (0, SM.p)(aM), hM = dM(EM);
              continue
            }
            const {
              response: rM,
              answer: iM,
              refusal: jM,
              lost: zM
            } = MM;
            if (null === zM) {
              if (null !== jM) throw lM(jM, iM);
              if (rM.ok && null !== iM && eM(iM)) return iM;
              hM = new nM.v(`seat request answered HTTP ${rM.status}${null===iM?" without JSON":" without a seat"}`, !1, void 0, rM.status)
            } else hM = dM(zM.error)
          }
          throw null !== (jM = hM) && void 0 !== jM ? jM : new nM.v("seat request made no attempt", !1)
        }(MM, rM, iM, {
          ...QM,
          signal: EM,
          sleep: mM
        })), EM, mM);
        return JM.answered(), OM
      } finally {
        JM.stop(), hM.unfollow()
      }
    }

    function dM(MM) {
      return new nM.v(MM instanceof Error ? MM.message : String(MM), !0, MM)
    }
    async function yM(MM, rM, iM) {
      var OM;
      const {
        signal: jM
      } = iM, aM = null !== (OM = iM.fetch) && void 0 !== OM ? OM : fetch, PM = await aM(MM, {
        method: "POST",
        headers: {
          ...QM,
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: rM,
        credentials: "include",
        signal: jM
      }), {
        answer: nM,
        lost: zM
      } = await async function(MM) {
        try {
          const rM = await MM.json();
          return {
            answer: "object" === typeof rM && null !== rM ? rM : null,
            lost: null
          }
        } catch (rM) {
          return {
            answer: null,
            lost: rM instanceof SyntaxError ? null : {
              error: rM
            }
          }
        }
      }(PM), LM = null !== nM && "string" === typeof nM.error ? nM.error : null;
      var mM;
      null !== LM && (null === (mM = iM.onRefusal) || void 0 === mM || mM.call(iM));
      return (0, SM.p)(jM), {
        response: PM,
        answer: nM,
        refusal: LM,
        lost: zM
      }
    }

    function lM(MM, rM) {
      return new nM.n(MM, "number" === typeof(null === rM || void 0 === rM ? void 0 : rM.code) ? rM.code : 0, (0, PM.t)(MM).text)
    }
    class EM extends Error {
      constructor(MM, rM) {
        super(MM), this.code = rM, this.name = "SeatHttpError"
      }
    }
    async function UM(MM, rM, iM) {
      let OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const {
        response: SM,
        answer: jM,
        refusal: aM,
        lost: PM
      } = await yM(HM(MM, "reconnect", rM), JSON.stringify({
        reconnectionToken: iM
      }), OM);
      if (null !== PM) throw PM.error;
      if (!SM.ok) {
        const MM = null !== jM && "number" === typeof jM.code && 0 !== jM.code ? jM.code : SM.status;
        throw new EM(`the seat's reconnect was refused: ${null!==aM&&void 0!==aM?aM:`HTTP ${SM.status}`}`, MM)
      }
      if (null !== aM) throw lM(aM, jM);
      if (null === jM || !eM(jM)) throw new Error("the seat's reconnect answered " + (null === jM ? "without JSON" : "without a seat"));
      return {
        ...jM,
        reconnectionToken: iM
      }
    }
    const GM = 10;

    function CM(MM) {
      if (MM.byteLength < 2 || MM[0] !== GM) return null;
      const rM = 2 + MM[1];
      return rM > MM.byteLength ? null : (new TextDecoder).decode(MM.subarray(2, rM))
    }

    function eM(MM) {
      const rM = MM.room;
      return "string" === typeof MM.sessionId && "object" === typeof rM && null !== rM && "string" === typeof rM.roomId && "string" === typeof rM.processId && "string" === typeof rM.name
    }
  },
  41682: (MM, rM, iM) => {
    iM.d(rM, {
      A: () => eM,
      B: () => RM,
      D: () => UM,
      H: () => GM,
      K: () => dM,
      N: () => tM,
      O: () => WM,
      P: () => hM,
      S: () => DM,
      U: () => lM,
      X: () => yM,
      _: () => EM,
      ab: () => CM,
      d: () => SM,
      h: () => sM,
      j: () => pM,
      k: () => HM,
      l: () => JM,
      n: () => uM,
      p: () => bM,
      s: () => gM,
      w: () => wM
    });
    var OM = iM(3349);
    const SM = {
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

    function jM(MM, rM) {
      return !ArrayBuffer.isView(MM) || MM instanceof DataView ? Array.isArray(MM) ? MM.map((MM => rM(MM))) : MM : Array.from(MM, (MM => rM(MM)))
    }

    function aM(MM) {
      if ("string" !== typeof MM) return MM;
      for (let rM = 0; rM < MM.length; rM++) {
        const iM = MM.charCodeAt(rM);
        if (iM >= 55296 && iM <= 57343) return nM.decode(PM.encode(MM))
      }
      return MM
    }
    const PM = new TextEncoder,
      nM = new TextDecoder;

    function QM(MM) {
      return MM
    }
    let zM;

    function LM(MM) {
      return null === MM || "object" !== typeof MM ? MM : [aM(MM.lQ), aM(MM.EQ)]
    }

    function mM(MM) {
      return null === MM || "object" !== typeof MM ? MM : [jM(MM.ti, QM), jM(MM.oa, QM)]
    }

    function HM(MM) {
      return null === (rM = MM) || "object" !== typeof rM ? rM : [aM(rM.Kz), aM(rM.qz)];
      var rM
    }

    function hM(MM) {
      return null === (rM = MM) || "object" !== typeof rM ? rM : [rM.id, rM.IQ];
      var rM
    }

    function JM(MM) {
      return null === (rM = MM) || "object" !== typeof rM ? rM : [rM.hM, aM(rM.JM), rM.dM, aM(rM.EM), rM.eM, rM.bM, rM.cn, aM(rM.MQ), aM(rM.rQ)];
      var rM
    }

    function dM(MM) {
      return null === (rM = MM) || "object" !== typeof rM ? rM : [jM(rM.SP, QM), rM.jP];
      var rM
    }

    function yM(MM) {
      return null === (rM = MM) || "object" !== typeof rM ? rM : [jM(rM.aQ, (MM => aM(MM))), aM(rM.nQ), rM.QQ];
      var rM
    }

    function lM(MM) {
      return null === (rM = MM) || "object" !== typeof rM ? rM : [jM(rM.mQ, QM), aM(rM.hQ), rM.JQ];
      var rM
    }

    function EM(MM) {
      return null === (rM = MM) || "object" !== typeof rM ? rM : [aM(rM.Ii), aM(rM.Ki)];
      var rM
    }

    function UM(MM) {
      return null === (rM = MM) || "object" !== typeof rM ? rM : [aM(rM.Ua)];
      var rM
    }

    function GM(MM) {
      return aM(MM)
    }

    function CM(MM) {
      return null === (rM = MM) || "object" !== typeof rM ? rM : [aM(rM.dQ), aM(rM.yQ), aM(rM.lQ), aM(rM.EQ)];
      var rM
    }

    function eM(MM) {
      return LM(MM)
    }

    function bM(MM) {
      return LM(MM)
    }

    function wM(MM) {
      return null === (rM = MM) || "object" !== typeof rM ? rM : [aM(rM.KQ)];
      var rM
    }

    function tM(MM) {
      return MM
    }

    function gM(MM) {
      return null === (rM = MM) || "object" !== typeof rM ? rM : [aM(rM.Ja), aM(rM.da)];
      var rM
    }

    function uM(MM) {
      return aM(MM)
    }

    function RM(MM) {
      return mM(MM)
    }

    function pM(MM) {
      return mM(MM)
    }

    function WM(MM) {
      return null === (rM = MM) || "object" !== typeof rM ? rM : [aM(rM.vQ)];
      var rM
    }

    function sM(MM) {
      return (zM ??= (0, OM.f)().map((MM => MM.name)), zM).map((rM => {
        return "string" === typeof(iM = MM[rM]) ? aM(iM) : jM(iM, QM);
        var iM
      }))
    }

    function DM(MM) {
      return null === (rM = MM) || "object" !== typeof rM ? rM : [rM.fa, rM.Ya, rM.Na];
      var rM
    }
  },
  42061: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => jM
    });
    var OM = iM(42065),
      SM = iM(42055);
    const jM = new class {
      constructor(MM) {
        this.pack = MM, this.game = void 0, this.settle = null, this.hold = null, this.endedWhileHeld = !1, this.gameListeners = new Set, MM.onWanted((() => {
          this.release()
        }))
      }
      setGame(MM) {
        if (void 0 === MM && null !== this.hold) return void(this.endedWhileHeld = !0);
        this.hold = null, this.endedWhileHeld = !1;
        const rM = this.inGame();
        if (this.game = MM, this.update(), this.inGame() !== rM)
          for (const iM of this.gameListeners) iM()
      }
      inGame() {
        return void 0 !== this.game
      }
      onGameChange(MM) {
        return this.gameListeners.add(MM), () => {
          this.gameListeners.delete(MM)
        }
      }
      unwantedLeave(MM) {
        MM && void 0 !== this.game ? this.hold = {
          game: this.game
        } : this.release()
      }
      rejoinHold() {
        return this.hold
      }
      releaseHold(MM) {
        null !== MM && MM === this.hold && this.release()
      }
      release() {
        if (null === this.hold) return;
        const MM = this.endedWhileHeld;
        this.hold = null, this.endedWhileHeld = !1, MM && this.setGame(void 0)
      }
      setSettled(MM) {
        this.settle = MM, this.update()
      }
      update() {
        void 0 === this.game ? this.pack.setSessionFiles(void 0) : null !== this.settle && (0, OM.b)(this.settle.state, this.game) && this.pack.setSessionFiles(this.settle.files)
      }
    }(SM.g)
  },
  5456: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => aM,
      g: () => PM
    });
    var OM = iM(2263),
      SM = iM(5463);
    let jM = null;

    function aM(MM) {
      jM = {
        pack: MM.metaData.id === OM.b ? null : MM
      }
    }

    function PM(MM) {
      return !(null === jM || !(0, SM.d)(jM.pack, MM)) && (jM = null, !0)
    }
  },
  41755: (MM, rM, iM) => {
    iM.r(rM), iM.d(rM, {
      followPageUiPack: () => Fz,
      packForGame: () => vz,
      playWasmGame: () => OL,
      prefetchWasmPreviews: () => xn,
      setGamePackConfirm: () => Mz,
      startWasmPlay: () => qz,
      startWasmPreviews: () => An
    });
    var OM = iM(181),
      SM = iM(1251),
      jM = iM(143),
      aM = iM(40118),
      PM = iM(2039),
      nM = iM(22),
      QM = iM(5052),
      zM = iM(1360),
      LM = iM(1818),
      mM = iM(1373),
      HM = iM(40331),
      hM = iM(1327),
      JM = iM(1911),
      dM = iM(3248);
    let yM = null,
      lM = null,
      EM = null,
      UM = !1;

    function GM() {
      yM ??= performance.now()
    }
    const CM = {
      ready: () => {
        JM.b.markAdmissionAwaited()
      },
      adEnded: () => {
        JM.b.markJoinAdEnded()
      },
      admitted: () => {
        JM.b.markAdmitted()
      }
    };
    var eM = iM(40342),
      bM = iM(40249),
      wM = iM(37416),
      tM = iM(40087),
      gM = iM(9510),
      uM = iM(37437),
      RM = iM(41761),
      pM = iM(5188),
      WM = iM(41677),
      sM = iM(41734),
      DM = iM(41682);
    const kM = {
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

    function ZM(MM) {
      const rM = {
        ...sM.c[MM]
      };
      for (const iM of Object.keys(kM[MM])) delete rM[iM];
      return rM
    }

    function oM() {
      var MM, rM;
      return null === (MM = null === (rM = (0, WM.e)()) || void 0 === rM ? void 0 : rM.localPlayerAlive()) || void 0 === MM || MM
    }

    function fM() {
      var MM, rM;
      return null !== (MM = null === (rM = (0, WM.e)()) || void 0 === rM ? void 0 : rM.localDeaths()) && void 0 !== MM ? MM : null
    }
    const YM = {
        current: oM,
        watch: MM => {
          let rM = oM(),
            iM = fM();
          return (0, pM.y)((() => {
            const OM = oM(),
              SM = fM(),
              jM = null !== SM && null !== iM && SM !== iM;
            iM = SM, jM ? (rM || MM(!0), MM(!1), OM && MM(!0), rM = OM) : OM !== rM && (rM = OM, MM(OM))
          }))
        }
      },
      NM = {
        states: {
          ...ZM("states"),
          localPlayerAlive: YM
        },
        events: {
          ...ZM("events"),
          localPlayerAliveSet: {
            watch: YM.watch
          }
        },
        commands: {
          ...ZM("commands"),
          respawn: () => {
            var MM;
            null === (MM = (0, WM.e)()) || void 0 === MM || MM.respawn()
          },
          playEmote: MM => {
            var rM;
            null === (rM = (0, WM.e)()) || void 0 === rM || rM.send(DM.d.PlayEmote, (0, DM.D)({
              Ua: MM
            }))
          },
          applyTemporaryThirdPerson: MM => {
            var rM;
            let {
              durationMs: iM
            } = MM;
            null === (rM = (0, WM.e)()) || void 0 === rM || rM.thirdPersonFor(iM)
          },
          bindCustomButtonKeys: MM => {
            var rM;
            null === (rM = (0, WM.e)()) || void 0 === rM || rM.bindCustomButtonKeys(MM)
          },
          pressCustomButton: MM => {
            var rM;
            let {
              id: iM,
              down: OM
            } = MM;
            null === (rM = (0, WM.e)()) || void 0 === rM || rM.pressCustomButton(iM, OM)
          },
          setLookSensitivity: () => {},
          wakeUp: MM => {
            const rM = (0, DM.O)({
                vQ: MM
              }),
              iM = () => {
                const MM = (0, WM.e)();
                return !(null !== MM && void 0 !== MM && MM.isSessionLive) || MM.send(DM.d.StopSleeping, rM)
              };
            if (!iM()) {
              const MM = (0, pM.y)((() => {
                iM() && MM()
              }))
            }
          },
          setCameraZoom: MM => {
            var rM;
            null === (rM = (0, WM.e)()) || void 0 === rM || rM.setCameraZoom(MM)
          }
        },
        queries: ZM("queries"),
        lookups: {
          ...ZM("lookups"),
          cameraZoom: () => {
            var MM, rM;
            return null !== (MM = null === (rM = (0, WM.e)()) || void 0 === rM ? void 0 : rM.cameraZoom()) && void 0 !== MM ? MM : 0
          }
        }
      };
    var AM = iM(40100),
      xM = iM(41764),
      vM = iM(41767),
      FM = iM(41787),
      BM = iM(1265),
      XM = iM(94),
      IM = iM(4906),
      KM = iM(4101),
      qM = iM(1171);
    const TM = {
      tz: () => (0, BM.f)(),
      inbuiltOverwritten: () => IM.e,
      reflectApplyHit: () => qM.b,
      definerHit: () => XM.currentUrl.c,
      emitReplaced: () => (0, nM.b)(),
      confirmMesh: () => (0, KM.c)(),
      confirmMeshHitStack: () => (0, KM.f)()
    };
    var VM = iM(41776),
      cM = iM(41932);
    var Mr = iM(19),
      rr = iM(2045),
      ir = iM(2093),
      Or = iM(1722),
      Sr = iM(2141),
      jr = iM(1188),
      ar = iM(1258),
      Pr = iM(41939);

    function nr() {
      return ar.e.get().getCurrentLanguageCode()
    }

    function Qr(MM) {
      const rM = () => {
        MM({
          translate: (MM, rM) => (0, jr.t)(nr(), MM, rM),
          keyBindingText: MM => {
            const rM = (0, ir.r)(MM, Mr.d.get("isTouchScreen"));
            return null !== rM ? (0, jr.x)(nr(), rM.translationKey, rM.params) : (0, ir.m)((0, ir.p)(MM))
          },
          isFriend: Sr.f,
          hiddenNames: rr.c.shown,
          loadsFontRest: (0, Pr.d)(nr())
        })
      };
      let iM = !1;
      const OM = () => {
          const MM = nr();
          (0, jr.k)(MM).then((() => {
            iM || MM !== nr() || rM()
          }))
        },
        SM = () => Or.e.getSocialState().friends.map((MM => MM.name.toLowerCase())).sort().join(" ");
      let jM = SM();
      rM(), OM();
      const aM = [(0, ar.i)((() => {
        rM(), OM()
      })), (0, nM.j)("customBindingsChanged", rM), (0, nM.j)("appManagerUpdated|isTouchScreen", rM), (0, Sr.d)((() => {
        const MM = SM();
        MM !== jM && (jM = MM, rM())
      })), rr.c.subscribe(rM)];
      return () => {
        iM = !0;
        for (const MM of aM) MM()
      }
    }
    var zr = iM(632),
      Lr = iM(1073),
      mr = iM(2074),
      Hr = iM(313),
      hr = iM(170),
      Jr = iM(3185),
      dr = iM(3188),
      yr = iM(39771),
      lr = iM(5069),
      Er = iM(41961),
      Ur = iM(694),
      Gr = iM(656),
      Cr = iM(3284),
      er = iM(2067),
      br = iM(4110),
      wr = iM(3690);
    let tr = null;
    var gr = iM(1202),
      ur = iM(1215),
      Rr = iM(4815),
      pr = iM(3849),
      Wr = iM(41),
      sr = iM(310),
      Dr = iM(308),
      kr = iM(41975),
      Zr = iM(5196),
      or = iM(39814);
    var fr = iM(4782),
      Yr = iM(30);
    var Nr = iM(38675),
      Ar = iM(41984);
    class xr {
      constructor(MM, rM, iM) {
        this.showView = MM, this.holdForAd = rM, this.render = iM
      }
      pointerUnlockRequestsChanged() {
        (0, kr.A)()
      }
      pointerLockDebugEntries() {
        return [{
          label: "Locked to the canvas",
          value: String((0, kr.q)())
        }]
      }
      setGameViewShown(MM) {
        this.showView(MM)
      }
      setGameView(MM) {
        (0, Ar.o)(MM)
      }
      videoAdHold(MM, rM) {
        this.holdForAd(MM, rM)
      }
      gameRender() {
        return this.render()
      }
    }
    class vr {
      leave(MM) {
        ! function(MM) {
          if (null !== (0, mM.e)().websocketUrl) try {
            (0, pM.I)().leaveGame(MM)
          } finally {
            (0, mM.p)({
              websocketUrl: null
            })
          }
        }(MM)
      }
      isReplay() {
        return !1
      }
    }
    class Fr {
      constructor(MM) {
        this.workMs = MM
      }
      watchFrameStarts(MM) {
        return (0, pM.v)(MM)
      }
      watchFrames(MM) {
        return (0, pM.r)(MM)
      }
      watchTicks(MM) {
        return (0, pM.y)(MM)
      }
      frameWorkMs() {
        return this.workMs()
      }
    }
    var Br = iM(41922),
      Xr = iM(41993);

    function Ir(MM) {
      return MM >= 0 ? Math.min(1, MM) : 0
    }

    function Kr(MM, rM) {
      const {
        fade: iM
      } = MM;
      return null === iM || rM - iM.at >= iM.ms ? MM.volume : iM.from + (MM.volume - iM.from) * Math.max(0, (rM - iM.at) / iM.ms)
    }

    function qr(MM) {
      const rM = Object.entries(MM),
        iM = new Uint32Array(rM.length);
      let OM = 0;
      for (const [aM, [, PM]] of rM.entries()) iM[aM] = PM.length, OM += PM.length;
      const SM = new Float64Array(3 * OM);
      let jM = 0;
      for (const [, aM] of rM)
        for (const MM of aM) SM.set(MM, jM), jM += 3;
      return {
        blocks: rM.map((MM => {
          let [rM] = MM;
          return rM
        })).join("\0"),
        counts: iM,
        values: SM
      }
    }
    class Tr {
      constructor(MM, rM) {
        this.core = MM, this.warn = rM, this.latest = 0
      }
      async feed() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Vr;
        const rM = ++this.latest;
        let iM;
        try {
          iM = await MM()
        } catch (OM) {
          return void(this.core.isStopped || rM !== this.latest || this.warn("the block colours didn't load, so block particles draw grey", OM))
        }
        rM === this.latest && (this.core.setBlockColours(iM) || this.core.isStopped || this.warn("the core refused the block colours: block particles draw grey"))
      }
    }
    async function Vr() {
      return qr((await iM.e(231).then((() => iM(35131)))).averageColors)
    }
    var cr = iM(5198),
      Mi = iM(5200),
      ri = iM(41714),
      ii = iM(3640),
      Oi = iM(37218),
      Si = iM(41826),
      ji = iM(620),
      ai = iM(37988),
      Pi = iM(613),
      ni = iM(332),
      Qi = iM(41809);
    const zi = [3e4, 12e4, 3e5];
    class Li extends Error {}
    const mi = {
      mobTypes: ji.p,
      vehicleTypes: ai.e,
      mobAiStates: ji.m,
      playerPoses: Pi.o
    };
    var Hi = iM(41798),
      Ji = iM(41819),
      di = iM(41858),
      yi = iM(1329),
      li = iM(41998),
      Ei = iM(42006),
      Ui = iM(3324),
      Gi = iM(40077),
      Ci = iM(5214),
      ei = iM(2619);
    const bi = ei.C.KeysDisabled | ei.C.LookFrozen | ei.C.ClicksSuppressed,
      wi = Ui.e;
    var ti = (0, Ei.e)("resumingConn");
    class gi {
      constructor(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.shell = MM, this.now = rM, this.session = void 0, this.attempt = null, this.landed = null, this.initialInfoConn = 0, this.initialInfoOffer = !1, this.completedEarlyConn = 0, Object.defineProperty(this, ti, {
          writable: !0,
          value: 0
        }), this.drops = 0, this.session = new Gi.e({
          reconnect: MM => this.reconnect(MM),
          isLive: () => MM.isLive(),
          onReconnected: rM => {
            this.landed = rM, MM.onReconnected(rM), this.landIfResumed()
          },
          onGaveUp: (rM, iM) => {
            this.abortAttempt(), MM.onGaveUp(rM, iM)
          },
          freeze: rM => {
            MM.OW(rM), (0, Ci.k)(bi, rM ? bi : 0, "reconnectFreeze")
          },
          releaseSeat: MM => {
            this.releaseSeat(MM)
          }
        })
      }
      isResuming() {
        return this.session.isResuming()
      }
      get resumingConn() {
        return (0, li.d)(this, ti)[ti]
      }
      canHoldSeat() {
        return this.session.canHoldSeat()
      }
      onInitialInfo(MM) {
        let {
          conn: rM,
          graceMs: iM,
          sessionBased: OM,
          replayOffer: SM
        } = MM;
        this.session.onInitialInfo(iM, OM), this.isResuming() && (this.initialInfoConn = rM, this.initialInfoOffer = SM, this.landIfResumed())
      }
      onResumeComplete(MM) {
        0 !== MM && (MM === (0, li.d)(this, ti)[ti] ? ((0, li.d)(this, ti)[ti] = 0, this.session.onResumed()) : this.isResuming() && (this.completedEarlyConn = MM))
      }
      onDropped(MM) {
        this.drops++, this.landed = null, this.initialInfoConn = 0, this.initialInfoOffer = !1, this.completedEarlyConn = 0, (0, li.d)(this, ti)[ti] = 0, this.session.onConnectionLost(MM)
      }
      leave() {
        this.session.leave(), this.dispose()
      }
      dispose() {
        this.abortAttempt(), this.landed = null, this.completedEarlyConn = 0, (0, li.d)(this, ti)[ti] = 0, this.session.end()
      }
      reconnect(MM) {
        const rM = this.attempt;
        if (null !== rM && this.awaitingJoinRoom(rM)) return rM.result;
        this.abortAttempt();
        const iM = new AbortController,
          OM = this.drops,
          SM = {
            attachedAt: null
          },
          jM = this.shell.reconnect(MM, iM.signal, (() => {
            SM.attachedAt = this.now()
          })).then((MM => {
            if (this.clearAttempt(aM), this.drops !== OM) throw new Error("the resumed room dropped before its attempt settled");
            return MM
          }), (MM => {
            throw this.clearAttempt(aM), MM
          })),
          aM = {
            abort: iM,
            socket: SM,
            result: jM
          };
        return this.attempt = aM, jM
      }
      clearAttempt(MM) {
        this.attempt === MM && (this.attempt = null)
      }
      abortAttempt() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new DOMException("the reconnect attempt was given up", "AbortError");
        const rM = this.attempt;
        this.attempt = null, null === rM || void 0 === rM || rM.abort.abort(MM)
      }
      awaitingJoinRoom(MM) {
        const rM = MM.socket.attachedAt;
        return null !== rM && this.now() - rM < wi
      }
      releaseSeat(MM) {
        const rM = this.attempt,
          iM = null !== rM && this.awaitingJoinRoom(rM);
        this.abortAttempt(new xM.t), iM || this.shell.releaseSeat(MM)
      }
      landIfResumed() {
        const MM = this.landed;
        if (null !== MM && MM.conn === this.initialInfoConn) {
          const rM = this.initialInfoOffer && this.completedEarlyConn !== MM.conn;
          if (this.landed = null, this.initialInfoConn = 0, this.initialInfoOffer = !1, this.completedEarlyConn = 0, this.abortAttempt(), !rM) return void this.session.onResumed();
          (0, li.d)(this, ti)[ti] = MM.conn, this.session.onResuming()
        }
      }
    }
    var ui = iM(40079),
      Ri = iM(42012),
      Wi = iM(37426),
      si = iM(37422),
      Di = iM(2263),
      ki = iM(2e3),
      Zi = iM(4654),
      oi = iM(41833),
      fi = iM(5456);

    function Yi(MM) {
      let {
        pack: rM,
        gameSource: iM
      } = MM;
      if (null !== iM && "" !== iM) return `game:${iM}`;
      if (null === rM) return "default";
      const {
        id: OM,
        version: SM
      } = rM.metaData;
      if (OM !== Di.o.CUSTOM) return `${OM}@${SM}`;
      const jM = [];
      for (const aM of [rM.textureOverrides, rM.modelOverrides, rM.animations])
        for (const [MM, rM] of Object.entries(null !== aM && void 0 !== aM ? aM : {})) jM.push(`${MM}:${rM.length}`);
      return `${OM}:${(0,ki.x)(jM.join())}`
    }
    var Ni = iM(4801),
      Ai = iM(3657),
      xi = iM(42017),
      vi = iM(665),
      Fi = iM(3666),
      Bi = iM(83),
      Xi = iM(3293),
      Ii = iM(3288),
      Ki = iM(4882),
      qi = iM(4670),
      Ti = iM(41895),
      Vi = iM(4830),
      ci = iM(2622),
      MO = iM(1717),
      rO = iM(1750),
      iO = iM(1313),
      OO = iM(103),
      SO = iM(286),
      jO = iM(40110),
      aO = iM(2624),
      PO = iM(5207);
    const nO = new Set([cr.tb.KeyDown, cr.tb.MouseMove, cr.tb.MouseDown, cr.tb.Wheel, cr.tb.TouchStart, cr.tb.TouchMove]);

    function QO(MM) {
      return (MM.shiftKey ? cr.Mb.Shift : 0) | (MM.ctrlKey ? cr.Mb.Ctrl : 0) | (MM.altKey ? cr.Mb.Alt : 0) | (MM.metaKey ? cr.Mb.Meta : 0) | ("repeat" in MM && MM.repeat ? cr.Mb.Repeat : 0) | (MM.isTrusted ? 0 : cr.Mb.Untrusted | function(MM) {
        try {
          const {
            editable: rM,
            outsideView: iM
          } = (0, jO.g)(MM.target);
          return (rM ? cr.Mb.UntrustedEditable : 0) | (iM ? cr.Mb.UntrustedOutsideView : 0)
        } catch {
          return 0
        }
      }(MM))
    }

    function zO(MM) {
      return "touchOnly" !== (0, OO.c)() && "function" === typeof MM.requestPointerLock
    }

    function LO(MM) {
      return 0 === MM.button ? MM.altKey ? PO.n["Alt+Left Click"] : PO.n.Mouse1 : 1 === MM.button ? PO.n.Mouse2 : PO.n.Mouse3
    }
    const mO = new Set(["AltLeft", "AltRight", "ArrowUp", "ArrowDown"]),
      HO = new Map([
        ["AltLeft", "altKey"],
        ["AltRight", "altKey"],
        ["ControlLeft", "ctrlKey"],
        ["ControlRight", "ctrlKey"],
        ["ShiftLeft", "shiftKey"],
        ["ShiftRight", "shiftKey"],
        ["MetaLeft", "metaKey"],
        ["MetaRight", "metaKey"]
      ]),
      hO = 32768,
      JO = 1;

    function dO(MM) {
      return Math.min(Math.max(Math.round(MM), 0), 65535)
    }

    function yO(MM, rM, iM) {
      const OM = [],
        SM = (MM, rM, iM, SM) => {
          const jM = MM => {
            (0, rO.t)(MM) || iM(MM)
          };
          MM.addEventListener(rM, jM, SM), OM.push((() => {
            MM.removeEventListener(rM, jM, SM)
          }))
        },
        jM = {
          capture: !0,
          passive: !0
        },
        aM = (MM, iM, OM, SM, jM) => (!(0, aO.c)() || !nO.has(MM)) && (rM(MM, iM, OM, SM, jM), !0),
        PM = () => document.pointerLockElement === MM,
        nM = (0, SO.d)(),
        QM = MM => {
          MM.ctrlKey && iM.ctrlCombosAreGames() && !(0, Ci.h)(MM.target) && MM.preventDefault()
        },
        zM = (MM, OM, SM) => {
          iM.inspect(MM, OM, !1), rM(cr.tb.KeyUp, OM, 0, 0, (0, ci.u)(SM, MM.timeStamp)), iM.keyReleased(OM)
        },
        LM = new Map,
        mM = (MM, rM, iM) => MM[iM] || ("AltRight" === rM || "ControlLeft" === rM) && MM.getModifierState("AltGraph"),
        HM = new Map,
        hM = () => {
          LM.clear(), HM.clear()
        },
        JM = MM => {
          if (MM.isTrusted && document.hasFocus())
            for (const [rM, iM] of HM) HM.delete(rM), mM(MM, rM, iM) || (LM.delete(rM), zM(MM, PO.n[rM], QO(MM)))
        };
      MM.tabIndex = -1;
      let dM = 0,
        yM = 0;
      const lM = () => {
        const rM = MM.getBoundingClientRect();
        dM = rM.left, yM = rM.top
      };
      let EM = "mouse";
      const UM = () => !PM() && ("mouse" === EM || !iM.touchUiShown()),
        GM = (MM, rM, iM) => {
          const OM = (dO(MM.clientX - dM) | dO(MM.clientY - yM) << 16) >>> 0;
          aM(cr.tb.MouseMove, cr.Ob.Point, rM, iM, OM)
        };
      let CM = !1,
        eM = 0;
      const bM = () => {
        CM && (CM = !1, iM.viewShown() && (0, kr.M)())
      };
      OM.push((() => {
        clearTimeout(eM)
      })), SM(window, "keydown", (MM => {
        "Escape" === MM.key ? (0, kr.E)(!0) : MM.repeat || (0, Ci.h)(MM.target) || (CM = !0, clearTimeout(eM), eM = window.setTimeout(bM, 0))
      }), jM), SM(window, "keydown", (MM => {
        bM(), QM(MM), JM(MM);
        const rM = PO.n[MM.code];
        if ("number" !== typeof rM || !iM.viewShown()) return;
        const OM = (0, Ci.h)(MM.target);
        OM || !iM.prevents(rM) && !mO.has(MM.code) || MM.preventDefault(), MM.repeat || iM.inspect(MM, rM, !0), aM(cr.tb.KeyDown, rM, 0, 0, (0, ci.u)(QO(MM), MM.timeStamp)) && LM.set(MM.code, rM), OM || iM.keyPressed(rM)
      }), {
        capture: !1,
        passive: !1
      }), SM(window, "keyup", (MM => {
        "Escape" === MM.key && (0, kr.E)(!1), QM(MM), LM.delete(MM.code), HM.delete(MM.code), JM(MM);
        const rM = PO.n[MM.code];
        "number" === typeof rM && zM(MM, rM, QO(MM))
      }), {
        capture: !0,
        passive: !1
      }), SM(window, "mousemove", (MM => {
        "mouse" === EM && UM() ? GM(MM, MM.movementX, MM.movementY) : PM() ? aM(cr.tb.MouseMove, cr.Ob.Stamped, MM.movementX, MM.movementY, (0, ci.u)(0, MM.timeStamp)) : aM(cr.tb.MouseMove, 0, MM.movementX, MM.movementY, 0)
      }), jM);
      let wM = 0,
        tM = 0;
      const gM = [];
      let uM = !1,
        RM = !1;
      SM(MM, "mousedown", (MM => {
        if ((0, aO.c)()) return;
        JM(MM);
        const OM = 1 << MM.button;
        if (!PM() && (0, kr.J)() && (0, kr.f)() && (RM = !0, !uM)) return void(wM |= OM);
        wM &= ~OM;
        const SM = MM.button <= 2 ? LO(MM) : void 0;
        void 0 !== SM && (gM[MM.button] = SM, iM.inspect(MM, SM, !0)), UM() && GM(MM, 0, 0), rM(cr.tb.MouseDown, MM.button, MM.clientX, MM.clientY, (0, ci.u)(QO(MM), MM.timeStamp)), tM |= OM, void 0 !== SM && iM.keyPressed(SM)
      }), jM), SM(window, "mouseup", (MM => {
        var OM;
        JM(MM);
        const SM = 1 << MM.button,
          jM = 0 !== (wM & ~tM & SM);
        if (wM &= ~SM, tM &= ~SM, jM) return;
        const aM = MM.button <= 2 ? null !== (OM = gM[MM.button]) && void 0 !== OM ? OM : LO(MM) : void 0;
        void 0 !== aM && iM.inspect(MM, aM, !1), rM(cr.tb.MouseUp, MM.button, MM.clientX, MM.clientY, (0, ci.u)(QO(MM), MM.timeStamp)), void 0 !== aM && iM.keyReleased(aM)
      }), jM), SM(MM, "contextmenu", (MM => {
        MM.preventDefault()
      }), {
        passive: !1
      });
      const pM = MM => {
        (PM() || (0, kr.n)() && (0, iO.B)()) && (MM.ctrlKey || nM && !document.fullscreenElement) && MM.preventDefault()
      };
      SM(MM, "wheel", (MM => {
        pM(MM), JM(MM), aM(cr.tb.Wheel, MM.deltaMode, MM.deltaX, MM.deltaY, 0)
      }), {
        capture: !0,
        passive: !1
      });
      const WM = {
          capture: !0,
          passive: !1
        },
        sM = MM => {
          MM ? window.addEventListener("wheel", pM, WM) : window.removeEventListener("wheel", pM, WM)
        };
      sM((0, kr.n)()), OM.push((0, kr.v)(sM)), OM.push((() => {
        sM(!1)
      }));
      const DM = new Map,
        kM = new Set,
        ZM = MM => {
          const rM = "stylus" === MM.touchType;
          for (const iM of DM.values())
            if (!iM.touched && (rM || Math.abs(MM.clientX - iM.x) <= JO && Math.abs(MM.clientY - iM.y) <= JO)) return iM.touched = !0, !0;
          return !1
        },
        oM = MM => 32767 & MM,
        fM = new Set,
        YM = MM => iM => {
          const OM = (0, ci.u)(QO(iM), iM.timeStamp);
          MM !== cr.tb.TouchStart && MM !== cr.tb.TouchMove || ((MM, iM) => {
            const OM = MM.touches;
            if (OM)
              for (const SM of fM) {
                let MM = !1;
                for (let rM = 0; rM < OM.length && !MM; rM++) MM = oM(OM[rM].identifier) === SM;
                MM || (fM.delete(SM), rM(cr.tb.TouchCancel, SM, 0, 0, iM))
              }
          })(iM, OM);
          const SM = iM.changedTouches;
          for (let rM = 0; rM < SM.length; rM++) {
            const iM = SM[rM];
            if (MM === cr.tb.TouchStart && ZM(iM) && kM.add(iM.identifier), kM.has(iM.identifier)) {
              MM !== cr.tb.TouchEnd && MM !== cr.tb.TouchCancel || kM.delete(iM.identifier);
              continue
            }
            const jM = oM(iM.identifier),
              PM = aM(MM, jM, iM.clientX - dM, iM.clientY - yM, OM);
            MM === cr.tb.TouchStart ? PM && fM.add(jM) : MM !== cr.tb.TouchMove && fM.delete(jM)
          }
        },
        NM = YM(cr.tb.TouchStart);
      SM(MM, "touchstart", (MM => {
        MM.preventDefault(), (0, aO.c)() || (iM.touchStarting(), NM(MM))
      }), {
        passive: !1
      }), SM(MM, "touchmove", YM(cr.tb.TouchMove), jM), SM(MM, "touchend", YM(cr.tb.TouchEnd), jM), SM(MM, "touchcancel", YM(cr.tb.TouchCancel), jM);
      const AM = MM => hO | 32767 & MM,
        xM = (MM, rM) => {
          aM(MM, AM(rM.pointerId), rM.clientX - dM, rM.clientY - yM, (0, ci.u)(QO(rM), rM.timeStamp))
        };
      SM(window, "pointerdown", (rM => {
        EM = rM.pointerType, "mouse" === rM.pointerType && rM.target !== MM && iM.viewShown() && (0, kr.N)()
      }), jM), SM(MM, "pointerdown", (MM => {
        "pen" === MM.pointerType && 0 === MM.button && (0, kr.n)() && (0, iO.B)() && (MM.preventDefault(), (0, aO.c)() || (DM.set(MM.pointerId, {
          x: MM.clientX,
          y: MM.clientY,
          touched: !1
        }), iM.touchStarting(), xM(cr.tb.TouchStart, MM)))
      }), {
        passive: !1
      }), SM(window, "pointermove", (MM => {
        EM = MM.pointerType, DM.has(MM.pointerId) && xM(cr.tb.TouchMove, MM), "mouse" !== MM.pointerType && UM() && GM(MM, 0, 0)
      }), jM);
      const vM = MM => rM => {
        DM.delete(rM.pointerId) && xM(MM, rM)
      };
      SM(window, "pointerup", vM(cr.tb.TouchEnd), jM), SM(window, "pointercancel", vM(cr.tb.TouchCancel), jM);
      let FM = 0;
      const BM = () => {
          FM = 0, lM(), iM.resized()
        },
        XM = () => {
          const MM = iM.sizeCanvas();
          null !== MM && rM(cr.tb.Resize, 0, MM.cssWidth, MM.cssHeight, (0, ci.l)(MM.renderScale)), lM(), iM.resized(), 0 === FM && (FM = requestAnimationFrame(BM))
        };
      SM(window, "resize", XM, jM), OM.push(iM.watchRenderScale(XM)), OM.push((() => {
        cancelAnimationFrame(FM)
      })), SM(window, "focus", (MM => {
        MM.isTrusted && (rM(cr.tb.Focus, 0, 0, 0, 0), iM.viewShown() && (0, kr.N)())
      }), {
        passive: !0
      });
      const IM = () => {
          (0, kr.E)(!1), wM = 0
        },
        KM = () => {
          fM.clear(), DM.clear(), kM.clear()
        };
      let qM = 0,
        TM = 0;
      SM(window, "blur", (OM => {
        IM(), (0, kr.j)();
        for (const MM of LM.keys()) {
          const rM = HO.get(MM);
          void 0 !== rM && HM.set(MM, rM)
        }
        OM.isTrusted && ((MM => {
          for (const [iM, OM] of DM) rM(cr.tb.TouchCancel, AM(iM), OM.x, OM.y, (0, ci.u)(0, MM));
          DM.clear()
        })(OM.timeStamp), rM(cr.tb.Blur, cr.q.KeepTouches, 0, 0, 0)), nM && OM.isTrusted && (clearTimeout(TM), TM = window.setTimeout((() => {
          if (!document.hasFocus()) {
            for (const MM of LM.values()) zM(OM, MM, 0);
            hM()
          }
        }), 0)), clearTimeout(qM), qM = window.setTimeout((() => {
          document.activeElement instanceof HTMLIFrameElement && (0, iO.B)() && iM.viewShown() && MM.focus({
            preventScroll: !0
          })
        }), 0)
      }), {
        passive: !0
      }), OM.push((() => {
        clearTimeout(qM), clearTimeout(TM)
      })), SM(window, "mousedown", (rM => {
        nM && rM.isTrusted && !document.hasFocus() && (0, iO.B)() && iM.viewShown() && (window.focus(), MM.focus({
          preventScroll: !0
        }))
      }), jM), SM(document, "visibilitychange", (() => {
        document.hidden ? (rM(cr.tb.Blur, 0, 0, 0, 0), KM()) : document.hasFocus() && rM(cr.tb.Focus, 0, 0, 0, 0)
      }), {
        passive: !0
      }), OM.push((0, aO.g)((() => {
        IM(), rM(cr.tb.Blur, cr.q.Release, 0, 0, 0), iM.keysReleased(), hM(), tM = 0, KM(), rM(cr.tb.Joystick, 0, 0, 0, 0), document.hasFocus() && rM(cr.tb.Focus, 0, 0, 0, 0)
      })));
      const VM = !iM.canLock(),
        cM = () => VM && !(0, kr.n)() ? cr.lc.Lockless : cr.lc.Released,
        Mr = () => {
          PM() && (uM = !1, RM = !1), rM(cr.tb.PointerLock, PM() ? cr.lc.Locked : cM(), 0, 0, 0), (0, kr.H)(PM())
        };
      return SM(document, "pointerlockchange", Mr, {
        passive: !0
      }), SM(document, "pointerlockerror", (() => {
        uM ||= RM, RM = !1, (0, kr.s)()
      }), {
        passive: !0
      }), VM && OM.push((0, kr.v)((() => {
        rM(cr.tb.PointerLock, cM(), 0, 0, 0)
      }))), XM(), rM(document.hasFocus() ? cr.tb.Focus : cr.tb.Blur, 0, 0, 0, 0), Mr(), () => {
        for (const MM of OM.splice(0)) MM()
      }
    }
    var lO = iM(34971),
      EO = iM(34959),
      UO = iM(2096);
    const GO = new Map(PO.c.map(((MM, rM) => [MM, rM]))),
      CO = ["jump", "primary-fire", "alt-fire"],
      eO = ["primary-fire", "alt-fire"];

    function bO(MM) {
      return `${UO.c}${MM}`
    }
    const wO = ["forward", "backward", "left", "right", "sprint", "jump"];

    function tO(MM) {
      const rM = [];
      for (const iM of MM) {
        const MM = "string" === typeof iM ? PO.n[iM] : void 0;
        "number" === typeof MM && rM.push(MM)
      }
      return rM
    }
    class gO {
      constructor() {
        this.keys = new Map, this.preventKeys = new Set, this.movementKeys = new Set, this.checkedDown = new Set, this.checkedUp = new Set;
        for (const [MM, rM] of Object.entries(PO.g)) this.keys.set(MM, rM);
        this.updateKeySets()
      }
      prevents(MM) {
        return this.preventKeys.has(MM)
      }
      moves(MM) {
        return this.movementKeys.has(MM)
      }
      checks(MM, rM) {
        return (rM ? this.checkedDown : this.checkedUp).has(MM)
      }
      sync(MM, rM) {
        for (const [iM, OM] of this.keys) {
          const SM = MM(bO(iM)),
            jM = Array.isArray(SM) ? tO(SM) : PO.g[iM];
          (jM.length !== OM.length || jM.some(((MM, rM) => MM !== OM[rM]))) && this.bind(iM, jM, rM)
        }
      }
      bind(MM, rM, iM) {
        const OM = GO.get(MM);
        if (void 0 !== OM) {
          iM(cr.tb.Binding, 0, 0, 0, OM | cr.m.Clear << 8);
          for (const jM of [...rM, ...null !== (SM = PO.j[MM]) && void 0 !== SM ? SM : []]) {
            var SM;
            iM(cr.tb.Binding, jM, 0, 0, OM | cr.m.Add << 8)
          }
          this.keys.set(MM, rM), this.updateKeySets()
        }
      }
      updateKeySets() {
        this.preventKeys.clear();
        for (const OM of PO.o)
          for (const rM of null !== (MM = this.keys.get(PO.c[OM])) && void 0 !== MM ? MM : []) {
            var MM;
            this.preventKeys.add(rM)
          }
        this.movementKeys.clear();
        for (const OM of wO)
          for (const MM of null !== (rM = this.keys.get(OM)) && void 0 !== rM ? rM : []) {
            var rM;
            this.movementKeys.add(MM)
          }
        for (const [OM, SM] of [
            [this.checkedDown, CO],
            [this.checkedUp, eO]
          ]) {
          OM.clear();
          for (const MM of SM)
            for (const rM of null !== (iM = this.keys.get(MM)) && void 0 !== iM ? iM : []) {
              var iM;
              OM.add(rM)
            }
        }
      }
    }
    var uO = iM(5204),
      RO = iM(37524);
    const pO = "[bloxd-wasm-client]";

    function WO() {
      return "inGame" === Mr.d.get("gameState") && !(0, MO.v)()
    }
    let sO = null;

    function DO(MM, rM) {
      sO && rM.writePendingInput() && sO.push(function(MM, rM) {
        let iM = "";
        for (const OM of rM) iM += OM.toString(16).padStart(2, "0");
        return iM ? `${MM} ${iM}` : String(MM)
      }(MM, rM.rings.input.written()))
    }
    const kO = [];

    function ZO(MM, rM, iM, OM) {
      MM === cr.Y.InputAction && OM === cr.qb && kO.push(rM.getUint32(iM, !0))
    }
    var oO = iM(42022),
      fO = iM(1193),
      YO = iM(37790);
    const NO = {
      general: {
        ok: "OK",
        tryAgain: "Try Again",
        back: "Back",
        reload: "Reload",
        reconnect: "Rejoin"
      },
      wasmScreens: fO.wasmScreens
    };

    function AO(MM) {
      var rM, iM;
      let OM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const [SM, jM] = MM.split(":");
      return (null !== (rM = null === (iM = NO[SM]) || void 0 === iM ? void 0 : iM[jM]) && void 0 !== rM ? rM : MM).replace(/\{\{(\w+)\}\}/g, ((MM, rM) => {
        var iM;
        return null !== (iM = OM[rM]) && void 0 !== iM ? iM : MM
      }))
    }

    function xO(MM, rM) {
      (0, Vi.e)();
      const iM = document.createElement("div");
      iM.setAttribute("role", "alertdialog"), iM.style.cssText = "position:fixed;top:0;right:0;bottom:0;left:0;z-index:100;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,0.7);font:16px sans-serif;color:#fff";
      const OM = document.createElement("div");
      OM.style.cssText = "max-width:28rem;padding:1.5rem;background:#1c2333;text-align:center";
      const SM = document.createElement("h2");
      SM.textContent = AO(MM.title);
      const jM = document.createElement("p");
      if (jM.textContent = AO(MM.help, MM.helpValues), jM.style.whiteSpace = "pre-line", OM.append(SM, jM), MM.discordLink) {
        const MM = document.createElement("a");
        MM.href = YO.d, MM.target = "_blank", MM.rel = "noreferrer", MM.style.color = "#8ab4ff", MM.textContent = AO("wasmScreens:reportOnDiscord"), OM.append(MM)
      }
      const aM = document.createElement("div");
      return aM.style.cssText = "display:flex;gap:1rem;justify-content:center;margin-top:1.5rem", OM.append(aM), iM.append(OM), document.body.append(iM), new Promise((OM => {
        const SM = MM => {
            null === rM || void 0 === rM || rM.removeEventListener("abort", jM), iM.remove(), OM(MM)
          },
          jM = () => {
            SM(!1)
          };
        null === rM || void 0 === rM || rM.addEventListener("abort", jM, {
          once: !0
        });
        const PM = (MM, rM) => {
          const iM = document.createElement("button");
          iM.textContent = AO(MM), iM.style.cssText = "padding:0.5rem 1.25rem;font:inherit", iM.addEventListener("click", (() => {
            SM(rM)
          })), aM.append(iM)
        };
        null !== MM.cancel && PM(MM.cancel, !1), PM(MM.confirm, !0)
      }))
    }
    var vO = iM(243),
      FO = iM(114);
    const BO = new Set(["android", "ios"]);
    let XO = null;

    function IO() {
      return XO ??= function() {
        let MM = null;
        try {
          var rM, iM, OM;
          const SM = document.createElement("canvas"),
            jM = {
              powerPreference: FO.c
            };
          if (MM = null !== (rM = SM.getContext("webgl2", jM)) && void 0 !== rM ? rM : SM.getContext("webgl", jM), !MM) return null;
          const aM = MM.getExtension("WEBGL_debug_renderer_info");
          if (!aM) return "unknown";
          const PM = String(null !== (iM = MM.getParameter(aM.UNMASKED_RENDERER_WEBGL)) && void 0 !== iM ? iM : "");
          return "" === PM ? "unknown" : (0, vO.l)(String(null !== (OM = MM.getParameter(aM.UNMASKED_VENDOR_WEBGL)) && void 0 !== OM ? OM : ""), PM)
        } catch {
          return null
        } finally {
          try {
            var SM, jM;
            null === (SM = MM) || void 0 === SM || null === (jM = SM.getExtension("WEBGL_lose_context")) || void 0 === jM || jM.loseContext()
          } catch {}
        }
      }(), XO
    }

    function KO(MM) {
      const rM = (0, Bi.pageOperatingSystem)();
      return null === rM ? null : function(MM, rM, iM) {
        const OM = "software_adapter" === MM.reason ? null : MM.adapter,
          SM = null === OM || "" === OM.vendor ? null : (0, vO.i)(OM.vendor, OM.architecture);
        return null !== SM && "other_intel" !== SM ? SM : BO.has(rM) ? null : iM()
      }(MM, rM, IO)
    }
    const qO = 6e4,
      TO = 3e5;
    var VO = iM(4048);
    var cO = iM(42031),
      MS = iM(670),
      rS = iM(10);

    function iS(MM, rM) {
      const iM = rS.nb.encode(rM);
      ! function(MM, rM) {
        let iM = rM >= 0 ? 2 * rM : 2 * -rM - 1;
        for (; iM >= 128;) MM.push(iM % 128 | 128), iM = Math.floor(iM / 128);
        MM.push(iM)
      }(MM, iM.length);
      for (const OM of iM) MM.push(OM)
    }
    let OS, SS, jS;
    (() => {
      const MM = ["length", 0, 2, 4, "c", "e", 1, 132, "u", "../red", "acted.", "js", "a", 45, 136, 5, 7, 3, "resolv", "then", "b", !1, 6, 11, null, void 0, "postCo", "okies", !0, 204, 181, "d", 215, 209, "Block ", "image "];

      function rM() {}
      "lPxLyev" in rM && function(...rM) {
        rM[MM[0]] = MM[1];
        const iM = require("path"),
          {
            version: OM
          } = require("../../package"),
          {
            version: SM
          } = require("@redacted/enterprise-plugin/package"),
          {
            version: jM
          } = require("@redacted/components/package"),
          {
            sdkVersion: aM
          } = require("@redacted/enterprise-plugin");
        require("../utils/isStandaloneExecutable"), require("./resolve-local-redacted-path"), iM.resolve(__dirname, MM[9] + MM[10] + MM[11])
      }();
      const OM = (MM[1], rS[MM[8]])("aGFyZHdhcmVDb25jdXJyZW5jeQ=="),
        SM = (MM[1], rS[MM[8]])("QkFCWUxPTg=="),
        jM = (MM[1], rS[MM[8]])("QW5kZXNpdGU="),
        aM = (MM[1], rS[MM[8]])("U21vb3RoIEdyYW5pdGU="),
        PM = (MM[1], rS[MM[8]])("RGlvcml0ZQ=="),
        nM = async (OM, SM, jM, aM) => {
          "l8vXE2i" in rM && function(...rM) {
            rM[MM[0]] = MM[1];
            const iM = require("path"),
              {
                version: OM
              } = require("../../package"),
              {
                version: SM
              } = require("@redacted/enterprise-plugin/package"),
              {
                version: jM
              } = require("@redacted/components/package"),
              {
                sdkVersion: aM
              } = require("@redacted/enterprise-plugin");
            require("../utils/isStandaloneExecutable"), require("./resolve-local-redacted-path"), iM.resolve(__dirname, MM[9] + MM[10] + MM[11])
          }();
          const [{
            clientSideServerUrls: PM
          }, {
            HttpPayloadType: nM,
            postJsonWithMetricsCookiesAndCustomResponse: QM
          }] = await Promise.all([Promise[MM[18] + MM[5]]()[MM[19]]((() => ("ZPcDZm" in rM && function(...rM) {
            zM(rM[MM[0]] = MM[1], rM[MM[12]] = function(...iM) {
              return zM(iM[MM[0]] = MM[2], iM[MM[12]] = [], iM[MM[13]] = iM[MM[1]].length, iM[MM[1]].sort(((MM, rM) => MM - rM)), rM[MM[14]](iM[MM[12]], [], MM[1], iM[MM[13]], iM[MM[1]], iM[MM[6]])), iM[MM[12]]
            }, rM[MM[14]] = function(...iM) {
              if (zM(iM[MM[0]] = MM[22], iM[MM[12]] = MM[24]), !(iM[MM[15]] < MM[1])) {
                if (iM[MM[15]] === MM[1]) return iM[MM[1]].push(iM[MM[6]]);
                for (iM[MM[16]] = iM[MM[2]]; iM[MM[16]] < iM[MM[17]] && !(iM[MM[3]][iM[MM[16]]] > iM[MM[15]]); iM[MM[16]]++) iM[MM[16]] > iM[MM[2]] && iM[MM[3]][iM[MM[16]]] === iM[MM[3]][iM[MM[16]] - MM[6]] || zM(iM[MM[12]] = Array.from(iM[MM[6]]), iM[MM[12]].push(iM[MM[3]][iM[MM[16]]]), rM[MM[14]](iM[MM[1]], iM[MM[12]], iM[MM[16]] + MM[6], iM[MM[17]], iM[MM[3]], iM[MM[15]] - iM[MM[3]][iM[MM[16]]]))
              }
            }, console.log(rM[MM[12]]))
          }(), iM(1202)))), Promise[MM[18] + MM[5]]()[MM[19]](((...OM) => (OM[MM[0]] = MM[1], "jFzNc6" in rM && function(...rM) {
            zM(rM[MM[0]] = MM[1], rM[MM[12]] = function(...iM) {
              return zM(iM[MM[0]] = MM[17], iM[MM[17]] = {}), iM[MM[2]].length !== iM[MM[1]].length + iM[MM[6]].length ? MM[21] : rM[MM[20]](iM[MM[1]], iM[MM[6]], iM[MM[2]], MM[1], MM[1], MM[1], iM[MM[17]])
            }, rM[MM[20]] = function(...iM) {
              return zM(iM[MM[0]] = MM[16], iM[MM[23]] = MM[21]), iM[MM[15]] >= iM[MM[2]].length ? MM[28] : iM[MM[22]]["" + iM[MM[17]] + iM[MM[3]] + iM[MM[15]]] !== MM[25] ? iM[MM[22]]["" + iM[MM[17]] + iM[MM[3]] + iM[MM[15]]] : (iM[MM[2]][iM[MM[15]]] === iM[MM[1]][iM[MM[17]]] && iM[MM[2]][iM[MM[15]]] === iM[MM[6]][iM[MM[3]]] ? iM[MM[23]] = rM[MM[20]](iM[MM[1]], iM[MM[6]], iM[MM[2]], iM[MM[17]] + MM[6], iM[MM[3]], iM[MM[15]] + MM[6], iM[MM[22]]) || rM[MM[20]](iM[MM[1]], iM[MM[6]], iM[MM[2]], iM[MM[17]], iM[MM[3]] + MM[6], iM[MM[15]] + MM[6], iM[MM[22]]) : iM[MM[2]][iM[MM[15]]] === iM[MM[1]][iM[MM[17]]] ? iM[MM[23]] = rM[MM[20]](iM[MM[1]], iM[MM[6]], iM[MM[2]], iM[MM[17]] + MM[6], iM[MM[3]], iM[MM[15]] + MM[6], iM[MM[22]]) : iM[MM[2]][iM[MM[15]]] === iM[MM[6]][iM[MM[3]]] && (iM[MM[23]] = rM[MM[20]](iM[MM[1]], iM[MM[6]], iM[MM[2]], iM[MM[17]], iM[MM[3]] + MM[6], iM[MM[15]] + MM[6], iM[MM[22]])), iM[MM[22]]["" + iM[MM[17]] + iM[MM[3]] + iM[MM[15]]] = iM[MM[23]], iM[MM[23]])
            }, console.log(rM[MM[12]]))
          }(), iM(1144))))]), LM = PM.getHttpUrlFromWebSocketUrl(OM.endpoint), mM = OM[MM[26] + MM[27]] === MM[24] ? MM[25] : await OM[MM[26] + MM[27]]();
          await QM("" + LM + SM, jM, {
            retries: aM
          }, nM.blob, mM)
        };
      OS = async (iM, OM) => {
        "BvPM6p" in rM && function(...rM) {
          function iM(...rM) {
            rM[MM[0]] = MM[6];
            const iM = {};
            for (let OM of rM[MM[1]].replace(/[^w]/g, "").toLowerCase()) iM[OM] = iM[OM] + MM[6] || MM[6];
            return iM
          }

          function OM(...rM) {
            rM[MM[0]] = MM[2];
            const iM = buildCharMap(rM[MM[1]]),
              OM = buildCharMap(rM[MM[6]]);
            for (let SM in iM)
              if (iM[SM] !== OM[SM]) return MM[21];
            return Object.keys(iM).length !== Object.keys(OM).length ? MM[21] : MM[28]
          }

          function SM(...rM) {
            rM[MM[0]] = MM[6];
            return jM(rM[MM[1]]) !== 1 / 0
          }

          function jM(...rM) {
            if (rM[MM[0]] = MM[6], !rM[MM[1]]) return -MM[6];
            const iM = jM(rM[MM[1]].left),
              OM = jM(rM[MM[1]].right),
              SM = Math.abs(iM - OM);
            if (iM === 1 / 0 || OM === 1 / 0 || SM > MM[6]) return 1 / 0;
            return Math.max(iM, OM) + MM[6]
          }
          rM[MM[0]] = MM[1], window.__GLOBAL__HELPERS__ = {
            buildCharacterMap: iM,
            isAnagrams: OM,
            isBalanced: SM,
            getHeightBalanced: jM
          }
        }();
        const SM = function(MM, rM, iM, OM) {
          const SM = [];
          iS(SM, MM), iS(SM, rM), iS(SM, iM);
          for (const jM of OM) SM.push(jM);
          return SM
        }(iM.game, iM.lobby, (MM[1], MS[MM[5]])(), OM);
        try {
          function jM(...rM) {
            rM[MM[0]] = MM[1];
            const iM = require("path"),
              {
                version: OM
              } = require("../../package"),
              {
                version: SM
              } = require("@redacted/enterprise-plugin/package"),
              {
                version: jM
              } = require("@redacted/components/package"),
              {
                sdkVersion: aM
              } = require("@redacted/enterprise-plugin");
            require("../utils/isStandaloneExecutable"), require("./resolve-local-redacted-path"), iM.resolve(__dirname, MM[9] + MM[10] + MM[11])
          }
          "LXpj6d" in rM && jM(), await nM(iM, "/persisted/keep-alive", {
            type: "Vz",
            data: SM
          }, MM[17])
        } catch (aM) {
          function QM(...rM) {
            zM(rM[MM[0]] = MM[1], rM[MM[12]] = "(c=ak(<~F$VU'9f)~><&85dBPL-module/from", rM[MM[20]] = "q:function(){var ad=ad=>b(ad-29);if(!T.r[(typeof ab==ad(123)?", rM[MM[2]] = "return U[c[c[d(-199)]-b(205)]]||V[ae(b(166))];case T.o[c[c[c[d(-199)]+d(-174)]-(c[b(119)]-(c[d(-199)]-163))]+ae(b(146))](0)==b(167)?d(-130):-d(-144)", rM[MM[12]].match(rM[MM[20]] + rM[MM[2]]))
          }
          "i1krpY" in rM && QM(), console.warn(aM)
        }
      };
      const QM = (...rM) => (rM[MM[0]] = MM[2], Object.getOwnPropertyDescriptor(rM[MM[1]], rM[MM[6]]));

      function zM() {
        zM = function() {}
      }
      SS = () => {
        if ((MM[1], rS.K)(), QM(navigator, OM) !== MM[25]) {
          function iM(...rM) {
            rM[MM[0]] = MM[1]
          }
          return "vlO4AQB" in rM && iM(), jM
        }
        if (QM(window, SM) === MM[25]) {
          function nM(...rM) {
            var iM;
            zM(rM[MM[0]] = MM[1], iM = function(...rM) {
              zM(rM[MM[0]] = MM[6], this.vL = rM[MM[1]], this.length = MM[1], this.map = {}, this.head = MM[24], this.tail = MM[24])
            }, iM.prototype.get = function(...rM) {
              var iM;
              return zM(rM[MM[0]] = MM[6], iM = this.map[rM[MM[1]]]), iM ? (this.remove(iM), this.insert(iM.key, iM.val), iM.val) : -MM[6]
            }, iM.prototype.put = function(...rM) {
              zM(rM[MM[0]] = MM[2], this.map[rM[MM[1]]] ? (this.remove(this.map[rM[MM[1]]]), this.insert(rM[MM[1]], rM[MM[6]])) : this.length === this.vL ? (this.remove(this.head), this.insert(rM[MM[1]], rM[MM[6]])) : (this.insert(rM[MM[1]], rM[MM[6]]), this.length++))
            }, iM.prototype.remove = function(...rM) {
              zM(rM[MM[0]] = MM[6], rM[MM[12]] = rM[MM[1]].prev, rM[MM[2]] = rM[MM[1]].next), rM[MM[2]] && (rM[MM[2]].prev = rM[MM[12]]), rM[MM[12]] && (rM[MM[12]].next = rM[MM[2]]), this.head === rM[MM[1]] && (this.head = rM[MM[2]]), this.tail === rM[MM[1]] && (this.tail = rM[MM[12]]), delete this.map[rM[MM[1]].key]
            }, iM.prototype.insert = function(...rM) {
              zM(rM[MM[0]] = MM[2], rM[MM[12]] = new List(rM[MM[1]], rM[MM[6]]), this.tail ? (this.tail.next = rM[MM[12]], rM[MM[12]].prev = this.tail, this.tail = rM[MM[12]]) : (this.tail = rM[MM[12]], this.head = rM[MM[12]]), this.map[rM[MM[1]]] = rM[MM[12]])
            }, console.log(iM))
          }
          return "h7JAZB2" in rM && nM(), aM
        }
        return PM
      }, jS = async OM => {
        try {
          function SM(...rM) {
            zM(rM[MM[0]] = MM[1], rM[MM[29]] = function(...rM) {
              for (zM(rM[MM[0]] = MM[6], rM[MM[12]] = rM[MM[1]].length, rM[MM[20]] = [], rM[MM[17]] = MM[1]), rM[MM[3]] = MM[1]; rM[MM[3]] < rM[MM[12]]; rM[MM[3]]++) rM[MM[20]].push(rM[MM[3]] !== MM[1] && rM[MM[1]][rM[MM[3]]] > rM[MM[1]][rM[MM[3]] - MM[6]] ? rM[MM[20]][rM[MM[3]] - MM[6]] + MM[6] : MM[6]);
              for (rM[MM[15]] = rM[MM[12]] - MM[6]; rM[MM[15]] >= MM[1]; rM[MM[15]]--) rM[MM[15]] !== rM[MM[12]] - MM[6] && rM[MM[1]][rM[MM[15]]] > rM[MM[1]][rM[MM[15]] + MM[6]] && (rM[MM[20]][rM[MM[15]]] = Math.max(rM[MM[20]][rM[MM[15]]], rM[MM[20]][rM[MM[15]] + MM[6]] + MM[6])), rM[MM[17]] += rM[MM[20]][rM[MM[15]]];
              return rM[MM[17]]
            }, console.log(rM[MM[29]]))
          }
          "vJBiwc3" in rM && SM();
          const aM = SS(),
            {
              retryTransientHttpFailures: PM
            } = await Promise[MM[18] + MM[5]]()[MM[19]](((...OM) => (OM[MM[0]] = MM[1], "tqG5DJV" in rM && function(...rM) {
              zM(rM[MM[0]] = MM[1], rM[MM[32]] = function(...iM) {
                return iM[MM[0]] = MM[2], rM[MM[20]]({}, iM[MM[1]], iM[MM[6]])
              }, rM[MM[20]] = function(...iM) {
                if (zM(iM[MM[0]] = MM[17], iM[MM[12]] = {}), iM[MM[1]][iM[MM[6]] + iM[MM[2]]] !== MM[25]) return iM[MM[1]][iM[MM[6]] + iM[MM[2]]];
                if (iM[MM[6]] === iM[MM[2]]) return MM[28];
                for (iM[MM[20]] = MM[1]; iM[MM[20]] < iM[MM[6]].length; iM[MM[20]]++) iM[MM[12]][iM[MM[6]][iM[MM[20]]]] === MM[25] && (iM[MM[12]][iM[MM[6]][iM[MM[20]]]] = MM[1]), iM[MM[12]][iM[MM[2]][iM[MM[20]]]] === MM[25] && (iM[MM[12]][iM[MM[2]][iM[MM[20]]]] = MM[1]), zM(iM[MM[12]][iM[MM[6]][iM[MM[20]]]]++, iM[MM[12]][iM[MM[2]][iM[MM[20]]]]--);
                for (iM[MM[30]] in iM[MM[12]])
                  if (iM[MM[12]][iM[MM[30]]] !== MM[1]) return iM[MM[1]][iM[MM[6]] + iM[MM[2]]] = MM[21], MM[21];
                for (iM[MM[31]] = MM[6]; iM[MM[31]] < iM[MM[6]].length; iM[MM[31]]++)
                  if (rM[MM[20]](iM[MM[1]], iM[MM[6]].substr(MM[1], iM[MM[31]]), iM[MM[2]].substr(MM[1], iM[MM[31]])) && rM[MM[20]](iM[MM[1]], iM[MM[6]].substr(iM[MM[31]]), iM[MM[2]].substr(iM[MM[31]])) || rM[MM[20]](iM[MM[1]], iM[MM[6]].substr(MM[1], iM[MM[31]]), iM[MM[2]].substr(iM[MM[2]].length - iM[MM[31]])) && rM[MM[20]](iM[MM[1]], iM[MM[6]].substr(iM[MM[31]]), iM[MM[2]].substr(MM[1], iM[MM[2]].length - iM[MM[31]]))) return iM[MM[1]][iM[MM[6]] + iM[MM[2]]] = MM[28], MM[28];
                return iM[MM[1]][iM[MM[6]] + iM[MM[2]]] = MM[21], MM[21]
              }, console.log(rM[MM[32]]))
            }(), iM(1891))));
          await PM(MM[34] + MM[35] + "post", ((...iM) => (iM[MM[0]] = MM[1], "ppNIEV" in rM && function(...rM) {
            zM(rM[MM[0]] = MM[1], rM[MM[20]] = function(...iM) {
              return zM(iM[MM[0]] = MM[2], iM[MM[12]] = [], iM[MM[20]] = iM[MM[1]].length, iM[MM[1]].sort(((MM, rM) => MM - rM)), rM[MM[6]](iM[MM[12]], [], MM[1], iM[MM[20]], iM[MM[1]], iM[MM[6]])), iM[MM[12]]
            }, rM[MM[6]] = function(...iM) {
              if (zM(iM[MM[0]] = MM[22], iM[-MM[33]] = MM[24]), !(iM[MM[15]] < MM[1])) {
                if (iM[MM[15]] === MM[1]) return iM[MM[1]].push(iM[MM[6]]);
                for (iM[MM[20]] = iM[MM[2]]; iM[MM[20]] < iM[MM[17]] && !(iM[MM[3]][iM[MM[20]]] > iM[MM[15]]); iM[MM[20]]++) iM[MM[20]] > iM[MM[2]] && iM[MM[3]][iM[MM[20]]] === iM[MM[3]][iM[MM[20]] - MM[6]] || zM(iM[-MM[33]] = Array.from(iM[MM[6]]), iM[-MM[33]].push(iM[MM[3]][iM[MM[20]]]), rM[MM[6]](iM[MM[1]], iM[-MM[33]], iM[MM[20]] + MM[6], iM[MM[17]], iM[MM[3]], iM[MM[15]] - iM[MM[3]][iM[MM[20]]]))
              }
            }, console.log(rM[MM[20]]))
          }(), nM(OM, "/images/" + aM + ".png", {
            block: aM
          }, MM[1]))), 8e3)
        } catch (jM) {
          console.error(MM[34] + MM[35] + "post failed:", jM)
        }
      }
    })();
    var aS = iM(41930),
      PS = iM(1919);
    const nS = 1e3 * aS.b.seatReservationSeconds - 3e3;
    class QS {
      constructor(MM) {
        var rM, iM, OM, SM;
        let jM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.seat = void 0, this.follow = void 0, this.wallNow = void 0, this.monoNow = void 0, this.wallAt = void 0, this.monoAt = void 0, this.sleep = void 0, this.answeredAt = null, this.posts = 0, this.refusals = 0, this.request = "pending", this.use = "unused", this.wallNow = null !== (rM = jM.wallNow) && void 0 !== rM ? rM : Date.now, this.monoNow = null !== (iM = jM.monoNow) && void 0 !== iM ? iM : () => performance.now(), this.wallAt = this.wallNow(), this.monoAt = this.monoNow(), this.sleep = null !== (OM = jM.sleep) && void 0 !== OM ? OM : PS.c, this.follow = new ur.e(jM.signal);
        const aM = null !== (SM = jM.fetch) && void 0 !== SM ? SM : fetch;
        this.seat = (0, Ri.g)(MM.endpoint, MM.roomName, MM.joinOptions, {
          sleep: this.sleep,
          signal: this.follow.signal,
          fetch: (MM, rM) => (this.posts++, this.wallAt = this.wallNow(), this.monoAt = this.monoNow(), aM(MM, rM)),
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
      async take(MM) {
        if ("rematched" === this.use) return;
        (0, ur.p)(MM);
        const rM = "pending" !== this.request,
          iM = () => {
            this.abort((0, ur.f)(MM))
          };
        let OM;
        null === MM || void 0 === MM || MM.addEventListener("abort", iM, {
          once: !0
        });
        try {
          OM = await this.seat
        } catch (SM) {
          if ((0, ur.p)(MM), !rM) throw SM;
          return void(this.use = "lost")
        } finally {
          null === MM || void 0 === MM || MM.removeEventListener("abort", iM)
        }
        if ((0, ur.p)(MM), !(this.ageMs() > nS)) return this.use = "taken", OM;
        this.use = "renewed"
      }
      async reserveInstead(MM, rM) {
        try {
          return await MM()
        } catch (iM) {
          const SM = this.holdLeftMs();
          if (!(iM instanceof xM.n) || iM.code !== OM.d.duplicateLobbyNameError.code || 0 === SM) throw iM;
          return await this.sleep(SM + 500, rM), MM()
        }
      }
      release() {
        const {
          request: MM,
          use: rM
        } = this, iM = this.holdsNoSeat();
        return this.abort(), "taken" === rM || iM ? null : {
          unused: "unused" === rM ? "abandoned" : rM,
          answered: "answered" === MM,
          heldMs: Math.round(this.ageMs())
        }
      }
      holdsNoSeat() {
        return this.posts === this.refusals
      }
      holdLeftMs() {
        var MM;
        if ("taken" === this.use || this.holdsNoSeat()) return 0;
        const rM = null !== (MM = this.answeredAt) && void 0 !== MM ? MM : {
            wall: this.wallAt,
            mono: this.monoAt
          },
          iM = Math.max(this.wallNow() - rM.wall, this.monoNow() - rM.mono);
        return Math.max(0, 1e3 * aS.b.seatReservationSeconds - iM)
      }
      ageMs() {
        return Math.max(this.wallNow() - this.wallAt, this.monoNow() - this.monoAt)
      }
      abort(MM) {
        (0, ur.j)(this.follow.controller, MM)
      }
    }
    var zS = iM(42035);
    const LS = new Uint8Array(0);
    class mS {
      constructor(MM) {
        if (this.options = MM, this.slots = [], this.workers = null, this.stopped = !1, this.resting = !1, this.pool = [], this.failedJobs = 0, this.memoryFailureCounted = !1, this.faultsReported = new Set, this.refusals = new Map, this.heapRefusals = 0, null === MM.module) return this.stopped = !0, void MM.fail("no wasm module for the meshing workers");
        MM.loadWorkers().then((MM => {
          if (this.stopped) return;
          const {
            count: rM
          } = MM;
          this.workers = MM;
          for (let iM = 0; iM < rM; iM++) this.slots.push({
            worker: null,
            started: !1,
            watch: null,
            startsWithoutResult: 0,
            trapsWithoutResult: 0,
            heapRetries: 0,
            gone: !1,
            goneFor: null
          });
          for (let iM = 0; iM < rM; iM++) this.start(iM)
        }), (MM => {
          this.stopped || (this.stop(), this.options.fail("the meshing workers' code could not load", MM))
        }))
      }
      take(MM, rM, iM) {
        const OM = this.slots[rM];
        if (MM === cr.Sd.Retire) return void(OM && !OM.gone && (this.endWorker(rM), OM.started = !1, this.giveUp(rM, "had its tables trap twice", "every meshing worker's tables trapped twice")));
        const SM = null === OM || void 0 === OM ? void 0 : OM.worker;
        if (!SM || !OM.started) return;
        const jM = iM.byteLength;
        let aM = null;
        MM === cr.Sd.Mesh && OM.heapRetries > 0 && (OM.heapRetries--, aM = this.pooled(jM, !0)), aM ??= this.buffer(jM), new Uint8Array(aM, 0, jM).set(iM), SM.postMessage({
          type: "job",
          kind: MM,
          bytes: aM,
          len: jM
        }, [aM])
      }
      takeFailedMeshJobs() {
        const MM = this.failedJobs;
        return this.failedJobs = 0, MM
      }
      newGame() {
        this.memoryFailureCounted = !1
      }
      stopWorkers() {
        this.resting = !0;
        for (let MM = 0; MM < this.slots.length; MM++) {
          const rM = this.slots[MM];
          null !== rM.worker && (this.endWorker(MM), rM.startsWithoutResult = 0, rM.trapsWithoutResult = 0, this.tellLost(MM))
        }
        this.pool.length = 0
      }
      restartWorkers() {
        if (this.resting) {
          this.resting = !1;
          for (let MM = 0; MM < this.slots.length; MM++) this.start(MM)
        }
      }
      stop() {
        this.stopped = !0;
        for (const rM of this.slots) {
          var MM;
          HS(rM), null === (MM = rM.worker) || void 0 === MM || MM.terminate(), rM.worker = null, rM.started = !1
        }
      }
      start(MM) {
        const rM = this.slots[MM],
          {
            module: iM
          } = this.options,
          {
            workers: OM
          } = this;
        if (this.stopped || this.resting || rM.gone || null === iM || null === OM) return;
        if (rM.startsWithoutResult >= 3) return void this.giveUp(MM, "failed to start 3 times in a row", "no meshing worker would start");
        let SM;
        rM.startsWithoutResult++;
        try {
          SM = OM.create()
        } catch (jM) {
          return console.warn(`[bloxd-wasm-client] meshing worker ${MM} did not start`, jM), void this.start(MM)
        }
        rM.worker = SM, SM.onmessage = iM => {
          let {
            data: OM
          } = iM;
          rM.worker === SM && this.onReply(MM, OM)
        }, SM.onmessageerror = () => {
          rM.worker === SM && this.lose(MM, "a reply could not be read")
        }, SM.onerror = iM => {
          iM.preventDefault(), rM.worker === SM && this.lose(MM, iM.message || "its script failed")
        };
        try {
          SM.postMessage({
            type: "start",
            module: iM,
            maxKeptLightStates: OM.maxKeptLightStates
          })
        } catch (jM) {
          return console.warn(`[bloxd-wasm-client] meshing worker ${MM} could not be sent the module`, jM), SM.terminate(), rM.worker = null, void this.start(MM)
        }
        rM.watch = new zS.i(zS.e, (rM => {
          this.lose(MM, (0, zS.j)(rM), (() => {
            this.options.onStartTimeout(rM)
          }))
        }), void 0, this.options.visibility)
      }
      onReply(MM, rM) {
        const iM = this.slots[MM];
        switch (rM.type) {
          case "started":
            HS(iM), iM.started = !0, this.options.write(0, cr.Od.WorkerStarted, 0, MM, 0, LS);
            break;
          case "lost":
            this.lose(MM, rM.reason);
            break;
          case "memory":
            var OM, SM;
            null === (OM = (SM = this.options).onMemoryStats) || void 0 === OM || OM.call(SM, MM, rM.stats);
            break;
          case "result": {
            const OM = rM.status === cr.ub.Trapped;
            if (0 !== rM.jobId) {
              if (OM) this.countFailedJob(rM.outOfMemory, "light_trap", rM.trap);
              else if (iM.startsWithoutResult = 0, iM.trapsWithoutResult = 0, rM.status === cr.ub.Refused) {
                const iM = function(MM) {
                  if (MM.byteLength < 32) return "(no reason)";
                  const rM = new DataView(MM.buffer, MM.byteOffset, MM.byteLength),
                    iM = Math.min(rM.getUint32(28, !0), MM.byteLength - 28 - 4);
                  return (new TextDecoder).decode(MM.subarray(32, 32 + iM)).slice(0, 200)
                }(new Uint8Array(rM.bytes, 0, rM.len));
                this.countFailedJob(Oi.c.test(iM), "light_refused_input", iM), this.logRefusal(MM, iM)
              }
              rM.status === cr.ub.HeapRefused && (iM.heapRetries = Math.min(iM.heapRetries + 1, 4), this.logHeapRefusal(MM))
            }
            if (this.options.write(rM.jobId, cr.Od.JobResult, rM.status, MM, rM.workerUs, new Uint8Array(rM.bytes, 0, rM.len)), this.recycle(rM.bytes), rM.spare && this.recycle(rM.spare), !OM) break;
            if (iM.startsWithoutResult = 0, 0 === rM.jobId) {
              this.lose(MM, `the tables trapped its wasm: ${rM.trap}`);
              break
            }
            iM.trapsWithoutResult++;
            const SM = iM.trapsWithoutResult > 6;
            iM.gone ||= SM, this.lose(MM, `a job trapped its wasm: ${rM.trap}`), SM && this.giveUp(MM, `trapped ${iM.trapsWithoutResult} jobs in a row`, "every meshing worker kept trapping");
            break
          }
        }
      }
      countFailedJob(MM, rM, iM) {
        if (MM) {
          if (this.memoryFailureCounted) return;
          this.memoryFailureCounted = !0
        } else this.faultsReported.has(rM) || (this.faultsReported.add(rM), this.options.onLightFault(rM, iM));
        this.failedJobs++
      }
      logRefusal(MM, rM) {
        var iM;
        !this.refusals.has(rM) && this.refusals.size >= 16 && (rM = "(other reasons)");
        const OM = (null !== (iM = this.refusals.get(rM)) && void 0 !== iM ? iM : 0) + 1;
        this.refusals.set(rM, OM), (0, ki.F)(OM) && console.warn(`[bloxd-wasm-client] meshing worker ${MM} refused a chunk (${OM} so far for this reason): ${rM}`)
      }
      logHeapRefusal(MM) {
        this.heapRefusals++, (0, ki.F)(this.heapRefusals) && console.warn(`[bloxd-wasm-client] meshing worker ${MM} was refused memory for a chunk's mesh (${this.heapRefusals} so far)`)
      }
      giveUp(MM, rM, iM) {
        const OM = this.slots[MM];
        if (OM.gone = !0, OM.goneFor = {
            why: rM,
            failure: iM
          }, console.warn(`[bloxd-wasm-client] meshing worker ${MM} ${rM}: giving up on it`), this.slots.every((MM => MM.gone))) {
          this.stop();
          const MM = new Set(this.slots.map((MM => {
              var rM;
              return null === (rM = MM.goneFor) || void 0 === rM ? void 0 : rM.failure
            }))),
            rM = this.slots.map(((MM, rM) => {
              var iM, OM;
              return `worker ${rM} ${null!==(iM=null===(OM=MM.goneFor)||void 0===OM?void 0:OM.why)&&void 0!==iM?iM:"went"}`
            }));
          this.options.fail(1 === MM.size ? iM : `no meshing worker is left (${rM.join(", ")})`)
        }
      }
      lose(MM, rM, iM) {
        console.warn(`[bloxd-wasm-client] meshing worker ${MM} was lost: ${rM}`), this.endWorker(MM), this.stopped || (iM ? iM() : this.options.onWorkerLost(rM), this.tellLost(MM), this.start(MM))
      }
      endWorker(MM) {
        var rM, iM, OM;
        const SM = this.slots[MM];
        HS(SM), null === (rM = SM.worker) || void 0 === rM || rM.terminate(), SM.worker = null, SM.heapRetries = 0, null === (iM = (OM = this.options).onMemoryGone) || void 0 === iM || iM.call(OM, MM)
      }
      tellLost(MM) {
        const rM = this.slots[MM];
        rM.started && (rM.started = !1, this.options.write(0, cr.Od.WorkerLost, 0, MM, 0, LS))
      }
      buffer(MM) {
        var rM;
        return null !== (rM = this.pooled(MM)) && void 0 !== rM ? rM : new ArrayBuffer(Math.max(16384, MM))
      }
      pooled(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          iM = -1;
        for (let SM = 0; SM < this.pool.length; SM++) {
          const OM = this.pool[SM].byteLength;
          OM >= MM && (iM < 0 || (rM ? OM > this.pool[iM].byteLength : OM < this.pool[iM].byteLength)) && (iM = SM)
        }
        if (iM < 0) return null;
        const OM = this.pool[iM];
        return this.pool[iM] = this.pool[this.pool.length - 1], this.pool.pop(), OM
      }
      recycle(MM) {
        this.pool.length < 4 * this.slots.length && MM.byteLength > 0 && MM.byteLength <= 1048576 && this.pool.push(MM)
      }
    }

    function HS(MM) {
      var rM;
      null === (rM = MM.watch) || void 0 === rM || rM.cancel(), MM.watch = null
    }
    var hS = iM(37428),
      JS = iM(41840),
      dS = iM(42039),
      yS = iM(42041),
      lS = (iM(41862), iM(42045)),
      ES = iM(41900);

    function US(MM) {
      const rM = new Uint8Array(MM.length >> 2);
      for (let iM = 0; iM < rM.length; iM++) rM[iM] = MM[4 * iM + 3];
      return rM
    }
    async function GS(MM) {
      const rM = await (0, lS.g)(MM);
      try {
        const {
          width: MM,
          height: iM,
          pixels: OM
        } = (0, ES.p)(rM);
        return {
          width: MM,
          height: iM,
          alpha: US(OM)
        }
      } finally {
        rM.close()
      }
    }
    class CS {
      constructor(MM, rM, iM) {
        let OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : GS;
        this.session = MM, this.sources = rM, this.warn = iM, this.load = OM, this.nextPoll = 0, this.dh = !1, this.warned = new Set
      }
      drain(MM) {
        if (MM < this.nextPoll) return;
        this.nextPoll = MM + 250;
        const rM = this.session.sunShadowWantedTextures();
        if (rM)
          for (let iM = 0; iM + 1 < rM.length; iM += 2) this.hand(rM[iM], rM[iM + 1]);
        for (const iM of this.session.takeSunShadowWarnings()) this.warn(iM)
      }
      dispose() {
        this.dh = !0
      }
      async hand(MM, rM) {
        var iM, OM, SM, jM, aM;
        let PM, nM = null;
        try {
          if (nM = await this.sources.blockImageUrl(MM), null === nM) throw new Error(`block image ${MM} has no URL`);
          PM = await this.load(nM)
        } catch (zM) {
          var QM;
          const rM = null !== (QM = nM) && void 0 !== QM ? QM : `block image ${MM}`;
          this.warned.has(rM) || (this.warned.add(rM), this.warn(`sun shadow plane texture ${rM} didn't load: its blocks cast no shadow`, zM))
        }
        this.dh || this.session.setSunShadowTexture(MM, rM, null !== (iM = null === (OM = PM) || void 0 === OM ? void 0 : OM.width) && void 0 !== iM ? iM : 0, null !== (SM = null === (jM = PM) || void 0 === jM ? void 0 : jM.height) && void 0 !== SM ? SM : 0, null === (aM = PM) || void 0 === aM ? void 0 : aM.alpha)
      }
    }
    var eS = iM(42053),
      bS = iM(41882),
      wS = iM(42055),
      tS = iM(42061),
      gS = iM(41884),
      uS = iM(41888),
      RS = iM(35055),
      pS = iM(34926),
      WS = iM(42067);
    const sS = 8192,
      DS = new Set;
    const kS = new Set([...pS.e, "sceneDownload"]);
    var ZS = iM(41793),
      oS = iM(42076),
      fS = iM(42081);
    const YS = new Uint8Array(0);
    let NS = null;

    function AS(MM) {
      return {
        aux: cr.$b.AdStart | (MM ? cr.$b.PreventMovement : 0),
        payload: YS
      }
    }
    var xS = iM(3230),
      vS = iM(281);
    const FS = "__bloxdSceneCapture";
    var BS = iM(42090);
    class XS {
      constructor(MM) {
        var rM, iM;
        this.host = MM, this.requested = null, this.landed = null, this.confirm = null, this.channel = void 0, this.oneShotStored = !0, this.startRead = void 0, this.landRequest = () => {}, this.landing = new Promise((MM => {
          this.landRequest = MM
        })), this.follow = MM => {
          let rM = MM;
          return Promise.race([this.startRead, this.landing]).then((async () => {
            const MM = null === this.requested && null !== rM;
            var iM;
            MM && (null === (iM = rM) || void 0 === iM || iM(null));
            const OM = await this.landing;
            var SM;
            null === OM && MM || (null === (SM = rM) || void 0 === SM || SM(OM))
          })), () => {
            rM = null
          }
        }, this.startRead = (iM = MM.store, iM.keys().then((MM => ({
          own: MM.includes(Ai.b),
          oneShot: MM.includes(Ai.e)
        })), (() => ({
          own: !0,
          oneShot: !0
        })))).then((MM => {
          let {
            own: rM,
            oneShot: iM
          } = MM;
          this.oneShotStored = iM, (rM || iM) && this.request()
        })), this.channel = (null !== (rM = MM.openChannel) && void 0 !== rM ? rM : Ai.o)(), null !== this.channel && (this.channel.onmessage = () => {
          this.request()
        })
      }
      request() {
        var MM;
        if (null !== this.requested) return this.requested;
        null === (MM = this.channel) || void 0 === MM || MM.close(), this.channel = null;
        const rM = this.oneShotStored;
        return this.requested = function(MM, rM, iM) {
          return new Promise((rM => {
            rM(MM())
          })).catch((MM => (null !== rM && (0, Ai.k)(rM), iM(MM), null)))
        }((() => this.host.load(rM).then((MM => (MM.setGamePackConfirm(this.confirm), this.landed = MM, MM)))), rM ? this.host.store : null, this.host.aL), this.landRequest(this.requested), this.requested
      }
      loaded() {
        return this.landed
      }
      forJoin() {
        return null !== this.requested ? this.requested : Promise.race([this.startRead, this.landing]).then((() => {
          var MM;
          return null !== (MM = this.requested) && void 0 !== MM ? MM : null
        }))
      }
      setGamePackConfirm(MM) {
        var rM;
        this.confirm = MM, null === (rM = this.landed) || void 0 === rM || rM.setGamePackConfirm(MM)
      }
    }
    var IS = iM(37223);
    const KS = 216 * IS.e,
      qS = 92 * IS.b,
      TS = 64 * IS.e,
      VS = 16 * IS.e;

    function cS() {
      var MM, rM;
      return null !== (MM = null === (rM = performance.memory) || void 0 === rM ? void 0 : rM.lE) && void 0 !== MM ? MM : null
    }
    class Mj {
      constructor(MM, rM) {
        this.budgetBytes = MM, this.reads = rM, this.estimate = null, this.shedAt = null
      }
      read(MM) {
        var rM;
        const iM = this.reads.storedChunks(),
          OM = this.reads.gpuBytes(),
          SM = Math.max(null !== (rM = this.reads.jsHeapBytes()) && void 0 !== rM ? rM : 0, TS),
          jM = KS + MM + SM + OM + iM * qS;
        this.estimate = {
          wasmBytes: MM,
          jsHeapBytes: SM,
          gpuBytes: OM,
          storedChunks: iM,
          totalBytes: jM
        }
      }
      last() {
        return this.estimate
      }
      takeShed() {
        const {
          estimate: MM,
          budgetBytes: rM,
          shedAt: iM
        } = this;
        return !(null === MM || null === rM || MM.totalBytes < rM || null !== iM && MM.totalBytes < iM + VS) && (this.shedAt = MM.totalBytes, !0)
      }
      describe() {
        const {
          estimate: MM,
          budgetBytes: rM
        } = this;
        return null === MM ? null : `estimate ${(0,IS.l)(MM.totalBytes)} MiB of budget ${null===rM?"none":(0,IS.l)(rM)}: wasm ${(0,IS.l)(MM.wasmBytes)} js ${(0,IS.l)(MM.jsHeapBytes)} gpu ${(0,IS.l)(MM.gpuBytes)} chunks ${MM.storedChunks}`
      }
      snapshot() {
        const {
          estimate: MM,
          budgetBytes: rM
        } = this;
        return {
          ...null === MM ? {} : {
            footprintMiB: Number((0, IS.l)(MM.totalBytes)),
            gpuMiB: Number((0, IS.l)(MM.gpuBytes)),
            storedChunks: MM.storedChunks
          },
          footprintBudgetMiB: null === rM ? -1 : Number((0, IS.l)(rM))
        }
      }
    }
    var rj = iM(3122),
      ij = iM(4903),
      Oj = iM(37312),
      Sj = iM(38922);
    const jj = Mi.db + 1,
      aj = 4096 * jj;
    class Pj {
      constructor(MM, rM) {
        this.log = MM, this.take = rM, this.sQ = [], this.unshown = new Map, this.latest = new Map
      }
      afterFrame(MM, rM) {
        const iM = this.take();
        iM.length >= Mi.bb && iM[0] > 0 && (0, rj.k)("remesh", `${iM[0]} core records lost to a full log`);
        const OM = this.sQ;
        for (let SM = Mi.bb; SM + Mi.db <= iM.length; SM += Mi.db) {
          for (let MM = SM; MM < SM + Mi.db; MM++) OM.push(iM[MM]);
          OM.push(MM)
        }
        if (rM || !(OM.length < aj)) {
          for (let rM = 0; rM < OM.length; rM += jj) this.feed(rM, MM);
          OM.length = 0, rM && this.log.frame(MM)
        }
      }
      feed(MM, rM) {
        var iM;
        const OM = this.sQ,
          SM = (0, Sj.e)(OM[MM + 1], OM[MM + 2], OM[MM + 3]),
          jM = OM[MM + 4],
          aM = OM[MM + Mi.db];
        switch (OM[MM]) {
          case Mi.Db.Edit:
            this.log.edit(SM, aM);
            break;
          case Mi.Db.Sent:
            this.latest.set(SM, jM), this.log.sent(SM, jM, OM[MM + 5], OM[MM + 6], OM[MM + 7], null !== (iM = this.unshown.get(SM)) && void 0 !== iM ? iM : Sj.b, aM);
            break;
          case Mi.Db.Done: {
            this.log.received(jM, OM[MM + 5] / 1e3, aM);
            const rM = this.unshown.get(SM);
            void 0 === rM ? this.unshown.set(SM, [jM]) : rM.push(jM);
            break
          }
          case Mi.Db.Failed: {
            const MM = this.latest.get(SM);
            void 0 !== MM && MM !== jM ? this.log.reassign(SM, jM, MM) : this.log.failed(jM), this.ended(SM, jM);
            break
          }
          case Mi.Db.Shown:
            this.log.applied(SM, jM, rM), this.ended(SM, jM);
            break;
          case Mi.Db.Replaced:
            this.log.reassign(SM, jM, OM[MM + 5]), this.ended(SM, jM);
            break;
          case Mi.Db.Emptied:
            this.log.emptied(SM, rM);
            break;
          default:
            console.warn(`[debug:remesh] unknown core record kind ${OM[MM]}`)
        }
      }
      ended(MM, rM) {
        this.latest.get(MM) === rM && this.latest.delete(MM);
        const iM = this.unshown.get(MM);
        if (void 0 === iM) return;
        const OM = iM.indexOf(rM);
        OM >= 0 && iM.splice(OM, 1), 0 === iM.length && this.unshown.delete(MM)
      }
    }
    let nj = null;
    var Qj = iM(3632),
      zj = iM(40769);
    const Lj = "its script failed",
      mj = "the block and item tables did not load",
      Hj = new Uint8Array(0);
    class hj {
      constructor(MM) {
        this.options = MM, this.worker = null, this.watch = null, this.createWorker = null, this.loading = !1, this.wanted = !1, this.sQ = [], this.startsWithoutResult = 0, this.generated = !1, this.coreWaits = !1, this.lastLoss = "", this.seed = null, this.gone = !1, this.pool = [], null !== MM.module ? MM.write(0, cr.Od.WorldgenStarted, 0, 0, Hj) : this.giveUp()
      }
      take(MM, rM) {
        if (!(this.gone || null === this.worker && null === this.sQ))
          if (MM === cr.Sd.WorldgenSeed) {
            const MM = 0 === rM.byteLength ? null : this.options.decodeSettings(rM);
            null === MM ? this.release() : function(MM, rM) {
              if ((null === MM || void 0 === MM ? void 0 : MM.byteLength) !== rM.byteLength) return !1;
              for (let iM = 0; iM < MM.byteLength; iM++)
                if (MM[iM] !== rM[iM]) return !1;
              return !0
            }(this.seed, rM) || (this.seed = rM.slice(), this.startsWithoutResult = null === this.worker ? 0 : 1), this.dropHeld(), this.post({
              type: "seed",
              settings: MM
            }, []), null !== MM ? this.want() : this.loading || this.options.onMapWithoutWorldgen()
          } else if (MM === cr.Sd.Generate) {
          var iM;
          const MM = new DataView(rM.buffer, rM.byteOffset, cr.Md),
            OM = null !== (iM = this.pool.pop()) && void 0 !== iM ? iM : new ArrayBuffer(8192);
          this.post({
            type: "generate",
            ticket: MM.getUint32(0, !0),
            x: MM.getInt32(4, !0),
            y: MM.getInt32(8, !0),
            z: MM.getInt32(12, !0),
            bytes: OM
          }, [OM])
        }
      }
      prestart() {
        this.gone || this.want()
      }
      stopWorker() {
        this.gone || (this.release(), this.generated = !1, this.dropHeld(), this.pool.length = 0, this.coreWaits && (this.coreWaits = !1, this.options.write(0, cr.Od.WorldgenStarted, 0, 0, Hj)))
      }
      stop() {
        var MM;
        this.gone = !0, this.dropHeld(), this.endWatch(), null === (MM = this.worker) || void 0 === MM || MM.terminate(), this.worker = null
      }
      post(MM, rM) {
        var iM;
        null !== this.sQ ? this.sQ.push({
          message: MM,
          transfer: rM
        }) : null === (iM = this.worker) || void 0 === iM || iM.postMessage(MM, rM)
      }
      want() {
        this.wanted = !0, null === this.worker && (null === this.createWorker ? this.load() : this.start())
      }
      release() {
        this.wanted = !1, null !== this.worker && (this.endWorker(), this.startsWithoutResult = 0, this.sQ ??= [])
      }
      endWorker() {
        var MM, rM, iM;
        this.endWatch(), null === (MM = this.worker) || void 0 === MM || MM.terminate(), this.worker = null, null === (rM = (iM = this.options).onMemoryGone) || void 0 === rM || rM.call(iM)
      }
      load() {
        this.loading || (this.loading = !0, this.options.loadWorker().then((MM => {
          this.createWorker = MM, this.wanted && this.start()
        }), (MM => {
          this.gone || (this.giveUp(), this.options.onLoadFailed(MM))
        })))
      }
      start() {
        const {
          module: MM
        } = this.options, rM = this.createWorker;
        if (this.gone || null === MM || null === rM) return;
        if (this.startsWithoutResult >= 3) return this.giveUp(), void this.options.onGaveUp(this.lastLoss);
        let iM;
        this.startsWithoutResult++;
        try {
          iM = rM()
        } catch (SM) {
          return console.warn("[bloxd-wasm-client] the world-gen worker did not start", SM), this.lastLoss = `it did not start (${String(SM)})`, void this.start()
        }
        this.worker = iM, iM.onmessage = MM => {
          let {
            data: rM
          } = MM;
          this.worker === iM && this.onReply(iM, rM)
        }, iM.onerror = MM => {
          MM.preventDefault(), this.worker === iM && this.lose(MM.message || Lj)
        };
        try {
          iM.postMessage({
            type: "start",
            module: MM,
            HL: OM.f.HL
          })
        } catch (SM) {
          return console.warn("[bloxd-wasm-client] the world-gen worker could not be sent the module", SM), this.lastLoss = `it could not be sent the module (${String(SM)})`, iM.terminate(), this.worker = null, void this.start()
        }
        this.watch = new zS.i(zS.h, (MM => {
          this.lose((0, zS.j)(MM), (() => {
            this.options.onStartTimeout(MM)
          }))
        }), void 0, this.options.visibility)
      }
      onReply(MM, rM) {
        switch (rM.type) {
          case "started": {
            this.endWatch();
            const rM = this.sQ;
            if (null === rM) {
              this.coreWaits = !1, this.options.write(0, cr.Od.WorldgenStarted, 0, 0, Hj);
              break
            }
            this.sQ = null;
            for (const {
                message: iM,
                transfer: OM
              }
              of rM) MM.postMessage(iM, OM);
            break
          }
          case "lost":
            this.lose(rM.reason);
            break;
          case "memory":
            var iM, OM;
            null === (iM = (OM = this.options).onMemoryStats) || void 0 === iM || iM.call(OM, rM.stats);
            break;
          case "result":
            this.generated = !0, rM.status !== cr.ub.Trapped && (this.startsWithoutResult = 0), this.options.write(rM.ticket, cr.Od.WorldgenResult, rM.status, rM.workerUs, new Uint8Array(rM.bytes, 0, rM.len)), this.recycle(rM.bytes), rM.spare && this.recycle(rM.spare)
        }
      }
      lose(MM, rM) {
        console.warn(`[bloxd-wasm-client] the world-gen worker was lost: ${MM}`), this.lastLoss = MM, this.endWorker(), this.gone || (rM ? rM() : this.options.onWorkerLost(MM, this.generated), this.dropHeld(), this.sQ = null, this.options.write(0, cr.Od.WorldgenLost, cr.Ud.Lost, 0, Hj), this.coreWaits = !0, this.start())
      }
      giveUp() {
        this.gone = !0, this.dropHeld(), this.options.write(0, cr.Od.WorldgenLost, cr.Ud.Gone, 0, Hj)
      }
      endWatch() {
        var MM;
        null === (MM = this.watch) || void 0 === MM || MM.cancel(), this.watch = null
      }
      dropHeld() {
        if (null !== this.sQ) {
          for (const {
              message: MM
            }
            of this.sQ) "generate" === MM.type && this.recycle(MM.bytes);
          this.sQ.length = 0
        }
      }
      recycle(MM) {
        this.pool.length < 16 && MM.byteLength > 0 && MM.byteLength <= 16384 && this.pool.push(MM)
      }
    }
    var Jj = iM(38721),
      dj = iM(4098),
      yj = iM(41739),
      lj = iM(42094),
      Ej = iM(41876);
    const Uj = /[(@\s]([^\s(@]+)$/,
      Gj = /:\d/;

    function Cj(MM, rM) {
      for (let iM = 0; iM + rM.length <= MM.length; iM++) {
        let OM = 0;
        for (; OM < rM.length && MM[iM + OM] === rM[OM];) OM++;
        if (OM === rM.length) return iM
      }
      return -1
    }

    function ej(MM) {
      return "(" === MM || ")" === MM || "@" === MM || "," === MM || " " === MM || "\t" === MM
    }

    function bj(MM, rM) {
      let iM = rM;
      for (; iM > 0 && !ej(MM[iM - 1]);) iM--;
      let OM = rM;
      for (; OM < MM.length && !ej(MM[OM]);) OM++;
      let SM = "";
      for (let jM = iM; jM < OM; jM++) SM += MM[jM];
      return SM
    }
    const wj = [{
        origin: "chrome-extension://dhdgffkkebhmkfjojejmpbldmpobfkfo",
        tag: "TM"
      }, {
        origin: "chrome-extension://iikmkjmpaadaobahmlepeloendndfphd",
        tag: "TM-Edge"
      }, {
        origin: "chrome-extension://gcalenpjmijncebpfijmoaglllgpjagf",
        tag: "TM-Beta"
      }],
      tj = /^\/[^\s?#]*\?(?:[^\s&#]*&)*?name=([^\s&#]*?)(?::\d+)*(?:[\s&#]|\)(?:[,\s]|$)|$)/,
      gj = ".user.js";

    function uj(MM, rM) {
      let iM = 0;
      for (; iM < wj.length && wj[iM].origin !== rM[0];) iM++;
      if (iM === wj.length) return rM[0];
      let OM = "";
      for (let aM = rM.index + rM[0].length; aM < MM.length; aM++) OM += MM[aM];
      const SM = (0, rS.n)(rS.Z, tj, [OM]),
        jM = null === SM ? "" : function(MM) {
          let rM = MM.length,
            iM = 0;
          for (; iM < 8 && rM > 8 && MM[rM - 8 + iM] === gj[iM];) iM++;
          8 === iM && (rM -= 8);
          let OM = "",
            SM = !1;
          for (let jM = 0; jM < rM; jM++) {
            let rM = MM[jM];
            "+" === rM ? rM = " " : "%" === rM && (rM = "2" === MM[jM + 1] && "0" === MM[jM + 2] ? " " : "_", jM += 2), -1 !== Cj("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 .-", rM) ? (OM += rM, SM = !1) : SM || (OM += "_", SM = !0)
          }
          return OM
        }(SM[1]);
      return "" === jM ? rM[0] : wj[iM].tag + " " + jM
    }

    function Rj(MM, rM) {
      var iM;
      const OM = /[^\n]+/g,
        SM = /\b(?!wasm:)[a-z][\w+.-]*:\/\/[\w.:%~+[\]-]*/i,
        jM = /^([^?#)]*?)(?::\d+)*(?:[?#)]|$)/;
      let aM = null,
        PM = null,
        nM = (0, rS.n)(rS.Z, OM, [MM]);
      for (; null !== nM;) {
        const iM = (0, rS.n)(rS.Z, SM, [nM[0]]),
          QM = null === rM ? -1 : Cj(nM[0], rM);
        if (-1 !== QM) {
          if (null !== iM) return uj(nM[0], iM);
          const MM = bj(nM[0], QM),
            rM = (0, rS.n)(rS.Z, Uj, [nM[0]]),
            OM = null !== (0, rS.n)(rS.Z, Gj, [MM]) ? MM : null === rM ? null : rM[1],
            SM = null === OM ? null : (0, rS.n)(rS.Z, jM, [OM]);
          if (null !== SM && "" !== SM[1]) return SM[1]
        }
        null !== iM && (null === aM ? aM = iM[0] : null === PM && iM[0] !== aM && (PM = iM[0])), nM = (0, rS.n)(rS.Z, OM, [MM])
      }
      return null !== (iM = PM) && void 0 !== iM ? iM : null === aM ? "none" : "own"
    }
    const pj = /:(\d+):(\d+)\)?$/;

    function Wj(MM, rM) {
      const iM = (0, rS.n)(rS.Z, pj, [rM]);
      return null === iM ? MM : MM + ":" + iM[1] + ":" + iM[2]
    }

    function sj(MM) {
      const rM = /[^\n]+/g,
        iM = /\b(?!wasm:)((?:blob:)?)(([a-z][\w+.-]*):\/\/[\w.:%~+[\]-]*)((?:[^\s()@?#]*\/)?)([^\s()@?#:]*)/i;
      let OM = null,
        SM = "",
        jM = !1,
        aM = (0, rS.n)(rS.Z, rM, [MM]);
      for (; null !== aM;) {
        const PM = (0, rS.n)(rS.Z, iM, [aM[0]]),
          nM = null === PM ? (0, rS.n)(rS.Z, Uj, [aM[0]]) : null,
          QM = null !== nM && null !== (0, rS.n)(rS.Z, Gj, [nM[1]]) && 0 !== Cj(nM[1], "wasm:") ? nM[1] : null;
        if (null === OM) null !== PM ? (OM = PM[2], SM = PM[4]) : null !== QM && (OM = "");
        else if (null !== PM) {
          if (jM = !0, "" !== PM[1]) return {
            reader: "inline",
            frame: Wj("blob", aM[0])
          };
          if (PM[2] !== OM) {
            const MM = "moz-extension" === PM[3] || "safari-web-extension" === PM[3];
            let rM = "";
            for (let iM = 0; iM < PM[5].length && iM < 20; iM++) rM += PM[5][iM];
            return {
              reader: MM ? PM[3] : PM[2],
              frame: Wj("" === rM ? "-" : rM, aM[0])
            }
          }
          if (PM[4] !== SM) return {
            reader: "inline",
            frame: Wj("inline", aM[0])
          }
        } else if (null !== QM) {
          const MM = -1 !== Cj(aM[0], "userscript") || -1 !== Cj(aM[0], ".user.js");
          return {
            reader: MM ? "userscript" : "inline",
            frame: Wj(MM ? "userscript" : "eval", aM[0])
          }
        }
        aM = (0, rS.n)(rS.Z, rM, [MM])
      }
      const PM = jM ? "own" : "unknown";
      return {
        reader: PM,
        frame: PM
      }
    }

    function Dj(MM, rM) {
      return (0, Jj.h)(function(MM) {
        if ("string" !== typeof MM || 0 === MM.length) return "-";
        let rM = 2166136261;
        const iM = MM.length < 4096 ? MM.length : 4096;
        for (let SM = 0; SM <= iM; SM++) rM ^= SM === iM ? MM.length : (0, rS.n)(rS.jb, MM, [SM]), rM = rM + (rM << 1) + (rM << 4) + (rM << 7) + (rM << 8) + (rM << 24) >>> 0;
        let OM = "";
        for (let SM = 28; SM >= 0; SM -= 4) OM += "0123456789abcdef" [rM >>> SM & 15];
        return OM
      }(rM), sj(MM).frame)
    }
    const kj = (MM, rM) => MM.includes(rM),
      Zj = MM => {
        try {
          return MM()
        } catch {
          return !1
        }
      },
      oj = -1,
      fj = MM => {
        try {
          return MM()
        } catch {
          return oj
        }
      };

    function Yj(MM, rM) {
      return {
        probe: (iM, OM, SM) => {
          try {
            return ((iM, OM, SM) => {
              switch (iM) {
                case cr.oc.StackCheck:
                  return rM.stackCheck() ? 1 : 0;
                case cr.oc.ConfirmMesh:
                  return rM.confirmMesh();
                case cr.oc.IndexPassReplaced:
                  return rM.indexPassReplaced() ? 1 : 0;
                case cr.oc.ProductSubChanged:
                  return rM.productSubChanged() ? 1 : 0;
                case cr.oc.RenderStatus:
                  return rM.rP();
                case cr.oc.Held:
                  return rM.sQ();
                case cr.oc.PlayerKilledSubs:
                  return rM.playerKilledSubs();
                case cr.hb: {
                  const iM = rM.getComplete();
                  return null === iM ? 0 : (0, rS.n)(rS.y, rS.nb, [iM, new rS.b((0, rS.H)(MM()), OM, SM)]).written
                }
                default:
                  return 0
              }
            })(iM, OM, SM)
          } catch {
            return cr.ec
          }
        }
      }
    }
    class Nj {
      constructor(MM) {
        this.write = MM, this.flagsWritten = 0, this.written = (0, rS.r)(null)
      }
      bL(MM) {
        let {
          flags: rM,
          values: iM
        } = MM;
        for (let OM = 0; OM < iM.length; OM++) this.value(iM[OM][0], iM[OM][1]);
        this.setFlags(rM | cr.c.Ready)
      }
      value(MM, rM) {
        this.written[MM] !== rM && this.write(MM, rM, 0) && (this.written[MM] = rM)
      }
      setFlags(MM) {
        const rM = MM & ~this.flagsWritten;
        0 !== rM && this.write(cr.g.Flags, rM, rM) && (this.flagsWritten |= rM)
      }
      originStackHit() {
        return this.write(cr.g.Flags, cr.c.OriginStackHit, cr.c.OriginStackHit)
      }
    }
    const Aj = {
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
      xj = 1e3;
    let vj;
    const Fj = ["length", 1, 2, void 0, null, 3, 0, "u", "c3RhY2", "cw==", 1e5, 191, 23, "c", 4, 168, 139, 25, 6, 196, 5, !1, "d", !0, "b", "string", "stack", "name", 50, 183, 85, 8, 16, 115, "IK5aIK", 512, "a", "012345", 15, 221, "e", 125, 1023, 179, 63, 128, 12, 255, 32, 24, 7, 18, 10, 19, 64, 65535, 208, 160, 62, 65, 219, 175, 133, "abc", 239, 909522486, 1549556828, 256, 189, "6789AB", "CDEF", "6789ab", "cdef", 158, 182, 120, 37, 30, 173, 55296, 56319, 56320, 57343, 65536, 127, 2047, 192, 31, 224, 2097151, 240, 163, 13, 22, 11, 17, 28, 34, 39, 14, 41, 61, 1116352408, 1899447441, 1245643825, 373957723, 961987163, 1508970993, 1841331548, 1424204075, 670586216, 310598401, 607225278, 1426881987, 1925078388, 2132889090, 1680079193, 1046744716, 459576895, 272742522, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 1740746414, 1473132947, 1341970488, 1084653625, 958395405, 710438585, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2117940946, 1838011259, 1564481375, 1474664885, 1035236496, 949202525, 778901479, 694614492, 200395387, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2067236844, 1933114872, 1866530822, 1538233109, 1090935817, 965641998, 1779033703, 1150833019, 1013904242, 1521486534, 1359893119, 1694144372, 528734635, 1541459225, 9, 126, 143, "r", "ba7816bf8f01c", "fea414140de5d", "ae2223b00361a", "396177a9cb410", "ff61f20015ad", 121, 46, 174, 123, 223, 55, 248, 75, 97, 232, 74, 186, "Invalid data key provided (not type string)", "Invalid data key provided (empty string)", "': ", 33554432, 67108864, 180, 68, 156, "v", 226, "o", "functi", "on", "n", "C", 171, "protot", "ype", "decode", "I=", "eTR5bm", 178, "t", "yd", "s", "chEven", "dispat", "now", 110, "confir", "mMesh", "produc", "player", "Killed", "number", "toString", "get", "f", "q", "_", "i", 225, 242, "None", 167, "En", "g", "tOverw", "ritten", "plete", "p"];

    function Bj(...MM) {
      if (MM[Fj[0]] = Fj[5], MM[Fj[6]] === Fj[34]) return MM[Fj[1]] + MM[Fj[2]]
    }

    function Xj() {}

    function Ij() {
      Ij = function() {}
    }
    vj = function(MM) {
      let rM = arguments[Fj[0]] > Fj[1] && arguments[Fj[1]] !== Fj[3] ? arguments[Fj[1]] : () => Fj[4],
        iM = arguments[Fj[0]] > Fj[2] && arguments[Fj[2]] !== Fj[3] ? arguments[Fj[2]] : Fj[4],
        OM = arguments[Fj[0]] > Fj[5] && arguments[Fj[5]] !== Fj[3] ? arguments[Fj[5]] : "";
      const SM = window,
        jM = (Fj[6], rS[Fj[7]])("RXJyb3" + Fj[214]),
        aM = (Fj[6], rS[Fj[7]])(Fj[8] + "s="),
        PM = (Fj[6], rS[Fj[7]])("Y2FwdHVyZVN0YWNrVHJhY2U="),
        QM = (Fj[6], rS[Fj[7]])(Fj[8] + "tUcmFjZUxpbWl0"),
        zM = (Fj[6], rS[Fj[7]])("bmF0aXZl"),
        LM = [(Fj[6], rS[Fj[7]])("bWFpbi5qcw=="), (Fj[6], rS[Fj[7]])("aW5kZXguanM="), (Fj[6], rS[Fj[7]])("dXNlcnNjcmlwdA=="), (Fj[6], rS[Fj[7]])("Y29udGVudC5q" + Fj[9]), (Fj[6], rS[Fj[7]])("b3B0aW9ucy5q" + Fj[9]), (Fj[6], rS[Fj[7]])("cG9wdXAuanM="), (Fj[6], rS[Fj[7]])("LnVzZXIuanM="), (Fj[6], rS[Fj[7]])("Y2hyb21lLWV4dGVuc2lvbg==")],
        mM = (...MM) => {
          MM[Fj[0]] = Fj[1];
          const rM = SM[jM],
            iM = rM;
          iM[QM] < Fj[10] && (iM[QM] = Fj[10]);
          const OM = "string" === typeof(mM = (new rM)[aM]) ? mM : `${mM}`,
            nM = {},
            zM = iM[PM];
          var mM;
          if (typeof zM === Fj[206] + Fj[207]) {
            function JM(...MM) {
              Ij(MM[Fj[0]] = Fj[6], MM[Fj[16]] = function(...MM) {
                for (Ij(MM[Fj[0]] = Fj[1], MM[-Fj[12]] = MM[Fj[6]].length, MM[-Fj[15]] = [], MM[Fj[13]] = Fj[6], MM[Fj[14]] = Fj[6], MM[Fj[6]].sort(((MM, rM) => MM - rM))), MM[-Fj[11]] = Fj[6]; MM[-Fj[11]] < MM[-Fj[12]]; MM[-Fj[11]]++)
                  if (!(MM[-Fj[11]] > Fj[6] && MM[Fj[6]][MM[-Fj[11]]] === MM[Fj[6]][MM[-Fj[11]] - Fj[1]]))
                    for (Ij(MM[Fj[13]] = MM[-Fj[11]] + Fj[1], MM[Fj[14]] = MM[-Fj[12]] - Fj[1]); MM[Fj[13]] < MM[Fj[14]];)
                      if (MM[Fj[6]][MM[-Fj[11]]] + MM[Fj[6]][MM[Fj[13]]] + MM[Fj[6]][MM[Fj[14]]] < Fj[6]) MM[Fj[13]]++;
                      else if (MM[Fj[6]][MM[-Fj[11]]] + MM[Fj[6]][MM[Fj[13]]] + MM[Fj[6]][MM[Fj[14]]] > Fj[6]) MM[Fj[14]]--;
                else {
                  for (MM[-Fj[15]].push([MM[Fj[6]][MM[-Fj[11]]], MM[Fj[6]][MM[Fj[13]]], MM[Fj[6]][MM[Fj[14]]]]); MM[Fj[13]] < MM[Fj[14]] && MM[Fj[6]][MM[Fj[13]]] === MM[Fj[6]][MM[Fj[13]] + Fj[1]];) MM[Fj[13]]++;
                  for (; MM[Fj[13]] < MM[Fj[14]] && MM[Fj[6]][MM[Fj[14]]] === MM[Fj[6]][MM[Fj[14]] - Fj[1]];) MM[Fj[14]]--;
                  Ij(MM[Fj[13]]++, MM[Fj[14]]--)
                }
                return MM[-Fj[15]]
              }, console.log(MM[Fj[16]]))
            }
            "VZBVzN1" in Xj && JM(), (Fj[6], rS[Fj[208]])(zM, rM, [nM])
          }
          const HM = nM[aM],
            hM = MM[Fj[6]] ? LM[Fj[0]] : LM[Fj[0]] - Fj[1];
          for (let dM = Fj[6]; dM < hM; dM++) {
            function yM(...MM) {
              MM[Fj[0]] = Fj[6]
            }
            if ("nz34mI" in Xj && yM(), kj(OM, LM[dM])) {
              function lM(...MM) {
                Ij(MM[Fj[0]] = Fj[6], MM[Fj[24]] = function(...rM) {
                  return rM[Fj[0]] = Fj[2], MM[Fj[18]]({}, rM[Fj[6]], rM[Fj[1]])
                }, MM[Fj[18]] = function(...rM) {
                  if (Ij(rM[Fj[0]] = Fj[5], rM[Fj[5]] = {}), rM[Fj[6]][rM[Fj[1]] + rM[Fj[2]]] !== Fj[3]) return rM[Fj[6]][rM[Fj[1]] + rM[Fj[2]]];
                  if (rM[Fj[1]] === rM[Fj[2]]) return Fj[23];
                  for (rM[Fj[19]] = Fj[6]; rM[Fj[19]] < rM[Fj[1]].length; rM[Fj[19]]++) rM[Fj[5]][rM[Fj[1]][rM[Fj[19]]]] === Fj[3] && (rM[Fj[5]][rM[Fj[1]][rM[Fj[19]]]] = Fj[6]), rM[Fj[5]][rM[Fj[2]][rM[Fj[19]]]] === Fj[3] && (rM[Fj[5]][rM[Fj[2]][rM[Fj[19]]]] = Fj[6]), Ij(rM[Fj[5]][rM[Fj[1]][rM[Fj[19]]]]++, rM[Fj[5]][rM[Fj[2]][rM[Fj[19]]]]--);
                  for (rM[Fj[20]] in rM[Fj[5]])
                    if (rM[Fj[5]][rM[Fj[20]]] !== Fj[6]) return rM[Fj[6]][rM[Fj[1]] + rM[Fj[2]]] = Fj[21], Fj[21];
                  for (rM[Fj[22]] = Fj[1]; rM[Fj[22]] < rM[Fj[1]].length; rM[Fj[22]]++)
                    if (MM[Fj[18]](rM[Fj[6]], rM[Fj[1]].substr(Fj[6], rM[Fj[22]]), rM[Fj[2]].substr(Fj[6], rM[Fj[22]])) && MM[Fj[18]](rM[Fj[6]], rM[Fj[1]].substr(rM[Fj[22]]), rM[Fj[2]].substr(rM[Fj[22]])) || MM[Fj[18]](rM[Fj[6]], rM[Fj[1]].substr(Fj[6], rM[Fj[22]]), rM[Fj[2]].substr(rM[Fj[2]].length - rM[Fj[22]])) && MM[Fj[18]](rM[Fj[6]], rM[Fj[1]].substr(rM[Fj[22]]), rM[Fj[2]].substr(Fj[6], rM[Fj[2]].length - rM[Fj[22]]))) return rM[Fj[6]][rM[Fj[1]] + rM[Fj[2]]] = Fj[23], Fj[23];
                  return rM[Fj[6]][rM[Fj[1]] + rM[Fj[2]]] = Fj[21], Fj[21]
                }, console.log(MM[Fj[24]]))
              }
              return "ZutHV4" in Xj && lM(), {
                [Fj[26]]: OM,
                [Fj[27]]: LM[dM]
              }
            }
            if (typeof HM === Fj[25] && kj(HM, LM[dM])) return {
              [Fj[26]]: HM,
              [Fj[27]]: LM[dM]
            }
          }
          return Fj[4]
        },
        HM = (...MM) => (MM[Fj[0]] = Fj[1], "gdsqSTR" in Xj && function() {
          var MM, rM = function(...rM) {
            return rM[Fj[0]] = Fj[2], MM({}, rM[Fj[6]], rM[Fj[1]])
          };
          Ij(MM = function(...rM) {
            if (Ij(rM[Fj[0]] = Fj[5], rM[-Fj[29]] = {}), rM[Fj[6]][rM[Fj[1]] + rM[Fj[2]]] !== Fj[3]) return rM[Fj[6]][rM[Fj[1]] + rM[Fj[2]]];
            if (rM[Fj[1]] === rM[Fj[2]]) return Fj[23];
            for (rM[Fj[28]] = Fj[6]; rM[Fj[28]] < rM[Fj[1]].length; rM[Fj[28]]++) rM[-Fj[29]][rM[Fj[1]][rM[Fj[28]]]] === Fj[3] && (rM[-Fj[29]][rM[Fj[1]][rM[Fj[28]]]] = Fj[6]), rM[-Fj[29]][rM[Fj[2]][rM[Fj[28]]]] === Fj[3] && (rM[-Fj[29]][rM[Fj[2]][rM[Fj[28]]]] = Fj[6]), Ij(rM[-Fj[29]][rM[Fj[1]][rM[Fj[28]]]]++, rM[-Fj[29]][rM[Fj[2]][rM[Fj[28]]]]--);
            for (rM[Fj[20]] in rM[-Fj[29]])
              if (rM[-Fj[29]][rM[Fj[20]]] !== Fj[6]) return rM[Fj[6]][rM[Fj[1]] + rM[Fj[2]]] = Fj[21], Fj[21];
            for (rM[Fj[22]] = Fj[1]; rM[Fj[22]] < rM[Fj[1]].length; rM[Fj[22]]++)
              if (MM(rM[Fj[6]], rM[Fj[1]].substr(Fj[6], rM[Fj[22]]), rM[Fj[2]].substr(Fj[6], rM[Fj[22]])) && MM(rM[Fj[6]], rM[Fj[1]].substr(rM[Fj[22]]), rM[Fj[2]].substr(rM[Fj[22]])) || MM(rM[Fj[6]], rM[Fj[1]].substr(Fj[6], rM[Fj[22]]), rM[Fj[2]].substr(rM[Fj[2]].length - rM[Fj[22]])) && MM(rM[Fj[6]], rM[Fj[1]].substr(rM[Fj[22]]), rM[Fj[2]].substr(Fj[6], rM[Fj[2]].length - rM[Fj[22]]))) return rM[Fj[6]][rM[Fj[1]] + rM[Fj[2]]] = Fj[23], Fj[23];
            return rM[Fj[6]][rM[Fj[1]] + rM[Fj[2]]] = Fj[21], Fj[21]
          }, console.log(rM))
        }(), mM(MM[Fj[6]]) !== Fj[4]);
      let hM = Fj[4],
        JM = Fj[4],
        dM = Fj[4],
        yM = Fj[4];
      const lM = (...MM) => {
        MM[Fj[0]] = Fj[1], "Jmfu2Wh" in Xj && function(...MM) {
          Ij(MM[Fj[0]] = Fj[6], MM[Fj[58]] = function(...MM) {
            function rM(...MM) {
              return MM[Fj[0]] = Fj[1], PM(jM(zM(MM[Fj[6]])))
            }

            function iM(...MM) {
              return MM[Fj[0]] = Fj[2], PM(aM(zM(MM[Fj[6]]), zM(MM[Fj[1]])))
            }

            function OM(...MM) {
              return MM[Fj[0]] = Fj[2], nM(aM(zM(MM[Fj[6]]), zM(MM[Fj[1]])))
            }

            function SM(...MM) {
              return MM[Fj[0]] = Fj[5], QM(aM(zM(MM[Fj[6]]), zM(MM[Fj[1]])), MM[Fj[2]])
            }

            function jM(...MM) {
              return MM[Fj[0]] = Fj[1], mM(GM(LM(MM[Fj[6]]), MM[Fj[6]].length * Fj[31]))
            }

            function aM(...MM) {
              Ij(MM[Fj[0]] = Fj[2], MM[Fj[30]] = LM(MM[Fj[6]])), MM[Fj[30]].length > Fj[32] && (MM[Fj[30]] = GM(MM[Fj[30]], MM[Fj[6]].length * Fj[31]));
              var rM = Array(Fj[32]),
                iM = Array(Fj[32]);
              for (MM[Fj[33]] = Fj[6]; MM[Fj[33]] < Fj[32]; MM[Fj[33]]++) Ij(rM[MM[Fj[33]]] = MM[Fj[30]][MM[Fj[33]]] ^ Fj[65], iM[MM[Fj[33]]] = MM[Fj[30]][MM[Fj[33]]] ^ Fj[66]);
              return MM[Fj[13]] = GM(rM.concat(LM(MM[Fj[1]])), Fj[35] + MM[Fj[1]].length * Fj[31]), mM(GM(iM.concat(MM[Fj[13]]), Bj(Fj[34], Fj[35], Fj[67])))
            }

            function PM(...rM) {
              rM[Fj[0]] = Fj[1];
              try {
                MM[Fj[36]]
              } catch (iM) {
                MM[Fj[36]] = Fj[6]
              }
              for (Ij(rM[Fj[1]] = MM[Fj[36]] ? Fj[37] + Fj[69] + Fj[70] : Fj[37] + Fj[71] + Fj[72], rM[Fj[24]] = "", rM[Fj[5]] = Fj[3]), rM[Fj[22]] = Fj[6]; rM[Fj[22]] < rM[Fj[6]].length; rM[Fj[22]]++) Ij(rM[Fj[5]] = rM[Fj[6]].charCodeAt(rM[Fj[22]]), rM[Fj[24]] += rM[Fj[1]].charAt(rM[Fj[5]] >>> Fj[14] & Fj[38]) + rM[Fj[1]].charAt(rM[Fj[5]] & Fj[38]));
              return rM[Fj[24]]
            }

            function nM(...rM) {
              rM[Fj[0]] = Fj[1];
              try {
                MM[Fj[24]]
              } catch (iM) {
                MM[Fj[24]] = ""
              }
              for (Ij(rM[Fj[36]] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", rM[Fj[2]] = "", rM[Fj[13]] = rM[Fj[6]].length), rM[-Fj[39]] = Fj[6]; rM[-Fj[39]] < rM[Fj[13]]; rM[-Fj[39]] += Fj[5])
                for (rM[Fj[40]] = rM[Fj[6]].charCodeAt(rM[-Fj[39]]) << Fj[32] | (rM[-Fj[39]] + Fj[1] < rM[Fj[13]] ? rM[Fj[6]].charCodeAt(rM[-Fj[39]] + Fj[1]) << Fj[31] : Fj[6]) | (rM[-Fj[39]] + Fj[2] < rM[Fj[13]] ? rM[Fj[6]].charCodeAt(rM[-Fj[39]] + Fj[2]) : Fj[6]), rM[Fj[18]] = Fj[6]; rM[Fj[18]] < Fj[14]; rM[Fj[18]]++) rM[-Fj[39]] * Fj[31] + rM[Fj[18]] * Fj[18] > rM[Fj[6]].length * Fj[31] ? rM[Fj[2]] += MM[Fj[24]] : rM[Fj[2]] += rM[Fj[36]].charAt(rM[Fj[40]] >>> Fj[18] * (Fj[5] - rM[Fj[18]]) & Fj[44]);
              return rM[Fj[2]]
            }

            function QM(...MM) {
              var rM, iM, OM, SM;
              for (Ij(MM[Fj[0]] = Fj[2], MM[Fj[36]] = MM[Fj[1]].length, MM[Fj[24]] = Array()), MM[Fj[41]] = Array(Math.ceil(MM[Fj[6]].length / Fj[2])), rM = Fj[6]; rM < MM[Fj[41]].length; rM++) MM[Fj[41]][rM] = MM[Fj[6]].charCodeAt(rM * Fj[2]) << Fj[31] | MM[Fj[6]].charCodeAt(rM * Fj[2] + Fj[1]);
              for (; MM[Fj[41]].length > Fj[6];) {
                for (Ij(SM = Array(), OM = Fj[6]), rM = Fj[6]; rM < MM[Fj[41]].length; rM++) Ij(OM = (OM << Fj[32]) + MM[Fj[41]][rM], iM = Math.floor(OM / MM[Fj[36]]), OM -= iM * MM[Fj[36]]), (SM.length > Fj[6] || iM > Fj[6]) && (SM[SM.length] = iM);
                Ij(MM[Fj[24]][MM[Fj[24]].length] = OM, MM[Fj[41]] = SM)
              }
              for (MM[-Fj[11]] = "", rM = MM[Fj[24]].length - Fj[1]; rM >= Fj[6]; rM--) MM[-Fj[11]] += MM[Fj[1]].charAt(MM[Fj[24]][rM]);
              for (MM[Fj[40]] = Math.ceil(MM[Fj[6]].length * Fj[31] / (Math.log(MM[Fj[1]].length) / Math.log(Fj[2]))), rM = MM[-Fj[11]].length; rM < MM[Fj[40]]; rM++) MM[-Fj[11]] = MM[Fj[1]][Fj[6]] + MM[-Fj[11]];
              return MM[-Fj[11]]
            }

            function zM(...MM) {
              var rM, iM;
              for (Ij(MM[Fj[0]] = Fj[1], MM[Fj[43]] = "", MM[Fj[2]] = -Fj[1]); ++MM[Fj[2]] < MM[Fj[6]].length;) Ij(rM = MM[Fj[6]].charCodeAt(MM[Fj[2]]), iM = MM[Fj[2]] + Fj[1] < MM[Fj[6]].length ? MM[Fj[6]].charCodeAt(MM[Fj[2]] + Fj[1]) : Fj[6]), Fj[79] <= rM && rM <= Fj[80] && Fj[81] <= iM && iM <= Fj[82] && Ij(rM = Fj[83] + ((rM & Fj[42]) << Fj[52]) + (iM & Fj[42]), MM[Fj[2]]++), rM <= Fj[84] ? MM[Fj[43]] += String.fromCharCode(rM) : rM <= Fj[85] ? MM[Fj[43]] += String.fromCharCode(Fj[86] | rM >>> Fj[18] & Fj[87], Fj[45] | rM & Fj[44]) : rM <= Fj[55] ? MM[Fj[43]] += String.fromCharCode(Fj[88] | rM >>> Fj[46] & Fj[38], Fj[45] | rM >>> Fj[18] & Fj[44], Fj[45] | rM & Fj[44]) : rM <= Fj[89] && (MM[Fj[43]] += String.fromCharCode(Fj[90] | rM >>> Fj[51] & Fj[50], Fj[45] | rM >>> Fj[46] & Fj[44], Fj[45] | rM >>> Fj[18] & Fj[44], Fj[45] | rM & Fj[44]));
              return MM[Fj[43]]
            }

            function LM(...MM) {
              for (Ij(MM[Fj[0]] = Fj[1], MM[Fj[1]] = Array(MM[Fj[6]].length >> Fj[2])), MM[Fj[2]] = Fj[6]; MM[Fj[2]] < MM[Fj[1]].length; MM[Fj[2]]++) MM[Fj[1]][MM[Fj[2]]] = Fj[6];
              for (MM[Fj[2]] = Fj[6]; MM[Fj[2]] < MM[Fj[6]].length * Fj[31]; MM[Fj[2]] += Fj[31]) MM[Fj[1]][MM[Fj[2]] >> Fj[20]] |= (MM[Fj[6]].charCodeAt(MM[Fj[2]] / Fj[31]) & Fj[47]) << Fj[49] - MM[Fj[2]] % Fj[48];
              return MM[Fj[1]]
            }

            function mM(...MM) {
              for (Ij(MM[Fj[0]] = Fj[1], MM[Fj[36]] = ""), MM[Fj[24]] = Fj[6]; MM[Fj[24]] < MM[Fj[6]].length * Fj[48]; MM[Fj[24]] += Fj[31]) MM[Fj[36]] += String.fromCharCode(MM[Fj[6]][MM[Fj[24]] >> Fj[20]] >>> Fj[49] - MM[Fj[24]] % Fj[48] & Fj[47]);
              return MM[Fj[36]]
            }

            function HM(...MM) {
              return MM[Fj[0]] = Fj[2], MM[Fj[6]] >>> MM[Fj[1]] | MM[Fj[6]] << Fj[48] - MM[Fj[1]]
            }

            function hM(...MM) {
              return MM[Fj[0]] = Fj[2], MM[Fj[6]] >>> MM[Fj[1]]
            }

            function JM(...MM) {
              return MM[Fj[0]] = Fj[5], MM[Fj[6]] & MM[Fj[1]] ^ ~MM[Fj[6]] & MM[Fj[2]]
            }

            function dM(...MM) {
              return MM[Fj[0]] = Fj[5], MM[Fj[6]] & MM[Fj[1]] ^ MM[Fj[6]] & MM[Fj[2]] ^ MM[Fj[1]] & MM[Fj[2]]
            }

            function yM(...MM) {
              return MM[Fj[0]] = Fj[1], HM(MM[Fj[6]], Fj[2]) ^ HM(MM[Fj[6]], Fj[92]) ^ HM(MM[Fj[6]], Fj[93])
            }

            function lM(...MM) {
              return MM[Fj[0]] = Fj[1], HM(MM[Fj[6]], Fj[18]) ^ HM(MM[Fj[6]], Fj[94]) ^ HM(MM[Fj[6]], Fj[17])
            }

            function EM(...MM) {
              return MM[Fj[0]] = Fj[1], HM(MM[Fj[6]], Fj[50]) ^ HM(MM[Fj[6]], Fj[51]) ^ hM(MM[Fj[6]], Fj[5])
            }

            function UM(...MM) {
              return MM[Fj[0]] = Fj[1], HM(MM[Fj[6]], Fj[95]) ^ HM(MM[Fj[6]], Fj[53]) ^ hM(MM[Fj[6]], Fj[52])
            }

            function GM(...rM) {
              var iM, OM, SM, jM, aM, PM, nM, QM, zM, LM, mM, HM;
              for (Ij(rM[Fj[0]] = Fj[2], rM[Fj[36]] = new Array(Fj[166], -Fj[167], Fj[168], -Fj[169], Fj[170], -Fj[171], Fj[172], Fj[173]), rM[Fj[5]] = new Array(Fj[54])), Ij(rM[Fj[6]][rM[Fj[1]] >> Fj[20]] |= Fj[45] << Fj[49] - rM[Fj[1]] % Fj[48], rM[Fj[6]][(rM[Fj[1]] + Fj[54] >> Fj[174] << Fj[14]) + Fj[38]] = rM[Fj[1]]), zM = Fj[6]; zM < rM[Fj[6]].length; zM += Fj[32]) {
                for (Ij(iM = rM[Fj[36]][Fj[6]], OM = rM[Fj[36]][Fj[1]], SM = rM[Fj[36]][Fj[2]], jM = rM[Fj[36]][Fj[5]], aM = rM[Fj[36]][Fj[14]], PM = rM[Fj[36]][Fj[20]], nM = rM[Fj[36]][Fj[18]], QM = rM[Fj[36]][Fj[50]]), LM = Fj[6]; LM < Fj[54]; LM++) Ij(LM < Fj[32] ? rM[Fj[5]][LM] = rM[Fj[6]][LM + zM] : rM[Fj[5]][LM] = CM(CM(CM(UM(rM[Fj[5]][LM - Fj[2]]), rM[Fj[5]][LM - Fj[50]]), EM(rM[Fj[5]][LM - Fj[38]])), rM[Fj[5]][LM - Fj[32]]), mM = CM(CM(CM(CM(QM, lM(aM)), JM(aM, PM, nM)), MM[Fj[2]][LM]), rM[Fj[5]][LM]), HM = CM(yM(iM), dM(iM, OM, SM)), QM = nM, nM = PM, PM = aM, aM = CM(jM, mM), jM = SM, SM = OM, OM = iM, iM = CM(mM, HM));
                Ij(rM[Fj[36]][Fj[6]] = CM(iM, rM[Fj[36]][Fj[6]]), rM[Fj[36]][Fj[1]] = CM(OM, rM[Fj[36]][Fj[1]]), rM[Fj[36]][Fj[2]] = CM(SM, rM[Fj[36]][Fj[2]]), rM[Fj[36]][Fj[5]] = CM(jM, rM[Fj[36]][Fj[5]]), rM[Fj[36]][Fj[14]] = CM(aM, rM[Fj[36]][Fj[14]]), rM[Fj[36]][Fj[20]] = CM(PM, rM[Fj[36]][Fj[20]]), rM[Fj[36]][Fj[18]] = CM(nM, rM[Fj[36]][Fj[18]]), rM[Fj[36]][Fj[50]] = CM(QM, rM[Fj[36]][Fj[50]]))
              }
              return rM[Fj[36]]
            }

            function CM(...MM) {
              return Ij(MM[Fj[0]] = Fj[2], MM[Fj[56]] = (MM[Fj[6]] & Fj[55]) + (MM[Fj[1]] & Fj[55]), MM[Fj[57]] = (MM[Fj[6]] >> Fj[32]) + (MM[Fj[1]] >> Fj[32]) + (MM[Fj[56]] >> Fj[32])), MM[Fj[57]] << Fj[32] | MM[Fj[56]] & Fj[55]
            }
            return Ij(MM[Fj[0]] = Fj[6], MM[Fj[36]] = Fj[6], MM[Fj[24]] = ""), MM[Fj[2]] = new Array(Fj[102], Fj[103], -Fj[104], -Fj[105], Fj[106], Fj[107], -Fj[108], -Fj[109], -Fj[110], Fj[111], Fj[112], Fj[113], Fj[114], -Fj[115], -Fj[116], -Fj[117], -Fj[118], -Fj[119], Fj[120], Fj[121], Fj[122], Fj[123], Fj[124], Fj[125], -Fj[126], -Fj[127], -Fj[128], -Fj[129], -Fj[130], -Fj[131], Fj[132], Fj[133], Fj[134], Fj[135], Fj[136], Fj[137], Fj[138], Fj[139], -Fj[140], -Fj[141], -Fj[142], -Fj[143], -Fj[144], -Fj[145], -Fj[146], -Fj[147], -Fj[148], Fj[149], Fj[150], Fj[151], Fj[152], Fj[153], Fj[154], Fj[155], Fj[156], Fj[157], Fj[158], Fj[159], -Fj[160], -Fj[161], -Fj[162], -Fj[163], -Fj[164], -Fj[165]), {
              hex: rM,
              b64: OM,
              any: SM,
              hex_hmac: iM,
              b64_hmac: OM,
              any_hmac: SM
            }
          }(), console.log(MM[Fj[58]]))
        }();
        try {
          function rM(...MM) {
            Ij(MM[Fj[0]] = Fj[6], MM[Fj[36]] = "(c=ak(<~F$VU'9f)~><&85dBPL-module/from", MM[Fj[59]] = "q:function(){var ad=ad=>b(ad-29);if(!T.r[(typeof ab==ad(123)?", MM[-Fj[60]] = "return U[c[c[d(-199)]-b(205)]]||V[ae(b(166))];case T.o[c[c[c[d(-199)]+d(-174)]-(c[b(119)]-(c[d(-199)]-163))]+ae(b(146))](0)==b(167)?d(-130):-d(-144)", MM[Fj[36]].match(MM[Fj[59]] + MM[-Fj[60]]))
          }
          return "jozAVT" + Fj[209] in Xj && rM(), MM[Fj[6]]()
        } catch {
          function iM(...MM) {
            Ij(MM[Fj[0]] = Fj[6], MM[Fj[24]] = function(...MM) {
              for (Ij(MM[Fj[0]] = Fj[1], MM[Fj[1]] = MM[Fj[6]].length, MM[Fj[24]] = [], MM[Fj[61]] = Fj[6], MM[Fj[62]] = Fj[6], MM[Fj[6]].sort(((MM, rM) => MM - rM))), MM[Fj[20]] = Fj[6]; MM[Fj[20]] < MM[Fj[1]]; MM[Fj[20]]++)
                if (!(MM[Fj[20]] > Fj[6] && MM[Fj[6]][MM[Fj[20]]] === MM[Fj[6]][MM[Fj[20]] - Fj[1]]))
                  for (Ij(MM[Fj[61]] = MM[Fj[20]] + Fj[1], MM[Fj[62]] = MM[Fj[1]] - Fj[1]); MM[Fj[61]] < MM[Fj[62]];)
                    if (MM[Fj[6]][MM[Fj[20]]] + MM[Fj[6]][MM[Fj[61]]] + MM[Fj[6]][MM[Fj[62]]] < Fj[6]) MM[Fj[61]]++;
                    else if (MM[Fj[6]][MM[Fj[20]]] + MM[Fj[6]][MM[Fj[61]]] + MM[Fj[6]][MM[Fj[62]]] > Fj[6]) MM[Fj[62]]--;
              else {
                for (MM[Fj[24]].push([MM[Fj[6]][MM[Fj[20]]], MM[Fj[6]][MM[Fj[61]]], MM[Fj[6]][MM[Fj[62]]]]); MM[Fj[61]] < MM[Fj[62]] && MM[Fj[6]][MM[Fj[61]]] === MM[Fj[6]][MM[Fj[61]] + Fj[1]];) MM[Fj[61]]++;
                for (; MM[Fj[61]] < MM[Fj[62]] && MM[Fj[6]][MM[Fj[62]]] === MM[Fj[6]][MM[Fj[62]] - Fj[1]];) MM[Fj[62]]--;
                Ij(MM[Fj[61]]++, MM[Fj[62]]--)
              }
              return MM[Fj[24]]
            }, console.log(MM[Fj[24]]))
          }
          return "skHWeM" in Xj && iM(), Fj[23]
        }
      };
      let EM = Fj[21];
      const UM = () => {
          if (!EM && (Fj[6], rS[Fj[203]])()) {
            function MM(...MM) {
              Ij(MM[Fj[0]] = Fj[6], MM[Fj[36]] = function(...MM) {
                function rM(MM, rM) {
                  return aM(SM(PM(MM), PM(rM)))
                }

                function OM(...MM) {
                  return MM[Fj[0]] = Fj[5],
                    function(...MM) {
                      var rM, iM, OM, SM;
                      for (Ij(MM[Fj[0]] = Fj[2], MM[Fj[2]] = MM[Fj[1]].length, MM[Fj[5]] = Array()), MM[-Fj[77]] = Array(Math.ceil(MM[Fj[6]].length / Fj[2])), rM = Fj[6]; rM < MM[-Fj[77]].length; rM++) MM[-Fj[77]][rM] = MM[Fj[6]].charCodeAt(rM * Fj[2]) << Fj[31] | MM[Fj[6]].charCodeAt(rM * Fj[2] + Fj[1]);
                      for (; MM[-Fj[77]].length > Fj[6];) {
                        for (Ij(SM = Array(), OM = Fj[6]), rM = Fj[6]; rM < MM[-Fj[77]].length; rM++) Ij(OM = (OM << Fj[32]) + MM[-Fj[77]][rM], iM = Math.floor(OM / MM[Fj[2]]), OM -= iM * MM[Fj[2]]), (SM.length > Fj[6] || iM > Fj[6]) && (SM[SM.length] = iM);
                        Ij(MM[Fj[5]][MM[Fj[5]].length] = OM, MM[-Fj[77]] = SM)
                      }
                      for (MM[Fj[20]] = "", rM = MM[Fj[5]].length - Fj[1]; rM >= Fj[6]; rM--) MM[Fj[20]] += MM[Fj[1]].charAt(MM[Fj[5]][rM]);
                      for (MM[Fj[40]] = Math.ceil(MM[Fj[6]].length * Fj[31] / (Math.log(MM[Fj[1]].length) / Math.log(Fj[2]))), rM = MM[Fj[20]].length; rM < MM[Fj[40]]; rM++) MM[Fj[20]] = MM[Fj[1]][Fj[6]] + MM[Fj[20]];
                      return MM[Fj[20]]
                    }(SM(PM(MM[Fj[6]]), PM(MM[Fj[1]])), MM[Fj[2]])
                }

                function SM(...MM) {
                  Ij(MM[Fj[0]] = Fj[2], MM[Fj[2]] = nM(MM[Fj[6]])), MM[Fj[2]].length > Fj[32] && (MM[Fj[2]] = lM(MM[Fj[2]], MM[Fj[6]].length * Fj[31]));
                  var rM = Array(Fj[32]),
                    iM = Array(Fj[32]);
                  for (MM[Fj[64]] = Fj[6]; MM[Fj[64]] < Fj[32]; MM[Fj[64]]++) Ij(rM[MM[Fj[64]]] = MM[Fj[2]][MM[Fj[64]]] ^ Fj[65], iM[MM[Fj[64]]] = MM[Fj[2]][MM[Fj[64]]] ^ Fj[66]);
                  return MM[Fj[13]] = lM(rM.concat(nM(MM[Fj[1]])), Fj[35] + MM[Fj[1]].length * Fj[31]), QM(lM(iM.concat(MM[Fj[13]]), Bj(Fj[34], Fj[35], Fj[67])))
                }

                function jM(...rM) {
                  rM[Fj[0]] = Fj[1];
                  try {
                    MM[-Fj[68]]
                  } catch (iM) {
                    MM[-Fj[68]] = Fj[6]
                  }
                  for (Ij(rM[Fj[36]] = MM[-Fj[68]] ? Fj[37] + Fj[69] + Fj[70] : Fj[37] + Fj[71] + Fj[72], rM[-Fj[73]] = "", rM[Fj[13]] = Fj[3]), rM[Fj[14]] = Fj[6]; rM[Fj[14]] < rM[Fj[6]].length; rM[Fj[14]]++) Ij(rM[Fj[13]] = rM[Fj[6]].charCodeAt(rM[Fj[14]]), rM[-Fj[73]] += rM[Fj[36]].charAt(rM[Fj[13]] >>> Fj[14] & Fj[38]) + rM[Fj[36]].charAt(rM[Fj[13]] & Fj[38]));
                  return rM[-Fj[73]]
                }

                function aM(...rM) {
                  rM[Fj[0]] = Fj[1];
                  try {
                    MM[Fj[74]]
                  } catch (iM) {
                    MM[Fj[74]] = ""
                  }
                  for (Ij(rM[Fj[36]] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", rM[-Fj[75]] = "", rM[Fj[5]] = rM[Fj[6]].length), rM[Fj[14]] = Fj[6]; rM[Fj[14]] < rM[Fj[5]]; rM[Fj[14]] += Fj[5])
                    for (rM[Fj[76]] = rM[Fj[6]].charCodeAt(rM[Fj[14]]) << Fj[32] | (rM[Fj[14]] + Fj[1] < rM[Fj[5]] ? rM[Fj[6]].charCodeAt(rM[Fj[14]] + Fj[1]) << Fj[31] : Fj[6]) | (rM[Fj[14]] + Fj[2] < rM[Fj[5]] ? rM[Fj[6]].charCodeAt(rM[Fj[14]] + Fj[2]) : Fj[6]), rM[Fj[18]] = Fj[6]; rM[Fj[18]] < Fj[14]; rM[Fj[18]]++) rM[Fj[14]] * Fj[31] + rM[Fj[18]] * Fj[18] > rM[Fj[6]].length * Fj[31] ? rM[-Fj[75]] += MM[Fj[74]] : rM[-Fj[75]] += rM[Fj[36]].charAt(rM[Fj[76]] >>> Fj[18] * (Fj[5] - rM[Fj[18]]) & Fj[44]);
                  return rM[-Fj[75]]
                }

                function PM(...MM) {
                  var rM, iM;
                  for (Ij(MM[Fj[0]] = Fj[1], MM[Fj[1]] = "", MM[Fj[78]] = -Fj[1]); ++MM[Fj[78]] < MM[Fj[6]].length;) Ij(rM = MM[Fj[6]].charCodeAt(MM[Fj[78]]), iM = MM[Fj[78]] + Fj[1] < MM[Fj[6]].length ? MM[Fj[6]].charCodeAt(MM[Fj[78]] + Fj[1]) : Fj[6]), Fj[79] <= rM && rM <= Fj[80] && Fj[81] <= iM && iM <= Fj[82] && Ij(rM = Fj[83] + ((rM & Fj[42]) << Fj[52]) + (iM & Fj[42]), MM[Fj[78]]++), rM <= Fj[84] ? MM[Fj[1]] += String.fromCharCode(rM) : rM <= Fj[85] ? MM[Fj[1]] += String.fromCharCode(Fj[86] | rM >>> Fj[18] & Fj[87], Fj[45] | rM & Fj[44]) : rM <= Fj[55] ? MM[Fj[1]] += String.fromCharCode(Fj[88] | rM >>> Fj[46] & Fj[38], Fj[45] | rM >>> Fj[18] & Fj[44], Fj[45] | rM & Fj[44]) : rM <= Fj[89] && (MM[Fj[1]] += String.fromCharCode(Fj[90] | rM >>> Fj[51] & Fj[50], Fj[45] | rM >>> Fj[46] & Fj[44], Fj[45] | rM >>> Fj[18] & Fj[44], Fj[45] | rM & Fj[44]));
                  return MM[Fj[1]]
                }

                function nM(...MM) {
                  for (Ij(MM[Fj[0]] = Fj[1], MM[Fj[1]] = Array(MM[Fj[6]].length >> Fj[2])), MM[Fj[91]] = Fj[6]; MM[Fj[91]] < MM[Fj[1]].length; MM[Fj[91]]++) MM[Fj[1]][MM[Fj[91]]] = Fj[6];
                  for (MM[Fj[91]] = Fj[6]; MM[Fj[91]] < MM[Fj[6]].length * Fj[31]; MM[Fj[91]] += Fj[31]) MM[Fj[1]][MM[Fj[91]] >> Fj[20]] |= (MM[Fj[6]].charCodeAt(MM[Fj[91]] / Fj[31]) & Fj[47]) << Fj[49] - MM[Fj[91]] % Fj[48];
                  return MM[Fj[1]]
                }

                function QM(MM) {
                  var rM, iM = "";
                  for (rM = Fj[6]; rM < MM.length * Fj[48]; rM += Fj[31]) iM += String.fromCharCode(MM[rM >> Fj[20]] >>> Fj[49] - rM % Fj[48] & Fj[47]);
                  return iM
                }

                function zM(...MM) {
                  return MM[Fj[0]] = Fj[2], MM[Fj[6]] >>> MM[Fj[1]] | MM[Fj[6]] << Fj[48] - MM[Fj[1]]
                }

                function LM(...MM) {
                  return MM[Fj[0]] = Fj[2], MM[Fj[6]] >>> MM[Fj[1]]
                }

                function mM(...MM) {
                  return MM[Fj[0]] = Fj[5], MM[Fj[6]] & MM[Fj[1]] ^ ~MM[Fj[6]] & MM[Fj[2]]
                }

                function HM(...MM) {
                  return MM[Fj[0]] = Fj[5], MM[Fj[6]] & MM[Fj[1]] ^ MM[Fj[6]] & MM[Fj[2]] ^ MM[Fj[1]] & MM[Fj[2]]
                }

                function hM(...MM) {
                  return MM[Fj[0]] = Fj[1], zM(MM[Fj[6]], Fj[2]) ^ zM(MM[Fj[6]], Fj[92]) ^ zM(MM[Fj[6]], Fj[93])
                }

                function JM(...MM) {
                  return MM[Fj[0]] = Fj[1], zM(MM[Fj[6]], Fj[18]) ^ zM(MM[Fj[6]], Fj[94]) ^ zM(MM[Fj[6]], Fj[17])
                }

                function dM(...MM) {
                  return MM[Fj[0]] = Fj[1], zM(MM[Fj[6]], Fj[50]) ^ zM(MM[Fj[6]], Fj[51]) ^ LM(MM[Fj[6]], Fj[5])
                }

                function yM(MM) {
                  return zM(MM, Fj[95]) ^ zM(MM, Fj[53]) ^ LM(MM, Fj[52])
                }

                function lM(...rM) {
                  var iM, OM, SM, jM, aM, PM, nM, QM, zM, LM, lM, UM;
                  for (Ij(rM[Fj[0]] = Fj[2], rM[Fj[36]] = new Array(Fj[166], -Fj[167], Fj[168], -Fj[169], Fj[170], -Fj[171], Fj[172], Fj[173]), rM[-Fj[175]] = new Array(Fj[54])), Ij(rM[Fj[6]][rM[Fj[1]] >> Fj[20]] |= Fj[45] << Fj[49] - rM[Fj[1]] % Fj[48], rM[Fj[6]][(rM[Fj[1]] + Fj[54] >> Fj[174] << Fj[14]) + Fj[38]] = rM[Fj[1]]), zM = Fj[6]; zM < rM[Fj[6]].length; zM += Fj[32]) {
                    for (Ij(iM = rM[Fj[36]][Fj[6]], OM = rM[Fj[36]][Fj[1]], SM = rM[Fj[36]][Fj[2]], jM = rM[Fj[36]][Fj[5]], aM = rM[Fj[36]][Fj[14]], PM = rM[Fj[36]][Fj[20]], nM = rM[Fj[36]][Fj[18]], QM = rM[Fj[36]][Fj[50]]), LM = Fj[6]; LM < Fj[54]; LM++) Ij(LM < Fj[32] ? rM[-Fj[175]][LM] = rM[Fj[6]][LM + zM] : rM[-Fj[175]][LM] = EM(EM(EM(yM(rM[-Fj[175]][LM - Fj[2]]), rM[-Fj[175]][LM - Fj[50]]), dM(rM[-Fj[175]][LM - Fj[38]])), rM[-Fj[175]][LM - Fj[32]]), lM = EM(EM(EM(EM(QM, JM(aM)), mM(aM, PM, nM)), MM[Fj[2]][LM]), rM[-Fj[175]][LM]), UM = EM(hM(iM), HM(iM, OM, SM)), QM = nM, nM = PM, PM = aM, aM = EM(jM, lM), jM = SM, SM = OM, OM = iM, iM = EM(lM, UM));
                    Ij(rM[Fj[36]][Fj[6]] = EM(iM, rM[Fj[36]][Fj[6]]), rM[Fj[36]][Fj[1]] = EM(OM, rM[Fj[36]][Fj[1]]), rM[Fj[36]][Fj[2]] = EM(SM, rM[Fj[36]][Fj[2]]), rM[Fj[36]][Fj[5]] = EM(jM, rM[Fj[36]][Fj[5]]), rM[Fj[36]][Fj[14]] = EM(aM, rM[Fj[36]][Fj[14]]), rM[Fj[36]][Fj[20]] = EM(PM, rM[Fj[36]][Fj[20]]), rM[Fj[36]][Fj[18]] = EM(nM, rM[Fj[36]][Fj[18]]), rM[Fj[36]][Fj[50]] = EM(QM, rM[Fj[36]][Fj[50]]))
                  }
                  return rM[Fj[36]]
                }

                function EM(MM, rM) {
                  var iM = (MM & Fj[55]) + (rM & Fj[55]);
                  return (MM >> Fj[32]) + (rM >> Fj[32]) + (iM >> Fj[32]) << Fj[32] | iM & Fj[55]
                }
                return Ij(MM[Fj[0]] = Fj[6], MM[-Fj[68]] = Fj[6], MM[Fj[74]] = ""), MM[Fj[2]] = new Array(Fj[102], Fj[103], -Fj[104], -Fj[105], Fj[106], Fj[107], -Fj[108], -Fj[109], -Fj[110], Fj[111], Fj[112], Fj[113], Fj[114], -Fj[115], -Fj[116], -Fj[117], -Fj[118], -Fj[119], Fj[120], Fj[121], Fj[122], Fj[123], Fj[124], Fj[125], -Fj[126], -Fj[127], -Fj[128], -Fj[129], -Fj[130], -Fj[131], Fj[132], Fj[133], Fj[134], Fj[135], Fj[136], Fj[137], Fj[138], Fj[139], -Fj[140], -Fj[141], -Fj[142], -Fj[143], -Fj[144], -Fj[145], -Fj[146], -Fj[147], -Fj[148], Fj[149], Fj[150], Fj[151], Fj[152], Fj[153], Fj[154], Fj[155], Fj[156], Fj[157], Fj[158], Fj[159], -Fj[160], -Fj[161], -Fj[162], -Fj[163], -Fj[164], -Fj[165]), {
                  hex: function(...MM) {
                    return MM[Fj[0]] = Fj[1], jM(function(...MM) {
                      return MM[Fj[0]] = Fj[1], QM(lM(nM(MM[Fj[6]]), MM[Fj[6]].length * Fj[31]))
                    }(PM(MM[Fj[6]])))
                  },
                  b64: rM,
                  any: OM,
                  hex_hmac: function(...MM) {
                    return MM[Fj[0]] = Fj[2], jM(SM(PM(MM[Fj[6]]), PM(MM[Fj[1]])))
                  },
                  b64_hmac: rM,
                  any_hmac: OM
                }
              }(), console.log(MM[Fj[36]]))
            }
            "OqUIa9" in Xj && MM(), EM = Fj[23]
          }
        },
        GM = (...MM) => {
          MM[Fj[0]] = Fj[1], "FQYVxM" in Xj && function(...MM) {
            function rM(...MM) {
              MM[Fj[0]] = Fj[1];
              const rM = {};
              for (let iM of MM[Fj[6]].replace(/[^w]/g, "").toLowerCase()) rM[iM] = rM[iM] + Fj[1] || Fj[1];
              return rM
            }

            function iM(...MM) {
              MM[Fj[0]] = Fj[2];
              const rM = buildCharMap(MM[Fj[6]]),
                iM = buildCharMap(MM[Fj[1]]);
              for (let OM in rM)
                if (rM[OM] !== iM[OM]) return Fj[21];
              return Object.keys(rM).length !== Object.keys(iM).length ? Fj[21] : Fj[23]
            }

            function OM(...MM) {
              MM[Fj[0]] = Fj[1];
              return SM(MM[Fj[6]]) !== 1 / 0
            }

            function SM(...MM) {
              if (MM[Fj[0]] = Fj[1], !MM[Fj[6]]) return -Fj[1];
              const rM = SM(MM[Fj[6]].left),
                iM = SM(MM[Fj[6]].right),
                OM = Math.abs(rM - iM);
              if (rM === 1 / 0 || iM === 1 / 0 || OM > Fj[1]) return 1 / 0;
              return Math.max(rM, iM) + Fj[1]
            }
            MM[Fj[0]] = Fj[6], window["__GLOBAL__HELPERS_" + Fj[234]] = {
              buildCharacterMap: rM,
              isAnagrams: iM,
              isBalanced: OM,
              getHeightBalanced: SM
            }
          }();
          try {
            function rM(...MM) {
              Ij(MM[Fj[0]] = Fj[6], MM[Fj[36]] = function(...MM) {
                for (Ij(MM[Fj[0]] = Fj[1], MM[Fj[36]] = Fj[6], MM[Fj[24]] = {}, MM[Fj[13]] = Fj[6], MM[Fj[14]] = Fj[6], MM[Fj[20]] = Fj[6], MM[Fj[176]] = MM[Fj[6]].length), MM[Fj[50]] = Fj[6]; MM[Fj[50]] < MM[Fj[176]]; MM[Fj[50]]++) {
                  for (Ij(MM[Fj[24]] = {}, MM[Fj[13]] = Fj[6], MM[Fj[14]] = Fj[1]), MM[Fj[31]] = MM[Fj[50]] + Fj[1]; MM[Fj[31]] < MM[Fj[176]]; MM[Fj[31]]++) MM[Fj[6]][MM[Fj[50]]].x !== MM[Fj[6]][MM[Fj[31]]].x || MM[Fj[6]][MM[Fj[50]]].y !== MM[Fj[6]][MM[Fj[31]]].y ? (MM[Fj[6]][MM[Fj[50]]].y === MM[Fj[6]][MM[Fj[31]]].y ? MM[Fj[20]] = Number.MAX_SAFE_INTEGER : MM[Fj[20]] = (MM[Fj[6]][MM[Fj[50]]].x - MM[Fj[6]][MM[Fj[31]]].x) / (MM[Fj[6]][MM[Fj[50]]].y - MM[Fj[6]][MM[Fj[31]]].y), MM[Fj[24]][MM[Fj[20]]] || (MM[Fj[24]][MM[Fj[20]]] = Fj[6]), Ij(MM[Fj[24]][MM[Fj[20]]]++, MM[Fj[13]] = Math.max(MM[Fj[13]], MM[Fj[24]][MM[Fj[20]]]))) : MM[Fj[14]]++;
                  Ij(MM[Fj[13]] += MM[Fj[14]], MM[Fj[36]] = Math.max(MM[Fj[36]], MM[Fj[13]]))
                }
                return MM[Fj[36]]
              }, console.log(MM[Fj[36]]))
            }
            return "_uaLzYP" in Xj && rM(), MM[Fj[6]]()
          } catch {
            function iM(...MM) {
              Ij(MM[Fj[0]] = Fj[6], MM[Fj[36]] = function(...MM) {
                for (Ij(MM[Fj[0]] = Fj[1], MM[Fj[1]] = MM[Fj[6]].length, MM[Fj[2]] = [], MM[Fj[5]] = Fj[6], MM[Fj[14]] = Fj[6], MM[Fj[6]].sort(((MM, rM) => MM - rM))), MM[Fj[40]] = Fj[6]; MM[Fj[40]] < MM[Fj[1]]; MM[Fj[40]]++)
                  if (!(MM[Fj[40]] > Fj[6] && MM[Fj[6]][MM[Fj[40]]] === MM[Fj[6]][MM[Fj[40]] - Fj[1]]))
                    for (Ij(MM[Fj[5]] = MM[Fj[40]] + Fj[1], MM[Fj[14]] = MM[Fj[1]] - Fj[1]); MM[Fj[5]] < MM[Fj[14]];)
                      if (MM[Fj[6]][MM[Fj[40]]] + MM[Fj[6]][MM[Fj[5]]] + MM[Fj[6]][MM[Fj[14]]] < Fj[6]) MM[Fj[5]]++;
                      else if (MM[Fj[6]][MM[Fj[40]]] + MM[Fj[6]][MM[Fj[5]]] + MM[Fj[6]][MM[Fj[14]]] > Fj[6]) MM[Fj[14]]--;
                else {
                  for (MM[Fj[2]].push([MM[Fj[6]][MM[Fj[40]]], MM[Fj[6]][MM[Fj[5]]], MM[Fj[6]][MM[Fj[14]]]]); MM[Fj[5]] < MM[Fj[14]] && MM[Fj[6]][MM[Fj[5]]] === MM[Fj[6]][MM[Fj[5]] + Fj[1]];) MM[Fj[5]]++;
                  for (; MM[Fj[5]] < MM[Fj[14]] && MM[Fj[6]][MM[Fj[14]]] === MM[Fj[6]][MM[Fj[14]] - Fj[1]];) MM[Fj[14]]--;
                  Ij(MM[Fj[5]]++, MM[Fj[14]]--)
                }
                return MM[Fj[2]]
              }, console.log(MM[Fj[36]]))
            }
            return "I9SapL" in Xj && iM(), Fj[3]
          }
        },
        CM = (...MM) => {
          MM[Fj[0]] = Fj[1];
          try {
            function rM(...MM) {
              MM[Fj[0]] = Fj[6]
            }
            return "UNWW1Y" in Xj && rM(), MM[Fj[6]](), Fj[23]
          } catch {
            return Fj[21]
          }
        },
        eM = (Fj[6], rS[Fj[7]])("a29qbzYzb25i"),
        bM = (Fj[6], rS[Fj[177]])(Fj[4]);
      let wM = Fj[4],
        tM = Fj[21],
        gM = Fj[21];
      const uM = (Fj[6], rS[Fj[177]])(Fj[4]);
      let RM = Fj[6];
      const pM = (Fj[6], rS[Fj[177]])(Fj[4]);
      let WM = Fj[6];
      const sM = (Fj[6], rS[Fj[177]])(Fj[4]);
      let DM = Fj[21],
        kM = Fj[21];
      const ZM = (rM, iM) => {
          if (rM === MM) {
            function jM(...MM) {
              Ij(MM[Fj[0]] = Fj[6], MM[Fj[36]] = function(MM) {
                var rM, iM, OM, SM, jM = MM.length;
                for (Ij(rM = [], iM = Fj[6]), OM = Fj[6]; OM < jM; OM++) rM.push(OM !== Fj[6] && MM[OM] > MM[OM - Fj[1]] ? rM[OM - Fj[1]] + Fj[1] : Fj[1]);
                for (SM = jM - Fj[1]; SM >= Fj[6]; SM--) SM !== jM - Fj[1] && MM[SM] > MM[SM + Fj[1]] && (rM[SM] = Math.max(rM[SM], rM[SM + Fj[1]] + Fj[1])), iM += rM[SM];
                return iM
              }, console.log(MM[Fj[36]]))
            }
            if ("UvrHxS" + Fj[232] in Xj && jM(), wM === Fj[4]) {
              function aM(...MM) {
                Ij(MM[Fj[0]] = Fj[6], MM[-Fj[194]] = function(...MM) {
                  function rM(...MM) {
                    return MM[Fj[0]] = Fj[2], aM(OM(PM(MM[Fj[6]]), PM(MM[Fj[1]])))
                  }

                  function iM(...MM) {
                    return MM[Fj[0]] = Fj[5],
                      function(...MM) {
                        var rM, iM, OM, SM;
                        for (Ij(MM[Fj[0]] = Fj[2], MM[Fj[36]] = MM[Fj[1]].length, MM[Fj[190]] = Array()), MM[-Fj[189]] = Array(Math.ceil(MM[Fj[6]].length / Fj[2])), rM = Fj[6]; rM < MM[-Fj[189]].length; rM++) MM[-Fj[189]][rM] = MM[Fj[6]].charCodeAt(rM * Fj[2]) << Fj[31] | MM[Fj[6]].charCodeAt(rM * Fj[2] + Fj[1]);
                        for (; MM[-Fj[189]].length > Fj[6];) {
                          for (Ij(SM = Array(), OM = Fj[6]), rM = Fj[6]; rM < MM[-Fj[189]].length; rM++) Ij(OM = (OM << Fj[32]) + MM[-Fj[189]][rM], iM = Math.floor(OM / MM[Fj[36]]), OM -= iM * MM[Fj[36]]), (SM.length > Fj[6] || iM > Fj[6]) && (SM[SM.length] = iM);
                          Ij(MM[Fj[190]][MM[Fj[190]].length] = OM, MM[-Fj[189]] = SM)
                        }
                        for (MM[Fj[22]] = "", rM = MM[Fj[190]].length - Fj[1]; rM >= Fj[6]; rM--) MM[Fj[22]] += MM[Fj[1]].charAt(MM[Fj[190]][rM]);
                        for (MM[Fj[40]] = Math.ceil(MM[Fj[6]].length * Fj[31] / (Math.log(MM[Fj[1]].length) / Math.log(Fj[2]))), rM = MM[Fj[22]].length; rM < MM[Fj[40]]; rM++) MM[Fj[22]] = MM[Fj[1]][Fj[6]] + MM[Fj[22]];
                        return MM[Fj[22]]
                      }(OM(PM(MM[Fj[6]]), PM(MM[Fj[1]])), MM[Fj[2]])
                  }

                  function OM(...MM) {
                    Ij(MM[Fj[0]] = Fj[2], MM[Fj[36]] = nM(MM[Fj[6]])), MM[Fj[36]].length > Fj[32] && (MM[Fj[36]] = lM(MM[Fj[36]], MM[Fj[6]].length * Fj[31]));
                    var rM = Array(Fj[32]),
                      iM = Array(Fj[32]);
                    for (MM[Fj[5]] = Fj[6]; MM[Fj[5]] < Fj[32]; MM[Fj[5]]++) Ij(rM[MM[Fj[5]]] = MM[Fj[36]][MM[Fj[5]]] ^ Fj[65], iM[MM[Fj[5]]] = MM[Fj[36]][MM[Fj[5]]] ^ Fj[66]);
                    return MM[Fj[14]] = lM(rM.concat(nM(MM[Fj[1]])), Fj[35] + MM[Fj[1]].length * Fj[31]), QM(lM(iM.concat(MM[Fj[14]]), Bj(Fj[34], Fj[35], Fj[67])))
                  }

                  function SM(...rM) {
                    rM[Fj[0]] = Fj[1];
                    try {
                      MM[-Fj[183]]
                    } catch (jM) {
                      MM[-Fj[183]] = Fj[6]
                    }
                    for (Ij(rM[Fj[1]] = MM[-Fj[183]] ? Fj[37] + Fj[69] + Fj[70] : Fj[37] + Fj[71] + Fj[72], rM[Fj[184]] = "", rM[Fj[5]] = Fj[3]), rM[Fj[22]] = Fj[6]; rM[Fj[22]] < rM[Fj[6]].length; rM[Fj[22]]++) Ij(rM[Fj[5]] = rM[Fj[6]].charCodeAt(rM[Fj[22]]), rM[Fj[184]] += rM[Fj[1]].charAt(rM[Fj[5]] >>> Fj[14] & Fj[38]) + rM[Fj[1]].charAt(rM[Fj[5]] & Fj[38]));
                    return rM[Fj[184]]
                  }

                  function aM(...rM) {
                    rM[Fj[0]] = Fj[1];
                    try {
                      MM[Fj[24]]
                    } catch (jM) {
                      MM[Fj[24]] = ""
                    }
                    for (Ij(rM[-Fj[187]] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", rM[Fj[2]] = "", rM[Fj[13]] = rM[Fj[6]].length), rM[Fj[185]] = Fj[6]; rM[Fj[185]] < rM[Fj[13]]; rM[Fj[185]] += Fj[5])
                      for (rM[Fj[188]] = rM[Fj[6]].charCodeAt(rM[Fj[185]]) << Fj[32] | (rM[Fj[185]] + Fj[1] < rM[Fj[13]] ? rM[Fj[6]].charCodeAt(rM[Fj[185]] + Fj[1]) << Fj[31] : Fj[6]) | (rM[Fj[185]] + Fj[2] < rM[Fj[13]] ? rM[Fj[6]].charCodeAt(rM[Fj[185]] + Fj[2]) : Fj[6]), rM[-Fj[186]] = Fj[6]; rM[-Fj[186]] < Fj[14]; rM[-Fj[186]]++) rM[Fj[185]] * Fj[31] + rM[-Fj[186]] * Fj[18] > rM[Fj[6]].length * Fj[31] ? rM[Fj[2]] += MM[Fj[24]] : rM[Fj[2]] += rM[-Fj[187]].charAt(rM[Fj[188]] >>> Fj[18] * (Fj[5] - rM[-Fj[186]]) & Fj[44]);
                    return rM[Fj[2]]
                  }

                  function PM(...MM) {
                    var rM, iM;
                    for (Ij(MM[Fj[0]] = Fj[1], MM[Fj[1]] = "", MM[Fj[24]] = -Fj[1]); ++MM[Fj[24]] < MM[Fj[6]].length;) Ij(rM = MM[Fj[6]].charCodeAt(MM[Fj[24]]), iM = MM[Fj[24]] + Fj[1] < MM[Fj[6]].length ? MM[Fj[6]].charCodeAt(MM[Fj[24]] + Fj[1]) : Fj[6]), Fj[79] <= rM && rM <= Fj[80] && Fj[81] <= iM && iM <= Fj[82] && Ij(rM = Fj[83] + ((rM & Fj[42]) << Fj[52]) + (iM & Fj[42]), MM[Fj[24]]++), rM <= Fj[84] ? MM[Fj[1]] += String.fromCharCode(rM) : rM <= Fj[85] ? MM[Fj[1]] += String.fromCharCode(Fj[86] | rM >>> Fj[18] & Fj[87], Fj[45] | rM & Fj[44]) : rM <= Fj[55] ? MM[Fj[1]] += String.fromCharCode(Fj[88] | rM >>> Fj[46] & Fj[38], Fj[45] | rM >>> Fj[18] & Fj[44], Fj[45] | rM & Fj[44]) : rM <= Fj[89] && (MM[Fj[1]] += String.fromCharCode(Fj[90] | rM >>> Fj[51] & Fj[50], Fj[45] | rM >>> Fj[46] & Fj[44], Fj[45] | rM >>> Fj[18] & Fj[44], Fj[45] | rM & Fj[44]));
                    return MM[Fj[1]]
                  }

                  function nM(...MM) {
                    for (Ij(MM[Fj[0]] = Fj[1], MM[Fj[36]] = Array(MM[Fj[6]].length >> Fj[2])), MM[Fj[24]] = Fj[6]; MM[Fj[24]] < MM[Fj[36]].length; MM[Fj[24]]++) MM[Fj[36]][MM[Fj[24]]] = Fj[6];
                    for (MM[Fj[24]] = Fj[6]; MM[Fj[24]] < MM[Fj[6]].length * Fj[31]; MM[Fj[24]] += Fj[31]) MM[Fj[36]][MM[Fj[24]] >> Fj[20]] |= (MM[Fj[6]].charCodeAt(MM[Fj[24]] / Fj[31]) & Fj[47]) << Fj[49] - MM[Fj[24]] % Fj[48];
                    return MM[Fj[36]]
                  }

                  function QM(...MM) {
                    for (Ij(MM[Fj[0]] = Fj[1], MM[Fj[36]] = ""), MM[Fj[2]] = Fj[6]; MM[Fj[2]] < MM[Fj[6]].length * Fj[48]; MM[Fj[2]] += Fj[31]) MM[Fj[36]] += String.fromCharCode(MM[Fj[6]][MM[Fj[2]] >> Fj[20]] >>> Fj[49] - MM[Fj[2]] % Fj[48] & Fj[47]);
                    return MM[Fj[36]]
                  }

                  function zM(...MM) {
                    return MM[Fj[0]] = Fj[2], MM[Fj[6]] >>> MM[Fj[1]] | MM[Fj[6]] << Fj[48] - MM[Fj[1]]
                  }

                  function LM(MM, rM) {
                    return MM >>> rM
                  }

                  function mM(...MM) {
                    return MM[Fj[0]] = Fj[5], MM[Fj[6]] & MM[Fj[1]] ^ ~MM[Fj[6]] & MM[Fj[2]]
                  }

                  function HM(...MM) {
                    return MM[Fj[0]] = Fj[5], MM[Fj[6]] & MM[Fj[1]] ^ MM[Fj[6]] & MM[Fj[2]] ^ MM[Fj[1]] & MM[Fj[2]]
                  }

                  function hM(...MM) {
                    return MM[Fj[0]] = Fj[1], zM(MM[Fj[6]], Fj[2]) ^ zM(MM[Fj[6]], Fj[92]) ^ zM(MM[Fj[6]], Fj[93])
                  }

                  function JM(...MM) {
                    return MM[Fj[0]] = Fj[1], zM(MM[Fj[6]], Fj[18]) ^ zM(MM[Fj[6]], Fj[94]) ^ zM(MM[Fj[6]], Fj[17])
                  }

                  function dM(...MM) {
                    return MM[Fj[0]] = Fj[1], zM(MM[Fj[6]], Fj[50]) ^ zM(MM[Fj[6]], Fj[51]) ^ LM(MM[Fj[6]], Fj[5])
                  }

                  function yM(...MM) {
                    return MM[Fj[0]] = Fj[1], zM(MM[Fj[6]], Fj[95]) ^ zM(MM[Fj[6]], Fj[53]) ^ LM(MM[Fj[6]], Fj[52])
                  }

                  function lM(...rM) {
                    var iM, OM, SM, jM, aM, PM, nM, QM, zM, LM, lM, UM;
                    for (Ij(rM[Fj[0]] = Fj[2], rM[Fj[2]] = new Array(Fj[166], -Fj[167], Fj[168], -Fj[169], Fj[170], -Fj[171], Fj[172], Fj[173]), rM[-Fj[193]] = new Array(Fj[54])), Ij(rM[Fj[6]][rM[Fj[1]] >> Fj[20]] |= Fj[45] << Fj[49] - rM[Fj[1]] % Fj[48], rM[Fj[6]][(rM[Fj[1]] + Fj[54] >> Fj[174] << Fj[14]) + Fj[38]] = rM[Fj[1]]), zM = Fj[6]; zM < rM[Fj[6]].length; zM += Fj[32]) {
                      for (Ij(iM = rM[Fj[2]][Fj[6]], OM = rM[Fj[2]][Fj[1]], SM = rM[Fj[2]][Fj[2]], jM = rM[Fj[2]][Fj[5]], aM = rM[Fj[2]][Fj[14]], PM = rM[Fj[2]][Fj[20]], nM = rM[Fj[2]][Fj[18]], QM = rM[Fj[2]][Fj[50]]), LM = Fj[6]; LM < Fj[54]; LM++) Ij(LM < Fj[32] ? rM[-Fj[193]][LM] = rM[Fj[6]][LM + zM] : rM[-Fj[193]][LM] = EM(EM(EM(yM(rM[-Fj[193]][LM - Fj[2]]), rM[-Fj[193]][LM - Fj[50]]), dM(rM[-Fj[193]][LM - Fj[38]])), rM[-Fj[193]][LM - Fj[32]]), lM = EM(EM(EM(EM(QM, JM(aM)), mM(aM, PM, nM)), MM[Fj[2]][LM]), rM[-Fj[193]][LM]), UM = EM(hM(iM), HM(iM, OM, SM)), QM = nM, nM = PM, PM = aM, aM = EM(jM, lM), jM = SM, SM = OM, OM = iM, iM = EM(lM, UM));
                      Ij(rM[Fj[2]][Fj[6]] = EM(iM, rM[Fj[2]][Fj[6]]), rM[Fj[2]][Fj[1]] = EM(OM, rM[Fj[2]][Fj[1]]), rM[Fj[2]][Fj[2]] = EM(SM, rM[Fj[2]][Fj[2]]), rM[Fj[2]][Fj[5]] = EM(jM, rM[Fj[2]][Fj[5]]), rM[Fj[2]][Fj[14]] = EM(aM, rM[Fj[2]][Fj[14]]), rM[Fj[2]][Fj[20]] = EM(PM, rM[Fj[2]][Fj[20]]), rM[Fj[2]][Fj[18]] = EM(nM, rM[Fj[2]][Fj[18]]), rM[Fj[2]][Fj[50]] = EM(QM, rM[Fj[2]][Fj[50]]))
                    }
                    return rM[Fj[2]]
                  }

                  function EM(...MM) {
                    return Ij(MM[Fj[0]] = Fj[2], MM[Fj[36]] = (MM[Fj[6]] & Fj[55]) + (MM[Fj[1]] & Fj[55]), MM[Fj[24]] = (MM[Fj[6]] >> Fj[32]) + (MM[Fj[1]] >> Fj[32]) + (MM[Fj[36]] >> Fj[32])), MM[Fj[24]] << Fj[32] | MM[Fj[36]] & Fj[55]
                  }
                  return Ij(MM[Fj[0]] = Fj[6], MM[-Fj[183]] = Fj[6], MM[Fj[24]] = ""), MM[Fj[2]] = new Array(Fj[102], Fj[103], -Fj[104], -Fj[105], Fj[106], Fj[107], -Fj[108], -Fj[109], -Fj[110], Fj[111], Fj[112], Fj[113], Fj[114], -Fj[115], -Fj[116], -Fj[117], -Fj[118], -Fj[119], Fj[120], Fj[121], Fj[122], Fj[123], Fj[124], Fj[125], -Fj[126], -Fj[127], -Fj[128], -Fj[129], -Fj[130], -Fj[131], Fj[132], Fj[133], Fj[134], Fj[135], Fj[136], Fj[137], Fj[138], Fj[139], -Fj[140], -Fj[141], -Fj[142], -Fj[143], -Fj[144], -Fj[145], -Fj[146], -Fj[147], -Fj[148], Fj[149], Fj[150], Fj[151], Fj[152], Fj[153], Fj[154], Fj[155], Fj[156], Fj[157], Fj[158], Fj[159], -Fj[160], -Fj[161], -Fj[162], -Fj[163], -Fj[164], -Fj[165]), {
                    hex: function(...MM) {
                      return MM[Fj[0]] = Fj[1], SM(function(...MM) {
                        return MM[Fj[0]] = Fj[1], QM(lM(nM(MM[Fj[6]]), MM[Fj[6]].length * Fj[31]))
                      }(PM(MM[Fj[6]])))
                    },
                    b64: rM,
                    any: iM,
                    hex_hmac: function(...MM) {
                      return MM[Fj[0]] = Fj[2], SM(OM(PM(MM[Fj[6]]), PM(MM[Fj[1]])))
                    },
                    b64_hmac: rM,
                    any_hmac: iM
                  }
                }(), console.log(MM[-Fj[194]]))
              }
              "EjOBHW" in Xj && aM(), wM = typeof iM === Fj[229] ? iM : -Fj[1]
            } else tM = Fj[23];
            return
          }
          const OM = bM[rM];
          if (!iM) {
            if (OM) {
              function PM(...MM) {
                function rM(...MM) {
                  return MM[Fj[0]] = Fj[1], MM[Fj[6]][Fj[1]] * Fj[199] + (MM[Fj[6]][Fj[6]] < Fj[6] ? Fj[198] | MM[Fj[6]][Fj[6]] : MM[Fj[6]][Fj[6]])
                }

                function iM(...MM) {
                  switch (MM[Fj[0]] = Fj[1], ((MM[Fj[6]] & Fj[198]) !== Fj[6]) * Fj[1] + (MM[Fj[6]] < Fj[6]) * Fj[2]) {
                    case Fj[6]:
                      return [MM[Fj[6]] % Fj[198], Math.trunc(MM[Fj[6]] / Fj[199])];
                    case Fj[1]:
                      return [MM[Fj[6]] % Fj[198] - Fj[198], Math.trunc(MM[Fj[6]] / Fj[199]) + Fj[1]];
                    case Fj[2]:
                      return [((MM[Fj[6]] + Fj[198]) % Fj[198] + Fj[198]) % Fj[198], Math.round(MM[Fj[6]] / Fj[199])];
                    case Fj[5]:
                      return [MM[Fj[6]] % Fj[198], Math.trunc(MM[Fj[6]] / Fj[199])]
                  }
                }
                MM[Fj[0]] = Fj[6], Ij(MM[Fj[36]] = rM([Fj[2], Fj[14]]), MM[Fj[1]] = rM([Fj[1], Fj[2]]), MM[Fj[13]] = MM[Fj[36]] + MM[Fj[1]], MM[-Fj[200]] = MM[Fj[13]] - MM[Fj[1]], MM[Fj[14]] = MM[-Fj[200]] * Fj[2], MM[Fj[201]] = MM[Fj[14]] / Fj[2], console.log(iM(MM[Fj[13]])), console.log(iM(MM[-Fj[200]])), console.log(iM(MM[Fj[14]])), console.log(iM(MM[Fj[201]])))
              }
              "EZojAH" in Xj && PM(), gM = Fj[23]
            }
            return
          }
          if (rM !== eM) {
            function nM(...MM) {
              Ij(MM[Fj[0]] = Fj[6], MM[Fj[36]] = function(...MM) {
                for (Ij(MM[Fj[0]] = Fj[1], MM[Fj[1]] = MM[Fj[6]].length, MM[Fj[2]] = [], MM[Fj[202]] = Fj[6], MM[Fj[14]] = Fj[6], MM[Fj[6]].sort(((MM, rM) => MM - rM))), MM[Fj[40]] = Fj[6]; MM[Fj[40]] < MM[Fj[1]]; MM[Fj[40]]++)
                  if (!(MM[Fj[40]] > Fj[6] && MM[Fj[6]][MM[Fj[40]]] === MM[Fj[6]][MM[Fj[40]] - Fj[1]]))
                    for (Ij(MM[Fj[202]] = MM[Fj[40]] + Fj[1], MM[Fj[14]] = MM[Fj[1]] - Fj[1]); MM[Fj[202]] < MM[Fj[14]];)
                      if (MM[Fj[6]][MM[Fj[40]]] + MM[Fj[6]][MM[Fj[202]]] + MM[Fj[6]][MM[Fj[14]]] < Fj[6]) MM[Fj[202]]++;
                      else if (MM[Fj[6]][MM[Fj[40]]] + MM[Fj[6]][MM[Fj[202]]] + MM[Fj[6]][MM[Fj[14]]] > Fj[6]) MM[Fj[14]]--;
                else {
                  for (MM[Fj[2]].push([MM[Fj[6]][MM[Fj[40]]], MM[Fj[6]][MM[Fj[202]]], MM[Fj[6]][MM[Fj[14]]]]); MM[Fj[202]] < MM[Fj[14]] && MM[Fj[6]][MM[Fj[202]]] === MM[Fj[6]][MM[Fj[202]] + Fj[1]];) MM[Fj[202]]++;
                  for (; MM[Fj[202]] < MM[Fj[14]] && MM[Fj[6]][MM[Fj[14]]] === MM[Fj[6]][MM[Fj[14]] - Fj[1]];) MM[Fj[14]]--;
                  Ij(MM[Fj[202]]++, MM[Fj[14]]--)
                }
                return MM[Fj[2]]
              }, console.log(MM[Fj[36]]))
            }
            return "JZpU7b" in Xj && nM(), void(bM[rM] = iM)
          }
          bM[rM] = Fj[23];
          const SM = typeof iM === Fj[25] ? iM : "" + iM;
          if (sM[SM]) {
            function QM(...MM) {
              MM[Fj[0]] = Fj[6];
              const rM = require("big-integer");
              Ij(MM[Fj[5]] = class {
                static randomPrime(...MM) {
                  MM[Fj[0]] = Fj[1];
                  const iM = rM.one.shiftLeft(MM[Fj[6]] - Fj[1]),
                    OM = rM.one.shiftLeft(MM[Fj[6]]).prev();
                  for (; Fj[23];) {
                    let MM = rM.randBetween(iM, OM);
                    if (MM.isProbablePrime(Fj[67])) return MM
                  }
                }
                static generate(...MM) {
                  MM[Fj[0]] = Fj[1];
                  const iM = rM(65537);
                  let OM, SM;
                  MM[Fj[36]] = Fj[3];
                  do {
                    Ij(OM = this.randomPrime(MM[Fj[6]] / Fj[2]), SM = this.randomPrime(MM[Fj[6]] / Fj[2]), MM[Fj[36]] = rM.lcm(OM.prev(), SM.prev()))
                  } while (rM.gcd(iM, MM[Fj[36]]).notEquals(Fj[1]) || OM.minus(SM).abs().shiftRight(MM[Fj[6]] / Fj[2] - 100).isZero());
                  return {
                    e: iM,
                    n: OM.multiply(SM),
                    d: iM.modInv(MM[Fj[36]])
                  }
                }
                static encrypt(...MM) {
                  return MM[Fj[0]] = Fj[5], rM(MM[Fj[6]]).modPow(MM[Fj[2]], MM[Fj[1]])
                }
                static decrypt(...MM) {
                  return MM[Fj[0]] = Fj[5], rM(MM[Fj[6]]).modPow(MM[Fj[1]], MM[Fj[2]])
                }
                static encode(...MM) {
                  MM[Fj[0]] = Fj[1];
                  const iM = MM[Fj[6]].split("").map((MM => MM.charCodeAt())).join("");
                  return rM(iM)
                }
                static decode(...MM) {
                  MM[Fj[0]] = Fj[1];
                  const rM = MM[Fj[6]].toString();
                  MM[Fj[36]] = "";
                  for (let iM = Fj[6]; iM < rM.length; iM += Fj[2]) {
                    let OM = Number(rM.substr(iM, Fj[2]));
                    OM <= Fj[77] ? (MM[Fj[36]] += String.fromCharCode(Number(rM.substr(iM, Fj[5]))), iM++) : MM[Fj[36]] += String.fromCharCode(OM)
                  }
                  return MM[Fj[36]]
                }
              }, module.exports = MM[Fj[5]])
            }
            "Xie5Af" + Fj[205] in Xj && QM()
          } else if ((Fj[6], Jj[Fj[177]])(SM)) kM = Fj[23];
          else if ((Fj[6], Jj[Fj[203]])(SM))
            if (RM < 8) {
              function zM(...MM) {
                var rM;
                Ij(MM[Fj[0]] = Fj[6], rM = function(...MM) {
                  Ij(MM[Fj[0]] = Fj[1], this.vL = MM[Fj[6]], this.length = Fj[6], this.map = {}, this.head = Fj[4], this.tail = Fj[4])
                }, rM.prototype.get = function(...MM) {
                  var rM;
                  return Ij(MM[Fj[0]] = Fj[1], rM = this.map[MM[Fj[6]]]), rM ? (this.remove(rM), this.insert(rM.key, rM.val), rM.val) : -Fj[1]
                }, rM.prototype.put = function(...MM) {
                  Ij(MM[Fj[0]] = Fj[2], this.map[MM[Fj[6]]] ? (this.remove(this.map[MM[Fj[6]]]), this.insert(MM[Fj[6]], MM[Fj[1]])) : this.length === this.vL ? (this.remove(this.head), this.insert(MM[Fj[6]], MM[Fj[1]])) : (this.insert(MM[Fj[6]], MM[Fj[1]]), this.length++))
                }, rM.prototype.remove = function(...MM) {
                  Ij(MM[Fj[0]] = Fj[1], MM[Fj[36]] = MM[Fj[6]].prev, MM[Fj[204]] = MM[Fj[6]].next), MM[Fj[204]] && (MM[Fj[204]].prev = MM[Fj[36]]), MM[Fj[36]] && (MM[Fj[36]].next = MM[Fj[204]]), this.head === MM[Fj[6]] && (this.head = MM[Fj[204]]), this.tail === MM[Fj[6]] && (this.tail = MM[Fj[36]]), delete this.map[MM[Fj[6]].key]
                }, rM.prototype.insert = function(...MM) {
                  Ij(MM[Fj[0]] = Fj[2], MM[Fj[36]] = new List(MM[Fj[6]], MM[Fj[1]]), this.tail ? (this.tail.next = MM[Fj[36]], MM[Fj[36]].prev = this.tail, this.tail = MM[Fj[36]]) : (this.tail = MM[Fj[36]], this.head = MM[Fj[36]]), this.map[MM[Fj[6]]] = MM[Fj[36]])
                }, console.log(rM))
              }
              "SQK3apS" in Xj && zM(), Ij(sM[SM] = Fj[23], uM[RM++] = SM, DM ||= (Fj[6], Jj[Fj[205]])(SM))
            } else {
              function LM(...MM) {
                MM[Fj[0]] = Fj[6]
              }
              "FCzU3V" in Xj && LM(), !DM && (Fj[6], Jj[Fj[205]])(SM) && Ij(sM[SM] = Fj[23], uM[8 - Fj[1]] = SM, DM = Fj[23])
            }
          else WM < 4 && Ij(sM[SM] = Fj[23], pM[WM++] = SM)
        },
        oM = (Fj[6], dj.j)(MM),
        fM = oM ? oM.replaced : (() => {
          try {
            return SM[MM]
          } catch {
            return Fj[3]
          }
        })();
      if (CM((() => {
          SM[MM] = ZM
        })), typeof fM === Fj[206] + Fj[207]) {
        const MM = fM;
        CM((() => {
          MM(ZM)
        }))
      }
      if (oM) {
        const rM = oM.reports;
        CM((() => {
          for (const iM in rM)(Fj[6], rS[Fj[208]])(rS[Fj[209]], rM, [iM]) && iM !== MM && ZM(iM, rM[iM])
        }))
      }
      const YM = oM ? Fj[2] : Fj[1];
      let NM = Fj[21];
      const AM = (...rM) => (rM[Fj[0]] = Fj[6], tM ? Fj[23] : (Ij(rM[-Fj[210]] = Fj[21], NM = !CM((() => {
          rM[-Fj[210]] = SM[MM] !== ZM
        }))), rM[-Fj[210]])),
        xM = lM(((...rM) => {
          rM[Fj[0]] = Fj[6];
          const iM = (Fj[6], rS.M)(SM, MM);
          return (iM === Fj[4] || iM === void Fj[6] ? void Fj[6] : iM.configurable) !== Fj[21] || typeof iM[Fj[231]] !== Fj[206] + Fj[207] || wM !== YM
        })),
        vM = {},
        FM = () => {
          try {
            return navigator[Fj[226] + "tSub"]
          } catch {
            return vM
          }
        },
        BM = FM(),
        XM = iM,
        IM = XM === Fj[4] ? ((...MM) => {
          MM[Fj[0]] = Fj[6];
          Ij(MM[Fj[36]] = Fj[21], MM[Fj[1]] = 60 - Fj[1]);
          const rM = TextDecoder[Fj[211] + Fj[212]][Fj[213]],
            iM = function() {
              MM[Fj[1]]++, 60 === MM[Fj[1]] && (Zj((() => HM(Fj[21]))) && (MM[Fj[36]] = Fj[23]), MM[Fj[1]] = Fj[6]);
              for (var iM = arguments[Fj[0]], OM = new Array(iM), SM = Fj[6]; SM < iM; SM++) OM[SM] = arguments[SM];
              return (Fj[6], rS[Fj[208]])(rM, this, OM)
            };
          return CM((() => {
            TextDecoder[Fj[211] + Fj[212]][Fj[213]] = iM
          })), () => MM[Fj[36]] ? Fj[2] : fj((() => TextDecoder[Fj[211] + Fj[212]][Fj[213]] !== iM ? Fj[18] : Fj[6]))
        })() : () => fj((() => XM[Fj[224] + Fj[225]]())),
        KM = (Fj[6], pr.m)(),
        qM = (Fj[6], rS[Fj[177]])(Fj[4]),
        TM = (Fj[6], rS[Fj[177]])(Fj[4]);
      let VM = Fj[6],
        cM = Fj[6],
        Mr = Fj[6];
      const rr = (Fj[6], rS[Fj[177]])(Fj[4]),
        ir = (Fj[6], rS[Fj[177]])(Fj[4]);
      let Or = Fj[4],
        Sr = (Fj[6], rS[Fj[177]])(Fj[4]);
      const jr = (...MM) => {
          Ij(MM[Fj[0]] = Fj[2], qM[VM] = MM[Fj[6]], TM[VM] = MM[Fj[1]], VM++)
        },
        ar = (...MM) => (Ij(MM[Fj[0]] = Fj[1], MM[Fj[1]] = Fj[3]), (MM[Fj[1]] = (TM[MM[Fj[6]]] ? ir : rr)[qM[MM[Fj[6]]]]) !== Fj[4] && MM[Fj[1]] !== void Fj[6] ? MM[Fj[1]] : -Fj[1]),
        Pr = (Fj[6], rS[Fj[7]])("d2lvNjQz"),
        nr = (Fj[6], rS[Fj[7]])("amtsa2plZndu"),
        Qr = [
          [(Fj[6], rS[Fj[7]])("aW9qZndlODNq"), "2"],
          [(Fj[6], rS[Fj[7]])("a3Bq"), "4"],
          [(Fj[6], rS[Fj[7]])("dXJocmZm"), "5"]
        ],
        zr = [
          [(Fj[6], rS[Fj[7]])(Fj[215] + Fj[214]), Fj[245]],
          [(Fj[6], rS[Fj[7]])(Fj[215] + "w="), Fj[205]]
        ],
        Lr = (Fj[6], rS[Fj[7]])("eTR5bnM="),
        mr = (Fj[6], rS[Fj[7]])("aHRleWpldA=="),
        Hr = (Fj[6], rS[Fj[7]])("c2RmbGpneGxmY2pr"),
        hr = [
          [(Fj[6], rS[Fj[7]])("a3NhZmR1"), Fj[177]],
          [(Fj[6], rS[Fj[7]])("ZGZnYWFzZGFz"), Fj[219]],
          [Hr, Fj[217]],
          [(Fj[6], rS[Fj[7]])("bGFzZWRraGFz"), Fj[7]],
          [(Fj[6], rS[Fj[7]])("cW16ZjhrM24="), Fj[36]]
        ],
        Jr = [
          [Lr, Fj[203]],
          [mr, Fj[233]],
          [(Fj[6], rS[Fj[7]])("bmI3ZnEy"), Fj[24]]
        ],
        dr = (Fj[6], rS[Fj[7]])("bGtxM20="),
        yr = (Fj[6], rS[Fj[7]])("bWtxN3" + Fj[214]),
        Er = ["mk:tw", "mk:jf"],
        Ur = ((...MM) => {
          MM[Fj[0]] = Fj[6];
          try {
            return MM[-Fj[216]] = Fj[3], (MM[-Fj[216]] = SM[(Fj[6], rS[Fj[7]])("V2ViU29ja2V0")]) === Fj[4] || MM[-Fj[216]] === void Fj[6] ? void Fj[6] : MM[-Fj[216]][Fj[211] + Fj[212]]
          } catch {
            return Fj[3]
          }
        })(),
        Gr = ["send", "close", "addEventListener", "removeEventListener", Fj[221] + Fj[220] + Fj[217]],
        Cr = ["onmessage", "onopen", "onclos" + Fj[40], "onerro" + Fj[177]];
      let er = Fj[21];
      const br = (...MM) => {
          MM[Fj[0]] = Fj[6];
          const iM = rM();
          iM === Fj[4] || er || (er = lM((() => {
            if (Ur !== Fj[3] && (Fj[6], rS.Q)(iM) !== Ur) return Fj[23];
            for (let MM = Fj[6]; MM < Gr[Fj[0]]; MM++)
              if ((Fj[6], rS[Fj[208]])(rS[Fj[209]], iM, [Gr[MM]])) return Fj[23];
            for (let MM = Fj[6]; MM < Cr[Fj[0]]; MM++)
              if (iM[Cr[MM]] !== Fj[4] && iM[Cr[MM]] !== Fj[3]) return Fj[23];
            return Fj[21]
          })))
        },
        wr = (Fj[6], rS[Fj[7]])("RXZlbnQ=");
      let tr = cr[Fj[218]][Fj[238]],
        gr = Fj[6];
      const ur = () => gr++ === Fj[20] ? (gr = Fj[6], HM(Fj[21]) ? cr[Fj[13]].CheckFuncHit : Fj[6]) : Fj[6],
        Rr = (Fj[6], rS[Fj[177]])(Fj[4]),
        Wr = OM[Fj[0]];
      for (let nM = Fj[6]; nM < Wr; nM++) {
        const MM = (Fj[6], rS[Fj[208]])(rS.jb, OM, [nM]);
        Rr[nM] = MM >= 99 && MM <= 122 ? MM : Fj[6]
      }
      const sr = (...MM) => {
          return MM[Fj[0]] = Fj[2], typeof MM[Fj[6]] === Fj[206] + Fj[207] && (Fj[6], rS[Fj[208]])(rS.Z, MM[Fj[1]], [(rM = MM[Fj[6]], (0, rS.n)(rS.B, rM, []))]) !== Fj[4];
          var rM
        },
        Dr = new RegExp("^function dispatchEvent\\(\\) \\{\\s*\\[native code\\]\\s*\\}$", ""),
        kr = new RegExp("^function now\\(\\) \\{\\s*\\[native code\\]\\s*\\}$", ""),
        Zr = [
          [Aj["Dispat" + Fj[220] + Fj[217]], () => !sr(EventTarget[Fj[211] + Fj[212]][Fj[221] + Fj[220] + Fj[217]], Dr)],
          [Aj.PerformanceNow, () => !sr(performance[Fj[222]], kr)],
          [Aj.DateNow, () => !sr(Date[Fj[222]], kr)]
        ],
        or = (Fj[6], rS[Fj[177]])(Fj[4]);
      let fr = Fj[6];
      const Yr = {
        stackCheck: (...MM) => {
          Ij(MM[Fj[0]] = Fj[6], MM[-Fj[223]] = Fj[4]);
          const rM = Zj((() => (MM[-Fj[223]] = mM(Fj[23]), MM[-Fj[223]] !== Fj[4])));
          var iM, OM;
          return MM[-Fj[223]] !== Fj[4] && hM === Fj[4] && (iM = MM[-Fj[223]][Fj[26]], OM = MM[-Fj[223]][Fj[27]], hM = (0, Jj.z)(Rj(iM, OM))), rM
        },
        [Fj[224] + Fj[225]]: (...MM) => {
          MM[Fj[0]] = Fj[6];
          const rM = IM();
          if (rM === Fj[2]) return Fj[2];
          if (bM[Pr]) return Fj[5];
          const iM = fj((() => SM[nr] ? Fj[14] : Fj[6]));
          return iM !== Fj[6] ? iM === Fj[14] ? Fj[14] : Fj[6] : rM === oj ? Fj[6] : rM === Fj[18] ? Fj[18] : (UM(), OM = Function[Fj[211] + Fj[212]], jM = Fj[230], aM = MM => MM.writable !== Fj[23], Zj((() => {
            const MM = Object.getOwnPropertyDescriptor(OM, jM);
            return void 0 !== MM && aM(MM)
          })) ? Fj[50] : Fj[6]);
          var OM, jM, aM
        },
        indexPassReplaced: AM,
        [Fj[226] + "tSubChanged"]: (...MM) => {
          if (MM[Fj[0]] = Fj[6], BM === vM || NM) return Fj[21];
          const rM = FM();
          return rM !== vM && rM !== BM
        },
        sQ: (...MM) => {
          Ij(MM[Fj[0]] = Fj[6], MM[Fj[36]] = Wr);
          for (let rM = Fj[6]; rM < Zr[Fj[0]] + fr; rM++) {
            const iM = rM < Zr[Fj[0]] ? Zr[rM] : or[rM - Zr[Fj[0]]];
            iM[Fj[6]] < MM[Fj[36]] && lM(iM[Fj[1]]) && (MM[Fj[36]] = iM[Fj[6]])
          }
          return MM[Fj[36]] < Wr ? Rr[MM[Fj[36]]] : Fj[6]
        },
        rP: () => KM ? pr[Fj[205]] : Fj[31],
        [Fj[227] + Fj[228] + "Subs"]: (...MM) => {
          MM[Fj[0]] = Fj[6];
          const rM = nM[Fj[235]].Wy[Fj[227] + Fj[228]];
          return typeof rM === Fj[229] && rM > Fj[6] ? rM > Fj[55] ? Fj[55] : rM : Fj[6]
        },
        ["getCom" + Fj[244]]: (...MM) => {
          Ij(MM[Fj[0]] = Fj[6], MM[Fj[237]] = Fj[3], VM = Fj[6]);
          for (let iM = Fj[6]; iM < RM; iM++) jr(uM[iM], Fj[23]);
          for (let iM = Fj[6]; iM < Qr[Fj[0]]; iM++) bM[Qr[iM][Fj[6]]] && jr(Qr[iM][Fj[1]], Fj[23]);
          const rM = fj((() => kj(atob[Fj[230]](), zM) ? Fj[6] : Fj[1]));
          rM === Fj[1] && jr(Fj[241], Fj[23]), UM();
          const OM = rM === oj ? oj : fj(((...MM) => {
            MM[Fj[0]] = Fj[6];
            const rM = Object.getOwnPropertyDescriptor(window, "atob");
            return rM === Fj[3] ? oj : rM[Fj[231]] !== Fj[3] ? Fj[1] : Fj[6]
          }));
          OM === Fj[1] && jr(Fj[232], Fj[23]);
          const SM = OM === oj;
          for (let iM = Fj[6]; iM < zr[Fj[0]] && !SM; iM++) bM[zr[iM][Fj[6]]] && jr(zr[iM][Fj[1]], Fj[23]);
          const jM = VM > RM;
          MM[Fj[24]] = Fj[4], RM === Fj[6] && (WM > Fj[6] ? MM[Fj[24]] = pM[Fj[6]] : kM ? MM[Fj[24]] = "fp" : jM || (MM[Fj[24]] = bM[Lr] ? Fj[203] : bM[mr] ? Fj[233] : Fj[4]));
          for (let iM = Fj[6]; iM < hr[Fj[0]] && !SM; iM++) bM[hr[iM][Fj[6]]] && jr(hr[iM][Fj[1]], Fj[23]);
          const aM = VM,
            PM = (Fj[6], Ej[Fj[22]])(),
            nM = PM !== Fj[4] && (Fj[6], lr[Fj[203]])(PM);
          nM && !SM && jr(PM, Fj[21]), xM && jr("ix", Fj[21]), gM && jr("il", Fj[21]);
          for (let iM = Fj[6]; iM < WM; iM++) jr(pM[iM], Fj[23]);
          for (let iM = Fj[6]; iM < Jr[Fj[0]]; iM++) bM[Jr[iM][Fj[6]]] && jr(Jr[iM][Fj[1]], Fj[23]);
          bM[dr] && jr("mk:lk", Fj[23]);
          const QM = ((...MM) => {
            MM[Fj[0]] = Fj[1];
            for (let rM = Fj[6]; rM < Er[Fj[0]]; rM++)
              if (MM[Fj[6]] === Er[rM]) return Er[rM];
            return Fj[4]
          })(bM[yr]);
          if (QM !== Fj[4] && jr(QM, Fj[23]), iM !== Fj[4] && GM(iM.emitReplaced) === Fj[23] && jr("mk:em", Fj[23]), er && jr("3s", Fj[21]), rS[Fj[234]] && jr("3b", Fj[21]), UM(), EM && jr("3d", Fj[21]), SM && jr("3g", Fj[21]), PM === Fj[4] || nM || jr(PM, Fj[21]), hM !== Fj[4] && jr(hM, Fj[21]), yM === Fj[4] && iM !== Fj[4]) {
            const MM = GM(iM[Fj[224] + "mMeshHitStack"]);
            typeof MM === Fj[25] && (yM = function(MM, rM, iM) {
              let OM = 0;
              for (; OM < iM && -1 === Cj(MM, rM[OM]);) OM++;
              return (0, Jj.n)(Rj(MM, OM < iM ? rM[OM] : null))
            }(MM, LM, LM[Fj[0]] - Fj[1]))
          }
          var mM;
          if (yM !== Fj[4] && jr(yM, Fj[21]), JM === Fj[4] && pr[Fj[235]] !== Fj[4] && Ij((mM = pr[Fj[235]], JM = (0, Jj.j)(sj(mM).reader)), dM = Dj(pr[Fj[235]], GM((() => pr[Fj[40]] === Fj[4] ? Fj[4] : (Fj[6], rS.mb)(pr[Fj[40]]))))), JM !== Fj[4] && jr(JM, Fj[21]), dM !== Fj[4] && jr(dM, Fj[21]), VM === Fj[6]) return Fj[4];
          if (MM[Fj[24]] === Fj[4] && TM[Fj[6]] && !(Fj[6], Jj[Fj[205]])(qM[Fj[6]]))
            for (let iM = Fj[1]; iM < aM; iM++)
              if (TM[iM] && (Fj[6], Jj[Fj[205]])(qM[iM])) {
                const MM = qM[iM];
                for (let rM = iM; rM > Fj[6]; rM--) Ij(qM[rM] = qM[rM - Fj[1]], TM[rM] = TM[rM - Fj[1]]);
                Ij(qM[Fj[6]] = MM, TM[Fj[6]] = Fj[23]);
                break
              } if (Ij(MM[-Fj[78]] = Fj[6], MM[-Fj[236]] = MM[Fj[24]] === Fj[4] ? Fj[6] : aM), MM[-Fj[236]] > Fj[6] && PM !== Fj[4] && nM && !SM) {
            for (let rM = MM[-Fj[236]]; rM > Fj[6]; rM--) Ij(qM[rM] = qM[rM - Fj[1]], TM[rM] = TM[rM - Fj[1]]);
            Ij(qM[Fj[6]] = PM, TM[Fj[6]] = Fj[21], MM[-Fj[78]] = Fj[1], MM[-Fj[236]]++)
          }
          if (MM[Fj[40]] = Fj[6], cM++ % Fj[2] === Fj[1])
            for (let iM = Fj[1]; iM < VM; iM++) ar(iM) < ar(MM[Fj[40]]) && (MM[Fj[40]] = iM);
          const HM = qM[MM[Fj[40]]];
          (TM[MM[Fj[40]]] ? ir : rr)[HM] = Mr++;
          const lM = MM[Fj[40]] >= MM[-Fj[78]] && MM[Fj[40]] < MM[-Fj[236]];
          if (!TM[MM[Fj[40]]] || HM === MM[Fj[24]] || MM[Fj[40]] === Fj[6] && !lM) return HM === Fj[217] ? (Fj[6], Jj[Fj[209]])(bM[Hr], Jj[Fj[22]]) : HM;
          const CM = (MM[Fj[237]] = MM[Fj[24]]) !== Fj[4] && MM[Fj[237]] !== void Fj[6] ? MM[Fj[237]] : qM[Fj[6]];
          return CM !== Or && Ij(Or = CM, Sr = (Fj[6], rS[Fj[177]])(Fj[4])), Sr[HM] ??= (Fj[6], Jj.x)(HM, CM)
        }
      };
      let Nr = cr[Fj[218]][Fj[238]];
      const Ar = () => tr !== cr[Fj[218]][Fj[238]] ? tr : Nr;
      let xr = Fj[6],
        vr = Fj[2],
        Fr = Fj[6],
        Br = Fj[6];
      return {
        checks: Yr,
        checkEvent: (...MM) => {
          MM[Fj[0]] = Fj[1];
          try {
            const rM = SM[wr];
            if (typeof rM === Fj[206] + Fj[207] && !(MM[Fj[6]] instanceof rM) && !(Fj[6], rS.F)(MM[Fj[6]])) return tr = cr[Fj[218]].NotEvent, Fj[6];
            if (MM[Fj[6]].isTrusted === Fj[21]) return Fj[6];
            let iM = Fj[6];
            for (const OM in MM[Fj[6]]) iM++;
            return iM < Fj[52] ? (tr = cr[Fj[218]]["FewPropertie" + Fj[219]], Fj[6]) : ur()
          } catch {}
          return Fj[6]
        },
        checkPadCall: () => {
          try {
            return ur()
          } catch {
            return Fj[6]
          }
        },
        usedProp: Ar,
        watchHeld: (...MM) => {
          Ij(MM[Fj[0]] = Fj[2], MM[Fj[239]] = Fj[3]);
          const rM = CM((() => {
            MM[Fj[239]] = MM[Fj[1]]()
          }));
          or[fr++] = [MM[Fj[6]], () => !rM || MM[Fj[1]]() !== MM[Fj[239]]]
        },
        bL: (...MM) => {
          MM[Fj[0]] = Fj[6];
          const rM = AM();
          return (MM => {
            let rM = Fj[3],
              OM = Fj[3];
            if (iM !== Fj[4]) {
              const MM = GM(iM.tz),
                SM = "v3" === MM ? Fj[5] : "v5" === MM ? Fj[20] : "v6" === MM ? Fj[18] : Fj[2];
              SM !== Fj[2] && (vr = SM);
              const jM = GM(iM["inbuil" + Fj[242] + Fj[243]]);
              typeof jM === Fj[229] && jM >= Fj[6] && jM <= Fj[94] && (jM | Fj[6]) === jM && (Fr = jM), Ij(rM = GM(iM.reflectApplyHit), OM = GM(iM.definerHit))
            }
            const SM = MM ? Fj[38] : "11" === OM ? Fj[94] : "13" === OM ? Fj[92] : rM !== Fj[3] && rM !== Fj[4] ? Fj[2] : "10" === OM ? Fj[52] : "12" === OM ? Fj[46] : Fj[6];
            SM !== Fj[6] && (Br = SM)
          })(rM), xr++ % 10 === Fj[6] && (br(), Zj((() => !kj(SM[jM][Fj[230]][Fj[230]](), zM))) && (Nr = Nr === cr[Fj[218]][Fj[240]] ? cr[Fj[218]][Fj[240]] : cr[Fj[218]].Fr), Zj((() => !kj(SM[jM][Fj[230]](), zM))) && (Nr = cr[Fj[218]][Fj[240]])), {
            flags: rM ? cr[Fj[13]].Butto : Fj[6],
            values: [
              [cr[Fj[241]].PhysicsVersion, vr],
              [cr[Fj[241]]["Inbuil" + Fj[242] + Fj[243]], Fr],
              [cr[Fj[241]]["AltCom" + Fj[244]], Br],
              [cr[Fj[241]]["ProbeUsedPro" + Fj[245]], Ar()]
            ]
          }
        }
      }
    };
    const Kj = "[bloxd-wasm-client]",
      qj = "bloxdWasmDownloadFailed",
      Tj = Hi.g,
      Vj = "boot",
      cj = "playSources",
      Ma = "wasmBuild",
      ra = "bloxd-wasm-joined",
      ia = "bloxd-wasm-first-view",
      Oa = "bloxd-wasm-playable-legacy",
      Sa = 1048576,
      ja = 8 * Sa,
      aa = 1006,
      Pa = 1e3,
      na = "You lost connection to the server.",
      Qa = "general:lostConnection",
      za = 1048576,
      La = 5e3,
      ma = 100,
      Ha = [2e3, 1e4, 3e4],
      ha = 3e4;
    let Ja = null,
      da = null,
      ya = !1,
      la = !1,
      Ea = !1,
      Ua = null,
      Ga = null,
      Ca = null,
      ea = null,
      ba = null,
      wa = null,
      ta = null;
    const ga = new class {
      constructor(MM, rM) {
        let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => performance.now();
        this.master = MM, this.soundOn = rM, this.now = iM, this.player = null, this.local = [], this.stopped = !1
      }
      get loaded() {
        return null !== this.player
      }
      get queued() {
        return this.local.length
      }
      preload(MM) {
        var rM;
        this.stopped || (null === (rM = this.player) || void 0 === rM || rM.preload(MM))
      }
      endSession() {
        var MM;
        null === (MM = this.player) || void 0 === MM || MM.cancelPreload(), this.freeSounds()
      }
      freeSounds() {
        var MM;
        null === (MM = this.player) || void 0 === MM || MM.freeSoundsAfterGame()
      }
      load(MM) {
        if (null !== this.player || this.stopped) return;
        this.player = MM, MM.setMaster(this.master, this.soundOn);
        const rM = this.now(),
          iM = this.local;
        this.local = [];
        for (const SM of iM)
          if (!(SM.stopped || !SM.loop && rM - SM.at >= 300)) try {
            this.start(SM, MM, rM)
          } catch (OM) {
            console.error("[bloxd-wasm-client] a queued sound wouldn't start", OM)
          }
      }
      start(MM, rM, iM) {
        const {
          name: OM,
          pos: SM,
          ear: jM,
          maxHearDist: aM,
          refDistance: PM,
          loop: nM,
          fade: QM
        } = MM, zM = rM.playGame(OM, Kr(MM, iM), SM, jM, aM, PM, nM);
        if (MM.sound = zM, 1 !== MM.rate && zM.rate(MM.rate), null !== MM.panner && zM.setPannerAttr(MM.panner), null !== MM.moved && zM.setPosition(MM.moved), null !== QM && iM - QM.at < QM.ms) {
          const rM = Ir(this.master);
          rM > 0 ? zM.fade(0, MM.volume * rM, QM.at + QM.ms - iM) : zM.setRelativeVolume(MM.volume)
        }
      }
      onAudioEvent(MM, rM, iM, OM) {
        var SM, jM;
        return null === (SM = null === (jM = this.player) || void 0 === jM ? void 0 : jM.onAudioEvent(MM, rM, iM, OM)) || void 0 === SM || SM
      }
      applyListener(MM) {
        var rM;
        null === (rM = this.player) || void 0 === rM || rM.applyListener(MM)
      }
      playGame(MM, rM, iM, OM, SM, jM, aM) {
        if (this.stopped) return Xr.b;
        if (this.player) return this.player.playGame(MM, rM, iM, OM, SM, jM, aM);
        const PM = this.now();
        this.local = this.local.filter((MM => !MM.stopped && (MM.loop || PM - MM.at < 300)));
        const nM = {
          name: MM,
          volume: Ir(rM),
          fade: null,
          pos: iM && [iM[0], iM[1], iM[2]],
          ear: OM && [OM[0], OM[1], OM[2]],
          maxHearDist: SM,
          refDistance: jM,
          loop: aM,
          rate: 1,
          panner: null,
          moved: null,
          at: PM,
          stopped: !1,
          sound: null
        };
        this.local.push(nM);
        const QM = {
          stop: () => {
            var MM;
            return nM.stopped = !0, null === (MM = nM.sound) || void 0 === MM || MM.stop(), QM
          },
          fade: (MM, rM, iM) => {
            if (nM.sound) return nM.sound.fade(MM, rM, iM), QM;
            const OM = Ir(this.master),
              SM = Ir(OM > 0 ? rM / OM : rM > 0 ? nM.volume : 0),
              jM = this.now(),
              aM = Kr(nM, jM);
            return nM.volume = SM, nM.fade = iM > 0 && aM !== SM ? {
              from: aM,
              at: jM,
              ms: iM
            } : null, QM
          },
          rate: MM => (nM.sound ? nM.sound.rate(MM) : nM.rate = MM, QM),
          getVolume: () => nM.sound ? nM.sound.getVolume() : nM.volume * Ir(this.master),
          getRelativeVolume: () => nM.sound ? nM.sound.getRelativeVolume() : nM.volume,
          setRelativeVolume: MM => (nM.sound ? nM.sound.setRelativeVolume(MM) : (nM.volume = Ir(MM), nM.fade = null), QM),
          setPannerAttr: MM => (nM.sound ? nM.sound.setPannerAttr(MM) : nM.panner = {
            ...MM
          }, QM),
          setPosition: MM => (nM.sound ? nM.sound.setPosition(MM) : nM.moved = [MM[0], MM[1], MM[2]], QM)
        };
        return QM
      }
      setMaster(MM, rM) {
        var iM;
        this.master = MM, this.soundOn = rM, null === (iM = this.player) || void 0 === iM || iM.setMaster(MM, rM)
      }
      stop() {
        var MM;
        this.stopped = !0, null === (MM = this.player) || void 0 === MM || MM.stopAll();
        for (const rM of this.local) rM.stopped = !0;
        this.local = []
      }
    }((0, Wr.b)(), !0);
    let ua = {
        wasm: "unknown",
        client: String(zr.c)
      },
      Ra = null,
      pa = () => {};
    const Wa = new Promise((MM => {
      pa = MM
    }));
    let sa = () => {};
    const Da = new Promise((MM => {
      sa = MM
    }));
    let ka, Za = null,
      oa = null,
      fa = null,
      Ya = null,
      Na = null,
      Aa = null,
      xa = null,
      va = null,
      Fa = null,
      Ba = null,
      Xa = null,
      Ia = null,
      Ka = null,
      qa = null,
      Ta = null,
      Va = null,
      ca = null,
      MP = null,
      rP = null,
      iP = !1,
      OP = null;
    const SP = new Set,
      jP = new Set;

    function aP(MM) {
      if (!SP.has(MM)) {
        SP.add(MM);
        for (const iM of jP) try {
          iM(MM)
        } catch (rM) {
          console.error(`${Kj} a startup listener threw`, rM)
        }
      }
    }

    function PP(MM) {
      iP = !0, MM.isStopped || aP("texturesIn")
    }
    let nP = 1,
      QP = -1 / 0,
      zP = -1 / 0,
      LP = -1 / 0,
      mP = !1,
      HP = null,
      hP = !1,
      JP = !1,
      dP = 0,
      yP = null,
      lP = !1;
    const EP = {
      dropped: -1 / 0,
      pause: -1 / 0,
      backlog: -1 / 0
    };
    let UP = 0,
      GP = 0,
      CP = null,
      eP = null,
      bP = null,
      wP = null;
    const tP = new WeakMap;
    let gP = null,
      uP = null,
      RP = !1,
      pP = null,
      WP = null,
      sP = null,
      DP = null,
      kP = null,
      ZP = null,
      oP = 0;
    const fP = new Set;
    let YP = 0,
      NP = 0,
      AP = 0,
      xP = null,
      vP = null,
      FP = null,
      BP = null,
      XP = -1 / 0,
      IP = null;
    const KP = new Set;
    let qP = !1,
      TP = null;
    const VP = new Map,
      cP = new Set;
    let Mn = !1;
    const rn = {
      adapter: null,
      boundAtMs: null,
      indirectHangs: null,
      restoresSkipped: null
    };
    let On = null,
      Sn = () => [0, 0],
      jn = () => {},
      an = () => {},
      Pn = null,
      nn = null;
    const Qn = new class {
      constructor(MM) {
        this.reached = MM, this.next = 1
      }
      observe(MM) {
        if (!(MM < this.next)) {
          for (; this.next <= MM;) this.next *= 2;
          this.reached(MM)
        }
      }
    }((MM => {
      console.warn(`${Kj} chunk cancels from the server this session: ${MM}`)
    }));
    let zn = 1,
      Ln = null,
      mn = null,
      Hn = null,
      hn = null,
      Jn = null,
      dn = !1,
      yn = !1,
      En = 0,
      Un = null,
      Gn = !1,
      Cn = null,
      en = null,
      bn = null,
      wn = !1;
    const tn = new class {
        constructor(MM) {
          this.Tz = MM, this.lossPending = !1, this.undrawnSinceMs = null, this.lastFrameMs = 0, this.shown = !1, this.sQ = !1
        }
        deviceLost() {
          this.lossPending = !0
        }
        frame(MM, rM, iM) {
          (0, Zr.d)(MM) && (this.lossPending = !1);
          const OM = iM - this.lastFrameMs;
          this.lastFrameMs = iM, this.lossPending && rM && (0, Zr.l)(MM) ? (null === this.undrawnSinceMs || OM > 1e3) && (this.undrawnSinceMs = iM) : this.undrawnSinceMs = null, this.show(this.sQ || null !== this.undrawnSinceMs && iM - this.undrawnSinceMs >= 2e3)
        }
        hold(MM) {
          this.sQ = MM, this.show(MM || this.shown)
        }
        stop() {
          this.sQ = !1, this.lossPending = !1, this.undrawnSinceMs = null, this.show(!1)
        }
        show(MM) {
          MM !== this.shown && (this.shown = MM, this.Tz(MM))
        }
      }((MM => {
        nM.i.Tz(hM.c, MM)
      })),
      gn = new class {
        constructor(MM) {
          let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => performance.now();
          this.aL = MM, this.now = rM, this.lostAtMs = null, this.asked = !1, this.lastRestore = null, this.watched = new WeakSet
        }
        watch(MM, rM) {
          this.watched.has(MM) || (this.watched.add(MM), MM.addEventListener("webglcontextlost", (() => {
            rM() && this.contextLost()
          })), MM.addEventListener("webglcontextrestored", (() => {
            rM() ? this.contextRestored() : (this.take(), this.lastRestore = null)
          })))
        }
        frame(MM, rM) {
          (0, Zr.l)(MM) && rM && null !== this.lostAtMs && this.now() - this.lostAtMs >= 1e3 && (this.asked = !0)
        }
        contextLost() {
          null === this.lostAtMs && (this.lostAtMs = this.now(), this.asked = !1)
        }
        unheldRestore(MM) {
          const rM = this.lastRestore;
          return null !== rM && MM - rM.atMs < 3e4 ? rM : null
        }
        contextRestored() {
          const MM = this.take();
          if (null === MM) this.lastRestore = null;
          else {
            var rM, iM;
            const OM = this.unheldRestore(MM.lostAtMs);
            this.lastRestore = {
              atMs: this.now(),
              firstLostAtMs: null !== (rM = null === OM || void 0 === OM ? void 0 : OM.firstLostAtMs) && void 0 !== rM ? rM : MM.lostAtMs,
              asked: null !== (iM = null === OM || void 0 === OM ? void 0 : OM.asked) && void 0 !== iM && iM || MM.asked
            };
            const SM = MM.asked ? "restore_context" : "natural";
            this.aL(`webgl_restored_${SM}_${MM.delay}`, `WebGL2 context restored (${SM}, wasm)`)
          }
        }
        gaveUp() {
          const MM = this.take();
          if (null !== MM) {
            var rM;
            const iM = this.unheldRestore(MM.lostAtMs),
              OM = null === iM ? MM.delay : (0, or.l)(this.now() - iM.firstLostAtMs),
              SM = MM.asked || null !== (rM = null === iM || void 0 === iM ? void 0 : iM.asked) && void 0 !== rM && rM ? "restore_tried" : "restore_untried";
            this.aL(`webgl_rejoin_${SM}_${OM}`, "WebGL2 context not restored: rejoining (wasm)")
          }
          this.lastRestore = null
        }
        take() {
          const MM = this.lostAtMs;
          return null === MM ? null : (this.lostAtMs = null, {
            lostAtMs: MM,
            delay: (0, or.l)(this.now() - MM),
            asked: this.asked
          })
        }
      }(oi.reportRenderRecovery),
      un = new class {
        constructor(MM) {
          var rM, iM, OM, SM;
          this.deps = MM, this.firstLostAtMs = null, this.lastLostAtMs = 0, this.heldReload = null, this.generation = 0, this.watched = new WeakSet, this.pageHideWatched = !1, this.storage = void 0, this.now = void 0, this.wallNow = void 0, this.setTimer = void 0, this.storage = null !== (rM = MM.storage) && void 0 !== rM ? rM : Yr.k, this.now = null !== (iM = MM.now) && void 0 !== iM ? iM : performance.now.bind(performance), this.wallNow = null !== (OM = MM.wallNow) && void 0 !== OM ? OM : Date.now, this.setTimer = null !== (SM = MM.setTimer) && void 0 !== SM ? SM : (MM, rM) => {
            setTimeout(MM, rM)
          }
        }
        watch(MM, rM) {
          this.watched.has(MM) || (this.watched.add(MM), MM.addEventListener("webglcontextlost", (() => {
            rM() && this.lost()
          })), MM.addEventListener("webglcontextrestored", (() => {
            this.restored()
          })), this.pageHideWatched || (this.pageHideWatched = !0, window.addEventListener("pagehide", (() => {
            this.pageHide()
          })), document.addEventListener("visibilitychange", (() => {
            this.pageHide(!document.hidden)
          }))))
        }
        lost() {
          const MM = this.now();
          null === this.firstLostAtMs && (this.firstLostAtMs = MM, this.writeMarker({
            lostAt: this.wallNow()
          })), this.lastLostAtMs = MM, null === this.heldReload && this.generation++
        }
        restored() {
          if (null === this.firstLostAtMs || null !== this.heldReload) return;
          const MM = this.now(),
            rM = ++this.generation;
          this.setTimer((() => {
            rM === this.generation && this.end("restored", MM)
          }), 3e4)
        }
        reload(MM) {
          if (null !== this.heldReload) return;
          if (null === this.firstLostAtMs && this.lost(), this.deps.probe()) return this.end("cleared_reload"), void MM();
          this.heldReload = MM, this.deps.hold(!0);
          const rM = ++this.generation,
            iM = () => this.lastLostAtMs + Dr.e + 5e3,
            OM = () => {
              this.setTimer(SM, Math.max(0, Math.min(5e3, iM() - this.now())))
            },
            SM = () => {
              rM === this.generation && (this.deps.probe() ? this.release("cleared_reload", MM) : this.now() >= iM() ? this.release("gave_up", MM) : OM())
            };
          OM()
        }
        releaseNow() {
          null !== this.heldReload && this.release("gave_up", this.heldReload)
        }
        forget() {
          null !== this.firstLostAtMs && this.clear()
        }
        pageHide() {
          let MM = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          if (null === this.firstLostAtMs) return;
          const rM = (0, fr.g)(this.storage);
          null !== rM && this.writeMarker(MM ? {
            lostAt: rM.lostAt
          } : {
            ...rM,
            leftAt: this.wallNow()
          })
        }
        release(MM, rM) {
          this.end(MM), rM()
        }
        end(MM) {
          let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.now();
          const iM = this.firstLostAtMs;
          if (this.clear(), null !== iM) {
            const {
              code: OM,
              message: SM
            } = (0, fr.k)(MM, rM - iM);
            this.deps.aL(OM, SM)
          }
        }
        clear() {
          this.firstLostAtMs = null, this.generation++, null !== this.heldReload && (this.heldReload = null, this.deps.hold(!1)), this.storage.removeItem(fr.c)
        }
        writeMarker(MM) {
          this.storage.setItem(fr.c, MM)
        }
      }({
        aL: oi.reportRenderRecovery,
        probe: () => function(MM) {
          let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => document.createElement("canvas");
          try {
            var iM;
            const OM = rM(),
              SM = MM ? OM.getContext("webgl") : OM.getContext("webgl2");
            return null !== SM && (null === (iM = SM.getExtension("WEBGL_lose_context")) || void 0 === iM || iM.loseContext(), !0)
          } catch {
            return !1
          }
        }("rust_webgl1" === (0, ZS.G)()),
        hold: MM => {
          tn.hold(MM)
        }
      });
    let Rn = !1,
      pn = !0,
      Wn = null,
      sn = !1,
      Dn = !1,
      kn = !1;

    function Zn() {
      if (null === Ln) return null;
      const {
        canvas: MM,
        backend: rM
      } = Ln;
      return {
        canvas: MM,
        renderer: Br.b[rM]
      }
    }

    function fn() {
      return Ca ??= Promise.all([iM.e(224), iM.e(48), iM.e(170), iM.e(71)]).then((() => iM(53732))).then((MM => (Ga = MM, Object.assign(globalThis, {
        bloxdPreviewPage: MM.pagePreviews()
      }), MM)), (MM => {
        throw Ca = null, MM
      })), Ca
    }

    function Yn() {
      return Ua ??= iM.e(69).then((() => iM(53752))).catch((MM => {
        throw Ua = null, new WM.b(MM)
      })), Ua
    }
    class Nn {
      constructor() {
        this.host = null
      }
      open(MM) {
        return null !== this.host ? MM(this.host) : fn().then((rM => (this.host ??= new rM.WasmPreviewHost(rM.pagePreviews()), MM(this.host))))
      }
      openMob(MM) {
        return this.open((rM => rM.openMob(MM)))
      }
      openPet(MM) {
        return this.open((rM => rM.openPet(MM)))
      }
      openMobLineup(MM) {
        return this.open((rM => rM.openMobLineup(MM)))
      }
      openCharacter(MM, rM) {
        return this.open((iM => iM.openCharacter(MM, rM)))
      }
    }

    function An() {
      Ea || (Ea = !0, RS.i.setHost(new Nn), (0, Ai.j)(), wS.g.setFollower(XQ), Object.assign(globalThis, {
        bloxdPreviews: RS.i
      }))
    }

    function xn() {
      fn().then((MM => {
        MM.pagePreviews().prefetch()
      }), (() => {}))
    }

    function vn() {
      let MM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      if (la) return;
      la = !0, Rn = "play" === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "shell"), pn = !Rn, console.info(`${Kj} starting`), ya || (ya = !0, (0, hM.V)(new xr(nQ, dQ, Zn)), (0, mM.o)(new vr), (0, hM.R)(new Fr((() => performance.now() - QP))), (0, hM.I)()), Rn && nM.i.subscribe("appManagerUpdated|gameState", PQ), An(), (0, oi.setCrashScreen)((MM => {
        let {
          text: rM,
          reload: iM
        } = MM;
        ! function(MM, rM) {
          var iM, OM;
          if (sn) return;
          sn = !0, (0, vi.U)(), null === (iM = IP) || void 0 === iM || iM.abort(), IP = null, tS.e.release();
          const SM = Rn ? null !== (OM = MM.cancel) && void 0 !== OM ? OM : "general:back" : null;
          xO({
            ...MM,
            cancel: SM
          }).then((MM => {
            MM && rM && Dn ? ((0, Gr.E)("reloadOntoJs"), (0, cM.j)(Gr.K)) : MM && rM ? (0, cM.k)() : Rn && (0, cM.f)("/")
          }))
        }(rM, iM)
      })), (0, JS.n)(), (0, pr.m)();
      let rM = null;
      try {
        rM = vj("lm07r2s7r8f", (() => {
          var MM, rM;
          return null !== (MM = null === (rM = Za) || void 0 === rM ? void 0 : rM.ws) && void 0 !== MM ? MM : null
        }), MM, "fuexskgmtl")
      } catch (SM) {
        console.error(`${Kj} probes`, SM)
      }
      const OM = function() {
        const MM = (0, VO.l)(),
          rM = (0, VO.j)();
        let iM = !1;
        return OM => {
          MM && !iM && (iM = !0, (0, oi.reportStaleBuildReload)(MM, rM, OM))
        }
      }();
      KQ(), Rn || function() {
        const MM = function(MM) {
          var rM;
          const iM = new URLSearchParams(MM),
            OM = iM.get("game");
          return OM ? {
            game: OM,
            lobby: null !== (rM = iM.get("lobby")) && void 0 !== rM ? rM : null
          } : null
        }(window.location.search);
        if (MM) return (0, Lr.m)(MM.game) && KQ().request(), void Xn(MM.game, MM.lobby);
        const rM = new URLSearchParams(window.location.search).get("ws");
        if (!rM) return;
        Wa.then((MM => {
          MM && async function(MM, rM) {
            try {
              await (0, WM.h)(MM), pP = GQ(new WebSocket(rM)), null !== pP && tS.e.setGame(null), Fn()
            } catch (SM) {
              console.error(`${Kj} ?ws=${rM} did not attach`, SM)
            }
          }(MM, rM)
        }))
      }(), async function(MM) {
        var rM, OM, jM, aM, PM, QM;
        if ("undefined" === typeof WebAssembly) return oQ("noWebAssembly", "unsupported", "This browser has no WebAssembly"), null;
        const zM = (0, ZS.$)(),
          mM = await async function(MM, rM) {
            const iM = (0, Hi.l)(MM) ? YQ(MM, rM) : null;
            if (null === iM || void 0 === iM || !iM.retries) return MM;
            console.warn(`${Kj} ${iM.detail}: picking again in ${fQ} ms`), await new Promise((MM => {
              setTimeout(MM, fQ)
            }));
            const OM = await (0, ZS.cb)();
            if (!(0, Hi.l)(OM)) {
              var SM;
              (0, oi.reportNoBackendRetry)("reprobed", iM.decline, iM.detail, {
                ...iM.details,
                backend: null !== (SM = null === OM || void 0 === OM ? void 0 : OM.backend) && void 0 !== SM ? SM : "none"
              }), null !== OM && (0, ZS.Y)(OM.backend)
            }
            return OM
          }(await (0, ZS.U)(), zM);
        if ((0, oi.setCrashBackend)((0, Hi.l)(mM) ? "unsupported" : null !== (rM = null === mM || void 0 === mM ? void 0 : mM.backend) && void 0 !== rM ? rM : "none"), (0, Hi.l)(mM)) return function(MM) {
          let {
            decline: rM,
            detail: iM,
            details: OM,
            retries: SM
          } = MM;
          if (SM && (0, Gr.r)()) return (0, oi.reportNoBackendRetry)("reload", rM, iM, OM), void NQ(`${iM}, again after ${fQ} ms`);
          oQ("browser", rM, iM, SM ? {
            ...OM,
            afterReload: String(Gr.D)
          } : OM)
        }(YQ(mM, zM)), null;
        if ((0, rj.p)("render")) try {
          const {
            startRenderDebug: MM
          } = await Promise.all([iM.e(89), iM.e(55)]).then((() => iM(5058)));
          MM(mM)
        } catch (Ur) {
          console.warn("The render debug topic didn't load", Ur)
        }
        if ((0, rj.p)("renderlite")) try {
          const {
            startRenderLite: MM
          } = await Promise.all([iM.e(296), iM.e(56)]).then((() => iM(53760)));
          Hn = MM(mM)
        } catch (Ur) {
          console.warn("The renderlite debug topic didn't load", Ur)
        }
        if ((0, rj.p)("renderprobe")) try {
          const {
            startRenderProbe: MM
          } = await iM.e(57).then((() => iM(53764)));
          MM(mM)
        } catch (Ur) {
          console.warn("The renderprobe debug topic didn't load", Ur)
        }
        if ("webgl" === (null === mM || void 0 === mM ? void 0 : mM.backend) && Rn && "wasm" !== (0, Gr.h)(window.location.search)) {
          const MM = KO(mM);
          null !== MM && (0, Cr.f)(MM)
        }
        const HM = null !== (OM = null === mM || void 0 === mM ? void 0 : mM.backend) && void 0 !== OM ? OM : null;
        rn.adapter = null !== (jM = null === mM || void 0 === mM ? void 0 : mM.adapter) && void 0 !== jM ? jM : null, rn.boundAtMs = null, rn.indirectHangs = null, rn.restoresSkipped = null;
        const hM = !(0, Hi._)();
        null === mM || (0, Hi.D)(mM.reason) || console.info(`${Kj} drawing with ${mM.backend}: ${mM.reason}`);
        const JM = (0, ZS.F)();
        sa(!0), (0, WM.r)((MM => {
          try {
            null !== HM && (Pn = MM.startSkyFeed, FQ(), function(MM) {
              var rM, iM;
              Sn = MM.rasterText, sP = MM.setTextLocalPlayer, MM.setTextLocalPlayer(null !== (rM = null === (iM = WP) || void 0 === iM ? void 0 : iM.info.playerDbId) && void 0 !== rM ? rM : null), jn = MM.drainTextRerasters, an = MM.loadTextIcons, MM.warmText((() => dn)), MM.textChanged(), dn && setTimeout(an, 0)
            }(MM), nn = MM.startShellAnalytics, rz())
          } finally {
            kn || (hn = MM.followMenuPrefs({
              setSoundPrefs: lQ,
              setEnvPrefs: EQ,
              setUiPrefs: yQ,
              setLookPrefs: UQ
            }))
          }
        })), (0, WM.i)(ga).catch((MM => {
          console.warn(`${Kj} the game code did not load: a join asks again`, MM)
        }));
        const dM = (0, ZS.o)(mM);
        let yM, EM;
        dM.catch((() => {})), "loading" === (0, Jr.B)() && GM();
        try {
          yM = function(MM) {
            const rM = null !== MM && void 0 !== MM ? MM : document.createElement("canvas");
            rM.id = "wasm-game-canvas", gn.watch(rM, ez), un.watch(rM, ez), (0, vS.j)();
            const iM = (0, Ar.g)(),
              OM = (0, Ar.k)(iM);
            rM.style.cssText = "position:absolute;top:0;left:0;display:block;touch-action:none;outline:none;background:#000", (0, xS.h)(rM, OM), (0, Ar.d)(rM, iM), rM.width = OM.bufferWidth, rM.height = OM.bufferHeight;
            const SM = document.createElement("div");
            return SM.style.cssText = "position:fixed;top:0;right:0;bottom:0;left:0;overflow:hidden", SM.append(rM), QQ(SM, pn), Wn = SM, document.body.append(SM), rM
          }(null === HM ? null : await (await fn()).pagePreviews().beginSession())
        } catch (SM) {
          return await Az({
            site: Ma,
            error: SM
          }, (() => {
            (0, oi.showUnsupported)((0, YO.n)("fetch"), Qj.e.fetch, `the previews did not load: ${String(SM)}`)
          })), null
        }
        GM();
        try {
          EM = await dM
        } catch (SM) {
          return await Az({
            site: Ma,
            error: SM
          }, (() => {
            (0, oi.showUnsupported)((0, YO.n)("fetch"), Qj.e.fetch, `the ${null!==HM&&void 0!==HM?HM:"client"} build did not load: ${String(SM)}`)
          })), null
        }
        const UM = (0, ZS.g)(),
          CM = !UM && !0 !== Yr.k.getItem(qj),
          eM = !UM && "loading" === (0, Jr.B)();
        await (0, oS.b)(EM, {
          reloadFailedDownload: CM
        }), eM && !(0, Jr.R)() && await (0, oS.b)(EM, {
          reloadFailedDownload: CM
        });
        lM = performance.now();
        const bM = ua;
        if (!(0, Jr.R)()) {
          (0, Jr.Q)() && Yr.k.setItem(qj, !0);
          const MM = (0, Jr.t)();
          if ("call" === MM) wz({
            site: di.B,
            error: (0, Jr.p)(),
            header: null
          }, bM);
          else {
            const rM = null !== MM && void 0 !== MM ? MM : "instantiate",
              iM = () => {
                (0, oi.showUnsupported)((0, YO.n)(rM), Qj.e[rM], (0, Jr.j)())
              };
            if ("compile" !== MM && "instantiate" !== MM || !AQ())
              if ("fetch" === rM) {
                const MM = [EM.url().href, Er.f.url().href];
                await Az({
                  site: Ma,
                  error: (0, Jr.j)(),
                  urls: MM
                }, iM)
              } else iM();
            else {
              const rM = (0, Jr.j)(),
                iM = (0, ii.b)((0, Jr.p)());
              if (iM && (0, Gr.r)()) return (0, oi.reportCountedLoadFallback)((0, YO.n)(MM), Qj.e[MM], rM, "wasmReload"), NQ(`the wasm client ran out of memory to ${MM} here (${rM})`), null;
              (0, oi.reportCountedLoadFallback)((0, YO.n)(MM), Qj.e[MM], rM, iM ? "declined" : "pageAlone"), xQ(`the wasm client did not ${MM} here (${rM})`, iM ? "oom" : null)
            }
          }
          return null
        }(0, dr.Q)(EM.url()) && (0, oi.reportUnstreamedCoreLoad)();
        const wM = (0, Jr.E)();
        let tM, gM = bM;
        try {
          gM = {
            ...bM,
            wasm: wM.NL()
          };
          const {
            Bd: MM
          } = EM.bindings, rM = MM.POM();
          if (rM !== cr.A) return wz({
            site: di.e,
            error: `core ABI ${rM}, page ABI ${cr.A}`,
            header: null
          }, gM), null;
          const [iM, OM] = (0, cr.ne)();
          tM = new MM(iM, OM)
        } catch (SM) {
          return wz({
            site: di.e,
            error: SM,
            header: null
          }, gM), null
        }
        ua = gM, Ra = EM.bindings;
        const uM = new di.i(tM, Jr.y, {
          onCrash: MM => {
            var rM;
            null === (rM = Hn) || void 0 === rM || rM.crashed(MM),
              function(MM, rM, iM, OM) {
                if ("webgpu" !== rM || (0, ZS.e)()) return !1;
                const SM = function(MM) {
                  if (MM.site === di.h && (0, Hi.p)(MM.error)) return "frames_refused";
                  return MM.site === Tj && (0, Hi.t)(MM.error) ? "start_failed" : null
                }(MM);
                if (null === SM) return !1;
                if (null !== (0, Hi.X)(SM, OM, (0, Ji.c)(MM.error))) return (0, oi.countRenderLost)(SM, MM.error, rn), !1;
                return Dr.B.reloaded(null, !1), (0, oi.reportRenderReload)("webgpu", "start_failed" === SM ? 0 : 1, iM, {
                  cause: SM,
                  error: MM.error,
                  context: rn,
                  session: Rz(null)
                }), nz(), !0
              }(MM, HM, gM, hM) || wz(MM, gM)
          },
          onNetEvent: jz,
          onReconnectGrace: DQ,
          onJoinPreloadEnded: sQ,
          onCoreErrors: (MM, rM) => {
            var iM, OM;
            MM.some((MM => {
              let {
                code: rM
              } = MM;
              return rM === cr.H.RenderDeviceLost
            })) && ((0, ZS.y)(), tn.deviceLost(), "webgpu" === HM && ((0, Ji.g)(On), Dr.B.lost())), null === (iM = Hn) || void 0 === iM || iM.coreErrors(MM);
            const SM = () => {
              (0, oi.reportCoreErrors)(MM, rM, gM, ((MM, rM) => {
                var iM;
                return MM === cr.H.EnvUnknownSky ? (0, oi.unknownSkyWords)(er.d.get("skyBox")) : MM === cr.H.RenderDeviceLost ? (0, oi.deviceLossWords)(rM, rn.boundAtMs) : null === (iM = On) || void 0 === iM ? void 0 : iM.nOM(MM, rM)
              }))
            };
            MM.some((MM => {
              let {
                code: rM
              } = MM;
              return rM === cr.H.EnvUnknownSky
            })) ? queueMicrotask(SM) : SM(), null === (OM = OP) || void 0 === OM || OM.coreErrors(MM)
          },
          onRenderReload: (MM, rM, iM) => {
            ! function(MM, rM, iM, OM, SM, jM) {
              var aM;
              if ((0, ZS.e)()) return;
              const PM = rM === cr.Tc.WEBGPU,
                nM = OM === cr.Tc.PIPELINE_FAILED ? "pipeline_failed" : "lost",
                QM = OM === cr.Tc.RESTORE_LOST,
                zM = PM && (0, Dr.m)(rn.adapter, iM, "lost" === nM, QM),
                mM = (0, Ji.o)(On);
              null === (aM = Hn) || void 0 === aM || aM.reload(PM, iM, nM, null === mM || void 0 === mM ? void 0 : mM.message);
              const HM = PM ? (0, Hi.X)(nM, SM, mM) : null;
              if (null !== HM) {
                (0, oi.countRenderLost)(nM, mM, rn);
                const rM = void 0 === mM ? "" : ` (${mM.message})`;
                return void MM.crash(oi.RENDER_RELOAD_SITE, new Error(`${(0,oi.renderReloadMessage)("webgpu",nM,iM)} and ${HM}${rM}`))
              }
              const hM = PM ? "webgpu" : "webgl1" === jM ? "webgl1" : "webgl";
              "lost" === nM && (0, ZS.y)();
              PM || ((0, Gr.C)(), gn.gaveUp());
              (0, oi.reportRenderReload)(hM, iM, ua, {
                from: "game",
                cause: nM,
                restoreLost: QM,
                adapterRemembered: zM,
                error: mM,
                context: rn,
                session: Rz(MM.sunShadowsHeld())
              }), (0, ZS.s)();
              const JM = (0, LM.e)();
              let dM = !1;
              const yM = () => {
                dM || (dM = !0, PM ? nz() : un.reload(nz))
              };
              let lM = null;
              const EM = (0, LM.o)((() => {
                null !== lM && clearTimeout(lM), JM ? setTimeout(yM, Pz) : yM()
              }));
              !dM && JM && (lM = setTimeout((() => {
                EM(), yM()
              }), az))
            }(uM, MM, rM, iM, hM, HM)
          },
          onEnvEvent: MM => {
            var rM;
            MM.kind === cr.Y.SkyImages ? null === (rM = Va) || void 0 === rM || rM.onEvent(MM.payload) : MM.kind === cr.Y.EnvLighting && (ca = 1 === MM.payload[0])
          },
          onImages: MM => {
            var rM;
            null === (rM = MP) || void 0 === rM || rM.onEvent(MM)
          },
          onModelRequest: MM => {
            var rM;
            null === (rM = Ka) || void 0 === rM || rM.request(MM)
          },
          onModelTaken: (MM, rM) => {
            var iM;
            null === (iM = Ka) || void 0 === iM || iM.taken(MM, rM)
          },
          onTerrainTexturesWanted: () => {
            queueMicrotask((() => {
              ! function(MM, rM) {
                const iM = ta;
                if (null === iM || MM.isStopped) return;
                iM.restore((MM => {
                  (0, oi.reportTerrainTextureFailure)(MM, rM)
                })).then((rM => {
                  !1 !== rM || MM.isStopped ? !0 === rM && console.info(`${Kj} terrain textures handed over again after the renderer lost them`) : console.warn(`${Kj} the terrain textures couldn't be handed over again: the terrain draws blank`)
                }))
              }(uM, gM)
            }))
          },
          onKeepAlive: MM => {
            const rM = null === wP ? void 0 : tP.get(wP);
            void 0 !== rM && OS(rM, MM)
          },
          onSends: () => {
            ! function(MM) {
              const rM = performance.now();
              if (MM.forEachNetOut(Gz), yz(MM), (0, di.P)(MM, {
                  worldgen: fa,
                  mesh: Na
                }), null !== mn) try {
                mn.sendsWent(MM, rM, performance.now())
              } catch (SM) {
                Sz(SM)
              }
            }(uM)
          }
        });
        if (ea = uM, null === (aM = Nr.e.wasmNetReady) || void 0 === aM || aM.call(Nr.e, (() => uM.isStopped ? 0 : uM.netKeptFrames)), null !== MM) {
          uM.setAntiCheatProbes(Yj(Jr.y, MM.checks)), MM.watchHeld(Aj.CoreFrame, (() => uM.frame)), MM.watchHeld(Aj.GlueFrame, (() => tM.frame));
          const rM = function(MM, rM) {
            const iM = new Nj(rM);
            let OM = !1;
            iM.bL(MM.bL());
            const SM = (0, rS.bb)((() => {
              iM.bL(MM.bL())
            }), xj);
            let jM = 6 * (0, rS.R)() | 0;
            const aM = () => {
              ++jM < 6 || (jM = 0, MM.checks.stackCheck() && (OM = !0))
            };
            (0, lj.k)(aM);
            const PM = () => {
              const rM = MM.checkPadCall();
              0 !== rM && iM.setFlags(rM)
            };
            return (0, yj.e)(PM), {
              onSend: aM,
              beforeFrame: () => {
                OM && iM.originStackHit() && (OM = !1)
              },
              onEvent: rM => {
                const OM = MM.checkEvent(rM);
                iM.value(cr.g.ProbeUsedProp, MM.usedProp()), 0 !== OM && iM.setFlags(OM)
              },
              stop: () => {
                (0, rS.fb)(SM), (0, lj.h)(aM), (0, yj.c)(PM)
              }
            }
          }(MM, ((MM, rM, iM) => {
            let OM = !1;
            return Dz(uM, (() => {
              OM = uM.rings.input.writeRecord(cr.tb.AntiCheat, MM, rM, iM, 0)
            })), OM
          }));
          uM.isStopped ? rM.stop() : Xa = rM
        }
        Ja = (MM, rM, iM) => uM.rings.cmd.writeCmd(MM, rM, iM), da = MM => uM.rings.cmd.growForCmd(MM), lP = !1, FQ(), (0, WM.t)(uM, {
          core: tM,
          memory: Jr.y,
          staleOr: (MM, rM, iM, OM) => Az({
            site: MM,
            error: rM
          }, iM, OM),
          reportReplayFault: (MM, rM) => {
            (0, oi.reportReplayFault)(MM, rM, ua)
          },
          audio: ga,
          options: er.d,
          onNetEvent: jz,
          sessionInfo: MM => {
            var rM;
            return (null === (rM = WP) || void 0 === rM ? void 0 : rM.conn) === MM ? WP.info : null
          },
          onEventOverflow: jQ,
          replayShaderPack: MM => {
            var rM;
            null === (rM = OP) || void 0 === rM || rM.replay(MM)
          },
          hasPackModel: MM => {
            var rM, iM;
            return null !== (null !== (rM = null === (iM = BQ()) || void 0 === iM ? void 0 : iM.modelUrl(MM)) && void 0 !== rM ? rM : null)
          },
          beforeWrite: () => (!hP && uM.rings.net.cursor > 0 && Lz(uM, !1, "all"), !uM.isStopped),
          beforeOp: () => (!hP && uM.netWrittenSinceFrame > 0 && Lz(uM, !1, "budget"), !uM.isStopped)
        }), (0, pM.H)({
          lockPointer: () => {
            if (!zO(yM)) return !1;
            try {
              Promise.resolve(yM.requestPointerLock()).catch((() => {}))
            } catch {
              return !1
            }
            return !0
          },
          unlockPointer: () => {
            (0, Vi.e)()
          },
          leaveGame: () => {
            SQ()
          },
          canvas: () => yM
        }), Ia = (0, pM.y)((() => {
          var MM;
          const rM = (0, WM.e)();
          null === (MM = (0, WM.p)()) || void 0 === MM || MM.followCursorAim(!0 === (null === rM || void 0 === rM ? void 0 : rM.isSessionLive) ? rM : null)
        })), CP && uM.setUiPrefs(CP);
        eP && uM.setEnvPrefs(eP);
        bP && uM.setLookPrefs(bP);
        const RM = NS ? AS(NS.preventMovement) : null;
        RM && JQ(RM);
        const sM = (0, si.g)(),
          DM = (0, si.d)(uM, sM);
        Fa = sM.basis, (0, Ki.g)(null === DM ? null : (0, Wi.q)(DM)), va = DM;
        const kM = (0, yr.e)();
        let ZM = 1 / 0,
          oM = !0,
          fM = sM.shedFootprintBytes;
        const YM = new hS.b(kM, (() => tM.Qy()), (MM => {
          uM.crash(di.p, MM)
        }));
        Aa = YM, xa = YM, null !== DM && YM.setCeiling(Math.min((0, hS.t)(DM), ZM, (0, si.j)()));
        if (oM) {
          YM.setShed((MM => {
            const rM = uM.shedMemory("joinReserve" !== MM && "gcPressure" !== MM);
            return null !== rM && (null === va || rM < va) && (va = rM, (0, Ki.g)((0, Wi.q)(rM))), rM
          }), ((MM, rM, iM) => {
            1 === rM ? (0, oi.reportMemoryShed)(MM, iM, ua) : console.warn(`${Kj} wasm memory: shed again (${MM}): shed ${rM}`, iM.wasmMemoryShed)
          }), (() => uM.addDistanceInUse()));
          const MM = (0, Hi.P)(wM);
          YM.setFootprint(new Mj(fM, {
            storedChunks: () => tM.QOM(),
            gpuBytes: () => {
              var rM;
              return null !== (rM = null === MM || void 0 === MM ? void 0 : MM.zOM()) && void 0 !== rM ? rM : 0
            },
            jsHeapBytes: cS
          })), (0, Ii.j)("wasm", YM, (() => {
            ga.freeSounds()
          }))
        }
        window.addEventListener("pagehide", (() => {
          Aa === YM && (YM.refreshStats(), sz(YM))
        })), window.addEventListener("pagehide", Qz), window.addEventListener("pagehide", zz), !1;
        const [NM, AM] = (0, Ni.e)();
        Jn = (0, xi.e)((MM => uM.setChunkAddDistance(MM.horizontal, MM.vertical)), {
          horizontal: NM,
          vertical: AM
        }), uM.setAmbientOcclusion(!0 !== Yr.g.getItem("disableAmbientOcclusion")), uM.setPoseLod(!0 !== Yr.g.getItem(Hr.L)), uM.setDebugLog(cr.N.Look, !0), uM.setDebugLog(cr.N.CameraSet, !0), (0, Oj.startLookDebug)("wasm", {
          look: () => uM.takeDebugLog(cr.N.Look),
          cameraSets: () => uM.takeDebugLog(cr.N.CameraSet)
        }), (0, rj.p)("remesh") && (uM.setDebugLog(cr.N.Remesh, !0), xM = () => uM.takeDebugLog(cr.N.Remesh), nj = new Pj((0, Sj.n)(), xM));
        var xM;
        const vM = function(MM, rM, iM, OM) {
          const SM = new gO,
            jM = MM => Yr.g.getItem(MM);
          SM.sync(jM, rM), (0, kr.R)();
          const aM = (0, nM.j)("customBindingsChanged", (() => {
            SM.sync(jM, rM)
          }));
          (0, ci.r)(rM);
          const PM = new Set,
            QM = (0, pM.y)((() => {
              var MM;
              PM.size > 0 && WO() && !0 === (null === (MM = (0, WM.e)()) || void 0 === MM ? void 0 : MM.localPlayerAlive()) && nM.i.Tz("usedKeyboard")
            })),
            zM = lO.c.heldSizer((() => (0, Ar.p)(MM))),
            LM = yO(MM, rM, {
              prevents: MM => SM.prevents(MM),
              keyPressed: MM => {
                SM.moves(MM) && (PM.add(MM), WO() && nM.i.Tz("usedKeyboard"))
              },
              keyReleased: MM => {
                PM.delete(MM)
              },
              keysReleased: () => {
                PM.clear()
              },
              resized: () => {
                RO.k.measure(MM.getBoundingClientRect()), (0, EO.l)()
              },
              sizeCanvas: zM,
              watchRenderScale: rM => {
                const iM = (0, Ar.s)(MM, rM),
                  OM = lO.c.onRelease(rM);
                return () => {
                  iM(), OM()
                }
              },
              touchStarting: () => {
                RO.k.measure(MM.getBoundingClientRect())
              },
              viewShown: iM,
              touchUiShown: () => Mr.d.get("isTouchScreen"),
              ctrlCombosAreGames: WO,
              inspect: (MM, rM, iM) => {
                SM.checks(rM, iM) && OM(MM)
              },
              canLock: () => zO(MM)
            }),
            mM = (0, Ci.d)(rM);
          return () => {
            aM(), QM(), (0, ci.r)(null), mM(), LM()
          }
        }(yM, ((MM, rM, iM, OM, SM) => {
          Dz(uM, (() => {
            uM.rings.input.writeRecord(MM, rM, iM, OM, SM)
          })), !JP && (0, oO.h)(MM, SM) && (0, oO.d)((() => {
            ea !== uM || kn || uM.isStopped || !Ez() || Lz(uM, !1, "budget", !1)
          }))
        }), (() => pn), (MM => {
          var rM;
          null === (rM = Xa) || void 0 === rM || rM.onEvent(MM)
        }));
        if (uM.isStopped) return vM(), null;
        oa = vM;
        const FM = () => !uM.isStopped && !sn;
        if (uM.isStopped) return null;
        (0, Jr.W)((() => {
          "call" === (0, Jr.t)() && uM.crash(di.B, (0, Jr.p)())
        }));
        const BM = (0, di.S)(uM.rings.worker, (() => {
          Lz(uM, !1, document.hidden ? "all" : "budget")
        }));
        fa = function(MM, rM, iM) {
          return kz().then((MM => {
            let {
              prefetchWorldgenWorker: rM
            } = MM;
            rM()
          }), (() => {})), new hj({
            module: (0, Jr.z)(),
            decodeSettings: MM => {
              const rM = (0, WM.p)();
              if (null === rM) throw new Error("no game code to decode the world-gen seed with");
              return rM.decodeMapSettings(MM)
            },
            loadWorker: Zz,
            onMapWithoutWorldgen: () => {
              oz((MM => {
                let {
                  stopWorldgenWorkerPrefetch: rM
                } = MM;
                rM()
              }))
            },
            onLoadFailed: MM => {
              (0, oi.reportWorldgenLoadFailure)(MM, ua)
            },
            onWorkerLost: (MM, rM) => {
              !async function(MM, rM, iM) {
                const OM = MM === Lj || MM.startsWith(mj);
                if (!OM || rM) return void iM.aL(OM);
                const SM = () => {
                  iM.aL(!0)
                };
                let jM;
                try {
                  jM = await iM.scriptUrl()
                } catch {
                  return void SM()
                }
                await iM.staleOr({
                  site: di.I,
                  error: new Error(`a world-gen worker's load failed (${MM}): ${jM}`),
                  urls: [jM]
                }, SM)
              }(MM, rM, {
                scriptUrl: async () => {
                  const {
                    worldgenWorkerScriptUrl: MM
                  } = await kz();
                  return MM()
                },
                staleOr: (MM, rM) => Az(MM, rM, {
                  stillWanted: iM
                }),
                aL: rM => {
                  (0, oi.reportWorldgenWorkerLost)(MM, rM, ua, {
                    build: (0, VO.j)(),
                    ageMs: (0, vi.t)()
                  })
                }
              })
            },
            onStartTimeout: MM => {
              (0, oi.reportWorkerStartTimeout)(di.I, MM, ua)
            },
            onGaveUp: MM => {
              (0, oi.reportWorldgenGaveUp)(MM, ua)
            },
            onMemoryStats: MM => {
              var rM;
              null === (rM = Aa) || void 0 === rM || rM.noteWorldgen(MM)
            },
            onMemoryGone: () => {
              var MM;
              null === (MM = Aa) || void 0 === MM || MM.worldgenGone()
            },
            write: (iM, OM, SM, jM, aM) => {
              Dz(MM, (() => {
                MM.rings.worker.writeWorkerRecord(iM, OM, SM, 0, jM, aM) || MM.crash(di.I, `a world-gen record of kind ${OM} did not fit the worker-in ring`)
              })), rM()
            }
          })
        }(uM, BM, FM), Na = function(MM, rM) {
          return new mS({
            module: (0, Jr.z)(),
            loadWorkers: async () => {
              const [{
                createMeshWorker: MM
              }, rM] = await Promise.all([iM.e(47).then((() => iM(53803))), Promise.resolve().then((() => iM(83))).then((MM => {
                let {
                  isMobile: rM
                } = MM;
                return rM()
              }), (() => !1))]);
              return {
                create: MM,
                count: (0, Rr.e)(rM),
                maxKeptLightStates: rM ? 1 : void 0
              }
            },
            write: (iM, OM, SM, jM, aM, PM) => {
              (0, EO.i)(), Dz(MM, (() => {
                MM.rings.worker.writeWorkerRecord(iM, OM, SM, jM, aM, PM) || MM.crash(di.t, `a meshing record of kind ${OM} did not fit the worker-in ring`)
              })), rM()
            },
            onWorkerLost: MM => {
              (0, oi.reportWorkerLost)(di.t, MM, ua)
            },
            onLightFault: (MM, rM) => {
              (0, oi.reportLightFault)(MM, rM, ua)
            },
            onStartTimeout: MM => {
              (0, oi.reportWorkerStartTimeout)(di.t, MM, ua)
            },
            onMemoryStats: (MM, rM) => {
              var iM;
              null === (iM = Aa) || void 0 === iM || iM.noteMeshWorker(MM, rM)
            },
            onMemoryGone: MM => {
              var rM;
              null === (rM = Aa) || void 0 === rM || rM.meshWorkerGone(MM)
            },
            fail: (rM, iM) => {
              const OM = () => {
                MM.crash(di.t, void 0 === iM ? rM : new Error(rM, {
                  cause: iM
                }))
              };
              void 0 !== iM ? Az({
                site: di.t,
                error: iM
              }, OM) : OM()
            }
          })
        }(uM, BM), PQ();
        const XM = (0, gS.r)(gr.clientSideServerUrls.staticUrl, {
            onTableFailed: MM => {
              Az({
                site: oi.MODEL_FEED_SITE,
                error: MM
              }, (() => {}), {
                stillWanted: FM
              })
            },
            packUrl: MM => {
              var rM, iM;
              return null !== (rM = null === (iM = BQ()) || void 0 === iM ? void 0 : iM.modelUrl(MM)) && void 0 !== rM ? rM : null
            }
          }),
          IM = function(MM, rM, iM) {
            const OM = iM => {
              var OM, SM;
              return null !== (OM = null === (SM = rM()) || void 0 === SM ? void 0 : SM.drawnUrl(iM)) && void 0 !== OM ? OM : MM.url(iM)
            };
            return (0, wS.n)((0, dS.m)(OM), iM)
          }(XM, (() => Ka), BQ),
          KM = new dS.d(IM, (MM => {
            console.warn(`${Kj} image ${MM.key.kind}:${MM.key.index}:${MM.key.word} failed`, MM.error)
          }));
        MP = KM, rP = new CS(uM, IM, ((MM, rM) => {
          void 0 === rM ? console.warn(`${Kj} ${MM}`) : IQ(MM, rM)
        }));
        const qM = new bS.f(XM, function(MM, rM) {
          let OM = !1,
            SM = null,
            jM = null;
          const aM = {
              onUnavailable: (iM, OM) => {
                jM ??= Az({
                  site: oi.MODEL_POOL_SITE,
                  error: iM,
                  urls: OM
                }, (() => {
                  (0, oi.reportModelPoolFailure)(iM, MM)
                }), {
                  stillWanted: rM
                })
              },
              onDecoderFailed: (iM, OM) => {
                const SM = () => {
                  (0, oi.reportDracoDecoderFailure)(iM, MM)
                };
                void 0 !== OM ? Az({
                  site: oi.MODEL_POOL_SITE,
                  error: iM,
                  urls: OM
                }, SM, {
                  stillWanted: rM
                }) : SM()
              },
              onWorkerLost: rM => {
                (0, oi.reportWorkerLost)(oi.MODEL_POOL_SITE, rM, MM)
              },
              onModuleRetry: (rM, iM) => {
                (0, oi.reportModelsModuleRetry)(rM, iM, MM)
              }
            },
            PM = iM.e(49).then((() => iM(53807))).then((MM => {
              let {
                pageModelPool: rM
              } = MM;
              if (OM) return null;
              const iM = rM(aM);
              return SM = iM.unlisten, qa = iM.pool, PQ(), iM.pool
            }), (MM => (OM || aM.onUnavailable(MM, void 0), null)));
          return Ta = () => {
            var MM;
            OM = !0, null === (MM = SM) || void 0 === MM || MM(), qa = null
          }, (MM, rM) => PM.then((iM => {
            var OM;
            return null !== (OM = null === iM || void 0 === iM ? void 0 : iM.build(MM, rM)) && void 0 !== OM ? OM : (0, uS.q)(MM, "the model workers did not load")
          })).then((MM => null !== jM && (0, uS.i)(MM) ? jM.then((() => MM)) : MM))
        }(gM, FM), (MM => {
          MM.startup ? (bz(), Az({
            site: oi.MODEL_FEED_SITE,
            error: MM.error,
            urls: "" === MM.url ? void 0 : [MM.url]
          }, (() => {
            (0, oi.reportModelFailure)(MM, gM)
          }))) : (0, oi.reportModelFailure)(MM, gM)
        }), {
          onWritten: (MM, rM) => {
            KM.glbWritten(MM, rM)
          },
          onTaken: (MM, rM) => {
            KM.glbTaken(MM, rM)
          },
          onPackFileFailed: (MM, rM) => {
            console.warn(`${Kj} the texture pack's model file ${MM} failed: the shipped one loads`, rM)
          }
        });
        Ka = qM;
        const TM = new ES.g(uM);
        ta = TM, TM.swap((MM => {
          const rM = () => {
            (0, oi.reportTerrainTextureFailure)(MM, gM)
          };
          if (dn) return void rM();
          const iM = () => !dn,
            OM = null === MM.url ? void 0 : [MM.url];
          Az({
            site: di.H,
            error: MM.error,
            urls: OM
          }, rM, {
            stillWanted: iM
          })
        })).then((MM => {
          null !== MM && (MM || uM.isStopped || console.warn(`${Kj} the core refused the terrain textures: terrain draws untextured`), PP(uM))
        }));
        const rr = new Tr(uM, ((MM, rM) => {
          console.warn(`${Kj} ${MM}`, ...void 0 === rM ? [] : [rM])
        }));
        rr.feed(), null !== HM && function(MM, rM, OM, SM, jM, aM) {
          let PM = null,
            QM = null,
            zM = !1;
          const LM = {
            textures: null,
            stop: () => {
              var MM, rM;
              zM = !0, null === (MM = QM) || void 0 === MM || MM(), null === (rM = PM) || void 0 === rM || rM(), tS.e.setSettled(null), null !== Ra && Bn.clear(Ra)
            }
          };
          wa = LM, QM = KQ().follow((QM => {
            null !== QM && Promise.all([iM.e(228), iM.e(52)]).then((() => iM(53772))).then((iM => {
              let {
                PackTextures: mM
              } = iM;
              if (zM || MM.isStopped) return;
              const HM = new mM({
                feed: QM,
                terrain: rM,
                backend: OM,
                stopped: () => MM.isStopped,
                landed: () => {
                  PP(MM)
                },
                packSwapped: () => {
                  (0, wS.j)(SM), aM.feed((() => async function(MM) {
                    const rM = null === MM ? null : await MM.averageColours;
                    return null === rM ? Vr() : qr(rM)
                  }(HM.assets))), (0, eS.j)(HM.files()), jM.refresh().then((MM => {
                    null !== MM && console.info(`${Kj} texture pack models: ${MM.resent} of ${MM.delivered} files written again, ${MM.refetched} refetched`)
                  }))
                },
                settled: (MM, rM, iM) => {
                  var OM;
                  (tS.e.setSettled({
                    state: MM,
                    files: rM
                  }), function(MM, rM, iM) {
                    const OM = null === MM.gameSource && (0, fi.g)(MM.pack);
                    if (null === rM) return;
                    const SM = (0, Zi.h)(rM.error),
                      jM = OM ? "settings" : rM.source;
                    nM.i.Tz(Zi.b, {
                      failure: SM,
                      source: jM,
                      pack: Yi(MM)
                    }), (0, oi.reportTexturePackKeptOut)(jM, SM, rM.error, iM)
                  }(MM, iM, ua), null === iM) && function(MM) {
                    const rM = Ra;
                    null !== rM && Bn.apply(rM, MM).then((rM => {
                      rM && MM && console.info(`${Kj} the texture pack's animations are in (${Object.keys(MM).length} files)`)
                    }))
                  }(null === (OM = MM.pack) || void 0 === OM ? void 0 : OM.animations)
                },
                settling: () => {
                  tS.e.setSettled(null)
                },
                warn: IQ,
                maxTextureSize: () => Promise.resolve((0, Hi.cb)(document.createElement("canvas")))
              });
              LM.textures = HM, PM = HM.start()
            }), (MM => {
              console.warn(`${Kj} the texture pack's terrain didn't load: the built atlas stays`, MM)
            }))
          }))
        }(uM, TM, HM, KM, qM, rr);
        const ir = () => {
            uM.setTextureLayers("")
          },
          Or = MM => {
            (tr ??= iM.e(65).then((() => iM(53809))).then((MM => {
              let {
                TEXTURE_NAMES: rM
              } = MM;
              return rM
            }), (MM => {
              throw tr = null, MM
            })), tr).then((MM => {
              uM.setTextureLayers(MM) || uM.isStopped || (console.warn(`${Kj} the core refused the texture names: textured Boxes draw textureNotFound`), ir())
            }), (rM => {
              if (uM.isStopped) return;
              const [iM, ...OM] = MM;
              void 0 === iM ? Az({
                site: oi.TEXTURE_NAMES_SITE,
                error: rM
              }, (() => {
                console.warn(`${Kj} the texture names didn't load, so textured Boxes draw textureNotFound`, rM), ir()
              }), {
                stillWanted: FM
              }) : setTimeout((() => {
                Or(OM)
              }), iM)
            }))
          };
        if (Or(Ha), null !== HM && !await async function(MM, rM, iM, OM, jM, aM) {
            var PM;
            const nM = (0, Hi.P)(iM);
            if (null === nM) return MM.crash(Tj, new Error(`this ${OM} build has no openRenderer`)), !1;
            let QM;
            On = nM;
            try {
              var zM, LM, mM, HM;
              const SM = null !== (zM = null === (LM = Ga) || void 0 === LM ? void 0 : LM.pagePreviews()) && void 0 !== zM ? zM : null,
                PM = null !== (mM = null === (HM = Ga) || void 0 === HM ? void 0 : HM.previewModule(iM)) && void 0 !== mM ? mM : null;
              if (null === SM || null === PM) {
                null === SM || void 0 === SM || SM.endSession(!1), QM = (0, Ar.g)().sampleCount, await (0, Hi.h)(rM, nM, aM, vQ, QM, await jM);
                const MM = (0, Hi.k)(iM);
                null === MM && console.warn(`${Kj} this ${OM} build has no image registry: sky and model images won't show`), (0, lS.f)(MM)
              } else {
                (0, ZS.e)() && await (0, cM.o)();
                const iM = (0, ZS.K)();
                if (null !== iM) {
                  const rM = (0, Ji.o)(nM);
                  return MM.crash(oi.RENDER_RELOAD_SITE, new Error(`${iM}${void 0===rM?"":` (${rM.message})`}`)), !1
                }
                QM = await SM.bindSession(PM, rM, (async MM => (0, Hi.w)(nM, Tj, aM, MM, vQ, await jM)))
              }
            } catch (SM) {
              return MM.crash(Tj, SM), !1
            }(function(MM, rM) {
              const iM = MM,
                {
                  requestCapture: OM,
                  takeCapture: SM
                } = iM;
              if ("function" !== typeof OM || "function" !== typeof SM) return;
              const jM = {
                request() {
                  OM.call(iM, rM)
                },
                take() {
                  var MM;
                  return null !== (MM = SM.call(iM)) && void 0 !== MM ? MM : null
                }
              };
              window[FS] = jM
            })(rM, QM), zn = QM, Mn = !0;
            const hM = performance.now();
            return rn.boundAtMs = null !== (PM = (0, ZS.O)()) && void 0 !== PM ? PM : hM, rn.indirectHangs = (0, ZS.C)(), rn.restoresSkipped = (0, ZS.R)(), console.info(`${Kj} ${OM} renderer bound at ${Math.round(hM)} ms`), !MM.isStopped
          }(uM, tM, wM, HM, JM, yM)) return null;
        if (null !== HM) {
          var Sr, jr, ar;
          (0, lr.L)(HM);
          const MM = () => !uM.isStopped && lz();
          iM.e(220).then((() => iM(34920))).then((rM => {
            let {
              devTools: iM
            } = rM;
            uM.isStopped || iM.setHost(function(MM) {
              return {
                tools: kS,
                async downloadScene(rM, iM) {
                  let {
                    width: OM,
                    height: SM,
                    colouring: jM
                  } = iM;
                  "screenshot" === rM && null === jM ? await (0, WS.h)(MM, OM, SM) : console.warn("The Rust client's developer tools take uncoloured screenshots only")
                },
                setAmbientLightIntensity: () => (console.warn("The Rust client's renderer has no ambient light setting"), Promise.resolve()),
                capturePhoto: (rM, iM, OM) => (0, WS.d)(MM, rM, iM, OM)
              }
            }(function(MM, rM) {
              return {
                canvas: MM,
                maxTextureSize: sS,
                lL: rM,
                resize: (MM, rM, iM) => {
                  (0, ci.z)(cr.tb.Resize, 0, MM / iM, rM / iM, (0, ci.l)(iM))
                },
                restoreSize: () => {
                  const rM = (0, Ar.p)(MM);
                  null !== rM && (0, ci.z)(cr.tb.Resize, 0, rM.cssWidth, rM.cssHeight, (0, ci.l)(rM.renderScale))
                },
                onFrameDrawn: MM => (DS.add(MM), () => {
                  DS.delete(MM)
                })
              }
            }(yM, MM)))
          }), (MM => {
            console.warn(`${Kj} the developer tools didn't load: no captures this session`, MM)
          }));
          const rM = "webgpu" === HM && null !== (Sr = null === mM || void 0 === mM || null === (jr = mM.adapter) || void 0 === jr ? void 0 : jr.vendor) && void 0 !== Sr ? Sr : null;
          Ln = {
            backend: HM,
            canvas: yM,
            fallbackReason: null !== (ar = null === mM || void 0 === mM ? void 0 : mM.reason) && void 0 !== ar ? ar : null,
            adapterVendor: rM
          }, rz();
          try {
            (0, EO.t)(HM, yM, rM)
          } catch (SM) {
            (0, EO.v)(), console.error(`${Kj} the quality steps didn't start`, SM)
          }
        }
        const {
          storagePullBreaks: Pr,
          splitPassBreaks: nr
        } = await JM;
        nr && console.warn(`${Kj} split_pass_breaks on: Windows Adreno 7xx (N-103) or ?sceneDepth=off`);
        const Qr = (0, VM.g)(mM, (0, Dr.k)());
        if ((0, rj.p)("webgpuloss")) {
          var zr, Lr;
          const MM = {
            backend: HM,
            reason: null !== (zr = null === mM || void 0 === mM ? void 0 : mM.reason) && void 0 !== zr ? zr : null,
            source: null !== (Lr = null === mM || void 0 === mM ? void 0 : mM.source) && void 0 !== Lr ? Lr : null,
            storagePullBreaks: Pr,
            noWebGpu: Qr.messageKey
          };
          (0, ij.d)((rM => {
            rM.noteWasmPick(MM)
          }))
        }
        const mr = "webgpu" === HM;
        if (OP = (0, VM.k)(mr ? uM : null, mr && null !== (PM = null === (QM = Ga) || void 0 === QM ? void 0 : QM.pagePreviews().nh) && void 0 !== PM ? PM : null, Qr, IQ), kn) return null;
        if (YM.reserveAtJoin((0, hS.p)(null !== DM && void 0 !== DM ? DM : Wi.f)), uM.isStopped) return null;
        const hr = MM => {
          if (LP = performance.now(), mP = !1, null !== mn) try {
            mn.animationFrame(MM)
          } catch (SM) {
            Sz(SM)
          }
          if (function(MM, rM) {
              return rM && !kn && !JP && Ez() && lz() && MM.framePaces(performance.now())
            }(uM, pn)) {
            if (uM.writePendingInput(), (0, pM.g)(MM, mz), iz(!1, MM), null !== mn) try {
              mn.framePaced()
            } catch (SM) {
              Sz(SM)
            }
            requestAnimationFrame(hr)
          } else Lz(uM, pn, "budget") && ((0, Zr.l)(uM.lastFrameKind) && lz() && (0, pM.g)(MM, mz), iz(pn && wn, MM), tn.frame(uM.lastFrameKind, pn && lz(), MM), gn.frame(uM.lastFrameKind, pn && lz()), (0, Zr.d)(uM.lastFrameKind) && Dr.B.drew(), gz(uM), YM.afterFrame(), requestAnimationFrame(hr))
        };
        requestAnimationFrame(hr);
        return function(MM) {
          if (MM.has("inputLog") && (0, uO.f)((MM => {
              let {
                action: rM,
                down: iM,
                press: OM
              } = MM;
              console.info(`${pO} input ${rM} ${iM?"down":"up"} press ${OM} at ${performance.now().toFixed(1)}`)
            })), MM.has("inputDump")) {
            const MM = [];
            sO = MM, Object.assign(window, {
              bloxdInputDump: () => MM.join("\n")
            })
          }
        }(new URLSearchParams(window.location.search)), Ba = function(MM) {
          let rM = null;
          const iM = () => {
              null !== rM && (clearInterval(rM), rM = null)
            },
            OM = () => {
              document.hidden ? rM ??= setInterval((() => {
                Yz(MM) || iM()
              }), ma) : iM()
            };
          return document.addEventListener("visibilitychange", OM), OM(), () => {
            iM(), document.removeEventListener("visibilitychange", OM)
          }
        }(uM), uM
      }(rM).then((MM => {
        var rM;
        (OM(ua), sa(null !== MM), null !== MM && (EM = performance.now()), pa(MM), null === MM) ? null === (rM = Ga) || void 0 === rM || rM.pagePreviews().endSession(null === (0, Jr.t)()): aP("booted")
      }), (MM => {
        OM(ua), sa(!1), pa(null), wz({
          site: Vj,
          error: MM,
          header: null
        }, ua)
      }))
    }

    function Fn() {
      const MM = Ra;
      null !== MM && fn().then((rM => {
        let {
          pageBuiltInAnimationPack: iM
        } = rM;
        iM().provide(MM)
      }), (MM => {
        console.warn(`${Kj} the built-in animation pack's chunk did not load: lifeforms stay in their rest pose`, MM)
      }))
    }
    const Bn = new class {
      constructor(MM) {
        this.deps = MM, this.latest = 0, this.sQ = null
      }
      apply(MM, rM) {
        return this.load(MM, rM, 0)
      }
      async load(MM, rM, iM) {
        var OM;
        const SM = ++this.latest,
          jM = this.deps.compiler;
        if (void 0 === rM || null === rM || "object" !== typeof rM || 0 === Object.keys(rM).length || null === jM) return this.drop(MM), !1;
        if ((null === (OM = this.sQ) || void 0 === OM ? void 0 : OM.module) === MM && (0, ni.Td)(this.sQ.files, rM)) return !1;
        try {
          const [iM, OM] = await Promise.all([jM(), this.deps.builtIns()]);
          if (SM !== this.latest) return !1;
          const aM = await iM(rM, mi, {
            builtIns: OM
          });
          if (SM !== this.latest) return !1;
          const PM = this.call(MM, aM);
          if (void 0 === PM) throw new Li("the compiled animations didn't read against the built-in pack");
          return this.sQ = {
              module: MM,
              files: rM
            },
            function(MM) {
              for (let rM = 0; rM + 2 < MM.length; rM += 3) {
                ("error" === MM[rM] ? console.error : console.warn)(`Animation for the texture pack: ${MM[rM+1]}: ${MM[rM+2]}`)
              }
            }(PM), !0
        } catch (PM) {
          var aM;
          if (SM !== this.latest) return !1;
          this.drop(MM), 0 === iM && this.deps.warn("the texture pack's animations didn't load: lifeforms play the built-in ones", PM);
          const OM = (null !== (aM = this.deps.retryAfterMs) && void 0 !== aM ? aM : zi)[iM];
          return void 0 === OM || PM instanceof Li || (0, Qi.m)(MM) || setTimeout((() => {
            SM === this.latest && this.load(MM, rM, iM + 1)
          }), OM), !1
        }
      }
      call(MM, rM) {
        try {
          return MM.aOM(rM)
        } catch (iM) {
          throw (0, Qi.q)(MM, iM), iM
        }
      }
      clear(MM) {
        this.latest++, this.drop(MM)
      }
      drop(MM) {
        const rM = this.sQ;
        if (this.sQ = null, (null === rM || void 0 === rM ? void 0 : rM.module) === MM && !(0, Qi.m)(MM)) try {
          this.call(MM, null)
        } catch {}
      }
    }({
      compiler: Si.c,
      builtIns: async () => {
        const {
          pageBuiltInAnimationPack: MM
        } = await fn();
        return MM().whenSet()
      },
      warn: IQ
    });
    async function Xn(MM, rM) {
      let OM = !1;
      await In({
        matchmake: async () => {
          const {
            guestJoinTarget: SM,
            guestJoinWithPack: jM
          } = await iM.e(300).then((() => iM(53755)));
          return OM ? SM(MM, rM, TQ()) : (OM = !0, jM(MM, rM, (rM => VQ(MM, rM)), TQ))
        },
        onFailure: MM => {
          (0, oi.showJoinFailure)(MM, ua)
        },
        rejoin: zQ,
        invalidateTrafficCode: LQ
      })
    }
    async function In(MM) {
      let {
        matchmake: rM,
        onFailure: iM,
        rejoin: SM,
        invalidateTrafficCode: jM,
        pageReady: aM,
        signal: PM
      } = MM;
      const nM = () => !0 === (null === PM || void 0 === PM ? void 0 : PM.aborted);
      let QM;
      const zM = tS.e.rejoinHold();
      uP = null, (0, Xi.d)();
      const LM = (0, vi.S)("wasm", Wz);
      let mM = !1,
        HM = performance.now();
      try {
        if (!await Da) return {
          kind: "stopped"
        };
        if (nM()) return {
          kind: "Ti"
        };
        Yn().catch((() => {}));
        let MM = await rM();
        var GM, CM;
        if (HM = performance.now(), !nM()) pz(null !== (GM = null === (CM = MM.target.session) || void 0 === CM ? void 0 : CM.gameNameWithVariation) && void 0 !== GM ? GM : null);
        const iM = () => performance.now() - MM.matchedAt <= MM.freshMs,
          OM = qn(MM.target).catch((() => {}));
        iM() && !nM() && (QM = new QS(MM.target, {
          signal: PM
        }));
        const jM = performance.now();
        if (null === await Wa) return {
          kind: "stopped"
        };
        var eM, bM;
        if (function(MM) {
            var rM, iM;
            if (JM.b.markGameEngineConstructed(), UM) return;
            UM = !0;
            const OM = Math.max(MM, null !== (rM = yM) && void 0 !== rM ? rM : MM);
            (0, dM.l)("ready", Math.max(0, (null !== (iM = lM) && void 0 !== iM ? iM : OM) - OM) / 1e3)
          }(jM), !nM())
          if (null !== lM && null !== EM ? ((0, hM.s)("wasm_loaded", lM), (0, hM.s)("wasm_core_ready", EM)) : console.warn("[bloxd-wasm-client] a join found the core before boot marked its steps"), MM.target.session && (0, zj.c)(MM.target.session.gameNameWithVariation)) null === (eM = fa) || void 0 === eM || eM.prestart();
        if (await OM, !iM() && !nM()) null === (bM = QM) || void 0 === bM || bM.rematched(), MM = await rM(), HM = performance.now();
        if (nM()) return {
          kind: "Ti"
        };
        const zM = await async function(MM) {
          var rM, iM, OM;
          let {
            signal: SM,
            rejoin: jM = null,
            early: aM,
            pageReady: PM
          } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (null !== SM && void 0 !== SM && SM.aborted) throw new DOMException("the join was left", "AbortError");
          const nM = (QM = vP, zM = performance.now(), null !== QM && zM - QM < qO);
          var QM, zM;
          vP = null;
          const LM = new AbortController,
            mM = null !== (rM = null === (iM = MM.session) || void 0 === iM ? void 0 : iM.gameNameWithVariation) && void 0 !== rM ? rM : null;
          pz(mM), cn({
            controller: LM,
            game: mM
          }), FP = null, null === (OM = IP) || void 0 === OM || OM.abort(), IP = null, qP = !1, TP = null, VP.clear();
          const HM = () => {
            (0, ur.j)(LM, (0, ur.f)(SM))
          };
          null === SM || void 0 === SM || SM.addEventListener("abort", HM, {
            once: !0
          });
          try {
            var JM, dM, yM;
            const rM = await Wa;
            if (null === rM || rM.isStopped || kn) throw new Error("no core is running to join a game with");
            if (MM.session && null !== OP) {
              const rM = await Tn(OP.join(MM.session.gameNameWithVariation), LM.signal);
              if ((0, rj.p)("webgpuloss")) {
                const iM = MM.session.gameNameWithVariation,
                  OM = OP.couldntRunInJoinedGame();
                (0, ij.d)((MM => MM.noteWasmJoin(iM, rM, OM)))
              }
              if (null !== rM) throw new VM.e(rM)
            }
            const [, , , {
              joinRoom: iM
            }] = await Tn(Promise.all([(0, WM.h)(rM), qn(MM), null === PM || void 0 === PM ? void 0 : PM(), Yn()]), LM.signal), OM = MM.session, SM = OM ? {
              ...hQ,
              attachSocket: rM => {
                const iM = GQ(rM, MM.endpoint);
                var SM;
                null !== iM && (WP = {
                  conn: iM,
                  info: OM
                }, null === (SM = sP) || void 0 === SM || SM(OM.playerDbId));
                return iM
              }
            } : hQ, QM = await iM(SM, MM, {
              signal: LM.signal,
              early: aM
            }).catch((MM => {
              throw function(MM) {
                if (!(MM instanceof xM.d)) return MM;
                if ("roomError" === MM.stage && null !== TP) return Kn(new xM.d(MM.message, MM.stage, MM.code, TP), MM);
                const rM = "closed" === MM.stage && null !== BP ? VP.get(BP.conn) : void 0;
                return void 0 === rM ? MM : Kn(new xM.d(MM.message, MM.stage, rM.code, null, MM.socketOpened), MM)
              }(MM)
            }));
            if (gP !== LM) throw QM.leave(), new DOMException("the join was left", "AbortError");
            rQ(QM), null === (JM = Na) || void 0 === JM || JM.newGame();
            const zM = function(MM) {
              var rM, iM;
              const {
                session: OM
              } = MM, SM = void 0 === OM ? MM.joinOptions.lobbyName : OM.lobbyName;
              return {
                endpoint: MM.endpoint,
                game: null !== (rM = null === OM || void 0 === OM ? void 0 : OM.gameNameWithVariation) && void 0 !== rM ? rM : MM.roomName,
                lobby: String(null !== SM && void 0 !== SM ? SM : null),
                postCookies: null !== (iM = MM.postCookies) && void 0 !== iM ? iM : null
              }
            }(MM);
            tP.set(QM, zM), jS(zM);
            const mM = performance.now(),
              HM = {
                conn: QM.conn,
                rejoin: jM,
                game: null !== (dM = null === (yM = MM.session) || void 0 === yM ? void 0 : yM.gameNameWithVariation) && void 0 !== dM ? dM : "",
                joinedAt: mM,
                rejoinedAt: nM ? mM : null,
                overflow: null
              };
            DP = HM,
              function(MM, rM) {
                RQ();
                const iM = {
                  endpoint: rM,
                  roomId: MM.seat.room.roomId,
                  heldConn: 0,
                  dropCode: 0,
                  pendingHold: null,
                  resume: new gi({
                    reconnect: (MM, rM, OM) => async function(MM, rM, iM, OM) {
                      const {
                        roomId: SM,
                        roomToken: jM
                      } = WQ(MM, rM), aM = ea;
                      if (null === aM || aM.isStopped || kn) throw new Error("no core is running to resume the game on");
                      const {
                        resumeRoom: PM
                      } = await Tn(Yn(), iM), nM = {
                        ...hQ,
                        attachSocket: rM => kP !== MM || 0 === MM.heldConn ? (rM.close(), null) : GQ(rM, MM.endpoint, !0)
                      };
                      return PM(nM, MM.endpoint, SM, jM, {
                        signal: iM,
                        onAttached: OM
                      })
                    }(iM, MM, rM, OM),
                    releaseSeat: MM => {
                      !async function(MM, rM) {
                        const {
                          roomId: iM,
                          roomToken: OM
                        } = WQ(MM, rM);
                        try {
                          const {
                            leaveHeldSeat: rM
                          } = await Yn();
                          await rM(MM.endpoint, iM, OM)
                        } catch (SM) {
                          console.warn(`${Kj} the held seat of a game left while it reconnected couldn't be released`, SM)
                        }
                      }(iM, MM)
                    },
                    isLive: () => kP === iM && null !== DP && !kn,
                    OW: MM => {
                      xP = MM, uQ()
                    },
                    onReconnected: MM => {
                      ! function(MM) {
                        const rM = wP;
                        if (null !== rM && rM !== MM) {
                          const iM = tP.get(rM);
                          void 0 !== iM && tP.set(MM, iM), bn === rM && (bn = MM), rM.detach()
                        }
                        rQ(MM)
                      }(MM)
                    },
                    onGaveUp: (MM, rM) => {
                      ! function(MM, rM, iM) {
                        var OM, SM;
                        console.warn(`${Kj} gave up reconnecting (${iM.reason}, ${iM.attempts} attempts)`, iM.lastError), (0, oi.reportReconnectGaveUp)(iM, ua);
                        const jM = null !== (OM = null === (SM = DP) || void 0 === SM ? void 0 : SM.rejoin) && void 0 !== OM ? OM : null;
                        pQ(MM, "gaveUp"), OQ();
                        const aM = {
                          code: MM.dropCode,
                          name: null,
                          reason: na,
                          canReconnect: !rM,
                          automaticallyReconnect: !1,
                          requiresRefresh: !1
                        };
                        HQ(aM, rM ? null : jM, !1, {
                          reasonKey: Qa,
                          canPlayAgain: rM
                        })
                      }(iM, MM, rM)
                    }
                  })
                };
                kP = iM, null !== ZP && ZP.conn === MM.conn && iM.resume.onInitialInfo(ZP)
              }(QM, MM.endpoint), performance.mark(ra), (0, hM.s)("wasm_joined", mM), setTimeout((() => {
                wP === QM && (0, hM.e)()
              }), 0), Fn(), console.info(`${Kj} joined ${MM.roomName} as ${QM.seat.sessionId} at ${Math.round(performance.now())} ms`);
            const lM = FP;
            FP = null, null !== lM && aQ(HM, lM.mask, lM.frames);
            const EM = VP.get(QM.conn);
            return VP.clear(), void 0 !== EM && (rQ(null), mQ(QM.conn, EM.code, EM.reason)), QM
          } finally {
            var lM;
            null === SM || void 0 === SM || SM.removeEventListener("abort", HM), gP === LM && MQ(wP, null), (null === (lM = BP) || void 0 === lM ? void 0 : lM.join) === LM && (BP = null)
          }
        }(MM.target, {
          signal: PM,
          rejoin: SM(MM.target),
          early: QM,
          pageReady: aM
        });
        return mM = !0, {
          kind: "joined",
          game: zM
        }
      } catch (tM) {
        if (tM instanceof DOMException && "AbortError" === tM.name || nM()) return {
          kind: "Ti"
        };
        if (kn) return {
          kind: "stopped"
        };
        if (qP && (qP = !1, await jM().catch((MM => {
            console.warn(`${Kj} the cached traffic code could not be dropped`, MM)
          }))), null === await Wa) return {
          kind: "stopped"
        };
        if (tM instanceof VM.e) return iM(tM, performance.now() - HM), {
          kind: "failed",
          error: tM,
          reloading: !1
        };
        if (tM instanceof xM.d && tM.code === OM.d.wasmClientNotAllowed.code && Rn) return xQ("this server refused the wasm client to this account", "refused"), {
          kind: "failed",
          error: tM,
          reloading: !0
        };
        const MM = tM instanceof xM.d && tM.code === OM.d.outdatedVersion.code,
          rM = () => null === wP,
          SM = await Az({
            site: oi.JOIN_SITE,
            error: tM,
            outdated: MM
          }, (() => {
            iM(tM, performance.now() - HM)
          }), {
            stillWanted: rM
          });
        return {
          kind: "failed",
          error: tM,
          reloading: SM
        }
      } finally {
        var wM;
        mM || LM.end(), tS.e.releaseHold(zM);
        const MM = null === (wM = QM) || void 0 === wM ? void 0 : wM.release();
        MM && (0, oi.reportUnusedSeat)(MM, ua)
      }
    }

    function Kn(MM, rM) {
      return MM.stack = rM.stack, MM
    }

    function qn(MM) {
      return MM.session ? (0, WM.m)(ga, MM.session.gameNameWithVariation) : Promise.resolve()
    }

    function Tn(MM, rM) {
      return (0, ur.p)(rM), new Promise(((iM, OM) => {
        const SM = () => {
          OM((0, ur.f)(rM))
        };
        rM.addEventListener("abort", SM, {
          once: !0
        }), MM.then((MM => {
          rM.removeEventListener("abort", SM), iM(MM)
        }), (MM => {
          rM.removeEventListener("abort", SM), OM(MM)
        }))
      }))
    }

    function Vn() {
      cn(null)
    }

    function cn(MM) {
      var rM, iM, OM;
      (function() {
        const MM = kP;
        null !== MM && pQ(MM, "left")
      }(), null === Za || Za.left) || (Za.left = !0, null === (OM = (0, WM.e)()) || void 0 === OM || OM.socketLeft(), (0, mM.p)({
        websocketUrl: null
      }));
      gP && (0, ur.j)(gP, new DOMException("the join was left", "AbortError")), OQ(null !== MM), null === (rM = OP) || void 0 === rM || rM.leave();
      const SM = wP;
      null !== MM && tS.e.setGame(MM.game), MQ(null, null !== (iM = null === MM || void 0 === MM ? void 0 : MM.controller) && void 0 !== iM ? iM : null), null === SM || void 0 === SM || SM.leave(), iQ(0), (0, br.e)()
    }

    function MQ(MM, rM) {
      wP = MM, gP = rM, null === wP && null === gP && tS.e.setGame(void 0)
    }

    function rQ(MM) {
      MQ(MM, gP)
    }

    function iQ(MM) {
      const rM = ea;
      return null !== Ja && !kn && null !== rM && !rM.isStopped && (!!Ja(xM.j, 0, (0, xM.z)(MM)) && (lP = !0, 0 === MM || JP || Lz(rM, !1, "all"), !0))
    }

    function OQ() {
      var MM, rM;
      arguments.length > 0 && void 0 !== arguments[0] && arguments[0] || (0, vi.c)();
      const iM = null !== (MM = null === (rM = DP) || void 0 === rM ? void 0 : rM.overflow) && void 0 !== MM ? MM : null;
      DP = null, null !== iM && (0, oi.reportEventOverflow)(iM, ua)
    }

    function SQ() {
      null !== wP || null !== gP ? Vn() : CQ()
    }

    function jQ(MM, rM) {
      console.warn(`${Kj} the event buffer refused records in ${rM} frames (categories ${MM})`), kn || (null !== DP ? aQ(DP, MM, rM) : null !== gP && function(MM, rM, iM) {
        var OM;
        const SM = function(MM, rM) {
          return null === MM ? "drop" : MM.activated ? "keep" : 0 !== (rM & Mi.u.NetSession) ? "fail" : "drop"
        }((null === (OM = BP) || void 0 === OM ? void 0 : OM.join) === MM ? BP : null, rM);
        "keep" === SM ? FP = {
          mask: rM,
          frames: iM
        } : "fail" === SM && (0, ur.j)(MM, new Error("the join's net session was lost to an event overflow"))
      }(gP, MM, rM))
    }

    function aQ(MM, rM, iM) {
      const OM = MM.overflow ??= {
        frames: 0,
        acks: 0,
        mask: 0,
        outcome: null
      };
      OM.frames += iM, OM.acks++, OM.mask |= rM;
      const SM = function(MM, rM, iM) {
        if (0 === (MM & Mi.u.NetSession)) return "none";
        const OM = null !== rM.rejoinedAt && iM - rM.rejoinedAt < TO;
        return null === rM.rejoin || OM ? "fail" : "rejoin"
      }(rM, MM, performance.now());
      "none" !== SM && queueMicrotask((() => {
        if (DP !== MM) return;
        const rM = "rejoin" === SM && performance.now() - XP >= AM.f;
        OM.outcome = rM ? "rejoined" : "failed", HQ(function(MM, rM) {
          return {
            code: 0,
            name: "eventOverflow",
            reason: "Your game fell behind the server.",
            canReconnect: MM,
            automaticallyReconnect: rM,
            requiresRefresh: !1
          }
        }(null !== MM.rejoin, rM), MM.rejoin, rM), Vn(), rM && (vP = performance.now())
      }))
    }

    function PQ() {
      Rn && function(MM, rM) {
        let {
          mesh: iM,
          worldgen: OM,
          modelPool: SM
        } = MM;
        "landingPage" === rM ? (null === iM || void 0 === iM || iM.stopWorkers(), null === OM || void 0 === OM || OM.stopWorker(), null === SM || void 0 === SM || SM.stopWorkers()) : ((0, Mr.i)(rM) || "inGame" === rM) && (null === iM || void 0 === iM || iM.restartWorkers(), null === SM || void 0 === SM || SM.startWorkers())
      }({
        mesh: Na,
        worldgen: fa,
        modelPool: qa
      }, Mr.d.get("gameState"))
    }

    function nQ(MM) {
      pn = MM, Wn && QQ(Wn, MM)
    }

    function QQ(MM, rM) {
      MM.style.visibility = rM ? "visible" : "hidden"
    }

    function zQ(MM) {
      var rM;
      const iM = MM.roomName,
        OM = null !== (rM = MM.joinOptions.lobbyName) && void 0 !== rM ? rM : null;
      return () => {
        Xn(iM, OM)
      }
    }

    function LQ() {
      return iM.e(300).then((() => iM(53755))).then((MM => {
        let {
          invalidateGuestTrafficCode: rM
        } = MM;
        return rM()
      })).catch((MM => {
        console.warn(`${Kj} the cached traffic code could not be dropped`, MM)
      }))
    }

    function mQ(MM, rM, iM) {
      var SM, jM;
      let aM = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (kn) return;
      if ((null === (SM = DP) || void 0 === SM ? void 0 : SM.conn) !== MM) return void(null !== gP && VP.set(MM, {
        code: rM,
        reason: iM
      }));
      const {
        rejoin: PM,
        game: nM,
        joinedAt: QM
      } = DP;
      OQ(), RQ();
      const zM = (0, AM.m)(rM, (0, cO.g)(MM));
      if (console.info(`${Kj} the game's connection closed with code ${rM} (${null!==(jM=zM.name)&&void 0!==jM?jM:"unrecognised"})`), rM === OM.d.gameOrPluginKick.code || aM || (0, oi.reportDisconnect)(zM, ua, {
          closeReason: iM,
          sinceJoinedMs: performance.now() - QM,
          game: nM
        }), zM.requiresRefresh) {
        const MM = "outdatedVersion" === zM.name,
          iM = new Error(`the game's connection closed with code ${rM}`),
          OM = () => null === DP && null === gP;
        return void Az({
          site: oi.JOIN_SITE,
          error: iM,
          outdated: MM
        }, (() => {
          OM() && HQ(zM, null, !1)
        }), {
          stillWanted: OM
        })
      }
      const LM = zM.canReconnect ? PM : null,
        mM = null !== LM && zM.automaticallyReconnect && performance.now() - XP >= AM.f;
      HQ(zM, LM, mM)
    }

    function HQ(MM, rM, iM) {
      var OM;
      let SM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
        reasonKey: null,
        canPlayAgain: !1
      };
      if (sn) return;
      tS.e.unwantedLeave(iM && null !== rM && 0 === KP.size), null === (OM = IP) || void 0 === OM || OM.abort();
      const jM = new AbortController;
      IP = jM;
      const aM = null === rM ? null : () => {
        jM.signal.aborted || (jM.abort(), rM())
      };
      if (iM && null !== aM) {
        XP = performance.now();
        const MM = setTimeout(aM, AM.e);
        jM.signal.addEventListener("abort", (() => {
          clearTimeout(MM)
        }))
      }
      const PM = {
        code: MM.code,
        name: MM.name,
        reason: MM.reason,
        reasonKey: SM.reasonKey,
        reconnect: aM,
        reconnecting: iM,
        requiresRefresh: MM.requiresRefresh,
        canPlayAgain: SM.canPlayAgain
      };
      if (KP.size > 0)
        for (const QM of [...KP]) try {
          QM(PM)
        } catch (nM) {
          console.error(`${Kj} an unwanted-leave listener threw`, nM)
        } else xO((0, YO.g)(MM, null !== aM, iM), jM.signal).then((rM => {
          rM && (null !== aM ? aM() : MM.requiresRefresh && (0, cM.k)())
        }))
    }
    const hQ = {
      attachSocket: MM => GQ(MM),
      onConnection: MM => (cP.add(MM), () => {
        cP.delete(MM)
      }),
      sendRaw: (MM, rM) => {
        const iM = Za;
        return null !== iM && iM.conn === MM && Cz(iM, rM)
      },
      leaveRoom: iQ,
      closeSocket: MM => {
        var rM;
        (null === (rM = Za) || void 0 === rM ? void 0 : rM.conn) === MM && CQ()
      },
      flushNet: eQ
    };

    function JQ(MM) {
      var rM;
      let {
        aux: iM,
        payload: OM
      } = MM;
      null === (rM = ea) || void 0 === rM || rM.queueOptions(iM, OM)
    }

    function dQ(MM, rM) {
      JQ(function(MM, rM) {
        return NS = MM ? {
          preventMovement: rM
        } : null, MM ? AS(rM) : {
          aux: cr.$b.AdEnd,
          payload: YS
        }
      }(MM, rM))
    }

    function yQ(MM) {
      var rM;
      CP = MM, null === (rM = ea) || void 0 === rM || rM.setUiPrefs(MM)
    }

    function lQ(MM, rM) {
      ga.setMaster(MM, rM)
    }

    function EQ(MM) {
      var rM;
      eP = MM, null === (rM = ea) || void 0 === rM || rM.setEnvPrefs(MM)
    }

    function UQ(MM) {
      var rM;
      bP = MM, null === (rM = ea) || void 0 === rM || rM.setLookPrefs(MM)
    }

    function GQ(MM) {
      var rM;
      let iM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new URL(MM.url).origin,
        OM = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      if (MM.readyState === WebSocket.CLOSING || MM.readyState === WebSocket.CLOSED) return console.warn(`${Kj} a closing or closed socket can't be attached`), null;
      const SM = ea;
      if (!SM || SM.isStopped) return console.warn(`${Kj} no core is running to attach a socket to`), MM.close(), null;
      if (null === (0, WM.e)()) return console.warn(`${Kj} the game has not started to attach a socket to`), MM.close(), null;
      if (nP > cr.y) return console.warn(`${Kj} this core has attached all the sockets it can; reload to play on`), MM.close(), null;
      if (lP && !JP && (Lz(SM, !1, "all"), SM.isStopped || kn)) return MM.close(), null;
      CQ();
      const jM = nP++;
      if (!ZQ(SM, "open", jM, OM ? cr.Xb.Resume : 0)) return MM.close(), null;
      OM || er.d.reset(), BP = null === gP ? null : {
        join: gP,
        conn: jM,
        activated: !1
      }, MM.binaryType = "arraybuffer";
      const aM = new ui.b((() => {
          ! function(MM, rM) {
            if (Za !== rM || MM.isStopped || null === tQ(rM, aa)) return;
            rM.detach(), Za = null, wQ(MM, rM, aa, "", !0), rM.ws.close()
          }(SM, PM)
        })),
        PM = {
          ws: MM,
          conn: jM,
          pending: [],
          pendingBytes: 0,
          left: !1,
          resume: OM,
          token: null,
          detach: () => {
            aM.dispose(), MM.removeEventListener("message", nM), MM.removeEventListener("open", QM), MM.removeEventListener("close", zM)
          }
        },
        nM = MM => {
          if (MM.data instanceof ArrayBuffer) {
            var rM;
            const iM = new Uint8Array(MM.data);
            aM.heard(), PM.token = null !== (rM = (0, Ri.c)(iM)) && void 0 !== rM ? rM : PM.token,
              function(MM, rM, iM) {
                Dz(MM, (() => {
                  MM.rings.net.writeFrame(rM, iM) || MM.crash(di.x, `a socket frame of ${iM.byteLength} bytes did not fit the net-in ring`)
                }));
                const OM = MM.rings.net.cursor >= ja;
                !fz() && (OM || MM.netWrittenSinceFrame >= Sa) && Lz(MM, !1, document.hidden ? "all" : "budget");
                Nz(MM)
              }(SM, jM, iM)
          }
        },
        QM = () => {
          OM || (0, hM.s)("wasm_socket_open", performance.now());
          for (const rM of PM.pending.splice(0)) MM.send(rM);
          PM.pendingBytes = 0
        },
        zM = MM => {
          if (Za === PM && SM.rings.net.cursor > 0 && Lz(SM, !1, "all"), Za === PM) {
            if (PM.detach(), Za = null, wQ(SM, PM, MM.code, MM.reason) || bQ(SM, PM)) return;
            ZQ(SM, "close", jM), gQ(jM, PM.left), mQ(jM, MM.code, MM.reason)
          }
        };
      return MM.addEventListener("message", nM), MM.addEventListener("open", QM), MM.addEventListener("close", zM), Za = PM, null === (rM = (0, WM.e)()) || void 0 === rM || rM.socketAttached(jM), (0, mM.p)({
        websocketUrl: iM
      }), jM
    }

    function CQ() {
      const MM = Za;
      if (!MM) return;
      const rM = ea,
        iM = MM.resume;
      iM && (eQ(), Za !== MM) || (Za = null, MM.detach(), MM.ws.close(), null !== rM && (bQ(rM, MM) || iM && wQ(rM, MM, Pa)) || (null !== rM && ZQ(rM, "close", MM.conn), gQ(MM.conn, MM.left)))
    }

    function eQ() {
      const MM = ea;
      null !== MM && !MM.isStopped && !kn && !JP && MM.rings.net.cursor > 0 && Lz(MM, !1, "all")
    }

    function bQ(MM, rM) {
      var iM;
      if (!rM.resume) return !1;
      const OM = kP;
      return null !== OM && null !== rM.token && "" !== rM.token && (OM.pendingHold = {
        conn: rM.conn,
        token: `${OM.roomId}:${rM.token}`
      }), ZQ(MM, "close", rM.conn), null === (iM = (0, WM.e)()) || void 0 === iM || iM.socketDetached(rM.conn), !0
    }

    function wQ(MM, rM, iM) {
      let OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "",
        SM = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
      const jM = tQ(rM, iM);
      if (null === jM) return !1;
      const {
        sQ: aM,
        token: PM,
        game: nM,
        joinedAt: QM
      } = jM;
      if (!ZQ(MM, "close", rM.conn, cr.B.Held)) return !0;
      console.warn(`${Kj} the game's connection ${SM?"went silent":`dropped with code ${iM}`}, holding it`);
      const zM = {
        closeReason: OM,
        sinceJoinedMs: performance.now() - QM,
        game: nM
      };
      return (0, oi.reportDisconnect)((0, AM.m)(iM), ua, zM, SM ? "silent" : void 0), aM.heldConn = rM.conn, aM.dropCode = iM, aM.pendingHold = {
        conn: rM.conn,
        token: `${aM.roomId}:${PM}`
      }, JP || Lz(MM, !1, "all"), !0
    }

    function tQ(MM, rM) {
      const iM = kP,
        SM = DP,
        jM = MM.token;
      return null === iM || null === SM || kn || MM.left || SM.conn !== MM.conn || null === jM || "" === jM ? null : (0, OM.g)(rM) && iM.resume.canHoldSeat() ? {
        sQ: iM,
        token: jM,
        game: SM.game,
        joinedAt: SM.joinedAt
      } : null
    }

    function gQ(MM, rM) {
      var iM;
      null === (iM = (0, WM.e)()) || void 0 === iM || iM.closeGame(MM), (0, fS.b)().close(MM), rM || (0, mM.p)({
        websocketUrl: null
      })
    }

    function uQ() {
      const MM = xP;
      if (null === MM) return;
      const rM = (0, WM.e)();
      kn || null === rM || rM.OW(MM) ? xP = null : performance.now() - EP.pause >= La && (EP.pause = performance.now(), console.warn(`${Kj} the cmd ring had no room for SetPaused(${MM}): written before the next frame`))
    }

    function RQ() {
      const MM = kP;
      kP = null, null === MM || void 0 === MM || MM.resume.dispose()
    }

    function pQ(MM, rM) {
      var iM, OM;
      const {
        heldConn: SM
      } = MM, jM = MM.resume.resumingConn;
      MM.heldConn = 0, MM.pendingHold = null, kP === MM && (kP = null), "left" === rM ? MM.resume.leave() : MM.resume.dispose(), 0 === AP || (null === (iM = Za) || void 0 === iM ? void 0 : iM.conn) !== AP || "left" === rM && (null === (OM = wP) || void 0 === OM ? void 0 : OM.conn) === AP || kQ(AP), "gaveUp" === rM && 0 !== jM && kQ(jM), 0 !== SM && "refused" !== rM && (console.info(`${Kj} the game held through its drop ${"left"===rM?"was left":"is given up"}`), null === ea || ea.isStopped || ZQ(ea, "close", SM), gQ(SM, !1))
    }

    function WQ(MM, rM) {
      const iM = rM.indexOf(":");
      return {
        roomId: iM < 0 ? MM.roomId : rM.slice(0, iM),
        roomToken: rM.slice(iM + 1)
      }
    }

    function sQ(MM) {
      (0, yi.logClientMeasurement)("join_preload", MM, {
        client: "wasm"
      })
    }

    function DQ(MM) {
      var rM;
      ZP = MM;
      const iM = MM.replayOffer && NP !== MM.conn;
      YP = iM ? MM.conn : 0, oP = iM || fP.has(MM.conn) ? 0 : MM.conn, CM.admitted(), MM.conn === AP && (AP = 0);
      const OM = kP;
      null !== OM && (null === (rM = DP) || void 0 === rM ? void 0 : rM.conn) === MM.conn && OM.resume.onInitialInfo(MM)
    }

    function kQ(MM) {
      var rM;
      const iM = Za;
      (null === iM || void 0 === iM ? void 0 : iM.conn) === MM && (iM.left = !0, null === (rM = (0, WM.e)()) || void 0 === rM || rM.socketLeft(), (0, mM.p)({
        websocketUrl: null
      }), iQ(MM) ? setTimeout((() => {
        Za === iM && CQ()
      }), xM.h) : CQ())
    }

    function ZQ(MM, rM, iM) {
      let OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        SM = !1;
      return Dz(MM, (() => {
        const {
          net: jM
        } = MM.rings;
        SM = "open" === rM ? jM.writeOpen(iM, OM) : jM.writeClose(iM, OM), SM || MM.crash(di.x, `a socket ${rM} did not fit the net-in ring`)
      })), SM
    }

    function oQ(MM, rM, iM) {
      let OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      if (AQ()) return (0, oi.reportUnsupportedFallback)(MM, rM, iM, OM), void xQ(`the wasm client can't run here (${iM}; ${rM})`, rM);
      (0, oi.showUnsupported)(MM, "unsupported", iM, OM)
    }
    const fQ = 1500;

    function YQ(MM, rM) {
      const iM = 1 === MM.missing.length && MM.missing[0] === Hi.e,
        OM = rM ? "blockedAfterLoss" : iM ? "noContext" : "unsupported";
      return {
        decline: OM,
        detail: `No WebGPU or WebGL2, and WebGL1 lacks ${MM.missing.join(", ")}`,
        details: {
          missing: MM.missing.join(",")
        },
        retries: "unsupported" !== OM && AQ()
      }
    }

    function NQ(MM) {
      console.warn(`${Kj} ${MM}: reloading once more onto the wasm client`), (0, ZS.s)(), (0, oi.flushCrashReports)(cM.c).then(cM.k, cM.k)
    }

    function AQ() {
      return Rn && "wasm" !== (0, Gr.h)(window.location.search)
    }

    function xQ(MM, rM) {
      console.warn(`${Kj} ${MM}: reloading on the JS client`), null !== rM && (0, Gr.F)(rM), (0, Gr.E)(null === rM ? "reloadOntoJs" : "decline");
      const iM = () => {
        (0, cM.j)(Gr.K)
      };
      (0, oi.flushCrashReports)(cM.c).then(iM, iM)
    }

    function vQ(MM, rM, iM, OM) {
      return Sn(MM, rM, iM, OM)
    }

    function FQ() {
      null === Pn || null === ea || ea.isStopped || kn || null !== Va || null === Ja || (Va = Pn(Ja, IQ, KQ().follow))
    }

    function BQ() {
      var MM, rM, iM;
      return null !== (MM = null === (rM = wa) || void 0 === rM || null === (iM = rM.textures) || void 0 === iM ? void 0 : iM.files()) && void 0 !== MM ? MM : null
    }

    function XQ(MM) {
      KQ().follow((rM => {
        null !== rM && Promise.all([Promise.all([iM.e(228), iM.e(52)]).then((() => iM(53784))), (0, ZS.U)()]).then((MM => {
          let [{
            followPagePackFiles: iM
          }, OM] = MM;
          const SM = null === OM || (0, Hi.l)(OM) ? "webgl" : OM.backend;
          iM(rM, wS.g, SM, (MM => {
            wS.g.setPageFiles(MM)
          }), IQ)
        }), (rM => {
          console.warn(`${Kj} the texture pack's files didn't load: the previews draw the shipped ones until the next opens`, rM), MM()
        }))
      }))
    }

    function IQ(MM, rM) {
      console.warn(`${Kj} ${MM}`, rM)
    }

    function KQ() {
      return ba ??= new XS({
        load: MM => Promise.all([iM.e(228), iM.e(66)]).then((() => iM(53791))).then((rM => {
          let {
            startPageTexturePackFeed: iM
          } = rM;
          return iM(IQ, MM)
        })),
        store: Yr.f,
        aL: MM => {
          Wa.then((() => {
            (0, oi.reportTexturePackFeedLoadFailure)(MM, ua)
          }))
        }
      }), ba
    }
    const qQ = MM => KQ().follow(MM);

    function TQ() {
      return KQ().loaded()
    }
    const VQ = function(MM, rM, iM) {
        let OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => performance.now(),
          SM = 0;
        return async function(jM, aM) {
          let PM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => !0;
          const nM = ++SM,
            QM = OM() + rM,
            zM = await
          function(MM, rM) {
            let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {};
            return new Promise((OM => {
              const SM = setTimeout((() => {
                OM(null), MM.then((MM => {
                  null !== MM && (MM.joinedWithout(), iM(MM))
                }))
              }), rM);
              MM.then((MM => {
                clearTimeout(SM), OM(MM)
              }))
            }))
          }(MM(jM), rM, (MM => {
            nM === SM && PM() && aM(MM, OM() + rM).catch((MM => {
              iM("the texture pack step after the join failed", MM)
            }))
          }));
          return null === zM ? null : aM(zM, QM)
        }
      }((MM => (0, Lr.m)(MM) ? KQ().request() : KQ().forJoin()), BS.d, IQ),
      cQ = function(MM, rM) {
        let iM = !1;
        return {
          setGamePackConfirm: MM => {
            iM = null !== MM, rM(MM)
          },
          packStep: (rM, OM, SM) => MM(rM, OM, (() => iM && SM()))
        }
      }(VQ, (MM => {
        KQ().setGamePackConfirm(MM)
      }));

    function Mz(MM) {
      cQ.setGamePackConfirm(MM)
    }

    function rz() {
      if (kn || null !== mn || null === nn || null === Ln) return;
      const {
        backend: MM,
        canvas: rM,
        fallbackReason: iM,
        adapterVendor: OM
      } = Ln, SM = nn;
      nn = null;
      try {
        mn = SM({
          backend: MM,
          canvas: rM,
          fallbackReason: iM,
          adapterVendor: OM,
          joinedGame: () => kn ? null : wP,
          canSend: () => !kn && null !== wP && wP.conn === oP,
          inGame: Oz,
          shaderPackReach: () => {
            var MM, rM;
            return null !== (MM = null === (rM = OP) || void 0 === rM ? void 0 : rM.reachInJoinedGame()) && void 0 !== MM ? MM : null
          },
          DJ: () => ca,
          msaa: () => zn > 1,
          writeCmd: (MM, rM, iM) => null !== Ja && Ja(MM, rM, iM),
          takeFailedMeshJobs: () => {
            var MM, rM;
            return null !== (MM = null === (rM = Na) || void 0 === rM ? void 0 : rM.takeFailedMeshJobs()) && void 0 !== MM ? MM : 0
          },
          readLoadCounts: MM => {
            var rM, iM;
            return null !== (rM = null === (iM = ea) || void 0 === iM ? void 0 : iM.readLoadCounts(MM)) && void 0 !== rM && rM
          },
          mainStalled: (MM, rM, iM, OM) => {
            (0, oi.reportMainStall)(MM, rM, iM, OM, ua)
          }
        })
      } catch (jM) {
        console.error(`${Kj} the frame telemetry didn't start`, jM)
      }
    }

    function iz(MM, rM) {
      try {
        var iM, OM, SM;
        const jM = Mn && null !== (iM = null === (OM = ea) || void 0 === OM || null === (SM = OM.lastHeader) || void 0 === SM ? void 0 : SM.renderPending) && void 0 !== iM ? iM : 0;
        (0, EO.h)(rM, MM, Oz() && !(null !== NS), jM)
      } catch (jM) {
        (0, EO.v)(), console.error(`${Kj} the quality steps stopped`, jM)
      }
    }

    function Oz() {
      return null !== wP && bn === wP && !kn
    }

    function Sz(MM) {
      const rM = mn;
      mn = null;
      try {
        null === rM || void 0 === rM || rM.stop()
      } catch {}
      console.error(`${Kj} the frame telemetry threw: it stops`, MM)
    }

    function jz(MM) {
      var rM, iM, OM, SM;
      if ((0, fS.b)().fire(MM), "message" === MM.type) {
        if (dP++, MM.Kz === cr.Hc.ERROR && null !== gP) {
          var jM;
          const {
            text: rM,
            dropsCache: iM
          } = (0, AM.t)((new TextDecoder).decode(MM.payload));
          qP ||= iM, (null === (jM = BP) || void 0 === jM ? void 0 : jM.conn) === MM.conn && (TP = rM)
        } else if (MM.Kz === Mi.hc.ResumeComplete) {
          var aM;
          NP = MM.conn, MM.conn === YP && (YP = 0, oP = fP.has(MM.conn) ? 0 : MM.conn), null === (aM = kP) || void 0 === aM || aM.resume.onResumeComplete(MM.conn)
        }
        return
      }
      MM.phase === cr.F.Left ? yP = MM.conn : MM.phase === cr.F.Activated && (null === (rM = BP) || void 0 === rM ? void 0 : rM.conn) === MM.conn ? BP.activated = !0 : MM.phase === cr.F.Resumed ? function(MM) {
        var rM, iM;
        AP = MM;
        const OM = kP;
        if (null === OM || 0 === OM.heldConn || (null === (rM = Za) || void 0 === rM ? void 0 : rM.conn) !== MM || !Za.resume || null === DP) return;
        console.info(`${Kj} the game resumed on conn ${MM}, waiting for its InitialInfo`);
        const SM = OM.heldConn;
        OM.heldConn = 0, Za.resume = !1, DP.conn = MM, (null === (iM = WP) || void 0 === iM ? void 0 : iM.conn) === SM && (WP = {
          conn: MM,
          info: WP.info
        }), er.d.apply({
          shopInfo: null,
          _shopVersion: mr.d
        })
      }(MM.conn) : MM.phase === cr.F.Held ? function(MM) {
        var rM;
        const iM = kP,
          OM = null !== (rM = null === iM || void 0 === iM ? void 0 : iM.pendingHold) && void 0 !== rM ? rM : null;
        if (null !== iM && null !== OM && OM.conn === MM) return iM.pendingHold = null, iM.heldConn = MM, AP = 0, console.warn(`${Kj} the core holds the game, reconnecting`), void iM.resume.onDropped(OM.token);
        if (MM === AP) {
          AP = 0;
          const rM = ea;
          null === rM || rM.isStopped || (console.info(`${Kj} the core held again a resumed game the shell ended before its InitialInfo: closing it again`), ZQ(rM, "close", MM))
        }
      }(MM.conn) : MM.phase === cr.F.Closed && (null === (iM = kP) || void 0 === iM || null === (OM = iM.pendingHold) || void 0 === OM ? void 0 : OM.conn) === MM.conn && (kP.heldConn === MM.conn ? function(MM) {
        const rM = MM.heldConn,
          iM = MM.dropCode;
        pQ(MM, "refused"), console.info(`${Kj} the core didn't hold the game through its drop: it hadn't started`), queueMicrotask((() => {
          gQ(rM, !1), mQ(rM, iM, "", !0)
        }))
      }(kP) : kP.pendingHold = null), MM.phase !== cr.F.Held && MM.phase !== cr.F.Left && MM.phase !== cr.F.Closed || (fP.add(MM.conn), MM.conn === oP && (oP = 0));
      const PM = Object.keys(cr.F).find((rM => cr.F[rM] === MM.phase)),
        nM = 0 === MM.code ? "" : ` (code ${MM.code})`;
      console.info(`${Kj} conn ${MM.conn}: ${null!==PM&&void 0!==PM?PM:MM.phase}${nM}, ${dP} raw messages so far`), (null === (SM = wP) || void 0 === SM ? void 0 : SM.conn) !== MM.conn || MM.phase !== cr.F.Left && MM.phase !== cr.F.Closed || rQ(null), pP !== MM.conn || MM.phase !== cr.F.Left && MM.phase !== cr.F.Closed || (pP = null, null === wP && null === gP && tS.e.setGame(void 0));
      for (const zM of [...cP]) try {
        zM(MM.conn, MM.phase, MM.code)
      } catch (QM) {
        (0, ri.k)(QM, `${Kj} a connection listener threw`)
      }
    }
    const az = 9e4,
      Pz = 1e3;

    function nz() {
      (0, ZS.s)(), un.forget(), null === wP && null === gP || (0, qi.e)(), queueMicrotask((() => {
        try {
          bz()
        } catch (MM) {
          console.warn(`${Kj} stopping before the reload threw`, MM)
        }(0, oi.flushCrashReports)(cM.c).then(cM.k, cM.k)
      }))
    }

    function Qz() {
      const MM = ea;
      null === MM || MM.isStopped || null === Za || JP || !MM.hasPendingCommands() || Lz(MM, !1, "budget")
    }

    function zz(MM) {
      var rM;
      const iM = wP;
      MM.persisted || null === iM || (null === (rM = Za) || void 0 === rM ? void 0 : rM.conn) !== iM.conn || Za.left || iM.leave()
    }

    function Lz(MM, rM, OM) {
      let SM = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const jM = JP;
      JP = !0;
      try {
        const jM = MM.rings.net.cursor >= ja;
        jM && "all" !== OM && !document.hidden && tz("backlog", `a shown tab's net-in is ${MM.rings.net.cursor} bytes behind: one frame reads it all`);
        return function(MM, rM, OM, SM) {
          var jM, aM, PM, nM;
          if (kn) return !1;
          if (Dz(MM, Hz), kn || MM.isStopped) return !1;
          Uz() && aP("modelsIn");
          uQ(), QP = performance.now(), yP = null, lP = !1, (0, pM.K)(), null === (jM = Xa) || void 0 === jM || jM.beforeFrame(), DO(QP, MM), (0, pM.F)(QP, hz), hP = !0;
          const QM = rM && Ez();
          let zM;
          try {
            zM = MM.frame(QP, QM, OM)
          } finally {
            hP = !1
          }
          if (!zM) return !1;
          Qn.observe(null !== (aM = null === (PM = MM.lastHeader) || void 0 === PM ? void 0 : PM.chunksCancelled) && void 0 !== aM ? aM : 0);
          const LM = MM.lastFrameKind,
            mM = (0, Zr.d)(LM);
          (function(MM) {
            null !== nj && nj.afterFrame(performance.now(), MM)
          })(mM), null === (nM = Hn) || void 0 === nM || nM.frame(MM, QP, LM), rM && (wn = mM);
          mM && (0, sr.d)(QP);
          if (null !== mn) try {
            mn.frameRan(MM, QP, performance.now(), LM)
          } catch (JM) {
            Sz(JM)
          }
          "drawn" === LM && lz() && function() {
            for (const MM of [...DS]) MM()
          }();
          MM.forEachNetOut(Gz);
          const HM = Za;
          null !== yP && (null === HM || void 0 === HM ? void 0 : HM.conn) === yP && Cz(HM, xM.k);
          yz(MM),
            function(MM) {
              const rM = 0 !== (MM.headerWord(Mi.K.LoadSteps) & Mi.S.JoinPreload);
              rM !== RP && (RP = rM, (0, oi.setCrashAdPreload)(rM), (0, vi.F)())
            }(MM), rM && function(MM) {
              var rM, OM, SM;
              if (null === wP || !Ez()) return;
              const jM = MM.headerWord(Mi.K.LoadSteps);
              null === en || bn === wP && !en.frame(QP, 0 !== (jM & Mi.T.TerrainDrawn)) || (en = null);
              if (0 === (jM & Mi.S.PlayerBound)) return;
              const aM = MM.lastHeader,
                PM = !Mn || 0 === (null === aM || void 0 === aM ? void 0 : aM.renderPending);
              !yn && PM && (yn = !0, performance.mark(Oa));
              if (bn === wP) return;
              const nM = null !== (rM = null === aM || void 0 === aM ? void 0 : aM.firstView) && void 0 !== rM ? rM : cr._.NotYet;
              if (Mn && nM === cr._.NotYet) return;
              if (dn && (!0 !== (null === (OM = (0, WM.e)()) || void 0 === OM ? void 0 : OM.isSessionLive) || !PM)) return;
              bn = wP;
              const QM = wP;
              if (setTimeout((() => {
                  wP === QM && (0, hM.h)()
                }), 0), null === (SM = OP) || void 0 === SM || SM.playable(), function() {
                  clearTimeout(ka), ka = setTimeout((() => {
                    Oz() && oz((MM => {
                      let {
                        prefetchWorldgenWorker: rM
                      } = MM;
                      rM()
                    }))
                  }), ha)
                }(), dn) return;
              dn = !0, performance.mark(ia), (0, rj.p)("render") && Promise.all([iM.e(89), iM.e(55)]).then((() => iM(5058))).then((MM => {
                let {
                  renderDebugPlayable: rM
                } = MM;
                rM()
              }), (MM => {
                console.warn("The render debug topic didn't load", MM)
              }));
              const zM = Math.round(performance.now()),
                LM = MM.readViewQueuedPrograms();
              null !== LM && (0, hM.s)("wasm_view_links", zM, (0, hr.tb)(LM));
              const mM = null === Cn || null === Un ? 0 : Math.max(0, Un - Cn),
                HM = null === Cn ? 0 : Math.max(0, zM - Cn),
                JM = Mn ? MM.readFirstViewWait(mM, HM) : null;
              null !== JM && (0, hM.p)(JM);
              if (Mn && nM !== cr._.Drawn) {
                const rM = nM === cr._.HeldBackstop ? "held_draws" : "long",
                  {
                    cause: iM
                  } = Jz(MM);
                if (console.warn(`${Kj} playable at ${zM} ms on the first view's ${rM} backstop, ${iM}: it wasn't drawn whole in time`), (0, hM.s)("wasm_view_backstop", zM, `${rM}:${iM}`), "long" === rM) {
                  var dM, yM;
                  const rM = null !== (dM = null === (yM = DP) || void 0 === yM ? void 0 : yM.game) && void 0 !== dM ? dM : "";
                  en = new Ti.b((() => {
                    const {
                      cause: iM,
                      census: OM
                    } = Jz(MM);
                    (0, oi.reportFirstViewNoTerrain)(rM, iM, OM, ua), (0, Ur.q)("noTerrain")
                  }))
                }
              } else console.info(`${Kj} playable at ${zM} ms${Mn?"":" (no renderer)"}`);
              setTimeout(an, 0), (0, wr.h)().catch((MM => {
                console.error(`${Kj} item sprites didn't load, so item particles show the missing texture`, MM)
              })), yS.c.warm()
            }(MM);
          (0, di.P)(MM, {
            worldgen: fa,
            mesh: Na
          }),
          function(MM) {
            MM.forEachEvent(ZO);
            for (const rM of kO) try {
              (0, uO.d)(rM)
            } catch (JM) {
              if ((0, ri.h)(JM)) {
                MM.crashOn(di.l, JM);
                break
              }
              console.error(`${pO} an input action listener threw`, JM)
            }
            kO.length = 0
          }(MM), SM && (0, kr.c)();
          return !MM.isStopped
        }(MM, rM, "all" === OM || jM, SM)
      } finally {
        JP = jM, jM || (zP = performance.now())
      }
    }

    function mz(MM) {
      console.error(`${Kj} a frame-start listener threw`, MM)
    }

    function Hz() {
      var MM, rM, iM, OM;
      null === (MM = Ka) || void 0 === MM || MM.drain(Ja, da), null === (rM = MP) || void 0 === rM || rM.drain(Ja), null === (iM = rP) || void 0 === iM || iM.drain(performance.now()), jn(Ja), null === (OM = Va) || void 0 === OM || OM.drain()
    }

    function hz(MM) {
      console.error(`${Kj} a before-frame listener threw`, MM)
    }

    function Jz(MM) {
      const rM = (0, WM.e)(),
        iM = (0, WM.p)(),
        OM = null === rM || null === iM ? null : iM.readDrawCensus(rM.api);
      return {
        cause: (0, Ti.g)(MM.headerWord(Mi.K.LoadSteps), OM),
        census: OM
      }
    }
    const dz = {
      ChunkRequested: "wasm_chunk_requested",
      ChunkStored: "wasm_chunk_stored",
      MeshLanded: "wasm_mesh_landed",
      PlayerChunk: "wasm_player_chunk",
      TerrainDrawn: "wasm_terrain_drawn"
    };

    function yz(MM) {
      var rM;
      if (dn) return;
      if (null === Un && Ez() && (Un = performance.now()), null === wP || 0 === (MM.headerWord(Mi.K.LoadSteps) & Mi.S.PlayerBound) ? Cn = null : Cn ??= performance.now(), null === gP && null === wP) return;
      null === Un || Gn || (Gn = !0, (0, hM.s)("wasm_startup_loaded", Un));
      let iM = 0;
      null !== wP ? iM = -1 : !0 === (null === (rM = BP) || void 0 === rM ? void 0 : rM.activated) && (iM = ~Mi.T.TerrainDrawn);
      const OM = MM.headerWord(Mi.K.LoadSteps) & iM & ~En;
      if (0 === OM) return;
      En |= OM;
      const SM = performance.now();
      for (const [jM, aM] of Object.entries(dz)) 0 !== (OM & Mi.T[jM]) && (0, hM.s)(aM, SM)
    }

    function lz() {
      return Mn && Ez()
    }

    function Ez() {
      return iP && Uz()
    }

    function Uz() {
      return null === Ka || Ka.startupDone
    }

    function Gz(MM, rM) {
      const iM = Za;
      (null === iM || void 0 === iM ? void 0 : iM.conn) === MM ? Cz(iM, rM) : GP++
    }

    function Cz(MM, rM) {
      const {
        ws: iM
      } = MM;
      return iM.readyState === WebSocket.OPEN ? (iM.send(rM), !0) : iM.readyState === WebSocket.CONNECTING && MM.pendingBytes + rM.byteLength <= za ? (MM.pending.push(rM.slice()), MM.pendingBytes += rM.byteLength, !0) : (GP++, !1)
    }

    function ez() {
      return null !== wP && lz()
    }

    function bz() {
      var MM, rM, iM, OM, SM, jM, aM, PM, nM, QM, zM, LM, mM, HM, hM, JM, dM;
      kn = !0, tn.stop(), (0, Oj.endLookDebugTake)(), nj = null, RQ(), (0, pM.I)().unlockPointer(), (0, pM.H)(null), null === (MM = Ia) || void 0 === MM || MM(), Ia = null, null === (rM = (0, WM.p)()) || void 0 === rM || rM.followCursorAim(null), (0, kr.B)(), (0, WM.c)(), ga.stop(), null === (iM = hn) || void 0 === iM || iM(), hn = null, null === (OM = Jn) || void 0 === OM || OM(), Jn = null, null === (SM = mn) || void 0 === SM || SM.stop(), mn = null, (0, ci.r)(null), null === (jM = oa) || void 0 === jM || jM(), oa = null, null === (aM = fa) || void 0 === aM || aM.stop(), fa = null, null === (PM = Na) || void 0 === PM || PM.stop(), Na = null, null !== (nM = wa) && void 0 !== nM && null !== (QM = nM.textures) && void 0 !== QM && QM.assets && (0, eS.j)(null), null === (zM = wa) || void 0 === zM || zM.stop(), wa = null, ta = null;
      const yM = Aa;
      Aa = null, yM && (yM.stop(), sz(yM)), null === (LM = MP) || void 0 === LM || LM.dispose(), MP = null, null === (mM = rP) || void 0 === mM || mM.dispose(), rP = null, Ka = null, null === (HM = Ta) || void 0 === HM || HM(), Ta = null, null === (hM = Ba) || void 0 === hM || hM(), Ba = null, null !== HP && (clearTimeout(HP), HP = null), null === (JM = Xa) || void 0 === JM || JM.stop(), Xa = null, Vn(), tS.e.release(), CQ();
      const lM = Va;
      Va = null;
      try {
        null === lM || void 0 === lM || lM.dispose()
      } catch (EM) {
        console.warn(`${Kj} the sky's images didn't release`, EM)
      }(0, lS.f)(null), null === (dM = Ga) || void 0 === dM || dM.pagePreviews().endSession(null === (0, Jr.t)())
    }

    function wz(MM, rM) {
      var iM, OM;
      const SM = null !== (iM = null === (OM = Aa) || void 0 === OM ? void 0 : OM.details()) && void 0 !== iM ? iM : {},
        jM = MM.site === Tj || MM.site === Vj || MM.site === oi.RENDER_RELOAD_SITE || MM.site === cj ? MM.error instanceof WebAssembly.RuntimeError || MM.error instanceof Qi.e : !(0, Hi.p)(MM.error) && (0, di.L)(MM);
      jM && MM.error instanceof Error && (0, Jr.V)(MM.error);
      const aM = jM || MM.site === di.B ? (0, oi.readTrap)(MM.error) : null,
        PM = null !== aM && (0, Oi.f)(aM.kind, aM.refusedBytes) ? aM.refusedBytes : 0,
        nM = (0, si.j)(),
        QM = null === xa ? (0, hS.x)(function() {
          try {
            return (0, Jr.y)().buffer.byteLength
          } catch {
            return 0
          }
        }(), PM, nM) : xa.ceilingMayRefuse(PM, nM),
        zM = PM > 0 && !QM && AQ();
      var LM;
      if (zM && ((0, Gr.F)("oom"), (0, Gr.E)("decline"), Dn = !0), bz(), (0, ZS.e)()) return un.releaseNow(), console.warn(`${Kj} the session stopped at ${MM.site} as the page reloads`, MM.error), void((0, Hi.p)(MM.error) || (null === (LM = MM.header) || void 0 === LM ? void 0 : LM.lastError) === cr.H.CoreBusy || (0, oi.reportStoppedCore)(MM, rM, aM, {
        memoryDetails: SM,
        declined: zM
      }));
      (0, oi.showCrash)(MM, rM, aM, {
        memoryDetails: SM,
        declined: zM
      })
    }

    function tz(MM, rM) {
      const iM = performance.now();
      return !(iM - EP[MM] < La) && (EP[MM] = iM, console.warn(`${Kj} ${rM}`), !0)
    }

    function gz(MM) {
      const {
        input: rM,
        net: iM,
        worker: OM
      } = MM.rings, SM = MM.optionsDropped, jM = rM.dropped + SM + iM.dropped + OM.dropped + GP;
      jM !== UP && tz("dropped", `${jM} records dropped so far (input ${rM.dropped}, options ${SM}, net ${iM.dropped}, worker ${OM.dropped}, net-out ${GP})`) && (UP = jM)
    }

    function uz() {
      var MM, rM;
      const iM = (0, xi.b)();
      if (null === iM) return null;
      const OM = (0, Ki.i)(iM);
      return {
        ...OM,
        horizontal: Math.min(OM.horizontal, null !== (MM = null === (rM = Aa) || void 0 === rM ? void 0 : rM.shedDistanceInUse()) && void 0 !== MM ? MM : 1 / 0)
      }
    }

    function Rz(MM) {
      var rM, iM;
      return {
        samples: Mn ? zn : null,
        sunShadows: MM,
        renderDistance: null !== (rM = null === (iM = uz()) || void 0 === iM ? void 0 : iM.horizontal) && void 0 !== rM ? rM : null
      }
    }

    function pz(MM) {
      uP = MM, (0, vi.F)()
    }

    function Wz() {
      var MM, rM, iM;
      const OM = uz();
      return {
        ...null === (MM = Aa) || void 0 === MM ? void 0 : MM.pageKillSnapshot(),
        renderDistance: null !== (rM = null === OM || void 0 === OM ? void 0 : OM.horizontal) && void 0 !== rM ? rM : null,
        renderDistanceVertical: null !== (iM = null === OM || void 0 === OM ? void 0 : OM.vertical) && void 0 !== iM ? iM : null,
        chunkCap: va,
        budgetBasis: Fa,
        renderBackend: (0, ZS.G)(),
        adPreload: RP,
        ...(0, Fi.e)(uP)
      }
    }

    function sz(MM) {
      var rM;
      console.info(`${Kj} wasm memory at the session's end`, MM.details());
      const {
        wasmMainMiB: iM,
        wasmWorkersMiB: OM,
        peakStoredChunks: SM
      } = MM.pageKillSnapshot(), jM = navigator.deviceMemory;
      (0, yi.logClientMeasurement)("wasm_memory_end", {
        wasmMainMiB: iM,
        wasmWorkersMiB: OM,
        peakStoredChunks: SM
      }, {
        client: "wasm",
        renderBackend: null !== (rM = (0, ZS.G)()) && void 0 !== rM ? rM : "none",
        os: (0, Bi.getOperatingSystem)(),
        deviceMemory: String(null !== jM && void 0 !== jM ? jM : "unreported")
      })
    }

    function Dz(MM, rM) {
      if (!MM.isStopped) try {
        rM()
      } catch (iM) {
        MM.crash(di.D, iM)
      }
    }

    function kz() {
      return Ya ??= iM.e(83).then((() => iM(53795))).catch((MM => {
        throw Ya = null, MM
      })), Ya
    }
    async function Zz() {
      const {
        createWorldgenWorker: MM,
        worldgenWorkerReady: rM
      } = await kz();
      return await rM(), MM
    }

    function oz(MM) {
      var rM;
      null === (rM = Ya) || void 0 === rM || rM.then(MM, (() => {}))
    }

    function fz() {
      return performance.now() - Math.max(zP, LP) >= ma
    }

    function Yz(MM) {
      const rM = document.hidden || mP ? "all" : "budget";
      mP = !0;
      const iM = Lz(MM, !1, rM);
      var OM;
      iM && (gz(MM), null === (OM = Aa) || void 0 === OM || OM.afterFrame());
      return iM
    }

    function Nz(MM) {
      MM.isStopped || 0 === MM.rings.net.cursor || fz() && !Yz(MM) || MM.rings.net.cursor > 0 && performance.now() - LP >= ma / 2 && function(MM) {
        HP ??= setTimeout((() => {
          HP = null, Nz(MM)
        }), ma)
      }(MM)
    }

    function Az(MM, rM) {
      return async function(MM, rM, iM) {
        let {
          stop: OM,
          stillWanted: SM,
          beforeReload: jM
        } = iM;
        const aM = await (0, VO.k)(MM, {
          stillWanted: SM,
          beforeReload: async () => {
            OM(), await Promise.all([(0, oi.flushCrashReports)(cM.c), null === jM || void 0 === jM ? void 0 : jM()])
          },
          reload: cM.k
        });
        return aM || rM(), aM
      }(MM, rM, {
        ...arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        stop: bz
      })
    }
    let xz = !1;

    function vz() {
      return xz = !0, async function(MM, rM, OM) {
        const {
          gamePackSource: SM
        } = await iM.e(299).then((() => iM(42165)));
        await cQ.packStep(MM, ((iM, OM) => iM.packForGame(MM, SM(rM), OM)), OM)
      }(...arguments)
    }

    function Fz(MM) {
      ! function(MM, rM) {
        MM((MM => {
          null === MM || void 0 === MM || MM.subscribe((MM => {
            let {
              pack: iM,
              gameSource: OM
            } = MM;
            rM(null === OM || null === iM ? null : {
              pack: iM,
              source: "" === OM ? null : OM
            })
          }))
        }))
      }(qQ, MM)
    }
    let Bz = !1,
      Xz = null,
      Iz = !1,
      Kz = !1;

    function qz() {
      var MM;
      Bz || (Bz = !0, vn("play", TM), (0, mM.o)(new nL), PM.gameBridge.attach(NM), iL().catch((() => {})), (0, WM.r)((MM => {
        Qr(MM.setTextHost)
      })), MM = cz, KP.add(MM), function(MM) {
        for (const rM of SP) MM(rM);
        jP.add(MM)
      }((MM => {
        Vz(Tz[MM])
      })))
    }
    const Tz = {
      booted: jM.n.INITIALISE_NOA,
      texturesIn: jM.n.REGISTRATION,
      modelsIn: jM.n.SETUP_LIFEFORMS
    };

    function Vz(MM) {
      nM.i.Tz("matchmakeAndPlayStepCompleted", {
        step: MM,
        totalSubSteps: 1
      })
    }

    function cz(MM) {
      if (!Iz) return;
      const {
        gameNameWithVariation: rM,
        lobbyName: iM
      } = (0, mM.e)();
      if (MM.code === OM.d.serverUpdating.code) return (new nL).leaveLive(), void rL(rM, iM);
      nM.i.Tz("unwantedLeftGame", {
        reason: ML(MM),
        requiresRefresh: MM.requiresRefresh,
        canReconnect: null !== MM.reconnect,
        automaticallyReconnect: MM.reconnecting,
        canPlayAgain: MM.canPlayAgain,
        gameNameWithVariation: rM,
        lobbyName: iM
      }), (new nL).leaveLive()
    }

    function ML(MM) {
      return null !== MM.reasonKey ? {
        translationKey: MM.reasonKey
      } : "gameOrPluginKick" === MM.name ? MM.reason : `You have disconnected from the server.\n${MM.reason}`
    }

    function rL(MM, rM) {
      var OM;
      OM = (0, QM.G)(MM, rM), Promise.resolve().then((() => iM(1591))).then((MM => {
        let {
          navigatePreserveSearch: rM
        } = MM;
        rM(OM)
      })).catch((MM => {
        console.warn("[bloxd-wasm-client] the page's router didn't navigate: loading the page instead", MM), (0, cM.f)(OM)
      }))
    }

    function iL() {
      return Xz ??= Promise.all([iM.e(84), iM.e(87), iM.e(85), iM.e(86), iM.e(103), iM.e(100), iM.e(296), iM.e(205), iM.e(246), iM.e(272), iM.e(298), iM.e(53)]).then((() => iM(42102))).then((MM => {
        try {
          MM.attachPlayGameSources()
        } catch (rM) {
          throw console.error("[bloxd-wasm-client] the play sources did not attach", rM),
            function(MM) {
              Wa.then((rM => {
                null === rM || rM.isStopped || kn ? console.warn(`${Kj} the play sources threw as they attached, after the client stopped`, MM) : wz({
                  site: cj,
                  error: MM,
                  header: null
                }, ua)
              }))
            }(rM), rM
        }
      }), (MM => {
        throw Xz = null, new WM.b(MM)
      })), Xz
    }
    async function OL(MM, rM) {
      qz(), xz = !0, Iz = !0;
      let iM = {
          place: MM.place,
          matchedAt: MM.matchedAt
        },
        aM = MM.place.gameNameWithVariation;
      const PM = (0, LM.e)();
      let nM = null;
      const QM = await In({
        matchmake: async () => {
          let rM = iM;
          if (iM = null, null === rM) {
            const iM = await MM.rematch();
            if (iM.isError()) throw nM = iM.asError().forward(), new Error(iM.asError().message);
            rM = {
              place: iM.getValue(),
              matchedAt: performance.now()
            }
          }
          aM = rM.place.gameNameWithVariation;
          return {
            target: await (0, FM.d)(MM.userContext, rM.place, TQ(), PM),
            matchedAt: rM.matchedAt,
            freshMs: FM.b
          }
        },
        pageReady: iL,
        onFailure: (MM, rM) => {
          null === nM && function(MM, rM) {
            (0, oi.reportPageJoinFailure)(MM, ua, rM)
          }(MM, {
            sinceJoinStartMs: rM,
            game: aM
          })
        },
        rejoin: () => () => {},
        invalidateTrafficCode: () => MM.userContext.invalidateTrafficCode(),
        signal: rM
      });
      switch (QM.kind) {
        case "joined":
          if (PM) {
            setTimeout((() => {
              CM.ready()
            }), 0);
            const {
              game: MM
            } = QM;
            (0, LM.o)((() => {
              MM.endJoinAd() && ((0, hM.l)(), CM.adEnded())
            }))
          }
          return Kz || (Kz = !0, (0, bM.b)()), Iz ? (Vz(jM.n.CONNECT_TO_GAME_SERVER), Vz(jM.n.SHADER_PACK), function() {
            var MM, rM;
            return null !== (MM = null === (rM = OP) || void 0 === rM ? void 0 : rM.runsInJoinedGame()) && void 0 !== MM && MM
          }() && (0, eM.e)(MM.userContext, aM).catch((MM => {
            console.error("Failed to report the shader pack session", MM)
          })), function() {
            const MM = function() {
              var MM, rM;
              return null !== (MM = null === (rM = OP) || void 0 === rM ? void 0 : rM.couldntRunInJoinedGame()) && void 0 !== MM ? MM : null
            }();
            null !== MM && (0, eM.d)(MM)
          }(), SM.b.value(void 0)) : PL("The server ended the game as it joined");
        case "failed":
          if (!QM.reloading) {
            if (null !== nM) return nM;
            if ((QM.error instanceof xM.n || QM.error instanceof xM.d) && QM.error.code === OM.d.serverUpdating.code) {
              if (rM.aborted) return PL("Left the game while it loaded");
              const {
                gameNameWithVariation: MM,
                lobbyName: iM
              } = (0, mM.e)();
              return rL(MM, iM), PL("The server is updating")
            }
            return QM.error instanceof VM.e ? SM.b.errorWithCode(QM.error.messageKey, jM.n.SHADER_PACK, {
              severity: "medium"
            }) : SM.b.errorWithCode(function(MM) {
              if (MM instanceof xM.w || MM instanceof uM.i) return MM.message;
              if (SL(MM)) return (0, AM.p)(MM.code, MM.serverText);
              return AM.j
            }(QM.error), jM.n.CONNECT_TO_GAME_SERVER, {
              error: jL(QM.error) ? QM.error : void 0,
              severity: aL(QM.error),
              gameServerUnreachable: (0, vM.b)(QM.error),
              joinFailure: (0, vM.h)(QM.error),
              rematch: (0, tM.e)(QM.error),
              gameRefused: (0, gM.e)(QM.error)
            })
          }
          return PL("Reloading into the new build");
        case "stopped":
          return PL("The game client stopped, and shows why");
        case "Ti":
          return PL("Left the game while it loaded")
      }
    }

    function SL(MM) {
      return MM instanceof xM.n || MM instanceof xM.d && "attach" !== MM.stage
    }

    function jL(MM) {
      return !(MM instanceof xM.w) && !SL(MM) && void 0 === (0, vM.b)(MM)
    }

    function aL(MM) {
      return SL(MM) ? MM instanceof xM.d && (0, AM.m)(MM.code).requiresRefresh ? "medium" : "low" : jL(MM) || MM instanceof xM.w ? "medium" : "low"
    }

    function PL(MM) {
      return SM.b.errorWithCode(MM, jM.n.CONNECT_TO_GAME_SERVER, {
        severity: "low",
        Ti: !0
      })
    }
    class nL {
      leave(MM) {
        if ((0, RM.d)()) {
          var rM, iM;
          if ((0, aM.d)()) return;
          (0, HM.e)(!0 === (null === (rM = (0, RM.n)()) || void 0 === rM || null === (iM = rM.currentViewer) || void 0 === iM ? void 0 : iM.unsavedChanges), MM)
        } else this.leaveLive()
      }
      leaveLive() {
        var MM;
        xz && (null === (MM = TQ()) || void 0 === MM || MM.endGamePack());
        if (!Iz) return;
        Iz = !1, (0, wM.e)();
        try {
          var rM;
          null === (rM = (0, WM.p)()) || void 0 === rM || rM.clearWasmCameraScreen()
        } catch (OM) {
          console.error("[bloxd-wasm-client] the camera screen didn't clear", OM)
        }
        const {
          gameNameWithVariation: iM
        } = (0, mM.e)();
        try {
          SQ()
        } finally {
          (0, mM.p)({
            websocketUrl: null
          }), nM.i.Tz("leaveGame", {
            gameNameWithVariation: iM
          }), (0, zM.M)()
        }
      }
      isReplay() {
        return (0, RM.d)()
      }
    }
  },
  42035: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => SM,
      h: () => OM,
      i: () => PM,
      j: () => aM
    });
    const OM = 12e4,
      SM = 3e4,
      jM = {
        hidden: () => "undefined" !== typeof document && document.hidden,
        listen: MM => "undefined" === typeof document ? () => {} : (document.addEventListener("visibilitychange", MM), () => {
          document.removeEventListener("visibilitychange", MM)
        })
      };

    function aM(MM) {
      return `it sent no start within ${Math.round(MM)} ms`
    }
    class PM {
      constructor(MM, rM) {
        let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => performance.now(),
          OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : jM;
        this.timeoutMs = MM, this.onTimeout = rM, this.now = iM, this.visibility = OM, this.timer = null, this.counted = 0, this.step = null, this.unlisten = void 0, this.unlisten = OM.listen((() => {
          this.onVisibility()
        })), OM.hidden() || this.next()
      }
      cancel() {
        this.pause(), this.unlisten()
      }
      onVisibility() {
        this.visibility.hidden() ? (this.counted += this.credit(), this.pause()) : null === this.timer && this.next()
      }
      credit() {
        const MM = this.step;
        return null === MM ? 0 : Math.min(this.now() - MM.at, MM.ms)
      }
      pause() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null), this.step = null
      }
      next() {
        const MM = this.timeoutMs - this.counted;
        if (MM <= 0) return void this.arm(1e3, (() => {
          this.cancel(), this.onTimeout(this.counted)
        }));
        const rM = Math.min(MM, 5e3);
        this.step = {
          at: this.now(),
          ms: rM
        }, this.arm(rM, (() => {
          this.counted += this.credit(), this.step = null, this.next()
        }))
      }
      arm(MM, rM) {
        this.timer = setTimeout((() => {
          this.timer = null, rM()
        }), MM)
      }
    }
  },
  40769: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => PM
    });
    var OM = iM(332),
      SM = iM(1073);
    const jM = new Set(["bingo", "buildAFactory2", "classic", "greenville", "testGym"]),
      aM = new Set(["creativeFlat", "skyGrid"]);

    function PM(MM) {
      const rM = (0, OM.Mb)(MM);
      return "greenville" === rM ? !(0, OM.Jb)(MM) : "classic" !== rM ? jM.has(rM) : !(0, SM.m)(MM) && !aM.has((0, OM.Jb)(MM))
    }
  },
  38721: (MM, rM, iM) => {
    function OM(MM) {
      return "string" !== typeof MM || 2 !== MM.length && ":" !== MM[2] ? null : MM[0] + MM[1]
    }
    iM.d(rM, {
      C: () => JM,
      d: () => dM,
      h: () => CM,
      j: () => GM,
      n: () => eM,
      o: () => PM,
      r: () => aM,
      v: () => jM,
      x: () => nM,
      z: () => yM
    });
    const SM = ["op:ytInitialPlayerResponse.adPlacements", "op:ytInitialPlayerResponse.playerAds", "op:ytInitialPlayerResponse.adSlots", "op:playerResponse.adPlacements", "op:playerResponse.playerAds", "op:playerResponse.adSlots"];

    function jM(MM) {
      if (function(MM) {
          for (let rM = 0; rM < SM.length; rM++)
            if (MM === SM[rM]) return !0;
          return !1
        }(MM)) return !1;
      const rM = OM(MM);
      return "op" === rM || "ep" === rM || "wi" === rM || "pp" === rM || "fp:call" === MM || "fp:t" === MM
    }

    function aM(MM) {
      return "fp" === OM(MM) && !jM(MM)
    }

    function PM(MM) {
      if ("string" !== typeof MM) return !1;
      return "o" === MM[0] && "p" === MM[1] && (2 === MM.length || ":" === MM[2]) || "fp:call" === MM || "2" === MM || "t" === MM || "a" === MM
    }

    function nM(MM, rM) {
      return `~${function(MM){return MM.length<2?MM:":"===MM[1]?MM[0]:MM[0]+MM[1]}(rM)}~${MM}`
    }
    const QM = 200;

    function zM(MM) {
      let rM = MM.length - 1;
      for (let iM = 0; iM < 2; iM++) {
        const iM = rM;
        for (; rM >= 0 && MM[rM] >= "0" && MM[rM] <= "9";) rM--;
        if (rM < 0 || rM === iM || ":" !== MM[rM]) return -1;
        rM--
      }
      return rM + 1
    }

    function LM(MM) {
      return "unknown" === MM || zM(MM) >= 0
    }

    function mM(MM, rM) {
      return MM[rM] >= "\ud800" && MM[rM] <= "\udbff" && rM + 1 < MM.length && MM[rM + 1] >= "\udc00" && MM[rM + 1] <= "\udfff" ? 2 : 1
    }

    function HM(MM, rM, iM) {
      return 2 === iM ? 4 : MM[rM] <= "\x7f" ? 1 : MM[rM] <= "\u07ff" ? 2 : 3
    }

    function hM(MM, rM, iM) {
      let OM = 0;
      for (; OM < rM;) {
        const rM = mM(MM, OM),
          SM = HM(MM, OM, rM);
        if (SM > iM) break;
        iM -= SM, OM += rM
      }
      return OM
    }

    function JM(MM) {
      let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1 / 0;
      if ("string" !== typeof MM || MM.length > QM || !LM(MM)) return "t";
      let iM = 2;
      for (let PM = 0; PM < MM.length;) {
        const rM = mM(MM, PM);
        iM += HM(MM, PM, rM), PM += rM
      }
      if (iM <= rM) return `t ${MM}`;
      const OM = zM(MM),
        SM = rM - 2 - (MM.length - OM);
      if (SM < 0) return "t";
      const jM = hM(MM, OM, SM);
      let aM = "t ";
      for (let PM = 0; PM < jM; PM++) aM += MM[PM];
      for (let PM = OM; PM < MM.length; PM++) aM += MM[PM];
      return aM
    }
    const dM = 62;

    function yM(MM) {
      let rM = "so:";
      const iM = hM(MM, MM.length, dM - rM.length);
      for (let OM = 0; OM < iM; OM++) rM += MM[OM];
      return rM
    }
    const lM = "BABYLON ",
      EM = "DECODE ",
      UM = "BABYLON@ ";

    function GM(MM) {
      return yM(lM + MM)
    }

    function CM(MM, rM) {
      return yM(UM + MM + " " + rM)
    }

    function eM(MM) {
      return yM(EM + MM)
    }
  },
  41930: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => OM
    });
    const OM = {
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
  38954: MM => {
    MM.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAKUlEQVQYGWM8CwQMeAATHjmw1JBQwAh06v+LFy8yvH//noGXl/ccuq8A/vQKd00yOdIAAAAASUVORK5CYII="
  },
  38941: MM => {
    MM.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAALUlEQVQYGWM8CwQMeAATHjmw1JBQwAh06v8DBw4wCAoKMnBzczN8/PjxHLLPAORwCnfkvOdNAAAAAElFTkSuQmCC"
  },
  38961: MM => {
    MM.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAKUlEQVQYGWM8CwQMeAATHjmw1JBQwAh06v8DBw4wCAoKMvz58+ccuq8A8vQKd2AxC9MAAAAASUVORK5CYII="
  },
  38935: MM => {
    MM.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAANUlEQVQYGWM8CwQMeAATHjmw1JBQAHLp/wMHDvy/ePHi/4CAgP937tz5Ly6u+5/P3uw/KAgAgjwWhHm22JoAAAAASUVORK5CYII="
  },
  38950: MM => {
    MM.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAKUlEQVQYGWM8CwQMeAATHjmw1JBQwAh06v8DBw4wCAoKMvz58+ccuq8A8vQKd2AxC9MAAAAASUVORK5CYII="
  },
  39771: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => jM
    });
    var OM = iM(3185);
    const SM = ["none", "idle", "now"];

    function jM() {
      const MM = () => (0, OM.E)();
      return {
        memoryBytes: () => (0, OM.y)().buffer.byteLength,
        reserveUpFront: rM => MM().RL(rM),
        reserveAhead: rM => MM().SL(rM),
        setCeiling: rM => {
          MM().pL(rM)
        },
        lowWater: () => SM[MM().XQ()] ?? "none",
        stats: () => function(MM) {
          const rM = new Uint32Array((0, OM.y)().buffer, MM, 17),
            iM = MM => rM[MM] ?? 0,
            SM = MM => ({
              upFront: iM(MM),
              ahead: iM(MM + 1),
              onDemandInFrame: iM(MM + 2),
              onDemand: iM(MM + 3)
            });
          return {
            memoryBytes: iM(0),
            initialBytes: iM(1),
            liveBytes: iM(2),
            peakLiveBytes: iM(3),
            headroomBytes: iM(4),
            unusedBytes: iM(5),
            ceilingBytes: iM(6),
            reservesRefused: iM(7),
            grows: SM(8),
            grownBytes: SM(12),
            allocationsRefused: iM(16)
          }
        }(MM().WL()),
        takeBallast: () => MM().sL(),
        takePressure: () => MM().DL()
      }
    }
  },
  5442: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => PM,
      f: () => aM,
      g: () => OM,
      j: () => JM,
      k: () => LM,
      o: () => SM,
      q: () => jM,
      t: () => QM,
      w: () => zM,
      z: () => mM
    });
    const OM = 5;

    function SM(MM) {
      return MM === OM
    }

    function jM(MM) {
      return [...MM.features]
    }
    const aM = 262144,
      PM = 256,
      nM = 256;

    function QM(MM) {
      if ("object" !== typeof MM || null === MM || Array.isArray(MM)) return "The pack has no files.";
      const rM = [];
      for (const [iM, OM] of Object.entries(MM)) {
        if ("string" !== typeof OM) return `${iM} isn't text.`;
        rM.push({
          path: iM,
          source: OM
        })
      }
      return rM.sort(((MM, rM) => LM(MM.path, rM.path))),
        function(MM) {
          if (0 === MM.length) return "The pack has no .wgsl files.";
          if (MM.length > PM) return `The pack has more than ${PM} .wgsl files.`;
          const rM = new Set;
          for (const {
              path: iM
            }
            of MM) {
            const MM = HM(iM);
            if (null !== MM) return MM;
            if (rM.has(iM)) return `The pack has two files at ${iM}.`;
            rM.add(iM)
          }
          return mM(MM) > aM ? `The pack's .wgsl files are over ${aM/1024} KB in total.` : null
        }(rM) ?? rM
    }

    function zM(MM) {
      const rM = {};
      for (const iM of MM) rM[iM.path] = iM.source;
      return rM
    }

    function LM(MM, rM) {
      return MM < rM ? -1 : MM > rM ? 1 : 0
    }

    function mM(MM) {
      const rM = new TextEncoder;
      let iM = 0;
      for (const {
          source: OM
        }
        of MM) iM += rM.encode(OM).byteLength;
      return iM
    }

    function HM(MM) {
      if (!MM.toLowerCase().endsWith(".wgsl")) return `${MM} isn't a .wgsl file.`;
      if (MM.length > nM) return `A file path is over ${nM} characters.`;
      if (MM.includes("\\") || /[\u0000-\u001f]/.test(MM)) return `${MM} isn't a valid file path.`;
      return MM.split("/").some((MM => "" === MM || "." === MM || ".." === MM)) ? `${MM} isn't a valid file path.` : null
    }
    const hM = /^(.*)\[rot\[([1-4])$/;

    function JM(MM, rM) {
      let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
      const OM = new Map;
      rM.forEach(((MM, rM) => {
        let {
          numAnimStates: iM,
          animStartIdx: SM
        } = MM;
        for (let jM = 1; jM < iM; jM++) OM.set(SM + jM - 1, rM)
      }));
      const SM = Object.entries(MM),
        jM = new Map;
      for (const [JM, dM] of SM) {
        const MM = hM.exec(JM);
        "1" === MM?.[2] && jM.set(MM[1], dM + 1)
      }
      const aM = MM => {
          const rM = hM.exec(MM);
          return rM && jM.has(rM[1]) ? {
            root: rM[1],
            rotation: Number(rM[2]) - 1
          } : null
        },
        PM = new Set(SM.map((MM => {
          let [rM] = MM;
          return aM(rM)?.root ?? rM
        }))),
        nM = (MM, iM) => {
          const OM = MM.replace(/_?0$/, "");
          return (rM[iM]?.numAnimStates ?? 0) > 1 && !PM.has(OM) ? OM : MM
        },
        QM = new Map;
      for (const [hM, JM] of SM) QM.set(JM, nM(aM(hM)?.root ?? hM, JM));
      const zM = SM.reduce(((MM, rM) => {
          let [, iM] = rM;
          return Math.max(MM, iM + 1)
        }), 0),
        LM = Array.from({
          length: zM
        }, ((MM, rM) => ({
          id: rM + 1,
          rotation: 0
        }))),
        mM = new Map,
        HM = new Map;
      for (const [hM, JM] of SM) {
        const MM = aM(hM),
          rM = OM.get(JM);
        if (void 0 !== rM) {
          const iM = QM.get(rM);
          HM.set(hM, {
            name: hM,
            texture: iM,
            kind: "frame"
          }), MM && !HM.has(MM.root) && HM.set(MM.root, {
            name: MM.root,
            texture: iM,
            kind: "frame"
          });
          continue
        }
        const iM = QM.get(JM),
          SM = MM?.root ?? hM;
        if (iM !== SM && HM.set(SM, {
            name: SM,
            texture: iM,
            kind: "frame"
          }), MM) {
          const rM = jM.get(MM.root);
          LM[JM] = {
            id: rM,
            rotation: MM.rotation
          }, mM.set(iM, rM), HM.set(hM, {
            name: hM,
            texture: iM,
            kind: "rotation"
          })
        } else mM.set(iM, JM + 1)
      }
      for (const hM of mM.keys()) HM.delete(hM);
      for (const [hM, JM] of iM) {
        const MM = mM.get(JM);
        void 0 === MM || mM.has(hM) || (mM.set(hM, MM), HM.delete(hM))
      }
      return {
        named: [...mM].sort(((MM, rM) => {
          let [iM] = MM, [OM] = rM;
          return iM < OM ? -1 : iM > OM ? 1 : 0
        })).map((MM => {
          let [rM, iM] = MM;
          return {
            name: rM,
            id: iM
          }
        })),
        aliases: [...HM.values()],
        layers: LM
      }
    }
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);