export const id = 75;
export const ids = [75, 130, 131, 152];
export const modules = {
  40416: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => YB,
      e: () => DB
    });
    const YB = "The world isn't loaded, so no blocks can be seen.",
      DB = "The world isn't loaded, so nothing in it can be seen."
  },
  5159: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => MB
    });
    var YB = GB(16),
      DB = GB(25),
      QB = GB(1293),
      oB = GB(3136);
    const jB = 3e4,
      yB = 1e3;

    function JB() {
      return "visible" === document.visibilityState && "inGame" === YB.c.get("gameState") && (0, QB.q)()
    }

    function MB(BB, OB) {
      (0, oB.u)() || function(BB, OB, GB) {
        let YB = 0;
        const DB = setInterval((() => {
          OB() && (YB += yB, YB >= BB && (clearInterval(DB), GB()))
        }), yB)
      }(jB, JB, (() => {
        OB().then((() => {
          BB(`saved for the player after ${jB/1e3} s of play`), (0, oB.J)(), DB.o.tM("chat", {
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
  34648: (BB, OB, GB) => {
    function YB(BB, OB) {
      return 0 === BB.length ? 0 : BB[Math.min(BB.length - 1, Math.floor(OB * BB.length))]
    }

    function DB(BB) {
      return BB.toFixed(1)
    }
    GB.d(OB, {
      d: () => DB,
      f: () => YB
    })
  },
  38626: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => JB,
      d: () => MB,
      f: () => AB,
      g: () => WB,
      h: () => RB
    });
    var YB = GB(5159),
      DB = GB(34648),
      QB = GB(3136);
    const oB = 20,
      jB = ["totalMs", "slotMs", "workerMs", "applyMs", "ahead", "inFlight", "CP", "jobMs"];

    function yB(BB) {
      return [...BB].sort(((BB, OB) => BB - OB))
    }
    const JB = [];

    function MB(BB, OB, GB) {
      return `${BB},${OB},${GB}`
    }
    class PB {
      constructor() {
        this.pending = new Map, this.jobs = new Map, this.edits = [], this.nextEdit = 0, this.reported = 0, this.windowStart = performance.now(), this.frames = 0, this.lastFrameAt = 0, this.maxFrameMs = 0, this.jobsSent = 0, this.maxAhead = 0, this.maxCapacity = 0, this.roundTrips = [], this.windowEdits = [], this.outliers = 0, this.gaveUp = 0
      }
      edit(BB, OB) {
        var GB;
        const YB = null !== (GB = this.pending.get(BB)) && void 0 !== GB ? GB : [];
        YB.push({
          editAt: OB,
          meshJobId: 0
        }), this.pending.set(BB, YB)
      }
      frame(BB) {
        this.lastFrameAt > 0 && (this.maxFrameMs = Math.max(this.maxFrameMs, BB - this.lastFrameAt)), this.lastFrameAt = BB, this.frames++, BB - this.windowStart >= 1e3 && this.summarise(BB)
      }
      sent(BB, OB, GB, YB, DB, QB, oB) {
        this.jobs.set(OB, {
          sentAt: oB,
          receivedAt: 0,
          ahead: GB,
          inFlight: YB,
          CP: DB,
          jobMs: 0
        }), this.jobsSent++, this.maxAhead = Math.max(this.maxAhead, GB), this.maxCapacity = Math.max(this.maxCapacity, DB);
        for (const yB of null !== (jB = this.pending.get(BB)) && void 0 !== jB ? jB : []) {
          var jB;
          QB.includes(yB.meshJobId) || (yB.meshJobId = OB)
        }
      }
      received(BB, OB, GB) {
        const YB = this.jobs.get(BB);
        void 0 !== YB && (this.roundTrips.push(GB - YB.sentAt), YB.receivedAt = GB, YB.jobMs = OB)
      }
      failed(BB) {
        this.jobs.delete(BB)
      }
      reassign(BB, OB, GB) {
        this.jobs.delete(OB);
        for (const DB of null !== (YB = this.pending.get(BB)) && void 0 !== YB ? YB : []) {
          var YB;
          DB.meshJobId === OB && (DB.meshJobId = GB)
        }
      }
      applied(BB, OB, GB) {
        const YB = this.jobs.get(OB);
        this.jobs.delete(OB), void 0 !== YB && this.show(BB, YB, GB, (BB => BB.meshJobId === OB))
      }
      emptied(BB, OB) {
        const GB = {
          sentAt: OB,
          receivedAt: OB,
          ahead: 0,
          inFlight: 0,
          CP: 0,
          jobMs: 0
        };
        this.show(BB, GB, OB, (() => !0))
      }
      show(BB, OB, GB, YB) {
        const DB = this.pending.get(BB);
        if (!DB) return;
        const QB = DB.filter((DB => !YB(DB) || (this.record(BB, DB.editAt, OB, GB), !1)));
        QB.length > 0 ? this.pending.set(BB, QB) : this.pending.delete(BB)
      }
      jP(BB) {
        this.reported += BB, this === lB && this.reported >= oB && null !== pB && (pB(), pB = null)
      }
      record(BB, OB, GB, YB) {
        const DB = {
          totalMs: YB - OB,
          slotMs: GB.sentAt - OB,
          workerMs: GB.receivedAt - GB.sentAt,
          applyMs: YB - GB.receivedAt,
          ahead: GB.ahead,
          inFlight: GB.inFlight,
          CP: GB.CP,
          jobMs: GB.jobMs
        };
        if (this.edits[this.nextEdit] = DB, this.nextEdit = (this.nextEdit + 1) % 500, this.windowEdits.push(DB.totalMs), this.jP(1), DB.totalMs < 100 || ++this.outliers > 5) return;
        const oB = BB => Math.round(BB);
        (0, QB.m)("remesh", `slow edit (${BB}) shown in ${oB(DB.totalMs)} ms: slot ${oB(DB.slotMs)}, worker ${oB(DB.workerMs)} (${DB.ahead} ahead, ${DB.inFlight}/${DB.CP} in flight; job ${oB(DB.jobMs)}), apply ${oB(DB.applyMs)}`)
      }
      summarise(BB) {
        const OB = (BB - this.windowStart) / 1e3;
        for (const [GB, YB] of this.pending) {
          const OB = YB.filter((OB => BB - OB.editAt <= 1e4));
          this.gaveUp += YB.length - OB.length, this.jP(YB.length - OB.length), OB.length > 0 ? this.pending.set(GB, OB) : this.pending.delete(GB)
        }
        for (const [GB, YB] of this.jobs) BB - YB.sentAt > (YB.receivedAt > 0 ? 1e4 : 6e4) && this.jobs.delete(GB);
        if (this.jobsSent > 0 || this.roundTrips.length > 0 || this.windowEdits.length > 0 || this.gaveUp > 0) {
          const BB = yB(this.roundTrips),
            GB = yB(this.windowEdits),
            YB = Math.max(0, this.outliers - 5);
          (0, QB.m)("remesh", `${Math.round(this.frames/OB)} fps (longest ${Math.round(this.maxFrameMs)} ms) | ${this.jobsSent} jobs sent, up to ${this.maxAhead} ahead on a worker, capacity ${this.maxCapacity} | round trip p50 ${Math.round((0,DB.f)(BB,.5))} max ${Math.round((0,DB.f)(BB,1))} ms | ${GB.length} edits shown, p50 ${Math.round((0,DB.f)(GB,.5))} max ${Math.round((0,DB.f)(GB,1))} ms${YB>0?`, ${YB} more slow`:""}${this.gaveUp>0?`, ${this.gaveUp} never shown`:""}`)
        }
        this.windowStart = BB, this.frames = 0, this.maxFrameMs = 0, this.jobsSent = 0, this.maxAhead = 0, this.maxCapacity = 0, this.roundTrips = [], this.windowEdits = [], this.outliers = 0, this.gaveUp = 0
      }
      stats() {
        const BB = jB.map((BB => {
          const OB = yB(this.edits.map((OB => OB[BB])));
          return `${BB}: p50 ${Math.round((0,DB.f)(OB,.5))} p90 ${Math.round((0,DB.f)(OB,.9))} max ${Math.round((0,DB.f)(OB,1))}`
        }));
        return [`${this.edits.length} edits`, ...BB].join("\n")
      }
      dump() {
        const BB = this.edits.map((BB => jB.map((OB => Math.round(10 * BB[OB]) / 10)).join(",")));
        return [this.stats(), jB.join(","), ...BB].join("\n")
      }
    }
    class zB {
      constructor(BB, OB) {
        this.log = BB, this.kz = OB
      }
      edit(BB, OB, GB) {
        const [YB, DB, QB] = this.kz.mP.qDB(BB, OB, GB), oB = this.kz.mP.Vq.Sq(YB, DB, QB);
        oB && oB.Wq && this.log.edit(MB(YB, DB, QB), performance.now())
      }
      sent(BB, OB, GB, YB, DB) {
        this.log.sent(MB(BB.i, BB.j, BB.k), OB, GB, YB, DB, JB, performance.now())
      }
      received(BB) {
        this.log.received(BB.meshJobId, BB.jobMs, performance.now())
      }
      failed(BB) {
        this.log.failed(BB)
      }
      applied(BB, OB) {
        this.log.applied(MB(BB.i, BB.j, BB.k), OB, performance.now())
      }
    }
    let lB = null,
      pB = null,
      qB = !1,
      ZB = null;

    function NB() {
      return new Promise((BB => {
        null !== lB && lB.reported >= oB ? BB() : pB = BB
      }))
    }

    function RB() {
      const BB = new PB;
      return lB = BB, (0, QB.l)("remesh", (() => BB.dump())), (0, QB.e)("remeshStats", (() => {
        console.log(BB.stats())
      })), qB || (qB = !0, (0, YB.b)((BB => {
        (0, QB.m)("remesh", BB)
      }), NB)), BB
    }

    function WB(BB) {
      const OB = RB();
      ZB = new zB(OB, BB), BB.pW.meshProbe = ZB, BB.on("beforeRender", (() => {
        OB.frame(performance.now())
      }))
    }

    function AB(BB, OB, GB) {
      var YB;
      null === (YB = ZB) || void 0 === YB || YB.edit(BB, OB, GB)
    }
  },
  34675: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => YB
    });
    const YB = new Set(["chunkBorders"])
  },
  37495: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => DB,
      f: () => YB
    });
    const YB = 3,
      DB = {
        recording: !1,
        clipping: !1,
        hasClipBuffer: !1,
        seconds: 0
      }
  },
  34832: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => oB,
      h: () => DB,
      i: () => MB
    });
    var YB = GB(1611);

    function DB(BB) {
      var OB;
      return {
        ...oB.store,
        yaw: oB.store.yaw + (null !== (OB = YB.d[BB].previewYaw) && void 0 !== OB ? OB : 0)
      }
    }
    const QB = {
        yaw: .61 * Math.PI,
        pitch: Math.PI / 2.05,
        radius: 30,
        target: [0, 0, 0]
      },
      oB = {
        player: QB,
        store: {
          ...QB,
          radius: 33,
          target: [0, 3.9, 0]
        }
      };

    function jB(BB, OB) {
      BB instanceof Promise ? BB.then(OB).catch((BB => {
        console.error("Couldn't open the preview", BB)
      })) : OB(BB)
    }
    class yB {
      constructor(BB) {
        this.opened = null, this.view = null, this.size = null, this.closed = !1, jB(BB, (BB => {
          this.closed ? BB.close() : (this.opened = BB, null !== this.size && BB.resize(this.size.width, this.size.height), null !== this.view && BB.show(this.view))
        }))
      }
      show(BB) {
        var OB;
        this.view = BB, null === (OB = this.opened) || void 0 === OB || OB.show(BB)
      }
      resize(BB, OB) {
        var GB;
        this.size = {
          width: BB,
          height: OB
        }, null === (GB = this.opened) || void 0 === GB || GB.resize(BB, OB)
      }
      close() {
        var BB;
        this.closed = !0, null === (BB = this.opened) || void 0 === BB || BB.close(), this.opened = null
      }
    }
    class JB {
      constructor(BB) {
        this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(BB).then((BB => BB.ready)), jB(BB, (BB => {
          this.closed ? BB.close() : (this.opened = BB, null !== this.size && BB.resize(this.size.width, this.size.height))
        }))
      }
      get dev() {
        return this.opened.dev
      }
      isReady() {
        var BB, OB;
        return null !== (BB = null === (OB = this.opened) || void 0 === OB ? void 0 : OB.isReady()) && void 0 !== BB && BB
      }
      setCosmetic(BB, OB) {
        var GB;
        null === (GB = this.opened) || void 0 === GB || GB.setCosmetic(BB, OB)
      }
      playEmote(BB) {
        var OB;
        null === (OB = this.opened) || void 0 === OB || OB.playEmote(BB)
      }
      setOrbit(BB) {
        var OB;
        null === (OB = this.opened) || void 0 === OB || OB.setOrbit(BB)
      }
      resetCamera() {
        var BB;
        null === (BB = this.opened) || void 0 === BB || BB.resetCamera()
      }
      async untilDrawn(BB) {
        var OB;
        await this.ready, await (null === (OB = this.opened) || void 0 === OB ? void 0 : OB.untilDrawn(BB))
      }
      resize(BB, OB) {
        var GB;
        this.size = {
          width: BB,
          height: OB
        }, null === (GB = this.opened) || void 0 === GB || GB.resize(BB, OB)
      }
      close() {
        var BB;
        this.closed = !0, null === (BB = this.opened) || void 0 === BB || BB.close(), this.opened = null
      }
    }
    const MB = new class {
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
        return new yB(this.current().openMob(BB))
      }
      openPet(BB) {
        return new yB(this.current().openPet(BB))
      }
      openMobLineup(BB) {
        return new yB(this.current().openMobLineup(BB))
      }
      openCharacter(BB, OB) {
        return new JB(this.current().openCharacter(BB, OB))
      }
    }
  },
  5538: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => YB.k,
      c: () => DB,
      g: () => YB.r
    });
    var YB = GB(5546);
    const DB = [!1, !0].flatMap((BB => ["terrain", "liquid", "model"].map((OB => ({
      strict: BB,
      program: OB
    })))))
  },
  39925: (BB, OB, GB) => {
    GB.r(OB), GB.d(OB, {
      ShaderPackPage: () => yB,
      harnessShaderPackMode: () => zB,
      setHarnessUrlShaderPack: () => PB,
      shaderPackPage: () => MB
    });
    var YB = GB(92),
      DB = GB(31),
      QB = (GB(3890), GB(5538), GB(3885)),
      oB = GB(7198);
    GB(7174);
    const jB = {
      status: "none"
    };
    class yB {
      constructor() {
        this.stored = null, this.compiling = null, this.pagePack = null, this.resolved = null
      }
      preload() {
        if (null === this.stored) {
          if ((0, QB.j)(YB.featureFlags.settings.canUseShaderPacks)) return this.stored = Promise.resolve(null), JB().then((BB => {
            BB && DB.g.removeItem(QB.d)
          })), this.stored;
          this.prefetchHint() && this.compiler().catch((() => {})), this.stored = this.readStored()
        }
        return this.stored
      }
      prefetchHint() {
        return (0, QB.f)(YB.featureFlags.settings.canUseShaderPacks)
      }
      async loadActive() {
        const BB = await this.load();
        return "active" === BB.status ? BB.pack : null
      }
      load() {
        return this.pagePack ??= this.read().catch((BB => (console.error("Failed to load the shader pack", BB), jB))).then((BB => (this.resolved ??= BB, BB))), this.pagePack
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
        return this.compiling ??= Promise.all([GB.e(89), GB.e(149), GB.e(156)]).then((() => GB(44873))).then((BB => (BB.prefetchCompiler(), BB))), this.compiling
      }
      async readStored() {
        const BB = await JB();
        return BB && this.compiler().then((BB => BB.reconcileHint())).catch((BB => {
          console.error("Failed to correct the shader pack hint", BB)
        })), BB
      }
      async read() {
        const BB = await this.preload();
        return BB ? (await this.compiler()).compilePagePack(BB) : jB
      }
    }
    async function JB() {
      if (!(0, QB.n)(YB.featureFlags.settings.canUseShaderPacks)) return null;
      try {
        const BB = await (0, oB.e)(!0);
        return BB || DB.g.setItem(QB.d, !1), BB
      } catch (BB) {
        return console.error("Failed to read the stored shader pack", BB), DB.g.removeItem(QB.d), null
      }
    }
    const MB = new yB;

    function PB(BB, OB) {}

    function zB() {
      return null
    }
  },
  39972: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => PB,
      i: () => zB
    });
    var YB = GB(162),
      DB = GB(186),
      QB = GB(1529),
      oB = GB(1856),
      jB = GB(1540),
      yB = GB(37139),
      JB = GB(677),
      MB = GB(39925);

    function PB(BB) {
      (0, oB.reportClientError)("matchmake_failed", BB, YB.l[YB.l.SHADER_PACK])
    }
    async function zB(BB, OB) {
      var GB;
      const YB = null === (GB = await MB.shaderPackPage.preload()) || void 0 === GB ? void 0 : GB.listing,
        oB = (0, yB.c)();
      YB && null !== oB && await jB.b.reportShaderPackSession(BB, {
        packId: YB.packId,
        sourceHash: YB.sourceHash,
        game: (0, QB.h)(OB, DB.y, "other"),
        playSessionId: oB,
        visitSessionId: (0, JB.getVisitSessionId)()
      })
    }
  },
  7198: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => DB,
      e: () => QB
    });
    var YB = GB(31);
    const DB = "shaderPack";
    async function QB() {
      var BB;
      let OB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (BB = await YB.d.getItem(DB, OB)) && void 0 !== BB ? BB : null
    }
  },
  7174: (BB, OB, GB) => {
    GB.r(OB), GB.d(OB, {
      loadShaderPackTextures: () => oB,
      shaderPackTextures: () => jB
    });
    var YB = GB(5546);
    let DB = null,
      QB = null;

    function oB() {
      return QB ??= Promise.all([GB.e(84), GB.e(206)]).then((() => GB(41493))).then((BB => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: OB,
          textureNameToIndex: GB,
          textureAnimationData: QB
        } = BB;
        return DB ??= (0, YB.o)(GB, QB, OB), DB
      })), QB
    }

    function jB() {
      if (null === DB) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return DB
    }
  },
  39748: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => jB
    });
    var YB = GB(25),
      DB = GB(1293),
      QB = GB(3351);
    const oB = "Reconnecting";
    class jB {
      constructor(BB) {
        this.hooks = BB, this.graceMs = 0, this.sessionBased = !1, this.controller = void 0, this.frozen = !1, this.stopped = !1, this.listening = !1, this.ended = !1, this.retryNow = () => {
          "visible" === document.visibilityState && this.controller.retryNow()
        }, this.onPageHide = BB => {
          BB.persisted || this.leave()
        }, this.controller = new QB.c((OB => BB.reconnect(OB)), {
          isSessionLive: () => !this.ended && BB.isLive(),
          onPhaseChanged: BB => {
            this.onPhaseChanged(BB)
          },
          onReconnected: OB => {
            BB.onReconnected(OB)
          },
          onGaveUp: OB => {
            !this.ended && BB.isLive() && BB.onGaveUp(this.sessionBased, OB)
          }
        })
      }
      onInitialInfo(BB, OB) {
        this.graceMs = BB, this.sessionBased = OB
      }
      canHoldSeat() {
        return this.graceMs > 0 && !this.ended
      }
      isResuming() {
        return "connected" !== this.controller.phase
      }
      onConnectionLost(BB) {
        this.ended || this.controller.onConnectionLost(BB, this.graceMs)
      }
      onResuming() {
        this.ended || this.controller.onResuming()
      }
      onResumed() {
        this.controller.stop()
      }
      leave() {
        const BB = this.isResuming() && !this.controller.awaitingResumeOnRoom,
          OB = this.controller.heldToken;
        this.end(), BB && "" !== OB && this.hooks.releaseSeat(OB)
      }
      end() {
        this.ended = !0, this.controller.stop()
      }
      onPhaseChanged(BB) {
        const OB = (0, QB.m)(BB);
        OB !== this.stopped && (this.stopped = OB, this.hooks.freeze(OB));
        const GB = "frozen" === BB || "resuming" === BB && this.frozen;
        GB && !this.frozen ? (0, DB.p)(oB, {
          overridesPause: !0
        }) : !GB && this.frozen && (0, DB.o)(oB), this.frozen = GB, this.setListening("connected" !== BB), YB.o.tM(QB.k, GB ? "frozen" : BB)
      }
      setListening(BB) {
        BB !== this.listening && (this.listening = BB, BB ? (window.addEventListener("online", this.retryNow), document.addEventListener("visibilitychange", this.retryNow), window.addEventListener("pagehide", this.onPageHide)) : (window.removeEventListener("online", this.retryNow), document.removeEventListener("visibilitychange", this.retryNow), window.removeEventListener("pagehide", this.onPageHide)))
      }
    }
  },
  39757: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => YB
    });
    class YB {
      constructor(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.onSilent = BB, this.now = OB, this.lastHeardAt = void 0, this.resumedAt = void 0, this.lastCheckAt = void 0, this.wasVisible = "visible" === document.visibilityState, this.interval = void 0, this.check = () => {
          const BB = this.now(),
            OB = BB - this.lastCheckAt <= 2e3;
          this.lastCheckAt = BB;
          const GB = "visible" === document.visibilityState;
          !GB || OB && this.wasVisible || (this.resumedAt = BB), this.wasVisible = GB, GB && BB - this.lastHeardAt > 12e3 && BB - this.resumedAt > 2e3 && this.onSilent()
        }, this.lastHeardAt = OB(), this.resumedAt = this.lastHeardAt, this.lastCheckAt = this.lastHeardAt, this.interval = setInterval(this.check, 1e3), document.addEventListener("visibilitychange", this.check), window.addEventListener("online", this.check)
      }
      heard() {
        this.lastHeardAt = this.now()
      }
      dispose() {
        clearInterval(this.interval), document.removeEventListener("visibilitychange", this.check), window.removeEventListener("online", this.check)
      }
    }
  },
  34737: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => QB
    });
    var YB = GB(1308);

    function DB() {
      var BB, OB;
      return null !== (BB = null === (OB = screen.orientation) || void 0 === OB ? void 0 : OB.type) && void 0 !== BB ? BB : innerWidth > innerHeight ? "landscape" : "portrait"
    }
    const QB = new class {
      constructor() {
        this.holding = !1, this.heldOrientation = "", this.releaseTimer = void 0, this.longHoldTimer = void 0, this.resizers = new Set, this.releaseWhenShown = () => {
          document.hidden || (document.removeEventListener("visibilitychange", this.releaseWhenShown), this.release())
        }
      }
      isHeld() {
        return this.holding && DB() !== this.heldOrientation && (this.holding = !1), this.holding
      }
      hold() {
        this.heldOrientation = DB(), this.holding = !0, clearTimeout(this.releaseTimer), document.removeEventListener("visibilitychange", this.releaseWhenShown), clearTimeout(this.longHoldTimer), this.longHoldTimer = setTimeout((() => {
          this.holding && (0, YB.kq)(new Error("Game view size held for 60 s"))
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
        let OB = !1;
        return () => {
          if (OB && this.isHeld()) return null;
          const GB = BB();
          return OB ||= null !== GB, GB
        }
      }
      onRelease(BB) {
        return this.resizers.add(BB), () => {
          this.resizers.delete(BB)
        }
      }
    }
  },
  39958: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => DB
    });
    let YB = !1;
    async function DB(BB, OB) {
      if (!YB) {
        YB = !0;
        try {
          const [{
            reloadBloxd: YB
          }, {
            NotificationProvider: DB
          }] = await Promise.all([Promise.resolve().then((() => GB(1822))), Promise.resolve().then((() => GB(1400)))]);
          if (!BB || !0 === await DB.showPromptPopup({
              title: "Unsaved changes",
              subtitle: "Exit and lose your unsaved changes?",
              confirmText: "Exit",
              destructive: !0,
              cancelText: "Cancel",
              unlockPointerKey: "replayExitUnsavedChanges"
            }).getResult()) return void YB(OB)
        } catch (DB) {
          console.error("Leaving the replay failed", DB)
        }
        YB = !1
      }
    }
  },
  39763: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => JB,
      f: () => MB
    });
    var YB = GB(1784),
      DB = GB(192),
      QB = GB(1748),
      oB = GB(1880),
      jB = GB(1186),
      yB = GB(1121);
    async function JB(BB, OB) {
      return function(BB) {
        return "object" === typeof BB && null !== BB && BB.code === DB.c.VpnIp.code
      }(OB) && function(BB) {
        return QB.e.supports("appCheck") && BB.isLoggedIn() && !BB.hasTriedAppAttestation()
      }(BB) && await async function(BB) {
        try {
          const {
            token: OB
          } = await (0, oB.e)(), {
            "3PSIDMCPP": GB
          } = await (0, yB.postJsonWithMetricsCookiesAndJsonResponse)(`${jB.clientSideServerUrls.indexUrl}/index/app-attestation`, {
            appCheckToken: OB
          }, {
            retries: 0
          }, BB.getMetricsCookies());
          return BB.setAppAttestedAuthJwt(GB), !0
        } catch (OB) {
          return OB instanceof YB.b && "failed" === OB.code ? (console.warn("The app couldn't get an App Check token:", OB), BB.markAppAttestationTried()) : console.error("Failed to attest the app:", OB), !1
        }
      }(BB)
    }
    async function MB(BB, OB) {
      try {
        return await OB()
      } catch (GB) {
        if (!await JB(BB, GB)) throw GB
      }
      return OB()
    }
  },
  41990: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => jB,
      h: () => yB
    });
    var YB = GB(1834);
    const DB = 33177600,
      QB = 3e4;
    let oB = !1;

    function jB(BB, OB, GB) {
      let YB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const {
        scale: jB = 1,
        type: yB = "image/png",
        quality: JB
      } = YB;
      return BB.WP() ? oB ? Promise.reject(new Error("A screenshot is already being taken")) : (oB = !0, new Promise(((YB, MB) => {
        let PB, zB = 2,
          lB = null;
        const pB = () => {
          var OB;
          oB = !1, null === (OB = lB) || void 0 === OB || OB(), clearTimeout(PB);
          try {
            BB.restoreSize()
          } catch (GB) {
            console.error("A screenshot couldn't size the canvas back", GB)
          }
        };
        PB = setTimeout((() => {
          pB(), MB(new Error("No frame was drawn to capture"))
        }), QB);
        try {
          const YB = function(BB, OB, GB) {
            const YB = Math.max(1, BB),
              QB = Math.max(1, OB),
              oB = Math.min(1, GB / Math.max(YB, QB), Math.sqrt(DB / (YB * QB)));
            return {
              width: Math.max(1, Math.floor(YB * oB)),
              height: Math.max(1, Math.floor(QB * oB))
            }
          }(OB, GB, BB.maxTextureSize);
          BB.resize(YB.width, YB.height, jB * YB.width / Math.max(1, OB))
        } catch (qB) {
          return pB(), void MB(qB)
        }
        lB = BB.onFrameDrawn((() => {
          if (zB--, zB > 0) return;
          const {
            canvas: OB
          } = BB, GB = {
            width: OB.width,
            height: OB.height
          };
          try {
            OB.toBlob((BB => {
              BB ? YB({
                blob: BB,
                ...GB
              }) : MB(new Error("The canvas gave no image"))
            }), yB, JB)
          } catch (qB) {
            MB(qB)
          } finally {
            pB()
          }
        }))
      }))) : Promise.reject(new Error("Screenshots need a game to be running"))
    }
    async function yB(BB, OB, GB) {
      try {
        const DB = await jB(BB, OB, GB);
        (0, YB.c)(DB.blob, `bloxd-screenshot-${DB.width}x${DB.height}-${Date.now()}.png`)
      } catch (DB) {
        console.error("Error taking screenshot:", DB)
      }
    }
  },
  38354: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => YB
    });
    const YB = {
      noaReady: null,
      chunkRequested: null,
      beforeServerListeners: null,
      wasmNetReady: null
    }
  },
  39761: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => zB,
      g: () => MB
    });
    var YB = GB(192),
      DB = GB(1919),
      QB = GB(1200),
      oB = GB(9599);
    const jB = [250, 500, 1e3, 2e3, 1250],
      yB = 406;

    function JB(BB) {
      if ("object" !== typeof BB || null === BB) return !1;
      const {
        code: OB,
        message: GB
      } = BB, DB = YB.c.duplicateLobbyNameError;
      return (OB === DB.code || OB === yB) && (GB === DB.text || GB === DB.text + YB.m)
    }
    async function MB(BB, OB) {
      let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : DB.c;
      for (let DB = 0;; DB++) {
        let oB;
        (0, QB.r)(OB);
        try {
          return await BB()
        } catch (YB) {
          if (oB = jB[DB], void 0 === oB || !JB(YB)) throw YB
        }
        await GB(oB, OB)
      }
    }
    const PB = new Set([YB.c.duplicateLobbyNameError.code, YB.c.lobbyCantBeCreated.code, YB.c.roomDisposedEarlyError.code, YB.c.roomDisposedLateError.code, YB.c.serverRoomLimitReached.code]);

    function zB(BB) {
      if (JB(BB)) return !0;
      const OB = (0, oB.d)(BB);
      return "number" === typeof OB && PB.has(OB)
    }
  },
  9587: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => JB,
      c: () => yB
    });
    var YB = GB(353);

    function DB(BB) {
      if (!BB.startsWith("{")) return BB;
      let OB;
      try {
        OB = JSON.parse(BB)
      } catch {
        return BB
      }
      return function(BB) {
        if (null === (0, YB.nf)(BB)) return !1;
        const {
          params: OB
        } = BB;
        return void 0 === OB || "object" === typeof OB && null !== OB && Object.values(OB).every((BB => "string" === typeof BB))
      }(OB) ? OB : BB
    }
    var QB = GB(1175),
      oB = GB(1253);

    function jB(BB) {
      return (0, QB.C)(oB.e.get().getCurrentLanguageCode(), BB.translationKey, BB.params)
    }

    function yB(BB) {
      const OB = DB(BB);
      return "string" === typeof OB ? OB : jB(OB)
    }

    function JB(BB) {
      const OB = DB(BB);
      return "string" === typeof OB ? OB : jB({
        translationKey: "moderation:kicked",
        params: {
          reason: jB(OB)
        }
      })
    }
  },
  39886: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => oB
    });
    var YB = GB(331),
      DB = GB(120),
      QB = GB(31);

    function oB() {
      QB.g.setItem(YB.Mb, QB.g.getItem(YB.Mb) + 1), (0, DB.is99NightsCrazyGamesBundle)() && QB.g.setItem(YB.Jb, QB.g.getItem(YB.Jb) + 1)
    }
  },
  37132: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => VB,
      d: () => SB
    });
    var YB = GB(1049),
      DB = GB(204),
      QB = GB(347),
      oB = GB(645),
      jB = GB(353),
      yB = GB(1053),
      JB = GB(662),
      MB = GB(694),
      PB = GB(4936),
      zB = GB(92),
      lB = GB(120),
      pB = GB(1822),
      qB = GB(104),
      ZB = GB(37139),
      NB = GB(31),
      RB = GB(677),
      WB = GB(649),
      AB = GB(37142);

    function VB() {
      var BB, OB;
      return [...null !== (BB = navigator.languages) && void 0 !== BB ? BB : [null !== (OB = navigator.language) && void 0 !== OB ? OB : "none"], "En-GB"]
    }

    function SB(BB, OB, GB, SB, nB) {
      const UB = (0, YB.l)(OB) ? (0, YB.r)(OB) : null,
        fB = BB.isLoggedIn() && void 0 !== (0, DB.c)(QB.k, lB.siteUsed) ? (0, WB.d)() : null,
        kB = {
          cookies: (0, pB.getAllCookiesForGameNameWithVariation)(OB),
          isMobile: (0, zB.isMobile)(),
          isUsingCustomGameTexturePack: null !== UB && nB(UB),
          generalCookies: {
            joinDiscord: !!NB.g.getItem("DiscordPressed"),
            newGo: PB.c,
            ...BB.getMetricsCookies(),
            trafficCode: SB,
            compliance: zB.compliance
          },
          browserInfo: {
            ua: window.navigator.userAgent,
            name: (0, zB.getBrowserName)(),
            version: (0, zB.getBrowserVersion)(),
            platform: navigator.platform,
            platformType: (0, zB.getPlatformType)(),
            deviceType: (0, qB.d)()
          },
          isLoggedIn: BB.isLoggedIn(),
          lobbyName: GB,
          languages: VB(),
          version: oB.b,
          siteUsed: lB.siteUsed,
          subsiteUsed: lB.subsiteUsed,
          playSessionId: (0, ZB.g)(OB),
          visitSessionId: (0, RB.getVisitSessionId)(),
          clientReason: JB.u.reason,
          budgetBasis: (0, AB.j)(),
          ...null !== MB.r && {
            diagClaim: MB.r.claimId
          },
          ...null !== fB && {
            webGpuLoss: fB
          }
        };
      return null !== UB && (0, jB.Tc)(UB) ? (kB.lobbyName = (0, YB.h)(UB, (0, YB.n)(OB), GB), {
        roomName: `classic_${yB.g}`,
        joinOptions: kB
      }) : {
        roomName: OB,
        joinOptions: kB
      }
    }
  },
  39776: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => lB,
      g: () => zB
    });
    const YB = "ue:",
      DB = ["keydown", "keyup", "mousedown", "mouseup", "pointerdown", "pointerup", "touchstart", "touchend"],
      QB = "[A-Za-z0-9]{1,24}",
      oB = 15,
      jB = new RegExp(`^${QB}$`);
    new RegExp(`^${YB}(${[...DB,"other"].join("|")}):(?:n|k(${QB})|b(0|[1-9][0-9]?)):([01])([01])$`);

    function yB(BB, OB, GB, QB, yB) {
      const JB = "string" === typeof BB && DB.includes(BB) ? BB : "other";
      let MB = "n";
      return "string" === typeof OB ? MB = jB.test(OB) ? `k${OB}` : "n" : "number" === typeof GB && Number.isInteger(GB) && GB >= 0 && GB <= oB && (MB = `b${GB}`), `${YB}${JB}:${MB}:${QB?1:0}${yB?1:0}`
    }
    var JB = GB(1730),
      MB = GB(1825);
    let PB = null;

    function zB(BB) {
      const OB = BB instanceof Element && BB !== document.body && BB !== document.documentElement && !(0, JB.p)(BB) && !BB.closest("#root");
      return {
        editable: (0, MB.c)(BB),
        outsideView: OB
      }
    }

    function lB(BB) {
      return PB ??= function(BB) {
        try {
          const {
            editable: OB,
            outsideView: GB
          } = zB(BB.target), YB = BB;
          return yB(BB.type, YB.code, YB.button, OB, GB)
        } catch {
          return yB(null, null, null, !1, !1)
        }
      }(BB), PB
    }
  },
  41667: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => yB
    });
    var YB = GB(40416),
      DB = GB(37495);

    function QB(BB) {
      return {
        current: () => BB,
        watch: () => () => {}
      }
    }

    function oB() {}
    const jB = Object.freeze([0, 0, 0]),
      yB = {
        states: {
          health: QB({
            health: null,
            maxHealth: null,
            shield: null,
            maxShield: null
          }),
          inventory: QB({
            player: [],
            chestOrCreative: [],
            chest: null,
            creative: !1,
            selectedSlot: 0,
            freeSlots: 0
          }),
          hotbar: QB({
            items: [],
            ammo: 0,
            selectedSlot: null
          }),
          stationItems: QB({
            enchantable: {},
            salvageable: {}
          }),
          itemInfo: QB({}),
          creativeVisibility: QB({
            publicLobby: !1,
            shownInGame: {}
          }),
          aura: QB(null),
          heldItemAim: QB({
            gun: !1,
            aimable: !1,
            chargeName: null
          }),
          crouching: QB(!1),
          gliderBoostFuel: QB(0),
          flight: QB({
            canFly: !1,
            flying: !1
          }),
          crafting: QB({
            focus: null,
            recipes: [],
            detail: null
          }),
          players: QB({
            ids: [],
            byId: {},
            localId: null
          }),
          lobbyLeaderboardRows: QB({}),
          fullInventory: QB(!1),
          crosshairTarget: QB({
            interactPrompt: null,
            blockText: null,
            neededTool: null
          }),
          localPlayerAlive: QB(!0),
          freeCamera: QB({
            allowed: !1,
            movesFly: !1
          }),
          replay: QB(null),
          replayEdits: QB(null),
          replayRecorder: QB(DB.e),
          replayVideoExporting: QB(!1)
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
            vM: 0,
            WJ: null,
            amountAddedToSlot: 0
          }),
          salvageItem: () => !1,
          enchantItem: oB,
          setShopOpen: oB,
          buyShopItem: oB,
          lobbyManage: oB,
          sendChatMessage: () => !1,
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
          worldCodeAiChunk: () => YB.d,
          worldCodeAiGameState: () => YB.e
        },
        lookups: {
          localPos: () => jB,
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
  41987: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => oB,
      e: () => QB
    });
    var YB = GB(2272),
      DB = GB(1049);

    function QB(BB, OB) {
      return null !== BB.gameSource && (0, YB.q)(OB, BB.gameSource)
    }

    function oB(BB, OB) {
      if (null === BB.gameSource || "" === BB.gameSource || null === OB) return !0;
      const GB = (0, DB.l)(OB) ? (0, DB.r)(OB) : null;
      return null !== GB && QB(BB, GB)
    }
  },
  41958: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => jB
    });
    var YB = GB(633),
      DB = GB(41964),
      QB = GB(41851);
    async function oB(BB) {
      const OB = await (0, DB.j)({
        Helmet: GB(38639),
        Chestplate: GB(38648),
        Gauntlets: GB(38664),
        Leggings: GB(38655),
        Boots: GB(38658)
      } [YB.c[BB]]);
      try {
        return (0, QB.s)(OB)
      } finally {
        OB.close()
      }
    }
    const jB = new class {
      constructor() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : oB,
          OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : DB.q;
        this.decode = BB, this.register = OB, this.decoded = new Map
      }
      warm() {
        for (let BB = 0; BB < YB.c.length; BB++) this.part(BB).catch((OB => {
          console.warn(`The grayscale armour ${YB.c[BB]} image didn't decode ahead of use`, OB)
        }))
      }
      async load(BB, OB) {
        const {
          width: GB,
          height: QB,
          pixels: oB
        } = await this.part(BB), jB = new ImageData(function(BB, OB) {
          const GB = new Uint8ClampedArray(BB.length);
          for (let YB = 0; YB < BB.length; YB += 4) GB[YB] = Math.round(BB[YB] * OB[0] / 255), GB[YB + 1] = Math.round(BB[YB + 1] * OB[1] / 255), GB[YB + 2] = Math.round(BB[YB + 2] * OB[2] / 255), GB[YB + 3] = BB[YB + 3];
          return GB
        }(oB, function(BB) {
          return [BB >>> 16 & 255, BB >>> 8 & 255, 255 & BB]
        }(OB)), GB, QB);
        let yB;
        try {
          yB = await createImageBitmap(jB, {
            premultiplyAlpha: "none",
            colorSpaceConversion: "none"
          })
        } catch (JB) {
          throw new DB.d("decode", `grayscale armour ${YB.c[BB]}`, {
            cause: JB
          })
        }
        return {
          id: this.register(yB),
          width: GB,
          height: QB
        }
      }
      part(BB) {
        const OB = this.decoded.get(BB);
        if (void 0 !== OB) return OB;
        const GB = this.decode(BB).catch((OB => {
          throw this.decoded.delete(BB), OB instanceof DB.d ? OB : new DB.d("decode", `grayscale armour ${YB.c[BB]}`, {
            cause: OB
          })
        }));
        return this.decoded.set(BB, GB), GB
      }
    }
  },
  41953: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => oB,
      h: () => ZB,
      k: () => MB,
      m: () => PB,
      q: () => qB
    });
    var YB = GB(41834),
      DB = GB(41958),
      QB = GB(41964);
    const oB = 396,
      jB = 1,
      yB = 2,
      JB = 3,
      MB = {
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
      PB = {
        File: 0,
        Item: 1
      },
      zB = 0,
      lB = 1,
      pB = 2;

    function qB(BB) {
      const OB = (0, YB.m)();
      OB.catch((() => {}));
      let DB = null;
      return {
        glbUrl: BB,
        lifeformAtlasUrl: async BB => (await OB).lifeformAtlasUrl(BB),
        armourAtlasUrl: async () => (await GB.e(228).then((() => GB(34878)))).armourAtlasUrl,
        capeUrl: async BB => (await OB).capeUrl(BB),
        attachmentImageUrl: async BB => (await OB).attachmentImageUrl(BB),
        blockImageUrl: async BB => (await OB).blockImageUrl(BB),
        groupAtlasUrl: async BB => (await OB).groupAtlasUrl(BB),
        particleTextureUrl: async BB => (await OB).particleTextureUrl(BB),
        particleItemUrl: async BB => (DB ??= GB.e(44).then((() => GB(54127))).catch((BB => {
          throw DB = null, BB
        })), (await DB).particleItemUrl(BB))
      }
    }
    class ZB {
      constructor(BB, OB) {
        var GB, oB, jB, yB;
        let JB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        this.sources = BB, this.onFailure = OB, this.loading = new Map, this.glbImages = new Map, this.glbWrittenImages = new Map, this.glbTakenCount = new Map, this.answered = new Map, this.ready = [], this.load = void 0, this.release = void 0, this.fetchFile = void 0, this.greyscaleArmour = void 0, this.Vp = !1, this.load = null !== (GB = JB.load) && void 0 !== GB ? GB : (BB, OB) => (0, QB.m)(BB, JB.fetchImage, OB), this.release = null !== (oB = JB.release) && void 0 !== oB ? oB : QB.s, this.fetchFile = null !== (jB = JB.fetchFile) && void 0 !== jB ? jB : BB => (0, YB.h)(BB), this.greyscaleArmour = null !== (yB = JB.greyscaleArmour) && void 0 !== yB ? yB : DB.c
      }
      get waiting() {
        return this.ready.length
      }
      get inFlight() {
        return this.loading.size
      }
      glbWritten(BB, OB) {
        this.glbWrittenImages.set(BB, nB(OB))
      }
      glbTaken(BB, OB) {
        const GB = this.glbWrittenImages.get(BB);
        this.glbWrittenImages.delete(BB), OB && this.setGlbImages(BB, void 0 !== GB && GB.length > 0 ? GB : void 0)
      }
      setGlbImages(BB, OB) {
        var GB;
        this.glbTakenCount.set(BB, (null !== (GB = this.glbTakenCount.get(BB)) && void 0 !== GB ? GB : 0) + 1), void 0 === OB ? this.glbImages.delete(BB) : this.glbImages.set(BB, OB);
        const YB = [];
        for (const {
            key: DB
          }
          of this.loading.values()) DB.kind === MB.Glb && DB.word === BB && YB.push(DB);
        for (let DB = this.ready.length - 1; DB >= 0; DB--) {
          const {
            key: OB,
            id: GB
          } = this.ready[DB];
          OB.kind === MB.Glb && OB.word === BB && (this.ready.splice(DB, 1), null !== GB && (this.answered.delete(GB), this.release(GB)), YB.push(OB))
        }
        this.loadAgain(YB)
      }
      onEvent(BB) {
        if (this.Vp) return;
        const OB = new DataView(BB.buffer, BB.byteOffset, BB.byteLength);
        for (let GB = 0; GB + 8 <= BB.byteLength; GB += 8) {
          const BB = OB.getUint8(GB),
            YB = OB.getUint32(GB + 4, !0);
          if (BB === JB) {
            this.answered.delete(YB), this.release(YB);
            continue
          }
          const DB = {
            kind: OB.getUint8(GB + 1),
            index: OB.getUint8(GB + 2),
            word: YB
          };
          BB === jB ? this.want(DB) : BB === yB && this.loading.delete(NB(DB))
        }
      }
      reload(BB, OB) {
        const GB = GB => BB.includes(GB.kind) && (void 0 === OB || OB(GB)),
          YB = new Map;
        for (const DB of this.answered.values()) GB(DB) && YB.set(NB(DB), DB);
        for (const [DB, {
            key: QB
          }] of this.loading) GB(QB) && YB.set(DB, QB);
        this.loadAgain(YB.values())
      }
      loadAgain(BB) {
        for (const OB of BB) this.loading.delete(NB(OB)), this.want(OB)
      }
      drain(BB) {
        if (null !== BB)
          for (; this.ready.length > 0;) {
            if (!BB(oB, 0, this.ready[0].record)) return;
            this.ready.shift()
          }
      }
      dispose() {
        this.Vp = !0, this.loading.clear(), this.ready.length = 0;
        for (const BB of this.answered.keys()) this.release(BB);
        this.answered.clear()
      }
      want(BB) {
        const OB = NB(BB);
        if (this.loading.has(OB)) return;
        const GB = {
          key: BB
        };
        this.loading.set(OB, GB), this.loadKey(BB).then((YB => {
          this.Vp || this.loading.get(OB) !== GB ? this.release(YB.id) : (this.loading.delete(OB), this.answered.set(YB.id, BB), this.ready.push({
            record: WB(BB, zB, YB),
            key: BB,
            id: YB.id
          }))
        }), (YB => {
          if (this.Vp || this.loading.get(OB) !== GB) return;
          this.loading.delete(OB), this.onFailure({
            key: BB,
            error: YB
          });
          const DB = YB instanceof QB.d && "decode" === YB.stage ? lB : pB;
          this.ready.push({
            record: WB(BB, DB, null),
            key: BB,
            id: null
          })
        }))
      }
      async loadKey(BB) {
        switch (BB.kind) {
          case MB.Glb:
            return this.load(await this.glbImage(BB), "none");
          case MB.LifeformAtlas:
            return this.load(RB(await this.sources.lifeformAtlasUrl(BB.word), BB), "none");
          case MB.ArmourAtlas:
            return this.load(RB(await this.sources.armourAtlasUrl(), BB), "none");
          case MB.Cape:
            return this.load(RB(await this.sources.capeUrl(BB.word), BB), "none");
          case MB.AttachmentImage:
            return this.load(RB(await this.sources.attachmentImageUrl(BB.word), BB), "none");
          case MB.GroupAtlas:
            return this.load(RB(await this.sources.groupAtlasUrl(BB.word), BB), "none");
          case MB.BlockImage:
            return this.load(RB(await this.sources.blockImageUrl(BB.word), BB), "none");
          case MB.Particle: {
            const OB = await (BB.index === PB.Item ? this.sources.particleItemUrl(BB.word) : this.sources.particleTextureUrl(BB.word));
            return this.load(RB(OB, BB), "flipY")
          }
          case MB.GreyscaleArmour:
            return this.greyscaleArmour.load(BB.index, BB.word);
          default:
            throw new QB.d("fetch", `image kind ${BB.kind}`, {
              cause: null
            })
        }
      }
      async glbImage(BB) {
        var OB;
        let GB = this.glbImages.get(BB.word);
        if (void 0 === GB) {
          const OB = this.glbTakenCount.get(BB.word),
            YB = RB(await this.sources.glbUrl(BB.word), BB);
          try {
            GB = nB(await this.fetchFile(YB))
          } catch (DB) {
            throw new QB.d("fetch", YB, {
              cause: DB
            })
          }
          this.glbTakenCount.get(BB.word) === OB && this.glbImages.set(BB.word, GB)
        }
        const YB = null === (OB = GB) || void 0 === OB ? void 0 : OB[BB.index];
        if (!YB) throw new QB.d("decode", `image ${BB.index} of file ${2147483647&BB.word}`, {
          cause: null
        });
        return YB
      }
    }

    function NB(BB) {
      let {
        kind: OB,
        index: GB,
        word: YB
      } = BB;
      return `${OB}:${GB}:${YB}`
    }

    function RB(BB, OB) {
      if (null === BB) throw new QB.d("fetch", `no URL for image ${NB(OB)}`, {
        cause: null
      });
      return BB
    }

    function WB(BB, OB, GB) {
      var YB, DB, QB;
      const oB = new Uint8Array(16),
        jB = new DataView(oB.buffer);
      return jB.setUint8(0, BB.kind), jB.setUint8(1, BB.index), jB.setUint8(2, OB), jB.setUint32(4, BB.word, !0), jB.setUint32(8, null !== (YB = null === GB || void 0 === GB ? void 0 : GB.id) && void 0 !== YB ? YB : 0, !0), jB.setUint16(12, Math.min(null !== (DB = null === GB || void 0 === GB ? void 0 : GB.width) && void 0 !== DB ? DB : 0, 65535), !0), jB.setUint16(14, Math.min(null !== (QB = null === GB || void 0 === GB ? void 0 : GB.height) && void 0 !== QB ? QB : 0, 65535), !0), oB
    }
    const AB = 1179937895,
      VB = 1313821514,
      SB = 5130562;

    function nB(BB) {
      var OB;
      const GB = new DataView(BB.buffer, BB.byteOffset, BB.byteLength);
      if (BB.byteLength < 20 || GB.getUint32(0, !0) !== AB || GB.getUint32(16, !0) !== VB) return [];
      let YB, DB = 20 + GB.getUint32(12, !0);
      try {
        YB = JSON.parse((new TextDecoder).decode(BB.subarray(20, DB)))
      } catch {
        return []
      }
      for (; DB + 8 <= BB.byteLength && GB.getUint32(DB + 4, !0) !== SB;) DB += 8 + GB.getUint32(DB, !0);
      const QB = null !== (OB = YB.images) && void 0 !== OB ? OB : [];
      if (0 === QB.length || DB + 8 > BB.byteLength) return QB.map((() => null));
      const oB = BB.subarray(DB + 8, Math.min(BB.byteLength, DB + 8 + GB.getUint32(DB, !0)));
      return QB.map((BB => {
        var OB, GB, DB;
        const QB = void 0 === BB.bufferView || null === (OB = YB.bufferViews) || void 0 === OB ? void 0 : OB[BB.bufferView];
        if (!QB || 0 !== (null !== (GB = QB.buffer) && void 0 !== GB ? GB : 0) || void 0 === QB.byteLength) return null;
        const jB = null !== (DB = QB.byteOffset) && void 0 !== DB ? DB : 0,
          yB = jB + QB.byteLength;
        return yB <= oB.byteLength ? oB.slice(jB, yB) : null
      }))
    }
  },
  41675: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => oB,
      f: () => QB,
      j: () => DB
    });
    let YB = null;

    function DB(BB) {
      YB = BB
    }

    function QB(BB) {
      YB === BB && (YB = null)
    }

    function oB() {
      var BB;
      null === (BB = YB) || void 0 === BB || BB()
    }
  },
  37248: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => MB,
      d: () => zB,
      f: () => NB,
      i: () => JB
    });
    var YB = GB(16),
      DB = GB(2617),
      QB = GB(2619),
      oB = GB(2626),
      jB = GB(2697),
      yB = GB(25);

    function JB(BB, OB) {
      return (!(0, oB.d)() || 0 === BB && 0 === OB) && (0, QB.r)(DB.f.Joystick, 0, BB, OB, 0)
    }
    const MB = {
      Action1: 1,
      Action2: 2,
      Action3: 3,
      Attack: 4,
      Use: 5,
      Interact: 6,
      Boost: 7
    };

    function PB(BB) {
      return BB.classList.contains("TouchKeyHit") && lB() ? null : BB.firstElementChild
    }

    function zB(BB) {
      return BB.classList.contains("TouchKeyHit") && !BB.classList.contains("CanvasZone") ? {
        whole: !lB(),
        keyBox: null
      } : {
        whole: !1,
        keyBox: pB(PB(BB))
      }
    }

    function lB() {
      return document.documentElement.classList.contains(jB.h)
    }

    function pB(BB) {
      return !(BB instanceof HTMLElement) || BB.offsetWidth <= 0 || BB.offsetHeight <= 0 ? null : {
        width: BB.offsetWidth,
        height: BB.offsetHeight
      }
    }

    function qB(BB, OB) {
      const GB = BB => Math.min(65535, Math.round(4 * BB));
      return (GB(BB) | GB(OB) << 16) >>> 0
    }

    function ZB(BB) {
      return {
        x: BB.left + BB.width / 2,
        y: BB.top + BB.height / 2,
        radius: Math.min(BB.width, BB.height) / 2
      }
    }
    const NB = new class {
      constructor(BB) {
        this.write = BB, this.elements = new Map, this.canvasLeft = 0, this.canvasTop = 0
      }
      set(BB, OB) {
        let GB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        OB ? this.elements.set(BB, {
          element: OB,
          hidden: GB
        }) : this.elements.delete(BB), this.measureOne(BB)
      }
      measure() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
          left: this.canvasLeft,
          top: this.canvasTop
        };
        this.canvasLeft = BB.left, this.canvasTop = BB.top;
        for (const OB of this.elements.keys()) this.measureOne(OB)
      }
      hitZone(BB, OB) {
        let GB = null,
          YB = 1;
        for (const DB of this.elements.keys()) {
          const QB = this.shown(DB);
          if (!QB) continue;
          const {
            rect: oB,
            element: jB
          } = QB, yB = ZB(oB), JB = Math.max(0, oB.width / 2 - yB.radius), MB = Math.max(0, oB.height / 2 - yB.radius), zB = Math.max(0, Math.abs(BB - yB.x) - JB), lB = Math.max(0, Math.abs(OB - yB.y) - MB), qB = jB.firstElementChild;
          let NB = Math.hypot(zB, lB) / yB.radius;
          const RB = pB(PB(jB));
          RB && (NB = Math.min(NB, Math.max(2 * Math.abs(BB - yB.x) / RB.width, 2 * Math.abs(OB - yB.y) / RB.height))), NB < YB && (GB = {
            code: DB,
            element: jB,
            key: qB,
            ...yB
          }, YB = NB)
        }
        return GB
      }
      measureOne(BB) {
        const OB = this.shown(BB);
        if (!OB) return void this.write(DB.f.TouchZone, BB, 0, 0, 0);
        const {
          rect: GB,
          element: YB
        } = OB, QB = ZB(GB);
        this.write(DB.f.TouchZone, BB, QB.x - this.canvasLeft, QB.y - this.canvasTop, qB(GB.width, GB.height));
        const oB = pB(PB(YB));
        this.write(DB.f.TouchZone, 256 | BB, 0, 0, oB ? qB(oB.width, oB.height) : 0)
      }
      shown(BB) {
        const OB = this.elements.get(BB),
          GB = YB.c.get("worldPanelHud");
        if (!OB || OB.hidden || "none" === GB) return null;
        const DB = OB.element.getBoundingClientRect();
        return DB.width <= 0 || DB.height <= 0 ? null : {
          rect: DB,
          element: OB.element
        }
      }
    }(QB.r);
    (0, yB.p)(jB.e, (() => {
      NB.measure()
    }))
  },
  41716: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => yB,
      e: () => JB
    });
    var YB = GB(41867),
      DB = GB(39763),
      QB = GB(37132),
      oB = GB(41723),
      jB = GB(41692);
    const yB = YB.e.timeForPlayerToConnect - 1e4;
    async function JB(BB, OB, GB, YB) {
      let yB;
      try {
        yB = await BB.getTrafficCode()
      } catch (pB) {
        throw console.error("[bloxd-wasm-client] could not get a traffic code", pB), new jB.u(pB)
      }
      const {
        gameNameWithVariation: JB,
        lobbyName: MB
      } = OB, PB = () => {
        const OB = (0, QB.d)(BB, JB, MB, yB, (BB => {
          var OB;
          return null !== (OB = null === GB || void 0 === GB ? void 0 : GB.isUsingCustomGameTexturePack(BB)) && void 0 !== OB && OB
        }));
        OB.joinOptions.wasmClient = !0;
        const DB = (0, oB.I)();
        return null !== DB && (OB.joinOptions.renderBackend = DB), OB.joinOptions.joinAdHold = YB, OB
      }, {
        roomName: zB,
        joinOptions: lB
      } = PB();
      return {
        endpoint: OB.endpoint,
        roomName: zB,
        joinOptions: lB,
        session: {
          gameNameWithVariation: JB,
          lobbyName: MB,
          playerDbId: BB.whamm
        },
        optionsAfterRefusal: async OB => await (0, DB.b)(BB, OB) ? PB().joinOptions : null
      }
    }
  },
  41971: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => MB,
      g: () => QB,
      j: () => PB,
      l: () => oB
    });
    var YB = GB(41953),
      DB = GB(41834);
    const QB = new class {
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
        const OB = void 0 !== this.session && void 0 === BB;
        if (this.change((() => {
            this.session = BB
          })), OB)
          for (const GB of [...this.pageListeners]) GB()
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
        const OB = this.current;
        if (BB(), this.current !== OB)
          for (const GB of this.listeners) GB()
      }
    };

    function oB(BB, OB) {
      return {
        ...BB,
        armourAtlasUrl: () => {
          var GB, YB;
          return null !== (GB = null === (YB = OB()) || void 0 === YB ? void 0 : YB.armourAtlasUrl()) && void 0 !== GB ? GB : BB.armourAtlasUrl()
        },
        lifeformAtlasUrl: GB => yB(OB(), (BB => BB.LIFEFORM_ATLAS_PATHS[GB]), (() => BB.lifeformAtlasUrl(GB))),
        groupAtlasUrl: GB => yB(OB(), (BB => BB.GROUP_ATLAS_PATHS[GB]), (() => BB.groupAtlasUrl(GB))),
        particleItemUrl: YB => JB(OB(), (async () => {
          const BB = await GB.e(44).then((() => GB(54127))).catch((() => null));
          return (null === BB || void 0 === BB ? void 0 : BB.particleItemSprite(YB)) || null
        }), (() => BB.particleItemUrl(YB))),
        blockImageUrl: GB => JB(OB(), (async () => {
          var BB, OB;
          return null !== (BB = null === (OB = await jB()) || void 0 === OB ? void 0 : OB.blockImageName(GB)) && void 0 !== BB ? BB : null
        }), (() => BB.blockImageUrl(GB)))
      }
    }

    function jB() {
      return (0, DB.m)().catch((() => null))
    }

    function yB(BB, OB, GB) {
      return JB(BB, (async () => {
        var BB;
        const GB = await jB(),
          YB = null === GB ? null : OB(GB),
          DB = null !== (BB = null === YB || void 0 === YB ? void 0 : YB.slice(YB.lastIndexOf("/") + 1)) && void 0 !== BB ? BB : null;
        return "Player_Atlas" === DB ? null : DB
      }), GB)
    }
    async function JB(BB, OB, GB) {
      if (null !== BB) {
        const GB = await OB(),
          YB = null === GB ? null : BB.textureUrl(GB);
        if (null !== YB) return YB
      }
      return GB()
    }
    const MB = 0;

    function PB(BB) {
      const OB = [YB.k.ArmourAtlas, YB.k.LifeformAtlas, YB.k.GroupAtlas, YB.k.BlockImage, YB.k.Particle];
      BB.reload(OB, (BB => {
        switch (BB.kind) {
          case YB.k.Particle:
            return BB.index === YB.m.Item;
          case YB.k.LifeformAtlas:
            return BB.word !== MB;
          default:
            return !0
        }
      }))
    }
  },
  41874: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => YB,
      f: () => jB,
      g: () => DB,
      k: () => QB
    });
    const YB = 1e3;

    function DB() {
      yB((() => {
        window.location.reload()
      }))
    }

    function QB() {
      return new Promise((() => {}))
    }

    function oB(BB) {
      yB((() => {
        window.location.replace(BB(window.location.href))
      }))
    }

    function jB(BB) {
      Promise.resolve().then((() => GB(98))).then((OB => {
        let {
          currentUrl: GB
        } = OB;
        oB((() => GB.mergeSearchParamsInto(BB)))
      }), (() => {
        oB((() => BB))
      }))
    }

    function yB(BB) {
      null !== window.onbeforeunload ? Promise.resolve().then((() => GB(1822))).then((OB => {
        let {
          prepareForUnloadWithoutConfirmation: GB
        } = OB;
        try {
          GB()
        } catch (YB) {
          console.warn("[bloxd-wasm-client] prepareForUnloadWithoutConfirmation threw: leaving plainly", YB), window.onbeforeunload = null
        }
        BB()
      }), (() => {
        window.onbeforeunload = null, BB()
      })) : BB()
    }
  },
  36937: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => qB,
      f: () => MB,
      h: () => lB,
      j: () => PB,
      m: () => ZB,
      p: () => pB,
      s: () => zB
    });
    const YB = 30,
      DB = 4;
    let QB = 0,
      oB = !1,
      jB = !1,
      yB = Number.NEGATIVE_INFINITY,
      JB = [];

    function MB() {
      0 === QB && (oB = !1, jB = !1), QB++;
      let BB = !1;
      return () => {
        BB || (BB = !0, QB--)
      }
    }

    function PB(BB) {
      BB && (jB = !0)
    }

    function zB() {
      return jB
    }

    function lB(BB) {
      oB = BB
    }

    function pB(BB) {
      return !(QB > 0 && (oB || BB - yB < 1e3 / YB - DB)) && (yB = BB, !0)
    }

    function qB(BB) {
      JB.push(BB)
    }

    function ZB() {
      if (0 === JB.length) return;
      const BB = JB;
      JB = [];
      for (const GB of BB) try {
        GB()
      } catch (OB) {
        console.warn("[bloxd-previews] an after-draw callback threw", OB)
      }
    }
  },
  5558: (BB, OB, GB) => {
    function YB(BB, OB) {
      return DB(BB, OB)
    }

    function DB(BB, OB) {
      if (BB === OB) return !0;
      if ("object" !== typeof BB || "object" !== typeof OB || null === BB || null === OB || Array.isArray(BB) !== Array.isArray(OB)) return !1;
      const GB = BB,
        YB = OB,
        QB = Object.keys(GB);
      return QB.length === Object.keys(YB).length && QB.every((BB => Object.prototype.hasOwnProperty.call(YB, BB) && DB(GB[BB], YB[BB])))
    }
    GB.d(OB, {
      b: () => YB
    })
  },
  41916: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => SB,
      g: () => AB,
      i: () => qB,
      k: () => pB
    });
    var YB = GB(1919),
      DB = GB(1200),
      QB = GB(39761),
      oB = GB(37160),
      jB = GB(39772),
      yB = GB(41692);
    const JB = {
        "X-Requested-With": "XMLHtttpRequest"
      },
      MB = 3,
      PB = [500, 1500];

    function zB(BB) {
      const OB = new URL(BB);
      return {
        secure: "https:" === OB.protocol || "wss:" === OB.protocol,
        host: OB.host,
        pathname: OB.pathname.replace(/\/+$/, ""),
        search: OB.searchParams.toString()
      }
    }

    function lB(BB, OB, GB) {
      const {
        secure: YB,
        host: DB,
        pathname: QB,
        search: oB
      } = zB(BB);
      return `${YB?"https":"http"}://${DB}${QB}/matchmake/${OB}/${encodeURIComponent(GB)}${oB?`?${oB}`:""}`
    }

    function pB(BB, OB) {
      var GB;
      const YB = null !== (GB = OB.protocol) && void 0 !== GB ? GB : "ws";
      if ("ws" !== YB) throw new Error(`seat reservation asks for the ${YB} transport`);
      const {
        secure: DB,
        host: QB,
        pathname: oB,
        search: jB
      } = zB(BB), yB = new URLSearchParams(jB);
      yB.append("sessionId", OB.sessionId), OB.reconnectionToken && yB.append("reconnectionToken", OB.reconnectionToken);
      return `${DB?"wss":"ws"}://${OB.room.publicAddress||`${QB}${oB}`}/${OB.room.processId}/${OB.room.roomId}?${yB.toString()}`
    }
    async function qB(BB, OB, GB) {
      var jB;
      let JB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const zB = null !== (jB = JB.sleep) && void 0 !== jB ? jB : YB.c,
        pB = new DB.e(JB.signal),
        qB = new oB.c((() => {
          (0, DB.l)(pB.controller, new oB.d("seat"))
        })),
        {
          signal: WB
        } = pB;
      try {
        const YB = await (0, QB.g)((() => async function(BB, OB, GB, YB) {
          var QB;
          const {
            signal: oB,
            sleep: jB
          } = YB, JB = lB(BB, "joinOrCreate", OB), zB = JSON.stringify(GB);
          let pB = null;
          for (let lB = 0; lB < MB; lB++) {
            var qB;
            if (lB > 0) await jB(null !== (qB = PB[lB - 1]) && void 0 !== qB ? qB : 1500, oB);
            let BB;
            (0, DB.r)(oB);
            try {
              BB = await NB(JB, zB, YB)
            } catch (WB) {
              (0, DB.r)(oB), pB = ZB(WB);
              continue
            }
            const {
              response: OB,
              answer: GB,
              refusal: QB,
              lost: MB
            } = BB;
            if (null === MB) {
              if (null !== QB) throw RB(QB, GB);
              if (OB.ok && null !== GB && nB(GB)) return GB;
              pB = new yB.s(`seat request answered HTTP ${OB.status}${null===GB?" without JSON":" without a seat"}`, !1, void 0, OB.status)
            } else pB = ZB(MB.error)
          }
          throw null !== (QB = pB) && void 0 !== QB ? QB : new yB.s("seat request made no attempt", !1)
        }(BB, OB, GB, {
          ...JB,
          signal: WB,
          sleep: zB
        })), WB, zB);
        return qB.answered(), YB
      } finally {
        qB.stop(), pB.unfollow()
      }
    }

    function ZB(BB) {
      return new yB.s(BB instanceof Error ? BB.message : String(BB), !0, BB)
    }
    async function NB(BB, OB, GB) {
      var YB;
      const {
        signal: QB
      } = GB, oB = null !== (YB = GB.fetch) && void 0 !== YB ? YB : fetch, jB = await oB(BB, {
        method: "POST",
        headers: {
          ...JB,
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: OB,
        credentials: "include",
        signal: QB
      }), {
        answer: yB,
        lost: MB
      } = await async function(BB) {
        try {
          const OB = await BB.json();
          return {
            answer: "object" === typeof OB && null !== OB ? OB : null,
            lost: null
          }
        } catch (OB) {
          return {
            answer: null,
            lost: OB instanceof SyntaxError ? null : {
              error: OB
            }
          }
        }
      }(jB), PB = null !== yB && "string" === typeof yB.error ? yB.error : null;
      var zB;
      null !== PB && (null === (zB = GB.onRefusal) || void 0 === zB || zB.call(GB));
      return (0, DB.r)(QB), {
        response: jB,
        answer: yB,
        refusal: PB,
        lost: MB
      }
    }

    function RB(BB, OB) {
      return new yB.l(BB, "number" === typeof(null === OB || void 0 === OB ? void 0 : OB.code) ? OB.code : 0, (0, jB.m)(BB).text)
    }
    class WB extends Error {
      constructor(BB, OB) {
        super(BB), this.code = OB, this.name = "SeatHttpError"
      }
    }
    async function AB(BB, OB, GB) {
      let YB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const {
        response: DB,
        answer: QB,
        refusal: oB,
        lost: jB
      } = await NB(lB(BB, "reconnect", OB), JSON.stringify({
        reconnectionToken: GB
      }), YB);
      if (null !== jB) throw jB.error;
      if (!DB.ok) {
        const BB = null !== QB && "number" === typeof QB.code && 0 !== QB.code ? QB.code : DB.status;
        throw new WB(`the seat's reconnect was refused: ${null!==oB&&void 0!==oB?oB:`HTTP ${DB.status}`}`, BB)
      }
      if (null !== oB) throw RB(oB, QB);
      if (null === QB || !nB(QB)) throw new Error("the seat's reconnect answered " + (null === QB ? "without JSON" : "without a seat"));
      return {
        ...QB,
        reconnectionToken: GB
      }
    }
    const VB = 10;

    function SB(BB) {
      if (BB.byteLength < 2 || BB[0] !== VB) return null;
      const OB = 2 + BB[1];
      return OB > BB.byteLength ? null : (new TextDecoder).decode(BB.subarray(2, OB))
    }

    function nB(BB) {
      const OB = BB.room;
      return "string" === typeof BB.sessionId && "object" === typeof OB && null !== OB && "string" === typeof OB.roomId && "string" === typeof OB.processId && "string" === typeof OB.name
    }
  },
  41600: (BB, OB, GB) => {
    GB.d(OB, {
      $: () => SB,
      B: () => VB,
      E: () => ZB,
      I: () => kB,
      K: () => IB,
      M: () => pB,
      O: () => iB,
      S: () => RB,
      V: () => NB,
      Z: () => WB,
      c: () => DB,
      g: () => FB,
      h: () => mB,
      i: () => lB,
      j: () => qB,
      m: () => KB,
      o: () => UB,
      p: () => dB,
      s: () => fB,
      u: () => nB,
      x: () => uB,
      y: () => AB
    });
    var YB = GB(3362);
    const DB = {
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

    function QB(BB, OB) {
      return !ArrayBuffer.isView(BB) || BB instanceof DataView ? Array.isArray(BB) ? BB.map((BB => OB(BB))) : BB : Array.from(BB, (BB => OB(BB)))
    }

    function oB(BB) {
      if ("string" !== typeof BB) return BB;
      for (let OB = 0; OB < BB.length; OB++) {
        const GB = BB.charCodeAt(OB);
        if (GB >= 55296 && GB <= 57343) return yB.decode(jB.encode(BB))
      }
      return BB
    }
    const jB = new TextEncoder,
      yB = new TextDecoder;

    function JB(BB) {
      return BB
    }
    let MB;

    function PB(BB) {
      return null === BB || "object" !== typeof BB ? BB : [oB(BB.policy), oB(BB.Jy)]
    }

    function zB(BB) {
      return null === BB || "object" !== typeof BB ? BB : [QB(BB.ZO, JB), QB(BB.xy, JB)]
    }

    function lB(BB) {
      return null === (OB = BB) || "object" !== typeof OB ? OB : [oB(OB.ty), oB(OB.BJ)];
      var OB
    }

    function pB(BB) {
      return null === (OB = BB) || "object" !== typeof OB ? OB : [OB.id, OB.UJ];
      var OB
    }

    function qB(BB) {
      return null === (OB = BB) || "object" !== typeof OB ? OB : [OB.XB, oB(OB.wB), OB.EB, oB(OB.aB), OB.CB, OB.HB, OB.Ay, oB(OB.Vy), oB(OB.Sy)];
      var OB
    }

    function ZB(BB) {
      return null === (OB = BB) || "object" !== typeof OB ? OB : [QB(OB.VM, JB), OB.SM];
      var OB
    }

    function NB(BB) {
      return null === (OB = BB) || "object" !== typeof OB ? OB : [QB(OB.dJ, (BB => oB(BB))), oB(OB.KJ), OB.uJ];
      var OB
    }

    function RB(BB) {
      return null === (OB = BB) || "object" !== typeof OB ? OB : [QB(OB.JJ, JB), oB(OB.MJ), OB.PJ];
      var OB
    }

    function WB(BB) {
      return null === (OB = BB) || "object" !== typeof OB ? OB : [oB(OB.UB), oB(OB.fB)];
      var OB
    }

    function AB(BB) {
      return null === (OB = BB) || "object" !== typeof OB ? OB : [oB(OB.NM)];
      var OB
    }

    function VB(BB) {
      return oB(BB)
    }

    function SB(BB) {
      return null === (OB = BB) || "object" !== typeof OB ? OB : [oB(OB.Hy), oB(OB.vy), oB(OB.policy), oB(OB.Jy)];
      var OB
    }

    function nB(BB) {
      return PB(BB)
    }

    function UB(BB) {
      return PB(BB)
    }

    function fB(BB) {
      return null === (OB = BB) || "object" !== typeof OB ? OB : [oB(OB.nM)];
      var OB
    }

    function kB(BB) {
      return BB
    }

    function dB(BB) {
      return null === (OB = BB) || "object" !== typeof OB ? OB : [oB(OB.zJ), oB(OB.lJ)];
      var OB
    }

    function KB(BB) {
      return oB(BB)
    }

    function uB(BB) {
      return zB(BB)
    }

    function mB(BB) {
      return zB(BB)
    }

    function IB(BB) {
      return null === (OB = BB) || "object" !== typeof OB ? OB : [oB(OB.fJ)];
      var OB
    }

    function FB(BB) {
      return (MB ??= (0, YB.h)().map((BB => BB.name)), MB).map((OB => {
        return "string" === typeof(GB = BB[OB]) ? oB(GB) : QB(GB, JB);
        var GB
      }))
    }

    function iB(BB) {
      return null === (OB = BB) || "object" !== typeof OB ? OB : [OB.RM, OB.WM, OB.AM];
      var OB
    }
  },
  41980: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => QB
    });
    var YB = GB(41987),
      DB = GB(41971);
    const QB = new class {
      constructor(BB) {
        this.pack = BB, this.game = void 0, this.settle = null, this.hold = null, this.endedWhileHeld = !1, this.gameListeners = new Set, BB.onWanted((() => {
          this.release()
        }))
      }
      setGame(BB) {
        if (void 0 === BB && null !== this.hold) return void(this.endedWhileHeld = !0);
        this.hold = null, this.endedWhileHeld = !1;
        const OB = this.inGame();
        if (this.game = BB, this.update(), this.inGame() !== OB)
          for (const GB of this.gameListeners) GB()
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
        void 0 === this.game ? this.pack.setSessionFiles(void 0) : null !== this.settle && (0, YB.c)(this.settle.state, this.game) && this.pack.setSessionFiles(this.settle.files)
      }
    }(DB.g)
  },
  5552: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => oB,
      f: () => jB
    });
    var YB = GB(2272),
      DB = GB(5558);
    let QB = null;

    function oB(BB) {
      QB = {
        pack: BB.metaData.id === YB.e ? null : BB
      }
    }

    function jB(BB) {
      return !(null === QB || !(0, DB.b)(QB.pack, BB)) && (QB = null, !0)
    }
  },
  41683: (BB, OB, GB) => {
    GB.r(OB), GB.d(OB, {
      followPageUiPack: () => RP,
      packForGame: () => NP,
      playWasmGame: () => mP,
      prefetchWasmPreviews: () => yJ,
      setGamePackConfirm: () => SM,
      startWasmPlay: () => nP,
      startWasmPreviews: () => jJ
    });
    var YB = GB(192),
      DB = GB(1246),
      QB = GB(162),
      oB = GB(39782),
      jB = GB(2023),
      yB = GB(25),
      JB = GB(5150),
      MB = GB(1338),
      PB = GB(1790),
      zB = GB(1350),
      lB = GB(39958),
      pB = GB(1299),
      qB = GB(186),
      ZB = GB(3244),
      NB = GB(1908),
      RB = GB(3274);
    let WB = null,
      AB = null,
      VB = null,
      SB = !1,
      nB = "previews",
      UB = null,
      fB = !1,
      kB = 0;

    function dB(BB) {
      nB = BB
    }

    function KB(BB) {
      var OB;
      const GB = BB instanceof Error ? BB.name : null;
      return null !== (OB = qB.e.find((BB => BB === GB))) && void 0 !== OB ? OB : "other"
    }

    function uB() {
      WB ??= performance.now()
    }

    function mB(BB) {
      AB ??= performance.now(), UB = BB, kB > 0 && IB()
    }

    function IB() {
      null !== AB && null !== UB && (0, pB.p)("wasm_loaded", AB, `${UB}:${(0,ZB.o)()}`)
    }
    const FB = {
      ready: () => {
        NB.b.markAdmissionAwaited()
      },
      adEnded: () => {
        NB.b.markJoinAdEnded()
      },
      admitted: () => {
        NB.b.markAdmitted()
      }
    };
    var iB = GB(39972),
      LB = GB(39886),
      gB = GB(37139),
      rB = GB(1540),
      XB = GB(39761),
      wB = GB(9599),
      EB = GB(37160),
      cB = GB(41688),
      hB = GB(5274),
      aB = GB(41593),
      eB = GB(41667),
      TB = GB(41600);
    const bB = {
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

    function CB(BB) {
      const OB = {
        ...eB.c[BB]
      };
      for (const GB of Object.keys(bB[BB])) delete OB[GB];
      return OB
    }

    function HB() {
      var BB, OB;
      return null === (BB = null === (OB = (0, aB.j)()) || void 0 === OB ? void 0 : OB.localPlayerAlive()) || void 0 === BB || BB
    }

    function vB() {
      var BB, OB;
      return null !== (BB = null === (OB = (0, aB.j)()) || void 0 === OB ? void 0 : OB.localDeaths()) && void 0 !== BB ? BB : null
    }
    const sB = {
        current: HB,
        watch: BB => {
          let OB = HB(),
            GB = vB();
          return (0, hB.z)((() => {
            const YB = HB(),
              DB = vB(),
              QB = null !== DB && null !== GB && DB !== GB;
            GB = DB, QB ? (OB || BB(!0), BB(!1), YB && BB(!0), OB = YB) : YB !== OB && (OB = YB, BB(YB))
          }))
        }
      },
      xB = {
        states: {
          ...CB("states"),
          localPlayerAlive: sB
        },
        events: {
          ...CB("events"),
          localPlayerAliveSet: {
            watch: sB.watch
          }
        },
        commands: {
          ...CB("commands"),
          respawn: () => {
            var BB;
            null === (BB = (0, aB.j)()) || void 0 === BB || BB.respawn()
          },
          playEmote: BB => {
            var OB;
            null === (OB = (0, aB.j)()) || void 0 === OB || OB.send(TB.c.PlayEmote, (0, TB.y)({
              NM: BB
            }))
          },
          applyTemporaryThirdPerson: BB => {
            var OB;
            let {
              durationMs: GB
            } = BB;
            null === (OB = (0, aB.j)()) || void 0 === OB || OB.thirdPersonFor(GB)
          },
          bindCustomButtonKeys: BB => {
            var OB;
            null === (OB = (0, aB.j)()) || void 0 === OB || OB.bindCustomButtonKeys(BB)
          },
          pressCustomButton: BB => {
            var OB;
            let {
              id: GB,
              down: YB
            } = BB;
            null === (OB = (0, aB.j)()) || void 0 === OB || OB.pressCustomButton(GB, YB)
          },
          setLookSensitivity: () => {},
          wakeUp: BB => {
            const OB = (0, TB.K)({
                fJ: BB
              }),
              GB = () => {
                const BB = (0, aB.j)();
                return !(null !== BB && void 0 !== BB && BB.isSessionLive) || BB.send(TB.c.StopSleeping, OB)
              };
            if (!GB()) {
              const BB = (0, hB.z)((() => {
                GB() && BB()
              }))
            }
          },
          setCameraZoom: BB => {
            var OB;
            null === (OB = (0, aB.j)()) || void 0 === OB || OB.setCameraZoom(BB)
          }
        },
        queries: CB("queries"),
        lookups: {
          ...CB("lookups"),
          cameraZoom: () => {
            var BB, OB;
            return null !== (BB = null === (OB = (0, aB.j)()) || void 0 === OB ? void 0 : OB.cameraZoom()) && void 0 !== BB ? BB : 0
          }
        }
      };
    var tB = GB(39772),
      BO = GB(41692),
      OO = GB(41700),
      GO = GB(41716),
      YO = GB(1255),
      DO = GB(98),
      QO = GB(4936),
      oO = GB(4144),
      jO = GB(1156);
    const yO = {
      Cy: () => (0, YO.e)(),
      inbuiltOverwritten: () => QO.g,
      reflectApplyHit: () => jO.b,
      definerHit: () => DO.currentUrl.c,
      emitReplaced: () => (0, yB.d)(),
      confirmMesh: () => (0, oO.e)(),
      confirmMeshHitStack: () => (0, oO.f)()
    };
    var JO = GB(41705),
      MO = GB(41874);
    var PO = GB(16),
      zO = GB(2027),
      lO = GB(2085),
      pO = GB(1705),
      qO = GB(2134),
      ZO = GB(1175),
      NO = GB(1253),
      RO = GB(37009);

    function WO() {
      return NO.e.get().getCurrentLanguageCode()
    }

    function AO(BB) {
      const OB = () => {
        BB({
          translate: (BB, OB) => (0, ZO.A)(WO(), BB, OB),
          keyBindingText: BB => {
            const OB = (0, lO.q)(BB, PO.c.get("isTouchScreen"));
            return null !== OB ? (0, ZO.C)(WO(), OB.translationKey, OB.params) : (0, lO.l)((0, lO.n)(BB))
          },
          isFriend: qO.h,
          hiddenNames: zO.d.shown,
          loadsFontRest: (0, RO.b)(WO())
        })
      };
      let GB = !1;
      const YB = () => {
          const BB = WO();
          (0, ZO.p)(BB).then((() => {
            GB || BB !== WO() || OB()
          }))
        },
        DB = () => pO.b.getSocialState().friends.map((BB => BB.name.toLowerCase())).sort().join(" ");
      let QB = DB();
      OB(), YB();
      const oB = [(0, NO.i)((() => {
        OB(), YB()
      })), (0, yB.p)("customBindingsChanged", OB), (0, yB.p)("appManagerUpdated|isTouchScreen", OB), (0, qO.d)((() => {
        const BB = DB();
        BB !== QB && (QB = BB, OB())
      })), zO.d.subscribe(OB)];
      return () => {
        GB = !0;
        for (const BB of oB) BB()
      }
    }
    var VO = GB(1178),
      SO = GB(4875),
      nO = GB(37536);
    const UO = {
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
      wasmScreens: VO.wasmScreens
    };
    let fO = null;

    function kO(BB) {
      let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return null === fO ? function(BB) {
        var OB, GB;
        let YB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const [DB, QB] = BB.split(":"), oB = null !== (OB = null === (GB = UO[DB]) || void 0 === GB ? void 0 : GB[QB]) && void 0 !== OB ? OB : BB;
        return oB.replace(/\{\{(\w+)\}\}/g, ((BB, OB) => {
          var GB;
          return null !== (GB = YB[OB]) && void 0 !== GB ? GB : BB
        }))
      }(BB, OB) : fO(BB, OB)
    }

    function dO(BB, OB) {
      (0, SO.b)();
      const GB = document.createElement("div");
      GB.setAttribute("role", "alertdialog"), GB.style.cssText = "position:fixed;top:0;right:0;bottom:0;left:0;z-index:100;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,0.7);font:16px sans-serif;color:#fff";
      const YB = document.createElement("div");
      YB.style.cssText = "max-width:28rem;padding:1.5rem;background:#1c2333;text-align:center";
      const DB = document.createElement("h2");
      DB.textContent = kO(BB.title);
      const QB = document.createElement("p");
      if (QB.textContent = kO(BB.help, BB.helpValues), QB.style.whiteSpace = "pre-line", YB.append(DB, QB), BB.discordLink) {
        const BB = document.createElement("a");
        BB.href = nO.b, BB.target = "_blank", BB.rel = "noreferrer", BB.style.color = "#8ab4ff", BB.textContent = kO("wasmScreens:reportOnDiscord"), YB.append(BB)
      }
      const oB = document.createElement("div");
      return oB.style.cssText = "display:flex;gap:1rem;justify-content:center;margin-top:1.5rem", YB.append(oB), GB.append(YB), document.body.append(GB), new Promise((YB => {
        const DB = BB => {
            null === OB || void 0 === OB || OB.removeEventListener("abort", QB), GB.remove(), YB(BB)
          },
          QB = () => {
            DB(!1)
          };
        null === OB || void 0 === OB || OB.addEventListener("abort", QB, {
          once: !0
        });
        const jB = (BB, OB) => {
          const GB = document.createElement("button");
          GB.textContent = kO(BB), GB.style.cssText = "padding:0.5rem 1.25rem;font:inherit", GB.addEventListener("click", (() => {
            DB(OB)
          })), oB.append(GB)
        };
        null !== BB.cancel && jB(BB.cancel, !1), jB(BB.confirm, !0)
      }))
    }
    var KO = GB(9587),
      uO = GB(645),
      mO = GB(1049),
      IO = GB(2057),
      FO = GB(331),
      iO = GB(3206),
      LO = GB(36912),
      gO = GB(3210),
      rO = GB(39425),
      XO = GB(5165),
      wO = GB(41882),
      EO = GB(694),
      cO = GB(662),
      hO = GB(689),
      aO = GB(3291),
      eO = GB(2050),
      TO = GB(4147),
      bO = GB(3705);
    let CO = null;
    var HO = GB(1186),
      vO = GB(1200),
      sO = GB(1919),
      xO = GB(4808),
      tO = GB(4859),
      BG = GB(3881),
      OG = GB(52),
      GG = GB(328),
      YG = GB(320),
      DG = GB(41897),
      QG = GB(5276),
      oG = GB(39470);
    var jG = GB(4835),
      yG = GB(31);

    function JG(BB) {
      let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => document.createElement("canvas");
      try {
        var GB;
        const YB = OB(),
          DB = BB ? YB.getContext("webgl") : YB.getContext("webgl2");
        return null !== DB && (null === (GB = DB.getExtension("WEBGL_lose_context")) || void 0 === GB || GB.loseContext(), !0)
      } catch {
        return !1
      }
    }
    var MG = GB(38354),
      PG = GB(41900);
    class zG {
      constructor(BB, OB, GB) {
        this.showView = BB, this.holdForAd = OB, this.render = GB
      }
      pointerUnlockRequestsChanged() {
        (0, DG.v)()
      }
      pointerLockDebugEntries() {
        return [{
          label: "Locked to the canvas",
          value: String((0, DG.n)())
        }]
      }
      setGameViewShown(BB) {
        this.showView(BB)
      }
      setGameView(BB) {
        (0, PG.n)(BB)
      }
      videoAdHold(BB, OB) {
        this.holdForAd(BB, OB)
      }
      gameRender() {
        return this.render()
      }
    }
    class lG {
      leave(BB) {
        ! function(BB) {
          if (null !== (0, zB.c)().websocketUrl) try {
            (0, hB.O)().leaveGame(BB)
          } finally {
            (0, zB.n)({
              websocketUrl: null
            })
          }
        }(BB)
      }
      isReplay() {
        return !1
      }
    }
    class pG {
      constructor(BB) {
        this.workMs = BB
      }
      watchFrameStarts(BB) {
        return (0, hB.v)(BB)
      }
      watchFrames(BB) {
        return (0, hB.s)(BB)
      }
      watchTicks(BB) {
        return (0, hB.z)(BB)
      }
      frameWorkMs() {
        return this.workMs()
      }
    }
    var qG = GB(41864),
      ZG = GB(41907);

    function NG(BB) {
      return BB >= 0 ? Math.min(1, BB) : 0
    }

    function RG(BB, OB) {
      const {
        fade: GB
      } = BB;
      return null === GB || OB - GB.at >= GB.ms ? BB.volume : GB.from + (BB.volume - GB.from) * Math.max(0, (OB - GB.at) / GB.ms)
    }

    function WG(BB) {
      const OB = Object.entries(BB),
        GB = new Uint32Array(OB.length);
      let YB = 0;
      for (const [oB, [, jB]] of OB.entries()) GB[oB] = jB.length, YB += jB.length;
      const DB = new Float64Array(3 * YB);
      let QB = 0;
      for (const [, oB] of OB)
        for (const BB of oB) DB.set(BB, QB), QB += 3;
      return {
        blocks: OB.map((BB => {
          let [OB] = BB;
          return OB
        })).join("\0"),
        counts: GB,
        values: DB
      }
    }
    class AG {
      constructor(BB, OB) {
        this.core = BB, this.warn = OB, this.latest = 0
      }
      async feed() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : VG;
        const OB = ++this.latest;
        let GB;
        try {
          GB = await BB()
        } catch (YB) {
          return void(this.core.isStopped || OB !== this.latest || this.warn("the block colours didn't load, so block particles draw grey", YB))
        }
        OB === this.latest && (this.core.setBlockColours(GB) || this.core.isStopped || this.warn("the core refused the block colours: block particles draw grey"))
      }
    }
    async function VG() {
      return WG((await GB.e(228).then((() => GB(34878)))).averageColors)
    }
    var SG = GB(5281),
      nG = GB(5287),
      UG = GB(41646),
      fG = GB(3647),
      kG = GB(36871),
      dG = GB(41770),
      KG = GB(635),
      uG = GB(37745),
      mG = GB(633),
      IG = GB(353),
      FG = GB(41742);
    const iG = [3e4, 12e4, 3e5];
    class LG extends Error {}
    const gG = {
      mobTypes: KG.o,
      vehicleTypes: uG.b,
      mobAiStates: KG.k,
      playerPoses: mG.p
    };
    var rG = GB(41729),
      XG = GB(41761),
      wG = GB(41797),
      EG = GB(1308),
      cG = GB(41911),
      hG = GB(41913),
      aG = GB(3351),
      eG = GB(39748),
      TG = GB(5313),
      bG = GB(2617);
    const CG = bG.y.KeysDisabled | bG.y.LookFrozen | bG.y.ClicksSuppressed,
      HG = aG.g;
    var vG = (0, hG.c)("resumingConn");
    class sG {
      constructor(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.shell = BB, this.now = OB, this.session = void 0, this.attempt = null, this.landed = null, this.initialInfoConn = 0, this.initialInfoOffer = !1, this.completedEarlyConn = 0, Object.defineProperty(this, vG, {
          writable: !0,
          value: 0
        }), this.drops = 0, this.session = new eG.d({
          reconnect: BB => this.reconnect(BB),
          isLive: () => BB.isLive(),
          onReconnected: OB => {
            this.landed = OB, BB.onReconnected(OB), this.landIfResumed()
          },
          onGaveUp: (OB, GB) => {
            this.abortAttempt(), BB.onGaveUp(OB, GB)
          },
          freeze: OB => {
            BB.NK(OB), (0, TG.m)(CG, OB ? CG : 0, "reconnectFreeze")
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
        return (0, cG.e)(this, vG)[vG]
      }
      canHoldSeat() {
        return this.session.canHoldSeat()
      }
      onInitialInfo(BB) {
        let {
          conn: OB,
          graceMs: GB,
          sessionBased: YB,
          replayOffer: DB
        } = BB;
        this.session.onInitialInfo(GB, YB), this.isResuming() && (this.initialInfoConn = OB, this.initialInfoOffer = DB, this.landIfResumed())
      }
      onResumeComplete(BB) {
        0 !== BB && (BB === (0, cG.e)(this, vG)[vG] ? ((0, cG.e)(this, vG)[vG] = 0, this.session.onResumed()) : this.isResuming() && (this.completedEarlyConn = BB))
      }
      onDropped(BB) {
        this.drops++, this.landed = null, this.initialInfoConn = 0, this.initialInfoOffer = !1, this.completedEarlyConn = 0, (0, cG.e)(this, vG)[vG] = 0, this.session.onConnectionLost(BB)
      }
      leave() {
        this.session.leave(), this.dispose()
      }
      dispose() {
        this.abortAttempt(), this.landed = null, this.completedEarlyConn = 0, (0, cG.e)(this, vG)[vG] = 0, this.session.end()
      }
      reconnect(BB) {
        const OB = this.attempt;
        if (null !== OB && this.awaitingJoinRoom(OB)) return OB.result;
        this.abortAttempt();
        const GB = new AbortController,
          YB = this.drops,
          DB = {
            attachedAt: null
          },
          QB = this.shell.reconnect(BB, GB.signal, (() => {
            DB.attachedAt = this.now()
          })).then((BB => {
            if (this.clearAttempt(oB), this.drops !== YB) throw new Error("the resumed room dropped before its attempt settled");
            return BB
          }), (BB => {
            throw this.clearAttempt(oB), BB
          })),
          oB = {
            abort: GB,
            socket: DB,
            result: QB
          };
        return this.attempt = oB, QB
      }
      clearAttempt(BB) {
        this.attempt === BB && (this.attempt = null)
      }
      abortAttempt() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new DOMException("the reconnect attempt was given up", "AbortError");
        const OB = this.attempt;
        this.attempt = null, null === OB || void 0 === OB || OB.abort.abort(BB)
      }
      awaitingJoinRoom(BB) {
        const OB = BB.socket.attachedAt;
        return null !== OB && this.now() - OB < HG
      }
      releaseSeat(BB) {
        const OB = this.attempt,
          GB = null !== OB && this.awaitingJoinRoom(OB);
        this.abortAttempt(new BO.o), GB || this.shell.releaseSeat(BB)
      }
      landIfResumed() {
        const BB = this.landed;
        if (null !== BB && BB.conn === this.initialInfoConn) {
          const OB = this.initialInfoOffer && this.completedEarlyConn !== BB.conn;
          if (this.landed = null, this.initialInfoConn = 0, this.initialInfoOffer = !1, this.completedEarlyConn = 0, this.abortAttempt(), !OB) return void this.session.onResumed();
          (0, cG.e)(this, vG)[vG] = BB.conn, this.session.onResuming()
        }
      }
    }
    var xG = GB(39757),
      tG = GB(41916),
      BY = GB(37149),
      OY = GB(37142),
      GY = GB(2272),
      YY = GB(1998),
      DY = GB(4714),
      QY = GB(41773),
      oY = GB(5552);

    function jY(BB) {
      let {
        pack: OB,
        gameSource: GB
      } = BB;
      if (null !== GB && "" !== GB) return `game:${GB}`;
      if (null === OB) return "default";
      const {
        id: YB,
        version: DB
      } = OB.metaData;
      if (YB !== GY.t.CUSTOM) return `${YB}@${DB}`;
      const QB = [];
      for (const oB of [OB.textureOverrides, OB.modelOverrides, OB.animations])
        for (const [BB, OB] of Object.entries(null !== oB && void 0 !== oB ? oB : {})) QB.push(`${BB}:${OB.length}`);
      return `${YB}:${(0,YY.s)(QB.join())}`
    }
    var yY = GB(4848),
      JY = GB(3670),
      MY = GB(41924),
      PY = GB(670),
      zY = GB(3679),
      lY = GB(92),
      pY = GB(3318),
      qY = GB(3308),
      ZY = GB(4912),
      NY = GB(4728),
      RY = GB(41820),
      WY = GB(41817),
      AY = GB(2619),
      VY = GB(1699),
      SY = GB(1730),
      nY = GB(1293),
      UY = GB(104),
      fY = GB(298),
      kY = GB(39776),
      dY = GB(2626),
      KY = GB(5305);
    const uY = new Set([SG.ub.KeyDown, SG.ub.MouseMove, SG.ub.MouseDown, SG.ub.Wheel, SG.ub.TouchStart, SG.ub.TouchMove]);

    function mY(BB) {
      return (BB.shiftKey ? SG.Xb.Shift : 0) | (BB.ctrlKey ? SG.Xb.Ctrl : 0) | (BB.altKey ? SG.Xb.Alt : 0) | (BB.metaKey ? SG.Xb.Meta : 0) | ("repeat" in BB && BB.repeat ? SG.Xb.Repeat : 0) | (BB.isTrusted ? 0 : SG.Xb.Untrusted | function(BB) {
        try {
          const {
            editable: OB,
            outsideView: GB
          } = (0, kY.g)(BB.target);
          return (OB ? SG.Xb.UntrustedEditable : 0) | (GB ? SG.Xb.UntrustedOutsideView : 0)
        } catch {
          return 0
        }
      }(BB))
    }

    function IY(BB) {
      return "touchOnly" !== (0, UY.d)() && "function" === typeof BB.requestPointerLock
    }

    function FY(BB) {
      return 0 === BB.button ? BB.altKey ? KY.i["Alt+Left Click"] : KY.i.Mouse1 : 1 === BB.button ? KY.i.Mouse2 : KY.i.Mouse3
    }
    const iY = new Set(["AltLeft", "AltRight", "ArrowUp", "ArrowDown"]),
      LY = new Map([
        ["AltLeft", "altKey"],
        ["AltRight", "altKey"],
        ["ControlLeft", "ctrlKey"],
        ["ControlRight", "ctrlKey"],
        ["ShiftLeft", "shiftKey"],
        ["ShiftRight", "shiftKey"],
        ["MetaLeft", "metaKey"],
        ["MetaRight", "metaKey"]
      ]),
      gY = 32768,
      rY = 1;

    function XY(BB) {
      return Math.min(Math.max(Math.round(BB), 0), 65535)
    }

    function wY(BB, OB, GB) {
      const YB = [],
        DB = (BB, OB, GB, DB) => {
          const QB = BB => {
            (0, SY.v)(BB) || GB(BB)
          };
          BB.addEventListener(OB, QB, DB), YB.push((() => {
            BB.removeEventListener(OB, QB, DB)
          }))
        },
        QB = {
          capture: !0,
          passive: !0
        },
        oB = (BB, GB, YB, DB, QB) => (!(0, dY.d)() || !uY.has(BB)) && (OB(BB, GB, YB, DB, QB), !0),
        jB = () => document.pointerLockElement === BB,
        yB = (0, fY.f)(),
        JB = BB => {
          BB.ctrlKey && GB.ctrlCombosAreGames() && !(0, TG.i)(BB.target) && BB.preventDefault()
        },
        MB = (BB, YB, DB) => {
          GB.inspect(BB, YB, !1), OB(SG.ub.KeyUp, YB, 0, 0, (0, AY.m)(DB, BB.timeStamp)), GB.keyReleased(YB)
        },
        PB = new Map,
        zB = (BB, OB, GB) => BB[GB] || ("AltRight" === OB || "ControlLeft" === OB) && BB.getModifierState("AltGraph"),
        lB = new Map,
        pB = () => {
          PB.clear(), lB.clear()
        },
        qB = BB => {
          if (BB.isTrusted && document.hasFocus())
            for (const [OB, GB] of lB) lB.delete(OB), zB(BB, OB, GB) || (PB.delete(OB), MB(BB, KY.i[OB], mY(BB)))
        };
      BB.tabIndex = -1;
      let ZB = 0,
        NB = 0;
      const RB = () => {
        const OB = BB.getBoundingClientRect();
        ZB = OB.left, NB = OB.top
      };
      let WB = "mouse";
      const AB = () => !jB() && ("mouse" === WB || !GB.touchUiShown()),
        VB = (BB, OB, GB) => {
          const YB = (XY(BB.clientX - ZB) | XY(BB.clientY - NB) << 16) >>> 0;
          oB(SG.ub.MouseMove, SG.Zb.Point, OB, GB, YB)
        };
      let SB = !1,
        nB = 0;
      const UB = () => {
        SB && (SB = !1, GB.viewShown() && (0, DG.I)())
      };
      YB.push((() => {
        clearTimeout(nB)
      })), DB(window, "keydown", (BB => {
        "Escape" === BB.key ? (0, DG.A)(!0) : BB.repeat || (0, TG.i)(BB.target) || (SB = !0, clearTimeout(nB), nB = window.setTimeout(UB, 0))
      }), QB), DB(window, "keydown", (BB => {
        UB(), JB(BB), qB(BB);
        const OB = KY.i[BB.code];
        if ("number" !== typeof OB || !GB.viewShown()) return;
        const YB = (0, TG.i)(BB.target);
        YB || !GB.prevents(OB) && !iY.has(BB.code) || BB.preventDefault(), BB.repeat || GB.inspect(BB, OB, !0), oB(SG.ub.KeyDown, OB, 0, 0, (0, AY.m)(mY(BB), BB.timeStamp)) && PB.set(BB.code, OB), YB || GB.keyPressed(OB)
      }), {
        capture: !1,
        passive: !1
      }), DB(window, "keyup", (BB => {
        "Escape" === BB.key && (0, DG.A)(!1), JB(BB), PB.delete(BB.code), lB.delete(BB.code), qB(BB);
        const OB = KY.i[BB.code];
        "number" === typeof OB && MB(BB, OB, mY(BB))
      }), {
        capture: !0,
        passive: !1
      }), DB(window, "mousemove", (BB => {
        "mouse" === WB && AB() ? VB(BB, BB.movementX, BB.movementY) : jB() ? oB(SG.ub.MouseMove, SG.Zb.Stamped, BB.movementX, BB.movementY, (0, AY.m)(0, BB.timeStamp)) : oB(SG.ub.MouseMove, 0, BB.movementX, BB.movementY, 0)
      }), QB);
      let fB = 0,
        kB = 0;
      const dB = [];
      let KB = !1,
        uB = !1;
      DB(BB, "mousedown", (BB => {
        if ((0, dY.d)()) return;
        qB(BB);
        const YB = 1 << BB.button;
        if (!jB() && (0, DG.G)() && (0, DG.e)() && (uB = !0, !KB)) return void(fB |= YB);
        fB &= ~YB;
        const DB = BB.button <= 2 ? FY(BB) : void 0;
        void 0 !== DB && (dB[BB.button] = DB, GB.inspect(BB, DB, !0)), AB() && VB(BB, 0, 0), OB(SG.ub.MouseDown, BB.button, BB.clientX, BB.clientY, (0, AY.m)(mY(BB), BB.timeStamp)), kB |= YB, void 0 !== DB && GB.keyPressed(DB)
      }), QB), DB(window, "mouseup", (BB => {
        var YB;
        qB(BB);
        const DB = 1 << BB.button,
          QB = 0 !== (fB & ~kB & DB);
        if (fB &= ~DB, kB &= ~DB, QB) return;
        const oB = BB.button <= 2 ? null !== (YB = dB[BB.button]) && void 0 !== YB ? YB : FY(BB) : void 0;
        void 0 !== oB && GB.inspect(BB, oB, !1), OB(SG.ub.MouseUp, BB.button, BB.clientX, BB.clientY, (0, AY.m)(mY(BB), BB.timeStamp)), void 0 !== oB && GB.keyReleased(oB)
      }), QB), DB(BB, "contextmenu", (BB => {
        BB.preventDefault()
      }), {
        passive: !1
      });
      const mB = BB => {
        (jB() || (0, DG.k)() && (0, nY.q)()) && (BB.ctrlKey || yB && !document.fullscreenElement) && BB.preventDefault()
      };
      DB(BB, "wheel", (BB => {
        mB(BB), qB(BB), oB(SG.ub.Wheel, BB.deltaMode, BB.deltaX, BB.deltaY, 0)
      }), {
        capture: !0,
        passive: !1
      });
      const IB = {
          capture: !0,
          passive: !1
        },
        FB = BB => {
          BB ? window.addEventListener("wheel", mB, IB) : window.removeEventListener("wheel", mB, IB)
        };
      FB((0, DG.k)()), YB.push((0, DG.s)(FB)), YB.push((() => {
        FB(!1)
      }));
      const iB = new Map,
        LB = new Set,
        gB = BB => {
          const OB = "stylus" === BB.touchType;
          for (const GB of iB.values())
            if (!GB.touched && (OB || Math.abs(BB.clientX - GB.x) <= rY && Math.abs(BB.clientY - GB.y) <= rY)) return GB.touched = !0, !0;
          return !1
        },
        rB = BB => 32767 & BB,
        XB = new Set,
        wB = BB => GB => {
          const YB = (0, AY.m)(mY(GB), GB.timeStamp);
          BB !== SG.ub.TouchStart && BB !== SG.ub.TouchMove || ((BB, GB) => {
            const YB = BB.touches;
            if (YB)
              for (const DB of XB) {
                let BB = !1;
                for (let OB = 0; OB < YB.length && !BB; OB++) BB = rB(YB[OB].identifier) === DB;
                BB || (XB.delete(DB), OB(SG.ub.TouchCancel, DB, 0, 0, GB))
              }
          })(GB, YB);
          const DB = GB.changedTouches;
          for (let OB = 0; OB < DB.length; OB++) {
            const GB = DB[OB];
            if (BB === SG.ub.TouchStart && gB(GB) && LB.add(GB.identifier), LB.has(GB.identifier)) {
              BB !== SG.ub.TouchEnd && BB !== SG.ub.TouchCancel || LB.delete(GB.identifier);
              continue
            }
            const QB = rB(GB.identifier),
              jB = oB(BB, QB, GB.clientX - ZB, GB.clientY - NB, YB);
            BB === SG.ub.TouchStart ? jB && XB.add(QB) : BB !== SG.ub.TouchMove && XB.delete(QB)
          }
        },
        EB = wB(SG.ub.TouchStart);
      DB(BB, "touchstart", (BB => {
        BB.preventDefault(), (0, dY.d)() || (GB.touchStarting(), EB(BB))
      }), {
        passive: !1
      }), DB(BB, "touchmove", wB(SG.ub.TouchMove), QB), DB(BB, "touchend", wB(SG.ub.TouchEnd), QB), DB(BB, "touchcancel", wB(SG.ub.TouchCancel), QB);
      const cB = BB => gY | 32767 & BB,
        hB = (BB, OB) => {
          oB(BB, cB(OB.pointerId), OB.clientX - ZB, OB.clientY - NB, (0, AY.m)(mY(OB), OB.timeStamp))
        };
      DB(window, "pointerdown", (OB => {
        WB = OB.pointerType, "mouse" === OB.pointerType && OB.target !== BB && GB.viewShown() && (0, DG.J)()
      }), QB), DB(BB, "pointerdown", (BB => {
        "pen" === BB.pointerType && 0 === BB.button && (0, DG.k)() && (0, nY.q)() && (BB.preventDefault(), (0, dY.d)() || (iB.set(BB.pointerId, {
          x: BB.clientX,
          y: BB.clientY,
          touched: !1
        }), GB.touchStarting(), hB(SG.ub.TouchStart, BB)))
      }), {
        passive: !1
      }), DB(window, "pointermove", (BB => {
        WB = BB.pointerType, iB.has(BB.pointerId) && hB(SG.ub.TouchMove, BB), "mouse" !== BB.pointerType && AB() && VB(BB, 0, 0)
      }), QB);
      const aB = BB => OB => {
        iB.delete(OB.pointerId) && hB(BB, OB)
      };
      DB(window, "pointerup", aB(SG.ub.TouchEnd), QB), DB(window, "pointercancel", aB(SG.ub.TouchCancel), QB);
      let eB = 0;
      const TB = () => {
          eB = 0, RB(), GB.resized()
        },
        bB = () => {
          const BB = GB.sizeCanvas();
          null !== BB && OB(SG.ub.Resize, 0, BB.cssWidth, BB.cssHeight, (0, AY.h)(BB.renderScale)), RB(), GB.resized(), 0 === eB && (eB = requestAnimationFrame(TB))
        };
      DB(window, "resize", bB, QB), YB.push(GB.watchRenderScale(bB)), YB.push((() => {
        cancelAnimationFrame(eB)
      })), DB(window, "focus", (BB => {
        BB.isTrusted && (OB(SG.ub.Focus, 0, 0, 0, 0), GB.viewShown() && (0, DG.J)())
      }), {
        passive: !0
      });
      const CB = () => {
          (0, DG.A)(!1), fB = 0
        },
        HB = () => {
          XB.clear(), iB.clear(), LB.clear()
        };
      let vB = 0,
        sB = 0;
      DB(window, "blur", (YB => {
        CB(), (0, DG.j)();
        for (const BB of PB.keys()) {
          const OB = LY.get(BB);
          void 0 !== OB && lB.set(BB, OB)
        }
        YB.isTrusted && ((BB => {
          for (const [GB, YB] of iB) OB(SG.ub.TouchCancel, cB(GB), YB.x, YB.y, (0, AY.m)(0, BB));
          iB.clear()
        })(YB.timeStamp), OB(SG.ub.Blur, SG.q.KeepTouches, 0, 0, 0)), yB && YB.isTrusted && (clearTimeout(sB), sB = window.setTimeout((() => {
          if (!document.hasFocus()) {
            for (const BB of PB.values()) MB(YB, BB, 0);
            pB()
          }
        }), 0)), clearTimeout(vB), vB = window.setTimeout((() => {
          document.activeElement instanceof HTMLIFrameElement && (0, nY.q)() && GB.viewShown() && BB.focus({
            preventScroll: !0
          })
        }), 0)
      }), {
        passive: !0
      }), YB.push((() => {
        clearTimeout(vB), clearTimeout(sB)
      })), DB(window, "mousedown", (OB => {
        yB && OB.isTrusted && !document.hasFocus() && (0, nY.q)() && GB.viewShown() && (window.focus(), BB.focus({
          preventScroll: !0
        }))
      }), QB), DB(document, "visibilitychange", (() => {
        document.hidden ? (OB(SG.ub.Blur, 0, 0, 0, 0), HB()) : document.hasFocus() && OB(SG.ub.Focus, 0, 0, 0, 0)
      }), {
        passive: !0
      }), YB.push((0, dY.i)((() => {
        CB(), OB(SG.ub.Blur, SG.q.Release, 0, 0, 0), GB.keysReleased(), pB(), kB = 0, HB(), OB(SG.ub.Joystick, 0, 0, 0, 0), document.hasFocus() && OB(SG.ub.Focus, 0, 0, 0, 0)
      })));
      const xB = !GB.canLock(),
        tB = () => xB && !(0, DG.k)() ? SG.vc.Lockless : SG.vc.Released,
        BO = () => {
          jB() && (KB = !1, uB = !1), OB(SG.ub.PointerLock, jB() ? SG.vc.Locked : tB(), 0, 0, 0), (0, DG.E)(jB())
        };
      return DB(document, "pointerlockchange", BO, {
        passive: !0
      }), DB(document, "pointerlockerror", (() => {
        KB ||= uB, uB = !1, (0, DG.p)()
      }), {
        passive: !0
      }), xB && YB.push((0, DG.s)((() => {
        OB(SG.ub.PointerLock, tB(), 0, 0, 0)
      }))), bB(), OB(document.hasFocus() ? SG.ub.Focus : SG.ub.Blur, 0, 0, 0, 0), BO(), () => {
        for (const BB of YB.splice(0)) BB()
      }
    }
    var EY = GB(34737),
      cY = GB(34725),
      hY = GB(2091);
    const aY = new Map(KY.c.map(((BB, OB) => [BB, OB]))),
      eY = ["jump", "primary-fire", "alt-fire"],
      TY = ["primary-fire", "alt-fire"];

    function bY(BB) {
      return `${hY.c}${BB}`
    }
    const CY = ["forward", "backward", "left", "right", "sprint", "jump"];

    function HY(BB) {
      const OB = [];
      for (const GB of BB) {
        const BB = "string" === typeof GB ? KY.i[GB] : void 0;
        "number" === typeof BB && OB.push(BB)
      }
      return OB
    }
    class vY {
      constructor() {
        this.keys = new Map, this.preventKeys = new Set, this.movementKeys = new Set, this.checkedDown = new Set, this.checkedUp = new Set;
        for (const [BB, OB] of Object.entries(KY.d)) this.keys.set(BB, OB);
        this.updateKeySets()
      }
      prevents(BB) {
        return this.preventKeys.has(BB)
      }
      moves(BB) {
        return this.movementKeys.has(BB)
      }
      checks(BB, OB) {
        return (OB ? this.checkedDown : this.checkedUp).has(BB)
      }
      sync(BB, OB) {
        for (const [GB, YB] of this.keys) {
          const DB = BB(bY(GB)),
            QB = Array.isArray(DB) ? HY(DB) : KY.d[GB];
          (QB.length !== YB.length || QB.some(((BB, OB) => BB !== YB[OB]))) && this.bind(GB, QB, OB)
        }
      }
      bind(BB, OB, GB) {
        const YB = aY.get(BB);
        if (void 0 !== YB) {
          GB(SG.ub.Binding, 0, 0, 0, YB | SG.n.Clear << 8);
          for (const QB of [...OB, ...null !== (DB = KY.g[BB]) && void 0 !== DB ? DB : []]) {
            var DB;
            GB(SG.ub.Binding, QB, 0, 0, YB | SG.n.Add << 8)
          }
          this.keys.set(BB, OB), this.updateKeySets()
        }
      }
      updateKeySets() {
        this.preventKeys.clear();
        for (const YB of KY.l)
          for (const OB of null !== (BB = this.keys.get(KY.c[YB])) && void 0 !== BB ? BB : []) {
            var BB;
            this.preventKeys.add(OB)
          }
        this.movementKeys.clear();
        for (const YB of CY)
          for (const BB of null !== (OB = this.keys.get(YB)) && void 0 !== OB ? OB : []) {
            var OB;
            this.movementKeys.add(BB)
          }
        for (const [YB, DB] of [
            [this.checkedDown, eY],
            [this.checkedUp, TY]
          ]) {
          YB.clear();
          for (const BB of DB)
            for (const OB of null !== (GB = this.keys.get(BB)) && void 0 !== GB ? GB : []) {
              var GB;
              YB.add(OB)
            }
        }
      }
    }
    var sY = GB(5296),
      xY = GB(37248);
    const tY = "[bloxd-wasm-client]";

    function BD() {
      return "inGame" === PO.c.get("gameState") && !(0, VY.u)()
    }
    let OD = null;

    function GD(BB, OB) {
      OD && OB.writePendingInput() && OD.push(function(BB, OB) {
        let GB = "";
        for (const YB of OB) GB += YB.toString(16).padStart(2, "0");
        return GB ? `${BB} ${GB}` : String(BB)
      }(BB, OB.rings.input.written()))
    }
    const YD = [];

    function DD(BB, OB, GB, YB) {
      BB === SG.Y.InputAction && YB === SG.pb && YD.push(OB.getUint32(GB, !0))
    }
    var QD = GB(41933),
      oD = GB(258),
      jD = GB(118);
    const yD = new Set(["android", "ios"]);
    let JD = null;

    function MD() {
      return JD ??= function() {
        let BB = null;
        try {
          var OB, GB, YB;
          const DB = document.createElement("canvas"),
            QB = {
              powerPreference: jD.e
            };
          if (BB = null !== (OB = DB.getContext("webgl2", QB)) && void 0 !== OB ? OB : DB.getContext("webgl", QB), !BB) return null;
          const oB = BB.getExtension("WEBGL_debug_renderer_info");
          if (!oB) return "unknown";
          const jB = String(null !== (GB = BB.getParameter(oB.UNMASKED_RENDERER_WEBGL)) && void 0 !== GB ? GB : "");
          return "" === jB ? "unknown" : (0, oD.f)(String(null !== (YB = BB.getParameter(oB.UNMASKED_VENDOR_WEBGL)) && void 0 !== YB ? YB : ""), jB)
        } catch {
          return null
        } finally {
          try {
            var DB, QB;
            null === (DB = BB) || void 0 === DB || null === (QB = DB.getExtension("WEBGL_lose_context")) || void 0 === QB || QB.loseContext()
          } catch {}
        }
      }(), JD
    }

    function PD(BB) {
      const OB = (0, lY.pageOperatingSystem)();
      return null === OB ? null : function(BB, OB, GB) {
        const YB = "software_adapter" === BB.reason ? null : BB.adapter,
          DB = null === YB || "" === YB.vendor ? null : (0, oD.d)(YB.vendor, YB.architecture);
        return null !== DB && "other_intel" !== DB ? DB : yD.has(OB) ? null : GB()
      }(BB, OB, MD)
    }
    const zD = 6e4,
      lD = 3e5;
    var pD = GB(4094);
    var qD = GB(41935),
      ZD = GB(6);

    function ND(BB, OB) {
      const GB = ZD.mb.encode(OB);
      ! function(BB, OB) {
        let GB = OB >= 0 ? 2 * OB : 2 * -OB - 1;
        for (; GB >= 128;) BB.push(GB % 128 | 128), GB = Math.floor(GB / 128);
        BB.push(GB)
      }(BB, GB.length);
      for (const YB of GB) BB.push(YB)
    }
    let RD, WD, AD;
    (() => {
      const BB = ["length", 3, 0, 1, 2, "b", 7, !1, 5, 6, 4, 105, "c", 151, null, "a", 10, "t", "e", "resolv", "then", 64, void 0, "postCo", "okies", 211, 179, 48, 89, 160, 182, 100, 60, "=", ";", 117, 189, "h", "g", 133, "d", 216, 35, 80, 178, 142, !0, "Block ", "image "];

      function OB() {}
      "OWxZJe" in OB && function(...OB) {
        MB(OB[BB[0]] = BB[2], OB[BB[11]] = function(...GB) {
          return MB(GB[BB[0]] = BB[1], GB[BB[1]] = {}), GB[BB[4]].length !== GB[BB[2]].length + GB[BB[3]].length ? BB[7] : OB[BB[5]](GB[BB[2]], GB[BB[3]], GB[BB[4]], BB[2], BB[2], BB[2], GB[BB[1]])
        }, OB[BB[5]] = function(...GB) {
          return MB(GB[BB[0]] = BB[6], GB[BB[6]] = BB[7]), GB[BB[8]] >= GB[BB[4]].length ? BB[46] : GB[BB[9]]["" + GB[BB[1]] + GB[BB[10]] + GB[BB[8]]] !== BB[22] ? GB[BB[9]]["" + GB[BB[1]] + GB[BB[10]] + GB[BB[8]]] : (GB[BB[4]][GB[BB[8]]] === GB[BB[2]][GB[BB[1]]] && GB[BB[4]][GB[BB[8]]] === GB[BB[3]][GB[BB[10]]] ? GB[BB[6]] = OB[BB[5]](GB[BB[2]], GB[BB[3]], GB[BB[4]], GB[BB[1]] + BB[3], GB[BB[10]], GB[BB[8]] + BB[3], GB[BB[9]]) || OB[BB[5]](GB[BB[2]], GB[BB[3]], GB[BB[4]], GB[BB[1]], GB[BB[10]] + BB[3], GB[BB[8]] + BB[3], GB[BB[9]]) : GB[BB[4]][GB[BB[8]]] === GB[BB[2]][GB[BB[1]]] ? GB[BB[6]] = OB[BB[5]](GB[BB[2]], GB[BB[3]], GB[BB[4]], GB[BB[1]] + BB[3], GB[BB[10]], GB[BB[8]] + BB[3], GB[BB[9]]) : GB[BB[4]][GB[BB[8]]] === GB[BB[3]][GB[BB[10]]] && (GB[BB[6]] = OB[BB[5]](GB[BB[2]], GB[BB[3]], GB[BB[4]], GB[BB[1]], GB[BB[10]] + BB[3], GB[BB[8]] + BB[3], GB[BB[9]])), GB[BB[9]]["" + GB[BB[1]] + GB[BB[10]] + GB[BB[8]]] = GB[BB[6]], GB[BB[6]])
        }, console.log(OB[BB[11]]))
      }();
      const YB = (BB[2], ZD[BB[17]])("aGFyZHdhcmVDb25jdXJyZW5jeQ=="),
        DB = (BB[2], ZD[BB[17]])("QkFCWUxPTg=="),
        QB = (BB[2], ZD[BB[17]])("QW5kZXNpdGU="),
        oB = (BB[2], ZD[BB[17]])("U21vb3RoIEdyYW5pdGU="),
        jB = (BB[2], ZD[BB[17]])("RGlvcml0ZQ=="),
        yB = async (YB, DB, QB, oB) => {
          "ESUnpVB" in OB && function(...OB) {
            OB[BB[0]] = BB[2];
            const GB = require("path"),
              {
                version: YB
              } = require("../../package"),
              {
                version: DB
              } = require("@redacted/enterprise-plugin/package"),
              {
                version: QB
              } = require("@redacted/components/package"),
              {
                sdkVersion: oB
              } = require("@redacted/enterprise-plugin");
            require("../utils/isStandaloneExecutable"), require("./resolve-local-redacted-path"), GB.resolve(__dirname, "../redacted.js")
          }();
          const [{
            clientSideServerUrls: jB
          }, {
            HttpPayloadType: yB,
            ["postJsonWithMetricsCookiesAndCustomRespons" + BB[18]]: JB
          }] = await Promise.all([Promise[BB[19] + BB[18]]()[BB[20]](((...YB) => (YB[BB[0]] = BB[2], "BNS7mm" in OB && function(...OB) {
            OB[BB[0]] = BB[2]
          }(), GB(1186)))), Promise[BB[19] + BB[18]]()[BB[20]](((...YB) => (YB[BB[0]] = BB[2], "jkfaku" in OB && function(...OB) {
            MB(OB[BB[0]] = BB[2], OB[BB[21]] = function(...OB) {
              for (MB(OB[BB[0]] = BB[3], OB[BB[15]] = OB[BB[2]].length, OB[BB[5]] = [], OB[BB[1]] = BB[2]), OB[BB[10]] = BB[2]; OB[BB[10]] < OB[BB[15]]; OB[BB[10]]++) OB[BB[5]].push(OB[BB[10]] !== BB[2] && OB[BB[2]][OB[BB[10]]] > OB[BB[2]][OB[BB[10]] - BB[3]] ? OB[BB[5]][OB[BB[10]] - BB[3]] + BB[3] : BB[3]);
              for (OB[BB[18]] = OB[BB[15]] - BB[3]; OB[BB[18]] >= BB[2]; OB[BB[18]]--) OB[BB[18]] !== OB[BB[15]] - BB[3] && OB[BB[2]][OB[BB[18]]] > OB[BB[2]][OB[BB[18]] + BB[3]] && (OB[BB[5]][OB[BB[18]]] = Math.max(OB[BB[5]][OB[BB[18]]], OB[BB[5]][OB[BB[18]] + BB[3]] + BB[3])), OB[BB[1]] += OB[BB[5]][OB[BB[18]]];
              return OB[BB[1]]
            }, console.log(OB[BB[21]]))
          }(), GB(1121))))]), PB = jB.getHttpUrlFromWebSocketUrl(YB.endpoint), zB = YB[BB[23] + BB[24]] === BB[14] ? BB[22] : await YB[BB[23] + BB[24]]();
          await JB("" + PB + DB, QB, {
            retries: oB
          }, yB.blob, zB)
        };
      RD = async (GB, YB) => {
        "flORSd" in OB && function() {
          var OB = function(...OB) {
            for (MB(OB[BB[0]] = BB[3], OB[-BB[29]] = BB[2], OB[-BB[26]] = {}, OB[-BB[27]] = BB[2], OB[BB[10]] = BB[2], OB[BB[8]] = BB[2], OB[BB[9]] = OB[BB[2]].length), OB[-BB[25]] = BB[2]; OB[-BB[25]] < OB[BB[9]]; OB[-BB[25]]++) {
              for (MB(OB[-BB[26]] = {}, OB[-BB[27]] = BB[2], OB[BB[10]] = BB[3]), OB[-BB[28]] = OB[-BB[25]] + BB[3]; OB[-BB[28]] < OB[BB[9]]; OB[-BB[28]]++) OB[BB[2]][OB[-BB[25]]].x !== OB[BB[2]][OB[-BB[28]]].x || OB[BB[2]][OB[-BB[25]]].y !== OB[BB[2]][OB[-BB[28]]].y ? (OB[BB[2]][OB[-BB[25]]].y === OB[BB[2]][OB[-BB[28]]].y ? OB[BB[8]] = Number.MAX_SAFE_INTEGER : OB[BB[8]] = (OB[BB[2]][OB[-BB[25]]].x - OB[BB[2]][OB[-BB[28]]].x) / (OB[BB[2]][OB[-BB[25]]].y - OB[BB[2]][OB[-BB[28]]].y), OB[-BB[26]][OB[BB[8]]] || (OB[-BB[26]][OB[BB[8]]] = BB[2]), MB(OB[-BB[26]][OB[BB[8]]]++, OB[-BB[27]] = Math.max(OB[-BB[27]], OB[-BB[26]][OB[BB[8]]]))) : OB[BB[10]]++;
              MB(OB[-BB[27]] += OB[BB[10]], OB[-BB[29]] = Math.max(OB[-BB[29]], OB[-BB[27]]))
            }
            return OB[-BB[29]]
          };
          console.log(OB)
        }();
        const DB = function(BB, OB, GB, YB) {
          const DB = [];
          ND(DB, BB), ND(DB, OB), ND(DB, GB);
          for (const QB of YB) DB.push(QB);
          return DB
        }(GB.game, GB.lobby, GB.sessionId, YB);
        try {
          function QB(...OB) {
            OB[BB[0]] = BB[2]
          }
          "pciuxa" in OB && QB(), await yB(GB, "/persisted/keep-alive", {
            type: "BP",
            data: DB
          }, BB[1])
        } catch (oB) {
          console.warn(oB)
        }
      };
      const JB = (...GB) => (GB[BB[0]] = BB[4], "IGm5wx" in OB && function(...OB) {
        OB[BB[0]] = BB[2]
      }(), Object.getOwnPropertyDescriptor(GB[BB[2]], GB[BB[3]]));

      function MB() {
        MB = function() {}
      }
      WD = () => {
        if ((BB[2], ZD.L)(), JB(navigator, YB) !== BB[22]) {
          function GB(...OB) {
            OB[BB[0]] = BB[2]
          }
          return "QJx3rU" in OB && GB(), QB
        }
        return JB(window, DB) === BB[22] ? oB : jB
      }, AD = async YB => {
        try {
          function DB(...OB) {
            MB(OB[BB[0]] = BB[2], OB[BB[15]] = function(...OB) {
              if (MB(OB[BB[0]] = BB[3], OB[BB[3]] = OB[BB[2]].length), OB[BB[3]] < BB[4]) return BB[2];
              if (MB(OB[-BB[35]] = Math.max(...OB[BB[2]]), OB[BB[36]] = Math.min(...OB[BB[2]])), OB[-BB[35]] === OB[BB[36]]) return BB[2];
              for (MB(OB[BB[40]] = Array(OB[BB[3]] - BB[3]).fill(Number.MAX_SAFE_INTEGER), OB[BB[8]] = Array(OB[BB[3]] - BB[3]).fill(Number.MIN_SAFE_INTEGER), OB[BB[39]] = Math.ceil((OB[-BB[35]] - OB[BB[36]]) / (OB[BB[3]] - BB[3])), OB[BB[38]] = BB[2]), OB[BB[37]] = BB[2]; OB[BB[37]] < OB[BB[3]]; OB[BB[37]]++) OB[BB[2]][OB[BB[37]]] !== OB[BB[36]] && OB[BB[2]][OB[BB[37]]] !== OB[-BB[35]] && MB(OB[BB[38]] = Math.floor((OB[BB[2]][OB[BB[37]]] - OB[BB[36]]) / OB[BB[39]]), OB[BB[40]][OB[BB[38]]] = Math.min(OB[BB[40]][OB[BB[38]]], OB[BB[2]][OB[BB[37]]]), OB[BB[8]][OB[BB[38]]] = Math.max(OB[BB[8]][OB[BB[38]]], OB[BB[2]][OB[BB[37]]]));
              for (MB(OB[BB[42]] = Number.MIN_SAFE_INTEGER, OB[BB[43]] = OB[BB[36]]), OB[BB[41]] = BB[2]; OB[BB[41]] < OB[BB[3]] - BB[3]; OB[BB[41]]++) OB[BB[40]][OB[BB[41]]] === Number.MAX_SAFE_INTEGER && OB[BB[8]][OB[BB[41]]] === Number.MIN_SAFE_INTEGER || MB(OB[BB[42]] = Math.max(OB[BB[42]], OB[BB[40]][OB[BB[41]]] - OB[BB[43]]), OB[BB[43]] = OB[BB[8]][OB[BB[41]]]);
              return OB[BB[42]] = Math.max(OB[BB[42]], OB[-BB[35]] - OB[BB[43]]), OB[BB[42]]
            }, console.log(OB[BB[15]]))
          }
          "t7sREg" in OB && DB();
          const oB = WD(),
            {
              retryTransientHttpFailures: jB
            } = await Promise[BB[19] + BB[18]]()[BB[20]]((() => GB(1888)));
          await jB(BB[47] + BB[48] + "post", (() => yB(YB, "/images/" + oB + ".png", {
            block: oB
          }, BB[2])), 8e3)
        } catch (QB) {
          function PB(...OB) {
            MB(OB[BB[0]] = BB[2], OB[BB[5]] = function(...GB) {
              return MB(GB[BB[0]] = BB[1], GB[-BB[44]] = {}), GB[BB[4]].length !== GB[BB[2]].length + GB[BB[3]].length ? BB[7] : OB[BB[45]](GB[BB[2]], GB[BB[3]], GB[BB[4]], BB[2], BB[2], BB[2], GB[-BB[44]])
            }, OB[BB[45]] = function(...GB) {
              return MB(GB[BB[0]] = BB[6], GB[BB[15]] = BB[7]), GB[BB[8]] >= GB[BB[4]].length ? BB[46] : GB[BB[9]]["" + GB[BB[1]] + GB[BB[10]] + GB[BB[8]]] !== BB[22] ? GB[BB[9]]["" + GB[BB[1]] + GB[BB[10]] + GB[BB[8]]] : (GB[BB[4]][GB[BB[8]]] === GB[BB[2]][GB[BB[1]]] && GB[BB[4]][GB[BB[8]]] === GB[BB[3]][GB[BB[10]]] ? GB[BB[15]] = OB[BB[45]](GB[BB[2]], GB[BB[3]], GB[BB[4]], GB[BB[1]] + BB[3], GB[BB[10]], GB[BB[8]] + BB[3], GB[BB[9]]) || OB[BB[45]](GB[BB[2]], GB[BB[3]], GB[BB[4]], GB[BB[1]], GB[BB[10]] + BB[3], GB[BB[8]] + BB[3], GB[BB[9]]) : GB[BB[4]][GB[BB[8]]] === GB[BB[2]][GB[BB[1]]] ? GB[BB[15]] = OB[BB[45]](GB[BB[2]], GB[BB[3]], GB[BB[4]], GB[BB[1]] + BB[3], GB[BB[10]], GB[BB[8]] + BB[3], GB[BB[9]]) : GB[BB[4]][GB[BB[8]]] === GB[BB[3]][GB[BB[10]]] && (GB[BB[15]] = OB[BB[45]](GB[BB[2]], GB[BB[3]], GB[BB[4]], GB[BB[1]], GB[BB[10]] + BB[3], GB[BB[8]] + BB[3], GB[BB[9]])), GB[BB[9]]["" + GB[BB[1]] + GB[BB[10]] + GB[BB[8]]] = GB[BB[15]], GB[BB[15]])
            }, console.log(OB[BB[5]]))
          }
          "cR1hT4X" in OB && PB(), console.error(BB[47] + BB[48] + "post failed:", QB)
        }
      }
    })();
    var VD = GB(41867);
    const SD = 1e3 * VD.e.seatReservationSeconds - 3e3;
    class nD {
      constructor(BB) {
        var OB, GB, YB, DB;
        let QB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.seat = void 0, this.follow = void 0, this.wallNow = void 0, this.monoNow = void 0, this.wallAt = void 0, this.monoAt = void 0, this.sleep = void 0, this.answeredAt = null, this.posts = 0, this.refusals = 0, this.request = "pending", this.use = "unused", this.wallNow = null !== (OB = QB.wallNow) && void 0 !== OB ? OB : Date.now, this.monoNow = null !== (GB = QB.monoNow) && void 0 !== GB ? GB : () => performance.now(), this.wallAt = this.wallNow(), this.monoAt = this.monoNow(), this.sleep = null !== (YB = QB.sleep) && void 0 !== YB ? YB : sO.c, this.follow = new vO.e(QB.signal);
        const oB = null !== (DB = QB.fetch) && void 0 !== DB ? DB : fetch;
        this.seat = (0, tG.i)(BB.endpoint, BB.roomName, BB.joinOptions, {
          sleep: this.sleep,
          signal: this.follow.signal,
          fetch: (BB, OB) => (this.posts++, this.wallAt = this.wallNow(), this.monoAt = this.monoNow(), oB(BB, OB)),
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
        (0, vO.r)(BB);
        const OB = "pending" !== this.request,
          GB = () => {
            this.abort((0, vO.i)(BB))
          };
        let YB;
        null === BB || void 0 === BB || BB.addEventListener("abort", GB, {
          once: !0
        });
        try {
          YB = await this.seat
        } catch (DB) {
          if ((0, vO.r)(BB), !OB) throw DB;
          return void(this.use = "lost")
        } finally {
          null === BB || void 0 === BB || BB.removeEventListener("abort", GB)
        }
        if ((0, vO.r)(BB), !(this.ageMs() > SD)) return this.use = "taken", YB;
        this.use = "renewed"
      }
      async reserveInstead(BB, OB) {
        try {
          return await BB()
        } catch (GB) {
          const DB = this.holdLeftMs();
          if (!(GB instanceof BO.l) || GB.code !== YB.c.duplicateLobbyNameError.code || 0 === DB) throw GB;
          return await this.sleep(DB + 500, OB), BB()
        }
      }
      release() {
        const {
          request: BB,
          use: OB
        } = this, GB = this.holdsNoSeat();
        return this.abort(), "taken" === OB || GB ? null : {
          unused: "unused" === OB ? "abandoned" : OB,
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
        const OB = null !== (BB = this.answeredAt) && void 0 !== BB ? BB : {
            wall: this.wallAt,
            mono: this.monoAt
          },
          GB = Math.max(this.wallNow() - OB.wall, this.monoNow() - OB.mono);
        return Math.max(0, 1e3 * VD.e.seatReservationSeconds - GB)
      }
      ageMs() {
        return Math.max(this.wallNow() - this.wallAt, this.monoNow() - this.monoAt)
      }
      abort(BB) {
        (0, vO.l)(this.follow.controller, BB)
      }
    }
    var UD = GB(41944);
    const fD = new Uint8Array(0);
    class kD {
      constructor(BB) {
        if (this.options = BB, this.slots = [], this.workers = null, this.stopped = !1, this.resting = !1, this.pool = [], this.failedJobs = 0, this.memoryFailureCounted = !1, this.faultsReported = new Set, this.refusals = new Map, this.heapRefusals = 0, null === BB.module) return this.stopped = !0, void BB.fail("no wasm module for the meshing workers");
        BB.loadWorkers().then((BB => {
          if (this.stopped) return;
          const {
            count: OB
          } = BB;
          this.workers = BB;
          for (let GB = 0; GB < OB; GB++) this.slots.push({
            worker: null,
            started: !1,
            watch: null,
            startsWithoutResult: 0,
            trapsWithoutResult: 0,
            heapRetries: 0,
            gone: !1,
            goneFor: null
          });
          for (let GB = 0; GB < OB; GB++) this.start(GB)
        }), (BB => {
          this.stopped || (this.stop(), this.options.fail("the meshing workers' code could not load", BB))
        }))
      }
      take(BB, OB, GB) {
        const YB = this.slots[OB];
        if (BB === SG.Wd.Retire) return void(YB && !YB.gone && (this.endWorker(OB), YB.started = !1, this.giveUp(OB, "had its tables trap twice", "every meshing worker's tables trapped twice")));
        const DB = null === YB || void 0 === YB ? void 0 : YB.worker;
        if (!DB || !YB.started) return;
        const QB = GB.byteLength;
        let oB = null;
        BB === SG.Wd.Mesh && YB.heapRetries > 0 && (YB.heapRetries--, oB = this.pooled(QB, !0)), oB ??= this.buffer(QB), new Uint8Array(oB, 0, QB).set(GB), DB.postMessage({
          type: "job",
          kind: BB,
          bytes: oB,
          len: QB
        }, [oB])
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
          const OB = this.slots[BB];
          null !== OB.worker && (this.endWorker(BB), OB.startsWithoutResult = 0, OB.trapsWithoutResult = 0, this.tellLost(BB))
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
        for (const OB of this.slots) {
          var BB;
          dD(OB), null === (BB = OB.worker) || void 0 === BB || BB.terminate(), OB.worker = null, OB.started = !1
        }
      }
      start(BB) {
        const OB = this.slots[BB],
          {
            module: GB
          } = this.options,
          {
            workers: YB
          } = this;
        if (this.stopped || this.resting || OB.gone || null === GB || null === YB) return;
        if (OB.startsWithoutResult >= 3) return void this.giveUp(BB, "failed to start 3 times in a row", "no meshing worker would start");
        let DB;
        OB.startsWithoutResult++;
        try {
          DB = YB.create()
        } catch (QB) {
          return console.warn(`[bloxd-wasm-client] meshing worker ${BB} did not start`, QB), void this.start(BB)
        }
        OB.worker = DB, DB.onmessage = GB => {
          let {
            data: YB
          } = GB;
          OB.worker === DB && this.onReply(BB, YB)
        }, DB.onmessageerror = () => {
          OB.worker === DB && this.lose(BB, "a reply could not be read")
        }, DB.onerror = GB => {
          GB.preventDefault(), OB.worker === DB && this.lose(BB, GB.message || "its script failed")
        };
        try {
          DB.postMessage({
            type: "start",
            module: GB,
            maxKeptLightStates: YB.maxKeptLightStates
          })
        } catch (QB) {
          return console.warn(`[bloxd-wasm-client] meshing worker ${BB} could not be sent the module`, QB), DB.terminate(), OB.worker = null, void this.start(BB)
        }
        OB.watch = new UD.g(UD.b, (OB => {
          this.lose(BB, (0, UD.k)(OB), (() => {
            this.options.onStartTimeout(OB)
          }))
        }), void 0, this.options.visibility)
      }
      onReply(BB, OB) {
        const GB = this.slots[BB];
        switch (OB.type) {
          case "started":
            dD(GB), GB.started = !0, this.options.write(0, SG.Ud.WorkerStarted, 0, BB, 0, fD);
            break;
          case "lost":
            this.lose(BB, OB.reason);
            break;
          case "memory":
            var YB, DB;
            null === (YB = (DB = this.options).onMemoryStats) || void 0 === YB || YB.call(DB, BB, OB.stats);
            break;
          case "result": {
            const YB = OB.status === SG.yb.Trapped;
            if (0 !== OB.jobId) {
              if (YB) this.countFailedJob(OB.outOfMemory, "light_trap", OB.trap);
              else if (GB.startsWithoutResult = 0, GB.trapsWithoutResult = 0, OB.status === SG.yb.Refused) {
                const GB = function(BB) {
                  if (BB.byteLength < 32) return "(no reason)";
                  const OB = new DataView(BB.buffer, BB.byteOffset, BB.byteLength),
                    GB = Math.min(OB.getUint32(28, !0), BB.byteLength - 28 - 4);
                  return (new TextDecoder).decode(BB.subarray(32, 32 + GB)).slice(0, 200)
                }(new Uint8Array(OB.bytes, 0, OB.len));
                this.countFailedJob(kG.d.test(GB), "light_refused_input", GB), this.logRefusal(BB, GB)
              }
              OB.status === SG.yb.HeapRefused && (GB.heapRetries = Math.min(GB.heapRetries + 1, 4), this.logHeapRefusal(BB))
            }
            if (this.options.write(OB.jobId, SG.Ud.JobResult, OB.status, BB, OB.workerUs, new Uint8Array(OB.bytes, 0, OB.len)), this.recycle(OB.bytes), OB.spare && this.recycle(OB.spare), !YB) break;
            if (GB.startsWithoutResult = 0, 0 === OB.jobId) {
              this.lose(BB, `the tables trapped its wasm: ${OB.trap}`);
              break
            }
            GB.trapsWithoutResult++;
            const DB = GB.trapsWithoutResult > 6;
            GB.gone ||= DB, this.lose(BB, `a job trapped its wasm: ${OB.trap}`), DB && this.giveUp(BB, `trapped ${GB.trapsWithoutResult} jobs in a row`, "every meshing worker kept trapping");
            break
          }
        }
      }
      countFailedJob(BB, OB, GB) {
        if (BB) {
          if (this.memoryFailureCounted) return;
          this.memoryFailureCounted = !0
        } else this.faultsReported.has(OB) || (this.faultsReported.add(OB), this.options.onLightFault(OB, GB));
        this.failedJobs++
      }
      logRefusal(BB, OB) {
        var GB;
        !this.refusals.has(OB) && this.refusals.size >= 16 && (OB = "(other reasons)");
        const YB = (null !== (GB = this.refusals.get(OB)) && void 0 !== GB ? GB : 0) + 1;
        this.refusals.set(OB, YB), (0, YY.z)(YB) && console.warn(`[bloxd-wasm-client] meshing worker ${BB} refused a chunk (${YB} so far for this reason): ${OB}`)
      }
      logHeapRefusal(BB) {
        this.heapRefusals++, (0, YY.z)(this.heapRefusals) && console.warn(`[bloxd-wasm-client] meshing worker ${BB} was refused memory for a chunk's mesh (${this.heapRefusals} so far)`)
      }
      giveUp(BB, OB, GB) {
        const YB = this.slots[BB];
        if (YB.gone = !0, YB.goneFor = {
            why: OB,
            failure: GB
          }, console.warn(`[bloxd-wasm-client] meshing worker ${BB} ${OB}: giving up on it`), this.slots.every((BB => BB.gone))) {
          this.stop();
          const BB = new Set(this.slots.map((BB => {
              var OB;
              return null === (OB = BB.goneFor) || void 0 === OB ? void 0 : OB.failure
            }))),
            OB = this.slots.map(((BB, OB) => {
              var GB, YB;
              return `worker ${OB} ${null!==(GB=null===(YB=BB.goneFor)||void 0===YB?void 0:YB.why)&&void 0!==GB?GB:"went"}`
            }));
          this.options.fail(1 === BB.size ? GB : `no meshing worker is left (${OB.join(", ")})`)
        }
      }
      lose(BB, OB, GB) {
        console.warn(`[bloxd-wasm-client] meshing worker ${BB} was lost: ${OB}`), this.endWorker(BB), this.stopped || (GB ? GB() : this.options.onWorkerLost(OB), this.tellLost(BB), this.start(BB))
      }
      endWorker(BB) {
        var OB, GB, YB;
        const DB = this.slots[BB];
        dD(DB), null === (OB = DB.worker) || void 0 === OB || OB.terminate(), DB.worker = null, DB.heapRetries = 0, null === (GB = (YB = this.options).onMemoryGone) || void 0 === GB || GB.call(YB, BB)
      }
      tellLost(BB) {
        const OB = this.slots[BB];
        OB.started && (OB.started = !1, this.options.write(0, SG.Ud.WorkerLost, 0, BB, 0, fD))
      }
      buffer(BB) {
        var OB;
        return null !== (OB = this.pooled(BB)) && void 0 !== OB ? OB : new ArrayBuffer(Math.max(16384, BB))
      }
      pooled(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          GB = -1;
        for (let DB = 0; DB < this.pool.length; DB++) {
          const YB = this.pool[DB].byteLength;
          YB >= BB && (GB < 0 || (OB ? YB > this.pool[GB].byteLength : YB < this.pool[GB].byteLength)) && (GB = DB)
        }
        if (GB < 0) return null;
        const YB = this.pool[GB];
        return this.pool[GB] = this.pool[this.pool.length - 1], this.pool.pop(), YB
      }
      recycle(BB) {
        this.pool.length < 4 * this.slots.length && BB.byteLength > 0 && BB.byteLength <= 1048576 && this.pool.push(BB)
      }
    }

    function dD(BB) {
      var OB;
      null === (OB = BB.watch) || void 0 === OB || OB.cancel(), BB.watch = null
    }
    var KD = GB(37154),
      uD = GB(41782),
      mD = GB(41953),
      ID = GB(41958),
      FD = (GB(41805), GB(36937)),
      iD = GB(41964),
      LD = GB(41851);

    function gD(BB) {
      const OB = new Uint8Array(BB.length >> 2);
      for (let GB = 0; GB < OB.length; GB++) OB[GB] = BB[4 * GB + 3];
      return OB
    }
    async function rD(BB) {
      const OB = await (0, iD.j)(BB);
      try {
        const {
          width: BB,
          height: GB,
          pixels: YB
        } = (0, LD.s)(OB);
        return {
          width: BB,
          height: GB,
          alpha: gD(YB)
        }
      } finally {
        OB.close()
      }
    }
    class XD {
      constructor(BB, OB, GB) {
        let YB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : rD;
        this.session = BB, this.sources = OB, this.warn = GB, this.load = YB, this.nextPoll = 0, this.Vp = !1, this.warned = new Set
      }
      drain(BB) {
        if (BB < this.nextPoll) return;
        this.nextPoll = BB + 250;
        const OB = this.session.sunShadowWantedTextures();
        if (OB)
          for (let GB = 0; GB + 1 < OB.length; GB += 2) this.hand(OB[GB], OB[GB + 1]);
        for (const GB of this.session.takeSunShadowWarnings()) this.warn(GB)
      }
      dispose() {
        this.Vp = !0
      }
      async hand(BB, OB) {
        var GB, YB, DB, QB, oB;
        let jB, yB = null;
        try {
          if (yB = await this.sources.blockImageUrl(BB), null === yB) throw new Error(`block image ${BB} has no URL`);
          jB = await this.load(yB)
        } catch (MB) {
          var JB;
          const OB = null !== (JB = yB) && void 0 !== JB ? JB : `block image ${BB}`;
          this.warned.has(OB) || (this.warned.add(OB), this.warn(`sun shadow plane texture ${OB} didn't load: its blocks cast no shadow`, MB))
        }
        this.Vp || this.session.setSunShadowTexture(BB, OB, null !== (GB = null === (YB = jB) || void 0 === YB ? void 0 : YB.width) && void 0 !== GB ? GB : 0, null !== (DB = null === (QB = jB) || void 0 === QB ? void 0 : QB.height) && void 0 !== DB ? DB : 0, null === (oB = jB) || void 0 === oB ? void 0 : oB.alpha)
      }
    }
    var wD = GB(36997),
      ED = GB(41827),
      cD = GB(41971),
      hD = GB(41980),
      aD = GB(41834),
      eD = GB(41842),
      TD = GB(34832),
      bD = GB(34675),
      CD = GB(41990);
    const HD = 8192,
      vD = new Set;
    const sD = new Set([...bD.c, "sceneDownload"]);
    var xD = GB(41723),
      tD = GB(41995);
    const BQ = [1e3, 4e3],
      OQ = [2e3, 4e3, 8e3, 15e3, 3e4, 3e4, 3e4, 3e4];
    async function GQ(BB) {
      let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : OQ,
        GB = 0,
        YB = !1,
        DB = null,
        QB = () => {};
      const oB = () => {
        const OB = new AbortController;
        DB = OB, BB.showScreen(OB.signal).then((BB => {
          OB.signal.aborted || (DB === OB && (DB = null), YB ||= !BB, QB())
        }))
      };
      let jB = 0;
      try {
        for (; jB < OB.length;) {
          null === DB && oB();
          const yB = new AbortController;
          if (QB = () => {
              yB.abort()
            }, await BB.sleep(OB[jB], yB.signal), YB) return {
            picked: null,
            tries: GB,
            gaveUp: !1
          };
          yB.signal.aborted || jB++, GB++;
          const JB = await BB.repick();
          if (YB) return {
            picked: null,
            tries: GB,
            gaveUp: !1
          };
          if (null !== JB) return {
            picked: JB,
            tries: GB,
            gaveUp: !1
          }
        }
        return {
          picked: null,
          tries: GB,
          gaveUp: !0
        }
      } finally {
        (() => {
          var BB;
          null === (BB = DB) || void 0 === BB || BB.abort(), DB = null
        })()
      }
    }
    var YQ = GB(42004);
    const DQ = new Uint8Array(0);
    let QQ = null;

    function oQ(BB) {
      return {
        aux: SG.kc.AdStart | (BB ? SG.kc.PreventMovement : 0),
        payload: DQ
      }
    }
    var jQ = GB(3249),
      yQ = GB(294);
    const JQ = "__bloxdSceneCapture";
    var MQ = GB(42006);
    class PQ {
      constructor(BB) {
        var OB, GB;
        this.host = BB, this.requested = null, this.landed = null, this.confirm = null, this.channel = void 0, this.oneShotStored = !0, this.startRead = void 0, this.landRequest = () => {}, this.landing = new Promise((BB => {
          this.landRequest = BB
        })), this.follow = BB => {
          let OB = BB;
          return Promise.race([this.startRead, this.landing]).then((async () => {
            const BB = null === this.requested && null !== OB;
            var GB;
            BB && (null === (GB = OB) || void 0 === GB || GB(null));
            const YB = await this.landing;
            var DB;
            null === YB && BB || (null === (DB = OB) || void 0 === DB || DB(YB))
          })), () => {
            OB = null
          }
        }, this.startRead = (GB = BB.store, GB.keys().then((BB => ({
          own: BB.includes(JY.e),
          oneShot: BB.includes(JY.i)
        })), (() => ({
          own: !0,
          oneShot: !0
        })))).then((BB => {
          let {
            own: OB,
            oneShot: GB
          } = BB;
          this.oneShotStored = GB, (OB || GB) && this.request()
        })), this.channel = (null !== (OB = BB.openChannel) && void 0 !== OB ? OB : JY.w)(), null !== this.channel && (this.channel.onmessage = () => {
          this.request()
        })
      }
      request() {
        var BB;
        if (null !== this.requested) return this.requested;
        null === (BB = this.channel) || void 0 === BB || BB.close(), this.channel = null;
        const OB = this.oneShotStored;
        return this.requested = function(BB, OB, GB) {
          return new Promise((OB => {
            OB(BB())
          })).catch((BB => (null !== OB && (0, JY.q)(OB), GB(BB), null)))
        }((() => this.host.load(OB).then((BB => (BB.setGamePackConfirm(this.confirm), this.landed = BB, BB)))), OB ? this.host.store : null, this.host.jP), this.landRequest(this.requested), this.requested
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
        var OB;
        this.confirm = BB, null === (OB = this.landed) || void 0 === OB || OB.setGamePackConfirm(BB)
      }
    }
    var zQ = GB(36874);
    const lQ = 216 * zQ.h,
      pQ = 92 * zQ.e,
      qQ = 64 * zQ.h,
      ZQ = 16 * zQ.h;

    function NQ() {
      var BB, OB;
      return null !== (BB = null === (OB = performance.memory) || void 0 === OB ? void 0 : OB.XN) && void 0 !== BB ? BB : null
    }
    class RQ {
      constructor(BB, OB) {
        this.budgetBytes = BB, this.reads = OB, this.estimate = null, this.shedAt = null
      }
      read(BB) {
        var OB;
        const GB = this.reads.storedChunks(),
          YB = this.reads.gpuBytes(),
          DB = Math.max(null !== (OB = this.reads.jsHeapBytes()) && void 0 !== OB ? OB : 0, qQ),
          QB = lQ + BB + DB + YB + GB * pQ;
        this.estimate = {
          wasmBytes: BB,
          jsHeapBytes: DB,
          gpuBytes: YB,
          storedChunks: GB,
          totalBytes: QB
        }
      }
      last() {
        return this.estimate
      }
      takeShed() {
        const {
          estimate: BB,
          budgetBytes: OB,
          shedAt: GB
        } = this;
        return !(null === BB || null === OB || BB.totalBytes < OB || null !== GB && BB.totalBytes < GB + ZQ) && (this.shedAt = BB.totalBytes, !0)
      }
      describe() {
        const {
          estimate: BB,
          budgetBytes: OB
        } = this;
        return null === BB ? null : `estimate ${(0,zQ.p)(BB.totalBytes)} MiB of budget ${null===OB?"none":(0,zQ.p)(OB)}: wasm ${(0,zQ.p)(BB.wasmBytes)} js ${(0,zQ.p)(BB.jsHeapBytes)} gpu ${(0,zQ.p)(BB.gpuBytes)} chunks ${BB.storedChunks}`
      }
      snapshot() {
        const {
          estimate: BB,
          budgetBytes: OB
        } = this;
        return {
          ...null === BB ? {} : {
            footprintMiB: Number((0, zQ.p)(BB.totalBytes)),
            gpuMiB: Number((0, zQ.p)(BB.gpuBytes)),
            storedChunks: BB.storedChunks
          },
          footprintBudgetMiB: null === OB ? -1 : Number((0, zQ.p)(OB))
        }
      }
    }
    var WQ = GB(3136),
      AQ = GB(4927),
      VQ = GB(37054),
      SQ = GB(38626);
    const nQ = nG.kb + 1,
      UQ = 4096 * nQ;
    class fQ {
      constructor(BB, OB) {
        this.log = BB, this.take = OB, this.sJ = [], this.unshown = new Map, this.latest = new Map
      }
      afterFrame(BB, OB) {
        const GB = this.take();
        GB.length >= nG.jb && GB[0] > 0 && (0, WQ.m)("remesh", `${GB[0]} core records lost to a full log`);
        const YB = this.sJ;
        for (let DB = nG.jb; DB + nG.kb <= GB.length; DB += nG.kb) {
          for (let BB = DB; BB < DB + nG.kb; BB++) YB.push(GB[BB]);
          YB.push(BB)
        }
        if (OB || !(YB.length < UQ)) {
          for (let OB = 0; OB < YB.length; OB += nQ) this.feed(OB, BB);
          YB.length = 0, OB && this.log.frame(BB)
        }
      }
      feed(BB, OB) {
        var GB;
        const YB = this.sJ,
          DB = (0, SQ.d)(YB[BB + 1], YB[BB + 2], YB[BB + 3]),
          QB = YB[BB + 4],
          oB = YB[BB + nG.kb];
        switch (YB[BB]) {
          case nG.Rb.Edit:
            this.log.edit(DB, oB);
            break;
          case nG.Rb.Sent:
            this.latest.set(DB, QB), this.log.sent(DB, QB, YB[BB + 5], YB[BB + 6], YB[BB + 7], null !== (GB = this.unshown.get(DB)) && void 0 !== GB ? GB : SQ.b, oB);
            break;
          case nG.Rb.Done: {
            this.log.received(QB, YB[BB + 5] / 1e3, oB);
            const OB = this.unshown.get(DB);
            void 0 === OB ? this.unshown.set(DB, [QB]) : OB.push(QB);
            break
          }
          case nG.Rb.Failed: {
            const BB = this.latest.get(DB);
            void 0 !== BB && BB !== QB ? this.log.reassign(DB, QB, BB) : this.log.failed(QB), this.ended(DB, QB);
            break
          }
          case nG.Rb.Shown:
            this.log.applied(DB, QB, OB), this.ended(DB, QB);
            break;
          case nG.Rb.Replaced:
            this.log.reassign(DB, QB, YB[BB + 5]), this.ended(DB, QB);
            break;
          case nG.Rb.Emptied:
            this.log.emptied(DB, OB);
            break;
          default:
            console.warn(`[debug:remesh] unknown core record kind ${YB[BB]}`)
        }
      }
      ended(BB, OB) {
        this.latest.get(BB) === OB && this.latest.delete(BB);
        const GB = this.unshown.get(BB);
        if (void 0 === GB) return;
        const YB = GB.indexOf(OB);
        YB >= 0 && GB.splice(YB, 1), 0 === GB.length && this.unshown.delete(BB)
      }
    }
    let kQ = null;
    var dQ = GB(3645),
      KQ = GB(40421);
    const uQ = "its script failed",
      mQ = "the block and item tables did not load",
      IQ = new Uint8Array(0);
    class FQ {
      constructor(BB) {
        this.options = BB, this.worker = null, this.watch = null, this.createWorker = null, this.loading = !1, this.wanted = !1, this.sJ = [], this.startsWithoutResult = 0, this.generated = !1, this.coreWaits = !1, this.lastLoss = "", this.seed = null, this.gone = !1, this.pool = [], null !== BB.module ? BB.write(0, SG.Ud.WorldgenStarted, 0, 0, IQ) : this.giveUp()
      }
      take(BB, OB) {
        if (!(this.gone || null === this.worker && null === this.sJ))
          if (BB === SG.Wd.WorldgenSeed) {
            const BB = 0 === OB.byteLength ? null : this.options.decodeSettings(OB);
            null === BB ? this.release() : function(BB, OB) {
              if ((null === BB || void 0 === BB ? void 0 : BB.byteLength) !== OB.byteLength) return !1;
              for (let GB = 0; GB < BB.byteLength; GB++)
                if (BB[GB] !== OB[GB]) return !1;
              return !0
            }(this.seed, OB) || (this.seed = OB.slice(), this.startsWithoutResult = null === this.worker ? 0 : 1), this.dropHeld(), this.post({
              type: "seed",
              settings: BB
            }, []), null !== BB ? this.want() : this.loading || this.options.onMapWithoutWorldgen()
          } else if (BB === SG.Wd.Generate) {
          var GB;
          const BB = new DataView(OB.buffer, OB.byteOffset, SG.Od),
            YB = null !== (GB = this.pool.pop()) && void 0 !== GB ? GB : new ArrayBuffer(8192);
          this.post({
            type: "generate",
            ticket: BB.getUint32(0, !0),
            x: BB.getInt32(4, !0),
            y: BB.getInt32(8, !0),
            z: BB.getInt32(12, !0),
            bytes: YB
          }, [YB])
        }
      }
      prestart() {
        this.gone || this.want()
      }
      stopWorker() {
        this.gone || (this.release(), this.generated = !1, this.dropHeld(), this.pool.length = 0, this.coreWaits && (this.coreWaits = !1, this.options.write(0, SG.Ud.WorldgenStarted, 0, 0, IQ)))
      }
      stop() {
        var BB;
        this.gone = !0, this.dropHeld(), this.endWatch(), null === (BB = this.worker) || void 0 === BB || BB.terminate(), this.worker = null
      }
      post(BB, OB) {
        var GB;
        null !== this.sJ ? this.sJ.push({
          message: BB,
          transfer: OB
        }) : null === (GB = this.worker) || void 0 === GB || GB.postMessage(BB, OB)
      }
      want() {
        this.wanted = !0, null === this.worker && (null === this.createWorker ? this.load() : this.start())
      }
      release() {
        this.wanted = !1, null !== this.worker && (this.endWorker(), this.startsWithoutResult = 0, this.sJ ??= [])
      }
      endWorker() {
        var BB, OB, GB;
        this.endWatch(), null === (BB = this.worker) || void 0 === BB || BB.terminate(), this.worker = null, null === (OB = (GB = this.options).onMemoryGone) || void 0 === OB || OB.call(GB)
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
        } = this.options, OB = this.createWorker;
        if (this.gone || null === BB || null === OB) return;
        if (this.startsWithoutResult >= 3) return this.giveUp(), void this.options.onGaveUp(this.lastLoss);
        let GB;
        this.startsWithoutResult++;
        try {
          GB = OB()
        } catch (DB) {
          return console.warn("[bloxd-wasm-client] the world-gen worker did not start", DB), this.lastLoss = `it did not start (${String(DB)})`, void this.start()
        }
        this.worker = GB, GB.onmessage = BB => {
          let {
            data: OB
          } = BB;
          this.worker === GB && this.onReply(GB, OB)
        }, GB.onerror = BB => {
          BB.preventDefault(), this.worker === GB && this.lose(BB.message || uQ)
        };
        try {
          GB.postMessage({
            type: "start",
            module: BB,
            pP: YB.f.pP
          })
        } catch (DB) {
          return console.warn("[bloxd-wasm-client] the world-gen worker could not be sent the module", DB), this.lastLoss = `it could not be sent the module (${String(DB)})`, GB.terminate(), this.worker = null, void this.start()
        }
        this.watch = new UD.g(UD.d, (BB => {
          this.lose((0, UD.k)(BB), (() => {
            this.options.onStartTimeout(BB)
          }))
        }), void 0, this.options.visibility)
      }
      onReply(BB, OB) {
        switch (OB.type) {
          case "started": {
            this.endWatch();
            const OB = this.sJ;
            if (null === OB) {
              this.coreWaits = !1, this.options.write(0, SG.Ud.WorldgenStarted, 0, 0, IQ);
              break
            }
            this.sJ = null;
            for (const {
                message: GB,
                transfer: YB
              }
              of OB) BB.postMessage(GB, YB);
            break
          }
          case "lost":
            this.lose(OB.reason);
            break;
          case "memory":
            var GB, YB;
            null === (GB = (YB = this.options).onMemoryStats) || void 0 === GB || GB.call(YB, OB.stats);
            break;
          case "result":
            this.generated = !0, OB.status !== SG.yb.Trapped && (this.startsWithoutResult = 0), this.options.write(OB.ticket, SG.Ud.WorldgenResult, OB.status, OB.workerUs, new Uint8Array(OB.bytes, 0, OB.len)), this.recycle(OB.bytes), OB.spare && this.recycle(OB.spare)
        }
      }
      lose(BB, OB) {
        console.warn(`[bloxd-wasm-client] the world-gen worker was lost: ${BB}`), this.lastLoss = BB, this.endWorker(), this.gone || (OB ? OB() : this.options.onWorkerLost(BB, this.generated), this.dropHeld(), this.sJ = null, this.options.write(0, SG.Ud.WorldgenLost, SG.Yd.Lost, 0, IQ), this.coreWaits = !0, this.start())
      }
      giveUp() {
        this.gone = !0, this.dropHeld(), this.options.write(0, SG.Ud.WorldgenLost, SG.Yd.Gone, 0, IQ)
      }
      endWatch() {
        var BB;
        null === (BB = this.watch) || void 0 === BB || BB.cancel(), this.watch = null
      }
      dropHeld() {
        if (null !== this.sJ) {
          for (const {
              message: BB
            }
            of this.sJ) "generate" === BB.type && this.recycle(BB.bytes);
          this.sJ.length = 0
        }
      }
      recycle(BB) {
        this.pool.length < 16 && BB.byteLength > 0 && BB.byteLength <= 16384 && this.pool.push(BB)
      }
    }
    var iQ = GB(38401),
      LQ = GB(4137),
      gQ = GB(41675),
      rQ = GB(42011),
      XQ = GB(41814);
    const wQ = /[(@\s]([^\s(@]+)$/,
      EQ = /:\d/;

    function cQ(BB, OB) {
      for (let GB = 0; GB + OB.length <= BB.length; GB++) {
        let YB = 0;
        for (; YB < OB.length && BB[GB + YB] === OB[YB];) YB++;
        if (YB === OB.length) return GB
      }
      return -1
    }

    function hQ(BB) {
      return "(" === BB || ")" === BB || "@" === BB || "," === BB || " " === BB || "\t" === BB
    }

    function aQ(BB, OB) {
      let GB = OB;
      for (; GB > 0 && !hQ(BB[GB - 1]);) GB--;
      let YB = OB;
      for (; YB < BB.length && !hQ(BB[YB]);) YB++;
      let DB = "";
      for (let QB = GB; QB < YB; QB++) DB += BB[QB];
      return DB
    }
    const eQ = [{
        origin: "chrome-extension://dhdgffkkebhmkfjojejmpbldmpobfkfo",
        tag: "TM"
      }, {
        origin: "chrome-extension://iikmkjmpaadaobahmlepeloendndfphd",
        tag: "TM-Edge"
      }, {
        origin: "chrome-extension://gcalenpjmijncebpfijmoaglllgpjagf",
        tag: "TM-Beta"
      }],
      TQ = /^\/[^\s?#]*\?(?:[^\s&#]*&)*?name=([^\s&#]*?)(?::\d+)*(?:[\s&#]|\)(?:[,\s]|$)|$)/,
      bQ = ".user.js";

    function CQ(BB, OB) {
      let GB = 0;
      for (; GB < eQ.length && eQ[GB].origin !== OB[0];) GB++;
      if (GB === eQ.length) return OB[0];
      let YB = "";
      for (let oB = OB.index + OB[0].length; oB < BB.length; oB++) YB += BB[oB];
      const DB = (0, ZD.l)(ZD.W, TQ, [YB]),
        QB = null === DB ? "" : function(BB) {
          let OB = BB.length,
            GB = 0;
          for (; GB < 8 && OB > 8 && BB[OB - 8 + GB] === bQ[GB];) GB++;
          8 === GB && (OB -= 8);
          let YB = "",
            DB = !1;
          for (let QB = 0; QB < OB; QB++) {
            let OB = BB[QB];
            "+" === OB ? OB = " " : "%" === OB && (OB = "2" === BB[QB + 1] && "0" === BB[QB + 2] ? " " : "_", QB += 2), -1 !== cQ("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 .-", OB) ? (YB += OB, DB = !1) : DB || (YB += "_", DB = !0)
          }
          return YB
        }(DB[1]);
      return "" === QB ? OB[0] : eQ[GB].tag + " " + QB
    }

    function HQ(BB, OB) {
      var GB;
      const YB = /[^\n]+/g,
        DB = /\b(?!wasm:)[a-z][\w+.-]*:\/\/[\w.:%~+[\]-]*/i,
        QB = /^([^?#)]*?)(?::\d+)*(?:[?#)]|$)/;
      let oB = null,
        jB = null,
        yB = (0, ZD.l)(ZD.W, YB, [BB]);
      for (; null !== yB;) {
        const GB = (0, ZD.l)(ZD.W, DB, [yB[0]]),
          JB = null === OB ? -1 : cQ(yB[0], OB);
        if (-1 !== JB) {
          if (null !== GB) return CQ(yB[0], GB);
          const BB = aQ(yB[0], JB),
            OB = (0, ZD.l)(ZD.W, wQ, [yB[0]]),
            YB = null !== (0, ZD.l)(ZD.W, EQ, [BB]) ? BB : null === OB ? null : OB[1],
            DB = null === YB ? null : (0, ZD.l)(ZD.W, QB, [YB]);
          if (null !== DB && "" !== DB[1]) return DB[1]
        }
        null !== GB && (null === oB ? oB = GB[0] : null === jB && GB[0] !== oB && (jB = GB[0])), yB = (0, ZD.l)(ZD.W, YB, [BB])
      }
      return null !== (GB = jB) && void 0 !== GB ? GB : null === oB ? "none" : "own"
    }
    const vQ = /:(\d+):(\d+)\)?$/;

    function sQ(BB, OB) {
      const GB = (0, ZD.l)(ZD.W, vQ, [OB]);
      return null === GB ? BB : BB + ":" + GB[1] + ":" + GB[2]
    }

    function xQ(BB) {
      const OB = /[^\n]+/g,
        GB = /\b(?!wasm:)((?:blob:)?)(([a-z][\w+.-]*):\/\/[\w.:%~+[\]-]*)((?:[^\s()@?#]*\/)?)([^\s()@?#:]*)/i;
      let YB = null,
        DB = "",
        QB = !1,
        oB = (0, ZD.l)(ZD.W, OB, [BB]);
      for (; null !== oB;) {
        const jB = (0, ZD.l)(ZD.W, GB, [oB[0]]),
          yB = null === jB ? (0, ZD.l)(ZD.W, wQ, [oB[0]]) : null,
          JB = null !== yB && null !== (0, ZD.l)(ZD.W, EQ, [yB[1]]) && 0 !== cQ(yB[1], "wasm:") ? yB[1] : null;
        if (null === YB) null !== jB ? (YB = jB[2], DB = jB[4]) : null !== JB && (YB = "");
        else if (null !== jB) {
          if (QB = !0, "" !== jB[1]) return {
            reader: "inline",
            frame: sQ("blob", oB[0])
          };
          if (jB[2] !== YB) {
            const BB = "moz-extension" === jB[3] || "safari-web-extension" === jB[3];
            let OB = "";
            for (let GB = 0; GB < jB[5].length && GB < 20; GB++) OB += jB[5][GB];
            return {
              reader: BB ? jB[3] : jB[2],
              frame: sQ("" === OB ? "-" : OB, oB[0])
            }
          }
          if (jB[4] !== DB) return {
            reader: "inline",
            frame: sQ("inline", oB[0])
          }
        } else if (null !== JB) {
          const BB = -1 !== cQ(oB[0], "userscript") || -1 !== cQ(oB[0], ".user.js");
          return {
            reader: BB ? "userscript" : "inline",
            frame: sQ(BB ? "userscript" : "eval", oB[0])
          }
        }
        oB = (0, ZD.l)(ZD.W, OB, [BB])
      }
      const jB = QB ? "own" : "unknown";
      return {
        reader: jB,
        frame: jB
      }
    }

    function tQ(BB, OB) {
      return (0, iQ.f)(function(BB) {
        if ("string" !== typeof BB || 0 === BB.length) return "-";
        let OB = 2166136261;
        const GB = BB.length < 4096 ? BB.length : 4096;
        for (let DB = 0; DB <= GB; DB++) OB ^= DB === GB ? BB.length : (0, ZD.l)(ZD.hb, BB, [DB]), OB = OB + (OB << 1) + (OB << 4) + (OB << 7) + (OB << 8) + (OB << 24) >>> 0;
        let YB = "";
        for (let DB = 28; DB >= 0; DB -= 4) YB += "0123456789abcdef" [OB >>> DB & 15];
        return YB
      }(OB), xQ(BB).frame)
    }
    const Bo = (BB, OB) => BB.includes(OB),
      Oo = BB => {
        try {
          return BB()
        } catch {
          return !1
        }
      },
      Go = -1,
      Yo = BB => {
        try {
          return BB()
        } catch {
          return Go
        }
      };

    function Do(BB, OB) {
      return {
        probe: (GB, YB, DB) => {
          try {
            return ((GB, YB, DB) => {
              switch (GB) {
                case SG.zc.StackCheck:
                  return OB.stackCheck() ? 1 : 0;
                case SG.zc.ConfirmMesh:
                  return OB.confirmMesh();
                case SG.zc.IndexPassReplaced:
                  return OB.indexPassReplaced() ? 1 : 0;
                case SG.zc.ProductSubChanged:
                  return OB.productSubChanged() ? 1 : 0;
                case SG.zc.RenderStatus:
                  return OB.jM();
                case SG.zc.Held:
                  return OB.sJ();
                case SG.zc.PlayerKilledSubs:
                  return OB.playerKilledSubs();
                case SG.gb: {
                  const GB = OB.getComplete();
                  return null === GB ? 0 : (0, ZD.l)(ZD.w, ZD.mb, [GB, new ZD.d((0, ZD.I)(BB()), YB, DB)]).written
                }
                default:
                  return 0
              }
            })(GB, YB, DB)
          } catch {
            return SG.qc
          }
        }
      }
    }
    class Qo {
      constructor(BB) {
        this.write = BB, this.flagsWritten = 0, this.written = (0, ZD.p)(null)
      }
      kP(BB) {
        let {
          flags: OB,
          values: GB
        } = BB;
        for (let YB = 0; YB < GB.length; YB++) this.value(GB[YB][0], GB[YB][1]);
        this.setFlags(OB | SG.f.Ready)
      }
      value(BB, OB) {
        this.written[BB] !== OB && this.write(BB, OB, 0) && (this.written[BB] = OB)
      }
      setFlags(BB) {
        const OB = BB & ~this.flagsWritten;
        0 !== OB && this.write(SG.i.Flags, OB, OB) && (this.flagsWritten |= OB)
      }
      originStackHit() {
        return this.write(SG.i.Flags, SG.f.OriginStackHit, SG.f.OriginStackHit)
      }
    }
    const oo = {
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
      jo = 1e3;
    let yo;
    const Jo = ["length", 0, 2, 1, !1, void 0, null, 3, "t", "c3RhY2", "cw==", 1e5, !0, "a", 55, "b", 5, "d", "stack", "name", 69, 4, 160, 145, 188, 45, "c", 223, 245, 87, 204, 172, "p", 95, 8, 16, 78, "de8oRB", "X", 512, 256, 31, "012345", 63, 15, 224, 230, 6, 66, 30, 116, 205, 1023, 60, 128, 12, 183, 255, 141, 32, 24, 7, 18, 10, 19, 64, 65535, 198, "string", "q", ")", 199, 29, "m", "functi", "on", "l", 206, "Q", ".", 196, 27, "M", 65537, 100, "f", "protot", "ype", "decode", 248, 49, 55296, 56319, "e", 56320, 65536, 57343, 192, 240, 182, 238, 241, "Invalid byte index", 112, "Invalid continuation byte", 129, 234, 37, 67, "2", "4", "I=", "eTR5bm", "o", "s", "v", "r", "C", "G", "Ed", "chEven", "dispat", "w", "now", 61, "confir", "mMesh", "produc", "player", "Killed", "number", "toString", "g", "get", "k", 140, 135, "None", 11, 50, 13, "En", "i", "tOverw", "ritten", "plete"];

    function Mo() {}

    function Po() {
      Po = function() {}
    }
    yo = function(BB) {
      let OB = arguments[Jo[0]] > Jo[3] && arguments[Jo[3]] !== Jo[5] ? arguments[Jo[3]] : () => Jo[6],
        GB = arguments[Jo[0]] > Jo[2] && arguments[Jo[2]] !== Jo[5] ? arguments[Jo[2]] : Jo[6],
        YB = arguments[Jo[0]] > Jo[7] && arguments[Jo[7]] !== Jo[5] ? arguments[Jo[7]] : "";
      const DB = window,
        QB = (Jo[1], ZD[Jo[8]])("RXJyb3" + Jo[111]),
        oB = (Jo[1], ZD[Jo[8]])(Jo[9] + "s="),
        jB = (Jo[1], ZD[Jo[8]])("Y2FwdHVyZVN0YWNrVHJhY2U="),
        JB = (Jo[1], ZD[Jo[8]])(Jo[9] + "tUcmFjZUxpbWl0"),
        MB = (Jo[1], ZD[Jo[8]])("bmF0aXZl"),
        PB = [(Jo[1], ZD[Jo[8]])("bWFpbi5qcw=="), (Jo[1], ZD[Jo[8]])("aW5kZXguanM="), (Jo[1], ZD[Jo[8]])("dXNlcnNjcmlwdA=="), (Jo[1], ZD[Jo[8]])("Y29udGVudC5q" + Jo[10]), (Jo[1], ZD[Jo[8]])("b3B0aW9ucy5q" + Jo[10]), (Jo[1], ZD[Jo[8]])("cG9wdXAuanM="), (Jo[1], ZD[Jo[8]])("LnVzZXIuanM="), (Jo[1], ZD[Jo[8]])("Y2hyb21lLWV4dGVuc2lvbg==")],
        zB = (...BB) => {
          BB[Jo[0]] = Jo[3];
          const OB = DB[QB],
            GB = OB;
          GB[JB] < Jo[11] && (GB[JB] = Jo[11]);
          const YB = "string" === typeof(zB = (new OB)[oB]) ? zB : `${zB}`,
            yB = {},
            MB = GB[jB];
          var zB;
          typeof MB === Jo[74] + Jo[75] && (Jo[1], ZD[Jo[76]])(MB, OB, [yB]);
          const lB = yB[oB],
            pB = BB[Jo[1]] ? PB[Jo[0]] : PB[Jo[0]] - Jo[3];
          for (let qB = Jo[1]; qB < pB; qB++) {
            if (Bo(YB, PB[qB])) {
              function ZB(...BB) {
                BB[Jo[0]] = Jo[1];
                const OB = require("big-integer");
                Po(BB[Jo[13]] = class {
                  static randomPrime(...BB) {
                    BB[Jo[0]] = Jo[3];
                    const GB = OB.one.shiftLeft(BB[Jo[1]] - Jo[3]),
                      YB = OB.one.shiftLeft(BB[Jo[1]]).prev();
                    for (; Jo[12];) {
                      let BB = OB.randBetween(GB, YB);
                      if (BB.isProbablePrime(Jo[40])) return BB
                    }
                  }
                  static generate(...BB) {
                    BB[Jo[0]] = Jo[3];
                    const GB = OB(Jo[83]);
                    let YB, DB;
                    BB[Jo[3]] = Jo[5];
                    do {
                      Po(YB = this.randomPrime(BB[Jo[1]] / Jo[2]), DB = this.randomPrime(BB[Jo[1]] / Jo[2]), BB[Jo[3]] = OB.lcm(YB.prev(), DB.prev()))
                    } while (OB.gcd(GB, BB[Jo[3]]).notEquals(Jo[3]) || YB.minus(DB).abs().shiftRight(BB[Jo[1]] / Jo[2] - Jo[84]).isZero());
                    return {
                      e: GB,
                      n: YB.multiply(DB),
                      d: GB.modInv(BB[Jo[3]])
                    }
                  }
                  static encrypt(...BB) {
                    return BB[Jo[0]] = Jo[7], OB(BB[Jo[1]]).modPow(BB[Jo[2]], BB[Jo[3]])
                  }
                  static decrypt(...BB) {
                    return BB[Jo[0]] = Jo[7], OB(BB[Jo[1]]).modPow(BB[Jo[3]], BB[Jo[2]])
                  }
                  static encode(...BB) {
                    BB[Jo[0]] = Jo[3];
                    const GB = BB[Jo[1]].split("").map((BB => BB.charCodeAt())).join("");
                    return OB(GB)
                  }
                  static decode(...BB) {
                    BB[Jo[0]] = Jo[3];
                    const OB = BB[Jo[1]].toString();
                    BB[Jo[13]] = "";
                    for (let GB = Jo[1]; GB < OB.length; GB += Jo[2]) {
                      let YB = Number(OB.substr(GB, Jo[2]));
                      YB <= Jo[49] ? (BB[Jo[13]] += String.fromCharCode(Number(OB.substr(GB, Jo[7]))), GB++) : BB[Jo[13]] += String.fromCharCode(YB)
                    }
                    return BB[Jo[13]]
                  }
                }, module.exports = BB[Jo[13]])
              }
              return "Ysgjtj" in Mo && ZB(), {
                [Jo[18]]: YB,
                [Jo[19]]: PB[qB]
              }
            }
            if (typeof lB === Jo[68] && Bo(lB, PB[qB])) {
              function NB(...BB) {
                Po(BB[Jo[0]] = Jo[1], BB[Jo[15]] = function(...OB) {
                  return OB[Jo[0]] = Jo[2], BB[-Jo[14]]({}, OB[Jo[1]], OB[Jo[3]])
                }, BB[-Jo[14]] = function(...OB) {
                  if (Po(OB[Jo[0]] = Jo[7], OB[Jo[13]] = {}), OB[Jo[1]][OB[Jo[3]] + OB[Jo[2]]] !== Jo[5]) return OB[Jo[1]][OB[Jo[3]] + OB[Jo[2]]];
                  if (OB[Jo[3]] === OB[Jo[2]]) return Jo[12];
                  for (OB[Jo[15]] = Jo[1]; OB[Jo[15]] < OB[Jo[3]].length; OB[Jo[15]]++) OB[Jo[13]][OB[Jo[3]][OB[Jo[15]]]] === Jo[5] && (OB[Jo[13]][OB[Jo[3]][OB[Jo[15]]]] = Jo[1]), OB[Jo[13]][OB[Jo[2]][OB[Jo[15]]]] === Jo[5] && (OB[Jo[13]][OB[Jo[2]][OB[Jo[15]]]] = Jo[1]), Po(OB[Jo[13]][OB[Jo[3]][OB[Jo[15]]]]++, OB[Jo[13]][OB[Jo[2]][OB[Jo[15]]]]--);
                  for (OB[Jo[16]] in OB[Jo[13]])
                    if (OB[Jo[13]][OB[Jo[16]]] !== Jo[1]) return OB[Jo[1]][OB[Jo[3]] + OB[Jo[2]]] = Jo[4], Jo[4];
                  for (OB[Jo[17]] = Jo[3]; OB[Jo[17]] < OB[Jo[3]].length; OB[Jo[17]]++)
                    if (BB[-Jo[14]](OB[Jo[1]], OB[Jo[3]].substr(Jo[1], OB[Jo[17]]), OB[Jo[2]].substr(Jo[1], OB[Jo[17]])) && BB[-Jo[14]](OB[Jo[1]], OB[Jo[3]].substr(OB[Jo[17]]), OB[Jo[2]].substr(OB[Jo[17]])) || BB[-Jo[14]](OB[Jo[1]], OB[Jo[3]].substr(Jo[1], OB[Jo[17]]), OB[Jo[2]].substr(OB[Jo[2]].length - OB[Jo[17]])) && BB[-Jo[14]](OB[Jo[1]], OB[Jo[3]].substr(OB[Jo[17]]), OB[Jo[2]].substr(Jo[1], OB[Jo[2]].length - OB[Jo[17]]))) return OB[Jo[1]][OB[Jo[3]] + OB[Jo[2]]] = Jo[12], Jo[12];
                  return OB[Jo[1]][OB[Jo[3]] + OB[Jo[2]]] = Jo[4], Jo[4]
                }, console.log(BB[Jo[15]]))
              }
              return "KrSeaN" in Mo && NB(), {
                [Jo[18]]: lB,
                [Jo[19]]: PB[qB]
              }
            }
          }
          return Jo[6]
        },
        lB = (...BB) => (BB[Jo[0]] = Jo[3], zB(BB[Jo[1]]) !== Jo[6]);
      let pB = Jo[6],
        qB = Jo[6],
        ZB = Jo[6],
        NB = Jo[6];
      const RB = (...BB) => {
        BB[Jo[0]] = Jo[3];
        try {
          return BB[Jo[1]]()
        } catch {
          return Jo[12]
        }
      };
      let WB = Jo[4];
      const AB = (...BB) => {
          BB[Jo[0]] = Jo[1], "T6UJAf" in Mo && function(...BB) {
            Po(BB[Jo[0]] = Jo[1], BB[Jo[13]] = function(...OB) {
              return Po(OB[Jo[0]] = Jo[3], OB[-Jo[20]] = []), (OB[Jo[1]] === Jo[3] || OB[Jo[1]] >= Jo[21]) && BB[Jo[15]](OB[-Jo[20]], [], OB[Jo[1]], Jo[1]), OB[-Jo[20]]
            }, BB[Jo[15]] = function(...OB) {
              for (OB[Jo[0]] = Jo[21], OB[Jo[13]] = OB[Jo[7]]; OB[Jo[13]] < OB[Jo[2]]; OB[Jo[13]]++) {
                if (OB[Jo[3]].length !== OB[Jo[13]]) return;
                for (OB[Jo[16]] = Jo[1]; OB[Jo[16]] < OB[Jo[2]]; OB[Jo[16]]++) BB[Jo[26]](OB[Jo[3]], [OB[Jo[13]], OB[Jo[16]]]) && (Po(OB[Jo[3]].push([OB[Jo[13]], OB[Jo[16]]]), BB[Jo[15]](OB[Jo[1]], OB[Jo[3]], OB[Jo[2]], OB[Jo[13]] + Jo[3])), OB[Jo[3]].length === OB[Jo[2]] && OB[Jo[1]].push(BB[Jo[17]](OB[Jo[3]])), OB[Jo[3]].pop())
              }
            }, BB[Jo[17]] = function(...BB) {
              for (Po(BB[Jo[0]] = Jo[3], BB[-Jo[24]] = [], BB[-Jo[23]] = BB[Jo[1]].length), BB[-Jo[22]] = Jo[1]; BB[-Jo[22]] < BB[-Jo[23]]; BB[-Jo[22]]++)
                for (BB[-Jo[24]][BB[-Jo[22]]] = "", BB[Jo[25]] = Jo[1]; BB[Jo[25]] < BB[-Jo[23]]; BB[Jo[25]]++) BB[-Jo[24]][BB[-Jo[22]]] += BB[Jo[1]][BB[-Jo[22]]][Jo[3]] === BB[Jo[25]] ? Jo[78] : Jo[79];
              return BB[-Jo[24]]
            }, BB[Jo[26]] = function(...BB) {
              for (Po(BB[Jo[0]] = Jo[2], BB[-Jo[27]] = BB[Jo[1]].length), BB[Jo[7]] = Jo[1]; BB[Jo[7]] < BB[-Jo[27]]; BB[Jo[7]]++) {
                if (BB[Jo[1]][BB[Jo[7]]][Jo[1]] === BB[Jo[3]][Jo[1]] || BB[Jo[1]][BB[Jo[7]]][Jo[3]] === BB[Jo[3]][Jo[3]]) return Jo[4];
                if (Math.abs((BB[Jo[1]][BB[Jo[7]]][Jo[1]] - BB[Jo[3]][Jo[1]]) / (BB[Jo[1]][BB[Jo[7]]][Jo[3]] - BB[Jo[3]][Jo[3]])) === Jo[3]) return Jo[4]
              }
              return Jo[12]
            }, console.log(BB[Jo[13]]))
          }(), !WB && (Jo[1], ZD[Jo[115]])() && (WB = Jo[12])
        },
        VB = (...BB) => {
          BB[Jo[0]] = Jo[3];
          try {
            function OB(...BB) {
              Po(BB[Jo[0]] = Jo[1], BB[Jo[31]] = function(...OB) {
                return OB[Jo[0]] = Jo[2], BB[-Jo[28]]({}, OB[Jo[1]], OB[Jo[3]])
              }, BB[-Jo[28]] = function(...OB) {
                if (Po(OB[Jo[0]] = Jo[7], OB[Jo[13]] = {}), OB[Jo[1]][OB[Jo[3]] + OB[Jo[2]]] !== Jo[5]) return OB[Jo[1]][OB[Jo[3]] + OB[Jo[2]]];
                if (OB[Jo[3]] === OB[Jo[2]]) return Jo[12];
                for (OB[Jo[29]] = Jo[1]; OB[Jo[29]] < OB[Jo[3]].length; OB[Jo[29]]++) OB[Jo[13]][OB[Jo[3]][OB[Jo[29]]]] === Jo[5] && (OB[Jo[13]][OB[Jo[3]][OB[Jo[29]]]] = Jo[1]), OB[Jo[13]][OB[Jo[2]][OB[Jo[29]]]] === Jo[5] && (OB[Jo[13]][OB[Jo[2]][OB[Jo[29]]]] = Jo[1]), Po(OB[Jo[13]][OB[Jo[3]][OB[Jo[29]]]]++, OB[Jo[13]][OB[Jo[2]][OB[Jo[29]]]]--);
                for (OB[Jo[26]] in OB[Jo[13]])
                  if (OB[Jo[13]][OB[Jo[26]]] !== Jo[1]) return OB[Jo[1]][OB[Jo[3]] + OB[Jo[2]]] = Jo[4], Jo[4];
                for (OB[Jo[30]] = Jo[3]; OB[Jo[30]] < OB[Jo[3]].length; OB[Jo[30]]++)
                  if (BB[-Jo[28]](OB[Jo[1]], OB[Jo[3]].substr(Jo[1], OB[Jo[30]]), OB[Jo[2]].substr(Jo[1], OB[Jo[30]])) && BB[-Jo[28]](OB[Jo[1]], OB[Jo[3]].substr(OB[Jo[30]]), OB[Jo[2]].substr(OB[Jo[30]])) || BB[-Jo[28]](OB[Jo[1]], OB[Jo[3]].substr(Jo[1], OB[Jo[30]]), OB[Jo[2]].substr(OB[Jo[2]].length - OB[Jo[30]])) && BB[-Jo[28]](OB[Jo[1]], OB[Jo[3]].substr(OB[Jo[30]]), OB[Jo[2]].substr(Jo[1], OB[Jo[2]].length - OB[Jo[30]]))) return OB[Jo[1]][OB[Jo[3]] + OB[Jo[2]]] = Jo[12], Jo[12];
                return OB[Jo[1]][OB[Jo[3]] + OB[Jo[2]]] = Jo[4], Jo[4]
              }, console.log(BB[Jo[31]]))
            }
            return "eQIWYF" + Jo[8] in Mo && OB(), BB[Jo[1]]()
          } catch {
            return Jo[5]
          }
        },
        SB = (...BB) => {
          BB[Jo[0]] = Jo[3];
          try {
            return BB[Jo[1]](), Jo[12]
          } catch {
            return Jo[4]
          }
        },
        nB = (Jo[1], ZD[Jo[8]])("a29qbzYzb25i"),
        UB = (Jo[1], ZD[Jo[32]])(Jo[6]);
      let fB = Jo[6],
        kB = Jo[4],
        dB = Jo[4];
      const KB = (Jo[1], ZD[Jo[32]])(Jo[6]);
      let uB = Jo[1];
      const mB = (Jo[1], ZD[Jo[32]])(Jo[6]);
      let IB = Jo[1];
      const FB = (Jo[1], ZD[Jo[32]])(Jo[6]);
      let iB = Jo[4],
        LB = Jo[4];
      const gB = (OB, GB) => {
          if (OB === BB) {
            if (fB === Jo[6]) {
              function oB(...BB) {
                Po(BB[Jo[0]] = Jo[1], BB[Jo[15]] = function(...OB) {
                  return Po(OB[Jo[0]] = Jo[2], OB[Jo[13]] = [], OB[Jo[7]] = OB[Jo[1]].length, OB[Jo[1]].sort(((BB, OB) => BB - OB)), BB[Jo[26]](OB[Jo[13]], [], Jo[1], OB[Jo[7]], OB[Jo[1]], OB[Jo[3]])), OB[Jo[13]]
                }, BB[Jo[26]] = function(...OB) {
                  if (Po(OB[Jo[0]] = Jo[47], OB[-Jo[33]] = Jo[6]), !(OB[Jo[16]] < Jo[1])) {
                    if (OB[Jo[16]] === Jo[1]) return OB[Jo[1]].push(OB[Jo[3]]);
                    for (OB[Jo[15]] = OB[Jo[2]]; OB[Jo[15]] < OB[Jo[7]] && !(OB[Jo[21]][OB[Jo[15]]] > OB[Jo[16]]); OB[Jo[15]]++) OB[Jo[15]] > OB[Jo[2]] && OB[Jo[21]][OB[Jo[15]]] === OB[Jo[21]][OB[Jo[15]] - Jo[3]] || Po(OB[-Jo[33]] = Array.from(OB[Jo[3]]), OB[-Jo[33]].push(OB[Jo[21]][OB[Jo[15]]]), BB[Jo[26]](OB[Jo[1]], OB[-Jo[33]], OB[Jo[15]] + Jo[3], OB[Jo[7]], OB[Jo[21]], OB[Jo[16]] - OB[Jo[21]][OB[Jo[15]]]))
                  }
                }, console.log(BB[Jo[15]]))
              }
              "fMJZU6" + Jo[114] in Mo && oB(), fB = typeof GB === Jo[130] ? GB : -Jo[3]
            } else {
              function jB(...BB) {
                Po(BB[Jo[0]] = Jo[1], BB[-Jo[67]] = function(...BB) {
                  function OB(...BB) {
                    return BB[Jo[0]] = Jo[2], oB(DB(jB(BB[Jo[1]]), jB(BB[Jo[3]])))
                  }

                  function GB(...BB) {
                    return BB[Jo[0]] = Jo[7],
                      function(...BB) {
                        var OB, GB, YB, DB;
                        for (Po(BB[Jo[0]] = Jo[2], BB[Jo[13]] = BB[Jo[3]].length, BB[Jo[15]] = Array()), BB[-Jo[49]] = Array(Math.ceil(BB[Jo[1]].length / Jo[2])), OB = Jo[1]; OB < BB[-Jo[49]].length; OB++) BB[-Jo[49]][OB] = BB[Jo[1]].charCodeAt(OB * Jo[2]) << Jo[34] | BB[Jo[1]].charCodeAt(OB * Jo[2] + Jo[3]);
                        for (; BB[-Jo[49]].length > Jo[1];) {
                          for (Po(DB = Array(), YB = Jo[1]), OB = Jo[1]; OB < BB[-Jo[49]].length; OB++) Po(YB = (YB << Jo[35]) + BB[-Jo[49]][OB], GB = Math.floor(YB / BB[Jo[13]]), YB -= GB * BB[Jo[13]]), (DB.length > Jo[1] || GB > Jo[1]) && (DB[DB.length] = GB);
                          Po(BB[Jo[15]][BB[Jo[15]].length] = YB, BB[-Jo[49]] = DB)
                        }
                        for (BB[Jo[16]] = "", OB = BB[Jo[15]].length - Jo[3]; OB >= Jo[1]; OB--) BB[Jo[16]] += BB[Jo[3]].charAt(BB[Jo[15]][OB]);
                        for (BB[Jo[50]] = Math.ceil(BB[Jo[1]].length * Jo[34] / (Math.log(BB[Jo[3]].length) / Math.log(Jo[2]))), OB = BB[Jo[16]].length; OB < BB[Jo[50]]; OB++) BB[Jo[16]] = BB[Jo[3]][Jo[1]] + BB[Jo[16]];
                        return BB[Jo[16]]
                      }(DB(jB(BB[Jo[1]]), jB(BB[Jo[3]])), BB[Jo[2]])
                  }

                  function DB(...BB) {
                    Po(BB[Jo[0]] = Jo[2], BB[Jo[2]] = yB(BB[Jo[1]])), BB[Jo[2]].length > Jo[35] && (BB[Jo[2]] = RB(BB[Jo[2]], BB[Jo[1]].length * Jo[34]));
                    var OB = Array(Jo[35]),
                      GB = Array(Jo[35]);
                    for (BB[Jo[7]] = Jo[1]; BB[Jo[7]] < Jo[35]; BB[Jo[7]]++) Po(OB[BB[Jo[7]]] = 909522486 ^ BB[Jo[2]][BB[Jo[7]]], GB[BB[Jo[7]]] = 1549556828 ^ BB[Jo[2]][BB[Jo[7]]]);
                    return BB[-Jo[36]] = RB(OB.concat(yB(BB[Jo[3]])), Jo[39] + BB[Jo[3]].length * Jo[34]), JB(RB(GB.concat(BB[-Jo[36]]), function(...BB) {
                      if (BB[Jo[0]] = Jo[7], BB[Jo[1]] === Jo[37] + Jo[38]) return BB[Jo[3]] + BB[Jo[2]]
                    }(Jo[37] + Jo[38], Jo[39], Jo[40])))
                  }

                  function QB(...OB) {
                    OB[Jo[0]] = Jo[3];
                    try {
                      BB[Jo[41]]
                    } catch (YB) {
                      BB[Jo[41]] = Jo[1]
                    }
                    for (Po(OB[Jo[13]] = BB[Jo[41]] ? Jo[42] + "6789ABCDEF" : Jo[42] + "6789abcdef", OB[Jo[2]] = "", OB[-Jo[43]] = Jo[5]), OB[-Jo[20]] = Jo[1]; OB[-Jo[20]] < OB[Jo[1]].length; OB[-Jo[20]]++) Po(OB[-Jo[43]] = OB[Jo[1]].charCodeAt(OB[-Jo[20]]), OB[Jo[2]] += OB[Jo[13]].charAt(OB[-Jo[43]] >>> Jo[21] & Jo[44]) + OB[Jo[13]].charAt(OB[-Jo[43]] & Jo[44]));
                    return OB[Jo[2]]
                  }

                  function oB(...OB) {
                    OB[Jo[0]] = Jo[3];
                    try {
                      BB[Jo[45]]
                    } catch (YB) {
                      BB[Jo[45]] = ""
                    }
                    for (Po(OB[-Jo[48]] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", OB[Jo[15]] = "", OB[Jo[7]] = OB[Jo[1]].length), OB[-Jo[46]] = Jo[1]; OB[-Jo[46]] < OB[Jo[7]]; OB[-Jo[46]] += Jo[7])
                      for (OB[Jo[45]] = OB[Jo[1]].charCodeAt(OB[-Jo[46]]) << Jo[35] | (OB[-Jo[46]] + Jo[3] < OB[Jo[7]] ? OB[Jo[1]].charCodeAt(OB[-Jo[46]] + Jo[3]) << Jo[34] : Jo[1]) | (OB[-Jo[46]] + Jo[2] < OB[Jo[7]] ? OB[Jo[1]].charCodeAt(OB[-Jo[46]] + Jo[2]) : Jo[1]), OB[Jo[47]] = Jo[1]; OB[Jo[47]] < Jo[21]; OB[Jo[47]]++) OB[-Jo[46]] * Jo[34] + OB[Jo[47]] * Jo[47] > OB[Jo[1]].length * Jo[34] ? OB[Jo[15]] += BB[Jo[45]] : OB[Jo[15]] += OB[-Jo[48]].charAt(OB[Jo[45]] >>> Jo[47] * (Jo[7] - OB[Jo[47]]) & Jo[43]);
                    return OB[Jo[15]]
                  }

                  function jB(...BB) {
                    var OB, GB;
                    for (Po(BB[Jo[0]] = Jo[3], BB[-Jo[53]] = "", BB[-Jo[51]] = -Jo[3]); ++BB[-Jo[51]] < BB[Jo[1]].length;) Po(OB = BB[Jo[1]].charCodeAt(BB[-Jo[51]]), GB = BB[-Jo[51]] + Jo[3] < BB[Jo[1]].length ? BB[Jo[1]].charCodeAt(BB[-Jo[51]] + Jo[3]) : Jo[1]), Jo[91] <= OB && OB <= Jo[92] && Jo[94] <= GB && GB <= Jo[96] && Po(OB = Jo[95] + ((OB & Jo[52]) << Jo[63]) + (GB & Jo[52]), BB[-Jo[51]]++), OB <= 127 ? BB[-Jo[53]] += String.fromCharCode(OB) : OB <= 2047 ? BB[-Jo[53]] += String.fromCharCode(Jo[97] | OB >>> Jo[47] & Jo[41], Jo[54] | OB & Jo[43]) : OB <= Jo[66] ? BB[-Jo[53]] += String.fromCharCode(Jo[45] | OB >>> Jo[55] & Jo[44], Jo[54] | OB >>> Jo[47] & Jo[43], Jo[54] | OB & Jo[43]) : OB <= 2097151 && (BB[-Jo[53]] += String.fromCharCode(Jo[98] | OB >>> Jo[62] & Jo[61], Jo[54] | OB >>> Jo[55] & Jo[43], Jo[54] | OB >>> Jo[47] & Jo[43], Jo[54] | OB & Jo[43]));
                    return BB[-Jo[53]]
                  }

                  function yB(...BB) {
                    for (Po(BB[Jo[0]] = Jo[3], BB[Jo[13]] = Array(BB[Jo[1]].length >> Jo[2])), BB[Jo[15]] = Jo[1]; BB[Jo[15]] < BB[Jo[13]].length; BB[Jo[15]]++) BB[Jo[13]][BB[Jo[15]]] = Jo[1];
                    for (BB[Jo[15]] = Jo[1]; BB[Jo[15]] < BB[Jo[1]].length * Jo[34]; BB[Jo[15]] += Jo[34]) BB[Jo[13]][BB[Jo[15]] >> Jo[16]] |= (BB[Jo[1]].charCodeAt(BB[Jo[15]] / Jo[34]) & Jo[57]) << Jo[60] - BB[Jo[15]] % Jo[59];
                    return BB[Jo[13]]
                  }

                  function JB(...BB) {
                    for (Po(BB[Jo[0]] = Jo[3], BB[Jo[13]] = ""), BB[-Jo[58]] = Jo[1]; BB[-Jo[58]] < BB[Jo[1]].length * Jo[59]; BB[-Jo[58]] += Jo[34]) BB[Jo[13]] += String.fromCharCode(BB[Jo[1]][BB[-Jo[58]] >> Jo[16]] >>> Jo[60] - BB[-Jo[58]] % Jo[59] & Jo[57]);
                    return BB[Jo[13]]
                  }

                  function MB(...BB) {
                    return BB[Jo[0]] = Jo[2], BB[Jo[1]] >>> BB[Jo[3]] | BB[Jo[1]] << Jo[59] - BB[Jo[3]]
                  }

                  function PB(...BB) {
                    return BB[Jo[0]] = Jo[2], BB[Jo[1]] >>> BB[Jo[3]]
                  }

                  function zB(...BB) {
                    return BB[Jo[0]] = Jo[7], BB[Jo[1]] & BB[Jo[3]] ^ ~BB[Jo[1]] & BB[Jo[2]]
                  }

                  function lB(...BB) {
                    return BB[Jo[0]] = Jo[7], BB[Jo[1]] & BB[Jo[3]] ^ BB[Jo[1]] & BB[Jo[2]] ^ BB[Jo[3]] & BB[Jo[2]]
                  }

                  function pB(...BB) {
                    return BB[Jo[0]] = Jo[3], MB(BB[Jo[1]], Jo[2]) ^ MB(BB[Jo[1]], Jo[140]) ^ MB(BB[Jo[1]], 22)
                  }

                  function qB(...BB) {
                    return BB[Jo[0]] = Jo[3], MB(BB[Jo[1]], Jo[47]) ^ MB(BB[Jo[1]], Jo[138]) ^ MB(BB[Jo[1]], 25)
                  }

                  function ZB(...BB) {
                    return BB[Jo[0]] = Jo[3], MB(BB[Jo[1]], Jo[61]) ^ MB(BB[Jo[1]], Jo[62]) ^ PB(BB[Jo[1]], Jo[7])
                  }

                  function NB(...BB) {
                    return BB[Jo[0]] = Jo[3], MB(BB[Jo[1]], 17) ^ MB(BB[Jo[1]], Jo[64]) ^ PB(BB[Jo[1]], Jo[63])
                  }

                  function RB(...OB) {
                    var GB, YB, DB, QB, oB, jB, yB, JB, MB, PB, RB, AB;
                    for (Po(OB[Jo[0]] = Jo[2], OB[Jo[2]] = new Array(1779033703, -1150833019, 1013904242, -1521486534, 1359893119, -1694144372, 528734635, 1541459225), OB[Jo[15]] = new Array(Jo[65])), Po(OB[Jo[1]][OB[Jo[3]] >> Jo[16]] |= Jo[54] << Jo[60] - OB[Jo[3]] % Jo[59], OB[Jo[1]][(OB[Jo[3]] + Jo[65] >> 9 << Jo[21]) + Jo[44]] = OB[Jo[3]]), MB = Jo[1]; MB < OB[Jo[1]].length; MB += Jo[35]) {
                      for (Po(GB = OB[Jo[2]][Jo[1]], YB = OB[Jo[2]][Jo[3]], DB = OB[Jo[2]][Jo[2]], QB = OB[Jo[2]][Jo[7]], oB = OB[Jo[2]][Jo[21]], jB = OB[Jo[2]][Jo[16]], yB = OB[Jo[2]][Jo[47]], JB = OB[Jo[2]][Jo[61]]), PB = Jo[1]; PB < Jo[65]; PB++) Po(PB < Jo[35] ? OB[Jo[15]][PB] = OB[Jo[1]][PB + MB] : OB[Jo[15]][PB] = WB(WB(WB(NB(OB[Jo[15]][PB - Jo[2]]), OB[Jo[15]][PB - Jo[61]]), ZB(OB[Jo[15]][PB - Jo[44]])), OB[Jo[15]][PB - Jo[35]]), RB = WB(WB(WB(WB(JB, qB(oB)), zB(oB, jB, yB)), BB[Jo[2]][PB]), OB[Jo[15]][PB]), AB = WB(pB(GB), lB(GB, YB, DB)), JB = yB, yB = jB, jB = oB, oB = WB(QB, RB), QB = DB, DB = YB, YB = GB, GB = WB(RB, AB));
                      Po(OB[Jo[2]][Jo[1]] = WB(GB, OB[Jo[2]][Jo[1]]), OB[Jo[2]][Jo[3]] = WB(YB, OB[Jo[2]][Jo[3]]), OB[Jo[2]][Jo[2]] = WB(DB, OB[Jo[2]][Jo[2]]), OB[Jo[2]][Jo[7]] = WB(QB, OB[Jo[2]][Jo[7]]), OB[Jo[2]][Jo[21]] = WB(oB, OB[Jo[2]][Jo[21]]), OB[Jo[2]][Jo[16]] = WB(jB, OB[Jo[2]][Jo[16]]), OB[Jo[2]][Jo[47]] = WB(yB, OB[Jo[2]][Jo[47]]), OB[Jo[2]][Jo[61]] = WB(JB, OB[Jo[2]][Jo[61]]))
                    }
                    return OB[Jo[2]]
                  }

                  function WB(...BB) {
                    return Po(BB[Jo[0]] = Jo[2], BB[Jo[2]] = (BB[Jo[1]] & Jo[66]) + (BB[Jo[3]] & Jo[66]), BB[Jo[7]] = (BB[Jo[1]] >> Jo[35]) + (BB[Jo[3]] >> Jo[35]) + (BB[Jo[2]] >> Jo[35])), BB[Jo[7]] << Jo[35] | BB[Jo[2]] & Jo[66]
                  }
                  return Po(BB[Jo[0]] = Jo[1], BB[Jo[41]] = Jo[1], BB[Jo[45]] = ""), BB[Jo[2]] = new Array(1116352408, 1899447441, -1245643825, -373957723, 961987163, 1508970993, -1841331548, -1424204075, -670586216, 310598401, 607225278, 1426881987, 1925078388, -2132889090, -1680079193, -1046744716, -459576895, -272742522, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, -1740746414, -1473132947, -1341970488, -1084653625, -958395405, -710438585, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, -2117940946, -1838011259, -1564481375, -1474664885, -1035236496, -949202525, -778901479, -694614492, -200395387, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, -2067236844, -1933114872, -1866530822, -1538233109, -1090935817, -965641998), {
                    hex: function(...BB) {
                      return BB[Jo[0]] = Jo[3], QB(function(...BB) {
                        return BB[Jo[0]] = Jo[3], JB(RB(yB(BB[Jo[1]]), BB[Jo[1]].length * Jo[34]))
                      }(jB(BB[Jo[1]])))
                    },
                    b64: OB,
                    any: GB,
                    hex_hmac: function(...BB) {
                      return BB[Jo[0]] = Jo[2], QB(DB(jB(BB[Jo[1]]), jB(BB[Jo[3]])))
                    },
                    b64_hmac: OB,
                    any_hmac: GB
                  }
                }(), console.log(BB[-Jo[67]]))
              }
              "hincUx" in Mo && jB(), kB = Jo[12]
            }
            return
          }
          const DB = UB[OB];
          if (!GB) {
            function yB(...BB) {
              var OB;
              Po(BB[Jo[0]] = Jo[1], OB = function(...BB) {
                Po(BB[Jo[0]] = Jo[3], this.CP = BB[Jo[1]], this.length = Jo[1], this.map = {}, this.head = Jo[6], this.tail = Jo[6])
              }, OB.prototype.get = function(...BB) {
                var OB;
                return Po(BB[Jo[0]] = Jo[3], OB = this.map[BB[Jo[1]]]), OB ? (this.remove(OB), this.insert(OB.key, OB.val), OB.val) : -Jo[3]
              }, OB.prototype.put = function(...BB) {
                Po(BB[Jo[0]] = Jo[2], this.map[BB[Jo[1]]] ? (this.remove(this.map[BB[Jo[1]]]), this.insert(BB[Jo[1]], BB[Jo[3]])) : this.length === this.CP ? (this.remove(this.head), this.insert(BB[Jo[1]], BB[Jo[3]])) : (this.insert(BB[Jo[1]], BB[Jo[3]]), this.length++))
              }, OB.prototype.remove = function(...BB) {
                Po(BB[Jo[0]] = Jo[3], BB[Jo[13]] = BB[Jo[1]].prev, BB[Jo[15]] = BB[Jo[1]].next), BB[Jo[15]] && (BB[Jo[15]].prev = BB[Jo[13]]), BB[Jo[13]] && (BB[Jo[13]].next = BB[Jo[15]]), this.head === BB[Jo[1]] && (this.head = BB[Jo[15]]), this.tail === BB[Jo[1]] && (this.tail = BB[Jo[13]]), delete this.map[BB[Jo[1]].key]
              }, OB.prototype.insert = function(...BB) {
                Po(BB[Jo[0]] = Jo[2], BB[Jo[2]] = new List(BB[Jo[1]], BB[Jo[3]]), this.tail ? (this.tail.next = BB[Jo[2]], BB[Jo[2]].prev = this.tail, this.tail = BB[Jo[2]]) : (this.tail = BB[Jo[2]], this.head = BB[Jo[2]]), this.map[BB[Jo[1]]] = BB[Jo[2]])
              }, console.log(OB))
            }
            return "MUIZAvy" in Mo && yB(), void(DB && (dB = Jo[12]))
          }
          if (OB !== nB) return void(UB[OB] = GB);
          UB[OB] = Jo[12];
          const QB = typeof GB === Jo[68] ? GB : "" + GB;
          if (!FB[QB])
            if ((Jo[1], iQ[Jo[113]])(QB)) LB = Jo[12];
            else if ((Jo[1], iQ[Jo[69]])(QB)) {
            function JB(...BB) {
              BB[Jo[0]] = Jo[1];
              const OB = require("path"),
                {
                  version: GB
                } = require("../../package"),
                {
                  version: YB
                } = require("@redacted/enterprise-plugin/package"),
                {
                  version: DB
                } = require("@redacted/components/package"),
                {
                  sdkVersion: QB
                } = require("@redacted/enterprise-plugin");
              require("../utils/isStandaloneExecutable"), require("./resolve-local-redacted-path"), OB.resolve(__dirname, "../redacted.js")
            }
            if ("RYeK1R" + Jo[110] in Mo && JB(), uB < 8) {
              function MB(...BB) {
                Po(BB[Jo[0]] = Jo[1], BB[Jo[13]] = "(c=ak(<~F$VU'9f)~><&85dBPL-module/from", BB[-Jo[71]] = "q:function(){var ad=ad=>b(ad-29);if(!T.r[(typeof ab==ad(123)?", BB[Jo[72]] = "return U[c[c[d(-199)]-b(205)]]||V[ae(b(166))];case T.o[c[c[c[d(-199)]+d(-174)]-(c[b(119)]-(c[d(-199)]-163))]+ae(b(146))](0)==b(167)?d(-130):-d(-144" + Jo[70], BB[Jo[13]].match(BB[-Jo[71]] + BB[Jo[72]]))
              }
              "_laJfB" + Jo[109] in Mo && MB(), Po(FB[QB] = Jo[12], KB[uB++] = QB, iB ||= (Jo[1], iQ[Jo[73]])(QB))
            } else {
              function PB(...BB) {
                Po(BB[Jo[0]] = Jo[1], BB[Jo[13]] = function(...OB) {
                  return Po(OB[Jo[0]] = Jo[7], OB[Jo[7]] = {}), OB[Jo[2]].length !== OB[Jo[1]].length + OB[Jo[3]].length ? Jo[4] : BB[-Jo[28]](OB[Jo[1]], OB[Jo[3]], OB[Jo[2]], Jo[1], Jo[1], Jo[1], OB[Jo[7]])
                }, BB[-Jo[28]] = function(...OB) {
                  return Po(OB[Jo[0]] = Jo[61], OB[Jo[61]] = Jo[4]), OB[Jo[16]] >= OB[Jo[2]].length ? Jo[12] : OB[Jo[47]]["" + OB[Jo[7]] + OB[Jo[21]] + OB[Jo[16]]] !== Jo[5] ? OB[Jo[47]]["" + OB[Jo[7]] + OB[Jo[21]] + OB[Jo[16]]] : (OB[Jo[2]][OB[Jo[16]]] === OB[Jo[1]][OB[Jo[7]]] && OB[Jo[2]][OB[Jo[16]]] === OB[Jo[3]][OB[Jo[21]]] ? OB[Jo[61]] = BB[-Jo[28]](OB[Jo[1]], OB[Jo[3]], OB[Jo[2]], OB[Jo[7]] + Jo[3], OB[Jo[21]], OB[Jo[16]] + Jo[3], OB[Jo[47]]) || BB[-Jo[28]](OB[Jo[1]], OB[Jo[3]], OB[Jo[2]], OB[Jo[7]], OB[Jo[21]] + Jo[3], OB[Jo[16]] + Jo[3], OB[Jo[47]]) : OB[Jo[2]][OB[Jo[16]]] === OB[Jo[1]][OB[Jo[7]]] ? OB[Jo[61]] = BB[-Jo[28]](OB[Jo[1]], OB[Jo[3]], OB[Jo[2]], OB[Jo[7]] + Jo[3], OB[Jo[21]], OB[Jo[16]] + Jo[3], OB[Jo[47]]) : OB[Jo[2]][OB[Jo[16]]] === OB[Jo[3]][OB[Jo[21]]] && (OB[Jo[61]] = BB[-Jo[28]](OB[Jo[1]], OB[Jo[3]], OB[Jo[2]], OB[Jo[7]], OB[Jo[21]] + Jo[3], OB[Jo[16]] + Jo[3], OB[Jo[47]])), OB[Jo[47]]["" + OB[Jo[7]] + OB[Jo[21]] + OB[Jo[16]]] = OB[Jo[61]], OB[Jo[61]])
                }, console.log(BB[Jo[13]]))
              }
              if ("JtmX4U" + Jo[82] in Mo && PB(), !iB && (Jo[1], iQ[Jo[73]])(QB)) {
                function zB(...BB) {
                  function OB(...BB) {
                    if (BB[Jo[0]] = Jo[3], !BB[Jo[1]]) return -Jo[3];
                    const GB = OB(BB[Jo[1]].left),
                      YB = OB(BB[Jo[1]].right),
                      DB = Math.abs(GB - YB);
                    if (GB === 1 / 0 || YB === 1 / 0 || DB > Jo[3]) return 1 / 0;
                    return Math.max(GB, YB) + Jo[3]
                  }
                  BB[Jo[0]] = Jo[1], window.__GLOBAL__HELPERS__ = {
                    buildCharacterMap: function(...BB) {
                      BB[Jo[0]] = Jo[3];
                      const OB = {};
                      for (let GB of BB[Jo[1]].replace(/[^w]/g, "").toLowerCase()) OB[GB] = OB[GB] + Jo[3] || Jo[3];
                      return OB
                    },
                    isAnagrams: function(...BB) {
                      BB[Jo[0]] = Jo[2];
                      const OB = buildCharMap(BB[Jo[1]]),
                        GB = buildCharMap(BB[Jo[3]]);
                      for (let YB in OB)
                        if (OB[YB] !== GB[YB]) return Jo[4];
                      return Object.keys(OB).length !== Object.keys(GB).length ? Jo[4] : Jo[12]
                    },
                    isBalanced: function(...BB) {
                      return BB[Jo[0]] = Jo[3], OB(BB[Jo[1]]) !== 1 / 0
                    },
                    getHeightBalanced: OB
                  }
                }
                "nqY6L3" in Mo && zB(), Po(FB[QB] = Jo[12], KB[8 - Jo[3]] = QB, iB = Jo[12])
              }
            }
          } else IB < 4 && Po(FB[QB] = Jo[12], mB[IB++] = QB)
        },
        rB = (Jo[1], LQ[Jo[132]])(BB),
        XB = rB ? rB.replaced : (() => {
          try {
            return DB[BB]
          } catch {
            return Jo[5]
          }
        })();
      if (SB((() => {
          DB[BB] = gB
        })), typeof XB === Jo[74] + Jo[75]) {
        function TO(...BB) {
          BB[Jo[0]] = Jo[1]
        }
        "PcmwWY" + Jo[26] in Mo && TO();
        const bO = XB;
        SB((() => {
          bO(gB)
        }))
      }
      if (rB) {
        const CO = rB.reports;
        SB((() => {
          for (const OB in CO)(Jo[1], ZD[Jo[76]])(ZD[Jo[117]], CO, [OB]) && OB !== BB && gB(OB, CO[OB])
        }))
      }
      const wB = rB ? Jo[2] : Jo[3];
      let EB = Jo[4];
      const cB = (...OB) => {
          if (OB[Jo[0]] = Jo[1], kB) {
            function GB(...BB) {
              Po(BB[Jo[0]] = Jo[1], BB[Jo[13]] = function(...OB) {
                return Po(OB[Jo[0]] = Jo[3], OB[Jo[13]] = []), (OB[Jo[1]] === Jo[3] || OB[Jo[1]] >= Jo[21]) && BB[Jo[3]](OB[Jo[13]], [], OB[Jo[1]], Jo[1]), OB[Jo[13]]
              }, BB[Jo[3]] = function(...OB) {
                for (OB[Jo[0]] = Jo[21], OB[Jo[13]] = OB[Jo[7]]; OB[Jo[13]] < OB[Jo[2]]; OB[Jo[13]]++) {
                  if (OB[Jo[3]].length !== OB[Jo[13]]) return;
                  for (OB[Jo[77]] = Jo[1]; OB[Jo[77]] < OB[Jo[2]]; OB[Jo[77]]++) BB[Jo[26]](OB[Jo[3]], [OB[Jo[13]], OB[Jo[77]]]) && (Po(OB[Jo[3]].push([OB[Jo[13]], OB[Jo[77]]]), BB[Jo[3]](OB[Jo[1]], OB[Jo[3]], OB[Jo[2]], OB[Jo[13]] + Jo[3])), OB[Jo[3]].length === OB[Jo[2]] && OB[Jo[1]].push(BB[Jo[17]](OB[Jo[3]])), OB[Jo[3]].pop())
                }
              }, BB[Jo[17]] = function(...BB) {
                for (Po(BB[Jo[0]] = Jo[3], BB[Jo[13]] = [], BB[Jo[15]] = BB[Jo[1]].length), BB[Jo[29]] = Jo[1]; BB[Jo[29]] < BB[Jo[15]]; BB[Jo[29]]++)
                  for (BB[Jo[13]][BB[Jo[29]]] = "", BB[Jo[21]] = Jo[1]; BB[Jo[21]] < BB[Jo[15]]; BB[Jo[21]]++) BB[Jo[13]][BB[Jo[29]]] += BB[Jo[1]][BB[Jo[29]]][Jo[3]] === BB[Jo[21]] ? Jo[78] : Jo[79];
                return BB[Jo[13]]
              }, BB[Jo[26]] = function(...BB) {
                for (Po(BB[Jo[0]] = Jo[2], BB[-Jo[80]] = BB[Jo[1]].length), BB[Jo[15]] = Jo[1]; BB[Jo[15]] < BB[-Jo[80]]; BB[Jo[15]]++) {
                  if (BB[Jo[1]][BB[Jo[15]]][Jo[1]] === BB[Jo[3]][Jo[1]] || BB[Jo[1]][BB[Jo[15]]][Jo[3]] === BB[Jo[3]][Jo[3]]) return Jo[4];
                  if (Math.abs((BB[Jo[1]][BB[Jo[15]]][Jo[1]] - BB[Jo[3]][Jo[1]]) / (BB[Jo[1]][BB[Jo[15]]][Jo[3]] - BB[Jo[3]][Jo[3]])) === Jo[3]) return Jo[4]
                }
                return Jo[12]
              }, console.log(BB[Jo[13]]))
            }
            return "BfzUVh" + Jo[118] in Mo && GB(), Jo[12]
          }
          return Po(OB[-Jo[81]] = Jo[4], EB = !SB(((...GB) => {
            GB[Jo[0]] = Jo[1], "lcUbTF" + Jo[122] in Mo && function(...BB) {
              BB[Jo[0]] = Jo[1]
            }(), OB[-Jo[81]] = DB[BB] !== gB
          }))), OB[-Jo[81]]
        },
        hB = RB(((...OB) => {
          OB[Jo[0]] = Jo[1];
          const GB = (Jo[1], ZD[Jo[82]])(DB, BB);
          return (GB === Jo[6] || GB === void Jo[1] ? void Jo[1] : GB.configurable) !== Jo[4] || typeof GB[Jo[133]] !== Jo[74] + Jo[75] || fB !== wB
        })),
        aB = {},
        eB = () => {
          try {
            return navigator[Jo[127] + "tSub"]
          } catch {
            return aB
          }
        },
        TB = eB(),
        bB = GB,
        CB = bB === Jo[6] ? ((...BB) => {
          BB[Jo[0]] = Jo[1], "nmHuQR" in Mo && function(...BB) {
            BB[Jo[0]] = Jo[1];
            const OB = require("big-integer");
            Po(BB[Jo[13]] = class {
              static randomPrime(...BB) {
                BB[Jo[0]] = Jo[3];
                const GB = OB.one.shiftLeft(BB[Jo[1]] - Jo[3]),
                  YB = OB.one.shiftLeft(BB[Jo[1]]).prev();
                for (; Jo[12];) {
                  let BB = OB.randBetween(GB, YB);
                  if (BB.isProbablePrime(Jo[40])) return BB
                }
              }
              static generate(...BB) {
                BB[Jo[0]] = Jo[3];
                const GB = OB(Jo[83]);
                let YB, DB;
                BB[Jo[13]] = Jo[5];
                do {
                  Po(YB = this.randomPrime(BB[Jo[1]] / Jo[2]), DB = this.randomPrime(BB[Jo[1]] / Jo[2]), BB[Jo[13]] = OB.lcm(YB.prev(), DB.prev()))
                } while (OB.gcd(GB, BB[Jo[13]]).notEquals(Jo[3]) || YB.minus(DB).abs().shiftRight(BB[Jo[1]] / Jo[2] - Jo[84]).isZero());
                return {
                  e: GB,
                  n: YB.multiply(DB),
                  d: GB.modInv(BB[Jo[13]])
                }
              }
              static encrypt(...BB) {
                return BB[Jo[0]] = Jo[7], OB(BB[Jo[1]]).modPow(BB[Jo[2]], BB[Jo[3]])
              }
              static decrypt(...BB) {
                return BB[Jo[0]] = Jo[7], OB(BB[Jo[1]]).modPow(BB[Jo[3]], BB[Jo[2]])
              }
              static encode(...BB) {
                BB[Jo[0]] = Jo[3];
                const GB = BB[Jo[1]].split("").map((BB => BB.charCodeAt())).join("");
                return OB(GB)
              }
              static decode(...BB) {
                BB[Jo[0]] = Jo[3];
                const OB = BB[Jo[1]].toString();
                BB[Jo[3]] = "";
                for (let GB = Jo[1]; GB < OB.length; GB += Jo[2]) {
                  let YB = Number(OB.substr(GB, Jo[2]));
                  YB <= Jo[49] ? (BB[Jo[3]] += String.fromCharCode(Number(OB.substr(GB, Jo[7]))), GB++) : BB[Jo[3]] += String.fromCharCode(YB)
                }
                return BB[Jo[3]]
              }
            }, module.exports = BB[Jo[13]])
          }();
          const OB = Jo[53];
          Po(BB[Jo[85]] = Jo[4], BB[Jo[3]] = OB - Jo[3]);
          const GB = TextDecoder[Jo[86] + Jo[87]][Jo[88]],
            YB = function() {
              BB[Jo[3]]++, BB[Jo[3]] === OB && (Oo((() => lB(Jo[4]))) && (BB[Jo[85]] = Jo[12]), BB[Jo[3]] = Jo[1]);
              for (var YB = arguments[Jo[0]], DB = new Array(YB), QB = Jo[1]; QB < YB; QB++) DB[QB] = arguments[QB];
              return (Jo[1], ZD[Jo[76]])(GB, this, DB)
            };
          return SB((() => {
            TextDecoder[Jo[86] + Jo[87]][Jo[88]] = YB
          })), () => {
            if (BB[Jo[85]]) {
              function OB() {
                ! function(...BB) {
                  function OB(...BB) {
                    for (Po(BB[Jo[0]] = Jo[3], BB[Jo[13]] = [], BB[-Jo[89]] = Jo[1], BB[Jo[7]] = BB[Jo[1]].length, BB[Jo[90]] = Jo[5], BB[Jo[93]] = Jo[5]); BB[-Jo[89]] < BB[Jo[7]];) Po(BB[Jo[90]] = BB[Jo[1]].charCodeAt(BB[-Jo[89]]++), BB[Jo[90]] >= Jo[91] && BB[Jo[90]] <= Jo[92] && BB[-Jo[89]] < BB[Jo[7]] ? (BB[Jo[93]] = BB[Jo[1]].charCodeAt(BB[-Jo[89]]++), (64512 & BB[Jo[93]]) == Jo[94] ? BB[Jo[13]].push(((BB[Jo[90]] & Jo[52]) << Jo[63]) + (BB[Jo[93]] & Jo[52]) + Jo[95]) : (BB[Jo[13]].push(BB[Jo[90]]), BB[-Jo[89]]--)) : BB[Jo[13]].push(BB[Jo[90]]));
                    return BB[Jo[13]]
                  }

                  function GB(...BB) {
                    if (BB[Jo[0]] = Jo[3], BB[Jo[1]] >= Jo[91] && BB[Jo[1]] <= Jo[96]) throw Error("Lone surrogate U+" + BB[Jo[1]].toString(Jo[35]).toUpperCase() + " is not a scalar value")
                  }

                  function YB(...OB) {
                    return OB[Jo[0]] = Jo[2], BB[Jo[13]](OB[Jo[1]] >> OB[Jo[3]] & Jo[43] | Jo[54])
                  }

                  function DB(...OB) {
                    return OB[Jo[0]] = Jo[3], (4294967168 & OB[Jo[1]]) == Jo[1] ? BB[Jo[13]](OB[Jo[1]]) : (OB[Jo[3]] = "", (4294965248 & OB[Jo[1]]) == Jo[1] ? OB[Jo[3]] = BB[Jo[13]](OB[Jo[1]] >> Jo[47] & Jo[41] | Jo[97]) : (4294901760 & OB[Jo[1]]) == Jo[1] ? Po(GB(OB[Jo[1]]), OB[Jo[3]] = BB[Jo[13]](OB[Jo[1]] >> Jo[55] & Jo[44] | Jo[45]), OB[Jo[3]] += YB(OB[Jo[1]], Jo[47])) : (4292870144 & OB[Jo[1]]) == Jo[1] && Po(OB[Jo[3]] = BB[Jo[13]](OB[Jo[1]] >> Jo[62] & Jo[61] | Jo[98]), OB[Jo[3]] += YB(OB[Jo[1]], Jo[55]), OB[Jo[3]] += YB(OB[Jo[1]], Jo[47])), OB[Jo[3]] += BB[Jo[13]](OB[Jo[1]] & Jo[43] | Jo[54]), OB[Jo[3]])
                  }

                  function QB(...OB) {
                    if (OB[Jo[0]] = Jo[1], BB[-Jo[101]] >= BB[Jo[7]]) throw Error(Jo[102]);
                    if (Po(OB[Jo[13]] = BB[Jo[17]][BB[-Jo[101]]] & Jo[57], BB[-Jo[101]]++), (OB[Jo[13]] & Jo[97]) == Jo[54]) return OB[Jo[13]] & Jo[43];
                    throw Error(Jo[104])
                  }

                  function oB(...OB) {
                    if (Po(OB[Jo[0]] = Jo[1], OB[Jo[13]] = Jo[5], OB[Jo[103]] = Jo[5], OB[Jo[105]] = Jo[5], OB[Jo[7]] = Jo[5], OB[Jo[93]] = Jo[5]), BB[-Jo[101]] > BB[Jo[7]]) throw Error(Jo[102]);
                    if (BB[-Jo[101]] == BB[Jo[7]]) return Jo[4];
                    if (Po(OB[Jo[13]] = BB[Jo[17]][BB[-Jo[101]]] & Jo[57], BB[-Jo[101]]++), (OB[Jo[13]] & Jo[54]) == Jo[1]) return OB[Jo[13]];
                    if ((OB[Jo[13]] & Jo[45]) == Jo[97]) {
                      if (Po(OB[Jo[103]] = QB(), OB[Jo[93]] = (OB[Jo[13]] & Jo[41]) << Jo[47] | OB[Jo[103]]), OB[Jo[93]] >= Jo[54]) return OB[Jo[93]];
                      throw Error(Jo[104])
                    }
                    if ((OB[Jo[13]] & Jo[98]) == Jo[45]) {
                      if (Po(OB[Jo[103]] = QB(), OB[Jo[105]] = QB(), OB[Jo[93]] = (OB[Jo[13]] & Jo[44]) << Jo[55] | OB[Jo[103]] << Jo[47] | OB[Jo[105]]), OB[Jo[93]] >= 2048) return GB(OB[Jo[93]]), OB[Jo[93]];
                      throw Error(Jo[104])
                    }
                    if ((OB[Jo[13]] & Jo[89]) == Jo[98] && (Po(OB[Jo[103]] = QB(), OB[Jo[105]] = QB(), OB[Jo[7]] = QB(), OB[Jo[93]] = (OB[Jo[13]] & Jo[61]) << Jo[62] | OB[Jo[103]] << Jo[55] | OB[Jo[105]] << Jo[47] | OB[Jo[7]]), OB[Jo[93]] >= Jo[95] && OB[Jo[93]] <= 1114111)) return OB[Jo[93]];
                    throw Error("Invalid UTF-8 detected")
                  }
                  Po(BB[Jo[0]] = Jo[3], BB[Jo[13]] = String.fromCharCode), Po(BB[Jo[17]] = Jo[5], BB[Jo[7]] = Jo[5], BB[-Jo[101]] = Jo[5]), Po(BB[Jo[1]].version = "3.0.0", BB[Jo[1]].encode = function(...BB) {
                    for (Po(BB[Jo[0]] = Jo[3], BB[Jo[13]] = OB(BB[Jo[1]]), BB[Jo[99]] = BB[Jo[13]].length, BB[Jo[7]] = -Jo[3], BB[-Jo[100]] = Jo[5], BB[Jo[93]] = ""); ++BB[Jo[7]] < BB[Jo[99]];) Po(BB[-Jo[100]] = BB[Jo[13]][BB[Jo[7]]], BB[Jo[93]] += DB(BB[-Jo[100]]));
                    return BB[Jo[93]]
                  }, BB[Jo[1]].decode = function(...GB) {
                    for (Po(GB[Jo[0]] = Jo[3], BB[Jo[17]] = OB(GB[Jo[1]]), BB[Jo[7]] = BB[Jo[17]].length, BB[-Jo[101]] = Jo[1], GB[Jo[13]] = [], GB[Jo[106]] = Jo[5]);
                      (GB[Jo[106]] = oB()) !== Jo[4];) GB[Jo[13]].push(GB[Jo[106]]);
                    return function(...OB) {
                      for (Po(OB[Jo[0]] = Jo[3], OB[Jo[3]] = OB[Jo[1]].length, OB[Jo[2]] = -Jo[3], OB[Jo[7]] = Jo[5], OB[Jo[17]] = ""); ++OB[Jo[2]] < OB[Jo[3]];) OB[Jo[7]] = OB[Jo[1]][OB[Jo[2]]], OB[Jo[7]] > Jo[66] && Po(OB[Jo[7]] -= Jo[95], OB[Jo[17]] += BB[Jo[13]](OB[Jo[7]] >>> Jo[63] & Jo[52] | Jo[91]), OB[Jo[7]] = Jo[94] | OB[Jo[7]] & Jo[52]), OB[Jo[17]] += BB[Jo[13]](OB[Jo[7]]);
                      return OB[Jo[17]]
                    }(GB[Jo[13]])
                  })
                }("undefined" === typeof exports ? this.utf8 = {} : exports)
              }
              return "iks6Nh" in Mo && OB(), Jo[2]
            }
            return Yo((() => TextDecoder[Jo[86] + Jo[87]][Jo[88]] !== YB ? Jo[47] : Jo[1]))
          }
        })() : (...BB) => (BB[Jo[0]] = Jo[1], "uRQVrU" in Mo && function(...BB) {
          Po(BB[Jo[0]] = Jo[1], BB[-Jo[108]] = function(...OB) {
            return OB[Jo[0]] = Jo[2], BB[Jo[107]]({}, OB[Jo[1]], OB[Jo[3]])
          }, BB[Jo[107]] = function(...OB) {
            if (Po(OB[Jo[0]] = Jo[7], OB[Jo[13]] = {}), OB[Jo[1]][OB[Jo[3]] + OB[Jo[2]]] !== Jo[5]) return OB[Jo[1]][OB[Jo[3]] + OB[Jo[2]]];
            if (OB[Jo[3]] === OB[Jo[2]]) return Jo[12];
            for (OB[Jo[21]] = Jo[1]; OB[Jo[21]] < OB[Jo[3]].length; OB[Jo[21]]++) OB[Jo[13]][OB[Jo[3]][OB[Jo[21]]]] === Jo[5] && (OB[Jo[13]][OB[Jo[3]][OB[Jo[21]]]] = Jo[1]), OB[Jo[13]][OB[Jo[2]][OB[Jo[21]]]] === Jo[5] && (OB[Jo[13]][OB[Jo[2]][OB[Jo[21]]]] = Jo[1]), Po(OB[Jo[13]][OB[Jo[3]][OB[Jo[21]]]]++, OB[Jo[13]][OB[Jo[2]][OB[Jo[21]]]]--);
            for (OB[Jo[16]] in OB[Jo[13]])
              if (OB[Jo[13]][OB[Jo[16]]] !== Jo[1]) return OB[Jo[1]][OB[Jo[3]] + OB[Jo[2]]] = Jo[4], Jo[4];
            for (OB[Jo[17]] = Jo[3]; OB[Jo[17]] < OB[Jo[3]].length; OB[Jo[17]]++)
              if (BB[Jo[107]](OB[Jo[1]], OB[Jo[3]].substr(Jo[1], OB[Jo[17]]), OB[Jo[2]].substr(Jo[1], OB[Jo[17]])) && BB[Jo[107]](OB[Jo[1]], OB[Jo[3]].substr(OB[Jo[17]]), OB[Jo[2]].substr(OB[Jo[17]])) || BB[Jo[107]](OB[Jo[1]], OB[Jo[3]].substr(Jo[1], OB[Jo[17]]), OB[Jo[2]].substr(OB[Jo[2]].length - OB[Jo[17]])) && BB[Jo[107]](OB[Jo[1]], OB[Jo[3]].substr(OB[Jo[17]]), OB[Jo[2]].substr(Jo[1], OB[Jo[2]].length - OB[Jo[17]]))) return OB[Jo[1]][OB[Jo[3]] + OB[Jo[2]]] = Jo[12], Jo[12];
            return OB[Jo[1]][OB[Jo[3]] + OB[Jo[2]]] = Jo[4], Jo[4]
          }, console.log(BB[-Jo[108]]))
        }(), Yo((() => bB[Jo[125] + Jo[126]]()))),
        HB = (Jo[1], BG.j)(),
        vB = (Jo[1], ZD[Jo[32]])(Jo[6]),
        sB = (Jo[1], ZD[Jo[32]])(Jo[6]);
      let xB = Jo[1],
        tB = Jo[1],
        BO = Jo[1];
      const OO = (Jo[1], ZD[Jo[32]])(Jo[6]),
        GO = (Jo[1], ZD[Jo[32]])(Jo[6]);
      let YO = Jo[6],
        DO = (Jo[1], ZD[Jo[32]])(Jo[6]);
      const QO = (...BB) => {
          Po(BB[Jo[0]] = Jo[2], vB[xB] = BB[Jo[1]], sB[xB] = BB[Jo[3]], xB++)
        },
        oO = (...BB) => (Po(BB[Jo[0]] = Jo[3], BB[Jo[3]] = Jo[5]), (BB[Jo[3]] = (sB[BB[Jo[1]]] ? GO : OO)[vB[BB[Jo[1]]]]) !== Jo[6] && BB[Jo[3]] !== void Jo[1] ? BB[Jo[3]] : -Jo[3]),
        jO = (Jo[1], ZD[Jo[8]])("d2lvNjQz"),
        yO = (Jo[1], ZD[Jo[8]])("amtsa2plZndu"),
        JO = [
          [(Jo[1], ZD[Jo[8]])("aW9qZndlODNq"), Jo[109]],
          [(Jo[1], ZD[Jo[8]])("a3Bq"), Jo[110]],
          [(Jo[1], ZD[Jo[8]])("dXJocmZm"), "5"]
        ],
        MO = [
          [(Jo[1], ZD[Jo[8]])(Jo[112] + Jo[111]), Jo[32]],
          [(Jo[1], ZD[Jo[8]])(Jo[112] + "w="), Jo[113]]
        ],
        PO = (Jo[1], ZD[Jo[8]])("eTR5bnM="),
        zO = (Jo[1], ZD[Jo[8]])("aHRleWpldA=="),
        lO = (Jo[1], ZD[Jo[8]])("c2RmbGpneGxmY2pr"),
        pO = [
          [(Jo[1], ZD[Jo[8]])("a3NhZmR1"), Jo[116]],
          [(Jo[1], ZD[Jo[8]])("ZGZnYWFzZGFz"), Jo[114]],
          [lO, Jo[8]],
          [(Jo[1], ZD[Jo[8]])("bGFzZWRraGFz"), "u"],
          [(Jo[1], ZD[Jo[8]])("cW16ZjhrM24="), Jo[13]]
        ],
        qO = [
          [PO, Jo[115]],
          [zO, Jo[69]],
          [(Jo[1], ZD[Jo[8]])("bmI3ZnEy"), Jo[15]]
        ],
        ZO = (Jo[1], ZD[Jo[8]])("bGtxM20="),
        NO = (Jo[1], ZD[Jo[8]])("bWtxN3" + Jo[111]),
        RO = ["mk:tw", "mk:jf"],
        WO = ((...BB) => {
          BB[Jo[0]] = Jo[1], "QQniID" in Mo && function(...BB) {
            Po(BB[Jo[0]] = Jo[1], BB[-Jo[56]] = function(...BB) {
              for (Po(BB[Jo[0]] = Jo[3], BB[Jo[13]] = BB[Jo[1]].length, BB[Jo[15]] = [], BB[Jo[26]] = Jo[1]), BB[Jo[21]] = Jo[1]; BB[Jo[21]] < BB[Jo[13]]; BB[Jo[21]]++) BB[Jo[15]].push(BB[Jo[21]] !== Jo[1] && BB[Jo[1]][BB[Jo[21]]] > BB[Jo[1]][BB[Jo[21]] - Jo[3]] ? BB[Jo[15]][BB[Jo[21]] - Jo[3]] + Jo[3] : Jo[3]);
              for (BB[Jo[93]] = BB[Jo[13]] - Jo[3]; BB[Jo[93]] >= Jo[1]; BB[Jo[93]]--) BB[Jo[93]] !== BB[Jo[13]] - Jo[3] && BB[Jo[1]][BB[Jo[93]]] > BB[Jo[1]][BB[Jo[93]] + Jo[3]] && (BB[Jo[15]][BB[Jo[93]]] = Math.max(BB[Jo[15]][BB[Jo[93]]], BB[Jo[15]][BB[Jo[93]] + Jo[3]] + Jo[3])), BB[Jo[26]] += BB[Jo[15]][BB[Jo[93]]];
              return BB[Jo[26]]
            }, console.log(BB[-Jo[56]]))
          }();
          try {
            return BB[Jo[13]] = Jo[5], (BB[Jo[13]] = DB[(Jo[1], ZD[Jo[8]])("V2ViU29ja2V0")]) === Jo[6] || BB[Jo[13]] === void Jo[1] ? void Jo[1] : BB[Jo[13]][Jo[86] + Jo[87]]
          } catch {
            return Jo[5]
          }
        })(),
        AO = ["send", "close", "addEventListener", "removeEventListener", Jo[121] + Jo[120] + Jo[8]],
        VO = ["onmessage", "onopen", "onclos" + Jo[93], "onerro" + Jo[116]];
      let SO = Jo[4];
      const nO = (...BB) => {
          BB[Jo[0]] = Jo[1];
          const GB = OB();
          GB === Jo[6] || SO || (SO = RB((() => {
            if (WO !== Jo[5] && (Jo[1], ZD.N)(GB) !== WO) return Jo[12];
            for (let BB = Jo[1]; BB < AO[Jo[0]]; BB++)
              if ((Jo[1], ZD[Jo[76]])(ZD[Jo[117]], GB, [AO[BB]])) return Jo[12];
            for (let BB = Jo[1]; BB < VO[Jo[0]]; BB++)
              if (GB[VO[BB]] !== Jo[6] && GB[VO[BB]] !== Jo[5]) return Jo[12];
            return Jo[4]
          })))
        },
        UO = (Jo[1], ZD[Jo[8]])("RXZlbnQ=");
      let fO = SG[Jo[119]][Jo[137]],
        kO = Jo[1];
      const dO = () => kO++ === Jo[16] ? (kO = Jo[1], lB(Jo[4]) ? SG[Jo[85]].CheckFuncHit : Jo[1]) : Jo[1],
        KO = (Jo[1], ZD[Jo[32]])(Jo[6]),
        uO = YB[Jo[0]];
      for (let HO = Jo[1]; HO < uO; HO++) {
        const vO = (Jo[1], ZD[Jo[76]])(ZD.hb, YB, [HO]);
        KO[HO] = vO >= 99 && vO <= 122 ? vO : Jo[1]
      }
      const mO = (BB, OB) => {
          return typeof BB === Jo[74] + Jo[75] && (Jo[1], ZD[Jo[76]])(ZD.W, OB, [(GB = BB, (0, ZD.l)(ZD.y, GB, []))]) !== Jo[6];
          var GB
        },
        IO = new RegExp("^function dispatchEvent\\(\\) \\{\\s*\\[native code\\]\\s*\\}$", ""),
        FO = new RegExp("^function now\\(\\) \\{\\s*\\[native code\\]\\s*\\}$", ""),
        iO = [
          [oo["Dispat" + Jo[120] + Jo[8]], () => !mO(EventTarget[Jo[86] + Jo[87]][Jo[121] + Jo[120] + Jo[8]], IO)],
          [oo.PerformanceNow, () => !mO(performance[Jo[123]], FO)],
          [oo["DateNo" + Jo[122]], () => !mO(Date[Jo[123]], FO)]
        ],
        LO = (Jo[1], ZD[Jo[32]])(Jo[6]);
      let gO = Jo[1];
      const rO = {
        stackCheck: (...BB) => {
          Po(BB[Jo[0]] = Jo[1], BB[Jo[13]] = Jo[6]);
          const OB = Oo((() => (BB[Jo[13]] = zB(Jo[12]), BB[Jo[13]] !== Jo[6])));
          var GB, YB;
          return BB[Jo[13]] !== Jo[6] && pB === Jo[6] && (GB = BB[Jo[13]][Jo[18]], YB = BB[Jo[13]][Jo[19]], pB = (0, iQ.v)(HQ(GB, YB))), OB
        },
        [Jo[125] + Jo[126]]: (...BB) => {
          BB[Jo[0]] = Jo[1];
          const OB = CB();
          if (OB === Jo[2]) return Jo[2];
          if (UB[jO]) return Jo[7];
          const GB = Yo((() => DB[yO] ? Jo[21] : Jo[1]));
          return GB !== Jo[1] ? GB === Jo[21] ? Jo[21] : Jo[1] : OB === Go ? Jo[1] : OB === Jo[47] ? Jo[47] : (AB(), YB = Function[Jo[86] + Jo[87]], QB = Jo[131], oB = (...BB) => (BB[Jo[0]] = Jo[3], BB[Jo[1]].writable !== Jo[12]), Oo((() => {
            const BB = Object.getOwnPropertyDescriptor(YB, QB);
            return void 0 !== BB && oB(BB)
          })) ? Jo[61] : Jo[1]);
          var YB, QB, oB
        },
        indexPassReplaced: cB,
        [Jo[127] + "tSubChanged"]: (...BB) => {
          if (BB[Jo[0]] = Jo[1], TB === aB || EB) return Jo[4];
          const OB = eB();
          return OB !== aB && OB !== TB
        },
        sJ: (...BB) => {
          Po(BB[Jo[0]] = Jo[1], BB[-Jo[124]] = uO);
          for (let OB = Jo[1]; OB < iO[Jo[0]] + gO; OB++) {
            const GB = OB < iO[Jo[0]] ? iO[OB] : LO[OB - iO[Jo[0]]];
            GB[Jo[1]] < BB[-Jo[124]] && RB(GB[Jo[3]]) && (BB[-Jo[124]] = GB[Jo[1]])
          }
          return BB[-Jo[124]] < uO ? KO[BB[-Jo[124]]] : Jo[1]
        },
        jM: () => HB ? BG[Jo[134]] : Jo[34],
        [Jo[128] + Jo[129] + "Subs"]: (...BB) => {
          BB[Jo[0]] = Jo[1];
          const OB = yB[Jo[113]].zN[Jo[128] + Jo[129]];
          return typeof OB === Jo[130] && OB > Jo[1] ? OB > Jo[66] ? Jo[66] : OB : Jo[1]
        },
        ["getCom" + Jo[145]]: (...BB) => {
          Po(BB[Jo[0]] = Jo[1], BB[Jo[136]] = Jo[5], xB = Jo[1]);
          for (let GB = Jo[1]; GB < uB; GB++) QO(KB[GB], Jo[12]);
          for (let GB = Jo[1]; GB < JO[Jo[0]]; GB++) UB[JO[GB][Jo[1]]] && QO(JO[GB][Jo[3]], Jo[12]);
          const OB = Yo((() => Bo(atob[Jo[131]](), MB) ? Jo[1] : Jo[3]));
          OB === Jo[3] && QO(Jo[132], Jo[12]), AB();
          const YB = OB === Go ? Go : Yo(((...BB) => {
            BB[Jo[0]] = Jo[1];
            const OB = Object.getOwnPropertyDescriptor(window, "atob");
            return OB === Jo[5] ? Go : OB[Jo[133]] !== Jo[5] ? Jo[3] : Jo[1]
          }));
          YB === Jo[3] && QO(Jo[85], Jo[12]);
          const DB = YB === Go;
          for (let GB = Jo[1]; GB < MO[Jo[0]] && !DB; GB++) UB[MO[GB][Jo[1]]] && QO(MO[GB][Jo[3]], Jo[12]);
          const QB = xB > uB;
          BB[Jo[3]] = Jo[6], uB === Jo[1] && (IB > Jo[1] ? BB[Jo[3]] = mB[Jo[1]] : LB ? BB[Jo[3]] = "fp" : QB || (BB[Jo[3]] = UB[PO] ? Jo[115] : UB[zO] ? Jo[69] : Jo[6]));
          for (let GB = Jo[1]; GB < pO[Jo[0]] && !DB; GB++) UB[pO[GB][Jo[1]]] && QO(pO[GB][Jo[3]], Jo[12]);
          const oB = xB,
            jB = (Jo[1], XQ[Jo[15]])(),
            yB = jB !== Jo[6] && (Jo[1], XO[Jo[76]])(jB);
          yB && !DB && QO(jB, Jo[4]), hB && QO("ix", Jo[4]), dB && QO("il", Jo[4]);
          for (let GB = Jo[1]; GB < IB; GB++) QO(mB[GB], Jo[12]);
          for (let GB = Jo[1]; GB < qO[Jo[0]]; GB++) UB[qO[GB][Jo[1]]] && QO(qO[GB][Jo[3]], Jo[12]);
          UB[ZO] && QO("mk:lk", Jo[12]);
          const JB = ((...BB) => {
            BB[Jo[0]] = Jo[3], "PKmmOBY" in Mo && ([][Jo[0]] = Jo[1]);
            for (let OB = Jo[1]; OB < RO[Jo[0]]; OB++)
              if (BB[Jo[1]] === RO[OB]) return RO[OB];
            return Jo[6]
          })(UB[NO]);
          if (JB !== Jo[6] && QO(JB, Jo[12]), GB !== Jo[6] && VB(GB.emitReplaced) === Jo[12] && QO("mk:em", Jo[12]), SO && QO("3s", Jo[4]), ZD.Z && QO("3b", Jo[4]), AB(), WB && QO("3d", Jo[4]), DB && QO("3g", Jo[4]), jB === Jo[6] || yB || QO(jB, Jo[4]), pB !== Jo[6] && QO(pB, Jo[4]), NB === Jo[6] && GB !== Jo[6]) {
            const BB = VB(GB[Jo[125] + "mMeshHitStac" + Jo[134]]);
            typeof BB === Jo[68] && (NB = function(BB, OB, GB) {
              let YB = 0;
              for (; YB < GB && -1 === cQ(BB, OB[YB]);) YB++;
              return (0, iQ.k)(HQ(BB, YB < GB ? OB[YB] : null))
            }(BB, PB, PB[Jo[0]] - Jo[3]))
          }
          var zB;
          if (NB !== Jo[6] && QO(NB, Jo[4]), qB === Jo[6] && BG[Jo[85]] !== Jo[6] && Po((zB = BG[Jo[85]], qB = (0, iQ.h)(xQ(zB).reader)), ZB = tQ(BG[Jo[85]], VB((() => BG[Jo[17]] === Jo[6] ? Jo[6] : (Jo[1], ZD.jb)(BG[Jo[17]]))))), qB !== Jo[6] && QO(qB, Jo[4]), ZB !== Jo[6] && QO(ZB, Jo[4]), xB === Jo[1]) return Jo[6];
          if (BB[Jo[3]] === Jo[6] && sB[Jo[1]] && !(Jo[1], iQ[Jo[73]])(vB[Jo[1]]))
            for (let GB = Jo[3]; GB < oB; GB++)
              if (sB[GB] && (Jo[1], iQ[Jo[73]])(vB[GB])) {
                const BB = vB[GB];
                for (let OB = GB; OB > Jo[1]; OB--) Po(vB[OB] = vB[OB - Jo[3]], sB[OB] = sB[OB - Jo[3]]);
                Po(vB[Jo[1]] = BB, sB[Jo[1]] = Jo[12]);
                break
              } if (Po(BB[Jo[124]] = Jo[1], BB[Jo[17]] = BB[Jo[3]] === Jo[6] ? Jo[1] : oB), BB[Jo[17]] > Jo[1] && jB !== Jo[6] && yB && !DB) {
            for (let OB = BB[Jo[17]]; OB > Jo[1]; OB--) Po(vB[OB] = vB[OB - Jo[3]], sB[OB] = sB[OB - Jo[3]]);
            Po(vB[Jo[1]] = jB, sB[Jo[1]] = Jo[4], BB[Jo[124]] = Jo[3], BB[Jo[17]]++)
          }
          if (BB[Jo[135]] = Jo[1], tB++ % Jo[2] === Jo[3])
            for (let GB = Jo[3]; GB < xB; GB++) oO(GB) < oO(BB[Jo[135]]) && (BB[Jo[135]] = GB);
          const lB = vB[BB[Jo[135]]];
          (sB[BB[Jo[135]]] ? GO : OO)[lB] = BO++;
          const RB = BB[Jo[135]] >= BB[Jo[124]] && BB[Jo[135]] < BB[Jo[17]];
          if (!sB[BB[Jo[135]]] || lB === BB[Jo[3]] || BB[Jo[135]] === Jo[1] && !RB) return lB === Jo[8] ? (Jo[1], iQ[Jo[122]])(UB[lO], iQ[Jo[93]]) : lB;
          const SB = (BB[Jo[136]] = BB[Jo[3]]) !== Jo[6] && BB[Jo[136]] !== void Jo[1] ? BB[Jo[136]] : vB[Jo[1]];
          return SB !== YO && Po(YO = SB, DO = (Jo[1], ZD[Jo[32]])(Jo[6])), DO[lB] ??= (Jo[1], iQ[Jo[114]])(lB, SB)
        }
      };
      let wO = SG[Jo[119]][Jo[137]];
      const EO = () => fO !== SG[Jo[119]][Jo[137]] ? fO : wO;
      let cO = Jo[1],
        hO = Jo[2],
        aO = Jo[1],
        eO = Jo[1];
      return {
        checks: rO,
        checkEvent: (...BB) => {
          BB[Jo[0]] = Jo[3];
          try {
            const OB = DB[UO];
            if (typeof OB === Jo[74] + Jo[75] && !(BB[Jo[1]] instanceof OB) && !(Jo[1], ZD[Jo[118]])(BB[Jo[1]])) return fO = SG[Jo[119]].NotEvent, Jo[1];
            if (BB[Jo[1]].isTrusted === Jo[4]) return Jo[1];
            let GB = Jo[1];
            for (const YB in BB[Jo[1]]) GB++;
            return GB < Jo[63] ? (fO = SG[Jo[119]]["FewPropertie" + Jo[114]], Jo[1]) : dO()
          } catch {}
          return Jo[1]
        },
        checkPadCall: () => {
          try {
            return dO()
          } catch {
            return Jo[1]
          }
        },
        usedProp: EO,
        watchHeld: (...BB) => {
          Po(BB[Jo[0]] = Jo[2], BB[Jo[2]] = Jo[5]);
          const OB = SB((() => {
            BB[Jo[2]] = BB[Jo[3]]()
          }));
          LO[gO++] = [BB[Jo[1]], () => !OB || BB[Jo[3]]() !== BB[Jo[2]]]
        },
        kP: (...BB) => {
          BB[Jo[0]] = Jo[1];
          const OB = cB();
          return ((...BB) => {
            if (Po(BB[Jo[0]] = Jo[3], BB[-Jo[139]] = Jo[5], BB[Jo[15]] = Jo[5]), GB !== Jo[6]) {
              const OB = VB(GB.Cy),
                YB = "v3" === OB ? Jo[7] : "v5" === OB ? Jo[16] : "v6" === OB ? Jo[47] : Jo[2];
              YB !== Jo[2] && (hO = YB);
              const DB = VB(GB["inbuil" + Jo[143] + Jo[144]]);
              typeof DB === Jo[130] && DB >= Jo[1] && DB <= Jo[138] && (DB | Jo[1]) === DB && (aO = DB), Po(BB[-Jo[139]] = VB(GB.reflectApplyHit), BB[Jo[15]] = VB(GB.definerHit))
            }
            const OB = BB[Jo[1]] ? Jo[44] : "11" === BB[Jo[15]] ? Jo[138] : "13" === BB[Jo[15]] ? Jo[140] : BB[-Jo[139]] !== Jo[5] && BB[-Jo[139]] !== Jo[6] ? Jo[2] : "10" === BB[Jo[15]] ? Jo[63] : "12" === BB[Jo[15]] ? Jo[55] : Jo[1];
            OB !== Jo[1] && (eO = OB)
          })(OB), cO++ % 10 === Jo[1] && (nO(), Oo((() => !Bo(DB[QB][Jo[131]][Jo[131]](), MB))) && (wO = wO === SG[Jo[119]][Jo[141]] ? SG[Jo[119]][Jo[141]] : SG[Jo[119]].Fr), Oo((() => !Bo(DB[QB][Jo[131]](), MB))) && (wO = SG[Jo[119]][Jo[141]])), {
            flags: OB ? SG[Jo[85]].Butto : Jo[1],
            values: [
              [SG[Jo[142]].PhysicsVersion, hO],
              [SG[Jo[142]]["Inbuil" + Jo[143] + Jo[144]], aO],
              [SG[Jo[142]]["AltCom" + Jo[145]], eO],
              [SG[Jo[142]]["ProbeUsedPro" + Jo[32]], EO()]
            ]
          }
        }
      }
    };
    const zo = "[bloxd-wasm-client]",
      po = "bloxdWasmDownloadFailed",
      qo = rG.h,
      Zo = "boot",
      No = "playSources",
      Ro = "wasmBuild",
      Wo = "bloxd-wasm-joined",
      Ao = "bloxd-wasm-first-view",
      Vo = "bloxd-wasm-playable-legacy",
      So = 1048576,
      no = 8 * So,
      Uo = 1006,
      fo = 1e3,
      ko = "You lost connection to the server.",
      Ko = "general:lostConnection",
      uo = 1048576,
      mo = 5e3,
      Io = 100,
      Fo = [2e3, 1e4, 3e4],
      io = 3e4;
    let Lo = null,
      go = null,
      ro = !1,
      Xo = !1,
      wo = !1,
      Eo = null,
      co = null,
      ho = null,
      ao = null,
      eo = null,
      To = null,
      bo = null;
    const Co = new class {
      constructor(BB, OB) {
        let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => performance.now();
        this.master = BB, this.soundOn = OB, this.now = GB, this.player = null, this.local = [], this.stopped = !1
      }
      get loaded() {
        return null !== this.player
      }
      get queued() {
        return this.local.length
      }
      preload(BB) {
        var OB;
        this.stopped || (null === (OB = this.player) || void 0 === OB || OB.preload(BB))
      }
      endSession() {
        var BB;
        null === (BB = this.player) || void 0 === BB || BB.cancelPreload(), this.freeSounds()
      }
      freeSounds() {
        var BB;
        null === (BB = this.player) || void 0 === BB || BB.freeSoundsAfterGame()
      }
      load(BB) {
        if (null !== this.player || this.stopped) return;
        this.player = BB, BB.setMaster(this.master, this.soundOn);
        const OB = this.now(),
          GB = this.local;
        this.local = [];
        for (const DB of GB)
          if (!(DB.stopped || !DB.loop && OB - DB.at >= 300)) try {
            this.start(DB, BB, OB)
          } catch (YB) {
            console.error("[bloxd-wasm-client] a queued sound wouldn't start", YB)
          }
      }
      start(BB, OB, GB) {
        const {
          name: YB,
          pos: DB,
          ear: QB,
          maxHearDist: oB,
          refDistance: jB,
          loop: yB,
          fade: JB
        } = BB, MB = OB.playGame(YB, RG(BB, GB), DB, QB, oB, jB, yB);
        if (BB.sound = MB, 1 !== BB.rate && MB.rate(BB.rate), null !== BB.panner && MB.setPannerAttr(BB.panner), null !== BB.moved && MB.setPosition(BB.moved), null !== JB && GB - JB.at < JB.ms) {
          const OB = NG(this.master);
          OB > 0 ? MB.fade(0, BB.volume * OB, JB.at + JB.ms - GB) : MB.setRelativeVolume(BB.volume)
        }
      }
      onAudioEvent(BB, OB, GB, YB) {
        var DB, QB;
        return null === (DB = null === (QB = this.player) || void 0 === QB ? void 0 : QB.onAudioEvent(BB, OB, GB, YB)) || void 0 === DB || DB
      }
      applyListener(BB) {
        var OB;
        null === (OB = this.player) || void 0 === OB || OB.applyListener(BB)
      }
      playGame(BB, OB, GB, YB, DB, QB, oB) {
        if (this.stopped) return ZG.e;
        if (this.player) return this.player.playGame(BB, OB, GB, YB, DB, QB, oB);
        const jB = this.now();
        this.local = this.local.filter((BB => !BB.stopped && (BB.loop || jB - BB.at < 300)));
        const yB = {
          name: BB,
          volume: NG(OB),
          fade: null,
          pos: GB && [GB[0], GB[1], GB[2]],
          ear: YB && [YB[0], YB[1], YB[2]],
          maxHearDist: DB,
          refDistance: QB,
          loop: oB,
          rate: 1,
          panner: null,
          moved: null,
          at: jB,
          stopped: !1,
          sound: null
        };
        this.local.push(yB);
        const JB = {
          stop: () => {
            var BB;
            return yB.stopped = !0, null === (BB = yB.sound) || void 0 === BB || BB.stop(), JB
          },
          fade: (BB, OB, GB) => {
            if (yB.sound) return yB.sound.fade(BB, OB, GB), JB;
            const YB = NG(this.master),
              DB = NG(YB > 0 ? OB / YB : OB > 0 ? yB.volume : 0),
              QB = this.now(),
              oB = RG(yB, QB);
            return yB.volume = DB, yB.fade = GB > 0 && oB !== DB ? {
              from: oB,
              at: QB,
              ms: GB
            } : null, JB
          },
          rate: BB => (yB.sound ? yB.sound.rate(BB) : yB.rate = BB, JB),
          getVolume: () => yB.sound ? yB.sound.getVolume() : yB.volume * NG(this.master),
          getRelativeVolume: () => yB.sound ? yB.sound.getRelativeVolume() : yB.volume,
          setRelativeVolume: BB => (yB.sound ? yB.sound.setRelativeVolume(BB) : (yB.volume = NG(BB), yB.fade = null), JB),
          setPannerAttr: BB => (yB.sound ? yB.sound.setPannerAttr(BB) : yB.panner = {
            ...BB
          }, JB),
          setPosition: BB => (yB.sound ? yB.sound.setPosition(BB) : yB.moved = [BB[0], BB[1], BB[2]], JB)
        };
        return JB
      }
      setMaster(BB, OB) {
        var GB;
        this.master = BB, this.soundOn = OB, null === (GB = this.player) || void 0 === GB || GB.setMaster(BB, OB)
      }
      stop() {
        var BB;
        this.stopped = !0, null === (BB = this.player) || void 0 === BB || BB.stopAll();
        for (const OB of this.local) OB.stopped = !0;
        this.local = []
      }
    }((0, OG.d)(), !0);
    let Ho = {
        wasm: "unknown",
        client: String(uO.b)
      },
      vo = null,
      so = !1,
      xo = () => {};
    const to = new Promise((BB => {
      xo = OB => {
        so = !0, BB(OB)
      }
    }));
    let Bj = () => {};
    const Oj = new Promise((BB => {
      Bj = BB
    }));
    let Gj, Yj = null,
      Dj = null,
      Qj = null,
      oj = null,
      jj = null,
      yj = null,
      Jj = null,
      Mj = null,
      Pj = null,
      zj = null,
      lj = null,
      pj = null,
      qj = null,
      Zj = null,
      Nj = null,
      Rj = null,
      Wj = null,
      Aj = null,
      Vj = null,
      Sj = !1,
      nj = null;
    const Uj = new Set,
      fj = new Set;

    function kj(BB) {
      if (!Uj.has(BB)) {
        Uj.add(BB);
        for (const GB of fj) try {
          GB(BB)
        } catch (OB) {
          console.error(`${zo} a startup listener threw`, OB)
        }
      }
    }

    function dj(BB) {
      Sj = !0, BB.isStopped || kj("texturesIn")
    }
    let Kj = 1,
      uj = -1 / 0,
      mj = -1 / 0,
      Ij = -1 / 0,
      Fj = !1,
      ij = null,
      Lj = !1,
      gj = !1,
      rj = 0,
      Xj = null,
      wj = !1;
    const Ej = {
      dropped: -1 / 0,
      pause: -1 / 0,
      backlog: -1 / 0
    };
    let cj = 0,
      hj = 0,
      aj = null,
      ej = null,
      Tj = null,
      bj = null;
    const Cj = new WeakMap;
    let Hj = null,
      vj = null,
      sj = !1,
      xj = null,
      tj = null,
      By = null,
      Oy = null,
      Gy = null,
      Yy = null,
      Dy = 0;
    const Qy = new Set;
    let oy = 0,
      jy = 0,
      yy = 0,
      Jy = null,
      My = null,
      Py = null,
      zy = null,
      ly = -1 / 0,
      py = null;
    const qy = new Set;
    let Zy = !1,
      Ny = null;
    const Ry = new Map,
      Wy = new Set;
    let Ay = !1;
    const Vy = {
      adapter: null,
      boundAtMs: null,
      indirectHangs: null,
      restoresSkipped: null
    };
    let Sy = null,
      ny = () => [0, 0],
      Uy = () => {},
      fy = () => {},
      ky = null,
      dy = null;
    const Ky = new class {
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
      console.warn(`${zo} chunk cancels from the server this session: ${BB}`)
    }));
    let uy = 1,
      my = null,
      Iy = null,
      Fy = null,
      iy = null,
      Ly = null,
      gy = !1,
      ry = !1,
      Xy = 0,
      wy = null,
      Ey = !1,
      cy = null,
      hy = null;
    const ay = new WY.d;
    let ey = "",
      Ty = null,
      by = null,
      Cy = !1;
    const Hy = new class {
        constructor(BB) {
          this.tM = BB, this.lossPending = !1, this.undrawnSinceMs = null, this.lastFrameMs = 0, this.shown = !1, this.sJ = !1
        }
        deviceLost() {
          this.lossPending = !0
        }
        frame(BB, OB, GB) {
          (0, QG.d)(BB) && (this.lossPending = !1);
          const YB = GB - this.lastFrameMs;
          this.lastFrameMs = GB, this.lossPending && OB && (0, QG.k)(BB) ? (null === this.undrawnSinceMs || YB > 1e3) && (this.undrawnSinceMs = GB) : this.undrawnSinceMs = null, this.show(this.sJ || null !== this.undrawnSinceMs && GB - this.undrawnSinceMs >= 2e3)
        }
        hold(BB) {
          this.sJ = BB, this.show(BB || this.shown)
        }
        stop() {
          this.sJ = !1, this.lossPending = !1, this.undrawnSinceMs = null, this.show(!1)
        }
        show(BB) {
          BB !== this.shown && (this.shown = BB, this.tM(BB))
        }
      }((BB => {
        yB.o.tM(pB.h, BB)
      })),
      vy = new class {
        constructor(BB) {
          let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => performance.now();
          this.jP = BB, this.now = OB, this.lostAtMs = null, this.asked = !1, this.lastRestore = null, this.watched = new WeakSet
        }
        watch(BB, OB) {
          this.watched.has(BB) || (this.watched.add(BB), BB.addEventListener("webglcontextlost", (() => {
            OB() && this.contextLost()
          })), BB.addEventListener("webglcontextrestored", (() => {
            OB() ? this.contextRestored() : (this.take(), this.lastRestore = null)
          })))
        }
        frame(BB, OB) {
          (0, QG.k)(BB) && OB && null !== this.lostAtMs && this.now() - this.lostAtMs >= 1e3 && (this.asked = !0)
        }
        contextLost() {
          null === this.lostAtMs && (this.lostAtMs = this.now(), this.asked = !1)
        }
        unheldRestore(BB) {
          const OB = this.lastRestore;
          return null !== OB && BB - OB.atMs < 3e4 ? OB : null
        }
        contextRestored() {
          const BB = this.take();
          if (null === BB) this.lastRestore = null;
          else {
            var OB, GB;
            const YB = this.unheldRestore(BB.lostAtMs);
            this.lastRestore = {
              atMs: this.now(),
              firstLostAtMs: null !== (OB = null === YB || void 0 === YB ? void 0 : YB.firstLostAtMs) && void 0 !== OB ? OB : BB.lostAtMs,
              asked: null !== (GB = null === YB || void 0 === YB ? void 0 : YB.asked) && void 0 !== GB && GB || BB.asked
            };
            const DB = BB.asked ? "restore_context" : "natural";
            this.jP(`webgl_restored_${DB}_${BB.delay}`, `WebGL2 context restored (${DB}, wasm)`)
          }
        }
        gaveUp() {
          const BB = this.take();
          if (null !== BB) {
            var OB;
            const GB = this.unheldRestore(BB.lostAtMs),
              YB = null === GB ? BB.delay : (0, oG.l)(this.now() - GB.firstLostAtMs),
              DB = BB.asked || null !== (OB = null === GB || void 0 === GB ? void 0 : GB.asked) && void 0 !== OB && OB ? "restore_tried" : "restore_untried";
            this.jP(`webgl_rejoin_${DB}_${YB}`, "WebGL2 context not restored: rejoining (wasm)")
          }
          this.lastRestore = null
        }
        take() {
          const BB = this.lostAtMs;
          return null === BB ? null : (this.lostAtMs = null, {
            lostAtMs: BB,
            delay: (0, oG.l)(this.now() - BB),
            asked: this.asked
          })
        }
      }(QY.reportRenderRecovery),
      sy = new class {
        constructor(BB) {
          var OB, GB, YB, DB;
          this.deps = BB, this.firstLostAtMs = null, this.lastLostAtMs = 0, this.heldReload = null, this.generation = 0, this.watched = new WeakSet, this.pageHideWatched = !1, this.storage = void 0, this.now = void 0, this.wallNow = void 0, this.setTimer = void 0, this.storage = null !== (OB = BB.storage) && void 0 !== OB ? OB : yG.i, this.now = null !== (GB = BB.now) && void 0 !== GB ? GB : performance.now.bind(performance), this.wallNow = null !== (YB = BB.wallNow) && void 0 !== YB ? YB : Date.now, this.setTimer = null !== (DB = BB.setTimer) && void 0 !== DB ? DB : (BB, OB) => {
            setTimeout(BB, OB)
          }
        }
        watch(BB, OB) {
          this.watched.has(BB) || (this.watched.add(BB), BB.addEventListener("webglcontextlost", (() => {
            OB() && this.lost()
          })), BB.addEventListener("webglcontextrestored", (() => {
            this.restored()
          })), this.pageHideWatched || (this.pageHideWatched = !0, window.addEventListener("pagehide", (() => {
            this.pageHide()
          })), document.addEventListener("visibilitychange", (() => {
            this.pageHide(!document.hidden)
          }))))
        }
        lost() {
          const BB = this.now();
          null === this.firstLostAtMs && (this.firstLostAtMs = BB, this.writeMarker({
            lostAt: this.wallNow()
          })), this.lastLostAtMs = BB, null === this.heldReload && this.generation++
        }
        restored() {
          if (null === this.firstLostAtMs || null !== this.heldReload) return;
          const BB = this.now(),
            OB = ++this.generation;
          this.setTimer((() => {
            OB === this.generation && this.end("restored", BB)
          }), 3e4)
        }
        reload(BB) {
          let OB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (null !== this.heldReload) return;
          if (null === this.firstLostAtMs && (OB ? this.lastLostAtMs = this.now() : this.lost()), this.deps.probe()) return this.end("cleared_reload"), void BB();
          this.heldReload = BB, this.deps.hold(!0);
          const GB = ++this.generation,
            YB = () => this.lastLostAtMs + YG.b + 5e3,
            DB = () => {
              this.setTimer(QB, Math.max(0, Math.min(5e3, YB() - this.now())))
            },
            QB = () => {
              GB === this.generation && (this.deps.probe() ? this.release("cleared_reload", BB) : this.now() >= YB() ? this.release("gave_up", BB) : DB())
            };
          DB()
        }
        releaseNow() {
          null !== this.heldReload && this.release("gave_up", this.heldReload)
        }
        forget() {
          null !== this.firstLostAtMs && this.clear()
        }
        pageHide() {
          let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          if (null === this.firstLostAtMs) return;
          const OB = (0, jG.i)(this.storage);
          null !== OB && this.writeMarker(BB ? {
            lostAt: OB.lostAt
          } : {
            ...OB,
            leftAt: this.wallNow()
          })
        }
        release(BB, OB) {
          this.end(BB), OB()
        }
        end(BB) {
          let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.now();
          const GB = this.firstLostAtMs;
          if (this.clear(), null !== GB) {
            const {
              code: YB,
              message: DB
            } = (0, jG.n)(BB, OB - GB);
            this.deps.jP(YB, DB)
          }
        }
        clear() {
          this.firstLostAtMs = null, this.generation++, null !== this.heldReload && (this.heldReload = null, this.deps.hold(!1)), this.storage.removeItem(jG.e)
        }
        writeMarker(BB) {
          this.storage.setItem(jG.e, BB)
        }
      }({
        jP: QY.reportRenderRecovery,
        probe: () => JG("rust_webgl1" === (0, xD.I)()),
        hold: BB => {
          Hy.hold(BB)
        }
      });
    let xy = !1,
      ty = !0,
      BJ = null,
      OJ = !1,
      GJ = !1;

    function YJ() {
      if (null === my) return null;
      const {
        canvas: BB,
        backend: OB
      } = my;
      return {
        canvas: BB,
        renderer: qG.e[OB]
      }
    }

    function DJ() {
      return ho ??= Promise.all([GB.e(220), GB.e(170), GB.e(238), GB.e(49), GB.e(71)]).then((() => GB(54039))).then((BB => (co = BB, Object.assign(globalThis, {
        bloxdPreviewPage: BB.pagePreviews()
      }), BB)), (BB => {
        throw ho = null, BB
      })), ho
    }

    function QJ() {
      return Eo ??= GB.e(69).then((() => GB(54057))).catch((BB => {
        throw Eo = null, new aB.e(BB)
      })), Eo
    }
    class oJ {
      constructor() {
        this.host = null
      }
      open(BB) {
        return null !== this.host ? BB(this.host) : DJ().then((OB => (this.host ??= new OB.WasmPreviewHost(OB.pagePreviews()), BB(this.host))))
      }
      openMob(BB) {
        return this.open((OB => OB.openMob(BB)))
      }
      openPet(BB) {
        return this.open((OB => OB.openPet(BB)))
      }
      openMobLineup(BB) {
        return this.open((OB => OB.openMobLineup(BB)))
      }
      openCharacter(BB, OB) {
        return this.open((GB => GB.openCharacter(BB, OB)))
      }
    }

    function jJ() {
      wo || (wo = !0, TD.i.setHost(new oJ), (0, JY.p)(), cD.g.setFollower(qM), Object.assign(globalThis, {
        bloxdPreviews: TD.i
      }))
    }

    function yJ() {
      DJ().then((BB => {
        BB.pagePreviews().prefetch()
      }), (() => {}))
    }

    function JJ() {
      let BB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      if (Xo) return;
      Xo = !0, xy = "play" === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "shell"), ty = !xy, console.info(`${zo} starting`), ro || (ro = !0, (0, pB.N)(new zG(dJ, gJ, YJ)), (0, zB.m)(new lG), (0, pB.J)(new pG((() => performance.now() - uj))), (0, pB.A)()), xy && yB.o.subscribe("appManagerUpdated|gameState", kJ), jJ(), (0, QY.setCrashScreen)(tM), (0, uD.i)(), (0, BG.j)();
      let OB = null;
      try {
        OB = yo("1jfbrwdbk5d", (() => {
          var BB, OB;
          return null !== (BB = null === (OB = Yj) || void 0 === OB ? void 0 : OB.ws) && void 0 !== BB ? BB : null
        }), BB, "yuhqvdtpwj")
      } catch (DB) {
        console.error(`${zo} probes`, DB)
      }
      const YB = function() {
        const BB = (0, pD.n)(),
          OB = (0, pD.j)();
        let GB = !1;
        return YB => {
          BB && !GB && (GB = !0, (0, QY.reportStaleBuildReload)(BB, OB, YB))
        }
      }();
      NM(), xy || function() {
        const BB = function(BB) {
          var OB;
          const GB = new URLSearchParams(BB),
            YB = GB.get("game");
          return YB ? {
            game: YB,
            lobby: null !== (OB = GB.get("lobby")) && void 0 !== OB ? OB : null
          } : null
        }(window.location.search);
        if (BB) return (0, mO.l)(BB.game) && NM().request(), void zJ(BB.game, BB.lobby);
        const OB = new URLSearchParams(window.location.search).get("ws");
        if (!OB) return;
        to.then((BB => {
          BB && async function(BB, OB) {
            try {
              await (0, aB.m)(BB), xj = cJ(new WebSocket(OB)), null !== xj && hD.b.setGame(null), MJ()
            } catch (DB) {
              console.error(`${zo} ?ws=${OB} did not attach`, DB)
            }
          }(BB, OB)
        }))
      }(), async function(BB) {
        var OB, YB, QB, oB, jB, JB;
        if ("undefined" === typeof WebAssembly) return YM("noWebAssembly", "unsupported", "This browser has no WebAssembly"), null;
        const MB = (0, xD.T)();
        let zB = await (0, xD.P)();
        if (QM(zB) && function() {
            const BB = Date.now();
            return !(0, hO.n)((0, hO.p)(), jM, BB, hO.b) && (0, hO.j)(jM, BB, hO.b)
          }()) {
          const BB = await async function(BB) {
            const {
              detail: OB,
              details: GB
            } = JM(BB);
            console.warn(`${zo} ${OB}: waiting for a WebGL context`);
            const YB = performance.now(),
              DB = await GQ({
                sleep: (BB, OB) => (0, sO.c)(BB, OB).catch((() => {})),
                repick: async () => {
                  const BB = await (0, xD.X)();
                  return QM(BB) ? null : {
                    pl: BB
                  }
                },
                showScreen: BB => {
                  const OB = (0, nO.h)();
                  return dO({
                    ...OB,
                    cancel: xy ? OB.cancel : null
                  }, BB)
                }
              }),
              QB = String(Math.round(performance.now() - YB));
            if (null === DB.picked) {
              const BB = DB.gaveUp ? "waited" : "left";
              return (0, QY.reportLoadRecovery)({
                step: "noContext",
                outcome: "gaveUp",
                tries: DB.tries,
                detail: `${OB}; ${BB}`,
                details: {
                  ...GB,
                  waitedMs: QB
                }
              }), DB.gaveUp ? {
                gaveUp: !0
              } : ((0, MO.f)("/"), null)
            }
            const {
              pl: oB
            } = DB.picked;
            if (!(0, rG.u)(oB)) {
              var jB;
              const BB = null !== (jB = null === oB || void 0 === oB ? void 0 : oB.backend) && void 0 !== jB ? jB : "none";
              (0, QY.reportLoadRecovery)({
                step: "noContext",
                outcome: "recovered",
                tries: DB.tries,
                detail: OB,
                details: {
                  ...GB,
                  backend: BB,
                  waitedMs: QB
                }
              }), null !== oB && (0, xD.S)(oB.backend)
            }
            return DB.picked
          }(zB);
          if (null === BB) return null;
          if ("gaveUp" in BB) {
            const {
              detail: BB,
              details: OB
            } = JM(zB);
            return (0, QY.setCrashBackend)("unsupported"), YM("browser", MB ? "blockedAfterLoss" : "noContext", BB, {
              ...OB,
              afterWait: "true"
            }), null
          }
          zB = BB.pl
        }
        const lB = await async function(BB, OB) {
          const GB = (0, rG.u)(BB) ? yM(BB, OB) : null;
          if (null === GB || void 0 === GB || !GB.retries) return BB;
          console.warn(`${zo} ${GB.detail}: picking again in ${DM} ms`), await new Promise((BB => {
            setTimeout(BB, DM)
          }));
          const YB = await (0, xD.X)();
          if (!(0, rG.u)(YB)) {
            var DB;
            (0, QY.reportNoBackendRetry)("reprobed", GB.decline, GB.detail, {
              ...GB.details,
              backend: null !== (DB = null === YB || void 0 === YB ? void 0 : YB.backend) && void 0 !== DB ? DB : "none"
            }), null !== YB && (0, xD.S)(YB.backend)
          }
          return YB
        }(zB, MB);
        if ((0, QY.setCrashBackend)((0, rG.u)(lB) ? "unsupported" : null !== (OB = null === lB || void 0 === lB ? void 0 : lB.backend) && void 0 !== OB ? OB : "none"), (0, rG.u)(lB)) return function(BB) {
          let {
            decline: OB,
            detail: GB,
            details: YB,
            retries: DB
          } = BB;
          if (DB && (0, cO.p)()) return (0, QY.reportNoBackendRetry)("reload", OB, GB, YB), void MM(`${GB}, again after ${DM} ms`);
          YM("browser", OB, GB, DB ? {
            ...YB,
            afterReload: String(cO.x)
          } : YB)
        }(yM(lB, MB)), null;
        if ((0, WQ.s)("render")) try {
          const {
            startRenderDebug: BB
          } = await Promise.all([GB.e(89), GB.e(56)]).then((() => GB(5152)));
          BB(lB)
        } catch (VO) {
          console.warn("The render debug topic didn't load", VO)
        }
        if ((0, WQ.s)("renderlite")) try {
          const {
            startRenderLite: BB
          } = await Promise.all([GB.e(300), GB.e(57)]).then((() => GB(54067)));
          Fy = BB(lB)
        } catch (VO) {
          console.warn("The renderlite debug topic didn't load", VO)
        }
        if ((0, WQ.s)("renderprobe")) try {
          const {
            startRenderProbe: BB
          } = await GB.e(58).then((() => GB(54076)));
          BB(lB)
        } catch (VO) {
          console.warn("The renderprobe debug topic didn't load", VO)
        }
        if ("webgl" === (null === lB || void 0 === lB ? void 0 : lB.backend) && xy && "address" !== cO.u.reason) {
          const BB = PD(lB);
          null !== BB && (0, aO.j)(BB)
        }
        const pB = null !== (YB = null === lB || void 0 === lB ? void 0 : lB.backend) && void 0 !== YB ? YB : null;
        Vy.adapter = null !== (QB = null === lB || void 0 === lB ? void 0 : lB.adapter) && void 0 !== QB ? QB : null, Vy.boundAtMs = null, Vy.indirectHangs = null, Vy.restoresSkipped = null;
        const qB = !(0, rG.gb)();
        null === lB || (0, rG.K)(lB.reason) || console.info(`${zo} drawing with ${lB.backend}: ${lB.reason}`);
        const ZB = (0, xD.G)();
        dB("previews"), Bj(!0), (0, aB.u)((BB => {
          try {
            null !== pB && (ky = BB.startSkyFeed, lM(), function(BB) {
              var OB, GB;
              ny = BB.rasterText, By = BB.setTextLocalPlayer, BB.setTextLocalPlayer(null !== (OB = null === (GB = tj) || void 0 === GB ? void 0 : GB.info.playerDbId) && void 0 !== OB ? OB : null), Uy = BB.drainTextRerasters, fy = BB.loadTextIcons, BB.warmText((() => gy)), BB.textChanged(), gy && setTimeout(fy, 0)
            }(BB), dy = BB.startShellAnalytics, nM())
          } finally {
            GJ || (iy = BB.followMenuPrefs({
              setSoundPrefs: XJ,
              setEnvPrefs: wJ,
              setUiPrefs: rJ,
              setLookPrefs: EJ
            }))
          }
        })), (0, aB.p)(Co).catch((BB => {
          console.warn(`${zo} the game code did not load: a join asks again`, BB)
        }));
        const NB = (0, xD.m)(lB);
        let RB, WB;
        NB.catch((() => {})), "loading" === (0, iO.x)() && (uB(), dB("load"));
        try {
          RB = function(BB) {
            const OB = null !== BB && void 0 !== BB ? BB : document.createElement("canvas");
            OB.id = "wasm-game-canvas", vy.watch(OB, vM), sy.watch(OB, vM),
              function(BB) {
                if (YP.has(BB)) return;
                YP.add(BB), BB.addEventListener("webglcontextlost", (() => {
                  var BB;
                  const OB = null !== bj && eM(),
                    GB = null === (BB = window.bloxdRenderDebug) || void 0 === BB ? void 0 : BB.vaos;
                  setTimeout((() => {
                    var BB, YB, DB, QB, oB;
                    null === (BB = Fy) || void 0 === BB || BB.glContextLost(OB, GB, null !== (YB = null !== (DB = !1 === (null === (QB = ao) || void 0 === QB ? void 0 : QB.isStopped) ? ao.addDistanceInUse() : null) && void 0 !== DB ? DB : null === (oB = GP()) || void 0 === oB ? void 0 : oB.horizontal) && void 0 !== YB ? YB : null)
                  }), 0)
                }))
              }(OB), (0, yQ.k)();
            const GB = (0, PG.i)(),
              YB = (0, PG.l)(GB);
            OB.style.cssText = "position:absolute;top:0;left:0;display:block;touch-action:none;outline:none;background:#000", (0, jQ.g)(OB, YB), (0, PG.e)(OB, GB), OB.width = YB.bufferWidth, OB.height = YB.bufferHeight;
            const DB = document.createElement("div");
            return DB.style.cssText = "position:fixed;top:0;right:0;bottom:0;left:0;overflow:hidden", DB.append(OB), KJ(DB, ty), BJ = DB, document.body.append(DB), OB
          }(null === pB ? null : await (await DJ()).pagePreviews().beginSession())
        } catch (DB) {
          return mB("fetch"), await qP({
            site: Ro,
            error: DB
          }, (() => {
            (0, QY.showUnsupported)((0, nO.p)("fetch"), dQ.e.fetch, `the previews did not load: ${String(DB)}`)
          })), null
        }
        uB(), dB("loading" === (0, iO.x)() ? "load" : "build");
        try {
          WB = await NB
        } catch (DB) {
          return mB("fetch"), await qP({
            site: Ro,
            error: DB
          }, (() => {
            (0, QY.showUnsupported)((0, nO.p)("fetch"), dQ.e.fetch, `the ${null!==pB&&void 0!==pB?pB:"client"} build did not load: ${String(DB)}`)
          })), null
        }
        const VB = (0, xD.g)(),
          SB = !VB && !0 !== yG.i.getItem(po),
          nB = !VB && "loading" === (0, iO.x)();
        dB("load"), await (0, tD.b)(WB, {
          reloadFailedDownload: SB
        }), nB && !(0, iO.S)() && await (0, tD.b)(WB, {
          reloadFailedDownload: SB
        });
        let UB = !1,
          fB = !1;
        const kB = (0, iO.n)();
        if (!(0, iO.S)() && ("compile" === kB || "instantiate" === kB) && (0, iO.M)()) {
          const BB = (0, iO.g)();
          console.warn(`${zo} the wasm client did not ${kB} here (${BB}): loading it again`);
          const OB = await async function(BB) {
            let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : BQ,
              GB = !1,
              YB = 0;
            for (const DB of OB) {
              if (!BB.retryable()) break;
              if (BB.outOfMemory() && (GB = !0, "spent" === BB.stepDownMemory())) return {
                recovered: !1,
                tries: YB,
                outOfMemory: GB,
                spent: !0
              };
              if (await BB.sleep(DB), YB++, await BB.retry()) return {
                recovered: !0,
                tries: YB,
                outOfMemory: GB,
                spent: !1
              }
            }
            return GB ||= BB.outOfMemory(), {
              recovered: !1,
              tries: YB,
              outOfMemory: GB,
              spent: !1
            }
          }({
            sleep: BB => (0, sO.c)(BB),
            outOfMemory: () => (0, fG.c)((0, iO.l)()),
            retryable: iO.M,
            stepDownMemory: () => "instantiate" !== (0, iO.n)() || !PM() || (0, OY.s)() ? "none" : "halve" === (0, OY.p)() ? "halved" : "spent",
            retry: tD.e
          });
          UB = OB.outOfMemory, fB = OB.spent;
          const {
            tries: GB,
            recovered: YB
          } = OB, DB = YB ? BB : (0, iO.g)();
          (0, QY.reportLoadRecovery)({
            step: "load",
            stage: kB,
            oom: UB,
            outcome: YB ? "recovered" : "gaveUp",
            tries: GB,
            detail: DB
          })
        }
        AB ??= performance.now();
        const IB = Ho;
        if (!(0, iO.S)()) {
          (0, iO.O)() && "compile" !== kB && "instantiate" !== kB && yG.i.setItem(po, !0);
          const BB = (0, iO.n)();
          if (mB("instantiate" === BB || null === BB ? `instantiate_${KB((0,iO.l)())}` : BB), "call" === BB) xM({
            site: wG.s,
            error: (0, iO.l)(),
            header: null
          }, IB);
          else {
            const OB = null !== BB && void 0 !== BB ? BB : "instantiate",
              GB = () => {
                (0, QY.showUnsupported)((0, nO.p)(OB), dQ.e[OB], (0, iO.g)())
              },
              YB = "compile" === kB || "instantiate" === kB ? kB : BB;
            if ("compile" === YB || "instantiate" === YB) {
              const BB = UB || (0, fG.c)((0, iO.l)());
              if (xy && (BB && PM() ? !fB && "spent" !== (0, OY.p)(Date.now(), !0) : (0, cO.p)())) {
                const OB = (0, iO.g)();
                return (0, QY.reportLoadReload)((0, nO.p)(YB), dQ.e[YB], OB), MM(`the wasm client ${BB?"ran out of memory to":"did not"} ${YB} here (${OB})`), null
              }(0, QY.showUnsupported)(BB ? "memory" : (0, nO.p)(YB), dQ.e[YB], (0, iO.g)())
            } else if ("fetch" === OB) {
              const BB = [WB.url().href, wO.e.url().href];
              await qP({
                site: Ro,
                error: (0, iO.g)(),
                urls: BB
              }, (() => {
                GB()
              }))
            } else GB()
          }
          return null
        }(0, gO.S)(WB.url()) && (0, QY.reportUnstreamedCoreLoad)();
        const FB = (0, iO.A)();
        let iB, LB = IB;
        dB("core");
        try {
          LB = {
            ...IB,
            wasm: FB.eP()
          };
          const {
            EZ: BB
          } = WB.bindings, OB = BB.ADB();
          if (OB !== SG.x) return mB("core_other"), xM({
            site: wG.d,
            error: `core ABI ${OB}, page ABI ${SG.x}`,
            header: null
          }, LB), null;
          const [GB, YB] = (0, SG.me)();
          iB = new BB(GB, YB)
        } catch (DB) {
          return mB(`core_${KB(DB)}`), xM({
            site: wG.d,
            error: DB,
            header: null
          }, LB), null
        }
        mB("ok"), Ho = LB, vo = WB.bindings;
        const gB = new wG.g(iB, iO.u, {
          onCrash: BB => {
            var OB;
            null === (OB = Fy) || void 0 === OB || OB.crashed(BB),
              function(BB, OB, GB, YB) {
                if ("webgpu" !== OB || (0, xD.c)()) return !1;
                const DB = function(BB) {
                  if (BB.site === wG.e && (0, rG.v)(BB.error)) return "frames_refused";
                  return BB.site === qo && (0, rG.y)(BB.error) ? "start_failed" : null
                }(BB);
                if (null === DB) return !1;
                if (null !== (0, rG.eb)(DB, YB, (0, XG.c)(BB.error))) return (0, QY.countRenderLost)(DB, BB.error, Vy), !1;
                return YG.C.reloaded(null, !1), (0, QY.reportRenderReload)("webgpu", "start_failed" === DB ? 0 : 1, GB, {
                  cause: DB,
                  error: BB.error,
                  context: Vy,
                  session: DP(null)
                }), mM(), !0
              }(BB, pB, LB, qB) || xM(BB, LB)
          },
          onNetEvent: dM,
          onReconnectGrace: BM,
          onJoinPreloadEnded: tJ,
          onCoreErrors: (BB, OB) => {
            var GB, YB;
            BB.some((BB => {
              let {
                code: OB
              } = BB;
              return OB === SG.I.RenderDeviceLost
            })) && ((0, xD.D)(), Hy.deviceLost(), "webgpu" === pB && ((0, XG.d)(Sy), YG.C.lost())), null === (GB = Fy) || void 0 === GB || GB.coreErrors(BB);
            const DB = () => {
              (0, QY.reportCoreErrors)(BB, OB, LB, ((BB, OB) => {
                var GB;
                return BB === SG.I.EnvUnknownSky ? (0, QY.unknownSkyWords)(eO.e.get("skyBox")) : BB === SG.I.RenderDeviceLost ? (0, QY.deviceLossWords)(OB, Vy.boundAtMs) : null === (GB = Sy) || void 0 === GB ? void 0 : GB.VDB(BB, OB)
              }))
            };
            BB.some((BB => {
              let {
                code: OB
              } = BB;
              return OB === SG.I.EnvUnknownSky
            })) ? queueMicrotask(DB) : DB(), null === (YB = nj) || void 0 === YB || YB.coreErrors(BB)
          },
          onRenderReload: (BB, OB, GB) => {
            ! function(BB, OB, GB, YB, DB, QB) {
              var oB;
              if ((0, xD.c)()) return;
              const jB = OB === SG.dd.WEBGPU,
                yB = YB === SG.dd.PIPELINE_FAILED ? "pipeline_failed" : "lost",
                JB = YB === SG.dd.RESTORE_LOST,
                MB = jB && (0, YG.r)(Vy.adapter, GB, "lost" === yB, JB),
                zB = (0, XG.l)(Sy);
              null === (oB = Fy) || void 0 === oB || oB.reload(jB, GB, yB, null === zB || void 0 === zB ? void 0 : zB.message);
              const lB = jB ? (0, rG.eb)(yB, DB, zB) : null;
              if (null !== lB) {
                (0, QY.countRenderLost)(yB, zB, Vy);
                const OB = void 0 === zB ? "" : ` (${zB.message})`;
                return void BB.crash(QY.RENDER_RELOAD_SITE, new Error(`${(0,QY.renderReloadMessage)("webgpu",yB,GB)} and ${lB}${OB}`))
              }
              const pB = jB ? "webgpu" : "webgl1" === QB ? "webgl1" : "webgl";
              "lost" === yB && (0, xD.D)();
              if (!jB) {
                if (vy.gaveUp(), !(0, cO.p)()) {
                  (0, QY.countRenderLost)(yB, zB, Vy);
                  const OB = void 0 === zB ? "" : ` (${zB.message})`;
                  return void BB.crash(QY.RENDER_RELOAD_SITE, new QY.GraphicsLostError(`${(0,QY.renderReloadMessage)(pB,yB,GB)} and ${cO.f}${OB}`))
                }
                console.warn(`${zo} the GL render device's recovery gave up: the tab reloads once more onto the wasm client`)
              }(0, QY.reportRenderReload)(pB, GB, Ho, {
                from: "game",
                cause: yB,
                restoreLost: JB,
                adapterRemembered: MB,
                error: zB,
                context: Vy,
                session: DP(BB.sunShadowsHeld())
              }), (0, xD.s)();
              const qB = (0, PB.g)();
              let ZB = !1;
              const NB = () => {
                ZB || (ZB = !0, jB && "lost" !== yB ? mM() : sy.reload(mM, jB))
              };
              let RB = null;
              const WB = (0, PB.l)((() => {
                null !== RB && clearTimeout(RB), qB ? setTimeout(NB, uM) : NB()
              }));
              !ZB && qB && (RB = setTimeout((() => {
                WB(), NB()
              }), KM))
            }(gB, BB, OB, GB, qB, pB)
          },
          onEnvEvent: BB => {
            var OB;
            BB.kind === SG.Y.SkyImages ? null === (OB = Rj) || void 0 === OB || OB.onEvent(BB.payload) : BB.kind === SG.Y.EnvLighting && (Wj = 1 === BB.payload[0])
          },
          onImages: BB => {
            var OB;
            null === (OB = Aj) || void 0 === OB || OB.onEvent(BB)
          },
          onModelRequest: BB => {
            var OB;
            null === (OB = qj) || void 0 === OB || OB.request(BB)
          },
          onModelTaken: (BB, OB) => {
            var GB;
            null === (GB = qj) || void 0 === GB || GB.taken(BB, OB)
          },
          onTerrainTexturesWanted: () => {
            queueMicrotask((() => {
              ! function(BB, OB) {
                const GB = bo;
                if (null === GB || BB.isStopped) return;
                GB.restore((BB => {
                  (0, QY.reportTerrainTextureFailure)(BB, OB)
                })).then((OB => {
                  !1 !== OB || BB.isStopped ? !0 === OB && console.info(`${zo} terrain textures handed over again after the renderer lost them`) : console.warn(`${zo} the terrain textures couldn't be handed over again: the terrain draws blank`)
                }))
              }(gB, LB)
            }))
          },
          onKeepAlive: BB => {
            const OB = null === bj ? void 0 : Cj.get(bj);
            void 0 !== OB && RD(OB, BB)
          },
          onSends: () => {
            ! function(BB) {
              const OB = performance.now();
              if (BB.forEachNetOut(CM), aM(BB), (0, wG.L)(BB, {
                  worldgen: Qj,
                  mesh: jj
                }), null !== Iy) try {
                Iy.sendsWent(BB, OB, performance.now())
              } catch (DB) {
                kM(DB)
              }
            }(gB)
          }
        });
        if (ao = gB, null === (oB = MG.e.wasmNetReady) || void 0 === oB || oB.call(MG.e, (() => gB.isStopped ? 0 : gB.netKeptFrames)), null !== BB) {
          gB.setAntiCheatProbes(Do(iO.u, BB.checks)), BB.watchHeld(oo.CoreFrame, (() => gB.frame)), BB.watchHeld(oo.GlueFrame, (() => iB.frame));
          const OB = function(BB, OB) {
            const GB = new Qo(OB);
            let YB = !1;
            GB.kP(BB.kP());
            const DB = (0, ZD.ab)((() => {
              GB.kP(BB.kP())
            }), jo);
            let QB = 6 * (0, ZD.P)() | 0;
            const oB = () => {
              ++QB < 6 || (QB = 0, BB.checks.stackCheck() && (YB = !0))
            };
            (0, rQ.d)(oB);
            const jB = () => {
              const OB = BB.checkPadCall();
              0 !== OB && GB.setFlags(OB)
            };
            return (0, gQ.j)(jB), {
              onSend: oB,
              beforeFrame: () => {
                YB && GB.originStackHit() && (YB = !1)
              },
              onEvent: OB => {
                const YB = BB.checkEvent(OB);
                GB.value(SG.i.ProbeUsedProp, BB.usedProp()), 0 !== YB && GB.setFlags(YB)
              },
              stop: () => {
                (0, ZD.eb)(DB), (0, rQ.c)(oB), (0, gQ.f)(jB)
              }
            }
          }(BB, ((BB, OB, GB) => {
            let YB = !1;
            return yP(gB, (() => {
              YB = gB.rings.input.writeRecord(SG.ub.AntiCheat, BB, OB, GB, 0)
            })), YB
          }));
          gB.isStopped ? OB.stop() : lj = OB
        }
        Lo = (BB, OB, GB) => gB.rings.cmd.writeCmd(BB, OB, GB), go = BB => gB.rings.cmd.growForCmd(BB), wj = !1, lM(), (0, aB.v)(gB, {
          core: iB,
          memory: iO.u,
          staleOr: (BB, OB, GB, YB) => qP({
            site: BB,
            error: OB
          }, GB, YB),
          reportReplayFault: (BB, OB) => {
            (0, QY.reportReplayFault)(BB, OB, Ho)
          },
          reportCameraFault: BB => {
            (0, QY.reportCameraDirectorFault)(BB, Ho)
          },
          audio: Co,
          options: eO.e,
          onNetEvent: dM,
          sessionInfo: BB => {
            var OB;
            return (null === (OB = tj) || void 0 === OB ? void 0 : OB.conn) === BB ? tj.info : null
          },
          onEventOverflow: UJ,
          replayShaderPack: BB => {
            var OB;
            null === (OB = nj) || void 0 === OB || OB.replay(BB)
          },
          hasPackModel: BB => {
            var OB, GB;
            return null !== (null !== (OB = null === (GB = pM()) || void 0 === GB ? void 0 : GB.modelUrl(BB)) && void 0 !== OB ? OB : null)
          },
          beforeWrite: () => (!Lj && gB.rings.net.cursor > 0 && iM(gB, !1, "all"), !gB.isStopped),
          beforeOp: () => (!Lj && gB.netWrittenSinceFrame > 0 && iM(gB, !1, "budget"), !gB.isStopped)
        }), (0, hB.M)({
          lockPointer: () => {
            if (!IY(RB)) return !1;
            try {
              Promise.resolve(RB.requestPointerLock()).catch((() => {}))
            } catch {
              return !1
            }
            return !0
          },
          unlockPointer: () => {
            (0, SO.b)()
          },
          leaveGame: () => {
            nJ()
          },
          canvas: () => RB
        }), pj = (0, hB.z)((() => {
          var BB;
          const OB = (0, aB.j)();
          null === (BB = (0, aB.s)()) || void 0 === BB || BB.followCursorAim(!0 === (null === OB || void 0 === OB ? void 0 : OB.isSessionLive) ? OB : null)
        })), aj && gB.setUiPrefs(aj);
        ej && gB.setEnvPrefs(ej);
        Tj && gB.setLookPrefs(Tj);
        const rB = QQ ? oQ(QQ.preventMovement) : null;
        rB && LJ(rB);
        const XB = (0, OY.l)(),
          wB = (0, OY.f)(gB, XB);
        Pj = XB.basis, (0, ZY.e)((0, MY.d)(null === wB ? null : (0, BY.r)(wB), (0, MY.i)())), Mj = wB;
        const EB = (0, rO.b)();
        let cB = 1 / 0,
          eB = !0,
          TB = XB.shedFootprintBytes;
        const bB = new KD.e(EB, (() => iB.ON()), (BB => {
          gB.crash(wG.k, BB)
        }));
        yj = bB, Jj = bB, null !== wB && bB.setCeiling(Math.min((0, KD.n)(wB), cB, (0, OY.o)()));
        if (eB) {
          bB.setShed((BB => {
            const OB = gB.shedMemory("joinReserve" !== BB && "gcPressure" !== BB);
            return null !== OB && (null === Mj || OB < Mj) && (Mj = OB, (0, ZY.e)((0, MY.d)((0, BY.r)(OB), (0, MY.i)()))), OB
          }), ((BB, OB, GB) => {
            1 === OB ? (0, QY.reportMemoryShed)(BB, GB, Ho) : console.warn(`${zo} wasm memory: shed again (${BB}): shed ${OB}`, GB.wasmMemoryShed)
          }), (() => gB.addDistanceInUse()));
          const BB = (0, rG.W)(FB);
          bB.setFootprint(new RQ(TB, {
            storedChunks: () => iB.SDB(),
            gpuBytes: () => {
              var OB;
              return null !== (OB = null === BB || void 0 === BB ? void 0 : BB.nDB()) && void 0 !== OB ? OB : 0
            },
            jsHeapBytes: NQ
          })), (0, qY.k)("wasm", bB, (() => {
            Co.freeSounds()
          }))
        }
        window.addEventListener("pagehide", (() => {
          yj === bB && (bB.refreshStats(), jP(bB))
        })), document.addEventListener("visibilitychange", wM), window.addEventListener("pagehide", EM), window.addEventListener("pagehide", IM), window.addEventListener("pagehide", FM), !1;
        const [CB, HB] = (0, yY.h)();
        Ly = (0, MY.m)((BB => {
          const OB = (0, MY.p)(BB, (0, MY.i)());
          return gB.setChunkAddDistance(OB.horizontal, OB.vertical)
        }), {
          horizontal: CB,
          vertical: HB
        }), gB.setAmbientOcclusion(!0 !== yG.g.getItem("disableAmbientOcclusion")), gB.setPoseLod(!0 !== yG.g.getItem(FO.R)), gB.setDebugLog(SG.N.Look, !0), gB.setDebugLog(SG.N.CameraSet, !0), (0, VQ.startLookDebug)("wasm", {
          look: () => gB.takeDebugLog(SG.N.Look),
          cameraSets: () => gB.takeDebugLog(SG.N.CameraSet)
        }), (0, WQ.s)("remesh") && (gB.setDebugLog(SG.N.Remesh, !0), vB = () => gB.takeDebugLog(SG.N.Remesh), kQ = new fQ((0, SQ.h)(), vB));
        var vB;
        const sB = function(BB, OB, GB, YB) {
          const DB = new vY,
            QB = BB => yG.g.getItem(BB);
          DB.sync(QB, OB), (0, DG.L)();
          const oB = (0, yB.p)("customBindingsChanged", (() => {
            DB.sync(QB, OB)
          }));
          (0, AY.k)(OB);
          const jB = new Set,
            JB = (0, hB.z)((() => {
              var BB;
              jB.size > 0 && BD() && !0 === (null === (BB = (0, aB.j)()) || void 0 === BB ? void 0 : BB.localPlayerAlive()) && yB.o.tM("usedKeyboard")
            })),
            MB = EY.b.heldSizer((() => (0, PG.p)(BB))),
            PB = wY(BB, OB, {
              prevents: BB => DB.prevents(BB),
              keyPressed: BB => {
                DB.moves(BB) && (jB.add(BB), BD() && yB.o.tM("usedKeyboard"))
              },
              keyReleased: BB => {
                jB.delete(BB)
              },
              keysReleased: () => {
                jB.clear()
              },
              resized: () => {
                xY.f.measure(BB.getBoundingClientRect()), (0, cY.l)()
              },
              sizeCanvas: MB,
              watchRenderScale: OB => {
                const GB = (0, PG.s)(BB, OB),
                  YB = EY.b.onRelease(OB);
                return () => {
                  GB(), YB()
                }
              },
              touchStarting: () => {
                xY.f.measure(BB.getBoundingClientRect())
              },
              viewShown: GB,
              touchUiShown: () => PO.c.get("isTouchScreen"),
              ctrlCombosAreGames: BD,
              inspect: (BB, OB, GB) => {
                DB.checks(OB, GB) && YB(BB)
              },
              canLock: () => IY(BB)
            }),
            zB = (0, TG.e)(OB);
          return () => {
            oB(), JB(), (0, AY.k)(null), zB(), PB()
          }
        }(RB, ((BB, OB, GB, YB, DB) => {
          yP(gB, (() => {
            gB.rings.input.writeRecord(BB, OB, GB, YB, DB)
          })), !gj && (0, QD.f)(BB, DB) && (0, QD.c)((() => {
            ao !== gB || GJ || gB.isStopped || !TM() || iM(gB, !1, "budget", !1)
          }))
        }), (() => ty), (BB => {
          var OB;
          null === (OB = lj) || void 0 === OB || OB.onEvent(BB)
        }));
        if (gB.isStopped) return sB(), null;
        Dj = sB;
        const xB = () => !gB.isStopped && !OJ;
        if (gB.isStopped) return null;
        (0, iO.U)((() => {
          "call" === (0, iO.n)() && gB.crash(wG.s, (0, iO.l)())
        }));
        const tB = (0, wG.M)(gB.rings.worker, (() => {
          iM(gB, !1, document.hidden ? "all" : "budget")
        }));
        Qj = function(BB, OB, GB) {
          return JP().then((BB => {
            let {
              prefetchWorldgenWorker: OB
            } = BB;
            OB()
          }), (() => {})), new FQ({
            module: (0, iO.v)(),
            decodeSettings: BB => {
              const OB = (0, aB.s)();
              if (null === OB) throw new Error("no game code to decode the world-gen seed with");
              return OB.decodeMapSettings(BB)
            },
            loadWorker: MP,
            onMapWithoutWorldgen: () => {
              PP((BB => {
                let {
                  stopWorldgenWorkerPrefetch: OB
                } = BB;
                OB()
              }))
            },
            onLoadFailed: BB => {
              (0, QY.reportWorldgenLoadFailure)(BB, Ho)
            },
            onWorkerLost: (BB, OB) => {
              !async function(BB, OB, GB) {
                const YB = BB === uQ || BB.startsWith(mQ);
                if (!YB || OB) return void GB.jP(YB);
                const DB = () => {
                  GB.jP(!0)
                };
                let QB;
                try {
                  QB = await GB.scriptUrl()
                } catch {
                  return void DB()
                }
                await GB.staleOr({
                  site: wG.C,
                  error: new Error(`a world-gen worker's load failed (${BB}): ${QB}`),
                  urls: [QB]
                }, DB)
              }(BB, OB, {
                scriptUrl: async () => {
                  const {
                    worldgenWorkerScriptUrl: BB
                  } = await JP();
                  return BB()
                },
                staleOr: (BB, OB) => qP(BB, OB, {
                  stillWanted: GB
                }),
                jP: OB => {
                  (0, QY.reportWorldgenWorkerLost)(BB, OB, Ho, {
                    build: (0, pD.j)(),
                    ageMs: (0, PY.x)()
                  })
                }
              })
            },
            onStartTimeout: BB => {
              (0, QY.reportWorkerStartTimeout)(wG.C, BB, Ho)
            },
            onGaveUp: BB => {
              (0, QY.reportWorldgenGaveUp)(BB, Ho)
            },
            onMemoryStats: BB => {
              var OB;
              null === (OB = yj) || void 0 === OB || OB.noteWorldgen(BB)
            },
            onMemoryGone: () => {
              var BB;
              null === (BB = yj) || void 0 === BB || BB.worldgenGone()
            },
            write: (GB, YB, DB, QB, oB) => {
              yP(BB, (() => {
                BB.rings.worker.writeWorkerRecord(GB, YB, DB, 0, QB, oB) || BB.crash(wG.C, `a world-gen record of kind ${YB} did not fit the worker-in ring`)
              })), OB()
            }
          })
        }(gB, tB, xB), jj = function(BB, OB) {
          return new kD({
            module: (0, iO.v)(),
            loadWorkers: async () => {
              const [{
                createMeshWorker: BB
              }, OB] = await Promise.all([GB.e(48).then((() => GB(54108))), Promise.resolve().then((() => GB(92))).then((BB => {
                let {
                  isMobile: OB
                } = BB;
                return OB()
              }), (() => !1))]);
              return {
                create: BB,
                count: (0, tO.g)(OB),
                maxKeptLightStates: OB || (0, xO.i)() ? 1 : void 0
              }
            },
            write: (GB, YB, DB, QB, oB, jB) => {
              (0, cY.h)(), yP(BB, (() => {
                BB.rings.worker.writeWorkerRecord(GB, YB, DB, QB, oB, jB) || BB.crash(wG.l, `a meshing record of kind ${YB} did not fit the worker-in ring`)
              })), OB()
            },
            onWorkerLost: BB => {
              (0, QY.reportWorkerLost)(wG.l, BB, Ho)
            },
            onLightFault: (BB, OB) => {
              (0, QY.reportLightFault)(BB, OB, Ho)
            },
            onStartTimeout: BB => {
              (0, QY.reportWorkerStartTimeout)(wG.l, BB, Ho)
            },
            onMemoryStats: (BB, OB) => {
              var GB;
              null === (GB = yj) || void 0 === GB || GB.noteMeshWorker(BB, OB)
            },
            onMemoryGone: BB => {
              var OB;
              null === (OB = yj) || void 0 === OB || OB.meshWorkerGone(BB)
            },
            fail: (OB, GB) => {
              const YB = () => {
                BB.crash(wG.l, void 0 === GB ? OB : new Error(OB, {
                  cause: GB
                }))
              };
              void 0 !== GB ? qP({
                site: wG.l,
                error: GB
              }, YB) : YB()
            }
          })
        }(gB, tB), kJ();
        const BO = (0, aD.n)(HO.clientSideServerUrls.staticUrl, {
            onTableFailed: BB => {
              qP({
                site: QY.MODEL_FEED_SITE,
                error: BB
              }, (() => {}), {
                stillWanted: xB
              })
            },
            packUrl: BB => {
              var OB, GB;
              return null !== (OB = null === (GB = pM()) || void 0 === GB ? void 0 : GB.modelUrl(BB)) && void 0 !== OB ? OB : null
            }
          }),
          OO = function(BB, OB, GB) {
            const YB = GB => {
              var YB, DB;
              return null !== (YB = null === (DB = OB()) || void 0 === DB ? void 0 : DB.drawnUrl(GB)) && void 0 !== YB ? YB : BB.url(GB)
            };
            return (0, cD.l)((0, mD.q)(YB), GB)
          }(BO, (() => qj), pM),
          GO = new mD.h(OO, (BB => {
            console.warn(`${zo} image ${BB.key.kind}:${BB.key.index}:${BB.key.word} failed`, BB.error)
          }));
        Aj = GO, Vj = new XD(gB, OO, ((BB, OB) => {
          void 0 === OB ? console.warn(`${zo} ${BB}`) : ZM(BB, OB)
        }));
        const YO = new ED.f(BO, function(BB, OB) {
          let YB = !1,
            DB = null,
            QB = null;
          const oB = {
              onUnavailable: (GB, YB) => {
                QB ??= qP({
                  site: QY.MODEL_POOL_SITE,
                  error: GB,
                  urls: YB
                }, (() => {
                  (0, QY.reportModelPoolFailure)(GB, BB)
                }), {
                  stillWanted: OB
                })
              },
              onWorkerLost: OB => {
                (0, QY.reportWorkerLost)(QY.MODEL_POOL_SITE, OB, BB)
              },
              onModuleRetry: (OB, GB) => {
                (0, QY.reportModelsModuleRetry)(OB, GB, BB)
              }
            },
            jB = GB.e(50).then((() => GB(54113))).then((BB => {
              let {
                pageModelPool: OB
              } = BB;
              if (YB) return null;
              const GB = OB(oB);
              return DB = GB.unlisten, Zj = GB.pool, kJ(), GB.pool
            }), (BB => (YB || oB.onUnavailable(BB, void 0), null)));
          return Nj = () => {
            var BB;
            YB = !0, null === (BB = DB) || void 0 === BB || BB(), Zj = null
          }, (BB, OB) => jB.then((GB => {
            var YB;
            return null !== (YB = null === GB || void 0 === GB ? void 0 : GB.build(BB, OB)) && void 0 !== YB ? YB : (0, eD.o)(BB, "the model workers did not load")
          })).then((BB => null !== QB && (0, eD.j)(BB) ? QB.then((() => BB)) : BB))
        }(LB, xB), (BB => {
          BB.startup ? (sM(), qP({
            site: QY.MODEL_FEED_SITE,
            error: BB.error,
            urls: "" === BB.url ? void 0 : [BB.url]
          }, (() => {
            (0, QY.reportModelFailure)(BB, LB)
          }))) : (0, QY.reportModelFailure)(BB, LB)
        }), {
          onWritten: (BB, OB) => {
            GO.glbWritten(BB, OB)
          },
          onTaken: (BB, OB) => {
            GO.glbTaken(BB, OB)
          },
          onPackFileFailed: (BB, OB) => {
            console.warn(`${zo} the texture pack's model file ${BB} failed: the shipped one loads`, OB)
          }
        });
        qj = YO;
        const DO = new LD.i(gB);
        bo = DO, DO.swap((BB => {
          const OB = () => {
            (0, QY.reportTerrainTextureFailure)(BB, LB)
          };
          if (gy) return void OB();
          const GB = () => !gy,
            YB = null === BB.url ? void 0 : [BB.url];
          qP({
            site: wG.z,
            error: BB.error,
            urls: YB
          }, OB, {
            stillWanted: GB
          })
        })).then((BB => {
          null !== BB && (BB || gB.isStopped || console.warn(`${zo} the core refused the terrain textures: terrain draws untextured`), dj(gB))
        }));
        const QO = new AG(gB, ((BB, OB) => {
          console.warn(`${zo} ${BB}`, ...void 0 === OB ? [] : [OB])
        }));
        QO.feed(), null !== pB && function(BB, OB, YB, DB, QB, oB) {
          let jB = null,
            JB = null,
            MB = !1;
          const PB = {
            textures: null,
            stop: () => {
              var BB, OB;
              MB = !0, null === (BB = JB) || void 0 === BB || BB(), null === (OB = jB) || void 0 === OB || OB(), hD.b.setSettled(null), null !== vo && PJ.clear(vo)
            }
          };
          To = PB, JB = NM().follow((JB => {
            null !== JB && Promise.all([GB.e(225), GB.e(53)]).then((() => GB(54083))).then((GB => {
              let {
                PackTextures: zB
              } = GB;
              if (MB || BB.isStopped) return;
              const lB = new zB({
                feed: JB,
                terrain: OB,
                backend: YB,
                stopped: () => BB.isStopped,
                landed: () => {
                  dj(BB)
                },
                packSwapped: () => {
                  (0, cD.j)(DB), oB.feed((() => async function(BB) {
                    const OB = null === BB ? null : await BB.averageColours;
                    return null === OB ? VG() : WG(OB)
                  }(lB.assets))), (0, wD.o)(lB.files()), QB.refresh().then((BB => {
                    null !== BB && console.info(`${zo} texture pack models: ${BB.resent} of ${BB.delivered} files written again, ${BB.refetched} refetched`)
                  }))
                },
                settled: (BB, OB, GB) => {
                  var YB;
                  (hD.b.setSettled({
                    state: BB,
                    files: OB
                  }), function(BB, OB, GB) {
                    const YB = null === BB.gameSource && (0, oY.f)(BB.pack);
                    if (null === OB) return;
                    const DB = (0, DY.h)(OB.error),
                      QB = YB ? "settings" : OB.source;
                    yB.o.tM(DY.e, {
                      failure: DB,
                      source: QB,
                      pack: jY(BB)
                    }), (0, QY.reportTexturePackKeptOut)(QB, DB, OB.error, GB)
                  }(BB, GB, Ho), null === GB) && function(BB) {
                    const OB = vo;
                    null !== OB && PJ.apply(OB, BB).then((OB => {
                      OB && BB && console.info(`${zo} the texture pack's animations are in (${Object.keys(BB).length} files)`)
                    }))
                  }(null === (YB = BB.pack) || void 0 === YB ? void 0 : YB.animations)
                },
                settling: () => {
                  hD.b.setSettled(null)
                },
                warn: ZM,
                maxTextureSize: () => Promise.resolve((0, rG.lb)(document.createElement("canvas")))
              });
              PB.textures = lB, jB = lB.start()
            }), (BB => {
              console.warn(`${zo} the texture pack's terrain didn't load: the built atlas stays`, BB)
            }))
          }))
        }(gB, DO, pB, GO, YO, QO);
        const oO = () => {
            gB.setTextureLayers("")
          },
          jO = BB => {
            (CO ??= GB.e(65).then((() => GB(54118))).then((BB => {
              let {
                TEXTURE_NAMES: OB
              } = BB;
              return OB
            }), (BB => {
              throw CO = null, BB
            })), CO).then((BB => {
              gB.setTextureLayers(BB) || gB.isStopped || (console.warn(`${zo} the core refused the texture names: textured Boxes draw textureNotFound`), oO())
            }), (OB => {
              if (gB.isStopped) return;
              const [GB, ...YB] = BB;
              void 0 === GB ? qP({
                site: QY.TEXTURE_NAMES_SITE,
                error: OB
              }, (() => {
                console.warn(`${zo} the texture names didn't load, so textured Boxes draw textureNotFound`, OB), oO()
              }), {
                stillWanted: xB
              }) : setTimeout((() => {
                jO(YB)
              }), GB)
            }))
          };
        if (jO(Fo), null !== pB && !await async function(BB, OB, GB, YB, QB, oB) {
            var jB;
            const yB = (0, rG.W)(GB);
            if (null === yB) return BB.crash(qo, new Error(`this ${YB} build has no openRenderer`)), !1;
            let JB;
            Sy = yB;
            try {
              var MB, PB, zB, lB;
              const DB = null !== (MB = null === (PB = co) || void 0 === PB ? void 0 : PB.pagePreviews()) && void 0 !== MB ? MB : null,
                jB = null !== (zB = null === (lB = co) || void 0 === lB ? void 0 : lB.previewModule(GB)) && void 0 !== zB ? zB : null;
              if (null === DB || null === jB) {
                null === DB || void 0 === DB || DB.endSession(!1), JB = (0, PG.i)().sampleCount, await (0, rG.k)(OB, yB, oB, zM, JB, await QB);
                const BB = (0, rG.r)(GB);
                null === BB && console.warn(`${zo} this ${YB} build has no image registry: sky and model images won't show`), (0, iD.h)(BB)
              } else {
                (0, xD.c)() && await (0, MO.k)();
                const GB = (0, xD.K)();
                if (null !== GB) {
                  const OB = (0, XG.l)(yB),
                    YB = `${GB.why}${void 0===OB?"":` (${OB.message})`}`;
                  return BB.crash(QY.RENDER_RELOAD_SITE, GB.webgpu ? new Error(YB) : new QY.GraphicsLostError(YB)), !1
                }
                JB = await DB.bindSession(jB, OB, (async BB => (0, rG.B)(yB, qo, oB, BB, zM, await QB)))
              }
            } catch (DB) {
              return BB.crash(qo, DB), !1
            }(function(BB, OB) {
              const GB = BB,
                {
                  requestCapture: YB,
                  takeCapture: DB
                } = GB;
              if ("function" !== typeof YB || "function" !== typeof DB) return;
              const QB = {
                request() {
                  YB.call(GB, OB)
                },
                take() {
                  var BB;
                  return null !== (BB = DB.call(GB)) && void 0 !== BB ? BB : null
                }
              };
              window[JQ] = QB
            })(OB, JB), uy = JB, Ay = !0;
            const pB = performance.now();
            return Vy.boundAtMs = null !== (jB = (0, xD.L)()) && void 0 !== jB ? jB : pB, Vy.indirectHangs = (0, xD.E)(), Vy.restoresSkipped = (0, xD.O)(), console.info(`${zo} ${YB} renderer bound at ${Math.round(pB)} ms`), !BB.isStopped
          }(gB, iB, FB, pB, ZB, RB)) return null;
        if (null !== pB) {
          var yO, zO, lO;
          (0, XO.C)(pB);
          const BB = () => !gB.isStopped && eM();
          GB.e(214).then((() => GB(34668))).then((OB => {
            let {
              devTools: GB
            } = OB;
            gB.isStopped || GB.setHost(function(BB) {
              return {
                tools: sD,
                async downloadScene(OB, GB) {
                  let {
                    width: YB,
                    height: DB,
                    colouring: QB
                  } = GB;
                  "screenshot" === OB && null === QB ? await (0, CD.h)(BB, YB, DB) : console.warn("The Rust client's developer tools take uncoloured screenshots only")
                },
                setAmbientLightIntensity: () => (console.warn("The Rust client's renderer has no ambient light setting"), Promise.resolve()),
                capturePhoto: (OB, GB, YB) => (0, CD.e)(BB, OB, GB, YB)
              }
            }(function(BB, OB) {
              return {
                canvas: BB,
                maxTextureSize: HD,
                WP: OB,
                resize: (BB, OB, GB) => {
                  (0, AY.r)(SG.ub.Resize, 0, BB / GB, OB / GB, (0, AY.h)(GB))
                },
                restoreSize: () => {
                  const OB = (0, PG.p)(BB);
                  null !== OB && (0, AY.r)(SG.ub.Resize, 0, OB.cssWidth, OB.cssHeight, (0, AY.h)(OB.renderScale))
                },
                onFrameDrawn: BB => (vD.add(BB), () => {
                  vD.delete(BB)
                })
              }
            }(RB, BB)))
          }), (BB => {
            console.warn(`${zo} the developer tools didn't load: no captures this session`, BB)
          }));
          const OB = "webgpu" === pB && null !== (yO = null === lB || void 0 === lB || null === (zO = lB.adapter) || void 0 === zO ? void 0 : zO.vendor) && void 0 !== yO ? yO : null;
          my = {
            backend: pB,
            canvas: RB,
            fallbackReason: null !== (lO = null === lB || void 0 === lB ? void 0 : lB.reason) && void 0 !== lO ? lO : null,
            adapterVendor: OB
          }, nM();
          try {
            (0, cY.v)(pB, RB, OB)
          } catch (DB) {
            (0, cY.z)(), console.error(`${zo} the quality steps didn't start`, DB)
          }
        }
        const {
          storagePullBreaks: pO,
          splitPassBreaks: qO
        } = await ZB;
        qO && console.warn(`${zo} split_pass_breaks on: Windows Adreno 7xx (N-103) or ?sceneDepth=off`);
        const ZO = (0, JO.e)(lB, (0, YG.l)());
        if ((0, WQ.s)("webgpuloss")) {
          var NO, RO;
          const BB = {
            backend: pB,
            reason: null !== (NO = null === lB || void 0 === lB ? void 0 : lB.reason) && void 0 !== NO ? NO : null,
            source: null !== (RO = null === lB || void 0 === lB ? void 0 : lB.source) && void 0 !== RO ? RO : null,
            storagePullBreaks: pO,
            noWebGpu: ZO.messageKey
          };
          (0, AQ.d)((OB => {
            OB.noteWasmPick(BB)
          }))
        }
        const WO = "webgpu" === pB;
        if (nj = (0, JO.g)(WO ? gB : null, WO && null !== (jB = null === (JB = co) || void 0 === JB ? void 0 : JB.pagePreviews().zp) && void 0 !== jB ? jB : null, ZO, ZM), GJ) return null;
        if (bB.reserveAtJoin((0, KD.m)(null !== wB && void 0 !== wB ? wB : BY.h)), gB.isStopped) return null;
        const AO = BB => {
          if (Ij = performance.now(), Fj = !1, null !== Iy) try {
            Iy.animationFrame(BB)
          } catch (DB) {
            kM(DB)
          }
          if (function(BB, OB) {
              return OB && !GJ && !gj && TM() && eM() && BB.framePaces(performance.now())
            }(gB, ty)) {
            if (gB.writePendingInput(), (0, hB.e)(BB, LM), UM(!1, BB), null !== Iy) try {
              Iy.framePaced()
            } catch (DB) {
              kM(DB)
            }
            requestAnimationFrame(AO)
          } else iM(gB, ty, "budget") && ((0, QG.k)(gB.lastFrameKind) && eM() && (0, hB.e)(BB, LM), UM(ty && Cy, BB), Hy.frame(gB.lastFrameKind, ty && eM(), BB), vy.frame(gB.lastFrameKind, ty && eM()), (0, QG.d)(gB.lastFrameKind) && YG.C.drew(), OP(gB), bB.afterFrame(), requestAnimationFrame(AO))
        };
        requestAnimationFrame(AO);
        return function(BB) {
          if (BB.has("inputLog") && (0, sY.g)((BB => {
              let {
                action: OB,
                down: GB,
                press: YB
              } = BB;
              console.info(`${tY} input ${OB} ${GB?"down":"up"} press ${YB} at ${performance.now().toFixed(1)}`)
            })), BB.has("inputDump")) {
            const BB = [];
            OD = BB, Object.assign(window, {
              bloxdInputDump: () => BB.join("\n")
            })
          }
        }(new URLSearchParams(window.location.search)), zj = function(BB) {
          let OB = null;
          const GB = () => {
              null !== OB && (clearInterval(OB), OB = null)
            },
            YB = () => {
              document.hidden ? OB ??= setInterval((() => {
                lP(BB) || GB()
              }), Io) : GB()
            };
          return document.addEventListener("visibilitychange", YB), YB(), () => {
            GB(), document.removeEventListener("visibilitychange", YB)
          }
        }(gB), gB
      }(OB).then((BB => {
        var OB;
        (YB(Ho), Bj(null !== BB), null !== BB && (VB = performance.now()), xo(BB), null === BB) ? null === (OB = co) || void 0 === OB || OB.pagePreviews().endSession(null === (0, iO.n)()): kj("booted")
      }), (BB => {
        YB(Ho), Bj(!1), xo(null), xM({
          site: Zo,
          error: BB,
          header: null
        }, Ho)
      }))
    }

    function MJ() {
      const BB = vo;
      null !== BB && DJ().then((OB => {
        let {
          pageBuiltInAnimationPack: GB
        } = OB;
        GB().provide(BB)
      }), (BB => {
        console.warn(`${zo} the built-in animation pack's chunk did not load: lifeforms stay in their rest pose`, BB)
      }))
    }
    const PJ = new class {
      constructor(BB) {
        this.deps = BB, this.latest = 0, this.sJ = null
      }
      apply(BB, OB) {
        return this.load(BB, OB, 0)
      }
      async load(BB, OB, GB) {
        var YB;
        const DB = ++this.latest,
          QB = this.deps.compiler;
        if (void 0 === OB || null === OB || "object" !== typeof OB || 0 === Object.keys(OB).length || null === QB) return this.drop(BB), !1;
        if ((null === (YB = this.sJ) || void 0 === YB ? void 0 : YB.module) === BB && (0, IG.Fe)(this.sJ.files, OB)) return !1;
        try {
          const [GB, YB] = await Promise.all([QB(), this.deps.builtIns()]);
          if (DB !== this.latest) return !1;
          const oB = await GB(OB, gG, {
            builtIns: YB
          });
          if (DB !== this.latest) return !1;
          const jB = this.call(BB, oB);
          if (void 0 === jB) throw new LG("the compiled animations didn't read against the built-in pack");
          return this.sJ = {
              module: BB,
              files: OB
            },
            function(BB) {
              for (let OB = 0; OB + 2 < BB.length; OB += 3) {
                ("error" === BB[OB] ? console.error : console.warn)(`Animation for the texture pack: ${BB[OB+1]}: ${BB[OB+2]}`)
              }
            }(jB), !0
        } catch (jB) {
          var oB;
          if (DB !== this.latest) return !1;
          this.drop(BB), 0 === GB && this.deps.warn("the texture pack's animations didn't load: lifeforms play the built-in ones", jB);
          const YB = (null !== (oB = this.deps.retryAfterMs) && void 0 !== oB ? oB : iG)[GB];
          return void 0 === YB || jB instanceof LG || (0, FG.m)(BB) || setTimeout((() => {
            DB === this.latest && this.load(BB, OB, GB + 1)
          }), YB), !1
        }
      }
      call(BB, OB) {
        try {
          return BB.WDB(OB)
        } catch (GB) {
          throw (0, FG.q)(BB, GB), GB
        }
      }
      clear(BB) {
        this.latest++, this.drop(BB)
      }
      drop(BB) {
        const OB = this.sJ;
        if (this.sJ = null, (null === OB || void 0 === OB ? void 0 : OB.module) === BB && !(0, FG.m)(BB)) try {
          this.call(BB, null)
        } catch {}
      }
    }({
      compiler: dG.b,
      builtIns: async () => {
        const {
          pageBuiltInAnimationPack: BB
        } = await DJ();
        return BB().whenSet()
      },
      warn: ZM
    });
    async function zJ(BB, OB) {
      let YB = !1;
      await lJ({
        matchmake: async () => {
          const {
            guestJoinTarget: DB,
            guestJoinWithPack: QB
          } = await GB.e(125).then((() => GB(54064)));
          return YB ? DB(BB, OB, WM()) : (YB = !0, QB(BB, OB, (OB => AM(BB, OB)), WM))
        },
        onFailure: BB => {
          (0, QY.showJoinFailure)(BB, Ho)
        },
        rejoin: uJ,
        invalidateTrafficCode: mJ
      })
    }
    async function lJ(BB) {
      let {
        matchmake: OB,
        onFailure: GB,
        rejoin: DB,
        invalidateTrafficCode: QB,
        pageReady: oB,
        signal: jB
      } = BB;
      const yB = () => !0 === (null === jB || void 0 === jB ? void 0 : jB.aborted);
      let JB;
      const MB = hD.b.rejoinHold();
      vj = null, (0, pY.i)();
      const PB = (0, PY.W)("wasm", oP);
      let zB = !1,
        lB = performance.now();
      try {
        if (!await Oj) return {
          kind: "stopped"
        };
        if (yB()) return {
          kind: "rB"
        };
        QJ().catch((() => {}));
        let BB = await OB();
        var qB, dB;
        if (lB = performance.now(), !yB()) QP(null !== (qB = null === (dB = BB.target.session) || void 0 === dB ? void 0 : dB.gameNameWithVariation) && void 0 !== qB ? qB : null);
        const GB = () => performance.now() - BB.matchedAt <= BB.freshMs,
          YB = qJ(BB.target).catch((() => {}));
        GB() && !yB() && (JB = new nD(BB.target, {
          signal: jB
        }));
        const QB = performance.now();
        let MB = () => {};
        yB() || (MB = function(BB, OB) {
          IB(), BB || fB || null !== UB && "ok" !== UB || (fB = !0, (0, pB.p)("wasm_boot_wait", performance.now(), `${nB}:${OB()}:${(0,ZB.o)()}`)), kB++;
          let GB = !1;
          return () => {
            GB || (GB = !0, kB--)
          }
        }(so, LO.h), null === jB || void 0 === jB || jB.addEventListener("abort", MB, {
          once: !0
        }));
        const PB = await to;
        if (MB(), null === jB || void 0 === jB || jB.removeEventListener("abort", MB), null === PB) return {
          kind: "stopped"
        };
        var KB, uB;
        if (function(BB) {
            var OB, GB;
            if (NB.b.markGameEngineConstructed(), SB) return;
            SB = !0;
            const YB = Math.max(BB, null !== (OB = WB) && void 0 !== OB ? OB : BB);
            (0, RB.i)("ready", Math.max(0, (null !== (GB = AB) && void 0 !== GB ? GB : YB) - YB) / 1e3)
          }(QB), !yB())
          if (null !== AB && null !== VB ? (0, pB.p)("wasm_core_ready", VB) : console.warn("[bloxd-wasm-client] a join found the core before boot marked its steps"), BB.target.session && (0, KQ.b)(BB.target.session.gameNameWithVariation)) null === (KB = Qj) || void 0 === KB || KB.prestart();
        if (await YB, !GB() && !yB()) null === (uB = JB) || void 0 === uB || uB.rematched(), BB = await OB(), lB = performance.now();
        if (yB()) return {
          kind: "rB"
        };
        const mB = await async function(BB) {
          var OB, GB, YB;
          let {
            signal: DB,
            rejoin: QB = null,
            early: oB,
            pageReady: jB
          } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (null !== DB && void 0 !== DB && DB.aborted) throw new DOMException("the join was left", "AbortError");
          const yB = (JB = My, MB = performance.now(), null !== JB && MB - JB < zD);
          var JB, MB;
          My = null;
          const PB = new AbortController,
            zB = null !== (OB = null === (GB = BB.session) || void 0 === GB ? void 0 : GB.gameNameWithVariation) && void 0 !== OB ? OB : null;
          QP(zB), RJ({
            controller: PB,
            game: zB
          }), Py = null, null === (YB = py) || void 0 === YB || YB.abort(), py = null, Zy = !1, Ny = null, Ry.clear();
          const lB = () => {
            (0, vO.l)(PB, (0, vO.i)(DB))
          };
          null === DB || void 0 === DB || DB.addEventListener("abort", lB, {
            once: !0
          });
          try {
            var qB, ZB, NB;
            const OB = await to;
            if (null === OB || OB.isStopped || GJ) throw new Error("no core is running to join a game with");
            if (BB.session && null !== nj) {
              const OB = await ZJ(nj.join(BB.session.gameNameWithVariation), PB.signal);
              if ((0, WQ.s)("webgpuloss")) {
                const GB = BB.session.gameNameWithVariation,
                  YB = nj.couldntRunInJoinedGame();
                (0, AQ.d)((BB => BB.noteWasmJoin(GB, OB, YB)))
              }
              if (null !== OB) throw new JO.d(OB)
            }
            const [, , , {
              joinRoom: GB
            }] = await ZJ(Promise.all([(0, aB.m)(OB), qJ(BB), null === jB || void 0 === jB ? void 0 : jB(), QJ()]), PB.signal), YB = BB.session, DB = YB ? {
              ...iJ,
              attachSocket: OB => {
                const GB = cJ(OB, BB.endpoint);
                var DB;
                null !== GB && (tj = {
                  conn: GB,
                  info: YB
                }, null === (DB = By) || void 0 === DB || DB(YB.playerDbId));
                return GB
              }
            } : iJ, JB = await GB(DB, BB, {
              signal: PB.signal,
              early: oB
            }).catch((BB => {
              throw function(BB) {
                if (!(BB instanceof BO.d)) return BB;
                if ("roomError" === BB.stage && null !== Ny) return pJ(new BO.d(BB.message, BB.stage, BB.code, Ny), BB);
                const OB = "closed" === BB.stage && null !== zy ? Ry.get(zy.conn) : void 0;
                return void 0 === OB ? BB : pJ(new BO.d(BB.message, BB.stage, OB.code, null, BB.socketOpened), BB)
              }(BB)
            }));
            if (Hj !== PB) throw JB.leave(), new DOMException("the join was left", "AbortError");
            AJ(JB), null === (qB = jj) || void 0 === qB || qB.newGame();
            const MB = function(BB, OB) {
              var GB, YB;
              const {
                session: DB
              } = BB, QB = void 0 === DB ? BB.joinOptions.lobbyName : DB.lobbyName;
              return {
                endpoint: BB.endpoint,
                game: null !== (GB = null === DB || void 0 === DB ? void 0 : DB.gameNameWithVariation) && void 0 !== GB ? GB : BB.roomName,
                lobby: String(null !== QB && void 0 !== QB ? QB : null),
                sessionId: OB,
                postCookies: null !== (YB = BB.postCookies) && void 0 !== YB ? YB : null
              }
            }(BB, JB.seat.sessionId);
            Cj.set(JB, MB), AD(MB);
            const zB = performance.now(),
              lB = {
                conn: JB.conn,
                rejoin: QB,
                game: null !== (ZB = null === (NB = BB.session) || void 0 === NB ? void 0 : NB.gameNameWithVariation) && void 0 !== ZB ? ZB : "",
                joinedAt: zB,
                rejoinedAt: yB ? zB : null,
                overflow: null
              };
            Oy = lB,
              function(BB, OB) {
                vJ();
                const GB = {
                  endpoint: OB,
                  roomId: BB.seat.room.roomId,
                  heldConn: 0,
                  dropCode: 0,
                  pendingHold: null,
                  resume: new sG({
                    reconnect: (BB, OB, YB) => async function(BB, OB, GB, YB) {
                      const {
                        roomId: DB,
                        roomToken: QB
                      } = xJ(BB, OB), oB = ao;
                      if (null === oB || oB.isStopped || GJ) throw new Error("no core is running to resume the game on");
                      const {
                        resumeRoom: jB
                      } = await ZJ(QJ(), GB), yB = {
                        ...iJ,
                        attachSocket: OB => Gy !== BB || 0 === BB.heldConn ? (OB.close(), null) : cJ(OB, BB.endpoint, !0)
                      };
                      return jB(yB, BB.endpoint, DB, QB, {
                        signal: GB,
                        onAttached: YB
                      })
                    }(GB, BB, OB, YB),
                    releaseSeat: BB => {
                      !async function(BB, OB) {
                        const {
                          roomId: GB,
                          roomToken: YB
                        } = xJ(BB, OB);
                        try {
                          const {
                            leaveHeldSeat: OB
                          } = await QJ();
                          await OB(BB.endpoint, GB, YB)
                        } catch (DB) {
                          console.warn(`${zo} the held seat of a game left while it reconnected couldn't be released`, DB)
                        }
                      }(GB, BB)
                    },
                    isLive: () => Gy === GB && null !== Oy && !GJ,
                    NK: BB => {
                      Jy = BB, HJ()
                    },
                    onReconnected: BB => {
                      ! function(BB) {
                        const OB = bj;
                        if (null !== OB && OB !== BB) {
                          const GB = Cj.get(OB);
                          void 0 !== GB && Cj.set(BB, GB), Ty === OB && (Ty = BB), OB.detach()
                        }
                        AJ(BB)
                      }(BB)
                    },
                    onGaveUp: (BB, OB) => {
                      ! function(BB, OB, GB) {
                        var YB, DB;
                        console.warn(`${zo} gave up reconnecting (${GB.reason}, ${GB.attempts} attempts)`, GB.lastError), (0, QY.reportReconnectGaveUp)(GB, Ho);
                        const QB = null !== (YB = null === (DB = Oy) || void 0 === DB ? void 0 : DB.rejoin) && void 0 !== YB ? YB : null;
                        sJ(BB, "gaveUp"), SJ();
                        const oB = {
                          code: BB.dropCode,
                          name: null,
                          reason: ko,
                          canReconnect: !OB,
                          automaticallyReconnect: !1,
                          requiresRefresh: !1
                        };
                        FJ(oB, OB ? null : QB, !1, {
                          reasonKey: Ko,
                          canPlayAgain: OB
                        })
                      }(GB, BB, OB)
                    }
                  })
                };
                Gy = GB, null !== Yy && Yy.conn === BB.conn && GB.resume.onInitialInfo(Yy)
              }(JB, BB.endpoint), performance.mark(Wo), (0, pB.p)("wasm_joined", zB), setTimeout((() => {
                bj === JB && (0, pB.i)()
              }), 0), MJ(), console.info(`${zo} joined ${BB.roomName} as ${JB.seat.sessionId} at ${Math.round(performance.now())} ms`);
            const RB = Py;
            Py = null, null !== RB && fJ(lB, RB.mask, RB.frames);
            const WB = Ry.get(JB.conn);
            return Ry.clear(), void 0 !== WB && (AJ(null), IJ(JB.conn, WB.code, WB.reason)), JB
          } finally {
            var RB;
            null === DB || void 0 === DB || DB.removeEventListener("abort", lB), Hj === PB && WJ(bj, null), (null === (RB = zy) || void 0 === RB ? void 0 : RB.join) === PB && (zy = null)
          }
        }(BB.target, {
          signal: jB,
          rejoin: DB(BB.target),
          early: JB,
          pageReady: oB
        });
        return zB = !0, {
          kind: "joined",
          game: mB
        }
      } catch (FB) {
        if (FB instanceof DOMException && "AbortError" === FB.name || yB()) return {
          kind: "rB"
        };
        if (GJ) return {
          kind: "stopped"
        };
        if (Zy && (Zy = !1, await QB().catch((BB => {
            console.warn(`${zo} the cached traffic code could not be dropped`, BB)
          }))), null === await to) return {
          kind: "stopped"
        };
        if (FB instanceof JO.d) return GB(FB, performance.now() - lB), {
          kind: "failed",
          error: FB,
          reloading: !1
        };
        const BB = FB instanceof BO.d && FB.code === YB.c.wasmClientNotAllowed.code,
          OB = FB instanceof BO.d && FB.code === YB.c.outdatedVersion.code,
          DB = () => null === bj,
          oB = await qP({
            site: QY.JOIN_SITE,
            error: FB,
            outdated: OB
          }, (() => {
            BB && (0, cO.z)(), GB(FB, performance.now() - lB)
          }), {
            stillWanted: DB
          });
        return {
          kind: "failed",
          error: FB,
          reloading: oB
        }
      } finally {
        var mB;
        zB || PB.end(), hD.b.releaseHold(MB);
        const BB = null === (mB = JB) || void 0 === mB ? void 0 : mB.release();
        BB && (0, QY.reportUnusedSeat)(BB, Ho)
      }
    }

    function pJ(BB, OB) {
      return BB.stack = OB.stack, BB
    }

    function qJ(BB) {
      return BB.session ? (0, aB.r)(Co, BB.session.gameNameWithVariation) : Promise.resolve()
    }

    function ZJ(BB, OB) {
      return (0, vO.r)(OB), new Promise(((GB, YB) => {
        const DB = () => {
          YB((0, vO.i)(OB))
        };
        OB.addEventListener("abort", DB, {
          once: !0
        }), BB.then((BB => {
          OB.removeEventListener("abort", DB), GB(BB)
        }), (BB => {
          OB.removeEventListener("abort", DB), YB(BB)
        }))
      }))
    }

    function NJ() {
      RJ(null)
    }

    function RJ(BB) {
      var OB, GB, YB;
      (XM(null === BB ? "left" : "replaced"), function() {
        const BB = Gy;
        null !== BB && sJ(BB, "left")
      }(), null === Yj || Yj.left) || (Yj.left = !0, null === (YB = (0, aB.j)()) || void 0 === YB || YB.socketLeft(), (0, zB.n)({
        websocketUrl: null
      }));
      Hj && (0, vO.l)(Hj, new DOMException("the join was left", "AbortError")), SJ(null !== BB), null === (OB = nj) || void 0 === OB || OB.leave();
      const DB = bj;
      null !== BB && hD.b.setGame(BB.game), WJ(null, null !== (GB = null === BB || void 0 === BB ? void 0 : BB.controller) && void 0 !== GB ? GB : null), null === DB || void 0 === DB || DB.leave(), VJ(0), (0, TO.h)()
    }

    function WJ(BB, OB) {
      bj = BB, Hj = OB, null === bj && null === Hj && hD.b.setGame(void 0)
    }

    function AJ(BB) {
      WJ(BB, Hj)
    }

    function VJ(BB) {
      const OB = ao;
      return null !== Lo && !GJ && null !== OB && !OB.isStopped && (!!Lo(BO.g, 0, (0, BO.v)(BB)) && (wj = !0, 0 === BB || gj || iM(OB, !1, "all"), !0))
    }

    function SJ() {
      var BB, OB;
      arguments.length > 0 && void 0 !== arguments[0] && arguments[0] || (0, PY.g)();
      const GB = null !== (BB = null === (OB = Oy) || void 0 === OB ? void 0 : OB.overflow) && void 0 !== BB ? BB : null;
      Oy = null, null !== GB && (0, QY.reportEventOverflow)(GB, Ho)
    }

    function nJ() {
      null !== bj || null !== Hj ? NJ() : hJ()
    }

    function UJ(BB, OB) {
      console.warn(`${zo} the event buffer refused records in ${OB} frames (categories ${BB})`), GJ || (null !== Oy ? fJ(Oy, BB, OB) : null !== Hj && function(BB, OB, GB) {
        var YB;
        const DB = function(BB, OB) {
          return null === BB ? "drop" : BB.activated ? "keep" : 0 !== (OB & nG.A.NetSession) ? "fail" : "drop"
        }((null === (YB = zy) || void 0 === YB ? void 0 : YB.join) === BB ? zy : null, OB);
        "keep" === DB ? Py = {
          mask: OB,
          frames: GB
        } : "fail" === DB && (0, vO.l)(BB, new Error("the join's net session was lost to an event overflow"))
      }(Hj, BB, OB))
    }

    function fJ(BB, OB, GB) {
      const YB = BB.overflow ??= {
        frames: 0,
        acks: 0,
        mask: 0,
        outcome: null
      };
      YB.frames += GB, YB.acks++, YB.mask |= OB;
      const DB = function(BB, OB, GB) {
        if (0 === (BB & nG.A.NetSession)) return "none";
        const YB = null !== OB.rejoinedAt && GB - OB.rejoinedAt < lD;
        return null === OB.rejoin || YB ? "fail" : "rejoin"
      }(OB, BB, performance.now());
      "none" !== DB && queueMicrotask((() => {
        if (Oy !== BB) return;
        const OB = "rejoin" === DB && performance.now() - ly >= tB.e;
        YB.outcome = OB ? "rejoined" : "failed", FJ(function(BB, OB) {
          return {
            code: 0,
            name: "eventOverflow",
            reason: "Your game fell behind the server.",
            canReconnect: BB,
            automaticallyReconnect: OB,
            requiresRefresh: !1
          }
        }(null !== BB.rejoin, OB), BB.rejoin, OB), NJ(), OB && (My = performance.now())
      }))
    }

    function kJ() {
      xy && function(BB, OB) {
        let {
          mesh: GB,
          worldgen: YB,
          modelPool: DB
        } = BB;
        "landingPage" === OB ? (null === GB || void 0 === GB || GB.stopWorkers(), null === YB || void 0 === YB || YB.stopWorker(), null === DB || void 0 === DB || DB.stopWorkers()) : ((0, PO.k)(OB) || "inGame" === OB) && (null === GB || void 0 === GB || GB.restartWorkers(), null === DB || void 0 === DB || DB.startWorkers())
      }({
        mesh: jj,
        worldgen: Qj,
        modelPool: Zj
      }, PO.c.get("gameState"))
    }

    function dJ(BB) {
      ty = BB, BJ && KJ(BJ, BB)
    }

    function KJ(BB, OB) {
      BB.style.visibility = OB ? "visible" : "hidden"
    }

    function uJ(BB) {
      var OB;
      const GB = BB.roomName,
        YB = null !== (OB = BB.joinOptions.lobbyName) && void 0 !== OB ? OB : null;
      return () => {
        zJ(GB, YB)
      }
    }

    function mJ() {
      return GB.e(125).then((() => GB(54064))).then((BB => {
        let {
          invalidateGuestTrafficCode: OB
        } = BB;
        return OB()
      })).catch((BB => {
        console.warn(`${zo} the cached traffic code could not be dropped`, BB)
      }))
    }

    function IJ(BB, OB, GB) {
      var DB, QB;
      let oB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (GJ) return;
      if ((null === (DB = Oy) || void 0 === DB ? void 0 : DB.conn) !== BB) return void(null !== Hj && Ry.set(BB, {
        code: OB,
        reason: GB
      }));
      XM("lost");
      const {
        rejoin: jB,
        game: yB,
        joinedAt: JB
      } = Oy;
      SJ(), vJ();
      const MB = (0, tB.i)(OB, (0, qD.h)(BB));
      if (console.info(`${zo} the game's connection closed with code ${OB} (${null!==(QB=MB.name)&&void 0!==QB?QB:"unrecognised"})`), OB === YB.c.gameOrPluginKick.code || oB || (0, QY.reportDisconnect)(MB, Ho, {
          closeReason: GB,
          sinceJoinedMs: performance.now() - JB,
          game: yB
        }), MB.requiresRefresh) {
        const BB = "outdatedVersion" === MB.name,
          GB = new Error(`the game's connection closed with code ${OB}`),
          YB = () => null === Oy && null === Hj;
        return void qP({
          site: QY.JOIN_SITE,
          error: GB,
          outdated: BB
        }, (() => {
          YB() && FJ(MB, null, !1)
        }), {
          stillWanted: YB
        })
      }
      const PB = MB.canReconnect ? jB : null,
        zB = null !== PB && MB.automaticallyReconnect && performance.now() - ly >= tB.e;
      FJ(MB, PB, zB)
    }

    function FJ(BB, OB, GB) {
      var YB;
      let DB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
        reasonKey: null,
        canPlayAgain: !1
      };
      if (OJ) return;
      hD.b.unwantedLeave(GB && null !== OB && 0 === qy.size), null === (YB = py) || void 0 === YB || YB.abort();
      const QB = new AbortController;
      py = QB;
      const oB = null === OB ? null : () => {
        QB.signal.aborted || (QB.abort(), OB())
      };
      if (GB && null !== oB) {
        ly = performance.now();
        const BB = setTimeout(oB, tB.b);
        QB.signal.addEventListener("abort", (() => {
          clearTimeout(BB)
        }))
      }
      const jB = {
        code: BB.code,
        name: BB.name,
        reason: BB.reason,
        reasonKey: DB.reasonKey,
        reconnect: oB,
        reconnecting: GB,
        requiresRefresh: BB.requiresRefresh,
        canPlayAgain: DB.canPlayAgain
      };
      if (qy.size > 0)
        for (const JB of [...qy]) try {
          JB(jB)
        } catch (yB) {
          console.error(`${zo} an unwanted-leave listener threw`, yB)
        } else dO((0, nO.g)(BB, null !== oB, GB), QB.signal).then((OB => {
          OB && (null !== oB ? oB() : BB.requiresRefresh && (0, MO.g)())
        }))
    }
    const iJ = {
      attachSocket: BB => cJ(BB),
      onConnection: BB => (Wy.add(BB), () => {
        Wy.delete(BB)
      }),
      sendRaw: (BB, OB) => {
        const GB = Yj;
        return null !== GB && GB.conn === BB && HM(GB, OB)
      },
      leaveRoom: VJ,
      closeSocket: BB => {
        var OB;
        (null === (OB = Yj) || void 0 === OB ? void 0 : OB.conn) === BB && hJ()
      },
      flushNet: aJ
    };

    function LJ(BB) {
      var OB;
      let {
        aux: GB,
        payload: YB
      } = BB;
      null === (OB = ao) || void 0 === OB || OB.queueOptions(GB, YB)
    }

    function gJ(BB, OB) {
      LJ(function(BB, OB) {
        return QQ = BB ? {
          preventMovement: OB
        } : null, BB ? oQ(OB) : {
          aux: SG.kc.AdEnd,
          payload: DQ
        }
      }(BB, OB))
    }

    function rJ(BB) {
      var OB;
      aj = BB, null === (OB = ao) || void 0 === OB || OB.setUiPrefs(BB)
    }

    function XJ(BB, OB) {
      Co.setMaster(BB, OB)
    }

    function wJ(BB) {
      var OB;
      ej = BB, null === (OB = ao) || void 0 === OB || OB.setEnvPrefs(BB)
    }

    function EJ(BB) {
      var OB;
      Tj = BB, null === (OB = ao) || void 0 === OB || OB.setLookPrefs(BB)
    }

    function cJ(BB) {
      var OB;
      let GB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new URL(BB.url).origin,
        YB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      if (BB.readyState === WebSocket.CLOSING || BB.readyState === WebSocket.CLOSED) return console.warn(`${zo} a closing or closed socket can't be attached`), null;
      const DB = ao;
      if (!DB || DB.isStopped) return console.warn(`${zo} no core is running to attach a socket to`), BB.close(), null;
      if (null === (0, aB.j)()) return console.warn(`${zo} the game has not started to attach a socket to`), BB.close(), null;
      if (Kj > SG.t) return console.warn(`${zo} this core has attached all the sockets it can; reload to play on`), BB.close(), null;
      if (wj && !gj && (iM(DB, !1, "all"), DB.isStopped || GJ)) return BB.close(), null;
      hJ();
      const QB = Kj++;
      if (!GM(DB, "open", QB, YB ? SG.hc.Resume : 0)) return BB.close(), null;
      YB || eO.e.reset(), zy = null === Hj ? null : {
        join: Hj,
        conn: QB,
        activated: !1
      }, BB.binaryType = "arraybuffer";
      const oB = new xG.d((() => {
          ! function(BB, OB) {
            if (Yj !== OB || BB.isStopped || null === bJ(OB, Uo)) return;
            OB.detach(), Yj = null, TJ(BB, OB, Uo, "", !0), OB.ws.close()
          }(DB, jB)
        })),
        jB = {
          ws: BB,
          conn: QB,
          pending: [],
          pendingBytes: 0,
          left: !1,
          resume: YB,
          token: null,
          detach: () => {
            oB.dispose(), BB.removeEventListener("message", yB), BB.removeEventListener("open", JB), BB.removeEventListener("close", MB)
          }
        },
        yB = BB => {
          if (BB.data instanceof ArrayBuffer) {
            var OB;
            const GB = new Uint8Array(BB.data);
            oB.heard(), jB.token = null !== (OB = (0, tG.d)(GB)) && void 0 !== OB ? OB : jB.token,
              function(BB, OB, GB) {
                yP(BB, (() => {
                  BB.rings.net.writeFrame(OB, GB) || BB.crash(wG.o, `a socket frame of ${GB.byteLength} bytes did not fit the net-in ring`)
                }));
                const YB = BB.rings.net.cursor >= no;
                !zP() && (YB || BB.netWrittenSinceFrame >= So) && iM(BB, !1, document.hidden ? "all" : "budget");
                pP(BB)
              }(DB, QB, GB)
          }
        },
        JB = () => {
          YB || (0, pB.p)("wasm_socket_open", performance.now());
          for (const OB of jB.pending.splice(0)) BB.send(OB);
          jB.pendingBytes = 0
        },
        MB = BB => {
          if (Yj === jB && DB.rings.net.cursor > 0 && iM(DB, !1, "all"), Yj === jB) {
            if (jB.detach(), Yj = null, TJ(DB, jB, BB.code, BB.reason) || eJ(DB, jB)) return;
            GM(DB, "close", QB), CJ(QB, jB.left), IJ(QB, BB.code, BB.reason)
          }
        };
      return BB.addEventListener("message", yB), BB.addEventListener("open", JB), BB.addEventListener("close", MB), Yj = jB, null === (OB = (0, aB.j)()) || void 0 === OB || OB.socketAttached(QB), (0, zB.n)({
        websocketUrl: GB
      }), QB
    }

    function hJ() {
      const BB = Yj;
      if (!BB) return;
      const OB = ao,
        GB = BB.resume;
      GB && (aJ(), Yj !== BB) || (Yj = null, BB.detach(), BB.ws.close(), null !== OB && (eJ(OB, BB) || GB && TJ(OB, BB, fo)) || (null !== OB && GM(OB, "close", BB.conn), CJ(BB.conn, BB.left)))
    }

    function aJ() {
      const BB = ao;
      null !== BB && !BB.isStopped && !GJ && !gj && BB.rings.net.cursor > 0 && iM(BB, !1, "all")
    }

    function eJ(BB, OB) {
      var GB;
      if (!OB.resume) return !1;
      const YB = Gy;
      return null !== YB && null !== OB.token && "" !== OB.token && (YB.pendingHold = {
        conn: OB.conn,
        token: `${YB.roomId}:${OB.token}`
      }), GM(BB, "close", OB.conn), null === (GB = (0, aB.j)()) || void 0 === GB || GB.socketDetached(OB.conn), !0
    }

    function TJ(BB, OB, GB) {
      let YB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "",
        DB = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
      const QB = bJ(OB, GB);
      if (null === QB) return !1;
      const {
        sJ: oB,
        token: jB,
        game: yB,
        joinedAt: JB
      } = QB;
      if (!GM(BB, "close", OB.conn, SG.B.Held)) return !0;
      console.warn(`${zo} the game's connection ${DB?"went silent":`dropped with code ${GB}`}, holding it`);
      const MB = {
        closeReason: YB,
        sinceJoinedMs: performance.now() - JB,
        game: yB
      };
      return (0, QY.reportDisconnect)((0, tB.i)(GB), Ho, MB, DB ? "silent" : void 0), oB.heldConn = OB.conn, oB.dropCode = GB, oB.pendingHold = {
        conn: OB.conn,
        token: `${oB.roomId}:${jB}`
      }, gj || iM(BB, !1, "all"), !0
    }

    function bJ(BB, OB) {
      const GB = Gy,
        DB = Oy,
        QB = BB.token;
      return null === GB || null === DB || GJ || BB.left || DB.conn !== BB.conn || null === QB || "" === QB ? null : (0, YB.j)(OB) && GB.resume.canHoldSeat() ? {
        sJ: GB,
        token: QB,
        game: DB.game,
        joinedAt: DB.joinedAt
      } : null
    }

    function CJ(BB, OB) {
      var GB;
      null === (GB = (0, aB.j)()) || void 0 === GB || GB.closeGame(BB), (0, YQ.c)().close(BB), OB || (0, zB.n)({
        websocketUrl: null
      })
    }

    function HJ() {
      const BB = Jy;
      if (null === BB) return;
      const OB = (0, aB.j)();
      GJ || null === OB || OB.NK(BB) ? Jy = null : performance.now() - Ej.pause >= mo && (Ej.pause = performance.now(), console.warn(`${zo} the cmd ring had no room for SetPaused(${BB}): written before the next frame`))
    }

    function vJ() {
      const BB = Gy;
      Gy = null, null === BB || void 0 === BB || BB.resume.dispose()
    }

    function sJ(BB, OB) {
      var GB, YB;
      const {
        heldConn: DB
      } = BB, QB = BB.resume.resumingConn;
      BB.heldConn = 0, BB.pendingHold = null, Gy === BB && (Gy = null), "left" === OB ? BB.resume.leave() : BB.resume.dispose(), 0 === yy || (null === (GB = Yj) || void 0 === GB ? void 0 : GB.conn) !== yy || "left" === OB && (null === (YB = bj) || void 0 === YB ? void 0 : YB.conn) === yy || OM(yy), "gaveUp" === OB && 0 !== QB && OM(QB), 0 !== DB && "refused" !== OB && (console.info(`${zo} the game held through its drop ${"left"===OB?"was left":"is given up"}`), null === ao || ao.isStopped || GM(ao, "close", DB), CJ(DB, !1))
    }

    function xJ(BB, OB) {
      const GB = OB.indexOf(":");
      return {
        roomId: GB < 0 ? BB.roomId : OB.slice(0, GB),
        roomToken: OB.slice(GB + 1)
      }
    }

    function tJ(BB) {
      (0, EG.logClientMeasurement)("join_preload", BB, {
        client: "wasm"
      })
    }

    function BM(BB) {
      var OB;
      Yy = BB;
      const GB = BB.replayOffer && jy !== BB.conn;
      oy = GB ? BB.conn : 0, Dy = GB || Qy.has(BB.conn) ? 0 : BB.conn, FB.admitted(), BB.conn === yy && (yy = 0);
      const YB = Gy;
      null !== YB && (null === (OB = Oy) || void 0 === OB ? void 0 : OB.conn) === BB.conn && YB.resume.onInitialInfo(BB)
    }

    function OM(BB) {
      var OB;
      const GB = Yj;
      (null === GB || void 0 === GB ? void 0 : GB.conn) === BB && (GB.left = !0, null === (OB = (0, aB.j)()) || void 0 === OB || OB.socketLeft(), (0, zB.n)({
        websocketUrl: null
      }), VJ(BB) ? setTimeout((() => {
        Yj === GB && hJ()
      }), BO.f) : hJ())
    }

    function GM(BB, OB, GB) {
      let YB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        DB = !1;
      return yP(BB, (() => {
        const {
          net: QB
        } = BB.rings;
        DB = "open" === OB ? QB.writeOpen(GB, YB) : QB.writeClose(GB, YB), DB || BB.crash(wG.o, `a socket ${OB} did not fit the net-in ring`)
      })), DB
    }

    function YM(BB, OB, GB) {
      let YB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const DB = "noContext" === OB ? "noContext" : "blockedAfterLoss" === OB ? "graphicsLost" : BB;
      (0, QY.showUnsupported)(DB, "unsupported", GB, {
        ...YB,
        decline: OB
      })
    }
    const DM = 1500;

    function QM(BB) {
      return (0, rG.u)(BB) && oM(BB)
    }

    function oM(BB) {
      return 1 === BB.missing.length && BB.missing[0] === rG.e
    }
    const jM = "wasmNoContextWaited";

    function yM(BB, OB) {
      const GB = OB ? "blockedAfterLoss" : oM(BB) ? "noContext" : "unsupported";
      return {
        decline: GB,
        ...JM(BB),
        retries: "unsupported" !== GB && xy
      }
    }

    function JM(BB) {
      const OB = `No WebGPU or WebGL2, and WebGL1 lacks ${BB.missing.join(", ")}`,
        GB = oM(BB) ? (0, rG.hb)() : "";
      return {
        detail: "" === GB ? OB : `${OB}; ${GB}`,
        details: {
          missing: BB.missing.join(",")
        }
      }
    }

    function MM(BB) {
      console.warn(`${zo} ${BB}: reloading once more onto the wasm client`), (0, xD.s)(), (0, QY.flushCrashReports)(MO.c).then(MO.g, MO.g)
    }

    function PM() {
      return xy && "address" !== cO.u.reason
    }

    function zM(BB, OB, GB, YB) {
      return ny(BB, OB, GB, YB)
    }

    function lM() {
      null === ky || null === ao || ao.isStopped || GJ || null !== Rj || null === Lo || (Rj = ky(Lo, ZM, NM().follow))
    }

    function pM() {
      var BB, OB, GB;
      return null !== (BB = null === (OB = To) || void 0 === OB || null === (GB = OB.textures) || void 0 === GB ? void 0 : GB.files()) && void 0 !== BB ? BB : null
    }

    function qM(BB) {
      NM().follow((OB => {
        null !== OB && Promise.all([Promise.all([GB.e(225), GB.e(53)]).then((() => GB(54092))), (0, xD.P)()]).then((BB => {
          let [{
            followPagePackFiles: GB
          }, YB] = BB;
          const DB = null === YB || (0, rG.u)(YB) ? "webgl" : YB.backend;
          GB(OB, cD.g, DB, (BB => {
            cD.g.setPageFiles(BB)
          }), ZM)
        }), (OB => {
          console.warn(`${zo} the texture pack's files didn't load: the previews draw the shipped ones until the next opens`, OB), BB()
        }))
      }))
    }

    function ZM(BB, OB) {
      console.warn(`${zo} ${BB}`, OB)
    }

    function NM() {
      return eo ??= new PQ({
        load: BB => Promise.all([GB.e(225), GB.e(66)]).then((() => GB(54098))).then((OB => {
          let {
            startPageTexturePackFeed: GB
          } = OB;
          return GB(ZM, BB)
        })),
        store: yG.d,
        jP: BB => {
          to.then((() => {
            (0, QY.reportTexturePackFeedLoadFailure)(BB, Ho)
          }))
        }
      }), eo
    }
    const RM = BB => NM().follow(BB);

    function WM() {
      return NM().loaded()
    }
    const AM = function(BB, OB, GB) {
        let YB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => performance.now(),
          DB = 0;
        return async function(QB, oB) {
          let jB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => !0;
          const yB = ++DB,
            JB = YB() + OB,
            MB = await
          function(BB, OB) {
            let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {};
            return new Promise((YB => {
              const DB = setTimeout((() => {
                YB(null), BB.then((BB => {
                  null !== BB && (BB.joinedWithout(), GB(BB))
                }))
              }), OB);
              BB.then((BB => {
                clearTimeout(DB), YB(BB)
              }))
            }))
          }(BB(QB), OB, (BB => {
            yB === DB && jB() && oB(BB, YB() + OB).catch((BB => {
              GB("the texture pack step after the join failed", BB)
            }))
          }));
          return null === MB ? null : oB(MB, JB)
        }
      }((BB => (0, mO.l)(BB) ? NM().request() : NM().forJoin()), MQ.e, ZM),
      VM = function(BB, OB) {
        let GB = !1;
        return {
          setGamePackConfirm: BB => {
            GB = null !== BB, OB(BB)
          },
          packStep: (OB, YB, DB) => BB(OB, YB, (() => GB && DB()))
        }
      }(AM, (BB => {
        NM().setGamePackConfirm(BB)
      }));

    function SM(BB) {
      VM.setGamePackConfirm(BB)
    }

    function nM() {
      if (GJ || null !== Iy || null === dy || null === my) return;
      const {
        backend: BB,
        canvas: OB,
        fallbackReason: GB,
        adapterVendor: YB
      } = my, DB = dy;
      dy = null;
      try {
        Iy = DB({
          backend: BB,
          canvas: OB,
          fallbackReason: GB,
          adapterVendor: YB,
          joinedGame: () => GJ ? null : bj,
          canSend: () => !GJ && null !== bj && bj.conn === Dy,
          inGame: fM,
          shaderPackReach: () => {
            var BB, OB;
            return null !== (BB = null === (OB = nj) || void 0 === OB ? void 0 : OB.reachInJoinedGame()) && void 0 !== BB ? BB : null
          },
          wq: () => Wj,
          msaa: () => uy > 1,
          writeCmd: (BB, OB, GB) => null !== Lo && Lo(BB, OB, GB),
          takeFailedMeshJobs: () => {
            var BB, OB;
            return null !== (BB = null === (OB = jj) || void 0 === OB ? void 0 : OB.takeFailedMeshJobs()) && void 0 !== BB ? BB : 0
          },
          readLoadCounts: BB => {
            var OB, GB;
            return null !== (OB = null === (GB = ao) || void 0 === GB ? void 0 : GB.readLoadCounts(BB)) && void 0 !== OB && OB
          },
          mainStalled: (BB, OB, GB, YB) => {
            (0, QY.reportMainStall)(BB, OB, GB, YB, Ho)
          },
          hU: BB => {
            var OB, GB, YB;
            return null !== (OB = null === (GB = Sy) || void 0 === GB || null === (YB = GB.hU) || void 0 === YB ? void 0 : YB.call(GB, BB)) && void 0 !== OB ? OB : -1
          }
        })
      } catch (QB) {
        console.error(`${zo} the frame telemetry didn't start`, QB)
      }
    }

    function UM(BB, OB) {
      try {
        var GB, YB, DB;
        const QB = Ay && null !== (GB = null === (YB = ao) || void 0 === YB || null === (DB = YB.lastHeader) || void 0 === DB ? void 0 : DB.renderPending) && void 0 !== GB ? GB : 0;
        (0, cY.f)(OB, BB, fM() && !(null !== QQ), QB)
      } catch (QB) {
        (0, cY.z)(), console.error(`${zo} the quality steps stopped`, QB)
      }
    }

    function fM() {
      return null !== bj && Ty === bj && !GJ
    }

    function kM(BB) {
      const OB = Iy;
      Iy = null;
      try {
        null === OB || void 0 === OB || OB.stop()
      } catch {}
      console.error(`${zo} the frame telemetry threw: it stops`, BB)
    }

    function dM(BB) {
      var OB, GB, YB, DB;
      if ((0, YQ.c)().fire(BB), "message" === BB.type) {
        if (rj++, BB.ty === SG.Uc.ERROR && null !== Hj) {
          var QB;
          const {
            text: OB,
            dropsCache: GB
          } = (0, tB.m)((new TextDecoder).decode(BB.payload));
          Zy ||= GB, (null === (QB = zy) || void 0 === QB ? void 0 : QB.conn) === BB.conn && (Ny = OB)
        } else if (BB.ty === nG.oc.ResumeComplete) {
          var oB;
          jy = BB.conn, BB.conn === oy && (oy = 0, Dy = Qy.has(BB.conn) ? 0 : BB.conn), null === (oB = Gy) || void 0 === oB || oB.resume.onResumeComplete(BB.conn)
        }
        return
      }
      BB.phase === SG.E.Left ? Xj = BB.conn : BB.phase === SG.E.Activated && (null === (OB = zy) || void 0 === OB ? void 0 : OB.conn) === BB.conn ? zy.activated = !0 : BB.phase === SG.E.Resumed ? function(BB) {
        var OB, GB;
        yy = BB;
        const YB = Gy;
        if (null === YB || 0 === YB.heldConn || (null === (OB = Yj) || void 0 === OB ? void 0 : OB.conn) !== BB || !Yj.resume || null === Oy) return;
        console.info(`${zo} the game resumed on conn ${BB}, waiting for its InitialInfo`);
        const DB = YB.heldConn;
        YB.heldConn = 0, Yj.resume = !1, Oy.conn = BB, (null === (GB = tj) || void 0 === GB ? void 0 : GB.conn) === DB && (tj = {
          conn: BB,
          info: tj.info
        }), eO.e.apply({
          shopInfo: null,
          _shopVersion: IO.b
        })
      }(BB.conn) : BB.phase === SG.E.Held ? function(BB) {
        var OB;
        const GB = Gy,
          YB = null !== (OB = null === GB || void 0 === GB ? void 0 : GB.pendingHold) && void 0 !== OB ? OB : null;
        if (null !== GB && null !== YB && YB.conn === BB) return GB.pendingHold = null, GB.heldConn = BB, yy = 0, console.warn(`${zo} the core holds the game, reconnecting`), void GB.resume.onDropped(YB.token);
        if (BB === yy) {
          yy = 0;
          const OB = ao;
          null === OB || OB.isStopped || (console.info(`${zo} the core held again a resumed game the shell ended before its InitialInfo: closing it again`), GM(OB, "close", BB))
        }
      }(BB.conn) : BB.phase === SG.E.Closed && (null === (GB = Gy) || void 0 === GB || null === (YB = GB.pendingHold) || void 0 === YB ? void 0 : YB.conn) === BB.conn && (Gy.heldConn === BB.conn ? function(BB) {
        const OB = BB.heldConn,
          GB = BB.dropCode;
        sJ(BB, "refused"), console.info(`${zo} the core didn't hold the game through its drop: it hadn't started`), queueMicrotask((() => {
          CJ(OB, !1), IJ(OB, GB, "", !0)
        }))
      }(Gy) : Gy.pendingHold = null), BB.phase !== SG.E.Held && BB.phase !== SG.E.Left && BB.phase !== SG.E.Closed || (Qy.add(BB.conn), BB.conn === Dy && (Dy = 0));
      const jB = Object.keys(SG.E).find((OB => SG.E[OB] === BB.phase)),
        yB = 0 === BB.code ? "" : ` (code ${BB.code})`;
      console.info(`${zo} conn ${BB.conn}: ${null!==jB&&void 0!==jB?jB:BB.phase}${yB}, ${rj} raw messages so far`), (null === (DB = bj) || void 0 === DB ? void 0 : DB.conn) !== BB.conn || BB.phase !== SG.E.Left && BB.phase !== SG.E.Closed || AJ(null), xj !== BB.conn || BB.phase !== SG.E.Left && BB.phase !== SG.E.Closed || (xj = null, null === bj && null === Hj && hD.b.setGame(void 0));
      for (const MB of [...Wy]) try {
        MB(BB.conn, BB.phase, BB.code)
      } catch (JB) {
        (0, UG.j)(JB, `${zo} a connection listener threw`)
      }
    }
    const KM = 9e4,
      uM = 1e3;

    function mM() {
      (0, xD.s)(), sy.forget(), null === bj && null === Hj || (0, NY.d)(), queueMicrotask((() => {
        try {
          sM()
        } catch (BB) {
          console.warn(`${zo} stopping before the reload threw`, BB)
        }(0, QY.flushCrashReports)(MO.c).then(MO.g, MO.g)
      }))
    }

    function IM() {
      const BB = ao;
      null === BB || BB.isStopped || null === Yj || gj || !BB.hasPendingCommands() || iM(BB, !1, "budget")
    }

    function FM(BB) {
      var OB;
      const GB = bj;
      BB.persisted || null === GB || (null === (OB = Yj) || void 0 === OB ? void 0 : OB.conn) !== GB.conn || Yj.left || GB.leave()
    }

    function iM(BB, OB, YB) {
      let DB = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const QB = gj;
      gj = !0;
      try {
        const QB = BB.rings.net.cursor >= no;
        QB && "all" !== YB && !document.hidden && BP("backlog", `a shown tab's net-in is ${BB.rings.net.cursor} bytes behind: one frame reads it all`);
        return function(BB, OB, YB, DB) {
          var QB, oB, jB, yB;
          if (GJ) return !1;
          if (yP(BB, gM), GJ || BB.isStopped) return !1;
          bM() && kj("modelsIn");
          HJ(), uj = performance.now(), Xj = null, wj = !1, (0, hB.P)(), null === (QB = lj) || void 0 === QB || QB.beforeFrame(), GD(uj, BB), (0, hB.I)(uj, rM), Lj = !0;
          const JB = OB && TM();
          let MB;
          try {
            MB = BB.frame(uj, JB, YB)
          } finally {
            Lj = !1
          }
          if (!MB) return !1;
          Ky.observe(null !== (oB = null === (jB = BB.lastHeader) || void 0 === jB ? void 0 : jB.chunksCancelled) && void 0 !== oB ? oB : 0);
          const PB = BB.lastFrameKind,
            zB = (0, QG.d)(PB);
          (function(BB) {
            null !== kQ && kQ.afterFrame(performance.now(), BB)
          })(zB), null === (yB = Fy) || void 0 === yB || yB.frame(BB, uj, PB), OB && (Cy = zB);
          zB && ((0, GG.b)(uj), ay.frame(uj));
          if (null !== Iy) try {
            Iy.frameRan(BB, uj, performance.now(), PB)
          } catch (ZB) {
            kM(ZB)
          }
          "drawn" === PB && eM() && function() {
            for (const BB of [...vD]) BB()
          }();
          BB.forEachNetOut(CM);
          const lB = Yj;
          null !== Xj && (null === lB || void 0 === lB ? void 0 : lB.conn) === Xj && HM(lB, BO.h);
          aM(BB),
            function(BB) {
              const OB = 0 !== (BB.headerWord(nG.O.LoadSteps) & nG._.JoinPreload);
              OB !== sj && (sj = OB, (0, QY.setCrashAdPreload)(OB), (0, PY.K)())
            }(BB), OB && (! function(BB) {
              var OB, YB, DB;
              if (null === bj || !TM()) return;
              const QB = BB.headerWord(nG.O.LoadSteps);
              null === hy || Ty === bj && !hy.frame(uj, 0 !== (QB & nG.bb.TerrainDrawn)) || (hy = null);
              if (0 === (QB & nG._.PlayerBound)) return;
              const oB = BB.lastHeader,
                jB = !Ay || 0 === (null === oB || void 0 === oB ? void 0 : oB.renderPending);
              !ry && jB && (ry = !0, performance.mark(Vo));
              if (Ty === bj) return;
              const yB = null !== (OB = null === oB || void 0 === oB ? void 0 : oB.firstView) && void 0 !== OB ? OB : SG.Z.NotYet;
              if (Ay && yB === SG.Z.NotYet) return;
              if (gy && (!0 !== (null === (YB = (0, aB.j)()) || void 0 === YB ? void 0 : YB.isSessionLive) || !jB)) return;
              Ty = bj;
              const JB = bj;
              if (setTimeout((() => {
                  bj === JB && (0, pB.m)()
                }), 0), null === (DB = nj) || void 0 === DB || DB.playable(), function() {
                  clearTimeout(Gj), Gj = setTimeout((() => {
                    fM() && PP((BB => {
                      let {
                        prefetchWorldgenWorker: OB
                      } = BB;
                      OB()
                    }))
                  }), io)
                }(), gy) return;
              gy = !0, ay.shown(), performance.mark(Ao), (0, WQ.s)("render") && Promise.all([GB.e(89), GB.e(56)]).then((() => GB(5152))).then((BB => {
                let {
                  renderDebugPlayable: OB
                } = BB;
                OB()
              }), (BB => {
                console.warn("The render debug topic didn't load", BB)
              }));
              const MB = Math.round(performance.now()),
                PB = BB.readViewQueuedPrograms();
              null !== PB && (0, pB.p)("wasm_view_links", MB, (0, qB.vb)(PB));
              const zB = null === cy || null === wy ? 0 : Math.max(0, wy - cy),
                lB = null === cy ? 0 : Math.max(0, MB - cy),
                ZB = Ay ? BB.readFirstViewWait(zB, lB) : null;
              null !== ZB && (0, pB.o)(ZB);
              if (Ay && yB !== SG.Z.Drawn) {
                const OB = yB === SG.Z.HeldBackstop ? "held_draws" : "long",
                  {
                    cause: GB
                  } = cM(BB);
                if (console.warn(`${zo} playable at ${MB} ms on the first view's ${OB} backstop, ${GB}: it wasn't drawn whole in time`), (0, pB.p)("wasm_view_backstop", MB, `${OB}:${GB}`), "long" === OB) {
                  var NB, RB;
                  const OB = null !== (NB = null === (RB = Oy) || void 0 === RB ? void 0 : RB.game) && void 0 !== NB ? NB : "";
                  hy = new RY.c((() => {
                    const {
                      cause: GB,
                      census: YB
                    } = cM(BB);
                    (0, QY.reportFirstViewNoTerrain)(OB, GB, YB, Ho), (0, EO.u)("noTerrain")
                  }))
                }
              } else console.info(`${zo} playable at ${MB} ms${Ay?"":" (no renderer)"}`);
              setTimeout(fy, 0), (0, bO.d)().catch((BB => {
                console.error(`${zo} item sprites didn't load, so item particles show the missing texture`, BB)
              })), ID.c.warm()
            }(BB), zB && null !== bj && 0 !== (BB.headerWord(nG.O.LoadSteps) & nG.bb.MeshLanded) && (by = bj), (0, FD.h)(null !== bj && by === bj && Ty !== bj), (0, FD.j)(null !== bj));
          (0, wG.L)(BB, {
            worldgen: Qj,
            mesh: jj
          }),
          function(BB) {
            BB.forEachEvent(DD);
            for (const OB of YD) try {
              (0, sY.c)(OB)
            } catch (ZB) {
              if ((0, UG.d)(ZB)) {
                BB.crashOn(wG.j, ZB);
                break
              }
              console.error(`${tY} an input action listener threw`, ZB)
            }
            YD.length = 0
          }(BB), DB && (0, DG.b)();
          return !BB.isStopped
        }(BB, OB, "all" === YB || QB, DB)
      } finally {
        gj = QB, QB || (mj = performance.now())
      }
    }

    function LM(BB) {
      console.error(`${zo} a frame-start listener threw`, BB)
    }

    function gM() {
      var BB, OB, GB, YB;
      null === (BB = qj) || void 0 === BB || BB.drain(Lo, go), null === (OB = Aj) || void 0 === OB || OB.drain(Lo), null === (GB = Vj) || void 0 === GB || GB.drain(performance.now()), Uy(Lo), null === (YB = Rj) || void 0 === YB || YB.drain()
    }

    function rM(BB) {
      console.error(`${zo} a before-frame listener threw`, BB)
    }

    function XM(BB) {
      var OB, GB;
      const YB = ao;
      if (null === YB || YB.isStopped || GJ || (0, xD.c)()) return;
      const DB = ay.end(BB, performance.now());
      if (null === DB) return;
      const {
        cause: QB,
        census: oB,
        loadSteps: jB
      } = cM(YB), yB = {
        cause: QB,
        bound: 0 !== (jB & nG._.PlayerBound),
        preload: 0 !== (jB & nG._.JoinPreload),
        startupLoaded: TM(),
        renderPending: null !== (OB = null === (GB = YB.lastHeader) || void 0 === GB ? void 0 : GB.renderPending) && void 0 !== OB ? OB : 0,
        wait: YB.readFirstViewWait(0, 0)
      };
      yB.bound && null === yB.wait && console.warn(`${zo} the first view's wait couldn't be read as the load ended: its report says lacked none`), (0, QY.reportFirstViewUnshown)(ey, DB, yB, oB, Ho), "hidden" !== BB && "pagehide" !== BB || (0, QY.flushCrashReports)(MO.c)
    }

    function wM() {
      document.hidden && XM("hidden")
    }

    function EM() {
      XM(document.hidden ? "hidden" : "pagehide")
    }

    function cM(BB) {
      const OB = (0, aB.j)(),
        GB = (0, aB.s)(),
        YB = null === OB || null === GB ? null : GB.readDrawCensus(OB.api),
        DB = BB.headerWord(nG.O.LoadSteps);
      return {
        cause: (0, RY.j)(DB, YB),
        census: YB,
        loadSteps: DB
      }
    }
    const hM = {
      ChunkRequested: "wasm_chunk_requested",
      ChunkStored: "wasm_chunk_stored",
      MeshLanded: "wasm_mesh_landed",
      PlayerChunk: "wasm_player_chunk",
      TerrainDrawn: "wasm_terrain_drawn"
    };

    function aM(BB) {
      var OB;
      if (gy) return;
      if (null === wy && TM() && (wy = performance.now()), null === bj || 0 === (BB.headerWord(nG.O.LoadSteps) & nG._.PlayerBound) ? cy = null : cy ??= performance.now(), null === Hj && null === bj) return;
      null === wy || Ey || (Ey = !0, (0, pB.p)("wasm_startup_loaded", wy));
      let GB = 0;
      null !== bj ? GB = -1 : !0 === (null === (OB = zy) || void 0 === OB ? void 0 : OB.activated) && (GB = ~nG.bb.TerrainDrawn);
      const YB = BB.headerWord(nG.O.LoadSteps) & GB & ~Xy;
      if (0 === YB) return;
      Xy |= YB;
      const DB = performance.now();
      var QB, oB, jB;
      0 !== (YB & nG.bb.PlayerChunk) && (ay.playerChunk(DB), ey = null !== (QB = null !== (oB = null === (jB = Oy) || void 0 === jB ? void 0 : jB.game) && void 0 !== oB ? oB : vj) && void 0 !== QB ? QB : "", (0, QY.warmCrashCounts)());
      for (const [yB, JB] of Object.entries(hM)) 0 !== (YB & nG.bb[yB]) && (0, pB.p)(JB, DB)
    }

    function eM() {
      return Ay && TM()
    }

    function TM() {
      return Sj && bM()
    }

    function bM() {
      return null === qj || qj.startupDone
    }

    function CM(BB, OB) {
      const GB = Yj;
      (null === GB || void 0 === GB ? void 0 : GB.conn) === BB ? HM(GB, OB) : hj++
    }

    function HM(BB, OB) {
      const {
        ws: GB
      } = BB;
      return GB.readyState === WebSocket.OPEN ? (GB.send(OB), !0) : GB.readyState === WebSocket.CONNECTING && BB.pendingBytes + OB.byteLength <= uo ? (BB.pending.push(OB.slice()), BB.pendingBytes += OB.byteLength, !0) : (hj++, !1)
    }

    function vM() {
      return null !== bj && eM()
    }

    function sM() {
      var BB, OB, GB, YB, DB, QB, oB, jB, yB, JB, MB, PB, zB, lB, pB, qB, ZB;
      GJ = !0, Hy.stop(), (0, VQ.endLookDebugTake)(), kQ = null, vJ(), (0, hB.O)().unlockPointer(), (0, hB.M)(null), null === (BB = pj) || void 0 === BB || BB(), pj = null, null === (OB = (0, aB.s)()) || void 0 === OB || OB.followCursorAim(null), (0, DG.z)(), (0, aB.h)(), Co.stop(), null === (GB = iy) || void 0 === GB || GB(), iy = null, null === (YB = Ly) || void 0 === YB || YB(), Ly = null, null === (DB = Iy) || void 0 === DB || DB.stop(), Iy = null, (0, AY.k)(null), null === (QB = Dj) || void 0 === QB || QB(), Dj = null, null === (oB = Qj) || void 0 === oB || oB.stop(), Qj = null, null === (jB = jj) || void 0 === jB || jB.stop(), jj = null, null !== (yB = To) && void 0 !== yB && null !== (JB = yB.textures) && void 0 !== JB && JB.assets && (0, wD.o)(null), null === (MB = To) || void 0 === MB || MB.stop(), To = null, bo = null;
      const NB = yj;
      yj = null, NB && (NB.stop(), jP(NB)), null === (PB = Aj) || void 0 === PB || PB.dispose(), Aj = null, null === (zB = Vj) || void 0 === zB || zB.dispose(), Vj = null, qj = null, null === (lB = Nj) || void 0 === lB || lB(), Nj = null, null === (pB = zj) || void 0 === pB || pB(), zj = null, null !== ij && (clearTimeout(ij), ij = null), null === (qB = lj) || void 0 === qB || qB.stop(), lj = null, NJ(), hD.b.release(), hJ();
      const RB = Rj;
      Rj = null;
      try {
        null === RB || void 0 === RB || RB.dispose()
      } catch (WB) {
        console.warn(`${zo} the sky's images didn't release`, WB)
      }(0, iD.h)(null), null === (ZB = co) || void 0 === ZB || ZB.pagePreviews().endSession(null === (0, iO.n)())
    }

    function xM(BB, OB) {
      var GB, YB;
      const DB = null !== (GB = null === (YB = yj) || void 0 === YB ? void 0 : YB.details()) && void 0 !== GB ? GB : {},
        QB = BB.site === qo || BB.site === Zo || BB.site === QY.RENDER_RELOAD_SITE || BB.site === No ? BB.error instanceof WebAssembly.RuntimeError || BB.error instanceof FG.e : !(0, rG.v)(BB.error) && (0, wG.F)(BB);
      QB && BB.error instanceof Error && (0, iO.T)(BB.error);
      const oB = QB || BB.site === wG.s ? (0, QY.readTrap)(BB.error) : null,
        jB = null !== oB && (0, kG.e)(oB.kind, oB.refusedBytes) ? oB.refusedBytes : 0,
        yB = (0, OY.o)(),
        JB = null === Jj ? (0, KD.q)(function() {
          try {
            return (0, iO.u)().buffer.byteLength
          } catch {
            return 0
          }
        }(), jB, yB) : Jj.ceilingMayRefuse(jB, yB),
        MB = jB > 0 && !JB && PM() && !(0, xD.c)() ? (0, OY.p)() : void 0;
      var PB;
      if (sM(), (0, xD.c)()) return sy.releaseNow(), console.warn(`${zo} the session stopped at ${BB.site} as the page reloads`, BB.error), void((0, rG.v)(BB.error) || (null === (PB = BB.header) || void 0 === PB ? void 0 : PB.lastError) === SG.I.CoreBusy || (0, QY.reportStoppedCore)(BB, OB, oB, {
        memoryDetails: DB,
        memoryStep: MB
      }));
      (0, QY.showCrash)(BB, OB, oB, {
        memoryDetails: DB,
        memoryStep: MB
      })
    }

    function tM(BB) {
      var OB, GB;
      let {
        text: YB,
        reload: DB,
        stillBlocked: QB
      } = BB;
      if (OJ) return;
      OJ = !0, (0, PY._)(), null === (OB = py) || void 0 === OB || OB.abort(), py = null, hD.b.release();
      const oB = xy ? null !== (GB = YB.cancel) && void 0 !== GB ? GB : "general:back" : null;
      !async function(BB, OB, GB) {
        let YB = BB;
        for (; await dO(YB) && OB;) {
          if (null === GB || JG(!1) || JG(!0)) return void(0, MO.g)();
          YB = GB
        }
        xy && (0, MO.f)("/")
      }({
        ...YB,
        cancel: oB
      }, DB, null === QB ? null : {
        ...QB,
        cancel: oB
      })
    }

    function BP(BB, OB) {
      const GB = performance.now();
      return !(GB - Ej[BB] < mo) && (Ej[BB] = GB, console.warn(`${zo} ${OB}`), !0)
    }

    function OP(BB) {
      const {
        input: OB,
        net: GB,
        worker: YB
      } = BB.rings, DB = BB.optionsDropped, QB = OB.dropped + DB + GB.dropped + YB.dropped + hj;
      QB !== cj && BP("dropped", `${QB} records dropped so far (input ${OB.dropped}, options ${DB}, net ${GB.dropped}, worker ${YB.dropped}, net-out ${hj})`) && (cj = QB)
    }

    function GP() {
      var BB, OB;
      const GB = (0, MY.h)();
      if (null === GB) return null;
      const YB = (0, ZY.i)(GB);
      return {
        ...YB,
        horizontal: Math.min(YB.horizontal, null !== (BB = null === (OB = yj) || void 0 === OB ? void 0 : OB.shedDistanceInUse()) && void 0 !== BB ? BB : 1 / 0)
      }
    }
    const YP = new WeakSet;

    function DP(BB) {
      var OB, GB;
      return {
        samples: Ay ? uy : null,
        sunShadows: BB,
        renderDistance: null !== (OB = null === (GB = GP()) || void 0 === GB ? void 0 : GB.horizontal) && void 0 !== OB ? OB : null
      }
    }

    function QP(BB) {
      vj = BB, (0, PY.K)()
    }

    function oP() {
      var BB, OB, GB;
      const YB = GP();
      return {
        ...null === (BB = yj) || void 0 === BB ? void 0 : BB.pageKillSnapshot(),
        renderDistance: null !== (OB = null === YB || void 0 === YB ? void 0 : YB.horizontal) && void 0 !== OB ? OB : null,
        renderDistanceVertical: null !== (GB = null === YB || void 0 === YB ? void 0 : YB.vertical) && void 0 !== GB ? GB : null,
        chunkCap: Mj,
        budgetBasis: Pj,
        renderBackend: (0, xD.I)(),
        adPreload: sj,
        ...(0, zY.b)(vj)
      }
    }

    function jP(BB) {
      var OB;
      console.info(`${zo} wasm memory at the session's end`, BB.details());
      const {
        wasmMainMiB: GB,
        wasmWorkersMiB: YB,
        peakStoredChunks: DB
      } = BB.pageKillSnapshot(), QB = navigator.deviceMemory;
      (0, EG.logClientMeasurement)("wasm_memory_end", {
        wasmMainMiB: GB,
        wasmWorkersMiB: YB,
        peakStoredChunks: DB
      }, {
        client: "wasm",
        renderBackend: null !== (OB = (0, xD.I)()) && void 0 !== OB ? OB : "none",
        os: (0, lY.getOperatingSystem)(),
        deviceMemory: String(null !== QB && void 0 !== QB ? QB : "unreported")
      })
    }

    function yP(BB, OB) {
      if (!BB.isStopped) try {
        OB()
      } catch (GB) {
        BB.crash(wG.v, GB)
      }
    }

    function JP() {
      return oj ??= GB.e(83).then((() => GB(54103))).catch((BB => {
        throw oj = null, BB
      })), oj
    }
    async function MP() {
      const {
        createWorldgenWorker: BB,
        worldgenWorkerReady: OB
      } = await JP();
      return await OB(), BB
    }

    function PP(BB) {
      var OB;
      null === (OB = oj) || void 0 === OB || OB.then(BB, (() => {}))
    }

    function zP() {
      return performance.now() - Math.max(mj, Ij) >= Io
    }

    function lP(BB) {
      const OB = document.hidden || Fj ? "all" : "budget";
      Fj = !0;
      const GB = iM(BB, !1, OB);
      var YB;
      GB && (OP(BB), null === (YB = yj) || void 0 === YB || YB.afterFrame());
      return GB
    }

    function pP(BB) {
      BB.isStopped || 0 === BB.rings.net.cursor || zP() && !lP(BB) || BB.rings.net.cursor > 0 && performance.now() - Ij >= Io / 2 && function(BB) {
        ij ??= setTimeout((() => {
          ij = null, pP(BB)
        }), Io)
      }(BB)
    }

    function qP(BB, OB) {
      return async function(BB, OB, GB) {
        let {
          stop: YB,
          stillWanted: DB,
          beforeReload: QB
        } = GB;
        const oB = await (0, pD.k)(BB, {
          stillWanted: DB,
          beforeReload: async () => {
            YB(), await Promise.all([(0, QY.flushCrashReports)(MO.c), null === QB || void 0 === QB ? void 0 : QB()])
          },
          reload: MO.g
        });
        return oB || OB(), oB
      }(BB, OB, {
        ...arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        stop: sM
      })
    }
    let ZP = !1;

    function NP() {
      return ZP = !0, async function(BB, OB, YB) {
        const {
          gamePackSource: DB
        } = await GB.e(124).then((() => GB(42056)));
        await VM.packStep(BB, ((GB, YB) => GB.packForGame(BB, DB(OB), YB)), YB)
      }(...arguments)
    }

    function RP(BB) {
      ! function(BB, OB) {
        BB((BB => {
          null === BB || void 0 === BB || BB.subscribe((BB => {
            let {
              pack: GB,
              gameSource: YB
            } = BB;
            OB(null === YB || null === GB ? null : {
              pack: GB,
              source: "" === YB ? null : YB
            })
          }))
        }))
      }(RM, BB)
    }
    let WP = !1,
      AP = null,
      VP = !1,
      SP = !1;

    function nP() {
      var BB;
      WP || (WP = !0, fO = (BB, OB) => (0, ZO.C)(NO.e.get().getCurrentLanguageCode(), BB, OB), JJ("play", yO), (0, zB.m)(new gP), jB.gameBridge.attach(xB), uP().catch((() => {})), (0, aB.u)((BB => {
        AO(BB.setTextHost)
      })), BB = kP, qy.add(BB), function(BB) {
        for (const OB of Uj) BB(OB);
        fj.add(BB)
      }((BB => {
        fP(UP[BB])
      })))
    }
    const UP = {
      booted: QB.l.INITIALISE_NOA,
      texturesIn: QB.l.REGISTRATION,
      modelsIn: QB.l.SETUP_LIFEFORMS
    };

    function fP(BB) {
      yB.o.tM("matchmakeAndPlayStepCompleted", {
        step: BB,
        totalSubSteps: 1
      })
    }

    function kP(BB) {
      if (!VP) return;
      const {
        gameNameWithVariation: OB,
        lobbyName: GB
      } = (0, zB.c)();
      if (BB.code === YB.c.serverUpdating.code) return (new gP).leaveLive(), void KP(OB, GB);
      rB.b.leftGame(OB, BB.code), yB.o.tM("unwantedLeftGame", {
        reason: dP(BB),
        requiresRefresh: BB.requiresRefresh,
        canReconnect: null !== BB.reconnect,
        automaticallyReconnect: BB.reconnecting,
        canPlayAgain: BB.canPlayAgain,
        gameNameWithVariation: OB,
        lobbyName: GB
      }), (new gP).leaveLive()
    }

    function dP(BB) {
      return null !== BB.reasonKey ? {
        translationKey: BB.reasonKey
      } : "gameOrPluginKick" === BB.name ? (0, KO.b)(BB.reason) : `You have disconnected from the server.\n${BB.reason}`
    }

    function KP(BB, OB) {
      var YB;
      YB = (0, JB.G)(BB, OB), Promise.resolve().then((() => GB(1560))).then((BB => {
        let {
          navigatePreserveSearch: OB
        } = BB;
        OB(YB)
      })).catch((BB => {
        console.warn("[bloxd-wasm-client] the page's router didn't navigate: loading the page instead", BB), (0, MO.f)(YB)
      }))
    }

    function uP() {
      return AP ??= Promise.all([GB.e(84), GB.e(87), GB.e(85), GB.e(86), GB.e(103), GB.e(100), GB.e(300), GB.e(207), GB.e(250), GB.e(274), GB.e(244), GB.e(54)]).then((() => GB(42017))).then((BB => {
        try {
          BB.attachPlayGameSources()
        } catch (OB) {
          throw console.error("[bloxd-wasm-client] the play sources did not attach", OB),
            function(BB) {
              to.then((OB => {
                null === OB || OB.isStopped || GJ ? console.warn(`${zo} the play sources threw as they attached, after the client stopped`, BB) : xM({
                  site: No,
                  error: BB,
                  header: null
                }, Ho)
              }))
            }(OB), OB
        }
      }), (BB => {
        throw AP = null, new aB.e(BB)
      })), AP
    }
    async function mP(BB, OB) {
      nP(), ZP = !0, VP = !0;
      let GB = {
          place: BB.place,
          matchedAt: BB.matchedAt
        },
        oB = BB.place.gameNameWithVariation;
      const jB = (0, PB.g)();
      let yB = null;
      const JB = await lJ({
        matchmake: async () => {
          let OB = GB;
          if (GB = null, null === OB) {
            const GB = await BB.rematch();
            if (GB.isError()) throw yB = GB.asError().forward(), new Error(GB.asError().message);
            OB = {
              place: GB.getValue(),
              matchedAt: performance.now()
            }
          }
          oB = OB.place.gameNameWithVariation;
          return {
            target: await (0, GO.e)(BB.userContext, OB.place, WM(), jB),
            matchedAt: OB.matchedAt,
            freshMs: GO.c
          }
        },
        pageReady: uP,
        onFailure: (BB, OB) => {
          null === yB && function(BB, OB) {
            (0, QY.reportPageJoinFailure)(BB, Ho, OB)
          }(BB, {
            sinceJoinStartMs: OB,
            game: oB
          })
        },
        rejoin: () => () => {},
        invalidateTrafficCode: () => BB.userContext.invalidateTrafficCode(),
        signal: OB
      });
      switch (JB.kind) {
        case "joined":
          if (jB) {
            setTimeout((() => {
              FB.ready()
            }), 0);
            const {
              game: BB
            } = JB;
            (0, PB.l)((() => {
              BB.endJoinAd() && ((0, pB.n)(), FB.adEnded())
            }))
          }
          return SP || (SP = !0, (0, LB.d)()), VP ? (fP(QB.l.CONNECT_TO_GAME_SERVER), fP(QB.l.SHADER_PACK), function() {
            var BB, OB;
            return null !== (BB = null === (OB = nj) || void 0 === OB ? void 0 : OB.runsInJoinedGame()) && void 0 !== BB && BB
          }() && (0, iB.i)(BB.userContext, oB).catch((BB => {
            console.error("Failed to report the shader pack session", BB)
          })), function() {
            const BB = function() {
              var BB, OB;
              return null !== (BB = null === (OB = nj) || void 0 === OB ? void 0 : OB.couldntRunInJoinedGame()) && void 0 !== BB ? BB : null
            }();
            null !== BB && (0, iB.e)(BB)
          }(), DB.c.value(void 0)) : LP("The server ended the game as it joined");
        case "failed":
          if (!JB.reloading) {
            if (null !== yB) return yB;
            if ((JB.error instanceof BO.l || JB.error instanceof BO.d) && JB.error.code === YB.c.serverUpdating.code) {
              if (OB.aborted) return LP("Left the game while it loaded");
              const {
                gameNameWithVariation: BB,
                lobbyName: GB
              } = (0, zB.c)();
              return KP(BB, GB), LP("The server is updating")
            }
            return JB.error instanceof JO.d ? DB.c.errorWithCode(JB.error.messageKey, QB.l.SHADER_PACK, {
              severity: "medium"
            }) : DB.c.errorWithCode(function(BB) {
              if (BB instanceof BO.u || BB instanceof EB.d) return BB.message;
              if (IP(BB)) return (0, tB.k)(BB.code, BB.serverText);
              return tB.f
            }(JB.error), QB.l.CONNECT_TO_GAME_SERVER, {
              error: FP(JB.error) ? JB.error : void 0,
              severity: iP(JB.error),
              gameServerUnreachable: (0, OO.e)(JB.error),
              joinFailure: (0, OO.j)(JB.error),
              rematch: (0, XB.e)(JB.error),
              gameRefused: (0, wB.c)(JB.error)
            })
          }
          return LP("Reloading into the new build");
        case "stopped":
          return LP("The game client stopped, and shows why");
        case "rB":
          return LP("Left the game while it loaded")
      }
    }

    function IP(BB) {
      return BB instanceof BO.l || BB instanceof BO.d && "attach" !== BB.stage
    }

    function FP(BB) {
      return !(BB instanceof BO.u) && !IP(BB) && void 0 === (0, OO.e)(BB)
    }

    function iP(BB) {
      return IP(BB) ? BB instanceof BO.d && (0, tB.i)(BB.code).requiresRefresh ? "medium" : "low" : FP(BB) || BB instanceof BO.u ? "medium" : "low"
    }

    function LP(BB) {
      return DB.c.errorWithCode(BB, QB.l.CONNECT_TO_GAME_SERVER, {
        severity: "low",
        rB: !0
      })
    }
    class gP {
      leave(BB) {
        if ((0, cB.e)()) {
          var OB, GB;
          if ((0, oB.b)()) return;
          (0, lB.c)(!0 === (null === (OB = (0, cB.l)()) || void 0 === OB || null === (GB = OB.currentViewer) || void 0 === GB ? void 0 : GB.unsavedChanges), BB)
        } else this.leaveLive()
      }
      leaveLive() {
        var BB;
        ZP && (null === (BB = WM()) || void 0 === BB || BB.endGamePack());
        if (!VP) return;
        VP = !1, (0, gB.d)();
        try {
          var OB;
          null === (OB = (0, aB.s)()) || void 0 === OB || OB.clearWasmCameraScreen()
        } catch (YB) {
          console.error("[bloxd-wasm-client] the camera screen didn't clear", YB)
        }
        const {
          gameNameWithVariation: GB
        } = (0, zB.c)();
        try {
          nJ()
        } finally {
          (0, zB.n)({
            websocketUrl: null
          }), yB.o.tM("leaveGame", {
            gameNameWithVariation: GB
          }), (0, MB.I)()
        }
      }
      isReplay() {
        return (0, cB.e)()
      }
    }
  },
  41944: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => DB,
      d: () => YB,
      g: () => jB,
      k: () => oB
    });
    const YB = 12e4,
      DB = 3e4,
      QB = {
        hidden: () => "undefined" !== typeof document && document.hidden,
        listen: BB => "undefined" === typeof document ? () => {} : (document.addEventListener("visibilitychange", BB), () => {
          document.removeEventListener("visibilitychange", BB)
        })
      };

    function oB(BB) {
      return `it sent no start within ${Math.round(BB)} ms`
    }
    class jB {
      constructor(BB, OB) {
        let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => performance.now(),
          YB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : QB;
        this.timeoutMs = BB, this.onTimeout = OB, this.now = GB, this.visibility = YB, this.timer = null, this.counted = 0, this.step = null, this.unlisten = void 0, this.unlisten = YB.listen((() => {
          this.onVisibility()
        })), YB.hidden() || this.next()
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
        const OB = Math.min(BB, 5e3);
        this.step = {
          at: this.now(),
          ms: OB
        }, this.arm(OB, (() => {
          this.counted += this.credit(), this.step = null, this.next()
        }))
      }
      arm(BB, OB) {
        this.timer = setTimeout((() => {
          this.timer = null, OB()
        }), BB)
      }
    }
  },
  40421: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => jB
    });
    var YB = GB(353),
      DB = GB(1049);
    const QB = new Set(["bingo", "buildAFactory2", "classic", "greenville", "testGym"]),
      oB = new Set(["creativeFlat", "skyGrid"]);

    function jB(BB) {
      const OB = (0, YB.ac)(BB);
      return "greenville" === OB ? !(0, YB.Xb)(BB) : "classic" !== OB ? QB.has(OB) : !(0, DB.l)(BB) && !oB.has((0, YB.Xb)(BB))
    }
  },
  38401: (BB, OB, GB) => {
    function YB(BB) {
      return "string" !== typeof BB || 2 !== BB.length && ":" !== BB[2] ? null : BB[0] + BB[1]
    }
    GB.d(OB, {
      e: () => ZB,
      f: () => SB,
      h: () => VB,
      k: () => nB,
      m: () => jB,
      o: () => oB,
      q: () => QB,
      s: () => yB,
      v: () => NB,
      w: () => qB
    });
    const DB = ["op:ytInitialPlayerResponse.adPlacements", "op:ytInitialPlayerResponse.playerAds", "op:ytInitialPlayerResponse.adSlots", "op:playerResponse.adPlacements", "op:playerResponse.playerAds", "op:playerResponse.adSlots"];

    function QB(BB) {
      if (function(BB) {
          for (let OB = 0; OB < DB.length; OB++)
            if (BB === DB[OB]) return !0;
          return !1
        }(BB)) return !1;
      const OB = YB(BB);
      return "op" === OB || "ep" === OB || "wi" === OB || "pp" === OB || "fp:call" === BB || "fp:t" === BB
    }

    function oB(BB) {
      return "fp" === YB(BB) && !QB(BB)
    }

    function jB(BB) {
      if ("string" !== typeof BB) return !1;
      return "o" === BB[0] && "p" === BB[1] && (2 === BB.length || ":" === BB[2]) || "fp:call" === BB || "2" === BB || "t" === BB || "a" === BB
    }

    function yB(BB, OB) {
      return `~${function(BB){return BB.length<2?BB:":"===BB[1]?BB[0]:BB[0]+BB[1]}(OB)}~${BB}`
    }
    const JB = 200;

    function MB(BB) {
      let OB = BB.length - 1;
      for (let GB = 0; GB < 2; GB++) {
        const GB = OB;
        for (; OB >= 0 && BB[OB] >= "0" && BB[OB] <= "9";) OB--;
        if (OB < 0 || OB === GB || ":" !== BB[OB]) return -1;
        OB--
      }
      return OB + 1
    }

    function PB(BB) {
      return "unknown" === BB || MB(BB) >= 0
    }

    function zB(BB, OB) {
      return BB[OB] >= "\ud800" && BB[OB] <= "\udbff" && OB + 1 < BB.length && BB[OB + 1] >= "\udc00" && BB[OB + 1] <= "\udfff" ? 2 : 1
    }

    function lB(BB, OB, GB) {
      return 2 === GB ? 4 : BB[OB] <= "\x7f" ? 1 : BB[OB] <= "\u07ff" ? 2 : 3
    }

    function pB(BB, OB, GB) {
      let YB = 0;
      for (; YB < OB;) {
        const OB = zB(BB, YB),
          DB = lB(BB, YB, OB);
        if (DB > GB) break;
        GB -= DB, YB += OB
      }
      return YB
    }

    function qB(BB) {
      let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1 / 0;
      if ("string" !== typeof BB || BB.length > JB || !PB(BB)) return "t";
      let GB = 2;
      for (let jB = 0; jB < BB.length;) {
        const OB = zB(BB, jB);
        GB += lB(BB, jB, OB), jB += OB
      }
      if (GB <= OB) return `t ${BB}`;
      const YB = MB(BB),
        DB = OB - 2 - (BB.length - YB);
      if (DB < 0) return "t";
      const QB = pB(BB, YB, DB);
      let oB = "t ";
      for (let jB = 0; jB < QB; jB++) oB += BB[jB];
      for (let jB = YB; jB < BB.length; jB++) oB += BB[jB];
      return oB
    }
    const ZB = 62;

    function NB(BB) {
      let OB = "so:";
      const GB = pB(BB, BB.length, ZB - OB.length);
      for (let YB = 0; YB < GB; YB++) OB += BB[YB];
      return OB
    }
    const RB = "BABYLON ",
      WB = "DECODE ",
      AB = "BABYLON@ ";

    function VB(BB) {
      return NB(RB + BB)
    }

    function SB(BB, OB) {
      return NB(AB + BB + " " + OB)
    }

    function nB(BB) {
      return NB(WB + BB)
    }
  },
  41867: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => YB
    });
    const YB = {
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
  38658: BB => {
    BB.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAKUlEQVQYGWM8CwQMeAATHjmw1JBQwAh06v+LFy8yvH//noGXl/ccuq8A/vQKd00yOdIAAAAASUVORK5CYII="
  },
  38648: BB => {
    BB.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAALUlEQVQYGWM8CwQMeAATHjmw1JBQwAh06v8DBw4wCAoKMnBzczN8/PjxHLLPAORwCnfkvOdNAAAAAElFTkSuQmCC"
  },
  38664: BB => {
    BB.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAKUlEQVQYGWM8CwQMeAATHjmw1JBQwAh06v8DBw4wCAoKMvz58+ccuq8A8vQKd2AxC9MAAAAASUVORK5CYII="
  },
  38639: BB => {
    BB.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAANUlEQVQYGWM8CwQMeAATHjmw1JBQAHLp/wMHDvy/ePHi/4CAgP937tz5Ly6u+5/P3uw/KAgAgjwWhHm22JoAAAAASUVORK5CYII="
  },
  38655: BB => {
    BB.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAKUlEQVQYGWM8CwQMeAATHjmw1JBQwAh06v8DBw4wCAoKMvz58+ccuq8A8vQKd2AxC9MAAAAASUVORK5CYII="
  },
  39425: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => QB
    });
    var YB = GB(3206);
    const DB = ["none", "idle", "now"];

    function QB() {
      const BB = () => (0, YB.A)();
      return {
        memoryBytes: () => (0, YB.u)().buffer.byteLength,
        reserveUpFront: OB => BB().iP(OB),
        reserveAhead: OB => BB().FP(OB),
        setCeiling: OB => {
          BB().LP(OB)
        },
        lowWater: () => DB[BB().IP()] ?? "none",
        stats: () => function(BB) {
          const OB = new Uint32Array((0, YB.u)().buffer, BB, 17),
            GB = BB => OB[BB] ?? 0,
            DB = BB => ({
              upFront: GB(BB),
              ahead: GB(BB + 1),
              onDemandInFrame: GB(BB + 2),
              onDemand: GB(BB + 3)
            });
          return {
            memoryBytes: GB(0),
            initialBytes: GB(1),
            liveBytes: GB(2),
            peakLiveBytes: GB(3),
            headroomBytes: GB(4),
            unusedBytes: GB(5),
            ceilingBytes: GB(6),
            reservesRefused: GB(7),
            grows: DB(8),
            grownBytes: DB(12),
            allocationsRefused: GB(16)
          }
        }(BB().gP()),
        takeBallast: () => BB().rP(),
        takePressure: () => BB().XP()
      }
    }
  },
  5546: (BB, OB, GB) => {
    GB.d(OB, {
      B: () => zB,
      e: () => jB,
      h: () => oB,
      k: () => YB,
      o: () => qB,
      p: () => PB,
      r: () => DB,
      u: () => QB,
      v: () => JB,
      y: () => MB
    });
    const YB = 5;

    function DB(BB) {
      return BB === YB
    }

    function QB(BB) {
      return [...BB.features]
    }
    const oB = 262144,
      jB = 256,
      yB = 256;

    function JB(BB) {
      if ("object" !== typeof BB || null === BB || Array.isArray(BB)) return "The pack has no files.";
      const OB = [];
      for (const [GB, YB] of Object.entries(BB)) {
        if ("string" !== typeof YB) return `${GB} isn't text.`;
        OB.push({
          path: GB,
          source: YB
        })
      }
      return OB.sort(((BB, OB) => PB(BB.path, OB.path))),
        function(BB) {
          if (0 === BB.length) return "The pack has no .wgsl files.";
          if (BB.length > jB) return `The pack has more than ${jB} .wgsl files.`;
          const OB = new Set;
          for (const {
              path: GB
            }
            of BB) {
            const BB = lB(GB);
            if (null !== BB) return BB;
            if (OB.has(GB)) return `The pack has two files at ${GB}.`;
            OB.add(GB)
          }
          return zB(BB) > oB ? `The pack's .wgsl files are over ${oB/1024} KB in total.` : null
        }(OB) ?? OB
    }

    function MB(BB) {
      const OB = {};
      for (const GB of BB) OB[GB.path] = GB.source;
      return OB
    }

    function PB(BB, OB) {
      return BB < OB ? -1 : BB > OB ? 1 : 0
    }

    function zB(BB) {
      const OB = new TextEncoder;
      let GB = 0;
      for (const {
          source: YB
        }
        of BB) GB += OB.encode(YB).byteLength;
      return GB
    }

    function lB(BB) {
      if (!BB.toLowerCase().endsWith(".wgsl")) return `${BB} isn't a .wgsl file.`;
      if (BB.length > yB) return `A file path is over ${yB} characters.`;
      if (BB.includes("\\") || /[\u0000-\u001f]/.test(BB)) return `${BB} isn't a valid file path.`;
      return BB.split("/").some((BB => "" === BB || "." === BB || ".." === BB)) ? `${BB} isn't a valid file path.` : null
    }
    const pB = /^(.*)\[rot\[([1-4])$/;

    function qB(BB, OB) {
      let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
      const YB = new Map;
      OB.forEach(((BB, OB) => {
        let {
          numAnimStates: GB,
          animStartIdx: DB
        } = BB;
        for (let QB = 1; QB < GB; QB++) YB.set(DB + QB - 1, OB)
      }));
      const DB = Object.entries(BB),
        QB = new Map;
      for (const [qB, ZB] of DB) {
        const BB = pB.exec(qB);
        "1" === BB?.[2] && QB.set(BB[1], ZB + 1)
      }
      const oB = BB => {
          const OB = pB.exec(BB);
          return OB && QB.has(OB[1]) ? {
            root: OB[1],
            rotation: Number(OB[2]) - 1
          } : null
        },
        jB = new Set(DB.map((BB => {
          let [OB] = BB;
          return oB(OB)?.root ?? OB
        }))),
        yB = (BB, GB) => {
          const YB = BB.replace(/_?0$/, "");
          return (OB[GB]?.numAnimStates ?? 0) > 1 && !jB.has(YB) ? YB : BB
        },
        JB = new Map;
      for (const [pB, qB] of DB) JB.set(qB, yB(oB(pB)?.root ?? pB, qB));
      const MB = DB.reduce(((BB, OB) => {
          let [, GB] = OB;
          return Math.max(BB, GB + 1)
        }), 0),
        PB = Array.from({
          length: MB
        }, ((BB, OB) => ({
          id: OB + 1,
          rotation: 0
        }))),
        zB = new Map,
        lB = new Map;
      for (const [pB, qB] of DB) {
        const BB = oB(pB),
          OB = YB.get(qB);
        if (void 0 !== OB) {
          const GB = JB.get(OB);
          lB.set(pB, {
            name: pB,
            texture: GB,
            kind: "frame"
          }), BB && !lB.has(BB.root) && lB.set(BB.root, {
            name: BB.root,
            texture: GB,
            kind: "frame"
          });
          continue
        }
        const GB = JB.get(qB),
          DB = BB?.root ?? pB;
        if (GB !== DB && lB.set(DB, {
            name: DB,
            texture: GB,
            kind: "frame"
          }), BB) {
          const OB = QB.get(BB.root);
          PB[qB] = {
            id: OB,
            rotation: BB.rotation
          }, zB.set(GB, OB), lB.set(pB, {
            name: pB,
            texture: GB,
            kind: "rotation"
          })
        } else zB.set(GB, qB + 1)
      }
      for (const pB of zB.keys()) lB.delete(pB);
      for (const [pB, qB] of GB) {
        const BB = zB.get(qB);
        void 0 === BB || zB.has(pB) || (zB.set(pB, BB), lB.delete(pB))
      }
      return {
        named: [...zB].sort(((BB, OB) => {
          let [GB] = BB, [YB] = OB;
          return GB < YB ? -1 : GB > YB ? 1 : 0
        })).map((BB => {
          let [OB, GB] = BB;
          return {
            name: OB,
            id: GB
          }
        })),
        aliases: [...lB.values()],
        layers: PB
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);