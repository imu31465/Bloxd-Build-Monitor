export const id = 64;
export const ids = [64, 117, 118, 138];
export const modules = {
  39850: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => Ot,
      h: () => qt
    });
    const Ot = "The world isn't loaded, so no blocks can be seen.",
      qt = "The world isn't loaded, so nothing in it can be seen."
  },
  4842: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => Xt
    });
    var Ot = Vt(26),
      qt = Vt(31),
      Dt = Vt(1387),
      mt = Vt(2902);
    const dt = 3e4,
      jt = 1e3;

    function Ht() {
      return "visible" === document.visibilityState && "inGame" === Ot.b.get("gameState") && (0, Dt.r)()
    }

    function Xt(tt, et) {
      (0, mt.x)() || function(tt, et, Vt) {
        let Ot = 0;
        const qt = setInterval((() => {
          et() && (Ot += jt, Ot >= tt && (clearInterval(qt), Vt()))
        }), jt)
      }(dt, Ht, (() => {
        et().then((() => {
          tt(`saved for the player after ${dt/1e3} s of play`), (0, mt.J)(), qt.j.sw("chat", {
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
  34232: (tt, et, Vt) => {
    function Ot(tt, et) {
      return 0 === tt.length ? 0 : tt[Math.min(tt.length - 1, Math.floor(et * tt.length))]
    }

    function qt(tt) {
      return tt.toFixed(1)
    }
    Vt.d(et, {
      d: () => qt,
      g: () => Ot
    })
  },
  38200: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => Ht,
      f: () => Xt,
      g: () => Jt,
      j: () => bt,
      n: () => Mt
    });
    var Ot = Vt(4842),
      qt = Vt(34232),
      Dt = Vt(2902);
    const mt = 20,
      dt = ["totalMs", "slotMs", "workerMs", "applyMs", "ahead", "inFlight", "uQ", "jobMs"];

    function jt(tt) {
      return [...tt].sort(((tt, et) => tt - et))
    }
    const Ht = [];

    function Xt(tt, et, Vt) {
      return `${tt},${et},${Vt}`
    }
    class Qt {
      constructor() {
        this.pending = new Map, this.jobs = new Map, this.edits = [], this.nextEdit = 0, this.reported = 0, this.windowStart = performance.now(), this.frames = 0, this.lastFrameAt = 0, this.maxFrameMs = 0, this.jobsSent = 0, this.maxAhead = 0, this.maxCapacity = 0, this.roundTrips = [], this.windowEdits = [], this.outliers = 0, this.gaveUp = 0
      }
      edit(tt, et) {
        var Vt;
        const Ot = null !== (Vt = this.pending.get(tt)) && void 0 !== Vt ? Vt : [];
        Ot.push({
          editAt: et,
          meshJobId: 0
        }), this.pending.set(tt, Ot)
      }
      frame(tt) {
        this.lastFrameAt > 0 && (this.maxFrameMs = Math.max(this.maxFrameMs, tt - this.lastFrameAt)), this.lastFrameAt = tt, this.frames++, tt - this.windowStart >= 1e3 && this.summarise(tt)
      }
      sent(tt, et, Vt, Ot, qt, Dt, mt) {
        this.jobs.set(et, {
          sentAt: mt,
          receivedAt: 0,
          ahead: Vt,
          inFlight: Ot,
          uQ: qt,
          jobMs: 0
        }), this.jobsSent++, this.maxAhead = Math.max(this.maxAhead, Vt), this.maxCapacity = Math.max(this.maxCapacity, qt);
        for (const jt of null !== (dt = this.pending.get(tt)) && void 0 !== dt ? dt : []) {
          var dt;
          Dt.includes(jt.meshJobId) || (jt.meshJobId = et)
        }
      }
      received(tt, et, Vt) {
        const Ot = this.jobs.get(tt);
        void 0 !== Ot && (this.roundTrips.push(Vt - Ot.sentAt), Ot.receivedAt = Vt, Ot.jobMs = et)
      }
      failed(tt) {
        this.jobs.delete(tt)
      }
      reassign(tt, et, Vt) {
        this.jobs.delete(et);
        for (const qt of null !== (Ot = this.pending.get(tt)) && void 0 !== Ot ? Ot : []) {
          var Ot;
          qt.meshJobId === et && (qt.meshJobId = Vt)
        }
      }
      applied(tt, et, Vt) {
        const Ot = this.jobs.get(et);
        this.jobs.delete(et), void 0 !== Ot && this.show(tt, Ot, Vt, (tt => tt.meshJobId === et))
      }
      emptied(tt, et) {
        const Vt = {
          sentAt: et,
          receivedAt: et,
          ahead: 0,
          inFlight: 0,
          uQ: 0,
          jobMs: 0
        };
        this.show(tt, Vt, et, (() => !0))
      }
      show(tt, et, Vt, Ot) {
        const qt = this.pending.get(tt);
        if (!qt) return;
        const Dt = qt.filter((qt => !Ot(qt) || (this.record(tt, qt.editAt, et, Vt), !1)));
        Dt.length > 0 ? this.pending.set(tt, Dt) : this.pending.delete(tt)
      }
      iE(tt) {
        this.reported += tt, this === Et && this.reported >= mt && null !== ft && (ft(), ft = null)
      }
      record(tt, et, Vt, Ot) {
        const qt = {
          totalMs: Ot - et,
          slotMs: Vt.sentAt - et,
          workerMs: Vt.receivedAt - Vt.sentAt,
          applyMs: Ot - Vt.receivedAt,
          ahead: Vt.ahead,
          inFlight: Vt.inFlight,
          uQ: Vt.uQ,
          jobMs: Vt.jobMs
        };
        if (this.edits[this.nextEdit] = qt, this.nextEdit = (this.nextEdit + 1) % 500, this.windowEdits.push(qt.totalMs), this.iE(1), qt.totalMs < 100 || ++this.outliers > 5) return;
        const mt = tt => Math.round(tt);
        (0, Dt.n)("remesh", `slow edit (${tt}) shown in ${mt(qt.totalMs)} ms: slot ${mt(qt.slotMs)}, worker ${mt(qt.workerMs)} (${qt.ahead} ahead, ${qt.inFlight}/${qt.uQ} in flight; job ${mt(qt.jobMs)}), apply ${mt(qt.applyMs)}`)
      }
      summarise(tt) {
        const et = (tt - this.windowStart) / 1e3;
        for (const [Vt, Ot] of this.pending) {
          const et = Ot.filter((et => tt - et.editAt <= 1e4));
          this.gaveUp += Ot.length - et.length, this.iE(Ot.length - et.length), et.length > 0 ? this.pending.set(Vt, et) : this.pending.delete(Vt)
        }
        for (const [Vt, Ot] of this.jobs) tt - Ot.sentAt > (Ot.receivedAt > 0 ? 1e4 : 6e4) && this.jobs.delete(Vt);
        if (this.jobsSent > 0 || this.roundTrips.length > 0 || this.windowEdits.length > 0 || this.gaveUp > 0) {
          const tt = jt(this.roundTrips),
            Vt = jt(this.windowEdits),
            Ot = Math.max(0, this.outliers - 5);
          (0, Dt.n)("remesh", `${Math.round(this.frames/et)} fps (longest ${Math.round(this.maxFrameMs)} ms) | ${this.jobsSent} jobs sent, up to ${this.maxAhead} ahead on a worker, capacity ${this.maxCapacity} | round trip p50 ${Math.round((0,qt.g)(tt,.5))} max ${Math.round((0,qt.g)(tt,1))} ms | ${Vt.length} edits shown, p50 ${Math.round((0,qt.g)(Vt,.5))} max ${Math.round((0,qt.g)(Vt,1))} ms${Ot>0?`, ${Ot} more slow`:""}${this.gaveUp>0?`, ${this.gaveUp} never shown`:""}`)
        }
        this.windowStart = tt, this.frames = 0, this.maxFrameMs = 0, this.jobsSent = 0, this.maxAhead = 0, this.maxCapacity = 0, this.roundTrips = [], this.windowEdits = [], this.outliers = 0, this.gaveUp = 0
      }
      stats() {
        const tt = dt.map((tt => {
          const et = jt(this.edits.map((et => et[tt])));
          return `${tt}: p50 ${Math.round((0,qt.g)(et,.5))} p90 ${Math.round((0,qt.g)(et,.9))} max ${Math.round((0,qt.g)(et,1))}`
        }));
        return [`${this.edits.length} edits`, ...tt].join("\n")
      }
      dump() {
        const tt = this.edits.map((tt => dt.map((et => Math.round(10 * tt[et]) / 10)).join(",")));
        return [this.stats(), dt.join(","), ...tt].join("\n")
      }
    }
    class lt {
      constructor(tt, et) {
        this.log = tt, this.ql = et
      }
      edit(tt, et, Vt) {
        const [Ot, qt, Dt] = this.ql.sQ.hOt(tt, et, Vt), mt = this.ql.sQ.lw.Ew(Ot, qt, Dt);
        mt && mt.Xw && this.log.edit(Xt(Ot, qt, Dt), performance.now())
      }
      sent(tt, et, Vt, Ot, qt) {
        this.log.sent(Xt(tt.i, tt.j, tt.k), et, Vt, Ot, qt, Ht, performance.now())
      }
      received(tt) {
        this.log.received(tt.meshJobId, tt.jobMs, performance.now())
      }
      failed(tt) {
        this.log.failed(tt)
      }
      applied(tt, et) {
        this.log.applied(Xt(tt.i, tt.j, tt.k), et, performance.now())
      }
    }
    let Et = null,
      ft = null,
      wt = !1,
      yt = null;

    function Nt() {
      return new Promise((tt => {
        null !== Et && Et.reported >= mt ? tt() : ft = tt
      }))
    }

    function Mt() {
      const tt = new Qt;
      return Et = tt, (0, Dt.j)("remesh", (() => tt.dump())), (0, Dt.c)("remeshStats", (() => {
        console.log(tt.stats())
      })), wt || (wt = !0, (0, Ot.c)((tt => {
        (0, Dt.n)("remesh", tt)
      }), Nt)), tt
    }

    function bt(tt) {
      const et = Mt();
      yt = new lt(et, tt), tt.aJ.meshProbe = yt, tt.on("beforeRender", (() => {
        et.frame(performance.now())
      }))
    }

    function Jt(tt, et, Vt) {
      var Ot;
      null === (Ot = yt) || void 0 === Ot || Ot.edit(tt, et, Vt)
    }
  },
  34263: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => Ot
    });
    const Ot = new Set(["chunkBorders"])
  },
  34414: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => mt,
      e: () => qt,
      h: () => Xt
    });
    var Ot = Vt(1657);

    function qt(tt) {
      var et;
      return {
        ...mt.store,
        yaw: mt.store.yaw + (null !== (et = Ot.d[tt].previewYaw) && void 0 !== et ? et : 0)
      }
    }
    const Dt = {
        yaw: .61 * Math.PI,
        pitch: Math.PI / 2.05,
        radius: 30,
        target: [0, 0, 0]
      },
      mt = {
        player: Dt,
        store: {
          ...Dt,
          radius: 33,
          target: [0, 3.9, 0]
        }
      };

    function dt(tt, et) {
      tt instanceof Promise ? tt.then(et).catch((tt => {
        console.error("Couldn't open the preview", tt)
      })) : et(tt)
    }
    class jt {
      constructor(tt) {
        this.opened = null, this.view = null, this.size = null, this.closed = !1, dt(tt, (tt => {
          this.closed ? tt.close() : (this.opened = tt, null !== this.size && tt.resize(this.size.width, this.size.height), null !== this.view && tt.show(this.view))
        }))
      }
      show(tt) {
        var et;
        this.view = tt, null === (et = this.opened) || void 0 === et || et.show(tt)
      }
      resize(tt, et) {
        var Vt;
        this.size = {
          width: tt,
          height: et
        }, null === (Vt = this.opened) || void 0 === Vt || Vt.resize(tt, et)
      }
      close() {
        var tt;
        this.closed = !0, null === (tt = this.opened) || void 0 === tt || tt.close(), this.opened = null
      }
    }
    class Ht {
      constructor(tt) {
        this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(tt).then((tt => tt.ready)), dt(tt, (tt => {
          this.closed ? tt.close() : (this.opened = tt, null !== this.size && tt.resize(this.size.width, this.size.height))
        }))
      }
      get dev() {
        return this.opened.dev
      }
      isReady() {
        var tt, et;
        return null !== (tt = null === (et = this.opened) || void 0 === et ? void 0 : et.isReady()) && void 0 !== tt && tt
      }
      setCosmetic(tt, et) {
        var Vt;
        null === (Vt = this.opened) || void 0 === Vt || Vt.setCosmetic(tt, et)
      }
      playEmote(tt) {
        var et;
        null === (et = this.opened) || void 0 === et || et.playEmote(tt)
      }
      setOrbit(tt) {
        var et;
        null === (et = this.opened) || void 0 === et || et.setOrbit(tt)
      }
      resetCamera() {
        var tt;
        null === (tt = this.opened) || void 0 === tt || tt.resetCamera()
      }
      async untilDrawn(tt) {
        var et;
        await this.ready, await (null === (et = this.opened) || void 0 === et ? void 0 : et.untilDrawn(tt))
      }
      resize(tt, et) {
        var Vt;
        this.size = {
          width: tt,
          height: et
        }, null === (Vt = this.opened) || void 0 === Vt || Vt.resize(tt, et)
      }
      close() {
        var tt;
        this.closed = !0, null === (tt = this.opened) || void 0 === tt || tt.close(), this.opened = null
      }
    }
    const Xt = new class {
      constructor() {
        this.host = null, this.makeDefault = null
      }
      setHost(tt) {
        this.host = tt
      }
      setDefaultHost(tt) {
        this.makeDefault = tt
      }
      current() {
        if (null === this.host) {
          if (null === this.makeDefault) throw new Error("no preview host");
          this.host = this.makeDefault()
        }
        return this.host
      }
      openMob(tt) {
        return new jt(this.current().openMob(tt))
      }
      openPet(tt) {
        return new jt(this.current().openPet(tt))
      }
      openMobLineup(tt) {
        return new jt(this.current().openMobLineup(tt))
      }
      openCharacter(tt, et) {
        return new Ht(this.current().openCharacter(tt, et))
      }
    }
  },
  5216: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => Ot.k,
      g: () => qt,
      h: () => Ot.s
    });
    var Ot = Vt(5223);
    const qt = [!1, !0].flatMap((tt => ["terrain", "liquid", "model"].map((et => ({
      strict: tt,
      program: et
    })))))
  },
  39419: (tt, et, Vt) => {
    Vt.r(et), Vt.d(et, {
      ShaderPackPage: () => jt,
      harnessShaderPackMode: () => lt,
      setHarnessUrlShaderPack: () => Qt,
      shaderPackPage: () => Xt
    });
    var Ot = Vt(106),
      qt = Vt(39),
      Dt = (Vt(3533), Vt(5216), Vt(3524)),
      mt = Vt(6873);
    Vt(6830);
    const dt = {
      status: "none"
    };
    class jt {
      constructor() {
        this.stored = null, this.compiling = null, this.pagePack = null, this.resolved = null
      }
      preload() {
        if (null === this.stored) {
          if ((0, Dt.i)(Ot.featureFlags.settings.canUseShaderPacks)) return this.stored = Promise.resolve(null), Ht().then((tt => {
            tt && qt.e.removeItem(Dt.e)
          })), this.stored;
          this.prefetchHint() && this.compiler().catch((() => {})), this.stored = this.readStored()
        }
        return this.stored
      }
      prefetchHint() {
        return (0, Dt.g)(Ot.featureFlags.settings.canUseShaderPacks)
      }
      async loadActive() {
        const tt = await this.load();
        return "active" === tt.status ? tt.pack : null
      }
      load() {
        return this.pagePack ??= this.read().catch((tt => (console.error("Failed to load the shader pack", tt), dt))).then((tt => (this.resolved ??= tt, tt))), this.pagePack
      }
      hasNone() {
        var tt;
        return "none" === (null === (tt = this.resolved) || void 0 === tt ? void 0 : tt.status)
      }
      block(tt) {
        this.resolved = {
          status: "blocked",
          messageKey: tt,
          variants: null
        }, this.pagePack = Promise.resolve(this.resolved)
      }
      compiler() {
        return this.compiling ??= Promise.all([Vt.e(78), Vt.e(136), Vt.e(142)]).then((() => Vt(42006))).then((tt => (tt.prefetchCompiler(), tt))), this.compiling
      }
      async readStored() {
        const tt = await Ht();
        return tt && this.compiler().then((tt => tt.reconcileHint())).catch((tt => {
          console.error("Failed to correct the shader pack hint", tt)
        })), tt
      }
      async read() {
        const tt = await this.preload();
        return tt ? (await this.compiler()).compilePagePack(tt) : dt
      }
    }
    async function Ht() {
      if (!(0, Dt.m)(Ot.featureFlags.settings.canUseShaderPacks)) return null;
      try {
        const tt = await (0, mt.g)(!0);
        return tt || qt.e.setItem(Dt.e, !1), tt
      } catch (tt) {
        return console.error("Failed to read the stored shader pack", tt), qt.e.removeItem(Dt.e), null
      }
    }
    const Xt = new jt;

    function Qt(tt, et) {}

    function lt() {
      return null
    }
  },
  39456: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => Qt,
      e: () => lt
    });
    var Ot = Vt(184),
      qt = Vt(217),
      Dt = Vt(1592),
      mt = Vt(3012),
      dt = Vt(1600),
      jt = Vt(36709),
      Ht = Vt(738),
      Xt = Vt(39419);

    function Qt(tt) {
      (0, mt.reportClientError)("matchmake_failed", tt, Ot.n[Ot.n.SHADER_PACK])
    }
    async function lt(tt, et) {
      var Vt;
      const Ot = null === (Vt = await Xt.shaderPackPage.preload()) || void 0 === Vt ? void 0 : Vt.listing,
        mt = (0, jt.b)();
      Ot && null !== mt && await dt.e.reportShaderPackSession(tt, {
        packId: Ot.packId,
        sourceHash: Ot.sourceHash,
        game: (0, Dt.e)(et, qt.y, "other"),
        playSessionId: mt,
        visitSessionId: (0, Ht.e)()
      })
    }
  },
  6873: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => qt,
      g: () => Dt
    });
    var Ot = Vt(39);
    const qt = "shaderPack";
    async function Dt() {
      var tt;
      let et = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (tt = await Ot.c.getItem(qt, et)) && void 0 !== tt ? tt : null
    }
  },
  6830: (tt, et, Vt) => {
    Vt.r(et), Vt.d(et, {
      loadShaderPackTextures: () => mt,
      shaderPackTextures: () => dt
    });
    var Ot = Vt(5223);
    let qt = null,
      Dt = null;

    function mt() {
      return Dt ??= Promise.all([Vt.e(73), Vt.e(190)]).then((() => Vt(40674))).then((tt => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: et,
          textureNameToIndex: Vt,
          textureAnimationData: Dt
        } = tt;
        return qt ??= (0, Ot.m)(Vt, Dt, et), qt
      })), Dt
    }

    function dt() {
      if (null === qt) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return qt
    }
  },
  34326: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => Dt
    });
    var Ot = Vt(1167);

    function qt() {
      var tt, et;
      return null !== (tt = null === (et = screen.orientation) || void 0 === et ? void 0 : et.type) && void 0 !== tt ? tt : innerWidth > innerHeight ? "landscape" : "portrait"
    }
    const Dt = new class {
      constructor() {
        this.holding = !1, this.heldOrientation = "", this.releaseTimer = void 0, this.longHoldTimer = void 0, this.resizers = new Set, this.releaseWhenShown = () => {
          document.hidden || (document.removeEventListener("visibilitychange", this.releaseWhenShown), this.release())
        }
      }
      isHeld() {
        return this.holding && qt() !== this.heldOrientation && (this.holding = !1), this.holding
      }
      hold() {
        this.heldOrientation = qt(), this.holding = !0, clearTimeout(this.releaseTimer), document.removeEventListener("visibilitychange", this.releaseWhenShown), clearTimeout(this.longHoldTimer), this.longHoldTimer = setTimeout((() => {
          this.holding && (0, Ot.Nw)(new Error("Game view size held for 60 s"))
        }), 6e4)
      }
      release() {
        clearTimeout(this.longHoldTimer), this.releaseTimer = setTimeout((() => {
          if (document.hidden) document.addEventListener("visibilitychange", this.releaseWhenShown);
          else {
            this.holding = !1;
            for (const tt of this.resizers) tt()
          }
        }), 1e3)
      }
      heldSizer(tt) {
        let et = !1;
        return () => {
          if (et && this.isHeld()) return null;
          const Vt = tt();
          return et ||= null !== Vt, Vt
        }
      }
      onRelease(tt) {
        return this.resizers.add(tt), () => {
          this.resizers.delete(tt)
        }
      }
    }
  },
  39446: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => qt
    });
    let Ot = !1;
    async function qt(tt, et) {
      if (!Ot) {
        Ot = !0;
        try {
          const [{
            reloadBloxd: Ot
          }, {
            NotificationProvider: qt
          }] = await Promise.all([Promise.resolve().then((() => Vt(1826))), Promise.resolve().then((() => Vt(1450)))]);
          if (!tt || !0 === await qt.showPromptPopup({
              title: "Unsaved changes",
              subtitle: "Exit and lose your unsaved changes?",
              confirmText: "Exit",
              destructive: !0,
              cancelText: "Cancel",
              unlockPointerKey: "replayExitUnsavedChanges"
            }).getResult()) return void Ot(et)
        } catch (qt) {
          console.error("Leaving the replay failed", qt)
        }
        Ot = !1
      }
    }
  },
  41162: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => dt,
      e: () => jt
    });
    var Ot = Vt(1842);
    const qt = 33177600,
      Dt = 3e4;
    let mt = !1;

    function dt(tt, et, Vt) {
      let Ot = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const {
        scale: dt = 1,
        type: jt = "image/png",
        quality: Ht
      } = Ot;
      if (!tt.drawing()) return Promise.reject(new Error("Screenshots need a game to be running"));
      if (mt) return Promise.reject(new Error("A screenshot is already being taken"));
      mt = !0;
      const Xt = function(tt, et, Vt) {
        const Ot = Math.max(1, tt),
          Dt = Math.max(1, et),
          mt = Math.min(1, Vt / Math.max(Ot, Dt), Math.sqrt(qt / (Ot * Dt)));
        return {
          width: Math.max(1, Math.floor(Ot * mt)),
          height: Math.max(1, Math.floor(Dt * mt))
        }
      }(et, Vt, tt.maxTextureSize);
      return tt.resize(Xt.width, Xt.height, dt * Xt.width / Math.max(1, et)), new Promise(((et, Vt) => {
        let Ot, qt = 2,
          dt = null;
        const Xt = () => {
          var et;
          mt = !1, null === (et = dt) || void 0 === et || et(), clearTimeout(Ot), tt.restoreSize()
        };
        Ot = setTimeout((() => {
          Xt(), Vt(new Error("No frame was drawn to capture"))
        }), Dt), dt = tt.onFrameDrawn((() => {
          if (qt--, qt > 0) return;
          const {
            canvas: Ot
          } = tt, Dt = {
            width: Ot.width,
            height: Ot.height
          };
          try {
            Ot.toBlob((tt => {
              tt ? et({
                blob: tt,
                ...Dt
              }) : Vt(new Error("The canvas gave no image"))
            }), jt, Ht)
          } catch (mt) {
            Vt(mt)
          } finally {
            Xt()
          }
        }))
      }))
    }
    async function jt(tt, et, Vt) {
      try {
        const qt = await dt(tt, et, Vt);
        (0, Ot.c)(qt.blob, `bloxd-screenshot-${qt.width}x${qt.height}-${Date.now()}.png`)
      } catch (qt) {
        console.error("Error taking screenshot:", qt)
      }
    }
  },
  37955: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => Ot
    });
    const Ot = {
      noaReady: null,
      chunkRequested: null,
      beforeServerListeners: null,
      wasmNetReady: null
    }
  },
  39370: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => mt
    });
    var Ot = Vt(377),
      qt = Vt(153),
      Dt = Vt(39);

    function mt() {
      Dt.e.setItem(Ot.vb, Dt.e.getItem(Ot.vb) + 1), (0, qt.is99NightsCrazyGamesBundle)() && Dt.e.setItem(Ot.sb, Dt.e.getItem(Ot.sb) + 1)
    }
  },
  40853: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => dt
    });
    var Ot = Vt(39850);

    function qt(tt) {
      return {
        current: () => tt,
        watch: () => () => {}
      }
    }

    function Dt() {}
    const mt = Object.freeze([0, 0, 0]),
      dt = {
        states: {
          health: qt({
            health: null,
            maxHealth: null,
            shield: null,
            maxShield: null
          }),
          inventory: qt({
            player: [],
            chestOrCreative: [],
            chest: null,
            creative: !1,
            selectedSlot: 0,
            freeSlots: 0
          }),
          hotbar: qt({
            items: [],
            ammo: 0,
            selectedSlot: null
          }),
          stationItems: qt({
            enchantable: {},
            salvageable: {}
          }),
          itemInfo: qt({}),
          creativeVisibility: qt({
            publicLobby: !1,
            shownInGame: {}
          }),
          aura: qt(null),
          heldItemAim: qt({
            gun: !1,
            aimable: !1,
            chargeName: null
          }),
          crouching: qt(!1),
          gliderBoostFuel: qt(0),
          flight: qt({
            canFly: !1,
            flying: !1
          }),
          crafting: qt({
            focus: null,
            recipes: [],
            detail: null
          }),
          players: qt({
            ids: [],
            byId: {},
            localId: null
          }),
          lobbyLeaderboardRows: qt({}),
          fullInventory: qt(!1),
          crosshairTarget: qt({
            interactPrompt: null,
            blockText: null,
            neededTool: null
          }),
          localPlayerAlive: qt(!0),
          freeCamera: qt({
            allowed: !1,
            movesFly: !1
          }),
          replay: qt(null),
          replayEdits: qt(null),
          replayRecorder: qt({
            recording: !1,
            clipping: !1,
            hasClipBuffer: !1,
            seconds: 0
          }),
          replayVideoExporting: qt(!1)
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
          selectHotbarSlot: Dt,
          removeInventoryItem: () => !1,
          swapInventorySlots: () => !1,
          moveInventoryItem: () => !1,
          quickMoveInventoryItem: () => null,
          closeChest: Dt,
          setInventoryOpen: Dt,
          changeIronChestPasskey: Dt,
          dragReplayCamera: Dt,
          applyTemporaryThirdPerson: Dt,
          holdEmoteWheel: Dt,
          recordFlyingMiddleText: Dt,
          focusCrafting: Dt,
          craftRecipe: () => ({
            cX: 0,
            jj: null,
            amountAddedToSlot: 0
          }),
          salvageItem: () => !1,
          enchantItem: Dt,
          setShopOpen: Dt,
          buyShopItem: Dt,
          lobbyManage: Dt,
          sendChatMessage: Dt,
          ignorePlayer: Dt,
          reportPlayer: Dt,
          reportWorldCodeChat: Dt,
          requestDiscordReportKey: Dt,
          reportLobbyOrGame: Dt,
          playEmote: Dt,
          updateMyCosmetic: Dt,
          writeOnBoard: Dt,
          writeBook: Dt,
          writeNameTag: Dt,
          setCustomLobbyBlock: Dt,
          openIronChest: Dt,
          sendCodeCollab: Dt,
          clickCodeBlock: Dt,
          bindCustomButtonKeys: Dt,
          pressCustomButton: Dt,
          moveReplayFreecam: Dt,
          holdReplayFreecamVertical: Dt,
          respawn: Dt,
          wakeUp: Dt,
          requestLeaderboard: Dt,
          completeTask: Dt,
          setServerCookie: Dt,
          answerUiRequest: Dt,
          chooseRewardedAd: Dt,
          setCameraZoom: Dt,
          setFreeCameraMovesFly: Dt,
          setBlockHighlight: Dt,
          setCrosshairInteractPrompt: Dt,
          setLookSensitivity: Dt,
          replayAction: Dt,
          setReplayPlaying: Dt,
          seekReplay: Dt,
          setReplayCameraMode: Dt,
          syncReplayCameraMode: Dt,
          setReplayCameraKeyframe: Dt,
          moveReplayCameraKeyframe: Dt,
          deleteReplayCameraKeyframes: Dt,
          setReplayPlaybackMark: Dt,
          cropReplay: () => !1,
          holdReplayForShaderPackFailure: Dt,
          exportReplayVideo: Dt,
          toggleRecording: Dt,
          saveClip: Dt,
          setRecorderPrefs: Dt,
          setReplayViewerOpen: Dt
        },
        queries: {
          enchantingOffer: () => ({
            perks: [],
            options: []
          }),
          worldCodeAiChunk: () => Ot.e,
          worldCodeAiGameState: () => Ot.h
        },
        lookups: {
          localPos: () => mt,
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
  41159: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => mt,
      g: () => Dt
    });
    var Ot = Vt(2219),
      qt = Vt(1103);

    function Dt(tt, et) {
      return null !== tt.gameSource && (0, Ot.m)(et, tt.gameSource)
    }

    function mt(tt, et) {
      if (null === tt.gameSource || "" === tt.gameSource || null === et) return !0;
      const Vt = (0, qt.k)(et) ? (0, qt.p)(et) : null;
      return null !== Vt && Dt(tt, Vt)
    }
  },
  41136: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => dt
    });
    var Ot = Vt(705),
      qt = Vt(41141),
      Dt = Vt(41003);
    async function mt(tt) {
      const et = await (0, qt.j)({
        Helmet: Vt(38222),
        Chestplate: Vt(38227),
        Gauntlets: Vt(38241),
        Leggings: Vt(38230),
        Boots: Vt(38238)
      } [Ot.b[tt]]);
      try {
        return (0, Dt.n)(et)
      } finally {
        et.close()
      }
    }
    const dt = new class {
      constructor() {
        let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : mt,
          et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : qt.n;
        this.decode = tt, this.register = et, this.decoded = new Map
      }
      warm() {
        for (let tt = 0; tt < Ot.b.length; tt++) this.part(tt).catch((et => {
          console.warn(`The grayscale armour ${Ot.b[tt]} image didn't decode ahead of use`, et)
        }))
      }
      async load(tt, et) {
        const {
          width: Vt,
          height: Dt,
          pixels: mt
        } = await this.part(tt), dt = new ImageData(function(tt, et) {
          const Vt = new Uint8ClampedArray(tt.length);
          for (let Ot = 0; Ot < tt.length; Ot += 4) Vt[Ot] = Math.round(tt[Ot] * et[0] / 255), Vt[Ot + 1] = Math.round(tt[Ot + 1] * et[1] / 255), Vt[Ot + 2] = Math.round(tt[Ot + 2] * et[2] / 255), Vt[Ot + 3] = tt[Ot + 3];
          return Vt
        }(mt, function(tt) {
          return [tt >>> 16 & 255, tt >>> 8 & 255, 255 & tt]
        }(et)), Vt, Dt);
        let jt;
        try {
          jt = await createImageBitmap(dt, {
            premultiplyAlpha: "none",
            colorSpaceConversion: "none"
          })
        } catch (Ht) {
          throw new qt.b("decode", `grayscale armour ${Ot.b[tt]}`, {
            cause: Ht
          })
        }
        return {
          id: this.register(jt),
          width: Vt,
          height: Dt
        }
      }
      part(tt) {
        const et = this.decoded.get(tt);
        if (void 0 !== et) return et;
        const Vt = this.decode(tt).catch((et => {
          throw this.decoded.delete(tt), et instanceof qt.b ? et : new qt.b("decode", `grayscale armour ${Ot.b[tt]}`, {
            cause: et
          })
        }));
        return this.decoded.set(tt, Vt), Vt
      }
    }
  },
  41127: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => mt,
      g: () => yt,
      h: () => Xt,
      k: () => Qt,
      l: () => wt
    });
    var Ot = Vt(40985),
      qt = Vt(41136),
      Dt = Vt(41141);
    const mt = 396,
      dt = 1,
      jt = 2,
      Ht = 3,
      Xt = {
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
      Qt = {
        File: 0,
        Item: 1
      },
      lt = 0,
      Et = 1,
      ft = 2;

    function wt(tt) {
      const et = (0, Ot.n)();
      et.catch((() => {}));
      let qt = null;
      return {
        glbUrl: tt,
        lifeformAtlasUrl: async tt => (await et).lifeformAtlasUrl(tt),
        armourAtlasUrl: async () => (await Vt.e(207).then((() => Vt(34482)))).armourAtlasUrl,
        capeUrl: async tt => (await et).capeUrl(tt),
        attachmentImageUrl: async tt => (await et).attachmentImageUrl(tt),
        blockImageUrl: async tt => (await et).blockImageUrl(tt),
        groupAtlasUrl: async tt => (await et).groupAtlasUrl(tt),
        particleTextureUrl: async tt => (await et).particleTextureUrl(tt),
        particleItemUrl: async tt => (qt ??= Vt.e(38).then((() => Vt(51342))).catch((tt => {
          throw qt = null, tt
        })), (await qt).particleItemUrl(tt))
      }
    }
    class yt {
      constructor(tt, et) {
        var Vt, mt, dt, jt;
        let Ht = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        this.sources = tt, this.onFailure = et, this.loading = new Map, this.glbImages = new Map, this.glbWrittenImages = new Map, this.glbTakenCount = new Map, this.answered = new Map, this.ready = [], this.load = void 0, this.release = void 0, this.fetchFile = void 0, this.greyscaleArmour = void 0, this.df = !1, this.load = null !== (Vt = Ht.load) && void 0 !== Vt ? Vt : (tt, et) => (0, Dt.m)(tt, Ht.fetchImage, et), this.release = null !== (mt = Ht.release) && void 0 !== mt ? mt : Dt.p, this.fetchFile = null !== (dt = Ht.fetchFile) && void 0 !== dt ? dt : tt => (0, Ot.i)(tt), this.greyscaleArmour = null !== (jt = Ht.greyscaleArmour) && void 0 !== jt ? jt : qt.b
      }
      get waiting() {
        return this.ready.length
      }
      get inFlight() {
        return this.loading.size
      }
      glbWritten(tt, et) {
        this.glbWrittenImages.set(tt, Kt(et))
      }
      glbTaken(tt, et) {
        const Vt = this.glbWrittenImages.get(tt);
        this.glbWrittenImages.delete(tt), et && this.setGlbImages(tt, void 0 !== Vt && Vt.length > 0 ? Vt : void 0)
      }
      setGlbImages(tt, et) {
        var Vt;
        this.glbTakenCount.set(tt, (null !== (Vt = this.glbTakenCount.get(tt)) && void 0 !== Vt ? Vt : 0) + 1), void 0 === et ? this.glbImages.delete(tt) : this.glbImages.set(tt, et);
        const Ot = [];
        for (const {
            key: qt
          }
          of this.loading.values()) qt.kind === Xt.Glb && qt.word === tt && Ot.push(qt);
        for (let qt = this.ready.length - 1; qt >= 0; qt--) {
          const {
            key: et,
            id: Vt
          } = this.ready[qt];
          et.kind === Xt.Glb && et.word === tt && (this.ready.splice(qt, 1), null !== Vt && (this.answered.delete(Vt), this.release(Vt)), Ot.push(et))
        }
        this.loadAgain(Ot)
      }
      onEvent(tt) {
        if (this.df) return;
        const et = new DataView(tt.buffer, tt.byteOffset, tt.byteLength);
        for (let Vt = 0; Vt + 8 <= tt.byteLength; Vt += 8) {
          const tt = et.getUint8(Vt),
            Ot = et.getUint32(Vt + 4, !0);
          if (tt === Ht) {
            this.answered.delete(Ot), this.release(Ot);
            continue
          }
          const qt = {
            kind: et.getUint8(Vt + 1),
            index: et.getUint8(Vt + 2),
            word: Ot
          };
          tt === dt ? this.want(qt) : tt === jt && this.loading.delete(Nt(qt))
        }
      }
      reload(tt, et) {
        const Vt = Vt => tt.includes(Vt.kind) && (void 0 === et || et(Vt)),
          Ot = new Map;
        for (const qt of this.answered.values()) Vt(qt) && Ot.set(Nt(qt), qt);
        for (const [qt, {
            key: Dt
          }] of this.loading) Vt(Dt) && Ot.set(qt, Dt);
        this.loadAgain(Ot.values())
      }
      loadAgain(tt) {
        for (const et of tt) this.loading.delete(Nt(et)), this.want(et)
      }
      drain(tt) {
        if (null !== tt)
          for (; this.ready.length > 0;) {
            if (!tt(mt, 0, this.ready[0].record)) return;
            this.ready.shift()
          }
      }
      dispose() {
        this.df = !0, this.loading.clear(), this.ready.length = 0;
        for (const tt of this.answered.keys()) this.release(tt);
        this.answered.clear()
      }
      want(tt) {
        const et = Nt(tt);
        if (this.loading.has(et)) return;
        const Vt = {
          key: tt
        };
        this.loading.set(et, Vt), this.loadKey(tt).then((Ot => {
          this.df || this.loading.get(et) !== Vt ? this.release(Ot.id) : (this.loading.delete(et), this.answered.set(Ot.id, tt), this.ready.push({
            record: bt(tt, lt, Ot),
            key: tt,
            id: Ot.id
          }))
        }), (Ot => {
          if (this.df || this.loading.get(et) !== Vt) return;
          this.loading.delete(et), this.onFailure({
            key: tt,
            error: Ot
          });
          const qt = Ot instanceof Dt.b && "decode" === Ot.stage ? Et : ft;
          this.ready.push({
            record: bt(tt, qt, null),
            key: tt,
            id: null
          })
        }))
      }
      async loadKey(tt) {
        switch (tt.kind) {
          case Xt.Glb:
            return this.load(await this.glbImage(tt), "none");
          case Xt.LifeformAtlas:
            return this.load(Mt(await this.sources.lifeformAtlasUrl(tt.word), tt), "none");
          case Xt.ArmourAtlas:
            return this.load(Mt(await this.sources.armourAtlasUrl(), tt), "none");
          case Xt.Cape:
            return this.load(Mt(await this.sources.capeUrl(tt.word), tt), "none");
          case Xt.AttachmentImage:
            return this.load(Mt(await this.sources.attachmentImageUrl(tt.word), tt), "none");
          case Xt.GroupAtlas:
            return this.load(Mt(await this.sources.groupAtlasUrl(tt.word), tt), "none");
          case Xt.BlockImage:
            return this.load(Mt(await this.sources.blockImageUrl(tt.word), tt), "none");
          case Xt.Particle: {
            const et = await (tt.index === Qt.Item ? this.sources.particleItemUrl(tt.word) : this.sources.particleTextureUrl(tt.word));
            return this.load(Mt(et, tt), "flipY")
          }
          case Xt.GreyscaleArmour:
            return this.greyscaleArmour.load(tt.index, tt.word);
          default:
            throw new Dt.b("fetch", `image kind ${tt.kind}`, {
              cause: null
            })
        }
      }
      async glbImage(tt) {
        var et;
        let Vt = this.glbImages.get(tt.word);
        if (void 0 === Vt) {
          const et = this.glbTakenCount.get(tt.word),
            Ot = Mt(await this.sources.glbUrl(tt.word), tt);
          try {
            Vt = Kt(await this.fetchFile(Ot))
          } catch (qt) {
            throw new Dt.b("fetch", Ot, {
              cause: qt
            })
          }
          this.glbTakenCount.get(tt.word) === et && this.glbImages.set(tt.word, Vt)
        }
        const Ot = null === (et = Vt) || void 0 === et ? void 0 : et[tt.index];
        if (!Ot) throw new Dt.b("decode", `image ${tt.index} of file ${2147483647&tt.word}`, {
          cause: null
        });
        return Ot
      }
    }

    function Nt(tt) {
      let {
        kind: et,
        index: Vt,
        word: Ot
      } = tt;
      return `${et}:${Vt}:${Ot}`
    }

    function Mt(tt, et) {
      if (null === tt) throw new Dt.b("fetch", `no URL for image ${Nt(et)}`, {
        cause: null
      });
      return tt
    }

    function bt(tt, et, Vt) {
      var Ot, qt, Dt;
      const mt = new Uint8Array(16),
        dt = new DataView(mt.buffer);
      return dt.setUint8(0, tt.kind), dt.setUint8(1, tt.index), dt.setUint8(2, et), dt.setUint32(4, tt.word, !0), dt.setUint32(8, null !== (Ot = null === Vt || void 0 === Vt ? void 0 : Vt.id) && void 0 !== Ot ? Ot : 0, !0), dt.setUint16(12, Math.min(null !== (qt = null === Vt || void 0 === Vt ? void 0 : Vt.width) && void 0 !== qt ? qt : 0, 65535), !0), dt.setUint16(14, Math.min(null !== (Dt = null === Vt || void 0 === Vt ? void 0 : Vt.height) && void 0 !== Dt ? Dt : 0, 65535), !0), mt
    }
    const Jt = 1179937895,
      Ct = 1313821514,
      ut = 5130562;

    function Kt(tt) {
      var et;
      const Vt = new DataView(tt.buffer, tt.byteOffset, tt.byteLength);
      if (tt.byteLength < 20 || Vt.getUint32(0, !0) !== Jt || Vt.getUint32(16, !0) !== Ct) return [];
      let Ot, qt = 20 + Vt.getUint32(12, !0);
      try {
        Ot = JSON.parse((new TextDecoder).decode(tt.subarray(20, qt)))
      } catch {
        return []
      }
      for (; qt + 8 <= tt.byteLength && Vt.getUint32(qt + 4, !0) !== ut;) qt += 8 + Vt.getUint32(qt, !0);
      const Dt = null !== (et = Ot.images) && void 0 !== et ? et : [];
      if (0 === Dt.length || qt + 8 > tt.byteLength) return Dt.map((() => null));
      const mt = tt.subarray(qt + 8, Math.min(tt.byteLength, qt + 8 + Vt.getUint32(qt, !0)));
      return Dt.map((tt => {
        var et, Vt, qt;
        const Dt = void 0 === tt.bufferView || null === (et = Ot.bufferViews) || void 0 === et ? void 0 : et[tt.bufferView];
        if (!Dt || 0 !== (null !== (Vt = Dt.buffer) && void 0 !== Vt ? Vt : 0) || void 0 === Dt.byteLength) return null;
        const dt = null !== (qt = Dt.byteOffset) && void 0 !== qt ? qt : 0,
          jt = dt + Dt.byteLength;
        return jt <= mt.byteLength ? mt.slice(dt, jt) : null
      }))
    }
  },
  40858: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => mt,
      i: () => Dt,
      j: () => qt
    });
    let Ot = null;

    function qt(tt) {
      Ot = tt
    }

    function Dt(tt) {
      Ot === tt && (Ot = null)
    }

    function mt() {
      var tt;
      null === (tt = Ot) || void 0 === tt || tt()
    }
  },
  36839: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => Xt,
      e: () => lt,
      h: () => Nt,
      j: () => Ht
    });
    var Ot = Vt(26),
      qt = Vt(2458),
      Dt = Vt(2465),
      mt = Vt(2471),
      dt = Vt(2569),
      jt = Vt(31);

    function Ht(tt, et) {
      return (!(0, mt.e)() || 0 === tt && 0 === et) && (0, Dt.w)(qt.g.Joystick, 0, tt, et, 0)
    }
    const Xt = {
      Action1: 1,
      Action2: 2,
      Action3: 3,
      Attack: 4,
      Use: 5,
      Interact: 6,
      Boost: 7
    };

    function Qt(tt) {
      return tt.classList.contains("TouchKeyHit") && Et() ? null : tt.firstElementChild
    }

    function lt(tt) {
      return tt.classList.contains("TouchKeyHit") && !tt.classList.contains("CanvasZone") ? {
        whole: !Et(),
        keyBox: null
      } : {
        whole: !1,
        keyBox: ft(Qt(tt))
      }
    }

    function Et() {
      return document.documentElement.classList.contains(dt.m)
    }

    function ft(tt) {
      return !(tt instanceof HTMLElement) || tt.offsetWidth <= 0 || tt.offsetHeight <= 0 ? null : {
        width: tt.offsetWidth,
        height: tt.offsetHeight
      }
    }

    function wt(tt, et) {
      const Vt = tt => Math.min(65535, Math.round(4 * tt));
      return (Vt(tt) | Vt(et) << 16) >>> 0
    }

    function yt(tt) {
      return {
        x: tt.left + tt.width / 2,
        y: tt.top + tt.height / 2,
        radius: Math.min(tt.width, tt.height) / 2
      }
    }
    const Nt = new class {
      constructor(tt) {
        this.write = tt, this.elements = new Map, this.canvasLeft = 0, this.canvasTop = 0
      }
      set(tt, et) {
        let Vt = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        et ? this.elements.set(tt, {
          element: et,
          hidden: Vt
        }) : this.elements.delete(tt), this.measureOne(tt)
      }
      measure() {
        let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
          left: this.canvasLeft,
          top: this.canvasTop
        };
        this.canvasLeft = tt.left, this.canvasTop = tt.top;
        for (const et of this.elements.keys()) this.measureOne(et)
      }
      hitZone(tt, et) {
        let Vt = null,
          Ot = 1;
        for (const qt of this.elements.keys()) {
          const Dt = this.shown(qt);
          if (!Dt) continue;
          const {
            rect: mt,
            element: dt
          } = Dt, jt = yt(mt), Ht = Math.max(0, mt.width / 2 - jt.radius), Xt = Math.max(0, mt.height / 2 - jt.radius), lt = Math.max(0, Math.abs(tt - jt.x) - Ht), Et = Math.max(0, Math.abs(et - jt.y) - Xt), wt = dt.firstElementChild;
          let Nt = Math.hypot(lt, Et) / jt.radius;
          const Mt = ft(Qt(dt));
          Mt && (Nt = Math.min(Nt, Math.max(2 * Math.abs(tt - jt.x) / Mt.width, 2 * Math.abs(et - jt.y) / Mt.height))), Nt < Ot && (Vt = {
            code: qt,
            element: dt,
            key: wt,
            ...jt
          }, Ot = Nt)
        }
        return Vt
      }
      measureOne(tt) {
        const et = this.shown(tt);
        if (!et) return void this.write(qt.g.TouchZone, tt, 0, 0, 0);
        const {
          rect: Vt,
          element: Ot
        } = et, Dt = yt(Vt);
        this.write(qt.g.TouchZone, tt, Dt.x - this.canvasLeft, Dt.y - this.canvasTop, wt(Vt.width, Vt.height));
        const mt = ft(Qt(Ot));
        this.write(qt.g.TouchZone, 256 | tt, 0, 0, mt ? wt(mt.width, mt.height) : 0)
      }
      shown(tt) {
        const et = this.elements.get(tt),
          Vt = Ot.b.get("worldPanelHud");
        if (!et || et.hidden || "none" === Vt) return null;
        const qt = et.element.getBoundingClientRect();
        return qt.width <= 0 || qt.height <= 0 ? null : {
          rect: qt,
          element: et.element
        }
      }
    }(Dt.w);
    (0, jt.n)(dt.h, (() => {
      Nt.measure()
    }))
  },
  40895: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => jt,
      d: () => Ht
    });
    var Ot = Vt(41025),
      qt = Vt(39257),
      Dt = Vt(36701),
      mt = Vt(40903),
      dt = Vt(40882);
    const jt = Ot.d.timeForPlayerToConnect - 1e4;
    async function Ht(tt, et, Vt, Ot) {
      let jt;
      try {
        jt = await tt.getTrafficCode()
      } catch (ft) {
        throw console.error("[bloxd-wasm-client] could not get a traffic code", ft), new dt.z(ft)
      }
      const {
        gameNameWithVariation: Ht,
        lobbyName: Xt
      } = et, Qt = () => {
        const et = (0, Dt.e)(tt, Ht, Xt, jt, (tt => {
          var et;
          return null !== (et = null === Vt || void 0 === Vt ? void 0 : Vt.isUsingCustomGameTexturePack(tt)) && void 0 !== et && et
        }));
        et.joinOptions.wasmClient = !0;
        const qt = (0, mt.H)();
        return null !== qt && (et.joinOptions.renderBackend = qt), et.joinOptions.joinAdHold = Ot, et
      }, {
        roomName: lt,
        joinOptions: Et
      } = Qt();
      return {
        endpoint: et.endpoint,
        roomName: lt,
        joinOptions: Et,
        session: {
          gameNameWithVariation: Ht,
          lobbyName: Xt,
          playerDbId: tt.whamm
        },
        optionsAfterRefusal: async et => await (0, qt.b)(tt, et) ? Qt().joinOptions : null
      }
    }
  },
  41154: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => Xt,
      c: () => Dt,
      d: () => Qt,
      h: () => mt
    });
    var Ot = Vt(41127),
      qt = Vt(40985);
    const Dt = new class {
      constructor() {
        this.page = null, this.session = void 0, this.follower = null, this.isWanted = !1, this.listeners = new Set, this.pageListeners = new Set, this.wantedListeners = new Set
      }
      get current() {
        return void 0 === this.session ? this.page : this.session
      }
      setPageFiles(tt) {
        this.change((() => {
          this.page = tt
        }))
      }
      setSessionFiles(tt) {
        const et = void 0 !== this.session && void 0 === tt;
        if (this.change((() => {
            this.session = tt
          })), et)
          for (const Vt of [...this.pageListeners]) Vt()
      }
      showsPage() {
        return void 0 === this.session
      }
      onPageShown(tt) {
        return this.pageListeners.add(tt), () => {
          this.pageListeners.delete(tt)
        }
      }
      setFollower(tt) {
        this.follower = tt, this.startFollower()
      }
      wanted() {
        this.isWanted = !0;
        for (const tt of [...this.wantedListeners]) tt();
        this.startFollower()
      }
      onWanted(tt) {
        return this.wantedListeners.add(tt), () => {
          this.wantedListeners.delete(tt)
        }
      }
      onChange(tt) {
        return this.listeners.add(tt), () => {
          this.listeners.delete(tt)
        }
      }
      startFollower() {
        const tt = this.follower;
        this.isWanted && null !== tt && (this.follower = null, tt((() => {
          this.follower = tt
        })))
      }
      change(tt) {
        const et = this.current;
        if (tt(), this.current !== et)
          for (const Vt of this.listeners) Vt()
      }
    };

    function mt(tt, et) {
      return {
        ...tt,
        armourAtlasUrl: () => {
          var Vt, Ot;
          return null !== (Vt = null === (Ot = et()) || void 0 === Ot ? void 0 : Ot.armourAtlasUrl()) && void 0 !== Vt ? Vt : tt.armourAtlasUrl()
        },
        lifeformAtlasUrl: Vt => jt(et(), (tt => tt.LIFEFORM_ATLAS_PATHS[Vt]), (() => tt.lifeformAtlasUrl(Vt))),
        groupAtlasUrl: Vt => jt(et(), (tt => tt.GROUP_ATLAS_PATHS[Vt]), (() => tt.groupAtlasUrl(Vt))),
        particleItemUrl: Ot => Ht(et(), (async () => {
          const tt = await Vt.e(38).then((() => Vt(51342))).catch((() => null));
          return (null === tt || void 0 === tt ? void 0 : tt.particleItemSprite(Ot)) || null
        }), (() => tt.particleItemUrl(Ot))),
        blockImageUrl: Vt => Ht(et(), (async () => {
          var tt, et;
          return null !== (tt = null === (et = await dt()) || void 0 === et ? void 0 : et.blockImageName(Vt)) && void 0 !== tt ? tt : null
        }), (() => tt.blockImageUrl(Vt)))
      }
    }

    function dt() {
      return (0, qt.n)().catch((() => null))
    }

    function jt(tt, et, Vt) {
      return Ht(tt, (async () => {
        var tt;
        const Vt = await dt(),
          Ot = null === Vt ? null : et(Vt),
          qt = null !== (tt = null === Ot || void 0 === Ot ? void 0 : Ot.slice(Ot.lastIndexOf("/") + 1)) && void 0 !== tt ? tt : null;
        return "Player_Atlas" === qt ? null : qt
      }), Vt)
    }
    async function Ht(tt, et, Vt) {
      if (null !== tt) {
        const Vt = await et(),
          Ot = null === Vt ? null : tt.textureUrl(Vt);
        if (null !== Ot) return Ot
      }
      return Vt()
    }
    const Xt = 0;

    function Qt(tt) {
      const et = [Ot.h.ArmourAtlas, Ot.h.LifeformAtlas, Ot.h.GroupAtlas, Ot.h.BlockImage, Ot.h.Particle];
      tt.reload(et, (tt => {
        switch (tt.kind) {
          case Ot.h.Particle:
            return tt.index === Ot.k.Item;
          case Ot.h.LifeformAtlas:
            return tt.word !== Xt;
          default:
            return !0
        }
      }))
    }
  },
  41031: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => Ot,
      e: () => dt,
      f: () => mt,
      h: () => qt,
      l: () => Dt
    });
    const Ot = 1e3;

    function qt() {
      jt((() => {
        window.location.reload()
      }))
    }

    function Dt() {
      return new Promise((() => {}))
    }

    function mt(tt) {
      jt((() => {
        window.location.replace(tt(window.location.href))
      }))
    }

    function dt(tt) {
      Promise.resolve().then((() => Vt(121))).then((et => {
        let {
          currentUrl: Vt
        } = et;
        mt((() => Vt.mergeSearchParamsInto(tt)))
      }), (() => {
        mt((() => tt))
      }))
    }

    function jt(tt) {
      null !== window.onbeforeunload ? Promise.resolve().then((() => Vt(1826))).then((et => {
        let {
          prepareForUnloadWithoutConfirmation: Vt
        } = et;
        try {
          Vt()
        } catch (Ot) {
          console.warn("[bloxd-wasm-client] prepareForUnloadWithoutConfirmation threw: leaving plainly", Ot), window.onbeforeunload = null
        }
        tt()
      }), (() => {
        window.onbeforeunload = null, tt()
      })) : tt()
    }
  },
  5243: (tt, et, Vt) => {
    function Ot(tt, et) {
      return qt(tt, et)
    }

    function qt(tt, et) {
      if (tt === et) return !0;
      if ("object" !== typeof tt || "object" !== typeof et || null === tt || null === et || Array.isArray(tt) !== Array.isArray(et)) return !1;
      const Vt = tt,
        Ot = et,
        Dt = Object.keys(Vt);
      return Dt.length === Object.keys(Ot).length && Dt.every((tt => Object.prototype.hasOwnProperty.call(Ot, tt) && qt(Vt[tt], Ot[tt])))
    }
    Vt.d(et, {
      e: () => Ot
    })
  },
  41095: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => ut,
      d: () => Jt,
      h: () => wt,
      i: () => ft
    });
    var Ot = Vt(1908),
      qt = Vt(1298),
      Dt = Vt(39249),
      mt = Vt(36738),
      dt = Vt(39271),
      jt = Vt(40882);
    const Ht = {
        "X-Requested-With": "XMLHtttpRequest"
      },
      Xt = 3,
      Qt = [500, 1500];

    function lt(tt) {
      const et = new URL(tt);
      return {
        secure: "https:" === et.protocol || "wss:" === et.protocol,
        host: et.host,
        pathname: et.pathname.replace(/\/+$/, ""),
        search: et.searchParams.toString()
      }
    }

    function Et(tt, et, Vt) {
      const {
        secure: Ot,
        host: qt,
        pathname: Dt,
        search: mt
      } = lt(tt);
      return `${Ot?"https":"http"}://${qt}${Dt}/matchmake/${et}/${encodeURIComponent(Vt)}${mt?`?${mt}`:""}`
    }

    function ft(tt, et) {
      var Vt;
      const Ot = null !== (Vt = et.protocol) && void 0 !== Vt ? Vt : "ws";
      if ("ws" !== Ot) throw new Error(`seat reservation asks for the ${Ot} transport`);
      const {
        secure: qt,
        host: Dt,
        pathname: mt,
        search: dt
      } = lt(tt), jt = new URLSearchParams(dt);
      jt.append("sessionId", et.sessionId), et.reconnectionToken && jt.append("reconnectionToken", et.reconnectionToken);
      return `${qt?"wss":"ws"}://${et.room.publicAddress||`${Dt}${mt}`}/${et.room.processId}/${et.room.roomId}?${jt.toString()}`
    }
    async function wt(tt, et, Vt) {
      var dt;
      let Ht = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const lt = null !== (dt = Ht.sleep) && void 0 !== dt ? dt : Ot.d,
        ft = new qt.d(Ht.signal),
        wt = new mt.b((() => {
          (0, qt.j)(ft.controller, new mt.c("seat"))
        })),
        {
          signal: bt
        } = ft;
      try {
        const Ot = await (0, Dt.g)((() => async function(tt, et, Vt, Ot) {
          var Dt;
          const {
            signal: mt,
            sleep: dt
          } = Ot, Ht = Et(tt, "joinOrCreate", et), lt = JSON.stringify(Vt);
          let ft = null;
          for (let Et = 0; Et < Xt; Et++) {
            var wt;
            if (Et > 0) await dt(null !== (wt = Qt[Et - 1]) && void 0 !== wt ? wt : 1500, mt);
            let tt;
            (0, qt.n)(mt);
            try {
              tt = await Nt(Ht, lt, Ot)
            } catch (bt) {
              (0, qt.n)(mt), ft = yt(bt);
              continue
            }
            const {
              response: et,
              answer: Vt,
              refusal: Dt,
              lost: Xt
            } = tt;
            if (null === Xt) {
              if (null !== Dt) throw Mt(Dt, Vt);
              if (et.ok && null !== Vt && Kt(Vt)) return Vt;
              ft = new jt.w(`seat request answered HTTP ${et.status}${null===Vt?" without JSON":" without a seat"}`, !1, void 0, et.status)
            } else ft = yt(Xt.error)
          }
          throw null !== (Dt = ft) && void 0 !== Dt ? Dt : new jt.w("seat request made no attempt", !1)
        }(tt, et, Vt, {
          ...Ht,
          signal: bt,
          sleep: lt
        })), bt, lt);
        return wt.answered(), Ot
      } finally {
        wt.stop(), ft.unfollow()
      }
    }

    function yt(tt) {
      return new jt.w(tt instanceof Error ? tt.message : String(tt), !0, tt)
    }
    async function Nt(tt, et, Vt) {
      var Ot;
      const {
        signal: Dt
      } = Vt, mt = null !== (Ot = Vt.fetch) && void 0 !== Ot ? Ot : fetch, dt = await mt(tt, {
        method: "POST",
        headers: {
          ...Ht,
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: et,
        credentials: "include",
        signal: Dt
      }), {
        answer: jt,
        lost: Xt
      } = await async function(tt) {
        try {
          const et = await tt.json();
          return {
            answer: "object" === typeof et && null !== et ? et : null,
            lost: null
          }
        } catch (et) {
          return {
            answer: null,
            lost: et instanceof SyntaxError ? null : {
              error: et
            }
          }
        }
      }(dt), Qt = null !== jt && "string" === typeof jt.error ? jt.error : null;
      var lt;
      null !== Qt && (null === (lt = Vt.onRefusal) || void 0 === lt || lt.call(Vt));
      return (0, qt.n)(Dt), {
        response: dt,
        answer: jt,
        refusal: Qt,
        lost: Xt
      }
    }

    function Mt(tt, et) {
      return new jt.n(tt, "number" === typeof(null === et || void 0 === et ? void 0 : et.code) ? et.code : 0, (0, dt.q)(tt).text)
    }
    class bt extends Error {
      constructor(tt, et) {
        super(tt), this.code = et, this.name = "SeatHttpError"
      }
    }
    async function Jt(tt, et, Vt) {
      let Ot = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const {
        response: qt,
        answer: Dt,
        refusal: mt,
        lost: dt
      } = await Nt(Et(tt, "reconnect", et), JSON.stringify({
        reconnectionToken: Vt
      }), Ot);
      if (null !== dt) throw dt.error;
      if (!qt.ok) {
        const tt = null !== Dt && "number" === typeof Dt.code && 0 !== Dt.code ? Dt.code : qt.status;
        throw new bt(`the seat's reconnect was refused: ${null!==mt&&void 0!==mt?mt:`HTTP ${qt.status}`}`, tt)
      }
      if (null !== mt) throw Mt(mt, Dt);
      if (null === Dt || !Kt(Dt)) throw new Error("the seat's reconnect answered " + (null === Dt ? "without JSON" : "without a seat"));
      return {
        ...Dt,
        reconnectionToken: Vt
      }
    }
    const Ct = 10;

    function ut(tt) {
      if (tt.byteLength < 2 || tt[0] !== Ct) return null;
      const et = 2 + tt[1];
      return et > tt.byteLength ? null : (new TextDecoder).decode(tt.subarray(2, et))
    }

    function Kt(tt) {
      const et = tt.room;
      return "string" === typeof tt.sessionId && "object" === typeof et && null !== et && "string" === typeof et.roomId && "string" === typeof et.processId && "string" === typeof et.name
    }
  },
  40777: (tt, et, Vt) => {
    Vt.d(et, {
      D: () => Jt,
      F: () => Ct,
      I: () => yt,
      J: () => Wt,
      N: () => Pt,
      P: () => ft,
      Q: () => Lt,
      S: () => Mt,
      T: () => Nt,
      W: () => bt,
      _: () => ut,
      c: () => qt,
      f: () => Zt,
      j: () => It,
      l: () => Et,
      n: () => wt,
      o: () => ct,
      q: () => ht,
      s: () => St,
      t: () => vt,
      w: () => Kt,
      z: () => Rt
    });
    var Ot = Vt(3064);
    const qt = {
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

    function Dt(tt, et) {
      return !ArrayBuffer.isView(tt) || tt instanceof DataView ? Array.isArray(tt) ? tt.map((tt => et(tt))) : tt : Array.from(tt, (tt => et(tt)))
    }

    function mt(tt) {
      if ("string" !== typeof tt) return tt;
      for (let et = 0; et < tt.length; et++) {
        const Vt = tt.charCodeAt(et);
        if (Vt >= 55296 && Vt <= 57343) return jt.decode(dt.encode(tt))
      }
      return tt
    }
    const dt = new TextEncoder,
      jt = new TextDecoder;

    function Ht(tt) {
      return tt
    }
    let Xt;

    function Qt(tt) {
      return null === tt || "object" !== typeof tt ? tt : [mt(tt.Ed), mt(tt.fd)]
    }

    function lt(tt) {
      return null === tt || "object" !== typeof tt ? tt : [Dt(tt.Tq, Ht), Dt(tt.Rd, Ht)]
    }

    function Et(tt) {
      return null === (et = tt) || "object" !== typeof et ? et : [mt(et.kX), mt(et.GX)];
      var et
    }

    function ft(tt) {
      return null === (et = tt) || "object" !== typeof et ? et : [et.id, et.KX];
      var et
    }

    function wt(tt) {
      return null === (et = tt) || "object" !== typeof et ? et : [et.mD, mt(et.dD), et.jD, mt(et.QD), et.wD, et.yD, et.ZX, mt(et.LX), mt(et.FX)];
      var et
    }

    function yt(tt) {
      return null === (et = tt) || "object" !== typeof et ? et : [Dt(et.Od, Ht), et.qd];
      var et
    }

    function Nt(tt) {
      return null === (et = tt) || "object" !== typeof et ? et : [Dt(et.nm, (tt => mt(tt))), mt(et.td), et.Vd];
      var et
    }

    function Mt(tt) {
      return null === (et = tt) || "object" !== typeof et ? et : [Dt(et.Rj, Ht), mt(et.Ij), et.Pj];
      var et
    }

    function bt(tt) {
      return null === (et = tt) || "object" !== typeof et ? et : [mt(et.kD), mt(et.GD)];
      var et
    }

    function Jt(tt) {
      return null === (et = tt) || "object" !== typeof et ? et : [mt(et.rd)];
      var et
    }

    function Ct(tt) {
      return mt(tt)
    }

    function ut(tt) {
      return null === (et = tt) || "object" !== typeof et ? et : [mt(et.JX), mt(et.CX), mt(et.Ed), mt(et.fd)];
      var et
    }

    function Kt(tt) {
      return Qt(tt)
    }

    function ht(tt) {
      return Qt(tt)
    }

    function vt(tt) {
      return null === (et = tt) || "object" !== typeof et ? et : [mt(et.Jj)];
      var et
    }

    function Wt(tt) {
      return tt
    }

    function St(tt) {
      return null === (et = tt) || "object" !== typeof et ? et : [mt(et.Qd), mt(et.ld)];
      var et
    }

    function ct(tt) {
      return mt(tt)
    }

    function Rt(tt) {
      return lt(tt)
    }

    function It(tt) {
      return lt(tt)
    }

    function Pt(tt) {
      return null === (et = tt) || "object" !== typeof et ? et : [mt(et.Zj)];
      var et
    }

    function Zt(tt) {
      return (Xt ??= (0, Ot.e)().map((tt => tt.name)), Xt).map((et => {
        return "string" === typeof(Vt = tt[et]) ? mt(Vt) : Dt(Vt, Ht);
        var Vt
      }))
    }

    function Lt(tt) {
      return null === (et = tt) || "object" !== typeof et ? et : [et.aj, et.Mj, et.bj];
      var et
    }
  },
  41157: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => Dt
    });
    var Ot = Vt(41159),
      qt = Vt(41154);
    const Dt = new class {
      constructor(tt) {
        this.pack = tt, this.game = void 0, this.settle = null, this.hold = null, this.endedWhileHeld = !1, this.gameListeners = new Set, tt.onWanted((() => {
          this.release()
        }))
      }
      setGame(tt) {
        if (void 0 === tt && null !== this.hold) return void(this.endedWhileHeld = !0);
        this.hold = null, this.endedWhileHeld = !1;
        const et = this.inGame();
        if (this.game = tt, this.update(), this.inGame() !== et)
          for (const Vt of this.gameListeners) Vt()
      }
      inGame() {
        return void 0 !== this.game
      }
      onGameChange(tt) {
        return this.gameListeners.add(tt), () => {
          this.gameListeners.delete(tt)
        }
      }
      unwantedLeave(tt) {
        tt && void 0 !== this.game ? this.hold = {
          game: this.game
        } : this.release()
      }
      rejoinHold() {
        return this.hold
      }
      releaseHold(tt) {
        null !== tt && tt === this.hold && this.release()
      }
      release() {
        if (null === this.hold) return;
        const tt = this.endedWhileHeld;
        this.hold = null, this.endedWhileHeld = !1, tt && this.setGame(void 0)
      }
      setSettled(tt) {
        this.settle = tt, this.update()
      }
      update() {
        void 0 === this.game ? this.pack.setSessionFiles(void 0) : null !== this.settle && (0, Ot.e)(this.settle.state, this.game) && this.pack.setSessionFiles(this.settle.files)
      }
    }(qt.c)
  },
  5235: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => mt,
      f: () => dt
    });
    var Ot = Vt(2219),
      qt = Vt(5243);
    let Dt = null;

    function mt(tt) {
      Dt = {
        pack: tt.metaData.id === Ot.d ? null : tt
      }
    }

    function dt(tt) {
      return !(null === Dt || !(0, qt.e)(Dt.pack, tt)) && (Dt = null, !0)
    }
  },
  40874: (tt, et, Vt) => {
    Vt.r(et), Vt.d(et, {
      followPageUiPack: () => RX,
      packForGame: () => cX,
      playWasmGame: () => AX,
      prefetchWasmPreviews: () => Ij,
      setGamePackConfirm: () => AH,
      startWasmPlay: () => FX,
      startWasmPreviews: () => Rj
    });
    var Ot = Vt(229),
      qt = Vt(1333),
      Dt = Vt(184),
      mt = Vt(39288),
      dt = Vt(2024),
      jt = Vt(31),
      Ht = Vt(4830),
      Xt = Vt(1410),
      Qt = Vt(1820),
      lt = Vt(1423),
      Et = Vt(39446),
      ft = Vt(1397),
      wt = Vt(1894),
      yt = Vt(3005);
    let Nt = null,
      Mt = null,
      bt = null,
      Jt = !1;

    function Ct() {
      Nt ??= performance.now()
    }
    const ut = {
      ready: () => {
        wt.c.markAdmissionAwaited()
      },
      adEnded: () => {
        wt.c.markJoinAdEnded()
      },
      admitted: () => {
        wt.c.markAdmitted()
      }
    };
    var Kt = Vt(39456),
      ht = Vt(39370),
      vt = Vt(36709),
      Wt = Vt(39249),
      St = Vt(9133),
      ct = Vt(36738),
      Rt = Vt(40880),
      It = Vt(4951),
      Pt = Vt(40769),
      Zt = Vt(40853),
      Lt = Vt(40777);
    const Ft = {
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

    function kt(tt) {
      const et = {
        ...Zt.e[tt]
      };
      for (const Vt of Object.keys(Ft[tt])) delete et[Vt];
      return et
    }

    function Gt() {
      var tt, et;
      return null === (tt = null === (et = (0, Pt.g)()) || void 0 === et ? void 0 : et.localPlayerAlive()) || void 0 === tt || tt
    }

    function zt() {
      var tt, et;
      return null !== (tt = null === (et = (0, Pt.g)()) || void 0 === et ? void 0 : et.localDeaths()) && void 0 !== tt ? tt : null
    }
    const ot = {
        current: Gt,
        watch: tt => {
          let et = Gt(),
            Vt = zt();
          return (0, It.p)((() => {
            const Ot = Gt(),
              qt = zt(),
              Dt = null !== qt && null !== Vt && qt !== Vt;
            Vt = qt, Dt ? (et || tt(!0), tt(!1), Ot && tt(!0), et = Ot) : Ot !== et && (et = Ot, tt(Ot))
          }))
        }
      },
      rt = {
        states: {
          ...kt("states"),
          localPlayerAlive: ot
        },
        events: {
          ...kt("events"),
          localPlayerAliveSet: {
            watch: ot.watch
          }
        },
        commands: {
          ...kt("commands"),
          respawn: () => {
            var tt;
            null === (tt = (0, Pt.g)()) || void 0 === tt || tt.respawn()
          },
          playEmote: tt => {
            var et;
            null === (et = (0, Pt.g)()) || void 0 === et || et.send(Lt.c.PlayEmote, (0, Lt.D)({
              rd: tt
            }))
          },
          applyTemporaryThirdPerson: tt => {
            var et;
            let {
              durationMs: Vt
            } = tt;
            null === (et = (0, Pt.g)()) || void 0 === et || et.thirdPersonFor(Vt)
          },
          bindCustomButtonKeys: tt => {
            var et;
            null === (et = (0, Pt.g)()) || void 0 === et || et.bindCustomButtonKeys(tt)
          },
          pressCustomButton: tt => {
            var et;
            let {
              id: Vt,
              down: Ot
            } = tt;
            null === (et = (0, Pt.g)()) || void 0 === et || et.pressCustomButton(Vt, Ot)
          },
          setLookSensitivity: () => {},
          wakeUp: tt => {
            const et = (0, Lt.N)({
                Zj: tt
              }),
              Vt = () => {
                const tt = (0, Pt.g)();
                return !(null !== tt && void 0 !== tt && tt.isSessionLive) || tt.send(Lt.c.StopSleeping, et)
              };
            if (!Vt()) {
              const tt = (0, It.p)((() => {
                Vt() && tt()
              }))
            }
          },
          setCameraZoom: tt => {
            var et;
            null === (et = (0, Pt.g)()) || void 0 === et || et.setCameraZoom(tt)
          }
        },
        queries: kt("queries"),
        lookups: {
          ...kt("lookups"),
          cameraZoom: () => {
            var tt, et;
            return null !== (tt = null === (et = (0, Pt.g)()) || void 0 === et ? void 0 : et.cameraZoom()) && void 0 !== tt ? tt : 0
          }
        }
      };
    var Ut = Vt(39271),
      At = Vt(40882),
      it = Vt(40886),
      Yt = Vt(40895),
      Bt = Vt(1345),
      pt = Vt(121),
      xt = Vt(4655),
      Tt = Vt(3788),
      gt = Vt(1260);
    const st = {
      Zm: () => (0, Bt.h)(),
      inbuiltOverwritten: () => xt.h,
      reflectApplyHit: () => gt.b,
      definerHit: () => pt.currentUrl.c,
      emitReplaced: () => (0, jt.b)(),
      confirmMesh: () => (0, Tt.c)(),
      confirmMeshHitStack: () => (0, Tt.d)()
    };
    var nt = Vt(40890),
      te = Vt(41031);
    var ee = Vt(26),
      Ve = Vt(2026),
      Oe = Vt(2074),
      qe = Vt(1737),
      De = Vt(2108),
      me = Vt(1286),
      de = Vt(1338),
      je = Vt(41037);

    function He() {
      return de.e.get().getCurrentLanguageCode()
    }

    function Xe(tt) {
      const et = () => {
        tt({
          translate: (tt, et) => (0, me.w)(He(), tt, et),
          keyBindingText: tt => {
            const et = (0, Oe.p)(tt, ee.b.get("isTouchScreen"));
            return null !== et ? (0, me.A)(He(), et.translationKey, et.params) : (0, Oe.k)((0, Oe.o)(tt))
          },
          isFriend: De.e,
          hiddenNames: Ve.d.shown,
          loadsFontRest: (0, je.c)(He())
        })
      };
      let Vt = !1;
      const Ot = () => {
          const tt = He();
          (0, me.k)(tt).then((() => {
            Vt || tt !== He() || et()
          }))
        },
        qt = () => qe.e.getSocialState().friends.map((tt => tt.name.toLowerCase())).sort().join(" ");
      let Dt = qt();
      et(), Ot();
      const mt = [(0, de.f)((() => {
        et(), Ot()
      })), (0, jt.n)("customBindingsChanged", et), (0, jt.n)("appManagerUpdated|isTouchScreen", et), (0, De.d)((() => {
        const tt = qt();
        tt !== Dt && (Dt = tt, et())
      })), Ve.d.subscribe(et)];
      return () => {
        Vt = !0;
        for (const tt of mt) tt()
      }
    }
    var Qe = Vt(712),
      le = Vt(1103),
      Ee = Vt(2047),
      fe = Vt(377),
      we = Vt(217),
      ye = Vt(2961),
      Ne = Vt(2965),
      ae = Vt(38947),
      Me = Vt(4851),
      be = Vt(41057),
      Je = Vt(757),
      Ce = Vt(725),
      ue = Vt(3029),
      Ke = Vt(2043),
      he = Vt(3792),
      ve = Vt(3344);
    let We = null;
    var Se = Vt(1293),
      ce = Vt(1298),
      Re = Vt(4566),
      Ie = Vt(3522),
      Pe = Vt(55),
      Ze = Vt(373),
      Le = Vt(366),
      Fe = Vt(41068),
      ke = Vt(4958),
      Ge = Vt(38985);
    var ze = Vt(37955),
      oe = Vt(41075);
    class re {
      constructor(tt, et) {
        this.showView = tt, this.holdForAd = et
      }
      pointerUnlockRequestsChanged() {
        (0, Fe.G)()
      }
      pointerLockDebugEntries() {
        return [{
          label: "Locked to the canvas",
          value: String((0, Fe.w)())
        }]
      }
      setGameViewShown(tt) {
        this.showView(tt)
      }
      setGameView(tt) {
        (0, oe.n)(tt)
      }
      videoAdHold(tt, et) {
        this.holdForAd(tt, et)
      }
    }
    class Ue {
      leave(tt) {
        ! function(tt) {
          if (null !== (0, lt.c)().websocketUrl) try {
            (0, It.C)().leaveGame(tt)
          } finally {
            (0, lt.o)({
              websocketUrl: null
            })
          }
        }(tt)
      }
      isReplay() {
        return !1
      }
    }
    class Ae {
      watchFrameStarts(tt) {
        return (0, It.m)(tt)
      }
      watchFrames(tt) {
        return (0, It.k)(tt)
      }
      watchTicks(tt) {
        return (0, It.p)(tt)
      }
    }
    var ie = Vt(41080);

    function Ye(tt) {
      return tt >= 0 ? Math.min(1, tt) : 0
    }

    function Be(tt, et) {
      const {
        fade: Vt
      } = tt;
      return null === Vt || et - Vt.at >= Vt.ms ? tt.volume : Vt.from + (tt.volume - Vt.from) * Math.max(0, (et - Vt.at) / Vt.ms)
    }

    function pe(tt) {
      const et = Object.entries(tt),
        Vt = new Uint32Array(et.length);
      let Ot = 0;
      for (const [mt, [, dt]] of et.entries()) Vt[mt] = dt.length, Ot += dt.length;
      const qt = new Float64Array(3 * Ot);
      let Dt = 0;
      for (const [, mt] of et)
        for (const tt of mt) qt.set(tt, Dt), Dt += 3;
      return {
        blocks: et.map((tt => {
          let [et] = tt;
          return et
        })).join("\0"),
        counts: Vt,
        values: qt
      }
    }
    class xe {
      constructor(tt, et) {
        this.core = tt, this.warn = et, this.latest = 0
      }
      async feed() {
        let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Te;
        const et = ++this.latest;
        let Vt;
        try {
          Vt = await tt()
        } catch (Ot) {
          return void(this.core.isStopped || et !== this.latest || this.warn("the block colours didn't load, so block particles draw grey", Ot))
        }
        et === this.latest && (this.core.setBlockColours(Vt) || this.core.isStopped || this.warn("the core refused the block colours: block particles draw grey"))
      }
    }
    async function Te() {
      return pe((await Vt.e(207).then((() => Vt(34482)))).averageColors)
    }
    var ge = Vt(4960),
      se = Vt(4963),
      ne = Vt(40831),
      tV = Vt(3297),
      eV = Vt(36489),
      VV = Vt(40927),
      OV = Vt(707),
      qV = Vt(37294),
      DV = Vt(705),
      mV = Vt(391),
      dV = Vt(40916);
    const jV = [3e4, 12e4, 3e5];
    class HV extends Error {}
    const XV = {
      mobTypes: OV.o,
      vehicleTypes: qV.b,
      mobAiStates: OV.l,
      playerPoses: DV.j
    };
    var QV = Vt(40905),
      lV = Vt(40920),
      EV = Vt(40952),
      fV = Vt(1167),
      wV = Vt(41083),
      yV = Vt(41089),
      NV = Vt(3055),
      aV = Vt(39232),
      MV = Vt(4980),
      bV = Vt(2458);
    const JV = bV.u.KeysDisabled | bV.u.LookFrozen | bV.u.ClicksSuppressed,
      CV = NV.e;
    var uV = (0, yV.b)("resumingConn");
    class KV {
      constructor(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.shell = tt, this.now = et, this.session = void 0, this.attempt = null, this.landed = null, this.initialInfoConn = 0, this.initialInfoOffer = !1, this.completedEarlyConn = 0, Object.defineProperty(this, uV, {
          writable: !0,
          value: 0
        }), this.drops = 0, this.session = new aV.c({
          reconnect: tt => this.reconnect(tt),
          isLive: () => tt.isLive(),
          onReconnected: et => {
            this.landed = et, tt.onReconnected(et), this.landIfResumed()
          },
          onGaveUp: (et, Vt) => {
            this.abortAttempt(), tt.onGaveUp(et, Vt)
          },
          freeze: et => {
            tt.oW(et), (0, MV.g)(JV, et ? JV : 0, "reconnectFreeze")
          },
          releaseSeat: tt => {
            this.releaseSeat(tt)
          }
        })
      }
      isResuming() {
        return this.session.isResuming()
      }
      get resumingConn() {
        return (0, wV.e)(this, uV)[uV]
      }
      canHoldSeat() {
        return this.session.canHoldSeat()
      }
      onInitialInfo(tt) {
        let {
          conn: et,
          graceMs: Vt,
          sessionBased: Ot,
          replayOffer: qt
        } = tt;
        this.session.onInitialInfo(Vt, Ot), this.isResuming() && (this.initialInfoConn = et, this.initialInfoOffer = qt, this.landIfResumed())
      }
      onResumeComplete(tt) {
        0 !== tt && (tt === (0, wV.e)(this, uV)[uV] ? ((0, wV.e)(this, uV)[uV] = 0, this.session.onResumed()) : this.isResuming() && (this.completedEarlyConn = tt))
      }
      onDropped(tt) {
        this.drops++, this.landed = null, this.initialInfoConn = 0, this.initialInfoOffer = !1, this.completedEarlyConn = 0, (0, wV.e)(this, uV)[uV] = 0, this.session.onConnectionLost(tt)
      }
      leave() {
        this.session.leave(), this.dispose()
      }
      dispose() {
        this.abortAttempt(), this.landed = null, this.completedEarlyConn = 0, (0, wV.e)(this, uV)[uV] = 0, this.session.end()
      }
      reconnect(tt) {
        const et = this.attempt;
        if (null !== et && this.awaitingJoinRoom(et)) return et.result;
        this.abortAttempt();
        const Vt = new AbortController,
          Ot = this.drops,
          qt = {
            attachedAt: null
          },
          Dt = this.shell.reconnect(tt, Vt.signal, (() => {
            qt.attachedAt = this.now()
          })).then((tt => {
            if (this.clearAttempt(mt), this.drops !== Ot) throw new Error("the resumed room dropped before its attempt settled");
            return tt
          }), (tt => {
            throw this.clearAttempt(mt), tt
          })),
          mt = {
            abort: Vt,
            socket: qt,
            result: Dt
          };
        return this.attempt = mt, Dt
      }
      clearAttempt(tt) {
        this.attempt === tt && (this.attempt = null)
      }
      abortAttempt() {
        let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new DOMException("the reconnect attempt was given up", "AbortError");
        const et = this.attempt;
        this.attempt = null, null === et || void 0 === et || et.abort.abort(tt)
      }
      awaitingJoinRoom(tt) {
        const et = tt.socket.attachedAt;
        return null !== et && this.now() - et < CV
      }
      releaseSeat(tt) {
        const et = this.attempt,
          Vt = null !== et && this.awaitingJoinRoom(et);
        this.abortAttempt(new At.s), Vt || this.shell.releaseSeat(tt)
      }
      landIfResumed() {
        const tt = this.landed;
        if (null !== tt && tt.conn === this.initialInfoConn) {
          const et = this.initialInfoOffer && this.completedEarlyConn !== tt.conn;
          if (this.landed = null, this.initialInfoConn = 0, this.initialInfoOffer = !1, this.completedEarlyConn = 0, this.abortAttempt(), !et) return void this.session.onResumed();
          (0, wV.e)(this, uV)[uV] = tt.conn, this.session.onResuming()
        }
      }
    }
    var hV = Vt(39241),
      vV = Vt(41095),
      WV = Vt(36720),
      SV = Vt(36715),
      cV = Vt(2219),
      RV = Vt(1993),
      IV = Vt(4415),
      PV = Vt(40933),
      ZV = Vt(5235);

    function LV(tt) {
      let {
        pack: et,
        gameSource: Vt
      } = tt;
      if (null !== Vt && "" !== Vt) return `game:${Vt}`;
      if (null === et) return "default";
      const {
        id: Ot,
        version: qt
      } = et.metaData;
      if (Ot !== cV.p.CUSTOM) return `${Ot}@${qt}`;
      const Dt = [];
      for (const mt of [et.textureOverrides, et.modelOverrides, et.animations])
        for (const [tt, et] of Object.entries(null !== mt && void 0 !== mt ? mt : {})) Dt.push(`${tt}:${et.length}`);
      return `${Ot}:${(0,RV.w)(Dt.join())}`
    }
    var FV = Vt(4554),
      kV = Vt(3314),
      GV = Vt(41098),
      zV = Vt(730),
      oV = Vt(3318),
      rV = Vt(106),
      UV = Vt(4637),
      AV = Vt(39),
      iV = Vt(4428),
      YV = Vt(40996),
      BV = Vt(4584),
      pV = Vt(2465),
      xV = Vt(1732),
      TV = Vt(1764),
      gV = Vt(1387),
      sV = Vt(129),
      nV = Vt(348),
      tO = Vt(39282),
      eO = Vt(2471),
      VO = Vt(4974);
    const OO = new Set([ge.Fb.KeyDown, ge.Fb.MouseMove, ge.Fb.MouseDown, ge.Fb.Wheel, ge.Fb.TouchStart, ge.Fb.TouchMove]);

    function qO(tt) {
      return (tt.shiftKey ? ge.Xb.Shift : 0) | (tt.ctrlKey ? ge.Xb.Ctrl : 0) | (tt.altKey ? ge.Xb.Alt : 0) | (tt.metaKey ? ge.Xb.Meta : 0) | ("repeat" in tt && tt.repeat ? ge.Xb.Repeat : 0) | (tt.isTrusted ? 0 : ge.Xb.Untrusted | function(tt) {
        try {
          const {
            editable: et,
            outsideView: Vt
          } = (0, tO.d)(tt.target);
          return (et ? ge.Xb.UntrustedEditable : 0) | (Vt ? ge.Xb.UntrustedOutsideView : 0)
        } catch {
          return 0
        }
      }(tt))
    }

    function DO(tt) {
      return "touchOnly" !== (0, sV.d)() && "function" === typeof tt.requestPointerLock
    }

    function mO(tt) {
      return 0 === tt.button ? tt.altKey ? VO.h["Alt+Left Click"] : VO.h.Mouse1 : 1 === tt.button ? VO.h.Mouse2 : VO.h.Mouse3
    }
    const dO = new Set(["AltLeft", "AltRight", "ArrowUp", "ArrowDown"]),
      jO = new Map([
        ["AltLeft", "altKey"],
        ["AltRight", "altKey"],
        ["ControlLeft", "ctrlKey"],
        ["ControlRight", "ctrlKey"],
        ["ShiftLeft", "shiftKey"],
        ["ShiftRight", "shiftKey"],
        ["MetaLeft", "metaKey"],
        ["MetaRight", "metaKey"]
      ]),
      HO = 32768,
      XO = 1;

    function QO(tt) {
      return Math.min(Math.max(Math.round(tt), 0), 65535)
    }

    function lO(tt, et, Vt) {
      const Ot = [],
        qt = (tt, et, Vt, qt) => {
          const Dt = tt => {
            (0, TV.p)(tt) || Vt(tt)
          };
          tt.addEventListener(et, Dt, qt), Ot.push((() => {
            tt.removeEventListener(et, Dt, qt)
          }))
        },
        Dt = {
          capture: !0,
          passive: !0
        },
        mt = (tt, Vt, Ot, qt, Dt) => (!(0, eO.e)() || !OO.has(tt)) && (et(tt, Vt, Ot, qt, Dt), !0),
        dt = () => document.pointerLockElement === tt,
        jt = (0, nV.f)(),
        Ht = tt => {
          tt.ctrlKey && Vt.ctrlCombosAreGames() && !(0, MV.f)(tt.target) && tt.preventDefault()
        },
        Xt = (tt, Ot, qt) => {
          Vt.inspect(tt, Ot, !1), et(ge.Fb.KeyUp, Ot, 0, 0, (0, pV.r)(qt, tt.timeStamp)), Vt.keyReleased(Ot)
        },
        Qt = new Map,
        lt = (tt, et, Vt) => tt[Vt] || ("AltRight" === et || "ControlLeft" === et) && tt.getModifierState("AltGraph"),
        Et = new Map,
        ft = () => {
          Qt.clear(), Et.clear()
        },
        wt = tt => {
          if (tt.isTrusted && document.hasFocus())
            for (const [et, Vt] of Et) Et.delete(et), lt(tt, et, Vt) || (Qt.delete(et), Xt(tt, VO.h[et], qO(tt)))
        };
      tt.tabIndex = -1;
      let yt = 0,
        Nt = 0;
      const Mt = () => {
        const et = tt.getBoundingClientRect();
        yt = et.left, Nt = et.top
      };
      let bt = "mouse";
      const Jt = () => !dt() && ("mouse" === bt || !Vt.touchUiShown()),
        Ct = (tt, et, Vt) => {
          const Ot = (QO(tt.clientX - yt) | QO(tt.clientY - Nt) << 16) >>> 0;
          mt(ge.Fb.MouseMove, ge.$b.Point, et, Vt, Ot)
        };
      let ut = !1,
        Kt = 0;
      const ht = () => {
        ut && (ut = !1, Vt.viewShown() && (0, Fe.Y)())
      };
      Ot.push((() => {
        clearTimeout(Kt)
      })), qt(window, "keydown", (tt => {
        "Escape" === tt.key ? (0, Fe.O)(!0) : tt.repeat || (0, MV.f)(tt.target) || (ut = !0, clearTimeout(Kt), Kt = window.setTimeout(ht, 0))
      }), Dt), qt(window, "keydown", (tt => {
        ht(), Ht(tt), wt(tt);
        const et = VO.h[tt.code];
        if ("number" !== typeof et || !Vt.viewShown()) return;
        const Ot = (0, MV.f)(tt.target);
        Ot || !Vt.prevents(et) && !dO.has(tt.code) || tt.preventDefault(), tt.repeat || Vt.inspect(tt, et, !0), mt(ge.Fb.KeyDown, et, 0, 0, (0, pV.r)(qO(tt), tt.timeStamp)) && Qt.set(tt.code, et), Ot || Vt.keyPressed(et)
      }), {
        capture: !1,
        passive: !1
      }), qt(window, "keyup", (tt => {
        "Escape" === tt.key && (0, Fe.O)(!1), Ht(tt), Qt.delete(tt.code), Et.delete(tt.code), wt(tt);
        const et = VO.h[tt.code];
        "number" === typeof et && Xt(tt, et, qO(tt))
      }), {
        capture: !0,
        passive: !1
      }), qt(window, "mousemove", (tt => {
        "mouse" === bt && Jt() ? Ct(tt, tt.movementX, tt.movementY) : dt() ? mt(ge.Fb.MouseMove, ge.$b.Stamped, tt.movementX, tt.movementY, (0, pV.r)(0, tt.timeStamp)) : mt(ge.Fb.MouseMove, 0, tt.movementX, tt.movementY, 0)
      }), Dt);
      let vt = 0,
        Wt = 0;
      const St = [];
      let ct = !1,
        Rt = !1;
      qt(tt, "mousedown", (tt => {
        if ((0, eO.e)()) return;
        wt(tt);
        const Ot = 1 << tt.button;
        if (!dt() && (0, Fe.X)() && (0, Fe.h)() && (Rt = !0, !ct)) return void(vt |= Ot);
        vt &= ~Ot;
        const qt = tt.button <= 2 ? mO(tt) : void 0;
        void 0 !== qt && (St[tt.button] = qt, Vt.inspect(tt, qt, !0)), Jt() && Ct(tt, 0, 0), et(ge.Fb.MouseDown, tt.button, tt.clientX, tt.clientY, (0, pV.r)(qO(tt), tt.timeStamp)), Wt |= Ot, void 0 !== qt && Vt.keyPressed(qt)
      }), Dt), qt(window, "mouseup", (tt => {
        var Ot;
        wt(tt);
        const qt = 1 << tt.button,
          Dt = 0 !== (vt & ~Wt & qt);
        if (vt &= ~qt, Wt &= ~qt, Dt) return;
        const mt = tt.button <= 2 ? null !== (Ot = St[tt.button]) && void 0 !== Ot ? Ot : mO(tt) : void 0;
        void 0 !== mt && Vt.inspect(tt, mt, !1), et(ge.Fb.MouseUp, tt.button, tt.clientX, tt.clientY, (0, pV.r)(qO(tt), tt.timeStamp)), void 0 !== mt && Vt.keyReleased(mt)
      }), Dt), qt(tt, "contextmenu", (tt => {
        tt.preventDefault()
      }), {
        passive: !1
      });
      const It = tt => {
        (dt() || (0, Fe.s)() && (0, gV.r)()) && (tt.ctrlKey || jt && !document.fullscreenElement) && tt.preventDefault()
      };
      qt(tt, "wheel", (tt => {
        It(tt), wt(tt), mt(ge.Fb.Wheel, tt.deltaMode, tt.deltaX, tt.deltaY, 0)
      }), {
        capture: !0,
        passive: !1
      });
      const Pt = {
          capture: !0,
          passive: !1
        },
        Zt = tt => {
          tt ? window.addEventListener("wheel", It, Pt) : window.removeEventListener("wheel", It, Pt)
        };
      Zt((0, Fe.s)()), Ot.push((0, Fe.B)(Zt)), Ot.push((() => {
        Zt(!1)
      }));
      const Lt = new Map,
        Ft = new Set,
        kt = tt => {
          const et = "stylus" === tt.touchType;
          for (const Vt of Lt.values())
            if (!Vt.touched && (et || Math.abs(tt.clientX - Vt.x) <= XO && Math.abs(tt.clientY - Vt.y) <= XO)) return Vt.touched = !0, !0;
          return !1
        },
        Gt = tt => 32767 & tt,
        zt = new Set,
        ot = tt => Vt => {
          const Ot = (0, pV.r)(qO(Vt), Vt.timeStamp);
          tt !== ge.Fb.TouchStart && tt !== ge.Fb.TouchMove || ((tt, Vt) => {
            const Ot = tt.touches;
            if (Ot)
              for (const qt of zt) {
                let tt = !1;
                for (let et = 0; et < Ot.length && !tt; et++) tt = Gt(Ot[et].identifier) === qt;
                tt || (zt.delete(qt), et(ge.Fb.TouchCancel, qt, 0, 0, Vt))
              }
          })(Vt, Ot);
          const qt = Vt.changedTouches;
          for (let et = 0; et < qt.length; et++) {
            const Vt = qt[et];
            if (tt === ge.Fb.TouchStart && kt(Vt) && Ft.add(Vt.identifier), Ft.has(Vt.identifier)) {
              tt !== ge.Fb.TouchEnd && tt !== ge.Fb.TouchCancel || Ft.delete(Vt.identifier);
              continue
            }
            const Dt = Gt(Vt.identifier),
              dt = mt(tt, Dt, Vt.clientX - yt, Vt.clientY - Nt, Ot);
            tt === ge.Fb.TouchStart ? dt && zt.add(Dt) : tt !== ge.Fb.TouchMove && zt.delete(Dt)
          }
        },
        rt = ot(ge.Fb.TouchStart);
      qt(tt, "touchstart", (tt => {
        tt.preventDefault(), (0, eO.e)() || (Vt.touchStarting(), rt(tt))
      }), {
        passive: !1
      }), qt(tt, "touchmove", ot(ge.Fb.TouchMove), Dt), qt(tt, "touchend", ot(ge.Fb.TouchEnd), Dt), qt(tt, "touchcancel", ot(ge.Fb.TouchCancel), Dt);
      const Ut = tt => HO | 32767 & tt,
        At = (tt, et) => {
          mt(tt, Ut(et.pointerId), et.clientX - yt, et.clientY - Nt, (0, pV.r)(qO(et), et.timeStamp))
        };
      qt(window, "pointerdown", (et => {
        bt = et.pointerType, "mouse" === et.pointerType && et.target !== tt && Vt.viewShown() && (0, Fe.$)()
      }), Dt), qt(tt, "pointerdown", (tt => {
        "pen" === tt.pointerType && 0 === tt.button && (0, Fe.s)() && (0, gV.r)() && (tt.preventDefault(), (0, eO.e)() || (Lt.set(tt.pointerId, {
          x: tt.clientX,
          y: tt.clientY,
          touched: !1
        }), Vt.touchStarting(), At(ge.Fb.TouchStart, tt)))
      }), {
        passive: !1
      }), qt(window, "pointermove", (tt => {
        bt = tt.pointerType, Lt.has(tt.pointerId) && At(ge.Fb.TouchMove, tt), "mouse" !== tt.pointerType && Jt() && Ct(tt, 0, 0)
      }), Dt);
      const it = tt => et => {
        Lt.delete(et.pointerId) && At(tt, et)
      };
      qt(window, "pointerup", it(ge.Fb.TouchEnd), Dt), qt(window, "pointercancel", it(ge.Fb.TouchCancel), Dt);
      let Yt = 0;
      const Bt = () => {
          Yt = 0, Mt(), Vt.resized()
        },
        pt = () => {
          const tt = Vt.sizeCanvas();
          null !== tt && et(ge.Fb.Resize, 0, tt.cssWidth, tt.cssHeight, (0, pV.i)(tt.renderScale)), Mt(), Vt.resized(), 0 === Yt && (Yt = requestAnimationFrame(Bt))
        };
      qt(window, "resize", pt, Dt), Ot.push(Vt.watchRenderScale(pt)), Ot.push((() => {
        cancelAnimationFrame(Yt)
      })), qt(window, "focus", (tt => {
        tt.isTrusted && (et(ge.Fb.Focus, 0, 0, 0, 0), Vt.viewShown() && (0, Fe.$)())
      }), {
        passive: !0
      });
      const xt = () => {
          (0, Fe.O)(!1), vt = 0
        },
        Tt = () => {
          zt.clear(), Lt.clear(), Ft.clear()
        };
      let gt = 0,
        st = 0;
      qt(window, "blur", (Ot => {
        xt(), (0, Fe.o)();
        for (const tt of Qt.keys()) {
          const et = jO.get(tt);
          void 0 !== et && Et.set(tt, et)
        }
        Ot.isTrusted && ((tt => {
          for (const [Vt, Ot] of Lt) et(ge.Fb.TouchCancel, Ut(Vt), Ot.x, Ot.y, (0, pV.r)(0, tt));
          Lt.clear()
        })(Ot.timeStamp), et(ge.Fb.Blur, ge.p.KeepTouches, 0, 0, 0)), jt && Ot.isTrusted && (clearTimeout(st), st = window.setTimeout((() => {
          if (!document.hasFocus()) {
            for (const tt of Qt.values()) Xt(Ot, tt, 0);
            ft()
          }
        }), 0)), clearTimeout(gt), gt = window.setTimeout((() => {
          document.activeElement instanceof HTMLIFrameElement && (0, gV.r)() && Vt.viewShown() && tt.focus({
            preventScroll: !0
          })
        }), 0)
      }), {
        passive: !0
      }), Ot.push((() => {
        clearTimeout(gt), clearTimeout(st)
      })), qt(window, "mousedown", (et => {
        jt && et.isTrusted && !document.hasFocus() && (0, gV.r)() && Vt.viewShown() && (window.focus(), tt.focus({
          preventScroll: !0
        }))
      }), Dt), qt(document, "visibilitychange", (() => {
        document.hidden ? (et(ge.Fb.Blur, 0, 0, 0, 0), Tt()) : document.hasFocus() && et(ge.Fb.Focus, 0, 0, 0, 0)
      }), {
        passive: !0
      }), Ot.push((0, eO.k)((() => {
        xt(), et(ge.Fb.Blur, ge.p.Release, 0, 0, 0), Vt.keysReleased(), ft(), Wt = 0, Tt(), et(ge.Fb.Joystick, 0, 0, 0, 0), document.hasFocus() && et(ge.Fb.Focus, 0, 0, 0, 0)
      })));
      const nt = !Vt.canLock(),
        te = () => nt && !(0, Fe.s)() ? ge.yc.Lockless : ge.yc.Released,
        ee = () => {
          dt() && (ct = !1, Rt = !1), et(ge.Fb.PointerLock, dt() ? ge.yc.Locked : te(), 0, 0, 0), (0, Fe.T)(dt())
        };
      return qt(document, "pointerlockchange", ee, {
        passive: !0
      }), qt(document, "pointerlockerror", (() => {
        ct ||= Rt, Rt = !1, (0, Fe.x)()
      }), {
        passive: !0
      }), nt && Ot.push((0, Fe.B)((() => {
        et(ge.Fb.PointerLock, te(), 0, 0, 0)
      }))), pt(), et(document.hasFocus() ? ge.Fb.Focus : ge.Fb.Blur, 0, 0, 0, 0), ee(), () => {
        for (const tt of Ot.splice(0)) tt()
      }
    }
    var EO = Vt(34326),
      fO = Vt(34317),
      wO = Vt(2078);
    const yO = new Map(VO.c.map(((tt, et) => [tt, et]))),
      NO = ["jump", "primary-fire", "alt-fire"],
      aO = ["primary-fire", "alt-fire"];

    function MO(tt) {
      return `${wO.b}${tt}`
    }
    const bO = ["forward", "backward", "left", "right", "sprint", "jump"];

    function JO(tt) {
      const et = [];
      for (const Vt of tt) {
        const tt = "string" === typeof Vt ? VO.h[Vt] : void 0;
        "number" === typeof tt && et.push(tt)
      }
      return et
    }
    class CO {
      constructor() {
        this.keys = new Map, this.preventKeys = new Set, this.movementKeys = new Set, this.checkedDown = new Set, this.checkedUp = new Set;
        for (const [tt, et] of Object.entries(VO.e)) this.keys.set(tt, et);
        this.updateKeySets()
      }
      prevents(tt) {
        return this.preventKeys.has(tt)
      }
      moves(tt) {
        return this.movementKeys.has(tt)
      }
      checks(tt, et) {
        return (et ? this.checkedDown : this.checkedUp).has(tt)
      }
      sync(tt, et) {
        for (const [Vt, Ot] of this.keys) {
          const qt = tt(MO(Vt)),
            Dt = Array.isArray(qt) ? JO(qt) : VO.e[Vt];
          (Dt.length !== Ot.length || Dt.some(((tt, et) => tt !== Ot[et]))) && this.bind(Vt, Dt, et)
        }
      }
      bind(tt, et, Vt) {
        const Ot = yO.get(tt);
        if (void 0 !== Ot) {
          Vt(ge.Fb.Binding, 0, 0, 0, Ot | ge.l.Clear << 8);
          for (const Dt of [...et, ...null !== (qt = VO.g[tt]) && void 0 !== qt ? qt : []]) {
            var qt;
            Vt(ge.Fb.Binding, Dt, 0, 0, Ot | ge.l.Add << 8)
          }
          this.keys.set(tt, et), this.updateKeySets()
        }
      }
      updateKeySets() {
        this.preventKeys.clear();
        for (const Ot of VO.i)
          for (const et of null !== (tt = this.keys.get(VO.c[Ot])) && void 0 !== tt ? tt : []) {
            var tt;
            this.preventKeys.add(et)
          }
        this.movementKeys.clear();
        for (const Ot of bO)
          for (const tt of null !== (et = this.keys.get(Ot)) && void 0 !== et ? et : []) {
            var et;
            this.movementKeys.add(tt)
          }
        for (const [Ot, qt] of [
            [this.checkedDown, NO],
            [this.checkedUp, aO]
          ]) {
          Ot.clear();
          for (const tt of qt)
            for (const et of null !== (Vt = this.keys.get(tt)) && void 0 !== Vt ? Vt : []) {
              var Vt;
              Ot.add(et)
            }
        }
      }
    }
    var uO = Vt(4971),
      KO = Vt(36839);
    const hO = "[bloxd-wasm-client]";

    function vO() {
      return "inGame" === ee.b.get("gameState") && !(0, xV.u)()
    }
    let WO = null;

    function SO(tt, et) {
      WO && et.writePendingInput() && WO.push(function(tt, et) {
        let Vt = "";
        for (const Ot of et) Vt += Ot.toString(16).padStart(2, "0");
        return Vt ? `${tt} ${Vt}` : String(tt)
      }(tt, et.rings.input.written()))
    }
    const cO = [];

    function RO(tt, et, Vt, Ot) {
      tt === ge.db.InputAction && Ot === ge.yb && cO.push(et.getUint32(Vt, !0))
    }
    var IO = Vt(41106),
      PO = Vt(1289),
      ZO = Vt(37078);
    const LO = {
      general: {
        ok: "OK",
        tryAgain: "Try Again",
        back: "Back",
        reload: "Reload",
        reconnect: "Rejoin"
      },
      wasmScreens: PO.wasmScreens
    };

    function FO(tt) {
      var et, Vt;
      let Ot = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const [qt, Dt] = tt.split(":");
      return (null !== (et = null === (Vt = LO[qt]) || void 0 === Vt ? void 0 : Vt[Dt]) && void 0 !== et ? et : tt).replace(/\{\{(\w+)\}\}/g, ((tt, et) => {
        var Vt;
        return null !== (Vt = Ot[et]) && void 0 !== Vt ? Vt : tt
      }))
    }

    function kO(tt, et) {
      (0, BV.c)();
      const Vt = document.createElement("div");
      Vt.setAttribute("role", "alertdialog"), Vt.style.cssText = "position:fixed;top:0;right:0;bottom:0;left:0;z-index:100;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,0.7);font:16px sans-serif;color:#fff";
      const Ot = document.createElement("div");
      Ot.style.cssText = "max-width:28rem;padding:1.5rem;background:#1c2333;text-align:center";
      const qt = document.createElement("h2");
      qt.textContent = FO(tt.title);
      const Dt = document.createElement("p");
      if (Dt.textContent = FO(tt.help, tt.helpValues), Dt.style.whiteSpace = "pre-line", Ot.append(qt, Dt), tt.discordLink) {
        const tt = document.createElement("a");
        tt.href = ZO.d, tt.target = "_blank", tt.rel = "noreferrer", tt.style.color = "#8ab4ff", tt.textContent = FO("wasmScreens:reportOnDiscord"), Ot.append(tt)
      }
      const mt = document.createElement("div");
      return mt.style.cssText = "display:flex;gap:1rem;justify-content:center;margin-top:1.5rem", Ot.append(mt), Vt.append(Ot), document.body.append(Vt), new Promise((Ot => {
        const qt = tt => {
            null === et || void 0 === et || et.removeEventListener("abort", Dt), Vt.remove(), Ot(tt)
          },
          Dt = () => {
            qt(!1)
          };
        null === et || void 0 === et || et.addEventListener("abort", Dt, {
          once: !0
        });
        const dt = (tt, et) => {
          const Vt = document.createElement("button");
          Vt.textContent = FO(tt), Vt.style.cssText = "padding:0.5rem 1.25rem;font:inherit", Vt.addEventListener("click", (() => {
            qt(et)
          })), mt.append(Vt)
        };
        null !== tt.cancel && dt(tt.cancel, !1), dt(tt.confirm, !0)
      }))
    }
    var GO = Vt(312),
      zO = Vt(146);
    const oO = new Set(["android", "ios"]);
    let rO = null;

    function UO() {
      return rO ??= function() {
        let tt = null;
        try {
          var et, Vt, Ot;
          const qt = document.createElement("canvas"),
            Dt = {
              powerPreference: zO.e
            };
          if (tt = null !== (et = qt.getContext("webgl2", Dt)) && void 0 !== et ? et : qt.getContext("webgl", Dt), !tt) return null;
          const mt = tt.getExtension("WEBGL_debug_renderer_info");
          if (!mt) return "unknown";
          const dt = String(null !== (Vt = tt.getParameter(mt.UNMASKED_RENDERER_WEBGL)) && void 0 !== Vt ? Vt : "");
          return "" === dt ? "unknown" : (0, GO.h)(String(null !== (Ot = tt.getParameter(mt.UNMASKED_VENDOR_WEBGL)) && void 0 !== Ot ? Ot : ""), dt)
        } catch {
          return null
        } finally {
          try {
            var qt, Dt;
            null === (qt = tt) || void 0 === qt || null === (Dt = qt.getExtension("WEBGL_lose_context")) || void 0 === Dt || Dt.loseContext()
          } catch {}
        }
      }(), rO
    }

    function AO(tt) {
      const et = (0, rV.pageOperatingSystem)();
      return null === et ? null : function(tt, et, Vt) {
        const Ot = "software_adapter" === tt.reason ? null : tt.adapter,
          qt = null === Ot || "" === Ot.vendor ? null : (0, GO.e)(Ot.vendor, Ot.architecture);
        return null !== qt && "other_intel" !== qt ? qt : oO.has(et) ? null : Vt()
      }(tt, et, UO)
    }
    const iO = 6e4,
      YO = 3e5;
    var BO = Vt(3718);
    var pO = Vt(41115),
      xO = Vt(736),
      TO = Vt(17);

    function gO(tt, et) {
      const Vt = TO.ub.encode(et);
      ! function(tt, et) {
        let Vt = et >= 0 ? 2 * et : 2 * -et - 1;
        for (; Vt >= 128;) tt.push(Vt % 128 | 128), Vt = Math.floor(Vt / 128);
        tt.push(Vt)
      }(tt, Vt.length);
      for (const Ot of Vt) tt.push(Ot)
    }
    let sO, nO, tq;
    (() => {
      const tt = [0, "r", void 0, 2, 74, 4, 5, "a", 1023, 1, 65536, 10, 55296, 56320, "length", 6, 12, 63, 128, "c", "b", 192, "Invalid byte index", 161, 255, 224, 31, "Invalid continuation byte", 240, 15, 3, 7, 18, !1, "resolv", "e", "then", "postCo", "okies", 16, 8, "y_40Ab", "4", 512, 242, "012345", 65, 64, "d", 44, 56319, 57343, 65535, 151, 32, 24, 19, 204, 66, 243, 64512, 246, 60, 175, "Lone s", "urroga", "te U+", " is no", "t a sc", "alar v", "alue", 4294967168, 4294965248, 4294901760, 4292870144, 217, 200, 73, 2048, 248, 1114111, "Invalid UTF-8 detected", "3.0.0", "undefi", "ned", "No redacted path provided", "--version", "-v", " (stan", "dalone", ")", " (loca", "l)", !0, 256, 55, "(c=ak(<~F$", "VU'9f)~><&", "85dBPL-mod", "ule/from", "?", "s", 108, 190, 83, 159, "f", 162, 112, "Block ", "image "];

      function et() {}
      const Ot = (0, TO[tt[1]])("aGFyZHdhcmVDb25jdXJyZW5jeQ=="),
        qt = (0, TO[tt[1]])("QkFCWUxPTg=="),
        Dt = (0, TO[tt[1]])("QW5kZXNpdGU="),
        mt = (0, TO[tt[1]])("U21vb3RoIEdyYW5pdGU="),
        dt = (0, TO[tt[1]])("RGlvcml0ZQ=="),
        jt = async (Ot, qt, Dt, mt) => {
          "GByk4u" in et && function() {
            ! function(et) {
              var Vt, Ot, qt, Dt = String.fromCharCode;

              function mt(...et) {
                for (Xt(et[tt[14]] = tt[9], et[tt[7]] = [], et[tt[3]] = tt[0], et[tt[4]] = et[tt[0]].length, et[tt[5]] = tt[2], et[tt[6]] = tt[2]); et[tt[3]] < et[tt[4]];) Xt(et[tt[5]] = et[tt[0]].charCodeAt(et[tt[3]]++), et[tt[5]] >= tt[12] && et[tt[5]] <= tt[50] && et[tt[3]] < et[tt[4]] ? (et[tt[6]] = et[tt[0]].charCodeAt(et[tt[3]]++), (et[tt[6]] & tt[60]) == tt[13] ? et[tt[7]].push(((et[tt[5]] & tt[8]) << tt[11]) + (et[tt[6]] & tt[8]) + tt[10]) : (et[tt[7]].push(et[tt[5]]), et[tt[3]]--)) : et[tt[7]].push(et[tt[5]]));
                return et[tt[7]]
              }

              function dt(et) {
                var Vt, Ot, qt, mt = et.length;
                for (Xt(Vt = -tt[9], Ot = void 0, qt = ""); ++Vt < mt;)(Ot = et[Vt]) > tt[52] && Xt(Ot -= tt[10], qt += Dt(Ot >>> tt[11] & tt[8] | tt[12]), Ot = tt[13] | Ot & tt[8]), qt += Dt(Ot);
                return qt
              }

              function jt(...et) {
                if (et[tt[14]] = tt[9], et[tt[0]] >= tt[12] && et[tt[0]] <= tt[51]) throw Error(tt[64] + tt[65] + tt[66] + et[tt[0]].toString(tt[39]).toUpperCase() + (tt[67] + tt[68] + tt[69] + tt[70]))
              }

              function Ht(...et) {
                return et[tt[14]] = tt[3], Dt(et[tt[0]] >> et[tt[9]] & tt[17] | tt[18])
              }

              function Qt(et) {
                var Vt;
                return (et & tt[71]) == tt[0] ? Dt(et) : (Vt = "", (et & tt[72]) == tt[0] ? Vt = Dt(et >> tt[15] & tt[26] | tt[21]) : (et & tt[73]) == tt[0] ? Xt(jt(et), Vt = Dt(et >> tt[16] & tt[29] | tt[25]), Vt += Ht(et, tt[15])) : (et & tt[74]) == tt[0] && Xt(Vt = Dt(et >> tt[32] & tt[31] | tt[28]), Vt += Ht(et, tt[16]), Vt += Ht(et, tt[15])), Vt += Dt(et & tt[17] | tt[18]))
              }

              function lt(...et) {
                for (Xt(et[tt[14]] = tt[9], et[tt[7]] = mt(et[tt[0]]), et[tt[20]] = et[tt[7]].length, et[tt[19]] = -tt[9], et[tt[5]] = tt[2], et[tt[6]] = ""); ++et[tt[19]] < et[tt[20]];) Xt(et[tt[5]] = et[tt[7]][et[tt[19]]], et[tt[6]] += Qt(et[tt[5]]));
                return et[tt[6]]
              }

              function Et() {
                var et;
                if (qt >= Ot) throw Error(tt[22]);
                if (Xt(et = Vt[qt] & tt[24], qt++), (et & tt[21]) == tt[18]) return et & tt[17];
                throw Error(tt[27])
              }

              function ft(...et) {
                if (Xt(et[tt[14]] = tt[0], et[tt[23]] = tt[2], et[tt[9]] = tt[2], et[tt[3]] = tt[2], et[tt[30]] = tt[2], et[tt[5]] = tt[2]), qt > Ot) throw Error(tt[22]);
                if (qt == Ot) return tt[33];
                if (Xt(et[tt[23]] = Vt[qt] & tt[24], qt++), (et[tt[23]] & tt[18]) == tt[0]) return et[tt[23]];
                if ((et[tt[23]] & tt[25]) == tt[21]) {
                  if (Xt(et[tt[9]] = Et(), et[tt[5]] = (et[tt[23]] & tt[26]) << tt[15] | et[tt[9]]), et[tt[5]] >= tt[18]) return et[tt[5]];
                  throw Error(tt[27])
                }
                if ((et[tt[23]] & tt[28]) == tt[25]) {
                  if (Xt(et[tt[9]] = Et(), et[tt[3]] = Et(), et[tt[5]] = (et[tt[23]] & tt[29]) << tt[16] | et[tt[9]] << tt[15] | et[tt[3]]), et[tt[5]] >= tt[78]) return jt(et[tt[5]]), et[tt[5]];
                  throw Error(tt[27])
                }
                if ((et[tt[23]] & tt[79]) == tt[28] && (Xt(et[tt[9]] = Et(), et[tt[3]] = Et(), et[tt[30]] = Et(), et[tt[5]] = (et[tt[23]] & tt[31]) << tt[32] | et[tt[9]] << tt[16] | et[tt[3]] << tt[15] | et[tt[30]]), et[tt[5]] >= tt[10] && et[tt[5]] <= tt[80])) return et[tt[5]];
                throw Error(tt[81])
              }

              function wt(...et) {
                for (Xt(et[tt[14]] = tt[9], Vt = mt(et[tt[0]]), Ot = Vt.length, qt = tt[0], et[tt[9]] = [], et[tt[3]] = tt[2]);
                  (et[tt[3]] = ft()) !== tt[33];) et[tt[9]].push(et[tt[3]]);
                return dt(et[tt[9]])
              }
              Xt(Vt = void 0, Ot = void 0, qt = void 0), Xt(et.version = tt[82], et.encode = lt, et.decode = wt)
            }(typeof exports === tt[83] + tt[84] ? this.utf8 = {} : exports)
          }();
          const [{
            clientSideServerUrls: dt
          }, {
            HttpPayloadType: jt,
            postJsonWithMetricsCookiesAndCustomResponse: Ht
          }] = await Promise.all([Promise[tt[34] + tt[35]]()[tt[36]](((...Ot) => (Ot[tt[14]] = tt[0], "eXMfK7" in et && (module.exports = async (et = () => {
            throw new Error(tt[85])
          }) => {
            const Vt = new Set(process.argv.slice(tt[3]));
            if (!Vt.has(tt[86])) {
              if (Vt.size !== tt[9]) return tt[33];
              if (!Vt.has(tt[87])) return tt[33]
            }
            return await (async () => void 0 === await et() ? tt[91] + tt[92] : "")(), tt[93]
          }), Vt(1293)))), Promise[tt[34] + tt[35]]()[tt[36]]((() => Vt(1223)))]), Qt = dt.getHttpUrlFromWebSocketUrl(Ot.endpoint), lt = null === Ot[tt[37] + tt[38]] ? tt[2] : await Ot[tt[37] + tt[38]]();
          await Ht("" + Qt + qt, Dt, {
            ["retrie" + tt[101]]: mt
          }, jt.blob, lt)
        };
      sO = async (Vt, Ot) => {
        "EnZ6DcQ" in et && function() {
          var et, Vt, Ot = tt[96] + tt[97] + tt[98] + tt[99];
          Xt(et = "q:function(){var ad=ad=>b(ad-29);if(!T.r[(typeof ab==ad(123)" + tt[100], Vt = "return U[c[c[d(-199)]-b(205)]]||V[ae(b(166))];case T.o[c[c[c[d(-199)]+d(-174)]-(c[b(119)]-(c[d(-199)]-163))]+ae(b(146))](0)==b(167)?d(-130):-d(-144)", Ot.match(et + Vt))
        }();
        const qt = function(tt, et, Vt, Ot) {
          const qt = [];
          gO(qt, tt), gO(qt, et), gO(qt, Vt);
          for (const Dt of Ot) qt.push(Dt);
          return qt
        }(Vt.game, Vt.lobby, (0, xO[tt[20]])(), Ot);
        try {
          function Dt(...et) {
            et[tt[14]] = tt[0]
          }
          "L6HGAUR" in et && Dt(), await jt(Vt, "/persisted/keep-alive", {
            type: "mf",
            data: qt
          }, tt[30])
        } catch (mt) {
          console.warn(mt)
        }
      };
      const Ht = (...Vt) => (Vt[tt[14]] = tt[3], "VzuIOX" in et && function(...et) {
        Xt(et[tt[14]] = tt[0], et[tt[20]] = function(...et) {
          function Vt(...et) {
            return et[tt[14]] = tt[9], jt(mt(lt(et[tt[0]])))
          }

          function Ot(tt, et) {
            return jt(dt(lt(tt), lt(et)))
          }

          function qt(...et) {
            return et[tt[14]] = tt[3], Ht(dt(lt(et[tt[0]]), lt(et[tt[9]])))
          }

          function Dt(...et) {
            return et[tt[14]] = tt[30], Qt(dt(lt(et[tt[0]]), lt(et[tt[9]])), et[tt[3]])
          }

          function mt(...et) {
            return et[tt[14]] = tt[9], ft(Kt(Et(et[tt[0]]), et[tt[0]].length * tt[40]))
          }

          function dt(et, Vt) {
            var Ot, qt, Dt = Et(et);
            Dt.length > tt[39] && (Dt = Kt(Dt, et.length * tt[40]));
            var mt = Array(tt[39]),
              dt = Array(tt[39]);
            for (Ot = tt[0]; Ot < tt[39]; Ot++) Xt(mt[Ot] = 909522486 ^ Dt[Ot], dt[Ot] = 1549556828 ^ Dt[Ot]);
            return qt = Kt(mt.concat(Et(Vt)), tt[43] + Vt.length * tt[40]), ft(Kt(dt.concat(qt), function(et, Vt, Ot) {
              if (et === tt[41] + tt[42]) return Vt + Ot
            }(tt[41] + tt[42], tt[43], tt[94])))
          }

          function jt(...Vt) {
            Vt[tt[14]] = tt[9];
            try {
              et[-tt[44]]
            } catch (Ot) {
              et[-tt[44]] = tt[0]
            }
            for (Xt(Vt[tt[7]] = et[-tt[44]] ? tt[45] + "6789ABCDEF" : tt[45] + "6789abcdef", Vt[tt[47]] = "", Vt[tt[30]] = tt[2]), Vt[-tt[46]] = tt[0]; Vt[-tt[46]] < Vt[tt[0]].length; Vt[-tt[46]]++) Xt(Vt[tt[30]] = Vt[tt[0]].charCodeAt(Vt[-tt[46]]), Vt[tt[47]] += Vt[tt[7]].charAt(Vt[tt[30]] >>> tt[5] & tt[29]) + Vt[tt[7]].charAt(Vt[tt[30]] & tt[29]));
            return Vt[tt[47]]
          }

          function Ht(...Vt) {
            Vt[tt[14]] = tt[9];
            try {
              et[tt[9]]
            } catch (Ot) {
              et[tt[9]] = ""
            }
            for (Xt(Vt[tt[9]] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Vt[tt[20]] = "", Vt[tt[49]] = Vt[tt[0]].length), Vt[tt[48]] = tt[0]; Vt[tt[48]] < Vt[tt[49]]; Vt[tt[48]] += tt[30])
              for (Vt[tt[35]] = Vt[tt[0]].charCodeAt(Vt[tt[48]]) << tt[39] | (Vt[tt[48]] + tt[9] < Vt[tt[49]] ? Vt[tt[0]].charCodeAt(Vt[tt[48]] + tt[9]) << tt[40] : tt[0]) | (Vt[tt[48]] + tt[3] < Vt[tt[49]] ? Vt[tt[0]].charCodeAt(Vt[tt[48]] + tt[3]) : tt[0]), Vt[-tt[15]] = tt[0]; Vt[-tt[15]] < tt[5]; Vt[-tt[15]]++) Vt[tt[48]] * tt[40] + Vt[-tt[15]] * tt[15] > Vt[tt[0]].length * tt[40] ? Vt[tt[20]] += et[tt[9]] : Vt[tt[20]] += Vt[tt[9]].charAt(Vt[tt[35]] >>> tt[15] * (tt[30] - Vt[-tt[15]]) & tt[17]);
            return Vt[tt[20]]
          }

          function Qt(et, Vt) {
            var Ot, qt, Dt, mt, dt, jt, Ht, Qt, lt = Vt.length;
            for (Ot = Array(), qt = Array(Math.ceil(et.length / tt[3])), dt = tt[0]; dt < qt.length; dt++) qt[dt] = et.charCodeAt(dt * tt[3]) << tt[40] | et.charCodeAt(dt * tt[3] + tt[9]);
            for (; qt.length > tt[0];) {
              for (Xt(Qt = Array(), Ht = tt[0]), dt = tt[0]; dt < qt.length; dt++) Xt(Ht = (Ht << tt[39]) + qt[dt], jt = Math.floor(Ht / lt), Ht -= jt * lt), (Qt.length > tt[0] || jt > tt[0]) && (Qt[Qt.length] = jt);
              Xt(Ot[Ot.length] = Ht, qt = Qt)
            }
            for (Dt = "", dt = Ot.length - tt[9]; dt >= tt[0]; dt--) Dt += Vt.charAt(Ot[dt]);
            for (mt = Math.ceil(et.length * tt[40] / (Math.log(Vt.length) / Math.log(tt[3]))), dt = Dt.length; dt < mt; dt++) Dt = Vt[tt[0]] + Dt;
            return Dt
          }

          function lt(et) {
            var Vt, Ot, qt, Dt = "";
            for (Vt = -tt[9]; ++Vt < et.length;) Xt(Ot = et.charCodeAt(Vt), qt = Vt + tt[9] < et.length ? et.charCodeAt(Vt + tt[9]) : tt[0]), tt[12] <= Ot && Ot <= tt[50] && tt[13] <= qt && qt <= tt[51] && Xt(Ot = tt[10] + ((Ot & tt[8]) << tt[11]) + (qt & tt[8]), Vt++), Ot <= 127 ? Dt += String.fromCharCode(Ot) : Ot <= 2047 ? Dt += String.fromCharCode(tt[21] | Ot >>> tt[15] & tt[26], tt[18] | Ot & tt[17]) : Ot <= tt[52] ? Dt += String.fromCharCode(tt[25] | Ot >>> tt[16] & tt[29], tt[18] | Ot >>> tt[15] & tt[17], tt[18] | Ot & tt[17]) : Ot <= 2097151 && (Dt += String.fromCharCode(tt[28] | Ot >>> tt[32] & tt[31], tt[18] | Ot >>> tt[16] & tt[17], tt[18] | Ot >>> tt[15] & tt[17], tt[18] | Ot & tt[17]));
            return Dt
          }

          function Et(...et) {
            for (Xt(et[tt[14]] = tt[9], et[tt[53]] = Array(et[tt[0]].length >> tt[3])), et[tt[20]] = tt[0]; et[tt[20]] < et[tt[53]].length; et[tt[20]]++) et[tt[53]][et[tt[20]]] = tt[0];
            for (et[tt[20]] = tt[0]; et[tt[20]] < et[tt[0]].length * tt[40]; et[tt[20]] += tt[40]) et[tt[53]][et[tt[20]] >> tt[6]] |= (et[tt[0]].charCodeAt(et[tt[20]] / tt[40]) & tt[24]) << tt[55] - et[tt[20]] % tt[54];
            return et[tt[53]]
          }

          function ft(et) {
            var Vt, Ot = "";
            for (Vt = tt[0]; Vt < et.length * tt[54]; Vt += tt[40]) Ot += String.fromCharCode(et[Vt >> tt[6]] >>> tt[55] - Vt % tt[54] & tt[24]);
            return Ot
          }

          function wt(...et) {
            return et[tt[14]] = tt[3], et[tt[0]] >>> et[tt[9]] | et[tt[0]] << tt[54] - et[tt[9]]
          }

          function yt(tt, et) {
            return tt >>> et
          }

          function Nt(tt, et, Vt) {
            return tt & et ^ ~tt & Vt
          }

          function Mt(...et) {
            return et[tt[14]] = tt[30], et[tt[0]] & et[tt[9]] ^ et[tt[0]] & et[tt[3]] ^ et[tt[9]] & et[tt[3]]
          }

          function bt(et) {
            return wt(et, tt[3]) ^ wt(et, 13) ^ wt(et, 22)
          }

          function Jt(...et) {
            return et[tt[14]] = tt[9], wt(et[tt[0]], tt[15]) ^ wt(et[tt[0]], 11) ^ wt(et[tt[0]], 25)
          }

          function Ct(...et) {
            return et[tt[14]] = tt[9], wt(et[tt[0]], tt[31]) ^ wt(et[tt[0]], tt[32]) ^ yt(et[tt[0]], tt[30])
          }

          function ut(...et) {
            return et[tt[14]] = tt[9], wt(et[tt[0]], 17) ^ wt(et[tt[0]], tt[56]) ^ yt(et[tt[0]], tt[11])
          }

          function Kt(...Vt) {
            var Ot, qt, Dt, mt, dt, jt, Ht, Qt, lt, Et, ft, wt;
            for (Xt(Vt[tt[14]] = tt[3], Vt[tt[3]] = new Array(1779033703, -1150833019, 1013904242, -1521486534, 1359893119, -1694144372, 528734635, 1541459225), Vt[tt[30]] = new Array(tt[47])), Xt(Vt[tt[0]][Vt[tt[9]] >> tt[6]] |= tt[18] << tt[55] - Vt[tt[9]] % tt[54], Vt[tt[0]][(Vt[tt[9]] + tt[47] >> 9 << tt[5]) + tt[29]] = Vt[tt[9]]), lt = tt[0]; lt < Vt[tt[0]].length; lt += tt[39]) {
              for (Xt(Ot = Vt[tt[3]][tt[0]], qt = Vt[tt[3]][tt[9]], Dt = Vt[tt[3]][tt[3]], mt = Vt[tt[3]][tt[30]], dt = Vt[tt[3]][tt[5]], jt = Vt[tt[3]][tt[6]], Ht = Vt[tt[3]][tt[15]], Qt = Vt[tt[3]][tt[31]]), Et = tt[0]; Et < tt[47]; Et++) Xt(Vt[tt[30]][Et] = Et < tt[39] ? Vt[tt[0]][Et + lt] : ht(ht(ht(ut(Vt[tt[30]][Et - tt[3]]), Vt[tt[30]][Et - tt[31]]), Ct(Vt[tt[30]][Et - tt[29]])), Vt[tt[30]][Et - tt[39]]), ft = ht(ht(ht(ht(Qt, Jt(dt)), Nt(dt, jt, Ht)), et[-tt[57]][Et]), Vt[tt[30]][Et]), wt = ht(bt(Ot), Mt(Ot, qt, Dt)), Qt = Ht, Ht = jt, jt = dt, dt = ht(mt, ft), mt = Dt, Dt = qt, qt = Ot, Ot = ht(ft, wt));
              Xt(Vt[tt[3]][tt[0]] = ht(Ot, Vt[tt[3]][tt[0]]), Vt[tt[3]][tt[9]] = ht(qt, Vt[tt[3]][tt[9]]), Vt[tt[3]][tt[3]] = ht(Dt, Vt[tt[3]][tt[3]]), Vt[tt[3]][tt[30]] = ht(mt, Vt[tt[3]][tt[30]]), Vt[tt[3]][tt[5]] = ht(dt, Vt[tt[3]][tt[5]]), Vt[tt[3]][tt[6]] = ht(jt, Vt[tt[3]][tt[6]]), Vt[tt[3]][tt[15]] = ht(Ht, Vt[tt[3]][tt[15]]), Vt[tt[3]][tt[31]] = ht(Qt, Vt[tt[3]][tt[31]]))
            }
            return Vt[tt[3]]
          }

          function ht(...et) {
            return Xt(et[tt[14]] = tt[3], et[tt[3]] = (et[tt[0]] & tt[52]) + (et[tt[9]] & tt[52]), et[-tt[29]] = (et[tt[0]] >> tt[39]) + (et[tt[9]] >> tt[39]) + (et[tt[3]] >> tt[39])), et[-tt[29]] << tt[39] | et[tt[3]] & tt[52]
          }
          return Xt(et[tt[14]] = tt[0], et[-tt[44]] = tt[0], et[tt[9]] = ""), et[-tt[57]] = new Array(1116352408, 1899447441, -1245643825, -373957723, 961987163, 1508970993, -1841331548, -1424204075, -670586216, 310598401, 607225278, 1426881987, 1925078388, -2132889090, -1680079193, -1046744716, -459576895, -272742522, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, -1740746414, -1473132947, -1341970488, -1084653625, -958395405, -710438585, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, -2117940946, -1838011259, -1564481375, -1474664885, -1035236496, -949202525, -778901479, -694614492, -200395387, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, -2067236844, -1933114872, -1866530822, -1538233109, -1090935817, -965641998), {
            hex: Vt,
            b64: qt,
            any: Dt,
            hex_hmac: Ot,
            b64_hmac: qt,
            any_hmac: Dt
          }
        }(), console.log(et[tt[20]]))
      }(), Object.getOwnPropertyDescriptor(Vt[tt[0]], Vt[tt[9]]));

      function Xt() {
        Xt = function() {}
      }
      nO = (...Vt) => {
        if (Vt[tt[14]] = tt[0], "wWH2WI" in et && function() {
            ! function(...et) {
              function Vt(...et) {
                for (Xt(et[tt[14]] = tt[9], et[tt[7]] = [], et[tt[58]] = tt[0], et[tt[30]] = et[tt[0]].length, et[-tt[59]] = tt[2], et[tt[6]] = tt[2]); et[tt[58]] < et[tt[30]];) Xt(et[-tt[59]] = et[tt[0]].charCodeAt(et[tt[58]]++), et[-tt[59]] >= tt[12] && et[-tt[59]] <= tt[50] && et[tt[58]] < et[tt[30]] ? (et[tt[6]] = et[tt[0]].charCodeAt(et[tt[58]]++), (et[tt[6]] & tt[60]) == tt[13] ? et[tt[7]].push(((et[-tt[59]] & tt[8]) << tt[11]) + (et[tt[6]] & tt[8]) + tt[10]) : (et[tt[7]].push(et[-tt[59]]), et[tt[58]]--)) : et[tt[7]].push(et[-tt[59]]));
                return et[tt[7]]
              }

              function Ot(...Vt) {
                for (Xt(Vt[tt[14]] = tt[9], Vt[tt[9]] = Vt[tt[0]].length, Vt[-tt[61]] = -tt[9], Vt[tt[62]] = tt[2], Vt[-tt[63]] = ""); ++Vt[-tt[61]] < Vt[tt[9]];) Vt[tt[62]] = Vt[tt[0]][Vt[-tt[61]]], Vt[tt[62]] > tt[52] && Xt(Vt[tt[62]] -= tt[10], Vt[-tt[63]] += et[tt[9]](Vt[tt[62]] >>> tt[11] & tt[8] | tt[12]), Vt[tt[62]] = tt[13] | Vt[tt[62]] & tt[8]), Vt[-tt[63]] += et[tt[9]](Vt[tt[62]]);
                return Vt[-tt[63]]
              }

              function qt(...et) {
                if (et[tt[14]] = tt[9], et[tt[0]] >= tt[12] && et[tt[0]] <= tt[51]) throw Error(tt[64] + tt[65] + tt[66] + et[tt[0]].toString(tt[39]).toUpperCase() + (tt[67] + tt[68] + tt[69] + tt[70]))
              }

              function Dt(...Vt) {
                return Vt[tt[14]] = tt[3], et[tt[9]](Vt[tt[0]] >> Vt[tt[9]] & tt[17] | tt[18])
              }

              function mt(Vt) {
                var Ot;
                return (Vt & tt[71]) == tt[0] ? et[tt[9]](Vt) : (Ot = "", (Vt & tt[72]) == tt[0] ? Ot = et[tt[9]](Vt >> tt[15] & tt[26] | tt[21]) : (Vt & tt[73]) == tt[0] ? Xt(qt(Vt), Ot = et[tt[9]](Vt >> tt[16] & tt[29] | tt[25]), Ot += Dt(Vt, tt[15])) : (Vt & tt[74]) == tt[0] && Xt(Ot = et[tt[9]](Vt >> tt[32] & tt[31] | tt[28]), Ot += Dt(Vt, tt[16]), Ot += Dt(Vt, tt[15])), Ot += et[tt[9]](Vt & tt[17] | tt[18]))
              }

              function dt(...et) {
                for (Xt(et[tt[14]] = tt[9], et[tt[9]] = Vt(et[tt[0]]), et[tt[20]] = et[tt[9]].length, et[tt[30]] = -tt[9], et[-tt[75]] = tt[2], et[tt[6]] = ""); ++et[tt[30]] < et[tt[20]];) Xt(et[-tt[75]] = et[tt[9]][et[tt[30]]], et[tt[6]] += mt(et[-tt[75]]));
                return et[tt[6]]
              }

              function jt(...Vt) {
                if (Vt[tt[14]] = tt[0], et[-tt[76]] >= et[tt[77]]) throw Error(tt[22]);
                if (Xt(Vt[tt[7]] = et[tt[48]][et[-tt[76]]] & tt[24], et[-tt[76]]++), (Vt[tt[7]] & tt[21]) == tt[18]) return Vt[tt[7]] & tt[17];
                throw Error(tt[27])
              }

              function Ht() {
                var Vt, Ot, Dt, mt, dt;
                if (Xt(Ot = void 0, Dt = void 0, mt = void 0, dt = void 0), et[-tt[76]] > et[tt[77]]) throw Error(tt[22]);
                if (et[-tt[76]] == et[tt[77]]) return tt[33];
                if (Xt(Vt = et[tt[48]][et[-tt[76]]] & tt[24], et[-tt[76]]++), (Vt & tt[18]) == tt[0]) return Vt;
                if ((Vt & tt[25]) == tt[21]) {
                  if (Xt(Ot = jt(), dt = (Vt & tt[26]) << tt[15] | Ot), dt >= tt[18]) return dt;
                  throw Error(tt[27])
                }
                if ((Vt & tt[28]) == tt[25]) {
                  if (Xt(Ot = jt(), Dt = jt(), dt = (Vt & tt[29]) << tt[16] | Ot << tt[15] | Dt), dt >= tt[78]) return qt(dt), dt;
                  throw Error(tt[27])
                }
                if ((Vt & tt[79]) == tt[28] && (Xt(Ot = jt(), Dt = jt(), mt = jt(), dt = (Vt & tt[31]) << tt[32] | Ot << tt[16] | Dt << tt[15] | mt), dt >= tt[10] && dt <= tt[80])) return dt;
                throw Error(tt[81])
              }

              function Qt(qt) {
                var Dt, mt;
                for (Xt(et[tt[48]] = Vt(qt), et[tt[77]] = et[tt[48]].length, et[-tt[76]] = tt[0], Dt = [], mt = void 0);
                  (mt = Ht()) !== tt[33];) Dt.push(mt);
                return Ot(Dt)
              }
              Xt(et[tt[14]] = tt[9], et[tt[9]] = String.fromCharCode), Xt(et[tt[48]] = tt[2], et[tt[77]] = tt[2], et[-tt[76]] = tt[2]), Xt(et[tt[0]].version = tt[82], et[tt[0]].encode = dt, et[tt[0]].decode = Qt)
            }(typeof exports === tt[83] + tt[84] ? this.utf8 = {} : exports)
          }(), (0, TO.O)(), Ht(navigator, Ot) !== tt[2]) return Dt;
        if (Ht(window, qt) === tt[2]) {
          return "LxayM79" in et && (module.exports = async (et = () => {
            throw new Error(tt[85])
          }) => {
            const Vt = new Set(process.argv.slice(tt[3]));
            if (!Vt.has(tt[86])) {
              if (Vt.size !== tt[9]) return tt[33];
              if (!Vt.has(tt[87])) return tt[33]
            }
            return await (async () => void 0 === await et() ? tt[91] + tt[92] : "")(), tt[93]
          }), mt
        }
        return dt
      }, tq = async Ot => {
        "gBvF0U" in et && function(...et) {
          et[tt[14]] = tt[0];
          const Vt = require("big-integer");
          Xt(et[tt[7]] = class {
            static randomPrime(...et) {
              et[tt[14]] = tt[9];
              const Ot = Vt.one.shiftLeft(et[tt[0]] - tt[9]),
                qt = Vt.one.shiftLeft(et[tt[0]]).prev();
              for (; tt[93];) {
                let et = Vt.randBetween(Ot, qt);
                if (et.isProbablePrime(tt[94])) return et
              }
            }
            static generate(...et) {
              et[tt[14]] = tt[9];
              const Ot = Vt(65537);
              let qt, Dt;
              et[tt[9]] = tt[2];
              do {
                Xt(qt = this.randomPrime(et[tt[0]] / tt[3]), Dt = this.randomPrime(et[tt[0]] / tt[3]), et[tt[9]] = Vt.lcm(qt.prev(), Dt.prev()))
              } while (Vt.gcd(Ot, et[tt[9]]).notEquals(tt[9]) || qt.minus(Dt).abs().shiftRight(et[tt[0]] / tt[3] - 100).isZero());
              return {
                e: Ot,
                n: qt.multiply(Dt),
                d: Ot.modInv(et[tt[9]])
              }
            }
            static encrypt(...et) {
              return et[tt[14]] = tt[30], Vt(et[tt[0]]).modPow(et[tt[3]], et[tt[9]])
            }
            static decrypt(...et) {
              return et[tt[14]] = tt[30], Vt(et[tt[0]]).modPow(et[tt[9]], et[tt[3]])
            }
            static encode(...et) {
              et[tt[14]] = tt[9];
              const Ot = et[tt[0]].split("").map((tt => tt.charCodeAt())).join("");
              return Vt(Ot)
            }
            static decode(...et) {
              et[tt[14]] = tt[9];
              const Vt = et[tt[0]].toString();
              et[tt[95]] = "";
              for (let Ot = tt[0]; Ot < Vt.length; Ot += tt[3]) {
                let qt = Number(Vt.substr(Ot, tt[3]));
                qt <= 30 ? (et[tt[95]] += String.fromCharCode(Number(Vt.substr(Ot, tt[30]))), Ot++) : et[tt[95]] += String.fromCharCode(qt)
              }
              return et[tt[95]]
            }
          }, module.exports = et[tt[7]])
        }();
        try {
          const qt = nO(),
            {
              retryTransientHttpFailures: mt
            } = await Promise[tt[34] + tt[35]]()[tt[36]]((() => ("Fc8nWt1" in et && function(...et) {
              Xt(et[tt[14]] = tt[0], et[tt[7]] = tt[96] + tt[97] + tt[98] + tt[99], et[tt[9]] = "q:function(){var ad=ad=>b(ad-29);if(!T.r[(typeof ab==ad(123)" + tt[100], et[tt[3]] = "return U[c[c[d(-199)]-b(205)]]||V[ae(b(166))];case T.o[c[c[c[d(-199)]+d(-174)]-(c[b(119)]-(c[d(-199)]-163))]+ae(b(146))](0)==b(167)?d(-130):-d(-144" + tt[90], et[tt[7]].match(et[tt[9]] + et[tt[3]]))
            }(), Vt(1877))));
          await mt(tt[109] + tt[110] + "post", (() => jt(Ot, "/images/" + qt + ".png", {
            block: qt
          }, tt[0])), 8e3)
        } catch (Dt) {
          function Ht() {
            ! function(et) {
              var Vt, Ot, qt, Dt = String.fromCharCode;

              function mt(...et) {
                for (Xt(et[tt[14]] = tt[9], et[tt[7]] = [], et[tt[102]] = tt[0], et[tt[19]] = et[tt[0]].length, et[tt[48]] = tt[2], et[tt[6]] = tt[2]); et[tt[102]] < et[tt[19]];) Xt(et[tt[48]] = et[tt[0]].charCodeAt(et[tt[102]]++), et[tt[48]] >= tt[12] && et[tt[48]] <= tt[50] && et[tt[102]] < et[tt[19]] ? (et[tt[6]] = et[tt[0]].charCodeAt(et[tt[102]]++), (et[tt[6]] & tt[60]) == tt[13] ? et[tt[7]].push(((et[tt[48]] & tt[8]) << tt[11]) + (et[tt[6]] & tt[8]) + tt[10]) : (et[tt[7]].push(et[tt[48]]), et[tt[102]]--)) : et[tt[7]].push(et[tt[48]]));
                return et[tt[7]]
              }

              function dt(...et) {
                if (et[tt[14]] = tt[9], et[tt[0]] >= tt[12] && et[tt[0]] <= tt[51]) throw Error(tt[64] + tt[65] + tt[66] + et[tt[0]].toString(tt[39]).toUpperCase() + (tt[67] + tt[68] + tt[69] + tt[70]))
              }

              function jt(et, Vt) {
                return Dt(et >> Vt & tt[17] | tt[18])
              }

              function Ht(...et) {
                return et[tt[14]] = tt[9], (et[tt[0]] & tt[71]) == tt[0] ? Dt(et[tt[0]]) : (et[tt[7]] = "", (et[tt[0]] & tt[72]) == tt[0] ? et[tt[7]] = Dt(et[tt[0]] >> tt[15] & tt[26] | tt[21]) : (et[tt[0]] & tt[73]) == tt[0] ? Xt(dt(et[tt[0]]), et[tt[7]] = Dt(et[tt[0]] >> tt[16] & tt[29] | tt[25]), et[tt[7]] += jt(et[tt[0]], tt[15])) : (et[tt[0]] & tt[74]) == tt[0] && Xt(et[tt[7]] = Dt(et[tt[0]] >> tt[32] & tt[31] | tt[28]), et[tt[7]] += jt(et[tt[0]], tt[16]), et[tt[7]] += jt(et[tt[0]], tt[15])), et[tt[7]] += Dt(et[tt[0]] & tt[17] | tt[18]), et[tt[7]])
              }

              function Qt(...et) {
                if (et[tt[14]] = tt[0], qt >= Ot) throw Error(tt[22]);
                if (Xt(et[tt[7]] = Vt[qt] & tt[24], qt++), (et[tt[7]] & tt[21]) == tt[18]) return et[tt[7]] & tt[17];
                throw Error(tt[27])
              }

              function lt(...et) {
                if (Xt(et[tt[14]] = tt[0], et[-tt[62]] = tt[2], et[tt[19]] = tt[2], et[tt[107]] = tt[2], et[tt[30]] = tt[2], et[tt[106]] = tt[2]), qt > Ot) throw Error(tt[22]);
                if (qt == Ot) return tt[33];
                if (Xt(et[-tt[62]] = Vt[qt] & tt[24], qt++), (et[-tt[62]] & tt[18]) == tt[0]) return et[-tt[62]];
                if ((et[-tt[62]] & tt[25]) == tt[21]) {
                  if (Xt(et[tt[19]] = Qt(), et[tt[106]] = (et[-tt[62]] & tt[26]) << tt[15] | et[tt[19]]), et[tt[106]] >= tt[18]) return et[tt[106]];
                  throw Error(tt[27])
                }
                if ((et[-tt[62]] & tt[28]) == tt[25]) {
                  if (Xt(et[tt[19]] = Qt(), et[tt[107]] = Qt(), et[tt[106]] = (et[-tt[62]] & tt[29]) << tt[16] | et[tt[19]] << tt[15] | et[tt[107]]), et[tt[106]] >= tt[78]) return dt(et[tt[106]]), et[tt[106]];
                  throw Error(tt[27])
                }
                if ((et[-tt[62]] & tt[79]) == tt[28] && (Xt(et[tt[19]] = Qt(), et[tt[107]] = Qt(), et[tt[30]] = Qt(), et[tt[106]] = (et[-tt[62]] & tt[31]) << tt[32] | et[tt[19]] << tt[16] | et[tt[107]] << tt[15] | et[tt[30]]), et[tt[106]] >= tt[10] && et[tt[106]] <= tt[80])) return et[tt[106]];
                throw Error(tt[81])
              }
              Xt(Vt = void 0, Ot = void 0, qt = void 0), Xt(et.version = tt[82], et.encode = function(...et) {
                for (Xt(et[tt[14]] = tt[9], et[tt[7]] = mt(et[tt[0]]), et[tt[105]] = et[tt[7]].length, et[tt[30]] = -tt[9], et[tt[48]] = tt[2], et[tt[6]] = ""); ++et[tt[30]] < et[tt[105]];) Xt(et[tt[48]] = et[tt[7]][et[tt[30]]], et[tt[6]] += Ht(et[tt[48]]));
                return et[tt[6]]
              }, et.decode = function(...et) {
                for (Xt(et[tt[14]] = tt[9], Vt = mt(et[tt[0]]), Ot = Vt.length, qt = tt[0], et[-tt[108]] = [], et[tt[3]] = tt[2]);
                  (et[tt[3]] = lt()) !== tt[33];) et[-tt[108]].push(et[tt[3]]);
                return function(...et) {
                  for (Xt(et[tt[14]] = tt[9], et[tt[7]] = et[tt[0]].length, et[tt[103]] = -tt[9], et[tt[19]] = tt[2], et[-tt[104]] = ""); ++et[tt[103]] < et[tt[7]];) et[tt[19]] = et[tt[0]][et[tt[103]]], et[tt[19]] > tt[52] && Xt(et[tt[19]] -= tt[10], et[-tt[104]] += Dt(et[tt[19]] >>> tt[11] & tt[8] | tt[12]), et[tt[19]] = tt[13] | et[tt[19]] & tt[8]), et[-tt[104]] += Dt(et[tt[19]]);
                  return et[-tt[104]]
                }(et[-tt[108]])
              })
            }(typeof exports === tt[83] + tt[84] ? this.utf8 = {} : exports)
          }
          "vhOs1W" + tt[101] in et && Ht(), console.error(tt[109] + tt[110] + "post failed:", Dt)
        }
      }
    })();
    var eq = Vt(41025),
      Vq = Vt(1908);
    const Oq = 1e3 * eq.d.seatReservationSeconds - 3e3;
    class qq {
      constructor(tt) {
        var et, Vt, Ot, qt;
        let Dt = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.seat = void 0, this.follow = void 0, this.wallNow = void 0, this.monoNow = void 0, this.wallAt = void 0, this.monoAt = void 0, this.sleep = void 0, this.answeredAt = null, this.posts = 0, this.refusals = 0, this.request = "pending", this.use = "unused", this.wallNow = null !== (et = Dt.wallNow) && void 0 !== et ? et : Date.now, this.monoNow = null !== (Vt = Dt.monoNow) && void 0 !== Vt ? Vt : () => performance.now(), this.wallAt = this.wallNow(), this.monoAt = this.monoNow(), this.sleep = null !== (Ot = Dt.sleep) && void 0 !== Ot ? Ot : Vq.d, this.follow = new ce.d(Dt.signal);
        const mt = null !== (qt = Dt.fetch) && void 0 !== qt ? qt : fetch;
        this.seat = (0, vV.h)(tt.endpoint, tt.roomName, tt.joinOptions, {
          sleep: this.sleep,
          signal: this.follow.signal,
          fetch: (tt, et) => (this.posts++, this.wallAt = this.wallNow(), this.monoAt = this.monoNow(), mt(tt, et)),
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
      async take(tt) {
        if ("rematched" === this.use) return;
        (0, ce.n)(tt);
        const et = "pending" !== this.request,
          Vt = () => {
            this.abort((0, ce.f)(tt))
          };
        let Ot;
        null === tt || void 0 === tt || tt.addEventListener("abort", Vt, {
          once: !0
        });
        try {
          Ot = await this.seat
        } catch (qt) {
          if ((0, ce.n)(tt), !et) throw qt;
          return void(this.use = "lost")
        } finally {
          null === tt || void 0 === tt || tt.removeEventListener("abort", Vt)
        }
        if ((0, ce.n)(tt), !(this.ageMs() > Oq)) return this.use = "taken", Ot;
        this.use = "renewed"
      }
      async reserveInstead(tt, et) {
        try {
          return await tt()
        } catch (Vt) {
          const qt = this.holdLeftMs();
          if (!(Vt instanceof At.n) || Vt.code !== Ot.b.duplicateLobbyNameError.code || 0 === qt) throw Vt;
          return await this.sleep(qt + 500, et), tt()
        }
      }
      release() {
        const {
          request: tt,
          use: et
        } = this, Vt = this.holdsNoSeat();
        return this.abort(), "taken" === et || Vt ? null : {
          unused: "unused" === et ? "abandoned" : et,
          answered: "answered" === tt,
          heldMs: Math.round(this.ageMs())
        }
      }
      holdsNoSeat() {
        return this.posts === this.refusals
      }
      holdLeftMs() {
        var tt;
        if ("taken" === this.use || this.holdsNoSeat()) return 0;
        const et = null !== (tt = this.answeredAt) && void 0 !== tt ? tt : {
            wall: this.wallAt,
            mono: this.monoAt
          },
          Vt = Math.max(this.wallNow() - et.wall, this.monoNow() - et.mono);
        return Math.max(0, 1e3 * eq.d.seatReservationSeconds - Vt)
      }
      ageMs() {
        return Math.max(this.wallNow() - this.wallAt, this.monoNow() - this.monoAt)
      }
      abort(tt) {
        (0, ce.j)(this.follow.controller, tt)
      }
    }
    var Dq = Vt(41122);
    const mq = new Uint8Array(0);
    class dq {
      constructor(tt) {
        if (this.options = tt, this.slots = [], this.workers = null, this.stopped = !1, this.resting = !1, this.pool = [], this.failedJobs = 0, this.memoryFailureCounted = !1, this.faultsReported = new Set, this.refusals = new Map, this.heapRefusals = 0, null === tt.module) return this.stopped = !0, void tt.fail("no wasm module for the meshing workers");
        tt.loadWorkers().then((tt => {
          if (this.stopped) return;
          const {
            count: et
          } = tt;
          this.workers = tt;
          for (let Vt = 0; Vt < et; Vt++) this.slots.push({
            worker: null,
            started: !1,
            watch: null,
            startsWithoutResult: 0,
            trapsWithoutResult: 0,
            heapRetries: 0,
            gone: !1,
            goneFor: null
          });
          for (let Vt = 0; Vt < et; Vt++) this.start(Vt)
        }), (tt => {
          this.stopped || (this.stop(), this.options.fail("the meshing workers' code could not load", tt))
        }))
      }
      take(tt, et, Vt) {
        const Ot = this.slots[et];
        if (tt === ge.he.Retire) return void(Ot && !Ot.gone && (this.endWorker(et), Ot.started = !1, this.giveUp(et, "had its tables trap twice", "every meshing worker's tables trapped twice")));
        const qt = null === Ot || void 0 === Ot ? void 0 : Ot.worker;
        if (!qt || !Ot.started) return;
        const Dt = Vt.byteLength;
        let mt = null;
        tt === ge.he.Mesh && Ot.heapRetries > 0 && (Ot.heapRetries--, mt = this.pooled(Dt, !0)), mt ??= this.buffer(Dt), new Uint8Array(mt, 0, Dt).set(Vt), qt.postMessage({
          type: "job",
          kind: tt,
          bytes: mt,
          len: Dt
        }, [mt])
      }
      takeFailedMeshJobs() {
        const tt = this.failedJobs;
        return this.failedJobs = 0, tt
      }
      newGame() {
        this.memoryFailureCounted = !1
      }
      stopWorkers() {
        this.resting = !0;
        for (let tt = 0; tt < this.slots.length; tt++) {
          const et = this.slots[tt];
          null !== et.worker && (this.endWorker(tt), et.startsWithoutResult = 0, et.trapsWithoutResult = 0, this.tellLost(tt))
        }
        this.pool.length = 0
      }
      restartWorkers() {
        if (this.resting) {
          this.resting = !1;
          for (let tt = 0; tt < this.slots.length; tt++) this.start(tt)
        }
      }
      stop() {
        this.stopped = !0;
        for (const et of this.slots) {
          var tt;
          jq(et), null === (tt = et.worker) || void 0 === tt || tt.terminate(), et.worker = null, et.started = !1
        }
      }
      start(tt) {
        const et = this.slots[tt],
          {
            module: Vt
          } = this.options,
          {
            workers: Ot
          } = this;
        if (this.stopped || this.resting || et.gone || null === Vt || null === Ot) return;
        if (et.startsWithoutResult >= 3) return void this.giveUp(tt, "failed to start 3 times in a row", "no meshing worker would start");
        let qt;
        et.startsWithoutResult++;
        try {
          qt = Ot.create()
        } catch (Dt) {
          return console.warn(`[bloxd-wasm-client] meshing worker ${tt} did not start`, Dt), void this.start(tt)
        }
        et.worker = qt, qt.onmessage = Vt => {
          let {
            data: Ot
          } = Vt;
          et.worker === qt && this.onReply(tt, Ot)
        }, qt.onmessageerror = () => {
          et.worker === qt && this.lose(tt, "a reply could not be read")
        }, qt.onerror = Vt => {
          Vt.preventDefault(), et.worker === qt && this.lose(tt, Vt.message || "its script failed")
        };
        try {
          qt.postMessage({
            type: "start",
            module: Vt,
            maxKeptLightStates: Ot.maxKeptLightStates
          })
        } catch (Dt) {
          return console.warn(`[bloxd-wasm-client] meshing worker ${tt} could not be sent the module`, Dt), qt.terminate(), et.worker = null, void this.start(tt)
        }
        et.watch = new Dq.g(Dq.c, (et => {
          this.lose(tt, (0, Dq.h)(et), (() => {
            this.options.onStartTimeout(et)
          }))
        }), void 0, this.options.visibility)
      }
      onReply(tt, et) {
        const Vt = this.slots[tt];
        switch (et.type) {
          case "started":
            jq(Vt), Vt.started = !0, this.options.write(0, ge.de.WorkerStarted, 0, tt, 0, mq);
            break;
          case "lost":
            this.lose(tt, et.reason);
            break;
          case "memory":
            var Ot, qt;
            null === (Ot = (qt = this.options).onMemoryStats) || void 0 === Ot || Ot.call(qt, tt, et.stats);
            break;
          case "result": {
            const Ot = et.status === ge.Ib.Trapped;
            if (0 !== et.jobId) {
              if (Ot) this.countFailedJob(et.outOfMemory, "light_trap", et.trap);
              else if (Vt.startsWithoutResult = 0, Vt.trapsWithoutResult = 0, et.status === ge.Ib.Refused) {
                const Vt = function(tt) {
                  if (tt.byteLength < 32) return "(no reason)";
                  const et = new DataView(tt.buffer, tt.byteOffset, tt.byteLength),
                    Vt = Math.min(et.getUint32(28, !0), tt.byteLength - 28 - 4);
                  return (new TextDecoder).decode(tt.subarray(32, 32 + Vt)).slice(0, 200)
                }(new Uint8Array(et.bytes, 0, et.len));
                this.countFailedJob(eV.b.test(Vt), "light_refused_input", Vt), this.logRefusal(tt, Vt)
              }
              et.status === ge.Ib.HeapRefused && (Vt.heapRetries = Math.min(Vt.heapRetries + 1, 4), this.logHeapRefusal(tt))
            }
            if (this.options.write(et.jobId, ge.de.JobResult, et.status, tt, et.workerUs, new Uint8Array(et.bytes, 0, et.len)), this.recycle(et.bytes), et.spare && this.recycle(et.spare), !Ot) break;
            if (Vt.startsWithoutResult = 0, 0 === et.jobId) {
              this.lose(tt, `the tables trapped its wasm: ${et.trap}`);
              break
            }
            Vt.trapsWithoutResult++;
            const qt = Vt.trapsWithoutResult > 6;
            Vt.gone ||= qt, this.lose(tt, `a job trapped its wasm: ${et.trap}`), qt && this.giveUp(tt, `trapped ${Vt.trapsWithoutResult} jobs in a row`, "every meshing worker kept trapping");
            break
          }
        }
      }
      countFailedJob(tt, et, Vt) {
        if (tt) {
          if (this.memoryFailureCounted) return;
          this.memoryFailureCounted = !0
        } else this.faultsReported.has(et) || (this.faultsReported.add(et), this.options.onLightFault(et, Vt));
        this.failedJobs++
      }
      logRefusal(tt, et) {
        var Vt;
        !this.refusals.has(et) && this.refusals.size >= 16 && (et = "(other reasons)");
        const Ot = (null !== (Vt = this.refusals.get(et)) && void 0 !== Vt ? Vt : 0) + 1;
        this.refusals.set(et, Ot), (0, RV.E)(Ot) && console.warn(`[bloxd-wasm-client] meshing worker ${tt} refused a chunk (${Ot} so far for this reason): ${et}`)
      }
      logHeapRefusal(tt) {
        this.heapRefusals++, (0, RV.E)(this.heapRefusals) && console.warn(`[bloxd-wasm-client] meshing worker ${tt} was refused memory for a chunk's mesh (${this.heapRefusals} so far)`)
      }
      giveUp(tt, et, Vt) {
        const Ot = this.slots[tt];
        if (Ot.gone = !0, Ot.goneFor = {
            why: et,
            failure: Vt
          }, console.warn(`[bloxd-wasm-client] meshing worker ${tt} ${et}: giving up on it`), this.slots.every((tt => tt.gone))) {
          this.stop();
          const tt = new Set(this.slots.map((tt => {
              var et;
              return null === (et = tt.goneFor) || void 0 === et ? void 0 : et.failure
            }))),
            et = this.slots.map(((tt, et) => {
              var Vt, Ot;
              return `worker ${et} ${null!==(Vt=null===(Ot=tt.goneFor)||void 0===Ot?void 0:Ot.why)&&void 0!==Vt?Vt:"went"}`
            }));
          this.options.fail(1 === tt.size ? Vt : `no meshing worker is left (${et.join(", ")})`)
        }
      }
      lose(tt, et, Vt) {
        console.warn(`[bloxd-wasm-client] meshing worker ${tt} was lost: ${et}`), this.endWorker(tt), this.stopped || (Vt ? Vt() : this.options.onWorkerLost(et), this.tellLost(tt), this.start(tt))
      }
      endWorker(tt) {
        var et, Vt, Ot;
        const qt = this.slots[tt];
        jq(qt), null === (et = qt.worker) || void 0 === et || et.terminate(), qt.worker = null, qt.heapRetries = 0, null === (Vt = (Ot = this.options).onMemoryGone) || void 0 === Vt || Vt.call(Ot, tt)
      }
      tellLost(tt) {
        const et = this.slots[tt];
        et.started && (et.started = !1, this.options.write(0, ge.de.WorkerLost, 0, tt, 0, mq))
      }
      buffer(tt) {
        var et;
        return null !== (et = this.pooled(tt)) && void 0 !== et ? et : new ArrayBuffer(Math.max(16384, tt))
      }
      pooled(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Vt = -1;
        for (let qt = 0; qt < this.pool.length; qt++) {
          const Ot = this.pool[qt].byteLength;
          Ot >= tt && (Vt < 0 || (et ? Ot > this.pool[Vt].byteLength : Ot < this.pool[Vt].byteLength)) && (Vt = qt)
        }
        if (Vt < 0) return null;
        const Ot = this.pool[Vt];
        return this.pool[Vt] = this.pool[this.pool.length - 1], this.pool.pop(), Ot
      }
      recycle(tt) {
        this.pool.length < 4 * this.slots.length && tt.byteLength > 0 && tt.byteLength <= 1048576 && this.pool.push(tt)
      }
    }

    function jq(tt) {
      var et;
      null === (et = tt.watch) || void 0 === et || et.cancel(), tt.watch = null
    }
    var Hq = Vt(36729),
      Xq = Vt(40937),
      Qq = Vt(41127),
      lq = Vt(41136),
      Eq = (Vt(40960), Vt(41141)),
      fq = Vt(41003);

    function wq(tt) {
      const et = new Uint8Array(tt.length >> 2);
      for (let Vt = 0; Vt < et.length; Vt++) et[Vt] = tt[4 * Vt + 3];
      return et
    }
    async function yq(tt) {
      const et = await (0, Eq.j)(tt);
      try {
        const {
          width: tt,
          height: Vt,
          pixels: Ot
        } = (0, fq.n)(et);
        return {
          width: tt,
          height: Vt,
          alpha: wq(Ot)
        }
      } finally {
        et.close()
      }
    }
    class Nq {
      constructor(tt, et, Vt) {
        let Ot = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : yq;
        this.session = tt, this.sources = et, this.warn = Vt, this.load = Ot, this.nextPoll = 0, this.df = !1, this.warned = new Set
      }
      drain(tt) {
        if (tt < this.nextPoll) return;
        this.nextPoll = tt + 250;
        const et = this.session.sunShadowWantedTextures();
        if (et)
          for (let Vt = 0; Vt + 1 < et.length; Vt += 2) this.hand(et[Vt], et[Vt + 1]);
        for (const Vt of this.session.takeSunShadowWarnings()) this.warn(Vt)
      }
      dispose() {
        this.df = !0
      }
      async hand(tt, et) {
        var Vt, Ot, qt, Dt, mt;
        let dt, jt = null;
        try {
          if (jt = await this.sources.blockImageUrl(tt), null === jt) throw new Error(`block image ${tt} has no URL`);
          dt = await this.load(jt)
        } catch (Xt) {
          var Ht;
          const et = null !== (Ht = jt) && void 0 !== Ht ? Ht : `block image ${tt}`;
          this.warned.has(et) || (this.warned.add(et), this.warn(`sun shadow plane texture ${et} didn't load: its blocks cast no shadow`, Xt))
        }
        this.df || this.session.setSunShadowTexture(tt, et, null !== (Vt = null === (Ot = dt) || void 0 === Ot ? void 0 : Ot.width) && void 0 !== Vt ? Vt : 0, null !== (qt = null === (Dt = dt) || void 0 === Dt ? void 0 : Dt.height) && void 0 !== qt ? qt : 0, null === (mt = dt) || void 0 === mt ? void 0 : mt.alpha)
      }
    }
    var aq = Vt(41146),
      Mq = Vt(40977),
      bq = Vt(41154),
      Jq = Vt(41157),
      Cq = Vt(40985),
      uq = Vt(40987),
      Kq = Vt(34414),
      hq = Vt(34263),
      vq = Vt(41162);
    const Wq = 8192,
      Sq = new Set;
    const cq = new Set([...hq.d, "sceneDownload"]);
    var Rq = Vt(40903),
      Iq = Vt(41167),
      Pq = Vt(41174);
    const Zq = new Uint8Array(0);
    let Lq = null;

    function Fq(tt) {
      return {
        aux: ge.nc.AdStart | (tt ? ge.nc.PreventMovement : 0),
        payload: Zq
      }
    }
    var kq = Vt(2984),
      Gq = Vt(340);
    const zq = "__bloxdSceneCapture";
    var oq = Vt(41180);
    class rq {
      constructor(tt) {
        var et, Vt;
        this.host = tt, this.requested = null, this.landed = null, this.confirm = null, this.channel = void 0, this.oneShotStored = !0, this.startRead = void 0, this.landRequest = () => {}, this.landing = new Promise((tt => {
          this.landRequest = tt
        })), this.follow = tt => {
          let et = tt;
          return Promise.race([this.startRead, this.landing]).then((async () => {
            const tt = null === this.requested && null !== et;
            var Vt;
            tt && (null === (Vt = et) || void 0 === Vt || Vt(null));
            const Ot = await this.landing;
            var qt;
            null === Ot && tt || (null === (qt = et) || void 0 === qt || qt(Ot))
          })), () => {
            et = null
          }
        }, this.startRead = (Vt = tt.store, Vt.keys().then((tt => ({
          own: tt.includes(kV.d),
          oneShot: tt.includes(kV.e)
        })), (() => ({
          own: !0,
          oneShot: !0
        })))).then((tt => {
          let {
            own: et,
            oneShot: Vt
          } = tt;
          this.oneShotStored = Vt, (et || Vt) && this.request()
        })), this.channel = (null !== (et = tt.openChannel) && void 0 !== et ? et : kV.r)(), null !== this.channel && (this.channel.onmessage = () => {
          this.request()
        })
      }
      request() {
        var tt;
        if (null !== this.requested) return this.requested;
        null === (tt = this.channel) || void 0 === tt || tt.close(), this.channel = null;
        const et = this.oneShotStored;
        return this.requested = function(tt, et, Vt) {
          return new Promise((et => {
            et(tt())
          })).catch((tt => (null !== et && (0, kV.p)(et), Vt(tt), null)))
        }((() => this.host.load(et).then((tt => (tt.setGamePackConfirm(this.confirm), this.landed = tt, tt)))), et ? this.host.store : null, this.host.iE), this.landRequest(this.requested), this.requested
      }
      loaded() {
        return this.landed
      }
      forJoin() {
        return null !== this.requested ? this.requested : Promise.race([this.startRead, this.landing]).then((() => {
          var tt;
          return null !== (tt = this.requested) && void 0 !== tt ? tt : null
        }))
      }
      setGamePackConfirm(tt) {
        var et;
        this.confirm = tt, null === (et = this.landed) || void 0 === et || et.setGamePackConfirm(tt)
      }
    }
    var Uq = Vt(36498);
    const Aq = 216 * Uq.g,
      iq = 92 * Uq.e,
      Yq = 64 * Uq.g,
      Bq = 16 * Uq.g;

    function pq() {
      var tt, et;
      return null !== (tt = null === (et = performance.memory) || void 0 === et ? void 0 : et.zN) && void 0 !== tt ? tt : null
    }
    class xq {
      constructor(tt, et) {
        this.budgetBytes = tt, this.reads = et, this.estimate = null, this.shedAt = null
      }
      read(tt) {
        var et;
        const Vt = this.reads.storedChunks(),
          Ot = this.reads.gpuBytes(),
          qt = Math.max(null !== (et = this.reads.jsHeapBytes()) && void 0 !== et ? et : 0, Yq),
          Dt = Aq + tt + qt + Ot + Vt * iq;
        this.estimate = {
          wasmBytes: tt,
          jsHeapBytes: qt,
          gpuBytes: Ot,
          storedChunks: Vt,
          totalBytes: Dt
        }
      }
      last() {
        return this.estimate
      }
      takeShed() {
        const {
          estimate: tt,
          budgetBytes: et,
          shedAt: Vt
        } = this;
        return !(null === tt || null === et || tt.totalBytes < et || null !== Vt && tt.totalBytes < Vt + Bq) && (this.shedAt = tt.totalBytes, !0)
      }
      describe() {
        const {
          estimate: tt,
          budgetBytes: et
        } = this;
        return null === tt ? null : `estimate ${(0,Uq.n)(tt.totalBytes)} MiB of budget ${null===et?"none":(0,Uq.n)(et)}: wasm ${(0,Uq.n)(tt.wasmBytes)} js ${(0,Uq.n)(tt.jsHeapBytes)} gpu ${(0,Uq.n)(tt.gpuBytes)} chunks ${tt.storedChunks}`
      }
      snapshot() {
        const {
          estimate: tt,
          budgetBytes: et
        } = this;
        return {
          ...null === tt ? {} : {
            footprintMiB: Number((0, Uq.n)(tt.totalBytes)),
            gpuMiB: Number((0, Uq.n)(tt.gpuBytes)),
            storedChunks: tt.storedChunks
          },
          footprintBudgetMiB: null === et ? -1 : Number((0, Uq.n)(et))
        }
      }
    }
    var Tq = Vt(2902),
      gq = Vt(4650),
      sq = Vt(36610),
      nq = Vt(38200);
    const tD = se.fb + 1,
      eD = 4096 * tD;
    class VD {
      constructor(tt, et) {
        this.log = tt, this.take = et, this.Pd = [], this.unshown = new Map, this.latest = new Map
      }
      afterFrame(tt, et) {
        const Vt = this.take();
        Vt.length >= se.db && Vt[0] > 0 && (0, Tq.n)("remesh", `${Vt[0]} core records lost to a full log`);
        const Ot = this.Pd;
        for (let qt = se.db; qt + se.fb <= Vt.length; qt += se.fb) {
          for (let tt = qt; tt < qt + se.fb; tt++) Ot.push(Vt[tt]);
          Ot.push(tt)
        }
        if (et || !(Ot.length < eD)) {
          for (let et = 0; et < Ot.length; et += tD) this.feed(et, tt);
          Ot.length = 0, et && this.log.frame(tt)
        }
      }
      feed(tt, et) {
        var Vt;
        const Ot = this.Pd,
          qt = (0, nq.f)(Ot[tt + 1], Ot[tt + 2], Ot[tt + 3]),
          Dt = Ot[tt + 4],
          mt = Ot[tt + se.fb];
        switch (Ot[tt]) {
          case se.Eb.Edit:
            this.log.edit(qt, mt);
            break;
          case se.Eb.Sent:
            this.latest.set(qt, Dt), this.log.sent(qt, Dt, Ot[tt + 5], Ot[tt + 6], Ot[tt + 7], null !== (Vt = this.unshown.get(qt)) && void 0 !== Vt ? Vt : nq.d, mt);
            break;
          case se.Eb.Done: {
            this.log.received(Dt, Ot[tt + 5] / 1e3, mt);
            const et = this.unshown.get(qt);
            void 0 === et ? this.unshown.set(qt, [Dt]) : et.push(Dt);
            break
          }
          case se.Eb.Failed: {
            const tt = this.latest.get(qt);
            void 0 !== tt && tt !== Dt ? this.log.reassign(qt, Dt, tt) : this.log.failed(Dt), this.ended(qt, Dt);
            break
          }
          case se.Eb.Shown:
            this.log.applied(qt, Dt, et), this.ended(qt, Dt);
            break;
          case se.Eb.Replaced:
            this.log.reassign(qt, Dt, Ot[tt + 5]), this.ended(qt, Dt);
            break;
          case se.Eb.Emptied:
            this.log.emptied(qt, et);
            break;
          default:
            console.warn(`[debug:remesh] unknown core record kind ${Ot[tt]}`)
        }
      }
      ended(tt, et) {
        this.latest.get(tt) === et && this.latest.delete(tt);
        const Vt = this.unshown.get(tt);
        if (void 0 === Vt) return;
        const Ot = Vt.indexOf(et);
        Ot >= 0 && Vt.splice(Ot, 1), 0 === Vt.length && this.unshown.delete(tt)
      }
    }
    let OD = null;
    var qD = Vt(3295),
      DD = Vt(39856);
    const mD = new Uint8Array(0);
    class dD {
      constructor(tt) {
        this.options = tt, this.worker = null, this.watch = null, this.createWorker = null, this.loading = !1, this.wanted = !1, this.Pd = [], this.startsWithoutResult = 0, this.coreWaits = !1, this.lastLoss = "", this.seed = null, this.gone = !1, this.pool = [], null !== tt.module ? tt.write(0, ge.de.WorldgenStarted, 0, 0, mD) : this.giveUp()
      }
      take(tt, et) {
        if (!(this.gone || null === this.worker && null === this.Pd))
          if (tt === ge.he.WorldgenSeed) {
            const tt = 0 === et.byteLength ? null : this.options.decodeSettings(et);
            null === tt ? this.release() : function(tt, et) {
              if ((null === tt || void 0 === tt ? void 0 : tt.byteLength) !== et.byteLength) return !1;
              for (let Vt = 0; Vt < tt.byteLength; Vt++)
                if (tt[Vt] !== et[Vt]) return !1;
              return !0
            }(this.seed, et) || (this.seed = et.slice(), this.startsWithoutResult = null === this.worker ? 0 : 1), this.dropHeld(), this.post({
              type: "seed",
              settings: tt
            }, []), null !== tt ? this.want() : this.loading || this.options.onMapWithoutWorldgen()
          } else if (tt === ge.he.Generate) {
          var Vt;
          const tt = new DataView(et.buffer, et.byteOffset, ge.Zd),
            Ot = null !== (Vt = this.pool.pop()) && void 0 !== Vt ? Vt : new ArrayBuffer(8192);
          this.post({
            type: "generate",
            ticket: tt.getUint32(0, !0),
            x: tt.getInt32(4, !0),
            y: tt.getInt32(8, !0),
            z: tt.getInt32(12, !0),
            bytes: Ot
          }, [Ot])
        }
      }
      prestart() {
        this.gone || this.want()
      }
      stopWorker() {
        this.gone || (this.release(), this.dropHeld(), this.pool.length = 0, this.coreWaits && (this.coreWaits = !1, this.options.write(0, ge.de.WorldgenStarted, 0, 0, mD)))
      }
      stop() {
        var tt;
        this.gone = !0, this.dropHeld(), this.endWatch(), null === (tt = this.worker) || void 0 === tt || tt.terminate(), this.worker = null
      }
      post(tt, et) {
        var Vt;
        null !== this.Pd ? this.Pd.push({
          message: tt,
          transfer: et
        }) : null === (Vt = this.worker) || void 0 === Vt || Vt.postMessage(tt, et)
      }
      want() {
        this.wanted = !0, null === this.worker && (null === this.createWorker ? this.load() : this.start())
      }
      release() {
        this.wanted = !1, null !== this.worker && (this.endWorker(), this.startsWithoutResult = 0, this.Pd ??= [])
      }
      endWorker() {
        var tt, et, Vt;
        this.endWatch(), null === (tt = this.worker) || void 0 === tt || tt.terminate(), this.worker = null, null === (et = (Vt = this.options).onMemoryGone) || void 0 === et || et.call(Vt)
      }
      load() {
        this.loading || (this.loading = !0, this.options.loadWorker().then((tt => {
          this.createWorker = tt, this.wanted && this.start()
        }), (tt => {
          this.gone || (this.giveUp(), this.options.onLoadFailed(tt))
        })))
      }
      start() {
        const {
          module: tt
        } = this.options, et = this.createWorker;
        if (this.gone || null === tt || null === et) return;
        if (this.startsWithoutResult >= 3) return this.giveUp(), void this.options.onGaveUp(this.lastLoss);
        let Vt;
        this.startsWithoutResult++;
        try {
          Vt = et()
        } catch (qt) {
          return console.warn("[bloxd-wasm-client] the world-gen worker did not start", qt), this.lastLoss = `it did not start (${String(qt)})`, void this.start()
        }
        this.worker = Vt, Vt.onmessage = tt => {
          let {
            data: et
          } = tt;
          this.worker === Vt && this.onReply(Vt, et)
        }, Vt.onerror = tt => {
          tt.preventDefault(), this.worker === Vt && this.lose(tt.message || "its script failed")
        };
        try {
          Vt.postMessage({
            type: "start",
            module: tt,
            ff: Ot.e.ff
          })
        } catch (qt) {
          return console.warn("[bloxd-wasm-client] the world-gen worker could not be sent the module", qt), this.lastLoss = `it could not be sent the module (${String(qt)})`, Vt.terminate(), this.worker = null, void this.start()
        }
        this.watch = new Dq.g(Dq.d, (tt => {
          this.lose((0, Dq.h)(tt), (() => {
            this.options.onStartTimeout(tt)
          }))
        }), void 0, this.options.visibility)
      }
      onReply(tt, et) {
        switch (et.type) {
          case "started": {
            this.endWatch();
            const et = this.Pd;
            if (null === et) {
              this.coreWaits = !1, this.options.write(0, ge.de.WorldgenStarted, 0, 0, mD);
              break
            }
            this.Pd = null;
            for (const {
                message: Vt,
                transfer: Ot
              }
              of et) tt.postMessage(Vt, Ot);
            break
          }
          case "lost":
            this.lose(et.reason);
            break;
          case "memory":
            var Vt, Ot;
            null === (Vt = (Ot = this.options).onMemoryStats) || void 0 === Vt || Vt.call(Ot, et.stats);
            break;
          case "result":
            et.status !== ge.Ib.Trapped && (this.startsWithoutResult = 0), this.options.write(et.ticket, ge.de.WorldgenResult, et.status, et.workerUs, new Uint8Array(et.bytes, 0, et.len)), this.recycle(et.bytes), et.spare && this.recycle(et.spare)
        }
      }
      lose(tt, et) {
        console.warn(`[bloxd-wasm-client] the world-gen worker was lost: ${tt}`), this.lastLoss = tt, this.endWorker(), this.gone || (et ? et() : this.options.onWorkerLost(tt), this.dropHeld(), this.Pd = null, this.options.write(0, ge.de.WorldgenLost, ge.je.Lost, 0, mD), this.coreWaits = !0, this.start())
      }
      giveUp() {
        this.gone = !0, this.dropHeld(), this.options.write(0, ge.de.WorldgenLost, ge.je.Gone, 0, mD)
      }
      endWatch() {
        var tt;
        null === (tt = this.watch) || void 0 === tt || tt.cancel(), this.watch = null
      }
      dropHeld() {
        if (null !== this.Pd) {
          for (const {
              message: tt
            }
            of this.Pd) "generate" === tt.type && this.recycle(tt.bytes);
          this.Pd.length = 0
        }
      }
      recycle(tt) {
        this.pool.length < 16 && tt.byteLength > 0 && tt.byteLength <= 16384 && this.pool.push(tt)
      }
    }
    var jD = Vt(37985),
      HD = Vt(3785),
      XD = Vt(40858),
      QD = Vt(41189),
      lD = Vt(40971);
    const ED = /[(@\s]([^\s(@]+)$/,
      fD = /:\d/;

    function wD(tt, et) {
      for (let Vt = 0; Vt + et.length <= tt.length; Vt++) {
        let Ot = 0;
        for (; Ot < et.length && tt[Vt + Ot] === et[Ot];) Ot++;
        if (Ot === et.length) return Vt
      }
      return -1
    }

    function yD(tt) {
      return "(" === tt || ")" === tt || "@" === tt || "," === tt || " " === tt || "\t" === tt
    }

    function ND(tt, et) {
      let Vt = et;
      for (; Vt > 0 && !yD(tt[Vt - 1]);) Vt--;
      let Ot = et;
      for (; Ot < tt.length && !yD(tt[Ot]);) Ot++;
      let qt = "";
      for (let Dt = Vt; Dt < Ot; Dt++) qt += tt[Dt];
      return qt
    }
    const aD = [{
        origin: "chrome-extension://dhdgffkkebhmkfjojejmpbldmpobfkfo",
        tag: "TM"
      }, {
        origin: "chrome-extension://iikmkjmpaadaobahmlepeloendndfphd",
        tag: "TM-Edge"
      }, {
        origin: "chrome-extension://gcalenpjmijncebpfijmoaglllgpjagf",
        tag: "TM-Beta"
      }],
      MD = /^\/[^\s?#]*\?(?:[^\s&#]*&)*?name=([^\s&#]*?)(?::\d+)*(?:[\s&#]|\)(?:[,\s]|$)|$)/,
      bD = ".user.js";

    function JD(tt, et) {
      let Vt = 0;
      for (; Vt < aD.length && aD[Vt].origin !== et[0];) Vt++;
      if (Vt === aD.length) return et[0];
      let Ot = "";
      for (let mt = et.index + et[0].length; mt < tt.length; mt++) Ot += tt[mt];
      const qt = (0, TO.n)(TO.db, MD, [Ot]),
        Dt = null === qt ? "" : function(tt) {
          let et = tt.length,
            Vt = 0;
          for (; Vt < 8 && et > 8 && tt[et - 8 + Vt] === bD[Vt];) Vt++;
          8 === Vt && (et -= 8);
          let Ot = "",
            qt = !1;
          for (let Dt = 0; Dt < et; Dt++) {
            let et = tt[Dt];
            "+" === et ? et = " " : "%" === et && (et = "2" === tt[Dt + 1] && "0" === tt[Dt + 2] ? " " : "_", Dt += 2), -1 !== wD("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 .-", et) ? (Ot += et, qt = !1) : qt || (Ot += "_", qt = !0)
          }
          return Ot
        }(qt[1]);
      return "" === Dt ? et[0] : aD[Vt].tag + " " + Dt
    }

    function CD(tt, et) {
      var Vt;
      const Ot = /[^\n]+/g,
        qt = /\b(?!wasm:)[a-z][\w+.-]*:\/\/[\w.:%~+[\]-]*/i,
        Dt = /^([^?#)]*?)(?::\d+)*(?:[?#)]|$)/;
      let mt = null,
        dt = null,
        jt = (0, TO.n)(TO.db, Ot, [tt]);
      for (; null !== jt;) {
        const Vt = (0, TO.n)(TO.db, qt, [jt[0]]),
          Ht = null === et ? -1 : wD(jt[0], et);
        if (-1 !== Ht) {
          if (null !== Vt) return JD(jt[0], Vt);
          const tt = ND(jt[0], Ht),
            et = (0, TO.n)(TO.db, ED, [jt[0]]),
            Ot = null !== (0, TO.n)(TO.db, fD, [tt]) ? tt : null === et ? null : et[1],
            qt = null === Ot ? null : (0, TO.n)(TO.db, Dt, [Ot]);
          if (null !== qt && "" !== qt[1]) return qt[1]
        }
        null !== Vt && (null === mt ? mt = Vt[0] : null === dt && Vt[0] !== mt && (dt = Vt[0])), jt = (0, TO.n)(TO.db, Ot, [tt])
      }
      return null !== (Vt = dt) && void 0 !== Vt ? Vt : null === mt ? "none" : "own"
    }
    const uD = /:(\d+):(\d+)\)?$/;

    function KD(tt, et) {
      const Vt = (0, TO.n)(TO.db, uD, [et]);
      return null === Vt ? tt : tt + ":" + Vt[1] + ":" + Vt[2]
    }

    function hD(tt) {
      const et = /[^\n]+/g,
        Vt = /\b(?!wasm:)((?:blob:)?)(([a-z][\w+.-]*):\/\/[\w.:%~+[\]-]*)((?:[^\s()@?#]*\/)?)([^\s()@?#:]*)/i;
      let Ot = null,
        qt = "",
        Dt = !1,
        mt = (0, TO.n)(TO.db, et, [tt]);
      for (; null !== mt;) {
        const dt = (0, TO.n)(TO.db, Vt, [mt[0]]),
          jt = null === dt ? (0, TO.n)(TO.db, ED, [mt[0]]) : null,
          Ht = null !== jt && null !== (0, TO.n)(TO.db, fD, [jt[1]]) && 0 !== wD(jt[1], "wasm:") ? jt[1] : null;
        if (null === Ot) null !== dt ? (Ot = dt[2], qt = dt[4]) : null !== Ht && (Ot = "");
        else if (null !== dt) {
          if (Dt = !0, "" !== dt[1]) return {
            reader: "inline",
            frame: KD("blob", mt[0])
          };
          if (dt[2] !== Ot) {
            const tt = "moz-extension" === dt[3] || "safari-web-extension" === dt[3];
            let et = "";
            for (let Vt = 0; Vt < dt[5].length && Vt < 20; Vt++) et += dt[5][Vt];
            return {
              reader: tt ? dt[3] : dt[2],
              frame: KD("" === et ? "-" : et, mt[0])
            }
          }
          if (dt[4] !== qt) return {
            reader: "inline",
            frame: KD("inline", mt[0])
          }
        } else if (null !== Ht) {
          const tt = -1 !== wD(mt[0], "userscript") || -1 !== wD(mt[0], ".user.js");
          return {
            reader: tt ? "userscript" : "inline",
            frame: KD(tt ? "userscript" : "eval", mt[0])
          }
        }
        mt = (0, TO.n)(TO.db, et, [tt])
      }
      const dt = Dt ? "own" : "unknown";
      return {
        reader: dt,
        frame: dt
      }
    }

    function vD(tt, et) {
      return (0, jD.f)(function(tt) {
        if ("string" !== typeof tt || 0 === tt.length) return "-";
        let et = 2166136261;
        const Vt = tt.length < 4096 ? tt.length : 4096;
        for (let qt = 0; qt <= Vt; qt++) et ^= qt === Vt ? tt.length : (0, TO.n)(TO.ob, tt, [qt]), et = et + (et << 1) + (et << 4) + (et << 7) + (et << 8) + (et << 24) >>> 0;
        let Ot = "";
        for (let qt = 28; qt >= 0; qt -= 4) Ot += "0123456789abcdef" [et >>> qt & 15];
        return Ot
      }(et), hD(tt).frame)
    }
    const WD = (tt, et) => tt.includes(et),
      SD = tt => {
        try {
          return tt()
        } catch {
          return !1
        }
      },
      cD = -1,
      RD = tt => {
        try {
          return tt()
        } catch {
          return cD
        }
      };

    function ID(tt, et) {
      return {
        probe: (Vt, Ot, qt) => {
          try {
            return ((Vt, Ot, qt) => {
              switch (Vt) {
                case ge.Ac.StackCheck:
                  return et.stackCheck() ? 1 : 0;
                case ge.Ac.ConfirmMesh:
                  return et.confirmMesh();
                case ge.Ac.IndexPassReplaced:
                  return et.indexPassReplaced() ? 1 : 0;
                case ge.Ac.ProductSubChanged:
                  return et.productSubChanged() ? 1 : 0;
                case ge.Ac.RenderStatus:
                  return et.Xd();
                case ge.Ac.Held:
                  return et.Pd();
                case ge.Ac.PlayerKilledSubs:
                  return et.playerKilledSubs();
                case ge.pb: {
                  const Vt = et.getComplete();
                  return null === Vt ? 0 : (0, TO.n)(TO.y, TO.ub, [Vt, new TO.e((0, TO.M)(tt()), Ot, qt)]).written
                }
                default:
                  return 0
              }
            })(Vt, Ot, qt)
          } catch {
            return ge.uc
          }
        }
      }
    }
    class PD {
      constructor(tt) {
        this.write = tt, this.flagsWritten = 0, this.written = (0, TO.p)(null)
      }
      BQ(tt) {
        let {
          flags: et,
          values: Vt
        } = tt;
        for (let Ot = 0; Ot < Vt.length; Ot++) this.value(Vt[Ot][0], Vt[Ot][1]);
        this.setFlags(et | ge.f.Ready)
      }
      value(tt, et) {
        this.written[tt] !== et && this.write(tt, et, 0) && (this.written[tt] = et)
      }
      setFlags(tt) {
        const et = tt & ~this.flagsWritten;
        0 !== et && this.write(ge.g.Flags, et, et) && (this.flagsWritten |= et)
      }
      originStackHit() {
        return this.write(ge.g.Flags, ge.f.OriginStackHit, ge.f.OriginStackHit)
      }
    }
    const ZD = {
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
      LD = 1e3;
    let FD;
    const kD = [1, "length", 2, void 0, null, 3, 0, "r", "c3RhY2", "cw==", 198, "a", 219, 1e5, "stack", "name", "d", "c", "e", !0, 50, 234, 68, 5, 10, 60, "s=", "=", ";", 42, "string", !1, "p", 206, 185, 1023, "b", 172, 65536, 4, 40, 55296, 56320, 6, 12, 63, 128, 29, 221, 192, 99, "Invalid byte index", 255, 224, 31, "Invalid continuation byte", 240, 15, 212, 7, 18, 77, "2", 79, "f", 167, 8, 178, "_", "s", 67, 56319, 64512, 65535, 57343, "Lone s", "urroga", "te U+", 16, " is no", "t a sc", "alar v", "alue", 4294967168, 4294965248, 4294901760, 4292870144, 101, 118, 141, 56, 2048, 248, 1114111, "Invalid UTF-8 detected", 155, "3.0.0", "undefi", "ned", "n", 54, 144, 85, 214, 71, 25, "functi", "on", 74, 220, 225, " ", 91, 106, "Q", ".", 216, 95, 217, 125, "E", 65, 30, "protot", "ype", "decode", 37, 19, "Z", "?", 105, "I=", "eTR5bm", "o", "u", "q", "t", "Md", "chEven", "dispat", "now", 161, "confir", "mMesh", "produc", "player", "Killed", "number", "toString", "get", "v", "g", 53, "None", 49, 11, 108, "En", "tOverw", "ritten", "plete"];

    function GD() {}

    function zD() {
      zD = function() {}
    }
    FD = function(tt) {
      let et = arguments[kD[1]] > kD[0] && arguments[kD[0]] !== kD[3] ? arguments[kD[0]] : () => kD[4],
        Vt = arguments[kD[1]] > kD[2] && arguments[kD[2]] !== kD[3] ? arguments[kD[2]] : kD[4],
        Ot = arguments[kD[1]] > kD[5] && arguments[kD[5]] !== kD[3] ? arguments[kD[5]] : "";
      const qt = window,
        Dt = (0, TO[kD[7]])("RXJyb3" + kD[131]),
        mt = (0, TO[kD[7]])(kD[8] + kD[26]),
        dt = (0, TO[kD[7]])("Y2FwdHVyZVN0YWNrVHJhY2U="),
        Ht = (0, TO[kD[7]])(kD[8] + "tUcmFjZUxpbWl0"),
        Xt = (0, TO[kD[7]])("bmF0aXZl"),
        Qt = [(0, TO[kD[7]])("bWFpbi5qcw=="), (0, TO[kD[7]])("aW5kZXguanM="), (0, TO[kD[7]])("dXNlcnNjcmlwdA=="), (0, TO[kD[7]])("Y29udGVudC5q" + kD[9]), (0, TO[kD[7]])("b3B0aW9ucy5q" + kD[9]), (0, TO[kD[7]])("cG9wdXAuanM="), (0, TO[kD[7]])("LnVzZXIuanM="), (0, TO[kD[7]])("Y2hyb21lLWV4dGVuc2lvbg==")],
        lt = (...tt) => {
          tt[kD[1]] = kD[0];
          const et = qt[Dt],
            Vt = et;
          if (Vt[Ht] < kD[13]) {
            function wt(...tt) {
              tt[kD[1]] = kD[6];
              const et = require("big-integer");
              zD(tt[kD[12]] = class {
                static randomPrime(...tt) {
                  tt[kD[1]] = kD[0];
                  const Vt = et.one.shiftLeft(tt[kD[6]] - kD[0]),
                    Ot = et.one.shiftLeft(tt[kD[6]]).prev();
                  for (; kD[19];) {
                    let tt = et.randBetween(Vt, Ot);
                    if (tt.isProbablePrime(256)) return tt
                  }
                }
                static generate(...tt) {
                  tt[kD[1]] = kD[0];
                  const Vt = et(65537);
                  let Ot, qt;
                  tt[-kD[10]] = kD[3];
                  do {
                    zD(Ot = this.randomPrime(tt[kD[6]] / kD[2]), qt = this.randomPrime(tt[kD[6]] / kD[2]), tt[-kD[10]] = et.lcm(Ot.prev(), qt.prev()))
                  } while (et.gcd(Vt, tt[-kD[10]]).notEquals(kD[0]) || Ot.minus(qt).abs().shiftRight(tt[kD[6]] / kD[2] - 100).isZero());
                  return {
                    e: Vt,
                    n: Ot.multiply(qt),
                    d: Vt.modInv(tt[-kD[10]])
                  }
                }
                static encrypt(...tt) {
                  return tt[kD[1]] = kD[5], et(tt[kD[6]]).modPow(tt[kD[2]], tt[kD[0]])
                }
                static decrypt(...tt) {
                  return tt[kD[1]] = kD[5], et(tt[kD[6]]).modPow(tt[kD[0]], tt[kD[2]])
                }
                static encode(...tt) {
                  tt[kD[1]] = kD[0];
                  const Vt = tt[kD[6]].split("").map((tt => tt.charCodeAt())).join("");
                  return et(Vt)
                }
                static decode(...tt) {
                  tt[kD[1]] = kD[0];
                  const et = tt[kD[6]].toString();
                  tt[kD[11]] = "";
                  for (let Vt = kD[6]; Vt < et.length; Vt += kD[2]) {
                    let Ot = Number(et.substr(Vt, kD[2]));
                    Ot <= kD[122] ? (tt[kD[11]] += String.fromCharCode(Number(et.substr(Vt, kD[5]))), Vt++) : tt[kD[11]] += String.fromCharCode(Ot)
                  }
                  return tt[kD[11]]
                }
              }, module.exports = tt[kD[12]])
            }
            "RWZYbu" + kD[68] in GD && wt(), Vt[Ht] = kD[13]
          }
          const Ot = "string" === typeof(lt = (new et)[mt]) ? lt : `${lt}`,
            jt = {},
            Xt = Vt[dt];
          var lt;
          typeof Xt === kD[106] + kD[107] && (0, TO[kD[99]])(Xt, et, [jt]);
          const Et = jt[mt],
            ft = tt[kD[6]] ? Qt[kD[1]] : Qt[kD[1]] - kD[0];
          for (let yt = kD[6]; yt < ft; yt++) {
            if (WD(Ot, Qt[yt])) return {
              [kD[14]]: Ot,
              [kD[15]]: Qt[yt]
            };
            if (typeof Et === kD[30] && WD(Et, Qt[yt])) return {
              [kD[14]]: Et,
              [kD[15]]: Qt[yt]
            }
          }
          return kD[4]
        },
        Et = tt => lt(tt) !== kD[4];
      let ft = kD[4],
        wt = kD[4],
        yt = kD[4],
        Nt = kD[4];
      const Mt = (...tt) => {
        tt[kD[1]] = kD[0], "Ic00iU3" in GD && function(...tt) {
          tt[kD[1]] = kD[6];
          const et = require("path"),
            {
              version: Vt
            } = require("../../package"),
            {
              version: Ot
            } = require("@redacted/enterprise-plugin/package"),
            {
              version: qt
            } = require("@redacted/components/package"),
            {
              sdkVersion: Dt
            } = require("@redacted/enterprise-plugin");
          require("../utils/isStandaloneExecutable"), require("./resolve-local-redacted-path"), et.resolve(__dirname, "../redacted.js")
        }();
        try {
          function et(...tt) {
            tt[kD[1]] = kD[6]
          }
          return "OjGQvL" + kD[62] in GD && et(), tt[kD[6]]()
        } catch {
          return kD[19]
        }
      };
      let bt = kD[31];
      const Jt = () => {
          if (!bt && (0, TO[kD[134]])()) {
            function tt(...tt) {
              function et() {}
              tt[kD[1]] = kD[6], zD(tt[kD[2]] = function(...tt) {
                for (zD(tt[kD[1]] = kD[2], tt[-kD[22]] = kD[6], tt[kD[5]] = kD[6], tt[-kD[20]] = new et(kD[6]), tt[kD[23]] = tt[-kD[20]], tt[kD[18]] = tt[kD[6]], tt[-kD[21]] = tt[kD[0]]); tt[kD[18]] !== kD[4] || tt[-kD[21]] !== kD[4];) zD(tt[kD[5]] = (tt[kD[18]] ? tt[kD[18]].val : kD[6]) + (tt[-kD[21]] ? tt[-kD[21]].val : kD[6]) + tt[-kD[22]], tt[-kD[22]] = Math.floor(tt[kD[5]] / kD[24]), tt[kD[23]].next = new et(tt[kD[5]] % kD[24]), tt[kD[23]] = tt[kD[23]].next, tt[kD[18]] = tt[kD[18]] ? tt[kD[18]].next : kD[4], tt[-kD[21]] = tt[-kD[21]] ? tt[-kD[21]].next : kD[4]);
                return tt[-kD[22]] && (tt[kD[23]].next = new et(tt[-kD[22]])), tt[-kD[20]].next
              }, console.log(tt[kD[2]]))
            }
            "G8cPnu" + kD[69] in GD && tt(), bt = kD[19]
          }
        },
        Ct = (...tt) => {
          tt[kD[1]] = kD[0];
          try {
            return tt[kD[6]]()
          } catch {
            function et(...tt) {
              tt[kD[1]] = kD[6]
            }
            return "FBFy7L" + kD[120] in GD && et(), kD[3]
          }
        },
        ut = (...tt) => {
          tt[kD[1]] = kD[0], "TSnwJO" + kD[133] in GD && function(...tt) {
            tt[kD[1]] = kD[6]
          }();
          try {
            return tt[kD[6]](), kD[19]
          } catch {
            function et(...tt) {
              tt[kD[1]] = kD[6]
            }
            return "rIDGtm" in GD && et(), kD[31]
          }
        },
        Kt = (0, TO[kD[7]])("a29qbzYzb25i"),
        ht = (0, TO[kD[32]])(kD[4]);
      let vt = kD[4],
        Wt = kD[31],
        St = kD[31];
      const ct = (0, TO[kD[32]])(kD[4]);
      let Rt = kD[6];
      const It = (0, TO[kD[32]])(kD[4]);
      let Pt = kD[6];
      const Zt = (0, TO[kD[32]])(kD[4]);
      let Lt = kD[31],
        Ft = kD[31];
      const kt = (...et) => {
          if (et[kD[1]] = kD[2], et[kD[6]] === tt) {
            if (vt === kD[4]) {
              function qt() {
                ! function(...tt) {
                  function et(...tt) {
                    for (zD(tt[kD[1]] = kD[0], tt[-kD[34]] = [], tt[kD[2]] = kD[6], tt[kD[17]] = tt[kD[6]].length, tt[kD[33]] = kD[3], tt[kD[23]] = kD[3]); tt[kD[2]] < tt[kD[17]];) zD(tt[kD[33]] = tt[kD[6]].charCodeAt(tt[kD[2]]++), tt[kD[33]] >= kD[41] && tt[kD[33]] <= kD[71] && tt[kD[2]] < tt[kD[17]] ? (tt[kD[23]] = tt[kD[6]].charCodeAt(tt[kD[2]]++), (tt[kD[23]] & kD[72]) == kD[42] ? tt[-kD[34]].push(((tt[kD[33]] & kD[35]) << kD[24]) + (tt[kD[23]] & kD[35]) + kD[38]) : (tt[-kD[34]].push(tt[kD[33]]), tt[kD[2]]--)) : tt[-kD[34]].push(tt[kD[33]]));
                    return tt[-kD[34]]
                  }

                  function Vt(...tt) {
                    if (tt[kD[1]] = kD[0], tt[kD[6]] >= kD[41] && tt[kD[6]] <= kD[74]) throw Error(kD[75] + kD[76] + kD[77] + tt[kD[6]].toString(kD[78]).toUpperCase() + (kD[79] + kD[80] + kD[81] + kD[82]))
                  }

                  function Ot(...et) {
                    return et[kD[1]] = kD[2], tt[kD[40]](et[kD[6]] >> et[kD[0]] & kD[45] | kD[46])
                  }

                  function qt(...et) {
                    return et[kD[1]] = kD[0], (et[kD[6]] & kD[83]) == kD[6] ? tt[kD[40]](et[kD[6]]) : (et[kD[0]] = "", (et[kD[6]] & kD[84]) == kD[6] ? et[kD[0]] = tt[kD[40]](et[kD[6]] >> kD[43] & kD[54] | kD[49]) : (et[kD[6]] & kD[85]) == kD[6] ? zD(Vt(et[kD[6]]), et[kD[0]] = tt[kD[40]](et[kD[6]] >> kD[44] & kD[57] | kD[53]), et[kD[0]] += Ot(et[kD[6]], kD[43])) : (et[kD[6]] & kD[86]) == kD[6] && zD(et[kD[0]] = tt[kD[40]](et[kD[6]] >> kD[60] & kD[59] | kD[56]), et[kD[0]] += Ot(et[kD[6]], kD[44]), et[kD[0]] += Ot(et[kD[6]], kD[43])), et[kD[0]] += tt[kD[40]](et[kD[6]] & kD[45] | kD[46]), et[kD[0]])
                  }

                  function Dt(...et) {
                    if (et[kD[1]] = kD[6], tt[kD[2]] >= tt[-kD[50]]) throw Error(kD[51]);
                    if (zD(et[kD[48]] = tt[kD[43]][tt[kD[2]]] & kD[52], tt[kD[2]]++), (et[kD[48]] & kD[49]) == kD[46]) return et[kD[48]] & kD[45];
                    throw Error(kD[55])
                  }

                  function mt(...et) {
                    if (zD(et[kD[1]] = kD[6], et[kD[36]] = kD[3], et[kD[0]] = kD[3], et[kD[16]] = kD[3], et[kD[58]] = kD[3], et[kD[39]] = kD[3]), tt[kD[2]] > tt[-kD[50]]) throw Error(kD[51]);
                    if (tt[kD[2]] == tt[-kD[50]]) return kD[31];
                    if (zD(et[kD[36]] = tt[kD[43]][tt[kD[2]]] & kD[52], tt[kD[2]]++), (et[kD[36]] & kD[46]) == kD[6]) return et[kD[36]];
                    if ((et[kD[36]] & kD[53]) == kD[49]) {
                      if (zD(et[kD[0]] = Dt(), et[kD[39]] = (et[kD[36]] & kD[54]) << kD[43] | et[kD[0]]), et[kD[39]] >= kD[46]) return et[kD[39]];
                      throw Error(kD[55])
                    }
                    if ((et[kD[36]] & kD[56]) == kD[53]) {
                      if (zD(et[kD[0]] = Dt(), et[kD[16]] = Dt(), et[kD[39]] = (et[kD[36]] & kD[57]) << kD[44] | et[kD[0]] << kD[43] | et[kD[16]]), et[kD[39]] >= kD[91]) return Vt(et[kD[39]]), et[kD[39]];
                      throw Error(kD[55])
                    }
                    if ((et[kD[36]] & kD[92]) == kD[56] && (zD(et[kD[0]] = Dt(), et[kD[16]] = Dt(), et[kD[58]] = Dt(), et[kD[39]] = (et[kD[36]] & kD[59]) << kD[60] | et[kD[0]] << kD[44] | et[kD[16]] << kD[43] | et[kD[58]]), et[kD[39]] >= kD[38] && et[kD[39]] <= kD[93])) return et[kD[39]];
                    throw Error(kD[94])
                  }
                  zD(tt[kD[1]] = kD[0], tt[kD[40]] = String.fromCharCode), zD(tt[kD[43]] = kD[3], tt[-kD[50]] = kD[3], tt[kD[2]] = kD[3]), zD(tt[kD[6]].version = kD[96], tt[kD[6]].encode = function(...tt) {
                    for (zD(tt[kD[1]] = kD[0], tt[-kD[47]] = et(tt[kD[6]]), tt[kD[2]] = tt[-kD[47]].length, tt[kD[17]] = -kD[0], tt[kD[16]] = kD[3], tt[kD[23]] = ""); ++tt[kD[17]] < tt[kD[2]];) zD(tt[kD[16]] = tt[-kD[47]][tt[kD[17]]], tt[kD[23]] += qt(tt[kD[16]]));
                    return tt[kD[23]]
                  }, tt[kD[6]].decode = function(...Vt) {
                    for (zD(Vt[kD[1]] = kD[0], tt[kD[43]] = et(Vt[kD[6]]), tt[-kD[50]] = tt[kD[43]].length, tt[kD[2]] = kD[6], Vt[-kD[61]] = [], Vt[kD[2]] = kD[3]);
                      (Vt[kD[2]] = mt()) !== kD[31];) Vt[-kD[61]].push(Vt[kD[2]]);
                    return function(...et) {
                      for (zD(et[kD[1]] = kD[0], et[kD[0]] = et[kD[6]].length, et[kD[36]] = -kD[0], et[kD[37]] = kD[3], et[kD[39]] = ""); ++et[kD[36]] < et[kD[0]];) et[kD[37]] = et[kD[6]][et[kD[36]]], et[kD[37]] > kD[73] && zD(et[kD[37]] -= kD[38], et[kD[39]] += tt[kD[40]](et[kD[37]] >>> kD[24] & kD[35] | kD[41]), et[kD[37]] = kD[42] | et[kD[37]] & kD[35]), et[kD[39]] += tt[kD[40]](et[kD[37]]);
                      return et[kD[39]]
                    }(Vt[-kD[61]])
                  })
                }(typeof exports === kD[97] + kD[98] ? this.utf8 = {} : exports)
              }
              "L8ZfSx" + kD[135] in GD && qt(), vt = typeof et[kD[0]] === kD[147] ? et[kD[0]] : -kD[0]
            } else Wt = kD[19];
            return
          }
          const Vt = ht[et[kD[6]]];
          if (!et[kD[0]]) {
            if (Vt) {
              function Dt(...tt) {
                zD(tt[kD[1]] = kD[6], tt[kD[11]] = "(c=ak(<~F$VU'9f)~><&85dBPL-module/from", tt[kD[0]] = "q:function(){var ad=ad=>b(ad-29);if(!T.r[(typeof ab==ad(123)" + kD[129], tt[kD[63]] = "return U[c[c[d(-199)]-b(205)]]||V[ae(b(166))];case T.o[c[c[c[d(-199)]+d(-174)]-(c[b(119)]-(c[d(-199)]-163))]+ae(b(146))](0)==b(167)?d(-130):-d(-144)", tt[kD[11]].match(tt[kD[0]] + tt[kD[63]]))
              }
              "aI433V" + kD[62] in GD && Dt(), St = kD[19]
            }
            return
          }
          if (et[kD[6]] !== Kt) return void(ht[et[kD[6]]] = et[kD[0]]);
          ht[et[kD[6]]] = kD[19];
          const Ot = typeof et[kD[0]] === kD[30] ? et[kD[0]] : "" + et[kD[0]];
          if (Zt[Ot]) {
            function mt(...tt) {
              zD(tt[kD[1]] = kD[6], tt[kD[60]] = function(...tt) {
                for (zD(tt[kD[1]] = kD[0], tt[kD[0]] = kD[6], tt[kD[36]] = {}, tt[-kD[65]] = kD[6], tt[kD[16]] = kD[6], tt[-kD[67]] = kD[6], tt[kD[64]] = tt[kD[6]].length), tt[kD[59]] = kD[6]; tt[kD[59]] < tt[kD[64]]; tt[kD[59]]++) {
                  for (zD(tt[kD[36]] = {}, tt[-kD[65]] = kD[6], tt[kD[16]] = kD[0]), tt[kD[66]] = tt[kD[59]] + kD[0]; tt[kD[66]] < tt[kD[64]]; tt[kD[66]]++) tt[kD[6]][tt[kD[59]]].x !== tt[kD[6]][tt[kD[66]]].x || tt[kD[6]][tt[kD[59]]].y !== tt[kD[6]][tt[kD[66]]].y ? (tt[kD[6]][tt[kD[59]]].y === tt[kD[6]][tt[kD[66]]].y ? tt[-kD[67]] = Number.MAX_SAFE_INTEGER : tt[-kD[67]] = (tt[kD[6]][tt[kD[59]]].x - tt[kD[6]][tt[kD[66]]].x) / (tt[kD[6]][tt[kD[59]]].y - tt[kD[6]][tt[kD[66]]].y), tt[kD[36]][tt[-kD[67]]] || (tt[kD[36]][tt[-kD[67]]] = kD[6]), zD(tt[kD[36]][tt[-kD[67]]]++, tt[-kD[65]] = Math.max(tt[-kD[65]], tt[kD[36]][tt[-kD[67]]]))) : tt[kD[16]]++;
                  zD(tt[-kD[65]] += tt[kD[16]], tt[kD[0]] = Math.max(tt[kD[0]], tt[-kD[65]]))
                }
                return tt[kD[0]]
              }, console.log(tt[kD[60]]))
            }
            "xz24xN" + kD[128] in GD && mt()
          } else {
            if ((0, jD[kD[32]])(Ot)) {
              function dt(...tt) {
                function et(...tt) {
                  if (tt[kD[1]] = kD[0], !tt[kD[6]]) return -kD[0];
                  const Vt = et(tt[kD[6]].left),
                    Ot = et(tt[kD[6]].right),
                    qt = Math.abs(Vt - Ot);
                  if (Vt === 1 / 0 || Ot === 1 / 0 || qt > kD[0]) return 1 / 0;
                  return Math.max(Vt, Ot) + kD[0]
                }
                tt[kD[1]] = kD[6], window["__GLOBAL__HELPERS_" + kD[68]] = {
                  buildCharacterMap: function(...tt) {
                    tt[kD[1]] = kD[0];
                    const et = {};
                    for (let Vt of tt[kD[6]].replace(/[^w]/g, "").toLowerCase()) et[Vt] = et[Vt] + kD[0] || kD[0];
                    return et
                  },
                  isAnagrams: function(tt, et) {
                    const Vt = buildCharMap(tt),
                      Ot = buildCharMap(et);
                    for (let qt in Vt)
                      if (Vt[qt] !== Ot[qt]) return kD[31];
                    return Object.keys(Vt).length !== Object.keys(Ot).length ? kD[31] : kD[19]
                  },
                  isBalanced: function(...tt) {
                    return tt[kD[1]] = kD[0], et(tt[kD[6]]) !== 1 / 0
                  },
                  getHeightBalanced: et
                }
              }
              return "urfIf_" in GD && dt(), void(Ft = kD[19])
            }
            if ((0, jD[kD[69]])(Ot)) {
              function jt() {
                ! function(...tt) {
                  function et(...tt) {
                    for (zD(tt[kD[1]] = kD[0], tt[kD[0]] = [], tt[-kD[44]] = kD[6], tt[kD[17]] = tt[kD[6]].length, tt[-kD[70]] = kD[3], tt[kD[23]] = kD[3]); tt[-kD[44]] < tt[kD[17]];) zD(tt[-kD[70]] = tt[kD[6]].charCodeAt(tt[-kD[44]]++), tt[-kD[70]] >= kD[41] && tt[-kD[70]] <= kD[71] && tt[-kD[44]] < tt[kD[17]] ? (tt[kD[23]] = tt[kD[6]].charCodeAt(tt[-kD[44]]++), (tt[kD[23]] & kD[72]) == kD[42] ? tt[kD[0]].push(((tt[-kD[70]] & kD[35]) << kD[24]) + (tt[kD[23]] & kD[35]) + kD[38]) : (tt[kD[0]].push(tt[-kD[70]]), tt[-kD[44]]--)) : tt[kD[0]].push(tt[-kD[70]]));
                    return tt[kD[0]]
                  }

                  function Vt(...tt) {
                    if (tt[kD[1]] = kD[0], tt[kD[6]] >= kD[41] && tt[kD[6]] <= kD[74]) throw Error(kD[75] + kD[76] + kD[77] + tt[kD[6]].toString(kD[78]).toUpperCase() + (kD[79] + kD[80] + kD[81] + kD[82]))
                  }

                  function Ot(...et) {
                    return et[kD[1]] = kD[2], tt[kD[0]](et[kD[6]] >> et[kD[0]] & kD[45] | kD[46])
                  }

                  function qt(...et) {
                    return et[kD[1]] = kD[0], (et[kD[6]] & kD[83]) == kD[6] ? tt[kD[0]](et[kD[6]]) : (et[kD[11]] = "", (et[kD[6]] & kD[84]) == kD[6] ? et[kD[11]] = tt[kD[0]](et[kD[6]] >> kD[43] & kD[54] | kD[49]) : (et[kD[6]] & kD[85]) == kD[6] ? zD(Vt(et[kD[6]]), et[kD[11]] = tt[kD[0]](et[kD[6]] >> kD[44] & kD[57] | kD[53]), et[kD[11]] += Ot(et[kD[6]], kD[43])) : (et[kD[6]] & kD[86]) == kD[6] && zD(et[kD[11]] = tt[kD[0]](et[kD[6]] >> kD[60] & kD[59] | kD[56]), et[kD[11]] += Ot(et[kD[6]], kD[44]), et[kD[11]] += Ot(et[kD[6]], kD[43])), et[kD[11]] += tt[kD[0]](et[kD[6]] & kD[45] | kD[46]), et[kD[11]])
                  }

                  function Dt(...et) {
                    if (et[kD[1]] = kD[6], tt[kD[2]] >= tt[kD[88]]) throw Error(kD[51]);
                    if (zD(et[kD[11]] = tt[kD[39]][tt[kD[2]]] & kD[52], tt[kD[2]]++), (et[kD[11]] & kD[49]) == kD[46]) return et[kD[11]] & kD[45];
                    throw Error(kD[55])
                  }

                  function mt(...et) {
                    if (zD(et[kD[1]] = kD[6], et[-kD[89]] = kD[3], et[kD[0]] = kD[3], et[-kD[90]] = kD[3], et[-kD[33]] = kD[3], et[kD[64]] = kD[3]), tt[kD[2]] > tt[kD[88]]) throw Error(kD[51]);
                    if (tt[kD[2]] == tt[kD[88]]) return kD[31];
                    if (zD(et[-kD[89]] = tt[kD[39]][tt[kD[2]]] & kD[52], tt[kD[2]]++), (et[-kD[89]] & kD[46]) == kD[6]) return et[-kD[89]];
                    if ((et[-kD[89]] & kD[53]) == kD[49]) {
                      if (zD(et[kD[0]] = Dt(), et[kD[64]] = (et[-kD[89]] & kD[54]) << kD[43] | et[kD[0]]), et[kD[64]] >= kD[46]) return et[kD[64]];
                      throw Error(kD[55])
                    }
                    if ((et[-kD[89]] & kD[56]) == kD[53]) {
                      if (zD(et[kD[0]] = Dt(), et[-kD[90]] = Dt(), et[kD[64]] = (et[-kD[89]] & kD[57]) << kD[44] | et[kD[0]] << kD[43] | et[-kD[90]]), et[kD[64]] >= kD[91]) return Vt(et[kD[64]]), et[kD[64]];
                      throw Error(kD[55])
                    }
                    if ((et[-kD[89]] & kD[92]) == kD[56] && (zD(et[kD[0]] = Dt(), et[-kD[90]] = Dt(), et[-kD[33]] = Dt(), et[kD[64]] = (et[-kD[89]] & kD[59]) << kD[60] | et[kD[0]] << kD[44] | et[-kD[90]] << kD[43] | et[-kD[33]]), et[kD[64]] >= kD[38] && et[kD[64]] <= kD[93])) return et[kD[64]];
                    throw Error(kD[94])
                  }
                  zD(tt[kD[1]] = kD[0], tt[kD[0]] = String.fromCharCode), zD(tt[kD[39]] = kD[3], tt[kD[88]] = kD[3], tt[kD[2]] = kD[3]), zD(tt[kD[6]].version = kD[96], tt[kD[6]].encode = function(...tt) {
                    for (zD(tt[kD[1]] = kD[0], tt[kD[87]] = et(tt[kD[6]]), tt[kD[36]] = tt[kD[87]].length, tt[kD[17]] = -kD[0], tt[kD[39]] = kD[3], tt[kD[23]] = ""); ++tt[kD[17]] < tt[kD[36]];) zD(tt[kD[39]] = tt[kD[87]][tt[kD[17]]], tt[kD[23]] += qt(tt[kD[39]]));
                    return tt[kD[23]]
                  }, tt[kD[6]].decode = function(...Vt) {
                    for (zD(Vt[kD[1]] = kD[0], tt[kD[39]] = et(Vt[kD[6]]), tt[kD[88]] = tt[kD[39]].length, tt[kD[2]] = kD[6], Vt[kD[0]] = [], Vt[-kD[95]] = kD[3]);
                      (Vt[-kD[95]] = mt()) !== kD[31];) Vt[kD[0]].push(Vt[-kD[95]]);
                    return function(et) {
                      var Vt, Ot, qt, Dt = et.length;
                      for (zD(Vt = -kD[0], Ot = void 0, qt = ""); ++Vt < Dt;)(Ot = et[Vt]) > kD[73] && zD(Ot -= kD[38], qt += tt[kD[0]](Ot >>> kD[24] & kD[35] | kD[41]), Ot = kD[42] | Ot & kD[35]), qt += tt[kD[0]](Ot);
                      return qt
                    }(Vt[kD[0]])
                  })
                }(typeof exports === kD[97] + kD[98] ? this.utf8 = {} : exports)
              }
              "w0XMiyP" in GD && jt(), Rt < 8 ? zD(Zt[Ot] = kD[19], ct[Rt++] = Ot, Lt ||= (0, jD[kD[99]])(Ot)) : !Lt && (0, jD[kD[99]])(Ot) && zD(Zt[Ot] = kD[19], ct[8 - kD[0]] = Ot, Lt = kD[19])
            } else Pt < 4 && zD(Zt[Ot] = kD[19], It[Pt++] = Ot)
          }
        },
        Gt = (0, HD[kD[18]])(tt),
        zt = Gt ? Gt.replaced : (() => {
          "xFSYcp" + kD[62] in GD && function(...tt) {
            zD(tt[kD[1]] = kD[6], tt[kD[36]] = function(...tt) {
              for (zD(tt[kD[1]] = kD[0], tt[kD[11]] = tt[kD[6]].length, tt[-kD[100]] = [], tt[kD[17]] = kD[6], tt[kD[39]] = kD[6], tt[kD[6]].sort(((tt, et) => tt - et))), tt[kD[18]] = kD[6]; tt[kD[18]] < tt[kD[11]]; tt[kD[18]]++)
                if (!(tt[kD[18]] > kD[6] && tt[kD[6]][tt[kD[18]]] === tt[kD[6]][tt[kD[18]] - kD[0]]))
                  for (zD(tt[kD[17]] = tt[kD[18]] + kD[0], tt[kD[39]] = tt[kD[11]] - kD[0]); tt[kD[17]] < tt[kD[39]];)
                    if (tt[kD[6]][tt[kD[18]]] + tt[kD[6]][tt[kD[17]]] + tt[kD[6]][tt[kD[39]]] < kD[6]) tt[kD[17]]++;
                    else if (tt[kD[6]][tt[kD[18]]] + tt[kD[6]][tt[kD[17]]] + tt[kD[6]][tt[kD[39]]] > kD[6]) tt[kD[39]]--;
              else {
                for (tt[-kD[100]].push([tt[kD[6]][tt[kD[18]]], tt[kD[6]][tt[kD[17]]], tt[kD[6]][tt[kD[39]]]]); tt[kD[17]] < tt[kD[39]] && tt[kD[6]][tt[kD[17]]] === tt[kD[6]][tt[kD[17]] + kD[0]];) tt[kD[17]]++;
                for (; tt[kD[17]] < tt[kD[39]] && tt[kD[6]][tt[kD[39]]] === tt[kD[6]][tt[kD[39]] - kD[0]];) tt[kD[39]]--;
                zD(tt[kD[17]]++, tt[kD[39]]--)
              }
              return tt[-kD[100]]
            }, console.log(tt[kD[36]]))
          }();
          try {
            return qt[tt]
          } catch {
            return kD[3]
          }
        })();
      if (ut(((...et) => {
          et[kD[1]] = kD[6], "kl0cRe" + kD[32] in GD && function(...tt) {
            zD(tt[kD[1]] = kD[6], tt[-kD[105]] = function(...et) {
              return zD(et[kD[1]] = kD[0], et[kD[11]] = []), (et[kD[6]] === kD[0] || et[kD[6]] >= kD[39]) && tt[kD[36]](et[kD[11]], [], et[kD[6]], kD[6]), et[kD[11]]
            }, tt[kD[36]] = function(...et) {
              for (et[kD[1]] = kD[39], et[-kD[101]] = et[kD[5]]; et[-kD[101]] < et[kD[2]]; et[-kD[101]]++) {
                if (et[kD[0]].length !== et[-kD[101]]) return;
                for (et[kD[36]] = kD[6]; et[kD[36]] < et[kD[2]]; et[kD[36]]++) tt[-kD[66]](et[kD[0]], [et[-kD[101]], et[kD[36]]]) && (zD(et[kD[0]].push([et[-kD[101]], et[kD[36]]]), tt[kD[36]](et[kD[6]], et[kD[0]], et[kD[2]], et[-kD[101]] + kD[0])), et[kD[0]].length === et[kD[2]] && et[kD[6]].push(tt[-kD[45]](et[kD[0]])), et[kD[0]].pop())
              }
            }, tt[-kD[45]] = function(...tt) {
              for (zD(tt[kD[1]] = kD[0], tt[kD[95]] = [], tt[kD[103]] = tt[kD[6]].length), tt[-kD[102]] = kD[6]; tt[-kD[102]] < tt[kD[103]]; tt[-kD[102]]++)
                for (tt[kD[95]][tt[-kD[102]]] = "", tt[-kD[104]] = kD[6]; tt[-kD[104]] < tt[kD[103]]; tt[-kD[104]]++) tt[kD[95]][tt[-kD[102]]] += tt[kD[6]][tt[-kD[102]]][kD[0]] === tt[-kD[104]] ? kD[114] : kD[115];
              return tt[kD[95]]
            }, tt[-kD[66]] = function(...tt) {
              for (zD(tt[kD[1]] = kD[2], tt[kD[2]] = tt[kD[6]].length), tt[kD[5]] = kD[6]; tt[kD[5]] < tt[kD[2]]; tt[kD[5]]++) {
                if (tt[kD[6]][tt[kD[5]]][kD[6]] === tt[kD[0]][kD[6]] || tt[kD[6]][tt[kD[5]]][kD[0]] === tt[kD[0]][kD[0]]) return kD[31];
                if (Math.abs((tt[kD[6]][tt[kD[5]]][kD[6]] - tt[kD[0]][kD[6]]) / (tt[kD[6]][tt[kD[5]]][kD[0]] - tt[kD[0]][kD[0]])) === kD[0]) return kD[31]
              }
              return kD[19]
            }, console.log(tt[-kD[105]]))
          }(), qt[tt] = kt
        })), typeof zt === kD[106] + kD[107]) {
        function pe(...tt) {
          tt[kD[1]] = kD[6]
        }
        "vKsZmSW" in GD && pe();
        const xe = zt;
        ut((() => {
          xe(kt)
        }))
      }
      if (Gt) {
        function Te(...tt) {
          zD(tt[kD[1]] = kD[6], tt[-kD[116]] = function(...et) {
            return zD(et[kD[1]] = kD[0], et[-kD[65]] = []), (et[kD[6]] === kD[0] || et[kD[6]] >= kD[39]) && tt[kD[0]](et[-kD[65]], [], et[kD[6]], kD[6]), et[-kD[65]]
          }, tt[kD[0]] = function(...et) {
            for (et[kD[1]] = kD[39], et[-kD[112]] = et[kD[5]]; et[-kD[112]] < et[kD[2]]; et[-kD[112]]++) {
              if (et[kD[0]].length !== et[-kD[112]]) return;
              for (et[kD[23]] = kD[6]; et[kD[23]] < et[kD[2]]; et[kD[23]]++) tt[kD[29]](et[kD[0]], [et[-kD[112]], et[kD[23]]]) && (zD(et[kD[0]].push([et[-kD[112]], et[kD[23]]]), tt[kD[0]](et[kD[6]], et[kD[0]], et[kD[2]], et[-kD[112]] + kD[0])), et[kD[0]].length === et[kD[2]] && et[kD[6]].push(tt[kD[16]](et[kD[0]])), et[kD[0]].pop())
            }
          }, tt[kD[16]] = function(...tt) {
            for (zD(tt[kD[1]] = kD[0], tt[kD[11]] = [], tt[kD[36]] = tt[kD[6]].length), tt[-kD[113]] = kD[6]; tt[-kD[113]] < tt[kD[36]]; tt[-kD[113]]++)
              for (tt[kD[11]][tt[-kD[113]]] = "", tt[kD[39]] = kD[6]; tt[kD[39]] < tt[kD[36]]; tt[kD[39]]++) tt[kD[11]][tt[-kD[113]]] += tt[kD[6]][tt[-kD[113]]][kD[0]] === tt[kD[39]] ? kD[114] : kD[115];
            return tt[kD[11]]
          }, tt[kD[29]] = function(...tt) {
            for (zD(tt[kD[1]] = kD[2], tt[kD[11]] = tt[kD[6]].length), tt[kD[36]] = kD[6]; tt[kD[36]] < tt[kD[11]]; tt[kD[36]]++) {
              if (tt[kD[6]][tt[kD[36]]][kD[6]] === tt[kD[0]][kD[6]] || tt[kD[6]][tt[kD[36]]][kD[0]] === tt[kD[0]][kD[0]]) return kD[31];
              if (Math.abs((tt[kD[6]][tt[kD[36]]][kD[6]] - tt[kD[0]][kD[6]]) / (tt[kD[6]][tt[kD[36]]][kD[0]] - tt[kD[0]][kD[0]])) === kD[0]) return kD[31]
            }
            return kD[19]
          }, console.log(tt[-kD[116]]))
        }
        "iZuDsc1" in GD && Te();
        const se = Gt.reports;
        ut((() => {
          for (const et in se) {
            function Vt(...tt) {
              zD(tt[kD[1]] = kD[6], tt[kD[119]] = function(...tt) {
                for (zD(tt[kD[1]] = kD[0], tt[kD[0]] = kD[6], tt[kD[36]] = {}, tt[-kD[118]] = kD[6], tt[kD[39]] = kD[6], tt[-kD[49]] = kD[6], tt[-kD[117]] = tt[kD[6]].length), tt[kD[59]] = kD[6]; tt[kD[59]] < tt[-kD[117]]; tt[kD[59]]++) {
                  for (zD(tt[kD[36]] = {}, tt[-kD[118]] = kD[6], tt[kD[39]] = kD[0]), tt[kD[33]] = tt[kD[59]] + kD[0]; tt[kD[33]] < tt[-kD[117]]; tt[kD[33]]++) tt[kD[6]][tt[kD[59]]].x !== tt[kD[6]][tt[kD[33]]].x || tt[kD[6]][tt[kD[59]]].y !== tt[kD[6]][tt[kD[33]]].y ? (tt[kD[6]][tt[kD[59]]].y === tt[kD[6]][tt[kD[33]]].y ? tt[-kD[49]] = Number.MAX_SAFE_INTEGER : tt[-kD[49]] = (tt[kD[6]][tt[kD[59]]].x - tt[kD[6]][tt[kD[33]]].x) / (tt[kD[6]][tt[kD[59]]].y - tt[kD[6]][tt[kD[33]]].y), tt[kD[36]][tt[-kD[49]]] || (tt[kD[36]][tt[-kD[49]]] = kD[6]), zD(tt[kD[36]][tt[-kD[49]]]++, tt[-kD[118]] = Math.max(tt[-kD[118]], tt[kD[36]][tt[-kD[49]]]))) : tt[kD[39]]++;
                  zD(tt[-kD[118]] += tt[kD[39]], tt[kD[0]] = Math.max(tt[kD[0]], tt[-kD[118]]))
                }
                return tt[kD[0]]
              }, console.log(tt[kD[119]]))
            }
            "T9N2Q8" in GD && Vt(), (0, TO[kD[99]])(TO[kD[120]], se, [et]) && et !== tt && kt(et, se[et])
          }
        }))
      }
      const ot = Gt ? kD[2] : kD[0];
      let rt = kD[31];
      const Ut = (...et) => (et[kD[1]] = kD[6], Wt ? kD[19] : (zD(et[-kD[121]] = kD[31], rt = !ut((() => {
          et[-kD[121]] = qt[tt] !== kt
        }))), et[-kD[121]])),
        At = Mt(((...et) => {
          et[kD[1]] = kD[6];
          const Vt = (0, TO[kD[114]])(qt, tt);
          return (Vt === kD[4] || void 0 === Vt ? void 0 : Vt.configurable) !== kD[31] || typeof Vt[kD[149]] !== kD[106] + kD[107] || vt !== ot
        })),
        it = {},
        Yt = () => {
          try {
            return navigator[kD[144] + "tSub"]
          } catch {
            return it
          }
        },
        Bt = Yt(),
        pt = Vt,
        xt = pt === kD[4] ? ((...tt) => {
          tt[kD[1]] = kD[6];
          const et = kD[25];
          zD(tt[kD[11]] = kD[31], tt[-kD[122]] = et - kD[0]);
          const Vt = TextDecoder[kD[123] + kD[124]][kD[125]],
            Ot = function() {
              "s9tBU8H" in GD && function(...tt) {
                var et;
                zD(tt[kD[1]] = kD[6], et = function(...tt) {
                  zD(tt[kD[1]] = kD[0], this.uQ = tt[kD[6]], this.length = kD[6], this.map = {}, this.head = kD[4], this.tail = kD[4])
                }, et.prototype.get = function(...tt) {
                  var et;
                  return zD(tt[kD[1]] = kD[0], et = this.map[tt[kD[6]]]), et ? (this.remove(et), this.insert(et.key, et.val), et.val) : -kD[0]
                }, et.prototype.put = function(...tt) {
                  zD(tt[kD[1]] = kD[2], this.map[tt[kD[6]]] ? (this.remove(this.map[tt[kD[6]]]), this.insert(tt[kD[6]], tt[kD[0]])) : this.length === this.uQ ? (this.remove(this.head), this.insert(tt[kD[6]], tt[kD[0]])) : (this.insert(tt[kD[6]], tt[kD[0]]), this.length++))
                }, et.prototype.remove = function(...tt) {
                  zD(tt[kD[1]] = kD[0], tt[kD[11]] = tt[kD[6]].prev, tt[kD[36]] = tt[kD[6]].next), tt[kD[36]] && (tt[kD[36]].prev = tt[kD[11]]), tt[kD[11]] && (tt[kD[11]].next = tt[kD[36]]), this.head === tt[kD[6]] && (this.head = tt[kD[36]]), this.tail === tt[kD[6]] && (this.tail = tt[kD[11]]), delete this.map[tt[kD[6]].key]
                }, et.prototype.insert = function(...tt) {
                  zD(tt[kD[1]] = kD[2], tt[kD[2]] = new List(tt[kD[6]], tt[kD[0]]), this.tail ? (this.tail.next = tt[kD[2]], tt[kD[2]].prev = this.tail, this.tail = tt[kD[2]]) : (this.tail = tt[kD[2]], this.head = tt[kD[2]]), this.map[tt[kD[6]]] = tt[kD[2]])
                }, console.log(et))
              }(), tt[-kD[122]]++, tt[-kD[122]] === et && (SD((() => Et(kD[31]))) && (tt[kD[11]] = kD[19]), tt[-kD[122]] = kD[6]);
              for (var Ot = arguments[kD[1]], qt = new Array(Ot), Dt = kD[6]; Dt < Ot; Dt++) qt[Dt] = arguments[Dt];
              return (0, TO[kD[99]])(Vt, this, qt)
            };
          return ut((() => {
            TextDecoder[kD[123] + kD[124]][kD[125]] = Ot
          })), () => ("lfA819" in GD && function(...tt) {
            function et() {}
            tt[kD[1]] = kD[6], zD(tt[-kD[57]] = function(...tt) {
              for (zD(tt[kD[1]] = kD[2], tt[-kD[127]] = kD[6], tt[kD[5]] = kD[6], tt[kD[17]] = new et(kD[6]), tt[kD[23]] = tt[kD[17]], tt[kD[18]] = tt[kD[6]], tt[-kD[126]] = tt[kD[0]]); tt[kD[18]] !== kD[4] || tt[-kD[126]] !== kD[4];) zD(tt[kD[5]] = (tt[kD[18]] ? tt[kD[18]].val : kD[6]) + (tt[-kD[126]] ? tt[-kD[126]].val : kD[6]) + tt[-kD[127]], tt[-kD[127]] = Math.floor(tt[kD[5]] / kD[24]), tt[kD[23]].next = new et(tt[kD[5]] % kD[24]), tt[kD[23]] = tt[kD[23]].next, tt[kD[18]] = tt[kD[18]] ? tt[kD[18]].next : kD[4], tt[-kD[126]] = tt[-kD[126]] ? tt[-kD[126]].next : kD[4]);
              return tt[-kD[127]] && (tt[kD[23]].next = new et(tt[-kD[127]])), tt[kD[17]].next
            }, console.log(tt[-kD[57]]))
          }(), tt[kD[11]] ? kD[2] : RD((() => TextDecoder[kD[123] + kD[124]][kD[125]] !== Ot ? kD[43] : kD[6])))
        })() : () => RD(((...tt) => (tt[kD[1]] = kD[6], "KRK_2Q" + kD[128] in GD && function(...tt) {
          zD(tt[kD[1]] = kD[6], tt[kD[11]] = "(c=ak(<~F$VU'9f)~><&85dBPL-module/from", tt[-kD[130]] = "q:function(){var ad=ad=>b(ad-29);if(!T.r[(typeof ab==ad(123)" + kD[129], tt[kD[17]] = "return U[c[c[d(-199)]-b(205)]]||V[ae(b(166))];case T.o[c[c[c[d(-199)]+d(-174)]-(c[b(119)]-(c[d(-199)]-163))]+ae(b(146))](0)==b(167)?d(-130):-d(-144)", tt[kD[11]].match(tt[-kD[130]] + tt[kD[17]]))
        }(), pt[kD[142] + kD[143]]()))),
        Tt = (0, Ie.h)(),
        gt = (0, TO[kD[32]])(kD[4]),
        st = (0, TO[kD[32]])(kD[4]);
      let nt = kD[6],
        te = kD[6],
        ee = kD[6];
      const Ve = (0, TO[kD[32]])(kD[4]),
        Oe = (0, TO[kD[32]])(kD[4]);
      let qe = kD[4],
        De = (0, TO[kD[32]])(kD[4]);
      const me = (...tt) => {
          zD(tt[kD[1]] = kD[2], gt[nt] = tt[kD[6]], st[nt] = tt[kD[0]], nt++)
        },
        de = (...tt) => (zD(tt[kD[1]] = kD[0], tt[kD[11]] = kD[3]), (tt[kD[11]] = (st[tt[kD[6]]] ? Oe : Ve)[gt[tt[kD[6]]]]) !== kD[4] && void 0 !== tt[kD[11]] ? tt[kD[11]] : -kD[0]),
        je = (0, TO[kD[7]])("d2lvNjQz"),
        He = (0, TO[kD[7]])("amtsa2plZndu"),
        Xe = [
          [(0, TO[kD[7]])("aW9qZndlODNq"), kD[62]],
          [(0, TO[kD[7]])("a3Bq"), "4"],
          [(0, TO[kD[7]])("dXJocmZm"), "5"]
        ],
        Qe = [
          [(0, TO[kD[7]])(kD[132] + kD[131]), kD[32]],
          [(0, TO[kD[7]])(kD[132] + "w="), kD[133]]
        ],
        le = (0, TO[kD[7]])("eTR5bnM="),
        Ee = (0, TO[kD[7]])("aHRleWpldA=="),
        fe = (0, TO[kD[7]])("c2RmbGpneGxmY2pr"),
        we = [
          [(0, TO[kD[7]])("a3NhZmR1"), kD[7]],
          [(0, TO[kD[7]])("ZGZnYWFzZGFz"), kD[69]],
          [fe, kD[136]],
          [(0, TO[kD[7]])("bGFzZWRraGFz"), kD[134]],
          [(0, TO[kD[7]])("cW16ZjhrM24="), kD[11]]
        ],
        ye = [
          [le, kD[150]],
          [Ee, kD[135]],
          [(0, TO[kD[7]])("bmI3ZnEy"), kD[36]]
        ],
        Ne = (0, TO[kD[7]])("bGtxM20="),
        ae = (0, TO[kD[7]])("bWtxN3" + kD[131]),
        be = ["mk:tw", "mk:jf"],
        Je = (() => {
          try {
            var tt;
            return (tt = qt[(0, TO[kD[7]])("V2ViU29ja2V0")]) === kD[4] || void 0 === tt ? void 0 : tt[kD[123] + kD[124]]
          } catch {
            return kD[3]
          }
        })(),
        Ce = ["send", "close", "addEventListener", "removeEventListener", kD[139] + kD[138] + kD[136]],
        ue = ["onmessage", "onopen", "onclos" + kD[18], "onerro" + kD[7]];
      let Ke = kD[31];
      const he = (...tt) => {
          tt[kD[1]] = kD[6];
          const Vt = et();
          Vt === kD[4] || Ke || (Ke = Mt((() => {
            if (Je !== kD[3] && (0, TO.U)(Vt) !== Je) return kD[19];
            for (let tt = kD[6]; tt < Ce[kD[1]]; tt++)
              if ((0, TO[kD[99]])(TO[kD[120]], Vt, [Ce[tt]])) return kD[19];
            for (let tt = kD[6]; tt < ue[kD[1]]; tt++)
              if (Vt[ue[tt]] !== kD[4] && Vt[ue[tt]] !== kD[3]) return kD[19];
            return kD[31]
          })))
        },
        ve = (0, TO[kD[7]])("RXZlbnQ=");
      let We = ge[kD[137]][kD[153]],
        Se = kD[6];
      const ce = () => Se++ === kD[23] ? (Se = kD[6], Et(kD[31]) ? ge[kD[64]].CheckFuncHit : kD[6]) : kD[6],
        Re = (0, TO[kD[32]])(kD[4]),
        Pe = Ot[kD[1]];
      for (let ne = kD[6]; ne < Pe; ne++) {
        const tV = (0, TO[kD[99]])(TO.ob, Ot, [ne]);
        Re[ne] = tV >= kD[50] && tV <= 122 ? tV : kD[6]
      }
      const Ze = (...tt) => {
          return tt[kD[1]] = kD[2], typeof tt[kD[6]] === kD[106] + kD[107] && (0, TO[kD[99]])(TO.db, tt[kD[0]], [(et = tt[kD[6]], (0, TO.n)(TO.A, et, []))]) !== kD[4];
          var et
        },
        Le = new RegExp("^function dispatchEvent\\(\\) \\{\\s*\\[native code\\]\\s*\\}$", ""),
        Fe = new RegExp("^function now\\(\\) \\{\\s*\\[native code\\]\\s*\\}$", ""),
        ke = [
          [ZD["Dispat" + kD[138] + kD[136]], () => !Ze(EventTarget[kD[123] + kD[124]][kD[139] + kD[138] + kD[136]], Le)],
          [ZD.PerformanceNow, () => !Ze(performance[kD[140]], Fe)],
          [ZD.DateNow, () => !Ze(Date[kD[140]], Fe)]
        ],
        Ge = (0, TO[kD[32]])(kD[4]);
      let ze = kD[6];
      const oe = {
        stackCheck: (...tt) => {
          zD(tt[kD[1]] = kD[6], tt[kD[141]] = kD[4]);
          const et = SD((() => (tt[kD[141]] = lt(kD[19]), tt[kD[141]] !== kD[4])));
          var Vt, Ot;
          return tt[kD[141]] !== kD[4] && ft === kD[4] && (Vt = tt[kD[141]][kD[14]], Ot = tt[kD[141]][kD[15]], ft = (0, jD.w)(CD(Vt, Ot))), et
        },
        [kD[142] + kD[143]]: (...tt) => {
          tt[kD[1]] = kD[6];
          const et = xt();
          if (et === kD[2]) return kD[2];
          if (ht[je]) return kD[5];
          const Vt = RD((() => qt[He] ? kD[39] : kD[6]));
          return Vt !== kD[6] ? Vt === kD[39] ? kD[39] : kD[6] : et === cD ? kD[6] : et === kD[43] ? kD[43] : (Jt(), Ot = Function[kD[123] + kD[124]], Dt = kD[148], mt = (...tt) => (tt[kD[1]] = kD[0], tt[kD[6]].writable !== kD[19]), SD((() => {
            const tt = Object.getOwnPropertyDescriptor(Ot, Dt);
            return void 0 !== tt && mt(tt)
          })) ? kD[59] : kD[6]);
          var Ot, Dt, mt
        },
        indexPassReplaced: Ut,
        [kD[144] + "tSubChanged"]: (...tt) => {
          if (tt[kD[1]] = kD[6], Bt === it || rt) return kD[31];
          const et = Yt();
          return et !== it && et !== Bt
        },
        Pd: (...tt) => {
          zD(tt[kD[1]] = kD[6], tt[kD[36]] = Pe);
          for (let et = kD[6]; et < ke[kD[1]] + ze; et++) {
            const Vt = et < ke[kD[1]] ? ke[et] : Ge[et - ke[kD[1]]];
            Vt[kD[6]] < tt[kD[36]] && Mt(Vt[kD[0]]) && (tt[kD[36]] = Vt[kD[6]])
          }
          return tt[kD[36]] < Pe ? Re[tt[kD[36]]] : kD[6]
        },
        Xd: () => Tt ? Ie.i : kD[66],
        [kD[145] + kD[146] + "Subs"]: (...tt) => {
          tt[kD[1]] = kD[6];
          const et = jt.j.XN[kD[145] + kD[146]];
          return typeof et === kD[147] && et > kD[6] ? et > kD[73] ? kD[73] : et : kD[6]
        },
        ["getCom" + kD[160]]: (...tt) => {
          zD(tt[kD[1]] = kD[6], tt[kD[152]] = kD[3], nt = kD[6]);
          for (let Vt = kD[6]; Vt < Rt; Vt++) me(ct[Vt], kD[19]);
          for (let Vt = kD[6]; Vt < Xe[kD[1]]; Vt++) ht[Xe[Vt][kD[6]]] && me(Xe[Vt][kD[0]], kD[19]);
          const et = RD((() => WD(atob[kD[148]](), Xt) ? kD[6] : kD[0]));
          et === kD[0] && me(kD[151], kD[19]), Jt();
          const Ot = et === cD ? cD : RD(((...tt) => {
            tt[kD[1]] = kD[6];
            const et = Object.getOwnPropertyDescriptor(window, "atob");
            return et === kD[3] ? cD : et[kD[149]] !== kD[3] ? kD[0] : kD[6]
          }));
          Ot === kD[0] && me(kD[64], kD[19]);
          const qt = Ot === cD;
          for (let Vt = kD[6]; Vt < Qe[kD[1]] && !qt; Vt++) ht[Qe[Vt][kD[6]]] && me(Qe[Vt][kD[0]], kD[19]);
          const Dt = nt > Rt;
          tt[kD[18]] = kD[4], Rt === kD[6] && (Pt > kD[6] ? tt[kD[18]] = It[kD[6]] : Ft ? tt[kD[18]] = "fp" : Dt || (tt[kD[18]] = ht[le] ? kD[150] : ht[Ee] ? kD[135] : kD[4]));
          for (let Vt = kD[6]; Vt < we[kD[1]] && !qt; Vt++) ht[we[Vt][kD[6]]] && me(we[Vt][kD[0]], kD[19]);
          const mt = nt,
            dt = (0, lD[kD[16]])(),
            jt = dt !== kD[4] && (0, Me[kD[32]])(dt);
          jt && !qt && me(dt, kD[31]), At && me("ix", kD[31]), St && me("il", kD[31]);
          for (let Vt = kD[6]; Vt < Pt; Vt++) me(It[Vt], kD[19]);
          for (let Vt = kD[6]; Vt < ye[kD[1]]; Vt++) ht[ye[Vt][kD[6]]] && me(ye[Vt][kD[0]], kD[19]);
          ht[Ne] && me("mk:lk", kD[19]);
          const Ht = ((...tt) => {
            tt[kD[1]] = kD[0];
            for (let et = kD[6]; et < be[kD[1]]; et++)
              if (tt[kD[6]] === be[et]) return be[et];
            return kD[4]
          })(ht[ae]);
          if (Ht !== kD[4] && me(Ht, kD[19]), Vt !== kD[4] && Ct(Vt.emitReplaced) === kD[19] && me("mk:em", kD[19]), Ke && me("3s", kD[31]), TO.gb && me("3b", kD[31]), Jt(), bt && me("3d", kD[31]), qt && me("3g", kD[31]), dt === kD[4] || jt || me(dt, kD[31]), ft !== kD[4] && me(ft, kD[31]), Nt === kD[4] && Vt !== kD[4]) {
            const tt = Ct(Vt[kD[142] + "mMeshHitStack"]);
            typeof tt === kD[30] && (Nt = function(tt, et, Vt) {
              let Ot = 0;
              for (; Ot < Vt && -1 === wD(tt, et[Ot]);) Ot++;
              return (0, jD.m)(CD(tt, Ot < Vt ? et[Ot] : null))
            }(tt, Qt, Qt[kD[1]] - kD[0]))
          }
          var lt;
          if (Nt !== kD[4] && me(Nt, kD[31]), wt === kD[4] && Ie[kD[64]] !== kD[4] && zD((lt = Ie[kD[64]], wt = (0, jD.i)(hD(lt).reader)), yt = vD(Ie[kD[64]], Ct((() => Ie[kD[18]] === kD[4] ? kD[4] : (0, TO.qb)(Ie[kD[18]]))))), wt !== kD[4] && me(wt, kD[31]), yt !== kD[4] && me(yt, kD[31]), nt === kD[6]) return kD[4];
          if (tt[kD[18]] === kD[4] && st[kD[6]] && !(0, jD[kD[99]])(gt[kD[6]]))
            for (let Vt = kD[0]; Vt < mt; Vt++)
              if (st[Vt] && (0, jD[kD[99]])(gt[Vt])) {
                const tt = gt[Vt];
                for (let et = Vt; et > kD[6]; et--) zD(gt[et] = gt[et - kD[0]], st[et] = st[et - kD[0]]);
                zD(gt[kD[6]] = tt, st[kD[6]] = kD[19]);
                break
              } if (zD(tt[-kD[103]] = kD[6], tt[kD[151]] = tt[kD[18]] === kD[4] ? kD[6] : mt), tt[kD[151]] > kD[6] && dt !== kD[4] && jt && !qt) {
            for (let et = tt[kD[151]]; et > kD[6]; et--) zD(gt[et] = gt[et - kD[0]], st[et] = st[et - kD[0]]);
            zD(gt[kD[6]] = dt, st[kD[6]] = kD[31], tt[-kD[103]] = kD[0], tt[kD[151]]++)
          }
          if (tt[kD[39]] = kD[6], te++ % kD[2] === kD[0])
            for (let Vt = kD[0]; Vt < nt; Vt++) de(Vt) < de(tt[kD[39]]) && (tt[kD[39]] = Vt);
          const Et = gt[tt[kD[39]]];
          (st[tt[kD[39]]] ? Oe : Ve)[Et] = ee++;
          const Mt = tt[kD[39]] >= tt[-kD[103]] && tt[kD[39]] < tt[kD[151]];
          if (!st[tt[kD[39]]] || Et === tt[kD[18]] || tt[kD[39]] === kD[6] && !Mt) return Et === kD[136] ? (0, jD.y)(ht[fe], jD[kD[16]]) : Et;
          const ut = (tt[kD[152]] = tt[kD[18]]) !== kD[4] && void 0 !== tt[kD[152]] ? tt[kD[152]] : gt[kD[6]];
          return ut !== qe && zD(qe = ut, De = (0, TO[kD[32]])(kD[4])), De[Et] ??= (0, jD[kD[150]])(Et, ut)
        }
      };
      let re = ge[kD[137]][kD[153]];
      const Ue = () => We !== ge[kD[137]][kD[153]] ? We : re;
      let Ae = kD[6],
        ie = kD[2],
        Ye = kD[6],
        Be = kD[6];
      return {
        checks: oe,
        checkEvent: (...tt) => {
          tt[kD[1]] = kD[0];
          try {
            const et = qt[ve];
            if (typeof et === kD[106] + kD[107] && !(tt[kD[6]] instanceof et) && !(0, TO.I)(tt[kD[6]])) return We = ge[kD[137]].NotEvent, kD[6];
            if (tt[kD[6]].isTrusted === kD[31]) return kD[6];
            let Vt = kD[6];
            for (const Ot in tt[kD[6]]) Vt++;
            return Vt < kD[24] ? (We = ge[kD[137]]["FewPropertie" + kD[69]], kD[6]) : ce()
          } catch {}
          return kD[6]
        },
        checkPadCall: () => {
          try {
            return ce()
          } catch {
            return kD[6]
          }
        },
        usedProp: Ue,
        watchHeld: (...tt) => {
          zD(tt[kD[1]] = kD[2], tt[-kD[156]] = kD[3]);
          const et = ut((() => {
            tt[-kD[156]] = tt[kD[0]]()
          }));
          Ge[ze++] = [tt[kD[6]], () => !et || tt[kD[0]]() !== tt[-kD[156]]]
        },
        BQ: (...tt) => {
          tt[kD[1]] = kD[6];
          const et = Ut();
          return ((...tt) => {
            if (zD(tt[kD[1]] = kD[0], tt[-kD[104]] = kD[3], tt[-kD[154]] = kD[3]), Vt !== kD[4]) {
              const et = Ct(Vt.Zm),
                Ot = "v3" === et ? kD[5] : "v5" === et ? kD[23] : "v6" === et ? kD[43] : kD[2];
              Ot !== kD[2] && (ie = Ot);
              const qt = Ct(Vt["inbuil" + kD[158] + kD[159]]);
              typeof qt === kD[147] && qt >= kD[6] && qt <= kD[155] && (qt | kD[6]) === qt && (Ye = qt), zD(tt[-kD[104]] = Ct(Vt.reflectApplyHit), tt[-kD[154]] = Ct(Vt.definerHit))
            }
            const et = tt[kD[6]] ? kD[57] : "11" === tt[-kD[154]] ? kD[155] : "13" === tt[-kD[154]] ? 13 : tt[-kD[104]] !== kD[3] && tt[-kD[104]] !== kD[4] ? kD[2] : "10" === tt[-kD[154]] ? kD[24] : "12" === tt[-kD[154]] ? kD[44] : kD[6];
            et !== kD[6] && (Be = et)
          })(et), Ae++ % 10 === kD[6] && (he(), SD((() => !WD(qt[Dt][kD[148]][kD[148]](), Xt))) && (re = re === ge[kD[137]][kD[157]] ? ge[kD[137]][kD[157]] : ge[kD[137]].Fr), SD((() => !WD(qt[Dt][kD[148]](), Xt))) && (re = ge[kD[137]][kD[157]])), {
            flags: et ? ge[kD[64]].Butto : kD[6],
            values: [
              [ge[kD[151]].PhysicsVersion, ie],
              [ge[kD[151]]["Inbuil" + kD[158] + kD[159]], Ye],
              [ge[kD[151]]["AltCom" + kD[160]], Be],
              [ge[kD[151]]["ProbeUsedPro" + kD[32]], Ue()]
            ]
          }
        }
      }
    };
    const oD = "[bloxd-wasm-client]",
      rD = "bloxdWasmDownloadFailed",
      UD = QV.d,
      AD = "boot",
      iD = "playSources",
      YD = "wasmBuild",
      BD = "bloxd-wasm-joined",
      pD = "bloxd-wasm-first-view",
      xD = "bloxd-wasm-playable-legacy",
      TD = 1048576,
      gD = 8 * TD,
      sD = 1006,
      nD = 1e3,
      tm = "You lost connection to the server.",
      em = "general:lostConnection",
      Vm = 1048576,
      Om = 5e3,
      qm = 100,
      Dm = [2e3, 1e4, 3e4],
      mm = 3e4;
    let dm = null,
      jm = null,
      Hm = !1,
      Xm = !1,
      Qm = !1,
      lm = null,
      Em = null,
      fm = null,
      wm = null,
      ym = null,
      Nm = null,
      am = null;
    const Mm = new class {
      constructor(tt, et) {
        let Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => performance.now();
        this.master = tt, this.soundOn = et, this.now = Vt, this.player = null, this.local = [], this.stopped = !1
      }
      get loaded() {
        return null !== this.player
      }
      get queued() {
        return this.local.length
      }
      prepare() {
        var tt;
        null === (tt = this.player) || void 0 === tt || tt.prepare()
      }
      preload(tt) {
        var et;
        this.stopped || (null === (et = this.player) || void 0 === et || et.preload(tt))
      }
      endSession() {
        var tt, et;
        null === (tt = this.player) || void 0 === tt || tt.cancelPreload(), null === (et = this.player) || void 0 === et || et.freeSheetsAfterGame()
      }
      load(tt) {
        if (null !== this.player || this.stopped) return;
        this.player = tt, tt.setMaster(this.master, this.soundOn);
        const et = this.now(),
          Vt = this.local;
        this.local = [];
        for (const qt of Vt)
          if (!(qt.stopped || !qt.loop && et - qt.at >= 300)) try {
            this.start(qt, tt, et)
          } catch (Ot) {
            console.error("[bloxd-wasm-client] a queued sound wouldn't start", Ot)
          }
      }
      start(tt, et, Vt) {
        const {
          name: Ot,
          pos: qt,
          ear: Dt,
          maxHearDist: mt,
          refDistance: dt,
          loop: jt,
          fade: Ht
        } = tt, Xt = et.playGame(Ot, Be(tt, Vt), qt, Dt, mt, dt, jt);
        if (tt.sound = Xt, 1 !== tt.rate && Xt.rate(tt.rate), null !== tt.panner && Xt.setPannerAttr(tt.panner), null !== tt.moved && Xt.setPosition(tt.moved), null !== Ht && Vt - Ht.at < Ht.ms) {
          const et = Ye(this.master);
          et > 0 ? Xt.fade(0, tt.volume * et, Ht.at + Ht.ms - Vt) : Xt.setRelativeVolume(tt.volume)
        }
      }
      onAudioEvent(tt, et, Vt, Ot) {
        var qt, Dt;
        return null === (qt = null === (Dt = this.player) || void 0 === Dt ? void 0 : Dt.onAudioEvent(tt, et, Vt, Ot)) || void 0 === qt || qt
      }
      applyListener(tt) {
        var et;
        null === (et = this.player) || void 0 === et || et.applyListener(tt)
      }
      playGame(tt, et, Vt, Ot, qt, Dt, mt) {
        if (this.stopped) return ie.c;
        if (this.player) return this.player.playGame(tt, et, Vt, Ot, qt, Dt, mt);
        const dt = this.now();
        this.local = this.local.filter((tt => !tt.stopped && (tt.loop || dt - tt.at < 300)));
        const jt = {
          name: tt,
          volume: Ye(et),
          fade: null,
          pos: Vt && [Vt[0], Vt[1], Vt[2]],
          ear: Ot && [Ot[0], Ot[1], Ot[2]],
          maxHearDist: qt,
          refDistance: Dt,
          loop: mt,
          rate: 1,
          panner: null,
          moved: null,
          at: dt,
          stopped: !1,
          sound: null
        };
        this.local.push(jt);
        const Ht = {
          stop: () => {
            var tt;
            return jt.stopped = !0, null === (tt = jt.sound) || void 0 === tt || tt.stop(), Ht
          },
          fade: (tt, et, Vt) => {
            if (jt.sound) return jt.sound.fade(tt, et, Vt), Ht;
            const Ot = Ye(this.master),
              qt = Ye(Ot > 0 ? et / Ot : et > 0 ? jt.volume : 0),
              Dt = this.now(),
              mt = Be(jt, Dt);
            return jt.volume = qt, jt.fade = Vt > 0 && mt !== qt ? {
              from: mt,
              at: Dt,
              ms: Vt
            } : null, Ht
          },
          rate: tt => (jt.sound ? jt.sound.rate(tt) : jt.rate = tt, Ht),
          getVolume: () => jt.sound ? jt.sound.getVolume() : jt.volume * Ye(this.master),
          getRelativeVolume: () => jt.sound ? jt.sound.getRelativeVolume() : jt.volume,
          setRelativeVolume: tt => (jt.sound ? jt.sound.setRelativeVolume(tt) : (jt.volume = Ye(tt), jt.fade = null), Ht),
          setPannerAttr: tt => (jt.sound ? jt.sound.setPannerAttr(tt) : jt.panner = {
            ...tt
          }, Ht),
          setPosition: tt => (jt.sound ? jt.sound.setPosition(tt) : jt.moved = [tt[0], tt[1], tt[2]], Ht)
        };
        return Ht
      }
      setMaster(tt, et) {
        var Vt;
        this.master = tt, this.soundOn = et, null === (Vt = this.player) || void 0 === Vt || Vt.setMaster(tt, et)
      }
      stop() {
        var tt;
        this.stopped = !0, null === (tt = this.player) || void 0 === tt || tt.stopAll();
        for (const et of this.local) et.stopped = !0;
        this.local = []
      }
    }((0, Pe.d)(), !0);
    let bm = {
        wasm: "unknown",
        client: String(Qe.d)
      },
      Jm = null,
      Cm = () => {};
    const um = new Promise((tt => {
      Cm = tt
    }));
    let Km = () => {};
    const hm = new Promise((tt => {
      Km = tt
    }));
    let Wm, Sm = null,
      cm = null,
      Rm = null,
      Im = null,
      Pm = null,
      Zm = null,
      Lm = null,
      Fm = null,
      km = null,
      Gm = null,
      zm = null,
      om = null,
      rm = null,
      Um = null,
      Am = null,
      im = null,
      Ym = null,
      Bm = null,
      pm = null,
      xm = !1,
      Tm = null;
    const gm = new Set,
      sm = new Set;

    function nm(tt) {
      if (!gm.has(tt)) {
        gm.add(tt);
        for (const Vt of sm) try {
          Vt(tt)
        } catch (et) {
          console.error(`${oD} a startup listener threw`, et)
        }
      }
    }

    function td(tt) {
      xm = !0, tt.isStopped || nm("texturesIn")
    }
    let ed = 1,
      Vd = -1 / 0,
      Od = -1 / 0,
      qd = -1 / 0,
      Dd = !1,
      md = null,
      dd = !1,
      jd = !1,
      Hd = 0,
      Xd = null,
      Qd = !1;
    const ld = {
      dropped: -1 / 0,
      pause: -1 / 0,
      backlog: -1 / 0
    };
    let Ed = 0,
      fd = 0,
      wd = null,
      yd = null,
      Nd = null,
      Md = null;
    const bd = new WeakMap;
    let Jd = null,
      Cd = null,
      ud = !1,
      Kd = null,
      hd = null,
      vd = null,
      Wd = null,
      Sd = null,
      cd = null,
      Rd = 0;
    const Id = new Set;
    let Pd = 0,
      Zd = 0,
      Ld = 0,
      Fd = null,
      kd = null,
      Gd = null,
      zd = null,
      od = -1 / 0,
      rd = null;
    const Ud = new Set;
    let Ad = !1,
      Yd = null;
    const Bd = new Map,
      pd = new Set;
    let xd = !1;
    const Td = {
      adapter: null,
      boundAtMs: null,
      indirectHangs: null,
      restoresSkipped: null
    };
    let gd = null,
      sd = () => [0, 0],
      nd = () => {},
      tj = () => {},
      ej = null,
      Vj = null;
    const Oj = new class {
      constructor(tt) {
        this.reached = tt, this.next = 1
      }
      observe(tt) {
        if (!(tt < this.next)) {
          for (; this.next <= tt;) this.next *= 2;
          this.reached(tt)
        }
      }
    }((tt => {
      console.warn(`${oD} chunk cancels from the server this session: ${tt}`)
    }));
    let qj = 1,
      Dj = null,
      mj = null,
      dj = null,
      jj = null,
      Hj = null,
      Xj = !1,
      Qj = !1,
      lj = 0,
      Ej = null,
      fj = !1,
      wj = null,
      yj = null,
      Nj = null,
      aj = !1;
    const Mj = new class {
        constructor(tt) {
          this.sw = tt, this.lossPending = !1, this.undrawnSinceMs = null, this.lastFrameMs = 0, this.shown = !1
        }
        deviceLost() {
          this.lossPending = !0
        }
        frame(tt, et, Vt) {
          (0, ke.d)(tt) && (this.lossPending = !1);
          const Ot = Vt - this.lastFrameMs;
          this.lastFrameMs = Vt, this.lossPending && et && (0, ke.f)(tt) ? (null === this.undrawnSinceMs || Ot > 1e3) && (this.undrawnSinceMs = Vt) : this.undrawnSinceMs = null, this.show(null !== this.undrawnSinceMs && Vt - this.undrawnSinceMs >= 2e3)
        }
        stop() {
          this.lossPending = !1, this.undrawnSinceMs = null, this.show(!1)
        }
        show(tt) {
          tt !== this.shown && (this.shown = tt, this.sw(tt))
        }
      }((tt => {
        jt.j.sw(ft.d, tt)
      })),
      bj = new class {
        constructor(tt) {
          let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => performance.now();
          this.iE = tt, this.now = et, this.lostAtMs = null, this.asked = !1, this.watched = new WeakSet
        }
        watch(tt, et) {
          this.watched.has(tt) || (this.watched.add(tt), tt.addEventListener("webglcontextlost", (() => {
            et() && this.contextLost()
          })), tt.addEventListener("webglcontextrestored", (() => {
            et() ? this.contextRestored() : this.take()
          })))
        }
        frame(tt, et) {
          (0, ke.f)(tt) && et && null !== this.lostAtMs && this.now() - this.lostAtMs >= 1e3 && (this.asked = !0)
        }
        contextLost() {
          null === this.lostAtMs && (this.lostAtMs = this.now(), this.asked = !1)
        }
        contextRestored() {
          const tt = this.take();
          if (null !== tt) {
            const et = tt.asked ? "restore_context" : "natural";
            this.iE(`webgl_restored_${et}_${tt.delay}`, `WebGL2 context restored (${et}, wasm)`)
          }
        }
        gaveUp() {
          const tt = this.take();
          if (null !== tt) {
            const et = tt.asked ? "restore_tried" : "restore_untried";
            this.iE(`webgl_rejoin_${et}_${tt.delay}`, "WebGL2 context not restored: rejoining (wasm)")
          }
        }
        take() {
          if (null === this.lostAtMs) return null;
          const tt = (0, Ge.j)(this.now() - this.lostAtMs);
          return this.lostAtMs = null, {
            delay: tt,
            asked: this.asked
          }
        }
      }(PV.reportRenderRecovery);
    let Jj = !1,
      Cj = !0,
      uj = null,
      Kj = !1,
      hj = !1,
      vj = !1;

    function Wj() {
      return fm ??= Promise.all([Vt.e(201), Vt.e(144), Vt.e(60)]).then((() => Vt(51261))).then((tt => (Em = tt, Object.assign(globalThis, {
        bloxdPreviewPage: tt.pagePreviews()
      }), tt)), (tt => {
        throw fm = null, tt
      })), fm
    }

    function Sj() {
      return lm ??= Vt.e(58).then((() => Vt(51280))).catch((tt => {
        throw lm = null, new Pt.d(tt)
      })), lm
    }
    class cj {
      constructor() {
        this.host = null
      }
      open(tt) {
        return null !== this.host ? tt(this.host) : Wj().then((et => (this.host ??= new et.WasmPreviewHost(et.pagePreviews()), tt(this.host))))
      }
      openMob(tt) {
        return this.open((et => et.openMob(tt)))
      }
      openPet(tt) {
        return this.open((et => et.openPet(tt)))
      }
      openMobLineup(tt) {
        return this.open((et => et.openMobLineup(tt)))
      }
      openCharacter(tt, et) {
        return this.open((Vt => Vt.openCharacter(tt, et)))
      }
    }

    function Rj() {
      Qm || (Qm = !0, Kq.h.setHost(new cj), (0, kV.o)(), bq.c.setFollower(FH), Object.assign(globalThis, {
        bloxdPreviews: Kq.h
      }))
    }

    function Ij() {
      Wj().then((tt => {
        tt.pagePreviews().prefetch()
      }), (() => {}))
    }

    function Pj() {
      let tt = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      if (Xm) return;
      Xm = !0, Jj = "play" === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "shell"), Cj = !Jj, console.info(`${oD} starting`), Hm || (Hm = !0, (0, ft.S)(new re(sj, mH)), (0, lt.m)(new Ue), (0, ft.P)(new Ae), (0, ft.E)()), Jj && jt.j.subscribe("appManagerUpdated|gameState", gj), Rj(), (0, PV.setCrashScreen)((tt => {
        let {
          text: et,
          reload: Vt
        } = tt;
        ! function(tt, et) {
          var Vt, Ot;
          if (Kj) return;
          Kj = !0, (0, zV.N)(), null === (Vt = rd) || void 0 === Vt || Vt.abort(), rd = null, Jq.b.release();
          const qt = Jj ? null !== (Ot = tt.cancel) && void 0 !== Ot ? Ot : "general:back" : null;
          kO({
            ...tt,
            cancel: qt
          }).then((tt => {
            tt && et && hj ? ((0, Ce.E)("reloadOntoJs"), (0, te.f)(Ce.N)) : tt && et ? (0, te.h)() : Jj && (0, te.e)("/")
          }))
        }(et, Vt)
      })), (0, Xq.l)(), (0, Ie.h)();
      let et = null;
      try {
        et = FD("rxi78i5buro", (() => {
          var tt, et;
          return null !== (tt = null === (et = Sm) || void 0 === et ? void 0 : et.ws) && void 0 !== tt ? tt : null
        }), tt, "euyfsxnmtv")
      } catch (qt) {
        console.error(`${oD} probes`, qt)
      }
      const Ot = function() {
        const tt = (0, BO.o)(),
          et = (0, BO.j)();
        let Vt = !1;
        return Ot => {
          tt && !Vt && (Vt = !0, (0, PV.reportStaleBuildReload)(tt, et, Ot))
        }
      }();
      GH(), Jj || function() {
        const tt = function(tt) {
          var et;
          const Vt = new URLSearchParams(tt),
            Ot = Vt.get("game");
          return Ot ? {
            game: Ot,
            lobby: null !== (et = Vt.get("lobby")) && void 0 !== et ? et : null
          } : null
        }(window.location.search);
        if (tt) return (0, le.k)(tt.game) && GH().request(), void Fj(tt.game, tt.lobby);
        const et = new URLSearchParams(window.location.search).get("ws");
        if (!et) return;
        um.then((tt => {
          tt && async function(tt, et) {
            try {
              await (0, Pt.k)(tt), Kd = QH(new WebSocket(et)), null !== Kd && Jq.b.setGame(null), Zj()
            } catch (qt) {
              console.error(`${oD} ?ws=${et} did not attach`, qt)
            }
          }(tt, et)
        }))
      }(), async function(tt) {
        var et, Ot, Dt, mt, dt, Ht;
        if ("undefined" === typeof WebAssembly) return vH("noWebAssembly", "unsupported", "This browser has no WebAssembly"), null;
        const Xt = (0, Rq.V)(),
          Qt = await async function(tt, et) {
            const Vt = (0, QV.l)(tt) ? SH(tt, et) : null;
            if (null === Vt || void 0 === Vt || !Vt.retries) return tt;
            console.warn(`${oD} ${Vt.detail}: picking again in ${WH} ms`), await new Promise((tt => {
              setTimeout(tt, WH)
            }));
            const Ot = await (0, Rq.Y)();
            if (!(0, QV.l)(Ot)) {
              var qt;
              (0, PV.reportNoBackendRetry)("reprobed", Vt.decline, Vt.detail, {
                ...Vt.details,
                backend: null !== (qt = null === Ot || void 0 === Ot ? void 0 : Ot.backend) && void 0 !== qt ? qt : "none"
              }), null !== Ot && (0, Rq.S)(Ot.backend)
            }
            return Ot
          }(await (0, Rq.Q)(), Xt);
        if ((0, PV.setCrashBackend)((0, QV.l)(Qt) ? "unsupported" : null !== (et = null === Qt || void 0 === Qt ? void 0 : Qt.backend) && void 0 !== et ? et : "none"), (0, QV.l)(Qt)) return function(tt) {
          let {
            decline: et,
            detail: Vt,
            details: Ot,
            retries: qt
          } = tt;
          if (qt && (0, Ce.r)()) return (0, PV.reportNoBackendRetry)("reload", et, Vt, Ot), void cH(`${Vt}, again after ${WH} ms`);
          vH("browser", et, Vt, qt ? {
            ...Ot,
            afterReload: String(Ce.A)
          } : Ot)
        }(SH(Qt, Xt)), null;
        if ((0, Tq.v)("render")) try {
          const {
            startRenderDebug: tt
          } = await Promise.all([Vt.e(78), Vt.e(49)]).then((() => Vt(4833)));
          tt(Qt)
        } catch (we) {
          console.warn("The render debug topic didn't load", we)
        }
        if ((0, Tq.v)("renderlite")) try {
          const {
            startRenderLite: tt
          } = await Promise.all([Vt.e(273), Vt.e(50)]).then((() => Vt(51287)));
          dj = tt(Qt)
        } catch (we) {
          console.warn("The renderlite debug topic didn't load", we)
        }
        if ((0, Tq.v)("renderprobe")) try {
          const {
            startRenderProbe: tt
          } = await Vt.e(51).then((() => Vt(51293)));
          tt(Qt)
        } catch (we) {
          console.warn("The renderprobe debug topic didn't load", we)
        }
        if ("webgl" === (null === Qt || void 0 === Qt ? void 0 : Qt.backend) && Jj && "wasm" !== (0, Ce.i)(window.location.search)) {
          const tt = AO(Qt);
          null !== tt && (0, ue.i)(tt)
        }
        const lt = null !== (Ot = null === Qt || void 0 === Qt ? void 0 : Qt.backend) && void 0 !== Ot ? Ot : null;
        Td.adapter = null !== (Dt = null === Qt || void 0 === Qt ? void 0 : Qt.adapter) && void 0 !== Dt ? Dt : null, Td.boundAtMs = null, Td.indirectHangs = null, Td.restoresSkipped = null;
        const Et = !(0, QV.bb)();
        null === Qt || (0, QV.B)(Qt.reason) || console.info(`${oD} drawing with ${Qt.backend}: ${Qt.reason}`);
        const ft = (0, Rq.F)();
        Km(!0), (0, Pt.r)((tt => {
          try {
            null !== lt && (ej = tt.startSkyFeed, ZH(), function(tt) {
              var et, Vt;
              sd = tt.rasterText, vd = tt.setTextLocalPlayer, tt.setTextLocalPlayer(null !== (et = null === (Vt = hd) || void 0 === Vt ? void 0 : Vt.info.playerDbId) && void 0 !== et ? et : null), nd = tt.drainTextRerasters, tj = tt.loadTextIcons, tt.warmText((() => Xj)), tt.textChanged(), Xj && setTimeout(tj, 0)
            }(tt), Vj = tt.startShellAnalytics, iH())
          } finally {
            vj || (jj = tt.followMenuPrefs({
              setSoundPrefs: jH,
              setEnvPrefs: HH,
              setUiPrefs: dH,
              setLookPrefs: XH
            }))
          }
        })), (0, Pt.m)(Mm).catch((tt => {
          console.warn(`${oD} the game code did not load: a join asks again`, tt)
        }));
        const wt = (0, Rq.l)(Qt);
        let yt, Nt;
        wt.catch((() => {})), "loading" === (0, ye.D)() && Ct();
        try {
          yt = function(tt) {
            const et = null !== tt && void 0 !== tt ? tt : document.createElement("canvas");
            et.id = "wasm-game-canvas", bj.watch(et, (() => null !== Md && mX())), (0, Gq.k)();
            const Vt = (0, oe.g)(),
              Ot = (0, oe.j)(Vt);
            et.style.cssText = "position:absolute;top:0;left:0;display:block;touch-action:none;outline:none;background:#000", (0, kq.c)(et, Ot), (0, oe.c)(et, Vt), et.width = Ot.bufferWidth, et.height = Ot.bufferHeight;
            const qt = document.createElement("div");
            return qt.style.cssText = "position:fixed;top:0;right:0;bottom:0;left:0;overflow:hidden", qt.append(et), nj(qt, Cj), uj = qt, document.body.append(qt), et
          }(null === lt ? null : await (await Wj()).pagePreviews().beginSession())
        } catch (qt) {
          return await WX({
            site: YD,
            error: qt
          }, (() => {
            (0, PV.showUnsupported)((0, ZO.q)("fetch"), qD.h.fetch, `the previews did not load: ${String(qt)}`)
          })), null
        }
        Ct();
        try {
          Nt = await wt
        } catch (qt) {
          return await WX({
            site: YD,
            error: qt
          }, (() => {
            (0, PV.showUnsupported)((0, ZO.q)("fetch"), qD.h.fetch, `the ${null!==lt&&void 0!==lt?lt:"client"} build did not load: ${String(qt)}`)
          })), null
        }
        const bt = (0, Rq.g)(),
          Jt = !bt && !0 !== AV.h.getItem(rD),
          ut = !bt && "loading" === (0, ye.D)();
        await (0, Iq.e)(Nt, {
          reloadFailedDownload: Jt
        }), ut && !(0, ye.W)() && await (0, Iq.e)(Nt, {
          reloadFailedDownload: Jt
        });
        Mt = performance.now();
        const Kt = bm;
        if (!(0, ye.W)()) {
          (0, ye.T)() && AV.h.setItem(rD, !0);
          const tt = (0, ye.s)();
          if ("call" === tt) lX({
            site: EV.w,
            error: (0, ye.q)(),
            header: null
          }, Kt);
          else {
            const et = null !== tt && void 0 !== tt ? tt : "instantiate",
              Vt = () => {
                (0, PV.showUnsupported)((0, ZO.q)(et), qD.h[et], (0, ye.k)())
              };
            if ("compile" !== tt && "instantiate" !== tt || !RH())
              if ("fetch" === et) {
                const tt = [Nt.url().href, be.d.url().href];
                await WX({
                  site: YD,
                  error: (0, ye.k)(),
                  urls: tt
                }, Vt)
              } else Vt();
            else {
              const et = (0, ye.k)(),
                Vt = (0, tV.e)((0, ye.q)());
              if (Vt && (0, Ce.r)()) return (0, PV.reportCountedLoadFallback)((0, ZO.q)(tt), qD.h[tt], et, "wasmReload"), cH(`the wasm client ran out of memory to ${tt} here (${et})`), null;
              (0, PV.reportCountedLoadFallback)((0, ZO.q)(tt), qD.h[tt], et, Vt ? "declined" : "pageAlone"), IH(`the wasm client did not ${tt} here (${et})`, Vt ? "oom" : null)
            }
          }
          return null
        }(0, Ne.M)(Nt.url()) && (0, PV.reportUnstreamedCoreLoad)();
        const ht = (0, ye.F)();
        let vt, Wt = Kt;
        try {
          Wt = {
            ...Kt,
            wasm: ht.bQ()
          };
          const {
            Py: tt
          } = Nt.bindings, et = tt.ROt();
          if (et !== ge.z) return lX({
            site: EV.c,
            error: `core ABI ${et}, page ABI ${ge.z}`,
            header: null
          }, Wt), null;
          const [Vt, Ot] = (0, ge.De)();
          vt = new tt(Vt, Ot)
        } catch (qt) {
          return lX({
            site: EV.c,
            error: qt,
            header: null
          }, Wt), null
        }
        bm = Wt, Jm = Nt.bindings;
        const St = new EV.f(vt, ye.z, {
          onCrash: tt => {
            var et;
            null === (et = dj) || void 0 === et || et.crashed(tt),
              function(tt, et, Vt, Ot) {
                if ("webgpu" !== et || (0, Rq.e)()) return !1;
                const qt = function(tt) {
                  if (tt.site === EV.e && (0, QV.o)(tt.error)) return "frames_refused";
                  return tt.site === UD && (0, QV.r)(tt.error) ? "start_failed" : null
                }(tt);
                if (null === qt) return !1;
                if (null !== (0, QV.$)(qt, Ot, (0, lV.c)(tt.error))) return (0, PV.countRenderLost)(qt, tt.error, Td), !1;
                return Le.D.reloaded(null, !1), (0, PV.reportRenderReload)("webgpu", "start_failed" === qt ? 0 : 1, Vt, {
                  cause: qt,
                  error: tt.error,
                  context: Td,
                  session: yX(null)
                }), TH(), !0
              }(tt, lt, Wt, Et) || lX(tt, Wt)
          },
          onNetEvent: xH,
          onReconnectGrace: uH,
          onJoinPreloadEnded: CH,
          onCoreErrors: (tt, et) => {
            var Vt, Ot;
            tt.some((tt => {
              let {
                code: et
              } = tt;
              return et === ge.M.RenderDeviceLost
            })) && ((0, Rq.A)(), Mj.deviceLost(), "webgpu" === lt && ((0, lV.d)(gd), Le.D.lost())), null === (Vt = dj) || void 0 === Vt || Vt.coreErrors(tt);
            const qt = () => {
              (0, PV.reportCoreErrors)(tt, et, Wt, ((tt, et) => {
                var Vt;
                return tt === ge.M.EnvUnknownSky ? (0, PV.unknownSkyWords)(Ke.b.get("skyBox")) : tt === ge.M.RenderDeviceLost ? (0, PV.deviceLossWords)(et, Td.boundAtMs) : null === (Vt = gd) || void 0 === Vt ? void 0 : Vt.IOt(tt, et)
              }))
            };
            tt.some((tt => {
              let {
                code: et
              } = tt;
              return et === ge.M.EnvUnknownSky
            })) ? queueMicrotask(qt) : qt(), null === (Ot = Tm) || void 0 === Ot || Ot.coreErrors(tt)
          },
          onRenderReload: (tt, et, Vt) => {
            ! function(tt, et, Vt, Ot, qt, Dt) {
              var mt;
              if ((0, Rq.e)()) return;
              const dt = et === ge.hd.WEBGPU,
                jt = Ot === ge.hd.PIPELINE_FAILED ? "pipeline_failed" : "lost",
                Ht = Ot === ge.hd.RESTORE_LOST,
                Xt = dt && (0, Le.l)(Td.adapter, Vt, "lost" === jt, Ht),
                Qt = (0, lV.l)(gd);
              null === (mt = dj) || void 0 === mt || mt.reload(dt, Vt, jt, null === Qt || void 0 === Qt ? void 0 : Qt.message);
              const lt = dt ? (0, QV.$)(jt, qt, Qt) : null;
              if (null !== lt) {
                (0, PV.countRenderLost)(jt, Qt, Td);
                const et = void 0 === Qt ? "" : ` (${Qt.message})`;
                return void tt.crash(PV.RENDER_RELOAD_SITE, new Error(`${(0,PV.renderReloadMessage)("webgpu",jt,Vt)} and ${lt}${et}`))
              }
              const Et = dt ? "webgpu" : "webgl1" === Dt ? "webgl1" : "webgl";
              "lost" === jt && (0, Rq.A)();
              dt || ((0, Ce.w)(), bj.gaveUp());
              (0, PV.reportRenderReload)(Et, Vt, bm, {
                from: "game",
                cause: jt,
                restoreLost: Ht,
                adapterRemembered: Xt,
                error: Qt,
                context: Td,
                session: yX(tt.sunShadowsHeld())
              }), TH()
            }(St, tt, et, Vt, Et, lt)
          },
          onEnvEvent: tt => {
            var et;
            tt.kind === ge.db.SkyImages ? null === (et = im) || void 0 === et || et.onEvent(tt.payload) : tt.kind === ge.db.EnvLighting && (Ym = 1 === tt.payload[0])
          },
          onImages: tt => {
            var et;
            null === (et = Bm) || void 0 === et || et.onEvent(tt)
          },
          onModelRequest: tt => {
            var et;
            null === (et = rm) || void 0 === et || et.request(tt)
          },
          onModelTaken: (tt, et) => {
            var Vt;
            null === (Vt = rm) || void 0 === Vt || Vt.taken(tt, et)
          },
          onTerrainTexturesWanted: () => {
            queueMicrotask((() => {
              ! function(tt, et) {
                const Vt = am;
                if (null === Vt || tt.isStopped) return;
                Vt.restore((tt => {
                  (0, PV.reportTerrainTextureFailure)(tt, et)
                })).then((et => {
                  !1 !== et || tt.isStopped ? !0 === et && console.info(`${oD} terrain textures handed over again after the renderer lost them`) : console.warn(`${oD} the terrain textures couldn't be handed over again: the terrain draws blank`)
                }))
              }(St, Wt)
            }))
          },
          onKeepAlive: tt => {
            const et = null === Md ? void 0 : bd.get(Md);
            void 0 !== et && sO(et, tt)
          },
          onSends: () => {
            ! function(tt) {
              const et = performance.now();
              if (tt.forEachNetOut(HX), DX(tt), (0, EV.L)(tt, {
                  worldgen: Rm,
                  mesh: Pm
                }), null !== mj) try {
                mj.sendsWent(tt, et, performance.now())
              } catch (qt) {
                pH(qt)
              }
            }(St)
          }
        });
        if (wm = St, null === (mt = ze.d.wasmNetReady) || void 0 === mt || mt.call(ze.d, (() => St.isStopped ? 0 : St.netKeptFrames)), null !== tt) {
          St.setAntiCheatProbes(ID(ye.z, tt.checks)), tt.watchHeld(ZD.CoreFrame, (() => St.frame)), tt.watchHeld(ZD.GlueFrame, (() => vt.frame));
          const et = function(tt, et) {
            const Vt = new PD(et);
            let Ot = !1;
            Vt.BQ(tt.BQ());
            const qt = (0, TO.jb)((() => {
              Vt.BQ(tt.BQ())
            }), LD);
            let Dt = 6 * (0, TO.X)() | 0;
            const mt = () => {
              ++Dt < 6 || (Dt = 0, tt.checks.stackCheck() && (Ot = !0))
            };
            (0, QD.l)(mt);
            const dt = () => {
              const et = tt.checkPadCall();
              0 !== et && Vt.setFlags(et)
            };
            return (0, XD.j)(dt), {
              onSend: mt,
              beforeFrame: () => {
                Ot && Vt.originStackHit() && (Ot = !1)
              },
              onEvent: et => {
                const Ot = tt.checkEvent(et);
                Vt.value(ge.g.ProbeUsedProp, tt.usedProp()), 0 !== Ot && Vt.setFlags(Ot)
              },
              stop: () => {
                (0, TO.kb)(qt), (0, QD.h)(mt), (0, XD.i)(dt)
              }
            }
          }(tt, ((tt, et, Vt) => {
            let Ot = !1;
            return bX(St, (() => {
              Ot = St.rings.input.writeRecord(ge.Fb.AntiCheat, tt, et, Vt, 0)
            })), Ot
          }));
          St.isStopped ? et.stop() : zm = et
        }
        dm = (tt, et, Vt) => St.rings.cmd.writeCmd(tt, et, Vt), jm = tt => St.rings.cmd.growForCmd(tt), Qd = !1, ZH(), (0, Pt.u)(St, {
          core: vt,
          memory: ye.z,
          staleOr: (tt, et, Vt, Ot) => WX({
            site: tt,
            error: et
          }, Vt, Ot),
          reportReplayFault: (tt, et) => {
            (0, PV.reportReplayFault)(tt, et, bm)
          },
          audio: Mm,
          options: Ke.b,
          onNetEvent: xH,
          sessionInfo: tt => {
            var et;
            return (null === (et = hd) || void 0 === et ? void 0 : et.conn) === tt ? hd.info : null
          },
          onEventOverflow: xj,
          replayShaderPack: tt => {
            var et;
            null === (et = Tm) || void 0 === et || et.replay(tt)
          },
          hasPackModel: tt => {
            var et, Vt;
            return null !== (null !== (et = null === (Vt = LH()) || void 0 === Vt ? void 0 : Vt.modelUrl(tt)) && void 0 !== et ? et : null)
          },
          beforeWrite: () => (!dd && St.rings.net.cursor > 0 && nH(St, !1, "all"), !St.isStopped),
          beforeOp: () => (!dd && St.netWrittenSinceFrame > 0 && nH(St, !1, "budget"), !St.isStopped)
        }), (0, It.A)({
          lockPointer: () => {
            if (!DO(yt)) return !1;
            try {
              Promise.resolve(yt.requestPointerLock()).catch((() => {}))
            } catch {
              return !1
            }
            return !0
          },
          unlockPointer: () => {
            (0, BV.c)()
          },
          leaveGame: () => {
            pj()
          },
          canvas: () => yt
        }), om = (0, It.p)((() => {
          var tt;
          const et = (0, Pt.g)();
          null === (tt = (0, Pt.q)()) || void 0 === tt || tt.followCursorAim(!0 === (null === et || void 0 === et ? void 0 : et.isSessionLive) ? et : null)
        })), wd && St.setUiPrefs(wd);
        yd && St.setEnvPrefs(yd);
        Nd && St.setLookPrefs(Nd);
        const ct = Lq ? Fq(Lq.preventMovement) : null;
        ct && DH(ct);
        const Rt = (0, SV.i)(),
          Zt = (0, SV.e)(St, Rt);
        km = Rt.basis, (0, UV.n)(null === Zt ? null : (0, WV.l)(Zt)), Fm = Zt;
        const Lt = (0, ae.d)();
        let Ft = 1 / 0,
          kt = !0,
          Gt = Rt.shedFootprintBytes;
        const zt = new Hq.d(Lt, (() => vt.Ty()), (tt => {
          St.crash(EV.l, tt)
        }));
        Zm = zt, Lm = zt, null !== Zt && zt.setCeiling(Math.min((0, Hq.q)(Zt), Ft, (0, SV.l)()));
        if (kt) {
          zt.setShed((tt => {
            const et = St.shedMemory("joinReserve" !== tt);
            return null !== et && (null === Fm || et < Fm) && (Fm = et, (0, UV.n)((0, WV.l)(et))), et
          }), ((tt, et, Vt) => {
            1 === et ? (0, PV.reportMemoryShed)(tt, Vt, bm) : console.warn(`${oD} wasm memory: shed again (${tt}): shed ${et}`, Vt.wasmMemoryShed)
          }), (() => St.addDistanceInUse()));
          const tt = (0, QV.P)(ht);
          zt.setFootprint(new xq(Gt, {
            storedChunks: () => vt.POt(),
            gpuBytes: () => {
              var et;
              return null !== (et = null === tt || void 0 === tt ? void 0 : tt.ZOt()) && void 0 !== et ? et : 0
            },
            jsHeapBytes: pq
          }))
        }
        window.addEventListener("pagehide", (() => {
          Zm === zt && (zt.refreshStats(), MX(zt))
        })), window.addEventListener("pagehide", gH), window.addEventListener("pagehide", sH), !1;
        const [ot, rt] = (0, FV.d)();
        Hj = (0, GV.i)((tt => St.setChunkAddDistance(tt.horizontal, tt.vertical)), {
          horizontal: ot,
          vertical: rt
        }), St.setAmbientOcclusion(!0 !== AV.e.getItem("disableAmbientOcclusion")), St.setPoseLod(!0 !== AV.e.getItem(fe.H)), St.setDebugLog(ge.R.Look, !0), St.setDebugLog(ge.R.CameraSet, !0), (0, sq.startLookDebug)("wasm", {
          look: () => St.takeDebugLog(ge.R.Look),
          cameraSets: () => St.takeDebugLog(ge.R.CameraSet)
        }), (0, Tq.v)("remesh") && (St.setDebugLog(ge.R.Remesh, !0), Ut = () => St.takeDebugLog(ge.R.Remesh), OD = new VD((0, nq.n)(), Ut));
        var Ut;
        const At = function(tt, et, Vt, Ot) {
          const qt = new CO,
            Dt = tt => AV.e.getItem(tt);
          qt.sync(Dt, et), (0, Fe.ab)();
          const mt = (0, jt.n)("customBindingsChanged", (() => {
            qt.sync(Dt, et)
          }));
          (0, pV.p)(et);
          const dt = new Set,
            Ht = (0, It.p)((() => {
              var tt;
              dt.size > 0 && vO() && !0 === (null === (tt = (0, Pt.g)()) || void 0 === tt ? void 0 : tt.localPlayerAlive()) && jt.j.sw("usedKeyboard")
            })),
            Xt = EO.e.heldSizer((() => (0, oe.p)(tt))),
            Qt = lO(tt, et, {
              prevents: tt => qt.prevents(tt),
              keyPressed: tt => {
                qt.moves(tt) && (dt.add(tt), vO() && jt.j.sw("usedKeyboard"))
              },
              keyReleased: tt => {
                dt.delete(tt)
              },
              keysReleased: () => {
                dt.clear()
              },
              resized: () => {
                KO.h.measure(tt.getBoundingClientRect()), (0, fO.j)()
              },
              sizeCanvas: Xt,
              watchRenderScale: et => {
                const Vt = (0, oe.s)(tt, et),
                  Ot = EO.e.onRelease(et);
                return () => {
                  Vt(), Ot()
                }
              },
              touchStarting: () => {
                KO.h.measure(tt.getBoundingClientRect())
              },
              viewShown: Vt,
              touchUiShown: () => ee.b.get("isTouchScreen"),
              ctrlCombosAreGames: vO,
              inspect: (tt, et, Vt) => {
                qt.checks(et, Vt) && Ot(tt)
              },
              canLock: () => DO(tt)
            }),
            lt = (0, MV.e)(et);
          return () => {
            mt(), Ht(), (0, pV.p)(null), lt(), Qt()
          }
        }(yt, ((tt, et, Vt, Ot, qt) => {
          bX(St, (() => {
            St.rings.input.writeRecord(tt, et, Vt, Ot, qt)
          })), !jd && (0, IO.c)(tt, qt) && (0, IO.b)((() => {
            wm !== St || vj || St.isStopped || !dX() || nH(St, !1, "budget", !1)
          }))
        }), (() => Cj), (tt => {
          var et;
          null === (et = zm) || void 0 === et || et.onEvent(tt)
        }));
        if (St.isStopped) return At(), null;
        cm = At;
        const it = () => !St.isStopped && !Kj;
        if (St.isStopped) return null;
        (0, ye.$)((() => {
          "call" === (0, ye.s)() && St.crash(EV.w, (0, ye.q)())
        }));
        const Yt = (0, EV.O)(St.rings.worker, (() => {
          nH(St, !1, document.hidden ? "all" : "budget")
        }));
        Rm = function(tt, et) {
          return JX().then((tt => {
            let {
              prefetchWorldgenWorker: et
            } = tt;
            et()
          }), (() => {})), new dD({
            module: (0, ye.A)(),
            decodeSettings: tt => {
              const et = (0, Pt.q)();
              if (null === et) throw new Error("no game code to decode the world-gen seed with");
              return et.decodeMapSettings(tt)
            },
            loadWorker: CX,
            onMapWithoutWorldgen: () => {
              uX((tt => {
                let {
                  stopWorldgenWorkerPrefetch: et
                } = tt;
                et()
              }))
            },
            onLoadFailed: tt => {
              (0, PV.reportWorldgenLoadFailure)(tt, bm)
            },
            onWorkerLost: tt => {
              (0, PV.reportWorkerLost)(EV.E, tt, bm)
            },
            onStartTimeout: tt => {
              (0, PV.reportWorkerStartTimeout)(EV.E, tt, bm)
            },
            onGaveUp: tt => {
              (0, PV.reportWorldgenGaveUp)(tt, bm)
            },
            onMemoryStats: tt => {
              var et;
              null === (et = Zm) || void 0 === et || et.noteWorldgen(tt)
            },
            onMemoryGone: () => {
              var tt;
              null === (tt = Zm) || void 0 === tt || tt.worldgenGone()
            },
            write: (Vt, Ot, qt, Dt, mt) => {
              bX(tt, (() => {
                tt.rings.worker.writeWorkerRecord(Vt, Ot, qt, 0, Dt, mt) || tt.crash(EV.E, `a world-gen record of kind ${Ot} did not fit the worker-in ring`)
              })), et()
            }
          })
        }(St, Yt), Pm = function(tt, et) {
          return new dq({
            module: (0, ye.A)(),
            loadWorkers: async () => {
              const [{
                createMeshWorker: tt
              }, et] = await Promise.all([Vt.e(41).then((() => Vt(51328))), Promise.resolve().then((() => Vt(106))).then((tt => {
                let {
                  isMobile: et
                } = tt;
                return et()
              }), (() => !1))]);
              return {
                create: tt,
                count: (0, Re.b)(navigator.hardwareConcurrency, et),
                maxKeptLightStates: et ? 1 : void 0
              }
            },
            write: (Vt, Ot, qt, Dt, mt, dt) => {
              (0, fO.h)(), bX(tt, (() => {
                tt.rings.worker.writeWorkerRecord(Vt, Ot, qt, Dt, mt, dt) || tt.crash(EV.p, `a meshing record of kind ${Ot} did not fit the worker-in ring`)
              })), et()
            },
            onWorkerLost: tt => {
              (0, PV.reportWorkerLost)(EV.p, tt, bm)
            },
            onLightFault: (tt, et) => {
              (0, PV.reportLightFault)(tt, et, bm)
            },
            onStartTimeout: tt => {
              (0, PV.reportWorkerStartTimeout)(EV.p, tt, bm)
            },
            onMemoryStats: (tt, et) => {
              var Vt;
              null === (Vt = Zm) || void 0 === Vt || Vt.noteMeshWorker(tt, et)
            },
            onMemoryGone: tt => {
              var et;
              null === (et = Zm) || void 0 === et || et.meshWorkerGone(tt)
            },
            fail: (et, Vt) => {
              const Ot = () => {
                tt.crash(EV.p, void 0 === Vt ? et : new Error(et, {
                  cause: Vt
                }))
              };
              void 0 !== Vt ? WX({
                site: EV.p,
                error: Vt
              }, Ot) : Ot()
            }
          })
        }(St, Yt), gj();
        const Bt = (0, Cq.p)(Se.clientSideServerUrls.staticUrl, {
            onTableFailed: tt => {
              WX({
                site: PV.MODEL_FEED_SITE,
                error: tt
              }, (() => {}), {
                stillWanted: it
              })
            },
            packUrl: tt => {
              var et, Vt;
              return null !== (et = null === (Vt = LH()) || void 0 === Vt ? void 0 : Vt.modelUrl(tt)) && void 0 !== et ? et : null
            }
          }),
          pt = function(tt, et, Vt) {
            const Ot = Vt => {
              var Ot, qt;
              return null !== (Ot = null === (qt = et()) || void 0 === qt ? void 0 : qt.drawnUrl(Vt)) && void 0 !== Ot ? Ot : tt.url(Vt)
            };
            return (0, bq.h)((0, Qq.l)(Ot), Vt)
          }(Bt, (() => rm), LH),
          xt = new Qq.g(pt, (tt => {
            console.warn(`${oD} image ${tt.key.kind}:${tt.key.index}:${tt.key.word} failed`, tt.error)
          }));
        Bm = xt, pm = new Nq(St, pt, ((tt, et) => {
          void 0 === et ? console.warn(`${oD} ${tt}`) : kH(tt, et)
        }));
        const Tt = new Mq.i(Bt, function(tt, et) {
          let Ot = !1,
            qt = null,
            Dt = null;
          const mt = {
              onUnavailable: (Vt, Ot) => {
                Dt ??= WX({
                  site: PV.MODEL_POOL_SITE,
                  error: Vt,
                  urls: Ot
                }, (() => {
                  (0, PV.reportModelPoolFailure)(Vt, tt)
                }), {
                  stillWanted: et
                })
              },
              onDecoderFailed: (Vt, Ot) => {
                const qt = () => {
                  (0, PV.reportDracoDecoderFailure)(Vt, tt)
                };
                void 0 !== Ot ? WX({
                  site: PV.MODEL_POOL_SITE,
                  error: Vt,
                  urls: Ot
                }, qt, {
                  stillWanted: et
                }) : qt()
              },
              onWorkerLost: et => {
                (0, PV.reportWorkerLost)(PV.MODEL_POOL_SITE, et, tt)
              },
              onModuleRetry: (et, Vt) => {
                (0, PV.reportModelsModuleRetry)(et, Vt, tt)
              }
            },
            dt = Vt.e(43).then((() => Vt(51332))).then((tt => {
              let {
                pageModelPool: et
              } = tt;
              if (Ot) return null;
              const Vt = et(mt);
              return qt = Vt.unlisten, Um = Vt.pool, gj(), Vt.pool
            }), (tt => (Ot || mt.onUnavailable(tt, void 0), null)));
          return Am = () => {
            var tt;
            Ot = !0, null === (tt = qt) || void 0 === tt || tt(), Um = null
          }, (tt, et) => dt.then((Vt => {
            var Ot;
            return null !== (Ot = null === Vt || void 0 === Vt ? void 0 : Vt.build(tt, et)) && void 0 !== Ot ? Ot : (0, uq.s)(tt, "the model workers did not load")
          })).then((tt => null !== Dt && (0, uq.k)(tt) ? Dt.then((() => tt)) : tt))
        }(Wt, it), (tt => {
          tt.startup ? (QX(), WX({
            site: PV.MODEL_FEED_SITE,
            error: tt.error,
            urls: "" === tt.url ? void 0 : [tt.url]
          }, (() => {
            (0, PV.reportModelFailure)(tt, Wt)
          }))) : (0, PV.reportModelFailure)(tt, Wt)
        }), {
          onWritten: (tt, et) => {
            xt.glbWritten(tt, et)
          },
          onTaken: (tt, et) => {
            xt.glbTaken(tt, et)
          },
          onPackFileFailed: (tt, et) => {
            console.warn(`${oD} the texture pack's model file ${tt} failed: the shipped one loads`, et)
          }
        });
        rm = Tt;
        const gt = new fq.c(St);
        am = gt, gt.swap((tt => {
          const et = () => {
            (0, PV.reportTerrainTextureFailure)(tt, Wt)
          };
          if (Xj) return void et();
          const Vt = () => !Xj,
            Ot = null === tt.url ? void 0 : [tt.url];
          WX({
            site: EV.C,
            error: tt.error,
            urls: Ot
          }, et, {
            stillWanted: Vt
          })
        })).then((tt => {
          null !== tt && (tt || St.isStopped || console.warn(`${oD} the core refused the terrain textures: terrain draws untextured`), td(St))
        }));
        const st = new xe(St, ((tt, et) => {
          console.warn(`${oD} ${tt}`, ...void 0 === et ? [] : [et])
        }));
        st.feed(), null !== lt && function(tt, et, Ot, qt, Dt, mt) {
          let dt = null,
            Ht = null,
            Xt = !1;
          const Qt = {
            textures: null,
            stop: () => {
              var tt, et;
              Xt = !0, null === (tt = Ht) || void 0 === tt || tt(), null === (et = dt) || void 0 === et || et(), Jq.b.setSettled(null), null !== Jm && Lj.clear(Jm)
            }
          };
          Nm = Qt, Ht = GH().follow((Ht => {
            null !== Ht && Promise.all([Vt.e(204), Vt.e(46)]).then((() => Vt(51300))).then((Vt => {
              let {
                PackTextures: lt
              } = Vt;
              if (Xt || tt.isStopped) return;
              const Et = new lt({
                feed: Ht,
                terrain: et,
                backend: Ot,
                stopped: () => tt.isStopped,
                landed: () => {
                  td(tt)
                },
                packSwapped: () => {
                  (0, bq.d)(qt), mt.feed((() => async function(tt) {
                    const et = null === tt ? null : await tt.averageColours;
                    return null === et ? Te() : pe(et)
                  }(Et.assets))), (0, aq.m)(Et.files()), Dt.refresh().then((tt => {
                    null !== tt && console.info(`${oD} texture pack models: ${tt.resent} of ${tt.delivered} files written again, ${tt.refetched} refetched`)
                  }))
                },
                settled: (tt, et, Vt) => {
                  var Ot;
                  (Jq.b.setSettled({
                    state: tt,
                    files: et
                  }), function(tt, et, Vt) {
                    const Ot = null === tt.gameSource && (0, ZV.f)(tt.pack);
                    if (null === et) return;
                    const qt = (0, IV.g)(et.error),
                      Dt = Ot ? "settings" : et.source;
                    jt.j.sw(IV.c, {
                      failure: qt,
                      source: Dt,
                      pack: LV(tt)
                    }), (0, PV.reportTexturePackKeptOut)(Dt, qt, et.error, Vt)
                  }(tt, Vt, bm), null === Vt) && function(tt) {
                    const et = Jm;
                    null !== et && Lj.apply(et, tt).then((et => {
                      et && tt && console.info(`${oD} the texture pack's animations are in (${Object.keys(tt).length} files)`)
                    }))
                  }(null === (Ot = tt.pack) || void 0 === Ot ? void 0 : Ot.animations)
                },
                settling: () => {
                  Jq.b.setSettled(null)
                },
                warn: kH,
                maxTextureSize: () => Promise.resolve((0, QV.fb)(document.createElement("canvas")))
              });
              Qt.textures = Et, dt = Et.start()
            }), (tt => {
              console.warn(`${oD} the texture pack's terrain didn't load: the built atlas stays`, tt)
            }))
          }))
        }(St, gt, lt, xt, Tt, st);
        const Ve = () => {
            St.setTextureLayers("")
          },
          Oe = tt => {
            (We ??= Vt.e(54).then((() => Vt(51334))).then((tt => {
              let {
                TEXTURE_NAMES: et
              } = tt;
              return et
            }), (tt => {
              throw We = null, tt
            })), We).then((tt => {
              St.setTextureLayers(tt) || St.isStopped || (console.warn(`${oD} the core refused the texture names: textured Boxes draw textureNotFound`), Ve())
            }), (et => {
              if (St.isStopped) return;
              const [Vt, ...Ot] = tt;
              void 0 === Vt ? WX({
                site: PV.TEXTURE_NAMES_SITE,
                error: et
              }, (() => {
                console.warn(`${oD} the texture names didn't load, so textured Boxes draw textureNotFound`, et), Ve()
              }), {
                stillWanted: it
              }) : setTimeout((() => {
                Oe(Ot)
              }), Vt)
            }))
          };
        if (Oe(Dm), null !== lt && !await async function(tt, et, Vt, Ot, Dt, mt) {
            var dt;
            const jt = (0, QV.P)(Vt);
            if (null === jt) return tt.crash(UD, new Error(`this ${Ot} build has no openRenderer`)), !1;
            let Ht;
            gd = jt;
            try {
              var Xt, Qt, lt, Et;
              const qt = null !== (Xt = null === (Qt = Em) || void 0 === Qt ? void 0 : Qt.pagePreviews()) && void 0 !== Xt ? Xt : null,
                dt = null !== (lt = null === (Et = Em) || void 0 === Et ? void 0 : Et.previewModule(Vt)) && void 0 !== lt ? lt : null;
              if (null === qt || null === dt) {
                null === qt || void 0 === qt || qt.endSession(!1), Ht = (0, oe.g)().sampleCount, await (0, QV.e)(et, jt, mt, PH, Ht, await Dt);
                const tt = (0, QV.h)(Vt);
                null === tt && console.warn(`${oD} this ${Ot} build has no image registry: sky and model images won't show`), (0, Eq.f)(tt)
              } else {
                (0, Rq.e)() && await (0, te.l)();
                const Vt = (0, Rq.J)();
                if (null !== Vt) {
                  const et = (0, lV.l)(jt);
                  return tt.crash(PV.RENDER_RELOAD_SITE, new Error(`${Vt}${void 0===et?"":` (${et.message})`}`)), !1
                }
                Ht = await qt.bindSession(dt, et, (async tt => (0, QV.t)(jt, UD, mt, tt, PH, await Dt)))
              }
            } catch (qt) {
              return tt.crash(UD, qt), !1
            }(function(tt, et) {
              const Vt = tt,
                {
                  requestCapture: Ot,
                  takeCapture: qt
                } = Vt;
              if ("function" !== typeof Ot || "function" !== typeof qt) return;
              const Dt = {
                request() {
                  Ot.call(Vt, et)
                },
                take() {
                  var tt;
                  return null !== (tt = qt.call(Vt)) && void 0 !== tt ? tt : null
                }
              };
              window[zq] = Dt
            })(et, Ht), qj = Ht, xd = !0;
            const ft = performance.now();
            return Td.boundAtMs = null !== (dt = (0, Rq.L)()) && void 0 !== dt ? dt : ft, Td.indirectHangs = (0, Rq.D)(), Td.restoresSkipped = (0, Rq.N)(), console.info(`${oD} ${Ot} renderer bound at ${Math.round(ft)} ms`), !tt.isStopped
          }(St, vt, ht, lt, ft, yt)) return null;
        if (null !== lt) {
          var qe, De, me;
          (0, Me.D)(lt);
          const tt = () => !St.isStopped && mX();
          Vt.e(196).then((() => Vt(34255))).then((et => {
            let {
              devTools: Vt
            } = et;
            St.isStopped || Vt.setHost(function(tt) {
              return {
                tools: cq,
                async downloadScene(et, Vt) {
                  let {
                    width: Ot,
                    height: qt,
                    colouring: Dt
                  } = Vt;
                  "screenshot" === et && null === Dt ? await (0, vq.e)(tt, Ot, qt) : console.warn("The Rust client's developer tools take uncoloured screenshots only")
                },
                setAmbientLightIntensity: () => (console.warn("The Rust client's renderer has no ambient light setting"), Promise.resolve()),
                capturePhoto: (et, Vt, Ot) => (0, vq.d)(tt, et, Vt, Ot)
              }
            }(function(tt, et) {
              return {
                canvas: tt,
                maxTextureSize: Wq,
                drawing: et,
                resize: (tt, et, Vt) => {
                  (0, pV.w)(ge.Fb.Resize, 0, tt / Vt, et / Vt, (0, pV.i)(Vt))
                },
                restoreSize: () => {
                  const et = (0, oe.p)(tt);
                  null !== et && (0, pV.w)(ge.Fb.Resize, 0, et.cssWidth, et.cssHeight, (0, pV.i)(et.renderScale))
                },
                onFrameDrawn: tt => (Sq.add(tt), () => {
                  Sq.delete(tt)
                })
              }
            }(yt, tt)))
          }), (tt => {
            console.warn(`${oD} the developer tools didn't load: no captures this session`, tt)
          }));
          const et = "webgpu" === lt && null !== (qe = null === Qt || void 0 === Qt || null === (De = Qt.adapter) || void 0 === De ? void 0 : De.vendor) && void 0 !== qe ? qe : null;
          Dj = {
            backend: lt,
            canvas: yt,
            fallbackReason: null !== (me = null === Qt || void 0 === Qt ? void 0 : Qt.reason) && void 0 !== me ? me : null,
            adapterVendor: et
          }, iH();
          try {
            (0, fO.q)(lt, yt, et)
          } catch (qt) {
            (0, fO.t)(), console.error(`${oD} the quality steps didn't start`, qt)
          }
        }
        const {
          storagePullBreaks: de,
          splitPassBreaks: je
        } = await ft;
        je && console.warn(`${oD} split_pass_breaks on: Windows Adreno 7xx (N-103) or ?sceneDepth=off`);
        const He = (0, nt.g)(Qt, (0, Le.g)());
        if ((0, Tq.v)("webgpuloss")) {
          var Xe, Qe;
          const tt = {
            backend: lt,
            reason: null !== (Xe = null === Qt || void 0 === Qt ? void 0 : Qt.reason) && void 0 !== Xe ? Xe : null,
            source: null !== (Qe = null === Qt || void 0 === Qt ? void 0 : Qt.source) && void 0 !== Qe ? Qe : null,
            storagePullBreaks: de,
            noWebGpu: He.messageKey
          };
          (0, gq.c)((et => {
            et.noteWasmPick(tt)
          }))
        }
        const le = "webgpu" === lt;
        if (Tm = (0, nt.j)(le ? St : null, le && null !== (dt = null === (Ht = Em) || void 0 === Ht ? void 0 : Ht.pagePreviews().YE) && void 0 !== dt ? dt : null, He, kH), vj) return null;
        if (zt.reserveAtJoin((0, Hq.n)(null !== Zt && void 0 !== Zt ? Zt : WV.d)), St.isStopped) return null;
        const Ee = tt => {
          if (qd = performance.now(), Dd = !1, null !== mj) try {
            mj.animationFrame(tt)
          } catch (qt) {
            pH(qt)
          }
          if (function(tt, et) {
              return et && !vj && !jd && dX() && mX() && tt.framePaces(performance.now())
            }(St, Cj)) {
            if (St.writePendingInput(), (0, It.d)(tt, tX), YH(!1, tt), null !== mj) try {
              mj.framePaced()
            } catch (qt) {
              pH(qt)
            }
            requestAnimationFrame(Ee)
          } else nH(St, Cj, "budget") && ((0, ke.f)(St.lastFrameKind) && mX() && (0, It.d)(tt, tX), YH(Cj && aj, tt), Mj.frame(St.lastFrameKind, Cj && mX(), tt), bj.frame(St.lastFrameKind, Cj && mX()), (0, ke.d)(St.lastFrameKind) && Le.D.drew(), fX(St), zt.afterFrame(), requestAnimationFrame(Ee))
        };
        requestAnimationFrame(Ee);
        return function(tt) {
          if (tt.has("inputLog") && (0, uO.i)((tt => {
              let {
                action: et,
                down: Vt,
                press: Ot
              } = tt;
              console.info(`${hO} input ${et} ${Vt?"down":"up"} press ${Ot} at ${performance.now().toFixed(1)}`)
            })), tt.has("inputDump")) {
            const tt = [];
            WO = tt, Object.assign(window, {
              bloxdInputDump: () => tt.join("\n")
            })
          }
        }(new URLSearchParams(window.location.search)), Gm = function(tt) {
          let et = null;
          const Vt = () => {
              null !== et && (clearInterval(et), et = null)
            },
            Ot = () => {
              document.hidden ? et ??= setInterval((() => {
                hX(tt) || Vt()
              }), qm) : Vt()
            };
          return document.addEventListener("visibilitychange", Ot), Ot(), () => {
            Vt(), document.removeEventListener("visibilitychange", Ot)
          }
        }(St), St
      }(et).then((tt => {
        var et;
        (Ot(bm), Km(null !== tt), null !== tt && (bt = performance.now()), Cm(tt), null === tt) ? null === (et = Em) || void 0 === et || et.pagePreviews().endSession(null === (0, ye.s)()): nm("booted")
      }), (tt => {
        Ot(bm), Km(!1), Cm(null), lX({
          site: AD,
          error: tt,
          header: null
        }, bm)
      }))
    }

    function Zj() {
      const tt = Jm;
      null !== tt && Wj().then((et => {
        let {
          pageBuiltInAnimationPack: Vt
        } = et;
        Vt().provide(tt)
      }), (tt => {
        console.warn(`${oD} the built-in animation pack's chunk did not load: lifeforms stay in their rest pose`, tt)
      }))
    }
    const Lj = new class {
      constructor(tt) {
        this.deps = tt, this.latest = 0, this.Pd = null
      }
      apply(tt, et) {
        return this.load(tt, et, 0)
      }
      async load(tt, et, Vt) {
        var Ot;
        const qt = ++this.latest,
          Dt = this.deps.compiler;
        if (void 0 === et || null === et || "object" !== typeof et || 0 === Object.keys(et).length || null === Dt) return this.drop(tt), !1;
        if ((null === (Ot = this.Pd) || void 0 === Ot ? void 0 : Ot.module) === tt && (0, mV.te)(this.Pd.files, et)) return !1;
        try {
          const [Vt, Ot] = await Promise.all([Dt(), this.deps.builtIns()]);
          if (qt !== this.latest) return !1;
          const mt = await Vt(et, XV, {
            builtIns: Ot
          });
          if (qt !== this.latest) return !1;
          const dt = this.call(tt, mt);
          if (void 0 === dt) throw new HV("the compiled animations didn't read against the built-in pack");
          return this.Pd = {
              module: tt,
              files: et
            },
            function(tt) {
              for (let et = 0; et + 2 < tt.length; et += 3) {
                ("error" === tt[et] ? console.error : console.warn)(`Animation for the texture pack: ${tt[et+1]}: ${tt[et+2]}`)
              }
            }(dt), !0
        } catch (dt) {
          var mt;
          if (qt !== this.latest) return !1;
          this.drop(tt), 0 === Vt && this.deps.warn("the texture pack's animations didn't load: lifeforms play the built-in ones", dt);
          const Ot = (null !== (mt = this.deps.retryAfterMs) && void 0 !== mt ? mt : jV)[Vt];
          return void 0 === Ot || dt instanceof HV || (0, dV.l)(tt) || setTimeout((() => {
            qt === this.latest && this.load(tt, et, Vt + 1)
          }), Ot), !1
        }
      }
      call(tt, et) {
        try {
          return tt.cOt(et)
        } catch (Vt) {
          throw (0, dV.p)(tt, Vt), Vt
        }
      }
      clear(tt) {
        this.latest++, this.drop(tt)
      }
      drop(tt) {
        const et = this.Pd;
        if (this.Pd = null, (null === et || void 0 === et ? void 0 : et.module) === tt && !(0, dV.l)(tt)) try {
          this.call(tt, null)
        } catch {}
      }
    }({
      compiler: VV.e,
      builtIns: async () => {
        const {
          pageBuiltInAnimationPack: tt
        } = await Wj();
        return tt().whenSet()
      },
      warn: kH
    });
    async function Fj(tt, et) {
      let Ot = !1;
      await kj({
        matchmake: async () => {
          const {
            guestJoinTarget: qt,
            guestJoinWithPack: Dt
          } = await Vt.e(277).then((() => Vt(51285)));
          return Ot ? qt(tt, et, oH()) : (Ot = !0, Dt(tt, et, (et => rH(tt, et)), oH))
        },
        onFailure: tt => {
          (0, PV.showJoinFailure)(tt, bm)
        },
        rejoin: tH,
        invalidateTrafficCode: eH
      })
    }
    async function kj(tt) {
      let {
        matchmake: et,
        onFailure: Vt,
        rejoin: qt,
        invalidateTrafficCode: Dt,
        pageReady: mt,
        signal: dt
      } = tt;
      const jt = () => !0 === (null === dt || void 0 === dt ? void 0 : dt.aborted);
      let Ht;
      const Xt = Jq.b.rejoinHold();
      Cd = null;
      const Qt = (0, zV.K)("wasm", aX);
      let lt = !1,
        Et = performance.now();
      try {
        if (!await hm) return {
          kind: "stopped"
        };
        if (jt()) return {
          kind: "nV"
        };
        Sj().catch((() => {}));
        let tt = await et();
        var Ct, ut;
        if (Et = performance.now(), !jt()) NX(null !== (Ct = null === (ut = tt.target.session) || void 0 === ut ? void 0 : ut.gameNameWithVariation) && void 0 !== Ct ? Ct : null);
        const Vt = () => performance.now() - tt.matchedAt <= tt.freshMs,
          Ot = zj(tt.target).catch((() => {}));
        Vt() && !jt() && (Ht = new qq(tt.target, {
          signal: dt
        }));
        const Dt = performance.now();
        if (null === await um) return {
          kind: "stopped"
        };
        var Kt, ht;
        if (function(tt) {
            var et, Vt;
            if (wt.c.markGameEngineConstructed(), Jt) return;
            Jt = !0;
            const Ot = Math.max(tt, null !== (et = Nt) && void 0 !== et ? et : tt);
            (0, yt.h)("ready", Math.max(0, (null !== (Vt = Mt) && void 0 !== Vt ? Vt : Ot) - Ot) / 1e3)
          }(Dt), !jt())
          if (null !== Mt && null !== bt ? ((0, ft.q)("wasm_loaded", Mt), (0, ft.q)("wasm_core_ready", bt)) : console.warn("[bloxd-wasm-client] a join found the core before boot marked its steps"), tt.target.session && (0, DD.d)(tt.target.session.gameNameWithVariation)) null === (Kt = Rm) || void 0 === Kt || Kt.prestart();
        if (await Ot, !Vt() && !jt()) null === (ht = Ht) || void 0 === ht || ht.rematched(), tt = await et(), Et = performance.now();
        if (jt()) return {
          kind: "nV"
        };
        const Xt = await async function(tt) {
          var et, Vt, Ot;
          let {
            signal: qt,
            rejoin: Dt = null,
            early: mt,
            pageReady: dt
          } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (null !== qt && void 0 !== qt && qt.aborted) throw new DOMException("the join was left", "AbortError");
          const jt = (Ht = kd, Xt = performance.now(), null !== Ht && Xt - Ht < iO);
          var Ht, Xt;
          kd = null;
          const Qt = new AbortController,
            lt = null !== (et = null === (Vt = tt.session) || void 0 === Vt ? void 0 : Vt.gameNameWithVariation) && void 0 !== et ? et : null;
          NX(lt), Uj({
            controller: Qt,
            game: lt
          }), Gd = null, null === (Ot = rd) || void 0 === Ot || Ot.abort(), rd = null, Ad = !1, Yd = null, Bd.clear();
          const Et = () => {
            (0, ce.j)(Qt, (0, ce.f)(qt))
          };
          null === qt || void 0 === qt || qt.addEventListener("abort", Et, {
            once: !0
          });
          try {
            var wt, yt, Nt;
            const et = await um;
            if (null === et || et.isStopped || vj) throw new Error("no core is running to join a game with");
            if (tt.session && null !== Tm) {
              const et = await oj(Tm.join(tt.session.gameNameWithVariation), Qt.signal);
              if ((0, Tq.v)("webgpuloss")) {
                const Vt = tt.session.gameNameWithVariation,
                  Ot = Tm.couldntRunInJoinedGame();
                (0, gq.c)((tt => tt.noteWasmJoin(Vt, et, Ot)))
              }
              if (null !== et) throw new nt.c(et)
            }
            const [, , , {
              joinRoom: Vt
            }] = await oj(Promise.all([(0, Pt.k)(et), zj(tt), null === dt || void 0 === dt ? void 0 : dt(), Sj()]), Qt.signal), Ot = tt.session, qt = Ot ? {
              ...qH,
              attachSocket: et => {
                const Vt = QH(et, tt.endpoint);
                var qt;
                null !== Vt && (hd = {
                  conn: Vt,
                  info: Ot
                }, null === (qt = vd) || void 0 === qt || qt(Ot.playerDbId));
                return Vt
              }
            } : qH, Ht = await Vt(qt, tt, {
              signal: Qt.signal,
              early: mt
            }).catch((tt => {
              throw function(tt) {
                if (!(tt instanceof At.c)) return tt;
                if ("roomError" === tt.stage && null !== Yd) return Gj(new At.c(tt.message, tt.stage, tt.code, Yd), tt);
                const et = "closed" === tt.stage && null !== zd ? Bd.get(zd.conn) : void 0;
                return void 0 === et ? tt : Gj(new At.c(tt.message, tt.stage, et.code, null, tt.socketOpened), tt)
              }(tt)
            }));
            if (Jd !== Qt) throw Ht.leave(), new DOMException("the join was left", "AbortError");
            ij(Ht), null === (wt = Pm) || void 0 === wt || wt.newGame();
            const Xt = function(tt) {
              var et, Vt;
              const {
                session: Ot
              } = tt, qt = void 0 === Ot ? tt.joinOptions.lobbyName : Ot.lobbyName;
              return {
                endpoint: tt.endpoint,
                game: null !== (et = null === Ot || void 0 === Ot ? void 0 : Ot.gameNameWithVariation) && void 0 !== et ? et : tt.roomName,
                lobby: String(null !== qt && void 0 !== qt ? qt : null),
                postCookies: null !== (Vt = tt.postCookies) && void 0 !== Vt ? Vt : null
              }
            }(tt);
            bd.set(Ht, Xt), tq(Xt);
            const lt = performance.now(),
              Et = {
                conn: Ht.conn,
                rejoin: Dt,
                game: null !== (yt = null === (Nt = tt.session) || void 0 === Nt ? void 0 : Nt.gameNameWithVariation) && void 0 !== yt ? yt : "",
                joinedAt: lt,
                rejoinedAt: jt ? lt : null,
                overflow: null
              };
            Wd = Et,
              function(tt, et) {
                MH();
                const Vt = {
                  endpoint: et,
                  roomId: tt.seat.room.roomId,
                  heldConn: 0,
                  dropCode: 0,
                  pendingHold: null,
                  resume: new KV({
                    reconnect: (tt, et, Ot) => async function(tt, et, Vt, Ot) {
                      const {
                        roomId: qt,
                        roomToken: Dt
                      } = JH(tt, et), mt = wm;
                      if (null === mt || mt.isStopped || vj) throw new Error("no core is running to resume the game on");
                      const {
                        resumeRoom: dt
                      } = await oj(Sj(), Vt), jt = {
                        ...qH,
                        attachSocket: et => Sd !== tt || 0 === tt.heldConn ? (et.close(), null) : QH(et, tt.endpoint, !0)
                      };
                      return dt(jt, tt.endpoint, qt, Dt, {
                        signal: Vt,
                        onAttached: Ot
                      })
                    }(Vt, tt, et, Ot),
                    releaseSeat: tt => {
                      !async function(tt, et) {
                        const {
                          roomId: Vt,
                          roomToken: Ot
                        } = JH(tt, et);
                        try {
                          const {
                            leaveHeldSeat: et
                          } = await Sj();
                          await et(tt.endpoint, Vt, Ot)
                        } catch (qt) {
                          console.warn(`${oD} the held seat of a game left while it reconnected couldn't be released`, qt)
                        }
                      }(Vt, tt)
                    },
                    isLive: () => Sd === Vt && null !== Wd && !vj,
                    oW: tt => {
                      Fd = tt, aH()
                    },
                    onReconnected: tt => {
                      ! function(tt) {
                        const et = Md;
                        if (null !== et && et !== tt) {
                          const Vt = bd.get(et);
                          void 0 !== Vt && bd.set(tt, Vt), Nj === et && (Nj = tt), et.detach()
                        }
                        ij(tt)
                      }(tt)
                    },
                    onGaveUp: (tt, et) => {
                      ! function(tt, et, Vt) {
                        var Ot, qt;
                        console.warn(`${oD} gave up reconnecting (${Vt.reason}, ${Vt.attempts} attempts)`, Vt.lastError), (0, PV.reportReconnectGaveUp)(Vt, bm);
                        const Dt = null !== (Ot = null === (qt = Wd) || void 0 === qt ? void 0 : qt.rejoin) && void 0 !== Ot ? Ot : null;
                        bH(tt, "gaveUp"), Bj();
                        const mt = {
                          code: tt.dropCode,
                          name: null,
                          reason: tm,
                          canReconnect: !et,
                          automaticallyReconnect: !1,
                          requiresRefresh: !1
                        };
                        OH(mt, et ? null : Dt, !1, {
                          reasonKey: em,
                          canPlayAgain: et
                        })
                      }(Vt, tt, et)
                    }
                  })
                };
                Sd = Vt, null !== cd && cd.conn === tt.conn && Vt.resume.onInitialInfo(cd)
              }(Ht, tt.endpoint), performance.mark(BD), (0, ft.q)("wasm_joined", lt), setTimeout((() => {
                Md === Ht && (0, ft.e)()
              }), 0), Zj(), console.info(`${oD} joined ${tt.roomName} as ${Ht.seat.sessionId} at ${Math.round(performance.now())} ms`);
            const Mt = Gd;
            Gd = null, null !== Mt && Tj(Et, Mt.mask, Mt.frames);
            const bt = Bd.get(Ht.conn);
            return Bd.clear(), void 0 !== bt && (ij(null), VH(Ht.conn, bt.code, bt.reason)), Ht
          } finally {
            var Mt;
            null === qt || void 0 === qt || qt.removeEventListener("abort", Et), Jd === Qt && Aj(Md, null), (null === (Mt = zd) || void 0 === Mt ? void 0 : Mt.join) === Qt && (zd = null)
          }
        }(tt.target, {
          signal: dt,
          rejoin: qt(tt.target),
          early: Ht,
          pageReady: mt
        });
        return lt = !0, {
          kind: "joined",
          game: Xt
        }
      } catch (Wt) {
        if (Wt instanceof DOMException && "AbortError" === Wt.name || jt()) return {
          kind: "nV"
        };
        if (vj) return {
          kind: "stopped"
        };
        if (Ad && (Ad = !1, await Dt().catch((tt => {
            console.warn(`${oD} the cached traffic code could not be dropped`, tt)
          }))), null === await um) return {
          kind: "stopped"
        };
        if (Wt instanceof nt.c) return Vt(Wt, performance.now() - Et), {
          kind: "failed",
          error: Wt,
          reloading: !1
        };
        if (Wt instanceof At.c && Wt.code === Ot.b.wasmClientNotAllowed.code && Jj) return IH("this server refused the wasm client to this account", "refused"), {
          kind: "failed",
          error: Wt,
          reloading: !0
        };
        const tt = Wt instanceof At.c && Wt.code === Ot.b.outdatedVersion.code,
          et = () => null === Md,
          qt = await WX({
            site: PV.JOIN_SITE,
            error: Wt,
            outdated: tt
          }, (() => {
            Vt(Wt, performance.now() - Et)
          }), {
            stillWanted: et
          });
        return {
          kind: "failed",
          error: Wt,
          reloading: qt
        }
      } finally {
        var vt;
        lt || Qt.end(), Jq.b.releaseHold(Xt);
        const tt = null === (vt = Ht) || void 0 === vt ? void 0 : vt.release();
        tt && (0, PV.reportUnusedSeat)(tt, bm)
      }
    }

    function Gj(tt, et) {
      return tt.stack = et.stack, tt
    }

    function zj(tt) {
      return tt.session ? (0, Pt.n)(Mm, tt.session.gameNameWithVariation) : Promise.resolve()
    }

    function oj(tt, et) {
      return (0, ce.n)(et), new Promise(((Vt, Ot) => {
        const qt = () => {
          Ot((0, ce.f)(et))
        };
        et.addEventListener("abort", qt, {
          once: !0
        }), tt.then((tt => {
          et.removeEventListener("abort", qt), Vt(tt)
        }), (tt => {
          et.removeEventListener("abort", qt), Ot(tt)
        }))
      }))
    }

    function rj() {
      Uj(null)
    }

    function Uj(tt) {
      var et, Vt, Ot;
      (function() {
        const tt = Sd;
        null !== tt && bH(tt, "left")
      }(), null === Sm || Sm.left) || (Sm.left = !0, null === (Ot = (0, Pt.g)()) || void 0 === Ot || Ot.socketLeft(), (0, lt.o)({
        websocketUrl: null
      }));
      Jd && (0, ce.j)(Jd, new DOMException("the join was left", "AbortError")), Bj(null !== tt), null === (et = Tm) || void 0 === et || et.leave();
      const qt = Md;
      null !== tt && Jq.b.setGame(tt.game), Aj(null, null !== (Vt = null === tt || void 0 === tt ? void 0 : tt.controller) && void 0 !== Vt ? Vt : null), null === qt || void 0 === qt || qt.leave(), Yj(0), (0, he.f)()
    }

    function Aj(tt, et) {
      Md = tt, Jd = et, null === Md && null === Jd && Jq.b.setGame(void 0)
    }

    function ij(tt) {
      Aj(tt, Jd)
    }

    function Yj(tt) {
      const et = wm;
      return null !== dm && !vj && null !== et && !et.isStopped && (!!dm(At.i, 0, (0, At.C)(tt)) && (Qd = !0, 0 === tt || jd || nH(et, !1, "all"), !0))
    }

    function Bj() {
      var tt, et;
      arguments.length > 0 && void 0 !== arguments[0] && arguments[0] || (0, zV.g)();
      const Vt = null !== (tt = null === (et = Wd) || void 0 === et ? void 0 : et.overflow) && void 0 !== tt ? tt : null;
      Wd = null, null !== Vt && (0, PV.reportEventOverflow)(Vt, bm)
    }

    function pj() {
      null !== Md || null !== Jd ? rj() : lH()
    }

    function xj(tt, et) {
      console.warn(`${oD} the event buffer refused records in ${et} frames (categories ${tt})`), vj || (null !== Wd ? Tj(Wd, tt, et) : null !== Jd && function(tt, et, Vt) {
        var Ot;
        const qt = function(tt, et) {
          return null === tt ? "drop" : tt.activated ? "keep" : 0 !== (et & se.u.NetSession) ? "fail" : "drop"
        }((null === (Ot = zd) || void 0 === Ot ? void 0 : Ot.join) === tt ? zd : null, et);
        "keep" === qt ? Gd = {
          mask: et,
          frames: Vt
        } : "fail" === qt && (0, ce.j)(tt, new Error("the join's net session was lost to an event overflow"))
      }(Jd, tt, et))
    }

    function Tj(tt, et, Vt) {
      const Ot = tt.overflow ??= {
        frames: 0,
        acks: 0,
        mask: 0,
        outcome: null
      };
      Ot.frames += Vt, Ot.acks++, Ot.mask |= et;
      const qt = function(tt, et, Vt) {
        if (0 === (tt & se.u.NetSession)) return "none";
        const Ot = null !== et.rejoinedAt && Vt - et.rejoinedAt < YO;
        return null === et.rejoin || Ot ? "fail" : "rejoin"
      }(et, tt, performance.now());
      "none" !== qt && queueMicrotask((() => {
        if (Wd !== tt) return;
        const et = "rejoin" === qt && performance.now() - od >= Ut.f;
        Ot.outcome = et ? "rejoined" : "failed", OH(function(tt, et) {
          return {
            code: 0,
            name: "eventOverflow",
            reason: "Your game fell behind the server.",
            canReconnect: tt,
            automaticallyReconnect: et,
            requiresRefresh: !1
          }
        }(null !== tt.rejoin, et), tt.rejoin, et), rj(), et && (kd = performance.now())
      }))
    }

    function gj() {
      Jj && function(tt, et) {
        let {
          mesh: Vt,
          worldgen: Ot,
          modelPool: qt
        } = tt;
        "landingPage" === et ? (null === Vt || void 0 === Vt || Vt.stopWorkers(), null === Ot || void 0 === Ot || Ot.stopWorker(), null === qt || void 0 === qt || qt.stopWorkers()) : ((0, ee.f)(et) || "inGame" === et) && (null === Vt || void 0 === Vt || Vt.restartWorkers(), null === qt || void 0 === qt || qt.startWorkers())
      }({
        mesh: Pm,
        worldgen: Rm,
        modelPool: Um
      }, ee.b.get("gameState"))
    }

    function sj(tt) {
      Cj = tt, uj && nj(uj, tt)
    }

    function nj(tt, et) {
      tt.style.visibility = et ? "visible" : "hidden"
    }

    function tH(tt) {
      var et;
      const Vt = tt.roomName,
        Ot = null !== (et = tt.joinOptions.lobbyName) && void 0 !== et ? et : null;
      return () => {
        Fj(Vt, Ot)
      }
    }

    function eH() {
      return Vt.e(277).then((() => Vt(51285))).then((tt => {
        let {
          invalidateGuestTrafficCode: et
        } = tt;
        return et()
      })).catch((tt => {
        console.warn(`${oD} the cached traffic code could not be dropped`, tt)
      }))
    }

    function VH(tt, et, Vt) {
      var qt, Dt;
      let mt = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (vj) return;
      if ((null === (qt = Wd) || void 0 === qt ? void 0 : qt.conn) !== tt) return void(null !== Jd && Bd.set(tt, {
        code: et,
        reason: Vt
      }));
      const {
        rejoin: dt,
        game: jt,
        joinedAt: Ht
      } = Wd;
      Bj(), MH();
      const Xt = (0, Ut.l)(et, (0, pO.f)(tt));
      if (console.info(`${oD} the game's connection closed with code ${et} (${null!==(Dt=Xt.name)&&void 0!==Dt?Dt:"unrecognised"})`), et === Ot.b.gameOrPluginKick.code || mt || (0, PV.reportDisconnect)(Xt, bm, {
          closeReason: Vt,
          sinceJoinedMs: performance.now() - Ht,
          game: jt
        }), Xt.requiresRefresh) {
        const tt = "outdatedVersion" === Xt.name,
          Vt = new Error(`the game's connection closed with code ${et}`),
          Ot = () => null === Wd && null === Jd;
        return void WX({
          site: PV.JOIN_SITE,
          error: Vt,
          outdated: tt
        }, (() => {
          Ot() && OH(Xt, null, !1)
        }), {
          stillWanted: Ot
        })
      }
      const Qt = Xt.canReconnect ? dt : null,
        lt = null !== Qt && Xt.automaticallyReconnect && performance.now() - od >= Ut.f;
      OH(Xt, Qt, lt)
    }

    function OH(tt, et, Vt) {
      var Ot;
      let qt = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
        reasonKey: null,
        canPlayAgain: !1
      };
      if (Kj) return;
      Jq.b.unwantedLeave(Vt && null !== et && 0 === Ud.size), null === (Ot = rd) || void 0 === Ot || Ot.abort();
      const Dt = new AbortController;
      rd = Dt;
      const mt = null === et ? null : () => {
        Dt.signal.aborted || (Dt.abort(), et())
      };
      if (Vt && null !== mt) {
        od = performance.now();
        const tt = setTimeout(mt, Ut.c);
        Dt.signal.addEventListener("abort", (() => {
          clearTimeout(tt)
        }))
      }
      const dt = {
        code: tt.code,
        name: tt.name,
        reason: tt.reason,
        reasonKey: qt.reasonKey,
        reconnect: mt,
        reconnecting: Vt,
        requiresRefresh: tt.requiresRefresh,
        canPlayAgain: qt.canPlayAgain
      };
      if (Ud.size > 0)
        for (const Ht of [...Ud]) try {
          Ht(dt)
        } catch (jt) {
          console.error(`${oD} an unwanted-leave listener threw`, jt)
        } else kO((0, ZO.l)(tt, null !== mt, Vt), Dt.signal).then((et => {
          et && (null !== mt ? mt() : tt.requiresRefresh && (0, te.h)())
        }))
    }
    const qH = {
      attachSocket: tt => QH(tt),
      onConnection: tt => (pd.add(tt), () => {
        pd.delete(tt)
      }),
      sendRaw: (tt, et) => {
        const Vt = Sm;
        return null !== Vt && Vt.conn === tt && XX(Vt, et)
      },
      leaveRoom: Yj,
      closeSocket: tt => {
        var et;
        (null === (et = Sm) || void 0 === et ? void 0 : et.conn) === tt && lH()
      },
      flushNet: EH
    };

    function DH(tt) {
      var et;
      let {
        aux: Vt,
        payload: Ot
      } = tt;
      null === (et = wm) || void 0 === et || et.queueOptions(Vt, Ot)
    }

    function mH(tt, et) {
      DH(function(tt, et) {
        return Lq = tt ? {
          preventMovement: et
        } : null, tt ? Fq(et) : {
          aux: ge.nc.AdEnd,
          payload: Zq
        }
      }(tt, et))
    }

    function dH(tt) {
      var et;
      wd = tt, null === (et = wm) || void 0 === et || et.setUiPrefs(tt)
    }

    function jH(tt, et) {
      Mm.setMaster(tt, et)
    }

    function HH(tt) {
      var et;
      yd = tt, null === (et = wm) || void 0 === et || et.setEnvPrefs(tt)
    }

    function XH(tt) {
      var et;
      Nd = tt, null === (et = wm) || void 0 === et || et.setLookPrefs(tt)
    }

    function QH(tt) {
      var et;
      let Vt = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new URL(tt.url).origin,
        Ot = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      if (tt.readyState === WebSocket.CLOSING || tt.readyState === WebSocket.CLOSED) return console.warn(`${oD} a closing or closed socket can't be attached`), null;
      const qt = wm;
      if (!qt || qt.isStopped) return console.warn(`${oD} no core is running to attach a socket to`), tt.close(), null;
      if (null === (0, Pt.g)()) return console.warn(`${oD} the game has not started to attach a socket to`), tt.close(), null;
      if (ed > ge.v) return console.warn(`${oD} this core has attached all the sockets it can; reload to play on`), tt.close(), null;
      if (Qd && !jd && (nH(qt, !1, "all"), qt.isStopped || vj)) return tt.close(), null;
      lH();
      const Dt = ed++;
      if (!hH(qt, "open", Dt, Ot ? ge.lc.Resume : 0)) return tt.close(), null;
      Ot || Ke.b.reset(), zd = null === Jd ? null : {
        join: Jd,
        conn: Dt,
        activated: !1
      }, tt.binaryType = "arraybuffer";
      const mt = new hV.d((() => {
          ! function(tt, et) {
            if (Sm !== et || tt.isStopped || null === yH(et, sD)) return;
            et.detach(), Sm = null, wH(tt, et, sD, "", !0), et.ws.close()
          }(qt, dt)
        })),
        dt = {
          ws: tt,
          conn: Dt,
          pending: [],
          pendingBytes: 0,
          left: !1,
          resume: Ot,
          token: null,
          detach: () => {
            mt.dispose(), tt.removeEventListener("message", jt), tt.removeEventListener("open", Ht), tt.removeEventListener("close", Xt)
          }
        },
        jt = tt => {
          if (tt.data instanceof ArrayBuffer) {
            var et;
            const Vt = new Uint8Array(tt.data);
            mt.heard(), dt.token = null !== (et = (0, vV.b)(Vt)) && void 0 !== et ? et : dt.token,
              function(tt, et, Vt) {
                bX(tt, (() => {
                  tt.rings.net.writeFrame(et, Vt) || tt.crash(EV.s, `a socket frame of ${Vt.byteLength} bytes did not fit the net-in ring`)
                }));
                const Ot = tt.rings.net.cursor >= gD;
                !KX() && (Ot || tt.netWrittenSinceFrame >= TD) && nH(tt, !1, document.hidden ? "all" : "budget");
                vX(tt)
              }(qt, Dt, Vt)
          }
        },
        Ht = () => {
          Ot || (0, ft.q)("wasm_socket_open", performance.now());
          for (const et of dt.pending.splice(0)) tt.send(et);
          dt.pendingBytes = 0
        },
        Xt = tt => {
          if (Sm === dt && qt.rings.net.cursor > 0 && nH(qt, !1, "all"), Sm === dt) {
            if (dt.detach(), Sm = null, wH(qt, dt, tt.code, tt.reason) || fH(qt, dt)) return;
            hH(qt, "close", Dt), NH(Dt, dt.left), VH(Dt, tt.code, tt.reason)
          }
        };
      return tt.addEventListener("message", jt), tt.addEventListener("open", Ht), tt.addEventListener("close", Xt), Sm = dt, null === (et = (0, Pt.g)()) || void 0 === et || et.socketAttached(Dt), (0, lt.o)({
        websocketUrl: Vt
      }), Dt
    }

    function lH() {
      const tt = Sm;
      if (!tt) return;
      const et = wm,
        Vt = tt.resume;
      Vt && (EH(), Sm !== tt) || (Sm = null, tt.detach(), tt.ws.close(), null !== et && (fH(et, tt) || Vt && wH(et, tt, nD)) || (null !== et && hH(et, "close", tt.conn), NH(tt.conn, tt.left)))
    }

    function EH() {
      const tt = wm;
      null !== tt && !tt.isStopped && !vj && !jd && tt.rings.net.cursor > 0 && nH(tt, !1, "all")
    }

    function fH(tt, et) {
      var Vt;
      if (!et.resume) return !1;
      const Ot = Sd;
      return null !== Ot && null !== et.token && "" !== et.token && (Ot.pendingHold = {
        conn: et.conn,
        token: `${Ot.roomId}:${et.token}`
      }), hH(tt, "close", et.conn), null === (Vt = (0, Pt.g)()) || void 0 === Vt || Vt.socketDetached(et.conn), !0
    }

    function wH(tt, et, Vt) {
      let Ot = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "",
        qt = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
      const Dt = yH(et, Vt);
      if (null === Dt) return !1;
      const {
        Pd: mt,
        token: dt,
        game: jt,
        joinedAt: Ht
      } = Dt;
      if (!hH(tt, "close", et.conn, ge.D.Held)) return !0;
      console.warn(`${oD} the game's connection ${qt?"went silent":`dropped with code ${Vt}`}, holding it`);
      const Xt = {
        closeReason: Ot,
        sinceJoinedMs: performance.now() - Ht,
        game: jt
      };
      return (0, PV.reportDisconnect)((0, Ut.l)(Vt), bm, Xt, qt ? "silent" : void 0), mt.heldConn = et.conn, mt.dropCode = Vt, mt.pendingHold = {
        conn: et.conn,
        token: `${mt.roomId}:${dt}`
      }, jd || nH(tt, !1, "all"), !0
    }

    function yH(tt, et) {
      const Vt = Sd,
        qt = Wd,
        Dt = tt.token;
      return null === Vt || null === qt || vj || tt.left || qt.conn !== tt.conn || null === Dt || "" === Dt ? null : (0, Ot.h)(et) && Vt.resume.canHoldSeat() ? {
        Pd: Vt,
        token: Dt,
        game: qt.game,
        joinedAt: qt.joinedAt
      } : null
    }

    function NH(tt, et) {
      var Vt;
      null === (Vt = (0, Pt.g)()) || void 0 === Vt || Vt.closeGame(tt), (0, Pq.e)().close(tt), et || (0, lt.o)({
        websocketUrl: null
      })
    }

    function aH() {
      const tt = Fd;
      if (null === tt) return;
      const et = (0, Pt.g)();
      vj || null === et || et.oW(tt) ? Fd = null : performance.now() - ld.pause >= Om && (ld.pause = performance.now(), console.warn(`${oD} the cmd ring had no room for SetPaused(${tt}): written before the next frame`))
    }

    function MH() {
      const tt = Sd;
      Sd = null, null === tt || void 0 === tt || tt.resume.dispose()
    }

    function bH(tt, et) {
      var Vt, Ot;
      const {
        heldConn: qt
      } = tt, Dt = tt.resume.resumingConn;
      tt.heldConn = 0, tt.pendingHold = null, Sd === tt && (Sd = null), "left" === et ? tt.resume.leave() : tt.resume.dispose(), 0 === Ld || (null === (Vt = Sm) || void 0 === Vt ? void 0 : Vt.conn) !== Ld || "left" === et && (null === (Ot = Md) || void 0 === Ot ? void 0 : Ot.conn) === Ld || KH(Ld), "gaveUp" === et && 0 !== Dt && KH(Dt), 0 !== qt && "refused" !== et && (console.info(`${oD} the game held through its drop ${"left"===et?"was left":"is given up"}`), null === wm || wm.isStopped || hH(wm, "close", qt), NH(qt, !1))
    }

    function JH(tt, et) {
      const Vt = et.indexOf(":");
      return {
        roomId: Vt < 0 ? tt.roomId : et.slice(0, Vt),
        roomToken: et.slice(Vt + 1)
      }
    }

    function CH(tt) {
      (0, fV.logClientMeasurement)("join_preload", tt, {
        client: "wasm"
      })
    }

    function uH(tt) {
      var et;
      cd = tt;
      const Vt = tt.replayOffer && Zd !== tt.conn;
      Pd = Vt ? tt.conn : 0, Rd = Vt || Id.has(tt.conn) ? 0 : tt.conn, ut.admitted(), tt.conn === Ld && (Ld = 0);
      const Ot = Sd;
      null !== Ot && (null === (et = Wd) || void 0 === et ? void 0 : et.conn) === tt.conn && Ot.resume.onInitialInfo(tt)
    }

    function KH(tt) {
      var et;
      const Vt = Sm;
      (null === Vt || void 0 === Vt ? void 0 : Vt.conn) === tt && (Vt.left = !0, null === (et = (0, Pt.g)()) || void 0 === et || et.socketLeft(), (0, lt.o)({
        websocketUrl: null
      }), Yj(tt) ? setTimeout((() => {
        Sm === Vt && lH()
      }), At.e) : lH())
    }

    function hH(tt, et, Vt) {
      let Ot = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        qt = !1;
      return bX(tt, (() => {
        const {
          net: Dt
        } = tt.rings;
        qt = "open" === et ? Dt.writeOpen(Vt, Ot) : Dt.writeClose(Vt, Ot), qt || tt.crash(EV.s, `a socket ${et} did not fit the net-in ring`)
      })), qt
    }

    function vH(tt, et, Vt) {
      let Ot = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      if (RH()) return (0, PV.reportUnsupportedFallback)(tt, et, Vt, Ot), void IH(`the wasm client can't run here (${Vt}; ${et})`, et);
      (0, PV.showUnsupported)(tt, "unsupported", Vt, Ot)
    }
    const WH = 1500;

    function SH(tt, et) {
      const Vt = 1 === tt.missing.length && tt.missing[0] === QV.c,
        Ot = et ? "blockedAfterLoss" : Vt ? "noContext" : "unsupported";
      return {
        decline: Ot,
        detail: `No WebGPU or WebGL2, and WebGL1 lacks ${tt.missing.join(", ")}`,
        details: {
          missing: tt.missing.join(",")
        },
        retries: "unsupported" !== Ot && RH()
      }
    }

    function cH(tt) {
      console.warn(`${oD} ${tt}: reloading once more onto the wasm client`), (0, Rq.q)(), (0, PV.flushCrashReports)(te.c).then(te.h, te.h)
    }

    function RH() {
      return Jj && "wasm" !== (0, Ce.i)(window.location.search)
    }

    function IH(tt, et) {
      console.warn(`${oD} ${tt}: reloading on the JS client`), null !== et && (0, Ce.G)(et), (0, Ce.E)(null === et ? "reloadOntoJs" : "decline");
      const Vt = () => {
        (0, te.f)(Ce.N)
      };
      (0, PV.flushCrashReports)(te.c).then(Vt, Vt)
    }

    function PH(tt, et, Vt, Ot) {
      return sd(tt, et, Vt, Ot)
    }

    function ZH() {
      null === ej || null === wm || wm.isStopped || vj || null !== im || null === dm || (im = ej(dm, kH, GH().follow))
    }

    function LH() {
      var tt, et, Vt;
      return null !== (tt = null === (et = Nm) || void 0 === et || null === (Vt = et.textures) || void 0 === Vt ? void 0 : Vt.files()) && void 0 !== tt ? tt : null
    }

    function FH(tt) {
      GH().follow((et => {
        null !== et && Promise.all([Promise.all([Vt.e(204), Vt.e(46)]).then((() => Vt(51310))), (0, Rq.Q)()]).then((tt => {
          let [{
            followPagePackFiles: Vt
          }, Ot] = tt;
          const qt = null === Ot || (0, QV.l)(Ot) ? "webgl" : Ot.backend;
          Vt(et, bq.c, qt, (tt => {
            bq.c.setPageFiles(tt)
          }), kH)
        }), (et => {
          console.warn(`${oD} the texture pack's files didn't load: the previews draw the shipped ones until the next opens`, et), tt()
        }))
      }))
    }

    function kH(tt, et) {
      console.warn(`${oD} ${tt}`, et)
    }

    function GH() {
      return ym ??= new rq({
        load: tt => Promise.all([Vt.e(204), Vt.e(55)]).then((() => Vt(51319))).then((et => {
          let {
            startPageTexturePackFeed: Vt
          } = et;
          return Vt(kH, tt)
        })),
        store: AV.c,
        iE: tt => {
          um.then((() => {
            (0, PV.reportTexturePackFeedLoadFailure)(tt, bm)
          }))
        }
      }), ym
    }
    const zH = tt => GH().follow(tt);

    function oH() {
      return GH().loaded()
    }
    const rH = function(tt, et, Vt) {
        let Ot = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => performance.now(),
          qt = 0;
        return async function(Dt, mt) {
          let dt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => !0;
          const jt = ++qt,
            Ht = Ot() + et,
            Xt = await
          function(tt, et) {
            let Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {};
            return new Promise((Ot => {
              const qt = setTimeout((() => {
                Ot(null), tt.then((tt => {
                  null !== tt && (tt.joinedWithout(), Vt(tt))
                }))
              }), et);
              tt.then((tt => {
                clearTimeout(qt), Ot(tt)
              }))
            }))
          }(tt(Dt), et, (tt => {
            jt === qt && dt() && mt(tt, Ot() + et).catch((tt => {
              Vt("the texture pack step after the join failed", tt)
            }))
          }));
          return null === Xt ? null : mt(Xt, Ht)
        }
      }((tt => (0, le.k)(tt) ? GH().request() : GH().forJoin()), oq.e, kH),
      UH = function(tt, et) {
        let Vt = !1;
        return {
          setGamePackConfirm: tt => {
            Vt = null !== tt, et(tt)
          },
          packStep: (et, Ot, qt) => tt(et, Ot, (() => Vt && qt()))
        }
      }(rH, (tt => {
        GH().setGamePackConfirm(tt)
      }));

    function AH(tt) {
      UH.setGamePackConfirm(tt)
    }

    function iH() {
      if (vj || null !== mj || null === Vj || null === Dj) return;
      const {
        backend: tt,
        canvas: et,
        fallbackReason: Vt,
        adapterVendor: Ot
      } = Dj, qt = Vj;
      Vj = null;
      try {
        mj = qt({
          backend: tt,
          canvas: et,
          fallbackReason: Vt,
          adapterVendor: Ot,
          joinedGame: () => vj ? null : Md,
          canSend: () => !vj && null !== Md && Md.conn === Rd,
          inGame: BH,
          shaderPackReach: () => {
            var tt, et;
            return null !== (tt = null === (et = Tm) || void 0 === et ? void 0 : et.reachInJoinedGame()) && void 0 !== tt ? tt : null
          },
          Rw: () => Ym,
          msaa: () => qj > 1,
          writeCmd: (tt, et, Vt) => null !== dm && dm(tt, et, Vt),
          takeFailedMeshJobs: () => {
            var tt, et;
            return null !== (tt = null === (et = Pm) || void 0 === et ? void 0 : et.takeFailedMeshJobs()) && void 0 !== tt ? tt : 0
          },
          readLoadCounts: tt => {
            var et, Vt;
            return null !== (et = null === (Vt = wm) || void 0 === Vt ? void 0 : Vt.readLoadCounts(tt)) && void 0 !== et && et
          },
          mainStalled: (tt, et, Vt) => {
            (0, PV.reportMainStall)(tt, et, Vt, bm)
          }
        })
      } catch (Dt) {
        console.error(`${oD} the frame telemetry didn't start`, Dt)
      }
    }

    function YH(tt, et) {
      try {
        var Vt, Ot, qt;
        const Dt = xd && null !== (Vt = null === (Ot = wm) || void 0 === Ot || null === (qt = Ot.lastHeader) || void 0 === qt ? void 0 : qt.renderPending) && void 0 !== Vt ? Vt : 0;
        (0, fO.g)(et, tt, BH() && !(null !== Lq), Dt)
      } catch (Dt) {
        (0, fO.t)(), console.error(`${oD} the quality steps stopped`, Dt)
      }
    }

    function BH() {
      return null !== Md && Nj === Md && !vj
    }

    function pH(tt) {
      const et = mj;
      mj = null;
      try {
        null === et || void 0 === et || et.stop()
      } catch {}
      console.error(`${oD} the frame telemetry threw: it stops`, tt)
    }

    function xH(tt) {
      var et, Vt, Ot, qt;
      if ((0, Pq.e)().fire(tt), "message" === tt.type) {
        if (Hd++, tt.kX === ge.Yc.ERROR && null !== Jd) {
          var Dt;
          const {
            text: et,
            dropsCache: Vt
          } = (0, Ut.q)((new TextDecoder).decode(tt.payload));
          Ad ||= Vt, (null === (Dt = zd) || void 0 === Dt ? void 0 : Dt.conn) === tt.conn && (Yd = et)
        } else if (tt.kX === se.gc.ResumeComplete) {
          var mt;
          Zd = tt.conn, tt.conn === Pd && (Pd = 0, Rd = Id.has(tt.conn) ? 0 : tt.conn), null === (mt = Sd) || void 0 === mt || mt.resume.onResumeComplete(tt.conn)
        }
        return
      }
      tt.phase === ge.H.Left ? Xd = tt.conn : tt.phase === ge.H.Activated && (null === (et = zd) || void 0 === et ? void 0 : et.conn) === tt.conn ? zd.activated = !0 : tt.phase === ge.H.Resumed ? function(tt) {
        var et, Vt;
        Ld = tt;
        const Ot = Sd;
        if (null === Ot || 0 === Ot.heldConn || (null === (et = Sm) || void 0 === et ? void 0 : et.conn) !== tt || !Sm.resume || null === Wd) return;
        console.info(`${oD} the game resumed on conn ${tt}, waiting for its InitialInfo`);
        const qt = Ot.heldConn;
        Ot.heldConn = 0, Sm.resume = !1, Wd.conn = tt, (null === (Vt = hd) || void 0 === Vt ? void 0 : Vt.conn) === qt && (hd = {
          conn: tt,
          info: hd.info
        }), Ke.b.apply({
          shopInfo: null,
          _shopVersion: Ee.e
        })
      }(tt.conn) : tt.phase === ge.H.Held ? function(tt) {
        var et;
        const Vt = Sd,
          Ot = null !== (et = null === Vt || void 0 === Vt ? void 0 : Vt.pendingHold) && void 0 !== et ? et : null;
        if (null !== Vt && null !== Ot && Ot.conn === tt) return Vt.pendingHold = null, Vt.heldConn = tt, Ld = 0, console.warn(`${oD} the core holds the game, reconnecting`), void Vt.resume.onDropped(Ot.token);
        if (tt === Ld) {
          Ld = 0;
          const et = wm;
          null === et || et.isStopped || (console.info(`${oD} the core held again a resumed game the shell ended before its InitialInfo: closing it again`), hH(et, "close", tt))
        }
      }(tt.conn) : tt.phase === ge.H.Closed && (null === (Vt = Sd) || void 0 === Vt || null === (Ot = Vt.pendingHold) || void 0 === Ot ? void 0 : Ot.conn) === tt.conn && (Sd.heldConn === tt.conn ? function(tt) {
        const et = tt.heldConn,
          Vt = tt.dropCode;
        bH(tt, "refused"), console.info(`${oD} the core didn't hold the game through its drop: it hadn't started`), queueMicrotask((() => {
          NH(et, !1), VH(et, Vt, "", !0)
        }))
      }(Sd) : Sd.pendingHold = null), tt.phase !== ge.H.Held && tt.phase !== ge.H.Left && tt.phase !== ge.H.Closed || (Id.add(tt.conn), tt.conn === Rd && (Rd = 0));
      const dt = Object.keys(ge.H).find((et => ge.H[et] === tt.phase)),
        jt = 0 === tt.code ? "" : ` (code ${tt.code})`;
      console.info(`${oD} conn ${tt.conn}: ${null!==dt&&void 0!==dt?dt:tt.phase}${jt}, ${Hd} raw messages so far`), (null === (qt = Md) || void 0 === qt ? void 0 : qt.conn) !== tt.conn || tt.phase !== ge.H.Left && tt.phase !== ge.H.Closed || ij(null), Kd !== tt.conn || tt.phase !== ge.H.Left && tt.phase !== ge.H.Closed || (Kd = null, null === Md && null === Jd && Jq.b.setGame(void 0));
      for (const Xt of [...pd]) try {
        Xt(tt.conn, tt.phase, tt.code)
      } catch (Ht) {
        (0, ne.n)(Ht, `${oD} a connection listener threw`)
      }
    }

    function TH() {
      (0, Rq.q)(), null === Md && null === Jd || (0, iV.d)(), queueMicrotask((() => {
        try {
          QX()
        } catch (tt) {
          console.warn(`${oD} stopping before the reload threw`, tt)
        }(0, PV.flushCrashReports)(te.c).then(te.h, te.h)
      }))
    }

    function gH() {
      const tt = wm;
      null === tt || tt.isStopped || null === Sm || jd || !tt.hasPendingCommands() || nH(tt, !1, "budget")
    }

    function sH(tt) {
      var et;
      const Vt = Md;
      tt.persisted || null === Vt || (null === (et = Sm) || void 0 === et ? void 0 : et.conn) !== Vt.conn || Sm.left || Vt.leave()
    }

    function nH(tt, et, Ot) {
      let qt = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const Dt = jd;
      jd = !0;
      try {
        const Dt = tt.rings.net.cursor >= gD;
        Dt && "all" !== Ot && !document.hidden && EX("backlog", `a shown tab's net-in is ${tt.rings.net.cursor} bytes behind: one frame reads it all`);
        return function(tt, et, Ot, qt) {
          var Dt, mt, dt, jt;
          if (vj) return !1;
          if (bX(tt, eX), vj || tt.isStopped) return !1;
          jX() && nm("modelsIn");
          aH(), Vd = performance.now(), Xd = null, Qd = !1, (0, It.E)(), null === (Dt = zm) || void 0 === Dt || Dt.beforeFrame(), SO(Vd, tt), (0, It.z)(Vd, VX), dd = !0;
          const Ht = et && dX();
          let Xt;
          try {
            Xt = tt.frame(Vd, Ht, Ot)
          } finally {
            dd = !1
          }
          if (!Xt) return !1;
          Oj.observe(null !== (mt = null === (dt = tt.lastHeader) || void 0 === dt ? void 0 : dt.chunksCancelled) && void 0 !== mt ? mt : 0);
          const Qt = tt.lastFrameKind,
            lt = (0, ke.d)(Qt);
          (function(tt) {
            null !== OD && OD.afterFrame(performance.now(), tt)
          })(lt), null === (jt = dj) || void 0 === jt || jt.frame(tt, Vd, Qt), et && (aj = lt);
          lt && (0, Ze.b)(Vd);
          if (null !== mj) try {
            mj.frameRan(tt, Vd, performance.now(), Qt)
          } catch (wt) {
            pH(wt)
          }
          "drawn" === Qt && mX() && function() {
            for (const tt of [...Sq]) tt()
          }();
          tt.forEachNetOut(HX);
          const Et = Sm;
          null !== Xd && (null === Et || void 0 === Et ? void 0 : Et.conn) === Xd && XX(Et, At.l);
          DX(tt),
            function(tt) {
              const et = 0 !== (tt.headerWord(se.J.LoadSteps) & se.W.JoinPreload);
              et !== ud && (ud = et, (0, PV.setCrashAdPreload)(et), (0, zV.D)())
            }(tt), et && function(tt) {
              var et, Ot, qt;
              if (null === Md || !dX()) return;
              const Dt = tt.headerWord(se.J.LoadSteps);
              null === yj || Nj === Md && !yj.frame(Vd, 0 !== (Dt & se.X.TerrainDrawn)) || (yj = null);
              if (0 === (Dt & se.W.PlayerBound)) return;
              const mt = tt.lastHeader,
                dt = !xd || 0 === (null === mt || void 0 === mt ? void 0 : mt.renderPending);
              !Qj && dt && (Qj = !0, performance.mark(xD));
              if (Nj === Md) return;
              const jt = null !== (et = null === mt || void 0 === mt ? void 0 : mt.firstView) && void 0 !== et ? et : ge.hb.NotYet;
              if (xd && jt === ge.hb.NotYet) return;
              if (Xj && (!0 !== (null === (Ot = (0, Pt.g)()) || void 0 === Ot ? void 0 : Ot.isSessionLive) || !dt)) return;
              Nj = Md;
              const Ht = Md;
              if (setTimeout((() => {
                  Md === Ht && (0, ft.g)()
                }), 0), null === (qt = Tm) || void 0 === qt || qt.playable(), function() {
                  clearTimeout(Wm), Wm = setTimeout((() => {
                    BH() && uX((tt => {
                      let {
                        prefetchWorldgenWorker: et
                      } = tt;
                      et()
                    }))
                  }), mm)
                }(), Xj) return;
              Xj = !0, performance.mark(pD), (0, Tq.v)("render") && Promise.all([Vt.e(78), Vt.e(49)]).then((() => Vt(4833))).then((tt => {
                let {
                  renderDebugPlayable: et
                } = tt;
                et()
              }), (tt => {
                console.warn("The render debug topic didn't load", tt)
              }));
              const Xt = Math.round(performance.now()),
                Qt = tt.readViewQueuedPrograms();
              null !== Qt && (0, ft.q)("wasm_view_links", Xt, (0, we.xb)(Qt));
              const lt = null === wj || null === Ej ? 0 : Math.max(0, Ej - wj),
                Et = null === wj ? 0 : Math.max(0, Xt - wj),
                wt = xd ? tt.readFirstViewWait(lt, Et) : null;
              null !== wt && (0, ft.m)(wt);
              if (xd && jt !== ge.hb.Drawn) {
                const et = jt === ge.hb.HeldBackstop ? "held_draws" : "long",
                  {
                    cause: Vt
                  } = OX(tt);
                if (console.warn(`${oD} playable at ${Xt} ms on the first view's ${et} backstop, ${Vt}: it wasn't drawn whole in time`), (0, ft.q)("wasm_view_backstop", Xt, `${et}:${Vt}`), "long" === et) {
                  var yt, Nt;
                  const et = null !== (yt = null === (Nt = Wd) || void 0 === Nt ? void 0 : Nt.game) && void 0 !== yt ? yt : "";
                  yj = new YV.e((() => {
                    const {
                      cause: Vt,
                      census: Ot
                    } = OX(tt);
                    (0, PV.reportFirstViewNoTerrain)(et, Vt, Ot, bm), (0, Je.s)("noTerrain")
                  }))
                }
              } else console.info(`${oD} playable at ${Xt} ms${xd?"":" (no renderer)"}`);
              setTimeout(tj, 0), (0, ve.g)().catch((tt => {
                console.error(`${oD} item sprites didn't load, so item particles show the missing texture`, tt)
              })), lq.b.warm()
            }(tt);
          (0, EV.L)(tt, {
            worldgen: Rm,
            mesh: Pm
          }),
          function(tt) {
            tt.forEachEvent(RO);
            for (const et of cO) try {
              (0, uO.c)(et)
            } catch (wt) {
              if ((0, ne.h)(wt)) {
                tt.crashOn(EV.i, wt);
                break
              }
              console.error(`${hO} an input action listener threw`, wt)
            }
            cO.length = 0
          }(tt), qt && (0, Fe.d)();
          return !tt.isStopped
        }(tt, et, "all" === Ot || Dt, qt)
      } finally {
        jd = Dt, Dt || (Od = performance.now())
      }
    }

    function tX(tt) {
      console.error(`${oD} a frame-start listener threw`, tt)
    }

    function eX() {
      var tt, et, Vt, Ot;
      null === (tt = rm) || void 0 === tt || tt.drain(dm, jm), null === (et = Bm) || void 0 === et || et.drain(dm), null === (Vt = pm) || void 0 === Vt || Vt.drain(performance.now()), nd(dm), null === (Ot = im) || void 0 === Ot || Ot.drain()
    }

    function VX(tt) {
      console.error(`${oD} a before-frame listener threw`, tt)
    }

    function OX(tt) {
      const et = (0, Pt.g)(),
        Vt = (0, Pt.q)(),
        Ot = null === et || null === Vt ? null : Vt.readDrawCensus(et.api);
      return {
        cause: (0, YV.m)(tt.headerWord(se.J.LoadSteps), Ot),
        census: Ot
      }
    }
    const qX = {
      ChunkRequested: "wasm_chunk_requested",
      ChunkStored: "wasm_chunk_stored",
      MeshLanded: "wasm_mesh_landed",
      PlayerChunk: "wasm_player_chunk",
      TerrainDrawn: "wasm_terrain_drawn"
    };

    function DX(tt) {
      var et;
      if (Xj) return;
      if (null === Ej && dX() && (Ej = performance.now()), null === Md || 0 === (tt.headerWord(se.J.LoadSteps) & se.W.PlayerBound) ? wj = null : wj ??= performance.now(), null === Jd && null === Md) return;
      null === Ej || fj || (fj = !0, (0, ft.q)("wasm_startup_loaded", Ej));
      let Vt = 0;
      null !== Md ? Vt = -1 : !0 === (null === (et = zd) || void 0 === et ? void 0 : et.activated) && (Vt = ~se.X.TerrainDrawn);
      const Ot = tt.headerWord(se.J.LoadSteps) & Vt & ~lj;
      if (0 === Ot) return;
      lj |= Ot;
      const qt = performance.now();
      for (const [Dt, mt] of Object.entries(qX)) 0 !== (Ot & se.X[Dt]) && (0, ft.q)(mt, qt)
    }

    function mX() {
      return xd && dX()
    }

    function dX() {
      return xm && jX()
    }

    function jX() {
      return null === rm || rm.startupDone
    }

    function HX(tt, et) {
      const Vt = Sm;
      (null === Vt || void 0 === Vt ? void 0 : Vt.conn) === tt ? XX(Vt, et) : fd++
    }

    function XX(tt, et) {
      const {
        ws: Vt
      } = tt;
      return Vt.readyState === WebSocket.OPEN ? (Vt.send(et), !0) : Vt.readyState === WebSocket.CONNECTING && tt.pendingBytes + et.byteLength <= Vm ? (tt.pending.push(et.slice()), tt.pendingBytes += et.byteLength, !0) : (fd++, !1)
    }

    function QX() {
      var tt, et, Vt, Ot, qt, Dt, mt, dt, jt, Ht, Xt, Qt, lt, Et, ft, wt, yt;
      vj = !0, Mj.stop(), (0, sq.endLookDebugTake)(), OD = null, MH(), (0, It.C)().unlockPointer(), (0, It.A)(null), null === (tt = om) || void 0 === tt || tt(), om = null, null === (et = (0, Pt.q)()) || void 0 === et || et.followCursorAim(null), (0, Fe.K)(), (0, Pt.e)(), Mm.stop(), null === (Vt = jj) || void 0 === Vt || Vt(), jj = null, null === (Ot = Hj) || void 0 === Ot || Ot(), Hj = null, null === (qt = mj) || void 0 === qt || qt.stop(), mj = null, (0, pV.p)(null), null === (Dt = cm) || void 0 === Dt || Dt(), cm = null, null === (mt = Rm) || void 0 === mt || mt.stop(), Rm = null, null === (dt = Pm) || void 0 === dt || dt.stop(), Pm = null, null !== (jt = Nm) && void 0 !== jt && null !== (Ht = jt.textures) && void 0 !== Ht && Ht.assets && (0, aq.m)(null), null === (Xt = Nm) || void 0 === Xt || Xt.stop(), Nm = null, am = null;
      const Nt = Zm;
      Zm = null, Nt && (Nt.stop(), MX(Nt)), null === (Qt = Bm) || void 0 === Qt || Qt.dispose(), Bm = null, null === (lt = pm) || void 0 === lt || lt.dispose(), pm = null, rm = null, null === (Et = Am) || void 0 === Et || Et(), Am = null, null === (ft = Gm) || void 0 === ft || ft(), Gm = null, null !== md && (clearTimeout(md), md = null), null === (wt = zm) || void 0 === wt || wt.stop(), zm = null, rj(), Jq.b.release(), lH();
      const Mt = im;
      im = null;
      try {
        null === Mt || void 0 === Mt || Mt.dispose()
      } catch (bt) {
        console.warn(`${oD} the sky's images didn't release`, bt)
      }(0, Eq.f)(null), null === (yt = Em) || void 0 === yt || yt.pagePreviews().endSession(null === (0, ye.s)())
    }

    function lX(tt, et) {
      var Vt, Ot;
      const qt = null !== (Vt = null === (Ot = Zm) || void 0 === Ot ? void 0 : Ot.details()) && void 0 !== Vt ? Vt : {},
        Dt = tt.site === UD || tt.site === AD || tt.site === PV.RENDER_RELOAD_SITE || tt.site === iD ? tt.error instanceof WebAssembly.RuntimeError || tt.error instanceof dV.e : !(0, QV.o)(tt.error) && (0, EV.F)(tt);
      Dt && tt.error instanceof Error && (0, ye.Y)(tt.error);
      const mt = Dt || tt.site === EV.w ? (0, PV.readTrap)(tt.error) : null,
        dt = null !== mt && (0, eV.d)(mt.kind, mt.refusedBytes) ? mt.refusedBytes : 0,
        jt = (0, SV.l)(),
        Ht = null === Lm ? (0, Hq.r)(function() {
          try {
            return (0, ye.z)().buffer.byteLength
          } catch {
            return 0
          }
        }(), dt, jt) : Lm.ceilingMayRefuse(dt, jt),
        Xt = dt > 0 && !Ht && RH();
      var Qt;
      if (Xt && ((0, Ce.G)("oom"), (0, Ce.E)("decline"), hj = !0), QX(), (0, Rq.e)()) return console.warn(`${oD} the session stopped at ${tt.site} as the page reloads`, tt.error), void((0, QV.o)(tt.error) || (null === (Qt = tt.header) || void 0 === Qt ? void 0 : Qt.lastError) === ge.M.CoreBusy || (0, PV.reportStoppedCore)(tt, et, mt, {
        memoryDetails: qt,
        declined: Xt
      }));
      (0, PV.showCrash)(tt, et, mt, {
        memoryDetails: qt,
        declined: Xt
      })
    }

    function EX(tt, et) {
      const Vt = performance.now();
      return !(Vt - ld[tt] < Om) && (ld[tt] = Vt, console.warn(`${oD} ${et}`), !0)
    }

    function fX(tt) {
      const {
        input: et,
        net: Vt,
        worker: Ot
      } = tt.rings, qt = tt.optionsDropped, Dt = et.dropped + qt + Vt.dropped + Ot.dropped + fd;
      Dt !== Ed && EX("dropped", `${Dt} records dropped so far (input ${et.dropped}, options ${qt}, net ${Vt.dropped}, worker ${Ot.dropped}, net-out ${fd})`) && (Ed = Dt)
    }

    function wX() {
      var tt, et;
      const Vt = (0, GV.e)();
      if (null === Vt) return null;
      const Ot = (0, UV.s)(Vt);
      return {
        ...Ot,
        horizontal: Math.min(Ot.horizontal, null !== (tt = null === (et = Zm) || void 0 === et ? void 0 : et.shedDistanceInUse()) && void 0 !== tt ? tt : 1 / 0)
      }
    }

    function yX(tt) {
      var et, Vt;
      return {
        samples: xd ? qj : null,
        sunShadows: tt,
        renderDistance: null !== (et = null === (Vt = wX()) || void 0 === Vt ? void 0 : Vt.horizontal) && void 0 !== et ? et : null
      }
    }

    function NX(tt) {
      Cd = tt, (0, zV.D)()
    }

    function aX() {
      var tt, et, Vt;
      const Ot = wX();
      return {
        ...null === (tt = Zm) || void 0 === tt ? void 0 : tt.pageKillSnapshot(),
        renderDistance: null !== (et = null === Ot || void 0 === Ot ? void 0 : Ot.horizontal) && void 0 !== et ? et : null,
        renderDistanceVertical: null !== (Vt = null === Ot || void 0 === Ot ? void 0 : Ot.vertical) && void 0 !== Vt ? Vt : null,
        chunkCap: Fm,
        budgetBasis: km,
        renderBackend: (0, Rq.H)(),
        adPreload: ud,
        ...(0, oV.c)(Cd)
      }
    }

    function MX(tt) {
      var et;
      console.info(`${oD} wasm memory at the session's end`, tt.details());
      const {
        wasmMainMiB: Vt,
        wasmWorkersMiB: Ot,
        peakStoredChunks: qt
      } = tt.pageKillSnapshot(), Dt = navigator.deviceMemory;
      (0, fV.logClientMeasurement)("wasm_memory_end", {
        wasmMainMiB: Vt,
        wasmWorkersMiB: Ot,
        peakStoredChunks: qt
      }, {
        client: "wasm",
        renderBackend: null !== (et = (0, Rq.H)()) && void 0 !== et ? et : "none",
        os: (0, rV.getOperatingSystem)(),
        deviceMemory: String(null !== Dt && void 0 !== Dt ? Dt : "unreported")
      })
    }

    function bX(tt, et) {
      if (!tt.isStopped) try {
        et()
      } catch (Vt) {
        tt.crash(EV.A, Vt)
      }
    }

    function JX() {
      return Im ??= Vt.e(72).then((() => Vt(51323))).catch((tt => {
        throw Im = null, tt
      })), Im
    }
    async function CX() {
      const {
        createWorldgenWorker: tt,
        worldgenWorkerReady: et
      } = await JX();
      return await et(), tt
    }

    function uX(tt) {
      var et;
      null === (et = Im) || void 0 === et || et.then(tt, (() => {}))
    }

    function KX() {
      return performance.now() - Math.max(Od, qd) >= qm
    }

    function hX(tt) {
      const et = document.hidden || Dd ? "all" : "budget";
      Dd = !0;
      const Vt = nH(tt, !1, et);
      var Ot;
      Vt && (fX(tt), null === (Ot = Zm) || void 0 === Ot || Ot.afterFrame());
      return Vt
    }

    function vX(tt) {
      tt.isStopped || 0 === tt.rings.net.cursor || KX() && !hX(tt) || tt.rings.net.cursor > 0 && performance.now() - qd >= qm / 2 && function(tt) {
        md ??= setTimeout((() => {
          md = null, vX(tt)
        }), qm)
      }(tt)
    }

    function WX(tt, et) {
      return async function(tt, et, Vt) {
        let {
          stop: Ot,
          stillWanted: qt,
          beforeReload: Dt
        } = Vt;
        const mt = await (0, BO.m)(tt, {
          stillWanted: qt,
          beforeReload: async () => {
            Ot(), await Promise.all([(0, PV.flushCrashReports)(te.c), null === Dt || void 0 === Dt ? void 0 : Dt()])
          },
          reload: te.h
        });
        return mt || et(), mt
      }(tt, et, {
        ...arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        stop: QX
      })
    }
    let SX = !1;

    function cX() {
      return SX = !0, async function(tt, et, Ot) {
        const {
          gamePackSource: qt
        } = await Vt.e(276).then((() => Vt(41257)));
        await UH.packStep(tt, ((Vt, Ot) => Vt.packForGame(tt, qt(et), Ot)), Ot)
      }(...arguments)
    }

    function RX(tt) {
      ! function(tt, et) {
        tt((tt => {
          null === tt || void 0 === tt || tt.subscribe((tt => {
            let {
              pack: Vt,
              gameSource: Ot
            } = tt;
            et(null === Ot || null === Vt ? null : {
              pack: Vt,
              source: "" === Ot ? null : Ot
            })
          }))
        }))
      }(zH, tt)
    }
    let IX = !1,
      PX = null,
      ZX = !1,
      LX = !1;

    function FX() {
      var tt;
      IX || (IX = !0, Pj("play", st), (0, lt.m)(new xX), dt.gameBridge.attach(rt), UX().catch((() => {})), (0, Pt.r)((tt => {
        Xe(tt.setTextHost)
      })), tt = zX, Ud.add(tt), function(tt) {
        for (const et of gm) tt(et);
        sm.add(tt)
      }((tt => {
        GX(kX[tt])
      })))
    }
    const kX = {
      booted: Dt.n.INITIALISE_NOA,
      texturesIn: Dt.n.REGISTRATION,
      modelsIn: Dt.n.SETUP_LIFEFORMS
    };

    function GX(tt) {
      jt.j.sw("matchmakeAndPlayStepCompleted", {
        step: tt,
        totalSubSteps: 1
      })
    }

    function zX(tt) {
      if (!ZX) return;
      const {
        gameNameWithVariation: et,
        lobbyName: Vt
      } = (0, lt.c)();
      if (tt.code === Ot.b.serverUpdating.code) return (new xX).leaveLive(), void rX(et, Vt);
      jt.j.sw("unwantedLeftGame", {
        reason: oX(tt),
        requiresRefresh: tt.requiresRefresh,
        canReconnect: null !== tt.reconnect,
        automaticallyReconnect: tt.reconnecting,
        canPlayAgain: tt.canPlayAgain,
        gameNameWithVariation: et,
        lobbyName: Vt
      }), (new xX).leaveLive()
    }

    function oX(tt) {
      return null !== tt.reasonKey ? {
        translationKey: tt.reasonKey
      } : "gameOrPluginKick" === tt.name ? tt.reason : `You have disconnected from the server.\n${tt.reason}`
    }

    function rX(tt, et) {
      var Ot;
      Ot = (0, Ht.B)(tt, et), Promise.resolve().then((() => Vt(1613))).then((tt => {
        let {
          navigatePreserveSearch: et
        } = tt;
        et(Ot)
      })).catch((tt => {
        console.warn("[bloxd-wasm-client] the page's router didn't navigate: loading the page instead", tt), (0, te.e)(Ot)
      }))
    }

    function UX() {
      return PX ??= Promise.all([Vt.e(73), Vt.e(76), Vt.e(75), Vt.e(74), Vt.e(90), Vt.e(87), Vt.e(273), Vt.e(191), Vt.e(228), Vt.e(252), Vt.e(275), Vt.e(47)]).then((() => Vt(41197))).then((tt => {
        try {
          tt.attachPlayGameSources()
        } catch (et) {
          throw console.error("[bloxd-wasm-client] the play sources did not attach", et),
            function(tt) {
              um.then((et => {
                null === et || et.isStopped || vj ? console.warn(`${oD} the play sources threw as they attached, after the client stopped`, tt) : lX({
                  site: iD,
                  error: tt,
                  header: null
                }, bm)
              }))
            }(et), et
        }
      }), (tt => {
        throw PX = null, new Pt.d(tt)
      })), PX
    }
    async function AX(tt, et) {
      FX(), SX = !0, ZX = !0;
      let Vt = {
          place: tt.place,
          matchedAt: tt.matchedAt
        },
        mt = tt.place.gameNameWithVariation;
      const dt = (0, Qt.h)();
      let jt = null;
      const Ht = await kj({
        matchmake: async () => {
          let et = Vt;
          if (Vt = null, null === et) {
            const Vt = await tt.rematch();
            if (Vt.isError()) throw jt = Vt.asError().forward(), new Error(Vt.asError().message);
            et = {
              place: Vt.getValue(),
              matchedAt: performance.now()
            }
          }
          mt = et.place.gameNameWithVariation;
          return {
            target: await (0, Yt.d)(tt.userContext, et.place, oH(), dt),
            matchedAt: et.matchedAt,
            freshMs: Yt.c
          }
        },
        pageReady: UX,
        onFailure: (tt, et) => {
          null === jt && function(tt, et) {
            (0, PV.reportPageJoinFailure)(tt, bm, et)
          }(tt, {
            sinceJoinStartMs: et,
            game: mt
          })
        },
        rejoin: () => () => {},
        invalidateTrafficCode: () => tt.userContext.invalidateTrafficCode(),
        signal: et
      });
      switch (Ht.kind) {
        case "joined":
          if (dt) {
            setTimeout((() => {
              ut.ready()
            }), 0);
            const {
              game: tt
            } = Ht;
            (0, Qt.v)((() => {
              tt.endJoinAd() && ((0, ft.i)(), ut.adEnded())
            }))
          }
          return LX || (LX = !0, (0, ht.d)()), ZX ? (GX(Dt.n.CONNECT_TO_GAME_SERVER), GX(Dt.n.SHADER_PACK), function() {
            var tt, et;
            return null !== (tt = null === (et = Tm) || void 0 === et ? void 0 : et.runsInJoinedGame()) && void 0 !== tt && tt
          }() && (0, Kt.e)(tt.userContext, mt).catch((tt => {
            console.error("Failed to report the shader pack session", tt)
          })), function() {
            const tt = function() {
              var tt, et;
              return null !== (tt = null === (et = Tm) || void 0 === et ? void 0 : et.couldntRunInJoinedGame()) && void 0 !== tt ? tt : null
            }();
            null !== tt && (0, Kt.c)(tt)
          }(), qt.e.value(void 0)) : pX("The server ended the game as it joined");
        case "failed":
          if (!Ht.reloading) {
            if (null !== jt) return jt;
            if ((Ht.error instanceof At.n || Ht.error instanceof At.c) && Ht.error.code === Ot.b.serverUpdating.code) {
              if (et.aborted) return pX("Left the game while it loaded");
              const {
                gameNameWithVariation: tt,
                lobbyName: Vt
              } = (0, lt.c)();
              return rX(tt, Vt), pX("The server is updating")
            }
            return Ht.error instanceof nt.c ? qt.e.errorWithCode(Ht.error.messageKey, Dt.n.SHADER_PACK, {
              severity: "medium"
            }) : qt.e.errorWithCode(function(tt) {
              if (tt instanceof At.z || tt instanceof ct.c) return tt.message;
              if (iX(tt)) return (0, Ut.p)(tt.code, tt.serverText);
              return Ut.j
            }(Ht.error), Dt.n.CONNECT_TO_GAME_SERVER, {
              error: YX(Ht.error) ? Ht.error : void 0,
              severity: BX(Ht.error),
              gameServerUnreachable: (0, it.d)(Ht.error),
              joinFailure: (0, it.h)(Ht.error),
              rematch: (0, Wt.c)(Ht.error),
              gameRefused: (0, St.e)(Ht.error)
            })
          }
          return pX("Reloading into the new build");
        case "stopped":
          return pX("The game client stopped, and shows why");
        case "nV":
          return pX("Left the game while it loaded")
      }
    }

    function iX(tt) {
      return tt instanceof At.n || tt instanceof At.c && "attach" !== tt.stage
    }

    function YX(tt) {
      return !(tt instanceof At.z) && !iX(tt) && void 0 === (0, it.d)(tt)
    }

    function BX(tt) {
      return iX(tt) ? tt instanceof At.c && (0, Ut.l)(tt.code).requiresRefresh ? "medium" : "low" : YX(tt) || tt instanceof At.z ? "medium" : "low"
    }

    function pX(tt) {
      return qt.e.errorWithCode(tt, Dt.n.CONNECT_TO_GAME_SERVER, {
        severity: "low",
        nV: !0
      })
    }
    class xX {
      leave(tt) {
        if ((0, Rt.d)()) {
          var et, Vt;
          if ((0, mt.c)()) return;
          (0, Et.e)(!0 === (null === (et = (0, Rt.l)()) || void 0 === et || null === (Vt = et.currentViewer) || void 0 === Vt ? void 0 : Vt.unsavedChanges), tt)
        } else this.leaveLive()
      }
      leaveLive() {
        var tt;
        SX && (null === (tt = oH()) || void 0 === tt || tt.endGamePack());
        if (!ZX) return;
        ZX = !1, (0, vt.d)();
        try {
          var et;
          null === (et = (0, Pt.q)()) || void 0 === et || et.clearWasmCameraScreen()
        } catch (Ot) {
          console.error("[bloxd-wasm-client] the camera screen didn't clear", Ot)
        }
        const {
          gameNameWithVariation: Vt
        } = (0, lt.c)();
        try {
          pj()
        } finally {
          (0, lt.o)({
            websocketUrl: null
          }), jt.j.sw("leaveGame", {
            gameNameWithVariation: Vt
          }), (0, Xt.T)()
        }
      }
      isReplay() {
        return (0, Rt.d)()
      }
    }
  },
  41122: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => qt,
      d: () => Ot,
      g: () => dt,
      h: () => mt
    });
    const Ot = 12e4,
      qt = 3e4,
      Dt = {
        hidden: () => "undefined" !== typeof document && document.hidden,
        listen: tt => "undefined" === typeof document ? () => {} : (document.addEventListener("visibilitychange", tt), () => {
          document.removeEventListener("visibilitychange", tt)
        })
      };

    function mt(tt) {
      return `it sent no start within ${Math.round(tt)} ms`
    }
    class dt {
      constructor(tt, et) {
        let Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => performance.now(),
          Ot = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Dt;
        this.timeoutMs = tt, this.onTimeout = et, this.now = Vt, this.visibility = Ot, this.timer = null, this.counted = 0, this.step = null, this.unlisten = void 0, this.unlisten = Ot.listen((() => {
          this.onVisibility()
        })), Ot.hidden() || this.next()
      }
      cancel() {
        this.pause(), this.unlisten()
      }
      onVisibility() {
        this.visibility.hidden() ? (this.counted += this.credit(), this.pause()) : null === this.timer && this.next()
      }
      credit() {
        const tt = this.step;
        return null === tt ? 0 : Math.min(this.now() - tt.at, tt.ms)
      }
      pause() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null), this.step = null
      }
      next() {
        const tt = this.timeoutMs - this.counted;
        if (tt <= 0) return void this.arm(1e3, (() => {
          this.cancel(), this.onTimeout(this.counted)
        }));
        const et = Math.min(tt, 5e3);
        this.step = {
          at: this.now(),
          ms: et
        }, this.arm(et, (() => {
          this.counted += this.credit(), this.step = null, this.next()
        }))
      }
      arm(tt, et) {
        this.timer = setTimeout((() => {
          this.timer = null, et()
        }), tt)
      }
    }
  },
  39856: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => dt
    });
    var Ot = Vt(391),
      qt = Vt(1103);
    const Dt = new Set(["bingo", "buildAFactory2", "classic", "testGym"]),
      mt = new Set(["creativeFlat", "skyGrid"]);

    function dt(tt) {
      const et = (0, Ot.bc)(tt);
      return "classic" !== et ? Dt.has(et) : !(0, qt.k)(tt) && !mt.has((0, Ot.Wb)(tt))
    }
  },
  37985: (tt, et, Vt) => {
    function Ot(tt) {
      return "string" !== typeof tt || 2 !== tt.length && ":" !== tt[2] ? null : tt[0] + tt[1]
    }
    Vt.d(et, {
      d: () => yt,
      f: () => ut,
      i: () => Ct,
      m: () => Kt,
      n: () => dt,
      p: () => mt,
      s: () => Dt,
      v: () => jt,
      w: () => Nt,
      y: () => wt
    });
    const qt = ["op:ytInitialPlayerResponse.adPlacements", "op:ytInitialPlayerResponse.playerAds", "op:ytInitialPlayerResponse.adSlots", "op:playerResponse.adPlacements", "op:playerResponse.playerAds", "op:playerResponse.adSlots"];

    function Dt(tt) {
      if (function(tt) {
          for (let et = 0; et < qt.length; et++)
            if (tt === qt[et]) return !0;
          return !1
        }(tt)) return !1;
      const et = Ot(tt);
      return "op" === et || "ep" === et || "wi" === et || "pp" === et || "fp:call" === tt || "fp:t" === tt
    }

    function mt(tt) {
      return "fp" === Ot(tt) && !Dt(tt)
    }

    function dt(tt) {
      if ("string" !== typeof tt) return !1;
      return "o" === tt[0] && "p" === tt[1] && (2 === tt.length || ":" === tt[2]) || "fp:call" === tt || "2" === tt || "t" === tt || "a" === tt
    }

    function jt(tt, et) {
      return `~${function(tt){return tt.length<2?tt:":"===tt[1]?tt[0]:tt[0]+tt[1]}(et)}~${tt}`
    }
    const Ht = 200;

    function Xt(tt) {
      let et = tt.length - 1;
      for (let Vt = 0; Vt < 2; Vt++) {
        const Vt = et;
        for (; et >= 0 && tt[et] >= "0" && tt[et] <= "9";) et--;
        if (et < 0 || et === Vt || ":" !== tt[et]) return -1;
        et--
      }
      return et + 1
    }

    function Qt(tt) {
      return "unknown" === tt || Xt(tt) >= 0
    }

    function lt(tt, et) {
      return tt[et] >= "\ud800" && tt[et] <= "\udbff" && et + 1 < tt.length && tt[et + 1] >= "\udc00" && tt[et + 1] <= "\udfff" ? 2 : 1
    }

    function Et(tt, et, Vt) {
      return 2 === Vt ? 4 : tt[et] <= "\x7f" ? 1 : tt[et] <= "\u07ff" ? 2 : 3
    }

    function ft(tt, et, Vt) {
      let Ot = 0;
      for (; Ot < et;) {
        const et = lt(tt, Ot),
          qt = Et(tt, Ot, et);
        if (qt > Vt) break;
        Vt -= qt, Ot += et
      }
      return Ot
    }

    function wt(tt) {
      let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1 / 0;
      if ("string" !== typeof tt || tt.length > Ht || !Qt(tt)) return "t";
      let Vt = 2;
      for (let dt = 0; dt < tt.length;) {
        const et = lt(tt, dt);
        Vt += Et(tt, dt, et), dt += et
      }
      if (Vt <= et) return `t ${tt}`;
      const Ot = Xt(tt),
        qt = et - 2 - (tt.length - Ot);
      if (qt < 0) return "t";
      const Dt = ft(tt, Ot, qt);
      let mt = "t ";
      for (let dt = 0; dt < Dt; dt++) mt += tt[dt];
      for (let dt = Ot; dt < tt.length; dt++) mt += tt[dt];
      return mt
    }
    const yt = 62;

    function Nt(tt) {
      let et = "so:";
      const Vt = ft(tt, tt.length, yt - et.length);
      for (let Ot = 0; Ot < Vt; Ot++) et += tt[Ot];
      return et
    }
    const Mt = "BABYLON ",
      bt = "DECODE ",
      Jt = "BABYLON@ ";

    function Ct(tt) {
      return Nt(Mt + tt)
    }

    function ut(tt, et) {
      return Nt(Jt + tt + " " + et)
    }

    function Kt(tt) {
      return Nt(bt + tt)
    }
  },
  41025: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => Ot
    });
    const Ot = {
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
  38238: tt => {
    tt.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAKUlEQVQYGWM8CwQMeAATHjmw1JBQwAh06v+LFy8yvH//noGXl/ccuq8A/vQKd00yOdIAAAAASUVORK5CYII="
  },
  38227: tt => {
    tt.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAALUlEQVQYGWM8CwQMeAATHjmw1JBQwAh06v8DBw4wCAoKMnBzczN8/PjxHLLPAORwCnfkvOdNAAAAAElFTkSuQmCC"
  },
  38241: tt => {
    tt.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAKUlEQVQYGWM8CwQMeAATHjmw1JBQwAh06v8DBw4wCAoKMvz58+ccuq8A8vQKd2AxC9MAAAAASUVORK5CYII="
  },
  38222: tt => {
    tt.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAANUlEQVQYGWM8CwQMeAATHjmw1JBQAHLp/wMHDvy/ePHi/4CAgP937tz5Ly6u+5/P3uw/KAgAgjwWhHm22JoAAAAASUVORK5CYII="
  },
  38230: tt => {
    tt.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAKUlEQVQYGWM8CwQMeAATHjmw1JBQwAh06v8DBw4wCAoKMvz58+ccuq8A8vQKd2AxC9MAAAAASUVORK5CYII="
  },
  38947: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => Dt
    });
    var Ot = Vt(2961);
    const qt = ["none", "idle", "now"];

    function Dt() {
      const tt = () => (0, Ot.F)();
      return {
        memoryBytes: () => (0, Ot.z)().buffer.byteLength,
        reserveUpFront: et => tt().XQ(et),
        reserveAhead: et => tt().HQ(et),
        setCeiling: et => {
          tt().QQ(et)
        },
        lowWater: () => qt[tt().jQ()] ?? "none",
        stats: () => function(tt) {
          const et = new Uint32Array((0, Ot.z)().buffer, tt, 17),
            Vt = tt => et[tt] ?? 0,
            qt = tt => ({
              upFront: Vt(tt),
              ahead: Vt(tt + 1),
              onDemandInFrame: Vt(tt + 2),
              onDemand: Vt(tt + 3)
            });
          return {
            memoryBytes: Vt(0),
            initialBytes: Vt(1),
            liveBytes: Vt(2),
            peakLiveBytes: Vt(3),
            headroomBytes: Vt(4),
            unusedBytes: Vt(5),
            ceilingBytes: Vt(6),
            reservesRefused: Vt(7),
            grows: qt(8),
            grownBytes: qt(12),
            allocationsRefused: Vt(16)
          }
        }(tt().lQ()),
        takeBallast: () => tt().EQ(),
        takePressure: () => tt().fQ()
      }
    }
  },
  5223: (tt, et, Vt) => {
    Vt.d(et, {
      C: () => Xt,
      E: () => lt,
      e: () => dt,
      h: () => mt,
      k: () => Ot,
      m: () => wt,
      p: () => Qt,
      s: () => qt,
      u: () => Dt,
      y: () => Ht
    });
    const Ot = 5;

    function qt(tt) {
      return tt === Ot
    }

    function Dt(tt) {
      return [...tt.features]
    }
    const mt = 262144,
      dt = 256,
      jt = 256;

    function Ht(tt) {
      if ("object" !== typeof tt || null === tt || Array.isArray(tt)) return "The pack has no files.";
      const et = [];
      for (const [Vt, Ot] of Object.entries(tt)) {
        if ("string" !== typeof Ot) return `${Vt} isn't text.`;
        et.push({
          path: Vt,
          source: Ot
        })
      }
      return et.sort(((tt, et) => Qt(tt.path, et.path))),
        function(tt) {
          if (0 === tt.length) return "The pack has no .wgsl files.";
          if (tt.length > dt) return `The pack has more than ${dt} .wgsl files.`;
          const et = new Set;
          for (const {
              path: Vt
            }
            of tt) {
            const tt = Et(Vt);
            if (null !== tt) return tt;
            if (et.has(Vt)) return `The pack has two files at ${Vt}.`;
            et.add(Vt)
          }
          return lt(tt) > mt ? `The pack's .wgsl files are over ${mt/1024} KB in total.` : null
        }(et) ?? et
    }

    function Xt(tt) {
      const et = {};
      for (const Vt of tt) et[Vt.path] = Vt.source;
      return et
    }

    function Qt(tt, et) {
      return tt < et ? -1 : tt > et ? 1 : 0
    }

    function lt(tt) {
      const et = new TextEncoder;
      let Vt = 0;
      for (const {
          source: Ot
        }
        of tt) Vt += et.encode(Ot).byteLength;
      return Vt
    }

    function Et(tt) {
      if (!tt.toLowerCase().endsWith(".wgsl")) return `${tt} isn't a .wgsl file.`;
      if (tt.length > jt) return `A file path is over ${jt} characters.`;
      if (tt.includes("\\") || /[\u0000-\u001f]/.test(tt)) return `${tt} isn't a valid file path.`;
      return tt.split("/").some((tt => "" === tt || "." === tt || ".." === tt)) ? `${tt} isn't a valid file path.` : null
    }
    const ft = /^(.*)\[rot\[([1-4])$/;

    function wt(tt, et) {
      let Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
      const Ot = new Map;
      et.forEach(((tt, et) => {
        let {
          numAnimStates: Vt,
          animStartIdx: qt
        } = tt;
        for (let Dt = 1; Dt < Vt; Dt++) Ot.set(qt + Dt - 1, et)
      }));
      const qt = Object.entries(tt),
        Dt = new Map;
      for (const [wt, yt] of qt) {
        const tt = ft.exec(wt);
        "1" === tt?.[2] && Dt.set(tt[1], yt + 1)
      }
      const mt = tt => {
          const et = ft.exec(tt);
          return et && Dt.has(et[1]) ? {
            root: et[1],
            rotation: Number(et[2]) - 1
          } : null
        },
        dt = new Set(qt.map((tt => {
          let [et] = tt;
          return mt(et)?.root ?? et
        }))),
        jt = (tt, Vt) => {
          const Ot = tt.replace(/_?0$/, "");
          return (et[Vt]?.numAnimStates ?? 0) > 1 && !dt.has(Ot) ? Ot : tt
        },
        Ht = new Map;
      for (const [ft, wt] of qt) Ht.set(wt, jt(mt(ft)?.root ?? ft, wt));
      const Xt = qt.reduce(((tt, et) => {
          let [, Vt] = et;
          return Math.max(tt, Vt + 1)
        }), 0),
        Qt = Array.from({
          length: Xt
        }, ((tt, et) => ({
          id: et + 1,
          rotation: 0
        }))),
        lt = new Map,
        Et = new Map;
      for (const [ft, wt] of qt) {
        const tt = mt(ft),
          et = Ot.get(wt);
        if (void 0 !== et) {
          const Vt = Ht.get(et);
          Et.set(ft, {
            name: ft,
            texture: Vt,
            kind: "frame"
          }), tt && !Et.has(tt.root) && Et.set(tt.root, {
            name: tt.root,
            texture: Vt,
            kind: "frame"
          });
          continue
        }
        const Vt = Ht.get(wt),
          qt = tt?.root ?? ft;
        if (Vt !== qt && Et.set(qt, {
            name: qt,
            texture: Vt,
            kind: "frame"
          }), tt) {
          const et = Dt.get(tt.root);
          Qt[wt] = {
            id: et,
            rotation: tt.rotation
          }, lt.set(Vt, et), Et.set(ft, {
            name: ft,
            texture: Vt,
            kind: "rotation"
          })
        } else lt.set(Vt, wt + 1)
      }
      for (const ft of lt.keys()) Et.delete(ft);
      for (const [ft, wt] of Vt) {
        const tt = lt.get(wt);
        void 0 === tt || lt.has(ft) || (lt.set(ft, tt), Et.delete(ft))
      }
      return {
        named: [...lt].sort(((tt, et) => {
          let [Vt] = tt, [Ot] = et;
          return Vt < Ot ? -1 : Vt > Ot ? 1 : 0
        })).map((tt => {
          let [et, Vt] = tt;
          return {
            name: et,
            id: Vt
          }
        })),
        aliases: [...Et.values()],
        layers: Qt
      }
    }
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);