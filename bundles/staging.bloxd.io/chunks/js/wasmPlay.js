export const id = 64;
export const ids = [64, 117, 118, 138];
export const modules = {
  39716: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => QB,
      e: () => nB
    });
    const QB = "The world isn't loaded, so no blocks can be seen.",
      nB = "The world isn't loaded, so nothing in it can be seen."
  },
  4779: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => aB
    });
    var QB = zB(28),
      nB = zB(31),
      dB = zB(1316),
      IB = zB(2912);
    const NB = 3e4,
      uB = 1e3;

    function UB() {
      return "visible" === document.visibilityState && "inGame" === QB.c.get("gameState") && (0, dB.y)()
    }

    function aB(BB, jB) {
      (0, IB.t)() || function(BB, jB, zB) {
        let QB = 0;
        const nB = setInterval((() => {
          jB() && (QB += uB, QB >= BB && (clearInterval(nB), zB()))
        }), uB)
      }(NB, UB, (() => {
        jB().then((() => {
          BB(`saved for the player after ${NB/1e3} s of play`), (0, IB.E)(), nB.n.Ly("chat", {
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
  34101: (BB, jB, zB) => {
    function QB(BB, jB) {
      return 0 === BB.length ? 0 : BB[Math.min(BB.length - 1, Math.floor(jB * BB.length))]
    }

    function nB(BB) {
      return BB.toFixed(1)
    }
    zB.d(jB, {
      e: () => nB,
      f: () => QB
    })
  },
  38032: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => UB,
      g: () => aB,
      h: () => gB,
      j: () => LB,
      k: () => GB
    });
    var QB = zB(4779),
      nB = zB(34101),
      dB = zB(2912);
    const IB = 20,
      NB = ["totalMs", "slotMs", "workerMs", "applyMs", "ahead", "inFlight", "Ep", "jobMs"];

    function uB(BB) {
      return [...BB].sort(((BB, jB) => BB - jB))
    }
    const UB = [];

    function aB(BB, jB, zB) {
      return `${BB},${jB},${zB}`
    }
    class pB {
      constructor() {
        this.pending = new Map, this.jobs = new Map, this.edits = [], this.nextEdit = 0, this.reported = 0, this.windowStart = performance.now(), this.frames = 0, this.lastFrameAt = 0, this.maxFrameMs = 0, this.jobsSent = 0, this.maxAhead = 0, this.maxCapacity = 0, this.roundTrips = [], this.windowEdits = [], this.outliers = 0, this.gaveUp = 0
      }
      edit(BB, jB) {
        var zB;
        const QB = null !== (zB = this.pending.get(BB)) && void 0 !== zB ? zB : [];
        QB.push({
          editAt: jB,
          meshJobId: 0
        }), this.pending.set(BB, QB)
      }
      frame(BB) {
        this.lastFrameAt > 0 && (this.maxFrameMs = Math.max(this.maxFrameMs, BB - this.lastFrameAt)), this.lastFrameAt = BB, this.frames++, BB - this.windowStart >= 1e3 && this.summarise(BB)
      }
      sent(BB, jB, zB, QB, nB, dB, IB) {
        this.jobs.set(jB, {
          sentAt: IB,
          receivedAt: 0,
          ahead: zB,
          inFlight: QB,
          Ep: nB,
          jobMs: 0
        }), this.jobsSent++, this.maxAhead = Math.max(this.maxAhead, zB), this.maxCapacity = Math.max(this.maxCapacity, nB);
        for (const uB of null !== (NB = this.pending.get(BB)) && void 0 !== NB ? NB : []) {
          var NB;
          dB.includes(uB.meshJobId) || (uB.meshJobId = jB)
        }
      }
      received(BB, jB, zB) {
        const QB = this.jobs.get(BB);
        void 0 !== QB && (this.roundTrips.push(zB - QB.sentAt), QB.receivedAt = zB, QB.jobMs = jB)
      }
      failed(BB) {
        this.jobs.delete(BB)
      }
      reassign(BB, jB, zB) {
        this.jobs.delete(jB);
        for (const nB of null !== (QB = this.pending.get(BB)) && void 0 !== QB ? QB : []) {
          var QB;
          nB.meshJobId === jB && (nB.meshJobId = zB)
        }
      }
      applied(BB, jB, zB) {
        const QB = this.jobs.get(jB);
        this.jobs.delete(jB), void 0 !== QB && this.show(BB, QB, zB, (BB => BB.meshJobId === jB))
      }
      emptied(BB, jB) {
        const zB = {
          sentAt: jB,
          receivedAt: jB,
          ahead: 0,
          inFlight: 0,
          Ep: 0,
          jobMs: 0
        };
        this.show(BB, zB, jB, (() => !0))
      }
      show(BB, jB, zB, QB) {
        const nB = this.pending.get(BB);
        if (!nB) return;
        const dB = nB.filter((nB => !QB(nB) || (this.record(BB, nB.editAt, jB, zB), !1)));
        dB.length > 0 ? this.pending.set(BB, dB) : this.pending.delete(BB)
      }
      JJ(BB) {
        this.reported += BB, this === sB && this.reported >= IB && null !== JB && (JB(), JB = null)
      }
      record(BB, jB, zB, QB) {
        const nB = {
          totalMs: QB - jB,
          slotMs: zB.sentAt - jB,
          workerMs: zB.receivedAt - zB.sentAt,
          applyMs: QB - zB.receivedAt,
          ahead: zB.ahead,
          inFlight: zB.inFlight,
          Ep: zB.Ep,
          jobMs: zB.jobMs
        };
        if (this.edits[this.nextEdit] = nB, this.nextEdit = (this.nextEdit + 1) % 500, this.windowEdits.push(nB.totalMs), this.JJ(1), nB.totalMs < 100 || ++this.outliers > 5) return;
        const IB = BB => Math.round(BB);
        (0, dB.n)("remesh", `slow edit (${BB}) shown in ${IB(nB.totalMs)} ms: slot ${IB(nB.slotMs)}, worker ${IB(nB.workerMs)} (${nB.ahead} ahead, ${nB.inFlight}/${nB.Ep} in flight; job ${IB(nB.jobMs)}), apply ${IB(nB.applyMs)}`)
      }
      summarise(BB) {
        const jB = (BB - this.windowStart) / 1e3;
        for (const [zB, QB] of this.pending) {
          const jB = QB.filter((jB => BB - jB.editAt <= 1e4));
          this.gaveUp += QB.length - jB.length, this.JJ(QB.length - jB.length), jB.length > 0 ? this.pending.set(zB, jB) : this.pending.delete(zB)
        }
        for (const [zB, QB] of this.jobs) BB - QB.sentAt > (QB.receivedAt > 0 ? 1e4 : 6e4) && this.jobs.delete(zB);
        if (this.jobsSent > 0 || this.roundTrips.length > 0 || this.windowEdits.length > 0 || this.gaveUp > 0) {
          const BB = uB(this.roundTrips),
            zB = uB(this.windowEdits),
            QB = Math.max(0, this.outliers - 5);
          (0, dB.n)("remesh", `${Math.round(this.frames/jB)} fps (longest ${Math.round(this.maxFrameMs)} ms) | ${this.jobsSent} jobs sent, up to ${this.maxAhead} ahead on a worker, capacity ${this.maxCapacity} | round trip p50 ${Math.round((0,nB.f)(BB,.5))} max ${Math.round((0,nB.f)(BB,1))} ms | ${zB.length} edits shown, p50 ${Math.round((0,nB.f)(zB,.5))} max ${Math.round((0,nB.f)(zB,1))} ms${QB>0?`, ${QB} more slow`:""}${this.gaveUp>0?`, ${this.gaveUp} never shown`:""}`)
        }
        this.windowStart = BB, this.frames = 0, this.maxFrameMs = 0, this.jobsSent = 0, this.maxAhead = 0, this.maxCapacity = 0, this.roundTrips = [], this.windowEdits = [], this.outliers = 0, this.gaveUp = 0
      }
      stats() {
        const BB = NB.map((BB => {
          const jB = uB(this.edits.map((jB => jB[BB])));
          return `${BB}: p50 ${Math.round((0,nB.f)(jB,.5))} p90 ${Math.round((0,nB.f)(jB,.9))} max ${Math.round((0,nB.f)(jB,1))}`
        }));
        return [`${this.edits.length} edits`, ...BB].join("\n")
      }
      dump() {
        const BB = this.edits.map((BB => NB.map((jB => Math.round(10 * BB[jB]) / 10)).join(",")));
        return [this.stats(), NB.join(","), ...BB].join("\n")
      }
    }
    class rB {
      constructor(BB, jB) {
        this.log = BB, this.ur = jB
      }
      edit(BB, jB, zB) {
        const [QB, nB, dB] = this.ur.zr.xzB(BB, jB, zB), IB = this.ur.zr.Fm.Ym(QB, nB, dB);
        IB && IB.Hm && this.log.edit(aB(QB, nB, dB), performance.now())
      }
      sent(BB, jB, zB, QB, nB) {
        this.log.sent(aB(BB.i, BB.j, BB.k), jB, zB, QB, nB, UB, performance.now())
      }
      received(BB) {
        this.log.received(BB.meshJobId, BB.jobMs, performance.now())
      }
      failed(BB) {
        this.log.failed(BB)
      }
      applied(BB, jB) {
        this.log.applied(aB(BB.i, BB.j, BB.k), jB, performance.now())
      }
    }
    let sB = null,
      JB = null,
      mB = !1,
      yB = null;

    function kB() {
      return new Promise((BB => {
        null !== sB && sB.reported >= IB ? BB() : JB = BB
      }))
    }

    function GB() {
      const BB = new pB;
      return sB = BB, (0, dB.j)("remesh", (() => BB.dump())), (0, dB.d)("remeshStats", (() => {
        console.log(BB.stats())
      })), mB || (mB = !0, (0, QB.d)((BB => {
        (0, dB.n)("remesh", BB)
      }), kB)), BB
    }

    function LB(BB) {
      const jB = GB();
      yB = new rB(jB, BB), BB.fL.meshProbe = yB, BB.on("beforeRender", (() => {
        jB.frame(performance.now())
      }))
    }

    function gB(BB, jB, zB) {
      var QB;
      null === (QB = yB) || void 0 === QB || QB.edit(BB, jB, zB)
    }
  },
  34132: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => QB
    });
    const QB = new Set(["chunkBorders"])
  },
  34289: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => IB,
      g: () => nB,
      i: () => aB
    });
    var QB = zB(1585);

    function nB(BB) {
      var jB;
      return {
        ...IB.store,
        yaw: IB.store.yaw + (null !== (jB = QB.d[BB].previewYaw) && void 0 !== jB ? jB : 0)
      }
    }
    const dB = {
        yaw: .61 * Math.PI,
        pitch: Math.PI / 2.05,
        radius: 30,
        target: [0, 0, 0]
      },
      IB = {
        player: dB,
        store: {
          ...dB,
          radius: 33,
          target: [0, 3.9, 0]
        }
      };

    function NB(BB, jB) {
      BB instanceof Promise ? BB.then(jB).catch((BB => {
        console.error("Couldn't open the preview", BB)
      })) : jB(BB)
    }
    class uB {
      constructor(BB) {
        this.opened = null, this.view = null, this.size = null, this.closed = !1, NB(BB, (BB => {
          this.closed ? BB.close() : (this.opened = BB, null !== this.size && BB.resize(this.size.width, this.size.height), null !== this.view && BB.show(this.view))
        }))
      }
      show(BB) {
        var jB;
        this.view = BB, null === (jB = this.opened) || void 0 === jB || jB.show(BB)
      }
      resize(BB, jB) {
        var zB;
        this.size = {
          width: BB,
          height: jB
        }, null === (zB = this.opened) || void 0 === zB || zB.resize(BB, jB)
      }
      close() {
        var BB;
        this.closed = !0, null === (BB = this.opened) || void 0 === BB || BB.close(), this.opened = null
      }
    }
    class UB {
      constructor(BB) {
        this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(BB).then((BB => BB.ready)), NB(BB, (BB => {
          this.closed ? BB.close() : (this.opened = BB, null !== this.size && BB.resize(this.size.width, this.size.height))
        }))
      }
      get dev() {
        return this.opened.dev
      }
      isReady() {
        var BB, jB;
        return null !== (BB = null === (jB = this.opened) || void 0 === jB ? void 0 : jB.isReady()) && void 0 !== BB && BB
      }
      setCosmetic(BB, jB) {
        var zB;
        null === (zB = this.opened) || void 0 === zB || zB.setCosmetic(BB, jB)
      }
      playEmote(BB) {
        var jB;
        null === (jB = this.opened) || void 0 === jB || jB.playEmote(BB)
      }
      setOrbit(BB) {
        var jB;
        null === (jB = this.opened) || void 0 === jB || jB.setOrbit(BB)
      }
      resetCamera() {
        var BB;
        null === (BB = this.opened) || void 0 === BB || BB.resetCamera()
      }
      async untilDrawn(BB) {
        var jB;
        await this.ready, await (null === (jB = this.opened) || void 0 === jB ? void 0 : jB.untilDrawn(BB))
      }
      resize(BB, jB) {
        var zB;
        this.size = {
          width: BB,
          height: jB
        }, null === (zB = this.opened) || void 0 === zB || zB.resize(BB, jB)
      }
      close() {
        var BB;
        this.closed = !0, null === (BB = this.opened) || void 0 === BB || BB.close(), this.opened = null
      }
    }
    const aB = new class {
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
        return new uB(this.current().openMob(BB))
      }
      openPet(BB) {
        return new uB(this.current().openPet(BB))
      }
      openMobLineup(BB) {
        return new uB(this.current().openMobLineup(BB))
      }
      openCharacter(BB, jB) {
        return new UB(this.current().openCharacter(BB, jB))
      }
    }
  },
  5115: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => QB.f,
      g: () => nB,
      k: () => QB.n
    });
    var QB = zB(5120);
    const nB = [!1, !0].flatMap((BB => ["terrain", "liquid", "model"].map((jB => ({
      strict: BB,
      program: jB
    })))))
  },
  39307: (BB, jB, zB) => {
    zB.r(jB), zB.d(jB, {
      ShaderPackPage: () => uB,
      harnessShaderPackMode: () => rB,
      setHarnessUrlShaderPack: () => pB,
      shaderPackPage: () => aB
    });
    var QB = zB(106),
      nB = zB(41),
      dB = (zB(3577), zB(5115), zB(3572)),
      IB = zB(6606);
    zB(6585);
    const NB = {
      status: "none"
    };
    class uB {
      constructor() {
        this.stored = null, this.compiling = null, this.pagePack = null, this.resolved = null
      }
      preload() {
        if (null === this.stored) {
          if ((0, dB.k)(QB.featureFlags.settings.canUseShaderPacks)) return this.stored = Promise.resolve(null), UB().then((BB => {
            BB && nB.j.removeItem(dB.e)
          })), this.stored;
          this.prefetchHint() && this.compiler().catch((() => {})), this.stored = this.readStored()
        }
        return this.stored
      }
      prefetchHint() {
        return (0, dB.g)(QB.featureFlags.settings.canUseShaderPacks)
      }
      async loadActive() {
        const BB = await this.load();
        return "active" === BB.status ? BB.pack : null
      }
      load() {
        return this.pagePack ??= this.read().catch((BB => (console.error("Failed to load the shader pack", BB), NB))).then((BB => (this.resolved ??= BB, BB))), this.pagePack
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
        return this.compiling ??= Promise.all([zB.e(78), zB.e(136), zB.e(142)]).then((() => zB(41831))).then((BB => (BB.prefetchCompiler(), BB))), this.compiling
      }
      async readStored() {
        const BB = await UB();
        return BB && this.compiler().then((BB => BB.reconcileHint())).catch((BB => {
          console.error("Failed to correct the shader pack hint", BB)
        })), BB
      }
      async read() {
        const BB = await this.preload();
        return BB ? (await this.compiler()).compilePagePack(BB) : NB
      }
    }
    async function UB() {
      if (!(0, dB.o)(QB.featureFlags.settings.canUseShaderPacks)) return null;
      try {
        const BB = await (0, IB.h)(!0);
        return BB || nB.j.setItem(dB.e, !1), BB
      } catch (BB) {
        return console.error("Failed to read the stored shader pack", BB), nB.j.removeItem(dB.e), null
      }
    }
    const aB = new uB;

    function pB(BB, jB) {}

    function rB() {
      return null
    }
  },
  39352: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => pB,
      d: () => rB
    });
    var QB = zB(174),
      nB = zB(201),
      dB = zB(1523),
      IB = zB(3036),
      NB = zB(1532),
      uB = zB(36538),
      UB = zB(701),
      aB = zB(39307);

    function pB(BB) {
      (0, IB.reportClientError)("matchmake_failed", BB, QB.j[QB.j.SHADER_PACK])
    }
    async function rB(BB, jB) {
      var zB;
      const QB = null === (zB = await aB.shaderPackPage.preload()) || void 0 === zB ? void 0 : zB.listing,
        IB = (0, uB.b)();
      QB && null !== IB && await NB.b.reportShaderPackSession(BB, {
        packId: QB.packId,
        sourceHash: QB.sourceHash,
        game: (0, dB.c)(jB, nB.u, "other"),
        playSessionId: IB,
        visitSessionId: (0, UB.h)()
      })
    }
  },
  6606: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => nB,
      h: () => dB
    });
    var QB = zB(41);
    const nB = "shaderPack";
    async function dB() {
      var BB;
      let jB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (BB = await QB.g.getItem(nB, jB)) && void 0 !== BB ? BB : null
    }
  },
  6585: (BB, jB, zB) => {
    zB.r(jB), zB.d(jB, {
      loadShaderPackTextures: () => IB,
      shaderPackTextures: () => NB
    });
    var QB = zB(5120);
    let nB = null,
      dB = null;

    function IB() {
      return dB ??= Promise.all([zB.e(73), zB.e(190)]).then((() => zB(40588))).then((BB => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: jB,
          textureNameToIndex: zB,
          textureAnimationData: dB
        } = BB;
        return nB ??= (0, QB.j)(zB, dB, jB), nB
      })), dB
    }

    function NB() {
      if (null === nB) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return nB
    }
  },
  34188: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => dB
    });
    var QB = zB(1121);

    function nB() {
      var BB, jB;
      return null !== (BB = null === (jB = screen.orientation) || void 0 === jB ? void 0 : jB.type) && void 0 !== BB ? BB : innerWidth > innerHeight ? "landscape" : "portrait"
    }
    const dB = new class {
      constructor() {
        this.holding = !1, this.heldOrientation = "", this.releaseTimer = void 0, this.longHoldTimer = void 0, this.resizers = new Set, this.releaseWhenShown = () => {
          document.hidden || (document.removeEventListener("visibilitychange", this.releaseWhenShown), this.release())
        }
      }
      isHeld() {
        return this.holding && nB() !== this.heldOrientation && (this.holding = !1), this.holding
      }
      hold() {
        this.heldOrientation = nB(), this.holding = !0, clearTimeout(this.releaseTimer), document.removeEventListener("visibilitychange", this.releaseWhenShown), clearTimeout(this.longHoldTimer), this.longHoldTimer = setTimeout((() => {
          this.holding && (0, QB.Zm)(new Error("Game view size held for 60 s"))
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
        let jB = !1;
        return () => {
          if (jB && this.isHeld()) return null;
          const zB = BB();
          return jB ||= null !== zB, zB
        }
      }
      onRelease(BB) {
        return this.resizers.add(BB), () => {
          this.resizers.delete(BB)
        }
      }
    }
  },
  39337: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => nB
    });
    let QB = !1;
    async function nB(BB, jB) {
      if (!QB) {
        QB = !0;
        try {
          const [{
            reloadBloxd: QB
          }, {
            NotificationProvider: nB
          }] = await Promise.all([Promise.resolve().then((() => zB(1778))), Promise.resolve().then((() => zB(1381)))]);
          if (!BB || !0 === await nB.showPromptPopup({
              title: "Unsaved changes",
              subtitle: "Exit and lose your unsaved changes?",
              confirmText: "Exit",
              destructive: !0,
              cancelText: "Cancel",
              unlockPointerKey: "replayExitUnsavedChanges"
            }).getResult()) return void QB(jB)
        } catch (nB) {
          console.error("Leaving the replay failed", nB)
        }
        QB = !1
      }
    }
  },
  41052: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => NB,
      h: () => uB
    });
    var QB = zB(1794);
    const nB = 33177600,
      dB = 3e4;
    let IB = !1;

    function NB(BB, jB, zB) {
      let QB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const {
        scale: NB = 1,
        type: uB = "image/png",
        quality: UB
      } = QB;
      if (!BB.drawing()) return Promise.reject(new Error("Screenshots need a game to be running"));
      if (IB) return Promise.reject(new Error("A screenshot is already being taken"));
      IB = !0;
      const aB = function(BB, jB, zB) {
        const QB = Math.max(1, BB),
          dB = Math.max(1, jB),
          IB = Math.min(1, zB / Math.max(QB, dB), Math.sqrt(nB / (QB * dB)));
        return {
          width: Math.max(1, Math.floor(QB * IB)),
          height: Math.max(1, Math.floor(dB * IB))
        }
      }(jB, zB, BB.maxTextureSize);
      return BB.resize(aB.width, aB.height, NB * aB.width / Math.max(1, jB)), new Promise(((jB, zB) => {
        let QB, nB = 2,
          NB = null;
        const aB = () => {
          var jB;
          IB = !1, null === (jB = NB) || void 0 === jB || jB(), clearTimeout(QB), BB.restoreSize()
        };
        QB = setTimeout((() => {
          aB(), zB(new Error("No frame was drawn to capture"))
        }), dB), NB = BB.onFrameDrawn((() => {
          if (nB--, nB > 0) return;
          const {
            canvas: QB
          } = BB, dB = {
            width: QB.width,
            height: QB.height
          };
          try {
            QB.toBlob((BB => {
              BB ? jB({
                blob: BB,
                ...dB
              }) : zB(new Error("The canvas gave no image"))
            }), uB, UB)
          } catch (IB) {
            zB(IB)
          } finally {
            aB()
          }
        }))
      }))
    }
    async function uB(BB, jB, zB) {
      try {
        const nB = await NB(BB, jB, zB);
        (0, QB.e)(nB.blob, `bloxd-screenshot-${nB.width}x${nB.height}-${Date.now()}.png`)
      } catch (nB) {
        console.error("Error taking screenshot:", nB)
      }
    }
  },
  37787: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => QB
    });
    const QB = {
      noaReady: null,
      chunkRequested: null,
      beforeServerListeners: null,
      wasmNetReady: null
    }
  },
  39262: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => IB
    });
    var QB = zB(363),
      nB = zB(145),
      dB = zB(41);

    function IB() {
      dB.j.setItem(QB.yb, dB.j.getItem(QB.yb) + 1), (0, nB.is99NightsCrazyGamesBundle)() && dB.j.setItem(QB.ub, dB.j.getItem(QB.ub) + 1)
    }
  },
  40744: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => NB
    });
    var QB = zB(39716);

    function nB(BB) {
      return {
        current: () => BB,
        watch: () => () => {}
      }
    }

    function dB() {}
    const IB = Object.freeze([0, 0, 0]),
      NB = {
        states: {
          health: nB({
            health: null,
            maxHealth: null,
            shield: null,
            maxShield: null
          }),
          inventory: nB({
            player: [],
            chestOrCreative: [],
            chest: null,
            creative: !1,
            selectedSlot: 0,
            freeSlots: 0
          }),
          hotbar: nB({
            items: [],
            ammo: 0,
            selectedSlot: null
          }),
          stationItems: nB({
            enchantable: {},
            salvageable: {}
          }),
          itemInfo: nB({}),
          creativeVisibility: nB({
            publicLobby: !1,
            shownInGame: {}
          }),
          aura: nB(null),
          heldItemAim: nB({
            gun: !1,
            aimable: !1,
            chargeName: null
          }),
          crouching: nB(!1),
          gliderBoostFuel: nB(0),
          flight: nB({
            canFly: !1,
            flying: !1
          }),
          crafting: nB({
            focus: null,
            recipes: [],
            detail: null
          }),
          players: nB({
            ids: [],
            byId: {},
            localId: null
          }),
          lobbyLeaderboardRows: nB({}),
          fullInventory: nB(!1),
          crosshairTarget: nB({
            interactPrompt: null,
            blockText: null,
            neededTool: null
          }),
          localPlayerAlive: nB(!0),
          freeCamera: nB({
            allowed: !1,
            movesFly: !1
          }),
          replay: nB(null),
          replayEdits: nB(null),
          replayRecorder: nB({
            recording: !1,
            clipping: !1,
            hasClipBuffer: !1,
            seconds: 0
          }),
          replayVideoExporting: nB(!1)
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
          selectHotbarSlot: dB,
          removeInventoryItem: () => !1,
          swapInventorySlots: () => !1,
          moveInventoryItem: () => !1,
          quickMoveInventoryItem: () => null,
          closeChest: dB,
          setInventoryOpen: dB,
          changeIronChestPasskey: dB,
          dragReplayCamera: dB,
          applyTemporaryThirdPerson: dB,
          holdEmoteWheel: dB,
          recordFlyingMiddleText: dB,
          focusCrafting: dB,
          craftRecipe: () => ({
            fa: 0,
            zu: null,
            amountAddedToSlot: 0
          }),
          salvageItem: () => !1,
          enchantItem: dB,
          setShopOpen: dB,
          buyShopItem: dB,
          lobbyManage: dB,
          sendChatMessage: dB,
          ignorePlayer: dB,
          reportPlayer: dB,
          reportWorldCodeChat: dB,
          requestDiscordReportKey: dB,
          reportLobbyOrGame: dB,
          playEmote: dB,
          updateMyCosmetic: dB,
          writeOnBoard: dB,
          writeBook: dB,
          writeNameTag: dB,
          setCustomLobbyBlock: dB,
          openIronChest: dB,
          sendCodeCollab: dB,
          clickCodeBlock: dB,
          bindCustomButtonKeys: dB,
          pressCustomButton: dB,
          moveReplayFreecam: dB,
          holdReplayFreecamVertical: dB,
          respawn: dB,
          wakeUp: dB,
          requestLeaderboard: dB,
          completeTask: dB,
          setServerCookie: dB,
          answerUiRequest: dB,
          chooseRewardedAd: dB,
          setCameraZoom: dB,
          setFreeCameraMovesFly: dB,
          setBlockHighlight: dB,
          setCrosshairInteractPrompt: dB,
          setLookSensitivity: dB,
          replayAction: dB,
          setReplayPlaying: dB,
          seekReplay: dB,
          setReplayCameraMode: dB,
          syncReplayCameraMode: dB,
          setReplayCameraKeyframe: dB,
          moveReplayCameraKeyframe: dB,
          deleteReplayCameraKeyframes: dB,
          setReplayPlaybackMark: dB,
          cropReplay: () => !1,
          holdReplayForShaderPackFailure: dB,
          exportReplayVideo: dB,
          toggleRecording: dB,
          saveClip: dB,
          setRecorderPrefs: dB,
          setReplayViewerOpen: dB
        },
        queries: {
          enchantingOffer: () => ({
            perks: [],
            options: []
          }),
          worldCodeAiChunk: () => QB.b,
          worldCodeAiGameState: () => QB.e
        },
        lookups: {
          localPos: () => IB,
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
  41050: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => IB,
      e: () => dB
    });
    var QB = zB(2206),
      nB = zB(1067);

    function dB(BB, jB) {
      return null !== BB.gameSource && (0, QB.l)(jB, BB.gameSource)
    }

    function IB(BB, jB) {
      if (null === BB.gameSource || "" === BB.gameSource || null === jB) return !0;
      const zB = (0, nB.n)(jB) ? (0, nB.q)(jB) : null;
      return null !== zB && dB(BB, zB)
    }
  },
  41022: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => NB
    });
    var QB = zB(644),
      nB = zB(41028),
      dB = zB(40889);
    async function IB(BB) {
      const jB = await (0, nB.i)({
        Helmet: zB(38044),
        Chestplate: zB(38049),
        Gauntlets: zB(38072),
        Leggings: zB(38056),
        Boots: zB(38063)
      } [QB.c[BB]]);
      try {
        return (0, dB.s)(jB)
      } finally {
        jB.close()
      }
    }
    const NB = new class {
      constructor() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : IB,
          jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : nB.m;
        this.decode = BB, this.register = jB, this.decoded = new Map
      }
      warm() {
        for (let BB = 0; BB < QB.c.length; BB++) this.part(BB).catch((jB => {
          console.warn(`The grayscale armour ${QB.c[BB]} image didn't decode ahead of use`, jB)
        }))
      }
      async load(BB, jB) {
        const {
          width: zB,
          height: dB,
          pixels: IB
        } = await this.part(BB), NB = new ImageData(function(BB, jB) {
          const zB = new Uint8ClampedArray(BB.length);
          for (let QB = 0; QB < BB.length; QB += 4) zB[QB] = Math.round(BB[QB] * jB[0] / 255), zB[QB + 1] = Math.round(BB[QB + 1] * jB[1] / 255), zB[QB + 2] = Math.round(BB[QB + 2] * jB[2] / 255), zB[QB + 3] = BB[QB + 3];
          return zB
        }(IB, function(BB) {
          return [BB >>> 16 & 255, BB >>> 8 & 255, 255 & BB]
        }(jB)), zB, dB);
        let uB;
        try {
          uB = await createImageBitmap(NB, {
            premultiplyAlpha: "none",
            colorSpaceConversion: "none"
          })
        } catch (UB) {
          throw new nB.d("decode", `grayscale armour ${QB.c[BB]}`, {
            cause: UB
          })
        }
        return {
          id: this.register(uB),
          width: zB,
          height: dB
        }
      }
      part(BB) {
        const jB = this.decoded.get(BB);
        if (void 0 !== jB) return jB;
        const zB = this.decode(BB).catch((jB => {
          throw this.decoded.delete(BB), jB instanceof nB.d ? jB : new nB.d("decode", `grayscale armour ${QB.c[BB]}`, {
            cause: jB
          })
        }));
        return this.decoded.set(BB, zB), zB
      }
    }
  },
  41019: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => IB,
      d: () => yB,
      h: () => aB,
      i: () => pB,
      k: () => mB
    });
    var QB = zB(40881),
      nB = zB(41022),
      dB = zB(41028);
    const IB = 396,
      NB = 1,
      uB = 2,
      UB = 3,
      aB = {
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
      pB = {
        File: 0,
        Item: 1
      },
      rB = 0,
      sB = 1,
      JB = 2;

    function mB(BB) {
      const jB = (0, QB.p)();
      jB.catch((() => {}));
      let nB = null;
      return {
        glbUrl: BB,
        lifeformAtlasUrl: async BB => (await jB).lifeformAtlasUrl(BB),
        armourAtlasUrl: async () => (await zB.e(207).then((() => zB(34335)))).armourAtlasUrl,
        capeUrl: async BB => (await jB).capeUrl(BB),
        attachmentImageUrl: async BB => (await jB).attachmentImageUrl(BB),
        blockImageUrl: async BB => (await jB).blockImageUrl(BB),
        groupAtlasUrl: async BB => (await jB).groupAtlasUrl(BB),
        particleTextureUrl: async BB => (await jB).particleTextureUrl(BB),
        particleItemUrl: async BB => (nB ??= zB.e(38).then((() => zB(51207))).catch((BB => {
          throw nB = null, BB
        })), (await nB).particleItemUrl(BB))
      }
    }
    class yB {
      constructor(BB, jB) {
        var zB, IB, NB, uB;
        let UB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        this.sources = BB, this.onFailure = jB, this.loading = new Map, this.glbImages = new Map, this.glbWrittenImages = new Map, this.glbTakenCount = new Map, this.answered = new Map, this.ready = [], this.load = void 0, this.release = void 0, this.fetchFile = void 0, this.greyscaleArmour = void 0, this.HJ = !1, this.load = null !== (zB = UB.load) && void 0 !== zB ? zB : (BB, jB) => (0, dB.j)(BB, UB.fetchImage, jB), this.release = null !== (IB = UB.release) && void 0 !== IB ? IB : dB.q, this.fetchFile = null !== (NB = UB.fetchFile) && void 0 !== NB ? NB : BB => (0, QB.j)(BB), this.greyscaleArmour = null !== (uB = UB.greyscaleArmour) && void 0 !== uB ? uB : nB.d
      }
      get waiting() {
        return this.ready.length
      }
      get inFlight() {
        return this.loading.size
      }
      glbWritten(BB, jB) {
        this.glbWrittenImages.set(BB, MB(jB))
      }
      glbTaken(BB, jB) {
        const zB = this.glbWrittenImages.get(BB);
        this.glbWrittenImages.delete(BB), jB && this.setGlbImages(BB, void 0 !== zB && zB.length > 0 ? zB : void 0)
      }
      setGlbImages(BB, jB) {
        var zB;
        this.glbTakenCount.set(BB, (null !== (zB = this.glbTakenCount.get(BB)) && void 0 !== zB ? zB : 0) + 1), void 0 === jB ? this.glbImages.delete(BB) : this.glbImages.set(BB, jB);
        const QB = [];
        for (const {
            key: nB
          }
          of this.loading.values()) nB.kind === aB.Glb && nB.word === BB && QB.push(nB);
        for (let nB = this.ready.length - 1; nB >= 0; nB--) {
          const {
            key: jB,
            id: zB
          } = this.ready[nB];
          jB.kind === aB.Glb && jB.word === BB && (this.ready.splice(nB, 1), null !== zB && (this.answered.delete(zB), this.release(zB)), QB.push(jB))
        }
        this.loadAgain(QB)
      }
      onEvent(BB) {
        if (this.HJ) return;
        const jB = new DataView(BB.buffer, BB.byteOffset, BB.byteLength);
        for (let zB = 0; zB + 8 <= BB.byteLength; zB += 8) {
          const BB = jB.getUint8(zB),
            QB = jB.getUint32(zB + 4, !0);
          if (BB === UB) {
            this.answered.delete(QB), this.release(QB);
            continue
          }
          const nB = {
            kind: jB.getUint8(zB + 1),
            index: jB.getUint8(zB + 2),
            word: QB
          };
          BB === NB ? this.want(nB) : BB === uB && this.loading.delete(kB(nB))
        }
      }
      reload(BB, jB) {
        const zB = zB => BB.includes(zB.kind) && (void 0 === jB || jB(zB)),
          QB = new Map;
        for (const nB of this.answered.values()) zB(nB) && QB.set(kB(nB), nB);
        for (const [nB, {
            key: dB
          }] of this.loading) zB(dB) && QB.set(nB, dB);
        this.loadAgain(QB.values())
      }
      loadAgain(BB) {
        for (const jB of BB) this.loading.delete(kB(jB)), this.want(jB)
      }
      drain(BB) {
        if (null !== BB)
          for (; this.ready.length > 0;) {
            if (!BB(IB, 0, this.ready[0].record)) return;
            this.ready.shift()
          }
      }
      dispose() {
        this.HJ = !0, this.loading.clear(), this.ready.length = 0;
        for (const BB of this.answered.keys()) this.release(BB);
        this.answered.clear()
      }
      want(BB) {
        const jB = kB(BB);
        if (this.loading.has(jB)) return;
        const zB = {
          key: BB
        };
        this.loading.set(jB, zB), this.loadKey(BB).then((QB => {
          this.HJ || this.loading.get(jB) !== zB ? this.release(QB.id) : (this.loading.delete(jB), this.answered.set(QB.id, BB), this.ready.push({
            record: LB(BB, rB, QB),
            key: BB,
            id: QB.id
          }))
        }), (QB => {
          if (this.HJ || this.loading.get(jB) !== zB) return;
          this.loading.delete(jB), this.onFailure({
            key: BB,
            error: QB
          });
          const nB = QB instanceof dB.d && "decode" === QB.stage ? sB : JB;
          this.ready.push({
            record: LB(BB, nB, null),
            key: BB,
            id: null
          })
        }))
      }
      async loadKey(BB) {
        switch (BB.kind) {
          case aB.Glb:
            return this.load(await this.glbImage(BB), "none");
          case aB.LifeformAtlas:
            return this.load(GB(await this.sources.lifeformAtlasUrl(BB.word), BB), "none");
          case aB.ArmourAtlas:
            return this.load(GB(await this.sources.armourAtlasUrl(), BB), "none");
          case aB.Cape:
            return this.load(GB(await this.sources.capeUrl(BB.word), BB), "none");
          case aB.AttachmentImage:
            return this.load(GB(await this.sources.attachmentImageUrl(BB.word), BB), "none");
          case aB.GroupAtlas:
            return this.load(GB(await this.sources.groupAtlasUrl(BB.word), BB), "none");
          case aB.BlockImage:
            return this.load(GB(await this.sources.blockImageUrl(BB.word), BB), "none");
          case aB.Particle: {
            const jB = await (BB.index === pB.Item ? this.sources.particleItemUrl(BB.word) : this.sources.particleTextureUrl(BB.word));
            return this.load(GB(jB, BB), "flipY")
          }
          case aB.GreyscaleArmour:
            return this.greyscaleArmour.load(BB.index, BB.word);
          default:
            throw new dB.d("fetch", `image kind ${BB.kind}`, {
              cause: null
            })
        }
      }
      async glbImage(BB) {
        var jB;
        let zB = this.glbImages.get(BB.word);
        if (void 0 === zB) {
          const jB = this.glbTakenCount.get(BB.word),
            QB = GB(await this.sources.glbUrl(BB.word), BB);
          try {
            zB = MB(await this.fetchFile(QB))
          } catch (nB) {
            throw new dB.d("fetch", QB, {
              cause: nB
            })
          }
          this.glbTakenCount.get(BB.word) === jB && this.glbImages.set(BB.word, zB)
        }
        const QB = null === (jB = zB) || void 0 === jB ? void 0 : jB[BB.index];
        if (!QB) throw new dB.d("decode", `image ${BB.index} of file ${2147483647&BB.word}`, {
          cause: null
        });
        return QB
      }
    }

    function kB(BB) {
      let {
        kind: jB,
        index: zB,
        word: QB
      } = BB;
      return `${jB}:${zB}:${QB}`
    }

    function GB(BB, jB) {
      if (null === BB) throw new dB.d("fetch", `no URL for image ${kB(jB)}`, {
        cause: null
      });
      return BB
    }

    function LB(BB, jB, zB) {
      var QB, nB, dB;
      const IB = new Uint8Array(16),
        NB = new DataView(IB.buffer);
      return NB.setUint8(0, BB.kind), NB.setUint8(1, BB.index), NB.setUint8(2, jB), NB.setUint32(4, BB.word, !0), NB.setUint32(8, null !== (QB = null === zB || void 0 === zB ? void 0 : zB.id) && void 0 !== QB ? QB : 0, !0), NB.setUint16(12, Math.min(null !== (nB = null === zB || void 0 === zB ? void 0 : zB.width) && void 0 !== nB ? nB : 0, 65535), !0), NB.setUint16(14, Math.min(null !== (dB = null === zB || void 0 === zB ? void 0 : zB.height) && void 0 !== dB ? dB : 0, 65535), !0), IB
    }
    const gB = 1179937895,
      tB = 1313821514,
      SB = 5130562;

    function MB(BB) {
      var jB;
      const zB = new DataView(BB.buffer, BB.byteOffset, BB.byteLength);
      if (BB.byteLength < 20 || zB.getUint32(0, !0) !== gB || zB.getUint32(16, !0) !== tB) return [];
      let QB, nB = 20 + zB.getUint32(12, !0);
      try {
        QB = JSON.parse((new TextDecoder).decode(BB.subarray(20, nB)))
      } catch {
        return []
      }
      for (; nB + 8 <= BB.byteLength && zB.getUint32(nB + 4, !0) !== SB;) nB += 8 + zB.getUint32(nB, !0);
      const dB = null !== (jB = QB.images) && void 0 !== jB ? jB : [];
      if (0 === dB.length || nB + 8 > BB.byteLength) return dB.map((() => null));
      const IB = BB.subarray(nB + 8, Math.min(BB.byteLength, nB + 8 + zB.getUint32(nB, !0)));
      return dB.map((BB => {
        var jB, zB, nB;
        const dB = void 0 === BB.bufferView || null === (jB = QB.bufferViews) || void 0 === jB ? void 0 : jB[BB.bufferView];
        if (!dB || 0 !== (null !== (zB = dB.buffer) && void 0 !== zB ? zB : 0) || void 0 === dB.byteLength) return null;
        const NB = null !== (nB = dB.byteOffset) && void 0 !== nB ? nB : 0,
          uB = NB + dB.byteLength;
        return uB <= IB.byteLength ? IB.slice(NB, uB) : null
      }))
    }
  },
  40753: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => IB,
      h: () => dB,
      l: () => nB
    });
    let QB = null;

    function nB(BB) {
      QB = BB
    }

    function dB(BB) {
      QB === BB && (QB = null)
    }

    function IB() {
      var BB;
      null === (BB = QB) || void 0 === BB || BB()
    }
  },
  36665: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => aB,
      f: () => rB,
      h: () => kB,
      k: () => UB
    });
    var QB = zB(28),
      nB = zB(2482),
      dB = zB(2491),
      IB = zB(2493),
      NB = zB(2585),
      uB = zB(31);

    function UB(BB, jB) {
      return (!(0, IB.b)() || 0 === BB && 0 === jB) && (0, dB.w)(nB.j.Joystick, 0, BB, jB, 0)
    }
    const aB = {
      Action1: 1,
      Action2: 2,
      Action3: 3,
      Attack: 4,
      Use: 5,
      Interact: 6,
      Boost: 7
    };

    function pB(BB) {
      return BB.classList.contains("TouchKeyHit") && sB() ? null : BB.firstElementChild
    }

    function rB(BB) {
      return BB.classList.contains("TouchKeyHit") && !BB.classList.contains("CanvasZone") ? {
        whole: !sB(),
        keyBox: null
      } : {
        whole: !1,
        keyBox: JB(pB(BB))
      }
    }

    function sB() {
      return document.documentElement.classList.contains(NB.j)
    }

    function JB(BB) {
      return !(BB instanceof HTMLElement) || BB.offsetWidth <= 0 || BB.offsetHeight <= 0 ? null : {
        width: BB.offsetWidth,
        height: BB.offsetHeight
      }
    }

    function mB(BB, jB) {
      const zB = BB => Math.min(65535, Math.round(4 * BB));
      return (zB(BB) | zB(jB) << 16) >>> 0
    }

    function yB(BB) {
      return {
        x: BB.left + BB.width / 2,
        y: BB.top + BB.height / 2,
        radius: Math.min(BB.width, BB.height) / 2
      }
    }
    const kB = new class {
      constructor(BB) {
        this.write = BB, this.elements = new Map, this.canvasLeft = 0, this.canvasTop = 0
      }
      set(BB, jB) {
        let zB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        jB ? this.elements.set(BB, {
          element: jB,
          hidden: zB
        }) : this.elements.delete(BB), this.measureOne(BB)
      }
      measure() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
          left: this.canvasLeft,
          top: this.canvasTop
        };
        this.canvasLeft = BB.left, this.canvasTop = BB.top;
        for (const jB of this.elements.keys()) this.measureOne(jB)
      }
      hitZone(BB, jB) {
        let zB = null,
          QB = 1;
        for (const nB of this.elements.keys()) {
          const dB = this.shown(nB);
          if (!dB) continue;
          const {
            rect: IB,
            element: NB
          } = dB, uB = yB(IB), UB = Math.max(0, IB.width / 2 - uB.radius), aB = Math.max(0, IB.height / 2 - uB.radius), rB = Math.max(0, Math.abs(BB - uB.x) - UB), sB = Math.max(0, Math.abs(jB - uB.y) - aB), mB = NB.firstElementChild;
          let kB = Math.hypot(rB, sB) / uB.radius;
          const GB = JB(pB(NB));
          GB && (kB = Math.min(kB, Math.max(2 * Math.abs(BB - uB.x) / GB.width, 2 * Math.abs(jB - uB.y) / GB.height))), kB < QB && (zB = {
            code: nB,
            element: NB,
            key: mB,
            ...uB
          }, QB = kB)
        }
        return zB
      }
      measureOne(BB) {
        const jB = this.shown(BB);
        if (!jB) return void this.write(nB.j.TouchZone, BB, 0, 0, 0);
        const {
          rect: zB,
          element: QB
        } = jB, dB = yB(zB);
        this.write(nB.j.TouchZone, BB, dB.x - this.canvasLeft, dB.y - this.canvasTop, mB(zB.width, zB.height));
        const IB = JB(pB(QB));
        this.write(nB.j.TouchZone, 256 | BB, 0, 0, IB ? mB(IB.width, IB.height) : 0)
      }
      shown(BB) {
        const jB = this.elements.get(BB),
          zB = QB.c.get("worldPanelHud");
        if (!jB || jB.hidden || "none" === zB) return null;
        const nB = jB.element.getBoundingClientRect();
        return nB.width <= 0 || nB.height <= 0 ? null : {
          rect: nB,
          element: jB.element
        }
      }
    }(dB.w);
    (0, uB.q)(NB.f, (() => {
      kB.measure()
    }))
  },
  40791: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => uB,
      c: () => UB
    });
    var QB = zB(40916),
      nB = zB(39158),
      dB = zB(36533),
      IB = zB(40796),
      NB = zB(40770);
    const uB = QB.d.timeForPlayerToConnect - 1e4;
    async function UB(BB, jB, zB, QB) {
      let uB;
      try {
        uB = await BB.getTrafficCode()
      } catch (JB) {
        throw console.error("[bloxd-wasm-client] could not get a traffic code", JB), new NB.u(JB)
      }
      const {
        gameNameWithVariation: UB,
        lobbyName: aB
      } = jB, pB = () => {
        const jB = (0, dB.i)(BB, UB, aB, uB, (BB => {
          var jB;
          return null !== (jB = null === zB || void 0 === zB ? void 0 : zB.isUsingCustomGameTexturePack(BB)) && void 0 !== jB && jB
        }));
        jB.joinOptions.wasmClient = !0;
        const nB = (0, IB.D)();
        return null !== nB && (jB.joinOptions.renderBackend = nB), jB.joinOptions.joinAdHold = QB, jB
      }, {
        roomName: rB,
        joinOptions: sB
      } = pB();
      return {
        endpoint: jB.endpoint,
        roomName: rB,
        joinOptions: sB,
        session: {
          gameNameWithVariation: UB,
          lobbyName: aB,
          playerDbId: BB.whamm
        },
        optionsAfterRefusal: async jB => await (0, nB.d)(BB, jB) ? pB().joinOptions : null
      }
    }
  },
  41038: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => aB,
      h: () => dB,
      i: () => pB,
      m: () => IB
    });
    var QB = zB(41019),
      nB = zB(40881);
    const dB = new class {
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
        const jB = void 0 !== this.session && void 0 === BB;
        if (this.change((() => {
            this.session = BB
          })), jB)
          for (const zB of [...this.pageListeners]) zB()
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
        const jB = this.current;
        if (BB(), this.current !== jB)
          for (const zB of this.listeners) zB()
      }
    };

    function IB(BB, jB) {
      return {
        ...BB,
        armourAtlasUrl: () => {
          var zB, QB;
          return null !== (zB = null === (QB = jB()) || void 0 === QB ? void 0 : QB.armourAtlasUrl()) && void 0 !== zB ? zB : BB.armourAtlasUrl()
        },
        lifeformAtlasUrl: zB => uB(jB(), (BB => BB.LIFEFORM_ATLAS_PATHS[zB]), (() => BB.lifeformAtlasUrl(zB))),
        groupAtlasUrl: zB => uB(jB(), (BB => BB.GROUP_ATLAS_PATHS[zB]), (() => BB.groupAtlasUrl(zB))),
        particleItemUrl: QB => UB(jB(), (async () => {
          const BB = await zB.e(38).then((() => zB(51207))).catch((() => null));
          return (null === BB || void 0 === BB ? void 0 : BB.particleItemSprite(QB)) || null
        }), (() => BB.particleItemUrl(QB))),
        blockImageUrl: zB => UB(jB(), (async () => {
          var BB, jB;
          return null !== (BB = null === (jB = await NB()) || void 0 === jB ? void 0 : jB.blockImageName(zB)) && void 0 !== BB ? BB : null
        }), (() => BB.blockImageUrl(zB)))
      }
    }

    function NB() {
      return (0, nB.p)().catch((() => null))
    }

    function uB(BB, jB, zB) {
      return UB(BB, (async () => {
        var BB;
        const zB = await NB(),
          QB = null === zB ? null : jB(zB),
          nB = null !== (BB = null === QB || void 0 === QB ? void 0 : QB.slice(QB.lastIndexOf("/") + 1)) && void 0 !== BB ? BB : null;
        return "Player_Atlas" === nB ? null : nB
      }), zB)
    }
    async function UB(BB, jB, zB) {
      if (null !== BB) {
        const zB = await jB(),
          QB = null === zB ? null : BB.textureUrl(zB);
        if (null !== QB) return QB
      }
      return zB()
    }
    const aB = 0;

    function pB(BB) {
      const jB = [QB.h.ArmourAtlas, QB.h.LifeformAtlas, QB.h.GroupAtlas, QB.h.BlockImage, QB.h.Particle];
      BB.reload(jB, (BB => {
        switch (BB.kind) {
          case QB.h.Particle:
            return BB.index === QB.i.Item;
          case QB.h.LifeformAtlas:
            return BB.word !== aB;
          default:
            return !0
        }
      }))
    }
  },
  40925: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => QB,
      g: () => NB,
      h: () => IB,
      k: () => nB,
      m: () => dB
    });
    const QB = 1e3;

    function nB() {
      uB((() => {
        window.location.reload()
      }))
    }

    function dB() {
      return new Promise((() => {}))
    }

    function IB(BB) {
      uB((() => {
        window.location.replace(BB(window.location.href))
      }))
    }

    function NB(BB) {
      Promise.resolve().then((() => zB(121))).then((jB => {
        let {
          currentUrl: zB
        } = jB;
        IB((() => zB.mergeSearchParamsInto(BB)))
      }), (() => {
        IB((() => BB))
      }))
    }

    function uB(BB) {
      null !== window.onbeforeunload ? Promise.resolve().then((() => zB(1778))).then((jB => {
        let {
          prepareForUnloadWithoutConfirmation: zB
        } = jB;
        try {
          zB()
        } catch (QB) {
          console.warn("[bloxd-wasm-client] prepareForUnloadWithoutConfirmation threw: leaving plainly", QB), window.onbeforeunload = null
        }
        BB()
      }), (() => {
        window.onbeforeunload = null, BB()
      })) : BB()
    }
  },
  5134: (BB, jB, zB) => {
    function QB(BB, jB) {
      return nB(BB, jB)
    }

    function nB(BB, jB) {
      if (BB === jB) return !0;
      if ("object" !== typeof BB || "object" !== typeof jB || null === BB || null === jB || Array.isArray(BB) !== Array.isArray(jB)) return !1;
      const zB = BB,
        QB = jB,
        dB = Object.keys(zB);
      return dB.length === Object.keys(QB).length && dB.every((BB => Object.prototype.hasOwnProperty.call(QB, BB) && nB(zB[BB], QB[BB])))
    }
    zB.d(jB, {
      d: () => QB
    })
  },
  40983: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => SB,
      h: () => gB,
      i: () => mB,
      m: () => JB
    });
    var QB = zB(1867),
      nB = zB(1253),
      dB = zB(39156),
      IB = zB(36568),
      NB = zB(39169),
      uB = zB(40770);
    const UB = {
        "X-Requested-With": "XMLHtttpRequest"
      },
      aB = 3,
      pB = [500, 1500];

    function rB(BB) {
      const jB = new URL(BB);
      return {
        secure: "https:" === jB.protocol || "wss:" === jB.protocol,
        host: jB.host,
        pathname: jB.pathname.replace(/\/+$/, ""),
        search: jB.searchParams.toString()
      }
    }

    function sB(BB, jB, zB) {
      const {
        secure: QB,
        host: nB,
        pathname: dB,
        search: IB
      } = rB(BB);
      return `${QB?"https":"http"}://${nB}${dB}/matchmake/${jB}/${encodeURIComponent(zB)}${IB?`?${IB}`:""}`
    }

    function JB(BB, jB) {
      var zB;
      const QB = null !== (zB = jB.protocol) && void 0 !== zB ? zB : "ws";
      if ("ws" !== QB) throw new Error(`seat reservation asks for the ${QB} transport`);
      const {
        secure: nB,
        host: dB,
        pathname: IB,
        search: NB
      } = rB(BB), uB = new URLSearchParams(NB);
      uB.append("sessionId", jB.sessionId), jB.reconnectionToken && uB.append("reconnectionToken", jB.reconnectionToken);
      return `${nB?"wss":"ws"}://${jB.room.publicAddress||`${dB}${IB}`}/${jB.room.processId}/${jB.room.roomId}?${uB.toString()}`
    }
    async function mB(BB, jB, zB) {
      var NB;
      let UB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const rB = null !== (NB = UB.sleep) && void 0 !== NB ? NB : QB.b,
        JB = new nB.c(UB.signal),
        mB = new IB.d((() => {
          (0, nB.i)(JB.controller, new IB.h("seat"))
        })),
        {
          signal: LB
        } = JB;
      try {
        const QB = await (0, dB.f)((() => async function(BB, jB, zB, QB) {
          var dB;
          const {
            signal: IB,
            sleep: NB
          } = QB, UB = sB(BB, "joinOrCreate", jB), rB = JSON.stringify(zB);
          let JB = null;
          for (let sB = 0; sB < aB; sB++) {
            var mB;
            if (sB > 0) await NB(null !== (mB = pB[sB - 1]) && void 0 !== mB ? mB : 1500, IB);
            let BB;
            (0, nB.q)(IB);
            try {
              BB = await kB(UB, rB, QB)
            } catch (LB) {
              (0, nB.q)(IB), JB = yB(LB);
              continue
            }
            const {
              response: jB,
              answer: zB,
              refusal: dB,
              lost: aB
            } = BB;
            if (null === aB) {
              if (null !== dB) throw GB(dB, zB);
              if (jB.ok && null !== zB && MB(zB)) return zB;
              JB = new uB.r(`seat request answered HTTP ${jB.status}${null===zB?" without JSON":" without a seat"}`, !1, void 0, jB.status)
            } else JB = yB(aB.error)
          }
          throw null !== (dB = JB) && void 0 !== dB ? dB : new uB.r("seat request made no attempt", !1)
        }(BB, jB, zB, {
          ...UB,
          signal: LB,
          sleep: rB
        })), LB, rB);
        return mB.answered(), QB
      } finally {
        mB.stop(), JB.unfollow()
      }
    }

    function yB(BB) {
      return new uB.r(BB instanceof Error ? BB.message : String(BB), !0, BB)
    }
    async function kB(BB, jB, zB) {
      var QB;
      const {
        signal: dB
      } = zB, IB = null !== (QB = zB.fetch) && void 0 !== QB ? QB : fetch, NB = await IB(BB, {
        method: "POST",
        headers: {
          ...UB,
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: jB,
        credentials: "include",
        signal: dB
      }), {
        answer: uB,
        lost: aB
      } = await async function(BB) {
        try {
          const jB = await BB.json();
          return {
            answer: "object" === typeof jB && null !== jB ? jB : null,
            lost: null
          }
        } catch (jB) {
          return {
            answer: null,
            lost: jB instanceof SyntaxError ? null : {
              error: jB
            }
          }
        }
      }(NB), pB = null !== uB && "string" === typeof uB.error ? uB.error : null;
      var rB;
      null !== pB && (null === (rB = zB.onRefusal) || void 0 === rB || rB.call(zB));
      return (0, nB.q)(dB), {
        response: NB,
        answer: uB,
        refusal: pB,
        lost: aB
      }
    }

    function GB(BB, jB) {
      return new uB.j(BB, "number" === typeof(null === jB || void 0 === jB ? void 0 : jB.code) ? jB.code : 0, (0, NB.t)(BB).text)
    }
    class LB extends Error {
      constructor(BB, jB) {
        super(BB), this.code = jB, this.name = "SeatHttpError"
      }
    }
    async function gB(BB, jB, zB) {
      let QB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const {
        response: nB,
        answer: dB,
        refusal: IB,
        lost: NB
      } = await kB(sB(BB, "reconnect", jB), JSON.stringify({
        reconnectionToken: zB
      }), QB);
      if (null !== NB) throw NB.error;
      if (!nB.ok) {
        const BB = null !== dB && "number" === typeof dB.code && 0 !== dB.code ? dB.code : nB.status;
        throw new LB(`the seat's reconnect was refused: ${null!==IB&&void 0!==IB?IB:`HTTP ${nB.status}`}`, BB)
      }
      if (null !== IB) throw GB(IB, dB);
      if (null === dB || !MB(dB)) throw new Error("the seat's reconnect answered " + (null === dB ? "without JSON" : "without a seat"));
      return {
        ...dB,
        reconnectionToken: zB
      }
    }
    const tB = 10;

    function SB(BB) {
      if (BB.byteLength < 2 || BB[0] !== tB) return null;
      const jB = 2 + BB[1];
      return jB > BB.byteLength ? null : (new TextDecoder).decode(BB.subarray(2, jB))
    }

    function MB(BB) {
      const jB = BB.room;
      return "string" === typeof BB.sessionId && "object" === typeof jB && null !== jB && "string" === typeof jB.roomId && "string" === typeof jB.processId && "string" === typeof jB.name
    }
  },
  40697: (BB, jB, zB) => {
    zB.d(jB, {
      B: () => HB,
      C: () => gB,
      E: () => tB,
      G: () => yB,
      J: () => qB,
      M: () => FB,
      Q: () => JB,
      S: () => VB,
      T: () => GB,
      X: () => kB,
      Z: () => LB,
      _: () => SB,
      e: () => nB,
      f: () => YB,
      j: () => DB,
      l: () => sB,
      n: () => mB,
      p: () => oB,
      q: () => EB,
      s: () => fB,
      w: () => iB,
      y: () => MB
    });
    var QB = zB(3099);
    const nB = {
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

    function dB(BB, jB) {
      return !ArrayBuffer.isView(BB) || BB instanceof DataView ? Array.isArray(BB) ? BB.map((BB => jB(BB))) : BB : Array.from(BB, (BB => jB(BB)))
    }

    function IB(BB) {
      if ("string" !== typeof BB) return BB;
      for (let jB = 0; jB < BB.length; jB++) {
        const zB = BB.charCodeAt(jB);
        if (zB >= 55296 && zB <= 57343) return uB.decode(NB.encode(BB))
      }
      return BB
    }
    const NB = new TextEncoder,
      uB = new TextDecoder;

    function UB(BB) {
      return BB
    }
    let aB;

    function pB(BB) {
      return null === BB || "object" !== typeof BB ? BB : [IB(BB.sN), IB(BB.JN)]
    }

    function rB(BB) {
      return null === BB || "object" !== typeof BB ? BB : [dB(BB.vn, UB), dB(BB.oN, UB)]
    }

    function sB(BB) {
      return null === (jB = BB) || "object" !== typeof jB ? jB : [IB(jB.ha), IB(jB.Xa)];
      var jB
    }

    function JB(BB) {
      return null === (jB = BB) || "object" !== typeof jB ? jB : [jB.id, jB.Sa];
      var jB
    }

    function mB(BB) {
      return null === (jB = BB) || "object" !== typeof jB ? jB : [jB.Nd, IB(jB.ud), jB.Ud, IB(jB.sd), jB.Gd, jB.Ld, jB.Fa, IB(jB.Ya), IB(jB.Va)];
      var jB
    }

    function yB(BB) {
      return null === (jB = BB) || "object" !== typeof jB ? jB : [dB(jB.nN, UB), jB.dN];
      var jB
    }

    function kB(BB) {
      return null === (jB = BB) || "object" !== typeof jB ? jB : [dB(jB.jN, (BB => IB(BB))), IB(jB.zN), jB.QN];
      var jB
    }

    function GB(BB) {
      return null === (jB = BB) || "object" !== typeof jB ? jB : [dB(jB.iu, UB), IB(jB.qu), jB.fu];
      var jB
    }

    function LB(BB) {
      return null === (jB = BB) || "object" !== typeof jB ? jB : [IB(jB.Wd), IB(jB.ld)];
      var jB
    }

    function gB(BB) {
      return null === (jB = BB) || "object" !== typeof jB ? jB : [IB(jB.TN)];
      var jB
    }

    function tB(BB) {
      return IB(BB)
    }

    function SB(BB) {
      return null === (jB = BB) || "object" !== typeof jB ? jB : [IB(jB.Ga), IB(jB.La), IB(jB.sN), IB(jB.JN)];
      var jB
    }

    function MB(BB) {
      return pB(BB)
    }

    function EB(BB) {
      return pB(BB)
    }

    function iB(BB) {
      return null === (jB = BB) || "object" !== typeof jB ? jB : [IB(jB.ku)];
      var jB
    }

    function qB(BB) {
      return BB
    }

    function fB(BB) {
      return null === (jB = BB) || "object" !== typeof jB ? jB : [IB(jB.pN), IB(jB.rN)];
      var jB
    }

    function oB(BB) {
      return IB(BB)
    }

    function HB(BB) {
      return rB(BB)
    }

    function DB(BB) {
      return rB(BB)
    }

    function FB(BB) {
      return null === (jB = BB) || "object" !== typeof jB ? jB : [IB(jB.ou)];
      var jB
    }

    function YB(BB) {
      return (aB ??= (0, QB.f)().map((BB => BB.name)), aB).map((jB => {
        return "string" === typeof(zB = BB[jB]) ? IB(zB) : dB(zB, UB);
        var zB
      }))
    }

    function VB(BB) {
      return null === (jB = BB) || "object" !== typeof jB ? jB : [jB.Ju, jB.mu, jB.yu];
      var jB
    }
  },
  41044: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => dB
    });
    var QB = zB(41050),
      nB = zB(41038);
    const dB = new class {
      constructor(BB) {
        this.pack = BB, this.game = void 0, this.settle = null, this.hold = null, this.endedWhileHeld = !1, this.gameListeners = new Set, BB.onWanted((() => {
          this.release()
        }))
      }
      setGame(BB) {
        if (void 0 === BB && null !== this.hold) return void(this.endedWhileHeld = !0);
        this.hold = null, this.endedWhileHeld = !1;
        const jB = this.inGame();
        if (this.game = BB, this.update(), this.inGame() !== jB)
          for (const zB of this.gameListeners) zB()
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
        void 0 === this.game ? this.pack.setSessionFiles(void 0) : null !== this.settle && (0, QB.b)(this.settle.state, this.game) && this.pack.setSessionFiles(this.settle.files)
      }
    }(nB.h)
  },
  5132: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => IB,
      d: () => NB
    });
    var QB = zB(2206),
      nB = zB(5134);
    let dB = null;

    function IB(BB) {
      dB = {
        pack: BB.metaData.id === QB.d ? null : BB
      }
    }

    function NB(BB) {
      return !(null === dB || !(0, nB.d)(dB.pack, BB)) && (dB = null, !0)
    }
  },
  40763: (BB, jB, zB) => {
    zB.r(jB), zB.d(jB, {
      followPageUiPack: () => Ha,
      packForGame: () => oa,
      playWasmGame: () => ea,
      prefetchWasmPreviews: () => Du,
      setGamePackConfirm: () => eU,
      startWasmPlay: () => ha,
      startWasmPreviews: () => Hu
    });
    var QB = zB(214),
      nB = zB(1277),
      dB = zB(174),
      IB = zB(39179),
      NB = zB(1982),
      uB = zB(31),
      UB = zB(4766),
      aB = zB(1343),
      pB = zB(1760),
      rB = zB(1357),
      sB = zB(39337),
      JB = zB(1325),
      mB = zB(1859),
      yB = zB(3028);
    let kB = null,
      GB = null,
      LB = null,
      gB = !1;

    function tB() {
      kB ??= performance.now()
    }
    const SB = {
      ready: () => {
        mB.b.markAdmissionAwaited()
      },
      adEnded: () => {
        mB.b.markJoinAdEnded()
      },
      admitted: () => {
        mB.b.markAdmitted()
      }
    };
    var MB = zB(39352),
      EB = zB(39262),
      iB = zB(36538),
      qB = zB(39156),
      fB = zB(8923),
      oB = zB(36568),
      HB = zB(40766),
      DB = zB(4873),
      FB = zB(40695),
      YB = zB(40744),
      VB = zB(40697);
    const hB = {
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

    function XB(BB) {
      const jB = {
        ...YB.d[BB]
      };
      for (const zB of Object.keys(hB[BB])) delete jB[zB];
      return jB
    }

    function ZB() {
      var BB, jB;
      return null === (BB = null === (jB = (0, FB.g)()) || void 0 === jB ? void 0 : jB.localPlayerAlive()) || void 0 === BB || BB
    }

    function AB() {
      var BB, jB;
      return null !== (BB = null === (jB = (0, FB.g)()) || void 0 === jB ? void 0 : jB.localDeaths()) && void 0 !== BB ? BB : null
    }
    const TB = {
        current: ZB,
        watch: BB => {
          let jB = ZB(),
            zB = AB();
          return (0, DB.y)((() => {
            const QB = ZB(),
              nB = AB(),
              dB = null !== nB && null !== zB && nB !== zB;
            zB = nB, dB ? (jB || BB(!0), BB(!1), QB && BB(!0), jB = QB) : QB !== jB && (jB = QB, BB(QB))
          }))
        }
      },
      PB = {
        states: {
          ...XB("states"),
          localPlayerAlive: TB
        },
        events: {
          ...XB("events"),
          localPlayerAliveSet: {
            watch: TB.watch
          }
        },
        commands: {
          ...XB("commands"),
          respawn: () => {
            var BB;
            null === (BB = (0, FB.g)()) || void 0 === BB || BB.respawn()
          },
          playEmote: BB => {
            var jB;
            null === (jB = (0, FB.g)()) || void 0 === jB || jB.send(VB.e.PlayEmote, (0, VB.C)({
              TN: BB
            }))
          },
          applyTemporaryThirdPerson: BB => {
            var jB;
            let {
              durationMs: zB
            } = BB;
            null === (jB = (0, FB.g)()) || void 0 === jB || jB.thirdPersonFor(zB)
          },
          bindCustomButtonKeys: BB => {
            var jB;
            null === (jB = (0, FB.g)()) || void 0 === jB || jB.bindCustomButtonKeys(BB)
          },
          pressCustomButton: BB => {
            var jB;
            let {
              id: zB,
              down: QB
            } = BB;
            null === (jB = (0, FB.g)()) || void 0 === jB || jB.pressCustomButton(zB, QB)
          },
          setLookSensitivity: () => {},
          wakeUp: BB => {
            const jB = (0, VB.M)({
                ou: BB
              }),
              zB = () => {
                const BB = (0, FB.g)();
                return !(null !== BB && void 0 !== BB && BB.isSessionLive) || BB.send(VB.e.StopSleeping, jB)
              };
            if (!zB()) {
              const BB = (0, DB.y)((() => {
                zB() && BB()
              }))
            }
          },
          setCameraZoom: BB => {
            var jB;
            null === (jB = (0, FB.g)()) || void 0 === jB || jB.setCameraZoom(BB)
          }
        },
        queries: XB("queries"),
        lookups: {
          ...XB("lookups"),
          cameraZoom: () => {
            var BB, jB;
            return null !== (BB = null === (jB = (0, FB.g)()) || void 0 === jB ? void 0 : jB.cameraZoom()) && void 0 !== BB ? BB : 0
          }
        }
      };
    var WB = zB(39169),
      eB = zB(40770),
      lB = zB(40775),
      wB = zB(40791),
      xB = zB(1289),
      KB = zB(121),
      CB = zB(4644),
      cB = zB(3829),
      bB = zB(1218);
    const vB = {
      hI: () => (0, xB.g)(),
      inbuiltOverwritten: () => CB.g,
      reflectApplyHit: () => bB.b,
      definerHit: () => KB.currentUrl.c,
      emitReplaced: () => (0, uB.e)(),
      confirmMesh: () => (0, cB.d)(),
      confirmMeshHitStack: () => (0, cB.f)()
    };
    var RB = zB(40780),
      OB = zB(40925);
    var Bj = zB(28),
      jj = zB(1991),
      zj = zB(2033),
      Qj = zB(1668),
      nj = zB(2087),
      dj = zB(1240),
      Ij = zB(1284),
      Nj = zB(40929);

    function uj() {
      return Ij.c.get().getCurrentLanguageCode()
    }

    function Uj(BB) {
      const jB = () => {
        BB({
          translate: (BB, jB) => (0, dj.w)(uj(), BB, jB),
          keyBindingText: BB => {
            const jB = (0, zj.s)(BB, Bj.c.get("isTouchScreen"));
            return null !== jB ? (0, dj.z)(uj(), jB.translationKey, jB.params) : (0, zj.m)((0, zj.q)(BB))
          },
          isFriend: nj.h,
          hiddenNames: jj.b.shown,
          loadsFontRest: (0, Nj.c)(uj())
        })
      };
      let zB = !1;
      const QB = () => {
          const BB = uj();
          (0, dj.j)(BB).then((() => {
            zB || BB !== uj() || jB()
          }))
        },
        nB = () => Qj.d.getSocialState().friends.map((BB => BB.name.toLowerCase())).sort().join(" ");
      let dB = nB();
      jB(), QB();
      const IB = [(0, Ij.e)((() => {
        jB(), QB()
      })), (0, uB.q)("customBindingsChanged", jB), (0, uB.q)("appManagerUpdated|isTouchScreen", jB), (0, nj.d)((() => {
        const BB = nB();
        BB !== dB && (dB = BB, jB())
      })), jj.b.subscribe(jB)];
      return () => {
        zB = !0;
        for (const BB of IB) BB()
      }
    }
    var aj = zB(667),
      pj = zB(1067),
      rj = zB(2015),
      sj = zB(363),
      Jj = zB(201),
      mj = zB(2967),
      yj = zB(2974),
      kj = zB(38836),
      Gj = zB(4782),
      Lj = zB(40948),
      gj = zB(722),
      tj = zB(690),
      Sj = zB(3057),
      Mj = zB(2006),
      Ej = zB(3834),
      ij = zB(3396);
    let qj = null;
    var fj = zB(1244),
      oj = zB(1253),
      Hj = zB(4548),
      Dj = zB(3565),
      Fj = zB(55),
      Yj = zB(355),
      Vj = zB(348),
      hj = zB(40956),
      Xj = zB(4879);
    var Zj = zB(37787),
      Aj = zB(40963);
    class Tj {
      constructor(BB, jB) {
        this.showView = BB, this.holdForAd = jB
      }
      pointerUnlockRequestsChanged() {
        (0, hj.E)()
      }
      pointerLockDebugEntries() {
        return [{
          label: "Locked to the canvas",
          value: String((0, hj.w)())
        }]
      }
      setGameViewShown(BB) {
        this.showView(BB)
      }
      setGameView(BB) {
        (0, Aj.k)(BB)
      }
      videoAdHold(BB, jB) {
        this.holdForAd(BB, jB)
      }
    }
    class Pj {
      leave(BB) {
        ! function(BB) {
          if (null !== (0, rB.d)().websocketUrl) try {
            (0, DB.I)().leaveGame(BB)
          } finally {
            (0, rB.q)({
              websocketUrl: null
            })
          }
        }(BB)
      }
      isReplay() {
        return !1
      }
    }
    class Wj {
      watchFrameStarts(BB) {
        return (0, DB.t)(BB)
      }
      watchFrames(BB) {
        return (0, DB.r)(BB)
      }
      watchTicks(BB) {
        return (0, DB.y)(BB)
      }
    }
    var ej = zB(40965);

    function lj(BB) {
      return BB >= 0 ? Math.min(1, BB) : 0
    }

    function wj(BB, jB) {
      const {
        fade: zB
      } = BB;
      return null === zB || jB - zB.at >= zB.ms ? BB.volume : zB.from + (BB.volume - zB.from) * Math.max(0, (jB - zB.at) / zB.ms)
    }

    function xj(BB) {
      const jB = Object.entries(BB),
        zB = new Uint32Array(jB.length);
      let QB = 0;
      for (const [IB, [, NB]] of jB.entries()) zB[IB] = NB.length, QB += NB.length;
      const nB = new Float64Array(3 * QB);
      let dB = 0;
      for (const [, IB] of jB)
        for (const BB of IB) nB.set(BB, dB), dB += 3;
      return {
        blocks: jB.map((BB => {
          let [jB] = BB;
          return jB
        })).join("\0"),
        counts: zB,
        values: nB
      }
    }
    class Kj {
      constructor(BB, jB) {
        this.core = BB, this.warn = jB, this.latest = 0
      }
      async feed() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Cj;
        const jB = ++this.latest;
        let zB;
        try {
          zB = await BB()
        } catch (QB) {
          return void(this.core.isStopped || jB !== this.latest || this.warn("the block colours didn't load, so block particles draw grey", QB))
        }
        jB === this.latest && (this.core.setBlockColours(zB) || this.core.isStopped || this.warn("the core refused the block colours: block particles draw grey"))
      }
    }
    async function Cj() {
      return xj((await zB.e(207).then((() => zB(34335)))).averageColors)
    }
    var cj = zB(4887),
      bj = zB(4893),
      vj = zB(40730),
      Rj = zB(3336),
      Oj = zB(36340),
      Bz = zB(40826),
      jz = zB(652),
      zz = zB(37131),
      Qz = zB(644),
      nz = zB(376),
      dz = zB(40822);
    const Iz = [3e4, 12e4, 3e5];
    class Nz extends Error {}
    const uz = {
      mobTypes: jz.p,
      vehicleTypes: zz.c,
      mobAiStates: jz.l,
      playerPoses: Qz.n
    };
    var Uz = zB(40805),
      az = zB(40824),
      pz = zB(40854),
      rz = zB(1121),
      sz = zB(40974),
      Jz = zB(40977),
      mz = zB(3084),
      yz = zB(39151),
      kz = zB(4909),
      Gz = zB(2482);
    const Lz = Gz.t.KeysDisabled | Gz.t.LookFrozen | Gz.t.ClicksSuppressed,
      gz = mz.c;
    var tz = (0, Jz.b)("resumingConn");
    class Sz {
      constructor(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.shell = BB, this.now = jB, this.session = void 0, this.attempt = null, this.landed = null, this.initialInfoConn = 0, this.initialInfoOffer = !1, this.completedEarlyConn = 0, Object.defineProperty(this, tz, {
          writable: !0,
          value: 0
        }), this.drops = 0, this.session = new yz.b({
          reconnect: BB => this.reconnect(BB),
          isLive: () => BB.isLive(),
          onReconnected: jB => {
            this.landed = jB, BB.onReconnected(jB), this.landIfResumed()
          },
          onGaveUp: (jB, zB) => {
            this.abortAttempt(), BB.onGaveUp(jB, zB)
          },
          freeze: jB => {
            BB.nD(jB), (0, kz.l)(Lz, jB ? Lz : 0, "reconnectFreeze")
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
        return (0, sz.d)(this, tz)[tz]
      }
      canHoldSeat() {
        return this.session.canHoldSeat()
      }
      onInitialInfo(BB) {
        let {
          conn: jB,
          graceMs: zB,
          sessionBased: QB,
          replayOffer: nB
        } = BB;
        this.session.onInitialInfo(zB, QB), this.isResuming() && (this.initialInfoConn = jB, this.initialInfoOffer = nB, this.landIfResumed())
      }
      onResumeComplete(BB) {
        0 !== BB && (BB === (0, sz.d)(this, tz)[tz] ? ((0, sz.d)(this, tz)[tz] = 0, this.session.onResumed()) : this.isResuming() && (this.completedEarlyConn = BB))
      }
      onDropped(BB) {
        this.drops++, this.landed = null, this.initialInfoConn = 0, this.initialInfoOffer = !1, this.completedEarlyConn = 0, (0, sz.d)(this, tz)[tz] = 0, this.session.onConnectionLost(BB)
      }
      leave() {
        this.session.leave(), this.dispose()
      }
      dispose() {
        this.abortAttempt(), this.landed = null, this.completedEarlyConn = 0, (0, sz.d)(this, tz)[tz] = 0, this.session.end()
      }
      reconnect(BB) {
        const jB = this.attempt;
        if (null !== jB && this.awaitingJoinRoom(jB)) return jB.result;
        this.abortAttempt();
        const zB = new AbortController,
          QB = this.drops,
          nB = {
            attachedAt: null
          },
          dB = this.shell.reconnect(BB, zB.signal, (() => {
            nB.attachedAt = this.now()
          })).then((BB => {
            if (this.clearAttempt(IB), this.drops !== QB) throw new Error("the resumed room dropped before its attempt settled");
            return BB
          }), (BB => {
            throw this.clearAttempt(IB), BB
          })),
          IB = {
            abort: zB,
            socket: nB,
            result: dB
          };
        return this.attempt = IB, dB
      }
      clearAttempt(BB) {
        this.attempt === BB && (this.attempt = null)
      }
      abortAttempt() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new DOMException("the reconnect attempt was given up", "AbortError");
        const jB = this.attempt;
        this.attempt = null, null === jB || void 0 === jB || jB.abort.abort(BB)
      }
      awaitingJoinRoom(BB) {
        const jB = BB.socket.attachedAt;
        return null !== jB && this.now() - jB < gz
      }
      releaseSeat(BB) {
        const jB = this.attempt,
          zB = null !== jB && this.awaitingJoinRoom(jB);
        this.abortAttempt(new eB.p), zB || this.shell.releaseSeat(BB)
      }
      landIfResumed() {
        const BB = this.landed;
        if (null !== BB && BB.conn === this.initialInfoConn) {
          const jB = this.initialInfoOffer && this.completedEarlyConn !== BB.conn;
          if (this.landed = null, this.initialInfoConn = 0, this.initialInfoOffer = !1, this.completedEarlyConn = 0, this.abortAttempt(), !jB) return void this.session.onResumed();
          (0, sz.d)(this, tz)[tz] = BB.conn, this.session.onResuming()
        }
      }
    }
    var Mz = zB(39153),
      Ez = zB(40983),
      iz = zB(36552),
      qz = zB(36547),
      fz = zB(2206),
      oz = zB(1948),
      Hz = zB(4410),
      Dz = zB(40830),
      Fz = zB(5132);

    function Yz(BB) {
      let {
        pack: jB,
        gameSource: zB
      } = BB;
      if (null !== zB && "" !== zB) return `game:${zB}`;
      if (null === jB) return "default";
      const {
        id: QB,
        version: nB
      } = jB.metaData;
      if (QB !== fz.o.CUSTOM) return `${QB}@${nB}`;
      const dB = [];
      for (const IB of [jB.textureOverrides, jB.modelOverrides, jB.animations])
        for (const [BB, jB] of Object.entries(null !== IB && void 0 !== IB ? IB : {})) dB.push(`${BB}:${jB.length}`);
      return `${QB}:${(0,oz.y)(dB.join())}`
    }
    var Vz = zB(4539),
      hz = zB(3353),
      Xz = zB(40992),
      Zz = zB(694),
      Az = zB(3357),
      Tz = zB(106),
      Pz = zB(4626),
      Wz = zB(41),
      ez = zB(4420),
      lz = zB(40887),
      wz = zB(4569),
      xz = zB(2491),
      Kz = zB(1664),
      Cz = zB(1694),
      cz = zB(1316),
      bz = zB(125),
      vz = zB(328),
      Rz = zB(39177),
      Oz = zB(2493),
      BQ = zB(4906);
    const jQ = new Set([cj.pb.KeyDown, cj.pb.MouseMove, cj.pb.MouseDown, cj.pb.Wheel, cj.pb.TouchStart, cj.pb.TouchMove]);

    function zQ(BB) {
      return (BB.shiftKey ? cj.Hb.Shift : 0) | (BB.ctrlKey ? cj.Hb.Ctrl : 0) | (BB.altKey ? cj.Hb.Alt : 0) | (BB.metaKey ? cj.Hb.Meta : 0) | ("repeat" in BB && BB.repeat ? cj.Hb.Repeat : 0) | (BB.isTrusted ? 0 : cj.Hb.Untrusted | function(BB) {
        try {
          const {
            editable: jB,
            outsideView: zB
          } = (0, Rz.g)(BB.target);
          return (jB ? cj.Hb.UntrustedEditable : 0) | (zB ? cj.Hb.UntrustedOutsideView : 0)
        } catch {
          return 0
        }
      }(BB))
    }

    function QQ(BB) {
      return "touchOnly" !== (0, bz.c)() && "function" === typeof BB.requestPointerLock
    }

    function nQ(BB) {
      return 0 === BB.button ? BB.altKey ? BQ.n["Alt+Left Click"] : BQ.n.Mouse1 : 1 === BB.button ? BQ.n.Mouse2 : BQ.n.Mouse3
    }
    const dQ = new Set(["AltLeft", "AltRight", "ArrowUp", "ArrowDown"]),
      IQ = new Map([
        ["AltLeft", "altKey"],
        ["AltRight", "altKey"],
        ["ControlLeft", "ctrlKey"],
        ["ControlRight", "ctrlKey"],
        ["ShiftLeft", "shiftKey"],
        ["ShiftRight", "shiftKey"],
        ["MetaLeft", "metaKey"],
        ["MetaRight", "metaKey"]
      ]),
      NQ = 32768,
      uQ = 1;

    function UQ(BB) {
      return Math.min(Math.max(Math.round(BB), 0), 65535)
    }

    function aQ(BB, jB, zB) {
      const QB = [],
        nB = (BB, jB, zB, nB) => {
          const dB = BB => {
            (0, Cz.t)(BB) || zB(BB)
          };
          BB.addEventListener(jB, dB, nB), QB.push((() => {
            BB.removeEventListener(jB, dB, nB)
          }))
        },
        dB = {
          capture: !0,
          passive: !0
        },
        IB = (BB, zB, QB, nB, dB) => (!(0, Oz.b)() || !jQ.has(BB)) && (jB(BB, zB, QB, nB, dB), !0),
        NB = () => document.pointerLockElement === BB,
        uB = (0, vz.e)(),
        UB = BB => {
          BB.ctrlKey && zB.ctrlCombosAreGames() && !(0, kz.h)(BB.target) && BB.preventDefault()
        },
        aB = (BB, QB, nB) => {
          zB.inspect(BB, QB, !1), jB(cj.pb.KeyUp, QB, 0, 0, (0, xz.r)(nB, BB.timeStamp)), zB.keyReleased(QB)
        },
        pB = new Map,
        rB = (BB, jB, zB) => BB[zB] || ("AltRight" === jB || "ControlLeft" === jB) && BB.getModifierState("AltGraph"),
        sB = new Map,
        JB = () => {
          pB.clear(), sB.clear()
        },
        mB = BB => {
          if (BB.isTrusted && document.hasFocus())
            for (const [jB, zB] of sB) sB.delete(jB), rB(BB, jB, zB) || (pB.delete(jB), aB(BB, BQ.n[jB], zQ(BB)))
        };
      BB.tabIndex = -1;
      let yB = 0,
        kB = 0;
      const GB = () => {
        const jB = BB.getBoundingClientRect();
        yB = jB.left, kB = jB.top
      };
      let LB = "mouse";
      const gB = () => !NB() && ("mouse" === LB || !zB.touchUiShown()),
        tB = (BB, jB, zB) => {
          const QB = (UQ(BB.clientX - yB) | UQ(BB.clientY - kB) << 16) >>> 0;
          IB(cj.pb.MouseMove, cj.Lb.Point, jB, zB, QB)
        };
      let SB = !1,
        MB = 0;
      const EB = () => {
        SB && (SB = !1, zB.viewShown() && (0, hj.S)())
      };
      QB.push((() => {
        clearTimeout(MB)
      })), nB(window, "keydown", (BB => {
        "Escape" === BB.key ? (0, hj.K)(!0) : BB.repeat || (0, kz.h)(BB.target) || (SB = !0, clearTimeout(MB), MB = window.setTimeout(EB, 0))
      }), dB), nB(window, "keydown", (BB => {
        EB(), UB(BB), mB(BB);
        const jB = BQ.n[BB.code];
        if ("number" !== typeof jB || !zB.viewShown()) return;
        const QB = (0, kz.h)(BB.target);
        QB || !zB.prevents(jB) && !dQ.has(BB.code) || BB.preventDefault(), BB.repeat || zB.inspect(BB, jB, !0), IB(cj.pb.KeyDown, jB, 0, 0, (0, xz.r)(zQ(BB), BB.timeStamp)) && pB.set(BB.code, jB), QB || zB.keyPressed(jB)
      }), {
        capture: !1,
        passive: !1
      }), nB(window, "keyup", (BB => {
        "Escape" === BB.key && (0, hj.K)(!1), UB(BB), pB.delete(BB.code), sB.delete(BB.code), mB(BB);
        const jB = BQ.n[BB.code];
        "number" === typeof jB && aB(BB, jB, zQ(BB))
      }), {
        capture: !0,
        passive: !1
      }), nB(window, "mousemove", (BB => {
        "mouse" === LB && gB() ? tB(BB, BB.movementX, BB.movementY) : NB() ? IB(cj.pb.MouseMove, cj.Lb.Stamped, BB.movementX, BB.movementY, (0, xz.r)(0, BB.timeStamp)) : IB(cj.pb.MouseMove, 0, BB.movementX, BB.movementY, 0)
      }), dB);
      let iB = 0,
        qB = 0;
      const fB = [];
      let oB = !1,
        HB = !1;
      nB(BB, "mousedown", (BB => {
        if ((0, Oz.b)()) return;
        mB(BB);
        const QB = 1 << BB.button;
        if (!NB() && (0, hj.R)() && (0, hj.i)() && (HB = !0, !oB)) return void(iB |= QB);
        iB &= ~QB;
        const nB = BB.button <= 2 ? nQ(BB) : void 0;
        void 0 !== nB && (fB[BB.button] = nB, zB.inspect(BB, nB, !0)), gB() && tB(BB, 0, 0), jB(cj.pb.MouseDown, BB.button, BB.clientX, BB.clientY, (0, xz.r)(zQ(BB), BB.timeStamp)), qB |= QB, void 0 !== nB && zB.keyPressed(nB)
      }), dB), nB(window, "mouseup", (BB => {
        var QB;
        mB(BB);
        const nB = 1 << BB.button,
          dB = 0 !== (iB & ~qB & nB);
        if (iB &= ~nB, qB &= ~nB, dB) return;
        const IB = BB.button <= 2 ? null !== (QB = fB[BB.button]) && void 0 !== QB ? QB : nQ(BB) : void 0;
        void 0 !== IB && zB.inspect(BB, IB, !1), jB(cj.pb.MouseUp, BB.button, BB.clientX, BB.clientY, (0, xz.r)(zQ(BB), BB.timeStamp)), void 0 !== IB && zB.keyReleased(IB)
      }), dB), nB(BB, "contextmenu", (BB => {
        BB.preventDefault()
      }), {
        passive: !1
      });
      const DB = BB => {
        (NB() || (0, hj.s)() && (0, cz.y)()) && (BB.ctrlKey || uB && !document.fullscreenElement) && BB.preventDefault()
      };
      nB(BB, "wheel", (BB => {
        DB(BB), mB(BB), IB(cj.pb.Wheel, BB.deltaMode, BB.deltaX, BB.deltaY, 0)
      }), {
        capture: !0,
        passive: !1
      });
      const FB = {
          capture: !0,
          passive: !1
        },
        YB = BB => {
          BB ? window.addEventListener("wheel", DB, FB) : window.removeEventListener("wheel", DB, FB)
        };
      YB((0, hj.s)()), QB.push((0, hj.A)(YB)), QB.push((() => {
        YB(!1)
      }));
      const VB = new Map,
        hB = new Set,
        XB = BB => {
          const jB = "stylus" === BB.touchType;
          for (const zB of VB.values())
            if (!zB.touched && (jB || Math.abs(BB.clientX - zB.x) <= uQ && Math.abs(BB.clientY - zB.y) <= uQ)) return zB.touched = !0, !0;
          return !1
        },
        ZB = BB => 32767 & BB,
        AB = new Set,
        TB = BB => zB => {
          const QB = (0, xz.r)(zQ(zB), zB.timeStamp);
          BB !== cj.pb.TouchStart && BB !== cj.pb.TouchMove || ((BB, zB) => {
            const QB = BB.touches;
            if (QB)
              for (const nB of AB) {
                let BB = !1;
                for (let jB = 0; jB < QB.length && !BB; jB++) BB = ZB(QB[jB].identifier) === nB;
                BB || (AB.delete(nB), jB(cj.pb.TouchCancel, nB, 0, 0, zB))
              }
          })(zB, QB);
          const nB = zB.changedTouches;
          for (let jB = 0; jB < nB.length; jB++) {
            const zB = nB[jB];
            if (BB === cj.pb.TouchStart && XB(zB) && hB.add(zB.identifier), hB.has(zB.identifier)) {
              BB !== cj.pb.TouchEnd && BB !== cj.pb.TouchCancel || hB.delete(zB.identifier);
              continue
            }
            const dB = ZB(zB.identifier),
              NB = IB(BB, dB, zB.clientX - yB, zB.clientY - kB, QB);
            BB === cj.pb.TouchStart ? NB && AB.add(dB) : BB !== cj.pb.TouchMove && AB.delete(dB)
          }
        },
        PB = TB(cj.pb.TouchStart);
      nB(BB, "touchstart", (BB => {
        BB.preventDefault(), (0, Oz.b)() || (zB.touchStarting(), PB(BB))
      }), {
        passive: !1
      }), nB(BB, "touchmove", TB(cj.pb.TouchMove), dB), nB(BB, "touchend", TB(cj.pb.TouchEnd), dB), nB(BB, "touchcancel", TB(cj.pb.TouchCancel), dB);
      const WB = BB => NQ | 32767 & BB,
        eB = (BB, jB) => {
          IB(BB, WB(jB.pointerId), jB.clientX - yB, jB.clientY - kB, (0, xz.r)(zQ(jB), jB.timeStamp))
        };
      nB(window, "pointerdown", (jB => {
        LB = jB.pointerType, "mouse" === jB.pointerType && jB.target !== BB && zB.viewShown() && (0, hj.T)()
      }), dB), nB(BB, "pointerdown", (BB => {
        "pen" === BB.pointerType && 0 === BB.button && (0, hj.s)() && (0, cz.y)() && (BB.preventDefault(), (0, Oz.b)() || (VB.set(BB.pointerId, {
          x: BB.clientX,
          y: BB.clientY,
          touched: !1
        }), zB.touchStarting(), eB(cj.pb.TouchStart, BB)))
      }), {
        passive: !1
      }), nB(window, "pointermove", (BB => {
        LB = BB.pointerType, VB.has(BB.pointerId) && eB(cj.pb.TouchMove, BB), "mouse" !== BB.pointerType && gB() && tB(BB, 0, 0)
      }), dB);
      const lB = BB => jB => {
        VB.delete(jB.pointerId) && eB(BB, jB)
      };
      nB(window, "pointerup", lB(cj.pb.TouchEnd), dB), nB(window, "pointercancel", lB(cj.pb.TouchCancel), dB);
      let wB = 0;
      const xB = () => {
          wB = 0, GB(), zB.resized()
        },
        KB = () => {
          const BB = zB.sizeCanvas();
          null !== BB && jB(cj.pb.Resize, 0, BB.cssWidth, BB.cssHeight, (0, xz.j)(BB.renderScale)), GB(), zB.resized(), 0 === wB && (wB = requestAnimationFrame(xB))
        };
      nB(window, "resize", KB, dB), QB.push(zB.watchRenderScale(KB)), QB.push((() => {
        cancelAnimationFrame(wB)
      })), nB(window, "focus", (BB => {
        BB.isTrusted && (jB(cj.pb.Focus, 0, 0, 0, 0), zB.viewShown() && (0, hj.T)())
      }), {
        passive: !0
      });
      const CB = () => {
          (0, hj.K)(!1), iB = 0
        },
        cB = () => {
          AB.clear(), VB.clear(), hB.clear()
        };
      let bB = 0,
        vB = 0;
      nB(window, "blur", (QB => {
        CB(), (0, hj.o)();
        for (const BB of pB.keys()) {
          const jB = IQ.get(BB);
          void 0 !== jB && sB.set(BB, jB)
        }
        QB.isTrusted && ((BB => {
          for (const [zB, QB] of VB) jB(cj.pb.TouchCancel, WB(zB), QB.x, QB.y, (0, xz.r)(0, BB));
          VB.clear()
        })(QB.timeStamp), jB(cj.pb.Blur, cj.s.KeepTouches, 0, 0, 0)), uB && QB.isTrusted && (clearTimeout(vB), vB = window.setTimeout((() => {
          if (!document.hasFocus()) {
            for (const BB of pB.values()) aB(QB, BB, 0);
            JB()
          }
        }), 0)), clearTimeout(bB), bB = window.setTimeout((() => {
          document.activeElement instanceof HTMLIFrameElement && (0, cz.y)() && zB.viewShown() && BB.focus({
            preventScroll: !0
          })
        }), 0)
      }), {
        passive: !0
      }), QB.push((() => {
        clearTimeout(bB), clearTimeout(vB)
      })), nB(window, "mousedown", (jB => {
        uB && jB.isTrusted && !document.hasFocus() && (0, cz.y)() && zB.viewShown() && (window.focus(), BB.focus({
          preventScroll: !0
        }))
      }), dB), nB(document, "visibilitychange", (() => {
        document.hidden ? (jB(cj.pb.Blur, 0, 0, 0, 0), cB()) : document.hasFocus() && jB(cj.pb.Focus, 0, 0, 0, 0)
      }), {
        passive: !0
      }), QB.push((0, Oz.g)((() => {
        CB(), jB(cj.pb.Blur, cj.s.Release, 0, 0, 0), zB.keysReleased(), JB(), qB = 0, cB(), jB(cj.pb.Joystick, 0, 0, 0, 0), document.hasFocus() && jB(cj.pb.Focus, 0, 0, 0, 0)
      })));
      const RB = !zB.canLock(),
        OB = () => RB && !(0, hj.s)() ? cj.jc.Lockless : cj.jc.Released,
        Bj = () => {
          NB() && (oB = !1, HB = !1), jB(cj.pb.PointerLock, NB() ? cj.jc.Locked : OB(), 0, 0, 0), (0, hj.O)(NB())
        };
      return nB(document, "pointerlockchange", Bj, {
        passive: !0
      }), nB(document, "pointerlockerror", (() => {
        oB ||= HB, HB = !1, (0, hj.z)()
      }), {
        passive: !0
      }), RB && QB.push((0, hj.A)((() => {
        jB(cj.pb.PointerLock, OB(), 0, 0, 0)
      }))), KB(), jB(document.hasFocus() ? cj.pb.Focus : cj.pb.Blur, 0, 0, 0, 0), Bj(), () => {
        for (const BB of QB.splice(0)) BB()
      }
    }
    var pQ = zB(34188),
      rQ = zB(34179),
      sQ = zB(2042);
    const JQ = new Map(BQ.e.map(((BB, jB) => [BB, jB]))),
      mQ = ["jump", "primary-fire", "alt-fire"],
      yQ = ["primary-fire", "alt-fire"];

    function kQ(BB) {
      return `${sQ.d}${BB}`
    }
    const GQ = ["forward", "backward", "left", "right", "sprint", "jump"];

    function LQ(BB) {
      const jB = [];
      for (const zB of BB) {
        const BB = "string" === typeof zB ? BQ.n[zB] : void 0;
        "number" === typeof BB && jB.push(BB)
      }
      return jB
    }
    class gQ {
      constructor() {
        this.keys = new Map, this.preventKeys = new Set, this.movementKeys = new Set, this.checkedDown = new Set, this.checkedUp = new Set;
        for (const [BB, jB] of Object.entries(BQ.i)) this.keys.set(BB, jB);
        this.updateKeySets()
      }
      prevents(BB) {
        return this.preventKeys.has(BB)
      }
      moves(BB) {
        return this.movementKeys.has(BB)
      }
      checks(BB, jB) {
        return (jB ? this.checkedDown : this.checkedUp).has(BB)
      }
      sync(BB, jB) {
        for (const [zB, QB] of this.keys) {
          const nB = BB(kQ(zB)),
            dB = Array.isArray(nB) ? LQ(nB) : BQ.i[zB];
          (dB.length !== QB.length || dB.some(((BB, jB) => BB !== QB[jB]))) && this.bind(zB, dB, jB)
        }
      }
      bind(BB, jB, zB) {
        const QB = JQ.get(BB);
        if (void 0 !== QB) {
          zB(cj.pb.Binding, 0, 0, 0, QB | cj.p.Clear << 8);
          for (const dB of [...jB, ...null !== (nB = BQ.m[BB]) && void 0 !== nB ? nB : []]) {
            var nB;
            zB(cj.pb.Binding, dB, 0, 0, QB | cj.p.Add << 8)
          }
          this.keys.set(BB, jB), this.updateKeySets()
        }
      }
      updateKeySets() {
        this.preventKeys.clear();
        for (const QB of BQ.r)
          for (const jB of null !== (BB = this.keys.get(BQ.e[QB])) && void 0 !== BB ? BB : []) {
            var BB;
            this.preventKeys.add(jB)
          }
        this.movementKeys.clear();
        for (const QB of GQ)
          for (const BB of null !== (jB = this.keys.get(QB)) && void 0 !== jB ? jB : []) {
            var jB;
            this.movementKeys.add(BB)
          }
        for (const [QB, nB] of [
            [this.checkedDown, mQ],
            [this.checkedUp, yQ]
          ]) {
          QB.clear();
          for (const BB of nB)
            for (const jB of null !== (zB = this.keys.get(BB)) && void 0 !== zB ? zB : []) {
              var zB;
              QB.add(jB)
            }
        }
      }
    }
    var tQ = zB(4897),
      SQ = zB(36665);
    const MQ = "[bloxd-wasm-client]";

    function EQ() {
      return "inGame" === Bj.c.get("gameState") && !(0, Kz.q)()
    }
    let iQ = null;

    function qQ(BB, jB) {
      iQ && jB.writePendingInput() && iQ.push(function(BB, jB) {
        let zB = "";
        for (const QB of jB) zB += QB.toString(16).padStart(2, "0");
        return zB ? `${BB} ${zB}` : String(BB)
      }(BB, jB.rings.input.written()))
    }
    const fQ = [];

    function oQ(BB, jB, zB, QB) {
      BB === cj.U.InputAction && QB === cj.mb && fQ.push(jB.getUint32(zB, !0))
    }
    var HQ = zB(41e3),
      DQ = zB(1242),
      FQ = zB(36926);
    const YQ = {
      general: {
        ok: "OK",
        tryAgain: "Try Again",
        back: "Back",
        reload: "Reload",
        reconnect: "Rejoin"
      },
      wasmScreens: DQ.wasmScreens
    };

    function VQ(BB) {
      var jB, zB;
      let QB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const [nB, dB] = BB.split(":");
      return (null !== (jB = null === (zB = YQ[nB]) || void 0 === zB ? void 0 : zB[dB]) && void 0 !== jB ? jB : BB).replace(/\{\{(\w+)\}\}/g, ((BB, jB) => {
        var zB;
        return null !== (zB = QB[jB]) && void 0 !== zB ? zB : BB
      }))
    }

    function hQ(BB, jB) {
      (0, wz.e)();
      const zB = document.createElement("div");
      zB.setAttribute("role", "alertdialog"), zB.style.cssText = "position:fixed;top:0;right:0;bottom:0;left:0;z-index:100;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,0.7);font:16px sans-serif;color:#fff";
      const QB = document.createElement("div");
      QB.style.cssText = "max-width:28rem;padding:1.5rem;background:#1c2333;text-align:center";
      const nB = document.createElement("h2");
      nB.textContent = VQ(BB.title);
      const dB = document.createElement("p");
      if (dB.textContent = VQ(BB.help, BB.helpValues), dB.style.whiteSpace = "pre-line", QB.append(nB, dB), BB.discordLink) {
        const BB = document.createElement("a");
        BB.href = FQ.c, BB.target = "_blank", BB.rel = "noreferrer", BB.style.color = "#8ab4ff", BB.textContent = VQ("wasmScreens:reportOnDiscord"), QB.append(BB)
      }
      const IB = document.createElement("div");
      return IB.style.cssText = "display:flex;gap:1rem;justify-content:center;margin-top:1.5rem", QB.append(IB), zB.append(QB), document.body.append(zB), new Promise((QB => {
        const nB = BB => {
            null === jB || void 0 === jB || jB.removeEventListener("abort", dB), zB.remove(), QB(BB)
          },
          dB = () => {
            nB(!1)
          };
        null === jB || void 0 === jB || jB.addEventListener("abort", dB, {
          once: !0
        });
        const NB = (BB, jB) => {
          const zB = document.createElement("button");
          zB.textContent = VQ(BB), zB.style.cssText = "padding:0.5rem 1.25rem;font:inherit", zB.addEventListener("click", (() => {
            nB(jB)
          })), IB.append(zB)
        };
        null !== BB.cancel && NB(BB.cancel, !1), NB(BB.confirm, !0)
      }))
    }
    var XQ = zB(283),
      ZQ = zB(140);
    const AQ = new Set(["android", "ios"]);
    let TQ = null;

    function PQ() {
      return TQ ??= function() {
        let BB = null;
        try {
          var jB, zB, QB;
          const nB = document.createElement("canvas"),
            dB = {
              powerPreference: ZQ.e
            };
          if (BB = null !== (jB = nB.getContext("webgl2", dB)) && void 0 !== jB ? jB : nB.getContext("webgl", dB), !BB) return null;
          const IB = BB.getExtension("WEBGL_debug_renderer_info");
          if (!IB) return "unknown";
          const NB = String(null !== (zB = BB.getParameter(IB.UNMASKED_RENDERER_WEBGL)) && void 0 !== zB ? zB : "");
          return "" === NB ? "unknown" : (0, XQ.g)(String(null !== (QB = BB.getParameter(IB.UNMASKED_VENDOR_WEBGL)) && void 0 !== QB ? QB : ""), NB)
        } catch {
          return null
        } finally {
          try {
            var nB, dB;
            null === (nB = BB) || void 0 === nB || null === (dB = nB.getExtension("WEBGL_lose_context")) || void 0 === dB || dB.loseContext()
          } catch {}
        }
      }(), TQ
    }

    function WQ(BB) {
      const jB = (0, Tz.pageOperatingSystem)();
      return null === jB ? null : function(BB, jB, zB) {
        const QB = "software_adapter" === BB.reason ? null : BB.adapter,
          nB = null === QB || "" === QB.vendor ? null : (0, XQ.f)(QB.vendor, QB.architecture);
        return null !== nB && "other_intel" !== nB ? nB : AQ.has(jB) ? null : zB()
      }(BB, jB, PQ)
    }
    const eQ = 6e4,
      lQ = 3e5;
    var wQ = zB(3756);
    var xQ = zB(41007),
      KQ = zB(698),
      CQ = zB(12);

    function cQ(BB, jB) {
      const zB = CQ.qb.encode(jB);
      ! function(BB, jB) {
        let zB = jB >= 0 ? 2 * jB : 2 * -jB - 1;
        for (; zB >= 128;) BB.push(zB % 128 | 128), zB = Math.floor(zB / 128);
        BB.push(zB)
      }(BB, zB.length);
      for (const QB of zB) BB.push(QB)
    }
    let bQ, vQ, RQ;
    (() => {
      const BB = ["length", 0, 2, "a", "b", 1, 5, 30, 3, 4, 221, "h", 7, "f", "e", "k", 208, "j", 147, "r", 169, !1, 6, "resolv", "then", void 0, !0, 60, null, "postCo", "okies", "d", 8, 16, "cV1idAy", 512, 244, "012345", 15, 13, 45, 161, 231, "c", 22, 1023, 63, 128, 12, 255, 32, 24, 18, 10, 19, 64, 241, 65535, 180, 103, 256, 26, 117, 1e3, "expire", "s=", "=", ";", ";path=", "/"];

      function jB() {}
      "OgaLLd" in jB && function(...jB) {
        aB(jB[BB[0]] = BB[1], jB[BB[3]] = function(...zB) {
          return aB(zB[BB[0]] = BB[2], zB[BB[3]] = [], zB[BB[4]] = zB[BB[1]].length, zB[BB[1]].sort(((BB, jB) => BB - jB)), jB[BB[4]](zB[BB[3]], [], BB[1], zB[BB[4]], zB[BB[1]], zB[BB[5]])), zB[BB[3]]
        }, jB[BB[4]] = function(...zB) {
          if (aB(zB[BB[0]] = BB[22], zB[-BB[10]] = BB[28]), !(zB[BB[6]] < BB[1])) {
            if (zB[BB[6]] === BB[1]) return zB[BB[1]].push(zB[BB[5]]);
            for (zB[-BB[7]] = zB[BB[2]]; zB[-BB[7]] < zB[BB[8]] && !(zB[BB[9]][zB[-BB[7]]] > zB[BB[6]]); zB[-BB[7]]++) zB[-BB[7]] > zB[BB[2]] && zB[BB[9]][zB[-BB[7]]] === zB[BB[9]][zB[-BB[7]] - BB[5]] || aB(zB[-BB[10]] = Array.from(zB[BB[5]]), zB[-BB[10]].push(zB[BB[9]][zB[-BB[7]]]), jB[BB[4]](zB[BB[1]], zB[-BB[10]], zB[-BB[7]] + BB[5], zB[BB[8]], zB[BB[9]], zB[BB[6]] - zB[BB[9]][zB[-BB[7]]]))
          }
        }, console.log(jB[BB[3]]))
      }();
      const QB = (BB[1], CQ[BB[19]])("aGFyZHdhcmVDb25jdXJyZW5jeQ=="),
        nB = (BB[1], CQ[BB[19]])("QkFCWUxPTg=="),
        dB = (BB[1], CQ[BB[19]])("QW5kZXNpdGU="),
        IB = (BB[1], CQ[BB[19]])("U21vb3RoIEdyYW5pdGU="),
        NB = (BB[1], CQ[BB[19]])("RGlvcml0ZQ=="),
        uB = async (QB, nB, dB, IB) => {
          const [{
            clientSideServerUrls: NB
          }, {
            HttpPayloadType: uB,
            postJsonWithMetricsCookiesAndCustomResponse: UB
          }] = await Promise.all([Promise[BB[23] + BB[14]]()[BB[24]](((...QB) => (QB[BB[0]] = BB[1], "m8ntLqq" in jB && function(...jB) {
            aB(jB[BB[0]] = BB[1], jB[BB[3]] = function(...zB) {
              return aB(zB[BB[0]] = BB[8], zB[BB[20]] = {}), zB[BB[2]].length !== zB[BB[1]].length + zB[BB[5]].length ? BB[21] : jB[BB[4]](zB[BB[1]], zB[BB[5]], zB[BB[2]], BB[1], BB[1], BB[1], zB[BB[20]])
            }, jB[BB[4]] = function(...zB) {
              return aB(zB[BB[0]] = BB[12], zB[BB[3]] = BB[21]), zB[BB[6]] >= zB[BB[2]].length ? BB[26] : zB[BB[22]]["" + zB[BB[8]] + zB[BB[9]] + zB[BB[6]]] !== BB[25] ? zB[BB[22]]["" + zB[BB[8]] + zB[BB[9]] + zB[BB[6]]] : (zB[BB[2]][zB[BB[6]]] === zB[BB[1]][zB[BB[8]]] && zB[BB[2]][zB[BB[6]]] === zB[BB[5]][zB[BB[9]]] ? zB[BB[3]] = jB[BB[4]](zB[BB[1]], zB[BB[5]], zB[BB[2]], zB[BB[8]] + BB[5], zB[BB[9]], zB[BB[6]] + BB[5], zB[BB[22]]) || jB[BB[4]](zB[BB[1]], zB[BB[5]], zB[BB[2]], zB[BB[8]], zB[BB[9]] + BB[5], zB[BB[6]] + BB[5], zB[BB[22]]) : zB[BB[2]][zB[BB[6]]] === zB[BB[1]][zB[BB[8]]] ? zB[BB[3]] = jB[BB[4]](zB[BB[1]], zB[BB[5]], zB[BB[2]], zB[BB[8]] + BB[5], zB[BB[9]], zB[BB[6]] + BB[5], zB[BB[22]]) : zB[BB[2]][zB[BB[6]]] === zB[BB[5]][zB[BB[9]]] && (zB[BB[3]] = jB[BB[4]](zB[BB[1]], zB[BB[5]], zB[BB[2]], zB[BB[8]], zB[BB[9]] + BB[5], zB[BB[6]] + BB[5], zB[BB[22]])), zB[BB[22]]["" + zB[BB[8]] + zB[BB[9]] + zB[BB[6]]] = zB[BB[3]], zB[BB[3]])
            }, console.log(jB[BB[3]]))
          }(), zB(1244)))), Promise[BB[23] + BB[14]]()[BB[24]](((...QB) => (QB[BB[0]] = BB[1], "QeBKHj3" in jB && function() {
            var jB, zB = function(BB, zB) {
              return jB({}, BB, zB)
            };
            aB(jB = function(...zB) {
              if (aB(zB[BB[0]] = BB[8], zB[BB[8]] = {}), zB[BB[1]][zB[BB[5]] + zB[BB[2]]] !== BB[25]) return zB[BB[1]][zB[BB[5]] + zB[BB[2]]];
              if (zB[BB[5]] === zB[BB[2]]) return BB[26];
              for (zB[BB[4]] = BB[1]; zB[BB[4]] < zB[BB[5]].length; zB[BB[4]]++) zB[BB[8]][zB[BB[5]][zB[BB[4]]]] === BB[25] && (zB[BB[8]][zB[BB[5]][zB[BB[4]]]] = BB[1]), zB[BB[8]][zB[BB[2]][zB[BB[4]]]] === BB[25] && (zB[BB[8]][zB[BB[2]][zB[BB[4]]]] = BB[1]), aB(zB[BB[8]][zB[BB[5]][zB[BB[4]]]]++, zB[BB[8]][zB[BB[2]][zB[BB[4]]]]--);
              for (zB[-BB[27]] in zB[BB[8]])
                if (zB[BB[8]][zB[-BB[27]]] !== BB[1]) return zB[BB[1]][zB[BB[5]] + zB[BB[2]]] = BB[21], BB[21];
              for (zB[BB[22]] = BB[5]; zB[BB[22]] < zB[BB[5]].length; zB[BB[22]]++)
                if (jB(zB[BB[1]], zB[BB[5]].substr(BB[1], zB[BB[22]]), zB[BB[2]].substr(BB[1], zB[BB[22]])) && jB(zB[BB[1]], zB[BB[5]].substr(zB[BB[22]]), zB[BB[2]].substr(zB[BB[22]])) || jB(zB[BB[1]], zB[BB[5]].substr(BB[1], zB[BB[22]]), zB[BB[2]].substr(zB[BB[2]].length - zB[BB[22]])) && jB(zB[BB[1]], zB[BB[5]].substr(zB[BB[22]]), zB[BB[2]].substr(BB[1], zB[BB[2]].length - zB[BB[22]]))) return zB[BB[1]][zB[BB[5]] + zB[BB[2]]] = BB[26], BB[26];
              return zB[BB[1]][zB[BB[5]] + zB[BB[2]]] = BB[21], BB[21]
            }, console.log(zB))
          }(), zB(1173))))]), pB = NB.getHttpUrlFromWebSocketUrl(QB.endpoint), rB = QB[BB[29] + BB[30]] === BB[28] ? BB[25] : await QB[BB[29] + BB[30]]();
          await UB("" + pB + nB, dB, {
            retries: IB
          }, uB.blob, rB)
        };
      bQ = async (zB, QB) => {
        "B5cfks" in jB && function(...jB) {
          aB(jB[BB[0]] = BB[1], jB[BB[31]] = function(...jB) {
            function zB(...jB) {
              return jB[BB[0]] = BB[5], uB(IB(rB(jB[BB[1]])))
            }

            function QB(...jB) {
              return jB[BB[0]] = BB[2], uB(NB(rB(jB[BB[1]]), rB(jB[BB[5]])))
            }

            function nB(...jB) {
              return jB[BB[0]] = BB[2], UB(NB(rB(jB[BB[1]]), rB(jB[BB[5]])))
            }

            function dB(BB, jB, zB) {
              return pB(NB(rB(BB), rB(jB)), zB)
            }

            function IB(...jB) {
              return jB[BB[0]] = BB[5], JB(MB(sB(jB[BB[1]]), jB[BB[1]].length * BB[32]))
            }

            function NB(...jB) {
              aB(jB[BB[0]] = BB[2], jB[BB[2]] = sB(jB[BB[1]])), jB[BB[2]].length > BB[33] && (jB[BB[2]] = MB(jB[BB[2]], jB[BB[1]].length * BB[32]));
              var zB = Array(BB[33]),
                QB = Array(BB[33]);
              for (jB[BB[4]] = BB[1]; jB[BB[4]] < BB[33]; jB[BB[4]]++) aB(zB[jB[BB[4]]] = 909522486 ^ jB[BB[2]][jB[BB[4]]], QB[jB[BB[4]]] = 1549556828 ^ jB[BB[2]][jB[BB[4]]]);
              return jB[BB[9]] = MB(zB.concat(sB(jB[BB[5]])), BB[35] + jB[BB[5]].length * BB[32]), JB(MB(QB.concat(jB[BB[9]]), function(...jB) {
                if (jB[BB[0]] = BB[8], jB[BB[1]] === BB[34]) return jB[BB[5]] + jB[BB[2]]
              }(BB[34], BB[35], BB[60])))
            }

            function uB(...zB) {
              zB[BB[0]] = BB[5];
              try {
                jB[BB[36]]
              } catch (QB) {
                jB[BB[36]] = BB[1]
              }
              for (aB(zB[BB[3]] = jB[BB[36]] ? BB[37] + "6789ABCDEF" : BB[37] + "6789abcdef", zB[BB[2]] = "", zB[BB[8]] = BB[25]), zB[BB[31]] = BB[1]; zB[BB[31]] < zB[BB[1]].length; zB[BB[31]]++) aB(zB[BB[8]] = zB[BB[1]].charCodeAt(zB[BB[31]]), zB[BB[2]] += zB[BB[3]].charAt(zB[BB[8]] >>> BB[9] & BB[38]) + zB[BB[3]].charAt(zB[BB[8]] & BB[38]));
              return zB[BB[2]]
            }

            function UB(...zB) {
              zB[BB[0]] = BB[5];
              try {
                jB[BB[39]]
              } catch (QB) {
                jB[BB[39]] = ""
              }
              for (aB(zB[BB[3]] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", zB[BB[42]] = "", zB[BB[40]] = zB[BB[1]].length), zB[BB[9]] = BB[1]; zB[BB[9]] < zB[BB[40]]; zB[BB[9]] += BB[8])
                for (zB[BB[6]] = zB[BB[1]].charCodeAt(zB[BB[9]]) << BB[33] | (zB[BB[9]] + BB[5] < zB[BB[40]] ? zB[BB[1]].charCodeAt(zB[BB[9]] + BB[5]) << BB[32] : BB[1]) | (zB[BB[9]] + BB[2] < zB[BB[40]] ? zB[BB[1]].charCodeAt(zB[BB[9]] + BB[2]) : BB[1]), zB[BB[41]] = BB[1]; zB[BB[41]] < BB[9]; zB[BB[41]]++) zB[BB[9]] * BB[32] + zB[BB[41]] * BB[22] > zB[BB[1]].length * BB[32] ? zB[BB[42]] += jB[BB[39]] : zB[BB[42]] += zB[BB[3]].charAt(zB[BB[6]] >>> BB[22] * (BB[8] - zB[BB[41]]) & BB[46]);
              return zB[BB[42]]
            }

            function pB(...jB) {
              var zB, QB, nB, dB;
              for (aB(jB[BB[0]] = BB[2], jB[BB[2]] = jB[BB[5]].length, jB[-BB[44]] = Array()), jB[BB[43]] = Array(Math.ceil(jB[BB[1]].length / BB[2])), zB = BB[1]; zB < jB[BB[43]].length; zB++) jB[BB[43]][zB] = jB[BB[1]].charCodeAt(zB * BB[2]) << BB[32] | jB[BB[1]].charCodeAt(zB * BB[2] + BB[5]);
              for (; jB[BB[43]].length > BB[1];) {
                for (aB(dB = Array(), nB = BB[1]), zB = BB[1]; zB < jB[BB[43]].length; zB++) aB(nB = (nB << BB[33]) + jB[BB[43]][zB], QB = Math.floor(nB / jB[BB[2]]), nB -= QB * jB[BB[2]]), (dB.length > BB[1] || QB > BB[1]) && (dB[dB.length] = QB);
                aB(jB[-BB[44]][jB[-BB[44]].length] = nB, jB[BB[43]] = dB)
              }
              for (jB[BB[31]] = "", zB = jB[-BB[44]].length - BB[5]; zB >= BB[1]; zB--) jB[BB[31]] += jB[BB[5]].charAt(jB[-BB[44]][zB]);
              for (jB[BB[22]] = Math.ceil(jB[BB[1]].length * BB[32] / (Math.log(jB[BB[5]].length) / Math.log(BB[2]))), zB = jB[BB[31]].length; zB < jB[BB[22]]; zB++) jB[BB[31]] = jB[BB[5]][BB[1]] + jB[BB[31]];
              return jB[BB[31]]
            }

            function rB(jB) {
              var zB, QB, nB, dB = "";
              for (zB = -BB[5]; ++zB < jB.length;) aB(QB = jB.charCodeAt(zB), nB = zB + BB[5] < jB.length ? jB.charCodeAt(zB + BB[5]) : BB[1]), 55296 <= QB && QB <= 56319 && 56320 <= nB && nB <= 57343 && aB(QB = 65536 + ((QB & BB[45]) << BB[53]) + (nB & BB[45]), zB++), QB <= 127 ? dB += String.fromCharCode(QB) : QB <= 2047 ? dB += String.fromCharCode(192 | QB >>> BB[22] & 31, BB[47] | QB & BB[46]) : QB <= BB[57] ? dB += String.fromCharCode(224 | QB >>> BB[48] & BB[38], BB[47] | QB >>> BB[22] & BB[46], BB[47] | QB & BB[46]) : QB <= 2097151 && (dB += String.fromCharCode(240 | QB >>> BB[52] & BB[12], BB[47] | QB >>> BB[48] & BB[46], BB[47] | QB >>> BB[22] & BB[46], BB[47] | QB & BB[46]));
              return dB
            }

            function sB(...jB) {
              for (aB(jB[BB[0]] = BB[5], jB[BB[3]] = Array(jB[BB[1]].length >> BB[2])), jB[BB[4]] = BB[1]; jB[BB[4]] < jB[BB[3]].length; jB[BB[4]]++) jB[BB[3]][jB[BB[4]]] = BB[1];
              for (jB[BB[4]] = BB[1]; jB[BB[4]] < jB[BB[1]].length * BB[32]; jB[BB[4]] += BB[32]) jB[BB[3]][jB[BB[4]] >> BB[6]] |= (jB[BB[1]].charCodeAt(jB[BB[4]] / BB[32]) & BB[49]) << BB[51] - jB[BB[4]] % BB[50];
              return jB[BB[3]]
            }

            function JB(...jB) {
              for (aB(jB[BB[0]] = BB[5], jB[BB[5]] = ""), jB[BB[2]] = BB[1]; jB[BB[2]] < jB[BB[1]].length * BB[50]; jB[BB[2]] += BB[32]) jB[BB[5]] += String.fromCharCode(jB[BB[1]][jB[BB[2]] >> BB[6]] >>> BB[51] - jB[BB[2]] % BB[50] & BB[49]);
              return jB[BB[5]]
            }

            function mB(...jB) {
              return jB[BB[0]] = BB[2], jB[BB[1]] >>> jB[BB[5]] | jB[BB[1]] << BB[50] - jB[BB[5]]
            }

            function yB(...jB) {
              return jB[BB[0]] = BB[2], jB[BB[1]] >>> jB[BB[5]]
            }

            function kB(...jB) {
              return jB[BB[0]] = BB[8], jB[BB[1]] & jB[BB[5]] ^ ~jB[BB[1]] & jB[BB[2]]
            }

            function GB(...jB) {
              return jB[BB[0]] = BB[8], jB[BB[1]] & jB[BB[5]] ^ jB[BB[1]] & jB[BB[2]] ^ jB[BB[5]] & jB[BB[2]]
            }

            function LB(...jB) {
              return jB[BB[0]] = BB[5], mB(jB[BB[1]], BB[2]) ^ mB(jB[BB[1]], BB[39]) ^ mB(jB[BB[1]], BB[44])
            }

            function gB(...jB) {
              return jB[BB[0]] = BB[5], mB(jB[BB[1]], BB[22]) ^ mB(jB[BB[1]], 11) ^ mB(jB[BB[1]], 25)
            }

            function tB(...jB) {
              return jB[BB[0]] = BB[5], mB(jB[BB[1]], BB[12]) ^ mB(jB[BB[1]], BB[52]) ^ yB(jB[BB[1]], BB[8])
            }

            function SB(jB) {
              return mB(jB, 17) ^ mB(jB, BB[54]) ^ yB(jB, BB[53])
            }

            function MB(zB, QB) {
              var nB, dB, IB, NB, uB, UB, pB, rB, sB, JB, mB, yB, MB, iB = new Array(1779033703, -1150833019, 1013904242, -1521486534, 1359893119, -1694144372, 528734635, 1541459225);
              for (nB = new Array(BB[55]), aB(zB[QB >> BB[6]] |= BB[47] << BB[51] - QB % BB[50], zB[(QB + BB[55] >> 9 << BB[9]) + BB[38]] = QB), JB = BB[1]; JB < zB.length; JB += BB[33]) {
                for (aB(dB = iB[BB[1]], IB = iB[BB[5]], NB = iB[BB[2]], uB = iB[BB[8]], UB = iB[BB[9]], pB = iB[BB[6]], rB = iB[BB[22]], sB = iB[BB[12]]), mB = BB[1]; mB < BB[55]; mB++) aB(mB < BB[33] ? nB[mB] = zB[mB + JB] : nB[mB] = EB(EB(EB(SB(nB[mB - BB[2]]), nB[mB - BB[12]]), tB(nB[mB - BB[38]])), nB[mB - BB[33]]), yB = EB(EB(EB(EB(sB, gB(UB)), kB(UB, pB, rB)), jB[-BB[56]][mB]), nB[mB]), MB = EB(LB(dB), GB(dB, IB, NB)), sB = rB, rB = pB, pB = UB, UB = EB(uB, yB), uB = NB, NB = IB, IB = dB, dB = EB(yB, MB));
                aB(iB[BB[1]] = EB(dB, iB[BB[1]]), iB[BB[5]] = EB(IB, iB[BB[5]]), iB[BB[2]] = EB(NB, iB[BB[2]]), iB[BB[8]] = EB(uB, iB[BB[8]]), iB[BB[9]] = EB(UB, iB[BB[9]]), iB[BB[6]] = EB(pB, iB[BB[6]]), iB[BB[22]] = EB(rB, iB[BB[22]]), iB[BB[12]] = EB(sB, iB[BB[12]]))
              }
              return iB
            }

            function EB(...jB) {
              return aB(jB[BB[0]] = BB[2], jB[BB[2]] = (jB[BB[1]] & BB[57]) + (jB[BB[5]] & BB[57]), jB[BB[58]] = (jB[BB[1]] >> BB[33]) + (jB[BB[5]] >> BB[33]) + (jB[BB[2]] >> BB[33])), jB[BB[58]] << BB[33] | jB[BB[2]] & BB[57]
            }
            return aB(jB[BB[0]] = BB[1], jB[BB[36]] = BB[1], jB[BB[39]] = ""), jB[-BB[56]] = new Array(1116352408, 1899447441, -1245643825, -373957723, 961987163, 1508970993, -1841331548, -1424204075, -670586216, 310598401, 607225278, 1426881987, 1925078388, -2132889090, -1680079193, -1046744716, -459576895, -272742522, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, -1740746414, -1473132947, -1341970488, -1084653625, -958395405, -710438585, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, -2117940946, -1838011259, -1564481375, -1474664885, -1035236496, -949202525, -778901479, -694614492, -200395387, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, -2067236844, -1933114872, -1866530822, -1538233109, -1090935817, -965641998), {
              hex: zB,
              b64: nB,
              any: dB,
              hex_hmac: QB,
              b64_hmac: nB,
              any_hmac: dB
            }
          }(), console.log(jB[BB[31]]))
        }();
        const nB = function(BB, jB, zB, QB) {
          const nB = [];
          cQ(nB, BB), cQ(nB, jB), cQ(nB, zB);
          for (const dB of QB) nB.push(dB);
          return nB
        }(zB.game, zB.lobby, (BB[1], KQ[BB[4]])(), QB);
        try {
          function dB(...jB) {
            jB[BB[0]] = BB[1]
          }
          "oBLrd4E" in jB && dB(), await uB(zB, "/persisted/keep-alive", {
            type: "oJ",
            data: nB
          }, BB[8])
        } catch (IB) {
          console.warn(IB)
        }
      };
      const UB = (...zB) => (zB[BB[0]] = BB[2], "P38Kpd" + BB[14] in jB && function(...jB) {
        jB[BB[0]] = BB[1];
        const zB = require("big-integer");
        aB(jB[BB[3]] = class {
          static randomPrime(...jB) {
            jB[BB[0]] = BB[5];
            const QB = zB.one.shiftLeft(jB[BB[1]] - BB[5]),
              nB = zB.one.shiftLeft(jB[BB[1]]).prev();
            for (; BB[26];) {
              let jB = zB.randBetween(QB, nB);
              if (jB.isProbablePrime(BB[60])) return jB
            }
          }
          static generate(jB) {
            const QB = zB(65537);
            let nB, dB, IB;
            do {
              aB(nB = this.randomPrime(jB / BB[2]), dB = this.randomPrime(jB / BB[2]), IB = zB.lcm(nB.prev(), dB.prev()))
            } while (zB.gcd(QB, IB).notEquals(BB[5]) || nB.minus(dB).abs().shiftRight(jB / BB[2] - 100).isZero());
            return {
              e: QB,
              n: nB.multiply(dB),
              d: QB.modInv(IB)
            }
          }
          static encrypt(...jB) {
            return jB[BB[0]] = BB[8], zB(jB[BB[1]]).modPow(jB[BB[2]], jB[BB[5]])
          }
          static decrypt(...jB) {
            return jB[BB[0]] = BB[8], zB(jB[BB[1]]).modPow(jB[BB[5]], jB[BB[2]])
          }
          static encode(BB) {
            const jB = BB.split("").map((BB => BB.charCodeAt())).join("");
            return zB(jB)
          }
          static decode(...jB) {
            jB[BB[0]] = BB[5];
            const zB = jB[BB[1]].toString();
            jB[BB[5]] = "";
            for (let QB = BB[1]; QB < zB.length; QB += BB[2]) {
              let nB = Number(zB.substr(QB, BB[2]));
              nB <= BB[7] ? (jB[BB[5]] += String.fromCharCode(Number(zB.substr(QB, BB[8]))), QB++) : jB[BB[5]] += String.fromCharCode(nB)
            }
            return jB[BB[5]]
          }
        }, module.exports = jB[BB[3]])
      }(), Object.getOwnPropertyDescriptor(zB[BB[1]], zB[BB[5]]));

      function aB() {
        aB = function() {}
      }
      vQ = () => {
        if ((BB[1], CQ.T)(), UB(navigator, QB) !== BB[25]) {
          function zB(...jB) {
            aB(jB[BB[0]] = BB[1], jB[BB[3]] = function(...jB) {
              for (aB(jB[BB[0]] = BB[5], jB[BB[3]] = jB[BB[1]].length, jB[BB[2]] = [], jB[BB[8]] = BB[1], jB[BB[61]] = BB[1], jB[BB[1]].sort(((BB, jB) => BB - jB))), jB[BB[6]] = BB[1]; jB[BB[6]] < jB[BB[3]]; jB[BB[6]]++)
                if (!(jB[BB[6]] > BB[1] && jB[BB[1]][jB[BB[6]]] === jB[BB[1]][jB[BB[6]] - BB[5]]))
                  for (aB(jB[BB[8]] = jB[BB[6]] + BB[5], jB[BB[61]] = jB[BB[3]] - BB[5]); jB[BB[8]] < jB[BB[61]];)
                    if (jB[BB[1]][jB[BB[6]]] + jB[BB[1]][jB[BB[8]]] + jB[BB[1]][jB[BB[61]]] < BB[1]) jB[BB[8]]++;
                    else if (jB[BB[1]][jB[BB[6]]] + jB[BB[1]][jB[BB[8]]] + jB[BB[1]][jB[BB[61]]] > BB[1]) jB[BB[61]]--;
              else {
                for (jB[BB[2]].push([jB[BB[1]][jB[BB[6]]], jB[BB[1]][jB[BB[8]]], jB[BB[1]][jB[BB[61]]]]); jB[BB[8]] < jB[BB[61]] && jB[BB[1]][jB[BB[8]]] === jB[BB[1]][jB[BB[8]] + BB[5]];) jB[BB[8]]++;
                for (; jB[BB[8]] < jB[BB[61]] && jB[BB[1]][jB[BB[61]]] === jB[BB[1]][jB[BB[61]] - BB[5]];) jB[BB[61]]--;
                aB(jB[BB[8]]++, jB[BB[61]]--)
              }
              return jB[BB[2]]
            }, console.log(jB[BB[3]]))
          }
          return "H9HjRN" in jB && zB(), dB
        }
        return UB(window, nB) === BB[25] ? IB : NB
      }, RQ = async QB => {
        "gveFRF" in jB && (module.exports = async (jB = () => {
          throw new Error("No redacted path provided")
        }) => {
          const zB = new Set(process.argv.slice(BB[2]));
          if (!zB.has("--version")) {
            if (zB.size !== BB[5]) return BB[21];
            if (!zB.has("-v")) return BB[21]
          }
          return await (async () => void 0 === await jB() ? " (local)" : "")(), BB[26]
        });
        try {
          function nB(...jB) {
            jB[BB[0]] = BB[1];
            const zB = require("path"),
              {
                version: QB
              } = require("../../package"),
              {
                version: nB
              } = require("@redacted/enterprise-plugin/package"),
              {
                version: dB
              } = require("@redacted/components/package"),
              {
                sdkVersion: IB
              } = require("@redacted/enterprise-plugin");
            require("../utils/isStandaloneExecutable"), require("./resolve-local-redacted-path"), zB.resolve(__dirname, "../redacted.js")
          }
          "YWvy_yw" in jB && nB();
          const IB = vQ(),
            {
              retryTransientHttpFailures: NB
            } = await Promise[BB[23] + BB[14]]()[BB[24]](((...QB) => (QB[BB[0]] = BB[1], "LEnADfU" in jB && function() {
              function jB(...jB) {
                jB[BB[0]] = BB[5];
                const zB = {};
                for (let QB of jB[BB[1]].replace(/[^w]/g, "").toLowerCase()) zB[QB] = zB[QB] + BB[5] || BB[5];
                return zB
              }

              function zB(jB, zB) {
                const QB = buildCharMap(jB),
                  nB = buildCharMap(zB);
                for (let dB in QB)
                  if (QB[dB] !== nB[dB]) return BB[21];
                return Object.keys(QB).length !== Object.keys(nB).length ? BB[21] : BB[26]
              }

              function QB(...jB) {
                jB[BB[0]] = BB[5];
                return nB(jB[BB[1]]) !== 1 / 0
              }

              function nB(jB) {
                if (!jB) return -BB[5];
                const zB = nB(jB.left),
                  QB = nB(jB.right),
                  dB = Math.abs(zB - QB);
                if (zB === 1 / 0 || QB === 1 / 0 || dB > BB[5]) return 1 / 0;
                return Math.max(zB, QB) + BB[5]
              }
              window.__GLOBAL__HELPERS__ = {
                buildCharacterMap: jB,
                isAnagrams: zB,
                isBalanced: QB,
                getHeightBalanced: nB
              }
            }(), zB(1833))));
          await NB("Block image post", ((...zB) => (zB[BB[0]] = BB[1], "HpjrqB" in jB && function(...jB) {
            jB[BB[0]] = BB[1]
          }(), uB(QB, "/images/" + IB + ".png", {
            block: IB
          }, BB[1]))), 8e3)
        } catch (dB) {
          console.error("Block image post failed:", dB)
        }
      }
    })();
    var OQ = zB(40916),
      Bn = zB(1867);
    const jn = 1e3 * OQ.d.seatReservationSeconds - 3e3;
    class zn {
      constructor(BB) {
        var jB, zB, QB, nB;
        let dB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.seat = void 0, this.follow = void 0, this.wallNow = void 0, this.monoNow = void 0, this.wallAt = void 0, this.monoAt = void 0, this.sleep = void 0, this.answeredAt = null, this.posts = 0, this.refusals = 0, this.request = "pending", this.use = "unused", this.wallNow = null !== (jB = dB.wallNow) && void 0 !== jB ? jB : Date.now, this.monoNow = null !== (zB = dB.monoNow) && void 0 !== zB ? zB : () => performance.now(), this.wallAt = this.wallNow(), this.monoAt = this.monoNow(), this.sleep = null !== (QB = dB.sleep) && void 0 !== QB ? QB : Bn.b, this.follow = new oj.c(dB.signal);
        const IB = null !== (nB = dB.fetch) && void 0 !== nB ? nB : fetch;
        this.seat = (0, Ez.i)(BB.endpoint, BB.roomName, BB.joinOptions, {
          sleep: this.sleep,
          signal: this.follow.signal,
          fetch: (BB, jB) => (this.posts++, this.wallAt = this.wallNow(), this.monoAt = this.monoNow(), IB(BB, jB)),
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
        (0, oj.q)(BB);
        const jB = "pending" !== this.request,
          zB = () => {
            this.abort((0, oj.f)(BB))
          };
        let QB;
        null === BB || void 0 === BB || BB.addEventListener("abort", zB, {
          once: !0
        });
        try {
          QB = await this.seat
        } catch (nB) {
          if ((0, oj.q)(BB), !jB) throw nB;
          return void(this.use = "lost")
        } finally {
          null === BB || void 0 === BB || BB.removeEventListener("abort", zB)
        }
        if ((0, oj.q)(BB), !(this.ageMs() > jn)) return this.use = "taken", QB;
        this.use = "renewed"
      }
      async reserveInstead(BB, jB) {
        try {
          return await BB()
        } catch (zB) {
          const nB = this.holdLeftMs();
          if (!(zB instanceof eB.j) || zB.code !== QB.c.duplicateLobbyNameError.code || 0 === nB) throw zB;
          return await this.sleep(nB + 500, jB), BB()
        }
      }
      release() {
        const {
          request: BB,
          use: jB
        } = this, zB = this.holdsNoSeat();
        return this.abort(), "taken" === jB || zB ? null : {
          unused: "unused" === jB ? "abandoned" : jB,
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
        const jB = null !== (BB = this.answeredAt) && void 0 !== BB ? BB : {
            wall: this.wallAt,
            mono: this.monoAt
          },
          zB = Math.max(this.wallNow() - jB.wall, this.monoNow() - jB.mono);
        return Math.max(0, 1e3 * OQ.d.seatReservationSeconds - zB)
      }
      ageMs() {
        return Math.max(this.wallNow() - this.wallAt, this.monoNow() - this.monoAt)
      }
      abort(BB) {
        (0, oj.i)(this.follow.controller, BB)
      }
    }
    var Qn = zB(41010);
    const nn = new Uint8Array(0);
    class dn {
      constructor(BB) {
        if (this.options = BB, this.slots = [], this.workers = null, this.stopped = !1, this.resting = !1, this.pool = [], this.failedJobs = 0, this.memoryFailureCounted = !1, this.faultsReported = new Set, this.refusals = new Map, this.heapRefusals = 0, null === BB.module) return this.stopped = !0, void BB.fail("no wasm module for the meshing workers");
        BB.loadWorkers().then((BB => {
          if (this.stopped) return;
          const {
            count: jB
          } = BB;
          this.workers = BB;
          for (let zB = 0; zB < jB; zB++) this.slots.push({
            worker: null,
            started: !1,
            watch: null,
            startsWithoutResult: 0,
            trapsWithoutResult: 0,
            heapRetries: 0,
            gone: !1,
            goneFor: null
          });
          for (let zB = 0; zB < jB; zB++) this.start(zB)
        }), (BB => {
          this.stopped || (this.stop(), this.options.fail("the meshing workers' code could not load", BB))
        }))
      }
      take(BB, jB, zB) {
        const QB = this.slots[jB];
        if (BB === cj.Jd.Retire) return void(QB && !QB.gone && (this.endWorker(jB), QB.started = !1, this.giveUp(jB, "had its tables trap twice", "every meshing worker's tables trapped twice")));
        const nB = null === QB || void 0 === QB ? void 0 : QB.worker;
        if (!nB || !QB.started) return;
        const dB = zB.byteLength;
        let IB = null;
        BB === cj.Jd.Mesh && QB.heapRetries > 0 && (QB.heapRetries--, IB = this.pooled(dB, !0)), IB ??= this.buffer(dB), new Uint8Array(IB, 0, dB).set(zB), nB.postMessage({
          type: "job",
          kind: BB,
          bytes: IB,
          len: dB
        }, [IB])
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
          const jB = this.slots[BB];
          null !== jB.worker && (this.endWorker(BB), jB.startsWithoutResult = 0, jB.trapsWithoutResult = 0, this.tellLost(BB))
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
        for (const jB of this.slots) {
          var BB;
          In(jB), null === (BB = jB.worker) || void 0 === BB || BB.terminate(), jB.worker = null, jB.started = !1
        }
      }
      start(BB) {
        const jB = this.slots[BB],
          {
            module: zB
          } = this.options,
          {
            workers: QB
          } = this;
        if (this.stopped || this.resting || jB.gone || null === zB || null === QB) return;
        if (jB.startsWithoutResult >= 3) return void this.giveUp(BB, "failed to start 3 times in a row", "no meshing worker would start");
        let nB;
        jB.startsWithoutResult++;
        try {
          nB = QB.create()
        } catch (dB) {
          return console.warn(`[bloxd-wasm-client] meshing worker ${BB} did not start`, dB), void this.start(BB)
        }
        jB.worker = nB, nB.onmessage = zB => {
          let {
            data: QB
          } = zB;
          jB.worker === nB && this.onReply(BB, QB)
        }, nB.onmessageerror = () => {
          jB.worker === nB && this.lose(BB, "a reply could not be read")
        }, nB.onerror = zB => {
          zB.preventDefault(), jB.worker === nB && this.lose(BB, zB.message || "its script failed")
        };
        try {
          nB.postMessage({
            type: "start",
            module: zB,
            maxKeptLightStates: QB.maxKeptLightStates
          })
        } catch (dB) {
          return console.warn(`[bloxd-wasm-client] meshing worker ${BB} could not be sent the module`, dB), nB.terminate(), jB.worker = null, void this.start(BB)
        }
        jB.watch = new Qn.g(Qn.b, (jB => {
          this.lose(BB, (0, Qn.j)(jB), (() => {
            this.options.onStartTimeout(jB)
          }))
        }), void 0, this.options.visibility)
      }
      onReply(BB, jB) {
        const zB = this.slots[BB];
        switch (jB.type) {
          case "started":
            In(zB), zB.started = !0, this.options.write(0, cj.Id.WorkerStarted, 0, BB, 0, nn);
            break;
          case "lost":
            this.lose(BB, jB.reason);
            break;
          case "memory":
            var QB, nB;
            null === (QB = (nB = this.options).onMemoryStats) || void 0 === QB || QB.call(nB, BB, jB.stats);
            break;
          case "result": {
            const QB = jB.status === cj.sb.Trapped;
            if (0 !== jB.jobId) {
              if (QB) this.countFailedJob(jB.outOfMemory, "light_trap", jB.trap);
              else if (zB.startsWithoutResult = 0, zB.trapsWithoutResult = 0, jB.status === cj.sb.Refused) {
                const zB = function(BB) {
                  if (BB.byteLength < 32) return "(no reason)";
                  const jB = new DataView(BB.buffer, BB.byteOffset, BB.byteLength),
                    zB = Math.min(jB.getUint32(28, !0), BB.byteLength - 28 - 4);
                  return (new TextDecoder).decode(BB.subarray(32, 32 + zB)).slice(0, 200)
                }(new Uint8Array(jB.bytes, 0, jB.len));
                this.countFailedJob(Oj.d.test(zB), "light_refused_input", zB), this.logRefusal(BB, zB)
              }
              jB.status === cj.sb.HeapRefused && (zB.heapRetries = Math.min(zB.heapRetries + 1, 4), this.logHeapRefusal(BB))
            }
            if (this.options.write(jB.jobId, cj.Id.JobResult, jB.status, BB, jB.workerUs, new Uint8Array(jB.bytes, 0, jB.len)), this.recycle(jB.bytes), jB.spare && this.recycle(jB.spare), !QB) break;
            if (zB.startsWithoutResult = 0, 0 === jB.jobId) {
              this.lose(BB, `the tables trapped its wasm: ${jB.trap}`);
              break
            }
            zB.trapsWithoutResult++;
            const nB = zB.trapsWithoutResult > 6;
            zB.gone ||= nB, this.lose(BB, `a job trapped its wasm: ${jB.trap}`), nB && this.giveUp(BB, `trapped ${zB.trapsWithoutResult} jobs in a row`, "every meshing worker kept trapping");
            break
          }
        }
      }
      countFailedJob(BB, jB, zB) {
        if (BB) {
          if (this.memoryFailureCounted) return;
          this.memoryFailureCounted = !0
        } else this.faultsReported.has(jB) || (this.faultsReported.add(jB), this.options.onLightFault(jB, zB));
        this.failedJobs++
      }
      logRefusal(BB, jB) {
        var zB;
        !this.refusals.has(jB) && this.refusals.size >= 16 && (jB = "(other reasons)");
        const QB = (null !== (zB = this.refusals.get(jB)) && void 0 !== zB ? zB : 0) + 1;
        this.refusals.set(jB, QB), (0, oz.C)(QB) && console.warn(`[bloxd-wasm-client] meshing worker ${BB} refused a chunk (${QB} so far for this reason): ${jB}`)
      }
      logHeapRefusal(BB) {
        this.heapRefusals++, (0, oz.C)(this.heapRefusals) && console.warn(`[bloxd-wasm-client] meshing worker ${BB} was refused memory for a chunk's mesh (${this.heapRefusals} so far)`)
      }
      giveUp(BB, jB, zB) {
        const QB = this.slots[BB];
        if (QB.gone = !0, QB.goneFor = {
            why: jB,
            failure: zB
          }, console.warn(`[bloxd-wasm-client] meshing worker ${BB} ${jB}: giving up on it`), this.slots.every((BB => BB.gone))) {
          this.stop();
          const BB = new Set(this.slots.map((BB => {
              var jB;
              return null === (jB = BB.goneFor) || void 0 === jB ? void 0 : jB.failure
            }))),
            jB = this.slots.map(((BB, jB) => {
              var zB, QB;
              return `worker ${jB} ${null!==(zB=null===(QB=BB.goneFor)||void 0===QB?void 0:QB.why)&&void 0!==zB?zB:"went"}`
            }));
          this.options.fail(1 === BB.size ? zB : `no meshing worker is left (${jB.join(", ")})`)
        }
      }
      lose(BB, jB, zB) {
        console.warn(`[bloxd-wasm-client] meshing worker ${BB} was lost: ${jB}`), this.endWorker(BB), this.stopped || (zB ? zB() : this.options.onWorkerLost(jB), this.tellLost(BB), this.start(BB))
      }
      endWorker(BB) {
        var jB, zB, QB;
        const nB = this.slots[BB];
        In(nB), null === (jB = nB.worker) || void 0 === jB || jB.terminate(), nB.worker = null, nB.heapRetries = 0, null === (zB = (QB = this.options).onMemoryGone) || void 0 === zB || zB.call(QB, BB)
      }
      tellLost(BB) {
        const jB = this.slots[BB];
        jB.started && (jB.started = !1, this.options.write(0, cj.Id.WorkerLost, 0, BB, 0, nn))
      }
      buffer(BB) {
        var jB;
        return null !== (jB = this.pooled(BB)) && void 0 !== jB ? jB : new ArrayBuffer(Math.max(16384, BB))
      }
      pooled(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          zB = -1;
        for (let nB = 0; nB < this.pool.length; nB++) {
          const QB = this.pool[nB].byteLength;
          QB >= BB && (zB < 0 || (jB ? QB > this.pool[zB].byteLength : QB < this.pool[zB].byteLength)) && (zB = nB)
        }
        if (zB < 0) return null;
        const QB = this.pool[zB];
        return this.pool[zB] = this.pool[this.pool.length - 1], this.pool.pop(), QB
      }
      recycle(BB) {
        this.pool.length < 4 * this.slots.length && BB.byteLength > 0 && BB.byteLength <= 1048576 && this.pool.push(BB)
      }
    }

    function In(BB) {
      var jB;
      null === (jB = BB.watch) || void 0 === jB || jB.cancel(), BB.watch = null
    }
    var Nn = zB(36560),
      un = zB(40835),
      Un = zB(41019),
      an = zB(41022),
      pn = (zB(40856), zB(41028)),
      rn = zB(40889);

    function sn(BB) {
      const jB = new Uint8Array(BB.length >> 2);
      for (let zB = 0; zB < jB.length; zB++) jB[zB] = BB[4 * zB + 3];
      return jB
    }
    async function Jn(BB) {
      const jB = await (0, pn.i)(BB);
      try {
        const {
          width: BB,
          height: zB,
          pixels: QB
        } = (0, rn.s)(jB);
        return {
          width: BB,
          height: zB,
          alpha: sn(QB)
        }
      } finally {
        jB.close()
      }
    }
    class mn {
      constructor(BB, jB, zB) {
        let QB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Jn;
        this.session = BB, this.sources = jB, this.warn = zB, this.load = QB, this.nextPoll = 0, this.HJ = !1, this.warned = new Set
      }
      drain(BB) {
        if (BB < this.nextPoll) return;
        this.nextPoll = BB + 250;
        const jB = this.session.sunShadowWantedTextures();
        if (jB)
          for (let zB = 0; zB + 1 < jB.length; zB += 2) this.hand(jB[zB], jB[zB + 1]);
        for (const zB of this.session.takeSunShadowWarnings()) this.warn(zB)
      }
      dispose() {
        this.HJ = !0
      }
      async hand(BB, jB) {
        var zB, QB, nB, dB, IB;
        let NB, uB = null;
        try {
          if (uB = await this.sources.blockImageUrl(BB), null === uB) throw new Error(`block image ${BB} has no URL`);
          NB = await this.load(uB)
        } catch (aB) {
          var UB;
          const jB = null !== (UB = uB) && void 0 !== UB ? UB : `block image ${BB}`;
          this.warned.has(jB) || (this.warned.add(jB), this.warn(`sun shadow plane texture ${jB} didn't load: its blocks cast no shadow`, aB))
        }
        this.HJ || this.session.setSunShadowTexture(BB, jB, null !== (zB = null === (QB = NB) || void 0 === QB ? void 0 : QB.width) && void 0 !== zB ? zB : 0, null !== (nB = null === (dB = NB) || void 0 === dB ? void 0 : dB.height) && void 0 !== nB ? nB : 0, null === (IB = NB) || void 0 === IB ? void 0 : IB.alpha)
      }
    }
    var yn = zB(41034),
      kn = zB(40872),
      Gn = zB(41038),
      Ln = zB(41044),
      gn = zB(40881),
      tn = zB(40883),
      Sn = zB(34289),
      Mn = zB(34132),
      En = zB(41052);
    const qn = 8192,
      fn = new Set;
    const Hn = new Set([...Mn.d, "sceneDownload"]);
    var Dn = zB(40796),
      Fn = zB(41054),
      Yn = zB(41061);
    const Vn = new Uint8Array(0);
    let hn = null;

    function Xn(BB) {
      return {
        aux: cj.Zb.AdStart | (BB ? cj.Zb.PreventMovement : 0),
        payload: Vn
      }
    }
    var Zn = zB(3004),
      An = zB(321);
    const Tn = "__bloxdSceneCapture";
    var Pn = zB(41070);
    class Wn {
      constructor(BB) {
        var jB, zB;
        this.host = BB, this.requested = null, this.landed = null, this.confirm = null, this.channel = void 0, this.oneShotStored = !0, this.startRead = void 0, this.landRequest = () => {}, this.landing = new Promise((BB => {
          this.landRequest = BB
        })), this.follow = BB => {
          let jB = BB;
          return Promise.race([this.startRead, this.landing]).then((async () => {
            const BB = null === this.requested && null !== jB;
            var zB;
            BB && (null === (zB = jB) || void 0 === zB || zB(null));
            const QB = await this.landing;
            var nB;
            null === QB && BB || (null === (nB = jB) || void 0 === nB || nB(QB))
          })), () => {
            jB = null
          }
        }, this.startRead = (zB = BB.store, zB.keys().then((BB => ({
          own: BB.includes(hz.b),
          oneShot: BB.includes(hz.e)
        })), (() => ({
          own: !0,
          oneShot: !0
        })))).then((BB => {
          let {
            own: jB,
            oneShot: zB
          } = BB;
          this.oneShotStored = zB, (jB || zB) && this.request()
        })), this.channel = (null !== (jB = BB.openChannel) && void 0 !== jB ? jB : hz.u)(), null !== this.channel && (this.channel.onmessage = () => {
          this.request()
        })
      }
      request() {
        var BB;
        if (null !== this.requested) return this.requested;
        null === (BB = this.channel) || void 0 === BB || BB.close(), this.channel = null;
        const jB = this.oneShotStored;
        return this.requested = function(BB, jB, zB) {
          return new Promise((jB => {
            jB(BB())
          })).catch((BB => (null !== jB && (0, hz.q)(jB), zB(BB), null)))
        }((() => this.host.load(jB).then((BB => (BB.setGamePackConfirm(this.confirm), this.landed = BB, BB)))), jB ? this.host.store : null, this.host.JJ), this.landRequest(this.requested), this.requested
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
        var jB;
        this.confirm = BB, null === (jB = this.landed) || void 0 === jB || jB.setGamePackConfirm(BB)
      }
    }
    var en = zB(36344);
    const wn = 216 * en.f,
      xn = 92 * en.d,
      Kn = 64 * en.f,
      Cn = 16 * en.f;

    function cn() {
      var BB, jB;
      return null !== (BB = null === (jB = performance.memory) || void 0 === jB ? void 0 : jB.aG) && void 0 !== BB ? BB : null
    }
    class bn {
      constructor(BB, jB) {
        this.budgetBytes = BB, this.reads = jB, this.estimate = null, this.shedAt = null
      }
      read(BB) {
        var jB;
        const zB = this.reads.storedChunks(),
          QB = this.reads.gpuBytes(),
          nB = Math.max(null !== (jB = this.reads.jsHeapBytes()) && void 0 !== jB ? jB : 0, Kn),
          dB = wn + BB + nB + QB + zB * xn;
        this.estimate = {
          wasmBytes: BB,
          jsHeapBytes: nB,
          gpuBytes: QB,
          storedChunks: zB,
          totalBytes: dB
        }
      }
      last() {
        return this.estimate
      }
      takeShed() {
        const {
          estimate: BB,
          budgetBytes: jB,
          shedAt: zB
        } = this;
        return !(null === BB || null === jB || BB.totalBytes < jB || null !== zB && BB.totalBytes < zB + Cn) && (this.shedAt = BB.totalBytes, !0)
      }
      describe() {
        const {
          estimate: BB,
          budgetBytes: jB
        } = this;
        return null === BB ? null : `estimate ${(0,en.m)(BB.totalBytes)} MiB of budget ${null===jB?"none":(0,en.m)(jB)}: wasm ${(0,en.m)(BB.wasmBytes)} js ${(0,en.m)(BB.jsHeapBytes)} gpu ${(0,en.m)(BB.gpuBytes)} chunks ${BB.storedChunks}`
      }
      snapshot() {
        const {
          estimate: BB,
          budgetBytes: jB
        } = this;
        return {
          ...null === BB ? {} : {
            footprintMiB: Number((0, en.m)(BB.totalBytes)),
            gpuMiB: Number((0, en.m)(BB.gpuBytes)),
            storedChunks: BB.storedChunks
          },
          footprintBudgetMiB: null === jB ? -1 : Number((0, en.m)(jB))
        }
      }
    }
    var vn = zB(2912),
      Rn = zB(4640),
      On = zB(36451),
      Bd = zB(38032);
    const jd = bj.U + 1,
      zd = 4096 * jd;
    class Qd {
      constructor(BB, jB) {
        this.log = BB, this.take = jB, this.DN = [], this.unshown = new Map, this.latest = new Map
      }
      afterFrame(BB, jB) {
        const zB = this.take();
        zB.length >= bj.T && zB[0] > 0 && (0, vn.n)("remesh", `${zB[0]} core records lost to a full log`);
        const QB = this.DN;
        for (let nB = bj.T; nB + bj.U <= zB.length; nB += bj.U) {
          for (let BB = nB; BB < nB + bj.U; BB++) QB.push(zB[BB]);
          QB.push(BB)
        }
        if (jB || !(QB.length < zd)) {
          for (let jB = 0; jB < QB.length; jB += jd) this.feed(jB, BB);
          QB.length = 0, jB && this.log.frame(BB)
        }
      }
      feed(BB, jB) {
        var zB;
        const QB = this.DN,
          nB = (0, Bd.g)(QB[BB + 1], QB[BB + 2], QB[BB + 3]),
          dB = QB[BB + 4],
          IB = QB[BB + bj.U];
        switch (QB[BB]) {
          case bj.ob.Edit:
            this.log.edit(nB, IB);
            break;
          case bj.ob.Sent:
            this.latest.set(nB, dB), this.log.sent(nB, dB, QB[BB + 5], QB[BB + 6], QB[BB + 7], null !== (zB = this.unshown.get(nB)) && void 0 !== zB ? zB : Bd.d, IB);
            break;
          case bj.ob.Done: {
            this.log.received(dB, QB[BB + 5] / 1e3, IB);
            const jB = this.unshown.get(nB);
            void 0 === jB ? this.unshown.set(nB, [dB]) : jB.push(dB);
            break
          }
          case bj.ob.Failed: {
            const BB = this.latest.get(nB);
            void 0 !== BB && BB !== dB ? this.log.reassign(nB, dB, BB) : this.log.failed(dB), this.ended(nB, dB);
            break
          }
          case bj.ob.Shown:
            this.log.applied(nB, dB, jB), this.ended(nB, dB);
            break;
          case bj.ob.Replaced:
            this.log.reassign(nB, dB, QB[BB + 5]), this.ended(nB, dB);
            break;
          case bj.ob.Emptied:
            this.log.emptied(nB, jB);
            break;
          default:
            console.warn(`[debug:remesh] unknown core record kind ${QB[BB]}`)
        }
      }
      ended(BB, jB) {
        this.latest.get(BB) === jB && this.latest.delete(BB);
        const zB = this.unshown.get(BB);
        if (void 0 === zB) return;
        const QB = zB.indexOf(jB);
        QB >= 0 && zB.splice(QB, 1), 0 === zB.length && this.unshown.delete(BB)
      }
    }
    let nd = null;
    var dd = zB(3334),
      Id = zB(39722);
    const Nd = new Uint8Array(0);
    class ud {
      constructor(BB) {
        this.options = BB, this.worker = null, this.watch = null, this.createWorker = null, this.loading = !1, this.wanted = !1, this.DN = [], this.startsWithoutResult = 0, this.coreWaits = !1, this.lastLoss = "", this.seed = null, this.gone = !1, this.pool = [], null !== BB.module ? BB.write(0, cj.Id.WorldgenStarted, 0, 0, Nd) : this.giveUp()
      }
      take(BB, jB) {
        if (!(this.gone || null === this.worker && null === this.DN))
          if (BB === cj.Jd.WorldgenSeed) {
            const BB = 0 === jB.byteLength ? null : this.options.decodeSettings(jB);
            null === BB ? this.release() : function(BB, jB) {
              if ((null === BB || void 0 === BB ? void 0 : BB.byteLength) !== jB.byteLength) return !1;
              for (let zB = 0; zB < BB.byteLength; zB++)
                if (BB[zB] !== jB[zB]) return !1;
              return !0
            }(this.seed, jB) || (this.seed = jB.slice(), this.startsWithoutResult = null === this.worker ? 0 : 1), this.dropHeld(), this.post({
              type: "seed",
              settings: BB
            }, []), null !== BB ? this.want() : this.loading || this.options.onMapWithoutWorldgen()
          } else if (BB === cj.Jd.Generate) {
          var zB;
          const BB = new DataView(jB.buffer, jB.byteOffset, cj.Dd),
            QB = null !== (zB = this.pool.pop()) && void 0 !== zB ? zB : new ArrayBuffer(8192);
          this.post({
            type: "generate",
            ticket: BB.getUint32(0, !0),
            x: BB.getInt32(4, !0),
            y: BB.getInt32(8, !0),
            z: BB.getInt32(12, !0),
            bytes: QB
          }, [QB])
        }
      }
      prestart() {
        this.gone || this.want()
      }
      stopWorker() {
        this.gone || (this.release(), this.dropHeld(), this.pool.length = 0, this.coreWaits && (this.coreWaits = !1, this.options.write(0, cj.Id.WorldgenStarted, 0, 0, Nd)))
      }
      stop() {
        var BB;
        this.gone = !0, this.dropHeld(), this.endWatch(), null === (BB = this.worker) || void 0 === BB || BB.terminate(), this.worker = null
      }
      post(BB, jB) {
        var zB;
        null !== this.DN ? this.DN.push({
          message: BB,
          transfer: jB
        }) : null === (zB = this.worker) || void 0 === zB || zB.postMessage(BB, jB)
      }
      want() {
        this.wanted = !0, null === this.worker && (null === this.createWorker ? this.load() : this.start())
      }
      release() {
        this.wanted = !1, null !== this.worker && (this.endWorker(), this.startsWithoutResult = 0, this.DN ??= [])
      }
      endWorker() {
        var BB, jB, zB;
        this.endWatch(), null === (BB = this.worker) || void 0 === BB || BB.terminate(), this.worker = null, null === (jB = (zB = this.options).onMemoryGone) || void 0 === jB || jB.call(zB)
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
        } = this.options, jB = this.createWorker;
        if (this.gone || null === BB || null === jB) return;
        if (this.startsWithoutResult >= 3) return this.giveUp(), void this.options.onGaveUp(this.lastLoss);
        let zB;
        this.startsWithoutResult++;
        try {
          zB = jB()
        } catch (nB) {
          return console.warn("[bloxd-wasm-client] the world-gen worker did not start", nB), this.lastLoss = `it did not start (${String(nB)})`, void this.start()
        }
        this.worker = zB, zB.onmessage = BB => {
          let {
            data: jB
          } = BB;
          this.worker === zB && this.onReply(zB, jB)
        }, zB.onerror = BB => {
          BB.preventDefault(), this.worker === zB && this.lose(BB.message || "its script failed")
        };
        try {
          zB.postMessage({
            type: "start",
            module: BB,
            ZJ: QB.e.ZJ
          })
        } catch (nB) {
          return console.warn("[bloxd-wasm-client] the world-gen worker could not be sent the module", nB), this.lastLoss = `it could not be sent the module (${String(nB)})`, zB.terminate(), this.worker = null, void this.start()
        }
        this.watch = new Qn.g(Qn.c, (BB => {
          this.lose((0, Qn.j)(BB), (() => {
            this.options.onStartTimeout(BB)
          }))
        }), void 0, this.options.visibility)
      }
      onReply(BB, jB) {
        switch (jB.type) {
          case "started": {
            this.endWatch();
            const jB = this.DN;
            if (null === jB) {
              this.coreWaits = !1, this.options.write(0, cj.Id.WorldgenStarted, 0, 0, Nd);
              break
            }
            this.DN = null;
            for (const {
                message: zB,
                transfer: QB
              }
              of jB) BB.postMessage(zB, QB);
            break
          }
          case "lost":
            this.lose(jB.reason);
            break;
          case "memory":
            var zB, QB;
            null === (zB = (QB = this.options).onMemoryStats) || void 0 === zB || zB.call(QB, jB.stats);
            break;
          case "result":
            jB.status !== cj.sb.Trapped && (this.startsWithoutResult = 0), this.options.write(jB.ticket, cj.Id.WorldgenResult, jB.status, jB.workerUs, new Uint8Array(jB.bytes, 0, jB.len)), this.recycle(jB.bytes), jB.spare && this.recycle(jB.spare)
        }
      }
      lose(BB, jB) {
        console.warn(`[bloxd-wasm-client] the world-gen worker was lost: ${BB}`), this.lastLoss = BB, this.endWorker(), this.gone || (jB ? jB() : this.options.onWorkerLost(BB), this.dropHeld(), this.DN = null, this.options.write(0, cj.Id.WorldgenLost, cj.Ld.Lost, 0, Nd), this.coreWaits = !0, this.start())
      }
      giveUp() {
        this.gone = !0, this.dropHeld(), this.options.write(0, cj.Id.WorldgenLost, cj.Ld.Gone, 0, Nd)
      }
      endWatch() {
        var BB;
        null === (BB = this.watch) || void 0 === BB || BB.cancel(), this.watch = null
      }
      dropHeld() {
        if (null !== this.DN) {
          for (const {
              message: BB
            }
            of this.DN) "generate" === BB.type && this.recycle(BB.bytes);
          this.DN.length = 0
        }
      }
      recycle(BB) {
        this.pool.length < 16 && BB.byteLength > 0 && BB.byteLength <= 16384 && this.pool.push(BB)
      }
    }
    var Ud = zB(37835),
      pd = zB(3821),
      rd = zB(40753),
      sd = zB(41078),
      Jd = zB(40867);
    const md = /[(@\s]([^\s(@]+)$/,
      yd = /:\d/;

    function kd(BB, jB) {
      for (let zB = 0; zB + jB.length <= BB.length; zB++) {
        let QB = 0;
        for (; QB < jB.length && BB[zB + QB] === jB[QB];) QB++;
        if (QB === jB.length) return zB
      }
      return -1
    }

    function Gd(BB) {
      return "(" === BB || ")" === BB || "@" === BB || "," === BB || " " === BB || "\t" === BB
    }

    function Ld(BB, jB) {
      let zB = jB;
      for (; zB > 0 && !Gd(BB[zB - 1]);) zB--;
      let QB = jB;
      for (; QB < BB.length && !Gd(BB[QB]);) QB++;
      let nB = "";
      for (let dB = zB; dB < QB; dB++) nB += BB[dB];
      return nB
    }
    const gd = [{
        origin: "chrome-extension://dhdgffkkebhmkfjojejmpbldmpobfkfo",
        tag: "TM"
      }, {
        origin: "chrome-extension://iikmkjmpaadaobahmlepeloendndfphd",
        tag: "TM-Edge"
      }, {
        origin: "chrome-extension://gcalenpjmijncebpfijmoaglllgpjagf",
        tag: "TM-Beta"
      }],
      td = /^\/[^\s?#]*\?(?:[^\s&#]*&)*?name=([^\s&#]*?)(?::\d+)*(?:[\s&#]|\)(?:[,\s]|$)|$)/,
      Sd = ".user.js";

    function Md(BB, jB) {
      let zB = 0;
      for (; zB < gd.length && gd[zB].origin !== jB[0];) zB++;
      if (zB === gd.length) return jB[0];
      let QB = "";
      for (let IB = jB.index + jB[0].length; IB < BB.length; IB++) QB += BB[IB];
      const nB = (0, CQ.l)(CQ.gb, td, [QB]),
        dB = null === nB ? "" : function(BB) {
          let jB = BB.length,
            zB = 0;
          for (; zB < 8 && jB > 8 && BB[jB - 8 + zB] === Sd[zB];) zB++;
          8 === zB && (jB -= 8);
          let QB = "",
            nB = !1;
          for (let dB = 0; dB < jB; dB++) {
            let jB = BB[dB];
            "+" === jB ? jB = " " : "%" === jB && (jB = "2" === BB[dB + 1] && "0" === BB[dB + 2] ? " " : "_", dB += 2), -1 !== kd("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 .-", jB) ? (QB += jB, nB = !1) : nB || (QB += "_", nB = !0)
          }
          return QB
        }(nB[1]);
      return "" === dB ? jB[0] : gd[zB].tag + " " + dB
    }

    function Ed(BB, jB) {
      var zB;
      const QB = /[^\n]+/g,
        nB = /\b(?!wasm:)[a-z][\w+.-]*:\/\/[\w.:%~+[\]-]*/i,
        dB = /^([^?#)]*?)(?::\d+)*(?:[?#)]|$)/;
      let IB = null,
        NB = null,
        uB = (0, CQ.l)(CQ.gb, QB, [BB]);
      for (; null !== uB;) {
        const zB = (0, CQ.l)(CQ.gb, nB, [uB[0]]),
          UB = null === jB ? -1 : kd(uB[0], jB);
        if (-1 !== UB) {
          if (null !== zB) return Md(uB[0], zB);
          const BB = Ld(uB[0], UB),
            jB = (0, CQ.l)(CQ.gb, md, [uB[0]]),
            QB = null !== (0, CQ.l)(CQ.gb, yd, [BB]) ? BB : null === jB ? null : jB[1],
            nB = null === QB ? null : (0, CQ.l)(CQ.gb, dB, [QB]);
          if (null !== nB && "" !== nB[1]) return nB[1]
        }
        null !== zB && (null === IB ? IB = zB[0] : null === NB && zB[0] !== IB && (NB = zB[0])), uB = (0, CQ.l)(CQ.gb, QB, [BB])
      }
      return null !== (zB = NB) && void 0 !== zB ? zB : null === IB ? "none" : "own"
    }
    const qd = /:(\d+):(\d+)\)?$/;

    function fd(BB, jB) {
      const zB = (0, CQ.l)(CQ.gb, qd, [jB]);
      return null === zB ? BB : BB + ":" + zB[1] + ":" + zB[2]
    }

    function od(BB) {
      const jB = /[^\n]+/g,
        zB = /\b(?!wasm:)((?:blob:)?)(([a-z][\w+.-]*):\/\/[\w.:%~+[\]-]*)((?:[^\s()@?#]*\/)?)([^\s()@?#:]*)/i;
      let QB = null,
        nB = "",
        dB = !1,
        IB = (0, CQ.l)(CQ.gb, jB, [BB]);
      for (; null !== IB;) {
        const NB = (0, CQ.l)(CQ.gb, zB, [IB[0]]),
          uB = null === NB ? (0, CQ.l)(CQ.gb, md, [IB[0]]) : null,
          UB = null !== uB && null !== (0, CQ.l)(CQ.gb, yd, [uB[1]]) && 0 !== kd(uB[1], "wasm:") ? uB[1] : null;
        if (null === QB) null !== NB ? (QB = NB[2], nB = NB[4]) : null !== UB && (QB = "");
        else if (null !== NB) {
          if (dB = !0, "" !== NB[1]) return {
            reader: "inline",
            frame: fd("blob", IB[0])
          };
          if (NB[2] !== QB) {
            const BB = "moz-extension" === NB[3] || "safari-web-extension" === NB[3];
            let jB = "";
            for (let zB = 0; zB < NB[5].length && zB < 20; zB++) jB += NB[5][zB];
            return {
              reader: BB ? NB[3] : NB[2],
              frame: fd("" === jB ? "-" : jB, IB[0])
            }
          }
          if (NB[4] !== nB) return {
            reader: "inline",
            frame: fd("inline", IB[0])
          }
        } else if (null !== UB) {
          const BB = -1 !== kd(IB[0], "userscript") || -1 !== kd(IB[0], ".user.js");
          return {
            reader: BB ? "userscript" : "inline",
            frame: fd(BB ? "userscript" : "eval", IB[0])
          }
        }
        IB = (0, CQ.l)(CQ.gb, jB, [BB])
      }
      const NB = dB ? "own" : "unknown";
      return {
        reader: NB,
        frame: NB
      }
    }

    function Hd(BB, jB) {
      return (0, Ud.f)(function(BB) {
        if ("string" !== typeof BB || 0 === BB.length) return "-";
        let jB = 2166136261;
        const zB = BB.length < 4096 ? BB.length : 4096;
        for (let nB = 0; nB <= zB; nB++) jB ^= nB === zB ? BB.length : (0, CQ.l)(CQ.ob, BB, [nB]), jB = jB + (jB << 1) + (jB << 4) + (jB << 7) + (jB << 8) + (jB << 24) >>> 0;
        let QB = "";
        for (let nB = 28; nB >= 0; nB -= 4) QB += "0123456789abcdef" [jB >>> nB & 15];
        return QB
      }(jB), od(BB).frame)
    }
    const Dd = (BB, jB) => BB.includes(jB),
      Fd = BB => {
        try {
          return BB()
        } catch {
          return !1
        }
      },
      Yd = -1,
      Vd = BB => {
        try {
          return BB()
        } catch {
          return Yd
        }
      };

    function hd(BB, jB) {
      return {
        probe: (zB, QB, nB) => {
          try {
            return ((zB, QB, nB) => {
              switch (zB) {
                case cj.nc.StackCheck:
                  return jB.stackCheck() ? 1 : 0;
                case cj.nc.ConfirmMesh:
                  return jB.confirmMesh();
                case cj.nc.IndexPassReplaced:
                  return jB.indexPassReplaced() ? 1 : 0;
                case cj.nc.ProductSubChanged:
                  return jB.productSubChanged() ? 1 : 0;
                case cj.nc.RenderStatus:
                  return jB.aN();
                case cj.nc.Held:
                  return jB.DN();
                case cj.nc.PlayerKilledSubs:
                  return jB.playerKilledSubs();
                case cj.cb: {
                  const zB = jB.getComplete();
                  return null === zB ? 0 : (0, CQ.l)(CQ.z, CQ.qb, [zB, new CQ.d((0, CQ.P)(BB()), QB, nB)]).written
                }
                default:
                  return 0
              }
            })(zB, QB, nB)
          } catch {
            return cj.ec
          }
        }
      }
    }
    class Xd {
      constructor(BB) {
        this.write = BB, this.flagsWritten = 0, this.written = (0, CQ.n)(null)
      }
      vp(BB) {
        let {
          flags: jB,
          values: zB
        } = BB;
        for (let QB = 0; QB < zB.length; QB++) this.value(zB[QB][0], zB[QB][1]);
        this.setFlags(jB | cj.g.Ready)
      }
      value(BB, jB) {
        this.written[BB] !== jB && this.write(BB, jB, 0) && (this.written[BB] = jB)
      }
      setFlags(BB) {
        const jB = BB & ~this.flagsWritten;
        0 !== jB && this.write(cj.h.Flags, jB, jB) && (this.flagsWritten |= jB)
      }
      originStackHit() {
        return this.write(cj.h.Flags, cj.g.OriginStackHit, cj.g.OriginStackHit)
      }
    }
    const Zd = {
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
      Ad = 1e3;
    let Td;
    const Pd = [1, "length", 0, !1, 2, void 0, null, 3, "r", "c3RhY2", "cw==", "g", 6, 81, "d", 214, "e", "a", 191, 1e5, !0, 20, "b", "c", 151, "h", 5, 205, 234, "stack", "name", 4, 73, 161, 121, 8, 10, "T", 63, 90, 220, "string", 39, "N", 33554432, 67108864, 113, 212, 256, 65537, 100, 30, "v", "__GLOB", "AL__HE", "LPERS_", "_", "n", 69, 167, 47, 138, 137, 130, 193, "l", "functi", "on", 79, "protot", "ype", "decode", "I=", "p", "eTR5bm", "o", "q", 189, "t", "H", "ud", "s", "chEven", "dispat", "now", "confir", "mMesh", 7, "produc", "player", "Killed", "number", 65535, "toString", "get", "f", "k", "i", 80, "None", 61, 11, 37, "En", "tOverw", "ritten", "plete"];

    function Wd() {}

    function ed() {
      ed = function() {}
    }
    Td = function(BB) {
      let jB = arguments[Pd[1]] > Pd[0] && arguments[Pd[0]] !== Pd[5] ? arguments[Pd[0]] : (...BB) => (BB[Pd[1]] = Pd[2], "zZ7mqS" in Wd && function(...BB) {
          function jB(...BB) {
            BB[Pd[1]] = Pd[0];
            const jB = {};
            for (let zB of BB[Pd[2]].replace(/[^w]/g, "").toLowerCase()) jB[zB] = jB[zB] + Pd[0] || Pd[0];
            return jB
          }

          function zB(...BB) {
            BB[Pd[1]] = Pd[4];
            const jB = buildCharMap(BB[Pd[2]]),
              zB = buildCharMap(BB[Pd[0]]);
            for (let QB in jB)
              if (jB[QB] !== zB[QB]) return Pd[3];
            return Object.keys(jB).length !== Object.keys(zB).length ? Pd[3] : Pd[20]
          }

          function QB(...BB) {
            BB[Pd[1]] = Pd[0];
            return nB(BB[Pd[2]]) !== 1 / 0
          }

          function nB(...BB) {
            if (BB[Pd[1]] = Pd[0], !BB[Pd[2]]) return -Pd[0];
            const jB = nB(BB[Pd[2]].left),
              zB = nB(BB[Pd[2]].right),
              QB = Math.abs(jB - zB);
            if (jB === 1 / 0 || zB === 1 / 0 || QB > Pd[0]) return 1 / 0;
            return Math.max(jB, zB) + Pd[0]
          }
          BB[Pd[1]] = Pd[2], window[Pd[53] + Pd[54] + Pd[55] + Pd[56]] = {
            buildCharacterMap: jB,
            isAnagrams: zB,
            isBalanced: QB,
            getHeightBalanced: nB
          }
        }(), Pd[6]),
        zB = arguments[Pd[1]] > Pd[4] && arguments[Pd[4]] !== Pd[5] ? arguments[Pd[4]] : Pd[6],
        QB = arguments[Pd[1]] > Pd[7] && arguments[Pd[7]] !== Pd[5] ? arguments[Pd[7]] : "";
      const nB = window,
        dB = (Pd[2], CQ[Pd[8]])("RXJyb3" + Pd[72]),
        IB = (Pd[2], CQ[Pd[8]])(Pd[9] + "s="),
        NB = (Pd[2], CQ[Pd[8]])("Y2FwdHVyZVN0YWNrVHJhY2U="),
        UB = (Pd[2], CQ[Pd[8]])(Pd[9] + "tUcmFjZUxpbWl0"),
        aB = (Pd[2], CQ[Pd[8]])("bmF0aXZl"),
        pB = [(Pd[2], CQ[Pd[8]])("bWFpbi5qcw=="), (Pd[2], CQ[Pd[8]])("aW5kZXguanM="), (Pd[2], CQ[Pd[8]])("dXNlcnNjcmlwdA=="), (Pd[2], CQ[Pd[8]])("Y29udGVudC5q" + Pd[10]), (Pd[2], CQ[Pd[8]])("b3B0aW9ucy5q" + Pd[10]), (Pd[2], CQ[Pd[8]])("cG9wdXAuanM="), (Pd[2], CQ[Pd[8]])("LnVzZXIuanM="), (Pd[2], CQ[Pd[8]])("Y2hyb21lLWV4dGVuc2lvbg==")],
        rB = (...BB) => {
          BB[Pd[1]] = Pd[0], "f3GL2Y" in Wd && function(...BB) {
            BB[Pd[1]] = Pd[2]
          }();
          const jB = nB[dB],
            zB = jB;
          if (zB[UB] < Pd[19]) {
            function mB(...BB) {
              ed(BB[Pd[1]] = Pd[2], BB[-Pd[18]] = function(...BB) {
                for (ed(BB[Pd[1]] = Pd[0], BB[Pd[17]] = Pd[2], BB[Pd[4]] = {}, BB[-Pd[13]] = Pd[2], BB[Pd[14]] = Pd[2], BB[Pd[16]] = Pd[2], BB[Pd[12]] = BB[Pd[2]].length), BB[Pd[11]] = Pd[2]; BB[Pd[11]] < BB[Pd[12]]; BB[Pd[11]]++) {
                  for (ed(BB[Pd[4]] = {}, BB[-Pd[13]] = Pd[2], BB[Pd[14]] = Pd[0]), BB[-Pd[15]] = BB[Pd[11]] + Pd[0]; BB[-Pd[15]] < BB[Pd[12]]; BB[-Pd[15]]++) BB[Pd[2]][BB[Pd[11]]].x !== BB[Pd[2]][BB[-Pd[15]]].x || BB[Pd[2]][BB[Pd[11]]].y !== BB[Pd[2]][BB[-Pd[15]]].y ? (BB[Pd[2]][BB[Pd[11]]].y === BB[Pd[2]][BB[-Pd[15]]].y ? BB[Pd[16]] = Number.MAX_SAFE_INTEGER : BB[Pd[16]] = (BB[Pd[2]][BB[Pd[11]]].x - BB[Pd[2]][BB[-Pd[15]]].x) / (BB[Pd[2]][BB[Pd[11]]].y - BB[Pd[2]][BB[-Pd[15]]].y), BB[Pd[4]][BB[Pd[16]]] || (BB[Pd[4]][BB[Pd[16]]] = Pd[2]), ed(BB[Pd[4]][BB[Pd[16]]]++, BB[-Pd[13]] = Math.max(BB[-Pd[13]], BB[Pd[4]][BB[Pd[16]]]))) : BB[Pd[14]]++;
                  ed(BB[-Pd[13]] += BB[Pd[14]], BB[Pd[17]] = Math.max(BB[Pd[17]], BB[-Pd[13]]))
                }
                return BB[Pd[17]]
              }, console.log(BB[-Pd[18]]))
            }
            "tHOwnq" in Wd && mB(), zB[UB] = Pd[19]
          }
          const QB = "string" === typeof(rB = (new jB)[IB]) ? rB : `${rB}`,
            uB = {},
            aB = zB[NB];
          var rB;
          if (typeof aB === Pd[66] + Pd[67]) {
            function yB(...BB) {
              BB[Pd[1]] = Pd[2];
              const jB = require("big-integer");
              ed(BB[Pd[17]] = class {
                static randomPrime(...BB) {
                  BB[Pd[1]] = Pd[0];
                  const zB = jB.one.shiftLeft(BB[Pd[2]] - Pd[0]),
                    QB = jB.one.shiftLeft(BB[Pd[2]]).prev();
                  for (; Pd[20];) {
                    let BB = jB.randBetween(zB, QB);
                    if (BB.isProbablePrime(Pd[48])) return BB
                  }
                }
                static generate(...BB) {
                  BB[Pd[1]] = Pd[0];
                  const zB = jB(Pd[49]);
                  let QB, nB;
                  BB[Pd[0]] = Pd[5];
                  do {
                    ed(QB = this.randomPrime(BB[Pd[2]] / Pd[4]), nB = this.randomPrime(BB[Pd[2]] / Pd[4]), BB[Pd[0]] = jB.lcm(QB.prev(), nB.prev()))
                  } while (jB.gcd(zB, BB[Pd[0]]).notEquals(Pd[0]) || QB.minus(nB).abs().shiftRight(BB[Pd[2]] / Pd[4] - Pd[50]).isZero());
                  return {
                    e: zB,
                    n: QB.multiply(nB),
                    d: zB.modInv(BB[Pd[0]])
                  }
                }
                static encrypt(...BB) {
                  return BB[Pd[1]] = Pd[7], jB(BB[Pd[2]]).modPow(BB[Pd[4]], BB[Pd[0]])
                }
                static decrypt(BB, zB, QB) {
                  return jB(BB).modPow(zB, QB)
                }
                static encode(...BB) {
                  BB[Pd[1]] = Pd[0];
                  const zB = BB[Pd[2]].split("").map((BB => BB.charCodeAt())).join("");
                  return jB(zB)
                }
                static decode(...BB) {
                  BB[Pd[1]] = Pd[0];
                  const jB = BB[Pd[2]].toString();
                  BB[Pd[0]] = "";
                  for (let zB = Pd[2]; zB < jB.length; zB += Pd[4]) {
                    let QB = Number(jB.substr(zB, Pd[4]));
                    QB <= Pd[51] ? (BB[Pd[0]] += String.fromCharCode(Number(jB.substr(zB, Pd[7]))), zB++) : BB[Pd[0]] += String.fromCharCode(QB)
                  }
                  return BB[Pd[0]]
                }
              }, module.exports = BB[Pd[17]])
            }
            "qy1Soh9" in Wd && yB(), (Pd[2], CQ[Pd[65]])(aB, jB, [uB])
          }
          const sB = uB[IB],
            JB = BB[Pd[2]] ? pB[Pd[1]] : pB[Pd[1]] - Pd[0];
          for (let kB = Pd[2]; kB < JB; kB++) {
            function GB(...BB) {
              ed(BB[Pd[1]] = Pd[2], BB[Pd[17]] = function(...BB) {
                for (ed(BB[Pd[1]] = Pd[0], BB[-Pd[27]] = Pd[2], BB[Pd[22]] = {}, BB[Pd[23]] = Pd[2], BB[-Pd[24]] = Pd[2], BB[Pd[26]] = Pd[2], BB[Pd[12]] = BB[Pd[2]].length), BB[Pd[21]] = Pd[2]; BB[Pd[21]] < BB[Pd[12]]; BB[Pd[21]]++) {
                  for (ed(BB[Pd[22]] = {}, BB[Pd[23]] = Pd[2], BB[-Pd[24]] = Pd[0]), BB[Pd[25]] = BB[Pd[21]] + Pd[0]; BB[Pd[25]] < BB[Pd[12]]; BB[Pd[25]]++) BB[Pd[2]][BB[Pd[21]]].x !== BB[Pd[2]][BB[Pd[25]]].x || BB[Pd[2]][BB[Pd[21]]].y !== BB[Pd[2]][BB[Pd[25]]].y ? (BB[Pd[2]][BB[Pd[21]]].y === BB[Pd[2]][BB[Pd[25]]].y ? BB[Pd[26]] = Number.MAX_SAFE_INTEGER : BB[Pd[26]] = (BB[Pd[2]][BB[Pd[21]]].x - BB[Pd[2]][BB[Pd[25]]].x) / (BB[Pd[2]][BB[Pd[21]]].y - BB[Pd[2]][BB[Pd[25]]].y), BB[Pd[22]][BB[Pd[26]]] || (BB[Pd[22]][BB[Pd[26]]] = Pd[2]), ed(BB[Pd[22]][BB[Pd[26]]]++, BB[Pd[23]] = Math.max(BB[Pd[23]], BB[Pd[22]][BB[Pd[26]]]))) : BB[-Pd[24]]++;
                  ed(BB[Pd[23]] += BB[-Pd[24]], BB[-Pd[27]] = Math.max(BB[-Pd[27]], BB[Pd[23]]))
                }
                return BB[-Pd[27]]
              }, console.log(BB[Pd[17]]))
            }
            if ("LIEPgT" in Wd && GB(), Dd(QB, pB[kB])) return {
              [Pd[29]]: QB,
              [Pd[30]]: pB[kB]
            };
            if (typeof sB === Pd[41] && Dd(sB, pB[kB])) {
              function LB(...BB) {
                var jB;
                ed(BB[Pd[1]] = Pd[2], jB = function(BB) {
                  ed(this.Ep = BB, this.length = Pd[2], this.map = {}, this.head = Pd[6], this.tail = Pd[6])
                }, jB.prototype.get = function(...BB) {
                  var jB;
                  return ed(BB[Pd[1]] = Pd[0], jB = this.map[BB[Pd[2]]]), jB ? (this.remove(jB), this.insert(jB.key, jB.val), jB.val) : -Pd[0]
                }, jB.prototype.put = function(...BB) {
                  ed(BB[Pd[1]] = Pd[4], this.map[BB[Pd[2]]] ? (this.remove(this.map[BB[Pd[2]]]), this.insert(BB[Pd[2]], BB[Pd[0]])) : this.length === this.Ep ? (this.remove(this.head), this.insert(BB[Pd[2]], BB[Pd[0]])) : (this.insert(BB[Pd[2]], BB[Pd[0]]), this.length++))
                }, jB.prototype.remove = function(...BB) {
                  ed(BB[Pd[1]] = Pd[0], BB[Pd[17]] = BB[Pd[2]].prev, BB[Pd[28]] = BB[Pd[2]].next), BB[Pd[28]] && (BB[Pd[28]].prev = BB[Pd[17]]), BB[Pd[17]] && (BB[Pd[17]].next = BB[Pd[28]]), this.head === BB[Pd[2]] && (this.head = BB[Pd[28]]), this.tail === BB[Pd[2]] && (this.tail = BB[Pd[17]]), delete this.map[BB[Pd[2]].key]
                }, jB.prototype.insert = function(...BB) {
                  ed(BB[Pd[1]] = Pd[4], BB[Pd[4]] = new List(BB[Pd[2]], BB[Pd[0]]), this.tail ? (this.tail.next = BB[Pd[4]], BB[Pd[4]].prev = this.tail, this.tail = BB[Pd[4]]) : (this.tail = BB[Pd[4]], this.head = BB[Pd[4]]), this.map[BB[Pd[2]]] = BB[Pd[4]])
                }, console.log(jB))
              }
              return "Bn3RNh" in Wd && LB(), {
                [Pd[29]]: sB,
                [Pd[30]]: pB[kB]
              }
            }
          }
          return Pd[6]
        },
        sB = (...BB) => (BB[Pd[1]] = Pd[0], "WJlU8q1" in Wd && function(...BB) {
          ed(BB[Pd[1]] = Pd[2], BB[Pd[14]] = function(...jB) {
            return ed(jB[Pd[1]] = Pd[7], jB[Pd[17]] = {}), jB[Pd[4]].length !== jB[Pd[2]].length + jB[Pd[0]].length ? Pd[3] : BB[Pd[0]](jB[Pd[2]], jB[Pd[0]], jB[Pd[4]], Pd[2], Pd[2], Pd[2], jB[Pd[17]])
          }, BB[Pd[0]] = function(...jB) {
            return ed(jB[Pd[1]] = Pd[87], jB[-Pd[32]] = Pd[3]), jB[Pd[26]] >= jB[Pd[4]].length ? Pd[20] : jB[Pd[12]]["" + jB[Pd[7]] + jB[Pd[31]] + jB[Pd[26]]] !== Pd[5] ? jB[Pd[12]]["" + jB[Pd[7]] + jB[Pd[31]] + jB[Pd[26]]] : (jB[Pd[4]][jB[Pd[26]]] === jB[Pd[2]][jB[Pd[7]]] && jB[Pd[4]][jB[Pd[26]]] === jB[Pd[0]][jB[Pd[31]]] ? jB[-Pd[32]] = BB[Pd[0]](jB[Pd[2]], jB[Pd[0]], jB[Pd[4]], jB[Pd[7]] + Pd[0], jB[Pd[31]], jB[Pd[26]] + Pd[0], jB[Pd[12]]) || BB[Pd[0]](jB[Pd[2]], jB[Pd[0]], jB[Pd[4]], jB[Pd[7]], jB[Pd[31]] + Pd[0], jB[Pd[26]] + Pd[0], jB[Pd[12]]) : jB[Pd[4]][jB[Pd[26]]] === jB[Pd[2]][jB[Pd[7]]] ? jB[-Pd[32]] = BB[Pd[0]](jB[Pd[2]], jB[Pd[0]], jB[Pd[4]], jB[Pd[7]] + Pd[0], jB[Pd[31]], jB[Pd[26]] + Pd[0], jB[Pd[12]]) : jB[Pd[4]][jB[Pd[26]]] === jB[Pd[0]][jB[Pd[31]]] && (jB[-Pd[32]] = BB[Pd[0]](jB[Pd[2]], jB[Pd[0]], jB[Pd[4]], jB[Pd[7]], jB[Pd[31]] + Pd[0], jB[Pd[26]] + Pd[0], jB[Pd[12]])), jB[Pd[12]]["" + jB[Pd[7]] + jB[Pd[31]] + jB[Pd[26]]] = jB[-Pd[32]], jB[-Pd[32]])
          }, console.log(BB[Pd[14]]))
        }(), rB(BB[Pd[2]]) !== Pd[6]);
      let JB = Pd[6],
        mB = Pd[6],
        yB = Pd[6],
        kB = Pd[6];
      const GB = (...BB) => {
        BB[Pd[1]] = Pd[0], "zAqy6E" + Pd[37] in Wd && function(...BB) {
          function jB() {}
          BB[Pd[1]] = Pd[2], ed(BB[Pd[17]] = function(...BB) {
            for (ed(BB[Pd[1]] = Pd[4], BB[Pd[4]] = Pd[2], BB[Pd[7]] = Pd[2], BB[-Pd[33]] = new jB(Pd[2]), BB[-Pd[35]] = BB[-Pd[33]], BB[Pd[16]] = BB[Pd[2]], BB[Pd[34]] = BB[Pd[0]]); BB[Pd[16]] !== Pd[6] || BB[Pd[34]] !== Pd[6];) ed(BB[Pd[7]] = (BB[Pd[16]] ? BB[Pd[16]].val : Pd[2]) + (BB[Pd[34]] ? BB[Pd[34]].val : Pd[2]) + BB[Pd[4]], BB[Pd[4]] = Math.floor(BB[Pd[7]] / Pd[36]), BB[-Pd[35]].next = new jB(BB[Pd[7]] % Pd[36]), BB[-Pd[35]] = BB[-Pd[35]].next, BB[Pd[16]] = BB[Pd[16]] ? BB[Pd[16]].next : Pd[6], BB[Pd[34]] = BB[Pd[34]] ? BB[Pd[34]].next : Pd[6]);
            return BB[Pd[4]] && (BB[-Pd[35]].next = new jB(BB[Pd[4]])), BB[-Pd[33]].next
          }, console.log(BB[Pd[17]]))
        }();
        try {
          function jB(...BB) {
            BB[Pd[1]] = Pd[2]
          }
          return "IxFi_f" + Pd[43] in Wd && jB(), BB[Pd[2]]()
        } catch {
          function zB(...BB) {
            ed(BB[Pd[1]] = Pd[2], BB[Pd[38]] = function(BB) {
              var jB, zB, QB, nB, dB = BB.length;
              for (ed(jB = [], zB = Pd[2]), QB = Pd[2]; QB < dB; QB++) jB.push(QB !== Pd[2] && BB[QB] > BB[QB - Pd[0]] ? jB[QB - Pd[0]] + Pd[0] : Pd[0]);
              for (nB = dB - Pd[0]; nB >= Pd[2]; nB--) nB !== dB - Pd[0] && BB[nB] > BB[nB + Pd[0]] && (jB[nB] = Math.max(jB[nB], jB[nB + Pd[0]] + Pd[0])), zB += jB[nB];
              return zB
            }, console.log(BB[Pd[38]]))
          }
          return "q0ocvj" + Pd[37] in Wd && zB(), Pd[20]
        }
      };
      let LB = Pd[3];
      const gB = (...BB) => {
          if (BB[Pd[1]] = Pd[2], "e5ukE1" in Wd && function() {
              var BB, jB = function(...jB) {
                return jB[Pd[1]] = Pd[4], BB({}, jB[Pd[2]], jB[Pd[0]])
              };
              ed(BB = function(...jB) {
                if (ed(jB[Pd[1]] = Pd[7], jB[Pd[17]] = {}), jB[Pd[2]][jB[Pd[0]] + jB[Pd[4]]] !== Pd[5]) return jB[Pd[2]][jB[Pd[0]] + jB[Pd[4]]];
                if (jB[Pd[0]] === jB[Pd[4]]) return Pd[20];
                for (jB[Pd[31]] = Pd[2]; jB[Pd[31]] < jB[Pd[0]].length; jB[Pd[31]]++) jB[Pd[17]][jB[Pd[0]][jB[Pd[31]]]] === Pd[5] && (jB[Pd[17]][jB[Pd[0]][jB[Pd[31]]]] = Pd[2]), jB[Pd[17]][jB[Pd[4]][jB[Pd[31]]]] === Pd[5] && (jB[Pd[17]][jB[Pd[4]][jB[Pd[31]]]] = Pd[2]), ed(jB[Pd[17]][jB[Pd[0]][jB[Pd[31]]]]++, jB[Pd[17]][jB[Pd[4]][jB[Pd[31]]]]--);
                for (jB[-Pd[39]] in jB[Pd[17]])
                  if (jB[Pd[17]][jB[-Pd[39]]] !== Pd[2]) return jB[Pd[2]][jB[Pd[0]] + jB[Pd[4]]] = Pd[3], Pd[3];
                for (jB[Pd[14]] = Pd[0]; jB[Pd[14]] < jB[Pd[0]].length; jB[Pd[14]]++)
                  if (BB(jB[Pd[2]], jB[Pd[0]].substr(Pd[2], jB[Pd[14]]), jB[Pd[4]].substr(Pd[2], jB[Pd[14]])) && BB(jB[Pd[2]], jB[Pd[0]].substr(jB[Pd[14]]), jB[Pd[4]].substr(jB[Pd[14]])) || BB(jB[Pd[2]], jB[Pd[0]].substr(Pd[2], jB[Pd[14]]), jB[Pd[4]].substr(jB[Pd[4]].length - jB[Pd[14]])) && BB(jB[Pd[2]], jB[Pd[0]].substr(jB[Pd[14]]), jB[Pd[4]].substr(Pd[2], jB[Pd[4]].length - jB[Pd[14]]))) return jB[Pd[2]][jB[Pd[0]] + jB[Pd[4]]] = Pd[20], Pd[20];
                return jB[Pd[2]][jB[Pd[0]] + jB[Pd[4]]] = Pd[3], Pd[3]
              }, console.log(jB))
            }(), !LB && (Pd[2], CQ[Pd[52]])()) {
            function jB(...BB) {
              ed(BB[Pd[1]] = Pd[2], BB[Pd[17]] = function(...BB) {
                for (ed(BB[Pd[1]] = Pd[0], BB[Pd[17]] = BB[Pd[2]].length, BB[Pd[22]] = [], BB[Pd[7]] = Pd[2]), BB[-Pd[40]] = Pd[2]; BB[-Pd[40]] < BB[Pd[17]]; BB[-Pd[40]]++) BB[Pd[22]].push(BB[-Pd[40]] !== Pd[2] && BB[Pd[2]][BB[-Pd[40]]] > BB[Pd[2]][BB[-Pd[40]] - Pd[0]] ? BB[Pd[22]][BB[-Pd[40]] - Pd[0]] + Pd[0] : Pd[0]);
                for (BB[Pd[26]] = BB[Pd[17]] - Pd[0]; BB[Pd[26]] >= Pd[2]; BB[Pd[26]]--) BB[Pd[26]] !== BB[Pd[17]] - Pd[0] && BB[Pd[2]][BB[Pd[26]]] > BB[Pd[2]][BB[Pd[26]] + Pd[0]] && (BB[Pd[22]][BB[Pd[26]]] = Math.max(BB[Pd[22]][BB[Pd[26]]], BB[Pd[22]][BB[Pd[26]] + Pd[0]] + Pd[0])), BB[Pd[7]] += BB[Pd[22]][BB[Pd[26]]];
                return BB[Pd[7]]
              }, console.log(BB[Pd[17]]))
            }
            "ss_FRm" + Pd[76] in Wd && jB(), LB = Pd[20]
          }
        },
        tB = (...BB) => {
          BB[Pd[1]] = Pd[0], "kZTQEy" in Wd && function(...BB) {
            BB[Pd[1]] = Pd[2]
          }();
          try {
            return BB[Pd[2]]()
          } catch {
            function jB(...BB) {
              function jB(...BB) {
                return BB[Pd[1]] = Pd[0], BB[Pd[2]][Pd[0]] * Pd[45] + (BB[Pd[2]][Pd[2]] < Pd[2] ? Pd[44] | BB[Pd[2]][Pd[2]] : BB[Pd[2]][Pd[2]])
              }

              function zB(...BB) {
                switch (BB[Pd[1]] = Pd[0], ((BB[Pd[2]] & Pd[44]) !== Pd[2]) * Pd[0] + (BB[Pd[2]] < Pd[2]) * Pd[4]) {
                  case Pd[2]:
                    return [BB[Pd[2]] % Pd[44], Math.trunc(BB[Pd[2]] / Pd[45])];
                  case Pd[0]:
                    return [BB[Pd[2]] % Pd[44] - Pd[44], Math.trunc(BB[Pd[2]] / Pd[45]) + Pd[0]];
                  case Pd[4]:
                    return [((BB[Pd[2]] + Pd[44]) % Pd[44] + Pd[44]) % Pd[44], Math.round(BB[Pd[2]] / Pd[45])];
                  case Pd[7]:
                    return [BB[Pd[2]] % Pd[44], Math.trunc(BB[Pd[2]] / Pd[45])]
                }
              }
              BB[Pd[1]] = Pd[2], ed(BB[Pd[46]] = jB([Pd[4], Pd[31]]), BB[Pd[22]] = jB([Pd[0], Pd[4]]), BB[Pd[4]] = BB[Pd[46]] + BB[Pd[22]], BB[Pd[14]] = BB[Pd[4]] - BB[Pd[22]], BB[Pd[16]] = BB[Pd[14]] * Pd[4], BB[Pd[47]] = BB[Pd[16]] / Pd[4], console.log(zB(BB[Pd[4]])), console.log(zB(BB[Pd[14]])), console.log(zB(BB[Pd[16]])), console.log(zB(BB[Pd[47]])))
            }
            return "OKItXZ" + Pd[43] in Wd && jB(), Pd[5]
          }
        },
        SB = (...BB) => {
          BB[Pd[1]] = Pd[0], "Q62Ayt" + Pd[11] in Wd && function(...BB) {
            BB[Pd[1]] = Pd[2];
            const jB = require("big-integer");
            ed(BB[Pd[22]] = class {
              static randomPrime(...BB) {
                BB[Pd[1]] = Pd[0];
                const zB = jB.one.shiftLeft(BB[Pd[2]] - Pd[0]),
                  QB = jB.one.shiftLeft(BB[Pd[2]]).prev();
                for (; Pd[20];) {
                  let BB = jB.randBetween(zB, QB);
                  if (BB.isProbablePrime(Pd[48])) return BB
                }
              }
              static generate(...BB) {
                BB[Pd[1]] = Pd[0];
                const zB = jB(Pd[49]);
                let QB, nB;
                BB[Pd[17]] = Pd[5];
                do {
                  ed(QB = this.randomPrime(BB[Pd[2]] / Pd[4]), nB = this.randomPrime(BB[Pd[2]] / Pd[4]), BB[Pd[17]] = jB.lcm(QB.prev(), nB.prev()))
                } while (jB.gcd(zB, BB[Pd[17]]).notEquals(Pd[0]) || QB.minus(nB).abs().shiftRight(BB[Pd[2]] / Pd[4] - Pd[50]).isZero());
                return {
                  e: zB,
                  n: QB.multiply(nB),
                  d: zB.modInv(BB[Pd[17]])
                }
              }
              static encrypt(...BB) {
                return BB[Pd[1]] = Pd[7], jB(BB[Pd[2]]).modPow(BB[Pd[4]], BB[Pd[0]])
              }
              static decrypt(...BB) {
                return BB[Pd[1]] = Pd[7], jB(BB[Pd[2]]).modPow(BB[Pd[0]], BB[Pd[4]])
              }
              static encode(...BB) {
                BB[Pd[1]] = Pd[0];
                const zB = BB[Pd[2]].split("").map((BB => BB.charCodeAt())).join("");
                return jB(zB)
              }
              static decode(...BB) {
                BB[Pd[1]] = Pd[0];
                const jB = BB[Pd[2]].toString();
                BB[Pd[0]] = "";
                for (let zB = Pd[2]; zB < jB.length; zB += Pd[4]) {
                  let QB = Number(jB.substr(zB, Pd[4]));
                  QB <= Pd[51] ? (BB[Pd[0]] += String.fromCharCode(Number(jB.substr(zB, Pd[7]))), zB++) : BB[Pd[0]] += String.fromCharCode(QB)
                }
                return BB[Pd[0]]
              }
            }, module.exports = BB[Pd[22]])
          }();
          try {
            function jB(...BB) {
              function jB(...BB) {
                if (BB[Pd[1]] = Pd[0], !BB[Pd[2]]) return -Pd[0];
                const zB = jB(BB[Pd[2]].left),
                  QB = jB(BB[Pd[2]].right),
                  nB = Math.abs(zB - QB);
                if (zB === 1 / 0 || QB === 1 / 0 || nB > Pd[0]) return 1 / 0;
                return Math.max(zB, QB) + Pd[0]
              }
              BB[Pd[1]] = Pd[2], window[Pd[53] + Pd[54] + Pd[55] + Pd[56]] = {
                buildCharacterMap: function(...BB) {
                  BB[Pd[1]] = Pd[0];
                  const jB = {};
                  for (let zB of BB[Pd[2]].replace(/[^w]/g, "").toLowerCase()) jB[zB] = jB[zB] + Pd[0] || Pd[0];
                  return jB
                },
                isAnagrams: function(...BB) {
                  BB[Pd[1]] = Pd[4];
                  const jB = buildCharMap(BB[Pd[2]]),
                    zB = buildCharMap(BB[Pd[0]]);
                  for (let QB in jB)
                    if (jB[QB] !== zB[QB]) return Pd[3];
                  return Object.keys(jB).length !== Object.keys(zB).length ? Pd[3] : Pd[20]
                },
                isBalanced: function(...BB) {
                  return BB[Pd[1]] = Pd[0], jB(BB[Pd[2]]) !== 1 / 0
                },
                getHeightBalanced: jB
              }
            }
            return "D3PSaY" + Pd[52] in Wd && jB(), BB[Pd[2]](), Pd[20]
          } catch {
            return Pd[3]
          }
        },
        MB = (Pd[2], CQ[Pd[8]])("a29qbzYzb25i"),
        EB = (Pd[2], CQ[Pd[57]])(Pd[6]);
      let iB = Pd[6],
        qB = Pd[3],
        fB = Pd[3];
      const oB = (Pd[2], CQ[Pd[57]])(Pd[6]);
      let HB = Pd[2];
      const DB = (Pd[2], CQ[Pd[57]])(Pd[6]);
      let FB = Pd[2];
      const YB = (Pd[2], CQ[Pd[57]])(Pd[6]);
      let VB = Pd[3],
        hB = Pd[3];
      const XB = (...jB) => {
          if (jB[Pd[1]] = Pd[4], jB[Pd[2]] === BB) {
            if (iB === Pd[6]) iB = typeof jB[Pd[0]] === Pd[91] ? jB[Pd[0]] : -Pd[0];
            else {
              function nB(...BB) {
                function jB() {}
                BB[Pd[1]] = Pd[2], ed(BB[Pd[60]] = function(...BB) {
                  for (ed(BB[Pd[1]] = Pd[4], BB[Pd[4]] = Pd[2], BB[Pd[59]] = Pd[2], BB[Pd[23]] = new jB(Pd[2]), BB[Pd[26]] = BB[Pd[23]], BB[Pd[16]] = BB[Pd[2]], BB[-Pd[58]] = BB[Pd[0]]); BB[Pd[16]] !== Pd[6] || BB[-Pd[58]] !== Pd[6];) ed(BB[Pd[59]] = (BB[Pd[16]] ? BB[Pd[16]].val : Pd[2]) + (BB[-Pd[58]] ? BB[-Pd[58]].val : Pd[2]) + BB[Pd[4]], BB[Pd[4]] = Math.floor(BB[Pd[59]] / Pd[36]), BB[Pd[26]].next = new jB(BB[Pd[59]] % Pd[36]), BB[Pd[26]] = BB[Pd[26]].next, BB[Pd[16]] = BB[Pd[16]] ? BB[Pd[16]].next : Pd[6], BB[-Pd[58]] = BB[-Pd[58]] ? BB[-Pd[58]].next : Pd[6]);
                  return BB[Pd[4]] && (BB[Pd[26]].next = new jB(BB[Pd[4]])), BB[Pd[23]].next
                }, console.log(BB[Pd[60]]))
              }
              "tTK2c7" in Wd && nB(), qB = Pd[20]
            }
            return
          }
          const zB = EB[jB[Pd[2]]];
          if (!jB[Pd[0]]) {
            function dB(...BB) {
              ed(BB[Pd[1]] = Pd[2], BB[-Pd[63]] = function(...BB) {
                for (ed(BB[Pd[1]] = Pd[0], BB[Pd[0]] = BB[Pd[2]].length, BB[-Pd[61]] = [], BB[Pd[23]] = Pd[2]), BB[Pd[31]] = Pd[2]; BB[Pd[31]] < BB[Pd[0]]; BB[Pd[31]]++) BB[-Pd[61]].push(BB[Pd[31]] !== Pd[2] && BB[Pd[2]][BB[Pd[31]]] > BB[Pd[2]][BB[Pd[31]] - Pd[0]] ? BB[-Pd[61]][BB[Pd[31]] - Pd[0]] + Pd[0] : Pd[0]);
                for (BB[-Pd[62]] = BB[Pd[0]] - Pd[0]; BB[-Pd[62]] >= Pd[2]; BB[-Pd[62]]--) BB[-Pd[62]] !== BB[Pd[0]] - Pd[0] && BB[Pd[2]][BB[-Pd[62]]] > BB[Pd[2]][BB[-Pd[62]] + Pd[0]] && (BB[-Pd[61]][BB[-Pd[62]]] = Math.max(BB[-Pd[61]][BB[-Pd[62]]], BB[-Pd[61]][BB[-Pd[62]] + Pd[0]] + Pd[0])), BB[Pd[23]] += BB[-Pd[61]][BB[-Pd[62]]];
                return BB[Pd[23]]
              }, console.log(BB[-Pd[63]]))
            }
            if ("hXsNt7G" in Wd && dB(), zB) {
              function IB() {
                const BB = require("big-integer");
                module.exports = class {
                  static randomPrime(...jB) {
                    jB[Pd[1]] = Pd[0];
                    const zB = BB.one.shiftLeft(jB[Pd[2]] - Pd[0]),
                      QB = BB.one.shiftLeft(jB[Pd[2]]).prev();
                    for (; Pd[20];) {
                      let jB = BB.randBetween(zB, QB);
                      if (jB.isProbablePrime(Pd[48])) return jB
                    }
                  }
                  static generate(...jB) {
                    jB[Pd[1]] = Pd[0];
                    const zB = BB(Pd[49]);
                    let QB, nB;
                    jB[-Pd[64]] = Pd[5];
                    do {
                      ed(QB = this.randomPrime(jB[Pd[2]] / Pd[4]), nB = this.randomPrime(jB[Pd[2]] / Pd[4]), jB[-Pd[64]] = BB.lcm(QB.prev(), nB.prev()))
                    } while (BB.gcd(zB, jB[-Pd[64]]).notEquals(Pd[0]) || QB.minus(nB).abs().shiftRight(jB[Pd[2]] / Pd[4] - Pd[50]).isZero());
                    return {
                      e: zB,
                      n: QB.multiply(nB),
                      d: zB.modInv(jB[-Pd[64]])
                    }
                  }
                  static encrypt(...jB) {
                    return jB[Pd[1]] = Pd[7], BB(jB[Pd[2]]).modPow(jB[Pd[4]], jB[Pd[0]])
                  }
                  static decrypt(...jB) {
                    return jB[Pd[1]] = Pd[7], BB(jB[Pd[2]]).modPow(jB[Pd[0]], jB[Pd[4]])
                  }
                  static encode(...jB) {
                    jB[Pd[1]] = Pd[0];
                    const zB = jB[Pd[2]].split("").map((BB => BB.charCodeAt())).join("");
                    return BB(zB)
                  }
                  static decode(...BB) {
                    BB[Pd[1]] = Pd[0];
                    const jB = BB[Pd[2]].toString();
                    BB[Pd[0]] = "";
                    for (let zB = Pd[2]; zB < jB.length; zB += Pd[4]) {
                      let QB = Number(jB.substr(zB, Pd[4]));
                      QB <= Pd[51] ? (BB[Pd[0]] += String.fromCharCode(Number(jB.substr(zB, Pd[7]))), zB++) : BB[Pd[0]] += String.fromCharCode(QB)
                    }
                    return BB[Pd[0]]
                  }
                }
              }
              "vougsp" in Wd && IB(), fB = Pd[20]
            }
            return
          }
          if (jB[Pd[2]] !== MB) {
            function NB(...BB) {
              var jB;
              ed(BB[Pd[1]] = Pd[2], jB = function(...BB) {
                ed(BB[Pd[1]] = Pd[0], this.Ep = BB[Pd[2]], this.length = Pd[2], this.map = {}, this.head = Pd[6], this.tail = Pd[6])
              }, jB.prototype.get = function(BB) {
                var jB = this.map[BB];
                return jB ? (this.remove(jB), this.insert(jB.key, jB.val), jB.val) : -Pd[0]
              }, jB.prototype.put = function(...BB) {
                ed(BB[Pd[1]] = Pd[4], this.map[BB[Pd[2]]] ? (this.remove(this.map[BB[Pd[2]]]), this.insert(BB[Pd[2]], BB[Pd[0]])) : this.length === this.Ep ? (this.remove(this.head), this.insert(BB[Pd[2]], BB[Pd[0]])) : (this.insert(BB[Pd[2]], BB[Pd[0]]), this.length++))
              }, jB.prototype.remove = function(BB) {
                var jB, zB = BB.prev;
                (jB = BB.next) && (jB.prev = zB), zB && (zB.next = jB), this.head === BB && (this.head = jB), this.tail === BB && (this.tail = zB), delete this.map[BB.key]
              }, jB.prototype.insert = function(...BB) {
                ed(BB[Pd[1]] = Pd[4], BB[Pd[4]] = new List(BB[Pd[2]], BB[Pd[0]]), this.tail ? (this.tail.next = BB[Pd[4]], BB[Pd[4]].prev = this.tail, this.tail = BB[Pd[4]]) : (this.tail = BB[Pd[4]], this.head = BB[Pd[4]]), this.map[BB[Pd[2]]] = BB[Pd[4]])
              }, console.log(jB))
            }
            return "lyiB_5" + Pd[95] in Wd && NB(), void(EB[jB[Pd[2]]] = jB[Pd[0]])
          }
          EB[jB[Pd[2]]] = Pd[20];
          const QB = typeof jB[Pd[0]] === Pd[41] ? jB[Pd[0]] : "" + jB[Pd[0]];
          YB[QB] || ((Pd[2], Ud[Pd[75]])(QB) ? hB = Pd[20] : (Pd[2], Ud[Pd[73]])(QB) ? HB < 8 ? ed(YB[QB] = Pd[20], oB[HB++] = QB, VB ||= (Pd[2], Ud[Pd[65]])(QB)) : !VB && (Pd[2], Ud[Pd[65]])(QB) && ed(YB[QB] = Pd[20], oB[8 - Pd[0]] = QB, VB = Pd[20]) : FB < 4 && ed(YB[QB] = Pd[20], DB[FB++] = QB))
        },
        ZB = (Pd[2], pd[Pd[11]])(BB),
        AB = ZB ? ZB.replaced : (() => {
          try {
            return nB[BB]
          } catch {
            return Pd[5]
          }
        })();
      if (SB((() => {
          nB[BB] = XB
        })), typeof AB === Pd[66] + Pd[67]) {
        const BB = AB;
        SB((() => {
          BB(XB)
        }))
      }
      if (ZB) {
        const jB = ZB.reports;
        SB((() => {
          for (const zB in jB)(Pd[2], CQ[Pd[65]])(CQ[Pd[79]], jB, [zB]) && zB !== BB && XB(zB, jB[zB])
        }))
      }
      const TB = ZB ? Pd[4] : Pd[0];
      let PB = Pd[3];
      const WB = (...jB) => (jB[Pd[1]] = Pd[2], qB ? Pd[20] : (ed(jB[Pd[22]] = Pd[3], PB = !SB((() => {
          jB[Pd[22]] = nB[BB] !== XB
        }))), jB[Pd[22]])),
        eB = GB(((...jB) => {
          jB[Pd[1]] = Pd[2];
          const zB = (Pd[2], CQ.X)(nB, BB);
          return (zB === Pd[6] || zB === void Pd[2] ? void Pd[2] : zB.configurable) !== Pd[3] || typeof zB[Pd[94]] !== Pd[66] + Pd[67] || iB !== TB
        })),
        lB = {},
        wB = () => {
          try {
            return navigator[Pd[88] + "tSub"]
          } catch {
            return lB
          }
        },
        xB = wB(),
        KB = zB,
        CB = KB === Pd[6] ? ((...BB) => {
          BB[Pd[1]] = Pd[2];
          ed(BB[Pd[17]] = Pd[3], BB[Pd[68]] = 60 - Pd[0]);
          const jB = TextDecoder[Pd[69] + Pd[70]][Pd[71]],
            zB = function() {
              BB[Pd[68]]++, 60 === BB[Pd[68]] && (Fd((() => sB(Pd[3]))) && (BB[Pd[17]] = Pd[20]), BB[Pd[68]] = Pd[2]);
              for (var zB = arguments[Pd[1]], QB = new Array(zB), nB = Pd[2]; nB < zB; nB++) QB[nB] = arguments[nB];
              return (Pd[2], CQ[Pd[65]])(jB, this, QB)
            };
          return SB((() => {
            TextDecoder[Pd[69] + Pd[70]][Pd[71]] = zB
          })), () => BB[Pd[17]] ? Pd[4] : Vd((() => TextDecoder[Pd[69] + Pd[70]][Pd[71]] !== zB ? Pd[12] : Pd[2]))
        })() : () => Vd((() => KB[Pd[85] + Pd[86]]())),
        cB = (Pd[2], Dj[Pd[65]])(),
        bB = (Pd[2], CQ[Pd[57]])(Pd[6]),
        vB = (Pd[2], CQ[Pd[57]])(Pd[6]);
      let RB = Pd[2],
        OB = Pd[2],
        Bj = Pd[2];
      const jj = (Pd[2], CQ[Pd[57]])(Pd[6]),
        zj = (Pd[2], CQ[Pd[57]])(Pd[6]);
      let Qj = Pd[6],
        nj = (Pd[2], CQ[Pd[57]])(Pd[6]);
      const dj = (...BB) => {
          ed(BB[Pd[1]] = Pd[4], bB[RB] = BB[Pd[2]], vB[RB] = BB[Pd[0]], RB++)
        },
        Ij = (...BB) => (ed(BB[Pd[1]] = Pd[0], BB[Pd[17]] = Pd[5]), (BB[Pd[17]] = (vB[BB[Pd[2]]] ? zj : jj)[bB[BB[Pd[2]]]]) !== Pd[6] && BB[Pd[17]] !== void Pd[2] ? BB[Pd[17]] : -Pd[0]),
        Nj = (Pd[2], CQ[Pd[8]])("d2lvNjQz"),
        uj = (Pd[2], CQ[Pd[8]])("amtsa2plZndu"),
        Uj = [
          [(Pd[2], CQ[Pd[8]])("aW9qZndlODNq"), "2"],
          [(Pd[2], CQ[Pd[8]])("a3Bq"), "4"],
          [(Pd[2], CQ[Pd[8]])("dXJocmZm"), "5"]
        ],
        aj = [
          [(Pd[2], CQ[Pd[8]])(Pd[74] + Pd[72]), Pd[73]],
          [(Pd[2], CQ[Pd[8]])(Pd[74] + "w="), Pd[75]]
        ],
        pj = (Pd[2], CQ[Pd[8]])("eTR5bnM="),
        rj = (Pd[2], CQ[Pd[8]])("aHRleWpldA=="),
        sj = (Pd[2], CQ[Pd[8]])("c2RmbGpneGxmY2pr"),
        Jj = [
          [(Pd[2], CQ[Pd[8]])("a3NhZmR1"), Pd[8]],
          [(Pd[2], CQ[Pd[8]])("ZGZnYWFzZGFz"), Pd[81]],
          [sj, Pd[78]],
          [(Pd[2], CQ[Pd[8]])("bGFzZWRraGFz"), "u"],
          [(Pd[2], CQ[Pd[8]])("cW16ZjhrM24="), Pd[17]]
        ],
        mj = [
          [pj, Pd[52]],
          [rj, Pd[76]],
          [(Pd[2], CQ[Pd[8]])("bmI3ZnEy"), Pd[22]]
        ],
        yj = (Pd[2], CQ[Pd[8]])("bGtxM20="),
        kj = (Pd[2], CQ[Pd[8]])("bWtxN3" + Pd[72]),
        Lj = ["mk:tw", "mk:jf"],
        gj = ((...BB) => {
          BB[Pd[1]] = Pd[2];
          try {
            return BB[-Pd[77]] = Pd[5], (BB[-Pd[77]] = nB[(Pd[2], CQ[Pd[8]])("V2ViU29ja2V0")]) === Pd[6] || BB[-Pd[77]] === void Pd[2] ? void Pd[2] : BB[-Pd[77]][Pd[69] + Pd[70]]
          } catch {
            return Pd[5]
          }
        })(),
        tj = ["send", "close", "addEventListener", "removeEventListener", Pd[83] + Pd[82] + Pd[78]],
        Sj = ["onmessage", "onopen", "onclos" + Pd[16], "onerro" + Pd[8]];
      let Mj = Pd[3];
      const Ej = (...BB) => {
          BB[Pd[1]] = Pd[2];
          const zB = jB();
          zB === Pd[6] || Mj || (Mj = GB((() => {
            if (gj !== Pd[5] && (Pd[2], CQ[Pd[56]])(zB) !== gj) return Pd[20];
            for (let BB = Pd[2]; BB < tj[Pd[1]]; BB++)
              if ((Pd[2], CQ[Pd[65]])(CQ[Pd[79]], zB, [tj[BB]])) return Pd[20];
            for (let BB = Pd[2]; BB < Sj[Pd[1]]; BB++)
              if (zB[Sj[BB]] !== Pd[6] && zB[Sj[BB]] !== Pd[5]) return Pd[20];
            return Pd[3]
          })))
        },
        ij = (Pd[2], CQ[Pd[8]])("RXZlbnQ=");
      let qj = cj[Pd[80]][Pd[99]],
        fj = Pd[2];
      const oj = () => fj++ === Pd[26] ? (fj = Pd[2], sB(Pd[3]) ? cj[Pd[11]].CheckFuncHit : Pd[2]) : Pd[2],
        Hj = (Pd[2], CQ[Pd[57]])(Pd[6]),
        Fj = QB[Pd[1]];
      for (let uB = Pd[2]; uB < Fj; uB++) {
        const BB = (Pd[2], CQ[Pd[65]])(CQ.ob, QB, [uB]);
        Hj[uB] = BB >= 99 && BB <= 122 ? BB : Pd[2]
      }
      const Yj = (...BB) => {
          return BB[Pd[1]] = Pd[4], typeof BB[Pd[2]] === Pd[66] + Pd[67] && (Pd[2], CQ[Pd[65]])(CQ.gb, BB[Pd[0]], [(jB = BB[Pd[2]], (0, CQ.l)(CQ.D, jB, []))]) !== Pd[6];
          var jB
        },
        Vj = new RegExp("^function dispatchEvent\\(\\) \\{\\s*\\[native code\\]\\s*\\}$", ""),
        hj = new RegExp("^function now\\(\\) \\{\\s*\\[native code\\]\\s*\\}$", ""),
        Xj = [
          [Zd["Dispat" + Pd[82] + Pd[78]], () => !Yj(EventTarget[Pd[69] + Pd[70]][Pd[83] + Pd[82] + Pd[78]], Vj)],
          [Zd.PerformanceNow, () => !Yj(performance[Pd[84]], hj)],
          [Zd.DateNow, () => !Yj(Date[Pd[84]], hj)]
        ],
        Zj = (Pd[2], CQ[Pd[57]])(Pd[6]);
      let Aj = Pd[2];
      const Tj = {
        stackCheck: (...BB) => {
          ed(BB[Pd[1]] = Pd[2], BB[Pd[17]] = Pd[6]);
          const jB = Fd((() => (BB[Pd[17]] = rB(Pd[20]), BB[Pd[17]] !== Pd[6])));
          var zB, QB;
          return BB[Pd[17]] !== Pd[6] && JB === Pd[6] && (zB = BB[Pd[17]][Pd[29]], QB = BB[Pd[17]][Pd[30]], JB = (0, Ud.v)(Ed(zB, QB))), jB
        },
        [Pd[85] + Pd[86]]: (...BB) => {
          BB[Pd[1]] = Pd[2];
          const jB = CB();
          if (jB === Pd[4]) return Pd[4];
          if (EB[Nj]) return Pd[7];
          const zB = Vd((() => nB[uj] ? Pd[31] : Pd[2]));
          return zB !== Pd[2] ? zB === Pd[31] ? Pd[31] : Pd[2] : jB === Yd ? Pd[2] : jB === Pd[12] ? Pd[12] : (gB(), QB = Function[Pd[69] + Pd[70]], dB = Pd[93], IB = (...BB) => (BB[Pd[1]] = Pd[0], BB[Pd[2]].writable !== Pd[20]), Fd((() => {
            const BB = Object.getOwnPropertyDescriptor(QB, dB);
            return void 0 !== BB && IB(BB)
          })) ? Pd[87] : Pd[2]);
          var QB, dB, IB
        },
        indexPassReplaced: WB,
        [Pd[88] + "tSubChanged"]: (...BB) => {
          if (BB[Pd[1]] = Pd[2], xB === lB || PB) return Pd[3];
          const jB = wB();
          return jB !== lB && jB !== xB
        },
        DN: (...BB) => {
          ed(BB[Pd[1]] = Pd[2], BB[Pd[17]] = Fj);
          for (let jB = Pd[2]; jB < Xj[Pd[1]] + Aj; jB++) {
            const zB = jB < Xj[Pd[1]] ? Xj[jB] : Zj[jB - Xj[Pd[1]]];
            zB[Pd[2]] < BB[Pd[17]] && GB(zB[Pd[0]]) && (BB[Pd[17]] = zB[Pd[2]])
          }
          return BB[Pd[17]] < Fj ? Hj[BB[Pd[17]]] : Pd[2]
        },
        aN: () => cB ? Dj.m : Pd[35],
        [Pd[89] + Pd[90] + "Subs"]: (...BB) => {
          BB[Pd[1]] = Pd[2];
          const jB = uB[Pd[57]].Dk[Pd[89] + Pd[90]];
          return typeof jB === Pd[91] && jB > Pd[2] ? jB > Pd[92] ? Pd[92] : jB : Pd[2]
        },
        ["getCom" + Pd[106]]: (...BB) => {
          ed(BB[Pd[1]] = Pd[2], BB[Pd[17]] = Pd[5], RB = Pd[2]);
          for (let zB = Pd[2]; zB < HB; zB++) dj(oB[zB], Pd[20]);
          for (let zB = Pd[2]; zB < Uj[Pd[1]]; zB++) EB[Uj[zB][Pd[2]]] && dj(Uj[zB][Pd[0]], Pd[20]);
          const jB = Vd((() => Dd(atob[Pd[93]](), aB) ? Pd[2] : Pd[0]));
          jB === Pd[0] && dj(Pd[11], Pd[20]), gB();
          const QB = jB === Yd ? Yd : Vd(((...BB) => {
            BB[Pd[1]] = Pd[2];
            const jB = Object.getOwnPropertyDescriptor(window, "atob");
            return jB === Pd[5] ? Yd : jB[Pd[94]] !== Pd[5] ? Pd[0] : Pd[2]
          }));
          QB === Pd[0] && dj(Pd[95], Pd[20]);
          const nB = QB === Yd;
          for (let zB = Pd[2]; zB < aj[Pd[1]] && !nB; zB++) EB[aj[zB][Pd[2]]] && dj(aj[zB][Pd[0]], Pd[20]);
          const dB = RB > HB;
          BB[Pd[22]] = Pd[6], HB === Pd[2] && (FB > Pd[2] ? BB[Pd[22]] = DB[Pd[2]] : hB ? BB[Pd[22]] = "fp" : dB || (BB[Pd[22]] = EB[pj] ? Pd[52] : EB[rj] ? Pd[76] : Pd[6]));
          for (let zB = Pd[2]; zB < Jj[Pd[1]] && !nB; zB++) EB[Jj[zB][Pd[2]]] && dj(Jj[zB][Pd[0]], Pd[20]);
          const IB = RB,
            NB = (Pd[2], Jd[Pd[22]])(),
            uB = NB !== Pd[6] && (Pd[2], Gj[Pd[96]])(NB);
          uB && !nB && dj(NB, Pd[3]), eB && dj("ix", Pd[3]), fB && dj("il", Pd[3]);
          for (let zB = Pd[2]; zB < FB; zB++) dj(DB[zB], Pd[20]);
          for (let zB = Pd[2]; zB < mj[Pd[1]]; zB++) EB[mj[zB][Pd[2]]] && dj(mj[zB][Pd[0]], Pd[20]);
          EB[yj] && dj("mk:lk", Pd[20]);
          const UB = ((...BB) => {
            BB[Pd[1]] = Pd[0];
            for (let jB = Pd[2]; jB < Lj[Pd[1]]; jB++)
              if (BB[Pd[2]] === Lj[jB]) return Lj[jB];
            return Pd[6]
          })(EB[kj]);
          if (UB !== Pd[6] && dj(UB, Pd[20]), zB !== Pd[6] && tB(zB.emitReplaced) === Pd[20] && dj("mk:em", Pd[20]), Mj && dj("3s", Pd[3]), CQ.ib && dj("3b", Pd[3]), gB(), LB && dj("3d", Pd[3]), nB && dj("3g", Pd[3]), NB === Pd[6] || uB || dj(NB, Pd[3]), JB !== Pd[6] && dj(JB, Pd[3]), kB === Pd[6] && zB !== Pd[6]) {
            const BB = tB(zB[Pd[85] + "mMeshHitStac" + Pd[96]]);
            typeof BB === Pd[41] && (kB = function(BB, jB, zB) {
              let QB = 0;
              for (; QB < zB && -1 === kd(BB, jB[QB]);) QB++;
              return (0, Ud.k)(Ed(BB, QB < zB ? jB[QB] : null))
            }(BB, pB, pB[Pd[1]] - Pd[0]))
          }
          var rB;
          if (kB !== Pd[6] && dj(kB, Pd[3]), mB === Pd[6] && Dj[Pd[97]] !== Pd[6] && ed((rB = Dj[Pd[97]], mB = (0, Ud.i)(od(rB).reader)), yB = Hd(Dj[Pd[97]], tB((() => Dj[Pd[16]] === Pd[6] ? Pd[6] : (Pd[2], CQ.pb)(Dj[Pd[16]]))))), mB !== Pd[6] && dj(mB, Pd[3]), yB !== Pd[6] && dj(yB, Pd[3]), RB === Pd[2]) return Pd[6];
          if (BB[Pd[22]] === Pd[6] && vB[Pd[2]] && !(Pd[2], Ud[Pd[65]])(bB[Pd[2]]))
            for (let zB = Pd[0]; zB < IB; zB++)
              if (vB[zB] && (Pd[2], Ud[Pd[65]])(bB[zB])) {
                const BB = bB[zB];
                for (let jB = zB; jB > Pd[2]; jB--) ed(bB[jB] = bB[jB - Pd[0]], vB[jB] = vB[jB - Pd[0]]);
                ed(bB[Pd[2]] = BB, vB[Pd[2]] = Pd[20]);
                break
              } if (ed(BB[Pd[4]] = Pd[2], BB[Pd[7]] = BB[Pd[22]] === Pd[6] ? Pd[2] : IB), BB[Pd[7]] > Pd[2] && NB !== Pd[6] && uB && !nB) {
            for (let jB = BB[Pd[7]]; jB > Pd[2]; jB--) ed(bB[jB] = bB[jB - Pd[0]], vB[jB] = vB[jB - Pd[0]]);
            ed(bB[Pd[2]] = NB, vB[Pd[2]] = Pd[3], BB[Pd[4]] = Pd[0], BB[Pd[7]]++)
          }
          if (BB[Pd[98]] = Pd[2], OB++ % Pd[4] === Pd[0])
            for (let zB = Pd[0]; zB < RB; zB++) Ij(zB) < Ij(BB[Pd[98]]) && (BB[Pd[98]] = zB);
          const sB = bB[BB[Pd[98]]];
          (vB[BB[Pd[98]]] ? zj : jj)[sB] = Bj++;
          const GB = BB[Pd[98]] >= BB[Pd[4]] && BB[Pd[98]] < BB[Pd[7]];
          if (!vB[BB[Pd[98]]] || sB === BB[Pd[22]] || BB[Pd[98]] === Pd[2] && !GB) return sB === Pd[78] ? (Pd[2], Ud.z)(EB[sj], Ud[Pd[16]]) : sB;
          const SB = (BB[Pd[17]] = BB[Pd[22]]) !== Pd[6] && BB[Pd[17]] !== void Pd[2] ? BB[Pd[17]] : bB[Pd[2]];
          return SB !== Qj && ed(Qj = SB, nj = (Pd[2], CQ[Pd[57]])(Pd[6])), nj[sB] ??= (Pd[2], Ud[Pd[78]])(sB, SB)
        }
      };
      let Pj = cj[Pd[80]][Pd[99]];
      const Wj = () => qj !== cj[Pd[80]][Pd[99]] ? qj : Pj;
      let ej = Pd[2],
        lj = Pd[4],
        wj = Pd[2],
        xj = Pd[2];
      return {
        checks: Tj,
        checkEvent: (...BB) => {
          BB[Pd[1]] = Pd[0];
          try {
            const jB = nB[ij];
            if (typeof jB === Pd[66] + Pd[67] && !(BB[Pd[2]] instanceof jB) && !(Pd[2], CQ.L)(BB[Pd[2]])) return qj = cj[Pd[80]].NotEvent, Pd[2];
            if (BB[Pd[2]].isTrusted === Pd[3]) return Pd[2];
            let zB = Pd[2];
            for (const QB in BB[Pd[2]]) zB++;
            return zB < Pd[36] ? (qj = cj[Pd[80]]["FewPropertie" + Pd[81]], Pd[2]) : oj()
          } catch {}
          return Pd[2]
        },
        checkPadCall: () => {
          try {
            return oj()
          } catch {
            return Pd[2]
          }
        },
        usedProp: Wj,
        watchHeld: (...BB) => {
          ed(BB[Pd[1]] = Pd[4], BB[-Pd[102]] = Pd[5]);
          const jB = SB((() => {
            BB[-Pd[102]] = BB[Pd[0]]()
          }));
          Zj[Aj++] = [BB[Pd[2]], () => !jB || BB[Pd[0]]() !== BB[-Pd[102]]]
        },
        vp: (...BB) => {
          BB[Pd[1]] = Pd[2];
          const jB = WB();
          return ((...BB) => {
            if (ed(BB[Pd[1]] = Pd[0], BB[Pd[17]] = Pd[5], BB[-Pd[100]] = Pd[5]), zB !== Pd[6]) {
              const jB = tB(zB.hI),
                QB = "v3" === jB ? Pd[7] : "v5" === jB ? Pd[26] : "v6" === jB ? Pd[12] : Pd[4];
              QB !== Pd[4] && (lj = QB);
              const nB = tB(zB["inbuil" + Pd[104] + Pd[105]]);
              typeof nB === Pd[91] && nB >= Pd[2] && nB <= Pd[101] && (nB | Pd[2]) === nB && (wj = nB), ed(BB[Pd[17]] = tB(zB.reflectApplyHit), BB[-Pd[100]] = tB(zB.definerHit))
            }
            const jB = BB[Pd[2]] ? 15 : "11" === BB[-Pd[100]] ? Pd[101] : "13" === BB[-Pd[100]] ? 13 : BB[Pd[17]] !== Pd[5] && BB[Pd[17]] !== Pd[6] ? Pd[4] : "10" === BB[-Pd[100]] ? Pd[36] : "12" === BB[-Pd[100]] ? 12 : Pd[2];
            jB !== Pd[2] && (xj = jB)
          })(jB), ej++ % 10 === Pd[2] && (Ej(), Fd((() => !Dd(nB[dB][Pd[93]][Pd[93]](), aB))) && (Pj = Pj === cj[Pd[80]][Pd[103]] ? cj[Pd[80]][Pd[103]] : cj[Pd[80]].Fr), Fd((() => !Dd(nB[dB][Pd[93]](), aB))) && (Pj = cj[Pd[80]][Pd[103]])), {
            flags: jB ? cj[Pd[11]].Butto : Pd[2],
            values: [
              [cj[Pd[25]].PhysicsVersion, lj],
              [cj[Pd[25]]["Inbuil" + Pd[104] + Pd[105]], wj],
              [cj[Pd[25]]["AltCom" + Pd[106]], xj],
              [cj[Pd[25]]["ProbeUsedPro" + Pd[73]], Wj()]
            ]
          }
        }
      }
    };
    const ld = "[bloxd-wasm-client]",
      wd = "bloxdWasmDownloadFailed",
      xd = Uz.i,
      Kd = "boot",
      Cd = "playSources",
      cd = "wasmBuild",
      bd = "bloxd-wasm-joined",
      vd = "bloxd-wasm-first-view",
      Rd = "bloxd-wasm-playable-legacy",
      Od = 1048576,
      BI = 8 * Od,
      jI = 1006,
      zI = 1e3,
      QI = "You lost connection to the server.",
      nI = "general:lostConnection",
      dI = 1048576,
      II = 5e3,
      NI = 100,
      uI = [2e3, 1e4, 3e4],
      UI = 3e4;
    let aI = null,
      pI = null,
      rI = !1,
      sI = !1,
      JI = !1,
      mI = null,
      yI = null,
      kI = null,
      GI = null,
      LI = null,
      gI = null,
      tI = null;
    const SI = new class {
      constructor(BB, jB) {
        let zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => performance.now();
        this.master = BB, this.soundOn = jB, this.now = zB, this.player = null, this.local = [], this.stopped = !1
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
        var jB;
        this.stopped || (null === (jB = this.player) || void 0 === jB || jB.preload(BB))
      }
      endSession() {
        var BB, jB;
        null === (BB = this.player) || void 0 === BB || BB.cancelPreload(), null === (jB = this.player) || void 0 === jB || jB.freeSheetsAfterGame()
      }
      load(BB) {
        if (null !== this.player || this.stopped) return;
        this.player = BB, BB.setMaster(this.master, this.soundOn);
        const jB = this.now(),
          zB = this.local;
        this.local = [];
        for (const nB of zB)
          if (!(nB.stopped || !nB.loop && jB - nB.at >= 300)) try {
            this.start(nB, BB, jB)
          } catch (QB) {
            console.error("[bloxd-wasm-client] a queued sound wouldn't start", QB)
          }
      }
      start(BB, jB, zB) {
        const {
          name: QB,
          pos: nB,
          ear: dB,
          maxHearDist: IB,
          refDistance: NB,
          loop: uB,
          fade: UB
        } = BB, aB = jB.playGame(QB, wj(BB, zB), nB, dB, IB, NB, uB);
        if (BB.sound = aB, 1 !== BB.rate && aB.rate(BB.rate), null !== BB.panner && aB.setPannerAttr(BB.panner), null !== BB.moved && aB.setPosition(BB.moved), null !== UB && zB - UB.at < UB.ms) {
          const jB = lj(this.master);
          jB > 0 ? aB.fade(0, BB.volume * jB, UB.at + UB.ms - zB) : aB.setRelativeVolume(BB.volume)
        }
      }
      onAudioEvent(BB, jB, zB, QB) {
        var nB, dB;
        return null === (nB = null === (dB = this.player) || void 0 === dB ? void 0 : dB.onAudioEvent(BB, jB, zB, QB)) || void 0 === nB || nB
      }
      applyListener(BB) {
        var jB;
        null === (jB = this.player) || void 0 === jB || jB.applyListener(BB)
      }
      playGame(BB, jB, zB, QB, nB, dB, IB) {
        if (this.stopped) return ej.e;
        if (this.player) return this.player.playGame(BB, jB, zB, QB, nB, dB, IB);
        const NB = this.now();
        this.local = this.local.filter((BB => !BB.stopped && (BB.loop || NB - BB.at < 300)));
        const uB = {
          name: BB,
          volume: lj(jB),
          fade: null,
          pos: zB && [zB[0], zB[1], zB[2]],
          ear: QB && [QB[0], QB[1], QB[2]],
          maxHearDist: nB,
          refDistance: dB,
          loop: IB,
          rate: 1,
          panner: null,
          moved: null,
          at: NB,
          stopped: !1,
          sound: null
        };
        this.local.push(uB);
        const UB = {
          stop: () => {
            var BB;
            return uB.stopped = !0, null === (BB = uB.sound) || void 0 === BB || BB.stop(), UB
          },
          fade: (BB, jB, zB) => {
            if (uB.sound) return uB.sound.fade(BB, jB, zB), UB;
            const QB = lj(this.master),
              nB = lj(QB > 0 ? jB / QB : jB > 0 ? uB.volume : 0),
              dB = this.now(),
              IB = wj(uB, dB);
            return uB.volume = nB, uB.fade = zB > 0 && IB !== nB ? {
              from: IB,
              at: dB,
              ms: zB
            } : null, UB
          },
          rate: BB => (uB.sound ? uB.sound.rate(BB) : uB.rate = BB, UB),
          getVolume: () => uB.sound ? uB.sound.getVolume() : uB.volume * lj(this.master),
          getRelativeVolume: () => uB.sound ? uB.sound.getRelativeVolume() : uB.volume,
          setRelativeVolume: BB => (uB.sound ? uB.sound.setRelativeVolume(BB) : (uB.volume = lj(BB), uB.fade = null), UB),
          setPannerAttr: BB => (uB.sound ? uB.sound.setPannerAttr(BB) : uB.panner = {
            ...BB
          }, UB),
          setPosition: BB => (uB.sound ? uB.sound.setPosition(BB) : uB.moved = [BB[0], BB[1], BB[2]], UB)
        };
        return UB
      }
      setMaster(BB, jB) {
        var zB;
        this.master = BB, this.soundOn = jB, null === (zB = this.player) || void 0 === zB || zB.setMaster(BB, jB)
      }
      stop() {
        var BB;
        this.stopped = !0, null === (BB = this.player) || void 0 === BB || BB.stopAll();
        for (const jB of this.local) jB.stopped = !0;
        this.local = []
      }
    }((0, Fj.c)(), !0);
    let MI = {
        wasm: "unknown",
        client: String(aj.b)
      },
      EI = null,
      iI = () => {};
    const qI = new Promise((BB => {
      iI = BB
    }));
    let fI = () => {};
    const oI = new Promise((BB => {
      fI = BB
    }));
    let HI, DI = null,
      FI = null,
      YI = null,
      VI = null,
      hI = null,
      XI = null,
      ZI = null,
      AI = null,
      TI = null,
      PI = null,
      WI = null,
      eI = null,
      lI = null,
      wI = null,
      xI = null,
      KI = null,
      CI = null,
      cI = null,
      bI = null,
      vI = !1,
      RI = null;
    const OI = new Set,
      BN = new Set;

    function jN(BB) {
      if (!OI.has(BB)) {
        OI.add(BB);
        for (const zB of BN) try {
          zB(BB)
        } catch (jB) {
          console.error(`${ld} a startup listener threw`, jB)
        }
      }
    }

    function zN(BB) {
      vI = !0, BB.isStopped || jN("texturesIn")
    }
    let QN = 1,
      nN = -1 / 0,
      dN = -1 / 0,
      IN = -1 / 0,
      NN = !1,
      uN = null,
      UN = !1,
      aN = !1,
      pN = 0,
      rN = null,
      sN = !1;
    const JN = {
      dropped: -1 / 0,
      pause: -1 / 0,
      backlog: -1 / 0
    };
    let mN = 0,
      yN = 0,
      kN = null,
      GN = null,
      LN = null,
      gN = null;
    const tN = new WeakMap;
    let SN = null,
      MN = null,
      EN = !1,
      iN = null,
      qN = null,
      fN = null,
      oN = null,
      HN = null,
      DN = null,
      FN = 0;
    const YN = new Set;
    let VN = 0,
      hN = 0,
      XN = 0,
      ZN = null,
      AN = null,
      TN = null,
      PN = null,
      WN = -1 / 0,
      eN = null;
    const lN = new Set;
    let wN = !1,
      xN = null;
    const KN = new Map,
      CN = new Set;
    let cN = !1;
    const bN = {
      adapter: null,
      boundAtMs: null,
      indirectHangs: null,
      restoresSkipped: null
    };
    let vN = null,
      RN = () => [0, 0],
      ON = () => {},
      Bu = () => {},
      ju = null,
      zu = null;
    const Qu = new class {
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
      console.warn(`${ld} chunk cancels from the server this session: ${BB}`)
    }));
    let nu = 1,
      du = null,
      Iu = null,
      Nu = null,
      uu = null,
      Uu = null,
      au = !1,
      pu = !1,
      ru = 0,
      su = null,
      Ju = !1,
      mu = null,
      yu = null,
      ku = null,
      Gu = !1;
    const Lu = new class {
      constructor(BB) {
        this.Ly = BB, this.lossPending = !1, this.undrawnSinceMs = null, this.lastFrameMs = 0, this.shown = !1
      }
      deviceLost() {
        this.lossPending = !0
      }
      frame(BB, jB, zB) {
        (0, Xj.e)(BB) && (this.lossPending = !1);
        const QB = zB - this.lastFrameMs;
        this.lastFrameMs = zB, this.lossPending && jB && (0, Xj.i)(BB) ? (null === this.undrawnSinceMs || QB > 1e3) && (this.undrawnSinceMs = zB) : this.undrawnSinceMs = null, this.show(null !== this.undrawnSinceMs && zB - this.undrawnSinceMs >= 2e3)
      }
      stop() {
        this.lossPending = !1, this.undrawnSinceMs = null, this.show(!1)
      }
      show(BB) {
        BB !== this.shown && (this.shown = BB, this.Ly(BB))
      }
    }((BB => {
      uB.n.Ly(JB.d, BB)
    }));
    let gu = !1,
      tu = !0,
      Su = null,
      Mu = !1,
      Eu = !1,
      iu = !1;

    function qu() {
      return kI ??= Promise.all([zB.e(201), zB.e(144), zB.e(60)]).then((() => zB(51135))).then((BB => (yI = BB, Object.assign(globalThis, {
        bloxdPreviewPage: BB.pagePreviews()
      }), BB)), (BB => {
        throw kI = null, BB
      })), kI
    }

    function fu() {
      return mI ??= zB.e(58).then((() => zB(51149))).catch((BB => {
        throw mI = null, new FB.e(BB)
      })), mI
    }
    class ou {
      constructor() {
        this.host = null
      }
      open(BB) {
        return null !== this.host ? BB(this.host) : qu().then((jB => (this.host ??= new jB.WasmPreviewHost(jB.pagePreviews()), BB(this.host))))
      }
      openMob(BB) {
        return this.open((jB => jB.openMob(BB)))
      }
      openPet(BB) {
        return this.open((jB => jB.openPet(BB)))
      }
      openMobLineup(BB) {
        return this.open((jB => jB.openMobLineup(BB)))
      }
      openCharacter(BB, jB) {
        return this.open((zB => zB.openCharacter(BB, jB)))
      }
    }

    function Hu() {
      JI || (JI = !0, Sn.i.setHost(new ou), (0, hz.p)(), Gn.h.setFollower(hU), Object.assign(globalThis, {
        bloxdPreviews: Sn.i
      }))
    }

    function Du() {
      qu().then((BB => {
        BB.pagePreviews().prefetch()
      }), (() => {}))
    }

    function Fu() {
      let BB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      if (sI) return;
      sI = !0, gu = "play" === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "shell"), tu = !gu, console.info(`${ld} starting`), rI || (rI = !0, (0, JB.K)(new Tj(vu, dU)), (0, rB.n)(new Pj), (0, JB.I)(new Wj), (0, JB.C)()), gu && uB.n.subscribe("appManagerUpdated|gameState", bu), Hu(), (0, Dz.setCrashScreen)((BB => {
        let {
          text: jB,
          reload: zB
        } = BB;
        ! function(BB, jB) {
          var zB, QB;
          if (Mu) return;
          Mu = !0, (0, Zz.T)(), null === (zB = eN) || void 0 === zB || zB.abort(), eN = null, Ln.c.release();
          const nB = gu ? null !== (QB = BB.cancel) && void 0 !== QB ? QB : "general:back" : null;
          hQ({
            ...BB,
            cancel: nB
          }).then((BB => {
            BB && jB && Eu ? ((0, tj.x)("reloadOntoJs"), (0, OB.h)(tj.H)) : BB && jB ? (0, OB.k)() : gu && (0, OB.g)("/")
          }))
        }(jB, zB)
      })), (0, un.i)(), (0, Dj.l)();
      let jB = null;
      try {
        jB = Td("zvrcwj7r5ri", (() => {
          var BB, jB;
          return null !== (BB = null === (jB = DI) || void 0 === jB ? void 0 : jB.ws) && void 0 !== BB ? BB : null
        }), BB, "euyfsxnmtv")
      } catch (nB) {
        console.error(`${ld} probes`, nB)
      }
      const QB = function() {
        const BB = (0, wQ.k)(),
          jB = (0, wQ.g)();
        let zB = !1;
        return QB => {
          BB && !zB && (zB = !0, (0, Dz.reportStaleBuildReload)(BB, jB, QB))
        }
      }();
      ZU(), gu || function() {
        const BB = function(BB) {
          var jB;
          const zB = new URLSearchParams(BB),
            QB = zB.get("game");
          return QB ? {
            game: QB,
            lobby: null !== (jB = zB.get("lobby")) && void 0 !== jB ? jB : null
          } : null
        }(window.location.search);
        if (BB) return (0, pj.n)(BB.game) && ZU().request(), void hu(BB.game, BB.lobby);
        const jB = new URLSearchParams(window.location.search).get("ws");
        if (!jB) return;
        qI.then((BB => {
          BB && async function(BB, jB) {
            try {
              await (0, FB.j)(BB), iN = aU(new WebSocket(jB)), null !== iN && Ln.c.setGame(null), Yu()
            } catch (nB) {
              console.error(`${ld} ?ws=${jB} did not attach`, nB)
            }
          }(BB, jB)
        }))
      }(), async function(BB) {
        var jB, QB, dB, IB, NB, UB;
        if ("undefined" === typeof WebAssembly) return iU("noWebAssembly", "unsupported", "This browser has no WebAssembly"), null;
        const aB = (0, Dn.R)(),
          pB = await async function(BB, jB) {
            const zB = (0, Uz.r)(BB) ? fU(BB, jB) : null;
            if (null === zB || void 0 === zB || !zB.retries) return BB;
            console.warn(`${ld} ${zB.detail}: picking again in ${qU} ms`), await new Promise((BB => {
              setTimeout(BB, qU)
            }));
            const QB = await (0, Dn.V)();
            if (!(0, Uz.r)(QB)) {
              var nB;
              (0, Dz.reportNoBackendRetry)("reprobed", zB.decline, zB.detail, {
                ...zB.details,
                backend: null !== (nB = null === QB || void 0 === QB ? void 0 : QB.backend) && void 0 !== nB ? nB : "none"
              }), null !== QB && (0, Dn.N)(QB.backend)
            }
            return QB
          }(await (0, Dn.M)(), aB);
        if ((0, Dz.setCrashBackend)((0, Uz.r)(pB) ? "unsupported" : null !== (jB = null === pB || void 0 === pB ? void 0 : pB.backend) && void 0 !== jB ? jB : "none"), (0, Uz.r)(pB)) return function(BB) {
          let {
            decline: jB,
            detail: zB,
            details: QB,
            retries: nB
          } = BB;
          if (nB && (0, tj.j)()) return (0, Dz.reportNoBackendRetry)("reload", jB, zB, QB), void oU(`${zB}, again after ${qU} ms`);
          iU("browser", jB, zB, nB ? {
            ...QB,
            afterReload: String(tj.u)
          } : QB)
        }(fU(pB, aB)), null;
        if ((0, vn.q)("render")) try {
          const {
            startRenderDebug: BB
          } = await Promise.all([zB.e(78), zB.e(49)]).then((() => zB(4773)));
          BB(pB)
        } catch (Jj) {
          console.warn("The render debug topic didn't load", Jj)
        }
        if ((0, vn.q)("renderlite")) try {
          const {
            startRenderLite: BB
          } = await Promise.all([zB.e(273), zB.e(50)]).then((() => zB(51158)));
          Nu = BB(pB)
        } catch (Jj) {
          console.warn("The renderlite debug topic didn't load", Jj)
        }
        if ((0, vn.q)("renderprobe")) try {
          const {
            startRenderProbe: BB
          } = await zB.e(51).then((() => zB(51163)));
          BB(pB)
        } catch (Jj) {
          console.warn("The renderprobe debug topic didn't load", Jj)
        }
        if ("webgl" === (null === pB || void 0 === pB ? void 0 : pB.backend) && gu && "wasm" !== (0, tj.c)(window.location.search)) {
          const BB = WQ(pB);
          null !== BB && (0, Sj.j)(BB)
        }
        const rB = null !== (QB = null === pB || void 0 === pB ? void 0 : pB.backend) && void 0 !== QB ? QB : null;
        bN.adapter = null !== (dB = null === pB || void 0 === pB ? void 0 : pB.adapter) && void 0 !== dB ? dB : null, bN.boundAtMs = null, bN.indirectHangs = null, bN.restoresSkipped = null;
        const sB = !(0, Uz.fb)();
        null === pB || (0, Uz.J)(pB.reason) || console.info(`${ld} drawing with ${pB.backend}: ${pB.reason}`);
        const JB = (0, Dn.C)();
        fI(!0), (0, FB.r)((BB => {
          try {
            null !== rB && (ju = BB.startSkyFeed, YU(), function(BB) {
              var jB, zB;
              RN = BB.rasterText, fN = BB.setTextLocalPlayer, BB.setTextLocalPlayer(null !== (jB = null === (zB = qN) || void 0 === zB ? void 0 : zB.info.playerDbId) && void 0 !== jB ? jB : null), ON = BB.drainTextRerasters, Bu = BB.loadTextIcons, BB.warmText((() => au)), BB.textChanged(), au && setTimeout(Bu, 0)
            }(BB), zu = BB.startShellAnalytics, lU())
          } finally {
            iu || (uu = BB.followMenuPrefs({
              setSoundPrefs: NU,
              setEnvPrefs: uU,
              setUiPrefs: IU,
              setLookPrefs: UU
            }))
          }
        })), (0, FB.m)(SI).catch((BB => {
          console.warn(`${ld} the game code did not load: a join asks again`, BB)
        }));
        const mB = (0, Dn.o)(pB);
        let yB, kB;
        mB.catch((() => {})), "loading" === (0, mj.z)() && tB();
        try {
          yB = function(BB) {
            const jB = null !== BB && void 0 !== BB ? BB : document.createElement("canvas");
            jB.id = "wasm-game-canvas", (0, An.i)();
            const zB = (0, Aj.g)(),
              QB = (0, Aj.j)(zB);
            jB.style.cssText = "position:absolute;top:0;left:0;display:block;touch-action:none;outline:none;background:#000", (0, Zn.f)(jB, QB), (0, Aj.e)(jB, zB), jB.width = QB.bufferWidth, jB.height = QB.bufferHeight;
            const nB = document.createElement("div");
            return nB.style.cssText = "position:fixed;top:0;right:0;bottom:0;left:0;overflow:hidden", nB.append(jB), Ru(nB, tu), Su = nB, document.body.append(nB), jB
          }(null === rB ? null : await (await qu()).pagePreviews().beginSession())
        } catch (nB) {
          return await qa({
            site: cd,
            error: nB
          }, (() => {
            (0, Dz.showUnsupported)((0, FQ.m)("fetch"), dd.e.fetch, `the previews did not load: ${String(nB)}`)
          })), null
        }
        tB();
        try {
          kB = await mB
        } catch (nB) {
          return await qa({
            site: cd,
            error: nB
          }, (() => {
            (0, Dz.showUnsupported)((0, FQ.m)("fetch"), dd.e.fetch, `the ${null!==rB&&void 0!==rB?rB:"client"} build did not load: ${String(nB)}`)
          })), null
        }
        const LB = (0, Dn.g)(),
          gB = !LB && !0 !== Wz.k.getItem(wd),
          SB = !LB && "loading" === (0, mj.z)();
        await (0, Fn.b)(kB, {
          reloadFailedDownload: gB
        }), SB && !(0, mj.K)() && await (0, Fn.b)(kB, {
          reloadFailedDownload: gB
        });
        GB = performance.now();
        const MB = MI;
        if (!(0, mj.K)()) {
          (0, mj.I)() && Wz.k.setItem(wd, !0);
          const BB = (0, mj.q)();
          if ("call" === BB) pa({
            site: pz.r,
            error: (0, mj.m)(),
            header: null
          }, MB);
          else {
            const jB = null !== BB && void 0 !== BB ? BB : "instantiate",
              zB = () => {
                (0, Dz.showUnsupported)((0, FQ.m)(jB), dd.e[jB], (0, mj.i)())
              };
            if ("compile" !== BB && "instantiate" !== BB || !HU())
              if ("fetch" === jB) {
                const BB = [kB.url().href, Lj.c.url().href];
                await qa({
                  site: cd,
                  error: (0, mj.i)(),
                  urls: BB
                }, zB)
              } else zB();
            else {
              const jB = (0, mj.i)(),
                zB = (0, Rj.b)((0, mj.m)());
              if (zB && (0, tj.j)()) return (0, Dz.reportCountedLoadFallback)((0, FQ.m)(BB), dd.e[BB], jB, "wasmReload"), oU(`the wasm client ran out of memory to ${BB} here (${jB})`), null;
              (0, Dz.reportCountedLoadFallback)((0, FQ.m)(BB), dd.e[BB], jB, zB ? "declined" : "pageAlone"), DU(`the wasm client did not ${BB} here (${jB})`, zB ? "oom" : null)
            }
          }
          return null
        }(0, yj.Q)(kB.url()) && (0, Dz.reportUnstreamedCoreLoad)();
        const EB = (0, mj.C)();
        let iB, qB = MB;
        try {
          qB = {
            ...MB,
            wasm: EB.tp()
          };
          const {
            Py: BB
          } = kB.bindings, jB = BB.vzB();
          if (jB !== cj.B) return pa({
            site: pz.d,
            error: `core ABI ${jB}, page ABI ${cj.B}`,
            header: null
          }, qB), null;
          const [zB, QB] = (0, cj.ge)();
          iB = new BB(zB, QB)
        } catch (nB) {
          return pa({
            site: pz.d,
            error: nB,
            header: null
          }, qB), null
        }
        MI = qB, EI = kB.bindings;
        const fB = new pz.h(iB, mj.t, {
          onCrash: BB => {
            var jB;
            null === (jB = Nu) || void 0 === jB || jB.crashed(BB),
              function(BB, jB, zB, QB) {
                if ("webgpu" !== jB || (0, Dn.d)()) return !1;
                const nB = function(BB) {
                  if (BB.site === pz.f && (0, Uz.u)(BB.error)) return "frames_refused";
                  return BB.site === xd && (0, Uz.y)(BB.error) ? "start_failed" : null
                }(BB);
                if (null === nB) return !1;
                if (null !== (0, Uz.db)(nB, QB, (0, az.d)(BB.error))) return (0, Dz.countRenderLost)(nB, BB.error, bN), !1;
                return Vj.G.reloaded(null, !1), (0, Dz.reportRenderReload)("webgpu", "start_failed" === nB ? 0 : 1, zB, {
                  cause: nB,
                  error: BB.error,
                  context: bN,
                  session: ma(null)
                }), cU(), !0
              }(BB, rB, qB, sB) || pa(BB, qB)
          },
          onNetEvent: CU,
          onReconnectGrace: SU,
          onJoinPreloadEnded: tU,
          onCoreErrors: (BB, jB) => {
            var zB, QB;
            BB.some((BB => {
              let {
                code: jB
              } = BB;
              return jB === cj.J.RenderDeviceLost
            })) && ((0, Dn.y)(), Lu.deviceLost(), "webgpu" === rB && ((0, az.h)(vN), Vj.G.lost())), null === (zB = Nu) || void 0 === zB || zB.coreErrors(BB);
            const nB = () => {
              (0, Dz.reportCoreErrors)(BB, jB, qB, ((BB, jB) => {
                var zB;
                return BB === cj.J.EnvUnknownSky ? (0, Dz.unknownSkyWords)(Mj.c.get("skyBox")) : BB === cj.J.RenderDeviceLost ? (0, Dz.deviceLossWords)(jB, bN.boundAtMs) : null === (zB = vN) || void 0 === zB ? void 0 : zB.RzB(BB, jB)
              }))
            };
            BB.some((BB => {
              let {
                code: jB
              } = BB;
              return jB === cj.J.EnvUnknownSky
            })) ? queueMicrotask(nB) : nB(), null === (QB = RI) || void 0 === QB || QB.coreErrors(BB)
          },
          onRenderReload: (BB, jB, zB) => {
            ! function(BB, jB, zB, QB, nB, dB) {
              var IB;
              if ((0, Dn.d)()) return;
              const NB = jB === cj.Tc.WEBGPU,
                uB = QB === cj.Tc.PIPELINE_FAILED ? "pipeline_failed" : "lost",
                UB = QB === cj.Tc.RESTORE_LOST,
                aB = NB && (0, Vj.r)(bN.adapter, zB, "lost" === uB, UB),
                pB = (0, az.m)(vN);
              null === (IB = Nu) || void 0 === IB || IB.reload(NB, zB, uB, null === pB || void 0 === pB ? void 0 : pB.message);
              const rB = NB ? (0, Uz.db)(uB, nB, pB) : null;
              if (null !== rB) {
                (0, Dz.countRenderLost)(uB, pB, bN);
                const jB = void 0 === pB ? "" : ` (${pB.message})`;
                return void BB.crash(Dz.RENDER_RELOAD_SITE, new Error(`${(0,Dz.renderReloadMessage)("webgpu",uB,zB)} and ${rB}${jB}`))
              }
              const sB = NB ? "webgpu" : "webgl1" === dB ? "webgl1" : "webgl";
              "lost" === uB && (0, Dn.y)();
              NB || (0, tj.r)();
              (0, Dz.reportRenderReload)(sB, zB, MI, {
                from: "game",
                cause: uB,
                restoreLost: UB,
                adapterRemembered: aB,
                error: pB,
                context: bN,
                session: ma(BB.sunShadowsHeld())
              }), cU()
            }(fB, BB, jB, zB, sB, rB)
          },
          onEnvEvent: BB => {
            var jB;
            BB.kind === cj.U.SkyImages ? null === (jB = KI) || void 0 === jB || jB.onEvent(BB.payload) : BB.kind === cj.U.EnvLighting && (CI = 1 === BB.payload[0])
          },
          onImages: BB => {
            var jB;
            null === (jB = cI) || void 0 === jB || jB.onEvent(BB)
          },
          onModelRequest: BB => {
            var jB;
            null === (jB = lI) || void 0 === jB || jB.request(BB)
          },
          onModelTaken: (BB, jB) => {
            var zB;
            null === (zB = lI) || void 0 === zB || zB.taken(BB, jB)
          },
          onTerrainTexturesWanted: () => {
            queueMicrotask((() => {
              ! function(BB, jB) {
                const zB = tI;
                if (null === zB || BB.isStopped) return;
                zB.restore((BB => {
                  (0, Dz.reportTerrainTextureFailure)(BB, jB)
                })).then((jB => {
                  !1 !== jB || BB.isStopped ? !0 === jB && console.info(`${ld} terrain textures handed over again after the renderer lost them`) : console.warn(`${ld} the terrain textures couldn't be handed over again: the terrain draws blank`)
                }))
              }(fB, qB)
            }))
          },
          onKeepAlive: BB => {
            const jB = null === gN ? void 0 : tN.get(gN);
            void 0 !== jB && bQ(jB, BB)
          },
          onSends: () => {
            ! function(BB) {
              const jB = performance.now();
              if (BB.forEachNetOut(ua), na(BB), (0, pz.C)(BB, {
                  worldgen: YI,
                  mesh: hI
                }), null !== Iu) try {
                Iu.sendsWent(BB, jB, performance.now())
              } catch (nB) {
                KU(nB)
              }
            }(fB)
          }
        });
        if (GI = fB, null === (IB = Zj.b.wasmNetReady) || void 0 === IB || IB.call(Zj.b, (() => fB.isStopped ? 0 : fB.netKeptFrames)), null !== BB) {
          fB.setAntiCheatProbes(hd(mj.t, BB.checks)), BB.watchHeld(Zd.CoreFrame, (() => fB.frame)), BB.watchHeld(Zd.GlueFrame, (() => iB.frame));
          const jB = function(BB, jB) {
            const zB = new Xd(jB);
            let QB = !1;
            zB.vp(BB.vp());
            const nB = (0, CQ.kb)((() => {
              zB.vp(BB.vp())
            }), Ad);
            let dB = 6 * (0, CQ.bb)() | 0;
            const IB = () => {
              ++dB < 6 || (dB = 0, BB.checks.stackCheck() && (QB = !0))
            };
            (0, sd.i)(IB);
            const NB = () => {
              const jB = BB.checkPadCall();
              0 !== jB && zB.setFlags(jB)
            };
            return (0, rd.l)(NB), {
              onSend: IB,
              beforeFrame: () => {
                QB && zB.originStackHit() && (QB = !1)
              },
              onEvent: jB => {
                const QB = BB.checkEvent(jB);
                zB.value(cj.h.ProbeUsedProp, BB.usedProp()), 0 !== QB && zB.setFlags(QB)
              },
              stop: () => {
                (0, CQ.nb)(nB), (0, sd.g)(IB), (0, rd.h)(NB)
              }
            }
          }(BB, ((BB, jB, zB) => {
            let QB = !1;
            return La(fB, (() => {
              QB = fB.rings.input.writeRecord(cj.pb.AntiCheat, BB, jB, zB, 0)
            })), QB
          }));
          fB.isStopped ? jB.stop() : WI = jB
        }
        aI = (BB, jB, zB) => fB.rings.cmd.writeCmd(BB, jB, zB), pI = BB => fB.rings.cmd.growForCmd(BB), sN = !1, YU(), (0, FB.t)(fB, {
          core: iB,
          memory: mj.t,
          staleOr: (BB, jB, zB, QB) => qa({
            site: BB,
            error: jB
          }, zB, QB),
          reportReplayFault: (BB, jB) => {
            (0, Dz.reportReplayFault)(BB, jB, MI)
          },
          audio: SI,
          options: Mj.c,
          onNetEvent: CU,
          sessionInfo: BB => {
            var jB;
            return (null === (jB = qN) || void 0 === jB ? void 0 : jB.conn) === BB ? qN.info : null
          },
          onEventOverflow: Cu,
          replayShaderPack: BB => {
            var jB;
            null === (jB = RI) || void 0 === jB || jB.replay(BB)
          },
          hasPackModel: BB => {
            var jB, zB;
            return null !== (null !== (jB = null === (zB = VU()) || void 0 === zB ? void 0 : zB.modelUrl(BB)) && void 0 !== jB ? jB : null)
          },
          beforeWrite: () => (!UN && fB.rings.net.cursor > 0 && RU(fB, !1, "all"), !fB.isStopped),
          beforeOp: () => (!UN && fB.netWrittenSinceFrame > 0 && RU(fB, !1, "budget"), !fB.isStopped)
        }), (0, DB.H)({
          lockPointer: () => {
            if (!QQ(yB)) return !1;
            try {
              Promise.resolve(yB.requestPointerLock()).catch((() => {}))
            } catch {
              return !1
            }
            return !0
          },
          unlockPointer: () => {
            (0, wz.e)()
          },
          leaveGame: () => {
            Ku()
          },
          canvas: () => yB
        }), eI = (0, DB.y)((() => {
          var BB;
          const jB = (0, FB.g)();
          null === (BB = (0, FB.q)()) || void 0 === BB || BB.followCursorAim(!0 === (null === jB || void 0 === jB ? void 0 : jB.isSessionLive) ? jB : null)
        })), kN && fB.setUiPrefs(kN);
        GN && fB.setEnvPrefs(GN);
        LN && fB.setLookPrefs(LN);
        const oB = hn ? Xn(hn.preventMovement) : null;
        oB && nU(oB);
        const HB = (0, qz.k)(),
          YB = (0, qz.h)(fB, HB);
        TI = HB.basis, (0, Pz.l)(null === YB ? null : (0, iz.j)(YB)), AI = YB;
        const VB = (0, kj.c)();
        let hB = 1 / 0,
          XB = !0,
          ZB = HB.shedFootprintBytes;
        const AB = new Nn.e(VB, (() => iB.Qk()), (BB => {
          fB.crash(pz.m, BB)
        }));
        XI = AB, ZI = AB, null !== YB && AB.setCeiling(Math.min((0, Nn.q)(YB), hB, (0, qz.m)()));
        if (XB) {
          AB.setShed((BB => {
            const jB = fB.shedMemory("joinReserve" !== BB);
            return null !== jB && (null === AI || jB < AI) && (AI = jB, (0, Pz.l)((0, iz.j)(jB))), jB
          }), ((BB, jB, zB) => {
            1 === jB ? (0, Dz.reportMemoryShed)(BB, zB, MI) : console.warn(`${ld} wasm memory: shed again (${BB}): shed ${jB}`, zB.wasmMemoryShed)
          }), (() => fB.addDistanceInUse()));
          const BB = (0, Uz.S)(EB);
          AB.setFootprint(new bn(ZB, {
            storedChunks: () => iB.OzB(),
            gpuBytes: () => {
              var jB;
              return null !== (jB = null === BB || void 0 === BB ? void 0 : BB.BQB()) && void 0 !== jB ? jB : 0
            },
            jsHeapBytes: cn
          }))
        }
        window.addEventListener("pagehide", (() => {
          XI === AB && (AB.refreshStats(), Ga(AB))
        })), window.addEventListener("pagehide", bU), window.addEventListener("pagehide", vU), !1;
        const [TB, PB] = (0, Vz.e)();
        Uu = (0, Xz.f)((BB => fB.setChunkAddDistance(BB.horizontal, BB.vertical)), {
          horizontal: TB,
          vertical: PB
        }), fB.setAmbientOcclusion(!0 !== Wz.j.getItem("disableAmbientOcclusion")), fB.setPoseLod(!0 !== Wz.j.getItem(sj.L)), fB.setDebugLog(cj.L.Look, !0), fB.setDebugLog(cj.L.CameraSet, !0), (0, On.startLookDebug)("wasm", {
          look: () => fB.takeDebugLog(cj.L.Look),
          cameraSets: () => fB.takeDebugLog(cj.L.CameraSet)
        }), (0, vn.q)("remesh") && (fB.setDebugLog(cj.L.Remesh, !0), WB = () => fB.takeDebugLog(cj.L.Remesh), nd = new Qd((0, Bd.k)(), WB));
        var WB;
        const eB = function(BB, jB, zB, QB) {
          const nB = new gQ,
            dB = BB => Wz.j.getItem(BB);
          nB.sync(dB, jB), (0, hj.V)();
          const IB = (0, uB.q)("customBindingsChanged", (() => {
            nB.sync(dB, jB)
          }));
          (0, xz.p)(jB);
          const NB = new Set,
            UB = (0, DB.y)((() => {
              var BB;
              NB.size > 0 && EQ() && !0 === (null === (BB = (0, FB.g)()) || void 0 === BB ? void 0 : BB.localPlayerAlive()) && uB.n.Ly("usedKeyboard")
            })),
            aB = pQ.c.heldSizer((() => (0, Aj.m)(BB))),
            pB = aQ(BB, jB, {
              prevents: BB => nB.prevents(BB),
              keyPressed: BB => {
                nB.moves(BB) && (NB.add(BB), EQ() && uB.n.Ly("usedKeyboard"))
              },
              keyReleased: BB => {
                NB.delete(BB)
              },
              keysReleased: () => {
                NB.clear()
              },
              resized: () => {
                SQ.h.measure(BB.getBoundingClientRect()), (0, rQ.i)()
              },
              sizeCanvas: aB,
              watchRenderScale: jB => {
                const zB = (0, Aj.o)(BB, jB),
                  QB = pQ.c.onRelease(jB);
                return () => {
                  zB(), QB()
                }
              },
              touchStarting: () => {
                SQ.h.measure(BB.getBoundingClientRect())
              },
              viewShown: zB,
              touchUiShown: () => Bj.c.get("isTouchScreen"),
              ctrlCombosAreGames: EQ,
              inspect: (BB, jB, zB) => {
                nB.checks(jB, zB) && QB(BB)
              },
              canLock: () => QQ(BB)
            }),
            rB = (0, kz.d)(jB);
          return () => {
            IB(), UB(), (0, xz.p)(null), rB(), pB()
          }
        }(yB, ((BB, jB, zB, QB, nB) => {
          La(fB, (() => {
            fB.rings.input.writeRecord(BB, jB, zB, QB, nB)
          })), !aN && (0, HQ.h)(BB, nB) && (0, HQ.e)((() => {
            GI !== fB || iu || fB.isStopped || !Ia() || RU(fB, !1, "budget", !1)
          }))
        }), (() => tu), (BB => {
          var jB;
          null === (jB = WI) || void 0 === jB || jB.onEvent(BB)
        }));
        if (fB.isStopped) return eB(), null;
        FI = eB;
        const lB = () => !fB.isStopped && !Mu;
        if (fB.isStopped) return null;
        (0, mj.M)((() => {
          "call" === (0, mj.q)() && fB.crash(pz.r, (0, mj.m)())
        }));
        const wB = (0, pz.F)(fB.rings.worker, (() => {
          RU(fB, !1, document.hidden ? "all" : "budget")
        }));
        YI = function(BB, jB) {
          return ga().then((BB => {
            let {
              prefetchWorldgenWorker: jB
            } = BB;
            jB()
          }), (() => {})), new ud({
            module: (0, mj.w)(),
            decodeSettings: BB => {
              const jB = (0, FB.q)();
              if (null === jB) throw new Error("no game code to decode the world-gen seed with");
              return jB.decodeMapSettings(BB)
            },
            loadWorker: ta,
            onMapWithoutWorldgen: () => {
              Sa((BB => {
                let {
                  stopWorldgenWorkerPrefetch: jB
                } = BB;
                jB()
              }))
            },
            onLoadFailed: BB => {
              (0, Dz.reportWorldgenLoadFailure)(BB, MI)
            },
            onWorkerLost: BB => {
              (0, Dz.reportWorkerLost)(pz.x, BB, MI)
            },
            onStartTimeout: BB => {
              (0, Dz.reportWorkerStartTimeout)(pz.x, BB, MI)
            },
            onGaveUp: BB => {
              (0, Dz.reportWorldgenGaveUp)(BB, MI)
            },
            onMemoryStats: BB => {
              var jB;
              null === (jB = XI) || void 0 === jB || jB.noteWorldgen(BB)
            },
            onMemoryGone: () => {
              var BB;
              null === (BB = XI) || void 0 === BB || BB.worldgenGone()
            },
            write: (zB, QB, nB, dB, IB) => {
              La(BB, (() => {
                BB.rings.worker.writeWorkerRecord(zB, QB, nB, 0, dB, IB) || BB.crash(pz.x, `a world-gen record of kind ${QB} did not fit the worker-in ring`)
              })), jB()
            }
          })
        }(fB, wB), hI = function(BB, jB) {
          return new dn({
            module: (0, mj.w)(),
            loadWorkers: async () => {
              const [{
                createMeshWorker: BB
              }, jB] = await Promise.all([zB.e(41).then((() => zB(51193))), Promise.resolve().then((() => zB(106))).then((BB => {
                let {
                  isMobile: jB
                } = BB;
                return jB()
              }), (() => !1))]);
              return {
                create: BB,
                count: (0, Hj.c)(navigator.hardwareConcurrency, jB),
                maxKeptLightStates: jB ? 1 : void 0
              }
            },
            write: (zB, QB, nB, dB, IB, NB) => {
              (0, rQ.g)(), La(BB, (() => {
                BB.rings.worker.writeWorkerRecord(zB, QB, nB, dB, IB, NB) || BB.crash(pz.o, `a meshing record of kind ${QB} did not fit the worker-in ring`)
              })), jB()
            },
            onWorkerLost: BB => {
              (0, Dz.reportWorkerLost)(pz.o, BB, MI)
            },
            onLightFault: (BB, jB) => {
              (0, Dz.reportLightFault)(BB, jB, MI)
            },
            onStartTimeout: BB => {
              (0, Dz.reportWorkerStartTimeout)(pz.o, BB, MI)
            },
            onMemoryStats: (BB, jB) => {
              var zB;
              null === (zB = XI) || void 0 === zB || zB.noteMeshWorker(BB, jB)
            },
            onMemoryGone: BB => {
              var jB;
              null === (jB = XI) || void 0 === jB || jB.meshWorkerGone(BB)
            },
            fail: (jB, zB) => {
              const QB = () => {
                BB.crash(pz.o, void 0 === zB ? jB : new Error(jB, {
                  cause: zB
                }))
              };
              void 0 !== zB ? qa({
                site: pz.o,
                error: zB
              }, QB) : QB()
            }
          })
        }(fB, wB), bu();
        const xB = (0, gn.q)(fj.clientSideServerUrls.staticUrl, {
            onTableFailed: BB => {
              qa({
                site: Dz.MODEL_FEED_SITE,
                error: BB
              }, (() => {}), {
                stillWanted: lB
              })
            },
            packUrl: BB => {
              var jB, zB;
              return null !== (jB = null === (zB = VU()) || void 0 === zB ? void 0 : zB.modelUrl(BB)) && void 0 !== jB ? jB : null
            }
          }),
          KB = function(BB, jB, zB) {
            const QB = zB => {
              var QB, nB;
              return null !== (QB = null === (nB = jB()) || void 0 === nB ? void 0 : nB.drawnUrl(zB)) && void 0 !== QB ? QB : BB.url(zB)
            };
            return (0, Gn.m)((0, Un.k)(QB), zB)
          }(xB, (() => lI), VU),
          CB = new Un.d(KB, (BB => {
            console.warn(`${ld} image ${BB.key.kind}:${BB.key.index}:${BB.key.word} failed`, BB.error)
          }));
        cI = CB, bI = new mn(fB, KB, ((BB, jB) => {
          void 0 === jB ? console.warn(`${ld} ${BB}`) : XU(BB, jB)
        }));
        const cB = new kn.i(xB, function(BB, jB) {
          let QB = !1,
            nB = null,
            dB = null;
          const IB = {
              onUnavailable: (zB, QB) => {
                dB ??= qa({
                  site: Dz.MODEL_POOL_SITE,
                  error: zB,
                  urls: QB
                }, (() => {
                  (0, Dz.reportModelPoolFailure)(zB, BB)
                }), {
                  stillWanted: jB
                })
              },
              onDecoderFailed: (zB, QB) => {
                const nB = () => {
                  (0, Dz.reportDracoDecoderFailure)(zB, BB)
                };
                void 0 !== QB ? qa({
                  site: Dz.MODEL_POOL_SITE,
                  error: zB,
                  urls: QB
                }, nB, {
                  stillWanted: jB
                }) : nB()
              },
              onWorkerLost: jB => {
                (0, Dz.reportWorkerLost)(Dz.MODEL_POOL_SITE, jB, BB)
              },
              onModuleRetry: (jB, zB) => {
                (0, Dz.reportModelsModuleRetry)(jB, zB, BB)
              }
            },
            NB = zB.e(43).then((() => zB(51202))).then((BB => {
              let {
                pageModelPool: jB
              } = BB;
              if (QB) return null;
              const zB = jB(IB);
              return nB = zB.unlisten, wI = zB.pool, bu(), zB.pool
            }), (BB => (QB || IB.onUnavailable(BB, void 0), null)));
          return xI = () => {
            var BB;
            QB = !0, null === (BB = nB) || void 0 === BB || BB(), wI = null
          }, (BB, jB) => NB.then((zB => {
            var QB;
            return null !== (QB = null === zB || void 0 === zB ? void 0 : zB.build(BB, jB)) && void 0 !== QB ? QB : (0, tn.q)(BB, "the model workers did not load")
          })).then((BB => null !== dB && (0, tn.j)(BB) ? dB.then((() => BB)) : BB))
        }(qB, lB), (BB => {
          BB.startup ? (aa(), qa({
            site: Dz.MODEL_FEED_SITE,
            error: BB.error,
            urls: "" === BB.url ? void 0 : [BB.url]
          }, (() => {
            (0, Dz.reportModelFailure)(BB, qB)
          }))) : (0, Dz.reportModelFailure)(BB, qB)
        }), {
          onWritten: (BB, jB) => {
            CB.glbWritten(BB, jB)
          },
          onTaken: (BB, jB) => {
            CB.glbTaken(BB, jB)
          },
          onPackFileFailed: (BB, jB) => {
            console.warn(`${ld} the texture pack's model file ${BB} failed: the shipped one loads`, jB)
          }
        });
        lI = cB;
        const bB = new rn.f(fB);
        tI = bB, bB.swap((BB => {
          const jB = () => {
            (0, Dz.reportTerrainTextureFailure)(BB, qB)
          };
          if (au) return void jB();
          const zB = () => !au,
            QB = null === BB.url ? void 0 : [BB.url];
          qa({
            site: pz.w,
            error: BB.error,
            urls: QB
          }, jB, {
            stillWanted: zB
          })
        })).then((BB => {
          null !== BB && (BB || fB.isStopped || console.warn(`${ld} the core refused the terrain textures: terrain draws untextured`), zN(fB))
        }));
        const vB = new Kj(fB, ((BB, jB) => {
          console.warn(`${ld} ${BB}`, ...void 0 === jB ? [] : [jB])
        }));
        vB.feed(), null !== rB && function(BB, jB, QB, nB, dB, IB) {
          let NB = null,
            UB = null,
            aB = !1;
          const pB = {
            textures: null,
            stop: () => {
              var BB, jB;
              aB = !0, null === (BB = UB) || void 0 === BB || BB(), null === (jB = NB) || void 0 === jB || jB(), Ln.c.setSettled(null), null !== EI && Vu.clear(EI)
            }
          };
          gI = pB, UB = ZU().follow((UB => {
            null !== UB && Promise.all([zB.e(204), zB.e(46)]).then((() => zB(51166))).then((zB => {
              let {
                PackTextures: rB
              } = zB;
              if (aB || BB.isStopped) return;
              const sB = new rB({
                feed: UB,
                terrain: jB,
                backend: QB,
                stopped: () => BB.isStopped,
                landed: () => {
                  zN(BB)
                },
                packSwapped: () => {
                  (0, Gn.i)(nB), IB.feed((() => async function(BB) {
                    const jB = null === BB ? null : await BB.averageColours;
                    return null === jB ? Cj() : xj(jB)
                  }(sB.assets))), (0, yn.i)(sB.files()), dB.refresh().then((BB => {
                    null !== BB && console.info(`${ld} texture pack models: ${BB.resent} of ${BB.delivered} files written again, ${BB.refetched} refetched`)
                  }))
                },
                settled: (BB, jB, zB) => {
                  var QB;
                  (Ln.c.setSettled({
                    state: BB,
                    files: jB
                  }), function(BB, jB, zB) {
                    const QB = null === BB.gameSource && (0, Fz.d)(BB.pack);
                    if (null === jB) return;
                    const nB = (0, Hz.e)(jB.error),
                      dB = QB ? "settings" : jB.source;
                    uB.n.Ly(Hz.b, {
                      failure: nB,
                      source: dB,
                      pack: Yz(BB)
                    }), (0, Dz.reportTexturePackKeptOut)(dB, nB, jB.error, zB)
                  }(BB, zB, MI), null === zB) && function(BB) {
                    const jB = EI;
                    null !== jB && Vu.apply(jB, BB).then((jB => {
                      jB && BB && console.info(`${ld} the texture pack's animations are in (${Object.keys(BB).length} files)`)
                    }))
                  }(null === (QB = BB.pack) || void 0 === QB ? void 0 : QB.animations)
                },
                settling: () => {
                  Ln.c.setSettled(null)
                },
                warn: XU,
                maxTextureSize: () => Promise.resolve((0, Uz.gb)(document.createElement("canvas")))
              });
              pB.textures = sB, NB = sB.start()
            }), (BB => {
              console.warn(`${ld} the texture pack's terrain didn't load: the built atlas stays`, BB)
            }))
          }))
        }(fB, bB, rB, CB, cB, vB);
        const jj = () => {
            fB.setTextureLayers("")
          },
          zj = BB => {
            (qj ??= zB.e(54).then((() => zB(51204))).then((BB => {
              let {
                TEXTURE_NAMES: jB
              } = BB;
              return jB
            }), (BB => {
              throw qj = null, BB
            })), qj).then((BB => {
              fB.setTextureLayers(BB) || fB.isStopped || (console.warn(`${ld} the core refused the texture names: textured Boxes draw textureNotFound`), jj())
            }), (jB => {
              if (fB.isStopped) return;
              const [zB, ...QB] = BB;
              void 0 === zB ? qa({
                site: Dz.TEXTURE_NAMES_SITE,
                error: jB
              }, (() => {
                console.warn(`${ld} the texture names didn't load, so textured Boxes draw textureNotFound`, jB), jj()
              }), {
                stillWanted: lB
              }) : setTimeout((() => {
                zj(QB)
              }), zB)
            }))
          };
        if (zj(uI), null !== rB && !await async function(BB, jB, zB, QB, dB, IB) {
            var NB;
            const uB = (0, Uz.S)(zB);
            if (null === uB) return BB.crash(xd, new Error(`this ${QB} build has no openRenderer`)), !1;
            let UB;
            vN = uB;
            try {
              var aB, pB, rB, sB;
              const nB = null !== (aB = null === (pB = yI) || void 0 === pB ? void 0 : pB.pagePreviews()) && void 0 !== aB ? aB : null,
                NB = null !== (rB = null === (sB = yI) || void 0 === sB ? void 0 : sB.previewModule(zB)) && void 0 !== rB ? rB : null;
              if (null === nB || null === NB) {
                null === nB || void 0 === nB || nB.endSession(!1), UB = (0, Aj.g)().sampleCount, await (0, Uz.l)(jB, uB, IB, FU, UB, await dB);
                const BB = (0, Uz.q)(zB);
                null === BB && console.warn(`${ld} this ${QB} build has no image registry: sky and model images won't show`), (0, pn.f)(BB)
              } else {
                (0, Dn.d)() && await (0, OB.m)();
                const zB = (0, Dn.G)();
                if (null !== zB) {
                  const jB = (0, az.m)(uB);
                  return BB.crash(Dz.RENDER_RELOAD_SITE, new Error(`${zB}${void 0===jB?"":` (${jB.message})`}`)), !1
                }
                UB = await nB.bindSession(NB, jB, (async BB => (0, Uz.A)(uB, xd, IB, BB, FU, await dB)))
              }
            } catch (nB) {
              return BB.crash(xd, nB), !1
            }(function(BB, jB) {
              const zB = BB,
                {
                  requestCapture: QB,
                  takeCapture: nB
                } = zB;
              if ("function" !== typeof QB || "function" !== typeof nB) return;
              const dB = {
                request() {
                  QB.call(zB, jB)
                },
                take() {
                  var BB;
                  return null !== (BB = nB.call(zB)) && void 0 !== BB ? BB : null
                }
              };
              window[Tn] = dB
            })(jB, UB), nu = UB, cN = !0;
            const JB = performance.now();
            return bN.boundAtMs = null !== (NB = (0, Dn.H)()) && void 0 !== NB ? NB : JB, bN.indirectHangs = (0, Dn.B)(), bN.restoresSkipped = (0, Dn.I)(), console.info(`${ld} ${QB} renderer bound at ${Math.round(JB)} ms`), !BB.isStopped
          }(fB, iB, EB, rB, JB, yB)) return null;
        if (null !== rB) {
          var Qj, nj, dj;
          (0, Gj.z)(rB);
          const BB = () => !fB.isStopped && da();
          zB.e(196).then((() => zB(34126))).then((jB => {
            let {
              devTools: zB
            } = jB;
            fB.isStopped || zB.setHost(function(BB) {
              return {
                tools: Hn,
                async downloadScene(jB, zB) {
                  let {
                    width: QB,
                    height: nB,
                    colouring: dB
                  } = zB;
                  "screenshot" === jB && null === dB ? await (0, En.h)(BB, QB, nB) : console.warn("The Rust client's developer tools take uncoloured screenshots only")
                },
                setAmbientLightIntensity: () => (console.warn("The Rust client's renderer has no ambient light setting"), Promise.resolve()),
                capturePhoto: (jB, zB, QB) => (0, En.d)(BB, jB, zB, QB)
              }
            }(function(BB, jB) {
              return {
                canvas: BB,
                maxTextureSize: qn,
                drawing: jB,
                resize: (BB, jB, zB) => {
                  (0, xz.w)(cj.pb.Resize, 0, BB / zB, jB / zB, (0, xz.j)(zB))
                },
                restoreSize: () => {
                  const jB = (0, Aj.m)(BB);
                  null !== jB && (0, xz.w)(cj.pb.Resize, 0, jB.cssWidth, jB.cssHeight, (0, xz.j)(jB.renderScale))
                },
                onFrameDrawn: BB => (fn.add(BB), () => {
                  fn.delete(BB)
                })
              }
            }(yB, BB)))
          }), (BB => {
            console.warn(`${ld} the developer tools didn't load: no captures this session`, BB)
          }));
          const jB = "webgpu" === rB && null !== (Qj = null === pB || void 0 === pB || null === (nj = pB.adapter) || void 0 === nj ? void 0 : nj.vendor) && void 0 !== Qj ? Qj : null;
          du = {
            backend: rB,
            canvas: yB,
            fallbackReason: null !== (dj = null === pB || void 0 === pB ? void 0 : pB.reason) && void 0 !== dj ? dj : null,
            adapterVendor: jB
          }, lU();
          try {
            (0, rQ.s)(rB, yB, jB)
          } catch (nB) {
            (0, rQ.v)(), console.error(`${ld} the quality steps didn't start`, nB)
          }
        }
        const {
          storagePullBreaks: Ij,
          splitPassBreaks: Nj
        } = await JB;
        Nj && console.warn(`${ld} split_pass_breaks on: Windows Adreno 7xx (N-103) or ?sceneDepth=off`);
        const uj = (0, RB.d)(pB, (0, Vj.l)());
        if ((0, vn.q)("webgpuloss")) {
          var Uj, aj;
          const BB = {
            backend: rB,
            reason: null !== (Uj = null === pB || void 0 === pB ? void 0 : pB.reason) && void 0 !== Uj ? Uj : null,
            source: null !== (aj = null === pB || void 0 === pB ? void 0 : pB.source) && void 0 !== aj ? aj : null,
            storagePullBreaks: Ij,
            noWebGpu: uj.messageKey
          };
          (0, Rn.d)((jB => {
            jB.noteWasmPick(BB)
          }))
        }
        const pj = "webgpu" === rB;
        if (RI = (0, RB.e)(pj ? fB : null, pj && null !== (NB = null === (UB = yI) || void 0 === UB ? void 0 : UB.pagePreviews().mJ) && void 0 !== NB ? NB : null, uj, XU), iu) return null;
        if (AB.reserveAtJoin((0, Nn.o)(null !== YB && void 0 !== YB ? YB : iz.e)), fB.isStopped) return null;
        const rj = BB => {
          if (IN = performance.now(), NN = !1, null !== Iu) try {
            Iu.animationFrame(BB)
          } catch (nB) {
            KU(nB)
          }
          if (function(BB, jB) {
              return jB && !iu && !aN && Ia() && da() && BB.framePaces(performance.now())
            }(fB, tu)) {
            if (fB.writePendingInput(), (0, DB.g)(BB, OU), wU(!1, BB), null !== Iu) try {
              Iu.framePaced()
            } catch (nB) {
              KU(nB)
            }
            requestAnimationFrame(rj)
          } else RU(fB, tu, "budget") && ((0, Xj.i)(fB.lastFrameKind) && da() && (0, DB.g)(BB, OU), wU(tu && Gu, BB), Lu.frame(fB.lastFrameKind, tu && da(), BB), (0, Xj.e)(fB.lastFrameKind) && Vj.G.drew(), sa(fB), AB.afterFrame(), requestAnimationFrame(rj))
        };
        requestAnimationFrame(rj);
        return function(BB) {
          if (BB.has("inputLog") && (0, tQ.k)((BB => {
              let {
                action: jB,
                down: zB,
                press: QB
              } = BB;
              console.info(`${MQ} input ${jB} ${zB?"down":"up"} press ${QB} at ${performance.now().toFixed(1)}`)
            })), BB.has("inputDump")) {
            const BB = [];
            iQ = BB, Object.assign(window, {
              bloxdInputDump: () => BB.join("\n")
            })
          }
        }(new URLSearchParams(window.location.search)), PI = function(BB) {
          let jB = null;
          const zB = () => {
              null !== jB && (clearInterval(jB), jB = null)
            },
            QB = () => {
              document.hidden ? jB ??= setInterval((() => {
                Ea(BB) || zB()
              }), NI) : zB()
            };
          return document.addEventListener("visibilitychange", QB), QB(), () => {
            zB(), document.removeEventListener("visibilitychange", QB)
          }
        }(fB), fB
      }(jB).then((BB => {
        var jB;
        (QB(MI), fI(null !== BB), null !== BB && (LB = performance.now()), iI(BB), null === BB) ? null === (jB = yI) || void 0 === jB || jB.pagePreviews().endSession(null === (0, mj.q)()): jN("booted")
      }), (BB => {
        QB(MI), fI(!1), iI(null), pa({
          site: Kd,
          error: BB,
          header: null
        }, MI)
      }))
    }

    function Yu() {
      const BB = EI;
      null !== BB && qu().then((jB => {
        let {
          pageBuiltInAnimationPack: zB
        } = jB;
        zB().provide(BB)
      }), (BB => {
        console.warn(`${ld} the built-in animation pack's chunk did not load: lifeforms stay in their rest pose`, BB)
      }))
    }
    const Vu = new class {
      constructor(BB) {
        this.deps = BB, this.latest = 0, this.DN = null
      }
      apply(BB, jB) {
        return this.load(BB, jB, 0)
      }
      async load(BB, jB, zB) {
        var QB;
        const nB = ++this.latest,
          dB = this.deps.compiler;
        if (void 0 === jB || null === jB || "object" !== typeof jB || 0 === Object.keys(jB).length || null === dB) return this.drop(BB), !1;
        if ((null === (QB = this.DN) || void 0 === QB ? void 0 : QB.module) === BB && (0, nz.se)(this.DN.files, jB)) return !1;
        try {
          const [zB, QB] = await Promise.all([dB(), this.deps.builtIns()]);
          if (nB !== this.latest) return !1;
          const IB = await zB(jB, uz, {
            builtIns: QB
          });
          if (nB !== this.latest) return !1;
          const NB = this.call(BB, IB);
          if (void 0 === NB) throw new Nz("the compiled animations didn't read against the built-in pack");
          return this.DN = {
              module: BB,
              files: jB
            },
            function(BB) {
              for (let jB = 0; jB + 2 < BB.length; jB += 3) {
                ("error" === BB[jB] ? console.error : console.warn)(`Animation for the texture pack: ${BB[jB+1]}: ${BB[jB+2]}`)
              }
            }(NB), !0
        } catch (NB) {
          var IB;
          if (nB !== this.latest) return !1;
          this.drop(BB), 0 === zB && this.deps.warn("the texture pack's animations didn't load: lifeforms play the built-in ones", NB);
          const QB = (null !== (IB = this.deps.retryAfterMs) && void 0 !== IB ? IB : Iz)[zB];
          return void 0 === QB || NB instanceof Nz || (0, dz.h)(BB) || setTimeout((() => {
            nB === this.latest && this.load(BB, jB, zB + 1)
          }), QB), !1
        }
      }
      call(BB, jB) {
        try {
          return BB.bzB(jB)
        } catch (zB) {
          throw (0, dz.j)(BB, zB), zB
        }
      }
      clear(BB) {
        this.latest++, this.drop(BB)
      }
      drop(BB) {
        const jB = this.DN;
        if (this.DN = null, (null === jB || void 0 === jB ? void 0 : jB.module) === BB && !(0, dz.h)(BB)) try {
          this.call(BB, null)
        } catch {}
      }
    }({
      compiler: Bz.b,
      builtIns: async () => {
        const {
          pageBuiltInAnimationPack: BB
        } = await qu();
        return BB().whenSet()
      },
      warn: XU
    });
    async function hu(BB, jB) {
      let QB = !1;
      await Xu({
        matchmake: async () => {
          const {
            guestJoinTarget: nB,
            guestJoinWithPack: dB
          } = await zB.e(277).then((() => zB(51154)));
          return QB ? nB(BB, jB, TU()) : (QB = !0, dB(BB, jB, (jB => PU(BB, jB)), TU))
        },
        onFailure: BB => {
          (0, Dz.showJoinFailure)(BB, MI)
        },
        rejoin: Ou,
        invalidateTrafficCode: BU
      })
    }
    async function Xu(BB) {
      let {
        matchmake: jB,
        onFailure: zB,
        rejoin: nB,
        invalidateTrafficCode: dB,
        pageReady: IB,
        signal: NB
      } = BB;
      const uB = () => !0 === (null === NB || void 0 === NB ? void 0 : NB.aborted);
      let UB;
      const aB = Ln.c.rejoinHold();
      MN = null;
      const pB = (0, Zz.S)("wasm", ka);
      let rB = !1,
        sB = performance.now();
      try {
        if (!await oI) return {
          kind: "stopped"
        };
        if (uB()) return {
          kind: "xz"
        };
        fu().catch((() => {}));
        let BB = await jB();
        var tB, SB;
        if (sB = performance.now(), !uB()) ya(null !== (tB = null === (SB = BB.target.session) || void 0 === SB ? void 0 : SB.gameNameWithVariation) && void 0 !== tB ? tB : null);
        const zB = () => performance.now() - BB.matchedAt <= BB.freshMs,
          QB = Au(BB.target).catch((() => {}));
        zB() && !uB() && (UB = new zn(BB.target, {
          signal: NB
        }));
        const dB = performance.now();
        if (null === await qI) return {
          kind: "stopped"
        };
        var MB, EB;
        if (function(BB) {
            var jB, zB;
            if (mB.b.markGameEngineConstructed(), gB) return;
            gB = !0;
            const QB = Math.max(BB, null !== (jB = kB) && void 0 !== jB ? jB : BB);
            (0, yB.k)("ready", Math.max(0, (null !== (zB = GB) && void 0 !== zB ? zB : QB) - QB) / 1e3)
          }(dB), !uB())
          if (null !== GB && null !== LB ? ((0, JB.r)("wasm_loaded", GB), (0, JB.r)("wasm_core_ready", LB)) : console.warn("[bloxd-wasm-client] a join found the core before boot marked its steps"), BB.target.session && (0, Id.b)(BB.target.session.gameNameWithVariation)) null === (MB = YI) || void 0 === MB || MB.prestart();
        if (await QB, !zB() && !uB()) null === (EB = UB) || void 0 === EB || EB.rematched(), BB = await jB(), sB = performance.now();
        if (uB()) return {
          kind: "xz"
        };
        const aB = await async function(BB) {
          var jB, zB, QB;
          let {
            signal: nB,
            rejoin: dB = null,
            early: IB,
            pageReady: NB
          } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (null !== nB && void 0 !== nB && nB.aborted) throw new DOMException("the join was left", "AbortError");
          const uB = (UB = AN, aB = performance.now(), null !== UB && aB - UB < eQ);
          var UB, aB;
          AN = null;
          const pB = new AbortController,
            rB = null !== (jB = null === (zB = BB.session) || void 0 === zB ? void 0 : zB.gameNameWithVariation) && void 0 !== jB ? jB : null;
          ya(rB), Wu({
            controller: pB,
            game: rB
          }), TN = null, null === (QB = eN) || void 0 === QB || QB.abort(), eN = null, wN = !1, xN = null, KN.clear();
          const sB = () => {
            (0, oj.i)(pB, (0, oj.f)(nB))
          };
          null === nB || void 0 === nB || nB.addEventListener("abort", sB, {
            once: !0
          });
          try {
            var mB, yB, kB;
            const jB = await qI;
            if (null === jB || jB.isStopped || iu) throw new Error("no core is running to join a game with");
            if (BB.session && null !== RI) {
              const jB = await Tu(RI.join(BB.session.gameNameWithVariation), pB.signal);
              if ((0, vn.q)("webgpuloss")) {
                const zB = BB.session.gameNameWithVariation,
                  QB = RI.couldntRunInJoinedGame();
                (0, Rn.d)((BB => BB.noteWasmJoin(zB, jB, QB)))
              }
              if (null !== jB) throw new RB.b(jB)
            }
            const [, , , {
              joinRoom: zB
            }] = await Tu(Promise.all([(0, FB.j)(jB), Au(BB), null === NB || void 0 === NB ? void 0 : NB(), fu()]), pB.signal), QB = BB.session, nB = QB ? {
              ...QU,
              attachSocket: jB => {
                const zB = aU(jB, BB.endpoint);
                var nB;
                null !== zB && (qN = {
                  conn: zB,
                  info: QB
                }, null === (nB = fN) || void 0 === nB || nB(QB.playerDbId));
                return zB
              }
            } : QU, UB = await zB(nB, BB, {
              signal: pB.signal,
              early: IB
            }).catch((BB => {
              throw function(BB) {
                if (!(BB instanceof eB.d)) return BB;
                if ("roomError" === BB.stage && null !== xN) return Zu(new eB.d(BB.message, BB.stage, BB.code, xN), BB);
                const jB = "closed" === BB.stage && null !== PN ? KN.get(PN.conn) : void 0;
                return void 0 === jB ? BB : Zu(new eB.d(BB.message, BB.stage, jB.code, null, BB.socketOpened), BB)
              }(BB)
            }));
            if (SN !== pB) throw UB.leave(), new DOMException("the join was left", "AbortError");
            lu(UB), null === (mB = hI) || void 0 === mB || mB.newGame();
            const aB = function(BB) {
              var jB, zB;
              const {
                session: QB
              } = BB, nB = void 0 === QB ? BB.joinOptions.lobbyName : QB.lobbyName;
              return {
                endpoint: BB.endpoint,
                game: null !== (jB = null === QB || void 0 === QB ? void 0 : QB.gameNameWithVariation) && void 0 !== jB ? jB : BB.roomName,
                lobby: String(null !== nB && void 0 !== nB ? nB : null),
                postCookies: null !== (zB = BB.postCookies) && void 0 !== zB ? zB : null
              }
            }(BB);
            tN.set(UB, aB), RQ(aB);
            const rB = performance.now(),
              sB = {
                conn: UB.conn,
                rejoin: dB,
                game: null !== (yB = null === (kB = BB.session) || void 0 === kB ? void 0 : kB.gameNameWithVariation) && void 0 !== yB ? yB : "",
                joinedAt: rB,
                rejoinedAt: uB ? rB : null,
                overflow: null
              };
            oN = sB,
              function(BB, jB) {
                GU();
                const zB = {
                  endpoint: jB,
                  roomId: BB.seat.room.roomId,
                  heldConn: 0,
                  dropCode: 0,
                  pendingHold: null,
                  resume: new Sz({
                    reconnect: (BB, jB, QB) => async function(BB, jB, zB, QB) {
                      const {
                        roomId: nB,
                        roomToken: dB
                      } = gU(BB, jB), IB = GI;
                      if (null === IB || IB.isStopped || iu) throw new Error("no core is running to resume the game on");
                      const {
                        resumeRoom: NB
                      } = await Tu(fu(), zB), uB = {
                        ...QU,
                        attachSocket: jB => HN !== BB || 0 === BB.heldConn ? (jB.close(), null) : aU(jB, BB.endpoint, !0)
                      };
                      return NB(uB, BB.endpoint, nB, dB, {
                        signal: zB,
                        onAttached: QB
                      })
                    }(zB, BB, jB, QB),
                    releaseSeat: BB => {
                      !async function(BB, jB) {
                        const {
                          roomId: zB,
                          roomToken: QB
                        } = gU(BB, jB);
                        try {
                          const {
                            leaveHeldSeat: jB
                          } = await fu();
                          await jB(BB.endpoint, zB, QB)
                        } catch (nB) {
                          console.warn(`${ld} the held seat of a game left while it reconnected couldn't be released`, nB)
                        }
                      }(zB, BB)
                    },
                    isLive: () => HN === zB && null !== oN && !iu,
                    nD: BB => {
                      ZN = BB, kU()
                    },
                    onReconnected: BB => {
                      ! function(BB) {
                        const jB = gN;
                        if (null !== jB && jB !== BB) {
                          const zB = tN.get(jB);
                          void 0 !== zB && tN.set(BB, zB), ku === jB && (ku = BB), jB.detach()
                        }
                        lu(BB)
                      }(BB)
                    },
                    onGaveUp: (BB, jB) => {
                      ! function(BB, jB, zB) {
                        var QB, nB;
                        console.warn(`${ld} gave up reconnecting (${zB.reason}, ${zB.attempts} attempts)`, zB.lastError), (0, Dz.reportReconnectGaveUp)(zB, MI);
                        const dB = null !== (QB = null === (nB = oN) || void 0 === nB ? void 0 : nB.rejoin) && void 0 !== QB ? QB : null;
                        LU(BB, "gaveUp"), xu();
                        const IB = {
                          code: BB.dropCode,
                          name: null,
                          reason: QI,
                          canReconnect: !jB,
                          automaticallyReconnect: !1,
                          requiresRefresh: !1
                        };
                        zU(IB, jB ? null : dB, !1, {
                          reasonKey: nI,
                          canPlayAgain: jB
                        })
                      }(zB, BB, jB)
                    }
                  })
                };
                HN = zB, null !== DN && DN.conn === BB.conn && zB.resume.onInitialInfo(DN)
              }(UB, BB.endpoint), performance.mark(bd), (0, JB.r)("wasm_joined", rB), setTimeout((() => {
                gN === UB && (0, JB.g)()
              }), 0), Yu(), console.info(`${ld} joined ${BB.roomName} as ${UB.seat.sessionId} at ${Math.round(performance.now())} ms`);
            const GB = TN;
            TN = null, null !== GB && cu(sB, GB.mask, GB.frames);
            const LB = KN.get(UB.conn);
            return KN.clear(), void 0 !== LB && (lu(null), jU(UB.conn, LB.code, LB.reason)), UB
          } finally {
            var GB;
            null === nB || void 0 === nB || nB.removeEventListener("abort", sB), SN === pB && eu(gN, null), (null === (GB = PN) || void 0 === GB ? void 0 : GB.join) === pB && (PN = null)
          }
        }(BB.target, {
          signal: NB,
          rejoin: nB(BB.target),
          early: UB,
          pageReady: IB
        });
        return rB = !0, {
          kind: "joined",
          game: aB
        }
      } catch (qB) {
        if (qB instanceof DOMException && "AbortError" === qB.name || uB()) return {
          kind: "xz"
        };
        if (iu) return {
          kind: "stopped"
        };
        if (wN && (wN = !1, await dB().catch((BB => {
            console.warn(`${ld} the cached traffic code could not be dropped`, BB)
          }))), null === await qI) return {
          kind: "stopped"
        };
        if (qB instanceof RB.b) return zB(qB, performance.now() - sB), {
          kind: "failed",
          error: qB,
          reloading: !1
        };
        if (qB instanceof eB.d && qB.code === QB.c.wasmClientNotAllowed.code && gu) return DU("this server refused the wasm client to this account", "refused"), {
          kind: "failed",
          error: qB,
          reloading: !0
        };
        const BB = qB instanceof eB.d && qB.code === QB.c.outdatedVersion.code,
          jB = () => null === gN,
          nB = await qa({
            site: Dz.JOIN_SITE,
            error: qB,
            outdated: BB
          }, (() => {
            zB(qB, performance.now() - sB)
          }), {
            stillWanted: jB
          });
        return {
          kind: "failed",
          error: qB,
          reloading: nB
        }
      } finally {
        var iB;
        rB || pB.end(), Ln.c.releaseHold(aB);
        const BB = null === (iB = UB) || void 0 === iB ? void 0 : iB.release();
        BB && (0, Dz.reportUnusedSeat)(BB, MI)
      }
    }

    function Zu(BB, jB) {
      return BB.stack = jB.stack, BB
    }

    function Au(BB) {
      return BB.session ? (0, FB.o)(SI, BB.session.gameNameWithVariation) : Promise.resolve()
    }

    function Tu(BB, jB) {
      return (0, oj.q)(jB), new Promise(((zB, QB) => {
        const nB = () => {
          QB((0, oj.f)(jB))
        };
        jB.addEventListener("abort", nB, {
          once: !0
        }), BB.then((BB => {
          jB.removeEventListener("abort", nB), zB(BB)
        }), (BB => {
          jB.removeEventListener("abort", nB), QB(BB)
        }))
      }))
    }

    function Pu() {
      Wu(null)
    }

    function Wu(BB) {
      var jB, zB, QB;
      (function() {
        const BB = HN;
        null !== BB && LU(BB, "left")
      }(), null === DI || DI.left) || (DI.left = !0, null === (QB = (0, FB.g)()) || void 0 === QB || QB.socketLeft(), (0, rB.q)({
        websocketUrl: null
      }));
      SN && (0, oj.i)(SN, new DOMException("the join was left", "AbortError")), xu(null !== BB), null === (jB = RI) || void 0 === jB || jB.leave();
      const nB = gN;
      null !== BB && Ln.c.setGame(BB.game), eu(null, null !== (zB = null === BB || void 0 === BB ? void 0 : BB.controller) && void 0 !== zB ? zB : null), null === nB || void 0 === nB || nB.leave(), wu(0), (0, Ej.e)()
    }

    function eu(BB, jB) {
      gN = BB, SN = jB, null === gN && null === SN && Ln.c.setGame(void 0)
    }

    function lu(BB) {
      eu(BB, SN)
    }

    function wu(BB) {
      const jB = GI;
      return null !== aI && !iu && null !== jB && !jB.isStopped && (!!aI(eB.g, 0, (0, eB.x)(BB)) && (sN = !0, 0 === BB || aN || RU(jB, !1, "all"), !0))
    }

    function xu() {
      var BB, jB;
      arguments.length > 0 && void 0 !== arguments[0] && arguments[0] || (0, Zz.f)();
      const zB = null !== (BB = null === (jB = oN) || void 0 === jB ? void 0 : jB.overflow) && void 0 !== BB ? BB : null;
      oN = null, null !== zB && (0, Dz.reportEventOverflow)(zB, MI)
    }

    function Ku() {
      null !== gN || null !== SN ? Pu() : pU()
    }

    function Cu(BB, jB) {
      console.warn(`${ld} the event buffer refused records in ${jB} frames (categories ${BB})`), iu || (null !== oN ? cu(oN, BB, jB) : null !== SN && function(BB, jB, zB) {
        var QB;
        const nB = function(BB, jB) {
          return null === BB ? "drop" : BB.activated ? "keep" : 0 !== (jB & bj.u.NetSession) ? "fail" : "drop"
        }((null === (QB = PN) || void 0 === QB ? void 0 : QB.join) === BB ? PN : null, jB);
        "keep" === nB ? TN = {
          mask: jB,
          frames: zB
        } : "fail" === nB && (0, oj.i)(BB, new Error("the join's net session was lost to an event overflow"))
      }(SN, BB, jB))
    }

    function cu(BB, jB, zB) {
      const QB = BB.overflow ??= {
        frames: 0,
        acks: 0,
        mask: 0,
        outcome: null
      };
      QB.frames += zB, QB.acks++, QB.mask |= jB;
      const nB = function(BB, jB, zB) {
        if (0 === (BB & bj.u.NetSession)) return "none";
        const QB = null !== jB.rejoinedAt && zB - jB.rejoinedAt < lQ;
        return null === jB.rejoin || QB ? "fail" : "rejoin"
      }(jB, BB, performance.now());
      "none" !== nB && queueMicrotask((() => {
        if (oN !== BB) return;
        const jB = "rejoin" === nB && performance.now() - WN >= WB.h;
        QB.outcome = jB ? "rejoined" : "failed", zU(function(BB, jB) {
          return {
            code: 0,
            name: "eventOverflow",
            reason: "Your game fell behind the server.",
            canReconnect: BB,
            automaticallyReconnect: jB,
            requiresRefresh: !1
          }
        }(null !== BB.rejoin, jB), BB.rejoin, jB), Pu(), jB && (AN = performance.now())
      }))
    }

    function bu() {
      gu && function(BB, jB) {
        let {
          mesh: zB,
          worldgen: QB,
          modelPool: nB
        } = BB;
        "landingPage" === jB ? (null === zB || void 0 === zB || zB.stopWorkers(), null === QB || void 0 === QB || QB.stopWorker(), null === nB || void 0 === nB || nB.stopWorkers()) : ((0, Bj.h)(jB) || "inGame" === jB) && (null === zB || void 0 === zB || zB.restartWorkers(), null === nB || void 0 === nB || nB.startWorkers())
      }({
        mesh: hI,
        worldgen: YI,
        modelPool: wI
      }, Bj.c.get("gameState"))
    }

    function vu(BB) {
      tu = BB, Su && Ru(Su, BB)
    }

    function Ru(BB, jB) {
      BB.style.visibility = jB ? "visible" : "hidden"
    }

    function Ou(BB) {
      var jB;
      const zB = BB.roomName,
        QB = null !== (jB = BB.joinOptions.lobbyName) && void 0 !== jB ? jB : null;
      return () => {
        hu(zB, QB)
      }
    }

    function BU() {
      return zB.e(277).then((() => zB(51154))).then((BB => {
        let {
          invalidateGuestTrafficCode: jB
        } = BB;
        return jB()
      })).catch((BB => {
        console.warn(`${ld} the cached traffic code could not be dropped`, BB)
      }))
    }

    function jU(BB, jB, zB) {
      var nB, dB;
      let IB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (iu) return;
      if ((null === (nB = oN) || void 0 === nB ? void 0 : nB.conn) !== BB) return void(null !== SN && KN.set(BB, {
        code: jB,
        reason: zB
      }));
      const {
        rejoin: NB,
        game: uB,
        joinedAt: UB
      } = oN;
      xu(), GU();
      const aB = (0, WB.m)(jB, (0, xQ.e)(BB));
      if (console.info(`${ld} the game's connection closed with code ${jB} (${null!==(dB=aB.name)&&void 0!==dB?dB:"unrecognised"})`), jB === QB.c.gameOrPluginKick.code || IB || (0, Dz.reportDisconnect)(aB, MI, {
          closeReason: zB,
          sinceJoinedMs: performance.now() - UB,
          game: uB
        }), aB.requiresRefresh) {
        const BB = "outdatedVersion" === aB.name,
          zB = new Error(`the game's connection closed with code ${jB}`),
          QB = () => null === oN && null === SN;
        return void qa({
          site: Dz.JOIN_SITE,
          error: zB,
          outdated: BB
        }, (() => {
          QB() && zU(aB, null, !1)
        }), {
          stillWanted: QB
        })
      }
      const pB = aB.canReconnect ? NB : null,
        rB = null !== pB && aB.automaticallyReconnect && performance.now() - WN >= WB.h;
      zU(aB, pB, rB)
    }

    function zU(BB, jB, zB) {
      var QB;
      let nB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
        reasonKey: null,
        canPlayAgain: !1
      };
      if (Mu) return;
      Ln.c.unwantedLeave(zB && null !== jB && 0 === lN.size), null === (QB = eN) || void 0 === QB || QB.abort();
      const dB = new AbortController;
      eN = dB;
      const IB = null === jB ? null : () => {
        dB.signal.aborted || (dB.abort(), jB())
      };
      if (zB && null !== IB) {
        WN = performance.now();
        const BB = setTimeout(IB, WB.e);
        dB.signal.addEventListener("abort", (() => {
          clearTimeout(BB)
        }))
      }
      const NB = {
        code: BB.code,
        name: BB.name,
        reason: BB.reason,
        reasonKey: nB.reasonKey,
        reconnect: IB,
        reconnecting: zB,
        requiresRefresh: BB.requiresRefresh,
        canPlayAgain: nB.canPlayAgain
      };
      if (lN.size > 0)
        for (const UB of [...lN]) try {
          UB(NB)
        } catch (uB) {
          console.error(`${ld} an unwanted-leave listener threw`, uB)
        } else hQ((0, FQ.f)(BB, null !== IB, zB), dB.signal).then((jB => {
          jB && (null !== IB ? IB() : BB.requiresRefresh && (0, OB.k)())
        }))
    }
    const QU = {
      attachSocket: BB => aU(BB),
      onConnection: BB => (CN.add(BB), () => {
        CN.delete(BB)
      }),
      sendRaw: (BB, jB) => {
        const zB = DI;
        return null !== zB && zB.conn === BB && Ua(zB, jB)
      },
      leaveRoom: wu,
      closeSocket: BB => {
        var jB;
        (null === (jB = DI) || void 0 === jB ? void 0 : jB.conn) === BB && pU()
      },
      flushNet: rU
    };

    function nU(BB) {
      var jB;
      let {
        aux: zB,
        payload: QB
      } = BB;
      null === (jB = GI) || void 0 === jB || jB.queueOptions(zB, QB)
    }

    function dU(BB, jB) {
      nU(function(BB, jB) {
        return hn = BB ? {
          preventMovement: jB
        } : null, BB ? Xn(jB) : {
          aux: cj.Zb.AdEnd,
          payload: Vn
        }
      }(BB, jB))
    }

    function IU(BB) {
      var jB;
      kN = BB, null === (jB = GI) || void 0 === jB || jB.setUiPrefs(BB)
    }

    function NU(BB, jB) {
      SI.setMaster(BB, jB)
    }

    function uU(BB) {
      var jB;
      GN = BB, null === (jB = GI) || void 0 === jB || jB.setEnvPrefs(BB)
    }

    function UU(BB) {
      var jB;
      LN = BB, null === (jB = GI) || void 0 === jB || jB.setLookPrefs(BB)
    }

    function aU(BB) {
      var jB;
      let zB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new URL(BB.url).origin,
        QB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      if (BB.readyState === WebSocket.CLOSING || BB.readyState === WebSocket.CLOSED) return console.warn(`${ld} a closing or closed socket can't be attached`), null;
      const nB = GI;
      if (!nB || nB.isStopped) return console.warn(`${ld} no core is running to attach a socket to`), BB.close(), null;
      if (null === (0, FB.g)()) return console.warn(`${ld} the game has not started to attach a socket to`), BB.close(), null;
      if (QN > cj.y) return console.warn(`${ld} this core has attached all the sockets it can; reload to play on`), BB.close(), null;
      if (sN && !aN && (RU(nB, !1, "all"), nB.isStopped || iu)) return BB.close(), null;
      pU();
      const dB = QN++;
      if (!EU(nB, "open", dB, QB ? cj.Xb.Resume : 0)) return BB.close(), null;
      QB || Mj.c.reset(), PN = null === SN ? null : {
        join: SN,
        conn: dB,
        activated: !1
      }, BB.binaryType = "arraybuffer";
      const IB = new Mz.c((() => {
          ! function(BB, jB) {
            if (DI !== jB || BB.isStopped || null === mU(jB, jI)) return;
            jB.detach(), DI = null, JU(BB, jB, jI, "", !0), jB.ws.close()
          }(nB, NB)
        })),
        NB = {
          ws: BB,
          conn: dB,
          pending: [],
          pendingBytes: 0,
          left: !1,
          resume: QB,
          token: null,
          detach: () => {
            IB.dispose(), BB.removeEventListener("message", uB), BB.removeEventListener("open", UB), BB.removeEventListener("close", aB)
          }
        },
        uB = BB => {
          if (BB.data instanceof ArrayBuffer) {
            var jB;
            const zB = new Uint8Array(BB.data);
            IB.heard(), NB.token = null !== (jB = (0, Ez.d)(zB)) && void 0 !== jB ? jB : NB.token,
              function(BB, jB, zB) {
                La(BB, (() => {
                  BB.rings.net.writeFrame(jB, zB) || BB.crash(pz.q, `a socket frame of ${zB.byteLength} bytes did not fit the net-in ring`)
                }));
                const QB = BB.rings.net.cursor >= BI;
                !Ma() && (QB || BB.netWrittenSinceFrame >= Od) && RU(BB, !1, document.hidden ? "all" : "budget");
                ia(BB)
              }(nB, dB, zB)
          }
        },
        UB = () => {
          QB || (0, JB.r)("wasm_socket_open", performance.now());
          for (const jB of NB.pending.splice(0)) BB.send(jB);
          NB.pendingBytes = 0
        },
        aB = BB => {
          if (DI === NB && nB.rings.net.cursor > 0 && RU(nB, !1, "all"), DI === NB) {
            if (NB.detach(), DI = null, JU(nB, NB, BB.code, BB.reason) || sU(nB, NB)) return;
            EU(nB, "close", dB), yU(dB, NB.left), jU(dB, BB.code, BB.reason)
          }
        };
      return BB.addEventListener("message", uB), BB.addEventListener("open", UB), BB.addEventListener("close", aB), DI = NB, null === (jB = (0, FB.g)()) || void 0 === jB || jB.socketAttached(dB), (0, rB.q)({
        websocketUrl: zB
      }), dB
    }

    function pU() {
      const BB = DI;
      if (!BB) return;
      const jB = GI,
        zB = BB.resume;
      zB && (rU(), DI !== BB) || (DI = null, BB.detach(), BB.ws.close(), null !== jB && (sU(jB, BB) || zB && JU(jB, BB, zI)) || (null !== jB && EU(jB, "close", BB.conn), yU(BB.conn, BB.left)))
    }

    function rU() {
      const BB = GI;
      null !== BB && !BB.isStopped && !iu && !aN && BB.rings.net.cursor > 0 && RU(BB, !1, "all")
    }

    function sU(BB, jB) {
      var zB;
      if (!jB.resume) return !1;
      const QB = HN;
      return null !== QB && null !== jB.token && "" !== jB.token && (QB.pendingHold = {
        conn: jB.conn,
        token: `${QB.roomId}:${jB.token}`
      }), EU(BB, "close", jB.conn), null === (zB = (0, FB.g)()) || void 0 === zB || zB.socketDetached(jB.conn), !0
    }

    function JU(BB, jB, zB) {
      let QB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "",
        nB = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
      const dB = mU(jB, zB);
      if (null === dB) return !1;
      const {
        DN: IB,
        token: NB,
        game: uB,
        joinedAt: UB
      } = dB;
      if (!EU(BB, "close", jB.conn, cj.C.Held)) return !0;
      console.warn(`${ld} the game's connection ${nB?"went silent":`dropped with code ${zB}`}, holding it`);
      const aB = {
        closeReason: QB,
        sinceJoinedMs: performance.now() - UB,
        game: uB
      };
      return (0, Dz.reportDisconnect)((0, WB.m)(zB), MI, aB, nB ? "silent" : void 0), IB.heldConn = jB.conn, IB.dropCode = zB, IB.pendingHold = {
        conn: jB.conn,
        token: `${IB.roomId}:${NB}`
      }, aN || RU(BB, !1, "all"), !0
    }

    function mU(BB, jB) {
      const zB = HN,
        nB = oN,
        dB = BB.token;
      return null === zB || null === nB || iu || BB.left || nB.conn !== BB.conn || null === dB || "" === dB ? null : (0, QB.f)(jB) && zB.resume.canHoldSeat() ? {
        DN: zB,
        token: dB,
        game: nB.game,
        joinedAt: nB.joinedAt
      } : null
    }

    function yU(BB, jB) {
      var zB;
      null === (zB = (0, FB.g)()) || void 0 === zB || zB.closeGame(BB), (0, Yn.e)().close(BB), jB || (0, rB.q)({
        websocketUrl: null
      })
    }

    function kU() {
      const BB = ZN;
      if (null === BB) return;
      const jB = (0, FB.g)();
      iu || null === jB || jB.nD(BB) ? ZN = null : performance.now() - JN.pause >= II && (JN.pause = performance.now(), console.warn(`${ld} the cmd ring had no room for SetPaused(${BB}): written before the next frame`))
    }

    function GU() {
      const BB = HN;
      HN = null, null === BB || void 0 === BB || BB.resume.dispose()
    }

    function LU(BB, jB) {
      var zB, QB;
      const {
        heldConn: nB
      } = BB, dB = BB.resume.resumingConn;
      BB.heldConn = 0, BB.pendingHold = null, HN === BB && (HN = null), "left" === jB ? BB.resume.leave() : BB.resume.dispose(), 0 === XN || (null === (zB = DI) || void 0 === zB ? void 0 : zB.conn) !== XN || "left" === jB && (null === (QB = gN) || void 0 === QB ? void 0 : QB.conn) === XN || MU(XN), "gaveUp" === jB && 0 !== dB && MU(dB), 0 !== nB && "refused" !== jB && (console.info(`${ld} the game held through its drop ${"left"===jB?"was left":"is given up"}`), null === GI || GI.isStopped || EU(GI, "close", nB), yU(nB, !1))
    }

    function gU(BB, jB) {
      const zB = jB.indexOf(":");
      return {
        roomId: zB < 0 ? BB.roomId : jB.slice(0, zB),
        roomToken: jB.slice(zB + 1)
      }
    }

    function tU(BB) {
      (0, rz.logClientMeasurement)("join_preload", BB, {
        client: "wasm"
      })
    }

    function SU(BB) {
      var jB;
      DN = BB;
      const zB = BB.replayOffer && hN !== BB.conn;
      VN = zB ? BB.conn : 0, FN = zB || YN.has(BB.conn) ? 0 : BB.conn, SB.admitted(), BB.conn === XN && (XN = 0);
      const QB = HN;
      null !== QB && (null === (jB = oN) || void 0 === jB ? void 0 : jB.conn) === BB.conn && QB.resume.onInitialInfo(BB)
    }

    function MU(BB) {
      var jB;
      const zB = DI;
      (null === zB || void 0 === zB ? void 0 : zB.conn) === BB && (zB.left = !0, null === (jB = (0, FB.g)()) || void 0 === jB || jB.socketLeft(), (0, rB.q)({
        websocketUrl: null
      }), wu(BB) ? setTimeout((() => {
        DI === zB && pU()
      }), eB.e) : pU())
    }

    function EU(BB, jB, zB) {
      let QB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        nB = !1;
      return La(BB, (() => {
        const {
          net: dB
        } = BB.rings;
        nB = "open" === jB ? dB.writeOpen(zB, QB) : dB.writeClose(zB, QB), nB || BB.crash(pz.q, `a socket ${jB} did not fit the net-in ring`)
      })), nB
    }

    function iU(BB, jB, zB) {
      let QB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      if (HU()) return (0, Dz.reportUnsupportedFallback)(BB, jB, zB, QB), void DU(`the wasm client can't run here (${zB}; ${jB})`, jB);
      (0, Dz.showUnsupported)(BB, "unsupported", zB, QB)
    }
    const qU = 1500;

    function fU(BB, jB) {
      const zB = 1 === BB.missing.length && BB.missing[0] === Uz.e,
        QB = jB ? "blockedAfterLoss" : zB ? "noContext" : "unsupported";
      return {
        decline: QB,
        detail: `No WebGPU or WebGL2, and WebGL1 lacks ${BB.missing.join(", ")}`,
        details: {
          missing: BB.missing.join(",")
        },
        retries: "unsupported" !== QB && HU()
      }
    }

    function oU(BB) {
      console.warn(`${ld} ${BB}: reloading once more onto the wasm client`), (0, Dn.s)(), (0, Dz.flushCrashReports)(OB.d).then(OB.k, OB.k)
    }

    function HU() {
      return gu && "wasm" !== (0, tj.c)(window.location.search)
    }

    function DU(BB, jB) {
      console.warn(`${ld} ${BB}: reloading on the JS client`), null !== jB && (0, tj.A)(jB), (0, tj.x)(null === jB ? "reloadOntoJs" : "decline");
      const zB = () => {
        (0, OB.h)(tj.H)
      };
      (0, Dz.flushCrashReports)(OB.d).then(zB, zB)
    }

    function FU(BB, jB, zB, QB) {
      return RN(BB, jB, zB, QB)
    }

    function YU() {
      null === ju || null === GI || GI.isStopped || iu || null !== KI || null === aI || (KI = ju(aI, XU, ZU().follow))
    }

    function VU() {
      var BB, jB, zB;
      return null !== (BB = null === (jB = gI) || void 0 === jB || null === (zB = jB.textures) || void 0 === zB ? void 0 : zB.files()) && void 0 !== BB ? BB : null
    }

    function hU(BB) {
      ZU().follow((jB => {
        null !== jB && Promise.all([Promise.all([zB.e(204), zB.e(46)]).then((() => zB(51181))), (0, Dn.M)()]).then((BB => {
          let [{
            followPagePackFiles: zB
          }, QB] = BB;
          const nB = null === QB || (0, Uz.r)(QB) ? "webgl" : QB.backend;
          zB(jB, Gn.h, nB, (BB => {
            Gn.h.setPageFiles(BB)
          }), XU)
        }), (jB => {
          console.warn(`${ld} the texture pack's files didn't load: the previews draw the shipped ones until the next opens`, jB), BB()
        }))
      }))
    }

    function XU(BB, jB) {
      console.warn(`${ld} ${BB}`, jB)
    }

    function ZU() {
      return LI ??= new Wn({
        load: BB => Promise.all([zB.e(204), zB.e(55)]).then((() => zB(51184))).then((jB => {
          let {
            startPageTexturePackFeed: zB
          } = jB;
          return zB(XU, BB)
        })),
        store: Wz.g,
        JJ: BB => {
          qI.then((() => {
            (0, Dz.reportTexturePackFeedLoadFailure)(BB, MI)
          }))
        }
      }), LI
    }
    const AU = BB => ZU().follow(BB);

    function TU() {
      return ZU().loaded()
    }
    const PU = function(BB, jB, zB) {
        let QB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => performance.now(),
          nB = 0;
        return async function(dB, IB) {
          let NB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => !0;
          const uB = ++nB,
            UB = QB() + jB,
            aB = await
          function(BB, jB) {
            let zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {};
            return new Promise((QB => {
              const nB = setTimeout((() => {
                QB(null), BB.then((BB => {
                  null !== BB && (BB.joinedWithout(), zB(BB))
                }))
              }), jB);
              BB.then((BB => {
                clearTimeout(nB), QB(BB)
              }))
            }))
          }(BB(dB), jB, (BB => {
            uB === nB && NB() && IB(BB, QB() + jB).catch((BB => {
              zB("the texture pack step after the join failed", BB)
            }))
          }));
          return null === aB ? null : IB(aB, UB)
        }
      }((BB => (0, pj.n)(BB) ? ZU().request() : ZU().forJoin()), Pn.d, XU),
      WU = function(BB, jB) {
        let zB = !1;
        return {
          setGamePackConfirm: BB => {
            zB = null !== BB, jB(BB)
          },
          packStep: (jB, QB, nB) => BB(jB, QB, (() => zB && nB()))
        }
      }(PU, (BB => {
        ZU().setGamePackConfirm(BB)
      }));

    function eU(BB) {
      WU.setGamePackConfirm(BB)
    }

    function lU() {
      if (iu || null !== Iu || null === zu || null === du) return;
      const {
        backend: BB,
        canvas: jB,
        fallbackReason: zB,
        adapterVendor: QB
      } = du, nB = zu;
      zu = null;
      try {
        Iu = nB({
          backend: BB,
          canvas: jB,
          fallbackReason: zB,
          adapterVendor: QB,
          joinedGame: () => iu ? null : gN,
          canSend: () => !iu && null !== gN && gN.conn === FN,
          inGame: xU,
          shaderPackReach: () => {
            var BB, jB;
            return null !== (BB = null === (jB = RI) || void 0 === jB ? void 0 : jB.reachInJoinedGame()) && void 0 !== BB ? BB : null
          },
          Rm: () => CI,
          msaa: () => nu > 1,
          writeCmd: (BB, jB, zB) => null !== aI && aI(BB, jB, zB),
          takeFailedMeshJobs: () => {
            var BB, jB;
            return null !== (BB = null === (jB = hI) || void 0 === jB ? void 0 : jB.takeFailedMeshJobs()) && void 0 !== BB ? BB : 0
          },
          readLoadCounts: BB => {
            var jB, zB;
            return null !== (jB = null === (zB = GI) || void 0 === zB ? void 0 : zB.readLoadCounts(BB)) && void 0 !== jB && jB
          },
          mainStalled: (BB, jB, zB) => {
            (0, Dz.reportMainStall)(BB, jB, zB, MI)
          }
        })
      } catch (dB) {
        console.error(`${ld} the frame telemetry didn't start`, dB)
      }
    }

    function wU(BB, jB) {
      try {
        var zB, QB, nB;
        const dB = cN && null !== (zB = null === (QB = GI) || void 0 === QB || null === (nB = QB.lastHeader) || void 0 === nB ? void 0 : nB.renderPending) && void 0 !== zB ? zB : 0;
        (0, rQ.f)(jB, BB, xU() && !(null !== hn), dB)
      } catch (dB) {
        (0, rQ.v)(), console.error(`${ld} the quality steps stopped`, dB)
      }
    }

    function xU() {
      return null !== gN && ku === gN && !iu
    }

    function KU(BB) {
      const jB = Iu;
      Iu = null;
      try {
        null === jB || void 0 === jB || jB.stop()
      } catch {}
      console.error(`${ld} the frame telemetry threw: it stops`, BB)
    }

    function CU(BB) {
      var jB, zB, QB, nB;
      if ((0, Yn.e)().fire(BB), "message" === BB.type) {
        if (pN++, BB.ha === cj.Gc.ERROR && null !== SN) {
          var dB;
          const {
            text: jB,
            dropsCache: zB
          } = (0, WB.t)((new TextDecoder).decode(BB.payload));
          wN ||= zB, (null === (dB = PN) || void 0 === dB ? void 0 : dB.conn) === BB.conn && (xN = jB)
        } else if (BB.ha === bj.Wb.ResumeComplete) {
          var IB;
          hN = BB.conn, BB.conn === VN && (VN = 0, FN = YN.has(BB.conn) ? 0 : BB.conn), null === (IB = HN) || void 0 === IB || IB.resume.onResumeComplete(BB.conn)
        }
        return
      }
      BB.phase === cj.E.Left ? rN = BB.conn : BB.phase === cj.E.Activated && (null === (jB = PN) || void 0 === jB ? void 0 : jB.conn) === BB.conn ? PN.activated = !0 : BB.phase === cj.E.Resumed ? function(BB) {
        var jB, zB;
        XN = BB;
        const QB = HN;
        if (null === QB || 0 === QB.heldConn || (null === (jB = DI) || void 0 === jB ? void 0 : jB.conn) !== BB || !DI.resume || null === oN) return;
        console.info(`${ld} the game resumed on conn ${BB}, waiting for its InitialInfo`);
        const nB = QB.heldConn;
        QB.heldConn = 0, DI.resume = !1, oN.conn = BB, (null === (zB = qN) || void 0 === zB ? void 0 : zB.conn) === nB && (qN = {
          conn: BB,
          info: qN.info
        }), Mj.c.apply({
          shopInfo: null,
          _shopVersion: rj.d
        })
      }(BB.conn) : BB.phase === cj.E.Held ? function(BB) {
        var jB;
        const zB = HN,
          QB = null !== (jB = null === zB || void 0 === zB ? void 0 : zB.pendingHold) && void 0 !== jB ? jB : null;
        if (null !== zB && null !== QB && QB.conn === BB) return zB.pendingHold = null, zB.heldConn = BB, XN = 0, console.warn(`${ld} the core holds the game, reconnecting`), void zB.resume.onDropped(QB.token);
        if (BB === XN) {
          XN = 0;
          const jB = GI;
          null === jB || jB.isStopped || (console.info(`${ld} the core held again a resumed game the shell ended before its InitialInfo: closing it again`), EU(jB, "close", BB))
        }
      }(BB.conn) : BB.phase === cj.E.Closed && (null === (zB = HN) || void 0 === zB || null === (QB = zB.pendingHold) || void 0 === QB ? void 0 : QB.conn) === BB.conn && (HN.heldConn === BB.conn ? function(BB) {
        const jB = BB.heldConn,
          zB = BB.dropCode;
        LU(BB, "refused"), console.info(`${ld} the core didn't hold the game through its drop: it hadn't started`), queueMicrotask((() => {
          yU(jB, !1), jU(jB, zB, "", !0)
        }))
      }(HN) : HN.pendingHold = null), BB.phase !== cj.E.Held && BB.phase !== cj.E.Left && BB.phase !== cj.E.Closed || (YN.add(BB.conn), BB.conn === FN && (FN = 0));
      const NB = Object.keys(cj.E).find((jB => cj.E[jB] === BB.phase)),
        uB = 0 === BB.code ? "" : ` (code ${BB.code})`;
      console.info(`${ld} conn ${BB.conn}: ${null!==NB&&void 0!==NB?NB:BB.phase}${uB}, ${pN} raw messages so far`), (null === (nB = gN) || void 0 === nB ? void 0 : nB.conn) !== BB.conn || BB.phase !== cj.E.Left && BB.phase !== cj.E.Closed || lu(null), iN !== BB.conn || BB.phase !== cj.E.Left && BB.phase !== cj.E.Closed || (iN = null, null === gN && null === SN && Ln.c.setGame(void 0));
      for (const aB of [...CN]) try {
        aB(BB.conn, BB.phase, BB.code)
      } catch (UB) {
        (0, vj.p)(UB, `${ld} a connection listener threw`)
      }
    }

    function cU() {
      (0, Dn.s)(), null === gN && null === SN || (0, ez.g)(), queueMicrotask((() => {
        try {
          aa()
        } catch (BB) {
          console.warn(`${ld} stopping before the reload threw`, BB)
        }(0, Dz.flushCrashReports)(OB.d).then(OB.k, OB.k)
      }))
    }

    function bU() {
      const BB = GI;
      null === BB || BB.isStopped || null === DI || aN || !BB.hasPendingCommands() || RU(BB, !1, "budget")
    }

    function vU(BB) {
      var jB;
      const zB = gN;
      BB.persisted || null === zB || (null === (jB = DI) || void 0 === jB ? void 0 : jB.conn) !== zB.conn || DI.left || zB.leave()
    }

    function RU(BB, jB, QB) {
      let nB = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const dB = aN;
      aN = !0;
      try {
        const dB = BB.rings.net.cursor >= BI;
        dB && "all" !== QB && !document.hidden && ra("backlog", `a shown tab's net-in is ${BB.rings.net.cursor} bytes behind: one frame reads it all`);
        return function(BB, jB, QB, nB) {
          var dB, IB, NB, uB;
          if (iu) return !1;
          if (La(BB, Ba), iu || BB.isStopped) return !1;
          Na() && jN("modelsIn");
          kU(), nN = performance.now(), rN = null, sN = !1, (0, DB.K)(), null === (dB = WI) || void 0 === dB || dB.beforeFrame(), qQ(nN, BB), (0, DB.F)(nN, ja), UN = !0;
          const UB = jB && Ia();
          let aB;
          try {
            aB = BB.frame(nN, UB, QB)
          } finally {
            UN = !1
          }
          if (!aB) return !1;
          Qu.observe(null !== (IB = null === (NB = BB.lastHeader) || void 0 === NB ? void 0 : NB.chunksCancelled) && void 0 !== IB ? IB : 0);
          const pB = BB.lastFrameKind,
            rB = (0, Xj.e)(pB);
          (function(BB) {
            null !== nd && nd.afterFrame(performance.now(), BB)
          })(rB), null === (uB = Nu) || void 0 === uB || uB.frame(BB, nN, pB), jB && (Gu = rB);
          rB && (0, Yj.e)(nN);
          if (null !== Iu) try {
            Iu.frameRan(BB, nN, performance.now(), pB)
          } catch (mB) {
            KU(mB)
          }
          "drawn" === pB && da() && function() {
            for (const BB of [...fn]) BB()
          }();
          BB.forEachNetOut(ua);
          const sB = DI;
          null !== rN && (null === sB || void 0 === sB ? void 0 : sB.conn) === rN && Ua(sB, eB.h);
          na(BB),
            function(BB) {
              const jB = 0 !== (BB.headerWord(bj.C.LoadSteps) & bj.K.JoinPreload);
              jB !== EN && (EN = jB, (0, Dz.setCrashAdPreload)(jB), (0, Zz.K)())
            }(BB), jB && function(BB) {
              var jB, QB, nB;
              if (null === gN || !Ia()) return;
              const dB = BB.headerWord(bj.C.LoadSteps);
              null === yu || ku === gN && !yu.frame(nN, 0 !== (dB & bj.M.TerrainDrawn)) || (yu = null);
              if (0 === (dB & bj.K.PlayerBound)) return;
              const IB = BB.lastHeader,
                NB = !cN || 0 === (null === IB || void 0 === IB ? void 0 : IB.renderPending);
              !pu && NB && (pu = !0, performance.mark(Rd));
              if (ku === gN) return;
              const uB = null !== (jB = null === IB || void 0 === IB ? void 0 : IB.firstView) && void 0 !== jB ? jB : cj.X.NotYet;
              if (cN && uB === cj.X.NotYet) return;
              if (au && (!0 !== (null === (QB = (0, FB.g)()) || void 0 === QB ? void 0 : QB.isSessionLive) || !NB)) return;
              ku = gN;
              const UB = gN;
              if (setTimeout((() => {
                  gN === UB && (0, JB.i)()
                }), 0), null === (nB = RI) || void 0 === nB || nB.playable(), function() {
                  clearTimeout(HI), HI = setTimeout((() => {
                    xU() && Sa((BB => {
                      let {
                        prefetchWorldgenWorker: jB
                      } = BB;
                      jB()
                    }))
                  }), UI)
                }(), au) return;
              au = !0, performance.mark(vd), (0, vn.q)("render") && Promise.all([zB.e(78), zB.e(49)]).then((() => zB(4773))).then((BB => {
                let {
                  renderDebugPlayable: jB
                } = BB;
                jB()
              }), (BB => {
                console.warn("The render debug topic didn't load", BB)
              }));
              const aB = Math.round(performance.now()),
                pB = BB.readViewQueuedPrograms();
              null !== pB && (0, JB.r)("wasm_view_links", aB, (0, Jj.hb)(pB));
              const rB = null === mu || null === su ? 0 : Math.max(0, su - mu),
                sB = null === mu ? 0 : Math.max(0, aB - mu),
                mB = cN ? BB.readFirstViewWait(rB, sB) : null;
              null !== mB && (0, JB.n)(mB);
              if (cN && uB !== cj.X.Drawn) {
                const jB = uB === cj.X.HeldBackstop ? "held_draws" : "long",
                  {
                    cause: zB
                  } = za(BB);
                if (console.warn(`${ld} playable at ${aB} ms on the first view's ${jB} backstop, ${zB}: it wasn't drawn whole in time`), (0, JB.r)("wasm_view_backstop", aB, `${jB}:${zB}`), "long" === jB) {
                  var yB, kB;
                  const jB = null !== (yB = null === (kB = oN) || void 0 === kB ? void 0 : kB.game) && void 0 !== yB ? yB : "";
                  yu = new lz.b((() => {
                    const {
                      cause: zB,
                      census: QB
                    } = za(BB);
                    (0, Dz.reportFirstViewNoTerrain)(jB, zB, QB, MI), (0, gj.p)("noTerrain")
                  }))
                }
              } else console.info(`${ld} playable at ${aB} ms${cN?"":" (no renderer)"}`);
              setTimeout(Bu, 0), (0, ij.f)().catch((BB => {
                console.error(`${ld} item sprites didn't load, so item particles show the missing texture`, BB)
              })), an.d.warm()
            }(BB);
          (0, pz.C)(BB, {
            worldgen: YI,
            mesh: hI
          }),
          function(BB) {
            BB.forEachEvent(oQ);
            for (const jB of fQ) try {
              (0, tQ.d)(jB)
            } catch (mB) {
              if ((0, vj.i)(mB)) {
                BB.crashOn(pz.l, mB);
                break
              }
              console.error(`${MQ} an input action listener threw`, mB)
            }
            fQ.length = 0
          }(BB), nB && (0, hj.e)();
          return !BB.isStopped
        }(BB, jB, "all" === QB || dB, nB)
      } finally {
        aN = dB, dB || (dN = performance.now())
      }
    }

    function OU(BB) {
      console.error(`${ld} a frame-start listener threw`, BB)
    }

    function Ba() {
      var BB, jB, zB, QB;
      null === (BB = lI) || void 0 === BB || BB.drain(aI, pI), null === (jB = cI) || void 0 === jB || jB.drain(aI), null === (zB = bI) || void 0 === zB || zB.drain(performance.now()), ON(aI), null === (QB = KI) || void 0 === QB || QB.drain()
    }

    function ja(BB) {
      console.error(`${ld} a before-frame listener threw`, BB)
    }

    function za(BB) {
      const jB = (0, FB.g)(),
        zB = (0, FB.q)(),
        QB = null === jB || null === zB ? null : zB.readDrawCensus(jB.api);
      return {
        cause: (0, lz.i)(BB.headerWord(bj.C.LoadSteps), QB),
        census: QB
      }
    }
    const Qa = {
      ChunkRequested: "wasm_chunk_requested",
      ChunkStored: "wasm_chunk_stored",
      MeshLanded: "wasm_mesh_landed",
      PlayerChunk: "wasm_player_chunk",
      TerrainDrawn: "wasm_terrain_drawn"
    };

    function na(BB) {
      var jB;
      if (au) return;
      if (null === su && Ia() && (su = performance.now()), null === gN || 0 === (BB.headerWord(bj.C.LoadSteps) & bj.K.PlayerBound) ? mu = null : mu ??= performance.now(), null === SN && null === gN) return;
      null === su || Ju || (Ju = !0, (0, JB.r)("wasm_startup_loaded", su));
      let zB = 0;
      null !== gN ? zB = -1 : !0 === (null === (jB = PN) || void 0 === jB ? void 0 : jB.activated) && (zB = ~bj.M.TerrainDrawn);
      const QB = BB.headerWord(bj.C.LoadSteps) & zB & ~ru;
      if (0 === QB) return;
      ru |= QB;
      const nB = performance.now();
      for (const [dB, IB] of Object.entries(Qa)) 0 !== (QB & bj.M[dB]) && (0, JB.r)(IB, nB)
    }

    function da() {
      return cN && Ia()
    }

    function Ia() {
      return vI && Na()
    }

    function Na() {
      return null === lI || lI.startupDone
    }

    function ua(BB, jB) {
      const zB = DI;
      (null === zB || void 0 === zB ? void 0 : zB.conn) === BB ? Ua(zB, jB) : yN++
    }

    function Ua(BB, jB) {
      const {
        ws: zB
      } = BB;
      return zB.readyState === WebSocket.OPEN ? (zB.send(jB), !0) : zB.readyState === WebSocket.CONNECTING && BB.pendingBytes + jB.byteLength <= dI ? (BB.pending.push(jB.slice()), BB.pendingBytes += jB.byteLength, !0) : (yN++, !1)
    }

    function aa() {
      var BB, jB, zB, QB, nB, dB, IB, NB, uB, UB, aB, pB, rB, sB, JB, mB, yB;
      iu = !0, Lu.stop(), (0, On.endLookDebugTake)(), nd = null, GU(), (0, DB.I)().unlockPointer(), (0, DB.H)(null), null === (BB = eI) || void 0 === BB || BB(), eI = null, null === (jB = (0, FB.q)()) || void 0 === jB || jB.followCursorAim(null), (0, hj.G)(), (0, FB.f)(), SI.stop(), null === (zB = uu) || void 0 === zB || zB(), uu = null, null === (QB = Uu) || void 0 === QB || QB(), Uu = null, null === (nB = Iu) || void 0 === nB || nB.stop(), Iu = null, (0, xz.p)(null), null === (dB = FI) || void 0 === dB || dB(), FI = null, null === (IB = YI) || void 0 === IB || IB.stop(), YI = null, null === (NB = hI) || void 0 === NB || NB.stop(), hI = null, null !== (uB = gI) && void 0 !== uB && null !== (UB = uB.textures) && void 0 !== UB && UB.assets && (0, yn.i)(null), null === (aB = gI) || void 0 === aB || aB.stop(), gI = null, tI = null;
      const kB = XI;
      XI = null, kB && (kB.stop(), Ga(kB)), null === (pB = cI) || void 0 === pB || pB.dispose(), cI = null, null === (rB = bI) || void 0 === rB || rB.dispose(), bI = null, lI = null, null === (sB = xI) || void 0 === sB || sB(), xI = null, null === (JB = PI) || void 0 === JB || JB(), PI = null, null !== uN && (clearTimeout(uN), uN = null), null === (mB = WI) || void 0 === mB || mB.stop(), WI = null, Pu(), Ln.c.release(), pU();
      const GB = KI;
      KI = null;
      try {
        null === GB || void 0 === GB || GB.dispose()
      } catch (LB) {
        console.warn(`${ld} the sky's images didn't release`, LB)
      }(0, pn.f)(null), null === (yB = yI) || void 0 === yB || yB.pagePreviews().endSession(null === (0, mj.q)())
    }

    function pa(BB, jB) {
      var zB, QB;
      const nB = null !== (zB = null === (QB = XI) || void 0 === QB ? void 0 : QB.details()) && void 0 !== zB ? zB : {},
        dB = BB.site === xd || BB.site === Kd || BB.site === Dz.RENDER_RELOAD_SITE || BB.site === Cd ? BB.error instanceof WebAssembly.RuntimeError || BB.error instanceof dz.c : !(0, Uz.u)(BB.error) && (0, pz.A)(BB);
      dB && BB.error instanceof Error && (0, mj.L)(BB.error);
      const IB = dB || BB.site === pz.r ? (0, Dz.readTrap)(BB.error) : null,
        NB = null !== IB && (0, Oj.h)(IB.kind, IB.refusedBytes) ? IB.refusedBytes : 0,
        uB = (0, qz.m)(),
        UB = null === ZI ? (0, Nn.t)(function() {
          try {
            return (0, mj.t)().buffer.byteLength
          } catch {
            return 0
          }
        }(), NB, uB) : ZI.ceilingMayRefuse(NB, uB),
        aB = NB > 0 && !UB && HU();
      var pB;
      if (aB && ((0, tj.A)("oom"), (0, tj.x)("decline"), Eu = !0), aa(), (0, Dn.d)()) return console.warn(`${ld} the session stopped at ${BB.site} as the page reloads`, BB.error), void((0, Uz.u)(BB.error) || (null === (pB = BB.header) || void 0 === pB ? void 0 : pB.lastError) === cj.J.CoreBusy || (0, Dz.reportStoppedCore)(BB, jB, IB, {
        memoryDetails: nB,
        declined: aB
      }));
      (0, Dz.showCrash)(BB, jB, IB, {
        memoryDetails: nB,
        declined: aB
      })
    }

    function ra(BB, jB) {
      const zB = performance.now();
      return !(zB - JN[BB] < II) && (JN[BB] = zB, console.warn(`${ld} ${jB}`), !0)
    }

    function sa(BB) {
      const {
        input: jB,
        net: zB,
        worker: QB
      } = BB.rings, nB = BB.optionsDropped, dB = jB.dropped + nB + zB.dropped + QB.dropped + yN;
      dB !== mN && ra("dropped", `${dB} records dropped so far (input ${jB.dropped}, options ${nB}, net ${zB.dropped}, worker ${QB.dropped}, net-out ${yN})`) && (mN = dB)
    }

    function Ja() {
      var BB, jB;
      const zB = (0, Xz.b)();
      if (null === zB) return null;
      const QB = (0, Pz.o)(zB);
      return {
        ...QB,
        horizontal: Math.min(QB.horizontal, null !== (BB = null === (jB = XI) || void 0 === jB ? void 0 : jB.shedDistanceInUse()) && void 0 !== BB ? BB : 1 / 0)
      }
    }

    function ma(BB) {
      var jB, zB;
      return {
        samples: cN ? nu : null,
        sunShadows: BB,
        renderDistance: null !== (jB = null === (zB = Ja()) || void 0 === zB ? void 0 : zB.horizontal) && void 0 !== jB ? jB : null
      }
    }

    function ya(BB) {
      MN = BB, (0, Zz.K)()
    }

    function ka() {
      var BB, jB, zB;
      const QB = Ja();
      return {
        ...null === (BB = XI) || void 0 === BB ? void 0 : BB.pageKillSnapshot(),
        renderDistance: null !== (jB = null === QB || void 0 === QB ? void 0 : QB.horizontal) && void 0 !== jB ? jB : null,
        renderDistanceVertical: null !== (zB = null === QB || void 0 === QB ? void 0 : QB.vertical) && void 0 !== zB ? zB : null,
        chunkCap: AI,
        budgetBasis: TI,
        renderBackend: (0, Dn.D)(),
        adPreload: EN,
        ...(0, Az.e)(MN)
      }
    }

    function Ga(BB) {
      var jB;
      console.info(`${ld} wasm memory at the session's end`, BB.details());
      const {
        wasmMainMiB: zB,
        wasmWorkersMiB: QB,
        peakStoredChunks: nB
      } = BB.pageKillSnapshot(), dB = navigator.deviceMemory;
      (0, rz.logClientMeasurement)("wasm_memory_end", {
        wasmMainMiB: zB,
        wasmWorkersMiB: QB,
        peakStoredChunks: nB
      }, {
        client: "wasm",
        renderBackend: null !== (jB = (0, Dn.D)()) && void 0 !== jB ? jB : "none",
        os: (0, Tz.getOperatingSystem)(),
        deviceMemory: String(null !== dB && void 0 !== dB ? dB : "unreported")
      })
    }

    function La(BB, jB) {
      if (!BB.isStopped) try {
        jB()
      } catch (zB) {
        BB.crash(pz.t, zB)
      }
    }

    function ga() {
      return VI ??= zB.e(72).then((() => zB(51188))).catch((BB => {
        throw VI = null, BB
      })), VI
    }
    async function ta() {
      const {
        createWorldgenWorker: BB,
        worldgenWorkerReady: jB
      } = await ga();
      return await jB(), BB
    }

    function Sa(BB) {
      var jB;
      null === (jB = VI) || void 0 === jB || jB.then(BB, (() => {}))
    }

    function Ma() {
      return performance.now() - Math.max(dN, IN) >= NI
    }

    function Ea(BB) {
      const jB = document.hidden || NN ? "all" : "budget";
      NN = !0;
      const zB = RU(BB, !1, jB);
      var QB;
      zB && (sa(BB), null === (QB = XI) || void 0 === QB || QB.afterFrame());
      return zB
    }

    function ia(BB) {
      BB.isStopped || 0 === BB.rings.net.cursor || Ma() && !Ea(BB) || BB.rings.net.cursor > 0 && performance.now() - IN >= NI / 2 && function(BB) {
        uN ??= setTimeout((() => {
          uN = null, ia(BB)
        }), NI)
      }(BB)
    }

    function qa(BB, jB) {
      return async function(BB, jB, zB) {
        let {
          stop: QB,
          stillWanted: nB,
          beforeReload: dB
        } = zB;
        const IB = await (0, wQ.j)(BB, {
          stillWanted: nB,
          beforeReload: async () => {
            QB(), await Promise.all([(0, Dz.flushCrashReports)(OB.d), null === dB || void 0 === dB ? void 0 : dB()])
          },
          reload: OB.k
        });
        return IB || jB(), IB
      }(BB, jB, {
        ...arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        stop: aa
      })
    }
    let fa = !1;

    function oa() {
      return fa = !0, async function(BB, jB, QB) {
        const {
          gamePackSource: nB
        } = await zB.e(276).then((() => zB(41150)));
        await WU.packStep(BB, ((zB, QB) => zB.packForGame(BB, nB(jB), QB)), QB)
      }(...arguments)
    }

    function Ha(BB) {
      ! function(BB, jB) {
        BB((BB => {
          null === BB || void 0 === BB || BB.subscribe((BB => {
            let {
              pack: zB,
              gameSource: QB
            } = BB;
            jB(null === QB || null === zB ? null : {
              pack: zB,
              source: "" === QB ? null : QB
            })
          }))
        }))
      }(AU, BB)
    }
    let Da = !1,
      Fa = null,
      Ya = !1,
      Va = !1;

    function ha() {
      var BB;
      Da || (Da = !0, Fu("play", vB), (0, rB.n)(new Ca), NB.gameBridge.attach(PB), Wa().catch((() => {})), (0, FB.r)((BB => {
        Uj(BB.setTextHost)
      })), BB = Aa, lN.add(BB), function(BB) {
        for (const jB of OI) BB(jB);
        BN.add(BB)
      }((BB => {
        Za(Xa[BB])
      })))
    }
    const Xa = {
      booted: dB.j.INITIALISE_NOA,
      texturesIn: dB.j.REGISTRATION,
      modelsIn: dB.j.SETUP_LIFEFORMS
    };

    function Za(BB) {
      uB.n.Ly("matchmakeAndPlayStepCompleted", {
        step: BB,
        totalSubSteps: 1
      })
    }

    function Aa(BB) {
      if (!Ya) return;
      const {
        gameNameWithVariation: jB,
        lobbyName: zB
      } = (0, rB.d)();
      if (BB.code === QB.c.serverUpdating.code) return (new Ca).leaveLive(), void Pa(jB, zB);
      uB.n.Ly("unwantedLeftGame", {
        reason: Ta(BB),
        requiresRefresh: BB.requiresRefresh,
        canReconnect: null !== BB.reconnect,
        automaticallyReconnect: BB.reconnecting,
        canPlayAgain: BB.canPlayAgain,
        gameNameWithVariation: jB,
        lobbyName: zB
      }), (new Ca).leaveLive()
    }

    function Ta(BB) {
      return null !== BB.reasonKey ? {
        translationKey: BB.reasonKey
      } : "gameOrPluginKick" === BB.name ? BB.reason : `You have disconnected from the server.\n${BB.reason}`
    }

    function Pa(BB, jB) {
      var QB;
      QB = (0, UB.C)(BB, jB), Promise.resolve().then((() => zB(1543))).then((BB => {
        let {
          navigatePreserveSearch: jB
        } = BB;
        jB(QB)
      })).catch((BB => {
        console.warn("[bloxd-wasm-client] the page's router didn't navigate: loading the page instead", BB), (0, OB.g)(QB)
      }))
    }

    function Wa() {
      return Fa ??= Promise.all([zB.e(73), zB.e(76), zB.e(75), zB.e(74), zB.e(90), zB.e(87), zB.e(273), zB.e(191), zB.e(228), zB.e(252), zB.e(275), zB.e(47)]).then((() => zB(41085))).then((BB => {
        try {
          BB.attachPlayGameSources()
        } catch (jB) {
          throw console.error("[bloxd-wasm-client] the play sources did not attach", jB),
            function(BB) {
              qI.then((jB => {
                null === jB || jB.isStopped || iu ? console.warn(`${ld} the play sources threw as they attached, after the client stopped`, BB) : pa({
                  site: Cd,
                  error: BB,
                  header: null
                }, MI)
              }))
            }(jB), jB
        }
      }), (BB => {
        throw Fa = null, new FB.e(BB)
      })), Fa
    }
    async function ea(BB, jB) {
      ha(), fa = !0, Ya = !0;
      let zB = {
          place: BB.place,
          matchedAt: BB.matchedAt
        },
        IB = BB.place.gameNameWithVariation;
      const NB = (0, pB.i)();
      let uB = null;
      const UB = await Xu({
        matchmake: async () => {
          let jB = zB;
          if (zB = null, null === jB) {
            const zB = await BB.rematch();
            if (zB.isError()) throw uB = zB.asError().forward(), new Error(zB.asError().message);
            jB = {
              place: zB.getValue(),
              matchedAt: performance.now()
            }
          }
          IB = jB.place.gameNameWithVariation;
          return {
            target: await (0, wB.c)(BB.userContext, jB.place, TU(), NB),
            matchedAt: jB.matchedAt,
            freshMs: wB.b
          }
        },
        pageReady: Wa,
        onFailure: (BB, jB) => {
          null === uB && function(BB, jB) {
            (0, Dz.reportPageJoinFailure)(BB, MI, jB)
          }(BB, {
            sinceJoinStartMs: jB,
            game: IB
          })
        },
        rejoin: () => () => {},
        invalidateTrafficCode: () => BB.userContext.invalidateTrafficCode(),
        signal: jB
      });
      switch (UB.kind) {
        case "joined":
          if (NB) {
            setTimeout((() => {
              SB.ready()
            }), 0);
            const {
              game: BB
            } = UB;
            (0, pB.q)((() => {
              BB.endJoinAd() && ((0, JB.m)(), SB.adEnded())
            }))
          }
          return Va || (Va = !0, (0, EB.e)()), Ya ? (Za(dB.j.CONNECT_TO_GAME_SERVER), Za(dB.j.SHADER_PACK), function() {
            var BB, jB;
            return null !== (BB = null === (jB = RI) || void 0 === jB ? void 0 : jB.runsInJoinedGame()) && void 0 !== BB && BB
          }() && (0, MB.d)(BB.userContext, IB).catch((BB => {
            console.error("Failed to report the shader pack session", BB)
          })), function() {
            const BB = function() {
              var BB, jB;
              return null !== (BB = null === (jB = RI) || void 0 === jB ? void 0 : jB.couldntRunInJoinedGame()) && void 0 !== BB ? BB : null
            }();
            null !== BB && (0, MB.c)(BB)
          }(), nB.d.value(void 0)) : Ka("The server ended the game as it joined");
        case "failed":
          if (!UB.reloading) {
            if (null !== uB) return uB;
            if ((UB.error instanceof eB.j || UB.error instanceof eB.d) && UB.error.code === QB.c.serverUpdating.code) {
              if (jB.aborted) return Ka("Left the game while it loaded");
              const {
                gameNameWithVariation: BB,
                lobbyName: zB
              } = (0, rB.d)();
              return Pa(BB, zB), Ka("The server is updating")
            }
            return UB.error instanceof RB.b ? nB.d.errorWithCode(UB.error.messageKey, dB.j.SHADER_PACK, {
              severity: "medium"
            }) : nB.d.errorWithCode(function(BB) {
              if (BB instanceof eB.u || BB instanceof oB.h) return BB.message;
              if (la(BB)) return (0, WB.p)(BB.code, BB.serverText);
              return WB.l
            }(UB.error), dB.j.CONNECT_TO_GAME_SERVER, {
              error: wa(UB.error) ? UB.error : void 0,
              severity: xa(UB.error),
              gameServerUnreachable: (0, lB.c)(UB.error),
              joinFailure: (0, lB.h)(UB.error),
              rematch: (0, qB.e)(UB.error),
              gameRefused: (0, fB.c)(UB.error)
            })
          }
          return Ka("Reloading into the new build");
        case "stopped":
          return Ka("The game client stopped, and shows why");
        case "xz":
          return Ka("Left the game while it loaded")
      }
    }

    function la(BB) {
      return BB instanceof eB.j || BB instanceof eB.d && "attach" !== BB.stage
    }

    function wa(BB) {
      return !(BB instanceof eB.u) && !la(BB) && void 0 === (0, lB.c)(BB)
    }

    function xa(BB) {
      return la(BB) ? BB instanceof eB.d && (0, WB.m)(BB.code).requiresRefresh ? "medium" : "low" : wa(BB) || BB instanceof eB.u ? "medium" : "low"
    }

    function Ka(BB) {
      return nB.d.errorWithCode(BB, dB.j.CONNECT_TO_GAME_SERVER, {
        severity: "low",
        xz: !0
      })
    }
    class Ca {
      leave(BB) {
        if ((0, HB.c)()) {
          var jB, zB;
          if ((0, IB.d)()) return;
          (0, sB.b)(!0 === (null === (jB = (0, HB.k)()) || void 0 === jB || null === (zB = jB.currentViewer) || void 0 === zB ? void 0 : zB.unsavedChanges), BB)
        } else this.leaveLive()
      }
      leaveLive() {
        var BB;
        fa && (null === (BB = TU()) || void 0 === BB || BB.endGamePack());
        if (!Ya) return;
        Ya = !1, (0, iB.f)();
        try {
          var jB;
          null === (jB = (0, FB.q)()) || void 0 === jB || jB.clearWasmCameraScreen()
        } catch (QB) {
          console.error("[bloxd-wasm-client] the camera screen didn't clear", QB)
        }
        const {
          gameNameWithVariation: zB
        } = (0, rB.d)();
        try {
          Ku()
        } finally {
          (0, rB.q)({
            websocketUrl: null
          }), uB.n.Ly("leaveGame", {
            gameNameWithVariation: zB
          }), (0, aB.G)()
        }
      }
      isReplay() {
        return (0, HB.c)()
      }
    }
  },
  41010: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => nB,
      c: () => QB,
      g: () => NB,
      j: () => IB
    });
    const QB = 12e4,
      nB = 3e4,
      dB = {
        hidden: () => "undefined" !== typeof document && document.hidden,
        listen: BB => "undefined" === typeof document ? () => {} : (document.addEventListener("visibilitychange", BB), () => {
          document.removeEventListener("visibilitychange", BB)
        })
      };

    function IB(BB) {
      return `it sent no start within ${Math.round(BB)} ms`
    }
    class NB {
      constructor(BB, jB) {
        let zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => performance.now(),
          QB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : dB;
        this.timeoutMs = BB, this.onTimeout = jB, this.now = zB, this.visibility = QB, this.timer = null, this.counted = 0, this.step = null, this.unlisten = void 0, this.unlisten = QB.listen((() => {
          this.onVisibility()
        })), QB.hidden() || this.next()
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
        const jB = Math.min(BB, 5e3);
        this.step = {
          at: this.now(),
          ms: jB
        }, this.arm(jB, (() => {
          this.counted += this.credit(), this.step = null, this.next()
        }))
      }
      arm(BB, jB) {
        this.timer = setTimeout((() => {
          this.timer = null, jB()
        }), BB)
      }
    }
  },
  39722: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => NB
    });
    var QB = zB(376),
      nB = zB(1067);
    const dB = new Set(["bingo", "buildAFactory2", "classic", "testGym"]),
      IB = new Set(["creativeFlat", "skyGrid"]);

    function NB(BB) {
      const jB = (0, QB.Sb)(BB);
      return "classic" !== jB ? dB.has(jB) : !(0, nB.n)(BB) && !IB.has((0, QB.Mb)(BB))
    }
  },
  37835: (BB, jB, zB) => {
    function QB(BB) {
      return "string" !== typeof BB || 2 !== BB.length && ":" !== BB[2] ? null : BB[0] + BB[1]
    }
    zB.d(jB, {
      e: () => yB,
      f: () => SB,
      i: () => tB,
      k: () => MB,
      l: () => NB,
      o: () => IB,
      p: () => dB,
      t: () => uB,
      v: () => kB,
      z: () => mB
    });
    const nB = ["op:ytInitialPlayerResponse.adPlacements", "op:ytInitialPlayerResponse.playerAds", "op:ytInitialPlayerResponse.adSlots", "op:playerResponse.adPlacements", "op:playerResponse.playerAds", "op:playerResponse.adSlots"];

    function dB(BB) {
      if (function(BB) {
          for (let jB = 0; jB < nB.length; jB++)
            if (BB === nB[jB]) return !0;
          return !1
        }(BB)) return !1;
      const jB = QB(BB);
      return "op" === jB || "ep" === jB || "wi" === jB || "pp" === jB || "fp:call" === BB || "fp:t" === BB
    }

    function IB(BB) {
      return "fp" === QB(BB) && !dB(BB)
    }

    function NB(BB) {
      if ("string" !== typeof BB) return !1;
      return "o" === BB[0] && "p" === BB[1] && (2 === BB.length || ":" === BB[2]) || "fp:call" === BB || "2" === BB || "t" === BB || "a" === BB
    }

    function uB(BB, jB) {
      return `~${function(BB){return BB.length<2?BB:":"===BB[1]?BB[0]:BB[0]+BB[1]}(jB)}~${BB}`
    }
    const UB = 200;

    function aB(BB) {
      let jB = BB.length - 1;
      for (let zB = 0; zB < 2; zB++) {
        const zB = jB;
        for (; jB >= 0 && BB[jB] >= "0" && BB[jB] <= "9";) jB--;
        if (jB < 0 || jB === zB || ":" !== BB[jB]) return -1;
        jB--
      }
      return jB + 1
    }

    function pB(BB) {
      return "unknown" === BB || aB(BB) >= 0
    }

    function rB(BB, jB) {
      return BB[jB] >= "\ud800" && BB[jB] <= "\udbff" && jB + 1 < BB.length && BB[jB + 1] >= "\udc00" && BB[jB + 1] <= "\udfff" ? 2 : 1
    }

    function sB(BB, jB, zB) {
      return 2 === zB ? 4 : BB[jB] <= "\x7f" ? 1 : BB[jB] <= "\u07ff" ? 2 : 3
    }

    function JB(BB, jB, zB) {
      let QB = 0;
      for (; QB < jB;) {
        const jB = rB(BB, QB),
          nB = sB(BB, QB, jB);
        if (nB > zB) break;
        zB -= nB, QB += jB
      }
      return QB
    }

    function mB(BB) {
      let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1 / 0;
      if ("string" !== typeof BB || BB.length > UB || !pB(BB)) return "t";
      let zB = 2;
      for (let NB = 0; NB < BB.length;) {
        const jB = rB(BB, NB);
        zB += sB(BB, NB, jB), NB += jB
      }
      if (zB <= jB) return `t ${BB}`;
      const QB = aB(BB),
        nB = jB - 2 - (BB.length - QB);
      if (nB < 0) return "t";
      const dB = JB(BB, QB, nB);
      let IB = "t ";
      for (let NB = 0; NB < dB; NB++) IB += BB[NB];
      for (let NB = QB; NB < BB.length; NB++) IB += BB[NB];
      return IB
    }
    const yB = 62;

    function kB(BB) {
      let jB = "so:";
      const zB = JB(BB, BB.length, yB - jB.length);
      for (let QB = 0; QB < zB; QB++) jB += BB[QB];
      return jB
    }
    const GB = "BABYLON ",
      LB = "DECODE ",
      gB = "BABYLON@ ";

    function tB(BB) {
      return kB(GB + BB)
    }

    function SB(BB, jB) {
      return kB(gB + BB + " " + jB)
    }

    function MB(BB) {
      return kB(LB + BB)
    }
  },
  40916: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => QB
    });
    const QB = {
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
  38063: BB => {
    BB.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAKUlEQVQYGWM8CwQMeAATHjmw1JBQwAh06v+LFy8yvH//noGXl/ccuq8A/vQKd00yOdIAAAAASUVORK5CYII="
  },
  38049: BB => {
    BB.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAALUlEQVQYGWM8CwQMeAATHjmw1JBQwAh06v8DBw4wCAoKMnBzczN8/PjxHLLPAORwCnfkvOdNAAAAAElFTkSuQmCC"
  },
  38072: BB => {
    BB.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAKUlEQVQYGWM8CwQMeAATHjmw1JBQwAh06v8DBw4wCAoKMvz58+ccuq8A8vQKd2AxC9MAAAAASUVORK5CYII="
  },
  38044: BB => {
    BB.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAANUlEQVQYGWM8CwQMeAATHjmw1JBQAHLp/wMHDvy/ePHi/4CAgP937tz5Ly6u+5/P3uw/KAgAgjwWhHm22JoAAAAASUVORK5CYII="
  },
  38056: BB => {
    BB.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAKUlEQVQYGWM8CwQMeAATHjmw1JBQwAh06v8DBw4wCAoKMvz58+ccuq8A8vQKd2AxC9MAAAAASUVORK5CYII="
  },
  38836: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => dB
    });
    var QB = zB(2967);
    const nB = ["none", "idle", "now"];

    function dB() {
      const BB = () => (0, QB.C)();
      return {
        memoryBytes: () => (0, QB.t)().buffer.byteLength,
        reserveUpFront: jB => BB().Up(jB),
        reserveAhead: jB => BB().Np(jB),
        setCeiling: jB => {
          BB().ap(jB)
        },
        lowWater: () => nB[BB().Ip()] ?? "none",
        stats: () => function(BB) {
          const jB = new Uint32Array((0, QB.t)().buffer, BB, 17),
            zB = BB => jB[BB] ?? 0,
            nB = BB => ({
              upFront: zB(BB),
              ahead: zB(BB + 1),
              onDemandInFrame: zB(BB + 2),
              onDemand: zB(BB + 3)
            });
          return {
            memoryBytes: zB(0),
            initialBytes: zB(1),
            liveBytes: zB(2),
            peakLiveBytes: zB(3),
            headroomBytes: zB(4),
            unusedBytes: zB(5),
            ceilingBytes: zB(6),
            reservesRefused: zB(7),
            grows: nB(8),
            grownBytes: nB(12),
            allocationsRefused: zB(16)
          }
        }(BB().rp()),
        takeBallast: () => BB().sp(),
        takePressure: () => BB().Jp()
      }
    }
  },
  5120: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => NB,
      e: () => IB,
      f: () => QB,
      j: () => mB,
      m: () => pB,
      n: () => nB,
      o: () => dB,
      s: () => UB,
      w: () => aB,
      z: () => rB
    });
    const QB = 5;

    function nB(BB) {
      return BB === QB
    }

    function dB(BB) {
      return [...BB.features]
    }
    const IB = 262144,
      NB = 256,
      uB = 256;

    function UB(BB) {
      if ("object" !== typeof BB || null === BB || Array.isArray(BB)) return "The pack has no files.";
      const jB = [];
      for (const [zB, QB] of Object.entries(BB)) {
        if ("string" !== typeof QB) return `${zB} isn't text.`;
        jB.push({
          path: zB,
          source: QB
        })
      }
      return jB.sort(((BB, jB) => pB(BB.path, jB.path))),
        function(BB) {
          if (0 === BB.length) return "The pack has no .wgsl files.";
          if (BB.length > NB) return `The pack has more than ${NB} .wgsl files.`;
          const jB = new Set;
          for (const {
              path: zB
            }
            of BB) {
            const BB = sB(zB);
            if (null !== BB) return BB;
            if (jB.has(zB)) return `The pack has two files at ${zB}.`;
            jB.add(zB)
          }
          return rB(BB) > IB ? `The pack's .wgsl files are over ${IB/1024} KB in total.` : null
        }(jB) ?? jB
    }

    function aB(BB) {
      const jB = {};
      for (const zB of BB) jB[zB.path] = zB.source;
      return jB
    }

    function pB(BB, jB) {
      return BB < jB ? -1 : BB > jB ? 1 : 0
    }

    function rB(BB) {
      const jB = new TextEncoder;
      let zB = 0;
      for (const {
          source: QB
        }
        of BB) zB += jB.encode(QB).byteLength;
      return zB
    }

    function sB(BB) {
      if (!BB.toLowerCase().endsWith(".wgsl")) return `${BB} isn't a .wgsl file.`;
      if (BB.length > uB) return `A file path is over ${uB} characters.`;
      if (BB.includes("\\") || /[\u0000-\u001f]/.test(BB)) return `${BB} isn't a valid file path.`;
      return BB.split("/").some((BB => "" === BB || "." === BB || ".." === BB)) ? `${BB} isn't a valid file path.` : null
    }
    const JB = /^(.*)\[rot\[([1-4])$/;

    function mB(BB, jB) {
      let zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
      const QB = new Map;
      jB.forEach(((BB, jB) => {
        let {
          numAnimStates: zB,
          animStartIdx: nB
        } = BB;
        for (let dB = 1; dB < zB; dB++) QB.set(nB + dB - 1, jB)
      }));
      const nB = Object.entries(BB),
        dB = new Map;
      for (const [mB, yB] of nB) {
        const BB = JB.exec(mB);
        "1" === BB?.[2] && dB.set(BB[1], yB + 1)
      }
      const IB = BB => {
          const jB = JB.exec(BB);
          return jB && dB.has(jB[1]) ? {
            root: jB[1],
            rotation: Number(jB[2]) - 1
          } : null
        },
        NB = new Set(nB.map((BB => {
          let [jB] = BB;
          return IB(jB)?.root ?? jB
        }))),
        uB = (BB, zB) => {
          const QB = BB.replace(/_?0$/, "");
          return (jB[zB]?.numAnimStates ?? 0) > 1 && !NB.has(QB) ? QB : BB
        },
        UB = new Map;
      for (const [JB, mB] of nB) UB.set(mB, uB(IB(JB)?.root ?? JB, mB));
      const aB = nB.reduce(((BB, jB) => {
          let [, zB] = jB;
          return Math.max(BB, zB + 1)
        }), 0),
        pB = Array.from({
          length: aB
        }, ((BB, jB) => ({
          id: jB + 1,
          rotation: 0
        }))),
        rB = new Map,
        sB = new Map;
      for (const [JB, mB] of nB) {
        const BB = IB(JB),
          jB = QB.get(mB);
        if (void 0 !== jB) {
          const zB = UB.get(jB);
          sB.set(JB, {
            name: JB,
            texture: zB,
            kind: "frame"
          }), BB && !sB.has(BB.root) && sB.set(BB.root, {
            name: BB.root,
            texture: zB,
            kind: "frame"
          });
          continue
        }
        const zB = UB.get(mB),
          nB = BB?.root ?? JB;
        if (zB !== nB && sB.set(nB, {
            name: nB,
            texture: zB,
            kind: "frame"
          }), BB) {
          const jB = dB.get(BB.root);
          pB[mB] = {
            id: jB,
            rotation: BB.rotation
          }, rB.set(zB, jB), sB.set(JB, {
            name: JB,
            texture: zB,
            kind: "rotation"
          })
        } else rB.set(zB, mB + 1)
      }
      for (const JB of rB.keys()) sB.delete(JB);
      for (const [JB, mB] of zB) {
        const BB = rB.get(mB);
        void 0 === BB || rB.has(JB) || (rB.set(JB, BB), sB.delete(JB))
      }
      return {
        named: [...rB].sort(((BB, jB) => {
          let [zB] = BB, [QB] = jB;
          return zB < QB ? -1 : zB > QB ? 1 : 0
        })).map((BB => {
          let [jB, zB] = BB;
          return {
            name: jB,
            id: zB
          }
        })),
        aliases: [...sB.values()],
        layers: pB
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);