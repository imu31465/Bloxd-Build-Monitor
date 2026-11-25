export const id = 64;
export const ids = [64, 117, 118, 138];
export const modules = {
  40021: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => wG,
      i: () => SG
    });
    const wG = "The world isn't loaded, so no blocks can be seen.",
      SG = "The world isn't loaded, so nothing in it can be seen."
  },
  4706: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => VG
    });
    var wG = ZG(17),
      SG = ZG(19),
      LG = ZG(1251),
      yG = ZG(2801);
    const kG = 3e4,
      UG = 1e3;

    function YG() {
      return "visible" === document.visibilityState && "inGame" === wG.e.get("gameState") && (0, LG.A)()
    }

    function VG(GG, bG) {
      (0, yG.n)() || function(GG, bG, ZG) {
        let wG = 0;
        const SG = setInterval((() => {
          bG() && (wG += UG, wG >= GG && (clearInterval(SG), ZG()))
        }), UG)
      }(kG, YG, (() => {
        bG().then((() => {
          GG(`saved for the player after ${kG/1e3} s of play`), (0, yG.z)(), SG.l.xh("chat", {
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
  34341: (GG, bG, ZG) => {
    function wG(GG, bG) {
      return 0 === GG.length ? 0 : GG[Math.min(GG.length - 1, Math.floor(bG * GG.length))]
    }

    function SG(GG) {
      return GG.toFixed(1)
    }
    ZG.d(bG, {
      e: () => SG,
      i: () => wG
    })
  },
  38347: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => YG,
      c: () => VG,
      f: () => EG,
      i: () => zG,
      k: () => rG
    });
    var wG = ZG(4706),
      SG = ZG(34341),
      LG = ZG(2801);
    const yG = 20,
      kG = ["totalMs", "slotMs", "workerMs", "applyMs", "ahead", "inFlight", "rp", "jobMs"];

    function UG(GG) {
      return [...GG].sort(((GG, bG) => GG - bG))
    }
    const YG = [];

    function VG(GG, bG, ZG) {
      return `${GG},${bG},${ZG}`
    }
    class pG {
      constructor() {
        this.pending = new Map, this.jobs = new Map, this.edits = [], this.nextEdit = 0, this.reported = 0, this.windowStart = performance.now(), this.frames = 0, this.lastFrameAt = 0, this.maxFrameMs = 0, this.jobsSent = 0, this.maxAhead = 0, this.maxCapacity = 0, this.roundTrips = [], this.windowEdits = [], this.outliers = 0, this.gaveUp = 0
      }
      edit(GG, bG) {
        var ZG;
        const wG = null !== (ZG = this.pending.get(GG)) && void 0 !== ZG ? ZG : [];
        wG.push({
          editAt: bG,
          meshJobId: 0
        }), this.pending.set(GG, wG)
      }
      frame(GG) {
        this.lastFrameAt > 0 && (this.maxFrameMs = Math.max(this.maxFrameMs, GG - this.lastFrameAt)), this.lastFrameAt = GG, this.frames++, GG - this.windowStart >= 1e3 && this.summarise(GG)
      }
      sent(GG, bG, ZG, wG, SG, LG, yG) {
        this.jobs.set(bG, {
          sentAt: yG,
          receivedAt: 0,
          ahead: ZG,
          inFlight: wG,
          rp: SG,
          jobMs: 0
        }), this.jobsSent++, this.maxAhead = Math.max(this.maxAhead, ZG), this.maxCapacity = Math.max(this.maxCapacity, SG);
        for (const UG of null !== (kG = this.pending.get(GG)) && void 0 !== kG ? kG : []) {
          var kG;
          LG.includes(UG.meshJobId) || (UG.meshJobId = bG)
        }
      }
      received(GG, bG, ZG) {
        const wG = this.jobs.get(GG);
        void 0 !== wG && (this.roundTrips.push(ZG - wG.sentAt), wG.receivedAt = ZG, wG.jobMs = bG)
      }
      failed(GG) {
        this.jobs.delete(GG)
      }
      reassign(GG, bG, ZG) {
        this.jobs.delete(bG);
        for (const SG of null !== (wG = this.pending.get(GG)) && void 0 !== wG ? wG : []) {
          var wG;
          SG.meshJobId === bG && (SG.meshJobId = ZG)
        }
      }
      applied(GG, bG, ZG) {
        const wG = this.jobs.get(bG);
        this.jobs.delete(bG), void 0 !== wG && this.show(GG, wG, ZG, (GG => GG.meshJobId === bG))
      }
      emptied(GG, bG) {
        const ZG = {
          sentAt: bG,
          receivedAt: bG,
          ahead: 0,
          inFlight: 0,
          rp: 0,
          jobMs: 0
        };
        this.show(GG, ZG, bG, (() => !0))
      }
      show(GG, bG, ZG, wG) {
        const SG = this.pending.get(GG);
        if (!SG) return;
        const LG = SG.filter((SG => !wG(SG) || (this.record(GG, SG.editAt, bG, ZG), !1)));
        LG.length > 0 ? this.pending.set(GG, LG) : this.pending.delete(GG)
      }
      NQ(GG) {
        this.reported += GG, this === QG && this.reported >= yG && null !== KG && (KG(), KG = null)
      }
      record(GG, bG, ZG, wG) {
        const SG = {
          totalMs: wG - bG,
          slotMs: ZG.sentAt - bG,
          workerMs: ZG.receivedAt - ZG.sentAt,
          applyMs: wG - ZG.receivedAt,
          ahead: ZG.ahead,
          inFlight: ZG.inFlight,
          rp: ZG.rp,
          jobMs: ZG.jobMs
        };
        if (this.edits[this.nextEdit] = SG, this.nextEdit = (this.nextEdit + 1) % 500, this.windowEdits.push(SG.totalMs), this.NQ(1), SG.totalMs < 100 || ++this.outliers > 5) return;
        const yG = GG => Math.round(GG);
        (0, LG.j)("remesh", `slow edit (${GG}) shown in ${yG(SG.totalMs)} ms: slot ${yG(SG.slotMs)}, worker ${yG(SG.workerMs)} (${SG.ahead} ahead, ${SG.inFlight}/${SG.rp} in flight; job ${yG(SG.jobMs)}), apply ${yG(SG.applyMs)}`)
      }
      summarise(GG) {
        const bG = (GG - this.windowStart) / 1e3;
        for (const [ZG, wG] of this.pending) {
          const bG = wG.filter((bG => GG - bG.editAt <= 1e4));
          this.gaveUp += wG.length - bG.length, this.NQ(wG.length - bG.length), bG.length > 0 ? this.pending.set(ZG, bG) : this.pending.delete(ZG)
        }
        for (const [ZG, wG] of this.jobs) GG - wG.sentAt > (wG.receivedAt > 0 ? 1e4 : 6e4) && this.jobs.delete(ZG);
        if (this.jobsSent > 0 || this.roundTrips.length > 0 || this.windowEdits.length > 0 || this.gaveUp > 0) {
          const GG = UG(this.roundTrips),
            ZG = UG(this.windowEdits),
            wG = Math.max(0, this.outliers - 5);
          (0, LG.j)("remesh", `${Math.round(this.frames/bG)} fps (longest ${Math.round(this.maxFrameMs)} ms) | ${this.jobsSent} jobs sent, up to ${this.maxAhead} ahead on a worker, capacity ${this.maxCapacity} | round trip p50 ${Math.round((0,SG.i)(GG,.5))} max ${Math.round((0,SG.i)(GG,1))} ms | ${ZG.length} edits shown, p50 ${Math.round((0,SG.i)(ZG,.5))} max ${Math.round((0,SG.i)(ZG,1))} ms${wG>0?`, ${wG} more slow`:""}${this.gaveUp>0?`, ${this.gaveUp} never shown`:""}`)
        }
        this.windowStart = GG, this.frames = 0, this.maxFrameMs = 0, this.jobsSent = 0, this.maxAhead = 0, this.maxCapacity = 0, this.roundTrips = [], this.windowEdits = [], this.outliers = 0, this.gaveUp = 0
      }
      stats() {
        const GG = kG.map((GG => {
          const bG = UG(this.edits.map((bG => bG[GG])));
          return `${GG}: p50 ${Math.round((0,SG.i)(bG,.5))} p90 ${Math.round((0,SG.i)(bG,.9))} max ${Math.round((0,SG.i)(bG,1))}`
        }));
        return [`${this.edits.length} edits`, ...GG].join("\n")
      }
      dump() {
        const GG = this.edits.map((GG => kG.map((bG => Math.round(10 * GG[bG]) / 10)).join(",")));
        return [this.stats(), kG.join(","), ...GG].join("\n")
      }
    }
    class fG {
      constructor(GG, bG) {
        this.log = GG, this.wf = bG
      }
      edit(GG, bG, ZG) {
        const [wG, SG, LG] = this.wf.Op.hwG(GG, bG, ZG), yG = this.wf.Op.Qh.Kh(wG, SG, LG);
        yG && yG.ph && this.log.edit(VG(wG, SG, LG), performance.now())
      }
      sent(GG, bG, ZG, wG, SG) {
        this.log.sent(VG(GG.i, GG.j, GG.k), bG, ZG, wG, SG, YG, performance.now())
      }
      received(GG) {
        this.log.received(GG.meshJobId, GG.jobMs, performance.now())
      }
      failed(GG) {
        this.log.failed(GG)
      }
      applied(GG, bG) {
        this.log.applied(VG(GG.i, GG.j, GG.k), bG, performance.now())
      }
    }
    let QG = null,
      KG = null,
      hG = !1,
      dG = null;

    function JG() {
      return new Promise((GG => {
        null !== QG && QG.reported >= yG ? GG() : KG = GG
      }))
    }

    function rG() {
      const GG = new pG;
      return QG = GG, (0, LG.i)("remesh", (() => GG.dump())), (0, LG.c)("remeshStats", (() => {
        console.log(GG.stats())
      })), hG || (hG = !0, (0, wG.e)((GG => {
        (0, LG.j)("remesh", GG)
      }), JG)), GG
    }

    function zG(GG) {
      const bG = rG();
      dG = new fG(bG, GG), GG.QE.meshProbe = dG, GG.on("beforeRender", (() => {
        bG.frame(performance.now())
      }))
    }

    function EG(GG, bG, ZG) {
      var wG;
      null === (wG = dG) || void 0 === wG || wG.edit(GG, bG, ZG)
    }
  },
  34368: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => wG
    });
    const wG = new Set(["chunkBorders"])
  },
  34519: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => yG,
      e: () => SG,
      f: () => VG
    });
    var wG = ZG(1509);

    function SG(GG) {
      var bG;
      return {
        ...yG.store,
        yaw: yG.store.yaw + (null !== (bG = wG.d[GG].previewYaw) && void 0 !== bG ? bG : 0)
      }
    }
    const LG = {
        yaw: .61 * Math.PI,
        pitch: Math.PI / 2.05,
        radius: 30,
        target: [0, 0, 0]
      },
      yG = {
        player: LG,
        store: {
          ...LG,
          radius: 33,
          target: [0, 3.9, 0]
        }
      };

    function kG(GG, bG) {
      GG instanceof Promise ? GG.then(bG).catch((GG => {
        console.error("Couldn't open the preview", GG)
      })) : bG(GG)
    }
    class UG {
      constructor(GG) {
        this.opened = null, this.view = null, this.size = null, this.closed = !1, kG(GG, (GG => {
          this.closed ? GG.close() : (this.opened = GG, null !== this.size && GG.resize(this.size.width, this.size.height), null !== this.view && GG.show(this.view))
        }))
      }
      show(GG) {
        var bG;
        this.view = GG, null === (bG = this.opened) || void 0 === bG || bG.show(GG)
      }
      resize(GG, bG) {
        var ZG;
        this.size = {
          width: GG,
          height: bG
        }, null === (ZG = this.opened) || void 0 === ZG || ZG.resize(GG, bG)
      }
      close() {
        var GG;
        this.closed = !0, null === (GG = this.opened) || void 0 === GG || GG.close(), this.opened = null
      }
    }
    class YG {
      constructor(GG) {
        this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(GG).then((GG => GG.ready)), kG(GG, (GG => {
          this.closed ? GG.close() : (this.opened = GG, null !== this.size && GG.resize(this.size.width, this.size.height))
        }))
      }
      get dev() {
        return this.opened.dev
      }
      isReady() {
        var GG, bG;
        return null !== (GG = null === (bG = this.opened) || void 0 === bG ? void 0 : bG.isReady()) && void 0 !== GG && GG
      }
      setCosmetic(GG, bG) {
        var ZG;
        null === (ZG = this.opened) || void 0 === ZG || ZG.setCosmetic(GG, bG)
      }
      playEmote(GG) {
        var bG;
        null === (bG = this.opened) || void 0 === bG || bG.playEmote(GG)
      }
      setOrbit(GG) {
        var bG;
        null === (bG = this.opened) || void 0 === bG || bG.setOrbit(GG)
      }
      resetCamera() {
        var GG;
        null === (GG = this.opened) || void 0 === GG || GG.resetCamera()
      }
      async untilDrawn(GG) {
        var bG;
        await this.ready, await (null === (bG = this.opened) || void 0 === bG ? void 0 : bG.untilDrawn(GG))
      }
      resize(GG, bG) {
        var ZG;
        this.size = {
          width: GG,
          height: bG
        }, null === (ZG = this.opened) || void 0 === ZG || ZG.resize(GG, bG)
      }
      close() {
        var GG;
        this.closed = !0, null === (GG = this.opened) || void 0 === GG || GG.close(), this.opened = null
      }
    }
    const VG = new class {
      constructor() {
        this.host = null, this.makeDefault = null
      }
      setHost(GG) {
        this.host = GG
      }
      setDefaultHost(GG) {
        this.makeDefault = GG
      }
      current() {
        if (null === this.host) {
          if (null === this.makeDefault) throw new Error("no preview host");
          this.host = this.makeDefault()
        }
        return this.host
      }
      openMob(GG) {
        return new UG(this.current().openMob(GG))
      }
      openPet(GG) {
        return new UG(this.current().openPet(GG))
      }
      openMobLineup(GG) {
        return new UG(this.current().openMobLineup(GG))
      }
      openCharacter(GG, bG) {
        return new YG(this.current().openCharacter(GG, bG))
      }
    }
  },
  5055: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => wG.i,
      f: () => SG,
      g: () => wG.o
    });
    var wG = ZG(5062);
    const SG = [!1, !0].flatMap((GG => ["terrain", "liquid", "model"].map((bG => ({
      strict: GG,
      program: bG
    })))))
  },
  39633: (GG, bG, ZG) => {
    ZG.r(bG), ZG.d(bG, {
      ShaderPackPage: () => UG,
      harnessShaderPackMode: () => fG,
      setHarnessUrlShaderPack: () => pG,
      shaderPackPage: () => VG
    });
    var wG = ZG(80),
      SG = ZG(29),
      LG = (ZG(3444), ZG(5055), ZG(3441)),
      yG = ZG(6661);
    ZG(6627);
    const kG = {
      status: "none"
    };
    class UG {
      constructor() {
        this.stored = null, this.compiling = null, this.pagePack = null, this.resolved = null
      }
      preload() {
        if (null === this.stored) {
          if ((0, LG.g)(wG.featureFlags.settings.canUseShaderPacks)) return this.stored = Promise.resolve(null), YG().then((GG => {
            GG && SG.h.removeItem(LG.d)
          })), this.stored;
          this.prefetchHint() && this.compiler().catch((() => {})), this.stored = this.readStored()
        }
        return this.stored
      }
      prefetchHint() {
        return (0, LG.e)(wG.featureFlags.settings.canUseShaderPacks)
      }
      async loadActive() {
        const GG = await this.load();
        return "active" === GG.status ? GG.pack : null
      }
      load() {
        return this.pagePack ??= this.read().catch((GG => (console.error("Failed to load the shader pack", GG), kG))).then((GG => (this.resolved ??= GG, GG))), this.pagePack
      }
      hasNone() {
        var GG;
        return "none" === (null === (GG = this.resolved) || void 0 === GG ? void 0 : GG.status)
      }
      block(GG) {
        this.resolved = {
          status: "blocked",
          messageKey: GG,
          variants: null
        }, this.pagePack = Promise.resolve(this.resolved)
      }
      compiler() {
        return this.compiling ??= Promise.all([ZG.e(78), ZG.e(136), ZG.e(142)]).then((() => ZG(42184))).then((GG => (GG.prefetchCompiler(), GG))), this.compiling
      }
      async readStored() {
        const GG = await YG();
        return GG && this.compiler().then((GG => GG.reconcileHint())).catch((GG => {
          console.error("Failed to correct the shader pack hint", GG)
        })), GG
      }
      async read() {
        const GG = await this.preload();
        return GG ? (await this.compiler()).compilePagePack(GG) : kG
      }
    }
    async function YG() {
      if (!(0, LG.j)(wG.featureFlags.settings.canUseShaderPacks)) return null;
      try {
        const GG = await (0, yG.e)(!0);
        return GG || SG.h.setItem(LG.d, !1), GG
      } catch (GG) {
        return console.error("Failed to read the stored shader pack", GG), SG.h.removeItem(LG.d), null
      }
    }
    const VG = new UG;

    function pG(GG, bG) {}

    function fG() {
      return null
    }
  },
  39678: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => pG,
      d: () => fG
    });
    var wG = ZG(140),
      SG = ZG(171),
      LG = ZG(1423),
      yG = ZG(2920),
      kG = ZG(1431),
      UG = ZG(36808),
      YG = ZG(647),
      VG = ZG(39633);

    function pG(GG) {
      (0, yG.reportClientError)("matchmake_failed", GG, wG.h[wG.h.SHADER_PACK])
    }
    async function fG(GG, bG) {
      var ZG;
      const wG = null === (ZG = await VG.shaderPackPage.preload()) || void 0 === ZG ? void 0 : ZG.listing,
        yG = (0, UG.d)();
      wG && null !== yG && await kG.d.reportShaderPackSession(GG, {
        packId: wG.packId,
        sourceHash: wG.sourceHash,
        game: (0, LG.g)(bG, SG.s, "other"),
        playSessionId: yG,
        visitSessionId: (0, YG.f)()
      })
    }
  },
  6661: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => SG,
      e: () => LG
    });
    var wG = ZG(29);
    const SG = "shaderPack";
    async function LG() {
      var GG;
      let bG = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (GG = await wG.e.getItem(SG, bG)) && void 0 !== GG ? GG : null
    }
  },
  6627: (GG, bG, ZG) => {
    ZG.r(bG), ZG.d(bG, {
      loadShaderPackTextures: () => yG,
      shaderPackTextures: () => kG
    });
    var wG = ZG(5062);
    let SG = null,
      LG = null;

    function yG() {
      return LG ??= Promise.all([ZG.e(73), ZG.e(190)]).then((() => ZG(40868))).then((GG => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: bG,
          textureNameToIndex: ZG,
          textureAnimationData: LG
        } = GG;
        return SG ??= (0, wG.j)(ZG, LG, bG), SG
      })), LG
    }

    function kG() {
      if (null === SG) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return SG
    }
  },
  34425: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => LG
    });
    var wG = ZG(1032);

    function SG() {
      var GG, bG;
      return null !== (GG = null === (bG = screen.orientation) || void 0 === bG ? void 0 : bG.type) && void 0 !== GG ? GG : innerWidth > innerHeight ? "landscape" : "portrait"
    }
    const LG = new class {
      constructor() {
        this.holding = !1, this.heldOrientation = "", this.releaseTimer = void 0, this.longHoldTimer = void 0, this.resizers = new Set, this.releaseWhenShown = () => {
          document.hidden || (document.removeEventListener("visibilitychange", this.releaseWhenShown), this.release())
        }
      }
      isHeld() {
        return this.holding && SG() !== this.heldOrientation && (this.holding = !1), this.holding
      }
      hold() {
        this.heldOrientation = SG(), this.holding = !0, clearTimeout(this.releaseTimer), document.removeEventListener("visibilitychange", this.releaseWhenShown), clearTimeout(this.longHoldTimer), this.longHoldTimer = setTimeout((() => {
          this.holding && (0, wG.rh)(new Error("Game view size held for 60 s"))
        }), 6e4)
      }
      release() {
        clearTimeout(this.longHoldTimer), this.releaseTimer = setTimeout((() => {
          if (document.hidden) document.addEventListener("visibilitychange", this.releaseWhenShown);
          else {
            this.holding = !1;
            for (const GG of this.resizers) GG()
          }
        }), 1e3)
      }
      heldSizer(GG) {
        let bG = !1;
        return () => {
          if (bG && this.isHeld()) return null;
          const ZG = GG();
          return bG ||= null !== ZG, ZG
        }
      }
      onRelease(GG) {
        return this.resizers.add(GG), () => {
          this.resizers.delete(GG)
        }
      }
    }
  },
  39663: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => SG
    });
    let wG = !1;
    async function SG(GG, bG) {
      if (!wG) {
        wG = !0;
        try {
          const [{
            reloadBloxd: wG
          }, {
            NotificationProvider: SG
          }] = await Promise.all([Promise.resolve().then((() => ZG(1702))), Promise.resolve().then((() => ZG(1311)))]);
          if (!GG || !0 === await SG.showPromptPopup({
              title: "Unsaved changes",
              subtitle: "Exit and lose your unsaved changes?",
              confirmText: "Exit",
              destructive: !0,
              cancelText: "Cancel",
              unlockPointerKey: "replayExitUnsavedChanges"
            }).getResult()) return void wG(bG)
        } catch (SG) {
          console.error("Leaving the replay failed", SG)
        }
        wG = !1
      }
    }
  },
  41367: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => kG,
      g: () => UG
    });
    var wG = ZG(1721);
    const SG = 33177600,
      LG = 3e4;
    let yG = !1;

    function kG(GG, bG, ZG) {
      let wG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const {
        scale: kG = 1,
        type: UG = "image/png",
        quality: YG
      } = wG;
      if (!GG.drawing()) return Promise.reject(new Error("Screenshots need a game to be running"));
      if (yG) return Promise.reject(new Error("A screenshot is already being taken"));
      yG = !0;
      const VG = function(GG, bG, ZG) {
        const wG = Math.max(1, GG),
          LG = Math.max(1, bG),
          yG = Math.min(1, ZG / Math.max(wG, LG), Math.sqrt(SG / (wG * LG)));
        return {
          width: Math.max(1, Math.floor(wG * yG)),
          height: Math.max(1, Math.floor(LG * yG))
        }
      }(bG, ZG, GG.maxTextureSize);
      return GG.resize(VG.width, VG.height, kG * VG.width / Math.max(1, bG)), new Promise(((bG, ZG) => {
        let wG, SG = 2,
          kG = null;
        const VG = () => {
          var bG;
          yG = !1, null === (bG = kG) || void 0 === bG || bG(), clearTimeout(wG), GG.restoreSize()
        };
        wG = setTimeout((() => {
          VG(), ZG(new Error("No frame was drawn to capture"))
        }), LG), kG = GG.onFrameDrawn((() => {
          if (SG--, SG > 0) return;
          const {
            canvas: wG
          } = GG, LG = {
            width: wG.width,
            height: wG.height
          };
          try {
            wG.toBlob((GG => {
              GG ? bG({
                blob: GG,
                ...LG
              }) : ZG(new Error("The canvas gave no image"))
            }), UG, YG)
          } catch (yG) {
            ZG(yG)
          } finally {
            VG()
          }
        }))
      }))
    }
    async function UG(GG, bG, ZG) {
      try {
        const SG = await kG(GG, bG, ZG);
        (0, wG.b)(SG.blob, `bloxd-screenshot-${SG.width}x${SG.height}-${Date.now()}.png`)
      } catch (SG) {
        console.error("Error taking screenshot:", SG)
      }
    }
  },
  38094: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => wG
    });
    const wG = {
      noaReady: null,
      chunkRequested: null,
      beforeServerListeners: null,
      wasmNetReady: null
    }
  },
  39578: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => yG
    });
    var wG = ZG(333),
      SG = ZG(116),
      LG = ZG(29);

    function yG() {
      LG.h.setItem(wG.cc, LG.h.getItem(wG.cc) + 1), (0, SG.is99NightsCrazyGamesBundle)() && LG.h.setItem(wG._b, LG.h.getItem(wG._b) + 1)
    }
  },
  41031: (GG, bG, ZG) => {
    ZG.d(bG, {
      d: () => kG
    });
    var wG = ZG(40021);

    function SG(GG) {
      return {
        current: () => GG,
        watch: () => () => {}
      }
    }

    function LG() {}
    const yG = Object.freeze([0, 0, 0]),
      kG = {
        states: {
          health: SG({
            health: null,
            maxHealth: null,
            shield: null,
            maxShield: null
          }),
          inventory: SG({
            player: [],
            chestOrCreative: [],
            chest: null,
            creative: !1,
            selectedSlot: 0,
            freeSlots: 0
          }),
          hotbar: SG({
            items: [],
            ammo: 0,
            selectedSlot: null
          }),
          stationItems: SG({
            enchantable: {},
            salvageable: {}
          }),
          itemInfo: SG({}),
          creativeVisibility: SG({
            publicLobby: !1,
            shownInGame: {}
          }),
          aura: SG(null),
          heldItemAim: SG({
            gun: !1,
            aimable: !1,
            chargeName: null
          }),
          crouching: SG(!1),
          gliderBoostFuel: SG(0),
          flight: SG({
            canFly: !1,
            flying: !1
          }),
          crafting: SG({
            focus: null,
            recipes: [],
            detail: null
          }),
          players: SG({
            ids: [],
            byId: {},
            localId: null
          }),
          lobbyLeaderboardRows: SG({}),
          fullInventory: SG(!1),
          crosshairTarget: SG({
            interactPrompt: null,
            blockText: null,
            neededTool: null
          }),
          localPlayerAlive: SG(!0),
          freeCamera: SG({
            allowed: !1,
            movesFly: !1
          }),
          replay: SG(null),
          replayEdits: SG(null),
          replayRecorder: SG({
            recording: !1,
            clipping: !1,
            hasClipBuffer: !1,
            seconds: 0
          }),
          replayVideoExporting: SG(!1)
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
          selectHotbarSlot: LG,
          removeInventoryItem: () => !1,
          swapInventorySlots: () => !1,
          moveInventoryItem: () => !1,
          quickMoveInventoryItem: () => null,
          closeChest: LG,
          setInventoryOpen: LG,
          changeIronChestPasskey: LG,
          dragReplayCamera: LG,
          applyTemporaryThirdPerson: LG,
          holdEmoteWheel: LG,
          recordFlyingMiddleText: LG,
          focusCrafting: LG,
          craftRecipe: () => ({
            uV: 0,
            ZU: null,
            amountAddedToSlot: 0
          }),
          salvageItem: () => !1,
          enchantItem: LG,
          setShopOpen: LG,
          buyShopItem: LG,
          lobbyManage: LG,
          sendChatMessage: LG,
          ignorePlayer: LG,
          reportPlayer: LG,
          reportWorldCodeChat: LG,
          requestDiscordReportKey: LG,
          reportLobbyOrGame: LG,
          playEmote: LG,
          updateMyCosmetic: LG,
          writeOnBoard: LG,
          writeBook: LG,
          writeNameTag: LG,
          setCustomLobbyBlock: LG,
          openIronChest: LG,
          sendCodeCollab: LG,
          clickCodeBlock: LG,
          bindCustomButtonKeys: LG,
          pressCustomButton: LG,
          moveReplayFreecam: LG,
          holdReplayFreecamVertical: LG,
          respawn: LG,
          wakeUp: LG,
          requestLeaderboard: LG,
          completeTask: LG,
          setServerCookie: LG,
          answerUiRequest: LG,
          chooseRewardedAd: LG,
          setCameraZoom: LG,
          setFreeCameraMovesFly: LG,
          setBlockHighlight: LG,
          setCrosshairInteractPrompt: LG,
          setLookSensitivity: LG,
          replayAction: LG,
          setReplayPlaying: LG,
          seekReplay: LG,
          setReplayCameraMode: LG,
          syncReplayCameraMode: LG,
          setReplayCameraKeyframe: LG,
          moveReplayCameraKeyframe: LG,
          deleteReplayCameraKeyframes: LG,
          setReplayPlaybackMark: LG,
          cropReplay: () => !1,
          holdReplayForShaderPackFailure: LG,
          exportReplayVideo: LG,
          toggleRecording: LG,
          saveClip: LG,
          setRecorderPrefs: LG,
          setReplayViewerOpen: LG
        },
        queries: {
          enchantingOffer: () => ({
            perks: [],
            options: []
          }),
          worldCodeAiChunk: () => wG.e,
          worldCodeAiGameState: () => wG.i
        },
        lookups: {
          localPos: () => yG,
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
  41365: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => yG,
      d: () => LG
    });
    var wG = ZG(2138),
      SG = ZG(982);

    function LG(GG, bG) {
      return null !== GG.gameSource && (0, wG.p)(bG, GG.gameSource)
    }

    function yG(GG, bG) {
      if (null === GG.gameSource || "" === GG.gameSource || null === bG) return !0;
      const ZG = (0, SG.h)(bG) ? (0, SG.j)(bG) : null;
      return null !== ZG && LG(GG, ZG)
    }
  },
  41336: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => kG
    });
    var wG = ZG(589),
      SG = ZG(41340),
      LG = ZG(41195);
    async function yG(GG) {
      const bG = await (0, SG.j)({
        Helmet: ZG(38369),
        Chestplate: ZG(38375),
        Gauntlets: ZG(38392),
        Leggings: ZG(38379),
        Boots: ZG(38388)
      } [wG.c[GG]]);
      try {
        return (0, LG.n)(bG)
      } finally {
        bG.close()
      }
    }
    const kG = new class {
      constructor() {
        let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : yG,
          bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : SG.o;
        this.decode = GG, this.register = bG, this.decoded = new Map
      }
      warm() {
        for (let GG = 0; GG < wG.c.length; GG++) this.part(GG).catch((bG => {
          console.warn(`The grayscale armour ${wG.c[GG]} image didn't decode ahead of use`, bG)
        }))
      }
      async load(GG, bG) {
        const {
          width: ZG,
          height: LG,
          pixels: yG
        } = await this.part(GG), kG = new ImageData(function(GG, bG) {
          const ZG = new Uint8ClampedArray(GG.length);
          for (let wG = 0; wG < GG.length; wG += 4) ZG[wG] = Math.round(GG[wG] * bG[0] / 255), ZG[wG + 1] = Math.round(GG[wG + 1] * bG[1] / 255), ZG[wG + 2] = Math.round(GG[wG + 2] * bG[2] / 255), ZG[wG + 3] = GG[wG + 3];
          return ZG
        }(yG, function(GG) {
          return [GG >>> 16 & 255, GG >>> 8 & 255, 255 & GG]
        }(bG)), ZG, LG);
        let UG;
        try {
          UG = await createImageBitmap(kG, {
            premultiplyAlpha: "none",
            colorSpaceConversion: "none"
          })
        } catch (YG) {
          throw new SG.b("decode", `grayscale armour ${wG.c[GG]}`, {
            cause: YG
          })
        }
        return {
          id: this.register(UG),
          width: ZG,
          height: LG
        }
      }
      part(GG) {
        const bG = this.decoded.get(GG);
        if (void 0 !== bG) return bG;
        const ZG = this.decode(GG).catch((bG => {
          throw this.decoded.delete(GG), bG instanceof SG.b ? bG : new SG.b("decode", `grayscale armour ${wG.c[GG]}`, {
            cause: bG
          })
        }));
        return this.decoded.set(GG, ZG), ZG
      }
    }
  },
  41333: (GG, bG, ZG) => {
    ZG.d(bG, {
      d: () => yG,
      e: () => dG,
      f: () => VG,
      j: () => pG,
      k: () => hG
    });
    var wG = ZG(41175),
      SG = ZG(41336),
      LG = ZG(41340);
    const yG = 396,
      kG = 1,
      UG = 2,
      YG = 3,
      VG = {
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
      pG = {
        File: 0,
        Item: 1
      },
      fG = 0,
      QG = 1,
      KG = 2;

    function hG(GG) {
      const bG = (0, wG.o)();
      bG.catch((() => {}));
      let SG = null;
      return {
        glbUrl: GG,
        lifeformAtlasUrl: async GG => (await bG).lifeformAtlasUrl(GG),
        armourAtlasUrl: async () => (await ZG.e(207).then((() => ZG(34575)))).armourAtlasUrl,
        capeUrl: async GG => (await bG).capeUrl(GG),
        attachmentImageUrl: async GG => (await bG).attachmentImageUrl(GG),
        blockImageUrl: async GG => (await bG).blockImageUrl(GG),
        groupAtlasUrl: async GG => (await bG).groupAtlasUrl(GG),
        particleTextureUrl: async GG => (await bG).particleTextureUrl(GG),
        particleItemUrl: async GG => (SG ??= ZG.e(38).then((() => ZG(51483))).catch((GG => {
          throw SG = null, GG
        })), (await SG).particleItemUrl(GG))
      }
    }
    class dG {
      constructor(GG, bG) {
        var ZG, yG, kG, UG;
        let YG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        this.sources = GG, this.onFailure = bG, this.loading = new Map, this.glbImages = new Map, this.glbWrittenImages = new Map, this.glbTakenCount = new Map, this.answered = new Map, this.ready = [], this.load = void 0, this.release = void 0, this.fetchFile = void 0, this.greyscaleArmour = void 0, this.pK = !1, this.load = null !== (ZG = YG.load) && void 0 !== ZG ? ZG : (GG, bG) => (0, LG.n)(GG, YG.fetchImage, bG), this.release = null !== (yG = YG.release) && void 0 !== yG ? yG : LG.p, this.fetchFile = null !== (kG = YG.fetchFile) && void 0 !== kG ? kG : GG => (0, wG.g)(GG), this.greyscaleArmour = null !== (UG = YG.greyscaleArmour) && void 0 !== UG ? UG : SG.b
      }
      get waiting() {
        return this.ready.length
      }
      get inFlight() {
        return this.loading.size
      }
      glbWritten(GG, bG) {
        this.glbWrittenImages.set(GG, uG(bG))
      }
      glbTaken(GG, bG) {
        const ZG = this.glbWrittenImages.get(GG);
        this.glbWrittenImages.delete(GG), bG && this.setGlbImages(GG, void 0 !== ZG && ZG.length > 0 ? ZG : void 0)
      }
      setGlbImages(GG, bG) {
        var ZG;
        this.glbTakenCount.set(GG, (null !== (ZG = this.glbTakenCount.get(GG)) && void 0 !== ZG ? ZG : 0) + 1), void 0 === bG ? this.glbImages.delete(GG) : this.glbImages.set(GG, bG);
        const wG = [];
        for (const {
            key: SG
          }
          of this.loading.values()) SG.kind === VG.Glb && SG.word === GG && wG.push(SG);
        for (let SG = this.ready.length - 1; SG >= 0; SG--) {
          const {
            key: bG,
            id: ZG
          } = this.ready[SG];
          bG.kind === VG.Glb && bG.word === GG && (this.ready.splice(SG, 1), null !== ZG && (this.answered.delete(ZG), this.release(ZG)), wG.push(bG))
        }
        this.loadAgain(wG)
      }
      onEvent(GG) {
        if (this.pK) return;
        const bG = new DataView(GG.buffer, GG.byteOffset, GG.byteLength);
        for (let ZG = 0; ZG + 8 <= GG.byteLength; ZG += 8) {
          const GG = bG.getUint8(ZG),
            wG = bG.getUint32(ZG + 4, !0);
          if (GG === YG) {
            this.answered.delete(wG), this.release(wG);
            continue
          }
          const SG = {
            kind: bG.getUint8(ZG + 1),
            index: bG.getUint8(ZG + 2),
            word: wG
          };
          GG === kG ? this.want(SG) : GG === UG && this.loading.delete(JG(SG))
        }
      }
      reload(GG, bG) {
        const ZG = ZG => GG.includes(ZG.kind) && (void 0 === bG || bG(ZG)),
          wG = new Map;
        for (const SG of this.answered.values()) ZG(SG) && wG.set(JG(SG), SG);
        for (const [SG, {
            key: LG
          }] of this.loading) ZG(LG) && wG.set(SG, LG);
        this.loadAgain(wG.values())
      }
      loadAgain(GG) {
        for (const bG of GG) this.loading.delete(JG(bG)), this.want(bG)
      }
      drain(GG) {
        if (null !== GG)
          for (; this.ready.length > 0;) {
            if (!GG(yG, 0, this.ready[0].record)) return;
            this.ready.shift()
          }
      }
      dispose() {
        this.pK = !0, this.loading.clear(), this.ready.length = 0;
        for (const GG of this.answered.keys()) this.release(GG);
        this.answered.clear()
      }
      want(GG) {
        const bG = JG(GG);
        if (this.loading.has(bG)) return;
        const ZG = {
          key: GG
        };
        this.loading.set(bG, ZG), this.loadKey(GG).then((wG => {
          this.pK || this.loading.get(bG) !== ZG ? this.release(wG.id) : (this.loading.delete(bG), this.answered.set(wG.id, GG), this.ready.push({
            record: zG(GG, fG, wG),
            key: GG,
            id: wG.id
          }))
        }), (wG => {
          if (this.pK || this.loading.get(bG) !== ZG) return;
          this.loading.delete(bG), this.onFailure({
            key: GG,
            error: wG
          });
          const SG = wG instanceof LG.b && "decode" === wG.stage ? QG : KG;
          this.ready.push({
            record: zG(GG, SG, null),
            key: GG,
            id: null
          })
        }))
      }
      async loadKey(GG) {
        switch (GG.kind) {
          case VG.Glb:
            return this.load(await this.glbImage(GG), "none");
          case VG.LifeformAtlas:
            return this.load(rG(await this.sources.lifeformAtlasUrl(GG.word), GG), "none");
          case VG.ArmourAtlas:
            return this.load(rG(await this.sources.armourAtlasUrl(), GG), "none");
          case VG.Cape:
            return this.load(rG(await this.sources.capeUrl(GG.word), GG), "none");
          case VG.AttachmentImage:
            return this.load(rG(await this.sources.attachmentImageUrl(GG.word), GG), "none");
          case VG.GroupAtlas:
            return this.load(rG(await this.sources.groupAtlasUrl(GG.word), GG), "none");
          case VG.BlockImage:
            return this.load(rG(await this.sources.blockImageUrl(GG.word), GG), "none");
          case VG.Particle: {
            const bG = await (GG.index === pG.Item ? this.sources.particleItemUrl(GG.word) : this.sources.particleTextureUrl(GG.word));
            return this.load(rG(bG, GG), "flipY")
          }
          case VG.GreyscaleArmour:
            return this.greyscaleArmour.load(GG.index, GG.word);
          default:
            throw new LG.b("fetch", `image kind ${GG.kind}`, {
              cause: null
            })
        }
      }
      async glbImage(GG) {
        var bG;
        let ZG = this.glbImages.get(GG.word);
        if (void 0 === ZG) {
          const bG = this.glbTakenCount.get(GG.word),
            wG = rG(await this.sources.glbUrl(GG.word), GG);
          try {
            ZG = uG(await this.fetchFile(wG))
          } catch (SG) {
            throw new LG.b("fetch", wG, {
              cause: SG
            })
          }
          this.glbTakenCount.get(GG.word) === bG && this.glbImages.set(GG.word, ZG)
        }
        const wG = null === (bG = ZG) || void 0 === bG ? void 0 : bG[GG.index];
        if (!wG) throw new LG.b("decode", `image ${GG.index} of file ${2147483647&GG.word}`, {
          cause: null
        });
        return wG
      }
    }

    function JG(GG) {
      let {
        kind: bG,
        index: ZG,
        word: wG
      } = GG;
      return `${bG}:${ZG}:${wG}`
    }

    function rG(GG, bG) {
      if (null === GG) throw new LG.b("fetch", `no URL for image ${JG(bG)}`, {
        cause: null
      });
      return GG
    }

    function zG(GG, bG, ZG) {
      var wG, SG, LG;
      const yG = new Uint8Array(16),
        kG = new DataView(yG.buffer);
      return kG.setUint8(0, GG.kind), kG.setUint8(1, GG.index), kG.setUint8(2, bG), kG.setUint32(4, GG.word, !0), kG.setUint32(8, null !== (wG = null === ZG || void 0 === ZG ? void 0 : ZG.id) && void 0 !== wG ? wG : 0, !0), kG.setUint16(12, Math.min(null !== (SG = null === ZG || void 0 === ZG ? void 0 : ZG.width) && void 0 !== SG ? SG : 0, 65535), !0), kG.setUint16(14, Math.min(null !== (LG = null === ZG || void 0 === ZG ? void 0 : ZG.height) && void 0 !== LG ? LG : 0, 65535), !0), yG
    }
    const EG = 1179937895,
      oG = 1313821514,
      XG = 5130562;

    function uG(GG) {
      var bG;
      const ZG = new DataView(GG.buffer, GG.byteOffset, GG.byteLength);
      if (GG.byteLength < 20 || ZG.getUint32(0, !0) !== EG || ZG.getUint32(16, !0) !== oG) return [];
      let wG, SG = 20 + ZG.getUint32(12, !0);
      try {
        wG = JSON.parse((new TextDecoder).decode(GG.subarray(20, SG)))
      } catch {
        return []
      }
      for (; SG + 8 <= GG.byteLength && ZG.getUint32(SG + 4, !0) !== XG;) SG += 8 + ZG.getUint32(SG, !0);
      const LG = null !== (bG = wG.images) && void 0 !== bG ? bG : [];
      if (0 === LG.length || SG + 8 > GG.byteLength) return LG.map((() => null));
      const yG = GG.subarray(SG + 8, Math.min(GG.byteLength, SG + 8 + ZG.getUint32(SG, !0)));
      return LG.map((GG => {
        var bG, ZG, SG;
        const LG = void 0 === GG.bufferView || null === (bG = wG.bufferViews) || void 0 === bG ? void 0 : bG[GG.bufferView];
        if (!LG || 0 !== (null !== (ZG = LG.buffer) && void 0 !== ZG ? ZG : 0) || void 0 === LG.byteLength) return null;
        const kG = null !== (SG = LG.byteOffset) && void 0 !== SG ? SG : 0,
          UG = kG + LG.byteLength;
        return UG <= yG.byteLength ? yG.slice(kG, UG) : null
      }))
    }
  },
  41034: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => yG,
      e: () => LG,
      f: () => SG
    });
    let wG = null;

    function SG(GG) {
      wG = GG
    }

    function LG(GG) {
      wG === GG && (wG = null)
    }

    function yG() {
      var GG;
      null === (GG = wG) || void 0 === GG || GG()
    }
  },
  36936: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => VG,
      g: () => fG,
      i: () => JG,
      l: () => YG
    });
    var wG = ZG(17),
      SG = ZG(2380),
      LG = ZG(2388),
      yG = ZG(2391),
      kG = ZG(2465),
      UG = ZG(19);

    function YG(GG, bG) {
      return (!(0, yG.e)() || 0 === GG && 0 === bG) && (0, LG.y)(SG.g.Joystick, 0, GG, bG, 0)
    }
    const VG = {
      Action1: 1,
      Action2: 2,
      Action3: 3,
      Attack: 4,
      Use: 5,
      Interact: 6,
      Boost: 7
    };

    function pG(GG) {
      return GG.classList.contains("TouchKeyHit") && QG() ? null : GG.firstElementChild
    }

    function fG(GG) {
      return GG.classList.contains("TouchKeyHit") && !GG.classList.contains("CanvasZone") ? {
        whole: !QG(),
        keyBox: null
      } : {
        whole: !1,
        keyBox: KG(pG(GG))
      }
    }

    function QG() {
      return document.documentElement.classList.contains(kG.m)
    }

    function KG(GG) {
      return !(GG instanceof HTMLElement) || GG.offsetWidth <= 0 || GG.offsetHeight <= 0 ? null : {
        width: GG.offsetWidth,
        height: GG.offsetHeight
      }
    }

    function hG(GG, bG) {
      const ZG = GG => Math.min(65535, Math.round(4 * GG));
      return (ZG(GG) | ZG(bG) << 16) >>> 0
    }

    function dG(GG) {
      return {
        x: GG.left + GG.width / 2,
        y: GG.top + GG.height / 2,
        radius: Math.min(GG.width, GG.height) / 2
      }
    }
    const JG = new class {
      constructor(GG) {
        this.write = GG, this.elements = new Map, this.canvasLeft = 0, this.canvasTop = 0
      }
      set(GG, bG) {
        let ZG = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        bG ? this.elements.set(GG, {
          element: bG,
          hidden: ZG
        }) : this.elements.delete(GG), this.measureOne(GG)
      }
      measure() {
        let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
          left: this.canvasLeft,
          top: this.canvasTop
        };
        this.canvasLeft = GG.left, this.canvasTop = GG.top;
        for (const bG of this.elements.keys()) this.measureOne(bG)
      }
      hitZone(GG, bG) {
        let ZG = null,
          wG = 1;
        for (const SG of this.elements.keys()) {
          const LG = this.shown(SG);
          if (!LG) continue;
          const {
            rect: yG,
            element: kG
          } = LG, UG = dG(yG), YG = Math.max(0, yG.width / 2 - UG.radius), VG = Math.max(0, yG.height / 2 - UG.radius), fG = Math.max(0, Math.abs(GG - UG.x) - YG), QG = Math.max(0, Math.abs(bG - UG.y) - VG), hG = kG.firstElementChild;
          let JG = Math.hypot(fG, QG) / UG.radius;
          const rG = KG(pG(kG));
          rG && (JG = Math.min(JG, Math.max(2 * Math.abs(GG - UG.x) / rG.width, 2 * Math.abs(bG - UG.y) / rG.height))), JG < wG && (ZG = {
            code: SG,
            element: kG,
            key: hG,
            ...UG
          }, wG = JG)
        }
        return ZG
      }
      measureOne(GG) {
        const bG = this.shown(GG);
        if (!bG) return void this.write(SG.g.TouchZone, GG, 0, 0, 0);
        const {
          rect: ZG,
          element: wG
        } = bG, LG = dG(ZG);
        this.write(SG.g.TouchZone, GG, LG.x - this.canvasLeft, LG.y - this.canvasTop, hG(ZG.width, ZG.height));
        const yG = KG(pG(wG));
        this.write(SG.g.TouchZone, 256 | GG, 0, 0, yG ? hG(yG.width, yG.height) : 0)
      }
      shown(GG) {
        const bG = this.elements.get(GG),
          ZG = wG.e.get("worldPanelHud");
        if (!bG || bG.hidden || "none" === ZG) return null;
        const SG = bG.element.getBoundingClientRect();
        return SG.width <= 0 || SG.height <= 0 ? null : {
          rect: SG,
          element: bG.element
        }
      }
    }(LG.y);
    (0, UG.p)(kG.e, (() => {
      JG.measure()
    }))
  },
  41088: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => UG,
      e: () => YG
    });
    var wG = ZG(41217),
      SG = ZG(39461),
      LG = ZG(36801),
      yG = ZG(41092),
      kG = ZG(41065);
    const UG = wG.d.timeForPlayerToConnect - 1e4;
    async function YG(GG, bG, ZG, wG) {
      let UG;
      try {
        UG = await GG.getTrafficCode()
      } catch (KG) {
        throw console.error("[bloxd-wasm-client] could not get a traffic code", KG), new kG.r(KG)
      }
      const {
        gameNameWithVariation: YG,
        lobbyName: VG
      } = bG, pG = () => {
        const bG = (0, LG.g)(GG, YG, VG, UG, (GG => {
          var bG;
          return null !== (bG = null === ZG || void 0 === ZG ? void 0 : ZG.isUsingCustomGameTexturePack(GG)) && void 0 !== bG && bG
        }));
        bG.joinOptions.wasmClient = !0;
        const SG = (0, yG.E)();
        return null !== SG && (bG.joinOptions.renderBackend = SG), bG.joinOptions.joinAdHold = wG, bG
      }, {
        roomName: fG,
        joinOptions: QG
      } = pG();
      return {
        endpoint: bG.endpoint,
        roomName: fG,
        joinOptions: QG,
        session: {
          gameNameWithVariation: YG,
          lobbyName: VG,
          playerDbId: GG.whamm
        },
        optionsAfterRefusal: async bG => await (0, SG.b)(GG, bG) ? pG().joinOptions : null
      }
    }
  },
  41352: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => VG,
      e: () => LG,
      i: () => pG,
      l: () => yG
    });
    var wG = ZG(41333),
      SG = ZG(41175);
    const LG = new class {
      constructor() {
        this.page = null, this.session = void 0, this.follower = null, this.isWanted = !1, this.listeners = new Set, this.pageListeners = new Set, this.wantedListeners = new Set
      }
      get current() {
        return void 0 === this.session ? this.page : this.session
      }
      setPageFiles(GG) {
        this.change((() => {
          this.page = GG
        }))
      }
      setSessionFiles(GG) {
        const bG = void 0 !== this.session && void 0 === GG;
        if (this.change((() => {
            this.session = GG
          })), bG)
          for (const ZG of [...this.pageListeners]) ZG()
      }
      showsPage() {
        return void 0 === this.session
      }
      onPageShown(GG) {
        return this.pageListeners.add(GG), () => {
          this.pageListeners.delete(GG)
        }
      }
      setFollower(GG) {
        this.follower = GG, this.startFollower()
      }
      wanted() {
        this.isWanted = !0;
        for (const GG of [...this.wantedListeners]) GG();
        this.startFollower()
      }
      onWanted(GG) {
        return this.wantedListeners.add(GG), () => {
          this.wantedListeners.delete(GG)
        }
      }
      onChange(GG) {
        return this.listeners.add(GG), () => {
          this.listeners.delete(GG)
        }
      }
      startFollower() {
        const GG = this.follower;
        this.isWanted && null !== GG && (this.follower = null, GG((() => {
          this.follower = GG
        })))
      }
      change(GG) {
        const bG = this.current;
        if (GG(), this.current !== bG)
          for (const ZG of this.listeners) ZG()
      }
    };

    function yG(GG, bG) {
      return {
        ...GG,
        armourAtlasUrl: () => {
          var ZG, wG;
          return null !== (ZG = null === (wG = bG()) || void 0 === wG ? void 0 : wG.armourAtlasUrl()) && void 0 !== ZG ? ZG : GG.armourAtlasUrl()
        },
        lifeformAtlasUrl: ZG => UG(bG(), (GG => GG.LIFEFORM_ATLAS_PATHS[ZG]), (() => GG.lifeformAtlasUrl(ZG))),
        groupAtlasUrl: ZG => UG(bG(), (GG => GG.GROUP_ATLAS_PATHS[ZG]), (() => GG.groupAtlasUrl(ZG))),
        particleItemUrl: wG => YG(bG(), (async () => {
          const GG = await ZG.e(38).then((() => ZG(51483))).catch((() => null));
          return (null === GG || void 0 === GG ? void 0 : GG.particleItemSprite(wG)) || null
        }), (() => GG.particleItemUrl(wG))),
        blockImageUrl: ZG => YG(bG(), (async () => {
          var GG, bG;
          return null !== (GG = null === (bG = await kG()) || void 0 === bG ? void 0 : bG.blockImageName(ZG)) && void 0 !== GG ? GG : null
        }), (() => GG.blockImageUrl(ZG)))
      }
    }

    function kG() {
      return (0, SG.o)().catch((() => null))
    }

    function UG(GG, bG, ZG) {
      return YG(GG, (async () => {
        var GG;
        const ZG = await kG(),
          wG = null === ZG ? null : bG(ZG),
          SG = null !== (GG = null === wG || void 0 === wG ? void 0 : wG.slice(wG.lastIndexOf("/") + 1)) && void 0 !== GG ? GG : null;
        return "Player_Atlas" === SG ? null : SG
      }), ZG)
    }
    async function YG(GG, bG, ZG) {
      if (null !== GG) {
        const ZG = await bG(),
          wG = null === ZG ? null : GG.textureUrl(ZG);
        if (null !== wG) return wG
      }
      return ZG()
    }
    const VG = 0;

    function pG(GG) {
      const bG = [wG.f.ArmourAtlas, wG.f.LifeformAtlas, wG.f.GroupAtlas, wG.f.BlockImage, wG.f.Particle];
      GG.reload(bG, (GG => {
        switch (GG.kind) {
          case wG.f.Particle:
            return GG.index === wG.j.Item;
          case wG.f.LifeformAtlas:
            return GG.word !== VG;
          default:
            return !0
        }
      }))
    }
  },
  41226: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => wG,
      g: () => kG,
      h: () => yG,
      i: () => SG,
      m: () => LG
    });
    const wG = 1e3;

    function SG() {
      UG((() => {
        window.location.reload()
      }))
    }

    function LG() {
      return new Promise((() => {}))
    }

    function yG(GG) {
      UG((() => {
        window.location.replace(GG(window.location.href))
      }))
    }

    function kG(GG) {
      Promise.resolve().then((() => ZG(86))).then((bG => {
        let {
          currentUrl: ZG
        } = bG;
        yG((() => ZG.mergeSearchParamsInto(GG)))
      }), (() => {
        yG((() => GG))
      }))
    }

    function UG(GG) {
      null !== window.onbeforeunload ? Promise.resolve().then((() => ZG(1702))).then((bG => {
        let {
          prepareForUnloadWithoutConfirmation: ZG
        } = bG;
        try {
          ZG()
        } catch (wG) {
          console.warn("[bloxd-wasm-client] prepareForUnloadWithoutConfirmation threw: leaving plainly", wG), window.onbeforeunload = null
        }
        GG()
      }), (() => {
        window.onbeforeunload = null, GG()
      })) : GG()
    }
  },
  5074: (GG, bG, ZG) => {
    function wG(GG, bG) {
      return SG(GG, bG)
    }

    function SG(GG, bG) {
      if (GG === bG) return !0;
      if ("object" !== typeof GG || "object" !== typeof bG || null === GG || null === bG || Array.isArray(GG) !== Array.isArray(bG)) return !1;
      const ZG = GG,
        wG = bG,
        LG = Object.keys(ZG);
      return LG.length === Object.keys(wG).length && LG.every((GG => Object.prototype.hasOwnProperty.call(wG, GG) && SG(ZG[GG], wG[GG])))
    }
    ZG.d(bG, {
      c: () => wG
    })
  },
  41299: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => XG,
      d: () => EG,
      g: () => hG,
      i: () => KG
    });
    var wG = ZG(1786),
      SG = ZG(1169),
      LG = ZG(39456),
      yG = ZG(36826),
      kG = ZG(39478),
      UG = ZG(41065);
    const YG = {
        "X-Requested-With": "XMLHtttpRequest"
      },
      VG = 3,
      pG = [500, 1500];

    function fG(GG) {
      const bG = new URL(GG);
      return {
        secure: "https:" === bG.protocol || "wss:" === bG.protocol,
        host: bG.host,
        pathname: bG.pathname.replace(/\/+$/, ""),
        search: bG.searchParams.toString()
      }
    }

    function QG(GG, bG, ZG) {
      const {
        secure: wG,
        host: SG,
        pathname: LG,
        search: yG
      } = fG(GG);
      return `${wG?"https":"http"}://${SG}${LG}/matchmake/${bG}/${encodeURIComponent(ZG)}${yG?`?${yG}`:""}`
    }

    function KG(GG, bG) {
      var ZG;
      const wG = null !== (ZG = bG.protocol) && void 0 !== ZG ? ZG : "ws";
      if ("ws" !== wG) throw new Error(`seat reservation asks for the ${wG} transport`);
      const {
        secure: SG,
        host: LG,
        pathname: yG,
        search: kG
      } = fG(GG), UG = new URLSearchParams(kG);
      UG.append("sessionId", bG.sessionId), bG.reconnectionToken && UG.append("reconnectionToken", bG.reconnectionToken);
      return `${SG?"wss":"ws"}://${bG.room.publicAddress||`${LG}${yG}`}/${bG.room.processId}/${bG.room.roomId}?${UG.toString()}`
    }
    async function hG(GG, bG, ZG) {
      var kG;
      let YG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const fG = null !== (kG = YG.sleep) && void 0 !== kG ? kG : wG.e,
        KG = new SG.d(YG.signal),
        hG = new yG.d((() => {
          (0, SG.j)(KG.controller, new yG.g("seat"))
        })),
        {
          signal: zG
        } = KG;
      try {
        const wG = await (0, LG.g)((() => async function(GG, bG, ZG, wG) {
          var LG;
          const {
            signal: yG,
            sleep: kG
          } = wG, YG = QG(GG, "joinOrCreate", bG), fG = JSON.stringify(ZG);
          let KG = null;
          for (let QG = 0; QG < VG; QG++) {
            var hG;
            if (QG > 0) await kG(null !== (hG = pG[QG - 1]) && void 0 !== hG ? hG : 1500, yG);
            let GG;
            (0, SG.p)(yG);
            try {
              GG = await JG(YG, fG, wG)
            } catch (zG) {
              (0, SG.p)(yG), KG = dG(zG);
              continue
            }
            const {
              response: bG,
              answer: ZG,
              refusal: LG,
              lost: VG
            } = GG;
            if (null === VG) {
              if (null !== LG) throw rG(LG, ZG);
              if (bG.ok && null !== ZG && uG(ZG)) return ZG;
              KG = new UG.q(`seat request answered HTTP ${bG.status}${null===ZG?" without JSON":" without a seat"}`, !1, void 0, bG.status)
            } else KG = dG(VG.error)
          }
          throw null !== (LG = KG) && void 0 !== LG ? LG : new UG.q("seat request made no attempt", !1)
        }(GG, bG, ZG, {
          ...YG,
          signal: zG,
          sleep: fG
        })), zG, fG);
        return hG.answered(), wG
      } finally {
        hG.stop(), KG.unfollow()
      }
    }

    function dG(GG) {
      return new UG.q(GG instanceof Error ? GG.message : String(GG), !0, GG)
    }
    async function JG(GG, bG, ZG) {
      var wG;
      const {
        signal: LG
      } = ZG, yG = null !== (wG = ZG.fetch) && void 0 !== wG ? wG : fetch, kG = await yG(GG, {
        method: "POST",
        headers: {
          ...YG,
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: bG,
        credentials: "include",
        signal: LG
      }), {
        answer: UG,
        lost: VG
      } = await async function(GG) {
        try {
          const bG = await GG.json();
          return {
            answer: "object" === typeof bG && null !== bG ? bG : null,
            lost: null
          }
        } catch (bG) {
          return {
            answer: null,
            lost: bG instanceof SyntaxError ? null : {
              error: bG
            }
          }
        }
      }(kG), pG = null !== UG && "string" === typeof UG.error ? UG.error : null;
      var fG;
      null !== pG && (null === (fG = ZG.onRefusal) || void 0 === fG || fG.call(ZG));
      return (0, SG.p)(LG), {
        response: kG,
        answer: UG,
        refusal: pG,
        lost: VG
      }
    }

    function rG(GG, bG) {
      return new UG.k(GG, "number" === typeof(null === bG || void 0 === bG ? void 0 : bG.code) ? bG.code : 0, (0, kG.s)(GG).text)
    }
    class zG extends Error {
      constructor(GG, bG) {
        super(GG), this.code = bG, this.name = "SeatHttpError"
      }
    }
    async function EG(GG, bG, ZG) {
      let wG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const {
        response: SG,
        answer: LG,
        refusal: yG,
        lost: kG
      } = await JG(QG(GG, "reconnect", bG), JSON.stringify({
        reconnectionToken: ZG
      }), wG);
      if (null !== kG) throw kG.error;
      if (!SG.ok) {
        const GG = null !== LG && "number" === typeof LG.code && 0 !== LG.code ? LG.code : SG.status;
        throw new zG(`the seat's reconnect was refused: ${null!==yG&&void 0!==yG?yG:`HTTP ${SG.status}`}`, GG)
      }
      if (null !== yG) throw rG(yG, LG);
      if (null === LG || !uG(LG)) throw new Error("the seat's reconnect answered " + (null === LG ? "without JSON" : "without a seat"));
      return {
        ...LG,
        reconnectionToken: ZG
      }
    }
    const oG = 10;

    function XG(GG) {
      if (GG.byteLength < 2 || GG[0] !== oG) return null;
      const bG = 2 + GG[1];
      return bG > GG.byteLength ? null : (new TextDecoder).decode(GG.subarray(2, bG))
    }

    function uG(GG) {
      const bG = GG.room;
      return "string" === typeof GG.sessionId && "object" === typeof bG && null !== bG && "string" === typeof bG.roomId && "string" === typeof bG.processId && "string" === typeof bG.name
    }
  },
  40976: (GG, bG, ZG) => {
    ZG.d(bG, {
      $: () => lG,
      A: () => uG,
      E: () => FG,
      I: () => EG,
      L: () => oG,
      P: () => dG,
      T: () => WG,
      W: () => aG,
      Z: () => KG,
      b: () => SG,
      cb: () => rG,
      db: () => JG,
      e: () => cG,
      gb: () => zG,
      i: () => vG,
      jb: () => XG,
      m: () => QG,
      p: () => hG,
      t: () => IG,
      v: () => iG,
      x: () => mG,
      y: () => CG
    });
    var wG = ZG(2984);
    const SG = {
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

    function LG(GG, bG) {
      return !ArrayBuffer.isView(GG) || GG instanceof DataView ? Array.isArray(GG) ? GG.map((GG => bG(GG))) : GG : Array.from(GG, (GG => bG(GG)))
    }

    function yG(GG) {
      if ("string" !== typeof GG) return GG;
      for (let bG = 0; bG < GG.length; bG++) {
        const ZG = GG.charCodeAt(bG);
        if (ZG >= 55296 && ZG <= 57343) return UG.decode(kG.encode(GG))
      }
      return GG
    }
    const kG = new TextEncoder,
      UG = new TextDecoder;

    function YG(GG) {
      return GG
    }
    let VG;

    function pG(GG) {
      return null === GG || "object" !== typeof GG ? GG : [yG(GG.Uk), yG(GG.Yk)]
    }

    function fG(GG) {
      return null === GG || "object" !== typeof GG ? GG : [LG(GG.eS, YG), LG(GG.Wk, YG)]
    }

    function QG(GG) {
      return null === (bG = GG) || "object" !== typeof bG ? bG : [yG(bG.vV), yG(bG.aV)];
      var bG
    }

    function KG(GG) {
      return null === (bG = GG) || "object" !== typeof bG ? bG : [bG.id, bG.rV];
      var bG
    }

    function hG(GG) {
      return null === (bG = GG) || "object" !== typeof bG ? bG : [bG.BS, yG(bG.bL), bG.ZL, yG(bG.LL), bG.YL, bG.VL, bG.mV, yG(bG.IV), yG(bG.FV)];
      var bG
    }

    function dG(GG) {
      return null === (bG = GG) || "object" !== typeof bG ? bG : [LG(bG.xy, YG), bG.Gk];
      var bG
    }

    function JG(GG) {
      return null === (bG = GG) || "object" !== typeof bG ? bG : [LG(bG.Dy, (GG => yG(GG))), yG(bG.Ny), bG.Oy];
      var bG
    }

    function rG(GG) {
      return null === (bG = GG) || "object" !== typeof bG ? bG : [LG(bG.uU, YG), yG(bG.iU), bG.CU];
      var bG
    }

    function zG(GG) {
      return null === (bG = GG) || "object" !== typeof bG ? bG : [yG(bG.FL), yG(bG.vL)];
      var bG
    }

    function EG(GG) {
      return null === (bG = GG) || "object" !== typeof bG ? bG : [yG(bG.Ak)];
      var bG
    }

    function oG(GG) {
      return yG(GG)
    }

    function XG(GG) {
      return null === (bG = GG) || "object" !== typeof bG ? bG : [yG(bG.hV), yG(bG.dV), yG(bG.Uk), yG(bG.Yk)];
      var bG
    }

    function uG(GG) {
      return pG(GG)
    }

    function iG(GG) {
      return pG(GG)
    }

    function CG(GG) {
      return null === (bG = GG) || "object" !== typeof bG ? bG : [yG(bG.hU)];
      var bG
    }

    function WG(GG) {
      return GG
    }

    function mG(GG) {
      return null === (bG = GG) || "object" !== typeof bG ? bG : [yG(bG.yk), yG(bG.kk)];
      var bG
    }

    function IG(GG) {
      return yG(GG)
    }

    function FG(GG) {
      return fG(GG)
    }

    function vG(GG) {
      return fG(GG)
    }

    function aG(GG) {
      return null === (bG = GG) || "object" !== typeof bG ? bG : [yG(bG.WU)];
      var bG
    }

    function cG(GG) {
      return (VG ??= (0, wG.c)().map((GG => GG.name)), VG).map((bG => {
        return "string" === typeof(ZG = GG[bG]) ? yG(ZG) : LG(ZG, YG);
        var ZG
      }))
    }

    function lG(GG) {
      return null === (bG = GG) || "object" !== typeof bG ? bG : [bG.fU, bG.QU, bG.KU];
      var bG
    }
  },
  41359: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => LG
    });
    var wG = ZG(41365),
      SG = ZG(41352);
    const LG = new class {
      constructor(GG) {
        this.pack = GG, this.game = void 0, this.settle = null, this.hold = null, this.endedWhileHeld = !1, this.gameListeners = new Set, GG.onWanted((() => {
          this.release()
        }))
      }
      setGame(GG) {
        if (void 0 === GG && null !== this.hold) return void(this.endedWhileHeld = !0);
        this.hold = null, this.endedWhileHeld = !1;
        const bG = this.inGame();
        if (this.game = GG, this.update(), this.inGame() !== bG)
          for (const ZG of this.gameListeners) ZG()
      }
      inGame() {
        return void 0 !== this.game
      }
      onGameChange(GG) {
        return this.gameListeners.add(GG), () => {
          this.gameListeners.delete(GG)
        }
      }
      unwantedLeave(GG) {
        GG && void 0 !== this.game ? this.hold = {
          game: this.game
        } : this.release()
      }
      rejoinHold() {
        return this.hold
      }
      releaseHold(GG) {
        null !== GG && GG === this.hold && this.release()
      }
      release() {
        if (null === this.hold) return;
        const GG = this.endedWhileHeld;
        this.hold = null, this.endedWhileHeld = !1, GG && this.setGame(void 0)
      }
      setSettled(GG) {
        this.settle = GG, this.update()
      }
      update() {
        void 0 === this.game ? this.pack.setSessionFiles(void 0) : null !== this.settle && (0, wG.b)(this.settle.state, this.game) && this.pack.setSessionFiles(this.settle.files)
      }
    }(SG.e)
  },
  5071: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => yG,
      d: () => kG
    });
    var wG = ZG(2138),
      SG = ZG(5074);
    let LG = null;

    function yG(GG) {
      LG = {
        pack: GG.metaData.id === wG.e ? null : GG
      }
    }

    function kG(GG) {
      return !(null === LG || !(0, SG.c)(LG.pack, GG)) && (LG = null, !0)
    }
  },
  41048: (GG, bG, ZG) => {
    ZG.r(bG), ZG.d(bG, {
      followPageUiPack: () => vV,
      packForGame: () => FV,
      playWasmGame: () => eV,
      prefetchWasmPreviews: () => FU,
      setGamePackConfirm: () => nY,
      startWasmPlay: () => PV,
      startWasmPreviews: () => IU
    });
    var wG = ZG(188),
      SG = ZG(1202),
      LG = ZG(140),
      yG = ZG(39487),
      kG = ZG(1895),
      UG = ZG(19),
      YG = ZG(4695),
      VG = ZG(1275),
      pG = ZG(1682),
      fG = ZG(1287),
      QG = ZG(39663),
      KG = ZG(1260),
      hG = ZG(1781),
      dG = ZG(2910);
    let JG = null,
      rG = null,
      zG = null,
      EG = !1;

    function oG() {
      JG ??= performance.now()
    }
    const XG = {
      ready: () => {
        hG.d.markAdmissionAwaited()
      },
      adEnded: () => {
        hG.d.markJoinAdEnded()
      },
      admitted: () => {
        hG.d.markAdmitted()
      }
    };
    var uG = ZG(39678),
      iG = ZG(39578),
      CG = ZG(36808),
      WG = ZG(39456),
      mG = ZG(8957),
      IG = ZG(36826),
      FG = ZG(41056),
      vG = ZG(4800),
      aG = ZG(40971),
      cG = ZG(41031),
      lG = ZG(40976);
    const jG = {
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

    function PG(GG) {
      const bG = {
        ...cG.d[GG]
      };
      for (const ZG of Object.keys(jG[GG])) delete bG[ZG];
      return bG
    }

    function MG() {
      var GG, bG;
      return null === (GG = null === (bG = (0, aG.f)()) || void 0 === bG ? void 0 : bG.localPlayerAlive()) || void 0 === GG || GG
    }

    function AG() {
      var GG, bG;
      return null !== (GG = null === (bG = (0, aG.f)()) || void 0 === bG ? void 0 : bG.localDeaths()) && void 0 !== GG ? GG : null
    }
    const sG = {
        current: MG,
        watch: GG => {
          let bG = MG(),
            ZG = AG();
          return (0, vG.t)((() => {
            const wG = MG(),
              SG = AG(),
              LG = null !== SG && null !== ZG && SG !== ZG;
            ZG = SG, LG ? (bG || GG(!0), GG(!1), wG && GG(!0), bG = wG) : wG !== bG && (bG = wG, GG(wG))
          }))
        }
      },
      qG = {
        states: {
          ...PG("states"),
          localPlayerAlive: sG
        },
        events: {
          ...PG("events"),
          localPlayerAliveSet: {
            watch: sG.watch
          }
        },
        commands: {
          ...PG("commands"),
          respawn: () => {
            var GG;
            null === (GG = (0, aG.f)()) || void 0 === GG || GG.respawn()
          },
          playEmote: GG => {
            var bG;
            null === (bG = (0, aG.f)()) || void 0 === bG || bG.send(lG.b.PlayEmote, (0, lG.I)({
              Ak: GG
            }))
          },
          applyTemporaryThirdPerson: GG => {
            var bG;
            let {
              durationMs: ZG
            } = GG;
            null === (bG = (0, aG.f)()) || void 0 === bG || bG.thirdPersonFor(ZG)
          },
          bindCustomButtonKeys: GG => {
            var bG;
            null === (bG = (0, aG.f)()) || void 0 === bG || bG.bindCustomButtonKeys(GG)
          },
          pressCustomButton: GG => {
            var bG;
            let {
              id: ZG,
              down: wG
            } = GG;
            null === (bG = (0, aG.f)()) || void 0 === bG || bG.pressCustomButton(ZG, wG)
          },
          setLookSensitivity: () => {},
          wakeUp: GG => {
            const bG = (0, lG.W)({
                WU: GG
              }),
              ZG = () => {
                const GG = (0, aG.f)();
                return !(null !== GG && void 0 !== GG && GG.isSessionLive) || GG.send(lG.b.StopSleeping, bG)
              };
            if (!ZG()) {
              const GG = (0, vG.t)((() => {
                ZG() && GG()
              }))
            }
          },
          setCameraZoom: GG => {
            var bG;
            null === (bG = (0, aG.f)()) || void 0 === bG || bG.setCameraZoom(GG)
          }
        },
        queries: PG("queries"),
        lookups: {
          ...PG("lookups"),
          cameraZoom: () => {
            var GG, bG;
            return null !== (GG = null === (bG = (0, aG.f)()) || void 0 === bG ? void 0 : bG.cameraZoom()) && void 0 !== GG ? GG : 0
          }
        }
      };
    var nG = ZG(39478),
      gG = ZG(41065),
      eG = ZG(41072),
      RG = ZG(41088),
      TG = ZG(1213),
      HG = ZG(86),
      tG = ZG(4537),
      DG = ZG(3728),
      NG = ZG(1131);
    const OG = {
      my: () => (0, TG.h)(),
      inbuiltOverwritten: () => tG.e,
      reflectApplyHit: () => NG.b,
      definerHit: () => HG.currentUrl.c,
      emitReplaced: () => (0, UG.b)(),
      confirmMesh: () => (0, DG.b)(),
      confirmMeshHitStack: () => (0, DG.e)()
    };
    var xG = ZG(41077),
      BG = ZG(41226);
    var Gb = ZG(17),
      bb = ZG(1903),
      Zb = ZG(1956),
      wb = ZG(1583),
      Sb = ZG(2009),
      Lb = ZG(1151),
      yb = ZG(1204),
      kb = ZG(41235);

    function Ub() {
      return yb.d.get().getCurrentLanguageCode()
    }

    function Yb(GG) {
      const bG = () => {
        GG({
          translate: (GG, bG) => (0, Lb.q)(Ub(), GG, bG),
          keyBindingText: GG => {
            const bG = (0, Zb.y)(GG, Gb.e.get("isTouchScreen"));
            return null !== bG ? (0, Lb.r)(Ub(), bG.translationKey, bG.params) : (0, Zb.t)((0, Zb.x)(GG))
          },
          isFriend: Sb.f,
          hiddenNames: bb.b.shown,
          loadsFontRest: (0, kb.e)(Ub())
        })
      };
      let ZG = !1;
      const wG = () => {
          const GG = Ub();
          (0, Lb.i)(GG).then((() => {
            ZG || GG !== Ub() || bG()
          }))
        },
        SG = () => wb.b.getSocialState().friends.map((GG => GG.name.toLowerCase())).sort().join(" ");
      let LG = SG();
      bG(), wG();
      const yG = [(0, yb.h)((() => {
        bG(), wG()
      })), (0, UG.p)("customBindingsChanged", bG), (0, UG.p)("appManagerUpdated|isTouchScreen", bG), (0, Sb.e)((() => {
        const GG = SG();
        GG !== LG && (LG = GG, bG())
      })), bb.b.subscribe(bG)];
      return () => {
        ZG = !0;
        for (const GG of yG) GG()
      }
    }
    var Vb = ZG(612),
      pb = ZG(982),
      fb = ZG(1931),
      Qb = ZG(333),
      Kb = ZG(171),
      hb = ZG(2868),
      db = ZG(2872),
      Jb = ZG(39136),
      rb = ZG(4708),
      zb = ZG(41248),
      Eb = ZG(666),
      ob = ZG(631),
      Xb = ZG(2947),
      ub = ZG(1923),
      ib = ZG(3737),
      Cb = ZG(3265);
    let Wb = null;
    var mb = ZG(1163),
      Ib = ZG(1169),
      Fb = ZG(4442),
      vb = ZG(3437),
      ab = ZG(47),
      cb = ZG(326),
      lb = ZG(318),
      jb = ZG(41263),
      Pb = ZG(4804),
      Mb = ZG(39165);
    var Ab = ZG(38094),
      sb = ZG(41271);
    class qb {
      constructor(GG, bG) {
        this.showView = GG, this.holdForAd = bG
      }
      pointerUnlockRequestsChanged() {
        (0, jb.C)()
      }
      pointerLockDebugEntries() {
        return [{
          label: "Locked to the canvas",
          value: String((0, jb.s)())
        }]
      }
      setGameViewShown(GG) {
        this.showView(GG)
      }
      setGameView(GG) {
        (0, sb.h)(GG)
      }
      videoAdHold(GG, bG) {
        this.holdForAd(GG, bG)
      }
    }
    class nb {
      leave(GG) {
        ! function(GG) {
          if (null !== (0, fG.d)().websocketUrl) try {
            (0, vG.I)().leaveGame(GG)
          } finally {
            (0, fG.q)({
              websocketUrl: null
            })
          }
        }(GG)
      }
      isReplay() {
        return !1
      }
    }
    class gb {
      watchFrameStarts(GG) {
        return (0, vG.p)(GG)
      }
      watchFrames(GG) {
        return (0, vG.n)(GG)
      }
      watchTicks(GG) {
        return (0, vG.t)(GG)
      }
    }
    var eb = ZG(41278);

    function Rb(GG) {
      return GG >= 0 ? Math.min(1, GG) : 0
    }

    function Tb(GG, bG) {
      const {
        fade: ZG
      } = GG;
      return null === ZG || bG - ZG.at >= ZG.ms ? GG.volume : ZG.from + (GG.volume - ZG.from) * Math.max(0, (bG - ZG.at) / ZG.ms)
    }

    function Hb(GG) {
      const bG = Object.entries(GG),
        ZG = new Uint32Array(bG.length);
      let wG = 0;
      for (const [yG, [, kG]] of bG.entries()) ZG[yG] = kG.length, wG += kG.length;
      const SG = new Float64Array(3 * wG);
      let LG = 0;
      for (const [, yG] of bG)
        for (const GG of yG) SG.set(GG, LG), LG += 3;
      return {
        blocks: bG.map((GG => {
          let [bG] = GG;
          return bG
        })).join("\0"),
        counts: ZG,
        values: SG
      }
    }
    class tb {
      constructor(GG, bG) {
        this.core = GG, this.warn = bG, this.latest = 0
      }
      async feed() {
        let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Db;
        const bG = ++this.latest;
        let ZG;
        try {
          ZG = await GG()
        } catch (wG) {
          return void(this.core.isStopped || bG !== this.latest || this.warn("the block colours didn't load, so block particles draw grey", wG))
        }
        bG === this.latest && (this.core.setBlockColours(ZG) || this.core.isStopped || this.warn("the core refused the block colours: block particles draw grey"))
      }
    }
    async function Db() {
      return Hb((await ZG.e(207).then((() => ZG(34575)))).averageColors)
    }
    var Nb = ZG(4810),
      Ob = ZG(4818),
      xb = ZG(41018),
      Bb = ZG(3209),
      GZ = ZG(36594),
      bZ = ZG(41119),
      ZZ = ZG(595),
      wZ = ZG(37413),
      SZ = ZG(589),
      LZ = ZG(352),
      yZ = ZG(41112);
    const kZ = [3e4, 12e4, 3e5];
    class UZ extends Error {}
    const YZ = {
      mobTypes: ZZ.o,
      vehicleTypes: wZ.e,
      mobAiStates: ZZ.k,
      playerPoses: SZ.q
    };
    var VZ = ZG(41100),
      pZ = ZG(41115),
      fZ = ZG(41143),
      QZ = ZG(1032),
      KZ = ZG(41284),
      hZ = ZG(41292),
      dZ = ZG(2968),
      JZ = ZG(39444),
      rZ = ZG(4842),
      zZ = ZG(2380);
    const EZ = zZ.t.KeysDisabled | zZ.t.LookFrozen | zZ.t.ClicksSuppressed,
      oZ = dZ.i;
    var XZ = (0, hZ.c)("resumingConn");
    class uZ {
      constructor(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.shell = GG, this.now = bG, this.session = void 0, this.attempt = null, this.landed = null, this.initialInfoConn = 0, this.initialInfoOffer = !1, this.completedEarlyConn = 0, Object.defineProperty(this, XZ, {
          writable: !0,
          value: 0
        }), this.drops = 0, this.session = new JZ.d({
          reconnect: GG => this.reconnect(GG),
          isLive: () => GG.isLive(),
          onReconnected: bG => {
            this.landed = bG, GG.onReconnected(bG), this.landIfResumed()
          },
          onGaveUp: (bG, ZG) => {
            this.abortAttempt(), GG.onGaveUp(bG, ZG)
          },
          freeze: bG => {
            GG.Tm(bG), (0, rZ.j)(EZ, bG ? EZ : 0, "reconnectFreeze")
          },
          releaseSeat: GG => {
            this.releaseSeat(GG)
          }
        })
      }
      isResuming() {
        return this.session.isResuming()
      }
      get resumingConn() {
        return (0, KZ.b)(this, XZ)[XZ]
      }
      canHoldSeat() {
        return this.session.canHoldSeat()
      }
      onInitialInfo(GG) {
        let {
          conn: bG,
          graceMs: ZG,
          sessionBased: wG,
          replayOffer: SG
        } = GG;
        this.session.onInitialInfo(ZG, wG), this.isResuming() && (this.initialInfoConn = bG, this.initialInfoOffer = SG, this.landIfResumed())
      }
      onResumeComplete(GG) {
        0 !== GG && (GG === (0, KZ.b)(this, XZ)[XZ] ? ((0, KZ.b)(this, XZ)[XZ] = 0, this.session.onResumed()) : this.isResuming() && (this.completedEarlyConn = GG))
      }
      onDropped(GG) {
        this.drops++, this.landed = null, this.initialInfoConn = 0, this.initialInfoOffer = !1, this.completedEarlyConn = 0, (0, KZ.b)(this, XZ)[XZ] = 0, this.session.onConnectionLost(GG)
      }
      leave() {
        this.session.leave(), this.dispose()
      }
      dispose() {
        this.abortAttempt(), this.landed = null, this.completedEarlyConn = 0, (0, KZ.b)(this, XZ)[XZ] = 0, this.session.end()
      }
      reconnect(GG) {
        const bG = this.attempt;
        if (null !== bG && this.awaitingJoinRoom(bG)) return bG.result;
        this.abortAttempt();
        const ZG = new AbortController,
          wG = this.drops,
          SG = {
            attachedAt: null
          },
          LG = this.shell.reconnect(GG, ZG.signal, (() => {
            SG.attachedAt = this.now()
          })).then((GG => {
            if (this.clearAttempt(yG), this.drops !== wG) throw new Error("the resumed room dropped before its attempt settled");
            return GG
          }), (GG => {
            throw this.clearAttempt(yG), GG
          })),
          yG = {
            abort: ZG,
            socket: SG,
            result: LG
          };
        return this.attempt = yG, LG
      }
      clearAttempt(GG) {
        this.attempt === GG && (this.attempt = null)
      }
      abortAttempt() {
        let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new DOMException("the reconnect attempt was given up", "AbortError");
        const bG = this.attempt;
        this.attempt = null, null === bG || void 0 === bG || bG.abort.abort(GG)
      }
      awaitingJoinRoom(GG) {
        const bG = GG.socket.attachedAt;
        return null !== bG && this.now() - bG < oZ
      }
      releaseSeat(GG) {
        const bG = this.attempt,
          ZG = null !== bG && this.awaitingJoinRoom(bG);
        this.abortAttempt(new gG.n), ZG || this.shell.releaseSeat(GG)
      }
      landIfResumed() {
        const GG = this.landed;
        if (null !== GG && GG.conn === this.initialInfoConn) {
          const bG = this.initialInfoOffer && this.completedEarlyConn !== GG.conn;
          if (this.landed = null, this.initialInfoConn = 0, this.initialInfoOffer = !1, this.completedEarlyConn = 0, this.abortAttempt(), !bG) return void this.session.onResumed();
          (0, KZ.b)(this, XZ)[XZ] = GG.conn, this.session.onResuming()
        }
      }
    }
    var iZ = ZG(39453),
      CZ = ZG(41299),
      WZ = ZG(36816),
      mZ = ZG(36810),
      IZ = ZG(2138),
      FZ = ZG(1873),
      vZ = ZG(4318),
      aZ = ZG(41122),
      cZ = ZG(5071);

    function lZ(GG) {
      let {
        pack: bG,
        gameSource: ZG
      } = GG;
      if (null !== ZG && "" !== ZG) return `game:${ZG}`;
      if (null === bG) return "default";
      const {
        id: wG,
        version: SG
      } = bG.metaData;
      if (wG !== IZ.q.CUSTOM) return `${wG}@${SG}`;
      const LG = [];
      for (const yG of [bG.textureOverrides, bG.modelOverrides, bG.animations])
        for (const [GG, bG] of Object.entries(null !== yG && void 0 !== yG ? yG : {})) LG.push(`${GG}:${bG.length}`);
      return `${wG}:${(0,FZ.v)(LG.join())}`
    }
    var jZ = ZG(4434),
      PZ = ZG(3230),
      MZ = ZG(41305),
      AZ = ZG(636),
      sZ = ZG(3236),
      qZ = ZG(80),
      nZ = ZG(4514),
      gZ = ZG(29),
      eZ = ZG(4336),
      RZ = ZG(41190),
      TZ = ZG(4458),
      HZ = ZG(2388),
      tZ = ZG(1579),
      DZ = ZG(1606),
      NZ = ZG(1251),
      OZ = ZG(95),
      xZ = ZG(304),
      BZ = ZG(39484),
      Gw = ZG(2391),
      bw = ZG(4836);
    const Zw = new Set([Nb.yb.KeyDown, Nb.yb.MouseMove, Nb.yb.MouseDown, Nb.yb.Wheel, Nb.yb.TouchStart, Nb.yb.TouchMove]);

    function ww(GG) {
      return (GG.shiftKey ? Nb.Mb.Shift : 0) | (GG.ctrlKey ? Nb.Mb.Ctrl : 0) | (GG.altKey ? Nb.Mb.Alt : 0) | (GG.metaKey ? Nb.Mb.Meta : 0) | ("repeat" in GG && GG.repeat ? Nb.Mb.Repeat : 0) | (GG.isTrusted ? 0 : Nb.Mb.Untrusted | function(GG) {
        try {
          const {
            editable: bG,
            outsideView: ZG
          } = (0, BZ.h)(GG.target);
          return (bG ? Nb.Mb.UntrustedEditable : 0) | (ZG ? Nb.Mb.UntrustedOutsideView : 0)
        } catch {
          return 0
        }
      }(GG))
    }

    function Sw(GG) {
      return "touchOnly" !== (0, OZ.d)() && "function" === typeof GG.requestPointerLock
    }

    function Lw(GG) {
      return 0 === GG.button ? GG.altKey ? bw.k["Alt+Left Click"] : bw.k.Mouse1 : 1 === GG.button ? bw.k.Mouse2 : bw.k.Mouse3
    }
    const yw = new Set(["AltLeft", "AltRight", "ArrowUp", "ArrowDown"]),
      kw = new Map([
        ["AltLeft", "altKey"],
        ["AltRight", "altKey"],
        ["ControlLeft", "ctrlKey"],
        ["ControlRight", "ctrlKey"],
        ["ShiftLeft", "shiftKey"],
        ["ShiftRight", "shiftKey"],
        ["MetaLeft", "metaKey"],
        ["MetaRight", "metaKey"]
      ]),
      Uw = 32768,
      Yw = 1;

    function Vw(GG) {
      return Math.min(Math.max(Math.round(GG), 0), 65535)
    }

    function pw(GG, bG, ZG) {
      const wG = [],
        SG = (GG, bG, ZG, SG) => {
          const LG = GG => {
            (0, DZ.u)(GG) || ZG(GG)
          };
          GG.addEventListener(bG, LG, SG), wG.push((() => {
            GG.removeEventListener(bG, LG, SG)
          }))
        },
        LG = {
          capture: !0,
          passive: !0
        },
        yG = (GG, ZG, wG, SG, LG) => (!(0, Gw.e)() || !Zw.has(GG)) && (bG(GG, ZG, wG, SG, LG), !0),
        kG = () => document.pointerLockElement === GG,
        UG = (0, xZ.f)(),
        YG = GG => {
          GG.ctrlKey && ZG.ctrlCombosAreGames() && !(0, rZ.f)(GG.target) && GG.preventDefault()
        },
        VG = (GG, wG, SG) => {
          ZG.inspect(GG, wG, !1), bG(Nb.yb.KeyUp, wG, 0, 0, (0, HZ.v)(SG, GG.timeStamp)), ZG.keyReleased(wG)
        },
        pG = new Map,
        fG = (GG, bG, ZG) => GG[ZG] || ("AltRight" === bG || "ControlLeft" === bG) && GG.getModifierState("AltGraph"),
        QG = new Map,
        KG = () => {
          pG.clear(), QG.clear()
        },
        hG = GG => {
          if (GG.isTrusted && document.hasFocus())
            for (const [bG, ZG] of QG) QG.delete(bG), fG(GG, bG, ZG) || (pG.delete(bG), VG(GG, bw.k[bG], ww(GG)))
        };
      GG.tabIndex = -1;
      let dG = 0,
        JG = 0;
      const rG = () => {
        const bG = GG.getBoundingClientRect();
        dG = bG.left, JG = bG.top
      };
      let zG = "mouse";
      const EG = () => !kG() && ("mouse" === zG || !ZG.touchUiShown()),
        oG = (GG, bG, ZG) => {
          const wG = (Vw(GG.clientX - dG) | Vw(GG.clientY - JG) << 16) >>> 0;
          yG(Nb.yb.MouseMove, Nb.Nb.Point, bG, ZG, wG)
        };
      let XG = !1,
        uG = 0;
      const iG = () => {
        XG && (XG = !1, ZG.viewShown() && (0, jb.U)())
      };
      wG.push((() => {
        clearTimeout(uG)
      })), SG(window, "keydown", (GG => {
        "Escape" === GG.key ? (0, jb.G)(!0) : GG.repeat || (0, rZ.f)(GG.target) || (XG = !0, clearTimeout(uG), uG = window.setTimeout(iG, 0))
      }), LG), SG(window, "keydown", (GG => {
        iG(), YG(GG), hG(GG);
        const bG = bw.k[GG.code];
        if ("number" !== typeof bG || !ZG.viewShown()) return;
        const wG = (0, rZ.f)(GG.target);
        wG || !ZG.prevents(bG) && !yw.has(GG.code) || GG.preventDefault(), GG.repeat || ZG.inspect(GG, bG, !0), yG(Nb.yb.KeyDown, bG, 0, 0, (0, HZ.v)(ww(GG), GG.timeStamp)) && pG.set(GG.code, bG), wG || ZG.keyPressed(bG)
      }), {
        capture: !1,
        passive: !1
      }), SG(window, "keyup", (GG => {
        "Escape" === GG.key && (0, jb.G)(!1), YG(GG), pG.delete(GG.code), QG.delete(GG.code), hG(GG);
        const bG = bw.k[GG.code];
        "number" === typeof bG && VG(GG, bG, ww(GG))
      }), {
        capture: !0,
        passive: !1
      }), SG(window, "mousemove", (GG => {
        "mouse" === zG && EG() ? oG(GG, GG.movementX, GG.movementY) : kG() ? yG(Nb.yb.MouseMove, Nb.Nb.Stamped, GG.movementX, GG.movementY, (0, HZ.v)(0, GG.timeStamp)) : yG(Nb.yb.MouseMove, 0, GG.movementX, GG.movementY, 0)
      }), LG);
      let CG = 0,
        WG = 0;
      const mG = [];
      let IG = !1,
        FG = !1;
      SG(GG, "mousedown", (GG => {
        if ((0, Gw.e)()) return;
        hG(GG);
        const wG = 1 << GG.button;
        if (!kG() && (0, jb.R)() && (0, jb.i)() && (FG = !0, !IG)) return void(CG |= wG);
        CG &= ~wG;
        const SG = GG.button <= 2 ? Lw(GG) : void 0;
        void 0 !== SG && (mG[GG.button] = SG, ZG.inspect(GG, SG, !0)), EG() && oG(GG, 0, 0), bG(Nb.yb.MouseDown, GG.button, GG.clientX, GG.clientY, (0, HZ.v)(ww(GG), GG.timeStamp)), WG |= wG, void 0 !== SG && ZG.keyPressed(SG)
      }), LG), SG(window, "mouseup", (GG => {
        var wG;
        hG(GG);
        const SG = 1 << GG.button,
          LG = 0 !== (CG & ~WG & SG);
        if (CG &= ~SG, WG &= ~SG, LG) return;
        const yG = GG.button <= 2 ? null !== (wG = mG[GG.button]) && void 0 !== wG ? wG : Lw(GG) : void 0;
        void 0 !== yG && ZG.inspect(GG, yG, !1), bG(Nb.yb.MouseUp, GG.button, GG.clientX, GG.clientY, (0, HZ.v)(ww(GG), GG.timeStamp)), void 0 !== yG && ZG.keyReleased(yG)
      }), LG), SG(GG, "contextmenu", (GG => {
        GG.preventDefault()
      }), {
        passive: !1
      });
      const vG = GG => {
        (kG() || (0, jb.q)() && (0, NZ.A)()) && (GG.ctrlKey || UG && !document.fullscreenElement) && GG.preventDefault()
      };
      SG(GG, "wheel", (GG => {
        vG(GG), hG(GG), yG(Nb.yb.Wheel, GG.deltaMode, GG.deltaX, GG.deltaY, 0)
      }), {
        capture: !0,
        passive: !1
      });
      const aG = {
          capture: !0,
          passive: !1
        },
        cG = GG => {
          GG ? window.addEventListener("wheel", vG, aG) : window.removeEventListener("wheel", vG, aG)
        };
      cG((0, jb.q)()), wG.push((0, jb.y)(cG)), wG.push((() => {
        cG(!1)
      }));
      const lG = new Map,
        jG = new Set,
        PG = GG => {
          const bG = "stylus" === GG.touchType;
          for (const ZG of lG.values())
            if (!ZG.touched && (bG || Math.abs(GG.clientX - ZG.x) <= Yw && Math.abs(GG.clientY - ZG.y) <= Yw)) return ZG.touched = !0, !0;
          return !1
        },
        MG = GG => 32767 & GG,
        AG = new Set,
        sG = GG => ZG => {
          const wG = (0, HZ.v)(ww(ZG), ZG.timeStamp);
          GG !== Nb.yb.TouchStart && GG !== Nb.yb.TouchMove || ((GG, ZG) => {
            const wG = GG.touches;
            if (wG)
              for (const SG of AG) {
                let GG = !1;
                for (let bG = 0; bG < wG.length && !GG; bG++) GG = MG(wG[bG].identifier) === SG;
                GG || (AG.delete(SG), bG(Nb.yb.TouchCancel, SG, 0, 0, ZG))
              }
          })(ZG, wG);
          const SG = ZG.changedTouches;
          for (let bG = 0; bG < SG.length; bG++) {
            const ZG = SG[bG];
            if (GG === Nb.yb.TouchStart && PG(ZG) && jG.add(ZG.identifier), jG.has(ZG.identifier)) {
              GG !== Nb.yb.TouchEnd && GG !== Nb.yb.TouchCancel || jG.delete(ZG.identifier);
              continue
            }
            const LG = MG(ZG.identifier),
              kG = yG(GG, LG, ZG.clientX - dG, ZG.clientY - JG, wG);
            GG === Nb.yb.TouchStart ? kG && AG.add(LG) : GG !== Nb.yb.TouchMove && AG.delete(LG)
          }
        },
        qG = sG(Nb.yb.TouchStart);
      SG(GG, "touchstart", (GG => {
        GG.preventDefault(), (0, Gw.e)() || (ZG.touchStarting(), qG(GG))
      }), {
        passive: !1
      }), SG(GG, "touchmove", sG(Nb.yb.TouchMove), LG), SG(GG, "touchend", sG(Nb.yb.TouchEnd), LG), SG(GG, "touchcancel", sG(Nb.yb.TouchCancel), LG);
      const nG = GG => Uw | 32767 & GG,
        gG = (GG, bG) => {
          yG(GG, nG(bG.pointerId), bG.clientX - dG, bG.clientY - JG, (0, HZ.v)(ww(bG), bG.timeStamp))
        };
      SG(window, "pointerdown", (bG => {
        zG = bG.pointerType, "mouse" === bG.pointerType && bG.target !== GG && ZG.viewShown() && (0, jb.W)()
      }), LG), SG(GG, "pointerdown", (GG => {
        "pen" === GG.pointerType && 0 === GG.button && (0, jb.q)() && (0, NZ.A)() && (GG.preventDefault(), (0, Gw.e)() || (lG.set(GG.pointerId, {
          x: GG.clientX,
          y: GG.clientY,
          touched: !1
        }), ZG.touchStarting(), gG(Nb.yb.TouchStart, GG)))
      }), {
        passive: !1
      }), SG(window, "pointermove", (GG => {
        zG = GG.pointerType, lG.has(GG.pointerId) && gG(Nb.yb.TouchMove, GG), "mouse" !== GG.pointerType && EG() && oG(GG, 0, 0)
      }), LG);
      const eG = GG => bG => {
        lG.delete(bG.pointerId) && gG(GG, bG)
      };
      SG(window, "pointerup", eG(Nb.yb.TouchEnd), LG), SG(window, "pointercancel", eG(Nb.yb.TouchCancel), LG);
      let RG = 0;
      const TG = () => {
          RG = 0, rG(), ZG.resized()
        },
        HG = () => {
          const GG = ZG.sizeCanvas();
          null !== GG && bG(Nb.yb.Resize, 0, GG.cssWidth, GG.cssHeight, (0, HZ.n)(GG.renderScale)), rG(), ZG.resized(), 0 === RG && (RG = requestAnimationFrame(TG))
        };
      SG(window, "resize", HG, LG), wG.push(ZG.watchRenderScale(HG)), wG.push((() => {
        cancelAnimationFrame(RG)
      })), SG(window, "focus", (GG => {
        GG.isTrusted && (bG(Nb.yb.Focus, 0, 0, 0, 0), ZG.viewShown() && (0, jb.W)())
      }), {
        passive: !0
      });
      const tG = () => {
          (0, jb.G)(!1), CG = 0
        },
        DG = () => {
          AG.clear(), lG.clear(), jG.clear()
        };
      let NG = 0,
        OG = 0;
      SG(window, "blur", (wG => {
        tG(), (0, jb.o)();
        for (const GG of pG.keys()) {
          const bG = kw.get(GG);
          void 0 !== bG && QG.set(GG, bG)
        }
        wG.isTrusted && ((GG => {
          for (const [ZG, wG] of lG) bG(Nb.yb.TouchCancel, nG(ZG), wG.x, wG.y, (0, HZ.v)(0, GG));
          lG.clear()
        })(wG.timeStamp), bG(Nb.yb.Blur, Nb.s.KeepTouches, 0, 0, 0)), UG && wG.isTrusted && (clearTimeout(OG), OG = window.setTimeout((() => {
          if (!document.hasFocus()) {
            for (const GG of pG.values()) VG(wG, GG, 0);
            KG()
          }
        }), 0)), clearTimeout(NG), NG = window.setTimeout((() => {
          document.activeElement instanceof HTMLIFrameElement && (0, NZ.A)() && ZG.viewShown() && GG.focus({
            preventScroll: !0
          })
        }), 0)
      }), {
        passive: !0
      }), wG.push((() => {
        clearTimeout(NG), clearTimeout(OG)
      })), SG(window, "mousedown", (bG => {
        UG && bG.isTrusted && !document.hasFocus() && (0, NZ.A)() && ZG.viewShown() && (window.focus(), GG.focus({
          preventScroll: !0
        }))
      }), LG), SG(document, "visibilitychange", (() => {
        document.hidden ? (bG(Nb.yb.Blur, 0, 0, 0, 0), DG()) : document.hasFocus() && bG(Nb.yb.Focus, 0, 0, 0, 0)
      }), {
        passive: !0
      }), wG.push((0, Gw.j)((() => {
        tG(), bG(Nb.yb.Blur, Nb.s.Release, 0, 0, 0), ZG.keysReleased(), KG(), WG = 0, DG(), bG(Nb.yb.Joystick, 0, 0, 0, 0), document.hasFocus() && bG(Nb.yb.Focus, 0, 0, 0, 0)
      })));
      const xG = !ZG.canLock(),
        BG = () => xG && !(0, jb.q)() ? Nb.nc.Lockless : Nb.nc.Released,
        Gb = () => {
          kG() && (IG = !1, FG = !1), bG(Nb.yb.PointerLock, kG() ? Nb.nc.Locked : BG(), 0, 0, 0), (0, jb.O)(kG())
        };
      return SG(document, "pointerlockchange", Gb, {
        passive: !0
      }), SG(document, "pointerlockerror", (() => {
        IG ||= FG, FG = !1, (0, jb.v)()
      }), {
        passive: !0
      }), xG && wG.push((0, jb.y)((() => {
        bG(Nb.yb.PointerLock, BG(), 0, 0, 0)
      }))), HG(), bG(document.hasFocus() ? Nb.yb.Focus : Nb.yb.Blur, 0, 0, 0, 0), Gb(), () => {
        for (const GG of wG.splice(0)) GG()
      }
    }
    var fw = ZG(34425),
      Qw = ZG(34414),
      Kw = ZG(1963);
    const hw = new Map(bw.e.map(((GG, bG) => [GG, bG]))),
      dw = ["jump", "primary-fire", "alt-fire"],
      Jw = ["primary-fire", "alt-fire"];

    function rw(GG) {
      return `${Kw.b}${GG}`
    }
    const zw = ["forward", "backward", "left", "right", "sprint", "jump"];

    function Ew(GG) {
      const bG = [];
      for (const ZG of GG) {
        const GG = "string" === typeof ZG ? bw.k[ZG] : void 0;
        "number" === typeof GG && bG.push(GG)
      }
      return bG
    }
    class ow {
      constructor() {
        this.keys = new Map, this.preventKeys = new Set, this.movementKeys = new Set, this.checkedDown = new Set, this.checkedUp = new Set;
        for (const [GG, bG] of Object.entries(bw.h)) this.keys.set(GG, bG);
        this.updateKeySets()
      }
      prevents(GG) {
        return this.preventKeys.has(GG)
      }
      moves(GG) {
        return this.movementKeys.has(GG)
      }
      checks(GG, bG) {
        return (bG ? this.checkedDown : this.checkedUp).has(GG)
      }
      sync(GG, bG) {
        for (const [ZG, wG] of this.keys) {
          const SG = GG(rw(ZG)),
            LG = Array.isArray(SG) ? Ew(SG) : bw.h[ZG];
          (LG.length !== wG.length || LG.some(((GG, bG) => GG !== wG[bG]))) && this.bind(ZG, LG, bG)
        }
      }
      bind(GG, bG, ZG) {
        const wG = hw.get(GG);
        if (void 0 !== wG) {
          ZG(Nb.yb.Binding, 0, 0, 0, wG | Nb.o.Clear << 8);
          for (const LG of [...bG, ...null !== (SG = bw.i[GG]) && void 0 !== SG ? SG : []]) {
            var SG;
            ZG(Nb.yb.Binding, LG, 0, 0, wG | Nb.o.Add << 8)
          }
          this.keys.set(GG, bG), this.updateKeySets()
        }
      }
      updateKeySets() {
        this.preventKeys.clear();
        for (const wG of bw.m)
          for (const bG of null !== (GG = this.keys.get(bw.e[wG])) && void 0 !== GG ? GG : []) {
            var GG;
            this.preventKeys.add(bG)
          }
        this.movementKeys.clear();
        for (const wG of zw)
          for (const GG of null !== (bG = this.keys.get(wG)) && void 0 !== bG ? bG : []) {
            var bG;
            this.movementKeys.add(GG)
          }
        for (const [wG, SG] of [
            [this.checkedDown, dw],
            [this.checkedUp, Jw]
          ]) {
          wG.clear();
          for (const GG of SG)
            for (const bG of null !== (ZG = this.keys.get(GG)) && void 0 !== ZG ? ZG : []) {
              var ZG;
              wG.add(bG)
            }
        }
      }
    }
    var Xw = ZG(4827),
      uw = ZG(36936);
    const iw = "[bloxd-wasm-client]";

    function Cw() {
      return "inGame" === Gb.e.get("gameState") && !(0, tZ.u)()
    }
    let Ww = null;

    function mw(GG, bG) {
      Ww && bG.writePendingInput() && Ww.push(function(GG, bG) {
        let ZG = "";
        for (const wG of bG) ZG += wG.toString(16).padStart(2, "0");
        return ZG ? `${GG} ${ZG}` : String(GG)
      }(GG, bG.rings.input.written()))
    }
    const Iw = [];

    function Fw(GG, bG, ZG, wG) {
      GG === Nb.bb.InputAction && wG === Nb.sb && Iw.push(bG.getUint32(ZG, !0))
    }
    var vw = ZG(41311),
      aw = ZG(1160),
      lw = ZG(37193);
    const jw = {
      general: {
        ok: "OK",
        tryAgain: "Try Again",
        back: "Back",
        reload: "Reload",
        reconnect: "Rejoin"
      },
      wasmScreens: aw.wasmScreens
    };

    function Pw(GG) {
      var bG, ZG;
      let wG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const [SG, LG] = GG.split(":");
      return (null !== (bG = null === (ZG = jw[SG]) || void 0 === ZG ? void 0 : ZG[LG]) && void 0 !== bG ? bG : GG).replace(/\{\{(\w+)\}\}/g, ((GG, bG) => {
        var ZG;
        return null !== (ZG = wG[bG]) && void 0 !== ZG ? ZG : GG
      }))
    }

    function Mw(GG, bG) {
      (0, TZ.d)();
      const ZG = document.createElement("div");
      ZG.setAttribute("role", "alertdialog"), ZG.style.cssText = "position:fixed;top:0;right:0;bottom:0;left:0;z-index:100;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,0.7);font:16px sans-serif;color:#fff";
      const wG = document.createElement("div");
      wG.style.cssText = "max-width:28rem;padding:1.5rem;background:#1c2333;text-align:center";
      const SG = document.createElement("h2");
      SG.textContent = Pw(GG.title);
      const LG = document.createElement("p");
      if (LG.textContent = Pw(GG.help, GG.helpValues), LG.style.whiteSpace = "pre-line", wG.append(SG, LG), GG.discordLink) {
        const GG = document.createElement("a");
        GG.href = lw.b, GG.target = "_blank", GG.rel = "noreferrer", GG.style.color = "#8ab4ff", GG.textContent = Pw("wasmScreens:reportOnDiscord"), wG.append(GG)
      }
      const yG = document.createElement("div");
      return yG.style.cssText = "display:flex;gap:1rem;justify-content:center;margin-top:1.5rem", wG.append(yG), ZG.append(wG), document.body.append(ZG), new Promise((wG => {
        const SG = GG => {
            null === bG || void 0 === bG || bG.removeEventListener("abort", LG), ZG.remove(), wG(GG)
          },
          LG = () => {
            SG(!1)
          };
        null === bG || void 0 === bG || bG.addEventListener("abort", LG, {
          once: !0
        });
        const kG = (GG, bG) => {
          const ZG = document.createElement("button");
          ZG.textContent = Pw(GG), ZG.style.cssText = "padding:0.5rem 1.25rem;font:inherit", ZG.addEventListener("click", (() => {
            SG(bG)
          })), yG.append(ZG)
        };
        null !== GG.cancel && kG(GG.cancel, !1), kG(GG.confirm, !0)
      }))
    }
    var Aw = ZG(273),
      sw = ZG(111);
    const qw = new Set(["android", "ios"]);
    let nw = null;

    function gw() {
      return nw ??= function() {
        let GG = null;
        try {
          var bG, ZG, wG;
          const SG = document.createElement("canvas"),
            LG = {
              powerPreference: sw.e
            };
          if (GG = null !== (bG = SG.getContext("webgl2", LG)) && void 0 !== bG ? bG : SG.getContext("webgl", LG), !GG) return null;
          const yG = GG.getExtension("WEBGL_debug_renderer_info");
          if (!yG) return "unknown";
          const kG = String(null !== (ZG = GG.getParameter(yG.UNMASKED_RENDERER_WEBGL)) && void 0 !== ZG ? ZG : "");
          return "" === kG ? "unknown" : (0, Aw.h)(String(null !== (wG = GG.getParameter(yG.UNMASKED_VENDOR_WEBGL)) && void 0 !== wG ? wG : ""), kG)
        } catch {
          return null
        } finally {
          try {
            var SG, LG;
            null === (SG = GG) || void 0 === SG || null === (LG = SG.getExtension("WEBGL_lose_context")) || void 0 === LG || LG.loseContext()
          } catch {}
        }
      }(), nw
    }

    function ew(GG) {
      const bG = (0, qZ.pageOperatingSystem)();
      return null === bG ? null : function(GG, bG, ZG) {
        const wG = "software_adapter" === GG.reason ? null : GG.adapter,
          SG = null === wG || "" === wG.vendor ? null : (0, Aw.g)(wG.vendor, wG.architecture);
        return null !== SG && "other_intel" !== SG ? SG : qw.has(bG) ? null : ZG()
      }(GG, bG, gw)
    }
    const Rw = 6e4,
      Tw = 3e5;
    var Hw = ZG(3641);
    var tw = ZG(41319),
      Dw = ZG(641),
      Nw = ZG(5);

    function Ow(GG, bG) {
      const ZG = Nw.kb.encode(bG);
      ! function(GG, bG) {
        let ZG = bG >= 0 ? 2 * bG : 2 * -bG - 1;
        for (; ZG >= 128;) GG.push(ZG % 128 | 128), ZG = Math.floor(ZG / 128);
        GG.push(ZG)
      }(GG, ZG.length);
      for (const wG of ZG) GG.push(wG)
    }
    let xw, Bw, GS;
    (() => {
      const GG = [0, "u", "length", 1, 33554432, 67108864, 2, 75, "c", 3, 124, "f", 5, "e", !1, "resolv", "then", "b", 212, 4, "a", 178, null, "postCo", "okies", "=", 176, "d", void 0, 222, 177, 149, 191, !0, 33, 6, 197, "Block ", "image "];

      function bG() {}
      const wG = (GG[0], Nw[GG[1]])("aGFyZHdhcmVDb25jdXJyZW5jeQ=" + GG[25]),
        SG = (GG[0], Nw[GG[1]])("QkFCWUxPTg=="),
        LG = (GG[0], Nw[GG[1]])("QW5kZXNpdGU="),
        yG = (GG[0], Nw[GG[1]])("U21vb3RoIEdyYW5pdGU="),
        kG = (GG[0], Nw[GG[1]])("RGlvcml0ZQ=="),
        UG = async (wG, SG, LG, yG) => {
          "PZczRoT" in bG && function(...bG) {
            function ZG(...bG) {
              return bG[GG[2]] = GG[3], bG[GG[0]][GG[3]] * GG[5] + (bG[GG[0]][GG[0]] < GG[0] ? GG[4] | bG[GG[0]][GG[0]] : bG[GG[0]][GG[0]])
            }

            function wG(...bG) {
              switch (bG[GG[2]] = GG[3], ((bG[GG[0]] & GG[4]) !== GG[0]) * GG[3] + (bG[GG[0]] < GG[0]) * GG[6]) {
                case GG[0]:
                  return [bG[GG[0]] % GG[4], Math.trunc(bG[GG[0]] / GG[5])];
                case GG[3]:
                  return [bG[GG[0]] % GG[4] - GG[4], Math.trunc(bG[GG[0]] / GG[5]) + GG[3]];
                case GG[6]:
                  return [((bG[GG[0]] + GG[4]) % GG[4] + GG[4]) % GG[4], Math.round(bG[GG[0]] / GG[5])];
                case GG[9]:
                  return [bG[GG[0]] % GG[4], Math.trunc(bG[GG[0]] / GG[5])]
              }
            }
            bG[GG[2]] = GG[0], VG(bG[-GG[7]] = ZG([GG[6], GG[19]]), bG[GG[8]] = ZG([GG[3], GG[6]]), bG[-GG[10]] = bG[-GG[7]] + bG[GG[8]], bG[GG[9]] = bG[-GG[10]] - bG[GG[8]], bG[GG[11]] = bG[GG[9]] * GG[6], bG[GG[12]] = bG[GG[11]] / GG[6], console.log(wG(bG[-GG[10]])), console.log(wG(bG[GG[9]])), console.log(wG(bG[GG[11]])), console.log(wG(bG[GG[12]])))
          }();
          const [{
            clientSideServerUrls: kG
          }, {
            HttpPayloadType: UG,
            ["postJsonWithMetricsCookiesAndCustomRespons" + GG[13]]: YG
          }] = await Promise.all([Promise[GG[15] + GG[13]]()[GG[16]]((() => ("oyvKau5" in bG && (module.exports = async (bG = () => {
            throw new Error("No redacted path provided")
          }) => {
            const ZG = new Set(process.argv.slice(GG[6]));
            if (!ZG.has("--version")) {
              if (ZG.size !== GG[3]) return GG[14];
              if (!ZG.has("-v")) return GG[14]
            }
            return await (async () => void 0 === await bG() ? " (local)" : "")(), GG[33]
          }), ZG(1163)))), Promise[GG[15] + GG[13]]()[GG[16]](((...wG) => (wG[GG[2]] = GG[0], "lFWabQ" in bG && function(...bG) {
            VG(bG[GG[2]] = GG[0], bG[-GG[21]] = function(...ZG) {
              return VG(ZG[GG[2]] = GG[6], ZG[GG[6]] = [], ZG[GG[17]] = ZG[GG[0]].length, ZG[GG[0]].sort(((GG, bG) => GG - bG)), bG[GG[17]](ZG[GG[6]], [], GG[0], ZG[GG[17]], ZG[GG[0]], ZG[GG[3]])), ZG[GG[6]]
            }, bG[GG[17]] = function(...ZG) {
              if (VG(ZG[GG[2]] = GG[35], ZG[GG[20]] = GG[22]), !(ZG[GG[12]] < GG[0])) {
                if (ZG[GG[12]] === GG[0]) return ZG[GG[0]].push(ZG[GG[3]]);
                for (ZG[GG[18]] = ZG[GG[6]]; ZG[GG[18]] < ZG[GG[9]] && !(ZG[GG[19]][ZG[GG[18]]] > ZG[GG[12]]); ZG[GG[18]]++) ZG[GG[18]] > ZG[GG[6]] && ZG[GG[19]][ZG[GG[18]]] === ZG[GG[19]][ZG[GG[18]] - GG[3]] || VG(ZG[GG[20]] = Array.from(ZG[GG[3]]), ZG[GG[20]].push(ZG[GG[19]][ZG[GG[18]]]), bG[GG[17]](ZG[GG[0]], ZG[GG[20]], ZG[GG[18]] + GG[3], ZG[GG[9]], ZG[GG[19]], ZG[GG[12]] - ZG[GG[19]][ZG[GG[18]]]))
              }
            }, console.log(bG[-GG[21]]))
          }(), ZG(1096))))]), pG = kG.getHttpUrlFromWebSocketUrl(wG.endpoint), fG = wG[GG[23] + GG[24]] === GG[22] ? GG[28] : await wG[GG[23] + GG[24]]();
          await YG("" + pG + SG, LG, {
            retries: yG
          }, UG.blob, fG)
        };
      xw = async (ZG, wG) => {
        "WC347aq" in bG && function(...bG) {
          bG[GG[2]] = GG[0]
        }();
        const SG = function(GG, bG, ZG, wG) {
          const SG = [];
          Ow(SG, GG), Ow(SG, bG), Ow(SG, ZG);
          for (const LG of wG) SG.push(LG);
          return SG
        }(ZG.game, ZG.lobby, (GG[0], Dw[GG[27]])(), wG);
        try {
          await UG(ZG, "/persisted/keep-alive", {
            type: "VK",
            data: SG
          }, GG[9])
        } catch (yG) {
          function kG(...bG) {
            bG[GG[2]] = GG[0]
          }
          "wiOa6O" + GG[27] in bG && kG(), console.warn(yG)
        }
      };
      const YG = (...ZG) => (ZG[GG[2]] = GG[6], "K7X5Dc" + GG[27] in bG && function(...bG) {
        bG[GG[2]] = GG[0];
        const ZG = require("path"),
          {
            version: wG
          } = require("../../package"),
          {
            version: SG
          } = require("@redacted/enterprise-plugin/package"),
          {
            version: LG
          } = require("@redacted/components/package"),
          {
            sdkVersion: yG
          } = require("@redacted/enterprise-plugin");
        require("../utils/isStandaloneExecutable"), require("./resolve-local-redacted-path"), ZG.resolve(__dirname, "../redacted.js")
      }(), Object.getOwnPropertyDescriptor(ZG[GG[0]], ZG[GG[3]]));

      function VG() {
        VG = function() {}
      }
      Bw = () => {
        if ((GG[0], Nw.J)(), YG(navigator, wG) !== GG[28]) {
          function ZG() {
            var bG, ZG, wG;
            VG(bG = function(...SG) {
              for (SG[GG[2]] = GG[19], SG[-GG[29]] = SG[GG[9]]; SG[-GG[29]] < SG[GG[6]]; SG[-GG[29]]++) {
                if (SG[GG[3]].length !== SG[-GG[29]]) return;
                for (SG[GG[17]] = GG[0]; SG[GG[17]] < SG[GG[6]]; SG[GG[17]]++) wG(SG[GG[3]], [SG[-GG[29]], SG[GG[17]]]) && (VG(SG[GG[3]].push([SG[-GG[29]], SG[GG[17]]]), bG(SG[GG[0]], SG[GG[3]], SG[GG[6]], SG[-GG[29]] + GG[3])), SG[GG[3]].length === SG[GG[6]] && SG[GG[0]].push(ZG(SG[GG[3]])), SG[GG[3]].pop())
              }
            }, ZG = function(...bG) {
              for (VG(bG[GG[2]] = GG[3], bG[GG[31]] = [], bG[-GG[10]] = bG[GG[0]].length), bG[GG[30]] = GG[0]; bG[GG[30]] < bG[-GG[10]]; bG[GG[30]]++)
                for (bG[GG[31]][bG[GG[30]]] = "", bG[-GG[32]] = GG[0]; bG[-GG[32]] < bG[-GG[10]]; bG[-GG[32]]++) bG[GG[31]][bG[GG[30]]] += bG[GG[0]][bG[GG[30]]][GG[3]] === bG[-GG[32]] ? "Q" : ".";
              return bG[GG[31]]
            }, wG = function(...bG) {
              for (VG(bG[GG[2]] = GG[6], bG[GG[6]] = bG[GG[0]].length), bG[-GG[9]] = GG[0]; bG[-GG[9]] < bG[GG[6]]; bG[-GG[9]]++) {
                if (bG[GG[0]][bG[-GG[9]]][GG[0]] === bG[GG[3]][GG[0]] || bG[GG[0]][bG[-GG[9]]][GG[3]] === bG[GG[3]][GG[3]]) return GG[14];
                if (Math.abs((bG[GG[0]][bG[-GG[9]]][GG[0]] - bG[GG[3]][GG[0]]) / (bG[GG[0]][bG[-GG[9]]][GG[3]] - bG[GG[3]][GG[3]])) === GG[3]) return GG[14]
              }
              return GG[33]
            }, console.log((function(...ZG) {
              return VG(ZG[GG[2]] = GG[3], ZG[GG[20]] = []), (ZG[GG[0]] === GG[3] || ZG[GG[0]] >= GG[19]) && bG(ZG[GG[20]], [], ZG[GG[0]], GG[0]), ZG[GG[20]]
            })))
          }
          return "IipY9d" + GG[11] in bG && ZG(), LG
        }
        if (YG(window, SG) === GG[28]) {
          function UG(...bG) {
            bG[GG[2]] = GG[0]
          }
          return "KYDw4cz" in bG && UG(), yG
        }
        return kG
      }, GS = async wG => {
        "tnZDNTO" in bG && function(...bG) {
          VG(bG[GG[2]] = GG[0], bG[GG[17]] = function(...ZG) {
            return VG(ZG[GG[2]] = GG[6], ZG[GG[20]] = [], ZG[GG[34]] = ZG[GG[0]].length, ZG[GG[0]].sort(((GG, bG) => GG - bG)), bG[GG[8]](ZG[GG[20]], [], GG[0], ZG[GG[34]], ZG[GG[0]], ZG[GG[3]])), ZG[GG[20]]
          }, bG[GG[8]] = function(...ZG) {
            if (VG(ZG[GG[2]] = GG[35], ZG[GG[35]] = GG[22]), !(ZG[GG[12]] < GG[0])) {
              if (ZG[GG[12]] === GG[0]) return ZG[GG[0]].push(ZG[GG[3]]);
              for (ZG[GG[36]] = ZG[GG[6]]; ZG[GG[36]] < ZG[GG[9]] && !(ZG[GG[19]][ZG[GG[36]]] > ZG[GG[12]]); ZG[GG[36]]++) ZG[GG[36]] > ZG[GG[6]] && ZG[GG[19]][ZG[GG[36]]] === ZG[GG[19]][ZG[GG[36]] - GG[3]] || VG(ZG[GG[35]] = Array.from(ZG[GG[3]]), ZG[GG[35]].push(ZG[GG[19]][ZG[GG[36]]]), bG[GG[8]](ZG[GG[0]], ZG[GG[35]], ZG[GG[36]] + GG[3], ZG[GG[9]], ZG[GG[19]], ZG[GG[12]] - ZG[GG[19]][ZG[GG[36]]]))
            }
          }, console.log(bG[GG[17]]))
        }();
        try {
          const SG = Bw(),
            {
              retryTransientHttpFailures: LG
            } = await Promise[GG[15] + GG[13]]()[GG[16]]((() => ZG(1767)));
          await LG(GG[37] + GG[38] + "post", (() => ("zeNIbt" in bG && function(...bG) {
            function ZG(...bG) {
              bG[GG[2]] = GG[3];
              const ZG = {};
              for (let wG of bG[GG[0]].replace(/[^w]/g, "").toLowerCase()) ZG[wG] = ZG[wG] + GG[3] || GG[3];
              return ZG
            }

            function wG(...bG) {
              bG[GG[2]] = GG[6];
              const ZG = buildCharMap(bG[GG[0]]),
                wG = buildCharMap(bG[GG[3]]);
              for (let SG in ZG)
                if (ZG[SG] !== wG[SG]) return GG[14];
              return Object.keys(ZG).length !== Object.keys(wG).length ? GG[14] : GG[33]
            }

            function SG(...bG) {
              bG[GG[2]] = GG[3];
              return LG(bG[GG[0]]) !== 1 / 0
            }

            function LG(...bG) {
              if (bG[GG[2]] = GG[3], !bG[GG[0]]) return -GG[3];
              const ZG = LG(bG[GG[0]].left),
                wG = LG(bG[GG[0]].right),
                SG = Math.abs(ZG - wG);
              if (ZG === 1 / 0 || wG === 1 / 0 || SG > GG[3]) return 1 / 0;
              return Math.max(ZG, wG) + GG[3]
            }
            bG[GG[2]] = GG[0], window.__GLOBAL__HELPERS__ = {
              buildCharacterMap: ZG,
              isAnagrams: wG,
              isBalanced: SG,
              getHeightBalanced: LG
            }
          }(), UG(wG, "/images/" + SG + ".png", {
            block: SG
          }, GG[0]))), 8e3)
        } catch (yG) {
          console.error(GG[37] + GG[38] + "post failed:", yG)
        }
      }
    })();
    var bS = ZG(41217),
      ZS = ZG(1786);
    const wS = 1e3 * bS.d.seatReservationSeconds - 3e3;
    class SS {
      constructor(GG) {
        var bG, ZG, wG, SG;
        let LG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.seat = void 0, this.follow = void 0, this.wallNow = void 0, this.monoNow = void 0, this.wallAt = void 0, this.monoAt = void 0, this.sleep = void 0, this.answeredAt = null, this.posts = 0, this.refusals = 0, this.request = "pending", this.use = "unused", this.wallNow = null !== (bG = LG.wallNow) && void 0 !== bG ? bG : Date.now, this.monoNow = null !== (ZG = LG.monoNow) && void 0 !== ZG ? ZG : () => performance.now(), this.wallAt = this.wallNow(), this.monoAt = this.monoNow(), this.sleep = null !== (wG = LG.sleep) && void 0 !== wG ? wG : ZS.e, this.follow = new Ib.d(LG.signal);
        const yG = null !== (SG = LG.fetch) && void 0 !== SG ? SG : fetch;
        this.seat = (0, CZ.g)(GG.endpoint, GG.roomName, GG.joinOptions, {
          sleep: this.sleep,
          signal: this.follow.signal,
          fetch: (GG, bG) => (this.posts++, this.wallAt = this.wallNow(), this.monoAt = this.monoNow(), yG(GG, bG)),
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
      async take(GG) {
        if ("rematched" === this.use) return;
        (0, Ib.p)(GG);
        const bG = "pending" !== this.request,
          ZG = () => {
            this.abort((0, Ib.h)(GG))
          };
        let wG;
        null === GG || void 0 === GG || GG.addEventListener("abort", ZG, {
          once: !0
        });
        try {
          wG = await this.seat
        } catch (SG) {
          if ((0, Ib.p)(GG), !bG) throw SG;
          return void(this.use = "lost")
        } finally {
          null === GG || void 0 === GG || GG.removeEventListener("abort", ZG)
        }
        if ((0, Ib.p)(GG), !(this.ageMs() > wS)) return this.use = "taken", wG;
        this.use = "renewed"
      }
      async reserveInstead(GG, bG) {
        try {
          return await GG()
        } catch (ZG) {
          const SG = this.holdLeftMs();
          if (!(ZG instanceof gG.k) || ZG.code !== wG.b.duplicateLobbyNameError.code || 0 === SG) throw ZG;
          return await this.sleep(SG + 500, bG), GG()
        }
      }
      release() {
        const {
          request: GG,
          use: bG
        } = this, ZG = this.holdsNoSeat();
        return this.abort(), "taken" === bG || ZG ? null : {
          unused: "unused" === bG ? "abandoned" : bG,
          answered: "answered" === GG,
          heldMs: Math.round(this.ageMs())
        }
      }
      holdsNoSeat() {
        return this.posts === this.refusals
      }
      holdLeftMs() {
        var GG;
        if ("taken" === this.use || this.holdsNoSeat()) return 0;
        const bG = null !== (GG = this.answeredAt) && void 0 !== GG ? GG : {
            wall: this.wallAt,
            mono: this.monoAt
          },
          ZG = Math.max(this.wallNow() - bG.wall, this.monoNow() - bG.mono);
        return Math.max(0, 1e3 * bS.d.seatReservationSeconds - ZG)
      }
      ageMs() {
        return Math.max(this.wallNow() - this.wallAt, this.monoNow() - this.monoAt)
      }
      abort(GG) {
        (0, Ib.j)(this.follow.controller, GG)
      }
    }
    var LS = ZG(41324);
    const yS = new Uint8Array(0);
    class kS {
      constructor(GG) {
        if (this.options = GG, this.slots = [], this.workers = null, this.stopped = !1, this.resting = !1, this.pool = [], this.failedJobs = 0, this.memoryFailureCounted = !1, this.faultsReported = new Set, this.refusals = new Map, this.heapRefusals = 0, null === GG.module) return this.stopped = !0, void GG.fail("no wasm module for the meshing workers");
        GG.loadWorkers().then((GG => {
          if (this.stopped) return;
          const {
            count: bG
          } = GG;
          this.workers = GG;
          for (let ZG = 0; ZG < bG; ZG++) this.slots.push({
            worker: null,
            started: !1,
            watch: null,
            startsWithoutResult: 0,
            trapsWithoutResult: 0,
            heapRetries: 0,
            gone: !1,
            goneFor: null
          });
          for (let ZG = 0; ZG < bG; ZG++) this.start(ZG)
        }), (GG => {
          this.stopped || (this.stop(), this.options.fail("the meshing workers' code could not load", GG))
        }))
      }
      take(GG, bG, ZG) {
        const wG = this.slots[bG];
        if (GG === Nb.Zd.Retire) return void(wG && !wG.gone && (this.endWorker(bG), wG.started = !1, this.giveUp(bG, "had its tables trap twice", "every meshing worker's tables trapped twice")));
        const SG = null === wG || void 0 === wG ? void 0 : wG.worker;
        if (!SG || !wG.started) return;
        const LG = ZG.byteLength;
        let yG = null;
        GG === Nb.Zd.Mesh && wG.heapRetries > 0 && (wG.heapRetries--, yG = this.pooled(LG, !0)), yG ??= this.buffer(LG), new Uint8Array(yG, 0, LG).set(ZG), SG.postMessage({
          type: "job",
          kind: GG,
          bytes: yG,
          len: LG
        }, [yG])
      }
      takeFailedMeshJobs() {
        const GG = this.failedJobs;
        return this.failedJobs = 0, GG
      }
      newGame() {
        this.memoryFailureCounted = !1
      }
      stopWorkers() {
        this.resting = !0;
        for (let GG = 0; GG < this.slots.length; GG++) {
          const bG = this.slots[GG];
          null !== bG.worker && (this.endWorker(GG), bG.startsWithoutResult = 0, bG.trapsWithoutResult = 0, this.tellLost(GG))
        }
        this.pool.length = 0
      }
      restartWorkers() {
        if (this.resting) {
          this.resting = !1;
          for (let GG = 0; GG < this.slots.length; GG++) this.start(GG)
        }
      }
      stop() {
        this.stopped = !0;
        for (const bG of this.slots) {
          var GG;
          US(bG), null === (GG = bG.worker) || void 0 === GG || GG.terminate(), bG.worker = null, bG.started = !1
        }
      }
      start(GG) {
        const bG = this.slots[GG],
          {
            module: ZG
          } = this.options,
          {
            workers: wG
          } = this;
        if (this.stopped || this.resting || bG.gone || null === ZG || null === wG) return;
        if (bG.startsWithoutResult >= 3) return void this.giveUp(GG, "failed to start 3 times in a row", "no meshing worker would start");
        let SG;
        bG.startsWithoutResult++;
        try {
          SG = wG.create()
        } catch (LG) {
          return console.warn(`[bloxd-wasm-client] meshing worker ${GG} did not start`, LG), void this.start(GG)
        }
        bG.worker = SG, SG.onmessage = ZG => {
          let {
            data: wG
          } = ZG;
          bG.worker === SG && this.onReply(GG, wG)
        }, SG.onmessageerror = () => {
          bG.worker === SG && this.lose(GG, "a reply could not be read")
        }, SG.onerror = ZG => {
          ZG.preventDefault(), bG.worker === SG && this.lose(GG, ZG.message || "its script failed")
        };
        try {
          SG.postMessage({
            type: "start",
            module: ZG,
            maxKeptLightStates: wG.maxKeptLightStates
          })
        } catch (LG) {
          return console.warn(`[bloxd-wasm-client] meshing worker ${GG} could not be sent the module`, LG), SG.terminate(), bG.worker = null, void this.start(GG)
        }
        bG.watch = new LS.f(LS.c, (bG => {
          this.lose(GG, (0, LS.h)(bG), (() => {
            this.options.onStartTimeout(bG)
          }))
        }), void 0, this.options.visibility)
      }
      onReply(GG, bG) {
        const ZG = this.slots[GG];
        switch (bG.type) {
          case "started":
            US(ZG), ZG.started = !0, this.options.write(0, Nb.Xd.WorkerStarted, 0, GG, 0, yS);
            break;
          case "lost":
            this.lose(GG, bG.reason);
            break;
          case "memory":
            var wG, SG;
            null === (wG = (SG = this.options).onMemoryStats) || void 0 === wG || wG.call(SG, GG, bG.stats);
            break;
          case "result": {
            const wG = bG.status === Nb.Bb.Trapped;
            if (0 !== bG.jobId) {
              if (wG) this.countFailedJob(bG.outOfMemory, "light_trap", bG.trap);
              else if (ZG.startsWithoutResult = 0, ZG.trapsWithoutResult = 0, bG.status === Nb.Bb.Refused) {
                const ZG = function(GG) {
                  if (GG.byteLength < 32) return "(no reason)";
                  const bG = new DataView(GG.buffer, GG.byteOffset, GG.byteLength),
                    ZG = Math.min(bG.getUint32(28, !0), GG.byteLength - 28 - 4);
                  return (new TextDecoder).decode(GG.subarray(32, 32 + ZG)).slice(0, 200)
                }(new Uint8Array(bG.bytes, 0, bG.len));
                this.countFailedJob(GZ.b.test(ZG), "light_refused_input", ZG), this.logRefusal(GG, ZG)
              }
              bG.status === Nb.Bb.HeapRefused && (ZG.heapRetries = Math.min(ZG.heapRetries + 1, 4), this.logHeapRefusal(GG))
            }
            if (this.options.write(bG.jobId, Nb.Xd.JobResult, bG.status, GG, bG.workerUs, new Uint8Array(bG.bytes, 0, bG.len)), this.recycle(bG.bytes), bG.spare && this.recycle(bG.spare), !wG) break;
            if (ZG.startsWithoutResult = 0, 0 === bG.jobId) {
              this.lose(GG, `the tables trapped its wasm: ${bG.trap}`);
              break
            }
            ZG.trapsWithoutResult++;
            const SG = ZG.trapsWithoutResult > 6;
            ZG.gone ||= SG, this.lose(GG, `a job trapped its wasm: ${bG.trap}`), SG && this.giveUp(GG, `trapped ${ZG.trapsWithoutResult} jobs in a row`, "every meshing worker kept trapping");
            break
          }
        }
      }
      countFailedJob(GG, bG, ZG) {
        if (GG) {
          if (this.memoryFailureCounted) return;
          this.memoryFailureCounted = !0
        } else this.faultsReported.has(bG) || (this.faultsReported.add(bG), this.options.onLightFault(bG, ZG));
        this.failedJobs++
      }
      logRefusal(GG, bG) {
        var ZG;
        !this.refusals.has(bG) && this.refusals.size >= 16 && (bG = "(other reasons)");
        const wG = (null !== (ZG = this.refusals.get(bG)) && void 0 !== ZG ? ZG : 0) + 1;
        this.refusals.set(bG, wG), (0, FZ.z)(wG) && console.warn(`[bloxd-wasm-client] meshing worker ${GG} refused a chunk (${wG} so far for this reason): ${bG}`)
      }
      logHeapRefusal(GG) {
        this.heapRefusals++, (0, FZ.z)(this.heapRefusals) && console.warn(`[bloxd-wasm-client] meshing worker ${GG} was refused memory for a chunk's mesh (${this.heapRefusals} so far)`)
      }
      giveUp(GG, bG, ZG) {
        const wG = this.slots[GG];
        if (wG.gone = !0, wG.goneFor = {
            why: bG,
            failure: ZG
          }, console.warn(`[bloxd-wasm-client] meshing worker ${GG} ${bG}: giving up on it`), this.slots.every((GG => GG.gone))) {
          this.stop();
          const GG = new Set(this.slots.map((GG => {
              var bG;
              return null === (bG = GG.goneFor) || void 0 === bG ? void 0 : bG.failure
            }))),
            bG = this.slots.map(((GG, bG) => {
              var ZG, wG;
              return `worker ${bG} ${null!==(ZG=null===(wG=GG.goneFor)||void 0===wG?void 0:wG.why)&&void 0!==ZG?ZG:"went"}`
            }));
          this.options.fail(1 === GG.size ? ZG : `no meshing worker is left (${bG.join(", ")})`)
        }
      }
      lose(GG, bG, ZG) {
        console.warn(`[bloxd-wasm-client] meshing worker ${GG} was lost: ${bG}`), this.endWorker(GG), this.stopped || (ZG ? ZG() : this.options.onWorkerLost(bG), this.tellLost(GG), this.start(GG))
      }
      endWorker(GG) {
        var bG, ZG, wG;
        const SG = this.slots[GG];
        US(SG), null === (bG = SG.worker) || void 0 === bG || bG.terminate(), SG.worker = null, SG.heapRetries = 0, null === (ZG = (wG = this.options).onMemoryGone) || void 0 === ZG || ZG.call(wG, GG)
      }
      tellLost(GG) {
        const bG = this.slots[GG];
        bG.started && (bG.started = !1, this.options.write(0, Nb.Xd.WorkerLost, 0, GG, 0, yS))
      }
      buffer(GG) {
        var bG;
        return null !== (bG = this.pooled(GG)) && void 0 !== bG ? bG : new ArrayBuffer(Math.max(16384, GG))
      }
      pooled(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          ZG = -1;
        for (let SG = 0; SG < this.pool.length; SG++) {
          const wG = this.pool[SG].byteLength;
          wG >= GG && (ZG < 0 || (bG ? wG > this.pool[ZG].byteLength : wG < this.pool[ZG].byteLength)) && (ZG = SG)
        }
        if (ZG < 0) return null;
        const wG = this.pool[ZG];
        return this.pool[ZG] = this.pool[this.pool.length - 1], this.pool.pop(), wG
      }
      recycle(GG) {
        this.pool.length < 4 * this.slots.length && GG.byteLength > 0 && GG.byteLength <= 1048576 && this.pool.push(GG)
      }
    }

    function US(GG) {
      var bG;
      null === (bG = GG.watch) || void 0 === bG || bG.cancel(), GG.watch = null
    }
    var YS = ZG(36820),
      VS = ZG(41131),
      pS = ZG(41333),
      fS = ZG(41336),
      QS = (ZG(41150), ZG(41340)),
      KS = ZG(41195);

    function hS(GG) {
      const bG = new Uint8Array(GG.length >> 2);
      for (let ZG = 0; ZG < bG.length; ZG++) bG[ZG] = GG[4 * ZG + 3];
      return bG
    }
    async function dS(GG) {
      const bG = await (0, QS.j)(GG);
      try {
        const {
          width: GG,
          height: ZG,
          pixels: wG
        } = (0, KS.n)(bG);
        return {
          width: GG,
          height: ZG,
          alpha: hS(wG)
        }
      } finally {
        bG.close()
      }
    }
    class JS {
      constructor(GG, bG, ZG) {
        let wG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : dS;
        this.session = GG, this.sources = bG, this.warn = ZG, this.load = wG, this.nextPoll = 0, this.pK = !1, this.warned = new Set
      }
      drain(GG) {
        if (GG < this.nextPoll) return;
        this.nextPoll = GG + 250;
        const bG = this.session.sunShadowWantedTextures();
        if (bG)
          for (let ZG = 0; ZG + 1 < bG.length; ZG += 2) this.hand(bG[ZG], bG[ZG + 1]);
        for (const ZG of this.session.takeSunShadowWarnings()) this.warn(ZG)
      }
      dispose() {
        this.pK = !0
      }
      async hand(GG, bG) {
        var ZG, wG, SG, LG, yG;
        let kG, UG = null;
        try {
          if (UG = await this.sources.blockImageUrl(GG), null === UG) throw new Error(`block image ${GG} has no URL`);
          kG = await this.load(UG)
        } catch (VG) {
          var YG;
          const bG = null !== (YG = UG) && void 0 !== YG ? YG : `block image ${GG}`;
          this.warned.has(bG) || (this.warned.add(bG), this.warn(`sun shadow plane texture ${bG} didn't load: its blocks cast no shadow`, VG))
        }
        this.pK || this.session.setSunShadowTexture(GG, bG, null !== (ZG = null === (wG = kG) || void 0 === wG ? void 0 : wG.width) && void 0 !== ZG ? ZG : 0, null !== (SG = null === (LG = kG) || void 0 === LG ? void 0 : LG.height) && void 0 !== SG ? SG : 0, null === (yG = kG) || void 0 === yG ? void 0 : yG.alpha)
      }
    }
    var rS = ZG(41344),
      zS = ZG(41170),
      ES = ZG(41352),
      oS = ZG(41359),
      XS = ZG(41175),
      uS = ZG(41182),
      iS = ZG(34519),
      CS = ZG(34368),
      WS = ZG(41367);
    const mS = 8192,
      IS = new Set;
    const FS = new Set([...CS.b, "sceneDownload"]);
    var vS = ZG(41092),
      aS = ZG(41374),
      cS = ZG(41383);
    const lS = new Uint8Array(0);
    let jS = null;

    function PS(GG) {
      return {
        aux: Nb.ac.AdStart | (GG ? Nb.ac.PreventMovement : 0),
        payload: lS
      }
    }
    var MS = ZG(2889),
      AS = ZG(300);
    const sS = "__bloxdSceneCapture";
    var qS = ZG(41390);
    class nS {
      constructor(GG) {
        var bG, ZG;
        this.host = GG, this.requested = null, this.landed = null, this.confirm = null, this.channel = void 0, this.oneShotStored = !0, this.startRead = void 0, this.landRequest = () => {}, this.landing = new Promise((GG => {
          this.landRequest = GG
        })), this.follow = GG => {
          let bG = GG;
          return Promise.race([this.startRead, this.landing]).then((async () => {
            const GG = null === this.requested && null !== bG;
            var ZG;
            GG && (null === (ZG = bG) || void 0 === ZG || ZG(null));
            const wG = await this.landing;
            var SG;
            null === wG && GG || (null === (SG = bG) || void 0 === SG || SG(wG))
          })), () => {
            bG = null
          }
        }, this.startRead = (ZG = GG.store, ZG.keys().then((GG => ({
          own: GG.includes(PZ.d),
          oneShot: GG.includes(PZ.h)
        })), (() => ({
          own: !0,
          oneShot: !0
        })))).then((GG => {
          let {
            own: bG,
            oneShot: ZG
          } = GG;
          this.oneShotStored = ZG, (bG || ZG) && this.request()
        })), this.channel = (null !== (bG = GG.openChannel) && void 0 !== bG ? bG : PZ.v)(), null !== this.channel && (this.channel.onmessage = () => {
          this.request()
        })
      }
      request() {
        var GG;
        if (null !== this.requested) return this.requested;
        null === (GG = this.channel) || void 0 === GG || GG.close(), this.channel = null;
        const bG = this.oneShotStored;
        return this.requested = function(GG, bG, ZG) {
          return new Promise((bG => {
            bG(GG())
          })).catch((GG => (null !== bG && (0, PZ.q)(bG), ZG(GG), null)))
        }((() => this.host.load(bG).then((GG => (GG.setGamePackConfirm(this.confirm), this.landed = GG, GG)))), bG ? this.host.store : null, this.host.NQ), this.landRequest(this.requested), this.requested
      }
      loaded() {
        return this.landed
      }
      forJoin() {
        return null !== this.requested ? this.requested : Promise.race([this.startRead, this.landing]).then((() => {
          var GG;
          return null !== (GG = this.requested) && void 0 !== GG ? GG : null
        }))
      }
      setGamePackConfirm(GG) {
        var bG;
        this.confirm = GG, null === (bG = this.landed) || void 0 === bG || bG.setGamePackConfirm(GG)
      }
    }
    var gS = ZG(36599);
    const eS = 216 * gS.h,
      RS = 92 * gS.e,
      TS = 64 * gS.h,
      HS = 16 * gS.h;

    function tS() {
      var GG, bG;
      return null !== (GG = null === (bG = performance.memory) || void 0 === bG ? void 0 : bG.vJ) && void 0 !== GG ? GG : null
    }
    class DS {
      constructor(GG, bG) {
        this.budgetBytes = GG, this.reads = bG, this.estimate = null, this.shedAt = null
      }
      read(GG) {
        var bG;
        const ZG = this.reads.storedChunks(),
          wG = this.reads.gpuBytes(),
          SG = Math.max(null !== (bG = this.reads.jsHeapBytes()) && void 0 !== bG ? bG : 0, TS),
          LG = eS + GG + SG + wG + ZG * RS;
        this.estimate = {
          wasmBytes: GG,
          jsHeapBytes: SG,
          gpuBytes: wG,
          storedChunks: ZG,
          totalBytes: LG
        }
      }
      last() {
        return this.estimate
      }
      takeShed() {
        const {
          estimate: GG,
          budgetBytes: bG,
          shedAt: ZG
        } = this;
        return !(null === GG || null === bG || GG.totalBytes < bG || null !== ZG && GG.totalBytes < ZG + HS) && (this.shedAt = GG.totalBytes, !0)
      }
      describe() {
        const {
          estimate: GG,
          budgetBytes: bG
        } = this;
        return null === GG ? null : `estimate ${(0,gS.l)(GG.totalBytes)} MiB of budget ${null===bG?"none":(0,gS.l)(bG)}: wasm ${(0,gS.l)(GG.wasmBytes)} js ${(0,gS.l)(GG.jsHeapBytes)} gpu ${(0,gS.l)(GG.gpuBytes)} chunks ${GG.storedChunks}`
      }
      snapshot() {
        const {
          estimate: GG,
          budgetBytes: bG
        } = this;
        return {
          ...null === GG ? {} : {
            footprintMiB: Number((0, gS.l)(GG.totalBytes)),
            gpuMiB: Number((0, gS.l)(GG.gpuBytes)),
            storedChunks: GG.storedChunks
          },
          footprintBudgetMiB: null === bG ? -1 : Number((0, gS.l)(bG))
        }
      }
    }
    var NS = ZG(2801),
      OS = ZG(4531),
      xS = ZG(36701),
      BS = ZG(38347);
    const GL = Ob.bb + 1,
      bL = 4096 * GL;
    class ZL {
      constructor(GG, bG) {
        this.log = GG, this.take = bG, this.Ik = [], this.unshown = new Map, this.latest = new Map
      }
      afterFrame(GG, bG) {
        const ZG = this.take();
        ZG.length >= Ob.ab && ZG[0] > 0 && (0, NS.j)("remesh", `${ZG[0]} core records lost to a full log`);
        const wG = this.Ik;
        for (let SG = Ob.ab; SG + Ob.bb <= ZG.length; SG += Ob.bb) {
          for (let GG = SG; GG < SG + Ob.bb; GG++) wG.push(ZG[GG]);
          wG.push(GG)
        }
        if (bG || !(wG.length < bL)) {
          for (let bG = 0; bG < wG.length; bG += GL) this.feed(bG, GG);
          wG.length = 0, bG && this.log.frame(GG)
        }
      }
      feed(GG, bG) {
        var ZG;
        const wG = this.Ik,
          SG = (0, BS.c)(wG[GG + 1], wG[GG + 2], wG[GG + 3]),
          LG = wG[GG + 4],
          yG = wG[GG + Ob.bb];
        switch (wG[GG]) {
          case Ob.Hb.Edit:
            this.log.edit(SG, yG);
            break;
          case Ob.Hb.Sent:
            this.latest.set(SG, LG), this.log.sent(SG, LG, wG[GG + 5], wG[GG + 6], wG[GG + 7], null !== (ZG = this.unshown.get(SG)) && void 0 !== ZG ? ZG : BS.b, yG);
            break;
          case Ob.Hb.Done: {
            this.log.received(LG, wG[GG + 5] / 1e3, yG);
            const bG = this.unshown.get(SG);
            void 0 === bG ? this.unshown.set(SG, [LG]) : bG.push(LG);
            break
          }
          case Ob.Hb.Failed: {
            const GG = this.latest.get(SG);
            void 0 !== GG && GG !== LG ? this.log.reassign(SG, LG, GG) : this.log.failed(LG), this.ended(SG, LG);
            break
          }
          case Ob.Hb.Shown:
            this.log.applied(SG, LG, bG), this.ended(SG, LG);
            break;
          case Ob.Hb.Replaced:
            this.log.reassign(SG, LG, wG[GG + 5]), this.ended(SG, LG);
            break;
          case Ob.Hb.Emptied:
            this.log.emptied(SG, bG);
            break;
          default:
            console.warn(`[debug:remesh] unknown core record kind ${wG[GG]}`)
        }
      }
      ended(GG, bG) {
        this.latest.get(GG) === bG && this.latest.delete(GG);
        const ZG = this.unshown.get(GG);
        if (void 0 === ZG) return;
        const wG = ZG.indexOf(bG);
        wG >= 0 && ZG.splice(wG, 1), 0 === ZG.length && this.unshown.delete(GG)
      }
    }
    let wL = null;
    var SL = ZG(3206),
      LL = ZG(40025);
    const yL = new Uint8Array(0);
    class kL {
      constructor(GG) {
        this.options = GG, this.worker = null, this.watch = null, this.createWorker = null, this.loading = !1, this.wanted = !1, this.Ik = [], this.startsWithoutResult = 0, this.coreWaits = !1, this.lastLoss = "", this.seed = null, this.gone = !1, this.pool = [], null !== GG.module ? GG.write(0, Nb.Xd.WorldgenStarted, 0, 0, yL) : this.giveUp()
      }
      take(GG, bG) {
        if (!(this.gone || null === this.worker && null === this.Ik))
          if (GG === Nb.Zd.WorldgenSeed) {
            const GG = 0 === bG.byteLength ? null : this.options.decodeSettings(bG);
            null === GG ? this.release() : function(GG, bG) {
              if ((null === GG || void 0 === GG ? void 0 : GG.byteLength) !== bG.byteLength) return !1;
              for (let ZG = 0; ZG < GG.byteLength; ZG++)
                if (GG[ZG] !== bG[ZG]) return !1;
              return !0
            }(this.seed, bG) || (this.seed = bG.slice(), this.startsWithoutResult = null === this.worker ? 0 : 1), this.dropHeld(), this.post({
              type: "seed",
              settings: GG
            }, []), null !== GG ? this.want() : this.loading || this.options.onMapWithoutWorldgen()
          } else if (GG === Nb.Zd.Generate) {
          var ZG;
          const GG = new DataView(bG.buffer, bG.byteOffset, Nb.Rd),
            wG = null !== (ZG = this.pool.pop()) && void 0 !== ZG ? ZG : new ArrayBuffer(8192);
          this.post({
            type: "generate",
            ticket: GG.getUint32(0, !0),
            x: GG.getInt32(4, !0),
            y: GG.getInt32(8, !0),
            z: GG.getInt32(12, !0),
            bytes: wG
          }, [wG])
        }
      }
      prestart() {
        this.gone || this.want()
      }
      stopWorker() {
        this.gone || (this.release(), this.dropHeld(), this.pool.length = 0, this.coreWaits && (this.coreWaits = !1, this.options.write(0, Nb.Xd.WorldgenStarted, 0, 0, yL)))
      }
      stop() {
        var GG;
        this.gone = !0, this.dropHeld(), this.endWatch(), null === (GG = this.worker) || void 0 === GG || GG.terminate(), this.worker = null
      }
      post(GG, bG) {
        var ZG;
        null !== this.Ik ? this.Ik.push({
          message: GG,
          transfer: bG
        }) : null === (ZG = this.worker) || void 0 === ZG || ZG.postMessage(GG, bG)
      }
      want() {
        this.wanted = !0, null === this.worker && (null === this.createWorker ? this.load() : this.start())
      }
      release() {
        this.wanted = !1, null !== this.worker && (this.endWorker(), this.startsWithoutResult = 0, this.Ik ??= [])
      }
      endWorker() {
        var GG, bG, ZG;
        this.endWatch(), null === (GG = this.worker) || void 0 === GG || GG.terminate(), this.worker = null, null === (bG = (ZG = this.options).onMemoryGone) || void 0 === bG || bG.call(ZG)
      }
      load() {
        this.loading || (this.loading = !0, this.options.loadWorker().then((GG => {
          this.createWorker = GG, this.wanted && this.start()
        }), (GG => {
          this.gone || (this.giveUp(), this.options.onLoadFailed(GG))
        })))
      }
      start() {
        const {
          module: GG
        } = this.options, bG = this.createWorker;
        if (this.gone || null === GG || null === bG) return;
        if (this.startsWithoutResult >= 3) return this.giveUp(), void this.options.onGaveUp(this.lastLoss);
        let ZG;
        this.startsWithoutResult++;
        try {
          ZG = bG()
        } catch (SG) {
          return console.warn("[bloxd-wasm-client] the world-gen worker did not start", SG), this.lastLoss = `it did not start (${String(SG)})`, void this.start()
        }
        this.worker = ZG, ZG.onmessage = GG => {
          let {
            data: bG
          } = GG;
          this.worker === ZG && this.onReply(ZG, bG)
        }, ZG.onerror = GG => {
          GG.preventDefault(), this.worker === ZG && this.lose(GG.message || "its script failed")
        };
        try {
          ZG.postMessage({
            type: "start",
            module: GG,
            rK: wG.d.rK
          })
        } catch (SG) {
          return console.warn("[bloxd-wasm-client] the world-gen worker could not be sent the module", SG), this.lastLoss = `it could not be sent the module (${String(SG)})`, ZG.terminate(), this.worker = null, void this.start()
        }
        this.watch = new LS.f(LS.e, (GG => {
          this.lose((0, LS.h)(GG), (() => {
            this.options.onStartTimeout(GG)
          }))
        }), void 0, this.options.visibility)
      }
      onReply(GG, bG) {
        switch (bG.type) {
          case "started": {
            this.endWatch();
            const bG = this.Ik;
            if (null === bG) {
              this.coreWaits = !1, this.options.write(0, Nb.Xd.WorldgenStarted, 0, 0, yL);
              break
            }
            this.Ik = null;
            for (const {
                message: ZG,
                transfer: wG
              }
              of bG) GG.postMessage(ZG, wG);
            break
          }
          case "lost":
            this.lose(bG.reason);
            break;
          case "memory":
            var ZG, wG;
            null === (ZG = (wG = this.options).onMemoryStats) || void 0 === ZG || ZG.call(wG, bG.stats);
            break;
          case "result":
            bG.status !== Nb.Bb.Trapped && (this.startsWithoutResult = 0), this.options.write(bG.ticket, Nb.Xd.WorldgenResult, bG.status, bG.workerUs, new Uint8Array(bG.bytes, 0, bG.len)), this.recycle(bG.bytes), bG.spare && this.recycle(bG.spare)
        }
      }
      lose(GG, bG) {
        console.warn(`[bloxd-wasm-client] the world-gen worker was lost: ${GG}`), this.lastLoss = GG, this.endWorker(), this.gone || (bG ? bG() : this.options.onWorkerLost(GG), this.dropHeld(), this.Ik = null, this.options.write(0, Nb.Xd.WorldgenLost, Nb._d.Lost, 0, yL), this.coreWaits = !0, this.start())
      }
      giveUp() {
        this.gone = !0, this.dropHeld(), this.options.write(0, Nb.Xd.WorldgenLost, Nb._d.Gone, 0, yL)
      }
      endWatch() {
        var GG;
        null === (GG = this.watch) || void 0 === GG || GG.cancel(), this.watch = null
      }
      dropHeld() {
        if (null !== this.Ik) {
          for (const {
              message: GG
            }
            of this.Ik) "generate" === GG.type && this.recycle(GG.bytes);
          this.Ik.length = 0
        }
      }
      recycle(GG) {
        this.pool.length < 16 && GG.byteLength > 0 && GG.byteLength <= 16384 && this.pool.push(GG)
      }
    }
    var UL = ZG(38145),
      YL = ZG(3719),
      VL = ZG(41034),
      pL = ZG(41392),
      fL = ZG(41162);
    const QL = /[(@\s]([^\s(@]+)$/,
      KL = /:\d/;

    function hL(GG, bG) {
      for (let ZG = 0; ZG + bG.length <= GG.length; ZG++) {
        let wG = 0;
        for (; wG < bG.length && GG[ZG + wG] === bG[wG];) wG++;
        if (wG === bG.length) return ZG
      }
      return -1
    }

    function dL(GG) {
      return "(" === GG || ")" === GG || "@" === GG || "," === GG || " " === GG || "\t" === GG
    }

    function JL(GG, bG) {
      let ZG = bG;
      for (; ZG > 0 && !dL(GG[ZG - 1]);) ZG--;
      let wG = bG;
      for (; wG < GG.length && !dL(GG[wG]);) wG++;
      let SG = "";
      for (let LG = ZG; LG < wG; LG++) SG += GG[LG];
      return SG
    }
    const rL = [{
        origin: "chrome-extension://dhdgffkkebhmkfjojejmpbldmpobfkfo",
        tag: "TM"
      }, {
        origin: "chrome-extension://iikmkjmpaadaobahmlepeloendndfphd",
        tag: "TM-Edge"
      }, {
        origin: "chrome-extension://gcalenpjmijncebpfijmoaglllgpjagf",
        tag: "TM-Beta"
      }],
      zL = /^\/[^\s?#]*\?(?:[^\s&#]*&)*?name=([^\s&#]*?)(?::\d+)*(?:[\s&#]|\)(?:[,\s]|$)|$)/,
      EL = ".user.js";

    function oL(GG, bG) {
      let ZG = 0;
      for (; ZG < rL.length && rL[ZG].origin !== bG[0];) ZG++;
      if (ZG === rL.length) return bG[0];
      let wG = "";
      for (let yG = bG.index + bG[0].length; yG < GG.length; yG++) wG += GG[yG];
      const SG = (0, Nw.p)(Nw.W, zL, [wG]),
        LG = null === SG ? "" : function(GG) {
          let bG = GG.length,
            ZG = 0;
          for (; ZG < 8 && bG > 8 && GG[bG - 8 + ZG] === EL[ZG];) ZG++;
          8 === ZG && (bG -= 8);
          let wG = "",
            SG = !1;
          for (let LG = 0; LG < bG; LG++) {
            let bG = GG[LG];
            "+" === bG ? bG = " " : "%" === bG && (bG = "2" === GG[LG + 1] && "0" === GG[LG + 2] ? " " : "_", LG += 2), -1 !== hL("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 .-", bG) ? (wG += bG, SG = !1) : SG || (wG += "_", SG = !0)
          }
          return wG
        }(SG[1]);
      return "" === LG ? bG[0] : rL[ZG].tag + " " + LG
    }

    function XL(GG, bG) {
      var ZG;
      const wG = /[^\n]+/g,
        SG = /\b(?!wasm:)[a-z][\w+.-]*:\/\/[\w.:%~+[\]-]*/i,
        LG = /^([^?#)]*?)(?::\d+)*(?:[?#)]|$)/;
      let yG = null,
        kG = null,
        UG = (0, Nw.p)(Nw.W, wG, [GG]);
      for (; null !== UG;) {
        const ZG = (0, Nw.p)(Nw.W, SG, [UG[0]]),
          YG = null === bG ? -1 : hL(UG[0], bG);
        if (-1 !== YG) {
          if (null !== ZG) return oL(UG[0], ZG);
          const GG = JL(UG[0], YG),
            bG = (0, Nw.p)(Nw.W, QL, [UG[0]]),
            wG = null !== (0, Nw.p)(Nw.W, KL, [GG]) ? GG : null === bG ? null : bG[1],
            SG = null === wG ? null : (0, Nw.p)(Nw.W, LG, [wG]);
          if (null !== SG && "" !== SG[1]) return SG[1]
        }
        null !== ZG && (null === yG ? yG = ZG[0] : null === kG && ZG[0] !== yG && (kG = ZG[0])), UG = (0, Nw.p)(Nw.W, wG, [GG])
      }
      return null !== (ZG = kG) && void 0 !== ZG ? ZG : null === yG ? "none" : "own"
    }
    const uL = /:(\d+):(\d+)\)?$/;

    function iL(GG, bG) {
      const ZG = (0, Nw.p)(Nw.W, uL, [bG]);
      return null === ZG ? GG : GG + ":" + ZG[1] + ":" + ZG[2]
    }

    function CL(GG) {
      const bG = /[^\n]+/g,
        ZG = /\b(?!wasm:)((?:blob:)?)(([a-z][\w+.-]*):\/\/[\w.:%~+[\]-]*)((?:[^\s()@?#]*\/)?)([^\s()@?#:]*)/i;
      let wG = null,
        SG = "",
        LG = !1,
        yG = (0, Nw.p)(Nw.W, bG, [GG]);
      for (; null !== yG;) {
        const kG = (0, Nw.p)(Nw.W, ZG, [yG[0]]),
          UG = null === kG ? (0, Nw.p)(Nw.W, QL, [yG[0]]) : null,
          YG = null !== UG && null !== (0, Nw.p)(Nw.W, KL, [UG[1]]) && 0 !== hL(UG[1], "wasm:") ? UG[1] : null;
        if (null === wG) null !== kG ? (wG = kG[2], SG = kG[4]) : null !== YG && (wG = "");
        else if (null !== kG) {
          if (LG = !0, "" !== kG[1]) return {
            reader: "inline",
            frame: iL("blob", yG[0])
          };
          if (kG[2] !== wG) {
            const GG = "moz-extension" === kG[3] || "safari-web-extension" === kG[3];
            let bG = "";
            for (let ZG = 0; ZG < kG[5].length && ZG < 20; ZG++) bG += kG[5][ZG];
            return {
              reader: GG ? kG[3] : kG[2],
              frame: iL("" === bG ? "-" : bG, yG[0])
            }
          }
          if (kG[4] !== SG) return {
            reader: "inline",
            frame: iL("inline", yG[0])
          }
        } else if (null !== YG) {
          const GG = -1 !== hL(yG[0], "userscript") || -1 !== hL(yG[0], ".user.js");
          return {
            reader: GG ? "userscript" : "inline",
            frame: iL(GG ? "userscript" : "eval", yG[0])
          }
        }
        yG = (0, Nw.p)(Nw.W, bG, [GG])
      }
      const kG = LG ? "own" : "unknown";
      return {
        reader: kG,
        frame: kG
      }
    }

    function WL(GG, bG) {
      return (0, UL.d)(function(GG) {
        if ("string" !== typeof GG || 0 === GG.length) return "-";
        let bG = 2166136261;
        const ZG = GG.length < 4096 ? GG.length : 4096;
        for (let SG = 0; SG <= ZG; SG++) bG ^= SG === ZG ? GG.length : (0, Nw.p)(Nw.gb, GG, [SG]), bG = bG + (bG << 1) + (bG << 4) + (bG << 7) + (bG << 8) + (bG << 24) >>> 0;
        let wG = "";
        for (let SG = 28; SG >= 0; SG -= 4) wG += "0123456789abcdef" [bG >>> SG & 15];
        return wG
      }(bG), CL(GG).frame)
    }
    const mL = (GG, bG) => GG.includes(bG),
      IL = GG => {
        try {
          return GG()
        } catch {
          return !1
        }
      },
      FL = -1,
      vL = GG => {
        try {
          return GG()
        } catch {
          return FL
        }
      };

    function aL(GG, bG) {
      return {
        probe: (ZG, wG, SG) => {
          try {
            return ((ZG, wG, SG) => {
              switch (ZG) {
                case Nb.qc.StackCheck:
                  return bG.stackCheck() ? 1 : 0;
                case Nb.qc.ConfirmMesh:
                  return bG.confirmMesh();
                case Nb.qc.IndexPassReplaced:
                  return bG.indexPassReplaced() ? 1 : 0;
                case Nb.qc.ProductSubChanged:
                  return bG.productSubChanged() ? 1 : 0;
                case Nb.qc.RenderStatus:
                  return bG.Lk();
                case Nb.qc.Held:
                  return bG.Ik();
                case Nb.qc.PlayerKilledSubs:
                  return bG.playerKilledSubs();
                case Nb.nb: {
                  const ZG = bG.getComplete();
                  return null === ZG ? 0 : (0, Nw.p)(Nw.x, Nw.kb, [ZG, new Nw.c((0, Nw.H)(GG()), wG, SG)]).written
                }
                default:
                  return 0
              }
            })(ZG, wG, SG)
          } catch {
            return Nb.ic
          }
        }
      }
    }
    class cL {
      constructor(GG) {
        this.write = GG, this.flagsWritten = 0, this.written = (0, Nw.q)(null)
      }
      Tp(GG) {
        let {
          flags: bG,
          values: ZG
        } = GG;
        for (let wG = 0; wG < ZG.length; wG++) this.value(ZG[wG][0], ZG[wG][1]);
        this.setFlags(bG | Nb.g.Ready)
      }
      value(GG, bG) {
        this.written[GG] !== bG && this.write(GG, bG, 0) && (this.written[GG] = bG)
      }
      setFlags(GG) {
        const bG = GG & ~this.flagsWritten;
        0 !== bG && this.write(Nb.k.Flags, bG, bG) && (this.flagsWritten |= bG)
      }
      originStackHit() {
        return this.write(Nb.k.Flags, Nb.g.OriginStackHit, Nb.g.OriginStackHit)
      }
    }
    const lL = {
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
      jL = 1e3;
    let PL;
    const ML = ["length", 1, 0, 2, 3, "d", 8, 16, "c", "aKosDd", "R", 512, "b", "012345", void 0, 4, 15, 64, 127, "a", 5, 6, 243, 50, 1023, 63, 128, 12, 255, 24, 32, 124, 7, 18, 10, 19, 101, 151, 65535, 97, null, "u", "cw==", 1e5, !1, 53, "stack", "name", 223, 228, 120, 21, 74, !0, "../red", "acted.", "js", 245, 99, 168, "q", "=", ";", " ", 33554432, 67108864, 26, "e", 42, 171, 111, 231, 52, 143, "string", "m", 224, 90, 55296, 56319, 56320, 179, 65536, 33, 57343, 60, 31, 192, 240, 30, 207, "Invalid byte index", "Invalid continuation byte", "p", 78, "h", 9, 11, 236, 167, "l", "__GLOB", "AL__HE", "LPERS_", "_", 196, 163, "functi", "on", 62, 27, "protot", "ype", "decode", "I=", "eTR5bm", "v", "t", "r", "C", "Kd", "s", "g", "chEven", "dispat", "w", "now", "confir", "mMesh", "produc", "player", "Killed", "number", "toString", "get", "o", 157, "None", 13, "En", "k", "tOverw", "ritten", "plete"];

    function AL() {}

    function sL() {
      sL = function() {}
    }
    PL = function(GG) {
      let bG = arguments[ML[0]] > ML[1] && arguments[ML[1]] !== ML[14] ? arguments[ML[1]] : (...GG) => (GG[ML[0]] = ML[2], "LycLVE" in AL && function(...GG) {
          sL(GG[ML[0]] = ML[2], GG[ML[5]] = function(...GG) {
            function bG(...GG) {
              return GG[ML[0]] = ML[1], kG(LG(VG(GG[ML[2]])))
            }

            function ZG(...GG) {
              return GG[ML[0]] = ML[3], kG(yG(VG(GG[ML[2]]), VG(GG[ML[1]])))
            }

            function wG(...GG) {
              return GG[ML[0]] = ML[3], UG(yG(VG(GG[ML[2]]), VG(GG[ML[1]])))
            }

            function SG(...GG) {
              return GG[ML[0]] = ML[4], YG(yG(VG(GG[ML[2]]), VG(GG[ML[1]])), GG[ML[3]])
            }

            function LG(...GG) {
              return GG[ML[0]] = ML[1], fG(oG(pG(GG[ML[2]]), GG[ML[2]].length * ML[6]))
            }

            function yG(...GG) {
              sL(GG[ML[0]] = ML[3], GG[ML[3]] = pG(GG[ML[2]])), GG[ML[3]].length > ML[7] && (GG[ML[3]] = oG(GG[ML[3]], GG[ML[2]].length * ML[6]));
              var bG = Array(ML[7]),
                ZG = Array(ML[7]);
              for (GG[ML[4]] = ML[2]; GG[ML[4]] < ML[7]; GG[ML[4]]++) sL(bG[GG[ML[4]]] = 909522486 ^ GG[ML[3]][GG[ML[4]]], ZG[GG[ML[4]]] = 1549556828 ^ GG[ML[3]][GG[ML[4]]]);
              return GG[ML[8]] = oG(bG.concat(pG(GG[ML[1]])), ML[11] + GG[ML[1]].length * ML[6]), fG(oG(ZG.concat(GG[ML[8]]), function(...GG) {
                if (GG[ML[0]] = ML[4], GG[ML[2]] === ML[9] + ML[10]) return GG[ML[1]] + GG[ML[3]]
              }(ML[9] + ML[10], ML[11], 256)))
            }

            function kG(...bG) {
              bG[ML[0]] = ML[1];
              try {
                GG[ML[12]]
              } catch (ZG) {
                GG[ML[12]] = ML[2]
              }
              for (sL(bG[ML[1]] = GG[ML[12]] ? ML[13] + "6789ABCDEF" : ML[13] + "6789abcdef", bG[ML[3]] = "", bG[ML[4]] = ML[14]), bG[ML[15]] = ML[2]; bG[ML[15]] < bG[ML[2]].length; bG[ML[15]]++) sL(bG[ML[4]] = bG[ML[2]].charCodeAt(bG[ML[15]]), bG[ML[3]] += bG[ML[1]].charAt(bG[ML[4]] >>> ML[15] & ML[16]) + bG[ML[1]].charAt(bG[ML[4]] & ML[16]));
              return bG[ML[3]]
            }

            function UG(...bG) {
              bG[ML[0]] = ML[1];
              try {
                GG[-ML[17]]
              } catch (ZG) {
                GG[-ML[17]] = ""
              }
              for (sL(bG[ML[19]] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", bG[ML[12]] = "", bG[ML[8]] = bG[ML[2]].length), bG[ML[15]] = ML[2]; bG[ML[15]] < bG[ML[8]]; bG[ML[15]] += ML[4])
                for (bG[ML[20]] = bG[ML[2]].charCodeAt(bG[ML[15]]) << ML[7] | (bG[ML[15]] + ML[1] < bG[ML[8]] ? bG[ML[2]].charCodeAt(bG[ML[15]] + ML[1]) << ML[6] : ML[2]) | (bG[ML[15]] + ML[3] < bG[ML[8]] ? bG[ML[2]].charCodeAt(bG[ML[15]] + ML[3]) : ML[2]), bG[-ML[18]] = ML[2]; bG[-ML[18]] < ML[15]; bG[-ML[18]]++) bG[ML[15]] * ML[6] + bG[-ML[18]] * ML[21] > bG[ML[2]].length * ML[6] ? bG[ML[12]] += GG[-ML[17]] : bG[ML[12]] += bG[ML[19]].charAt(bG[ML[20]] >>> ML[21] * (ML[4] - bG[-ML[18]]) & ML[25]);
              return bG[ML[12]]
            }

            function YG(...GG) {
              var bG, ZG, wG, SG;
              for (sL(GG[ML[0]] = ML[3], GG[ML[22]] = GG[ML[1]].length, GG[ML[12]] = Array()), GG[ML[8]] = Array(Math.ceil(GG[ML[2]].length / ML[3])), bG = ML[2]; bG < GG[ML[8]].length; bG++) GG[ML[8]][bG] = GG[ML[2]].charCodeAt(bG * ML[3]) << ML[6] | GG[ML[2]].charCodeAt(bG * ML[3] + ML[1]);
              for (; GG[ML[8]].length > ML[2];) {
                for (sL(SG = Array(), wG = ML[2]), bG = ML[2]; bG < GG[ML[8]].length; bG++) sL(wG = (wG << ML[7]) + GG[ML[8]][bG], ZG = Math.floor(wG / GG[ML[22]]), wG -= ZG * GG[ML[22]]), (SG.length > ML[2] || ZG > ML[2]) && (SG[SG.length] = ZG);
                sL(GG[ML[12]][GG[ML[12]].length] = wG, GG[ML[8]] = SG)
              }
              for (GG[ML[5]] = "", bG = GG[ML[12]].length - ML[1]; bG >= ML[2]; bG--) GG[ML[5]] += GG[ML[1]].charAt(GG[ML[12]][bG]);
              for (GG[-ML[23]] = Math.ceil(GG[ML[2]].length * ML[6] / (Math.log(GG[ML[1]].length) / Math.log(ML[3]))), bG = GG[ML[5]].length; bG < GG[-ML[23]]; bG++) GG[ML[5]] = GG[ML[1]][ML[2]] + GG[ML[5]];
              return GG[ML[5]]
            }

            function VG(...GG) {
              var bG, ZG;
              for (sL(GG[ML[0]] = ML[1], GG[ML[1]] = "", GG[ML[3]] = -ML[1]); ++GG[ML[3]] < GG[ML[2]].length;) sL(bG = GG[ML[2]].charCodeAt(GG[ML[3]]), ZG = GG[ML[3]] + ML[1] < GG[ML[2]].length ? GG[ML[2]].charCodeAt(GG[ML[3]] + ML[1]) : ML[2]), ML[78] <= bG && bG <= ML[79] && ML[80] <= ZG && ZG <= ML[84] && sL(bG = ML[82] + ((bG & ML[24]) << ML[34]) + (ZG & ML[24]), GG[ML[3]]++), bG <= ML[18] ? GG[ML[1]] += String.fromCharCode(bG) : bG <= 2047 ? GG[ML[1]] += String.fromCharCode(ML[87] | bG >>> ML[21] & ML[86], ML[26] | bG & ML[25]) : bG <= ML[38] ? GG[ML[1]] += String.fromCharCode(ML[76] | bG >>> ML[27] & ML[16], ML[26] | bG >>> ML[21] & ML[25], ML[26] | bG & ML[25]) : bG <= 2097151 && (GG[ML[1]] += String.fromCharCode(ML[88] | bG >>> ML[33] & ML[32], ML[26] | bG >>> ML[27] & ML[25], ML[26] | bG >>> ML[21] & ML[25], ML[26] | bG & ML[25]));
              return GG[ML[1]]
            }

            function pG(...GG) {
              for (sL(GG[ML[0]] = ML[1], GG[ML[1]] = Array(GG[ML[2]].length >> ML[3])), GG[-ML[29]] = ML[2]; GG[-ML[29]] < GG[ML[1]].length; GG[-ML[29]]++) GG[ML[1]][GG[-ML[29]]] = ML[2];
              for (GG[-ML[29]] = ML[2]; GG[-ML[29]] < GG[ML[2]].length * ML[6]; GG[-ML[29]] += ML[6]) GG[ML[1]][GG[-ML[29]] >> ML[20]] |= (GG[ML[2]].charCodeAt(GG[-ML[29]] / ML[6]) & ML[28]) << ML[29] - GG[-ML[29]] % ML[30];
              return GG[ML[1]]
            }

            function fG(...GG) {
              for (sL(GG[ML[0]] = ML[1], GG[-ML[31]] = ""), GG[ML[12]] = ML[2]; GG[ML[12]] < GG[ML[2]].length * ML[30]; GG[ML[12]] += ML[6]) GG[-ML[31]] += String.fromCharCode(GG[ML[2]][GG[ML[12]] >> ML[20]] >>> ML[29] - GG[ML[12]] % ML[30] & ML[28]);
              return GG[-ML[31]]
            }

            function QG(...GG) {
              return GG[ML[0]] = ML[3], GG[ML[2]] >>> GG[ML[1]] | GG[ML[2]] << ML[30] - GG[ML[1]]
            }

            function KG(...GG) {
              return GG[ML[0]] = ML[3], GG[ML[2]] >>> GG[ML[1]]
            }

            function hG(...GG) {
              return GG[ML[0]] = ML[4], GG[ML[2]] & GG[ML[1]] ^ ~GG[ML[2]] & GG[ML[3]]
            }

            function dG(...GG) {
              return GG[ML[0]] = ML[4], GG[ML[2]] & GG[ML[1]] ^ GG[ML[2]] & GG[ML[3]] ^ GG[ML[1]] & GG[ML[3]]
            }

            function JG(...GG) {
              return GG[ML[0]] = ML[1], QG(GG[ML[2]], ML[3]) ^ QG(GG[ML[2]], ML[138]) ^ QG(GG[ML[2]], 22)
            }

            function rG(...GG) {
              return GG[ML[0]] = ML[1], QG(GG[ML[2]], ML[21]) ^ QG(GG[ML[2]], ML[97]) ^ QG(GG[ML[2]], 25)
            }

            function zG(...GG) {
              return GG[ML[0]] = ML[1], QG(GG[ML[2]], ML[32]) ^ QG(GG[ML[2]], ML[33]) ^ KG(GG[ML[2]], ML[4])
            }

            function EG(...GG) {
              return GG[ML[0]] = ML[1], QG(GG[ML[2]], 17) ^ QG(GG[ML[2]], ML[35]) ^ KG(GG[ML[2]], ML[34])
            }

            function oG(...bG) {
              var ZG, wG, SG, LG, yG, kG, UG, YG, VG, pG, fG, QG;
              for (sL(bG[ML[0]] = ML[3], bG[ML[36]] = new Array(1779033703, -1150833019, 1013904242, -1521486534, 1359893119, -1694144372, 528734635, 1541459225), bG[-ML[37]] = new Array(ML[17])), sL(bG[ML[2]][bG[ML[1]] >> ML[20]] |= ML[26] << ML[29] - bG[ML[1]] % ML[30], bG[ML[2]][(bG[ML[1]] + ML[17] >> ML[96] << ML[15]) + ML[16]] = bG[ML[1]]), VG = ML[2]; VG < bG[ML[2]].length; VG += ML[7]) {
                for (sL(ZG = bG[ML[36]][ML[2]], wG = bG[ML[36]][ML[1]], SG = bG[ML[36]][ML[3]], LG = bG[ML[36]][ML[4]], yG = bG[ML[36]][ML[15]], kG = bG[ML[36]][ML[20]], UG = bG[ML[36]][ML[21]], YG = bG[ML[36]][ML[32]]), pG = ML[2]; pG < ML[17]; pG++) sL(bG[-ML[37]][pG] = pG < ML[7] ? bG[ML[2]][pG + VG] : XG(XG(XG(EG(bG[-ML[37]][pG - ML[3]]), bG[-ML[37]][pG - ML[32]]), zG(bG[-ML[37]][pG - ML[16]])), bG[-ML[37]][pG - ML[7]]), fG = XG(XG(XG(XG(YG, rG(yG)), hG(yG, kG, UG)), GG[ML[5]][pG]), bG[-ML[37]][pG]), QG = XG(JG(ZG), dG(ZG, wG, SG)), YG = UG, UG = kG, kG = yG, yG = XG(LG, fG), LG = SG, SG = wG, wG = ZG, ZG = XG(fG, QG));
                sL(bG[ML[36]][ML[2]] = XG(ZG, bG[ML[36]][ML[2]]), bG[ML[36]][ML[1]] = XG(wG, bG[ML[36]][ML[1]]), bG[ML[36]][ML[3]] = XG(SG, bG[ML[36]][ML[3]]), bG[ML[36]][ML[4]] = XG(LG, bG[ML[36]][ML[4]]), bG[ML[36]][ML[15]] = XG(yG, bG[ML[36]][ML[15]]), bG[ML[36]][ML[20]] = XG(kG, bG[ML[36]][ML[20]]), bG[ML[36]][ML[21]] = XG(UG, bG[ML[36]][ML[21]]), bG[ML[36]][ML[32]] = XG(YG, bG[ML[36]][ML[32]]))
              }
              return bG[ML[36]]
            }

            function XG(...GG) {
              return sL(GG[ML[0]] = ML[3], GG[ML[39]] = (GG[ML[2]] & ML[38]) + (GG[ML[1]] & ML[38]), GG[ML[12]] = (GG[ML[2]] >> ML[7]) + (GG[ML[1]] >> ML[7]) + (GG[ML[39]] >> ML[7])), GG[ML[12]] << ML[7] | GG[ML[39]] & ML[38]
            }
            return sL(GG[ML[0]] = ML[2], GG[ML[12]] = ML[2], GG[-ML[17]] = ""), GG[ML[5]] = new Array(1116352408, 1899447441, -1245643825, -373957723, 961987163, 1508970993, -1841331548, -1424204075, -670586216, 310598401, 607225278, 1426881987, 1925078388, -2132889090, -1680079193, -1046744716, -459576895, -272742522, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, -1740746414, -1473132947, -1341970488, -1084653625, -958395405, -710438585, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, -2117940946, -1838011259, -1564481375, -1474664885, -1035236496, -949202525, -778901479, -694614492, -200395387, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, -2067236844, -1933114872, -1866530822, -1538233109, -1090935817, -965641998), {
              hex: bG,
              b64: wG,
              any: SG,
              hex_hmac: ZG,
              b64_hmac: wG,
              any_hmac: SG
            }
          }(), console.log(GG[ML[5]]))
        }(), ML[40]),
        ZG = arguments[ML[0]] > ML[3] && arguments[ML[3]] !== ML[14] ? arguments[ML[3]] : ML[40],
        wG = arguments[ML[0]] > ML[4] && arguments[ML[4]] !== ML[14] ? arguments[ML[4]] : "";
      const SG = window,
        LG = (0, Nw[ML[41]])("RXJyb3" + ML[114]),
        yG = (0, Nw[ML[41]])("c3RhY2s="),
        kG = (0, Nw[ML[41]])("Y2FwdHVyZVN0YWNrVHJhY2U="),
        YG = (0, Nw[ML[41]])("c3RhY2tUcmFjZUxpbWl0"),
        VG = (0, Nw[ML[41]])("bmF0aXZl"),
        pG = [(0, Nw[ML[41]])("bWFpbi5qcw=="), (0, Nw[ML[41]])("aW5kZXguanM="), (0, Nw[ML[41]])("dXNlcnNjcmlwdA=="), (0, Nw[ML[41]])("Y29udGVudC5q" + ML[42]), (0, Nw[ML[41]])("b3B0aW9ucy5q" + ML[42]), (0, Nw[ML[41]])("cG9wdXAuanM="), (0, Nw[ML[41]])("LnVzZXIuanM="), (0, Nw[ML[41]])("Y2hyb21lLWV4dGVuc2lvbg==")],
        fG = (...GG) => {
          GG[ML[0]] = ML[1];
          const bG = SG[LG],
            ZG = bG;
          if (ZG[YG] < ML[43]) {
            function hG(...GG) {
              GG[ML[0]] = ML[2];
              const bG = require("path"),
                {
                  version: ZG
                } = require("../../package"),
                {
                  version: wG
                } = require("@redacted/enterprise-plugin/package"),
                {
                  version: SG
                } = require("@redacted/components/package"),
                {
                  sdkVersion: LG
                } = require("@redacted/enterprise-plugin");
              require("../utils/isStandaloneExecutable"), require("./resolve-local-redacted-path"), bG.resolve(__dirname, ML[54] + ML[55] + ML[56])
            }
            "gGv4W5" in AL && hG(), ZG[YG] = ML[43]
          }
          const wG = "string" === typeof(fG = (new bG)[yG]) ? fG : `${fG}`,
            UG = {},
            VG = ZG[kG];
          var fG;
          if (typeof VG === ML[107] + ML[108]) {
            function dG(...GG) {
              function bG(...GG) {
                if (GG[ML[0]] = ML[1], !GG[ML[2]]) return -ML[1];
                const ZG = bG(GG[ML[2]].left),
                  wG = bG(GG[ML[2]].right),
                  SG = Math.abs(ZG - wG);
                if (ZG === 1 / 0 || wG === 1 / 0 || SG > ML[1]) return 1 / 0;
                return Math.max(ZG, wG) + ML[1]
              }
              GG[ML[0]] = ML[2], window[ML[101] + ML[102] + ML[103] + ML[104]] = {
                buildCharacterMap: function(...GG) {
                  GG[ML[0]] = ML[1];
                  const bG = {};
                  for (let ZG of GG[ML[2]].replace(/[^w]/g, "").toLowerCase()) bG[ZG] = bG[ZG] + ML[1] || ML[1];
                  return bG
                },
                isAnagrams: function(...GG) {
                  GG[ML[0]] = ML[3];
                  const bG = buildCharMap(GG[ML[2]]),
                    ZG = buildCharMap(GG[ML[1]]);
                  for (let wG in bG)
                    if (bG[wG] !== ZG[wG]) return ML[44];
                  return Object.keys(bG).length !== Object.keys(ZG).length ? ML[44] : ML[53]
                },
                isBalanced: function(...GG) {
                  return GG[ML[0]] = ML[1], bG(GG[ML[2]]) !== 1 / 0
                },
                getHeightBalanced: bG
              }
            }
            "ca9gfj" in AL && dG(), (0, Nw[ML[93]])(VG, bG, [UG])
          }
          const QG = UG[yG],
            KG = GG[ML[2]] ? pG[ML[0]] : pG[ML[0]] - ML[1];
          for (let JG = ML[2]; JG < KG; JG++) {
            function rG(...GG) {
              sL(GG[ML[0]] = ML[2], GG[ML[45]] = function(...bG) {
                return sL(bG[ML[0]] = ML[3], bG[ML[19]] = [], bG[ML[4]] = bG[ML[2]].length, bG[ML[2]].sort(((GG, bG) => GG - bG)), GG[ML[1]](bG[ML[19]], [], ML[2], bG[ML[4]], bG[ML[2]], bG[ML[1]])), bG[ML[19]]
              }, GG[ML[1]] = function(...bG) {
                if (sL(bG[ML[0]] = ML[21], bG[ML[21]] = ML[40]), !(bG[ML[20]] < ML[2])) {
                  if (bG[ML[20]] === ML[2]) return bG[ML[2]].push(bG[ML[1]]);
                  for (bG[ML[12]] = bG[ML[3]]; bG[ML[12]] < bG[ML[4]] && !(bG[ML[15]][bG[ML[12]]] > bG[ML[20]]); bG[ML[12]]++) bG[ML[12]] > bG[ML[3]] && bG[ML[15]][bG[ML[12]]] === bG[ML[15]][bG[ML[12]] - ML[1]] || sL(bG[ML[21]] = Array.from(bG[ML[1]]), bG[ML[21]].push(bG[ML[15]][bG[ML[12]]]), GG[ML[1]](bG[ML[2]], bG[ML[21]], bG[ML[12]] + ML[1], bG[ML[4]], bG[ML[15]], bG[ML[20]] - bG[ML[15]][bG[ML[12]]]))
                }
              }, console.log(GG[ML[45]]))
            }
            if ("ZwPwB5" in AL && rG(), mL(wG, pG[JG])) return {
              [ML[46]]: wG,
              [ML[47]]: pG[JG]
            };
            if (typeof QG === ML[74] && mL(QG, pG[JG])) return {
              [ML[46]]: QG,
              [ML[47]]: pG[JG]
            }
          }
          return ML[40]
        },
        QG = (...GG) => (GG[ML[0]] = ML[1], "ICUYgt" + ML[100] in AL && function(...GG) {
          sL(GG[ML[0]] = ML[2], GG[ML[19]] = function(...GG) {
            for (sL(GG[ML[0]] = ML[1], GG[-ML[48]] = GG[ML[2]].length, GG[ML[12]] = [], GG[ML[49]] = ML[2], GG[-ML[50]] = ML[2], GG[ML[2]].sort(((GG, bG) => GG - bG))), GG[ML[20]] = ML[2]; GG[ML[20]] < GG[-ML[48]]; GG[ML[20]]++)
              if (!(GG[ML[20]] > ML[2] && GG[ML[2]][GG[ML[20]]] === GG[ML[2]][GG[ML[20]] - ML[1]]))
                for (sL(GG[ML[49]] = GG[ML[20]] + ML[1], GG[-ML[50]] = GG[-ML[48]] - ML[1]); GG[ML[49]] < GG[-ML[50]];)
                  if (GG[ML[2]][GG[ML[20]]] + GG[ML[2]][GG[ML[49]]] + GG[ML[2]][GG[-ML[50]]] < ML[2]) GG[ML[49]]++;
                  else if (GG[ML[2]][GG[ML[20]]] + GG[ML[2]][GG[ML[49]]] + GG[ML[2]][GG[-ML[50]]] > ML[2]) GG[-ML[50]]--;
            else {
              for (GG[ML[12]].push([GG[ML[2]][GG[ML[20]]], GG[ML[2]][GG[ML[49]]], GG[ML[2]][GG[-ML[50]]]]); GG[ML[49]] < GG[-ML[50]] && GG[ML[2]][GG[ML[49]]] === GG[ML[2]][GG[ML[49]] + ML[1]];) GG[ML[49]]++;
              for (; GG[ML[49]] < GG[-ML[50]] && GG[ML[2]][GG[-ML[50]]] === GG[ML[2]][GG[-ML[50]] - ML[1]];) GG[-ML[50]]--;
              sL(GG[ML[49]]++, GG[-ML[50]]--)
            }
            return GG[ML[12]]
          }, console.log(GG[ML[19]]))
        }(), fG(GG[ML[2]]) !== ML[40]);
      let KG = ML[40],
        hG = ML[40],
        dG = ML[40],
        JG = ML[40];
      const rG = (...GG) => {
        GG[ML[0]] = ML[1], "XY6FTTZ" in AL && function(...GG) {
          GG[ML[0]] = ML[2]
        }();
        try {
          return GG[ML[2]]()
        } catch {
          function bG(...GG) {
            function bG() {}
            GG[ML[0]] = ML[2], sL(GG[-ML[18]] = function(...GG) {
              for (sL(GG[ML[0]] = ML[3], GG[ML[19]] = ML[2], GG[ML[12]] = ML[2], GG[ML[15]] = new bG(ML[2]), GG[ML[20]] = GG[ML[15]], GG[-ML[52]] = GG[ML[2]], GG[ML[32]] = GG[ML[1]]); GG[-ML[52]] !== ML[40] || GG[ML[32]] !== ML[40];) sL(GG[ML[12]] = (GG[-ML[52]] ? GG[-ML[52]].val : ML[2]) + (GG[ML[32]] ? GG[ML[32]].val : ML[2]) + GG[ML[19]], GG[ML[19]] = Math.floor(GG[ML[12]] / ML[34]), GG[ML[20]].next = new bG(GG[ML[12]] % ML[34]), GG[ML[20]] = GG[ML[20]].next, GG[-ML[52]] = GG[-ML[52]] ? GG[-ML[52]].next : ML[40], GG[ML[32]] = GG[ML[32]] ? GG[ML[32]].next : ML[40]);
              return GG[ML[19]] && (GG[ML[20]].next = new bG(GG[ML[19]])), GG[ML[15]].next
            }, console.log(GG[-ML[18]]))
          }
          return "pcUpbQ" + ML[75] in AL && bG(), ML[53]
        }
      };
      let zG = ML[44];
      const EG = () => {
          if (!zG && (0, Nw[ML[125]])()) {
            function GG(...GG) {
              GG[ML[0]] = ML[2];
              const bG = require("path"),
                {
                  version: ZG
                } = require("../../package"),
                {
                  version: wG
                } = require("@redacted/enterprise-plugin/package"),
                {
                  version: SG
                } = require("@redacted/components/package"),
                {
                  sdkVersion: LG
                } = require("@redacted/enterprise-plugin");
              require("../utils/isStandaloneExecutable"), require("./resolve-local-redacted-path"), bG.resolve(__dirname, ML[54] + ML[55] + ML[56])
            }
            "JlqOFa" in AL && GG(), zG = ML[53]
          }
        },
        oG = (...GG) => {
          GG[ML[0]] = ML[1];
          try {
            function bG(...GG) {
              GG[ML[0]] = ML[2]
            }
            return "KZPxhD" + ML[41] in AL && bG(), GG[ML[2]]()
          } catch {
            return ML[14]
          }
        },
        XG = (...GG) => {
          GG[ML[0]] = ML[1];
          try {
            function bG(...GG) {
              sL(GG[ML[0]] = ML[2], GG[ML[59]] = function(...bG) {
                return sL(bG[ML[0]] = ML[4], bG[ML[4]] = {}), bG[ML[3]].length !== bG[ML[2]].length + bG[ML[1]].length ? ML[44] : GG[ML[1]](bG[ML[2]], bG[ML[1]], bG[ML[3]], ML[2], ML[2], ML[2], bG[ML[4]])
              }, GG[ML[1]] = function(...bG) {
                return sL(bG[ML[0]] = ML[32], bG[ML[32]] = ML[44]), bG[ML[20]] >= bG[ML[3]].length ? ML[53] : bG[ML[21]]["" + bG[ML[4]] + bG[ML[15]] + bG[ML[20]]] !== ML[14] ? bG[ML[21]]["" + bG[ML[4]] + bG[ML[15]] + bG[ML[20]]] : (bG[ML[3]][bG[ML[20]]] === bG[ML[2]][bG[ML[4]]] && bG[ML[3]][bG[ML[20]]] === bG[ML[1]][bG[ML[15]]] ? bG[ML[32]] = GG[ML[1]](bG[ML[2]], bG[ML[1]], bG[ML[3]], bG[ML[4]] + ML[1], bG[ML[15]], bG[ML[20]] + ML[1], bG[ML[21]]) || GG[ML[1]](bG[ML[2]], bG[ML[1]], bG[ML[3]], bG[ML[4]], bG[ML[15]] + ML[1], bG[ML[20]] + ML[1], bG[ML[21]]) : bG[ML[3]][bG[ML[20]]] === bG[ML[2]][bG[ML[4]]] ? bG[ML[32]] = GG[ML[1]](bG[ML[2]], bG[ML[1]], bG[ML[3]], bG[ML[4]] + ML[1], bG[ML[15]], bG[ML[20]] + ML[1], bG[ML[21]]) : bG[ML[3]][bG[ML[20]]] === bG[ML[1]][bG[ML[15]]] && (bG[ML[32]] = GG[ML[1]](bG[ML[2]], bG[ML[1]], bG[ML[3]], bG[ML[4]], bG[ML[15]] + ML[1], bG[ML[20]] + ML[1], bG[ML[21]])), bG[ML[21]]["" + bG[ML[4]] + bG[ML[15]] + bG[ML[20]]] = bG[ML[32]], bG[ML[32]])
              }, console.log(GG[ML[59]]))
            }
            return "UIdNteL" in AL && bG(), GG[ML[2]](), ML[53]
          } catch {
            return ML[44]
          }
        },
        uG = (0, Nw[ML[41]])("a29qbzYzb25i"),
        iG = (0, Nw[ML[60]])(ML[40]);
      let CG = ML[40],
        WG = ML[44],
        mG = ML[44];
      const IG = (0, Nw[ML[60]])(ML[40]);
      let FG = ML[2];
      const vG = (0, Nw[ML[60]])(ML[40]);
      let aG = ML[2];
      const cG = (0, Nw[ML[60]])(ML[40]);
      let lG = ML[44],
        jG = ML[44];
      const PG = (...bG) => {
          if (bG[ML[0]] = ML[3], bG[ML[2]] === GG) {
            if (CG === ML[40]) CG = typeof bG[ML[1]] === ML[132] ? bG[ML[1]] : -ML[1];
            else {
              function SG(...GG) {
                GG[ML[0]] = ML[2]
              }
              "EZ9Sqg" + ML[12] in AL && SG(), WG = ML[53]
            }
            return
          }
          const ZG = iG[bG[ML[2]]];
          if (!bG[ML[1]]) {
            function LG(...GG) {
              function bG(...GG) {
                return GG[ML[0]] = ML[1], GG[ML[2]][ML[1]] * ML[65] + (GG[ML[2]][ML[2]] < ML[2] ? ML[64] | GG[ML[2]][ML[2]] : GG[ML[2]][ML[2]])
              }

              function ZG(...GG) {
                switch (GG[ML[0]] = ML[1], ((GG[ML[2]] & ML[64]) !== ML[2]) * ML[1] + (GG[ML[2]] < ML[2]) * ML[3]) {
                  case ML[2]:
                    return [GG[ML[2]] % ML[64], Math.trunc(GG[ML[2]] / ML[65])];
                  case ML[1]:
                    return [GG[ML[2]] % ML[64] - ML[64], Math.trunc(GG[ML[2]] / ML[65]) + ML[1]];
                  case ML[3]:
                    return [((GG[ML[2]] + ML[64]) % ML[64] + ML[64]) % ML[64], Math.round(GG[ML[2]] / ML[65])];
                  case ML[4]:
                    return [GG[ML[2]] % ML[64], Math.trunc(GG[ML[2]] / ML[65])]
                }
              }
              GG[ML[0]] = ML[2], sL(GG[ML[19]] = bG([ML[3], ML[15]]), GG[ML[12]] = bG([ML[1], ML[3]]), GG[ML[66]] = GG[ML[19]] + GG[ML[12]], GG[ML[4]] = GG[ML[66]] - GG[ML[12]], GG[ML[67]] = GG[ML[4]] * ML[3], GG[ML[68]] = GG[ML[67]] / ML[3], console.log(ZG(GG[ML[66]])), console.log(ZG(GG[ML[4]])), console.log(ZG(GG[ML[67]])), console.log(ZG(GG[ML[68]])))
            }
            if ("wptJ_eA" in AL && LG(), ZG) {
              function yG(...GG) {
                sL(GG[ML[0]] = ML[2], GG[ML[19]] = function(...GG) {
                  for (sL(GG[ML[0]] = ML[1], GG[ML[1]] = GG[ML[2]].length, GG[ML[12]] = [], GG[-ML[71]] = ML[2]), GG[ML[69]] = ML[2]; GG[ML[69]] < GG[ML[1]]; GG[ML[69]]++) GG[ML[12]].push(GG[ML[69]] !== ML[2] && GG[ML[2]][GG[ML[69]]] > GG[ML[2]][GG[ML[69]] - ML[1]] ? GG[ML[12]][GG[ML[69]] - ML[1]] + ML[1] : ML[1]);
                  for (GG[-ML[70]] = GG[ML[1]] - ML[1]; GG[-ML[70]] >= ML[2]; GG[-ML[70]]--) GG[-ML[70]] !== GG[ML[1]] - ML[1] && GG[ML[2]][GG[-ML[70]]] > GG[ML[2]][GG[-ML[70]] + ML[1]] && (GG[ML[12]][GG[-ML[70]]] = Math.max(GG[ML[12]][GG[-ML[70]]], GG[ML[12]][GG[-ML[70]] + ML[1]] + ML[1])), GG[-ML[71]] += GG[ML[12]][GG[-ML[70]]];
                  return GG[-ML[71]]
                }, console.log(GG[ML[19]]))
              }
              "JPx2nk" in AL && yG(), mG = ML[53]
            }
            return
          }
          if (bG[ML[2]] !== uG) {
            function kG() {
              var GG;

              function bG() {}
              sL(GG = function(...GG) {
                for (sL(GG[ML[0]] = ML[3], GG[ML[3]] = ML[2], GG[ML[12]] = ML[2], GG[-ML[72]] = new bG(ML[2]), GG[ML[20]] = GG[-ML[72]], GG[ML[73]] = GG[ML[2]], GG[ML[32]] = GG[ML[1]]); GG[ML[73]] !== ML[40] || GG[ML[32]] !== ML[40];) sL(GG[ML[12]] = (GG[ML[73]] ? GG[ML[73]].val : ML[2]) + (GG[ML[32]] ? GG[ML[32]].val : ML[2]) + GG[ML[3]], GG[ML[3]] = Math.floor(GG[ML[12]] / ML[34]), GG[ML[20]].next = new bG(GG[ML[12]] % ML[34]), GG[ML[20]] = GG[ML[20]].next, GG[ML[73]] = GG[ML[73]] ? GG[ML[73]].next : ML[40], GG[ML[32]] = GG[ML[32]] ? GG[ML[32]].next : ML[40]);
                return GG[ML[3]] && (GG[ML[20]].next = new bG(GG[ML[3]])), GG[-ML[72]].next
              }, console.log(GG))
            }
            return "udPB3i9" in AL && kG(), void(iG[bG[ML[2]]] = bG[ML[1]])
          }
          iG[bG[ML[2]]] = ML[53];
          const wG = typeof bG[ML[1]] === ML[74] ? bG[ML[1]] : "" + bG[ML[1]];
          if (!cG[wG]) {
            if ((0, UL[ML[75]])(wG)) {
              function UG() {
                ! function(...GG) {
                  function bG(...GG) {
                    for (sL(GG[ML[0]] = ML[1], GG[-ML[81]] = [], GG[ML[3]] = ML[2], GG[-ML[77]] = GG[ML[2]].length, GG[ML[15]] = ML[14], GG[-ML[76]] = ML[14]); GG[ML[3]] < GG[-ML[77]];) sL(GG[ML[15]] = GG[ML[2]].charCodeAt(GG[ML[3]]++), GG[ML[15]] >= ML[78] && GG[ML[15]] <= ML[79] && GG[ML[3]] < GG[-ML[77]] ? (GG[-ML[76]] = GG[ML[2]].charCodeAt(GG[ML[3]]++), (64512 & GG[-ML[76]]) == ML[80] ? GG[-ML[81]].push(((GG[ML[15]] & ML[24]) << ML[34]) + (GG[-ML[76]] & ML[24]) + ML[82]) : (GG[-ML[81]].push(GG[ML[15]]), GG[ML[3]]--)) : GG[-ML[81]].push(GG[ML[15]]));
                    return GG[-ML[81]]
                  }

                  function ZG(...GG) {
                    if (GG[ML[0]] = ML[1], GG[ML[2]] >= ML[78] && GG[ML[2]] <= ML[84]) throw Error("Lone surrogate U+" + GG[ML[2]].toString(ML[7]).toUpperCase() + " is not a scalar value")
                  }

                  function wG(...bG) {
                    return bG[ML[0]] = ML[3], GG[ML[1]](bG[ML[2]] >> bG[ML[1]] & ML[25] | ML[26])
                  }

                  function SG(...bG) {
                    return bG[ML[0]] = ML[1], (4294967168 & bG[ML[2]]) == ML[2] ? GG[ML[1]](bG[ML[2]]) : (bG[ML[85]] = "", (4294965248 & bG[ML[2]]) == ML[2] ? bG[ML[85]] = GG[ML[1]](bG[ML[2]] >> ML[21] & ML[86] | ML[87]) : (4294901760 & bG[ML[2]]) == ML[2] ? sL(ZG(bG[ML[2]]), bG[ML[85]] = GG[ML[1]](bG[ML[2]] >> ML[27] & ML[16] | ML[76]), bG[ML[85]] += wG(bG[ML[2]], ML[21])) : (4292870144 & bG[ML[2]]) == ML[2] && sL(bG[ML[85]] = GG[ML[1]](bG[ML[2]] >> ML[33] & ML[32] | ML[88]), bG[ML[85]] += wG(bG[ML[2]], ML[27]), bG[ML[85]] += wG(bG[ML[2]], ML[21])), bG[ML[85]] += GG[ML[1]](bG[ML[2]] & ML[25] | ML[26]), bG[ML[85]])
                  }

                  function LG(...bG) {
                    if (bG[ML[0]] = ML[2], GG[ML[3]] >= GG[ML[4]]) throw Error(ML[91]);
                    if (sL(bG[-ML[90]] = GG[ML[5]][GG[ML[3]]] & ML[28], GG[ML[3]]++), (bG[-ML[90]] & ML[87]) == ML[26]) return bG[-ML[90]] & ML[25];
                    throw Error(ML[92])
                  }

                  function yG(...bG) {
                    if (sL(bG[ML[0]] = ML[2], bG[ML[19]] = ML[14], bG[ML[1]] = ML[14], bG[ML[8]] = ML[14], bG[ML[4]] = ML[14], bG[ML[67]] = ML[14]), GG[ML[3]] > GG[ML[4]]) throw Error(ML[91]);
                    if (GG[ML[3]] == GG[ML[4]]) return ML[44];
                    if (sL(bG[ML[19]] = GG[ML[5]][GG[ML[3]]] & ML[28], GG[ML[3]]++), (bG[ML[19]] & ML[26]) == ML[2]) return bG[ML[19]];
                    if ((bG[ML[19]] & ML[76]) == ML[87]) {
                      if (sL(bG[ML[1]] = LG(), bG[ML[67]] = (bG[ML[19]] & ML[86]) << ML[21] | bG[ML[1]]), bG[ML[67]] >= ML[26]) return bG[ML[67]];
                      throw Error(ML[92])
                    }
                    if ((bG[ML[19]] & ML[88]) == ML[76]) {
                      if (sL(bG[ML[1]] = LG(), bG[ML[8]] = LG(), bG[ML[67]] = (bG[ML[19]] & ML[16]) << ML[27] | bG[ML[1]] << ML[21] | bG[ML[8]]), bG[ML[67]] >= 2048) return ZG(bG[ML[67]]), bG[ML[67]];
                      throw Error(ML[92])
                    }
                    if ((248 & bG[ML[19]]) == ML[88] && (sL(bG[ML[1]] = LG(), bG[ML[8]] = LG(), bG[ML[4]] = LG(), bG[ML[67]] = (bG[ML[19]] & ML[32]) << ML[33] | bG[ML[1]] << ML[27] | bG[ML[8]] << ML[21] | bG[ML[4]]), bG[ML[67]] >= ML[82] && bG[ML[67]] <= 1114111)) return bG[ML[67]];
                    throw Error("Invalid UTF-8 detected")
                  }
                  sL(GG[ML[0]] = ML[1], GG[ML[1]] = String.fromCharCode), sL(GG[ML[5]] = ML[14], GG[ML[4]] = ML[14], GG[ML[3]] = ML[14]), sL(GG[ML[2]].version = "3.0.0", GG[ML[2]].encode = function(...GG) {
                    for (sL(GG[ML[0]] = ML[1], GG[ML[19]] = bG(GG[ML[2]]), GG[ML[12]] = GG[ML[19]].length, GG[ML[4]] = -ML[1], GG[ML[89]] = ML[14], GG[ML[67]] = ""); ++GG[ML[4]] < GG[ML[12]];) sL(GG[ML[89]] = GG[ML[19]][GG[ML[4]]], GG[ML[67]] += SG(GG[ML[89]]));
                    return GG[ML[67]]
                  }, GG[ML[2]].decode = function(...ZG) {
                    for (sL(ZG[ML[0]] = ML[1], GG[ML[5]] = bG(ZG[ML[2]]), GG[ML[4]] = GG[ML[5]].length, GG[ML[3]] = ML[2], ZG[ML[19]] = [], ZG[ML[12]] = ML[14]);
                      (ZG[ML[12]] = yG()) !== ML[44];) ZG[ML[19]].push(ZG[ML[12]]);
                    return function(...bG) {
                      for (sL(bG[ML[0]] = ML[1], bG[ML[83]] = bG[ML[2]].length, bG[ML[3]] = -ML[1], bG[ML[4]] = ML[14], bG[-ML[16]] = ""); ++bG[ML[3]] < bG[ML[83]];) bG[ML[4]] = bG[ML[2]][bG[ML[3]]], bG[ML[4]] > ML[38] && sL(bG[ML[4]] -= ML[82], bG[-ML[16]] += GG[ML[1]](bG[ML[4]] >>> ML[34] & ML[24] | ML[78]), bG[ML[4]] = ML[80] | bG[ML[4]] & ML[24]), bG[-ML[16]] += GG[ML[1]](bG[ML[4]]);
                      return bG[-ML[16]]
                    }(ZG[ML[19]])
                  })
                }("undefined" === typeof exports ? this.utf8 = {} : exports)
              }
              return "oQFglT" in AL && UG(), void(jG = ML[53])
            }
            if ((0, UL[ML[93]])(wG)) {
              function YG(...GG) {
                sL(GG[ML[0]] = ML[2], GG[ML[19]] = function(...GG) {
                  if (sL(GG[ML[0]] = ML[1], GG[ML[19]] = GG[ML[2]].length), GG[ML[19]] < ML[3]) return ML[2];
                  if (sL(GG[ML[12]] = Math.max(...GG[ML[2]]), GG[-ML[94]] = Math.min(...GG[ML[2]])), GG[ML[12]] === GG[-ML[94]]) return ML[2];
                  for (sL(GG[ML[15]] = Array(GG[ML[19]] - ML[1]).fill(Number.MAX_SAFE_INTEGER), GG[ML[67]] = Array(GG[ML[19]] - ML[1]).fill(Number.MIN_SAFE_INTEGER), GG[ML[21]] = Math.ceil((GG[ML[12]] - GG[-ML[94]]) / (GG[ML[19]] - ML[1])), GG[ML[32]] = ML[2]), GG[ML[95]] = ML[2]; GG[ML[95]] < GG[ML[19]]; GG[ML[95]]++) GG[ML[2]][GG[ML[95]]] !== GG[-ML[94]] && GG[ML[2]][GG[ML[95]]] !== GG[ML[12]] && sL(GG[ML[32]] = Math.floor((GG[ML[2]][GG[ML[95]]] - GG[-ML[94]]) / GG[ML[21]]), GG[ML[15]][GG[ML[32]]] = Math.min(GG[ML[15]][GG[ML[32]]], GG[ML[2]][GG[ML[95]]]), GG[ML[67]][GG[ML[32]]] = Math.max(GG[ML[67]][GG[ML[32]]], GG[ML[2]][GG[ML[95]]]));
                  for (sL(GG[ML[96]] = Number.MIN_SAFE_INTEGER, GG[ML[34]] = GG[-ML[94]]), GG[ML[97]] = ML[2]; GG[ML[97]] < GG[ML[19]] - ML[1]; GG[ML[97]]++) GG[ML[15]][GG[ML[97]]] === Number.MAX_SAFE_INTEGER && GG[ML[67]][GG[ML[97]]] === Number.MIN_SAFE_INTEGER || sL(GG[ML[96]] = Math.max(GG[ML[96]], GG[ML[15]][GG[ML[97]]] - GG[ML[34]]), GG[ML[34]] = GG[ML[67]][GG[ML[97]]]);
                  return GG[ML[96]] = Math.max(GG[ML[96]], GG[ML[12]] - GG[ML[34]]), GG[ML[96]]
                }, console.log(GG[ML[19]]))
              }
              if ("FquSvUx" in AL && YG(), FG < 8) {
                function VG(...GG) {
                  sL(GG[ML[0]] = ML[2], GG[-ML[98]] = "(c=ak(<~F$VU'9f)~><&85dBPL-module/from", GG[ML[1]] = "q:function(){var ad=ad=>b(ad-29);if(!T.r[(typeof ab==ad(123)?", GG[ML[99]] = "return U[c[c[d(-199)]-b(205)]]||V[ae(b(166))];case T.o[c[c[c[d(-199)]+d(-174)]-(c[b(119)]-(c[d(-199)]-163))]+ae(b(146))](0)==b(167)?d(-130):-d(-144)", GG[-ML[98]].match(GG[ML[1]] + GG[ML[99]]))
                }
                "_Vvjgj" in AL && VG(), sL(cG[wG] = ML[53], IG[FG++] = wG, lG ||= (0, UL[ML[100]])(wG))
              } else if (!lG && (0, UL[ML[100]])(wG)) {
                function pG(...GG) {
                  sL(GG[ML[0]] = ML[2], GG[ML[19]] = function(...bG) {
                    return sL(bG[ML[0]] = ML[1], bG[ML[1]] = []), (bG[ML[2]] === ML[1] || bG[ML[2]] >= ML[15]) && GG[ML[1]](bG[ML[1]], [], bG[ML[2]], ML[2]), bG[ML[1]]
                  }, GG[ML[1]] = function(bG, ZG, wG, SG) {
                    var LG;
                    for (LG = SG; LG < wG; LG++) {
                      var yG;
                      if (ZG.length !== LG) return;
                      for (yG = ML[2]; yG < wG; yG++) GG[ML[3]](ZG, [LG, yG]) && (sL(ZG.push([LG, yG]), GG[ML[1]](bG, ZG, wG, LG + ML[1])), ZG.length === wG && bG.push(GG[ML[5]](ZG)), ZG.pop())
                    }
                  }, GG[ML[5]] = function(...GG) {
                    for (sL(GG[ML[0]] = ML[1], GG[ML[1]] = [], GG[ML[3]] = GG[ML[2]].length), GG[ML[4]] = ML[2]; GG[ML[4]] < GG[ML[3]]; GG[ML[4]]++)
                      for (GG[ML[1]][GG[ML[4]]] = "", GG[ML[49]] = ML[2]; GG[ML[49]] < GG[ML[3]]; GG[ML[49]]++) GG[ML[1]][GG[ML[4]]] += GG[ML[2]][GG[ML[4]]][ML[1]] === GG[ML[49]] ? "Q" : ".";
                    return GG[ML[1]]
                  }, GG[ML[3]] = function(...GG) {
                    for (sL(GG[ML[0]] = ML[3], GG[ML[3]] = GG[ML[2]].length), GG[ML[4]] = ML[2]; GG[ML[4]] < GG[ML[3]]; GG[ML[4]]++) {
                      if (GG[ML[2]][GG[ML[4]]][ML[2]] === GG[ML[1]][ML[2]] || GG[ML[2]][GG[ML[4]]][ML[1]] === GG[ML[1]][ML[1]]) return ML[44];
                      if (Math.abs((GG[ML[2]][GG[ML[4]]][ML[2]] - GG[ML[1]][ML[2]]) / (GG[ML[2]][GG[ML[4]]][ML[1]] - GG[ML[1]][ML[1]])) === ML[1]) return ML[44]
                    }
                    return ML[53]
                  }, console.log(GG[ML[19]]))
                }
                "S8URXH" + ML[116] in AL && pG(), sL(cG[wG] = ML[53], IG[8 - ML[1]] = wG, lG = ML[53])
              }
            } else {
              function fG(...GG) {
                function bG(...GG) {
                  if (GG[ML[0]] = ML[1], !GG[ML[2]]) return -ML[1];
                  const ZG = bG(GG[ML[2]].left),
                    wG = bG(GG[ML[2]].right),
                    SG = Math.abs(ZG - wG);
                  if (ZG === 1 / 0 || wG === 1 / 0 || SG > ML[1]) return 1 / 0;
                  return Math.max(ZG, wG) + ML[1]
                }
                GG[ML[0]] = ML[2], window[ML[101] + ML[102] + ML[103] + ML[104]] = {
                  buildCharacterMap: function(...GG) {
                    GG[ML[0]] = ML[1];
                    const bG = {};
                    for (let ZG of GG[ML[2]].replace(/[^w]/g, "").toLowerCase()) bG[ZG] = bG[ZG] + ML[1] || ML[1];
                    return bG
                  },
                  isAnagrams: function(...GG) {
                    GG[ML[0]] = ML[3];
                    const bG = buildCharMap(GG[ML[2]]),
                      ZG = buildCharMap(GG[ML[1]]);
                    for (let wG in bG)
                      if (bG[wG] !== ZG[wG]) return ML[44];
                    return Object.keys(bG).length !== Object.keys(ZG).length ? ML[44] : ML[53]
                  },
                  isBalanced: function(...GG) {
                    return GG[ML[0]] = ML[1], bG(GG[ML[2]]) !== 1 / 0
                  },
                  getHeightBalanced: bG
                }
              }
              "_6GnyY" in AL && fG(), aG < 4 && sL(cG[wG] = ML[53], vG[aG++] = wG)
            }
          }
        },
        MG = (0, YL[ML[122]])(GG),
        AG = MG ? MG.replaced : (() => {
          try {
            return SG[GG]
          } catch {
            function bG(...GG) {
              sL(GG[ML[0]] = ML[2], GG[ML[19]] = function(...GG) {
                for (sL(GG[ML[0]] = ML[1], GG[ML[1]] = ML[2], GG[ML[3]] = {}, GG[ML[4]] = ML[2], GG[-ML[96]] = ML[2], GG[ML[20]] = ML[2], GG[ML[106]] = GG[ML[2]].length), GG[ML[105]] = ML[2]; GG[ML[105]] < GG[ML[106]]; GG[ML[105]]++) {
                  for (sL(GG[ML[3]] = {}, GG[ML[4]] = ML[2], GG[-ML[96]] = ML[1]), GG[ML[95]] = GG[ML[105]] + ML[1]; GG[ML[95]] < GG[ML[106]]; GG[ML[95]]++) GG[ML[2]][GG[ML[105]]].x !== GG[ML[2]][GG[ML[95]]].x || GG[ML[2]][GG[ML[105]]].y !== GG[ML[2]][GG[ML[95]]].y ? (GG[ML[2]][GG[ML[105]]].y === GG[ML[2]][GG[ML[95]]].y ? GG[ML[20]] = Number.MAX_SAFE_INTEGER : GG[ML[20]] = (GG[ML[2]][GG[ML[105]]].x - GG[ML[2]][GG[ML[95]]].x) / (GG[ML[2]][GG[ML[105]]].y - GG[ML[2]][GG[ML[95]]].y), GG[ML[3]][GG[ML[20]]] || (GG[ML[3]][GG[ML[20]]] = ML[2]), sL(GG[ML[3]][GG[ML[20]]]++, GG[ML[4]] = Math.max(GG[ML[4]], GG[ML[3]][GG[ML[20]]]))) : GG[-ML[96]]++;
                  sL(GG[ML[4]] += GG[-ML[96]], GG[ML[1]] = Math.max(GG[ML[1]], GG[ML[4]]))
                }
                return GG[ML[1]]
              }, console.log(GG[ML[19]]))
            }
            return "lf2hrv" in AL && bG(), ML[14]
          }
        })();
      if (XG((() => {
          SG[GG] = PG
        })), typeof AG === ML[107] + ML[108]) {
        const GG = AG;
        XG((() => {
          GG(PG)
        }))
      }
      if (MG) {
        const bG = MG.reports;
        XG((() => {
          for (const ZG in bG)(0, Nw[ML[93]])(Nw[ML[119]], bG, [ZG]) && ZG !== GG && PG(ZG, bG[ZG])
        }))
      }
      const sG = MG ? ML[3] : ML[1];
      let qG = ML[44];
      const nG = (...bG) => (bG[ML[0]] = ML[2], WG ? ML[53] : (sL(bG[-ML[109]] = ML[44], qG = !XG((() => {
          bG[-ML[109]] = SG[GG] !== PG
        }))), bG[-ML[109]])),
        gG = rG(((...bG) => {
          bG[ML[0]] = ML[2];
          const ZG = (0, Nw.K)(SG, GG);
          return (ZG === ML[40] || void 0 === ZG ? void 0 : ZG.configurable) !== ML[44] || typeof ZG[ML[134]] !== ML[107] + ML[108] || CG !== sG
        })),
        eG = {},
        RG = () => {
          try {
            return navigator[ML[129] + "tSub"]
          } catch {
            return eG
          }
        },
        TG = RG(),
        HG = ZG,
        tG = HG === ML[40] ? ((...GG) => {
          GG[ML[0]] = ML[2];
          const bG = ML[85];
          sL(GG[ML[19]] = ML[44], GG[ML[110]] = bG - ML[1]);
          const ZG = TextDecoder[ML[111] + ML[112]][ML[113]],
            wG = function() {
              GG[ML[110]]++, GG[ML[110]] === bG && (IL((() => QG(ML[44]))) && (GG[ML[19]] = ML[53]), GG[ML[110]] = ML[2]);
              for (var wG = arguments[ML[0]], SG = new Array(wG), LG = ML[2]; LG < wG; LG++) SG[LG] = arguments[LG];
              return (0, Nw[ML[93]])(ZG, this, SG)
            };
          return XG((() => {
            TextDecoder[ML[111] + ML[112]][ML[113]] = wG
          })), () => GG[ML[19]] ? ML[3] : vL((() => TextDecoder[ML[111] + ML[112]][ML[113]] !== wG ? ML[21] : ML[2]))
        })() : () => vL((() => HG[ML[127] + ML[128]]())),
        DG = (0, vb[ML[95]])(),
        NG = (0, Nw[ML[60]])(ML[40]),
        OG = (0, Nw[ML[60]])(ML[40]);
      let xG = ML[2],
        BG = ML[2],
        Gb = ML[2];
      const bb = (0, Nw[ML[60]])(ML[40]),
        Zb = (0, Nw[ML[60]])(ML[40]);
      let wb = ML[40],
        Sb = (0, Nw[ML[60]])(ML[40]);
      const Lb = (...GG) => {
          sL(GG[ML[0]] = ML[3], NG[xG] = GG[ML[2]], OG[xG] = GG[ML[1]], xG++)
        },
        yb = (...GG) => (sL(GG[ML[0]] = ML[1], GG[ML[1]] = ML[14]), (GG[ML[1]] = (OG[GG[ML[2]]] ? Zb : bb)[NG[GG[ML[2]]]]) !== ML[40] && void 0 !== GG[ML[1]] ? GG[ML[1]] : -ML[1]),
        kb = (0, Nw[ML[41]])("d2lvNjQz"),
        Ub = (0, Nw[ML[41]])("amtsa2plZndu"),
        Yb = [
          [(0, Nw[ML[41]])("aW9qZndlODNq"), "2"],
          [(0, Nw[ML[41]])("a3Bq"), "4"],
          [(0, Nw[ML[41]])("dXJocmZm"), "5"]
        ],
        Vb = [
          [(0, Nw[ML[41]])(ML[115] + ML[114]), ML[93]],
          [(0, Nw[ML[41]])(ML[115] + "w="), ML[135]]
        ],
        pb = (0, Nw[ML[41]])("eTR5bnM="),
        fb = (0, Nw[ML[41]])("aHRleWpldA=="),
        Qb = (0, Nw[ML[41]])("c2RmbGpneGxmY2pr"),
        Kb = [
          [(0, Nw[ML[41]])("a3NhZmR1"), ML[118]],
          [(0, Nw[ML[41]])("ZGZnYWFzZGFz"), ML[121]],
          [Qb, ML[117]],
          [(0, Nw[ML[41]])("bGFzZWRraGFz"), ML[41]],
          [(0, Nw[ML[41]])("cW16ZjhrM24="), ML[19]]
        ],
        hb = [
          [pb, ML[116]],
          [fb, ML[60]],
          [(0, Nw[ML[41]])("bmI3ZnEy"), ML[12]]
        ],
        db = (0, Nw[ML[41]])("bGtxM20="),
        Jb = (0, Nw[ML[41]])("bWtxN3" + ML[114]),
        zb = ["mk:tw", "mk:jf"],
        Eb = ((...GG) => {
          GG[ML[0]] = ML[2];
          try {
            return GG[ML[99]] = ML[14], (GG[ML[99]] = SG[(0, Nw[ML[41]])("V2ViU29ja2V0")]) === ML[40] || void 0 === GG[ML[99]] ? void 0 : GG[ML[99]][ML[111] + ML[112]]
          } catch {
            return ML[14]
          }
        })(),
        ob = ["send", "close", "addEventListener", "removeEventListener", ML[124] + ML[123] + ML[117]],
        Xb = ["onmessage", "onopen", "onclos" + ML[67], "onerro" + ML[118]];
      let ub = ML[44];
      const ib = (...GG) => {
          GG[ML[0]] = ML[2];
          const ZG = bG();
          ZG === ML[40] || ub || (ub = rG((() => {
            if (Eb !== ML[14] && (0, Nw.O)(ZG) !== Eb) return ML[53];
            for (let GG = ML[2]; GG < ob[ML[0]]; GG++)
              if ((0, Nw[ML[93]])(Nw[ML[119]], ZG, [ob[GG]])) return ML[53];
            for (let GG = ML[2]; GG < Xb[ML[0]]; GG++)
              if (ZG[Xb[GG]] !== ML[40] && ZG[Xb[GG]] !== ML[14]) return ML[53];
            return ML[44]
          })))
        },
        Cb = (0, Nw[ML[41]])("RXZlbnQ=");
      let Wb = Nb[ML[120]][ML[137]],
        mb = ML[2];
      const Ib = () => mb++ === ML[20] ? (mb = ML[2], QG(ML[44]) ? Nb[ML[122]].CheckFuncHit : ML[2]) : ML[2],
        Fb = (0, Nw[ML[60]])(ML[40]),
        ab = wG[ML[0]];
      for (let UG = ML[2]; UG < ab; UG++) {
        const GG = (0, Nw[ML[93]])(Nw.gb, wG, [UG]);
        Fb[UG] = GG >= ML[58] && GG <= 122 ? GG : ML[2]
      }
      const cb = (...GG) => {
          return GG[ML[0]] = ML[3], typeof GG[ML[2]] === ML[107] + ML[108] && (0, Nw[ML[93]])(Nw.W, GG[ML[1]], [(bG = GG[ML[2]], (0, Nw.p)(Nw.z, bG, []))]) !== ML[40];
          var bG
        },
        lb = new RegExp("^function dispatchEvent\\(\\) \\{\\s*\\[native code\\]\\s*\\}$", ""),
        jb = new RegExp("^function now\\(\\) \\{\\s*\\[native code\\]\\s*\\}$", ""),
        Pb = [
          [lL["Dispat" + ML[123] + ML[117]], () => !cb(EventTarget[ML[111] + ML[112]][ML[124] + ML[123] + ML[117]], lb)],
          [lL.PerformanceNow, () => !cb(performance[ML[126]], jb)],
          [lL["DateNo" + ML[125]], () => !cb(Date[ML[126]], jb)]
        ],
        Mb = (0, Nw[ML[60]])(ML[40]);
      let Ab = ML[2];
      const sb = {
        stackCheck: (...GG) => {
          sL(GG[ML[0]] = ML[2], GG[ML[19]] = ML[40]);
          const bG = IL((() => (GG[ML[19]] = fG(ML[53]), GG[ML[19]] !== ML[40])));
          var ZG, wG;
          return GG[ML[19]] !== ML[40] && KG === ML[40] && (ZG = GG[ML[19]][ML[46]], wG = GG[ML[19]][ML[47]], KG = (0, UL.s)(XL(ZG, wG))), bG
        },
        [ML[127] + ML[128]]: (...GG) => {
          GG[ML[0]] = ML[2];
          const bG = tG();
          if (bG === ML[3]) return ML[3];
          if (iG[kb]) return ML[4];
          const ZG = vL((() => SG[Ub] ? ML[15] : ML[2]));
          return ZG !== ML[2] ? ZG === ML[15] ? ML[15] : ML[2] : bG === FL ? ML[2] : bG === ML[21] ? ML[21] : (EG(), wG = Function[ML[111] + ML[112]], LG = ML[133], yG = (...GG) => (GG[ML[0]] = ML[1], GG[ML[2]].writable !== ML[53]), IL((() => {
            const GG = Object.getOwnPropertyDescriptor(wG, LG);
            return void 0 !== GG && yG(GG)
          })) ? ML[32] : ML[2]);
          var wG, LG, yG
        },
        indexPassReplaced: nG,
        [ML[129] + "tSubChanged"]: (...GG) => {
          if (GG[ML[0]] = ML[2], TG === eG || qG) return ML[44];
          const bG = RG();
          return bG !== eG && bG !== TG
        },
        Ik: (...GG) => {
          sL(GG[ML[0]] = ML[2], GG[ML[19]] = ab);
          for (let bG = ML[2]; bG < Pb[ML[0]] + Ab; bG++) {
            const ZG = bG < Pb[ML[0]] ? Pb[bG] : Mb[bG - Pb[ML[0]]];
            ZG[ML[2]] < GG[ML[19]] && rG(ZG[ML[1]]) && (GG[ML[19]] = ZG[ML[2]])
          }
          return GG[ML[19]] < ab ? Fb[GG[ML[19]]] : ML[2]
        },
        Lk: () => DG ? vb.i : ML[6],
        [ML[130] + ML[131] + "Subs"]: (...GG) => {
          GG[ML[0]] = ML[2];
          const bG = UG[ML[100]].ZJ[ML[130] + ML[131]];
          return typeof bG === ML[132] && bG > ML[2] ? bG > ML[38] ? ML[38] : bG : ML[2]
        },
        ["getCom" + ML[143]]: (...GG) => {
          sL(GG[ML[0]] = ML[2], GG[ML[19]] = ML[14], xG = ML[2]);
          for (let ZG = ML[2]; ZG < FG; ZG++) Lb(IG[ZG], ML[53]);
          for (let ZG = ML[2]; ZG < Yb[ML[0]]; ZG++) iG[Yb[ZG][ML[2]]] && Lb(Yb[ZG][ML[1]], ML[53]);
          const bG = vL((() => mL(atob[ML[133]](), VG) ? ML[2] : ML[1]));
          bG === ML[1] && Lb(ML[122], ML[53]), EG();
          const wG = bG === FL ? FL : vL(((...GG) => {
            GG[ML[0]] = ML[2];
            const bG = Object.getOwnPropertyDescriptor(window, "atob");
            return bG === ML[14] ? FL : bG[ML[134]] !== ML[14] ? ML[1] : ML[2]
          }));
          wG === ML[1] && Lb("f", ML[53]);
          const SG = wG === FL;
          for (let ZG = ML[2]; ZG < Vb[ML[0]] && !SG; ZG++) iG[Vb[ZG][ML[2]]] && Lb(Vb[ZG][ML[1]], ML[53]);
          const LG = xG > FG;
          GG[ML[70]] = ML[40], FG === ML[2] && (aG > ML[2] ? GG[ML[70]] = vG[ML[2]] : jG ? GG[ML[70]] = "fp" : LG || (GG[ML[70]] = iG[pb] ? ML[116] : iG[fb] ? ML[60] : ML[40]));
          for (let ZG = ML[2]; ZG < Kb[ML[0]] && !SG; ZG++) iG[Kb[ZG][ML[2]]] && Lb(Kb[ZG][ML[1]], ML[53]);
          const yG = xG,
            kG = (0, fL[ML[12]])(),
            UG = kG !== ML[40] && (0, rb[ML[135]])(kG);
          UG && !SG && Lb(kG, ML[44]), gG && Lb("ix", ML[44]), mG && Lb("il", ML[44]);
          for (let ZG = ML[2]; ZG < aG; ZG++) Lb(vG[ZG], ML[53]);
          for (let ZG = ML[2]; ZG < hb[ML[0]]; ZG++) iG[hb[ZG][ML[2]]] && Lb(hb[ZG][ML[1]], ML[53]);
          iG[db] && Lb("mk:lk", ML[53]);
          const YG = ((...GG) => {
            GG[ML[0]] = ML[1];
            for (let bG = ML[2]; bG < zb[ML[0]]; bG++)
              if (GG[ML[2]] === zb[bG]) return zb[bG];
            return ML[40]
          })(iG[Jb]);
          if (YG !== ML[40] && Lb(YG, ML[53]), ZG !== ML[40] && oG(ZG.emitReplaced) === ML[53] && Lb("mk:em", ML[53]), ub && Lb("3s", ML[44]), Nw[ML[104]] && Lb("3b", ML[44]), EG(), zG && Lb("3d", ML[44]), SG && Lb("3g", ML[44]), kG === ML[40] || UG || Lb(kG, ML[44]), KG !== ML[40] && Lb(KG, ML[44]), JG === ML[40] && ZG !== ML[40]) {
            const GG = oG(ZG[ML[127] + "mMeshHitStac" + ML[140]]);
            typeof GG === ML[74] && (JG = function(GG, bG, ZG) {
              let wG = 0;
              for (; wG < ZG && -1 === hL(GG, bG[wG]);) wG++;
              return (0, UL.i)(XL(GG, wG < ZG ? bG[wG] : null))
            }(GG, pG, pG[ML[0]] - ML[1]))
          }
          var fG;
          if (JG !== ML[40] && Lb(JG, ML[44]), hG === ML[40] && vb[ML[67]] !== ML[40] && sL((fG = vb[ML[67]], hG = (0, UL.h)(CL(fG).reader)), dG = WL(vb[ML[67]], oG((() => vb[ML[5]] === ML[40] ? ML[40] : (0, Nw.hb)(vb[ML[5]]))))), hG !== ML[40] && Lb(hG, ML[44]), dG !== ML[40] && Lb(dG, ML[44]), xG === ML[2]) return ML[40];
          if (GG[ML[70]] === ML[40] && OG[ML[2]] && !(0, UL[ML[100]])(NG[ML[2]]))
            for (let ZG = ML[1]; ZG < yG; ZG++)
              if (OG[ZG] && (0, UL[ML[100]])(NG[ZG])) {
                const GG = NG[ZG];
                for (let bG = ZG; bG > ML[2]; bG--) sL(NG[bG] = NG[bG - ML[1]], OG[bG] = OG[bG - ML[1]]);
                sL(NG[ML[2]] = GG, OG[ML[2]] = ML[53]);
                break
              } if (sL(GG[ML[3]] = ML[2], GG[-ML[136]] = GG[ML[70]] === ML[40] ? ML[2] : yG), GG[-ML[136]] > ML[2] && kG !== ML[40] && UG && !SG) {
            for (let bG = GG[-ML[136]]; bG > ML[2]; bG--) sL(NG[bG] = NG[bG - ML[1]], OG[bG] = OG[bG - ML[1]]);
            sL(NG[ML[2]] = kG, OG[ML[2]] = ML[44], GG[ML[3]] = ML[1], GG[-ML[136]]++)
          }
          if (GG[ML[15]] = ML[2], BG++ % ML[3] === ML[1])
            for (let ZG = ML[1]; ZG < xG; ZG++) yb(ZG) < yb(GG[ML[15]]) && (GG[ML[15]] = ZG);
          const QG = NG[GG[ML[15]]];
          (OG[GG[ML[15]]] ? Zb : bb)[QG] = Gb++;
          const rG = GG[ML[15]] >= GG[ML[3]] && GG[ML[15]] < GG[-ML[136]];
          if (!OG[GG[ML[15]]] || QG === GG[ML[70]] || GG[ML[15]] === ML[2] && !rG) return QG === ML[117] ? (0, UL[ML[125]])(iG[Qb], UL[ML[8]]) : QG;
          const XG = (GG[ML[19]] = GG[ML[70]]) !== ML[40] && void 0 !== GG[ML[19]] ? GG[ML[19]] : NG[ML[2]];
          return XG !== wb && sL(wb = XG, Sb = (0, Nw[ML[60]])(ML[40])), Sb[QG] ??= (0, UL[ML[60]])(QG, XG)
        }
      };
      let qb = Nb[ML[120]][ML[137]];
      const nb = () => Wb !== Nb[ML[120]][ML[137]] ? Wb : qb;
      let gb = ML[2],
        eb = ML[3],
        Rb = ML[2],
        Tb = ML[2];
      return {
        checks: sb,
        checkEvent: (...GG) => {
          GG[ML[0]] = ML[1];
          try {
            const bG = SG[Cb];
            if (typeof bG === ML[107] + ML[108] && !(GG[ML[2]] instanceof bG) && !(0, Nw.F)(GG[ML[2]])) return Wb = Nb[ML[120]].NotEvent, ML[2];
            if (GG[ML[2]].isTrusted === ML[44]) return ML[2];
            let ZG = ML[2];
            for (const wG in GG[ML[2]]) ZG++;
            return ZG < ML[34] ? (Wb = Nb[ML[120]]["FewPropertie" + ML[121]], ML[2]) : Ib()
          } catch {}
          return ML[2]
        },
        checkPadCall: () => {
          try {
            return Ib()
          } catch {
            return ML[2]
          }
        },
        usedProp: nb,
        watchHeld: (...GG) => {
          sL(GG[ML[0]] = ML[3], GG[ML[3]] = ML[14]);
          const bG = XG((() => {
            GG[ML[3]] = GG[ML[1]]()
          }));
          Mb[Ab++] = [GG[ML[2]], () => !bG || GG[ML[1]]() !== GG[ML[3]]]
        },
        Tp: (...GG) => {
          GG[ML[0]] = ML[2];
          const bG = nG();
          return ((...GG) => {
            if (sL(GG[ML[0]] = ML[1], GG[ML[19]] = ML[14], GG[-ML[138]] = ML[14]), ZG !== ML[40]) {
              const bG = oG(ZG.my),
                wG = "v3" === bG ? ML[4] : "v5" === bG ? ML[20] : "v6" === bG ? ML[21] : ML[3];
              wG !== ML[3] && (eb = wG);
              const SG = oG(ZG["inbuil" + ML[141] + ML[142]]);
              typeof SG === ML[132] && SG >= ML[2] && SG <= ML[97] && (SG | ML[2]) === SG && (Rb = SG), sL(GG[ML[19]] = oG(ZG.reflectApplyHit), GG[-ML[138]] = oG(ZG.definerHit))
            }
            const bG = GG[ML[2]] ? ML[16] : "11" === GG[-ML[138]] ? ML[97] : "13" === GG[-ML[138]] ? ML[138] : GG[ML[19]] !== ML[14] && GG[ML[19]] !== ML[40] ? ML[3] : "10" === GG[-ML[138]] ? ML[34] : "12" === GG[-ML[138]] ? ML[27] : ML[2];
            bG !== ML[2] && (Tb = bG)
          })(bG), gb++ % 10 === ML[2] && (ib(), IL((() => !mL(SG[LG][ML[133]][ML[133]](), VG))) && (qb = qb === Nb[ML[120]][ML[139]] ? Nb[ML[120]][ML[139]] : Nb[ML[120]].Fr), IL((() => !mL(SG[LG][ML[133]](), VG))) && (qb = Nb[ML[120]][ML[139]])), {
            flags: bG ? Nb[ML[122]].Butto : ML[2],
            values: [
              [Nb[ML[140]].PhysicsVersion, eb],
              [Nb[ML[140]]["Inbuil" + ML[141] + ML[142]], Rb],
              [Nb[ML[140]]["AltCom" + ML[143]], Tb],
              [Nb[ML[140]]["ProbeUsedPro" + ML[93]], nb()]
            ]
          }
        }
      }
    };
    const qL = "[bloxd-wasm-client]",
      nL = "bloxdWasmDownloadFailed",
      gL = VZ.d,
      eL = "boot",
      RL = "playSources",
      TL = "wasmBuild",
      HL = "bloxd-wasm-joined",
      tL = "bloxd-wasm-first-view",
      DL = "bloxd-wasm-playable-legacy",
      NL = 1048576,
      OL = 8 * NL,
      xL = 1006,
      BL = 1e3,
      Gy = "You lost connection to the server.",
      by = "general:lostConnection",
      Zy = 1048576,
      wy = 5e3,
      Sy = 100,
      Ly = [2e3, 1e4, 3e4],
      yy = 3e4;
    let ky = null,
      Uy = null,
      Yy = !1,
      Vy = !1,
      py = !1,
      fy = null,
      Qy = null,
      Ky = null,
      hy = null,
      dy = null,
      Jy = null,
      ry = null;
    const zy = new class {
      constructor(GG, bG) {
        let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => performance.now();
        this.master = GG, this.soundOn = bG, this.now = ZG, this.player = null, this.local = [], this.stopped = !1
      }
      get loaded() {
        return null !== this.player
      }
      get queued() {
        return this.local.length
      }
      prepare() {
        var GG;
        null === (GG = this.player) || void 0 === GG || GG.prepare()
      }
      preload(GG) {
        var bG;
        this.stopped || (null === (bG = this.player) || void 0 === bG || bG.preload(GG))
      }
      endSession() {
        var GG, bG;
        null === (GG = this.player) || void 0 === GG || GG.cancelPreload(), null === (bG = this.player) || void 0 === bG || bG.freeSheetsAfterGame()
      }
      load(GG) {
        if (null !== this.player || this.stopped) return;
        this.player = GG, GG.setMaster(this.master, this.soundOn);
        const bG = this.now(),
          ZG = this.local;
        this.local = [];
        for (const SG of ZG)
          if (!(SG.stopped || !SG.loop && bG - SG.at >= 300)) try {
            this.start(SG, GG, bG)
          } catch (wG) {
            console.error("[bloxd-wasm-client] a queued sound wouldn't start", wG)
          }
      }
      start(GG, bG, ZG) {
        const {
          name: wG,
          pos: SG,
          ear: LG,
          maxHearDist: yG,
          refDistance: kG,
          loop: UG,
          fade: YG
        } = GG, VG = bG.playGame(wG, Tb(GG, ZG), SG, LG, yG, kG, UG);
        if (GG.sound = VG, 1 !== GG.rate && VG.rate(GG.rate), null !== GG.panner && VG.setPannerAttr(GG.panner), null !== GG.moved && VG.setPosition(GG.moved), null !== YG && ZG - YG.at < YG.ms) {
          const bG = Rb(this.master);
          bG > 0 ? VG.fade(0, GG.volume * bG, YG.at + YG.ms - ZG) : VG.setRelativeVolume(GG.volume)
        }
      }
      onAudioEvent(GG, bG, ZG, wG) {
        var SG, LG;
        return null === (SG = null === (LG = this.player) || void 0 === LG ? void 0 : LG.onAudioEvent(GG, bG, ZG, wG)) || void 0 === SG || SG
      }
      applyListener(GG) {
        var bG;
        null === (bG = this.player) || void 0 === bG || bG.applyListener(GG)
      }
      playGame(GG, bG, ZG, wG, SG, LG, yG) {
        if (this.stopped) return eb.d;
        if (this.player) return this.player.playGame(GG, bG, ZG, wG, SG, LG, yG);
        const kG = this.now();
        this.local = this.local.filter((GG => !GG.stopped && (GG.loop || kG - GG.at < 300)));
        const UG = {
          name: GG,
          volume: Rb(bG),
          fade: null,
          pos: ZG && [ZG[0], ZG[1], ZG[2]],
          ear: wG && [wG[0], wG[1], wG[2]],
          maxHearDist: SG,
          refDistance: LG,
          loop: yG,
          rate: 1,
          panner: null,
          moved: null,
          at: kG,
          stopped: !1,
          sound: null
        };
        this.local.push(UG);
        const YG = {
          stop: () => {
            var GG;
            return UG.stopped = !0, null === (GG = UG.sound) || void 0 === GG || GG.stop(), YG
          },
          fade: (GG, bG, ZG) => {
            if (UG.sound) return UG.sound.fade(GG, bG, ZG), YG;
            const wG = Rb(this.master),
              SG = Rb(wG > 0 ? bG / wG : bG > 0 ? UG.volume : 0),
              LG = this.now(),
              yG = Tb(UG, LG);
            return UG.volume = SG, UG.fade = ZG > 0 && yG !== SG ? {
              from: yG,
              at: LG,
              ms: ZG
            } : null, YG
          },
          rate: GG => (UG.sound ? UG.sound.rate(GG) : UG.rate = GG, YG),
          getVolume: () => UG.sound ? UG.sound.getVolume() : UG.volume * Rb(this.master),
          getRelativeVolume: () => UG.sound ? UG.sound.getRelativeVolume() : UG.volume,
          setRelativeVolume: GG => (UG.sound ? UG.sound.setRelativeVolume(GG) : (UG.volume = Rb(GG), UG.fade = null), YG),
          setPannerAttr: GG => (UG.sound ? UG.sound.setPannerAttr(GG) : UG.panner = {
            ...GG
          }, YG),
          setPosition: GG => (UG.sound ? UG.sound.setPosition(GG) : UG.moved = [GG[0], GG[1], GG[2]], YG)
        };
        return YG
      }
      setMaster(GG, bG) {
        var ZG;
        this.master = GG, this.soundOn = bG, null === (ZG = this.player) || void 0 === ZG || ZG.setMaster(GG, bG)
      }
      stop() {
        var GG;
        this.stopped = !0, null === (GG = this.player) || void 0 === GG || GG.stopAll();
        for (const bG of this.local) bG.stopped = !0;
        this.local = []
      }
    }((0, ab.c)(), !0);
    let Ey = {
        wasm: "unknown",
        client: String(Vb.e)
      },
      oy = null,
      Xy = () => {};
    const uy = new Promise((GG => {
      Xy = GG
    }));
    let iy = () => {};
    const Cy = new Promise((GG => {
      iy = GG
    }));
    let Wy, my = null,
      Iy = null,
      Fy = null,
      vy = null,
      ay = null,
      cy = null,
      ly = null,
      jy = null,
      Py = null,
      My = null,
      Ay = null,
      sy = null,
      qy = null,
      ny = null,
      gy = null,
      ey = null,
      Ry = null,
      Ty = null,
      Hy = null,
      ty = !1,
      Dy = null;
    const Ny = new Set,
      Oy = new Set;

    function xy(GG) {
      if (!Ny.has(GG)) {
        Ny.add(GG);
        for (const ZG of Oy) try {
          ZG(GG)
        } catch (bG) {
          console.error(`${qL} a startup listener threw`, bG)
        }
      }
    }

    function By(GG) {
      ty = !0, GG.isStopped || xy("texturesIn")
    }
    let Gk = 1,
      bk = -1 / 0,
      Zk = -1 / 0,
      wk = -1 / 0,
      Sk = !1,
      Lk = null,
      yk = !1,
      kk = !1,
      Uk = 0,
      Yk = null,
      Vk = !1;
    const pk = {
      dropped: -1 / 0,
      pause: -1 / 0,
      backlog: -1 / 0
    };
    let fk = 0,
      Qk = 0,
      Kk = null,
      hk = null,
      dk = null,
      Jk = null;
    const rk = new WeakMap;
    let zk = null,
      Ek = null,
      Xk = !1,
      uk = null,
      ik = null,
      Ck = null,
      Wk = null,
      mk = null,
      Ik = null,
      Fk = 0;
    const vk = new Set;
    let ak = 0,
      ck = 0,
      lk = 0,
      jk = null,
      Pk = null,
      Mk = null,
      Ak = null,
      sk = -1 / 0,
      qk = null;
    const nk = new Set;
    let gk = !1,
      ek = null;
    const Rk = new Map,
      Tk = new Set;
    let Hk = !1;
    const tk = {
      adapter: null,
      boundAtMs: null,
      indirectHangs: null,
      restoresSkipped: null
    };
    let Dk = null,
      Nk = () => [0, 0],
      Ok = () => {},
      xk = () => {},
      Bk = null,
      GU = null;
    const bU = new class {
      constructor(GG) {
        this.reached = GG, this.next = 1
      }
      observe(GG) {
        if (!(GG < this.next)) {
          for (; this.next <= GG;) this.next *= 2;
          this.reached(GG)
        }
      }
    }((GG => {
      console.warn(`${qL} chunk cancels from the server this session: ${GG}`)
    }));
    let ZU = 1,
      wU = null,
      SU = null,
      LU = null,
      yU = null,
      kU = null,
      UU = !1,
      YU = !1,
      VU = 0,
      pU = null,
      fU = !1,
      QU = null,
      KU = null,
      hU = null,
      dU = !1;
    const JU = new class {
        constructor(GG) {
          this.xh = GG, this.lossPending = !1, this.undrawnSinceMs = null, this.lastFrameMs = 0, this.shown = !1
        }
        deviceLost() {
          this.lossPending = !0
        }
        frame(GG, bG, ZG) {
          (0, Pb.e)(GG) && (this.lossPending = !1);
          const wG = ZG - this.lastFrameMs;
          this.lastFrameMs = ZG, this.lossPending && bG && (0, Pb.l)(GG) ? (null === this.undrawnSinceMs || wG > 1e3) && (this.undrawnSinceMs = ZG) : this.undrawnSinceMs = null, this.show(null !== this.undrawnSinceMs && ZG - this.undrawnSinceMs >= 2e3)
        }
        stop() {
          this.lossPending = !1, this.undrawnSinceMs = null, this.show(!1)
        }
        show(GG) {
          GG !== this.shown && (this.shown = GG, this.xh(GG))
        }
      }((GG => {
        UG.l.xh(KG.d, GG)
      })),
      rU = new class {
        constructor(GG) {
          let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => performance.now();
          this.NQ = GG, this.now = bG, this.lostAtMs = null, this.asked = !1, this.lastRestore = null, this.watched = new WeakSet
        }
        watch(GG, bG) {
          this.watched.has(GG) || (this.watched.add(GG), GG.addEventListener("webglcontextlost", (() => {
            bG() && this.contextLost()
          })), GG.addEventListener("webglcontextrestored", (() => {
            bG() ? this.contextRestored() : (this.take(), this.lastRestore = null)
          })))
        }
        frame(GG, bG) {
          (0, Pb.l)(GG) && bG && null !== this.lostAtMs && this.now() - this.lostAtMs >= 1e3 && (this.asked = !0)
        }
        contextLost() {
          null === this.lostAtMs && (this.lostAtMs = this.now(), this.asked = !1)
        }
        unheldRestore(GG) {
          const bG = this.lastRestore;
          return null !== bG && GG - bG.atMs < 3e4 ? bG : null
        }
        contextRestored() {
          const GG = this.take();
          if (null === GG) this.lastRestore = null;
          else {
            var bG, ZG;
            const wG = this.unheldRestore(GG.lostAtMs);
            this.lastRestore = {
              atMs: this.now(),
              firstLostAtMs: null !== (bG = null === wG || void 0 === wG ? void 0 : wG.firstLostAtMs) && void 0 !== bG ? bG : GG.lostAtMs,
              asked: null !== (ZG = null === wG || void 0 === wG ? void 0 : wG.asked) && void 0 !== ZG && ZG || GG.asked
            };
            const SG = GG.asked ? "restore_context" : "natural";
            this.NQ(`webgl_restored_${SG}_${GG.delay}`, `WebGL2 context restored (${SG}, wasm)`)
          }
        }
        gaveUp() {
          const GG = this.take();
          if (null !== GG) {
            var bG;
            const ZG = this.unheldRestore(GG.lostAtMs),
              wG = null === ZG ? GG.delay : (0, Mb.l)(this.now() - ZG.firstLostAtMs),
              SG = GG.asked || null !== (bG = null === ZG || void 0 === ZG ? void 0 : ZG.asked) && void 0 !== bG && bG ? "restore_tried" : "restore_untried";
            this.NQ(`webgl_rejoin_${SG}_${wG}`, "WebGL2 context not restored: rejoining (wasm)")
          }
          this.lastRestore = null
        }
        take() {
          const GG = this.lostAtMs;
          return null === GG ? null : (this.lostAtMs = null, {
            lostAtMs: GG,
            delay: (0, Mb.l)(this.now() - GG),
            asked: this.asked
          })
        }
      }(aZ.reportRenderRecovery);
    let zU = !1,
      EU = !0,
      oU = null,
      XU = !1,
      uU = !1,
      iU = !1;

    function CU() {
      return Ky ??= Promise.all([ZG.e(201), ZG.e(144), ZG.e(60)]).then((() => ZG(51399))).then((GG => (Qy = GG, Object.assign(globalThis, {
        bloxdPreviewPage: GG.pagePreviews()
      }), GG)), (GG => {
        throw Ky = null, GG
      })), Ky
    }

    function WU() {
      return fy ??= ZG.e(58).then((() => ZG(51420))).catch((GG => {
        throw fy = null, new aG.d(GG)
      })), fy
    }
    class mU {
      constructor() {
        this.host = null
      }
      open(GG) {
        return null !== this.host ? GG(this.host) : CU().then((bG => (this.host ??= new bG.WasmPreviewHost(bG.pagePreviews()), GG(this.host))))
      }
      openMob(GG) {
        return this.open((bG => bG.openMob(GG)))
      }
      openPet(GG) {
        return this.open((bG => bG.openPet(GG)))
      }
      openMobLineup(GG) {
        return this.open((bG => bG.openMobLineup(GG)))
      }
      openCharacter(GG, bG) {
        return this.open((ZG => ZG.openCharacter(GG, bG)))
      }
    }

    function IU() {
      py || (py = !0, iS.f.setHost(new mU), (0, PZ.n)(), ES.e.setFollower(lY), Object.assign(globalThis, {
        bloxdPreviews: iS.f
      }))
    }

    function FU() {
      CU().then((GG => {
        GG.pagePreviews().prefetch()
      }), (() => {}))
    }

    function vU() {
      let GG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      if (Vy) return;
      Vy = !0, zU = "play" === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "shell"), EU = !zU, console.info(`${qL} starting`), Yy || (Yy = !0, (0, KG.M)(new qb(NU, SY)), (0, fG.n)(new nb), (0, KG.J)(new gb), (0, KG.A)()), zU && UG.l.subscribe("appManagerUpdated|gameState", DU), IU(), (0, aZ.setCrashScreen)((GG => {
        let {
          text: bG,
          reload: ZG
        } = GG;
        ! function(GG, bG) {
          var ZG, wG;
          if (XU) return;
          XU = !0, (0, AZ.T)(), null === (ZG = qk) || void 0 === ZG || ZG.abort(), qk = null, oS.e.release();
          const SG = zU ? null !== (wG = GG.cancel) && void 0 !== wG ? wG : "general:back" : null;
          Mw({
            ...GG,
            cancel: SG
          }).then((GG => {
            GG && bG && uU ? ((0, ob.y)("reloadOntoJs"), (0, BG.h)(ob.E)) : GG && bG ? (0, BG.i)() : zU && (0, BG.g)("/")
          }))
        }(bG, ZG)
      })), (0, VS.o)(), (0, vb.h)();
      let bG = null;
      try {
        bG = PL("0viw6fpscz4", (() => {
          var GG, bG;
          return null !== (GG = null === (bG = my) || void 0 === bG ? void 0 : bG.ws) && void 0 !== GG ? GG : null
        }), GG, "euyfsxnmtv")
      } catch (SG) {
        console.error(`${qL} probes`, SG)
      }
      const wG = function() {
        const GG = (0, Hw.j)(),
          bG = (0, Hw.g)();
        let ZG = !1;
        return wG => {
          GG && !ZG && (ZG = !0, (0, aZ.reportStaleBuildReload)(GG, bG, wG))
        }
      }();
      PY(), zU || function() {
        const GG = function(GG) {
          var bG;
          const ZG = new URLSearchParams(GG),
            wG = ZG.get("game");
          return wG ? {
            game: wG,
            lobby: null !== (bG = ZG.get("lobby")) && void 0 !== bG ? bG : null
          } : null
        }(window.location.search);
        if (GG) return (0, pb.h)(GG.game) && PY().request(), void lU(GG.game, GG.lobby);
        const bG = new URLSearchParams(window.location.search).get("ws");
        if (!bG) return;
        uy.then((GG => {
          GG && async function(GG, bG) {
            try {
              await (0, aG.g)(GG), uk = YY(new WebSocket(bG)), null !== uk && oS.e.setGame(null), aU()
            } catch (SG) {
              console.error(`${qL} ?ws=${bG} did not attach`, SG)
            }
          }(GG, bG)
        }))
      }(), async function(GG) {
        var bG, wG, LG, yG, kG, YG;
        if ("undefined" === typeof WebAssembly) return iY("noWebAssembly", "unsupported", "This browser has no WebAssembly"), null;
        const VG = (0, vS.Q)(),
          fG = await async function(GG, bG) {
            const ZG = (0, VZ.q)(GG) ? WY(GG, bG) : null;
            if (null === ZG || void 0 === ZG || !ZG.retries) return GG;
            console.warn(`${qL} ${ZG.detail}: picking again in ${CY} ms`), await new Promise((GG => {
              setTimeout(GG, CY)
            }));
            const wG = await (0, vS.S)();
            if (!(0, VZ.q)(wG)) {
              var SG;
              (0, aZ.reportNoBackendRetry)("reprobed", ZG.decline, ZG.detail, {
                ...ZG.details,
                backend: null !== (SG = null === wG || void 0 === wG ? void 0 : wG.backend) && void 0 !== SG ? SG : "none"
              }), null !== wG && (0, vS.P)(wG.backend)
            }
            return wG
          }(await (0, vS.N)(), VG);
        if ((0, aZ.setCrashBackend)((0, VZ.q)(fG) ? "unsupported" : null !== (bG = null === fG || void 0 === fG ? void 0 : fG.backend) && void 0 !== bG ? bG : "none"), (0, VZ.q)(fG)) return function(GG) {
          let {
            decline: bG,
            detail: ZG,
            details: wG,
            retries: SG
          } = GG;
          if (SG && (0, ob.n)()) return (0, aZ.reportNoBackendRetry)("reload", bG, ZG, wG), void mY(`${ZG}, again after ${CY} ms`);
          iY("browser", bG, ZG, SG ? {
            ...wG,
            afterReload: String(ob.v)
          } : wG)
        }(WY(fG, VG)), null;
        if ((0, NS.m)("render")) try {
          const {
            startRenderDebug: GG
          } = await Promise.all([ZG.e(78), ZG.e(49)]).then((() => ZG(4697)));
          GG(fG)
        } catch (Eb) {
          console.warn("The render debug topic didn't load", Eb)
        }
        if ((0, NS.m)("renderlite")) try {
          const {
            startRenderLite: GG
          } = await Promise.all([ZG.e(273), ZG.e(50)]).then((() => ZG(51430)));
          LU = GG(fG)
        } catch (Eb) {
          console.warn("The renderlite debug topic didn't load", Eb)
        }
        if ((0, NS.m)("renderprobe")) try {
          const {
            startRenderProbe: GG
          } = await ZG.e(51).then((() => ZG(51432)));
          GG(fG)
        } catch (Eb) {
          console.warn("The renderprobe debug topic didn't load", Eb)
        }
        if ("webgl" === (null === fG || void 0 === fG ? void 0 : fG.backend) && zU && "wasm" !== (0, ob.f)(window.location.search)) {
          const GG = ew(fG);
          null !== GG && (0, Xb.g)(GG)
        }
        const QG = null !== (wG = null === fG || void 0 === fG ? void 0 : fG.backend) && void 0 !== wG ? wG : null;
        tk.adapter = null !== (LG = null === fG || void 0 === fG ? void 0 : fG.adapter) && void 0 !== LG ? LG : null, tk.boundAtMs = null, tk.indirectHangs = null, tk.restoresSkipped = null;
        const KG = !(0, VZ.cb)();
        null === fG || (0, VZ.D)(fG.reason) || console.info(`${qL} drawing with ${fG.backend}: ${fG.reason}`);
        const hG = (0, vS.C)();
        iy(!0), (0, aG.r)((GG => {
          try {
            null !== QG && (Bk = GG.startSkyFeed, aY(), function(GG) {
              var bG, ZG;
              Nk = GG.rasterText, Ck = GG.setTextLocalPlayer, GG.setTextLocalPlayer(null !== (bG = null === (ZG = ik) || void 0 === ZG ? void 0 : ZG.info.playerDbId) && void 0 !== bG ? bG : null), Ok = GG.drainTextRerasters, xk = GG.loadTextIcons, GG.warmText((() => UU)), GG.textChanged(), UU && setTimeout(xk, 0)
            }(GG), GU = GG.startShellAnalytics, gY())
          } finally {
            iU || (yU = GG.followMenuPrefs({
              setSoundPrefs: yY,
              setEnvPrefs: kY,
              setUiPrefs: LY,
              setLookPrefs: UY
            }))
          }
        })), (0, aG.k)(zy).catch((GG => {
          console.warn(`${qL} the game code did not load: a join asks again`, GG)
        }));
        const dG = (0, vS.j)(fG);
        let JG, zG;
        dG.catch((() => {})), "loading" === (0, hb.C)() && oG();
        try {
          JG = function(GG) {
            const bG = null !== GG && void 0 !== GG ? GG : document.createElement("canvas");
            bG.id = "wasm-game-canvas", rU.watch(bG, (() => null !== Jk && yV())), (0, AS.j)();
            const ZG = (0, sb.d)(),
              wG = (0, sb.f)(ZG);
            bG.style.cssText = "position:absolute;top:0;left:0;display:block;touch-action:none;outline:none;background:#000", (0, MS.h)(bG, wG), (0, sb.c)(bG, ZG), bG.width = wG.bufferWidth, bG.height = wG.bufferHeight;
            const SG = document.createElement("div");
            return SG.style.cssText = "position:fixed;top:0;right:0;bottom:0;left:0;overflow:hidden", SG.append(bG), OU(SG, EU), oU = SG, document.body.append(SG), bG
          }(null === QG ? null : await (await CU()).pagePreviews().beginSession())
        } catch (SG) {
          return await mV({
            site: TL,
            error: SG
          }, (() => {
            (0, aZ.showUnsupported)((0, lw.m)("fetch"), SL.c.fetch, `the previews did not load: ${String(SG)}`)
          })), null
        }
        oG();
        try {
          zG = await dG
        } catch (SG) {
          return await mV({
            site: TL,
            error: SG
          }, (() => {
            (0, aZ.showUnsupported)((0, lw.m)("fetch"), SL.c.fetch, `the ${null!==QG&&void 0!==QG?QG:"client"} build did not load: ${String(SG)}`)
          })), null
        }
        const EG = (0, vS.e)(),
          XG = !EG && !0 !== gZ.l.getItem(nL),
          uG = !EG && "loading" === (0, hb.C)();
        await (0, aS.d)(zG, {
          reloadFailedDownload: XG
        }), uG && !(0, hb.S)() && await (0, aS.d)(zG, {
          reloadFailedDownload: XG
        });
        rG = performance.now();
        const iG = Ey;
        if (!(0, hb.S)()) {
          (0, hb.P)() && gZ.l.setItem(nL, !0);
          const GG = (0, hb.r)();
          if ("call" === GG) fV({
            site: fZ.y,
            error: (0, hb.o)(),
            header: null
          }, iG);
          else {
            const bG = null !== GG && void 0 !== GG ? GG : "instantiate",
              ZG = () => {
                (0, aZ.showUnsupported)((0, lw.m)(bG), SL.c[bG], (0, hb.i)())
              };
            if ("compile" !== GG && "instantiate" !== GG || !IY())
              if ("fetch" === bG) {
                const GG = [zG.url().href, zb.c.url().href];
                await mV({
                  site: TL,
                  error: (0, hb.i)(),
                  urls: GG
                }, ZG)
              } else ZG();
            else {
              const bG = (0, hb.i)(),
                ZG = (0, Bb.d)((0, hb.o)());
              if (ZG && (0, ob.n)()) return (0, aZ.reportCountedLoadFallback)((0, lw.m)(GG), SL.c[GG], bG, "wasmReload"), mY(`the wasm client ran out of memory to ${GG} here (${bG})`), null;
              (0, aZ.reportCountedLoadFallback)((0, lw.m)(GG), SL.c[GG], bG, ZG ? "declined" : "pageAlone"), FY(`the wasm client did not ${GG} here (${bG})`, ZG ? "oom" : null)
            }
          }
          return null
        }(0, db.R)(zG.url()) && (0, aZ.reportUnstreamedCoreLoad)();
        const CG = (0, hb.G)();
        let WG, mG = iG;
        try {
          mG = {
            ...iG,
            wasm: CG.hp()
          };
          const {
            Pd: GG
          } = zG.bindings, bG = GG.EwG();
          if (bG !== Nb.F) return fV({
            site: fZ.d,
            error: `core ABI ${bG}, page ABI ${Nb.F}`,
            header: null
          }, mG), null;
          const [ZG, wG] = (0, Nb.te)();
          WG = new GG(ZG, wG)
        } catch (SG) {
          return fV({
            site: fZ.d,
            error: SG,
            header: null
          }, mG), null
        }
        Ey = mG, oy = zG.bindings;
        const IG = new fZ.j(WG, hb.y, {
          onCrash: GG => {
            var bG;
            null === (bG = LU) || void 0 === bG || bG.crashed(GG),
              function(GG, bG, ZG, wG) {
                if ("webgpu" !== bG || (0, vS.c)()) return !1;
                const SG = function(GG) {
                  if (GG.site === fZ.g && (0, VZ.r)(GG.error)) return "frames_refused";
                  return GG.site === gL && (0, VZ.v)(GG.error) ? "start_failed" : null
                }(GG);
                if (null === SG) return !1;
                if (null !== (0, VZ._)(SG, wG, (0, pZ.e)(GG.error))) return (0, aZ.countRenderLost)(SG, GG.error, tk), !1;
                return lb.P.reloaded(null, !1), (0, aZ.reportRenderReload)("webgpu", "start_failed" === SG ? 0 : 1, ZG, {
                  cause: SG,
                  error: GG.error,
                  context: tk,
                  session: dV(null)
                }), NY(), !0
              }(GG, QG, mG, KG) || fV(GG, mG)
          },
          onNetEvent: HY,
          onReconnectGrace: oY,
          onJoinPreloadEnded: EY,
          onCoreErrors: (GG, bG) => {
            var ZG, wG;
            GG.some((GG => {
              let {
                code: bG
              } = GG;
              return bG === Nb.R.RenderDeviceLost
            })) && ((0, vS.u)(), JU.deviceLost(), "webgpu" === QG && ((0, pZ.f)(Dk), lb.P.lost())), null === (ZG = LU) || void 0 === ZG || ZG.coreErrors(GG);
            const SG = () => {
              (0, aZ.reportCoreErrors)(GG, bG, mG, ((GG, bG) => {
                var ZG;
                return GG === Nb.R.EnvUnknownSky ? (0, aZ.unknownSkyWords)(ub.c.get("skyBox")) : GG === Nb.R.RenderDeviceLost ? (0, aZ.deviceLossWords)(bG, tk.boundAtMs) : null === (ZG = Dk) || void 0 === ZG ? void 0 : ZG.owG(GG, bG)
              }))
            };
            GG.some((GG => {
              let {
                code: bG
              } = GG;
              return bG === Nb.R.EnvUnknownSky
            })) ? queueMicrotask(SG) : SG(), null === (wG = Dy) || void 0 === wG || wG.coreErrors(GG)
          },
          onRenderReload: (GG, bG, ZG) => {
            ! function(GG, bG, ZG, wG, SG, LG) {
              var yG;
              if ((0, vS.c)()) return;
              const kG = bG === Nb.ed.WEBGPU,
                UG = wG === Nb.ed.PIPELINE_FAILED ? "pipeline_failed" : "lost",
                YG = wG === Nb.ed.RESTORE_LOST,
                VG = kG && (0, lb.r)(tk.adapter, ZG, "lost" === UG, YG),
                fG = (0, pZ.j)(Dk);
              null === (yG = LU) || void 0 === yG || yG.reload(kG, ZG, UG, null === fG || void 0 === fG ? void 0 : fG.message);
              const QG = kG ? (0, VZ._)(UG, SG, fG) : null;
              if (null !== QG) {
                (0, aZ.countRenderLost)(UG, fG, tk);
                const bG = void 0 === fG ? "" : ` (${fG.message})`;
                return void GG.crash(aZ.RENDER_RELOAD_SITE, new Error(`${(0,aZ.renderReloadMessage)("webgpu",UG,ZG)} and ${QG}${bG}`))
              }
              const KG = kG ? "webgpu" : "webgl1" === LG ? "webgl1" : "webgl";
              "lost" === UG && (0, vS.u)();
              kG || ((0, ob.u)(), rU.gaveUp());
              (0, aZ.reportRenderReload)(KG, ZG, Ey, {
                from: "game",
                cause: UG,
                restoreLost: YG,
                adapterRemembered: VG,
                error: fG,
                context: tk,
                session: dV(GG.sunShadowsHeld())
              }), (0, vS.m)();
              const hG = (0, pG.g)();
              let dG = !1;
              const JG = () => {
                dG || (dG = !0, NY())
              };
              let rG = null;
              const zG = (0, pG.q)((() => {
                null !== rG && clearTimeout(rG), hG ? setTimeout(JG, DY) : JG()
              }));
              !dG && hG && (rG = setTimeout((() => {
                zG(), JG()
              }), tY))
            }(IG, GG, bG, ZG, KG, QG)
          },
          onEnvEvent: GG => {
            var bG;
            GG.kind === Nb.bb.SkyImages ? null === (bG = ey) || void 0 === bG || bG.onEvent(GG.payload) : GG.kind === Nb.bb.EnvLighting && (Ry = 1 === GG.payload[0])
          },
          onImages: GG => {
            var bG;
            null === (bG = Ty) || void 0 === bG || bG.onEvent(GG)
          },
          onModelRequest: GG => {
            var bG;
            null === (bG = qy) || void 0 === bG || bG.request(GG)
          },
          onModelTaken: (GG, bG) => {
            var ZG;
            null === (ZG = qy) || void 0 === ZG || ZG.taken(GG, bG)
          },
          onTerrainTexturesWanted: () => {
            queueMicrotask((() => {
              ! function(GG, bG) {
                const ZG = ry;
                if (null === ZG || GG.isStopped) return;
                ZG.restore((GG => {
                  (0, aZ.reportTerrainTextureFailure)(GG, bG)
                })).then((bG => {
                  !1 !== bG || GG.isStopped ? !0 === bG && console.info(`${qL} terrain textures handed over again after the renderer lost them`) : console.warn(`${qL} the terrain textures couldn't be handed over again: the terrain draws blank`)
                }))
              }(IG, mG)
            }))
          },
          onKeepAlive: GG => {
            const bG = null === Jk ? void 0 : rk.get(Jk);
            void 0 !== bG && xw(bG, GG)
          },
          onSends: () => {
            ! function(GG) {
              const bG = performance.now();
              if (GG.forEachNetOut(YV), LV(GG), (0, fZ.R)(GG, {
                  worldgen: Fy,
                  mesh: ay
                }), null !== SU) try {
                SU.sendsWent(GG, bG, performance.now())
              } catch (SG) {
                TY(SG)
              }
            }(IG)
          }
        });
        if (hy = IG, null === (yG = Ab.c.wasmNetReady) || void 0 === yG || yG.call(Ab.c, (() => IG.isStopped ? 0 : IG.netKeptFrames)), null !== GG) {
          IG.setAntiCheatProbes(aL(hb.y, GG.checks)), GG.watchHeld(lL.CoreFrame, (() => IG.frame)), GG.watchHeld(lL.GlueFrame, (() => WG.frame));
          const bG = function(GG, bG) {
            const ZG = new cL(bG);
            let wG = !1;
            ZG.Tp(GG.Tp());
            const SG = (0, Nw.$)((() => {
              ZG.Tp(GG.Tp())
            }), jL);
            let LG = 6 * (0, Nw.Q)() | 0;
            const yG = () => {
              ++LG < 6 || (LG = 0, GG.checks.stackCheck() && (wG = !0))
            };
            (0, pL.h)(yG);
            const kG = () => {
              const bG = GG.checkPadCall();
              0 !== bG && ZG.setFlags(bG)
            };
            return (0, VL.f)(kG), {
              onSend: yG,
              beforeFrame: () => {
                wG && ZG.originStackHit() && (wG = !1)
              },
              onEvent: bG => {
                const wG = GG.checkEvent(bG);
                ZG.value(Nb.k.ProbeUsedProp, GG.usedProp()), 0 !== wG && ZG.setFlags(wG)
              },
              stop: () => {
                (0, Nw.db)(SG), (0, pL.e)(yG), (0, VL.e)(kG)
              }
            }
          }(GG, ((GG, bG, ZG) => {
            let wG = !1;
            return EV(IG, (() => {
              wG = IG.rings.input.writeRecord(Nb.yb.AntiCheat, GG, bG, ZG, 0)
            })), wG
          }));
          IG.isStopped ? bG.stop() : Ay = bG
        }
        ky = (GG, bG, ZG) => IG.rings.cmd.writeCmd(GG, bG, ZG), Uy = GG => IG.rings.cmd.growForCmd(GG), Vk = !1, aY(), (0, aG.v)(IG, {
          core: WG,
          memory: hb.y,
          staleOr: (GG, bG, ZG, wG) => mV({
            site: GG,
            error: bG
          }, ZG, wG),
          reportReplayFault: (GG, bG) => {
            (0, aZ.reportReplayFault)(GG, bG, Ey)
          },
          audio: zy,
          options: ub.c,
          onNetEvent: HY,
          sessionInfo: GG => {
            var bG;
            return (null === (bG = ik) || void 0 === bG ? void 0 : bG.conn) === GG ? ik.info : null
          },
          onEventOverflow: HU,
          replayShaderPack: GG => {
            var bG;
            null === (bG = Dy) || void 0 === bG || bG.replay(GG)
          },
          hasPackModel: GG => {
            var bG, ZG;
            return null !== (null !== (bG = null === (ZG = cY()) || void 0 === ZG ? void 0 : ZG.modelUrl(GG)) && void 0 !== bG ? bG : null)
          },
          beforeWrite: () => (!yk && IG.rings.net.cursor > 0 && BY(IG, !1, "all"), !IG.isStopped),
          beforeOp: () => (!yk && IG.netWrittenSinceFrame > 0 && BY(IG, !1, "budget"), !IG.isStopped)
        }), (0, vG.E)({
          lockPointer: () => {
            if (!Sw(JG)) return !1;
            try {
              Promise.resolve(JG.requestPointerLock()).catch((() => {}))
            } catch {
              return !1
            }
            return !0
          },
          unlockPointer: () => {
            (0, TZ.d)()
          },
          leaveGame: () => {
            TU()
          },
          canvas: () => JG
        }), sy = (0, vG.t)((() => {
          var GG;
          const bG = (0, aG.f)();
          null === (GG = (0, aG.q)()) || void 0 === GG || GG.followCursorAim(!0 === (null === bG || void 0 === bG ? void 0 : bG.isSessionLive) ? bG : null)
        })), Kk && IG.setUiPrefs(Kk);
        hk && IG.setEnvPrefs(hk);
        dk && IG.setLookPrefs(dk);
        const FG = jS ? PS(jS.preventMovement) : null;
        FG && wY(FG);
        const cG = (0, mZ.n)(),
          lG = (0, mZ.g)(IG, cG);
        Py = cG.basis, (0, nZ.h)(null === lG ? null : (0, WZ.n)(lG)), jy = lG;
        const jG = (0, Jb.e)();
        let PG = 1 / 0,
          MG = !0,
          AG = cG.shedFootprintBytes;
        const sG = new YS.e(jG, (() => WG.Od()), (GG => {
          IG.crash(fZ.p, GG)
        }));
        cy = sG, ly = sG, null !== lG && sG.setCeiling(Math.min((0, YS.o)(lG), PG, (0, mZ.o)()));
        if (MG) {
          sG.setShed((GG => {
            const bG = IG.shedMemory("joinReserve" !== GG);
            return null !== bG && (null === jy || bG < jy) && (jy = bG, (0, nZ.h)((0, WZ.n)(bG))), bG
          }), ((GG, bG, ZG) => {
            1 === bG ? (0, aZ.reportMemoryShed)(GG, ZG, Ey) : console.warn(`${qL} wasm memory: shed again (${GG}): shed ${bG}`, ZG.wasmMemoryShed)
          }), (() => IG.addDistanceInUse()));
          const GG = (0, VZ.P)(CG);
          sG.setFootprint(new DS(AG, {
            storedChunks: () => WG.XwG(),
            gpuBytes: () => {
              var bG;
              return null !== (bG = null === GG || void 0 === GG ? void 0 : GG.uwG()) && void 0 !== bG ? bG : 0
            },
            jsHeapBytes: tS
          }))
        }
        window.addEventListener("pagehide", (() => {
          cy === sG && (sG.refreshStats(), zV(sG))
        })), window.addEventListener("pagehide", OY), window.addEventListener("pagehide", xY), !1;
        const [qG, nG] = (0, jZ.f)();
        kU = (0, MZ.g)((GG => IG.setChunkAddDistance(GG.horizontal, GG.vertical)), {
          horizontal: qG,
          vertical: nG
        }), IG.setAmbientOcclusion(!0 !== gZ.h.getItem("disableAmbientOcclusion")), IG.setPoseLod(!0 !== gZ.h.getItem(Qb.cb)), IG.setDebugLog(Nb.V.Look, !0), IG.setDebugLog(Nb.V.CameraSet, !0), (0, xS.startLookDebug)("wasm", {
          look: () => IG.takeDebugLog(Nb.V.Look),
          cameraSets: () => IG.takeDebugLog(Nb.V.CameraSet)
        }), (0, NS.m)("remesh") && (IG.setDebugLog(Nb.V.Remesh, !0), gG = () => IG.takeDebugLog(Nb.V.Remesh), wL = new ZL((0, BS.k)(), gG));
        var gG;
        const eG = function(GG, bG, ZG, wG) {
          const SG = new ow,
            LG = GG => gZ.h.getItem(GG);
          SG.sync(LG, bG), (0, jb._)();
          const yG = (0, UG.p)("customBindingsChanged", (() => {
            SG.sync(LG, bG)
          }));
          (0, HZ.r)(bG);
          const kG = new Set,
            YG = (0, vG.t)((() => {
              var GG;
              kG.size > 0 && Cw() && !0 === (null === (GG = (0, aG.f)()) || void 0 === GG ? void 0 : GG.localPlayerAlive()) && UG.l.xh("usedKeyboard")
            })),
            VG = fw.c.heldSizer((() => (0, sb.k)(GG))),
            pG = pw(GG, bG, {
              prevents: GG => SG.prevents(GG),
              keyPressed: GG => {
                SG.moves(GG) && (kG.add(GG), Cw() && UG.l.xh("usedKeyboard"))
              },
              keyReleased: GG => {
                kG.delete(GG)
              },
              keysReleased: () => {
                kG.clear()
              },
              resized: () => {
                uw.i.measure(GG.getBoundingClientRect()), (0, Qw.h)()
              },
              sizeCanvas: VG,
              watchRenderScale: bG => {
                const ZG = (0, sb.l)(GG, bG),
                  wG = fw.c.onRelease(bG);
                return () => {
                  ZG(), wG()
                }
              },
              touchStarting: () => {
                uw.i.measure(GG.getBoundingClientRect())
              },
              viewShown: ZG,
              touchUiShown: () => Gb.e.get("isTouchScreen"),
              ctrlCombosAreGames: Cw,
              inspect: (GG, bG, ZG) => {
                SG.checks(bG, ZG) && wG(GG)
              },
              canLock: () => Sw(GG)
            }),
            fG = (0, rZ.e)(bG);
          return () => {
            yG(), YG(), (0, HZ.r)(null), fG(), pG()
          }
        }(JG, ((GG, bG, ZG, wG, SG) => {
          EV(IG, (() => {
            IG.rings.input.writeRecord(GG, bG, ZG, wG, SG)
          })), !kk && (0, vw.f)(GG, SG) && (0, vw.d)((() => {
            hy !== IG || iU || IG.isStopped || !kV() || BY(IG, !1, "budget", !1)
          }))
        }), (() => EU), (GG => {
          var bG;
          null === (bG = Ay) || void 0 === bG || bG.onEvent(GG)
        }));
        if (IG.isStopped) return eG(), null;
        Iy = eG;
        const RG = () => !IG.isStopped && !XU;
        if (IG.isStopped) return null;
        (0, hb.X)((() => {
          "call" === (0, hb.r)() && IG.crash(fZ.y, (0, hb.o)())
        }));
        const TG = (0, fZ.U)(IG.rings.worker, (() => {
          BY(IG, !1, document.hidden ? "all" : "budget")
        }));
        Fy = function(GG, bG) {
          return oV().then((GG => {
            let {
              prefetchWorldgenWorker: bG
            } = GG;
            bG()
          }), (() => {})), new kL({
            module: (0, hb.B)(),
            decodeSettings: GG => {
              const bG = (0, aG.q)();
              if (null === bG) throw new Error("no game code to decode the world-gen seed with");
              return bG.decodeMapSettings(GG)
            },
            loadWorker: XV,
            onMapWithoutWorldgen: () => {
              uV((GG => {
                let {
                  stopWorldgenWorkerPrefetch: bG
                } = GG;
                bG()
              }))
            },
            onLoadFailed: GG => {
              (0, aZ.reportWorldgenLoadFailure)(GG, Ey)
            },
            onWorkerLost: GG => {
              (0, aZ.reportWorkerLost)(fZ.J, GG, Ey)
            },
            onStartTimeout: GG => {
              (0, aZ.reportWorkerStartTimeout)(fZ.J, GG, Ey)
            },
            onGaveUp: GG => {
              (0, aZ.reportWorldgenGaveUp)(GG, Ey)
            },
            onMemoryStats: GG => {
              var bG;
              null === (bG = cy) || void 0 === bG || bG.noteWorldgen(GG)
            },
            onMemoryGone: () => {
              var GG;
              null === (GG = cy) || void 0 === GG || GG.worldgenGone()
            },
            write: (ZG, wG, SG, LG, yG) => {
              EV(GG, (() => {
                GG.rings.worker.writeWorkerRecord(ZG, wG, SG, 0, LG, yG) || GG.crash(fZ.J, `a world-gen record of kind ${wG} did not fit the worker-in ring`)
              })), bG()
            }
          })
        }(IG, TG), ay = function(GG, bG) {
          return new kS({
            module: (0, hb.B)(),
            loadWorkers: async () => {
              const [{
                createMeshWorker: GG
              }, bG] = await Promise.all([ZG.e(41).then((() => ZG(51461))), Promise.resolve().then((() => ZG(80))).then((GG => {
                let {
                  isMobile: bG
                } = GG;
                return bG()
              }), (() => !1))]);
              return {
                create: GG,
                count: (0, Fb.e)(navigator.hardwareConcurrency, bG),
                maxKeptLightStates: bG ? 1 : void 0
              }
            },
            write: (ZG, wG, SG, LG, yG, kG) => {
              (0, Qw.g)(), EV(GG, (() => {
                GG.rings.worker.writeWorkerRecord(ZG, wG, SG, LG, yG, kG) || GG.crash(fZ.t, `a meshing record of kind ${wG} did not fit the worker-in ring`)
              })), bG()
            },
            onWorkerLost: GG => {
              (0, aZ.reportWorkerLost)(fZ.t, GG, Ey)
            },
            onLightFault: (GG, bG) => {
              (0, aZ.reportLightFault)(GG, bG, Ey)
            },
            onStartTimeout: GG => {
              (0, aZ.reportWorkerStartTimeout)(fZ.t, GG, Ey)
            },
            onMemoryStats: (GG, bG) => {
              var ZG;
              null === (ZG = cy) || void 0 === ZG || ZG.noteMeshWorker(GG, bG)
            },
            onMemoryGone: GG => {
              var bG;
              null === (bG = cy) || void 0 === bG || bG.meshWorkerGone(GG)
            },
            fail: (bG, ZG) => {
              const wG = () => {
                GG.crash(fZ.t, void 0 === ZG ? bG : new Error(bG, {
                  cause: ZG
                }))
              };
              void 0 !== ZG ? mV({
                site: fZ.t,
                error: ZG
              }, wG) : wG()
            }
          })
        }(IG, TG), DU();
        const HG = (0, XS.r)(mb.clientSideServerUrls.staticUrl, {
            onTableFailed: GG => {
              mV({
                site: aZ.MODEL_FEED_SITE,
                error: GG
              }, (() => {}), {
                stillWanted: RG
              })
            },
            packUrl: GG => {
              var bG, ZG;
              return null !== (bG = null === (ZG = cY()) || void 0 === ZG ? void 0 : ZG.modelUrl(GG)) && void 0 !== bG ? bG : null
            }
          }),
          tG = function(GG, bG, ZG) {
            const wG = ZG => {
              var wG, SG;
              return null !== (wG = null === (SG = bG()) || void 0 === SG ? void 0 : SG.drawnUrl(ZG)) && void 0 !== wG ? wG : GG.url(ZG)
            };
            return (0, ES.l)((0, pS.k)(wG), ZG)
          }(HG, (() => qy), cY),
          DG = new pS.e(tG, (GG => {
            console.warn(`${qL} image ${GG.key.kind}:${GG.key.index}:${GG.key.word} failed`, GG.error)
          }));
        Ty = DG, Hy = new JS(IG, tG, ((GG, bG) => {
          void 0 === bG ? console.warn(`${qL} ${GG}`) : jY(GG, bG)
        }));
        const NG = new zS.g(HG, function(GG, bG) {
          let wG = !1,
            SG = null,
            LG = null;
          const yG = {
              onUnavailable: (ZG, wG) => {
                LG ??= mV({
                  site: aZ.MODEL_POOL_SITE,
                  error: ZG,
                  urls: wG
                }, (() => {
                  (0, aZ.reportModelPoolFailure)(ZG, GG)
                }), {
                  stillWanted: bG
                })
              },
              onDecoderFailed: (ZG, wG) => {
                const SG = () => {
                  (0, aZ.reportDracoDecoderFailure)(ZG, GG)
                };
                void 0 !== wG ? mV({
                  site: aZ.MODEL_POOL_SITE,
                  error: ZG,
                  urls: wG
                }, SG, {
                  stillWanted: bG
                }) : SG()
              },
              onWorkerLost: bG => {
                (0, aZ.reportWorkerLost)(aZ.MODEL_POOL_SITE, bG, GG)
              },
              onModuleRetry: (bG, ZG) => {
                (0, aZ.reportModelsModuleRetry)(bG, ZG, GG)
              }
            },
            kG = ZG.e(43).then((() => ZG(51469))).then((GG => {
              let {
                pageModelPool: bG
              } = GG;
              if (wG) return null;
              const ZG = bG(yG);
              return SG = ZG.unlisten, ny = ZG.pool, DU(), ZG.pool
            }), (GG => (wG || yG.onUnavailable(GG, void 0), null)));
          return gy = () => {
            var GG;
            wG = !0, null === (GG = SG) || void 0 === GG || GG(), ny = null
          }, (GG, bG) => kG.then((ZG => {
            var wG;
            return null !== (wG = null === ZG || void 0 === ZG ? void 0 : ZG.build(GG, bG)) && void 0 !== wG ? wG : (0, uS.r)(GG, "the model workers did not load")
          })).then((GG => null !== LG && (0, uS.l)(GG) ? LG.then((() => GG)) : GG))
        }(mG, RG), (GG => {
          GG.startup ? (pV(), mV({
            site: aZ.MODEL_FEED_SITE,
            error: GG.error,
            urls: "" === GG.url ? void 0 : [GG.url]
          }, (() => {
            (0, aZ.reportModelFailure)(GG, mG)
          }))) : (0, aZ.reportModelFailure)(GG, mG)
        }), {
          onWritten: (GG, bG) => {
            DG.glbWritten(GG, bG)
          },
          onTaken: (GG, bG) => {
            DG.glbTaken(GG, bG)
          },
          onPackFileFailed: (GG, bG) => {
            console.warn(`${qL} the texture pack's model file ${GG} failed: the shipped one loads`, bG)
          }
        });
        qy = NG;
        const OG = new KS.d(IG);
        ry = OG, OG.swap((GG => {
          const bG = () => {
            (0, aZ.reportTerrainTextureFailure)(GG, mG)
          };
          if (UU) return void bG();
          const ZG = () => !UU,
            wG = null === GG.url ? void 0 : [GG.url];
          mV({
            site: fZ.F,
            error: GG.error,
            urls: wG
          }, bG, {
            stillWanted: ZG
          })
        })).then((GG => {
          null !== GG && (GG || IG.isStopped || console.warn(`${qL} the core refused the terrain textures: terrain draws untextured`), By(IG))
        }));
        const bb = new tb(IG, ((GG, bG) => {
          console.warn(`${qL} ${GG}`, ...void 0 === bG ? [] : [bG])
        }));
        bb.feed(), null !== QG && function(GG, bG, wG, SG, LG, yG) {
          let kG = null,
            YG = null,
            VG = !1;
          const pG = {
            textures: null,
            stop: () => {
              var GG, bG;
              VG = !0, null === (GG = YG) || void 0 === GG || GG(), null === (bG = kG) || void 0 === bG || bG(), oS.e.setSettled(null), null !== oy && cU.clear(oy)
            }
          };
          Jy = pG, YG = PY().follow((YG => {
            null !== YG && Promise.all([ZG.e(204), ZG.e(46)]).then((() => ZG(51435))).then((ZG => {
              let {
                PackTextures: fG
              } = ZG;
              if (VG || GG.isStopped) return;
              const QG = new fG({
                feed: YG,
                terrain: bG,
                backend: wG,
                stopped: () => GG.isStopped,
                landed: () => {
                  By(GG)
                },
                packSwapped: () => {
                  (0, ES.i)(SG), yG.feed((() => async function(GG) {
                    const bG = null === GG ? null : await GG.averageColours;
                    return null === bG ? Db() : Hb(bG)
                  }(QG.assets))), (0, rS.n)(QG.files()), LG.refresh().then((GG => {
                    null !== GG && console.info(`${qL} texture pack models: ${GG.resent} of ${GG.delivered} files written again, ${GG.refetched} refetched`)
                  }))
                },
                settled: (GG, bG, ZG) => {
                  var wG;
                  (oS.e.setSettled({
                    state: GG,
                    files: bG
                  }), function(GG, bG, ZG) {
                    const wG = null === GG.gameSource && (0, cZ.d)(GG.pack);
                    if (null === bG) return;
                    const SG = (0, vZ.h)(bG.error),
                      LG = wG ? "settings" : bG.source;
                    UG.l.xh(vZ.c, {
                      failure: SG,
                      source: LG,
                      pack: lZ(GG)
                    }), (0, aZ.reportTexturePackKeptOut)(LG, SG, bG.error, ZG)
                  }(GG, ZG, Ey), null === ZG) && function(GG) {
                    const bG = oy;
                    null !== bG && cU.apply(bG, GG).then((bG => {
                      bG && GG && console.info(`${qL} the texture pack's animations are in (${Object.keys(GG).length} files)`)
                    }))
                  }(null === (wG = GG.pack) || void 0 === wG ? void 0 : wG.animations)
                },
                settling: () => {
                  oS.e.setSettled(null)
                },
                warn: jY,
                maxTextureSize: () => Promise.resolve((0, VZ.eb)(document.createElement("canvas")))
              });
              pG.textures = QG, kG = QG.start()
            }), (GG => {
              console.warn(`${qL} the texture pack's terrain didn't load: the built atlas stays`, GG)
            }))
          }))
        }(IG, OG, QG, DG, NG, bb);
        const Zb = () => {
            IG.setTextureLayers("")
          },
          wb = GG => {
            (Wb ??= ZG.e(54).then((() => ZG(51476))).then((GG => {
              let {
                TEXTURE_NAMES: bG
              } = GG;
              return bG
            }), (GG => {
              throw Wb = null, GG
            })), Wb).then((GG => {
              IG.setTextureLayers(GG) || IG.isStopped || (console.warn(`${qL} the core refused the texture names: textured Boxes draw textureNotFound`), Zb())
            }), (bG => {
              if (IG.isStopped) return;
              const [ZG, ...wG] = GG;
              void 0 === ZG ? mV({
                site: aZ.TEXTURE_NAMES_SITE,
                error: bG
              }, (() => {
                console.warn(`${qL} the texture names didn't load, so textured Boxes draw textureNotFound`, bG), Zb()
              }), {
                stillWanted: RG
              }) : setTimeout((() => {
                wb(wG)
              }), ZG)
            }))
          };
        if (wb(Ly), null !== QG && !await async function(GG, bG, ZG, wG, LG, yG) {
            var kG;
            const UG = (0, VZ.P)(ZG);
            if (null === UG) return GG.crash(gL, new Error(`this ${wG} build has no openRenderer`)), !1;
            let YG;
            Dk = UG;
            try {
              var VG, pG, fG, QG;
              const SG = null !== (VG = null === (pG = Qy) || void 0 === pG ? void 0 : pG.pagePreviews()) && void 0 !== VG ? VG : null,
                kG = null !== (fG = null === (QG = Qy) || void 0 === QG ? void 0 : QG.previewModule(ZG)) && void 0 !== fG ? fG : null;
              if (null === SG || null === kG) {
                null === SG || void 0 === SG || SG.endSession(!1), YG = (0, sb.d)().sampleCount, await (0, VZ.g)(bG, UG, yG, vY, YG, await LG);
                const GG = (0, VZ.m)(ZG);
                null === GG && console.warn(`${qL} this ${wG} build has no image registry: sky and model images won't show`), (0, QS.f)(GG)
              } else {
                (0, vS.c)() && await (0, BG.m)();
                const ZG = (0, vS.I)();
                if (null !== ZG) {
                  const bG = (0, pZ.j)(UG);
                  return GG.crash(aZ.RENDER_RELOAD_SITE, new Error(`${ZG}${void 0===bG?"":` (${bG.message})`}`)), !1
                }
                YG = await SG.bindSession(kG, bG, (async GG => (0, VZ.w)(UG, gL, yG, GG, vY, await LG)))
              }
            } catch (SG) {
              return GG.crash(gL, SG), !1
            }(function(GG, bG) {
              const ZG = GG,
                {
                  requestCapture: wG,
                  takeCapture: SG
                } = ZG;
              if ("function" !== typeof wG || "function" !== typeof SG) return;
              const LG = {
                request() {
                  wG.call(ZG, bG)
                },
                take() {
                  var GG;
                  return null !== (GG = SG.call(ZG)) && void 0 !== GG ? GG : null
                }
              };
              window[sS] = LG
            })(bG, YG), ZU = YG, Hk = !0;
            const KG = performance.now();
            return tk.boundAtMs = null !== (kG = (0, vS.K)()) && void 0 !== kG ? kG : KG, tk.indirectHangs = (0, vS.y)(), tk.restoresSkipped = (0, vS.L)(), console.info(`${qL} ${wG} renderer bound at ${Math.round(KG)} ms`), !GG.isStopped
          }(IG, WG, CG, QG, hG, JG)) return null;
        if (null !== QG) {
          var Sb, Lb, yb;
          (0, rb.I)(QG);
          const GG = () => !IG.isStopped && yV();
          ZG.e(196).then((() => ZG(34362))).then((bG => {
            let {
              devTools: ZG
            } = bG;
            IG.isStopped || ZG.setHost(function(GG) {
              return {
                tools: FS,
                async downloadScene(bG, ZG) {
                  let {
                    width: wG,
                    height: SG,
                    colouring: LG
                  } = ZG;
                  "screenshot" === bG && null === LG ? await (0, WS.g)(GG, wG, SG) : console.warn("The Rust client's developer tools take uncoloured screenshots only")
                },
                setAmbientLightIntensity: () => (console.warn("The Rust client's renderer has no ambient light setting"), Promise.resolve()),
                capturePhoto: (bG, ZG, wG) => (0, WS.c)(GG, bG, ZG, wG)
              }
            }(function(GG, bG) {
              return {
                canvas: GG,
                maxTextureSize: mS,
                drawing: bG,
                resize: (GG, bG, ZG) => {
                  (0, HZ.y)(Nb.yb.Resize, 0, GG / ZG, bG / ZG, (0, HZ.n)(ZG))
                },
                restoreSize: () => {
                  const bG = (0, sb.k)(GG);
                  null !== bG && (0, HZ.y)(Nb.yb.Resize, 0, bG.cssWidth, bG.cssHeight, (0, HZ.n)(bG.renderScale))
                },
                onFrameDrawn: GG => (IS.add(GG), () => {
                  IS.delete(GG)
                })
              }
            }(JG, GG)))
          }), (GG => {
            console.warn(`${qL} the developer tools didn't load: no captures this session`, GG)
          }));
          const bG = "webgpu" === QG && null !== (Sb = null === fG || void 0 === fG || null === (Lb = fG.adapter) || void 0 === Lb ? void 0 : Lb.vendor) && void 0 !== Sb ? Sb : null;
          wU = {
            backend: QG,
            canvas: JG,
            fallbackReason: null !== (yb = null === fG || void 0 === fG ? void 0 : fG.reason) && void 0 !== yb ? yb : null,
            adapterVendor: bG
          }, gY();
          try {
            (0, Qw.q)(QG, JG, bG)
          } catch (SG) {
            (0, Qw.u)(), console.error(`${qL} the quality steps didn't start`, SG)
          }
        }
        const {
          storagePullBreaks: kb,
          splitPassBreaks: Ub
        } = await hG;
        Ub && console.warn(`${qL} split_pass_breaks on: Windows Adreno 7xx (N-103) or ?sceneDepth=off`);
        const Yb = (0, xG.h)(fG, (0, lb.k)());
        if ((0, NS.m)("webgpuloss")) {
          var Vb, pb;
          const GG = {
            backend: QG,
            reason: null !== (Vb = null === fG || void 0 === fG ? void 0 : fG.reason) && void 0 !== Vb ? Vb : null,
            source: null !== (pb = null === fG || void 0 === fG ? void 0 : fG.source) && void 0 !== pb ? pb : null,
            storagePullBreaks: kb,
            noWebGpu: Yb.messageKey
          };
          (0, OS.b)((bG => {
            bG.noteWasmPick(GG)
          }))
        }
        const fb = "webgpu" === QG;
        if (Dy = (0, xG.i)(fb ? IG : null, fb && null !== (kG = null === (YG = Qy) || void 0 === YG ? void 0 : YG.pagePreviews().OQ) && void 0 !== kG ? kG : null, Yb, jY), iU) return null;
        if (sG.reserveAtJoin((0, YS.m)(null !== lG && void 0 !== lG ? lG : WZ.g)), IG.isStopped) return null;
        const Kb = GG => {
          if (wk = performance.now(), Sk = !1, null !== SU) try {
            SU.animationFrame(GG)
          } catch (SG) {
            TY(SG)
          }
          if (function(GG, bG) {
              return bG && !iU && !kk && kV() && yV() && GG.framePaces(performance.now())
            }(IG, EU)) {
            if (IG.writePendingInput(), (0, vG.g)(GG, GV), eY(!1, GG), null !== SU) try {
              SU.framePaced()
            } catch (SG) {
              TY(SG)
            }
            requestAnimationFrame(Kb)
          } else BY(IG, EU, "budget") && ((0, Pb.l)(IG.lastFrameKind) && yV() && (0, vG.g)(GG, GV), eY(EU && dU, GG), JU.frame(IG.lastFrameKind, EU && yV(), GG), rU.frame(IG.lastFrameKind, EU && yV()), (0, Pb.e)(IG.lastFrameKind) && lb.P.drew(), KV(IG), sG.afterFrame(), requestAnimationFrame(Kb))
        };
        requestAnimationFrame(Kb);
        return function(GG) {
          if (GG.has("inputLog") && (0, Xw.j)((GG => {
              let {
                action: bG,
                down: ZG,
                press: wG
              } = GG;
              console.info(`${iw} input ${bG} ${ZG?"down":"up"} press ${wG} at ${performance.now().toFixed(1)}`)
            })), GG.has("inputDump")) {
            const GG = [];
            Ww = GG, Object.assign(window, {
              bloxdInputDump: () => GG.join("\n")
            })
          }
        }(new URLSearchParams(window.location.search)), My = function(GG) {
          let bG = null;
          const ZG = () => {
              null !== bG && (clearInterval(bG), bG = null)
            },
            wG = () => {
              document.hidden ? bG ??= setInterval((() => {
                CV(GG) || ZG()
              }), Sy) : ZG()
            };
          return document.addEventListener("visibilitychange", wG), wG(), () => {
            ZG(), document.removeEventListener("visibilitychange", wG)
          }
        }(IG), IG
      }(bG).then((GG => {
        var bG;
        (wG(Ey), iy(null !== GG), null !== GG && (zG = performance.now()), Xy(GG), null === GG) ? null === (bG = Qy) || void 0 === bG || bG.pagePreviews().endSession(null === (0, hb.r)()): xy("booted")
      }), (GG => {
        wG(Ey), iy(!1), Xy(null), fV({
          site: eL,
          error: GG,
          header: null
        }, Ey)
      }))
    }

    function aU() {
      const GG = oy;
      null !== GG && CU().then((bG => {
        let {
          pageBuiltInAnimationPack: ZG
        } = bG;
        ZG().provide(GG)
      }), (GG => {
        console.warn(`${qL} the built-in animation pack's chunk did not load: lifeforms stay in their rest pose`, GG)
      }))
    }
    const cU = new class {
      constructor(GG) {
        this.deps = GG, this.latest = 0, this.Ik = null
      }
      apply(GG, bG) {
        return this.load(GG, bG, 0)
      }
      async load(GG, bG, ZG) {
        var wG;
        const SG = ++this.latest,
          LG = this.deps.compiler;
        if (void 0 === bG || null === bG || "object" !== typeof bG || 0 === Object.keys(bG).length || null === LG) return this.drop(GG), !1;
        if ((null === (wG = this.Ik) || void 0 === wG ? void 0 : wG.module) === GG && (0, LZ.ze)(this.Ik.files, bG)) return !1;
        try {
          const [ZG, wG] = await Promise.all([LG(), this.deps.builtIns()]);
          if (SG !== this.latest) return !1;
          const yG = await ZG(bG, YZ, {
            builtIns: wG
          });
          if (SG !== this.latest) return !1;
          const kG = this.call(GG, yG);
          if (void 0 === kG) throw new UZ("the compiled animations didn't read against the built-in pack");
          return this.Ik = {
              module: GG,
              files: bG
            },
            function(GG) {
              for (let bG = 0; bG + 2 < GG.length; bG += 3) {
                ("error" === GG[bG] ? console.error : console.warn)(`Animation for the texture pack: ${GG[bG+1]}: ${GG[bG+2]}`)
              }
            }(kG), !0
        } catch (kG) {
          var yG;
          if (SG !== this.latest) return !1;
          this.drop(GG), 0 === ZG && this.deps.warn("the texture pack's animations didn't load: lifeforms play the built-in ones", kG);
          const wG = (null !== (yG = this.deps.retryAfterMs) && void 0 !== yG ? yG : kZ)[ZG];
          return void 0 === wG || kG instanceof UZ || (0, yZ.k)(GG) || setTimeout((() => {
            SG === this.latest && this.load(GG, bG, ZG + 1)
          }), wG), !1
        }
      }
      call(GG, bG) {
        try {
          return GG.zwG(bG)
        } catch (ZG) {
          throw (0, yZ.m)(GG, ZG), ZG
        }
      }
      clear(GG) {
        this.latest++, this.drop(GG)
      }
      drop(GG) {
        const bG = this.Ik;
        if (this.Ik = null, (null === bG || void 0 === bG ? void 0 : bG.module) === GG && !(0, yZ.k)(GG)) try {
          this.call(GG, null)
        } catch {}
      }
    }({
      compiler: bZ.d,
      builtIns: async () => {
        const {
          pageBuiltInAnimationPack: GG
        } = await CU();
        return GG().whenSet()
      },
      warn: jY
    });
    async function lU(GG, bG) {
      let wG = !1;
      await jU({
        matchmake: async () => {
          const {
            guestJoinTarget: SG,
            guestJoinWithPack: LG
          } = await ZG.e(277).then((() => ZG(51425)));
          return wG ? SG(GG, bG, AY()) : (wG = !0, LG(GG, bG, (bG => sY(GG, bG)), AY))
        },
        onFailure: GG => {
          (0, aZ.showJoinFailure)(GG, Ey)
        },
        rejoin: xU,
        invalidateTrafficCode: BU
      })
    }
    async function jU(GG) {
      let {
        matchmake: bG,
        onFailure: ZG,
        rejoin: SG,
        invalidateTrafficCode: LG,
        pageReady: yG,
        signal: kG
      } = GG;
      const UG = () => !0 === (null === kG || void 0 === kG ? void 0 : kG.aborted);
      let YG;
      const VG = oS.e.rejoinHold();
      Ek = null;
      const pG = (0, AZ.Q)("wasm", rV);
      let fG = !1,
        QG = performance.now();
      try {
        if (!await Cy) return {
          kind: "stopped"
        };
        if (UG()) return {
          kind: "RZ"
        };
        WU().catch((() => {}));
        let GG = await bG();
        var oG, XG;
        if (QG = performance.now(), !UG()) JV(null !== (oG = null === (XG = GG.target.session) || void 0 === XG ? void 0 : XG.gameNameWithVariation) && void 0 !== oG ? oG : null);
        const ZG = () => performance.now() - GG.matchedAt <= GG.freshMs,
          wG = MU(GG.target).catch((() => {}));
        ZG() && !UG() && (YG = new SS(GG.target, {
          signal: kG
        }));
        const LG = performance.now();
        if (null === await uy) return {
          kind: "stopped"
        };
        var uG, iG;
        if (function(GG) {
            var bG, ZG;
            if (hG.d.markGameEngineConstructed(), EG) return;
            EG = !0;
            const wG = Math.max(GG, null !== (bG = JG) && void 0 !== bG ? bG : GG);
            (0, dG.h)("ready", Math.max(0, (null !== (ZG = rG) && void 0 !== ZG ? ZG : wG) - wG) / 1e3)
          }(LG), !UG())
          if (null !== rG && null !== zG ? ((0, KG.p)("wasm_loaded", rG), (0, KG.p)("wasm_core_ready", zG)) : console.warn("[bloxd-wasm-client] a join found the core before boot marked its steps"), GG.target.session && (0, LL.b)(GG.target.session.gameNameWithVariation)) null === (uG = Fy) || void 0 === uG || uG.prestart();
        if (await wG, !ZG() && !UG()) null === (iG = YG) || void 0 === iG || iG.rematched(), GG = await bG(), QG = performance.now();
        if (UG()) return {
          kind: "RZ"
        };
        const VG = await async function(GG) {
          var bG, ZG, wG;
          let {
            signal: SG,
            rejoin: LG = null,
            early: yG,
            pageReady: kG
          } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (null !== SG && void 0 !== SG && SG.aborted) throw new DOMException("the join was left", "AbortError");
          const UG = (YG = Pk, VG = performance.now(), null !== YG && VG - YG < Rw);
          var YG, VG;
          Pk = null;
          const pG = new AbortController,
            fG = null !== (bG = null === (ZG = GG.session) || void 0 === ZG ? void 0 : ZG.gameNameWithVariation) && void 0 !== bG ? bG : null;
          JV(fG), qU({
            controller: pG,
            game: fG
          }), Mk = null, null === (wG = qk) || void 0 === wG || wG.abort(), qk = null, gk = !1, ek = null, Rk.clear();
          const QG = () => {
            (0, Ib.j)(pG, (0, Ib.h)(SG))
          };
          null === SG || void 0 === SG || SG.addEventListener("abort", QG, {
            once: !0
          });
          try {
            var hG, dG, JG;
            const bG = await uy;
            if (null === bG || bG.isStopped || iU) throw new Error("no core is running to join a game with");
            if (GG.session && null !== Dy) {
              const bG = await AU(Dy.join(GG.session.gameNameWithVariation), pG.signal);
              if ((0, NS.m)("webgpuloss")) {
                const ZG = GG.session.gameNameWithVariation,
                  wG = Dy.couldntRunInJoinedGame();
                (0, OS.b)((GG => GG.noteWasmJoin(ZG, bG, wG)))
              }
              if (null !== bG) throw new xG.e(bG)
            }
            const [, , , {
              joinRoom: ZG
            }] = await AU(Promise.all([(0, aG.g)(bG), MU(GG), null === kG || void 0 === kG ? void 0 : kG(), WU()]), pG.signal), wG = GG.session, SG = wG ? {
              ...ZY,
              attachSocket: bG => {
                const ZG = YY(bG, GG.endpoint);
                var SG;
                null !== ZG && (ik = {
                  conn: ZG,
                  info: wG
                }, null === (SG = Ck) || void 0 === SG || SG(wG.playerDbId));
                return ZG
              }
            } : ZY, YG = await ZG(SG, GG, {
              signal: pG.signal,
              early: yG
            }).catch((GG => {
              throw function(GG) {
                if (!(GG instanceof gG.c)) return GG;
                if ("roomError" === GG.stage && null !== ek) return PU(new gG.c(GG.message, GG.stage, GG.code, ek), GG);
                const bG = "closed" === GG.stage && null !== Ak ? Rk.get(Ak.conn) : void 0;
                return void 0 === bG ? GG : PU(new gG.c(GG.message, GG.stage, bG.code, null, GG.socketOpened), GG)
              }(GG)
            }));
            if (zk !== pG) throw YG.leave(), new DOMException("the join was left", "AbortError");
            gU(YG), null === (hG = ay) || void 0 === hG || hG.newGame();
            const VG = function(GG) {
              var bG, ZG;
              const {
                session: wG
              } = GG, SG = void 0 === wG ? GG.joinOptions.lobbyName : wG.lobbyName;
              return {
                endpoint: GG.endpoint,
                game: null !== (bG = null === wG || void 0 === wG ? void 0 : wG.gameNameWithVariation) && void 0 !== bG ? bG : GG.roomName,
                lobby: String(null !== SG && void 0 !== SG ? SG : null),
                postCookies: null !== (ZG = GG.postCookies) && void 0 !== ZG ? ZG : null
              }
            }(GG);
            rk.set(YG, VG), GS(VG);
            const fG = performance.now(),
              QG = {
                conn: YG.conn,
                rejoin: LG,
                game: null !== (dG = null === (JG = GG.session) || void 0 === JG ? void 0 : JG.gameNameWithVariation) && void 0 !== dG ? dG : "",
                joinedAt: fG,
                rejoinedAt: UG ? fG : null,
                overflow: null
              };
            Wk = QG,
              function(GG, bG) {
                JY();
                const ZG = {
                  endpoint: bG,
                  roomId: GG.seat.room.roomId,
                  heldConn: 0,
                  dropCode: 0,
                  pendingHold: null,
                  resume: new uZ({
                    reconnect: (GG, bG, wG) => async function(GG, bG, ZG, wG) {
                      const {
                        roomId: SG,
                        roomToken: LG
                      } = zY(GG, bG), yG = hy;
                      if (null === yG || yG.isStopped || iU) throw new Error("no core is running to resume the game on");
                      const {
                        resumeRoom: kG
                      } = await AU(WU(), ZG), UG = {
                        ...ZY,
                        attachSocket: bG => mk !== GG || 0 === GG.heldConn ? (bG.close(), null) : YY(bG, GG.endpoint, !0)
                      };
                      return kG(UG, GG.endpoint, SG, LG, {
                        signal: ZG,
                        onAttached: wG
                      })
                    }(ZG, GG, bG, wG),
                    releaseSeat: GG => {
                      !async function(GG, bG) {
                        const {
                          roomId: ZG,
                          roomToken: wG
                        } = zY(GG, bG);
                        try {
                          const {
                            leaveHeldSeat: bG
                          } = await WU();
                          await bG(GG.endpoint, ZG, wG)
                        } catch (SG) {
                          console.warn(`${qL} the held seat of a game left while it reconnected couldn't be released`, SG)
                        }
                      }(ZG, GG)
                    },
                    isLive: () => mk === ZG && null !== Wk && !iU,
                    Tm: GG => {
                      jk = GG, dY()
                    },
                    onReconnected: GG => {
                      ! function(GG) {
                        const bG = Jk;
                        if (null !== bG && bG !== GG) {
                          const ZG = rk.get(bG);
                          void 0 !== ZG && rk.set(GG, ZG), hU === bG && (hU = GG), bG.detach()
                        }
                        gU(GG)
                      }(GG)
                    },
                    onGaveUp: (GG, bG) => {
                      ! function(GG, bG, ZG) {
                        var wG, SG;
                        console.warn(`${qL} gave up reconnecting (${ZG.reason}, ${ZG.attempts} attempts)`, ZG.lastError), (0, aZ.reportReconnectGaveUp)(ZG, Ey);
                        const LG = null !== (wG = null === (SG = Wk) || void 0 === SG ? void 0 : SG.rejoin) && void 0 !== wG ? wG : null;
                        rY(GG, "gaveUp"), RU();
                        const yG = {
                          code: GG.dropCode,
                          name: null,
                          reason: Gy,
                          canReconnect: !bG,
                          automaticallyReconnect: !1,
                          requiresRefresh: !1
                        };
                        bY(yG, bG ? null : LG, !1, {
                          reasonKey: by,
                          canPlayAgain: bG
                        })
                      }(ZG, GG, bG)
                    }
                  })
                };
                mk = ZG, null !== Ik && Ik.conn === GG.conn && ZG.resume.onInitialInfo(Ik)
              }(YG, GG.endpoint), performance.mark(HL), (0, KG.p)("wasm_joined", fG), setTimeout((() => {
                Jk === YG && (0, KG.f)()
              }), 0), aU(), console.info(`${qL} joined ${GG.roomName} as ${YG.seat.sessionId} at ${Math.round(performance.now())} ms`);
            const rG = Mk;
            Mk = null, null !== rG && tU(QG, rG.mask, rG.frames);
            const zG = Rk.get(YG.conn);
            return Rk.clear(), void 0 !== zG && (gU(null), GY(YG.conn, zG.code, zG.reason)), YG
          } finally {
            var rG;
            null === SG || void 0 === SG || SG.removeEventListener("abort", QG), zk === pG && nU(Jk, null), (null === (rG = Ak) || void 0 === rG ? void 0 : rG.join) === pG && (Ak = null)
          }
        }(GG.target, {
          signal: kG,
          rejoin: SG(GG.target),
          early: YG,
          pageReady: yG
        });
        return fG = !0, {
          kind: "joined",
          game: VG
        }
      } catch (WG) {
        if (WG instanceof DOMException && "AbortError" === WG.name || UG()) return {
          kind: "RZ"
        };
        if (iU) return {
          kind: "stopped"
        };
        if (gk && (gk = !1, await LG().catch((GG => {
            console.warn(`${qL} the cached traffic code could not be dropped`, GG)
          }))), null === await uy) return {
          kind: "stopped"
        };
        if (WG instanceof xG.e) return ZG(WG, performance.now() - QG), {
          kind: "failed",
          error: WG,
          reloading: !1
        };
        if (WG instanceof gG.c && WG.code === wG.b.wasmClientNotAllowed.code && zU) return FY("this server refused the wasm client to this account", "refused"), {
          kind: "failed",
          error: WG,
          reloading: !0
        };
        const GG = WG instanceof gG.c && WG.code === wG.b.outdatedVersion.code,
          bG = () => null === Jk,
          SG = await mV({
            site: aZ.JOIN_SITE,
            error: WG,
            outdated: GG
          }, (() => {
            ZG(WG, performance.now() - QG)
          }), {
            stillWanted: bG
          });
        return {
          kind: "failed",
          error: WG,
          reloading: SG
        }
      } finally {
        var CG;
        fG || pG.end(), oS.e.releaseHold(VG);
        const GG = null === (CG = YG) || void 0 === CG ? void 0 : CG.release();
        GG && (0, aZ.reportUnusedSeat)(GG, Ey)
      }
    }

    function PU(GG, bG) {
      return GG.stack = bG.stack, GG
    }

    function MU(GG) {
      return GG.session ? (0, aG.o)(zy, GG.session.gameNameWithVariation) : Promise.resolve()
    }

    function AU(GG, bG) {
      return (0, Ib.p)(bG), new Promise(((ZG, wG) => {
        const SG = () => {
          wG((0, Ib.h)(bG))
        };
        bG.addEventListener("abort", SG, {
          once: !0
        }), GG.then((GG => {
          bG.removeEventListener("abort", SG), ZG(GG)
        }), (GG => {
          bG.removeEventListener("abort", SG), wG(GG)
        }))
      }))
    }

    function sU() {
      qU(null)
    }

    function qU(GG) {
      var bG, ZG, wG;
      (function() {
        const GG = mk;
        null !== GG && rY(GG, "left")
      }(), null === my || my.left) || (my.left = !0, null === (wG = (0, aG.f)()) || void 0 === wG || wG.socketLeft(), (0, fG.q)({
        websocketUrl: null
      }));
      zk && (0, Ib.j)(zk, new DOMException("the join was left", "AbortError")), RU(null !== GG), null === (bG = Dy) || void 0 === bG || bG.leave();
      const SG = Jk;
      null !== GG && oS.e.setGame(GG.game), nU(null, null !== (ZG = null === GG || void 0 === GG ? void 0 : GG.controller) && void 0 !== ZG ? ZG : null), null === SG || void 0 === SG || SG.leave(), eU(0), (0, ib.h)()
    }

    function nU(GG, bG) {
      Jk = GG, zk = bG, null === Jk && null === zk && oS.e.setGame(void 0)
    }

    function gU(GG) {
      nU(GG, zk)
    }

    function eU(GG) {
      const bG = hy;
      return null !== ky && !iU && null !== bG && !bG.isStopped && (!!ky(gG.h, 0, (0, gG.t)(GG)) && (Vk = !0, 0 === GG || kk || BY(bG, !1, "all"), !0))
    }

    function RU() {
      var GG, bG;
      arguments.length > 0 && void 0 !== arguments[0] && arguments[0] || (0, AZ.g)();
      const ZG = null !== (GG = null === (bG = Wk) || void 0 === bG ? void 0 : bG.overflow) && void 0 !== GG ? GG : null;
      Wk = null, null !== ZG && (0, aZ.reportEventOverflow)(ZG, Ey)
    }

    function TU() {
      null !== Jk || null !== zk ? sU() : VY()
    }

    function HU(GG, bG) {
      console.warn(`${qL} the event buffer refused records in ${bG} frames (categories ${GG})`), iU || (null !== Wk ? tU(Wk, GG, bG) : null !== zk && function(GG, bG, ZG) {
        var wG;
        const SG = function(GG, bG) {
          return null === GG ? "drop" : GG.activated ? "keep" : 0 !== (bG & Ob.v.NetSession) ? "fail" : "drop"
        }((null === (wG = Ak) || void 0 === wG ? void 0 : wG.join) === GG ? Ak : null, bG);
        "keep" === SG ? Mk = {
          mask: bG,
          frames: ZG
        } : "fail" === SG && (0, Ib.j)(GG, new Error("the join's net session was lost to an event overflow"))
      }(zk, GG, bG))
    }

    function tU(GG, bG, ZG) {
      const wG = GG.overflow ??= {
        frames: 0,
        acks: 0,
        mask: 0,
        outcome: null
      };
      wG.frames += ZG, wG.acks++, wG.mask |= bG;
      const SG = function(GG, bG, ZG) {
        if (0 === (GG & Ob.v.NetSession)) return "none";
        const wG = null !== bG.rejoinedAt && ZG - bG.rejoinedAt < Tw;
        return null === bG.rejoin || wG ? "fail" : "rejoin"
      }(bG, GG, performance.now());
      "none" !== SG && queueMicrotask((() => {
        if (Wk !== GG) return;
        const bG = "rejoin" === SG && performance.now() - sk >= nG.g;
        wG.outcome = bG ? "rejoined" : "failed", bY(function(GG, bG) {
          return {
            code: 0,
            name: "eventOverflow",
            reason: "Your game fell behind the server.",
            canReconnect: GG,
            automaticallyReconnect: bG,
            requiresRefresh: !1
          }
        }(null !== GG.rejoin, bG), GG.rejoin, bG), sU(), bG && (Pk = performance.now())
      }))
    }

    function DU() {
      zU && function(GG, bG) {
        let {
          mesh: ZG,
          worldgen: wG,
          modelPool: SG
        } = GG;
        "landingPage" === bG ? (null === ZG || void 0 === ZG || ZG.stopWorkers(), null === wG || void 0 === wG || wG.stopWorker(), null === SG || void 0 === SG || SG.stopWorkers()) : ((0, Gb.l)(bG) || "inGame" === bG) && (null === ZG || void 0 === ZG || ZG.restartWorkers(), null === SG || void 0 === SG || SG.startWorkers())
      }({
        mesh: ay,
        worldgen: Fy,
        modelPool: ny
      }, Gb.e.get("gameState"))
    }

    function NU(GG) {
      EU = GG, oU && OU(oU, GG)
    }

    function OU(GG, bG) {
      GG.style.visibility = bG ? "visible" : "hidden"
    }

    function xU(GG) {
      var bG;
      const ZG = GG.roomName,
        wG = null !== (bG = GG.joinOptions.lobbyName) && void 0 !== bG ? bG : null;
      return () => {
        lU(ZG, wG)
      }
    }

    function BU() {
      return ZG.e(277).then((() => ZG(51425))).then((GG => {
        let {
          invalidateGuestTrafficCode: bG
        } = GG;
        return bG()
      })).catch((GG => {
        console.warn(`${qL} the cached traffic code could not be dropped`, GG)
      }))
    }

    function GY(GG, bG, ZG) {
      var SG, LG;
      let yG = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (iU) return;
      if ((null === (SG = Wk) || void 0 === SG ? void 0 : SG.conn) !== GG) return void(null !== zk && Rk.set(GG, {
        code: bG,
        reason: ZG
      }));
      const {
        rejoin: kG,
        game: UG,
        joinedAt: YG
      } = Wk;
      RU(), JY();
      const VG = (0, nG.k)(bG, (0, tw.e)(GG));
      if (console.info(`${qL} the game's connection closed with code ${bG} (${null!==(LG=VG.name)&&void 0!==LG?LG:"unrecognised"})`), bG === wG.b.gameOrPluginKick.code || yG || (0, aZ.reportDisconnect)(VG, Ey, {
          closeReason: ZG,
          sinceJoinedMs: performance.now() - YG,
          game: UG
        }), VG.requiresRefresh) {
        const GG = "outdatedVersion" === VG.name,
          ZG = new Error(`the game's connection closed with code ${bG}`),
          wG = () => null === Wk && null === zk;
        return void mV({
          site: aZ.JOIN_SITE,
          error: ZG,
          outdated: GG
        }, (() => {
          wG() && bY(VG, null, !1)
        }), {
          stillWanted: wG
        })
      }
      const pG = VG.canReconnect ? kG : null,
        fG = null !== pG && VG.automaticallyReconnect && performance.now() - sk >= nG.g;
      bY(VG, pG, fG)
    }

    function bY(GG, bG, ZG) {
      var wG;
      let SG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
        reasonKey: null,
        canPlayAgain: !1
      };
      if (XU) return;
      oS.e.unwantedLeave(ZG && null !== bG && 0 === nk.size), null === (wG = qk) || void 0 === wG || wG.abort();
      const LG = new AbortController;
      qk = LG;
      const yG = null === bG ? null : () => {
        LG.signal.aborted || (LG.abort(), bG())
      };
      if (ZG && null !== yG) {
        sk = performance.now();
        const GG = setTimeout(yG, nG.c);
        LG.signal.addEventListener("abort", (() => {
          clearTimeout(GG)
        }))
      }
      const kG = {
        code: GG.code,
        name: GG.name,
        reason: GG.reason,
        reasonKey: SG.reasonKey,
        reconnect: yG,
        reconnecting: ZG,
        requiresRefresh: GG.requiresRefresh,
        canPlayAgain: SG.canPlayAgain
      };
      if (nk.size > 0)
        for (const YG of [...nk]) try {
          YG(kG)
        } catch (UG) {
          console.error(`${qL} an unwanted-leave listener threw`, UG)
        } else Mw((0, lw.f)(GG, null !== yG, ZG), LG.signal).then((bG => {
          bG && (null !== yG ? yG() : GG.requiresRefresh && (0, BG.i)())
        }))
    }
    const ZY = {
      attachSocket: GG => YY(GG),
      onConnection: GG => (Tk.add(GG), () => {
        Tk.delete(GG)
      }),
      sendRaw: (GG, bG) => {
        const ZG = my;
        return null !== ZG && ZG.conn === GG && VV(ZG, bG)
      },
      leaveRoom: eU,
      closeSocket: GG => {
        var bG;
        (null === (bG = my) || void 0 === bG ? void 0 : bG.conn) === GG && VY()
      },
      flushNet: pY
    };

    function wY(GG) {
      var bG;
      let {
        aux: ZG,
        payload: wG
      } = GG;
      null === (bG = hy) || void 0 === bG || bG.queueOptions(ZG, wG)
    }

    function SY(GG, bG) {
      wY(function(GG, bG) {
        return jS = GG ? {
          preventMovement: bG
        } : null, GG ? PS(bG) : {
          aux: Nb.ac.AdEnd,
          payload: lS
        }
      }(GG, bG))
    }

    function LY(GG) {
      var bG;
      Kk = GG, null === (bG = hy) || void 0 === bG || bG.setUiPrefs(GG)
    }

    function yY(GG, bG) {
      zy.setMaster(GG, bG)
    }

    function kY(GG) {
      var bG;
      hk = GG, null === (bG = hy) || void 0 === bG || bG.setEnvPrefs(GG)
    }

    function UY(GG) {
      var bG;
      dk = GG, null === (bG = hy) || void 0 === bG || bG.setLookPrefs(GG)
    }

    function YY(GG) {
      var bG;
      let ZG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new URL(GG.url).origin,
        wG = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      if (GG.readyState === WebSocket.CLOSING || GG.readyState === WebSocket.CLOSED) return console.warn(`${qL} a closing or closed socket can't be attached`), null;
      const SG = hy;
      if (!SG || SG.isStopped) return console.warn(`${qL} no core is running to attach a socket to`), GG.close(), null;
      if (null === (0, aG.f)()) return console.warn(`${qL} the game has not started to attach a socket to`), GG.close(), null;
      if (Gk > Nb.B) return console.warn(`${qL} this core has attached all the sockets it can; reload to play on`), GG.close(), null;
      if (Vk && !kk && (BY(SG, !1, "all"), SG.isStopped || iU)) return GG.close(), null;
      VY();
      const LG = Gk++;
      if (!uY(SG, "open", LG, wG ? Nb.$b.Resume : 0)) return GG.close(), null;
      wG || ub.c.reset(), Ak = null === zk ? null : {
        join: zk,
        conn: LG,
        activated: !1
      }, GG.binaryType = "arraybuffer";
      const yG = new iZ.d((() => {
          ! function(GG, bG) {
            if (my !== bG || GG.isStopped || null === KY(bG, xL)) return;
            bG.detach(), my = null, QY(GG, bG, xL, "", !0), bG.ws.close()
          }(SG, kG)
        })),
        kG = {
          ws: GG,
          conn: LG,
          pending: [],
          pendingBytes: 0,
          left: !1,
          resume: wG,
          token: null,
          detach: () => {
            yG.dispose(), GG.removeEventListener("message", UG), GG.removeEventListener("open", YG), GG.removeEventListener("close", VG)
          }
        },
        UG = GG => {
          if (GG.data instanceof ArrayBuffer) {
            var bG;
            const ZG = new Uint8Array(GG.data);
            yG.heard(), kG.token = null !== (bG = (0, CZ.b)(ZG)) && void 0 !== bG ? bG : kG.token,
              function(GG, bG, ZG) {
                EV(GG, (() => {
                  GG.rings.net.writeFrame(bG, ZG) || GG.crash(fZ.v, `a socket frame of ${ZG.byteLength} bytes did not fit the net-in ring`)
                }));
                const wG = GG.rings.net.cursor >= OL;
                !iV() && (wG || GG.netWrittenSinceFrame >= NL) && BY(GG, !1, document.hidden ? "all" : "budget");
                WV(GG)
              }(SG, LG, ZG)
          }
        },
        YG = () => {
          wG || (0, KG.p)("wasm_socket_open", performance.now());
          for (const bG of kG.pending.splice(0)) GG.send(bG);
          kG.pendingBytes = 0
        },
        VG = GG => {
          if (my === kG && SG.rings.net.cursor > 0 && BY(SG, !1, "all"), my === kG) {
            if (kG.detach(), my = null, QY(SG, kG, GG.code, GG.reason) || fY(SG, kG)) return;
            uY(SG, "close", LG), hY(LG, kG.left), GY(LG, GG.code, GG.reason)
          }
        };
      return GG.addEventListener("message", UG), GG.addEventListener("open", YG), GG.addEventListener("close", VG), my = kG, null === (bG = (0, aG.f)()) || void 0 === bG || bG.socketAttached(LG), (0, fG.q)({
        websocketUrl: ZG
      }), LG
    }

    function VY() {
      const GG = my;
      if (!GG) return;
      const bG = hy,
        ZG = GG.resume;
      ZG && (pY(), my !== GG) || (my = null, GG.detach(), GG.ws.close(), null !== bG && (fY(bG, GG) || ZG && QY(bG, GG, BL)) || (null !== bG && uY(bG, "close", GG.conn), hY(GG.conn, GG.left)))
    }

    function pY() {
      const GG = hy;
      null !== GG && !GG.isStopped && !iU && !kk && GG.rings.net.cursor > 0 && BY(GG, !1, "all")
    }

    function fY(GG, bG) {
      var ZG;
      if (!bG.resume) return !1;
      const wG = mk;
      return null !== wG && null !== bG.token && "" !== bG.token && (wG.pendingHold = {
        conn: bG.conn,
        token: `${wG.roomId}:${bG.token}`
      }), uY(GG, "close", bG.conn), null === (ZG = (0, aG.f)()) || void 0 === ZG || ZG.socketDetached(bG.conn), !0
    }

    function QY(GG, bG, ZG) {
      let wG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "",
        SG = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
      const LG = KY(bG, ZG);
      if (null === LG) return !1;
      const {
        Ik: yG,
        token: kG,
        game: UG,
        joinedAt: YG
      } = LG;
      if (!uY(GG, "close", bG.conn, Nb.I.Held)) return !0;
      console.warn(`${qL} the game's connection ${SG?"went silent":`dropped with code ${ZG}`}, holding it`);
      const VG = {
        closeReason: wG,
        sinceJoinedMs: performance.now() - YG,
        game: UG
      };
      return (0, aZ.reportDisconnect)((0, nG.k)(ZG), Ey, VG, SG ? "silent" : void 0), yG.heldConn = bG.conn, yG.dropCode = ZG, yG.pendingHold = {
        conn: bG.conn,
        token: `${yG.roomId}:${kG}`
      }, kk || BY(GG, !1, "all"), !0
    }

    function KY(GG, bG) {
      const ZG = mk,
        SG = Wk,
        LG = GG.token;
      return null === ZG || null === SG || iU || GG.left || SG.conn !== GG.conn || null === LG || "" === LG ? null : (0, wG.f)(bG) && ZG.resume.canHoldSeat() ? {
        Ik: ZG,
        token: LG,
        game: SG.game,
        joinedAt: SG.joinedAt
      } : null
    }

    function hY(GG, bG) {
      var ZG;
      null === (ZG = (0, aG.f)()) || void 0 === ZG || ZG.closeGame(GG), (0, cS.e)().close(GG), bG || (0, fG.q)({
        websocketUrl: null
      })
    }

    function dY() {
      const GG = jk;
      if (null === GG) return;
      const bG = (0, aG.f)();
      iU || null === bG || bG.Tm(GG) ? jk = null : performance.now() - pk.pause >= wy && (pk.pause = performance.now(), console.warn(`${qL} the cmd ring had no room for SetPaused(${GG}): written before the next frame`))
    }

    function JY() {
      const GG = mk;
      mk = null, null === GG || void 0 === GG || GG.resume.dispose()
    }

    function rY(GG, bG) {
      var ZG, wG;
      const {
        heldConn: SG
      } = GG, LG = GG.resume.resumingConn;
      GG.heldConn = 0, GG.pendingHold = null, mk === GG && (mk = null), "left" === bG ? GG.resume.leave() : GG.resume.dispose(), 0 === lk || (null === (ZG = my) || void 0 === ZG ? void 0 : ZG.conn) !== lk || "left" === bG && (null === (wG = Jk) || void 0 === wG ? void 0 : wG.conn) === lk || XY(lk), "gaveUp" === bG && 0 !== LG && XY(LG), 0 !== SG && "refused" !== bG && (console.info(`${qL} the game held through its drop ${"left"===bG?"was left":"is given up"}`), null === hy || hy.isStopped || uY(hy, "close", SG), hY(SG, !1))
    }

    function zY(GG, bG) {
      const ZG = bG.indexOf(":");
      return {
        roomId: ZG < 0 ? GG.roomId : bG.slice(0, ZG),
        roomToken: bG.slice(ZG + 1)
      }
    }

    function EY(GG) {
      (0, QZ.logClientMeasurement)("join_preload", GG, {
        client: "wasm"
      })
    }

    function oY(GG) {
      var bG;
      Ik = GG;
      const ZG = GG.replayOffer && ck !== GG.conn;
      ak = ZG ? GG.conn : 0, Fk = ZG || vk.has(GG.conn) ? 0 : GG.conn, XG.admitted(), GG.conn === lk && (lk = 0);
      const wG = mk;
      null !== wG && (null === (bG = Wk) || void 0 === bG ? void 0 : bG.conn) === GG.conn && wG.resume.onInitialInfo(GG)
    }

    function XY(GG) {
      var bG;
      const ZG = my;
      (null === ZG || void 0 === ZG ? void 0 : ZG.conn) === GG && (ZG.left = !0, null === (bG = (0, aG.f)()) || void 0 === bG || bG.socketLeft(), (0, fG.q)({
        websocketUrl: null
      }), eU(GG) ? setTimeout((() => {
        my === ZG && VY()
      }), gG.g) : VY())
    }

    function uY(GG, bG, ZG) {
      let wG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        SG = !1;
      return EV(GG, (() => {
        const {
          net: LG
        } = GG.rings;
        SG = "open" === bG ? LG.writeOpen(ZG, wG) : LG.writeClose(ZG, wG), SG || GG.crash(fZ.v, `a socket ${bG} did not fit the net-in ring`)
      })), SG
    }

    function iY(GG, bG, ZG) {
      let wG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      if (IY()) return (0, aZ.reportUnsupportedFallback)(GG, bG, ZG, wG), void FY(`the wasm client can't run here (${ZG}; ${bG})`, bG);
      (0, aZ.showUnsupported)(GG, "unsupported", ZG, wG)
    }
    const CY = 1500;

    function WY(GG, bG) {
      const ZG = 1 === GG.missing.length && GG.missing[0] === VZ.c,
        wG = bG ? "blockedAfterLoss" : ZG ? "noContext" : "unsupported";
      return {
        decline: wG,
        detail: `No WebGPU or WebGL2, and WebGL1 lacks ${GG.missing.join(", ")}`,
        details: {
          missing: GG.missing.join(",")
        },
        retries: "unsupported" !== wG && IY()
      }
    }

    function mY(GG) {
      console.warn(`${qL} ${GG}: reloading once more onto the wasm client`), (0, vS.m)(), (0, aZ.flushCrashReports)(BG.e).then(BG.i, BG.i)
    }

    function IY() {
      return zU && "wasm" !== (0, ob.f)(window.location.search)
    }

    function FY(GG, bG) {
      console.warn(`${qL} ${GG}: reloading on the JS client`), null !== bG && (0, ob.z)(bG), (0, ob.y)(null === bG ? "reloadOntoJs" : "decline");
      const ZG = () => {
        (0, BG.h)(ob.E)
      };
      (0, aZ.flushCrashReports)(BG.e).then(ZG, ZG)
    }

    function vY(GG, bG, ZG, wG) {
      return Nk(GG, bG, ZG, wG)
    }

    function aY() {
      null === Bk || null === hy || hy.isStopped || iU || null !== ey || null === ky || (ey = Bk(ky, jY, PY().follow))
    }

    function cY() {
      var GG, bG, ZG;
      return null !== (GG = null === (bG = Jy) || void 0 === bG || null === (ZG = bG.textures) || void 0 === ZG ? void 0 : ZG.files()) && void 0 !== GG ? GG : null
    }

    function lY(GG) {
      PY().follow((bG => {
        null !== bG && Promise.all([Promise.all([ZG.e(204), ZG.e(46)]).then((() => ZG(51447))), (0, vS.N)()]).then((GG => {
          let [{
            followPagePackFiles: ZG
          }, wG] = GG;
          const SG = null === wG || (0, VZ.q)(wG) ? "webgl" : wG.backend;
          ZG(bG, ES.e, SG, (GG => {
            ES.e.setPageFiles(GG)
          }), jY)
        }), (bG => {
          console.warn(`${qL} the texture pack's files didn't load: the previews draw the shipped ones until the next opens`, bG), GG()
        }))
      }))
    }

    function jY(GG, bG) {
      console.warn(`${qL} ${GG}`, bG)
    }

    function PY() {
      return dy ??= new nS({
        load: GG => Promise.all([ZG.e(204), ZG.e(55)]).then((() => ZG(51453))).then((bG => {
          let {
            startPageTexturePackFeed: ZG
          } = bG;
          return ZG(jY, GG)
        })),
        store: gZ.e,
        NQ: GG => {
          uy.then((() => {
            (0, aZ.reportTexturePackFeedLoadFailure)(GG, Ey)
          }))
        }
      }), dy
    }
    const MY = GG => PY().follow(GG);

    function AY() {
      return PY().loaded()
    }
    const sY = function(GG, bG, ZG) {
        let wG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => performance.now(),
          SG = 0;
        return async function(LG, yG) {
          let kG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => !0;
          const UG = ++SG,
            YG = wG() + bG,
            VG = await
          function(GG, bG) {
            let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {};
            return new Promise((wG => {
              const SG = setTimeout((() => {
                wG(null), GG.then((GG => {
                  null !== GG && (GG.joinedWithout(), ZG(GG))
                }))
              }), bG);
              GG.then((GG => {
                clearTimeout(SG), wG(GG)
              }))
            }))
          }(GG(LG), bG, (GG => {
            UG === SG && kG() && yG(GG, wG() + bG).catch((GG => {
              ZG("the texture pack step after the join failed", GG)
            }))
          }));
          return null === VG ? null : yG(VG, YG)
        }
      }((GG => (0, pb.h)(GG) ? PY().request() : PY().forJoin()), qS.e, jY),
      qY = function(GG, bG) {
        let ZG = !1;
        return {
          setGamePackConfirm: GG => {
            ZG = null !== GG, bG(GG)
          },
          packStep: (bG, wG, SG) => GG(bG, wG, (() => ZG && SG()))
        }
      }(sY, (GG => {
        PY().setGamePackConfirm(GG)
      }));

    function nY(GG) {
      qY.setGamePackConfirm(GG)
    }

    function gY() {
      if (iU || null !== SU || null === GU || null === wU) return;
      const {
        backend: GG,
        canvas: bG,
        fallbackReason: ZG,
        adapterVendor: wG
      } = wU, SG = GU;
      GU = null;
      try {
        SU = SG({
          backend: GG,
          canvas: bG,
          fallbackReason: ZG,
          adapterVendor: wG,
          joinedGame: () => iU ? null : Jk,
          canSend: () => !iU && null !== Jk && Jk.conn === Fk,
          inGame: RY,
          shaderPackReach: () => {
            var GG, bG;
            return null !== (GG = null === (bG = Dy) || void 0 === bG ? void 0 : bG.reachInJoinedGame()) && void 0 !== GG ? GG : null
          },
          Fh: () => Ry,
          msaa: () => ZU > 1,
          writeCmd: (GG, bG, ZG) => null !== ky && ky(GG, bG, ZG),
          takeFailedMeshJobs: () => {
            var GG, bG;
            return null !== (GG = null === (bG = ay) || void 0 === bG ? void 0 : bG.takeFailedMeshJobs()) && void 0 !== GG ? GG : 0
          },
          readLoadCounts: GG => {
            var bG, ZG;
            return null !== (bG = null === (ZG = hy) || void 0 === ZG ? void 0 : ZG.readLoadCounts(GG)) && void 0 !== bG && bG
          },
          mainStalled: (GG, bG, ZG) => {
            (0, aZ.reportMainStall)(GG, bG, ZG, Ey)
          }
        })
      } catch (LG) {
        console.error(`${qL} the frame telemetry didn't start`, LG)
      }
    }

    function eY(GG, bG) {
      try {
        var ZG, wG, SG;
        const LG = Hk && null !== (ZG = null === (wG = hy) || void 0 === wG || null === (SG = wG.lastHeader) || void 0 === SG ? void 0 : SG.renderPending) && void 0 !== ZG ? ZG : 0;
        (0, Qw.e)(bG, GG, RY() && !(null !== jS), LG)
      } catch (LG) {
        (0, Qw.u)(), console.error(`${qL} the quality steps stopped`, LG)
      }
    }

    function RY() {
      return null !== Jk && hU === Jk && !iU
    }

    function TY(GG) {
      const bG = SU;
      SU = null;
      try {
        null === bG || void 0 === bG || bG.stop()
      } catch {}
      console.error(`${qL} the frame telemetry threw: it stops`, GG)
    }

    function HY(GG) {
      var bG, ZG, wG, SG;
      if ((0, cS.e)().fire(GG), "message" === GG.type) {
        if (Uk++, GG.vV === Nb.Tc.ERROR && null !== zk) {
          var LG;
          const {
            text: bG,
            dropsCache: ZG
          } = (0, nG.s)((new TextDecoder).decode(GG.payload));
          gk ||= ZG, (null === (LG = Ak) || void 0 === LG ? void 0 : LG.conn) === GG.conn && (ek = bG)
        } else if (GG.vV === Ob.jc.ResumeComplete) {
          var yG;
          ck = GG.conn, GG.conn === ak && (ak = 0, Fk = vk.has(GG.conn) ? 0 : GG.conn), null === (yG = mk) || void 0 === yG || yG.resume.onResumeComplete(GG.conn)
        }
        return
      }
      GG.phase === Nb.M.Left ? Yk = GG.conn : GG.phase === Nb.M.Activated && (null === (bG = Ak) || void 0 === bG ? void 0 : bG.conn) === GG.conn ? Ak.activated = !0 : GG.phase === Nb.M.Resumed ? function(GG) {
        var bG, ZG;
        lk = GG;
        const wG = mk;
        if (null === wG || 0 === wG.heldConn || (null === (bG = my) || void 0 === bG ? void 0 : bG.conn) !== GG || !my.resume || null === Wk) return;
        console.info(`${qL} the game resumed on conn ${GG}, waiting for its InitialInfo`);
        const SG = wG.heldConn;
        wG.heldConn = 0, my.resume = !1, Wk.conn = GG, (null === (ZG = ik) || void 0 === ZG ? void 0 : ZG.conn) === SG && (ik = {
          conn: GG,
          info: ik.info
        }), ub.c.apply({
          shopInfo: null,
          _shopVersion: fb.b
        })
      }(GG.conn) : GG.phase === Nb.M.Held ? function(GG) {
        var bG;
        const ZG = mk,
          wG = null !== (bG = null === ZG || void 0 === ZG ? void 0 : ZG.pendingHold) && void 0 !== bG ? bG : null;
        if (null !== ZG && null !== wG && wG.conn === GG) return ZG.pendingHold = null, ZG.heldConn = GG, lk = 0, console.warn(`${qL} the core holds the game, reconnecting`), void ZG.resume.onDropped(wG.token);
        if (GG === lk) {
          lk = 0;
          const bG = hy;
          null === bG || bG.isStopped || (console.info(`${qL} the core held again a resumed game the shell ended before its InitialInfo: closing it again`), uY(bG, "close", GG))
        }
      }(GG.conn) : GG.phase === Nb.M.Closed && (null === (ZG = mk) || void 0 === ZG || null === (wG = ZG.pendingHold) || void 0 === wG ? void 0 : wG.conn) === GG.conn && (mk.heldConn === GG.conn ? function(GG) {
        const bG = GG.heldConn,
          ZG = GG.dropCode;
        rY(GG, "refused"), console.info(`${qL} the core didn't hold the game through its drop: it hadn't started`), queueMicrotask((() => {
          hY(bG, !1), GY(bG, ZG, "", !0)
        }))
      }(mk) : mk.pendingHold = null), GG.phase !== Nb.M.Held && GG.phase !== Nb.M.Left && GG.phase !== Nb.M.Closed || (vk.add(GG.conn), GG.conn === Fk && (Fk = 0));
      const kG = Object.keys(Nb.M).find((bG => Nb.M[bG] === GG.phase)),
        UG = 0 === GG.code ? "" : ` (code ${GG.code})`;
      console.info(`${qL} conn ${GG.conn}: ${null!==kG&&void 0!==kG?kG:GG.phase}${UG}, ${Uk} raw messages so far`), (null === (SG = Jk) || void 0 === SG ? void 0 : SG.conn) !== GG.conn || GG.phase !== Nb.M.Left && GG.phase !== Nb.M.Closed || gU(null), uk !== GG.conn || GG.phase !== Nb.M.Left && GG.phase !== Nb.M.Closed || (uk = null, null === Jk && null === zk && oS.e.setGame(void 0));
      for (const VG of [...Tk]) try {
        VG(GG.conn, GG.phase, GG.code)
      } catch (YG) {
        (0, xb.n)(YG, `${qL} a connection listener threw`)
      }
    }
    const tY = 9e4,
      DY = 1e3;

    function NY() {
      (0, vS.m)(), null === Jk && null === zk || (0, eZ.f)(), queueMicrotask((() => {
        try {
          pV()
        } catch (GG) {
          console.warn(`${qL} stopping before the reload threw`, GG)
        }(0, aZ.flushCrashReports)(BG.e).then(BG.i, BG.i)
      }))
    }

    function OY() {
      const GG = hy;
      null === GG || GG.isStopped || null === my || kk || !GG.hasPendingCommands() || BY(GG, !1, "budget")
    }

    function xY(GG) {
      var bG;
      const ZG = Jk;
      GG.persisted || null === ZG || (null === (bG = my) || void 0 === bG ? void 0 : bG.conn) !== ZG.conn || my.left || ZG.leave()
    }

    function BY(GG, bG, wG) {
      let SG = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const LG = kk;
      kk = !0;
      try {
        const LG = GG.rings.net.cursor >= OL;
        LG && "all" !== wG && !document.hidden && QV("backlog", `a shown tab's net-in is ${GG.rings.net.cursor} bytes behind: one frame reads it all`);
        return function(GG, bG, wG, SG) {
          var LG, yG, kG, UG;
          if (iU) return !1;
          if (EV(GG, bV), iU || GG.isStopped) return !1;
          UV() && xy("modelsIn");
          dY(), bk = performance.now(), Yk = null, Vk = !1, (0, vG.K)(), null === (LG = Ay) || void 0 === LG || LG.beforeFrame(), mw(bk, GG), (0, vG.A)(bk, ZV), yk = !0;
          const YG = bG && kV();
          let VG;
          try {
            VG = GG.frame(bk, YG, wG)
          } finally {
            yk = !1
          }
          if (!VG) return !1;
          bU.observe(null !== (yG = null === (kG = GG.lastHeader) || void 0 === kG ? void 0 : kG.chunksCancelled) && void 0 !== yG ? yG : 0);
          const pG = GG.lastFrameKind,
            fG = (0, Pb.e)(pG);
          (function(GG) {
            null !== wL && wL.afterFrame(performance.now(), GG)
          })(fG), null === (UG = LU) || void 0 === UG || UG.frame(GG, bk, pG), bG && (dU = fG);
          fG && (0, cb.c)(bk);
          if (null !== SU) try {
            SU.frameRan(GG, bk, performance.now(), pG)
          } catch (hG) {
            TY(hG)
          }
          "drawn" === pG && yV() && function() {
            for (const GG of [...IS]) GG()
          }();
          GG.forEachNetOut(YV);
          const QG = my;
          null !== Yk && (null === QG || void 0 === QG ? void 0 : QG.conn) === Yk && VV(QG, gG.i);
          LV(GG),
            function(GG) {
              const bG = 0 !== (GG.headerWord(Ob.K.LoadSteps) & Ob.U.JoinPreload);
              bG !== Xk && (Xk = bG, (0, aZ.setCrashAdPreload)(bG), (0, AZ.K)())
            }(GG), bG && function(GG) {
              var bG, wG, SG;
              if (null === Jk || !kV()) return;
              const LG = GG.headerWord(Ob.K.LoadSteps);
              null === KU || hU === Jk && !KU.frame(bk, 0 !== (LG & Ob.X.TerrainDrawn)) || (KU = null);
              if (0 === (LG & Ob.U.PlayerBound)) return;
              const yG = GG.lastHeader,
                kG = !Hk || 0 === (null === yG || void 0 === yG ? void 0 : yG.renderPending);
              !YU && kG && (YU = !0, performance.mark(DL));
              if (hU === Jk) return;
              const UG = null !== (bG = null === yG || void 0 === yG ? void 0 : yG.firstView) && void 0 !== bG ? bG : Nb.fb.NotYet;
              if (Hk && UG === Nb.fb.NotYet) return;
              if (UU && (!0 !== (null === (wG = (0, aG.f)()) || void 0 === wG ? void 0 : wG.isSessionLive) || !kG)) return;
              hU = Jk;
              const YG = Jk;
              if (setTimeout((() => {
                  Jk === YG && (0, KG.h)()
                }), 0), null === (SG = Dy) || void 0 === SG || SG.playable(), function() {
                  clearTimeout(Wy), Wy = setTimeout((() => {
                    RY() && uV((GG => {
                      let {
                        prefetchWorldgenWorker: bG
                      } = GG;
                      bG()
                    }))
                  }), yy)
                }(), UU) return;
              UU = !0, performance.mark(tL), (0, NS.m)("render") && Promise.all([ZG.e(78), ZG.e(49)]).then((() => ZG(4697))).then((GG => {
                let {
                  renderDebugPlayable: bG
                } = GG;
                bG()
              }), (GG => {
                console.warn("The render debug topic didn't load", GG)
              }));
              const VG = Math.round(performance.now()),
                pG = GG.readViewQueuedPrograms();
              null !== pG && (0, KG.p)("wasm_view_links", VG, (0, Kb.rb)(pG));
              const fG = null === QU || null === pU ? 0 : Math.max(0, pU - QU),
                QG = null === QU ? 0 : Math.max(0, VG - QU),
                hG = Hk ? GG.readFirstViewWait(fG, QG) : null;
              null !== hG && (0, KG.n)(hG);
              if (Hk && UG !== Nb.fb.Drawn) {
                const bG = UG === Nb.fb.HeldBackstop ? "held_draws" : "long",
                  {
                    cause: ZG
                  } = wV(GG);
                if (console.warn(`${qL} playable at ${VG} ms on the first view's ${bG} backstop, ${ZG}: it wasn't drawn whole in time`), (0, KG.p)("wasm_view_backstop", VG, `${bG}:${ZG}`), "long" === bG) {
                  var dG, JG;
                  const bG = null !== (dG = null === (JG = Wk) || void 0 === JG ? void 0 : JG.game) && void 0 !== dG ? dG : "";
                  KU = new RZ.c((() => {
                    const {
                      cause: ZG,
                      census: wG
                    } = wV(GG);
                    (0, aZ.reportFirstViewNoTerrain)(bG, ZG, wG, Ey), (0, Eb.s)("noTerrain")
                  }))
                }
              } else console.info(`${qL} playable at ${VG} ms${Hk?"":" (no renderer)"}`);
              setTimeout(xk, 0), (0, Cb.e)().catch((GG => {
                console.error(`${qL} item sprites didn't load, so item particles show the missing texture`, GG)
              })), fS.b.warm()
            }(GG);
          (0, fZ.R)(GG, {
            worldgen: Fy,
            mesh: ay
          }),
          function(GG) {
            GG.forEachEvent(Fw);
            for (const bG of Iw) try {
              (0, Xw.c)(bG)
            } catch (hG) {
              if ((0, xb.h)(hG)) {
                GG.crashOn(fZ.l, hG);
                break
              }
              console.error(`${iw} an input action listener threw`, hG)
            }
            Iw.length = 0
          }(GG), SG && (0, jb.e)();
          return !GG.isStopped
        }(GG, bG, "all" === wG || LG, SG)
      } finally {
        kk = LG, LG || (Zk = performance.now())
      }
    }

    function GV(GG) {
      console.error(`${qL} a frame-start listener threw`, GG)
    }

    function bV() {
      var GG, bG, ZG, wG;
      null === (GG = qy) || void 0 === GG || GG.drain(ky, Uy), null === (bG = Ty) || void 0 === bG || bG.drain(ky), null === (ZG = Hy) || void 0 === ZG || ZG.drain(performance.now()), Ok(ky), null === (wG = ey) || void 0 === wG || wG.drain()
    }

    function ZV(GG) {
      console.error(`${qL} a before-frame listener threw`, GG)
    }

    function wV(GG) {
      const bG = (0, aG.f)(),
        ZG = (0, aG.q)(),
        wG = null === bG || null === ZG ? null : ZG.readDrawCensus(bG.api);
      return {
        cause: (0, RZ.h)(GG.headerWord(Ob.K.LoadSteps), wG),
        census: wG
      }
    }
    const SV = {
      ChunkRequested: "wasm_chunk_requested",
      ChunkStored: "wasm_chunk_stored",
      MeshLanded: "wasm_mesh_landed",
      PlayerChunk: "wasm_player_chunk",
      TerrainDrawn: "wasm_terrain_drawn"
    };

    function LV(GG) {
      var bG;
      if (UU) return;
      if (null === pU && kV() && (pU = performance.now()), null === Jk || 0 === (GG.headerWord(Ob.K.LoadSteps) & Ob.U.PlayerBound) ? QU = null : QU ??= performance.now(), null === zk && null === Jk) return;
      null === pU || fU || (fU = !0, (0, KG.p)("wasm_startup_loaded", pU));
      let ZG = 0;
      null !== Jk ? ZG = -1 : !0 === (null === (bG = Ak) || void 0 === bG ? void 0 : bG.activated) && (ZG = ~Ob.X.TerrainDrawn);
      const wG = GG.headerWord(Ob.K.LoadSteps) & ZG & ~VU;
      if (0 === wG) return;
      VU |= wG;
      const SG = performance.now();
      for (const [LG, yG] of Object.entries(SV)) 0 !== (wG & Ob.X[LG]) && (0, KG.p)(yG, SG)
    }

    function yV() {
      return Hk && kV()
    }

    function kV() {
      return ty && UV()
    }

    function UV() {
      return null === qy || qy.startupDone
    }

    function YV(GG, bG) {
      const ZG = my;
      (null === ZG || void 0 === ZG ? void 0 : ZG.conn) === GG ? VV(ZG, bG) : Qk++
    }

    function VV(GG, bG) {
      const {
        ws: ZG
      } = GG;
      return ZG.readyState === WebSocket.OPEN ? (ZG.send(bG), !0) : ZG.readyState === WebSocket.CONNECTING && GG.pendingBytes + bG.byteLength <= Zy ? (GG.pending.push(bG.slice()), GG.pendingBytes += bG.byteLength, !0) : (Qk++, !1)
    }

    function pV() {
      var GG, bG, ZG, wG, SG, LG, yG, kG, UG, YG, VG, pG, fG, QG, KG, hG, dG;
      iU = !0, JU.stop(), (0, xS.endLookDebugTake)(), wL = null, JY(), (0, vG.I)().unlockPointer(), (0, vG.E)(null), null === (GG = sy) || void 0 === GG || GG(), sy = null, null === (bG = (0, aG.q)()) || void 0 === bG || bG.followCursorAim(null), (0, jb.F)(), (0, aG.e)(), zy.stop(), null === (ZG = yU) || void 0 === ZG || ZG(), yU = null, null === (wG = kU) || void 0 === wG || wG(), kU = null, null === (SG = SU) || void 0 === SG || SG.stop(), SU = null, (0, HZ.r)(null), null === (LG = Iy) || void 0 === LG || LG(), Iy = null, null === (yG = Fy) || void 0 === yG || yG.stop(), Fy = null, null === (kG = ay) || void 0 === kG || kG.stop(), ay = null, null !== (UG = Jy) && void 0 !== UG && null !== (YG = UG.textures) && void 0 !== YG && YG.assets && (0, rS.n)(null), null === (VG = Jy) || void 0 === VG || VG.stop(), Jy = null, ry = null;
      const JG = cy;
      cy = null, JG && (JG.stop(), zV(JG)), null === (pG = Ty) || void 0 === pG || pG.dispose(), Ty = null, null === (fG = Hy) || void 0 === fG || fG.dispose(), Hy = null, qy = null, null === (QG = gy) || void 0 === QG || QG(), gy = null, null === (KG = My) || void 0 === KG || KG(), My = null, null !== Lk && (clearTimeout(Lk), Lk = null), null === (hG = Ay) || void 0 === hG || hG.stop(), Ay = null, sU(), oS.e.release(), VY();
      const rG = ey;
      ey = null;
      try {
        null === rG || void 0 === rG || rG.dispose()
      } catch (zG) {
        console.warn(`${qL} the sky's images didn't release`, zG)
      }(0, QS.f)(null), null === (dG = Qy) || void 0 === dG || dG.pagePreviews().endSession(null === (0, hb.r)())
    }

    function fV(GG, bG) {
      var ZG, wG;
      const SG = null !== (ZG = null === (wG = cy) || void 0 === wG ? void 0 : wG.details()) && void 0 !== ZG ? ZG : {},
        LG = GG.site === gL || GG.site === eL || GG.site === aZ.RENDER_RELOAD_SITE || GG.site === RL ? GG.error instanceof WebAssembly.RuntimeError || GG.error instanceof yZ.e : !(0, VZ.r)(GG.error) && (0, fZ.M)(GG);
      LG && GG.error instanceof Error && (0, hb.V)(GG.error);
      const yG = LG || GG.site === fZ.y ? (0, aZ.readTrap)(GG.error) : null,
        kG = null !== yG && (0, GZ.e)(yG.kind, yG.refusedBytes) ? yG.refusedBytes : 0,
        UG = (0, mZ.o)(),
        YG = null === ly ? (0, YS.r)(function() {
          try {
            return (0, hb.y)().buffer.byteLength
          } catch {
            return 0
          }
        }(), kG, UG) : ly.ceilingMayRefuse(kG, UG),
        VG = kG > 0 && !YG && IY();
      var pG;
      if (VG && ((0, ob.z)("oom"), (0, ob.y)("decline"), uU = !0), pV(), (0, vS.c)()) return console.warn(`${qL} the session stopped at ${GG.site} as the page reloads`, GG.error), void((0, VZ.r)(GG.error) || (null === (pG = GG.header) || void 0 === pG ? void 0 : pG.lastError) === Nb.R.CoreBusy || (0, aZ.reportStoppedCore)(GG, bG, yG, {
        memoryDetails: SG,
        declined: VG
      }));
      (0, aZ.showCrash)(GG, bG, yG, {
        memoryDetails: SG,
        declined: VG
      })
    }

    function QV(GG, bG) {
      const ZG = performance.now();
      return !(ZG - pk[GG] < wy) && (pk[GG] = ZG, console.warn(`${qL} ${bG}`), !0)
    }

    function KV(GG) {
      const {
        input: bG,
        net: ZG,
        worker: wG
      } = GG.rings, SG = GG.optionsDropped, LG = bG.dropped + SG + ZG.dropped + wG.dropped + Qk;
      LG !== fk && QV("dropped", `${LG} records dropped so far (input ${bG.dropped}, options ${SG}, net ${ZG.dropped}, worker ${wG.dropped}, net-out ${Qk})`) && (fk = LG)
    }

    function hV() {
      var GG, bG;
      const ZG = (0, MZ.c)();
      if (null === ZG) return null;
      const wG = (0, nZ.o)(ZG);
      return {
        ...wG,
        horizontal: Math.min(wG.horizontal, null !== (GG = null === (bG = cy) || void 0 === bG ? void 0 : bG.shedDistanceInUse()) && void 0 !== GG ? GG : 1 / 0)
      }
    }

    function dV(GG) {
      var bG, ZG;
      return {
        samples: Hk ? ZU : null,
        sunShadows: GG,
        renderDistance: null !== (bG = null === (ZG = hV()) || void 0 === ZG ? void 0 : ZG.horizontal) && void 0 !== bG ? bG : null
      }
    }

    function JV(GG) {
      Ek = GG, (0, AZ.K)()
    }

    function rV() {
      var GG, bG, ZG;
      const wG = hV();
      return {
        ...null === (GG = cy) || void 0 === GG ? void 0 : GG.pageKillSnapshot(),
        renderDistance: null !== (bG = null === wG || void 0 === wG ? void 0 : wG.horizontal) && void 0 !== bG ? bG : null,
        renderDistanceVertical: null !== (ZG = null === wG || void 0 === wG ? void 0 : wG.vertical) && void 0 !== ZG ? ZG : null,
        chunkCap: jy,
        budgetBasis: Py,
        renderBackend: (0, vS.E)(),
        adPreload: Xk,
        ...(0, sZ.e)(Ek)
      }
    }

    function zV(GG) {
      var bG;
      console.info(`${qL} wasm memory at the session's end`, GG.details());
      const {
        wasmMainMiB: ZG,
        wasmWorkersMiB: wG,
        peakStoredChunks: SG
      } = GG.pageKillSnapshot(), LG = navigator.deviceMemory;
      (0, QZ.logClientMeasurement)("wasm_memory_end", {
        wasmMainMiB: ZG,
        wasmWorkersMiB: wG,
        peakStoredChunks: SG
      }, {
        client: "wasm",
        renderBackend: null !== (bG = (0, vS.E)()) && void 0 !== bG ? bG : "none",
        os: (0, qZ.getOperatingSystem)(),
        deviceMemory: String(null !== LG && void 0 !== LG ? LG : "unreported")
      })
    }

    function EV(GG, bG) {
      if (!GG.isStopped) try {
        bG()
      } catch (ZG) {
        GG.crash(fZ.B, ZG)
      }
    }

    function oV() {
      return vy ??= ZG.e(72).then((() => ZG(51455))).catch((GG => {
        throw vy = null, GG
      })), vy
    }
    async function XV() {
      const {
        createWorldgenWorker: GG,
        worldgenWorkerReady: bG
      } = await oV();
      return await bG(), GG
    }

    function uV(GG) {
      var bG;
      null === (bG = vy) || void 0 === bG || bG.then(GG, (() => {}))
    }

    function iV() {
      return performance.now() - Math.max(Zk, wk) >= Sy
    }

    function CV(GG) {
      const bG = document.hidden || Sk ? "all" : "budget";
      Sk = !0;
      const ZG = BY(GG, !1, bG);
      var wG;
      ZG && (KV(GG), null === (wG = cy) || void 0 === wG || wG.afterFrame());
      return ZG
    }

    function WV(GG) {
      GG.isStopped || 0 === GG.rings.net.cursor || iV() && !CV(GG) || GG.rings.net.cursor > 0 && performance.now() - wk >= Sy / 2 && function(GG) {
        Lk ??= setTimeout((() => {
          Lk = null, WV(GG)
        }), Sy)
      }(GG)
    }

    function mV(GG, bG) {
      return async function(GG, bG, ZG) {
        let {
          stop: wG,
          stillWanted: SG,
          beforeReload: LG
        } = ZG;
        const yG = await (0, Hw.h)(GG, {
          stillWanted: SG,
          beforeReload: async () => {
            wG(), await Promise.all([(0, aZ.flushCrashReports)(BG.e), null === LG || void 0 === LG ? void 0 : LG()])
          },
          reload: BG.i
        });
        return yG || bG(), yG
      }(GG, bG, {
        ...arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        stop: pV
      })
    }
    let IV = !1;

    function FV() {
      return IV = !0, async function(GG, bG, wG) {
        const {
          gamePackSource: SG
        } = await ZG.e(276).then((() => ZG(41447)));
        await qY.packStep(GG, ((ZG, wG) => ZG.packForGame(GG, SG(bG), wG)), wG)
      }(...arguments)
    }

    function vV(GG) {
      ! function(GG, bG) {
        GG((GG => {
          null === GG || void 0 === GG || GG.subscribe((GG => {
            let {
              pack: ZG,
              gameSource: wG
            } = GG;
            bG(null === wG || null === ZG ? null : {
              pack: ZG,
              source: "" === wG ? null : wG
            })
          }))
        }))
      }(MY, GG)
    }
    let aV = !1,
      cV = null,
      lV = !1,
      jV = !1;

    function PV() {
      var GG;
      aV || (aV = !0, vU("play", OG), (0, fG.n)(new DV), kG.gameBridge.attach(qG), gV().catch((() => {})), (0, aG.r)((GG => {
        Yb(GG.setTextHost)
      })), GG = sV, nk.add(GG), function(GG) {
        for (const bG of Ny) GG(bG);
        Oy.add(GG)
      }((GG => {
        AV(MV[GG])
      })))
    }
    const MV = {
      booted: LG.h.INITIALISE_NOA,
      texturesIn: LG.h.REGISTRATION,
      modelsIn: LG.h.SETUP_LIFEFORMS
    };

    function AV(GG) {
      UG.l.xh("matchmakeAndPlayStepCompleted", {
        step: GG,
        totalSubSteps: 1
      })
    }

    function sV(GG) {
      if (!lV) return;
      const {
        gameNameWithVariation: bG,
        lobbyName: ZG
      } = (0, fG.d)();
      if (GG.code === wG.b.serverUpdating.code) return (new DV).leaveLive(), void nV(bG, ZG);
      UG.l.xh("unwantedLeftGame", {
        reason: qV(GG),
        requiresRefresh: GG.requiresRefresh,
        canReconnect: null !== GG.reconnect,
        automaticallyReconnect: GG.reconnecting,
        canPlayAgain: GG.canPlayAgain,
        gameNameWithVariation: bG,
        lobbyName: ZG
      }), (new DV).leaveLive()
    }

    function qV(GG) {
      return null !== GG.reasonKey ? {
        translationKey: GG.reasonKey
      } : "gameOrPluginKick" === GG.name ? GG.reason : `You have disconnected from the server.\n${GG.reason}`
    }

    function nV(GG, bG) {
      var wG;
      wG = (0, YG.y)(GG, bG), Promise.resolve().then((() => ZG(1444))).then((GG => {
        let {
          navigatePreserveSearch: bG
        } = GG;
        bG(wG)
      })).catch((GG => {
        console.warn("[bloxd-wasm-client] the page's router didn't navigate: loading the page instead", GG), (0, BG.g)(wG)
      }))
    }

    function gV() {
      return cV ??= Promise.all([ZG.e(73), ZG.e(76), ZG.e(75), ZG.e(74), ZG.e(90), ZG.e(87), ZG.e(273), ZG.e(191), ZG.e(228), ZG.e(252), ZG.e(275), ZG.e(47)]).then((() => ZG(41395))).then((GG => {
        try {
          GG.attachPlayGameSources()
        } catch (bG) {
          throw console.error("[bloxd-wasm-client] the play sources did not attach", bG),
            function(GG) {
              uy.then((bG => {
                null === bG || bG.isStopped || iU ? console.warn(`${qL} the play sources threw as they attached, after the client stopped`, GG) : fV({
                  site: RL,
                  error: GG,
                  header: null
                }, Ey)
              }))
            }(bG), bG
        }
      }), (GG => {
        throw cV = null, new aG.d(GG)
      })), cV
    }
    async function eV(GG, bG) {
      PV(), IV = !0, lV = !0;
      let ZG = {
          place: GG.place,
          matchedAt: GG.matchedAt
        },
        yG = GG.place.gameNameWithVariation;
      const kG = (0, pG.g)();
      let UG = null;
      const YG = await jU({
        matchmake: async () => {
          let bG = ZG;
          if (ZG = null, null === bG) {
            const ZG = await GG.rematch();
            if (ZG.isError()) throw UG = ZG.asError().forward(), new Error(ZG.asError().message);
            bG = {
              place: ZG.getValue(),
              matchedAt: performance.now()
            }
          }
          yG = bG.place.gameNameWithVariation;
          return {
            target: await (0, RG.e)(GG.userContext, bG.place, AY(), kG),
            matchedAt: bG.matchedAt,
            freshMs: RG.c
          }
        },
        pageReady: gV,
        onFailure: (GG, bG) => {
          null === UG && function(GG, bG) {
            (0, aZ.reportPageJoinFailure)(GG, Ey, bG)
          }(GG, {
            sinceJoinStartMs: bG,
            game: yG
          })
        },
        rejoin: () => () => {},
        invalidateTrafficCode: () => GG.userContext.invalidateTrafficCode(),
        signal: bG
      });
      switch (YG.kind) {
        case "joined":
          if (kG) {
            setTimeout((() => {
              XG.ready()
            }), 0);
            const {
              game: GG
            } = YG;
            (0, pG.q)((() => {
              GG.endJoinAd() && ((0, KG.l)(), XG.adEnded())
            }))
          }
          return jV || (jV = !0, (0, iG.c)()), lV ? (AV(LG.h.CONNECT_TO_GAME_SERVER), AV(LG.h.SHADER_PACK), function() {
            var GG, bG;
            return null !== (GG = null === (bG = Dy) || void 0 === bG ? void 0 : bG.runsInJoinedGame()) && void 0 !== GG && GG
          }() && (0, uG.d)(GG.userContext, yG).catch((GG => {
            console.error("Failed to report the shader pack session", GG)
          })), function() {
            const GG = function() {
              var GG, bG;
              return null !== (GG = null === (bG = Dy) || void 0 === bG ? void 0 : bG.couldntRunInJoinedGame()) && void 0 !== GG ? GG : null
            }();
            null !== GG && (0, uG.c)(GG)
          }(), SG.d.value(void 0)) : tV("The server ended the game as it joined");
        case "failed":
          if (!YG.reloading) {
            if (null !== UG) return UG;
            if ((YG.error instanceof gG.k || YG.error instanceof gG.c) && YG.error.code === wG.b.serverUpdating.code) {
              if (bG.aborted) return tV("Left the game while it loaded");
              const {
                gameNameWithVariation: GG,
                lobbyName: ZG
              } = (0, fG.d)();
              return nV(GG, ZG), tV("The server is updating")
            }
            return YG.error instanceof xG.e ? SG.d.errorWithCode(YG.error.messageKey, LG.h.SHADER_PACK, {
              severity: "medium"
            }) : SG.d.errorWithCode(function(GG) {
              if (GG instanceof gG.r || GG instanceof IG.g) return GG.message;
              if (RV(GG)) return (0, nG.o)(GG.code, GG.serverText);
              return nG.i
            }(YG.error), LG.h.CONNECT_TO_GAME_SERVER, {
              error: TV(YG.error) ? YG.error : void 0,
              severity: HV(YG.error),
              gameServerUnreachable: (0, eG.c)(YG.error),
              joinFailure: (0, eG.g)(YG.error),
              rematch: (0, WG.c)(YG.error),
              gameRefused: (0, mG.e)(YG.error)
            })
          }
          return tV("Reloading into the new build");
        case "stopped":
          return tV("The game client stopped, and shows why");
        case "RZ":
          return tV("Left the game while it loaded")
      }
    }

    function RV(GG) {
      return GG instanceof gG.k || GG instanceof gG.c && "attach" !== GG.stage
    }

    function TV(GG) {
      return !(GG instanceof gG.r) && !RV(GG) && void 0 === (0, eG.c)(GG)
    }

    function HV(GG) {
      return RV(GG) ? GG instanceof gG.c && (0, nG.k)(GG.code).requiresRefresh ? "medium" : "low" : TV(GG) || GG instanceof gG.r ? "medium" : "low"
    }

    function tV(GG) {
      return SG.d.errorWithCode(GG, LG.h.CONNECT_TO_GAME_SERVER, {
        severity: "low",
        RZ: !0
      })
    }
    class DV {
      leave(GG) {
        if ((0, FG.d)()) {
          var bG, ZG;
          if ((0, yG.c)()) return;
          (0, QG.c)(!0 === (null === (bG = (0, FG.l)()) || void 0 === bG || null === (ZG = bG.currentViewer) || void 0 === ZG ? void 0 : ZG.unsavedChanges), GG)
        } else this.leaveLive()
      }
      leaveLive() {
        var GG;
        IV && (null === (GG = AY()) || void 0 === GG || GG.endGamePack());
        if (!lV) return;
        lV = !1, (0, CG.f)();
        try {
          var bG;
          null === (bG = (0, aG.q)()) || void 0 === bG || bG.clearWasmCameraScreen()
        } catch (wG) {
          console.error("[bloxd-wasm-client] the camera screen didn't clear", wG)
        }
        const {
          gameNameWithVariation: ZG
        } = (0, fG.d)();
        try {
          TU()
        } finally {
          (0, fG.q)({
            websocketUrl: null
          }), UG.l.xh("leaveGame", {
            gameNameWithVariation: ZG
          }), (0, VG.T)()
        }
      }
      isReplay() {
        return (0, FG.d)()
      }
    }
  },
  41324: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => SG,
      e: () => wG,
      f: () => kG,
      h: () => yG
    });
    const wG = 12e4,
      SG = 3e4,
      LG = {
        hidden: () => "undefined" !== typeof document && document.hidden,
        listen: GG => "undefined" === typeof document ? () => {} : (document.addEventListener("visibilitychange", GG), () => {
          document.removeEventListener("visibilitychange", GG)
        })
      };

    function yG(GG) {
      return `it sent no start within ${Math.round(GG)} ms`
    }
    class kG {
      constructor(GG, bG) {
        let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => performance.now(),
          wG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : LG;
        this.timeoutMs = GG, this.onTimeout = bG, this.now = ZG, this.visibility = wG, this.timer = null, this.counted = 0, this.step = null, this.unlisten = void 0, this.unlisten = wG.listen((() => {
          this.onVisibility()
        })), wG.hidden() || this.next()
      }
      cancel() {
        this.pause(), this.unlisten()
      }
      onVisibility() {
        this.visibility.hidden() ? (this.counted += this.credit(), this.pause()) : null === this.timer && this.next()
      }
      credit() {
        const GG = this.step;
        return null === GG ? 0 : Math.min(this.now() - GG.at, GG.ms)
      }
      pause() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null), this.step = null
      }
      next() {
        const GG = this.timeoutMs - this.counted;
        if (GG <= 0) return void this.arm(1e3, (() => {
          this.cancel(), this.onTimeout(this.counted)
        }));
        const bG = Math.min(GG, 5e3);
        this.step = {
          at: this.now(),
          ms: bG
        }, this.arm(bG, (() => {
          this.counted += this.credit(), this.step = null, this.next()
        }))
      }
      arm(GG, bG) {
        this.timer = setTimeout((() => {
          this.timer = null, bG()
        }), GG)
      }
    }
  },
  40025: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => kG
    });
    var wG = ZG(352),
      SG = ZG(982);
    const LG = new Set(["bingo", "buildAFactory2", "classic", "testGym"]),
      yG = new Set(["creativeFlat", "skyGrid"]);

    function kG(GG) {
      const bG = (0, wG.Yb)(GG);
      return "classic" !== bG ? LG.has(bG) : !(0, SG.h)(GG) && !yG.has((0, wG.Vb)(GG))
    }
  },
  38145: (GG, bG, ZG) => {
    function wG(GG) {
      return "string" !== typeof GG || 2 !== GG.length && ":" !== GG[2] ? null : GG[0] + GG[1]
    }
    ZG.d(bG, {
      c: () => dG,
      d: () => XG,
      h: () => oG,
      i: () => uG,
      l: () => kG,
      m: () => yG,
      p: () => LG,
      q: () => UG,
      s: () => JG,
      w: () => hG
    });
    const SG = ["op:ytInitialPlayerResponse.adPlacements", "op:ytInitialPlayerResponse.playerAds", "op:ytInitialPlayerResponse.adSlots", "op:playerResponse.adPlacements", "op:playerResponse.playerAds", "op:playerResponse.adSlots"];

    function LG(GG) {
      if (function(GG) {
          for (let bG = 0; bG < SG.length; bG++)
            if (GG === SG[bG]) return !0;
          return !1
        }(GG)) return !1;
      const bG = wG(GG);
      return "op" === bG || "ep" === bG || "wi" === bG || "pp" === bG || "fp:call" === GG || "fp:t" === GG
    }

    function yG(GG) {
      return "fp" === wG(GG) && !LG(GG)
    }

    function kG(GG) {
      if ("string" !== typeof GG) return !1;
      return "o" === GG[0] && "p" === GG[1] && (2 === GG.length || ":" === GG[2]) || "fp:call" === GG || "2" === GG || "t" === GG || "a" === GG
    }

    function UG(GG, bG) {
      return `~${function(GG){return GG.length<2?GG:":"===GG[1]?GG[0]:GG[0]+GG[1]}(bG)}~${GG}`
    }
    const YG = 200;

    function VG(GG) {
      let bG = GG.length - 1;
      for (let ZG = 0; ZG < 2; ZG++) {
        const ZG = bG;
        for (; bG >= 0 && GG[bG] >= "0" && GG[bG] <= "9";) bG--;
        if (bG < 0 || bG === ZG || ":" !== GG[bG]) return -1;
        bG--
      }
      return bG + 1
    }

    function pG(GG) {
      return "unknown" === GG || VG(GG) >= 0
    }

    function fG(GG, bG) {
      return GG[bG] >= "\ud800" && GG[bG] <= "\udbff" && bG + 1 < GG.length && GG[bG + 1] >= "\udc00" && GG[bG + 1] <= "\udfff" ? 2 : 1
    }

    function QG(GG, bG, ZG) {
      return 2 === ZG ? 4 : GG[bG] <= "\x7f" ? 1 : GG[bG] <= "\u07ff" ? 2 : 3
    }

    function KG(GG, bG, ZG) {
      let wG = 0;
      for (; wG < bG;) {
        const bG = fG(GG, wG),
          SG = QG(GG, wG, bG);
        if (SG > ZG) break;
        ZG -= SG, wG += bG
      }
      return wG
    }

    function hG(GG) {
      let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1 / 0;
      if ("string" !== typeof GG || GG.length > YG || !pG(GG)) return "t";
      let ZG = 2;
      for (let kG = 0; kG < GG.length;) {
        const bG = fG(GG, kG);
        ZG += QG(GG, kG, bG), kG += bG
      }
      if (ZG <= bG) return `t ${GG}`;
      const wG = VG(GG),
        SG = bG - 2 - (GG.length - wG);
      if (SG < 0) return "t";
      const LG = KG(GG, wG, SG);
      let yG = "t ";
      for (let kG = 0; kG < LG; kG++) yG += GG[kG];
      for (let kG = wG; kG < GG.length; kG++) yG += GG[kG];
      return yG
    }
    const dG = 62;

    function JG(GG) {
      let bG = "so:";
      const ZG = KG(GG, GG.length, dG - bG.length);
      for (let wG = 0; wG < ZG; wG++) bG += GG[wG];
      return bG
    }
    const rG = "BABYLON ",
      zG = "DECODE ",
      EG = "BABYLON@ ";

    function oG(GG) {
      return JG(rG + GG)
    }

    function XG(GG, bG) {
      return JG(EG + GG + " " + bG)
    }

    function uG(GG) {
      return JG(zG + GG)
    }
  },
  41217: (GG, bG, ZG) => {
    ZG.d(bG, {
      d: () => wG
    });
    const wG = {
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
  38388: GG => {
    GG.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAKUlEQVQYGWM8CwQMeAATHjmw1JBQwAh06v+LFy8yvH//noGXl/ccuq8A/vQKd00yOdIAAAAASUVORK5CYII="
  },
  38375: GG => {
    GG.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAALUlEQVQYGWM8CwQMeAATHjmw1JBQwAh06v8DBw4wCAoKMnBzczN8/PjxHLLPAORwCnfkvOdNAAAAAElFTkSuQmCC"
  },
  38392: GG => {
    GG.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAKUlEQVQYGWM8CwQMeAATHjmw1JBQwAh06v8DBw4wCAoKMvz58+ccuq8A8vQKd2AxC9MAAAAASUVORK5CYII="
  },
  38369: GG => {
    GG.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAANUlEQVQYGWM8CwQMeAATHjmw1JBQAHLp/wMHDvy/ePHi/4CAgP937tz5Ly6u+5/P3uw/KAgAgjwWhHm22JoAAAAASUVORK5CYII="
  },
  38379: GG => {
    GG.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAKUlEQVQYGWM8CwQMeAATHjmw1JBQwAh06v8DBw4wCAoKMvz58+ccuq8A8vQKd2AxC9MAAAAASUVORK5CYII="
  },
  39136: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => LG
    });
    var wG = ZG(2868);
    const SG = ["none", "idle", "now"];

    function LG() {
      const GG = () => (0, wG.G)();
      return {
        memoryBytes: () => (0, wG.y)().buffer.byteLength,
        reserveUpFront: bG => GG().wp(bG),
        reserveAhead: bG => GG().Zp(bG),
        setCeiling: bG => {
          GG().Sp(bG)
        },
        lowWater: () => SG[GG().bp()] ?? "none",
        stats: () => function(GG) {
          const bG = new Uint32Array((0, wG.y)().buffer, GG, 17),
            ZG = GG => bG[GG] ?? 0,
            SG = GG => ({
              upFront: ZG(GG),
              ahead: ZG(GG + 1),
              onDemandInFrame: ZG(GG + 2),
              onDemand: ZG(GG + 3)
            });
          return {
            memoryBytes: ZG(0),
            initialBytes: ZG(1),
            liveBytes: ZG(2),
            peakLiveBytes: ZG(3),
            headroomBytes: ZG(4),
            unusedBytes: ZG(5),
            ceilingBytes: ZG(6),
            reservesRefused: ZG(7),
            grows: SG(8),
            grownBytes: SG(12),
            allocationsRefused: ZG(16)
          }
        }(GG().Lp()),
        takeBallast: () => GG().yp(),
        takePressure: () => GG().kp()
      }
    }
  },
  5062: (GG, bG, ZG) => {
    ZG.d(bG, {
      A: () => fG,
      d: () => kG,
      h: () => yG,
      i: () => wG,
      j: () => hG,
      k: () => pG,
      o: () => SG,
      s: () => LG,
      u: () => YG,
      y: () => VG
    });
    const wG = 5;

    function SG(GG) {
      return GG === wG
    }

    function LG(GG) {
      return [...GG.features]
    }
    const yG = 262144,
      kG = 256,
      UG = 256;

    function YG(GG) {
      if ("object" !== typeof GG || null === GG || Array.isArray(GG)) return "The pack has no files.";
      const bG = [];
      for (const [ZG, wG] of Object.entries(GG)) {
        if ("string" !== typeof wG) return `${ZG} isn't text.`;
        bG.push({
          path: ZG,
          source: wG
        })
      }
      return bG.sort(((GG, bG) => pG(GG.path, bG.path))),
        function(GG) {
          if (0 === GG.length) return "The pack has no .wgsl files.";
          if (GG.length > kG) return `The pack has more than ${kG} .wgsl files.`;
          const bG = new Set;
          for (const {
              path: ZG
            }
            of GG) {
            const GG = QG(ZG);
            if (null !== GG) return GG;
            if (bG.has(ZG)) return `The pack has two files at ${ZG}.`;
            bG.add(ZG)
          }
          return fG(GG) > yG ? `The pack's .wgsl files are over ${yG/1024} KB in total.` : null
        }(bG) ?? bG
    }

    function VG(GG) {
      const bG = {};
      for (const ZG of GG) bG[ZG.path] = ZG.source;
      return bG
    }

    function pG(GG, bG) {
      return GG < bG ? -1 : GG > bG ? 1 : 0
    }

    function fG(GG) {
      const bG = new TextEncoder;
      let ZG = 0;
      for (const {
          source: wG
        }
        of GG) ZG += bG.encode(wG).byteLength;
      return ZG
    }

    function QG(GG) {
      if (!GG.toLowerCase().endsWith(".wgsl")) return `${GG} isn't a .wgsl file.`;
      if (GG.length > UG) return `A file path is over ${UG} characters.`;
      if (GG.includes("\\") || /[\u0000-\u001f]/.test(GG)) return `${GG} isn't a valid file path.`;
      return GG.split("/").some((GG => "" === GG || "." === GG || ".." === GG)) ? `${GG} isn't a valid file path.` : null
    }
    const KG = /^(.*)\[rot\[([1-4])$/;

    function hG(GG, bG) {
      let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
      const wG = new Map;
      bG.forEach(((GG, bG) => {
        let {
          numAnimStates: ZG,
          animStartIdx: SG
        } = GG;
        for (let LG = 1; LG < ZG; LG++) wG.set(SG + LG - 1, bG)
      }));
      const SG = Object.entries(GG),
        LG = new Map;
      for (const [hG, dG] of SG) {
        const GG = KG.exec(hG);
        "1" === GG?.[2] && LG.set(GG[1], dG + 1)
      }
      const yG = GG => {
          const bG = KG.exec(GG);
          return bG && LG.has(bG[1]) ? {
            root: bG[1],
            rotation: Number(bG[2]) - 1
          } : null
        },
        kG = new Set(SG.map((GG => {
          let [bG] = GG;
          return yG(bG)?.root ?? bG
        }))),
        UG = (GG, ZG) => {
          const wG = GG.replace(/_?0$/, "");
          return (bG[ZG]?.numAnimStates ?? 0) > 1 && !kG.has(wG) ? wG : GG
        },
        YG = new Map;
      for (const [KG, hG] of SG) YG.set(hG, UG(yG(KG)?.root ?? KG, hG));
      const VG = SG.reduce(((GG, bG) => {
          let [, ZG] = bG;
          return Math.max(GG, ZG + 1)
        }), 0),
        pG = Array.from({
          length: VG
        }, ((GG, bG) => ({
          id: bG + 1,
          rotation: 0
        }))),
        fG = new Map,
        QG = new Map;
      for (const [KG, hG] of SG) {
        const GG = yG(KG),
          bG = wG.get(hG);
        if (void 0 !== bG) {
          const ZG = YG.get(bG);
          QG.set(KG, {
            name: KG,
            texture: ZG,
            kind: "frame"
          }), GG && !QG.has(GG.root) && QG.set(GG.root, {
            name: GG.root,
            texture: ZG,
            kind: "frame"
          });
          continue
        }
        const ZG = YG.get(hG),
          SG = GG?.root ?? KG;
        if (ZG !== SG && QG.set(SG, {
            name: SG,
            texture: ZG,
            kind: "frame"
          }), GG) {
          const bG = LG.get(GG.root);
          pG[hG] = {
            id: bG,
            rotation: GG.rotation
          }, fG.set(ZG, bG), QG.set(KG, {
            name: KG,
            texture: ZG,
            kind: "rotation"
          })
        } else fG.set(ZG, hG + 1)
      }
      for (const KG of fG.keys()) QG.delete(KG);
      for (const [KG, hG] of ZG) {
        const GG = fG.get(hG);
        void 0 === GG || fG.has(KG) || (fG.set(KG, GG), QG.delete(KG))
      }
      return {
        named: [...fG].sort(((GG, bG) => {
          let [ZG] = GG, [wG] = bG;
          return ZG < wG ? -1 : ZG > wG ? 1 : 0
        })).map((GG => {
          let [bG, ZG] = GG;
          return {
            name: bG,
            id: ZG
          }
        })),
        aliases: [...QG.values()],
        layers: pG
      }
    }
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);