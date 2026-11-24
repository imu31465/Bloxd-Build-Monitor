export const id = 64;
export const ids = [64, 117, 118, 138];
export const modules = {
  39701: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => TB,
      g: () => JB
    });
    const TB = "The world isn't loaded, so no blocks can be seen.",
      JB = "The world isn't loaded, so nothing in it can be seen."
  },
  4866: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => nB
    });
    var TB = ZB(20),
      JB = ZB(24),
      oB = ZB(1353),
      GB = ZB(2973);
    const vB = 3e4,
      kB = 1e3;

    function cB() {
      return "visible" === document.visibilityState && "inGame" === TB.d.get("gameState") && (0, oB.w)()
    }

    function nB(BB, IB) {
      (0, GB.u)() || function(BB, IB, ZB) {
        let TB = 0;
        const JB = setInterval((() => {
          IB() && (TB += kB, TB >= BB && (clearInterval(JB), ZB()))
        }), kB)
      }(vB, cB, (() => {
        IB().then((() => {
          BB(`saved for the player after ${vB/1e3} s of play`), (0, GB.I)(), JB.l.Gq("chat", {
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
  34039: (BB, IB, ZB) => {
    function TB(BB, IB) {
      return 0 === BB.length ? 0 : BB[Math.min(BB.length - 1, Math.floor(IB * BB.length))]
    }

    function JB(BB) {
      return BB.toFixed(1)
    }
    ZB.d(IB, {
      c: () => JB,
      f: () => TB
    })
  },
  38004: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => cB,
      e: () => nB,
      g: () => dB,
      j: () => WB,
      m: () => UB
    });
    var TB = ZB(4866),
      JB = ZB(34039),
      oB = ZB(2973);
    const GB = 20,
      vB = ["totalMs", "slotMs", "workerMs", "applyMs", "ahead", "inFlight", "ah", "jobMs"];

    function kB(BB) {
      return [...BB].sort(((BB, IB) => BB - IB))
    }
    const cB = [];

    function nB(BB, IB, ZB) {
      return `${BB},${IB},${ZB}`
    }
    class hB {
      constructor() {
        this.pending = new Map, this.jobs = new Map, this.edits = [], this.nextEdit = 0, this.reported = 0, this.windowStart = performance.now(), this.frames = 0, this.lastFrameAt = 0, this.maxFrameMs = 0, this.jobsSent = 0, this.maxAhead = 0, this.maxCapacity = 0, this.roundTrips = [], this.windowEdits = [], this.outliers = 0, this.gaveUp = 0
      }
      edit(BB, IB) {
        var ZB;
        const TB = null !== (ZB = this.pending.get(BB)) && void 0 !== ZB ? ZB : [];
        TB.push({
          editAt: IB,
          meshJobId: 0
        }), this.pending.set(BB, TB)
      }
      frame(BB) {
        this.lastFrameAt > 0 && (this.maxFrameMs = Math.max(this.maxFrameMs, BB - this.lastFrameAt)), this.lastFrameAt = BB, this.frames++, BB - this.windowStart >= 1e3 && this.summarise(BB)
      }
      sent(BB, IB, ZB, TB, JB, oB, GB) {
        this.jobs.set(IB, {
          sentAt: GB,
          receivedAt: 0,
          ahead: ZB,
          inFlight: TB,
          ah: JB,
          jobMs: 0
        }), this.jobsSent++, this.maxAhead = Math.max(this.maxAhead, ZB), this.maxCapacity = Math.max(this.maxCapacity, JB);
        for (const kB of null !== (vB = this.pending.get(BB)) && void 0 !== vB ? vB : []) {
          var vB;
          oB.includes(kB.meshJobId) || (kB.meshJobId = IB)
        }
      }
      received(BB, IB, ZB) {
        const TB = this.jobs.get(BB);
        void 0 !== TB && (this.roundTrips.push(ZB - TB.sentAt), TB.receivedAt = ZB, TB.jobMs = IB)
      }
      failed(BB) {
        this.jobs.delete(BB)
      }
      reassign(BB, IB, ZB) {
        this.jobs.delete(IB);
        for (const JB of null !== (TB = this.pending.get(BB)) && void 0 !== TB ? TB : []) {
          var TB;
          JB.meshJobId === IB && (JB.meshJobId = ZB)
        }
      }
      applied(BB, IB, ZB) {
        const TB = this.jobs.get(IB);
        this.jobs.delete(IB), void 0 !== TB && this.show(BB, TB, ZB, (BB => BB.meshJobId === IB))
      }
      emptied(BB, IB) {
        const ZB = {
          sentAt: IB,
          receivedAt: IB,
          ahead: 0,
          inFlight: 0,
          ah: 0,
          jobMs: 0
        };
        this.show(BB, ZB, IB, (() => !0))
      }
      show(BB, IB, ZB, TB) {
        const JB = this.pending.get(BB);
        if (!JB) return;
        const oB = JB.filter((JB => !TB(JB) || (this.record(BB, JB.editAt, IB, ZB), !1)));
        oB.length > 0 ? this.pending.set(BB, oB) : this.pending.delete(BB)
      }
      JN(BB) {
        this.reported += BB, this === FB && this.reported >= GB && null !== NB && (NB(), NB = null)
      }
      record(BB, IB, ZB, TB) {
        const JB = {
          totalMs: TB - IB,
          slotMs: ZB.sentAt - IB,
          workerMs: ZB.receivedAt - ZB.sentAt,
          applyMs: TB - ZB.receivedAt,
          ahead: ZB.ahead,
          inFlight: ZB.inFlight,
          ah: ZB.ah,
          jobMs: ZB.jobMs
        };
        if (this.edits[this.nextEdit] = JB, this.nextEdit = (this.nextEdit + 1) % 500, this.windowEdits.push(JB.totalMs), this.JN(1), JB.totalMs < 100 || ++this.outliers > 5) return;
        const GB = BB => Math.round(BB);
        (0, oB.o)("remesh", `slow edit (${BB}) shown in ${GB(JB.totalMs)} ms: slot ${GB(JB.slotMs)}, worker ${GB(JB.workerMs)} (${JB.ahead} ahead, ${JB.inFlight}/${JB.ah} in flight; job ${GB(JB.jobMs)}), apply ${GB(JB.applyMs)}`)
      }
      summarise(BB) {
        const IB = (BB - this.windowStart) / 1e3;
        for (const [ZB, TB] of this.pending) {
          const IB = TB.filter((IB => BB - IB.editAt <= 1e4));
          this.gaveUp += TB.length - IB.length, this.JN(TB.length - IB.length), IB.length > 0 ? this.pending.set(ZB, IB) : this.pending.delete(ZB)
        }
        for (const [ZB, TB] of this.jobs) BB - TB.sentAt > (TB.receivedAt > 0 ? 1e4 : 6e4) && this.jobs.delete(ZB);
        if (this.jobsSent > 0 || this.roundTrips.length > 0 || this.windowEdits.length > 0 || this.gaveUp > 0) {
          const BB = kB(this.roundTrips),
            ZB = kB(this.windowEdits),
            TB = Math.max(0, this.outliers - 5);
          (0, oB.o)("remesh", `${Math.round(this.frames/IB)} fps (longest ${Math.round(this.maxFrameMs)} ms) | ${this.jobsSent} jobs sent, up to ${this.maxAhead} ahead on a worker, capacity ${this.maxCapacity} | round trip p50 ${Math.round((0,JB.f)(BB,.5))} max ${Math.round((0,JB.f)(BB,1))} ms | ${ZB.length} edits shown, p50 ${Math.round((0,JB.f)(ZB,.5))} max ${Math.round((0,JB.f)(ZB,1))} ms${TB>0?`, ${TB} more slow`:""}${this.gaveUp>0?`, ${this.gaveUp} never shown`:""}`)
        }
        this.windowStart = BB, this.frames = 0, this.maxFrameMs = 0, this.jobsSent = 0, this.maxAhead = 0, this.maxCapacity = 0, this.roundTrips = [], this.windowEdits = [], this.outliers = 0, this.gaveUp = 0
      }
      stats() {
        const BB = vB.map((BB => {
          const IB = kB(this.edits.map((IB => IB[BB])));
          return `${BB}: p50 ${Math.round((0,JB.f)(IB,.5))} p90 ${Math.round((0,JB.f)(IB,.9))} max ${Math.round((0,JB.f)(IB,1))}`
        }));
        return [`${this.edits.length} edits`, ...BB].join("\n")
      }
      dump() {
        const BB = this.edits.map((BB => vB.map((IB => Math.round(10 * BB[IB]) / 10)).join(",")));
        return [this.stats(), vB.join(","), ...BB].join("\n")
      }
    }
    class zB {
      constructor(BB, IB) {
        this.log = BB, this.Nz = IB
      }
      edit(BB, IB, ZB) {
        const [TB, JB, oB] = this.Nz.vz.UTB(BB, IB, ZB), GB = this.Nz.vz.Wg.Cg(TB, JB, oB);
        GB && GB.yg && this.log.edit(nB(TB, JB, oB), performance.now())
      }
      sent(BB, IB, ZB, TB, JB) {
        this.log.sent(nB(BB.i, BB.j, BB.k), IB, ZB, TB, JB, cB, performance.now())
      }
      received(BB) {
        this.log.received(BB.meshJobId, BB.jobMs, performance.now())
      }
      failed(BB) {
        this.log.failed(BB)
      }
      applied(BB, IB) {
        this.log.applied(nB(BB.i, BB.j, BB.k), IB, performance.now())
      }
    }
    let FB = null,
      NB = null,
      gB = !1,
      qB = null;

    function yB() {
      return new Promise((BB => {
        null !== FB && FB.reported >= GB ? BB() : NB = BB
      }))
    }

    function UB() {
      const BB = new hB;
      return FB = BB, (0, oB.l)("remesh", (() => BB.dump())), (0, oB.e)("remeshStats", (() => {
        console.log(BB.stats())
      })), gB || (gB = !0, (0, TB.e)((BB => {
        (0, oB.o)("remesh", BB)
      }), yB)), BB
    }

    function WB(BB) {
      const IB = UB();
      qB = new zB(IB, BB), BB.pW.meshProbe = qB, BB.on("beforeRender", (() => {
        IB.frame(performance.now())
      }))
    }

    function dB(BB, IB, ZB) {
      var TB;
      null === (TB = qB) || void 0 === TB || TB.edit(BB, IB, ZB)
    }
  },
  34066: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => TB
    });
    const TB = new Set(["chunkBorders"])
  },
  34235: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => GB,
      d: () => JB,
      e: () => nB
    });
    var TB = ZB(1630);

    function JB(BB) {
      var IB;
      return {
        ...GB.store,
        yaw: GB.store.yaw + (null !== (IB = TB.d[BB].previewYaw) && void 0 !== IB ? IB : 0)
      }
    }
    const oB = {
        yaw: .61 * Math.PI,
        pitch: Math.PI / 2.05,
        radius: 30,
        target: [0, 0, 0]
      },
      GB = {
        player: oB,
        store: {
          ...oB,
          radius: 33,
          target: [0, 3.9, 0]
        }
      };

    function vB(BB, IB) {
      BB instanceof Promise ? BB.then(IB).catch((BB => {
        console.error("Couldn't open the preview", BB)
      })) : IB(BB)
    }
    class kB {
      constructor(BB) {
        this.opened = null, this.view = null, this.size = null, this.closed = !1, vB(BB, (BB => {
          this.closed ? BB.close() : (this.opened = BB, null !== this.size && BB.resize(this.size.width, this.size.height), null !== this.view && BB.show(this.view))
        }))
      }
      show(BB) {
        var IB;
        this.view = BB, null === (IB = this.opened) || void 0 === IB || IB.show(BB)
      }
      resize(BB, IB) {
        var ZB;
        this.size = {
          width: BB,
          height: IB
        }, null === (ZB = this.opened) || void 0 === ZB || ZB.resize(BB, IB)
      }
      close() {
        var BB;
        this.closed = !0, null === (BB = this.opened) || void 0 === BB || BB.close(), this.opened = null
      }
    }
    class cB {
      constructor(BB) {
        this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(BB).then((BB => BB.ready)), vB(BB, (BB => {
          this.closed ? BB.close() : (this.opened = BB, null !== this.size && BB.resize(this.size.width, this.size.height))
        }))
      }
      get dev() {
        return this.opened.dev
      }
      isReady() {
        var BB, IB;
        return null !== (BB = null === (IB = this.opened) || void 0 === IB ? void 0 : IB.isReady()) && void 0 !== BB && BB
      }
      setCosmetic(BB, IB) {
        var ZB;
        null === (ZB = this.opened) || void 0 === ZB || ZB.setCosmetic(BB, IB)
      }
      playEmote(BB) {
        var IB;
        null === (IB = this.opened) || void 0 === IB || IB.playEmote(BB)
      }
      setOrbit(BB) {
        var IB;
        null === (IB = this.opened) || void 0 === IB || IB.setOrbit(BB)
      }
      resetCamera() {
        var BB;
        null === (BB = this.opened) || void 0 === BB || BB.resetCamera()
      }
      async untilDrawn(BB) {
        var IB;
        await this.ready, await (null === (IB = this.opened) || void 0 === IB ? void 0 : IB.untilDrawn(BB))
      }
      resize(BB, IB) {
        var ZB;
        this.size = {
          width: BB,
          height: IB
        }, null === (ZB = this.opened) || void 0 === ZB || ZB.resize(BB, IB)
      }
      close() {
        var BB;
        this.closed = !0, null === (BB = this.opened) || void 0 === BB || BB.close(), this.opened = null
      }
    }
    const nB = new class {
      constructor() {
        this.host = null, this.makeDefault = null
      }
      setHost(BB) {
        this.host = BB
      }
      setDefaultHost(BB) {
        this.makeDefault = BB
      }
      current() {
        if (null === this.host) {
          if (null === this.makeDefault) throw new Error("no preview host");
          this.host = this.makeDefault()
        }
        return this.host
      }
      openMob(BB) {
        return new kB(this.current().openMob(BB))
      }
      openPet(BB) {
        return new kB(this.current().openPet(BB))
      }
      openMobLineup(BB) {
        return new kB(this.current().openMobLineup(BB))
      }
      openCharacter(BB, IB) {
        return new cB(this.current().openCharacter(BB, IB))
      }
    }
  },
  5204: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => TB.j,
      d: () => JB,
      g: () => TB.o
    });
    var TB = ZB(5210);
    const JB = [!1, !0].flatMap((BB => ["terrain", "liquid", "model"].map((IB => ({
      strict: BB,
      program: IB
    })))))
  },
  39281: (BB, IB, ZB) => {
    ZB.r(IB), ZB.d(IB, {
      ShaderPackPage: () => kB,
      harnessShaderPackMode: () => zB,
      setHarnessUrlShaderPack: () => hB,
      shaderPackPage: () => nB
    });
    var TB = ZB(105),
      JB = ZB(36),
      oB = (ZB(3649), ZB(5204), ZB(3640)),
      GB = ZB(6808);
    ZB(6778);
    const vB = {
      status: "none"
    };
    class kB {
      constructor() {
        this.stored = null, this.compiling = null, this.pagePack = null, this.resolved = null
      }
      preload() {
        if (null === this.stored) {
          if ((0, oB.i)(TB.featureFlags.settings.canUseShaderPacks)) return this.stored = Promise.resolve(null), cB().then((BB => {
            BB && JB.m.removeItem(oB.e)
          })), this.stored;
          this.prefetchHint() && this.compiler().catch((() => {})), this.stored = this.readStored()
        }
        return this.stored
      }
      prefetchHint() {
        return (0, oB.g)(TB.featureFlags.settings.canUseShaderPacks)
      }
      async loadActive() {
        const BB = await this.load();
        return "active" === BB.status ? BB.pack : null
      }
      load() {
        return this.pagePack ??= this.read().catch((BB => (console.error("Failed to load the shader pack", BB), vB))).then((BB => (this.resolved ??= BB, BB))), this.pagePack
      }
      hasNone() {
        var BB;
        return "none" === (null === (BB = this.resolved) || void 0 === BB ? void 0 : BB.status)
      }
      block(BB) {
        this.resolved = {
          status: "blocked",
          messageKey: BB,
          variants: null
        }, this.pagePack = Promise.resolve(this.resolved)
      }
      compiler() {
        return this.compiling ??= Promise.all([ZB.e(78), ZB.e(136), ZB.e(142)]).then((() => ZB(41763))).then((BB => (BB.prefetchCompiler(), BB))), this.compiling
      }
      async readStored() {
        const BB = await cB();
        return BB && this.compiler().then((BB => BB.reconcileHint())).catch((BB => {
          console.error("Failed to correct the shader pack hint", BB)
        })), BB
      }
      async read() {
        const BB = await this.preload();
        return BB ? (await this.compiler()).compilePagePack(BB) : vB
      }
    }
    async function cB() {
      if (!(0, oB.j)(TB.featureFlags.settings.canUseShaderPacks)) return null;
      try {
        const BB = await (0, GB.i)(!0);
        return BB || JB.m.setItem(oB.e, !1), BB
      } catch (BB) {
        return console.error("Failed to read the stored shader pack", BB), JB.m.removeItem(oB.e), null
      }
    }
    const nB = new kB;

    function hB(BB, IB) {}

    function zB() {
      return null
    }
  },
  39328: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => hB,
      g: () => zB
    });
    var TB = ZB(168),
      JB = ZB(192),
      oB = ZB(1556),
      GB = ZB(3101),
      vB = ZB(1561),
      kB = ZB(36492),
      cB = ZB(696),
      nB = ZB(39281);

    function hB(BB) {
      (0, GB.reportClientError)("matchmake_failed", BB, TB.l[TB.l.SHADER_PACK])
    }
    async function zB(BB, IB) {
      var ZB;
      const TB = null === (ZB = await nB.shaderPackPage.preload()) || void 0 === ZB ? void 0 : ZB.listing,
        GB = (0, kB.c)();
      TB && null !== GB && await vB.c.reportShaderPackSession(BB, {
        packId: TB.packId,
        sourceHash: TB.sourceHash,
        game: (0, oB.g)(IB, JB.r, "other"),
        playSessionId: GB,
        visitSessionId: (0, cB.i)()
      })
    }
  },
  6808: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => JB,
      i: () => oB
    });
    var TB = ZB(36);
    const JB = "shaderPack";
    async function oB() {
      var BB;
      let IB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (BB = await TB.i.getItem(JB, IB)) && void 0 !== BB ? BB : null
    }
  },
  6778: (BB, IB, ZB) => {
    ZB.r(IB), ZB.d(IB, {
      loadShaderPackTextures: () => GB,
      shaderPackTextures: () => vB
    });
    var TB = ZB(5210);
    let JB = null,
      oB = null;

    function GB() {
      return oB ??= Promise.all([ZB.e(73), ZB.e(190)]).then((() => ZB(40534))).then((BB => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: IB,
          textureNameToIndex: ZB,
          textureAnimationData: oB
        } = BB;
        return JB ??= (0, TB.l)(ZB, oB, IB), JB
      })), oB
    }

    function vB() {
      if (null === JB) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return JB
    }
  },
  34126: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => oB
    });
    var TB = ZB(1125);

    function JB() {
      var BB, IB;
      return null !== (BB = null === (IB = screen.orientation) || void 0 === IB ? void 0 : IB.type) && void 0 !== BB ? BB : innerWidth > innerHeight ? "landscape" : "portrait"
    }
    const oB = new class {
      constructor() {
        this.holding = !1, this.heldOrientation = "", this.releaseTimer = void 0, this.longHoldTimer = void 0, this.resizers = new Set, this.releaseWhenShown = () => {
          document.hidden || (document.removeEventListener("visibilitychange", this.releaseWhenShown), this.release())
        }
      }
      isHeld() {
        return this.holding && JB() !== this.heldOrientation && (this.holding = !1), this.holding
      }
      hold() {
        this.heldOrientation = JB(), this.holding = !0, clearTimeout(this.releaseTimer), document.removeEventListener("visibilitychange", this.releaseWhenShown), clearTimeout(this.longHoldTimer), this.longHoldTimer = setTimeout((() => {
          this.holding && (0, TB.Og)(new Error("Game view size held for 60 s"))
        }), 6e4)
      }
      release() {
        clearTimeout(this.longHoldTimer), this.releaseTimer = setTimeout((() => {
          if (document.hidden) document.addEventListener("visibilitychange", this.releaseWhenShown);
          else {
            this.holding = !1;
            for (const BB of this.resizers) BB()
          }
        }), 1e3)
      }
      heldSizer(BB) {
        let IB = !1;
        return () => {
          if (IB && this.isHeld()) return null;
          const ZB = BB();
          return IB ||= null !== ZB, ZB
        }
      }
      onRelease(BB) {
        return this.resizers.add(BB), () => {
          this.resizers.delete(BB)
        }
      }
    }
  },
  39310: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => JB
    });
    let TB = !1;
    async function JB(BB, IB) {
      if (!TB) {
        TB = !0;
        try {
          const [{
            reloadBloxd: TB
          }, {
            NotificationProvider: JB
          }] = await Promise.all([Promise.resolve().then((() => ZB(1805))), Promise.resolve().then((() => ZB(1403)))]);
          if (!BB || !0 === await JB.showPromptPopup({
              title: "Unsaved changes",
              subtitle: "Exit and lose your unsaved changes?",
              confirmText: "Exit",
              destructive: !0,
              cancelText: "Cancel",
              unlockPointerKey: "replayExitUnsavedChanges"
            }).getResult()) return void TB(IB)
        } catch (JB) {
          console.error("Leaving the replay failed", JB)
        }
        TB = !1
      }
    }
  },
  40999: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => vB,
      h: () => kB
    });
    var TB = ZB(1821);
    const JB = 33177600,
      oB = 3e4;
    let GB = !1;

    function vB(BB, IB, ZB) {
      let TB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const {
        scale: vB = 1,
        type: kB = "image/png",
        quality: cB
      } = TB;
      if (!BB.drawing()) return Promise.reject(new Error("Screenshots need a game to be running"));
      if (GB) return Promise.reject(new Error("A screenshot is already being taken"));
      GB = !0;
      const nB = function(BB, IB, ZB) {
        const TB = Math.max(1, BB),
          oB = Math.max(1, IB),
          GB = Math.min(1, ZB / Math.max(TB, oB), Math.sqrt(JB / (TB * oB)));
        return {
          width: Math.max(1, Math.floor(TB * GB)),
          height: Math.max(1, Math.floor(oB * GB))
        }
      }(IB, ZB, BB.maxTextureSize);
      return BB.resize(nB.width, nB.height, vB * nB.width / Math.max(1, IB)), new Promise(((IB, ZB) => {
        let TB, JB = 2,
          vB = null;
        const nB = () => {
          var IB;
          GB = !1, null === (IB = vB) || void 0 === IB || IB(), clearTimeout(TB), BB.restoreSize()
        };
        TB = setTimeout((() => {
          nB(), ZB(new Error("No frame was drawn to capture"))
        }), oB), vB = BB.onFrameDrawn((() => {
          if (JB--, JB > 0) return;
          const {
            canvas: TB
          } = BB, oB = {
            width: TB.width,
            height: TB.height
          };
          try {
            TB.toBlob((BB => {
              BB ? IB({
                blob: BB,
                ...oB
              }) : ZB(new Error("The canvas gave no image"))
            }), kB, cB)
          } catch (GB) {
            ZB(GB)
          } finally {
            nB()
          }
        }))
      }))
    }
    async function kB(BB, IB, ZB) {
      try {
        const JB = await vB(BB, IB, ZB);
        (0, TB.d)(JB.blob, `bloxd-screenshot-${JB.width}x${JB.height}-${Date.now()}.png`)
      } catch (JB) {
        console.error("Error taking screenshot:", JB)
      }
    }
  },
  37757: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => TB
    });
    const TB = {
      noaReady: null,
      chunkRequested: null,
      beforeServerListeners: null,
      wasmNetReady: null
    }
  },
  39233: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => GB
    });
    var TB = ZB(342),
      JB = ZB(140),
      oB = ZB(36);

    function GB() {
      oB.m.setItem(TB.Rb, oB.m.getItem(TB.Rb) + 1), (0, JB.is99NightsCrazyGamesBundle)() && oB.m.setItem(TB.Nb, oB.m.getItem(TB.Nb) + 1)
    }
  },
  40715: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => vB
    });
    var TB = ZB(39701);

    function JB(BB) {
      return {
        current: () => BB,
        watch: () => () => {}
      }
    }

    function oB() {}
    const GB = Object.freeze([0, 0, 0]),
      vB = {
        states: {
          health: JB({
            health: null,
            maxHealth: null,
            shield: null,
            maxShield: null
          }),
          inventory: JB({
            player: [],
            chestOrCreative: [],
            chest: null,
            creative: !1,
            selectedSlot: 0,
            freeSlots: 0
          }),
          hotbar: JB({
            items: [],
            ammo: 0,
            selectedSlot: null
          }),
          stationItems: JB({
            enchantable: {},
            salvageable: {}
          }),
          itemInfo: JB({}),
          creativeVisibility: JB({
            publicLobby: !1,
            shownInGame: {}
          }),
          aura: JB(null),
          heldItemAim: JB({
            gun: !1,
            aimable: !1,
            chargeName: null
          }),
          crouching: JB(!1),
          gliderBoostFuel: JB(0),
          flight: JB({
            canFly: !1,
            flying: !1
          }),
          crafting: JB({
            focus: null,
            recipes: [],
            detail: null
          }),
          players: JB({
            ids: [],
            byId: {},
            localId: null
          }),
          lobbyLeaderboardRows: JB({}),
          fullInventory: JB(!1),
          crosshairTarget: JB({
            interactPrompt: null,
            blockText: null,
            neededTool: null
          }),
          localPlayerAlive: JB(!0),
          freeCamera: JB({
            allowed: !1,
            movesFly: !1
          }),
          replay: JB(null),
          replayEdits: JB(null),
          replayRecorder: JB({
            recording: !1,
            clipping: !1,
            hasClipBuffer: !1,
            seconds: 0
          }),
          replayVideoExporting: JB(!1)
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
          selectHotbarSlot: oB,
          removeInventoryItem: () => !1,
          swapInventorySlots: () => !1,
          moveInventoryItem: () => !1,
          quickMoveInventoryItem: () => null,
          closeChest: oB,
          setInventoryOpen: oB,
          changeIronChestPasskey: oB,
          dragReplayCamera: oB,
          applyTemporaryThirdPerson: oB,
          holdEmoteWheel: oB,
          recordFlyingMiddleText: oB,
          focusCrafting: oB,
          craftRecipe: () => ({
            Hn: 0,
            Dv: null,
            amountAddedToSlot: 0
          }),
          salvageItem: () => !1,
          enchantItem: oB,
          setShopOpen: oB,
          buyShopItem: oB,
          lobbyManage: oB,
          sendChatMessage: oB,
          ignorePlayer: oB,
          reportPlayer: oB,
          reportWorldCodeChat: oB,
          requestDiscordReportKey: oB,
          reportLobbyOrGame: oB,
          playEmote: oB,
          updateMyCosmetic: oB,
          writeOnBoard: oB,
          writeBook: oB,
          writeNameTag: oB,
          setCustomLobbyBlock: oB,
          openIronChest: oB,
          sendCodeCollab: oB,
          clickCodeBlock: oB,
          bindCustomButtonKeys: oB,
          pressCustomButton: oB,
          moveReplayFreecam: oB,
          holdReplayFreecamVertical: oB,
          respawn: oB,
          wakeUp: oB,
          requestLeaderboard: oB,
          completeTask: oB,
          setServerCookie: oB,
          answerUiRequest: oB,
          chooseRewardedAd: oB,
          setCameraZoom: oB,
          setFreeCameraMovesFly: oB,
          setBlockHighlight: oB,
          setCrosshairInteractPrompt: oB,
          setLookSensitivity: oB,
          replayAction: oB,
          setReplayPlaying: oB,
          seekReplay: oB,
          setReplayCameraMode: oB,
          syncReplayCameraMode: oB,
          setReplayCameraKeyframe: oB,
          moveReplayCameraKeyframe: oB,
          deleteReplayCameraKeyframes: oB,
          setReplayPlaybackMark: oB,
          cropReplay: () => !1,
          holdReplayForShaderPackFailure: oB,
          exportReplayVideo: oB,
          toggleRecording: oB,
          saveClip: oB,
          setRecorderPrefs: oB,
          setReplayViewerOpen: oB
        },
        queries: {
          enchantingOffer: () => ({
            perks: [],
            options: []
          }),
          worldCodeAiChunk: () => TB.d,
          worldCodeAiGameState: () => TB.g
        },
        lookups: {
          localPos: () => GB,
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
  40991: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => GB,
      c: () => oB
    });
    var TB = ZB(2236),
      JB = ZB(1058);

    function oB(BB, IB) {
      return null !== BB.gameSource && (0, TB.m)(IB, BB.gameSource)
    }

    function GB(BB, IB) {
      if (null === BB.gameSource || "" === BB.gameSource || null === IB) return !0;
      const ZB = (0, JB.i)(IB) ? (0, JB.l)(IB) : null;
      return null !== ZB && oB(BB, ZB)
    }
  },
  40968: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => vB
    });
    var TB = ZB(655),
      JB = ZB(40971),
      oB = ZB(40840);
    async function GB(BB) {
      const IB = await (0, JB.j)({
        Helmet: ZB(38013),
        Chestplate: ZB(38019),
        Gauntlets: ZB(38040),
        Leggings: ZB(38027),
        Boots: ZB(38034)
      } [TB.b[BB]]);
      try {
        return (0, oB.r)(IB)
      } finally {
        IB.close()
      }
    }
    const vB = new class {
      constructor() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : GB,
          IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : JB.o;
        this.decode = BB, this.register = IB, this.decoded = new Map
      }
      warm() {
        for (let BB = 0; BB < TB.b.length; BB++) this.part(BB).catch((IB => {
          console.warn(`The grayscale armour ${TB.b[BB]} image didn't decode ahead of use`, IB)
        }))
      }
      async load(BB, IB) {
        const {
          width: ZB,
          height: oB,
          pixels: GB
        } = await this.part(BB), vB = new ImageData(function(BB, IB) {
          const ZB = new Uint8ClampedArray(BB.length);
          for (let TB = 0; TB < BB.length; TB += 4) ZB[TB] = Math.round(BB[TB] * IB[0] / 255), ZB[TB + 1] = Math.round(BB[TB + 1] * IB[1] / 255), ZB[TB + 2] = Math.round(BB[TB + 2] * IB[2] / 255), ZB[TB + 3] = BB[TB + 3];
          return ZB
        }(GB, function(BB) {
          return [BB >>> 16 & 255, BB >>> 8 & 255, 255 & BB]
        }(IB)), ZB, oB);
        let kB;
        try {
          kB = await createImageBitmap(vB, {
            premultiplyAlpha: "none",
            colorSpaceConversion: "none"
          })
        } catch (cB) {
          throw new JB.c("decode", `grayscale armour ${TB.b[BB]}`, {
            cause: cB
          })
        }
        return {
          id: this.register(kB),
          width: ZB,
          height: oB
        }
      }
      part(BB) {
        const IB = this.decoded.get(BB);
        if (void 0 !== IB) return IB;
        const ZB = this.decode(BB).catch((IB => {
          throw this.decoded.delete(BB), IB instanceof JB.c ? IB : new JB.c("decode", `grayscale armour ${TB.b[BB]}`, {
            cause: IB
          })
        }));
        return this.decoded.set(BB, ZB), ZB
      }
    }
  },
  40965: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => GB,
      h: () => qB,
      i: () => nB,
      j: () => hB,
      l: () => gB
    });
    var TB = ZB(40829),
      JB = ZB(40968),
      oB = ZB(40971);
    const GB = 396,
      vB = 1,
      kB = 2,
      cB = 3,
      nB = {
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
      hB = {
        File: 0,
        Item: 1
      },
      zB = 0,
      FB = 1,
      NB = 2;

    function gB(BB) {
      const IB = (0, TB.m)();
      IB.catch((() => {}));
      let JB = null;
      return {
        glbUrl: BB,
        lifeformAtlasUrl: async BB => (await IB).lifeformAtlasUrl(BB),
        armourAtlasUrl: async () => (await ZB.e(207).then((() => ZB(34276)))).armourAtlasUrl,
        capeUrl: async BB => (await IB).capeUrl(BB),
        attachmentImageUrl: async BB => (await IB).attachmentImageUrl(BB),
        blockImageUrl: async BB => (await IB).blockImageUrl(BB),
        groupAtlasUrl: async BB => (await IB).groupAtlasUrl(BB),
        particleTextureUrl: async BB => (await IB).particleTextureUrl(BB),
        particleItemUrl: async BB => (JB ??= ZB.e(38).then((() => ZB(51127))).catch((BB => {
          throw JB = null, BB
        })), (await JB).particleItemUrl(BB))
      }
    }
    class qB {
      constructor(BB, IB) {
        var ZB, GB, vB, kB;
        let cB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        this.sources = BB, this.onFailure = IB, this.loading = new Map, this.glbImages = new Map, this.glbWrittenImages = new Map, this.glbTakenCount = new Map, this.answered = new Map, this.ready = [], this.load = void 0, this.release = void 0, this.fetchFile = void 0, this.greyscaleArmour = void 0, this.WN = !1, this.load = null !== (ZB = cB.load) && void 0 !== ZB ? ZB : (BB, IB) => (0, oB.k)(BB, cB.fetchImage, IB), this.release = null !== (GB = cB.release) && void 0 !== GB ? GB : oB.s, this.fetchFile = null !== (vB = cB.fetchFile) && void 0 !== vB ? vB : BB => (0, TB.i)(BB), this.greyscaleArmour = null !== (kB = cB.greyscaleArmour) && void 0 !== kB ? kB : JB.c
      }
      get waiting() {
        return this.ready.length
      }
      get inFlight() {
        return this.loading.size
      }
      glbWritten(BB, IB) {
        this.glbWrittenImages.set(BB, sB(IB))
      }
      glbTaken(BB, IB) {
        const ZB = this.glbWrittenImages.get(BB);
        this.glbWrittenImages.delete(BB), IB && this.setGlbImages(BB, void 0 !== ZB && ZB.length > 0 ? ZB : void 0)
      }
      setGlbImages(BB, IB) {
        var ZB;
        this.glbTakenCount.set(BB, (null !== (ZB = this.glbTakenCount.get(BB)) && void 0 !== ZB ? ZB : 0) + 1), void 0 === IB ? this.glbImages.delete(BB) : this.glbImages.set(BB, IB);
        const TB = [];
        for (const {
            key: JB
          }
          of this.loading.values()) JB.kind === nB.Glb && JB.word === BB && TB.push(JB);
        for (let JB = this.ready.length - 1; JB >= 0; JB--) {
          const {
            key: IB,
            id: ZB
          } = this.ready[JB];
          IB.kind === nB.Glb && IB.word === BB && (this.ready.splice(JB, 1), null !== ZB && (this.answered.delete(ZB), this.release(ZB)), TB.push(IB))
        }
        this.loadAgain(TB)
      }
      onEvent(BB) {
        if (this.WN) return;
        const IB = new DataView(BB.buffer, BB.byteOffset, BB.byteLength);
        for (let ZB = 0; ZB + 8 <= BB.byteLength; ZB += 8) {
          const BB = IB.getUint8(ZB),
            TB = IB.getUint32(ZB + 4, !0);
          if (BB === cB) {
            this.answered.delete(TB), this.release(TB);
            continue
          }
          const JB = {
            kind: IB.getUint8(ZB + 1),
            index: IB.getUint8(ZB + 2),
            word: TB
          };
          BB === vB ? this.want(JB) : BB === kB && this.loading.delete(yB(JB))
        }
      }
      reload(BB, IB) {
        const ZB = ZB => BB.includes(ZB.kind) && (void 0 === IB || IB(ZB)),
          TB = new Map;
        for (const JB of this.answered.values()) ZB(JB) && TB.set(yB(JB), JB);
        for (const [JB, {
            key: oB
          }] of this.loading) ZB(oB) && TB.set(JB, oB);
        this.loadAgain(TB.values())
      }
      loadAgain(BB) {
        for (const IB of BB) this.loading.delete(yB(IB)), this.want(IB)
      }
      drain(BB) {
        if (null !== BB)
          for (; this.ready.length > 0;) {
            if (!BB(GB, 0, this.ready[0].record)) return;
            this.ready.shift()
          }
      }
      dispose() {
        this.WN = !0, this.loading.clear(), this.ready.length = 0;
        for (const BB of this.answered.keys()) this.release(BB);
        this.answered.clear()
      }
      want(BB) {
        const IB = yB(BB);
        if (this.loading.has(IB)) return;
        const ZB = {
          key: BB
        };
        this.loading.set(IB, ZB), this.loadKey(BB).then((TB => {
          this.WN || this.loading.get(IB) !== ZB ? this.release(TB.id) : (this.loading.delete(IB), this.answered.set(TB.id, BB), this.ready.push({
            record: WB(BB, zB, TB),
            key: BB,
            id: TB.id
          }))
        }), (TB => {
          if (this.WN || this.loading.get(IB) !== ZB) return;
          this.loading.delete(IB), this.onFailure({
            key: BB,
            error: TB
          });
          const JB = TB instanceof oB.c && "decode" === TB.stage ? FB : NB;
          this.ready.push({
            record: WB(BB, JB, null),
            key: BB,
            id: null
          })
        }))
      }
      async loadKey(BB) {
        switch (BB.kind) {
          case nB.Glb:
            return this.load(await this.glbImage(BB), "none");
          case nB.LifeformAtlas:
            return this.load(UB(await this.sources.lifeformAtlasUrl(BB.word), BB), "none");
          case nB.ArmourAtlas:
            return this.load(UB(await this.sources.armourAtlasUrl(), BB), "none");
          case nB.Cape:
            return this.load(UB(await this.sources.capeUrl(BB.word), BB), "none");
          case nB.AttachmentImage:
            return this.load(UB(await this.sources.attachmentImageUrl(BB.word), BB), "none");
          case nB.GroupAtlas:
            return this.load(UB(await this.sources.groupAtlasUrl(BB.word), BB), "none");
          case nB.BlockImage:
            return this.load(UB(await this.sources.blockImageUrl(BB.word), BB), "none");
          case nB.Particle: {
            const IB = await (BB.index === hB.Item ? this.sources.particleItemUrl(BB.word) : this.sources.particleTextureUrl(BB.word));
            return this.load(UB(IB, BB), "flipY")
          }
          case nB.GreyscaleArmour:
            return this.greyscaleArmour.load(BB.index, BB.word);
          default:
            throw new oB.c("fetch", `image kind ${BB.kind}`, {
              cause: null
            })
        }
      }
      async glbImage(BB) {
        var IB;
        let ZB = this.glbImages.get(BB.word);
        if (void 0 === ZB) {
          const IB = this.glbTakenCount.get(BB.word),
            TB = UB(await this.sources.glbUrl(BB.word), BB);
          try {
            ZB = sB(await this.fetchFile(TB))
          } catch (JB) {
            throw new oB.c("fetch", TB, {
              cause: JB
            })
          }
          this.glbTakenCount.get(BB.word) === IB && this.glbImages.set(BB.word, ZB)
        }
        const TB = null === (IB = ZB) || void 0 === IB ? void 0 : IB[BB.index];
        if (!TB) throw new oB.c("decode", `image ${BB.index} of file ${2147483647&BB.word}`, {
          cause: null
        });
        return TB
      }
    }

    function yB(BB) {
      let {
        kind: IB,
        index: ZB,
        word: TB
      } = BB;
      return `${IB}:${ZB}:${TB}`
    }

    function UB(BB, IB) {
      if (null === BB) throw new oB.c("fetch", `no URL for image ${yB(IB)}`, {
        cause: null
      });
      return BB
    }

    function WB(BB, IB, ZB) {
      var TB, JB, oB;
      const GB = new Uint8Array(16),
        vB = new DataView(GB.buffer);
      return vB.setUint8(0, BB.kind), vB.setUint8(1, BB.index), vB.setUint8(2, IB), vB.setUint32(4, BB.word, !0), vB.setUint32(8, null !== (TB = null === ZB || void 0 === ZB ? void 0 : ZB.id) && void 0 !== TB ? TB : 0, !0), vB.setUint16(12, Math.min(null !== (JB = null === ZB || void 0 === ZB ? void 0 : ZB.width) && void 0 !== JB ? JB : 0, 65535), !0), vB.setUint16(14, Math.min(null !== (oB = null === ZB || void 0 === ZB ? void 0 : ZB.height) && void 0 !== oB ? oB : 0, 65535), !0), GB
    }
    const dB = 1179937895,
      CB = 1313821514,
      QB = 5130562;

    function sB(BB) {
      var IB;
      const ZB = new DataView(BB.buffer, BB.byteOffset, BB.byteLength);
      if (BB.byteLength < 20 || ZB.getUint32(0, !0) !== dB || ZB.getUint32(16, !0) !== CB) return [];
      let TB, JB = 20 + ZB.getUint32(12, !0);
      try {
        TB = JSON.parse((new TextDecoder).decode(BB.subarray(20, JB)))
      } catch {
        return []
      }
      for (; JB + 8 <= BB.byteLength && ZB.getUint32(JB + 4, !0) !== QB;) JB += 8 + ZB.getUint32(JB, !0);
      const oB = null !== (IB = TB.images) && void 0 !== IB ? IB : [];
      if (0 === oB.length || JB + 8 > BB.byteLength) return oB.map((() => null));
      const GB = BB.subarray(JB + 8, Math.min(BB.byteLength, JB + 8 + ZB.getUint32(JB, !0)));
      return oB.map((BB => {
        var IB, ZB, JB;
        const oB = void 0 === BB.bufferView || null === (IB = TB.bufferViews) || void 0 === IB ? void 0 : IB[BB.bufferView];
        if (!oB || 0 !== (null !== (ZB = oB.buffer) && void 0 !== ZB ? ZB : 0) || void 0 === oB.byteLength) return null;
        const vB = null !== (JB = oB.byteOffset) && void 0 !== JB ? JB : 0,
          kB = vB + oB.byteLength;
        return kB <= GB.byteLength ? GB.slice(vB, kB) : null
      }))
    }
  },
  40721: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => GB,
      g: () => oB,
      j: () => JB
    });
    let TB = null;

    function JB(BB) {
      TB = BB
    }

    function oB(BB) {
      TB === BB && (TB = null)
    }

    function GB() {
      var BB;
      null === (BB = TB) || void 0 === BB || BB()
    }
  },
  36602: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => nB,
      f: () => zB,
      j: () => yB,
      k: () => cB
    });
    var TB = ZB(20),
      JB = ZB(2481),
      oB = ZB(2489),
      GB = ZB(2497),
      vB = ZB(2590),
      kB = ZB(24);

    function cB(BB, IB) {
      return (!(0, GB.d)() || 0 === BB && 0 === IB) && (0, oB.A)(JB.d.Joystick, 0, BB, IB, 0)
    }
    const nB = {
      Action1: 1,
      Action2: 2,
      Action3: 3,
      Attack: 4,
      Use: 5,
      Interact: 6,
      Boost: 7
    };

    function hB(BB) {
      return BB.classList.contains("TouchKeyHit") && FB() ? null : BB.firstElementChild
    }

    function zB(BB) {
      return BB.classList.contains("TouchKeyHit") && !BB.classList.contains("CanvasZone") ? {
        whole: !FB(),
        keyBox: null
      } : {
        whole: !1,
        keyBox: NB(hB(BB))
      }
    }

    function FB() {
      return document.documentElement.classList.contains(vB.j)
    }

    function NB(BB) {
      return !(BB instanceof HTMLElement) || BB.offsetWidth <= 0 || BB.offsetHeight <= 0 ? null : {
        width: BB.offsetWidth,
        height: BB.offsetHeight
      }
    }

    function gB(BB, IB) {
      const ZB = BB => Math.min(65535, Math.round(4 * BB));
      return (ZB(BB) | ZB(IB) << 16) >>> 0
    }

    function qB(BB) {
      return {
        x: BB.left + BB.width / 2,
        y: BB.top + BB.height / 2,
        radius: Math.min(BB.width, BB.height) / 2
      }
    }
    const yB = new class {
      constructor(BB) {
        this.write = BB, this.elements = new Map, this.canvasLeft = 0, this.canvasTop = 0
      }
      set(BB, IB) {
        let ZB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        IB ? this.elements.set(BB, {
          element: IB,
          hidden: ZB
        }) : this.elements.delete(BB), this.measureOne(BB)
      }
      measure() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
          left: this.canvasLeft,
          top: this.canvasTop
        };
        this.canvasLeft = BB.left, this.canvasTop = BB.top;
        for (const IB of this.elements.keys()) this.measureOne(IB)
      }
      hitZone(BB, IB) {
        let ZB = null,
          TB = 1;
        for (const JB of this.elements.keys()) {
          const oB = this.shown(JB);
          if (!oB) continue;
          const {
            rect: GB,
            element: vB
          } = oB, kB = qB(GB), cB = Math.max(0, GB.width / 2 - kB.radius), nB = Math.max(0, GB.height / 2 - kB.radius), zB = Math.max(0, Math.abs(BB - kB.x) - cB), FB = Math.max(0, Math.abs(IB - kB.y) - nB), gB = vB.firstElementChild;
          let yB = Math.hypot(zB, FB) / kB.radius;
          const UB = NB(hB(vB));
          UB && (yB = Math.min(yB, Math.max(2 * Math.abs(BB - kB.x) / UB.width, 2 * Math.abs(IB - kB.y) / UB.height))), yB < TB && (ZB = {
            code: JB,
            element: vB,
            key: gB,
            ...kB
          }, TB = yB)
        }
        return ZB
      }
      measureOne(BB) {
        const IB = this.shown(BB);
        if (!IB) return void this.write(JB.d.TouchZone, BB, 0, 0, 0);
        const {
          rect: ZB,
          element: TB
        } = IB, oB = qB(ZB);
        this.write(JB.d.TouchZone, BB, oB.x - this.canvasLeft, oB.y - this.canvasTop, gB(ZB.width, ZB.height));
        const GB = NB(hB(TB));
        this.write(JB.d.TouchZone, 256 | BB, 0, 0, GB ? gB(GB.width, GB.height) : 0)
      }
      shown(BB) {
        const IB = this.elements.get(BB),
          ZB = TB.d.get("worldPanelHud");
        if (!IB || IB.hidden || "none" === ZB) return null;
        const JB = IB.element.getBoundingClientRect();
        return JB.width <= 0 || JB.height <= 0 ? null : {
          rect: JB,
          element: IB.element
        }
      }
    }(oB.A);
    (0, kB.p)(vB.e, (() => {
      yB.measure()
    }))
  },
  40746: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => kB,
      e: () => cB
    });
    var TB = ZB(40865),
      JB = ZB(39119),
      oB = ZB(36485),
      GB = ZB(40751),
      vB = ZB(40733);
    const kB = TB.b.timeForPlayerToConnect - 1e4;
    async function cB(BB, IB, ZB, TB) {
      let kB;
      try {
        kB = await BB.getTrafficCode()
      } catch (NB) {
        throw console.error("[bloxd-wasm-client] could not get a traffic code", NB), new vB.z(NB)
      }
      const {
        gameNameWithVariation: cB,
        lobbyName: nB
      } = IB, hB = () => {
        const IB = (0, oB.d)(BB, cB, nB, kB, (BB => {
          var IB;
          return null !== (IB = null === ZB || void 0 === ZB ? void 0 : ZB.isUsingCustomGameTexturePack(BB)) && void 0 !== IB && IB
        }));
        IB.joinOptions.wasmClient = !0;
        const JB = (0, GB.I)();
        return null !== JB && (IB.joinOptions.renderBackend = JB), IB.joinOptions.joinAdHold = TB, IB
      }, {
        roomName: zB,
        joinOptions: FB
      } = hB();
      return {
        endpoint: IB.endpoint,
        roomName: zB,
        joinOptions: FB,
        session: {
          gameNameWithVariation: cB,
          lobbyName: nB,
          playerDbId: BB.whamm
        },
        optionsAfterRefusal: async IB => await (0, JB.e)(BB, IB) ? hB().joinOptions : null
      }
    }
  },
  40976: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => nB,
      f: () => oB,
      j: () => hB,
      n: () => GB
    });
    var TB = ZB(40965),
      JB = ZB(40829);
    const oB = new class {
      constructor() {
        this.page = null, this.session = void 0, this.follower = null, this.isWanted = !1, this.listeners = new Set, this.pageListeners = new Set, this.wantedListeners = new Set
      }
      get current() {
        return void 0 === this.session ? this.page : this.session
      }
      setPageFiles(BB) {
        this.change((() => {
          this.page = BB
        }))
      }
      setSessionFiles(BB) {
        const IB = void 0 !== this.session && void 0 === BB;
        if (this.change((() => {
            this.session = BB
          })), IB)
          for (const ZB of [...this.pageListeners]) ZB()
      }
      showsPage() {
        return void 0 === this.session
      }
      onPageShown(BB) {
        return this.pageListeners.add(BB), () => {
          this.pageListeners.delete(BB)
        }
      }
      setFollower(BB) {
        this.follower = BB, this.startFollower()
      }
      wanted() {
        this.isWanted = !0;
        for (const BB of [...this.wantedListeners]) BB();
        this.startFollower()
      }
      onWanted(BB) {
        return this.wantedListeners.add(BB), () => {
          this.wantedListeners.delete(BB)
        }
      }
      onChange(BB) {
        return this.listeners.add(BB), () => {
          this.listeners.delete(BB)
        }
      }
      startFollower() {
        const BB = this.follower;
        this.isWanted && null !== BB && (this.follower = null, BB((() => {
          this.follower = BB
        })))
      }
      change(BB) {
        const IB = this.current;
        if (BB(), this.current !== IB)
          for (const ZB of this.listeners) ZB()
      }
    };

    function GB(BB, IB) {
      return {
        ...BB,
        armourAtlasUrl: () => {
          var ZB, TB;
          return null !== (ZB = null === (TB = IB()) || void 0 === TB ? void 0 : TB.armourAtlasUrl()) && void 0 !== ZB ? ZB : BB.armourAtlasUrl()
        },
        lifeformAtlasUrl: ZB => kB(IB(), (BB => BB.LIFEFORM_ATLAS_PATHS[ZB]), (() => BB.lifeformAtlasUrl(ZB))),
        groupAtlasUrl: ZB => kB(IB(), (BB => BB.GROUP_ATLAS_PATHS[ZB]), (() => BB.groupAtlasUrl(ZB))),
        particleItemUrl: TB => cB(IB(), (async () => {
          const BB = await ZB.e(38).then((() => ZB(51127))).catch((() => null));
          return (null === BB || void 0 === BB ? void 0 : BB.particleItemSprite(TB)) || null
        }), (() => BB.particleItemUrl(TB))),
        blockImageUrl: ZB => cB(IB(), (async () => {
          var BB, IB;
          return null !== (BB = null === (IB = await vB()) || void 0 === IB ? void 0 : IB.blockImageName(ZB)) && void 0 !== BB ? BB : null
        }), (() => BB.blockImageUrl(ZB)))
      }
    }

    function vB() {
      return (0, JB.m)().catch((() => null))
    }

    function kB(BB, IB, ZB) {
      return cB(BB, (async () => {
        var BB;
        const ZB = await vB(),
          TB = null === ZB ? null : IB(ZB),
          JB = null !== (BB = null === TB || void 0 === TB ? void 0 : TB.slice(TB.lastIndexOf("/") + 1)) && void 0 !== BB ? BB : null;
        return "Player_Atlas" === JB ? null : JB
      }), ZB)
    }
    async function cB(BB, IB, ZB) {
      if (null !== BB) {
        const ZB = await IB(),
          TB = null === ZB ? null : BB.textureUrl(ZB);
        if (null !== TB) return TB
      }
      return ZB()
    }
    const nB = 0;

    function hB(BB) {
      const IB = [TB.i.ArmourAtlas, TB.i.LifeformAtlas, TB.i.GroupAtlas, TB.i.BlockImage, TB.i.Particle];
      BB.reload(IB, (BB => {
        switch (BB.kind) {
          case TB.i.Particle:
            return BB.index === TB.j.Item;
          case TB.i.LifeformAtlas:
            return BB.word !== nB;
          default:
            return !0
        }
      }))
    }
  },
  40870: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => TB,
      h: () => vB,
      l: () => GB,
      p: () => JB,
      s: () => oB
    });
    const TB = 1e3;

    function JB() {
      kB((() => {
        window.location.reload()
      }))
    }

    function oB() {
      return new Promise((() => {}))
    }

    function GB(BB) {
      kB((() => {
        window.location.replace(BB(window.location.href))
      }))
    }

    function vB(BB) {
      Promise.resolve().then((() => ZB(118))).then((IB => {
        let {
          currentUrl: ZB
        } = IB;
        GB((() => ZB.mergeSearchParamsInto(BB)))
      }), (() => {
        GB((() => BB))
      }))
    }

    function kB(BB) {
      null !== window.onbeforeunload ? Promise.resolve().then((() => ZB(1805))).then((IB => {
        let {
          prepareForUnloadWithoutConfirmation: ZB
        } = IB;
        try {
          ZB()
        } catch (TB) {
          console.warn("[bloxd-wasm-client] prepareForUnloadWithoutConfirmation threw: leaving plainly", TB), window.onbeforeunload = null
        }
        BB()
      }), (() => {
        window.onbeforeunload = null, BB()
      })) : BB()
    }
  },
  5226: (BB, IB, ZB) => {
    function TB(BB, IB) {
      return JB(BB, IB)
    }

    function JB(BB, IB) {
      if (BB === IB) return !0;
      if ("object" !== typeof BB || "object" !== typeof IB || null === BB || null === IB || Array.isArray(BB) !== Array.isArray(IB)) return !1;
      const ZB = BB,
        TB = IB,
        oB = Object.keys(ZB);
      return oB.length === Object.keys(TB).length && oB.every((BB => Object.prototype.hasOwnProperty.call(TB, BB) && JB(ZB[BB], TB[BB])))
    }
    ZB.d(IB, {
      d: () => TB
    })
  },
  40935: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => QB,
      h: () => dB,
      k: () => gB,
      l: () => NB
    });
    var TB = ZB(1878),
      JB = ZB(1261),
      oB = ZB(39110),
      GB = ZB(36516),
      vB = ZB(39129),
      kB = ZB(40733);
    const cB = {
        "X-Requested-With": "XMLHtttpRequest"
      },
      nB = 3,
      hB = [500, 1500];

    function zB(BB) {
      const IB = new URL(BB);
      return {
        secure: "https:" === IB.protocol || "wss:" === IB.protocol,
        host: IB.host,
        pathname: IB.pathname.replace(/\/+$/, ""),
        search: IB.searchParams.toString()
      }
    }

    function FB(BB, IB, ZB) {
      const {
        secure: TB,
        host: JB,
        pathname: oB,
        search: GB
      } = zB(BB);
      return `${TB?"https":"http"}://${JB}${oB}/matchmake/${IB}/${encodeURIComponent(ZB)}${GB?`?${GB}`:""}`
    }

    function NB(BB, IB) {
      var ZB;
      const TB = null !== (ZB = IB.protocol) && void 0 !== ZB ? ZB : "ws";
      if ("ws" !== TB) throw new Error(`seat reservation asks for the ${TB} transport`);
      const {
        secure: JB,
        host: oB,
        pathname: GB,
        search: vB
      } = zB(BB), kB = new URLSearchParams(vB);
      kB.append("sessionId", IB.sessionId), IB.reconnectionToken && kB.append("reconnectionToken", IB.reconnectionToken);
      return `${JB?"wss":"ws"}://${IB.room.publicAddress||`${oB}${GB}`}/${IB.room.processId}/${IB.room.roomId}?${kB.toString()}`
    }
    async function gB(BB, IB, ZB) {
      var vB;
      let cB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const zB = null !== (vB = cB.sleep) && void 0 !== vB ? vB : TB.b,
        NB = new JB.c(cB.signal),
        gB = new GB.c((() => {
          (0, JB.i)(NB.controller, new GB.f("seat"))
        })),
        {
          signal: WB
        } = NB;
      try {
        const TB = await (0, oB.h)((() => async function(BB, IB, ZB, TB) {
          var oB;
          const {
            signal: GB,
            sleep: vB
          } = TB, cB = FB(BB, "joinOrCreate", IB), zB = JSON.stringify(ZB);
          let NB = null;
          for (let FB = 0; FB < nB; FB++) {
            var gB;
            if (FB > 0) await vB(null !== (gB = hB[FB - 1]) && void 0 !== gB ? gB : 1500, GB);
            let BB;
            (0, JB.o)(GB);
            try {
              BB = await yB(cB, zB, TB)
            } catch (WB) {
              (0, JB.o)(GB), NB = qB(WB);
              continue
            }
            const {
              response: IB,
              answer: ZB,
              refusal: oB,
              lost: nB
            } = BB;
            if (null === nB) {
              if (null !== oB) throw UB(oB, ZB);
              if (IB.ok && null !== ZB && sB(ZB)) return ZB;
              NB = new kB.v(`seat request answered HTTP ${IB.status}${null===ZB?" without JSON":" without a seat"}`, !1, void 0, IB.status)
            } else NB = qB(nB.error)
          }
          throw null !== (oB = NB) && void 0 !== oB ? oB : new kB.v("seat request made no attempt", !1)
        }(BB, IB, ZB, {
          ...cB,
          signal: WB,
          sleep: zB
        })), WB, zB);
        return gB.answered(), TB
      } finally {
        gB.stop(), NB.unfollow()
      }
    }

    function qB(BB) {
      return new kB.v(BB instanceof Error ? BB.message : String(BB), !0, BB)
    }
    async function yB(BB, IB, ZB) {
      var TB;
      const {
        signal: oB
      } = ZB, GB = null !== (TB = ZB.fetch) && void 0 !== TB ? TB : fetch, vB = await GB(BB, {
        method: "POST",
        headers: {
          ...cB,
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: IB,
        credentials: "include",
        signal: oB
      }), {
        answer: kB,
        lost: nB
      } = await async function(BB) {
        try {
          const IB = await BB.json();
          return {
            answer: "object" === typeof IB && null !== IB ? IB : null,
            lost: null
          }
        } catch (IB) {
          return {
            answer: null,
            lost: IB instanceof SyntaxError ? null : {
              error: IB
            }
          }
        }
      }(vB), hB = null !== kB && "string" === typeof kB.error ? kB.error : null;
      var zB;
      null !== hB && (null === (zB = ZB.onRefusal) || void 0 === zB || zB.call(ZB));
      return (0, JB.o)(oB), {
        response: vB,
        answer: kB,
        refusal: hB,
        lost: nB
      }
    }

    function UB(BB, IB) {
      return new kB.n(BB, "number" === typeof(null === IB || void 0 === IB ? void 0 : IB.code) ? IB.code : 0, (0, vB.l)(BB).text)
    }
    class WB extends Error {
      constructor(BB, IB) {
        super(BB), this.code = IB, this.name = "SeatHttpError"
      }
    }
    async function dB(BB, IB, ZB) {
      let TB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const {
        response: JB,
        answer: oB,
        refusal: GB,
        lost: vB
      } = await yB(FB(BB, "reconnect", IB), JSON.stringify({
        reconnectionToken: ZB
      }), TB);
      if (null !== vB) throw vB.error;
      if (!JB.ok) {
        const BB = null !== oB && "number" === typeof oB.code && 0 !== oB.code ? oB.code : JB.status;
        throw new WB(`the seat's reconnect was refused: ${null!==GB&&void 0!==GB?GB:`HTTP ${JB.status}`}`, BB)
      }
      if (null !== GB) throw UB(GB, oB);
      if (null === oB || !sB(oB)) throw new Error("the seat's reconnect answered " + (null === oB ? "without JSON" : "without a seat"));
      return {
        ...oB,
        reconnectionToken: ZB
      }
    }
    const CB = 10;

    function QB(BB) {
      if (BB.byteLength < 2 || BB[0] !== CB) return null;
      const IB = 2 + BB[1];
      return IB > BB.byteLength ? null : (new TextDecoder).decode(BB.subarray(2, IB))
    }

    function sB(BB) {
      const IB = BB.room;
      return "string" === typeof BB.sessionId && "object" === typeof IB && null !== IB && "string" === typeof IB.roomId && "string" === typeof IB.processId && "string" === typeof IB.name
    }
  },
  40649: (BB, IB, ZB) => {
    ZB.d(IB, {
      A: () => dB,
      B: () => CB,
      D: () => qB,
      G: () => YB,
      H: () => MB,
      K: () => NB,
      L: () => PB,
      M: () => UB,
      N: () => yB,
      R: () => WB,
      T: () => QB,
      e: () => JB,
      i: () => jB,
      k: () => HB,
      l: () => FB,
      m: () => gB,
      o: () => pB,
      q: () => wB,
      s: () => iB,
      t: () => OB,
      v: () => sB,
      y: () => aB
    });
    var TB = ZB(3159);
    const JB = {
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

    function oB(BB, IB) {
      return !ArrayBuffer.isView(BB) || BB instanceof DataView ? Array.isArray(BB) ? BB.map((BB => IB(BB))) : BB : Array.from(BB, (BB => IB(BB)))
    }

    function GB(BB) {
      if ("string" !== typeof BB) return BB;
      for (let IB = 0; IB < BB.length; IB++) {
        const ZB = BB.charCodeAt(IB);
        if (ZB >= 55296 && ZB <= 57343) return kB.decode(vB.encode(BB))
      }
      return BB
    }
    const vB = new TextEncoder,
      kB = new TextDecoder;

    function cB(BB) {
      return BB
    }
    let nB;

    function hB(BB) {
      return null === BB || "object" !== typeof BB ? BB : [GB(BB.ov), GB(BB.Gv)]
    }

    function zB(BB) {
      return null === BB || "object" !== typeof BB ? BB : [oB(BB.XJ, cB), oB(BB.Cv, cB)]
    }

    function FB(BB) {
      return null === (IB = BB) || "object" !== typeof IB ? IB : [GB(IB.Xn), GB(IB.Ln)];
      var IB
    }

    function NB(BB) {
      return null === (IB = BB) || "object" !== typeof IB ? IB : [IB.id, IB.Cn];
      var IB
    }

    function gB(BB) {
      return null === (IB = BB) || "object" !== typeof IB ? IB : [IB.bJ, GB(IB.xJ), IB.EJ, GB(IB.VJ), IB.Zo, IB.Jo, IB.Rn, GB(IB.rn), GB(IB.mn)];
      var IB
    }

    function qB(BB) {
      return null === (IB = BB) || "object" !== typeof IB ? IB : [oB(IB.DG, cB), IB.KG];
      var IB
    }

    function yB(BB) {
      return null === (IB = BB) || "object" !== typeof IB ? IB : [oB(IB.bG, (BB => GB(BB))), GB(IB.xG), IB.EG];
      var IB
    }

    function UB(BB) {
      return null === (IB = BB) || "object" !== typeof IB ? IB : [oB(IB.Wk, cB), GB(IB.Ck), IB.Qk];
      var IB
    }

    function WB(BB) {
      return null === (IB = BB) || "object" !== typeof IB ? IB : [GB(IB.Ho), GB(IB.Mo)];
      var IB
    }

    function dB(BB) {
      return null === (IB = BB) || "object" !== typeof IB ? IB : [GB(IB.Mv)];
      var IB
    }

    function CB(BB) {
      return GB(BB)
    }

    function QB(BB) {
      return null === (IB = BB) || "object" !== typeof IB ? IB : [GB(IB.Un), GB(IB.Wn), GB(IB.ov), GB(IB.Gv)];
      var IB
    }

    function sB(BB) {
      return hB(BB)
    }

    function wB(BB) {
      return hB(BB)
    }

    function OB(BB) {
      return null === (IB = BB) || "object" !== typeof IB ? IB : [GB(IB.hk)];
      var IB
    }

    function YB(BB) {
      return BB
    }

    function iB(BB) {
      return null === (IB = BB) || "object" !== typeof IB ? IB : [GB(IB.Tv), GB(IB.Jv)];
      var IB
    }

    function pB(BB) {
      return GB(BB)
    }

    function aB(BB) {
      return zB(BB)
    }

    function HB(BB) {
      return zB(BB)
    }

    function MB(BB) {
      return null === (IB = BB) || "object" !== typeof IB ? IB : [GB(IB.sk)];
      var IB
    }

    function jB(BB) {
      return (nB ??= (0, TB.d)().map((BB => BB.name)), nB).map((IB => {
        return "string" === typeof(ZB = BB[IB]) ? GB(ZB) : oB(ZB, cB);
        var ZB
      }))
    }

    function PB(BB) {
      return null === (IB = BB) || "object" !== typeof IB ? IB : [IB.vk, IB.kk, IB.nk];
      var IB
    }
  },
  40983: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => oB
    });
    var TB = ZB(40991),
      JB = ZB(40976);
    const oB = new class {
      constructor(BB) {
        this.pack = BB, this.game = void 0, this.settle = null, this.hold = null, this.endedWhileHeld = !1, this.gameListeners = new Set, BB.onWanted((() => {
          this.release()
        }))
      }
      setGame(BB) {
        if (void 0 === BB && null !== this.hold) return void(this.endedWhileHeld = !0);
        this.hold = null, this.endedWhileHeld = !1;
        const IB = this.inGame();
        if (this.game = BB, this.update(), this.inGame() !== IB)
          for (const ZB of this.gameListeners) ZB()
      }
      inGame() {
        return void 0 !== this.game
      }
      onGameChange(BB) {
        return this.gameListeners.add(BB), () => {
          this.gameListeners.delete(BB)
        }
      }
      unwantedLeave(BB) {
        BB && void 0 !== this.game ? this.hold = {
          game: this.game
        } : this.release()
      }
      rejoinHold() {
        return this.hold
      }
      releaseHold(BB) {
        null !== BB && BB === this.hold && this.release()
      }
      release() {
        if (null === this.hold) return;
        const BB = this.endedWhileHeld;
        this.hold = null, this.endedWhileHeld = !1, BB && this.setGame(void 0)
      }
      setSettled(BB) {
        this.settle = BB, this.update()
      }
      update() {
        void 0 === this.game ? this.pack.setSessionFiles(void 0) : null !== this.settle && (0, TB.b)(this.settle.state, this.game) && this.pack.setSessionFiles(this.settle.files)
      }
    }(JB.f)
  },
  5223: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => GB,
      d: () => vB
    });
    var TB = ZB(2236),
      JB = ZB(5226);
    let oB = null;

    function GB(BB) {
      oB = {
        pack: BB.metaData.id === TB.e ? null : BB
      }
    }

    function vB(BB) {
      return !(null === oB || !(0, JB.d)(oB.pack, BB)) && (oB = null, !0)
    }
  },
  40726: (BB, IB, ZB) => {
    ZB.r(IB), ZB.d(IB, {
      followPageUiPack: () => Mn,
      packForGame: () => Hn,
      playWasmGame: () => tn,
      prefetchWasmPreviews: () => Hk,
      setGamePackConfirm: () => fc,
      startWasmPlay: () => mn,
      startWasmPreviews: () => ak
    });
    var TB = ZB(201),
      JB = ZB(1305),
      oB = ZB(168),
      GB = ZB(39152),
      vB = ZB(1995),
      kB = ZB(24),
      cB = ZB(4856),
      nB = ZB(1370),
      hB = ZB(1787),
      zB = ZB(1382),
      FB = ZB(39310),
      NB = ZB(1362),
      gB = ZB(1868),
      qB = ZB(3097);
    let yB = null,
      UB = null,
      WB = null,
      dB = !1;

    function CB() {
      yB ??= performance.now()
    }
    const QB = {
      ready: () => {
        gB.d.markAdmissionAwaited()
      },
      adEnded: () => {
        gB.d.markJoinAdEnded()
      },
      admitted: () => {
        gB.d.markAdmitted()
      }
    };
    var sB = ZB(39328),
      wB = ZB(39233),
      OB = ZB(36492),
      YB = ZB(39110),
      iB = ZB(9011),
      pB = ZB(36516),
      aB = ZB(40729),
      HB = ZB(4958),
      MB = ZB(40643),
      jB = ZB(40715),
      PB = ZB(40649);
    const RB = {
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

    function rB(BB) {
      const IB = {
        ...jB.b[BB]
      };
      for (const ZB of Object.keys(RB[BB])) delete IB[ZB];
      return IB
    }

    function mB() {
      var BB, IB;
      return null === (BB = null === (IB = (0, MB.j)()) || void 0 === IB ? void 0 : IB.localPlayerAlive()) || void 0 === BB || BB
    }

    function XB() {
      var BB, IB;
      return null !== (BB = null === (IB = (0, MB.j)()) || void 0 === IB ? void 0 : IB.localDeaths()) && void 0 !== BB ? BB : null
    }
    const LB = {
        current: mB,
        watch: BB => {
          let IB = mB(),
            ZB = XB();
          return (0, HB.u)((() => {
            const TB = mB(),
              JB = XB(),
              oB = null !== JB && null !== ZB && JB !== ZB;
            ZB = JB, oB ? (IB || BB(!0), BB(!1), TB && BB(!0), IB = TB) : TB !== IB && (IB = TB, BB(TB))
          }))
        }
      },
      eB = {
        states: {
          ...rB("states"),
          localPlayerAlive: LB
        },
        events: {
          ...rB("events"),
          localPlayerAliveSet: {
            watch: LB.watch
          }
        },
        commands: {
          ...rB("commands"),
          respawn: () => {
            var BB;
            null === (BB = (0, MB.j)()) || void 0 === BB || BB.respawn()
          },
          playEmote: BB => {
            var IB;
            null === (IB = (0, MB.j)()) || void 0 === IB || IB.send(PB.e.PlayEmote, (0, PB.A)({
              Mv: BB
            }))
          },
          applyTemporaryThirdPerson: BB => {
            var IB;
            let {
              durationMs: ZB
            } = BB;
            null === (IB = (0, MB.j)()) || void 0 === IB || IB.thirdPersonFor(ZB)
          },
          bindCustomButtonKeys: BB => {
            var IB;
            null === (IB = (0, MB.j)()) || void 0 === IB || IB.bindCustomButtonKeys(BB)
          },
          pressCustomButton: BB => {
            var IB;
            let {
              id: ZB,
              down: TB
            } = BB;
            null === (IB = (0, MB.j)()) || void 0 === IB || IB.pressCustomButton(ZB, TB)
          },
          setLookSensitivity: () => {},
          wakeUp: BB => {
            const IB = (0, PB.H)({
                sk: BB
              }),
              ZB = () => {
                const BB = (0, MB.j)();
                return !(null !== BB && void 0 !== BB && BB.isSessionLive) || BB.send(PB.e.StopSleeping, IB)
              };
            if (!ZB()) {
              const BB = (0, HB.u)((() => {
                ZB() && BB()
              }))
            }
          },
          setCameraZoom: BB => {
            var IB;
            null === (IB = (0, MB.j)()) || void 0 === IB || IB.setCameraZoom(BB)
          }
        },
        queries: rB("queries"),
        lookups: {
          ...rB("lookups"),
          cameraZoom: () => {
            var BB, IB;
            return null !== (BB = null === (IB = (0, MB.j)()) || void 0 === IB ? void 0 : IB.cameraZoom()) && void 0 !== BB ? BB : 0
          }
        }
      };
    var uB = ZB(39129),
      fB = ZB(40733),
      lB = ZB(40736),
      AB = ZB(40746),
      tB = ZB(1317),
      bB = ZB(118),
      xB = ZB(4704),
      EB = ZB(3887),
      DB = ZB(1231);
    const KB = {
      YG: () => (0, tB.e)(),
      inbuiltOverwritten: () => xB.f,
      reflectApplyHit: () => DB.b,
      definerHit: () => bB.currentUrl.c,
      emitReplaced: () => (0, kB.d)(),
      confirmMesh: () => (0, EB.c)(),
      confirmMeshHitStack: () => (0, EB.d)()
    };
    var VB = ZB(40738),
      SB = ZB(40870);
    var BI = ZB(20),
      II = ZB(2003),
      ZI = ZB(2066),
      TI = ZB(1717),
      JI = ZB(2111),
      oI = ZB(1248),
      GI = ZB(1310),
      vI = ZB(40876);

    function kI() {
      return GI.h.get().getCurrentLanguageCode()
    }

    function cI(BB) {
      const IB = () => {
        BB({
          translate: (BB, IB) => (0, oI.y)(kI(), BB, IB),
          keyBindingText: BB => {
            const IB = (0, ZI.s)(BB, BI.d.get("isTouchScreen"));
            return null !== IB ? (0, oI.C)(kI(), IB.translationKey, IB.params) : (0, ZI.n)((0, ZI.p)(BB))
          },
          isFriend: JI.c,
          hiddenNames: II.b.shown,
          loadsFontRest: (0, vI.c)(kI())
        })
      };
      let ZB = !1;
      const TB = () => {
          const BB = kI();
          (0, oI.l)(BB).then((() => {
            ZB || BB !== kI() || IB()
          }))
        },
        JB = () => TI.c.getSocialState().friends.map((BB => BB.name.toLowerCase())).sort().join(" ");
      let oB = JB();
      IB(), TB();
      const GB = [(0, GI.j)((() => {
        IB(), TB()
      })), (0, kB.p)("customBindingsChanged", IB), (0, kB.p)("appManagerUpdated|isTouchScreen", IB), (0, JI.b)((() => {
        const BB = JB();
        BB !== oB && (oB = BB, IB())
      })), II.b.subscribe(IB)];
      return () => {
        ZB = !0;
        for (const BB of GB) BB()
      }
    }
    var nI = ZB(671),
      hI = ZB(1058),
      zI = ZB(2038),
      FI = ZB(342),
      NI = ZB(192),
      gI = ZB(3036),
      qI = ZB(3043),
      yI = ZB(38775),
      UI = ZB(4874),
      WI = ZB(40884),
      dI = ZB(714),
      CI = ZB(684),
      QI = ZB(3117),
      sI = ZB(2029),
      wI = ZB(3892),
      OI = ZB(3452);
    let YI = null;
    var iI = ZB(1258),
      pI = ZB(1261),
      aI = ZB(4615),
      HI = ZB(3634),
      MI = ZB(57),
      jI = ZB(339),
      PI = ZB(331),
      RI = ZB(40901),
      rI = ZB(4960),
      mI = ZB(38816);
    var XI = ZB(37757),
      LI = ZB(40906);
    class eI {
      constructor(BB, IB) {
        this.showView = BB, this.holdForAd = IB
      }
      pointerUnlockRequestsChanged() {
        (0, RI.C)()
      }
      pointerLockDebugEntries() {
        return [{
          label: "Locked to the canvas",
          value: String((0, RI.t)())
        }]
      }
      setGameViewShown(BB) {
        this.showView(BB)
      }
      setGameView(BB) {
        (0, LI.g)(BB)
      }
      videoAdHold(BB, IB) {
        this.holdForAd(BB, IB)
      }
    }
    class uI {
      leave(BB) {
        ! function(BB) {
          if (null !== (0, zB.c)().websocketUrl) try {
            (0, HB.H)().leaveGame(BB)
          } finally {
            (0, zB.l)({
              websocketUrl: null
            })
          }
        }(BB)
      }
      isReplay() {
        return !1
      }
    }
    class fI {
      watchFrameStarts(BB) {
        return (0, HB.p)(BB)
      }
      watchFrames(BB) {
        return (0, HB.n)(BB)
      }
      watchTicks(BB) {
        return (0, HB.u)(BB)
      }
    }
    var lI = ZB(40910);

    function AI(BB) {
      return BB >= 0 ? Math.min(1, BB) : 0
    }

    function tI(BB, IB) {
      const {
        fade: ZB
      } = BB;
      return null === ZB || IB - ZB.at >= ZB.ms ? BB.volume : ZB.from + (BB.volume - ZB.from) * Math.max(0, (IB - ZB.at) / ZB.ms)
    }

    function bI(BB) {
      const IB = Object.entries(BB),
        ZB = new Uint32Array(IB.length);
      let TB = 0;
      for (const [GB, [, vB]] of IB.entries()) ZB[GB] = vB.length, TB += vB.length;
      const JB = new Float64Array(3 * TB);
      let oB = 0;
      for (const [, GB] of IB)
        for (const BB of GB) JB.set(BB, oB), oB += 3;
      return {
        blocks: IB.map((BB => {
          let [IB] = BB;
          return IB
        })).join("\0"),
        counts: ZB,
        values: JB
      }
    }
    class xI {
      constructor(BB, IB) {
        this.core = BB, this.warn = IB, this.latest = 0
      }
      async feed() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : EI;
        const IB = ++this.latest;
        let ZB;
        try {
          ZB = await BB()
        } catch (TB) {
          return void(this.core.isStopped || IB !== this.latest || this.warn("the block colours didn't load, so block particles draw grey", TB))
        }
        IB === this.latest && (this.core.setBlockColours(ZB) || this.core.isStopped || this.warn("the core refused the block colours: block particles draw grey"))
      }
    }
    async function EI() {
      return bI((await ZB.e(207).then((() => ZB(34276)))).averageColors)
    }
    var DI = ZB(4969),
      KI = ZB(4975),
      VI = ZB(40701),
      SI = ZB(3400),
      BZ = ZB(36292),
      IZ = ZB(40780),
      ZZ = ZB(663),
      TZ = ZB(37079),
      JZ = ZB(655),
      oZ = ZB(360),
      GZ = ZB(40768);
    const vZ = [3e4, 12e4, 3e5];
    class kZ extends Error {}
    const cZ = {
      mobTypes: ZZ.m,
      vehicleTypes: TZ.d,
      mobAiStates: ZZ.k,
      playerPoses: JZ.o
    };
    var nZ = ZB(40759),
      hZ = ZB(40771),
      zZ = ZB(40801),
      FZ = ZB(1125),
      NZ = ZB(40919),
      gZ = ZB(40928),
      qZ = ZB(3141),
      yZ = ZB(39098),
      UZ = ZB(4990),
      WZ = ZB(2481);
    const dZ = WZ.o.KeysDisabled | WZ.o.LookFrozen | WZ.o.ClicksSuppressed,
      CZ = qZ.e;
    var QZ = (0, gZ.d)("resumingConn");
    class sZ {
      constructor(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.shell = BB, this.now = IB, this.session = void 0, this.attempt = null, this.landed = null, this.initialInfoConn = 0, this.initialInfoOffer = !1, this.completedEarlyConn = 0, Object.defineProperty(this, QZ, {
          writable: !0,
          value: 0
        }), this.drops = 0, this.session = new yZ.e({
          reconnect: BB => this.reconnect(BB),
          isLive: () => BB.isLive(),
          onReconnected: IB => {
            this.landed = IB, BB.onReconnected(IB), this.landIfResumed()
          },
          onGaveUp: (IB, ZB) => {
            this.abortAttempt(), BB.onGaveUp(IB, ZB)
          },
          freeze: IB => {
            BB.VY(IB), (0, UZ.f)(dZ, IB ? dZ : 0, "reconnectFreeze")
          },
          releaseSeat: BB => {
            this.releaseSeat(BB)
          }
        })
      }
      isResuming() {
        return this.session.isResuming()
      }
      get resumingConn() {
        return (0, NZ.b)(this, QZ)[QZ]
      }
      canHoldSeat() {
        return this.session.canHoldSeat()
      }
      onInitialInfo(BB) {
        let {
          conn: IB,
          graceMs: ZB,
          sessionBased: TB,
          replayOffer: JB
        } = BB;
        this.session.onInitialInfo(ZB, TB), this.isResuming() && (this.initialInfoConn = IB, this.initialInfoOffer = JB, this.landIfResumed())
      }
      onResumeComplete(BB) {
        0 !== BB && (BB === (0, NZ.b)(this, QZ)[QZ] ? ((0, NZ.b)(this, QZ)[QZ] = 0, this.session.onResumed()) : this.isResuming() && (this.completedEarlyConn = BB))
      }
      onDropped(BB) {
        this.drops++, this.landed = null, this.initialInfoConn = 0, this.initialInfoOffer = !1, this.completedEarlyConn = 0, (0, NZ.b)(this, QZ)[QZ] = 0, this.session.onConnectionLost(BB)
      }
      leave() {
        this.session.leave(), this.dispose()
      }
      dispose() {
        this.abortAttempt(), this.landed = null, this.completedEarlyConn = 0, (0, NZ.b)(this, QZ)[QZ] = 0, this.session.end()
      }
      reconnect(BB) {
        const IB = this.attempt;
        if (null !== IB && this.awaitingJoinRoom(IB)) return IB.result;
        this.abortAttempt();
        const ZB = new AbortController,
          TB = this.drops,
          JB = {
            attachedAt: null
          },
          oB = this.shell.reconnect(BB, ZB.signal, (() => {
            JB.attachedAt = this.now()
          })).then((BB => {
            if (this.clearAttempt(GB), this.drops !== TB) throw new Error("the resumed room dropped before its attempt settled");
            return BB
          }), (BB => {
            throw this.clearAttempt(GB), BB
          })),
          GB = {
            abort: ZB,
            socket: JB,
            result: oB
          };
        return this.attempt = GB, oB
      }
      clearAttempt(BB) {
        this.attempt === BB && (this.attempt = null)
      }
      abortAttempt() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new DOMException("the reconnect attempt was given up", "AbortError");
        const IB = this.attempt;
        this.attempt = null, null === IB || void 0 === IB || IB.abort.abort(BB)
      }
      awaitingJoinRoom(BB) {
        const IB = BB.socket.attachedAt;
        return null !== IB && this.now() - IB < CZ
      }
      releaseSeat(BB) {
        const IB = this.attempt,
          ZB = null !== IB && this.awaitingJoinRoom(IB);
        this.abortAttempt(new fB.s), ZB || this.shell.releaseSeat(BB)
      }
      landIfResumed() {
        const BB = this.landed;
        if (null !== BB && BB.conn === this.initialInfoConn) {
          const IB = this.initialInfoOffer && this.completedEarlyConn !== BB.conn;
          if (this.landed = null, this.initialInfoConn = 0, this.initialInfoOffer = !1, this.completedEarlyConn = 0, this.abortAttempt(), !IB) return void this.session.onResumed();
          (0, NZ.b)(this, QZ)[QZ] = BB.conn, this.session.onResuming()
        }
      }
    }
    var wZ = ZB(39104),
      OZ = ZB(40935),
      YZ = ZB(36506),
      iZ = ZB(36501),
      pZ = ZB(2236),
      aZ = ZB(1956),
      HZ = ZB(4491),
      MZ = ZB(40784),
      jZ = ZB(5223);

    function PZ(BB) {
      let {
        pack: IB,
        gameSource: ZB
      } = BB;
      if (null !== ZB && "" !== ZB) return `game:${ZB}`;
      if (null === IB) return "default";
      const {
        id: TB,
        version: JB
      } = IB.metaData;
      if (TB !== pZ.q.CUSTOM) return `${TB}@${JB}`;
      const oB = [];
      for (const GB of [IB.textureOverrides, IB.modelOverrides, IB.animations])
        for (const [BB, IB] of Object.entries(null !== GB && void 0 !== GB ? GB : {})) oB.push(`${BB}:${IB.length}`);
      return `${TB}:${(0,aZ.z)(oB.join())}`
    }
    var RZ = ZB(4605),
      rZ = ZB(3418),
      mZ = ZB(40944),
      XZ = ZB(688),
      LZ = ZB(3422),
      eZ = ZB(105),
      uZ = ZB(4682),
      fZ = ZB(36),
      lZ = ZB(4504),
      AZ = ZB(40838),
      tZ = ZB(4632),
      bZ = ZB(2489),
      xZ = ZB(1711),
      EZ = ZB(1738),
      DZ = ZB(1353),
      KZ = ZB(121),
      VZ = ZB(313),
      SZ = ZB(39143),
      BT = ZB(2497),
      IT = ZB(4983);
    const ZT = new Set([DI.vb.KeyDown, DI.vb.MouseMove, DI.vb.MouseDown, DI.vb.Wheel, DI.vb.TouchStart, DI.vb.TouchMove]);

    function TT(BB) {
      return (BB.shiftKey ? DI.Lb.Shift : 0) | (BB.ctrlKey ? DI.Lb.Ctrl : 0) | (BB.altKey ? DI.Lb.Alt : 0) | (BB.metaKey ? DI.Lb.Meta : 0) | ("repeat" in BB && BB.repeat ? DI.Lb.Repeat : 0) | (BB.isTrusted ? 0 : DI.Lb.Untrusted | function(BB) {
        try {
          const {
            editable: IB,
            outsideView: ZB
          } = (0, SZ.c)(BB.target);
          return (IB ? DI.Lb.UntrustedEditable : 0) | (ZB ? DI.Lb.UntrustedOutsideView : 0)
        } catch {
          return 0
        }
      }(BB))
    }

    function JT(BB) {
      return "touchOnly" !== (0, KZ.e)() && "function" === typeof BB.requestPointerLock
    }

    function oT(BB) {
      return 0 === BB.button ? BB.altKey ? IT.i["Alt+Left Click"] : IT.i.Mouse1 : 1 === BB.button ? IT.i.Mouse2 : IT.i.Mouse3
    }
    const GT = new Set(["AltLeft", "AltRight", "ArrowUp", "ArrowDown"]),
      vT = new Map([
        ["AltLeft", "altKey"],
        ["AltRight", "altKey"],
        ["ControlLeft", "ctrlKey"],
        ["ControlRight", "ctrlKey"],
        ["ShiftLeft", "shiftKey"],
        ["ShiftRight", "shiftKey"],
        ["MetaLeft", "metaKey"],
        ["MetaRight", "metaKey"]
      ]),
      kT = 32768,
      cT = 1;

    function nT(BB) {
      return Math.min(Math.max(Math.round(BB), 0), 65535)
    }

    function hT(BB, IB, ZB) {
      const TB = [],
        JB = (BB, IB, ZB, JB) => {
          const oB = BB => {
            (0, EZ.x)(BB) || ZB(BB)
          };
          BB.addEventListener(IB, oB, JB), TB.push((() => {
            BB.removeEventListener(IB, oB, JB)
          }))
        },
        oB = {
          capture: !0,
          passive: !0
        },
        GB = (BB, ZB, TB, JB, oB) => (!(0, BT.d)() || !ZT.has(BB)) && (IB(BB, ZB, TB, JB, oB), !0),
        vB = () => document.pointerLockElement === BB,
        kB = (0, VZ.d)(),
        cB = BB => {
          BB.ctrlKey && ZB.ctrlCombosAreGames() && !(0, UZ.d)(BB.target) && BB.preventDefault()
        },
        nB = (BB, TB, JB) => {
          ZB.inspect(BB, TB, !1), IB(DI.vb.KeyUp, TB, 0, 0, (0, bZ.v)(JB, BB.timeStamp)), ZB.keyReleased(TB)
        },
        hB = new Map,
        zB = (BB, IB, ZB) => BB[ZB] || ("AltRight" === IB || "ControlLeft" === IB) && BB.getModifierState("AltGraph"),
        FB = new Map,
        NB = () => {
          hB.clear(), FB.clear()
        },
        gB = BB => {
          if (BB.isTrusted && document.hasFocus())
            for (const [IB, ZB] of FB) FB.delete(IB), zB(BB, IB, ZB) || (hB.delete(IB), nB(BB, IT.i[IB], TT(BB)))
        };
      BB.tabIndex = -1;
      let qB = 0,
        yB = 0;
      const UB = () => {
        const IB = BB.getBoundingClientRect();
        qB = IB.left, yB = IB.top
      };
      let WB = "mouse";
      const dB = () => !vB() && ("mouse" === WB || !ZB.touchUiShown()),
        CB = (BB, IB, ZB) => {
          const TB = (nT(BB.clientX - qB) | nT(BB.clientY - yB) << 16) >>> 0;
          GB(DI.vb.MouseMove, DI.Nb.Point, IB, ZB, TB)
        };
      let QB = !1,
        sB = 0;
      const wB = () => {
        QB && (QB = !1, ZB.viewShown() && (0, RI.S)())
      };
      TB.push((() => {
        clearTimeout(sB)
      })), JB(window, "keydown", (BB => {
        "Escape" === BB.key ? (0, RI.G)(!0) : BB.repeat || (0, UZ.d)(BB.target) || (QB = !0, clearTimeout(sB), sB = window.setTimeout(wB, 0))
      }), oB), JB(window, "keydown", (BB => {
        wB(), cB(BB), gB(BB);
        const IB = IT.i[BB.code];
        if ("number" !== typeof IB || !ZB.viewShown()) return;
        const TB = (0, UZ.d)(BB.target);
        TB || !ZB.prevents(IB) && !GT.has(BB.code) || BB.preventDefault(), BB.repeat || ZB.inspect(BB, IB, !0), GB(DI.vb.KeyDown, IB, 0, 0, (0, bZ.v)(TT(BB), BB.timeStamp)) && hB.set(BB.code, IB), TB || ZB.keyPressed(IB)
      }), {
        capture: !1,
        passive: !1
      }), JB(window, "keyup", (BB => {
        "Escape" === BB.key && (0, RI.G)(!1), cB(BB), hB.delete(BB.code), FB.delete(BB.code), gB(BB);
        const IB = IT.i[BB.code];
        "number" === typeof IB && nB(BB, IB, TT(BB))
      }), {
        capture: !0,
        passive: !1
      }), JB(window, "mousemove", (BB => {
        "mouse" === WB && dB() ? CB(BB, BB.movementX, BB.movementY) : vB() ? GB(DI.vb.MouseMove, DI.Nb.Stamped, BB.movementX, BB.movementY, (0, bZ.v)(0, BB.timeStamp)) : GB(DI.vb.MouseMove, 0, BB.movementX, BB.movementY, 0)
      }), oB);
      let OB = 0,
        YB = 0;
      const iB = [];
      let pB = !1,
        aB = !1;
      JB(BB, "mousedown", (BB => {
        if ((0, BT.d)()) return;
        gB(BB);
        const TB = 1 << BB.button;
        if (!vB() && (0, RI.P)() && (0, RI.e)() && (aB = !0, !pB)) return void(OB |= TB);
        OB &= ~TB;
        const JB = BB.button <= 2 ? oT(BB) : void 0;
        void 0 !== JB && (iB[BB.button] = JB, ZB.inspect(BB, JB, !0)), dB() && CB(BB, 0, 0), IB(DI.vb.MouseDown, BB.button, BB.clientX, BB.clientY, (0, bZ.v)(TT(BB), BB.timeStamp)), YB |= TB, void 0 !== JB && ZB.keyPressed(JB)
      }), oB), JB(window, "mouseup", (BB => {
        var TB;
        gB(BB);
        const JB = 1 << BB.button,
          oB = 0 !== (OB & ~YB & JB);
        if (OB &= ~JB, YB &= ~JB, oB) return;
        const GB = BB.button <= 2 ? null !== (TB = iB[BB.button]) && void 0 !== TB ? TB : oT(BB) : void 0;
        void 0 !== GB && ZB.inspect(BB, GB, !1), IB(DI.vb.MouseUp, BB.button, BB.clientX, BB.clientY, (0, bZ.v)(TT(BB), BB.timeStamp)), void 0 !== GB && ZB.keyReleased(GB)
      }), oB), JB(BB, "contextmenu", (BB => {
        BB.preventDefault()
      }), {
        passive: !1
      });
      const HB = BB => {
        (vB() || (0, RI.p)() && (0, DZ.w)()) && (BB.ctrlKey || kB && !document.fullscreenElement) && BB.preventDefault()
      };
      JB(BB, "wheel", (BB => {
        HB(BB), gB(BB), GB(DI.vb.Wheel, BB.deltaMode, BB.deltaX, BB.deltaY, 0)
      }), {
        capture: !0,
        passive: !1
      });
      const MB = {
          capture: !0,
          passive: !1
        },
        jB = BB => {
          BB ? window.addEventListener("wheel", HB, MB) : window.removeEventListener("wheel", HB, MB)
        };
      jB((0, RI.p)()), TB.push((0, RI.z)(jB)), TB.push((() => {
        jB(!1)
      }));
      const PB = new Map,
        RB = new Set,
        rB = BB => {
          const IB = "stylus" === BB.touchType;
          for (const ZB of PB.values())
            if (!ZB.touched && (IB || Math.abs(BB.clientX - ZB.x) <= cT && Math.abs(BB.clientY - ZB.y) <= cT)) return ZB.touched = !0, !0;
          return !1
        },
        mB = BB => 32767 & BB,
        XB = new Set,
        LB = BB => ZB => {
          const TB = (0, bZ.v)(TT(ZB), ZB.timeStamp);
          BB !== DI.vb.TouchStart && BB !== DI.vb.TouchMove || ((BB, ZB) => {
            const TB = BB.touches;
            if (TB)
              for (const JB of XB) {
                let BB = !1;
                for (let IB = 0; IB < TB.length && !BB; IB++) BB = mB(TB[IB].identifier) === JB;
                BB || (XB.delete(JB), IB(DI.vb.TouchCancel, JB, 0, 0, ZB))
              }
          })(ZB, TB);
          const JB = ZB.changedTouches;
          for (let IB = 0; IB < JB.length; IB++) {
            const ZB = JB[IB];
            if (BB === DI.vb.TouchStart && rB(ZB) && RB.add(ZB.identifier), RB.has(ZB.identifier)) {
              BB !== DI.vb.TouchEnd && BB !== DI.vb.TouchCancel || RB.delete(ZB.identifier);
              continue
            }
            const oB = mB(ZB.identifier),
              vB = GB(BB, oB, ZB.clientX - qB, ZB.clientY - yB, TB);
            BB === DI.vb.TouchStart ? vB && XB.add(oB) : BB !== DI.vb.TouchMove && XB.delete(oB)
          }
        },
        eB = LB(DI.vb.TouchStart);
      JB(BB, "touchstart", (BB => {
        BB.preventDefault(), (0, BT.d)() || (ZB.touchStarting(), eB(BB))
      }), {
        passive: !1
      }), JB(BB, "touchmove", LB(DI.vb.TouchMove), oB), JB(BB, "touchend", LB(DI.vb.TouchEnd), oB), JB(BB, "touchcancel", LB(DI.vb.TouchCancel), oB);
      const uB = BB => kT | 32767 & BB,
        fB = (BB, IB) => {
          GB(BB, uB(IB.pointerId), IB.clientX - qB, IB.clientY - yB, (0, bZ.v)(TT(IB), IB.timeStamp))
        };
      JB(window, "pointerdown", (IB => {
        WB = IB.pointerType, "mouse" === IB.pointerType && IB.target !== BB && ZB.viewShown() && (0, RI.T)()
      }), oB), JB(BB, "pointerdown", (BB => {
        "pen" === BB.pointerType && 0 === BB.button && (0, RI.p)() && (0, DZ.w)() && (BB.preventDefault(), (0, BT.d)() || (PB.set(BB.pointerId, {
          x: BB.clientX,
          y: BB.clientY,
          touched: !1
        }), ZB.touchStarting(), fB(DI.vb.TouchStart, BB)))
      }), {
        passive: !1
      }), JB(window, "pointermove", (BB => {
        WB = BB.pointerType, PB.has(BB.pointerId) && fB(DI.vb.TouchMove, BB), "mouse" !== BB.pointerType && dB() && CB(BB, 0, 0)
      }), oB);
      const lB = BB => IB => {
        PB.delete(IB.pointerId) && fB(BB, IB)
      };
      JB(window, "pointerup", lB(DI.vb.TouchEnd), oB), JB(window, "pointercancel", lB(DI.vb.TouchCancel), oB);
      let AB = 0;
      const tB = () => {
          AB = 0, UB(), ZB.resized()
        },
        bB = () => {
          const BB = ZB.sizeCanvas();
          null !== BB && IB(DI.vb.Resize, 0, BB.cssWidth, BB.cssHeight, (0, bZ.m)(BB.renderScale)), UB(), ZB.resized(), 0 === AB && (AB = requestAnimationFrame(tB))
        };
      JB(window, "resize", bB, oB), TB.push(ZB.watchRenderScale(bB)), TB.push((() => {
        cancelAnimationFrame(AB)
      })), JB(window, "focus", (BB => {
        BB.isTrusted && (IB(DI.vb.Focus, 0, 0, 0, 0), ZB.viewShown() && (0, RI.T)())
      }), {
        passive: !0
      });
      const xB = () => {
          (0, RI.G)(!1), OB = 0
        },
        EB = () => {
          XB.clear(), PB.clear(), RB.clear()
        };
      let DB = 0,
        KB = 0;
      JB(window, "blur", (TB => {
        xB(), (0, RI.l)();
        for (const BB of hB.keys()) {
          const IB = vT.get(BB);
          void 0 !== IB && FB.set(BB, IB)
        }
        TB.isTrusted && ((BB => {
          for (const [ZB, TB] of PB) IB(DI.vb.TouchCancel, uB(ZB), TB.x, TB.y, (0, bZ.v)(0, BB));
          PB.clear()
        })(TB.timeStamp), IB(DI.vb.Blur, DI.q.KeepTouches, 0, 0, 0)), kB && TB.isTrusted && (clearTimeout(KB), KB = window.setTimeout((() => {
          if (!document.hasFocus()) {
            for (const BB of hB.values()) nB(TB, BB, 0);
            NB()
          }
        }), 0)), clearTimeout(DB), DB = window.setTimeout((() => {
          document.activeElement instanceof HTMLIFrameElement && (0, DZ.w)() && ZB.viewShown() && BB.focus({
            preventScroll: !0
          })
        }), 0)
      }), {
        passive: !0
      }), TB.push((() => {
        clearTimeout(DB), clearTimeout(KB)
      })), JB(window, "mousedown", (IB => {
        kB && IB.isTrusted && !document.hasFocus() && (0, DZ.w)() && ZB.viewShown() && (window.focus(), BB.focus({
          preventScroll: !0
        }))
      }), oB), JB(document, "visibilitychange", (() => {
        document.hidden ? (IB(DI.vb.Blur, 0, 0, 0, 0), EB()) : document.hasFocus() && IB(DI.vb.Focus, 0, 0, 0, 0)
      }), {
        passive: !0
      }), TB.push((0, BT.j)((() => {
        xB(), IB(DI.vb.Blur, DI.q.Release, 0, 0, 0), ZB.keysReleased(), NB(), YB = 0, EB(), IB(DI.vb.Joystick, 0, 0, 0, 0), document.hasFocus() && IB(DI.vb.Focus, 0, 0, 0, 0)
      })));
      const VB = !ZB.canLock(),
        SB = () => VB && !(0, RI.p)() ? DI.pc.Lockless : DI.pc.Released,
        BI = () => {
          vB() && (pB = !1, aB = !1), IB(DI.vb.PointerLock, vB() ? DI.pc.Locked : SB(), 0, 0, 0), (0, RI.L)(vB())
        };
      return JB(document, "pointerlockchange", BI, {
        passive: !0
      }), JB(document, "pointerlockerror", (() => {
        pB ||= aB, aB = !1, (0, RI.v)()
      }), {
        passive: !0
      }), VB && TB.push((0, RI.z)((() => {
        IB(DI.vb.PointerLock, SB(), 0, 0, 0)
      }))), bB(), IB(document.hasFocus() ? DI.vb.Focus : DI.vb.Blur, 0, 0, 0, 0), BI(), () => {
        for (const BB of TB.splice(0)) BB()
      }
    }
    var zT = ZB(34126),
      FT = ZB(34110),
      NT = ZB(2070);
    const gT = new Map(IT.d.map(((BB, IB) => [BB, IB]))),
      qT = ["jump", "primary-fire", "alt-fire"],
      yT = ["primary-fire", "alt-fire"];

    function UT(BB) {
      return `${NT.c}${BB}`
    }
    const WT = ["forward", "backward", "left", "right", "sprint", "jump"];

    function dT(BB) {
      const IB = [];
      for (const ZB of BB) {
        const BB = "string" === typeof ZB ? IT.i[ZB] : void 0;
        "number" === typeof BB && IB.push(BB)
      }
      return IB
    }
    class CT {
      constructor() {
        this.keys = new Map, this.preventKeys = new Set, this.movementKeys = new Set, this.checkedDown = new Set, this.checkedUp = new Set;
        for (const [BB, IB] of Object.entries(IT.f)) this.keys.set(BB, IB);
        this.updateKeySets()
      }
      prevents(BB) {
        return this.preventKeys.has(BB)
      }
      moves(BB) {
        return this.movementKeys.has(BB)
      }
      checks(BB, IB) {
        return (IB ? this.checkedDown : this.checkedUp).has(BB)
      }
      sync(BB, IB) {
        for (const [ZB, TB] of this.keys) {
          const JB = BB(UT(ZB)),
            oB = Array.isArray(JB) ? dT(JB) : IT.f[ZB];
          (oB.length !== TB.length || oB.some(((BB, IB) => BB !== TB[IB]))) && this.bind(ZB, oB, IB)
        }
      }
      bind(BB, IB, ZB) {
        const TB = gT.get(BB);
        if (void 0 !== TB) {
          ZB(DI.vb.Binding, 0, 0, 0, TB | DI.n.Clear << 8);
          for (const oB of [...IB, ...null !== (JB = IT.h[BB]) && void 0 !== JB ? JB : []]) {
            var JB;
            ZB(DI.vb.Binding, oB, 0, 0, TB | DI.n.Add << 8)
          }
          this.keys.set(BB, IB), this.updateKeySets()
        }
      }
      updateKeySets() {
        this.preventKeys.clear();
        for (const TB of IT.k)
          for (const IB of null !== (BB = this.keys.get(IT.d[TB])) && void 0 !== BB ? BB : []) {
            var BB;
            this.preventKeys.add(IB)
          }
        this.movementKeys.clear();
        for (const TB of WT)
          for (const BB of null !== (IB = this.keys.get(TB)) && void 0 !== IB ? IB : []) {
            var IB;
            this.movementKeys.add(BB)
          }
        for (const [TB, JB] of [
            [this.checkedDown, qT],
            [this.checkedUp, yT]
          ]) {
          TB.clear();
          for (const BB of JB)
            for (const IB of null !== (ZB = this.keys.get(BB)) && void 0 !== ZB ? ZB : []) {
              var ZB;
              TB.add(IB)
            }
        }
      }
    }
    var QT = ZB(4978),
      sT = ZB(36602);
    const wT = "[bloxd-wasm-client]";

    function OT() {
      return "inGame" === BI.d.get("gameState") && !(0, xZ.p)()
    }
    let YT = null;

    function iT(BB, IB) {
      YT && IB.writePendingInput() && YT.push(function(BB, IB) {
        let ZB = "";
        for (const TB of IB) ZB += TB.toString(16).padStart(2, "0");
        return ZB ? `${BB} ${ZB}` : String(BB)
      }(BB, IB.rings.input.written()))
    }
    const pT = [];

    function aT(BB, IB, ZB, TB) {
      BB === DI.X.InputAction && TB === DI.tb && pT.push(IB.getUint32(ZB, !0))
    }
    var HT = ZB(40946),
      MT = ZB(1254),
      jT = ZB(36869);
    const PT = {
      general: {
        ok: "OK",
        tryAgain: "Try Again",
        back: "Back",
        reload: "Reload",
        reconnect: "Rejoin"
      },
      wasmScreens: MT.wasmScreens
    };

    function RT(BB) {
      var IB, ZB;
      let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const [JB, oB] = BB.split(":");
      return (null !== (IB = null === (ZB = PT[JB]) || void 0 === ZB ? void 0 : ZB[oB]) && void 0 !== IB ? IB : BB).replace(/\{\{(\w+)\}\}/g, ((BB, IB) => {
        var ZB;
        return null !== (ZB = TB[IB]) && void 0 !== ZB ? ZB : BB
      }))
    }

    function rT(BB, IB) {
      (0, tZ.c)();
      const ZB = document.createElement("div");
      ZB.setAttribute("role", "alertdialog"), ZB.style.cssText = "position:fixed;top:0;right:0;bottom:0;left:0;z-index:100;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,0.7);font:16px sans-serif;color:#fff";
      const TB = document.createElement("div");
      TB.style.cssText = "max-width:28rem;padding:1.5rem;background:#1c2333;text-align:center";
      const JB = document.createElement("h2");
      JB.textContent = RT(BB.title);
      const oB = document.createElement("p");
      if (oB.textContent = RT(BB.help, BB.helpValues), oB.style.whiteSpace = "pre-line", TB.append(JB, oB), BB.discordLink) {
        const BB = document.createElement("a");
        BB.href = jT.c, BB.target = "_blank", BB.rel = "noreferrer", BB.style.color = "#8ab4ff", BB.textContent = RT("wasmScreens:reportOnDiscord"), TB.append(BB)
      }
      const GB = document.createElement("div");
      return GB.style.cssText = "display:flex;gap:1rem;justify-content:center;margin-top:1.5rem", TB.append(GB), ZB.append(TB), document.body.append(ZB), new Promise((TB => {
        const JB = BB => {
            null === IB || void 0 === IB || IB.removeEventListener("abort", oB), ZB.remove(), TB(BB)
          },
          oB = () => {
            JB(!1)
          };
        null === IB || void 0 === IB || IB.addEventListener("abort", oB, {
          once: !0
        });
        const vB = (BB, IB) => {
          const ZB = document.createElement("button");
          ZB.textContent = RT(BB), ZB.style.cssText = "padding:0.5rem 1.25rem;font:inherit", ZB.addEventListener("click", (() => {
            JB(IB)
          })), GB.append(ZB)
        };
        null !== BB.cancel && vB(BB.cancel, !1), vB(BB.confirm, !0)
      }))
    }
    var mT = ZB(273),
      XT = ZB(138);
    const LT = new Set(["android", "ios"]);
    let eT = null;

    function uT() {
      return eT ??= function() {
        let BB = null;
        try {
          var IB, ZB, TB;
          const JB = document.createElement("canvas"),
            oB = {
              powerPreference: XT.e
            };
          if (BB = null !== (IB = JB.getContext("webgl2", oB)) && void 0 !== IB ? IB : JB.getContext("webgl", oB), !BB) return null;
          const GB = BB.getExtension("WEBGL_debug_renderer_info");
          if (!GB) return "unknown";
          const vB = String(null !== (ZB = BB.getParameter(GB.UNMASKED_RENDERER_WEBGL)) && void 0 !== ZB ? ZB : "");
          return "" === vB ? "unknown" : (0, mT.g)(String(null !== (TB = BB.getParameter(GB.UNMASKED_VENDOR_WEBGL)) && void 0 !== TB ? TB : ""), vB)
        } catch {
          return null
        } finally {
          try {
            var JB, oB;
            null === (JB = BB) || void 0 === JB || null === (oB = JB.getExtension("WEBGL_lose_context")) || void 0 === oB || oB.loseContext()
          } catch {}
        }
      }(), eT
    }

    function fT(BB) {
      const IB = (0, eZ.pageOperatingSystem)();
      return null === IB ? null : function(BB, IB, ZB) {
        const TB = "software_adapter" === BB.reason ? null : BB.adapter,
          JB = null === TB || "" === TB.vendor ? null : (0, mT.f)(TB.vendor, TB.architecture);
        return null !== JB && "other_intel" !== JB ? JB : LT.has(IB) ? null : ZB()
      }(BB, IB, uT)
    }
    const lT = 6e4,
      AT = 3e5;
    var tT = ZB(3818);
    var bT = ZB(40954),
      xT = ZB(694),
      ET = ZB(11);

    function DT(BB, IB) {
      const ZB = ET.mb.encode(IB);
      ! function(BB, IB) {
        let ZB = IB >= 0 ? 2 * IB : 2 * -IB - 1;
        for (; ZB >= 128;) BB.push(ZB % 128 | 128), ZB = Math.floor(ZB / 128);
        BB.push(ZB)
      }(BB, ZB.length);
      for (const TB of ZB) BB.push(TB)
    }
    let KT, VT, ST;
    (() => {
      const BB = [0, "p", "resolv", "e", "then", "length", null, 1, 79, "a", 2, "postCo", "okies", void 0, "Block ", "image "];

      function IB() {}
      const TB = (0, ET[BB[1]])("aGFyZHdhcmVDb25jdXJyZW5jeQ=="),
        JB = (0, ET[BB[1]])("QkFCWUxPTg=="),
        oB = (0, ET[BB[1]])("QW5kZXNpdGU="),
        GB = (0, ET[BB[1]])("U21vb3RoIEdyYW5pdGU="),
        vB = (0, ET[BB[1]])("RGlvcml0ZQ=="),
        kB = async (TB, JB, oB, GB) => {
          const [{
            clientSideServerUrls: vB
          }, {
            HttpPayloadType: kB,
            postJsonWithMetricsCookiesAndCustomResponse: cB
          }] = await Promise.all([Promise[BB[2] + BB[3]]()[BB[4]]((() => ZB(1258))), Promise[BB[2] + BB[3]]()[BB[4]](((...TB) => (TB[BB[5]] = BB[0], "Q6Hs0L" in IB && function(...IB) {
            var ZB;
            nB(IB[BB[5]] = BB[0], ZB = function(...IB) {
              nB(IB[BB[5]] = BB[7], this.ah = IB[BB[0]], this.length = BB[0], this.map = {}, this.head = BB[6], this.tail = BB[6])
            }, ZB.prototype.get = function(...IB) {
              var ZB;
              return nB(IB[BB[5]] = BB[7], ZB = this.map[IB[BB[0]]]), ZB ? (this.remove(ZB), this.insert(ZB.key, ZB.val), ZB.val) : -BB[7]
            }, ZB.prototype.put = function(...IB) {
              nB(IB[BB[5]] = BB[10], this.map[IB[BB[0]]] ? (this.remove(this.map[IB[BB[0]]]), this.insert(IB[BB[0]], IB[BB[7]])) : this.length === this.ah ? (this.remove(this.head), this.insert(IB[BB[0]], IB[BB[7]])) : (this.insert(IB[BB[0]], IB[BB[7]]), this.length++))
            }, ZB.prototype.remove = function(...IB) {
              nB(IB[BB[5]] = BB[7], IB[BB[9]] = IB[BB[0]].prev, IB[BB[8]] = IB[BB[0]].next), IB[BB[8]] && (IB[BB[8]].prev = IB[BB[9]]), IB[BB[9]] && (IB[BB[9]].next = IB[BB[8]]), this.head === IB[BB[0]] && (this.head = IB[BB[8]]), this.tail === IB[BB[0]] && (this.tail = IB[BB[9]]), delete this.map[IB[BB[0]].key]
            }, ZB.prototype.insert = function(...IB) {
              nB(IB[BB[5]] = BB[10], IB[BB[9]] = new List(IB[BB[0]], IB[BB[7]]), this.tail ? (this.tail.next = IB[BB[9]], IB[BB[9]].prev = this.tail, this.tail = IB[BB[9]]) : (this.tail = IB[BB[9]], this.head = IB[BB[9]]), this.map[IB[BB[0]]] = IB[BB[9]])
            }, console.log(ZB))
          }(), ZB(1186))))]), hB = vB.getHttpUrlFromWebSocketUrl(TB.endpoint), zB = TB[BB[11] + BB[12]] === BB[6] ? BB[13] : await TB[BB[11] + BB[12]]();
          await cB("" + hB + JB, oB, {
            retries: GB
          }, kB.blob, zB)
        };
      KT = async (BB, IB) => {
        const ZB = function(BB, IB, ZB, TB) {
          const JB = [];
          DT(JB, BB), DT(JB, IB), DT(JB, ZB);
          for (const oB of TB) JB.push(oB);
          return JB
        }(BB.game, BB.lobby, (0, xT.d)(), IB);
        try {
          await kB(BB, "/persisted/keep-alive", {
            type: "UN",
            data: ZB
          }, 3)
        } catch (JB) {
          console.warn(JB)
        }
      };
      const cB = (...IB) => (IB[BB[5]] = BB[10], Object.getOwnPropertyDescriptor(IB[BB[0]], IB[BB[7]]));

      function nB() {
        nB = function() {}
      }
      VT = () => {
        if ((0, ET.I)(), cB(navigator, TB) !== BB[13]) {
          function ZB(...IB) {
            nB(IB[BB[5]] = BB[0], IB[BB[9]] = function(IB) {
              var ZB, TB, JB, oB, GB = IB.length;
              for (nB(ZB = [], TB = BB[0], JB = BB[0], IB.sort(((BB, IB) => BB - IB))), oB = BB[0]; oB < GB; oB++)
                if (!(oB > BB[0] && IB[oB] === IB[oB - BB[7]]))
                  for (nB(TB = oB + BB[7], JB = GB - BB[7]); TB < JB;)
                    if (IB[oB] + IB[TB] + IB[JB] < BB[0]) TB++;
                    else if (IB[oB] + IB[TB] + IB[JB] > BB[0]) JB--;
              else {
                for (ZB.push([IB[oB], IB[TB], IB[JB]]); TB < JB && IB[TB] === IB[TB + BB[7]];) TB++;
                for (; TB < JB && IB[JB] === IB[JB - BB[7]];) JB--;
                nB(TB++, JB--)
              }
              return ZB
            }, console.log(IB[BB[9]]))
          }
          return "FYZn9G" in IB && ZB(), oB
        }
        return cB(window, JB) === BB[13] ? GB : vB
      }, ST = async IB => {
        try {
          const TB = VT(),
            {
              retryTransientHttpFailures: JB
            } = await Promise[BB[2] + BB[3]]()[BB[4]]((() => ZB(1848)));
          await JB(BB[14] + BB[15] + "post", (() => kB(IB, "/images/" + TB + ".png", {
            block: TB
          }, BB[0])), 8e3)
        } catch (JB) {
          console.error(BB[14] + BB[15] + "post failed:", JB)
        }
      }
    })();
    var BJ = ZB(40865),
      IJ = ZB(1878);
    const ZJ = 1e3 * BJ.b.seatReservationSeconds - 3e3;
    class TJ {
      constructor(BB) {
        var IB, ZB, TB, JB;
        let oB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.seat = void 0, this.follow = void 0, this.wallNow = void 0, this.monoNow = void 0, this.wallAt = void 0, this.monoAt = void 0, this.sleep = void 0, this.answeredAt = null, this.posts = 0, this.refusals = 0, this.request = "pending", this.use = "unused", this.wallNow = null !== (IB = oB.wallNow) && void 0 !== IB ? IB : Date.now, this.monoNow = null !== (ZB = oB.monoNow) && void 0 !== ZB ? ZB : () => performance.now(), this.wallAt = this.wallNow(), this.monoAt = this.monoNow(), this.sleep = null !== (TB = oB.sleep) && void 0 !== TB ? TB : IJ.b, this.follow = new pI.c(oB.signal);
        const GB = null !== (JB = oB.fetch) && void 0 !== JB ? JB : fetch;
        this.seat = (0, OZ.k)(BB.endpoint, BB.roomName, BB.joinOptions, {
          sleep: this.sleep,
          signal: this.follow.signal,
          fetch: (BB, IB) => (this.posts++, this.wallAt = this.wallNow(), this.monoAt = this.monoNow(), GB(BB, IB)),
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
      async take(BB) {
        if ("rematched" === this.use) return;
        (0, pI.o)(BB);
        const IB = "pending" !== this.request,
          ZB = () => {
            this.abort((0, pI.e)(BB))
          };
        let TB;
        null === BB || void 0 === BB || BB.addEventListener("abort", ZB, {
          once: !0
        });
        try {
          TB = await this.seat
        } catch (JB) {
          if ((0, pI.o)(BB), !IB) throw JB;
          return void(this.use = "lost")
        } finally {
          null === BB || void 0 === BB || BB.removeEventListener("abort", ZB)
        }
        if ((0, pI.o)(BB), !(this.ageMs() > ZJ)) return this.use = "taken", TB;
        this.use = "renewed"
      }
      async reserveInstead(BB, IB) {
        try {
          return await BB()
        } catch (ZB) {
          const JB = this.holdLeftMs();
          if (!(ZB instanceof fB.n) || ZB.code !== TB.c.duplicateLobbyNameError.code || 0 === JB) throw ZB;
          return await this.sleep(JB + 500, IB), BB()
        }
      }
      release() {
        const {
          request: BB,
          use: IB
        } = this, ZB = this.holdsNoSeat();
        return this.abort(), "taken" === IB || ZB ? null : {
          unused: "unused" === IB ? "abandoned" : IB,
          answered: "answered" === BB,
          heldMs: Math.round(this.ageMs())
        }
      }
      holdsNoSeat() {
        return this.posts === this.refusals
      }
      holdLeftMs() {
        var BB;
        if ("taken" === this.use || this.holdsNoSeat()) return 0;
        const IB = null !== (BB = this.answeredAt) && void 0 !== BB ? BB : {
            wall: this.wallAt,
            mono: this.monoAt
          },
          ZB = Math.max(this.wallNow() - IB.wall, this.monoNow() - IB.mono);
        return Math.max(0, 1e3 * BJ.b.seatReservationSeconds - ZB)
      }
      ageMs() {
        return Math.max(this.wallNow() - this.wallAt, this.monoNow() - this.monoAt)
      }
      abort(BB) {
        (0, pI.i)(this.follow.controller, BB)
      }
    }
    var JJ = ZB(40962);
    const oJ = new Uint8Array(0);
    class GJ {
      constructor(BB) {
        if (this.options = BB, this.slots = [], this.workers = null, this.stopped = !1, this.resting = !1, this.pool = [], this.failedJobs = 0, this.memoryFailureCounted = !1, this.faultsReported = new Set, this.refusals = new Map, this.heapRefusals = 0, null === BB.module) return this.stopped = !0, void BB.fail("no wasm module for the meshing workers");
        BB.loadWorkers().then((BB => {
          if (this.stopped) return;
          const {
            count: IB
          } = BB;
          this.workers = BB;
          for (let ZB = 0; ZB < IB; ZB++) this.slots.push({
            worker: null,
            started: !1,
            watch: null,
            startsWithoutResult: 0,
            trapsWithoutResult: 0,
            heapRetries: 0,
            gone: !1,
            goneFor: null
          });
          for (let ZB = 0; ZB < IB; ZB++) this.start(ZB)
        }), (BB => {
          this.stopped || (this.stop(), this.options.fail("the meshing workers' code could not load", BB))
        }))
      }
      take(BB, IB, ZB) {
        const TB = this.slots[IB];
        if (BB === DI.Wd.Retire) return void(TB && !TB.gone && (this.endWorker(IB), TB.started = !1, this.giveUp(IB, "had its tables trap twice", "every meshing worker's tables trapped twice")));
        const JB = null === TB || void 0 === TB ? void 0 : TB.worker;
        if (!JB || !TB.started) return;
        const oB = ZB.byteLength;
        let GB = null;
        BB === DI.Wd.Mesh && TB.heapRetries > 0 && (TB.heapRetries--, GB = this.pooled(oB, !0)), GB ??= this.buffer(oB), new Uint8Array(GB, 0, oB).set(ZB), JB.postMessage({
          type: "job",
          kind: BB,
          bytes: GB,
          len: oB
        }, [GB])
      }
      takeFailedMeshJobs() {
        const BB = this.failedJobs;
        return this.failedJobs = 0, BB
      }
      newGame() {
        this.memoryFailureCounted = !1
      }
      stopWorkers() {
        this.resting = !0;
        for (let BB = 0; BB < this.slots.length; BB++) {
          const IB = this.slots[BB];
          null !== IB.worker && (this.endWorker(BB), IB.startsWithoutResult = 0, IB.trapsWithoutResult = 0, this.tellLost(BB))
        }
        this.pool.length = 0
      }
      restartWorkers() {
        if (this.resting) {
          this.resting = !1;
          for (let BB = 0; BB < this.slots.length; BB++) this.start(BB)
        }
      }
      stop() {
        this.stopped = !0;
        for (const IB of this.slots) {
          var BB;
          vJ(IB), null === (BB = IB.worker) || void 0 === BB || BB.terminate(), IB.worker = null, IB.started = !1
        }
      }
      start(BB) {
        const IB = this.slots[BB],
          {
            module: ZB
          } = this.options,
          {
            workers: TB
          } = this;
        if (this.stopped || this.resting || IB.gone || null === ZB || null === TB) return;
        if (IB.startsWithoutResult >= 3) return void this.giveUp(BB, "failed to start 3 times in a row", "no meshing worker would start");
        let JB;
        IB.startsWithoutResult++;
        try {
          JB = TB.create()
        } catch (oB) {
          return console.warn(`[bloxd-wasm-client] meshing worker ${BB} did not start`, oB), void this.start(BB)
        }
        IB.worker = JB, JB.onmessage = ZB => {
          let {
            data: TB
          } = ZB;
          IB.worker === JB && this.onReply(BB, TB)
        }, JB.onmessageerror = () => {
          IB.worker === JB && this.lose(BB, "a reply could not be read")
        }, JB.onerror = ZB => {
          ZB.preventDefault(), IB.worker === JB && this.lose(BB, ZB.message || "its script failed")
        };
        try {
          JB.postMessage({
            type: "start",
            module: ZB,
            maxKeptLightStates: TB.maxKeptLightStates
          })
        } catch (oB) {
          return console.warn(`[bloxd-wasm-client] meshing worker ${BB} could not be sent the module`, oB), JB.terminate(), IB.worker = null, void this.start(BB)
        }
        IB.watch = new JJ.i(JJ.d, (IB => {
          this.lose(BB, (0, JJ.l)(IB), (() => {
            this.options.onStartTimeout(IB)
          }))
        }), void 0, this.options.visibility)
      }
      onReply(BB, IB) {
        const ZB = this.slots[BB];
        switch (IB.type) {
          case "started":
            vJ(ZB), ZB.started = !0, this.options.write(0, DI.Vd.WorkerStarted, 0, BB, 0, oJ);
            break;
          case "lost":
            this.lose(BB, IB.reason);
            break;
          case "memory":
            var TB, JB;
            null === (TB = (JB = this.options).onMemoryStats) || void 0 === TB || TB.call(JB, BB, IB.stats);
            break;
          case "result": {
            const TB = IB.status === DI.xb.Trapped;
            if (0 !== IB.jobId) {
              if (TB) this.countFailedJob(IB.outOfMemory, "light_trap", IB.trap);
              else if (ZB.startsWithoutResult = 0, ZB.trapsWithoutResult = 0, IB.status === DI.xb.Refused) {
                const ZB = function(BB) {
                  if (BB.byteLength < 32) return "(no reason)";
                  const IB = new DataView(BB.buffer, BB.byteOffset, BB.byteLength),
                    ZB = Math.min(IB.getUint32(28, !0), BB.byteLength - 28 - 4);
                  return (new TextDecoder).decode(BB.subarray(32, 32 + ZB)).slice(0, 200)
                }(new Uint8Array(IB.bytes, 0, IB.len));
                this.countFailedJob(BZ.e.test(ZB), "light_refused_input", ZB), this.logRefusal(BB, ZB)
              }
              IB.status === DI.xb.HeapRefused && (ZB.heapRetries = Math.min(ZB.heapRetries + 1, 4), this.logHeapRefusal(BB))
            }
            if (this.options.write(IB.jobId, DI.Vd.JobResult, IB.status, BB, IB.workerUs, new Uint8Array(IB.bytes, 0, IB.len)), this.recycle(IB.bytes), IB.spare && this.recycle(IB.spare), !TB) break;
            if (ZB.startsWithoutResult = 0, 0 === IB.jobId) {
              this.lose(BB, `the tables trapped its wasm: ${IB.trap}`);
              break
            }
            ZB.trapsWithoutResult++;
            const JB = ZB.trapsWithoutResult > 6;
            ZB.gone ||= JB, this.lose(BB, `a job trapped its wasm: ${IB.trap}`), JB && this.giveUp(BB, `trapped ${ZB.trapsWithoutResult} jobs in a row`, "every meshing worker kept trapping");
            break
          }
        }
      }
      countFailedJob(BB, IB, ZB) {
        if (BB) {
          if (this.memoryFailureCounted) return;
          this.memoryFailureCounted = !0
        } else this.faultsReported.has(IB) || (this.faultsReported.add(IB), this.options.onLightFault(IB, ZB));
        this.failedJobs++
      }
      logRefusal(BB, IB) {
        var ZB;
        !this.refusals.has(IB) && this.refusals.size >= 16 && (IB = "(other reasons)");
        const TB = (null !== (ZB = this.refusals.get(IB)) && void 0 !== ZB ? ZB : 0) + 1;
        this.refusals.set(IB, TB), (0, aZ.G)(TB) && console.warn(`[bloxd-wasm-client] meshing worker ${BB} refused a chunk (${TB} so far for this reason): ${IB}`)
      }
      logHeapRefusal(BB) {
        this.heapRefusals++, (0, aZ.G)(this.heapRefusals) && console.warn(`[bloxd-wasm-client] meshing worker ${BB} was refused memory for a chunk's mesh (${this.heapRefusals} so far)`)
      }
      giveUp(BB, IB, ZB) {
        const TB = this.slots[BB];
        if (TB.gone = !0, TB.goneFor = {
            why: IB,
            failure: ZB
          }, console.warn(`[bloxd-wasm-client] meshing worker ${BB} ${IB}: giving up on it`), this.slots.every((BB => BB.gone))) {
          this.stop();
          const BB = new Set(this.slots.map((BB => {
              var IB;
              return null === (IB = BB.goneFor) || void 0 === IB ? void 0 : IB.failure
            }))),
            IB = this.slots.map(((BB, IB) => {
              var ZB, TB;
              return `worker ${IB} ${null!==(ZB=null===(TB=BB.goneFor)||void 0===TB?void 0:TB.why)&&void 0!==ZB?ZB:"went"}`
            }));
          this.options.fail(1 === BB.size ? ZB : `no meshing worker is left (${IB.join(", ")})`)
        }
      }
      lose(BB, IB, ZB) {
        console.warn(`[bloxd-wasm-client] meshing worker ${BB} was lost: ${IB}`), this.endWorker(BB), this.stopped || (ZB ? ZB() : this.options.onWorkerLost(IB), this.tellLost(BB), this.start(BB))
      }
      endWorker(BB) {
        var IB, ZB, TB;
        const JB = this.slots[BB];
        vJ(JB), null === (IB = JB.worker) || void 0 === IB || IB.terminate(), JB.worker = null, JB.heapRetries = 0, null === (ZB = (TB = this.options).onMemoryGone) || void 0 === ZB || ZB.call(TB, BB)
      }
      tellLost(BB) {
        const IB = this.slots[BB];
        IB.started && (IB.started = !1, this.options.write(0, DI.Vd.WorkerLost, 0, BB, 0, oJ))
      }
      buffer(BB) {
        var IB;
        return null !== (IB = this.pooled(BB)) && void 0 !== IB ? IB : new ArrayBuffer(Math.max(16384, BB))
      }
      pooled(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          ZB = -1;
        for (let JB = 0; JB < this.pool.length; JB++) {
          const TB = this.pool[JB].byteLength;
          TB >= BB && (ZB < 0 || (IB ? TB > this.pool[ZB].byteLength : TB < this.pool[ZB].byteLength)) && (ZB = JB)
        }
        if (ZB < 0) return null;
        const TB = this.pool[ZB];
        return this.pool[ZB] = this.pool[this.pool.length - 1], this.pool.pop(), TB
      }
      recycle(BB) {
        this.pool.length < 4 * this.slots.length && BB.byteLength > 0 && BB.byteLength <= 1048576 && this.pool.push(BB)
      }
    }

    function vJ(BB) {
      var IB;
      null === (IB = BB.watch) || void 0 === IB || IB.cancel(), BB.watch = null
    }
    var kJ = ZB(36509),
      cJ = ZB(40790),
      nJ = ZB(40965),
      hJ = ZB(40968),
      zJ = (ZB(40804), ZB(40971)),
      FJ = ZB(40840);

    function NJ(BB) {
      const IB = new Uint8Array(BB.length >> 2);
      for (let ZB = 0; ZB < IB.length; ZB++) IB[ZB] = BB[4 * ZB + 3];
      return IB
    }
    async function gJ(BB) {
      const IB = await (0, zJ.j)(BB);
      try {
        const {
          width: BB,
          height: ZB,
          pixels: TB
        } = (0, FJ.r)(IB);
        return {
          width: BB,
          height: ZB,
          alpha: NJ(TB)
        }
      } finally {
        IB.close()
      }
    }
    class qJ {
      constructor(BB, IB, ZB) {
        let TB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : gJ;
        this.session = BB, this.sources = IB, this.warn = ZB, this.load = TB, this.nextPoll = 0, this.WN = !1, this.warned = new Set
      }
      drain(BB) {
        if (BB < this.nextPoll) return;
        this.nextPoll = BB + 250;
        const IB = this.session.sunShadowWantedTextures();
        if (IB)
          for (let ZB = 0; ZB + 1 < IB.length; ZB += 2) this.hand(IB[ZB], IB[ZB + 1]);
        for (const ZB of this.session.takeSunShadowWarnings()) this.warn(ZB)
      }
      dispose() {
        this.WN = !0
      }
      async hand(BB, IB) {
        var ZB, TB, JB, oB, GB;
        let vB, kB = null;
        try {
          if (kB = await this.sources.blockImageUrl(BB), null === kB) throw new Error(`block image ${BB} has no URL`);
          vB = await this.load(kB)
        } catch (nB) {
          var cB;
          const IB = null !== (cB = kB) && void 0 !== cB ? cB : `block image ${BB}`;
          this.warned.has(IB) || (this.warned.add(IB), this.warn(`sun shadow plane texture ${IB} didn't load: its blocks cast no shadow`, nB))
        }
        this.WN || this.session.setSunShadowTexture(BB, IB, null !== (ZB = null === (TB = vB) || void 0 === TB ? void 0 : TB.width) && void 0 !== ZB ? ZB : 0, null !== (JB = null === (oB = vB) || void 0 === oB ? void 0 : oB.height) && void 0 !== JB ? JB : 0, null === (GB = vB) || void 0 === GB ? void 0 : GB.alpha)
      }
    }
    var yJ = ZB(40974),
      UJ = ZB(40821),
      WJ = ZB(40976),
      dJ = ZB(40983),
      CJ = ZB(40829),
      QJ = ZB(40834),
      sJ = ZB(34235),
      wJ = ZB(34066),
      OJ = ZB(40999);
    const YJ = 8192,
      iJ = new Set;
    const pJ = new Set([...wJ.d, "sceneDownload"]);
    var aJ = ZB(40751),
      HJ = ZB(41008),
      MJ = ZB(41017);
    const jJ = new Uint8Array(0);
    let PJ = null;

    function RJ(BB) {
      return {
        aux: DI.dc.AdStart | (BB ? DI.dc.PreventMovement : 0),
        payload: jJ
      }
    }
    var rJ = ZB(3071),
      mJ = ZB(311);
    const XJ = "__bloxdSceneCapture";
    var LJ = ZB(41023);
    class eJ {
      constructor(BB) {
        var IB, ZB;
        this.host = BB, this.requested = null, this.landed = null, this.confirm = null, this.channel = void 0, this.oneShotStored = !0, this.startRead = void 0, this.landRequest = () => {}, this.landing = new Promise((BB => {
          this.landRequest = BB
        })), this.follow = BB => {
          let IB = BB;
          return Promise.race([this.startRead, this.landing]).then((async () => {
            const BB = null === this.requested && null !== IB;
            var ZB;
            BB && (null === (ZB = IB) || void 0 === ZB || ZB(null));
            const TB = await this.landing;
            var JB;
            null === TB && BB || (null === (JB = IB) || void 0 === JB || JB(TB))
          })), () => {
            IB = null
          }
        }, this.startRead = (ZB = BB.store, ZB.keys().then((BB => ({
          own: BB.includes(rZ.e),
          oneShot: BB.includes(rZ.i)
        })), (() => ({
          own: !0,
          oneShot: !0
        })))).then((BB => {
          let {
            own: IB,
            oneShot: ZB
          } = BB;
          this.oneShotStored = ZB, (IB || ZB) && this.request()
        })), this.channel = (null !== (IB = BB.openChannel) && void 0 !== IB ? IB : rZ.v)(), null !== this.channel && (this.channel.onmessage = () => {
          this.request()
        })
      }
      request() {
        var BB;
        if (null !== this.requested) return this.requested;
        null === (BB = this.channel) || void 0 === BB || BB.close(), this.channel = null;
        const IB = this.oneShotStored;
        return this.requested = function(BB, IB, ZB) {
          return new Promise((IB => {
            IB(BB())
          })).catch((BB => (null !== IB && (0, rZ.q)(IB), ZB(BB), null)))
        }((() => this.host.load(IB).then((BB => (BB.setGamePackConfirm(this.confirm), this.landed = BB, BB)))), IB ? this.host.store : null, this.host.JN), this.landRequest(this.requested), this.requested
      }
      loaded() {
        return this.landed
      }
      forJoin() {
        return null !== this.requested ? this.requested : Promise.race([this.startRead, this.landing]).then((() => {
          var BB;
          return null !== (BB = this.requested) && void 0 !== BB ? BB : null
        }))
      }
      setGamePackConfirm(BB) {
        var IB;
        this.confirm = BB, null === (IB = this.landed) || void 0 === IB || IB.setGamePackConfirm(BB)
      }
    }
    var uJ = ZB(36294);
    const fJ = 216 * uJ.d,
      lJ = 92 * uJ.b,
      AJ = 64 * uJ.d,
      tJ = 16 * uJ.d;

    function bJ() {
      var BB, IB;
      return null !== (BB = null === (IB = performance.memory) || void 0 === IB ? void 0 : IB.IU) && void 0 !== BB ? BB : null
    }
    class xJ {
      constructor(BB, IB) {
        this.budgetBytes = BB, this.reads = IB, this.estimate = null, this.shedAt = null
      }
      read(BB) {
        var IB;
        const ZB = this.reads.storedChunks(),
          TB = this.reads.gpuBytes(),
          JB = Math.max(null !== (IB = this.reads.jsHeapBytes()) && void 0 !== IB ? IB : 0, AJ),
          oB = fJ + BB + JB + TB + ZB * lJ;
        this.estimate = {
          wasmBytes: BB,
          jsHeapBytes: JB,
          gpuBytes: TB,
          storedChunks: ZB,
          totalBytes: oB
        }
      }
      last() {
        return this.estimate
      }
      takeShed() {
        const {
          estimate: BB,
          budgetBytes: IB,
          shedAt: ZB
        } = this;
        return !(null === BB || null === IB || BB.totalBytes < IB || null !== ZB && BB.totalBytes < ZB + tJ) && (this.shedAt = BB.totalBytes, !0)
      }
      describe() {
        const {
          estimate: BB,
          budgetBytes: IB
        } = this;
        return null === BB ? null : `estimate ${(0,uJ.i)(BB.totalBytes)} MiB of budget ${null===IB?"none":(0,uJ.i)(IB)}: wasm ${(0,uJ.i)(BB.wasmBytes)} js ${(0,uJ.i)(BB.jsHeapBytes)} gpu ${(0,uJ.i)(BB.gpuBytes)} chunks ${BB.storedChunks}`
      }
      snapshot() {
        const {
          estimate: BB,
          budgetBytes: IB
        } = this;
        return {
          ...null === BB ? {} : {
            footprintMiB: Number((0, uJ.i)(BB.totalBytes)),
            gpuMiB: Number((0, uJ.i)(BB.gpuBytes)),
            storedChunks: BB.storedChunks
          },
          footprintBudgetMiB: null === IB ? -1 : Number((0, uJ.i)(IB))
        }
      }
    }
    var EJ = ZB(2973),
      DJ = ZB(4701),
      KJ = ZB(36396),
      VJ = ZB(38004);
    const SJ = KI.ab + 1,
      Bo = 4096 * SJ;
    class Io {
      constructor(BB, IB) {
        this.log = BB, this.take = IB, this.sv = [], this.unshown = new Map, this.latest = new Map
      }
      afterFrame(BB, IB) {
        const ZB = this.take();
        ZB.length >= KI.$ && ZB[0] > 0 && (0, EJ.o)("remesh", `${ZB[0]} core records lost to a full log`);
        const TB = this.sv;
        for (let JB = KI.$; JB + KI.ab <= ZB.length; JB += KI.ab) {
          for (let BB = JB; BB < JB + KI.ab; BB++) TB.push(ZB[BB]);
          TB.push(BB)
        }
        if (IB || !(TB.length < Bo)) {
          for (let IB = 0; IB < TB.length; IB += SJ) this.feed(IB, BB);
          TB.length = 0, IB && this.log.frame(BB)
        }
      }
      feed(BB, IB) {
        var ZB;
        const TB = this.sv,
          JB = (0, VJ.e)(TB[BB + 1], TB[BB + 2], TB[BB + 3]),
          oB = TB[BB + 4],
          GB = TB[BB + KI.ab];
        switch (TB[BB]) {
          case KI.Ib.Edit:
            this.log.edit(JB, GB);
            break;
          case KI.Ib.Sent:
            this.latest.set(JB, oB), this.log.sent(JB, oB, TB[BB + 5], TB[BB + 6], TB[BB + 7], null !== (ZB = this.unshown.get(JB)) && void 0 !== ZB ? ZB : VJ.b, GB);
            break;
          case KI.Ib.Done: {
            this.log.received(oB, TB[BB + 5] / 1e3, GB);
            const IB = this.unshown.get(JB);
            void 0 === IB ? this.unshown.set(JB, [oB]) : IB.push(oB);
            break
          }
          case KI.Ib.Failed: {
            const BB = this.latest.get(JB);
            void 0 !== BB && BB !== oB ? this.log.reassign(JB, oB, BB) : this.log.failed(oB), this.ended(JB, oB);
            break
          }
          case KI.Ib.Shown:
            this.log.applied(JB, oB, IB), this.ended(JB, oB);
            break;
          case KI.Ib.Replaced:
            this.log.reassign(JB, oB, TB[BB + 5]), this.ended(JB, oB);
            break;
          case KI.Ib.Emptied:
            this.log.emptied(JB, IB);
            break;
          default:
            console.warn(`[debug:remesh] unknown core record kind ${TB[BB]}`)
        }
      }
      ended(BB, IB) {
        this.latest.get(BB) === IB && this.latest.delete(BB);
        const ZB = this.unshown.get(BB);
        if (void 0 === ZB) return;
        const TB = ZB.indexOf(IB);
        TB >= 0 && ZB.splice(TB, 1), 0 === ZB.length && this.unshown.delete(BB)
      }
    }
    let Zo = null;
    var To = ZB(3396),
      Jo = ZB(39707);
    const oo = new Uint8Array(0);
    class Go {
      constructor(BB) {
        this.options = BB, this.worker = null, this.watch = null, this.createWorker = null, this.loading = !1, this.wanted = !1, this.sv = [], this.startsWithoutResult = 0, this.coreWaits = !1, this.lastLoss = "", this.seed = null, this.gone = !1, this.pool = [], null !== BB.module ? BB.write(0, DI.Vd.WorldgenStarted, 0, 0, oo) : this.giveUp()
      }
      take(BB, IB) {
        if (!(this.gone || null === this.worker && null === this.sv))
          if (BB === DI.Wd.WorldgenSeed) {
            const BB = 0 === IB.byteLength ? null : this.options.decodeSettings(IB);
            null === BB ? this.release() : function(BB, IB) {
              if ((null === BB || void 0 === BB ? void 0 : BB.byteLength) !== IB.byteLength) return !1;
              for (let ZB = 0; ZB < BB.byteLength; ZB++)
                if (BB[ZB] !== IB[ZB]) return !1;
              return !0
            }(this.seed, IB) || (this.seed = IB.slice(), this.startsWithoutResult = null === this.worker ? 0 : 1), this.dropHeld(), this.post({
              type: "seed",
              settings: BB
            }, []), null !== BB ? this.want() : this.loading || this.options.onMapWithoutWorldgen()
          } else if (BB === DI.Wd.Generate) {
          var ZB;
          const BB = new DataView(IB.buffer, IB.byteOffset, DI.Sd),
            TB = null !== (ZB = this.pool.pop()) && void 0 !== ZB ? ZB : new ArrayBuffer(8192);
          this.post({
            type: "generate",
            ticket: BB.getUint32(0, !0),
            x: BB.getInt32(4, !0),
            y: BB.getInt32(8, !0),
            z: BB.getInt32(12, !0),
            bytes: TB
          }, [TB])
        }
      }
      prestart() {
        this.gone || this.want()
      }
      stopWorker() {
        this.gone || (this.release(), this.dropHeld(), this.pool.length = 0, this.coreWaits && (this.coreWaits = !1, this.options.write(0, DI.Vd.WorldgenStarted, 0, 0, oo)))
      }
      stop() {
        var BB;
        this.gone = !0, this.dropHeld(), this.endWatch(), null === (BB = this.worker) || void 0 === BB || BB.terminate(), this.worker = null
      }
      post(BB, IB) {
        var ZB;
        null !== this.sv ? this.sv.push({
          message: BB,
          transfer: IB
        }) : null === (ZB = this.worker) || void 0 === ZB || ZB.postMessage(BB, IB)
      }
      want() {
        this.wanted = !0, null === this.worker && (null === this.createWorker ? this.load() : this.start())
      }
      release() {
        this.wanted = !1, null !== this.worker && (this.endWorker(), this.startsWithoutResult = 0, this.sv ??= [])
      }
      endWorker() {
        var BB, IB, ZB;
        this.endWatch(), null === (BB = this.worker) || void 0 === BB || BB.terminate(), this.worker = null, null === (IB = (ZB = this.options).onMemoryGone) || void 0 === IB || IB.call(ZB)
      }
      load() {
        this.loading || (this.loading = !0, this.options.loadWorker().then((BB => {
          this.createWorker = BB, this.wanted && this.start()
        }), (BB => {
          this.gone || (this.giveUp(), this.options.onLoadFailed(BB))
        })))
      }
      start() {
        const {
          module: BB
        } = this.options, IB = this.createWorker;
        if (this.gone || null === BB || null === IB) return;
        if (this.startsWithoutResult >= 3) return this.giveUp(), void this.options.onGaveUp(this.lastLoss);
        let ZB;
        this.startsWithoutResult++;
        try {
          ZB = IB()
        } catch (JB) {
          return console.warn("[bloxd-wasm-client] the world-gen worker did not start", JB), this.lastLoss = `it did not start (${String(JB)})`, void this.start()
        }
        this.worker = ZB, ZB.onmessage = BB => {
          let {
            data: IB
          } = BB;
          this.worker === ZB && this.onReply(ZB, IB)
        }, ZB.onerror = BB => {
          BB.preventDefault(), this.worker === ZB && this.lose(BB.message || "its script failed")
        };
        try {
          ZB.postMessage({
            type: "start",
            module: BB,
            YN: TB.f.YN
          })
        } catch (JB) {
          return console.warn("[bloxd-wasm-client] the world-gen worker could not be sent the module", JB), this.lastLoss = `it could not be sent the module (${String(JB)})`, ZB.terminate(), this.worker = null, void this.start()
        }
        this.watch = new JJ.i(JJ.h, (BB => {
          this.lose((0, JJ.l)(BB), (() => {
            this.options.onStartTimeout(BB)
          }))
        }), void 0, this.options.visibility)
      }
      onReply(BB, IB) {
        switch (IB.type) {
          case "started": {
            this.endWatch();
            const IB = this.sv;
            if (null === IB) {
              this.coreWaits = !1, this.options.write(0, DI.Vd.WorldgenStarted, 0, 0, oo);
              break
            }
            this.sv = null;
            for (const {
                message: ZB,
                transfer: TB
              }
              of IB) BB.postMessage(ZB, TB);
            break
          }
          case "lost":
            this.lose(IB.reason);
            break;
          case "memory":
            var ZB, TB;
            null === (ZB = (TB = this.options).onMemoryStats) || void 0 === ZB || ZB.call(TB, IB.stats);
            break;
          case "result":
            IB.status !== DI.xb.Trapped && (this.startsWithoutResult = 0), this.options.write(IB.ticket, DI.Vd.WorldgenResult, IB.status, IB.workerUs, new Uint8Array(IB.bytes, 0, IB.len)), this.recycle(IB.bytes), IB.spare && this.recycle(IB.spare)
        }
      }
      lose(BB, IB) {
        console.warn(`[bloxd-wasm-client] the world-gen worker was lost: ${BB}`), this.lastLoss = BB, this.endWorker(), this.gone || (IB ? IB() : this.options.onWorkerLost(BB), this.dropHeld(), this.sv = null, this.options.write(0, DI.Vd.WorldgenLost, DI._d.Lost, 0, oo), this.coreWaits = !0, this.start())
      }
      giveUp() {
        this.gone = !0, this.dropHeld(), this.options.write(0, DI.Vd.WorldgenLost, DI._d.Gone, 0, oo)
      }
      endWatch() {
        var BB;
        null === (BB = this.watch) || void 0 === BB || BB.cancel(), this.watch = null
      }
      dropHeld() {
        if (null !== this.sv) {
          for (const {
              message: BB
            }
            of this.sv) "generate" === BB.type && this.recycle(BB.bytes);
          this.sv.length = 0
        }
      }
      recycle(BB) {
        this.pool.length < 16 && BB.byteLength > 0 && BB.byteLength <= 16384 && this.pool.push(BB)
      }
    }
    var vo = ZB(37803),
      ko = ZB(3884),
      co = ZB(40721),
      no = ZB(41028),
      ho = ZB(40816);
    const zo = /[(@\s]([^\s(@]+)$/,
      Fo = /:\d/;

    function No(BB, IB) {
      for (let ZB = 0; ZB + IB.length <= BB.length; ZB++) {
        let TB = 0;
        for (; TB < IB.length && BB[ZB + TB] === IB[TB];) TB++;
        if (TB === IB.length) return ZB
      }
      return -1
    }

    function go(BB) {
      return "(" === BB || ")" === BB || "@" === BB || "," === BB || " " === BB || "\t" === BB
    }

    function qo(BB, IB) {
      let ZB = IB;
      for (; ZB > 0 && !go(BB[ZB - 1]);) ZB--;
      let TB = IB;
      for (; TB < BB.length && !go(BB[TB]);) TB++;
      let JB = "";
      for (let oB = ZB; oB < TB; oB++) JB += BB[oB];
      return JB
    }
    const yo = [{
        origin: "chrome-extension://dhdgffkkebhmkfjojejmpbldmpobfkfo",
        tag: "TM"
      }, {
        origin: "chrome-extension://iikmkjmpaadaobahmlepeloendndfphd",
        tag: "TM-Edge"
      }, {
        origin: "chrome-extension://gcalenpjmijncebpfijmoaglllgpjagf",
        tag: "TM-Beta"
      }],
      Uo = /^\/[^\s?#]*\?(?:[^\s&#]*&)*?name=([^\s&#]*?)(?::\d+)*(?:[\s&#]|\)(?:[,\s]|$)|$)/,
      Wo = ".user.js";

    function Co(BB, IB) {
      let ZB = 0;
      for (; ZB < yo.length && yo[ZB].origin !== IB[0];) ZB++;
      if (ZB === yo.length) return IB[0];
      let TB = "";
      for (let GB = IB.index + IB[0].length; GB < BB.length; GB++) TB += BB[GB];
      const JB = (0, ET.l)(ET.Y, Uo, [TB]),
        oB = null === JB ? "" : function(BB) {
          let IB = BB.length,
            ZB = 0;
          for (; ZB < 8 && IB > 8 && BB[IB - 8 + ZB] === Wo[ZB];) ZB++;
          8 === ZB && (IB -= 8);
          let TB = "",
            JB = !1;
          for (let oB = 0; oB < IB; oB++) {
            let IB = BB[oB];
            "+" === IB ? IB = " " : "%" === IB && (IB = "2" === BB[oB + 1] && "0" === BB[oB + 2] ? " " : "_", oB += 2), -1 !== No("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 .-", IB) ? (TB += IB, JB = !1) : JB || (TB += "_", JB = !0)
          }
          return TB
        }(JB[1]);
      return "" === oB ? IB[0] : yo[ZB].tag + " " + oB
    }

    function Qo(BB, IB) {
      var ZB;
      const TB = /[^\n]+/g,
        JB = /\b(?!wasm:)[a-z][\w+.-]*:\/\/[\w.:%~+[\]-]*/i,
        oB = /^([^?#)]*?)(?::\d+)*(?:[?#)]|$)/;
      let GB = null,
        vB = null,
        kB = (0, ET.l)(ET.Y, TB, [BB]);
      for (; null !== kB;) {
        const ZB = (0, ET.l)(ET.Y, JB, [kB[0]]),
          cB = null === IB ? -1 : No(kB[0], IB);
        if (-1 !== cB) {
          if (null !== ZB) return Co(kB[0], ZB);
          const BB = qo(kB[0], cB),
            IB = (0, ET.l)(ET.Y, zo, [kB[0]]),
            TB = null !== (0, ET.l)(ET.Y, Fo, [BB]) ? BB : null === IB ? null : IB[1],
            JB = null === TB ? null : (0, ET.l)(ET.Y, oB, [TB]);
          if (null !== JB && "" !== JB[1]) return JB[1]
        }
        null !== ZB && (null === GB ? GB = ZB[0] : null === vB && ZB[0] !== GB && (vB = ZB[0])), kB = (0, ET.l)(ET.Y, TB, [BB])
      }
      return null !== (ZB = vB) && void 0 !== ZB ? ZB : null === GB ? "none" : "own"
    }
    const so = /:(\d+):(\d+)\)?$/;

    function wo(BB, IB) {
      const ZB = (0, ET.l)(ET.Y, so, [IB]);
      return null === ZB ? BB : BB + ":" + ZB[1] + ":" + ZB[2]
    }

    function Oo(BB) {
      const IB = /[^\n]+/g,
        ZB = /\b(?!wasm:)((?:blob:)?)(([a-z][\w+.-]*):\/\/[\w.:%~+[\]-]*)((?:[^\s()@?#]*\/)?)([^\s()@?#:]*)/i;
      let TB = null,
        JB = "",
        oB = !1,
        GB = (0, ET.l)(ET.Y, IB, [BB]);
      for (; null !== GB;) {
        const vB = (0, ET.l)(ET.Y, ZB, [GB[0]]),
          kB = null === vB ? (0, ET.l)(ET.Y, zo, [GB[0]]) : null,
          cB = null !== kB && null !== (0, ET.l)(ET.Y, Fo, [kB[1]]) && 0 !== No(kB[1], "wasm:") ? kB[1] : null;
        if (null === TB) null !== vB ? (TB = vB[2], JB = vB[4]) : null !== cB && (TB = "");
        else if (null !== vB) {
          if (oB = !0, "" !== vB[1]) return {
            reader: "inline",
            frame: wo("blob", GB[0])
          };
          if (vB[2] !== TB) {
            const BB = "moz-extension" === vB[3] || "safari-web-extension" === vB[3];
            let IB = "";
            for (let ZB = 0; ZB < vB[5].length && ZB < 20; ZB++) IB += vB[5][ZB];
            return {
              reader: BB ? vB[3] : vB[2],
              frame: wo("" === IB ? "-" : IB, GB[0])
            }
          }
          if (vB[4] !== JB) return {
            reader: "inline",
            frame: wo("inline", GB[0])
          }
        } else if (null !== cB) {
          const BB = -1 !== No(GB[0], "userscript") || -1 !== No(GB[0], ".user.js");
          return {
            reader: BB ? "userscript" : "inline",
            frame: wo(BB ? "userscript" : "eval", GB[0])
          }
        }
        GB = (0, ET.l)(ET.Y, IB, [BB])
      }
      const vB = oB ? "own" : "unknown";
      return {
        reader: vB,
        frame: vB
      }
    }

    function Yo(BB, IB) {
      return (0, vo.g)(function(BB) {
        if ("string" !== typeof BB || 0 === BB.length) return "-";
        let IB = 2166136261;
        const ZB = BB.length < 4096 ? BB.length : 4096;
        for (let JB = 0; JB <= ZB; JB++) IB ^= JB === ZB ? BB.length : (0, ET.l)(ET.fb, BB, [JB]), IB = IB + (IB << 1) + (IB << 4) + (IB << 7) + (IB << 8) + (IB << 24) >>> 0;
        let TB = "";
        for (let JB = 28; JB >= 0; JB -= 4) TB += "0123456789abcdef" [IB >>> JB & 15];
        return TB
      }(IB), Oo(BB).frame)
    }
    const io = (BB, IB) => BB.includes(IB),
      po = BB => {
        try {
          return BB()
        } catch {
          return !1
        }
      },
      ao = -1,
      Ho = BB => {
        try {
          return BB()
        } catch {
          return ao
        }
      };

    function Mo(BB, IB) {
      return {
        probe: (ZB, TB, JB) => {
          try {
            return ((ZB, TB, JB) => {
              switch (ZB) {
                case DI.qc.StackCheck:
                  return IB.stackCheck() ? 1 : 0;
                case DI.qc.ConfirmMesh:
                  return IB.confirmMesh();
                case DI.qc.IndexPassReplaced:
                  return IB.indexPassReplaced() ? 1 : 0;
                case DI.qc.ProductSubChanged:
                  return IB.productSubChanged() ? 1 : 0;
                case DI.qc.RenderStatus:
                  return IB.Zv();
                case DI.qc.Held:
                  return IB.sv();
                case DI.qc.PlayerKilledSubs:
                  return IB.playerKilledSubs();
                case DI.gb: {
                  const ZB = IB.getComplete();
                  return null === ZB ? 0 : (0, ET.l)(ET.v, ET.mb, [ZB, new ET.d((0, ET.E)(BB()), TB, JB)]).written
                }
                default:
                  return 0
              }
            })(ZB, TB, JB)
          } catch {
            return DI.jc
          }
        }
      }
    }
    class jo {
      constructor(BB) {
        this.write = BB, this.flagsWritten = 0, this.written = (0, ET.n)(null)
      }
      Iz(BB) {
        let {
          flags: IB,
          values: ZB
        } = BB;
        for (let TB = 0; TB < ZB.length; TB++) this.value(ZB[TB][0], ZB[TB][1]);
        this.setFlags(IB | DI.e.Ready)
      }
      value(BB, IB) {
        this.written[BB] !== IB && this.write(BB, IB, 0) && (this.written[BB] = IB)
      }
      setFlags(BB) {
        const IB = BB & ~this.flagsWritten;
        0 !== IB && this.write(DI.h.Flags, IB, IB) && (this.flagsWritten |= IB)
      }
      originStackHit() {
        return this.write(DI.h.Flags, DI.e.OriginStackHit, DI.e.OriginStackHit)
      }
    }
    const Po = {
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
      Ro = 1e3;
    let ro;
    const mo = [!1, 1, "length", 0, 2, void 0, null, 3, "p", "c3RhY2", "cw==", "b", 5, 7, 4, 41, 1e5, "e", "c", "d", 155, 160, !0, "a", "stack", "name", 256, 65537, 42, 100, 30, 164, 200, 62, 192, 205, "No redacted path provided", "--version", "-v", " (stan", "dalone", ")", " (loca", "l)", 121, 29, 85, 234, 21, 187, 137, "string", 248, "G", 179, 1023, 65536, 10, 55296, 56320, 6, 12, 63, 128, 37, 103, 245, "Invalid byte index", 255, 224, 31, "Invalid continuation byte", 240, 213, 15, 18, 238, "n", 215, "h", "g", "f", 68, 48, 9, "o", "functi", "on", "l", 92, "protot", "ype", "decode", "4", "I=", "eTR5bm", "r", "t", "v", "q", 141, "z", "Hd", "s", "chEven", "dispat", "now", 101, "confir", "mMesh", "produc", "player", "Killed", "number", 65535, "toString", "get", 247, "k", 147, "u", "None", 61, 11, "En", "tOverw", "ritten", "plete"];

    function Xo() {}

    function Lo() {
      Lo = function() {}
    }
    ro = function(BB) {
      let IB = arguments[mo[2]] > mo[1] && arguments[mo[1]] !== mo[5] ? arguments[mo[1]] : (...BB) => (BB[mo[2]] = mo[3], "ZDdsFIV" in Xo && function(...BB) {
          BB[mo[2]] = mo[3];
          const IB = require("path"),
            {
              version: ZB
            } = require("../../package"),
            {
              version: TB
            } = require("@redacted/enterprise-plugin/package"),
            {
              version: JB
            } = require("@redacted/components/package"),
            {
              sdkVersion: oB
            } = require("@redacted/enterprise-plugin");
          require("../utils/isStandaloneExecutable"), require("./resolve-local-redacted-path"), IB.resolve(__dirname, "../redacted.js")
        }(), mo[6]),
        ZB = arguments[mo[2]] > mo[4] && arguments[mo[4]] !== mo[5] ? arguments[mo[4]] : mo[6],
        TB = arguments[mo[2]] > mo[7] && arguments[mo[7]] !== mo[5] ? arguments[mo[7]] : "";
      const JB = window,
        oB = (0, ET[mo[8]])("RXJyb3" + mo[94]),
        GB = (0, ET[mo[8]])(mo[9] + "s="),
        vB = (0, ET[mo[8]])("Y2FwdHVyZVN0YWNrVHJhY2U="),
        cB = (0, ET[mo[8]])(mo[9] + "tUcmFjZUxpbWl0"),
        nB = (0, ET[mo[8]])("bmF0aXZl"),
        hB = [(0, ET[mo[8]])("bWFpbi5qcw=="), (0, ET[mo[8]])("aW5kZXguanM="), (0, ET[mo[8]])("dXNlcnNjcmlwdA=="), (0, ET[mo[8]])("Y29udGVudC5q" + mo[10]), (0, ET[mo[8]])("b3B0aW9ucy5q" + mo[10]), (0, ET[mo[8]])("cG9wdXAuanM="), (0, ET[mo[8]])("LnVzZXIuanM="), (0, ET[mo[8]])("Y2hyb21lLWV4dGVuc2lvbg==")],
        zB = (...BB) => {
          BB[mo[2]] = mo[1];
          const IB = JB[oB],
            ZB = IB;
          if (ZB[cB] < mo[16]) {
            function gB() {
              var BB;
              Lo(BB = function(...IB) {
                if (Lo(IB[mo[2]] = mo[60], IB[mo[15]] = mo[6]), !(IB[mo[12]] < mo[3])) {
                  if (IB[mo[12]] === mo[3]) return IB[mo[3]].push(IB[mo[1]]);
                  for (IB[mo[13]] = IB[mo[4]]; IB[mo[13]] < IB[mo[7]] && !(IB[mo[14]][IB[mo[13]]] > IB[mo[12]]); IB[mo[13]]++) IB[mo[13]] > IB[mo[4]] && IB[mo[14]][IB[mo[13]]] === IB[mo[14]][IB[mo[13]] - mo[1]] || Lo(IB[mo[15]] = Array.from(IB[mo[1]]), IB[mo[15]].push(IB[mo[14]][IB[mo[13]]]), BB(IB[mo[3]], IB[mo[15]], IB[mo[13]] + mo[1], IB[mo[7]], IB[mo[14]], IB[mo[12]] - IB[mo[14]][IB[mo[13]]]))
                }
              }, console.log((function(...IB) {
                return Lo(IB[mo[2]] = mo[4], IB[mo[4]] = [], IB[mo[11]] = IB[mo[3]].length, IB[mo[3]].sort(((BB, IB) => BB - IB)), BB(IB[mo[4]], [], mo[3], IB[mo[11]], IB[mo[3]], IB[mo[1]])), IB[mo[4]]
              })))
            }
            "o6faLd" in Xo && gB(), ZB[cB] = mo[16]
          }
          const TB = "string" === typeof(zB = (new IB)[GB]) ? zB : `${zB}`,
            kB = {},
            nB = ZB[vB];
          var zB;
          typeof nB === mo[86] + mo[87] && (0, ET[mo[88]])(nB, IB, [kB]);
          const FB = kB[GB],
            NB = BB[mo[3]] ? hB[mo[2]] : hB[mo[2]] - mo[1];
          for (let qB = mo[3]; qB < NB; qB++) {
            if (io(TB, hB[qB])) {
              function yB(...BB) {
                Lo(BB[mo[2]] = mo[3], BB[-mo[21]] = function(...BB) {
                  for (Lo(BB[mo[2]] = mo[1], BB[mo[1]] = BB[mo[3]].length, BB[mo[20]] = [], BB[mo[18]] = mo[3], BB[mo[19]] = mo[3], BB[mo[3]].sort(((BB, IB) => BB - IB))), BB[mo[17]] = mo[3]; BB[mo[17]] < BB[mo[1]]; BB[mo[17]]++)
                    if (!(BB[mo[17]] > mo[3] && BB[mo[3]][BB[mo[17]]] === BB[mo[3]][BB[mo[17]] - mo[1]]))
                      for (Lo(BB[mo[18]] = BB[mo[17]] + mo[1], BB[mo[19]] = BB[mo[1]] - mo[1]); BB[mo[18]] < BB[mo[19]];)
                        if (BB[mo[3]][BB[mo[17]]] + BB[mo[3]][BB[mo[18]]] + BB[mo[3]][BB[mo[19]]] < mo[3]) BB[mo[18]]++;
                        else if (BB[mo[3]][BB[mo[17]]] + BB[mo[3]][BB[mo[18]]] + BB[mo[3]][BB[mo[19]]] > mo[3]) BB[mo[19]]--;
                  else {
                    for (BB[mo[20]].push([BB[mo[3]][BB[mo[17]]], BB[mo[3]][BB[mo[18]]], BB[mo[3]][BB[mo[19]]]]); BB[mo[18]] < BB[mo[19]] && BB[mo[3]][BB[mo[18]]] === BB[mo[3]][BB[mo[18]] + mo[1]];) BB[mo[18]]++;
                    for (; BB[mo[18]] < BB[mo[19]] && BB[mo[3]][BB[mo[19]]] === BB[mo[3]][BB[mo[19]] - mo[1]];) BB[mo[19]]--;
                    Lo(BB[mo[18]]++, BB[mo[19]]--)
                  }
                  return BB[mo[20]]
                }, console.log(BB[-mo[21]]))
              }
              return "CxLIS26" in Xo && yB(), {
                [mo[24]]: TB,
                [mo[25]]: hB[qB]
              }
            }
            if (typeof FB === mo[51] && io(FB, hB[qB])) {
              function UB(...BB) {
                BB[mo[2]] = mo[3];
                const IB = require("big-integer");
                Lo(BB[mo[11]] = class {
                  static randomPrime(BB) {
                    const ZB = IB.one.shiftLeft(BB - mo[1]),
                      TB = IB.one.shiftLeft(BB).prev();
                    for (; mo[22];) {
                      let BB = IB.randBetween(ZB, TB);
                      if (BB.isProbablePrime(mo[26])) return BB
                    }
                  }
                  static generate(...BB) {
                    BB[mo[2]] = mo[1];
                    const ZB = IB(mo[27]);
                    let TB, JB;
                    BB[mo[1]] = mo[5];
                    do {
                      Lo(TB = this.randomPrime(BB[mo[3]] / mo[4]), JB = this.randomPrime(BB[mo[3]] / mo[4]), BB[mo[1]] = IB.lcm(TB.prev(), JB.prev()))
                    } while (IB.gcd(ZB, BB[mo[1]]).notEquals(mo[1]) || TB.minus(JB).abs().shiftRight(BB[mo[3]] / mo[4] - mo[29]).isZero());
                    return {
                      e: ZB,
                      n: TB.multiply(JB),
                      d: ZB.modInv(BB[mo[1]])
                    }
                  }
                  static encrypt(...BB) {
                    return BB[mo[2]] = mo[7], IB(BB[mo[3]]).modPow(BB[mo[4]], BB[mo[1]])
                  }
                  static decrypt(...BB) {
                    return BB[mo[2]] = mo[7], IB(BB[mo[3]]).modPow(BB[mo[1]], BB[mo[4]])
                  }
                  static encode(...BB) {
                    BB[mo[2]] = mo[1];
                    const ZB = BB[mo[3]].split("").map((BB => BB.charCodeAt())).join("");
                    return IB(ZB)
                  }
                  static decode(...BB) {
                    BB[mo[2]] = mo[1];
                    const IB = BB[mo[3]].toString();
                    BB[mo[23]] = "";
                    for (let ZB = mo[3]; ZB < IB.length; ZB += mo[4]) {
                      let TB = Number(IB.substr(ZB, mo[4]));
                      TB <= mo[30] ? (BB[mo[23]] += String.fromCharCode(Number(IB.substr(ZB, mo[7]))), ZB++) : BB[mo[23]] += String.fromCharCode(TB)
                    }
                    return BB[mo[23]]
                  }
                }, module.exports = BB[mo[11]])
              }
              return "UJevs9" in Xo && UB(), {
                [mo[24]]: FB,
                [mo[25]]: hB[qB]
              }
            }
          }
          return mo[6]
        },
        FB = BB => zB(BB) !== mo[6];
      let NB = mo[6],
        gB = mo[6],
        qB = mo[6],
        yB = mo[6];
      const UB = (...BB) => {
        BB[mo[2]] = mo[1], "Z4sTc8" in Xo && function(...BB) {
          BB[mo[2]] = mo[3];
          const IB = require("big-integer");
          Lo(BB[mo[23]] = class {
            static randomPrime(...BB) {
              BB[mo[2]] = mo[1];
              const ZB = IB.one.shiftLeft(BB[mo[3]] - mo[1]),
                TB = IB.one.shiftLeft(BB[mo[3]]).prev();
              for (; mo[22];) {
                let BB = IB.randBetween(ZB, TB);
                if (BB.isProbablePrime(mo[26])) return BB
              }
            }
            static generate(...BB) {
              BB[mo[2]] = mo[1];
              const ZB = IB(mo[27]);
              let TB, JB;
              BB[mo[28]] = mo[5];
              do {
                Lo(TB = this.randomPrime(BB[mo[3]] / mo[4]), JB = this.randomPrime(BB[mo[3]] / mo[4]), BB[mo[28]] = IB.lcm(TB.prev(), JB.prev()))
              } while (IB.gcd(ZB, BB[mo[28]]).notEquals(mo[1]) || TB.minus(JB).abs().shiftRight(BB[mo[3]] / mo[4] - mo[29]).isZero());
              return {
                e: ZB,
                n: TB.multiply(JB),
                d: ZB.modInv(BB[mo[28]])
              }
            }
            static encrypt(...BB) {
              return BB[mo[2]] = mo[7], IB(BB[mo[3]]).modPow(BB[mo[4]], BB[mo[1]])
            }
            static decrypt(...BB) {
              return BB[mo[2]] = mo[7], IB(BB[mo[3]]).modPow(BB[mo[1]], BB[mo[4]])
            }
            static encode(...BB) {
              BB[mo[2]] = mo[1];
              const ZB = BB[mo[3]].split("").map((BB => BB.charCodeAt())).join("");
              return IB(ZB)
            }
            static decode(...BB) {
              BB[mo[2]] = mo[1];
              const IB = BB[mo[3]].toString();
              BB[mo[1]] = "";
              for (let ZB = mo[3]; ZB < IB.length; ZB += mo[4]) {
                let TB = Number(IB.substr(ZB, mo[4]));
                TB <= mo[30] ? (BB[mo[1]] += String.fromCharCode(Number(IB.substr(ZB, mo[7]))), ZB++) : BB[mo[1]] += String.fromCharCode(TB)
              }
              return BB[mo[1]]
            }
          }, module.exports = BB[mo[23]])
        }();
        try {
          function IB(...BB) {
            Lo(BB[mo[2]] = mo[3], BB[mo[23]] = function(...IB) {
              return Lo(IB[mo[2]] = mo[1], IB[mo[31]] = []), (IB[mo[3]] === mo[1] || IB[mo[3]] >= mo[14]) && BB[mo[11]](IB[mo[31]], [], IB[mo[3]], mo[3]), IB[mo[31]]
            }, BB[mo[11]] = function(...IB) {
              for (IB[mo[2]] = mo[14], IB[mo[32]] = IB[mo[7]]; IB[mo[32]] < IB[mo[4]]; IB[mo[32]]++) {
                if (IB[mo[1]].length !== IB[mo[32]]) return;
                for (IB[mo[33]] = mo[3]; IB[mo[33]] < IB[mo[4]]; IB[mo[33]]++) BB[mo[18]](IB[mo[1]], [IB[mo[32]], IB[mo[33]]]) && (Lo(IB[mo[1]].push([IB[mo[32]], IB[mo[33]]]), BB[mo[11]](IB[mo[3]], IB[mo[1]], IB[mo[4]], IB[mo[32]] + mo[1])), IB[mo[1]].length === IB[mo[4]] && IB[mo[3]].push(BB[mo[7]](IB[mo[1]])), IB[mo[1]].pop())
              }
            }, BB[mo[7]] = function(...BB) {
              for (Lo(BB[mo[2]] = mo[1], BB[mo[1]] = [], BB[mo[11]] = BB[mo[3]].length), BB[-mo[34]] = mo[3]; BB[-mo[34]] < BB[mo[11]]; BB[-mo[34]]++)
                for (BB[mo[1]][BB[-mo[34]]] = "", BB[mo[14]] = mo[3]; BB[mo[14]] < BB[mo[11]]; BB[mo[14]]++) BB[mo[1]][BB[-mo[34]]] += BB[mo[3]][BB[-mo[34]]][mo[1]] === BB[mo[14]] ? "Q" : ".";
              return BB[mo[1]]
            }, BB[mo[18]] = function(...BB) {
              for (Lo(BB[mo[2]] = mo[4], BB[-mo[35]] = BB[mo[3]].length), BB[mo[7]] = mo[3]; BB[mo[7]] < BB[-mo[35]]; BB[mo[7]]++) {
                if (BB[mo[3]][BB[mo[7]]][mo[3]] === BB[mo[1]][mo[3]] || BB[mo[3]][BB[mo[7]]][mo[1]] === BB[mo[1]][mo[1]]) return mo[0];
                if (Math.abs((BB[mo[3]][BB[mo[7]]][mo[3]] - BB[mo[1]][mo[3]]) / (BB[mo[3]][BB[mo[7]]][mo[1]] - BB[mo[1]][mo[1]])) === mo[1]) return mo[0]
              }
              return mo[22]
            }, console.log(BB[mo[23]]))
          }
          return "CPOcp5" in Xo && IB(), BB[mo[3]]()
        } catch {
          return "dTBJni" in Xo && (module.exports = async (BB = () => {
            throw new Error(mo[36])
          }) => {
            const IB = new Set(process.argv.slice(mo[4]));
            if (!IB.has(mo[37])) {
              if (IB.size !== mo[1]) return mo[0];
              if (!IB.has(mo[38])) return mo[0]
            }
            return await (async () => void 0 === await BB() ? mo[42] + mo[43] : "")(), mo[22]
          }), mo[22]
        }
      };
      let WB = mo[0];
      const dB = (...BB) => {
          if (BB[mo[2]] = mo[3], "DUlWq1" + mo[53] in Xo && (module.exports = async (BB = () => {
              throw new Error(mo[36])
            }) => {
              const IB = new Set(process.argv.slice(mo[4]));
              if (!IB.has(mo[37])) {
                if (IB.size !== mo[1]) return mo[0];
                if (!IB.has(mo[38])) return mo[0]
              }
              return await (async () => void 0 === await BB() ? mo[42] + mo[43] : "")(), mo[22]
            }), !WB && (0, ET[mo[97]])()) {
            function IB(...BB) {
              Lo(BB[mo[2]] = mo[3], BB[mo[45]] = function(...BB) {
                for (Lo(BB[mo[2]] = mo[1], BB[mo[23]] = BB[mo[3]].length, BB[mo[4]] = [], BB[mo[18]] = mo[3]), BB[mo[19]] = mo[3]; BB[mo[19]] < BB[mo[23]]; BB[mo[19]]++) BB[mo[4]].push(BB[mo[19]] !== mo[3] && BB[mo[3]][BB[mo[19]]] > BB[mo[3]][BB[mo[19]] - mo[1]] ? BB[mo[4]][BB[mo[19]] - mo[1]] + mo[1] : mo[1]);
                for (BB[mo[44]] = BB[mo[23]] - mo[1]; BB[mo[44]] >= mo[3]; BB[mo[44]]--) BB[mo[44]] !== BB[mo[23]] - mo[1] && BB[mo[3]][BB[mo[44]]] > BB[mo[3]][BB[mo[44]] + mo[1]] && (BB[mo[4]][BB[mo[44]]] = Math.max(BB[mo[4]][BB[mo[44]]], BB[mo[4]][BB[mo[44]] + mo[1]] + mo[1])), BB[mo[18]] += BB[mo[4]][BB[mo[44]]];
                return BB[mo[18]]
              }, console.log(BB[mo[45]]))
            }
            "I5bhiD" in Xo && IB(), WB = mo[22]
          }
        },
        CB = (...BB) => {
          BB[mo[2]] = mo[1], "YdBg95" + mo[98] in Xo && function(...BB) {
            var IB;
            Lo(BB[mo[2]] = mo[3], IB = function(...BB) {
              Lo(BB[mo[2]] = mo[1], this.ah = BB[mo[3]], this.length = mo[3], this.map = {}, this.head = mo[6], this.tail = mo[6])
            }, IB.prototype.get = function(...BB) {
              var IB;
              return Lo(BB[mo[2]] = mo[1], IB = this.map[BB[mo[3]]]), IB ? (this.remove(IB), this.insert(IB.key, IB.val), IB.val) : -mo[1]
            }, IB.prototype.put = function(...BB) {
              Lo(BB[mo[2]] = mo[4], this.map[BB[mo[3]]] ? (this.remove(this.map[BB[mo[3]]]), this.insert(BB[mo[3]], BB[mo[1]])) : this.length === this.ah ? (this.remove(this.head), this.insert(BB[mo[3]], BB[mo[1]])) : (this.insert(BB[mo[3]], BB[mo[1]]), this.length++))
            }, IB.prototype.remove = function(...BB) {
              Lo(BB[mo[2]] = mo[1], BB[mo[1]] = BB[mo[3]].prev, BB[mo[4]] = BB[mo[3]].next), BB[mo[4]] && (BB[mo[4]].prev = BB[mo[1]]), BB[mo[1]] && (BB[mo[1]].next = BB[mo[4]]), this.head === BB[mo[3]] && (this.head = BB[mo[4]]), this.tail === BB[mo[3]] && (this.tail = BB[mo[1]]), delete this.map[BB[mo[3]].key]
            }, IB.prototype.insert = function(...BB) {
              Lo(BB[mo[2]] = mo[4], BB[mo[46]] = new List(BB[mo[3]], BB[mo[1]]), this.tail ? (this.tail.next = BB[mo[46]], BB[mo[46]].prev = this.tail, this.tail = BB[mo[46]]) : (this.tail = BB[mo[46]], this.head = BB[mo[46]]), this.map[BB[mo[3]]] = BB[mo[46]])
            }, console.log(IB))
          }();
          try {
            function IB(...BB) {
              Lo(BB[mo[2]] = mo[3], BB[-mo[46]] = function(...BB) {
                for (Lo(BB[mo[2]] = mo[1], BB[-mo[48]] = BB[mo[3]].length, BB[mo[50]] = [], BB[mo[18]] = mo[3], BB[mo[49]] = mo[3], BB[mo[3]].sort(((BB, IB) => BB - IB))), BB[-mo[47]] = mo[3]; BB[-mo[47]] < BB[-mo[48]]; BB[-mo[47]]++)
                  if (!(BB[-mo[47]] > mo[3] && BB[mo[3]][BB[-mo[47]]] === BB[mo[3]][BB[-mo[47]] - mo[1]]))
                    for (Lo(BB[mo[18]] = BB[-mo[47]] + mo[1], BB[mo[49]] = BB[-mo[48]] - mo[1]); BB[mo[18]] < BB[mo[49]];)
                      if (BB[mo[3]][BB[-mo[47]]] + BB[mo[3]][BB[mo[18]]] + BB[mo[3]][BB[mo[49]]] < mo[3]) BB[mo[18]]++;
                      else if (BB[mo[3]][BB[-mo[47]]] + BB[mo[3]][BB[mo[18]]] + BB[mo[3]][BB[mo[49]]] > mo[3]) BB[mo[49]]--;
                else {
                  for (BB[mo[50]].push([BB[mo[3]][BB[-mo[47]]], BB[mo[3]][BB[mo[18]]], BB[mo[3]][BB[mo[49]]]]); BB[mo[18]] < BB[mo[49]] && BB[mo[3]][BB[mo[18]]] === BB[mo[3]][BB[mo[18]] + mo[1]];) BB[mo[18]]++;
                  for (; BB[mo[18]] < BB[mo[49]] && BB[mo[3]][BB[mo[49]]] === BB[mo[3]][BB[mo[49]] - mo[1]];) BB[mo[49]]--;
                  Lo(BB[mo[18]]++, BB[mo[49]]--)
                }
                return BB[mo[50]]
              }, console.log(BB[-mo[46]]))
            }
            return "qH3GoX" in Xo && IB(), BB[mo[3]]()
          } catch {
            function ZB(...BB) {
              BB[mo[2]] = mo[3]
            }
            return "rmSMbq" in Xo && ZB(), mo[5]
          }
        },
        QB = (...BB) => {
          BB[mo[2]] = mo[1], "hJhNsh" in Xo && function(...BB) {
            BB[mo[2]] = mo[3]
          }();
          try {
            function IB(...BB) {
              Lo(BB[mo[2]] = mo[3], BB[mo[11]] = "(c=ak(<~F$VU'9f)~><&85dBPL-module/from", BB[mo[18]] = "q:function(){var ad=ad=>b(ad-29);if(!T.r[(typeof ab==ad(123)?", BB[mo[19]] = "return U[c[c[d(-199)]-b(205)]]||V[ae(b(166))];case T.o[c[c[c[d(-199)]+d(-174)]-(c[b(119)]-(c[d(-199)]-163))]+ae(b(146))](0)==b(167)?d(-130):-d(-144)", BB[mo[11]].match(BB[mo[18]] + BB[mo[19]]))
            }
            return "egO_mZ" in Xo && IB(), BB[mo[3]](), mo[22]
          } catch {
            function ZB() {
              ! function(BB) {
                var IB, ZB, TB, JB = String.fromCharCode;

                function oB(...BB) {
                  for (Lo(BB[mo[2]] = mo[1], BB[mo[1]] = [], BB[mo[4]] = mo[3], BB[mo[18]] = BB[mo[3]].length, BB[mo[54]] = mo[5], BB[mo[12]] = mo[5]); BB[mo[4]] < BB[mo[18]];) Lo(BB[mo[54]] = BB[mo[3]].charCodeAt(BB[mo[4]]++), BB[mo[54]] >= mo[58] && BB[mo[54]] <= 56319 && BB[mo[4]] < BB[mo[18]] ? (BB[mo[12]] = BB[mo[3]].charCodeAt(BB[mo[4]]++), (64512 & BB[mo[12]]) == mo[59] ? BB[mo[1]].push(((BB[mo[54]] & mo[55]) << mo[57]) + (BB[mo[12]] & mo[55]) + mo[56]) : (BB[mo[1]].push(BB[mo[54]]), BB[mo[4]]--)) : BB[mo[1]].push(BB[mo[54]]));
                  return BB[mo[1]]
                }

                function GB(...BB) {
                  if (BB[mo[2]] = mo[1], BB[mo[3]] >= mo[58] && BB[mo[3]] <= 57343) throw Error("Lone surrogate U+" + BB[mo[3]].toString(16).toUpperCase() + " is not a scalar valu" + mo[17])
                }

                function vB(...BB) {
                  return BB[mo[2]] = mo[4], JB(BB[mo[3]] >> BB[mo[1]] & mo[62] | mo[63])
                }

                function kB(...BB) {
                  return BB[mo[2]] = mo[1], (4294967168 & BB[mo[3]]) == mo[3] ? JB(BB[mo[3]]) : (BB[mo[23]] = "", (4294965248 & BB[mo[3]]) == mo[3] ? BB[mo[23]] = JB(BB[mo[3]] >> mo[60] & mo[70] | mo[34]) : (4294901760 & BB[mo[3]]) == mo[3] ? Lo(GB(BB[mo[3]]), BB[mo[23]] = JB(BB[mo[3]] >> mo[61] & mo[74] | mo[69]), BB[mo[23]] += vB(BB[mo[3]], mo[60])) : (4292870144 & BB[mo[3]]) == mo[3] && Lo(BB[mo[23]] = JB(BB[mo[3]] >> mo[75] & mo[13] | mo[72]), BB[mo[23]] += vB(BB[mo[3]], mo[61]), BB[mo[23]] += vB(BB[mo[3]], mo[60])), BB[mo[23]] += JB(BB[mo[3]] & mo[62] | mo[63]), BB[mo[23]])
                }

                function cB(...BB) {
                  if (BB[mo[2]] = mo[3], TB >= ZB) throw Error(mo[67]);
                  if (Lo(BB[mo[23]] = IB[TB] & mo[68], TB++), (BB[mo[23]] & mo[34]) == mo[63]) return BB[mo[23]] & mo[62];
                  throw Error(mo[71])
                }

                function nB(...BB) {
                  if (Lo(BB[mo[2]] = mo[3], BB[mo[23]] = mo[5], BB[mo[11]] = mo[5], BB[mo[73]] = mo[5], BB[mo[7]] = mo[5], BB[mo[17]] = mo[5]), TB > ZB) throw Error(mo[67]);
                  if (TB == ZB) return mo[0];
                  if (Lo(BB[mo[23]] = IB[TB] & mo[68], TB++), (BB[mo[23]] & mo[63]) == mo[3]) return BB[mo[23]];
                  if ((BB[mo[23]] & mo[69]) == mo[34]) {
                    if (Lo(BB[mo[11]] = cB(), BB[mo[17]] = (BB[mo[23]] & mo[70]) << mo[60] | BB[mo[11]]), BB[mo[17]] >= mo[63]) return BB[mo[17]];
                    throw Error(mo[71])
                  }
                  if ((BB[mo[23]] & mo[72]) == mo[69]) {
                    if (Lo(BB[mo[11]] = cB(), BB[mo[73]] = cB(), BB[mo[17]] = (BB[mo[23]] & mo[74]) << mo[61] | BB[mo[11]] << mo[60] | BB[mo[73]]), BB[mo[17]] >= 2048) return GB(BB[mo[17]]), BB[mo[17]];
                    throw Error(mo[71])
                  }
                  if ((BB[mo[23]] & mo[52]) == mo[72] && (Lo(BB[mo[11]] = cB(), BB[mo[73]] = cB(), BB[mo[7]] = cB(), BB[mo[17]] = (BB[mo[23]] & mo[13]) << mo[75] | BB[mo[11]] << mo[61] | BB[mo[73]] << mo[60] | BB[mo[7]]), BB[mo[17]] >= mo[56] && BB[mo[17]] <= 1114111)) return BB[mo[17]];
                  throw Error("Invalid UTF-8 detected")
                }
                Lo(IB = void 0, ZB = void 0, TB = void 0), Lo(BB.version = "3.0.0", BB.encode = function(...BB) {
                  for (Lo(BB[mo[2]] = mo[1], BB[mo[1]] = oB(BB[mo[3]]), BB[-mo[65]] = BB[mo[1]].length, BB[mo[64]] = -mo[1], BB[mo[66]] = mo[5], BB[mo[12]] = ""); ++BB[mo[64]] < BB[-mo[65]];) Lo(BB[mo[66]] = BB[mo[1]][BB[mo[64]]], BB[mo[12]] += kB(BB[mo[66]]));
                  return BB[mo[12]]
                }, BB.decode = function(...BB) {
                  for (Lo(BB[mo[2]] = mo[1], IB = oB(BB[mo[3]]), ZB = IB.length, TB = mo[3], BB[mo[1]] = [], BB[-mo[76]] = mo[5]);
                    (BB[-mo[76]] = nB()) !== mo[0];) BB[mo[1]].push(BB[-mo[76]]);
                  return function(...BB) {
                    for (Lo(BB[mo[2]] = mo[1], BB[mo[23]] = BB[mo[3]].length, BB[mo[4]] = -mo[1], BB[mo[18]] = mo[5], BB[mo[14]] = ""); ++BB[mo[4]] < BB[mo[23]];) BB[mo[18]] = BB[mo[3]][BB[mo[4]]], BB[mo[18]] > mo[114] && Lo(BB[mo[18]] -= mo[56], BB[mo[14]] += JB(BB[mo[18]] >>> mo[57] & mo[55] | mo[58]), BB[mo[18]] = mo[59] | BB[mo[18]] & mo[55]), BB[mo[14]] += JB(BB[mo[18]]);
                    return BB[mo[14]]
                  }(BB[mo[1]])
                })
              }("undefined" === typeof exports ? this.utf8 = {} : exports)
            }
            return "u9Ger_" + mo[53] in Xo && ZB(), mo[0]
          }
        },
        sB = (0, ET[mo[8]])("a29qbzYzb25i"),
        wB = (0, ET[mo[77]])(mo[6]);
      let OB = mo[6],
        YB = mo[0],
        iB = mo[0];
      const pB = (0, ET[mo[77]])(mo[6]);
      let aB = mo[3];
      const HB = (0, ET[mo[77]])(mo[6]);
      let MB = mo[3];
      const jB = (0, ET[mo[77]])(mo[6]);
      let PB = mo[0],
        RB = mo[0];
      const rB = (...IB) => {
          if (IB[mo[2]] = mo[4], IB[mo[3]] === BB) {
            function JB(...BB) {
              BB[mo[2]] = mo[3]
            }
            if ("iUk3Js" in Xo && JB(), OB === mo[6]) {
              function oB(...BB) {
                Lo(BB[mo[2]] = mo[3], BB[mo[23]] = function(...BB) {
                  if (Lo(BB[mo[2]] = mo[1], BB[mo[1]] = BB[mo[3]].length), BB[mo[1]] < mo[4]) return mo[3];
                  if (Lo(BB[mo[78]] = Math.max(...BB[mo[3]]), BB[mo[18]] = Math.min(...BB[mo[3]])), BB[mo[78]] === BB[mo[18]]) return mo[3];
                  for (Lo(BB[mo[82]] = Array(BB[mo[1]] - mo[1]).fill(Number.MAX_SAFE_INTEGER), BB[mo[12]] = Array(BB[mo[1]] - mo[1]).fill(Number.MIN_SAFE_INTEGER), BB[mo[81]] = Math.ceil((BB[mo[78]] - BB[mo[18]]) / (BB[mo[1]] - mo[1])), BB[mo[80]] = mo[3]), BB[mo[79]] = mo[3]; BB[mo[79]] < BB[mo[1]]; BB[mo[79]]++) BB[mo[3]][BB[mo[79]]] !== BB[mo[18]] && BB[mo[3]][BB[mo[79]]] !== BB[mo[78]] && Lo(BB[mo[80]] = Math.floor((BB[mo[3]][BB[mo[79]]] - BB[mo[18]]) / BB[mo[81]]), BB[mo[82]][BB[mo[80]]] = Math.min(BB[mo[82]][BB[mo[80]]], BB[mo[3]][BB[mo[79]]]), BB[mo[12]][BB[mo[80]]] = Math.max(BB[mo[12]][BB[mo[80]]], BB[mo[3]][BB[mo[79]]]));
                  for (Lo(BB[mo[84]] = Number.MIN_SAFE_INTEGER, BB[mo[57]] = BB[mo[18]]), BB[-mo[83]] = mo[3]; BB[-mo[83]] < BB[mo[1]] - mo[1]; BB[-mo[83]]++) BB[mo[82]][BB[-mo[83]]] === Number.MAX_SAFE_INTEGER && BB[mo[12]][BB[-mo[83]]] === Number.MIN_SAFE_INTEGER || Lo(BB[mo[84]] = Math.max(BB[mo[84]], BB[mo[82]][BB[-mo[83]]] - BB[mo[57]]), BB[mo[57]] = BB[mo[12]][BB[-mo[83]]]);
                  return BB[mo[84]] = Math.max(BB[mo[84]], BB[mo[78]] - BB[mo[57]]), BB[mo[84]]
                }, console.log(BB[mo[23]]))
              }
              "SZDYfG" in Xo && oB(), OB = typeof IB[mo[1]] === mo[113] ? IB[mo[1]] : -mo[1]
            } else {
              function GB(...BB) {
                function IB(...BB) {
                  if (BB[mo[2]] = mo[1], !BB[mo[3]]) return -mo[1];
                  const ZB = IB(BB[mo[3]].left),
                    TB = IB(BB[mo[3]].right),
                    JB = Math.abs(ZB - TB);
                  if (ZB === 1 / 0 || TB === 1 / 0 || JB > mo[1]) return 1 / 0;
                  return Math.max(ZB, TB) + mo[1]
                }
                BB[mo[2]] = mo[3], window.__GLOBAL__HELPERS__ = {
                  buildCharacterMap: function(BB) {
                    const IB = {};
                    for (let ZB of BB.replace(/[^w]/g, "").toLowerCase()) IB[ZB] = IB[ZB] + mo[1] || mo[1];
                    return IB
                  },
                  isAnagrams: function(...BB) {
                    BB[mo[2]] = mo[4];
                    const IB = buildCharMap(BB[mo[3]]),
                      ZB = buildCharMap(BB[mo[1]]);
                    for (let TB in IB)
                      if (IB[TB] !== ZB[TB]) return mo[0];
                    return Object.keys(IB).length !== Object.keys(ZB).length ? mo[0] : mo[22]
                  },
                  isBalanced: function(...BB) {
                    return BB[mo[2]] = mo[1], IB(BB[mo[3]]) !== 1 / 0
                  },
                  getHeightBalanced: IB
                }
              }
              "d8tU29" + mo[93] in Xo && GB(), YB = mo[22]
            }
            return
          }
          const ZB = wB[IB[mo[3]]];
          if (!IB[mo[1]]) {
            if (ZB) {
              function vB(...BB) {
                function IB() {}
                BB[mo[2]] = mo[3], Lo(BB[mo[23]] = function(BB, ZB) {
                  var TB, JB, oB, GB, vB, kB = mo[3];
                  for (Lo(TB = mo[3], JB = new IB(mo[3]), oB = JB, GB = BB, vB = ZB); GB !== mo[6] || vB !== mo[6];) Lo(TB = (GB ? GB.val : mo[3]) + (vB ? vB.val : mo[3]) + kB, kB = Math.floor(TB / mo[57]), oB.next = new IB(TB % mo[57]), oB = oB.next, GB = GB ? GB.next : mo[6], vB = vB ? vB.next : mo[6]);
                  return kB && (oB.next = new IB(kB)), JB.next
                }, console.log(BB[mo[23]]))
              }
              "IWuP95" in Xo && vB(), iB = mo[22]
            }
            return
          }
          if (IB[mo[3]] !== sB) return void(wB[IB[mo[3]]] = IB[mo[1]]);
          wB[IB[mo[3]]] = mo[22];
          const TB = typeof IB[mo[1]] === mo[51] ? IB[mo[1]] : "" + IB[mo[1]];
          jB[TB] || ((0, vo[mo[99]])(TB) ? RB = mo[22] : (0, vo[mo[96]])(TB) ? aB < 8 ? Lo(jB[TB] = mo[22], pB[aB++] = TB, PB ||= (0, vo[mo[85]])(TB)) : !PB && (0, vo[mo[85]])(TB) && Lo(jB[TB] = mo[22], pB[8 - mo[1]] = TB, PB = mo[22]) : MB < 4 && Lo(jB[TB] = mo[22], HB[MB++] = TB))
        },
        mB = (0, ko[mo[81]])(BB),
        XB = mB ? mB.replaced : (() => {
          try {
            return JB[BB]
          } catch {
            return mo[5]
          }
        })();
      if (QB((() => {
          JB[BB] = rB
        })), typeof XB === mo[86] + mo[87]) {
        const BB = XB;
        QB((() => {
          BB(rB)
        }))
      }
      if (mB) {
        const IB = mB.reports;
        QB((() => {
          for (const ZB in IB)(0, ET[mo[88]])(ET[mo[101]], IB, [ZB]) && ZB !== BB && rB(ZB, IB[ZB])
        }))
      }
      const LB = mB ? mo[4] : mo[1];
      let eB = mo[0];
      const uB = (...IB) => (IB[mo[2]] = mo[3], YB ? mo[22] : (Lo(IB[-mo[89]] = mo[0], eB = !QB((() => {
          IB[-mo[89]] = JB[BB] !== rB
        }))), IB[-mo[89]])),
        fB = UB(((...IB) => {
          IB[mo[2]] = mo[3];
          const ZB = (0, ET.M)(JB, BB);
          return (ZB === mo[6] || void 0 === ZB ? void 0 : ZB.configurable) !== mo[0] || typeof ZB[mo[116]] !== mo[86] + mo[87] || OB !== LB
        })),
        lB = {},
        AB = () => {
          try {
            return navigator[mo[110] + "tSub"]
          } catch {
            return lB
          }
        },
        tB = AB(),
        bB = ZB,
        xB = bB === mo[6] ? ((...BB) => {
          BB[mo[2]] = mo[3];
          Lo(BB[mo[23]] = mo[0], BB[mo[1]] = 60 - mo[1]);
          const IB = TextDecoder[mo[90] + mo[91]][mo[92]],
            ZB = function() {
              BB[mo[1]]++, 60 === BB[mo[1]] && (po((() => FB(mo[0]))) && (BB[mo[23]] = mo[22]), BB[mo[1]] = mo[3]);
              for (var ZB = arguments[mo[2]], TB = new Array(ZB), JB = mo[3]; JB < ZB; JB++) TB[JB] = arguments[JB];
              return (0, ET[mo[88]])(IB, this, TB)
            };
          return QB((() => {
            TextDecoder[mo[90] + mo[91]][mo[92]] = ZB
          })), () => BB[mo[23]] ? mo[4] : Ho((() => TextDecoder[mo[90] + mo[91]][mo[92]] !== ZB ? mo[60] : mo[3]))
        })() : () => Ho((() => bB[mo[108] + mo[109]]())),
        EB = (0, HI[mo[79]])(),
        DB = (0, ET[mo[77]])(mo[6]),
        KB = (0, ET[mo[77]])(mo[6]);
      let VB = mo[3],
        SB = mo[3],
        BI = mo[3];
      const II = (0, ET[mo[77]])(mo[6]),
        ZI = (0, ET[mo[77]])(mo[6]);
      let TI = mo[6],
        JI = (0, ET[mo[77]])(mo[6]);
      const oI = (...BB) => {
          Lo(BB[mo[2]] = mo[4], DB[VB] = BB[mo[3]], KB[VB] = BB[mo[1]], VB++)
        },
        GI = (...BB) => (Lo(BB[mo[2]] = mo[1], BB[mo[1]] = mo[5]), (BB[mo[1]] = (KB[BB[mo[3]]] ? ZI : II)[DB[BB[mo[3]]]]) !== mo[6] && void 0 !== BB[mo[1]] ? BB[mo[1]] : -mo[1]),
        vI = (0, ET[mo[8]])("d2lvNjQz"),
        kI = (0, ET[mo[8]])("amtsa2plZndu"),
        cI = [
          [(0, ET[mo[8]])("aW9qZndlODNq"), "2"],
          [(0, ET[mo[8]])("a3Bq"), mo[93]],
          [(0, ET[mo[8]])("dXJocmZm"), "5"]
        ],
        nI = [
          [(0, ET[mo[8]])(mo[95] + mo[94]), mo[8]],
          [(0, ET[mo[8]])(mo[95] + "w="), mo[85]]
        ],
        hI = (0, ET[mo[8]])("eTR5bnM="),
        zI = (0, ET[mo[8]])("aHRleWpldA=="),
        FI = (0, ET[mo[8]])("c2RmbGpneGxmY2pr"),
        NI = [
          [(0, ET[mo[8]])("a3NhZmR1"), mo[96]],
          [(0, ET[mo[8]])("ZGZnYWFzZGFz"), mo[103]],
          [FI, mo[97]],
          [(0, ET[mo[8]])("bGFzZWRraGFz"), mo[120]],
          [(0, ET[mo[8]])("cW16ZjhrM24="), mo[23]]
        ],
        gI = [
          [hI, mo[98]],
          [zI, mo[99]],
          [(0, ET[mo[8]])("bmI3ZnEy"), mo[11]]
        ],
        qI = (0, ET[mo[8]])("bGtxM20="),
        yI = (0, ET[mo[8]])("bWtxN3" + mo[94]),
        WI = ["mk:tw", "mk:jf"],
        dI = ((...BB) => {
          BB[mo[2]] = mo[3];
          try {
            return BB[-mo[100]] = mo[5], (BB[-mo[100]] = JB[(0, ET[mo[8]])("V2ViU29ja2V0")]) === mo[6] || void 0 === BB[-mo[100]] ? void 0 : BB[-mo[100]][mo[90] + mo[91]]
          } catch {
            return mo[5]
          }
        })(),
        CI = ["send", "close", "addEventListener", "removeEventListener", mo[105] + mo[104] + mo[97]],
        QI = ["onmessage", "onopen", "onclos" + mo[17], "onerro" + mo[96]];
      let sI = mo[0];
      const wI = (...BB) => {
          BB[mo[2]] = mo[3];
          const ZB = IB();
          ZB === mo[6] || sI || (sI = UB((() => {
            if (dI !== mo[5] && (0, ET.O)(ZB) !== dI) return mo[22];
            for (let BB = mo[3]; BB < CI[mo[2]]; BB++)
              if ((0, ET[mo[88]])(ET[mo[101]], ZB, [CI[BB]])) return mo[22];
            for (let BB = mo[3]; BB < QI[mo[2]]; BB++)
              if (ZB[QI[BB]] !== mo[6] && ZB[QI[BB]] !== mo[5]) return mo[22];
            return mo[0]
          })))
        },
        OI = (0, ET[mo[8]])("RXZlbnQ=");
      let YI = DI[mo[102]][mo[121]],
        iI = mo[3];
      const pI = () => iI++ === mo[12] ? (iI = mo[3], FB(mo[0]) ? DI[mo[17]].CheckFuncHit : mo[3]) : mo[3],
        aI = (0, ET[mo[77]])(mo[6]),
        MI = TB[mo[2]];
      for (let kB = mo[3]; kB < MI; kB++) {
        const BB = (0, ET[mo[88]])(ET.fb, TB, [kB]);
        aI[kB] = BB >= 99 && BB <= 122 ? BB : mo[3]
      }
      const jI = (...BB) => {
          return BB[mo[2]] = mo[4], typeof BB[mo[3]] === mo[86] + mo[87] && (0, ET[mo[88]])(ET.Y, BB[mo[1]], [(IB = BB[mo[3]], (0, ET.l)(ET.y, IB, []))]) !== mo[6];
          var IB
        },
        PI = new RegExp("^function dispatchEvent\\(\\) \\{\\s*\\[native code\\]\\s*\\}$", ""),
        RI = new RegExp("^function now\\(\\) \\{\\s*\\[native code\\]\\s*\\}$", ""),
        rI = [
          [Po["Dispat" + mo[104] + mo[97]], () => !jI(EventTarget[mo[90] + mo[91]][mo[105] + mo[104] + mo[97]], PI)],
          [Po.PerformanceNow, () => !jI(performance[mo[106]], RI)],
          [Po.DateNow, () => !jI(Date[mo[106]], RI)]
        ],
        mI = (0, ET[mo[77]])(mo[6]);
      let XI = mo[3];
      const LI = {
        stackCheck: (...BB) => {
          Lo(BB[mo[2]] = mo[3], BB[mo[11]] = mo[6]);
          const IB = po((() => (BB[mo[11]] = zB(mo[22]), BB[mo[11]] !== mo[6])));
          var ZB, TB;
          return BB[mo[11]] !== mo[6] && NB === mo[6] && (ZB = BB[mo[11]][mo[24]], TB = BB[mo[11]][mo[25]], NB = (0, vo.v)(Qo(ZB, TB))), IB
        },
        [mo[108] + mo[109]]: (...BB) => {
          BB[mo[2]] = mo[3];
          const IB = xB();
          if (IB === mo[4]) return mo[4];
          if (wB[vI]) return mo[7];
          const ZB = Ho((() => JB[kI] ? mo[14] : mo[3]));
          return ZB !== mo[3] ? ZB === mo[14] ? mo[14] : mo[3] : IB === ao ? mo[3] : IB === mo[60] ? mo[60] : (dB(), TB = Function[mo[90] + mo[91]], oB = mo[115], GB = (...BB) => (BB[mo[2]] = mo[1], BB[mo[3]].writable !== mo[22]), po((() => {
            const BB = Object.getOwnPropertyDescriptor(TB, oB);
            return void 0 !== BB && GB(BB)
          })) ? mo[13] : mo[3]);
          var TB, oB, GB
        },
        indexPassReplaced: uB,
        [mo[110] + "tSubChanged"]: (...BB) => {
          if (BB[mo[2]] = mo[3], tB === lB || eB) return mo[0];
          const IB = AB();
          return IB !== lB && IB !== tB
        },
        sv: (...BB) => {
          Lo(BB[mo[2]] = mo[3], BB[-mo[107]] = MI);
          for (let IB = mo[3]; IB < rI[mo[2]] + XI; IB++) {
            const ZB = IB < rI[mo[2]] ? rI[IB] : mI[IB - rI[mo[2]]];
            ZB[mo[3]] < BB[-mo[107]] && UB(ZB[mo[1]]) && (BB[-mo[107]] = ZB[mo[3]])
          }
          return BB[-mo[107]] < MI ? aI[BB[-mo[107]]] : mo[3]
        },
        Zv: () => EB ? HI[mo[118]] : 8,
        [mo[111] + mo[112] + "Subs"]: (...BB) => {
          BB[mo[2]] = mo[3];
          const IB = kB[mo[88]].vy[mo[111] + mo[112]];
          return typeof IB === mo[113] && IB > mo[3] ? IB > mo[114] ? mo[114] : IB : mo[3]
        },
        ["getCom" + mo[127]]: (...BB) => {
          Lo(BB[mo[2]] = mo[3], BB[mo[23]] = mo[5], VB = mo[3]);
          for (let ZB = mo[3]; ZB < aB; ZB++) oI(pB[ZB], mo[22]);
          for (let ZB = mo[3]; ZB < cI[mo[2]]; ZB++) wB[cI[ZB][mo[3]]] && oI(cI[ZB][mo[1]], mo[22]);
          const IB = Ho((() => io(atob[mo[115]](), nB) ? mo[3] : mo[1]));
          IB === mo[1] && oI(mo[80], mo[22]), dB();
          const TB = IB === ao ? ao : Ho(((...BB) => {
            BB[mo[2]] = mo[3];
            const IB = Object.getOwnPropertyDescriptor(window, "atob");
            return IB === mo[5] ? ao : IB[mo[116]] !== mo[5] ? mo[1] : mo[3]
          }));
          TB === mo[1] && oI(mo[81], mo[22]);
          const JB = TB === ao;
          for (let ZB = mo[3]; ZB < nI[mo[2]] && !JB; ZB++) wB[nI[ZB][mo[3]]] && oI(nI[ZB][mo[1]], mo[22]);
          const oB = VB > aB;
          BB[-mo[117]] = mo[6], aB === mo[3] && (MB > mo[3] ? BB[-mo[117]] = HB[mo[3]] : RB ? BB[-mo[117]] = "fp" : oB || (BB[-mo[117]] = wB[hI] ? mo[98] : wB[zI] ? mo[99] : mo[6]));
          for (let ZB = mo[3]; ZB < NI[mo[2]] && !JB; ZB++) wB[NI[ZB][mo[3]]] && oI(NI[ZB][mo[1]], mo[22]);
          const GB = VB,
            vB = (0, ho[mo[17]])(),
            kB = vB !== mo[6] && (0, UI[mo[103]])(vB);
          kB && !JB && oI(vB, mo[0]), fB && oI("ix", mo[0]), iB && oI("il", mo[0]);
          for (let ZB = mo[3]; ZB < MB; ZB++) oI(HB[ZB], mo[22]);
          for (let ZB = mo[3]; ZB < gI[mo[2]]; ZB++) wB[gI[ZB][mo[3]]] && oI(gI[ZB][mo[1]], mo[22]);
          wB[qI] && oI("mk:lk", mo[22]);
          const cB = ((...BB) => {
            BB[mo[2]] = mo[1];
            for (let IB = mo[3]; IB < WI[mo[2]]; IB++)
              if (BB[mo[3]] === WI[IB]) return WI[IB];
            return mo[6]
          })(wB[yI]);
          if (cB !== mo[6] && oI(cB, mo[22]), ZB !== mo[6] && CB(ZB.emitReplaced) === mo[22] && oI("mk:em", mo[22]), sI && oI("3s", mo[0]), ET.Z && oI("3b", mo[0]), dB(), WB && oI("3d", mo[0]), JB && oI("3g", mo[0]), vB === mo[6] || kB || oI(vB, mo[0]), NB !== mo[6] && oI(NB, mo[0]), yB === mo[6] && ZB !== mo[6]) {
            const BB = CB(ZB[mo[108] + "mMeshHitStac" + mo[118]]);
            typeof BB === mo[51] && (yB = function(BB, IB, ZB) {
              let TB = 0;
              for (; TB < ZB && -1 === No(BB, IB[TB]);) TB++;
              return (0, vo.n)(Qo(BB, TB < ZB ? IB[TB] : null))
            }(BB, hB, hB[mo[2]] - mo[1]))
          }
          var zB;
          if (yB !== mo[6] && oI(yB, mo[0]), gB === mo[6] && HI[mo[81]] !== mo[6] && Lo((zB = HI[mo[81]], gB = (0, vo.k)(Oo(zB).reader)), qB = Yo(HI[mo[81]], CB((() => HI[mo[19]] === mo[6] ? mo[6] : (0, ET.jb)(HI[mo[19]]))))), gB !== mo[6] && oI(gB, mo[0]), qB !== mo[6] && oI(qB, mo[0]), VB === mo[3]) return mo[6];
          if (BB[-mo[117]] === mo[6] && KB[mo[3]] && !(0, vo[mo[85]])(DB[mo[3]]))
            for (let ZB = mo[1]; ZB < GB; ZB++)
              if (KB[ZB] && (0, vo[mo[85]])(DB[ZB])) {
                const BB = DB[ZB];
                for (let IB = ZB; IB > mo[3]; IB--) Lo(DB[IB] = DB[IB - mo[1]], KB[IB] = KB[IB - mo[1]]);
                Lo(DB[mo[3]] = BB, KB[mo[3]] = mo[22]);
                break
              } if (Lo(BB[-mo[119]] = mo[3], BB[mo[7]] = BB[-mo[117]] === mo[6] ? mo[3] : GB), BB[mo[7]] > mo[3] && vB !== mo[6] && kB && !JB) {
            for (let IB = BB[mo[7]]; IB > mo[3]; IB--) Lo(DB[IB] = DB[IB - mo[1]], KB[IB] = KB[IB - mo[1]]);
            Lo(DB[mo[3]] = vB, KB[mo[3]] = mo[0], BB[-mo[119]] = mo[1], BB[mo[7]]++)
          }
          if (BB[mo[17]] = mo[3], SB++ % mo[4] === mo[1])
            for (let ZB = mo[1]; ZB < VB; ZB++) GI(ZB) < GI(BB[mo[17]]) && (BB[mo[17]] = ZB);
          const FB = DB[BB[mo[17]]];
          (KB[BB[mo[17]]] ? ZI : II)[FB] = BI++;
          const UB = BB[mo[17]] >= BB[-mo[119]] && BB[mo[17]] < BB[mo[7]];
          if (!KB[BB[mo[17]]] || FB === BB[-mo[117]] || BB[mo[17]] === mo[3] && !UB) return FB === mo[97] ? (0, vo.x)(wB[FI], vo[mo[17]]) : FB;
          const QB = (BB[mo[23]] = BB[-mo[117]]) !== mo[6] && void 0 !== BB[mo[23]] ? BB[mo[23]] : DB[mo[3]];
          return QB !== TI && Lo(TI = QB, JI = (0, ET[mo[77]])(mo[6])), JI[FB] ??= (0, vo[mo[120]])(FB, QB)
        }
      };
      let eI = DI[mo[102]][mo[121]];
      const uI = () => YI !== DI[mo[102]][mo[121]] ? YI : eI;
      let fI = mo[3],
        lI = mo[4],
        AI = mo[3],
        tI = mo[3];
      return {
        checks: LI,
        checkEvent: (...BB) => {
          BB[mo[2]] = mo[1];
          try {
            const IB = JB[OI];
            if (typeof IB === mo[86] + mo[87] && !(BB[mo[3]] instanceof IB) && !(0, ET.B)(BB[mo[3]])) return YI = DI[mo[102]].NotEvent, mo[3];
            if (BB[mo[3]].isTrusted === mo[0]) return mo[3];
            let ZB = mo[3];
            for (const TB in BB[mo[3]]) ZB++;
            return ZB < mo[57] ? (YI = DI[mo[102]]["FewPropertie" + mo[103]], mo[3]) : pI()
          } catch {}
          return mo[3]
        },
        checkPadCall: () => {
          try {
            return pI()
          } catch {
            return mo[3]
          }
        },
        usedProp: uI,
        watchHeld: (...BB) => {
          Lo(BB[mo[2]] = mo[4], BB[mo[23]] = mo[5]);
          const IB = QB((() => {
            BB[mo[23]] = BB[mo[1]]()
          }));
          mI[XI++] = [BB[mo[3]], () => !IB || BB[mo[1]]() !== BB[mo[23]]]
        },
        Iz: (...BB) => {
          BB[mo[2]] = mo[3];
          const IB = uB();
          return ((...BB) => {
            if (Lo(BB[mo[2]] = mo[1], BB[-mo[122]] = mo[5], BB[mo[4]] = mo[5]), ZB !== mo[6]) {
              const IB = CB(ZB.YG),
                TB = "v3" === IB ? mo[7] : "v5" === IB ? mo[12] : "v6" === IB ? mo[60] : mo[4];
              TB !== mo[4] && (lI = TB);
              const JB = CB(ZB["inbuil" + mo[125] + mo[126]]);
              typeof JB === mo[113] && JB >= mo[3] && JB <= mo[123] && (JB | mo[3]) === JB && (AI = JB), Lo(BB[-mo[122]] = CB(ZB.reflectApplyHit), BB[mo[4]] = CB(ZB.definerHit))
            }
            const IB = BB[mo[3]] ? mo[74] : "11" === BB[mo[4]] ? mo[123] : "13" === BB[mo[4]] ? 13 : BB[-mo[122]] !== mo[5] && BB[-mo[122]] !== mo[6] ? mo[4] : "10" === BB[mo[4]] ? mo[57] : "12" === BB[mo[4]] ? mo[61] : mo[3];
            IB !== mo[3] && (tI = IB)
          })(IB), fI++ % 10 === mo[3] && (wI(), po((() => !io(JB[oB][mo[115]][mo[115]](), nB))) && (eI = eI === DI[mo[102]][mo[124]] ? DI[mo[102]][mo[124]] : DI[mo[102]].Fr), po((() => !io(JB[oB][mo[115]](), nB))) && (eI = DI[mo[102]][mo[124]])), {
            flags: IB ? DI[mo[17]].Butto : mo[3],
            values: [
              [DI[mo[79]].PhysicsVersion, lI],
              [DI[mo[79]]["Inbuil" + mo[125] + mo[126]], AI],
              [DI[mo[79]]["AltCom" + mo[127]], tI],
              [DI[mo[79]]["ProbeUsedPro" + mo[8]], uI()]
            ]
          }
        }
      }
    };
    const eo = "[bloxd-wasm-client]",
      uo = "bloxdWasmDownloadFailed",
      fo = nZ.f,
      Ao = "boot",
      to = "playSources",
      bo = "wasmBuild",
      xo = "bloxd-wasm-joined",
      Eo = "bloxd-wasm-first-view",
      Do = "bloxd-wasm-playable-legacy",
      Ko = 1048576,
      Vo = 8 * Ko,
      So = 1006,
      BG = 1e3,
      IG = "You lost connection to the server.",
      ZG = "general:lostConnection",
      TG = 1048576,
      JG = 5e3,
      oG = 100,
      GG = [2e3, 1e4, 3e4],
      vG = 3e4;
    let kG = null,
      cG = null,
      nG = !1,
      hG = !1,
      zG = !1,
      FG = null,
      NG = null,
      gG = null,
      qG = null,
      yG = null,
      UG = null,
      WG = null;
    const dG = new class {
      constructor(BB, IB) {
        let ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => performance.now();
        this.master = BB, this.soundOn = IB, this.now = ZB, this.player = null, this.local = [], this.stopped = !1
      }
      get loaded() {
        return null !== this.player
      }
      get queued() {
        return this.local.length
      }
      prepare() {
        var BB;
        null === (BB = this.player) || void 0 === BB || BB.prepare()
      }
      preload(BB) {
        var IB;
        this.stopped || (null === (IB = this.player) || void 0 === IB || IB.preload(BB))
      }
      endSession() {
        var BB, IB;
        null === (BB = this.player) || void 0 === BB || BB.cancelPreload(), null === (IB = this.player) || void 0 === IB || IB.freeSheetsAfterGame()
      }
      load(BB) {
        if (null !== this.player || this.stopped) return;
        this.player = BB, BB.setMaster(this.master, this.soundOn);
        const IB = this.now(),
          ZB = this.local;
        this.local = [];
        for (const JB of ZB)
          if (!(JB.stopped || !JB.loop && IB - JB.at >= 300)) try {
            this.start(JB, BB, IB)
          } catch (TB) {
            console.error("[bloxd-wasm-client] a queued sound wouldn't start", TB)
          }
      }
      start(BB, IB, ZB) {
        const {
          name: TB,
          pos: JB,
          ear: oB,
          maxHearDist: GB,
          refDistance: vB,
          loop: kB,
          fade: cB
        } = BB, nB = IB.playGame(TB, tI(BB, ZB), JB, oB, GB, vB, kB);
        if (BB.sound = nB, 1 !== BB.rate && nB.rate(BB.rate), null !== BB.panner && nB.setPannerAttr(BB.panner), null !== BB.moved && nB.setPosition(BB.moved), null !== cB && ZB - cB.at < cB.ms) {
          const IB = AI(this.master);
          IB > 0 ? nB.fade(0, BB.volume * IB, cB.at + cB.ms - ZB) : nB.setRelativeVolume(BB.volume)
        }
      }
      onAudioEvent(BB, IB, ZB, TB) {
        var JB, oB;
        return null === (JB = null === (oB = this.player) || void 0 === oB ? void 0 : oB.onAudioEvent(BB, IB, ZB, TB)) || void 0 === JB || JB
      }
      applyListener(BB) {
        var IB;
        null === (IB = this.player) || void 0 === IB || IB.applyListener(BB)
      }
      playGame(BB, IB, ZB, TB, JB, oB, GB) {
        if (this.stopped) return lI.d;
        if (this.player) return this.player.playGame(BB, IB, ZB, TB, JB, oB, GB);
        const vB = this.now();
        this.local = this.local.filter((BB => !BB.stopped && (BB.loop || vB - BB.at < 300)));
        const kB = {
          name: BB,
          volume: AI(IB),
          fade: null,
          pos: ZB && [ZB[0], ZB[1], ZB[2]],
          ear: TB && [TB[0], TB[1], TB[2]],
          maxHearDist: JB,
          refDistance: oB,
          loop: GB,
          rate: 1,
          panner: null,
          moved: null,
          at: vB,
          stopped: !1,
          sound: null
        };
        this.local.push(kB);
        const cB = {
          stop: () => {
            var BB;
            return kB.stopped = !0, null === (BB = kB.sound) || void 0 === BB || BB.stop(), cB
          },
          fade: (BB, IB, ZB) => {
            if (kB.sound) return kB.sound.fade(BB, IB, ZB), cB;
            const TB = AI(this.master),
              JB = AI(TB > 0 ? IB / TB : IB > 0 ? kB.volume : 0),
              oB = this.now(),
              GB = tI(kB, oB);
            return kB.volume = JB, kB.fade = ZB > 0 && GB !== JB ? {
              from: GB,
              at: oB,
              ms: ZB
            } : null, cB
          },
          rate: BB => (kB.sound ? kB.sound.rate(BB) : kB.rate = BB, cB),
          getVolume: () => kB.sound ? kB.sound.getVolume() : kB.volume * AI(this.master),
          getRelativeVolume: () => kB.sound ? kB.sound.getRelativeVolume() : kB.volume,
          setRelativeVolume: BB => (kB.sound ? kB.sound.setRelativeVolume(BB) : (kB.volume = AI(BB), kB.fade = null), cB),
          setPannerAttr: BB => (kB.sound ? kB.sound.setPannerAttr(BB) : kB.panner = {
            ...BB
          }, cB),
          setPosition: BB => (kB.sound ? kB.sound.setPosition(BB) : kB.moved = [BB[0], BB[1], BB[2]], cB)
        };
        return cB
      }
      setMaster(BB, IB) {
        var ZB;
        this.master = BB, this.soundOn = IB, null === (ZB = this.player) || void 0 === ZB || ZB.setMaster(BB, IB)
      }
      stop() {
        var BB;
        this.stopped = !0, null === (BB = this.player) || void 0 === BB || BB.stopAll();
        for (const IB of this.local) IB.stopped = !0;
        this.local = []
      }
    }((0, MI.b)(), !0);
    let CG = {
        wasm: "unknown",
        client: String(nI.b)
      },
      QG = null,
      sG = () => {};
    const wG = new Promise((BB => {
      sG = BB
    }));
    let OG = () => {};
    const YG = new Promise((BB => {
      OG = BB
    }));
    let iG, pG = null,
      aG = null,
      HG = null,
      MG = null,
      jG = null,
      PG = null,
      RG = null,
      rG = null,
      mG = null,
      XG = null,
      LG = null,
      eG = null,
      uG = null,
      fG = null,
      lG = null,
      AG = null,
      tG = null,
      bG = null,
      xG = null,
      EG = !1,
      DG = null;
    const KG = new Set,
      VG = new Set;

    function SG(BB) {
      if (!KG.has(BB)) {
        KG.add(BB);
        for (const ZB of VG) try {
          ZB(BB)
        } catch (IB) {
          console.error(`${eo} a startup listener threw`, IB)
        }
      }
    }

    function Bv(BB) {
      EG = !0, BB.isStopped || SG("texturesIn")
    }
    let Iv = 1,
      Zv = -1 / 0,
      Tv = -1 / 0,
      Jv = -1 / 0,
      ov = !1,
      Gv = null,
      vv = !1,
      kv = !1,
      cv = 0,
      nv = null,
      hv = !1;
    const zv = {
      dropped: -1 / 0,
      pause: -1 / 0,
      backlog: -1 / 0
    };
    let Fv = 0,
      Nv = 0,
      gv = null,
      qv = null,
      yv = null,
      Uv = null;
    const Wv = new WeakMap;
    let dv = null,
      Cv = null,
      Qv = !1,
      sv = null,
      wv = null,
      Ov = null,
      Yv = null,
      iv = null,
      pv = null,
      av = 0;
    const Hv = new Set;
    let Mv = 0,
      jv = 0,
      Pv = 0,
      Rv = null,
      rv = null,
      mv = null,
      Xv = null,
      Lv = -1 / 0,
      ev = null;
    const uv = new Set;
    let fv = !1,
      lv = null;
    const Av = new Map,
      tv = new Set;
    let bv = !1;
    const xv = {
      adapter: null,
      boundAtMs: null,
      indirectHangs: null,
      restoresSkipped: null
    };
    let Ev = null,
      Dv = () => [0, 0],
      Kv = () => {},
      Vv = () => {},
      Sv = null,
      Bk = null;
    const Ik = new class {
      constructor(BB) {
        this.reached = BB, this.next = 1
      }
      observe(BB) {
        if (!(BB < this.next)) {
          for (; this.next <= BB;) this.next *= 2;
          this.reached(BB)
        }
      }
    }((BB => {
      console.warn(`${eo} chunk cancels from the server this session: ${BB}`)
    }));
    let Zk = 1,
      Tk = null,
      Jk = null,
      Gk = null,
      vk = null,
      kk = null,
      ck = !1,
      nk = !1,
      hk = 0,
      zk = null,
      Fk = !1,
      Nk = null,
      gk = null,
      qk = null,
      yk = !1;
    const Uk = new class {
        constructor(BB) {
          this.Gq = BB, this.lossPending = !1, this.undrawnSinceMs = null, this.lastFrameMs = 0, this.shown = !1
        }
        deviceLost() {
          this.lossPending = !0
        }
        frame(BB, IB, ZB) {
          (0, rI.e)(BB) && (this.lossPending = !1);
          const TB = ZB - this.lastFrameMs;
          this.lastFrameMs = ZB, this.lossPending && IB && (0, rI.j)(BB) ? (null === this.undrawnSinceMs || TB > 1e3) && (this.undrawnSinceMs = ZB) : this.undrawnSinceMs = null, this.show(null !== this.undrawnSinceMs && ZB - this.undrawnSinceMs >= 2e3)
        }
        stop() {
          this.lossPending = !1, this.undrawnSinceMs = null, this.show(!1)
        }
        show(BB) {
          BB !== this.shown && (this.shown = BB, this.Gq(BB))
        }
      }((BB => {
        kB.l.Gq(NB.d, BB)
      })),
      Wk = new class {
        constructor(BB) {
          let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => performance.now();
          this.JN = BB, this.now = IB, this.lostAtMs = null, this.asked = !1, this.watched = new WeakSet
        }
        watch(BB, IB) {
          this.watched.has(BB) || (this.watched.add(BB), BB.addEventListener("webglcontextlost", (() => {
            IB() && this.contextLost()
          })), BB.addEventListener("webglcontextrestored", (() => {
            IB() ? this.contextRestored() : this.take()
          })))
        }
        frame(BB, IB) {
          (0, rI.j)(BB) && IB && null !== this.lostAtMs && this.now() - this.lostAtMs >= 1e3 && (this.asked = !0)
        }
        contextLost() {
          null === this.lostAtMs && (this.lostAtMs = this.now(), this.asked = !1)
        }
        contextRestored() {
          const BB = this.take();
          if (null !== BB) {
            const IB = BB.asked ? "restore_context" : "natural";
            this.JN(`webgl_restored_${IB}_${BB.delay}`, `WebGL2 context restored (${IB}, wasm)`)
          }
        }
        gaveUp() {
          const BB = this.take();
          if (null !== BB) {
            const IB = BB.asked ? "restore_tried" : "restore_untried";
            this.JN(`webgl_rejoin_${IB}_${BB.delay}`, "WebGL2 context not restored: rejoining (wasm)")
          }
        }
        take() {
          if (null === this.lostAtMs) return null;
          const BB = (0, mI.l)(this.now() - this.lostAtMs);
          return this.lostAtMs = null, {
            delay: BB,
            asked: this.asked
          }
        }
      }(MZ.reportRenderRecovery);
    let dk = !1,
      Ck = !0,
      Qk = null,
      sk = !1,
      wk = !1,
      Ok = !1;

    function Yk() {
      return gG ??= Promise.all([ZB.e(201), ZB.e(144), ZB.e(60)]).then((() => ZB(51044))).then((BB => (NG = BB, Object.assign(globalThis, {
        bloxdPreviewPage: BB.pagePreviews()
      }), BB)), (BB => {
        throw gG = null, BB
      })), gG
    }

    function ik() {
      return FG ??= ZB.e(58).then((() => ZB(51063))).catch((BB => {
        throw FG = null, new MB.d(BB)
      })), FG
    }
    class pk {
      constructor() {
        this.host = null
      }
      open(BB) {
        return null !== this.host ? BB(this.host) : Yk().then((IB => (this.host ??= new IB.WasmPreviewHost(IB.pagePreviews()), BB(this.host))))
      }
      openMob(BB) {
        return this.open((IB => IB.openMob(BB)))
      }
      openPet(BB) {
        return this.open((IB => IB.openPet(BB)))
      }
      openMobLineup(BB) {
        return this.open((IB => IB.openMobLineup(BB)))
      }
      openCharacter(BB, IB) {
        return this.open((ZB => ZB.openCharacter(BB, IB)))
      }
    }

    function ak() {
      zG || (zG = !0, sJ.e.setHost(new pk), (0, rZ.p)(), WJ.f.setFollower(Rc), Object.assign(globalThis, {
        bloxdPreviews: sJ.e
      }))
    }

    function Hk() {
      Yk().then((BB => {
        BB.pagePreviews().prefetch()
      }), (() => {}))
    }

    function Mk() {
      let BB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      if (hG) return;
      hG = !0, dk = "play" === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "shell"), Ck = !dk, console.info(`${eo} starting`), nG || (nG = !0, (0, NB.M)(new eI(Kk, oc)), (0, zB.j)(new uI), (0, NB.I)(new fI), (0, NB.y)()), dk && kB.l.subscribe("appManagerUpdated|gameState", Dk), ak(), (0, MZ.setCrashScreen)((BB => {
        let {
          text: IB,
          reload: ZB
        } = BB;
        ! function(BB, IB) {
          var ZB, TB;
          if (sk) return;
          sk = !0, (0, XZ.J)(), null === (ZB = ev) || void 0 === ZB || ZB.abort(), ev = null, dJ.b.release();
          const JB = dk ? null !== (TB = BB.cancel) && void 0 !== TB ? TB : "general:back" : null;
          rT({
            ...BB,
            cancel: JB
          }).then((BB => {
            BB && IB && wk ? ((0, CI.u)("reloadOntoJs"), (0, SB.l)(CI.D)) : BB && IB ? (0, SB.p)() : dk && (0, SB.h)("/")
          }))
        }(IB, ZB)
      })), (0, cJ.n)(), (0, HI.h)();
      let IB = null;
      try {
        IB = ro("4ec561fy2fr", (() => {
          var BB, IB;
          return null !== (BB = null === (IB = pG) || void 0 === IB ? void 0 : IB.ws) && void 0 !== BB ? BB : null
        }), BB, "euyfsxnmtv")
      } catch (JB) {
        console.error(`${eo} probes`, JB)
      }
      const TB = function() {
        const BB = (0, tT.n)(),
          IB = (0, tT.i)();
        let ZB = !1;
        return TB => {
          BB && !ZB && (ZB = !0, (0, MZ.reportStaleBuildReload)(BB, IB, TB))
        }
      }();
      mc(), dk || function() {
        const BB = function(BB) {
          var IB;
          const ZB = new URLSearchParams(BB),
            TB = ZB.get("game");
          return TB ? {
            game: TB,
            lobby: null !== (IB = ZB.get("lobby")) && void 0 !== IB ? IB : null
          } : null
        }(window.location.search);
        if (BB) return (0, hI.i)(BB.game) && mc().request(), void Rk(BB.game, BB.lobby);
        const IB = new URLSearchParams(window.location.search).get("ws");
        if (!IB) return;
        wG.then((BB => {
          BB && async function(BB, IB) {
            try {
              await (0, MB.k)(BB), sv = nc(new WebSocket(IB)), null !== sv && dJ.b.setGame(null), jk()
            } catch (JB) {
              console.error(`${eo} ?ws=${IB} did not attach`, JB)
            }
          }(BB, IB)
        }))
      }(), async function(BB) {
        var IB, TB, oB, GB, vB, cB;
        if ("undefined" === typeof WebAssembly) return Oc("noWebAssembly", "unsupported", "This browser has no WebAssembly"), null;
        const nB = (0, aJ.$)(),
          hB = await async function(BB, IB) {
            const ZB = (0, nZ.o)(BB) ? ic(BB, IB) : null;
            if (null === ZB || void 0 === ZB || !ZB.retries) return BB;
            console.warn(`${eo} ${ZB.detail}: picking again in ${Yc} ms`), await new Promise((BB => {
              setTimeout(BB, Yc)
            }));
            const TB = await (0, aJ.ab)();
            if (!(0, nZ.o)(TB)) {
              var JB;
              (0, MZ.reportNoBackendRetry)("reprobed", ZB.decline, ZB.detail, {
                ...ZB.details,
                backend: null !== (JB = null === TB || void 0 === TB ? void 0 : TB.backend) && void 0 !== JB ? JB : "none"
              }), null !== TB && (0, aJ.X)(TB.backend)
            }
            return TB
          }(await (0, aJ.T)(), nB);
        if ((0, MZ.setCrashBackend)((0, nZ.o)(hB) ? "unsupported" : null !== (IB = null === hB || void 0 === hB ? void 0 : hB.backend) && void 0 !== IB ? IB : "none"), (0, nZ.o)(hB)) return function(BB) {
          let {
            decline: IB,
            detail: ZB,
            details: TB,
            retries: JB
          } = BB;
          if (JB && (0, CI.k)()) return (0, MZ.reportNoBackendRetry)("reload", IB, ZB, TB), void pc(`${ZB}, again after ${Yc} ms`);
          Oc("browser", IB, ZB, JB ? {
            ...TB,
            afterReload: String(CI.t)
          } : TB)
        }(ic(hB, nB)), null;
        if ((0, EJ.t)("render")) try {
          const {
            startRenderDebug: BB
          } = await Promise.all([ZB.e(78), ZB.e(49)]).then((() => ZB(4862)));
          BB(hB)
        } catch (NI) {
          console.warn("The render debug topic didn't load", NI)
        }
        if ((0, EJ.t)("renderlite")) try {
          const {
            startRenderLite: BB
          } = await Promise.all([ZB.e(273), ZB.e(50)]).then((() => ZB(51069)));
          Gk = BB(hB)
        } catch (NI) {
          console.warn("The renderlite debug topic didn't load", NI)
        }
        if ((0, EJ.t)("renderprobe")) try {
          const {
            startRenderProbe: BB
          } = await ZB.e(51).then((() => ZB(51071)));
          BB(hB)
        } catch (NI) {
          console.warn("The renderprobe debug topic didn't load", NI)
        }
        if ("webgl" === (null === hB || void 0 === hB ? void 0 : hB.backend) && dk && "wasm" !== (0, CI.d)(window.location.search)) {
          const BB = fT(hB);
          null !== BB && (0, QI.g)(BB)
        }
        const zB = null !== (TB = null === hB || void 0 === hB ? void 0 : hB.backend) && void 0 !== TB ? TB : null;
        xv.adapter = null !== (oB = null === hB || void 0 === hB ? void 0 : hB.adapter) && void 0 !== oB ? oB : null, xv.boundAtMs = null, xv.indirectHangs = null, xv.restoresSkipped = null;
        const FB = !(0, nZ.db)();
        null === hB || (0, nZ.D)(hB.reason) || console.info(`${eo} drawing with ${hB.backend}: ${hB.reason}`);
        const NB = (0, aJ.E)();
        OG(!0), (0, MB.t)((BB => {
          try {
            null !== zB && (Sv = BB.startSkyFeed, jc(), function(BB) {
              var IB, ZB;
              Dv = BB.rasterText, Ov = BB.setTextLocalPlayer, BB.setTextLocalPlayer(null !== (IB = null === (ZB = wv) || void 0 === ZB ? void 0 : ZB.info.playerDbId) && void 0 !== IB ? IB : null), Kv = BB.drainTextRerasters, Vv = BB.loadTextIcons, BB.warmText((() => ck)), BB.textChanged(), ck && setTimeout(Vv, 0)
            }(BB), Bk = BB.startShellAnalytics, lc())
          } finally {
            Ok || (vk = BB.followMenuPrefs({
              setSoundPrefs: vc,
              setEnvPrefs: kc,
              setUiPrefs: Gc,
              setLookPrefs: cc
            }))
          }
        })), (0, MB.m)(dG).catch((BB => {
          console.warn(`${eo} the game code did not load: a join asks again`, BB)
        }));
        const gB = (0, aJ.j)(hB);
        let qB, yB;
        gB.catch((() => {})), "loading" === (0, gI.u)() && CB();
        try {
          qB = function(BB) {
            const IB = null !== BB && void 0 !== BB ? BB : document.createElement("canvas");
            IB.id = "wasm-game-canvas", Wk.watch(IB, (() => null !== Uv && Gn())), (0, mJ.i)();
            const ZB = (0, LI.c)(),
              TB = (0, LI.f)(ZB);
            IB.style.cssText = "position:absolute;top:0;left:0;display:block;touch-action:none;outline:none;background:#000", (0, rJ.f)(IB, TB), (0, LI.b)(IB, ZB), IB.width = TB.bufferWidth, IB.height = TB.bufferHeight;
            const JB = document.createElement("div");
            return JB.style.cssText = "position:fixed;top:0;right:0;bottom:0;left:0;overflow:hidden", JB.append(IB), Vk(JB, Ck), Qk = JB, document.body.append(JB), IB
          }(null === zB ? null : await (await Yk()).pagePreviews().beginSession())
        } catch (JB) {
          return await pn({
            site: bo,
            error: JB
          }, (() => {
            (0, MZ.showUnsupported)((0, jT.n)("fetch"), To.h.fetch, `the previews did not load: ${String(JB)}`)
          })), null
        }
        CB();
        try {
          yB = await gB
        } catch (JB) {
          return await pn({
            site: bo,
            error: JB
          }, (() => {
            (0, MZ.showUnsupported)((0, jT.n)("fetch"), To.h.fetch, `the ${null!==zB&&void 0!==zB?zB:"client"} build did not load: ${String(JB)}`)
          })), null
        }
        const WB = (0, aJ.f)(),
          dB = !WB && !0 !== fZ.n.getItem(uo),
          QB = !WB && "loading" === (0, gI.u)();
        await (0, HJ.b)(yB, {
          reloadFailedDownload: dB
        }), QB && !(0, gI.M)() && await (0, HJ.b)(yB, {
          reloadFailedDownload: dB
        });
        UB = performance.now();
        const sB = CG;
        if (!(0, gI.M)()) {
          (0, gI.K)() && fZ.n.setItem(uo, !0);
          const BB = (0, gI.m)();
          if ("call" === BB) zn({
            site: zZ.s,
            error: (0, gI.j)(),
            header: null
          }, sB);
          else {
            const IB = null !== BB && void 0 !== BB ? BB : "instantiate",
              ZB = () => {
                (0, MZ.showUnsupported)((0, jT.n)(IB), To.h[IB], (0, gI.g)())
              };
            if ("compile" !== BB && "instantiate" !== BB || !ac())
              if ("fetch" === IB) {
                const BB = [yB.url().href, WI.h.url().href];
                await pn({
                  site: bo,
                  error: (0, gI.g)(),
                  urls: BB
                }, ZB)
              } else ZB();
            else {
              const IB = (0, gI.g)(),
                ZB = (0, SI.c)((0, gI.j)());
              if (ZB && (0, CI.k)()) return (0, MZ.reportCountedLoadFallback)((0, jT.n)(BB), To.h[BB], IB, "wasmReload"), pc(`the wasm client ran out of memory to ${BB} here (${IB})`), null;
              (0, MZ.reportCountedLoadFallback)((0, jT.n)(BB), To.h[BB], IB, ZB ? "declined" : "pageAlone"), Hc(`the wasm client did not ${BB} here (${IB})`, ZB ? "oom" : null)
            }
          }
          return null
        }(0, qI.S)(yB.url()) && (0, MZ.reportUnstreamedCoreLoad)();
        const wB = (0, gI.x)();
        let OB, YB = sB;
        try {
          YB = {
            ...sB,
            wasm: wB.Yh()
          };
          const {
            Hq: BB
          } = yB.bindings, IB = BB.sTB();
          if (IB !== DI.B) return zn({
            site: zZ.b,
            error: `core ABI ${IB}, page ABI ${DI.B}`,
            header: null
          }, YB), null;
          const [ZB, TB] = (0, DI.ue)();
          OB = new BB(ZB, TB)
        } catch (JB) {
          return zn({
            site: zZ.b,
            error: JB,
            header: null
          }, YB), null
        }
        CG = YB, QG = yB.bindings;
        const iB = new zZ.h(OB, gI.r, {
          onCrash: BB => {
            var IB;
            null === (IB = Gk) || void 0 === IB || IB.crashed(BB),
              function(BB, IB, ZB, TB) {
                if ("webgpu" !== IB || (0, aJ.e)()) return !1;
                const JB = function(BB) {
                  if (BB.site === zZ.d && (0, nZ.p)(BB.error)) return "frames_refused";
                  return BB.site === fo && (0, nZ.t)(BB.error) ? "start_failed" : null
                }(BB);
                if (null === JB) return !1;
                if (null !== (0, nZ.$)(JB, TB, (0, hZ.c)(BB.error))) return (0, MZ.countRenderLost)(JB, BB.error, xv), !1;
                return PI.H.reloaded(null, !1), (0, MZ.reportRenderReload)("webgpu", "start_failed" === JB ? 0 : 1, ZB, {
                  cause: JB,
                  error: BB.error,
                  context: xv,
                  session: qn(null)
                }), Ec(), !0
              }(BB, zB, YB, FB) || zn(BB, YB)
          },
          onNetEvent: xc,
          onReconnectGrace: Qc,
          onJoinPreloadEnded: Cc,
          onCoreErrors: (BB, IB) => {
            var ZB, TB;
            BB.some((BB => {
              let {
                code: IB
              } = BB;
              return IB === DI.K.RenderDeviceLost
            })) && ((0, aJ.x)(), Uk.deviceLost(), "webgpu" === zB && ((0, hZ.e)(Ev), PI.H.lost())), null === (ZB = Gk) || void 0 === ZB || ZB.coreErrors(BB);
            const JB = () => {
              (0, MZ.reportCoreErrors)(BB, IB, YB, ((BB, IB) => {
                var ZB;
                return BB === DI.K.EnvUnknownSky ? (0, MZ.unknownSkyWords)(sI.c.get("skyBox")) : BB === DI.K.RenderDeviceLost ? (0, MZ.deviceLossWords)(IB, xv.boundAtMs) : null === (ZB = Ev) || void 0 === ZB ? void 0 : ZB.wTB(BB, IB)
              }))
            };
            BB.some((BB => {
              let {
                code: IB
              } = BB;
              return IB === DI.K.EnvUnknownSky
            })) ? queueMicrotask(JB) : JB(), null === (TB = DG) || void 0 === TB || TB.coreErrors(BB)
          },
          onRenderReload: (BB, IB, ZB) => {
            ! function(BB, IB, ZB, TB, JB, oB) {
              var GB;
              if ((0, aJ.e)()) return;
              const vB = IB === DI.ed.WEBGPU,
                kB = TB === DI.ed.PIPELINE_FAILED ? "pipeline_failed" : "lost",
                cB = TB === DI.ed.RESTORE_LOST,
                nB = vB && (0, PI.q)(xv.adapter, ZB, "lost" === kB, cB),
                hB = (0, hZ.i)(Ev);
              null === (GB = Gk) || void 0 === GB || GB.reload(vB, ZB, kB, null === hB || void 0 === hB ? void 0 : hB.message);
              const zB = vB ? (0, nZ.$)(kB, JB, hB) : null;
              if (null !== zB) {
                (0, MZ.countRenderLost)(kB, hB, xv);
                const IB = void 0 === hB ? "" : ` (${hB.message})`;
                return void BB.crash(MZ.RENDER_RELOAD_SITE, new Error(`${(0,MZ.renderReloadMessage)("webgpu",kB,ZB)} and ${zB}${IB}`))
              }
              const FB = vB ? "webgpu" : "webgl1" === oB ? "webgl1" : "webgl";
              "lost" === kB && (0, aJ.x)();
              vB || ((0, CI.q)(), Wk.gaveUp());
              (0, MZ.reportRenderReload)(FB, ZB, CG, {
                from: "game",
                cause: kB,
                restoreLost: cB,
                adapterRemembered: nB,
                error: hB,
                context: xv,
                session: qn(BB.sunShadowsHeld())
              }), Ec()
            }(iB, BB, IB, ZB, FB, zB)
          },
          onEnvEvent: BB => {
            var IB;
            BB.kind === DI.X.SkyImages ? null === (IB = AG) || void 0 === IB || IB.onEvent(BB.payload) : BB.kind === DI.X.EnvLighting && (tG = 1 === BB.payload[0])
          },
          onImages: BB => {
            var IB;
            null === (IB = bG) || void 0 === IB || IB.onEvent(BB)
          },
          onModelRequest: BB => {
            var IB;
            null === (IB = uG) || void 0 === IB || IB.request(BB)
          },
          onModelTaken: (BB, IB) => {
            var ZB;
            null === (ZB = uG) || void 0 === ZB || ZB.taken(BB, IB)
          },
          onTerrainTexturesWanted: () => {
            queueMicrotask((() => {
              ! function(BB, IB) {
                const ZB = WG;
                if (null === ZB || BB.isStopped) return;
                ZB.restore((BB => {
                  (0, MZ.reportTerrainTextureFailure)(BB, IB)
                })).then((IB => {
                  !1 !== IB || BB.isStopped ? !0 === IB && console.info(`${eo} terrain textures handed over again after the renderer lost them`) : console.warn(`${eo} the terrain textures couldn't be handed over again: the terrain draws blank`)
                }))
              }(iB, YB)
            }))
          },
          onKeepAlive: BB => {
            const IB = null === Uv ? void 0 : Wv.get(Uv);
            void 0 !== IB && KT(IB, BB)
          },
          onSends: () => {
            ! function(BB) {
              const IB = performance.now();
              if (BB.forEachNetOut(cn), Jn(BB), (0, zZ.O)(BB, {
                  worldgen: HG,
                  mesh: jG
                }), null !== Jk) try {
                Jk.sendsWent(BB, IB, performance.now())
              } catch (JB) {
                bc(JB)
              }
            }(iB)
          }
        });
        if (qG = iB, null === (GB = XI.c.wasmNetReady) || void 0 === GB || GB.call(XI.c, (() => iB.isStopped ? 0 : iB.netKeptFrames)), null !== BB) {
          iB.setAntiCheatProbes(Mo(gI.r, BB.checks)), BB.watchHeld(Po.CoreFrame, (() => iB.frame)), BB.watchHeld(Po.GlueFrame, (() => OB.frame));
          const IB = function(BB, IB) {
            const ZB = new jo(IB);
            let TB = !1;
            ZB.Iz(BB.Iz());
            const JB = (0, ET.ab)((() => {
              ZB.Iz(BB.Iz())
            }), Ro);
            let oB = 6 * (0, ET.S)() | 0;
            const GB = () => {
              ++oB < 6 || (oB = 0, BB.checks.stackCheck() && (TB = !0))
            };
            (0, no.h)(GB);
            const vB = () => {
              const IB = BB.checkPadCall();
              0 !== IB && ZB.setFlags(IB)
            };
            return (0, co.j)(vB), {
              onSend: GB,
              beforeFrame: () => {
                TB && ZB.originStackHit() && (TB = !1)
              },
              onEvent: IB => {
                const TB = BB.checkEvent(IB);
                ZB.value(DI.h.ProbeUsedProp, BB.usedProp()), 0 !== TB && ZB.setFlags(TB)
              },
              stop: () => {
                (0, ET.bb)(JB), (0, no.f)(GB), (0, co.g)(vB)
              }
            }
          }(BB, ((BB, IB, ZB) => {
            let TB = !1;
            return dn(iB, (() => {
              TB = iB.rings.input.writeRecord(DI.vb.AntiCheat, BB, IB, ZB, 0)
            })), TB
          }));
          iB.isStopped ? IB.stop() : LG = IB
        }
        kG = (BB, IB, ZB) => iB.rings.cmd.writeCmd(BB, IB, ZB), cG = BB => iB.rings.cmd.growForCmd(BB), hv = !1, jc(), (0, MB.v)(iB, {
          core: OB,
          memory: gI.r,
          staleOr: (BB, IB, ZB, TB) => pn({
            site: BB,
            error: IB
          }, ZB, TB),
          reportReplayFault: (BB, IB) => {
            (0, MZ.reportReplayFault)(BB, IB, CG)
          },
          audio: dG,
          options: sI.c,
          onNetEvent: xc,
          sessionInfo: BB => {
            var IB;
            return (null === (IB = wv) || void 0 === IB ? void 0 : IB.conn) === BB ? wv.info : null
          },
          onEventOverflow: xk,
          replayShaderPack: BB => {
            var IB;
            null === (IB = DG) || void 0 === IB || IB.replay(BB)
          },
          hasPackModel: BB => {
            var IB, ZB;
            return null !== (null !== (IB = null === (ZB = Pc()) || void 0 === ZB ? void 0 : ZB.modelUrl(BB)) && void 0 !== IB ? IB : null)
          },
          beforeWrite: () => (!vv && iB.rings.net.cursor > 0 && Vc(iB, !1, "all"), !iB.isStopped),
          beforeOp: () => (!vv && iB.netWrittenSinceFrame > 0 && Vc(iB, !1, "budget"), !iB.isStopped)
        }), (0, HB.E)({
          lockPointer: () => {
            if (!JT(qB)) return !1;
            try {
              Promise.resolve(qB.requestPointerLock()).catch((() => {}))
            } catch {
              return !1
            }
            return !0
          },
          unlockPointer: () => {
            (0, tZ.c)()
          },
          leaveGame: () => {
            bk()
          },
          canvas: () => qB
        }), eG = (0, HB.u)((() => {
          var BB;
          const IB = (0, MB.j)();
          null === (BB = (0, MB.q)()) || void 0 === BB || BB.followCursorAim(!0 === (null === IB || void 0 === IB ? void 0 : IB.isSessionLive) ? IB : null)
        })), gv && iB.setUiPrefs(gv);
        qv && iB.setEnvPrefs(qv);
        yv && iB.setLookPrefs(yv);
        const pB = PJ ? RJ(PJ.preventMovement) : null;
        pB && Jc(pB);
        const aB = (0, iZ.l)(),
          jB = (0, iZ.e)(iB, aB);
        mG = aB.basis, (0, uZ.o)(null === jB ? null : (0, YZ.r)(jB)), rG = jB;
        const PB = (0, yI.c)();
        let RB = 1 / 0,
          rB = !0,
          mB = aB.shedFootprintBytes;
        const XB = new kJ.d(PB, (() => OB.tq()), (BB => {
          iB.crash(zZ.m, BB)
        }));
        PG = XB, RG = XB, null !== jB && XB.setCeiling(Math.min((0, kJ.n)(jB), RB, (0, iZ.o)()));
        if (rB) {
          XB.setShed((BB => {
            const IB = iB.shedMemory("joinReserve" !== BB);
            return null !== IB && (null === rG || IB < rG) && (rG = IB, (0, uZ.o)((0, YZ.r)(IB))), IB
          }), ((BB, IB, ZB) => {
            1 === IB ? (0, MZ.reportMemoryShed)(BB, ZB, CG) : console.warn(`${eo} wasm memory: shed again (${BB}): shed ${IB}`, ZB.wasmMemoryShed)
          }), (() => iB.addDistanceInUse()));
          const BB = (0, nZ.Q)(wB);
          XB.setFootprint(new xJ(mB, {
            storedChunks: () => OB.OTB(),
            gpuBytes: () => {
              var IB;
              return null !== (IB = null === BB || void 0 === BB ? void 0 : BB.YTB()) && void 0 !== IB ? IB : 0
            },
            jsHeapBytes: bJ
          }))
        }
        window.addEventListener("pagehide", (() => {
          PG === XB && (XB.refreshStats(), Wn(XB))
        })), window.addEventListener("pagehide", Dc), window.addEventListener("pagehide", Kc), !1;
        const [LB, eB] = (0, RZ.h)();
        kk = (0, mZ.f)((BB => iB.setChunkAddDistance(BB.horizontal, BB.vertical)), {
          horizontal: LB,
          vertical: eB
        }), iB.setAmbientOcclusion(!0 !== fZ.m.getItem("disableAmbientOcclusion")), iB.setPoseLod(!0 !== fZ.m.getItem(FI.W)), iB.setDebugLog(DI.O.Look, !0), iB.setDebugLog(DI.O.CameraSet, !0), (0, KJ.startLookDebug)("wasm", {
          look: () => iB.takeDebugLog(DI.O.Look),
          cameraSets: () => iB.takeDebugLog(DI.O.CameraSet)
        }), (0, EJ.t)("remesh") && (iB.setDebugLog(DI.O.Remesh, !0), uB = () => iB.takeDebugLog(DI.O.Remesh), Zo = new Io((0, VJ.m)(), uB));
        var uB;
        const fB = function(BB, IB, ZB, TB) {
          const JB = new CT,
            oB = BB => fZ.m.getItem(BB);
          JB.sync(oB, IB), (0, RI.U)();
          const GB = (0, kB.p)("customBindingsChanged", (() => {
            JB.sync(oB, IB)
          }));
          (0, bZ.t)(IB);
          const vB = new Set,
            cB = (0, HB.u)((() => {
              var BB;
              vB.size > 0 && OT() && !0 === (null === (BB = (0, MB.j)()) || void 0 === BB ? void 0 : BB.localPlayerAlive()) && kB.l.Gq("usedKeyboard")
            })),
            nB = zT.c.heldSizer((() => (0, LI.j)(BB))),
            hB = hT(BB, IB, {
              prevents: BB => JB.prevents(BB),
              keyPressed: BB => {
                JB.moves(BB) && (vB.add(BB), OT() && kB.l.Gq("usedKeyboard"))
              },
              keyReleased: BB => {
                vB.delete(BB)
              },
              keysReleased: () => {
                vB.clear()
              },
              resized: () => {
                sT.j.measure(BB.getBoundingClientRect()), (0, FT.n)()
              },
              sizeCanvas: nB,
              watchRenderScale: IB => {
                const ZB = (0, LI.m)(BB, IB),
                  TB = zT.c.onRelease(IB);
                return () => {
                  ZB(), TB()
                }
              },
              touchStarting: () => {
                sT.j.measure(BB.getBoundingClientRect())
              },
              viewShown: ZB,
              touchUiShown: () => BI.d.get("isTouchScreen"),
              ctrlCombosAreGames: OT,
              inspect: (BB, IB, ZB) => {
                JB.checks(IB, ZB) && TB(BB)
              },
              canLock: () => JT(BB)
            }),
            zB = (0, UZ.b)(IB);
          return () => {
            GB(), cB(), (0, bZ.t)(null), zB(), hB()
          }
        }(qB, ((BB, IB, ZB, TB, JB) => {
          dn(iB, (() => {
            iB.rings.input.writeRecord(BB, IB, ZB, TB, JB)
          })), !kv && (0, HT.f)(BB, JB) && (0, HT.b)((() => {
            qG !== iB || Ok || iB.isStopped || !vn() || Vc(iB, !1, "budget", !1)
          }))
        }), (() => Ck), (BB => {
          var IB;
          null === (IB = LG) || void 0 === IB || IB.onEvent(BB)
        }));
        if (iB.isStopped) return fB(), null;
        aG = fB;
        const lB = () => !iB.isStopped && !sk;
        if (iB.isStopped) return null;
        (0, gI.S)((() => {
          "call" === (0, gI.m)() && iB.crash(zZ.s, (0, gI.j)())
        }));
        const AB = (0, zZ.R)(iB.rings.worker, (() => {
          Vc(iB, !1, document.hidden ? "all" : "budget")
        }));
        HG = function(BB, IB) {
          return Cn().then((BB => {
            let {
              prefetchWorldgenWorker: IB
            } = BB;
            IB()
          }), (() => {})), new Go({
            module: (0, gI.t)(),
            decodeSettings: BB => {
              const IB = (0, MB.q)();
              if (null === IB) throw new Error("no game code to decode the world-gen seed with");
              return IB.decodeMapSettings(BB)
            },
            loadWorker: Qn,
            onMapWithoutWorldgen: () => {
              sn((BB => {
                let {
                  stopWorldgenWorkerPrefetch: IB
                } = BB;
                IB()
              }))
            },
            onLoadFailed: BB => {
              (0, MZ.reportWorldgenLoadFailure)(BB, CG)
            },
            onWorkerLost: BB => {
              (0, MZ.reportWorkerLost)(zZ.H, BB, CG)
            },
            onStartTimeout: BB => {
              (0, MZ.reportWorkerStartTimeout)(zZ.H, BB, CG)
            },
            onGaveUp: BB => {
              (0, MZ.reportWorldgenGaveUp)(BB, CG)
            },
            onMemoryStats: BB => {
              var IB;
              null === (IB = PG) || void 0 === IB || IB.noteWorldgen(BB)
            },
            onMemoryGone: () => {
              var BB;
              null === (BB = PG) || void 0 === BB || BB.worldgenGone()
            },
            write: (ZB, TB, JB, oB, GB) => {
              dn(BB, (() => {
                BB.rings.worker.writeWorkerRecord(ZB, TB, JB, 0, oB, GB) || BB.crash(zZ.H, `a world-gen record of kind ${TB} did not fit the worker-in ring`)
              })), IB()
            }
          })
        }(iB, AB), jG = function(BB, IB) {
          return new GJ({
            module: (0, gI.t)(),
            loadWorkers: async () => {
              const [{
                createMeshWorker: BB
              }, IB] = await Promise.all([ZB.e(41).then((() => ZB(51112))), Promise.resolve().then((() => ZB(105))).then((BB => {
                let {
                  isMobile: IB
                } = BB;
                return IB()
              }), (() => !1))]);
              return {
                create: BB,
                count: (0, aI.d)(navigator.hardwareConcurrency, IB),
                maxKeptLightStates: IB ? 1 : void 0
              }
            },
            write: (ZB, TB, JB, oB, GB, vB) => {
              (0, FT.m)(), dn(BB, (() => {
                BB.rings.worker.writeWorkerRecord(ZB, TB, JB, oB, GB, vB) || BB.crash(zZ.o, `a meshing record of kind ${TB} did not fit the worker-in ring`)
              })), IB()
            },
            onWorkerLost: BB => {
              (0, MZ.reportWorkerLost)(zZ.o, BB, CG)
            },
            onLightFault: (BB, IB) => {
              (0, MZ.reportLightFault)(BB, IB, CG)
            },
            onStartTimeout: BB => {
              (0, MZ.reportWorkerStartTimeout)(zZ.o, BB, CG)
            },
            onMemoryStats: (BB, IB) => {
              var ZB;
              null === (ZB = PG) || void 0 === ZB || ZB.noteMeshWorker(BB, IB)
            },
            onMemoryGone: BB => {
              var IB;
              null === (IB = PG) || void 0 === IB || IB.meshWorkerGone(BB)
            },
            fail: (IB, ZB) => {
              const TB = () => {
                BB.crash(zZ.o, void 0 === ZB ? IB : new Error(IB, {
                  cause: ZB
                }))
              };
              void 0 !== ZB ? pn({
                site: zZ.o,
                error: ZB
              }, TB) : TB()
            }
          })
        }(iB, AB), Dk();
        const tB = (0, CJ.q)(iI.clientSideServerUrls.staticUrl, {
            onTableFailed: BB => {
              pn({
                site: MZ.MODEL_FEED_SITE,
                error: BB
              }, (() => {}), {
                stillWanted: lB
              })
            },
            packUrl: BB => {
              var IB, ZB;
              return null !== (IB = null === (ZB = Pc()) || void 0 === ZB ? void 0 : ZB.modelUrl(BB)) && void 0 !== IB ? IB : null
            }
          }),
          bB = function(BB, IB, ZB) {
            const TB = ZB => {
              var TB, JB;
              return null !== (TB = null === (JB = IB()) || void 0 === JB ? void 0 : JB.drawnUrl(ZB)) && void 0 !== TB ? TB : BB.url(ZB)
            };
            return (0, WJ.n)((0, nJ.l)(TB), ZB)
          }(tB, (() => uG), Pc),
          xB = new nJ.h(bB, (BB => {
            console.warn(`${eo} image ${BB.key.kind}:${BB.key.index}:${BB.key.word} failed`, BB.error)
          }));
        bG = xB, xG = new qJ(iB, bB, ((BB, IB) => {
          void 0 === IB ? console.warn(`${eo} ${BB}`) : rc(BB, IB)
        }));
        const EB = new UJ.f(tB, function(BB, IB) {
          let TB = !1,
            JB = null,
            oB = null;
          const GB = {
              onUnavailable: (ZB, TB) => {
                oB ??= pn({
                  site: MZ.MODEL_POOL_SITE,
                  error: ZB,
                  urls: TB
                }, (() => {
                  (0, MZ.reportModelPoolFailure)(ZB, BB)
                }), {
                  stillWanted: IB
                })
              },
              onDecoderFailed: (ZB, TB) => {
                const JB = () => {
                  (0, MZ.reportDracoDecoderFailure)(ZB, BB)
                };
                void 0 !== TB ? pn({
                  site: MZ.MODEL_POOL_SITE,
                  error: ZB,
                  urls: TB
                }, JB, {
                  stillWanted: IB
                }) : JB()
              },
              onWorkerLost: IB => {
                (0, MZ.reportWorkerLost)(MZ.MODEL_POOL_SITE, IB, BB)
              },
              onModuleRetry: (IB, ZB) => {
                (0, MZ.reportModelsModuleRetry)(IB, ZB, BB)
              }
            },
            vB = ZB.e(43).then((() => ZB(51116))).then((BB => {
              let {
                pageModelPool: IB
              } = BB;
              if (TB) return null;
              const ZB = IB(GB);
              return JB = ZB.unlisten, fG = ZB.pool, Dk(), ZB.pool
            }), (BB => (TB || GB.onUnavailable(BB, void 0), null)));
          return lG = () => {
            var BB;
            TB = !0, null === (BB = JB) || void 0 === BB || BB(), fG = null
          }, (BB, IB) => vB.then((ZB => {
            var TB;
            return null !== (TB = null === ZB || void 0 === ZB ? void 0 : ZB.build(BB, IB)) && void 0 !== TB ? TB : (0, QJ.v)(BB, "the model workers did not load")
          })).then((BB => null !== oB && (0, QJ.m)(BB) ? oB.then((() => BB)) : BB))
        }(YB, lB), (BB => {
          BB.startup ? (hn(), pn({
            site: MZ.MODEL_FEED_SITE,
            error: BB.error,
            urls: "" === BB.url ? void 0 : [BB.url]
          }, (() => {
            (0, MZ.reportModelFailure)(BB, YB)
          }))) : (0, MZ.reportModelFailure)(BB, YB)
        }), {
          onWritten: (BB, IB) => {
            xB.glbWritten(BB, IB)
          },
          onTaken: (BB, IB) => {
            xB.glbTaken(BB, IB)
          },
          onPackFileFailed: (BB, IB) => {
            console.warn(`${eo} the texture pack's model file ${BB} failed: the shipped one loads`, IB)
          }
        });
        uG = EB;
        const DB = new FJ.h(iB);
        WG = DB, DB.swap((BB => {
          const IB = () => {
            (0, MZ.reportTerrainTextureFailure)(BB, YB)
          };
          if (ck) return void IB();
          const ZB = () => !ck,
            TB = null === BB.url ? void 0 : [BB.url];
          pn({
            site: zZ.D,
            error: BB.error,
            urls: TB
          }, IB, {
            stillWanted: ZB
          })
        })).then((BB => {
          null !== BB && (BB || iB.isStopped || console.warn(`${eo} the core refused the terrain textures: terrain draws untextured`), Bv(iB))
        }));
        const KB = new xI(iB, ((BB, IB) => {
          console.warn(`${eo} ${BB}`, ...void 0 === IB ? [] : [IB])
        }));
        KB.feed(), null !== zB && function(BB, IB, TB, JB, oB, GB) {
          let vB = null,
            cB = null,
            nB = !1;
          const hB = {
            textures: null,
            stop: () => {
              var BB, IB;
              nB = !0, null === (BB = cB) || void 0 === BB || BB(), null === (IB = vB) || void 0 === IB || IB(), dJ.b.setSettled(null), null !== QG && Pk.clear(QG)
            }
          };
          UG = hB, cB = mc().follow((cB => {
            null !== cB && Promise.all([ZB.e(204), ZB.e(46)]).then((() => ZB(51075))).then((ZB => {
              let {
                PackTextures: zB
              } = ZB;
              if (nB || BB.isStopped) return;
              const FB = new zB({
                feed: cB,
                terrain: IB,
                backend: TB,
                stopped: () => BB.isStopped,
                landed: () => {
                  Bv(BB)
                },
                packSwapped: () => {
                  (0, WJ.j)(JB), GB.feed((() => async function(BB) {
                    const IB = null === BB ? null : await BB.averageColours;
                    return null === IB ? EI() : bI(IB)
                  }(FB.assets))), (0, yJ.j)(FB.files()), oB.refresh().then((BB => {
                    null !== BB && console.info(`${eo} texture pack models: ${BB.resent} of ${BB.delivered} files written again, ${BB.refetched} refetched`)
                  }))
                },
                settled: (BB, IB, ZB) => {
                  var TB;
                  (dJ.b.setSettled({
                    state: BB,
                    files: IB
                  }), function(BB, IB, ZB) {
                    const TB = null === BB.gameSource && (0, jZ.d)(BB.pack);
                    if (null === IB) return;
                    const JB = (0, HZ.h)(IB.error),
                      oB = TB ? "settings" : IB.source;
                    kB.l.Gq(HZ.e, {
                      failure: JB,
                      source: oB,
                      pack: PZ(BB)
                    }), (0, MZ.reportTexturePackKeptOut)(oB, JB, IB.error, ZB)
                  }(BB, ZB, CG), null === ZB) && function(BB) {
                    const IB = QG;
                    null !== IB && Pk.apply(IB, BB).then((IB => {
                      IB && BB && console.info(`${eo} the texture pack's animations are in (${Object.keys(BB).length} files)`)
                    }))
                  }(null === (TB = BB.pack) || void 0 === TB ? void 0 : TB.animations)
                },
                settling: () => {
                  dJ.b.setSettled(null)
                },
                warn: rc,
                maxTextureSize: () => Promise.resolve((0, nZ.eb)(document.createElement("canvas")))
              });
              hB.textures = FB, vB = FB.start()
            }), (BB => {
              console.warn(`${eo} the texture pack's terrain didn't load: the built atlas stays`, BB)
            }))
          }))
        }(iB, DB, zB, xB, EB, KB);
        const II = () => {
            iB.setTextureLayers("")
          },
          ZI = BB => {
            (YI ??= ZB.e(54).then((() => ZB(51120))).then((BB => {
              let {
                TEXTURE_NAMES: IB
              } = BB;
              return IB
            }), (BB => {
              throw YI = null, BB
            })), YI).then((BB => {
              iB.setTextureLayers(BB) || iB.isStopped || (console.warn(`${eo} the core refused the texture names: textured Boxes draw textureNotFound`), II())
            }), (IB => {
              if (iB.isStopped) return;
              const [ZB, ...TB] = BB;
              void 0 === ZB ? pn({
                site: MZ.TEXTURE_NAMES_SITE,
                error: IB
              }, (() => {
                console.warn(`${eo} the texture names didn't load, so textured Boxes draw textureNotFound`, IB), II()
              }), {
                stillWanted: lB
              }) : setTimeout((() => {
                ZI(TB)
              }), ZB)
            }))
          };
        if (ZI(GG), null !== zB && !await async function(BB, IB, ZB, TB, oB, GB) {
            var vB;
            const kB = (0, nZ.Q)(ZB);
            if (null === kB) return BB.crash(fo, new Error(`this ${TB} build has no openRenderer`)), !1;
            let cB;
            Ev = kB;
            try {
              var nB, hB, zB, FB;
              const JB = null !== (nB = null === (hB = NG) || void 0 === hB ? void 0 : hB.pagePreviews()) && void 0 !== nB ? nB : null,
                vB = null !== (zB = null === (FB = NG) || void 0 === FB ? void 0 : FB.previewModule(ZB)) && void 0 !== zB ? zB : null;
              if (null === JB || null === vB) {
                null === JB || void 0 === JB || JB.endSession(!1), cB = (0, LI.c)().sampleCount, await (0, nZ.g)(IB, kB, GB, Mc, cB, await oB);
                const BB = (0, nZ.l)(ZB);
                null === BB && console.warn(`${eo} this ${TB} build has no image registry: sky and model images won't show`), (0, zJ.g)(BB)
              } else {
                (0, aJ.e)() && await (0, SB.s)();
                const ZB = (0, aJ.L)();
                if (null !== ZB) {
                  const IB = (0, hZ.i)(kB);
                  return BB.crash(MZ.RENDER_RELOAD_SITE, new Error(`${ZB}${void 0===IB?"":` (${IB.message})`}`)), !1
                }
                cB = await JB.bindSession(vB, IB, (async BB => (0, nZ.v)(kB, fo, GB, BB, Mc, await oB)))
              }
            } catch (JB) {
              return BB.crash(fo, JB), !1
            }(function(BB, IB) {
              const ZB = BB,
                {
                  requestCapture: TB,
                  takeCapture: JB
                } = ZB;
              if ("function" !== typeof TB || "function" !== typeof JB) return;
              const oB = {
                request() {
                  TB.call(ZB, IB)
                },
                take() {
                  var BB;
                  return null !== (BB = JB.call(ZB)) && void 0 !== BB ? BB : null
                }
              };
              window[XJ] = oB
            })(IB, cB), Zk = cB, bv = !0;
            const NB = performance.now();
            return xv.boundAtMs = null !== (vB = (0, aJ.M)()) && void 0 !== vB ? vB : NB, xv.indirectHangs = (0, aJ.B)(), xv.restoresSkipped = (0, aJ.P)(), console.info(`${eo} ${TB} renderer bound at ${Math.round(NB)} ms`), !BB.isStopped
          }(iB, OB, wB, zB, NB, qB)) return null;
        if (null !== zB) {
          var TI, JI, oI;
          (0, UI.J)(zB);
          const BB = () => !iB.isStopped && Gn();
          ZB.e(196).then((() => ZB(34060))).then((IB => {
            let {
              devTools: ZB
            } = IB;
            iB.isStopped || ZB.setHost(function(BB) {
              return {
                tools: pJ,
                async downloadScene(IB, ZB) {
                  let {
                    width: TB,
                    height: JB,
                    colouring: oB
                  } = ZB;
                  "screenshot" === IB && null === oB ? await (0, OJ.h)(BB, TB, JB) : console.warn("The Rust client's developer tools take uncoloured screenshots only")
                },
                setAmbientLightIntensity: () => (console.warn("The Rust client's renderer has no ambient light setting"), Promise.resolve()),
                capturePhoto: (IB, ZB, TB) => (0, OJ.d)(BB, IB, ZB, TB)
              }
            }(function(BB, IB) {
              return {
                canvas: BB,
                maxTextureSize: YJ,
                drawing: IB,
                resize: (BB, IB, ZB) => {
                  (0, bZ.A)(DI.vb.Resize, 0, BB / ZB, IB / ZB, (0, bZ.m)(ZB))
                },
                restoreSize: () => {
                  const IB = (0, LI.j)(BB);
                  null !== IB && (0, bZ.A)(DI.vb.Resize, 0, IB.cssWidth, IB.cssHeight, (0, bZ.m)(IB.renderScale))
                },
                onFrameDrawn: BB => (iJ.add(BB), () => {
                  iJ.delete(BB)
                })
              }
            }(qB, BB)))
          }), (BB => {
            console.warn(`${eo} the developer tools didn't load: no captures this session`, BB)
          }));
          const IB = "webgpu" === zB && null !== (TI = null === hB || void 0 === hB || null === (JI = hB.adapter) || void 0 === JI ? void 0 : JI.vendor) && void 0 !== TI ? TI : null;
          Tk = {
            backend: zB,
            canvas: qB,
            fallbackReason: null !== (oI = null === hB || void 0 === hB ? void 0 : hB.reason) && void 0 !== oI ? oI : null,
            adapterVendor: IB
          }, lc();
          try {
            (0, FT.w)(zB, qB, IB)
          } catch (JB) {
            (0, FT.y)(), console.error(`${eo} the quality steps didn't start`, JB)
          }
        }
        const {
          storagePullBreaks: GI,
          splitPassBreaks: vI
        } = await NB;
        vI && console.warn(`${eo} split_pass_breaks on: Windows Adreno 7xx (N-103) or ?sceneDepth=off`);
        const kI = (0, VB.e)(hB, (0, PI.l)());
        if ((0, EJ.t)("webgpuloss")) {
          var cI, nI;
          const BB = {
            backend: zB,
            reason: null !== (cI = null === hB || void 0 === hB ? void 0 : hB.reason) && void 0 !== cI ? cI : null,
            source: null !== (nI = null === hB || void 0 === hB ? void 0 : hB.source) && void 0 !== nI ? nI : null,
            storagePullBreaks: GI,
            noWebGpu: kI.messageKey
          };
          (0, DJ.e)((IB => {
            IB.noteWasmPick(BB)
          }))
        }
        const hI = "webgpu" === zB;
        if (DG = (0, VB.h)(hI ? iB : null, hI && null !== (vB = null === (cB = NG) || void 0 === cB ? void 0 : cB.pagePreviews().oN) && void 0 !== vB ? vB : null, kI, rc), Ok) return null;
        if (XB.reserveAtJoin((0, kJ.m)(null !== jB && void 0 !== jB ? jB : YZ.g)), iB.isStopped) return null;
        const zI = BB => {
          if (Jv = performance.now(), ov = !1, null !== Jk) try {
            Jk.animationFrame(BB)
          } catch (JB) {
            bc(JB)
          }
          if (function(BB, IB) {
              return IB && !Ok && !kv && vn() && Gn() && BB.framePaces(performance.now())
            }(iB, Ck)) {
            if (iB.writePendingInput(), (0, HB.e)(BB, Sc), Ac(!1, BB), null !== Jk) try {
              Jk.framePaced()
            } catch (JB) {
              bc(JB)
            }
            requestAnimationFrame(zI)
          } else Vc(iB, Ck, "budget") && ((0, rI.j)(iB.lastFrameKind) && Gn() && (0, HB.e)(BB, Sc), Ac(Ck && yk, BB), Uk.frame(iB.lastFrameKind, Ck && Gn(), BB), Wk.frame(iB.lastFrameKind, Ck && Gn()), (0, rI.e)(iB.lastFrameKind) && PI.H.drew(), Nn(iB), XB.afterFrame(), requestAnimationFrame(zI))
        };
        requestAnimationFrame(zI);
        return function(BB) {
          if (BB.has("inputLog") && (0, QT.e)((BB => {
              let {
                action: IB,
                down: ZB,
                press: TB
              } = BB;
              console.info(`${wT} input ${IB} ${ZB?"down":"up"} press ${TB} at ${performance.now().toFixed(1)}`)
            })), BB.has("inputDump")) {
            const BB = [];
            YT = BB, Object.assign(window, {
              bloxdInputDump: () => BB.join("\n")
            })
          }
        }(new URLSearchParams(window.location.search)), XG = function(BB) {
          let IB = null;
          const ZB = () => {
              null !== IB && (clearInterval(IB), IB = null)
            },
            TB = () => {
              document.hidden ? IB ??= setInterval((() => {
                On(BB) || ZB()
              }), oG) : ZB()
            };
          return document.addEventListener("visibilitychange", TB), TB(), () => {
            ZB(), document.removeEventListener("visibilitychange", TB)
          }
        }(iB), iB
      }(IB).then((BB => {
        var IB;
        (TB(CG), OG(null !== BB), null !== BB && (WB = performance.now()), sG(BB), null === BB) ? null === (IB = NG) || void 0 === IB || IB.pagePreviews().endSession(null === (0, gI.m)()): SG("booted")
      }), (BB => {
        TB(CG), OG(!1), sG(null), zn({
          site: Ao,
          error: BB,
          header: null
        }, CG)
      }))
    }

    function jk() {
      const BB = QG;
      null !== BB && Yk().then((IB => {
        let {
          pageBuiltInAnimationPack: ZB
        } = IB;
        ZB().provide(BB)
      }), (BB => {
        console.warn(`${eo} the built-in animation pack's chunk did not load: lifeforms stay in their rest pose`, BB)
      }))
    }
    const Pk = new class {
      constructor(BB) {
        this.deps = BB, this.latest = 0, this.sv = null
      }
      apply(BB, IB) {
        return this.load(BB, IB, 0)
      }
      async load(BB, IB, ZB) {
        var TB;
        const JB = ++this.latest,
          oB = this.deps.compiler;
        if (void 0 === IB || null === IB || "object" !== typeof IB || 0 === Object.keys(IB).length || null === oB) return this.drop(BB), !1;
        if ((null === (TB = this.sv) || void 0 === TB ? void 0 : TB.module) === BB && (0, oZ.he)(this.sv.files, IB)) return !1;
        try {
          const [ZB, TB] = await Promise.all([oB(), this.deps.builtIns()]);
          if (JB !== this.latest) return !1;
          const GB = await ZB(IB, cZ, {
            builtIns: TB
          });
          if (JB !== this.latest) return !1;
          const vB = this.call(BB, GB);
          if (void 0 === vB) throw new kZ("the compiled animations didn't read against the built-in pack");
          return this.sv = {
              module: BB,
              files: IB
            },
            function(BB) {
              for (let IB = 0; IB + 2 < BB.length; IB += 3) {
                ("error" === BB[IB] ? console.error : console.warn)(`Animation for the texture pack: ${BB[IB+1]}: ${BB[IB+2]}`)
              }
            }(vB), !0
        } catch (vB) {
          var GB;
          if (JB !== this.latest) return !1;
          this.drop(BB), 0 === ZB && this.deps.warn("the texture pack's animations didn't load: lifeforms play the built-in ones", vB);
          const TB = (null !== (GB = this.deps.retryAfterMs) && void 0 !== GB ? GB : vZ)[ZB];
          return void 0 === TB || vB instanceof kZ || (0, GZ.f)(BB) || setTimeout((() => {
            JB === this.latest && this.load(BB, IB, ZB + 1)
          }), TB), !1
        }
      }
      call(BB, IB) {
        try {
          return BB.QTB(IB)
        } catch (ZB) {
          throw (0, GZ.h)(BB, ZB), ZB
        }
      }
      clear(BB) {
        this.latest++, this.drop(BB)
      }
      drop(BB) {
        const IB = this.sv;
        if (this.sv = null, (null === IB || void 0 === IB ? void 0 : IB.module) === BB && !(0, GZ.f)(BB)) try {
          this.call(BB, null)
        } catch {}
      }
    }({
      compiler: IZ.d,
      builtIns: async () => {
        const {
          pageBuiltInAnimationPack: BB
        } = await Yk();
        return BB().whenSet()
      },
      warn: rc
    });
    async function Rk(BB, IB) {
      let TB = !1;
      await rk({
        matchmake: async () => {
          const {
            guestJoinTarget: JB,
            guestJoinWithPack: oB
          } = await ZB.e(277).then((() => ZB(51065)));
          return TB ? JB(BB, IB, Lc()) : (TB = !0, oB(BB, IB, (IB => ec(BB, IB)), Lc))
        },
        onFailure: BB => {
          (0, MZ.showJoinFailure)(BB, CG)
        },
        rejoin: Sk,
        invalidateTrafficCode: Bc
      })
    }
    async function rk(BB) {
      let {
        matchmake: IB,
        onFailure: ZB,
        rejoin: JB,
        invalidateTrafficCode: oB,
        pageReady: GB,
        signal: vB
      } = BB;
      const kB = () => !0 === (null === vB || void 0 === vB ? void 0 : vB.aborted);
      let cB;
      const nB = dJ.b.rejoinHold();
      Cv = null;
      const hB = (0, XZ.I)("wasm", Un);
      let zB = !1,
        FB = performance.now();
      try {
        if (!await YG) return {
          kind: "stopped"
        };
        if (kB()) return {
          kind: "fZ"
        };
        ik().catch((() => {}));
        let BB = await IB();
        var CB, QB;
        if (FB = performance.now(), !kB()) yn(null !== (CB = null === (QB = BB.target.session) || void 0 === QB ? void 0 : QB.gameNameWithVariation) && void 0 !== CB ? CB : null);
        const ZB = () => performance.now() - BB.matchedAt <= BB.freshMs,
          TB = Xk(BB.target).catch((() => {}));
        ZB() && !kB() && (cB = new TJ(BB.target, {
          signal: vB
        }));
        const oB = performance.now();
        if (null === await wG) return {
          kind: "stopped"
        };
        var sB, wB;
        if (function(BB) {
            var IB, ZB;
            if (gB.d.markGameEngineConstructed(), dB) return;
            dB = !0;
            const TB = Math.max(BB, null !== (IB = yB) && void 0 !== IB ? IB : BB);
            (0, qB.f)("ready", Math.max(0, (null !== (ZB = UB) && void 0 !== ZB ? ZB : TB) - TB) / 1e3)
          }(oB), !kB())
          if (null !== UB && null !== WB ? ((0, NB.n)("wasm_loaded", UB), (0, NB.n)("wasm_core_ready", WB)) : console.warn("[bloxd-wasm-client] a join found the core before boot marked its steps"), BB.target.session && (0, Jo.c)(BB.target.session.gameNameWithVariation)) null === (sB = HG) || void 0 === sB || sB.prestart();
        if (await TB, !ZB() && !kB()) null === (wB = cB) || void 0 === wB || wB.rematched(), BB = await IB(), FB = performance.now();
        if (kB()) return {
          kind: "fZ"
        };
        const nB = await async function(BB) {
          var IB, ZB, TB;
          let {
            signal: JB,
            rejoin: oB = null,
            early: GB,
            pageReady: vB
          } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (null !== JB && void 0 !== JB && JB.aborted) throw new DOMException("the join was left", "AbortError");
          const kB = (cB = rv, nB = performance.now(), null !== cB && nB - cB < lT);
          var cB, nB;
          rv = null;
          const hB = new AbortController,
            zB = null !== (IB = null === (ZB = BB.session) || void 0 === ZB ? void 0 : ZB.gameNameWithVariation) && void 0 !== IB ? IB : null;
          yn(zB), uk({
            controller: hB,
            game: zB
          }), mv = null, null === (TB = ev) || void 0 === TB || TB.abort(), ev = null, fv = !1, lv = null, Av.clear();
          const FB = () => {
            (0, pI.i)(hB, (0, pI.e)(JB))
          };
          null === JB || void 0 === JB || JB.addEventListener("abort", FB, {
            once: !0
          });
          try {
            var gB, qB, yB;
            const IB = await wG;
            if (null === IB || IB.isStopped || Ok) throw new Error("no core is running to join a game with");
            if (BB.session && null !== DG) {
              const IB = await Lk(DG.join(BB.session.gameNameWithVariation), hB.signal);
              if ((0, EJ.t)("webgpuloss")) {
                const ZB = BB.session.gameNameWithVariation,
                  TB = DG.couldntRunInJoinedGame();
                (0, DJ.e)((BB => BB.noteWasmJoin(ZB, IB, TB)))
              }
              if (null !== IB) throw new VB.d(IB)
            }
            const [, , , {
              joinRoom: ZB
            }] = await Lk(Promise.all([(0, MB.k)(IB), Xk(BB), null === vB || void 0 === vB ? void 0 : vB(), ik()]), hB.signal), TB = BB.session, JB = TB ? {
              ...Tc,
              attachSocket: IB => {
                const ZB = nc(IB, BB.endpoint);
                var JB;
                null !== ZB && (wv = {
                  conn: ZB,
                  info: TB
                }, null === (JB = Ov) || void 0 === JB || JB(TB.playerDbId));
                return ZB
              }
            } : Tc, cB = await ZB(JB, BB, {
              signal: hB.signal,
              early: GB
            }).catch((BB => {
              throw function(BB) {
                if (!(BB instanceof fB.c)) return BB;
                if ("roomError" === BB.stage && null !== lv) return mk(new fB.c(BB.message, BB.stage, BB.code, lv), BB);
                const IB = "closed" === BB.stage && null !== Xv ? Av.get(Xv.conn) : void 0;
                return void 0 === IB ? BB : mk(new fB.c(BB.message, BB.stage, IB.code, null, BB.socketOpened), BB)
              }(BB)
            }));
            if (dv !== hB) throw cB.leave(), new DOMException("the join was left", "AbortError");
            lk(cB), null === (gB = jG) || void 0 === gB || gB.newGame();
            const nB = function(BB) {
              var IB, ZB;
              const {
                session: TB
              } = BB, JB = void 0 === TB ? BB.joinOptions.lobbyName : TB.lobbyName;
              return {
                endpoint: BB.endpoint,
                game: null !== (IB = null === TB || void 0 === TB ? void 0 : TB.gameNameWithVariation) && void 0 !== IB ? IB : BB.roomName,
                lobby: String(null !== JB && void 0 !== JB ? JB : null),
                postCookies: null !== (ZB = BB.postCookies) && void 0 !== ZB ? ZB : null
              }
            }(BB);
            Wv.set(cB, nB), ST(nB);
            const zB = performance.now(),
              FB = {
                conn: cB.conn,
                rejoin: oB,
                game: null !== (qB = null === (yB = BB.session) || void 0 === yB ? void 0 : yB.gameNameWithVariation) && void 0 !== qB ? qB : "",
                joinedAt: zB,
                rejoinedAt: kB ? zB : null,
                overflow: null
              };
            Yv = FB,
              function(BB, IB) {
                Uc();
                const ZB = {
                  endpoint: IB,
                  roomId: BB.seat.room.roomId,
                  heldConn: 0,
                  dropCode: 0,
                  pendingHold: null,
                  resume: new sZ({
                    reconnect: (BB, IB, TB) => async function(BB, IB, ZB, TB) {
                      const {
                        roomId: JB,
                        roomToken: oB
                      } = dc(BB, IB), GB = qG;
                      if (null === GB || GB.isStopped || Ok) throw new Error("no core is running to resume the game on");
                      const {
                        resumeRoom: vB
                      } = await Lk(ik(), ZB), kB = {
                        ...Tc,
                        attachSocket: IB => iv !== BB || 0 === BB.heldConn ? (IB.close(), null) : nc(IB, BB.endpoint, !0)
                      };
                      return vB(kB, BB.endpoint, JB, oB, {
                        signal: ZB,
                        onAttached: TB
                      })
                    }(ZB, BB, IB, TB),
                    releaseSeat: BB => {
                      !async function(BB, IB) {
                        const {
                          roomId: ZB,
                          roomToken: TB
                        } = dc(BB, IB);
                        try {
                          const {
                            leaveHeldSeat: IB
                          } = await ik();
                          await IB(BB.endpoint, ZB, TB)
                        } catch (JB) {
                          console.warn(`${eo} the held seat of a game left while it reconnected couldn't be released`, JB)
                        }
                      }(ZB, BB)
                    },
                    isLive: () => iv === ZB && null !== Yv && !Ok,
                    VY: BB => {
                      Rv = BB, yc()
                    },
                    onReconnected: BB => {
                      ! function(BB) {
                        const IB = Uv;
                        if (null !== IB && IB !== BB) {
                          const ZB = Wv.get(IB);
                          void 0 !== ZB && Wv.set(BB, ZB), qk === IB && (qk = BB), IB.detach()
                        }
                        lk(BB)
                      }(BB)
                    },
                    onGaveUp: (BB, IB) => {
                      ! function(BB, IB, ZB) {
                        var TB, JB;
                        console.warn(`${eo} gave up reconnecting (${ZB.reason}, ${ZB.attempts} attempts)`, ZB.lastError), (0, MZ.reportReconnectGaveUp)(ZB, CG);
                        const oB = null !== (TB = null === (JB = Yv) || void 0 === JB ? void 0 : JB.rejoin) && void 0 !== TB ? TB : null;
                        Wc(BB, "gaveUp"), tk();
                        const GB = {
                          code: BB.dropCode,
                          name: null,
                          reason: IG,
                          canReconnect: !IB,
                          automaticallyReconnect: !1,
                          requiresRefresh: !1
                        };
                        Zc(GB, IB ? null : oB, !1, {
                          reasonKey: ZG,
                          canPlayAgain: IB
                        })
                      }(ZB, BB, IB)
                    }
                  })
                };
                iv = ZB, null !== pv && pv.conn === BB.conn && ZB.resume.onInitialInfo(pv)
              }(cB, BB.endpoint), performance.mark(xo), (0, NB.n)("wasm_joined", zB), setTimeout((() => {
                Uv === cB && (0, NB.e)()
              }), 0), jk(), console.info(`${eo} joined ${BB.roomName} as ${cB.seat.sessionId} at ${Math.round(performance.now())} ms`);
            const UB = mv;
            mv = null, null !== UB && Ek(FB, UB.mask, UB.frames);
            const WB = Av.get(cB.conn);
            return Av.clear(), void 0 !== WB && (lk(null), Ic(cB.conn, WB.code, WB.reason)), cB
          } finally {
            var UB;
            null === JB || void 0 === JB || JB.removeEventListener("abort", FB), dv === hB && fk(Uv, null), (null === (UB = Xv) || void 0 === UB ? void 0 : UB.join) === hB && (Xv = null)
          }
        }(BB.target, {
          signal: vB,
          rejoin: JB(BB.target),
          early: cB,
          pageReady: GB
        });
        return zB = !0, {
          kind: "joined",
          game: nB
        }
      } catch (YB) {
        if (YB instanceof DOMException && "AbortError" === YB.name || kB()) return {
          kind: "fZ"
        };
        if (Ok) return {
          kind: "stopped"
        };
        if (fv && (fv = !1, await oB().catch((BB => {
            console.warn(`${eo} the cached traffic code could not be dropped`, BB)
          }))), null === await wG) return {
          kind: "stopped"
        };
        if (YB instanceof VB.d) return ZB(YB, performance.now() - FB), {
          kind: "failed",
          error: YB,
          reloading: !1
        };
        if (YB instanceof fB.c && YB.code === TB.c.wasmClientNotAllowed.code && dk) return Hc("this server refused the wasm client to this account", "refused"), {
          kind: "failed",
          error: YB,
          reloading: !0
        };
        const BB = YB instanceof fB.c && YB.code === TB.c.outdatedVersion.code,
          IB = () => null === Uv,
          JB = await pn({
            site: MZ.JOIN_SITE,
            error: YB,
            outdated: BB
          }, (() => {
            ZB(YB, performance.now() - FB)
          }), {
            stillWanted: IB
          });
        return {
          kind: "failed",
          error: YB,
          reloading: JB
        }
      } finally {
        var OB;
        zB || hB.end(), dJ.b.releaseHold(nB);
        const BB = null === (OB = cB) || void 0 === OB ? void 0 : OB.release();
        BB && (0, MZ.reportUnusedSeat)(BB, CG)
      }
    }

    function mk(BB, IB) {
      return BB.stack = IB.stack, BB
    }

    function Xk(BB) {
      return BB.session ? (0, MB.n)(dG, BB.session.gameNameWithVariation) : Promise.resolve()
    }

    function Lk(BB, IB) {
      return (0, pI.o)(IB), new Promise(((ZB, TB) => {
        const JB = () => {
          TB((0, pI.e)(IB))
        };
        IB.addEventListener("abort", JB, {
          once: !0
        }), BB.then((BB => {
          IB.removeEventListener("abort", JB), ZB(BB)
        }), (BB => {
          IB.removeEventListener("abort", JB), TB(BB)
        }))
      }))
    }

    function ek() {
      uk(null)
    }

    function uk(BB) {
      var IB, ZB, TB;
      (function() {
        const BB = iv;
        null !== BB && Wc(BB, "left")
      }(), null === pG || pG.left) || (pG.left = !0, null === (TB = (0, MB.j)()) || void 0 === TB || TB.socketLeft(), (0, zB.l)({
        websocketUrl: null
      }));
      dv && (0, pI.i)(dv, new DOMException("the join was left", "AbortError")), tk(null !== BB), null === (IB = DG) || void 0 === IB || IB.leave();
      const JB = Uv;
      null !== BB && dJ.b.setGame(BB.game), fk(null, null !== (ZB = null === BB || void 0 === BB ? void 0 : BB.controller) && void 0 !== ZB ? ZB : null), null === JB || void 0 === JB || JB.leave(), Ak(0), (0, wI.h)()
    }

    function fk(BB, IB) {
      Uv = BB, dv = IB, null === Uv && null === dv && dJ.b.setGame(void 0)
    }

    function lk(BB) {
      fk(BB, dv)
    }

    function Ak(BB) {
      const IB = qG;
      return null !== kG && !Ok && null !== IB && !IB.isStopped && (!!kG(fB.i, 0, (0, fB.A)(BB)) && (hv = !0, 0 === BB || kv || Vc(IB, !1, "all"), !0))
    }

    function tk() {
      var BB, IB;
      arguments.length > 0 && void 0 !== arguments[0] && arguments[0] || (0, XZ.e)();
      const ZB = null !== (BB = null === (IB = Yv) || void 0 === IB ? void 0 : IB.overflow) && void 0 !== BB ? BB : null;
      Yv = null, null !== ZB && (0, MZ.reportEventOverflow)(ZB, CG)
    }

    function bk() {
      null !== Uv || null !== dv ? ek() : hc()
    }

    function xk(BB, IB) {
      console.warn(`${eo} the event buffer refused records in ${IB} frames (categories ${BB})`), Ok || (null !== Yv ? Ek(Yv, BB, IB) : null !== dv && function(BB, IB, ZB) {
        var TB;
        const JB = function(BB, IB) {
          return null === BB ? "drop" : BB.activated ? "keep" : 0 !== (IB & KI.y.NetSession) ? "fail" : "drop"
        }((null === (TB = Xv) || void 0 === TB ? void 0 : TB.join) === BB ? Xv : null, IB);
        "keep" === JB ? mv = {
          mask: IB,
          frames: ZB
        } : "fail" === JB && (0, pI.i)(BB, new Error("the join's net session was lost to an event overflow"))
      }(dv, BB, IB))
    }

    function Ek(BB, IB, ZB) {
      const TB = BB.overflow ??= {
        frames: 0,
        acks: 0,
        mask: 0,
        outcome: null
      };
      TB.frames += ZB, TB.acks++, TB.mask |= IB;
      const JB = function(BB, IB, ZB) {
        if (0 === (BB & KI.y.NetSession)) return "none";
        const TB = null !== IB.rejoinedAt && ZB - IB.rejoinedAt < AT;
        return null === IB.rejoin || TB ? "fail" : "rejoin"
      }(IB, BB, performance.now());
      "none" !== JB && queueMicrotask((() => {
        if (Yv !== BB) return;
        const IB = "rejoin" === JB && performance.now() - Lv >= uB.c;
        TB.outcome = IB ? "rejoined" : "failed", Zc(function(BB, IB) {
          return {
            code: 0,
            name: "eventOverflow",
            reason: "Your game fell behind the server.",
            canReconnect: BB,
            automaticallyReconnect: IB,
            requiresRefresh: !1
          }
        }(null !== BB.rejoin, IB), BB.rejoin, IB), ek(), IB && (rv = performance.now())
      }))
    }

    function Dk() {
      dk && function(BB, IB) {
        let {
          mesh: ZB,
          worldgen: TB,
          modelPool: JB
        } = BB;
        "landingPage" === IB ? (null === ZB || void 0 === ZB || ZB.stopWorkers(), null === TB || void 0 === TB || TB.stopWorker(), null === JB || void 0 === JB || JB.stopWorkers()) : ((0, BI.j)(IB) || "inGame" === IB) && (null === ZB || void 0 === ZB || ZB.restartWorkers(), null === JB || void 0 === JB || JB.startWorkers())
      }({
        mesh: jG,
        worldgen: HG,
        modelPool: fG
      }, BI.d.get("gameState"))
    }

    function Kk(BB) {
      Ck = BB, Qk && Vk(Qk, BB)
    }

    function Vk(BB, IB) {
      BB.style.visibility = IB ? "visible" : "hidden"
    }

    function Sk(BB) {
      var IB;
      const ZB = BB.roomName,
        TB = null !== (IB = BB.joinOptions.lobbyName) && void 0 !== IB ? IB : null;
      return () => {
        Rk(ZB, TB)
      }
    }

    function Bc() {
      return ZB.e(277).then((() => ZB(51065))).then((BB => {
        let {
          invalidateGuestTrafficCode: IB
        } = BB;
        return IB()
      })).catch((BB => {
        console.warn(`${eo} the cached traffic code could not be dropped`, BB)
      }))
    }

    function Ic(BB, IB, ZB) {
      var JB, oB;
      let GB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (Ok) return;
      if ((null === (JB = Yv) || void 0 === JB ? void 0 : JB.conn) !== BB) return void(null !== dv && Av.set(BB, {
        code: IB,
        reason: ZB
      }));
      const {
        rejoin: vB,
        game: kB,
        joinedAt: cB
      } = Yv;
      tk(), Uc();
      const nB = (0, uB.f)(IB, (0, bT.f)(BB));
      if (console.info(`${eo} the game's connection closed with code ${IB} (${null!==(oB=nB.name)&&void 0!==oB?oB:"unrecognised"})`), IB === TB.c.gameOrPluginKick.code || GB || (0, MZ.reportDisconnect)(nB, CG, {
          closeReason: ZB,
          sinceJoinedMs: performance.now() - cB,
          game: kB
        }), nB.requiresRefresh) {
        const BB = "outdatedVersion" === nB.name,
          ZB = new Error(`the game's connection closed with code ${IB}`),
          TB = () => null === Yv && null === dv;
        return void pn({
          site: MZ.JOIN_SITE,
          error: ZB,
          outdated: BB
        }, (() => {
          TB() && Zc(nB, null, !1)
        }), {
          stillWanted: TB
        })
      }
      const hB = nB.canReconnect ? vB : null,
        zB = null !== hB && nB.automaticallyReconnect && performance.now() - Lv >= uB.c;
      Zc(nB, hB, zB)
    }

    function Zc(BB, IB, ZB) {
      var TB;
      let JB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
        reasonKey: null,
        canPlayAgain: !1
      };
      if (sk) return;
      dJ.b.unwantedLeave(ZB && null !== IB && 0 === uv.size), null === (TB = ev) || void 0 === TB || TB.abort();
      const oB = new AbortController;
      ev = oB;
      const GB = null === IB ? null : () => {
        oB.signal.aborted || (oB.abort(), IB())
      };
      if (ZB && null !== GB) {
        Lv = performance.now();
        const BB = setTimeout(GB, uB.b);
        oB.signal.addEventListener("abort", (() => {
          clearTimeout(BB)
        }))
      }
      const vB = {
        code: BB.code,
        name: BB.name,
        reason: BB.reason,
        reasonKey: JB.reasonKey,
        reconnect: GB,
        reconnecting: ZB,
        requiresRefresh: BB.requiresRefresh,
        canPlayAgain: JB.canPlayAgain
      };
      if (uv.size > 0)
        for (const cB of [...uv]) try {
          cB(vB)
        } catch (kB) {
          console.error(`${eo} an unwanted-leave listener threw`, kB)
        } else rT((0, jT.g)(BB, null !== GB, ZB), oB.signal).then((IB => {
          IB && (null !== GB ? GB() : BB.requiresRefresh && (0, SB.p)())
        }))
    }
    const Tc = {
      attachSocket: BB => nc(BB),
      onConnection: BB => (tv.add(BB), () => {
        tv.delete(BB)
      }),
      sendRaw: (BB, IB) => {
        const ZB = pG;
        return null !== ZB && ZB.conn === BB && nn(ZB, IB)
      },
      leaveRoom: Ak,
      closeSocket: BB => {
        var IB;
        (null === (IB = pG) || void 0 === IB ? void 0 : IB.conn) === BB && hc()
      },
      flushNet: zc
    };

    function Jc(BB) {
      var IB;
      let {
        aux: ZB,
        payload: TB
      } = BB;
      null === (IB = qG) || void 0 === IB || IB.queueOptions(ZB, TB)
    }

    function oc(BB, IB) {
      Jc(function(BB, IB) {
        return PJ = BB ? {
          preventMovement: IB
        } : null, BB ? RJ(IB) : {
          aux: DI.dc.AdEnd,
          payload: jJ
        }
      }(BB, IB))
    }

    function Gc(BB) {
      var IB;
      gv = BB, null === (IB = qG) || void 0 === IB || IB.setUiPrefs(BB)
    }

    function vc(BB, IB) {
      dG.setMaster(BB, IB)
    }

    function kc(BB) {
      var IB;
      qv = BB, null === (IB = qG) || void 0 === IB || IB.setEnvPrefs(BB)
    }

    function cc(BB) {
      var IB;
      yv = BB, null === (IB = qG) || void 0 === IB || IB.setLookPrefs(BB)
    }

    function nc(BB) {
      var IB;
      let ZB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new URL(BB.url).origin,
        TB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      if (BB.readyState === WebSocket.CLOSING || BB.readyState === WebSocket.CLOSED) return console.warn(`${eo} a closing or closed socket can't be attached`), null;
      const JB = qG;
      if (!JB || JB.isStopped) return console.warn(`${eo} no core is running to attach a socket to`), BB.close(), null;
      if (null === (0, MB.j)()) return console.warn(`${eo} the game has not started to attach a socket to`), BB.close(), null;
      if (Iv > DI.z) return console.warn(`${eo} this core has attached all the sockets it can; reload to play on`), BB.close(), null;
      if (hv && !kv && (Vc(JB, !1, "all"), JB.isStopped || Ok)) return BB.close(), null;
      hc();
      const oB = Iv++;
      if (!wc(JB, "open", oB, TB ? DI.ac.Resume : 0)) return BB.close(), null;
      TB || sI.c.reset(), Xv = null === dv ? null : {
        join: dv,
        conn: oB,
        activated: !1
      }, BB.binaryType = "arraybuffer";
      const GB = new wZ.e((() => {
          ! function(BB, IB) {
            if (pG !== IB || BB.isStopped || null === gc(IB, So)) return;
            IB.detach(), pG = null, Nc(BB, IB, So, "", !0), IB.ws.close()
          }(JB, vB)
        })),
        vB = {
          ws: BB,
          conn: oB,
          pending: [],
          pendingBytes: 0,
          left: !1,
          resume: TB,
          token: null,
          detach: () => {
            GB.dispose(), BB.removeEventListener("message", kB), BB.removeEventListener("open", cB), BB.removeEventListener("close", nB)
          }
        },
        kB = BB => {
          if (BB.data instanceof ArrayBuffer) {
            var IB;
            const ZB = new Uint8Array(BB.data);
            GB.heard(), vB.token = null !== (IB = (0, OZ.d)(ZB)) && void 0 !== IB ? IB : vB.token,
              function(BB, IB, ZB) {
                dn(BB, (() => {
                  BB.rings.net.writeFrame(IB, ZB) || BB.crash(zZ.r, `a socket frame of ${ZB.byteLength} bytes did not fit the net-in ring`)
                }));
                const TB = BB.rings.net.cursor >= Vo;
                !wn() && (TB || BB.netWrittenSinceFrame >= Ko) && Vc(BB, !1, document.hidden ? "all" : "budget");
                Yn(BB)
              }(JB, oB, ZB)
          }
        },
        cB = () => {
          TB || (0, NB.n)("wasm_socket_open", performance.now());
          for (const IB of vB.pending.splice(0)) BB.send(IB);
          vB.pendingBytes = 0
        },
        nB = BB => {
          if (pG === vB && JB.rings.net.cursor > 0 && Vc(JB, !1, "all"), pG === vB) {
            if (vB.detach(), pG = null, Nc(JB, vB, BB.code, BB.reason) || Fc(JB, vB)) return;
            wc(JB, "close", oB), qc(oB, vB.left), Ic(oB, BB.code, BB.reason)
          }
        };
      return BB.addEventListener("message", kB), BB.addEventListener("open", cB), BB.addEventListener("close", nB), pG = vB, null === (IB = (0, MB.j)()) || void 0 === IB || IB.socketAttached(oB), (0, zB.l)({
        websocketUrl: ZB
      }), oB
    }

    function hc() {
      const BB = pG;
      if (!BB) return;
      const IB = qG,
        ZB = BB.resume;
      ZB && (zc(), pG !== BB) || (pG = null, BB.detach(), BB.ws.close(), null !== IB && (Fc(IB, BB) || ZB && Nc(IB, BB, BG)) || (null !== IB && wc(IB, "close", BB.conn), qc(BB.conn, BB.left)))
    }

    function zc() {
      const BB = qG;
      null !== BB && !BB.isStopped && !Ok && !kv && BB.rings.net.cursor > 0 && Vc(BB, !1, "all")
    }

    function Fc(BB, IB) {
      var ZB;
      if (!IB.resume) return !1;
      const TB = iv;
      return null !== TB && null !== IB.token && "" !== IB.token && (TB.pendingHold = {
        conn: IB.conn,
        token: `${TB.roomId}:${IB.token}`
      }), wc(BB, "close", IB.conn), null === (ZB = (0, MB.j)()) || void 0 === ZB || ZB.socketDetached(IB.conn), !0
    }

    function Nc(BB, IB, ZB) {
      let TB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "",
        JB = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
      const oB = gc(IB, ZB);
      if (null === oB) return !1;
      const {
        sv: GB,
        token: vB,
        game: kB,
        joinedAt: cB
      } = oB;
      if (!wc(BB, "close", IB.conn, DI.C.Held)) return !0;
      console.warn(`${eo} the game's connection ${JB?"went silent":`dropped with code ${ZB}`}, holding it`);
      const nB = {
        closeReason: TB,
        sinceJoinedMs: performance.now() - cB,
        game: kB
      };
      return (0, MZ.reportDisconnect)((0, uB.f)(ZB), CG, nB, JB ? "silent" : void 0), GB.heldConn = IB.conn, GB.dropCode = ZB, GB.pendingHold = {
        conn: IB.conn,
        token: `${GB.roomId}:${vB}`
      }, kv || Vc(BB, !1, "all"), !0
    }

    function gc(BB, IB) {
      const ZB = iv,
        JB = Yv,
        oB = BB.token;
      return null === ZB || null === JB || Ok || BB.left || JB.conn !== BB.conn || null === oB || "" === oB ? null : (0, TB.g)(IB) && ZB.resume.canHoldSeat() ? {
        sv: ZB,
        token: oB,
        game: JB.game,
        joinedAt: JB.joinedAt
      } : null
    }

    function qc(BB, IB) {
      var ZB;
      null === (ZB = (0, MB.j)()) || void 0 === ZB || ZB.closeGame(BB), (0, MJ.e)().close(BB), IB || (0, zB.l)({
        websocketUrl: null
      })
    }

    function yc() {
      const BB = Rv;
      if (null === BB) return;
      const IB = (0, MB.j)();
      Ok || null === IB || IB.VY(BB) ? Rv = null : performance.now() - zv.pause >= JG && (zv.pause = performance.now(), console.warn(`${eo} the cmd ring had no room for SetPaused(${BB}): written before the next frame`))
    }

    function Uc() {
      const BB = iv;
      iv = null, null === BB || void 0 === BB || BB.resume.dispose()
    }

    function Wc(BB, IB) {
      var ZB, TB;
      const {
        heldConn: JB
      } = BB, oB = BB.resume.resumingConn;
      BB.heldConn = 0, BB.pendingHold = null, iv === BB && (iv = null), "left" === IB ? BB.resume.leave() : BB.resume.dispose(), 0 === Pv || (null === (ZB = pG) || void 0 === ZB ? void 0 : ZB.conn) !== Pv || "left" === IB && (null === (TB = Uv) || void 0 === TB ? void 0 : TB.conn) === Pv || sc(Pv), "gaveUp" === IB && 0 !== oB && sc(oB), 0 !== JB && "refused" !== IB && (console.info(`${eo} the game held through its drop ${"left"===IB?"was left":"is given up"}`), null === qG || qG.isStopped || wc(qG, "close", JB), qc(JB, !1))
    }

    function dc(BB, IB) {
      const ZB = IB.indexOf(":");
      return {
        roomId: ZB < 0 ? BB.roomId : IB.slice(0, ZB),
        roomToken: IB.slice(ZB + 1)
      }
    }

    function Cc(BB) {
      (0, FZ.logClientMeasurement)("join_preload", BB, {
        client: "wasm"
      })
    }

    function Qc(BB) {
      var IB;
      pv = BB;
      const ZB = BB.replayOffer && jv !== BB.conn;
      Mv = ZB ? BB.conn : 0, av = ZB || Hv.has(BB.conn) ? 0 : BB.conn, QB.admitted(), BB.conn === Pv && (Pv = 0);
      const TB = iv;
      null !== TB && (null === (IB = Yv) || void 0 === IB ? void 0 : IB.conn) === BB.conn && TB.resume.onInitialInfo(BB)
    }

    function sc(BB) {
      var IB;
      const ZB = pG;
      (null === ZB || void 0 === ZB ? void 0 : ZB.conn) === BB && (ZB.left = !0, null === (IB = (0, MB.j)()) || void 0 === IB || IB.socketLeft(), (0, zB.l)({
        websocketUrl: null
      }), Ak(BB) ? setTimeout((() => {
        pG === ZB && hc()
      }), fB.f) : hc())
    }

    function wc(BB, IB, ZB) {
      let TB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        JB = !1;
      return dn(BB, (() => {
        const {
          net: oB
        } = BB.rings;
        JB = "open" === IB ? oB.writeOpen(ZB, TB) : oB.writeClose(ZB, TB), JB || BB.crash(zZ.r, `a socket ${IB} did not fit the net-in ring`)
      })), JB
    }

    function Oc(BB, IB, ZB) {
      let TB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      if (ac()) return (0, MZ.reportUnsupportedFallback)(BB, IB, ZB, TB), void Hc(`the wasm client can't run here (${ZB}; ${IB})`, IB);
      (0, MZ.showUnsupported)(BB, "unsupported", ZB, TB)
    }
    const Yc = 1500;

    function ic(BB, IB) {
      const ZB = 1 === BB.missing.length && BB.missing[0] === nZ.e,
        TB = IB ? "blockedAfterLoss" : ZB ? "noContext" : "unsupported";
      return {
        decline: TB,
        detail: `No WebGPU or WebGL2, and WebGL1 lacks ${BB.missing.join(", ")}`,
        details: {
          missing: BB.missing.join(",")
        },
        retries: "unsupported" !== TB && ac()
      }
    }

    function pc(BB) {
      console.warn(`${eo} ${BB}: reloading once more onto the wasm client`), (0, aJ.o)(), (0, MZ.flushCrashReports)(SB.e).then(SB.p, SB.p)
    }

    function ac() {
      return dk && "wasm" !== (0, CI.d)(window.location.search)
    }

    function Hc(BB, IB) {
      console.warn(`${eo} ${BB}: reloading on the JS client`), null !== IB && (0, CI.y)(IB), (0, CI.u)(null === IB ? "reloadOntoJs" : "decline");
      const ZB = () => {
        (0, SB.l)(CI.D)
      };
      (0, MZ.flushCrashReports)(SB.e).then(ZB, ZB)
    }

    function Mc(BB, IB, ZB, TB) {
      return Dv(BB, IB, ZB, TB)
    }

    function jc() {
      null === Sv || null === qG || qG.isStopped || Ok || null !== AG || null === kG || (AG = Sv(kG, rc, mc().follow))
    }

    function Pc() {
      var BB, IB, ZB;
      return null !== (BB = null === (IB = UG) || void 0 === IB || null === (ZB = IB.textures) || void 0 === ZB ? void 0 : ZB.files()) && void 0 !== BB ? BB : null
    }

    function Rc(BB) {
      mc().follow((IB => {
        null !== IB && Promise.all([Promise.all([ZB.e(204), ZB.e(46)]).then((() => ZB(51093))), (0, aJ.T)()]).then((BB => {
          let [{
            followPagePackFiles: ZB
          }, TB] = BB;
          const JB = null === TB || (0, nZ.o)(TB) ? "webgl" : TB.backend;
          ZB(IB, WJ.f, JB, (BB => {
            WJ.f.setPageFiles(BB)
          }), rc)
        }), (IB => {
          console.warn(`${eo} the texture pack's files didn't load: the previews draw the shipped ones until the next opens`, IB), BB()
        }))
      }))
    }

    function rc(BB, IB) {
      console.warn(`${eo} ${BB}`, IB)
    }

    function mc() {
      return yG ??= new eJ({
        load: BB => Promise.all([ZB.e(204), ZB.e(55)]).then((() => ZB(51100))).then((IB => {
          let {
            startPageTexturePackFeed: ZB
          } = IB;
          return ZB(rc, BB)
        })),
        store: fZ.i,
        JN: BB => {
          wG.then((() => {
            (0, MZ.reportTexturePackFeedLoadFailure)(BB, CG)
          }))
        }
      }), yG
    }
    const Xc = BB => mc().follow(BB);

    function Lc() {
      return mc().loaded()
    }
    const ec = function(BB, IB, ZB) {
        let TB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => performance.now(),
          JB = 0;
        return async function(oB, GB) {
          let vB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => !0;
          const kB = ++JB,
            cB = TB() + IB,
            nB = await
          function(BB, IB) {
            let ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {};
            return new Promise((TB => {
              const JB = setTimeout((() => {
                TB(null), BB.then((BB => {
                  null !== BB && (BB.joinedWithout(), ZB(BB))
                }))
              }), IB);
              BB.then((BB => {
                clearTimeout(JB), TB(BB)
              }))
            }))
          }(BB(oB), IB, (BB => {
            kB === JB && vB() && GB(BB, TB() + IB).catch((BB => {
              ZB("the texture pack step after the join failed", BB)
            }))
          }));
          return null === nB ? null : GB(nB, cB)
        }
      }((BB => (0, hI.i)(BB) ? mc().request() : mc().forJoin()), LJ.e, rc),
      uc = function(BB, IB) {
        let ZB = !1;
        return {
          setGamePackConfirm: BB => {
            ZB = null !== BB, IB(BB)
          },
          packStep: (IB, TB, JB) => BB(IB, TB, (() => ZB && JB()))
        }
      }(ec, (BB => {
        mc().setGamePackConfirm(BB)
      }));

    function fc(BB) {
      uc.setGamePackConfirm(BB)
    }

    function lc() {
      if (Ok || null !== Jk || null === Bk || null === Tk) return;
      const {
        backend: BB,
        canvas: IB,
        fallbackReason: ZB,
        adapterVendor: TB
      } = Tk, JB = Bk;
      Bk = null;
      try {
        Jk = JB({
          backend: BB,
          canvas: IB,
          fallbackReason: ZB,
          adapterVendor: TB,
          joinedGame: () => Ok ? null : Uv,
          canSend: () => !Ok && null !== Uv && Uv.conn === av,
          inGame: tc,
          shaderPackReach: () => {
            var BB, IB;
            return null !== (BB = null === (IB = DG) || void 0 === IB ? void 0 : IB.reachInJoinedGame()) && void 0 !== BB ? BB : null
          },
          Xg: () => tG,
          msaa: () => Zk > 1,
          writeCmd: (BB, IB, ZB) => null !== kG && kG(BB, IB, ZB),
          takeFailedMeshJobs: () => {
            var BB, IB;
            return null !== (BB = null === (IB = jG) || void 0 === IB ? void 0 : IB.takeFailedMeshJobs()) && void 0 !== BB ? BB : 0
          },
          readLoadCounts: BB => {
            var IB, ZB;
            return null !== (IB = null === (ZB = qG) || void 0 === ZB ? void 0 : ZB.readLoadCounts(BB)) && void 0 !== IB && IB
          },
          mainStalled: (BB, IB, ZB) => {
            (0, MZ.reportMainStall)(BB, IB, ZB, CG)
          }
        })
      } catch (oB) {
        console.error(`${eo} the frame telemetry didn't start`, oB)
      }
    }

    function Ac(BB, IB) {
      try {
        var ZB, TB, JB;
        const oB = bv && null !== (ZB = null === (TB = qG) || void 0 === TB || null === (JB = TB.lastHeader) || void 0 === JB ? void 0 : JB.renderPending) && void 0 !== ZB ? ZB : 0;
        (0, FT.i)(IB, BB, tc() && !(null !== PJ), oB)
      } catch (oB) {
        (0, FT.y)(), console.error(`${eo} the quality steps stopped`, oB)
      }
    }

    function tc() {
      return null !== Uv && qk === Uv && !Ok
    }

    function bc(BB) {
      const IB = Jk;
      Jk = null;
      try {
        null === IB || void 0 === IB || IB.stop()
      } catch {}
      console.error(`${eo} the frame telemetry threw: it stops`, BB)
    }

    function xc(BB) {
      var IB, ZB, TB, JB;
      if ((0, MJ.e)().fire(BB), "message" === BB.type) {
        if (cv++, BB.Xn === DI.Rc.ERROR && null !== dv) {
          var oB;
          const {
            text: IB,
            dropsCache: ZB
          } = (0, uB.l)((new TextDecoder).decode(BB.payload));
          fv ||= ZB, (null === (oB = Xv) || void 0 === oB ? void 0 : oB.conn) === BB.conn && (lv = IB)
        } else if (BB.Xn === KI.nc.ResumeComplete) {
          var GB;
          jv = BB.conn, BB.conn === Mv && (Mv = 0, av = Hv.has(BB.conn) ? 0 : BB.conn), null === (GB = iv) || void 0 === GB || GB.resume.onResumeComplete(BB.conn)
        }
        return
      }
      BB.phase === DI.G.Left ? nv = BB.conn : BB.phase === DI.G.Activated && (null === (IB = Xv) || void 0 === IB ? void 0 : IB.conn) === BB.conn ? Xv.activated = !0 : BB.phase === DI.G.Resumed ? function(BB) {
        var IB, ZB;
        Pv = BB;
        const TB = iv;
        if (null === TB || 0 === TB.heldConn || (null === (IB = pG) || void 0 === IB ? void 0 : IB.conn) !== BB || !pG.resume || null === Yv) return;
        console.info(`${eo} the game resumed on conn ${BB}, waiting for its InitialInfo`);
        const JB = TB.heldConn;
        TB.heldConn = 0, pG.resume = !1, Yv.conn = BB, (null === (ZB = wv) || void 0 === ZB ? void 0 : ZB.conn) === JB && (wv = {
          conn: BB,
          info: wv.info
        }), sI.c.apply({
          shopInfo: null,
          _shopVersion: zI.d
        })
      }(BB.conn) : BB.phase === DI.G.Held ? function(BB) {
        var IB;
        const ZB = iv,
          TB = null !== (IB = null === ZB || void 0 === ZB ? void 0 : ZB.pendingHold) && void 0 !== IB ? IB : null;
        if (null !== ZB && null !== TB && TB.conn === BB) return ZB.pendingHold = null, ZB.heldConn = BB, Pv = 0, console.warn(`${eo} the core holds the game, reconnecting`), void ZB.resume.onDropped(TB.token);
        if (BB === Pv) {
          Pv = 0;
          const IB = qG;
          null === IB || IB.isStopped || (console.info(`${eo} the core held again a resumed game the shell ended before its InitialInfo: closing it again`), wc(IB, "close", BB))
        }
      }(BB.conn) : BB.phase === DI.G.Closed && (null === (ZB = iv) || void 0 === ZB || null === (TB = ZB.pendingHold) || void 0 === TB ? void 0 : TB.conn) === BB.conn && (iv.heldConn === BB.conn ? function(BB) {
        const IB = BB.heldConn,
          ZB = BB.dropCode;
        Wc(BB, "refused"), console.info(`${eo} the core didn't hold the game through its drop: it hadn't started`), queueMicrotask((() => {
          qc(IB, !1), Ic(IB, ZB, "", !0)
        }))
      }(iv) : iv.pendingHold = null), BB.phase !== DI.G.Held && BB.phase !== DI.G.Left && BB.phase !== DI.G.Closed || (Hv.add(BB.conn), BB.conn === av && (av = 0));
      const vB = Object.keys(DI.G).find((IB => DI.G[IB] === BB.phase)),
        kB = 0 === BB.code ? "" : ` (code ${BB.code})`;
      console.info(`${eo} conn ${BB.conn}: ${null!==vB&&void 0!==vB?vB:BB.phase}${kB}, ${cv} raw messages so far`), (null === (JB = Uv) || void 0 === JB ? void 0 : JB.conn) !== BB.conn || BB.phase !== DI.G.Left && BB.phase !== DI.G.Closed || lk(null), sv !== BB.conn || BB.phase !== DI.G.Left && BB.phase !== DI.G.Closed || (sv = null, null === Uv && null === dv && dJ.b.setGame(void 0));
      for (const nB of [...tv]) try {
        nB(BB.conn, BB.phase, BB.code)
      } catch (cB) {
        (0, VI.r)(cB, `${eo} a connection listener threw`)
      }
    }

    function Ec() {
      (0, aJ.o)(), null === Uv && null === dv || (0, lZ.e)(), queueMicrotask((() => {
        try {
          hn()
        } catch (BB) {
          console.warn(`${eo} stopping before the reload threw`, BB)
        }(0, MZ.flushCrashReports)(SB.e).then(SB.p, SB.p)
      }))
    }

    function Dc() {
      const BB = qG;
      null === BB || BB.isStopped || null === pG || kv || !BB.hasPendingCommands() || Vc(BB, !1, "budget")
    }

    function Kc(BB) {
      var IB;
      const ZB = Uv;
      BB.persisted || null === ZB || (null === (IB = pG) || void 0 === IB ? void 0 : IB.conn) !== ZB.conn || pG.left || ZB.leave()
    }

    function Vc(BB, IB, TB) {
      let JB = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const oB = kv;
      kv = !0;
      try {
        const oB = BB.rings.net.cursor >= Vo;
        oB && "all" !== TB && !document.hidden && Fn("backlog", `a shown tab's net-in is ${BB.rings.net.cursor} bytes behind: one frame reads it all`);
        return function(BB, IB, TB, JB) {
          var oB, GB, vB, kB;
          if (Ok) return !1;
          if (dn(BB, Bn), Ok || BB.isStopped) return !1;
          kn() && SG("modelsIn");
          yc(), Zv = performance.now(), nv = null, hv = !1, (0, HB.I)(), null === (oB = LG) || void 0 === oB || oB.beforeFrame(), iT(Zv, BB), (0, HB.B)(Zv, In), vv = !0;
          const cB = IB && vn();
          let nB;
          try {
            nB = BB.frame(Zv, cB, TB)
          } finally {
            vv = !1
          }
          if (!nB) return !1;
          Ik.observe(null !== (GB = null === (vB = BB.lastHeader) || void 0 === vB ? void 0 : vB.chunksCancelled) && void 0 !== GB ? GB : 0);
          const hB = BB.lastFrameKind,
            zB = (0, rI.e)(hB);
          (function(BB) {
            null !== Zo && Zo.afterFrame(performance.now(), BB)
          })(zB), null === (kB = Gk) || void 0 === kB || kB.frame(BB, Zv, hB), IB && (yk = zB);
          zB && (0, jI.e)(Zv);
          if (null !== Jk) try {
            Jk.frameRan(BB, Zv, performance.now(), hB)
          } catch (gB) {
            bc(gB)
          }
          "drawn" === hB && Gn() && function() {
            for (const BB of [...iJ]) BB()
          }();
          BB.forEachNetOut(cn);
          const FB = pG;
          null !== nv && (null === FB || void 0 === FB ? void 0 : FB.conn) === nv && nn(FB, fB.l);
          Jn(BB),
            function(BB) {
              const IB = 0 !== (BB.headerWord(KI.J.LoadSteps) & KI.V.JoinPreload);
              IB !== Qv && (Qv = IB, (0, MZ.setCrashAdPreload)(IB), (0, XZ.D)())
            }(BB), IB && function(BB) {
              var IB, TB, JB;
              if (null === Uv || !vn()) return;
              const oB = BB.headerWord(KI.J.LoadSteps);
              null === gk || qk === Uv && !gk.frame(Zv, 0 !== (oB & KI.W.TerrainDrawn)) || (gk = null);
              if (0 === (oB & KI.V.PlayerBound)) return;
              const GB = BB.lastHeader,
                vB = !bv || 0 === (null === GB || void 0 === GB ? void 0 : GB.renderPending);
              !nk && vB && (nk = !0, performance.mark(Do));
              if (qk === Uv) return;
              const kB = null !== (IB = null === GB || void 0 === GB ? void 0 : GB.firstView) && void 0 !== IB ? IB : DI.Y.NotYet;
              if (bv && kB === DI.Y.NotYet) return;
              if (ck && (!0 !== (null === (TB = (0, MB.j)()) || void 0 === TB ? void 0 : TB.isSessionLive) || !vB)) return;
              qk = Uv;
              const cB = Uv;
              if (setTimeout((() => {
                  Uv === cB && (0, NB.g)()
                }), 0), null === (JB = DG) || void 0 === JB || JB.playable(), function() {
                  clearTimeout(iG), iG = setTimeout((() => {
                    tc() && sn((BB => {
                      let {
                        prefetchWorldgenWorker: IB
                      } = BB;
                      IB()
                    }))
                  }), vG)
                }(), ck) return;
              ck = !0, performance.mark(Eo), (0, EJ.t)("render") && Promise.all([ZB.e(78), ZB.e(49)]).then((() => ZB(4862))).then((BB => {
                let {
                  renderDebugPlayable: IB
                } = BB;
                IB()
              }), (BB => {
                console.warn("The render debug topic didn't load", BB)
              }));
              const nB = Math.round(performance.now()),
                hB = BB.readViewQueuedPrograms();
              null !== hB && (0, NB.n)("wasm_view_links", nB, (0, NI.rb)(hB));
              const zB = null === Nk || null === zk ? 0 : Math.max(0, zk - Nk),
                FB = null === Nk ? 0 : Math.max(0, nB - Nk),
                gB = bv ? BB.readFirstViewWait(zB, FB) : null;
              null !== gB && (0, NB.l)(gB);
              if (bv && kB !== DI.Y.Drawn) {
                const IB = kB === DI.Y.HeldBackstop ? "held_draws" : "long",
                  {
                    cause: ZB
                  } = Zn(BB);
                if (console.warn(`${eo} playable at ${nB} ms on the first view's ${IB} backstop, ${ZB}: it wasn't drawn whole in time`), (0, NB.n)("wasm_view_backstop", nB, `${IB}:${ZB}`), "long" === IB) {
                  var qB, yB;
                  const IB = null !== (qB = null === (yB = Yv) || void 0 === yB ? void 0 : yB.game) && void 0 !== qB ? qB : "";
                  gk = new AZ.d((() => {
                    const {
                      cause: ZB,
                      census: TB
                    } = Zn(BB);
                    (0, MZ.reportFirstViewNoTerrain)(IB, ZB, TB, CG), (0, dI.z)("noTerrain")
                  }))
                }
              } else console.info(`${eo} playable at ${nB} ms${bv?"":" (no renderer)"}`);
              setTimeout(Vv, 0), (0, OI.g)().catch((BB => {
                console.error(`${eo} item sprites didn't load, so item particles show the missing texture`, BB)
              })), hJ.c.warm()
            }(BB);
          (0, zZ.O)(BB, {
            worldgen: HG,
            mesh: jG
          }),
          function(BB) {
            BB.forEachEvent(aT);
            for (const IB of pT) try {
              (0, QT.b)(IB)
            } catch (gB) {
              if ((0, VI.k)(gB)) {
                BB.crashOn(zZ.k, gB);
                break
              }
              console.error(`${wT} an input action listener threw`, gB)
            }
            pT.length = 0
          }(BB), JB && (0, RI.c)();
          return !BB.isStopped
        }(BB, IB, "all" === TB || oB, JB)
      } finally {
        kv = oB, oB || (Tv = performance.now())
      }
    }

    function Sc(BB) {
      console.error(`${eo} a frame-start listener threw`, BB)
    }

    function Bn() {
      var BB, IB, ZB, TB;
      null === (BB = uG) || void 0 === BB || BB.drain(kG, cG), null === (IB = bG) || void 0 === IB || IB.drain(kG), null === (ZB = xG) || void 0 === ZB || ZB.drain(performance.now()), Kv(kG), null === (TB = AG) || void 0 === TB || TB.drain()
    }

    function In(BB) {
      console.error(`${eo} a before-frame listener threw`, BB)
    }

    function Zn(BB) {
      const IB = (0, MB.j)(),
        ZB = (0, MB.q)(),
        TB = null === IB || null === ZB ? null : ZB.readDrawCensus(IB.api);
      return {
        cause: (0, AZ.i)(BB.headerWord(KI.J.LoadSteps), TB),
        census: TB
      }
    }
    const Tn = {
      ChunkRequested: "wasm_chunk_requested",
      ChunkStored: "wasm_chunk_stored",
      MeshLanded: "wasm_mesh_landed",
      PlayerChunk: "wasm_player_chunk",
      TerrainDrawn: "wasm_terrain_drawn"
    };

    function Jn(BB) {
      var IB;
      if (ck) return;
      if (null === zk && vn() && (zk = performance.now()), null === Uv || 0 === (BB.headerWord(KI.J.LoadSteps) & KI.V.PlayerBound) ? Nk = null : Nk ??= performance.now(), null === dv && null === Uv) return;
      null === zk || Fk || (Fk = !0, (0, NB.n)("wasm_startup_loaded", zk));
      let ZB = 0;
      null !== Uv ? ZB = -1 : !0 === (null === (IB = Xv) || void 0 === IB ? void 0 : IB.activated) && (ZB = ~KI.W.TerrainDrawn);
      const TB = BB.headerWord(KI.J.LoadSteps) & ZB & ~hk;
      if (0 === TB) return;
      hk |= TB;
      const JB = performance.now();
      for (const [oB, GB] of Object.entries(Tn)) 0 !== (TB & KI.W[oB]) && (0, NB.n)(GB, JB)
    }

    function Gn() {
      return bv && vn()
    }

    function vn() {
      return EG && kn()
    }

    function kn() {
      return null === uG || uG.startupDone
    }

    function cn(BB, IB) {
      const ZB = pG;
      (null === ZB || void 0 === ZB ? void 0 : ZB.conn) === BB ? nn(ZB, IB) : Nv++
    }

    function nn(BB, IB) {
      const {
        ws: ZB
      } = BB;
      return ZB.readyState === WebSocket.OPEN ? (ZB.send(IB), !0) : ZB.readyState === WebSocket.CONNECTING && BB.pendingBytes + IB.byteLength <= TG ? (BB.pending.push(IB.slice()), BB.pendingBytes += IB.byteLength, !0) : (Nv++, !1)
    }

    function hn() {
      var BB, IB, ZB, TB, JB, oB, GB, vB, kB, cB, nB, hB, zB, FB, NB, gB, qB;
      Ok = !0, Uk.stop(), (0, KJ.endLookDebugTake)(), Zo = null, Uc(), (0, HB.H)().unlockPointer(), (0, HB.E)(null), null === (BB = eG) || void 0 === BB || BB(), eG = null, null === (IB = (0, MB.q)()) || void 0 === IB || IB.followCursorAim(null), (0, RI.D)(), (0, MB.f)(), dG.stop(), null === (ZB = vk) || void 0 === ZB || ZB(), vk = null, null === (TB = kk) || void 0 === TB || TB(), kk = null, null === (JB = Jk) || void 0 === JB || JB.stop(), Jk = null, (0, bZ.t)(null), null === (oB = aG) || void 0 === oB || oB(), aG = null, null === (GB = HG) || void 0 === GB || GB.stop(), HG = null, null === (vB = jG) || void 0 === vB || vB.stop(), jG = null, null !== (kB = UG) && void 0 !== kB && null !== (cB = kB.textures) && void 0 !== cB && cB.assets && (0, yJ.j)(null), null === (nB = UG) || void 0 === nB || nB.stop(), UG = null, WG = null;
      const yB = PG;
      PG = null, yB && (yB.stop(), Wn(yB)), null === (hB = bG) || void 0 === hB || hB.dispose(), bG = null, null === (zB = xG) || void 0 === zB || zB.dispose(), xG = null, uG = null, null === (FB = lG) || void 0 === FB || FB(), lG = null, null === (NB = XG) || void 0 === NB || NB(), XG = null, null !== Gv && (clearTimeout(Gv), Gv = null), null === (gB = LG) || void 0 === gB || gB.stop(), LG = null, ek(), dJ.b.release(), hc();
      const UB = AG;
      AG = null;
      try {
        null === UB || void 0 === UB || UB.dispose()
      } catch (WB) {
        console.warn(`${eo} the sky's images didn't release`, WB)
      }(0, zJ.g)(null), null === (qB = NG) || void 0 === qB || qB.pagePreviews().endSession(null === (0, gI.m)())
    }

    function zn(BB, IB) {
      var ZB, TB;
      const JB = null !== (ZB = null === (TB = PG) || void 0 === TB ? void 0 : TB.details()) && void 0 !== ZB ? ZB : {},
        oB = BB.site === fo || BB.site === Ao || BB.site === MZ.RENDER_RELOAD_SITE || BB.site === to ? BB.error instanceof WebAssembly.RuntimeError || BB.error instanceof GZ.b : !(0, nZ.p)(BB.error) && (0, zZ.J)(BB);
      oB && BB.error instanceof Error && (0, gI.O)(BB.error);
      const GB = oB || BB.site === zZ.s ? (0, MZ.readTrap)(BB.error) : null,
        vB = null !== GB && (0, BZ.h)(GB.kind, GB.refusedBytes) ? GB.refusedBytes : 0,
        kB = (0, iZ.o)(),
        cB = null === RG ? (0, kJ.o)(function() {
          try {
            return (0, gI.r)().buffer.byteLength
          } catch {
            return 0
          }
        }(), vB, kB) : RG.ceilingMayRefuse(vB, kB),
        nB = vB > 0 && !cB && ac();
      var hB;
      if (nB && ((0, CI.y)("oom"), (0, CI.u)("decline"), wk = !0), hn(), (0, aJ.e)()) return console.warn(`${eo} the session stopped at ${BB.site} as the page reloads`, BB.error), void((0, nZ.p)(BB.error) || (null === (hB = BB.header) || void 0 === hB ? void 0 : hB.lastError) === DI.K.CoreBusy || (0, MZ.reportStoppedCore)(BB, IB, GB, {
        memoryDetails: JB,
        declined: nB
      }));
      (0, MZ.showCrash)(BB, IB, GB, {
        memoryDetails: JB,
        declined: nB
      })
    }

    function Fn(BB, IB) {
      const ZB = performance.now();
      return !(ZB - zv[BB] < JG) && (zv[BB] = ZB, console.warn(`${eo} ${IB}`), !0)
    }

    function Nn(BB) {
      const {
        input: IB,
        net: ZB,
        worker: TB
      } = BB.rings, JB = BB.optionsDropped, oB = IB.dropped + JB + ZB.dropped + TB.dropped + Nv;
      oB !== Fv && Fn("dropped", `${oB} records dropped so far (input ${IB.dropped}, options ${JB}, net ${ZB.dropped}, worker ${TB.dropped}, net-out ${Nv})`) && (Fv = oB)
    }

    function gn() {
      var BB, IB;
      const ZB = (0, mZ.d)();
      if (null === ZB) return null;
      const TB = (0, uZ.s)(ZB);
      return {
        ...TB,
        horizontal: Math.min(TB.horizontal, null !== (BB = null === (IB = PG) || void 0 === IB ? void 0 : IB.shedDistanceInUse()) && void 0 !== BB ? BB : 1 / 0)
      }
    }

    function qn(BB) {
      var IB, ZB;
      return {
        samples: bv ? Zk : null,
        sunShadows: BB,
        renderDistance: null !== (IB = null === (ZB = gn()) || void 0 === ZB ? void 0 : ZB.horizontal) && void 0 !== IB ? IB : null
      }
    }

    function yn(BB) {
      Cv = BB, (0, XZ.D)()
    }

    function Un() {
      var BB, IB, ZB;
      const TB = gn();
      return {
        ...null === (BB = PG) || void 0 === BB ? void 0 : BB.pageKillSnapshot(),
        renderDistance: null !== (IB = null === TB || void 0 === TB ? void 0 : TB.horizontal) && void 0 !== IB ? IB : null,
        renderDistanceVertical: null !== (ZB = null === TB || void 0 === TB ? void 0 : TB.vertical) && void 0 !== ZB ? ZB : null,
        chunkCap: rG,
        budgetBasis: mG,
        renderBackend: (0, aJ.I)(),
        adPreload: Qv,
        ...(0, LZ.c)(Cv)
      }
    }

    function Wn(BB) {
      var IB;
      console.info(`${eo} wasm memory at the session's end`, BB.details());
      const {
        wasmMainMiB: ZB,
        wasmWorkersMiB: TB,
        peakStoredChunks: JB
      } = BB.pageKillSnapshot(), oB = navigator.deviceMemory;
      (0, FZ.logClientMeasurement)("wasm_memory_end", {
        wasmMainMiB: ZB,
        wasmWorkersMiB: TB,
        peakStoredChunks: JB
      }, {
        client: "wasm",
        renderBackend: null !== (IB = (0, aJ.I)()) && void 0 !== IB ? IB : "none",
        os: (0, eZ.getOperatingSystem)(),
        deviceMemory: String(null !== oB && void 0 !== oB ? oB : "unreported")
      })
    }

    function dn(BB, IB) {
      if (!BB.isStopped) try {
        IB()
      } catch (ZB) {
        BB.crash(zZ.w, ZB)
      }
    }

    function Cn() {
      return MG ??= ZB.e(72).then((() => ZB(51106))).catch((BB => {
        throw MG = null, BB
      })), MG
    }
    async function Qn() {
      const {
        createWorldgenWorker: BB,
        worldgenWorkerReady: IB
      } = await Cn();
      return await IB(), BB
    }

    function sn(BB) {
      var IB;
      null === (IB = MG) || void 0 === IB || IB.then(BB, (() => {}))
    }

    function wn() {
      return performance.now() - Math.max(Tv, Jv) >= oG
    }

    function On(BB) {
      const IB = document.hidden || ov ? "all" : "budget";
      ov = !0;
      const ZB = Vc(BB, !1, IB);
      var TB;
      ZB && (Nn(BB), null === (TB = PG) || void 0 === TB || TB.afterFrame());
      return ZB
    }

    function Yn(BB) {
      BB.isStopped || 0 === BB.rings.net.cursor || wn() && !On(BB) || BB.rings.net.cursor > 0 && performance.now() - Jv >= oG / 2 && function(BB) {
        Gv ??= setTimeout((() => {
          Gv = null, Yn(BB)
        }), oG)
      }(BB)
    }

    function pn(BB, IB) {
      return async function(BB, IB, ZB) {
        let {
          stop: TB,
          stillWanted: JB,
          beforeReload: oB
        } = ZB;
        const GB = await (0, tT.j)(BB, {
          stillWanted: JB,
          beforeReload: async () => {
            TB(), await Promise.all([(0, MZ.flushCrashReports)(SB.e), null === oB || void 0 === oB ? void 0 : oB()])
          },
          reload: SB.p
        });
        return GB || IB(), GB
      }(BB, IB, {
        ...arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        stop: hn
      })
    }
    let an = !1;

    function Hn() {
      return an = !0, async function(BB, IB, TB) {
        const {
          gamePackSource: JB
        } = await ZB.e(276).then((() => ZB(41082)));
        await uc.packStep(BB, ((ZB, TB) => ZB.packForGame(BB, JB(IB), TB)), TB)
      }(...arguments)
    }

    function Mn(BB) {
      ! function(BB, IB) {
        BB((BB => {
          null === BB || void 0 === BB || BB.subscribe((BB => {
            let {
              pack: ZB,
              gameSource: TB
            } = BB;
            IB(null === TB || null === ZB ? null : {
              pack: ZB,
              source: "" === TB ? null : TB
            })
          }))
        }))
      }(Xc, BB)
    }
    let jn = !1,
      Pn = null,
      Rn = !1,
      rn = !1;

    function mn() {
      var BB;
      jn || (jn = !0, Mk("play", KB), (0, zB.j)(new Kn), vB.gameBridge.attach(eB), An().catch((() => {})), (0, MB.t)((BB => {
        cI(BB.setTextHost)
      })), BB = en, uv.add(BB), function(BB) {
        for (const IB of KG) BB(IB);
        VG.add(BB)
      }((BB => {
        Ln(Xn[BB])
      })))
    }
    const Xn = {
      booted: oB.l.INITIALISE_NOA,
      texturesIn: oB.l.REGISTRATION,
      modelsIn: oB.l.SETUP_LIFEFORMS
    };

    function Ln(BB) {
      kB.l.Gq("matchmakeAndPlayStepCompleted", {
        step: BB,
        totalSubSteps: 1
      })
    }

    function en(BB) {
      if (!Rn) return;
      const {
        gameNameWithVariation: IB,
        lobbyName: ZB
      } = (0, zB.c)();
      if (BB.code === TB.c.serverUpdating.code) return (new Kn).leaveLive(), void fn(IB, ZB);
      kB.l.Gq("unwantedLeftGame", {
        reason: un(BB),
        requiresRefresh: BB.requiresRefresh,
        canReconnect: null !== BB.reconnect,
        automaticallyReconnect: BB.reconnecting,
        canPlayAgain: BB.canPlayAgain,
        gameNameWithVariation: IB,
        lobbyName: ZB
      }), (new Kn).leaveLive()
    }

    function un(BB) {
      return null !== BB.reasonKey ? {
        translationKey: BB.reasonKey
      } : "gameOrPluginKick" === BB.name ? BB.reason : `You have disconnected from the server.\n${BB.reason}`
    }

    function fn(BB, IB) {
      var TB;
      TB = (0, cB.A)(BB, IB), Promise.resolve().then((() => ZB(1579))).then((BB => {
        let {
          navigatePreserveSearch: IB
        } = BB;
        IB(TB)
      })).catch((BB => {
        console.warn("[bloxd-wasm-client] the page's router didn't navigate: loading the page instead", BB), (0, SB.h)(TB)
      }))
    }

    function An() {
      return Pn ??= Promise.all([ZB.e(73), ZB.e(76), ZB.e(75), ZB.e(74), ZB.e(90), ZB.e(87), ZB.e(273), ZB.e(191), ZB.e(228), ZB.e(252), ZB.e(275), ZB.e(47)]).then((() => ZB(41032))).then((BB => {
        try {
          BB.attachPlayGameSources()
        } catch (IB) {
          throw console.error("[bloxd-wasm-client] the play sources did not attach", IB),
            function(BB) {
              wG.then((IB => {
                null === IB || IB.isStopped || Ok ? console.warn(`${eo} the play sources threw as they attached, after the client stopped`, BB) : zn({
                  site: to,
                  error: BB,
                  header: null
                }, CG)
              }))
            }(IB), IB
        }
      }), (BB => {
        throw Pn = null, new MB.d(BB)
      })), Pn
    }
    async function tn(BB, IB) {
      mn(), an = !0, Rn = !0;
      let ZB = {
          place: BB.place,
          matchedAt: BB.matchedAt
        },
        GB = BB.place.gameNameWithVariation;
      const vB = (0, hB.g)();
      let kB = null;
      const cB = await rk({
        matchmake: async () => {
          let IB = ZB;
          if (ZB = null, null === IB) {
            const ZB = await BB.rematch();
            if (ZB.isError()) throw kB = ZB.asError().forward(), new Error(ZB.asError().message);
            IB = {
              place: ZB.getValue(),
              matchedAt: performance.now()
            }
          }
          GB = IB.place.gameNameWithVariation;
          return {
            target: await (0, AB.e)(BB.userContext, IB.place, Lc(), vB),
            matchedAt: IB.matchedAt,
            freshMs: AB.c
          }
        },
        pageReady: An,
        onFailure: (BB, IB) => {
          null === kB && function(BB, IB) {
            (0, MZ.reportPageJoinFailure)(BB, CG, IB)
          }(BB, {
            sinceJoinStartMs: IB,
            game: GB
          })
        },
        rejoin: () => () => {},
        invalidateTrafficCode: () => BB.userContext.invalidateTrafficCode(),
        signal: IB
      });
      switch (cB.kind) {
        case "joined":
          if (vB) {
            setTimeout((() => {
              QB.ready()
            }), 0);
            const {
              game: BB
            } = cB;
            (0, hB.o)((() => {
              BB.endJoinAd() && ((0, NB.i)(), QB.adEnded())
            }))
          }
          return rn || (rn = !0, (0, wB.e)()), Rn ? (Ln(oB.l.CONNECT_TO_GAME_SERVER), Ln(oB.l.SHADER_PACK), function() {
            var BB, IB;
            return null !== (BB = null === (IB = DG) || void 0 === IB ? void 0 : IB.runsInJoinedGame()) && void 0 !== BB && BB
          }() && (0, sB.g)(BB.userContext, GB).catch((BB => {
            console.error("Failed to report the shader pack session", BB)
          })), function() {
            const BB = function() {
              var BB, IB;
              return null !== (BB = null === (IB = DG) || void 0 === IB ? void 0 : IB.couldntRunInJoinedGame()) && void 0 !== BB ? BB : null
            }();
            null !== BB && (0, sB.e)(BB)
          }(), JB.b.value(void 0)) : Dn("The server ended the game as it joined");
        case "failed":
          if (!cB.reloading) {
            if (null !== kB) return kB;
            if ((cB.error instanceof fB.n || cB.error instanceof fB.c) && cB.error.code === TB.c.serverUpdating.code) {
              if (IB.aborted) return Dn("Left the game while it loaded");
              const {
                gameNameWithVariation: BB,
                lobbyName: ZB
              } = (0, zB.c)();
              return fn(BB, ZB), Dn("The server is updating")
            }
            return cB.error instanceof VB.d ? JB.b.errorWithCode(cB.error.messageKey, oB.l.SHADER_PACK, {
              severity: "medium"
            }) : JB.b.errorWithCode(function(BB) {
              if (BB instanceof fB.z || BB instanceof pB.f) return BB.message;
              if (bn(BB)) return (0, uB.j)(BB.code, BB.serverText);
              return uB.e
            }(cB.error), oB.l.CONNECT_TO_GAME_SERVER, {
              error: xn(cB.error) ? cB.error : void 0,
              severity: En(cB.error),
              gameServerUnreachable: (0, lB.b)(cB.error),
              joinFailure: (0, lB.g)(cB.error),
              rematch: (0, YB.e)(cB.error),
              gameRefused: (0, iB.e)(cB.error)
            })
          }
          return Dn("Reloading into the new build");
        case "stopped":
          return Dn("The game client stopped, and shows why");
        case "fZ":
          return Dn("Left the game while it loaded")
      }
    }

    function bn(BB) {
      return BB instanceof fB.n || BB instanceof fB.c && "attach" !== BB.stage
    }

    function xn(BB) {
      return !(BB instanceof fB.z) && !bn(BB) && void 0 === (0, lB.b)(BB)
    }

    function En(BB) {
      return bn(BB) ? BB instanceof fB.c && (0, uB.f)(BB.code).requiresRefresh ? "medium" : "low" : xn(BB) || BB instanceof fB.z ? "medium" : "low"
    }

    function Dn(BB) {
      return JB.b.errorWithCode(BB, oB.l.CONNECT_TO_GAME_SERVER, {
        severity: "low",
        fZ: !0
      })
    }
    class Kn {
      leave(BB) {
        if ((0, aB.d)()) {
          var IB, ZB;
          if ((0, GB.d)()) return;
          (0, FB.b)(!0 === (null === (IB = (0, aB.k)()) || void 0 === IB || null === (ZB = IB.currentViewer) || void 0 === ZB ? void 0 : ZB.unsavedChanges), BB)
        } else this.leaveLive()
      }
      leaveLive() {
        var BB;
        an && (null === (BB = Lc()) || void 0 === BB || BB.endGamePack());
        if (!Rn) return;
        Rn = !1, (0, OB.f)();
        try {
          var IB;
          null === (IB = (0, MB.q)()) || void 0 === IB || IB.clearWasmCameraScreen()
        } catch (TB) {
          console.error("[bloxd-wasm-client] the camera screen didn't clear", TB)
        }
        const {
          gameNameWithVariation: ZB
        } = (0, zB.c)();
        try {
          bk()
        } finally {
          (0, zB.l)({
            websocketUrl: null
          }), kB.l.Gq("leaveGame", {
            gameNameWithVariation: ZB
          }), (0, nB.M)()
        }
      }
      isReplay() {
        return (0, aB.d)()
      }
    }
  },
  40962: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => JB,
      h: () => TB,
      i: () => vB,
      l: () => GB
    });
    const TB = 12e4,
      JB = 3e4,
      oB = {
        hidden: () => "undefined" !== typeof document && document.hidden,
        listen: BB => "undefined" === typeof document ? () => {} : (document.addEventListener("visibilitychange", BB), () => {
          document.removeEventListener("visibilitychange", BB)
        })
      };

    function GB(BB) {
      return `it sent no start within ${Math.round(BB)} ms`
    }
    class vB {
      constructor(BB, IB) {
        let ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => performance.now(),
          TB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : oB;
        this.timeoutMs = BB, this.onTimeout = IB, this.now = ZB, this.visibility = TB, this.timer = null, this.counted = 0, this.step = null, this.unlisten = void 0, this.unlisten = TB.listen((() => {
          this.onVisibility()
        })), TB.hidden() || this.next()
      }
      cancel() {
        this.pause(), this.unlisten()
      }
      onVisibility() {
        this.visibility.hidden() ? (this.counted += this.credit(), this.pause()) : null === this.timer && this.next()
      }
      credit() {
        const BB = this.step;
        return null === BB ? 0 : Math.min(this.now() - BB.at, BB.ms)
      }
      pause() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null), this.step = null
      }
      next() {
        const BB = this.timeoutMs - this.counted;
        if (BB <= 0) return void this.arm(1e3, (() => {
          this.cancel(), this.onTimeout(this.counted)
        }));
        const IB = Math.min(BB, 5e3);
        this.step = {
          at: this.now(),
          ms: IB
        }, this.arm(IB, (() => {
          this.counted += this.credit(), this.step = null, this.next()
        }))
      }
      arm(BB, IB) {
        this.timer = setTimeout((() => {
          this.timer = null, IB()
        }), BB)
      }
    }
  },
  39707: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => vB
    });
    var TB = ZB(360),
      JB = ZB(1058);
    const oB = new Set(["bingo", "buildAFactory2", "classic", "testGym"]),
      GB = new Set(["creativeFlat", "skyGrid"]);

    function vB(BB) {
      const IB = (0, TB.Vb)(BB);
      return "classic" !== IB ? oB.has(IB) : !(0, JB.i)(BB) && !GB.has((0, TB.Pb)(BB))
    }
  },
  37803: (BB, IB, ZB) => {
    function TB(BB) {
      return "string" !== typeof BB || 2 !== BB.length && ":" !== BB[2] ? null : BB[0] + BB[1]
    }
    ZB.d(IB, {
      e: () => qB,
      g: () => QB,
      k: () => CB,
      n: () => sB,
      o: () => vB,
      q: () => GB,
      r: () => oB,
      u: () => kB,
      v: () => yB,
      x: () => gB
    });
    const JB = ["op:ytInitialPlayerResponse.adPlacements", "op:ytInitialPlayerResponse.playerAds", "op:ytInitialPlayerResponse.adSlots", "op:playerResponse.adPlacements", "op:playerResponse.playerAds", "op:playerResponse.adSlots"];

    function oB(BB) {
      if (function(BB) {
          for (let IB = 0; IB < JB.length; IB++)
            if (BB === JB[IB]) return !0;
          return !1
        }(BB)) return !1;
      const IB = TB(BB);
      return "op" === IB || "ep" === IB || "wi" === IB || "pp" === IB || "fp:call" === BB || "fp:t" === BB
    }

    function GB(BB) {
      return "fp" === TB(BB) && !oB(BB)
    }

    function vB(BB) {
      if ("string" !== typeof BB) return !1;
      return "o" === BB[0] && "p" === BB[1] && (2 === BB.length || ":" === BB[2]) || "fp:call" === BB || "2" === BB || "t" === BB || "a" === BB
    }

    function kB(BB, IB) {
      return `~${function(BB){return BB.length<2?BB:":"===BB[1]?BB[0]:BB[0]+BB[1]}(IB)}~${BB}`
    }
    const cB = 200;

    function nB(BB) {
      let IB = BB.length - 1;
      for (let ZB = 0; ZB < 2; ZB++) {
        const ZB = IB;
        for (; IB >= 0 && BB[IB] >= "0" && BB[IB] <= "9";) IB--;
        if (IB < 0 || IB === ZB || ":" !== BB[IB]) return -1;
        IB--
      }
      return IB + 1
    }

    function hB(BB) {
      return "unknown" === BB || nB(BB) >= 0
    }

    function zB(BB, IB) {
      return BB[IB] >= "\ud800" && BB[IB] <= "\udbff" && IB + 1 < BB.length && BB[IB + 1] >= "\udc00" && BB[IB + 1] <= "\udfff" ? 2 : 1
    }

    function FB(BB, IB, ZB) {
      return 2 === ZB ? 4 : BB[IB] <= "\x7f" ? 1 : BB[IB] <= "\u07ff" ? 2 : 3
    }

    function NB(BB, IB, ZB) {
      let TB = 0;
      for (; TB < IB;) {
        const IB = zB(BB, TB),
          JB = FB(BB, TB, IB);
        if (JB > ZB) break;
        ZB -= JB, TB += IB
      }
      return TB
    }

    function gB(BB) {
      let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1 / 0;
      if ("string" !== typeof BB || BB.length > cB || !hB(BB)) return "t";
      let ZB = 2;
      for (let vB = 0; vB < BB.length;) {
        const IB = zB(BB, vB);
        ZB += FB(BB, vB, IB), vB += IB
      }
      if (ZB <= IB) return `t ${BB}`;
      const TB = nB(BB),
        JB = IB - 2 - (BB.length - TB);
      if (JB < 0) return "t";
      const oB = NB(BB, TB, JB);
      let GB = "t ";
      for (let vB = 0; vB < oB; vB++) GB += BB[vB];
      for (let vB = TB; vB < BB.length; vB++) GB += BB[vB];
      return GB
    }
    const qB = 62;

    function yB(BB) {
      let IB = "so:";
      const ZB = NB(BB, BB.length, qB - IB.length);
      for (let TB = 0; TB < ZB; TB++) IB += BB[TB];
      return IB
    }
    const UB = "BABYLON ",
      WB = "DECODE ",
      dB = "BABYLON@ ";

    function CB(BB) {
      return yB(UB + BB)
    }

    function QB(BB, IB) {
      return yB(dB + BB + " " + IB)
    }

    function sB(BB) {
      return yB(WB + BB)
    }
  },
  40865: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => TB
    });
    const TB = {
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
  38034: BB => {
    BB.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAKUlEQVQYGWM8CwQMeAATHjmw1JBQwAh06v+LFy8yvH//noGXl/ccuq8A/vQKd00yOdIAAAAASUVORK5CYII="
  },
  38019: BB => {
    BB.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAALUlEQVQYGWM8CwQMeAATHjmw1JBQwAh06v8DBw4wCAoKMnBzczN8/PjxHLLPAORwCnfkvOdNAAAAAElFTkSuQmCC"
  },
  38040: BB => {
    BB.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAKUlEQVQYGWM8CwQMeAATHjmw1JBQwAh06v8DBw4wCAoKMvz58+ccuq8A8vQKd2AxC9MAAAAASUVORK5CYII="
  },
  38013: BB => {
    BB.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAANUlEQVQYGWM8CwQMeAATHjmw1JBQAHLp/wMHDvy/ePHi/4CAgP937tz5Ly6u+5/P3uw/KAgAgjwWhHm22JoAAAAASUVORK5CYII="
  },
  38027: BB => {
    BB.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAKUlEQVQYGWM8CwQMeAATHjmw1JBQwAh06v8DBw4wCAoKMvz58+ccuq8A8vQKd2AxC9MAAAAASUVORK5CYII="
  },
  38775: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => oB
    });
    var TB = ZB(3036);
    const JB = ["none", "idle", "now"];

    function oB() {
      const BB = () => (0, TB.x)();
      return {
        memoryBytes: () => (0, TB.r)().buffer.byteLength,
        reserveUpFront: IB => BB().gh(IB),
        reserveAhead: IB => BB().Nh(IB),
        setCeiling: IB => {
          BB().qh(IB)
        },
        lowWater: () => JB[BB().Fh()] ?? "none",
        stats: () => function(BB) {
          const IB = new Uint32Array((0, TB.r)().buffer, BB, 17),
            ZB = BB => IB[BB] ?? 0,
            JB = BB => ({
              upFront: ZB(BB),
              ahead: ZB(BB + 1),
              onDemandInFrame: ZB(BB + 2),
              onDemand: ZB(BB + 3)
            });
          return {
            memoryBytes: ZB(0),
            initialBytes: ZB(1),
            liveBytes: ZB(2),
            peakLiveBytes: ZB(3),
            headroomBytes: ZB(4),
            unusedBytes: ZB(5),
            ceilingBytes: ZB(6),
            reservesRefused: ZB(7),
            grows: JB(8),
            grownBytes: JB(12),
            allocationsRefused: ZB(16)
          }
        }(BB().yh()),
        takeBallast: () => BB().Uh(),
        takePressure: () => BB().Wh()
      }
    }
  },
  5210: (BB, IB, ZB) => {
    ZB.d(IB, {
      B: () => zB,
      d: () => vB,
      g: () => GB,
      j: () => TB,
      l: () => gB,
      m: () => hB,
      o: () => JB,
      q: () => oB,
      u: () => cB,
      y: () => nB
    });
    const TB = 5;

    function JB(BB) {
      return BB === TB
    }

    function oB(BB) {
      return [...BB.features]
    }
    const GB = 262144,
      vB = 256,
      kB = 256;

    function cB(BB) {
      if ("object" !== typeof BB || null === BB || Array.isArray(BB)) return "The pack has no files.";
      const IB = [];
      for (const [ZB, TB] of Object.entries(BB)) {
        if ("string" !== typeof TB) return `${ZB} isn't text.`;
        IB.push({
          path: ZB,
          source: TB
        })
      }
      return IB.sort(((BB, IB) => hB(BB.path, IB.path))),
        function(BB) {
          if (0 === BB.length) return "The pack has no .wgsl files.";
          if (BB.length > vB) return `The pack has more than ${vB} .wgsl files.`;
          const IB = new Set;
          for (const {
              path: ZB
            }
            of BB) {
            const BB = FB(ZB);
            if (null !== BB) return BB;
            if (IB.has(ZB)) return `The pack has two files at ${ZB}.`;
            IB.add(ZB)
          }
          return zB(BB) > GB ? `The pack's .wgsl files are over ${GB/1024} KB in total.` : null
        }(IB) ?? IB
    }

    function nB(BB) {
      const IB = {};
      for (const ZB of BB) IB[ZB.path] = ZB.source;
      return IB
    }

    function hB(BB, IB) {
      return BB < IB ? -1 : BB > IB ? 1 : 0
    }

    function zB(BB) {
      const IB = new TextEncoder;
      let ZB = 0;
      for (const {
          source: TB
        }
        of BB) ZB += IB.encode(TB).byteLength;
      return ZB
    }

    function FB(BB) {
      if (!BB.toLowerCase().endsWith(".wgsl")) return `${BB} isn't a .wgsl file.`;
      if (BB.length > kB) return `A file path is over ${kB} characters.`;
      if (BB.includes("\\") || /[\u0000-\u001f]/.test(BB)) return `${BB} isn't a valid file path.`;
      return BB.split("/").some((BB => "" === BB || "." === BB || ".." === BB)) ? `${BB} isn't a valid file path.` : null
    }
    const NB = /^(.*)\[rot\[([1-4])$/;

    function gB(BB, IB) {
      let ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
      const TB = new Map;
      IB.forEach(((BB, IB) => {
        let {
          numAnimStates: ZB,
          animStartIdx: JB
        } = BB;
        for (let oB = 1; oB < ZB; oB++) TB.set(JB + oB - 1, IB)
      }));
      const JB = Object.entries(BB),
        oB = new Map;
      for (const [gB, qB] of JB) {
        const BB = NB.exec(gB);
        "1" === BB?.[2] && oB.set(BB[1], qB + 1)
      }
      const GB = BB => {
          const IB = NB.exec(BB);
          return IB && oB.has(IB[1]) ? {
            root: IB[1],
            rotation: Number(IB[2]) - 1
          } : null
        },
        vB = new Set(JB.map((BB => {
          let [IB] = BB;
          return GB(IB)?.root ?? IB
        }))),
        kB = (BB, ZB) => {
          const TB = BB.replace(/_?0$/, "");
          return (IB[ZB]?.numAnimStates ?? 0) > 1 && !vB.has(TB) ? TB : BB
        },
        cB = new Map;
      for (const [NB, gB] of JB) cB.set(gB, kB(GB(NB)?.root ?? NB, gB));
      const nB = JB.reduce(((BB, IB) => {
          let [, ZB] = IB;
          return Math.max(BB, ZB + 1)
        }), 0),
        hB = Array.from({
          length: nB
        }, ((BB, IB) => ({
          id: IB + 1,
          rotation: 0
        }))),
        zB = new Map,
        FB = new Map;
      for (const [NB, gB] of JB) {
        const BB = GB(NB),
          IB = TB.get(gB);
        if (void 0 !== IB) {
          const ZB = cB.get(IB);
          FB.set(NB, {
            name: NB,
            texture: ZB,
            kind: "frame"
          }), BB && !FB.has(BB.root) && FB.set(BB.root, {
            name: BB.root,
            texture: ZB,
            kind: "frame"
          });
          continue
        }
        const ZB = cB.get(gB),
          JB = BB?.root ?? NB;
        if (ZB !== JB && FB.set(JB, {
            name: JB,
            texture: ZB,
            kind: "frame"
          }), BB) {
          const IB = oB.get(BB.root);
          hB[gB] = {
            id: IB,
            rotation: BB.rotation
          }, zB.set(ZB, IB), FB.set(NB, {
            name: NB,
            texture: ZB,
            kind: "rotation"
          })
        } else zB.set(ZB, gB + 1)
      }
      for (const NB of zB.keys()) FB.delete(NB);
      for (const [NB, gB] of ZB) {
        const BB = zB.get(gB);
        void 0 === BB || zB.has(NB) || (zB.set(NB, BB), FB.delete(NB))
      }
      return {
        named: [...zB].sort(((BB, IB) => {
          let [ZB] = BB, [TB] = IB;
          return ZB < TB ? -1 : ZB > TB ? 1 : 0
        })).map((BB => {
          let [IB, ZB] = BB;
          return {
            name: IB,
            id: ZB
          }
        })),
        aliases: [...FB.values()],
        layers: hB
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);