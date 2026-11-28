export const id = 76;
export const ids = [76, 138, 139, 159];
export const modules = {
  41112: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => eb,
      e: () => Hb
    });
    const eb = "The world isn't loaded, so no blocks can be seen.",
      Hb = "The world isn't loaded, so nothing in it can be seen."
  },
  5578: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => Ib
    });
    var eb = Mb(26),
      Hb = Mb(29),
      pb = Mb(1373),
      Vb = Mb(4060);
    const gb = 3e4,
      lb = 1e3;

    function Lb() {
      return "visible" === document.visibilityState && "inGame" === eb.c.get("gameState") && (0, pb.B)()
    }

    function Ib(bb, wb) {
      (0, Vb.n)() || function(bb, wb, Mb) {
        let eb = 0;
        const Hb = setInterval((() => {
          wb() && (eb += lb, eb >= bb && (clearInterval(Hb), Mb()))
        }), lb)
      }(gb, Lb, (() => {
        wb().then((() => {
          bb(`saved for the player after ${gb/1e3} s of play`), (0, Vb.F)(), Hb.k.iI("chat", {
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
  35186: (bb, wb, Mb) => {
    function eb(bb, wb) {
      return 0 === bb.length ? 0 : bb[Math.min(bb.length - 1, Math.floor(wb * bb.length))]
    }

    function Hb(bb) {
      return bb.toFixed(1)
    }
    Mb.d(wb, {
      b: () => Hb,
      e: () => eb
    })
  },
  39197: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => Lb,
      g: () => Ib,
      j: () => hb,
      m: () => mb,
      n: () => sb
    });
    var eb = Mb(5578),
      Hb = Mb(35186),
      pb = Mb(4060);
    const Vb = 20,
      gb = ["totalMs", "slotMs", "workerMs", "applyMs", "ahead", "inFlight", "qO", "jobMs"];

    function lb(bb) {
      return [...bb].sort(((bb, wb) => bb - wb))
    }
    const Lb = [];

    function Ib(bb, wb, Mb) {
      return `${bb},${wb},${Mb}`
    }
    class Ob {
      constructor() {
        this.pending = new Map, this.jobs = new Map, this.edits = [], this.nextEdit = 0, this.reported = 0, this.windowStart = performance.now(), this.frames = 0, this.lastFrameAt = 0, this.maxFrameMs = 0, this.jobsSent = 0, this.maxAhead = 0, this.maxCapacity = 0, this.roundTrips = [], this.windowEdits = [], this.outliers = 0, this.gaveUp = 0
      }
      edit(bb, wb) {
        var Mb;
        const eb = null !== (Mb = this.pending.get(bb)) && void 0 !== Mb ? Mb : [];
        eb.push({
          editAt: wb,
          meshJobId: 0
        }), this.pending.set(bb, eb)
      }
      frame(bb) {
        this.lastFrameAt > 0 && (this.maxFrameMs = Math.max(this.maxFrameMs, bb - this.lastFrameAt)), this.lastFrameAt = bb, this.frames++, bb - this.windowStart >= 1e3 && this.summarise(bb)
      }
      sent(bb, wb, Mb, eb, Hb, pb, Vb) {
        this.jobs.set(wb, {
          sentAt: Vb,
          receivedAt: 0,
          ahead: Mb,
          inFlight: eb,
          qO: Hb,
          jobMs: 0
        }), this.jobsSent++, this.maxAhead = Math.max(this.maxAhead, Mb), this.maxCapacity = Math.max(this.maxCapacity, Hb);
        for (const lb of null !== (gb = this.pending.get(bb)) && void 0 !== gb ? gb : []) {
          var gb;
          pb.includes(lb.meshJobId) || (lb.meshJobId = wb)
        }
      }
      received(bb, wb, Mb) {
        const eb = this.jobs.get(bb);
        void 0 !== eb && (this.roundTrips.push(Mb - eb.sentAt), eb.receivedAt = Mb, eb.jobMs = wb)
      }
      failed(bb) {
        this.jobs.delete(bb)
      }
      reassign(bb, wb, Mb) {
        this.jobs.delete(wb);
        for (const Hb of null !== (eb = this.pending.get(bb)) && void 0 !== eb ? eb : []) {
          var eb;
          Hb.meshJobId === wb && (Hb.meshJobId = Mb)
        }
      }
      applied(bb, wb, Mb) {
        const eb = this.jobs.get(wb);
        this.jobs.delete(wb), void 0 !== eb && this.show(bb, eb, Mb, (bb => bb.meshJobId === wb))
      }
      emptied(bb, wb) {
        const Mb = {
          sentAt: wb,
          receivedAt: wb,
          ahead: 0,
          inFlight: 0,
          qO: 0,
          jobMs: 0
        };
        this.show(bb, Mb, wb, (() => !0))
      }
      show(bb, wb, Mb, eb) {
        const Hb = this.pending.get(bb);
        if (!Hb) return;
        const pb = Hb.filter((Hb => !eb(Hb) || (this.record(bb, Hb.editAt, wb, Mb), !1)));
        pb.length > 0 ? this.pending.set(bb, pb) : this.pending.delete(bb)
      }
      bO(bb) {
        this.reported += bb, this === tb && this.reported >= Vb && null !== Cb && (Cb(), Cb = null)
      }
      record(bb, wb, Mb, eb) {
        const Hb = {
          totalMs: eb - wb,
          slotMs: Mb.sentAt - wb,
          workerMs: Mb.receivedAt - Mb.sentAt,
          applyMs: eb - Mb.receivedAt,
          ahead: Mb.ahead,
          inFlight: Mb.inFlight,
          qO: Mb.qO,
          jobMs: Mb.jobMs
        };
        if (this.edits[this.nextEdit] = Hb, this.nextEdit = (this.nextEdit + 1) % 500, this.windowEdits.push(Hb.totalMs), this.bO(1), Hb.totalMs < 100 || ++this.outliers > 5) return;
        const Vb = bb => Math.round(bb);
        (0, pb.j)("remesh", `slow edit (${bb}) shown in ${Vb(Hb.totalMs)} ms: slot ${Vb(Hb.slotMs)}, worker ${Vb(Hb.workerMs)} (${Hb.ahead} ahead, ${Hb.inFlight}/${Hb.qO} in flight; job ${Vb(Hb.jobMs)}), apply ${Vb(Hb.applyMs)}`)
      }
      summarise(bb) {
        const wb = (bb - this.windowStart) / 1e3;
        for (const [Mb, eb] of this.pending) {
          const wb = eb.filter((wb => bb - wb.editAt <= 1e4));
          this.gaveUp += eb.length - wb.length, this.bO(eb.length - wb.length), wb.length > 0 ? this.pending.set(Mb, wb) : this.pending.delete(Mb)
        }
        for (const [Mb, eb] of this.jobs) bb - eb.sentAt > (eb.receivedAt > 0 ? 1e4 : 6e4) && this.jobs.delete(Mb);
        if (this.jobsSent > 0 || this.roundTrips.length > 0 || this.windowEdits.length > 0 || this.gaveUp > 0) {
          const bb = lb(this.roundTrips),
            Mb = lb(this.windowEdits),
            eb = Math.max(0, this.outliers - 5);
          (0, pb.j)("remesh", `${Math.round(this.frames/wb)} fps (longest ${Math.round(this.maxFrameMs)} ms) | ${this.jobsSent} jobs sent, up to ${this.maxAhead} ahead on a worker, capacity ${this.maxCapacity} | round trip p50 ${Math.round((0,Hb.e)(bb,.5))} max ${Math.round((0,Hb.e)(bb,1))} ms | ${Mb.length} edits shown, p50 ${Math.round((0,Hb.e)(Mb,.5))} max ${Math.round((0,Hb.e)(Mb,1))} ms${eb>0?`, ${eb} more slow`:""}${this.gaveUp>0?`, ${this.gaveUp} never shown`:""}`)
        }
        this.windowStart = bb, this.frames = 0, this.maxFrameMs = 0, this.jobsSent = 0, this.maxAhead = 0, this.maxCapacity = 0, this.roundTrips = [], this.windowEdits = [], this.outliers = 0, this.gaveUp = 0
      }
      stats() {
        const bb = gb.map((bb => {
          const wb = lb(this.edits.map((wb => wb[bb])));
          return `${bb}: p50 ${Math.round((0,Hb.e)(wb,.5))} p90 ${Math.round((0,Hb.e)(wb,.9))} max ${Math.round((0,Hb.e)(wb,1))}`
        }));
        return [`${this.edits.length} edits`, ...bb].join("\n")
      }
      dump() {
        const bb = this.edits.map((bb => gb.map((wb => Math.round(10 * bb[wb]) / 10)).join(",")));
        return [this.stats(), gb.join(","), ...bb].join("\n")
      }
    }
    class Ub {
      constructor(bb, wb) {
        this.log = bb, this.hU = wb
      }
      edit(bb, wb, Mb) {
        const [eb, Hb, pb] = this.hU.XO.sHb(bb, wb, Mb), Vb = this.hU.XO.CE.EE(eb, Hb, pb);
        Vb && Vb.UE && this.log.edit(Ib(eb, Hb, pb), performance.now())
      }
      sent(bb, wb, Mb, eb, Hb) {
        this.log.sent(Ib(bb.i, bb.j, bb.k), wb, Mb, eb, Hb, Lb, performance.now())
      }
      received(bb) {
        this.log.received(bb.meshJobId, bb.jobMs, performance.now())
      }
      failed(bb) {
        this.log.failed(bb)
      }
      applied(bb, wb) {
        this.log.applied(Ib(bb.i, bb.j, bb.k), wb, performance.now())
      }
    }
    let tb = null,
      Cb = null,
      Eb = !1,
      Fb = null;

    function Bb() {
      return new Promise((bb => {
        null !== tb && tb.reported >= Vb ? bb() : Cb = bb
      }))
    }

    function sb() {
      const bb = new Ob;
      return tb = bb, (0, pb.h)("remesh", (() => bb.dump())), (0, pb.c)("remeshStats", (() => {
        console.log(bb.stats())
      })), Eb || (Eb = !0, (0, eb.d)((bb => {
        (0, pb.j)("remesh", bb)
      }), Bb)), bb
    }

    function mb(bb) {
      const wb = sb();
      Fb = new Ub(wb, bb), bb.fR.meshProbe = Fb, bb.on("beforeRender", (() => {
        wb.frame(performance.now())
      }))
    }

    function hb(bb, wb, Mb) {
      var eb;
      null === (eb = Fb) || void 0 === eb || eb.edit(bb, wb, Mb)
    }
  },
  35221: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => eb
    });
    const eb = new Set(["chunkBorders"])
  },
  38019: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => Hb,
      d: () => eb
    });
    const eb = 3,
      Hb = {
        recording: !1,
        clipping: !1,
        hasClipBuffer: !1,
        seconds: 0
      }
  },
  35370: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => gb,
      c: () => Hb,
      f: () => Ob
    });
    var eb = Mb(1735);

    function Hb(bb) {
      var wb;
      return {
        ...gb.store,
        yaw: gb.store.yaw + (null !== (wb = eb.d[bb].previewYaw) && void 0 !== wb ? wb : 0)
      }
    }
    const pb = {
        yaw: .61 * Math.PI,
        pitch: Math.PI / 2.05,
        radius: 30,
        target: [0, 0, 0]
      },
      Vb = {
        ...pb,
        radius: 33,
        target: [0, 3.9, 0]
      },
      gb = {
        player: pb,
        store: Vb,
        showcase: {
          ...Vb,
          target: [0, 1.9, 0]
        }
      };

    function lb(bb, wb) {
      bb instanceof Promise ? bb.then(wb).catch((bb => {
        console.error("Couldn't open the preview", bb)
      })) : wb(bb)
    }
    class Lb {
      constructor(bb) {
        this.opened = null, this.view = null, this.size = null, this.closed = !1, lb(bb, (bb => {
          this.closed ? bb.close() : (this.opened = bb, null !== this.size && bb.resize(this.size.width, this.size.height), null !== this.view && bb.show(this.view))
        }))
      }
      show(bb) {
        var wb;
        this.view = bb, null === (wb = this.opened) || void 0 === wb || wb.show(bb)
      }
      resize(bb, wb) {
        var Mb;
        this.size = {
          width: bb,
          height: wb
        }, null === (Mb = this.opened) || void 0 === Mb || Mb.resize(bb, wb)
      }
      close() {
        var bb;
        this.closed = !0, null === (bb = this.opened) || void 0 === bb || bb.close(), this.opened = null
      }
    }
    class Ib {
      constructor(bb) {
        this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(bb).then((bb => bb.ready)), lb(bb, (bb => {
          this.closed ? bb.close() : (this.opened = bb, null !== this.size && bb.resize(this.size.width, this.size.height))
        }))
      }
      get dev() {
        return this.opened.dev
      }
      isReady() {
        var bb, wb;
        return null !== (bb = null === (wb = this.opened) || void 0 === wb ? void 0 : wb.isReady()) && void 0 !== bb && bb
      }
      setCosmetic(bb, wb) {
        var Mb;
        null === (Mb = this.opened) || void 0 === Mb || Mb.setCosmetic(bb, wb)
      }
      setNametag(bb) {
        var wb;
        null === (wb = this.opened) || void 0 === wb || wb.setNametag(bb)
      }
      playEmote(bb) {
        var wb;
        null === (wb = this.opened) || void 0 === wb || wb.playEmote(bb)
      }
      setOrbit(bb) {
        var wb;
        null === (wb = this.opened) || void 0 === wb || wb.setOrbit(bb)
      }
      resetCamera() {
        var bb;
        null === (bb = this.opened) || void 0 === bb || bb.resetCamera()
      }
      async untilDrawn(bb) {
        var wb;
        await this.ready, await (null === (wb = this.opened) || void 0 === wb ? void 0 : wb.untilDrawn(bb))
      }
      resize(bb, wb) {
        var Mb;
        this.size = {
          width: bb,
          height: wb
        }, null === (Mb = this.opened) || void 0 === Mb || Mb.resize(bb, wb)
      }
      close() {
        var bb;
        this.closed = !0, null === (bb = this.opened) || void 0 === bb || bb.close(), this.opened = null
      }
    }
    const Ob = new class {
      constructor() {
        this.host = null, this.makeDefault = null
      }
      setHost(bb) {
        this.host = bb
      }
      setDefaultHost(bb) {
        this.makeDefault = bb
      }
      current() {
        if (null === this.host) {
          if (null === this.makeDefault) throw new Error("no preview host");
          this.host = this.makeDefault()
        }
        return this.host
      }
      openMob(bb) {
        return new Lb(this.current().openMob(bb))
      }
      openPet(bb) {
        return new Lb(this.current().openPet(bb))
      }
      openMobLineup(bb) {
        return new Lb(this.current().openMobLineup(bb))
      }
      sharesCharacter() {
        return !0 === this.current().sharesCharacter
      }
      openCharacter(bb, wb) {
        return new Ib(this.current().openCharacter(bb, wb))
      }
    }
  },
  6105: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => eb.g,
      f: () => Hb,
      h: () => eb.j
    });
    var eb = Mb(6110);
    const Hb = [!1, !0].flatMap((bb => ["terrain", "liquid", "model"].map((wb => ({
      strict: bb,
      program: wb
    })))))
  },
  40569: (bb, wb, Mb) => {
    Mb.r(wb), Mb.d(wb, {
      ShaderPackPage: () => lb,
      harnessShaderPackMode: () => Ub,
      setHarnessUrlShaderPack: () => Ob,
      shaderPackPage: () => Ib
    });
    var eb = Mb(110),
      Hb = Mb(43),
      pb = (Mb(4845), Mb(6105), Mb(4843)),
      Vb = Mb(7848);
    Mb(7819);
    const gb = {
      status: "none"
    };
    class lb {
      constructor() {
        this.stored = null, this.compiling = null, this.pagePack = null, this.resolved = null
      }
      preload() {
        if (null === this.stored) {
          if ((0, pb.j)(eb.featureFlags.settings.canUseShaderPacks)) return this.stored = Promise.resolve(null), Lb().then((bb => {
            bb && Hb.i.removeItem(pb.d)
          })), this.stored;
          this.prefetchHint() && this.compiler().catch((() => {})), this.stored = this.readStored()
        }
        return this.stored
      }
      prefetchHint() {
        return (0, pb.g)(eb.featureFlags.settings.canUseShaderPacks)
      }
      async loadActive() {
        const bb = await this.load();
        return "active" === bb.status ? bb.pack : null
      }
      load() {
        return this.pagePack ??= this.read().catch((bb => (console.error("Failed to load the shader pack", bb), gb))).then((bb => (this.resolved ??= bb, bb))), this.pagePack
      }
      hasNone() {
        var bb;
        return "none" === (null === (bb = this.resolved) || void 0 === bb ? void 0 : bb.status)
      }
      block(bb) {
        this.resolved = {
          status: "blocked",
          messageKey: bb,
          variants: null
        }, this.pagePack = Promise.resolve(this.resolved)
      }
      compiler() {
        return this.compiling ??= Promise.all([Mb.e(91), Mb.e(157), Mb.e(163)]).then((() => Mb(53966))).then((bb => (bb.prefetchCompiler(), bb))), this.compiling
      }
      async readStored() {
        const bb = await Lb();
        return bb && this.compiler().then((bb => bb.reconcileHint())).catch((bb => {
          console.error("Failed to correct the shader pack hint", bb)
        })), bb
      }
      async read() {
        const bb = await this.preload();
        return bb ? (await this.compiler()).compilePagePack(bb) : gb
      }
    }
    async function Lb() {
      if (!(0, pb.l)(eb.featureFlags.settings.canUseShaderPacks)) return null;
      try {
        const bb = await (0, Vb.g)(!0);
        return bb || Hb.i.setItem(pb.d, !1), bb
      } catch (bb) {
        return console.error("Failed to read the stored shader pack", bb), Hb.i.removeItem(pb.d), null
      }
    }
    const Ib = new lb;

    function Ob(bb, wb) {}

    function Ub() {
      return null
    }
  },
  40620: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => Ob,
      g: () => Ub
    });
    var eb = Mb(192),
      Hb = Mb(214),
      pb = Mb(1664),
      Vb = Mb(1987),
      gb = Mb(1677),
      lb = Mb(37751),
      Lb = Mb(715),
      Ib = Mb(40569);

    function Ob(bb) {
      (0, Vb.reportClientError)("matchmake_failed", bb, eb.i[eb.i.SHADER_PACK])
    }
    async function Ub(bb, wb) {
      var Mb;
      const eb = null === (Mb = await Ib.shaderPackPage.preload()) || void 0 === Mb ? void 0 : Mb.listing,
        Vb = (0, lb.b)();
      eb && null !== Vb && await gb.e.reportShaderPackSession(bb, {
        packId: eb.packId,
        sourceHash: eb.sourceHash,
        game: (0, pb.e)(wb, Hb.D, "other"),
        playSessionId: Vb,
        visitSessionId: (0, Lb.getVisitSessionId)()
      })
    }
  },
  7848: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => Hb,
      g: () => pb
    });
    var eb = Mb(43);
    const Hb = "shaderPack";
    async function pb() {
      var bb;
      let wb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (bb = await eb.h.getItem(Hb, wb)) && void 0 !== bb ? bb : null
    }
  },
  7819: (bb, wb, Mb) => {
    Mb.r(wb), Mb.d(wb, {
      loadShaderPackTextures: () => Vb,
      shaderPackTextures: () => gb
    });
    var eb = Mb(6110);
    let Hb = null,
      pb = null;

    function Vb() {
      return pb ??= Promise.all([Mb.e(85), Mb.e(126)]).then((() => Mb(42174))).then((bb => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: wb,
          textureNameToIndex: Mb,
          textureAnimationData: pb
        } = bb;
        return Hb ??= (0, eb.h)(Mb, pb, wb), Hb
      })), pb
    }

    function gb() {
      if (null === Hb) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return Hb
    }
  },
  40357: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => gb
    });
    var eb = Mb(29),
      Hb = Mb(1373),
      pb = Mb(2529);
    const Vb = "Reconnecting";
    class gb {
      constructor(bb) {
        this.hooks = bb, this.graceMs = 0, this.sessionBased = !1, this.controller = void 0, this.frozen = !1, this.stopped = !1, this.listening = !1, this.ended = !1, this.retryNow = () => {
          "visible" === document.visibilityState && this.controller.retryNow()
        }, this.onPageHide = bb => {
          bb.persisted || this.leave()
        }, this.controller = new pb.f((wb => bb.reconnect(wb)), {
          isSessionLive: () => !this.ended && bb.isLive(),
          onPhaseChanged: bb => {
            this.onPhaseChanged(bb)
          },
          onReconnected: wb => {
            bb.onReconnected(wb)
          },
          onGaveUp: wb => {
            !this.ended && bb.isLive() && bb.onGaveUp(this.sessionBased, wb)
          }
        })
      }
      onInitialInfo(bb, wb) {
        this.graceMs = bb, this.sessionBased = wb
      }
      canHoldSeat() {
        return this.graceMs > 0 && !this.ended
      }
      isResuming() {
        return "connected" !== this.controller.phase
      }
      onConnectionLost(bb) {
        this.ended || this.controller.onConnectionLost(bb, this.graceMs)
      }
      onResuming() {
        this.ended || this.controller.onResuming()
      }
      onResumed() {
        this.controller.stop()
      }
      leave() {
        const bb = this.isResuming() && !this.controller.awaitingResumeOnRoom,
          wb = this.controller.heldToken;
        this.end(), bb && "" !== wb && this.hooks.releaseSeat(wb)
      }
      end() {
        this.ended = !0, this.controller.stop()
      }
      onPhaseChanged(bb) {
        const wb = (0, pb.r)(bb);
        wb !== this.stopped && (this.stopped = wb, this.hooks.freeze(wb));
        const Mb = "frozen" === bb || "resuming" === bb && this.frozen;
        Mb && !this.frozen ? (0, Hb.y)(Vb, {
          overridesPause: !0
        }) : !Mb && this.frozen && (0, Hb.w)(Vb), this.frozen = Mb, this.setListening("connected" !== bb), eb.k.iI(pb.q, Mb ? "frozen" : bb)
      }
      setListening(bb) {
        bb !== this.listening && (this.listening = bb, bb ? (window.addEventListener("online", this.retryNow), document.addEventListener("visibilitychange", this.retryNow), window.addEventListener("pagehide", this.onPageHide)) : (window.removeEventListener("online", this.retryNow), document.removeEventListener("visibilitychange", this.retryNow), window.removeEventListener("pagehide", this.onPageHide)))
      }
    }
  },
  40365: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => eb
    });
    class eb {
      constructor(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.onSilent = bb, this.now = wb, this.lastHeardAt = void 0, this.resumedAt = void 0, this.lastCheckAt = void 0, this.wasVisible = "visible" === document.visibilityState, this.interval = void 0, this.check = () => {
          const bb = this.now(),
            wb = bb - this.lastCheckAt <= 2e3;
          this.lastCheckAt = bb;
          const Mb = "visible" === document.visibilityState;
          !Mb || wb && this.wasVisible || (this.resumedAt = bb), this.wasVisible = Mb, Mb && bb - this.lastHeardAt > 12e3 && bb - this.resumedAt > 2e3 && this.onSilent()
        }, this.lastHeardAt = wb(), this.resumedAt = this.lastHeardAt, this.lastCheckAt = this.lastHeardAt, this.interval = setInterval(this.check, 1e3), document.addEventListener("visibilitychange", this.check), window.addEventListener("online", this.check)
      }
      heard() {
        this.lastHeardAt = this.now()
      }
      dispose() {
        clearInterval(this.interval), document.removeEventListener("visibilitychange", this.check), window.removeEventListener("online", this.check)
      }
    }
  },
  35281: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => pb
    });
    var eb = Mb(1400);

    function Hb() {
      var bb, wb;
      return null !== (bb = null === (wb = screen.orientation) || void 0 === wb ? void 0 : wb.type) && void 0 !== bb ? bb : innerWidth > innerHeight ? "landscape" : "portrait"
    }
    const pb = new class {
      constructor() {
        this.holding = !1, this.heldOrientation = "", this.releaseTimer = void 0, this.longHoldTimer = void 0, this.resizers = new Set, this.releaseWhenShown = () => {
          document.hidden || (document.removeEventListener("visibilitychange", this.releaseWhenShown), this.release())
        }
      }
      isHeld() {
        return this.holding && Hb() !== this.heldOrientation && (this.holding = !1), this.holding
      }
      hold() {
        this.heldOrientation = Hb(), this.holding = !0, clearTimeout(this.releaseTimer), document.removeEventListener("visibilitychange", this.releaseWhenShown), clearTimeout(this.longHoldTimer), this.longHoldTimer = setTimeout((() => {
          this.holding && (0, eb.mE)(new Error("Game view size held for 60 s"))
        }), 6e4)
      }
      release() {
        clearTimeout(this.longHoldTimer), this.releaseTimer = setTimeout((() => {
          if (document.hidden) document.addEventListener("visibilitychange", this.releaseWhenShown);
          else {
            this.holding = !1;
            for (const bb of this.resizers) bb()
          }
        }), 1e3)
      }
      heldSizer(bb) {
        let wb = !1;
        return () => {
          if (wb && this.isHeld()) return null;
          const Mb = bb();
          return wb ||= null !== Mb, Mb
        }
      }
      onRelease(bb) {
        return this.resizers.add(bb), () => {
          this.resizers.delete(bb)
        }
      }
    }
  },
  10323: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => pb,
      f: () => Hb
    });
    let eb = Promise.resolve();

    function Hb(bb) {
      eb = bb
    }

    function pb() {
      return eb
    }
  },
  40607: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => Hb
    });
    let eb = !1;
    async function Hb(bb, wb) {
      if (!eb) {
        eb = !0;
        try {
          const [{
            reloadBloxd: eb
          }, {
            NotificationProvider: Hb
          }] = await Promise.all([Promise.resolve().then((() => Mb(1965))), Promise.resolve().then((() => Mb(1504)))]);
          if (!bb || !0 === await Hb.showPromptPopup({
              title: "Unsaved changes",
              subtitle: "Exit and lose your unsaved changes?",
              confirmText: "Exit",
              destructive: !0,
              cancelText: "Cancel",
              unlockPointerKey: "replayExitUnsavedChanges"
            }).getResult()) return void eb(wb)
        } catch (Hb) {
          console.error("Leaving the replay failed", Hb)
        }
        eb = !1
      }
    }
  },
  40372: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => Lb,
      c: () => Ib
    });
    var eb = Mb(1925),
      Hb = Mb(225),
      pb = Mb(1889),
      Vb = Mb(2006),
      gb = Mb(1271),
      lb = Mb(1186);
    async function Lb(bb, wb) {
      return function(bb) {
        return "object" === typeof bb && null !== bb && bb.code === Hb.b.VpnIp.code
      }(wb) && function(bb) {
        return pb.e.supports("appCheck") && bb.isLoggedIn() && !bb.hasTriedAppAttestation()
      }(bb) && await async function(bb) {
        try {
          const {
            token: wb
          } = await (0, Vb.b)(), {
            "3PSIDMCPP": Mb
          } = await (0, lb.postJsonWithMetricsCookiesAndJsonResponse)(`${gb.clientSideServerUrls.indexUrl}/index/app-attestation`, {
            appCheckToken: wb
          }, {
            retries: 0
          }, bb.getMetricsCookies());
          return bb.setAppAttestedAuthJwt(Mb), !0
        } catch (wb) {
          return wb instanceof eb.e && "failed" === wb.code ? (console.warn("The app couldn't get an App Check token:", wb), bb.markAppAttestationTried()) : console.error("Failed to attest the app:", wb), !1
        }
      }(bb)
    }
    async function Ib(bb, wb) {
      try {
        return await wb()
      } catch (Mb) {
        if (!await Lb(bb, Mb)) throw Mb
      }
      return wb()
    }
  },
  42654: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => gb,
      f: () => Lb,
      i: () => lb
    });
    var eb = Mb(1980);
    const Hb = 33177600,
      pb = 3e4;
    let Vb = !1;

    function gb(bb, wb, Mb) {
      let eb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const {
        scale: gb = 1,
        type: lb = "image/png",
        quality: Lb
      } = eb;
      return bb.UO() ? Vb ? Promise.reject(new Error("A screenshot is already being taken")) : (Vb = !0, new Promise(((eb, Ib) => {
        let Ob, Ub = 2,
          tb = null;
        const Cb = () => {
          var wb;
          Vb = !1, null === (wb = tb) || void 0 === wb || wb(), clearTimeout(Ob);
          try {
            bb.restoreSize()
          } catch (Mb) {
            console.error("A screenshot couldn't size the canvas back", Mb)
          }
        };
        Ob = setTimeout((() => {
          Cb(), Ib(new Error("No frame was drawn to capture"))
        }), pb);
        try {
          const eb = function(bb, wb, Mb) {
            const eb = Math.max(1, bb),
              pb = Math.max(1, wb),
              Vb = Math.min(1, Mb / Math.max(eb, pb), Math.sqrt(Hb / (eb * pb)));
            return {
              width: Math.max(1, Math.floor(eb * Vb)),
              height: Math.max(1, Math.floor(pb * Vb))
            }
          }(wb, Mb, bb.maxTextureSize);
          bb.resize(eb.width, eb.height, gb * eb.width / Math.max(1, wb))
        } catch (Eb) {
          return Cb(), void Ib(Eb)
        }
        tb = bb.onFrameDrawn((() => {
          if (Ub--, Ub > 0) return;
          const {
            canvas: wb
          } = bb, Mb = {
            width: wb.width,
            height: wb.height
          };
          try {
            wb.toBlob((bb => {
              bb ? eb({
                blob: bb,
                ...Mb
              }) : Ib(new Error("The canvas gave no image"))
            }), lb, Lb)
          } catch (Eb) {
            Ib(Eb)
          } finally {
            Cb()
          }
        }))
      }))) : Promise.reject(new Error("Screenshots need a game to be running"))
    }

    function lb(bb) {
      return bb.UO() ? new Promise(((wb, Mb) => {
        let eb;
        const Hb = bb.onFrameDrawn((() => {
          Hb(), clearTimeout(eb), createImageBitmap(bb.canvas).then(wb, Mb)
        }));
        eb = setTimeout((() => {
          Hb(), Mb(new Error("No frame was drawn to take"))
        }), pb)
      })) : Promise.reject(new Error("No game is drawing"))
    }
    async function Lb(bb, wb, Mb) {
      try {
        const Hb = await gb(bb, wb, Mb);
        (0, eb.d)(Hb.blob, `bloxd-screenshot-${Hb.width}x${Hb.height}-${Date.now()}.png`)
      } catch (Hb) {
        console.error("Error taking screenshot:", Hb)
      }
    }
  },
  38922: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => eb
    });
    const eb = {
      noaReady: null,
      chunkRequested: null,
      beforeServerListeners: null,
      wasmNetReady: null
    }
  },
  40367: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => Ub,
      d: () => Ib
    });
    var eb = Mb(225),
      Hb = Mb(2023),
      pb = Mb(1280),
      Vb = Mb(10278);
    const gb = [250, 500, 1e3, 2e3, 1250],
      lb = 406;

    function Lb(bb) {
      if ("object" !== typeof bb || null === bb) return !1;
      const {
        code: wb,
        message: Mb
      } = bb, Hb = eb.b.duplicateLobbyNameError;
      return (wb === Hb.code || wb === lb) && (Mb === Hb.text || Mb === Hb.text + eb.g)
    }
    async function Ib(bb, wb) {
      let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Hb.c;
      for (let Hb = 0;; Hb++) {
        let Vb;
        (0, pb.r)(wb);
        try {
          return await bb()
        } catch (eb) {
          if (Vb = gb[Hb], void 0 === Vb || !Lb(eb)) throw eb
        }
        await Mb(Vb, wb)
      }
    }
    const Ob = new Set([eb.b.duplicateLobbyNameError.code, eb.b.lobbyCantBeCreated.code, eb.b.roomDisposedEarlyError.code, eb.b.roomDisposedLateError.code, eb.b.serverRoomLimitReached.code]);

    function Ub(bb) {
      if (Lb(bb)) return !0;
      const wb = (0, Vb.e)(bb);
      return "number" === typeof wb && Ob.has(wb)
    }
  },
  10270: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => Lb,
      e: () => lb
    });
    var eb = Mb(382);

    function Hb(bb) {
      if (!bb.startsWith("{")) return bb;
      let wb;
      try {
        wb = JSON.parse(bb)
      } catch {
        return bb
      }
      return function(bb) {
        if (null === (0, eb.Oe)(bb)) return !1;
        const {
          params: wb
        } = bb;
        return void 0 === wb || "object" === typeof wb && null !== wb && Object.values(wb).every((bb => "string" === typeof bb))
      }(wb) ? wb : bb
    }
    var pb = Mb(1259),
      Vb = Mb(1321);

    function gb(bb) {
      return (0, pb.x)(Vb.g.get().getCurrentLanguageCode(), bb.translationKey, bb.params)
    }

    function lb(bb) {
      const wb = Hb(bb);
      return "string" === typeof wb ? wb : gb(wb)
    }

    function Lb(bb) {
      const wb = Hb(bb);
      return "string" === typeof wb ? wb : gb({
        translationKey: "moderation:kicked",
        params: {
          reason: gb(wb)
        }
      })
    }
  },
  40521: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => Vb
    });
    var eb = Mb(366),
      Hb = Mb(160),
      pb = Mb(43);

    function Vb() {
      pb.i.setItem(eb.Jb, pb.i.getItem(eb.Jb) + 1), (0, Hb.is99NightsCrazyGamesBundle)() && pb.i.setItem(eb.Hb, pb.i.getItem(eb.Hb) + 1)
    }
  },
  37746: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => zb,
      h: () => Xb
    });
    var eb = Mb(1126),
      Hb = Mb(236),
      pb = Mb(375),
      Vb = Mb(667),
      gb = Mb(382),
      lb = Mb(1129),
      Lb = Mb(698),
      Ib = Mb(737),
      Ob = Mb(5371),
      Ub = Mb(110),
      tb = Mb(160),
      Cb = Mb(1965),
      Eb = Mb(126),
      Fb = Mb(37751),
      Bb = Mb(43),
      sb = Mb(715),
      mb = Mb(676),
      hb = Mb(37754);

    function zb() {
      var bb, wb;
      return [...null !== (bb = navigator.languages) && void 0 !== bb ? bb : [null !== (wb = navigator.language) && void 0 !== wb ? wb : "none"], "EN-gb"]
    }

    function Xb(bb, wb, Mb, Xb, xb) {
      const jb = (0, eb.j)(wb) ? (0, eb.o)(wb) : null,
        Kb = bb.isLoggedIn() && void 0 !== (0, Hb.c)(pb.o, tb.siteUsed) ? (0, mb.e)() : null,
        rb = {
          cookies: (0, Cb.getAllCookiesForGameNameWithVariation)(wb),
          isMobile: (0, Ub.isMobile)(),
          isUsingCustomGameTexturePack: null !== jb && xb(jb),
          generalCookies: {
            joinDiscord: !!Bb.i.getItem("DiscordPressed"),
            newGo: Ob.c,
            ...bb.getMetricsCookies(),
            trafficCode: Xb,
            compliance: Ub.compliance
          },
          browserInfo: {
            ua: window.navigator.userAgent,
            name: (0, Ub.getBrowserName)(),
            version: (0, Ub.getBrowserVersion)(),
            platform: navigator.platform,
            platformType: (0, Ub.getPlatformType)(),
            deviceType: (0, Eb.e)()
          },
          isLoggedIn: bb.isLoggedIn(),
          lobbyName: Mb,
          languages: zb(),
          version: Vb.e,
          siteUsed: tb.siteUsed,
          subsiteUsed: tb.subsiteUsed,
          playSessionId: (0, Fb.f)(wb),
          visitSessionId: (0, sb.getVisitSessionId)(),
          clientReason: Lb.A.reason,
          budgetBasis: (0, hb.g)(),
          ...null !== Ib.u && {
            diagClaim: Ib.u.claimId
          },
          ...null !== Kb && {
            webGpuLoss: Kb
          }
        };
      return null !== jb && (0, gb.Rc)(jb) ? (rb.lobbyName = (0, eb.i)(jb, (0, eb.m)(wb), Mb), {
        roomName: `classic_${lb.h}`,
        joinOptions: rb
      }) : {
        roomName: wb,
        joinOptions: rb
      }
    }
  },
  35246: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => pb,
      c: () => Hb
    });
    let eb = null;

    function Hb() {
      eb = performance.now()
    }

    function pb() {
      return eb
    }
  },
  40393: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => tb,
      e: () => Ub
    });
    const eb = "ue:",
      Hb = ["keydown", "keyup", "mousedown", "mouseup", "pointerdown", "pointerup", "touchstart", "touchend"],
      pb = "[A-Za-z0-9]{1,24}",
      Vb = 15,
      gb = new RegExp(`^${pb}$`);
    new RegExp(`^${eb}(${[...Hb,"other"].join("|")}):(?:n|k(${pb})|b(0|[1-9][0-9]?)):([01])([01])$`);

    function lb(bb, wb, Mb, pb, lb) {
      const Lb = "string" === typeof bb && Hb.includes(bb) ? bb : "other";
      let Ib = "n";
      return "string" === typeof wb ? Ib = gb.test(wb) ? `k${wb}` : "n" : "number" === typeof Mb && Number.isInteger(Mb) && Mb >= 0 && Mb <= Vb && (Ib = `b${Mb}`), `${eb}${Lb}:${Ib}:${pb?1:0}${lb?1:0}`
    }
    var Lb = Mb(1864),
      Ib = Mb(1968);
    let Ob = null;

    function Ub(bb) {
      const wb = bb instanceof Element && bb !== document.body && bb !== document.documentElement && !(0, Lb.l)(bb) && !bb.closest("#root");
      return {
        editable: (0, Ib.d)(bb),
        outsideView: wb
      }
    }

    function tb(bb) {
      return Ob ??= function(bb) {
        try {
          const {
            editable: wb,
            outsideView: Mb
          } = Ub(bb.target), eb = bb;
          return lb(bb.type, eb.code, eb.button, wb, Mb)
        } catch {
          return lb(null, null, null, !1, !1)
        }
      }(bb), Ob
    }
  },
  42561: (bb, wb, Mb) => {
    Mb.d(wb, {
      C: () => yb,
      D: () => Jb,
      F: () => cb,
      I: () => Wb,
      M: () => Db,
      Q: () => ib,
      R: () => ab,
      T: () => Zb,
      b: () => ub,
      e: () => Nb,
      g: () => rb,
      j: () => db,
      k: () => Rb,
      m: () => Kb,
      p: () => Sb,
      t: () => Yb,
      x: () => Ab,
      y: () => fb
    });
    var eb = Mb(1549),
      Hb = Mb(29),
      pb = Mb(1373),
      Vb = Mb(3470),
      gb = Mb(5706),
      lb = Mb(5672);
    let Lb, Ib = !1,
      Ob = !1,
      Ub = !1,
      tb = !1;
    const Cb = 1300,
      Eb = 3e3;
    let Fb = 0,
      Bb = !1,
      sb = !1,
      mb = 0;
    const hb = 2;
    let zb = !1,
      Xb = !1;
    const xb = new Set,
      jb = new Set;

    function Kb() {
      return Ib
    }

    function rb() {
      return sb
    }

    function Rb() {
      return Xb
    }

    function Db() {
      return (0, pb.B)() && !Xb
    }

    function cb(bb) {
      let wb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (bb !== Xb) {
        Xb = bb;
        for (const bb of [...jb]) bb(Xb);
        wb && ab()
      }
    }

    function Yb(bb) {
      return jb.add(bb), () => {
        jb.delete(bb)
      }
    }

    function Zb() {
      (0, gb.h)(Vb.y.Menu, (0, pb.B)() ? 0 : Vb.y.Menu)
    }

    function fb() {
      sb = !1, mb = 0, Zb(), ab()
    }

    function Ab(bb) {
      return xb.add(bb), () => {
        xb.delete(bb)
      }
    }

    function Wb(bb) {
      Ob = !1, bb !== Ib && (Ib = bb, tb = !1, clearTimeout(Lb), Ub = !Ib && zb, Ib ? (Bb = !1, sb = !1, mb = 0) : Db() && !zb && (sb = !0), zb = !1, Ib && !Db() && nb(), ob(), Ub && ab())
    }

    function Jb(bb) {
      bb !== Bb && (Bb = bb, bb || ab())
    }

    function Sb() {
      Ob = !1, tb || !0 !== Gb() || (tb = !0, clearTimeout(Lb), Lb = setTimeout(vb, Cb))
    }

    function Nb() {
      return (!Ob || performance.now() - Fb > Eb) && (Ob = (0, lb.O)().lockPointer(), Fb = performance.now()), Ob
    }

    function vb() {
      Qb() && qb() && Nb()
    }

    function Qb() {
      return Db() && !Ib && !Bb && !(0, eb.j)()
    }

    function Gb() {
      var bb;
      return "undefined" === typeof navigator || null === (bb = navigator.userActivation) || void 0 === bb ? void 0 : bb.isActive
    }

    function qb() {
      return Ub && (!navigator.userAgent.includes("Firefox/") || Boolean(document.fullscreenElement)) || !1 !== Gb()
    }

    function ab() {
      Db() ? Qb() && !sb && qb() && Nb() : Ib && !zb && nb()
    }

    function ib() {
      sb ? navigator.vendor.startsWith("Apple") ? Pb() : mb = hb : ab()
    }

    function ub() {
      mb > 0 && 0 === --mb && Pb()
    }

    function db() {
      mb = 0
    }

    function Pb() {
      Qb() && !0 === Gb() && Nb()
    }

    function nb() {
      zb = !0, (0, lb.O)().unlockPointer()
    }

    function yb() {
      Ob = !1, Ub = !1, tb = !1, clearTimeout(Lb), Bb = !1, sb = !1, mb = 0, zb = !1;
      const bb = Ib;
      Ib = !1, bb && ob()
    }

    function ob() {
      for (const bb of [...xb]) bb(Ib);
      Hb.k.iI("pointerLockUpdate", Ib)
    }
  },
  42535: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => Ub,
      e: () => gb,
      i: () => Ob,
      m: () => Lb,
      o: () => Vb,
      p: () => Ib,
      s: () => lb
    });
    let eb = null,
      Hb = null,
      pb = null;

    function Vb(bb) {
      eb = bb
    }

    function gb() {
      return eb
    }

    function lb(bb) {
      Hb = bb
    }

    function Lb() {
      return Hb
    }

    function Ib(bb) {
      pb = bb
    }

    function Ob() {
      return pb
    }

    function Ub() {
      var bb, wb;
      return !0 === (null === (bb = Hb) || void 0 === bb || null === (wb = bb.currentViewer) || void 0 === wb ? void 0 : wb.inPlayback)
    }
  },
  42324: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => lb
    });
    var eb = Mb(41112),
      Hb = Mb(38019);

    function pb(bb) {
      return {
        current: () => bb,
        watch: () => () => {}
      }
    }

    function Vb() {}
    const gb = Object.freeze([0, 0, 0]),
      lb = {
        states: {
          health: pb({
            health: null,
            maxHealth: null,
            shield: null,
            maxShield: null
          }),
          inventory: pb({
            player: [],
            chestOrCreative: [],
            chest: null,
            creative: !1,
            selectedSlot: 0,
            freeSlots: 0
          }),
          hotbar: pb({
            items: [],
            ammo: 0,
            selectedSlot: null
          }),
          stationItems: pb({
            enchantable: {},
            salvageable: {}
          }),
          itemInfo: pb({}),
          creativeVisibility: pb({
            publicLobby: !1,
            shownInGame: {}
          }),
          aura: pb(null),
          heldItemAim: pb({
            gun: !1,
            aimable: !1,
            chargeName: null
          }),
          crouching: pb(!1),
          gliderBoostFuel: pb(0),
          flight: pb({
            canFly: !1,
            flying: !1
          }),
          crafting: pb({
            focus: null,
            recipes: [],
            detail: null
          }),
          players: pb({
            ids: [],
            byId: {},
            localId: null
          }),
          lobbyLeaderboardRows: pb({}),
          fullInventory: pb(!1),
          crosshairTarget: pb({
            interactPrompt: null,
            blockText: null,
            neededTool: null
          }),
          localPlayerAlive: pb(!0),
          freeCamera: pb({
            allowed: !1,
            movesFly: !1
          }),
          replay: pb(null),
          replayEdits: pb(null),
          replayRecorder: pb(Hb.c),
          replayVideoExporting: pb(!1)
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
          selectHotbarSlot: Vb,
          removeInventoryItem: () => !1,
          swapInventorySlots: () => !1,
          moveInventoryItem: () => !1,
          quickMoveInventoryItem: () => null,
          closeChest: Vb,
          setInventoryOpen: Vb,
          changeIronChestPasskey: Vb,
          dragReplayCamera: Vb,
          applyTemporaryThirdPerson: Vb,
          holdEmoteWheel: Vb,
          recordFlyingMiddleText: Vb,
          focusCrafting: Vb,
          craftRecipe: () => ({
            Bg: 0,
            aI: null,
            amountAddedToSlot: 0
          }),
          salvageItem: () => !1,
          enchantItem: Vb,
          setShopOpen: Vb,
          buyShopItem: Vb,
          lobbyManage: Vb,
          sendChatMessage: () => !1,
          ignorePlayer: Vb,
          reportPlayer: Vb,
          reportWorldCodeChat: Vb,
          requestDiscordReportKey: Vb,
          reportLobbyOrGame: Vb,
          playEmote: Vb,
          updateMyCosmetic: Vb,
          writeOnBoard: Vb,
          writeBook: Vb,
          writeNameTag: Vb,
          setCustomLobbyBlock: Vb,
          openIronChest: Vb,
          sendCodeCollab: Vb,
          clickCodeBlock: Vb,
          bindCustomButtonKeys: Vb,
          pressCustomButton: Vb,
          moveReplayFreecam: Vb,
          holdReplayFreecamVertical: Vb,
          respawn: Vb,
          wakeUp: Vb,
          requestLeaderboard: Vb,
          completeTask: Vb,
          setServerCookie: Vb,
          answerUiRequest: Vb,
          chooseRewardedAd: Vb,
          setCameraZoom: Vb,
          setFreeCameraMovesFly: Vb,
          setBlockHighlight: Vb,
          setCrosshairInteractPrompt: Vb,
          setLookSensitivity: Vb,
          replayAction: Vb,
          setReplayPlaying: Vb,
          seekReplay: Vb,
          setReplayCameraMode: Vb,
          syncReplayCameraMode: Vb,
          setReplayCameraKeyframe: Vb,
          moveReplayCameraKeyframe: Vb,
          deleteReplayCameraKeyframes: Vb,
          setReplayPlaybackMark: Vb,
          cropReplay: () => !1,
          holdReplayForShaderPackFailure: Vb,
          exportReplayVideo: Vb,
          toggleRecording: Vb,
          saveClip: Vb,
          setRecorderPrefs: Vb,
          setReplayViewerOpen: Vb
        },
        queries: {
          enchantingOffer: () => ({
            perks: [],
            options: []
          }),
          worldCodeAiChunk: () => eb.d,
          worldCodeAiGameState: () => eb.e
        },
        lookups: {
          localPos: () => gb,
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
  42330: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => Vb,
      e: () => pb,
      i: () => Hb
    });
    let eb = null;

    function Hb(bb) {
      eb = bb
    }

    function pb(bb) {
      eb === bb && (eb = null)
    }

    function Vb() {
      var bb;
      null === (bb = eb) || void 0 === bb || bb()
    }
  },
  37892: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => Ib,
      c: () => Ub,
      g: () => Bb,
      k: () => Lb
    });
    var eb = Mb(26),
      Hb = Mb(3470),
      pb = Mb(3479),
      Vb = Mb(3487),
      gb = Mb(3642),
      lb = Mb(29);

    function Lb(bb, wb) {
      return (!(0, Vb.e)() || 0 === bb && 0 === wb) && (0, pb.q)(Hb.h.Joystick, 0, bb, wb, 0)
    }
    const Ib = {
      Action1: 1,
      Action2: 2,
      Action3: 3,
      Attack: 4,
      Use: 5,
      Interact: 6,
      Boost: 7
    };

    function Ob(bb) {
      return bb.classList.contains("TouchKeyHit") && tb() ? null : bb.firstElementChild
    }

    function Ub(bb) {
      return bb.classList.contains("TouchKeyHit") && !bb.classList.contains("CanvasZone") ? {
        whole: !tb(),
        keyBox: null
      } : {
        whole: !1,
        keyBox: Cb(Ob(bb))
      }
    }

    function tb() {
      return document.documentElement.classList.contains(gb.j)
    }

    function Cb(bb) {
      return !(bb instanceof HTMLElement) || bb.offsetWidth <= 0 || bb.offsetHeight <= 0 ? null : {
        width: bb.offsetWidth,
        height: bb.offsetHeight
      }
    }

    function Eb(bb, wb) {
      const Mb = bb => Math.min(65535, Math.round(4 * bb));
      return (Mb(bb) | Mb(wb) << 16) >>> 0
    }

    function Fb(bb) {
      return {
        x: bb.left + bb.width / 2,
        y: bb.top + bb.height / 2,
        radius: Math.min(bb.width, bb.height) / 2
      }
    }
    const Bb = new class {
      constructor(bb) {
        this.write = bb, this.elements = new Map, this.canvasLeft = 0, this.canvasTop = 0
      }
      set(bb, wb) {
        let Mb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        wb ? this.elements.set(bb, {
          element: wb,
          hidden: Mb
        }) : this.elements.delete(bb), this.measureOne(bb)
      }
      measure() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
          left: this.canvasLeft,
          top: this.canvasTop
        };
        this.canvasLeft = bb.left, this.canvasTop = bb.top;
        for (const wb of this.elements.keys()) this.measureOne(wb)
      }
      hitZone(bb, wb) {
        let Mb = null,
          eb = 1;
        for (const Hb of this.elements.keys()) {
          const pb = this.shown(Hb);
          if (!pb) continue;
          const {
            rect: Vb,
            element: gb
          } = pb, lb = Fb(Vb), Lb = Math.max(0, Vb.width / 2 - lb.radius), Ib = Math.max(0, Vb.height / 2 - lb.radius), Ub = Math.max(0, Math.abs(bb - lb.x) - Lb), tb = Math.max(0, Math.abs(wb - lb.y) - Ib), Eb = gb.firstElementChild;
          let Bb = Math.hypot(Ub, tb) / lb.radius;
          const sb = Cb(Ob(gb));
          sb && (Bb = Math.min(Bb, Math.max(2 * Math.abs(bb - lb.x) / sb.width, 2 * Math.abs(wb - lb.y) / sb.height))), Bb < eb && (Mb = {
            code: Hb,
            element: gb,
            key: Eb,
            ...lb
          }, eb = Bb)
        }
        return Mb
      }
      measureOne(bb) {
        const wb = this.shown(bb);
        if (!wb) return void this.write(Hb.h.TouchZone, bb, 0, 0, 0);
        const {
          rect: Mb,
          element: eb
        } = wb, pb = Fb(Mb);
        this.write(Hb.h.TouchZone, bb, pb.x - this.canvasLeft, pb.y - this.canvasTop, Eb(Mb.width, Mb.height));
        const Vb = Cb(Ob(eb));
        this.write(Hb.h.TouchZone, 256 | bb, 0, 0, Vb ? Eb(Vb.width, Vb.height) : 0)
      }
      shown(bb) {
        const wb = this.elements.get(bb),
          Mb = eb.c.get("worldPanelHud");
        if (!wb || wb.hidden || "none" === Mb) return null;
        const Hb = wb.element.getBoundingClientRect();
        return Hb.width <= 0 || Hb.height <= 0 ? null : {
          rect: Hb,
          element: wb.element
        }
      }
    }(pb.q);
    (0, lb.o)(gb.e, (() => {
      Bb.measure()
    }))
  },
  42538: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => lb,
      g: () => Lb
    });
    var eb = Mb(42545),
      Hb = Mb(40372),
      pb = Mb(37746),
      Vb = Mb(42422),
      gb = Mb(42475);
    const lb = eb.b.timeForPlayerToConnect - 1e4;
    async function Lb(bb, wb, Mb, eb) {
      let lb;
      try {
        lb = await bb.getTrafficCode()
      } catch (Cb) {
        throw console.error("[bloxd-wasm-client] could not get a traffic code", Cb), new gb.w(Cb)
      }
      const {
        gameNameWithVariation: Lb,
        lobbyName: Ib
      } = wb, Ob = () => {
        const wb = (0, pb.h)(bb, Lb, Ib, lb, (bb => {
          var wb;
          return null !== (wb = null === Mb || void 0 === Mb ? void 0 : Mb.isUsingCustomGameTexturePack(bb)) && void 0 !== wb && wb
        }));
        wb.joinOptions.wasmClient = !0;
        const Hb = (0, Vb.D)();
        return null !== Hb && (wb.joinOptions.renderBackend = Hb), wb.joinOptions.joinAdHold = eb, wb
      }, {
        roomName: Ub,
        joinOptions: tb
      } = Ob();
      return {
        endpoint: wb.endpoint,
        roomName: Ub,
        joinOptions: tb,
        session: {
          gameNameWithVariation: Lb,
          lobbyName: Ib,
          playerDbId: bb.whamm
        },
        optionsAfterRefusal: async wb => await (0, Hb.b)(bb, wb) ? Ob().joinOptions : null
      }
    }
  },
  6129: (bb, wb, Mb) => {
    function eb(bb, wb) {
      return Hb(bb, wb)
    }

    function Hb(bb, wb) {
      if (bb === wb) return !0;
      if ("object" !== typeof bb || "object" !== typeof wb || null === bb || null === wb || Array.isArray(bb) !== Array.isArray(wb)) return !1;
      const Mb = bb,
        eb = wb,
        pb = Object.keys(Mb);
      return pb.length === Object.keys(eb).length && pb.every((bb => Object.prototype.hasOwnProperty.call(eb, bb) && Hb(Mb[bb], eb[bb])))
    }
    Mb.d(wb, {
      c: () => eb
    })
  },
  42598: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => Xb,
      f: () => hb,
      g: () => Eb,
      i: () => Cb
    });
    var eb = Mb(2023),
      Hb = Mb(1280),
      pb = Mb(40367),
      Vb = Mb(37772),
      gb = Mb(40386),
      lb = Mb(42475);
    const Lb = {
        "X-Requested-With": "XMLHtttpRequest"
      },
      Ib = 3,
      Ob = [500, 1500];

    function Ub(bb) {
      const wb = new URL(bb);
      return {
        secure: "https:" === wb.protocol || "wss:" === wb.protocol,
        host: wb.host,
        pathname: wb.pathname.replace(/\/+$/, ""),
        search: wb.searchParams.toString()
      }
    }

    function tb(bb, wb, Mb) {
      const {
        secure: eb,
        host: Hb,
        pathname: pb,
        search: Vb
      } = Ub(bb);
      return `${eb?"https":"http"}://${Hb}${pb}/matchmake/${wb}/${encodeURIComponent(Mb)}${Vb?`?${Vb}`:""}`
    }

    function Cb(bb, wb) {
      var Mb;
      const eb = null !== (Mb = wb.protocol) && void 0 !== Mb ? Mb : "ws";
      if ("ws" !== eb) throw new Error(`seat reservation asks for the ${eb} transport`);
      const {
        secure: Hb,
        host: pb,
        pathname: Vb,
        search: gb
      } = Ub(bb), lb = new URLSearchParams(gb);
      lb.append("sessionId", wb.sessionId), wb.reconnectionToken && lb.append("reconnectionToken", wb.reconnectionToken);
      return `${Hb?"wss":"ws"}://${wb.room.publicAddress||`${pb}${Vb}`}/${wb.room.processId}/${wb.room.roomId}?${lb.toString()}`
    }
    async function Eb(bb, wb, Mb) {
      var gb;
      let Lb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const Ub = null !== (gb = Lb.sleep) && void 0 !== gb ? gb : eb.c,
        Cb = new Hb.e(Lb.signal),
        Eb = new Vb.b((() => {
          (0, Hb.l)(Cb.controller, new Vb.e("seat"))
        })),
        {
          signal: mb
        } = Cb;
      try {
        const eb = await (0, pb.d)((() => async function(bb, wb, Mb, eb) {
          var pb;
          const {
            signal: Vb,
            sleep: gb
          } = eb, Lb = tb(bb, "joinOrCreate", wb), Ub = JSON.stringify(Mb);
          let Cb = null;
          for (let tb = 0; tb < Ib; tb++) {
            var Eb;
            if (tb > 0) await gb(null !== (Eb = Ob[tb - 1]) && void 0 !== Eb ? Eb : 1500, Vb);
            let bb;
            (0, Hb.r)(Vb);
            try {
              bb = await Bb(Lb, Ub, eb)
            } catch (mb) {
              (0, Hb.r)(Vb), Cb = Fb(mb);
              continue
            }
            const {
              response: wb,
              answer: Mb,
              refusal: pb,
              lost: Ib
            } = bb;
            if (null === Ib) {
              if (null !== pb) throw sb(pb, Mb);
              if (wb.ok && null !== Mb && xb(Mb)) return Mb;
              Cb = new lb.s(`seat request answered HTTP ${wb.status}${null===Mb?" without JSON":" without a seat"}`, !1, void 0, wb.status)
            } else Cb = Fb(Ib.error)
          }
          throw null !== (pb = Cb) && void 0 !== pb ? pb : new lb.s("seat request made no attempt", !1)
        }(bb, wb, Mb, {
          ...Lb,
          signal: mb,
          sleep: Ub
        })), mb, Ub);
        return Eb.answered(), eb
      } finally {
        Eb.stop(), Cb.unfollow()
      }
    }

    function Fb(bb) {
      return new lb.s(bb instanceof Error ? bb.message : String(bb), !0, bb)
    }
    async function Bb(bb, wb, Mb) {
      var eb;
      const {
        signal: pb
      } = Mb, Vb = null !== (eb = Mb.fetch) && void 0 !== eb ? eb : fetch, gb = await Vb(bb, {
        method: "POST",
        headers: {
          ...Lb,
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: wb,
        credentials: "include",
        signal: pb
      }), {
        answer: lb,
        lost: Ib
      } = await async function(bb) {
        try {
          const wb = await bb.json();
          return {
            answer: "object" === typeof wb && null !== wb ? wb : null,
            lost: null
          }
        } catch (wb) {
          return {
            answer: null,
            lost: wb instanceof SyntaxError ? null : {
              error: wb
            }
          }
        }
      }(gb), Ob = null !== lb && "string" === typeof lb.error ? lb.error : null;
      var Ub;
      null !== Ob && (null === (Ub = Mb.onRefusal) || void 0 === Ub || Ub.call(Mb));
      return (0, Hb.r)(pb), {
        response: gb,
        answer: lb,
        refusal: Ob,
        lost: Ib
      }
    }

    function sb(bb, wb) {
      return new lb.k(bb, "number" === typeof(null === wb || void 0 === wb ? void 0 : wb.code) ? wb.code : 0, (0, gb.m)(bb).text)
    }
    class mb extends Error {
      constructor(bb, wb) {
        super(bb), this.code = wb, this.name = "SeatHttpError"
      }
    }
    async function hb(bb, wb, Mb) {
      let eb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const {
        response: Hb,
        answer: pb,
        refusal: Vb,
        lost: gb
      } = await Bb(tb(bb, "reconnect", wb), JSON.stringify({
        reconnectionToken: Mb
      }), eb);
      if (null !== gb) throw gb.error;
      if (!Hb.ok) {
        const bb = null !== pb && "number" === typeof pb.code && 0 !== pb.code ? pb.code : Hb.status;
        throw new mb(`the seat's reconnect was refused: ${null!==Vb&&void 0!==Vb?Vb:`HTTP ${Hb.status}`}`, bb)
      }
      if (null !== Vb) throw sb(Vb, pb);
      if (null === pb || !xb(pb)) throw new Error("the seat's reconnect answered " + (null === pb ? "without JSON" : "without a seat"));
      return {
        ...pb,
        reconnectionToken: Mb
      }
    }
    const zb = 10;

    function Xb(bb) {
      if (bb.byteLength < 2 || bb[0] !== zb) return null;
      const wb = 2 + bb[1];
      return wb > bb.byteLength ? null : (new TextDecoder).decode(bb.subarray(2, wb))
    }

    function xb(bb) {
      const wb = bb.room;
      return "string" === typeof bb.sessionId && "object" === typeof wb && null !== wb && "string" === typeof wb.roomId && "string" === typeof wb.processId && "string" === typeof wb.name
    }
  },
  42266: (bb, wb, Mb) => {
    Mb.d(wb, {
      A: () => xb,
      E: () => cb,
      H: () => hb,
      J: () => zb,
      K: () => Fb,
      L: () => rb,
      N: () => Zb,
      Q: () => Cb,
      U: () => Ab,
      X: () => sb,
      Z: () => Bb,
      bb: () => mb,
      c: () => Hb,
      db: () => Xb,
      f: () => fb,
      g: () => Yb,
      i: () => tb,
      l: () => Eb,
      o: () => Db,
      r: () => jb,
      u: () => Rb,
      x: () => Kb
    });
    var eb = Mb(3037);
    const Hb = {
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

    function pb(bb, wb) {
      return !ArrayBuffer.isView(bb) || bb instanceof DataView ? Array.isArray(bb) ? bb.map((bb => wb(bb))) : bb : Array.from(bb, (bb => wb(bb)))
    }

    function Vb(bb) {
      if ("string" !== typeof bb) return bb;
      for (let wb = 0; wb < bb.length; wb++) {
        const Mb = bb.charCodeAt(wb);
        if (Mb >= 55296 && Mb <= 57343) return lb.decode(gb.encode(bb))
      }
      return bb
    }
    const gb = new TextEncoder,
      lb = new TextDecoder;

    function Lb(bb) {
      return bb
    }
    let Ib;

    function Ob(bb) {
      return null === bb || "object" !== typeof bb ? bb : [Vb(bb.policy), Vb(bb.Ig)]
    }

    function Ub(bb) {
      return null === bb || "object" !== typeof bb ? bb : [pb(bb.aH, Lb), pb(bb.kg, Lb)]
    }

    function tb(bb) {
      return null === (wb = bb) || "object" !== typeof wb ? wb : [Vb(wb.tV), Vb(wb.CV)];
      var wb
    }

    function Cb(bb) {
      return null === (wb = bb) || "object" !== typeof wb ? wb : [wb.id, wb.eI];
      var wb
    }

    function Eb(bb) {
      return null === (wb = bb) || "object" !== typeof wb ? wb : [wb.DM, Vb(wb.cM), wb.YM, Vb(wb.AM), wb.NM, wb.vM, wb.LV, Vb(wb.IV), Vb(wb.OV)];
      var wb
    }

    function Fb(bb) {
      return null === (wb = bb) || "object" !== typeof wb ? wb : [pb(wb.lg, Lb), wb.Lg];
      var wb
    }

    function Bb(bb) {
      return null === (wb = bb) || "object" !== typeof wb ? wb : [pb(wb.OI, (bb => Vb(bb))), Vb(wb.UI), wb.tI];
      var wb
    }

    function sb(bb) {
      return null === (wb = bb) || "object" !== typeof wb ? wb : [pb(wb.Ml, Lb), Vb(wb.el), Vb(wb.Hl), wb.pl];
      var wb
    }

    function mb(bb) {
      return null === (wb = bb) || "object" !== typeof wb ? wb : [Vb(wb.gH), Vb(wb.lH)];
      var wb
    }

    function hb(bb) {
      return null === (wb = bb) || "object" !== typeof wb ? wb : [Vb(wb.Og)];
      var wb
    }

    function zb(bb) {
      return Vb(bb)
    }

    function Xb(bb) {
      return null === (wb = bb) || "object" !== typeof wb ? wb : [Vb(wb.RI), Vb(wb.DI), Vb(wb.policy), Vb(wb.Ig), pb(wb.cI, (bb => Vb(bb)))];
      var wb
    }

    function xb(bb) {
      return Ob(bb)
    }

    function jb(bb) {
      return Ob(bb)
    }

    function Kb(bb) {
      return null === (wb = bb) || "object" !== typeof wb ? wb : [Vb(wb.bI)];
      var wb
    }

    function rb(bb) {
      return bb
    }

    function Rb(bb) {
      return null === (wb = bb) || "object" !== typeof wb ? wb : [Vb(wb.LI), Vb(wb.II)];
      var wb
    }

    function Db(bb) {
      return Vb(bb)
    }

    function cb(bb) {
      return Ub(bb)
    }

    function Yb(bb) {
      return Ub(bb)
    }

    function Zb(bb) {
      return null === (wb = bb) || "object" !== typeof wb ? wb : [Vb(wb.dL)];
      var wb
    }

    function fb(bb) {
      return (Ib ??= (0, eb.g)().map((bb => bb.name)), Ib).map((wb => {
        return "string" === typeof(Mb = bb[wb]) ? Vb(Mb) : pb(Mb, Lb);
        var Mb
      }))
    }

    function Ab(bb) {
      return null === (wb = bb) || "object" !== typeof wb ? wb : [wb.mV, wb.hV, wb.zV];
      var wb
    }
  },
  6123: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => Vb,
      i: () => gb
    });
    var eb = Mb(2380),
      Hb = Mb(6129);
    let pb = null;

    function Vb(bb) {
      pb = {
        pack: bb.metaData.id === eb.d ? null : bb
      }
    }

    function gb(bb) {
      return !(null === pb || !(0, Hb.c)(pb.pack, bb)) && (pb = null, !0)
    }
  },
  42531: (bb, wb, Mb) => {
    Mb.r(wb), Mb.d(wb, {
      followPageUiPack: () => SO,
      packForGame: () => JO,
      playWasmGame: () => yO,
      prefetchWasmPreviews: () => xL,
      setGamePackConfirm: () => GI,
      startWasmPlay: () => qO,
      startWasmPreviews: () => XL
    });
    var eb = Mb(225),
      Hb = Mb(1319),
      pb = Mb(192),
      Vb = Mb(40397),
      gb = Mb(2142),
      lb = Mb(29),
      Lb = Mb(5564),
      Ib = Mb(1436),
      Ob = Mb(1934),
      Ub = Mb(1447),
      tb = Mb(40607),
      Cb = Mb(1391),
      Eb = Mb(10323),
      Fb = Mb(214),
      Bb = Mb(4137),
      sb = Mb(2016),
      mb = Mb(4175);
    let hb = null,
      zb = null,
      Xb = null,
      xb = !1,
      jb = "previews",
      Kb = null,
      rb = !1,
      Rb = 0;

    function Db(bb) {
      jb = bb
    }

    function cb(bb) {
      var wb;
      const Mb = bb instanceof Error ? bb.name : null;
      return null !== (wb = Fb.e.find((bb => bb === Mb))) && void 0 !== wb ? wb : "other"
    }

    function Yb() {
      hb ??= performance.now()
    }

    function Zb(bb) {
      zb ??= performance.now(), Kb = bb, Rb > 0 && fb()
    }

    function fb() {
      null !== zb && null !== Kb && (0, Cb.v)("wasm_loaded", zb, `${Kb}:${(0,Bb.n)()}`)
    }
    const Ab = {
      ready: () => {
        sb.c.markAdmissionAwaited()
      },
      adEnded: () => {
        sb.c.markJoinAdEnded()
      },
      admitted: () => {
        sb.c.markAdmitted()
      }
    };
    var Wb = Mb(40620),
      Jb = Mb(40521),
      Sb = Mb(37751),
      Nb = Mb(1677),
      vb = Mb(40367),
      Qb = Mb(10278),
      Gb = Mb(37772),
      qb = Mb(42535),
      ab = Mb(5672),
      ib = Mb(42263),
      ub = Mb(42324),
      db = Mb(42266);
    const Pb = {
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

    function nb(bb) {
      const wb = {
        ...ub.e[bb]
      };
      for (const Mb of Object.keys(Pb[bb])) delete wb[Mb];
      return wb
    }

    function yb() {
      var bb, wb;
      return null === (bb = null === (wb = (0, ib.m)()) || void 0 === wb ? void 0 : wb.localPlayerAlive()) || void 0 === bb || bb
    }

    function ob() {
      var bb, wb;
      return null !== (bb = null === (wb = (0, ib.m)()) || void 0 === wb ? void 0 : wb.localDeaths()) && void 0 !== bb ? bb : null
    }
    const Tb = {
        current: yb,
        watch: bb => {
          let wb = yb(),
            Mb = ob();
          return (0, ab.x)((() => {
            const eb = yb(),
              Hb = ob(),
              pb = null !== Hb && null !== Mb && Hb !== Mb;
            Mb = Hb, pb ? (wb || bb(!0), bb(!1), eb && bb(!0), wb = eb) : eb !== wb && (wb = eb, bb(eb))
          }))
        }
      },
      kb = {
        states: {
          ...nb("states"),
          localPlayerAlive: Tb
        },
        events: {
          ...nb("events"),
          localPlayerAliveSet: {
            watch: Tb.watch
          }
        },
        commands: {
          ...nb("commands"),
          respawn: () => {
            var bb;
            null === (bb = (0, ib.m)()) || void 0 === bb || bb.respawn()
          },
          playEmote: bb => {
            var wb;
            null === (wb = (0, ib.m)()) || void 0 === wb || wb.send(db.c.PlayEmote, (0, db.H)({
              Og: bb
            }))
          },
          applyTemporaryThirdPerson: bb => {
            var wb;
            let {
              durationMs: Mb
            } = bb;
            null === (wb = (0, ib.m)()) || void 0 === wb || wb.thirdPersonFor(Mb)
          },
          bindCustomButtonKeys: bb => {
            var wb;
            null === (wb = (0, ib.m)()) || void 0 === wb || wb.bindCustomButtonKeys(bb)
          },
          pressCustomButton: bb => {
            var wb;
            let {
              id: Mb,
              down: eb
            } = bb;
            null === (wb = (0, ib.m)()) || void 0 === wb || wb.pressCustomButton(Mb, eb)
          },
          setLookSensitivity: () => {},
          wakeUp: bb => {
            const wb = (0, db.N)({
                dL: bb
              }),
              Mb = () => {
                const bb = (0, ib.m)();
                return !(null !== bb && void 0 !== bb && bb.isSessionLive) || bb.send(db.c.StopSleeping, wb)
              };
            if (!Mb()) {
              const bb = (0, ab.x)((() => {
                Mb() && bb()
              }))
            }
          },
          setCameraZoom: bb => {
            var wb;
            null === (wb = (0, ib.m)()) || void 0 === wb || wb.setCameraZoom(bb)
          }
        },
        queries: nb("queries"),
        lookups: {
          ...nb("lookups"),
          cameraZoom: () => {
            var bb, wb;
            return null !== (bb = null === (wb = (0, ib.m)()) || void 0 === wb ? void 0 : wb.cameraZoom()) && void 0 !== bb ? bb : 0
          }
        }
      };
    var bw = Mb(40386),
      ww = Mb(42475),
      Mw = Mb(42481),
      ew = Mb(42538),
      Hw = Mb(1325),
      pw = Mb(122),
      Vw = Mb(5371),
      gw = Mb(2510),
      lw = Mb(1233);
    const Lw = {
      Sg: () => (0, Hw.f)(),
      inbuiltOverwritten: () => Vw.d,
      reflectApplyHit: () => lw.b,
      definerHit: () => pw.currentUrl.c,
      emitReplaced: () => (0, lb.d)(),
      confirmMesh: () => (0, gw.d)(),
      confirmMeshHitStack: () => (0, gw.f)()
    };
    var Iw = Mb(42486),
      Ow = Mb(42554);
    var Uw = Mb(26),
      tw = Mb(2146),
      Cw = Mb(2194),
      Ew = Mb(1827),
      Fw = Mb(2220),
      Bw = Mb(1259),
      sw = Mb(1321),
      mw = Mb(37544);

    function hw() {
      return sw.g.get().getCurrentLanguageCode()
    }

    function zw(bb) {
      const wb = () => {
        bb({
          translate: (bb, wb) => (0, Bw.t)(hw(), bb, wb),
          keyBindingText: bb => {
            const wb = (0, Cw.o)(bb, Uw.c.get("isTouchScreen"));
            return null !== wb ? (0, Bw.x)(hw(), wb.translationKey, wb.params) : (0, Cw.m)((0, Cw.n)(bb))
          },
          isFriend: Fw.f,
          hiddenNames: tw.d.shown,
          loadsFontRest: (0, mw.b)(hw())
        })
      };
      let Mb = !1;
      const eb = () => {
          const bb = hw();
          (0, Bw.k)(bb).then((() => {
            Mb || bb !== hw() || wb()
          }))
        },
        Hb = () => Ew.e.getSocialState().friends.map((bb => bb.name.toLowerCase())).sort().join(" ");
      let pb = Hb();
      wb(), eb();
      const Vb = [(0, sw.h)((() => {
        wb(), eb()
      })), (0, lb.o)("customBindingsChanged", wb), (0, lb.o)("appManagerUpdated|isTouchScreen", wb), (0, Fw.c)((() => {
        const bb = Hb();
        bb !== pb && (pb = bb, wb())
      })), tw.d.subscribe(wb)];
      return () => {
        Mb = !0;
        for (const bb of Vb) bb()
      }
    }
    var Xw = Mb(1266),
      xw = Mb(5294),
      jw = Mb(38062);
    const Kw = {
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
      wasmScreens: Xw.wasmScreens
    };
    let rw = null;

    function Rw(bb) {
      let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return null === rw ? function(bb) {
        var wb, Mb;
        let eb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const [Hb, pb] = bb.split(":"), Vb = null !== (wb = null === (Mb = Kw[Hb]) || void 0 === Mb ? void 0 : Mb[pb]) && void 0 !== wb ? wb : bb;
        return Vb.replace(/\{\{(\w+)\}\}/g, ((bb, wb) => {
          var Mb;
          return null !== (Mb = eb[wb]) && void 0 !== Mb ? Mb : bb
        }))
      }(bb, wb) : rw(bb, wb)
    }

    function Dw(bb, wb) {
      (0, xw.c)();
      const Mb = document.createElement("div");
      Mb.setAttribute("role", "alertdialog"), Mb.style.cssText = "position:fixed;top:0;right:0;bottom:0;left:0;z-index:100;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,0.7);font:16px sans-serif;color:#fff";
      const eb = document.createElement("div");
      eb.style.cssText = "max-width:28rem;padding:1.5rem;background:#1c2333;text-align:center";
      const Hb = document.createElement("h2");
      Hb.textContent = Rw(bb.title);
      const pb = document.createElement("p");
      if (pb.textContent = Rw(bb.help, bb.helpValues), pb.style.whiteSpace = "pre-line", eb.append(Hb, pb), bb.discordLink) {
        const bb = document.createElement("a");
        bb.href = jw.b, bb.target = "_blank", bb.rel = "noreferrer", bb.style.color = "#8ab4ff", bb.textContent = Rw("wasmScreens:reportOnDiscord"), eb.append(bb)
      }
      const Vb = document.createElement("div");
      return Vb.style.cssText = "display:flex;gap:1rem;justify-content:center;margin-top:1.5rem", eb.append(Vb), Mb.append(eb), document.body.append(Mb), new Promise((eb => {
        const Hb = bb => {
            null === wb || void 0 === wb || wb.removeEventListener("abort", pb), Mb.remove(), eb(bb)
          },
          pb = () => {
            Hb(!1)
          };
        null === wb || void 0 === wb || wb.addEventListener("abort", pb, {
          once: !0
        });
        const gb = (bb, wb) => {
          const Mb = document.createElement("button");
          Mb.textContent = Rw(bb), Mb.style.cssText = "padding:0.5rem 1.25rem;font:inherit", Mb.addEventListener("click", (() => {
            Hb(wb)
          })), Vb.append(Mb)
        };
        null !== bb.cancel && gb(bb.cancel, !1), gb(bb.confirm, !0)
      }))
    }
    var Yw = Mb(10270),
      Zw = Mb(667),
      fw = Mb(1126),
      Aw = Mb(2173),
      Ww = Mb(366),
      Jw = Mb(2463),
      Sw = Mb(37435),
      Nw = Mb(2471),
      vw = Mb(40026),
      Qw = Mb(5587),
      Gw = Mb(42353),
      qw = Mb(737),
      aw = Mb(698),
      iw = Mb(729),
      uw = Mb(4194),
      dw = Mb(2167),
      Pw = Mb(2512),
      nw = Mb(4653);
    let yw = null;
    var ow = Mb(1271),
      Tw = Mb(1280),
      kw = Mb(2023),
      bM = Mb(5226),
      wM = Mb(5279),
      MM = Mb(4840),
      eM = Mb(57),
      HM = Mb(364),
      pM = Mb(361),
      VM = Mb(35246),
      gM = Mb(352),
      lM = Mb(42561),
      LM = Mb(5675),
      IM = Mb(5243);
    var OM = Mb(5254),
      UM = Mb(43);

    function tM(bb) {
      let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => document.createElement("canvas");
      try {
        var Mb;
        const eb = wb(),
          Hb = bb ? eb.getContext("webgl") : eb.getContext("webgl2");
        return null !== Hb && (null === (Mb = Hb.getExtension("WEBGL_lose_context")) || void 0 === Mb || Mb.loseContext(), !0)
      } catch {
        return !1
      }
    }
    var CM = Mb(1848);
    var EM = Mb(38922),
      FM = Mb(42567);
    class BM {
      constructor(bb, wb, Mb) {
        this.showView = bb, this.holdForAd = wb, this.render = Mb
      }
      pointerUnlockRequestsChanged() {
        (0, lM.y)()
      }
      pointerLockDebugEntries() {
        return [{
          label: "Locked to the canvas",
          value: String((0, lM.m)())
        }]
      }
      setGameViewShown(bb) {
        this.showView(bb)
      }
      setGameView(bb) {
        (0, FM.j)(bb)
      }
      videoAdHold(bb, wb) {
        this.holdForAd(bb, wb)
      }
      gameRender() {
        return this.render()
      }
    }
    class sM {
      leave(bb) {
        ! function(bb) {
          if (null !== (0, Ub.e)().websocketUrl) try {
            (0, ab.O)().leaveGame(bb)
          } finally {
            (0, Ub.n)({
              websocketUrl: null
            })
          }
        }(bb)
      }
      isReplay() {
        return !1
      }
    }
    class mM {
      constructor(bb) {
        this.workMs = bb
      }
      watchFrameStarts(bb) {
        return (0, ab.s)(bb)
      }
      watchFrames(bb) {
        return (0, ab.o)(bb)
      }
      watchTicks(bb) {
        return (0, ab.x)(bb)
      }
      frameWorkMs() {
        return this.workMs()
      }
    }
    var hM = Mb(42525),
      zM = Mb(42575);

    function XM(bb) {
      return bb >= 0 ? Math.min(1, bb) : 0
    }

    function xM(bb, wb) {
      const {
        fade: Mb
      } = bb;
      return null === Mb || wb - Mb.at >= Mb.ms ? bb.volume : Mb.from + (bb.volume - Mb.from) * Math.max(0, (wb - Mb.at) / Mb.ms)
    }

    function jM(bb) {
      const wb = Object.entries(bb),
        Mb = new Uint32Array(wb.length);
      let eb = 0;
      for (const [Vb, [, gb]] of wb.entries()) Mb[Vb] = gb.length, eb += gb.length;
      const Hb = new Float64Array(3 * eb);
      let pb = 0;
      for (const [, Vb] of wb)
        for (const bb of Vb) Hb.set(bb, pb), pb += 3;
      return {
        blocks: wb.map((bb => {
          let [wb] = bb;
          return wb
        })).join("\0"),
        counts: Mb,
        values: Hb
      }
    }
    class KM {
      constructor(bb, wb) {
        this.core = bb, this.warn = wb, this.latest = 0
      }
      async feed() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : rM;
        const wb = ++this.latest;
        let Mb;
        try {
          Mb = await bb()
        } catch (eb) {
          return void(this.core.isStopped || wb !== this.latest || this.warn("the block colours didn't load, so block particles draw grey", eb))
        }
        wb === this.latest && (this.core.setBlockColours(Mb) || this.core.isStopped || this.warn("the core refused the block colours: block particles draw grey"))
      }
    }
    async function rM() {
      return jM((await Mb.e(235).then((() => Mb(35425)))).averageColors)
    }
    var RM = Mb(5678),
      DM = Mb(5685),
      cM = Mb(42303),
      YM = Mb(4596),
      ZM = Mb(37398),
      fM = Mb(42427),
      AM = Mb(655),
      WM = Mb(38244),
      JM = Mb(648),
      SM = Mb(382),
      NM = Mb(42387);
    const vM = [3e4, 12e4, 3e5];
    class QM extends Error {}
    const GM = {
      mobTypes: AM.n,
      vehicleTypes: WM.e,
      mobAiStates: AM.j,
      playerPoses: JM.p
    };
    var qM = Mb(42375),
      aM = Mb(42401),
      iM = Mb(42454),
      uM = Mb(1400),
      dM = Mb(4132),
      PM = Mb(42583),
      nM = Mb(42592),
      yM = Mb(2529),
      oM = Mb(40357),
      TM = Mb(5706),
      kM = Mb(3470);
    const be = kM.y.KeysDisabled | kM.y.LookFrozen | kM.y.ClicksSuppressed,
      we = yM.j;
    var Me = (0, nM.c)("resumingConn");
    class ee {
      constructor(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.shell = bb, this.now = wb, this.session = void 0, this.attempt = null, this.landed = null, this.initialInfoConn = 0, this.initialInfoOffer = !1, this.completedEarlyConn = 0, Object.defineProperty(this, Me, {
          writable: !0,
          value: 0
        }), this.drops = 0, this.session = new oM.b({
          reconnect: bb => this.reconnect(bb),
          isLive: () => bb.isLive(),
          onReconnected: wb => {
            this.landed = wb, bb.onReconnected(wb), this.landIfResumed()
          },
          onGaveUp: (wb, Mb) => {
            this.abortAttempt(), bb.onGaveUp(wb, Mb)
          },
          freeze: wb => {
            bb.RZ(wb), (0, TM.h)(be, wb ? be : 0, "reconnectFreeze")
          },
          releaseSeat: bb => {
            this.releaseSeat(bb)
          }
        })
      }
      isResuming() {
        return this.session.isResuming()
      }
      get resumingConn() {
        return (0, PM.d)(this, Me)[Me]
      }
      canHoldSeat() {
        return this.session.canHoldSeat()
      }
      onInitialInfo(bb) {
        let {
          conn: wb,
          graceMs: Mb,
          sessionBased: eb,
          replayOffer: Hb
        } = bb;
        this.session.onInitialInfo(Mb, eb), this.isResuming() && (this.initialInfoConn = wb, this.initialInfoOffer = Hb, this.landIfResumed())
      }
      onResumeComplete(bb) {
        0 !== bb && (bb === (0, PM.d)(this, Me)[Me] ? ((0, PM.d)(this, Me)[Me] = 0, this.session.onResumed()) : this.isResuming() && (this.completedEarlyConn = bb))
      }
      onDropped(bb) {
        this.drops++, this.landed = null, this.initialInfoConn = 0, this.initialInfoOffer = !1, this.completedEarlyConn = 0, (0, PM.d)(this, Me)[Me] = 0, this.session.onConnectionLost(bb)
      }
      leave() {
        this.session.leave(), this.dispose()
      }
      dispose() {
        this.abortAttempt(), this.landed = null, this.completedEarlyConn = 0, (0, PM.d)(this, Me)[Me] = 0, this.session.end()
      }
      reconnect(bb) {
        const wb = this.attempt;
        if (null !== wb && this.awaitingJoinRoom(wb)) return wb.result;
        this.abortAttempt();
        const Mb = new AbortController,
          eb = this.drops,
          Hb = {
            attachedAt: null
          },
          pb = this.shell.reconnect(bb, Mb.signal, (() => {
            Hb.attachedAt = this.now()
          })).then((bb => {
            if (this.clearAttempt(Vb), this.drops !== eb) throw new Error("the resumed room dropped before its attempt settled");
            return bb
          }), (bb => {
            throw this.clearAttempt(Vb), bb
          })),
          Vb = {
            abort: Mb,
            socket: Hb,
            result: pb
          };
        return this.attempt = Vb, pb
      }
      clearAttempt(bb) {
        this.attempt === bb && (this.attempt = null)
      }
      abortAttempt() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new DOMException("the reconnect attempt was given up", "AbortError");
        const wb = this.attempt;
        this.attempt = null, null === wb || void 0 === wb || wb.abort.abort(bb)
      }
      awaitingJoinRoom(bb) {
        const wb = bb.socket.attachedAt;
        return null !== wb && this.now() - wb < we
      }
      releaseSeat(bb) {
        const wb = this.attempt,
          Mb = null !== wb && this.awaitingJoinRoom(wb);
        this.abortAttempt(new ww.q), Mb || this.shell.releaseSeat(bb)
      }
      landIfResumed() {
        const bb = this.landed;
        if (null !== bb && bb.conn === this.initialInfoConn) {
          const wb = this.initialInfoOffer && this.completedEarlyConn !== bb.conn;
          if (this.landed = null, this.initialInfoConn = 0, this.initialInfoOffer = !1, this.completedEarlyConn = 0, this.abortAttempt(), !wb) return void this.session.onResumed();
          (0, PM.d)(this, Me)[Me] = bb.conn, this.session.onResuming()
        }
      }
    }
    var He = Mb(40365),
      pe = Mb(42598),
      Ve = Mb(37758),
      ge = Mb(37754),
      le = Mb(2380),
      Le = Mb(2107),
      Ie = Mb(5112),
      Oe = Mb(42434),
      Ue = Mb(6123);

    function te(bb) {
      let {
        pack: wb,
        gameSource: Mb
      } = bb;
      if (null !== Mb && "" !== Mb) return `game:${Mb}`;
      if (null === wb) return "default";
      const {
        id: eb,
        version: Hb
      } = wb.metaData;
      if (eb !== le.t.CUSTOM) return `${eb}@${Hb}`;
      const pb = [];
      for (const Vb of [wb.textureOverrides, wb.modelOverrides, wb.animations])
        for (const [bb, wb] of Object.entries(null !== Vb && void 0 !== Vb ? Vb : {})) pb.push(`${bb}:${wb.length}`);
      return `${eb}:${(0,Le.w)(pb.join())}`
    }
    var Ce = Mb(5270),
      Ee = Mb(4615),
      Fe = Mb(42606),
      Be = Mb(700),
      se = Mb(4624),
      me = Mb(110),
      he = Mb(4229),
      ze = Mb(4216),
      Xe = Mb(5340),
      xe = Mb(5128),
      je = Mb(42472),
      Ke = Mb(42465),
      re = Mb(3479),
      Re = Mb(1821),
      De = Mb(1864),
      ce = Mb(1373),
      Ye = Mb(126),
      Ze = Mb(337),
      fe = Mb(40393),
      Ae = Mb(3487),
      We = Mb(5701);
    const Je = new Set([RM.qb.KeyDown, RM.qb.MouseMove, RM.qb.MouseDown, RM.qb.Wheel, RM.qb.TouchStart, RM.qb.TouchMove]);

    function Se(bb) {
      return (bb.shiftKey ? RM.Ib.Shift : 0) | (bb.ctrlKey ? RM.Ib.Ctrl : 0) | (bb.altKey ? RM.Ib.Alt : 0) | (bb.metaKey ? RM.Ib.Meta : 0) | ("repeat" in bb && bb.repeat ? RM.Ib.Repeat : 0) | (bb.isTrusted ? 0 : RM.Ib.Untrusted | function(bb) {
        try {
          const {
            editable: wb,
            outsideView: Mb
          } = (0, fe.e)(bb.target);
          return (wb ? RM.Ib.UntrustedEditable : 0) | (Mb ? RM.Ib.UntrustedOutsideView : 0)
        } catch {
          return 0
        }
      }(bb))
    }

    function Ne(bb) {
      return "touchOnly" !== (0, Ye.e)() && "function" === typeof bb.requestPointerLock
    }

    function ve(bb) {
      return 0 === bb.button ? bb.altKey ? We.k["Alt+Left Click"] : We.k.Mouse1 : 1 === bb.button ? We.k.Mouse2 : We.k.Mouse3
    }
    const Qe = new Set(["AltLeft", "AltRight", "ArrowUp", "ArrowDown"]),
      Ge = new Map([
        ["AltLeft", "altKey"],
        ["AltRight", "altKey"],
        ["ControlLeft", "ctrlKey"],
        ["ControlRight", "ctrlKey"],
        ["ShiftLeft", "shiftKey"],
        ["ShiftRight", "shiftKey"],
        ["MetaLeft", "metaKey"],
        ["MetaRight", "metaKey"]
      ]),
      qe = 32768,
      ae = 1;

    function ie(bb) {
      return Math.min(Math.max(Math.round(bb), 0), 65535)
    }

    function ue(bb, wb, Mb) {
      const eb = [],
        Hb = (bb, wb, Mb, Hb) => {
          const pb = bb => {
            (0, De.q)(bb) || Mb(bb)
          };
          bb.addEventListener(wb, pb, Hb), eb.push((() => {
            bb.removeEventListener(wb, pb, Hb)
          }))
        },
        pb = {
          capture: !0,
          passive: !0
        },
        Vb = (bb, Mb, eb, Hb, pb) => (!(0, Ae.e)() || !Je.has(bb)) && (wb(bb, Mb, eb, Hb, pb), !0),
        gb = () => document.pointerLockElement === bb,
        lb = (0, Ze.c)(),
        Lb = bb => {
          bb.ctrlKey && Mb.ctrlCombosAreGames() && !(0, TM.f)(bb.target) && bb.preventDefault()
        },
        Ib = (bb, eb, Hb) => {
          Mb.inspect(bb, eb, !1), wb(RM.qb.KeyUp, eb, 0, 0, (0, re.o)(Hb, bb.timeStamp)), Mb.keyReleased(eb)
        },
        Ob = new Map,
        Ub = (bb, wb, Mb) => bb[Mb] || ("AltRight" === wb || "ControlLeft" === wb) && bb.getModifierState("AltGraph"),
        tb = new Map,
        Cb = () => {
          Ob.clear(), tb.clear()
        },
        Eb = bb => {
          if (bb.isTrusted && document.hasFocus())
            for (const [wb, Mb] of tb) tb.delete(wb), Ub(bb, wb, Mb) || (Ob.delete(wb), Ib(bb, We.k[wb], Se(bb)))
        };
      bb.tabIndex = -1;
      let Fb = 0,
        Bb = 0;
      const sb = () => {
        const wb = bb.getBoundingClientRect();
        Fb = wb.left, Bb = wb.top
      };
      let mb = "mouse";
      const hb = () => !gb() && ("mouse" === mb || !Mb.touchUiShown()),
        zb = (bb, wb, Mb) => {
          const eb = (ie(bb.clientX - Fb) | ie(bb.clientY - Bb) << 16) >>> 0;
          Vb(RM.qb.MouseMove, RM.Lb.Point, wb, Mb, eb)
        };
      let Xb = !1,
        xb = 0;
      const jb = () => {
        Xb && (Xb = !1, Mb.viewShown() && (0, lM.Q)())
      };
      eb.push((() => {
        clearTimeout(xb)
      })), Hb(window, "keydown", (bb => {
        "Escape" === bb.key ? (0, lM.D)(!0) : bb.repeat || (0, TM.f)(bb.target) || (Xb = !0, clearTimeout(xb), xb = window.setTimeout(jb, 0))
      }), pb), Hb(window, "keydown", (bb => {
        jb(), Lb(bb), Eb(bb);
        const wb = We.k[bb.code];
        if ("number" !== typeof wb || !Mb.viewShown()) return;
        const eb = (0, TM.f)(bb.target);
        eb || !Mb.prevents(wb) && !Qe.has(bb.code) || bb.preventDefault(), bb.repeat || Mb.inspect(bb, wb, !0), Vb(RM.qb.KeyDown, wb, 0, 0, (0, re.o)(Se(bb), bb.timeStamp)) && Ob.set(bb.code, wb), eb || Mb.keyPressed(wb)
      }), {
        capture: !1,
        passive: !1
      }), Hb(window, "keyup", (bb => {
        "Escape" === bb.key && (0, lM.D)(!1), Lb(bb), Ob.delete(bb.code), tb.delete(bb.code), Eb(bb);
        const wb = We.k[bb.code];
        "number" === typeof wb && Ib(bb, wb, Se(bb))
      }), {
        capture: !0,
        passive: !1
      }), Hb(window, "mousemove", (bb => {
        "mouse" === mb && hb() ? zb(bb, bb.movementX, bb.movementY) : gb() ? Vb(RM.qb.MouseMove, RM.Lb.Stamped, bb.movementX, bb.movementY, (0, re.o)(0, bb.timeStamp)) : Vb(RM.qb.MouseMove, 0, bb.movementX, bb.movementY, 0)
      }), pb);
      let Kb = 0,
        rb = 0;
      const Rb = [];
      let Db = !1,
        cb = !1;
      Hb(bb, "mousedown", (bb => {
        if ((0, Ae.e)()) return;
        Eb(bb);
        const eb = 1 << bb.button;
        if (!gb() && (0, lM.M)() && (0, lM.e)() && (cb = !0, !Db)) return void(Kb |= eb);
        Kb &= ~eb;
        const Hb = bb.button <= 2 ? ve(bb) : void 0;
        void 0 !== Hb && (Rb[bb.button] = Hb, Mb.inspect(bb, Hb, !0)), hb() && zb(bb, 0, 0), wb(RM.qb.MouseDown, bb.button, bb.clientX, bb.clientY, (0, re.o)(Se(bb), bb.timeStamp)), rb |= eb, void 0 !== Hb && Mb.keyPressed(Hb)
      }), pb), Hb(window, "mouseup", (bb => {
        var eb;
        Eb(bb);
        const Hb = 1 << bb.button,
          pb = 0 !== (Kb & ~rb & Hb);
        if (Kb &= ~Hb, rb &= ~Hb, pb) return;
        const Vb = bb.button <= 2 ? null !== (eb = Rb[bb.button]) && void 0 !== eb ? eb : ve(bb) : void 0;
        void 0 !== Vb && Mb.inspect(bb, Vb, !1), wb(RM.qb.MouseUp, bb.button, bb.clientX, bb.clientY, (0, re.o)(Se(bb), bb.timeStamp)), void 0 !== Vb && Mb.keyReleased(Vb)
      }), pb), Hb(bb, "contextmenu", (bb => {
        bb.preventDefault()
      }), {
        passive: !1
      });
      const Yb = bb => {
        (gb() || (0, lM.k)() && (0, ce.B)()) && (bb.ctrlKey || lb && !document.fullscreenElement) && bb.preventDefault()
      };
      Hb(bb, "wheel", (bb => {
        Yb(bb), Eb(bb), Vb(RM.qb.Wheel, bb.deltaMode, bb.deltaX, bb.deltaY, 0)
      }), {
        capture: !0,
        passive: !1
      });
      const Zb = {
          capture: !0,
          passive: !1
        },
        fb = bb => {
          bb ? window.addEventListener("wheel", Yb, Zb) : window.removeEventListener("wheel", Yb, Zb)
        };
      fb((0, lM.k)()), eb.push((0, lM.t)(fb)), eb.push((() => {
        fb(!1)
      }));
      const Ab = new Map,
        Wb = new Set,
        Jb = bb => {
          const wb = "stylus" === bb.touchType;
          for (const Mb of Ab.values())
            if (!Mb.touched && (wb || Math.abs(bb.clientX - Mb.x) <= ae && Math.abs(bb.clientY - Mb.y) <= ae)) return Mb.touched = !0, !0;
          return !1
        },
        Sb = bb => 32767 & bb,
        Nb = new Set,
        vb = bb => Mb => {
          const eb = (0, re.o)(Se(Mb), Mb.timeStamp);
          bb !== RM.qb.TouchStart && bb !== RM.qb.TouchMove || ((bb, Mb) => {
            const eb = bb.touches;
            if (eb)
              for (const Hb of Nb) {
                let bb = !1;
                for (let wb = 0; wb < eb.length && !bb; wb++) bb = Sb(eb[wb].identifier) === Hb;
                bb || (Nb.delete(Hb), wb(RM.qb.TouchCancel, Hb, 0, 0, Mb))
              }
          })(Mb, eb);
          const Hb = Mb.changedTouches;
          for (let wb = 0; wb < Hb.length; wb++) {
            const Mb = Hb[wb];
            if (bb === RM.qb.TouchStart && Jb(Mb) && Wb.add(Mb.identifier), Wb.has(Mb.identifier)) {
              bb !== RM.qb.TouchEnd && bb !== RM.qb.TouchCancel || Wb.delete(Mb.identifier);
              continue
            }
            const pb = Sb(Mb.identifier),
              gb = Vb(bb, pb, Mb.clientX - Fb, Mb.clientY - Bb, eb);
            bb === RM.qb.TouchStart ? gb && Nb.add(pb) : bb !== RM.qb.TouchMove && Nb.delete(pb)
          }
        },
        Qb = vb(RM.qb.TouchStart);
      Hb(bb, "touchstart", (bb => {
        bb.preventDefault(), (0, Ae.e)() || (Mb.touchStarting(), Qb(bb))
      }), {
        passive: !1
      }), Hb(bb, "touchmove", vb(RM.qb.TouchMove), pb), Hb(bb, "touchend", vb(RM.qb.TouchEnd), pb), Hb(bb, "touchcancel", vb(RM.qb.TouchCancel), pb);
      const Gb = bb => qe | 32767 & bb,
        qb = (bb, wb) => {
          Vb(bb, Gb(wb.pointerId), wb.clientX - Fb, wb.clientY - Bb, (0, re.o)(Se(wb), wb.timeStamp))
        };
      Hb(window, "pointerdown", (wb => {
        mb = wb.pointerType, "mouse" === wb.pointerType && wb.target !== bb && Mb.viewShown() && (0, lM.R)()
      }), pb), Hb(bb, "pointerdown", (bb => {
        "pen" === bb.pointerType && 0 === bb.button && (0, lM.k)() && (0, ce.B)() && (bb.preventDefault(), (0, Ae.e)() || (Ab.set(bb.pointerId, {
          x: bb.clientX,
          y: bb.clientY,
          touched: !1
        }), Mb.touchStarting(), qb(RM.qb.TouchStart, bb)))
      }), {
        passive: !1
      }), Hb(window, "pointermove", (bb => {
        mb = bb.pointerType, Ab.has(bb.pointerId) && qb(RM.qb.TouchMove, bb), "mouse" !== bb.pointerType && hb() && zb(bb, 0, 0)
      }), pb);
      const ab = bb => wb => {
        Ab.delete(wb.pointerId) && qb(bb, wb)
      };
      Hb(window, "pointerup", ab(RM.qb.TouchEnd), pb), Hb(window, "pointercancel", ab(RM.qb.TouchCancel), pb);
      let ib = 0,
        ub = !1;
      const db = () => {
          ib = 0, ub && Mb.coverHeld() || (sb(), Mb.resized())
        },
        Pb = () => {
          if (ub && Mb.coverHeld()) return;
          const bb = Mb.sizeCanvas();
          null !== bb && (ub = !0, wb(RM.qb.Resize, 0, bb.cssWidth, bb.cssHeight, (0, re.i)(bb.renderScale))), sb(), Mb.resized(), 0 === ib && (ib = requestAnimationFrame(db))
        };
      Hb(window, "resize", Pb, pb), eb.push(Mb.watchRenderScale(Pb)), eb.push((() => {
        cancelAnimationFrame(ib)
      })), Hb(window, "focus", (bb => {
        bb.isTrusted && (wb(RM.qb.Focus, 0, 0, 0, 0), Mb.viewShown() && (0, lM.R)())
      }), {
        passive: !0
      });
      const nb = () => {
          (0, lM.D)(!1), Kb = 0
        },
        yb = () => {
          Nb.clear(), Ab.clear(), Wb.clear()
        };
      let ob = 0,
        Tb = 0;
      Hb(window, "blur", (eb => {
        nb(), (0, lM.j)();
        for (const bb of Ob.keys()) {
          const wb = Ge.get(bb);
          void 0 !== wb && tb.set(bb, wb)
        }
        eb.isTrusted && ((bb => {
          for (const [Mb, eb] of Ab) wb(RM.qb.TouchCancel, Gb(Mb), eb.x, eb.y, (0, re.o)(0, bb));
          Ab.clear()
        })(eb.timeStamp), wb(RM.qb.Blur, RM.p.KeepTouches, 0, 0, 0)), lb && eb.isTrusted && (clearTimeout(Tb), Tb = window.setTimeout((() => {
          if (!document.hasFocus()) {
            for (const bb of Ob.values()) Ib(eb, bb, 0);
            Cb()
          }
        }), 0)), clearTimeout(ob), ob = window.setTimeout((() => {
          document.activeElement instanceof HTMLIFrameElement && (0, ce.B)() && Mb.viewShown() && bb.focus({
            preventScroll: !0
          })
        }), 0)
      }), {
        passive: !0
      }), eb.push((() => {
        clearTimeout(ob), clearTimeout(Tb)
      })), Hb(window, "mousedown", (wb => {
        lb && wb.isTrusted && !document.hasFocus() && (0, ce.B)() && Mb.viewShown() && (window.focus(), bb.focus({
          preventScroll: !0
        }))
      }), pb), Hb(document, "visibilitychange", (() => {
        document.hidden ? (wb(RM.qb.Blur, 0, 0, 0, 0), yb()) : document.hasFocus() && wb(RM.qb.Focus, 0, 0, 0, 0)
      }), {
        passive: !0
      }), eb.push((0, Ae.h)((() => {
        nb(), wb(RM.qb.Blur, RM.p.Release, 0, 0, 0), Mb.keysReleased(), Cb(), rb = 0, yb(), wb(RM.qb.Joystick, 0, 0, 0, 0), document.hasFocus() && wb(RM.qb.Focus, 0, 0, 0, 0)
      })));
      const kb = !Mb.canLock(),
        bw = () => kb && !(0, lM.k)() ? RM.kc.Lockless : RM.kc.Released,
        ww = () => {
          gb() && (Db = !1, cb = !1), wb(RM.qb.PointerLock, gb() ? RM.kc.Locked : bw(), 0, 0, 0), (0, lM.I)(gb())
        };
      return Hb(document, "pointerlockchange", ww, {
        passive: !0
      }), Hb(document, "pointerlockerror", (() => {
        Db ||= cb, cb = !1, (0, lM.p)()
      }), {
        passive: !0
      }), kb && eb.push((0, lM.t)((() => {
        wb(RM.qb.PointerLock, bw(), 0, 0, 0)
      }))), Pb(), wb(document.hasFocus() ? RM.qb.Focus : RM.qb.Blur, 0, 0, 0, 0), ww(), () => {
        for (const bb of eb.splice(0)) bb()
      }
    }
    var de = Mb(4505),
      Pe = Mb(35281),
      ne = Mb(35270),
      ye = Mb(2196);
    const oe = new Map(We.c.map(((bb, wb) => [bb, wb]))),
      Te = ["jump", "primary-fire", "alt-fire"],
      ke = ["primary-fire", "alt-fire"];

    function bH(bb) {
      return `${ye.c}${bb}`
    }
    const wH = ["forward", "backward", "left", "right", "sprint", "jump"];

    function MH(bb) {
      const wb = [];
      for (const Mb of bb) {
        const bb = "string" === typeof Mb ? We.k[Mb] : void 0;
        "number" === typeof bb && wb.push(bb)
      }
      return wb
    }
    class eH {
      constructor() {
        this.keys = new Map, this.preventKeys = new Set, this.movementKeys = new Set, this.checkedDown = new Set, this.checkedUp = new Set;
        for (const [bb, wb] of Object.entries(We.d)) this.keys.set(bb, wb);
        this.updateKeySets()
      }
      prevents(bb) {
        return this.preventKeys.has(bb)
      }
      moves(bb) {
        return this.movementKeys.has(bb)
      }
      checks(bb, wb) {
        return (wb ? this.checkedDown : this.checkedUp).has(bb)
      }
      sync(bb, wb) {
        for (const [Mb, eb] of this.keys) {
          const Hb = bb(bH(Mb)),
            pb = Array.isArray(Hb) ? MH(Hb) : We.d[Mb];
          (pb.length !== eb.length || pb.some(((bb, wb) => bb !== eb[wb]))) && this.bind(Mb, pb, wb)
        }
      }
      bind(bb, wb, Mb) {
        const eb = oe.get(bb);
        if (void 0 !== eb) {
          Mb(RM.qb.Binding, 0, 0, 0, eb | RM.o.Clear << 8);
          for (const pb of [...wb, ...null !== (Hb = We.h[bb]) && void 0 !== Hb ? Hb : []]) {
            var Hb;
            Mb(RM.qb.Binding, pb, 0, 0, eb | RM.o.Add << 8)
          }
          this.keys.set(bb, wb), this.updateKeySets()
        }
      }
      updateKeySets() {
        this.preventKeys.clear();
        for (const eb of We.o)
          for (const wb of null !== (bb = this.keys.get(We.c[eb])) && void 0 !== bb ? bb : []) {
            var bb;
            this.preventKeys.add(wb)
          }
        this.movementKeys.clear();
        for (const eb of wH)
          for (const bb of null !== (wb = this.keys.get(eb)) && void 0 !== wb ? wb : []) {
            var wb;
            this.movementKeys.add(bb)
          }
        for (const [eb, Hb] of [
            [this.checkedDown, Te],
            [this.checkedUp, ke]
          ]) {
          eb.clear();
          for (const bb of Hb)
            for (const wb of null !== (Mb = this.keys.get(bb)) && void 0 !== Mb ? Mb : []) {
              var Mb;
              eb.add(wb)
            }
        }
      }
    }
    var HH = Mb(5693),
      pH = Mb(37892);
    const VH = "[bloxd-wasm-client]";

    function gH() {
      return "inGame" === Uw.c.get("gameState") && !(0, Re.u)()
    }
    let lH = null;

    function LH(bb, wb) {
      lH && wb.writePendingInput() && lH.push(function(bb, wb) {
        let Mb = "";
        for (const eb of wb) Mb += eb.toString(16).padStart(2, "0");
        return Mb ? `${bb} ${Mb}` : String(bb)
      }(bb, wb.rings.input.written()))
    }
    const IH = [];

    function OH(bb, wb, Mb, eb) {
      bb === RM.W.InputAction && eb === RM.nb && IH.push(wb.getUint32(Mb, !0))
    }
    var UH = Mb(42611),
      tH = Mb(309),
      CH = Mb(153);
    const EH = new Set(["android", "ios"]);
    let FH = null;

    function BH() {
      return FH ??= function() {
        let bb = null;
        try {
          var wb, Mb, eb;
          const Hb = document.createElement("canvas"),
            pb = {
              powerPreference: CH.d
            };
          if (bb = null !== (wb = Hb.getContext("webgl2", pb)) && void 0 !== wb ? wb : Hb.getContext("webgl", pb), !bb) return null;
          const Vb = bb.getExtension("WEBGL_debug_renderer_info");
          if (!Vb) return "unknown";
          const gb = String(null !== (Mb = bb.getParameter(Vb.UNMASKED_RENDERER_WEBGL)) && void 0 !== Mb ? Mb : "");
          return "" === gb ? "unknown" : (0, tH.k)(String(null !== (eb = bb.getParameter(Vb.UNMASKED_VENDOR_WEBGL)) && void 0 !== eb ? eb : ""), gb)
        } catch {
          return null
        } finally {
          try {
            var Hb, pb;
            null === (Hb = bb) || void 0 === Hb || null === (pb = Hb.getExtension("WEBGL_lose_context")) || void 0 === pb || pb.loseContext()
          } catch {}
        }
      }(), FH
    }

    function sH(bb) {
      const wb = (0, me.pageOperatingSystem)();
      return null === wb ? null : function(bb, wb, Mb) {
        const eb = "software_adapter" === bb.reason ? null : bb.adapter,
          Hb = null === eb || "" === eb.vendor ? null : (0, tH.i)(eb.vendor, eb.architecture);
        return null !== Hb && "other_intel" !== Hb ? Hb : EH.has(wb) ? null : Mb()
      }(bb, wb, BH)
    }
    const mH = 6e4,
      hH = 3e5;
    var zH = Mb(5050);
    const XH = "wasmJoinWarm",
      xH = 8,
      jH = 64;

    function KH(bb) {
      return "number" === typeof bb && Number.isInteger(bb) && bb >= 0 && bb <= 4294967295
    }

    function rH(bb) {
      if ("object" !== typeof bb || null === bb) return !1;
      const {
        game: wb,
        codes: Mb
      } = bb;
      return "string" === typeof wb && "" !== wb && Array.isArray(Mb) && Mb.every(KH)
    }

    function RH(bb) {
      const wb = bb.getItem(XH);
      return Array.isArray(wb) ? wb.filter(rH).slice(0, xH) : []
    }

    function DH(bb) {
      var wb;
      const Mb = RH(arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : UM.i),
        eb = null === bb ? Mb[0] : Mb.find((wb => wb.game === bb));
      return Uint32Array.from(null !== (wb = null === eb || void 0 === eb ? void 0 : eb.codes.slice(0, jH)) && void 0 !== wb ? wb : [])
    }
    var cH = Mb(42616),
      YH = Mb(13);

    function ZH(bb, wb) {
      const Mb = YH.ib.encode(wb);
      ! function(bb, wb) {
        let Mb = wb >= 0 ? 2 * wb : 2 * -wb - 1;
        for (; Mb >= 128;) bb.push(Mb % 128 | 128), Mb = Math.floor(Mb / 128);
        bb.push(Mb)
      }(bb, Mb.length);
      for (const eb of Mb) bb.push(eb)
    }
    let fH, AH, WH;
    (() => {
      const bb = ["length", 0, 1, !1, 2, 3, 5, 6, 4, "a", "b", "s", !0, "e", "resolv", "then", null, void 0, "postCo", "okies", 7, 40, 114, "c", "d", 14, 56, 8, 16, "kRpTyP", 512, "012345", 193, 15, 156, 248, 93, 184, 158, 1023, 63, 128, 12, 64, 255, 32, 24, 18, 10, 19, 65535, 236, 55296, 56319, 56320, 65536, 57343, 31, 192, 224, 240, 146, 121, 206, "Invalid byte index", 113, "f", "Invalid continuation byte", 83, 107, 175, 105, "Block ", "image "];

      function wb() {}
      "smndBn" in wb && function(...wb) {
        Ib(wb[bb[0]] = bb[1], wb[bb[10]] = function(Mb, eb, Hb) {
          var pb = {};
          return Hb.length !== Mb.length + eb.length ? bb[3] : wb[bb[2]](Mb, eb, Hb, bb[1], bb[1], bb[1], pb)
        }, wb[bb[2]] = function(...Mb) {
          return Ib(Mb[bb[0]] = bb[20], Mb[bb[9]] = bb[3]), Mb[bb[6]] >= Mb[bb[4]].length ? bb[12] : Mb[bb[7]]["" + Mb[bb[5]] + Mb[bb[8]] + Mb[bb[6]]] !== bb[17] ? Mb[bb[7]]["" + Mb[bb[5]] + Mb[bb[8]] + Mb[bb[6]]] : (Mb[bb[4]][Mb[bb[6]]] === Mb[bb[1]][Mb[bb[5]]] && Mb[bb[4]][Mb[bb[6]]] === Mb[bb[2]][Mb[bb[8]]] ? Mb[bb[9]] = wb[bb[2]](Mb[bb[1]], Mb[bb[2]], Mb[bb[4]], Mb[bb[5]] + bb[2], Mb[bb[8]], Mb[bb[6]] + bb[2], Mb[bb[7]]) || wb[bb[2]](Mb[bb[1]], Mb[bb[2]], Mb[bb[4]], Mb[bb[5]], Mb[bb[8]] + bb[2], Mb[bb[6]] + bb[2], Mb[bb[7]]) : Mb[bb[4]][Mb[bb[6]]] === Mb[bb[1]][Mb[bb[5]]] ? Mb[bb[9]] = wb[bb[2]](Mb[bb[1]], Mb[bb[2]], Mb[bb[4]], Mb[bb[5]] + bb[2], Mb[bb[8]], Mb[bb[6]] + bb[2], Mb[bb[7]]) : Mb[bb[4]][Mb[bb[6]]] === Mb[bb[2]][Mb[bb[8]]] && (Mb[bb[9]] = wb[bb[2]](Mb[bb[1]], Mb[bb[2]], Mb[bb[4]], Mb[bb[5]], Mb[bb[8]] + bb[2], Mb[bb[6]] + bb[2], Mb[bb[7]])), Mb[bb[7]]["" + Mb[bb[5]] + Mb[bb[8]] + Mb[bb[6]]] = Mb[bb[9]], Mb[bb[9]])
        }, console.log(wb[bb[10]]))
      }();
      const eb = (bb[1], YH[bb[11]])("aGFyZHdhcmVDb25jdXJyZW5jeQ=="),
        Hb = (bb[1], YH[bb[11]])("QkFCWUxPTg=="),
        pb = (bb[1], YH[bb[11]])("QW5kZXNpdGU="),
        Vb = (bb[1], YH[bb[11]])("U21vb3RoIEdyYW5pdGU="),
        gb = (bb[1], YH[bb[11]])("RGlvcml0ZQ=="),
        lb = async (eb, Hb, pb, Vb) => {
          "_HEtpJk" in wb && function(...wb) {
            function Mb(wb) {
              const Mb = {};
              for (let eb of wb.replace(/[^w]/g, "").toLowerCase()) Mb[eb] = Mb[eb] + bb[2] || bb[2];
              return Mb
            }

            function eb(...wb) {
              wb[bb[0]] = bb[4];
              const Mb = buildCharMap(wb[bb[1]]),
                eb = buildCharMap(wb[bb[2]]);
              for (let Hb in Mb)
                if (Mb[Hb] !== eb[Hb]) return bb[3];
              return Object.keys(Mb).length !== Object.keys(eb).length ? bb[3] : bb[12]
            }

            function Hb(...wb) {
              wb[bb[0]] = bb[2];
              return pb(wb[bb[1]]) !== 1 / 0
            }

            function pb(wb) {
              if (!wb) return -bb[2];
              const Mb = pb(wb.left),
                eb = pb(wb.right),
                Hb = Math.abs(Mb - eb);
              if (Mb === 1 / 0 || eb === 1 / 0 || Hb > bb[2]) return 1 / 0;
              return Math.max(Mb, eb) + bb[2]
            }
            wb[bb[0]] = bb[1], window.__GLOBAL__HELPERS__ = {
              buildCharacterMap: Mb,
              isAnagrams: eb,
              isBalanced: Hb,
              getHeightBalanced: pb
            }
          }();
          const [{
            clientSideServerUrls: gb
          }, {
            HttpPayloadType: lb,
            ["postJsonWithMetricsCookiesAndCustomRespons" + bb[13]]: Lb
          }] = await Promise.all([Promise[bb[14] + bb[13]]()[bb[15]]((() => Mb(1271))), Promise[bb[14] + bb[13]]()[bb[15]](((...eb) => (eb[bb[0]] = bb[1], "HxI7hwu" in wb && function(...wb) {
            wb[bb[0]] = bb[1]
          }(), Mb(1186))))]), Ib = gb.getHttpUrlFromWebSocketUrl(eb.endpoint), Ob = eb[bb[18] + bb[19]] === bb[16] ? bb[17] : await eb[bb[18] + bb[19]]();
          await Lb("" + Ib + Hb, pb, {
            ["retrie" + bb[11]]: Vb
          }, lb.blob, Ob)
        };
      fH = async (Mb, eb) => {
        "B0NIFB" + bb[24] in wb && function(...wb) {
          Ib(wb[bb[0]] = bb[1], wb[-bb[20]] = function(Mb, eb) {
            return wb[-bb[21]]({}, Mb, eb)
          }, wb[-bb[21]] = function(...Mb) {
            if (Ib(Mb[bb[0]] = bb[5], Mb[bb[5]] = {}), Mb[bb[1]][Mb[bb[2]] + Mb[bb[4]]] !== bb[17]) return Mb[bb[1]][Mb[bb[2]] + Mb[bb[4]]];
            if (Mb[bb[2]] === Mb[bb[4]]) return bb[12];
            for (Mb[bb[22]] = bb[1]; Mb[bb[22]] < Mb[bb[2]].length; Mb[bb[22]]++) Mb[bb[5]][Mb[bb[2]][Mb[bb[22]]]] === bb[17] && (Mb[bb[5]][Mb[bb[2]][Mb[bb[22]]]] = bb[1]), Mb[bb[5]][Mb[bb[4]][Mb[bb[22]]]] === bb[17] && (Mb[bb[5]][Mb[bb[4]][Mb[bb[22]]]] = bb[1]), Ib(Mb[bb[5]][Mb[bb[2]][Mb[bb[22]]]]++, Mb[bb[5]][Mb[bb[4]][Mb[bb[22]]]]--);
            for (Mb[bb[23]] in Mb[bb[5]])
              if (Mb[bb[5]][Mb[bb[23]]] !== bb[1]) return Mb[bb[1]][Mb[bb[2]] + Mb[bb[4]]] = bb[3], bb[3];
            for (Mb[bb[24]] = bb[2]; Mb[bb[24]] < Mb[bb[2]].length; Mb[bb[24]]++)
              if (wb[-bb[21]](Mb[bb[1]], Mb[bb[2]].substr(bb[1], Mb[bb[24]]), Mb[bb[4]].substr(bb[1], Mb[bb[24]])) && wb[-bb[21]](Mb[bb[1]], Mb[bb[2]].substr(Mb[bb[24]]), Mb[bb[4]].substr(Mb[bb[24]])) || wb[-bb[21]](Mb[bb[1]], Mb[bb[2]].substr(bb[1], Mb[bb[24]]), Mb[bb[4]].substr(Mb[bb[4]].length - Mb[bb[24]])) && wb[-bb[21]](Mb[bb[1]], Mb[bb[2]].substr(Mb[bb[24]]), Mb[bb[4]].substr(bb[1], Mb[bb[4]].length - Mb[bb[24]]))) return Mb[bb[1]][Mb[bb[2]] + Mb[bb[4]]] = bb[12], bb[12];
            return Mb[bb[1]][Mb[bb[2]] + Mb[bb[4]]] = bb[3], bb[3]
          }, console.log(wb[-bb[20]]))
        }();
        const pb = function(bb, wb, Mb, eb) {
          const Hb = [];
          ZH(Hb, bb), ZH(Hb, wb), ZH(Hb, Mb);
          for (const pb of eb) Hb.push(pb);
          return Hb
        }(Mb.game, Mb.lobby, Mb.sessionId, eb);
        try {
          await lb(Mb, "/persisted/keep-alive", {
            type: "uI",
            data: pb
          }, bb[5])
        } catch (Hb) {
          console.warn(Hb)
        }
      };
      const Lb = (Mb, eb) => ("CDG_M4" in wb && function() {
        var wb = function(...wb) {
          Ib(wb[bb[0]] = bb[2], this.qO = wb[bb[1]], this.length = bb[1], this.map = {}, this.head = bb[16], this.tail = bb[16])
        };
        Ib(wb.prototype.get = function(wb) {
          var Mb = this.map[wb];
          return Mb ? (this.remove(Mb), this.insert(Mb.key, Mb.val), Mb.val) : -bb[2]
        }, wb.prototype.put = function(bb, wb) {
          this.map[bb] ? (this.remove(this.map[bb]), this.insert(bb, wb)) : this.length === this.qO ? (this.remove(this.head), this.insert(bb, wb)) : (this.insert(bb, wb), this.length++)
        }, wb.prototype.remove = function(...wb) {
          Ib(wb[bb[0]] = bb[2], wb[bb[9]] = wb[bb[1]].prev, wb[bb[10]] = wb[bb[1]].next), wb[bb[10]] && (wb[bb[10]].prev = wb[bb[9]]), wb[bb[9]] && (wb[bb[9]].next = wb[bb[10]]), this.head === wb[bb[1]] && (this.head = wb[bb[10]]), this.tail === wb[bb[1]] && (this.tail = wb[bb[9]]), delete this.map[wb[bb[1]].key]
        }, wb.prototype.insert = function(...wb) {
          Ib(wb[bb[0]] = bb[4], wb[bb[25]] = new List(wb[bb[1]], wb[bb[2]]), this.tail ? (this.tail.next = wb[bb[25]], wb[bb[25]].prev = this.tail, this.tail = wb[bb[25]]) : (this.tail = wb[bb[25]], this.head = wb[bb[25]]), this.map[wb[bb[1]]] = wb[bb[25]])
        }, console.log(wb))
      }(), Object.getOwnPropertyDescriptor(Mb, eb));

      function Ib() {
        Ib = function() {}
      }
      AH = (...Mb) => {
        if (Mb[bb[0]] = bb[1], "u0fLBU8" in wb && function(...wb) {
            wb[bb[0]] = bb[1];
            const Mb = require("path"),
              {
                version: eb
              } = require("../../package"),
              {
                version: Hb
              } = require("@redacted/enterprise-plugin/package"),
              {
                version: pb
              } = require("@redacted/components/package"),
              {
                sdkVersion: Vb
              } = require("@redacted/enterprise-plugin");
            require("../utils/isStandaloneExecutable"), require("./resolve-local-redacted-path"), Mb.resolve(__dirname, "../redacted.js")
          }(), (bb[1], YH.I)(), Lb(navigator, eb) !== bb[17]) {
          function Ob(...wb) {
            Ib(wb[bb[0]] = bb[1], wb[bb[9]] = function(...wb) {
              for (Ib(wb[bb[0]] = bb[2], wb[bb[9]] = wb[bb[1]].length, wb[bb[10]] = [], wb[bb[5]] = bb[1], wb[-bb[26]] = bb[1], wb[bb[1]].sort(((bb, wb) => bb - wb))), wb[bb[6]] = bb[1]; wb[bb[6]] < wb[bb[9]]; wb[bb[6]]++)
                if (!(wb[bb[6]] > bb[1] && wb[bb[1]][wb[bb[6]]] === wb[bb[1]][wb[bb[6]] - bb[2]]))
                  for (Ib(wb[bb[5]] = wb[bb[6]] + bb[2], wb[-bb[26]] = wb[bb[9]] - bb[2]); wb[bb[5]] < wb[-bb[26]];)
                    if (wb[bb[1]][wb[bb[6]]] + wb[bb[1]][wb[bb[5]]] + wb[bb[1]][wb[-bb[26]]] < bb[1]) wb[bb[5]]++;
                    else if (wb[bb[1]][wb[bb[6]]] + wb[bb[1]][wb[bb[5]]] + wb[bb[1]][wb[-bb[26]]] > bb[1]) wb[-bb[26]]--;
              else {
                for (wb[bb[10]].push([wb[bb[1]][wb[bb[6]]], wb[bb[1]][wb[bb[5]]], wb[bb[1]][wb[-bb[26]]]]); wb[bb[5]] < wb[-bb[26]] && wb[bb[1]][wb[bb[5]]] === wb[bb[1]][wb[bb[5]] + bb[2]];) wb[bb[5]]++;
                for (; wb[bb[5]] < wb[-bb[26]] && wb[bb[1]][wb[-bb[26]]] === wb[bb[1]][wb[-bb[26]] - bb[2]];) wb[-bb[26]]--;
                Ib(wb[bb[5]]++, wb[-bb[26]]--)
              }
              return wb[bb[10]]
            }, console.log(wb[bb[9]]))
          }
          return "sJbE9F" in wb && Ob(), pb
        }
        if (Lb(window, Hb) === bb[17]) {
          function Ub() {
            var wb = function(...wb) {
              function Mb(...wb) {
                return wb[bb[0]] = bb[4], Vb(Hb(gb(wb[bb[1]]), gb(wb[bb[2]])))
              }

              function eb(wb, Mb, eb) {
                return function(...wb) {
                  var Mb, eb, Hb, pb;
                  for (Ib(wb[bb[0]] = bb[4], wb[bb[9]] = wb[bb[2]].length, wb[-bb[37]] = Array()), wb[-bb[36]] = Array(Math.ceil(wb[bb[1]].length / bb[4])), Mb = bb[1]; Mb < wb[-bb[36]].length; Mb++) wb[-bb[36]][Mb] = wb[bb[1]].charCodeAt(Mb * bb[4]) << bb[27] | wb[bb[1]].charCodeAt(Mb * bb[4] + bb[2]);
                  for (; wb[-bb[36]].length > bb[1];) {
                    for (Ib(pb = Array(), Hb = bb[1]), Mb = bb[1]; Mb < wb[-bb[36]].length; Mb++) Ib(Hb = (Hb << bb[28]) + wb[-bb[36]][Mb], eb = Math.floor(Hb / wb[bb[9]]), Hb -= eb * wb[bb[9]]), (pb.length > bb[1] || eb > bb[1]) && (pb[pb.length] = eb);
                    Ib(wb[-bb[37]][wb[-bb[37]].length] = Hb, wb[-bb[36]] = pb)
                  }
                  for (wb[bb[24]] = "", Mb = wb[-bb[37]].length - bb[2]; Mb >= bb[1]; Mb--) wb[bb[24]] += wb[bb[2]].charAt(wb[-bb[37]][Mb]);
                  for (wb[bb[13]] = Math.ceil(wb[bb[1]].length * bb[27] / (Math.log(wb[bb[2]].length) / Math.log(bb[4]))), Mb = wb[bb[24]].length; Mb < wb[bb[13]]; Mb++) wb[bb[24]] = wb[bb[2]][bb[1]] + wb[bb[24]];
                  return wb[bb[24]]
                }(Hb(gb(wb), gb(Mb)), eb)
              }

              function Hb(wb, Mb) {
                var eb, Hb, pb = Lb(wb);
                pb.length > bb[28] && (pb = hb(pb, wb.length * bb[27]));
                var Vb = Array(bb[28]),
                  gb = Array(bb[28]);
                for (eb = bb[1]; eb < bb[28]; eb++) Ib(Vb[eb] = 909522486 ^ pb[eb], gb[eb] = 1549556828 ^ pb[eb]);
                return Hb = hb(Vb.concat(Lb(Mb)), bb[30] + Mb.length * bb[27]), Ob(hb(gb.concat(Hb), function(...wb) {
                  if (wb[bb[0]] = bb[5], wb[bb[1]] === bb[29]) return wb[bb[2]] + wb[bb[4]]
                }(bb[29], bb[30], 256)))
              }

              function pb(...Mb) {
                Mb[bb[0]] = bb[2];
                try {
                  wb[bb[9]]
                } catch (lb) {
                  wb[bb[9]] = bb[1]
                }
                for (Ib(Mb[bb[2]] = wb[bb[9]] ? bb[31] + "6789ABCDEF" : bb[31] + "6789abcdef", Mb[bb[10]] = "", Mb[bb[23]] = bb[17]), Mb[-bb[32]] = bb[1]; Mb[-bb[32]] < Mb[bb[1]].length; Mb[-bb[32]]++) Ib(Mb[bb[23]] = Mb[bb[1]].charCodeAt(Mb[-bb[32]]), Mb[bb[10]] += Mb[bb[2]].charAt(Mb[bb[23]] >>> bb[8] & bb[33]) + Mb[bb[2]].charAt(Mb[bb[23]] & bb[33]));
                return Mb[bb[10]]
              }

              function Vb(...Mb) {
                Mb[bb[0]] = bb[2];
                try {
                  wb[bb[2]]
                } catch (lb) {
                  wb[bb[2]] = ""
                }
                for (Ib(Mb[bb[2]] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Mb[bb[10]] = "", Mb[-bb[34]] = Mb[bb[1]].length), Mb[bb[24]] = bb[1]; Mb[bb[24]] < Mb[-bb[34]]; Mb[bb[24]] += bb[5])
                  for (Mb[bb[13]] = Mb[bb[1]].charCodeAt(Mb[bb[24]]) << bb[28] | (Mb[bb[24]] + bb[2] < Mb[-bb[34]] ? Mb[bb[1]].charCodeAt(Mb[bb[24]] + bb[2]) << bb[27] : bb[1]) | (Mb[bb[24]] + bb[4] < Mb[-bb[34]] ? Mb[bb[1]].charCodeAt(Mb[bb[24]] + bb[4]) : bb[1]), Mb[bb[35]] = bb[1]; Mb[bb[35]] < bb[8]; Mb[bb[35]]++) Mb[bb[24]] * bb[27] + Mb[bb[35]] * bb[7] > Mb[bb[1]].length * bb[27] ? Mb[bb[10]] += wb[bb[2]] : Mb[bb[10]] += Mb[bb[2]].charAt(Mb[bb[13]] >>> bb[7] * (bb[5] - Mb[bb[35]]) & bb[40]);
                return Mb[bb[10]]
              }

              function gb(...wb) {
                var Mb, eb;
                for (Ib(wb[bb[0]] = bb[2], wb[bb[2]] = "", wb[bb[38]] = -bb[2]); ++wb[bb[38]] < wb[bb[1]].length;) Ib(Mb = wb[bb[1]].charCodeAt(wb[bb[38]]), eb = wb[bb[38]] + bb[2] < wb[bb[1]].length ? wb[bb[1]].charCodeAt(wb[bb[38]] + bb[2]) : bb[1]), bb[52] <= Mb && Mb <= bb[53] && bb[54] <= eb && eb <= bb[56] && Ib(Mb = bb[55] + ((Mb & bb[39]) << bb[48]) + (eb & bb[39]), wb[bb[38]]++), Mb <= 127 ? wb[bb[2]] += String.fromCharCode(Mb) : Mb <= 2047 ? wb[bb[2]] += String.fromCharCode(bb[58] | Mb >>> bb[7] & bb[57], bb[41] | Mb & bb[40]) : Mb <= bb[50] ? wb[bb[2]] += String.fromCharCode(bb[59] | Mb >>> bb[42] & bb[33], bb[41] | Mb >>> bb[7] & bb[40], bb[41] | Mb & bb[40]) : Mb <= 2097151 && (wb[bb[2]] += String.fromCharCode(bb[60] | Mb >>> bb[47] & bb[20], bb[41] | Mb >>> bb[42] & bb[40], bb[41] | Mb >>> bb[7] & bb[40], bb[41] | Mb & bb[40]));
                return wb[bb[2]]
              }

              function Lb(wb) {
                var Mb, eb = Array(wb.length >> bb[4]);
                for (Mb = bb[1]; Mb < eb.length; Mb++) eb[Mb] = bb[1];
                for (Mb = bb[1]; Mb < wb.length * bb[27]; Mb += bb[27]) eb[Mb >> bb[6]] |= (wb.charCodeAt(Mb / bb[27]) & bb[44]) << bb[46] - Mb % bb[45];
                return eb
              }

              function Ob(...wb) {
                for (Ib(wb[bb[0]] = bb[2], wb[bb[9]] = ""), wb[bb[4]] = bb[1]; wb[bb[4]] < wb[bb[1]].length * bb[45]; wb[bb[4]] += bb[27]) wb[bb[9]] += String.fromCharCode(wb[bb[1]][wb[bb[4]] >> bb[6]] >>> bb[46] - wb[bb[4]] % bb[45] & bb[44]);
                return wb[bb[9]]
              }

              function Ub(...wb) {
                return wb[bb[0]] = bb[4], wb[bb[1]] >>> wb[bb[2]] | wb[bb[1]] << bb[45] - wb[bb[2]]
              }

              function tb(...wb) {
                return wb[bb[0]] = bb[4], wb[bb[1]] >>> wb[bb[2]]
              }

              function Cb(...wb) {
                return wb[bb[0]] = bb[5], wb[bb[1]] & wb[bb[2]] ^ ~wb[bb[1]] & wb[bb[4]]
              }

              function Eb(...wb) {
                return wb[bb[0]] = bb[5], wb[bb[1]] & wb[bb[2]] ^ wb[bb[1]] & wb[bb[4]] ^ wb[bb[2]] & wb[bb[4]]
              }

              function Fb(...wb) {
                return wb[bb[0]] = bb[2], Ub(wb[bb[1]], bb[4]) ^ Ub(wb[bb[1]], 13) ^ Ub(wb[bb[1]], 22)
              }

              function Bb(...wb) {
                return wb[bb[0]] = bb[2], Ub(wb[bb[1]], bb[7]) ^ Ub(wb[bb[1]], 11) ^ Ub(wb[bb[1]], 25)
              }

              function sb(...wb) {
                return wb[bb[0]] = bb[2], Ub(wb[bb[1]], bb[20]) ^ Ub(wb[bb[1]], bb[47]) ^ tb(wb[bb[1]], bb[5])
              }

              function mb(...wb) {
                return wb[bb[0]] = bb[2], Ub(wb[bb[1]], 17) ^ Ub(wb[bb[1]], bb[49]) ^ tb(wb[bb[1]], bb[48])
              }

              function hb(...Mb) {
                var eb, Hb, pb, Vb, gb, lb, Lb, Ob, Ub, tb, hb, Xb;
                for (Ib(Mb[bb[0]] = bb[4], Mb[bb[4]] = new Array(1779033703, -1150833019, 1013904242, -1521486534, 1359893119, -1694144372, 528734635, 1541459225), Mb[bb[5]] = new Array(bb[43])), Ib(Mb[bb[1]][Mb[bb[2]] >> bb[6]] |= bb[41] << bb[46] - Mb[bb[2]] % bb[45], Mb[bb[1]][(Mb[bb[2]] + bb[43] >> 9 << bb[8]) + bb[33]] = Mb[bb[2]]), Ub = bb[1]; Ub < Mb[bb[1]].length; Ub += bb[28]) {
                  for (Ib(eb = Mb[bb[4]][bb[1]], Hb = Mb[bb[4]][bb[2]], pb = Mb[bb[4]][bb[4]], Vb = Mb[bb[4]][bb[5]], gb = Mb[bb[4]][bb[8]], lb = Mb[bb[4]][bb[6]], Lb = Mb[bb[4]][bb[7]], Ob = Mb[bb[4]][bb[20]]), tb = bb[1]; tb < bb[43]; tb++) Ib(tb < bb[28] ? Mb[bb[5]][tb] = Mb[bb[1]][tb + Ub] : Mb[bb[5]][tb] = zb(zb(zb(mb(Mb[bb[5]][tb - bb[4]]), Mb[bb[5]][tb - bb[20]]), sb(Mb[bb[5]][tb - bb[33]])), Mb[bb[5]][tb - bb[28]]), hb = zb(zb(zb(zb(Ob, Bb(gb)), Cb(gb, lb, Lb)), wb[bb[23]][tb]), Mb[bb[5]][tb]), Xb = zb(Fb(eb), Eb(eb, Hb, pb)), Ob = Lb, Lb = lb, lb = gb, gb = zb(Vb, hb), Vb = pb, pb = Hb, Hb = eb, eb = zb(hb, Xb));
                  Ib(Mb[bb[4]][bb[1]] = zb(eb, Mb[bb[4]][bb[1]]), Mb[bb[4]][bb[2]] = zb(Hb, Mb[bb[4]][bb[2]]), Mb[bb[4]][bb[4]] = zb(pb, Mb[bb[4]][bb[4]]), Mb[bb[4]][bb[5]] = zb(Vb, Mb[bb[4]][bb[5]]), Mb[bb[4]][bb[8]] = zb(gb, Mb[bb[4]][bb[8]]), Mb[bb[4]][bb[6]] = zb(lb, Mb[bb[4]][bb[6]]), Mb[bb[4]][bb[7]] = zb(Lb, Mb[bb[4]][bb[7]]), Mb[bb[4]][bb[20]] = zb(Ob, Mb[bb[4]][bb[20]]))
                }
                return Mb[bb[4]]
              }

              function zb(wb, Mb) {
                var eb = (wb & bb[50]) + (Mb & bb[50]);
                return (wb >> bb[28]) + (Mb >> bb[28]) + (eb >> bb[28]) << bb[28] | eb & bb[50]
              }
              return Ib(wb[bb[0]] = bb[1], wb[bb[9]] = bb[1], wb[bb[2]] = ""), wb[bb[23]] = new Array(1116352408, 1899447441, -1245643825, -373957723, 961987163, 1508970993, -1841331548, -1424204075, -670586216, 310598401, 607225278, 1426881987, 1925078388, -2132889090, -1680079193, -1046744716, -459576895, -272742522, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, -1740746414, -1473132947, -1341970488, -1084653625, -958395405, -710438585, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, -2117940946, -1838011259, -1564481375, -1474664885, -1035236496, -949202525, -778901479, -694614492, -200395387, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, -2067236844, -1933114872, -1866530822, -1538233109, -1090935817, -965641998), {
                hex: function(...wb) {
                  return wb[bb[0]] = bb[2], pb(function(...wb) {
                    return wb[bb[0]] = bb[2], Ob(hb(Lb(wb[bb[1]]), wb[bb[1]].length * bb[27]))
                  }(gb(wb[bb[1]])))
                },
                b64: Mb,
                any: eb,
                hex_hmac: function(...wb) {
                  return wb[bb[0]] = bb[4], pb(Hb(gb(wb[bb[1]]), gb(wb[bb[2]])))
                },
                b64_hmac: Mb,
                any_hmac: eb
              }
            }();
            console.log(wb)
          }
          return "JP1KJr" in wb && Ub(), Vb
        }
        return gb
      }, WH = async Hb => {
        try {
          const eb = AH(),
            {
              retryTransientHttpFailures: pb
            } = await Promise[bb[14] + bb[13]]()[bb[15]]((() => ("ZlAbxa" in wb && function() {
              ! function(...wb) {
                function Mb(...wb) {
                  for (Ib(wb[bb[0]] = bb[2], wb[bb[2]] = [], wb[bb[10]] = bb[1], wb[bb[51]] = wb[bb[1]].length, wb[bb[8]] = bb[17], wb[bb[6]] = bb[17]); wb[bb[10]] < wb[bb[51]];) Ib(wb[bb[8]] = wb[bb[1]].charCodeAt(wb[bb[10]]++), wb[bb[8]] >= bb[52] && wb[bb[8]] <= bb[53] && wb[bb[10]] < wb[bb[51]] ? (wb[bb[6]] = wb[bb[1]].charCodeAt(wb[bb[10]]++), (64512 & wb[bb[6]]) == bb[54] ? wb[bb[2]].push(((wb[bb[8]] & bb[39]) << bb[48]) + (wb[bb[6]] & bb[39]) + bb[55]) : (wb[bb[2]].push(wb[bb[8]]), wb[bb[10]]--)) : wb[bb[2]].push(wb[bb[8]]));
                  return wb[bb[2]]
                }

                function eb(...Mb) {
                  for (Ib(Mb[bb[0]] = bb[2], Mb[bb[9]] = Mb[bb[1]].length, Mb[bb[10]] = -bb[2], Mb[bb[5]] = bb[17], Mb[bb[24]] = ""); ++Mb[bb[10]] < Mb[bb[9]];) Mb[bb[5]] = Mb[bb[1]][Mb[bb[10]]], Mb[bb[5]] > bb[50] && Ib(Mb[bb[5]] -= bb[55], Mb[bb[24]] += wb[bb[2]](Mb[bb[5]] >>> bb[48] & bb[39] | bb[52]), Mb[bb[5]] = bb[54] | Mb[bb[5]] & bb[39]), Mb[bb[24]] += wb[bb[2]](Mb[bb[5]]);
                  return Mb[bb[24]]
                }

                function Hb(...wb) {
                  if (wb[bb[0]] = bb[2], wb[bb[1]] >= bb[52] && wb[bb[1]] <= bb[56]) throw Error("Lone surrogate U+" + wb[bb[1]].toString(bb[28]).toUpperCase() + " is not a scalar value")
                }

                function pb(...Mb) {
                  return Mb[bb[0]] = bb[4], wb[bb[2]](Mb[bb[1]] >> Mb[bb[2]] & bb[40] | bb[41])
                }

                function Vb(...Mb) {
                  return Mb[bb[0]] = bb[2], (4294967168 & Mb[bb[1]]) == bb[1] ? wb[bb[2]](Mb[bb[1]]) : (Mb[bb[2]] = "", (4294965248 & Mb[bb[1]]) == bb[1] ? Mb[bb[2]] = wb[bb[2]](Mb[bb[1]] >> bb[7] & bb[57] | bb[58]) : (4294901760 & Mb[bb[1]]) == bb[1] ? Ib(Hb(Mb[bb[1]]), Mb[bb[2]] = wb[bb[2]](Mb[bb[1]] >> bb[42] & bb[33] | bb[59]), Mb[bb[2]] += pb(Mb[bb[1]], bb[7])) : (4292870144 & Mb[bb[1]]) == bb[1] && Ib(Mb[bb[2]] = wb[bb[2]](Mb[bb[1]] >> bb[47] & bb[20] | bb[60]), Mb[bb[2]] += pb(Mb[bb[1]], bb[42]), Mb[bb[2]] += pb(Mb[bb[1]], bb[7])), Mb[bb[2]] += wb[bb[2]](Mb[bb[1]] & bb[40] | bb[41]), Mb[bb[2]])
                }

                function gb(...wb) {
                  for (Ib(wb[bb[0]] = bb[2], wb[bb[9]] = Mb(wb[bb[1]]), wb[bb[4]] = wb[bb[9]].length, wb[bb[5]] = -bb[2], wb[bb[61]] = bb[17], wb[bb[6]] = ""); ++wb[bb[5]] < wb[bb[4]];) Ib(wb[bb[61]] = wb[bb[9]][wb[bb[5]]], wb[bb[6]] += Vb(wb[bb[61]]));
                  return wb[bb[6]]
                }

                function lb(...Mb) {
                  if (Mb[bb[0]] = bb[1], wb[bb[62]] >= wb[bb[23]]) throw Error(bb[64]);
                  if (Ib(Mb[-bb[63]] = wb[bb[8]][wb[bb[62]]] & bb[44], wb[bb[62]]++), (Mb[-bb[63]] & bb[58]) == bb[41]) return Mb[-bb[63]] & bb[40];
                  throw Error(bb[67])
                }

                function Lb(...Mb) {
                  if (Ib(Mb[bb[0]] = bb[1], Mb[-bb[65]] = bb[17], Mb[bb[2]] = bb[17], Mb[-bb[68]] = bb[17], Mb[-bb[69]] = bb[17], Mb[bb[66]] = bb[17]), wb[bb[62]] > wb[bb[23]]) throw Error(bb[64]);
                  if (wb[bb[62]] == wb[bb[23]]) return bb[3];
                  if (Ib(Mb[-bb[65]] = wb[bb[8]][wb[bb[62]]] & bb[44], wb[bb[62]]++), (Mb[-bb[65]] & bb[41]) == bb[1]) return Mb[-bb[65]];
                  if ((Mb[-bb[65]] & bb[59]) == bb[58]) {
                    if (Ib(Mb[bb[2]] = lb(), Mb[bb[66]] = (Mb[-bb[65]] & bb[57]) << bb[7] | Mb[bb[2]]), Mb[bb[66]] >= bb[41]) return Mb[bb[66]];
                    throw Error(bb[67])
                  }
                  if ((Mb[-bb[65]] & bb[60]) == bb[59]) {
                    if (Ib(Mb[bb[2]] = lb(), Mb[-bb[68]] = lb(), Mb[bb[66]] = (Mb[-bb[65]] & bb[33]) << bb[42] | Mb[bb[2]] << bb[7] | Mb[-bb[68]]), Mb[bb[66]] >= 2048) return Hb(Mb[bb[66]]), Mb[bb[66]];
                    throw Error(bb[67])
                  }
                  if ((Mb[-bb[65]] & bb[35]) == bb[60] && (Ib(Mb[bb[2]] = lb(), Mb[-bb[68]] = lb(), Mb[-bb[69]] = lb(), Mb[bb[66]] = (Mb[-bb[65]] & bb[20]) << bb[47] | Mb[bb[2]] << bb[42] | Mb[-bb[68]] << bb[7] | Mb[-bb[69]]), Mb[bb[66]] >= bb[55] && Mb[bb[66]] <= 1114111)) return Mb[bb[66]];
                  throw Error("Invalid UTF-8 detected")
                }

                function Ob(...Hb) {
                  for (Ib(Hb[bb[0]] = bb[2], wb[bb[8]] = Mb(Hb[bb[1]]), wb[bb[23]] = wb[bb[8]].length, wb[bb[62]] = bb[1], Hb[bb[2]] = [], Hb[bb[70]] = bb[17]);
                    (Hb[bb[70]] = Lb()) !== bb[3];) Hb[bb[2]].push(Hb[bb[70]]);
                  return eb(Hb[bb[2]])
                }
                Ib(wb[bb[0]] = bb[2], wb[bb[2]] = String.fromCharCode), Ib(wb[bb[8]] = bb[17], wb[bb[23]] = bb[17], wb[bb[62]] = bb[17]), Ib(wb[bb[1]].version = "3.0.0", wb[bb[1]].encode = gb, wb[bb[1]].decode = Ob)
              }("undefined" === typeof exports ? this.utf8 = {} : exports)
            }(), Mb(2011))));
          await pb(bb[72] + bb[73] + "post", ((...Mb) => (Mb[bb[0]] = bb[1], "PdrBYc" in wb && function(...wb) {
            Ib(wb[bb[0]] = bb[1], wb[bb[9]] = function(...wb) {
              for (Ib(wb[bb[0]] = bb[2], wb[-bb[59]] = bb[1], wb[-bb[71]] = {}, wb[bb[5]] = bb[1], wb[bb[24]] = bb[1], wb[bb[6]] = bb[1], wb[bb[7]] = wb[bb[1]].length), wb[bb[20]] = bb[1]; wb[bb[20]] < wb[bb[7]]; wb[bb[20]]++) {
                for (Ib(wb[-bb[71]] = {}, wb[bb[5]] = bb[1], wb[bb[24]] = bb[2]), wb[bb[27]] = wb[bb[20]] + bb[2]; wb[bb[27]] < wb[bb[7]]; wb[bb[27]]++) wb[bb[1]][wb[bb[20]]].x !== wb[bb[1]][wb[bb[27]]].x || wb[bb[1]][wb[bb[20]]].y !== wb[bb[1]][wb[bb[27]]].y ? (wb[bb[1]][wb[bb[20]]].y === wb[bb[1]][wb[bb[27]]].y ? wb[bb[6]] = Number.MAX_SAFE_INTEGER : wb[bb[6]] = (wb[bb[1]][wb[bb[20]]].x - wb[bb[1]][wb[bb[27]]].x) / (wb[bb[1]][wb[bb[20]]].y - wb[bb[1]][wb[bb[27]]].y), wb[-bb[71]][wb[bb[6]]] || (wb[-bb[71]][wb[bb[6]]] = bb[1]), Ib(wb[-bb[71]][wb[bb[6]]]++, wb[bb[5]] = Math.max(wb[bb[5]], wb[-bb[71]][wb[bb[6]]]))) : wb[bb[24]]++;
                Ib(wb[bb[5]] += wb[bb[24]], wb[-bb[59]] = Math.max(wb[-bb[59]], wb[bb[5]]))
              }
              return wb[-bb[59]]
            }, console.log(wb[bb[9]]))
          }(), lb(Hb, "/images/" + eb + ".png", {
            block: eb
          }, bb[1]))), 8e3)
        } catch (eb) {
          console.error(bb[72] + bb[73] + "post failed:", eb)
        }
      }
    })();
    var JH = Mb(42545);
    const SH = 1e3 * JH.b.seatReservationSeconds - 3e3;
    class NH {
      constructor(bb) {
        var wb, Mb, eb, Hb;
        let pb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.seat = void 0, this.follow = void 0, this.wallNow = void 0, this.monoNow = void 0, this.wallAt = void 0, this.monoAt = void 0, this.sleep = void 0, this.answeredAt = null, this.posts = 0, this.refusals = 0, this.request = "pending", this.use = "unused", this.wallNow = null !== (wb = pb.wallNow) && void 0 !== wb ? wb : Date.now, this.monoNow = null !== (Mb = pb.monoNow) && void 0 !== Mb ? Mb : () => performance.now(), this.wallAt = this.wallNow(), this.monoAt = this.monoNow(), this.sleep = null !== (eb = pb.sleep) && void 0 !== eb ? eb : kw.c, this.follow = new Tw.e(pb.signal);
        const Vb = null !== (Hb = pb.fetch) && void 0 !== Hb ? Hb : fetch;
        this.seat = (0, pe.g)(bb.endpoint, bb.roomName, bb.joinOptions, {
          sleep: this.sleep,
          signal: this.follow.signal,
          fetch: (bb, wb) => (this.posts++, this.wallAt = this.wallNow(), this.monoAt = this.monoNow(), Vb(bb, wb)),
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
      async take(bb) {
        if ("rematched" === this.use) return;
        (0, Tw.r)(bb);
        const wb = "pending" !== this.request,
          Mb = () => {
            this.abort((0, Tw.h)(bb))
          };
        let eb;
        null === bb || void 0 === bb || bb.addEventListener("abort", Mb, {
          once: !0
        });
        try {
          eb = await this.seat
        } catch (Hb) {
          if ((0, Tw.r)(bb), !wb) throw Hb;
          return void(this.use = "lost")
        } finally {
          null === bb || void 0 === bb || bb.removeEventListener("abort", Mb)
        }
        if ((0, Tw.r)(bb), !(this.ageMs() > SH)) return this.use = "taken", eb;
        this.use = "renewed"
      }
      async reserveInstead(bb, wb) {
        try {
          return await bb()
        } catch (Mb) {
          const Hb = this.holdLeftMs();
          if (!(Mb instanceof ww.k) || Mb.code !== eb.b.duplicateLobbyNameError.code || 0 === Hb) throw Mb;
          return await this.sleep(Hb + 500, wb), bb()
        }
      }
      release() {
        const {
          request: bb,
          use: wb
        } = this, Mb = this.holdsNoSeat();
        return this.abort(), "taken" === wb || Mb ? null : {
          unused: "unused" === wb ? "abandoned" : wb,
          answered: "answered" === bb,
          fW: Math.round(this.ageMs())
        }
      }
      holdsNoSeat() {
        return this.posts === this.refusals
      }
      holdLeftMs() {
        var bb;
        if ("taken" === this.use || this.holdsNoSeat()) return 0;
        const wb = null !== (bb = this.answeredAt) && void 0 !== bb ? bb : {
            wall: this.wallAt,
            mono: this.monoAt
          },
          Mb = Math.max(this.wallNow() - wb.wall, this.monoNow() - wb.mono);
        return Math.max(0, 1e3 * JH.b.seatReservationSeconds - Mb)
      }
      ageMs() {
        return Math.max(this.wallNow() - this.wallAt, this.monoNow() - this.monoAt)
      }
      abort(bb) {
        (0, Tw.l)(this.follow.controller, bb)
      }
    }
    var vH = Mb(42619);
    const QH = new Uint8Array(0);
    class GH {
      constructor(bb) {
        if (this.options = bb, this.slots = [], this.workers = null, this.stopped = !1, this.resting = !1, this.pool = [], this.failedJobs = 0, this.memoryFailureCounted = !1, this.faultsReported = new Set, this.refusals = new Map, this.heapRefusals = 0, null === bb.module) return this.stopped = !0, void bb.fail("no wasm module for the meshing workers");
        bb.loadWorkers().then((bb => {
          if (this.stopped) return;
          const {
            count: wb
          } = bb;
          this.workers = bb;
          for (let Mb = 0; Mb < wb; Mb++) this.slots.push({
            worker: null,
            started: !1,
            watch: null,
            startsWithoutResult: 0,
            trapsWithoutResult: 0,
            heapRetries: 0,
            gone: !1,
            goneFor: null
          });
          for (let Mb = 0; Mb < wb; Mb++) this.start(Mb)
        }), (bb => {
          this.stopped || (this.stop(), this.options.fail("the meshing workers' code could not load", bb))
        }))
      }
      take(bb, wb, Mb) {
        const eb = this.slots[wb];
        if (bb === RM.Wd.Retire) return void(eb && !eb.gone && (this.endWorker(wb), eb.started = !1, this.giveUp(wb, "had its tables trap twice", "every meshing worker's tables trapped twice")));
        const Hb = null === eb || void 0 === eb ? void 0 : eb.worker;
        if (!Hb || !eb.started) return;
        const pb = Mb.byteLength;
        let Vb = null;
        bb === RM.Wd.Mesh && eb.heapRetries > 0 && (eb.heapRetries--, Vb = this.pooled(pb, !0)), Vb ??= this.buffer(pb), new Uint8Array(Vb, 0, pb).set(Mb), Hb.postMessage({
          type: "job",
          kind: bb,
          bytes: Vb,
          len: pb
        }, [Vb])
      }
      takeFailedMeshJobs() {
        const bb = this.failedJobs;
        return this.failedJobs = 0, bb
      }
      newGame() {
        this.memoryFailureCounted = !1
      }
      stopWorkers() {
        this.resting = !0;
        for (let bb = 0; bb < this.slots.length; bb++) {
          const wb = this.slots[bb];
          null !== wb.worker && (this.endWorker(bb), wb.startsWithoutResult = 0, wb.trapsWithoutResult = 0, this.tellLost(bb))
        }
        this.pool.length = 0
      }
      restartWorkers() {
        if (this.resting) {
          this.resting = !1;
          for (let bb = 0; bb < this.slots.length; bb++) this.start(bb)
        }
      }
      stop() {
        this.stopped = !0;
        for (const wb of this.slots) {
          var bb;
          qH(wb), null === (bb = wb.worker) || void 0 === bb || bb.terminate(), wb.worker = null, wb.started = !1
        }
      }
      start(bb) {
        const wb = this.slots[bb],
          {
            module: Mb
          } = this.options,
          {
            workers: eb
          } = this;
        if (this.stopped || this.resting || wb.gone || null === Mb || null === eb) return;
        if (wb.startsWithoutResult >= 3) return void this.giveUp(bb, "failed to start 3 times in a row", "no meshing worker would start");
        let Hb;
        wb.startsWithoutResult++;
        try {
          Hb = eb.create()
        } catch (pb) {
          return console.warn(`[bloxd-wasm-client] meshing worker ${bb} did not start`, pb), void this.start(bb)
        }
        wb.worker = Hb, Hb.onmessage = Mb => {
          let {
            data: eb
          } = Mb;
          wb.worker === Hb && this.onReply(bb, eb)
        }, Hb.onmessageerror = () => {
          wb.worker === Hb && this.lose(bb, "a reply could not be read")
        }, Hb.onerror = Mb => {
          Mb.preventDefault(), wb.worker === Hb && this.lose(bb, Mb.message || "its script failed")
        };
        try {
          Hb.postMessage({
            type: "start",
            module: Mb,
            maxKeptLightStates: eb.maxKeptLightStates
          })
        } catch (pb) {
          return console.warn(`[bloxd-wasm-client] meshing worker ${bb} could not be sent the module`, pb), Hb.terminate(), wb.worker = null, void this.start(bb)
        }
        wb.watch = new vH.h(vH.d, (wb => {
          this.lose(bb, (0, vH.k)(wb), (() => {
            this.options.onStartTimeout(wb)
          }))
        }), void 0, this.options.visibility)
      }
      onReply(bb, wb) {
        const Mb = this.slots[bb];
        switch (wb.type) {
          case "started":
            qH(Mb), Mb.started = !0, this.options.write(0, RM.Td.WorkerStarted, 0, bb, 0, QH);
            break;
          case "lost":
            this.lose(bb, wb.reason);
            break;
          case "memory":
            var eb, Hb;
            null === (eb = (Hb = this.options).onMemoryStats) || void 0 === eb || eb.call(Hb, bb, wb.stats);
            break;
          case "result": {
            const eb = wb.status === RM.ub.Trapped;
            if (0 !== wb.jobId) {
              if (eb) this.countFailedJob(wb.outOfMemory, "light_trap", wb.trap);
              else if (Mb.startsWithoutResult = 0, Mb.trapsWithoutResult = 0, wb.status === RM.ub.Refused) {
                const Mb = function(bb) {
                  if (bb.byteLength < 32) return "(no reason)";
                  const wb = new DataView(bb.buffer, bb.byteOffset, bb.byteLength),
                    Mb = Math.min(wb.getUint32(28, !0), bb.byteLength - 28 - 4);
                  return (new TextDecoder).decode(bb.subarray(32, 32 + Mb)).slice(0, 200)
                }(new Uint8Array(wb.bytes, 0, wb.len));
                this.countFailedJob(ZM.b.test(Mb), "light_refused_input", Mb), this.logRefusal(bb, Mb)
              }
              wb.status === RM.ub.HeapRefused && (Mb.heapRetries = Math.min(Mb.heapRetries + 1, 4), this.logHeapRefusal(bb))
            }
            if (this.options.write(wb.jobId, RM.Td.JobResult, wb.status, bb, wb.workerUs, new Uint8Array(wb.bytes, 0, wb.len)), this.recycle(wb.bytes), wb.spare && this.recycle(wb.spare), !eb) break;
            if (Mb.startsWithoutResult = 0, 0 === wb.jobId) {
              this.lose(bb, `the tables trapped its wasm: ${wb.trap}`);
              break
            }
            Mb.trapsWithoutResult++;
            const Hb = Mb.trapsWithoutResult > 6;
            Mb.gone ||= Hb, this.lose(bb, `a job trapped its wasm: ${wb.trap}`), Hb && this.giveUp(bb, `trapped ${Mb.trapsWithoutResult} jobs in a row`, "every meshing worker kept trapping");
            break
          }
        }
      }
      countFailedJob(bb, wb, Mb) {
        if (bb) {
          if (this.memoryFailureCounted) return;
          this.memoryFailureCounted = !0
        } else this.faultsReported.has(wb) || (this.faultsReported.add(wb), this.options.onLightFault(wb, Mb));
        this.failedJobs++
      }
      logRefusal(bb, wb) {
        var Mb;
        !this.refusals.has(wb) && this.refusals.size >= 16 && (wb = "(other reasons)");
        const eb = (null !== (Mb = this.refusals.get(wb)) && void 0 !== Mb ? Mb : 0) + 1;
        this.refusals.set(wb, eb), (0, Le.A)(eb) && console.warn(`[bloxd-wasm-client] meshing worker ${bb} refused a chunk (${eb} so far for this reason): ${wb}`)
      }
      logHeapRefusal(bb) {
        this.heapRefusals++, (0, Le.A)(this.heapRefusals) && console.warn(`[bloxd-wasm-client] meshing worker ${bb} was refused memory for a chunk's mesh (${this.heapRefusals} so far)`)
      }
      giveUp(bb, wb, Mb) {
        const eb = this.slots[bb];
        if (eb.gone = !0, eb.goneFor = {
            why: wb,
            failure: Mb
          }, console.warn(`[bloxd-wasm-client] meshing worker ${bb} ${wb}: giving up on it`), this.slots.every((bb => bb.gone))) {
          this.stop();
          const bb = new Set(this.slots.map((bb => {
              var wb;
              return null === (wb = bb.goneFor) || void 0 === wb ? void 0 : wb.failure
            }))),
            wb = this.slots.map(((bb, wb) => {
              var Mb, eb;
              return `worker ${wb} ${null!==(Mb=null===(eb=bb.goneFor)||void 0===eb?void 0:eb.why)&&void 0!==Mb?Mb:"went"}`
            }));
          this.options.fail(1 === bb.size ? Mb : `no meshing worker is left (${wb.join(", ")})`)
        }
      }
      lose(bb, wb, Mb) {
        console.warn(`[bloxd-wasm-client] meshing worker ${bb} was lost: ${wb}`), this.endWorker(bb), this.stopped || (Mb ? Mb() : this.options.onWorkerLost(wb), this.tellLost(bb), this.start(bb))
      }
      endWorker(bb) {
        var wb, Mb, eb;
        const Hb = this.slots[bb];
        qH(Hb), null === (wb = Hb.worker) || void 0 === wb || wb.terminate(), Hb.worker = null, Hb.heapRetries = 0, null === (Mb = (eb = this.options).onMemoryGone) || void 0 === Mb || Mb.call(eb, bb)
      }
      tellLost(bb) {
        const wb = this.slots[bb];
        wb.started && (wb.started = !1, this.options.write(0, RM.Td.WorkerLost, 0, bb, 0, QH))
      }
      buffer(bb) {
        var wb;
        return null !== (wb = this.pooled(bb)) && void 0 !== wb ? wb : new ArrayBuffer(Math.max(16384, bb))
      }
      pooled(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Mb = -1;
        for (let Hb = 0; Hb < this.pool.length; Hb++) {
          const eb = this.pool[Hb].byteLength;
          eb >= bb && (Mb < 0 || (wb ? eb > this.pool[Mb].byteLength : eb < this.pool[Mb].byteLength)) && (Mb = Hb)
        }
        if (Mb < 0) return null;
        const eb = this.pool[Mb];
        return this.pool[Mb] = this.pool[this.pool.length - 1], this.pool.pop(), eb
      }
      recycle(bb) {
        this.pool.length < 4 * this.slots.length && bb.byteLength > 0 && bb.byteLength <= 1048576 && this.pool.push(bb)
      }
    }

    function qH(bb) {
      var wb;
      null === (wb = bb.watch) || void 0 === wb || wb.cancel(), bb.watch = null
    }
    var aH = Mb(37764),
      iH = Mb(42437),
      uH = Mb(42622),
      dH = Mb(42631),
      PH = (Mb(42406), Mb(37446)),
      nH = Mb(42633),
      yH = Mb(42515);

    function oH(bb) {
      const wb = new Uint8Array(bb.length >> 2);
      for (let Mb = 0; Mb < wb.length; Mb++) wb[Mb] = bb[4 * Mb + 3];
      return wb
    }
    async function TH(bb) {
      const wb = await (0, nH.j)(bb);
      try {
        const {
          width: bb,
          height: Mb,
          pixels: eb
        } = (0, yH.m)(wb);
        return {
          width: bb,
          height: Mb,
          alpha: oH(eb)
        }
      } finally {
        wb.close()
      }
    }
    class kH {
      constructor(bb, wb, Mb) {
        let eb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : TH;
        this.session = bb, this.sources = wb, this.warn = Mb, this.load = eb, this.nextPoll = 0, this.BC = !1, this.warned = new Set
      }
      drain(bb) {
        if (bb < this.nextPoll) return;
        this.nextPoll = bb + 250;
        const wb = this.session.sunShadowWantedTextures();
        if (wb)
          for (let Mb = 0; Mb + 1 < wb.length; Mb += 2) this.hand(wb[Mb], wb[Mb + 1]);
        for (const Mb of this.session.takeSunShadowWarnings()) this.warn(Mb)
      }
      dispose() {
        this.BC = !0
      }
      async hand(bb, wb) {
        var Mb, eb, Hb, pb, Vb;
        let gb, lb = null;
        try {
          if (lb = await this.sources.blockImageUrl(bb), null === lb) throw new Error(`block image ${bb} has no URL`);
          gb = await this.load(lb)
        } catch (Ib) {
          var Lb;
          const wb = null !== (Lb = lb) && void 0 !== Lb ? Lb : `block image ${bb}`;
          this.warned.has(wb) || (this.warned.add(wb), this.warn(`sun shadow plane texture ${wb} didn't load: its blocks cast no shadow`, Ib))
        }
        this.BC || this.session.setSunShadowTexture(bb, wb, null !== (Mb = null === (eb = gb) || void 0 === eb ? void 0 : eb.width) && void 0 !== Mb ? Mb : 0, null !== (Hb = null === (pb = gb) || void 0 === pb ? void 0 : pb.height) && void 0 !== Hb ? Hb : 0, null === (Vb = gb) || void 0 === Vb ? void 0 : Vb.alpha)
      }
    }
    var bp = Mb(37530),
      wp = Mb(42493),
      Mp = Mb(42635),
      ep = Mb(42640),
      Hp = Mb(42502),
      pp = Mb(42509),
      Vp = Mb(35370),
      gp = Mb(35221),
      lp = Mb(42654);
    const Lp = 8192,
      Ip = new Set;
    const Op = new Set([...gp.b, "sceneDownload"]);
    var Up = Mb(42422),
      tp = Mb(42528);
    const Cp = [1e3, 4e3],
      Ep = [2e3, 4e3, 8e3, 15e3, 3e4, 3e4, 3e4, 3e4];
    async function Fp(bb) {
      let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ep,
        Mb = 0,
        eb = !1,
        Hb = null,
        pb = () => {};
      const Vb = () => {
        const wb = new AbortController;
        Hb = wb, bb.showScreen(wb.signal).then((bb => {
          wb.signal.aborted || (Hb === wb && (Hb = null), eb ||= !bb, pb())
        }))
      };
      let gb = 0;
      try {
        for (; gb < wb.length;) {
          null === Hb && Vb();
          const lb = new AbortController;
          if (pb = () => {
              lb.abort()
            }, await bb.sleep(wb[gb], lb.signal), eb) return {
            picked: null,
            tries: Mb,
            gaveUp: !1
          };
          lb.signal.aborted || gb++, Mb++;
          const Lb = await bb.repick();
          if (eb) return {
            picked: null,
            tries: Mb,
            gaveUp: !1
          };
          if (null !== Lb) return {
            picked: Lb,
            tries: Mb,
            gaveUp: !1
          }
        }
        return {
          picked: null,
          tries: Mb,
          gaveUp: !0
        }
      } finally {
        (() => {
          var bb;
          null === (bb = Hb) || void 0 === bb || bb.abort(), Hb = null
        })()
      }
    }
    var Bp = Mb(42662);
    const sp = new Uint8Array(0);
    let mp = null;

    function hp(bb) {
      return {
        aux: RM.bc.AdStart | (bb ? RM.bc.PreventMovement : 0),
        payload: sp
      }
    }
    var zp = Mb(4139),
      Xp = Mb(332);
    const xp = "__bloxdSceneCapture";
    var jp = Mb(42665);
    class Kp {
      constructor(bb) {
        var wb, Mb;
        this.host = bb, this.requested = null, this.landed = null, this.confirm = null, this.channel = void 0, this.oneShotStored = !0, this.startRead = void 0, this.landRequest = () => {}, this.landing = new Promise((bb => {
          this.landRequest = bb
        })), this.follow = bb => {
          let wb = bb;
          return Promise.race([this.startRead, this.landing]).then((async () => {
            const bb = null === this.requested && null !== wb;
            var Mb;
            bb && (null === (Mb = wb) || void 0 === Mb || Mb(null));
            const eb = await this.landing;
            var Hb;
            null === eb && bb || (null === (Hb = wb) || void 0 === Hb || Hb(eb))
          })), () => {
            wb = null
          }
        }, this.startRead = (Mb = bb.store, Mb.keys().then((bb => ({
          own: bb.includes(Ee.b),
          oneShot: bb.includes(Ee.c)
        })), (() => ({
          own: !0,
          oneShot: !0
        })))).then((bb => {
          let {
            own: wb,
            oneShot: Mb
          } = bb;
          this.oneShotStored = Mb, (wb || Mb) && this.request()
        })), this.channel = (null !== (wb = bb.openChannel) && void 0 !== wb ? wb : Ee.s)(), null !== this.channel && (this.channel.onmessage = () => {
          this.request()
        })
      }
      request() {
        var bb;
        if (null !== this.requested) return this.requested;
        null === (bb = this.channel) || void 0 === bb || bb.close(), this.channel = null;
        const wb = this.oneShotStored;
        return this.requested = function(bb, wb, Mb) {
          return new Promise((wb => {
            wb(bb())
          })).catch((bb => (null !== wb && (0, Ee.p)(wb), Mb(bb), null)))
        }((() => this.host.load(wb).then((bb => (bb.setGamePackConfirm(this.confirm), this.landed = bb, bb)))), wb ? this.host.store : null, this.host.bO), this.landRequest(this.requested), this.requested
      }
      loaded() {
        return this.landed
      }
      forJoin() {
        return null !== this.requested ? this.requested : Promise.race([this.startRead, this.landing]).then((() => {
          var bb;
          return null !== (bb = this.requested) && void 0 !== bb ? bb : null
        }))
      }
      setGamePackConfirm(bb) {
        var wb;
        this.confirm = bb, null === (wb = this.landed) || void 0 === wb || wb.setGamePackConfirm(bb)
      }
    }
    var rp = Mb(37402);
    const Rp = 216 * rp.c,
      Dp = 92 * rp.b,
      cp = 64 * rp.c,
      Yp = 16 * rp.c;

    function Zp() {
      var bb, wb;
      return null !== (bb = null === (wb = performance.memory) || void 0 === wb ? void 0 : wb.Im) && void 0 !== bb ? bb : null
    }
    class fp {
      constructor(bb, wb) {
        this.budgetBytes = bb, this.reads = wb, this.estimate = null, this.shedAt = null
      }
      read(bb) {
        var wb;
        const Mb = this.reads.storedChunks(),
          eb = this.reads.gpuBytes(),
          Hb = Math.max(null !== (wb = this.reads.jsHeapBytes()) && void 0 !== wb ? wb : 0, cp),
          pb = Rp + bb + Hb + eb + Mb * Dp;
        this.estimate = {
          wasmBytes: bb,
          jsHeapBytes: Hb,
          gpuBytes: eb,
          storedChunks: Mb,
          totalBytes: pb
        }
      }
      last() {
        return this.estimate
      }
      takeShed() {
        const {
          estimate: bb,
          budgetBytes: wb,
          shedAt: Mb
        } = this;
        return !(null === bb || null === wb || bb.totalBytes < wb || null !== Mb && bb.totalBytes < Mb + Yp) && (this.shedAt = bb.totalBytes, !0)
      }
      describe() {
        const {
          estimate: bb,
          budgetBytes: wb
        } = this;
        return null === bb ? null : `estimate ${(0,rp.h)(bb.totalBytes)} MiB of budget ${null===wb?"none":(0,rp.h)(wb)}: wasm ${(0,rp.h)(bb.wasmBytes)} js ${(0,rp.h)(bb.jsHeapBytes)} gpu ${(0,rp.h)(bb.gpuBytes)} chunks ${bb.storedChunks}`
      }
      snapshot() {
        const {
          estimate: bb,
          budgetBytes: wb
        } = this;
        return {
          ...null === bb ? {} : {
            footprintMiB: Number((0, rp.h)(bb.totalBytes)),
            gpuMiB: Number((0, rp.h)(bb.gpuBytes)),
            storedChunks: bb.storedChunks
          },
          footprintBudgetMiB: null === wb ? -1 : Number((0, rp.h)(wb))
        }
      }
    }
    var Ap = Mb(4060),
      Wp = Mb(5363),
      Jp = Mb(37593),
      Sp = Mb(39197);
    const Np = DM.mb + 1,
      vp = 4096 * Np;
    class Qp {
      constructor(bb, wb) {
        this.log = bb, this.take = wb, this.dg = [], this.unshown = new Map, this.latest = new Map
      }
      afterFrame(bb, wb) {
        const Mb = this.take();
        Mb.length >= DM.jb && Mb[0] > 0 && (0, Ap.j)("remesh", `${Mb[0]} core records lost to a full log`);
        const eb = this.dg;
        for (let Hb = DM.jb; Hb + DM.mb <= Mb.length; Hb += DM.mb) {
          for (let bb = Hb; bb < Hb + DM.mb; bb++) eb.push(Mb[bb]);
          eb.push(bb)
        }
        if (wb || !(eb.length < vp)) {
          for (let wb = 0; wb < eb.length; wb += Np) this.feed(wb, bb);
          eb.length = 0, wb && this.log.frame(bb)
        }
      }
      feed(bb, wb) {
        var Mb;
        const eb = this.dg,
          Hb = (0, Sp.g)(eb[bb + 1], eb[bb + 2], eb[bb + 3]),
          pb = eb[bb + 4],
          Vb = eb[bb + DM.mb];
        switch (eb[bb]) {
          case DM.Lb.Edit:
            this.log.edit(Hb, Vb);
            break;
          case DM.Lb.Sent:
            this.latest.set(Hb, pb), this.log.sent(Hb, pb, eb[bb + 5], eb[bb + 6], eb[bb + 7], null !== (Mb = this.unshown.get(Hb)) && void 0 !== Mb ? Mb : Sp.e, Vb);
            break;
          case DM.Lb.Done: {
            this.log.received(pb, eb[bb + 5] / 1e3, Vb);
            const wb = this.unshown.get(Hb);
            void 0 === wb ? this.unshown.set(Hb, [pb]) : wb.push(pb);
            break
          }
          case DM.Lb.Failed: {
            const bb = this.latest.get(Hb);
            void 0 !== bb && bb !== pb ? this.log.reassign(Hb, pb, bb) : this.log.failed(pb), this.ended(Hb, pb);
            break
          }
          case DM.Lb.Shown:
            this.log.applied(Hb, pb, wb), this.ended(Hb, pb);
            break;
          case DM.Lb.Replaced:
            this.log.reassign(Hb, pb, eb[bb + 5]), this.ended(Hb, pb);
            break;
          case DM.Lb.Emptied:
            this.log.emptied(Hb, wb);
            break;
          default:
            console.warn(`[debug:remesh] unknown core record kind ${eb[bb]}`)
        }
      }
      ended(bb, wb) {
        this.latest.get(bb) === wb && this.latest.delete(bb);
        const Mb = this.unshown.get(bb);
        if (void 0 === Mb) return;
        const eb = Mb.indexOf(wb);
        eb >= 0 && Mb.splice(eb, 1), 0 === Mb.length && this.unshown.delete(bb)
      }
    }
    let Gp = null;
    var qp = Mb(4593),
      ap = Mb(41118);
    const ip = "its script failed",
      dp = "the block and item tables did not load",
      Pp = new Uint8Array(0);
    class np {
      constructor(bb) {
        this.options = bb, this.worker = null, this.watch = null, this.createWorker = null, this.loading = !1, this.wanted = !1, this.dg = [], this.startsWithoutResult = 0, this.generated = !1, this.coreWaits = !1, this.lastLoss = "", this.seed = null, this.gone = !1, this.pool = [], null !== bb.module ? bb.write(0, RM.Td.WorldgenStarted, 0, 0, Pp) : this.giveUp()
      }
      take(bb, wb) {
        if (!(this.gone || null === this.worker && null === this.dg))
          if (bb === RM.Wd.WorldgenSeed) {
            const bb = 0 === wb.byteLength ? null : this.options.decodeSettings(wb);
            null === bb ? this.release() : function(bb, wb) {
              if ((null === bb || void 0 === bb ? void 0 : bb.byteLength) !== wb.byteLength) return !1;
              for (let Mb = 0; Mb < bb.byteLength; Mb++)
                if (bb[Mb] !== wb[Mb]) return !1;
              return !0
            }(this.seed, wb) || (this.seed = wb.slice(), this.startsWithoutResult = null === this.worker ? 0 : 1), this.dropHeld(), this.post({
              type: "seed",
              settings: bb
            }, []), null !== bb ? this.want() : this.loading || this.options.onMapWithoutWorldgen()
          } else if (bb === RM.Wd.Generate) {
          var Mb;
          const bb = new DataView(wb.buffer, wb.byteOffset, RM.Od),
            eb = null !== (Mb = this.pool.pop()) && void 0 !== Mb ? Mb : new ArrayBuffer(8192);
          this.post({
            type: "generate",
            ticket: bb.getUint32(0, !0),
            x: bb.getInt32(4, !0),
            y: bb.getInt32(8, !0),
            z: bb.getInt32(12, !0),
            bytes: eb
          }, [eb])
        }
      }
      prestart() {
        this.gone || this.want()
      }
      stopWorker() {
        this.gone || (this.release(), this.generated = !1, this.dropHeld(), this.pool.length = 0, this.coreWaits && (this.coreWaits = !1, this.options.write(0, RM.Td.WorldgenStarted, 0, 0, Pp)))
      }
      stop() {
        var bb;
        this.gone = !0, this.dropHeld(), this.endWatch(), null === (bb = this.worker) || void 0 === bb || bb.terminate(), this.worker = null
      }
      post(bb, wb) {
        var Mb;
        null !== this.dg ? this.dg.push({
          message: bb,
          transfer: wb
        }) : null === (Mb = this.worker) || void 0 === Mb || Mb.postMessage(bb, wb)
      }
      want() {
        this.wanted = !0, null === this.worker && (null === this.createWorker ? this.load() : this.start())
      }
      release() {
        this.wanted = !1, null !== this.worker && (this.endWorker(), this.startsWithoutResult = 0, this.dg ??= [])
      }
      endWorker() {
        var bb, wb, Mb;
        this.endWatch(), null === (bb = this.worker) || void 0 === bb || bb.terminate(), this.worker = null, null === (wb = (Mb = this.options).onMemoryGone) || void 0 === wb || wb.call(Mb)
      }
      load() {
        this.loading || (this.loading = !0, this.options.loadWorker().then((bb => {
          this.createWorker = bb, this.wanted && this.start()
        }), (bb => {
          this.gone || (this.giveUp(), this.options.onLoadFailed(bb))
        })))
      }
      start() {
        const {
          module: bb
        } = this.options, wb = this.createWorker;
        if (this.gone || null === bb || null === wb) return;
        if (this.startsWithoutResult >= 3) return this.giveUp(), void this.options.onGaveUp(this.lastLoss);
        let Mb;
        this.startsWithoutResult++;
        try {
          Mb = wb()
        } catch (Hb) {
          return console.warn("[bloxd-wasm-client] the world-gen worker did not start", Hb), this.lastLoss = `it did not start (${String(Hb)})`, void this.start()
        }
        this.worker = Mb, Mb.onmessage = bb => {
          let {
            data: wb
          } = bb;
          this.worker === Mb && this.onReply(Mb, wb)
        }, Mb.onerror = bb => {
          bb.preventDefault(), this.worker === Mb && this.lose(bb.message || ip)
        };
        try {
          Mb.postMessage({
            type: "start",
            module: bb,
            gO: eb.e.gO
          })
        } catch (Hb) {
          return console.warn("[bloxd-wasm-client] the world-gen worker could not be sent the module", Hb), this.lastLoss = `it could not be sent the module (${String(Hb)})`, Mb.terminate(), this.worker = null, void this.start()
        }
        this.watch = new vH.h(vH.f, (bb => {
          this.lose((0, vH.k)(bb), (() => {
            this.options.onStartTimeout(bb)
          }))
        }), void 0, this.options.visibility)
      }
      onReply(bb, wb) {
        switch (wb.type) {
          case "started": {
            this.endWatch();
            const wb = this.dg;
            if (null === wb) {
              this.coreWaits = !1, this.options.write(0, RM.Td.WorldgenStarted, 0, 0, Pp);
              break
            }
            this.dg = null;
            for (const {
                message: Mb,
                transfer: eb
              }
              of wb) bb.postMessage(Mb, eb);
            break
          }
          case "lost":
            this.lose(wb.reason);
            break;
          case "memory":
            var Mb, eb;
            null === (Mb = (eb = this.options).onMemoryStats) || void 0 === Mb || Mb.call(eb, wb.stats);
            break;
          case "result":
            this.generated = !0, wb.status !== RM.ub.Trapped && (this.startsWithoutResult = 0), this.options.write(wb.ticket, RM.Td.WorldgenResult, wb.status, wb.workerUs, new Uint8Array(wb.bytes, 0, wb.len)), this.recycle(wb.bytes), wb.spare && this.recycle(wb.spare)
        }
      }
      lose(bb, wb) {
        console.warn(`[bloxd-wasm-client] the world-gen worker was lost: ${bb}`), this.lastLoss = bb, this.endWorker(), this.gone || (wb ? wb() : this.options.onWorkerLost(bb, this.generated), this.dropHeld(), this.dg = null, this.options.write(0, RM.Td.WorldgenLost, RM._d.Lost, 0, Pp), this.coreWaits = !0, this.start())
      }
      giveUp() {
        this.gone = !0, this.dropHeld(), this.options.write(0, RM.Td.WorldgenLost, RM._d.Gone, 0, Pp)
      }
      endWatch() {
        var bb;
        null === (bb = this.watch) || void 0 === bb || bb.cancel(), this.watch = null
      }
      dropHeld() {
        if (null !== this.dg) {
          for (const {
              message: bb
            }
            of this.dg) "generate" === bb.type && this.recycle(bb.bytes);
          this.dg.length = 0
        }
      }
      recycle(bb) {
        this.pool.length < 16 && bb.byteLength > 0 && bb.byteLength <= 16384 && this.pool.push(bb)
      }
    }
    var yp = Mb(38971),
      op = Mb(2501),
      Tp = Mb(42330),
      kp = Mb(42673),
      bV = Mb(42457);
    const wV = /[(@\s]([^\s(@]+)$/,
      MV = /:\d/;

    function eV(bb, wb) {
      for (let Mb = 0; Mb + wb.length <= bb.length; Mb++) {
        let eb = 0;
        for (; eb < wb.length && bb[Mb + eb] === wb[eb];) eb++;
        if (eb === wb.length) return Mb
      }
      return -1
    }

    function HV(bb) {
      return "(" === bb || ")" === bb || "@" === bb || "," === bb || " " === bb || "\t" === bb
    }

    function pV(bb, wb) {
      let Mb = wb;
      for (; Mb > 0 && !HV(bb[Mb - 1]);) Mb--;
      let eb = wb;
      for (; eb < bb.length && !HV(bb[eb]);) eb++;
      let Hb = "";
      for (let pb = Mb; pb < eb; pb++) Hb += bb[pb];
      return Hb
    }
    const VV = [{
        origin: "chrome-extension://dhdgffkkebhmkfjojejmpbldmpobfkfo",
        tag: "TM"
      }, {
        origin: "chrome-extension://iikmkjmpaadaobahmlepeloendndfphd",
        tag: "TM-Edge"
      }, {
        origin: "chrome-extension://gcalenpjmijncebpfijmoaglllgpjagf",
        tag: "TM-Beta"
      }],
      gV = /^\/[^\s?#]*\?(?:[^\s&#]*&)*?name=([^\s&#]*?)(?::\d+)*(?:[\s&#]|\)(?:[,\s]|$)|$)/,
      lV = ".user.js";

    function LV(bb, wb) {
      let Mb = 0;
      for (; Mb < VV.length && VV[Mb].origin !== wb[0];) Mb++;
      if (Mb === VV.length) return wb[0];
      let eb = "";
      for (let Vb = wb.index + wb[0].length; Vb < bb.length; Vb++) eb += bb[Vb];
      const Hb = (0, YH.l)(YH.W, gV, [eb]),
        pb = null === Hb ? "" : function(bb) {
          let wb = bb.length,
            Mb = 0;
          for (; Mb < 8 && wb > 8 && bb[wb - 8 + Mb] === lV[Mb];) Mb++;
          8 === Mb && (wb -= 8);
          let eb = "",
            Hb = !1;
          for (let pb = 0; pb < wb; pb++) {
            let wb = bb[pb];
            "+" === wb ? wb = " " : "%" === wb && (wb = "2" === bb[pb + 1] && "0" === bb[pb + 2] ? " " : "_", pb += 2), -1 !== eV("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 .-", wb) ? (eb += wb, Hb = !1) : Hb || (eb += "_", Hb = !0)
          }
          return eb
        }(Hb[1]);
      return "" === pb ? wb[0] : VV[Mb].tag + " " + pb
    }

    function IV(bb, wb) {
      var Mb;
      const eb = /[^\n]+/g,
        Hb = /\b(?!wasm:)[a-z][\w+.-]*:\/\/[\w.:%~+[\]-]*/i,
        pb = /^([^?#)]*?)(?::\d+)*(?:[?#)]|$)/;
      let Vb = null,
        gb = null,
        lb = (0, YH.l)(YH.W, eb, [bb]);
      for (; null !== lb;) {
        const Mb = (0, YH.l)(YH.W, Hb, [lb[0]]),
          Lb = null === wb ? -1 : eV(lb[0], wb);
        if (-1 !== Lb) {
          if (null !== Mb) return LV(lb[0], Mb);
          const bb = pV(lb[0], Lb),
            wb = (0, YH.l)(YH.W, wV, [lb[0]]),
            eb = null !== (0, YH.l)(YH.W, MV, [bb]) ? bb : null === wb ? null : wb[1],
            Hb = null === eb ? null : (0, YH.l)(YH.W, pb, [eb]);
          if (null !== Hb && "" !== Hb[1]) return Hb[1]
        }
        null !== Mb && (null === Vb ? Vb = Mb[0] : null === gb && Mb[0] !== Vb && (gb = Mb[0])), lb = (0, YH.l)(YH.W, eb, [bb])
      }
      return null !== (Mb = gb) && void 0 !== Mb ? Mb : null === Vb ? "none" : "own"
    }
    const OV = /:(\d+):(\d+)\)?$/;

    function UV(bb, wb) {
      const Mb = (0, YH.l)(YH.W, OV, [wb]);
      return null === Mb ? bb : bb + ":" + Mb[1] + ":" + Mb[2]
    }

    function tV(bb) {
      const wb = /[^\n]+/g,
        Mb = /\b(?!wasm:)((?:blob:)?)(([a-z][\w+.-]*):\/\/[\w.:%~+[\]-]*)((?:[^\s()@?#]*\/)?)([^\s()@?#:]*)/i;
      let eb = null,
        Hb = "",
        pb = !1,
        Vb = (0, YH.l)(YH.W, wb, [bb]);
      for (; null !== Vb;) {
        const gb = (0, YH.l)(YH.W, Mb, [Vb[0]]),
          lb = null === gb ? (0, YH.l)(YH.W, wV, [Vb[0]]) : null,
          Lb = null !== lb && null !== (0, YH.l)(YH.W, MV, [lb[1]]) && 0 !== eV(lb[1], "wasm:") ? lb[1] : null;
        if (null === eb) null !== gb ? (eb = gb[2], Hb = gb[4]) : null !== Lb && (eb = "");
        else if (null !== gb) {
          if (pb = !0, "" !== gb[1]) return {
            reader: "inline",
            frame: UV("blob", Vb[0])
          };
          if (gb[2] !== eb) {
            const bb = "moz-extension" === gb[3] || "safari-web-extension" === gb[3];
            let wb = "";
            for (let Mb = 0; Mb < gb[5].length && Mb < 20; Mb++) wb += gb[5][Mb];
            return {
              reader: bb ? gb[3] : gb[2],
              frame: UV("" === wb ? "-" : wb, Vb[0])
            }
          }
          if (gb[4] !== Hb) return {
            reader: "inline",
            frame: UV("inline", Vb[0])
          }
        } else if (null !== Lb) {
          const bb = -1 !== eV(Vb[0], "userscript") || -1 !== eV(Vb[0], ".user.js");
          return {
            reader: bb ? "userscript" : "inline",
            frame: UV(bb ? "userscript" : "eval", Vb[0])
          }
        }
        Vb = (0, YH.l)(YH.W, wb, [bb])
      }
      const gb = pb ? "own" : "unknown";
      return {
        reader: gb,
        frame: gb
      }
    }

    function CV(bb, wb) {
      return (0, yp.h)(function(bb) {
        if ("string" !== typeof bb || 0 === bb.length) return "-";
        let wb = 2166136261;
        const Mb = bb.length < 4096 ? bb.length : 4096;
        for (let Hb = 0; Hb <= Mb; Hb++) wb ^= Hb === Mb ? bb.length : (0, YH.l)(YH.db, bb, [Hb]), wb = wb + (wb << 1) + (wb << 4) + (wb << 7) + (wb << 8) + (wb << 24) >>> 0;
        let eb = "";
        for (let Hb = 28; Hb >= 0; Hb -= 4) eb += "0123456789abcdef" [wb >>> Hb & 15];
        return eb
      }(wb), tV(bb).frame)
    }
    const EV = (bb, wb) => bb.includes(wb),
      FV = bb => {
        try {
          return bb()
        } catch {
          return !1
        }
      },
      BV = -1,
      sV = bb => {
        try {
          return bb()
        } catch {
          return BV
        }
      };

    function mV(bb, wb) {
      return {
        probe: (Mb, eb, Hb) => {
          try {
            return ((Mb, eb, Hb) => {
              switch (Mb) {
                case RM.lc.StackCheck:
                  return wb.stackCheck() ? 1 : 0;
                case RM.lc.ConfirmMesh:
                  return wb.confirmMesh();
                case RM.lc.IndexPassReplaced:
                  return wb.indexPassReplaced() ? 1 : 0;
                case RM.lc.ProductSubChanged:
                  return wb.productSubChanged() ? 1 : 0;
                case RM.lc.RenderStatus:
                  return wb.lI();
                case RM.lc.Held:
                  return wb.dg();
                case RM.lc.PlayerKilledSubs:
                  return wb.playerKilledSubs();
                case RM.eb: {
                  const Mb = wb.getComplete();
                  return null === Mb ? 0 : (0, YH.l)(YH.z, YH.ib, [Mb, new YH.b((0, YH.G)(bb()), eb, Hb)]).written
                }
                default:
                  return 0
              }
            })(Mb, eb, Hb)
          } catch {
            return RM.gc
          }
        }
      }
    }
    class hV {
      constructor(bb) {
        this.write = bb, this.flagsWritten = 0, this.written = (0, YH.p)(null)
      }
      sO(bb) {
        let {
          flags: wb,
          values: Mb
        } = bb;
        for (let eb = 0; eb < Mb.length; eb++) this.value(Mb[eb][0], Mb[eb][1]);
        this.setFlags(wb | RM.h.Ready)
      }
      value(bb, wb) {
        this.written[bb] !== wb && this.write(bb, wb, 0) && (this.written[bb] = wb)
      }
      setFlags(bb) {
        const wb = bb & ~this.flagsWritten;
        0 !== wb && this.write(RM.i.Flags, wb, wb) && (this.flagsWritten |= wb)
      }
      originStackHit() {
        return this.write(RM.i.Flags, RM.h.OriginStackHit, RM.h.OriginStackHit)
      }
    }
    const zV = {
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
      XV = 1e3;
    let xV;
    const jV = ["length", 0, null, 1, 2, 68, "a", !1, 3, 5, void 0, 6, 4, 111, "b", "s", "c3RhY2", "cw==", 20, 122, 175, 141, "c", 92, 139, 1e5, 7, !0, 171, 60, "s=", "f", 237, 84, 80, "e", 152, "d", 8, "stack", "name", 223, 142, 61, 245, 188, 154, 10, "p", 247, 69, 115, "h", 39, "?", "string", 46, 87, 101, "Q", ".", 189, "n", 45, 17, 133, "m", "functi", "on", "l", "protot", "ype", "decode", "I=", "eTR5bm", "t", "v", 248, "r", "D", "Cd", "chEven", "dispat", "now", "confir", "mMesh", "produc", "player", "Killed", "number", 65535, "toString", "get", 155, "q", "k", "None", 11, "En", "i", "tOverw", "ritten", "plete"];

    function KV() {}

    function rV() {
      rV = function() {}
    }
    xV = function(bb) {
      let wb = arguments[jV[0]] > jV[3] && arguments[jV[3]] !== jV[10] ? arguments[jV[3]] : (...bb) => (bb[jV[0]] = jV[1], "la0YF0" in KV && function(...bb) {
          rV(bb[jV[0]] = jV[1], bb[jV[14]] = function(...wb) {
            return rV(wb[jV[0]] = jV[8], wb[jV[6]] = {}), wb[jV[4]].length !== wb[jV[1]].length + wb[jV[3]].length ? jV[7] : bb[jV[3]](wb[jV[1]], wb[jV[3]], wb[jV[4]], jV[1], jV[1], jV[1], wb[jV[6]])
          }, bb[jV[3]] = function(...wb) {
            return rV(wb[jV[0]] = jV[26], wb[jV[13]] = jV[7]), wb[jV[9]] >= wb[jV[4]].length ? jV[27] : wb[jV[11]]["" + wb[jV[8]] + wb[jV[12]] + wb[jV[9]]] !== jV[10] ? wb[jV[11]]["" + wb[jV[8]] + wb[jV[12]] + wb[jV[9]]] : (wb[jV[4]][wb[jV[9]]] === wb[jV[1]][wb[jV[8]]] && wb[jV[4]][wb[jV[9]]] === wb[jV[3]][wb[jV[12]]] ? wb[jV[13]] = bb[jV[3]](wb[jV[1]], wb[jV[3]], wb[jV[4]], wb[jV[8]] + jV[3], wb[jV[12]], wb[jV[9]] + jV[3], wb[jV[11]]) || bb[jV[3]](wb[jV[1]], wb[jV[3]], wb[jV[4]], wb[jV[8]], wb[jV[12]] + jV[3], wb[jV[9]] + jV[3], wb[jV[11]]) : wb[jV[4]][wb[jV[9]]] === wb[jV[1]][wb[jV[8]]] ? wb[jV[13]] = bb[jV[3]](wb[jV[1]], wb[jV[3]], wb[jV[4]], wb[jV[8]] + jV[3], wb[jV[12]], wb[jV[9]] + jV[3], wb[jV[11]]) : wb[jV[4]][wb[jV[9]]] === wb[jV[3]][wb[jV[12]]] && (wb[jV[13]] = bb[jV[3]](wb[jV[1]], wb[jV[3]], wb[jV[4]], wb[jV[8]], wb[jV[12]] + jV[3], wb[jV[9]] + jV[3], wb[jV[11]])), wb[jV[11]]["" + wb[jV[8]] + wb[jV[12]] + wb[jV[9]]] = wb[jV[13]], wb[jV[13]])
          }, console.log(bb[jV[14]]))
        }(), jV[2]),
        Mb = arguments[jV[0]] > jV[4] && arguments[jV[4]] !== jV[10] ? arguments[jV[4]] : jV[2],
        eb = arguments[jV[0]] > jV[8] && arguments[jV[8]] !== jV[10] ? arguments[jV[8]] : "";
      const Hb = window,
        pb = (0, YH[jV[15]])("RXJyb3" + jV[73]),
        Vb = (0, YH[jV[15]])(jV[16] + jV[30]),
        gb = (0, YH[jV[15]])("Y2FwdHVyZVN0YWNrVHJhY2U="),
        Lb = (0, YH[jV[15]])(jV[16] + "tUcmFjZUxpbWl0"),
        Ib = (0, YH[jV[15]])("bmF0aXZl"),
        Ob = [(0, YH[jV[15]])("bWFpbi5qcw=="), (0, YH[jV[15]])("aW5kZXguanM="), (0, YH[jV[15]])("dXNlcnNjcmlwdA=="), (0, YH[jV[15]])("Y29udGVudC5q" + jV[17]), (0, YH[jV[15]])("b3B0aW9ucy5q" + jV[17]), (0, YH[jV[15]])("cG9wdXAuanM="), (0, YH[jV[15]])("LnVzZXIuanM="), (0, YH[jV[15]])("Y2hyb21lLWV4dGVuc2lvbg==")],
        Ub = (...bb) => {
          bb[jV[0]] = jV[3], "F5oqGWO" in KV && function(...bb) {
            rV(bb[jV[0]] = jV[1], bb[-jV[21]] = function(...bb) {
              for (rV(bb[jV[0]] = jV[3], bb[jV[6]] = bb[jV[1]].length, bb[jV[18]] = [], bb[-jV[20]] = jV[1]), bb[jV[12]] = jV[1]; bb[jV[12]] < bb[jV[6]]; bb[jV[12]]++) bb[jV[18]].push(bb[jV[12]] !== jV[1] && bb[jV[1]][bb[jV[12]]] > bb[jV[1]][bb[jV[12]] - jV[3]] ? bb[jV[18]][bb[jV[12]] - jV[3]] + jV[3] : jV[3]);
              for (bb[-jV[19]] = bb[jV[6]] - jV[3]; bb[-jV[19]] >= jV[1]; bb[-jV[19]]--) bb[-jV[19]] !== bb[jV[6]] - jV[3] && bb[jV[1]][bb[-jV[19]]] > bb[jV[1]][bb[-jV[19]] + jV[3]] && (bb[jV[18]][bb[-jV[19]]] = Math.max(bb[jV[18]][bb[-jV[19]]], bb[jV[18]][bb[-jV[19]] + jV[3]] + jV[3])), bb[-jV[20]] += bb[jV[18]][bb[-jV[19]]];
              return bb[-jV[20]]
            }, console.log(bb[-jV[21]]))
          }();
          const wb = Hb[pb],
            Mb = wb;
          if (Mb[Lb] < jV[25]) {
            function Eb(...bb) {
              rV(bb[jV[0]] = jV[1], bb[-jV[24]] = function(...bb) {
                for (rV(bb[jV[0]] = jV[3], bb[jV[3]] = bb[jV[1]].length, bb[jV[14]] = [], bb[jV[22]] = jV[1], bb[jV[23]] = jV[1], bb[jV[1]].sort(((bb, wb) => bb - wb))), bb[jV[9]] = jV[1]; bb[jV[9]] < bb[jV[3]]; bb[jV[9]]++)
                  if (!(bb[jV[9]] > jV[1] && bb[jV[1]][bb[jV[9]]] === bb[jV[1]][bb[jV[9]] - jV[3]]))
                    for (rV(bb[jV[22]] = bb[jV[9]] + jV[3], bb[jV[23]] = bb[jV[3]] - jV[3]); bb[jV[22]] < bb[jV[23]];)
                      if (bb[jV[1]][bb[jV[9]]] + bb[jV[1]][bb[jV[22]]] + bb[jV[1]][bb[jV[23]]] < jV[1]) bb[jV[22]]++;
                      else if (bb[jV[1]][bb[jV[9]]] + bb[jV[1]][bb[jV[22]]] + bb[jV[1]][bb[jV[23]]] > jV[1]) bb[jV[23]]--;
                else {
                  for (bb[jV[14]].push([bb[jV[1]][bb[jV[9]]], bb[jV[1]][bb[jV[22]]], bb[jV[1]][bb[jV[23]]]]); bb[jV[22]] < bb[jV[23]] && bb[jV[1]][bb[jV[22]]] === bb[jV[1]][bb[jV[22]] + jV[3]];) bb[jV[22]]++;
                  for (; bb[jV[22]] < bb[jV[23]] && bb[jV[1]][bb[jV[23]]] === bb[jV[1]][bb[jV[23]] - jV[3]];) bb[jV[23]]--;
                  rV(bb[jV[22]]++, bb[jV[23]]--)
                }
                return bb[jV[14]]
              }, console.log(bb[-jV[24]]))
            }
            "Kb1WHc" + jV[75] in KV && Eb(), Mb[Lb] = jV[25]
          }
          const eb = "string" === typeof(Ub = (new wb)[Vb]) ? Ub : `${Ub}`,
            lb = {},
            Ib = Mb[gb];
          var Ub;
          if (typeof Ib === jV[67] + jV[68]) {
            function Fb(...bb) {
              rV(bb[jV[0]] = jV[1], bb[-jV[28]] = function(...wb) {
                return rV(wb[jV[0]] = jV[8], wb[jV[8]] = {}), wb[jV[4]].length !== wb[jV[1]].length + wb[jV[3]].length ? jV[7] : bb[jV[3]](wb[jV[1]], wb[jV[3]], wb[jV[4]], jV[1], jV[1], jV[1], wb[jV[8]])
              }, bb[jV[3]] = function(...wb) {
                return rV(wb[jV[0]] = jV[26], wb[jV[6]] = jV[7]), wb[jV[9]] >= wb[jV[4]].length ? jV[27] : wb[jV[11]]["" + wb[jV[8]] + wb[jV[12]] + wb[jV[9]]] !== jV[10] ? wb[jV[11]]["" + wb[jV[8]] + wb[jV[12]] + wb[jV[9]]] : (wb[jV[4]][wb[jV[9]]] === wb[jV[1]][wb[jV[8]]] && wb[jV[4]][wb[jV[9]]] === wb[jV[3]][wb[jV[12]]] ? wb[jV[6]] = bb[jV[3]](wb[jV[1]], wb[jV[3]], wb[jV[4]], wb[jV[8]] + jV[3], wb[jV[12]], wb[jV[9]] + jV[3], wb[jV[11]]) || bb[jV[3]](wb[jV[1]], wb[jV[3]], wb[jV[4]], wb[jV[8]], wb[jV[12]] + jV[3], wb[jV[9]] + jV[3], wb[jV[11]]) : wb[jV[4]][wb[jV[9]]] === wb[jV[1]][wb[jV[8]]] ? wb[jV[6]] = bb[jV[3]](wb[jV[1]], wb[jV[3]], wb[jV[4]], wb[jV[8]] + jV[3], wb[jV[12]], wb[jV[9]] + jV[3], wb[jV[11]]) : wb[jV[4]][wb[jV[9]]] === wb[jV[3]][wb[jV[12]]] && (wb[jV[6]] = bb[jV[3]](wb[jV[1]], wb[jV[3]], wb[jV[4]], wb[jV[8]], wb[jV[12]] + jV[3], wb[jV[9]] + jV[3], wb[jV[11]])), wb[jV[11]]["" + wb[jV[8]] + wb[jV[12]] + wb[jV[9]]] = wb[jV[6]], wb[jV[6]])
              }, console.log(bb[-jV[28]]))
            }
            "gCNjzQ" in KV && Fb(), (0, YH[jV[69]])(Ib, wb, [lb])
          }
          const tb = lb[Vb],
            Cb = bb[jV[1]] ? Ob[jV[0]] : Ob[jV[0]] - jV[3];
          for (let Bb = jV[1]; Bb < Cb; Bb++) {
            function sb(...bb) {
              bb[jV[0]] = jV[1]
            }
            if ("OOqp_O" in KV && sb(), EV(eb, Ob[Bb])) {
              function mb() {
                console.log((function(...bb) {
                  for (rV(bb[jV[0]] = jV[3], bb[jV[36]] = jV[1], bb[jV[32]] = {}, bb[jV[8]] = jV[1], bb[-jV[33]] = jV[1], bb[jV[35]] = jV[1], bb[jV[31]] = bb[jV[1]].length), bb[jV[26]] = jV[1]; bb[jV[26]] < bb[jV[31]]; bb[jV[26]]++) {
                    for (rV(bb[jV[32]] = {}, bb[jV[8]] = jV[1], bb[-jV[33]] = jV[3]), bb[jV[34]] = bb[jV[26]] + jV[3]; bb[jV[34]] < bb[jV[31]]; bb[jV[34]]++) bb[jV[1]][bb[jV[26]]].x !== bb[jV[1]][bb[jV[34]]].x || bb[jV[1]][bb[jV[26]]].y !== bb[jV[1]][bb[jV[34]]].y ? (bb[jV[1]][bb[jV[26]]].y === bb[jV[1]][bb[jV[34]]].y ? bb[jV[35]] = Number.MAX_SAFE_INTEGER : bb[jV[35]] = (bb[jV[1]][bb[jV[26]]].x - bb[jV[1]][bb[jV[34]]].x) / (bb[jV[1]][bb[jV[26]]].y - bb[jV[1]][bb[jV[34]]].y), bb[jV[32]][bb[jV[35]]] || (bb[jV[32]][bb[jV[35]]] = jV[1]), rV(bb[jV[32]][bb[jV[35]]]++, bb[jV[8]] = Math.max(bb[jV[8]], bb[jV[32]][bb[jV[35]]]))) : bb[-jV[33]]++;
                    rV(bb[jV[8]] += bb[-jV[33]], bb[jV[36]] = Math.max(bb[jV[36]], bb[jV[8]]))
                  }
                  return bb[jV[36]]
                }))
              }
              return "wHlkQb" in KV && mb(), {
                [jV[39]]: eb,
                [jV[40]]: Ob[Bb]
              }
            }
            if (typeof tb === jV[55] && EV(tb, Ob[Bb])) {
              function hb(...bb) {
                rV(bb[jV[0]] = jV[1], bb[jV[6]] = function(...bb) {
                  for (rV(bb[jV[0]] = jV[3], bb[jV[6]] = jV[1], bb[jV[14]] = {}, bb[jV[8]] = jV[1], bb[jV[37]] = jV[1], bb[jV[35]] = jV[1], bb[jV[11]] = bb[jV[1]].length), bb[jV[26]] = jV[1]; bb[jV[26]] < bb[jV[11]]; bb[jV[26]]++) {
                    for (rV(bb[jV[14]] = {}, bb[jV[8]] = jV[1], bb[jV[37]] = jV[3]), bb[jV[38]] = bb[jV[26]] + jV[3]; bb[jV[38]] < bb[jV[11]]; bb[jV[38]]++) bb[jV[1]][bb[jV[26]]].x !== bb[jV[1]][bb[jV[38]]].x || bb[jV[1]][bb[jV[26]]].y !== bb[jV[1]][bb[jV[38]]].y ? (bb[jV[1]][bb[jV[26]]].y === bb[jV[1]][bb[jV[38]]].y ? bb[jV[35]] = Number.MAX_SAFE_INTEGER : bb[jV[35]] = (bb[jV[1]][bb[jV[26]]].x - bb[jV[1]][bb[jV[38]]].x) / (bb[jV[1]][bb[jV[26]]].y - bb[jV[1]][bb[jV[38]]].y), bb[jV[14]][bb[jV[35]]] || (bb[jV[14]][bb[jV[35]]] = jV[1]), rV(bb[jV[14]][bb[jV[35]]]++, bb[jV[8]] = Math.max(bb[jV[8]], bb[jV[14]][bb[jV[35]]]))) : bb[jV[37]]++;
                    rV(bb[jV[8]] += bb[jV[37]], bb[jV[6]] = Math.max(bb[jV[6]], bb[jV[8]]))
                  }
                  return bb[jV[6]]
                }, console.log(bb[jV[6]]))
              }
              return "E4i0u7" + jV[14] in KV && hb(), {
                [jV[39]]: tb,
                [jV[40]]: Ob[Bb]
              }
            }
          }
          return jV[2]
        },
        tb = bb => ("J8EFsO" in KV && function(...bb) {
          rV(bb[jV[0]] = jV[1], bb[jV[41]] = "(c=ak(<~F$VU'9f)~><&85dBPL-module/from", bb[jV[12]] = "q:function(){var ad=ad=>b(ad-29);if(!T.r[(typeof ab==ad(123)" + jV[54], bb[jV[42]] = "return U[c[c[d(-199)]-b(205)]]||V[ae(b(166))];case T.o[c[c[c[d(-199)]+d(-174)]-(c[b(119)]-(c[d(-199)]-163))]+ae(b(146))](0)==b(167)?d(-130):-d(-144)", bb[jV[41]].match(bb[jV[12]] + bb[jV[42]]))
        }(), Ub(bb) !== jV[2]);
      let Cb = jV[2],
        Eb = jV[2],
        Fb = jV[2],
        Bb = jV[2];
      const sb = bb => {
        "QjP4yGI" in KV && function(...bb) {
          var wb;
          rV(bb[jV[0]] = jV[1], wb = function(...bb) {
            rV(bb[jV[0]] = jV[3], this.qO = bb[jV[1]], this.length = jV[1], this.map = {}, this.head = jV[2], this.tail = jV[2])
          }, wb.prototype.get = function(...bb) {
            var wb;
            return rV(bb[jV[0]] = jV[3], wb = this.map[bb[jV[1]]]), wb ? (this.remove(wb), this.insert(wb.key, wb.val), wb.val) : -jV[3]
          }, wb.prototype.put = function(...bb) {
            rV(bb[jV[0]] = jV[4], this.map[bb[jV[1]]] ? (this.remove(this.map[bb[jV[1]]]), this.insert(bb[jV[1]], bb[jV[3]])) : this.length === this.qO ? (this.remove(this.head), this.insert(bb[jV[1]], bb[jV[3]])) : (this.insert(bb[jV[1]], bb[jV[3]]), this.length++))
          }, wb.prototype.remove = function(...bb) {
            rV(bb[jV[0]] = jV[3], bb[jV[44]] = bb[jV[1]].prev, bb[-jV[43]] = bb[jV[1]].next), bb[-jV[43]] && (bb[-jV[43]].prev = bb[jV[44]]), bb[jV[44]] && (bb[jV[44]].next = bb[-jV[43]]), this.head === bb[jV[1]] && (this.head = bb[-jV[43]]), this.tail === bb[jV[1]] && (this.tail = bb[jV[44]]), delete this.map[bb[jV[1]].key]
          }, wb.prototype.insert = function(...bb) {
            rV(bb[jV[0]] = jV[4], bb[jV[4]] = new List(bb[jV[1]], bb[jV[3]]), this.tail ? (this.tail.next = bb[jV[4]], bb[jV[4]].prev = this.tail, this.tail = bb[jV[4]]) : (this.tail = bb[jV[4]], this.head = bb[jV[4]]), this.map[bb[jV[1]]] = bb[jV[4]])
          }, console.log(wb))
        }();
        try {
          return bb()
        } catch {
          function wb() {
            console.log((function(...bb) {
              for (rV(bb[jV[0]] = jV[3], bb[jV[6]] = bb[jV[1]].length, bb[jV[4]] = [], bb[jV[22]] = jV[1], bb[jV[12]] = jV[1], bb[jV[1]].sort(((bb, wb) => bb - wb))), bb[-jV[45]] = jV[1]; bb[-jV[45]] < bb[jV[6]]; bb[-jV[45]]++)
                if (!(bb[-jV[45]] > jV[1] && bb[jV[1]][bb[-jV[45]]] === bb[jV[1]][bb[-jV[45]] - jV[3]]))
                  for (rV(bb[jV[22]] = bb[-jV[45]] + jV[3], bb[jV[12]] = bb[jV[6]] - jV[3]); bb[jV[22]] < bb[jV[12]];)
                    if (bb[jV[1]][bb[-jV[45]]] + bb[jV[1]][bb[jV[22]]] + bb[jV[1]][bb[jV[12]]] < jV[1]) bb[jV[22]]++;
                    else if (bb[jV[1]][bb[-jV[45]]] + bb[jV[1]][bb[jV[22]]] + bb[jV[1]][bb[jV[12]]] > jV[1]) bb[jV[12]]--;
              else {
                for (bb[jV[4]].push([bb[jV[1]][bb[-jV[45]]], bb[jV[1]][bb[jV[22]]], bb[jV[1]][bb[jV[12]]]]); bb[jV[22]] < bb[jV[12]] && bb[jV[1]][bb[jV[22]]] === bb[jV[1]][bb[jV[22]] + jV[3]];) bb[jV[22]]++;
                for (; bb[jV[22]] < bb[jV[12]] && bb[jV[1]][bb[jV[12]]] === bb[jV[1]][bb[jV[12]] - jV[3]];) bb[jV[12]]--;
                rV(bb[jV[22]]++, bb[jV[12]]--)
              }
              return bb[jV[4]]
            }))
          }
          return "paLvGt" in KV && wb(), jV[27]
        }
      };
      let mb = jV[7];
      const hb = (...bb) => {
          bb[jV[0]] = jV[1], "KIqyGh" in KV && function() {
            var bb, wb, Mb, eb = function(...wb) {
              return rV(wb[jV[0]] = jV[3], wb[jV[3]] = []), (wb[jV[1]] === jV[3] || wb[jV[1]] >= jV[12]) && bb(wb[jV[3]], [], wb[jV[1]], jV[1]), wb[jV[3]]
            };
            rV(bb = function(...eb) {
              for (eb[jV[0]] = jV[12], eb[jV[6]] = eb[jV[8]]; eb[jV[6]] < eb[jV[4]]; eb[jV[6]]++) {
                if (eb[jV[3]].length !== eb[jV[6]]) return;
                for (eb[jV[9]] = jV[1]; eb[jV[9]] < eb[jV[4]]; eb[jV[9]]++) Mb(eb[jV[3]], [eb[jV[6]], eb[jV[9]]]) && (rV(eb[jV[3]].push([eb[jV[6]], eb[jV[9]]]), bb(eb[jV[1]], eb[jV[3]], eb[jV[4]], eb[jV[6]] + jV[3])), eb[jV[3]].length === eb[jV[4]] && eb[jV[1]].push(wb(eb[jV[3]])), eb[jV[3]].pop())
              }
            }, wb = function(...bb) {
              for (rV(bb[jV[0]] = jV[3], bb[-jV[46]] = [], bb[jV[14]] = bb[jV[1]].length), bb[jV[22]] = jV[1]; bb[jV[22]] < bb[jV[14]]; bb[jV[22]]++)
                for (bb[-jV[46]][bb[jV[22]]] = "", bb[jV[12]] = jV[1]; bb[jV[12]] < bb[jV[14]]; bb[jV[12]]++) bb[-jV[46]][bb[jV[22]]] += bb[jV[1]][bb[jV[22]]][jV[3]] === bb[jV[12]] ? jV[59] : jV[60];
              return bb[-jV[46]]
            }, Mb = function(bb, wb) {
              var Mb, eb = bb.length;
              for (Mb = jV[1]; Mb < eb; Mb++) {
                if (bb[Mb][jV[1]] === wb[jV[1]] || bb[Mb][jV[3]] === wb[jV[3]]) return jV[7];
                if (Math.abs((bb[Mb][jV[1]] - wb[jV[1]]) / (bb[Mb][jV[3]] - wb[jV[3]])) === jV[3]) return jV[7]
              }
              return jV[27]
            }, console.log(eb))
          }(), !mb && (0, YH[jV[76]])() && (mb = jV[27])
        },
        zb = (...bb) => {
          bb[jV[0]] = jV[3];
          try {
            return bb[jV[1]]()
          } catch {
            return jV[10]
          }
        },
        Xb = (...bb) => {
          bb[jV[0]] = jV[3];
          try {
            function wb(...bb) {
              function wb() {}
              bb[jV[0]] = jV[1], rV(bb[jV[6]] = function(...bb) {
                for (rV(bb[jV[0]] = jV[4], bb[jV[6]] = jV[1], bb[jV[8]] = jV[1], bb[jV[12]] = new wb(jV[1]), bb[jV[37]] = bb[jV[12]], bb[jV[11]] = bb[jV[1]], bb[jV[26]] = bb[jV[3]]); bb[jV[11]] !== jV[2] || bb[jV[26]] !== jV[2];) rV(bb[jV[8]] = (bb[jV[11]] ? bb[jV[11]].val : jV[1]) + (bb[jV[26]] ? bb[jV[26]].val : jV[1]) + bb[jV[6]], bb[jV[6]] = Math.floor(bb[jV[8]] / jV[47]), bb[jV[37]].next = new wb(bb[jV[8]] % jV[47]), bb[jV[37]] = bb[jV[37]].next, bb[jV[11]] = bb[jV[11]] ? bb[jV[11]].next : jV[2], bb[jV[26]] = bb[jV[26]] ? bb[jV[26]].next : jV[2]);
                return bb[jV[6]] && (bb[jV[37]].next = new wb(bb[jV[6]])), bb[jV[12]].next
              }, console.log(bb[jV[6]]))
            }
            return "fwx1ql" + jV[35] in KV && wb(), bb[jV[1]](), jV[27]
          } catch {
            return jV[7]
          }
        },
        xb = (0, YH[jV[15]])("a29qbzYzb25i"),
        jb = (0, YH[jV[48]])(jV[2]);
      let Kb = jV[2],
        rb = jV[7],
        Rb = jV[7];
      const Db = (0, YH[jV[48]])(jV[2]);
      let cb = jV[1];
      const Yb = (0, YH[jV[48]])(jV[2]);
      let Zb = jV[1];
      const fb = (0, YH[jV[48]])(jV[2]);
      let Ab = jV[7],
        Wb = jV[7];
      const Jb = (...wb) => {
          if (wb[jV[0]] = jV[4], wb[jV[1]] === bb) {
            function Hb(...bb) {
              var wb;
              rV(bb[jV[0]] = jV[1], wb = function(...bb) {
                rV(bb[jV[0]] = jV[3], this.qO = bb[jV[1]], this.length = jV[1], this.map = {}, this.head = jV[2], this.tail = jV[2])
              }, wb.prototype.get = function(...bb) {
                var wb;
                return rV(bb[jV[0]] = jV[3], wb = this.map[bb[jV[1]]]), wb ? (this.remove(wb), this.insert(wb.key, wb.val), wb.val) : -jV[3]
              }, wb.prototype.put = function(...bb) {
                rV(bb[jV[0]] = jV[4], this.map[bb[jV[1]]] ? (this.remove(this.map[bb[jV[1]]]), this.insert(bb[jV[1]], bb[jV[3]])) : this.length === this.qO ? (this.remove(this.head), this.insert(bb[jV[1]], bb[jV[3]])) : (this.insert(bb[jV[1]], bb[jV[3]]), this.length++))
              }, wb.prototype.remove = function(...bb) {
                rV(bb[jV[0]] = jV[3], bb[-jV[49]] = bb[jV[1]].prev, bb[jV[14]] = bb[jV[1]].next), bb[jV[14]] && (bb[jV[14]].prev = bb[-jV[49]]), bb[-jV[49]] && (bb[-jV[49]].next = bb[jV[14]]), this.head === bb[jV[1]] && (this.head = bb[jV[14]]), this.tail === bb[jV[1]] && (this.tail = bb[-jV[49]]), delete this.map[bb[jV[1]].key]
              }, wb.prototype.insert = function(...bb) {
                rV(bb[jV[0]] = jV[4], bb[jV[6]] = new List(bb[jV[1]], bb[jV[3]]), this.tail ? (this.tail.next = bb[jV[6]], bb[jV[6]].prev = this.tail, this.tail = bb[jV[6]]) : (this.tail = bb[jV[6]], this.head = bb[jV[6]]), this.map[bb[jV[1]]] = bb[jV[6]])
              }, console.log(wb))
            }
            if ("F_IJZM" in KV && Hb(), Kb === jV[2]) {
              function pb() {
                function bb(...wb) {
                  if (wb[jV[0]] = jV[3], !wb[jV[1]]) return -jV[3];
                  const Mb = bb(wb[jV[1]].left),
                    eb = bb(wb[jV[1]].right),
                    Hb = Math.abs(Mb - eb);
                  if (Mb === 1 / 0 || eb === 1 / 0 || Hb > jV[3]) return 1 / 0;
                  return Math.max(Mb, eb) + jV[3]
                }
                window.__GLOBAL__HELPERS__ = {
                  buildCharacterMap: function(...bb) {
                    bb[jV[0]] = jV[3];
                    const wb = {};
                    for (let Mb of bb[jV[1]].replace(/[^w]/g, "").toLowerCase()) wb[Mb] = wb[Mb] + jV[3] || jV[3];
                    return wb
                  },
                  isAnagrams: function(...bb) {
                    bb[jV[0]] = jV[4];
                    const wb = buildCharMap(bb[jV[1]]),
                      Mb = buildCharMap(bb[jV[3]]);
                    for (let eb in wb)
                      if (wb[eb] !== Mb[eb]) return jV[7];
                    return Object.keys(wb).length !== Object.keys(Mb).length ? jV[7] : jV[27]
                  },
                  isBalanced: function(...wb) {
                    return wb[jV[0]] = jV[3], bb(wb[jV[1]]) !== 1 / 0
                  },
                  getHeightBalanced: bb
                }
              }
              "QeFYunT" in KV && pb(), Kb = typeof wb[jV[3]] === jV[89] ? wb[jV[3]] : -jV[3]
            } else rb = jV[27];
            return
          }
          const Mb = jb[wb[jV[1]]];
          if (!wb[jV[3]]) {
            function Vb(...bb) {
              rV(bb[jV[0]] = jV[1], bb[jV[22]] = function(...bb) {
                for (rV(bb[jV[0]] = jV[3], bb[-jV[53]] = jV[1], bb[jV[14]] = {}, bb[-jV[51]] = jV[1], bb[jV[37]] = jV[1], bb[jV[9]] = jV[1], bb[jV[11]] = bb[jV[1]].length), bb[jV[50]] = jV[1]; bb[jV[50]] < bb[jV[11]]; bb[jV[50]]++) {
                  for (rV(bb[jV[14]] = {}, bb[-jV[51]] = jV[1], bb[jV[37]] = jV[3]), bb[jV[52]] = bb[jV[50]] + jV[3]; bb[jV[52]] < bb[jV[11]]; bb[jV[52]]++) bb[jV[1]][bb[jV[50]]].x !== bb[jV[1]][bb[jV[52]]].x || bb[jV[1]][bb[jV[50]]].y !== bb[jV[1]][bb[jV[52]]].y ? (bb[jV[1]][bb[jV[50]]].y === bb[jV[1]][bb[jV[52]]].y ? bb[jV[9]] = Number.MAX_SAFE_INTEGER : bb[jV[9]] = (bb[jV[1]][bb[jV[50]]].x - bb[jV[1]][bb[jV[52]]].x) / (bb[jV[1]][bb[jV[50]]].y - bb[jV[1]][bb[jV[52]]].y), bb[jV[14]][bb[jV[9]]] || (bb[jV[14]][bb[jV[9]]] = jV[1]), rV(bb[jV[14]][bb[jV[9]]]++, bb[-jV[51]] = Math.max(bb[-jV[51]], bb[jV[14]][bb[jV[9]]]))) : bb[jV[37]]++;
                  rV(bb[-jV[51]] += bb[jV[37]], bb[-jV[53]] = Math.max(bb[-jV[53]], bb[-jV[51]]))
                }
                return bb[-jV[53]]
              }, console.log(bb[jV[22]]))
            }
            if ("f_eAVC" + jV[62] in KV && Vb(), Mb) {
              function gb(...bb) {
                rV(bb[jV[0]] = jV[1], bb[jV[14]] = "(c=ak(<~F$VU'9f)~><&85dBPL-module/from", bb[jV[3]] = "q:function(){var ad=ad=>b(ad-29);if(!T.r[(typeof ab==ad(123)" + jV[54], bb[jV[4]] = "return U[c[c[d(-199)]-b(205)]]||V[ae(b(166))];case T.o[c[c[c[d(-199)]+d(-174)]-(c[b(119)]-(c[d(-199)]-163))]+ae(b(146))](0)==b(167)?d(-130):-d(-144)", bb[jV[14]].match(bb[jV[3]] + bb[jV[4]]))
              }
              "hEua9HL" in KV && gb(), Rb = jV[27]
            }
            return
          }
          if (wb[jV[1]] !== xb) return void(jb[wb[jV[1]]] = wb[jV[3]]);
          jb[wb[jV[1]]] = jV[27];
          const eb = typeof wb[jV[3]] === jV[55] ? wb[jV[3]] : "" + wb[jV[3]];
          if (fb[eb]) {
            function lb(...bb) {
              rV(bb[jV[0]] = jV[1], bb[jV[6]] = function(...wb) {
                return rV(wb[jV[0]] = jV[3], wb[jV[3]] = []), (wb[jV[1]] === jV[3] || wb[jV[1]] >= jV[12]) && bb[-jV[56]](wb[jV[3]], [], wb[jV[1]], jV[1]), wb[jV[3]]
              }, bb[-jV[56]] = function(...wb) {
                for (wb[jV[0]] = jV[12], wb[jV[12]] = wb[jV[8]]; wb[jV[12]] < wb[jV[4]]; wb[jV[12]]++) {
                  if (wb[jV[3]].length !== wb[jV[12]]) return;
                  for (wb[-jV[57]] = jV[1]; wb[-jV[57]] < wb[jV[4]]; wb[-jV[57]]++) bb[-jV[61]](wb[jV[3]], [wb[jV[12]], wb[-jV[57]]]) && (rV(wb[jV[3]].push([wb[jV[12]], wb[-jV[57]]]), bb[-jV[56]](wb[jV[1]], wb[jV[3]], wb[jV[4]], wb[jV[12]] + jV[3])), wb[jV[3]].length === wb[jV[4]] && wb[jV[1]].push(bb[jV[8]](wb[jV[3]])), wb[jV[3]].pop())
                }
              }, bb[jV[8]] = function(...bb) {
                for (rV(bb[jV[0]] = jV[3], bb[jV[6]] = [], bb[jV[4]] = bb[jV[1]].length), bb[jV[22]] = jV[1]; bb[jV[22]] < bb[jV[4]]; bb[jV[22]]++)
                  for (bb[jV[6]][bb[jV[22]]] = "", bb[-jV[58]] = jV[1]; bb[-jV[58]] < bb[jV[4]]; bb[-jV[58]]++) bb[jV[6]][bb[jV[22]]] += bb[jV[1]][bb[jV[22]]][jV[3]] === bb[-jV[58]] ? jV[59] : jV[60];
                return bb[jV[6]]
              }, bb[-jV[61]] = function(...bb) {
                for (rV(bb[jV[0]] = jV[4], bb[jV[6]] = bb[jV[1]].length), bb[jV[14]] = jV[1]; bb[jV[14]] < bb[jV[6]]; bb[jV[14]]++) {
                  if (bb[jV[1]][bb[jV[14]]][jV[1]] === bb[jV[3]][jV[1]] || bb[jV[1]][bb[jV[14]]][jV[3]] === bb[jV[3]][jV[3]]) return jV[7];
                  if (Math.abs((bb[jV[1]][bb[jV[14]]][jV[1]] - bb[jV[3]][jV[1]]) / (bb[jV[1]][bb[jV[14]]][jV[3]] - bb[jV[3]][jV[3]])) === jV[3]) return jV[7]
                }
                return jV[27]
              }, console.log(bb[jV[6]]))
            }
            "ChpJpG" in KV && lb()
          } else {
            if ((0, yp[jV[62]])(eb)) {
              function Lb(...bb) {
                rV(bb[jV[0]] = jV[1], bb[jV[6]] = function(...bb) {
                  for (rV(bb[jV[0]] = jV[3], bb[jV[3]] = jV[1], bb[jV[4]] = {}, bb[jV[22]] = jV[1], bb[jV[37]] = jV[1], bb[-jV[63]] = jV[1], bb[jV[11]] = bb[jV[1]].length), bb[jV[26]] = jV[1]; bb[jV[26]] < bb[jV[11]]; bb[jV[26]]++) {
                    for (rV(bb[jV[4]] = {}, bb[jV[22]] = jV[1], bb[jV[37]] = jV[3]), bb[-jV[19]] = bb[jV[26]] + jV[3]; bb[-jV[19]] < bb[jV[11]]; bb[-jV[19]]++) bb[jV[1]][bb[jV[26]]].x !== bb[jV[1]][bb[-jV[19]]].x || bb[jV[1]][bb[jV[26]]].y !== bb[jV[1]][bb[-jV[19]]].y ? (bb[jV[1]][bb[jV[26]]].y === bb[jV[1]][bb[-jV[19]]].y ? bb[-jV[63]] = Number.MAX_SAFE_INTEGER : bb[-jV[63]] = (bb[jV[1]][bb[jV[26]]].x - bb[jV[1]][bb[-jV[19]]].x) / (bb[jV[1]][bb[jV[26]]].y - bb[jV[1]][bb[-jV[19]]].y), bb[jV[4]][bb[-jV[63]]] || (bb[jV[4]][bb[-jV[63]]] = jV[1]), rV(bb[jV[4]][bb[-jV[63]]]++, bb[jV[22]] = Math.max(bb[jV[22]], bb[jV[4]][bb[-jV[63]]]))) : bb[jV[37]]++;
                    rV(bb[jV[22]] += bb[jV[37]], bb[jV[3]] = Math.max(bb[jV[3]], bb[jV[22]]))
                  }
                  return bb[jV[3]]
                }, console.log(bb[jV[6]]))
              }
              return "BN1NliP" in KV && Lb(), void(Wb = jV[27])
            }
            if ((0, yp[jV[48]])(eb))
              if (cb < 8) {
                function Ib(...bb) {
                  rV(bb[jV[0]] = jV[1], bb[-jV[65]] = function(...bb) {
                    for (rV(bb[jV[0]] = jV[3], bb[jV[3]] = bb[jV[1]].length, bb[-jV[64]] = [], bb[jV[8]] = jV[1]), bb[jV[12]] = jV[1]; bb[jV[12]] < bb[jV[3]]; bb[jV[12]]++) bb[-jV[64]].push(bb[jV[12]] !== jV[1] && bb[jV[1]][bb[jV[12]]] > bb[jV[1]][bb[jV[12]] - jV[3]] ? bb[-jV[64]][bb[jV[12]] - jV[3]] + jV[3] : jV[3]);
                    for (bb[jV[9]] = bb[jV[3]] - jV[3]; bb[jV[9]] >= jV[1]; bb[jV[9]]--) bb[jV[9]] !== bb[jV[3]] - jV[3] && bb[jV[1]][bb[jV[9]]] > bb[jV[1]][bb[jV[9]] + jV[3]] && (bb[-jV[64]][bb[jV[9]]] = Math.max(bb[-jV[64]][bb[jV[9]]], bb[-jV[64]][bb[jV[9]] + jV[3]] + jV[3])), bb[jV[8]] += bb[-jV[64]][bb[jV[9]]];
                    return bb[jV[8]]
                  }, console.log(bb[-jV[65]]))
                }
                "C983K4" in KV && Ib(), rV(fb[eb] = jV[27], Db[cb++] = eb, Ab ||= (0, yp[jV[66]])(eb))
              } else !Ab && (0, yp[jV[66]])(eb) && rV(fb[eb] = jV[27], Db[8 - jV[3]] = eb, Ab = jV[27]);
            else Zb < 4 && rV(fb[eb] = jV[27], Yb[Zb++] = eb)
          }
        },
        Sb = (0, op.j)(bb),
        Nb = Sb ? Sb.replaced : (() => {
          try {
            return Hb[bb]
          } catch {
            return jV[10]
          }
        })();
      if (Xb((() => {
          Hb[bb] = Jb
        })), typeof Nb === jV[67] + jV[68]) {
        const bb = Nb;
        Xb((() => {
          bb(Jb)
        }))
      }
      if (Sb) {
        const wb = Sb.reports;
        Xb((() => {
          for (const Mb in wb)(0, YH[jV[69]])(YH[jV[79]], wb, [Mb]) && Mb !== bb && Jb(Mb, wb[Mb])
        }))
      }
      const vb = Sb ? jV[4] : jV[3];
      let Qb = jV[7];
      const Gb = (...wb) => (wb[jV[0]] = jV[1], rb ? jV[27] : (rV(wb[-jV[26]] = jV[7], Qb = !Xb((() => {
          wb[-jV[26]] = Hb[bb] !== Jb
        }))), wb[-jV[26]])),
        qb = sb(((...wb) => {
          wb[jV[0]] = jV[1];
          const Mb = (0, YH.J)(Hb, bb);
          return (Mb === jV[2] || void 0 === Mb ? void 0 : Mb.configurable) !== jV[7] || typeof Mb[jV[92]] !== jV[67] + jV[68] || Kb !== vb
        })),
        ab = {},
        ib = () => {
          try {
            return navigator[jV[86] + "tSub"]
          } catch {
            return ab
          }
        },
        ub = ib(),
        db = Mb,
        Pb = db === jV[2] ? (() => {
          const bb = jV[29];
          let wb = jV[7],
            Mb = bb - jV[3];
          const eb = TextDecoder[jV[70] + jV[71]][jV[72]],
            Hb = function() {
              Mb++, Mb === bb && (FV((() => tb(jV[7]))) && (wb = jV[27]), Mb = jV[1]);
              for (var Hb = arguments[jV[0]], pb = new Array(Hb), Vb = jV[1]; Vb < Hb; Vb++) pb[Vb] = arguments[Vb];
              return (0, YH[jV[69]])(eb, this, pb)
            };
          return Xb((() => {
            TextDecoder[jV[70] + jV[71]][jV[72]] = Hb
          })), () => wb ? jV[4] : sV((() => TextDecoder[jV[70] + jV[71]][jV[72]] !== Hb ? jV[11] : jV[1]))
        })() : () => sV((() => db[jV[84] + jV[85]]())),
        nb = (0, MM[jV[52]])(),
        yb = (0, YH[jV[48]])(jV[2]),
        ob = (0, YH[jV[48]])(jV[2]);
      let Tb = jV[1],
        kb = jV[1],
        bw = jV[1];
      const ww = (0, YH[jV[48]])(jV[2]),
        Mw = (0, YH[jV[48]])(jV[2]);
      let ew = jV[2],
        Hw = (0, YH[jV[48]])(jV[2]);
      const pw = (...bb) => {
          rV(bb[jV[0]] = jV[4], yb[Tb] = bb[jV[1]], ob[Tb] = bb[jV[3]], Tb++)
        },
        Vw = bb => {
          var wb;
          return (wb = (ob[bb] ? Mw : ww)[yb[bb]]) !== jV[2] && void 0 !== wb ? wb : -jV[3]
        },
        gw = (0, YH[jV[15]])("d2lvNjQz"),
        lw = (0, YH[jV[15]])("amtsa2plZndu"),
        Lw = [
          [(0, YH[jV[15]])("aW9qZndlODNq"), "2"],
          [(0, YH[jV[15]])("a3Bq"), "4"],
          [(0, YH[jV[15]])("dXJocmZm"), "5"]
        ],
        Iw = [
          [(0, YH[jV[15]])(jV[74] + jV[73]), jV[48]],
          [(0, YH[jV[15]])(jV[74] + "w="), "o"]
        ],
        Ow = (0, YH[jV[15]])("eTR5bnM="),
        Uw = (0, YH[jV[15]])("aHRleWpldA=="),
        tw = (0, YH[jV[15]])("c2RmbGpneGxmY2pr"),
        Cw = [
          [(0, YH[jV[15]])("a3NhZmR1"), jV[78]],
          [(0, YH[jV[15]])("ZGZnYWFzZGFz"), jV[15]],
          [tw, jV[75]],
          [(0, YH[jV[15]])("bGFzZWRraGFz"), "u"],
          [(0, YH[jV[15]])("cW16ZjhrM24="), jV[6]]
        ],
        Ew = [
          [Ow, jV[76]],
          [Uw, jV[94]],
          [(0, YH[jV[15]])("bmI3ZnEy"), jV[14]]
        ],
        Fw = (0, YH[jV[15]])("bGtxM20="),
        Bw = (0, YH[jV[15]])("bWtxN3" + jV[73]),
        sw = ["mk:tw", "mk:jf"],
        mw = ((...bb) => {
          bb[jV[0]] = jV[1];
          try {
            return bb[-jV[77]] = jV[10], (bb[-jV[77]] = Hb[(0, YH[jV[15]])("V2ViU29ja2V0")]) === jV[2] || void 0 === bb[-jV[77]] ? void 0 : bb[-jV[77]][jV[70] + jV[71]]
          } catch {
            return jV[10]
          }
        })(),
        hw = ["send", "close", "addEventListener", "removeEventListener", jV[82] + jV[81] + jV[75]],
        zw = ["onmessage", "onopen", "onclos" + jV[35], "onerro" + jV[78]];
      let Xw = jV[7];
      const xw = () => {
          const bb = wb();
          bb === jV[2] || Xw || (Xw = sb((() => {
            if (mw !== jV[10] && (0, YH.N)(bb) !== mw) return jV[27];
            for (let wb = jV[1]; wb < hw[jV[0]]; wb++)
              if ((0, YH[jV[69]])(YH[jV[79]], bb, [hw[wb]])) return jV[27];
            for (let wb = jV[1]; wb < zw[jV[0]]; wb++)
              if (bb[zw[wb]] !== jV[2] && bb[zw[wb]] !== jV[10]) return jV[27];
            return jV[7]
          })))
        },
        jw = (0, YH[jV[15]])("RXZlbnQ=");
      let Kw = RM[jV[80]][jV[96]],
        rw = jV[1];
      const Rw = () => rw++ === jV[9] ? (rw = jV[1], tb(jV[7]) ? RM[jV[52]].CheckFuncHit : jV[1]) : jV[1],
        Dw = (0, YH[jV[48]])(jV[2]),
        Yw = eb[jV[0]];
      for (let lb = jV[1]; lb < Yw; lb++) {
        const bb = (0, YH[jV[69]])(YH.db, eb, [lb]);
        Dw[lb] = bb >= 99 && bb <= jV[19] ? bb : jV[1]
      }
      const Zw = (...bb) => {
          return bb[jV[0]] = jV[4], typeof bb[jV[1]] === jV[67] + jV[68] && (0, YH[jV[69]])(YH.W, bb[jV[3]], [(wb = bb[jV[1]], (0, YH.l)(YH.C, wb, []))]) !== jV[2];
          var wb
        },
        fw = new RegExp("^function dispatchEvent\\(\\) \\{\\s*\\[native code\\]\\s*\\}$", ""),
        Aw = new RegExp("^function now\\(\\) \\{\\s*\\[native code\\]\\s*\\}$", ""),
        Ww = [
          [zV["Dispat" + jV[81] + jV[75]], () => !Zw(EventTarget[jV[70] + jV[71]][jV[82] + jV[81] + jV[75]], fw)],
          [zV.PerformanceNow, () => !Zw(performance[jV[83]], Aw)],
          [zV.DateNow, () => !Zw(Date[jV[83]], Aw)]
        ],
        Jw = (0, YH[jV[48]])(jV[2]);
      let Sw = jV[1];
      const Nw = {
        stackCheck: (...bb) => {
          rV(bb[jV[0]] = jV[1], bb[jV[14]] = jV[2]);
          const wb = FV((() => (bb[jV[14]] = Ub(jV[27]), bb[jV[14]] !== jV[2])));
          var Mb, eb;
          return bb[jV[14]] !== jV[2] && Cb === jV[2] && (Mb = bb[jV[14]][jV[39]], eb = bb[jV[14]][jV[40]], Cb = (0, yp.w)(IV(Mb, eb))), wb
        },
        [jV[84] + jV[85]]: (...bb) => {
          bb[jV[0]] = jV[1];
          const wb = Pb();
          if (wb === jV[4]) return jV[4];
          if (jb[gw]) return jV[8];
          const Mb = sV((() => Hb[lw] ? jV[12] : jV[1]));
          return Mb !== jV[1] ? Mb === jV[12] ? jV[12] : jV[1] : wb === BV ? jV[1] : wb === jV[11] ? jV[11] : (hb(), eb = Function[jV[70] + jV[71]], pb = jV[91], Vb = (...bb) => (bb[jV[0]] = jV[3], bb[jV[1]].writable !== jV[27]), FV((() => {
            const bb = Object.getOwnPropertyDescriptor(eb, pb);
            return void 0 !== bb && Vb(bb)
          })) ? jV[26] : jV[1]);
          var eb, pb, Vb
        },
        indexPassReplaced: Gb,
        [jV[86] + "tSubChanged"]: (...bb) => {
          if (bb[jV[0]] = jV[1], ub === ab || Qb) return jV[7];
          const wb = ib();
          return wb !== ab && wb !== ub
        },
        dg: (...bb) => {
          rV(bb[jV[0]] = jV[1], bb[jV[35]] = Yw);
          for (let wb = jV[1]; wb < Ww[jV[0]] + Sw; wb++) {
            const Mb = wb < Ww[jV[0]] ? Ww[wb] : Jw[wb - Ww[jV[0]]];
            Mb[jV[1]] < bb[jV[35]] && sb(Mb[jV[3]]) && (bb[jV[35]] = Mb[jV[1]])
          }
          return bb[jV[35]] < Yw ? Dw[bb[jV[35]]] : jV[1]
        },
        lI: () => nb ? MM[jV[69]] : jV[38],
        [jV[87] + jV[88] + "Subs"]: (...bb) => {
          bb[jV[0]] = jV[1];
          const wb = lb[jV[95]].zB[jV[87] + jV[88]];
          return typeof wb === jV[89] && wb > jV[1] ? wb > jV[90] ? jV[90] : wb : jV[1]
        },
        ["getCom" + jV[102]]: (...bb) => {
          rV(bb[jV[0]] = jV[1], bb[jV[28]] = jV[10], Tb = jV[1]);
          for (let Mb = jV[1]; Mb < cb; Mb++) pw(Db[Mb], jV[27]);
          for (let Mb = jV[1]; Mb < Lw[jV[0]]; Mb++) jb[Lw[Mb][jV[1]]] && pw(Lw[Mb][jV[3]], jV[27]);
          const wb = sV((() => EV(atob[jV[91]](), Ib) ? jV[1] : jV[3]));
          wb === jV[3] && pw("g", jV[27]), hb();
          const eb = wb === BV ? BV : sV(((...bb) => {
            bb[jV[0]] = jV[1];
            const wb = Object.getOwnPropertyDescriptor(window, "atob");
            return wb === jV[10] ? BV : wb[jV[92]] !== jV[10] ? jV[3] : jV[1]
          }));
          eb === jV[3] && pw(jV[31], jV[27]);
          const Hb = eb === BV;
          for (let Mb = jV[1]; Mb < Iw[jV[0]] && !Hb; Mb++) jb[Iw[Mb][jV[1]]] && pw(Iw[Mb][jV[3]], jV[27]);
          const pb = Tb > cb;
          bb[jV[93]] = jV[2], cb === jV[1] && (Zb > jV[1] ? bb[jV[93]] = Yb[jV[1]] : Wb ? bb[jV[93]] = "fp" : pb || (bb[jV[93]] = jb[Ow] ? jV[76] : jb[Uw] ? jV[94] : jV[2]));
          for (let Mb = jV[1]; Mb < Cw[jV[0]] && !Hb; Mb++) jb[Cw[Mb][jV[1]]] && pw(Cw[Mb][jV[3]], jV[27]);
          const Vb = Tb,
            gb = (0, bV[jV[37]])(),
            lb = gb !== jV[2] && (0, Qw[jV[78]])(gb);
          lb && !Hb && pw(gb, jV[7]), qb && pw("ix", jV[7]), Rb && pw("il", jV[7]);
          for (let Mb = jV[1]; Mb < Zb; Mb++) pw(Yb[Mb], jV[27]);
          for (let Mb = jV[1]; Mb < Ew[jV[0]]; Mb++) jb[Ew[Mb][jV[1]]] && pw(Ew[Mb][jV[3]], jV[27]);
          jb[Fw] && pw("mk:lk", jV[27]);
          const Lb = ((...bb) => {
            bb[jV[0]] = jV[3];
            for (let wb = jV[1]; wb < sw[jV[0]]; wb++)
              if (bb[jV[1]] === sw[wb]) return sw[wb];
            return jV[2]
          })(jb[Bw]);
          if (Lb !== jV[2] && pw(Lb, jV[27]), Mb !== jV[2] && zb(Mb.emitReplaced) === jV[27] && pw("mk:em", jV[27]), Xw && pw("3s", jV[7]), YH.Z && pw("3b", jV[7]), hb(), mb && pw("3d", jV[7]), Hb && pw("3g", jV[7]), gb === jV[2] || lb || pw(gb, jV[7]), Cb !== jV[2] && pw(Cb, jV[7]), Bb === jV[2] && Mb !== jV[2]) {
            const bb = zb(Mb[jV[84] + "mMeshHitStac" + jV[95]]);
            typeof bb === jV[55] && (Bb = function(bb, wb, Mb) {
              let eb = 0;
              for (; eb < Mb && -1 === eV(bb, wb[eb]);) eb++;
              return (0, yp.k)(IV(bb, eb < Mb ? wb[eb] : null))
            }(bb, Ob, Ob[jV[0]] - jV[3]))
          }
          var Ub;
          if (Bb !== jV[2] && pw(Bb, jV[7]), Eb === jV[2] && MM[jV[31]] !== jV[2] && rV((Ub = MM[jV[31]], Eb = (0, yp.i)(tV(Ub).reader)), Fb = CV(MM[jV[31]], zb((() => MM[jV[35]] === jV[2] ? jV[2] : (0, YH.hb)(MM[jV[35]]))))), Eb !== jV[2] && pw(Eb, jV[7]), Fb !== jV[2] && pw(Fb, jV[7]), Tb === jV[1]) return jV[2];
          if (bb[jV[93]] === jV[2] && ob[jV[1]] && !(0, yp[jV[66]])(yb[jV[1]]))
            for (let Mb = jV[3]; Mb < Vb; Mb++)
              if (ob[Mb] && (0, yp[jV[66]])(yb[Mb])) {
                const bb = yb[Mb];
                for (let wb = Mb; wb > jV[1]; wb--) rV(yb[wb] = yb[wb - jV[3]], ob[wb] = ob[wb - jV[3]]);
                rV(yb[jV[1]] = bb, ob[jV[1]] = jV[27]);
                break
              } if (rV(bb[jV[22]] = jV[1], bb[jV[8]] = bb[jV[93]] === jV[2] ? jV[1] : Vb), bb[jV[8]] > jV[1] && gb !== jV[2] && lb && !Hb) {
            for (let wb = bb[jV[8]]; wb > jV[1]; wb--) rV(yb[wb] = yb[wb - jV[3]], ob[wb] = ob[wb - jV[3]]);
            rV(yb[jV[1]] = gb, ob[jV[1]] = jV[7], bb[jV[22]] = jV[3], bb[jV[8]]++)
          }
          if (bb[jV[12]] = jV[1], kb++ % jV[4] === jV[3])
            for (let Mb = jV[3]; Mb < Tb; Mb++) Vw(Mb) < Vw(bb[jV[12]]) && (bb[jV[12]] = Mb);
          const tb = yb[bb[jV[12]]];
          (ob[bb[jV[12]]] ? Mw : ww)[tb] = bw++;
          const sb = bb[jV[12]] >= bb[jV[22]] && bb[jV[12]] < bb[jV[8]];
          if (!ob[bb[jV[12]]] || tb === bb[jV[93]] || bb[jV[12]] === jV[1] && !sb) return tb === jV[75] ? (0, yp.y)(jb[tw], yp[jV[35]]) : tb;
          const Xb = (bb[jV[28]] = bb[jV[93]]) !== jV[2] && void 0 !== bb[jV[28]] ? bb[jV[28]] : yb[jV[1]];
          return Xb !== ew && rV(ew = Xb, Hw = (0, YH[jV[48]])(jV[2])), Hw[tb] ??= (0, yp[jV[75]])(tb, Xb)
        }
      };
      let vw = RM[jV[80]][jV[96]];
      const Gw = () => Kw !== RM[jV[80]][jV[96]] ? Kw : vw;
      let qw = jV[1],
        aw = jV[4],
        iw = jV[1],
        uw = jV[1];
      return {
        checks: Nw,
        checkEvent: (...bb) => {
          bb[jV[0]] = jV[3];
          try {
            const wb = Hb[jw];
            if (typeof wb === jV[67] + jV[68] && !(bb[jV[1]] instanceof wb) && !(0, YH.F)(bb[jV[1]])) return Kw = RM[jV[80]].NotEvent, jV[1];
            if (bb[jV[1]].isTrusted === jV[7]) return jV[1];
            let Mb = jV[1];
            for (const eb in bb[jV[1]]) Mb++;
            return Mb < jV[47] ? (Kw = RM[jV[80]]["FewPropertie" + jV[15]], jV[1]) : Rw()
          } catch {}
          return jV[1]
        },
        checkPadCall: () => {
          try {
            return Rw()
          } catch {
            return jV[1]
          }
        },
        usedProp: Gw,
        watchHeld: (...bb) => {
          rV(bb[jV[0]] = jV[4], bb[jV[6]] = jV[10]);
          const wb = Xb((() => {
            bb[jV[6]] = bb[jV[3]]()
          }));
          Jw[Sw++] = [bb[jV[1]], () => !wb || bb[jV[3]]() !== bb[jV[6]]]
        },
        sO: (...bb) => {
          bb[jV[0]] = jV[1];
          const wb = Gb();
          return ((...bb) => {
            if (rV(bb[jV[0]] = jV[3], bb[jV[6]] = jV[10], bb[jV[14]] = jV[10]), Mb !== jV[2]) {
              const wb = zb(Mb.Sg),
                eb = "v3" === wb ? jV[8] : "v5" === wb ? jV[9] : "v6" === wb ? jV[11] : jV[4];
              eb !== jV[4] && (aw = eb);
              const Hb = zb(Mb["inbuil" + jV[100] + jV[101]]);
              typeof Hb === jV[89] && Hb >= jV[1] && Hb <= jV[97] && (Hb | jV[1]) === Hb && (iw = Hb), rV(bb[jV[6]] = zb(Mb.reflectApplyHit), bb[jV[14]] = zb(Mb.definerHit))
            }
            const wb = bb[jV[1]] ? 15 : "11" === bb[jV[14]] ? jV[97] : "13" === bb[jV[14]] ? 13 : bb[jV[6]] !== jV[10] && bb[jV[6]] !== jV[2] ? jV[4] : "10" === bb[jV[14]] ? jV[47] : "12" === bb[jV[14]] ? 12 : jV[1];
            wb !== jV[1] && (uw = wb)
          })(wb), qw++ % 10 === jV[1] && (xw(), FV((() => !EV(Hb[pb][jV[91]][jV[91]](), Ib))) && (vw = vw === RM[jV[80]][jV[98]] ? RM[jV[80]][jV[98]] : RM[jV[80]].Fr), FV((() => !EV(Hb[pb][jV[91]](), Ib))) && (vw = RM[jV[80]][jV[98]])), {
            flags: wb ? RM[jV[52]].Butto : jV[1],
            values: [
              [RM[jV[99]].PhysicsVersion, aw],
              [RM[jV[99]]["Inbuil" + jV[100] + jV[101]], iw],
              [RM[jV[99]]["AltCom" + jV[102]], uw],
              [RM[jV[99]]["ProbeUsedPro" + jV[48]], Gw()]
            ]
          }
        }
      }
    };
    const RV = "[bloxd-wasm-client]",
      DV = "bloxdWasmDownloadFailed",
      cV = qM.d,
      YV = "boot",
      ZV = "playSources",
      fV = "wasmBuild",
      AV = "bloxd-wasm-joined",
      WV = "bloxd-wasm-first-view",
      JV = "bloxd-wasm-playable-legacy",
      SV = 1048576,
      NV = 8 * SV,
      vV = 1006,
      QV = 1e3,
      GV = "You lost connection to the server.",
      qV = "general:lostConnection",
      aV = 1048576,
      iV = 5e3,
      uV = 100,
      dV = [2e3, 1e4, 3e4],
      PV = 3e4;
    let nV = null,
      yV = null,
      oV = !1,
      TV = !1,
      kV = !1,
      bg = null,
      wg = null,
      Mg = null,
      eg = null,
      Hg = null,
      pg = null,
      Vg = null;
    const gg = new class {
      constructor(bb, wb) {
        let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => performance.now();
        this.master = bb, this.soundOn = wb, this.now = Mb, this.player = null, this.local = [], this.stopped = !1
      }
      get loaded() {
        return null !== this.player
      }
      get queued() {
        return this.local.length
      }
      preload(bb) {
        var wb;
        this.stopped || (null === (wb = this.player) || void 0 === wb || wb.preload(bb))
      }
      endSession() {
        var bb;
        null === (bb = this.player) || void 0 === bb || bb.cancelPreload(), this.freeSounds()
      }
      freeSounds() {
        var bb;
        null === (bb = this.player) || void 0 === bb || bb.freeSoundsAfterGame()
      }
      load(bb) {
        if (null !== this.player || this.stopped) return;
        this.player = bb, bb.setMaster(this.master, this.soundOn);
        const wb = this.now(),
          Mb = this.local;
        this.local = [];
        for (const Hb of Mb)
          if (!(Hb.stopped || !Hb.loop && wb - Hb.at >= 300)) try {
            this.start(Hb, bb, wb)
          } catch (eb) {
            console.error("[bloxd-wasm-client] a queued sound wouldn't start", eb)
          }
      }
      start(bb, wb, Mb) {
        const {
          name: eb,
          pos: Hb,
          ear: pb,
          maxHearDist: Vb,
          refDistance: gb,
          loop: lb,
          fade: Lb
        } = bb, Ib = wb.playGame(eb, xM(bb, Mb), Hb, pb, Vb, gb, lb);
        if (bb.sound = Ib, 1 !== bb.rate && Ib.rate(bb.rate), null !== bb.panner && Ib.setPannerAttr(bb.panner), null !== bb.moved && Ib.setPosition(bb.moved), null !== Lb && Mb - Lb.at < Lb.ms) {
          const wb = XM(this.master);
          wb > 0 ? Ib.fade(0, bb.volume * wb, Lb.at + Lb.ms - Mb) : Ib.setRelativeVolume(bb.volume)
        }
      }
      onAudioEvent(bb, wb, Mb, eb) {
        var Hb, pb;
        return null === (Hb = null === (pb = this.player) || void 0 === pb ? void 0 : pb.onAudioEvent(bb, wb, Mb, eb)) || void 0 === Hb || Hb
      }
      applyListener(bb) {
        var wb;
        null === (wb = this.player) || void 0 === wb || wb.applyListener(bb)
      }
      playGame(bb, wb, Mb, eb, Hb, pb, Vb) {
        if (this.stopped) return zM.d;
        if (this.player) return this.player.playGame(bb, wb, Mb, eb, Hb, pb, Vb);
        const gb = this.now();
        this.local = this.local.filter((bb => !bb.stopped && (bb.loop || gb - bb.at < 300)));
        const lb = {
          name: bb,
          volume: XM(wb),
          fade: null,
          pos: Mb && [Mb[0], Mb[1], Mb[2]],
          ear: eb && [eb[0], eb[1], eb[2]],
          maxHearDist: Hb,
          refDistance: pb,
          loop: Vb,
          rate: 1,
          panner: null,
          moved: null,
          at: gb,
          stopped: !1,
          sound: null
        };
        this.local.push(lb);
        const Lb = {
          stop: () => {
            var bb;
            return lb.stopped = !0, null === (bb = lb.sound) || void 0 === bb || bb.stop(), Lb
          },
          fade: (bb, wb, Mb) => {
            if (lb.sound) return lb.sound.fade(bb, wb, Mb), Lb;
            const eb = XM(this.master),
              Hb = XM(eb > 0 ? wb / eb : wb > 0 ? lb.volume : 0),
              pb = this.now(),
              Vb = xM(lb, pb);
            return lb.volume = Hb, lb.fade = Mb > 0 && Vb !== Hb ? {
              from: Vb,
              at: pb,
              ms: Mb
            } : null, Lb
          },
          rate: bb => (lb.sound ? lb.sound.rate(bb) : lb.rate = bb, Lb),
          getVolume: () => lb.sound ? lb.sound.getVolume() : lb.volume * XM(this.master),
          getRelativeVolume: () => lb.sound ? lb.sound.getRelativeVolume() : lb.volume,
          setRelativeVolume: bb => (lb.sound ? lb.sound.setRelativeVolume(bb) : (lb.volume = XM(bb), lb.fade = null), Lb),
          setPannerAttr: bb => (lb.sound ? lb.sound.setPannerAttr(bb) : lb.panner = {
            ...bb
          }, Lb),
          setPosition: bb => (lb.sound ? lb.sound.setPosition(bb) : lb.moved = [bb[0], bb[1], bb[2]], Lb)
        };
        return Lb
      }
      setMaster(bb, wb) {
        var Mb;
        this.master = bb, this.soundOn = wb, null === (Mb = this.player) || void 0 === Mb || Mb.setMaster(bb, wb)
      }
      stop() {
        var bb;
        this.stopped = !0, null === (bb = this.player) || void 0 === bb || bb.stopAll();
        for (const wb of this.local) wb.stopped = !0;
        this.local = []
      }
    }((0, eM.b)(), !0);
    let lg = {
        wasm: "unknown",
        client: String(Zw.e)
      },
      Lg = null,
      Ig = !1,
      Og = () => {};
    const Ug = new Promise((bb => {
      Og = wb => {
        Ig = !0, bb(wb)
      }
    }));
    let tg = () => {};
    const Cg = new Promise((bb => {
      tg = bb
    }));
    let Eg, Fg = null,
      Bg = null,
      sg = null,
      mg = null,
      hg = null,
      zg = null,
      Xg = null,
      xg = null,
      jg = null,
      Kg = null,
      rg = null,
      Rg = null,
      Dg = null,
      cg = null,
      Yg = null,
      Zg = null,
      fg = null,
      Ag = null,
      Wg = null,
      Jg = !1,
      Sg = null;
    const Ng = new Set,
      vg = new Set;

    function Qg(bb) {
      if (!Ng.has(bb)) {
        Ng.add(bb);
        for (const Mb of vg) try {
          Mb(bb)
        } catch (wb) {
          console.error(`${RV} a startup listener threw`, wb)
        }
      }
    }

    function Gg(bb) {
      Jg = !0, bb.isStopped || Qg("texturesIn")
    }
    let qg = 1,
      ag = -1 / 0,
      ig = -1 / 0,
      ug = -1 / 0,
      dg = !1,
      Pg = null,
      ng = !1,
      yg = !1,
      og = 0,
      Tg = null,
      kg = !1;
    const bl = {
      dropped: -1 / 0,
      pause: -1 / 0,
      backlog: -1 / 0
    };
    let wl = 0,
      Ml = 0,
      el = null,
      Hl = null,
      pl = null,
      Vl = null;
    const gl = new WeakMap;
    let ll = null,
      Ll = null,
      Il = !1,
      Ol = null,
      Ul = null,
      tl = null,
      Cl = null,
      El = null,
      Fl = null,
      Bl = 0;
    const sl = new Set;
    let ml = 0,
      hl = 0,
      zl = 0,
      Xl = null,
      xl = null,
      jl = null,
      Kl = null,
      rl = -1 / 0,
      Rl = null;
    const Dl = new Set;
    let cl = !1,
      Yl = null;
    const Zl = new Map,
      fl = new Set;
    let Al = !1;
    const Wl = {
      adapter: null,
      boundAtMs: null,
      indirectHangs: null,
      restoresSkipped: null
    };
    let Jl = null,
      Sl = () => [0, 0],
      Nl = () => {},
      vl = () => {},
      Ql = null,
      Gl = null;
    const ql = new class {
      constructor(bb) {
        this.reached = bb, this.next = 1
      }
      observe(bb) {
        if (!(bb < this.next)) {
          for (; this.next <= bb;) this.next *= 2;
          this.reached(bb)
        }
      }
    }((bb => {
      console.warn(`${RV} chunk cancels from the server this session: ${bb}`)
    }));
    let al = 1,
      il = null,
      ul = null,
      dl = null,
      Pl = null,
      nl = null,
      yl = !1,
      ol = !1,
      Tl = 0,
      kl = null,
      bL = !1,
      wL = null,
      ML = null;
    const eL = new Ke.c(new dM.d);
    let HL = "",
      pL = null,
      VL = null,
      gL = !1;
    const lL = new class {
      constructor(bb) {
        this.iI = bb, this.lossPending = !1, this.undrawnSinceMs = null, this.lastFrameMs = 0, this.shown = !1, this.dg = !1
      }
      isShown() {
        return this.shown
      }
      deviceLost() {
        this.lossPending = !0
      }
      frame(bb, wb, Mb) {
        (0, LM.b)(bb) && (this.lossPending = !1);
        const eb = Mb - this.lastFrameMs;
        this.lastFrameMs = Mb, this.lossPending && wb && (0, LM.g)(bb) ? (null === this.undrawnSinceMs || eb > 1e3) && (this.undrawnSinceMs = Mb) : this.undrawnSinceMs = null, this.show(this.dg || null !== this.undrawnSinceMs && Mb - this.undrawnSinceMs >= 2e3)
      }
      hold(bb) {
        this.dg = bb, this.show(bb || this.shown)
      }
      stop() {
        this.dg = !1, this.lossPending = !1, this.undrawnSinceMs = null, this.show(!1)
      }
      show(bb) {
        bb !== this.shown && (this.shown = bb, this.iI(bb))
      }
    }((bb => {
      lb.k.iI(Cb.j, bb)
    }));
    let LL = !1;
    const IL = new class {
        constructor(bb) {
          let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : CM.k;
          this.iI = bb, this.hidden = wb, this.countdown = null, this.stuckJoins = 0, this.stuck = null
        }
        join(bb) {
          this.end(), this.countdown = new CM.e(15e3, (() => {
            this.countdown = null, this.stuckJoins++, this.show(this.stuckJoins > 2 ? "reload" : "retry")
          }), (() => this.hidden() || !bb()))
        }
        shown() {
          this.stuckJoins = 0, this.end()
        }
        end() {
          var bb;
          null === (bb = this.countdown) || void 0 === bb || bb.stop(), this.countdown = null, this.show(null)
        }
        show(bb) {
          bb !== this.stuck && (this.stuck = bb, this.iI(bb))
        }
      }((bb => {
        lb.k.iI(Cb.e, bb)
      })),
      OL = new class {
        constructor(bb) {
          let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => performance.now();
          this.bO = bb, this.now = wb, this.lostAtMs = null, this.asked = !1, this.lastRestore = null, this.watched = new WeakSet
        }
        watch(bb, wb) {
          this.watched.has(bb) || (this.watched.add(bb), bb.addEventListener("webglcontextlost", (() => {
            wb() && this.contextLost()
          })), bb.addEventListener("webglcontextrestored", (() => {
            wb() ? this.contextRestored() : (this.take(), this.lastRestore = null)
          })))
        }
        frame(bb, wb) {
          (0, LM.g)(bb) && wb && null !== this.lostAtMs && this.now() - this.lostAtMs >= 1e3 && (this.asked = !0)
        }
        contextLost() {
          null === this.lostAtMs && (this.lostAtMs = this.now(), this.asked = !1)
        }
        unheldRestore(bb) {
          const wb = this.lastRestore;
          return null !== wb && bb - wb.atMs < 3e4 ? wb : null
        }
        contextRestored() {
          const bb = this.take();
          if (null === bb) this.lastRestore = null;
          else {
            var wb, Mb;
            const eb = this.unheldRestore(bb.lostAtMs);
            this.lastRestore = {
              atMs: this.now(),
              firstLostAtMs: null !== (wb = null === eb || void 0 === eb ? void 0 : eb.firstLostAtMs) && void 0 !== wb ? wb : bb.lostAtMs,
              asked: null !== (Mb = null === eb || void 0 === eb ? void 0 : eb.asked) && void 0 !== Mb && Mb || bb.asked
            };
            const Hb = bb.asked ? "restore_context" : "natural";
            this.bO(`webgl_restored_${Hb}_${bb.delay}`, `WebGL2 context restored (${Hb}, wasm)`)
          }
        }
        gaveUp() {
          const bb = this.take();
          if (null !== bb) {
            var wb;
            const Mb = this.unheldRestore(bb.lostAtMs),
              eb = null === Mb ? bb.delay : (0, IM.l)(this.now() - Mb.firstLostAtMs),
              Hb = bb.asked || null !== (wb = null === Mb || void 0 === Mb ? void 0 : Mb.asked) && void 0 !== wb && wb ? "restore_tried" : "restore_untried";
            this.bO(`webgl_rejoin_${Hb}_${eb}`, "WebGL2 context not restored: rejoining (wasm)")
          }
          this.lastRestore = null
        }
        take() {
          const bb = this.lostAtMs;
          return null === bb ? null : (this.lostAtMs = null, {
            lostAtMs: bb,
            delay: (0, IM.l)(this.now() - bb),
            asked: this.asked
          })
        }
      }(Oe.reportRenderRecovery),
      UL = new class {
        constructor(bb) {
          var wb, Mb, eb, Hb;
          this.deps = bb, this.firstLostAtMs = null, this.lastLostAtMs = 0, this.heldReload = null, this.generation = 0, this.watched = new WeakSet, this.pageHideWatched = !1, this.storage = void 0, this.now = void 0, this.wallNow = void 0, this.setTimer = void 0, this.storage = null !== (wb = bb.storage) && void 0 !== wb ? wb : UM.j, this.now = null !== (Mb = bb.now) && void 0 !== Mb ? Mb : performance.now.bind(performance), this.wallNow = null !== (eb = bb.wallNow) && void 0 !== eb ? eb : Date.now, this.setTimer = null !== (Hb = bb.setTimer) && void 0 !== Hb ? Hb : (bb, wb) => {
            setTimeout(bb, wb)
          }
        }
        watch(bb, wb) {
          this.watched.has(bb) || (this.watched.add(bb), bb.addEventListener("webglcontextlost", (() => {
            wb() && this.lost()
          })), bb.addEventListener("webglcontextrestored", (() => {
            this.restored()
          })), this.pageHideWatched || (this.pageHideWatched = !0, window.addEventListener("pagehide", (() => {
            this.pageHide()
          })), document.addEventListener("visibilitychange", (() => {
            this.pageHide(!document.hidden)
          }))))
        }
        lost() {
          const bb = this.now();
          null === this.firstLostAtMs && (this.firstLostAtMs = bb, this.writeMarker({
            lostAt: this.wallNow()
          })), this.lastLostAtMs = bb, null === this.heldReload && this.generation++
        }
        restored() {
          if (null === this.firstLostAtMs || null !== this.heldReload) return;
          const bb = this.now(),
            wb = ++this.generation;
          this.setTimer((() => {
            wb === this.generation && this.end("restored", bb)
          }), 3e4)
        }
        reload(bb) {
          let wb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (null !== this.heldReload) return;
          if (null === this.firstLostAtMs && (wb ? this.lastLostAtMs = this.now() : this.lost()), this.deps.probe()) return this.end("cleared_reload"), void bb();
          this.heldReload = bb, this.deps.hold(!0);
          const Mb = ++this.generation,
            eb = () => this.lastLostAtMs + pM.d + 5e3,
            Hb = () => {
              this.setTimer(pb, Math.max(0, Math.min(5e3, eb() - this.now())))
            },
            pb = () => {
              Mb === this.generation && (this.deps.probe() ? this.release("cleared_reload", bb) : this.now() >= eb() ? this.release("gave_up", bb) : Hb())
            };
          Hb()
        }
        releaseNow() {
          null !== this.heldReload && this.release("gave_up", this.heldReload)
        }
        forget() {
          null !== this.firstLostAtMs && this.clear()
        }
        pageHide() {
          let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          if (null === this.firstLostAtMs) return;
          const wb = (0, OM.f)(this.storage);
          null !== wb && this.writeMarker(bb ? {
            lostAt: wb.lostAt
          } : {
            ...wb,
            leftAt: this.wallNow()
          })
        }
        release(bb, wb) {
          this.end(bb), wb()
        }
        end(bb) {
          let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.now();
          const Mb = this.firstLostAtMs;
          if (this.clear(), null !== Mb) {
            const {
              code: eb,
              message: Hb
            } = (0, OM.h)(bb, wb - Mb);
            this.deps.bO(eb, Hb)
          }
        }
        clear() {
          this.firstLostAtMs = null, this.generation++, null !== this.heldReload && (this.heldReload = null, this.deps.hold(!1)), this.storage.removeItem(OM.c)
        }
        writeMarker(bb) {
          this.storage.setItem(OM.c, bb)
        }
      }({
        bO: Oe.reportRenderRecovery,
        probe: () => tM("rust_webgl1" === (0, Up.D)()),
        hold: bb => {
          lL.hold(bb)
        }
      });
    let tL = !1,
      CL = !0,
      EL = null,
      FL = !1,
      BL = !1;

    function sL() {
      if (null === il) return null;
      const {
        canvas: bb,
        backend: wb
      } = il;
      return {
        canvas: bb,
        renderer: hM.b[wb]
      }
    }

    function mL() {
      return Mg ??= Promise.all([Mb.e(177), Mb.e(91), Mb.e(225), Mb.e(158), Mb.e(246), Mb.e(245), Mb.e(244), Mb.e(223), Mb.e(50), Mb.e(161), Mb.e(243), Mb.e(72)]).then((() => Mb(45163))).then((bb => (wg = bb, Object.assign(globalThis, {
        bloxdPreviewPage: bb.pagePreviews()
      }), bb)), (bb => {
        throw Mg = null, bb
      })), Mg
    }

    function hL() {
      return bg ??= Mb.e(70).then((() => Mb(54868))).catch((bb => {
        throw bg = null, new ib.e(bb)
      })), bg
    }
    class zL {
      constructor() {
        this.host = null
      }
      open(bb) {
        return null !== this.host ? bb(this.host) : mL().then((wb => (this.host ??= new wb.WasmPreviewHost(wb.pagePreviews()), bb(this.host))))
      }
      openMob(bb) {
        return this.open((wb => wb.openMob(bb)))
      }
      openPet(bb) {
        return this.open((wb => wb.openPet(bb)))
      }
      openMobLineup(bb) {
        return this.open((wb => wb.openMobLineup(bb)))
      }
      openCharacter(bb, wb) {
        return this.open((Mb => Mb.openCharacter(bb, wb)))
      }
    }

    function XL() {
      kV || (kV = !0, Vp.f.setHost(new zL), (0, Ee.m)(), Mp.i.setFollower(AI), Object.assign(globalThis, {
        bloxdPreviews: Vp.f
      }))
    }

    function xL() {
      mL().then((bb => {
        bb.pagePreviews().prefetch()
      }), (() => {}))
    }

    function jL() {
      let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      if (TV) return;
      TV = !0, tL = "play" === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "shell"), CL = !tL, console.info(`${RV} starting`), oV || (oV = !0, (0, Cb.U)(new BM(PL, MI, sL)), (0, Ub.l)(new sM), (0, Cb.Q)(new mM((() => performance.now() - ag))), (0, Cb.I)()), tL && lb.k.subscribe("appManagerUpdated|gameState", dL), XL(), (0, Oe.setCrashScreen)(BO), (0, iH.k)(), (0, MM.h)();
      let wb = null;
      try {
        wb = xV("q94l226iig", (() => {
          var bb, wb;
          return null !== (bb = null === (wb = Fg) || void 0 === wb ? void 0 : wb.ws) && void 0 !== bb ? bb : null
        }), bb, "jckntermls")
      } catch (Hb) {
        console.error(`${RV} probes`, Hb)
      }
      const eb = function() {
        const bb = (0, zH.n)(),
          wb = (0, zH.g)();
        let Mb = !1;
        return eb => {
          bb && !Mb && (Mb = !0, (0, Oe.reportStaleBuildReload)(bb, wb, eb))
        }
      }();
      JI(), tL || function() {
        const bb = function(bb) {
          var wb;
          const Mb = new URLSearchParams(bb),
            eb = Mb.get("game");
          return eb ? {
            game: eb,
            lobby: null !== (wb = Mb.get("lobby")) && void 0 !== wb ? wb : null
          } : null
        }(window.location.search);
        if (bb) return (0, fw.j)(bb.game) && JI().request(), void RL(bb.game, bb.lobby);
        const wb = new URLSearchParams(window.location.search).get("ws");
        if (!wb) return;
        Ug.then((bb => {
          bb && async function(bb, wb) {
            try {
              await (0, ib.p)(bb), Ol = gI(new WebSocket(wb)), null !== Ol && ep.d.setGame(null), KL()
            } catch (Hb) {
              console.error(`${RV} ?ws=${wb} did not attach`, Hb)
            }
          }(bb, wb)
        }))
      }(), async function(bb) {
        var wb, eb, pb, Vb, gb, Lb;
        if ("undefined" === typeof WebAssembly) return XI("noWebAssembly", "unsupported", "This browser has no WebAssembly"), null;
        const Ib = (0, Up.O)();
        let Ub = await (0, Up.J)();
        if (jI(Ub) && function() {
            const bb = Date.now();
            return !(0, iw.p)((0, iw.r)(), rI, bb, iw.b) && (0, iw.o)(rI, bb, iw.b)
          }()) {
          const bb = RI(Ub, Ib),
            wb = await async function(bb) {
              let {
                decline: wb,
                detail: Mb,
                details: eb
              } = bb;
              console.warn(`${RV} ${Mb}: waiting for a WebGL context`);
              const Hb = performance.now(),
                pb = await Fp({
                  sleep: (bb, wb) => (0, kw.c)(bb, wb).catch((() => {})),
                  repick: async () => {
                    const bb = await (0, Up.P)();
                    return jI(bb) ? null : {
                      Vt: bb
                    }
                  },
                  showScreen: bb => {
                    const Mb = (0, jw.k)("blockedAfterLoss" === wb ? "graphicsLost" : "noContext");
                    return Dw({
                      ...Mb,
                      cancel: tL ? Mb.cancel : null
                    }, bb)
                  }
                }),
                Vb = String(Math.round(performance.now() - Hb));
              if (null === pb.picked) {
                const bb = pb.gaveUp ? "waited" : "left";
                return (0, Oe.reportLoadRecovery)({
                  step: "noContext",
                  outcome: "gaveUp",
                  tries: pb.tries,
                  detail: `${Mb}; ${bb}`,
                  details: {
                    ...eb,
                    waitedMs: Vb
                  }
                }), pb.gaveUp ? {
                  gaveUp: !0
                } : ((0, Ow.f)("/"), null)
              }
              const {
                Vt: gb
              } = pb.picked;
              if (!(0, qM.q)(gb)) {
                var lb;
                const bb = null !== (lb = null === gb || void 0 === gb ? void 0 : gb.backend) && void 0 !== lb ? lb : "none";
                (0, Oe.reportLoadRecovery)({
                  step: "noContext",
                  outcome: "recovered",
                  tries: pb.tries,
                  detail: Mb,
                  details: {
                    ...eb,
                    backend: bb,
                    waitedMs: Vb
                  }
                }), null !== gb && (0, Up.N)(gb.backend)
              }
              return pb.picked
            }(bb);
          if (null === wb) return null;
          if ("gaveUp" in wb) return (0, Oe.setCrashBackend)("unsupported"), XI("browser", bb.decline, bb.detail, {
            ...bb.details,
            afterWait: "true"
          }), null;
          Ub = wb.Vt
        }
        const tb = await async function(bb, wb) {
          const Mb = (0, qM.q)(bb) ? RI(bb, wb) : null;
          if (null === Mb || void 0 === Mb || !Mb.retries) return bb;
          console.warn(`${RV} ${Mb.detail}: picking again in ${xI} ms`), await new Promise((bb => {
            setTimeout(bb, xI)
          }));
          const eb = await (0, Up.P)();
          if (!(0, qM.q)(eb)) {
            var Hb;
            (0, Oe.reportNoBackendRetry)("reprobed", Mb.decline, Mb.detail, {
              ...Mb.details,
              backend: null !== (Hb = null === eb || void 0 === eb ? void 0 : eb.backend) && void 0 !== Hb ? Hb : "none"
            }), null !== eb && (0, Up.N)(eb.backend)
          }
          return eb
        }(Ub, Ib);
        if ((0, Oe.setCrashBackend)((0, qM.q)(tb) ? "unsupported" : null !== (wb = null === tb || void 0 === tb ? void 0 : tb.backend) && void 0 !== wb ? wb : "none"), (0, qM.q)(tb)) return function(bb) {
          let {
            decline: wb,
            detail: Mb,
            details: eb,
            retries: Hb
          } = bb;
          if (Hb && (0, aw.u)()) return (0, Oe.reportNoBackendRetry)("reload", wb, Mb, eb), void DI(`${Mb}, again after ${xI} ms`);
          XI("browser", wb, Mb, Hb ? {
            ...eb,
            afterReload: String(aw.F)
          } : eb)
        }(RI(tb, Ib)), null;
        if ((0, Ap.m)("render")) try {
          const {
            startRenderDebug: bb
          } = await Promise.all([Mb.e(91), Mb.e(57)]).then((() => Mb(5573)));
          bb(tb)
        } catch (zw) {
          console.warn("The render debug topic didn't load", zw)
        }
        if ((0, Ap.m)("renderlite")) try {
          const {
            startRenderLite: bb
          } = await Promise.all([Mb.e(307), Mb.e(58)]).then((() => Mb(54879)));
          dl = bb(tb)
        } catch (zw) {
          console.warn("The renderlite debug topic didn't load", zw)
        }
        if ((0, Ap.m)("renderprobe")) try {
          const {
            startRenderProbe: bb
          } = await Mb.e(59).then((() => Mb(54887)));
          bb(tb)
        } catch (zw) {
          console.warn("The renderprobe debug topic didn't load", zw)
        }
        if ("webgl" === (null === tb || void 0 === tb ? void 0 : tb.backend) && tL && "address" !== aw.A.reason) {
          const bb = sH(tb);
          null !== bb && (0, uw.j)(bb)
        }
        const Cb = null !== (eb = null === tb || void 0 === tb ? void 0 : tb.backend) && void 0 !== eb ? eb : null;
        Wl.adapter = null !== (pb = null === tb || void 0 === tb ? void 0 : tb.adapter) && void 0 !== pb ? pb : null, Wl.boundAtMs = null, Wl.indirectHangs = null, Wl.restoresSkipped = null;
        const Eb = !(0, qM.hb)();
        null === tb || (0, qM.D)(tb.reason) || console.info(`${RV} drawing with ${tb.backend}: ${tb.reason}`);
        const Fb = (0, Up.B)();
        Db("previews"), tg(!0), (0, ib.D)((bb => {
          try {
            null !== Cb && (Ql = bb.startSkyFeed, ZI(), function(bb) {
              var wb, Mb;
              Sl = bb.rasterText, tl = bb.setTextLocalPlayer, bb.setTextLocalPlayer(null !== (wb = null === (Mb = Ul) || void 0 === Mb ? void 0 : Mb.info.playerDbId) && void 0 !== wb ? wb : null), Nl = bb.drainTextRerasters, vl = bb.loadTextIcons, bb.warmText((() => yl)), bb.textChanged(), yl && setTimeout(vl, 0)
            }(bb), Gl = bb.startShellAnalytics, qI())
          } finally {
            BL || (Pl = bb.followMenuPrefs({
              setSoundPrefs: HI,
              setEnvPrefs: pI,
              setUiPrefs: eI,
              setLookPrefs: VI
            }))
          }
        })), (0, ib.s)(gg).catch((bb => {
          console.warn(`${RV} the game code did not load: a join asks again`, bb)
        }));
        const Bb = (0, Up.j)(tb);
        let sb, mb;
        Bb.catch((() => {})), "loading" === (0, Jw.v)() && (Yb(), Db("load"));
        try {
          sb = function(bb) {
            const wb = null !== bb && void 0 !== bb ? bb : document.createElement("canvas");
            wb.id = "wasm-game-canvas", OL.watch(wb, CO), UL.watch(wb, CO),
              function(bb) {
                if (zO.has(bb)) return;
                zO.add(bb), bb.addEventListener("webglcontextlost", (() => {
                  var bb;
                  const wb = null !== Vl && LO(),
                    Mb = null === (bb = window.bloxdRenderDebug) || void 0 === bb ? void 0 : bb.vaos;
                  setTimeout((() => {
                    var bb, eb, Hb, pb, Vb;
                    null === (bb = dl) || void 0 === bb || bb.glContextLost(wb, Mb, null !== (eb = null !== (Hb = !1 === (null === (pb = eg) || void 0 === pb ? void 0 : pb.isStopped) ? eg.addDistanceInUse() : null) && void 0 !== Hb ? Hb : null === (Vb = hO()) || void 0 === Vb ? void 0 : Vb.horizontal) && void 0 !== eb ? eb : null)
                  }), 0)
                }))
              }(wb), (0, Xp.n)();
            const Mb = (0, FM.e)(),
              eb = (0, FM.g)(Mb);
            wb.style.cssText = "position:absolute;top:0;left:0;display:block;touch-action:none;outline:none;background:#000", (0, zp.d)(wb, eb), (0, FM.c)(wb, Mb), wb.width = eb.bufferWidth, wb.height = eb.bufferHeight;
            const Hb = document.createElement("div");
            return Hb.style.cssText = "position:fixed;top:0;right:0;bottom:0;left:0;overflow:hidden", Hb.append(wb), nL(Hb, CL), EL = Hb, document.body.append(Hb), wb
          }(null === Cb ? null : await (await mL()).pagePreviews().beginSession())
        } catch (Hb) {
          return Zb("fetch"), await AO({
            site: fV,
            error: Hb
          }, (() => {
            (0, Oe.showUnsupported)((0, jw.p)("fetch"), qp.e.fetch, `the previews did not load: ${String(Hb)}`)
          })), null
        }
        Yb(), Db("loading" === (0, Jw.v)() ? "load" : "build");
        try {
          mb = await Bb
        } catch (Hb) {
          return Zb("fetch"), await AO({
            site: fV,
            error: Hb
          }, (() => {
            (0, Oe.showUnsupported)((0, jw.p)("fetch"), qp.e.fetch, `the ${null!==Cb&&void 0!==Cb?Cb:"client"} build did not load: ${String(Hb)}`)
          })), null
        }
        const hb = (0, Up.f)(),
          Xb = !hb && !0 !== UM.j.getItem(DV),
          xb = !hb && "loading" === (0, Jw.v)();
        Db("load"), await (0, tp.c)(mb, {
          reloadFailedDownload: Xb
        }), xb && !(0, Jw.H)() && await (0, tp.c)(mb, {
          reloadFailedDownload: Xb
        });
        let jb = !1,
          Kb = !1;
        const rb = (0, Jw.q)();
        if (!(0, Jw.H)() && ("compile" === rb || "instantiate" === rb) && (0, Jw.B)()) {
          const bb = (0, Jw.h)();
          console.warn(`${RV} the wasm client did not ${rb} here (${bb}): loading it again`);
          const wb = await async function(bb) {
            let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Cp,
              Mb = !1,
              eb = 0;
            for (const Hb of wb) {
              if (!bb.retryable()) break;
              if (bb.outOfMemory() && (Mb = !0, "spent" === bb.stepDownMemory())) return {
                recovered: !1,
                tries: eb,
                outOfMemory: Mb,
                spent: !0
              };
              if (await bb.sleep(Hb), eb++, await bb.retry()) return {
                recovered: !0,
                tries: eb,
                outOfMemory: Mb,
                spent: !1
              }
            }
            return Mb ||= bb.outOfMemory(), {
              recovered: !1,
              tries: eb,
              outOfMemory: Mb,
              spent: !1
            }
          }({
            sleep: bb => (0, kw.c)(bb),
            outOfMemory: () => (0, YM.e)((0, Jw.m)()),
            retryable: Jw.B,
            stepDownMemory: () => "instantiate" !== (0, Jw.q)() || !cI() || (0, ge.r)() ? "none" : "halve" === (0, ge.p)() ? "halved" : "spent",
            retry: tp.g
          });
          jb = wb.outOfMemory, Kb = wb.spent;
          const {
            tries: Mb,
            recovered: eb
          } = wb, Hb = eb ? bb : (0, Jw.h)();
          (0, Oe.reportLoadRecovery)({
            step: "load",
            stage: rb,
            oom: jb,
            outcome: eb ? "recovered" : "gaveUp",
            tries: Mb,
            detail: Hb
          })
        }
        zb ??= performance.now();
        const Rb = lg;
        if (!(0, Jw.H)()) {
          (0, Jw.E)() && "compile" !== rb && "instantiate" !== rb && UM.j.setItem(DV, !0);
          const bb = (0, Jw.q)();
          if (Zb("instantiate" === bb || null === bb ? `instantiate_${cb((0,Jw.m)())}` : bb), "call" === bb) FO({
            site: iM.z,
            error: (0, Jw.m)(),
            header: null
          }, Rb);
          else {
            const wb = null !== bb && void 0 !== bb ? bb : "instantiate",
              Mb = () => {
                (0, Oe.showUnsupported)((0, jw.p)(wb), qp.e[wb], (0, Jw.h)())
              },
              eb = "compile" === rb || "instantiate" === rb ? rb : bb;
            if ("compile" === eb || "instantiate" === eb) {
              const bb = jb || (0, YM.e)((0, Jw.m)());
              if (tL && (bb && cI() ? !Kb && "spent" !== (0, ge.p)(Date.now(), !0) : (0, aw.u)())) {
                const wb = (0, Jw.h)();
                return (0, Oe.reportLoadReload)((0, jw.p)(eb), qp.e[eb], wb), DI(`the wasm client ${bb?"ran out of memory to":"did not"} ${eb} here (${wb})`), null
              }(0, Oe.showUnsupported)(bb ? "memory" : (0, jw.p)(eb), qp.e[eb], (0, Jw.h)())
            } else if ("fetch" === wb) {
              const bb = [mb.url().href, Gw.h.url().href];
              await AO({
                site: fV,
                error: (0, Jw.h)(),
                urls: bb
              }, (() => {
                Mb()
              }))
            } else Mb()
          }
          return null
        }(0, Nw.I)(mb.url()) && (0, Oe.reportUnstreamedCoreLoad)();
        const fb = (0, Jw.w)();
        let Ab, Wb = Rb;
        Db("core");
        try {
          Wb = {
            ...Rb,
            wasm: fb.vO()
          };
          const {
            vF: bb
          } = mb.bindings, wb = bb.XHb();
          if (wb !== RM.x) return Zb("core_other"), FO({
            site: iM.c,
            error: `core ABI ${wb}, page ABI ${RM.x}`,
            header: null
          }, Wb), null;
          const [Mb, eb] = (0, RM.xe)();
          Ab = new bb(Mb, eb)
        } catch (Hb) {
          return Zb(`core_${cb(Hb)}`), FO({
            site: iM.c,
            error: Hb,
            header: null
          }, Wb), null
        }
        Zb("ok"), lg = Wb, Lg = mb.bindings;
        const Jb = new iM.h(Ab, Jw.t, {
          onCrash: bb => {
            var wb;
            null === (wb = dl) || void 0 === wb || wb.crashed(bb),
              function(bb, wb, Mb, eb) {
                if ("webgpu" !== wb || (0, Up.e)()) return !1;
                const Hb = function(bb) {
                  if (bb.site === iM.f && (0, qM.s)(bb.error)) return "frames_refused";
                  return bb.site === cV && (0, qM.v)(bb.error) ? "start_failed" : null
                }(bb);
                if (null === Hb) return !1;
                if (null !== (0, qM.db)(Hb, eb, (0, aM.d)(bb.error))) return (0, Oe.countRenderLost)(Hb, bb.error, Wl), !1;
                return pM.C.reloaded(null, !1), (0, Oe.reportRenderReload)("webgpu", "start_failed" === Hb ? 0 : 1, Mb, {
                  cause: Hb,
                  error: bb.error,
                  context: Wl,
                  session: XO(null)
                }), yI(), !0
              }(bb, Cb, Wb, Eb) || FO(bb, Wb)
          },
          onNetEvent: dI,
          onReconnectGrace: mI,
          onJoinPreloadEnded: sI,
          onCoreErrors: (bb, wb) => {
            var Mb, eb;
            bb.some((bb => {
              let {
                code: wb
              } = bb;
              return wb === RM.I.RenderDeviceLost
            })) && ((0, Up.v)(), (0, VM.c)(), lL.deviceLost(), "webgpu" === Cb && ((0, aM.f)(Jl), pM.C.lost())), null === (Mb = dl) || void 0 === Mb || Mb.coreErrors(bb);
            const Hb = () => {
              (0, Oe.reportCoreErrors)(bb, wb, Wb, ((bb, wb) => {
                var Mb;
                return bb === RM.I.EnvUnknownSky ? (0, Oe.unknownSkyWords)(dw.c.get("skyBox")) : bb === RM.I.RenderDeviceLost ? (0, Oe.deviceLossWords)(wb, Wl.boundAtMs) : null === (Mb = Jl) || void 0 === Mb ? void 0 : Mb.xHb(bb, wb)
              }))
            };
            bb.some((bb => {
              let {
                code: wb
              } = bb;
              return wb === RM.I.EnvUnknownSky
            })) ? queueMicrotask(Hb) : Hb(), null === (eb = Sg) || void 0 === eb || eb.coreErrors(bb)
          },
          onRenderReload: (bb, wb, Mb) => {
            ! function(bb, wb, Mb, eb, Hb, pb) {
              var Vb;
              if ((0, Up.e)()) return;
              const gb = wb === RM.Vc.WEBGPU,
                lb = eb === RM.Vc.PIPELINE_FAILED ? "pipeline_failed" : "lost",
                Lb = eb === RM.Vc.RESTORE_LOST,
                Ib = gb && (0, pM.o)(Wl.adapter, Mb, "lost" === lb, Lb),
                Ub = (0, aM.l)(Jl);
              null === (Vb = dl) || void 0 === Vb || Vb.reload(gb, Mb, lb, null === Ub || void 0 === Ub ? void 0 : Ub.message);
              const tb = gb ? (0, qM.db)(lb, Hb, Ub) : null;
              if (null !== tb) {
                (0, Oe.countRenderLost)(lb, Ub, Wl);
                const wb = void 0 === Ub ? "" : ` (${Ub.message})`;
                return void bb.crash(Oe.RENDER_RELOAD_SITE, new Error(`${(0,Oe.renderReloadMessage)("webgpu",lb,Mb)} and ${tb}${wb}`))
              }
              const Cb = gb ? "webgpu" : "webgl1" === pb ? "webgl1" : "webgl";
              "lost" === lb && (0, Up.v)();
              if (!gb) {
                if (OL.gaveUp(), !(0, aw.u)()) {
                  (0, Oe.countRenderLost)(lb, Ub, Wl);
                  const wb = void 0 === Ub ? "" : ` (${Ub.message})`;
                  return void bb.crash(Oe.RENDER_RELOAD_SITE, new Oe.GraphicsLostError(`${(0,Oe.renderReloadMessage)(Cb,lb,Mb)} and ${aw.f}${wb}`))
                }
                console.warn(`${RV} the GL render device's recovery gave up: the tab reloads once more onto the wasm client`)
              }(0, Oe.reportRenderReload)(Cb, Mb, lg, {
                from: "game",
                cause: lb,
                restoreLost: Lb,
                adapterRemembered: Ib,
                error: Ub,
                context: Wl,
                session: XO(bb.sunShadowsHeld())
              }), (0, Up.q)();
              const Eb = (0, Ob.g)();
              let Fb = !1;
              const Bb = () => {
                Fb || (Fb = !0, gb && "lost" !== lb ? yI() : UL.reload(yI, gb))
              };
              let sb = null;
              const mb = (0, Ob.q)((() => {
                null !== sb && clearTimeout(sb), Eb ? setTimeout(Bb, nI) : Bb()
              }));
              !Fb && Eb && (sb = setTimeout((() => {
                mb(), Bb()
              }), PI))
            }(Jb, bb, wb, Mb, Eb, Cb)
          },
          onEnvEvent: bb => {
            var wb;
            bb.kind === RM.W.SkyImages ? null === (wb = Zg) || void 0 === wb || wb.onEvent(bb.payload) : bb.kind === RM.W.EnvLighting && (fg = 1 === bb.payload[0])
          },
          onImages: bb => {
            var wb;
            null === (wb = Ag) || void 0 === wb || wb.onEvent(bb)
          },
          onModelRequest: bb => {
            var wb;
            null === (wb = Dg) || void 0 === wb || wb.request(bb)
          },
          onModelTaken: (bb, wb) => {
            var Mb;
            null === (Mb = Dg) || void 0 === Mb || Mb.taken(bb, wb)
          },
          onTerrainTexturesWanted: () => {
            queueMicrotask((() => {
              ! function(bb, wb) {
                const Mb = Vg;
                if (null === Mb || bb.isStopped) return;
                Mb.restore((bb => {
                  (0, Oe.reportTerrainTextureFailure)(bb, wb)
                })).then((wb => {
                  !1 !== wb || bb.isStopped ? !0 === wb && console.info(`${RV} terrain textures handed over again after the renderer lost them`) : console.warn(`${RV} the terrain textures couldn't be handed over again: the terrain draws blank`)
                }))
              }(Jb, Wb)
            }))
          },
          onKeepAlive: bb => {
            const wb = null === Vl ? void 0 : gl.get(Vl);
            void 0 !== wb && fH(wb, bb)
          },
          onSends: () => {
            ! function(bb) {
              const wb = performance.now();
              if (bb.forEachNetOut(UO), lO(bb), (0, iM.P)(bb, {
                  worldgen: sg,
                  mesh: hg
                }), null !== ul) try {
                ul.sendsWent(bb, wb, performance.now())
              } catch (Hb) {
                uI(Hb)
              }
            }(Jb)
          }
        });
        if (eg = Jb, null === (Vb = EM.e.wasmNetReady) || void 0 === Vb || Vb.call(EM.e, (() => Jb.isStopped ? 0 : Jb.netKeptFrames)), null !== bb) {
          Jb.setAntiCheatProbes(mV(Jw.t, bb.checks)), bb.watchHeld(zV.CoreFrame, (() => Jb.frame)), bb.watchHeld(zV.GlueFrame, (() => Ab.frame));
          const wb = function(bb, wb) {
            const Mb = new hV(wb);
            let eb = !1;
            Mb.sO(bb.sO());
            const Hb = (0, YH._)((() => {
              Mb.sO(bb.sO())
            }), XV);
            let pb = 6 * (0, YH.Q)() | 0;
            const Vb = () => {
              ++pb < 6 || (pb = 0, bb.checks.stackCheck() && (eb = !0))
            };
            (0, kp.i)(Vb);
            const gb = () => {
              const wb = bb.checkPadCall();
              0 !== wb && Mb.setFlags(wb)
            };
            return (0, Tp.i)(gb), {
              onSend: Vb,
              beforeFrame: () => {
                eb && Mb.originStackHit() && (eb = !1)
              },
              onEvent: wb => {
                const eb = bb.checkEvent(wb);
                Mb.value(RM.i.ProbeUsedProp, bb.usedProp()), 0 !== eb && Mb.setFlags(eb)
              },
              stop: () => {
                (0, YH.$)(Hb), (0, kp.h)(Vb), (0, Tp.e)(gb)
              }
            }
          }(bb, ((bb, wb, Mb) => {
            let eb = !1;
            return rO(Jb, (() => {
              eb = Jb.rings.input.writeRecord(RM.qb.AntiCheat, bb, wb, Mb, 0)
            })), eb
          }));
          Jb.isStopped ? wb.stop() : rg = wb
        }
        nV = (bb, wb, Mb) => Jb.rings.cmd.writeCmd(bb, wb, Mb), yV = bb => Jb.rings.cmd.growForCmd(bb), kg = !1, ZI(), (0, ib.F)(Jb, {
          core: Ab,
          memory: Jw.t,
          staleOr: (bb, wb, Mb, eb) => AO({
            site: bb,
            error: wb
          }, Mb, eb),
          reportReplayFault: (bb, wb) => {
            (0, Oe.reportReplayFault)(bb, wb, lg)
          },
          reportCameraFault: bb => {
            (0, Oe.reportCameraDirectorFault)(bb, lg)
          },
          audio: gg,
          options: dw.c,
          onNetEvent: dI,
          sessionInfo: bb => {
            var wb;
            return (null === (wb = Ul) || void 0 === wb ? void 0 : wb.conn) === bb ? Ul.info : null
          },
          onEventOverflow: iL,
          replayShaderPack: bb => {
            var wb;
            null === (wb = Sg) || void 0 === wb || wb.replay(bb)
          },
          hasPackModel: bb => {
            var wb, Mb;
            return null !== (null !== (wb = null === (Mb = fI()) || void 0 === Mb ? void 0 : Mb.modelUrl(bb)) && void 0 !== wb ? wb : null)
          },
          beforeWrite: () => (!ng && Jb.rings.net.cursor > 0 && kI(Jb, !1, "all"), !Jb.isStopped),
          beforeOp: () => (!ng && Jb.netWrittenSinceFrame > 0 && kI(Jb, !1, "budget"), !Jb.isStopped)
        }), (0, ab.K)({
          lockPointer: () => {
            if (!Ne(sb)) return !1;
            try {
              Promise.resolve(sb.requestPointerLock()).catch((() => {}))
            } catch {
              return !1
            }
            return !0
          },
          unlockPointer: () => {
            (0, xw.c)()
          },
          leaveGame: () => {
            aL()
          },
          canvas: () => sb
        }), Rg = (0, ab.x)((() => {
          var bb;
          const wb = (0, ib.m)();
          null === (bb = (0, ib.z)()) || void 0 === bb || bb.followCursorAim(!0 === (null === wb || void 0 === wb ? void 0 : wb.isSessionLive) ? wb : null)
        })), el && Jb.setUiPrefs(el);
        Hl && Jb.setEnvPrefs(Hl);
        pl && Jb.setLookPrefs(pl);
        const Sb = mp ? hp(mp.preventMovement) : null;
        Sb && wI(Sb);
        const Nb = (0, ge.k)(),
          vb = (0, ge.d)(Jb, Nb);
        jg = Nb.basis, (0, Xe.m)((0, Fe.d)(null === vb ? null : (0, Ve.m)(vb), (0, Fe.g)())), xg = vb;
        const Qb = (0, vw.d)();
        let Gb = 1 / 0,
          qb = !0,
          ub = Nb.shedFootprintBytes;
        const db = new aH.e(Qb, (() => Ab.bB()), (bb => {
          Jb.crash(iM.t, bb)
        }));
        zg = db, Xg = db, null !== vb && db.setCeiling(Math.min((0, aH.r)(vb), Gb, (0, ge.o)()));
        if (qb) {
          db.setShed((bb => {
            const wb = Jb.shedMemory("joinReserve" !== bb && "gcPressure" !== bb);
            return null !== wb && (null === xg || wb < xg) && (xg = wb, (0, Xe.m)((0, Fe.d)((0, Ve.m)(wb), (0, Fe.g)()))), wb
          }), ((bb, wb, Mb) => {
            1 === wb ? (0, Oe.reportMemoryShed)(bb, Mb, lg) : console.warn(`${RV} wasm memory: shed again (${bb}): shed ${wb}`, Mb.wasmMemoryShed)
          }), (() => Jb.addDistanceInUse()));
          const bb = (0, qM.O)(fb);
          db.setFootprint(new fp(ub, {
            storedChunks: () => Ab.jHb(),
            gpuBytes: () => {
              var wb;
              return null !== (wb = null === bb || void 0 === bb ? void 0 : bb.KHb()) && void 0 !== wb ? wb : 0
            },
            jsHeapBytes: Zp
          })), (0, ze.h)("wasm", db, (() => {
            gg.freeSounds()
          }))
        }
        window.addEventListener("pagehide", (() => {
          zg === db && (db.refreshStats(), KO(db))
        })), document.addEventListener("visibilitychange", HO), window.addEventListener("pagehide", pO), window.addEventListener("pagehide", oI), window.addEventListener("pagehide", TI), !1;
        const [Pb, nb] = (0, Ce.d)();
        nl = (0, Fe.j)((bb => {
          const wb = (0, Fe.q)(bb, (0, Fe.g)());
          return Jb.setChunkAddDistance(wb.horizontal, wb.vertical)
        }), {
          horizontal: Pb,
          vertical: nb
        }), Jb.setAmbientOcclusion(!0 !== UM.i.getItem("disableAmbientOcclusion")), Jb.setPoseLod(!0 !== UM.i.getItem(Ww.K)), Jb.setDebugLog(RM.M.Look, !0), Jb.setDebugLog(RM.M.CameraSet, !0), (0, Jp.startLookDebug)("wasm", {
          look: () => Jb.takeDebugLog(RM.M.Look),
          cameraSets: () => Jb.takeDebugLog(RM.M.CameraSet)
        }), (0, Ap.m)("remesh") && (Jb.setDebugLog(RM.M.Remesh, !0), yb = () => Jb.takeDebugLog(RM.M.Remesh), Gp = new Qp((0, Sp.n)(), yb));
        var yb;
        const ob = function(bb, wb, Mb, eb) {
          const Hb = new eH,
            pb = bb => UM.i.getItem(bb);
          Hb.sync(pb, wb), (0, lM.T)();
          const Vb = (0, lb.o)("customBindingsChanged", (() => {
            Hb.sync(pb, wb)
          }));
          (0, re.n)(wb);
          const gb = new Set,
            Lb = (0, ab.x)((() => {
              var bb;
              gb.size > 0 && gH() && !0 === (null === (bb = (0, ib.m)()) || void 0 === bb ? void 0 : bb.localPlayerAlive()) && lb.k.iI("usedKeyboard")
            })),
            Ib = Pe.e.heldSizer((() => (0, FM.m)(bb))),
            Ob = ue(bb, wb, {
              prevents: bb => Hb.prevents(bb),
              keyPressed: bb => {
                Hb.moves(bb) && (gb.add(bb), gH() && lb.k.iI("usedKeyboard"))
              },
              keyReleased: bb => {
                gb.delete(bb)
              },
              keysReleased: () => {
                gb.clear()
              },
              resized: () => {
                pH.g.measure(bb.getBoundingClientRect()), (0, ne.j)()
              },
              sizeCanvas: Ib,
              watchRenderScale: wb => {
                const Mb = (0, FM.o)(bb, wb),
                  eb = Pe.e.onRelease(wb),
                  Hb = de.d.onRelease(wb);
                return () => {
                  Mb(), eb(), Hb()
                }
              },
              coverHeld: () => de.d.isHeld(),
              touchStarting: () => {
                pH.g.measure(bb.getBoundingClientRect())
              },
              viewShown: Mb,
              touchUiShown: () => Uw.c.get("isTouchScreen"),
              ctrlCombosAreGames: gH,
              inspect: (bb, wb, Mb) => {
                Hb.checks(wb, Mb) && eb(bb)
              },
              canLock: () => Ne(bb)
            }),
            Ub = (0, TM.d)(wb);
          return () => {
            Vb(), Lb(), (0, re.n)(null), Ub(), Ob()
          }
        }(sb, ((bb, wb, Mb, eb, Hb) => {
          rO(Jb, (() => {
            Jb.rings.input.writeRecord(bb, wb, Mb, eb, Hb)
          })), !yg && (0, UH.f)(bb, Hb) && (0, UH.c)((() => {
            eg !== Jb || BL || Jb.isStopped || !IO() || kI(Jb, !1, "budget", !1)
          }))
        }), (() => CL), (bb => {
          var wb;
          null === (wb = rg) || void 0 === wb || wb.onEvent(bb)
        }));
        if (Jb.isStopped) return ob(), null;
        Bg = ob;
        const Tb = () => !Jb.isStopped && !FL;
        if (Jb.isStopped) return null;
        (0, Jw.M)((() => {
          "call" === (0, Jw.q)() && Jb.crash(iM.z, (0, Jw.m)())
        }));
        const kb = (0, iM.R)(Jb.rings.worker, (() => {
          kI(Jb, !1, document.hidden ? "all" : "budget")
        }));
        sg = function(bb, wb, Mb) {
          return RO().then((bb => {
            let {
              prefetchWorldgenWorker: wb
            } = bb;
            wb()
          }), (() => {})), new np({
            module: (0, Jw.u)(),
            decodeSettings: bb => {
              const wb = (0, ib.z)();
              if (null === wb) throw new Error("no game code to decode the world-gen seed with");
              return wb.decodeMapSettings(bb)
            },
            loadWorker: DO,
            onMapWithoutWorldgen: () => {
              cO((bb => {
                let {
                  stopWorldgenWorkerPrefetch: wb
                } = bb;
                wb()
              }))
            },
            onLoadFailed: bb => {
              (0, Oe.reportWorldgenLoadFailure)(bb, lg)
            },
            onWorkerLost: (bb, wb) => {
              !async function(bb, wb, Mb) {
                const eb = bb === ip || bb.startsWith(dp);
                if (!eb || wb) return void Mb.bO(eb);
                const Hb = () => {
                  Mb.bO(!0)
                };
                let pb;
                try {
                  pb = await Mb.scriptUrl()
                } catch {
                  return void Hb()
                }
                await Mb.staleOr({
                  site: iM.I,
                  error: new Error(`a world-gen worker's load failed (${bb}): ${pb}`),
                  urls: [pb]
                }, Hb)
              }(bb, wb, {
                scriptUrl: async () => {
                  const {
                    worldgenWorkerScriptUrl: bb
                  } = await RO();
                  return bb()
                },
                staleOr: (bb, wb) => AO(bb, wb, {
                  stillWanted: Mb
                }),
                bO: wb => {
                  (0, Oe.reportWorldgenWorkerLost)(bb, wb, lg, {
                    build: (0, zH.g)(),
                    ageMs: (0, Be.B)()
                  })
                }
              })
            },
            onStartTimeout: bb => {
              (0, Oe.reportWorkerStartTimeout)(iM.I, bb, lg)
            },
            onGaveUp: bb => {
              (0, Oe.reportWorldgenGaveUp)(bb, lg)
            },
            onMemoryStats: bb => {
              var wb;
              null === (wb = zg) || void 0 === wb || wb.noteWorldgen(bb)
            },
            onMemoryGone: () => {
              var bb;
              null === (bb = zg) || void 0 === bb || bb.worldgenGone()
            },
            write: (Mb, eb, Hb, pb, Vb) => {
              rO(bb, (() => {
                bb.rings.worker.writeWorkerRecord(Mb, eb, Hb, 0, pb, Vb) || bb.crash(iM.I, `a world-gen record of kind ${eb} did not fit the worker-in ring`)
              })), wb()
            }
          })
        }(Jb, kb, Tb), hg = function(bb, wb) {
          return new GH({
            module: (0, Jw.u)(),
            loadWorkers: async () => {
              const [{
                createMeshWorker: bb
              }, wb] = await Promise.all([Mb.e(49).then((() => Mb(54932))), Promise.resolve().then((() => Mb(110))).then((bb => {
                let {
                  isMobile: wb
                } = bb;
                return wb()
              }), (() => !1))]);
              return {
                create: bb,
                count: (0, wM.e)(wb),
                maxKeptLightStates: wb || (0, bM.k)() ? 1 : void 0
              }
            },
            write: (Mb, eb, Hb, pb, Vb, gb) => {
              (0, ne.i)(), rO(bb, (() => {
                bb.rings.worker.writeWorkerRecord(Mb, eb, Hb, pb, Vb, gb) || bb.crash(iM.u, `a meshing record of kind ${eb} did not fit the worker-in ring`)
              })), wb()
            },
            onWorkerLost: bb => {
              (0, Oe.reportWorkerLost)(iM.u, bb, lg)
            },
            onLightFault: (bb, wb) => {
              (0, Oe.reportLightFault)(bb, wb, lg)
            },
            onStartTimeout: bb => {
              (0, Oe.reportWorkerStartTimeout)(iM.u, bb, lg)
            },
            onMemoryStats: (bb, wb) => {
              var Mb;
              null === (Mb = zg) || void 0 === Mb || Mb.noteMeshWorker(bb, wb)
            },
            onMemoryGone: bb => {
              var wb;
              null === (wb = zg) || void 0 === wb || wb.meshWorkerGone(bb)
            },
            fail: (wb, Mb) => {
              const eb = () => {
                bb.crash(iM.u, void 0 === Mb ? wb : new Error(wb, {
                  cause: Mb
                }))
              };
              void 0 !== Mb ? AO({
                site: iM.u,
                error: Mb
              }, eb) : eb()
            }
          })
        }(Jb, kb), dL();
        const bw = (0, Hp.n)(ow.clientSideServerUrls.staticUrl, {
            onTableFailed: bb => {
              AO({
                site: Oe.MODEL_FEED_SITE,
                error: bb
              }, (() => {}), {
                stillWanted: Tb
              })
            },
            packUrl: bb => {
              var wb, Mb;
              return null !== (wb = null === (Mb = fI()) || void 0 === Mb ? void 0 : Mb.modelUrl(bb)) && void 0 !== wb ? wb : null
            }
          }),
          ww = function(bb, wb, Mb) {
            const eb = Mb => {
              var eb, Hb;
              return null !== (eb = null === (Hb = wb()) || void 0 === Hb ? void 0 : Hb.drawnUrl(Mb)) && void 0 !== eb ? eb : bb.url(Mb)
            };
            return (0, Mp.n)((0, uH.n)(eb), Mb)
          }(bw, (() => Dg), fI),
          Mw = new uH.g(ww, (bb => {
            console.warn(`${RV} image ${bb.key.kind}:${bb.key.index}:${bb.key.word} failed`, bb.error)
          }));
        Ag = Mw, Wg = new kH(Jb, ww, ((bb, wb) => {
          void 0 === wb ? console.warn(`${RV} ${bb}`) : WI(bb, wb)
        }));
        const ew = new wp.i(bw, function(bb, wb) {
          let eb = !1,
            Hb = null,
            pb = null;
          const Vb = {
              onUnavailable: (Mb, eb) => {
                pb ??= AO({
                  site: Oe.MODEL_POOL_SITE,
                  error: Mb,
                  urls: eb
                }, (() => {
                  (0, Oe.reportModelPoolFailure)(Mb, bb)
                }), {
                  stillWanted: wb
                })
              },
              onWorkerLost: wb => {
                (0, Oe.reportWorkerLost)(Oe.MODEL_POOL_SITE, wb, bb)
              },
              onModuleRetry: (wb, Mb) => {
                (0, Oe.reportModelsModuleRetry)(wb, Mb, bb)
              }
            },
            gb = Mb.e(51).then((() => Mb(54941))).then((bb => {
              let {
                pageModelPool: wb
              } = bb;
              if (eb) return null;
              const Mb = wb(Vb);
              return Hb = Mb.unlisten, cg = Mb.pool, dL(), Mb.pool
            }), (bb => (eb || Vb.onUnavailable(bb, void 0), null)));
          return Yg = () => {
            var bb;
            eb = !0, null === (bb = Hb) || void 0 === bb || bb(), cg = null
          }, (bb, wb) => gb.then((Mb => {
            var eb;
            return null !== (eb = null === Mb || void 0 === Mb ? void 0 : Mb.build(bb, wb)) && void 0 !== eb ? eb : (0, pp.p)(bb, "the model workers did not load")
          })).then((bb => null !== pb && (0, pp.j)(bb) ? pb.then((() => bb)) : bb))
        }(Wb, Tb), (bb => {
          bb.startup ? (EO(), AO({
            site: Oe.MODEL_FEED_SITE,
            error: bb.error,
            urls: "" === bb.url ? void 0 : [bb.url]
          }, (() => {
            (0, Oe.reportModelFailure)(bb, Wb)
          }))) : (0, Oe.reportModelFailure)(bb, Wb)
        }), {
          onWritten: (bb, wb) => {
            Mw.glbWritten(bb, wb)
          },
          onTaken: (bb, wb) => {
            Mw.glbTaken(bb, wb)
          },
          onPackFileFailed: (bb, wb) => {
            console.warn(`${RV} the texture pack's model file ${bb} failed: the shipped one loads`, wb)
          }
        });
        Dg = ew;
        const Hw = new yH.e(Jb);
        Vg = Hw, Hw.swap((bb => {
          const wb = () => {
            (0, Oe.reportTerrainTextureFailure)(bb, Wb)
          };
          if (yl) return void wb();
          const Mb = () => !yl,
            eb = null === bb.url ? void 0 : [bb.url];
          AO({
            site: iM.H,
            error: bb.error,
            urls: eb
          }, wb, {
            stillWanted: Mb
          })
        })).then((bb => {
          null !== bb && (bb || Jb.isStopped || console.warn(`${RV} the core refused the terrain textures: terrain draws untextured`), Gg(Jb))
        }));
        const pw = new KM(Jb, ((bb, wb) => {
          console.warn(`${RV} ${bb}`, ...void 0 === wb ? [] : [wb])
        }));
        pw.feed(), null !== Cb && function(bb, wb, eb, Hb, pb, Vb) {
          let gb = null,
            Lb = null,
            Ib = !1;
          const Ob = {
            textures: null,
            stop: () => {
              var bb, wb;
              Ib = !0, null === (bb = Lb) || void 0 === bb || bb(), null === (wb = gb) || void 0 === wb || wb(), ep.d.setSettled(null), null !== Lg && rL.clear(Lg)
            }
          };
          pg = Ob, Lb = JI().follow((Lb => {
            null !== Lb && Promise.all([Mb.e(232), Mb.e(54)]).then((() => Mb(54889))).then((Mb => {
              let {
                PackTextures: Ub
              } = Mb;
              if (Ib || bb.isStopped) return;
              const tb = new Ub({
                feed: Lb,
                terrain: wb,
                backend: eb,
                stopped: () => bb.isStopped,
                landed: () => {
                  Gg(bb)
                },
                packSwapped: () => {
                  (0, Mp.j)(Hb), Vb.feed((() => async function(bb) {
                    const wb = null === bb ? null : await bb.averageColours;
                    return null === wb ? rM() : jM(wb)
                  }(tb.assets))), (0, bp.l)(tb.files()), pb.refresh().then((bb => {
                    null !== bb && console.info(`${RV} texture pack models: ${bb.resent} of ${bb.delivered} files written again, ${bb.refetched} refetched`)
                  }))
                },
                settled: (bb, wb, Mb) => {
                  var eb;
                  (ep.d.setSettled({
                    state: bb,
                    files: wb
                  }), function(bb, wb, Mb) {
                    const eb = null === bb.gameSource && (0, Ue.i)(bb.pack);
                    if (null === wb) return;
                    const Hb = (0, Ie.i)(wb.error),
                      pb = eb ? "settings" : wb.source;
                    lb.k.iI(Ie.d, {
                      failure: Hb,
                      source: pb,
                      pack: te(bb)
                    }), (0, Oe.reportTexturePackKeptOut)(pb, Hb, wb.error, Mb)
                  }(bb, Mb, lg), null === Mb) && function(bb) {
                    const wb = Lg;
                    null !== wb && rL.apply(wb, bb).then((wb => {
                      wb && bb && console.info(`${RV} the texture pack's animations are in (${Object.keys(bb).length} files)`)
                    }))
                  }(null === (eb = bb.pack) || void 0 === eb ? void 0 : eb.animations)
                },
                settling: () => {
                  ep.d.setSettled(null)
                },
                warn: WI,
                maxTextureSize: () => Promise.resolve((0, qM.nb)(document.createElement("canvas")))
              });
              Ob.textures = tb, gb = tb.start()
            }), (bb => {
              console.warn(`${RV} the texture pack's terrain didn't load: the built atlas stays`, bb)
            }))
          }))
        }(Jb, Hw, Cb, Mw, ew, pw);
        const Vw = () => {
            Jb.setTextureLayers("")
          },
          gw = bb => {
            (yw ??= Mb.e(66).then((() => Mb(54943))).then((bb => {
              let {
                TEXTURE_NAMES: wb
              } = bb;
              return wb
            }), (bb => {
              throw yw = null, bb
            })), yw).then((bb => {
              Jb.setTextureLayers(bb) || Jb.isStopped || (console.warn(`${RV} the core refused the texture names: textured Boxes draw textureNotFound`), Vw())
            }), (wb => {
              if (Jb.isStopped) return;
              const [Mb, ...eb] = bb;
              void 0 === Mb ? AO({
                site: Oe.TEXTURE_NAMES_SITE,
                error: wb
              }, (() => {
                console.warn(`${RV} the texture names didn't load, so textured Boxes draw textureNotFound`, wb), Vw()
              }), {
                stillWanted: Tb
              }) : setTimeout((() => {
                gw(eb)
              }), Mb)
            }))
          };
        if (gw(dV), null !== Cb && !await async function(bb, wb, Mb, eb, pb, Vb) {
            var gb;
            const lb = (0, qM.O)(Mb);
            if (null === lb) return bb.crash(cV, new Error(`this ${eb} build has no openRenderer`)), !1;
            let Lb;
            Jl = lb;
            try {
              var Ib, Ob, Ub, tb;
              const Hb = null !== (Ib = null === (Ob = wg) || void 0 === Ob ? void 0 : Ob.pagePreviews()) && void 0 !== Ib ? Ib : null,
                gb = null !== (Ub = null === (tb = wg) || void 0 === tb ? void 0 : tb.previewModule(Mb)) && void 0 !== Ub ? Ub : null;
              if (null === Hb || null === gb) {
                null === Hb || void 0 === Hb || Hb.endSession(!1), Lb = (0, FM.e)().sampleCount, await (0, qM.f)(wb, lb, Vb, YI, Lb, await pb);
                const bb = (0, qM.m)(Mb);
                null === bb && console.warn(`${RV} this ${eb} build has no image registry: sky and model images won't show`), (0, nH.g)(bb)
              } else {
                (0, Up.e)() && await (0, Ow.k)();
                const Mb = (0, Up.E)();
                if (null !== Mb) {
                  const wb = (0, aM.l)(lb),
                    eb = `${Mb.why}${void 0===wb?"":` (${wb.message})`}`;
                  return bb.crash(Oe.RENDER_RELOAD_SITE, Mb.webgpu ? new Error(eb) : new Oe.GraphicsLostError(eb)), !1
                }
                Lb = await Hb.bindSession(gb, wb, (async bb => (0, qM.x)(lb, cV, Vb, bb, YI, await pb)))
              }
            } catch (Hb) {
              return bb.crash(cV, Hb), !1
            }(function(bb, wb) {
              const Mb = bb,
                {
                  requestCapture: eb,
                  takeCapture: Hb
                } = Mb;
              if ("function" !== typeof eb || "function" !== typeof Hb) return;
              const pb = {
                request() {
                  eb.call(Mb, wb)
                },
                take() {
                  var bb;
                  return null !== (bb = Hb.call(Mb)) && void 0 !== bb ? bb : null
                }
              };
              window[xp] = pb
            })(wb, Lb), al = Lb, Al = !0;
            const Cb = performance.now();
            return Wl.boundAtMs = null !== (gb = (0, Up.G)()) && void 0 !== gb ? gb : Cb, Wl.indirectHangs = (0, Up.x)(), Wl.restoresSkipped = (0, Up.I)(), console.info(`${RV} ${eb} renderer bound at ${Math.round(Cb)} ms`), !bb.isStopped
          }(Jb, Ab, fb, Cb, Fb, sb)) return null;
        if (null !== Cb) {
          var lw, Lw, tw;
          (0, Qw.J)(Cb);
          const bb = () => !Jb.isStopped && LO();
          Mb.e(220).then((() => Mb(35213))).then((wb => {
            let {
              devTools: Mb
            } = wb;
            Jb.isStopped || Mb.setHost(function(bb) {
              return {
                tools: Op,
                async downloadScene(wb, Mb) {
                  let {
                    width: eb,
                    height: Hb,
                    colouring: pb
                  } = Mb;
                  "screenshot" === wb && null === pb ? await (0, lp.f)(bb, eb, Hb) : console.warn("The Rust client's developer tools take uncoloured screenshots only")
                },
                setAmbientLightIntensity: () => (console.warn("The Rust client's renderer has no ambient light setting"), Promise.resolve()),
                capturePhoto: (wb, Mb, eb) => (0, lp.e)(bb, wb, Mb, eb),
                snapshotNextFrame: () => (0, lp.i)(bb)
              }
            }(function(bb, wb) {
              return {
                canvas: bb,
                maxTextureSize: Lp,
                UO: wb,
                resize: (bb, wb, Mb) => {
                  (0, re.q)(RM.qb.Resize, 0, bb / Mb, wb / Mb, (0, re.i)(Mb))
                },
                restoreSize: () => {
                  const wb = (0, FM.m)(bb);
                  null !== wb && (0, re.q)(RM.qb.Resize, 0, wb.cssWidth, wb.cssHeight, (0, re.i)(wb.renderScale))
                },
                onFrameDrawn: bb => (Ip.add(bb), () => {
                  Ip.delete(bb)
                })
              }
            }(sb, bb)))
          }), (bb => {
            console.warn(`${RV} the developer tools didn't load: no captures this session`, bb)
          }));
          const wb = "webgpu" === Cb && null !== (lw = null === tb || void 0 === tb || null === (Lw = tb.adapter) || void 0 === Lw ? void 0 : Lw.vendor) && void 0 !== lw ? lw : null;
          il = {
            backend: Cb,
            canvas: sb,
            fallbackReason: null !== (tw = null === tb || void 0 === tb ? void 0 : tb.reason) && void 0 !== tw ? tw : null,
            adapterVendor: wb
          }, qI();
          try {
            (0, ne.u)(Cb, sb, wb)
          } catch (Hb) {
            (0, ne.w)(), console.error(`${RV} the quality steps didn't start`, Hb)
          }
        }
        const {
          storagePullBreaks: Cw,
          splitPassBreaks: Ew
        } = await Fb;
        Ew && console.warn(`${RV} split_pass_breaks on: Windows Adreno 7xx (N-103) or ?sceneDepth=off`);
        const Fw = (0, Iw.e)(tb, (0, pM.j)(), (0, gM.c)());
        if ((0, Ap.m)("webgpuloss")) {
          var Bw, sw;
          const bb = {
            backend: Cb,
            reason: null !== (Bw = null === tb || void 0 === tb ? void 0 : tb.reason) && void 0 !== Bw ? Bw : null,
            source: null !== (sw = null === tb || void 0 === tb ? void 0 : tb.source) && void 0 !== sw ? sw : null,
            storagePullBreaks: Cw,
            noWebGpu: Fw.messageKey
          };
          (0, Wp.d)((wb => {
            wb.noteWasmPick(bb)
          }))
        }
        const mw = "webgpu" === Cb;
        if (Sg = (0, Iw.i)(mw ? Jb : null, mw && null !== (gb = null === (Lb = wg) || void 0 === Lb ? void 0 : Lb.pagePreviews().LC) && void 0 !== gb ? gb : null, Fw, WI), BL) return null;
        if (db.reserveAtJoin((0, aH.n)(null !== vb && void 0 !== vb ? vb : Ve.g)), Jb.isStopped) return null;
        const hw = bb => {
          if (ug = performance.now(), dg = !1, null !== ul) try {
            ul.animationFrame(bb)
          } catch (Hb) {
            uI(Hb)
          }
          if (function(bb, wb) {
              return wb && !BL && !yg && IO() && LO() && bb.framePaces(performance.now())
            }(Jb, CL)) {
            if (eL.animationFrame(ug, "paced", CL), Jb.writePendingInput(), (0, ab.f)(bb, bO), aI(!1, bb), null !== ul) try {
              ul.framePaced()
            } catch (Hb) {
              uI(Hb)
            }
            requestAnimationFrame(hw)
          } else kI(Jb, CL, "budget") && (eL.animationFrame(ug, Jb.lastFrameKind, CL), (0, LM.g)(Jb.lastFrameKind) && LO() && (0, ab.f)(bb, bO), aI(CL && gL, bb), lL.frame(Jb.lastFrameKind, CL && LO(), bb), OL.frame(Jb.lastFrameKind, CL && LO()), (0, LM.b)(Jb.lastFrameKind) && pM.C.drew(), mO(Jb), db.afterFrame(), requestAnimationFrame(hw))
        };
        requestAnimationFrame(hw), Jb.warmBeforeJoin(DH(null), iM.p.Home);
        return function(bb) {
          if (bb.has("inputLog") && (0, HH.k)((bb => {
              let {
                action: wb,
                down: Mb,
                press: eb
              } = bb;
              console.info(`${VH} input ${wb} ${Mb?"down":"up"} press ${eb} at ${performance.now().toFixed(1)}`)
            })), bb.has("inputDump")) {
            const bb = [];
            lH = bb, Object.assign(window, {
              bloxdInputDump: () => bb.join("\n")
            })
          }
        }(new URLSearchParams(window.location.search)), Kg = function(bb) {
          let wb = null;
          const Mb = () => {
              null !== wb && (clearInterval(wb), wb = null)
            },
            eb = () => {
              document.hidden ? wb ??= setInterval((() => {
                ZO(bb) || Mb()
              }), uV) : Mb()
            };
          return document.addEventListener("visibilitychange", eb), eb(), () => {
            Mb(), document.removeEventListener("visibilitychange", eb)
          }
        }(Jb), Jb
      }(wb).then((bb => {
        var wb;
        (eb(lg), tg(null !== bb), null !== bb && (Xb = performance.now()), Og(bb), null === bb) ? null === (wb = wg) || void 0 === wb || wb.pagePreviews().endSession(null === (0, Jw.q)()): Qg("booted")
      }), (bb => {
        eb(lg), tg(!1), Og(null), FO({
          site: YV,
          error: bb,
          header: null
        }, lg)
      }))
    }

    function KL() {
      const bb = Lg;
      null !== bb && mL().then((wb => {
        let {
          pageBuiltInAnimationPack: Mb
        } = wb;
        Mb().provide(bb)
      }), (bb => {
        console.warn(`${RV} the built-in animation pack's chunk did not load: lifeforms stay in their rest pose`, bb)
      }))
    }
    const rL = new class {
      constructor(bb) {
        this.deps = bb, this.latest = 0, this.dg = null
      }
      apply(bb, wb) {
        return this.load(bb, wb, 0)
      }
      async load(bb, wb, Mb) {
        var eb;
        const Hb = ++this.latest,
          pb = this.deps.compiler;
        if (void 0 === wb || null === wb || "object" !== typeof wb || 0 === Object.keys(wb).length || null === pb) return this.drop(bb), !1;
        if ((null === (eb = this.dg) || void 0 === eb ? void 0 : eb.module) === bb && (0, SM.ie)(this.dg.files, wb)) return !1;
        try {
          const [Mb, eb] = await Promise.all([pb(), this.deps.builtIns()]);
          if (Hb !== this.latest) return !1;
          const Vb = await Mb(wb, GM, {
            builtIns: eb
          });
          if (Hb !== this.latest) return !1;
          const gb = this.call(bb, Vb);
          if (void 0 === gb) throw new QM("the compiled animations didn't read against the built-in pack");
          return this.dg = {
              module: bb,
              files: wb
            },
            function(bb) {
              for (let wb = 0; wb + 2 < bb.length; wb += 3) {
                ("error" === bb[wb] ? console.error : console.warn)(`Animation for the texture pack: ${bb[wb+1]}: ${bb[wb+2]}`)
              }
            }(gb), !0
        } catch (gb) {
          var Vb;
          if (Hb !== this.latest) return !1;
          this.drop(bb), 0 === Mb && this.deps.warn("the texture pack's animations didn't load: lifeforms play the built-in ones", gb);
          const eb = (null !== (Vb = this.deps.retryAfterMs) && void 0 !== Vb ? Vb : vM)[Mb];
          return void 0 === eb || gb instanceof QM || (0, NM.i)(bb) || setTimeout((() => {
            Hb === this.latest && this.load(bb, wb, Mb + 1)
          }), eb), !1
        }
      }
      call(bb, wb) {
        try {
          return bb.hHb(wb)
        } catch (Mb) {
          throw (0, NM.j)(bb, Mb), Mb
        }
      }
      clear(bb) {
        this.latest++, this.drop(bb)
      }
      drop(bb) {
        const wb = this.dg;
        if (this.dg = null, (null === wb || void 0 === wb ? void 0 : wb.module) === bb && !(0, NM.i)(bb)) try {
          this.call(bb, null)
        } catch {}
      }
    }({
      compiler: fM.c,
      builtIns: async () => {
        const {
          pageBuiltInAnimationPack: bb
        } = await mL();
        return bb().whenSet()
      },
      warn: WI
    });
    async function RL(bb, wb) {
      let eb = !1;
      await DL({
        matchmake: async () => {
          const {
            guestJoinTarget: Hb,
            guestJoinWithPack: pb
          } = await Mb.e(133).then((() => Mb(54873)));
          return eb ? Hb(bb, wb, NI()) : (eb = !0, pb(bb, wb, (wb => vI(bb, wb)), NI))
        },
        onFailure: bb => {
          (0, Oe.showJoinFailure)(bb, lg)
        },
        rejoin: yL,
        invalidateTrafficCode: oL
      })
    }
    async function DL(bb) {
      let {
        matchmake: wb,
        onFailure: Mb,
        rejoin: Hb,
        invalidateTrafficCode: pb,
        pageReady: Vb,
        signal: gb
      } = bb;
      const lb = () => !0 === (null === gb || void 0 === gb ? void 0 : gb.aborted);
      let Lb;
      const Ib = ep.d.rejoinHold();
      Ll = null, (0, he.e)();
      const Ob = (0, Be.cb)("wasm", jO);
      let Ub = !1,
        tb = performance.now();
      try {
        if (!await Cg) return {
          kind: "stopped"
        };
        if (lb()) return {
          kind: "Yb"
        };
        hL().catch((() => {}));
        let bb = await wb();
        var Eb, Fb;
        if (tb = performance.now(), !lb()) xO(null !== (Eb = null === (Fb = bb.target.session) || void 0 === Fb ? void 0 : Fb.gameNameWithVariation) && void 0 !== Eb ? Eb : null);
        const Mb = () => performance.now() - bb.matchedAt <= bb.freshMs,
          eb = YL(bb.target).catch((() => {}));
        Mb() && !lb() && (Lb = new NH(bb.target, {
          signal: gb
        }));
        const pb = performance.now();
        let Ib = () => {};
        lb() || (Ib = function(bb, wb) {
          fb(), bb || rb || null !== Kb && "ok" !== Kb || (rb = !0, (0, Cb.v)("wasm_boot_wait", performance.now(), `${jb}:${wb()}:${(0,Bb.n)()}`)), Rb++;
          let Mb = !1;
          return () => {
            Mb || (Mb = !0, Rb--)
          }
        }(Ig, Sw.i), null === gb || void 0 === gb || gb.addEventListener("abort", Ib, {
          once: !0
        }));
        const Ob = await Ug;
        if (Ib(), null === gb || void 0 === gb || gb.removeEventListener("abort", Ib), null === Ob) return {
          kind: "stopped"
        };
        var Db, cb;
        if (function(bb) {
            var wb, Mb;
            if (sb.c.markGameEngineConstructed(), xb) return;
            xb = !0;
            const eb = Math.max(bb, null !== (wb = hb) && void 0 !== wb ? wb : bb);
            (0, mb.e)("ready", Math.max(0, (null !== (Mb = zb) && void 0 !== Mb ? Mb : eb) - eb) / 1e3)
          }(pb), !lb())
          if (null !== zb && null !== Xb ? (0, Cb.v)("wasm_core_ready", Xb) : console.warn("[bloxd-wasm-client] a join found the core before boot marked its steps"), bb.target.session && (0, ap.b)(bb.target.session.gameNameWithVariation)) null === (Db = sg) || void 0 === Db || Db.prestart();
        if (await eb, !Mb() && !lb()) null === (cb = Lb) || void 0 === cb || cb.rematched(), bb = await wb(), tb = performance.now();
        if (lb()) return {
          kind: "Yb"
        };
        const Yb = await async function(bb) {
          var wb, Mb, eb;
          let {
            signal: Hb,
            rejoin: pb = null,
            early: Vb,
            pageReady: gb
          } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (null !== Hb && void 0 !== Hb && Hb.aborted) throw new DOMException("the join was left", "AbortError");
          const lb = (Lb = xl, Ib = performance.now(), null !== Lb && Ib - Lb < mH);
          var Lb, Ib;
          xl = null;
          const Ob = new AbortController,
            Ub = null !== (wb = null === (Mb = bb.session) || void 0 === Mb ? void 0 : Mb.gameNameWithVariation) && void 0 !== wb ? wb : null;
          xO(Ub), AL({
            controller: Ob,
            game: Ub
          }), jl = null, null === (eb = Rl) || void 0 === eb || eb.abort(), Rl = null, cl = !1, Yl = null, Zl.clear();
          const tb = () => {
            (0, Tw.l)(Ob, (0, Tw.h)(Hb))
          };
          null === Hb || void 0 === Hb || Hb.addEventListener("abort", tb, {
            once: !0
          });
          try {
            var Eb, Fb, Bb, sb, mb;
            const wb = await Ug;
            if (null === wb || wb.isStopped || BL) throw new Error("no core is running to join a game with");
            if (wb.warmBeforeJoin(DH(null !== (Eb = null === (Fb = bb.session) || void 0 === Fb ? void 0 : Fb.gameNameWithVariation) && void 0 !== Eb ? Eb : null), iM.p.Play), bb.session && null !== Sg) {
              const wb = await ZL(Sg.join(bb.session.gameNameWithVariation), Ob.signal);
              if ((0, Ap.m)("webgpuloss")) {
                const Mb = bb.session.gameNameWithVariation,
                  eb = Sg.couldntRunInJoinedGame();
                (0, Wp.d)((bb => bb.noteWasmJoin(Mb, wb, eb)))
              }
              if (null !== wb) throw new Iw.b(wb)
            }
            const [, , , {
              joinRoom: Mb
            }] = await ZL(Promise.all([(0, ib.p)(wb), YL(bb), null === gb || void 0 === gb ? void 0 : gb(), hL()]), Ob.signal), eb = bb.session, Hb = eb ? {
              ...bI,
              attachSocket: wb => {
                const Mb = gI(wb, bb.endpoint);
                var Hb;
                null !== Mb && (Ul = {
                  conn: Mb,
                  info: eb
                }, null === (Hb = tl) || void 0 === Hb || Hb(eb.playerDbId));
                return Mb
              }
            } : bI, Lb = await Mb(Hb, bb, {
              signal: Ob.signal,
              early: Vb
            }).catch((bb => {
              throw function(bb) {
                if (!(bb instanceof ww.b)) return bb;
                if ("roomError" === bb.stage && null !== Yl) return cL(new ww.b(bb.message, bb.stage, bb.code, Yl), bb);
                const wb = "closed" === bb.stage && null !== Kl ? Zl.get(Kl.conn) : void 0;
                return void 0 === wb ? bb : cL(new ww.b(bb.message, bb.stage, wb.code, null, bb.socketOpened), bb)
              }(bb)
            }));
            if (ll !== Ob) throw Lb.leave(), new DOMException("the join was left", "AbortError");
            QL(Lb), null === (Bb = hg) || void 0 === Bb || Bb.newGame();
            const Ib = function(bb, wb) {
              var Mb, eb;
              const {
                session: Hb
              } = bb, pb = void 0 === Hb ? bb.joinOptions.lobbyName : Hb.lobbyName;
              return {
                endpoint: bb.endpoint,
                game: null !== (Mb = null === Hb || void 0 === Hb ? void 0 : Hb.gameNameWithVariation) && void 0 !== Mb ? Mb : bb.roomName,
                lobby: String(null !== pb && void 0 !== pb ? pb : null),
                sessionId: wb,
                postCookies: null !== (eb = bb.postCookies) && void 0 !== eb ? eb : null
              }
            }(bb, Lb.seat.sessionId);
            gl.set(Lb, Ib), WH(Ib);
            const Ub = performance.now(),
              tb = {
                conn: Lb.conn,
                rejoin: pb,
                game: null !== (sb = null === (mb = bb.session) || void 0 === mb ? void 0 : mb.gameNameWithVariation) && void 0 !== sb ? sb : "",
                joinedAt: Ub,
                rejoinedAt: lb ? Ub : null,
                overflow: null
              };
            Cl = tb,
              function(bb, wb) {
                EI();
                const Mb = {
                  endpoint: wb,
                  roomId: bb.seat.room.roomId,
                  heldConn: 0,
                  dropCode: 0,
                  pendingHold: null,
                  resume: new ee({
                    reconnect: (bb, wb, eb) => async function(bb, wb, Mb, eb) {
                      const {
                        roomId: Hb,
                        roomToken: pb
                      } = BI(bb, wb), Vb = eg;
                      if (null === Vb || Vb.isStopped || BL) throw new Error("no core is running to resume the game on");
                      const {
                        resumeRoom: gb
                      } = await ZL(hL(), Mb), lb = {
                        ...bI,
                        attachSocket: wb => El !== bb || 0 === bb.heldConn ? (wb.close(), null) : gI(wb, bb.endpoint, !0)
                      };
                      return gb(lb, bb.endpoint, Hb, pb, {
                        signal: Mb,
                        onAttached: eb
                      })
                    }(Mb, bb, wb, eb),
                    releaseSeat: bb => {
                      !async function(bb, wb) {
                        const {
                          roomId: Mb,
                          roomToken: eb
                        } = BI(bb, wb);
                        try {
                          const {
                            leaveHeldSeat: wb
                          } = await hL();
                          await wb(bb.endpoint, Mb, eb)
                        } catch (Hb) {
                          console.warn(`${RV} the held seat of a game left while it reconnected couldn't be released`, Hb)
                        }
                      }(Mb, bb)
                    },
                    isLive: () => El === Mb && null !== Cl && !BL,
                    RZ: bb => {
                      Xl = bb, CI()
                    },
                    onReconnected: bb => {
                      ! function(bb) {
                        const wb = Vl;
                        if (null !== wb && wb !== bb) {
                          const Mb = gl.get(wb);
                          void 0 !== Mb && gl.set(bb, Mb), pL === wb && (pL = bb), wb.detach()
                        }
                        QL(bb)
                      }(bb)
                    },
                    onGaveUp: (bb, wb) => {
                      ! function(bb, wb, Mb) {
                        var eb, Hb;
                        console.warn(`${RV} gave up reconnecting (${Mb.reason}, ${Mb.attempts} attempts)`, Mb.lastError), (0, Oe.reportReconnectGaveUp)(Mb, lg);
                        const pb = null !== (eb = null === (Hb = Cl) || void 0 === Hb ? void 0 : Hb.rejoin) && void 0 !== eb ? eb : null;
                        FI(bb, "gaveUp"), qL();
                        const Vb = {
                          code: bb.dropCode,
                          name: null,
                          reason: GV,
                          canReconnect: !wb,
                          automaticallyReconnect: !1,
                          requiresRefresh: !1
                        };
                        kL(Vb, wb ? null : pb, !1, {
                          reasonKey: qV,
                          canPlayAgain: wb
                        })
                      }(Mb, bb, wb)
                    }
                  })
                };
                El = Mb, null !== Fl && Fl.conn === bb.conn && Mb.resume.onInitialInfo(Fl)
              }(Lb, bb.endpoint), performance.mark(AV), (0, Cb.v)("wasm_joined", Ub), wb.warmBeforeJoin(new Uint32Array, iM.p.Joined), setTimeout((() => {
                Vl === Lb && (0, Cb.m)()
              }), 0), KL(), console.info(`${RV} joined ${bb.roomName} as ${Lb.seat.sessionId} at ${Math.round(performance.now())} ms`);
            const hb = jl;
            jl = null, null !== hb && uL(tb, hb.mask, hb.frames);
            const zb = Zl.get(Lb.conn);
            return Zl.clear(), void 0 !== zb && (QL(null), TL(Lb.conn, zb.code, zb.reason)), Lb
          } finally {
            var hb;
            null === Hb || void 0 === Hb || Hb.removeEventListener("abort", tb), ll === Ob && vL(Vl, null), (null === (hb = Kl) || void 0 === hb ? void 0 : hb.join) === Ob && (Kl = null)
          }
        }(bb.target, {
          signal: gb,
          rejoin: Hb(bb.target),
          early: Lb,
          pageReady: Vb
        });
        return Ub = !0, {
          kind: "joined",
          game: Yb
        }
      } catch (Zb) {
        if (Zb instanceof DOMException && "AbortError" === Zb.name || lb()) return {
          kind: "Yb"
        };
        if (BL) return {
          kind: "stopped"
        };
        if (cl && (cl = !1, await pb().catch((bb => {
            console.warn(`${RV} the cached traffic code could not be dropped`, bb)
          }))), null === await Ug) return {
          kind: "stopped"
        };
        if (Zb instanceof Iw.b) return Mb(Zb, performance.now() - tb), {
          kind: "failed",
          error: Zb,
          reloading: !1
        };
        const bb = Zb instanceof ww.b && Zb.code === eb.b.wasmClientNotAllowed.code,
          wb = Zb instanceof ww.b && Zb.code === eb.b.outdatedVersion.code,
          Hb = () => null === Vl,
          Vb = await AO({
            site: Oe.JOIN_SITE,
            error: Zb,
            outdated: wb
          }, (() => {
            bb && (0, aw.G)(), Mb(Zb, performance.now() - tb)
          }), {
            stillWanted: Hb
          });
        return {
          kind: "failed",
          error: Zb,
          reloading: Vb
        }
      } finally {
        var Yb;
        Ub || Ob.end(), ep.d.releaseHold(Ib);
        const bb = null === (Yb = Lb) || void 0 === Yb ? void 0 : Yb.release();
        bb && (0, Oe.reportUnusedSeat)(bb, lg)
      }
    }

    function cL(bb, wb) {
      return bb.stack = wb.stack, bb
    }

    function YL(bb) {
      return bb.session ? (0, ib.w)(gg, bb.session.gameNameWithVariation) : Promise.resolve()
    }

    function ZL(bb, wb) {
      return (0, Tw.r)(wb), new Promise(((Mb, eb) => {
        const Hb = () => {
          eb((0, Tw.h)(wb))
        };
        wb.addEventListener("abort", Hb, {
          once: !0
        }), bb.then((bb => {
          wb.removeEventListener("abort", Hb), Mb(bb)
        }), (bb => {
          wb.removeEventListener("abort", Hb), eb(bb)
        }))
      }))
    }

    function fL() {
      AL(null)
    }

    function AL(bb) {
      var wb, Mb, eb;
      (eO(null === bb ? "left" : "replaced"), function() {
        const bb = El;
        null !== bb && FI(bb, "left")
      }(), null === Fg || Fg.left) || (Fg.left = !0, null === (eb = (0, ib.m)()) || void 0 === eb || eb.socketLeft(), (0, Ub.n)({
        websocketUrl: null
      }));
      ll && (0, Tw.l)(ll, new DOMException("the join was left", "AbortError")), qL(null !== bb), null === (wb = Sg) || void 0 === wb || wb.leave();
      const Hb = Vl;
      null !== bb && ep.d.setGame(bb.game), vL(null, null !== (Mb = null === bb || void 0 === bb ? void 0 : bb.controller) && void 0 !== Mb ? Mb : null), null === Hb || void 0 === Hb || Hb.leave(), null === bb && (SL = !0, NL()), GL(0), (0, Pw.f)()
    }

    function WL() {
      return null !== eg && 0 !== (eg.headerWord(DM.L.LoadSteps) & DM.X.PlayerBound) && IO() && !lL.isShown()
    }

    function JL() {
      return performance.now() - rl >= yM.c
    }
    let SL = !1;

    function NL() {
      const bb = eg;
      !SL || yg || CL || (SL = !1, BL || null === bb || bb.isStopped || bb.releaseLeftGame())
    }

    function vL(bb, wb) {
      null !== wb && wb !== ll && (LL = document.hidden), null === bb ? IL.end() : null === Vl && IL.join(WL), Vl = bb, ll = wb, null === Vl && null === ll || (SL = !1), null === Vl && null === ll && ep.d.setGame(void 0)
    }

    function QL(bb) {
      vL(bb, ll)
    }

    function GL(bb) {
      const wb = eg;
      return null !== nV && !BL && null !== wb && !wb.isStopped && (!!nV(ww.f, 0, (0, ww.z)(bb)) && (kg = !0, 0 === bb || yg || kI(wb, !1, "all"), !0))
    }

    function qL() {
      var bb, wb;
      arguments.length > 0 && void 0 !== arguments[0] && arguments[0] || (0, Be.g)();
      const Mb = null !== (bb = null === (wb = Cl) || void 0 === wb ? void 0 : wb.overflow) && void 0 !== bb ? bb : null;
      Cl = null, null !== Mb && (0, Oe.reportEventOverflow)(Mb, lg)
    }

    function aL() {
      null !== Vl || null !== ll ? fL() : lI()
    }

    function iL(bb, wb) {
      console.warn(`${RV} the event buffer refused records in ${wb} frames (categories ${bb})`), BL || (null !== Cl ? uL(Cl, bb, wb) : null !== ll && function(bb, wb, Mb) {
        var eb;
        const Hb = function(bb, wb) {
          return null === bb ? "drop" : bb.activated ? "keep" : 0 !== (wb & DM.y.NetSession) ? "fail" : "drop"
        }((null === (eb = Kl) || void 0 === eb ? void 0 : eb.join) === bb ? Kl : null, wb);
        "keep" === Hb ? jl = {
          mask: wb,
          frames: Mb
        } : "fail" === Hb && (0, Tw.l)(bb, new Error("the join's net session was lost to an event overflow"))
      }(ll, bb, wb))
    }

    function uL(bb, wb, Mb) {
      const eb = bb.overflow ??= {
        frames: 0,
        acks: 0,
        mask: 0,
        outcome: null
      };
      eb.frames += Mb, eb.acks++, eb.mask |= wb;
      const Hb = function(bb, wb, Mb) {
        if (0 === (bb & DM.y.NetSession)) return "none";
        const eb = null !== wb.rejoinedAt && Mb - wb.rejoinedAt < hH;
        return null === wb.rejoin || eb ? "fail" : "rejoin"
      }(wb, bb, performance.now());
      "none" !== Hb && queueMicrotask((() => {
        if (Cl !== bb) return;
        const wb = "rejoin" === Hb && JL();
        eb.outcome = wb ? "rejoined" : "failed", kL(function(bb, wb) {
          return {
            code: 0,
            name: "eventOverflow",
            reason: "Your game fell behind the server.",
            canReconnect: bb,
            automaticallyReconnect: wb,
            requiresRefresh: !1
          }
        }(null !== bb.rejoin, wb), bb.rejoin, wb), fL(), wb && (xl = performance.now())
      }))
    }

    function dL() {
      tL && function(bb, wb) {
        let {
          mesh: Mb,
          worldgen: eb,
          modelPool: Hb
        } = bb;
        "landingPage" === wb ? (null === Mb || void 0 === Mb || Mb.stopWorkers(), null === eb || void 0 === eb || eb.stopWorker(), null === Hb || void 0 === Hb || Hb.stopWorkers()) : ((0, Uw.g)(wb) || "inGame" === wb) && (null === Mb || void 0 === Mb || Mb.restartWorkers(), null === Hb || void 0 === Hb || Hb.startWorkers())
      }({
        mesh: hg,
        worldgen: sg,
        modelPool: cg
      }, Uw.c.get("gameState"))
    }

    function PL(bb) {
      CL = bb, EL && nL(EL, bb), NL()
    }

    function nL(bb, wb) {
      bb.style.visibility = wb ? "visible" : "hidden"
    }

    function yL(bb) {
      var wb;
      const Mb = bb.roomName,
        eb = null !== (wb = bb.joinOptions.lobbyName) && void 0 !== wb ? wb : null;
      return () => {
        RL(Mb, eb)
      }
    }

    function oL() {
      return Mb.e(133).then((() => Mb(54873))).then((bb => {
        let {
          invalidateGuestTrafficCode: wb
        } = bb;
        return wb()
      })).catch((bb => {
        console.warn(`${RV} the cached traffic code could not be dropped`, bb)
      }))
    }

    function TL(bb, wb, Mb) {
      var Hb, pb, Vb;
      let gb = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (BL) return;
      if ((null === (Hb = Cl) || void 0 === Hb ? void 0 : Hb.conn) !== bb) return void(null !== ll && Zl.set(bb, {
        code: wb,
        reason: Mb
      }));
      eO("lost");
      const lb = (null === (pb = pL) || void 0 === pb ? void 0 : pb.conn) !== bb,
        {
          rejoin: Lb,
          game: Ib,
          joinedAt: Ob
        } = Cl;
      qL(), EI();
      const Ub = (0, bw.g)(wb, (0, cH.g)(bb));
      if (console.info(`${RV} the game's connection closed with code ${wb} (${null!==(Vb=Ub.name)&&void 0!==Vb?Vb:"unrecognised"})`), wb === eb.b.gameOrPluginKick.code || gb || (0, Oe.reportDisconnect)(Ub, lg, {
          closeReason: Mb,
          sinceJoinedMs: performance.now() - Ob,
          game: Ib
        }), Ub.requiresRefresh) {
        const bb = "outdatedVersion" === Ub.name,
          Mb = new Error(`the game's connection closed with code ${wb}`),
          eb = () => null === Cl && null === ll;
        return void AO({
          site: Oe.JOIN_SITE,
          error: Mb,
          outdated: bb
        }, (() => {
          eb() && kL(Ub, null, !1)
        }), {
          stillWanted: eb
        })
      }
      const tb = Ub.canReconnect ? Lb : null,
        Cb = null !== tb && (Ub.automaticallyReconnect || lb && LL && "inactivity" === Ub.name) && JL();
      kL(Ub, tb, Cb)
    }

    function kL(bb, wb, Mb) {
      var eb;
      let Hb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
        reasonKey: null,
        canPlayAgain: !1
      };
      if (FL) return;
      ep.d.unwantedLeave(Mb && null !== wb && 0 === Dl.size), null === (eb = Rl) || void 0 === eb || eb.abort();
      const pb = new AbortController;
      Rl = pb;
      const Vb = null === wb ? null : () => {
        pb.signal.aborted || (pb.abort(), wb())
      };
      if (Mb && null !== Vb) {
        rl = performance.now();
        const bb = new CM.e(yM.b, (() => {
          rl = performance.now(), Vb()
        }));
        pb.signal.addEventListener("abort", (() => {
          bb.stop()
        }))
      }
      const gb = {
        code: bb.code,
        name: bb.name,
        reason: bb.reason,
        reasonKey: Hb.reasonKey,
        reconnect: Vb,
        reconnecting: Mb,
        requiresRefresh: bb.requiresRefresh,
        canPlayAgain: Hb.canPlayAgain
      };
      if (Dl.size > 0)
        for (const Lb of [...Dl]) try {
          Lb(gb)
        } catch (lb) {
          console.error(`${RV} an unwanted-leave listener threw`, lb)
        } else Dw((0, jw.g)(bb, null !== Vb, Mb), pb.signal).then((wb => {
          wb && (null !== Vb ? Vb() : bb.requiresRefresh && (0, Ow.g)())
        }))
    }
    const bI = {
      attachSocket: bb => gI(bb),
      onConnection: bb => (fl.add(bb), () => {
        fl.delete(bb)
      }),
      sendRaw: (bb, wb) => {
        const Mb = Fg;
        return null !== Mb && Mb.conn === bb && tO(Mb, wb)
      },
      leaveRoom: GL,
      closeSocket: bb => {
        var wb;
        (null === (wb = Fg) || void 0 === wb ? void 0 : wb.conn) === bb && lI()
      },
      flushNet: LI
    };

    function wI(bb) {
      var wb;
      let {
        aux: Mb,
        payload: eb
      } = bb;
      null === (wb = eg) || void 0 === wb || wb.queueOptions(Mb, eb)
    }

    function MI(bb, wb) {
      wI(function(bb, wb) {
        return mp = bb ? {
          preventMovement: wb
        } : null, bb ? hp(wb) : {
          aux: RM.bc.AdEnd,
          payload: sp
        }
      }(bb, wb))
    }

    function eI(bb) {
      var wb;
      el = bb, null === (wb = eg) || void 0 === wb || wb.setUiPrefs(bb)
    }

    function HI(bb, wb) {
      gg.setMaster(bb, wb)
    }

    function pI(bb) {
      var wb;
      Hl = bb, null === (wb = eg) || void 0 === wb || wb.setEnvPrefs(bb)
    }

    function VI(bb) {
      var wb;
      pl = bb, null === (wb = eg) || void 0 === wb || wb.setLookPrefs(bb)
    }

    function gI(bb) {
      var wb;
      let Mb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new URL(bb.url).origin,
        eb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      if (bb.readyState === WebSocket.CLOSING || bb.readyState === WebSocket.CLOSED) return console.warn(`${RV} a closing or closed socket can't be attached`), null;
      const Hb = eg;
      if (!Hb || Hb.isStopped) return console.warn(`${RV} no core is running to attach a socket to`), bb.close(), null;
      if (null === (0, ib.m)()) return console.warn(`${RV} the game has not started to attach a socket to`), bb.close(), null;
      if (qg > RM.w) return console.warn(`${RV} this core has attached all the sockets it can; reload to play on`), bb.close(), null;
      if (kg && !yg && (kI(Hb, !1, "all"), Hb.isStopped || BL)) return bb.close(), null;
      lI();
      const pb = qg++;
      if (!zI(Hb, "open", pb, eb ? RM.Zb.Resume : 0)) return bb.close(), null;
      eb || dw.c.reset(), Kl = null === ll ? null : {
        join: ll,
        conn: pb,
        activated: !1
      }, bb.binaryType = "arraybuffer";
      const Vb = new He.c((() => {
          ! function(bb, wb) {
            if (Fg !== wb || bb.isStopped || null === UI(wb, vV)) return;
            wb.detach(), Fg = null, OI(bb, wb, vV, "", !0), wb.ws.close()
          }(Hb, gb)
        })),
        gb = {
          ws: bb,
          conn: pb,
          pending: [],
          pendingBytes: 0,
          left: !1,
          resume: eb,
          token: null,
          detach: () => {
            Vb.dispose(), bb.removeEventListener("message", lb), bb.removeEventListener("open", Lb), bb.removeEventListener("close", Ib)
          }
        },
        lb = bb => {
          if (bb.data instanceof ArrayBuffer) {
            var wb;
            const Mb = new Uint8Array(bb.data);
            Vb.heard(), gb.token = null !== (wb = (0, pe.d)(Mb)) && void 0 !== wb ? wb : gb.token,
              function(bb, wb, Mb) {
                rO(bb, (() => {
                  bb.rings.net.writeFrame(wb, Mb) || bb.crash(iM.x, `a socket frame of ${Mb.byteLength} bytes did not fit the net-in ring`)
                }));
                const eb = bb.rings.net.cursor >= NV;
                !YO() && (eb || bb.netWrittenSinceFrame >= SV) && kI(bb, !1, document.hidden ? "all" : "budget");
                fO(bb)
              }(Hb, pb, Mb)
          }
        },
        Lb = () => {
          eb || (0, Cb.v)("wasm_socket_open", performance.now());
          for (const wb of gb.pending.splice(0)) bb.send(wb);
          gb.pendingBytes = 0
        },
        Ib = bb => {
          if (Fg === gb && Hb.rings.net.cursor > 0 && kI(Hb, !1, "all"), Fg === gb) {
            if (gb.detach(), Fg = null, OI(Hb, gb, bb.code, bb.reason) || II(Hb, gb)) return;
            zI(Hb, "close", pb), tI(pb, gb.left), TL(pb, bb.code, bb.reason)
          }
        };
      return bb.addEventListener("message", lb), bb.addEventListener("open", Lb), bb.addEventListener("close", Ib), Fg = gb, null === (wb = (0, ib.m)()) || void 0 === wb || wb.socketAttached(pb), (0, Ub.n)({
        websocketUrl: Mb
      }), pb
    }

    function lI() {
      const bb = Fg;
      if (!bb) return;
      const wb = eg,
        Mb = bb.resume;
      Mb && (LI(), Fg !== bb) || (Fg = null, bb.detach(), bb.ws.close(), null !== wb && (II(wb, bb) || Mb && OI(wb, bb, QV)) || (null !== wb && zI(wb, "close", bb.conn), tI(bb.conn, bb.left)))
    }

    function LI() {
      const bb = eg;
      null !== bb && !bb.isStopped && !BL && !yg && bb.rings.net.cursor > 0 && kI(bb, !1, "all")
    }

    function II(bb, wb) {
      var Mb;
      if (!wb.resume) return !1;
      const eb = El;
      return null !== eb && null !== wb.token && "" !== wb.token && (eb.pendingHold = {
        conn: wb.conn,
        token: `${eb.roomId}:${wb.token}`
      }), zI(bb, "close", wb.conn), null === (Mb = (0, ib.m)()) || void 0 === Mb || Mb.socketDetached(wb.conn), !0
    }

    function OI(bb, wb, Mb) {
      let eb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "",
        Hb = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
      const pb = UI(wb, Mb);
      if (null === pb) return !1;
      const {
        dg: Vb,
        token: gb,
        game: lb,
        joinedAt: Lb
      } = pb;
      if (!zI(bb, "close", wb.conn, RM.y.Held)) return !0;
      console.warn(`${RV} the game's connection ${Hb?"went silent":`dropped with code ${Mb}`}, holding it`);
      const Ib = {
        closeReason: eb,
        sinceJoinedMs: performance.now() - Lb,
        game: lb
      };
      return (0, Oe.reportDisconnect)((0, bw.g)(Mb), lg, Ib, Hb ? "silent" : void 0), Vb.heldConn = wb.conn, Vb.dropCode = Mb, Vb.pendingHold = {
        conn: wb.conn,
        token: `${Vb.roomId}:${gb}`
      }, yg || kI(bb, !1, "all"), !0
    }

    function UI(bb, wb) {
      const Mb = El,
        Hb = Cl,
        pb = bb.token;
      return null === Mb || null === Hb || BL || bb.left || Hb.conn !== bb.conn || null === pb || "" === pb ? null : (0, eb.f)(wb) && Mb.resume.canHoldSeat() ? {
        dg: Mb,
        token: pb,
        game: Hb.game,
        joinedAt: Hb.joinedAt
      } : null
    }

    function tI(bb, wb) {
      var Mb;
      null === (Mb = (0, ib.m)()) || void 0 === Mb || Mb.closeGame(bb), (0, Bp.c)().close(bb), wb || (0, Ub.n)({
        websocketUrl: null
      })
    }

    function CI() {
      const bb = Xl;
      if (null === bb) return;
      const wb = (0, ib.m)();
      BL || null === wb || wb.RZ(bb) ? Xl = null : performance.now() - bl.pause >= iV && (bl.pause = performance.now(), console.warn(`${RV} the cmd ring had no room for SetPaused(${bb}): written before the next frame`))
    }

    function EI() {
      const bb = El;
      El = null, null === bb || void 0 === bb || bb.resume.dispose()
    }

    function FI(bb, wb) {
      var Mb, eb;
      const {
        heldConn: Hb
      } = bb, pb = bb.resume.resumingConn;
      bb.heldConn = 0, bb.pendingHold = null, El === bb && (El = null), "left" === wb ? bb.resume.leave() : bb.resume.dispose(), 0 === zl || (null === (Mb = Fg) || void 0 === Mb ? void 0 : Mb.conn) !== zl || "left" === wb && (null === (eb = Vl) || void 0 === eb ? void 0 : eb.conn) === zl || hI(zl), "gaveUp" === wb && 0 !== pb && hI(pb), 0 !== Hb && "refused" !== wb && (console.info(`${RV} the game held through its drop ${"left"===wb?"was left":"is given up"}`), null === eg || eg.isStopped || zI(eg, "close", Hb), tI(Hb, !1))
    }

    function BI(bb, wb) {
      const Mb = wb.indexOf(":");
      return {
        roomId: Mb < 0 ? bb.roomId : wb.slice(0, Mb),
        roomToken: wb.slice(Mb + 1)
      }
    }

    function sI(bb) {
      (0, uM.logClientMeasurement)("join_preload", bb, {
        client: "wasm"
      })
    }

    function mI(bb) {
      var wb;
      Fl = bb;
      const Mb = bb.replayOffer && hl !== bb.conn;
      ml = Mb ? bb.conn : 0, Bl = Mb || sl.has(bb.conn) ? 0 : bb.conn, Ab.admitted(), bb.conn === zl && (zl = 0);
      const eb = El;
      null !== eb && (null === (wb = Cl) || void 0 === wb ? void 0 : wb.conn) === bb.conn && eb.resume.onInitialInfo(bb)
    }

    function hI(bb) {
      var wb;
      const Mb = Fg;
      (null === Mb || void 0 === Mb ? void 0 : Mb.conn) === bb && (Mb.left = !0, null === (wb = (0, ib.m)()) || void 0 === wb || wb.socketLeft(), (0, Ub.n)({
        websocketUrl: null
      }), GL(bb) ? setTimeout((() => {
        Fg === Mb && lI()
      }), ww.d) : lI())
    }

    function zI(bb, wb, Mb) {
      let eb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        Hb = !1;
      return rO(bb, (() => {
        const {
          net: pb
        } = bb.rings;
        Hb = "open" === wb ? pb.writeOpen(Mb, eb) : pb.writeClose(Mb, eb), Hb || bb.crash(iM.x, `a socket ${wb} did not fit the net-in ring`)
      })), Hb
    }

    function XI(bb, wb, Mb) {
      let eb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const Hb = "noContext" === wb ? "noContext" : "blockedAfterLoss" === wb ? "graphicsLost" : bb;
      (0, Oe.showUnsupported)(Hb, "unsupported", Mb, {
        ...eb,
        decline: wb
      })
    }
    const xI = 1500;

    function jI(bb) {
      return (0, qM.q)(bb) && KI(bb)
    }

    function KI(bb) {
      return 1 === bb.missing.length && bb.missing[0] === qM.c
    }
    const rI = "wasmNoContextWaited";

    function RI(bb, wb) {
      const Mb = KI(bb),
        eb = Mb ? (0, qM.kb)() : "",
        Hb = wb || (0, qM.bb)(eb) ? "blockedAfterLoss" : Mb ? "noContext" : "unsupported",
        pb = `No WebGPU or WebGL2, and WebGL1 lacks ${bb.missing.join(", ")}`;
      return {
        decline: Hb,
        detail: "" === eb ? pb : `${pb}; ${eb}`,
        details: {
          missing: bb.missing.join(",")
        },
        retries: "unsupported" !== Hb && tL
      }
    }

    function DI(bb) {
      console.warn(`${RV} ${bb}: reloading once more onto the wasm client`), (0, Up.q)(), (0, Oe.flushCrashReports)(Ow.e).then(Ow.g, Ow.g)
    }

    function cI() {
      return tL && "address" !== aw.A.reason
    }

    function YI(bb, wb, Mb, eb) {
      return Sl(bb, wb, Mb, eb)
    }

    function ZI() {
      null === Ql || null === eg || eg.isStopped || BL || null !== Zg || null === nV || (Zg = Ql(nV, WI, JI().follow))
    }

    function fI() {
      var bb, wb, Mb;
      return null !== (bb = null === (wb = pg) || void 0 === wb || null === (Mb = wb.textures) || void 0 === Mb ? void 0 : Mb.files()) && void 0 !== bb ? bb : null
    }

    function AI(bb) {
      JI().follow((wb => {
        null !== wb && Promise.all([Promise.all([Mb.e(232), Mb.e(54)]).then((() => Mb(54912))), (0, Up.J)()]).then((bb => {
          let [{
            followPagePackFiles: Mb
          }, eb] = bb;
          const Hb = null === eb || (0, qM.q)(eb) ? "webgl" : eb.backend;
          Mb(wb, Mp.i, Hb, (bb => {
            Mp.i.setPageFiles(bb)
          }), WI)
        }), (wb => {
          console.warn(`${RV} the texture pack's files didn't load: the previews draw the shipped ones until the next opens`, wb), bb()
        }))
      }))
    }

    function WI(bb, wb) {
      console.warn(`${RV} ${bb}`, wb)
    }

    function JI() {
      return Hg ??= new Kp({
        load: bb => Promise.all([Mb.e(232), Mb.e(67)]).then((() => Mb(54916))).then((wb => {
          let {
            startPageTexturePackFeed: Mb
          } = wb;
          return Mb(WI, bb)
        })),
        store: UM.h,
        bO: bb => {
          Ug.then((() => {
            (0, Oe.reportTexturePackFeedLoadFailure)(bb, lg)
          }))
        }
      }), Hg
    }
    const SI = bb => JI().follow(bb);

    function NI() {
      return JI().loaded()
    }
    const vI = function(bb, wb, Mb) {
        let eb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => performance.now(),
          Hb = 0;
        return async function(pb, Vb) {
          let gb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => !0;
          const lb = ++Hb,
            Lb = eb() + wb,
            Ib = await
          function(bb, wb) {
            let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {};
            return new Promise((eb => {
              const Hb = setTimeout((() => {
                eb(null), bb.then((bb => {
                  null !== bb && (bb.joinedWithout(), Mb(bb))
                }))
              }), wb);
              bb.then((bb => {
                clearTimeout(Hb), eb(bb)
              }))
            }))
          }(bb(pb), wb, (bb => {
            lb === Hb && gb() && Vb(bb, eb() + wb).catch((bb => {
              Mb("the texture pack step after the join failed", bb)
            }))
          }));
          return null === Ib ? null : Vb(Ib, Lb)
        }
      }((bb => (0, fw.j)(bb) ? JI().request() : JI().forJoin()), jp.b, WI),
      QI = function(bb, wb) {
        let Mb = !1;
        return {
          setGamePackConfirm: bb => {
            Mb = null !== bb, wb(bb)
          },
          packStep: (wb, eb, Hb) => bb(wb, eb, (() => Mb && Hb()))
        }
      }(vI, (bb => {
        JI().setGamePackConfirm(bb)
      }));

    function GI(bb) {
      QI.setGamePackConfirm(bb)
    }

    function qI() {
      if (BL || null !== ul || null === Gl || null === il) return;
      const {
        backend: bb,
        canvas: wb,
        fallbackReason: Mb,
        adapterVendor: eb
      } = il, Hb = Gl;
      Gl = null;
      try {
        ul = Hb({
          backend: bb,
          canvas: wb,
          fallbackReason: Mb,
          adapterVendor: eb,
          joinedGame: () => BL ? null : Vl,
          canSend: () => !BL && null !== Vl && Vl.conn === Bl,
          inGame: iI,
          shaderPackReach: () => {
            var bb, wb;
            return null !== (bb = null === (wb = Sg) || void 0 === wb ? void 0 : wb.reachInJoinedGame()) && void 0 !== bb ? bb : null
          },
          YE: () => fg,
          msaa: () => al > 1,
          writeCmd: (bb, wb, Mb) => null !== nV && nV(bb, wb, Mb),
          takeFailedMeshJobs: () => {
            var bb, wb;
            return null !== (bb = null === (wb = hg) || void 0 === wb ? void 0 : wb.takeFailedMeshJobs()) && void 0 !== bb ? bb : 0
          },
          readLoadCounts: bb => {
            var wb, Mb;
            return null !== (wb = null === (Mb = eg) || void 0 === Mb ? void 0 : Mb.readLoadCounts(bb)) && void 0 !== wb && wb
          },
          mainStalled: (bb, wb, Mb, eb) => {
            (0, Oe.reportMainStall)(bb, wb, Mb, eb, lg)
          },
          sZ: bb => {
            var wb, Mb, eb;
            return null !== (wb = null === (Mb = Jl) || void 0 === Mb || null === (eb = Mb.sZ) || void 0 === eb ? void 0 : eb.call(Mb, bb)) && void 0 !== wb ? wb : -1
          }
        })
      } catch (pb) {
        console.error(`${RV} the frame telemetry didn't start`, pb)
      }
    }

    function aI(bb, wb) {
      try {
        var Mb, eb, Hb;
        const pb = Al && null !== (Mb = null === (eb = eg) || void 0 === eb || null === (Hb = eb.lastHeader) || void 0 === Hb ? void 0 : Hb.renderPending) && void 0 !== Mb ? Mb : 0;
        (0, ne.f)(wb, bb, iI() && !(null !== mp), pb)
      } catch (pb) {
        (0, ne.w)(), console.error(`${RV} the quality steps stopped`, pb)
      }
    }

    function iI() {
      return null !== Vl && pL === Vl && !BL
    }

    function uI(bb) {
      const wb = ul;
      ul = null;
      try {
        null === wb || void 0 === wb || wb.stop()
      } catch {}
      console.error(`${RV} the frame telemetry threw: it stops`, bb)
    }

    function dI(bb) {
      var wb, Mb, eb, Hb;
      if ((0, Bp.c)().fire(bb), "message" === bb.type) {
        if (og++, bb.tV === RM.Hc.ERROR && null !== ll) {
          var pb;
          const {
            text: wb,
            dropsCache: Mb
          } = (0, bw.m)((new TextDecoder).decode(bb.payload));
          cl ||= Mb, (null === (pb = Kl) || void 0 === pb ? void 0 : pb.conn) === bb.conn && (Yl = wb)
        } else if (bb.tV === DM.nc.ResumeComplete) {
          var Vb;
          hl = bb.conn, bb.conn === ml && (ml = 0, Bl = sl.has(bb.conn) ? 0 : bb.conn), null === (Vb = El) || void 0 === Vb || Vb.resume.onResumeComplete(bb.conn)
        }
        return
      }
      bb.phase === RM.B.Left ? Tg = bb.conn : bb.phase === RM.B.Activated && (null === (wb = Kl) || void 0 === wb ? void 0 : wb.conn) === bb.conn ? Kl.activated = !0 : bb.phase === RM.B.Resumed ? function(bb) {
        var wb, Mb;
        zl = bb;
        const eb = El;
        if (null === eb || 0 === eb.heldConn || (null === (wb = Fg) || void 0 === wb ? void 0 : wb.conn) !== bb || !Fg.resume || null === Cl) return;
        console.info(`${RV} the game resumed on conn ${bb}, waiting for its InitialInfo`);
        const Hb = eb.heldConn;
        eb.heldConn = 0, Fg.resume = !1, Cl.conn = bb, (null === (Mb = Ul) || void 0 === Mb ? void 0 : Mb.conn) === Hb && (Ul = {
          conn: bb,
          info: Ul.info
        }), dw.c.apply({
          shopInfo: null,
          _shopVersion: Aw.e
        })
      }(bb.conn) : bb.phase === RM.B.Held ? function(bb) {
        var wb;
        const Mb = El,
          eb = null !== (wb = null === Mb || void 0 === Mb ? void 0 : Mb.pendingHold) && void 0 !== wb ? wb : null;
        if (null !== Mb && null !== eb && eb.conn === bb) return Mb.pendingHold = null, Mb.heldConn = bb, zl = 0, console.warn(`${RV} the core holds the game, reconnecting`), void Mb.resume.onDropped(eb.token);
        if (bb === zl) {
          zl = 0;
          const wb = eg;
          null === wb || wb.isStopped || (console.info(`${RV} the core held again a resumed game the shell ended before its InitialInfo: closing it again`), zI(wb, "close", bb))
        }
      }(bb.conn) : bb.phase === RM.B.Closed && (null === (Mb = El) || void 0 === Mb || null === (eb = Mb.pendingHold) || void 0 === eb ? void 0 : eb.conn) === bb.conn && (El.heldConn === bb.conn ? function(bb) {
        const wb = bb.heldConn,
          Mb = bb.dropCode;
        FI(bb, "refused"), console.info(`${RV} the core didn't hold the game through its drop: it hadn't started`), queueMicrotask((() => {
          tI(wb, !1), TL(wb, Mb, "", !0)
        }))
      }(El) : El.pendingHold = null), bb.phase !== RM.B.Held && bb.phase !== RM.B.Left && bb.phase !== RM.B.Closed || (sl.add(bb.conn), bb.conn === Bl && (Bl = 0));
      const gb = Object.keys(RM.B).find((wb => RM.B[wb] === bb.phase)),
        lb = 0 === bb.code ? "" : ` (code ${bb.code})`;
      console.info(`${RV} conn ${bb.conn}: ${null!==gb&&void 0!==gb?gb:bb.phase}${lb}, ${og} raw messages so far`), (null === (Hb = Vl) || void 0 === Hb ? void 0 : Hb.conn) !== bb.conn || bb.phase !== RM.B.Left && bb.phase !== RM.B.Closed || QL(null), Ol !== bb.conn || bb.phase !== RM.B.Left && bb.phase !== RM.B.Closed || (Ol = null, null === Vl && null === ll && ep.d.setGame(void 0));
      for (const Ib of [...fl]) try {
        Ib(bb.conn, bb.phase, bb.code)
      } catch (Lb) {
        (0, cM.m)(Lb, `${RV} a connection listener threw`)
      }
    }
    const PI = 9e4,
      nI = 1e3;

    function yI() {
      (0, Up.q)(), UL.forget(), null === Vl && null === ll || (0, xe.e)(), queueMicrotask((() => {
        try {
          EO()
        } catch (bb) {
          console.warn(`${RV} stopping before the reload threw`, bb)
        }(0, Oe.flushCrashReports)(Ow.e).then(Ow.g, Ow.g)
      }))
    }

    function oI() {
      const bb = eg;
      null === bb || bb.isStopped || null === Fg || yg || !bb.hasPendingCommands() || kI(bb, !1, "budget")
    }

    function TI(bb) {
      var wb;
      const Mb = Vl;
      bb.persisted || null === Mb || (null === (wb = Fg) || void 0 === wb ? void 0 : wb.conn) !== Mb.conn || Fg.left || Mb.leave()
    }

    function kI(bb, wb, eb) {
      let Hb = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const pb = yg;
      yg = !0;
      try {
        const pb = bb.rings.net.cursor >= NV;
        pb && "all" !== eb && !document.hidden && sO("backlog", `a shown tab's net-in is ${bb.rings.net.cursor} bytes behind: one frame reads it all`);
        return function(bb, wb, eb, Hb) {
          var pb, Vb, gb, lb;
          if (BL) return !1;
          if (rO(bb, wO), BL || bb.isStopped) return !1;
          OO() && Qg("modelsIn");
          CI(), ag = performance.now(), Tg = null, kg = !1, (0, ab.R)(), null === (pb = rg) || void 0 === pb || pb.beforeFrame(), LH(ag, bb), (0, ab.I)(ag, MO), ng = !0;
          const Lb = wb && IO();
          let Ib;
          try {
            Ib = bb.frame(ag, Lb, eb)
          } finally {
            ng = !1
          }
          if (!Ib) return !1;
          ql.observe(null !== (Vb = null === (gb = bb.lastHeader) || void 0 === gb ? void 0 : gb.chunksCancelled) && void 0 !== Vb ? Vb : 0);
          const Ob = bb.lastFrameKind,
            Ub = (0, LM.b)(Ob);
          (function(bb) {
            null !== Gp && Gp.afterFrame(performance.now(), bb)
          })(Ub), null === (lb = dl) || void 0 === lb || lb.frame(bb, ag, Ob), wb && (gL = Ub);
          Ub && ((0, HM.e)(ag), eL.frame(ag), IL.end());
          if (null !== ul) try {
            ul.frameRan(bb, ag, performance.now(), Ob)
          } catch (Eb) {
            uI(Eb)
          }
          "drawn" === Ob && LO() && function() {
            for (const bb of [...Ip]) bb()
          }();
          bb.forEachNetOut(UO);
          const tb = Fg;
          null !== Tg && (null === tb || void 0 === tb ? void 0 : tb.conn) === Tg && tO(tb, ww.g);
          lO(bb),
            function(bb) {
              const wb = 0 !== (bb.headerWord(DM.L.LoadSteps) & DM.X.JoinPreload);
              wb !== Il && (Il = wb, (0, Oe.setCrashAdPreload)(wb), (0, Be.Q)())
            }(bb), wb && (! function(bb) {
              var wb, eb, Hb;
              if (null === Vl || !IO()) return;
              const pb = bb.headerWord(DM.L.LoadSteps);
              null === ML || pL === Vl && !ML.frame(ag, 0 !== (pb & DM.$.TerrainDrawn)) || (ML = null);
              if (0 === (pb & DM.X.PlayerBound)) return;
              const Vb = bb.lastHeader,
                gb = !Al || 0 === (null === Vb || void 0 === Vb ? void 0 : Vb.renderPending);
              !ol && gb && (ol = !0, performance.mark(JV));
              if (pL === Vl) return;
              const lb = null !== (wb = null === Vb || void 0 === Vb ? void 0 : Vb.firstView) && void 0 !== wb ? wb : RM.X.NotYet;
              if (Al && lb === RM.X.NotYet) return;
              if (yl && (!0 !== (null === (eb = (0, ib.m)()) || void 0 === eb ? void 0 : eb.isSessionLive) || !gb)) return;
              var Lb;
              pL = Vl, IL.shown(), Al && null !== Cl && function(bb, wb) {
                let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : UM.i;
                const eb = Array.from(wb).filter(KH).slice(0, jH);
                if ("" === bb || 0 === eb.length) return;
                const Hb = RH(Mb).filter((wb => wb.game !== bb));
                Mb.setItem(XH, [{
                  game: bb,
                  codes: eb
                }, ...Hb].slice(0, xH))
              }(Cl.game, null !== (Lb = bb.firstViewTerrainCodes()) && void 0 !== Lb ? Lb : []);
              const Ib = Vl;
              if (setTimeout((() => {
                  Vl === Ib && (0, Cb.q)()
                }), 0), null === (Hb = Sg) || void 0 === Hb || Hb.playable(), function() {
                  clearTimeout(Eg), Eg = setTimeout((() => {
                    iI() && cO((bb => {
                      let {
                        prefetchWorldgenWorker: wb
                      } = bb;
                      wb()
                    }))
                  }), PV)
                }(), yl) return;
              yl = !0, eL.shown(), performance.mark(WV), (0, Ap.m)("render") && Promise.all([Mb.e(91), Mb.e(57)]).then((() => Mb(5573))).then((bb => {
                let {
                  renderDebugPlayable: wb
                } = bb;
                wb()
              }), (bb => {
                console.warn("The render debug topic didn't load", bb)
              }));
              const Ob = Math.round(performance.now()),
                Ub = bb.readViewQueuedPrograms();
              null !== Ub && (0, Cb.v)("wasm_view_links", Ob, (0, Fb.Kb)(Ub));
              const tb = null === wL || null === kl ? 0 : Math.max(0, kl - wL),
                Eb = null === wL ? 0 : Math.max(0, Ob - wL),
                Bb = Al ? bb.readFirstViewWait(tb, Eb) : null;
              null !== Bb && (0, Cb.u)(Bb);
              if (Al && lb !== RM.X.Drawn) {
                const wb = lb === RM.X.HeldBackstop ? "held_draws" : "long",
                  {
                    cause: Mb
                  } = VO(bb);
                if (console.warn(`${RV} playable at ${Ob} ms on the first view's ${wb} backstop, ${Mb}: it wasn't drawn whole in time`), (0, Cb.v)("wasm_view_backstop", Ob, `${wb}:${Mb}`), "long" === wb) {
                  var sb, mb;
                  const wb = null !== (sb = null === (mb = Cl) || void 0 === mb ? void 0 : mb.game) && void 0 !== sb ? sb : "";
                  ML = new je.b((() => {
                    const {
                      cause: Mb,
                      census: eb
                    } = VO(bb);
                    (0, Oe.reportFirstViewNoTerrain)(wb, Mb, eb, lg), (0, qw.w)("noTerrain")
                  }))
                }
              } else console.info(`${RV} playable at ${Ob} ms${Al?"":" (no renderer)"}`);
              setTimeout(vl, 0), (0, nw.f)().catch((bb => {
                console.error(`${RV} item sprites didn't load, so item particles show the missing texture`, bb)
              })), dH.b.warm()
            }(bb), Ub && null !== Vl && 0 !== (bb.headerWord(DM.L.LoadSteps) & DM.$.MeshLanded) && (VL = Vl), (0, PH.h)(null !== Vl && VL === Vl && pL !== Vl), (0, PH.j)(null !== Vl));
          (0, iM.P)(bb, {
            worldgen: sg,
            mesh: hg
          }),
          function(bb) {
            bb.forEachEvent(OH);
            for (const wb of IH) try {
              (0, HH.e)(wb)
            } catch (Eb) {
              if ((0, cM.i)(Eb)) {
                bb.crashOn(iM.l, Eb);
                break
              }
              console.error(`${VH} an input action listener threw`, Eb)
            }
            IH.length = 0
          }(bb), Hb && (0, lM.b)();
          return !bb.isStopped
        }(bb, wb, "all" === eb || pb, Hb)
      } finally {
        yg = pb, pb || (ig = performance.now(), NL())
      }
    }

    function bO(bb) {
      console.error(`${RV} a frame-start listener threw`, bb)
    }

    function wO() {
      var bb, wb, Mb, eb;
      null === (bb = Dg) || void 0 === bb || bb.drain(nV, yV), null === (wb = Ag) || void 0 === wb || wb.drain(nV), null === (Mb = Wg) || void 0 === Mb || Mb.drain(performance.now()), Nl(nV), null === (eb = Zg) || void 0 === eb || eb.drain()
    }

    function MO(bb) {
      console.error(`${RV} a before-frame listener threw`, bb)
    }

    function eO(bb) {
      var wb, Mb;
      const eb = eg;
      if (null === eb) return;
      if (eb.isStopped || BL || (0, Up.e)()) return void eL.shown();
      const Hb = eL.end(bb, performance.now());
      if (null === Hb) return;
      const {
        cause: pb,
        census: Vb,
        loadSteps: gb
      } = VO(eb), lb = {
        cause: pb,
        bound: 0 !== (gb & DM.X.PlayerBound),
        preload: 0 !== (gb & DM.X.JoinPreload),
        startupLoaded: IO(),
        renderPending: null !== (wb = null === (Mb = eb.lastHeader) || void 0 === Mb ? void 0 : Mb.renderPending) && void 0 !== wb ? wb : 0,
        wait: eb.readFirstViewWait(0, 0),
        canvasEmpty: null !== il && (0, Ke.e)(il.canvas)
      };
      lb.bound && null === lb.wait && console.warn(`${RV} the first view's wait couldn't be read as the load ended: its report says lacked none`), (0, Oe.reportFirstViewUnshown)(HL, Hb, lb, Vb, lg), "hidden" !== bb && "pagehide" !== bb || (0, Oe.flushCrashReports)(Ow.e)
    }

    function HO() {
      document.hidden ? (LL = !0, eO("hidden")) : eL.pageShown(performance.now())
    }

    function pO() {
      eO(document.hidden ? "hidden" : "pagehide")
    }

    function VO(bb) {
      const wb = (0, ib.m)(),
        Mb = (0, ib.z)(),
        eb = null === wb || null === Mb ? null : Mb.readDrawCensus(wb.api),
        Hb = bb.headerWord(DM.L.LoadSteps);
      return {
        cause: (0, je.h)(Hb, eb),
        census: eb,
        loadSteps: Hb
      }
    }
    const gO = {
      ChunkRequested: "wasm_chunk_requested",
      ChunkStored: "wasm_chunk_stored",
      MeshLanded: "wasm_mesh_landed",
      PlayerChunk: "wasm_player_chunk",
      TerrainDrawn: "wasm_terrain_drawn"
    };

    function lO(bb) {
      var wb;
      if (yl) return;
      if (null === kl && IO() && (kl = performance.now()), null === Vl || 0 === (bb.headerWord(DM.L.LoadSteps) & DM.X.PlayerBound) ? wL = null : wL ??= performance.now(), null === ll && null === Vl) return;
      null === kl || bL || (bL = !0, (0, Cb.v)("wasm_startup_loaded", kl));
      let Mb = 0;
      null !== Vl ? Mb = -1 : !0 === (null === (wb = Kl) || void 0 === wb ? void 0 : wb.activated) && (Mb = ~DM.$.TerrainDrawn);
      const eb = bb.headerWord(DM.L.LoadSteps) & Mb & ~Tl;
      if (0 === eb) return;
      Tl |= eb;
      const Hb = performance.now();
      var pb, Vb, gb;
      0 !== (eb & DM.$.PlayerChunk) && (eL.playerChunk(Hb, document.hidden), HL = null !== (pb = null !== (Vb = null === (gb = Cl) || void 0 === gb ? void 0 : gb.game) && void 0 !== Vb ? Vb : Ll) && void 0 !== pb ? pb : "", (0, Oe.warmCrashCounts)());
      for (const [lb, Lb] of Object.entries(gO)) 0 !== (eb & DM.$[lb]) && (0, Cb.v)(Lb, Hb)
    }

    function LO() {
      return Al && IO()
    }

    function IO() {
      return Jg && OO()
    }

    function OO() {
      return null === Dg || Dg.startupDone
    }

    function UO(bb, wb) {
      const Mb = Fg;
      (null === Mb || void 0 === Mb ? void 0 : Mb.conn) === bb ? tO(Mb, wb) : Ml++
    }

    function tO(bb, wb) {
      const {
        ws: Mb
      } = bb;
      return Mb.readyState === WebSocket.OPEN ? (Mb.send(wb), !0) : Mb.readyState === WebSocket.CONNECTING && bb.pendingBytes + wb.byteLength <= aV ? (bb.pending.push(wb.slice()), bb.pendingBytes += wb.byteLength, !0) : (Ml++, !1)
    }

    function CO() {
      return null !== Vl && LO()
    }

    function EO() {
      var bb, wb, Mb, eb, Hb, pb, Vb, gb, lb, Lb, Ib, Ob, Ub, tb, Cb, Eb, Fb;
      BL = !0, lL.stop(), IL.end(), (0, Jp.endLookDebugTake)(), Gp = null, EI(), (0, ab.O)().unlockPointer(), (0, ab.K)(null), null === (bb = Rg) || void 0 === bb || bb(), Rg = null, null === (wb = (0, ib.z)()) || void 0 === wb || wb.followCursorAim(null), (0, lM.C)(), (0, ib.i)(), gg.stop(), null === (Mb = Pl) || void 0 === Mb || Mb(), Pl = null, null === (eb = nl) || void 0 === eb || eb(), nl = null, null === (Hb = ul) || void 0 === Hb || Hb.stop(), ul = null, (0, re.n)(null), null === (pb = Bg) || void 0 === pb || pb(), Bg = null, null === (Vb = sg) || void 0 === Vb || Vb.stop(), sg = null, null === (gb = hg) || void 0 === gb || gb.stop(), hg = null, null !== (lb = pg) && void 0 !== lb && null !== (Lb = lb.textures) && void 0 !== Lb && Lb.assets && (0, bp.l)(null), null === (Ib = pg) || void 0 === Ib || Ib.stop(), pg = null, Vg = null;
      const Bb = zg;
      zg = null, Bb && (Bb.stop(), KO(Bb)), null === (Ob = Ag) || void 0 === Ob || Ob.dispose(), Ag = null, null === (Ub = Wg) || void 0 === Ub || Ub.dispose(), Wg = null, Dg = null, null === (tb = Yg) || void 0 === tb || tb(), Yg = null, null === (Cb = Kg) || void 0 === Cb || Cb(), Kg = null, null !== Pg && (clearTimeout(Pg), Pg = null), null === (Eb = rg) || void 0 === Eb || Eb.stop(), rg = null, fL(), ep.d.release(), lI();
      const sb = Zg;
      Zg = null;
      try {
        null === sb || void 0 === sb || sb.dispose()
      } catch (mb) {
        console.warn(`${RV} the sky's images didn't release`, mb)
      }(0, nH.g)(null), null === (Fb = wg) || void 0 === Fb || Fb.pagePreviews().endSession(null === (0, Jw.q)())
    }

    function FO(bb, wb) {
      var Mb, eb;
      const Hb = null !== (Mb = null === (eb = zg) || void 0 === eb ? void 0 : eb.details()) && void 0 !== Mb ? Mb : {},
        pb = bb.site === cV || bb.site === YV || bb.site === Oe.RENDER_RELOAD_SITE || bb.site === ZV ? bb.error instanceof WebAssembly.RuntimeError || bb.error instanceof NM.d : !(0, qM.s)(bb.error) && (0, iM.J)(bb);
      pb && bb.error instanceof Error && (0, Jw.L)(bb.error);
      const Vb = pb || bb.site === iM.z ? (0, Oe.readTrap)(bb.error) : null,
        gb = null !== Vb && (0, ZM.d)(Vb.kind, Vb.refusedBytes) ? Vb.refusedBytes : 0,
        lb = (0, ge.o)(),
        Lb = null === Xg ? (0, aH.v)(function() {
          try {
            return (0, Jw.t)().buffer.byteLength
          } catch {
            return 0
          }
        }(), gb, lb) : Xg.ceilingMayRefuse(gb, lb),
        Ib = gb > 0 && !Lb && cI() && !(0, Up.e)() ? (0, ge.p)() : void 0;
      var Ob;
      if (EO(), (0, Up.e)()) return UL.releaseNow(), console.warn(`${RV} the session stopped at ${bb.site} as the page reloads`, bb.error), void((0, qM.s)(bb.error) || (null === (Ob = bb.header) || void 0 === Ob ? void 0 : Ob.lastError) === RM.I.CoreBusy || (0, Oe.reportStoppedCore)(bb, wb, Vb, {
        memoryDetails: Hb,
        memoryStep: Ib
      }));
      (0, Oe.showCrash)(bb, wb, Vb, {
        memoryDetails: Hb,
        memoryStep: Ib
      })
    }

    function BO(bb) {
      var wb, Mb;
      let {
        text: eb,
        reload: Hb,
        stillBlocked: pb
      } = bb;
      if (FL) return;
      FL = !0, (0, Be.fb)(), null === (wb = Rl) || void 0 === wb || wb.abort(), Rl = null, ep.d.release();
      const Vb = tL ? null !== (Mb = eb.cancel) && void 0 !== Mb ? Mb : "general:back" : null;
      !async function(bb, wb, Mb) {
        let eb = bb;
        for (; await Dw(eb) && wb;) {
          if (null === Mb || tM(!1) || tM(!0)) return void(0, Ow.g)();
          eb = Mb
        }
        tL && (0, Ow.f)("/")
      }({
        ...eb,
        cancel: Vb
      }, Hb, null === pb ? null : {
        ...pb,
        cancel: Vb
      })
    }

    function sO(bb, wb) {
      const Mb = performance.now();
      return !(Mb - bl[bb] < iV) && (bl[bb] = Mb, console.warn(`${RV} ${wb}`), !0)
    }

    function mO(bb) {
      const {
        input: wb,
        net: Mb,
        worker: eb
      } = bb.rings, Hb = bb.optionsDropped, pb = wb.dropped + Hb + Mb.dropped + eb.dropped + Ml;
      pb !== wl && sO("dropped", `${pb} records dropped so far (input ${wb.dropped}, options ${Hb}, net ${Mb.dropped}, worker ${eb.dropped}, net-out ${Ml})`) && (wl = pb)
    }

    function hO() {
      var bb, wb;
      const Mb = (0, Fe.e)();
      if (null === Mb) return null;
      const eb = (0, Xe.r)(Mb);
      return {
        ...eb,
        horizontal: Math.min(eb.horizontal, null !== (bb = null === (wb = zg) || void 0 === wb ? void 0 : wb.shedDistanceInUse()) && void 0 !== bb ? bb : 1 / 0)
      }
    }
    const zO = new WeakSet;

    function XO(bb) {
      var wb, Mb;
      return {
        samples: Al ? al : null,
        sunShadows: bb,
        renderDistance: null !== (wb = null === (Mb = hO()) || void 0 === Mb ? void 0 : Mb.horizontal) && void 0 !== wb ? wb : null
      }
    }

    function xO(bb) {
      Ll = bb, (0, Be.Q)()
    }

    function jO() {
      var bb, wb, Mb;
      const eb = hO();
      return {
        ...null === (bb = zg) || void 0 === bb ? void 0 : bb.pageKillSnapshot(),
        renderDistance: null !== (wb = null === eb || void 0 === eb ? void 0 : eb.horizontal) && void 0 !== wb ? wb : null,
        renderDistanceVertical: null !== (Mb = null === eb || void 0 === eb ? void 0 : eb.vertical) && void 0 !== Mb ? Mb : null,
        chunkCap: xg,
        budgetBasis: jg,
        renderBackend: (0, Up.D)(),
        adPreload: Il,
        ...(0, se.c)(Ll)
      }
    }

    function KO(bb) {
      var wb;
      console.info(`${RV} wasm memory at the session's end`, bb.details());
      const {
        wasmMainMiB: Mb,
        wasmWorkersMiB: eb,
        peakStoredChunks: Hb
      } = bb.pageKillSnapshot(), pb = navigator.deviceMemory;
      (0, uM.logClientMeasurement)("wasm_memory_end", {
        wasmMainMiB: Mb,
        wasmWorkersMiB: eb,
        peakStoredChunks: Hb
      }, {
        client: "wasm",
        renderBackend: null !== (wb = (0, Up.D)()) && void 0 !== wb ? wb : "none",
        os: (0, me.getOperatingSystem)(),
        deviceMemory: String(null !== pb && void 0 !== pb ? pb : "unreported")
      })
    }

    function rO(bb, wb) {
      if (!bb.isStopped) try {
        wb()
      } catch (Mb) {
        bb.crash(iM.B, Mb)
      }
    }

    function RO() {
      return mg ??= Mb.e(84).then((() => Mb(54925))).catch((bb => {
        throw mg = null, bb
      })), mg
    }
    async function DO() {
      const {
        createWorldgenWorker: bb,
        worldgenWorkerReady: wb
      } = await RO();
      return await wb(), bb
    }

    function cO(bb) {
      var wb;
      null === (wb = mg) || void 0 === wb || wb.then(bb, (() => {}))
    }

    function YO() {
      return performance.now() - Math.max(ig, ug) >= uV
    }

    function ZO(bb) {
      const wb = document.hidden || dg ? "all" : "budget";
      dg = !0;
      const Mb = kI(bb, !1, wb);
      var eb;
      Mb && (mO(bb), null === (eb = zg) || void 0 === eb || eb.afterFrame());
      return Mb
    }

    function fO(bb) {
      bb.isStopped || 0 === bb.rings.net.cursor || YO() && !ZO(bb) || bb.rings.net.cursor > 0 && performance.now() - ug >= uV / 2 && function(bb) {
        Pg ??= setTimeout((() => {
          Pg = null, fO(bb)
        }), uV)
      }(bb)
    }

    function AO(bb, wb) {
      return async function(bb, wb, Mb) {
        let {
          stop: eb,
          stillWanted: Hb,
          beforeReload: pb
        } = Mb;
        const Vb = await (0, zH.k)(bb, {
          stillWanted: Hb,
          beforeReload: async () => {
            eb(), await Promise.all([(0, Oe.flushCrashReports)(Ow.e), null === pb || void 0 === pb ? void 0 : pb()])
          },
          reload: Ow.g
        });
        return Vb || wb(), Vb
      }(bb, wb, {
        ...arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        stop: EO
      })
    }
    let WO = !1;

    function JO() {
      return WO = !0, async function(bb, wb, eb) {
        const {
          gamePackSource: Hb
        } = await Mb.e(132).then((() => Mb(42721)));
        await QI.packStep(bb, ((Mb, eb) => Mb.packForGame(bb, Hb(wb), eb)), eb)
      }(...arguments)
    }

    function SO(bb) {
      ! function(bb, wb) {
        bb((bb => {
          null === bb || void 0 === bb || bb.subscribe((bb => {
            let {
              pack: Mb,
              gameSource: eb
            } = bb;
            wb(null === eb || null === Mb ? null : {
              pack: Mb,
              source: "" === eb ? null : eb
            })
          }))
        }))
      }(SI, bb)
    }
    let NO = !1,
      vO = null,
      QO = !1,
      GO = !1;

    function qO() {
      var bb;
      NO || (NO = !0, rw = (bb, wb) => (0, Bw.x)(sw.g.get().getCurrentLanguageCode(), bb, wb), jL("play", Lw), (0, Ub.l)(new wU), gb.gameBridge.attach(kb), nO().catch((() => {})), (0, ib.D)((bb => {
        zw(bb.setTextHost)
      })), bb = uO, Dl.add(bb), function(bb) {
        for (const wb of Ng) bb(wb);
        vg.add(bb)
      }((bb => {
        iO(aO[bb])
      })))
    }
    const aO = {
      booted: pb.i.INITIALISE_NOA,
      texturesIn: pb.i.REGISTRATION,
      modelsIn: pb.i.SETUP_LIFEFORMS
    };

    function iO(bb) {
      lb.k.iI("matchmakeAndPlayStepCompleted", {
        step: bb,
        totalSubSteps: 1
      })
    }

    function uO(bb) {
      if (!QO) return;
      const {
        gameNameWithVariation: wb,
        lobbyName: Mb
      } = (0, Ub.e)();
      if (bb.code === eb.b.serverUpdating.code) return (new wU).leaveLive(), void PO(wb, Mb);
      Nb.e.leftGame(wb, bb.code), lb.k.iI("unwantedLeftGame", {
        reason: dO(bb),
        requiresRefresh: bb.requiresRefresh,
        canReconnect: null !== bb.reconnect,
        automaticallyReconnect: bb.reconnecting,
        canPlayAgain: bb.canPlayAgain,
        gameNameWithVariation: wb,
        lobbyName: Mb
      }), (new wU).leaveLive()
    }

    function dO(bb) {
      return null !== bb.reasonKey ? {
        translationKey: bb.reasonKey
      } : "gameOrPluginKick" === bb.name ? (0, Yw.d)(bb.reason) : `You have disconnected from the server.\n${bb.reason}`
    }

    function PO(bb, wb) {
      var eb;
      eb = (0, Lb.G)(bb, wb), Promise.resolve().then((() => Mb(1686))).then((bb => {
        let {
          navigatePreserveSearch: wb
        } = bb;
        wb(eb)
      })).catch((bb => {
        console.warn("[bloxd-wasm-client] the page's router didn't navigate: loading the page instead", bb), (0, Ow.f)(eb)
      }))
    }

    function nO() {
      return vO ??= Promise.all([Mb.e(85), Mb.e(89), Mb.e(86), Mb.e(87), Mb.e(88), Mb.e(105), Mb.e(102), Mb.e(307), Mb.e(127), Mb.e(281), Mb.e(255), Mb.e(247), Mb.e(55)]).then((() => Mb(42677))).then((bb => {
        try {
          bb.attachPlayGameSources()
        } catch (wb) {
          throw console.error("[bloxd-wasm-client] the play sources did not attach", wb),
            function(bb) {
              Ug.then((wb => {
                null === wb || wb.isStopped || BL ? console.warn(`${RV} the play sources threw as they attached, after the client stopped`, bb) : FO({
                  site: ZV,
                  error: bb,
                  header: null
                }, lg)
              }))
            }(wb), wb
        }
      }), (bb => {
        throw vO = null, new ib.e(bb)
      })), vO
    }
    async function yO(bb, wb) {
      qO(), WO = !0, QO = !0;
      let Mb = {
          place: bb.place,
          matchedAt: bb.matchedAt
        },
        Vb = bb.place.gameNameWithVariation;
      const gb = (0, Ob.g)();
      let lb = null;
      const Lb = await DL({
        matchmake: async () => {
          let wb = Mb;
          if (Mb = null, null === wb) {
            const Mb = await bb.rematch();
            if (Mb.isError()) throw lb = Mb.asError().forward(), new Error(Mb.asError().message);
            wb = {
              place: Mb.getValue(),
              matchedAt: performance.now()
            }
          }
          Vb = wb.place.gameNameWithVariation, await (0, Eb.b)();
          return {
            target: await (0, ew.g)(bb.userContext, wb.place, NI(), gb),
            matchedAt: wb.matchedAt,
            freshMs: ew.c
          }
        },
        pageReady: nO,
        onFailure: (bb, wb) => {
          null === lb && function(bb, wb) {
            (0, Oe.reportPageJoinFailure)(bb, lg, wb)
          }(bb, {
            sinceJoinStartMs: wb,
            game: Vb
          })
        },
        rejoin: () => () => {},
        invalidateTrafficCode: () => bb.userContext.invalidateTrafficCode(),
        signal: wb
      });
      switch (Lb.kind) {
        case "joined":
          if (gb) {
            setTimeout((() => {
              Ab.ready()
            }), 0);
            const {
              game: bb
            } = Lb;
            (0, Ob.q)((() => {
              bb.endJoinAd() && ((0, Cb.t)(), Ab.adEnded())
            }))
          }
          return GO || (GO = !0, (0, Jb.e)()), QO ? (iO(pb.i.CONNECT_TO_GAME_SERVER), iO(pb.i.SHADER_PACK), function() {
            var bb, wb;
            return null !== (bb = null === (wb = Sg) || void 0 === wb ? void 0 : wb.runsInJoinedGame()) && void 0 !== bb && bb
          }() && (0, Wb.g)(bb.userContext, Vb).catch((bb => {
            console.error("Failed to report the shader pack session", bb)
          })), function() {
            const bb = function() {
              var bb, wb;
              return null !== (bb = null === (wb = Sg) || void 0 === wb ? void 0 : wb.couldntRunInJoinedGame()) && void 0 !== bb ? bb : null
            }();
            null !== bb && (0, Wb.e)(bb)
          }(), Hb.d.value(void 0)) : bU("The server ended the game as it joined");
        case "failed":
          if (!Lb.reloading) {
            if (null !== lb) return lb;
            if ((Lb.error instanceof ww.k || Lb.error instanceof ww.b) && Lb.error.code === eb.b.serverUpdating.code) {
              if (wb.aborted) return bU("Left the game while it loaded");
              const {
                gameNameWithVariation: bb,
                lobbyName: Mb
              } = (0, Ub.e)();
              return PO(bb, Mb), bU("The server is updating")
            }
            return Lb.error instanceof Iw.b ? Hb.d.errorWithCode(Lb.error.messageKey, pb.i.SHADER_PACK, {
              severity: "medium"
            }) : Hb.d.errorWithCode(function(bb) {
              if (bb instanceof ww.w || bb instanceof Gb.e) return bb.message;
              if (oO(bb)) return (0, bw.k)(bb.code, bb.serverText);
              return bw.c
            }(Lb.error), pb.i.CONNECT_TO_GAME_SERVER, {
              error: TO(Lb.error) ? Lb.error : void 0,
              severity: kO(Lb.error),
              gameServerUnreachable: (0, Mw.b)(Lb.error),
              joinFailure: (0, Mw.h)(Lb.error),
              rematch: (0, vb.b)(Lb.error),
              gameRefused: (0, Qb.b)(Lb.error)
            })
          }
          return bU("Reloading into the new build");
        case "stopped":
          return bU("The game client stopped, and shows why");
        case "Yb":
          return bU("Left the game while it loaded")
      }
    }

    function oO(bb) {
      return bb instanceof ww.k || bb instanceof ww.b && "attach" !== bb.stage
    }

    function TO(bb) {
      return !(bb instanceof ww.w) && !oO(bb) && void 0 === (0, Mw.b)(bb)
    }

    function kO(bb) {
      return oO(bb) ? bb instanceof ww.b && (0, bw.g)(bb.code).requiresRefresh ? "medium" : "low" : TO(bb) || bb instanceof ww.w ? "medium" : "low"
    }

    function bU(bb) {
      return Hb.d.errorWithCode(bb, pb.i.CONNECT_TO_GAME_SERVER, {
        severity: "low",
        Yb: !0
      })
    }
    class wU {
      leave(bb) {
        if ((0, qb.d)()) {
          var wb, Mb;
          if ((0, Vb.c)()) return;
          (0, tb.c)(!0 === (null === (wb = (0, qb.m)()) || void 0 === wb || null === (Mb = wb.currentViewer) || void 0 === Mb ? void 0 : Mb.unsavedChanges), bb)
        } else this.leaveLive()
      }
      leaveLive() {
        var bb;
        WO && (null === (bb = NI()) || void 0 === bb || bb.endGamePack());
        if (!QO) return;
        QO = !1, (0, Sb.e)();
        try {
          var wb;
          null === (wb = (0, ib.z)()) || void 0 === wb || wb.clearWasmCameraScreen()
        } catch (eb) {
          console.error("[bloxd-wasm-client] the camera screen didn't clear", eb)
        }
        const {
          gameNameWithVariation: Mb
        } = (0, Ub.e)();
        try {
          aL()
        } finally {
          (0, Ub.n)({
            websocketUrl: null
          }), lb.k.iI("leaveGame", {
            gameNameWithVariation: Mb
          }), (0, Ib.H)()
        }
      }
      isReplay() {
        return (0, qb.d)()
      }
    }
  },
  42619: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => Hb,
      f: () => eb,
      h: () => gb,
      k: () => Vb
    });
    const eb = 12e4,
      Hb = 3e4,
      pb = {
        hidden: () => "undefined" !== typeof document && document.hidden,
        listen: bb => "undefined" === typeof document ? () => {} : (document.addEventListener("visibilitychange", bb), () => {
          document.removeEventListener("visibilitychange", bb)
        })
      };

    function Vb(bb) {
      return `it sent no start within ${Math.round(bb)} ms`
    }
    class gb {
      constructor(bb, wb) {
        let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => performance.now(),
          eb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : pb;
        this.timeoutMs = bb, this.onTimeout = wb, this.now = Mb, this.visibility = eb, this.timer = null, this.counted = 0, this.step = null, this.unlisten = void 0, this.unlisten = eb.listen((() => {
          this.onVisibility()
        })), eb.hidden() || this.next()
      }
      cancel() {
        this.pause(), this.unlisten()
      }
      onVisibility() {
        this.visibility.hidden() ? (this.counted += this.credit(), this.pause()) : null === this.timer && this.next()
      }
      credit() {
        const bb = this.step;
        return null === bb ? 0 : Math.min(this.now() - bb.at, bb.ms)
      }
      pause() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null), this.step = null
      }
      next() {
        const bb = this.timeoutMs - this.counted;
        if (bb <= 0) return void this.arm(1e3, (() => {
          this.cancel(), this.onTimeout(this.counted)
        }));
        const wb = Math.min(bb, 5e3);
        this.step = {
          at: this.now(),
          ms: wb
        }, this.arm(wb, (() => {
          this.counted += this.credit(), this.step = null, this.next()
        }))
      }
      arm(bb, wb) {
        this.timer = setTimeout((() => {
          this.timer = null, wb()
        }), bb)
      }
    }
  },
  41118: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => gb
    });
    var eb = Mb(382),
      Hb = Mb(1126);
    const pb = new Set(["bingo", "buildAFactory2", "classic", "greenville", "testGym"]),
      Vb = new Set(["creativeFlat", "skyGrid"]);

    function gb(bb) {
      const wb = (0, eb.Zb)(bb);
      return "greenville" === wb ? !(0, eb.Sb)(bb) : "classic" !== wb ? pb.has(wb) : !(0, Hb.j)(bb) && !Vb.has((0, eb.Sb)(bb))
    }
  },
  38971: (bb, wb, Mb) => {
    function eb(bb) {
      return "string" !== typeof bb || 2 !== bb.length && ":" !== bb[2] ? null : bb[0] + bb[1]
    }
    Mb.d(wb, {
      e: () => Fb,
      h: () => Xb,
      i: () => zb,
      k: () => xb,
      m: () => gb,
      n: () => Vb,
      p: () => pb,
      t: () => lb,
      w: () => Bb,
      y: () => Eb
    });
    const Hb = ["op:ytInitialPlayerResponse.adPlacements", "op:ytInitialPlayerResponse.playerAds", "op:ytInitialPlayerResponse.adSlots", "op:playerResponse.adPlacements", "op:playerResponse.playerAds", "op:playerResponse.adSlots"];

    function pb(bb) {
      if (function(bb) {
          for (let wb = 0; wb < Hb.length; wb++)
            if (bb === Hb[wb]) return !0;
          return !1
        }(bb)) return !1;
      const wb = eb(bb);
      return "op" === wb || "ep" === wb || "wi" === wb || "pp" === wb || "fp:call" === bb || "fp:t" === bb
    }

    function Vb(bb) {
      return "fp" === eb(bb) && !pb(bb)
    }

    function gb(bb) {
      if ("string" !== typeof bb) return !1;
      return "o" === bb[0] && "p" === bb[1] && (2 === bb.length || ":" === bb[2]) || "fp:call" === bb || "2" === bb || "t" === bb || "a" === bb
    }

    function lb(bb, wb) {
      return `~${function(bb){return bb.length<2?bb:":"===bb[1]?bb[0]:bb[0]+bb[1]}(wb)}~${bb}`
    }
    const Lb = 200;

    function Ib(bb) {
      let wb = bb.length - 1;
      for (let Mb = 0; Mb < 2; Mb++) {
        const Mb = wb;
        for (; wb >= 0 && bb[wb] >= "0" && bb[wb] <= "9";) wb--;
        if (wb < 0 || wb === Mb || ":" !== bb[wb]) return -1;
        wb--
      }
      return wb + 1
    }

    function Ob(bb) {
      return "unknown" === bb || Ib(bb) >= 0
    }

    function Ub(bb, wb) {
      return bb[wb] >= "\ud800" && bb[wb] <= "\udbff" && wb + 1 < bb.length && bb[wb + 1] >= "\udc00" && bb[wb + 1] <= "\udfff" ? 2 : 1
    }

    function tb(bb, wb, Mb) {
      return 2 === Mb ? 4 : bb[wb] <= "\x7f" ? 1 : bb[wb] <= "\u07ff" ? 2 : 3
    }

    function Cb(bb, wb, Mb) {
      let eb = 0;
      for (; eb < wb;) {
        const wb = Ub(bb, eb),
          Hb = tb(bb, eb, wb);
        if (Hb > Mb) break;
        Mb -= Hb, eb += wb
      }
      return eb
    }

    function Eb(bb) {
      let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1 / 0;
      if ("string" !== typeof bb || bb.length > Lb || !Ob(bb)) return "t";
      let Mb = 2;
      for (let gb = 0; gb < bb.length;) {
        const wb = Ub(bb, gb);
        Mb += tb(bb, gb, wb), gb += wb
      }
      if (Mb <= wb) return `t ${bb}`;
      const eb = Ib(bb),
        Hb = wb - 2 - (bb.length - eb);
      if (Hb < 0) return "t";
      const pb = Cb(bb, eb, Hb);
      let Vb = "t ";
      for (let gb = 0; gb < pb; gb++) Vb += bb[gb];
      for (let gb = eb; gb < bb.length; gb++) Vb += bb[gb];
      return Vb
    }
    const Fb = 62;

    function Bb(bb) {
      let wb = "so:";
      const Mb = Cb(bb, bb.length, Fb - wb.length);
      for (let eb = 0; eb < Mb; eb++) wb += bb[eb];
      return wb
    }
    const sb = "BABYLON ",
      mb = "DECODE ",
      hb = "BABYLON@ ";

    function zb(bb) {
      return Bb(sb + bb)
    }

    function Xb(bb, wb) {
      return Bb(hb + bb + " " + wb)
    }

    function xb(bb) {
      return Bb(mb + bb)
    }
  },
  42545: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => eb
    });
    const eb = {
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
  40026: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => pb
    });
    var eb = Mb(2463);
    const Hb = ["none", "idle", "now"];

    function pb() {
      const bb = () => (0, eb.w)();
      return {
        memoryBytes: () => (0, eb.t)().buffer.byteLength,
        reserveUpFront: wb => bb().RO(wb),
        reserveAhead: wb => bb().rO(wb),
        setCeiling: wb => {
          bb().DO(wb)
        },
        lowWater: () => Hb[bb().KO()] ?? "none",
        stats: () => function(bb) {
          const wb = new Uint32Array((0, eb.t)().buffer, bb, 17),
            Mb = bb => wb[bb] ?? 0,
            Hb = bb => ({
              upFront: Mb(bb),
              ahead: Mb(bb + 1),
              onDemandInFrame: Mb(bb + 2),
              onDemand: Mb(bb + 3)
            });
          return {
            memoryBytes: Mb(0),
            initialBytes: Mb(1),
            liveBytes: Mb(2),
            peakLiveBytes: Mb(3),
            headroomBytes: Mb(4),
            unusedBytes: Mb(5),
            ceilingBytes: Mb(6),
            reservesRefused: Mb(7),
            grows: Hb(8),
            grownBytes: Hb(12),
            allocationsRefused: Mb(16)
          }
        }(bb().cO()),
        takeBallast: () => bb().YO(),
        takePressure: () => bb().ZO()
      }
    }
  },
  6110: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => gb,
      e: () => Vb,
      g: () => eb,
      h: () => Eb,
      i: () => Ob,
      j: () => Hb,
      l: () => pb,
      p: () => Lb,
      t: () => Ib,
      x: () => Ub
    });
    const eb = 5;

    function Hb(bb) {
      return bb === eb
    }

    function pb(bb) {
      return [...bb.features]
    }
    const Vb = 262144,
      gb = 256,
      lb = 256;

    function Lb(bb) {
      if ("object" !== typeof bb || null === bb || Array.isArray(bb)) return "The pack has no files.";
      const wb = [];
      for (const [Mb, eb] of Object.entries(bb)) {
        if ("string" !== typeof eb) return `${Mb} isn't text.`;
        wb.push({
          path: Mb,
          source: eb
        })
      }
      return wb.sort(((bb, wb) => Ob(bb.path, wb.path))),
        function(bb) {
          if (0 === bb.length) return "The pack has no .wgsl files.";
          if (bb.length > gb) return `The pack has more than ${gb} .wgsl files.`;
          const wb = new Set;
          for (const {
              path: Mb
            }
            of bb) {
            const bb = tb(Mb);
            if (null !== bb) return bb;
            if (wb.has(Mb)) return `The pack has two files at ${Mb}.`;
            wb.add(Mb)
          }
          return Ub(bb) > Vb ? `The pack's .wgsl files are over ${Vb/1024} KB in total.` : null
        }(wb) ?? wb
    }

    function Ib(bb) {
      const wb = {};
      for (const Mb of bb) wb[Mb.path] = Mb.source;
      return wb
    }

    function Ob(bb, wb) {
      return bb < wb ? -1 : bb > wb ? 1 : 0
    }

    function Ub(bb) {
      const wb = new TextEncoder;
      let Mb = 0;
      for (const {
          source: eb
        }
        of bb) Mb += wb.encode(eb).byteLength;
      return Mb
    }

    function tb(bb) {
      if (!bb.toLowerCase().endsWith(".wgsl")) return `${bb} isn't a .wgsl file.`;
      if (bb.length > lb) return `A file path is over ${lb} characters.`;
      if (bb.includes("\\") || /[\u0000-\u001f]/.test(bb)) return `${bb} isn't a valid file path.`;
      return bb.split("/").some((bb => "" === bb || "." === bb || ".." === bb)) ? `${bb} isn't a valid file path.` : null
    }
    const Cb = /^(.*)\[rot\[([1-4])$/;

    function Eb(bb, wb) {
      let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
      const eb = new Map;
      wb.forEach(((bb, wb) => {
        let {
          numAnimStates: Mb,
          animStartIdx: Hb
        } = bb;
        for (let pb = 1; pb < Mb; pb++) eb.set(Hb + pb - 1, wb)
      }));
      const Hb = Object.entries(bb),
        pb = new Map;
      for (const [Eb, Fb] of Hb) {
        const bb = Cb.exec(Eb);
        "1" === bb?.[2] && pb.set(bb[1], Fb + 1)
      }
      const Vb = bb => {
          const wb = Cb.exec(bb);
          return wb && pb.has(wb[1]) ? {
            root: wb[1],
            rotation: Number(wb[2]) - 1
          } : null
        },
        gb = new Set(Hb.map((bb => {
          let [wb] = bb;
          return Vb(wb)?.root ?? wb
        }))),
        lb = (bb, Mb) => {
          const eb = bb.replace(/_?0$/, "");
          return (wb[Mb]?.numAnimStates ?? 0) > 1 && !gb.has(eb) ? eb : bb
        },
        Lb = new Map;
      for (const [Cb, Eb] of Hb) Lb.set(Eb, lb(Vb(Cb)?.root ?? Cb, Eb));
      const Ib = Hb.reduce(((bb, wb) => {
          let [, Mb] = wb;
          return Math.max(bb, Mb + 1)
        }), 0),
        Ob = Array.from({
          length: Ib
        }, ((bb, wb) => ({
          id: wb + 1,
          rotation: 0
        }))),
        Ub = new Map,
        tb = new Map;
      for (const [Cb, Eb] of Hb) {
        const bb = Vb(Cb),
          wb = eb.get(Eb);
        if (void 0 !== wb) {
          const Mb = Lb.get(wb);
          tb.set(Cb, {
            name: Cb,
            texture: Mb,
            kind: "frame"
          }), bb && !tb.has(bb.root) && tb.set(bb.root, {
            name: bb.root,
            texture: Mb,
            kind: "frame"
          });
          continue
        }
        const Mb = Lb.get(Eb),
          Hb = bb?.root ?? Cb;
        if (Mb !== Hb && tb.set(Hb, {
            name: Hb,
            texture: Mb,
            kind: "frame"
          }), bb) {
          const wb = pb.get(bb.root);
          Ob[Eb] = {
            id: wb,
            rotation: bb.rotation
          }, Ub.set(Mb, wb), tb.set(Cb, {
            name: Cb,
            texture: Mb,
            kind: "rotation"
          })
        } else Ub.set(Mb, Eb + 1)
      }
      for (const Cb of Ub.keys()) tb.delete(Cb);
      for (const [Cb, Eb] of Mb) {
        const bb = Ub.get(Eb);
        void 0 === bb || Ub.has(Cb) || (Ub.set(Cb, bb), tb.delete(Cb))
      }
      return {
        named: [...Ub].sort(((bb, wb) => {
          let [Mb] = bb, [eb] = wb;
          return Mb < eb ? -1 : Mb > eb ? 1 : 0
        })).map((bb => {
          let [wb, Mb] = bb;
          return {
            name: wb,
            id: Mb
          }
        })),
        aliases: [...tb.values()],
        layers: Ob
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);