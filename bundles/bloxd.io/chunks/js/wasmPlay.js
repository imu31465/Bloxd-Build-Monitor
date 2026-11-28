export const id = 76;
export const ids = [76, 138, 139, 159];
export const modules = {
  41340: (dd, Od, md) => {
    md.d(Od, {
      e: () => Wd,
      f: () => Fd
    });
    const Wd = "The world isn't loaded, so no blocks can be seen.",
      Fd = "The world isn't loaded, so nothing in it can be seen."
  },
  5419: (dd, Od, md) => {
    md.d(Od, {
      c: () => Qd
    });
    var Wd = md(29),
      Fd = md(32),
      Rd = md(1349),
      Xd = md(3903);
    const Kd = 3e4,
      hd = 1e3;

    function vd() {
      return "visible" === document.visibilityState && "inGame" === Wd.e.get("gameState") && (0, Rd.y)()
    }

    function Qd(dd, Od) {
      (0, Xd.q)() || function(dd, Od, md) {
        let Wd = 0;
        const Fd = setInterval((() => {
          Od() && (Wd += hd, Wd >= dd && (clearInterval(Fd), md()))
        }), hd)
      }(Kd, vd, (() => {
        Od().then((() => {
          dd(`saved for the player after ${Kd/1e3} s of play`), (0, Xd.F)(), Fd.j.lQ("chat", {
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
  35401: (dd, Od, md) => {
    function Wd(dd, Od) {
      return 0 === dd.length ? 0 : dd[Math.min(dd.length - 1, Math.floor(Od * dd.length))]
    }

    function Fd(dd) {
      return dd.toFixed(1)
    }
    md.d(Od, {
      d: () => Fd,
      e: () => Wd
    })
  },
  39502: (dd, Od, md) => {
    md.d(Od, {
      c: () => vd,
      f: () => Qd,
      h: () => Yd,
      l: () => pd,
      n: () => Td
    });
    var Wd = md(5419),
      Fd = md(35401),
      Rd = md(3903);
    const Xd = 20,
      Kd = ["totalMs", "slotMs", "workerMs", "applyMs", "ahead", "inFlight", "Mt", "jobMs"];

    function hd(dd) {
      return [...dd].sort(((dd, Od) => dd - Od))
    }
    const vd = [];

    function Qd(dd, Od, md) {
      return `${dd},${Od},${md}`
    }
    class td {
      constructor() {
        this.pending = new Map, this.jobs = new Map, this.edits = [], this.nextEdit = 0, this.reported = 0, this.windowStart = performance.now(), this.frames = 0, this.lastFrameAt = 0, this.maxFrameMs = 0, this.jobsSent = 0, this.maxAhead = 0, this.maxCapacity = 0, this.roundTrips = [], this.windowEdits = [], this.outliers = 0, this.gaveUp = 0
      }
      edit(dd, Od) {
        var md;
        const Wd = null !== (md = this.pending.get(dd)) && void 0 !== md ? md : [];
        Wd.push({
          editAt: Od,
          meshJobId: 0
        }), this.pending.set(dd, Wd)
      }
      frame(dd) {
        this.lastFrameAt > 0 && (this.maxFrameMs = Math.max(this.maxFrameMs, dd - this.lastFrameAt)), this.lastFrameAt = dd, this.frames++, dd - this.windowStart >= 1e3 && this.summarise(dd)
      }
      sent(dd, Od, md, Wd, Fd, Rd, Xd) {
        this.jobs.set(Od, {
          sentAt: Xd,
          receivedAt: 0,
          ahead: md,
          inFlight: Wd,
          Mt: Fd,
          jobMs: 0
        }), this.jobsSent++, this.maxAhead = Math.max(this.maxAhead, md), this.maxCapacity = Math.max(this.maxCapacity, Fd);
        for (const hd of null !== (Kd = this.pending.get(dd)) && void 0 !== Kd ? Kd : []) {
          var Kd;
          Rd.includes(hd.meshJobId) || (hd.meshJobId = Od)
        }
      }
      received(dd, Od, md) {
        const Wd = this.jobs.get(dd);
        void 0 !== Wd && (this.roundTrips.push(md - Wd.sentAt), Wd.receivedAt = md, Wd.jobMs = Od)
      }
      failed(dd) {
        this.jobs.delete(dd)
      }
      reassign(dd, Od, md) {
        this.jobs.delete(Od);
        for (const Fd of null !== (Wd = this.pending.get(dd)) && void 0 !== Wd ? Wd : []) {
          var Wd;
          Fd.meshJobId === Od && (Fd.meshJobId = md)
        }
      }
      applied(dd, Od, md) {
        const Wd = this.jobs.get(Od);
        this.jobs.delete(Od), void 0 !== Wd && this.show(dd, Wd, md, (dd => dd.meshJobId === Od))
      }
      emptied(dd, Od) {
        const md = {
          sentAt: Od,
          receivedAt: Od,
          ahead: 0,
          inFlight: 0,
          Mt: 0,
          jobMs: 0
        };
        this.show(dd, md, Od, (() => !0))
      }
      show(dd, Od, md, Wd) {
        const Fd = this.pending.get(dd);
        if (!Fd) return;
        const Rd = Fd.filter((Fd => !Wd(Fd) || (this.record(dd, Fd.editAt, Od, md), !1)));
        Rd.length > 0 ? this.pending.set(dd, Rd) : this.pending.delete(dd)
      }
      Wt(dd) {
        this.reported += dd, this === Nd && this.reported >= Xd && null !== qd && (qd(), qd = null)
      }
      record(dd, Od, md, Wd) {
        const Fd = {
          totalMs: Wd - Od,
          slotMs: md.sentAt - Od,
          workerMs: md.receivedAt - md.sentAt,
          applyMs: Wd - md.receivedAt,
          ahead: md.ahead,
          inFlight: md.inFlight,
          Mt: md.Mt,
          jobMs: md.jobMs
        };
        if (this.edits[this.nextEdit] = Fd, this.nextEdit = (this.nextEdit + 1) % 500, this.windowEdits.push(Fd.totalMs), this.Wt(1), Fd.totalMs < 100 || ++this.outliers > 5) return;
        const Xd = dd => Math.round(dd);
        (0, Rd.k)("remesh", `slow edit (${dd}) shown in ${Xd(Fd.totalMs)} ms: slot ${Xd(Fd.slotMs)}, worker ${Xd(Fd.workerMs)} (${Fd.ahead} ahead, ${Fd.inFlight}/${Fd.Mt} in flight; job ${Xd(Fd.jobMs)}), apply ${Xd(Fd.applyMs)}`)
      }
      summarise(dd) {
        const Od = (dd - this.windowStart) / 1e3;
        for (const [md, Wd] of this.pending) {
          const Od = Wd.filter((Od => dd - Od.editAt <= 1e4));
          this.gaveUp += Wd.length - Od.length, this.Wt(Wd.length - Od.length), Od.length > 0 ? this.pending.set(md, Od) : this.pending.delete(md)
        }
        for (const [md, Wd] of this.jobs) dd - Wd.sentAt > (Wd.receivedAt > 0 ? 1e4 : 6e4) && this.jobs.delete(md);
        if (this.jobsSent > 0 || this.roundTrips.length > 0 || this.windowEdits.length > 0 || this.gaveUp > 0) {
          const dd = hd(this.roundTrips),
            md = hd(this.windowEdits),
            Wd = Math.max(0, this.outliers - 5);
          (0, Rd.k)("remesh", `${Math.round(this.frames/Od)} fps (longest ${Math.round(this.maxFrameMs)} ms) | ${this.jobsSent} jobs sent, up to ${this.maxAhead} ahead on a worker, capacity ${this.maxCapacity} | round trip p50 ${Math.round((0,Fd.e)(dd,.5))} max ${Math.round((0,Fd.e)(dd,1))} ms | ${md.length} edits shown, p50 ${Math.round((0,Fd.e)(md,.5))} max ${Math.round((0,Fd.e)(md,1))} ms${Wd>0?`, ${Wd} more slow`:""}${this.gaveUp>0?`, ${this.gaveUp} never shown`:""}`)
        }
        this.windowStart = dd, this.frames = 0, this.maxFrameMs = 0, this.jobsSent = 0, this.maxAhead = 0, this.maxCapacity = 0, this.roundTrips = [], this.windowEdits = [], this.outliers = 0, this.gaveUp = 0
      }
      stats() {
        const dd = Kd.map((dd => {
          const Od = hd(this.edits.map((Od => Od[dd])));
          return `${dd}: p50 ${Math.round((0,Fd.e)(Od,.5))} p90 ${Math.round((0,Fd.e)(Od,.9))} max ${Math.round((0,Fd.e)(Od,1))}`
        }));
        return [`${this.edits.length} edits`, ...dd].join("\n")
      }
      dump() {
        const dd = this.edits.map((dd => Kd.map((Od => Math.round(10 * dd[Od]) / 10)).join(",")));
        return [this.stats(), Kd.join(","), ...dd].join("\n")
      }
    }
    class od {
      constructor(dd, Od) {
        this.log = dd, this.zo = Od
      }
      edit(dd, Od, md) {
        const [Wd, Fd, Rd] = this.zo.Bt.bFd(dd, Od, md), Xd = this.zo.Bt.sH.uH(Wd, Fd, Rd);
        Xd && Xd.BH && this.log.edit(Qd(Wd, Fd, Rd), performance.now())
      }
      sent(dd, Od, md, Wd, Fd) {
        this.log.sent(Qd(dd.i, dd.j, dd.k), Od, md, Wd, Fd, vd, performance.now())
      }
      received(dd) {
        this.log.received(dd.meshJobId, dd.jobMs, performance.now())
      }
      failed(dd) {
        this.log.failed(dd)
      }
      applied(dd, Od) {
        this.log.applied(Qd(dd.i, dd.j, dd.k), Od, performance.now())
      }
    }
    let Nd = null,
      qd = null,
      Hd = !1,
      yd = null;

    function bd() {
      return new Promise((dd => {
        null !== Nd && Nd.reported >= Xd ? dd() : qd = dd
      }))
    }

    function Td() {
      const dd = new td;
      return Nd = dd, (0, Rd.g)("remesh", (() => dd.dump())), (0, Rd.b)("remeshStats", (() => {
        console.log(dd.stats())
      })), Hd || (Hd = !0, (0, Wd.c)((dd => {
        (0, Rd.k)("remesh", dd)
      }), bd)), dd
    }

    function pd(dd) {
      const Od = Td();
      yd = new od(Od, dd), dd.aE.meshProbe = yd, dd.on("beforeRender", (() => {
        Od.frame(performance.now())
      }))
    }

    function Yd(dd, Od, md) {
      var Wd;
      null === (Wd = yd) || void 0 === Wd || Wd.edit(dd, Od, md)
    }
  },
  35426: (dd, Od, md) => {
    md.d(Od, {
      b: () => Wd
    });
    const Wd = new Set(["chunkBorders"])
  },
  38359: (dd, Od, md) => {
    md.d(Od, {
      c: () => Fd,
      f: () => Wd
    });
    const Wd = 3,
      Fd = {
        recording: !1,
        clipping: !1,
        hasClipBuffer: !1,
        seconds: 0
      }
  },
  35587: (dd, Od, md) => {
    md.d(Od, {
      c: () => Kd,
      g: () => Fd,
      j: () => td
    });
    var Wd = md(1685);

    function Fd(dd) {
      var Od;
      return {
        ...Kd.store,
        yaw: Kd.store.yaw + (null !== (Od = Wd.b[dd].previewYaw) && void 0 !== Od ? Od : 0)
      }
    }
    const Rd = {
        yaw: .61 * Math.PI,
        pitch: Math.PI / 2.05,
        radius: 30,
        target: [0, 0, 0]
      },
      Xd = {
        ...Rd,
        radius: 33,
        target: [0, 3.9, 0]
      },
      Kd = {
        player: Rd,
        store: Xd,
        showcase: {
          ...Xd,
          target: [0, 1.9, 0]
        }
      };

    function hd(dd, Od) {
      dd instanceof Promise ? dd.then(Od).catch((dd => {
        console.error("Couldn't open the preview", dd)
      })) : Od(dd)
    }
    class vd {
      constructor(dd) {
        this.opened = null, this.view = null, this.size = null, this.closed = !1, hd(dd, (dd => {
          this.closed ? dd.close() : (this.opened = dd, null !== this.size && dd.resize(this.size.width, this.size.height), null !== this.view && dd.show(this.view))
        }))
      }
      show(dd) {
        var Od;
        this.view = dd, null === (Od = this.opened) || void 0 === Od || Od.show(dd)
      }
      resize(dd, Od) {
        var md;
        this.size = {
          width: dd,
          height: Od
        }, null === (md = this.opened) || void 0 === md || md.resize(dd, Od)
      }
      close() {
        var dd;
        this.closed = !0, null === (dd = this.opened) || void 0 === dd || dd.close(), this.opened = null
      }
    }
    class Qd {
      constructor(dd) {
        this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(dd).then((dd => dd.ready)), hd(dd, (dd => {
          this.closed ? dd.close() : (this.opened = dd, null !== this.size && dd.resize(this.size.width, this.size.height))
        }))
      }
      get dev() {
        return this.opened.dev
      }
      isReady() {
        var dd, Od;
        return null !== (dd = null === (Od = this.opened) || void 0 === Od ? void 0 : Od.isReady()) && void 0 !== dd && dd
      }
      setCosmetic(dd, Od) {
        var md;
        null === (md = this.opened) || void 0 === md || md.setCosmetic(dd, Od)
      }
      setNametag(dd) {
        var Od;
        null === (Od = this.opened) || void 0 === Od || Od.setNametag(dd)
      }
      playEmote(dd) {
        var Od;
        null === (Od = this.opened) || void 0 === Od || Od.playEmote(dd)
      }
      setOrbit(dd) {
        var Od;
        null === (Od = this.opened) || void 0 === Od || Od.setOrbit(dd)
      }
      resetCamera() {
        var dd;
        null === (dd = this.opened) || void 0 === dd || dd.resetCamera()
      }
      async untilDrawn(dd) {
        var Od;
        await this.ready, await (null === (Od = this.opened) || void 0 === Od ? void 0 : Od.untilDrawn(dd))
      }
      resize(dd, Od) {
        var md;
        this.size = {
          width: dd,
          height: Od
        }, null === (md = this.opened) || void 0 === md || md.resize(dd, Od)
      }
      close() {
        var dd;
        this.closed = !0, null === (dd = this.opened) || void 0 === dd || dd.close(), this.opened = null
      }
    }
    const td = new class {
      constructor() {
        this.host = null, this.makeDefault = null
      }
      setHost(dd) {
        this.host = dd
      }
      setDefaultHost(dd) {
        this.makeDefault = dd
      }
      current() {
        if (null === this.host) {
          if (null === this.makeDefault) throw new Error("no preview host");
          this.host = this.makeDefault()
        }
        return this.host
      }
      openMob(dd) {
        return new vd(this.current().openMob(dd))
      }
      openPet(dd) {
        return new vd(this.current().openPet(dd))
      }
      openMobLineup(dd) {
        return new vd(this.current().openMobLineup(dd))
      }
      sharesCharacter() {
        return !0 === this.current().sharesCharacter
      }
      openCharacter(dd, Od) {
        return new Qd(this.current().openCharacter(dd, Od))
      }
    }
  },
  5951: (dd, Od, md) => {
    md.d(Od, {
      c: () => Wd.f,
      g: () => Fd,
      k: () => Wd.o
    });
    var Wd = md(5954);
    const Fd = [!1, !0].flatMap((dd => ["terrain", "liquid", "model"].map((Od => ({
      strict: dd,
      program: Od
    })))))
  },
  40819: (dd, Od, md) => {
    md.r(Od), md.d(Od, {
      ShaderPackPage: () => hd,
      harnessShaderPackMode: () => od,
      setHarnessUrlShaderPack: () => td,
      shaderPackPage: () => Qd
    });
    var Wd = md(107),
      Fd = md(46),
      Rd = (md(4678), md(5951), md(4674)),
      Xd = md(7602);
    md(7583);
    const Kd = {
      status: "none"
    };
    class hd {
      constructor() {
        this.stored = null, this.compiling = null, this.pagePack = null, this.resolved = null
      }
      preload() {
        if (null === this.stored) {
          if ((0, Rd.h)(Wd.featureFlags.settings.canUseShaderPacks)) return this.stored = Promise.resolve(null), vd().then((dd => {
            dd && Fd.k.removeItem(Rd.d)
          })), this.stored;
          this.prefetchHint() && this.compiler().catch((() => {})), this.stored = this.readStored()
        }
        return this.stored
      }
      prefetchHint() {
        return (0, Rd.e)(Wd.featureFlags.settings.canUseShaderPacks)
      }
      async loadActive() {
        const dd = await this.load();
        return "active" === dd.status ? dd.pack : null
      }
      load() {
        return this.pagePack ??= this.read().catch((dd => (console.error("Failed to load the shader pack", dd), Kd))).then((dd => (this.resolved ??= dd, dd))), this.pagePack
      }
      hasNone() {
        var dd;
        return "none" === (null === (dd = this.resolved) || void 0 === dd ? void 0 : dd.status)
      }
      block(dd) {
        this.resolved = {
          status: "blocked",
          messageKey: dd,
          variants: null
        }, this.pagePack = Promise.resolve(this.resolved)
      }
      compiler() {
        return this.compiling ??= Promise.all([md.e(91), md.e(157), md.e(163)]).then((() => md(54160))).then((dd => (dd.prefetchCompiler(), dd))), this.compiling
      }
      async readStored() {
        const dd = await vd();
        return dd && this.compiler().then((dd => dd.reconcileHint())).catch((dd => {
          console.error("Failed to correct the shader pack hint", dd)
        })), dd
      }
      async read() {
        const dd = await this.preload();
        return dd ? (await this.compiler()).compilePagePack(dd) : Kd
      }
    }
    async function vd() {
      if (!(0, Rd.i)(Wd.featureFlags.settings.canUseShaderPacks)) return null;
      try {
        const dd = await (0, Xd.g)(!0);
        return dd || Fd.k.setItem(Rd.d, !1), dd
      } catch (dd) {
        return console.error("Failed to read the stored shader pack", dd), Fd.k.removeItem(Rd.d), null
      }
    }
    const Qd = new hd;

    function td(dd, Od) {}

    function od() {
      return null
    }
  },
  40865: (dd, Od, md) => {
    md.d(Od, {
      e: () => td,
      i: () => od
    });
    var Wd = md(180),
      Fd = md(210),
      Rd = md(1618),
      Xd = md(1916),
      Kd = md(1627),
      hd = md(38082),
      vd = md(747),
      Qd = md(40819);

    function td(dd) {
      (0, Xd.reportClientError)("matchmake_failed", dd, Wd.l[Wd.l.SHADER_PACK])
    }
    async function od(dd, Od) {
      var md;
      const Wd = null === (md = await Qd.shaderPackPage.preload()) || void 0 === md ? void 0 : md.listing,
        Xd = (0, hd.b)();
      Wd && null !== Xd && await Kd.e.reportShaderPackSession(dd, {
        packId: Wd.packId,
        sourceHash: Wd.sourceHash,
        game: (0, Rd.e)(Od, Fd.F, "other"),
        playSessionId: Xd,
        visitSessionId: (0, vd.getVisitSessionId)()
      })
    }
  },
  7602: (dd, Od, md) => {
    md.d(Od, {
      e: () => Fd,
      g: () => Rd
    });
    var Wd = md(46);
    const Fd = "shaderPack";
    async function Rd() {
      var dd;
      let Od = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (dd = await Wd.h.getItem(Fd, Od)) && void 0 !== dd ? dd : null
    }
  },
  7583: (dd, Od, md) => {
    md.r(Od), md.d(Od, {
      loadShaderPackTextures: () => Xd,
      shaderPackTextures: () => Kd
    });
    var Wd = md(5954);
    let Fd = null,
      Rd = null;

    function Xd() {
      return Rd ??= Promise.all([md.e(85), md.e(126)]).then((() => md(42438))).then((dd => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: Od,
          textureNameToIndex: md,
          textureAnimationData: Rd
        } = dd;
        return Fd ??= (0, Wd.h)(md, Rd, Od), Fd
      })), Rd
    }

    function Kd() {
      if (null === Fd) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return Fd
    }
  },
  40603: (dd, Od, md) => {
    md.d(Od, {
      c: () => Kd
    });
    var Wd = md(32),
      Fd = md(1349),
      Rd = md(2482);
    const Xd = "Reconnecting";
    class Kd {
      constructor(dd) {
        this.hooks = dd, this.graceMs = 0, this.sessionBased = !1, this.controller = void 0, this.frozen = !1, this.stopped = !1, this.listening = !1, this.ended = !1, this.retryNow = () => {
          "visible" === document.visibilityState && this.controller.retryNow()
        }, this.onPageHide = dd => {
          dd.persisted || this.leave()
        }, this.controller = new Rd.g((Od => dd.reconnect(Od)), {
          isSessionLive: () => !this.ended && dd.isLive(),
          onPhaseChanged: dd => {
            this.onPhaseChanged(dd)
          },
          onReconnected: Od => {
            dd.onReconnected(Od)
          },
          onGaveUp: Od => {
            !this.ended && dd.isLive() && dd.onGaveUp(this.sessionBased, Od)
          }
        })
      }
      onInitialInfo(dd, Od) {
        this.graceMs = dd, this.sessionBased = Od
      }
      canHoldSeat() {
        return this.graceMs > 0 && !this.ended
      }
      isResuming() {
        return "connected" !== this.controller.phase
      }
      onConnectionLost(dd) {
        this.ended || this.controller.onConnectionLost(dd, this.graceMs)
      }
      onResuming() {
        this.ended || this.controller.onResuming()
      }
      onResumed() {
        this.controller.stop()
      }
      leave() {
        const dd = this.isResuming() && !this.controller.awaitingResumeOnRoom,
          Od = this.controller.heldToken;
        this.end(), dd && "" !== Od && this.hooks.releaseSeat(Od)
      }
      end() {
        this.ended = !0, this.controller.stop()
      }
      onPhaseChanged(dd) {
        const Od = (0, Rd.v)(dd);
        Od !== this.stopped && (this.stopped = Od, this.hooks.freeze(Od));
        const md = "frozen" === dd || "resuming" === dd && this.frozen;
        md && !this.frozen ? (0, Fd.v)(Xd, {
          overridesPause: !0
        }) : !md && this.frozen && (0, Fd.u)(Xd), this.frozen = md, this.setListening("connected" !== dd), Wd.j.lQ(Rd.r, md ? "frozen" : dd)
      }
      setListening(dd) {
        dd !== this.listening && (this.listening = dd, dd ? (window.addEventListener("online", this.retryNow), document.addEventListener("visibilitychange", this.retryNow), window.addEventListener("pagehide", this.onPageHide)) : (window.removeEventListener("online", this.retryNow), document.removeEventListener("visibilitychange", this.retryNow), window.removeEventListener("pagehide", this.onPageHide)))
      }
    }
  },
  40611: (dd, Od, md) => {
    md.d(Od, {
      d: () => Wd
    });
    class Wd {
      constructor(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.onSilent = dd, this.now = Od, this.lastHeardAt = void 0, this.resumedAt = void 0, this.lastCheckAt = void 0, this.wasVisible = "visible" === document.visibilityState, this.interval = void 0, this.check = () => {
          const dd = this.now(),
            Od = dd - this.lastCheckAt <= 2e3;
          this.lastCheckAt = dd;
          const md = "visible" === document.visibilityState;
          !md || Od && this.wasVisible || (this.resumedAt = dd), this.wasVisible = md, md && dd - this.lastHeardAt > 12e3 && dd - this.resumedAt > 2e3 && this.onSilent()
        }, this.lastHeardAt = Od(), this.resumedAt = this.lastHeardAt, this.lastCheckAt = this.lastHeardAt, this.interval = setInterval(this.check, 1e3), document.addEventListener("visibilitychange", this.check), window.addEventListener("online", this.check)
      }
      heard() {
        this.lastHeardAt = this.now()
      }
      dispose() {
        clearInterval(this.interval), document.removeEventListener("visibilitychange", this.check), window.removeEventListener("online", this.check)
      }
    }
  },
  35482: (dd, Od, md) => {
    md.d(Od, {
      d: () => Rd
    });
    var Wd = md(1368);

    function Fd() {
      var dd, Od;
      return null !== (dd = null === (Od = screen.orientation) || void 0 === Od ? void 0 : Od.type) && void 0 !== dd ? dd : innerWidth > innerHeight ? "landscape" : "portrait"
    }
    const Rd = new class {
      constructor() {
        this.holding = !1, this.heldOrientation = "", this.releaseTimer = void 0, this.longHoldTimer = void 0, this.resizers = new Set, this.releaseWhenShown = () => {
          document.hidden || (document.removeEventListener("visibilitychange", this.releaseWhenShown), this.release())
        }
      }
      isHeld() {
        return this.holding && Fd() !== this.heldOrientation && (this.holding = !1), this.holding
      }
      hold() {
        this.heldOrientation = Fd(), this.holding = !0, clearTimeout(this.releaseTimer), document.removeEventListener("visibilitychange", this.releaseWhenShown), clearTimeout(this.longHoldTimer), this.longHoldTimer = setTimeout((() => {
          this.holding && (0, Wd.rH)(new Error("Game view size held for 60 s"))
        }), 6e4)
      }
      release() {
        clearTimeout(this.longHoldTimer), this.releaseTimer = setTimeout((() => {
          if (document.hidden) document.addEventListener("visibilitychange", this.releaseWhenShown);
          else {
            this.holding = !1;
            for (const dd of this.resizers) dd()
          }
        }), 1e3)
      }
      heldSizer(dd) {
        let Od = !1;
        return () => {
          if (Od && this.isHeld()) return null;
          const md = dd();
          return Od ||= null !== md, md
        }
      }
      onRelease(dd) {
        return this.resizers.add(dd), () => {
          this.resizers.delete(dd)
        }
      }
    }
  },
  10143: (dd, Od, md) => {
    md.d(Od, {
      d: () => Rd,
      h: () => Fd
    });
    let Wd = Promise.resolve();

    function Fd(dd) {
      Wd = dd
    }

    function Rd() {
      return Wd
    }
  },
  40852: (dd, Od, md) => {
    md.d(Od, {
      b: () => Fd
    });
    let Wd = !1;
    async function Fd(dd, Od) {
      if (!Wd) {
        Wd = !0;
        try {
          const [{
            reloadBloxd: Wd
          }, {
            NotificationProvider: Fd
          }] = await Promise.all([Promise.resolve().then((() => md(1890))), Promise.resolve().then((() => md(1462)))]);
          if (!dd || !0 === await Fd.showPromptPopup({
              title: "Unsaved changes",
              subtitle: "Exit and lose your unsaved changes?",
              confirmText: "Exit",
              destructive: !0,
              cancelText: "Cancel",
              unlockPointerKey: "replayExitUnsavedChanges"
            }).getResult()) return void Wd(Od)
        } catch (Fd) {
          console.error("Leaving the replay failed", Fd)
        }
        Wd = !1
      }
    }
  },
  40627: (dd, Od, md) => {
    md.d(Od, {
      c: () => vd,
      g: () => Qd
    });
    var Wd = md(1856),
      Fd = md(218),
      Rd = md(1822),
      Xd = md(1941),
      Kd = md(1253),
      hd = md(1189);
    async function vd(dd, Od) {
      return function(dd) {
        return "object" === typeof dd && null !== dd && dd.code === Fd.e.VpnIp.code
      }(Od) && function(dd) {
        return Rd.c.supports("appCheck") && dd.isLoggedIn() && !dd.hasTriedAppAttestation()
      }(dd) && await async function(dd) {
        try {
          const {
            token: Od
          } = await (0, Xd.c)(), {
            "3PSIDMCPP": md
          } = await (0, hd.postJsonWithMetricsCookiesAndJsonResponse)(`${Kd.clientSideServerUrls.indexUrl}/index/app-attestation`, {
            appCheckToken: Od
          }, {
            retries: 0
          }, dd.getMetricsCookies());
          return dd.setAppAttestedAuthJwt(md), !0
        } catch (Od) {
          return Od instanceof Wd.c && "failed" === Od.code ? (console.warn("The app couldn't get an App Check token:", Od), dd.markAppAttestationTried()) : console.error("Failed to attest the app:", Od), !1
        }
      }(dd)
    }
    async function Qd(dd, Od) {
      try {
        return await Od()
      } catch (md) {
        if (!await vd(dd, md)) throw md
      }
      return Od()
    }
  },
  42959: (dd, Od, md) => {
    md.d(Od, {
      d: () => Kd,
      h: () => vd,
      j: () => hd
    });
    var Wd = md(1906);
    const Fd = 33177600,
      Rd = 3e4;
    let Xd = !1;

    function Kd(dd, Od, md) {
      let Wd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const {
        scale: Kd = 1,
        type: hd = "image/png",
        quality: vd
      } = Wd;
      return dd.yt() ? Xd ? Promise.reject(new Error("A screenshot is already being taken")) : (Xd = !0, new Promise(((Wd, Qd) => {
        let td, od = 2,
          Nd = null;
        const qd = () => {
          var Od;
          Xd = !1, null === (Od = Nd) || void 0 === Od || Od(), clearTimeout(td);
          try {
            dd.restoreSize()
          } catch (md) {
            console.error("A screenshot couldn't size the canvas back", md)
          }
        };
        td = setTimeout((() => {
          qd(), Qd(new Error("No frame was drawn to capture"))
        }), Rd);
        try {
          const Wd = function(dd, Od, md) {
            const Wd = Math.max(1, dd),
              Rd = Math.max(1, Od),
              Xd = Math.min(1, md / Math.max(Wd, Rd), Math.sqrt(Fd / (Wd * Rd)));
            return {
              width: Math.max(1, Math.floor(Wd * Xd)),
              height: Math.max(1, Math.floor(Rd * Xd))
            }
          }(Od, md, dd.maxTextureSize);
          dd.resize(Wd.width, Wd.height, Kd * Wd.width / Math.max(1, Od))
        } catch (Hd) {
          return qd(), void Qd(Hd)
        }
        Nd = dd.onFrameDrawn((() => {
          if (od--, od > 0) return;
          const {
            canvas: Od
          } = dd, md = {
            width: Od.width,
            height: Od.height
          };
          try {
            Od.toBlob((dd => {
              dd ? Wd({
                blob: dd,
                ...md
              }) : Qd(new Error("The canvas gave no image"))
            }), hd, vd)
          } catch (Hd) {
            Qd(Hd)
          } finally {
            qd()
          }
        }))
      }))) : Promise.reject(new Error("Screenshots need a game to be running"))
    }

    function hd(dd) {
      return dd.yt() ? new Promise(((Od, md) => {
        let Wd;
        const Fd = dd.onFrameDrawn((() => {
          Fd(), clearTimeout(Wd), createImageBitmap(dd.canvas).then(Od, md)
        }));
        Wd = setTimeout((() => {
          Fd(), md(new Error("No frame was drawn to take"))
        }), Rd)
      })) : Promise.reject(new Error("No game is drawing"))
    }
    async function vd(dd, Od, md) {
      try {
        const Fd = await Kd(dd, Od, md);
        (0, Wd.e)(Fd.blob, `bloxd-screenshot-${Fd.width}x${Fd.height}-${Date.now()}.png`)
      } catch (Fd) {
        console.error("Error taking screenshot:", Fd)
      }
    }
  },
  39237: (dd, Od, md) => {
    md.d(Od, {
      e: () => Wd
    });
    const Wd = {
      noaReady: null,
      chunkRequested: null,
      beforeServerListeners: null,
      wasmNetReady: null
    }
  },
  40620: (dd, Od, md) => {
    md.d(Od, {
      b: () => od,
      e: () => Qd
    });
    var Wd = md(218),
      Fd = md(1965),
      Rd = md(1268),
      Xd = md(10092);
    const Kd = [250, 500, 1e3, 2e3, 1250],
      hd = 406;

    function vd(dd) {
      if ("object" !== typeof dd || null === dd) return !1;
      const {
        code: Od,
        message: md
      } = dd, Fd = Wd.e.duplicateLobbyNameError;
      return (Od === Fd.code || Od === hd) && (md === Fd.text || md === Fd.text + Wd.m)
    }
    async function Qd(dd, Od) {
      let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Fd.c;
      for (let Fd = 0;; Fd++) {
        let Xd;
        (0, Rd.p)(Od);
        try {
          return await dd()
        } catch (Wd) {
          if (Xd = Kd[Fd], void 0 === Xd || !vd(Wd)) throw Wd
        }
        await md(Xd, Od)
      }
    }
    const td = new Set([Wd.e.duplicateLobbyNameError.code, Wd.e.lobbyCantBeCreated.code, Wd.e.roomDisposedEarlyError.code, Wd.e.roomDisposedLateError.code, Wd.e.serverRoomLimitReached.code]);

    function od(dd) {
      if (vd(dd)) return !0;
      const Od = (0, Xd.f)(dd);
      return "number" === typeof Od && td.has(Od)
    }
  },
  10081: (dd, Od, md) => {
    md.d(Od, {
      e: () => vd,
      h: () => hd
    });
    var Wd = md(405);

    function Fd(dd) {
      if (!dd.startsWith("{")) return dd;
      let Od;
      try {
        Od = JSON.parse(dd)
      } catch {
        return dd
      }
      return function(dd) {
        if (null === (0, Wd.Ce)(dd)) return !1;
        const {
          params: Od
        } = dd;
        return void 0 === Od || "object" === typeof Od && null !== Od && Object.values(Od).every((dd => "string" === typeof dd))
      }(Od) ? Od : dd
    }
    var Rd = md(1238),
      Xd = md(1306);

    function Kd(dd) {
      return (0, Rd.B)(Xd.f.get().getCurrentLanguageCode(), dd.translationKey, dd.params)
    }

    function hd(dd) {
      const Od = Fd(dd);
      return "string" === typeof Od ? Od : Kd(Od)
    }

    function vd(dd) {
      const Od = Fd(dd);
      return "string" === typeof Od ? Od : Kd({
        translationKey: "moderation:kicked",
        params: {
          reason: Kd(Od)
        }
      })
    }
  },
  40773: (dd, Od, md) => {
    md.d(Od, {
      e: () => Xd
    });
    var Wd = md(387),
      Fd = md(151),
      Rd = md(46);

    function Xd() {
      Rd.k.setItem(Wd.Ib, Rd.k.getItem(Wd.Ib) + 1), (0, Fd.is99NightsCrazyGamesBundle)() && Rd.k.setItem(Wd.Fb, Rd.k.getItem(Wd.Fb) + 1)
    }
  },
  38074: (dd, Od, md) => {
    md.d(Od, {
      d: () => gd,
      g: () => wd
    });
    var Wd = md(1122),
      Fd = md(231),
      Rd = md(399),
      Xd = md(708),
      Kd = md(405),
      hd = md(1128),
      vd = md(732),
      Qd = md(763),
      td = md(5180),
      od = md(107),
      Nd = md(151),
      qd = md(1890),
      Hd = md(127),
      yd = md(38082),
      bd = md(46),
      Td = md(747),
      pd = md(711),
      Yd = md(38087);

    function gd() {
      var dd, Od;
      return [...null !== (dd = navigator.languages) && void 0 !== dd ? dd : [null !== (Od = navigator.language) && void 0 !== Od ? Od : "none"], "EN-gb"]
    }

    function wd(dd, Od, md, wd, Ed) {
      const Jd = (0, Wd.k)(Od) ? (0, Wd.p)(Od) : null,
        Ud = dd.isLoggedIn() && void 0 !== (0, Fd.b)(Rd.k, Nd.siteUsed) ? (0, pd.g)() : null,
        xd = {
          cookies: (0, qd.getAllCookiesForGameNameWithVariation)(Od),
          isMobile: (0, od.isMobile)(),
          isUsingCustomGameTexturePack: null !== Jd && Ed(Jd),
          generalCookies: {
            joinDiscord: !!bd.k.getItem("DiscordPressed"),
            newGo: td.c,
            ...dd.getMetricsCookies(),
            trafficCode: wd,
            compliance: od.compliance
          },
          browserInfo: {
            ua: window.navigator.userAgent,
            name: (0, od.getBrowserName)(),
            version: (0, od.getBrowserVersion)(),
            platform: navigator.platform,
            platformType: (0, od.getPlatformType)(),
            deviceType: (0, Hd.e)()
          },
          isLoggedIn: dd.isLoggedIn(),
          lobbyName: md,
          languages: gd(),
          version: Xd.c,
          siteUsed: Nd.siteUsed,
          subsiteUsed: Nd.subsiteUsed,
          playSessionId: (0, yd.g)(Od),
          visitSessionId: (0, Td.getVisitSessionId)(),
          clientReason: vd.y.reason,
          budgetBasis: (0, Yd.i)(),
          ...null !== Qd.o && {
            diagClaim: Qd.o.claimId
          },
          ...null !== Ud && {
            webGpuLoss: Ud
          }
        };
      return null !== Jd && (0, Kd.xc)(Jd) ? (xd.lobbyName = (0, Wd.i)(Jd, (0, Wd.m)(Od), md), {
        roomName: `classic_${hd.e}`,
        joinOptions: xd
      }) : {
        roomName: Od,
        joinOptions: xd
      }
    }
  },
  35446: (dd, Od, md) => {
    md.d(Od, {
      b: () => Rd,
      d: () => Fd
    });
    let Wd = null;

    function Fd() {
      Wd = performance.now()
    }

    function Rd() {
      return Wd
    }
  },
  40650: (dd, Od, md) => {
    md.d(Od, {
      c: () => Nd,
      e: () => od
    });
    const Wd = "ue:",
      Fd = ["keydown", "keyup", "mousedown", "mouseup", "pointerdown", "pointerup", "touchstart", "touchend"],
      Rd = "[A-Za-z0-9]{1,24}",
      Xd = 15,
      Kd = new RegExp(`^${Rd}$`);
    new RegExp(`^${Wd}(${[...Fd,"other"].join("|")}):(?:n|k(${Rd})|b(0|[1-9][0-9]?)):([01])([01])$`);

    function hd(dd, Od, md, Rd, hd) {
      const vd = "string" === typeof dd && Fd.includes(dd) ? dd : "other";
      let Qd = "n";
      return "string" === typeof Od ? Qd = Kd.test(Od) ? `k${Od}` : "n" : "number" === typeof md && Number.isInteger(md) && md >= 0 && md <= Xd && (Qd = `b${md}`), `${Wd}${vd}:${Qd}:${Rd?1:0}${hd?1:0}`
    }
    var vd = md(1798),
      Qd = md(1893);
    let td = null;

    function od(dd) {
      const Od = dd instanceof Element && dd !== document.body && dd !== document.documentElement && !(0, vd.p)(dd) && !dd.closest("#root");
      return {
        editable: (0, Qd.c)(dd),
        outsideView: Od
      }
    }

    function Nd(dd) {
      return td ??= function(dd) {
        try {
          const {
            editable: Od,
            outsideView: md
          } = od(dd.target), Wd = dd;
          return hd(dd.type, Wd.code, Wd.button, Od, md)
        } catch {
          return hd(null, null, null, !1, !1)
        }
      }(dd), td
    }
  },
  42856: (dd, Od, md) => {
    md.d(Od, {
      C: () => fd,
      F: () => nd,
      H: () => sd,
      J: () => Gd,
      K: () => Sd,
      O: () => Id,
      S: () => ed,
      V: () => Vd,
      e: () => ld,
      h: () => Pd,
      l: () => xd,
      m: () => Cd,
      n: () => Bd,
      q: () => Ud,
      r: () => Ld,
      u: () => ud,
      v: () => rd,
      z: () => Ad
    });
    var Wd = md(1498),
      Fd = md(32),
      Rd = md(1349),
      Xd = md(3372),
      Kd = md(5590),
      hd = md(5558);
    let vd, Qd = !1,
      td = !1,
      od = !1,
      Nd = !1;
    const qd = 1300,
      Hd = 3e3;
    let yd = 0,
      bd = !1,
      Td = !1,
      pd = 0;
    const Yd = 2;
    let gd = !1,
      wd = !1;
    const Ed = new Set,
      Jd = new Set;

    function Ud() {
      return Qd
    }

    function xd() {
      return Td
    }

    function Bd() {
      return wd
    }

    function Sd() {
      return (0, Rd.y)() && !wd
    }

    function sd(dd) {
      let Od = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (dd !== wd) {
        wd = dd;
        for (const dd of [...Jd]) dd(wd);
        Od && ed()
      }
    }

    function ud(dd) {
      return Jd.add(dd), () => {
        Jd.delete(dd)
      }
    }

    function Vd() {
      (0, Kd.i)(Xd.w.Menu, (0, Rd.y)() ? 0 : Xd.w.Menu)
    }

    function Ad() {
      Td = !1, pd = 0, Vd(), ed()
    }

    function rd(dd) {
      return Ed.add(dd), () => {
        Ed.delete(dd)
      }
    }

    function Gd(dd) {
      td = !1, dd !== Qd && (Qd = dd, Nd = !1, clearTimeout(vd), od = !Qd && gd, Qd ? (bd = !1, Td = !1, pd = 0) : Sd() && !gd && (Td = !0), gd = !1, Qd && !Sd() && kd(), Md(), od && ed())
    }

    function nd(dd) {
      dd !== bd && (bd = dd, dd || ed())
    }

    function Ld() {
      td = !1, Nd || !0 !== jd() || (Nd = !0, clearTimeout(vd), vd = setTimeout(zd, qd))
    }

    function Pd() {
      return (!td || performance.now() - yd > Hd) && (td = (0, hd.O)().lockPointer(), yd = performance.now()), td
    }

    function zd() {
      cd() && Dd() && Pd()
    }

    function cd() {
      return Sd() && !Qd && !bd && !(0, Wd.m)()
    }

    function jd() {
      var dd;
      return "undefined" === typeof navigator || null === (dd = navigator.userActivation) || void 0 === dd ? void 0 : dd.isActive
    }

    function Dd() {
      return od && (!navigator.userAgent.includes("Firefox/") || Boolean(document.fullscreenElement)) || !1 !== jd()
    }

    function ed() {
      Sd() ? cd() && !Td && Dd() && Pd() : Qd && !gd && kd()
    }

    function Id() {
      Td ? navigator.vendor.startsWith("Apple") ? Zd() : pd = Yd : ed()
    }

    function ld() {
      pd > 0 && 0 === --pd && Zd()
    }

    function Cd() {
      pd = 0
    }

    function Zd() {
      cd() && !0 === jd() && Pd()
    }

    function kd() {
      gd = !0, (0, hd.O)().unlockPointer()
    }

    function fd() {
      td = !1, od = !1, Nd = !1, clearTimeout(vd), bd = !1, Td = !1, pd = 0, gd = !1;
      const dd = Qd;
      Qd = !1, dd && Md()
    }

    function Md() {
      for (const dd of [...Ed]) dd(Qd);
      Fd.j.lQ("pointerLockUpdate", Qd)
    }
  },
  42827: (dd, Od, md) => {
    md.d(Od, {
      e: () => od,
      i: () => Kd,
      j: () => td,
      m: () => vd,
      q: () => Xd,
      t: () => Qd,
      x: () => hd
    });
    let Wd = null,
      Fd = null,
      Rd = null;

    function Xd(dd) {
      Wd = dd
    }

    function Kd() {
      return Wd
    }

    function hd(dd) {
      Fd = dd
    }

    function vd() {
      return Fd
    }

    function Qd(dd) {
      Rd = dd
    }

    function td() {
      return Rd
    }

    function od() {
      var dd, Od;
      return !0 === (null === (dd = Fd) || void 0 === dd || null === (Od = dd.currentViewer) || void 0 === Od ? void 0 : Od.inPlayback)
    }
  },
  42623: (dd, Od, md) => {
    md.d(Od, {
      b: () => hd
    });
    var Wd = md(41340),
      Fd = md(38359);

    function Rd(dd) {
      return {
        current: () => dd,
        watch: () => () => {}
      }
    }

    function Xd() {}
    const Kd = Object.freeze([0, 0, 0]),
      hd = {
        states: {
          health: Rd({
            health: null,
            maxHealth: null,
            shield: null,
            maxShield: null
          }),
          inventory: Rd({
            player: [],
            chestOrCreative: [],
            chest: null,
            creative: !1,
            selectedSlot: 0,
            freeSlots: 0
          }),
          hotbar: Rd({
            items: [],
            ammo: 0,
            selectedSlot: null
          }),
          stationItems: Rd({
            enchantable: {},
            salvageable: {}
          }),
          itemInfo: Rd({}),
          creativeVisibility: Rd({
            publicLobby: !1,
            shownInGame: {}
          }),
          aura: Rd(null),
          heldItemAim: Rd({
            gun: !1,
            aimable: !1,
            chargeName: null
          }),
          crouching: Rd(!1),
          gliderBoostFuel: Rd(0),
          flight: Rd({
            canFly: !1,
            flying: !1
          }),
          crafting: Rd({
            focus: null,
            recipes: [],
            detail: null
          }),
          players: Rd({
            ids: [],
            byId: {},
            localId: null
          }),
          lobbyLeaderboardRows: Rd({}),
          fullInventory: Rd(!1),
          crosshairTarget: Rd({
            interactPrompt: null,
            blockText: null,
            neededTool: null
          }),
          localPlayerAlive: Rd(!0),
          freeCamera: Rd({
            allowed: !1,
            movesFly: !1
          }),
          replay: Rd(null),
          replayEdits: Rd(null),
          replayRecorder: Rd(Fd.c),
          replayVideoExporting: Rd(!1)
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
          selectHotbarSlot: Xd,
          removeInventoryItem: () => !1,
          swapInventorySlots: () => !1,
          moveInventoryItem: () => !1,
          quickMoveInventoryItem: () => null,
          closeChest: Xd,
          setInventoryOpen: Xd,
          changeIronChestPasskey: Xd,
          dragReplayCamera: Xd,
          applyTemporaryThirdPerson: Xd,
          holdEmoteWheel: Xd,
          recordFlyingMiddleText: Xd,
          focusCrafting: Xd,
          craftRecipe: () => ({
            qK: 0,
            IQ: null,
            amountAddedToSlot: 0
          }),
          salvageItem: () => !1,
          enchantItem: Xd,
          setShopOpen: Xd,
          buyShopItem: Xd,
          lobbyManage: Xd,
          sendChatMessage: () => !1,
          ignorePlayer: Xd,
          reportPlayer: Xd,
          reportWorldCodeChat: Xd,
          requestDiscordReportKey: Xd,
          reportLobbyOrGame: Xd,
          playEmote: Xd,
          updateMyCosmetic: Xd,
          writeOnBoard: Xd,
          writeBook: Xd,
          writeNameTag: Xd,
          setCustomLobbyBlock: Xd,
          openIronChest: Xd,
          sendCodeCollab: Xd,
          clickCodeBlock: Xd,
          bindCustomButtonKeys: Xd,
          pressCustomButton: Xd,
          moveReplayFreecam: Xd,
          holdReplayFreecamVertical: Xd,
          respawn: Xd,
          wakeUp: Xd,
          requestLeaderboard: Xd,
          completeTask: Xd,
          setServerCookie: Xd,
          answerUiRequest: Xd,
          chooseRewardedAd: Xd,
          setCameraZoom: Xd,
          setFreeCameraMovesFly: Xd,
          setBlockHighlight: Xd,
          setCrosshairInteractPrompt: Xd,
          setLookSensitivity: Xd,
          replayAction: Xd,
          setReplayPlaying: Xd,
          seekReplay: Xd,
          setReplayCameraMode: Xd,
          syncReplayCameraMode: Xd,
          setReplayCameraKeyframe: Xd,
          moveReplayCameraKeyframe: Xd,
          deleteReplayCameraKeyframes: Xd,
          setReplayPlaybackMark: Xd,
          cropReplay: () => !1,
          holdReplayForShaderPackFailure: Xd,
          exportReplayVideo: Xd,
          toggleRecording: Xd,
          saveClip: Xd,
          setRecorderPrefs: Xd,
          setReplayViewerOpen: Xd
        },
        queries: {
          enchantingOffer: () => ({
            perks: [],
            options: []
          }),
          worldCodeAiChunk: () => Wd.e,
          worldCodeAiGameState: () => Wd.f
        },
        lookups: {
          localPos: () => Kd,
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
  42628: (dd, Od, md) => {
    md.d(Od, {
      e: () => Xd,
      f: () => Rd,
      h: () => Fd
    });
    let Wd = null;

    function Fd(dd) {
      Wd = dd
    }

    function Rd(dd) {
      Wd === dd && (Wd = null)
    }

    function Xd() {
      var dd;
      null === (dd = Wd) || void 0 === dd || dd()
    }
  },
  38237: (dd, Od, md) => {
    md.d(Od, {
      c: () => Qd,
      g: () => od,
      k: () => bd,
      l: () => vd
    });
    var Wd = md(29),
      Fd = md(3372),
      Rd = md(3378),
      Xd = md(3383),
      Kd = md(3510),
      hd = md(32);

    function vd(dd, Od) {
      return (!(0, Xd.e)() || 0 === dd && 0 === Od) && (0, Rd.p)(Fd.h.Joystick, 0, dd, Od, 0)
    }
    const Qd = {
      Action1: 1,
      Action2: 2,
      Action3: 3,
      Attack: 4,
      Use: 5,
      Interact: 6,
      Boost: 7
    };

    function td(dd) {
      return dd.classList.contains("TouchKeyHit") && Nd() ? null : dd.firstElementChild
    }

    function od(dd) {
      return dd.classList.contains("TouchKeyHit") && !dd.classList.contains("CanvasZone") ? {
        whole: !Nd(),
        keyBox: null
      } : {
        whole: !1,
        keyBox: qd(td(dd))
      }
    }

    function Nd() {
      return document.documentElement.classList.contains(Kd.f)
    }

    function qd(dd) {
      return !(dd instanceof HTMLElement) || dd.offsetWidth <= 0 || dd.offsetHeight <= 0 ? null : {
        width: dd.offsetWidth,
        height: dd.offsetHeight
      }
    }

    function Hd(dd, Od) {
      const md = dd => Math.min(65535, Math.round(4 * dd));
      return (md(dd) | md(Od) << 16) >>> 0
    }

    function yd(dd) {
      return {
        x: dd.left + dd.width / 2,
        y: dd.top + dd.height / 2,
        radius: Math.min(dd.width, dd.height) / 2
      }
    }
    const bd = new class {
      constructor(dd) {
        this.write = dd, this.elements = new Map, this.canvasLeft = 0, this.canvasTop = 0
      }
      set(dd, Od) {
        let md = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        Od ? this.elements.set(dd, {
          element: Od,
          hidden: md
        }) : this.elements.delete(dd), this.measureOne(dd)
      }
      measure() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
          left: this.canvasLeft,
          top: this.canvasTop
        };
        this.canvasLeft = dd.left, this.canvasTop = dd.top;
        for (const Od of this.elements.keys()) this.measureOne(Od)
      }
      hitZone(dd, Od) {
        let md = null,
          Wd = 1;
        for (const Fd of this.elements.keys()) {
          const Rd = this.shown(Fd);
          if (!Rd) continue;
          const {
            rect: Xd,
            element: Kd
          } = Rd, hd = yd(Xd), vd = Math.max(0, Xd.width / 2 - hd.radius), Qd = Math.max(0, Xd.height / 2 - hd.radius), od = Math.max(0, Math.abs(dd - hd.x) - vd), Nd = Math.max(0, Math.abs(Od - hd.y) - Qd), Hd = Kd.firstElementChild;
          let bd = Math.hypot(od, Nd) / hd.radius;
          const Td = qd(td(Kd));
          Td && (bd = Math.min(bd, Math.max(2 * Math.abs(dd - hd.x) / Td.width, 2 * Math.abs(Od - hd.y) / Td.height))), bd < Wd && (md = {
            code: Fd,
            element: Kd,
            key: Hd,
            ...hd
          }, Wd = bd)
        }
        return md
      }
      measureOne(dd) {
        const Od = this.shown(dd);
        if (!Od) return void this.write(Fd.h.TouchZone, dd, 0, 0, 0);
        const {
          rect: md,
          element: Wd
        } = Od, Rd = yd(md);
        this.write(Fd.h.TouchZone, dd, Rd.x - this.canvasLeft, Rd.y - this.canvasTop, Hd(md.width, md.height));
        const Xd = qd(td(Wd));
        this.write(Fd.h.TouchZone, 256 | dd, 0, 0, Xd ? Hd(Xd.width, Xd.height) : 0)
      }
      shown(dd) {
        const Od = this.elements.get(dd),
          md = Wd.e.get("worldPanelHud");
        if (!Od || Od.hidden || "none" === md) return null;
        const Fd = Od.element.getBoundingClientRect();
        return Fd.width <= 0 || Fd.height <= 0 ? null : {
          rect: Fd,
          element: Od.element
        }
      }
    }(Rd.p);
    (0, hd.l)(Kd.c, (() => {
      bd.measure()
    }))
  },
  42835: (dd, Od, md) => {
    md.d(Od, {
      c: () => hd,
      d: () => vd
    });
    var Wd = md(42840),
      Fd = md(40627),
      Rd = md(38074),
      Xd = md(42693),
      Kd = md(42758);
    const hd = Wd.e.timeForPlayerToConnect - 1e4;
    async function vd(dd, Od, md, Wd) {
      let hd;
      try {
        hd = await dd.getTrafficCode()
      } catch (qd) {
        throw console.error("[bloxd-wasm-client] could not get a traffic code", qd), new Kd.v(qd)
      }
      const {
        gameNameWithVariation: vd,
        lobbyName: Qd
      } = Od, td = () => {
        const Od = (0, Rd.g)(dd, vd, Qd, hd, (dd => {
          var Od;
          return null !== (Od = null === md || void 0 === md ? void 0 : md.isUsingCustomGameTexturePack(dd)) && void 0 !== Od && Od
        }));
        Od.joinOptions.wasmClient = !0;
        const Fd = (0, Xd.E)();
        return null !== Fd && (Od.joinOptions.renderBackend = Fd), Od.joinOptions.joinAdHold = Wd, Od
      }, {
        roomName: od,
        joinOptions: Nd
      } = td();
      return {
        endpoint: Od.endpoint,
        roomName: od,
        joinOptions: Nd,
        session: {
          gameNameWithVariation: vd,
          lobbyName: Qd,
          playerDbId: dd.whamm
        },
        optionsAfterRefusal: async Od => await (0, Fd.c)(dd, Od) ? td().joinOptions : null
      }
    }
  },
  5975: (dd, Od, md) => {
    function Wd(dd, Od) {
      return Fd(dd, Od)
    }

    function Fd(dd, Od) {
      if (dd === Od) return !0;
      if ("object" !== typeof dd || "object" !== typeof Od || null === dd || null === Od || Array.isArray(dd) !== Array.isArray(Od)) return !1;
      const md = dd,
        Wd = Od,
        Rd = Object.keys(md);
      return Rd.length === Object.keys(Wd).length && Rd.every((dd => Object.prototype.hasOwnProperty.call(Wd, dd) && Fd(md[dd], Wd[dd])))
    }
    md.d(Od, {
      c: () => Wd
    })
  },
  42892: (dd, Od, md) => {
    md.d(Od, {
      c: () => wd,
      f: () => Yd,
      i: () => Hd,
      j: () => qd
    });
    var Wd = md(1965),
      Fd = md(1268),
      Rd = md(40620),
      Xd = md(38109),
      Kd = md(40638),
      hd = md(42758);
    const vd = {
        "X-Requested-With": "XMLHtttpRequest"
      },
      Qd = 3,
      td = [500, 1500];

    function od(dd) {
      const Od = new URL(dd);
      return {
        secure: "https:" === Od.protocol || "wss:" === Od.protocol,
        host: Od.host,
        pathname: Od.pathname.replace(/\/+$/, ""),
        search: Od.searchParams.toString()
      }
    }

    function Nd(dd, Od, md) {
      const {
        secure: Wd,
        host: Fd,
        pathname: Rd,
        search: Xd
      } = od(dd);
      return `${Wd?"https":"http"}://${Fd}${Rd}/matchmake/${Od}/${encodeURIComponent(md)}${Xd?`?${Xd}`:""}`
    }

    function qd(dd, Od) {
      var md;
      const Wd = null !== (md = Od.protocol) && void 0 !== md ? md : "ws";
      if ("ws" !== Wd) throw new Error(`seat reservation asks for the ${Wd} transport`);
      const {
        secure: Fd,
        host: Rd,
        pathname: Xd,
        search: Kd
      } = od(dd), hd = new URLSearchParams(Kd);
      hd.append("sessionId", Od.sessionId), Od.reconnectionToken && hd.append("reconnectionToken", Od.reconnectionToken);
      return `${Fd?"wss":"ws"}://${Od.room.publicAddress||`${Rd}${Xd}`}/${Od.room.processId}/${Od.room.roomId}?${hd.toString()}`
    }
    async function Hd(dd, Od, md) {
      var Kd;
      let vd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const od = null !== (Kd = vd.sleep) && void 0 !== Kd ? Kd : Wd.c,
        qd = new Fd.b(vd.signal),
        Hd = new Xd.e((() => {
          (0, Fd.f)(qd.controller, new Xd.i("seat"))
        })),
        {
          signal: pd
        } = qd;
      try {
        const Wd = await (0, Rd.e)((() => async function(dd, Od, md, Wd) {
          var Rd;
          const {
            signal: Xd,
            sleep: Kd
          } = Wd, vd = Nd(dd, "joinOrCreate", Od), od = JSON.stringify(md);
          let qd = null;
          for (let Nd = 0; Nd < Qd; Nd++) {
            var Hd;
            if (Nd > 0) await Kd(null !== (Hd = td[Nd - 1]) && void 0 !== Hd ? Hd : 1500, Xd);
            let dd;
            (0, Fd.p)(Xd);
            try {
              dd = await bd(vd, od, Wd)
            } catch (pd) {
              (0, Fd.p)(Xd), qd = yd(pd);
              continue
            }
            const {
              response: Od,
              answer: md,
              refusal: Rd,
              lost: Qd
            } = dd;
            if (null === Qd) {
              if (null !== Rd) throw Td(Rd, md);
              if (Od.ok && null !== md && Ed(md)) return md;
              qd = new hd.r(`seat request answered HTTP ${Od.status}${null===md?" without JSON":" without a seat"}`, !1, void 0, Od.status)
            } else qd = yd(Qd.error)
          }
          throw null !== (Rd = qd) && void 0 !== Rd ? Rd : new hd.r("seat request made no attempt", !1)
        }(dd, Od, md, {
          ...vd,
          signal: pd,
          sleep: od
        })), pd, od);
        return Hd.answered(), Wd
      } finally {
        Hd.stop(), qd.unfollow()
      }
    }

    function yd(dd) {
      return new hd.r(dd instanceof Error ? dd.message : String(dd), !0, dd)
    }
    async function bd(dd, Od, md) {
      var Wd;
      const {
        signal: Rd
      } = md, Xd = null !== (Wd = md.fetch) && void 0 !== Wd ? Wd : fetch, Kd = await Xd(dd, {
        method: "POST",
        headers: {
          ...vd,
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: Od,
        credentials: "include",
        signal: Rd
      }), {
        answer: hd,
        lost: Qd
      } = await async function(dd) {
        try {
          const Od = await dd.json();
          return {
            answer: "object" === typeof Od && null !== Od ? Od : null,
            lost: null
          }
        } catch (Od) {
          return {
            answer: null,
            lost: Od instanceof SyntaxError ? null : {
              error: Od
            }
          }
        }
      }(Kd), td = null !== hd && "string" === typeof hd.error ? hd.error : null;
      var od;
      null !== td && (null === (od = md.onRefusal) || void 0 === od || od.call(md));
      return (0, Fd.p)(Rd), {
        response: Kd,
        answer: hd,
        refusal: td,
        lost: Qd
      }
    }

    function Td(dd, Od) {
      return new hd.n(dd, "number" === typeof(null === Od || void 0 === Od ? void 0 : Od.code) ? Od.code : 0, (0, Kd.m)(dd).text)
    }
    class pd extends Error {
      constructor(dd, Od) {
        super(dd), this.code = Od, this.name = "SeatHttpError"
      }
    }
    async function Yd(dd, Od, md) {
      let Wd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const {
        response: Fd,
        answer: Rd,
        refusal: Xd,
        lost: Kd
      } = await bd(Nd(dd, "reconnect", Od), JSON.stringify({
        reconnectionToken: md
      }), Wd);
      if (null !== Kd) throw Kd.error;
      if (!Fd.ok) {
        const dd = null !== Rd && "number" === typeof Rd.code && 0 !== Rd.code ? Rd.code : Fd.status;
        throw new pd(`the seat's reconnect was refused: ${null!==Xd&&void 0!==Xd?Xd:`HTTP ${Fd.status}`}`, dd)
      }
      if (null !== Xd) throw Td(Xd, Rd);
      if (null === Rd || !Ed(Rd)) throw new Error("the seat's reconnect answered " + (null === Rd ? "without JSON" : "without a seat"));
      return {
        ...Rd,
        reconnectionToken: md
      }
    }
    const gd = 10;

    function wd(dd) {
      if (dd.byteLength < 2 || dd[0] !== gd) return null;
      const Od = 2 + dd[1];
      return Od > dd.byteLength ? null : (new TextDecoder).decode(dd.subarray(2, Od))
    }

    function Ed(dd) {
      const Od = dd.room;
      return "string" === typeof dd.sessionId && "object" === typeof Od && null !== Od && "string" === typeof Od.roomId && "string" === typeof Od.processId && "string" === typeof Od.name
    }
  },
  42555: (dd, Od, md) => {
    md.d(Od, {
      $: () => bd,
      C: () => Ed,
      E: () => sd,
      I: () => Yd,
      K: () => gd,
      M: () => yd,
      O: () => xd,
      P: () => Vd,
      T: () => qd,
      X: () => rd,
      Y: () => Td,
      ab: () => pd,
      c: () => Fd,
      cb: () => wd,
      g: () => Ad,
      j: () => ud,
      l: () => Nd,
      o: () => Hd,
      q: () => Sd,
      u: () => Jd,
      w: () => Bd,
      y: () => Ud
    });
    var Wd = md(2963);
    const Fd = {
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

    function Rd(dd, Od) {
      return !ArrayBuffer.isView(dd) || dd instanceof DataView ? Array.isArray(dd) ? dd.map((dd => Od(dd))) : dd : Array.from(dd, (dd => Od(dd)))
    }

    function Xd(dd) {
      if ("string" !== typeof dd) return dd;
      for (let Od = 0; Od < dd.length; Od++) {
        const md = dd.charCodeAt(Od);
        if (md >= 55296 && md <= 57343) return hd.decode(Kd.encode(dd))
      }
      return dd
    }
    const Kd = new TextEncoder,
      hd = new TextDecoder;

    function vd(dd) {
      return dd
    }
    let Qd;

    function td(dd) {
      return null === dd || "object" !== typeof dd ? dd : [Xd(dd.policy), Xd(dd.KK)]
    }

    function od(dd) {
      return null === dd || "object" !== typeof dd ? dd : [Rd(dd.cF, vd), Rd(dd.ZK, vd)]
    }

    function Nd(dd) {
      return null === (Od = dd) || "object" !== typeof Od ? Od : [Xd(Od.tX), Xd(Od.oX)];
      var Od
    }

    function qd(dd) {
      return null === (Od = dd) || "object" !== typeof Od ? Od : [Od.id, Od.WQ];
      var Od
    }

    function Hd(dd) {
      return null === (Od = dd) || "object" !== typeof Od ? Od : [Od.Vm, Xd(Od.im), Od.Am, Xd(Od.nm), Od.jm, Od.Dm, Od.hX, Xd(Od.vX), Xd(Od.QX)];
      var Od
    }

    function yd(dd) {
      return null === (Od = dd) || "object" !== typeof Od ? Od : [Rd(Od.RK, vd), Od.XK];
      var Od
    }

    function bd(dd) {
      return null === (Od = dd) || "object" !== typeof Od ? Od : [Rd(Od.oQ, (dd => Xd(dd))), Xd(Od.NQ), Od.qQ];
      var Od
    }

    function Td(dd) {
      return null === (Od = dd) || "object" !== typeof Od ? Od : [Rd(Od.MK, vd), Xd(Od.dh), Xd(Od.Oh), Od.mh];
      var Od
    }

    function pd(dd) {
      return null === (Od = dd) || "object" !== typeof Od ? Od : [Xd(Od.KF), Xd(Od.hF)];
      var Od
    }

    function Yd(dd) {
      return null === (Od = dd) || "object" !== typeof Od ? Od : [Xd(Od.hK)];
      var Od
    }

    function gd(dd) {
      return Xd(dd)
    }

    function wd(dd) {
      return null === (Od = dd) || "object" !== typeof Od ? Od : [Xd(Od.SQ), Xd(Od.sQ), Xd(Od.policy), Xd(Od.KK), Rd(Od.uQ, (dd => Xd(dd)))];
      var Od
    }

    function Ed(dd) {
      return td(dd)
    }

    function Jd(dd) {
      return td(dd)
    }

    function Ud(dd) {
      return null === (Od = dd) || "object" !== typeof Od ? Od : [Xd(Od.dQ)];
      var Od
    }

    function xd(dd) {
      return dd
    }

    function Bd(dd) {
      return null === (Od = dd) || "object" !== typeof Od ? Od : [Xd(Od.QQ), Xd(Od.tQ)];
      var Od
    }

    function Sd(dd) {
      return Xd(dd)
    }

    function sd(dd) {
      return od(dd)
    }

    function ud(dd) {
      return od(dd)
    }

    function Vd(dd) {
      return null === (Od = dd) || "object" !== typeof Od ? Od : [Xd(Od.Iv)];
      var Od
    }

    function Ad(dd) {
      return (Qd ??= (0, Wd.e)().map((dd => dd.name)), Qd).map((Od => {
        return "string" === typeof(md = dd[Od]) ? Xd(md) : Rd(md, vd);
        var md
      }))
    }

    function rd(dd) {
      return null === (Od = dd) || "object" !== typeof Od ? Od : [Od.bX, Od.TX, Od.pX];
      var Od
    }
  },
  5967: (dd, Od, md) => {
    md.d(Od, {
      b: () => Xd,
      d: () => Kd
    });
    var Wd = md(2337),
      Fd = md(5975);
    let Rd = null;

    function Xd(dd) {
      Rd = {
        pack: dd.metaData.id === Wd.d ? null : dd
      }
    }

    function Kd(dd) {
      return !(null === Rd || !(0, Fd.c)(Rd.pack, dd)) && (Rd = null, !0)
    }
  },
  42818: (dd, Od, md) => {
    md.r(Od), md.d(Od, {
      followPageUiPack: () => Lt,
      packForGame: () => nt,
      playWasmGame: () => ft,
      prefetchWasmPreviews: () => Ev,
      setGamePackConfirm: () => cQ,
      startWasmPlay: () => Dt,
      startWasmPreviews: () => av
    });
    var Wd = md(218),
      Fd = md(1304),
      Rd = md(180),
      Xd = md(40652),
      Kd = md(2092),
      hd = md(32),
      vd = md(5402),
      Qd = md(1406),
      td = md(1860),
      od = md(1415),
      Nd = md(40852),
      qd = md(1361),
      Hd = md(10143),
      yd = md(210),
      bd = md(3970),
      Td = md(1954),
      pd = md(3998);
    let Yd = null,
      gd = null,
      wd = null,
      Ed = !1,
      Jd = "previews",
      Ud = null,
      xd = !1,
      Bd = 0;

    function Sd(dd) {
      Jd = dd
    }

    function sd(dd) {
      var Od;
      const md = dd instanceof Error ? dd.name : null;
      return null !== (Od = yd.c.find((dd => dd === md))) && void 0 !== Od ? Od : "other"
    }

    function ud() {
      Yd ??= performance.now()
    }

    function Vd(dd) {
      gd ??= performance.now(), Ud = dd, Bd > 0 && Ad()
    }

    function Ad() {
      null !== gd && null !== Ud && (0, qd.A)("wasm_loaded", gd, `${Ud}:${(0,bd.j)()}`)
    }
    const rd = {
      ready: () => {
        Td.e.markAdmissionAwaited()
      },
      adEnded: () => {
        Td.e.markJoinAdEnded()
      },
      admitted: () => {
        Td.e.markAdmitted()
      }
    };
    var Gd = md(40865),
      nd = md(40773),
      Ld = md(38082),
      Pd = md(1627),
      zd = md(40620),
      cd = md(10092),
      jd = md(38109),
      Dd = md(42827),
      ed = md(5558),
      Id = md(42552),
      ld = md(42623),
      Cd = md(42555);
    const Zd = {
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

    function kd(dd) {
      const Od = {
        ...ld.b[dd]
      };
      for (const md of Object.keys(Zd[dd])) delete Od[md];
      return Od
    }

    function fd() {
      var dd, Od;
      return null === (dd = null === (Od = (0, Id.l)()) || void 0 === Od ? void 0 : Od.localPlayerAlive()) || void 0 === dd || dd
    }

    function Md() {
      var dd, Od;
      return null !== (dd = null === (Od = (0, Id.l)()) || void 0 === Od ? void 0 : Od.localDeaths()) && void 0 !== dd ? dd : null
    }
    const dO = {
        current: fd,
        watch: dd => {
          let Od = fd(),
            md = Md();
          return (0, ed.A)((() => {
            const Wd = fd(),
              Fd = Md(),
              Rd = null !== Fd && null !== md && Fd !== md;
            md = Fd, Rd ? (Od || dd(!0), dd(!1), Wd && dd(!0), Od = Wd) : Wd !== Od && (Od = Wd, dd(Wd))
          }))
        }
      },
      OO = {
        states: {
          ...kd("states"),
          localPlayerAlive: dO
        },
        events: {
          ...kd("events"),
          localPlayerAliveSet: {
            watch: dO.watch
          }
        },
        commands: {
          ...kd("commands"),
          respawn: () => {
            var dd;
            null === (dd = (0, Id.l)()) || void 0 === dd || dd.respawn()
          },
          playEmote: dd => {
            var Od;
            null === (Od = (0, Id.l)()) || void 0 === Od || Od.send(Cd.c.PlayEmote, (0, Cd.I)({
              hK: dd
            }))
          },
          applyTemporaryThirdPerson: dd => {
            var Od;
            let {
              durationMs: md
            } = dd;
            null === (Od = (0, Id.l)()) || void 0 === Od || Od.thirdPersonFor(md)
          },
          bindCustomButtonKeys: dd => {
            var Od;
            null === (Od = (0, Id.l)()) || void 0 === Od || Od.bindCustomButtonKeys(dd)
          },
          pressCustomButton: dd => {
            var Od;
            let {
              id: md,
              down: Wd
            } = dd;
            null === (Od = (0, Id.l)()) || void 0 === Od || Od.pressCustomButton(md, Wd)
          },
          setLookSensitivity: () => {},
          wakeUp: dd => {
            const Od = (0, Cd.P)({
                Iv: dd
              }),
              md = () => {
                const dd = (0, Id.l)();
                return !(null !== dd && void 0 !== dd && dd.isSessionLive) || dd.send(Cd.c.StopSleeping, Od)
              };
            if (!md()) {
              const dd = (0, ed.A)((() => {
                md() && dd()
              }))
            }
          },
          setCameraZoom: dd => {
            var Od;
            null === (Od = (0, Id.l)()) || void 0 === Od || Od.setCameraZoom(dd)
          }
        },
        queries: kd("queries"),
        lookups: {
          ...kd("lookups"),
          cameraZoom: () => {
            var dd, Od;
            return null !== (dd = null === (Od = (0, Id.l)()) || void 0 === Od ? void 0 : Od.cameraZoom()) && void 0 !== dd ? dd : 0
          }
        }
      };
    var mO = md(40638),
      WO = md(42758),
      FO = md(42761),
      RO = md(42835),
      XO = md(1313),
      KO = md(118),
      hO = md(5180),
      vO = md(2457),
      QO = md(1218);
    const tO = {
      iK: () => (0, XO.e)(),
      inbuiltOverwritten: () => hO.f,
      reflectApplyHit: () => QO.b,
      definerHit: () => KO.currentUrl.c,
      emitReplaced: () => (0, hd.c)(),
      confirmMesh: () => (0, vO.d)(),
      confirmMeshHitStack: () => (0, vO.g)()
    };
    var oO = md(42763),
      NO = md(42849);
    var qO = md(29),
      HO = md(2094),
      yO = md(2134),
      bO = md(1768),
      TO = md(2171),
      pO = md(1238),
      YO = md(1306),
      gO = md(37851);

    function wO() {
      return YO.f.get().getCurrentLanguageCode()
    }

    function aO(dd) {
      const Od = () => {
        dd({
          translate: (dd, Od) => (0, pO.x)(wO(), dd, Od),
          keyBindingText: dd => {
            const Od = (0, yO.w)(dd, qO.e.get("isTouchScreen"));
            return null !== Od ? (0, pO.B)(wO(), Od.translationKey, Od.params) : (0, yO.r)((0, yO.u)(dd))
          },
          isFriend: TO.f,
          hiddenNames: HO.c.shown,
          loadsFontRest: (0, gO.b)(wO())
        })
      };
      let md = !1;
      const Wd = () => {
          const dd = wO();
          (0, pO.n)(dd).then((() => {
            md || dd !== wO() || Od()
          }))
        },
        Fd = () => bO.d.getSocialState().friends.map((dd => dd.name.toLowerCase())).sort().join(" ");
      let Rd = Fd();
      Od(), Wd();
      const Xd = [(0, YO.g)((() => {
        Od(), Wd()
      })), (0, hd.l)("customBindingsChanged", Od), (0, hd.l)("appManagerUpdated|isTouchScreen", Od), (0, TO.d)((() => {
        const dd = Fd();
        dd !== Rd && (Rd = dd, Od())
      })), HO.c.subscribe(Od)];
      return () => {
        md = !0;
        for (const dd of Xd) dd()
      }
    }
    var EO = md(1245),
      JO = md(5117),
      UO = md(38397);
    const xO = {
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
      wasmScreens: EO.wasmScreens
    };
    let BO = null;

    function SO(dd) {
      let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return null === BO ? function(dd) {
        var Od, md;
        let Wd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const [Fd, Rd] = dd.split(":"), Xd = null !== (Od = null === (md = xO[Fd]) || void 0 === md ? void 0 : md[Rd]) && void 0 !== Od ? Od : dd;
        return Xd.replace(/\{\{(\w+)\}\}/g, ((dd, Od) => {
          var md;
          return null !== (md = Wd[Od]) && void 0 !== md ? md : dd
        }))
      }(dd, Od) : BO(dd, Od)
    }

    function sO(dd, Od) {
      (0, JO.e)();
      const md = document.createElement("div");
      md.setAttribute("role", "alertdialog"), md.style.cssText = "position:fixed;top:0;right:0;bottom:0;left:0;z-index:100;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,0.7);font:16px sans-serif;color:#fff";
      const Wd = document.createElement("div");
      Wd.style.cssText = "max-width:28rem;padding:1.5rem;background:#1c2333;text-align:center";
      const Fd = document.createElement("h2");
      Fd.textContent = SO(dd.title);
      const Rd = document.createElement("p");
      if (Rd.textContent = SO(dd.help, dd.helpValues), Rd.style.whiteSpace = "pre-line", Wd.append(Fd, Rd), dd.discordLink) {
        const dd = document.createElement("a");
        dd.href = UO.d, dd.target = "_blank", dd.rel = "noreferrer", dd.style.color = "#8ab4ff", dd.textContent = SO("wasmScreens:reportOnDiscord"), Wd.append(dd)
      }
      const Xd = document.createElement("div");
      return Xd.style.cssText = "display:flex;gap:1rem;justify-content:center;margin-top:1.5rem", Wd.append(Xd), md.append(Wd), document.body.append(md), new Promise((Wd => {
        const Fd = dd => {
            null === Od || void 0 === Od || Od.removeEventListener("abort", Rd), md.remove(), Wd(dd)
          },
          Rd = () => {
            Fd(!1)
          };
        null === Od || void 0 === Od || Od.addEventListener("abort", Rd, {
          once: !0
        });
        const Kd = (dd, Od) => {
          const md = document.createElement("button");
          md.textContent = SO(dd), md.style.cssText = "padding:0.5rem 1.25rem;font:inherit", md.addEventListener("click", (() => {
            Fd(Od)
          })), Xd.append(md)
        };
        null !== dd.cancel && Kd(dd.cancel, !1), Kd(dd.confirm, !0)
      }))
    }
    var uO = md(10081),
      VO = md(708),
      iO = md(1122),
      AO = md(2118),
      rO = md(387),
      GO = md(2421),
      nO = md(37688),
      LO = md(2425),
      PO = md(40316),
      zO = md(5426),
      cO = md(42640),
      jO = md(763),
      DO = md(732),
      eO = md(759),
      IO = md(4021),
      lO = md(2116),
      CO = md(2464),
      ZO = md(4502);
    let kO = null;
    var fO = md(1253),
      MO = md(1268),
      dm = md(1965),
      Om = md(5043),
      mm = md(5107),
      Wm = md(4669),
      Fm = md(61),
      Rm = md(382),
      Xm = md(373),
      Km = md(35446),
      hm = md(364),
      Qm = md(42856),
      tm = md(5565),
      om = md(5064);
    var Nm = md(5079),
      qm = md(46);

    function Hm(dd) {
      let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => document.createElement("canvas");
      try {
        var md;
        const Wd = Od(),
          Fd = dd ? Wd.getContext("webgl") : Wd.getContext("webgl2");
        return null !== Fd && (null === (md = Fd.getExtension("WEBGL_lose_context")) || void 0 === md || md.loseContext(), !0)
      } catch {
        return !1
      }
    }
    var ym = md(1786);
    var bm = md(39237),
      Tm = md(42861);
    class pm {
      constructor(dd, Od, md) {
        this.showView = dd, this.holdForAd = Od, this.render = md
      }
      pointerUnlockRequestsChanged() {
        (0, Qm.z)()
      }
      pointerLockDebugEntries() {
        return [{
          label: "Locked to the canvas",
          value: String((0, Qm.q)())
        }]
      }
      setGameViewShown(dd) {
        this.showView(dd)
      }
      setGameView(dd) {
        (0, Tm.l)(dd)
      }
      videoAdHold(dd, Od) {
        this.holdForAd(dd, Od)
      }
      gameRender() {
        return this.render()
      }
    }
    class Ym {
      leave(dd) {
        ! function(dd) {
          if (null !== (0, od.b)().websocketUrl) try {
            (0, ed.O)().leaveGame(dd)
          } finally {
            (0, od.l)({
              websocketUrl: null
            })
          }
        }(dd)
      }
      isReplay() {
        return !1
      }
    }
    class gm {
      constructor(dd) {
        this.workMs = dd
      }
      watchFrameStarts(dd) {
        return (0, ed.u)(dd)
      }
      watchFrames(dd) {
        return (0, ed.r)(dd)
      }
      watchTicks(dd) {
        return (0, ed.A)(dd)
      }
      frameWorkMs() {
        return this.workMs()
      }
    }
    var wm = md(42807),
      am = md(42867);

    function Em(dd) {
      return dd >= 0 ? Math.min(1, dd) : 0
    }

    function Jm(dd, Od) {
      const {
        fade: md
      } = dd;
      return null === md || Od - md.at >= md.ms ? dd.volume : md.from + (dd.volume - md.from) * Math.max(0, (Od - md.at) / md.ms)
    }

    function Um(dd) {
      const Od = Object.entries(dd),
        md = new Uint32Array(Od.length);
      let Wd = 0;
      for (const [Xd, [, Kd]] of Od.entries()) md[Xd] = Kd.length, Wd += Kd.length;
      const Fd = new Float64Array(3 * Wd);
      let Rd = 0;
      for (const [, Xd] of Od)
        for (const dd of Xd) Fd.set(dd, Rd), Rd += 3;
      return {
        blocks: Od.map((dd => {
          let [Od] = dd;
          return Od
        })).join("\0"),
        counts: md,
        values: Fd
      }
    }
    class xm {
      constructor(dd, Od) {
        this.core = dd, this.warn = Od, this.latest = 0
      }
      async feed() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Bm;
        const Od = ++this.latest;
        let md;
        try {
          md = await dd()
        } catch (Wd) {
          return void(this.core.isStopped || Od !== this.latest || this.warn("the block colours didn't load, so block particles draw grey", Wd))
        }
        Od === this.latest && (this.core.setBlockColours(md) || this.core.isStopped || this.warn("the core refused the block colours: block particles draw grey"))
      }
    }
    async function Bm() {
      return Um((await md.e(235).then((() => md(35669)))).averageColors)
    }
    var Sm = md(5568),
      sm = md(5571),
      um = md(42609),
      Vm = md(4455),
      im = md(37644),
      Am = md(42701),
      rm = md(699),
      Gm = md(38594),
      nm = md(693),
      Lm = md(405),
      Pm = md(42663);
    const zm = [3e4, 12e4, 3e5];
    class cm extends Error {}
    const jm = {
      mobTypes: rm.q,
      vehicleTypes: Gm.e,
      mobAiStates: rm.o,
      playerPoses: nm.n
    };
    var Dm = md(42658),
      em = md(42677),
      Im = md(42733),
      lm = md(1368),
      Cm = md(3961),
      Zm = md(42876),
      km = md(42883),
      fm = md(2482),
      Mm = md(40603),
      dW = md(5590),
      OW = md(3372);
    const mW = OW.w.KeysDisabled | OW.w.LookFrozen | OW.w.ClicksSuppressed,
      WW = fm.k;
    var FW = (0, km.d)("resumingConn");
    class RW {
      constructor(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.shell = dd, this.now = Od, this.session = void 0, this.attempt = null, this.landed = null, this.initialInfoConn = 0, this.initialInfoOffer = !1, this.completedEarlyConn = 0, Object.defineProperty(this, FW, {
          writable: !0,
          value: 0
        }), this.drops = 0, this.session = new Mm.c({
          reconnect: dd => this.reconnect(dd),
          isLive: () => dd.isLive(),
          onReconnected: Od => {
            this.landed = Od, dd.onReconnected(Od), this.landIfResumed()
          },
          onGaveUp: (Od, md) => {
            this.abortAttempt(), dd.onGaveUp(Od, md)
          },
          freeze: Od => {
            dd.qB(Od), (0, dW.i)(mW, Od ? mW : 0, "reconnectFreeze")
          },
          releaseSeat: dd => {
            this.releaseSeat(dd)
          }
        })
      }
      isResuming() {
        return this.session.isResuming()
      }
      get resumingConn() {
        return (0, Zm.b)(this, FW)[FW]
      }
      canHoldSeat() {
        return this.session.canHoldSeat()
      }
      onInitialInfo(dd) {
        let {
          conn: Od,
          graceMs: md,
          sessionBased: Wd,
          replayOffer: Fd
        } = dd;
        this.session.onInitialInfo(md, Wd), this.isResuming() && (this.initialInfoConn = Od, this.initialInfoOffer = Fd, this.landIfResumed())
      }
      onResumeComplete(dd) {
        0 !== dd && (dd === (0, Zm.b)(this, FW)[FW] ? ((0, Zm.b)(this, FW)[FW] = 0, this.session.onResumed()) : this.isResuming() && (this.completedEarlyConn = dd))
      }
      onDropped(dd) {
        this.drops++, this.landed = null, this.initialInfoConn = 0, this.initialInfoOffer = !1, this.completedEarlyConn = 0, (0, Zm.b)(this, FW)[FW] = 0, this.session.onConnectionLost(dd)
      }
      leave() {
        this.session.leave(), this.dispose()
      }
      dispose() {
        this.abortAttempt(), this.landed = null, this.completedEarlyConn = 0, (0, Zm.b)(this, FW)[FW] = 0, this.session.end()
      }
      reconnect(dd) {
        const Od = this.attempt;
        if (null !== Od && this.awaitingJoinRoom(Od)) return Od.result;
        this.abortAttempt();
        const md = new AbortController,
          Wd = this.drops,
          Fd = {
            attachedAt: null
          },
          Rd = this.shell.reconnect(dd, md.signal, (() => {
            Fd.attachedAt = this.now()
          })).then((dd => {
            if (this.clearAttempt(Xd), this.drops !== Wd) throw new Error("the resumed room dropped before its attempt settled");
            return dd
          }), (dd => {
            throw this.clearAttempt(Xd), dd
          })),
          Xd = {
            abort: md,
            socket: Fd,
            result: Rd
          };
        return this.attempt = Xd, Rd
      }
      clearAttempt(dd) {
        this.attempt === dd && (this.attempt = null)
      }
      abortAttempt() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new DOMException("the reconnect attempt was given up", "AbortError");
        const Od = this.attempt;
        this.attempt = null, null === Od || void 0 === Od || Od.abort.abort(dd)
      }
      awaitingJoinRoom(dd) {
        const Od = dd.socket.attachedAt;
        return null !== Od && this.now() - Od < WW
      }
      releaseSeat(dd) {
        const Od = this.attempt,
          md = null !== Od && this.awaitingJoinRoom(Od);
        this.abortAttempt(new WO.p), md || this.shell.releaseSeat(dd)
      }
      landIfResumed() {
        const dd = this.landed;
        if (null !== dd && dd.conn === this.initialInfoConn) {
          const Od = this.initialInfoOffer && this.completedEarlyConn !== dd.conn;
          if (this.landed = null, this.initialInfoConn = 0, this.initialInfoOffer = !1, this.completedEarlyConn = 0, this.abortAttempt(), !Od) return void this.session.onResumed();
          (0, Zm.b)(this, FW)[FW] = dd.conn, this.session.onResuming()
        }
      }
    }
    var XW = md(40611),
      KW = md(42892),
      hW = md(38096),
      vW = md(38087),
      QW = md(2337),
      tW = md(2057),
      oW = md(4948),
      NW = md(42709),
      qW = md(5967);

    function HW(dd) {
      let {
        pack: Od,
        gameSource: md
      } = dd;
      if (null !== md && "" !== md) return `game:${md}`;
      if (null === Od) return "default";
      const {
        id: Wd,
        version: Fd
      } = Od.metaData;
      if (Wd !== QW.n.CUSTOM) return `${Wd}@${Fd}`;
      const Rd = [];
      for (const Xd of [Od.textureOverrides, Od.modelOverrides, Od.animations])
        for (const [dd, Od] of Object.entries(null !== Xd && void 0 !== Xd ? Xd : {})) Rd.push(`${dd}:${Od.length}`);
      return `${Wd}:${(0,tW.v)(Rd.join())}`
    }
    var yW = md(5093),
      bW = md(4470),
      TW = md(42899),
      pW = md(739),
      YW = md(4478),
      gW = md(107),
      wW = md(4049),
      aW = md(4038),
      EW = md(5161),
      JW = md(4959),
      UW = md(42751),
      xW = md(42743),
      BW = md(3378),
      SW = md(1765),
      sW = md(1798),
      uW = md(1349),
      VW = md(127),
      iW = md(348),
      AW = md(40650),
      rW = md(3383),
      GW = md(5588);
    const nW = new Set([Sm.vb.KeyDown, Sm.vb.MouseMove, Sm.vb.MouseDown, Sm.vb.Wheel, Sm.vb.TouchStart, Sm.vb.TouchMove]);

    function LW(dd) {
      return (dd.shiftKey ? Sm.Lb.Shift : 0) | (dd.ctrlKey ? Sm.Lb.Ctrl : 0) | (dd.altKey ? Sm.Lb.Alt : 0) | (dd.metaKey ? Sm.Lb.Meta : 0) | ("repeat" in dd && dd.repeat ? Sm.Lb.Repeat : 0) | (dd.isTrusted ? 0 : Sm.Lb.Untrusted | function(dd) {
        try {
          const {
            editable: Od,
            outsideView: md
          } = (0, AW.e)(dd.target);
          return (Od ? Sm.Lb.UntrustedEditable : 0) | (md ? Sm.Lb.UntrustedOutsideView : 0)
        } catch {
          return 0
        }
      }(dd))
    }

    function PW(dd) {
      return "touchOnly" !== (0, VW.e)() && "function" === typeof dd.requestPointerLock
    }

    function zW(dd) {
      return 0 === dd.button ? dd.altKey ? GW.m["Alt+Left Click"] : GW.m.Mouse1 : 1 === dd.button ? GW.m.Mouse2 : GW.m.Mouse3
    }
    const cW = new Set(["AltLeft", "AltRight", "ArrowUp", "ArrowDown"]),
      jW = new Map([
        ["AltLeft", "altKey"],
        ["AltRight", "altKey"],
        ["ControlLeft", "ctrlKey"],
        ["ControlRight", "ctrlKey"],
        ["ShiftLeft", "shiftKey"],
        ["ShiftRight", "shiftKey"],
        ["MetaLeft", "metaKey"],
        ["MetaRight", "metaKey"]
      ]),
      DW = 32768,
      eW = 1;

    function IW(dd) {
      return Math.min(Math.max(Math.round(dd), 0), 65535)
    }

    function lW(dd, Od, md) {
      const Wd = [],
        Fd = (dd, Od, md, Fd) => {
          const Rd = dd => {
            (0, sW.v)(dd) || md(dd)
          };
          dd.addEventListener(Od, Rd, Fd), Wd.push((() => {
            dd.removeEventListener(Od, Rd, Fd)
          }))
        },
        Rd = {
          capture: !0,
          passive: !0
        },
        Xd = (dd, md, Wd, Fd, Rd) => (!(0, rW.e)() || !nW.has(dd)) && (Od(dd, md, Wd, Fd, Rd), !0),
        Kd = () => document.pointerLockElement === dd,
        hd = (0, iW.g)(),
        vd = dd => {
          dd.ctrlKey && md.ctrlCombosAreGames() && !(0, dW.e)(dd.target) && dd.preventDefault()
        },
        Qd = (dd, Wd, Fd) => {
          md.inspect(dd, Wd, !1), Od(Sm.vb.KeyUp, Wd, 0, 0, (0, BW.k)(Fd, dd.timeStamp)), md.keyReleased(Wd)
        },
        td = new Map,
        od = (dd, Od, md) => dd[md] || ("AltRight" === Od || "ControlLeft" === Od) && dd.getModifierState("AltGraph"),
        Nd = new Map,
        qd = () => {
          td.clear(), Nd.clear()
        },
        Hd = dd => {
          if (dd.isTrusted && document.hasFocus())
            for (const [Od, md] of Nd) Nd.delete(Od), od(dd, Od, md) || (td.delete(Od), Qd(dd, GW.m[Od], LW(dd)))
        };
      dd.tabIndex = -1;
      let yd = 0,
        bd = 0;
      const Td = () => {
        const Od = dd.getBoundingClientRect();
        yd = Od.left, bd = Od.top
      };
      let pd = "mouse";
      const Yd = () => !Kd() && ("mouse" === pd || !md.touchUiShown()),
        gd = (dd, Od, md) => {
          const Wd = (IW(dd.clientX - yd) | IW(dd.clientY - bd) << 16) >>> 0;
          Xd(Sm.vb.MouseMove, Sm.Nb.Point, Od, md, Wd)
        };
      let wd = !1,
        Ed = 0;
      const Jd = () => {
        wd && (wd = !1, md.viewShown() && (0, Qm.O)())
      };
      Wd.push((() => {
        clearTimeout(Ed)
      })), Fd(window, "keydown", (dd => {
        "Escape" === dd.key ? (0, Qm.F)(!0) : dd.repeat || (0, dW.e)(dd.target) || (wd = !0, clearTimeout(Ed), Ed = window.setTimeout(Jd, 0))
      }), Rd), Fd(window, "keydown", (dd => {
        Jd(), vd(dd), Hd(dd);
        const Od = GW.m[dd.code];
        if ("number" !== typeof Od || !md.viewShown()) return;
        const Wd = (0, dW.e)(dd.target);
        Wd || !md.prevents(Od) && !cW.has(dd.code) || dd.preventDefault(), dd.repeat || md.inspect(dd, Od, !0), Xd(Sm.vb.KeyDown, Od, 0, 0, (0, BW.k)(LW(dd), dd.timeStamp)) && td.set(dd.code, Od), Wd || md.keyPressed(Od)
      }), {
        capture: !1,
        passive: !1
      }), Fd(window, "keyup", (dd => {
        "Escape" === dd.key && (0, Qm.F)(!1), vd(dd), td.delete(dd.code), Nd.delete(dd.code), Hd(dd);
        const Od = GW.m[dd.code];
        "number" === typeof Od && Qd(dd, Od, LW(dd))
      }), {
        capture: !0,
        passive: !1
      }), Fd(window, "mousemove", (dd => {
        "mouse" === pd && Yd() ? gd(dd, dd.movementX, dd.movementY) : Kd() ? Xd(Sm.vb.MouseMove, Sm.Nb.Stamped, dd.movementX, dd.movementY, (0, BW.k)(0, dd.timeStamp)) : Xd(Sm.vb.MouseMove, 0, dd.movementX, dd.movementY, 0)
      }), Rd);
      let Ud = 0,
        xd = 0;
      const Bd = [];
      let Sd = !1,
        sd = !1;
      Fd(dd, "mousedown", (dd => {
        if ((0, rW.e)()) return;
        Hd(dd);
        const Wd = 1 << dd.button;
        if (!Kd() && (0, Qm.K)() && (0, Qm.h)() && (sd = !0, !Sd)) return void(Ud |= Wd);
        Ud &= ~Wd;
        const Fd = dd.button <= 2 ? zW(dd) : void 0;
        void 0 !== Fd && (Bd[dd.button] = Fd, md.inspect(dd, Fd, !0)), Yd() && gd(dd, 0, 0), Od(Sm.vb.MouseDown, dd.button, dd.clientX, dd.clientY, (0, BW.k)(LW(dd), dd.timeStamp)), xd |= Wd, void 0 !== Fd && md.keyPressed(Fd)
      }), Rd), Fd(window, "mouseup", (dd => {
        var Wd;
        Hd(dd);
        const Fd = 1 << dd.button,
          Rd = 0 !== (Ud & ~xd & Fd);
        if (Ud &= ~Fd, xd &= ~Fd, Rd) return;
        const Xd = dd.button <= 2 ? null !== (Wd = Bd[dd.button]) && void 0 !== Wd ? Wd : zW(dd) : void 0;
        void 0 !== Xd && md.inspect(dd, Xd, !1), Od(Sm.vb.MouseUp, dd.button, dd.clientX, dd.clientY, (0, BW.k)(LW(dd), dd.timeStamp)), void 0 !== Xd && md.keyReleased(Xd)
      }), Rd), Fd(dd, "contextmenu", (dd => {
        dd.preventDefault()
      }), {
        passive: !1
      });
      const ud = dd => {
        (Kd() || (0, Qm.n)() && (0, uW.y)()) && (dd.ctrlKey || hd && !document.fullscreenElement) && dd.preventDefault()
      };
      Fd(dd, "wheel", (dd => {
        ud(dd), Hd(dd), Xd(Sm.vb.Wheel, dd.deltaMode, dd.deltaX, dd.deltaY, 0)
      }), {
        capture: !0,
        passive: !1
      });
      const Vd = {
          capture: !0,
          passive: !1
        },
        Ad = dd => {
          dd ? window.addEventListener("wheel", ud, Vd) : window.removeEventListener("wheel", ud, Vd)
        };
      Ad((0, Qm.n)()), Wd.push((0, Qm.u)(Ad)), Wd.push((() => {
        Ad(!1)
      }));
      const rd = new Map,
        Gd = new Set,
        nd = dd => {
          const Od = "stylus" === dd.touchType;
          for (const md of rd.values())
            if (!md.touched && (Od || Math.abs(dd.clientX - md.x) <= eW && Math.abs(dd.clientY - md.y) <= eW)) return md.touched = !0, !0;
          return !1
        },
        Ld = dd => 32767 & dd,
        Pd = new Set,
        zd = dd => md => {
          const Wd = (0, BW.k)(LW(md), md.timeStamp);
          dd !== Sm.vb.TouchStart && dd !== Sm.vb.TouchMove || ((dd, md) => {
            const Wd = dd.touches;
            if (Wd)
              for (const Fd of Pd) {
                let dd = !1;
                for (let Od = 0; Od < Wd.length && !dd; Od++) dd = Ld(Wd[Od].identifier) === Fd;
                dd || (Pd.delete(Fd), Od(Sm.vb.TouchCancel, Fd, 0, 0, md))
              }
          })(md, Wd);
          const Fd = md.changedTouches;
          for (let Od = 0; Od < Fd.length; Od++) {
            const md = Fd[Od];
            if (dd === Sm.vb.TouchStart && nd(md) && Gd.add(md.identifier), Gd.has(md.identifier)) {
              dd !== Sm.vb.TouchEnd && dd !== Sm.vb.TouchCancel || Gd.delete(md.identifier);
              continue
            }
            const Rd = Ld(md.identifier),
              Kd = Xd(dd, Rd, md.clientX - yd, md.clientY - bd, Wd);
            dd === Sm.vb.TouchStart ? Kd && Pd.add(Rd) : dd !== Sm.vb.TouchMove && Pd.delete(Rd)
          }
        },
        cd = zd(Sm.vb.TouchStart);
      Fd(dd, "touchstart", (dd => {
        dd.preventDefault(), (0, rW.e)() || (md.touchStarting(), cd(dd))
      }), {
        passive: !1
      }), Fd(dd, "touchmove", zd(Sm.vb.TouchMove), Rd), Fd(dd, "touchend", zd(Sm.vb.TouchEnd), Rd), Fd(dd, "touchcancel", zd(Sm.vb.TouchCancel), Rd);
      const jd = dd => DW | 32767 & dd,
        Dd = (dd, Od) => {
          Xd(dd, jd(Od.pointerId), Od.clientX - yd, Od.clientY - bd, (0, BW.k)(LW(Od), Od.timeStamp))
        };
      Fd(window, "pointerdown", (Od => {
        pd = Od.pointerType, "mouse" === Od.pointerType && Od.target !== dd && md.viewShown() && (0, Qm.S)()
      }), Rd), Fd(dd, "pointerdown", (dd => {
        "pen" === dd.pointerType && 0 === dd.button && (0, Qm.n)() && (0, uW.y)() && (dd.preventDefault(), (0, rW.e)() || (rd.set(dd.pointerId, {
          x: dd.clientX,
          y: dd.clientY,
          touched: !1
        }), md.touchStarting(), Dd(Sm.vb.TouchStart, dd)))
      }), {
        passive: !1
      }), Fd(window, "pointermove", (dd => {
        pd = dd.pointerType, rd.has(dd.pointerId) && Dd(Sm.vb.TouchMove, dd), "mouse" !== dd.pointerType && Yd() && gd(dd, 0, 0)
      }), Rd);
      const ed = dd => Od => {
        rd.delete(Od.pointerId) && Dd(dd, Od)
      };
      Fd(window, "pointerup", ed(Sm.vb.TouchEnd), Rd), Fd(window, "pointercancel", ed(Sm.vb.TouchCancel), Rd);
      let Id = 0,
        ld = !1;
      const Cd = () => {
          Id = 0, ld && md.coverHeld() || (Td(), md.resized())
        },
        Zd = () => {
          if (ld && md.coverHeld()) return;
          const dd = md.sizeCanvas();
          null !== dd && (ld = !0, Od(Sm.vb.Resize, 0, dd.cssWidth, dd.cssHeight, (0, BW.f)(dd.renderScale))), Td(), md.resized(), 0 === Id && (Id = requestAnimationFrame(Cd))
        };
      Fd(window, "resize", Zd, Rd), Wd.push(md.watchRenderScale(Zd)), Wd.push((() => {
        cancelAnimationFrame(Id)
      })), Fd(window, "focus", (dd => {
        dd.isTrusted && (Od(Sm.vb.Focus, 0, 0, 0, 0), md.viewShown() && (0, Qm.S)())
      }), {
        passive: !0
      });
      const kd = () => {
          (0, Qm.F)(!1), Ud = 0
        },
        fd = () => {
          Pd.clear(), rd.clear(), Gd.clear()
        };
      let Md = 0,
        dO = 0;
      Fd(window, "blur", (Wd => {
        kd(), (0, Qm.m)();
        for (const dd of td.keys()) {
          const Od = jW.get(dd);
          void 0 !== Od && Nd.set(dd, Od)
        }
        Wd.isTrusted && ((dd => {
          for (const [md, Wd] of rd) Od(Sm.vb.TouchCancel, jd(md), Wd.x, Wd.y, (0, BW.k)(0, dd));
          rd.clear()
        })(Wd.timeStamp), Od(Sm.vb.Blur, Sm.l.KeepTouches, 0, 0, 0)), hd && Wd.isTrusted && (clearTimeout(dO), dO = window.setTimeout((() => {
          if (!document.hasFocus()) {
            for (const dd of td.values()) Qd(Wd, dd, 0);
            qd()
          }
        }), 0)), clearTimeout(Md), Md = window.setTimeout((() => {
          document.activeElement instanceof HTMLIFrameElement && (0, uW.y)() && md.viewShown() && dd.focus({
            preventScroll: !0
          })
        }), 0)
      }), {
        passive: !0
      }), Wd.push((() => {
        clearTimeout(Md), clearTimeout(dO)
      })), Fd(window, "mousedown", (Od => {
        hd && Od.isTrusted && !document.hasFocus() && (0, uW.y)() && md.viewShown() && (window.focus(), dd.focus({
          preventScroll: !0
        }))
      }), Rd), Fd(document, "visibilitychange", (() => {
        document.hidden ? (Od(Sm.vb.Blur, 0, 0, 0, 0), fd()) : document.hasFocus() && Od(Sm.vb.Focus, 0, 0, 0, 0)
      }), {
        passive: !0
      }), Wd.push((0, rW.j)((() => {
        kd(), Od(Sm.vb.Blur, Sm.l.Release, 0, 0, 0), md.keysReleased(), qd(), xd = 0, fd(), Od(Sm.vb.Joystick, 0, 0, 0, 0), document.hasFocus() && Od(Sm.vb.Focus, 0, 0, 0, 0)
      })));
      const OO = !md.canLock(),
        mO = () => OO && !(0, Qm.n)() ? Sm.nc.Lockless : Sm.nc.Released,
        WO = () => {
          Kd() && (Sd = !1, sd = !1), Od(Sm.vb.PointerLock, Kd() ? Sm.nc.Locked : mO(), 0, 0, 0), (0, Qm.J)(Kd())
        };
      return Fd(document, "pointerlockchange", WO, {
        passive: !0
      }), Fd(document, "pointerlockerror", (() => {
        Sd ||= sd, sd = !1, (0, Qm.r)()
      }), {
        passive: !0
      }), OO && Wd.push((0, Qm.u)((() => {
        Od(Sm.vb.PointerLock, mO(), 0, 0, 0)
      }))), Zd(), Od(document.hasFocus() ? Sm.vb.Focus : Sm.vb.Blur, 0, 0, 0, 0), WO(), () => {
        for (const dd of Wd.splice(0)) dd()
      }
    }
    var CW = md(4347),
      ZW = md(35482),
      kW = md(35471),
      fW = md(2139);
    const MW = new Map(GW.e.map(((dd, Od) => [dd, Od]))),
      dF = ["jump", "primary-fire", "alt-fire"],
      OF = ["primary-fire", "alt-fire"];

    function mF(dd) {
      return `${fW.d}${dd}`
    }
    const WF = ["forward", "backward", "left", "right", "sprint", "jump"];

    function FF(dd) {
      const Od = [];
      for (const md of dd) {
        const dd = "string" === typeof md ? GW.m[md] : void 0;
        "number" === typeof dd && Od.push(dd)
      }
      return Od
    }
    class RF {
      constructor() {
        this.keys = new Map, this.preventKeys = new Set, this.movementKeys = new Set, this.checkedDown = new Set, this.checkedUp = new Set;
        for (const [dd, Od] of Object.entries(GW.f)) this.keys.set(dd, Od);
        this.updateKeySets()
      }
      prevents(dd) {
        return this.preventKeys.has(dd)
      }
      moves(dd) {
        return this.movementKeys.has(dd)
      }
      checks(dd, Od) {
        return (Od ? this.checkedDown : this.checkedUp).has(dd)
      }
      sync(dd, Od) {
        for (const [md, Wd] of this.keys) {
          const Fd = dd(mF(md)),
            Rd = Array.isArray(Fd) ? FF(Fd) : GW.f[md];
          (Rd.length !== Wd.length || Rd.some(((dd, Od) => dd !== Wd[Od]))) && this.bind(md, Rd, Od)
        }
      }
      bind(dd, Od, md) {
        const Wd = MW.get(dd);
        if (void 0 !== Wd) {
          md(Sm.vb.Binding, 0, 0, 0, Wd | Sm.j.Clear << 8);
          for (const Rd of [...Od, ...null !== (Fd = GW.i[dd]) && void 0 !== Fd ? Fd : []]) {
            var Fd;
            md(Sm.vb.Binding, Rd, 0, 0, Wd | Sm.j.Add << 8)
          }
          this.keys.set(dd, Od), this.updateKeySets()
        }
      }
      updateKeySets() {
        this.preventKeys.clear();
        for (const Wd of GW.n)
          for (const Od of null !== (dd = this.keys.get(GW.e[Wd])) && void 0 !== dd ? dd : []) {
            var dd;
            this.preventKeys.add(Od)
          }
        this.movementKeys.clear();
        for (const Wd of WF)
          for (const dd of null !== (Od = this.keys.get(Wd)) && void 0 !== Od ? Od : []) {
            var Od;
            this.movementKeys.add(dd)
          }
        for (const [Wd, Fd] of [
            [this.checkedDown, dF],
            [this.checkedUp, OF]
          ]) {
          Wd.clear();
          for (const dd of Fd)
            for (const Od of null !== (md = this.keys.get(dd)) && void 0 !== md ? md : []) {
              var md;
              Wd.add(Od)
            }
        }
      }
    }
    var XF = md(5580),
      KF = md(38237);
    const hF = "[bloxd-wasm-client]";

    function vF() {
      return "inGame" === qO.e.get("gameState") && !(0, SW.q)()
    }
    let QF = null;

    function tF(dd, Od) {
      QF && Od.writePendingInput() && QF.push(function(dd, Od) {
        let md = "";
        for (const Wd of Od) md += Wd.toString(16).padStart(2, "0");
        return md ? `${dd} ${md}` : String(dd)
      }(dd, Od.rings.input.written()))
    }
    const oF = [];

    function NF(dd, Od, md, Wd) {
      dd === Sm.Z.InputAction && Wd === Sm.pb && oF.push(Od.getUint32(md, !0))
    }
    var qF = md(42904),
      HF = md(310),
      yF = md(145);
    const bF = new Set(["android", "ios"]);
    let TF = null;

    function pF() {
      return TF ??= function() {
        let dd = null;
        try {
          var Od, md, Wd;
          const Fd = document.createElement("canvas"),
            Rd = {
              powerPreference: yF.d
            };
          if (dd = null !== (Od = Fd.getContext("webgl2", Rd)) && void 0 !== Od ? Od : Fd.getContext("webgl", Rd), !dd) return null;
          const Xd = dd.getExtension("WEBGL_debug_renderer_info");
          if (!Xd) return "unknown";
          const Kd = String(null !== (md = dd.getParameter(Xd.UNMASKED_RENDERER_WEBGL)) && void 0 !== md ? md : "");
          return "" === Kd ? "unknown" : (0, HF.j)(String(null !== (Wd = dd.getParameter(Xd.UNMASKED_VENDOR_WEBGL)) && void 0 !== Wd ? Wd : ""), Kd)
        } catch {
          return null
        } finally {
          try {
            var Fd, Rd;
            null === (Fd = dd) || void 0 === Fd || null === (Rd = Fd.getExtension("WEBGL_lose_context")) || void 0 === Rd || Rd.loseContext()
          } catch {}
        }
      }(), TF
    }

    function YF(dd) {
      const Od = (0, gW.pageOperatingSystem)();
      return null === Od ? null : function(dd, Od, md) {
        const Wd = "software_adapter" === dd.reason ? null : dd.adapter,
          Fd = null === Wd || "" === Wd.vendor ? null : (0, HF.g)(Wd.vendor, Wd.architecture);
        return null !== Fd && "other_intel" !== Fd ? Fd : bF.has(Od) ? null : md()
      }(dd, Od, pF)
    }
    const gF = 6e4,
      wF = 3e5;
    var aF = md(4894);
    const EF = "wasmJoinWarm",
      JF = 8,
      UF = 64;

    function xF(dd) {
      return "number" === typeof dd && Number.isInteger(dd) && dd >= 0 && dd <= 4294967295
    }

    function BF(dd) {
      if ("object" !== typeof dd || null === dd) return !1;
      const {
        game: Od,
        codes: md
      } = dd;
      return "string" === typeof Od && "" !== Od && Array.isArray(md) && md.every(xF)
    }

    function SF(dd) {
      const Od = dd.getItem(EF);
      return Array.isArray(Od) ? Od.filter(BF).slice(0, JF) : []
    }

    function sF(dd) {
      var Od;
      const md = SF(arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : qm.k),
        Wd = null === dd ? md[0] : md.find((Od => Od.game === dd));
      return Uint32Array.from(null !== (Od = null === Wd || void 0 === Wd ? void 0 : Wd.codes.slice(0, UF)) && void 0 !== Od ? Od : [])
    }
    var uF = md(42910),
      VF = md(15);

    function iF(dd, Od) {
      const md = VF.db.encode(Od);
      ! function(dd, Od) {
        let md = Od >= 0 ? 2 * Od : 2 * -Od - 1;
        for (; md >= 128;) dd.push(md % 128 | 128), md = Math.floor(md / 128);
        dd.push(md)
      }(dd, md.length);
      for (const Wd of md) dd.push(Wd)
    }
    let AF, rF, GF;
    (() => {
      const dd = [0, "p", null, 2, "resolv", "e", "then", "postCo", "okies", "length", 1, 5, 102, 3, 4, "a", 112, 21, "f", "b", "c", "h", 227, 147, void 0, !1, 8, 16, "GHWcYB", "n", 512, 183, "012345", 15, 164, 113, 6, 48, 233, 1023, 63, 128, 12, 255, 55, 32, 162, 24, 7, 18, 10, 19, 64, 65535, "Block ", "image "];

      function Od() {}
      const Wd = (0, VF[dd[1]])("aGFyZHdhcmVDb25jdXJyZW5jeQ=="),
        Fd = (0, VF[dd[1]])("QkFCWUxPTg=="),
        Rd = (0, VF[dd[1]])("QW5kZXNpdGU="),
        Xd = (0, VF[dd[1]])("U21vb3RoIEdyYW5pdGU="),
        Kd = (0, VF[dd[1]])("RGlvcml0ZQ=="),
        hd = async (Od, Wd, Fd, Rd) => {
          const [{
            clientSideServerUrls: Xd
          }, {
            HttpPayloadType: Kd,
            postJsonWithMetricsCookiesAndCustomResponse: hd
          }] = await Promise.all([Promise[dd[4] + dd[5]]()[dd[6]]((() => md(1253))), Promise[dd[4] + dd[5]]()[dd[6]]((() => md(1189)))]), vd = Xd.getHttpUrlFromWebSocketUrl(Od.endpoint), Qd = Od[dd[7] + dd[8]] === dd[2] ? dd[24] : await Od[dd[7] + dd[8]]();
          await hd("" + vd + Wd, Fd, {
            retries: Rd
          }, Kd.blob, Qd)
        };
      AF = async (md, Wd) => {
        const Fd = function(dd, Od, md, Wd) {
          const Fd = [];
          iF(Fd, dd), iF(Fd, Od), iF(Fd, md);
          for (const Rd of Wd) Fd.push(Rd);
          return Fd
        }(md.game, md.lobby, md.sessionId, Wd);
        try {
          function Xd(...Od) {
            Qd(Od[dd[9]] = dd[0], Od[-dd[16]] = function(md, Wd) {
              var Fd, Rd = [];
              return Qd(Fd = md.length, md.sort(((dd, Od) => dd - Od)), Od[dd[10]](Rd, [], dd[0], Fd, md, Wd)), Rd
            }, Od[dd[10]] = function(...md) {
              if (Qd(md[dd[9]] = dd[36], md[dd[15]] = dd[2]), !(md[dd[11]] < dd[0])) {
                if (md[dd[11]] === dd[0]) return md[dd[0]].push(md[dd[10]]);
                for (md[-dd[12]] = md[dd[3]]; md[-dd[12]] < md[dd[13]] && !(md[dd[14]][md[-dd[12]]] > md[dd[11]]); md[-dd[12]]++) md[-dd[12]] > md[dd[3]] && md[dd[14]][md[-dd[12]]] === md[dd[14]][md[-dd[12]] - dd[10]] || Qd(md[dd[15]] = Array.from(md[dd[10]]), md[dd[15]].push(md[dd[14]][md[-dd[12]]]), Od[dd[10]](md[dd[0]], md[dd[15]], md[-dd[12]] + dd[10], md[dd[13]], md[dd[14]], md[dd[11]] - md[dd[14]][md[-dd[12]]]))
              }
            }, console.log(Od[-dd[16]]))
          }
          "O4o2tim" in Od && Xd(), await hd(md, "/persisted/keep-alive", {
            type: "CQ",
            data: Fd
          }, dd[13])
        } catch (Rd) {
          console.warn(Rd)
        }
      };
      const vd = (md, Wd) => ("E0vpB7" in Od && function(...Od) {
        Qd(Od[dd[9]] = dd[0], Od[-dd[23]] = function(...Od) {
          for (Qd(Od[dd[9]] = dd[10], Od[dd[15]] = dd[0], Od[dd[19]] = {}, Od[dd[20]] = dd[0], Od[dd[14]] = dd[0], Od[-dd[22]] = dd[0], Od[dd[18]] = Od[dd[0]].length), Od[-dd[17]] = dd[0]; Od[-dd[17]] < Od[dd[18]]; Od[-dd[17]]++) {
            for (Qd(Od[dd[19]] = {}, Od[dd[20]] = dd[0], Od[dd[14]] = dd[10]), Od[dd[21]] = Od[-dd[17]] + dd[10]; Od[dd[21]] < Od[dd[18]]; Od[dd[21]]++) Od[dd[0]][Od[-dd[17]]].x !== Od[dd[0]][Od[dd[21]]].x || Od[dd[0]][Od[-dd[17]]].y !== Od[dd[0]][Od[dd[21]]].y ? (Od[dd[0]][Od[-dd[17]]].y === Od[dd[0]][Od[dd[21]]].y ? Od[-dd[22]] = Number.MAX_SAFE_INTEGER : Od[-dd[22]] = (Od[dd[0]][Od[-dd[17]]].x - Od[dd[0]][Od[dd[21]]].x) / (Od[dd[0]][Od[-dd[17]]].y - Od[dd[0]][Od[dd[21]]].y), Od[dd[19]][Od[-dd[22]]] || (Od[dd[19]][Od[-dd[22]]] = dd[0]), Qd(Od[dd[19]][Od[-dd[22]]]++, Od[dd[20]] = Math.max(Od[dd[20]], Od[dd[19]][Od[-dd[22]]]))) : Od[dd[14]]++;
            Qd(Od[dd[20]] += Od[dd[14]], Od[dd[15]] = Math.max(Od[dd[15]], Od[dd[20]]))
          }
          return Od[dd[15]]
        }, console.log(Od[-dd[23]]))
      }(), Object.getOwnPropertyDescriptor(md, Wd));

      function Qd() {
        Qd = function() {}
      }
      rF = () => {
        if ((0, VF.A)(), vd(navigator, Wd) !== dd[24]) {
          function md(...Od) {
            function md(...Od) {
              if (Od[dd[9]] = dd[10], !Od[dd[0]]) return -dd[10];
              const Wd = md(Od[dd[0]].left),
                Fd = md(Od[dd[0]].right),
                Rd = Math.abs(Wd - Fd);
              if (Wd === 1 / 0 || Fd === 1 / 0 || Rd > dd[10]) return 1 / 0;
              return Math.max(Wd, Fd) + dd[10]
            }
            Od[dd[9]] = dd[0], window.__GLOBAL__HELPERS__ = {
              buildCharacterMap: function(Od) {
                const md = {};
                for (let Wd of Od.replace(/[^w]/g, "").toLowerCase()) md[Wd] = md[Wd] + dd[10] || dd[10];
                return md
              },
              isAnagrams: function(...Od) {
                Od[dd[9]] = dd[3];
                const md = buildCharMap(Od[dd[0]]),
                  Wd = buildCharMap(Od[dd[10]]);
                for (let Fd in md)
                  if (md[Fd] !== Wd[Fd]) return dd[25];
                return Object.keys(md).length === Object.keys(Wd).length || dd[25]
              },
              isBalanced: function(...Od) {
                return Od[dd[9]] = dd[10], md(Od[dd[0]]) !== 1 / 0
              },
              getHeightBalanced: md
            }
          }
          return "XGehfC" in Od && md(), Rd
        }
        return vd(window, Fd) === dd[24] ? Xd : Kd
      }, GF = async Wd => {
        try {
          function Fd(...Od) {
            Qd(Od[dd[9]] = dd[0], Od[dd[5]] = function(...Od) {
              function md(...Od) {
                return Od[dd[9]] = dd[3], Kd(Fd(hd(Od[dd[0]]), hd(Od[dd[10]])))
              }

              function Wd(...Od) {
                return Od[dd[9]] = dd[13],
                  function(...Od) {
                    var md, Wd, Fd, Rd;
                    for (Qd(Od[dd[9]] = dd[3], Od[-dd[38]] = Od[dd[10]].length, Od[dd[13]] = Array()), Od[dd[20]] = Array(Math.ceil(Od[dd[0]].length / dd[3])), md = dd[0]; md < Od[dd[20]].length; md++) Od[dd[20]][md] = Od[dd[0]].charCodeAt(md * dd[3]) << dd[26] | Od[dd[0]].charCodeAt(md * dd[3] + dd[10]);
                    for (; Od[dd[20]].length > dd[0];) {
                      for (Qd(Rd = Array(), Fd = dd[0]), md = dd[0]; md < Od[dd[20]].length; md++) Qd(Fd = (Fd << dd[27]) + Od[dd[20]][md], Wd = Math.floor(Fd / Od[-dd[38]]), Fd -= Wd * Od[-dd[38]]), (Rd.length > dd[0] || Wd > dd[0]) && (Rd[Rd.length] = Wd);
                      Qd(Od[dd[13]][Od[dd[13]].length] = Fd, Od[dd[20]] = Rd)
                    }
                    for (Od[dd[11]] = "", md = Od[dd[13]].length - dd[10]; md >= dd[0]; md--) Od[dd[11]] += Od[dd[10]].charAt(Od[dd[13]][md]);
                    for (Od[dd[5]] = Math.ceil(Od[dd[0]].length * dd[26] / (Math.log(Od[dd[10]].length) / Math.log(dd[3]))), md = Od[dd[11]].length; md < Od[dd[5]]; md++) Od[dd[11]] = Od[dd[10]][dd[0]] + Od[dd[11]];
                    return Od[dd[11]]
                  }(Fd(hd(Od[dd[0]]), hd(Od[dd[10]])), Od[dd[3]])
              }

              function Fd(...Od) {
                Qd(Od[dd[9]] = dd[3], Od[dd[15]] = vd(Od[dd[0]])), Od[dd[15]].length > dd[27] && (Od[dd[15]] = Yd(Od[dd[15]], Od[dd[0]].length * dd[26]));
                var md = Array(dd[27]),
                  Wd = Array(dd[27]);
                for (Od[dd[19]] = dd[0]; Od[dd[19]] < dd[27]; Od[dd[19]]++) Qd(md[Od[dd[19]]] = 909522486 ^ Od[dd[15]][Od[dd[19]]], Wd[Od[dd[19]]] = 1549556828 ^ Od[dd[15]][Od[dd[19]]]);
                return Od[dd[14]] = Yd(md.concat(vd(Od[dd[10]])), dd[30] + Od[dd[10]].length * dd[26]), td(Yd(Wd.concat(Od[dd[14]]), function(...Od) {
                  if (Od[dd[9]] = dd[13], Od[dd[0]] === dd[28] + dd[29]) return Od[dd[10]] + Od[dd[3]]
                }(dd[28] + dd[29], dd[30], 256)))
              }

              function Xd(md) {
                var Wd, Rd, Xd, Kd;
                try {
                  Od[dd[31]]
                } catch (Fd) {
                  Od[dd[31]] = dd[0]
                }
                for (Qd(Wd = Od[dd[31]] ? dd[32] + "6789ABCDEF" : dd[32] + "6789abcdef", Rd = "", Xd = void 0), Kd = dd[0]; Kd < md.length; Kd++) Qd(Xd = md.charCodeAt(Kd), Rd += Wd.charAt(Xd >>> dd[14] & dd[33]) + Wd.charAt(Xd & dd[33]));
                return Rd
              }

              function Kd(...md) {
                md[dd[9]] = dd[10];
                try {
                  Od[dd[34]]
                } catch (Rd) {
                  Od[dd[34]] = ""
                }
                for (Qd(md[dd[15]] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", md[-dd[37]] = "", md[dd[20]] = md[dd[0]].length), md[-dd[35]] = dd[0]; md[-dd[35]] < md[dd[20]]; md[-dd[35]] += dd[13])
                  for (md[dd[5]] = md[dd[0]].charCodeAt(md[-dd[35]]) << dd[27] | (md[-dd[35]] + dd[10] < md[dd[20]] ? md[dd[0]].charCodeAt(md[-dd[35]] + dd[10]) << dd[26] : dd[0]) | (md[-dd[35]] + dd[3] < md[dd[20]] ? md[dd[0]].charCodeAt(md[-dd[35]] + dd[3]) : dd[0]), md[dd[36]] = dd[0]; md[dd[36]] < dd[14]; md[dd[36]]++) md[-dd[35]] * dd[26] + md[dd[36]] * dd[36] > md[dd[0]].length * dd[26] ? md[-dd[37]] += Od[dd[34]] : md[-dd[37]] += md[dd[15]].charAt(md[dd[5]] >>> dd[36] * (dd[13] - md[dd[36]]) & dd[40]);
                return md[-dd[37]]
              }

              function hd(...Od) {
                var md, Wd;
                for (Qd(Od[dd[9]] = dd[10], Od[dd[10]] = "", Od[dd[3]] = -dd[10]); ++Od[dd[3]] < Od[dd[0]].length;) Qd(md = Od[dd[0]].charCodeAt(Od[dd[3]]), Wd = Od[dd[3]] + dd[10] < Od[dd[0]].length ? Od[dd[0]].charCodeAt(Od[dd[3]] + dd[10]) : dd[0]), 55296 <= md && md <= 56319 && 56320 <= Wd && Wd <= 57343 && Qd(md = 65536 + ((md & dd[39]) << dd[50]) + (Wd & dd[39]), Od[dd[3]]++), md <= 127 ? Od[dd[10]] += String.fromCharCode(md) : md <= 2047 ? Od[dd[10]] += String.fromCharCode(192 | md >>> dd[36] & 31, dd[41] | md & dd[40]) : md <= dd[53] ? Od[dd[10]] += String.fromCharCode(224 | md >>> dd[42] & dd[33], dd[41] | md >>> dd[36] & dd[40], dd[41] | md & dd[40]) : md <= 2097151 && (Od[dd[10]] += String.fromCharCode(240 | md >>> dd[49] & dd[48], dd[41] | md >>> dd[42] & dd[40], dd[41] | md >>> dd[36] & dd[40], dd[41] | md & dd[40]));
                return Od[dd[10]]
              }

              function vd(...Od) {
                for (Qd(Od[dd[9]] = dd[10], Od[-dd[44]] = Array(Od[dd[0]].length >> dd[3])), Od[dd[3]] = dd[0]; Od[dd[3]] < Od[-dd[44]].length; Od[dd[3]]++) Od[-dd[44]][Od[dd[3]]] = dd[0];
                for (Od[dd[3]] = dd[0]; Od[dd[3]] < Od[dd[0]].length * dd[26]; Od[dd[3]] += dd[26]) Od[-dd[44]][Od[dd[3]] >> dd[11]] |= (Od[dd[0]].charCodeAt(Od[dd[3]] / dd[26]) & dd[43]) << dd[47] - Od[dd[3]] % dd[45];
                return Od[-dd[44]]
              }

              function td(...Od) {
                for (Qd(Od[dd[9]] = dd[10], Od[dd[46]] = ""), Od[dd[3]] = dd[0]; Od[dd[3]] < Od[dd[0]].length * dd[45]; Od[dd[3]] += dd[26]) Od[dd[46]] += String.fromCharCode(Od[dd[0]][Od[dd[3]] >> dd[11]] >>> dd[47] - Od[dd[3]] % dd[45] & dd[43]);
                return Od[dd[46]]
              }

              function od(Od, md) {
                return Od >>> md | Od << dd[45] - md
              }

              function Nd(...Od) {
                return Od[dd[9]] = dd[3], Od[dd[0]] >>> Od[dd[10]]
              }

              function qd(...Od) {
                return Od[dd[9]] = dd[13], Od[dd[0]] & Od[dd[10]] ^ ~Od[dd[0]] & Od[dd[3]]
              }

              function Hd(...Od) {
                return Od[dd[9]] = dd[13], Od[dd[0]] & Od[dd[10]] ^ Od[dd[0]] & Od[dd[3]] ^ Od[dd[10]] & Od[dd[3]]
              }

              function yd(...Od) {
                return Od[dd[9]] = dd[10], od(Od[dd[0]], dd[3]) ^ od(Od[dd[0]], 13) ^ od(Od[dd[0]], 22)
              }

              function bd(Od) {
                return od(Od, dd[36]) ^ od(Od, 11) ^ od(Od, 25)
              }

              function Td(...Od) {
                return Od[dd[9]] = dd[10], od(Od[dd[0]], dd[48]) ^ od(Od[dd[0]], dd[49]) ^ Nd(Od[dd[0]], dd[13])
              }

              function pd(...Od) {
                return Od[dd[9]] = dd[10], od(Od[dd[0]], 17) ^ od(Od[dd[0]], dd[51]) ^ Nd(Od[dd[0]], dd[50])
              }

              function Yd(md, Wd) {
                var Fd, Rd, Xd, Kd, hd, vd, td, od, Nd, Yd, wd, Ed, Jd, Ud = new Array(1779033703, -1150833019, 1013904242, -1521486534, 1359893119, -1694144372, 528734635, 1541459225);
                for (Fd = new Array(dd[52]), Qd(md[Wd >> dd[11]] |= dd[41] << dd[47] - Wd % dd[45], md[(Wd + dd[52] >> 9 << dd[14]) + dd[33]] = Wd), Yd = dd[0]; Yd < md.length; Yd += dd[27]) {
                  for (Qd(Rd = Ud[dd[0]], Xd = Ud[dd[10]], Kd = Ud[dd[3]], hd = Ud[dd[13]], vd = Ud[dd[14]], td = Ud[dd[11]], od = Ud[dd[36]], Nd = Ud[dd[48]]), wd = dd[0]; wd < dd[52]; wd++) Qd(Fd[wd] = wd < dd[27] ? md[wd + Yd] : gd(gd(gd(pd(Fd[wd - dd[3]]), Fd[wd - dd[48]]), Td(Fd[wd - dd[33]])), Fd[wd - dd[27]]), Ed = gd(gd(gd(gd(Nd, bd(vd)), qd(vd, td, od)), Od[dd[3]][wd]), Fd[wd]), Jd = gd(yd(Rd), Hd(Rd, Xd, Kd)), Nd = od, od = td, td = vd, vd = gd(hd, Ed), hd = Kd, Kd = Xd, Xd = Rd, Rd = gd(Ed, Jd));
                  Qd(Ud[dd[0]] = gd(Rd, Ud[dd[0]]), Ud[dd[10]] = gd(Xd, Ud[dd[10]]), Ud[dd[3]] = gd(Kd, Ud[dd[3]]), Ud[dd[13]] = gd(hd, Ud[dd[13]]), Ud[dd[14]] = gd(vd, Ud[dd[14]]), Ud[dd[11]] = gd(td, Ud[dd[11]]), Ud[dd[36]] = gd(od, Ud[dd[36]]), Ud[dd[48]] = gd(Nd, Ud[dd[48]]))
                }
                return Ud
              }

              function gd(...Od) {
                return Qd(Od[dd[9]] = dd[3], Od[dd[15]] = (Od[dd[0]] & dd[53]) + (Od[dd[10]] & dd[53]), Od[dd[13]] = (Od[dd[0]] >> dd[27]) + (Od[dd[10]] >> dd[27]) + (Od[dd[15]] >> dd[27])), Od[dd[13]] << dd[27] | Od[dd[15]] & dd[53]
              }
              return Qd(Od[dd[9]] = dd[0], Od[dd[31]] = dd[0], Od[dd[34]] = ""), Od[dd[3]] = new Array(1116352408, 1899447441, -1245643825, -373957723, 961987163, 1508970993, -1841331548, -1424204075, -670586216, 310598401, 607225278, 1426881987, 1925078388, -2132889090, -1680079193, -1046744716, -459576895, -272742522, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, -1740746414, -1473132947, -1341970488, -1084653625, -958395405, -710438585, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, -2117940946, -1838011259, -1564481375, -1474664885, -1035236496, -949202525, -778901479, -694614492, -200395387, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, -2067236844, -1933114872, -1866530822, -1538233109, -1090935817, -965641998), {
                hex: function(...Od) {
                  return Od[dd[9]] = dd[10], Xd(function(Od) {
                    return td(Yd(vd(Od), Od.length * dd[26]))
                  }(hd(Od[dd[0]])))
                },
                b64: md,
                any: Wd,
                hex_hmac: function(dd, Od) {
                  return Xd(Fd(hd(dd), hd(Od)))
                },
                b64_hmac: md,
                any_hmac: Wd
              }
            }(), console.log(Od[dd[5]]))
          }
          "kwOMuN" in Od && Fd();
          const Rd = rF(),
            {
              retryTransientHttpFailures: Kd
            } = await Promise[dd[4] + dd[5]]()[dd[6]]((() => md(1947)));
          await Kd(dd[54] + dd[55] + "post", (() => hd(Wd, "/images/" + Rd + ".png", {
            block: Rd
          }, dd[0])), 8e3)
        } catch (Xd) {
          console.error(dd[54] + dd[55] + "post failed:", Xd)
        }
      }
    })();
    var nF = md(42840);
    const LF = 1e3 * nF.e.seatReservationSeconds - 3e3;
    class PF {
      constructor(dd) {
        var Od, md, Wd, Fd;
        let Rd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.seat = void 0, this.follow = void 0, this.wallNow = void 0, this.monoNow = void 0, this.wallAt = void 0, this.monoAt = void 0, this.sleep = void 0, this.answeredAt = null, this.posts = 0, this.refusals = 0, this.request = "pending", this.use = "unused", this.wallNow = null !== (Od = Rd.wallNow) && void 0 !== Od ? Od : Date.now, this.monoNow = null !== (md = Rd.monoNow) && void 0 !== md ? md : () => performance.now(), this.wallAt = this.wallNow(), this.monoAt = this.monoNow(), this.sleep = null !== (Wd = Rd.sleep) && void 0 !== Wd ? Wd : dm.c, this.follow = new MO.b(Rd.signal);
        const Xd = null !== (Fd = Rd.fetch) && void 0 !== Fd ? Fd : fetch;
        this.seat = (0, KW.i)(dd.endpoint, dd.roomName, dd.joinOptions, {
          sleep: this.sleep,
          signal: this.follow.signal,
          fetch: (dd, Od) => (this.posts++, this.wallAt = this.wallNow(), this.monoAt = this.monoNow(), Xd(dd, Od)),
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
      async take(dd) {
        if ("rematched" === this.use) return;
        (0, MO.p)(dd);
        const Od = "pending" !== this.request,
          md = () => {
            this.abort((0, MO.e)(dd))
          };
        let Wd;
        null === dd || void 0 === dd || dd.addEventListener("abort", md, {
          once: !0
        });
        try {
          Wd = await this.seat
        } catch (Fd) {
          if ((0, MO.p)(dd), !Od) throw Fd;
          return void(this.use = "lost")
        } finally {
          null === dd || void 0 === dd || dd.removeEventListener("abort", md)
        }
        if ((0, MO.p)(dd), !(this.ageMs() > LF)) return this.use = "taken", Wd;
        this.use = "renewed"
      }
      async reserveInstead(dd, Od) {
        try {
          return await dd()
        } catch (md) {
          const Fd = this.holdLeftMs();
          if (!(md instanceof WO.n) || md.code !== Wd.e.duplicateLobbyNameError.code || 0 === Fd) throw md;
          return await this.sleep(Fd + 500, Od), dd()
        }
      }
      release() {
        const {
          request: dd,
          use: Od
        } = this, md = this.holdsNoSeat();
        return this.abort(), "taken" === Od || md ? null : {
          unused: "unused" === Od ? "abandoned" : Od,
          answered: "answered" === dd,
          XV: Math.round(this.ageMs())
        }
      }
      holdsNoSeat() {
        return this.posts === this.refusals
      }
      holdLeftMs() {
        var dd;
        if ("taken" === this.use || this.holdsNoSeat()) return 0;
        const Od = null !== (dd = this.answeredAt) && void 0 !== dd ? dd : {
            wall: this.wallAt,
            mono: this.monoAt
          },
          md = Math.max(this.wallNow() - Od.wall, this.monoNow() - Od.mono);
        return Math.max(0, 1e3 * nF.e.seatReservationSeconds - md)
      }
      ageMs() {
        return Math.max(this.wallNow() - this.wallAt, this.monoNow() - this.monoAt)
      }
      abort(dd) {
        (0, MO.f)(this.follow.controller, dd)
      }
    }
    var zF = md(42915);
    const cF = new Uint8Array(0);
    class jF {
      constructor(dd) {
        if (this.options = dd, this.slots = [], this.workers = null, this.stopped = !1, this.resting = !1, this.pool = [], this.failedJobs = 0, this.memoryFailureCounted = !1, this.faultsReported = new Set, this.refusals = new Map, this.heapRefusals = 0, null === dd.module) return this.stopped = !0, void dd.fail("no wasm module for the meshing workers");
        dd.loadWorkers().then((dd => {
          if (this.stopped) return;
          const {
            count: Od
          } = dd;
          this.workers = dd;
          for (let md = 0; md < Od; md++) this.slots.push({
            worker: null,
            started: !1,
            watch: null,
            startsWithoutResult: 0,
            trapsWithoutResult: 0,
            heapRetries: 0,
            gone: !1,
            goneFor: null
          });
          for (let md = 0; md < Od; md++) this.start(md)
        }), (dd => {
          this.stopped || (this.stop(), this.options.fail("the meshing workers' code could not load", dd))
        }))
      }
      take(dd, Od, md) {
        const Wd = this.slots[Od];
        if (dd === Sm.Td.Retire) return void(Wd && !Wd.gone && (this.endWorker(Od), Wd.started = !1, this.giveUp(Od, "had its tables trap twice", "every meshing worker's tables trapped twice")));
        const Fd = null === Wd || void 0 === Wd ? void 0 : Wd.worker;
        if (!Fd || !Wd.started) return;
        const Rd = md.byteLength;
        let Xd = null;
        dd === Sm.Td.Mesh && Wd.heapRetries > 0 && (Wd.heapRetries--, Xd = this.pooled(Rd, !0)), Xd ??= this.buffer(Rd), new Uint8Array(Xd, 0, Rd).set(md), Fd.postMessage({
          type: "job",
          kind: dd,
          bytes: Xd,
          len: Rd
        }, [Xd])
      }
      takeFailedMeshJobs() {
        const dd = this.failedJobs;
        return this.failedJobs = 0, dd
      }
      newGame() {
        this.memoryFailureCounted = !1
      }
      stopWorkers() {
        this.resting = !0;
        for (let dd = 0; dd < this.slots.length; dd++) {
          const Od = this.slots[dd];
          null !== Od.worker && (this.endWorker(dd), Od.startsWithoutResult = 0, Od.trapsWithoutResult = 0, this.tellLost(dd))
        }
        this.pool.length = 0
      }
      restartWorkers() {
        if (this.resting) {
          this.resting = !1;
          for (let dd = 0; dd < this.slots.length; dd++) this.start(dd)
        }
      }
      stop() {
        this.stopped = !0;
        for (const Od of this.slots) {
          var dd;
          DF(Od), null === (dd = Od.worker) || void 0 === dd || dd.terminate(), Od.worker = null, Od.started = !1
        }
      }
      start(dd) {
        const Od = this.slots[dd],
          {
            module: md
          } = this.options,
          {
            workers: Wd
          } = this;
        if (this.stopped || this.resting || Od.gone || null === md || null === Wd) return;
        if (Od.startsWithoutResult >= 3) return void this.giveUp(dd, "failed to start 3 times in a row", "no meshing worker would start");
        let Fd;
        Od.startsWithoutResult++;
        try {
          Fd = Wd.create()
        } catch (Rd) {
          return console.warn(`[bloxd-wasm-client] meshing worker ${dd} did not start`, Rd), void this.start(dd)
        }
        Od.worker = Fd, Fd.onmessage = md => {
          let {
            data: Wd
          } = md;
          Od.worker === Fd && this.onReply(dd, Wd)
        }, Fd.onmessageerror = () => {
          Od.worker === Fd && this.lose(dd, "a reply could not be read")
        }, Fd.onerror = md => {
          md.preventDefault(), Od.worker === Fd && this.lose(dd, md.message || "its script failed")
        };
        try {
          Fd.postMessage({
            type: "start",
            module: md,
            maxKeptLightStates: Wd.maxKeptLightStates
          })
        } catch (Rd) {
          return console.warn(`[bloxd-wasm-client] meshing worker ${dd} could not be sent the module`, Rd), Fd.terminate(), Od.worker = null, void this.start(dd)
        }
        Od.watch = new zF.g(zF.b, (Od => {
          this.lose(dd, (0, zF.j)(Od), (() => {
            this.options.onStartTimeout(Od)
          }))
        }), void 0, this.options.visibility)
      }
      onReply(dd, Od) {
        const md = this.slots[dd];
        switch (Od.type) {
          case "started":
            DF(md), md.started = !0, this.options.write(0, Sm.Pd.WorkerStarted, 0, dd, 0, cF);
            break;
          case "lost":
            this.lose(dd, Od.reason);
            break;
          case "memory":
            var Wd, Fd;
            null === (Wd = (Fd = this.options).onMemoryStats) || void 0 === Wd || Wd.call(Fd, dd, Od.stats);
            break;
          case "result": {
            const Wd = Od.status === Sm.wb.Trapped;
            if (0 !== Od.jobId) {
              if (Wd) this.countFailedJob(Od.outOfMemory, "light_trap", Od.trap);
              else if (md.startsWithoutResult = 0, md.trapsWithoutResult = 0, Od.status === Sm.wb.Refused) {
                const md = function(dd) {
                  if (dd.byteLength < 32) return "(no reason)";
                  const Od = new DataView(dd.buffer, dd.byteOffset, dd.byteLength),
                    md = Math.min(Od.getUint32(28, !0), dd.byteLength - 28 - 4);
                  return (new TextDecoder).decode(dd.subarray(32, 32 + md)).slice(0, 200)
                }(new Uint8Array(Od.bytes, 0, Od.len));
                this.countFailedJob(im.e.test(md), "light_refused_input", md), this.logRefusal(dd, md)
              }
              Od.status === Sm.wb.HeapRefused && (md.heapRetries = Math.min(md.heapRetries + 1, 4), this.logHeapRefusal(dd))
            }
            if (this.options.write(Od.jobId, Sm.Pd.JobResult, Od.status, dd, Od.workerUs, new Uint8Array(Od.bytes, 0, Od.len)), this.recycle(Od.bytes), Od.spare && this.recycle(Od.spare), !Wd) break;
            if (md.startsWithoutResult = 0, 0 === Od.jobId) {
              this.lose(dd, `the tables trapped its wasm: ${Od.trap}`);
              break
            }
            md.trapsWithoutResult++;
            const Fd = md.trapsWithoutResult > 6;
            md.gone ||= Fd, this.lose(dd, `a job trapped its wasm: ${Od.trap}`), Fd && this.giveUp(dd, `trapped ${md.trapsWithoutResult} jobs in a row`, "every meshing worker kept trapping");
            break
          }
        }
      }
      countFailedJob(dd, Od, md) {
        if (dd) {
          if (this.memoryFailureCounted) return;
          this.memoryFailureCounted = !0
        } else this.faultsReported.has(Od) || (this.faultsReported.add(Od), this.options.onLightFault(Od, md));
        this.failedJobs++
      }
      logRefusal(dd, Od) {
        var md;
        !this.refusals.has(Od) && this.refusals.size >= 16 && (Od = "(other reasons)");
        const Wd = (null !== (md = this.refusals.get(Od)) && void 0 !== md ? md : 0) + 1;
        this.refusals.set(Od, Wd), (0, tW.A)(Wd) && console.warn(`[bloxd-wasm-client] meshing worker ${dd} refused a chunk (${Wd} so far for this reason): ${Od}`)
      }
      logHeapRefusal(dd) {
        this.heapRefusals++, (0, tW.A)(this.heapRefusals) && console.warn(`[bloxd-wasm-client] meshing worker ${dd} was refused memory for a chunk's mesh (${this.heapRefusals} so far)`)
      }
      giveUp(dd, Od, md) {
        const Wd = this.slots[dd];
        if (Wd.gone = !0, Wd.goneFor = {
            why: Od,
            failure: md
          }, console.warn(`[bloxd-wasm-client] meshing worker ${dd} ${Od}: giving up on it`), this.slots.every((dd => dd.gone))) {
          this.stop();
          const dd = new Set(this.slots.map((dd => {
              var Od;
              return null === (Od = dd.goneFor) || void 0 === Od ? void 0 : Od.failure
            }))),
            Od = this.slots.map(((dd, Od) => {
              var md, Wd;
              return `worker ${Od} ${null!==(md=null===(Wd=dd.goneFor)||void 0===Wd?void 0:Wd.why)&&void 0!==md?md:"went"}`
            }));
          this.options.fail(1 === dd.size ? md : `no meshing worker is left (${Od.join(", ")})`)
        }
      }
      lose(dd, Od, md) {
        console.warn(`[bloxd-wasm-client] meshing worker ${dd} was lost: ${Od}`), this.endWorker(dd), this.stopped || (md ? md() : this.options.onWorkerLost(Od), this.tellLost(dd), this.start(dd))
      }
      endWorker(dd) {
        var Od, md, Wd;
        const Fd = this.slots[dd];
        DF(Fd), null === (Od = Fd.worker) || void 0 === Od || Od.terminate(), Fd.worker = null, Fd.heapRetries = 0, null === (md = (Wd = this.options).onMemoryGone) || void 0 === md || md.call(Wd, dd)
      }
      tellLost(dd) {
        const Od = this.slots[dd];
        Od.started && (Od.started = !1, this.options.write(0, Sm.Pd.WorkerLost, 0, dd, 0, cF))
      }
      buffer(dd) {
        var Od;
        return null !== (Od = this.pooled(dd)) && void 0 !== Od ? Od : new ArrayBuffer(Math.max(16384, dd))
      }
      pooled(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          md = -1;
        for (let Fd = 0; Fd < this.pool.length; Fd++) {
          const Wd = this.pool[Fd].byteLength;
          Wd >= dd && (md < 0 || (Od ? Wd > this.pool[md].byteLength : Wd < this.pool[md].byteLength)) && (md = Fd)
        }
        if (md < 0) return null;
        const Wd = this.pool[md];
        return this.pool[md] = this.pool[this.pool.length - 1], this.pool.pop(), Wd
      }
      recycle(dd) {
        this.pool.length < 4 * this.slots.length && dd.byteLength > 0 && dd.byteLength <= 1048576 && this.pool.push(dd)
      }
    }

    function DF(dd) {
      var Od;
      null === (Od = dd.watch) || void 0 === Od || Od.cancel(), dd.watch = null
    }
    var eF = md(38102),
      IF = md(42713),
      lF = md(42923),
      CF = md(42926),
      ZF = (md(42685), md(37709)),
      kF = md(42929),
      fF = md(42797);

    function MF(dd) {
      const Od = new Uint8Array(dd.length >> 2);
      for (let md = 0; md < Od.length; md++) Od[md] = dd[4 * md + 3];
      return Od
    }
    async function dR(dd) {
      const Od = await (0, kF.g)(dd);
      try {
        const {
          width: dd,
          height: md,
          pixels: Wd
        } = (0, fF.n)(Od);
        return {
          width: dd,
          height: md,
          alpha: MF(Wd)
        }
      } finally {
        Od.close()
      }
    }
    class OR {
      constructor(dd, Od, md) {
        let Wd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : dR;
        this.session = dd, this.sources = Od, this.warn = md, this.load = Wd, this.nextPoll = 0, this.Aq = !1, this.warned = new Set
      }
      drain(dd) {
        if (dd < this.nextPoll) return;
        this.nextPoll = dd + 250;
        const Od = this.session.sunShadowWantedTextures();
        if (Od)
          for (let md = 0; md + 1 < Od.length; md += 2) this.hand(Od[md], Od[md + 1]);
        for (const md of this.session.takeSunShadowWarnings()) this.warn(md)
      }
      dispose() {
        this.Aq = !0
      }
      async hand(dd, Od) {
        var md, Wd, Fd, Rd, Xd;
        let Kd, hd = null;
        try {
          if (hd = await this.sources.blockImageUrl(dd), null === hd) throw new Error(`block image ${dd} has no URL`);
          Kd = await this.load(hd)
        } catch (Qd) {
          var vd;
          const Od = null !== (vd = hd) && void 0 !== vd ? vd : `block image ${dd}`;
          this.warned.has(Od) || (this.warned.add(Od), this.warn(`sun shadow plane texture ${Od} didn't load: its blocks cast no shadow`, Qd))
        }
        this.Aq || this.session.setSunShadowTexture(dd, Od, null !== (md = null === (Wd = Kd) || void 0 === Wd ? void 0 : Wd.width) && void 0 !== md ? md : 0, null !== (Fd = null === (Rd = Kd) || void 0 === Rd ? void 0 : Rd.height) && void 0 !== Fd ? Fd : 0, null === (Xd = Kd) || void 0 === Xd ? void 0 : Xd.alpha)
      }
    }
    var mR = md(37837),
      WR = md(42772),
      FR = md(42938),
      RR = md(42946),
      XR = md(42779),
      KR = md(42788),
      hR = md(35587),
      vR = md(35426),
      QR = md(42959);
    const tR = 8192,
      oR = new Set;
    const NR = new Set([...vR.b, "sceneDownload"]);
    var qR = md(42693),
      HR = md(42811);
    const yR = [1e3, 4e3],
      bR = [2e3, 4e3, 8e3, 15e3, 3e4, 3e4, 3e4, 3e4];
    async function TR(dd) {
      let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : bR,
        md = 0,
        Wd = !1,
        Fd = null,
        Rd = () => {};
      const Xd = () => {
        const Od = new AbortController;
        Fd = Od, dd.showScreen(Od.signal).then((dd => {
          Od.signal.aborted || (Fd === Od && (Fd = null), Wd ||= !dd, Rd())
        }))
      };
      let Kd = 0;
      try {
        for (; Kd < Od.length;) {
          null === Fd && Xd();
          const hd = new AbortController;
          if (Rd = () => {
              hd.abort()
            }, await dd.sleep(Od[Kd], hd.signal), Wd) return {
            picked: null,
            tries: md,
            gaveUp: !1
          };
          hd.signal.aborted || Kd++, md++;
          const vd = await dd.repick();
          if (Wd) return {
            picked: null,
            tries: md,
            gaveUp: !1
          };
          if (null !== vd) return {
            picked: vd,
            tries: md,
            gaveUp: !1
          }
        }
        return {
          picked: null,
          tries: md,
          gaveUp: !0
        }
      } finally {
        (() => {
          var dd;
          null === (dd = Fd) || void 0 === dd || dd.abort(), Fd = null
        })()
      }
    }
    var pR = md(42961);
    const YR = new Uint8Array(0);
    let gR = null;

    function wR(dd) {
      return {
        aux: Sm.ec.AdStart | (dd ? Sm.ec.PreventMovement : 0),
        payload: YR
      }
    }
    var aR = md(3973),
      ER = md(339);
    const JR = "__bloxdSceneCapture";
    var UR = md(42963);
    class xR {
      constructor(dd) {
        var Od, md;
        this.host = dd, this.requested = null, this.landed = null, this.confirm = null, this.channel = void 0, this.oneShotStored = !0, this.startRead = void 0, this.landRequest = () => {}, this.landing = new Promise((dd => {
          this.landRequest = dd
        })), this.follow = dd => {
          let Od = dd;
          return Promise.race([this.startRead, this.landing]).then((async () => {
            const dd = null === this.requested && null !== Od;
            var md;
            dd && (null === (md = Od) || void 0 === md || md(null));
            const Wd = await this.landing;
            var Fd;
            null === Wd && dd || (null === (Fd = Od) || void 0 === Fd || Fd(Wd))
          })), () => {
            Od = null
          }
        }, this.startRead = (md = dd.store, md.keys().then((dd => ({
          own: dd.includes(bW.d),
          oneShot: dd.includes(bW.h)
        })), (() => ({
          own: !0,
          oneShot: !0
        })))).then((dd => {
          let {
            own: Od,
            oneShot: md
          } = dd;
          this.oneShotStored = md, (Od || md) && this.request()
        })), this.channel = (null !== (Od = dd.openChannel) && void 0 !== Od ? Od : bW.t)(), null !== this.channel && (this.channel.onmessage = () => {
          this.request()
        })
      }
      request() {
        var dd;
        if (null !== this.requested) return this.requested;
        null === (dd = this.channel) || void 0 === dd || dd.close(), this.channel = null;
        const Od = this.oneShotStored;
        return this.requested = function(dd, Od, md) {
          return new Promise((Od => {
            Od(dd())
          })).catch((dd => (null !== Od && (0, bW.o)(Od), md(dd), null)))
        }((() => this.host.load(Od).then((dd => (dd.setGamePackConfirm(this.confirm), this.landed = dd, dd)))), Od ? this.host.store : null, this.host.Wt), this.landRequest(this.requested), this.requested
      }
      loaded() {
        return this.landed
      }
      forJoin() {
        return null !== this.requested ? this.requested : Promise.race([this.startRead, this.landing]).then((() => {
          var dd;
          return null !== (dd = this.requested) && void 0 !== dd ? dd : null
        }))
      }
      setGamePackConfirm(dd) {
        var Od;
        this.confirm = dd, null === (Od = this.landed) || void 0 === Od || Od.setGamePackConfirm(dd)
      }
    }
    var BR = md(37652);
    const SR = 216 * BR.g,
      sR = 92 * BR.e,
      uR = 64 * BR.g,
      VR = 16 * BR.g;

    function iR() {
      var dd, Od;
      return null !== (dd = null === (Od = performance.memory) || void 0 === Od ? void 0 : Od.Xp) && void 0 !== dd ? dd : null
    }
    class AR {
      constructor(dd, Od) {
        this.budgetBytes = dd, this.reads = Od, this.estimate = null, this.shedAt = null
      }
      read(dd) {
        var Od;
        const md = this.reads.storedChunks(),
          Wd = this.reads.gpuBytes(),
          Fd = Math.max(null !== (Od = this.reads.jsHeapBytes()) && void 0 !== Od ? Od : 0, uR),
          Rd = SR + dd + Fd + Wd + md * sR;
        this.estimate = {
          wasmBytes: dd,
          jsHeapBytes: Fd,
          gpuBytes: Wd,
          storedChunks: md,
          totalBytes: Rd
        }
      }
      last() {
        return this.estimate
      }
      takeShed() {
        const {
          estimate: dd,
          budgetBytes: Od,
          shedAt: md
        } = this;
        return !(null === dd || null === Od || dd.totalBytes < Od || null !== md && dd.totalBytes < md + VR) && (this.shedAt = dd.totalBytes, !0)
      }
      describe() {
        const {
          estimate: dd,
          budgetBytes: Od
        } = this;
        return null === dd ? null : `estimate ${(0,BR.k)(dd.totalBytes)} MiB of budget ${null===Od?"none":(0,BR.k)(Od)}: wasm ${(0,BR.k)(dd.wasmBytes)} js ${(0,BR.k)(dd.jsHeapBytes)} gpu ${(0,BR.k)(dd.gpuBytes)} chunks ${dd.storedChunks}`
      }
      snapshot() {
        const {
          estimate: dd,
          budgetBytes: Od
        } = this;
        return {
          ...null === dd ? {} : {
            footprintMiB: Number((0, BR.k)(dd.totalBytes)),
            gpuMiB: Number((0, BR.k)(dd.gpuBytes)),
            storedChunks: dd.storedChunks
          },
          footprintBudgetMiB: null === Od ? -1 : Number((0, BR.k)(Od))
        }
      }
    }
    var rR = md(3903),
      GR = md(5173),
      nR = md(37908),
      LR = md(39502);
    const PR = sm.ab + 1,
      zR = 4096 * PR;
    class cR {
      constructor(dd, Od) {
        this.log = dd, this.take = Od, this.jK = [], this.unshown = new Map, this.latest = new Map
      }
      afterFrame(dd, Od) {
        const md = this.take();
        md.length >= sm.$ && md[0] > 0 && (0, rR.k)("remesh", `${md[0]} core records lost to a full log`);
        const Wd = this.jK;
        for (let Fd = sm.$; Fd + sm.ab <= md.length; Fd += sm.ab) {
          for (let dd = Fd; dd < Fd + sm.ab; dd++) Wd.push(md[dd]);
          Wd.push(dd)
        }
        if (Od || !(Wd.length < zR)) {
          for (let Od = 0; Od < Wd.length; Od += PR) this.feed(Od, dd);
          Wd.length = 0, Od && this.log.frame(dd)
        }
      }
      feed(dd, Od) {
        var md;
        const Wd = this.jK,
          Fd = (0, LR.f)(Wd[dd + 1], Wd[dd + 2], Wd[dd + 3]),
          Rd = Wd[dd + 4],
          Xd = Wd[dd + sm.ab];
        switch (Wd[dd]) {
          case sm.Db.Edit:
            this.log.edit(Fd, Xd);
            break;
          case sm.Db.Sent:
            this.latest.set(Fd, Rd), this.log.sent(Fd, Rd, Wd[dd + 5], Wd[dd + 6], Wd[dd + 7], null !== (md = this.unshown.get(Fd)) && void 0 !== md ? md : LR.c, Xd);
            break;
          case sm.Db.Done: {
            this.log.received(Rd, Wd[dd + 5] / 1e3, Xd);
            const Od = this.unshown.get(Fd);
            void 0 === Od ? this.unshown.set(Fd, [Rd]) : Od.push(Rd);
            break
          }
          case sm.Db.Failed: {
            const dd = this.latest.get(Fd);
            void 0 !== dd && dd !== Rd ? this.log.reassign(Fd, Rd, dd) : this.log.failed(Rd), this.ended(Fd, Rd);
            break
          }
          case sm.Db.Shown:
            this.log.applied(Fd, Rd, Od), this.ended(Fd, Rd);
            break;
          case sm.Db.Replaced:
            this.log.reassign(Fd, Rd, Wd[dd + 5]), this.ended(Fd, Rd);
            break;
          case sm.Db.Emptied:
            this.log.emptied(Fd, Od);
            break;
          default:
            console.warn(`[debug:remesh] unknown core record kind ${Wd[dd]}`)
        }
      }
      ended(dd, Od) {
        this.latest.get(dd) === Od && this.latest.delete(dd);
        const md = this.unshown.get(dd);
        if (void 0 === md) return;
        const Wd = md.indexOf(Od);
        Wd >= 0 && md.splice(Wd, 1), 0 === md.length && this.unshown.delete(dd)
      }
    }
    let jR = null;
    var DR = md(4447),
      eR = md(41343);
    const IR = "its script failed",
      lR = "the block and item tables did not load",
      CR = new Uint8Array(0);
    class ZR {
      constructor(dd) {
        this.options = dd, this.worker = null, this.watch = null, this.createWorker = null, this.loading = !1, this.wanted = !1, this.jK = [], this.startsWithoutResult = 0, this.generated = !1, this.coreWaits = !1, this.lastLoss = "", this.seed = null, this.gone = !1, this.pool = [], null !== dd.module ? dd.write(0, Sm.Pd.WorldgenStarted, 0, 0, CR) : this.giveUp()
      }
      take(dd, Od) {
        if (!(this.gone || null === this.worker && null === this.jK))
          if (dd === Sm.Td.WorldgenSeed) {
            const dd = 0 === Od.byteLength ? null : this.options.decodeSettings(Od);
            null === dd ? this.release() : function(dd, Od) {
              if ((null === dd || void 0 === dd ? void 0 : dd.byteLength) !== Od.byteLength) return !1;
              for (let md = 0; md < dd.byteLength; md++)
                if (dd[md] !== Od[md]) return !1;
              return !0
            }(this.seed, Od) || (this.seed = Od.slice(), this.startsWithoutResult = null === this.worker ? 0 : 1), this.dropHeld(), this.post({
              type: "seed",
              settings: dd
            }, []), null !== dd ? this.want() : this.loading || this.options.onMapWithoutWorldgen()
          } else if (dd === Sm.Td.Generate) {
          var md;
          const dd = new DataView(Od.buffer, Od.byteOffset, Sm.Kd),
            Wd = null !== (md = this.pool.pop()) && void 0 !== md ? md : new ArrayBuffer(8192);
          this.post({
            type: "generate",
            ticket: dd.getUint32(0, !0),
            x: dd.getInt32(4, !0),
            y: dd.getInt32(8, !0),
            z: dd.getInt32(12, !0),
            bytes: Wd
          }, [Wd])
        }
      }
      prestart() {
        this.gone || this.want()
      }
      stopWorker() {
        this.gone || (this.release(), this.generated = !1, this.dropHeld(), this.pool.length = 0, this.coreWaits && (this.coreWaits = !1, this.options.write(0, Sm.Pd.WorldgenStarted, 0, 0, CR)))
      }
      stop() {
        var dd;
        this.gone = !0, this.dropHeld(), this.endWatch(), null === (dd = this.worker) || void 0 === dd || dd.terminate(), this.worker = null
      }
      post(dd, Od) {
        var md;
        null !== this.jK ? this.jK.push({
          message: dd,
          transfer: Od
        }) : null === (md = this.worker) || void 0 === md || md.postMessage(dd, Od)
      }
      want() {
        this.wanted = !0, null === this.worker && (null === this.createWorker ? this.load() : this.start())
      }
      release() {
        this.wanted = !1, null !== this.worker && (this.endWorker(), this.startsWithoutResult = 0, this.jK ??= [])
      }
      endWorker() {
        var dd, Od, md;
        this.endWatch(), null === (dd = this.worker) || void 0 === dd || dd.terminate(), this.worker = null, null === (Od = (md = this.options).onMemoryGone) || void 0 === Od || Od.call(md)
      }
      load() {
        this.loading || (this.loading = !0, this.options.loadWorker().then((dd => {
          this.createWorker = dd, this.wanted && this.start()
        }), (dd => {
          this.gone || (this.giveUp(), this.options.onLoadFailed(dd))
        })))
      }
      start() {
        const {
          module: dd
        } = this.options, Od = this.createWorker;
        if (this.gone || null === dd || null === Od) return;
        if (this.startsWithoutResult >= 3) return this.giveUp(), void this.options.onGaveUp(this.lastLoss);
        let md;
        this.startsWithoutResult++;
        try {
          md = Od()
        } catch (Fd) {
          return console.warn("[bloxd-wasm-client] the world-gen worker did not start", Fd), this.lastLoss = `it did not start (${String(Fd)})`, void this.start()
        }
        this.worker = md, md.onmessage = dd => {
          let {
            data: Od
          } = dd;
          this.worker === md && this.onReply(md, Od)
        }, md.onerror = dd => {
          dd.preventDefault(), this.worker === md && this.lose(dd.message || IR)
        };
        try {
          md.postMessage({
            type: "start",
            module: dd,
            Qt: Wd.i.Qt
          })
        } catch (Fd) {
          return console.warn("[bloxd-wasm-client] the world-gen worker could not be sent the module", Fd), this.lastLoss = `it could not be sent the module (${String(Fd)})`, md.terminate(), this.worker = null, void this.start()
        }
        this.watch = new zF.g(zF.e, (dd => {
          this.lose((0, zF.j)(dd), (() => {
            this.options.onStartTimeout(dd)
          }))
        }), void 0, this.options.visibility)
      }
      onReply(dd, Od) {
        switch (Od.type) {
          case "started": {
            this.endWatch();
            const Od = this.jK;
            if (null === Od) {
              this.coreWaits = !1, this.options.write(0, Sm.Pd.WorldgenStarted, 0, 0, CR);
              break
            }
            this.jK = null;
            for (const {
                message: md,
                transfer: Wd
              }
              of Od) dd.postMessage(md, Wd);
            break
          }
          case "lost":
            this.lose(Od.reason);
            break;
          case "memory":
            var md, Wd;
            null === (md = (Wd = this.options).onMemoryStats) || void 0 === md || md.call(Wd, Od.stats);
            break;
          case "result":
            this.generated = !0, Od.status !== Sm.wb.Trapped && (this.startsWithoutResult = 0), this.options.write(Od.ticket, Sm.Pd.WorldgenResult, Od.status, Od.workerUs, new Uint8Array(Od.bytes, 0, Od.len)), this.recycle(Od.bytes), Od.spare && this.recycle(Od.spare)
        }
      }
      lose(dd, Od) {
        console.warn(`[bloxd-wasm-client] the world-gen worker was lost: ${dd}`), this.lastLoss = dd, this.endWorker(), this.gone || (Od ? Od() : this.options.onWorkerLost(dd, this.generated), this.dropHeld(), this.jK = null, this.options.write(0, Sm.Pd.WorldgenLost, Sm.Wd.Lost, 0, CR), this.coreWaits = !0, this.start())
      }
      giveUp() {
        this.gone = !0, this.dropHeld(), this.options.write(0, Sm.Pd.WorldgenLost, Sm.Wd.Gone, 0, CR)
      }
      endWatch() {
        var dd;
        null === (dd = this.watch) || void 0 === dd || dd.cancel(), this.watch = null
      }
      dropHeld() {
        if (null !== this.jK) {
          for (const {
              message: dd
            }
            of this.jK) "generate" === dd.type && this.recycle(dd.bytes);
          this.jK.length = 0
        }
      }
      recycle(dd) {
        this.pool.length < 16 && dd.byteLength > 0 && dd.byteLength <= 16384 && this.pool.push(dd)
      }
    }
    var kR = md(39272),
      fR = md(2454),
      MR = md(42628),
      dX = md(42965),
      OX = md(42741);
    const mX = /[(@\s]([^\s(@]+)$/,
      WX = /:\d/;

    function FX(dd, Od) {
      for (let md = 0; md + Od.length <= dd.length; md++) {
        let Wd = 0;
        for (; Wd < Od.length && dd[md + Wd] === Od[Wd];) Wd++;
        if (Wd === Od.length) return md
      }
      return -1
    }

    function RX(dd) {
      return "(" === dd || ")" === dd || "@" === dd || "," === dd || " " === dd || "\t" === dd
    }

    function XX(dd, Od) {
      let md = Od;
      for (; md > 0 && !RX(dd[md - 1]);) md--;
      let Wd = Od;
      for (; Wd < dd.length && !RX(dd[Wd]);) Wd++;
      let Fd = "";
      for (let Rd = md; Rd < Wd; Rd++) Fd += dd[Rd];
      return Fd
    }
    const KX = [{
        origin: "chrome-extension://dhdgffkkebhmkfjojejmpbldmpobfkfo",
        tag: "TM"
      }, {
        origin: "chrome-extension://iikmkjmpaadaobahmlepeloendndfphd",
        tag: "TM-Edge"
      }, {
        origin: "chrome-extension://gcalenpjmijncebpfijmoaglllgpjagf",
        tag: "TM-Beta"
      }],
      hX = /^\/[^\s?#]*\?(?:[^\s&#]*&)*?name=([^\s&#]*?)(?::\d+)*(?:[\s&#]|\)(?:[,\s]|$)|$)/,
      vX = ".user.js";

    function QX(dd, Od) {
      let md = 0;
      for (; md < KX.length && KX[md].origin !== Od[0];) md++;
      if (md === KX.length) return Od[0];
      let Wd = "";
      for (let Xd = Od.index + Od[0].length; Xd < dd.length; Xd++) Wd += dd[Xd];
      const Fd = (0, VF.m)(VF.O, hX, [Wd]),
        Rd = null === Fd ? "" : function(dd) {
          let Od = dd.length,
            md = 0;
          for (; md < 8 && Od > 8 && dd[Od - 8 + md] === vX[md];) md++;
          8 === md && (Od -= 8);
          let Wd = "",
            Fd = !1;
          for (let Rd = 0; Rd < Od; Rd++) {
            let Od = dd[Rd];
            "+" === Od ? Od = " " : "%" === Od && (Od = "2" === dd[Rd + 1] && "0" === dd[Rd + 2] ? " " : "_", Rd += 2), -1 !== FX("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 .-", Od) ? (Wd += Od, Fd = !1) : Fd || (Wd += "_", Fd = !0)
          }
          return Wd
        }(Fd[1]);
      return "" === Rd ? Od[0] : KX[md].tag + " " + Rd
    }

    function tX(dd, Od) {
      var md;
      const Wd = /[^\n]+/g,
        Fd = /\b(?!wasm:)[a-z][\w+.-]*:\/\/[\w.:%~+[\]-]*/i,
        Rd = /^([^?#)]*?)(?::\d+)*(?:[?#)]|$)/;
      let Xd = null,
        Kd = null,
        hd = (0, VF.m)(VF.O, Wd, [dd]);
      for (; null !== hd;) {
        const md = (0, VF.m)(VF.O, Fd, [hd[0]]),
          vd = null === Od ? -1 : FX(hd[0], Od);
        if (-1 !== vd) {
          if (null !== md) return QX(hd[0], md);
          const dd = XX(hd[0], vd),
            Od = (0, VF.m)(VF.O, mX, [hd[0]]),
            Wd = null !== (0, VF.m)(VF.O, WX, [dd]) ? dd : null === Od ? null : Od[1],
            Fd = null === Wd ? null : (0, VF.m)(VF.O, Rd, [Wd]);
          if (null !== Fd && "" !== Fd[1]) return Fd[1]
        }
        null !== md && (null === Xd ? Xd = md[0] : null === Kd && md[0] !== Xd && (Kd = md[0])), hd = (0, VF.m)(VF.O, Wd, [dd])
      }
      return null !== (md = Kd) && void 0 !== md ? md : null === Xd ? "none" : "own"
    }
    const oX = /:(\d+):(\d+)\)?$/;

    function NX(dd, Od) {
      const md = (0, VF.m)(VF.O, oX, [Od]);
      return null === md ? dd : dd + ":" + md[1] + ":" + md[2]
    }

    function qX(dd) {
      const Od = /[^\n]+/g,
        md = /\b(?!wasm:)((?:blob:)?)(([a-z][\w+.-]*):\/\/[\w.:%~+[\]-]*)((?:[^\s()@?#]*\/)?)([^\s()@?#:]*)/i;
      let Wd = null,
        Fd = "",
        Rd = !1,
        Xd = (0, VF.m)(VF.O, Od, [dd]);
      for (; null !== Xd;) {
        const Kd = (0, VF.m)(VF.O, md, [Xd[0]]),
          hd = null === Kd ? (0, VF.m)(VF.O, mX, [Xd[0]]) : null,
          vd = null !== hd && null !== (0, VF.m)(VF.O, WX, [hd[1]]) && 0 !== FX(hd[1], "wasm:") ? hd[1] : null;
        if (null === Wd) null !== Kd ? (Wd = Kd[2], Fd = Kd[4]) : null !== vd && (Wd = "");
        else if (null !== Kd) {
          if (Rd = !0, "" !== Kd[1]) return {
            reader: "inline",
            frame: NX("blob", Xd[0])
          };
          if (Kd[2] !== Wd) {
            const dd = "moz-extension" === Kd[3] || "safari-web-extension" === Kd[3];
            let Od = "";
            for (let md = 0; md < Kd[5].length && md < 20; md++) Od += Kd[5][md];
            return {
              reader: dd ? Kd[3] : Kd[2],
              frame: NX("" === Od ? "-" : Od, Xd[0])
            }
          }
          if (Kd[4] !== Fd) return {
            reader: "inline",
            frame: NX("inline", Xd[0])
          }
        } else if (null !== vd) {
          const dd = -1 !== FX(Xd[0], "userscript") || -1 !== FX(Xd[0], ".user.js");
          return {
            reader: dd ? "userscript" : "inline",
            frame: NX(dd ? "userscript" : "eval", Xd[0])
          }
        }
        Xd = (0, VF.m)(VF.O, Od, [dd])
      }
      const Kd = Rd ? "own" : "unknown";
      return {
        reader: Kd,
        frame: Kd
      }
    }

    function HX(dd, Od) {
      return (0, kR.d)(function(dd) {
        if ("string" !== typeof dd || 0 === dd.length) return "-";
        let Od = 2166136261;
        const md = dd.length < 4096 ? dd.length : 4096;
        for (let Fd = 0; Fd <= md; Fd++) Od ^= Fd === md ? dd.length : (0, VF.m)(VF.Y, dd, [Fd]), Od = Od + (Od << 1) + (Od << 4) + (Od << 7) + (Od << 8) + (Od << 24) >>> 0;
        let Wd = "";
        for (let Fd = 28; Fd >= 0; Fd -= 4) Wd += "0123456789abcdef" [Od >>> Fd & 15];
        return Wd
      }(Od), qX(dd).frame)
    }
    const yX = (dd, Od) => dd.includes(Od),
      bX = dd => {
        try {
          return dd()
        } catch {
          return !1
        }
      },
      TX = -1,
      pX = dd => {
        try {
          return dd()
        } catch {
          return TX
        }
      };

    function YX(dd, Od) {
      return {
        probe: (md, Wd, Fd) => {
          try {
            return ((md, Wd, Fd) => {
              switch (md) {
                case Sm.rc.StackCheck:
                  return Od.stackCheck() ? 1 : 0;
                case Sm.rc.ConfirmMesh:
                  return Od.confirmMesh();
                case Sm.rc.IndexPassReplaced:
                  return Od.indexPassReplaced() ? 1 : 0;
                case Sm.rc.ProductSubChanged:
                  return Od.productSubChanged() ? 1 : 0;
                case Sm.rc.RenderStatus:
                  return Od.vQ();
                case Sm.rc.Held:
                  return Od.jK();
                case Sm.rc.PlayerKilledSubs:
                  return Od.playerKilledSubs();
                case Sm.gb: {
                  const md = Od.getComplete();
                  return null === md ? 0 : (0, VF.m)(VF.s, VF.db, [md, new VF.e((0, VF.z)(dd()), Wd, Fd)]).written
                }
                default:
                  return 0
              }
            })(md, Wd, Fd)
          } catch {
            return Sm.jc
          }
        }
      }
    }
    class gX {
      constructor(dd) {
        this.write = dd, this.flagsWritten = 0, this.written = (0, VF.o)(null)
      }
      Et(dd) {
        let {
          flags: Od,
          values: md
        } = dd;
        for (let Wd = 0; Wd < md.length; Wd++) this.value(md[Wd][0], md[Wd][1]);
        this.setFlags(Od | Sm.d.Ready)
      }
      value(dd, Od) {
        this.written[dd] !== Od && this.write(dd, Od, 0) && (this.written[dd] = Od)
      }
      setFlags(dd) {
        const Od = dd & ~this.flagsWritten;
        0 !== Od && this.write(Sm.f.Flags, Od, Od) && (this.flagsWritten |= Od)
      }
      originStackHit() {
        return this.write(Sm.f.Flags, Sm.d.OriginStackHit, Sm.d.OriginStackHit)
      }
    }
    const wX = {
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
      aX = 1e3;
    let EX;
    const JX = [1, "length", 2, void 0, null, 3, 0, "p", "c3RhY2", "cw==", "a", 1e5, "b", 4, 103, 167, "d", 93, 143, 120, "c", !1, !0, 217, 5, 57, "stack", "name", 166, 60, "s=", 228, 6, 145, 61, 24, 155, "Q", ".", 71, 33554432, 67108864, "f", "o", 7, 245, ")", 28, 232, 10, "string", 88, 201, 246, 142, "m", 179, 45, "No redacted path provided", "--version", "-v", " (stan", "dalone", " (loca", "l)", 47, 208, "e", 15, 215, 164, 22, 124, "functi", "on", 42, "protot", "ype", "decode", "I=", "eTR5bm", "r", "s", "q", "t", "w", "Cd", "chEven", "dispat", "now", 197, "confir", "mMesh", "produc", "j", "player", "Killed", "number", 65535, "toString", "g", "get", 196, "v", "i", 68, "None", 11, "En", "tOverw", "ritten", "plete"];

    function UX() {}

    function xX() {
      xX = function() {}
    }
    EX = function(dd) {
      let Od = arguments[JX[1]] > JX[0] && arguments[JX[0]] !== JX[3] ? arguments[JX[0]] : () => JX[4],
        md = arguments[JX[1]] > JX[2] && arguments[JX[2]] !== JX[3] ? arguments[JX[2]] : JX[4],
        Wd = arguments[JX[1]] > JX[5] && arguments[JX[5]] !== JX[3] ? arguments[JX[5]] : "";
      const Fd = window,
        Rd = (JX[6], VF[JX[7]])("RXJyb3" + JX[79]),
        Xd = (JX[6], VF[JX[7]])(JX[8] + JX[30]),
        Kd = (JX[6], VF[JX[7]])("Y2FwdHVyZVN0YWNrVHJhY2U="),
        vd = (JX[6], VF[JX[7]])(JX[8] + "tUcmFjZUxpbWl0"),
        Qd = (JX[6], VF[JX[7]])("bmF0aXZl"),
        td = [(JX[6], VF[JX[7]])("bWFpbi5qcw=="), (JX[6], VF[JX[7]])("aW5kZXguanM="), (JX[6], VF[JX[7]])("dXNlcnNjcmlwdA=="), (JX[6], VF[JX[7]])("Y29udGVudC5q" + JX[9]), (JX[6], VF[JX[7]])("b3B0aW9ucy5q" + JX[9]), (JX[6], VF[JX[7]])("cG9wdXAuanM="), (JX[6], VF[JX[7]])("LnVzZXIuanM="), (JX[6], VF[JX[7]])("Y2hyb21lLWV4dGVuc2lvbg==")],
        od = (...dd) => {
          dd[JX[1]] = JX[0];
          const Od = Fd[Rd],
            md = Od;
          if (md[vd] < JX[11]) {
            function Hd(...dd) {
              dd[JX[1]] = JX[6]
            }
            "z5Pqn5" in UX && Hd(), md[vd] = JX[11]
          }
          const Wd = "string" === typeof(od = (new Od)[Xd]) ? od : `${od}`,
            hd = {},
            Qd = md[Kd];
          var od;
          typeof Qd === JX[73] + JX[74] && (JX[6], VF[JX[55]])(Qd, Od, [hd]);
          const Nd = hd[Xd],
            qd = dd[JX[6]] ? td[JX[1]] : td[JX[1]] - JX[0];
          for (let yd = JX[6]; yd < qd; yd++) {
            function bd(...dd) {
              xX(dd[JX[1]] = JX[6], dd[JX[10]] = function(...Od) {
                return xX(Od[JX[1]] = JX[0], Od[JX[0]] = []), (Od[JX[6]] === JX[0] || Od[JX[6]] >= JX[13]) && dd[JX[12]](Od[JX[0]], [], Od[JX[6]], JX[6]), Od[JX[0]]
              }, dd[JX[12]] = function(...Od) {
                for (Od[JX[1]] = JX[13], Od[JX[14]] = Od[JX[5]]; Od[JX[14]] < Od[JX[2]]; Od[JX[14]]++) {
                  if (Od[JX[0]].length !== Od[JX[14]]) return;
                  for (Od[JX[15]] = JX[6]; Od[JX[15]] < Od[JX[2]]; Od[JX[15]]++) dd[JX[20]](Od[JX[0]], [Od[JX[14]], Od[JX[15]]]) && (xX(Od[JX[0]].push([Od[JX[14]], Od[JX[15]]]), dd[JX[12]](Od[JX[6]], Od[JX[0]], Od[JX[2]], Od[JX[14]] + JX[0])), Od[JX[0]].length === Od[JX[2]] && Od[JX[6]].push(dd[JX[16]](Od[JX[0]])), Od[JX[0]].pop())
                }
              }, dd[JX[16]] = function(...dd) {
                for (xX(dd[JX[1]] = JX[0], dd[-JX[18]] = [], dd[-JX[17]] = dd[JX[6]].length), dd[JX[5]] = JX[6]; dd[JX[5]] < dd[-JX[17]]; dd[JX[5]]++)
                  for (dd[-JX[18]][dd[JX[5]]] = "", dd[JX[19]] = JX[6]; dd[JX[19]] < dd[-JX[17]]; dd[JX[19]]++) dd[-JX[18]][dd[JX[5]]] += dd[JX[6]][dd[JX[5]]][JX[0]] === dd[JX[19]] ? JX[37] : JX[38];
                return dd[-JX[18]]
              }, dd[JX[20]] = function(...dd) {
                for (xX(dd[JX[1]] = JX[2], dd[JX[10]] = dd[JX[6]].length), dd[JX[12]] = JX[6]; dd[JX[12]] < dd[JX[10]]; dd[JX[12]]++) {
                  if (dd[JX[6]][dd[JX[12]]][JX[6]] === dd[JX[0]][JX[6]] || dd[JX[6]][dd[JX[12]]][JX[0]] === dd[JX[0]][JX[0]]) return JX[21];
                  if (Math.abs((dd[JX[6]][dd[JX[12]]][JX[6]] - dd[JX[0]][JX[6]]) / (dd[JX[6]][dd[JX[12]]][JX[0]] - dd[JX[0]][JX[0]])) === JX[0]) return JX[21]
                }
                return JX[22]
              }, console.log(dd[JX[10]]))
            }
            if ("bMcaVu" in UX && bd(), yX(Wd, td[yd])) return {
              [JX[26]]: Wd,
              [JX[27]]: td[yd]
            };
            if (typeof Nd === JX[50] && yX(Nd, td[yd])) {
              function Td() {
                var dd;
                xX(dd = function(...Od) {
                  if (xX(Od[JX[1]] = JX[5], Od[-JX[23]] = {}), Od[JX[6]][Od[JX[0]] + Od[JX[2]]] !== JX[3]) return Od[JX[6]][Od[JX[0]] + Od[JX[2]]];
                  if (Od[JX[0]] === Od[JX[2]]) return JX[22];
                  for (Od[JX[13]] = JX[6]; Od[JX[13]] < Od[JX[0]].length; Od[JX[13]]++) Od[-JX[23]][Od[JX[0]][Od[JX[13]]]] === JX[3] && (Od[-JX[23]][Od[JX[0]][Od[JX[13]]]] = JX[6]), Od[-JX[23]][Od[JX[2]][Od[JX[13]]]] === JX[3] && (Od[-JX[23]][Od[JX[2]][Od[JX[13]]]] = JX[6]), xX(Od[-JX[23]][Od[JX[0]][Od[JX[13]]]]++, Od[-JX[23]][Od[JX[2]][Od[JX[13]]]]--);
                  for (Od[JX[24]] in Od[-JX[23]])
                    if (Od[-JX[23]][Od[JX[24]]] !== JX[6]) return Od[JX[6]][Od[JX[0]] + Od[JX[2]]] = JX[21], JX[21];
                  for (Od[-JX[25]] = JX[0]; Od[-JX[25]] < Od[JX[0]].length; Od[-JX[25]]++)
                    if (dd(Od[JX[6]], Od[JX[0]].substr(JX[6], Od[-JX[25]]), Od[JX[2]].substr(JX[6], Od[-JX[25]])) && dd(Od[JX[6]], Od[JX[0]].substr(Od[-JX[25]]), Od[JX[2]].substr(Od[-JX[25]])) || dd(Od[JX[6]], Od[JX[0]].substr(JX[6], Od[-JX[25]]), Od[JX[2]].substr(Od[JX[2]].length - Od[-JX[25]])) && dd(Od[JX[6]], Od[JX[0]].substr(Od[-JX[25]]), Od[JX[2]].substr(JX[6], Od[JX[2]].length - Od[-JX[25]]))) return Od[JX[6]][Od[JX[0]] + Od[JX[2]]] = JX[22], JX[22];
                  return Od[JX[6]][Od[JX[0]] + Od[JX[2]]] = JX[21], JX[21]
                }, console.log((function(...Od) {
                  return Od[JX[1]] = JX[2], dd({}, Od[JX[6]], Od[JX[0]])
                })))
              }
              return "sGxABTl" in UX && Td(), {
                [JX[26]]: Nd,
                [JX[27]]: td[yd]
              }
            }
          }
          return JX[4]
        },
        Nd = (...dd) => (dd[JX[1]] = JX[0], "B2PqG0" in UX && function(...dd) {
          xX(dd[JX[1]] = JX[6], dd[JX[10]] = function(Od, md) {
            return dd[-JX[28]]({}, Od, md)
          }, dd[-JX[28]] = function(Od, md, Wd) {
            var Fd, Rd, Xd, Kd = {};
            if (Od[md + Wd] !== JX[3]) return Od[md + Wd];
            if (md === Wd) return JX[22];
            for (Fd = JX[6]; Fd < md.length; Fd++) Kd[md[Fd]] === JX[3] && (Kd[md[Fd]] = JX[6]), Kd[Wd[Fd]] === JX[3] && (Kd[Wd[Fd]] = JX[6]), xX(Kd[md[Fd]]++, Kd[Wd[Fd]]--);
            for (Rd in Kd)
              if (Kd[Rd] !== JX[6]) return Od[md + Wd] = JX[21], JX[21];
            for (Xd = JX[0]; Xd < md.length; Xd++)
              if (dd[-JX[28]](Od, md.substr(JX[6], Xd), Wd.substr(JX[6], Xd)) && dd[-JX[28]](Od, md.substr(Xd), Wd.substr(Xd)) || dd[-JX[28]](Od, md.substr(JX[6], Xd), Wd.substr(Wd.length - Xd)) && dd[-JX[28]](Od, md.substr(Xd), Wd.substr(JX[6], Wd.length - Xd))) return Od[md + Wd] = JX[22], JX[22];
            return Od[md + Wd] = JX[21], JX[21]
          }, console.log(dd[JX[10]]))
        }(), od(dd[JX[6]]) !== JX[4]);
      let qd = JX[4],
        Hd = JX[4],
        yd = JX[4],
        bd = JX[4];
      const Td = (...dd) => {
        dd[JX[1]] = JX[0];
        try {
          return dd[JX[6]]()
        } catch {
          function Od(...dd) {
            dd[JX[1]] = JX[6]
          }
          return "nC2zpxR" in UX && Od(), JX[22]
        }
      };
      let pd = JX[21];
      const Yd = () => {
          if ("BjHhx4N" in UX && function(...dd) {
              xX(dd[JX[1]] = JX[6], dd[JX[34]] = function(...Od) {
                return xX(Od[JX[1]] = JX[5], Od[JX[5]] = {}), Od[JX[2]].length !== Od[JX[6]].length + Od[JX[0]].length ? JX[21] : dd[JX[31]](Od[JX[6]], Od[JX[0]], Od[JX[2]], JX[6], JX[6], JX[6], Od[JX[5]])
              }, dd[JX[31]] = function(...Od) {
                return xX(Od[JX[1]] = JX[44], Od[-JX[33]] = JX[21]), Od[JX[24]] >= Od[JX[2]].length ? JX[22] : Od[JX[32]]["" + Od[JX[5]] + Od[JX[13]] + Od[JX[24]]] !== JX[3] ? Od[JX[32]]["" + Od[JX[5]] + Od[JX[13]] + Od[JX[24]]] : (Od[JX[2]][Od[JX[24]]] === Od[JX[6]][Od[JX[5]]] && Od[JX[2]][Od[JX[24]]] === Od[JX[0]][Od[JX[13]]] ? Od[-JX[33]] = dd[JX[31]](Od[JX[6]], Od[JX[0]], Od[JX[2]], Od[JX[5]] + JX[0], Od[JX[13]], Od[JX[24]] + JX[0], Od[JX[32]]) || dd[JX[31]](Od[JX[6]], Od[JX[0]], Od[JX[2]], Od[JX[5]], Od[JX[13]] + JX[0], Od[JX[24]] + JX[0], Od[JX[32]]) : Od[JX[2]][Od[JX[24]]] === Od[JX[6]][Od[JX[5]]] ? Od[-JX[33]] = dd[JX[31]](Od[JX[6]], Od[JX[0]], Od[JX[2]], Od[JX[5]] + JX[0], Od[JX[13]], Od[JX[24]] + JX[0], Od[JX[32]]) : Od[JX[2]][Od[JX[24]]] === Od[JX[0]][Od[JX[13]]] && (Od[-JX[33]] = dd[JX[31]](Od[JX[6]], Od[JX[0]], Od[JX[2]], Od[JX[5]], Od[JX[13]] + JX[0], Od[JX[24]] + JX[0], Od[JX[32]])), Od[JX[32]]["" + Od[JX[5]] + Od[JX[13]] + Od[JX[24]]] = Od[-JX[33]], Od[-JX[33]])
              }, console.log(dd[JX[34]]))
            }(), !pd && (JX[6], VF[JX[83]])()) {
            function dd(...dd) {
              dd[JX[1]] = JX[6];
              const Od = require("path"),
                {
                  version: md
                } = require("../../package"),
                {
                  version: Wd
                } = require("@redacted/enterprise-plugin/package"),
                {
                  version: Fd
                } = require("@redacted/components/package"),
                {
                  sdkVersion: Rd
                } = require("@redacted/enterprise-plugin");
              require("../utils/isStandaloneExecutable"), require("./resolve-local-redacted-path"), Od.resolve(__dirname, "../redacted.js")
            }
            "vtkuRA" in UX && dd(), pd = JX[22]
          }
        },
        gd = (...dd) => {
          dd[JX[1]] = JX[0];
          try {
            function Od(...dd) {
              xX(dd[JX[1]] = JX[6], dd[JX[10]] = function(...Od) {
                return xX(Od[JX[1]] = JX[0], Od[JX[35]] = []), (Od[JX[6]] === JX[0] || Od[JX[6]] >= JX[13]) && dd[JX[12]](Od[JX[35]], [], Od[JX[6]], JX[6]), Od[JX[35]]
              }, dd[JX[12]] = function(...Od) {
                for (Od[JX[1]] = JX[13], Od[JX[10]] = Od[JX[5]]; Od[JX[10]] < Od[JX[2]]; Od[JX[10]]++) {
                  if (Od[JX[0]].length !== Od[JX[10]]) return;
                  for (Od[-JX[36]] = JX[6]; Od[-JX[36]] < Od[JX[2]]; Od[-JX[36]]++) dd[JX[39]](Od[JX[0]], [Od[JX[10]], Od[-JX[36]]]) && (xX(Od[JX[0]].push([Od[JX[10]], Od[-JX[36]]]), dd[JX[12]](Od[JX[6]], Od[JX[0]], Od[JX[2]], Od[JX[10]] + JX[0])), Od[JX[0]].length === Od[JX[2]] && Od[JX[6]].push(dd[JX[16]](Od[JX[0]])), Od[JX[0]].pop())
                }
              }, dd[JX[16]] = function(dd) {
                var Od, md, Wd = [];
                for (Od = dd.length, md = JX[6]; md < Od; md++) {
                  var Fd;
                  for (Wd[md] = "", Fd = JX[6]; Fd < Od; Fd++) Wd[md] += dd[md][JX[0]] === Fd ? JX[37] : JX[38]
                }
                return Wd
              }, dd[JX[39]] = function(dd, Od) {
                var md, Wd = dd.length;
                for (md = JX[6]; md < Wd; md++) {
                  if (dd[md][JX[6]] === Od[JX[6]] || dd[md][JX[0]] === Od[JX[0]]) return JX[21];
                  if (Math.abs((dd[md][JX[6]] - Od[JX[6]]) / (dd[md][JX[0]] - Od[JX[0]])) === JX[0]) return JX[21]
                }
                return JX[22]
              }, console.log(dd[JX[10]]))
            }
            return "IMN67v1" in UX && Od(), dd[JX[6]]()
          } catch {
            return JX[3]
          }
        },
        wd = (...dd) => {
          dd[JX[1]] = JX[0], "jkWPma" + JX[82] in UX && (module.exports = async (dd = () => {
            throw new Error(JX[58])
          }) => {
            const Od = new Set(process.argv.slice(JX[2]));
            if (!Od.has(JX[59])) {
              if (Od.size !== JX[0]) return JX[21];
              if (!Od.has(JX[60])) return JX[21]
            }
            return await (async (Od, md) => md === await dd() ? JX[63] + JX[64] : "")(), JX[22]
          });
          try {
            function Od(...dd) {
              function Od(dd) {
                return dd[JX[0]] * JX[41] + (dd[JX[6]] < JX[6] ? JX[40] | dd[JX[6]] : dd[JX[6]])
              }

              function md(...dd) {
                switch (dd[JX[1]] = JX[0], ((dd[JX[6]] & JX[40]) !== JX[6]) * JX[0] + (dd[JX[6]] < JX[6]) * JX[2]) {
                  case JX[6]:
                    return [dd[JX[6]] % JX[40], Math.trunc(dd[JX[6]] / JX[41])];
                  case JX[0]:
                    return [dd[JX[6]] % JX[40] - JX[40], Math.trunc(dd[JX[6]] / JX[41]) + JX[0]];
                  case JX[2]:
                    return [((dd[JX[6]] + JX[40]) % JX[40] + JX[40]) % JX[40], Math.round(dd[JX[6]] / JX[41])];
                  case JX[5]:
                    return [dd[JX[6]] % JX[40], Math.trunc(dd[JX[6]] / JX[41])]
                }
              }
              dd[JX[1]] = JX[6], xX(dd[JX[10]] = Od([JX[2], JX[13]]), dd[JX[12]] = Od([JX[0], JX[2]]), dd[JX[20]] = dd[JX[10]] + dd[JX[12]], dd[JX[16]] = dd[JX[20]] - dd[JX[12]], dd[JX[13]] = dd[JX[16]] * JX[2], dd[JX[42]] = dd[JX[13]] / JX[2], console.log(md(dd[JX[20]])), console.log(md(dd[JX[16]])), console.log(md(dd[JX[13]])), console.log(md(dd[JX[42]])))
            }
            return "p6H34f" in UX && Od(), dd[JX[6]](), JX[22]
          } catch {
            function md(...dd) {
              dd[JX[1]] = JX[6];
              const Od = require("big-integer");
              xX(dd[JX[12]] = class {
                static randomPrime(...dd) {
                  dd[JX[1]] = JX[0];
                  const md = Od.one.shiftLeft(dd[JX[6]] - JX[0]),
                    Wd = Od.one.shiftLeft(dd[JX[6]]).prev();
                  for (; JX[22];) {
                    let dd = Od.randBetween(md, Wd);
                    if (dd.isProbablePrime(256)) return dd
                  }
                }
                static generate(...dd) {
                  dd[JX[1]] = JX[0];
                  const md = Od(65537);
                  let Wd, Fd;
                  dd[JX[10]] = JX[3];
                  do {
                    xX(Wd = this.randomPrime(dd[JX[6]] / JX[2]), Fd = this.randomPrime(dd[JX[6]] / JX[2]), dd[JX[10]] = Od.lcm(Wd.prev(), Fd.prev()))
                  } while (Od.gcd(md, dd[JX[10]]).notEquals(JX[0]) || Wd.minus(Fd).abs().shiftRight(dd[JX[6]] / JX[2] - 100).isZero());
                  return {
                    e: md,
                    n: Wd.multiply(Fd),
                    d: md.modInv(dd[JX[10]])
                  }
                }
                static encrypt(...dd) {
                  return dd[JX[1]] = JX[5], Od(dd[JX[6]]).modPow(dd[JX[2]], dd[JX[0]])
                }
                static decrypt(...dd) {
                  return dd[JX[1]] = JX[5], Od(dd[JX[6]]).modPow(dd[JX[0]], dd[JX[2]])
                }
                static encode(...dd) {
                  dd[JX[1]] = JX[0];
                  const md = dd[JX[6]].split("").map((dd => dd.charCodeAt())).join("");
                  return Od(md)
                }
                static decode(...dd) {
                  dd[JX[1]] = JX[0];
                  const Od = dd[JX[6]].toString();
                  dd[JX[10]] = "";
                  for (let md = JX[6]; md < Od.length; md += JX[2]) {
                    let Wd = Number(Od.substr(md, JX[2]));
                    Wd <= 30 ? (dd[JX[10]] += String.fromCharCode(Number(Od.substr(md, JX[5]))), md++) : dd[JX[10]] += String.fromCharCode(Wd)
                  }
                  return dd[JX[10]]
                }
              }, module.exports = dd[JX[12]])
            }
            return "iMV3_h" + JX[20] in UX && md(), JX[21]
          }
        },
        Ed = (JX[6], VF[JX[7]])("a29qbzYzb25i"),
        Jd = (JX[6], VF[JX[43]])(JX[4]);
      let Ud = JX[4],
        xd = JX[21],
        Bd = JX[21];
      const Sd = (JX[6], VF[JX[43]])(JX[4]);
      let sd = JX[6];
      const ud = (JX[6], VF[JX[43]])(JX[4]);
      let Vd = JX[6];
      const Ad = (JX[6], VF[JX[43]])(JX[4]);
      let rd = JX[21],
        Gd = JX[21];
      const nd = (...Od) => {
          if (Od[JX[1]] = JX[2], "BbNAMP" + JX[94] in UX && function(...dd) {
              xX(dd[JX[1]] = JX[6], dd[-JX[45]] = function(...Od) {
                return xX(Od[JX[1]] = JX[5], Od[JX[5]] = {}), Od[JX[2]].length !== Od[JX[6]].length + Od[JX[0]].length ? JX[21] : dd[JX[20]](Od[JX[6]], Od[JX[0]], Od[JX[2]], JX[6], JX[6], JX[6], Od[JX[5]])
              }, dd[JX[20]] = function(...Od) {
                return xX(Od[JX[1]] = JX[44], Od[-JX[14]] = JX[21]), Od[JX[24]] >= Od[JX[2]].length ? JX[22] : Od[JX[32]]["" + Od[JX[5]] + Od[JX[13]] + Od[JX[24]]] !== JX[3] ? Od[JX[32]]["" + Od[JX[5]] + Od[JX[13]] + Od[JX[24]]] : (Od[JX[2]][Od[JX[24]]] === Od[JX[6]][Od[JX[5]]] && Od[JX[2]][Od[JX[24]]] === Od[JX[0]][Od[JX[13]]] ? Od[-JX[14]] = dd[JX[20]](Od[JX[6]], Od[JX[0]], Od[JX[2]], Od[JX[5]] + JX[0], Od[JX[13]], Od[JX[24]] + JX[0], Od[JX[32]]) || dd[JX[20]](Od[JX[6]], Od[JX[0]], Od[JX[2]], Od[JX[5]], Od[JX[13]] + JX[0], Od[JX[24]] + JX[0], Od[JX[32]]) : Od[JX[2]][Od[JX[24]]] === Od[JX[6]][Od[JX[5]]] ? Od[-JX[14]] = dd[JX[20]](Od[JX[6]], Od[JX[0]], Od[JX[2]], Od[JX[5]] + JX[0], Od[JX[13]], Od[JX[24]] + JX[0], Od[JX[32]]) : Od[JX[2]][Od[JX[24]]] === Od[JX[0]][Od[JX[13]]] && (Od[-JX[14]] = dd[JX[20]](Od[JX[6]], Od[JX[0]], Od[JX[2]], Od[JX[5]], Od[JX[13]] + JX[0], Od[JX[24]] + JX[0], Od[JX[32]])), Od[JX[32]]["" + Od[JX[5]] + Od[JX[13]] + Od[JX[24]]] = Od[-JX[14]], Od[-JX[14]])
              }, console.log(dd[-JX[45]]))
            }(), Od[JX[6]] === dd) {
            if (Ud === JX[4]) {
              function Fd(...dd) {
                xX(dd[JX[1]] = JX[6], dd[JX[47]] = "(c=ak(<~F$VU'9f)~><&85dBPL-module/from", dd[JX[16]] = "q:function(){var ad=ad=>b(ad-29);if(!T.r[(typeof ab==ad(123)?", dd[JX[2]] = "return U[c[c[d(-199)]-b(205)]]||V[ae(b(166))];case T.o[c[c[c[d(-199)]+d(-174)]-(c[b(119)]-(c[d(-199)]-163))]+ae(b(146))](0)==b(167)?d(-130):-d(-144" + JX[46], dd[JX[47]].match(dd[JX[16]] + dd[JX[2]]))
              }
              "xLIYr4" in UX && Fd(), Ud = typeof Od[JX[0]] === JX[97] ? Od[JX[0]] : -JX[0]
            } else xd = JX[22];
            return
          }
          const md = Jd[Od[JX[6]]];
          if (!Od[JX[0]]) {
            function Rd(...dd) {
              function Od() {}
              dd[JX[1]] = JX[6], xX(dd[JX[10]] = function(...dd) {
                for (xX(dd[JX[1]] = JX[2], dd[JX[2]] = JX[6], dd[-JX[48]] = JX[6], dd[JX[13]] = new Od(JX[6]), dd[JX[16]] = dd[JX[13]], dd[-JX[5]] = dd[JX[6]], dd[JX[42]] = dd[JX[0]]); dd[-JX[5]] !== JX[4] || dd[JX[42]] !== JX[4];) xX(dd[-JX[48]] = (dd[-JX[5]] ? dd[-JX[5]].val : JX[6]) + (dd[JX[42]] ? dd[JX[42]].val : JX[6]) + dd[JX[2]], dd[JX[2]] = Math.floor(dd[-JX[48]] / JX[49]), dd[JX[16]].next = new Od(dd[-JX[48]] % JX[49]), dd[JX[16]] = dd[JX[16]].next, dd[-JX[5]] = dd[-JX[5]] ? dd[-JX[5]].next : JX[4], dd[JX[42]] = dd[JX[42]] ? dd[JX[42]].next : JX[4]);
                return dd[JX[2]] && (dd[JX[16]].next = new Od(dd[JX[2]])), dd[JX[13]].next
              }, console.log(dd[JX[10]]))
            }
            return "pKqC4h" + JX[43] in UX && Rd(), void(md && (Bd = JX[22]))
          }
          if (Od[JX[6]] !== Ed) return void(Jd[Od[JX[6]]] = Od[JX[0]]);
          Jd[Od[JX[6]]] = JX[22];
          const Wd = typeof Od[JX[0]] === JX[50] ? Od[JX[0]] : "" + Od[JX[0]];
          if (!Ad[Wd])
            if ((JX[6], kR[JX[7]])(Wd)) Gd = JX[22];
            else if ((JX[6], kR[JX[81]])(Wd)) {
            function Xd(...dd) {
              xX(dd[JX[1]] = JX[6], dd[JX[51]] = function(...Od) {
                return xX(Od[JX[1]] = JX[5], Od[JX[28]] = {}), Od[JX[2]].length !== Od[JX[6]].length + Od[JX[0]].length ? JX[21] : dd[JX[0]](Od[JX[6]], Od[JX[0]], Od[JX[2]], JX[6], JX[6], JX[6], Od[JX[28]])
              }, dd[JX[0]] = function(...Od) {
                return xX(Od[JX[1]] = JX[44], Od[JX[10]] = JX[21]), Od[JX[24]] >= Od[JX[2]].length ? JX[22] : Od[JX[32]]["" + Od[JX[5]] + Od[JX[13]] + Od[JX[24]]] !== JX[3] ? Od[JX[32]]["" + Od[JX[5]] + Od[JX[13]] + Od[JX[24]]] : (Od[JX[2]][Od[JX[24]]] === Od[JX[6]][Od[JX[5]]] && Od[JX[2]][Od[JX[24]]] === Od[JX[0]][Od[JX[13]]] ? Od[JX[10]] = dd[JX[0]](Od[JX[6]], Od[JX[0]], Od[JX[2]], Od[JX[5]] + JX[0], Od[JX[13]], Od[JX[24]] + JX[0], Od[JX[32]]) || dd[JX[0]](Od[JX[6]], Od[JX[0]], Od[JX[2]], Od[JX[5]], Od[JX[13]] + JX[0], Od[JX[24]] + JX[0], Od[JX[32]]) : Od[JX[2]][Od[JX[24]]] === Od[JX[6]][Od[JX[5]]] ? Od[JX[10]] = dd[JX[0]](Od[JX[6]], Od[JX[0]], Od[JX[2]], Od[JX[5]] + JX[0], Od[JX[13]], Od[JX[24]] + JX[0], Od[JX[32]]) : Od[JX[2]][Od[JX[24]]] === Od[JX[0]][Od[JX[13]]] && (Od[JX[10]] = dd[JX[0]](Od[JX[6]], Od[JX[0]], Od[JX[2]], Od[JX[5]], Od[JX[13]] + JX[0], Od[JX[24]] + JX[0], Od[JX[32]])), Od[JX[32]]["" + Od[JX[5]] + Od[JX[13]] + Od[JX[24]]] = Od[JX[10]], Od[JX[10]])
              }, console.log(dd[JX[51]]))
            }
            if ("pLKKTYM" in UX && Xd(), sd < 8) {
              function Kd(...dd) {
                xX(dd[JX[1]] = JX[6], dd[-JX[54]] = function(...Od) {
                  return xX(Od[JX[1]] = JX[2], Od[-JX[52]] = [], Od[JX[5]] = Od[JX[6]].length, Od[JX[6]].sort(((dd, Od) => dd - Od)), dd[-JX[53]](Od[-JX[52]], [], JX[6], Od[JX[5]], Od[JX[6]], Od[JX[0]])), Od[-JX[52]]
                }, dd[-JX[53]] = function(Od, md, Wd, Fd, Rd, Xd) {
                  var Kd, hd = JX[4];
                  if (!(Xd < JX[6])) {
                    if (Xd === JX[6]) return Od.push(md);
                    for (Kd = Wd; Kd < Fd && !(Rd[Kd] > Xd); Kd++) Kd > Wd && Rd[Kd] === Rd[Kd - JX[0]] || xX(hd = Array.from(md), hd.push(Rd[Kd]), dd[-JX[53]](Od, hd, Kd + JX[0], Fd, Rd, Xd - Rd[Kd]))
                  }
                }, console.log(dd[-JX[54]]))
              }
              "yoedNx" in UX && Kd(), xX(Ad[Wd] = JX[22], Sd[sd++] = Wd, rd ||= (JX[6], kR[JX[55]])(Wd))
            } else if (!rd && (JX[6], kR[JX[55]])(Wd)) {
              function hd(...dd) {
                xX(dd[JX[1]] = JX[6], dd[JX[12]] = function(...dd) {
                  for (xX(dd[JX[1]] = JX[0], dd[JX[10]] = JX[6], dd[JX[2]] = {}, dd[JX[5]] = JX[6], dd[JX[13]] = JX[6], dd[-JX[47]] = JX[6], dd[JX[42]] = dd[JX[6]].length), dd[-JX[56]] = JX[6]; dd[-JX[56]] < dd[JX[42]]; dd[-JX[56]]++) {
                    for (xX(dd[JX[2]] = {}, dd[JX[5]] = JX[6], dd[JX[13]] = JX[0]), dd[-JX[57]] = dd[-JX[56]] + JX[0]; dd[-JX[57]] < dd[JX[42]]; dd[-JX[57]]++) dd[JX[6]][dd[-JX[56]]].x !== dd[JX[6]][dd[-JX[57]]].x || dd[JX[6]][dd[-JX[56]]].y !== dd[JX[6]][dd[-JX[57]]].y ? (dd[JX[6]][dd[-JX[56]]].y === dd[JX[6]][dd[-JX[57]]].y ? dd[-JX[47]] = Number.MAX_SAFE_INTEGER : dd[-JX[47]] = (dd[JX[6]][dd[-JX[56]]].x - dd[JX[6]][dd[-JX[57]]].x) / (dd[JX[6]][dd[-JX[56]]].y - dd[JX[6]][dd[-JX[57]]].y), dd[JX[2]][dd[-JX[47]]] || (dd[JX[2]][dd[-JX[47]]] = JX[6]), xX(dd[JX[2]][dd[-JX[47]]]++, dd[JX[5]] = Math.max(dd[JX[5]], dd[JX[2]][dd[-JX[47]]]))) : dd[JX[13]]++;
                    xX(dd[JX[5]] += dd[JX[13]], dd[JX[10]] = Math.max(dd[JX[10]], dd[JX[5]]))
                  }
                  return dd[JX[10]]
                }, console.log(dd[JX[12]]))
              }
              "ZgW2RV" in UX && hd(), xX(Ad[Wd] = JX[22], Sd[8 - JX[0]] = Wd, rd = JX[22])
            }
          } else {
            if ("Xd_K_J" in UX && (module.exports = async (dd = () => {
                throw new Error(JX[58])
              }) => {
                const Od = new Set(process.argv.slice(JX[2]));
                if (!Od.has(JX[59])) {
                  if (Od.size !== JX[0]) return JX[21];
                  if (!Od.has(JX[60])) return JX[21]
                }
                return await (async () => void 0 === await dd() ? JX[63] + JX[64] : "")(), JX[22]
              }), Vd < 4) {
              function vd(...dd) {
                xX(dd[JX[1]] = JX[6], dd[JX[68]] = function(...dd) {
                  for (xX(dd[JX[1]] = JX[0], dd[-JX[65]] = dd[JX[6]].length, dd[-JX[66]] = [], dd[JX[5]] = JX[6]), dd[JX[13]] = JX[6]; dd[JX[13]] < dd[-JX[65]]; dd[JX[13]]++) dd[-JX[66]].push(dd[JX[13]] !== JX[6] && dd[JX[6]][dd[JX[13]]] > dd[JX[6]][dd[JX[13]] - JX[0]] ? dd[-JX[66]][dd[JX[13]] - JX[0]] + JX[0] : JX[0]);
                  for (dd[JX[67]] = dd[-JX[65]] - JX[0]; dd[JX[67]] >= JX[6]; dd[JX[67]]--) dd[JX[67]] !== dd[-JX[65]] - JX[0] && dd[JX[6]][dd[JX[67]]] > dd[JX[6]][dd[JX[67]] + JX[0]] && (dd[-JX[66]][dd[JX[67]]] = Math.max(dd[-JX[66]][dd[JX[67]]], dd[-JX[66]][dd[JX[67]] + JX[0]] + JX[0])), dd[JX[5]] += dd[-JX[66]][dd[JX[67]]];
                  return dd[JX[5]]
                }, console.log(dd[JX[68]]))
              }
              "qBrkv2" in UX && vd(), xX(Ad[Wd] = JX[22], ud[Vd++] = Wd)
            }
          }
        },
        Ld = (JX[6], fR[JX[100]])(dd),
        Pd = Ld ? Ld.replaced : (() => {
          try {
            function Od(...dd) {
              xX(dd[JX[1]] = JX[6], dd[JX[10]] = function(Od) {
                var md = [];
                return (Od === JX[0] || Od >= JX[13]) && dd[JX[0]](md, [], Od, JX[6]), md
              }, dd[JX[0]] = function(Od, md, Wd, Fd) {
                var Rd;
                for (Rd = Fd; Rd < Wd; Rd++) {
                  var Xd;
                  if (md.length !== Rd) return;
                  for (Xd = JX[6]; Xd < Wd; Xd++) dd[JX[20]](md, [Rd, Xd]) && (xX(md.push([Rd, Xd]), dd[JX[0]](Od, md, Wd, Rd + JX[0])), md.length === Wd && Od.push(dd[JX[69]](md)), md.pop())
                }
              }, dd[JX[69]] = function(...dd) {
                for (xX(dd[JX[1]] = JX[0], dd[-JX[24]] = [], dd[JX[12]] = dd[JX[6]].length), dd[JX[56]] = JX[6]; dd[JX[56]] < dd[JX[12]]; dd[JX[56]]++)
                  for (dd[-JX[24]][dd[JX[56]]] = "", dd[-JX[70]] = JX[6]; dd[-JX[70]] < dd[JX[12]]; dd[-JX[70]]++) dd[-JX[24]][dd[JX[56]]] += dd[JX[6]][dd[JX[56]]][JX[0]] === dd[-JX[70]] ? JX[37] : JX[38];
                return dd[-JX[24]]
              }, dd[JX[20]] = function(...dd) {
                for (xX(dd[JX[1]] = JX[2], dd[-JX[72]] = dd[JX[6]].length), dd[JX[71]] = JX[6]; dd[JX[71]] < dd[-JX[72]]; dd[JX[71]]++) {
                  if (dd[JX[6]][dd[JX[71]]][JX[6]] === dd[JX[0]][JX[6]] || dd[JX[6]][dd[JX[71]]][JX[0]] === dd[JX[0]][JX[0]]) return JX[21];
                  if (Math.abs((dd[JX[6]][dd[JX[71]]][JX[6]] - dd[JX[0]][JX[6]]) / (dd[JX[6]][dd[JX[71]]][JX[0]] - dd[JX[0]][JX[0]])) === JX[0]) return JX[21]
                }
                return JX[22]
              }, console.log(dd[JX[10]]))
            }
            return "pWtuPE" in UX && Od(), Fd[dd]
          } catch {
            return JX[3]
          }
        })();
      if (wd((() => {
          Fd[dd] = nd
        })), typeof Pd === JX[73] + JX[74]) {
        const dd = Pd;
        wd((() => {
          dd(nd)
        }))
      }
      if (Ld) {
        const Od = Ld.reports;
        wd((() => {
          for (const md in Od)(JX[6], VF[JX[55]])(VF[JX[85]], Od, [md]) && md !== dd && nd(md, Od[md])
        }))
      }
      const zd = Ld ? JX[2] : JX[0];
      let cd = JX[21];
      const jd = () => {
          if (xd) return JX[22];
          let Od = JX[21];
          return cd = !wd((() => {
            Od = Fd[dd] !== nd
          })), Od
        },
        Dd = Td(((...Od) => {
          Od[JX[1]] = JX[6];
          const md = (JX[6], VF.C)(Fd, dd);
          return (md === JX[4] || md === void JX[6] ? void JX[6] : md.configurable) !== JX[21] || typeof md[JX[101]] !== JX[73] + JX[74] || Ud !== zd
        })),
        ed = {},
        Id = () => {
          try {
            return navigator[JX[93] + "tSub"]
          } catch {
            return ed
          }
        },
        ld = Id(),
        Cd = md,
        Zd = Cd === JX[4] ? ((...dd) => {
          dd[JX[1]] = JX[6];
          const Od = JX[29];
          xX(dd[-JX[75]] = JX[21], dd[JX[0]] = Od - JX[0]);
          const md = TextDecoder[JX[76] + JX[77]][JX[78]],
            Wd = function() {
              dd[JX[0]]++, dd[JX[0]] === Od && (bX((() => Nd(JX[21]))) && (dd[-JX[75]] = JX[22]), dd[JX[0]] = JX[6]);
              for (var Wd = arguments[JX[1]], Fd = new Array(Wd), Rd = JX[6]; Rd < Wd; Rd++) Fd[Rd] = arguments[Rd];
              return (JX[6], VF[JX[55]])(md, this, Fd)
            };
          return wd((() => {
            TextDecoder[JX[76] + JX[77]][JX[78]] = Wd
          })), () => dd[-JX[75]] ? JX[2] : pX((() => TextDecoder[JX[76] + JX[77]][JX[78]] !== Wd ? JX[32] : JX[6]))
        })() : () => pX((() => Cd[JX[91] + JX[92]]())),
        kd = (JX[6], Wm[JX[55]])(),
        fd = (JX[6], VF[JX[43]])(JX[4]),
        Md = (JX[6], VF[JX[43]])(JX[4]);
      let dO = JX[6],
        OO = JX[6],
        mO = JX[6];
      const WO = (JX[6], VF[JX[43]])(JX[4]),
        FO = (JX[6], VF[JX[43]])(JX[4]);
      let RO = JX[4],
        XO = (JX[6], VF[JX[43]])(JX[4]);
      const KO = (...dd) => {
          xX(dd[JX[1]] = JX[2], fd[dO] = dd[JX[6]], Md[dO] = dd[JX[0]], dO++)
        },
        hO = (...dd) => (xX(dd[JX[1]] = JX[0], dd[JX[10]] = JX[3]), (dd[JX[10]] = (Md[dd[JX[6]]] ? FO : WO)[fd[dd[JX[6]]]]) !== JX[4] && dd[JX[10]] !== void JX[6] ? dd[JX[10]] : -JX[0]),
        vO = (JX[6], VF[JX[7]])("d2lvNjQz"),
        QO = (JX[6], VF[JX[7]])("amtsa2plZndu"),
        tO = [
          [(JX[6], VF[JX[7]])("aW9qZndlODNq"), "2"],
          [(JX[6], VF[JX[7]])("a3Bq"), "4"],
          [(JX[6], VF[JX[7]])("dXJocmZm"), "5"]
        ],
        oO = [
          [(JX[6], VF[JX[7]])(JX[80] + JX[79]), JX[7]],
          [(JX[6], VF[JX[7]])(JX[80] + "w="), JX[43]]
        ],
        NO = (JX[6], VF[JX[7]])("eTR5bnM="),
        qO = (JX[6], VF[JX[7]])("aHRleWpldA=="),
        HO = (JX[6], VF[JX[7]])("c2RmbGpneGxmY2pr"),
        yO = [
          [(JX[6], VF[JX[7]])("a3NhZmR1"), JX[81]],
          [(JX[6], VF[JX[7]])("ZGZnYWFzZGFz"), JX[82]],
          [HO, JX[84]],
          [(JX[6], VF[JX[7]])("bGFzZWRraGFz"), "u"],
          [(JX[6], VF[JX[7]])("cW16ZjhrM24="), JX[10]]
        ],
        bO = [
          [NO, JX[103]],
          [qO, JX[83]],
          [(JX[6], VF[JX[7]])("bmI3ZnEy"), JX[12]]
        ],
        TO = (JX[6], VF[JX[7]])("bGtxM20="),
        pO = (JX[6], VF[JX[7]])("bWtxN3" + JX[79]),
        YO = ["mk:tw", "mk:jf"],
        gO = ((...dd) => {
          dd[JX[1]] = JX[6];
          try {
            return dd[JX[12]] = JX[3], (dd[JX[12]] = Fd[(JX[6], VF[JX[7]])("V2ViU29ja2V0")]) === JX[4] || dd[JX[12]] === void JX[6] ? void JX[6] : dd[JX[12]][JX[76] + JX[77]]
          } catch {
            return JX[3]
          }
        })(),
        wO = ["send", "close", "addEventListener", "removeEventListener", JX[88] + JX[87] + JX[84]],
        aO = ["onmessage", "onopen", "onclos" + JX[67], "onerro" + JX[81]];
      let EO = JX[21];
      const JO = () => {
          const dd = Od();
          dd === JX[4] || EO || (EO = Td((() => {
            if (gO !== JX[3] && (JX[6], VF.F)(dd) !== gO) return JX[22];
            for (let Od = JX[6]; Od < wO[JX[1]]; Od++)
              if ((JX[6], VF[JX[55]])(VF[JX[85]], dd, [wO[Od]])) return JX[22];
            for (let Od = JX[6]; Od < aO[JX[1]]; Od++)
              if (dd[aO[Od]] !== JX[4] && dd[aO[Od]] !== JX[3]) return JX[22];
            return JX[21]
          })))
        },
        UO = (JX[6], VF[JX[7]])("RXZlbnQ=");
      let xO = Sm[JX[86]][JX[106]],
        BO = JX[6];
      const SO = () => BO++ === JX[24] ? (BO = JX[6], Nd(JX[21]) ? Sm[JX[16]].CheckFuncHit : JX[6]) : JX[6],
        sO = (JX[6], VF[JX[43]])(JX[4]),
        uO = Wd[JX[1]];
      for (let hd = JX[6]; hd < uO; hd++) {
        const dd = (JX[6], VF[JX[55]])(VF.Y, Wd, [hd]);
        sO[hd] = dd >= 99 && dd <= 122 ? dd : JX[6]
      }
      const VO = (...dd) => {
          return dd[JX[1]] = JX[2], typeof dd[JX[6]] === JX[73] + JX[74] && (JX[6], VF[JX[55]])(VF.O, dd[JX[0]], [(Od = dd[JX[6]], (0, VF.m)(VF.v, Od, []))]) !== JX[4];
          var Od
        },
        iO = new RegExp("^function dispatchEvent\\(\\) \\{\\s*\\[native code\\]\\s*\\}$", ""),
        AO = new RegExp("^function now\\(\\) \\{\\s*\\[native code\\]\\s*\\}$", ""),
        rO = [
          [wX["Dispat" + JX[87] + JX[84]], () => !VO(EventTarget[JX[76] + JX[77]][JX[88] + JX[87] + JX[84]], iO)],
          [wX.PerformanceNow, () => !VO(performance[JX[89]], AO)],
          [wX["DateNo" + JX[85]], () => !VO(Date[JX[89]], AO)]
        ],
        GO = (JX[6], VF[JX[43]])(JX[4]);
      let nO = JX[6];
      const LO = {
        stackCheck: () => {
          let dd = JX[4];
          const Od = bX((() => (dd = od(JX[22]), dd !== JX[4])));
          var md, Wd;
          return dd !== JX[4] && qd === JX[4] && (md = dd[JX[26]], Wd = dd[JX[27]], qd = (0, kR.w)(tX(md, Wd))), Od
        },
        [JX[91] + JX[92]]: (...dd) => {
          dd[JX[1]] = JX[6];
          const Od = Zd();
          if (Od === JX[2]) return JX[2];
          if (Jd[vO]) return JX[5];
          const md = pX((() => Fd[QO] ? JX[13] : JX[6]));
          return md !== JX[6] ? md === JX[13] ? JX[13] : JX[6] : Od === TX ? JX[6] : Od === JX[32] ? JX[32] : (Yd(), Wd = Function[JX[76] + JX[77]], Rd = JX[99], Xd = (...dd) => (dd[JX[1]] = JX[0], dd[JX[6]].writable !== JX[22]), bX((() => {
            const dd = Object.getOwnPropertyDescriptor(Wd, Rd);
            return void 0 !== dd && Xd(dd)
          })) ? JX[44] : JX[6]);
          var Wd, Rd, Xd
        },
        indexPassReplaced: jd,
        [JX[93] + "tSubChanged"]: (...dd) => {
          if (dd[JX[1]] = JX[6], ld === ed || cd) return JX[21];
          const Od = Id();
          return Od !== ed && Od !== ld
        },
        jK: (...dd) => {
          xX(dd[JX[1]] = JX[6], dd[-JX[90]] = uO);
          for (let Od = JX[6]; Od < rO[JX[1]] + nO; Od++) {
            const md = Od < rO[JX[1]] ? rO[Od] : GO[Od - rO[JX[1]]];
            md[JX[6]] < dd[-JX[90]] && Td(md[JX[0]]) && (dd[-JX[90]] = md[JX[6]])
          }
          return dd[-JX[90]] < uO ? sO[dd[-JX[90]]] : JX[6]
        },
        vQ: () => kd ? Wm[JX[43]] : 8,
        [JX[95] + JX[96] + "Subs"]: (...dd) => {
          dd[JX[1]] = JX[6];
          const Od = hd[JX[94]].qT[JX[95] + JX[96]];
          return typeof Od === JX[97] && Od > JX[6] ? Od > JX[98] ? JX[98] : Od : JX[6]
        },
        ["getCom" + JX[111]]: (...dd) => {
          xX(dd[JX[1]] = JX[6], dd[-JX[14]] = JX[3], dO = JX[6]);
          for (let md = JX[6]; md < sd; md++) KO(Sd[md], JX[22]);
          for (let md = JX[6]; md < tO[JX[1]]; md++) Jd[tO[md][JX[6]]] && KO(tO[md][JX[0]], JX[22]);
          const Od = pX((() => yX(atob[JX[99]](), Qd) ? JX[6] : JX[0]));
          Od === JX[0] && KO(JX[100], JX[22]), Yd();
          const Wd = Od === TX ? TX : pX(((...dd) => {
            dd[JX[1]] = JX[6];
            const Od = Object.getOwnPropertyDescriptor(window, "atob");
            return Od === JX[3] ? TX : Od[JX[101]] !== JX[3] ? JX[0] : JX[6]
          }));
          Wd === JX[0] && KO(JX[42], JX[22]);
          const Fd = Wd === TX;
          for (let md = JX[6]; md < oO[JX[1]] && !Fd; md++) Jd[oO[md][JX[6]]] && KO(oO[md][JX[0]], JX[22]);
          const Rd = dO > sd;
          dd[JX[102]] = JX[4], sd === JX[6] && (Vd > JX[6] ? dd[JX[102]] = ud[JX[6]] : Gd ? dd[JX[102]] = "fp" : Rd || (dd[JX[102]] = Jd[NO] ? JX[103] : Jd[qO] ? JX[83] : JX[4]));
          for (let md = JX[6]; md < yO[JX[1]] && !Fd; md++) Jd[yO[md][JX[6]]] && KO(yO[md][JX[0]], JX[22]);
          const Xd = dO,
            Kd = (JX[6], OX[JX[20]])(),
            hd = Kd !== JX[4] && (JX[6], zO.n)(Kd);
          hd && !Fd && KO(Kd, JX[21]), Dd && KO("ix", JX[21]), Bd && KO("il", JX[21]);
          for (let md = JX[6]; md < Vd; md++) KO(ud[md], JX[22]);
          for (let md = JX[6]; md < bO[JX[1]]; md++) Jd[bO[md][JX[6]]] && KO(bO[md][JX[0]], JX[22]);
          Jd[TO] && KO("mk:lk", JX[22]);
          const vd = ((...dd) => {
            dd[JX[1]] = JX[0];
            for (let Od = JX[6]; Od < YO[JX[1]]; Od++)
              if (dd[JX[6]] === YO[Od]) return YO[Od];
            return JX[4]
          })(Jd[pO]);
          if (vd !== JX[4] && KO(vd, JX[22]), md !== JX[4] && gd(md.emitReplaced) === JX[22] && KO("mk:em", JX[22]), EO && KO("3s", JX[21]), VF.S && KO("3b", JX[21]), Yd(), pd && KO("3d", JX[21]), Fd && KO("3g", JX[21]), Kd === JX[4] || hd || KO(Kd, JX[21]), qd !== JX[4] && KO(qd, JX[21]), bd === JX[4] && md !== JX[4]) {
            const dd = gd(md[JX[91] + "mMeshHitStack"]);
            typeof dd === JX[50] && (bd = function(dd, Od, md) {
              let Wd = 0;
              for (; Wd < md && -1 === FX(dd, Od[Wd]);) Wd++;
              return (0, kR.i)(tX(dd, Wd < md ? Od[Wd] : null))
            }(dd, td, td[JX[1]] - JX[0]))
          }
          var od;
          if (bd !== JX[4] && KO(bd, JX[21]), Hd === JX[4] && Wm[JX[104]] !== JX[4] && xX((od = Wm[JX[104]], Hd = (0, kR.e)(qX(od).reader)), yd = HX(Wm[JX[104]], gd((() => Wm[JX[67]] === JX[4] ? JX[4] : (JX[6], VF.$)(Wm[JX[67]]))))), Hd !== JX[4] && KO(Hd, JX[21]), yd !== JX[4] && KO(yd, JX[21]), dO === JX[6]) return JX[4];
          if (dd[JX[102]] === JX[4] && Md[JX[6]] && !(JX[6], kR[JX[55]])(fd[JX[6]]))
            for (let md = JX[0]; md < Xd; md++)
              if (Md[md] && (JX[6], kR[JX[55]])(fd[md])) {
                const dd = fd[md];
                for (let Od = md; Od > JX[6]; Od--) xX(fd[Od] = fd[Od - JX[0]], Md[Od] = Md[Od - JX[0]]);
                xX(fd[JX[6]] = dd, Md[JX[6]] = JX[22]);
                break
              } if (xX(dd[JX[16]] = JX[6], dd[JX[5]] = dd[JX[102]] === JX[4] ? JX[6] : Xd), dd[JX[5]] > JX[6] && Kd !== JX[4] && hd && !Fd) {
            for (let Od = dd[JX[5]]; Od > JX[6]; Od--) xX(fd[Od] = fd[Od - JX[0]], Md[Od] = Md[Od - JX[0]]);
            xX(fd[JX[6]] = Kd, Md[JX[6]] = JX[21], dd[JX[16]] = JX[0], dd[JX[5]]++)
          }
          if (dd[JX[105]] = JX[6], OO++ % JX[2] === JX[0])
            for (let md = JX[0]; md < dO; md++) hO(md) < hO(dd[JX[105]]) && (dd[JX[105]] = md);
          const Nd = fd[dd[JX[105]]];
          (Md[dd[JX[105]]] ? FO : WO)[Nd] = mO++;
          const Td = dd[JX[105]] >= dd[JX[16]] && dd[JX[105]] < dd[JX[5]];
          if (!Md[dd[JX[105]]] || Nd === dd[JX[102]] || dd[JX[105]] === JX[6] && !Td) return Nd === JX[84] ? (JX[6], kR.z)(Jd[HO], kR[JX[20]]) : Nd;
          const wd = (dd[-JX[14]] = dd[JX[102]]) !== JX[4] && dd[-JX[14]] !== void JX[6] ? dd[-JX[14]] : fd[JX[6]];
          return wd !== RO && xX(RO = wd, XO = (JX[6], VF[JX[43]])(JX[4])), XO[Nd] ??= (JX[6], kR[JX[103]])(Nd, wd)
        }
      };
      let PO = Sm[JX[86]][JX[106]];
      const cO = () => xO !== Sm[JX[86]][JX[106]] ? xO : PO;
      let jO = JX[6],
        DO = JX[2],
        eO = JX[6],
        IO = JX[6];
      return {
        checks: LO,
        checkEvent: (...dd) => {
          dd[JX[1]] = JX[0];
          try {
            const Od = Fd[UO];
            if (typeof Od === JX[73] + JX[74] && !(dd[JX[6]] instanceof Od) && !(JX[6], VF.x)(dd[JX[6]])) return xO = Sm[JX[86]].NotEvent, JX[6];
            if (dd[JX[6]].isTrusted === JX[21]) return JX[6];
            let md = JX[6];
            for (const Wd in dd[JX[6]]) md++;
            return md < JX[49] ? (xO = Sm[JX[86]]["FewPropertie" + JX[82]], JX[6]) : SO()
          } catch {}
          return JX[6]
        },
        checkPadCall: () => {
          try {
            return SO()
          } catch {
            return JX[6]
          }
        },
        usedProp: cO,
        watchHeld: (...dd) => {
          xX(dd[JX[1]] = JX[2], dd[JX[2]] = JX[3]);
          const Od = wd((() => {
            dd[JX[2]] = dd[JX[0]]()
          }));
          GO[nO++] = [dd[JX[6]], () => !Od || dd[JX[0]]() !== dd[JX[2]]]
        },
        Et: (...dd) => {
          dd[JX[1]] = JX[6];
          const Od = jd();
          return (dd => {
            let Od = JX[3],
              Wd = JX[3];
            if (md !== JX[4]) {
              const dd = gd(md.iK),
                Fd = "v3" === dd ? JX[5] : "v5" === dd ? JX[24] : "v6" === dd ? JX[32] : JX[2];
              Fd !== JX[2] && (DO = Fd);
              const Rd = gd(md["inbuil" + JX[109] + JX[110]]);
              typeof Rd === JX[97] && Rd >= JX[6] && Rd <= JX[107] && (Rd | JX[6]) === Rd && (eO = Rd), xX(Od = gd(md.reflectApplyHit), Wd = gd(md.definerHit))
            }
            const Fd = dd ? JX[68] : "11" === Wd ? JX[107] : "13" === Wd ? 13 : Od !== JX[3] && Od !== JX[4] ? JX[2] : "10" === Wd ? JX[49] : "12" === Wd ? 12 : JX[6];
            Fd !== JX[6] && (IO = Fd)
          })(Od), jO++ % 10 === JX[6] && (JO(), bX((() => !yX(Fd[Rd][JX[99]][JX[99]](), Qd))) && (PO = PO === Sm[JX[86]][JX[108]] ? Sm[JX[86]][JX[108]] : Sm[JX[86]].Fr), bX((() => !yX(Fd[Rd][JX[99]](), Qd))) && (PO = Sm[JX[86]][JX[108]])), {
            flags: Od ? Sm[JX[16]].Butto : JX[6],
            values: [
              [Sm[JX[42]].PhysicsVersion, DO],
              [Sm[JX[42]]["Inbuil" + JX[109] + JX[110]], eO],
              [Sm[JX[42]]["AltCom" + JX[111]], IO],
              [Sm[JX[42]]["ProbeUsedPro" + JX[7]], cO()]
            ]
          }
        }
      }
    };
    const BX = "[bloxd-wasm-client]",
      SX = "bloxdWasmDownloadFailed",
      sX = Dm.f,
      uX = "boot",
      VX = "playSources",
      iX = "wasmBuild",
      AX = "bloxd-wasm-joined",
      rX = "bloxd-wasm-first-view",
      GX = "bloxd-wasm-playable-legacy",
      nX = 1048576,
      LX = 8 * nX,
      PX = 1006,
      zX = 1e3,
      cX = "You lost connection to the server.",
      jX = "general:lostConnection",
      DX = 1048576,
      eX = 5e3,
      IX = 100,
      lX = [2e3, 1e4, 3e4],
      CX = 3e4;
    let ZX = null,
      kX = null,
      fX = !1,
      MX = !1,
      dK = !1,
      OK = null,
      mK = null,
      WK = null,
      FK = null,
      RK = null,
      XK = null,
      KK = null;
    const hK = new class {
      constructor(dd, Od) {
        let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => performance.now();
        this.master = dd, this.soundOn = Od, this.now = md, this.player = null, this.local = [], this.stopped = !1
      }
      get loaded() {
        return null !== this.player
      }
      get queued() {
        return this.local.length
      }
      preload(dd) {
        var Od;
        this.stopped || (null === (Od = this.player) || void 0 === Od || Od.preload(dd))
      }
      endSession() {
        var dd;
        null === (dd = this.player) || void 0 === dd || dd.cancelPreload(), this.freeSounds()
      }
      freeSounds() {
        var dd;
        null === (dd = this.player) || void 0 === dd || dd.freeSoundsAfterGame()
      }
      load(dd) {
        if (null !== this.player || this.stopped) return;
        this.player = dd, dd.setMaster(this.master, this.soundOn);
        const Od = this.now(),
          md = this.local;
        this.local = [];
        for (const Fd of md)
          if (!(Fd.stopped || !Fd.loop && Od - Fd.at >= 300)) try {
            this.start(Fd, dd, Od)
          } catch (Wd) {
            console.error("[bloxd-wasm-client] a queued sound wouldn't start", Wd)
          }
      }
      start(dd, Od, md) {
        const {
          name: Wd,
          pos: Fd,
          ear: Rd,
          maxHearDist: Xd,
          refDistance: Kd,
          loop: hd,
          fade: vd
        } = dd, Qd = Od.playGame(Wd, Jm(dd, md), Fd, Rd, Xd, Kd, hd);
        if (dd.sound = Qd, 1 !== dd.rate && Qd.rate(dd.rate), null !== dd.panner && Qd.setPannerAttr(dd.panner), null !== dd.moved && Qd.setPosition(dd.moved), null !== vd && md - vd.at < vd.ms) {
          const Od = Em(this.master);
          Od > 0 ? Qd.fade(0, dd.volume * Od, vd.at + vd.ms - md) : Qd.setRelativeVolume(dd.volume)
        }
      }
      onAudioEvent(dd, Od, md, Wd) {
        var Fd, Rd;
        return null === (Fd = null === (Rd = this.player) || void 0 === Rd ? void 0 : Rd.onAudioEvent(dd, Od, md, Wd)) || void 0 === Fd || Fd
      }
      applyListener(dd) {
        var Od;
        null === (Od = this.player) || void 0 === Od || Od.applyListener(dd)
      }
      playGame(dd, Od, md, Wd, Fd, Rd, Xd) {
        if (this.stopped) return am.d;
        if (this.player) return this.player.playGame(dd, Od, md, Wd, Fd, Rd, Xd);
        const Kd = this.now();
        this.local = this.local.filter((dd => !dd.stopped && (dd.loop || Kd - dd.at < 300)));
        const hd = {
          name: dd,
          volume: Em(Od),
          fade: null,
          pos: md && [md[0], md[1], md[2]],
          ear: Wd && [Wd[0], Wd[1], Wd[2]],
          maxHearDist: Fd,
          refDistance: Rd,
          loop: Xd,
          rate: 1,
          panner: null,
          moved: null,
          at: Kd,
          stopped: !1,
          sound: null
        };
        this.local.push(hd);
        const vd = {
          stop: () => {
            var dd;
            return hd.stopped = !0, null === (dd = hd.sound) || void 0 === dd || dd.stop(), vd
          },
          fade: (dd, Od, md) => {
            if (hd.sound) return hd.sound.fade(dd, Od, md), vd;
            const Wd = Em(this.master),
              Fd = Em(Wd > 0 ? Od / Wd : Od > 0 ? hd.volume : 0),
              Rd = this.now(),
              Xd = Jm(hd, Rd);
            return hd.volume = Fd, hd.fade = md > 0 && Xd !== Fd ? {
              from: Xd,
              at: Rd,
              ms: md
            } : null, vd
          },
          rate: dd => (hd.sound ? hd.sound.rate(dd) : hd.rate = dd, vd),
          getVolume: () => hd.sound ? hd.sound.getVolume() : hd.volume * Em(this.master),
          getRelativeVolume: () => hd.sound ? hd.sound.getRelativeVolume() : hd.volume,
          setRelativeVolume: dd => (hd.sound ? hd.sound.setRelativeVolume(dd) : (hd.volume = Em(dd), hd.fade = null), vd),
          setPannerAttr: dd => (hd.sound ? hd.sound.setPannerAttr(dd) : hd.panner = {
            ...dd
          }, vd),
          setPosition: dd => (hd.sound ? hd.sound.setPosition(dd) : hd.moved = [dd[0], dd[1], dd[2]], vd)
        };
        return vd
      }
      setMaster(dd, Od) {
        var md;
        this.master = dd, this.soundOn = Od, null === (md = this.player) || void 0 === md || md.setMaster(dd, Od)
      }
      stop() {
        var dd;
        this.stopped = !0, null === (dd = this.player) || void 0 === dd || dd.stopAll();
        for (const Od of this.local) Od.stopped = !0;
        this.local = []
      }
    }((0, Fm.d)(), !0);
    let vK = {
        wasm: "unknown",
        client: String(VO.c)
      },
      QK = null,
      tK = !1,
      oK = () => {};
    const NK = new Promise((dd => {
      oK = Od => {
        tK = !0, dd(Od)
      }
    }));
    let qK = () => {};
    const HK = new Promise((dd => {
      qK = dd
    }));
    let yK, bK = null,
      TK = null,
      pK = null,
      YK = null,
      gK = null,
      wK = null,
      aK = null,
      EK = null,
      JK = null,
      UK = null,
      xK = null,
      BK = null,
      SK = null,
      sK = null,
      uK = null,
      VK = null,
      iK = null,
      AK = null,
      rK = null,
      GK = !1,
      nK = null;
    const LK = new Set,
      PK = new Set;

    function zK(dd) {
      if (!LK.has(dd)) {
        LK.add(dd);
        for (const md of PK) try {
          md(dd)
        } catch (Od) {
          console.error(`${BX} a startup listener threw`, Od)
        }
      }
    }

    function cK(dd) {
      GK = !0, dd.isStopped || zK("texturesIn")
    }
    let jK = 1,
      DK = -1 / 0,
      eK = -1 / 0,
      IK = -1 / 0,
      lK = !1,
      CK = null,
      ZK = !1,
      kK = !1,
      fK = 0,
      MK = null,
      dh = !1;
    const Oh = {
      dropped: -1 / 0,
      pause: -1 / 0,
      backlog: -1 / 0
    };
    let mh = 0,
      Wh = 0,
      Fh = null,
      Rh = null,
      Xh = null,
      Kh = null;
    const hh = new WeakMap;
    let vh = null,
      Qh = null,
      th = !1,
      oh = null,
      Nh = null,
      qh = null,
      Hh = null,
      yh = null,
      bh = null,
      Th = 0;
    const ph = new Set;
    let Yh = 0,
      gh = 0,
      wh = 0,
      ah = null,
      Eh = null,
      Jh = null,
      Uh = null,
      xh = -1 / 0,
      Bh = null;
    const Sh = new Set;
    let sh = !1,
      uh = null;
    const Vh = new Map,
      ih = new Set;
    let Ah = !1;
    const rh = {
      adapter: null,
      boundAtMs: null,
      indirectHangs: null,
      restoresSkipped: null
    };
    let Gh = null,
      nh = () => [0, 0],
      Lh = () => {},
      Ph = () => {},
      zh = null,
      ch = null;
    const jh = new class {
      constructor(dd) {
        this.reached = dd, this.next = 1
      }
      observe(dd) {
        if (!(dd < this.next)) {
          for (; this.next <= dd;) this.next *= 2;
          this.reached(dd)
        }
      }
    }((dd => {
      console.warn(`${BX} chunk cancels from the server this session: ${dd}`)
    }));
    let Dh = 1,
      eh = null,
      Ih = null,
      lh = null,
      Ch = null,
      Zh = null,
      kh = !1,
      fh = !1,
      Mh = 0,
      dv = null,
      Ov = !1,
      mv = null,
      Wv = null;
    const Fv = new xW.d(new Cm.b);
    let Rv = "",
      Xv = null,
      Kv = null,
      hv = !1;
    const vv = new class {
      constructor(dd) {
        this.lQ = dd, this.lossPending = !1, this.undrawnSinceMs = null, this.lastFrameMs = 0, this.shown = !1, this.jK = !1
      }
      isShown() {
        return this.shown
      }
      deviceLost() {
        this.lossPending = !0
      }
      frame(dd, Od, md) {
        (0, tm.d)(dd) && (this.lossPending = !1);
        const Wd = md - this.lastFrameMs;
        this.lastFrameMs = md, this.lossPending && Od && (0, tm.i)(dd) ? (null === this.undrawnSinceMs || Wd > 1e3) && (this.undrawnSinceMs = md) : this.undrawnSinceMs = null, this.show(this.jK || null !== this.undrawnSinceMs && md - this.undrawnSinceMs >= 2e3)
      }
      hold(dd) {
        this.jK = dd, this.show(dd || this.shown)
      }
      stop() {
        this.jK = !1, this.lossPending = !1, this.undrawnSinceMs = null, this.show(!1)
      }
      show(dd) {
        dd !== this.shown && (this.shown = dd, this.lQ(dd))
      }
    }((dd => {
      hd.j.lQ(qd.n, dd)
    }));
    let Qv = !1;
    const tv = new class {
        constructor(dd) {
          let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ym.i;
          this.lQ = dd, this.hidden = Od, this.countdown = null, this.stuckJoins = 0, this.stuck = null
        }
        join(dd) {
          this.end(), this.countdown = new ym.c(15e3, (() => {
            this.countdown = null, this.stuckJoins++, this.show(this.stuckJoins > 2 ? "reload" : "retry")
          }), (() => this.hidden() || !dd()))
        }
        shown() {
          this.stuckJoins = 0, this.end()
        }
        end() {
          var dd;
          null === (dd = this.countdown) || void 0 === dd || dd.stop(), this.countdown = null, this.show(null)
        }
        show(dd) {
          dd !== this.stuck && (this.stuck = dd, this.lQ(dd))
        }
      }((dd => {
        hd.j.lQ(qd.i, dd)
      })),
      ov = new class {
        constructor(dd) {
          let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => performance.now();
          this.Wt = dd, this.now = Od, this.lostAtMs = null, this.asked = !1, this.lastRestore = null, this.watched = new WeakSet
        }
        watch(dd, Od) {
          this.watched.has(dd) || (this.watched.add(dd), dd.addEventListener("webglcontextlost", (() => {
            Od() && this.contextLost()
          })), dd.addEventListener("webglcontextrestored", (() => {
            Od() ? this.contextRestored() : (this.take(), this.lastRestore = null)
          })))
        }
        frame(dd, Od) {
          (0, tm.i)(dd) && Od && null !== this.lostAtMs && this.now() - this.lostAtMs >= 1e3 && (this.asked = !0)
        }
        contextLost() {
          null === this.lostAtMs && (this.lostAtMs = this.now(), this.asked = !1)
        }
        unheldRestore(dd) {
          const Od = this.lastRestore;
          return null !== Od && dd - Od.atMs < 3e4 ? Od : null
        }
        contextRestored() {
          const dd = this.take();
          if (null === dd) this.lastRestore = null;
          else {
            var Od, md;
            const Wd = this.unheldRestore(dd.lostAtMs);
            this.lastRestore = {
              atMs: this.now(),
              firstLostAtMs: null !== (Od = null === Wd || void 0 === Wd ? void 0 : Wd.firstLostAtMs) && void 0 !== Od ? Od : dd.lostAtMs,
              asked: null !== (md = null === Wd || void 0 === Wd ? void 0 : Wd.asked) && void 0 !== md && md || dd.asked
            };
            const Fd = dd.asked ? "restore_context" : "natural";
            this.Wt(`webgl_restored_${Fd}_${dd.delay}`, `WebGL2 context restored (${Fd}, wasm)`)
          }
        }
        gaveUp() {
          const dd = this.take();
          if (null !== dd) {
            var Od;
            const md = this.unheldRestore(dd.lostAtMs),
              Wd = null === md ? dd.delay : (0, om.g)(this.now() - md.firstLostAtMs),
              Fd = dd.asked || null !== (Od = null === md || void 0 === md ? void 0 : md.asked) && void 0 !== Od && Od ? "restore_tried" : "restore_untried";
            this.Wt(`webgl_rejoin_${Fd}_${Wd}`, "WebGL2 context not restored: rejoining (wasm)")
          }
          this.lastRestore = null
        }
        take() {
          const dd = this.lostAtMs;
          return null === dd ? null : (this.lostAtMs = null, {
            lostAtMs: dd,
            delay: (0, om.g)(this.now() - dd),
            asked: this.asked
          })
        }
      }(NW.reportRenderRecovery),
      Nv = new class {
        constructor(dd) {
          var Od, md, Wd, Fd;
          this.deps = dd, this.firstLostAtMs = null, this.lastLostAtMs = 0, this.heldReload = null, this.generation = 0, this.watched = new WeakSet, this.pageHideWatched = !1, this.storage = void 0, this.now = void 0, this.wallNow = void 0, this.setTimer = void 0, this.storage = null !== (Od = dd.storage) && void 0 !== Od ? Od : qm.o, this.now = null !== (md = dd.now) && void 0 !== md ? md : performance.now.bind(performance), this.wallNow = null !== (Wd = dd.wallNow) && void 0 !== Wd ? Wd : Date.now, this.setTimer = null !== (Fd = dd.setTimer) && void 0 !== Fd ? Fd : (dd, Od) => {
            setTimeout(dd, Od)
          }
        }
        watch(dd, Od) {
          this.watched.has(dd) || (this.watched.add(dd), dd.addEventListener("webglcontextlost", (() => {
            Od() && this.lost()
          })), dd.addEventListener("webglcontextrestored", (() => {
            this.restored()
          })), this.pageHideWatched || (this.pageHideWatched = !0, window.addEventListener("pagehide", (() => {
            this.pageHide()
          })), document.addEventListener("visibilitychange", (() => {
            this.pageHide(!document.hidden)
          }))))
        }
        lost() {
          const dd = this.now();
          null === this.firstLostAtMs && (this.firstLostAtMs = dd, this.writeMarker({
            lostAt: this.wallNow()
          })), this.lastLostAtMs = dd, null === this.heldReload && this.generation++
        }
        restored() {
          if (null === this.firstLostAtMs || null !== this.heldReload) return;
          const dd = this.now(),
            Od = ++this.generation;
          this.setTimer((() => {
            Od === this.generation && this.end("restored", dd)
          }), 3e4)
        }
        reload(dd) {
          let Od = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (null !== this.heldReload) return;
          if (null === this.firstLostAtMs && (Od ? this.lastLostAtMs = this.now() : this.lost()), this.deps.probe()) return this.end("cleared_reload"), void dd();
          this.heldReload = dd, this.deps.hold(!0);
          const md = ++this.generation,
            Wd = () => this.lastLostAtMs + Xm.c + 5e3,
            Fd = () => {
              this.setTimer(Rd, Math.max(0, Math.min(5e3, Wd() - this.now())))
            },
            Rd = () => {
              md === this.generation && (this.deps.probe() ? this.release("cleared_reload", dd) : this.now() >= Wd() ? this.release("gave_up", dd) : Fd())
            };
          Fd()
        }
        releaseNow() {
          null !== this.heldReload && this.release("gave_up", this.heldReload)
        }
        forget() {
          null !== this.firstLostAtMs && this.clear()
        }
        pageHide() {
          let dd = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          if (null === this.firstLostAtMs) return;
          const Od = (0, Nm.e)(this.storage);
          null !== Od && this.writeMarker(dd ? {
            lostAt: Od.lostAt
          } : {
            ...Od,
            leftAt: this.wallNow()
          })
        }
        release(dd, Od) {
          this.end(dd), Od()
        }
        end(dd) {
          let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.now();
          const md = this.firstLostAtMs;
          if (this.clear(), null !== md) {
            const {
              code: Wd,
              message: Fd
            } = (0, Nm.j)(dd, Od - md);
            this.deps.Wt(Wd, Fd)
          }
        }
        clear() {
          this.firstLostAtMs = null, this.generation++, null !== this.heldReload && (this.heldReload = null, this.deps.hold(!1)), this.storage.removeItem(Nm.c)
        }
        writeMarker(dd) {
          this.storage.setItem(Nm.c, dd)
        }
      }({
        Wt: NW.reportRenderRecovery,
        probe: () => Hm("rust_webgl1" === (0, qR.E)()),
        hold: dd => {
          vv.hold(dd)
        }
      });
    let qv = !1,
      Hv = !0,
      yv = null,
      bv = !1,
      Tv = !1;

    function pv() {
      if (null === eh) return null;
      const {
        canvas: dd,
        backend: Od
      } = eh;
      return {
        canvas: dd,
        renderer: wm.e[Od]
      }
    }

    function Yv() {
      return WK ??= Promise.all([md.e(177), md.e(91), md.e(225), md.e(158), md.e(246), md.e(245), md.e(244), md.e(223), md.e(50), md.e(161), md.e(243), md.e(72)]).then((() => md(45347))).then((dd => (mK = dd, Object.assign(globalThis, {
        bloxdPreviewPage: dd.pagePreviews()
      }), dd)), (dd => {
        throw WK = null, dd
      })), WK
    }

    function gv() {
      return OK ??= md.e(70).then((() => md(55064))).catch((dd => {
        throw OK = null, new Id.e(dd)
      })), OK
    }
    class wv {
      constructor() {
        this.host = null
      }
      open(dd) {
        return null !== this.host ? dd(this.host) : Yv().then((Od => (this.host ??= new Od.WasmPreviewHost(Od.pagePreviews()), dd(this.host))))
      }
      openMob(dd) {
        return this.open((Od => Od.openMob(dd)))
      }
      openPet(dd) {
        return this.open((Od => Od.openPet(dd)))
      }
      openMobLineup(dd) {
        return this.open((Od => Od.openMobLineup(dd)))
      }
      openCharacter(dd, Od) {
        return this.open((md => md.openCharacter(dd, Od)))
      }
    }

    function av() {
      dK || (dK = !0, hR.j.setHost(new wv), (0, bW.m)(), FR.g.setFollower(AQ), Object.assign(globalThis, {
        bloxdPreviews: hR.j
      }))
    }

    function Ev() {
      Yv().then((dd => {
        dd.pagePreviews().prefetch()
      }), (() => {}))
    }

    function Jv() {
      let dd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      if (MX) return;
      MX = !0, qv = "play" === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "shell"), Hv = !qv, console.info(`${BX} starting`), fX || (fX = !0, (0, qd.ab)(new pm(Cv, WQ, pv)), (0, od.j)(new Ym), (0, qd.$)(new gm((() => performance.now() - DK))), (0, qd.R)()), qv && hd.j.subscribe("appManagerUpdated|gameState", lv), av(), (0, NW.setCrashScreen)(Tt), (0, IF.g)(), (0, Wm.m)();
      let Od = null;
      try {
        Od = EX("xmtbivasfeq", (() => {
          var dd, Od;
          return null !== (dd = null === (Od = bK) || void 0 === Od ? void 0 : Od.ws) && void 0 !== dd ? dd : null
        }), dd, "jckntermls")
      } catch (Fd) {
        console.error(`${BX} probes`, Fd)
      }
      const Wd = function() {
        const dd = (0, aF.i)(),
          Od = (0, aF.e)();
        let md = !1;
        return Wd => {
          dd && !md && (md = !0, (0, NW.reportStaleBuildReload)(dd, Od, Wd))
        }
      }();
      GQ(), qv || function() {
        const dd = function(dd) {
          var Od;
          const md = new URLSearchParams(dd),
            Wd = md.get("game");
          return Wd ? {
            game: Wd,
            lobby: null !== (Od = md.get("lobby")) && void 0 !== Od ? Od : null
          } : null
        }(window.location.search);
        if (dd) return (0, iO.k)(dd.game) && GQ().request(), void Bv(dd.game, dd.lobby);
        const Od = new URLSearchParams(window.location.search).get("ws");
        if (!Od) return;
        NK.then((dd => {
          dd && async function(dd, Od) {
            try {
              await (0, Id.p)(dd), oh = hQ(new WebSocket(Od)), null !== oh && RR.e.setGame(null), Uv()
            } catch (Fd) {
              console.error(`${BX} ?ws=${Od} did not attach`, Fd)
            }
          }(dd, Od)
        }))
      }(), async function(dd) {
        var Od, Wd, Rd, Xd, Kd, vd;
        if ("undefined" === typeof WebAssembly) return aQ("noWebAssembly", "unsupported", "This browser has no WebAssembly"), null;
        const Qd = (0, qR.S)();
        let od = await (0, qR.J)();
        if (JQ(od) && function() {
            const dd = Date.now();
            return !(0, eO.s)((0, eO.u)(), xQ, dd, eO.c) && (0, eO.p)(xQ, dd, eO.c)
          }()) {
          const dd = BQ(od, Qd),
            Od = await async function(dd) {
              let {
                decline: Od,
                detail: md,
                details: Wd
              } = dd;
              console.warn(`${BX} ${md}: waiting for a WebGL context`);
              const Fd = performance.now(),
                Rd = await TR({
                  sleep: (dd, Od) => (0, dm.c)(dd, Od).catch((() => {})),
                  repick: async () => {
                    const dd = await (0, qR.V)();
                    return JQ(dd) ? null : {
                      xN: dd
                    }
                  },
                  showScreen: dd => {
                    const md = (0, UO.l)("blockedAfterLoss" === Od ? "graphicsLost" : "noContext");
                    return sO({
                      ...md,
                      cancel: qv ? md.cancel : null
                    }, dd)
                  }
                }),
                Xd = String(Math.round(performance.now() - Fd));
              if (null === Rd.picked) {
                const dd = Rd.gaveUp ? "waited" : "left";
                return (0, NW.reportLoadRecovery)({
                  step: "noContext",
                  outcome: "gaveUp",
                  tries: Rd.tries,
                  detail: `${md}; ${dd}`,
                  details: {
                    ...Wd,
                    waitedMs: Xd
                  }
                }), Rd.gaveUp ? {
                  gaveUp: !0
                } : ((0, NO.i)("/"), null)
              }
              const {
                xN: Kd
              } = Rd.picked;
              if (!(0, Dm.p)(Kd)) {
                var hd;
                const dd = null !== (hd = null === Kd || void 0 === Kd ? void 0 : Kd.backend) && void 0 !== hd ? hd : "none";
                (0, NW.reportLoadRecovery)({
                  step: "noContext",
                  outcome: "recovered",
                  tries: Rd.tries,
                  detail: md,
                  details: {
                    ...Wd,
                    backend: dd,
                    waitedMs: Xd
                  }
                }), null !== Kd && (0, qR.O)(Kd.backend)
              }
              return Rd.picked
            }(dd);
          if (null === Od) return null;
          if ("gaveUp" in Od) return (0, NW.setCrashBackend)("unsupported"), aQ("browser", dd.decline, dd.detail, {
            ...dd.details,
            afterWait: "true"
          }), null;
          od = Od.xN
        }
        const Nd = await async function(dd, Od) {
          const md = (0, Dm.p)(dd) ? BQ(dd, Od) : null;
          if (null === md || void 0 === md || !md.retries) return dd;
          console.warn(`${BX} ${md.detail}: picking again in ${EQ} ms`), await new Promise((dd => {
            setTimeout(dd, EQ)
          }));
          const Wd = await (0, qR.V)();
          if (!(0, Dm.p)(Wd)) {
            var Fd;
            (0, NW.reportNoBackendRetry)("reprobed", md.decline, md.detail, {
              ...md.details,
              backend: null !== (Fd = null === Wd || void 0 === Wd ? void 0 : Wd.backend) && void 0 !== Fd ? Fd : "none"
            }), null !== Wd && (0, qR.O)(Wd.backend)
          }
          return Wd
        }(od, Qd);
        if ((0, NW.setCrashBackend)((0, Dm.p)(Nd) ? "unsupported" : null !== (Od = null === Nd || void 0 === Nd ? void 0 : Nd.backend) && void 0 !== Od ? Od : "none"), (0, Dm.p)(Nd)) return function(dd) {
          let {
            decline: Od,
            detail: md,
            details: Wd,
            retries: Fd
          } = dd;
          if (Fd && (0, DO.r)()) return (0, NW.reportNoBackendRetry)("reload", Od, md, Wd), void SQ(`${md}, again after ${EQ} ms`);
          aQ("browser", Od, md, Fd ? {
            ...Wd,
            afterReload: String(DO.B)
          } : Wd)
        }(BQ(Nd, Qd)), null;
        if ((0, rR.o)("render")) try {
          const {
            startRenderDebug: dd
          } = await Promise.all([md.e(91), md.e(57)]).then((() => md(5410)));
          dd(Nd)
        } catch (aO) {
          console.warn("The render debug topic didn't load", aO)
        }
        if ((0, rR.o)("renderlite")) try {
          const {
            startRenderLite: dd
          } = await Promise.all([md.e(307), md.e(58)]).then((() => md(55073)));
          lh = dd(Nd)
        } catch (aO) {
          console.warn("The renderlite debug topic didn't load", aO)
        }
        if ((0, rR.o)("renderprobe")) try {
          const {
            startRenderProbe: dd
          } = await md.e(59).then((() => md(55078)));
          dd(Nd)
        } catch (aO) {
          console.warn("The renderprobe debug topic didn't load", aO)
        }
        if ("webgl" === (null === Nd || void 0 === Nd ? void 0 : Nd.backend) && qv && "address" !== DO.y.reason) {
          const dd = YF(Nd);
          null !== dd && (0, IO.j)(dd)
        }
        const qd = null !== (Wd = null === Nd || void 0 === Nd ? void 0 : Nd.backend) && void 0 !== Wd ? Wd : null;
        rh.adapter = null !== (Rd = null === Nd || void 0 === Nd ? void 0 : Nd.adapter) && void 0 !== Rd ? Rd : null, rh.boundAtMs = null, rh.indirectHangs = null, rh.restoresSkipped = null;
        const Hd = !(0, Dm.ab)();
        null === Nd || (0, Dm.F)(Nd.reason) || console.info(`${BX} drawing with ${Nd.backend}: ${Nd.reason}`);
        const yd = (0, qR.C)();
        Sd("previews"), qK(!0), (0, Id.w)((dd => {
          try {
            null !== qd && (zh = dd.startSkyFeed, VQ(), function(dd) {
              var Od, md;
              nh = dd.rasterText, qh = dd.setTextLocalPlayer, dd.setTextLocalPlayer(null !== (Od = null === (md = Nh) || void 0 === md ? void 0 : md.info.playerDbId) && void 0 !== Od ? Od : null), Lh = dd.drainTextRerasters, Ph = dd.loadTextIcons, dd.warmText((() => kh)), dd.textChanged(), kh && setTimeout(Ph, 0)
            }(dd), ch = dd.startShellAnalytics, jQ())
          } finally {
            Tv || (Ch = dd.followMenuPrefs({
              setSoundPrefs: RQ,
              setEnvPrefs: XQ,
              setUiPrefs: FQ,
              setLookPrefs: KQ
            }))
          }
        })), (0, Id.q)(hK).catch((dd => {
          console.warn(`${BX} the game code did not load: a join asks again`, dd)
        }));
        const bd = (0, qR.j)(Nd);
        let Td, pd;
        bd.catch((() => {})), "loading" === (0, GO.y)() && (ud(), Sd("load"));
        try {
          Td = function(dd) {
            const Od = null !== dd && void 0 !== dd ? dd : document.createElement("canvas");
            Od.id = "wasm-game-canvas", ov.watch(Od, Ht), Nv.watch(Od, Ht),
              function(dd) {
                if (wt.has(dd)) return;
                wt.add(dd), dd.addEventListener("webglcontextlost", (() => {
                  var dd;
                  const Od = null !== Kh && Qt(),
                    md = null === (dd = window.bloxdRenderDebug) || void 0 === dd ? void 0 : dd.vaos;
                  setTimeout((() => {
                    var dd, Wd, Fd, Rd, Xd;
                    null === (dd = lh) || void 0 === dd || dd.glContextLost(Od, md, null !== (Wd = null !== (Fd = !1 === (null === (Rd = FK) || void 0 === Rd ? void 0 : Rd.isStopped) ? FK.addDistanceInUse() : null) && void 0 !== Fd ? Fd : null === (Xd = gt()) || void 0 === Xd ? void 0 : Xd.horizontal) && void 0 !== Wd ? Wd : null)
                  }), 0)
                }))
              }(Od), (0, ER.l)();
            const md = (0, Tm.f)(),
              Wd = (0, Tm.h)(md);
            Od.style.cssText = "position:absolute;top:0;left:0;display:block;touch-action:none;outline:none;background:#000", (0, aR.e)(Od, Wd), (0, Tm.e)(Od, md), Od.width = Wd.bufferWidth, Od.height = Wd.bufferHeight;
            const Fd = document.createElement("div");
            return Fd.style.cssText = "position:fixed;top:0;right:0;bottom:0;left:0;overflow:hidden", Fd.append(Od), Zv(Fd, Hv), yv = Fd, document.body.append(Fd), Od
          }(null === qd ? null : await (await Yv()).pagePreviews().beginSession())
        } catch (Fd) {
          return Vd("fetch"), await rt({
            site: iX,
            error: Fd
          }, (() => {
            (0, NW.showUnsupported)((0, UO.u)("fetch"), DR.g.fetch, `the previews did not load: ${String(Fd)}`)
          })), null
        }
        ud(), Sd("loading" === (0, GO.y)() ? "load" : "build");
        try {
          pd = await bd
        } catch (Fd) {
          return Vd("fetch"), await rt({
            site: iX,
            error: Fd
          }, (() => {
            (0, NW.showUnsupported)((0, UO.u)("fetch"), DR.g.fetch, `the ${null!==qd&&void 0!==qd?qd:"client"} build did not load: ${String(Fd)}`)
          })), null
        }
        const Yd = (0, qR.f)(),
          wd = !Yd && !0 !== qm.o.getItem(SX),
          Ed = !Yd && "loading" === (0, GO.y)();
        Sd("load"), await (0, HR.d)(pd, {
          reloadFailedDownload: wd
        }), Ed && !(0, GO.P)() && await (0, HR.d)(pd, {
          reloadFailedDownload: wd
        });
        let Jd = !1,
          Ud = !1;
        const xd = (0, GO.m)();
        if (!(0, GO.P)() && ("compile" === xd || "instantiate" === xd) && (0, GO.K)()) {
          const dd = (0, GO.g)();
          console.warn(`${BX} the wasm client did not ${xd} here (${dd}): loading it again`);
          const Od = await async function(dd) {
            let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : yR,
              md = !1,
              Wd = 0;
            for (const Fd of Od) {
              if (!dd.retryable()) break;
              if (dd.outOfMemory() && (md = !0, "spent" === dd.stepDownMemory())) return {
                recovered: !1,
                tries: Wd,
                outOfMemory: md,
                spent: !0
              };
              if (await dd.sleep(Fd), Wd++, await dd.retry()) return {
                recovered: !0,
                tries: Wd,
                outOfMemory: md,
                spent: !1
              }
            }
            return md ||= dd.outOfMemory(), {
              recovered: !1,
              tries: Wd,
              outOfMemory: md,
              spent: !1
            }
          }({
            sleep: dd => (0, dm.c)(dd),
            outOfMemory: () => (0, Vm.e)((0, GO.k)()),
            retryable: GO.K,
            stepDownMemory: () => "instantiate" !== (0, GO.m)() || !sQ() || (0, vW.p)() ? "none" : "halve" === (0, vW.o)() ? "halved" : "spent",
            retry: HR.e
          });
          Jd = Od.outOfMemory, Ud = Od.spent;
          const {
            tries: md,
            recovered: Wd
          } = Od, Fd = Wd ? dd : (0, GO.g)();
          (0, NW.reportLoadRecovery)({
            step: "load",
            stage: xd,
            oom: Jd,
            outcome: Wd ? "recovered" : "gaveUp",
            tries: md,
            detail: Fd
          })
        }
        gd ??= performance.now();
        const Bd = vK;
        if (!(0, GO.P)()) {
          (0, GO.M)() && "compile" !== xd && "instantiate" !== xd && qm.o.setItem(SX, !0);
          const dd = (0, GO.m)();
          if (Vd("instantiate" === dd || null === dd ? `instantiate_${sd((0,GO.k)())}` : dd), "call" === dd) bt({
            site: Im.u,
            error: (0, GO.k)(),
            header: null
          }, Bd);
          else {
            const Od = null !== dd && void 0 !== dd ? dd : "instantiate",
              md = () => {
                (0, NW.showUnsupported)((0, UO.u)(Od), DR.g[Od], (0, GO.g)())
              },
              Wd = "compile" === xd || "instantiate" === xd ? xd : dd;
            if ("compile" === Wd || "instantiate" === Wd) {
              const dd = Jd || (0, Vm.e)((0, GO.k)());
              if (qv && (dd && sQ() ? !Ud && "spent" !== (0, vW.o)(Date.now(), !0) : (0, DO.r)())) {
                const Od = (0, GO.g)();
                return (0, NW.reportLoadReload)((0, UO.u)(Wd), DR.g[Wd], Od), SQ(`the wasm client ${dd?"ran out of memory to":"did not"} ${Wd} here (${Od})`), null
              }(0, NW.showUnsupported)(dd ? "memory" : (0, UO.u)(Wd), DR.g[Wd], (0, GO.g)())
            } else if ("fetch" === Od) {
              const dd = [pd.url().href, cO.e.url().href];
              await rt({
                site: iX,
                error: (0, GO.g)(),
                urls: dd
              }, (() => {
                md()
              }))
            } else md()
          }
          return null
        }(0, LO.P)(pd.url()) && (0, NW.reportUnstreamedCoreLoad)();
        const Ad = (0, GO.A)();
        let rd, Gd = Bd;
        Sd("core");
        try {
          Gd = {
            ...Bd,
            wasm: Ad.Zt()
          };
          const {
            Fb: dd
          } = pd.bindings, Od = dd.gFd();
          if (Od !== Sm.x) return Vd("core_other"), bt({
            site: Im.d,
            error: `core ABI ${Od}, page ABI ${Sm.x}`,
            header: null
          }, Gd), null;
          const [md, Wd] = (0, Sm.re)();
          rd = new dd(md, Wd)
        } catch (Fd) {
          return Vd(`core_${sd(Fd)}`), bt({
            site: Im.d,
            error: Fd,
            header: null
          }, Gd), null
        }
        Vd("ok"), vK = Gd, QK = pd.bindings;
        const nd = new Im.j(rd, GO.t, {
          onCrash: dd => {
            var Od;
            null === (Od = lh) || void 0 === Od || Od.crashed(dd),
              function(dd, Od, md, Wd) {
                if ("webgpu" !== Od || (0, qR.b)()) return !1;
                const Fd = function(dd) {
                  if (dd.site === Im.g && (0, Dm.t)(dd.error)) return "frames_refused";
                  return dd.site === sX && (0, Dm.w)(dd.error) ? "start_failed" : null
                }(dd);
                if (null === Fd) return !1;
                if (null !== (0, Dm.$)(Fd, Wd, (0, em.c)(dd.error))) return (0, NW.countRenderLost)(Fd, dd.error, rh), !1;
                return Xm.H.reloaded(null, !1), (0, NW.reportRenderReload)("webgpu", "start_failed" === Fd ? 0 : 1, md, {
                  cause: Fd,
                  error: dd.error,
                  context: rh,
                  session: Et(null)
                }), kQ(), !0
              }(dd, qd, Gd, Hd) || bt(dd, Gd)
          },
          onNetEvent: lQ,
          onReconnectGrace: YQ,
          onJoinPreloadEnded: pQ,
          onCoreErrors: (dd, Od) => {
            var md, Wd;
            dd.some((dd => {
              let {
                code: Od
              } = dd;
              return Od === Sm.F.RenderDeviceLost
            })) && ((0, qR.w)(), (0, Km.d)(), vv.deviceLost(), "webgpu" === qd && ((0, em.g)(Gh), Xm.H.lost())), null === (md = lh) || void 0 === md || md.coreErrors(dd);
            const Fd = () => {
              (0, NW.reportCoreErrors)(dd, Od, Gd, ((dd, Od) => {
                var md;
                return dd === Sm.F.EnvUnknownSky ? (0, NW.unknownSkyWords)(lO.e.get("skyBox")) : dd === Sm.F.RenderDeviceLost ? (0, NW.deviceLossWords)(Od, rh.boundAtMs) : null === (md = Gh) || void 0 === md ? void 0 : md.wFd(dd, Od)
              }))
            };
            dd.some((dd => {
              let {
                code: Od
              } = dd;
              return Od === Sm.F.EnvUnknownSky
            })) ? queueMicrotask(Fd) : Fd(), null === (Wd = nK) || void 0 === Wd || Wd.coreErrors(dd)
          },
          onRenderReload: (dd, Od, md) => {
            ! function(dd, Od, md, Wd, Fd, Rd) {
              var Xd;
              if ((0, qR.b)()) return;
              const Kd = Od === Sm._c.WEBGPU,
                hd = Wd === Sm._c.PIPELINE_FAILED ? "pipeline_failed" : "lost",
                vd = Wd === Sm._c.RESTORE_LOST,
                Qd = Kd && (0, Xm.k)(rh.adapter, md, "lost" === hd, vd),
                od = (0, em.k)(Gh);
              null === (Xd = lh) || void 0 === Xd || Xd.reload(Kd, md, hd, null === od || void 0 === od ? void 0 : od.message);
              const Nd = Kd ? (0, Dm.$)(hd, Fd, od) : null;
              if (null !== Nd) {
                (0, NW.countRenderLost)(hd, od, rh);
                const Od = void 0 === od ? "" : ` (${od.message})`;
                return void dd.crash(NW.RENDER_RELOAD_SITE, new Error(`${(0,NW.renderReloadMessage)("webgpu",hd,md)} and ${Nd}${Od}`))
              }
              const qd = Kd ? "webgpu" : "webgl1" === Rd ? "webgl1" : "webgl";
              "lost" === hd && (0, qR.w)();
              if (!Kd) {
                if (ov.gaveUp(), !(0, DO.r)()) {
                  (0, NW.countRenderLost)(hd, od, rh);
                  const Od = void 0 === od ? "" : ` (${od.message})`;
                  return void dd.crash(NW.RENDER_RELOAD_SITE, new NW.GraphicsLostError(`${(0,NW.renderReloadMessage)(qd,hd,md)} and ${DO.f}${Od}`))
                }
                console.warn(`${BX} the GL render device's recovery gave up: the tab reloads once more onto the wasm client`)
              }(0, NW.reportRenderReload)(qd, md, vK, {
                from: "game",
                cause: hd,
                restoreLost: vd,
                adapterRemembered: Qd,
                error: od,
                context: rh,
                session: Et(dd.sunShadowsHeld())
              }), (0, qR.r)();
              const Hd = (0, td.f)();
              let yd = !1;
              const bd = () => {
                yd || (yd = !0, Kd && "lost" !== hd ? kQ() : Nv.reload(kQ, Kd))
              };
              let Td = null;
              const pd = (0, td.p)((() => {
                null !== Td && clearTimeout(Td), Hd ? setTimeout(bd, ZQ) : bd()
              }));
              !yd && Hd && (Td = setTimeout((() => {
                pd(), bd()
              }), CQ))
            }(nd, dd, Od, md, Hd, qd)
          },
          onEnvEvent: dd => {
            var Od;
            dd.kind === Sm.Z.SkyImages ? null === (Od = VK) || void 0 === Od || Od.onEvent(dd.payload) : dd.kind === Sm.Z.EnvLighting && (iK = 1 === dd.payload[0])
          },
          onImages: dd => {
            var Od;
            null === (Od = AK) || void 0 === Od || Od.onEvent(dd)
          },
          onModelRequest: dd => {
            var Od;
            null === (Od = SK) || void 0 === Od || Od.request(dd)
          },
          onModelTaken: (dd, Od) => {
            var md;
            null === (md = SK) || void 0 === md || md.taken(dd, Od)
          },
          onTerrainTexturesWanted: () => {
            queueMicrotask((() => {
              ! function(dd, Od) {
                const md = KK;
                if (null === md || dd.isStopped) return;
                md.restore((dd => {
                  (0, NW.reportTerrainTextureFailure)(dd, Od)
                })).then((Od => {
                  !1 !== Od || dd.isStopped ? !0 === Od && console.info(`${BX} terrain textures handed over again after the renderer lost them`) : console.warn(`${BX} the terrain textures couldn't be handed over again: the terrain draws blank`)
                }))
              }(nd, Gd)
            }))
          },
          onKeepAlive: dd => {
            const Od = null === Kh ? void 0 : hh.get(Kh);
            void 0 !== Od && AF(Od, dd)
          },
          onSends: () => {
            ! function(dd) {
              const Od = performance.now();
              if (dd.forEachNetOut(Nt), vt(dd), (0, Im.J)(dd, {
                  worldgen: pK,
                  mesh: gK
                }), null !== Ih) try {
                Ih.sendsWent(dd, Od, performance.now())
              } catch (Fd) {
                IQ(Fd)
              }
            }(nd)
          }
        });
        if (FK = nd, null === (Xd = bm.e.wasmNetReady) || void 0 === Xd || Xd.call(bm.e, (() => nd.isStopped ? 0 : nd.netKeptFrames)), null !== dd) {
          nd.setAntiCheatProbes(YX(GO.t, dd.checks)), dd.watchHeld(wX.CoreFrame, (() => nd.frame)), dd.watchHeld(wX.GlueFrame, (() => rd.frame));
          const Od = function(dd, Od) {
            const md = new gX(Od);
            let Wd = !1;
            md.Et(dd.Et());
            const Fd = (0, VF.V)((() => {
              md.Et(dd.Et())
            }), aX);
            let Rd = 6 * (0, VF.J)() | 0;
            const Xd = () => {
              ++Rd < 6 || (Rd = 0, dd.checks.stackCheck() && (Wd = !0))
            };
            (0, dX.j)(Xd);
            const Kd = () => {
              const Od = dd.checkPadCall();
              0 !== Od && md.setFlags(Od)
            };
            return (0, MR.h)(Kd), {
              onSend: Xd,
              beforeFrame: () => {
                Wd && md.originStackHit() && (Wd = !1)
              },
              onEvent: Od => {
                const Wd = dd.checkEvent(Od);
                md.value(Sm.f.ProbeUsedProp, dd.usedProp()), 0 !== Wd && md.setFlags(Wd)
              },
              stop: () => {
                (0, VF.X)(Fd), (0, dX.f)(Xd), (0, MR.f)(Kd)
              }
            }
          }(dd, ((dd, Od, md) => {
            let Wd = !1;
            return Bt(nd, (() => {
              Wd = nd.rings.input.writeRecord(Sm.vb.AntiCheat, dd, Od, md, 0)
            })), Wd
          }));
          nd.isStopped ? Od.stop() : xK = Od
        }
        ZX = (dd, Od, md) => nd.rings.cmd.writeCmd(dd, Od, md), kX = dd => nd.rings.cmd.growForCmd(dd), dh = !1, VQ(), (0, Id.x)(nd, {
          core: rd,
          memory: GO.t,
          staleOr: (dd, Od, md, Wd) => rt({
            site: dd,
            error: Od
          }, md, Wd),
          reportReplayFault: (dd, Od) => {
            (0, NW.reportReplayFault)(dd, Od, vK)
          },
          reportCameraFault: dd => {
            (0, NW.reportCameraDirectorFault)(dd, vK)
          },
          audio: hK,
          options: lO.e,
          onNetEvent: lQ,
          sessionInfo: dd => {
            var Od;
            return (null === (Od = Nh) || void 0 === Od ? void 0 : Od.conn) === dd ? Nh.info : null
          },
          onEventOverflow: ev,
          replayShaderPack: dd => {
            var Od;
            null === (Od = nK) || void 0 === Od || Od.replay(dd)
          },
          hasPackModel: dd => {
            var Od, md;
            return null !== (null !== (Od = null === (md = iQ()) || void 0 === md ? void 0 : md.modelUrl(dd)) && void 0 !== Od ? Od : null)
          },
          beforeWrite: () => (!ZK && nd.rings.net.cursor > 0 && dt(nd, !1, "all"), !nd.isStopped),
          beforeOp: () => (!ZK && nd.netWrittenSinceFrame > 0 && dt(nd, !1, "budget"), !nd.isStopped)
        }), (0, ed.M)({
          lockPointer: () => {
            if (!PW(Td)) return !1;
            try {
              Promise.resolve(Td.requestPointerLock()).catch((() => {}))
            } catch {
              return !1
            }
            return !0
          },
          unlockPointer: () => {
            (0, JO.e)()
          },
          leaveGame: () => {
            Dv()
          },
          canvas: () => Td
        }), BK = (0, ed.A)((() => {
          var dd;
          const Od = (0, Id.l)();
          null === (dd = (0, Id.u)()) || void 0 === dd || dd.followCursorAim(!0 === (null === Od || void 0 === Od ? void 0 : Od.isSessionLive) ? Od : null)
        })), Fh && nd.setUiPrefs(Fh);
        Rh && nd.setEnvPrefs(Rh);
        Xh && nd.setLookPrefs(Xh);
        const Ld = gR ? wR(gR.preventMovement) : null;
        Ld && mQ(Ld);
        const Pd = (0, vW.j)(),
          zd = (0, vW.e)(nd, Pd);
        JK = Pd.basis, (0, EW.l)((0, TW.d)(null === zd ? null : (0, hW.q)(zd), (0, TW.g)())), EK = zd;
        const cd = (0, PO.e)();
        let jd = 1 / 0,
          Dd = !0,
          ld = Pd.shedFootprintBytes;
        const Cd = new eF.d(cd, (() => rd.pb()), (dd => {
          nd.crash(Im.p, dd)
        }));
        wK = Cd, aK = Cd, null !== zd && Cd.setCeiling(Math.min((0, eF.p)(zd), jd, (0, vW.l)()));
        if (Dd) {
          Cd.setShed((dd => {
            const Od = nd.shedMemory("joinReserve" !== dd && "gcPressure" !== dd);
            return null !== Od && (null === EK || Od < EK) && (EK = Od, (0, EW.l)((0, TW.d)((0, hW.q)(Od), (0, TW.g)()))), Od
          }), ((dd, Od, md) => {
            1 === Od ? (0, NW.reportMemoryShed)(dd, md, vK) : console.warn(`${BX} wasm memory: shed again (${dd}): shed ${Od}`, md.wasmMemoryShed)
          }), (() => nd.addDistanceInUse()));
          const dd = (0, Dm.S)(Ad);
          Cd.setFootprint(new AR(ld, {
            storedChunks: () => rd.aFd(),
            gpuBytes: () => {
              var Od;
              return null !== (Od = null === dd || void 0 === dd ? void 0 : dd.EFd()) && void 0 !== Od ? Od : 0
            },
            jsHeapBytes: iR
          })), (0, aW.j)("wasm", Cd, (() => {
            hK.freeSounds()
          }))
        }
        window.addEventListener("pagehide", (() => {
          wK === Cd && (Cd.refreshStats(), xt(Cd))
        })), document.addEventListener("visibilitychange", Rt), window.addEventListener("pagehide", Xt), window.addEventListener("pagehide", fQ), window.addEventListener("pagehide", MQ), !1;
        const [Zd, kd] = (0, yW.d)();
        Zh = (0, TW.h)((dd => {
          const Od = (0, TW.k)(dd, (0, TW.g)());
          return nd.setChunkAddDistance(Od.horizontal, Od.vertical)
        }), {
          horizontal: Zd,
          vertical: kd
        }), nd.setAmbientOcclusion(!0 !== qm.k.getItem("disableAmbientOcclusion")), nd.setPoseLod(!0 !== qm.k.getItem(rO.N)), nd.setDebugLog(Sm.L.Look, !0), nd.setDebugLog(Sm.L.CameraSet, !0), (0, nR.startLookDebug)("wasm", {
          look: () => nd.takeDebugLog(Sm.L.Look),
          cameraSets: () => nd.takeDebugLog(Sm.L.CameraSet)
        }), (0, rR.o)("remesh") && (nd.setDebugLog(Sm.L.Remesh, !0), fd = () => nd.takeDebugLog(Sm.L.Remesh), jR = new cR((0, LR.n)(), fd));
        var fd;
        const Md = function(dd, Od, md, Wd) {
          const Fd = new RF,
            Rd = dd => qm.k.getItem(dd);
          Fd.sync(Rd, Od), (0, Qm.V)();
          const Xd = (0, hd.l)("customBindingsChanged", (() => {
            Fd.sync(Rd, Od)
          }));
          (0, BW.j)(Od);
          const Kd = new Set,
            vd = (0, ed.A)((() => {
              var dd;
              Kd.size > 0 && vF() && !0 === (null === (dd = (0, Id.l)()) || void 0 === dd ? void 0 : dd.localPlayerAlive()) && hd.j.lQ("usedKeyboard")
            })),
            Qd = ZW.d.heldSizer((() => (0, Tm.n)(dd))),
            td = lW(dd, Od, {
              prevents: dd => Fd.prevents(dd),
              keyPressed: dd => {
                Fd.moves(dd) && (Kd.add(dd), vF() && hd.j.lQ("usedKeyboard"))
              },
              keyReleased: dd => {
                Kd.delete(dd)
              },
              keysReleased: () => {
                Kd.clear()
              },
              resized: () => {
                KF.k.measure(dd.getBoundingClientRect()), (0, kW.k)()
              },
              sizeCanvas: Qd,
              watchRenderScale: Od => {
                const md = (0, Tm.o)(dd, Od),
                  Wd = ZW.d.onRelease(Od),
                  Fd = CW.e.onRelease(Od);
                return () => {
                  md(), Wd(), Fd()
                }
              },
              coverHeld: () => CW.e.isHeld(),
              touchStarting: () => {
                KF.k.measure(dd.getBoundingClientRect())
              },
              viewShown: md,
              touchUiShown: () => qO.e.get("isTouchScreen"),
              ctrlCombosAreGames: vF,
              inspect: (dd, Od, md) => {
                Fd.checks(Od, md) && Wd(dd)
              },
              canLock: () => PW(dd)
            }),
            od = (0, dW.d)(Od);
          return () => {
            Xd(), vd(), (0, BW.j)(null), od(), td()
          }
        }(Td, ((dd, Od, md, Wd, Fd) => {
          Bt(nd, (() => {
            nd.rings.input.writeRecord(dd, Od, md, Wd, Fd)
          })), !kK && (0, qF.f)(dd, Fd) && (0, qF.c)((() => {
            FK !== nd || Tv || nd.isStopped || !tt() || dt(nd, !1, "budget", !1)
          }))
        }), (() => Hv), (dd => {
          var Od;
          null === (Od = xK) || void 0 === Od || Od.onEvent(dd)
        }));
        if (nd.isStopped) return Md(), null;
        TK = Md;
        const dO = () => !nd.isStopped && !bv;
        if (nd.isStopped) return null;
        (0, GO.W)((() => {
          "call" === (0, GO.m)() && nd.crash(Im.u, (0, GO.k)())
        }));
        const OO = (0, Im.N)(nd.rings.worker, (() => {
          dt(nd, !1, document.hidden ? "all" : "budget")
        }));
        pK = function(dd, Od, md) {
          return St().then((dd => {
            let {
              prefetchWorldgenWorker: Od
            } = dd;
            Od()
          }), (() => {})), new ZR({
            module: (0, GO.w)(),
            decodeSettings: dd => {
              const Od = (0, Id.u)();
              if (null === Od) throw new Error("no game code to decode the world-gen seed with");
              return Od.decodeMapSettings(dd)
            },
            loadWorker: st,
            onMapWithoutWorldgen: () => {
              ut((dd => {
                let {
                  stopWorldgenWorkerPrefetch: Od
                } = dd;
                Od()
              }))
            },
            onLoadFailed: dd => {
              (0, NW.reportWorldgenLoadFailure)(dd, vK)
            },
            onWorkerLost: (dd, Od) => {
              !async function(dd, Od, md) {
                const Wd = dd === IR || dd.startsWith(lR);
                if (!Wd || Od) return void md.Wt(Wd);
                const Fd = () => {
                  md.Wt(!0)
                };
                let Rd;
                try {
                  Rd = await md.scriptUrl()
                } catch {
                  return void Fd()
                }
                await md.staleOr({
                  site: Im.D,
                  error: new Error(`a world-gen worker's load failed (${dd}): ${Rd}`),
                  urls: [Rd]
                }, Fd)
              }(dd, Od, {
                scriptUrl: async () => {
                  const {
                    worldgenWorkerScriptUrl: dd
                  } = await St();
                  return dd()
                },
                staleOr: (dd, Od) => rt(dd, Od, {
                  stillWanted: md
                }),
                Wt: Od => {
                  (0, NW.reportWorldgenWorkerLost)(dd, Od, vK, {
                    build: (0, aF.e)(),
                    ageMs: (0, pW.G)()
                  })
                }
              })
            },
            onStartTimeout: dd => {
              (0, NW.reportWorkerStartTimeout)(Im.D, dd, vK)
            },
            onGaveUp: dd => {
              (0, NW.reportWorldgenGaveUp)(dd, vK)
            },
            onMemoryStats: dd => {
              var Od;
              null === (Od = wK) || void 0 === Od || Od.noteWorldgen(dd)
            },
            onMemoryGone: () => {
              var dd;
              null === (dd = wK) || void 0 === dd || dd.worldgenGone()
            },
            write: (md, Wd, Fd, Rd, Xd) => {
              Bt(dd, (() => {
                dd.rings.worker.writeWorkerRecord(md, Wd, Fd, 0, Rd, Xd) || dd.crash(Im.D, `a world-gen record of kind ${Wd} did not fit the worker-in ring`)
              })), Od()
            }
          })
        }(nd, OO, dO), gK = function(dd, Od) {
          return new jF({
            module: (0, GO.w)(),
            loadWorkers: async () => {
              const [{
                createMeshWorker: dd
              }, Od] = await Promise.all([md.e(49).then((() => md(55128))), Promise.resolve().then((() => md(107))).then((dd => {
                let {
                  isMobile: Od
                } = dd;
                return Od()
              }), (() => !1))]);
              return {
                create: dd,
                count: (0, mm.g)(Od),
                maxKeptLightStates: Od || (0, Om.o)() ? 1 : void 0
              }
            },
            write: (md, Wd, Fd, Rd, Xd, Kd) => {
              (0, kW.j)(), Bt(dd, (() => {
                dd.rings.worker.writeWorkerRecord(md, Wd, Fd, Rd, Xd, Kd) || dd.crash(Im.q, `a meshing record of kind ${Wd} did not fit the worker-in ring`)
              })), Od()
            },
            onWorkerLost: dd => {
              (0, NW.reportWorkerLost)(Im.q, dd, vK)
            },
            onLightFault: (dd, Od) => {
              (0, NW.reportLightFault)(dd, Od, vK)
            },
            onStartTimeout: dd => {
              (0, NW.reportWorkerStartTimeout)(Im.q, dd, vK)
            },
            onMemoryStats: (dd, Od) => {
              var md;
              null === (md = wK) || void 0 === md || md.noteMeshWorker(dd, Od)
            },
            onMemoryGone: dd => {
              var Od;
              null === (Od = wK) || void 0 === Od || Od.meshWorkerGone(dd)
            },
            fail: (Od, md) => {
              const Wd = () => {
                dd.crash(Im.q, void 0 === md ? Od : new Error(Od, {
                  cause: md
                }))
              };
              void 0 !== md ? rt({
                site: Im.q,
                error: md
              }, Wd) : Wd()
            }
          })
        }(nd, OO), lv();
        const mO = (0, XR.o)(fO.clientSideServerUrls.staticUrl, {
            onTableFailed: dd => {
              rt({
                site: NW.MODEL_FEED_SITE,
                error: dd
              }, (() => {}), {
                stillWanted: dO
              })
            },
            packUrl: dd => {
              var Od, md;
              return null !== (Od = null === (md = iQ()) || void 0 === md ? void 0 : md.modelUrl(dd)) && void 0 !== Od ? Od : null
            }
          }),
          WO = function(dd, Od, md) {
            const Wd = md => {
              var Wd, Fd;
              return null !== (Wd = null === (Fd = Od()) || void 0 === Fd ? void 0 : Fd.drawnUrl(md)) && void 0 !== Wd ? Wd : dd.url(md)
            };
            return (0, FR.l)((0, lF.n)(Wd), md)
          }(mO, (() => SK), iQ),
          FO = new lF.e(WO, (dd => {
            console.warn(`${BX} image ${dd.key.kind}:${dd.key.index}:${dd.key.word} failed`, dd.error)
          }));
        AK = FO, rK = new OR(nd, WO, ((dd, Od) => {
          void 0 === Od ? console.warn(`${BX} ${dd}`) : rQ(dd, Od)
        }));
        const RO = new WR.h(mO, function(dd, Od) {
          let Wd = !1,
            Fd = null,
            Rd = null;
          const Xd = {
              onUnavailable: (md, Wd) => {
                Rd ??= rt({
                  site: NW.MODEL_POOL_SITE,
                  error: md,
                  urls: Wd
                }, (() => {
                  (0, NW.reportModelPoolFailure)(md, dd)
                }), {
                  stillWanted: Od
                })
              },
              onWorkerLost: Od => {
                (0, NW.reportWorkerLost)(NW.MODEL_POOL_SITE, Od, dd)
              },
              onModuleRetry: (Od, md) => {
                (0, NW.reportModelsModuleRetry)(Od, md, dd)
              }
            },
            Kd = md.e(51).then((() => md(55136))).then((dd => {
              let {
                pageModelPool: Od
              } = dd;
              if (Wd) return null;
              const md = Od(Xd);
              return Fd = md.unlisten, sK = md.pool, lv(), md.pool
            }), (dd => (Wd || Xd.onUnavailable(dd, void 0), null)));
          return uK = () => {
            var dd;
            Wd = !0, null === (dd = Fd) || void 0 === dd || dd(), sK = null
          }, (dd, Od) => Kd.then((md => {
            var Wd;
            return null !== (Wd = null === md || void 0 === md ? void 0 : md.build(dd, Od)) && void 0 !== Wd ? Wd : (0, KR.r)(dd, "the model workers did not load")
          })).then((dd => null !== Rd && (0, KR.j)(dd) ? Rd.then((() => dd)) : dd))
        }(Gd, dO), (dd => {
          dd.startup ? (yt(), rt({
            site: NW.MODEL_FEED_SITE,
            error: dd.error,
            urls: "" === dd.url ? void 0 : [dd.url]
          }, (() => {
            (0, NW.reportModelFailure)(dd, Gd)
          }))) : (0, NW.reportModelFailure)(dd, Gd)
        }), {
          onWritten: (dd, Od) => {
            FO.glbWritten(dd, Od)
          },
          onTaken: (dd, Od) => {
            FO.glbTaken(dd, Od)
          },
          onPackFileFailed: (dd, Od) => {
            console.warn(`${BX} the texture pack's model file ${dd} failed: the shipped one loads`, Od)
          }
        });
        SK = RO;
        const XO = new fF.f(nd);
        KK = XO, XO.swap((dd => {
          const Od = () => {
            (0, NW.reportTerrainTextureFailure)(dd, Gd)
          };
          if (kh) return void Od();
          const md = () => !kh,
            Wd = null === dd.url ? void 0 : [dd.url];
          rt({
            site: Im.B,
            error: dd.error,
            urls: Wd
          }, Od, {
            stillWanted: md
          })
        })).then((dd => {
          null !== dd && (dd || nd.isStopped || console.warn(`${BX} the core refused the terrain textures: terrain draws untextured`), cK(nd))
        }));
        const KO = new xm(nd, ((dd, Od) => {
          console.warn(`${BX} ${dd}`, ...void 0 === Od ? [] : [Od])
        }));
        KO.feed(), null !== qd && function(dd, Od, Wd, Fd, Rd, Xd) {
          let Kd = null,
            vd = null,
            Qd = !1;
          const td = {
            textures: null,
            stop: () => {
              var dd, Od;
              Qd = !0, null === (dd = vd) || void 0 === dd || dd(), null === (Od = Kd) || void 0 === Od || Od(), RR.e.setSettled(null), null !== QK && xv.clear(QK)
            }
          };
          XK = td, vd = GQ().follow((vd => {
            null !== vd && Promise.all([md.e(232), md.e(54)]).then((() => md(55085))).then((md => {
              let {
                PackTextures: od
              } = md;
              if (Qd || dd.isStopped) return;
              const Nd = new od({
                feed: vd,
                terrain: Od,
                backend: Wd,
                stopped: () => dd.isStopped,
                landed: () => {
                  cK(dd)
                },
                packSwapped: () => {
                  (0, FR.j)(Fd), Xd.feed((() => async function(dd) {
                    const Od = null === dd ? null : await dd.averageColours;
                    return null === Od ? Bm() : Um(Od)
                  }(Nd.assets))), (0, mR.j)(Nd.files()), Rd.refresh().then((dd => {
                    null !== dd && console.info(`${BX} texture pack models: ${dd.resent} of ${dd.delivered} files written again, ${dd.refetched} refetched`)
                  }))
                },
                settled: (dd, Od, md) => {
                  var Wd;
                  (RR.e.setSettled({
                    state: dd,
                    files: Od
                  }), function(dd, Od, md) {
                    const Wd = null === dd.gameSource && (0, qW.d)(dd.pack);
                    if (null === Od) return;
                    const Fd = (0, oW.k)(Od.error),
                      Rd = Wd ? "settings" : Od.source;
                    hd.j.lQ(oW.e, {
                      failure: Fd,
                      source: Rd,
                      pack: HW(dd)
                    }), (0, NW.reportTexturePackKeptOut)(Rd, Fd, Od.error, md)
                  }(dd, md, vK), null === md) && function(dd) {
                    const Od = QK;
                    null !== Od && xv.apply(Od, dd).then((Od => {
                      Od && dd && console.info(`${BX} the texture pack's animations are in (${Object.keys(dd).length} files)`)
                    }))
                  }(null === (Wd = dd.pack) || void 0 === Wd ? void 0 : Wd.animations)
                },
                settling: () => {
                  RR.e.setSettled(null)
                },
                warn: rQ,
                maxTextureSize: () => Promise.resolve((0, Dm.gb)(document.createElement("canvas")))
              });
              td.textures = Nd, Kd = Nd.start()
            }), (dd => {
              console.warn(`${BX} the texture pack's terrain didn't load: the built atlas stays`, dd)
            }))
          }))
        }(nd, XO, qd, FO, RO, KO);
        const hO = () => {
            nd.setTextureLayers("")
          },
          vO = dd => {
            (kO ??= md.e(66).then((() => md(55138))).then((dd => {
              let {
                TEXTURE_NAMES: Od
              } = dd;
              return Od
            }), (dd => {
              throw kO = null, dd
            })), kO).then((dd => {
              nd.setTextureLayers(dd) || nd.isStopped || (console.warn(`${BX} the core refused the texture names: textured Boxes draw textureNotFound`), hO())
            }), (Od => {
              if (nd.isStopped) return;
              const [md, ...Wd] = dd;
              void 0 === md ? rt({
                site: NW.TEXTURE_NAMES_SITE,
                error: Od
              }, (() => {
                console.warn(`${BX} the texture names didn't load, so textured Boxes draw textureNotFound`, Od), hO()
              }), {
                stillWanted: dO
              }) : setTimeout((() => {
                vO(Wd)
              }), md)
            }))
          };
        if (vO(lX), null !== qd && !await async function(dd, Od, md, Wd, Rd, Xd) {
            var Kd;
            const hd = (0, Dm.S)(md);
            if (null === hd) return dd.crash(sX, new Error(`this ${Wd} build has no openRenderer`)), !1;
            let vd;
            Gh = hd;
            try {
              var Qd, td, od, Nd;
              const Fd = null !== (Qd = null === (td = mK) || void 0 === td ? void 0 : td.pagePreviews()) && void 0 !== Qd ? Qd : null,
                Kd = null !== (od = null === (Nd = mK) || void 0 === Nd ? void 0 : Nd.previewModule(md)) && void 0 !== od ? od : null;
              if (null === Fd || null === Kd) {
                null === Fd || void 0 === Fd || Fd.endSession(!1), vd = (0, Tm.f)().sampleCount, await (0, Dm.h)(Od, hd, Xd, uQ, vd, await Rd);
                const dd = (0, Dm.l)(md);
                null === dd && console.warn(`${BX} this ${Wd} build has no image registry: sky and model images won't show`), (0, kF.f)(dd)
              } else {
                (0, qR.b)() && await (0, NO.m)();
                const md = (0, qR.G)();
                if (null !== md) {
                  const Od = (0, em.k)(hd),
                    Wd = `${md.why}${void 0===Od?"":` (${Od.message})`}`;
                  return dd.crash(NW.RENDER_RELOAD_SITE, md.webgpu ? new Error(Wd) : new NW.GraphicsLostError(Wd)), !1
                }
                vd = await Fd.bindSession(Kd, Od, (async dd => (0, Dm.z)(hd, sX, Xd, dd, uQ, await Rd)))
              }
            } catch (Fd) {
              return dd.crash(sX, Fd), !1
            }(function(dd, Od) {
              const md = dd,
                {
                  requestCapture: Wd,
                  takeCapture: Fd
                } = md;
              if ("function" !== typeof Wd || "function" !== typeof Fd) return;
              const Rd = {
                request() {
                  Wd.call(md, Od)
                },
                take() {
                  var dd;
                  return null !== (dd = Fd.call(md)) && void 0 !== dd ? dd : null
                }
              };
              window[JR] = Rd
            })(Od, vd), Dh = vd, Ah = !0;
            const qd = performance.now();
            return rh.boundAtMs = null !== (Kd = (0, qR.H)()) && void 0 !== Kd ? Kd : qd, rh.indirectHangs = (0, qR.z)(), rh.restoresSkipped = (0, qR.I)(), console.info(`${BX} ${Wd} renderer bound at ${Math.round(qd)} ms`), !dd.isStopped
          }(nd, rd, Ad, qd, yd, Td)) return null;
        if (null !== qd) {
          var QO, tO, HO;
          (0, zO.F)(qd);
          const dd = () => !nd.isStopped && Qt();
          md.e(220).then((() => md(35422))).then((Od => {
            let {
              devTools: md
            } = Od;
            nd.isStopped || md.setHost(function(dd) {
              return {
                tools: NR,
                async downloadScene(Od, md) {
                  let {
                    width: Wd,
                    height: Fd,
                    colouring: Rd
                  } = md;
                  "screenshot" === Od && null === Rd ? await (0, QR.h)(dd, Wd, Fd) : console.warn("The Rust client's developer tools take uncoloured screenshots only")
                },
                setAmbientLightIntensity: () => (console.warn("The Rust client's renderer has no ambient light setting"), Promise.resolve()),
                capturePhoto: (Od, md, Wd) => (0, QR.d)(dd, Od, md, Wd),
                snapshotNextFrame: () => (0, QR.j)(dd)
              }
            }(function(dd, Od) {
              return {
                canvas: dd,
                maxTextureSize: tR,
                yt: Od,
                resize: (dd, Od, md) => {
                  (0, BW.p)(Sm.vb.Resize, 0, dd / md, Od / md, (0, BW.f)(md))
                },
                restoreSize: () => {
                  const Od = (0, Tm.n)(dd);
                  null !== Od && (0, BW.p)(Sm.vb.Resize, 0, Od.cssWidth, Od.cssHeight, (0, BW.f)(Od.renderScale))
                },
                onFrameDrawn: dd => (oR.add(dd), () => {
                  oR.delete(dd)
                })
              }
            }(Td, dd)))
          }), (dd => {
            console.warn(`${BX} the developer tools didn't load: no captures this session`, dd)
          }));
          const Od = "webgpu" === qd && null !== (QO = null === Nd || void 0 === Nd || null === (tO = Nd.adapter) || void 0 === tO ? void 0 : tO.vendor) && void 0 !== QO ? QO : null;
          eh = {
            backend: qd,
            canvas: Td,
            fallbackReason: null !== (HO = null === Nd || void 0 === Nd ? void 0 : Nd.reason) && void 0 !== HO ? HO : null,
            adapterVendor: Od
          }, jQ();
          try {
            (0, kW.s)(qd, Td, Od)
          } catch (Fd) {
            (0, kW.w)(), console.error(`${BX} the quality steps didn't start`, Fd)
          }
        }
        const {
          storagePullBreaks: yO,
          splitPassBreaks: bO
        } = await yd;
        bO && console.warn(`${BX} split_pass_breaks on: Windows Adreno 7xx (N-103) or ?sceneDepth=off`);
        const TO = (0, oO.i)(Nd, (0, Xm.f)(), (0, hm.h)());
        if ((0, rR.o)("webgpuloss")) {
          var pO, YO;
          const dd = {
            backend: qd,
            reason: null !== (pO = null === Nd || void 0 === Nd ? void 0 : Nd.reason) && void 0 !== pO ? pO : null,
            source: null !== (YO = null === Nd || void 0 === Nd ? void 0 : Nd.source) && void 0 !== YO ? YO : null,
            storagePullBreaks: yO,
            noWebGpu: TO.messageKey
          };
          (0, GR.e)((Od => {
            Od.noteWasmPick(dd)
          }))
        }
        const gO = "webgpu" === qd;
        if (nK = (0, oO.j)(gO ? nd : null, gO && null !== (Kd = null === (vd = mK) || void 0 === vd ? void 0 : vd.pagePreviews().Jq) && void 0 !== Kd ? Kd : null, TO, rQ), Tv) return null;
        if (Cd.reserveAtJoin((0, eF.l)(null !== zd && void 0 !== zd ? zd : hW.j)), nd.isStopped) return null;
        const wO = dd => {
          if (IK = performance.now(), lK = !1, null !== Ih) try {
            Ih.animationFrame(dd)
          } catch (Fd) {
            IQ(Fd)
          }
          if (function(dd, Od) {
              return Od && !Tv && !kK && tt() && Qt() && dd.framePaces(performance.now())
            }(nd, Hv)) {
            if (Fv.animationFrame(IK, "paced", Hv), nd.writePendingInput(), (0, ed.h)(dd, Ot), DQ(!1, dd), null !== Ih) try {
              Ih.framePaced()
            } catch (Fd) {
              IQ(Fd)
            }
            requestAnimationFrame(wO)
          } else dt(nd, Hv, "budget") && (Fv.animationFrame(IK, nd.lastFrameKind, Hv), (0, tm.i)(nd.lastFrameKind) && Qt() && (0, ed.h)(dd, Ot), DQ(Hv && hv, dd), vv.frame(nd.lastFrameKind, Hv && Qt(), dd), ov.frame(nd.lastFrameKind, Hv && Qt()), (0, tm.d)(nd.lastFrameKind) && Xm.H.drew(), Yt(nd), Cd.afterFrame(), requestAnimationFrame(wO))
        };
        requestAnimationFrame(wO), nd.warmBeforeJoin(sF(null), Im.n.Home);
        return function(dd) {
          if (dd.has("inputLog") && (0, XF.h)((dd => {
              let {
                action: Od,
                down: md,
                press: Wd
              } = dd;
              console.info(`${hF} input ${Od} ${md?"down":"up"} press ${Wd} at ${performance.now().toFixed(1)}`)
            })), dd.has("inputDump")) {
            const dd = [];
            QF = dd, Object.assign(window, {
              bloxdInputDump: () => dd.join("\n")
            })
          }
        }(new URLSearchParams(window.location.search)), UK = function(dd) {
          let Od = null;
          const md = () => {
              null !== Od && (clearInterval(Od), Od = null)
            },
            Wd = () => {
              document.hidden ? Od ??= setInterval((() => {
                it(dd) || md()
              }), IX) : md()
            };
          return document.addEventListener("visibilitychange", Wd), Wd(), () => {
            md(), document.removeEventListener("visibilitychange", Wd)
          }
        }(nd), nd
      }(Od).then((dd => {
        var Od;
        (Wd(vK), qK(null !== dd), null !== dd && (wd = performance.now()), oK(dd), null === dd) ? null === (Od = mK) || void 0 === Od || Od.pagePreviews().endSession(null === (0, GO.m)()): zK("booted")
      }), (dd => {
        Wd(vK), qK(!1), oK(null), bt({
          site: uX,
          error: dd,
          header: null
        }, vK)
      }))
    }

    function Uv() {
      const dd = QK;
      null !== dd && Yv().then((Od => {
        let {
          pageBuiltInAnimationPack: md
        } = Od;
        md().provide(dd)
      }), (dd => {
        console.warn(`${BX} the built-in animation pack's chunk did not load: lifeforms stay in their rest pose`, dd)
      }))
    }
    const xv = new class {
      constructor(dd) {
        this.deps = dd, this.latest = 0, this.jK = null
      }
      apply(dd, Od) {
        return this.load(dd, Od, 0)
      }
      async load(dd, Od, md) {
        var Wd;
        const Fd = ++this.latest,
          Rd = this.deps.compiler;
        if (void 0 === Od || null === Od || "object" !== typeof Od || 0 === Object.keys(Od).length || null === Rd) return this.drop(dd), !1;
        if ((null === (Wd = this.jK) || void 0 === Wd ? void 0 : Wd.module) === dd && (0, Lm.fe)(this.jK.files, Od)) return !1;
        try {
          const [md, Wd] = await Promise.all([Rd(), this.deps.builtIns()]);
          if (Fd !== this.latest) return !1;
          const Xd = await md(Od, jm, {
            builtIns: Wd
          });
          if (Fd !== this.latest) return !1;
          const Kd = this.call(dd, Xd);
          if (void 0 === Kd) throw new cm("the compiled animations didn't read against the built-in pack");
          return this.jK = {
              module: dd,
              files: Od
            },
            function(dd) {
              for (let Od = 0; Od + 2 < dd.length; Od += 3) {
                ("error" === dd[Od] ? console.error : console.warn)(`Animation for the texture pack: ${dd[Od+1]}: ${dd[Od+2]}`)
              }
            }(Kd), !0
        } catch (Kd) {
          var Xd;
          if (Fd !== this.latest) return !1;
          this.drop(dd), 0 === md && this.deps.warn("the texture pack's animations didn't load: lifeforms play the built-in ones", Kd);
          const Wd = (null !== (Xd = this.deps.retryAfterMs) && void 0 !== Xd ? Xd : zm)[md];
          return void 0 === Wd || Kd instanceof cm || (0, Pm.h)(dd) || setTimeout((() => {
            Fd === this.latest && this.load(dd, Od, md + 1)
          }), Wd), !1
        }
      }
      call(dd, Od) {
        try {
          return dd.pFd(Od)
        } catch (md) {
          throw (0, Pm.k)(dd, md), md
        }
      }
      clear(dd) {
        this.latest++, this.drop(dd)
      }
      drop(dd) {
        const Od = this.jK;
        if (this.jK = null, (null === Od || void 0 === Od ? void 0 : Od.module) === dd && !(0, Pm.h)(dd)) try {
          this.call(dd, null)
        } catch {}
      }
    }({
      compiler: Am.c,
      builtIns: async () => {
        const {
          pageBuiltInAnimationPack: dd
        } = await Yv();
        return dd().whenSet()
      },
      warn: rQ
    });
    async function Bv(dd, Od) {
      let Wd = !1;
      await Sv({
        matchmake: async () => {
          const {
            guestJoinTarget: Fd,
            guestJoinWithPack: Rd
          } = await md.e(133).then((() => md(55071)));
          return Wd ? Fd(dd, Od, LQ()) : (Wd = !0, Rd(dd, Od, (Od => PQ(dd, Od)), LQ))
        },
        onFailure: dd => {
          (0, NW.showJoinFailure)(dd, vK)
        },
        rejoin: kv,
        invalidateTrafficCode: fv
      })
    }
    async function Sv(dd) {
      let {
        matchmake: Od,
        onFailure: md,
        rejoin: Fd,
        invalidateTrafficCode: Rd,
        pageReady: Xd,
        signal: Kd
      } = dd;
      const hd = () => !0 === (null === Kd || void 0 === Kd ? void 0 : Kd.aborted);
      let vd;
      const Qd = RR.e.rejoinHold();
      Qh = null, (0, wW.f)();
      const td = (0, pW.kb)("wasm", Ut);
      let od = !1,
        Nd = performance.now();
      try {
        if (!await HK) return {
          kind: "stopped"
        };
        if (hd()) return {
          kind: "Ad"
        };
        gv().catch((() => {}));
        let dd = await Od();
        var Hd, yd;
        if (Nd = performance.now(), !hd()) Jt(null !== (Hd = null === (yd = dd.target.session) || void 0 === yd ? void 0 : yd.gameNameWithVariation) && void 0 !== Hd ? Hd : null);
        const md = () => performance.now() - dd.matchedAt <= dd.freshMs,
          Wd = uv(dd.target).catch((() => {}));
        md() && !hd() && (vd = new PF(dd.target, {
          signal: Kd
        }));
        const Rd = performance.now();
        let Qd = () => {};
        hd() || (Qd = function(dd, Od) {
          Ad(), dd || xd || null !== Ud && "ok" !== Ud || (xd = !0, (0, qd.A)("wasm_boot_wait", performance.now(), `${Jd}:${Od()}:${(0,bd.j)()}`)), Bd++;
          let md = !1;
          return () => {
            md || (md = !0, Bd--)
          }
        }(tK, nO.g), null === Kd || void 0 === Kd || Kd.addEventListener("abort", Qd, {
          once: !0
        }));
        const td = await NK;
        if (Qd(), null === Kd || void 0 === Kd || Kd.removeEventListener("abort", Qd), null === td) return {
          kind: "stopped"
        };
        var Sd, sd;
        if (function(dd) {
            var Od, md;
            if (Td.e.markGameEngineConstructed(), Ed) return;
            Ed = !0;
            const Wd = Math.max(dd, null !== (Od = Yd) && void 0 !== Od ? Od : dd);
            (0, pd.h)("ready", Math.max(0, (null !== (md = gd) && void 0 !== md ? md : Wd) - Wd) / 1e3)
          }(Rd), !hd())
          if (null !== gd && null !== wd ? (0, qd.A)("wasm_core_ready", wd) : console.warn("[bloxd-wasm-client] a join found the core before boot marked its steps"), dd.target.session && (0, eR.e)(dd.target.session.gameNameWithVariation)) null === (Sd = pK) || void 0 === Sd || Sd.prestart();
        if (await Wd, !md() && !hd()) null === (sd = vd) || void 0 === sd || sd.rematched(), dd = await Od(), Nd = performance.now();
        if (hd()) return {
          kind: "Ad"
        };
        const ud = await async function(dd) {
          var Od, md, Wd;
          let {
            signal: Fd,
            rejoin: Rd = null,
            early: Xd,
            pageReady: Kd
          } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (null !== Fd && void 0 !== Fd && Fd.aborted) throw new DOMException("the join was left", "AbortError");
          const hd = (vd = Eh, Qd = performance.now(), null !== vd && Qd - vd < gF);
          var vd, Qd;
          Eh = null;
          const td = new AbortController,
            od = null !== (Od = null === (md = dd.session) || void 0 === md ? void 0 : md.gameNameWithVariation) && void 0 !== Od ? Od : null;
          Jt(od), Av({
            controller: td,
            game: od
          }), Jh = null, null === (Wd = Bh) || void 0 === Wd || Wd.abort(), Bh = null, sh = !1, uh = null, Vh.clear();
          const Nd = () => {
            (0, MO.f)(td, (0, MO.e)(Fd))
          };
          null === Fd || void 0 === Fd || Fd.addEventListener("abort", Nd, {
            once: !0
          });
          try {
            var Hd, yd, bd, Td, pd;
            const Od = await NK;
            if (null === Od || Od.isStopped || Tv) throw new Error("no core is running to join a game with");
            if (Od.warmBeforeJoin(sF(null !== (Hd = null === (yd = dd.session) || void 0 === yd ? void 0 : yd.gameNameWithVariation) && void 0 !== Hd ? Hd : null), Im.n.Play), dd.session && null !== nK) {
              const Od = await Vv(nK.join(dd.session.gameNameWithVariation), td.signal);
              if ((0, rR.o)("webgpuloss")) {
                const md = dd.session.gameNameWithVariation,
                  Wd = nK.couldntRunInJoinedGame();
                (0, GR.e)((dd => dd.noteWasmJoin(md, Od, Wd)))
              }
              if (null !== Od) throw new oO.e(Od)
            }
            const [, , , {
              joinRoom: md
            }] = await Vv(Promise.all([(0, Id.p)(Od), uv(dd), null === Kd || void 0 === Kd ? void 0 : Kd(), gv()]), td.signal), Wd = dd.session, Fd = Wd ? {
              ...OQ,
              attachSocket: Od => {
                const md = hQ(Od, dd.endpoint);
                var Fd;
                null !== md && (Nh = {
                  conn: md,
                  info: Wd
                }, null === (Fd = qh) || void 0 === Fd || Fd(Wd.playerDbId));
                return md
              }
            } : OQ, vd = await md(Fd, dd, {
              signal: td.signal,
              early: Xd
            }).catch((dd => {
              throw function(dd) {
                if (!(dd instanceof WO.e)) return dd;
                if ("roomError" === dd.stage && null !== uh) return sv(new WO.e(dd.message, dd.stage, dd.code, uh), dd);
                const Od = "closed" === dd.stage && null !== Uh ? Vh.get(Uh.conn) : void 0;
                return void 0 === Od ? dd : sv(new WO.e(dd.message, dd.stage, Od.code, null, dd.socketOpened), dd)
              }(dd)
            }));
            if (vh !== td) throw vd.leave(), new DOMException("the join was left", "AbortError");
            zv(vd), null === (bd = gK) || void 0 === bd || bd.newGame();
            const Qd = function(dd, Od) {
              var md, Wd;
              const {
                session: Fd
              } = dd, Rd = void 0 === Fd ? dd.joinOptions.lobbyName : Fd.lobbyName;
              return {
                endpoint: dd.endpoint,
                game: null !== (md = null === Fd || void 0 === Fd ? void 0 : Fd.gameNameWithVariation) && void 0 !== md ? md : dd.roomName,
                lobby: String(null !== Rd && void 0 !== Rd ? Rd : null),
                sessionId: Od,
                postCookies: null !== (Wd = dd.postCookies) && void 0 !== Wd ? Wd : null
              }
            }(dd, vd.seat.sessionId);
            hh.set(vd, Qd), GF(Qd);
            const od = performance.now(),
              Nd = {
                conn: vd.conn,
                rejoin: Rd,
                game: null !== (Td = null === (pd = dd.session) || void 0 === pd ? void 0 : pd.gameNameWithVariation) && void 0 !== Td ? Td : "",
                joinedAt: od,
                rejoinedAt: hd ? od : null,
                overflow: null
              };
            Hh = Nd,
              function(dd, Od) {
                yQ();
                const md = {
                  endpoint: Od,
                  roomId: dd.seat.room.roomId,
                  heldConn: 0,
                  dropCode: 0,
                  pendingHold: null,
                  resume: new RW({
                    reconnect: (dd, Od, Wd) => async function(dd, Od, md, Wd) {
                      const {
                        roomId: Fd,
                        roomToken: Rd
                      } = TQ(dd, Od), Xd = FK;
                      if (null === Xd || Xd.isStopped || Tv) throw new Error("no core is running to resume the game on");
                      const {
                        resumeRoom: Kd
                      } = await Vv(gv(), md), hd = {
                        ...OQ,
                        attachSocket: Od => yh !== dd || 0 === dd.heldConn ? (Od.close(), null) : hQ(Od, dd.endpoint, !0)
                      };
                      return Kd(hd, dd.endpoint, Fd, Rd, {
                        signal: md,
                        onAttached: Wd
                      })
                    }(md, dd, Od, Wd),
                    releaseSeat: dd => {
                      !async function(dd, Od) {
                        const {
                          roomId: md,
                          roomToken: Wd
                        } = TQ(dd, Od);
                        try {
                          const {
                            leaveHeldSeat: Od
                          } = await gv();
                          await Od(dd.endpoint, md, Wd)
                        } catch (Fd) {
                          console.warn(`${BX} the held seat of a game left while it reconnected couldn't be released`, Fd)
                        }
                      }(md, dd)
                    },
                    isLive: () => yh === md && null !== Hh && !Tv,
                    qB: dd => {
                      ah = dd, HQ()
                    },
                    onReconnected: dd => {
                      ! function(dd) {
                        const Od = Kh;
                        if (null !== Od && Od !== dd) {
                          const md = hh.get(Od);
                          void 0 !== md && hh.set(dd, md), Xv === Od && (Xv = dd), Od.detach()
                        }
                        zv(dd)
                      }(dd)
                    },
                    onGaveUp: (dd, Od) => {
                      ! function(dd, Od, md) {
                        var Wd, Fd;
                        console.warn(`${BX} gave up reconnecting (${md.reason}, ${md.attempts} attempts)`, md.lastError), (0, NW.reportReconnectGaveUp)(md, vK);
                        const Rd = null !== (Wd = null === (Fd = Hh) || void 0 === Fd ? void 0 : Fd.rejoin) && void 0 !== Wd ? Wd : null;
                        bQ(dd, "gaveUp"), jv();
                        const Xd = {
                          code: dd.dropCode,
                          name: null,
                          reason: cX,
                          canReconnect: !Od,
                          automaticallyReconnect: !1,
                          requiresRefresh: !1
                        };
                        dQ(Xd, Od ? null : Rd, !1, {
                          reasonKey: jX,
                          canPlayAgain: Od
                        })
                      }(md, dd, Od)
                    }
                  })
                };
                yh = md, null !== bh && bh.conn === dd.conn && md.resume.onInitialInfo(bh)
              }(vd, dd.endpoint), performance.mark(AX), (0, qd.A)("wasm_joined", od), Od.warmBeforeJoin(new Uint32Array, Im.n.Joined), setTimeout((() => {
                Kh === vd && (0, qd.p)()
              }), 0), Uv(), console.info(`${BX} joined ${dd.roomName} as ${vd.seat.sessionId} at ${Math.round(performance.now())} ms`);
            const Yd = Jh;
            Jh = null, null !== Yd && Iv(Nd, Yd.mask, Yd.frames);
            const gd = Vh.get(vd.conn);
            return Vh.clear(), void 0 !== gd && (zv(null), Mv(vd.conn, gd.code, gd.reason)), vd
          } finally {
            var Yd;
            null === Fd || void 0 === Fd || Fd.removeEventListener("abort", Nd), vh === td && Pv(Kh, null), (null === (Yd = Uh) || void 0 === Yd ? void 0 : Yd.join) === td && (Uh = null)
          }
        }(dd.target, {
          signal: Kd,
          rejoin: Fd(dd.target),
          early: vd,
          pageReady: Xd
        });
        return od = !0, {
          kind: "joined",
          game: ud
        }
      } catch (Vd) {
        if (Vd instanceof DOMException && "AbortError" === Vd.name || hd()) return {
          kind: "Ad"
        };
        if (Tv) return {
          kind: "stopped"
        };
        if (sh && (sh = !1, await Rd().catch((dd => {
            console.warn(`${BX} the cached traffic code could not be dropped`, dd)
          }))), null === await NK) return {
          kind: "stopped"
        };
        if (Vd instanceof oO.e) return md(Vd, performance.now() - Nd), {
          kind: "failed",
          error: Vd,
          reloading: !1
        };
        const dd = Vd instanceof WO.e && Vd.code === Wd.e.wasmClientNotAllowed.code,
          Od = Vd instanceof WO.e && Vd.code === Wd.e.outdatedVersion.code,
          Fd = () => null === Kh,
          Xd = await rt({
            site: NW.JOIN_SITE,
            error: Vd,
            outdated: Od
          }, (() => {
            dd && (0, DO.F)(), md(Vd, performance.now() - Nd)
          }), {
            stillWanted: Fd
          });
        return {
          kind: "failed",
          error: Vd,
          reloading: Xd
        }
      } finally {
        var ud;
        od || td.end(), RR.e.releaseHold(Qd);
        const dd = null === (ud = vd) || void 0 === ud ? void 0 : ud.release();
        dd && (0, NW.reportUnusedSeat)(dd, vK)
      }
    }

    function sv(dd, Od) {
      return dd.stack = Od.stack, dd
    }

    function uv(dd) {
      return dd.session ? (0, Id.t)(hK, dd.session.gameNameWithVariation) : Promise.resolve()
    }

    function Vv(dd, Od) {
      return (0, MO.p)(Od), new Promise(((md, Wd) => {
        const Fd = () => {
          Wd((0, MO.e)(Od))
        };
        Od.addEventListener("abort", Fd, {
          once: !0
        }), dd.then((dd => {
          Od.removeEventListener("abort", Fd), md(dd)
        }), (dd => {
          Od.removeEventListener("abort", Fd), Wd(dd)
        }))
      }))
    }

    function iv() {
      Av(null)
    }

    function Av(dd) {
      var Od, md, Wd;
      (Ft(null === dd ? "left" : "replaced"), function() {
        const dd = yh;
        null !== dd && bQ(dd, "left")
      }(), null === bK || bK.left) || (bK.left = !0, null === (Wd = (0, Id.l)()) || void 0 === Wd || Wd.socketLeft(), (0, od.l)({
        websocketUrl: null
      }));
      vh && (0, MO.f)(vh, new DOMException("the join was left", "AbortError")), jv(null !== dd), null === (Od = nK) || void 0 === Od || Od.leave();
      const Fd = Kh;
      null !== dd && RR.e.setGame(dd.game), Pv(null, null !== (md = null === dd || void 0 === dd ? void 0 : dd.controller) && void 0 !== md ? md : null), null === Fd || void 0 === Fd || Fd.leave(), null === dd && (nv = !0, Lv()), cv(0), (0, CO.h)()
    }

    function rv() {
      return null !== FK && 0 !== (FK.headerWord(sm.I.LoadSteps) & sm.V.PlayerBound) && tt() && !vv.isShown()
    }

    function Gv() {
      return performance.now() - xh >= fm.d
    }
    let nv = !1;

    function Lv() {
      const dd = FK;
      !nv || kK || Hv || (nv = !1, Tv || null === dd || dd.isStopped || dd.releaseLeftGame())
    }

    function Pv(dd, Od) {
      null !== Od && Od !== vh && (Qv = document.hidden), null === dd ? tv.end() : null === Kh && tv.join(rv), Kh = dd, vh = Od, null === Kh && null === vh || (nv = !1), null === Kh && null === vh && RR.e.setGame(void 0)
    }

    function zv(dd) {
      Pv(dd, vh)
    }

    function cv(dd) {
      const Od = FK;
      return null !== ZX && !Tv && null !== Od && !Od.isStopped && (!!ZX(WO.k, 0, (0, WO.x)(dd)) && (dh = !0, 0 === dd || kK || dt(Od, !1, "all"), !0))
    }

    function jv() {
      var dd, Od;
      arguments.length > 0 && void 0 !== arguments[0] && arguments[0] || (0, pW.g)();
      const md = null !== (dd = null === (Od = Hh) || void 0 === Od ? void 0 : Od.overflow) && void 0 !== dd ? dd : null;
      Hh = null, null !== md && (0, NW.reportEventOverflow)(md, vK)
    }

    function Dv() {
      null !== Kh || null !== vh ? iv() : vQ()
    }

    function ev(dd, Od) {
      console.warn(`${BX} the event buffer refused records in ${Od} frames (categories ${dd})`), Tv || (null !== Hh ? Iv(Hh, dd, Od) : null !== vh && function(dd, Od, md) {
        var Wd;
        const Fd = function(dd, Od) {
          return null === dd ? "drop" : dd.activated ? "keep" : 0 !== (Od & sm.w.NetSession) ? "fail" : "drop"
        }((null === (Wd = Uh) || void 0 === Wd ? void 0 : Wd.join) === dd ? Uh : null, Od);
        "keep" === Fd ? Jh = {
          mask: Od,
          frames: md
        } : "fail" === Fd && (0, MO.f)(dd, new Error("the join's net session was lost to an event overflow"))
      }(vh, dd, Od))
    }

    function Iv(dd, Od, md) {
      const Wd = dd.overflow ??= {
        frames: 0,
        acks: 0,
        mask: 0,
        outcome: null
      };
      Wd.frames += md, Wd.acks++, Wd.mask |= Od;
      const Fd = function(dd, Od, md) {
        if (0 === (dd & sm.w.NetSession)) return "none";
        const Wd = null !== Od.rejoinedAt && md - Od.rejoinedAt < wF;
        return null === Od.rejoin || Wd ? "fail" : "rejoin"
      }(Od, dd, performance.now());
      "none" !== Fd && queueMicrotask((() => {
        if (Hh !== dd) return;
        const Od = "rejoin" === Fd && Gv();
        Wd.outcome = Od ? "rejoined" : "failed", dQ(function(dd, Od) {
          return {
            code: 0,
            name: "eventOverflow",
            reason: "Your game fell behind the server.",
            canReconnect: dd,
            automaticallyReconnect: Od,
            requiresRefresh: !1
          }
        }(null !== dd.rejoin, Od), dd.rejoin, Od), iv(), Od && (Eh = performance.now())
      }))
    }

    function lv() {
      qv && function(dd, Od) {
        let {
          mesh: md,
          worldgen: Wd,
          modelPool: Fd
        } = dd;
        "landingPage" === Od ? (null === md || void 0 === md || md.stopWorkers(), null === Wd || void 0 === Wd || Wd.stopWorker(), null === Fd || void 0 === Fd || Fd.stopWorkers()) : ((0, qO.i)(Od) || "inGame" === Od) && (null === md || void 0 === md || md.restartWorkers(), null === Fd || void 0 === Fd || Fd.startWorkers())
      }({
        mesh: gK,
        worldgen: pK,
        modelPool: sK
      }, qO.e.get("gameState"))
    }

    function Cv(dd) {
      Hv = dd, yv && Zv(yv, dd), Lv()
    }

    function Zv(dd, Od) {
      dd.style.visibility = Od ? "visible" : "hidden"
    }

    function kv(dd) {
      var Od;
      const md = dd.roomName,
        Wd = null !== (Od = dd.joinOptions.lobbyName) && void 0 !== Od ? Od : null;
      return () => {
        Bv(md, Wd)
      }
    }

    function fv() {
      return md.e(133).then((() => md(55071))).then((dd => {
        let {
          invalidateGuestTrafficCode: Od
        } = dd;
        return Od()
      })).catch((dd => {
        console.warn(`${BX} the cached traffic code could not be dropped`, dd)
      }))
    }

    function Mv(dd, Od, md) {
      var Fd, Rd, Xd;
      let Kd = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (Tv) return;
      if ((null === (Fd = Hh) || void 0 === Fd ? void 0 : Fd.conn) !== dd) return void(null !== vh && Vh.set(dd, {
        code: Od,
        reason: md
      }));
      Ft("lost");
      const hd = (null === (Rd = Xv) || void 0 === Rd ? void 0 : Rd.conn) !== dd,
        {
          rejoin: vd,
          game: Qd,
          joinedAt: td
        } = Hh;
      jv(), yQ();
      const od = (0, mO.f)(Od, (0, uF.e)(dd));
      if (console.info(`${BX} the game's connection closed with code ${Od} (${null!==(Xd=od.name)&&void 0!==Xd?Xd:"unrecognised"})`), Od === Wd.e.gameOrPluginKick.code || Kd || (0, NW.reportDisconnect)(od, vK, {
          closeReason: md,
          sinceJoinedMs: performance.now() - td,
          game: Qd
        }), od.requiresRefresh) {
        const dd = "outdatedVersion" === od.name,
          md = new Error(`the game's connection closed with code ${Od}`),
          Wd = () => null === Hh && null === vh;
        return void rt({
          site: NW.JOIN_SITE,
          error: md,
          outdated: dd
        }, (() => {
          Wd() && dQ(od, null, !1)
        }), {
          stillWanted: Wd
        })
      }
      const Nd = od.canReconnect ? vd : null,
        qd = null !== Nd && (od.automaticallyReconnect || hd && Qv && "inactivity" === od.name) && Gv();
      dQ(od, Nd, qd)
    }

    function dQ(dd, Od, md) {
      var Wd;
      let Fd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
        reasonKey: null,
        canPlayAgain: !1
      };
      if (bv) return;
      RR.e.unwantedLeave(md && null !== Od && 0 === Sh.size), null === (Wd = Bh) || void 0 === Wd || Wd.abort();
      const Rd = new AbortController;
      Bh = Rd;
      const Xd = null === Od ? null : () => {
        Rd.signal.aborted || (Rd.abort(), Od())
      };
      if (md && null !== Xd) {
        xh = performance.now();
        const dd = new ym.c(fm.b, (() => {
          xh = performance.now(), Xd()
        }));
        Rd.signal.addEventListener("abort", (() => {
          dd.stop()
        }))
      }
      const Kd = {
        code: dd.code,
        name: dd.name,
        reason: dd.reason,
        reasonKey: Fd.reasonKey,
        reconnect: Xd,
        reconnecting: md,
        requiresRefresh: dd.requiresRefresh,
        canPlayAgain: Fd.canPlayAgain
      };
      if (Sh.size > 0)
        for (const vd of [...Sh]) try {
          vd(Kd)
        } catch (hd) {
          console.error(`${BX} an unwanted-leave listener threw`, hd)
        } else sO((0, UO.i)(dd, null !== Xd, md), Rd.signal).then((Od => {
          Od && (null !== Xd ? Xd() : dd.requiresRefresh && (0, NO.k)())
        }))
    }
    const OQ = {
      attachSocket: dd => hQ(dd),
      onConnection: dd => (ih.add(dd), () => {
        ih.delete(dd)
      }),
      sendRaw: (dd, Od) => {
        const md = bK;
        return null !== md && md.conn === dd && qt(md, Od)
      },
      leaveRoom: cv,
      closeSocket: dd => {
        var Od;
        (null === (Od = bK) || void 0 === Od ? void 0 : Od.conn) === dd && vQ()
      },
      flushNet: QQ
    };

    function mQ(dd) {
      var Od;
      let {
        aux: md,
        payload: Wd
      } = dd;
      null === (Od = FK) || void 0 === Od || Od.queueOptions(md, Wd)
    }

    function WQ(dd, Od) {
      mQ(function(dd, Od) {
        return gR = dd ? {
          preventMovement: Od
        } : null, dd ? wR(Od) : {
          aux: Sm.ec.AdEnd,
          payload: YR
        }
      }(dd, Od))
    }

    function FQ(dd) {
      var Od;
      Fh = dd, null === (Od = FK) || void 0 === Od || Od.setUiPrefs(dd)
    }

    function RQ(dd, Od) {
      hK.setMaster(dd, Od)
    }

    function XQ(dd) {
      var Od;
      Rh = dd, null === (Od = FK) || void 0 === Od || Od.setEnvPrefs(dd)
    }

    function KQ(dd) {
      var Od;
      Xh = dd, null === (Od = FK) || void 0 === Od || Od.setLookPrefs(dd)
    }

    function hQ(dd) {
      var Od;
      let md = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new URL(dd.url).origin,
        Wd = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      if (dd.readyState === WebSocket.CLOSING || dd.readyState === WebSocket.CLOSED) return console.warn(`${BX} a closing or closed socket can't be attached`), null;
      const Fd = FK;
      if (!Fd || Fd.isStopped) return console.warn(`${BX} no core is running to attach a socket to`), dd.close(), null;
      if (null === (0, Id.l)()) return console.warn(`${BX} the game has not started to attach a socket to`), dd.close(), null;
      if (jK > Sm.w) return console.warn(`${BX} this core has attached all the sockets it can; reload to play on`), dd.close(), null;
      if (dh && !kK && (dt(Fd, !1, "all"), Fd.isStopped || Tv)) return dd.close(), null;
      vQ();
      const Rd = jK++;
      if (!wQ(Fd, "open", Rd, Wd ? Sm.cc.Resume : 0)) return dd.close(), null;
      Wd || lO.e.reset(), Uh = null === vh ? null : {
        join: vh,
        conn: Rd,
        activated: !1
      }, dd.binaryType = "arraybuffer";
      const Xd = new XW.d((() => {
          ! function(dd, Od) {
            if (bK !== Od || dd.isStopped || null === NQ(Od, PX)) return;
            Od.detach(), bK = null, oQ(dd, Od, PX, "", !0), Od.ws.close()
          }(Fd, Kd)
        })),
        Kd = {
          ws: dd,
          conn: Rd,
          pending: [],
          pendingBytes: 0,
          left: !1,
          resume: Wd,
          token: null,
          detach: () => {
            Xd.dispose(), dd.removeEventListener("message", hd), dd.removeEventListener("open", vd), dd.removeEventListener("close", Qd)
          }
        },
        hd = dd => {
          if (dd.data instanceof ArrayBuffer) {
            var Od;
            const md = new Uint8Array(dd.data);
            Xd.heard(), Kd.token = null !== (Od = (0, KW.c)(md)) && void 0 !== Od ? Od : Kd.token,
              function(dd, Od, md) {
                Bt(dd, (() => {
                  dd.rings.net.writeFrame(Od, md) || dd.crash(Im.r, `a socket frame of ${md.byteLength} bytes did not fit the net-in ring`)
                }));
                const Wd = dd.rings.net.cursor >= LX;
                !Vt() && (Wd || dd.netWrittenSinceFrame >= nX) && dt(dd, !1, document.hidden ? "all" : "budget");
                At(dd)
              }(Fd, Rd, md)
          }
        },
        vd = () => {
          Wd || (0, qd.A)("wasm_socket_open", performance.now());
          for (const Od of Kd.pending.splice(0)) dd.send(Od);
          Kd.pendingBytes = 0
        },
        Qd = dd => {
          if (bK === Kd && Fd.rings.net.cursor > 0 && dt(Fd, !1, "all"), bK === Kd) {
            if (Kd.detach(), bK = null, oQ(Fd, Kd, dd.code, dd.reason) || tQ(Fd, Kd)) return;
            wQ(Fd, "close", Rd), qQ(Rd, Kd.left), Mv(Rd, dd.code, dd.reason)
          }
        };
      return dd.addEventListener("message", hd), dd.addEventListener("open", vd), dd.addEventListener("close", Qd), bK = Kd, null === (Od = (0, Id.l)()) || void 0 === Od || Od.socketAttached(Rd), (0, od.l)({
        websocketUrl: md
      }), Rd
    }

    function vQ() {
      const dd = bK;
      if (!dd) return;
      const Od = FK,
        md = dd.resume;
      md && (QQ(), bK !== dd) || (bK = null, dd.detach(), dd.ws.close(), null !== Od && (tQ(Od, dd) || md && oQ(Od, dd, zX)) || (null !== Od && wQ(Od, "close", dd.conn), qQ(dd.conn, dd.left)))
    }

    function QQ() {
      const dd = FK;
      null !== dd && !dd.isStopped && !Tv && !kK && dd.rings.net.cursor > 0 && dt(dd, !1, "all")
    }

    function tQ(dd, Od) {
      var md;
      if (!Od.resume) return !1;
      const Wd = yh;
      return null !== Wd && null !== Od.token && "" !== Od.token && (Wd.pendingHold = {
        conn: Od.conn,
        token: `${Wd.roomId}:${Od.token}`
      }), wQ(dd, "close", Od.conn), null === (md = (0, Id.l)()) || void 0 === md || md.socketDetached(Od.conn), !0
    }

    function oQ(dd, Od, md) {
      let Wd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "",
        Fd = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
      const Rd = NQ(Od, md);
      if (null === Rd) return !1;
      const {
        jK: Xd,
        token: Kd,
        game: hd,
        joinedAt: vd
      } = Rd;
      if (!wQ(dd, "close", Od.conn, Sm.y.Held)) return !0;
      console.warn(`${BX} the game's connection ${Fd?"went silent":`dropped with code ${md}`}, holding it`);
      const Qd = {
        closeReason: Wd,
        sinceJoinedMs: performance.now() - vd,
        game: hd
      };
      return (0, NW.reportDisconnect)((0, mO.f)(md), vK, Qd, Fd ? "silent" : void 0), Xd.heldConn = Od.conn, Xd.dropCode = md, Xd.pendingHold = {
        conn: Od.conn,
        token: `${Xd.roomId}:${Kd}`
      }, kK || dt(dd, !1, "all"), !0
    }

    function NQ(dd, Od) {
      const md = yh,
        Fd = Hh,
        Rd = dd.token;
      return null === md || null === Fd || Tv || dd.left || Fd.conn !== dd.conn || null === Rd || "" === Rd ? null : (0, Wd.l)(Od) && md.resume.canHoldSeat() ? {
        jK: md,
        token: Rd,
        game: Fd.game,
        joinedAt: Fd.joinedAt
      } : null
    }

    function qQ(dd, Od) {
      var md;
      null === (md = (0, Id.l)()) || void 0 === md || md.closeGame(dd), (0, pR.d)().close(dd), Od || (0, od.l)({
        websocketUrl: null
      })
    }

    function HQ() {
      const dd = ah;
      if (null === dd) return;
      const Od = (0, Id.l)();
      Tv || null === Od || Od.qB(dd) ? ah = null : performance.now() - Oh.pause >= eX && (Oh.pause = performance.now(), console.warn(`${BX} the cmd ring had no room for SetPaused(${dd}): written before the next frame`))
    }

    function yQ() {
      const dd = yh;
      yh = null, null === dd || void 0 === dd || dd.resume.dispose()
    }

    function bQ(dd, Od) {
      var md, Wd;
      const {
        heldConn: Fd
      } = dd, Rd = dd.resume.resumingConn;
      dd.heldConn = 0, dd.pendingHold = null, yh === dd && (yh = null), "left" === Od ? dd.resume.leave() : dd.resume.dispose(), 0 === wh || (null === (md = bK) || void 0 === md ? void 0 : md.conn) !== wh || "left" === Od && (null === (Wd = Kh) || void 0 === Wd ? void 0 : Wd.conn) === wh || gQ(wh), "gaveUp" === Od && 0 !== Rd && gQ(Rd), 0 !== Fd && "refused" !== Od && (console.info(`${BX} the game held through its drop ${"left"===Od?"was left":"is given up"}`), null === FK || FK.isStopped || wQ(FK, "close", Fd), qQ(Fd, !1))
    }

    function TQ(dd, Od) {
      const md = Od.indexOf(":");
      return {
        roomId: md < 0 ? dd.roomId : Od.slice(0, md),
        roomToken: Od.slice(md + 1)
      }
    }

    function pQ(dd) {
      (0, lm.logClientMeasurement)("join_preload", dd, {
        client: "wasm"
      })
    }

    function YQ(dd) {
      var Od;
      bh = dd;
      const md = dd.replayOffer && gh !== dd.conn;
      Yh = md ? dd.conn : 0, Th = md || ph.has(dd.conn) ? 0 : dd.conn, rd.admitted(), dd.conn === wh && (wh = 0);
      const Wd = yh;
      null !== Wd && (null === (Od = Hh) || void 0 === Od ? void 0 : Od.conn) === dd.conn && Wd.resume.onInitialInfo(dd)
    }

    function gQ(dd) {
      var Od;
      const md = bK;
      (null === md || void 0 === md ? void 0 : md.conn) === dd && (md.left = !0, null === (Od = (0, Id.l)()) || void 0 === Od || Od.socketLeft(), (0, od.l)({
        websocketUrl: null
      }), cv(dd) ? setTimeout((() => {
        bK === md && vQ()
      }), WO.h) : vQ())
    }

    function wQ(dd, Od, md) {
      let Wd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        Fd = !1;
      return Bt(dd, (() => {
        const {
          net: Rd
        } = dd.rings;
        Fd = "open" === Od ? Rd.writeOpen(md, Wd) : Rd.writeClose(md, Wd), Fd || dd.crash(Im.r, `a socket ${Od} did not fit the net-in ring`)
      })), Fd
    }

    function aQ(dd, Od, md) {
      let Wd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const Fd = "noContext" === Od ? "noContext" : "blockedAfterLoss" === Od ? "graphicsLost" : dd;
      (0, NW.showUnsupported)(Fd, "unsupported", md, {
        ...Wd,
        decline: Od
      })
    }
    const EQ = 1500;

    function JQ(dd) {
      return (0, Dm.p)(dd) && UQ(dd)
    }

    function UQ(dd) {
      return 1 === dd.missing.length && dd.missing[0] === Dm.d
    }
    const xQ = "wasmNoContextWaited";

    function BQ(dd, Od) {
      const md = UQ(dd),
        Wd = md ? (0, Dm.eb)() : "",
        Fd = Od || (0, Dm._)(Wd) ? "blockedAfterLoss" : md ? "noContext" : "unsupported",
        Rd = `No WebGPU or WebGL2, and WebGL1 lacks ${dd.missing.join(", ")}`;
      return {
        decline: Fd,
        detail: "" === Wd ? Rd : `${Rd}; ${Wd}`,
        details: {
          missing: dd.missing.join(",")
        },
        retries: "unsupported" !== Fd && qv
      }
    }

    function SQ(dd) {
      console.warn(`${BX} ${dd}: reloading once more onto the wasm client`), (0, qR.r)(), (0, NW.flushCrashReports)(NO.e).then(NO.k, NO.k)
    }

    function sQ() {
      return qv && "address" !== DO.y.reason
    }

    function uQ(dd, Od, md, Wd) {
      return nh(dd, Od, md, Wd)
    }

    function VQ() {
      null === zh || null === FK || FK.isStopped || Tv || null !== VK || null === ZX || (VK = zh(ZX, rQ, GQ().follow))
    }

    function iQ() {
      var dd, Od, md;
      return null !== (dd = null === (Od = XK) || void 0 === Od || null === (md = Od.textures) || void 0 === md ? void 0 : md.files()) && void 0 !== dd ? dd : null
    }

    function AQ(dd) {
      GQ().follow((Od => {
        null !== Od && Promise.all([Promise.all([md.e(232), md.e(54)]).then((() => md(55111))), (0, qR.J)()]).then((dd => {
          let [{
            followPagePackFiles: md
          }, Wd] = dd;
          const Fd = null === Wd || (0, Dm.p)(Wd) ? "webgl" : Wd.backend;
          md(Od, FR.g, Fd, (dd => {
            FR.g.setPageFiles(dd)
          }), rQ)
        }), (Od => {
          console.warn(`${BX} the texture pack's files didn't load: the previews draw the shipped ones until the next opens`, Od), dd()
        }))
      }))
    }

    function rQ(dd, Od) {
      console.warn(`${BX} ${dd}`, Od)
    }

    function GQ() {
      return RK ??= new xR({
        load: dd => Promise.all([md.e(232), md.e(67)]).then((() => md(55115))).then((Od => {
          let {
            startPageTexturePackFeed: md
          } = Od;
          return md(rQ, dd)
        })),
        store: qm.h,
        Wt: dd => {
          NK.then((() => {
            (0, NW.reportTexturePackFeedLoadFailure)(dd, vK)
          }))
        }
      }), RK
    }
    const nQ = dd => GQ().follow(dd);

    function LQ() {
      return GQ().loaded()
    }
    const PQ = function(dd, Od, md) {
        let Wd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => performance.now(),
          Fd = 0;
        return async function(Rd, Xd) {
          let Kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => !0;
          const hd = ++Fd,
            vd = Wd() + Od,
            Qd = await
          function(dd, Od) {
            let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {};
            return new Promise((Wd => {
              const Fd = setTimeout((() => {
                Wd(null), dd.then((dd => {
                  null !== dd && (dd.joinedWithout(), md(dd))
                }))
              }), Od);
              dd.then((dd => {
                clearTimeout(Fd), Wd(dd)
              }))
            }))
          }(dd(Rd), Od, (dd => {
            hd === Fd && Kd() && Xd(dd, Wd() + Od).catch((dd => {
              md("the texture pack step after the join failed", dd)
            }))
          }));
          return null === Qd ? null : Xd(Qd, vd)
        }
      }((dd => (0, iO.k)(dd) ? GQ().request() : GQ().forJoin()), UR.b, rQ),
      zQ = function(dd, Od) {
        let md = !1;
        return {
          setGamePackConfirm: dd => {
            md = null !== dd, Od(dd)
          },
          packStep: (Od, Wd, Fd) => dd(Od, Wd, (() => md && Fd()))
        }
      }(PQ, (dd => {
        GQ().setGamePackConfirm(dd)
      }));

    function cQ(dd) {
      zQ.setGamePackConfirm(dd)
    }

    function jQ() {
      if (Tv || null !== Ih || null === ch || null === eh) return;
      const {
        backend: dd,
        canvas: Od,
        fallbackReason: md,
        adapterVendor: Wd
      } = eh, Fd = ch;
      ch = null;
      try {
        Ih = Fd({
          backend: dd,
          canvas: Od,
          fallbackReason: md,
          adapterVendor: Wd,
          joinedGame: () => Tv ? null : Kh,
          canSend: () => !Tv && null !== Kh && Kh.conn === Th,
          inGame: eQ,
          shaderPackReach: () => {
            var dd, Od;
            return null !== (dd = null === (Od = nK) || void 0 === Od ? void 0 : Od.reachInJoinedGame()) && void 0 !== dd ? dd : null
          },
          lH: () => iK,
          msaa: () => Dh > 1,
          writeCmd: (dd, Od, md) => null !== ZX && ZX(dd, Od, md),
          takeFailedMeshJobs: () => {
            var dd, Od;
            return null !== (dd = null === (Od = gK) || void 0 === Od ? void 0 : Od.takeFailedMeshJobs()) && void 0 !== dd ? dd : 0
          },
          readLoadCounts: dd => {
            var Od, md;
            return null !== (Od = null === (md = FK) || void 0 === md ? void 0 : md.readLoadCounts(dd)) && void 0 !== Od && Od
          },
          mainStalled: (dd, Od, md, Wd) => {
            (0, NW.reportMainStall)(dd, Od, md, Wd, vK)
          },
          Zx: dd => {
            var Od, md, Wd;
            return null !== (Od = null === (md = Gh) || void 0 === md || null === (Wd = md.Zx) || void 0 === Wd ? void 0 : Wd.call(md, dd)) && void 0 !== Od ? Od : -1
          }
        })
      } catch (Rd) {
        console.error(`${BX} the frame telemetry didn't start`, Rd)
      }
    }

    function DQ(dd, Od) {
      try {
        var md, Wd, Fd;
        const Rd = Ah && null !== (md = null === (Wd = FK) || void 0 === Wd || null === (Fd = Wd.lastHeader) || void 0 === Fd ? void 0 : Fd.renderPending) && void 0 !== md ? md : 0;
        (0, kW.f)(Od, dd, eQ() && !(null !== gR), Rd)
      } catch (Rd) {
        (0, kW.w)(), console.error(`${BX} the quality steps stopped`, Rd)
      }
    }

    function eQ() {
      return null !== Kh && Xv === Kh && !Tv
    }

    function IQ(dd) {
      const Od = Ih;
      Ih = null;
      try {
        null === Od || void 0 === Od || Od.stop()
      } catch {}
      console.error(`${BX} the frame telemetry threw: it stops`, dd)
    }

    function lQ(dd) {
      var Od, md, Wd, Fd;
      if ((0, pR.d)().fire(dd), "message" === dd.type) {
        if (fK++, dd.tX === Sm.Lc.ERROR && null !== vh) {
          var Rd;
          const {
            text: Od,
            dropsCache: md
          } = (0, mO.m)((new TextDecoder).decode(dd.payload));
          sh ||= md, (null === (Rd = Uh) || void 0 === Rd ? void 0 : Rd.conn) === dd.conn && (uh = Od)
        } else if (dd.tX === sm.hc.ResumeComplete) {
          var Xd;
          gh = dd.conn, dd.conn === Yh && (Yh = 0, Th = ph.has(dd.conn) ? 0 : dd.conn), null === (Xd = yh) || void 0 === Xd || Xd.resume.onResumeComplete(dd.conn)
        }
        return
      }
      dd.phase === Sm.C.Left ? MK = dd.conn : dd.phase === Sm.C.Activated && (null === (Od = Uh) || void 0 === Od ? void 0 : Od.conn) === dd.conn ? Uh.activated = !0 : dd.phase === Sm.C.Resumed ? function(dd) {
        var Od, md;
        wh = dd;
        const Wd = yh;
        if (null === Wd || 0 === Wd.heldConn || (null === (Od = bK) || void 0 === Od ? void 0 : Od.conn) !== dd || !bK.resume || null === Hh) return;
        console.info(`${BX} the game resumed on conn ${dd}, waiting for its InitialInfo`);
        const Fd = Wd.heldConn;
        Wd.heldConn = 0, bK.resume = !1, Hh.conn = dd, (null === (md = Nh) || void 0 === md ? void 0 : md.conn) === Fd && (Nh = {
          conn: dd,
          info: Nh.info
        }), lO.e.apply({
          shopInfo: null,
          _shopVersion: AO.e
        })
      }(dd.conn) : dd.phase === Sm.C.Held ? function(dd) {
        var Od;
        const md = yh,
          Wd = null !== (Od = null === md || void 0 === md ? void 0 : md.pendingHold) && void 0 !== Od ? Od : null;
        if (null !== md && null !== Wd && Wd.conn === dd) return md.pendingHold = null, md.heldConn = dd, wh = 0, console.warn(`${BX} the core holds the game, reconnecting`), void md.resume.onDropped(Wd.token);
        if (dd === wh) {
          wh = 0;
          const Od = FK;
          null === Od || Od.isStopped || (console.info(`${BX} the core held again a resumed game the shell ended before its InitialInfo: closing it again`), wQ(Od, "close", dd))
        }
      }(dd.conn) : dd.phase === Sm.C.Closed && (null === (md = yh) || void 0 === md || null === (Wd = md.pendingHold) || void 0 === Wd ? void 0 : Wd.conn) === dd.conn && (yh.heldConn === dd.conn ? function(dd) {
        const Od = dd.heldConn,
          md = dd.dropCode;
        bQ(dd, "refused"), console.info(`${BX} the core didn't hold the game through its drop: it hadn't started`), queueMicrotask((() => {
          qQ(Od, !1), Mv(Od, md, "", !0)
        }))
      }(yh) : yh.pendingHold = null), dd.phase !== Sm.C.Held && dd.phase !== Sm.C.Left && dd.phase !== Sm.C.Closed || (ph.add(dd.conn), dd.conn === Th && (Th = 0));
      const Kd = Object.keys(Sm.C).find((Od => Sm.C[Od] === dd.phase)),
        hd = 0 === dd.code ? "" : ` (code ${dd.code})`;
      console.info(`${BX} conn ${dd.conn}: ${null!==Kd&&void 0!==Kd?Kd:dd.phase}${hd}, ${fK} raw messages so far`), (null === (Fd = Kh) || void 0 === Fd ? void 0 : Fd.conn) !== dd.conn || dd.phase !== Sm.C.Left && dd.phase !== Sm.C.Closed || zv(null), oh !== dd.conn || dd.phase !== Sm.C.Left && dd.phase !== Sm.C.Closed || (oh = null, null === Kh && null === vh && RR.e.setGame(void 0));
      for (const Qd of [...ih]) try {
        Qd(dd.conn, dd.phase, dd.code)
      } catch (vd) {
        (0, um.p)(vd, `${BX} a connection listener threw`)
      }
    }
    const CQ = 9e4,
      ZQ = 1e3;

    function kQ() {
      (0, qR.r)(), Nv.forget(), null === Kh && null === vh || (0, JW.i)(), queueMicrotask((() => {
        try {
          yt()
        } catch (dd) {
          console.warn(`${BX} stopping before the reload threw`, dd)
        }(0, NW.flushCrashReports)(NO.e).then(NO.k, NO.k)
      }))
    }

    function fQ() {
      const dd = FK;
      null === dd || dd.isStopped || null === bK || kK || !dd.hasPendingCommands() || dt(dd, !1, "budget")
    }

    function MQ(dd) {
      var Od;
      const md = Kh;
      dd.persisted || null === md || (null === (Od = bK) || void 0 === Od ? void 0 : Od.conn) !== md.conn || bK.left || md.leave()
    }

    function dt(dd, Od, Wd) {
      let Fd = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const Rd = kK;
      kK = !0;
      try {
        const Rd = dd.rings.net.cursor >= LX;
        Rd && "all" !== Wd && !document.hidden && pt("backlog", `a shown tab's net-in is ${dd.rings.net.cursor} bytes behind: one frame reads it all`);
        return function(dd, Od, Wd, Fd) {
          var Rd, Xd, Kd, hd;
          if (Tv) return !1;
          if (Bt(dd, mt), Tv || dd.isStopped) return !1;
          ot() && zK("modelsIn");
          HQ(), DK = performance.now(), MK = null, dh = !1, (0, ed.S)(), null === (Rd = xK) || void 0 === Rd || Rd.beforeFrame(), tF(DK, dd), (0, ed.I)(DK, Wt), ZK = !0;
          const vd = Od && tt();
          let Qd;
          try {
            Qd = dd.frame(DK, vd, Wd)
          } finally {
            ZK = !1
          }
          if (!Qd) return !1;
          jh.observe(null !== (Xd = null === (Kd = dd.lastHeader) || void 0 === Kd ? void 0 : Kd.chunksCancelled) && void 0 !== Xd ? Xd : 0);
          const td = dd.lastFrameKind,
            od = (0, tm.d)(td);
          (function(dd) {
            null !== jR && jR.afterFrame(performance.now(), dd)
          })(od), null === (hd = lh) || void 0 === hd || hd.frame(dd, DK, td), Od && (hv = od);
          od && ((0, Rm.e)(DK), Fv.frame(DK), tv.end());
          if (null !== Ih) try {
            Ih.frameRan(dd, DK, performance.now(), td)
          } catch (Hd) {
            IQ(Hd)
          }
          "drawn" === td && Qt() && function() {
            for (const dd of [...oR]) dd()
          }();
          dd.forEachNetOut(Nt);
          const Nd = bK;
          null !== MK && (null === Nd || void 0 === Nd ? void 0 : Nd.conn) === MK && qt(Nd, WO.m);
          vt(dd),
            function(dd) {
              const Od = 0 !== (dd.headerWord(sm.I.LoadSteps) & sm.V.JoinPreload);
              Od !== th && (th = Od, (0, NW.setCrashAdPreload)(Od), (0, pW.Z)())
            }(dd), Od && (! function(dd) {
              var Od, Wd, Fd;
              if (null === Kh || !tt()) return;
              const Rd = dd.headerWord(sm.I.LoadSteps);
              null === Wv || Xv === Kh && !Wv.frame(DK, 0 !== (Rd & sm.X.TerrainDrawn)) || (Wv = null);
              if (0 === (Rd & sm.V.PlayerBound)) return;
              const Xd = dd.lastHeader,
                Kd = !Ah || 0 === (null === Xd || void 0 === Xd ? void 0 : Xd.renderPending);
              !fh && Kd && (fh = !0, performance.mark(GX));
              if (Xv === Kh) return;
              const hd = null !== (Od = null === Xd || void 0 === Xd ? void 0 : Xd.firstView) && void 0 !== Od ? Od : Sm.ab.NotYet;
              if (Ah && hd === Sm.ab.NotYet) return;
              if (kh && (!0 !== (null === (Wd = (0, Id.l)()) || void 0 === Wd ? void 0 : Wd.isSessionLive) || !Kd)) return;
              var vd;
              Xv = Kh, tv.shown(), Ah && null !== Hh && function(dd, Od) {
                let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : qm.k;
                const Wd = Array.from(Od).filter(xF).slice(0, UF);
                if ("" === dd || 0 === Wd.length) return;
                const Fd = SF(md).filter((Od => Od.game !== dd));
                md.setItem(EF, [{
                  game: dd,
                  codes: Wd
                }, ...Fd].slice(0, JF))
              }(Hh.game, null !== (vd = dd.firstViewTerrainCodes()) && void 0 !== vd ? vd : []);
              const Qd = Kh;
              if (setTimeout((() => {
                  Kh === Qd && (0, qd.q)()
                }), 0), null === (Fd = nK) || void 0 === Fd || Fd.playable(), function() {
                  clearTimeout(yK), yK = setTimeout((() => {
                    eQ() && ut((dd => {
                      let {
                        prefetchWorldgenWorker: Od
                      } = dd;
                      Od()
                    }))
                  }), CX)
                }(), kh) return;
              kh = !0, Fv.shown(), performance.mark(rX), (0, rR.o)("render") && Promise.all([md.e(91), md.e(57)]).then((() => md(5410))).then((dd => {
                let {
                  renderDebugPlayable: Od
                } = dd;
                Od()
              }), (dd => {
                console.warn("The render debug topic didn't load", dd)
              }));
              const td = Math.round(performance.now()),
                od = dd.readViewQueuedPrograms();
              null !== od && (0, qd.A)("wasm_view_links", td, (0, yd.Fb)(od));
              const Nd = null === mv || null === dv ? 0 : Math.max(0, dv - mv),
                Hd = null === mv ? 0 : Math.max(0, td - mv),
                bd = Ah ? dd.readFirstViewWait(Nd, Hd) : null;
              null !== bd && (0, qd.y)(bd);
              if (Ah && hd !== Sm.ab.Drawn) {
                const Od = hd === Sm.ab.HeldBackstop ? "held_draws" : "long",
                  {
                    cause: md
                  } = Kt(dd);
                if (console.warn(`${BX} playable at ${td} ms on the first view's ${Od} backstop, ${md}: it wasn't drawn whole in time`), (0, qd.A)("wasm_view_backstop", td, `${Od}:${md}`), "long" === Od) {
                  var Td, pd;
                  const Od = null !== (Td = null === (pd = Hh) || void 0 === pd ? void 0 : pd.game) && void 0 !== Td ? Td : "";
                  Wv = new UW.b((() => {
                    const {
                      cause: md,
                      census: Wd
                    } = Kt(dd);
                    (0, NW.reportFirstViewNoTerrain)(Od, md, Wd, vK), (0, jO.u)("noTerrain")
                  }))
                }
              } else console.info(`${BX} playable at ${td} ms${Ah?"":" (no renderer)"}`);
              setTimeout(Ph, 0), (0, ZO.d)().catch((dd => {
                console.error(`${BX} item sprites didn't load, so item particles show the missing texture`, dd)
              })), CF.d.warm()
            }(dd), od && null !== Kh && 0 !== (dd.headerWord(sm.I.LoadSteps) & sm.X.MeshLanded) && (Kv = Kh), (0, ZF.g)(null !== Kh && Kv === Kh && Xv !== Kh), (0, ZF.h)(null !== Kh));
          (0, Im.J)(dd, {
            worldgen: pK,
            mesh: gK
          }),
          function(dd) {
            dd.forEachEvent(NF);
            for (const Od of oF) try {
              (0, XF.c)(Od)
            } catch (Hd) {
              if ((0, um.j)(Hd)) {
                dd.crashOn(Im.k, Hd);
                break
              }
              console.error(`${hF} an input action listener threw`, Hd)
            }
            oF.length = 0
          }(dd), Fd && (0, Qm.e)();
          return !dd.isStopped
        }(dd, Od, "all" === Wd || Rd, Fd)
      } finally {
        kK = Rd, Rd || (eK = performance.now(), Lv())
      }
    }

    function Ot(dd) {
      console.error(`${BX} a frame-start listener threw`, dd)
    }

    function mt() {
      var dd, Od, md, Wd;
      null === (dd = SK) || void 0 === dd || dd.drain(ZX, kX), null === (Od = AK) || void 0 === Od || Od.drain(ZX), null === (md = rK) || void 0 === md || md.drain(performance.now()), Lh(ZX), null === (Wd = VK) || void 0 === Wd || Wd.drain()
    }

    function Wt(dd) {
      console.error(`${BX} a before-frame listener threw`, dd)
    }

    function Ft(dd) {
      var Od, md;
      const Wd = FK;
      if (null === Wd) return;
      if (Wd.isStopped || Tv || (0, qR.b)()) return void Fv.shown();
      const Fd = Fv.end(dd, performance.now());
      if (null === Fd) return;
      const {
        cause: Rd,
        census: Xd,
        loadSteps: Kd
      } = Kt(Wd), hd = {
        cause: Rd,
        bound: 0 !== (Kd & sm.V.PlayerBound),
        preload: 0 !== (Kd & sm.V.JoinPreload),
        startupLoaded: tt(),
        renderPending: null !== (Od = null === (md = Wd.lastHeader) || void 0 === md ? void 0 : md.renderPending) && void 0 !== Od ? Od : 0,
        wait: Wd.readFirstViewWait(0, 0),
        canvasEmpty: null !== eh && (0, xW.e)(eh.canvas)
      };
      hd.bound && null === hd.wait && console.warn(`${BX} the first view's wait couldn't be read as the load ended: its report says lacked none`), (0, NW.reportFirstViewUnshown)(Rv, Fd, hd, Xd, vK), "hidden" !== dd && "pagehide" !== dd || (0, NW.flushCrashReports)(NO.e)
    }

    function Rt() {
      document.hidden ? (Qv = !0, Ft("hidden")) : Fv.pageShown(performance.now())
    }

    function Xt() {
      Ft(document.hidden ? "hidden" : "pagehide")
    }

    function Kt(dd) {
      const Od = (0, Id.l)(),
        md = (0, Id.u)(),
        Wd = null === Od || null === md ? null : md.readDrawCensus(Od.api),
        Fd = dd.headerWord(sm.I.LoadSteps);
      return {
        cause: (0, UW.k)(Fd, Wd),
        census: Wd,
        loadSteps: Fd
      }
    }
    const ht = {
      ChunkRequested: "wasm_chunk_requested",
      ChunkStored: "wasm_chunk_stored",
      MeshLanded: "wasm_mesh_landed",
      PlayerChunk: "wasm_player_chunk",
      TerrainDrawn: "wasm_terrain_drawn"
    };

    function vt(dd) {
      var Od;
      if (kh) return;
      if (null === dv && tt() && (dv = performance.now()), null === Kh || 0 === (dd.headerWord(sm.I.LoadSteps) & sm.V.PlayerBound) ? mv = null : mv ??= performance.now(), null === vh && null === Kh) return;
      null === dv || Ov || (Ov = !0, (0, qd.A)("wasm_startup_loaded", dv));
      let md = 0;
      null !== Kh ? md = -1 : !0 === (null === (Od = Uh) || void 0 === Od ? void 0 : Od.activated) && (md = ~sm.X.TerrainDrawn);
      const Wd = dd.headerWord(sm.I.LoadSteps) & md & ~Mh;
      if (0 === Wd) return;
      Mh |= Wd;
      const Fd = performance.now();
      var Rd, Xd, Kd;
      0 !== (Wd & sm.X.PlayerChunk) && (Fv.playerChunk(Fd, document.hidden), Rv = null !== (Rd = null !== (Xd = null === (Kd = Hh) || void 0 === Kd ? void 0 : Kd.game) && void 0 !== Xd ? Xd : Qh) && void 0 !== Rd ? Rd : "", (0, NW.warmCrashCounts)());
      for (const [hd, vd] of Object.entries(ht)) 0 !== (Wd & sm.X[hd]) && (0, qd.A)(vd, Fd)
    }

    function Qt() {
      return Ah && tt()
    }

    function tt() {
      return GK && ot()
    }

    function ot() {
      return null === SK || SK.startupDone
    }

    function Nt(dd, Od) {
      const md = bK;
      (null === md || void 0 === md ? void 0 : md.conn) === dd ? qt(md, Od) : Wh++
    }

    function qt(dd, Od) {
      const {
        ws: md
      } = dd;
      return md.readyState === WebSocket.OPEN ? (md.send(Od), !0) : md.readyState === WebSocket.CONNECTING && dd.pendingBytes + Od.byteLength <= DX ? (dd.pending.push(Od.slice()), dd.pendingBytes += Od.byteLength, !0) : (Wh++, !1)
    }

    function Ht() {
      return null !== Kh && Qt()
    }

    function yt() {
      var dd, Od, md, Wd, Fd, Rd, Xd, Kd, hd, vd, Qd, td, od, Nd, qd, Hd, yd;
      Tv = !0, vv.stop(), tv.end(), (0, nR.endLookDebugTake)(), jR = null, yQ(), (0, ed.O)().unlockPointer(), (0, ed.M)(null), null === (dd = BK) || void 0 === dd || dd(), BK = null, null === (Od = (0, Id.u)()) || void 0 === Od || Od.followCursorAim(null), (0, Qm.C)(), (0, Id.h)(), hK.stop(), null === (md = Ch) || void 0 === md || md(), Ch = null, null === (Wd = Zh) || void 0 === Wd || Wd(), Zh = null, null === (Fd = Ih) || void 0 === Fd || Fd.stop(), Ih = null, (0, BW.j)(null), null === (Rd = TK) || void 0 === Rd || Rd(), TK = null, null === (Xd = pK) || void 0 === Xd || Xd.stop(), pK = null, null === (Kd = gK) || void 0 === Kd || Kd.stop(), gK = null, null !== (hd = XK) && void 0 !== hd && null !== (vd = hd.textures) && void 0 !== vd && vd.assets && (0, mR.j)(null), null === (Qd = XK) || void 0 === Qd || Qd.stop(), XK = null, KK = null;
      const bd = wK;
      wK = null, bd && (bd.stop(), xt(bd)), null === (td = AK) || void 0 === td || td.dispose(), AK = null, null === (od = rK) || void 0 === od || od.dispose(), rK = null, SK = null, null === (Nd = uK) || void 0 === Nd || Nd(), uK = null, null === (qd = UK) || void 0 === qd || qd(), UK = null, null !== CK && (clearTimeout(CK), CK = null), null === (Hd = xK) || void 0 === Hd || Hd.stop(), xK = null, iv(), RR.e.release(), vQ();
      const Td = VK;
      VK = null;
      try {
        null === Td || void 0 === Td || Td.dispose()
      } catch (pd) {
        console.warn(`${BX} the sky's images didn't release`, pd)
      }(0, kF.f)(null), null === (yd = mK) || void 0 === yd || yd.pagePreviews().endSession(null === (0, GO.m)())
    }

    function bt(dd, Od) {
      var md, Wd;
      const Fd = null !== (md = null === (Wd = wK) || void 0 === Wd ? void 0 : Wd.details()) && void 0 !== md ? md : {},
        Rd = dd.site === sX || dd.site === uX || dd.site === NW.RENDER_RELOAD_SITE || dd.site === VX ? dd.error instanceof WebAssembly.RuntimeError || dd.error instanceof Pm.e : !(0, Dm.t)(dd.error) && (0, Im.F)(dd);
      Rd && dd.error instanceof Error && (0, GO.T)(dd.error);
      const Xd = Rd || dd.site === Im.u ? (0, NW.readTrap)(dd.error) : null,
        Kd = null !== Xd && (0, im.h)(Xd.kind, Xd.refusedBytes) ? Xd.refusedBytes : 0,
        hd = (0, vW.l)(),
        vd = null === aK ? (0, eF.t)(function() {
          try {
            return (0, GO.t)().buffer.byteLength
          } catch {
            return 0
          }
        }(), Kd, hd) : aK.ceilingMayRefuse(Kd, hd),
        Qd = Kd > 0 && !vd && sQ() && !(0, qR.b)() ? (0, vW.o)() : void 0;
      var td;
      if (yt(), (0, qR.b)()) return Nv.releaseNow(), console.warn(`${BX} the session stopped at ${dd.site} as the page reloads`, dd.error), void((0, Dm.t)(dd.error) || (null === (td = dd.header) || void 0 === td ? void 0 : td.lastError) === Sm.F.CoreBusy || (0, NW.reportStoppedCore)(dd, Od, Xd, {
        memoryDetails: Fd,
        memoryStep: Qd
      }));
      (0, NW.showCrash)(dd, Od, Xd, {
        memoryDetails: Fd,
        memoryStep: Qd
      })
    }

    function Tt(dd) {
      var Od, md;
      let {
        text: Wd,
        reload: Fd,
        stillBlocked: Rd
      } = dd;
      if (bv) return;
      bv = !0, (0, pW.ob)(), null === (Od = Bh) || void 0 === Od || Od.abort(), Bh = null, RR.e.release();
      const Xd = qv ? null !== (md = Wd.cancel) && void 0 !== md ? md : "general:back" : null;
      !async function(dd, Od, md) {
        let Wd = dd;
        for (; await sO(Wd) && Od;) {
          if (null === md || Hm(!1) || Hm(!0)) return void(0, NO.k)();
          Wd = md
        }
        qv && (0, NO.i)("/")
      }({
        ...Wd,
        cancel: Xd
      }, Fd, null === Rd ? null : {
        ...Rd,
        cancel: Xd
      })
    }

    function pt(dd, Od) {
      const md = performance.now();
      return !(md - Oh[dd] < eX) && (Oh[dd] = md, console.warn(`${BX} ${Od}`), !0)
    }

    function Yt(dd) {
      const {
        input: Od,
        net: md,
        worker: Wd
      } = dd.rings, Fd = dd.optionsDropped, Rd = Od.dropped + Fd + md.dropped + Wd.dropped + Wh;
      Rd !== mh && pt("dropped", `${Rd} records dropped so far (input ${Od.dropped}, options ${Fd}, net ${md.dropped}, worker ${Wd.dropped}, net-out ${Wh})`) && (mh = Rd)
    }

    function gt() {
      var dd, Od;
      const md = (0, TW.f)();
      if (null === md) return null;
      const Wd = (0, EW.t)(md);
      return {
        ...Wd,
        horizontal: Math.min(Wd.horizontal, null !== (dd = null === (Od = wK) || void 0 === Od ? void 0 : Od.shedDistanceInUse()) && void 0 !== dd ? dd : 1 / 0)
      }
    }
    const wt = new WeakSet;

    function Et(dd) {
      var Od, md;
      return {
        samples: Ah ? Dh : null,
        sunShadows: dd,
        renderDistance: null !== (Od = null === (md = gt()) || void 0 === md ? void 0 : md.horizontal) && void 0 !== Od ? Od : null
      }
    }

    function Jt(dd) {
      Qh = dd, (0, pW.Z)()
    }

    function Ut() {
      var dd, Od, md;
      const Wd = gt();
      return {
        ...null === (dd = wK) || void 0 === dd ? void 0 : dd.pageKillSnapshot(),
        renderDistance: null !== (Od = null === Wd || void 0 === Wd ? void 0 : Wd.horizontal) && void 0 !== Od ? Od : null,
        renderDistanceVertical: null !== (md = null === Wd || void 0 === Wd ? void 0 : Wd.vertical) && void 0 !== md ? md : null,
        chunkCap: EK,
        budgetBasis: JK,
        renderBackend: (0, qR.E)(),
        adPreload: th,
        ...(0, YW.c)(Qh)
      }
    }

    function xt(dd) {
      var Od;
      console.info(`${BX} wasm memory at the session's end`, dd.details());
      const {
        wasmMainMiB: md,
        wasmWorkersMiB: Wd,
        peakStoredChunks: Fd
      } = dd.pageKillSnapshot(), Rd = navigator.deviceMemory;
      (0, lm.logClientMeasurement)("wasm_memory_end", {
        wasmMainMiB: md,
        wasmWorkersMiB: Wd,
        peakStoredChunks: Fd
      }, {
        client: "wasm",
        renderBackend: null !== (Od = (0, qR.E)()) && void 0 !== Od ? Od : "none",
        os: (0, gW.getOperatingSystem)(),
        deviceMemory: String(null !== Rd && void 0 !== Rd ? Rd : "unreported")
      })
    }

    function Bt(dd, Od) {
      if (!dd.isStopped) try {
        Od()
      } catch (md) {
        dd.crash(Im.w, md)
      }
    }

    function St() {
      return YK ??= md.e(84).then((() => md(55121))).catch((dd => {
        throw YK = null, dd
      })), YK
    }
    async function st() {
      const {
        createWorldgenWorker: dd,
        worldgenWorkerReady: Od
      } = await St();
      return await Od(), dd
    }

    function ut(dd) {
      var Od;
      null === (Od = YK) || void 0 === Od || Od.then(dd, (() => {}))
    }

    function Vt() {
      return performance.now() - Math.max(eK, IK) >= IX
    }

    function it(dd) {
      const Od = document.hidden || lK ? "all" : "budget";
      lK = !0;
      const md = dt(dd, !1, Od);
      var Wd;
      md && (Yt(dd), null === (Wd = wK) || void 0 === Wd || Wd.afterFrame());
      return md
    }

    function At(dd) {
      dd.isStopped || 0 === dd.rings.net.cursor || Vt() && !it(dd) || dd.rings.net.cursor > 0 && performance.now() - IK >= IX / 2 && function(dd) {
        CK ??= setTimeout((() => {
          CK = null, At(dd)
        }), IX)
      }(dd)
    }

    function rt(dd, Od) {
      return async function(dd, Od, md) {
        let {
          stop: Wd,
          stillWanted: Fd,
          beforeReload: Rd
        } = md;
        const Xd = await (0, aF.g)(dd, {
          stillWanted: Fd,
          beforeReload: async () => {
            Wd(), await Promise.all([(0, NW.flushCrashReports)(NO.e), null === Rd || void 0 === Rd ? void 0 : Rd()])
          },
          reload: NO.k
        });
        return Xd || Od(), Xd
      }(dd, Od, {
        ...arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        stop: yt
      })
    }
    let Gt = !1;

    function nt() {
      return Gt = !0, async function(dd, Od, Wd) {
        const {
          gamePackSource: Fd
        } = await md.e(132).then((() => md(42999)));
        await zQ.packStep(dd, ((md, Wd) => md.packForGame(dd, Fd(Od), Wd)), Wd)
      }(...arguments)
    }

    function Lt(dd) {
      ! function(dd, Od) {
        dd((dd => {
          null === dd || void 0 === dd || dd.subscribe((dd => {
            let {
              pack: md,
              gameSource: Wd
            } = dd;
            Od(null === Wd || null === md ? null : {
              pack: md,
              source: "" === Wd ? null : Wd
            })
          }))
        }))
      }(nQ, dd)
    }
    let Pt = !1,
      zt = null,
      ct = !1,
      jt = !1;

    function Dt() {
      var dd;
      Pt || (Pt = !0, BO = (dd, Od) => (0, pO.B)(YO.f.get().getCurrentLanguageCode(), dd, Od), Jv("play", tO), (0, od.j)(new Fo), Kd.gameBridge.attach(OO), kt().catch((() => {})), (0, Id.w)((dd => {
        aO(dd.setTextHost)
      })), dd = lt, Sh.add(dd), function(dd) {
        for (const Od of LK) dd(Od);
        PK.add(dd)
      }((dd => {
        It(et[dd])
      })))
    }
    const et = {
      booted: Rd.l.INITIALISE_NOA,
      texturesIn: Rd.l.REGISTRATION,
      modelsIn: Rd.l.SETUP_LIFEFORMS
    };

    function It(dd) {
      hd.j.lQ("matchmakeAndPlayStepCompleted", {
        step: dd,
        totalSubSteps: 1
      })
    }

    function lt(dd) {
      if (!ct) return;
      const {
        gameNameWithVariation: Od,
        lobbyName: md
      } = (0, od.b)();
      if (dd.code === Wd.e.serverUpdating.code) return (new Fo).leaveLive(), void Zt(Od, md);
      Pd.e.leftGame(Od, dd.code), hd.j.lQ("unwantedLeftGame", {
        reason: Ct(dd),
        requiresRefresh: dd.requiresRefresh,
        canReconnect: null !== dd.reconnect,
        automaticallyReconnect: dd.reconnecting,
        canPlayAgain: dd.canPlayAgain,
        gameNameWithVariation: Od,
        lobbyName: md
      }), (new Fo).leaveLive()
    }

    function Ct(dd) {
      return null !== dd.reasonKey ? {
        translationKey: dd.reasonKey
      } : "gameOrPluginKick" === dd.name ? (0, uO.e)(dd.reason) : `You have disconnected from the server.\n${dd.reason}`
    }

    function Zt(dd, Od) {
      var Wd;
      Wd = (0, vd.F)(dd, Od), Promise.resolve().then((() => md(1641))).then((dd => {
        let {
          navigatePreserveSearch: Od
        } = dd;
        Od(Wd)
      })).catch((dd => {
        console.warn("[bloxd-wasm-client] the page's router didn't navigate: loading the page instead", dd), (0, NO.i)(Wd)
      }))
    }

    function kt() {
      return zt ??= Promise.all([md.e(85), md.e(89), md.e(86), md.e(87), md.e(88), md.e(105), md.e(102), md.e(307), md.e(127), md.e(281), md.e(255), md.e(247), md.e(55)]).then((() => md(42968))).then((dd => {
        try {
          dd.attachPlayGameSources()
        } catch (Od) {
          throw console.error("[bloxd-wasm-client] the play sources did not attach", Od),
            function(dd) {
              NK.then((Od => {
                null === Od || Od.isStopped || Tv ? console.warn(`${BX} the play sources threw as they attached, after the client stopped`, dd) : bt({
                  site: VX,
                  error: dd,
                  header: null
                }, vK)
              }))
            }(Od), Od
        }
      }), (dd => {
        throw zt = null, new Id.e(dd)
      })), zt
    }
    async function ft(dd, Od) {
      Dt(), Gt = !0, ct = !0;
      let md = {
          place: dd.place,
          matchedAt: dd.matchedAt
        },
        Xd = dd.place.gameNameWithVariation;
      const Kd = (0, td.f)();
      let hd = null;
      const vd = await Sv({
        matchmake: async () => {
          let Od = md;
          if (md = null, null === Od) {
            const md = await dd.rematch();
            if (md.isError()) throw hd = md.asError().forward(), new Error(md.asError().message);
            Od = {
              place: md.getValue(),
              matchedAt: performance.now()
            }
          }
          Xd = Od.place.gameNameWithVariation, await (0, Hd.d)();
          return {
            target: await (0, RO.d)(dd.userContext, Od.place, LQ(), Kd),
            matchedAt: Od.matchedAt,
            freshMs: RO.c
          }
        },
        pageReady: kt,
        onFailure: (dd, Od) => {
          null === hd && function(dd, Od) {
            (0, NW.reportPageJoinFailure)(dd, vK, Od)
          }(dd, {
            sinceJoinStartMs: Od,
            game: Xd
          })
        },
        rejoin: () => () => {},
        invalidateTrafficCode: () => dd.userContext.invalidateTrafficCode(),
        signal: Od
      });
      switch (vd.kind) {
        case "joined":
          if (Kd) {
            setTimeout((() => {
              rd.ready()
            }), 0);
            const {
              game: dd
            } = vd;
            (0, td.p)((() => {
              dd.endJoinAd() && ((0, qd.u)(), rd.adEnded())
            }))
          }
          return jt || (jt = !0, (0, nd.e)()), ct ? (It(Rd.l.CONNECT_TO_GAME_SERVER), It(Rd.l.SHADER_PACK), function() {
            var dd, Od;
            return null !== (dd = null === (Od = nK) || void 0 === Od ? void 0 : Od.runsInJoinedGame()) && void 0 !== dd && dd
          }() && (0, Gd.i)(dd.userContext, Xd).catch((dd => {
            console.error("Failed to report the shader pack session", dd)
          })), function() {
            const dd = function() {
              var dd, Od;
              return null !== (dd = null === (Od = nK) || void 0 === Od ? void 0 : Od.couldntRunInJoinedGame()) && void 0 !== dd ? dd : null
            }();
            null !== dd && (0, Gd.e)(dd)
          }(), Fd.e.value(void 0)) : Wo("The server ended the game as it joined");
        case "failed":
          if (!vd.reloading) {
            if (null !== hd) return hd;
            if ((vd.error instanceof WO.n || vd.error instanceof WO.e) && vd.error.code === Wd.e.serverUpdating.code) {
              if (Od.aborted) return Wo("Left the game while it loaded");
              const {
                gameNameWithVariation: dd,
                lobbyName: md
              } = (0, od.b)();
              return Zt(dd, md), Wo("The server is updating")
            }
            return vd.error instanceof oO.e ? Fd.e.errorWithCode(vd.error.messageKey, Rd.l.SHADER_PACK, {
              severity: "medium"
            }) : Fd.e.errorWithCode(function(dd) {
              if (dd instanceof WO.v || dd instanceof jd.i) return dd.message;
              if (Mt(dd)) return (0, mO.i)(dd.code, dd.serverText);
              return mO.b
            }(vd.error), Rd.l.CONNECT_TO_GAME_SERVER, {
              error: Oo(vd.error) ? vd.error : void 0,
              severity: mo(vd.error),
              gameServerUnreachable: (0, FO.c)(vd.error),
              joinFailure: (0, FO.i)(vd.error),
              rematch: (0, zd.b)(vd.error),
              gameRefused: (0, cd.c)(vd.error)
            })
          }
          return Wo("Reloading into the new build");
        case "stopped":
          return Wo("The game client stopped, and shows why");
        case "Ad":
          return Wo("Left the game while it loaded")
      }
    }

    function Mt(dd) {
      return dd instanceof WO.n || dd instanceof WO.e && "attach" !== dd.stage
    }

    function Oo(dd) {
      return !(dd instanceof WO.v) && !Mt(dd) && void 0 === (0, FO.c)(dd)
    }

    function mo(dd) {
      return Mt(dd) ? dd instanceof WO.e && (0, mO.f)(dd.code).requiresRefresh ? "medium" : "low" : Oo(dd) || dd instanceof WO.v ? "medium" : "low"
    }

    function Wo(dd) {
      return Fd.e.errorWithCode(dd, Rd.l.CONNECT_TO_GAME_SERVER, {
        severity: "low",
        Ad: !0
      })
    }
    class Fo {
      leave(dd) {
        if ((0, Dd.e)()) {
          var Od, md;
          if ((0, Xd.d)()) return;
          (0, Nd.b)(!0 === (null === (Od = (0, Dd.m)()) || void 0 === Od || null === (md = Od.currentViewer) || void 0 === md ? void 0 : md.unsavedChanges), dd)
        } else this.leaveLive()
      }
      leaveLive() {
        var dd;
        Gt && (null === (dd = LQ()) || void 0 === dd || dd.endGamePack());
        if (!ct) return;
        ct = !1, (0, Ld.c)();
        try {
          var Od;
          null === (Od = (0, Id.u)()) || void 0 === Od || Od.clearWasmCameraScreen()
        } catch (Wd) {
          console.error("[bloxd-wasm-client] the camera screen didn't clear", Wd)
        }
        const {
          gameNameWithVariation: md
        } = (0, od.b)();
        try {
          Dv()
        } finally {
          (0, od.l)({
            websocketUrl: null
          }), hd.j.lQ("leaveGame", {
            gameNameWithVariation: md
          }), (0, Qd.W)()
        }
      }
      isReplay() {
        return (0, Dd.e)()
      }
    }
  },
  42915: (dd, Od, md) => {
    md.d(Od, {
      b: () => Fd,
      e: () => Wd,
      g: () => Kd,
      j: () => Xd
    });
    const Wd = 12e4,
      Fd = 3e4,
      Rd = {
        hidden: () => "undefined" !== typeof document && document.hidden,
        listen: dd => "undefined" === typeof document ? () => {} : (document.addEventListener("visibilitychange", dd), () => {
          document.removeEventListener("visibilitychange", dd)
        })
      };

    function Xd(dd) {
      return `it sent no start within ${Math.round(dd)} ms`
    }
    class Kd {
      constructor(dd, Od) {
        let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => performance.now(),
          Wd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Rd;
        this.timeoutMs = dd, this.onTimeout = Od, this.now = md, this.visibility = Wd, this.timer = null, this.counted = 0, this.step = null, this.unlisten = void 0, this.unlisten = Wd.listen((() => {
          this.onVisibility()
        })), Wd.hidden() || this.next()
      }
      cancel() {
        this.pause(), this.unlisten()
      }
      onVisibility() {
        this.visibility.hidden() ? (this.counted += this.credit(), this.pause()) : null === this.timer && this.next()
      }
      credit() {
        const dd = this.step;
        return null === dd ? 0 : Math.min(this.now() - dd.at, dd.ms)
      }
      pause() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null), this.step = null
      }
      next() {
        const dd = this.timeoutMs - this.counted;
        if (dd <= 0) return void this.arm(1e3, (() => {
          this.cancel(), this.onTimeout(this.counted)
        }));
        const Od = Math.min(dd, 5e3);
        this.step = {
          at: this.now(),
          ms: Od
        }, this.arm(Od, (() => {
          this.counted += this.credit(), this.step = null, this.next()
        }))
      }
      arm(dd, Od) {
        this.timer = setTimeout((() => {
          this.timer = null, Od()
        }), dd)
      }
    }
  },
  41343: (dd, Od, md) => {
    md.d(Od, {
      e: () => Kd
    });
    var Wd = md(405),
      Fd = md(1122);
    const Rd = new Set(["bingo", "buildAFactory2", "classic", "greenville", "testGym"]),
      Xd = new Set(["creativeFlat", "skyGrid"]);

    function Kd(dd) {
      const Od = (0, Wd.Gb)(dd);
      return "greenville" === Od ? !(0, Wd.Bb)(dd) : "classic" !== Od ? Rd.has(Od) : !(0, Fd.k)(dd) && !Xd.has((0, Wd.Bb)(dd))
    }
  },
  39272: (dd, Od, md) => {
    function Wd(dd) {
      return "string" !== typeof dd || 2 !== dd.length && ":" !== dd[2] ? null : dd[0] + dd[1]
    }
    md.d(Od, {
      c: () => yd,
      d: () => wd,
      e: () => gd,
      i: () => Ed,
      m: () => Kd,
      p: () => Xd,
      r: () => Rd,
      v: () => hd,
      w: () => bd,
      z: () => Hd
    });
    const Fd = ["op:ytInitialPlayerResponse.adPlacements", "op:ytInitialPlayerResponse.playerAds", "op:ytInitialPlayerResponse.adSlots", "op:playerResponse.adPlacements", "op:playerResponse.playerAds", "op:playerResponse.adSlots"];

    function Rd(dd) {
      if (function(dd) {
          for (let Od = 0; Od < Fd.length; Od++)
            if (dd === Fd[Od]) return !0;
          return !1
        }(dd)) return !1;
      const Od = Wd(dd);
      return "op" === Od || "ep" === Od || "wi" === Od || "pp" === Od || "fp:call" === dd || "fp:t" === dd
    }

    function Xd(dd) {
      return "fp" === Wd(dd) && !Rd(dd)
    }

    function Kd(dd) {
      if ("string" !== typeof dd) return !1;
      return "o" === dd[0] && "p" === dd[1] && (2 === dd.length || ":" === dd[2]) || "fp:call" === dd || "2" === dd || "t" === dd || "a" === dd
    }

    function hd(dd, Od) {
      return `~${function(dd){return dd.length<2?dd:":"===dd[1]?dd[0]:dd[0]+dd[1]}(Od)}~${dd}`
    }
    const vd = 200;

    function Qd(dd) {
      let Od = dd.length - 1;
      for (let md = 0; md < 2; md++) {
        const md = Od;
        for (; Od >= 0 && dd[Od] >= "0" && dd[Od] <= "9";) Od--;
        if (Od < 0 || Od === md || ":" !== dd[Od]) return -1;
        Od--
      }
      return Od + 1
    }

    function td(dd) {
      return "unknown" === dd || Qd(dd) >= 0
    }

    function od(dd, Od) {
      return dd[Od] >= "\ud800" && dd[Od] <= "\udbff" && Od + 1 < dd.length && dd[Od + 1] >= "\udc00" && dd[Od + 1] <= "\udfff" ? 2 : 1
    }

    function Nd(dd, Od, md) {
      return 2 === md ? 4 : dd[Od] <= "\x7f" ? 1 : dd[Od] <= "\u07ff" ? 2 : 3
    }

    function qd(dd, Od, md) {
      let Wd = 0;
      for (; Wd < Od;) {
        const Od = od(dd, Wd),
          Fd = Nd(dd, Wd, Od);
        if (Fd > md) break;
        md -= Fd, Wd += Od
      }
      return Wd
    }

    function Hd(dd) {
      let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1 / 0;
      if ("string" !== typeof dd || dd.length > vd || !td(dd)) return "t";
      let md = 2;
      for (let Kd = 0; Kd < dd.length;) {
        const Od = od(dd, Kd);
        md += Nd(dd, Kd, Od), Kd += Od
      }
      if (md <= Od) return `t ${dd}`;
      const Wd = Qd(dd),
        Fd = Od - 2 - (dd.length - Wd);
      if (Fd < 0) return "t";
      const Rd = qd(dd, Wd, Fd);
      let Xd = "t ";
      for (let Kd = 0; Kd < Rd; Kd++) Xd += dd[Kd];
      for (let Kd = Wd; Kd < dd.length; Kd++) Xd += dd[Kd];
      return Xd
    }
    const yd = 62;

    function bd(dd) {
      let Od = "so:";
      const md = qd(dd, dd.length, yd - Od.length);
      for (let Wd = 0; Wd < md; Wd++) Od += dd[Wd];
      return Od
    }
    const Td = "BABYLON ",
      pd = "DECODE ",
      Yd = "BABYLON@ ";

    function gd(dd) {
      return bd(Td + dd)
    }

    function wd(dd, Od) {
      return bd(Yd + dd + " " + Od)
    }

    function Ed(dd) {
      return bd(pd + dd)
    }
  },
  42840: (dd, Od, md) => {
    md.d(Od, {
      e: () => Wd
    });
    const Wd = {
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
  40316: (dd, Od, md) => {
    md.d(Od, {
      e: () => Rd
    });
    var Wd = md(2421);
    const Fd = ["none", "idle", "now"];

    function Rd() {
      const dd = () => (0, Wd.A)();
      return {
        memoryBytes: () => (0, Wd.t)().buffer.byteLength,
        reserveUpFront: Od => dd().nt(Od),
        reserveAhead: Od => dd().Gt(Od),
        setCeiling: Od => {
          dd().Lt(Od)
        },
        lowWater: () => Fd[dd().rt()] ?? "none",
        stats: () => function(dd) {
          const Od = new Uint32Array((0, Wd.t)().buffer, dd, 17),
            md = dd => Od[dd] ?? 0,
            Fd = dd => ({
              upFront: md(dd),
              ahead: md(dd + 1),
              onDemandInFrame: md(dd + 2),
              onDemand: md(dd + 3)
            });
          return {
            memoryBytes: md(0),
            initialBytes: md(1),
            liveBytes: md(2),
            peakLiveBytes: md(3),
            headroomBytes: md(4),
            unusedBytes: md(5),
            ceilingBytes: md(6),
            reservesRefused: md(7),
            grows: Fd(8),
            grownBytes: Fd(12),
            allocationsRefused: md(16)
          }
        }(dd().Pt()),
        takeBallast: () => dd().zt(),
        takePressure: () => dd().ct()
      }
    }
  },
  5954: (dd, Od, md) => {
    md.d(Od, {
      c: () => Kd,
      e: () => Xd,
      f: () => Wd,
      h: () => Hd,
      l: () => td,
      o: () => Fd,
      p: () => Rd,
      r: () => vd,
      v: () => Qd,
      w: () => od
    });
    const Wd = 5;

    function Fd(dd) {
      return dd === Wd
    }

    function Rd(dd) {
      return [...dd.features]
    }
    const Xd = 262144,
      Kd = 256,
      hd = 256;

    function vd(dd) {
      if ("object" !== typeof dd || null === dd || Array.isArray(dd)) return "The pack has no files.";
      const Od = [];
      for (const [md, Wd] of Object.entries(dd)) {
        if ("string" !== typeof Wd) return `${md} isn't text.`;
        Od.push({
          path: md,
          source: Wd
        })
      }
      return Od.sort(((dd, Od) => td(dd.path, Od.path))),
        function(dd) {
          if (0 === dd.length) return "The pack has no .wgsl files.";
          if (dd.length > Kd) return `The pack has more than ${Kd} .wgsl files.`;
          const Od = new Set;
          for (const {
              path: md
            }
            of dd) {
            const dd = Nd(md);
            if (null !== dd) return dd;
            if (Od.has(md)) return `The pack has two files at ${md}.`;
            Od.add(md)
          }
          return od(dd) > Xd ? `The pack's .wgsl files are over ${Xd/1024} KB in total.` : null
        }(Od) ?? Od
    }

    function Qd(dd) {
      const Od = {};
      for (const md of dd) Od[md.path] = md.source;
      return Od
    }

    function td(dd, Od) {
      return dd < Od ? -1 : dd > Od ? 1 : 0
    }

    function od(dd) {
      const Od = new TextEncoder;
      let md = 0;
      for (const {
          source: Wd
        }
        of dd) md += Od.encode(Wd).byteLength;
      return md
    }

    function Nd(dd) {
      if (!dd.toLowerCase().endsWith(".wgsl")) return `${dd} isn't a .wgsl file.`;
      if (dd.length > hd) return `A file path is over ${hd} characters.`;
      if (dd.includes("\\") || /[\u0000-\u001f]/.test(dd)) return `${dd} isn't a valid file path.`;
      return dd.split("/").some((dd => "" === dd || "." === dd || ".." === dd)) ? `${dd} isn't a valid file path.` : null
    }
    const qd = /^(.*)\[rot\[([1-4])$/;

    function Hd(dd, Od) {
      let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
      const Wd = new Map;
      Od.forEach(((dd, Od) => {
        let {
          numAnimStates: md,
          animStartIdx: Fd
        } = dd;
        for (let Rd = 1; Rd < md; Rd++) Wd.set(Fd + Rd - 1, Od)
      }));
      const Fd = Object.entries(dd),
        Rd = new Map;
      for (const [Hd, yd] of Fd) {
        const dd = qd.exec(Hd);
        "1" === dd?.[2] && Rd.set(dd[1], yd + 1)
      }
      const Xd = dd => {
          const Od = qd.exec(dd);
          return Od && Rd.has(Od[1]) ? {
            root: Od[1],
            rotation: Number(Od[2]) - 1
          } : null
        },
        Kd = new Set(Fd.map((dd => {
          let [Od] = dd;
          return Xd(Od)?.root ?? Od
        }))),
        hd = (dd, md) => {
          const Wd = dd.replace(/_?0$/, "");
          return (Od[md]?.numAnimStates ?? 0) > 1 && !Kd.has(Wd) ? Wd : dd
        },
        vd = new Map;
      for (const [qd, Hd] of Fd) vd.set(Hd, hd(Xd(qd)?.root ?? qd, Hd));
      const Qd = Fd.reduce(((dd, Od) => {
          let [, md] = Od;
          return Math.max(dd, md + 1)
        }), 0),
        td = Array.from({
          length: Qd
        }, ((dd, Od) => ({
          id: Od + 1,
          rotation: 0
        }))),
        od = new Map,
        Nd = new Map;
      for (const [qd, Hd] of Fd) {
        const dd = Xd(qd),
          Od = Wd.get(Hd);
        if (void 0 !== Od) {
          const md = vd.get(Od);
          Nd.set(qd, {
            name: qd,
            texture: md,
            kind: "frame"
          }), dd && !Nd.has(dd.root) && Nd.set(dd.root, {
            name: dd.root,
            texture: md,
            kind: "frame"
          });
          continue
        }
        const md = vd.get(Hd),
          Fd = dd?.root ?? qd;
        if (md !== Fd && Nd.set(Fd, {
            name: Fd,
            texture: md,
            kind: "frame"
          }), dd) {
          const Od = Rd.get(dd.root);
          td[Hd] = {
            id: Od,
            rotation: dd.rotation
          }, od.set(md, Od), Nd.set(qd, {
            name: qd,
            texture: md,
            kind: "rotation"
          })
        } else od.set(md, Hd + 1)
      }
      for (const qd of od.keys()) Nd.delete(qd);
      for (const [qd, Hd] of md) {
        const dd = od.get(Hd);
        void 0 === dd || od.has(qd) || (od.set(qd, dd), Nd.delete(qd))
      }
      return {
        named: [...od].sort(((dd, Od) => {
          let [md] = dd, [Wd] = Od;
          return md < Wd ? -1 : md > Wd ? 1 : 0
        })).map((dd => {
          let [Od, md] = dd;
          return {
            name: Od,
            id: md
          }
        })),
        aliases: [...Nd.values()],
        layers: td
      }
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);