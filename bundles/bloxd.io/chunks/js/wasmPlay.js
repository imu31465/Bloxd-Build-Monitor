export const id = 64;
export const ids = [64, 117, 118, 138];
export const modules = {
  39842: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => Op,
      g: () => op
    });
    const Op = "The world isn't loaded, so no blocks can be seen.",
      op = "The world isn't loaded, so nothing in it can be seen."
  },
  4785: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => Dp
    });
    var Op = cp(25),
      op = cp(34),
      Ip = cp(1308),
      Sp = cp(2908);
    const xp = 3e4,
      Lp = 1e3;

    function Yp() {
      return "visible" === document.visibilityState && "inGame" === Op.c.get("gameState") && (0, Ip.t)()
    }

    function Dp(pp, ip) {
      (0, Sp.v)() || function(pp, ip, cp) {
        let Op = 0;
        const op = setInterval((() => {
          ip() && (Op += Lp, Op >= pp && (clearInterval(op), cp()))
        }), Lp)
      }(xp, Yp, (() => {
        ip().then((() => {
          pp(`saved for the player after ${xp/1e3} s of play`), (0, Sp.F)(), op.m.GA("chat", {
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
  34280: (pp, ip, cp) => {
    function Op(pp, ip) {
      return 0 === pp.length ? 0 : pp[Math.min(pp.length - 1, Math.floor(ip * pp.length))]
    }

    function op(pp) {
      return pp.toFixed(1)
    }
    cp.d(ip, {
      d: () => op,
      f: () => Op
    })
  },
  38166: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => Yp,
      e: () => Dp,
      h: () => dp,
      l: () => Hp,
      p: () => tp
    });
    var Op = cp(4785),
      op = cp(34280),
      Ip = cp(2908);
    const Sp = 20,
      xp = ["totalMs", "slotMs", "workerMs", "applyMs", "ahead", "inFlight", "TA", "jobMs"];

    function Lp(pp) {
      return [...pp].sort(((pp, ip) => pp - ip))
    }
    const Yp = [];

    function Dp(pp, ip, cp) {
      return `${pp},${ip},${cp}`
    }
    class Ap {
      constructor() {
        this.pending = new Map, this.jobs = new Map, this.edits = [], this.nextEdit = 0, this.reported = 0, this.windowStart = performance.now(), this.frames = 0, this.lastFrameAt = 0, this.maxFrameMs = 0, this.jobsSent = 0, this.maxAhead = 0, this.maxCapacity = 0, this.roundTrips = [], this.windowEdits = [], this.outliers = 0, this.gaveUp = 0
      }
      edit(pp, ip) {
        var cp;
        const Op = null !== (cp = this.pending.get(pp)) && void 0 !== cp ? cp : [];
        Op.push({
          editAt: ip,
          meshJobId: 0
        }), this.pending.set(pp, Op)
      }
      frame(pp) {
        this.lastFrameAt > 0 && (this.maxFrameMs = Math.max(this.maxFrameMs, pp - this.lastFrameAt)), this.lastFrameAt = pp, this.frames++, pp - this.windowStart >= 1e3 && this.summarise(pp)
      }
      sent(pp, ip, cp, Op, op, Ip, Sp) {
        this.jobs.set(ip, {
          sentAt: Sp,
          receivedAt: 0,
          ahead: cp,
          inFlight: Op,
          TA: op,
          jobMs: 0
        }), this.jobsSent++, this.maxAhead = Math.max(this.maxAhead, cp), this.maxCapacity = Math.max(this.maxCapacity, op);
        for (const Lp of null !== (xp = this.pending.get(pp)) && void 0 !== xp ? xp : []) {
          var xp;
          Ip.includes(Lp.meshJobId) || (Lp.meshJobId = ip)
        }
      }
      received(pp, ip, cp) {
        const Op = this.jobs.get(pp);
        void 0 !== Op && (this.roundTrips.push(cp - Op.sentAt), Op.receivedAt = cp, Op.jobMs = ip)
      }
      failed(pp) {
        this.jobs.delete(pp)
      }
      reassign(pp, ip, cp) {
        this.jobs.delete(ip);
        for (const op of null !== (Op = this.pending.get(pp)) && void 0 !== Op ? Op : []) {
          var Op;
          op.meshJobId === ip && (op.meshJobId = cp)
        }
      }
      applied(pp, ip, cp) {
        const Op = this.jobs.get(ip);
        this.jobs.delete(ip), void 0 !== Op && this.show(pp, Op, cp, (pp => pp.meshJobId === ip))
      }
      emptied(pp, ip) {
        const cp = {
          sentAt: ip,
          receivedAt: ip,
          ahead: 0,
          inFlight: 0,
          TA: 0,
          jobMs: 0
        };
        this.show(pp, cp, ip, (() => !0))
      }
      show(pp, ip, cp, Op) {
        const op = this.pending.get(pp);
        if (!op) return;
        const Ip = op.filter((op => !Op(op) || (this.record(pp, op.editAt, ip, cp), !1)));
        Ip.length > 0 ? this.pending.set(pp, Ip) : this.pending.delete(pp)
      }
      Yy(pp) {
        this.reported += pp, this === Wp && this.reported >= Sp && null !== yp && (yp(), yp = null)
      }
      record(pp, ip, cp, Op) {
        const op = {
          totalMs: Op - ip,
          slotMs: cp.sentAt - ip,
          workerMs: cp.receivedAt - cp.sentAt,
          applyMs: Op - cp.receivedAt,
          ahead: cp.ahead,
          inFlight: cp.inFlight,
          TA: cp.TA,
          jobMs: cp.jobMs
        };
        if (this.edits[this.nextEdit] = op, this.nextEdit = (this.nextEdit + 1) % 500, this.windowEdits.push(op.totalMs), this.Yy(1), op.totalMs < 100 || ++this.outliers > 5) return;
        const Sp = pp => Math.round(pp);
        (0, Ip.n)("remesh", `slow edit (${pp}) shown in ${Sp(op.totalMs)} ms: slot ${Sp(op.slotMs)}, worker ${Sp(op.workerMs)} (${op.ahead} ahead, ${op.inFlight}/${op.TA} in flight; job ${Sp(op.jobMs)}), apply ${Sp(op.applyMs)}`)
      }
      summarise(pp) {
        const ip = (pp - this.windowStart) / 1e3;
        for (const [cp, Op] of this.pending) {
          const ip = Op.filter((ip => pp - ip.editAt <= 1e4));
          this.gaveUp += Op.length - ip.length, this.Yy(Op.length - ip.length), ip.length > 0 ? this.pending.set(cp, ip) : this.pending.delete(cp)
        }
        for (const [cp, Op] of this.jobs) pp - Op.sentAt > (Op.receivedAt > 0 ? 1e4 : 6e4) && this.jobs.delete(cp);
        if (this.jobsSent > 0 || this.roundTrips.length > 0 || this.windowEdits.length > 0 || this.gaveUp > 0) {
          const pp = Lp(this.roundTrips),
            cp = Lp(this.windowEdits),
            Op = Math.max(0, this.outliers - 5);
          (0, Ip.n)("remesh", `${Math.round(this.frames/ip)} fps (longest ${Math.round(this.maxFrameMs)} ms) | ${this.jobsSent} jobs sent, up to ${this.maxAhead} ahead on a worker, capacity ${this.maxCapacity} | round trip p50 ${Math.round((0,op.f)(pp,.5))} max ${Math.round((0,op.f)(pp,1))} ms | ${cp.length} edits shown, p50 ${Math.round((0,op.f)(cp,.5))} max ${Math.round((0,op.f)(cp,1))} ms${Op>0?`, ${Op} more slow`:""}${this.gaveUp>0?`, ${this.gaveUp} never shown`:""}`)
        }
        this.windowStart = pp, this.frames = 0, this.maxFrameMs = 0, this.jobsSent = 0, this.maxAhead = 0, this.maxCapacity = 0, this.roundTrips = [], this.windowEdits = [], this.outliers = 0, this.gaveUp = 0
      }
      stats() {
        const pp = xp.map((pp => {
          const ip = Lp(this.edits.map((ip => ip[pp])));
          return `${pp}: p50 ${Math.round((0,op.f)(ip,.5))} p90 ${Math.round((0,op.f)(ip,.9))} max ${Math.round((0,op.f)(ip,1))}`
        }));
        return [`${this.edits.length} edits`, ...pp].join("\n")
      }
      dump() {
        const pp = this.edits.map((pp => xp.map((ip => Math.round(10 * pp[ip]) / 10)).join(",")));
        return [this.stats(), xp.join(","), ...pp].join("\n")
      }
    }
    class Pp {
      constructor(pp, ip) {
        this.log = pp, this.HP = ip
      }
      edit(pp, ip, cp) {
        const [Op, op, Ip] = this.HP.WP.jOp(pp, ip, cp), Sp = this.HP.WP.XU.lU(Op, op, Ip);
        Sp && Sp.CU && this.log.edit(Dp(Op, op, Ip), performance.now())
      }
      sent(pp, ip, cp, Op, op) {
        this.log.sent(Dp(pp.i, pp.j, pp.k), ip, cp, Op, op, Yp, performance.now())
      }
      received(pp) {
        this.log.received(pp.meshJobId, pp.jobMs, performance.now())
      }
      failed(pp) {
        this.log.failed(pp)
      }
      applied(pp, ip) {
        this.log.applied(Dp(pp.i, pp.j, pp.k), ip, performance.now())
      }
    }
    let Wp = null,
      yp = null,
      Up = !1,
      wp = null;

    function vp() {
      return new Promise((pp => {
        null !== Wp && Wp.reported >= Sp ? pp() : yp = pp
      }))
    }

    function tp() {
      const pp = new Ap;
      return Wp = pp, (0, Ip.k)("remesh", (() => pp.dump())), (0, Ip.e)("remeshStats", (() => {
        console.log(pp.stats())
      })), Up || (Up = !0, (0, Op.c)((pp => {
        (0, Ip.n)("remesh", pp)
      }), vp)), pp
    }

    function Hp(pp) {
      const ip = tp();
      wp = new Pp(ip, pp), pp.Zk.meshProbe = wp, pp.on("beforeRender", (() => {
        ip.frame(performance.now())
      }))
    }

    function dp(pp, ip, cp) {
      var Op;
      null === (Op = wp) || void 0 === Op || Op.edit(pp, ip, cp)
    }
  },
  34310: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => Op
    });
    const Op = new Set(["chunkBorders"])
  },
  34466: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => Sp,
      e: () => op,
      i: () => Dp
    });
    var Op = cp(1579);

    function op(pp) {
      var ip;
      return {
        ...Sp.store,
        yaw: Sp.store.yaw + (null !== (ip = Op.b[pp].previewYaw) && void 0 !== ip ? ip : 0)
      }
    }
    const Ip = {
        yaw: .61 * Math.PI,
        pitch: Math.PI / 2.05,
        radius: 30,
        target: [0, 0, 0]
      },
      Sp = {
        player: Ip,
        store: {
          ...Ip,
          radius: 33,
          target: [0, 3.9, 0]
        }
      };

    function xp(pp, ip) {
      pp instanceof Promise ? pp.then(ip).catch((pp => {
        console.error("Couldn't open the preview", pp)
      })) : ip(pp)
    }
    class Lp {
      constructor(pp) {
        this.opened = null, this.view = null, this.size = null, this.closed = !1, xp(pp, (pp => {
          this.closed ? pp.close() : (this.opened = pp, null !== this.size && pp.resize(this.size.width, this.size.height), null !== this.view && pp.show(this.view))
        }))
      }
      show(pp) {
        var ip;
        this.view = pp, null === (ip = this.opened) || void 0 === ip || ip.show(pp)
      }
      resize(pp, ip) {
        var cp;
        this.size = {
          width: pp,
          height: ip
        }, null === (cp = this.opened) || void 0 === cp || cp.resize(pp, ip)
      }
      close() {
        var pp;
        this.closed = !0, null === (pp = this.opened) || void 0 === pp || pp.close(), this.opened = null
      }
    }
    class Yp {
      constructor(pp) {
        this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(pp).then((pp => pp.ready)), xp(pp, (pp => {
          this.closed ? pp.close() : (this.opened = pp, null !== this.size && pp.resize(this.size.width, this.size.height))
        }))
      }
      get dev() {
        return this.opened.dev
      }
      isReady() {
        var pp, ip;
        return null !== (pp = null === (ip = this.opened) || void 0 === ip ? void 0 : ip.isReady()) && void 0 !== pp && pp
      }
      setCosmetic(pp, ip) {
        var cp;
        null === (cp = this.opened) || void 0 === cp || cp.setCosmetic(pp, ip)
      }
      playEmote(pp) {
        var ip;
        null === (ip = this.opened) || void 0 === ip || ip.playEmote(pp)
      }
      setOrbit(pp) {
        var ip;
        null === (ip = this.opened) || void 0 === ip || ip.setOrbit(pp)
      }
      resetCamera() {
        var pp;
        null === (pp = this.opened) || void 0 === pp || pp.resetCamera()
      }
      async untilDrawn(pp) {
        var ip;
        await this.ready, await (null === (ip = this.opened) || void 0 === ip ? void 0 : ip.untilDrawn(pp))
      }
      resize(pp, ip) {
        var cp;
        this.size = {
          width: pp,
          height: ip
        }, null === (cp = this.opened) || void 0 === cp || cp.resize(pp, ip)
      }
      close() {
        var pp;
        this.closed = !0, null === (pp = this.opened) || void 0 === pp || pp.close(), this.opened = null
      }
    }
    const Dp = new class {
      constructor() {
        this.host = null, this.makeDefault = null
      }
      setHost(pp) {
        this.host = pp
      }
      setDefaultHost(pp) {
        this.makeDefault = pp
      }
      current() {
        if (null === this.host) {
          if (null === this.makeDefault) throw new Error("no preview host");
          this.host = this.makeDefault()
        }
        return this.host
      }
      openMob(pp) {
        return new Lp(this.current().openMob(pp))
      }
      openPet(pp) {
        return new Lp(this.current().openPet(pp))
      }
      openMobLineup(pp) {
        return new Lp(this.current().openMobLineup(pp))
      }
      openCharacter(pp, ip) {
        return new Yp(this.current().openCharacter(pp, ip))
      }
    }
  },
  5159: (pp, ip, cp) => {
    cp.d(ip, {
      e: () => Op.f,
      g: () => op,
      k: () => Op.o
    });
    var Op = cp(5167);
    const op = [!1, !0].flatMap((pp => ["terrain", "liquid", "model"].map((ip => ({
      strict: pp,
      program: ip
    })))))
  },
  39396: (pp, ip, cp) => {
    cp.r(ip), cp.d(ip, {
      ShaderPackPage: () => Lp,
      harnessShaderPackMode: () => Pp,
      setHarnessUrlShaderPack: () => Ap,
      shaderPackPage: () => Dp
    });
    var Op = cp(104),
      op = cp(44),
      Ip = (cp(3572), cp(5159), cp(3564)),
      Sp = cp(6804);
    cp(6772);
    const xp = {
      status: "none"
    };
    class Lp {
      constructor() {
        this.stored = null, this.compiling = null, this.pagePack = null, this.resolved = null
      }
      preload() {
        if (null === this.stored) {
          if ((0, Ip.f)(Op.featureFlags.settings.canUseShaderPacks)) return this.stored = Promise.resolve(null), Yp().then((pp => {
            pp && op.h.removeItem(Ip.d)
          })), this.stored;
          this.prefetchHint() && this.compiler().catch((() => {})), this.stored = this.readStored()
        }
        return this.stored
      }
      prefetchHint() {
        return (0, Ip.e)(Op.featureFlags.settings.canUseShaderPacks)
      }
      async loadActive() {
        const pp = await this.load();
        return "active" === pp.status ? pp.pack : null
      }
      load() {
        return this.pagePack ??= this.read().catch((pp => (console.error("Failed to load the shader pack", pp), xp))).then((pp => (this.resolved ??= pp, pp))), this.pagePack
      }
      hasNone() {
        var pp;
        return "none" === (null === (pp = this.resolved) || void 0 === pp ? void 0 : pp.status)
      }
      block(pp) {
        this.resolved = {
          status: "blocked",
          messageKey: pp,
          variants: null
        }, this.pagePack = Promise.resolve(this.resolved)
      }
      compiler() {
        return this.compiling ??= Promise.all([cp.e(78), cp.e(136), cp.e(142)]).then((() => cp(41994))).then((pp => (pp.prefetchCompiler(), pp))), this.compiling
      }
      async readStored() {
        const pp = await Yp();
        return pp && this.compiler().then((pp => pp.reconcileHint())).catch((pp => {
          console.error("Failed to correct the shader pack hint", pp)
        })), pp
      }
      async read() {
        const pp = await this.preload();
        return pp ? (await this.compiler()).compilePagePack(pp) : xp
      }
    }
    async function Yp() {
      if (!(0, Ip.i)(Op.featureFlags.settings.canUseShaderPacks)) return null;
      try {
        const pp = await (0, Sp.f)(!0);
        return pp || op.h.setItem(Ip.d, !1), pp
      } catch (pp) {
        return console.error("Failed to read the stored shader pack", pp), op.h.removeItem(Ip.d), null
      }
    }
    const Dp = new Lp;

    function Ap(pp, ip) {}

    function Pp() {
      return null
    }
  },
  39445: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => Ap,
      c: () => Pp
    });
    var Op = cp(156),
      op = cp(188),
      Ip = cp(1516),
      Sp = cp(3025),
      xp = cp(1520),
      Lp = cp(36677),
      Yp = cp(670),
      Dp = cp(39396);

    function Ap(pp) {
      (0, Sp.reportClientError)("matchmake_failed", pp, Op.k[Op.k.SHADER_PACK])
    }
    async function Pp(pp, ip) {
      var cp;
      const Op = null === (cp = await Dp.shaderPackPage.preload()) || void 0 === cp ? void 0 : cp.listing,
        Sp = (0, Lp.d)();
      Op && null !== Sp && await xp.b.reportShaderPackSession(pp, {
        packId: Op.packId,
        sourceHash: Op.sourceHash,
        game: (0, Ip.d)(ip, op.w, "other"),
        playSessionId: Sp,
        visitSessionId: (0, Yp.g)()
      })
    }
  },
  6804: (pp, ip, cp) => {
    cp.d(ip, {
      e: () => op,
      f: () => Ip
    });
    var Op = cp(44);
    const op = "shaderPack";
    async function Ip() {
      var pp;
      let ip = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (pp = await Op.g.getItem(op, ip)) && void 0 !== pp ? pp : null
    }
  },
  6772: (pp, ip, cp) => {
    cp.r(ip), cp.d(ip, {
      loadShaderPackTextures: () => Sp,
      shaderPackTextures: () => xp
    });
    var Op = cp(5167);
    let op = null,
      Ip = null;

    function Sp() {
      return Ip ??= Promise.all([cp.e(73), cp.e(190)]).then((() => cp(40670))).then((pp => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: ip,
          textureNameToIndex: cp,
          textureAnimationData: Ip
        } = pp;
        return op ??= (0, Op.j)(cp, Ip, ip), op
      })), Ip
    }

    function xp() {
      if (null === op) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return op
    }
  },
  34375: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => Ip
    });
    var Op = cp(1080);

    function op() {
      var pp, ip;
      return null !== (pp = null === (ip = screen.orientation) || void 0 === ip ? void 0 : ip.type) && void 0 !== pp ? pp : innerWidth > innerHeight ? "landscape" : "portrait"
    }
    const Ip = new class {
      constructor() {
        this.holding = !1, this.heldOrientation = "", this.releaseTimer = void 0, this.longHoldTimer = void 0, this.resizers = new Set, this.releaseWhenShown = () => {
          document.hidden || (document.removeEventListener("visibilitychange", this.releaseWhenShown), this.release())
        }
      }
      isHeld() {
        return this.holding && op() !== this.heldOrientation && (this.holding = !1), this.holding
      }
      hold() {
        this.heldOrientation = op(), this.holding = !0, clearTimeout(this.releaseTimer), document.removeEventListener("visibilitychange", this.releaseWhenShown), clearTimeout(this.longHoldTimer), this.longHoldTimer = setTimeout((() => {
          this.holding && (0, Op.NU)(new Error("Game view size held for 60 s"))
        }), 6e4)
      }
      release() {
        clearTimeout(this.longHoldTimer), this.releaseTimer = setTimeout((() => {
          if (document.hidden) document.addEventListener("visibilitychange", this.releaseWhenShown);
          else {
            this.holding = !1;
            for (const pp of this.resizers) pp()
          }
        }), 1e3)
      }
      heldSizer(pp) {
        let ip = !1;
        return () => {
          if (ip && this.isHeld()) return null;
          const cp = pp();
          return ip ||= null !== cp, cp
        }
      }
      onRelease(pp) {
        return this.resizers.add(pp), () => {
          this.resizers.delete(pp)
        }
      }
    }
  },
  39434: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => op
    });
    let Op = !1;
    async function op(pp, ip) {
      if (!Op) {
        Op = !0;
        try {
          const [{
            reloadBloxd: Op
          }, {
            NotificationProvider: op
          }] = await Promise.all([Promise.resolve().then((() => cp(1765))), Promise.resolve().then((() => cp(1372)))]);
          if (!pp || !0 === await op.showPromptPopup({
              title: "Unsaved changes",
              subtitle: "Exit and lose your unsaved changes?",
              confirmText: "Exit",
              destructive: !0,
              cancelText: "Cancel",
              unlockPointerKey: "replayExitUnsavedChanges"
            }).getResult()) return void Op(ip)
        } catch (op) {
          console.error("Leaving the replay failed", op)
        }
        Op = !1
      }
    }
  },
  41182: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => xp,
      g: () => Lp
    });
    var Op = cp(1779);
    const op = 33177600,
      Ip = 3e4;
    let Sp = !1;

    function xp(pp, ip, cp) {
      let Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const {
        scale: xp = 1,
        type: Lp = "image/png",
        quality: Yp
      } = Op;
      if (!pp.drawing()) return Promise.reject(new Error("Screenshots need a game to be running"));
      if (Sp) return Promise.reject(new Error("A screenshot is already being taken"));
      Sp = !0;
      const Dp = function(pp, ip, cp) {
        const Op = Math.max(1, pp),
          Ip = Math.max(1, ip),
          Sp = Math.min(1, cp / Math.max(Op, Ip), Math.sqrt(op / (Op * Ip)));
        return {
          width: Math.max(1, Math.floor(Op * Sp)),
          height: Math.max(1, Math.floor(Ip * Sp))
        }
      }(ip, cp, pp.maxTextureSize);
      return pp.resize(Dp.width, Dp.height, xp * Dp.width / Math.max(1, ip)), new Promise(((ip, cp) => {
        let Op, op = 2,
          xp = null;
        const Dp = () => {
          var ip;
          Sp = !1, null === (ip = xp) || void 0 === ip || ip(), clearTimeout(Op), pp.restoreSize()
        };
        Op = setTimeout((() => {
          Dp(), cp(new Error("No frame was drawn to capture"))
        }), Ip), xp = pp.onFrameDrawn((() => {
          if (op--, op > 0) return;
          const {
            canvas: Op
          } = pp, Ip = {
            width: Op.width,
            height: Op.height
          };
          try {
            Op.toBlob((pp => {
              pp ? ip({
                blob: pp,
                ...Ip
              }) : cp(new Error("The canvas gave no image"))
            }), Lp, Yp)
          } catch (Sp) {
            cp(Sp)
          } finally {
            Dp()
          }
        }))
      }))
    }
    async function Lp(pp, ip, cp) {
      try {
        const op = await xp(pp, ip, cp);
        (0, Op.c)(op.blob, `bloxd-screenshot-${op.width}x${op.height}-${Date.now()}.png`)
      } catch (op) {
        console.error("Error taking screenshot:", op)
      }
    }
  },
  37909: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => Op
    });
    const Op = {
      noaReady: null,
      chunkRequested: null,
      beforeServerListeners: null,
      wasmNetReady: null
    }
  },
  39348: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => Sp
    });
    var Op = cp(322),
      op = cp(131),
      Ip = cp(44);

    function Sp() {
      Ip.h.setItem(Op.Ub, Ip.h.getItem(Op.Ub) + 1), (0, op.is99NightsCrazyGamesBundle)() && Ip.h.setItem(Op.Qb, Ip.h.getItem(Op.Qb) + 1)
    }
  },
  40865: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => xp
    });
    var Op = cp(39842);

    function op(pp) {
      return {
        current: () => pp,
        watch: () => () => {}
      }
    }

    function Ip() {}
    const Sp = Object.freeze([0, 0, 0]),
      xp = {
        states: {
          health: op({
            health: null,
            maxHealth: null,
            shield: null,
            maxShield: null
          }),
          inventory: op({
            player: [],
            chestOrCreative: [],
            chest: null,
            creative: !1,
            selectedSlot: 0,
            freeSlots: 0
          }),
          hotbar: op({
            items: [],
            ammo: 0,
            selectedSlot: null
          }),
          stationItems: op({
            enchantable: {},
            salvageable: {}
          }),
          itemInfo: op({}),
          creativeVisibility: op({
            publicLobby: !1,
            shownInGame: {}
          }),
          aura: op(null),
          heldItemAim: op({
            gun: !1,
            aimable: !1,
            chargeName: null
          }),
          crouching: op(!1),
          gliderBoostFuel: op(0),
          flight: op({
            canFly: !1,
            flying: !1
          }),
          crafting: op({
            focus: null,
            recipes: [],
            detail: null
          }),
          players: op({
            ids: [],
            byId: {},
            localId: null
          }),
          lobbyLeaderboardRows: op({}),
          fullInventory: op(!1),
          crosshairTarget: op({
            interactPrompt: null,
            blockText: null,
            neededTool: null
          }),
          localPlayerAlive: op(!0),
          freeCamera: op({
            allowed: !1,
            movesFly: !1
          }),
          replay: op(null),
          replayEdits: op(null),
          replayRecorder: op({
            recording: !1,
            clipping: !1,
            hasClipBuffer: !1,
            seconds: 0
          }),
          replayVideoExporting: op(!1)
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
          selectHotbarSlot: Ip,
          removeInventoryItem: () => !1,
          swapInventorySlots: () => !1,
          moveInventoryItem: () => !1,
          quickMoveInventoryItem: () => null,
          closeChest: Ip,
          setInventoryOpen: Ip,
          changeIronChestPasskey: Ip,
          dragReplayCamera: Ip,
          applyTemporaryThirdPerson: Ip,
          holdEmoteWheel: Ip,
          recordFlyingMiddleText: Ip,
          focusCrafting: Ip,
          craftRecipe: () => ({
            gD: 0,
            eL: null,
            amountAddedToSlot: 0
          }),
          salvageItem: () => !1,
          enchantItem: Ip,
          setShopOpen: Ip,
          buyShopItem: Ip,
          lobbyManage: Ip,
          sendChatMessage: Ip,
          ignorePlayer: Ip,
          reportPlayer: Ip,
          reportWorldCodeChat: Ip,
          requestDiscordReportKey: Ip,
          reportLobbyOrGame: Ip,
          playEmote: Ip,
          updateMyCosmetic: Ip,
          writeOnBoard: Ip,
          writeBook: Ip,
          writeNameTag: Ip,
          setCustomLobbyBlock: Ip,
          openIronChest: Ip,
          sendCodeCollab: Ip,
          clickCodeBlock: Ip,
          bindCustomButtonKeys: Ip,
          pressCustomButton: Ip,
          moveReplayFreecam: Ip,
          holdReplayFreecamVertical: Ip,
          respawn: Ip,
          wakeUp: Ip,
          requestLeaderboard: Ip,
          completeTask: Ip,
          setServerCookie: Ip,
          answerUiRequest: Ip,
          chooseRewardedAd: Ip,
          setCameraZoom: Ip,
          setFreeCameraMovesFly: Ip,
          setBlockHighlight: Ip,
          setCrosshairInteractPrompt: Ip,
          setLookSensitivity: Ip,
          replayAction: Ip,
          setReplayPlaying: Ip,
          seekReplay: Ip,
          setReplayCameraMode: Ip,
          syncReplayCameraMode: Ip,
          setReplayCameraKeyframe: Ip,
          moveReplayCameraKeyframe: Ip,
          deleteReplayCameraKeyframes: Ip,
          setReplayPlaybackMark: Ip,
          cropReplay: () => !1,
          holdReplayForShaderPackFailure: Ip,
          exportReplayVideo: Ip,
          toggleRecording: Ip,
          saveClip: Ip,
          setRecorderPrefs: Ip,
          setReplayViewerOpen: Ip
        },
        queries: {
          enchantingOffer: () => ({
            perks: [],
            options: []
          }),
          worldCodeAiChunk: () => Op.c,
          worldCodeAiGameState: () => Op.g
        },
        lookups: {
          localPos: () => Sp,
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
  41174: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => Sp,
      e: () => Ip
    });
    var Op = cp(2187),
      op = cp(1014);

    function Ip(pp, ip) {
      return null !== pp.gameSource && (0, Op.p)(ip, pp.gameSource)
    }

    function Sp(pp, ip) {
      if (null === pp.gameSource || "" === pp.gameSource || null === ip) return !0;
      const cp = (0, op.j)(ip) ? (0, op.o)(ip) : null;
      return null !== cp && Ip(pp, cp)
    }
  },
  41141: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => xp
    });
    var Op = cp(629),
      op = cp(41147),
      Ip = cp(41008);
    async function Sp(pp) {
      const ip = await (0, op.j)({
        Helmet: cp(38183),
        Chestplate: cp(38190),
        Gauntlets: cp(38206),
        Leggings: cp(38198),
        Boots: cp(38200)
      } [Op.c[pp]]);
      try {
        return (0, Ip.n)(ip)
      } finally {
        ip.close()
      }
    }
    const xp = new class {
      constructor() {
        let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Sp,
          ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : op.p;
        this.decode = pp, this.register = ip, this.decoded = new Map
      }
      warm() {
        for (let pp = 0; pp < Op.c.length; pp++) this.part(pp).catch((ip => {
          console.warn(`The grayscale armour ${Op.c[pp]} image didn't decode ahead of use`, ip)
        }))
      }
      async load(pp, ip) {
        const {
          width: cp,
          height: Ip,
          pixels: Sp
        } = await this.part(pp), xp = new ImageData(function(pp, ip) {
          const cp = new Uint8ClampedArray(pp.length);
          for (let Op = 0; Op < pp.length; Op += 4) cp[Op] = Math.round(pp[Op] * ip[0] / 255), cp[Op + 1] = Math.round(pp[Op + 1] * ip[1] / 255), cp[Op + 2] = Math.round(pp[Op + 2] * ip[2] / 255), cp[Op + 3] = pp[Op + 3];
          return cp
        }(Sp, function(pp) {
          return [pp >>> 16 & 255, pp >>> 8 & 255, 255 & pp]
        }(ip)), cp, Ip);
        let Lp;
        try {
          Lp = await createImageBitmap(xp, {
            premultiplyAlpha: "none",
            colorSpaceConversion: "none"
          })
        } catch (Yp) {
          throw new op.e("decode", `grayscale armour ${Op.c[pp]}`, {
            cause: Yp
          })
        }
        return {
          id: this.register(Lp),
          width: cp,
          height: Ip
        }
      }
      part(pp) {
        const ip = this.decoded.get(pp);
        if (void 0 !== ip) return ip;
        const cp = this.decode(pp).catch((ip => {
          throw this.decoded.delete(pp), ip instanceof op.e ? ip : new op.e("decode", `grayscale armour ${Op.c[pp]}`, {
            cause: ip
          })
        }));
        return this.decoded.set(pp, cp), cp
      }
    }
  },
  41133: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => Sp,
      e: () => wp,
      g: () => Dp,
      i: () => Ap,
      k: () => Up
    });
    var Op = cp(40997),
      op = cp(41141),
      Ip = cp(41147);
    const Sp = 396,
      xp = 1,
      Lp = 2,
      Yp = 3,
      Dp = {
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
      Ap = {
        File: 0,
        Item: 1
      },
      Pp = 0,
      Wp = 1,
      yp = 2;

    function Up(pp) {
      const ip = (0, Op.o)();
      ip.catch((() => {}));
      let op = null;
      return {
        glbUrl: pp,
        lifeformAtlasUrl: async pp => (await ip).lifeformAtlasUrl(pp),
        armourAtlasUrl: async () => (await cp.e(207).then((() => cp(34510)))).armourAtlasUrl,
        capeUrl: async pp => (await ip).capeUrl(pp),
        attachmentImageUrl: async pp => (await ip).attachmentImageUrl(pp),
        blockImageUrl: async pp => (await ip).blockImageUrl(pp),
        groupAtlasUrl: async pp => (await ip).groupAtlasUrl(pp),
        particleTextureUrl: async pp => (await ip).particleTextureUrl(pp),
        particleItemUrl: async pp => (op ??= cp.e(38).then((() => cp(51264))).catch((pp => {
          throw op = null, pp
        })), (await op).particleItemUrl(pp))
      }
    }
    class wp {
      constructor(pp, ip) {
        var cp, Sp, xp, Lp;
        let Yp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        this.sources = pp, this.onFailure = ip, this.loading = new Map, this.glbImages = new Map, this.glbWrittenImages = new Map, this.glbTakenCount = new Map, this.answered = new Map, this.ready = [], this.load = void 0, this.release = void 0, this.fetchFile = void 0, this.greyscaleArmour = void 0, this.Ry = !1, this.load = null !== (cp = Yp.load) && void 0 !== cp ? cp : (pp, ip) => (0, Ip.m)(pp, Yp.fetchImage, ip), this.release = null !== (Sp = Yp.release) && void 0 !== Sp ? Sp : Ip.q, this.fetchFile = null !== (xp = Yp.fetchFile) && void 0 !== xp ? xp : pp => (0, Op.j)(pp), this.greyscaleArmour = null !== (Lp = Yp.greyscaleArmour) && void 0 !== Lp ? Lp : op.b
      }
      get waiting() {
        return this.ready.length
      }
      get inFlight() {
        return this.loading.size
      }
      glbWritten(pp, ip) {
        this.glbWrittenImages.set(pp, kp(ip))
      }
      glbTaken(pp, ip) {
        const cp = this.glbWrittenImages.get(pp);
        this.glbWrittenImages.delete(pp), ip && this.setGlbImages(pp, void 0 !== cp && cp.length > 0 ? cp : void 0)
      }
      setGlbImages(pp, ip) {
        var cp;
        this.glbTakenCount.set(pp, (null !== (cp = this.glbTakenCount.get(pp)) && void 0 !== cp ? cp : 0) + 1), void 0 === ip ? this.glbImages.delete(pp) : this.glbImages.set(pp, ip);
        const Op = [];
        for (const {
            key: op
          }
          of this.loading.values()) op.kind === Dp.Glb && op.word === pp && Op.push(op);
        for (let op = this.ready.length - 1; op >= 0; op--) {
          const {
            key: ip,
            id: cp
          } = this.ready[op];
          ip.kind === Dp.Glb && ip.word === pp && (this.ready.splice(op, 1), null !== cp && (this.answered.delete(cp), this.release(cp)), Op.push(ip))
        }
        this.loadAgain(Op)
      }
      onEvent(pp) {
        if (this.Ry) return;
        const ip = new DataView(pp.buffer, pp.byteOffset, pp.byteLength);
        for (let cp = 0; cp + 8 <= pp.byteLength; cp += 8) {
          const pp = ip.getUint8(cp),
            Op = ip.getUint32(cp + 4, !0);
          if (pp === Yp) {
            this.answered.delete(Op), this.release(Op);
            continue
          }
          const op = {
            kind: ip.getUint8(cp + 1),
            index: ip.getUint8(cp + 2),
            word: Op
          };
          pp === xp ? this.want(op) : pp === Lp && this.loading.delete(vp(op))
        }
      }
      reload(pp, ip) {
        const cp = cp => pp.includes(cp.kind) && (void 0 === ip || ip(cp)),
          Op = new Map;
        for (const op of this.answered.values()) cp(op) && Op.set(vp(op), op);
        for (const [op, {
            key: Ip
          }] of this.loading) cp(Ip) && Op.set(op, Ip);
        this.loadAgain(Op.values())
      }
      loadAgain(pp) {
        for (const ip of pp) this.loading.delete(vp(ip)), this.want(ip)
      }
      drain(pp) {
        if (null !== pp)
          for (; this.ready.length > 0;) {
            if (!pp(Sp, 0, this.ready[0].record)) return;
            this.ready.shift()
          }
      }
      dispose() {
        this.Ry = !0, this.loading.clear(), this.ready.length = 0;
        for (const pp of this.answered.keys()) this.release(pp);
        this.answered.clear()
      }
      want(pp) {
        const ip = vp(pp);
        if (this.loading.has(ip)) return;
        const cp = {
          key: pp
        };
        this.loading.set(ip, cp), this.loadKey(pp).then((Op => {
          this.Ry || this.loading.get(ip) !== cp ? this.release(Op.id) : (this.loading.delete(ip), this.answered.set(Op.id, pp), this.ready.push({
            record: Hp(pp, Pp, Op),
            key: pp,
            id: Op.id
          }))
        }), (Op => {
          if (this.Ry || this.loading.get(ip) !== cp) return;
          this.loading.delete(ip), this.onFailure({
            key: pp,
            error: Op
          });
          const op = Op instanceof Ip.e && "decode" === Op.stage ? Wp : yp;
          this.ready.push({
            record: Hp(pp, op, null),
            key: pp,
            id: null
          })
        }))
      }
      async loadKey(pp) {
        switch (pp.kind) {
          case Dp.Glb:
            return this.load(await this.glbImage(pp), "none");
          case Dp.LifeformAtlas:
            return this.load(tp(await this.sources.lifeformAtlasUrl(pp.word), pp), "none");
          case Dp.ArmourAtlas:
            return this.load(tp(await this.sources.armourAtlasUrl(), pp), "none");
          case Dp.Cape:
            return this.load(tp(await this.sources.capeUrl(pp.word), pp), "none");
          case Dp.AttachmentImage:
            return this.load(tp(await this.sources.attachmentImageUrl(pp.word), pp), "none");
          case Dp.GroupAtlas:
            return this.load(tp(await this.sources.groupAtlasUrl(pp.word), pp), "none");
          case Dp.BlockImage:
            return this.load(tp(await this.sources.blockImageUrl(pp.word), pp), "none");
          case Dp.Particle: {
            const ip = await (pp.index === Ap.Item ? this.sources.particleItemUrl(pp.word) : this.sources.particleTextureUrl(pp.word));
            return this.load(tp(ip, pp), "flipY")
          }
          case Dp.GreyscaleArmour:
            return this.greyscaleArmour.load(pp.index, pp.word);
          default:
            throw new Ip.e("fetch", `image kind ${pp.kind}`, {
              cause: null
            })
        }
      }
      async glbImage(pp) {
        var ip;
        let cp = this.glbImages.get(pp.word);
        if (void 0 === cp) {
          const ip = this.glbTakenCount.get(pp.word),
            Op = tp(await this.sources.glbUrl(pp.word), pp);
          try {
            cp = kp(await this.fetchFile(Op))
          } catch (op) {
            throw new Ip.e("fetch", Op, {
              cause: op
            })
          }
          this.glbTakenCount.get(pp.word) === ip && this.glbImages.set(pp.word, cp)
        }
        const Op = null === (ip = cp) || void 0 === ip ? void 0 : ip[pp.index];
        if (!Op) throw new Ip.e("decode", `image ${pp.index} of file ${2147483647&pp.word}`, {
          cause: null
        });
        return Op
      }
    }

    function vp(pp) {
      let {
        kind: ip,
        index: cp,
        word: Op
      } = pp;
      return `${ip}:${cp}:${Op}`
    }

    function tp(pp, ip) {
      if (null === pp) throw new Ip.e("fetch", `no URL for image ${vp(ip)}`, {
        cause: null
      });
      return pp
    }

    function Hp(pp, ip, cp) {
      var Op, op, Ip;
      const Sp = new Uint8Array(16),
        xp = new DataView(Sp.buffer);
      return xp.setUint8(0, pp.kind), xp.setUint8(1, pp.index), xp.setUint8(2, ip), xp.setUint32(4, pp.word, !0), xp.setUint32(8, null !== (Op = null === cp || void 0 === cp ? void 0 : cp.id) && void 0 !== Op ? Op : 0, !0), xp.setUint16(12, Math.min(null !== (op = null === cp || void 0 === cp ? void 0 : cp.width) && void 0 !== op ? op : 0, 65535), !0), xp.setUint16(14, Math.min(null !== (Ip = null === cp || void 0 === cp ? void 0 : cp.height) && void 0 !== Ip ? Ip : 0, 65535), !0), Sp
    }
    const dp = 1179937895,
      ep = 1313821514,
      jp = 5130562;

    function kp(pp) {
      var ip;
      const cp = new DataView(pp.buffer, pp.byteOffset, pp.byteLength);
      if (pp.byteLength < 20 || cp.getUint32(0, !0) !== dp || cp.getUint32(16, !0) !== ep) return [];
      let Op, op = 20 + cp.getUint32(12, !0);
      try {
        Op = JSON.parse((new TextDecoder).decode(pp.subarray(20, op)))
      } catch {
        return []
      }
      for (; op + 8 <= pp.byteLength && cp.getUint32(op + 4, !0) !== jp;) op += 8 + cp.getUint32(op, !0);
      const Ip = null !== (ip = Op.images) && void 0 !== ip ? ip : [];
      if (0 === Ip.length || op + 8 > pp.byteLength) return Ip.map((() => null));
      const Sp = pp.subarray(op + 8, Math.min(pp.byteLength, op + 8 + cp.getUint32(op, !0)));
      return Ip.map((pp => {
        var ip, cp, op;
        const Ip = void 0 === pp.bufferView || null === (ip = Op.bufferViews) || void 0 === ip ? void 0 : ip[pp.bufferView];
        if (!Ip || 0 !== (null !== (cp = Ip.buffer) && void 0 !== cp ? cp : 0) || void 0 === Ip.byteLength) return null;
        const xp = null !== (op = Ip.byteOffset) && void 0 !== op ? op : 0,
          Lp = xp + Ip.byteLength;
        return Lp <= Sp.byteLength ? Sp.slice(xp, Lp) : null
      }))
    }
  },
  40867: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => Sp,
      f: () => Ip,
      i: () => op
    });
    let Op = null;

    function op(pp) {
      Op = pp
    }

    function Ip(pp) {
      Op === pp && (Op = null)
    }

    function Sp() {
      var pp;
      null === (pp = Op) || void 0 === pp || pp()
    }
  },
  36779: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => Dp,
      e: () => Pp,
      i: () => vp,
      m: () => Yp
    });
    var Op = cp(25),
      op = cp(2457),
      Ip = cp(2463),
      Sp = cp(2468),
      xp = cp(2543),
      Lp = cp(34);

    function Yp(pp, ip) {
      return (!(0, Sp.c)() || 0 === pp && 0 === ip) && (0, Ip.A)(op.i.Joystick, 0, pp, ip, 0)
    }
    const Dp = {
      Action1: 1,
      Action2: 2,
      Action3: 3,
      Attack: 4,
      Use: 5,
      Interact: 6,
      Boost: 7
    };

    function Ap(pp) {
      return pp.classList.contains("TouchKeyHit") && Wp() ? null : pp.firstElementChild
    }

    function Pp(pp) {
      return pp.classList.contains("TouchKeyHit") && !pp.classList.contains("CanvasZone") ? {
        whole: !Wp(),
        keyBox: null
      } : {
        whole: !1,
        keyBox: yp(Ap(pp))
      }
    }

    function Wp() {
      return document.documentElement.classList.contains(xp.l)
    }

    function yp(pp) {
      return !(pp instanceof HTMLElement) || pp.offsetWidth <= 0 || pp.offsetHeight <= 0 ? null : {
        width: pp.offsetWidth,
        height: pp.offsetHeight
      }
    }

    function Up(pp, ip) {
      const cp = pp => Math.min(65535, Math.round(4 * pp));
      return (cp(pp) | cp(ip) << 16) >>> 0
    }

    function wp(pp) {
      return {
        x: pp.left + pp.width / 2,
        y: pp.top + pp.height / 2,
        radius: Math.min(pp.width, pp.height) / 2
      }
    }
    const vp = new class {
      constructor(pp) {
        this.write = pp, this.elements = new Map, this.canvasLeft = 0, this.canvasTop = 0
      }
      set(pp, ip) {
        let cp = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        ip ? this.elements.set(pp, {
          element: ip,
          hidden: cp
        }) : this.elements.delete(pp), this.measureOne(pp)
      }
      measure() {
        let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
          left: this.canvasLeft,
          top: this.canvasTop
        };
        this.canvasLeft = pp.left, this.canvasTop = pp.top;
        for (const ip of this.elements.keys()) this.measureOne(ip)
      }
      hitZone(pp, ip) {
        let cp = null,
          Op = 1;
        for (const op of this.elements.keys()) {
          const Ip = this.shown(op);
          if (!Ip) continue;
          const {
            rect: Sp,
            element: xp
          } = Ip, Lp = wp(Sp), Yp = Math.max(0, Sp.width / 2 - Lp.radius), Dp = Math.max(0, Sp.height / 2 - Lp.radius), Pp = Math.max(0, Math.abs(pp - Lp.x) - Yp), Wp = Math.max(0, Math.abs(ip - Lp.y) - Dp), Up = xp.firstElementChild;
          let vp = Math.hypot(Pp, Wp) / Lp.radius;
          const tp = yp(Ap(xp));
          tp && (vp = Math.min(vp, Math.max(2 * Math.abs(pp - Lp.x) / tp.width, 2 * Math.abs(ip - Lp.y) / tp.height))), vp < Op && (cp = {
            code: op,
            element: xp,
            key: Up,
            ...Lp
          }, Op = vp)
        }
        return cp
      }
      measureOne(pp) {
        const ip = this.shown(pp);
        if (!ip) return void this.write(op.i.TouchZone, pp, 0, 0, 0);
        const {
          rect: cp,
          element: Op
        } = ip, Ip = wp(cp);
        this.write(op.i.TouchZone, pp, Ip.x - this.canvasLeft, Ip.y - this.canvasTop, Up(cp.width, cp.height));
        const Sp = yp(Ap(Op));
        this.write(op.i.TouchZone, 256 | pp, 0, 0, Sp ? Up(Sp.width, Sp.height) : 0)
      }
      shown(pp) {
        const ip = this.elements.get(pp),
          cp = Op.c.get("worldPanelHud");
        if (!ip || ip.hidden || "none" === cp) return null;
        const op = ip.element.getBoundingClientRect();
        return op.width <= 0 || op.height <= 0 ? null : {
          rect: op,
          element: ip.element
        }
      }
    }(Ip.A);
    (0, Lp.n)(xp.e, (() => {
      vp.measure()
    }))
  },
  40900: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => Lp,
      c: () => Yp
    });
    var Op = cp(41031),
      op = cp(39235),
      Ip = cp(36674),
      Sp = cp(40902),
      xp = cp(40882);
    const Lp = Op.c.timeForPlayerToConnect - 1e4;
    async function Yp(pp, ip, cp, Op) {
      let Lp;
      try {
        Lp = await pp.getTrafficCode()
      } catch (yp) {
        throw console.error("[bloxd-wasm-client] could not get a traffic code", yp), new xp.D(yp)
      }
      const {
        gameNameWithVariation: Yp,
        lobbyName: Dp
      } = ip, Ap = () => {
        const ip = (0, Ip.d)(pp, Yp, Dp, Lp, (pp => {
          var ip;
          return null !== (ip = null === cp || void 0 === cp ? void 0 : cp.isUsingCustomGameTexturePack(pp)) && void 0 !== ip && ip
        }));
        ip.joinOptions.wasmClient = !0;
        const op = (0, Sp.C)();
        return null !== op && (ip.joinOptions.renderBackend = op), ip.joinOptions.joinAdHold = Op, ip
      }, {
        roomName: Pp,
        joinOptions: Wp
      } = Ap();
      return {
        endpoint: ip.endpoint,
        roomName: Pp,
        joinOptions: Wp,
        session: {
          gameNameWithVariation: Yp,
          lobbyName: Dp,
          playerDbId: pp.whamm
        },
        optionsAfterRefusal: async ip => await (0, op.e)(pp, ip) ? Ap().joinOptions : null
      }
    }
  },
  41158: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => Dp,
      e: () => Ip,
      g: () => Ap,
      i: () => Sp
    });
    var Op = cp(41133),
      op = cp(40997);
    const Ip = new class {
      constructor() {
        this.page = null, this.session = void 0, this.follower = null, this.isWanted = !1, this.listeners = new Set, this.pageListeners = new Set, this.wantedListeners = new Set
      }
      get current() {
        return void 0 === this.session ? this.page : this.session
      }
      setPageFiles(pp) {
        this.change((() => {
          this.page = pp
        }))
      }
      setSessionFiles(pp) {
        const ip = void 0 !== this.session && void 0 === pp;
        if (this.change((() => {
            this.session = pp
          })), ip)
          for (const cp of [...this.pageListeners]) cp()
      }
      showsPage() {
        return void 0 === this.session
      }
      onPageShown(pp) {
        return this.pageListeners.add(pp), () => {
          this.pageListeners.delete(pp)
        }
      }
      setFollower(pp) {
        this.follower = pp, this.startFollower()
      }
      wanted() {
        this.isWanted = !0;
        for (const pp of [...this.wantedListeners]) pp();
        this.startFollower()
      }
      onWanted(pp) {
        return this.wantedListeners.add(pp), () => {
          this.wantedListeners.delete(pp)
        }
      }
      onChange(pp) {
        return this.listeners.add(pp), () => {
          this.listeners.delete(pp)
        }
      }
      startFollower() {
        const pp = this.follower;
        this.isWanted && null !== pp && (this.follower = null, pp((() => {
          this.follower = pp
        })))
      }
      change(pp) {
        const ip = this.current;
        if (pp(), this.current !== ip)
          for (const cp of this.listeners) cp()
      }
    };

    function Sp(pp, ip) {
      return {
        ...pp,
        armourAtlasUrl: () => {
          var cp, Op;
          return null !== (cp = null === (Op = ip()) || void 0 === Op ? void 0 : Op.armourAtlasUrl()) && void 0 !== cp ? cp : pp.armourAtlasUrl()
        },
        lifeformAtlasUrl: cp => Lp(ip(), (pp => pp.LIFEFORM_ATLAS_PATHS[cp]), (() => pp.lifeformAtlasUrl(cp))),
        groupAtlasUrl: cp => Lp(ip(), (pp => pp.GROUP_ATLAS_PATHS[cp]), (() => pp.groupAtlasUrl(cp))),
        particleItemUrl: Op => Yp(ip(), (async () => {
          const pp = await cp.e(38).then((() => cp(51264))).catch((() => null));
          return (null === pp || void 0 === pp ? void 0 : pp.particleItemSprite(Op)) || null
        }), (() => pp.particleItemUrl(Op))),
        blockImageUrl: cp => Yp(ip(), (async () => {
          var pp, ip;
          return null !== (pp = null === (ip = await xp()) || void 0 === ip ? void 0 : ip.blockImageName(cp)) && void 0 !== pp ? pp : null
        }), (() => pp.blockImageUrl(cp)))
      }
    }

    function xp() {
      return (0, op.o)().catch((() => null))
    }

    function Lp(pp, ip, cp) {
      return Yp(pp, (async () => {
        var pp;
        const cp = await xp(),
          Op = null === cp ? null : ip(cp),
          op = null !== (pp = null === Op || void 0 === Op ? void 0 : Op.slice(Op.lastIndexOf("/") + 1)) && void 0 !== pp ? pp : null;
        return "Player_Atlas" === op ? null : op
      }), cp)
    }
    async function Yp(pp, ip, cp) {
      if (null !== pp) {
        const cp = await ip(),
          Op = null === cp ? null : pp.textureUrl(cp);
        if (null !== Op) return Op
      }
      return cp()
    }
    const Dp = 0;

    function Ap(pp) {
      const ip = [Op.g.ArmourAtlas, Op.g.LifeformAtlas, Op.g.GroupAtlas, Op.g.BlockImage, Op.g.Particle];
      pp.reload(ip, (pp => {
        switch (pp.kind) {
          case Op.g.Particle:
            return pp.index === Op.i.Item;
          case Op.g.LifeformAtlas:
            return pp.word !== Dp;
          default:
            return !0
        }
      }))
    }
  },
  41038: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => Op,
      e: () => xp,
      g: () => Sp,
      i: () => op,
      m: () => Ip
    });
    const Op = 1e3;

    function op() {
      Lp((() => {
        window.location.reload()
      }))
    }

    function Ip() {
      return new Promise((() => {}))
    }

    function Sp(pp) {
      Lp((() => {
        window.location.replace(pp(window.location.href))
      }))
    }

    function xp(pp) {
      Promise.resolve().then((() => cp(108))).then((ip => {
        let {
          currentUrl: cp
        } = ip;
        Sp((() => cp.mergeSearchParamsInto(pp)))
      }), (() => {
        Sp((() => pp))
      }))
    }

    function Lp(pp) {
      null !== window.onbeforeunload ? Promise.resolve().then((() => cp(1765))).then((ip => {
        let {
          prepareForUnloadWithoutConfirmation: cp
        } = ip;
        try {
          cp()
        } catch (Op) {
          console.warn("[bloxd-wasm-client] prepareForUnloadWithoutConfirmation threw: leaving plainly", Op), window.onbeforeunload = null
        }
        pp()
      }), (() => {
        window.onbeforeunload = null, pp()
      })) : pp()
    }
  },
  5183: (pp, ip, cp) => {
    function Op(pp, ip) {
      return op(pp, ip)
    }

    function op(pp, ip) {
      if (pp === ip) return !0;
      if ("object" !== typeof pp || "object" !== typeof ip || null === pp || null === ip || Array.isArray(pp) !== Array.isArray(ip)) return !1;
      const cp = pp,
        Op = ip,
        Ip = Object.keys(cp);
      return Ip.length === Object.keys(Op).length && Ip.every((pp => Object.prototype.hasOwnProperty.call(Op, pp) && op(cp[pp], Op[pp])))
    }
    cp.d(ip, {
      b: () => Op
    })
  },
  41111: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => jp,
      d: () => dp,
      h: () => Up,
      k: () => yp
    });
    var Op = cp(1838),
      op = cp(1216),
      Ip = cp(39226),
      Sp = cp(36689),
      xp = cp(39244),
      Lp = cp(40882);
    const Yp = {
        "X-Requested-With": "XMLHtttpRequest"
      },
      Dp = 3,
      Ap = [500, 1500];

    function Pp(pp) {
      const ip = new URL(pp);
      return {
        secure: "https:" === ip.protocol || "wss:" === ip.protocol,
        host: ip.host,
        pathname: ip.pathname.replace(/\/+$/, ""),
        search: ip.searchParams.toString()
      }
    }

    function Wp(pp, ip, cp) {
      const {
        secure: Op,
        host: op,
        pathname: Ip,
        search: Sp
      } = Pp(pp);
      return `${Op?"https":"http"}://${op}${Ip}/matchmake/${ip}/${encodeURIComponent(cp)}${Sp?`?${Sp}`:""}`
    }

    function yp(pp, ip) {
      var cp;
      const Op = null !== (cp = ip.protocol) && void 0 !== cp ? cp : "ws";
      if ("ws" !== Op) throw new Error(`seat reservation asks for the ${Op} transport`);
      const {
        secure: op,
        host: Ip,
        pathname: Sp,
        search: xp
      } = Pp(pp), Lp = new URLSearchParams(xp);
      Lp.append("sessionId", ip.sessionId), ip.reconnectionToken && Lp.append("reconnectionToken", ip.reconnectionToken);
      return `${op?"wss":"ws"}://${ip.room.publicAddress||`${Ip}${Sp}`}/${ip.room.processId}/${ip.room.roomId}?${Lp.toString()}`
    }
    async function Up(pp, ip, cp) {
      var xp;
      let Yp = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const Pp = null !== (xp = Yp.sleep) && void 0 !== xp ? xp : Op.e,
        yp = new op.c(Yp.signal),
        Up = new Sp.d((() => {
          (0, op.h)(yp.controller, new Sp.f("seat"))
        })),
        {
          signal: Hp
        } = yp;
      try {
        const Op = await (0, Ip.g)((() => async function(pp, ip, cp, Op) {
          var Ip;
          const {
            signal: Sp,
            sleep: xp
          } = Op, Yp = Wp(pp, "joinOrCreate", ip), Pp = JSON.stringify(cp);
          let yp = null;
          for (let Wp = 0; Wp < Dp; Wp++) {
            var Up;
            if (Wp > 0) await xp(null !== (Up = Ap[Wp - 1]) && void 0 !== Up ? Up : 1500, Sp);
            let pp;
            (0, op.j)(Sp);
            try {
              pp = await vp(Yp, Pp, Op)
            } catch (Hp) {
              (0, op.j)(Sp), yp = wp(Hp);
              continue
            }
            const {
              response: ip,
              answer: cp,
              refusal: Ip,
              lost: Dp
            } = pp;
            if (null === Dp) {
              if (null !== Ip) throw tp(Ip, cp);
              if (ip.ok && null !== cp && kp(cp)) return cp;
              yp = new Lp.z(`seat request answered HTTP ${ip.status}${null===cp?" without JSON":" without a seat"}`, !1, void 0, ip.status)
            } else yp = wp(Dp.error)
          }
          throw null !== (Ip = yp) && void 0 !== Ip ? Ip : new Lp.z("seat request made no attempt", !1)
        }(pp, ip, cp, {
          ...Yp,
          signal: Hp,
          sleep: Pp
        })), Hp, Pp);
        return Up.answered(), Op
      } finally {
        Up.stop(), yp.unfollow()
      }
    }

    function wp(pp) {
      return new Lp.z(pp instanceof Error ? pp.message : String(pp), !0, pp)
    }
    async function vp(pp, ip, cp) {
      var Op;
      const {
        signal: Ip
      } = cp, Sp = null !== (Op = cp.fetch) && void 0 !== Op ? Op : fetch, xp = await Sp(pp, {
        method: "POST",
        headers: {
          ...Yp,
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: ip,
        credentials: "include",
        signal: Ip
      }), {
        answer: Lp,
        lost: Dp
      } = await async function(pp) {
        try {
          const ip = await pp.json();
          return {
            answer: "object" === typeof ip && null !== ip ? ip : null,
            lost: null
          }
        } catch (ip) {
          return {
            answer: null,
            lost: ip instanceof SyntaxError ? null : {
              error: ip
            }
          }
        }
      }(xp), Ap = null !== Lp && "string" === typeof Lp.error ? Lp.error : null;
      var Pp;
      null !== Ap && (null === (Pp = cp.onRefusal) || void 0 === Pp || Pp.call(cp));
      return (0, op.j)(Ip), {
        response: xp,
        answer: Lp,
        refusal: Ap,
        lost: Dp
      }
    }

    function tp(pp, ip) {
      return new Lp.r(pp, "number" === typeof(null === ip || void 0 === ip ? void 0 : ip.code) ? ip.code : 0, (0, xp.n)(pp).text)
    }
    class Hp extends Error {
      constructor(pp, ip) {
        super(pp), this.code = ip, this.name = "SeatHttpError"
      }
    }
    async function dp(pp, ip, cp) {
      let Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const {
        response: op,
        answer: Ip,
        refusal: Sp,
        lost: xp
      } = await vp(Wp(pp, "reconnect", ip), JSON.stringify({
        reconnectionToken: cp
      }), Op);
      if (null !== xp) throw xp.error;
      if (!op.ok) {
        const pp = null !== Ip && "number" === typeof Ip.code && 0 !== Ip.code ? Ip.code : op.status;
        throw new Hp(`the seat's reconnect was refused: ${null!==Sp&&void 0!==Sp?Sp:`HTTP ${op.status}`}`, pp)
      }
      if (null !== Sp) throw tp(Sp, Ip);
      if (null === Ip || !kp(Ip)) throw new Error("the seat's reconnect answered " + (null === Ip ? "without JSON" : "without a seat"));
      return {
        ...Ip,
        reconnectionToken: cp
      }
    }
    const ep = 10;

    function jp(pp) {
      if (pp.byteLength < 2 || pp[0] !== ep) return null;
      const ip = 2 + pp[1];
      return ip > pp.byteLength ? null : (new TextDecoder).decode(pp.subarray(2, ip))
    }

    function kp(pp) {
      const ip = pp.room;
      return "string" === typeof pp.sessionId && "object" === typeof ip && null !== ip && "string" === typeof ip.roomId && "string" === typeof ip.processId && "string" === typeof ip.name
    }
  },
  40792: (pp, ip, cp) => {
    cp.d(ip, {
      A: () => Ep,
      B: () => dp,
      E: () => ep,
      H: () => wp,
      K: () => qp,
      N: () => lp,
      P: () => yp,
      Q: () => Jp,
      S: () => tp,
      W: () => vp,
      _: () => Hp,
      c: () => op,
      cb: () => jp,
      d: () => Qp,
      h: () => Xp,
      k: () => Wp,
      n: () => Up,
      o: () => Cp,
      q: () => mp,
      r: () => Mp,
      u: () => Rp,
      w: () => kp
    });
    var Op = cp(3085);
    const op = {
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

    function Ip(pp, ip) {
      return !ArrayBuffer.isView(pp) || pp instanceof DataView ? Array.isArray(pp) ? pp.map((pp => ip(pp))) : pp : Array.from(pp, (pp => ip(pp)))
    }

    function Sp(pp) {
      if ("string" !== typeof pp) return pp;
      for (let ip = 0; ip < pp.length; ip++) {
        const cp = pp.charCodeAt(ip);
        if (cp >= 55296 && cp <= 57343) return Lp.decode(xp.encode(pp))
      }
      return pp
    }
    const xp = new TextEncoder,
      Lp = new TextDecoder;

    function Yp(pp) {
      return pp
    }
    let Dp;

    function Ap(pp) {
      return null === pp || "object" !== typeof pp ? pp : [Sp(pp.Cx), Sp(pp.Ex)]
    }

    function Pp(pp) {
      return null === pp || "object" !== typeof pp ? pp : [Ip(pp.WI, Yp), Ip(pp.Zx, Yp)]
    }

    function Wp(pp) {
      return null === (ip = pp) || "object" !== typeof ip ? ip : [Sp(ip.VD), Sp(ip.pA)];
      var ip
    }

    function yp(pp) {
      return null === (ip = pp) || "object" !== typeof ip ? ip : [ip.id, ip.bD];
      var ip
    }

    function Up(pp) {
      return null === (ip = pp) || "object" !== typeof ip ? ip : [ip.eI, Sp(ip.uI), ip.jI, Sp(ip.RI), ip.EI, ip.XI, ip.zD, Sp(ip.sD), Sp(ip.KD)];
      var ip
    }

    function wp(pp) {
      return null === (ip = pp) || "object" !== typeof ip ? ip : [Ip(ip.vx, Yp), ip.tx];
      var ip
    }

    function vp(pp) {
      return null === (ip = pp) || "object" !== typeof ip ? ip : [Ip(ip.yx, (pp => Sp(pp))), Sp(ip.Ux), ip.wx];
      var ip
    }

    function tp(pp) {
      return null === (ip = pp) || "object" !== typeof ip ? ip : [Ip(ip.nL, Yp), Sp(ip.FL), ip.gL];
      var ip
    }

    function Hp(pp) {
      return null === (ip = pp) || "object" !== typeof ip ? ip : [Sp(ip.KI), Sp(ip.VI)];
      var ip
    }

    function dp(pp) {
      return null === (ip = pp) || "object" !== typeof ip ? ip : [Sp(ip.IL)];
      var ip
    }

    function ep(pp) {
      return Sp(pp)
    }

    function jp(pp) {
      return null === (ip = pp) || "object" !== typeof ip ? ip : [Sp(ip.ND), Sp(ip.TD), Sp(ip.Cx), Sp(ip.Ex)];
      var ip
    }

    function kp(pp) {
      return Ap(pp)
    }

    function mp(pp) {
      return Ap(pp)
    }

    function Rp(pp) {
      return null === (ip = pp) || "object" !== typeof ip ? ip : [Sp(ip.JL)];
      var ip
    }

    function qp(pp) {
      return pp
    }

    function Mp(pp) {
      return null === (ip = pp) || "object" !== typeof ip ? ip : [Sp(ip.qx), Sp(ip.Mx)];
      var ip
    }

    function Cp(pp) {
      return Sp(pp)
    }

    function Ep(pp) {
      return Pp(pp)
    }

    function Xp(pp) {
      return Pp(pp)
    }

    function lp(pp) {
      return null === (ip = pp) || "object" !== typeof ip ? ip : [Sp(ip.rL)];
      var ip
    }

    function Qp(pp) {
      return (Dp ??= (0, Op.c)().map((pp => pp.name)), Dp).map((ip => {
        return "string" === typeof(cp = pp[ip]) ? Sp(cp) : Ip(cp, Yp);
        var cp
      }))
    }

    function Jp(pp) {
      return null === (ip = pp) || "object" !== typeof ip ? ip : [ip.XL, ip.lL, ip.QL];
      var ip
    }
  },
  41165: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => Ip
    });
    var Op = cp(41174),
      op = cp(41158);
    const Ip = new class {
      constructor(pp) {
        this.pack = pp, this.game = void 0, this.settle = null, this.hold = null, this.endedWhileHeld = !1, this.gameListeners = new Set, pp.onWanted((() => {
          this.release()
        }))
      }
      setGame(pp) {
        if (void 0 === pp && null !== this.hold) return void(this.endedWhileHeld = !0);
        this.hold = null, this.endedWhileHeld = !1;
        const ip = this.inGame();
        if (this.game = pp, this.update(), this.inGame() !== ip)
          for (const cp of this.gameListeners) cp()
      }
      inGame() {
        return void 0 !== this.game
      }
      onGameChange(pp) {
        return this.gameListeners.add(pp), () => {
          this.gameListeners.delete(pp)
        }
      }
      unwantedLeave(pp) {
        pp && void 0 !== this.game ? this.hold = {
          game: this.game
        } : this.release()
      }
      rejoinHold() {
        return this.hold
      }
      releaseHold(pp) {
        null !== pp && pp === this.hold && this.release()
      }
      release() {
        if (null === this.hold) return;
        const pp = this.endedWhileHeld;
        this.hold = null, this.endedWhileHeld = !1, pp && this.setGame(void 0)
      }
      setSettled(pp) {
        this.settle = pp, this.update()
      }
      update() {
        void 0 === this.game ? this.pack.setSessionFiles(void 0) : null !== this.settle && (0, Op.c)(this.settle.state, this.game) && this.pack.setSessionFiles(this.settle.files)
      }
    }(op.e)
  },
  5178: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => Sp,
      d: () => xp
    });
    var Op = cp(2187),
      op = cp(5183);
    let Ip = null;

    function Sp(pp) {
      Ip = {
        pack: pp.metaData.id === Op.b ? null : pp
      }
    }

    function xp(pp) {
      return !(null === Ip || !(0, op.b)(Ip.pack, pp)) && (Ip = null, !0)
    }
  },
  40873: (pp, ip, cp) => {
    cp.r(ip), cp.d(ip, {
      followPageUiPack: () => CD,
      packForGame: () => MD,
      playWasmGame: () => aD,
      prefetchWasmPreviews: () => EL,
      setGamePackConfirm: () => aY,
      startWasmPlay: () => JD,
      startWasmPreviews: () => CL
    });
    var Op = cp(195),
      op = cp(1255),
      Ip = cp(156),
      Sp = cp(39261),
      xp = cp(1956),
      Lp = cp(34),
      Yp = cp(4770),
      Dp = cp(1334),
      Ap = cp(1749),
      Pp = cp(1349),
      Wp = cp(39434),
      yp = cp(1317),
      Up = cp(1827),
      wp = cp(3020);
    let vp = null,
      tp = null,
      Hp = null,
      dp = !1;

    function ep() {
      vp ??= performance.now()
    }
    const jp = {
      ready: () => {
        Up.c.markAdmissionAwaited()
      },
      adEnded: () => {
        Up.c.markJoinAdEnded()
      },
      admitted: () => {
        Up.c.markAdmitted()
      }
    };
    var kp = cp(39445),
      mp = cp(39348),
      Rp = cp(36677),
      qp = cp(39226),
      Mp = cp(9034),
      Cp = cp(36689),
      Ep = cp(40879),
      Xp = cp(4886),
      lp = cp(40783),
      Qp = cp(40865),
      Jp = cp(40792);
    const Bp = {
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

    function Np(pp) {
      const ip = {
        ...Qp.d[pp]
      };
      for (const cp of Object.keys(Bp[pp])) delete ip[cp];
      return ip
    }

    function Tp() {
      var pp, ip;
      return null === (pp = null === (ip = (0, lp.k)()) || void 0 === ip ? void 0 : ip.localPlayerAlive()) || void 0 === pp || pp
    }

    function fp() {
      var pp, ip;
      return null !== (pp = null === (ip = (0, lp.k)()) || void 0 === ip ? void 0 : ip.localDeaths()) && void 0 !== pp ? pp : null
    }
    const bp = {
        current: Tp,
        watch: pp => {
          let ip = Tp(),
            cp = fp();
          return (0, Xp.s)((() => {
            const Op = Tp(),
              op = fp(),
              Ip = null !== op && null !== cp && op !== cp;
            cp = op, Ip ? (ip || pp(!0), pp(!1), Op && pp(!0), ip = Op) : Op !== ip && (ip = Op, pp(Op))
          }))
        }
      },
      hp = {
        states: {
          ...Np("states"),
          localPlayerAlive: bp
        },
        events: {
          ...Np("events"),
          localPlayerAliveSet: {
            watch: bp.watch
          }
        },
        commands: {
          ...Np("commands"),
          respawn: () => {
            var pp;
            null === (pp = (0, lp.k)()) || void 0 === pp || pp.respawn()
          },
          playEmote: pp => {
            var ip;
            null === (ip = (0, lp.k)()) || void 0 === ip || ip.send(Jp.c.PlayEmote, (0, Jp.B)({
              IL: pp
            }))
          },
          applyTemporaryThirdPerson: pp => {
            var ip;
            let {
              durationMs: cp
            } = pp;
            null === (ip = (0, lp.k)()) || void 0 === ip || ip.thirdPersonFor(cp)
          },
          bindCustomButtonKeys: pp => {
            var ip;
            null === (ip = (0, lp.k)()) || void 0 === ip || ip.bindCustomButtonKeys(pp)
          },
          pressCustomButton: pp => {
            var ip;
            let {
              id: cp,
              down: Op
            } = pp;
            null === (ip = (0, lp.k)()) || void 0 === ip || ip.pressCustomButton(cp, Op)
          },
          setLookSensitivity: () => {},
          wakeUp: pp => {
            const ip = (0, Jp.N)({
                rL: pp
              }),
              cp = () => {
                const pp = (0, lp.k)();
                return !(null !== pp && void 0 !== pp && pp.isSessionLive) || pp.send(Jp.c.StopSleeping, ip)
              };
            if (!cp()) {
              const pp = (0, Xp.s)((() => {
                cp() && pp()
              }))
            }
          },
          setCameraZoom: pp => {
            var ip;
            null === (ip = (0, lp.k)()) || void 0 === ip || ip.setCameraZoom(pp)
          }
        },
        queries: Np("queries"),
        lookups: {
          ...Np("lookups"),
          cameraZoom: () => {
            var pp, ip;
            return null !== (pp = null === (ip = (0, lp.k)()) || void 0 === ip ? void 0 : ip.cameraZoom()) && void 0 !== pp ? pp : 0
          }
        }
      };
    var ap = cp(39244),
      np = cp(40882),
      Fp = cp(40884),
      gp = cp(40900),
      Gp = cp(1268),
      rp = cp(108),
      Zp = cp(4609),
      zp = cp(3818),
      sp = cp(1183);
    const Kp = {
      gS: () => (0, Gp.c)(),
      inbuiltOverwritten: () => Zp.e,
      reflectApplyHit: () => sp.b,
      definerHit: () => rp.currentUrl.c,
      emitReplaced: () => (0, Lp.e)(),
      confirmMesh: () => (0, zp.d)(),
      confirmMeshHitStack: () => (0, zp.f)()
    };
    var Vp = cp(40889),
      ii = cp(41038);
    var ci = cp(25),
      Oi = cp(1963),
      oi = cp(2012),
      Ii = cp(1656),
      Si = cp(2063),
      xi = cp(1201),
      Li = cp(1260),
      Yi = cp(41046);

    function Di() {
      return Li.g.get().getCurrentLanguageCode()
    }

    function Ai(pp) {
      const ip = () => {
        pp({
          translate: (pp, ip) => (0, xi.y)(Di(), pp, ip),
          keyBindingText: pp => {
            const ip = (0, oi.p)(pp, ci.c.get("isTouchScreen"));
            return null !== ip ? (0, xi.B)(Di(), ip.translationKey, ip.params) : (0, oi.l)((0, oi.o)(pp))
          },
          isFriend: Si.g,
          hiddenNames: Oi.d.shown,
          loadsFontRest: (0, Yi.e)(Di())
        })
      };
      let cp = !1;
      const Op = () => {
          const pp = Di();
          (0, xi.l)(pp).then((() => {
            cp || pp !== Di() || ip()
          }))
        },
        op = () => Ii.d.getSocialState().friends.map((pp => pp.name.toLowerCase())).sort().join(" ");
      let Ip = op();
      ip(), Op();
      const Sp = [(0, Li.k)((() => {
        ip(), Op()
      })), (0, Lp.n)("customBindingsChanged", ip), (0, Lp.n)("appManagerUpdated|isTouchScreen", ip), (0, Si.e)((() => {
        const pp = op();
        pp !== Ip && (Ip = pp, ip())
      })), Oi.d.subscribe(ip)];
      return () => {
        cp = !0;
        for (const pp of Sp) pp()
      }
    }
    var Pi = cp(643),
      Wi = cp(1014),
      yi = cp(1989),
      Ui = cp(322),
      wi = cp(188),
      vi = cp(2963),
      ti = cp(2970),
      Hi = cp(38960),
      di = cp(4791),
      ei = cp(41058),
      ui = cp(681),
      ji = cp(657),
      ki = cp(3047),
      mi = cp(1982),
      Ri = cp(3821),
      qi = cp(3396);
    let Mi = null;
    var Ci = cp(1211),
      Ei = cp(1216),
      Xi = cp(4520),
      li = cp(3556),
      Qi = cp(55),
      Ji = cp(316),
      Bi = cp(314),
      Ni = cp(41079),
      Ti = cp(4895);
    var fi = cp(37909),
      bi = cp(41087);
    class ai {
      constructor(pp, ip) {
        this.showView = pp, this.holdForAd = ip
      }
      pointerUnlockRequestsChanged() {
        (0, Ni.G)()
      }
      pointerLockDebugEntries() {
        return [{
          label: "Locked to the canvas",
          value: String((0, Ni.r)())
        }]
      }
      setGameViewShown(pp) {
        this.showView(pp)
      }
      setGameView(pp) {
        (0, bi.n)(pp)
      }
      videoAdHold(pp, ip) {
        this.holdForAd(pp, ip)
      }
    }
    class ni {
      leave(pp) {
        ! function(pp) {
          if (null !== (0, Pp.d)().websocketUrl) try {
            (0, Xp.H)().leaveGame(pp)
          } finally {
            (0, Pp.p)({
              websocketUrl: null
            })
          }
        }(pp)
      }
      isReplay() {
        return !1
      }
    }
    class Fi {
      watchFrameStarts(pp) {
        return (0, Xp.n)(pp)
      }
      watchFrames(pp) {
        return (0, Xp.m)(pp)
      }
      watchTicks(pp) {
        return (0, Xp.s)(pp)
      }
    }
    var gi = cp(41091);

    function Gi(pp) {
      return pp >= 0 ? Math.min(1, pp) : 0
    }

    function ri(pp, ip) {
      const {
        fade: cp
      } = pp;
      return null === cp || ip - cp.at >= cp.ms ? pp.volume : cp.from + (pp.volume - cp.from) * Math.max(0, (ip - cp.at) / cp.ms)
    }

    function Zi(pp) {
      const ip = Object.entries(pp),
        cp = new Uint32Array(ip.length);
      let Op = 0;
      for (const [Sp, [, xp]] of ip.entries()) cp[Sp] = xp.length, Op += xp.length;
      const op = new Float64Array(3 * Op);
      let Ip = 0;
      for (const [, Sp] of ip)
        for (const pp of Sp) op.set(pp, Ip), Ip += 3;
      return {
        blocks: ip.map((pp => {
          let [ip] = pp;
          return ip
        })).join("\0"),
        counts: cp,
        values: op
      }
    }
    class zi {
      constructor(pp, ip) {
        this.core = pp, this.warn = ip, this.latest = 0
      }
      async feed() {
        let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : si;
        const ip = ++this.latest;
        let cp;
        try {
          cp = await pp()
        } catch (Op) {
          return void(this.core.isStopped || ip !== this.latest || this.warn("the block colours didn't load, so block particles draw grey", Op))
        }
        ip === this.latest && (this.core.setBlockColours(cp) || this.core.isStopped || this.warn("the core refused the block colours: block particles draw grey"))
      }
    }
    async function si() {
      return Zi((await cp.e(207).then((() => cp(34510)))).averageColors)
    }
    var Ki = cp(4903),
      Vi = cp(4911),
      pc = cp(40842),
      ic = cp(3333),
      cc = cp(36472),
      Oc = cp(40938),
      oc = cp(636),
      Ic = cp(37271),
      Sc = cp(629),
      xc = cp(337),
      Lc = cp(40923);
    const Yc = [3e4, 12e4, 3e5];
    class Dc extends Error {}
    const Ac = {
      mobTypes: oc.o,
      vehicleTypes: Ic.d,
      mobAiStates: oc.k,
      playerPoses: Sc.n
    };
    var Pc = cp(40911),
      Wc = cp(40930),
      yc = cp(40967),
      Uc = cp(1080),
      wc = cp(41096),
      vc = cp(41104),
      tc = cp(3071),
      Hc = cp(39219),
      dc = cp(4927),
      ec = cp(2457);
    const uc = ec.C.KeysDisabled | ec.C.LookFrozen | ec.C.ClicksSuppressed,
      jc = tc.f;
    var kc = (0, vc.c)("resumingConn");
    class mc {
      constructor(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.shell = pp, this.now = ip, this.session = void 0, this.attempt = null, this.landed = null, this.initialInfoConn = 0, this.initialInfoOffer = !1, this.completedEarlyConn = 0, Object.defineProperty(this, kc, {
          writable: !0,
          value: 0
        }), this.drops = 0, this.session = new Hc.e({
          reconnect: pp => this.reconnect(pp),
          isLive: () => pp.isLive(),
          onReconnected: ip => {
            this.landed = ip, pp.onReconnected(ip), this.landIfResumed()
          },
          onGaveUp: (ip, cp) => {
            this.abortAttempt(), pp.onGaveUp(ip, cp)
          },
          freeze: ip => {
            pp.ZC(ip), (0, dc.g)(uc, ip ? uc : 0, "reconnectFreeze")
          },
          releaseSeat: pp => {
            this.releaseSeat(pp)
          }
        })
      }
      isResuming() {
        return this.session.isResuming()
      }
      get resumingConn() {
        return (0, wc.e)(this, kc)[kc]
      }
      canHoldSeat() {
        return this.session.canHoldSeat()
      }
      onInitialInfo(pp) {
        let {
          conn: ip,
          graceMs: cp,
          sessionBased: Op,
          replayOffer: op
        } = pp;
        this.session.onInitialInfo(cp, Op), this.isResuming() && (this.initialInfoConn = ip, this.initialInfoOffer = op, this.landIfResumed())
      }
      onResumeComplete(pp) {
        0 !== pp && (pp === (0, wc.e)(this, kc)[kc] ? ((0, wc.e)(this, kc)[kc] = 0, this.session.onResumed()) : this.isResuming() && (this.completedEarlyConn = pp))
      }
      onDropped(pp) {
        this.drops++, this.landed = null, this.initialInfoConn = 0, this.initialInfoOffer = !1, this.completedEarlyConn = 0, (0, wc.e)(this, kc)[kc] = 0, this.session.onConnectionLost(pp)
      }
      leave() {
        this.session.leave(), this.dispose()
      }
      dispose() {
        this.abortAttempt(), this.landed = null, this.completedEarlyConn = 0, (0, wc.e)(this, kc)[kc] = 0, this.session.end()
      }
      reconnect(pp) {
        const ip = this.attempt;
        if (null !== ip && this.awaitingJoinRoom(ip)) return ip.result;
        this.abortAttempt();
        const cp = new AbortController,
          Op = this.drops,
          op = {
            attachedAt: null
          },
          Ip = this.shell.reconnect(pp, cp.signal, (() => {
            op.attachedAt = this.now()
          })).then((pp => {
            if (this.clearAttempt(Sp), this.drops !== Op) throw new Error("the resumed room dropped before its attempt settled");
            return pp
          }), (pp => {
            throw this.clearAttempt(Sp), pp
          })),
          Sp = {
            abort: cp,
            socket: op,
            result: Ip
          };
        return this.attempt = Sp, Ip
      }
      clearAttempt(pp) {
        this.attempt === pp && (this.attempt = null)
      }
      abortAttempt() {
        let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new DOMException("the reconnect attempt was given up", "AbortError");
        const ip = this.attempt;
        this.attempt = null, null === ip || void 0 === ip || ip.abort.abort(pp)
      }
      awaitingJoinRoom(pp) {
        const ip = pp.socket.attachedAt;
        return null !== ip && this.now() - ip < jc
      }
      releaseSeat(pp) {
        const ip = this.attempt,
          cp = null !== ip && this.awaitingJoinRoom(ip);
        this.abortAttempt(new np.w), cp || this.shell.releaseSeat(pp)
      }
      landIfResumed() {
        const pp = this.landed;
        if (null !== pp && pp.conn === this.initialInfoConn) {
          const ip = this.initialInfoOffer && this.completedEarlyConn !== pp.conn;
          if (this.landed = null, this.initialInfoConn = 0, this.initialInfoOffer = !1, this.completedEarlyConn = 0, this.abortAttempt(), !ip) return void this.session.onResumed();
          (0, wc.e)(this, kc)[kc] = pp.conn, this.session.onResuming()
        }
      }
    }
    var Rc = cp(39221),
      qc = cp(41111),
      Mc = cp(36682),
      Cc = cp(36679),
      Ec = cp(2187),
      Xc = cp(1927),
      lc = cp(4398),
      Qc = cp(40945),
      Jc = cp(5178);

    function Bc(pp) {
      let {
        pack: ip,
        gameSource: cp
      } = pp;
      if (null !== cp && "" !== cp) return `game:${cp}`;
      if (null === ip) return "default";
      const {
        id: Op,
        version: op
      } = ip.metaData;
      if (Op !== Ec.q.CUSTOM) return `${Op}@${op}`;
      const Ip = [];
      for (const Sp of [ip.textureOverrides, ip.modelOverrides, ip.animations])
        for (const [pp, ip] of Object.entries(null !== Sp && void 0 !== Sp ? Sp : {})) Ip.push(`${pp}:${ip.length}`);
      return `${Op}:${(0,Xc.w)(Ip.join())}`
    }
    var Nc = cp(4511),
      Tc = cp(3352),
      fc = cp(41114),
      bc = cp(659),
      hc = cp(3360),
      ac = cp(104),
      nc = cp(4589),
      Fc = cp(44),
      gc = cp(4412),
      Gc = cp(41005),
      rc = cp(4534),
      Zc = cp(2463),
      zc = cp(1650),
      sc = cp(1677),
      Kc = cp(1308),
      Vc = cp(116),
      pO = cp(301),
      iO = cp(39258),
      cO = cp(2468),
      OO = cp(4921);
    const oO = new Set([Ki.wb.KeyDown, Ki.wb.MouseMove, Ki.wb.MouseDown, Ki.wb.Wheel, Ki.wb.TouchStart, Ki.wb.TouchMove]);

    function IO(pp) {
      return (pp.shiftKey ? Ki.Pb.Shift : 0) | (pp.ctrlKey ? Ki.Pb.Ctrl : 0) | (pp.altKey ? Ki.Pb.Alt : 0) | (pp.metaKey ? Ki.Pb.Meta : 0) | ("repeat" in pp && pp.repeat ? Ki.Pb.Repeat : 0) | (pp.isTrusted ? 0 : Ki.Pb.Untrusted | function(pp) {
        try {
          const {
            editable: ip,
            outsideView: cp
          } = (0, iO.f)(pp.target);
          return (ip ? Ki.Pb.UntrustedEditable : 0) | (cp ? Ki.Pb.UntrustedOutsideView : 0)
        } catch {
          return 0
        }
      }(pp))
    }

    function SO(pp) {
      return "touchOnly" !== (0, Vc.c)() && "function" === typeof pp.requestPointerLock
    }

    function xO(pp) {
      return 0 === pp.button ? pp.altKey ? OO.j["Alt+Left Click"] : OO.j.Mouse1 : 1 === pp.button ? OO.j.Mouse2 : OO.j.Mouse3
    }
    const LO = new Set(["AltLeft", "AltRight", "ArrowUp", "ArrowDown"]),
      YO = new Map([
        ["AltLeft", "altKey"],
        ["AltRight", "altKey"],
        ["ControlLeft", "ctrlKey"],
        ["ControlRight", "ctrlKey"],
        ["ShiftLeft", "shiftKey"],
        ["ShiftRight", "shiftKey"],
        ["MetaLeft", "metaKey"],
        ["MetaRight", "metaKey"]
      ]),
      DO = 32768,
      AO = 1;

    function PO(pp) {
      return Math.min(Math.max(Math.round(pp), 0), 65535)
    }

    function WO(pp, ip, cp) {
      const Op = [],
        op = (pp, ip, cp, op) => {
          const Ip = pp => {
            (0, sc.w)(pp) || cp(pp)
          };
          pp.addEventListener(ip, Ip, op), Op.push((() => {
            pp.removeEventListener(ip, Ip, op)
          }))
        },
        Ip = {
          capture: !0,
          passive: !0
        },
        Sp = (pp, cp, Op, op, Ip) => (!(0, cO.c)() || !oO.has(pp)) && (ip(pp, cp, Op, op, Ip), !0),
        xp = () => document.pointerLockElement === pp,
        Lp = (0, pO.h)(),
        Yp = pp => {
          pp.ctrlKey && cp.ctrlCombosAreGames() && !(0, dc.e)(pp.target) && pp.preventDefault()
        },
        Dp = (pp, Op, op) => {
          cp.inspect(pp, Op, !1), ip(Ki.wb.KeyUp, Op, 0, 0, (0, Zc.v)(op, pp.timeStamp)), cp.keyReleased(Op)
        },
        Ap = new Map,
        Pp = (pp, ip, cp) => pp[cp] || ("AltRight" === ip || "ControlLeft" === ip) && pp.getModifierState("AltGraph"),
        Wp = new Map,
        yp = () => {
          Ap.clear(), Wp.clear()
        },
        Up = pp => {
          if (pp.isTrusted && document.hasFocus())
            for (const [ip, cp] of Wp) Wp.delete(ip), Pp(pp, ip, cp) || (Ap.delete(ip), Dp(pp, OO.j[ip], IO(pp)))
        };
      pp.tabIndex = -1;
      let wp = 0,
        vp = 0;
      const tp = () => {
        const ip = pp.getBoundingClientRect();
        wp = ip.left, vp = ip.top
      };
      let Hp = "mouse";
      const dp = () => !xp() && ("mouse" === Hp || !cp.touchUiShown()),
        ep = (pp, ip, cp) => {
          const Op = (PO(pp.clientX - wp) | PO(pp.clientY - vp) << 16) >>> 0;
          Sp(Ki.wb.MouseMove, Ki.Qb.Point, ip, cp, Op)
        };
      let jp = !1,
        kp = 0;
      const mp = () => {
        jp && (jp = !1, cp.viewShown() && (0, Ni.T)())
      };
      Op.push((() => {
        clearTimeout(kp)
      })), op(window, "keydown", (pp => {
        "Escape" === pp.key ? (0, Ni.I)(!0) : pp.repeat || (0, dc.e)(pp.target) || (jp = !0, clearTimeout(kp), kp = window.setTimeout(mp, 0))
      }), Ip), op(window, "keydown", (pp => {
        mp(), Yp(pp), Up(pp);
        const ip = OO.j[pp.code];
        if ("number" !== typeof ip || !cp.viewShown()) return;
        const Op = (0, dc.e)(pp.target);
        Op || !cp.prevents(ip) && !LO.has(pp.code) || pp.preventDefault(), pp.repeat || cp.inspect(pp, ip, !0), Sp(Ki.wb.KeyDown, ip, 0, 0, (0, Zc.v)(IO(pp), pp.timeStamp)) && Ap.set(pp.code, ip), Op || cp.keyPressed(ip)
      }), {
        capture: !1,
        passive: !1
      }), op(window, "keyup", (pp => {
        "Escape" === pp.key && (0, Ni.I)(!1), Yp(pp), Ap.delete(pp.code), Wp.delete(pp.code), Up(pp);
        const ip = OO.j[pp.code];
        "number" === typeof ip && Dp(pp, ip, IO(pp))
      }), {
        capture: !0,
        passive: !1
      }), op(window, "mousemove", (pp => {
        "mouse" === Hp && dp() ? ep(pp, pp.movementX, pp.movementY) : xp() ? Sp(Ki.wb.MouseMove, Ki.Qb.Stamped, pp.movementX, pp.movementY, (0, Zc.v)(0, pp.timeStamp)) : Sp(Ki.wb.MouseMove, 0, pp.movementX, pp.movementY, 0)
      }), Ip);
      let Rp = 0,
        qp = 0;
      const Mp = [];
      let Cp = !1,
        Ep = !1;
      op(pp, "mousedown", (pp => {
        if ((0, cO.c)()) return;
        Up(pp);
        const Op = 1 << pp.button;
        if (!xp() && (0, Ni.S)() && (0, Ni.f)() && (Ep = !0, !Cp)) return void(Rp |= Op);
        Rp &= ~Op;
        const op = pp.button <= 2 ? xO(pp) : void 0;
        void 0 !== op && (Mp[pp.button] = op, cp.inspect(pp, op, !0)), dp() && ep(pp, 0, 0), ip(Ki.wb.MouseDown, pp.button, pp.clientX, pp.clientY, (0, Zc.v)(IO(pp), pp.timeStamp)), qp |= Op, void 0 !== op && cp.keyPressed(op)
      }), Ip), op(window, "mouseup", (pp => {
        var Op;
        Up(pp);
        const op = 1 << pp.button,
          Ip = 0 !== (Rp & ~qp & op);
        if (Rp &= ~op, qp &= ~op, Ip) return;
        const Sp = pp.button <= 2 ? null !== (Op = Mp[pp.button]) && void 0 !== Op ? Op : xO(pp) : void 0;
        void 0 !== Sp && cp.inspect(pp, Sp, !1), ip(Ki.wb.MouseUp, pp.button, pp.clientX, pp.clientY, (0, Zc.v)(IO(pp), pp.timeStamp)), void 0 !== Sp && cp.keyReleased(Sp)
      }), Ip), op(pp, "contextmenu", (pp => {
        pp.preventDefault()
      }), {
        passive: !1
      });
      const Xp = pp => {
        (xp() || (0, Ni.n)() && (0, Kc.t)()) && (pp.ctrlKey || Lp && !document.fullscreenElement) && pp.preventDefault()
      };
      op(pp, "wheel", (pp => {
        Xp(pp), Up(pp), Sp(Ki.wb.Wheel, pp.deltaMode, pp.deltaX, pp.deltaY, 0)
      }), {
        capture: !0,
        passive: !1
      });
      const lp = {
          capture: !0,
          passive: !1
        },
        Qp = pp => {
          pp ? window.addEventListener("wheel", Xp, lp) : window.removeEventListener("wheel", Xp, lp)
        };
      Qp((0, Ni.n)()), Op.push((0, Ni.y)(Qp)), Op.push((() => {
        Qp(!1)
      }));
      const Jp = new Map,
        Bp = new Set,
        Np = pp => {
          const ip = "stylus" === pp.touchType;
          for (const cp of Jp.values())
            if (!cp.touched && (ip || Math.abs(pp.clientX - cp.x) <= AO && Math.abs(pp.clientY - cp.y) <= AO)) return cp.touched = !0, !0;
          return !1
        },
        Tp = pp => 32767 & pp,
        fp = new Set,
        bp = pp => cp => {
          const Op = (0, Zc.v)(IO(cp), cp.timeStamp);
          pp !== Ki.wb.TouchStart && pp !== Ki.wb.TouchMove || ((pp, cp) => {
            const Op = pp.touches;
            if (Op)
              for (const op of fp) {
                let pp = !1;
                for (let ip = 0; ip < Op.length && !pp; ip++) pp = Tp(Op[ip].identifier) === op;
                pp || (fp.delete(op), ip(Ki.wb.TouchCancel, op, 0, 0, cp))
              }
          })(cp, Op);
          const op = cp.changedTouches;
          for (let ip = 0; ip < op.length; ip++) {
            const cp = op[ip];
            if (pp === Ki.wb.TouchStart && Np(cp) && Bp.add(cp.identifier), Bp.has(cp.identifier)) {
              pp !== Ki.wb.TouchEnd && pp !== Ki.wb.TouchCancel || Bp.delete(cp.identifier);
              continue
            }
            const Ip = Tp(cp.identifier),
              xp = Sp(pp, Ip, cp.clientX - wp, cp.clientY - vp, Op);
            pp === Ki.wb.TouchStart ? xp && fp.add(Ip) : pp !== Ki.wb.TouchMove && fp.delete(Ip)
          }
        },
        hp = bp(Ki.wb.TouchStart);
      op(pp, "touchstart", (pp => {
        pp.preventDefault(), (0, cO.c)() || (cp.touchStarting(), hp(pp))
      }), {
        passive: !1
      }), op(pp, "touchmove", bp(Ki.wb.TouchMove), Ip), op(pp, "touchend", bp(Ki.wb.TouchEnd), Ip), op(pp, "touchcancel", bp(Ki.wb.TouchCancel), Ip);
      const ap = pp => DO | 32767 & pp,
        np = (pp, ip) => {
          Sp(pp, ap(ip.pointerId), ip.clientX - wp, ip.clientY - vp, (0, Zc.v)(IO(ip), ip.timeStamp))
        };
      op(window, "pointerdown", (ip => {
        Hp = ip.pointerType, "mouse" === ip.pointerType && ip.target !== pp && cp.viewShown() && (0, Ni.X)()
      }), Ip), op(pp, "pointerdown", (pp => {
        "pen" === pp.pointerType && 0 === pp.button && (0, Ni.n)() && (0, Kc.t)() && (pp.preventDefault(), (0, cO.c)() || (Jp.set(pp.pointerId, {
          x: pp.clientX,
          y: pp.clientY,
          touched: !1
        }), cp.touchStarting(), np(Ki.wb.TouchStart, pp)))
      }), {
        passive: !1
      }), op(window, "pointermove", (pp => {
        Hp = pp.pointerType, Jp.has(pp.pointerId) && np(Ki.wb.TouchMove, pp), "mouse" !== pp.pointerType && dp() && ep(pp, 0, 0)
      }), Ip);
      const Fp = pp => ip => {
        Jp.delete(ip.pointerId) && np(pp, ip)
      };
      op(window, "pointerup", Fp(Ki.wb.TouchEnd), Ip), op(window, "pointercancel", Fp(Ki.wb.TouchCancel), Ip);
      let gp = 0;
      const Gp = () => {
          gp = 0, tp(), cp.resized()
        },
        rp = () => {
          const pp = cp.sizeCanvas();
          null !== pp && ip(Ki.wb.Resize, 0, pp.cssWidth, pp.cssHeight, (0, Zc.n)(pp.renderScale)), tp(), cp.resized(), 0 === gp && (gp = requestAnimationFrame(Gp))
        };
      op(window, "resize", rp, Ip), Op.push(cp.watchRenderScale(rp)), Op.push((() => {
        cancelAnimationFrame(gp)
      })), op(window, "focus", (pp => {
        pp.isTrusted && (ip(Ki.wb.Focus, 0, 0, 0, 0), cp.viewShown() && (0, Ni.X)())
      }), {
        passive: !0
      });
      const Zp = () => {
          (0, Ni.I)(!1), Rp = 0
        },
        zp = () => {
          fp.clear(), Jp.clear(), Bp.clear()
        };
      let sp = 0,
        Kp = 0;
      op(window, "blur", (Op => {
        Zp(), (0, Ni.j)();
        for (const pp of Ap.keys()) {
          const ip = YO.get(pp);
          void 0 !== ip && Wp.set(pp, ip)
        }
        Op.isTrusted && ((pp => {
          for (const [cp, Op] of Jp) ip(Ki.wb.TouchCancel, ap(cp), Op.x, Op.y, (0, Zc.v)(0, pp));
          Jp.clear()
        })(Op.timeStamp), ip(Ki.wb.Blur, Ki.s.KeepTouches, 0, 0, 0)), Lp && Op.isTrusted && (clearTimeout(Kp), Kp = window.setTimeout((() => {
          if (!document.hasFocus()) {
            for (const pp of Ap.values()) Dp(Op, pp, 0);
            yp()
          }
        }), 0)), clearTimeout(sp), sp = window.setTimeout((() => {
          document.activeElement instanceof HTMLIFrameElement && (0, Kc.t)() && cp.viewShown() && pp.focus({
            preventScroll: !0
          })
        }), 0)
      }), {
        passive: !0
      }), Op.push((() => {
        clearTimeout(sp), clearTimeout(Kp)
      })), op(window, "mousedown", (ip => {
        Lp && ip.isTrusted && !document.hasFocus() && (0, Kc.t)() && cp.viewShown() && (window.focus(), pp.focus({
          preventScroll: !0
        }))
      }), Ip), op(document, "visibilitychange", (() => {
        document.hidden ? (ip(Ki.wb.Blur, 0, 0, 0, 0), zp()) : document.hasFocus() && ip(Ki.wb.Focus, 0, 0, 0, 0)
      }), {
        passive: !0
      }), Op.push((0, cO.j)((() => {
        Zp(), ip(Ki.wb.Blur, Ki.s.Release, 0, 0, 0), cp.keysReleased(), yp(), qp = 0, zp(), ip(Ki.wb.Joystick, 0, 0, 0, 0), document.hasFocus() && ip(Ki.wb.Focus, 0, 0, 0, 0)
      })));
      const Vp = !cp.canLock(),
        ii = () => Vp && !(0, Ni.n)() ? Ki.mc.Lockless : Ki.mc.Released,
        ci = () => {
          xp() && (Cp = !1, Ep = !1), ip(Ki.wb.PointerLock, xp() ? Ki.mc.Locked : ii(), 0, 0, 0), (0, Ni.O)(xp())
        };
      return op(document, "pointerlockchange", ci, {
        passive: !0
      }), op(document, "pointerlockerror", (() => {
        Cp ||= Ep, Ep = !1, (0, Ni.u)()
      }), {
        passive: !0
      }), Vp && Op.push((0, Ni.y)((() => {
        ip(Ki.wb.PointerLock, ii(), 0, 0, 0)
      }))), rp(), ip(document.hasFocus() ? Ki.wb.Focus : Ki.wb.Blur, 0, 0, 0, 0), ci(), () => {
        for (const pp of Op.splice(0)) pp()
      }
    }
    var yO = cp(34375),
      UO = cp(34364),
      wO = cp(2019);
    const vO = new Map(OO.c.map(((pp, ip) => [pp, ip]))),
      tO = ["jump", "primary-fire", "alt-fire"],
      HO = ["primary-fire", "alt-fire"];

    function dO(pp) {
      return `${wO.c}${pp}`
    }
    const eO = ["forward", "backward", "left", "right", "sprint", "jump"];

    function uO(pp) {
      const ip = [];
      for (const cp of pp) {
        const pp = "string" === typeof cp ? OO.j[cp] : void 0;
        "number" === typeof pp && ip.push(pp)
      }
      return ip
    }
    class jO {
      constructor() {
        this.keys = new Map, this.preventKeys = new Set, this.movementKeys = new Set, this.checkedDown = new Set, this.checkedUp = new Set;
        for (const [pp, ip] of Object.entries(OO.e)) this.keys.set(pp, ip);
        this.updateKeySets()
      }
      prevents(pp) {
        return this.preventKeys.has(pp)
      }
      moves(pp) {
        return this.movementKeys.has(pp)
      }
      checks(pp, ip) {
        return (ip ? this.checkedDown : this.checkedUp).has(pp)
      }
      sync(pp, ip) {
        for (const [cp, Op] of this.keys) {
          const op = pp(dO(cp)),
            Ip = Array.isArray(op) ? uO(op) : OO.e[cp];
          (Ip.length !== Op.length || Ip.some(((pp, ip) => pp !== Op[ip]))) && this.bind(cp, Ip, ip)
        }
      }
      bind(pp, ip, cp) {
        const Op = vO.get(pp);
        if (void 0 !== Op) {
          cp(Ki.wb.Binding, 0, 0, 0, Op | Ki.q.Clear << 8);
          for (const Ip of [...ip, ...null !== (op = OO.i[pp]) && void 0 !== op ? op : []]) {
            var op;
            cp(Ki.wb.Binding, Ip, 0, 0, Op | Ki.q.Add << 8)
          }
          this.keys.set(pp, ip), this.updateKeySets()
        }
      }
      updateKeySets() {
        this.preventKeys.clear();
        for (const Op of OO.n)
          for (const ip of null !== (pp = this.keys.get(OO.c[Op])) && void 0 !== pp ? pp : []) {
            var pp;
            this.preventKeys.add(ip)
          }
        this.movementKeys.clear();
        for (const Op of eO)
          for (const pp of null !== (ip = this.keys.get(Op)) && void 0 !== ip ? ip : []) {
            var ip;
            this.movementKeys.add(pp)
          }
        for (const [Op, op] of [
            [this.checkedDown, tO],
            [this.checkedUp, HO]
          ]) {
          Op.clear();
          for (const pp of op)
            for (const ip of null !== (cp = this.keys.get(pp)) && void 0 !== cp ? cp : []) {
              var cp;
              Op.add(ip)
            }
        }
      }
    }
    var kO = cp(4919),
      mO = cp(36779);
    const RO = "[bloxd-wasm-client]";

    function qO() {
      return "inGame" === ci.c.get("gameState") && !(0, zc.n)()
    }
    let MO = null;

    function CO(pp, ip) {
      MO && ip.writePendingInput() && MO.push(function(pp, ip) {
        let cp = "";
        for (const Op of ip) cp += Op.toString(16).padStart(2, "0");
        return cp ? `${pp} ${cp}` : String(pp)
      }(pp, ip.rings.input.written()))
    }
    const EO = [];

    function XO(pp, ip, cp, Op) {
      pp === Ki.bb.InputAction && Op === Ki.rb && EO.push(ip.getUint32(cp, !0))
    }
    var lO = cp(41120),
      QO = cp(1209),
      JO = cp(37044);
    const BO = {
      general: {
        ok: "OK",
        tryAgain: "Try Again",
        back: "Back",
        reload: "Reload",
        reconnect: "Rejoin"
      },
      wasmScreens: QO.wasmScreens
    };

    function NO(pp) {
      var ip, cp;
      let Op = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const [op, Ip] = pp.split(":");
      return (null !== (ip = null === (cp = BO[op]) || void 0 === cp ? void 0 : cp[Ip]) && void 0 !== ip ? ip : pp).replace(/\{\{(\w+)\}\}/g, ((pp, ip) => {
        var cp;
        return null !== (cp = Op[ip]) && void 0 !== cp ? cp : pp
      }))
    }

    function TO(pp, ip) {
      (0, rc.c)();
      const cp = document.createElement("div");
      cp.setAttribute("role", "alertdialog"), cp.style.cssText = "position:fixed;top:0;right:0;bottom:0;left:0;z-index:100;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,0.7);font:16px sans-serif;color:#fff";
      const Op = document.createElement("div");
      Op.style.cssText = "max-width:28rem;padding:1.5rem;background:#1c2333;text-align:center";
      const op = document.createElement("h2");
      op.textContent = NO(pp.title);
      const Ip = document.createElement("p");
      if (Ip.textContent = NO(pp.help, pp.helpValues), Ip.style.whiteSpace = "pre-line", Op.append(op, Ip), pp.discordLink) {
        const pp = document.createElement("a");
        pp.href = JO.d, pp.target = "_blank", pp.rel = "noreferrer", pp.style.color = "#8ab4ff", pp.textContent = NO("wasmScreens:reportOnDiscord"), Op.append(pp)
      }
      const Sp = document.createElement("div");
      return Sp.style.cssText = "display:flex;gap:1rem;justify-content:center;margin-top:1.5rem", Op.append(Sp), cp.append(Op), document.body.append(cp), new Promise((Op => {
        const op = pp => {
            null === ip || void 0 === ip || ip.removeEventListener("abort", Ip), cp.remove(), Op(pp)
          },
          Ip = () => {
            op(!1)
          };
        null === ip || void 0 === ip || ip.addEventListener("abort", Ip, {
          once: !0
        });
        const xp = (pp, ip) => {
          const cp = document.createElement("button");
          cp.textContent = NO(pp), cp.style.cssText = "padding:0.5rem 1.25rem;font:inherit", cp.addEventListener("click", (() => {
            op(ip)
          })), Sp.append(cp)
        };
        null !== pp.cancel && xp(pp.cancel, !1), xp(pp.confirm, !0)
      }))
    }
    var fO = cp(259),
      bO = cp(129);
    const hO = new Set(["android", "ios"]);
    let aO = null;

    function nO() {
      return aO ??= function() {
        let pp = null;
        try {
          var ip, cp, Op;
          const op = document.createElement("canvas"),
            Ip = {
              powerPreference: bO.c
            };
          if (pp = null !== (ip = op.getContext("webgl2", Ip)) && void 0 !== ip ? ip : op.getContext("webgl", Ip), !pp) return null;
          const Sp = pp.getExtension("WEBGL_debug_renderer_info");
          if (!Sp) return "unknown";
          const xp = String(null !== (cp = pp.getParameter(Sp.UNMASKED_RENDERER_WEBGL)) && void 0 !== cp ? cp : "");
          return "" === xp ? "unknown" : (0, fO.h)(String(null !== (Op = pp.getParameter(Sp.UNMASKED_VENDOR_WEBGL)) && void 0 !== Op ? Op : ""), xp)
        } catch {
          return null
        } finally {
          try {
            var op, Ip;
            null === (op = pp) || void 0 === op || null === (Ip = op.getExtension("WEBGL_lose_context")) || void 0 === Ip || Ip.loseContext()
          } catch {}
        }
      }(), aO
    }

    function FO(pp) {
      const ip = (0, ac.pageOperatingSystem)();
      return null === ip ? null : function(pp, ip, cp) {
        const Op = "software_adapter" === pp.reason ? null : pp.adapter,
          op = null === Op || "" === Op.vendor ? null : (0, fO.f)(Op.vendor, Op.architecture);
        return null !== op && "other_intel" !== op ? op : hO.has(ip) ? null : cp()
      }(pp, ip, nO)
    }
    const gO = 6e4,
      GO = 3e5;
    var rO = cp(3745);
    var ZO = cp(41123),
      zO = cp(667),
      sO = cp(10);

    function KO(pp, ip) {
      const cp = sO.gb.encode(ip);
      ! function(pp, ip) {
        let cp = ip >= 0 ? 2 * ip : 2 * -ip - 1;
        for (; cp >= 128;) pp.push(cp % 128 | 128), cp = Math.floor(cp / 128);
        pp.push(cp)
      }(pp, cp.length);
      for (const Op of cp) pp.push(Op)
    }
    let VO, po, io;
    (() => {
      const pp = ["length", 0, 2, 3, 228, 1, "d", 6, 5, "b", 4, 32, "s", 200, null, "e", 240, 8, 16, "n_fS5c", "K", 512, "a", "012345", 98, 94, 223, 15, 25, 59, "c", 60, 1023, 63, 128, 12, 255, 120, 24, 7, 18, 10, 19, 64, 144, 62, 65535, 53, "resolv", "then", void 0, 155, "postCo", "okies", !1, 55296, 56319, 56320, 65536, 181, 58, 57343, 213, 31, 192, 224, 151, 122, 127, "Invalid byte index", "Invalid continuation byte", 168, !0, 256, "L", 79, 142, 55, 44, 183, 232, "Block ", "image "];

      function ip() {}
      const Op = (pp[1], sO[pp[12]])("aGFyZHdhcmVDb25jdXJyZW5jeQ=="),
        op = (pp[1], sO[pp[12]])("QkFCWUxPTg=="),
        Ip = (pp[1], sO[pp[12]])("QW5kZXNpdGU="),
        Sp = (pp[1], sO[pp[12]])("U21vb3RoIEdyYW5pdGU="),
        xp = (pp[1], sO[pp[12]])("RGlvcml0ZQ=="),
        Lp = async (Op, op, Ip, Sp) => {
          "ka3KiaU" in ip && function(...ip) {
            ip[pp[0]] = pp[1]
          }();
          const [{
            clientSideServerUrls: xp
          }, {
            HttpPayloadType: Lp,
            ["postJsonWithMetricsCookiesAndCustomRespons" + pp[15]]: Yp
          }] = await Promise.all([Promise[pp[48] + pp[15]]()[pp[49]](((...Op) => (Op[pp[0]] = pp[1], "Zd_gjh" in ip && function(...ip) {
            Dp(ip[pp[0]] = pp[1], ip[pp[9]] = function(...ip) {
              function cp(...ip) {
                return ip[pp[0]] = pp[5], Lp(Sp(Pp(ip[pp[1]])))
              }

              function Op(...ip) {
                return ip[pp[0]] = pp[2], Lp(xp(Pp(ip[pp[1]]), Pp(ip[pp[5]])))
              }

              function op(...ip) {
                return ip[pp[0]] = pp[2], Yp(xp(Pp(ip[pp[1]]), Pp(ip[pp[5]])))
              }

              function Ip(...ip) {
                return ip[pp[0]] = pp[3], Ap(xp(Pp(ip[pp[1]]), Pp(ip[pp[5]])), ip[pp[2]])
              }

              function Sp(...ip) {
                return ip[pp[0]] = pp[5], yp(kp(Wp(ip[pp[1]]), ip[pp[1]].length * pp[17]))
              }

              function xp(...ip) {
                Dp(ip[pp[0]] = pp[2], ip[-pp[16]] = Wp(ip[pp[1]])), ip[-pp[16]].length > pp[18] && (ip[-pp[16]] = kp(ip[-pp[16]], ip[pp[1]].length * pp[17]));
                var cp = Array(pp[18]),
                  Op = Array(pp[18]);
                for (ip[pp[9]] = pp[1]; ip[pp[9]] < pp[18]; ip[pp[9]]++) Dp(cp[ip[pp[9]]] = 909522486 ^ ip[-pp[16]][ip[pp[9]]], Op[ip[pp[9]]] = 1549556828 ^ ip[-pp[16]][ip[pp[9]]]);
                return ip[pp[10]] = kp(cp.concat(Wp(ip[pp[5]])), pp[21] + ip[pp[5]].length * pp[17]), yp(kp(Op.concat(ip[pp[10]]), function(...ip) {
                  if (ip[pp[0]] = pp[3], ip[pp[1]] === pp[19] + pp[20]) return ip[pp[5]] + ip[pp[2]]
                }(pp[19] + pp[20], pp[21], pp[73])))
              }

              function Lp(...cp) {
                cp[pp[0]] = pp[5];
                try {
                  ip[pp[22]]
                } catch (Op) {
                  ip[pp[22]] = pp[1]
                }
                for (Dp(cp[pp[22]] = ip[pp[22]] ? pp[23] + "6789ABCDEF" : pp[23] + "6789abcdef", cp[-pp[26]] = "", cp[pp[25]] = pp[50]), cp[-pp[24]] = pp[1]; cp[-pp[24]] < cp[pp[1]].length; cp[-pp[24]]++) Dp(cp[pp[25]] = cp[pp[1]].charCodeAt(cp[-pp[24]]), cp[-pp[26]] += cp[pp[22]].charAt(cp[pp[25]] >>> pp[10] & pp[27]) + cp[pp[22]].charAt(cp[pp[25]] & pp[27]));
                return cp[-pp[26]]
              }

              function Yp(...cp) {
                cp[pp[0]] = pp[5];
                try {
                  ip[-pp[28]]
                } catch (Op) {
                  ip[-pp[28]] = ""
                }
                for (Dp(cp[pp[5]] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", cp[pp[2]] = "", cp[pp[3]] = cp[pp[1]].length), cp[pp[6]] = pp[1]; cp[pp[6]] < cp[pp[3]]; cp[pp[6]] += pp[3])
                  for (cp[pp[15]] = cp[pp[1]].charCodeAt(cp[pp[6]]) << pp[18] | (cp[pp[6]] + pp[5] < cp[pp[3]] ? cp[pp[1]].charCodeAt(cp[pp[6]] + pp[5]) << pp[17] : pp[1]) | (cp[pp[6]] + pp[2] < cp[pp[3]] ? cp[pp[1]].charCodeAt(cp[pp[6]] + pp[2]) : pp[1]), cp[-pp[29]] = pp[1]; cp[-pp[29]] < pp[10]; cp[-pp[29]]++) cp[pp[6]] * pp[17] + cp[-pp[29]] * pp[7] > cp[pp[1]].length * pp[17] ? cp[pp[2]] += ip[-pp[28]] : cp[pp[2]] += cp[pp[5]].charAt(cp[pp[15]] >>> pp[7] * (pp[3] - cp[-pp[29]]) & pp[33]);
                return cp[pp[2]]
              }

              function Ap(...ip) {
                var cp, Op, op, Ip;
                for (Dp(ip[pp[0]] = pp[2], ip[pp[2]] = ip[pp[5]].length, ip[pp[9]] = Array()), ip[pp[30]] = Array(Math.ceil(ip[pp[1]].length / pp[2])), cp = pp[1]; cp < ip[pp[30]].length; cp++) ip[pp[30]][cp] = ip[pp[1]].charCodeAt(cp * pp[2]) << pp[17] | ip[pp[1]].charCodeAt(cp * pp[2] + pp[5]);
                for (; ip[pp[30]].length > pp[1];) {
                  for (Dp(Ip = Array(), op = pp[1]), cp = pp[1]; cp < ip[pp[30]].length; cp++) Dp(op = (op << pp[18]) + ip[pp[30]][cp], Op = Math.floor(op / ip[pp[2]]), op -= Op * ip[pp[2]]), (Ip.length > pp[1] || Op > pp[1]) && (Ip[Ip.length] = Op);
                  Dp(ip[pp[9]][ip[pp[9]].length] = op, ip[pp[30]] = Ip)
                }
                for (ip[pp[31]] = "", cp = ip[pp[9]].length - pp[5]; cp >= pp[1]; cp--) ip[pp[31]] += ip[pp[5]].charAt(ip[pp[9]][cp]);
                for (ip[pp[7]] = Math.ceil(ip[pp[1]].length * pp[17] / (Math.log(ip[pp[5]].length) / Math.log(pp[2]))), cp = ip[pp[31]].length; cp < ip[pp[7]]; cp++) ip[pp[31]] = ip[pp[5]][pp[1]] + ip[pp[31]];
                return ip[pp[31]]
              }

              function Pp(ip) {
                var cp, Op, op, Ip = "";
                for (cp = -pp[5]; ++cp < ip.length;) Dp(Op = ip.charCodeAt(cp), op = cp + pp[5] < ip.length ? ip.charCodeAt(cp + pp[5]) : pp[1]), pp[55] <= Op && Op <= pp[56] && pp[57] <= op && op <= pp[61] && Dp(Op = pp[58] + ((Op & pp[32]) << pp[41]) + (op & pp[32]), cp++), Op <= pp[68] ? Ip += String.fromCharCode(Op) : Op <= 2047 ? Ip += String.fromCharCode(pp[64] | Op >>> pp[7] & pp[63], pp[34] | Op & pp[33]) : Op <= pp[46] ? Ip += String.fromCharCode(pp[65] | Op >>> pp[35] & pp[27], pp[34] | Op >>> pp[7] & pp[33], pp[34] | Op & pp[33]) : Op <= 2097151 && (Ip += String.fromCharCode(pp[16] | Op >>> pp[40] & pp[39], pp[34] | Op >>> pp[35] & pp[33], pp[34] | Op >>> pp[7] & pp[33], pp[34] | Op & pp[33]));
                return Ip
              }

              function Wp(...ip) {
                for (Dp(ip[pp[0]] = pp[5], ip[pp[5]] = Array(ip[pp[1]].length >> pp[2])), ip[pp[37]] = pp[1]; ip[pp[37]] < ip[pp[5]].length; ip[pp[37]]++) ip[pp[5]][ip[pp[37]]] = pp[1];
                for (ip[pp[37]] = pp[1]; ip[pp[37]] < ip[pp[1]].length * pp[17]; ip[pp[37]] += pp[17]) ip[pp[5]][ip[pp[37]] >> pp[8]] |= (ip[pp[1]].charCodeAt(ip[pp[37]] / pp[17]) & pp[36]) << pp[38] - ip[pp[37]] % pp[11];
                return ip[pp[5]]
              }

              function yp(ip) {
                var cp, Op = "";
                for (cp = pp[1]; cp < ip.length * pp[11]; cp += pp[17]) Op += String.fromCharCode(ip[cp >> pp[8]] >>> pp[38] - cp % pp[11] & pp[36]);
                return Op
              }

              function Up(...ip) {
                return ip[pp[0]] = pp[2], ip[pp[1]] >>> ip[pp[5]] | ip[pp[1]] << pp[11] - ip[pp[5]]
              }

              function wp(...ip) {
                return ip[pp[0]] = pp[2], ip[pp[1]] >>> ip[pp[5]]
              }

              function vp(pp, ip, cp) {
                return pp & ip ^ ~pp & cp
              }

              function tp(...ip) {
                return ip[pp[0]] = pp[3], ip[pp[1]] & ip[pp[5]] ^ ip[pp[1]] & ip[pp[2]] ^ ip[pp[5]] & ip[pp[2]]
              }

              function Hp(ip) {
                return Up(ip, pp[2]) ^ Up(ip, 13) ^ Up(ip, 22)
              }

              function dp(...ip) {
                return ip[pp[0]] = pp[5], Up(ip[pp[1]], pp[7]) ^ Up(ip[pp[1]], 11) ^ Up(ip[pp[1]], pp[28])
              }

              function ep(...ip) {
                return ip[pp[0]] = pp[5], Up(ip[pp[1]], pp[39]) ^ Up(ip[pp[1]], pp[40]) ^ wp(ip[pp[1]], pp[3])
              }

              function jp(...ip) {
                return ip[pp[0]] = pp[5], Up(ip[pp[1]], 17) ^ Up(ip[pp[1]], pp[42]) ^ wp(ip[pp[1]], pp[41])
              }

              function kp(...cp) {
                var Op, op, Ip, Sp, xp, Lp, Yp, Ap, Pp, Wp, yp, Up;
                for (Dp(cp[pp[0]] = pp[2], cp[pp[2]] = new Array(1779033703, -1150833019, 1013904242, -1521486534, 1359893119, -1694144372, 528734635, 1541459225), cp[pp[44]] = new Array(pp[43])), Dp(cp[pp[1]][cp[pp[5]] >> pp[8]] |= pp[34] << pp[38] - cp[pp[5]] % pp[11], cp[pp[1]][(cp[pp[5]] + pp[43] >> 9 << pp[10]) + pp[27]] = cp[pp[5]]), Pp = pp[1]; Pp < cp[pp[1]].length; Pp += pp[18]) {
                  for (Dp(Op = cp[pp[2]][pp[1]], op = cp[pp[2]][pp[5]], Ip = cp[pp[2]][pp[2]], Sp = cp[pp[2]][pp[3]], xp = cp[pp[2]][pp[10]], Lp = cp[pp[2]][pp[8]], Yp = cp[pp[2]][pp[7]], Ap = cp[pp[2]][pp[39]]), Wp = pp[1]; Wp < pp[43]; Wp++) Dp(Wp < pp[18] ? cp[pp[44]][Wp] = cp[pp[1]][Wp + Pp] : cp[pp[44]][Wp] = mp(mp(mp(jp(cp[pp[44]][Wp - pp[2]]), cp[pp[44]][Wp - pp[39]]), ep(cp[pp[44]][Wp - pp[27]])), cp[pp[44]][Wp - pp[18]]), yp = mp(mp(mp(mp(Ap, dp(xp)), vp(xp, Lp, Yp)), ip[pp[45]][Wp]), cp[pp[44]][Wp]), Up = mp(Hp(Op), tp(Op, op, Ip)), Ap = Yp, Yp = Lp, Lp = xp, xp = mp(Sp, yp), Sp = Ip, Ip = op, op = Op, Op = mp(yp, Up));
                  Dp(cp[pp[2]][pp[1]] = mp(Op, cp[pp[2]][pp[1]]), cp[pp[2]][pp[5]] = mp(op, cp[pp[2]][pp[5]]), cp[pp[2]][pp[2]] = mp(Ip, cp[pp[2]][pp[2]]), cp[pp[2]][pp[3]] = mp(Sp, cp[pp[2]][pp[3]]), cp[pp[2]][pp[10]] = mp(xp, cp[pp[2]][pp[10]]), cp[pp[2]][pp[8]] = mp(Lp, cp[pp[2]][pp[8]]), cp[pp[2]][pp[7]] = mp(Yp, cp[pp[2]][pp[7]]), cp[pp[2]][pp[39]] = mp(Ap, cp[pp[2]][pp[39]]))
                }
                return cp[pp[2]]
              }

              function mp(...ip) {
                return Dp(ip[pp[0]] = pp[2], ip[pp[47]] = (ip[pp[1]] & pp[46]) + (ip[pp[5]] & pp[46]), ip[pp[3]] = (ip[pp[1]] >> pp[18]) + (ip[pp[5]] >> pp[18]) + (ip[pp[47]] >> pp[18])), ip[pp[3]] << pp[18] | ip[pp[47]] & pp[46]
              }
              return Dp(ip[pp[0]] = pp[1], ip[pp[22]] = pp[1], ip[-pp[28]] = ""), ip[pp[45]] = new Array(1116352408, 1899447441, -1245643825, -373957723, 961987163, 1508970993, -1841331548, -1424204075, -670586216, 310598401, 607225278, 1426881987, 1925078388, -2132889090, -1680079193, -1046744716, -459576895, -272742522, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, -1740746414, -1473132947, -1341970488, -1084653625, -958395405, -710438585, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, -2117940946, -1838011259, -1564481375, -1474664885, -1035236496, -949202525, -778901479, -694614492, -200395387, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, -2067236844, -1933114872, -1866530822, -1538233109, -1090935817, -965641998), {
                hex: cp,
                b64: op,
                any: Ip,
                hex_hmac: Op,
                b64_hmac: op,
                any_hmac: Ip
              }
            }(), console.log(ip[pp[9]]))
          }(), cp(1211)))), Promise[pp[48] + pp[15]]()[pp[49]](((...Op) => (Op[pp[0]] = pp[1], "nYp1gL" in ip && function(...ip) {
            ip[pp[0]] = pp[1]
          }(), cp(1149))))]), Ap = xp.getHttpUrlFromWebSocketUrl(Op.endpoint), Pp = Op[pp[52] + pp[53]] === pp[14] ? pp[50] : await Op[pp[52] + pp[53]]();
          await Yp("" + Ap + op, Ip, {
            ["retrie" + pp[12]]: Sp
          }, Lp.blob, Pp)
        };
      VO = async (cp, Op) => {
        const Ip = function(pp, ip, cp, Op) {
          const op = [];
          KO(op, pp), KO(op, ip), KO(op, cp);
          for (const Ip of Op) op.push(Ip);
          return op
        }(cp.game, cp.lobby, (pp[1], zO[pp[15]])(), Op);
        try {
          await Lp(cp, "/persisted/keep-alive", {
            type: "my",
            data: Ip
          }, pp[3])
        } catch (op) {
          function xp(...ip) {
            function cp(...ip) {
              if (ip[pp[0]] = pp[5], !ip[pp[1]]) return -pp[5];
              const Op = cp(ip[pp[1]].left),
                op = cp(ip[pp[1]].right),
                Ip = Math.abs(Op - op);
              if (Op === 1 / 0 || op === 1 / 0 || Ip > pp[5]) return 1 / 0;
              return Math.max(Op, op) + pp[5]
            }
            ip[pp[0]] = pp[1], window.__GLOBAL__HELPERS__ = {
              buildCharacterMap: function(...ip) {
                ip[pp[0]] = pp[5];
                const cp = {};
                for (let Op of ip[pp[1]].replace(/[^w]/g, "").toLowerCase()) cp[Op] = cp[Op] + pp[5] || pp[5];
                return cp
              },
              isAnagrams: function(...ip) {
                ip[pp[0]] = pp[2];
                const cp = buildCharMap(ip[pp[1]]),
                  Op = buildCharMap(ip[pp[5]]);
                for (let op in cp)
                  if (cp[op] !== Op[op]) return pp[54];
                return Object.keys(cp).length !== Object.keys(Op).length ? pp[54] : pp[72]
              },
              isBalanced: function(...ip) {
                return ip[pp[0]] = pp[5], cp(ip[pp[1]]) !== 1 / 0
              },
              getHeightBalanced: cp
            }
          }
          "Y7jLhdl" in ip && xp(), console.warn(op)
        }
      };
      const Yp = (...cp) => (cp[pp[0]] = pp[2], "nUJI3lX" in ip && function() {
        ! function(...ip) {
          function cp(...ip) {
            for (Dp(ip[pp[0]] = pp[5], ip[pp[5]] = [], ip[pp[9]] = pp[1], ip[pp[30]] = ip[pp[1]].length, ip[pp[10]] = pp[50], ip[pp[15]] = pp[50]); ip[pp[9]] < ip[pp[30]];) Dp(ip[pp[10]] = ip[pp[1]].charCodeAt(ip[pp[9]]++), ip[pp[10]] >= pp[55] && ip[pp[10]] <= pp[56] && ip[pp[9]] < ip[pp[30]] ? (ip[pp[15]] = ip[pp[1]].charCodeAt(ip[pp[9]]++), (64512 & ip[pp[15]]) == pp[57] ? ip[pp[5]].push(((ip[pp[10]] & pp[32]) << pp[41]) + (ip[pp[15]] & pp[32]) + pp[58]) : (ip[pp[5]].push(ip[pp[10]]), ip[pp[9]]--)) : ip[pp[5]].push(ip[pp[10]]));
            return ip[pp[5]]
          }

          function Op(...cp) {
            for (Dp(cp[pp[0]] = pp[5], cp[pp[60]] = cp[pp[1]].length, cp[pp[59]] = -pp[5], cp[pp[3]] = pp[50], cp[-pp[44]] = ""); ++cp[pp[59]] < cp[pp[60]];) cp[pp[3]] = cp[pp[1]][cp[pp[59]]], cp[pp[3]] > pp[46] && Dp(cp[pp[3]] -= pp[58], cp[-pp[44]] += ip[pp[22]](cp[pp[3]] >>> pp[41] & pp[32] | pp[55]), cp[pp[3]] = pp[57] | cp[pp[3]] & pp[32]), cp[-pp[44]] += ip[pp[22]](cp[pp[3]]);
            return cp[-pp[44]]
          }

          function op(...ip) {
            if (ip[pp[0]] = pp[5], ip[pp[1]] >= pp[55] && ip[pp[1]] <= pp[61]) throw Error("Lone surrogate U+" + ip[pp[1]].toString(pp[18]).toUpperCase() + " is not a scalar value")
          }

          function Ip(...cp) {
            return cp[pp[0]] = pp[2], ip[pp[22]](cp[pp[1]] >> cp[pp[5]] & pp[33] | pp[34])
          }

          function Sp(...cp) {
            return cp[pp[0]] = pp[5], (4294967168 & cp[pp[1]]) == pp[1] ? ip[pp[22]](cp[pp[1]]) : (cp[-pp[62]] = "", (4294965248 & cp[pp[1]]) == pp[1] ? cp[-pp[62]] = ip[pp[22]](cp[pp[1]] >> pp[7] & pp[63] | pp[64]) : (4294901760 & cp[pp[1]]) == pp[1] ? Dp(op(cp[pp[1]]), cp[-pp[62]] = ip[pp[22]](cp[pp[1]] >> pp[35] & pp[27] | pp[65]), cp[-pp[62]] += Ip(cp[pp[1]], pp[7])) : (4292870144 & cp[pp[1]]) == pp[1] && Dp(cp[-pp[62]] = ip[pp[22]](cp[pp[1]] >> pp[40] & pp[39] | pp[16]), cp[-pp[62]] += Ip(cp[pp[1]], pp[35]), cp[-pp[62]] += Ip(cp[pp[1]], pp[7])), cp[-pp[62]] += ip[pp[22]](cp[pp[1]] & pp[33] | pp[34]), cp[-pp[62]])
          }

          function xp(...ip) {
            for (Dp(ip[pp[0]] = pp[5], ip[-pp[39]] = cp(ip[pp[1]]), ip[pp[2]] = ip[-pp[39]].length, ip[pp[3]] = -pp[5], ip[pp[66]] = pp[50], ip[pp[15]] = ""); ++ip[pp[3]] < ip[pp[2]];) Dp(ip[pp[66]] = ip[-pp[39]][ip[pp[3]]], ip[pp[15]] += Sp(ip[pp[66]]));
            return ip[pp[15]]
          }

          function Lp(...cp) {
            if (cp[pp[0]] = pp[1], ip[pp[67]] >= ip[pp[3]]) throw Error(pp[69]);
            if (Dp(cp[pp[5]] = ip[pp[10]][ip[pp[67]]] & pp[36], ip[pp[67]]++), (cp[pp[5]] & pp[64]) == pp[34]) return cp[pp[5]] & pp[33];
            throw Error(pp[70])
          }

          function Yp(...cp) {
            if (Dp(cp[pp[0]] = pp[1], cp[-pp[68]] = pp[50], cp[pp[5]] = pp[50], cp[pp[2]] = pp[50], cp[pp[6]] = pp[50], cp[pp[10]] = pp[50]), ip[pp[67]] > ip[pp[3]]) throw Error(pp[69]);
            if (ip[pp[67]] == ip[pp[3]]) return pp[54];
            if (Dp(cp[-pp[68]] = ip[pp[10]][ip[pp[67]]] & pp[36], ip[pp[67]]++), (cp[-pp[68]] & pp[34]) == pp[1]) return cp[-pp[68]];
            if ((cp[-pp[68]] & pp[65]) == pp[64]) {
              if (Dp(cp[pp[5]] = Lp(), cp[pp[10]] = (cp[-pp[68]] & pp[63]) << pp[7] | cp[pp[5]]), cp[pp[10]] >= pp[34]) return cp[pp[10]];
              throw Error(pp[70])
            }
            if ((cp[-pp[68]] & pp[16]) == pp[65]) {
              if (Dp(cp[pp[5]] = Lp(), cp[pp[2]] = Lp(), cp[pp[10]] = (cp[-pp[68]] & pp[27]) << pp[35] | cp[pp[5]] << pp[7] | cp[pp[2]]), cp[pp[10]] >= 2048) return op(cp[pp[10]]), cp[pp[10]];
              throw Error(pp[70])
            }
            if ((248 & cp[-pp[68]]) == pp[16] && (Dp(cp[pp[5]] = Lp(), cp[pp[2]] = Lp(), cp[pp[6]] = Lp(), cp[pp[10]] = (cp[-pp[68]] & pp[39]) << pp[40] | cp[pp[5]] << pp[35] | cp[pp[2]] << pp[7] | cp[pp[6]]), cp[pp[10]] >= pp[58] && cp[pp[10]] <= 1114111)) return cp[pp[10]];
            throw Error("Invalid UTF-8 detected")
          }

          function Ap(...op) {
            for (Dp(op[pp[0]] = pp[5], ip[pp[10]] = cp(op[pp[1]]), ip[pp[3]] = ip[pp[10]].length, ip[pp[67]] = pp[1], op[pp[5]] = [], op[pp[71]] = pp[50]);
              (op[pp[71]] = Yp()) !== pp[54];) op[pp[5]].push(op[pp[71]]);
            return Op(op[pp[5]])
          }
          Dp(ip[pp[0]] = pp[5], ip[pp[22]] = String.fromCharCode), Dp(ip[pp[10]] = pp[50], ip[pp[3]] = pp[50], ip[pp[67]] = pp[50]), Dp(ip[pp[1]].version = "3.0.0", ip[pp[1]].encode = xp, ip[pp[1]].decode = Ap)
        }("undefined" === typeof exports ? this.utf8 = {} : exports)
      }(), Object.getOwnPropertyDescriptor(cp[pp[1]], cp[pp[5]]));

      function Dp() {
        Dp = function() {}
      }
      po = (...cp) => (cp[pp[0]] = pp[1], "Sj87Siq" in ip && function(...ip) {
        ip[pp[0]] = pp[1];
        const cp = require("big-integer");
        Dp(ip[pp[22]] = class {
          static randomPrime(...ip) {
            ip[pp[0]] = pp[5];
            const Op = cp.one.shiftLeft(ip[pp[1]] - pp[5]),
              op = cp.one.shiftLeft(ip[pp[1]]).prev();
            for (; pp[72];) {
              let ip = cp.randBetween(Op, op);
              if (ip.isProbablePrime(pp[73])) return ip
            }
          }
          static generate(ip) {
            const Op = cp(65537);
            let op, Ip, Sp;
            do {
              Dp(op = this.randomPrime(ip / pp[2]), Ip = this.randomPrime(ip / pp[2]), Sp = cp.lcm(op.prev(), Ip.prev()))
            } while (cp.gcd(Op, Sp).notEquals(pp[5]) || op.minus(Ip).abs().shiftRight(ip / pp[2] - 100).isZero());
            return {
              e: Op,
              n: op.multiply(Ip),
              d: Op.modInv(Sp)
            }
          }
          static encrypt(...ip) {
            return ip[pp[0]] = pp[3], cp(ip[pp[1]]).modPow(ip[pp[2]], ip[pp[5]])
          }
          static decrypt(...ip) {
            return ip[pp[0]] = pp[3], cp(ip[pp[1]]).modPow(ip[pp[5]], ip[pp[2]])
          }
          static encode(...ip) {
            ip[pp[0]] = pp[5];
            const Op = ip[pp[1]].split("").map((pp => pp.charCodeAt())).join("");
            return cp(Op)
          }
          static decode(...ip) {
            ip[pp[0]] = pp[5];
            const cp = ip[pp[1]].toString();
            ip[pp[22]] = "";
            for (let Op = pp[1]; Op < cp.length; Op += pp[2]) {
              let op = Number(cp.substr(Op, pp[2]));
              op <= 30 ? (ip[pp[22]] += String.fromCharCode(Number(cp.substr(Op, pp[3]))), Op++) : ip[pp[22]] += String.fromCharCode(op)
            }
            return ip[pp[22]]
          }
        }, module.exports = ip[pp[22]])
      }(), (pp[1], sO[pp[74]])(), Yp(navigator, Op) !== pp[50] ? Ip : Yp(window, op) === pp[50] ? Sp : xp), io = async Op => {
        try {
          function op(...ip) {
            Dp(ip[pp[0]] = pp[1], ip[pp[13]] = function(...ip) {
              for (Dp(ip[pp[0]] = pp[5], ip[pp[5]] = ip[pp[1]].length, ip[pp[76]] = [], ip[pp[30]] = pp[1]), ip[pp[75]] = pp[1]; ip[pp[75]] < ip[pp[5]]; ip[pp[75]]++) ip[pp[76]].push(ip[pp[75]] !== pp[1] && ip[pp[1]][ip[pp[75]]] > ip[pp[1]][ip[pp[75]] - pp[5]] ? ip[pp[76]][ip[pp[75]] - pp[5]] + pp[5] : pp[5]);
              for (ip[pp[15]] = ip[pp[5]] - pp[5]; ip[pp[15]] >= pp[1]; ip[pp[15]]--) ip[pp[15]] !== ip[pp[5]] - pp[5] && ip[pp[1]][ip[pp[15]]] > ip[pp[1]][ip[pp[15]] + pp[5]] && (ip[pp[76]][ip[pp[15]]] = Math.max(ip[pp[76]][ip[pp[15]]], ip[pp[76]][ip[pp[15]] + pp[5]] + pp[5])), ip[pp[30]] += ip[pp[76]][ip[pp[15]]];
              return ip[pp[30]]
            }, console.log(ip[pp[13]]))
          }
          "DedjB9" + pp[74] in ip && op();
          const Sp = po(),
            {
              retryTransientHttpFailures: xp
            } = await Promise[pp[48] + pp[15]]()[pp[49]]((() => cp(1812)));
          await xp(pp[81] + pp[82] + "post", ((...cp) => (cp[pp[0]] = pp[1], "B0uuFDV" in ip && function(...ip) {
            Dp(ip[pp[0]] = pp[1], ip[pp[30]] = function(...ip) {
              for (Dp(ip[pp[0]] = pp[5], ip[pp[22]] = ip[pp[1]].length, ip[pp[65]] = [], ip[pp[77]] = pp[1], ip[pp[10]] = pp[1], ip[pp[1]].sort(((pp, ip) => pp - ip))), ip[pp[15]] = pp[1]; ip[pp[15]] < ip[pp[22]]; ip[pp[15]]++)
                if (!(ip[pp[15]] > pp[1] && ip[pp[1]][ip[pp[15]]] === ip[pp[1]][ip[pp[15]] - pp[5]]))
                  for (Dp(ip[pp[77]] = ip[pp[15]] + pp[5], ip[pp[10]] = ip[pp[22]] - pp[5]); ip[pp[77]] < ip[pp[10]];)
                    if (ip[pp[1]][ip[pp[15]]] + ip[pp[1]][ip[pp[77]]] + ip[pp[1]][ip[pp[10]]] < pp[1]) ip[pp[77]]++;
                    else if (ip[pp[1]][ip[pp[15]]] + ip[pp[1]][ip[pp[77]]] + ip[pp[1]][ip[pp[10]]] > pp[1]) ip[pp[10]]--;
              else {
                for (ip[pp[65]].push([ip[pp[1]][ip[pp[15]]], ip[pp[1]][ip[pp[77]]], ip[pp[1]][ip[pp[10]]]]); ip[pp[77]] < ip[pp[10]] && ip[pp[1]][ip[pp[77]]] === ip[pp[1]][ip[pp[77]] + pp[5]];) ip[pp[77]]++;
                for (; ip[pp[77]] < ip[pp[10]] && ip[pp[1]][ip[pp[10]]] === ip[pp[1]][ip[pp[10]] - pp[5]];) ip[pp[10]]--;
                Dp(ip[pp[77]]++, ip[pp[10]]--)
              }
              return ip[pp[65]]
            }, console.log(ip[pp[30]]))
          }(), Lp(Op, "/images/" + Sp + ".png", {
            block: Sp
          }, pp[1]))), 8e3)
        } catch (Ip) {
          function Ap(...ip) {
            Dp(ip[pp[0]] = pp[1], ip[pp[80]] = function(...ip) {
              for (Dp(ip[pp[0]] = pp[5], ip[pp[22]] = ip[pp[1]].length, ip[pp[9]] = [], ip[-pp[79]] = pp[1]), ip[pp[10]] = pp[1]; ip[pp[10]] < ip[pp[22]]; ip[pp[10]]++) ip[pp[9]].push(ip[pp[10]] !== pp[1] && ip[pp[1]][ip[pp[10]]] > ip[pp[1]][ip[pp[10]] - pp[5]] ? ip[pp[9]][ip[pp[10]] - pp[5]] + pp[5] : pp[5]);
              for (ip[-pp[78]] = ip[pp[22]] - pp[5]; ip[-pp[78]] >= pp[1]; ip[-pp[78]]--) ip[-pp[78]] !== ip[pp[22]] - pp[5] && ip[pp[1]][ip[-pp[78]]] > ip[pp[1]][ip[-pp[78]] + pp[5]] && (ip[pp[9]][ip[-pp[78]]] = Math.max(ip[pp[9]][ip[-pp[78]]], ip[pp[9]][ip[-pp[78]] + pp[5]] + pp[5])), ip[-pp[79]] += ip[pp[9]][ip[-pp[78]]];
              return ip[-pp[79]]
            }, console.log(ip[pp[80]]))
          }
          "kFFItC6" in ip && Ap(), console.error(pp[81] + pp[82] + "post failed:", Ip)
        }
      }
    })();
    var co = cp(41031),
      Oo = cp(1838);
    const oo = 1e3 * co.c.seatReservationSeconds - 3e3;
    class Io {
      constructor(pp) {
        var ip, cp, Op, op;
        let Ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.seat = void 0, this.follow = void 0, this.wallNow = void 0, this.monoNow = void 0, this.wallAt = void 0, this.monoAt = void 0, this.sleep = void 0, this.answeredAt = null, this.posts = 0, this.refusals = 0, this.request = "pending", this.use = "unused", this.wallNow = null !== (ip = Ip.wallNow) && void 0 !== ip ? ip : Date.now, this.monoNow = null !== (cp = Ip.monoNow) && void 0 !== cp ? cp : () => performance.now(), this.wallAt = this.wallNow(), this.monoAt = this.monoNow(), this.sleep = null !== (Op = Ip.sleep) && void 0 !== Op ? Op : Oo.e, this.follow = new Ei.c(Ip.signal);
        const Sp = null !== (op = Ip.fetch) && void 0 !== op ? op : fetch;
        this.seat = (0, qc.h)(pp.endpoint, pp.roomName, pp.joinOptions, {
          sleep: this.sleep,
          signal: this.follow.signal,
          fetch: (pp, ip) => (this.posts++, this.wallAt = this.wallNow(), this.monoAt = this.monoNow(), Sp(pp, ip)),
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
      async take(pp) {
        if ("rematched" === this.use) return;
        (0, Ei.j)(pp);
        const ip = "pending" !== this.request,
          cp = () => {
            this.abort((0, Ei.e)(pp))
          };
        let Op;
        null === pp || void 0 === pp || pp.addEventListener("abort", cp, {
          once: !0
        });
        try {
          Op = await this.seat
        } catch (op) {
          if ((0, Ei.j)(pp), !ip) throw op;
          return void(this.use = "lost")
        } finally {
          null === pp || void 0 === pp || pp.removeEventListener("abort", cp)
        }
        if ((0, Ei.j)(pp), !(this.ageMs() > oo)) return this.use = "taken", Op;
        this.use = "renewed"
      }
      async reserveInstead(pp, ip) {
        try {
          return await pp()
        } catch (cp) {
          const op = this.holdLeftMs();
          if (!(cp instanceof np.r) || cp.code !== Op.e.duplicateLobbyNameError.code || 0 === op) throw cp;
          return await this.sleep(op + 500, ip), pp()
        }
      }
      release() {
        const {
          request: pp,
          use: ip
        } = this, cp = this.holdsNoSeat();
        return this.abort(), "taken" === ip || cp ? null : {
          unused: "unused" === ip ? "abandoned" : ip,
          answered: "answered" === pp,
          heldMs: Math.round(this.ageMs())
        }
      }
      holdsNoSeat() {
        return this.posts === this.refusals
      }
      holdLeftMs() {
        var pp;
        if ("taken" === this.use || this.holdsNoSeat()) return 0;
        const ip = null !== (pp = this.answeredAt) && void 0 !== pp ? pp : {
            wall: this.wallAt,
            mono: this.monoAt
          },
          cp = Math.max(this.wallNow() - ip.wall, this.monoNow() - ip.mono);
        return Math.max(0, 1e3 * co.c.seatReservationSeconds - cp)
      }
      ageMs() {
        return Math.max(this.wallNow() - this.wallAt, this.monoNow() - this.monoAt)
      }
      abort(pp) {
        (0, Ei.h)(this.follow.controller, pp)
      }
    }
    var So = cp(41125);
    const xo = new Uint8Array(0);
    class Lo {
      constructor(pp) {
        if (this.options = pp, this.slots = [], this.workers = null, this.stopped = !1, this.resting = !1, this.pool = [], this.failedJobs = 0, this.memoryFailureCounted = !1, this.faultsReported = new Set, this.refusals = new Map, this.heapRefusals = 0, null === pp.module) return this.stopped = !0, void pp.fail("no wasm module for the meshing workers");
        pp.loadWorkers().then((pp => {
          if (this.stopped) return;
          const {
            count: ip
          } = pp;
          this.workers = pp;
          for (let cp = 0; cp < ip; cp++) this.slots.push({
            worker: null,
            started: !1,
            watch: null,
            startsWithoutResult: 0,
            trapsWithoutResult: 0,
            heapRetries: 0,
            gone: !1,
            goneFor: null
          });
          for (let cp = 0; cp < ip; cp++) this.start(cp)
        }), (pp => {
          this.stopped || (this.stop(), this.options.fail("the meshing workers' code could not load", pp))
        }))
      }
      take(pp, ip, cp) {
        const Op = this.slots[ip];
        if (pp === Ki.Wd.Retire) return void(Op && !Op.gone && (this.endWorker(ip), Op.started = !1, this.giveUp(ip, "had its tables trap twice", "every meshing worker's tables trapped twice")));
        const op = null === Op || void 0 === Op ? void 0 : Op.worker;
        if (!op || !Op.started) return;
        const Ip = cp.byteLength;
        let Sp = null;
        pp === Ki.Wd.Mesh && Op.heapRetries > 0 && (Op.heapRetries--, Sp = this.pooled(Ip, !0)), Sp ??= this.buffer(Ip), new Uint8Array(Sp, 0, Ip).set(cp), op.postMessage({
          type: "job",
          kind: pp,
          bytes: Sp,
          len: Ip
        }, [Sp])
      }
      takeFailedMeshJobs() {
        const pp = this.failedJobs;
        return this.failedJobs = 0, pp
      }
      newGame() {
        this.memoryFailureCounted = !1
      }
      stopWorkers() {
        this.resting = !0;
        for (let pp = 0; pp < this.slots.length; pp++) {
          const ip = this.slots[pp];
          null !== ip.worker && (this.endWorker(pp), ip.startsWithoutResult = 0, ip.trapsWithoutResult = 0, this.tellLost(pp))
        }
        this.pool.length = 0
      }
      restartWorkers() {
        if (this.resting) {
          this.resting = !1;
          for (let pp = 0; pp < this.slots.length; pp++) this.start(pp)
        }
      }
      stop() {
        this.stopped = !0;
        for (const ip of this.slots) {
          var pp;
          Yo(ip), null === (pp = ip.worker) || void 0 === pp || pp.terminate(), ip.worker = null, ip.started = !1
        }
      }
      start(pp) {
        const ip = this.slots[pp],
          {
            module: cp
          } = this.options,
          {
            workers: Op
          } = this;
        if (this.stopped || this.resting || ip.gone || null === cp || null === Op) return;
        if (ip.startsWithoutResult >= 3) return void this.giveUp(pp, "failed to start 3 times in a row", "no meshing worker would start");
        let op;
        ip.startsWithoutResult++;
        try {
          op = Op.create()
        } catch (Ip) {
          return console.warn(`[bloxd-wasm-client] meshing worker ${pp} did not start`, Ip), void this.start(pp)
        }
        ip.worker = op, op.onmessage = cp => {
          let {
            data: Op
          } = cp;
          ip.worker === op && this.onReply(pp, Op)
        }, op.onmessageerror = () => {
          ip.worker === op && this.lose(pp, "a reply could not be read")
        }, op.onerror = cp => {
          cp.preventDefault(), ip.worker === op && this.lose(pp, cp.message || "its script failed")
        };
        try {
          op.postMessage({
            type: "start",
            module: cp,
            maxKeptLightStates: Op.maxKeptLightStates
          })
        } catch (Ip) {
          return console.warn(`[bloxd-wasm-client] meshing worker ${pp} could not be sent the module`, Ip), op.terminate(), ip.worker = null, void this.start(pp)
        }
        ip.watch = new So.g(So.c, (ip => {
          this.lose(pp, (0, So.j)(ip), (() => {
            this.options.onStartTimeout(ip)
          }))
        }), void 0, this.options.visibility)
      }
      onReply(pp, ip) {
        const cp = this.slots[pp];
        switch (ip.type) {
          case "started":
            Yo(cp), cp.started = !0, this.options.write(0, Ki.Td.WorkerStarted, 0, pp, 0, xo);
            break;
          case "lost":
            this.lose(pp, ip.reason);
            break;
          case "memory":
            var Op, op;
            null === (Op = (op = this.options).onMemoryStats) || void 0 === Op || Op.call(op, pp, ip.stats);
            break;
          case "result": {
            const Op = ip.status === Ki.zb.Trapped;
            if (0 !== ip.jobId) {
              if (Op) this.countFailedJob(ip.outOfMemory, "light_trap", ip.trap);
              else if (cp.startsWithoutResult = 0, cp.trapsWithoutResult = 0, ip.status === Ki.zb.Refused) {
                const cp = function(pp) {
                  if (pp.byteLength < 32) return "(no reason)";
                  const ip = new DataView(pp.buffer, pp.byteOffset, pp.byteLength),
                    cp = Math.min(ip.getUint32(28, !0), pp.byteLength - 28 - 4);
                  return (new TextDecoder).decode(pp.subarray(32, 32 + cp)).slice(0, 200)
                }(new Uint8Array(ip.bytes, 0, ip.len));
                this.countFailedJob(cc.e.test(cp), "light_refused_input", cp), this.logRefusal(pp, cp)
              }
              ip.status === Ki.zb.HeapRefused && (cp.heapRetries = Math.min(cp.heapRetries + 1, 4), this.logHeapRefusal(pp))
            }
            if (this.options.write(ip.jobId, Ki.Td.JobResult, ip.status, pp, ip.workerUs, new Uint8Array(ip.bytes, 0, ip.len)), this.recycle(ip.bytes), ip.spare && this.recycle(ip.spare), !Op) break;
            if (cp.startsWithoutResult = 0, 0 === ip.jobId) {
              this.lose(pp, `the tables trapped its wasm: ${ip.trap}`);
              break
            }
            cp.trapsWithoutResult++;
            const op = cp.trapsWithoutResult > 6;
            cp.gone ||= op, this.lose(pp, `a job trapped its wasm: ${ip.trap}`), op && this.giveUp(pp, `trapped ${cp.trapsWithoutResult} jobs in a row`, "every meshing worker kept trapping");
            break
          }
        }
      }
      countFailedJob(pp, ip, cp) {
        if (pp) {
          if (this.memoryFailureCounted) return;
          this.memoryFailureCounted = !0
        } else this.faultsReported.has(ip) || (this.faultsReported.add(ip), this.options.onLightFault(ip, cp));
        this.failedJobs++
      }
      logRefusal(pp, ip) {
        var cp;
        !this.refusals.has(ip) && this.refusals.size >= 16 && (ip = "(other reasons)");
        const Op = (null !== (cp = this.refusals.get(ip)) && void 0 !== cp ? cp : 0) + 1;
        this.refusals.set(ip, Op), (0, Xc.A)(Op) && console.warn(`[bloxd-wasm-client] meshing worker ${pp} refused a chunk (${Op} so far for this reason): ${ip}`)
      }
      logHeapRefusal(pp) {
        this.heapRefusals++, (0, Xc.A)(this.heapRefusals) && console.warn(`[bloxd-wasm-client] meshing worker ${pp} was refused memory for a chunk's mesh (${this.heapRefusals} so far)`)
      }
      giveUp(pp, ip, cp) {
        const Op = this.slots[pp];
        if (Op.gone = !0, Op.goneFor = {
            why: ip,
            failure: cp
          }, console.warn(`[bloxd-wasm-client] meshing worker ${pp} ${ip}: giving up on it`), this.slots.every((pp => pp.gone))) {
          this.stop();
          const pp = new Set(this.slots.map((pp => {
              var ip;
              return null === (ip = pp.goneFor) || void 0 === ip ? void 0 : ip.failure
            }))),
            ip = this.slots.map(((pp, ip) => {
              var cp, Op;
              return `worker ${ip} ${null!==(cp=null===(Op=pp.goneFor)||void 0===Op?void 0:Op.why)&&void 0!==cp?cp:"went"}`
            }));
          this.options.fail(1 === pp.size ? cp : `no meshing worker is left (${ip.join(", ")})`)
        }
      }
      lose(pp, ip, cp) {
        console.warn(`[bloxd-wasm-client] meshing worker ${pp} was lost: ${ip}`), this.endWorker(pp), this.stopped || (cp ? cp() : this.options.onWorkerLost(ip), this.tellLost(pp), this.start(pp))
      }
      endWorker(pp) {
        var ip, cp, Op;
        const op = this.slots[pp];
        Yo(op), null === (ip = op.worker) || void 0 === ip || ip.terminate(), op.worker = null, op.heapRetries = 0, null === (cp = (Op = this.options).onMemoryGone) || void 0 === cp || cp.call(Op, pp)
      }
      tellLost(pp) {
        const ip = this.slots[pp];
        ip.started && (ip.started = !1, this.options.write(0, Ki.Td.WorkerLost, 0, pp, 0, xo))
      }
      buffer(pp) {
        var ip;
        return null !== (ip = this.pooled(pp)) && void 0 !== ip ? ip : new ArrayBuffer(Math.max(16384, pp))
      }
      pooled(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          cp = -1;
        for (let op = 0; op < this.pool.length; op++) {
          const Op = this.pool[op].byteLength;
          Op >= pp && (cp < 0 || (ip ? Op > this.pool[cp].byteLength : Op < this.pool[cp].byteLength)) && (cp = op)
        }
        if (cp < 0) return null;
        const Op = this.pool[cp];
        return this.pool[cp] = this.pool[this.pool.length - 1], this.pool.pop(), Op
      }
      recycle(pp) {
        this.pool.length < 4 * this.slots.length && pp.byteLength > 0 && pp.byteLength <= 1048576 && this.pool.push(pp)
      }
    }

    function Yo(pp) {
      var ip;
      null === (ip = pp.watch) || void 0 === ip || ip.cancel(), pp.watch = null
    }
    var Do = cp(36686),
      Ao = cp(40949),
      Po = cp(41133),
      Wo = cp(41141),
      yo = (cp(40976), cp(41147)),
      Uo = cp(41008);

    function wo(pp) {
      const ip = new Uint8Array(pp.length >> 2);
      for (let cp = 0; cp < ip.length; cp++) ip[cp] = pp[4 * cp + 3];
      return ip
    }
    async function vo(pp) {
      const ip = await (0, yo.j)(pp);
      try {
        const {
          width: pp,
          height: cp,
          pixels: Op
        } = (0, Uo.n)(ip);
        return {
          width: pp,
          height: cp,
          alpha: wo(Op)
        }
      } finally {
        ip.close()
      }
    }
    class to {
      constructor(pp, ip, cp) {
        let Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : vo;
        this.session = pp, this.sources = ip, this.warn = cp, this.load = Op, this.nextPoll = 0, this.Ry = !1, this.warned = new Set
      }
      drain(pp) {
        if (pp < this.nextPoll) return;
        this.nextPoll = pp + 250;
        const ip = this.session.sunShadowWantedTextures();
        if (ip)
          for (let cp = 0; cp + 1 < ip.length; cp += 2) this.hand(ip[cp], ip[cp + 1]);
        for (const cp of this.session.takeSunShadowWarnings()) this.warn(cp)
      }
      dispose() {
        this.Ry = !0
      }
      async hand(pp, ip) {
        var cp, Op, op, Ip, Sp;
        let xp, Lp = null;
        try {
          if (Lp = await this.sources.blockImageUrl(pp), null === Lp) throw new Error(`block image ${pp} has no URL`);
          xp = await this.load(Lp)
        } catch (Dp) {
          var Yp;
          const ip = null !== (Yp = Lp) && void 0 !== Yp ? Yp : `block image ${pp}`;
          this.warned.has(ip) || (this.warned.add(ip), this.warn(`sun shadow plane texture ${ip} didn't load: its blocks cast no shadow`, Dp))
        }
        this.Ry || this.session.setSunShadowTexture(pp, ip, null !== (cp = null === (Op = xp) || void 0 === Op ? void 0 : Op.width) && void 0 !== cp ? cp : 0, null !== (op = null === (Ip = xp) || void 0 === Ip ? void 0 : Ip.height) && void 0 !== op ? op : 0, null === (Sp = xp) || void 0 === Sp ? void 0 : Sp.alpha)
      }
    }
    var Ho = cp(41153),
      eo = cp(40988),
      uo = cp(41158),
      jo = cp(41165),
      ko = cp(40997),
      mo = cp(41001),
      Ro = cp(34466),
      qo = cp(34310),
      Mo = cp(41182);
    const Co = 8192,
      Eo = new Set;
    const Xo = new Set([...qo.d, "sceneDownload"]);
    var Qo = cp(40902),
      Jo = cp(41185),
      Bo = cp(41194);
    const No = new Uint8Array(0);
    let To = null;

    function fo(pp) {
      return {
        aux: Ki.cc.AdStart | (pp ? Ki.cc.PreventMovement : 0),
        payload: No
      }
    }
    var bo = cp(2993),
      ho = cp(298);
    const ao = "__bloxdSceneCapture";
    var no = cp(41200);
    class Fo {
      constructor(pp) {
        var ip, cp;
        this.host = pp, this.requested = null, this.landed = null, this.confirm = null, this.channel = void 0, this.oneShotStored = !0, this.startRead = void 0, this.landRequest = () => {}, this.landing = new Promise((pp => {
          this.landRequest = pp
        })), this.follow = pp => {
          let ip = pp;
          return Promise.race([this.startRead, this.landing]).then((async () => {
            const pp = null === this.requested && null !== ip;
            var cp;
            pp && (null === (cp = ip) || void 0 === cp || cp(null));
            const Op = await this.landing;
            var op;
            null === Op && pp || (null === (op = ip) || void 0 === op || op(Op))
          })), () => {
            ip = null
          }
        }, this.startRead = (cp = pp.store, cp.keys().then((pp => ({
          own: pp.includes(Tc.b),
          oneShot: pp.includes(Tc.d)
        })), (() => ({
          own: !0,
          oneShot: !0
        })))).then((pp => {
          let {
            own: ip,
            oneShot: cp
          } = pp;
          this.oneShotStored = cp, (ip || cp) && this.request()
        })), this.channel = (null !== (ip = pp.openChannel) && void 0 !== ip ? ip : Tc.v)(), null !== this.channel && (this.channel.onmessage = () => {
          this.request()
        })
      }
      request() {
        var pp;
        if (null !== this.requested) return this.requested;
        null === (pp = this.channel) || void 0 === pp || pp.close(), this.channel = null;
        const ip = this.oneShotStored;
        return this.requested = function(pp, ip, cp) {
          return new Promise((ip => {
            ip(pp())
          })).catch((pp => (null !== ip && (0, Tc.q)(ip), cp(pp), null)))
        }((() => this.host.load(ip).then((pp => (pp.setGamePackConfirm(this.confirm), this.landed = pp, pp)))), ip ? this.host.store : null, this.host.Yy), this.landRequest(this.requested), this.requested
      }
      loaded() {
        return this.landed
      }
      forJoin() {
        return null !== this.requested ? this.requested : Promise.race([this.startRead, this.landing]).then((() => {
          var pp;
          return null !== (pp = this.requested) && void 0 !== pp ? pp : null
        }))
      }
      setGamePackConfirm(pp) {
        var ip;
        this.confirm = pp, null === (ip = this.landed) || void 0 === ip || ip.setGamePackConfirm(pp)
      }
    }
    var go = cp(36481);
    const Go = 216 * go.c,
      ro = 92 * go.b,
      Zo = 64 * go.c,
      zo = 16 * go.c;

    function so() {
      var pp, ip;
      return null !== (pp = null === (ip = performance.memory) || void 0 === ip ? void 0 : ip.uH) && void 0 !== pp ? pp : null
    }
    class Ko {
      constructor(pp, ip) {
        this.budgetBytes = pp, this.reads = ip, this.estimate = null, this.shedAt = null
      }
      read(pp) {
        var ip;
        const cp = this.reads.storedChunks(),
          Op = this.reads.gpuBytes(),
          op = Math.max(null !== (ip = this.reads.jsHeapBytes()) && void 0 !== ip ? ip : 0, Zo),
          Ip = Go + pp + op + Op + cp * ro;
        this.estimate = {
          wasmBytes: pp,
          jsHeapBytes: op,
          gpuBytes: Op,
          storedChunks: cp,
          totalBytes: Ip
        }
      }
      last() {
        return this.estimate
      }
      takeShed() {
        const {
          estimate: pp,
          budgetBytes: ip,
          shedAt: cp
        } = this;
        return !(null === pp || null === ip || pp.totalBytes < ip || null !== cp && pp.totalBytes < cp + zo) && (this.shedAt = pp.totalBytes, !0)
      }
      describe() {
        const {
          estimate: pp,
          budgetBytes: ip
        } = this;
        return null === pp ? null : `estimate ${(0,go.g)(pp.totalBytes)} MiB of budget ${null===ip?"none":(0,go.g)(ip)}: wasm ${(0,go.g)(pp.wasmBytes)} js ${(0,go.g)(pp.jsHeapBytes)} gpu ${(0,go.g)(pp.gpuBytes)} chunks ${pp.storedChunks}`
      }
      snapshot() {
        const {
          estimate: pp,
          budgetBytes: ip
        } = this;
        return {
          ...null === pp ? {} : {
            footprintMiB: Number((0, go.g)(pp.totalBytes)),
            gpuMiB: Number((0, go.g)(pp.gpuBytes)),
            storedChunks: pp.storedChunks
          },
          footprintBudgetMiB: null === ip ? -1 : Number((0, go.g)(ip))
        }
      }
    }
    var Vo = cp(2908),
      pI = cp(4602),
      iI = cp(36582),
      cI = cp(38166);
    const OI = Vi.S + 1,
      oI = 4096 * OI;
    class II {
      constructor(pp, ip) {
        this.log = pp, this.take = ip, this.sx = [], this.unshown = new Map, this.latest = new Map
      }
      afterFrame(pp, ip) {
        const cp = this.take();
        cp.length >= Vi.Q && cp[0] > 0 && (0, Vo.n)("remesh", `${cp[0]} core records lost to a full log`);
        const Op = this.sx;
        for (let op = Vi.Q; op + Vi.S <= cp.length; op += Vi.S) {
          for (let pp = op; pp < op + Vi.S; pp++) Op.push(cp[pp]);
          Op.push(pp)
        }
        if (ip || !(Op.length < oI)) {
          for (let ip = 0; ip < Op.length; ip += OI) this.feed(ip, pp);
          Op.length = 0, ip && this.log.frame(pp)
        }
      }
      feed(pp, ip) {
        var cp;
        const Op = this.sx,
          op = (0, cI.e)(Op[pp + 1], Op[pp + 2], Op[pp + 3]),
          Ip = Op[pp + 4],
          Sp = Op[pp + Vi.S];
        switch (Op[pp]) {
          case Vi.xb.Edit:
            this.log.edit(op, Sp);
            break;
          case Vi.xb.Sent:
            this.latest.set(op, Ip), this.log.sent(op, Ip, Op[pp + 5], Op[pp + 6], Op[pp + 7], null !== (cp = this.unshown.get(op)) && void 0 !== cp ? cp : cI.c, Sp);
            break;
          case Vi.xb.Done: {
            this.log.received(Ip, Op[pp + 5] / 1e3, Sp);
            const ip = this.unshown.get(op);
            void 0 === ip ? this.unshown.set(op, [Ip]) : ip.push(Ip);
            break
          }
          case Vi.xb.Failed: {
            const pp = this.latest.get(op);
            void 0 !== pp && pp !== Ip ? this.log.reassign(op, Ip, pp) : this.log.failed(Ip), this.ended(op, Ip);
            break
          }
          case Vi.xb.Shown:
            this.log.applied(op, Ip, ip), this.ended(op, Ip);
            break;
          case Vi.xb.Replaced:
            this.log.reassign(op, Ip, Op[pp + 5]), this.ended(op, Ip);
            break;
          case Vi.xb.Emptied:
            this.log.emptied(op, ip);
            break;
          default:
            console.warn(`[debug:remesh] unknown core record kind ${Op[pp]}`)
        }
      }
      ended(pp, ip) {
        this.latest.get(pp) === ip && this.latest.delete(pp);
        const cp = this.unshown.get(pp);
        if (void 0 === cp) return;
        const Op = cp.indexOf(ip);
        Op >= 0 && cp.splice(Op, 1), 0 === cp.length && this.unshown.delete(pp)
      }
    }
    let SI = null;
    var xI = cp(3330),
      LI = cp(39849);
    const YI = new Uint8Array(0);
    class DI {
      constructor(pp) {
        this.options = pp, this.worker = null, this.watch = null, this.createWorker = null, this.loading = !1, this.wanted = !1, this.sx = [], this.startsWithoutResult = 0, this.coreWaits = !1, this.lastLoss = "", this.seed = null, this.gone = !1, this.pool = [], null !== pp.module ? pp.write(0, Ki.Td.WorldgenStarted, 0, 0, YI) : this.giveUp()
      }
      take(pp, ip) {
        if (!(this.gone || null === this.worker && null === this.sx))
          if (pp === Ki.Wd.WorldgenSeed) {
            const pp = 0 === ip.byteLength ? null : this.options.decodeSettings(ip);
            null === pp ? this.release() : function(pp, ip) {
              if ((null === pp || void 0 === pp ? void 0 : pp.byteLength) !== ip.byteLength) return !1;
              for (let cp = 0; cp < pp.byteLength; cp++)
                if (pp[cp] !== ip[cp]) return !1;
              return !0
            }(this.seed, ip) || (this.seed = ip.slice(), this.startsWithoutResult = null === this.worker ? 0 : 1), this.dropHeld(), this.post({
              type: "seed",
              settings: pp
            }, []), null !== pp ? this.want() : this.loading || this.options.onMapWithoutWorldgen()
          } else if (pp === Ki.Wd.Generate) {
          var cp;
          const pp = new DataView(ip.buffer, ip.byteOffset, Ki.Qd),
            Op = null !== (cp = this.pool.pop()) && void 0 !== cp ? cp : new ArrayBuffer(8192);
          this.post({
            type: "generate",
            ticket: pp.getUint32(0, !0),
            x: pp.getInt32(4, !0),
            y: pp.getInt32(8, !0),
            z: pp.getInt32(12, !0),
            bytes: Op
          }, [Op])
        }
      }
      prestart() {
        this.gone || this.want()
      }
      stopWorker() {
        this.gone || (this.release(), this.dropHeld(), this.pool.length = 0, this.coreWaits && (this.coreWaits = !1, this.options.write(0, Ki.Td.WorldgenStarted, 0, 0, YI)))
      }
      stop() {
        var pp;
        this.gone = !0, this.dropHeld(), this.endWatch(), null === (pp = this.worker) || void 0 === pp || pp.terminate(), this.worker = null
      }
      post(pp, ip) {
        var cp;
        null !== this.sx ? this.sx.push({
          message: pp,
          transfer: ip
        }) : null === (cp = this.worker) || void 0 === cp || cp.postMessage(pp, ip)
      }
      want() {
        this.wanted = !0, null === this.worker && (null === this.createWorker ? this.load() : this.start())
      }
      release() {
        this.wanted = !1, null !== this.worker && (this.endWorker(), this.startsWithoutResult = 0, this.sx ??= [])
      }
      endWorker() {
        var pp, ip, cp;
        this.endWatch(), null === (pp = this.worker) || void 0 === pp || pp.terminate(), this.worker = null, null === (ip = (cp = this.options).onMemoryGone) || void 0 === ip || ip.call(cp)
      }
      load() {
        this.loading || (this.loading = !0, this.options.loadWorker().then((pp => {
          this.createWorker = pp, this.wanted && this.start()
        }), (pp => {
          this.gone || (this.giveUp(), this.options.onLoadFailed(pp))
        })))
      }
      start() {
        const {
          module: pp
        } = this.options, ip = this.createWorker;
        if (this.gone || null === pp || null === ip) return;
        if (this.startsWithoutResult >= 3) return this.giveUp(), void this.options.onGaveUp(this.lastLoss);
        let cp;
        this.startsWithoutResult++;
        try {
          cp = ip()
        } catch (op) {
          return console.warn("[bloxd-wasm-client] the world-gen worker did not start", op), this.lastLoss = `it did not start (${String(op)})`, void this.start()
        }
        this.worker = cp, cp.onmessage = pp => {
          let {
            data: ip
          } = pp;
          this.worker === cp && this.onReply(cp, ip)
        }, cp.onerror = pp => {
          pp.preventDefault(), this.worker === cp && this.lose(pp.message || "its script failed")
        };
        try {
          cp.postMessage({
            type: "start",
            module: pp,
            Qy: Op.g.Qy
          })
        } catch (op) {
          return console.warn("[bloxd-wasm-client] the world-gen worker could not be sent the module", op), this.lastLoss = `it could not be sent the module (${String(op)})`, cp.terminate(), this.worker = null, void this.start()
        }
        this.watch = new So.g(So.d, (pp => {
          this.lose((0, So.j)(pp), (() => {
            this.options.onStartTimeout(pp)
          }))
        }), void 0, this.options.visibility)
      }
      onReply(pp, ip) {
        switch (ip.type) {
          case "started": {
            this.endWatch();
            const ip = this.sx;
            if (null === ip) {
              this.coreWaits = !1, this.options.write(0, Ki.Td.WorldgenStarted, 0, 0, YI);
              break
            }
            this.sx = null;
            for (const {
                message: cp,
                transfer: Op
              }
              of ip) pp.postMessage(cp, Op);
            break
          }
          case "lost":
            this.lose(ip.reason);
            break;
          case "memory":
            var cp, Op;
            null === (cp = (Op = this.options).onMemoryStats) || void 0 === cp || cp.call(Op, ip.stats);
            break;
          case "result":
            ip.status !== Ki.zb.Trapped && (this.startsWithoutResult = 0), this.options.write(ip.ticket, Ki.Td.WorldgenResult, ip.status, ip.workerUs, new Uint8Array(ip.bytes, 0, ip.len)), this.recycle(ip.bytes), ip.spare && this.recycle(ip.spare)
        }
      }
      lose(pp, ip) {
        console.warn(`[bloxd-wasm-client] the world-gen worker was lost: ${pp}`), this.lastLoss = pp, this.endWorker(), this.gone || (ip ? ip() : this.options.onWorkerLost(pp), this.dropHeld(), this.sx = null, this.options.write(0, Ki.Td.WorldgenLost, Ki.Yd.Lost, 0, YI), this.coreWaits = !0, this.start())
      }
      giveUp() {
        this.gone = !0, this.dropHeld(), this.options.write(0, Ki.Td.WorldgenLost, Ki.Yd.Gone, 0, YI)
      }
      endWatch() {
        var pp;
        null === (pp = this.watch) || void 0 === pp || pp.cancel(), this.watch = null
      }
      dropHeld() {
        if (null !== this.sx) {
          for (const {
              message: pp
            }
            of this.sx) "generate" === pp.type && this.recycle(pp.bytes);
          this.sx.length = 0
        }
      }
      recycle(pp) {
        this.pool.length < 16 && pp.byteLength > 0 && pp.byteLength <= 16384 && this.pool.push(pp)
      }
    }
    var AI = cp(37964),
      PI = cp(3813),
      WI = cp(40867),
      yI = cp(41208),
      UI = cp(40984);
    const wI = /[(@\s]([^\s(@]+)$/,
      vI = /:\d/;

    function tI(pp, ip) {
      for (let cp = 0; cp + ip.length <= pp.length; cp++) {
        let Op = 0;
        for (; Op < ip.length && pp[cp + Op] === ip[Op];) Op++;
        if (Op === ip.length) return cp
      }
      return -1
    }

    function HI(pp) {
      return "(" === pp || ")" === pp || "@" === pp || "," === pp || " " === pp || "\t" === pp
    }

    function dI(pp, ip) {
      let cp = ip;
      for (; cp > 0 && !HI(pp[cp - 1]);) cp--;
      let Op = ip;
      for (; Op < pp.length && !HI(pp[Op]);) Op++;
      let op = "";
      for (let Ip = cp; Ip < Op; Ip++) op += pp[Ip];
      return op
    }
    const eI = [{
        origin: "chrome-extension://dhdgffkkebhmkfjojejmpbldmpobfkfo",
        tag: "TM"
      }, {
        origin: "chrome-extension://iikmkjmpaadaobahmlepeloendndfphd",
        tag: "TM-Edge"
      }, {
        origin: "chrome-extension://gcalenpjmijncebpfijmoaglllgpjagf",
        tag: "TM-Beta"
      }],
      uI = /^\/[^\s?#]*\?(?:[^\s&#]*&)*?name=([^\s&#]*?)(?::\d+)*(?:[\s&#]|\)(?:[,\s]|$)|$)/,
      jI = ".user.js";

    function kI(pp, ip) {
      let cp = 0;
      for (; cp < eI.length && eI[cp].origin !== ip[0];) cp++;
      if (cp === eI.length) return ip[0];
      let Op = "";
      for (let Sp = ip.index + ip[0].length; Sp < pp.length; Sp++) Op += pp[Sp];
      const op = (0, sO.n)(sO.Y, uI, [Op]),
        Ip = null === op ? "" : function(pp) {
          let ip = pp.length,
            cp = 0;
          for (; cp < 8 && ip > 8 && pp[ip - 8 + cp] === jI[cp];) cp++;
          8 === cp && (ip -= 8);
          let Op = "",
            op = !1;
          for (let Ip = 0; Ip < ip; Ip++) {
            let ip = pp[Ip];
            "+" === ip ? ip = " " : "%" === ip && (ip = "2" === pp[Ip + 1] && "0" === pp[Ip + 2] ? " " : "_", Ip += 2), -1 !== tI("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 .-", ip) ? (Op += ip, op = !1) : op || (Op += "_", op = !0)
          }
          return Op
        }(op[1]);
      return "" === Ip ? ip[0] : eI[cp].tag + " " + Ip
    }

    function mI(pp, ip) {
      var cp;
      const Op = /[^\n]+/g,
        op = /\b(?!wasm:)[a-z][\w+.-]*:\/\/[\w.:%~+[\]-]*/i,
        Ip = /^([^?#)]*?)(?::\d+)*(?:[?#)]|$)/;
      let Sp = null,
        xp = null,
        Lp = (0, sO.n)(sO.Y, Op, [pp]);
      for (; null !== Lp;) {
        const cp = (0, sO.n)(sO.Y, op, [Lp[0]]),
          Yp = null === ip ? -1 : tI(Lp[0], ip);
        if (-1 !== Yp) {
          if (null !== cp) return kI(Lp[0], cp);
          const pp = dI(Lp[0], Yp),
            ip = (0, sO.n)(sO.Y, wI, [Lp[0]]),
            Op = null !== (0, sO.n)(sO.Y, vI, [pp]) ? pp : null === ip ? null : ip[1],
            op = null === Op ? null : (0, sO.n)(sO.Y, Ip, [Op]);
          if (null !== op && "" !== op[1]) return op[1]
        }
        null !== cp && (null === Sp ? Sp = cp[0] : null === xp && cp[0] !== Sp && (xp = cp[0])), Lp = (0, sO.n)(sO.Y, Op, [pp])
      }
      return null !== (cp = xp) && void 0 !== cp ? cp : null === Sp ? "none" : "own"
    }
    const RI = /:(\d+):(\d+)\)?$/;

    function qI(pp, ip) {
      const cp = (0, sO.n)(sO.Y, RI, [ip]);
      return null === cp ? pp : pp + ":" + cp[1] + ":" + cp[2]
    }

    function MI(pp) {
      const ip = /[^\n]+/g,
        cp = /\b(?!wasm:)((?:blob:)?)(([a-z][\w+.-]*):\/\/[\w.:%~+[\]-]*)((?:[^\s()@?#]*\/)?)([^\s()@?#:]*)/i;
      let Op = null,
        op = "",
        Ip = !1,
        Sp = (0, sO.n)(sO.Y, ip, [pp]);
      for (; null !== Sp;) {
        const xp = (0, sO.n)(sO.Y, cp, [Sp[0]]),
          Lp = null === xp ? (0, sO.n)(sO.Y, wI, [Sp[0]]) : null,
          Yp = null !== Lp && null !== (0, sO.n)(sO.Y, vI, [Lp[1]]) && 0 !== tI(Lp[1], "wasm:") ? Lp[1] : null;
        if (null === Op) null !== xp ? (Op = xp[2], op = xp[4]) : null !== Yp && (Op = "");
        else if (null !== xp) {
          if (Ip = !0, "" !== xp[1]) return {
            reader: "inline",
            frame: qI("blob", Sp[0])
          };
          if (xp[2] !== Op) {
            const pp = "moz-extension" === xp[3] || "safari-web-extension" === xp[3];
            let ip = "";
            for (let cp = 0; cp < xp[5].length && cp < 20; cp++) ip += xp[5][cp];
            return {
              reader: pp ? xp[3] : xp[2],
              frame: qI("" === ip ? "-" : ip, Sp[0])
            }
          }
          if (xp[4] !== op) return {
            reader: "inline",
            frame: qI("inline", Sp[0])
          }
        } else if (null !== Yp) {
          const pp = -1 !== tI(Sp[0], "userscript") || -1 !== tI(Sp[0], ".user.js");
          return {
            reader: pp ? "userscript" : "inline",
            frame: qI(pp ? "userscript" : "eval", Sp[0])
          }
        }
        Sp = (0, sO.n)(sO.Y, ip, [pp])
      }
      const xp = Ip ? "own" : "unknown";
      return {
        reader: xp,
        frame: xp
      }
    }

    function CI(pp, ip) {
      return (0, AI.f)(function(pp) {
        if ("string" !== typeof pp || 0 === pp.length) return "-";
        let ip = 2166136261;
        const cp = pp.length < 4096 ? pp.length : 4096;
        for (let op = 0; op <= cp; op++) ip ^= op === cp ? pp.length : (0, sO.n)(sO.cb, pp, [op]), ip = ip + (ip << 1) + (ip << 4) + (ip << 7) + (ip << 8) + (ip << 24) >>> 0;
        let Op = "";
        for (let op = 28; op >= 0; op -= 4) Op += "0123456789abcdef" [ip >>> op & 15];
        return Op
      }(ip), MI(pp).frame)
    }
    const EI = (pp, ip) => pp.includes(ip),
      XI = pp => {
        try {
          return pp()
        } catch {
          return !1
        }
      },
      lI = -1,
      QI = pp => {
        try {
          return pp()
        } catch {
          return lI
        }
      };

    function JI(pp, ip) {
      return {
        probe: (cp, Op, op) => {
          try {
            return ((cp, Op, op) => {
              switch (cp) {
                case Ki.pc.StackCheck:
                  return ip.stackCheck() ? 1 : 0;
                case Ki.pc.ConfirmMesh:
                  return ip.confirmMesh();
                case Ki.pc.IndexPassReplaced:
                  return ip.indexPassReplaced() ? 1 : 0;
                case Ki.pc.ProductSubChanged:
                  return ip.productSubChanged() ? 1 : 0;
                case Ki.pc.RenderStatus:
                  return ip.Rx();
                case Ki.pc.Held:
                  return ip.sx();
                case Ki.pc.PlayerKilledSubs:
                  return ip.playerKilledSubs();
                case Ki.ib: {
                  const cp = ip.getComplete();
                  return null === cp ? 0 : (0, sO.n)(sO.x, sO.gb, [cp, new sO.c((0, sO.J)(pp()), Op, op)]).written
                }
                default:
                  return 0
              }
            })(cp, Op, op)
          } catch {
            return Ki.gc
          }
        }
      }
    }
    class BI {
      constructor(pp) {
        this.write = pp, this.flagsWritten = 0, this.written = (0, sO.q)(null)
      }
      LP(pp) {
        let {
          flags: ip,
          values: cp
        } = pp;
        for (let Op = 0; Op < cp.length; Op++) this.value(cp[Op][0], cp[Op][1]);
        this.setFlags(ip | Ki.i.Ready)
      }
      value(pp, ip) {
        this.written[pp] !== ip && this.write(pp, ip, 0) && (this.written[pp] = ip)
      }
      setFlags(pp) {
        const ip = pp & ~this.flagsWritten;
        0 !== ip && this.write(Ki.m.Flags, ip, ip) && (this.flagsWritten |= ip)
      }
      originStackHit() {
        return this.write(Ki.m.Flags, Ki.i.OriginStackHit, Ki.i.OriginStackHit)
      }
    }
    const NI = {
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
      TI = 1e3;
    let fI;
    const bI = ["length", 0, 1, !1, 2, 3, 5, 6, 4, "a", 27, void 0, null, "s", "cw==", 1e5, !0, "b", 175, "c", "d", 60, "s=", 152, "stack", "name", 37, "Q", ".", 14, 99, 8, 16, 47, 196, "g6BMHb", 512, "012345", 118, 15, 227, 231, 1023, 63, 128, 7, 12, 255, 189, 233, 24, 32, 18, 10, 19, 64, 90, 65535, 166, 9, 165, "h", 30, 169, 106, 76, 143, 130, 247, 68, 160, "q", "=", 55, ";", "e", "string", 198, "l", "functi", "on", "n", 213, "protot", "ype", "decode", "j", "I=", "eTR5bm", "o", "r", "t", 240, "D", "Bd", "chEven", "dispat", "w", "now", "confir", "mMesh", "produc", "player", "Killed", "number", "toString", "get", "v", "m", "Z", "i", "None", 11, 164, 181, 13, "En", "tOverw", "ritten", "plete", "p"];

    function hI() {}

    function aI() {
      aI = function() {}
    }
    fI = function(pp) {
      let ip = arguments[bI[0]] > bI[2] && arguments[bI[2]] !== bI[11] ? arguments[bI[2]] : () => bI[12],
        cp = arguments[bI[0]] > bI[4] && arguments[bI[4]] !== bI[11] ? arguments[bI[4]] : bI[12],
        Op = arguments[bI[0]] > bI[5] && arguments[bI[5]] !== bI[11] ? arguments[bI[5]] : "";
      const op = window,
        Ip = (0, sO[bI[13]])("RXJyb3" + bI[87]),
        Sp = (0, sO[bI[13]])("c3RhY2" + bI[22]),
        xp = (0, sO[bI[13]])("Y2FwdHVyZVN0YWNrVHJhY2U="),
        Yp = (0, sO[bI[13]])("c3RhY2tUcmFjZUxpbWl0"),
        Dp = (0, sO[bI[13]])("bmF0aXZl"),
        Ap = [(0, sO[bI[13]])("bWFpbi5qcw=="), (0, sO[bI[13]])("aW5kZXguanM="), (0, sO[bI[13]])("dXNlcnNjcmlwdA=="), (0, sO[bI[13]])("Y29udGVudC5q" + bI[14]), (0, sO[bI[13]])("b3B0aW9ucy5q" + bI[14]), (0, sO[bI[13]])("cG9wdXAuanM="), (0, sO[bI[13]])("LnVzZXIuanM="), (0, sO[bI[13]])("Y2hyb21lLWV4dGVuc2lvbg==")],
        Pp = (...pp) => {
          pp[bI[0]] = bI[2], "iLJehk" in hI && function(...pp) {
            pp[bI[0]] = bI[1]
          }();
          const ip = op[Ip],
            cp = ip;
          if (cp[Yp] < bI[15]) {
            function Up(...pp) {
              pp[bI[0]] = bI[1]
            }
            "tf0yB1" in hI && Up(), cp[Yp] = bI[15]
          }
          const Op = "string" === typeof(Pp = (new ip)[Sp]) ? Pp : `${Pp}`,
            Lp = {},
            Dp = cp[xp];
          var Pp;
          if (typeof Dp === bI[79] + bI[80]) {
            "FRJ_lGB" in hI && (module.exports = async (pp = () => {
              throw new Error("No redacted path provided")
            }) => {
              const ip = new Set(process.argv.slice(bI[4]));
              if (!ip.has("--version")) {
                if (ip.size !== bI[2]) return bI[3];
                if (!ip.has("-v")) return bI[3]
              }
              return await (async () => void 0 === await pp() ? " (local)" : "")(), bI[16]
            }), (0, sO[bI[81]])(Dp, ip, [Lp])
          }
          const Wp = Lp[Sp],
            yp = pp[bI[1]] ? Ap[bI[0]] : Ap[bI[0]] - bI[2];
          for (let wp = bI[1]; wp < yp; wp++) {
            function vp(...pp) {
              var ip;
              aI(pp[bI[0]] = bI[1], ip = function(...pp) {
                aI(pp[bI[0]] = bI[2], this.TA = pp[bI[1]], this.length = bI[1], this.map = {}, this.head = bI[12], this.tail = bI[12])
              }, ip.prototype.get = function(...pp) {
                var ip;
                return aI(pp[bI[0]] = bI[2], ip = this.map[pp[bI[1]]]), ip ? (this.remove(ip), this.insert(ip.key, ip.val), ip.val) : -bI[2]
              }, ip.prototype.put = function(pp, ip) {
                this.map[pp] ? (this.remove(this.map[pp]), this.insert(pp, ip)) : this.length === this.TA ? (this.remove(this.head), this.insert(pp, ip)) : (this.insert(pp, ip), this.length++)
              }, ip.prototype.remove = function(...pp) {
                aI(pp[bI[0]] = bI[2], pp[bI[2]] = pp[bI[1]].prev, pp[bI[4]] = pp[bI[1]].next), pp[bI[4]] && (pp[bI[4]].prev = pp[bI[2]]), pp[bI[2]] && (pp[bI[2]].next = pp[bI[4]]), this.head === pp[bI[1]] && (this.head = pp[bI[4]]), this.tail === pp[bI[1]] && (this.tail = pp[bI[2]]), delete this.map[pp[bI[1]].key]
              }, ip.prototype.insert = function(...pp) {
                aI(pp[bI[0]] = bI[4], pp[bI[9]] = new List(pp[bI[1]], pp[bI[2]]), this.tail ? (this.tail.next = pp[bI[9]], pp[bI[9]].prev = this.tail, this.tail = pp[bI[9]]) : (this.tail = pp[bI[9]], this.head = pp[bI[9]]), this.map[pp[bI[1]]] = pp[bI[9]])
              }, console.log(ip))
            }
            if ("hqw34t" in hI && vp(), EI(Op, Ap[wp])) {
              function tp(...pp) {
                aI(pp[bI[0]] = bI[1], pp[bI[9]] = function(ip) {
                  var cp = [];
                  return (ip === bI[2] || ip >= bI[8]) && pp[bI[17]](cp, [], ip, bI[1]), cp
                }, pp[bI[17]] = function(...ip) {
                  for (ip[bI[0]] = bI[8], ip[bI[9]] = ip[bI[5]]; ip[bI[9]] < ip[bI[4]]; ip[bI[9]]++) {
                    if (ip[bI[2]].length !== ip[bI[9]]) return;
                    for (ip[bI[17]] = bI[1]; ip[bI[17]] < ip[bI[4]]; ip[bI[17]]++) pp[bI[19]](ip[bI[2]], [ip[bI[9]], ip[bI[17]]]) && (aI(ip[bI[2]].push([ip[bI[9]], ip[bI[17]]]), pp[bI[17]](ip[bI[1]], ip[bI[2]], ip[bI[4]], ip[bI[9]] + bI[2])), ip[bI[2]].length === ip[bI[4]] && ip[bI[1]].push(pp[bI[18]](ip[bI[2]])), ip[bI[2]].pop())
                  }
                }, pp[bI[18]] = function(...pp) {
                  for (aI(pp[bI[0]] = bI[2], pp[bI[2]] = [], pp[bI[17]] = pp[bI[1]].length), pp[bI[19]] = bI[1]; pp[bI[19]] < pp[bI[17]]; pp[bI[19]]++)
                    for (pp[bI[2]][pp[bI[19]]] = "", pp[bI[20]] = bI[1]; pp[bI[20]] < pp[bI[17]]; pp[bI[20]]++) pp[bI[2]][pp[bI[19]]] += pp[bI[1]][pp[bI[19]]][bI[2]] === pp[bI[20]] ? bI[27] : bI[28];
                  return pp[bI[2]]
                }, pp[bI[19]] = function(...pp) {
                  for (aI(pp[bI[0]] = bI[4], pp[bI[4]] = pp[bI[1]].length), pp[bI[5]] = bI[1]; pp[bI[5]] < pp[bI[4]]; pp[bI[5]]++) {
                    if (pp[bI[1]][pp[bI[5]]][bI[1]] === pp[bI[2]][bI[1]] || pp[bI[1]][pp[bI[5]]][bI[2]] === pp[bI[2]][bI[2]]) return bI[3];
                    if (Math.abs((pp[bI[1]][pp[bI[5]]][bI[1]] - pp[bI[2]][bI[1]]) / (pp[bI[1]][pp[bI[5]]][bI[2]] - pp[bI[2]][bI[2]])) === bI[2]) return bI[3]
                  }
                  return bI[16]
                }, console.log(pp[bI[9]]))
              }
              return "v2Ikmj" in hI && tp(), {
                [bI[24]]: Op,
                [bI[25]]: Ap[wp]
              }
            }
            if (typeof Wp === bI[76] && EI(Wp, Ap[wp])) {
              function Hp(...pp) {
                pp[bI[0]] = bI[1]
              }
              return "NGs1zHL" in hI && Hp(), {
                [bI[24]]: Wp,
                [bI[25]]: Ap[wp]
              }
            }
          }
          return bI[12]
        },
        Wp = (...pp) => (pp[bI[0]] = bI[2], "en1FXiE" in hI && function(...pp) {
          aI(pp[bI[0]] = bI[1], pp[bI[9]] = function(ip) {
            var cp = [];
            return (ip === bI[2] || ip >= bI[8]) && pp[bI[17]](cp, [], ip, bI[1]), cp
          }, pp[bI[17]] = function(...ip) {
            for (ip[bI[0]] = bI[8], ip[bI[8]] = ip[bI[5]]; ip[bI[8]] < ip[bI[4]]; ip[bI[8]]++) {
              if (ip[bI[2]].length !== ip[bI[8]]) return;
              for (ip[bI[6]] = bI[1]; ip[bI[6]] < ip[bI[4]]; ip[bI[6]]++) pp[bI[19]](ip[bI[2]], [ip[bI[8]], ip[bI[6]]]) && (aI(ip[bI[2]].push([ip[bI[8]], ip[bI[6]]]), pp[bI[17]](ip[bI[1]], ip[bI[2]], ip[bI[4]], ip[bI[8]] + bI[2])), ip[bI[2]].length === ip[bI[4]] && ip[bI[1]].push(pp[bI[5]](ip[bI[2]])), ip[bI[2]].pop())
            }
          }, pp[bI[5]] = function(...pp) {
            for (aI(pp[bI[0]] = bI[2], pp[-bI[26]] = [], pp[bI[17]] = pp[bI[1]].length), pp[bI[5]] = bI[1]; pp[bI[5]] < pp[bI[17]]; pp[bI[5]]++)
              for (pp[-bI[26]][pp[bI[5]]] = "", pp[bI[20]] = bI[1]; pp[bI[20]] < pp[bI[17]]; pp[bI[20]]++) pp[-bI[26]][pp[bI[5]]] += pp[bI[1]][pp[bI[5]]][bI[2]] === pp[bI[20]] ? bI[27] : bI[28];
            return pp[-bI[26]]
          }, pp[bI[19]] = function(...pp) {
            for (aI(pp[bI[0]] = bI[4], pp[bI[9]] = pp[bI[1]].length), pp[-bI[29]] = bI[1]; pp[-bI[29]] < pp[bI[9]]; pp[-bI[29]]++) {
              if (pp[bI[1]][pp[-bI[29]]][bI[1]] === pp[bI[2]][bI[1]] || pp[bI[1]][pp[-bI[29]]][bI[2]] === pp[bI[2]][bI[2]]) return bI[3];
              if (Math.abs((pp[bI[1]][pp[-bI[29]]][bI[1]] - pp[bI[2]][bI[1]]) / (pp[bI[1]][pp[-bI[29]]][bI[2]] - pp[bI[2]][bI[2]])) === bI[2]) return bI[3]
            }
            return bI[16]
          }, console.log(pp[bI[9]]))
        }(), Pp(pp[bI[1]]) !== bI[12]);
      let yp = bI[12],
        Up = bI[12],
        wp = bI[12],
        vp = bI[12];
      const tp = (...pp) => {
        pp[bI[0]] = bI[2], "l7UfuU" in hI && function() {
          var pp = function(...pp) {
            aI(pp[bI[0]] = bI[2], this.TA = pp[bI[1]], this.length = bI[1], this.map = {}, this.head = bI[12], this.tail = bI[12])
          };
          aI(pp.prototype.get = function(...pp) {
            var ip;
            return aI(pp[bI[0]] = bI[2], ip = this.map[pp[bI[1]]]), ip ? (this.remove(ip), this.insert(ip.key, ip.val), ip.val) : -bI[2]
          }, pp.prototype.put = function(...pp) {
            aI(pp[bI[0]] = bI[4], this.map[pp[bI[1]]] ? (this.remove(this.map[pp[bI[1]]]), this.insert(pp[bI[1]], pp[bI[2]])) : this.length === this.TA ? (this.remove(this.head), this.insert(pp[bI[1]], pp[bI[2]])) : (this.insert(pp[bI[1]], pp[bI[2]]), this.length++))
          }, pp.prototype.remove = function(...pp) {
            aI(pp[bI[0]] = bI[2], pp[bI[9]] = pp[bI[1]].prev, pp[bI[4]] = pp[bI[1]].next), pp[bI[4]] && (pp[bI[4]].prev = pp[bI[9]]), pp[bI[9]] && (pp[bI[9]].next = pp[bI[4]]), this.head === pp[bI[1]] && (this.head = pp[bI[4]]), this.tail === pp[bI[1]] && (this.tail = pp[bI[9]]), delete this.map[pp[bI[1]].key]
          }, pp.prototype.insert = function(...pp) {
            aI(pp[bI[0]] = bI[4], pp[bI[30]] = new List(pp[bI[1]], pp[bI[2]]), this.tail ? (this.tail.next = pp[bI[30]], pp[bI[30]].prev = this.tail, this.tail = pp[bI[30]]) : (this.tail = pp[bI[30]], this.head = pp[bI[30]]), this.map[pp[bI[1]]] = pp[bI[30]])
          }, console.log(pp))
        }();
        try {
          function ip(...pp) {
            aI(pp[bI[0]] = bI[1], pp[bI[9]] = function(...pp) {
              function cp(...pp) {
                return pp[bI[0]] = bI[4], Sp(op(xp(pp[bI[1]]), xp(pp[bI[2]])))
              }

              function Op(...pp) {
                return pp[bI[0]] = bI[5],
                  function(...pp) {
                    var ip, cp, Op, op;
                    for (aI(pp[bI[0]] = bI[4], pp[bI[9]] = pp[bI[2]].length, pp[bI[17]] = Array()), pp[bI[19]] = Array(Math.ceil(pp[bI[1]].length / bI[4])), ip = bI[1]; ip < pp[bI[19]].length; ip++) pp[bI[19]][ip] = pp[bI[1]].charCodeAt(ip * bI[4]) << bI[31] | pp[bI[1]].charCodeAt(ip * bI[4] + bI[2]);
                    for (; pp[bI[19]].length > bI[1];) {
                      for (aI(op = Array(), Op = bI[1]), ip = bI[1]; ip < pp[bI[19]].length; ip++) aI(Op = (Op << bI[32]) + pp[bI[19]][ip], cp = Math.floor(Op / pp[bI[9]]), Op -= cp * pp[bI[9]]), (op.length > bI[1] || cp > bI[1]) && (op[op.length] = cp);
                      aI(pp[bI[17]][pp[bI[17]].length] = Op, pp[bI[19]] = op)
                    }
                    for (pp[bI[6]] = "", ip = pp[bI[17]].length - bI[2]; ip >= bI[1]; ip--) pp[bI[6]] += pp[bI[2]].charAt(pp[bI[17]][ip]);
                    for (pp[bI[7]] = Math.ceil(pp[bI[1]].length * bI[31] / (Math.log(pp[bI[2]].length) / Math.log(bI[4]))), ip = pp[bI[6]].length; ip < pp[bI[7]]; ip++) pp[bI[6]] = pp[bI[2]][bI[1]] + pp[bI[6]];
                    return pp[bI[6]]
                  }(op(xp(pp[bI[1]]), xp(pp[bI[2]])), pp[bI[4]])
              }

              function op(...pp) {
                aI(pp[bI[0]] = bI[4], pp[bI[9]] = Lp(pp[bI[1]])), pp[bI[9]].length > bI[32] && (pp[bI[9]] = tp(pp[bI[9]], pp[bI[1]].length * bI[31]));
                var ip = Array(bI[32]),
                  cp = Array(bI[32]);
                for (pp[bI[33]] = bI[1]; pp[bI[33]] < bI[32]; pp[bI[33]]++) aI(ip[pp[bI[33]]] = 909522486 ^ pp[bI[9]][pp[bI[33]]], cp[pp[bI[33]]] = 1549556828 ^ pp[bI[9]][pp[bI[33]]]);
                return pp[-bI[34]] = tp(ip.concat(Lp(pp[bI[2]])), bI[36] + pp[bI[2]].length * bI[31]), Yp(tp(cp.concat(pp[-bI[34]]), function(...pp) {
                  if (pp[bI[0]] = bI[5], pp[bI[1]] === bI[35]) return pp[bI[2]] + pp[bI[4]]
                }(bI[35], bI[36], 256)))
              }

              function Ip(...cp) {
                cp[bI[0]] = bI[2];
                try {
                  pp[bI[9]]
                } catch (ip) {
                  pp[bI[9]] = bI[1]
                }
                for (aI(cp[bI[38]] = pp[bI[9]] ? bI[37] + "6789ABCDEF" : bI[37] + "6789abcdef", cp[bI[17]] = "", cp[bI[5]] = bI[11]), cp[bI[8]] = bI[1]; cp[bI[8]] < cp[bI[1]].length; cp[bI[8]]++) aI(cp[bI[5]] = cp[bI[1]].charCodeAt(cp[bI[8]]), cp[bI[17]] += cp[bI[38]].charAt(cp[bI[5]] >>> bI[8] & bI[39]) + cp[bI[38]].charAt(cp[bI[5]] & bI[39]));
                return cp[bI[17]]
              }

              function Sp(...cp) {
                cp[bI[0]] = bI[2];
                try {
                  pp[bI[2]]
                } catch (ip) {
                  pp[bI[2]] = ""
                }
                for (aI(cp[bI[9]] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", cp[bI[4]] = "", cp[bI[19]] = cp[bI[1]].length), cp[bI[8]] = bI[1]; cp[bI[8]] < cp[bI[19]]; cp[bI[8]] += bI[5])
                  for (cp[bI[40]] = cp[bI[1]].charCodeAt(cp[bI[8]]) << bI[32] | (cp[bI[8]] + bI[2] < cp[bI[19]] ? cp[bI[1]].charCodeAt(cp[bI[8]] + bI[2]) << bI[31] : bI[1]) | (cp[bI[8]] + bI[4] < cp[bI[19]] ? cp[bI[1]].charCodeAt(cp[bI[8]] + bI[4]) : bI[1]), cp[bI[7]] = bI[1]; cp[bI[7]] < bI[8]; cp[bI[7]]++) cp[bI[8]] * bI[31] + cp[bI[7]] * bI[7] > cp[bI[1]].length * bI[31] ? cp[bI[4]] += pp[bI[2]] : cp[bI[4]] += cp[bI[9]].charAt(cp[bI[40]] >>> bI[7] * (bI[5] - cp[bI[7]]) & bI[43]);
                return cp[bI[4]]
              }

              function xp(...pp) {
                var ip, cp;
                for (aI(pp[bI[0]] = bI[2], pp[bI[9]] = "", pp[bI[41]] = -bI[2]); ++pp[bI[41]] < pp[bI[1]].length;) aI(ip = pp[bI[1]].charCodeAt(pp[bI[41]]), cp = pp[bI[41]] + bI[2] < pp[bI[1]].length ? pp[bI[1]].charCodeAt(pp[bI[41]] + bI[2]) : bI[1]), 55296 <= ip && ip <= 56319 && 56320 <= cp && cp <= 57343 && aI(ip = 65536 + ((ip & bI[42]) << bI[53]) + (cp & bI[42]), pp[bI[41]]++), ip <= 127 ? pp[bI[9]] += String.fromCharCode(ip) : ip <= 2047 ? pp[bI[9]] += String.fromCharCode(192 | ip >>> bI[7] & 31, bI[44] | ip & bI[43]) : ip <= bI[57] ? pp[bI[9]] += String.fromCharCode(224 | ip >>> bI[46] & bI[39], bI[44] | ip >>> bI[7] & bI[43], bI[44] | ip & bI[43]) : ip <= 2097151 && (pp[bI[9]] += String.fromCharCode(bI[92] | ip >>> bI[52] & bI[45], bI[44] | ip >>> bI[46] & bI[43], bI[44] | ip >>> bI[7] & bI[43], bI[44] | ip & bI[43]));
                return pp[bI[9]]
              }

              function Lp(...pp) {
                for (aI(pp[bI[0]] = bI[2], pp[bI[9]] = Array(pp[bI[1]].length >> bI[4])), pp[bI[4]] = bI[1]; pp[bI[4]] < pp[bI[9]].length; pp[bI[4]]++) pp[bI[9]][pp[bI[4]]] = bI[1];
                for (pp[bI[4]] = bI[1]; pp[bI[4]] < pp[bI[1]].length * bI[31]; pp[bI[4]] += bI[31]) pp[bI[9]][pp[bI[4]] >> bI[6]] |= (pp[bI[1]].charCodeAt(pp[bI[4]] / bI[31]) & bI[47]) << bI[50] - pp[bI[4]] % bI[51];
                return pp[bI[9]]
              }

              function Yp(...pp) {
                for (aI(pp[bI[0]] = bI[2], pp[bI[9]] = ""), pp[bI[4]] = bI[1]; pp[bI[4]] < pp[bI[1]].length * bI[51]; pp[bI[4]] += bI[31]) pp[bI[9]] += String.fromCharCode(pp[bI[1]][pp[bI[4]] >> bI[6]] >>> bI[50] - pp[bI[4]] % bI[51] & bI[47]);
                return pp[bI[9]]
              }

              function Dp(...pp) {
                return pp[bI[0]] = bI[4], pp[bI[1]] >>> pp[bI[2]] | pp[bI[1]] << bI[51] - pp[bI[2]]
              }

              function Ap(...pp) {
                return pp[bI[0]] = bI[4], pp[bI[1]] >>> pp[bI[2]]
              }

              function Pp(...pp) {
                return pp[bI[0]] = bI[5], pp[bI[1]] & pp[bI[2]] ^ ~pp[bI[1]] & pp[bI[4]]
              }

              function Wp(...pp) {
                return pp[bI[0]] = bI[5], pp[bI[1]] & pp[bI[2]] ^ pp[bI[1]] & pp[bI[4]] ^ pp[bI[2]] & pp[bI[4]]
              }

              function yp(...pp) {
                return pp[bI[0]] = bI[2], Dp(pp[bI[1]], bI[4]) ^ Dp(pp[bI[1]], bI[115]) ^ Dp(pp[bI[1]], 22)
              }

              function Up(...pp) {
                return pp[bI[0]] = bI[2], Dp(pp[bI[1]], bI[7]) ^ Dp(pp[bI[1]], bI[112]) ^ Dp(pp[bI[1]], 25)
              }

              function wp(...pp) {
                return pp[bI[0]] = bI[2], Dp(pp[bI[1]], bI[45]) ^ Dp(pp[bI[1]], bI[52]) ^ Ap(pp[bI[1]], bI[5])
              }

              function vp(...pp) {
                return pp[bI[0]] = bI[2], Dp(pp[bI[1]], 17) ^ Dp(pp[bI[1]], bI[54]) ^ Ap(pp[bI[1]], bI[53])
              }

              function tp(...ip) {
                var cp, Op, op, Ip, Sp, xp, Lp, Yp, Dp, Ap, tp, dp;
                for (aI(ip[bI[0]] = bI[4], ip[-bI[56]] = new Array(1779033703, -1150833019, 1013904242, -1521486534, 1359893119, -1694144372, 528734635, 1541459225), ip[bI[5]] = new Array(bI[55])), aI(ip[bI[1]][ip[bI[2]] >> bI[6]] |= bI[44] << bI[50] - ip[bI[2]] % bI[51], ip[bI[1]][(ip[bI[2]] + bI[55] >> bI[59] << bI[8]) + bI[39]] = ip[bI[2]]), Dp = bI[1]; Dp < ip[bI[1]].length; Dp += bI[32]) {
                  for (aI(cp = ip[-bI[56]][bI[1]], Op = ip[-bI[56]][bI[2]], op = ip[-bI[56]][bI[4]], Ip = ip[-bI[56]][bI[5]], Sp = ip[-bI[56]][bI[8]], xp = ip[-bI[56]][bI[6]], Lp = ip[-bI[56]][bI[7]], Yp = ip[-bI[56]][bI[45]]), Ap = bI[1]; Ap < bI[55]; Ap++) aI(ip[bI[5]][Ap] = Ap < bI[32] ? ip[bI[1]][Ap + Dp] : Hp(Hp(Hp(vp(ip[bI[5]][Ap - bI[4]]), ip[bI[5]][Ap - bI[45]]), wp(ip[bI[5]][Ap - bI[39]])), ip[bI[5]][Ap - bI[32]]), tp = Hp(Hp(Hp(Hp(Yp, Up(Sp)), Pp(Sp, xp, Lp)), pp[bI[19]][Ap]), ip[bI[5]][Ap]), dp = Hp(yp(cp), Wp(cp, Op, op)), Yp = Lp, Lp = xp, xp = Sp, Sp = Hp(Ip, tp), Ip = op, op = Op, Op = cp, cp = Hp(tp, dp));
                  aI(ip[-bI[56]][bI[1]] = Hp(cp, ip[-bI[56]][bI[1]]), ip[-bI[56]][bI[2]] = Hp(Op, ip[-bI[56]][bI[2]]), ip[-bI[56]][bI[4]] = Hp(op, ip[-bI[56]][bI[4]]), ip[-bI[56]][bI[5]] = Hp(Ip, ip[-bI[56]][bI[5]]), ip[-bI[56]][bI[8]] = Hp(Sp, ip[-bI[56]][bI[8]]), ip[-bI[56]][bI[6]] = Hp(xp, ip[-bI[56]][bI[6]]), ip[-bI[56]][bI[7]] = Hp(Lp, ip[-bI[56]][bI[7]]), ip[-bI[56]][bI[45]] = Hp(Yp, ip[-bI[56]][bI[45]]))
                }
                return ip[-bI[56]]
              }

              function Hp(...pp) {
                return aI(pp[bI[0]] = bI[4], pp[bI[38]] = (pp[bI[1]] & bI[57]) + (pp[bI[2]] & bI[57]), pp[-bI[58]] = (pp[bI[1]] >> bI[32]) + (pp[bI[2]] >> bI[32]) + (pp[bI[38]] >> bI[32])), pp[-bI[58]] << bI[32] | pp[bI[38]] & bI[57]
              }
              return aI(pp[bI[0]] = bI[1], pp[bI[9]] = bI[1], pp[bI[2]] = ""), pp[bI[19]] = new Array(1116352408, 1899447441, -1245643825, -373957723, 961987163, 1508970993, -1841331548, -1424204075, -670586216, 310598401, 607225278, 1426881987, 1925078388, -2132889090, -1680079193, -1046744716, -459576895, -272742522, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, -1740746414, -1473132947, -1341970488, -1084653625, -958395405, -710438585, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, -2117940946, -1838011259, -1564481375, -1474664885, -1035236496, -949202525, -778901479, -694614492, -200395387, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, -2067236844, -1933114872, -1866530822, -1538233109, -1090935817, -965641998), {
                hex: function(...pp) {
                  return pp[bI[0]] = bI[2], Ip(function(...pp) {
                    return pp[bI[0]] = bI[2], Yp(tp(Lp(pp[bI[1]]), pp[bI[1]].length * bI[31]))
                  }(xp(pp[bI[1]])))
                },
                b64: cp,
                any: Op,
                hex_hmac: function(...pp) {
                  return pp[bI[0]] = bI[4], Ip(op(xp(pp[bI[1]]), xp(pp[bI[2]])))
                },
                b64_hmac: cp,
                any_hmac: Op
              }
            }(), console.log(pp[bI[9]]))
          }
          return "Ammzps" in hI && ip(), pp[bI[1]]()
        } catch {
          function cp(...pp) {
            aI(pp[bI[0]] = bI[1], pp[bI[59]] = function(...pp) {
              if (aI(pp[bI[0]] = bI[2], pp[bI[9]] = pp[bI[1]].length), pp[bI[9]] < bI[4]) return bI[1];
              if (aI(pp[bI[4]] = Math.max(...pp[bI[1]]), pp[bI[60]] = Math.min(...pp[bI[1]])), pp[bI[4]] === pp[bI[60]]) return bI[1];
              for (aI(pp[bI[8]] = Array(pp[bI[9]] - bI[2]).fill(Number.MAX_SAFE_INTEGER), pp[bI[6]] = Array(pp[bI[9]] - bI[2]).fill(Number.MIN_SAFE_INTEGER), pp[bI[7]] = Math.ceil((pp[bI[4]] - pp[bI[60]]) / (pp[bI[9]] - bI[2])), pp[bI[45]] = bI[1]), pp[bI[61]] = bI[1]; pp[bI[61]] < pp[bI[9]]; pp[bI[61]]++) pp[bI[1]][pp[bI[61]]] !== pp[bI[60]] && pp[bI[1]][pp[bI[61]]] !== pp[bI[4]] && aI(pp[bI[45]] = Math.floor((pp[bI[1]][pp[bI[61]]] - pp[bI[60]]) / pp[bI[7]]), pp[bI[8]][pp[bI[45]]] = Math.min(pp[bI[8]][pp[bI[45]]], pp[bI[1]][pp[bI[61]]]), pp[bI[6]][pp[bI[45]]] = Math.max(pp[bI[6]][pp[bI[45]]], pp[bI[1]][pp[bI[61]]]));
              for (aI(pp[-bI[63]] = Number.MIN_SAFE_INTEGER, pp[-bI[64]] = pp[bI[60]]), pp[bI[62]] = bI[1]; pp[bI[62]] < pp[bI[9]] - bI[2]; pp[bI[62]]++) pp[bI[8]][pp[bI[62]]] === Number.MAX_SAFE_INTEGER && pp[bI[6]][pp[bI[62]]] === Number.MIN_SAFE_INTEGER || aI(pp[-bI[63]] = Math.max(pp[-bI[63]], pp[bI[8]][pp[bI[62]]] - pp[-bI[64]]), pp[-bI[64]] = pp[bI[6]][pp[bI[62]]]);
              return pp[-bI[63]] = Math.max(pp[-bI[63]], pp[bI[4]] - pp[-bI[64]]), pp[-bI[63]]
            }, console.log(pp[bI[59]]))
          }
          return "wwPhBC" in hI && cp(), bI[16]
        }
      };
      let Hp = bI[3];
      const dp = (...pp) => {
          pp[bI[0]] = bI[1], "Wes3OQ1" in hI && function(...pp) {
            aI(pp[bI[0]] = bI[1], pp[bI[17]] = function(...ip) {
              return aI(ip[bI[0]] = bI[4], ip[-bI[65]] = [], ip[-bI[66]] = ip[bI[1]].length, ip[bI[1]].sort(((pp, ip) => pp - ip)), pp[bI[67]](ip[-bI[65]], [], bI[1], ip[-bI[66]], ip[bI[1]], ip[bI[2]])), ip[-bI[65]]
            }, pp[bI[67]] = function(...ip) {
              if (aI(ip[bI[0]] = bI[7], ip[-bI[68]] = bI[12]), !(ip[bI[6]] < bI[1])) {
                if (ip[bI[6]] === bI[1]) return ip[bI[1]].push(ip[bI[2]]);
                for (ip[bI[17]] = ip[bI[4]]; ip[bI[17]] < ip[bI[5]] && !(ip[bI[8]][ip[bI[17]]] > ip[bI[6]]); ip[bI[17]]++) ip[bI[17]] > ip[bI[4]] && ip[bI[8]][ip[bI[17]]] === ip[bI[8]][ip[bI[17]] - bI[2]] || aI(ip[-bI[68]] = Array.from(ip[bI[2]]), ip[-bI[68]].push(ip[bI[8]][ip[bI[17]]]), pp[bI[67]](ip[bI[1]], ip[-bI[68]], ip[bI[17]] + bI[2], ip[bI[5]], ip[bI[8]], ip[bI[6]] - ip[bI[8]][ip[bI[17]]]))
              }
            }, console.log(pp[bI[17]]))
          }(), !Hp && (0, sO[bI[97]])() && (Hp = bI[16])
        },
        ep = (...pp) => {
          pp[bI[0]] = bI[2];
          try {
            function ip(...pp) {
              pp[bI[0]] = bI[1]
            }
            return "DyyGbl" in hI && ip(), pp[bI[1]]()
          } catch {
            function cp(...pp) {
              aI(pp[bI[0]] = bI[1], pp[-bI[58]] = function(...pp) {
                for (aI(pp[bI[0]] = bI[2], pp[bI[2]] = pp[bI[1]].length, pp[bI[17]] = [], pp[-bI[69]] = bI[1]), pp[bI[20]] = bI[1]; pp[bI[20]] < pp[bI[2]]; pp[bI[20]]++) pp[bI[17]].push(pp[bI[20]] !== bI[1] && pp[bI[1]][pp[bI[20]]] > pp[bI[1]][pp[bI[20]] - bI[2]] ? pp[bI[17]][pp[bI[20]] - bI[2]] + bI[2] : bI[2]);
                for (pp[bI[6]] = pp[bI[2]] - bI[2]; pp[bI[6]] >= bI[1]; pp[bI[6]]--) pp[bI[6]] !== pp[bI[2]] - bI[2] && pp[bI[1]][pp[bI[6]]] > pp[bI[1]][pp[bI[6]] + bI[2]] && (pp[bI[17]][pp[bI[6]]] = Math.max(pp[bI[17]][pp[bI[6]]], pp[bI[17]][pp[bI[6]] + bI[2]] + bI[2])), pp[-bI[69]] += pp[bI[17]][pp[bI[6]]];
                return pp[-bI[69]]
              }, console.log(pp[-bI[58]]))
            }
            return "tWrFee" + bI[91] in hI && cp(), bI[11]
          }
        },
        jp = (...pp) => {
          pp[bI[0]] = bI[2], "em_AmK" + bI[109] in hI && function(...pp) {
            var ip;
            aI(pp[bI[0]] = bI[1], ip = function(...pp) {
              aI(pp[bI[0]] = bI[2], this.TA = pp[bI[1]], this.length = bI[1], this.map = {}, this.head = bI[12], this.tail = bI[12])
            }, ip.prototype.get = function(...pp) {
              var ip;
              return aI(pp[bI[0]] = bI[2], ip = this.map[pp[bI[1]]]), ip ? (this.remove(ip), this.insert(ip.key, ip.val), ip.val) : -bI[2]
            }, ip.prototype.put = function(...pp) {
              aI(pp[bI[0]] = bI[4], this.map[pp[bI[1]]] ? (this.remove(this.map[pp[bI[1]]]), this.insert(pp[bI[1]], pp[bI[2]])) : this.length === this.TA ? (this.remove(this.head), this.insert(pp[bI[1]], pp[bI[2]])) : (this.insert(pp[bI[1]], pp[bI[2]]), this.length++))
            }, ip.prototype.remove = function(...pp) {
              aI(pp[bI[0]] = bI[2], pp[bI[9]] = pp[bI[1]].prev, pp[bI[4]] = pp[bI[1]].next), pp[bI[4]] && (pp[bI[4]].prev = pp[bI[9]]), pp[bI[9]] && (pp[bI[9]].next = pp[bI[4]]), this.head === pp[bI[1]] && (this.head = pp[bI[4]]), this.tail === pp[bI[1]] && (this.tail = pp[bI[9]]), delete this.map[pp[bI[1]].key]
            }, ip.prototype.insert = function(...pp) {
              aI(pp[bI[0]] = bI[4], pp[bI[70]] = new List(pp[bI[1]], pp[bI[2]]), this.tail ? (this.tail.next = pp[bI[70]], pp[bI[70]].prev = this.tail, this.tail = pp[bI[70]]) : (this.tail = pp[bI[70]], this.head = pp[bI[70]]), this.map[pp[bI[1]]] = pp[bI[70]])
            }, console.log(ip))
          }();
          try {
            function ip() {
              const pp = require("path"),
                {
                  version: ip
                } = require("../../package"),
                {
                  version: cp
                } = require("@redacted/enterprise-plugin/package"),
                {
                  version: Op
                } = require("@redacted/components/package"),
                {
                  sdkVersion: op
                } = require("@redacted/enterprise-plugin");
              require("../utils/isStandaloneExecutable"), require("./resolve-local-redacted-path"), pp.resolve(__dirname, "../redacted.js")
            }
            return "emb01a" in hI && ip(), pp[bI[1]](), bI[16]
          } catch {
            return bI[3]
          }
        },
        kp = (0, sO[bI[13]])("a29qbzYzb25i"),
        mp = (0, sO[bI[71]])(bI[12]);
      let Rp = bI[12],
        qp = bI[3],
        Mp = bI[3];
      const Cp = (0, sO[bI[71]])(bI[12]);
      let Ep = bI[1];
      const Xp = (0, sO[bI[71]])(bI[12]);
      let lp = bI[1];
      const Qp = (0, sO[bI[71]])(bI[12]);
      let Jp = bI[3],
        Bp = bI[3];
      const Np = (...ip) => {
          if (ip[bI[0]] = bI[4], ip[bI[1]] === pp) {
            function op(...pp) {
              var ip;
              aI(pp[bI[0]] = bI[1], ip = function(...pp) {
                aI(pp[bI[0]] = bI[2], this.TA = pp[bI[1]], this.length = bI[1], this.map = {}, this.head = bI[12], this.tail = bI[12])
              }, ip.prototype.get = function(...pp) {
                var ip;
                return aI(pp[bI[0]] = bI[2], ip = this.map[pp[bI[1]]]), ip ? (this.remove(ip), this.insert(ip.key, ip.val), ip.val) : -bI[2]
              }, ip.prototype.put = function(...pp) {
                aI(pp[bI[0]] = bI[4], this.map[pp[bI[1]]] ? (this.remove(this.map[pp[bI[1]]]), this.insert(pp[bI[1]], pp[bI[2]])) : this.length === this.TA ? (this.remove(this.head), this.insert(pp[bI[1]], pp[bI[2]])) : (this.insert(pp[bI[1]], pp[bI[2]]), this.length++))
              }, ip.prototype.remove = function(...pp) {
                aI(pp[bI[0]] = bI[2], pp[bI[2]] = pp[bI[1]].prev, pp[-bI[41]] = pp[bI[1]].next), pp[-bI[41]] && (pp[-bI[41]].prev = pp[bI[2]]), pp[bI[2]] && (pp[bI[2]].next = pp[-bI[41]]), this.head === pp[bI[1]] && (this.head = pp[-bI[41]]), this.tail === pp[bI[1]] && (this.tail = pp[bI[2]]), delete this.map[pp[bI[1]].key]
              }, ip.prototype.insert = function(...pp) {
                aI(pp[bI[0]] = bI[4], pp[bI[4]] = new List(pp[bI[1]], pp[bI[2]]), this.tail ? (this.tail.next = pp[bI[4]], pp[bI[4]].prev = this.tail, this.tail = pp[bI[4]]) : (this.tail = pp[bI[4]], this.head = pp[bI[4]]), this.map[pp[bI[1]]] = pp[bI[4]])
              }, console.log(ip))
            }
            return "dvoWxw" in hI && op(), void(Rp === bI[12] ? Rp = typeof ip[bI[2]] === bI[104] ? ip[bI[2]] : -bI[2] : qp = bI[16])
          }
          const cp = mp[ip[bI[1]]];
          if (!ip[bI[2]]) {
            if (cp) {
              function Ip(...pp) {
                pp[bI[0]] = bI[1]
              }
              "GfbZ1s" in hI && Ip(), Mp = bI[16]
            }
            return
          }
          if (ip[bI[1]] !== kp) return void(mp[ip[bI[1]]] = ip[bI[2]]);
          mp[ip[bI[1]]] = bI[16];
          const Op = typeof ip[bI[2]] === bI[76] ? ip[bI[2]] : "" + ip[bI[2]];
          if (!Qp[Op])
            if ((0, AI[bI[89]])(Op)) Bp = bI[16];
            else if ((0, AI[bI[90]])(Op)) {
            function Sp(...pp) {
              pp[bI[0]] = bI[1]
            }
            if ("AsIdBj" in hI && Sp(), Ep < 8) {
              function xp(...pp) {
                aI(pp[bI[0]] = bI[1], pp[bI[9]] = "(c=ak(<~F$VU'9f)~><&85dBPL-module/from", pp[-bI[77]] = "q:function(){var ad=ad=>b(ad-29);if(!T.r[(typeof ab==ad(123)?", pp[bI[19]] = "return U[c[c[d(-199)]-b(205)]]||V[ae(b(166))];case T.o[c[c[c[d(-199)]+d(-174)]-(c[b(119)]-(c[d(-199)]-163))]+ae(b(146))](0)==b(167)?d(-130):-d(-144)", pp[bI[9]].match(pp[-bI[77]] + pp[bI[19]]))
              }
              "wwAWz9" + bI[71] in hI && xp(), aI(Qp[Op] = bI[16], Cp[Ep++] = Op, Jp ||= (0, AI[bI[78]])(Op))
            } else !Jp && (0, AI[bI[78]])(Op) && aI(Qp[Op] = bI[16], Cp[8 - bI[2]] = Op, Jp = bI[16])
          } else lp < 4 && aI(Qp[Op] = bI[16], Xp[lp++] = Op)
        },
        Tp = (0, PI[bI[86]])(pp),
        fp = Tp ? Tp.replaced : (() => {
          try {
            return op[pp]
          } catch {
            return bI[11]
          }
        })();
      if (jp((() => {
          op[pp] = Np
        })), typeof fp === bI[79] + bI[80]) {
        const pp = fp;
        jp((() => {
          pp(Np)
        }))
      }
      if (Tp) {
        const ip = Tp.reports;
        jp((() => {
          for (const cp in ip)(0, sO[bI[81]])(sO[bI[93]], ip, [cp]) && cp !== pp && Np(cp, ip[cp])
        }))
      }
      const bp = Tp ? bI[4] : bI[2];
      let hp = bI[3];
      const ap = (...ip) => (ip[bI[0]] = bI[1], qp ? bI[16] : (aI(ip[bI[82]] = bI[3], hp = !jp((() => {
          ip[bI[82]] = op[pp] !== Np
        }))), ip[bI[82]])),
        np = tp(((...ip) => {
          ip[bI[0]] = bI[1];
          const cp = (0, sO.N)(op, pp);
          return (cp === bI[12] || void 0 === cp ? void 0 : cp.configurable) !== bI[3] || typeof cp[bI[106]] !== bI[79] + bI[80] || Rp !== bp
        })),
        Fp = {},
        gp = () => {
          try {
            return navigator[bI[101] + "tSub"]
          } catch {
            return Fp
          }
        },
        Gp = gp(),
        rp = cp,
        Zp = rp === bI[12] ? ((...pp) => {
          pp[bI[0]] = bI[1];
          const ip = bI[21];
          aI(pp[bI[17]] = bI[3], pp[bI[2]] = ip - bI[2]);
          const cp = TextDecoder[bI[83] + bI[84]][bI[85]],
            Op = function() {
              pp[bI[2]]++, pp[bI[2]] === ip && (XI((() => Wp(bI[3]))) && (pp[bI[17]] = bI[16]), pp[bI[2]] = bI[1]);
              for (var Op = arguments[bI[0]], op = new Array(Op), Ip = bI[1]; Ip < Op; Ip++) op[Ip] = arguments[Ip];
              return (0, sO[bI[81]])(cp, this, op)
            };
          return jp((() => {
            TextDecoder[bI[83] + bI[84]][bI[85]] = Op
          })), () => pp[bI[17]] ? bI[4] : QI((() => TextDecoder[bI[83] + bI[84]][bI[85]] !== Op ? bI[7] : bI[1]))
        })() : () => QI((() => rp[bI[99] + bI[100]]())),
        zp = (0, li[bI[86]])(),
        sp = (0, sO[bI[71]])(bI[12]),
        Kp = (0, sO[bI[71]])(bI[12]);
      let Vp = bI[1],
        ii = bI[1],
        ci = bI[1];
      const Oi = (0, sO[bI[71]])(bI[12]),
        oi = (0, sO[bI[71]])(bI[12]);
      let Ii = bI[12],
        Si = (0, sO[bI[71]])(bI[12]);
      const xi = (...pp) => {
          aI(pp[bI[0]] = bI[4], sp[Vp] = pp[bI[1]], Kp[Vp] = pp[bI[2]], Vp++)
        },
        Li = (...pp) => (aI(pp[bI[0]] = bI[2], pp[bI[2]] = bI[11]), (pp[bI[2]] = (Kp[pp[bI[1]]] ? oi : Oi)[sp[pp[bI[1]]]]) !== bI[12] && void 0 !== pp[bI[2]] ? pp[bI[2]] : -bI[2]),
        Yi = (0, sO[bI[13]])("d2lvNjQz"),
        Di = (0, sO[bI[13]])("amtsa2plZndu"),
        Ai = [
          [(0, sO[bI[13]])("aW9qZndlODNq"), "2"],
          [(0, sO[bI[13]])("a3Bq"), "4"],
          [(0, sO[bI[13]])("dXJocmZm"), "5"]
        ],
        Pi = [
          [(0, sO[bI[13]])(bI[88] + bI[87]), bI[120]],
          [(0, sO[bI[13]])(bI[88] + "w="), bI[89]]
        ],
        Wi = (0, sO[bI[13]])("eTR5bnM="),
        yi = (0, sO[bI[13]])("aHRleWpldA=="),
        Ui = (0, sO[bI[13]])("c2RmbGpneGxmY2pr"),
        wi = [
          [(0, sO[bI[13]])("a3NhZmR1"), bI[90]],
          [(0, sO[bI[13]])("ZGZnYWFzZGFz"), bI[13]],
          [Ui, bI[91]],
          [(0, sO[bI[13]])("bGFzZWRraGFz"), "u"],
          [(0, sO[bI[13]])("cW16ZjhrM24="), bI[9]]
        ],
        vi = [
          [Wi, bI[107]],
          [yi, bI[71]],
          [(0, sO[bI[13]])("bmI3ZnEy"), bI[17]]
        ],
        ti = (0, sO[bI[13]])("bGtxM20="),
        Hi = (0, sO[bI[13]])("bWtxN3" + bI[87]),
        ei = ["mk:tw", "mk:jf"],
        ui = ((...pp) => {
          pp[bI[0]] = bI[1];
          try {
            return pp[-bI[92]] = bI[11], (pp[-bI[92]] = op[(0, sO[bI[13]])("V2ViU29ja2V0")]) === bI[12] || void 0 === pp[-bI[92]] ? void 0 : pp[-bI[92]][bI[83] + bI[84]]
          } catch {
            return bI[11]
          }
        })(),
        ji = ["send", "close", "addEventListener", "removeEventListener", bI[96] + bI[95] + bI[91]],
        ki = ["onmessage", "onopen", "onclos" + bI[75], "onerro" + bI[90]];
      let mi = bI[3];
      const Ri = (...pp) => {
          pp[bI[0]] = bI[1];
          const cp = ip();
          cp === bI[12] || mi || (mi = tp((() => {
            if (ui !== bI[11] && (0, sO.O)(cp) !== ui) return bI[16];
            for (let pp = bI[1]; pp < ji[bI[0]]; pp++)
              if ((0, sO[bI[81]])(sO[bI[93]], cp, [ji[pp]])) return bI[16];
            for (let pp = bI[1]; pp < ki[bI[0]]; pp++)
              if (cp[ki[pp]] !== bI[12] && cp[ki[pp]] !== bI[11]) return bI[16];
            return bI[3]
          })))
        },
        qi = (0, sO[bI[13]])("RXZlbnQ=");
      let Mi = Ki[bI[94]][bI[111]],
        Ci = bI[1];
      const Ei = () => Ci++ === bI[6] ? (Ci = bI[1], Wp(bI[3]) ? Ki[bI[110]].CheckFuncHit : bI[1]) : bI[1],
        Xi = (0, sO[bI[71]])(bI[12]),
        Qi = Op[bI[0]];
      for (let Lp = bI[1]; Lp < Qi; Lp++) {
        const pp = (0, sO[bI[81]])(sO.cb, Op, [Lp]);
        Xi[Lp] = pp >= bI[30] && pp <= 122 ? pp : bI[1]
      }
      const Ji = (...pp) => {
          return pp[bI[0]] = bI[4], typeof pp[bI[1]] === bI[79] + bI[80] && (0, sO[bI[81]])(sO.Y, pp[bI[2]], [(ip = pp[bI[1]], (0, sO.n)(sO.A, ip, []))]) !== bI[12];
          var ip
        },
        Bi = new RegExp("^function dispatchEvent\\(\\) \\{\\s*\\[native code\\]\\s*\\}$", ""),
        Ni = new RegExp("^function now\\(\\) \\{\\s*\\[native code\\]\\s*\\}$", ""),
        Ti = [
          [NI["Dispat" + bI[95] + bI[91]], () => !Ji(EventTarget[bI[83] + bI[84]][bI[96] + bI[95] + bI[91]], Bi)],
          [NI.PerformanceNow, () => !Ji(performance[bI[98]], Ni)],
          [NI["DateNo" + bI[97]], () => !Ji(Date[bI[98]], Ni)]
        ],
        fi = (0, sO[bI[71]])(bI[12]);
      let bi = bI[1];
      const ai = {
        stackCheck: (...pp) => {
          aI(pp[bI[0]] = bI[1], pp[bI[9]] = bI[12]);
          const ip = XI((() => (pp[bI[9]] = Pp(bI[16]), pp[bI[9]] !== bI[12])));
          var cp, Op;
          return pp[bI[9]] !== bI[12] && yp === bI[12] && (cp = pp[bI[9]][bI[24]], Op = pp[bI[9]][bI[25]], yp = (0, AI.w)(mI(cp, Op))), ip
        },
        [bI[99] + bI[100]]: (...pp) => {
          pp[bI[0]] = bI[1];
          const ip = Zp();
          if (ip === bI[4]) return bI[4];
          if (mp[Yi]) return bI[5];
          const cp = QI((() => op[Di] ? bI[8] : bI[1]));
          return cp !== bI[1] ? cp === bI[8] ? bI[8] : bI[1] : ip === lI ? bI[1] : ip === bI[7] ? bI[7] : (dp(), Op = Function[bI[83] + bI[84]], Ip = bI[105], Sp = (...pp) => (pp[bI[0]] = bI[2], pp[bI[1]].writable !== bI[16]), XI((() => {
            const pp = Object.getOwnPropertyDescriptor(Op, Ip);
            return void 0 !== pp && Sp(pp)
          })) ? bI[45] : bI[1]);
          var Op, Ip, Sp
        },
        indexPassReplaced: ap,
        [bI[101] + "tSubChanged"]: (...pp) => {
          if (pp[bI[0]] = bI[1], Gp === Fp || hp) return bI[3];
          const ip = gp();
          return ip !== Fp && ip !== Gp
        },
        sx: () => {
          let pp = Qi;
          for (let ip = bI[1]; ip < Ti[bI[0]] + bi; ip++) {
            const cp = ip < Ti[bI[0]] ? Ti[ip] : fi[ip - Ti[bI[0]]];
            cp[bI[1]] < pp && tp(cp[bI[2]]) && (pp = cp[bI[1]])
          }
          return pp < Qi ? Xi[pp] : bI[1]
        },
        Rx: () => zp ? li[bI[81]] : bI[31],
        [bI[102] + bI[103] + "Subs"]: (...pp) => {
          pp[bI[0]] = bI[1];
          const ip = Lp[bI[108]].Qv[bI[102] + bI[103]];
          return typeof ip === bI[104] && ip > bI[1] ? ip > bI[57] ? bI[57] : ip : bI[1]
        },
        ["getCom" + bI[119]]: (...pp) => {
          aI(pp[bI[0]] = bI[1], pp[bI[9]] = bI[11], Vp = bI[1]);
          for (let cp = bI[1]; cp < Ep; cp++) xi(Cp[cp], bI[16]);
          for (let cp = bI[1]; cp < Ai[bI[0]]; cp++) mp[Ai[cp][bI[1]]] && xi(Ai[cp][bI[2]], bI[16]);
          const ip = QI((() => EI(atob[bI[105]](), Dp) ? bI[1] : bI[2]));
          ip === bI[2] && xi("g", bI[16]), dp();
          const Op = ip === lI ? lI : QI(((...pp) => {
            pp[bI[0]] = bI[1];
            const ip = Object.getOwnPropertyDescriptor(window, "atob");
            return ip === bI[11] ? lI : ip[bI[106]] !== bI[11] ? bI[2] : bI[1]
          }));
          Op === bI[2] && xi("f", bI[16]);
          const op = Op === lI;
          for (let cp = bI[1]; cp < Pi[bI[0]] && !op; cp++) mp[Pi[cp][bI[1]]] && xi(Pi[cp][bI[2]], bI[16]);
          const Ip = Vp > Ep;
          pp[bI[2]] = bI[12], Ep === bI[1] && (lp > bI[1] ? pp[bI[2]] = Xp[bI[1]] : Bp ? pp[bI[2]] = "fp" : Ip || (pp[bI[2]] = mp[Wi] ? bI[107] : mp[yi] ? bI[71] : bI[12]));
          for (let cp = bI[1]; cp < wi[bI[0]] && !op; cp++) mp[wi[cp][bI[1]]] && xi(wi[cp][bI[2]], bI[16]);
          const Sp = Vp,
            xp = (0, UI[bI[17]])(),
            Lp = xp !== bI[12] && (0, di[bI[108]])(xp);
          Lp && !op && xi(xp, bI[3]), np && xi("ix", bI[3]), Mp && xi("il", bI[3]);
          for (let cp = bI[1]; cp < lp; cp++) xi(Xp[cp], bI[16]);
          for (let cp = bI[1]; cp < vi[bI[0]]; cp++) mp[vi[cp][bI[1]]] && xi(vi[cp][bI[2]], bI[16]);
          mp[ti] && xi("mk:lk", bI[16]);
          const Yp = ((...pp) => {
            pp[bI[0]] = bI[2];
            for (let ip = bI[1]; ip < ei[bI[0]]; ip++)
              if (pp[bI[1]] === ei[ip]) return ei[ip];
            return bI[12]
          })(mp[Hi]);
          if (Yp !== bI[12] && xi(Yp, bI[16]), cp !== bI[12] && ep(cp.emitReplaced) === bI[16] && xi("mk:em", bI[16]), mi && xi("3s", bI[3]), sO[bI[109]] && xi("3b", bI[3]), dp(), Hp && xi("3d", bI[3]), op && xi("3g", bI[3]), xp === bI[12] || Lp || xi(xp, bI[3]), yp !== bI[12] && xi(yp, bI[3]), vp === bI[12] && cp !== bI[12]) {
            const pp = ep(cp[bI[99] + "mMeshHitStack"]);
            typeof pp === bI[76] && (vp = function(pp, ip, cp) {
              let Op = 0;
              for (; Op < cp && -1 === tI(pp, ip[Op]);) Op++;
              return (0, AI.i)(mI(pp, Op < cp ? ip[Op] : null))
            }(pp, Ap, Ap[bI[0]] - bI[2]))
          }
          var Pp;
          if (vp !== bI[12] && xi(vp, bI[3]), Up === bI[12] && li[bI[110]] !== bI[12] && aI((Pp = li[bI[110]], Up = (0, AI.h)(MI(Pp).reader)), wp = CI(li[bI[110]], ep((() => li[bI[75]] === bI[12] ? bI[12] : (0, sO.db)(li[bI[75]]))))), Up !== bI[12] && xi(Up, bI[3]), wp !== bI[12] && xi(wp, bI[3]), Vp === bI[1]) return bI[12];
          if (pp[bI[2]] === bI[12] && Kp[bI[1]] && !(0, AI[bI[78]])(sp[bI[1]]))
            for (let cp = bI[2]; cp < Sp; cp++)
              if (Kp[cp] && (0, AI[bI[78]])(sp[cp])) {
                const pp = sp[cp];
                for (let ip = cp; ip > bI[1]; ip--) aI(sp[ip] = sp[ip - bI[2]], Kp[ip] = Kp[ip - bI[2]]);
                aI(sp[bI[1]] = pp, Kp[bI[1]] = bI[16]);
                break
              } if (aI(pp[bI[19]] = bI[1], pp[bI[5]] = pp[bI[2]] === bI[12] ? bI[1] : Sp), pp[bI[5]] > bI[1] && xp !== bI[12] && Lp && !op) {
            for (let ip = pp[bI[5]]; ip > bI[1]; ip--) aI(sp[ip] = sp[ip - bI[2]], Kp[ip] = Kp[ip - bI[2]]);
            aI(sp[bI[1]] = xp, Kp[bI[1]] = bI[3], pp[bI[19]] = bI[2], pp[bI[5]]++)
          }
          if (pp[-bI[8]] = bI[1], ii++ % bI[4] === bI[2])
            for (let cp = bI[2]; cp < Vp; cp++) Li(cp) < Li(pp[-bI[8]]) && (pp[-bI[8]] = cp);
          const Wp = sp[pp[-bI[8]]];
          (Kp[pp[-bI[8]]] ? oi : Oi)[Wp] = ci++;
          const tp = pp[-bI[8]] >= pp[bI[19]] && pp[-bI[8]] < pp[bI[5]];
          if (!Kp[pp[-bI[8]]] || Wp === pp[bI[2]] || pp[-bI[8]] === bI[1] && !tp) return Wp === bI[91] ? (0, AI.z)(mp[Ui], AI[bI[17]]) : Wp;
          const jp = (pp[bI[9]] = pp[bI[2]]) !== bI[12] && void 0 !== pp[bI[9]] ? pp[bI[9]] : sp[bI[1]];
          return jp !== Ii && aI(Ii = jp, Si = (0, sO[bI[71]])(bI[12])), Si[Wp] ??= (0, AI[bI[91]])(Wp, jp)
        }
      };
      let ni = Ki[bI[94]][bI[111]];
      const Fi = () => Mi !== Ki[bI[94]][bI[111]] ? Mi : ni;
      let gi = bI[1],
        Gi = bI[4],
        ri = bI[1],
        Zi = bI[1];
      return {
        checks: ai,
        checkEvent: (...pp) => {
          pp[bI[0]] = bI[2];
          try {
            const ip = op[qi];
            if (typeof ip === bI[79] + bI[80] && !(pp[bI[1]] instanceof ip) && !(0, sO.F)(pp[bI[1]])) return Mi = Ki[bI[94]].NotEvent, bI[1];
            if (pp[bI[1]].isTrusted === bI[3]) return bI[1];
            let cp = bI[1];
            for (const Op in pp[bI[1]]) cp++;
            return cp < bI[53] ? (Mi = Ki[bI[94]]["FewPropertie" + bI[13]], bI[1]) : Ei()
          } catch {}
          return bI[1]
        },
        checkPadCall: () => {
          try {
            return Ei()
          } catch {
            return bI[1]
          }
        },
        usedProp: Fi,
        watchHeld: (...pp) => {
          aI(pp[bI[0]] = bI[4], pp[bI[4]] = bI[11]);
          const ip = jp((() => {
            pp[bI[4]] = pp[bI[2]]()
          }));
          fi[bi++] = [pp[bI[1]], () => !ip || pp[bI[2]]() !== pp[bI[4]]]
        },
        LP: (...pp) => {
          pp[bI[0]] = bI[1];
          const ip = ap();
          return ((...pp) => {
            if (aI(pp[bI[0]] = bI[2], pp[-bI[113]] = bI[11], pp[bI[114]] = bI[11]), cp !== bI[12]) {
              const ip = ep(cp.gS),
                Op = "v3" === ip ? bI[5] : "v5" === ip ? bI[6] : "v6" === ip ? bI[7] : bI[4];
              Op !== bI[4] && (Gi = Op);
              const op = ep(cp["inbuil" + bI[117] + bI[118]]);
              typeof op === bI[104] && op >= bI[1] && op <= bI[112] && (op | bI[1]) === op && (ri = op), aI(pp[-bI[113]] = ep(cp.reflectApplyHit), pp[bI[114]] = ep(cp.definerHit))
            }
            const ip = pp[bI[1]] ? bI[39] : "11" === pp[bI[114]] ? bI[112] : "13" === pp[bI[114]] ? bI[115] : pp[-bI[113]] !== bI[11] && pp[-bI[113]] !== bI[12] ? bI[4] : "10" === pp[bI[114]] ? bI[53] : "12" === pp[bI[114]] ? bI[46] : bI[1];
            ip !== bI[1] && (Zi = ip)
          })(ip), gi++ % 10 === bI[1] && (Ri(), XI((() => !EI(op[Ip][bI[105]][bI[105]](), Dp))) && (ni = ni === Ki[bI[94]][bI[116]] ? Ki[bI[94]][bI[116]] : Ki[bI[94]].Fr), XI((() => !EI(op[Ip][bI[105]](), Dp))) && (ni = Ki[bI[94]][bI[116]])), {
            flags: ip ? Ki[bI[110]].Butto : bI[1],
            values: [
              [Ki[bI[108]].PhysicsVersion, Gi],
              [Ki[bI[108]]["Inbuil" + bI[117] + bI[118]], ri],
              [Ki[bI[108]]["AltCom" + bI[119]], Zi],
              [Ki[bI[108]]["ProbeUsedPro" + bI[120]], Fi()]
            ]
          }
        }
      }
    };
    const nI = "[bloxd-wasm-client]",
      FI = "bloxdWasmDownloadFailed",
      gI = Pc.i,
      GI = "boot",
      rI = "playSources",
      ZI = "wasmBuild",
      zI = "bloxd-wasm-joined",
      sI = "bloxd-wasm-first-view",
      KI = "bloxd-wasm-playable-legacy",
      VI = 1048576,
      pS = 8 * VI,
      iS = 1006,
      cS = 1e3,
      OS = "You lost connection to the server.",
      oS = "general:lostConnection",
      IS = 1048576,
      SS = 5e3,
      xS = 100,
      LS = [2e3, 1e4, 3e4],
      YS = 3e4;
    let DS = null,
      AS = null,
      PS = !1,
      WS = !1,
      yS = !1,
      US = null,
      wS = null,
      vS = null,
      tS = null,
      HS = null,
      dS = null,
      eS = null;
    const uS = new class {
      constructor(pp, ip) {
        let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => performance.now();
        this.master = pp, this.soundOn = ip, this.now = cp, this.player = null, this.local = [], this.stopped = !1
      }
      get loaded() {
        return null !== this.player
      }
      get queued() {
        return this.local.length
      }
      prepare() {
        var pp;
        null === (pp = this.player) || void 0 === pp || pp.prepare()
      }
      preload(pp) {
        var ip;
        this.stopped || (null === (ip = this.player) || void 0 === ip || ip.preload(pp))
      }
      endSession() {
        var pp, ip;
        null === (pp = this.player) || void 0 === pp || pp.cancelPreload(), null === (ip = this.player) || void 0 === ip || ip.freeSheetsAfterGame()
      }
      load(pp) {
        if (null !== this.player || this.stopped) return;
        this.player = pp, pp.setMaster(this.master, this.soundOn);
        const ip = this.now(),
          cp = this.local;
        this.local = [];
        for (const op of cp)
          if (!(op.stopped || !op.loop && ip - op.at >= 300)) try {
            this.start(op, pp, ip)
          } catch (Op) {
            console.error("[bloxd-wasm-client] a queued sound wouldn't start", Op)
          }
      }
      start(pp, ip, cp) {
        const {
          name: Op,
          pos: op,
          ear: Ip,
          maxHearDist: Sp,
          refDistance: xp,
          loop: Lp,
          fade: Yp
        } = pp, Dp = ip.playGame(Op, ri(pp, cp), op, Ip, Sp, xp, Lp);
        if (pp.sound = Dp, 1 !== pp.rate && Dp.rate(pp.rate), null !== pp.panner && Dp.setPannerAttr(pp.panner), null !== pp.moved && Dp.setPosition(pp.moved), null !== Yp && cp - Yp.at < Yp.ms) {
          const ip = Gi(this.master);
          ip > 0 ? Dp.fade(0, pp.volume * ip, Yp.at + Yp.ms - cp) : Dp.setRelativeVolume(pp.volume)
        }
      }
      onAudioEvent(pp, ip, cp, Op) {
        var op, Ip;
        return null === (op = null === (Ip = this.player) || void 0 === Ip ? void 0 : Ip.onAudioEvent(pp, ip, cp, Op)) || void 0 === op || op
      }
      applyListener(pp) {
        var ip;
        null === (ip = this.player) || void 0 === ip || ip.applyListener(pp)
      }
      playGame(pp, ip, cp, Op, op, Ip, Sp) {
        if (this.stopped) return gi.c;
        if (this.player) return this.player.playGame(pp, ip, cp, Op, op, Ip, Sp);
        const xp = this.now();
        this.local = this.local.filter((pp => !pp.stopped && (pp.loop || xp - pp.at < 300)));
        const Lp = {
          name: pp,
          volume: Gi(ip),
          fade: null,
          pos: cp && [cp[0], cp[1], cp[2]],
          ear: Op && [Op[0], Op[1], Op[2]],
          maxHearDist: op,
          refDistance: Ip,
          loop: Sp,
          rate: 1,
          panner: null,
          moved: null,
          at: xp,
          stopped: !1,
          sound: null
        };
        this.local.push(Lp);
        const Yp = {
          stop: () => {
            var pp;
            return Lp.stopped = !0, null === (pp = Lp.sound) || void 0 === pp || pp.stop(), Yp
          },
          fade: (pp, ip, cp) => {
            if (Lp.sound) return Lp.sound.fade(pp, ip, cp), Yp;
            const Op = Gi(this.master),
              op = Gi(Op > 0 ? ip / Op : ip > 0 ? Lp.volume : 0),
              Ip = this.now(),
              Sp = ri(Lp, Ip);
            return Lp.volume = op, Lp.fade = cp > 0 && Sp !== op ? {
              from: Sp,
              at: Ip,
              ms: cp
            } : null, Yp
          },
          rate: pp => (Lp.sound ? Lp.sound.rate(pp) : Lp.rate = pp, Yp),
          getVolume: () => Lp.sound ? Lp.sound.getVolume() : Lp.volume * Gi(this.master),
          getRelativeVolume: () => Lp.sound ? Lp.sound.getRelativeVolume() : Lp.volume,
          setRelativeVolume: pp => (Lp.sound ? Lp.sound.setRelativeVolume(pp) : (Lp.volume = Gi(pp), Lp.fade = null), Yp),
          setPannerAttr: pp => (Lp.sound ? Lp.sound.setPannerAttr(pp) : Lp.panner = {
            ...pp
          }, Yp),
          setPosition: pp => (Lp.sound ? Lp.sound.setPosition(pp) : Lp.moved = [pp[0], pp[1], pp[2]], Yp)
        };
        return Yp
      }
      setMaster(pp, ip) {
        var cp;
        this.master = pp, this.soundOn = ip, null === (cp = this.player) || void 0 === cp || cp.setMaster(pp, ip)
      }
      stop() {
        var pp;
        this.stopped = !0, null === (pp = this.player) || void 0 === pp || pp.stopAll();
        for (const ip of this.local) ip.stopped = !0;
        this.local = []
      }
    }((0, Qi.c)(), !0);
    let jS = {
        wasm: "unknown",
        client: String(Pi.c)
      },
      kS = null,
      mS = () => {};
    const RS = new Promise((pp => {
      mS = pp
    }));
    let qS = () => {};
    const MS = new Promise((pp => {
      qS = pp
    }));
    let CS, ES = null,
      XS = null,
      lS = null,
      QS = null,
      JS = null,
      BS = null,
      NS = null,
      TS = null,
      fS = null,
      bS = null,
      hS = null,
      aS = null,
      nS = null,
      FS = null,
      gS = null,
      GS = null,
      rS = null,
      ZS = null,
      zS = null,
      sS = !1,
      KS = null;
    const VS = new Set,
      px = new Set;

    function ix(pp) {
      if (!VS.has(pp)) {
        VS.add(pp);
        for (const cp of px) try {
          cp(pp)
        } catch (ip) {
          console.error(`${nI} a startup listener threw`, ip)
        }
      }
    }

    function cx(pp) {
      sS = !0, pp.isStopped || ix("texturesIn")
    }
    let Ox = 1,
      ox = -1 / 0,
      Ix = -1 / 0,
      Sx = -1 / 0,
      xx = !1,
      Lx = null,
      Yx = !1,
      Dx = !1,
      Ax = 0,
      Px = null,
      Wx = !1;
    const yx = {
      dropped: -1 / 0,
      pause: -1 / 0,
      backlog: -1 / 0
    };
    let Ux = 0,
      wx = 0,
      vx = null,
      tx = null,
      Hx = null,
      dx = null;
    const ex = new WeakMap;
    let ux = null,
      jx = null,
      kx = !1,
      mx = null,
      Rx = null,
      qx = null,
      Mx = null,
      Cx = null,
      Ex = null,
      Xx = 0;
    const lx = new Set;
    let Qx = 0,
      Jx = 0,
      Bx = 0,
      Nx = null,
      Tx = null,
      fx = null,
      bx = null,
      hx = -1 / 0,
      ax = null;
    const nx = new Set;
    let Fx = !1,
      gx = null;
    const Gx = new Map,
      rx = new Set;
    let Zx = !1;
    const zx = {
      adapter: null,
      boundAtMs: null,
      indirectHangs: null,
      restoresSkipped: null
    };
    let sx = null,
      Kx = () => [0, 0],
      Vx = () => {},
      pL = () => {},
      iL = null,
      cL = null;
    const OL = new class {
      constructor(pp) {
        this.reached = pp, this.next = 1
      }
      observe(pp) {
        if (!(pp < this.next)) {
          for (; this.next <= pp;) this.next *= 2;
          this.reached(pp)
        }
      }
    }((pp => {
      console.warn(`${nI} chunk cancels from the server this session: ${pp}`)
    }));
    let oL = 1,
      IL = null,
      SL = null,
      xL = null,
      LL = null,
      YL = null,
      DL = !1,
      AL = !1,
      PL = 0,
      WL = null,
      yL = !1,
      UL = null,
      wL = null,
      vL = null,
      tL = !1;
    const HL = new class {
      constructor(pp) {
        this.GA = pp, this.lossPending = !1, this.undrawnSinceMs = null, this.lastFrameMs = 0, this.shown = !1
      }
      deviceLost() {
        this.lossPending = !0
      }
      frame(pp, ip, cp) {
        (0, Ti.e)(pp) && (this.lossPending = !1);
        const Op = cp - this.lastFrameMs;
        this.lastFrameMs = cp, this.lossPending && ip && (0, Ti.j)(pp) ? (null === this.undrawnSinceMs || Op > 1e3) && (this.undrawnSinceMs = cp) : this.undrawnSinceMs = null, this.show(null !== this.undrawnSinceMs && cp - this.undrawnSinceMs >= 2e3)
      }
      stop() {
        this.lossPending = !1, this.undrawnSinceMs = null, this.show(!1)
      }
      show(pp) {
        pp !== this.shown && (this.shown = pp, this.GA(pp))
      }
    }((pp => {
      Lp.m.GA(yp.d, pp)
    }));
    let dL = !1,
      eL = !0,
      uL = null,
      jL = !1,
      kL = !1,
      mL = !1;

    function RL() {
      return vS ??= Promise.all([cp.e(201), cp.e(144), cp.e(60)]).then((() => cp(51184))).then((pp => (wS = pp, Object.assign(globalThis, {
        bloxdPreviewPage: pp.pagePreviews()
      }), pp)), (pp => {
        throw vS = null, pp
      })), vS
    }

    function qL() {
      return US ??= cp.e(58).then((() => cp(51199))).catch((pp => {
        throw US = null, new lp.e(pp)
      })), US
    }
    class ML {
      constructor() {
        this.host = null
      }
      open(pp) {
        return null !== this.host ? pp(this.host) : RL().then((ip => (this.host ??= new ip.WasmPreviewHost(ip.pagePreviews()), pp(this.host))))
      }
      openMob(pp) {
        return this.open((ip => ip.openMob(pp)))
      }
      openPet(pp) {
        return this.open((ip => ip.openPet(pp)))
      }
      openMobLineup(pp) {
        return this.open((ip => ip.openMobLineup(pp)))
      }
      openCharacter(pp, ip) {
        return this.open((cp => cp.openCharacter(pp, ip)))
      }
    }

    function CL() {
      yS || (yS = !0, Ro.i.setHost(new ML), (0, Tc.m)(), uo.e.setFollower(JY), Object.assign(globalThis, {
        bloxdPreviews: Ro.i
      }))
    }

    function EL() {
      RL().then((pp => {
        pp.pagePreviews().prefetch()
      }), (() => {}))
    }

    function XL() {
      let pp = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      if (WS) return;
      WS = !0, dL = "play" === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "shell"), eL = !dL, console.info(`${nI} starting`), PS || (PS = !0, (0, yp.S)(new ai(sL, IY)), (0, Pp.o)(new ni), (0, yp.O)(new Fi), (0, yp.F)()), dL && Lp.m.subscribe("appManagerUpdated|gameState", zL), CL(), (0, Qc.setCrashScreen)((pp => {
        let {
          text: ip,
          reload: cp
        } = pp;
        ! function(pp, ip) {
          var cp, Op;
          if (jL) return;
          jL = !0, (0, bc.Z)(), null === (cp = ax) || void 0 === cp || cp.abort(), ax = null, jo.d.release();
          const op = dL ? null !== (Op = pp.cancel) && void 0 !== Op ? Op : "general:back" : null;
          TO({
            ...pp,
            cancel: op
          }).then((pp => {
            pp && ip && kL ? ((0, ji.v)("reloadOntoJs"), (0, ii.g)(ji.D)) : pp && ip ? (0, ii.i)() : dL && (0, ii.e)("/")
          }))
        }(ip, cp)
      })), (0, Ao.i)(), (0, li.j)();
      let ip = null;
      try {
        ip = fI("m85ho37bi6g", (() => {
          var pp, ip;
          return null !== (pp = null === (ip = ES) || void 0 === ip ? void 0 : ip.ws) && void 0 !== pp ? pp : null
        }), pp, "euyfsxnmtv")
      } catch (op) {
        console.error(`${nI} probes`, op)
      }
      const Op = function() {
        const pp = (0, rO.m)(),
          ip = (0, rO.h)();
        let cp = !1;
        return Op => {
          pp && !cp && (cp = !0, (0, Qc.reportStaleBuildReload)(pp, ip, Op))
        }
      }();
      NY(), dL || function() {
        const pp = function(pp) {
          var ip;
          const cp = new URLSearchParams(pp),
            Op = cp.get("game");
          return Op ? {
            game: Op,
            lobby: null !== (ip = cp.get("lobby")) && void 0 !== ip ? ip : null
          } : null
        }(window.location.search);
        if (pp) return (0, Wi.j)(pp.game) && NY().request(), void JL(pp.game, pp.lobby);
        const ip = new URLSearchParams(window.location.search).get("ws");
        if (!ip) return;
        RS.then((pp => {
          pp && async function(pp, ip) {
            try {
              await (0, lp.n)(pp), mx = DY(new WebSocket(ip)), null !== mx && jo.d.setGame(null), lL()
            } catch (op) {
              console.error(`${nI} ?ws=${ip} did not attach`, op)
            }
          }(pp, ip)
        }))
      }(), async function(pp) {
        var ip, Op, Ip, Sp, xp, Yp;
        if ("undefined" === typeof WebAssembly) return mY("noWebAssembly", "unsupported", "This browser has no WebAssembly"), null;
        const Dp = (0, Qo.O)(),
          Ap = await async function(pp, ip) {
            const cp = (0, Pc.s)(pp) ? qY(pp, ip) : null;
            if (null === cp || void 0 === cp || !cp.retries) return pp;
            console.warn(`${nI} ${cp.detail}: picking again in ${RY} ms`), await new Promise((pp => {
              setTimeout(pp, RY)
            }));
            const Op = await (0, Qo.Q)();
            if (!(0, Pc.s)(Op)) {
              var op;
              (0, Qc.reportNoBackendRetry)("reprobed", cp.decline, cp.detail, {
                ...cp.details,
                backend: null !== (op = null === Op || void 0 === Op ? void 0 : Op.backend) && void 0 !== op ? op : "none"
              }), null !== Op && (0, Qo.N)(Op.backend)
            }
            return Op
          }(await (0, Qo.L)(), Dp);
        if ((0, Qc.setCrashBackend)((0, Pc.s)(Ap) ? "unsupported" : null !== (ip = null === Ap || void 0 === Ap ? void 0 : Ap.backend) && void 0 !== ip ? ip : "none"), (0, Pc.s)(Ap)) return function(pp) {
          let {
            decline: ip,
            detail: cp,
            details: Op,
            retries: op
          } = pp;
          if (op && (0, ji.j)()) return (0, Qc.reportNoBackendRetry)("reload", ip, cp, Op), void MY(`${cp}, again after ${RY} ms`);
          mY("browser", ip, cp, op ? {
            ...Op,
            afterReload: String(ji.r)
          } : Op)
        }(qY(Ap, Dp)), null;
        if ((0, Vo.r)("render")) try {
          const {
            startRenderDebug: pp
          } = await Promise.all([cp.e(78), cp.e(49)]).then((() => cp(4776)));
          pp(Ap)
        } catch (wi) {
          console.warn("The render debug topic didn't load", wi)
        }
        if ((0, Vo.r)("renderlite")) try {
          const {
            startRenderLite: pp
          } = await Promise.all([cp.e(273), cp.e(50)]).then((() => cp(51208)));
          xL = pp(Ap)
        } catch (wi) {
          console.warn("The renderlite debug topic didn't load", wi)
        }
        if ((0, Vo.r)("renderprobe")) try {
          const {
            startRenderProbe: pp
          } = await cp.e(51).then((() => cp(51210)));
          pp(Ap)
        } catch (wi) {
          console.warn("The renderprobe debug topic didn't load", wi)
        }
        if ("webgl" === (null === Ap || void 0 === Ap ? void 0 : Ap.backend) && dL && "wasm" !== (0, ji.f)(window.location.search)) {
          const pp = FO(Ap);
          null !== pp && (0, ki.h)(pp)
        }
        const Pp = null !== (Op = null === Ap || void 0 === Ap ? void 0 : Ap.backend) && void 0 !== Op ? Op : null;
        zx.adapter = null !== (Ip = null === Ap || void 0 === Ap ? void 0 : Ap.adapter) && void 0 !== Ip ? Ip : null, zx.boundAtMs = null, zx.indirectHangs = null, zx.restoresSkipped = null;
        const Wp = !(0, Pc.kb)();
        null === Ap || (0, Pc.J)(Ap.reason) || console.info(`${nI} drawing with ${Ap.backend}: ${Ap.reason}`);
        const yp = (0, Qo.A)();
        qS(!0), (0, lp.y)((pp => {
          try {
            null !== Pp && (iL = pp.startSkyFeed, lY(), function(pp) {
              var ip, cp;
              Kx = pp.rasterText, qx = pp.setTextLocalPlayer, pp.setTextLocalPlayer(null !== (ip = null === (cp = Rx) || void 0 === cp ? void 0 : cp.info.playerDbId) && void 0 !== ip ? ip : null), Vx = pp.drainTextRerasters, pL = pp.loadTextIcons, pp.warmText((() => DL)), pp.textChanged(), DL && setTimeout(pL, 0)
            }(pp), cL = pp.startShellAnalytics, nY())
          } finally {
            mL || (LL = pp.followMenuPrefs({
              setSoundPrefs: xY,
              setEnvPrefs: LY,
              setUiPrefs: SY,
              setLookPrefs: YY
            }))
          }
        })), (0, lp.o)(uS).catch((pp => {
          console.warn(`${nI} the game code did not load: a join asks again`, pp)
        }));
        const Up = (0, Qo.i)(Ap);
        let wp, vp;
        Up.catch((() => {})), "loading" === (0, vi.E)() && ep();
        try {
          wp = function(pp) {
            const ip = null !== pp && void 0 !== pp ? pp : document.createElement("canvas");
            ip.id = "wasm-game-canvas", (0, ho.l)();
            const cp = (0, bi.g)(),
              Op = (0, bi.j)(cp);
            ip.style.cssText = "position:absolute;top:0;left:0;display:block;touch-action:none;outline:none;background:#000", (0, bo.c)(ip, Op), (0, bi.d)(ip, cp), ip.width = Op.bufferWidth, ip.height = Op.bufferHeight;
            const op = document.createElement("div");
            return op.style.cssText = "position:fixed;top:0;right:0;bottom:0;left:0;overflow:hidden", op.append(ip), KL(op, eL), uL = op, document.body.append(op), ip
          }(null === Pp ? null : await (await RL()).pagePreviews().beginSession())
        } catch (op) {
          return await RD({
            site: ZI,
            error: op
          }, (() => {
            (0, Qc.showUnsupported)((0, JO.n)("fetch"), xI.f.fetch, `the previews did not load: ${String(op)}`)
          })), null
        }
        ep();
        try {
          vp = await Up
        } catch (op) {
          return await RD({
            site: ZI,
            error: op
          }, (() => {
            (0, Qc.showUnsupported)((0, JO.n)("fetch"), xI.f.fetch, `the ${null!==Pp&&void 0!==Pp?Pp:"client"} build did not load: ${String(op)}`)
          })), null
        }
        const Hp = (0, Qo.e)(),
          dp = !Hp && !0 !== Fc.l.getItem(FI),
          jp = !Hp && "loading" === (0, vi.E)();
        await (0, Jo.e)(vp, {
          reloadFailedDownload: dp
        }), jp && !(0, vi.X)() && await (0, Jo.e)(vp, {
          reloadFailedDownload: dp
        });
        tp = performance.now();
        const kp = jS;
        if (!(0, vi.X)()) {
          (0, vi.V)() && Fc.l.setItem(FI, !0);
          const pp = (0, vi.r)();
          if ("call" === pp) AD({
            site: yc.p,
            error: (0, vi.o)(),
            header: null
          }, kp);
          else {
            const ip = null !== pp && void 0 !== pp ? pp : "instantiate",
              cp = () => {
                (0, Qc.showUnsupported)((0, JO.n)(ip), xI.f[ip], (0, vi.i)())
              };
            if ("compile" !== pp && "instantiate" !== pp || !CY())
              if ("fetch" === ip) {
                const pp = [vp.url().href, ei.g.url().href];
                await RD({
                  site: ZI,
                  error: (0, vi.i)(),
                  urls: pp
                }, cp)
              } else cp();
            else {
              const ip = (0, vi.i)(),
                cp = (0, ic.d)((0, vi.o)());
              if (cp && (0, ji.j)()) return (0, Qc.reportCountedLoadFallback)((0, JO.n)(pp), xI.f[pp], ip, "wasmReload"), MY(`the wasm client ran out of memory to ${pp} here (${ip})`), null;
              (0, Qc.reportCountedLoadFallback)((0, JO.n)(pp), xI.f[pp], ip, cp ? "declined" : "pageAlone"), EY(`the wasm client did not ${pp} here (${ip})`, cp ? "oom" : null)
            }
          }
          return null
        }(0, ti.O)(vp.url()) && (0, Qc.reportUnstreamedCoreLoad)();
        const mp = (0, vi.H)();
        let Rp, qp = kp;
        try {
          qp = {
            ...kp,
            wasm: mp.JA()
          };
          const {
            hw: pp
          } = vp.bindings, ip = pp.MOp();
          if (ip !== Ki.B) return AD({
            site: yc.c,
            error: `core ABI ${ip}, page ABI ${Ki.B}`,
            header: null
          }, qp), null;
          const [cp, Op] = (0, Ki.qe)();
          Rp = new pp(cp, Op)
        } catch (op) {
          return AD({
            site: yc.c,
            error: op,
            header: null
          }, qp), null
        }
        jS = qp, kS = vp.bindings;
        const Mp = new yc.h(Rp, vi.z, {
          onCrash: pp => {
            var ip;
            null === (ip = xL) || void 0 === ip || ip.crashed(pp),
              function(pp, ip, cp, Op) {
                if ("webgpu" !== ip || (0, Qo.b)()) return !1;
                const op = function(pp) {
                  if (pp.site === yc.e && (0, Pc.w)(pp.error)) return "frames_refused";
                  return pp.site === gI && (0, Pc.z)(pp.error) ? "start_failed" : null
                }(pp);
                if (null === op) return !1;
                if (null !== (0, Pc.gb)(op, Op, (0, Wc.d)(pp.error))) return (0, Qc.countRenderLost)(op, pp.error, zx), !1;
                return Bi.D.reloaded(null, !1), (0, Qc.reportRenderReload)("webgpu", "start_failed" === op ? 0 : 1, cp, {
                  cause: op,
                  error: pp.error,
                  context: zx,
                  session: UD(null)
                }), ZY(), !0
              }(pp, Pp, qp, Wp) || AD(pp, qp)
          },
          onNetEvent: rY,
          onReconnectGrace: uY,
          onJoinPreloadEnded: eY,
          onCoreErrors: (pp, ip) => {
            var cp, Op;
            pp.some((pp => {
              let {
                code: ip
              } = pp;
              return ip === Ki.M.RenderDeviceLost
            })) && ((0, Qo.u)(), HL.deviceLost(), "webgpu" === Pp && ((0, Wc.h)(sx), Bi.D.lost())), null === (cp = xL) || void 0 === cp || cp.coreErrors(pp);
            const op = () => {
              (0, Qc.reportCoreErrors)(pp, ip, qp, ((pp, ip) => {
                var cp;
                return pp === Ki.M.EnvUnknownSky ? (0, Qc.unknownSkyWords)(mi.c.get("skyBox")) : pp === Ki.M.RenderDeviceLost ? (0, Qc.deviceLossWords)(ip, zx.boundAtMs) : null === (cp = sx) || void 0 === cp ? void 0 : cp.COp(pp, ip)
              }))
            };
            pp.some((pp => {
              let {
                code: ip
              } = pp;
              return ip === Ki.M.EnvUnknownSky
            })) ? queueMicrotask(op) : op(), null === (Op = KS) || void 0 === Op || Op.coreErrors(pp)
          },
          onRenderReload: (pp, ip, cp) => {
            ! function(pp, ip, cp, Op, op, Ip) {
              var Sp;
              if ((0, Qo.b)()) return;
              const xp = ip === Ki.Yc.WEBGPU,
                Lp = Op === Ki.Yc.PIPELINE_FAILED ? "pipeline_failed" : "lost",
                Yp = Op === Ki.Yc.RESTORE_LOST,
                Dp = xp && (0, Bi.m)(zx.adapter, cp, "lost" === Lp, Yp),
                Ap = (0, Wc.o)(sx);
              null === (Sp = xL) || void 0 === Sp || Sp.reload(xp, cp, Lp, null === Ap || void 0 === Ap ? void 0 : Ap.message);
              const Pp = xp ? (0, Pc.gb)(Lp, op, Ap) : null;
              if (null !== Pp) {
                (0, Qc.countRenderLost)(Lp, Ap, zx);
                const ip = void 0 === Ap ? "" : ` (${Ap.message})`;
                return void pp.crash(Qc.RENDER_RELOAD_SITE, new Error(`${(0,Qc.renderReloadMessage)("webgpu",Lp,cp)} and ${Pp}${ip}`))
              }
              const Wp = xp ? "webgpu" : "webgl1" === Ip ? "webgl1" : "webgl";
              "lost" === Lp && (0, Qo.u)();
              xp || (0, ji.q)();
              (0, Qc.reportRenderReload)(Wp, cp, jS, {
                from: "game",
                cause: Lp,
                restoreLost: Yp,
                adapterRemembered: Dp,
                error: Ap,
                context: zx,
                session: UD(pp.sunShadowsHeld())
              }), ZY()
            }(Mp, pp, ip, cp, Wp, Pp)
          },
          onEnvEvent: pp => {
            var ip;
            pp.kind === Ki.bb.SkyImages ? null === (ip = GS) || void 0 === ip || ip.onEvent(pp.payload) : pp.kind === Ki.bb.EnvLighting && (rS = 1 === pp.payload[0])
          },
          onImages: pp => {
            var ip;
            null === (ip = ZS) || void 0 === ip || ip.onEvent(pp)
          },
          onModelRequest: pp => {
            var ip;
            null === (ip = nS) || void 0 === ip || ip.request(pp)
          },
          onModelTaken: (pp, ip) => {
            var cp;
            null === (cp = nS) || void 0 === cp || cp.taken(pp, ip)
          },
          onTerrainTexturesWanted: () => {
            queueMicrotask((() => {
              ! function(pp, ip) {
                const cp = eS;
                if (null === cp || pp.isStopped) return;
                cp.restore((pp => {
                  (0, Qc.reportTerrainTextureFailure)(pp, ip)
                })).then((ip => {
                  !1 !== ip || pp.isStopped ? !0 === ip && console.info(`${nI} terrain textures handed over again after the renderer lost them`) : console.warn(`${nI} the terrain textures couldn't be handed over again: the terrain draws blank`)
                }))
              }(Mp, qp)
            }))
          },
          onKeepAlive: pp => {
            const ip = null === dx ? void 0 : ex.get(dx);
            void 0 !== ip && VO(ip, pp)
          },
          onSends: () => {
            ! function(pp) {
              const ip = performance.now();
              if (pp.forEachNetOut(LD), oD(pp), (0, yc.J)(pp, {
                  worldgen: lS,
                  mesh: JS
                }), null !== SL) try {
                SL.sendsWent(pp, ip, performance.now())
              } catch (op) {
                GY(op)
              }
            }(Mp)
          }
        });
        if (tS = Mp, null === (Sp = fi.d.wasmNetReady) || void 0 === Sp || Sp.call(fi.d, (() => Mp.isStopped ? 0 : Mp.netKeptFrames)), null !== pp) {
          Mp.setAntiCheatProbes(JI(vi.z, pp.checks)), pp.watchHeld(NI.CoreFrame, (() => Mp.frame)), pp.watchHeld(NI.GlueFrame, (() => Rp.frame));
          const ip = function(pp, ip) {
            const cp = new BI(ip);
            let Op = !1;
            cp.LP(pp.LP());
            const op = (0, sO.ab)((() => {
              cp.LP(pp.LP())
            }), TI);
            let Ip = 6 * (0, sO.S)() | 0;
            const Sp = () => {
              ++Ip < 6 || (Ip = 0, pp.checks.stackCheck() && (Op = !0))
            };
            (0, yI.i)(Sp);
            const xp = () => {
              const ip = pp.checkPadCall();
              0 !== ip && cp.setFlags(ip)
            };
            return (0, WI.i)(xp), {
              onSend: Sp,
              beforeFrame: () => {
                Op && cp.originStackHit() && (Op = !1)
              },
              onEvent: ip => {
                const Op = pp.checkEvent(ip);
                cp.value(Ki.m.ProbeUsedProp, pp.usedProp()), 0 !== Op && cp.setFlags(Op)
              },
              stop: () => {
                (0, sO.bb)(op), (0, yI.g)(Sp), (0, WI.f)(xp)
              }
            }
          }(pp, ((pp, ip, cp) => {
            let Op = !1;
            return HD(Mp, (() => {
              Op = Mp.rings.input.writeRecord(Ki.wb.AntiCheat, pp, ip, cp, 0)
            })), Op
          }));
          Mp.isStopped ? ip.stop() : hS = ip
        }
        DS = (pp, ip, cp) => Mp.rings.cmd.writeCmd(pp, ip, cp), AS = pp => Mp.rings.cmd.growForCmd(pp), Wx = !1, lY(), (0, lp.C)(Mp, {
          core: Rp,
          memory: vi.z,
          staleOr: (pp, ip, cp, Op) => RD({
            site: pp,
            error: ip
          }, cp, Op),
          reportReplayFault: (pp, ip) => {
            (0, Qc.reportReplayFault)(pp, ip, jS)
          },
          audio: uS,
          options: mi.c,
          onNetEvent: rY,
          sessionInfo: pp => {
            var ip;
            return (null === (ip = Rx) || void 0 === ip ? void 0 : ip.conn) === pp ? Rx.info : null
          },
          onEventOverflow: rL,
          replayShaderPack: pp => {
            var ip;
            null === (ip = KS) || void 0 === ip || ip.replay(pp)
          },
          hasPackModel: pp => {
            var ip, cp;
            return null !== (null !== (ip = null === (cp = QY()) || void 0 === cp ? void 0 : cp.modelUrl(pp)) && void 0 !== ip ? ip : null)
          },
          beforeWrite: () => (!Yx && Mp.rings.net.cursor > 0 && KY(Mp, !1, "all"), !Mp.isStopped),
          beforeOp: () => (!Yx && Mp.netWrittenSinceFrame > 0 && KY(Mp, !1, "budget"), !Mp.isStopped)
        }), (0, Xp.D)({
          lockPointer: () => {
            if (!SO(wp)) return !1;
            try {
              Promise.resolve(wp.requestPointerLock()).catch((() => {}))
            } catch {
              return !1
            }
            return !0
          },
          unlockPointer: () => {
            (0, rc.c)()
          },
          leaveGame: () => {
            GL()
          },
          canvas: () => wp
        }), aS = (0, Xp.s)((() => {
          var pp;
          const ip = (0, lp.k)();
          null === (pp = (0, lp.u)()) || void 0 === pp || pp.followCursorAim(!0 === (null === ip || void 0 === ip ? void 0 : ip.isSessionLive) ? ip : null)
        })), vx && Mp.setUiPrefs(vx);
        tx && Mp.setEnvPrefs(tx);
        Hx && Mp.setLookPrefs(Hx);
        const Cp = To ? fo(To.preventMovement) : null;
        Cp && oY(Cp);
        const Ep = (0, Cc.m)(),
          Qp = (0, Cc.g)(Mp, Ep);
        fS = Ep.basis, (0, nc.n)(null === Qp ? null : (0, Mc.o)(Qp)), TS = Qp;
        const Jp = (0, Hi.c)();
        let Bp = 1 / 0,
          Np = !0,
          Tp = Ep.shedFootprintBytes;
        const fp = new Do.d(Jp, (() => Rp.cv()), (pp => {
          Mp.crash(yc.k, pp)
        }));
        BS = fp, NS = fp, null !== Qp && fp.setCeiling(Math.min((0, Do.p)(Qp), Bp, (0, Cc.p)()));
        if (Np) {
          fp.setShed((pp => {
            const ip = Mp.shedMemory("joinReserve" !== pp);
            return null !== ip && (null === TS || ip < TS) && (TS = ip, (0, nc.n)((0, Mc.o)(ip))), ip
          }), ((pp, ip, cp) => {
            1 === ip ? (0, Qc.reportMemoryShed)(pp, cp, jS) : console.warn(`${nI} wasm memory: shed again (${pp}): shed ${ip}`, cp.wasmMemoryShed)
          }), (() => Mp.addDistanceInUse()));
          const pp = (0, Pc.Y)(mp);
          fp.setFootprint(new Ko(Tp, {
            storedChunks: () => Rp.EOp(),
            gpuBytes: () => {
              var ip;
              return null !== (ip = null === pp || void 0 === pp ? void 0 : pp.XOp()) && void 0 !== ip ? ip : 0
            },
            jsHeapBytes: so
          }))
        }
        window.addEventListener("pagehide", (() => {
          BS === fp && (fp.refreshStats(), tD(fp))
        })), window.addEventListener("pagehide", zY), window.addEventListener("pagehide", sY), !1;
        const [bp, hp] = (0, Nc.i)();
        YL = (0, fc.f)((pp => Mp.setChunkAddDistance(pp.horizontal, pp.vertical)), {
          horizontal: bp,
          vertical: hp
        }), Mp.setAmbientOcclusion(!0 !== Fc.h.getItem("disableAmbientOcclusion")), Mp.setPoseLod(!0 !== Fc.h.getItem(Ui.T)), Mp.setDebugLog(Ki.T.Look, !0), Mp.setDebugLog(Ki.T.CameraSet, !0), (0, iI.startLookDebug)("wasm", {
          look: () => Mp.takeDebugLog(Ki.T.Look),
          cameraSets: () => Mp.takeDebugLog(Ki.T.CameraSet)
        }), (0, Vo.r)("remesh") && (Mp.setDebugLog(Ki.T.Remesh, !0), ap = () => Mp.takeDebugLog(Ki.T.Remesh), SI = new II((0, cI.p)(), ap));
        var ap;
        const np = function(pp, ip, cp, Op) {
          const op = new jO,
            Ip = pp => Fc.h.getItem(pp);
          op.sync(Ip, ip), (0, Ni.$)();
          const Sp = (0, Lp.n)("customBindingsChanged", (() => {
            op.sync(Ip, ip)
          }));
          (0, Zc.r)(ip);
          const xp = new Set,
            Yp = (0, Xp.s)((() => {
              var pp;
              xp.size > 0 && qO() && !0 === (null === (pp = (0, lp.k)()) || void 0 === pp ? void 0 : pp.localPlayerAlive()) && Lp.m.GA("usedKeyboard")
            })),
            Dp = yO.c.heldSizer((() => (0, bi.r)(pp))),
            Ap = WO(pp, ip, {
              prevents: pp => op.prevents(pp),
              keyPressed: pp => {
                op.moves(pp) && (xp.add(pp), qO() && Lp.m.GA("usedKeyboard"))
              },
              keyReleased: pp => {
                xp.delete(pp)
              },
              keysReleased: () => {
                xp.clear()
              },
              resized: () => {
                mO.i.measure(pp.getBoundingClientRect()), (0, UO.p)()
              },
              sizeCanvas: Dp,
              watchRenderScale: ip => {
                const cp = (0, bi.t)(pp, ip),
                  Op = yO.c.onRelease(ip);
                return () => {
                  cp(), Op()
                }
              },
              touchStarting: () => {
                mO.i.measure(pp.getBoundingClientRect())
              },
              viewShown: cp,
              touchUiShown: () => ci.c.get("isTouchScreen"),
              ctrlCombosAreGames: qO,
              inspect: (pp, ip, cp) => {
                op.checks(ip, cp) && Op(pp)
              },
              canLock: () => SO(pp)
            }),
            Pp = (0, dc.b)(ip);
          return () => {
            Sp(), Yp(), (0, Zc.r)(null), Pp(), Ap()
          }
        }(wp, ((pp, ip, cp, Op, op) => {
          HD(Mp, (() => {
            Mp.rings.input.writeRecord(pp, ip, cp, Op, op)
          })), !Dx && (0, lO.f)(pp, op) && (0, lO.b)((() => {
            tS !== Mp || mL || Mp.isStopped || !SD() || KY(Mp, !1, "budget", !1)
          }))
        }), (() => eL), (pp => {
          var ip;
          null === (ip = hS) || void 0 === ip || ip.onEvent(pp)
        }));
        if (Mp.isStopped) return np(), null;
        XS = np;
        const Fp = () => !Mp.isStopped && !jL;
        if (Mp.isStopped) return null;
        (0, vi._)((() => {
          "call" === (0, vi.r)() && Mp.crash(yc.p, (0, vi.o)())
        }));
        const gp = (0, yc.N)(Mp.rings.worker, (() => {
          KY(Mp, !1, document.hidden ? "all" : "budget")
        }));
        lS = function(pp, ip) {
          return dD().then((pp => {
            let {
              prefetchWorldgenWorker: ip
            } = pp;
            ip()
          }), (() => {})), new DI({
            module: (0, vi.C)(),
            decodeSettings: pp => {
              const ip = (0, lp.u)();
              if (null === ip) throw new Error("no game code to decode the world-gen seed with");
              return ip.decodeMapSettings(pp)
            },
            loadWorker: eD,
            onMapWithoutWorldgen: () => {
              uD((pp => {
                let {
                  stopWorldgenWorkerPrefetch: ip
                } = pp;
                ip()
              }))
            },
            onLoadFailed: pp => {
              (0, Qc.reportWorldgenLoadFailure)(pp, jS)
            },
            onWorkerLost: pp => {
              (0, Qc.reportWorkerLost)(yc.A, pp, jS)
            },
            onStartTimeout: pp => {
              (0, Qc.reportWorkerStartTimeout)(yc.A, pp, jS)
            },
            onGaveUp: pp => {
              (0, Qc.reportWorldgenGaveUp)(pp, jS)
            },
            onMemoryStats: pp => {
              var ip;
              null === (ip = BS) || void 0 === ip || ip.noteWorldgen(pp)
            },
            onMemoryGone: () => {
              var pp;
              null === (pp = BS) || void 0 === pp || pp.worldgenGone()
            },
            write: (cp, Op, op, Ip, Sp) => {
              HD(pp, (() => {
                pp.rings.worker.writeWorkerRecord(cp, Op, op, 0, Ip, Sp) || pp.crash(yc.A, `a world-gen record of kind ${Op} did not fit the worker-in ring`)
              })), ip()
            }
          })
        }(Mp, gp), JS = function(pp, ip) {
          return new Lo({
            module: (0, vi.C)(),
            loadWorkers: async () => {
              const [{
                createMeshWorker: pp
              }, ip] = await Promise.all([cp.e(41).then((() => cp(51246))), Promise.resolve().then((() => cp(104))).then((pp => {
                let {
                  isMobile: ip
                } = pp;
                return ip()
              }), (() => !1))]);
              return {
                create: pp,
                count: (0, Xi.b)(navigator.hardwareConcurrency, ip),
                maxKeptLightStates: ip ? 1 : void 0
              }
            },
            write: (cp, Op, op, Ip, Sp, xp) => {
              (0, UO.l)(), HD(pp, (() => {
                pp.rings.worker.writeWorkerRecord(cp, Op, op, Ip, Sp, xp) || pp.crash(yc.l, `a meshing record of kind ${Op} did not fit the worker-in ring`)
              })), ip()
            },
            onWorkerLost: pp => {
              (0, Qc.reportWorkerLost)(yc.l, pp, jS)
            },
            onLightFault: (pp, ip) => {
              (0, Qc.reportLightFault)(pp, ip, jS)
            },
            onStartTimeout: pp => {
              (0, Qc.reportWorkerStartTimeout)(yc.l, pp, jS)
            },
            onMemoryStats: (pp, ip) => {
              var cp;
              null === (cp = BS) || void 0 === cp || cp.noteMeshWorker(pp, ip)
            },
            onMemoryGone: pp => {
              var ip;
              null === (ip = BS) || void 0 === ip || ip.meshWorkerGone(pp)
            },
            fail: (ip, cp) => {
              const Op = () => {
                pp.crash(yc.l, void 0 === cp ? ip : new Error(ip, {
                  cause: cp
                }))
              };
              void 0 !== cp ? RD({
                site: yc.l,
                error: cp
              }, Op) : Op()
            }
          })
        }(Mp, gp), zL();
        const Gp = (0, ko.r)(Ci.clientSideServerUrls.staticUrl, {
            onTableFailed: pp => {
              RD({
                site: Qc.MODEL_FEED_SITE,
                error: pp
              }, (() => {}), {
                stillWanted: Fp
              })
            },
            packUrl: pp => {
              var ip, cp;
              return null !== (ip = null === (cp = QY()) || void 0 === cp ? void 0 : cp.modelUrl(pp)) && void 0 !== ip ? ip : null
            }
          }),
          rp = function(pp, ip, cp) {
            const Op = cp => {
              var Op, op;
              return null !== (Op = null === (op = ip()) || void 0 === op ? void 0 : op.drawnUrl(cp)) && void 0 !== Op ? Op : pp.url(cp)
            };
            return (0, uo.i)((0, Po.k)(Op), cp)
          }(Gp, (() => nS), QY),
          Zp = new Po.e(rp, (pp => {
            console.warn(`${nI} image ${pp.key.kind}:${pp.key.index}:${pp.key.word} failed`, pp.error)
          }));
        ZS = Zp, zS = new to(Mp, rp, ((pp, ip) => {
          void 0 === ip ? console.warn(`${nI} ${pp}`) : BY(pp, ip)
        }));
        const zp = new eo.f(Gp, function(pp, ip) {
          let Op = !1,
            op = null,
            Ip = null;
          const Sp = {
              onUnavailable: (cp, Op) => {
                Ip ??= RD({
                  site: Qc.MODEL_POOL_SITE,
                  error: cp,
                  urls: Op
                }, (() => {
                  (0, Qc.reportModelPoolFailure)(cp, pp)
                }), {
                  stillWanted: ip
                })
              },
              onDecoderFailed: (cp, Op) => {
                const op = () => {
                  (0, Qc.reportDracoDecoderFailure)(cp, pp)
                };
                void 0 !== Op ? RD({
                  site: Qc.MODEL_POOL_SITE,
                  error: cp,
                  urls: Op
                }, op, {
                  stillWanted: ip
                }) : op()
              },
              onWorkerLost: ip => {
                (0, Qc.reportWorkerLost)(Qc.MODEL_POOL_SITE, ip, pp)
              },
              onModuleRetry: (ip, cp) => {
                (0, Qc.reportModelsModuleRetry)(ip, cp, pp)
              }
            },
            xp = cp.e(43).then((() => cp(51251))).then((pp => {
              let {
                pageModelPool: ip
              } = pp;
              if (Op) return null;
              const cp = ip(Sp);
              return op = cp.unlisten, FS = cp.pool, zL(), cp.pool
            }), (pp => (Op || Sp.onUnavailable(pp, void 0), null)));
          return gS = () => {
            var pp;
            Op = !0, null === (pp = op) || void 0 === pp || pp(), FS = null
          }, (pp, ip) => xp.then((cp => {
            var Op;
            return null !== (Op = null === cp || void 0 === cp ? void 0 : cp.build(pp, ip)) && void 0 !== Op ? Op : (0, mo.q)(pp, "the model workers did not load")
          })).then((pp => null !== Ip && (0, mo.j)(pp) ? Ip.then((() => pp)) : pp))
        }(qp, Fp), (pp => {
          pp.startup ? (DD(), RD({
            site: Qc.MODEL_FEED_SITE,
            error: pp.error,
            urls: "" === pp.url ? void 0 : [pp.url]
          }, (() => {
            (0, Qc.reportModelFailure)(pp, qp)
          }))) : (0, Qc.reportModelFailure)(pp, qp)
        }), {
          onWritten: (pp, ip) => {
            Zp.glbWritten(pp, ip)
          },
          onTaken: (pp, ip) => {
            Zp.glbTaken(pp, ip)
          },
          onPackFileFailed: (pp, ip) => {
            console.warn(`${nI} the texture pack's model file ${pp} failed: the shipped one loads`, ip)
          }
        });
        nS = zp;
        const sp = new Uo.f(Mp);
        eS = sp, sp.swap((pp => {
          const ip = () => {
            (0, Qc.reportTerrainTextureFailure)(pp, qp)
          };
          if (DL) return void ip();
          const cp = () => !DL,
            Op = null === pp.url ? void 0 : [pp.url];
          RD({
            site: yc.y,
            error: pp.error,
            urls: Op
          }, ip, {
            stillWanted: cp
          })
        })).then((pp => {
          null !== pp && (pp || Mp.isStopped || console.warn(`${nI} the core refused the terrain textures: terrain draws untextured`), cx(Mp))
        }));
        const Kp = new zi(Mp, ((pp, ip) => {
          console.warn(`${nI} ${pp}`, ...void 0 === ip ? [] : [ip])
        }));
        Kp.feed(), null !== Pp && function(pp, ip, Op, op, Ip, Sp) {
          let xp = null,
            Yp = null,
            Dp = !1;
          const Ap = {
            textures: null,
            stop: () => {
              var pp, ip;
              Dp = !0, null === (pp = Yp) || void 0 === pp || pp(), null === (ip = xp) || void 0 === ip || ip(), jo.d.setSettled(null), null !== kS && QL.clear(kS)
            }
          };
          dS = Ap, Yp = NY().follow((Yp => {
            null !== Yp && Promise.all([cp.e(204), cp.e(46)]).then((() => cp(51218))).then((cp => {
              let {
                PackTextures: Pp
              } = cp;
              if (Dp || pp.isStopped) return;
              const Wp = new Pp({
                feed: Yp,
                terrain: ip,
                backend: Op,
                stopped: () => pp.isStopped,
                landed: () => {
                  cx(pp)
                },
                packSwapped: () => {
                  (0, uo.g)(op), Sp.feed((() => async function(pp) {
                    const ip = null === pp ? null : await pp.averageColours;
                    return null === ip ? si() : Zi(ip)
                  }(Wp.assets))), (0, Ho.j)(Wp.files()), Ip.refresh().then((pp => {
                    null !== pp && console.info(`${nI} texture pack models: ${pp.resent} of ${pp.delivered} files written again, ${pp.refetched} refetched`)
                  }))
                },
                settled: (pp, ip, cp) => {
                  var Op;
                  (jo.d.setSettled({
                    state: pp,
                    files: ip
                  }), function(pp, ip, cp) {
                    const Op = null === pp.gameSource && (0, Jc.d)(pp.pack);
                    if (null === ip) return;
                    const op = (0, lc.g)(ip.error),
                      Ip = Op ? "settings" : ip.source;
                    Lp.m.GA(lc.d, {
                      failure: op,
                      source: Ip,
                      pack: Bc(pp)
                    }), (0, Qc.reportTexturePackKeptOut)(Ip, op, ip.error, cp)
                  }(pp, cp, jS), null === cp) && function(pp) {
                    const ip = kS;
                    null !== ip && QL.apply(ip, pp).then((ip => {
                      ip && pp && console.info(`${nI} the texture pack's animations are in (${Object.keys(pp).length} files)`)
                    }))
                  }(null === (Op = pp.pack) || void 0 === Op ? void 0 : Op.animations)
                },
                settling: () => {
                  jo.d.setSettled(null)
                },
                warn: BY,
                maxTextureSize: () => Promise.resolve((0, Pc.mb)(document.createElement("canvas")))
              });
              Ap.textures = Wp, xp = Wp.start()
            }), (pp => {
              console.warn(`${nI} the texture pack's terrain didn't load: the built atlas stays`, pp)
            }))
          }))
        }(Mp, sp, Pp, Zp, zp, Kp);
        const Oi = () => {
            Mp.setTextureLayers("")
          },
          oi = pp => {
            (Mi ??= cp.e(54).then((() => cp(51258))).then((pp => {
              let {
                TEXTURE_NAMES: ip
              } = pp;
              return ip
            }), (pp => {
              throw Mi = null, pp
            })), Mi).then((pp => {
              Mp.setTextureLayers(pp) || Mp.isStopped || (console.warn(`${nI} the core refused the texture names: textured Boxes draw textureNotFound`), Oi())
            }), (ip => {
              if (Mp.isStopped) return;
              const [cp, ...Op] = pp;
              void 0 === cp ? RD({
                site: Qc.TEXTURE_NAMES_SITE,
                error: ip
              }, (() => {
                console.warn(`${nI} the texture names didn't load, so textured Boxes draw textureNotFound`, ip), Oi()
              }), {
                stillWanted: Fp
              }) : setTimeout((() => {
                oi(Op)
              }), cp)
            }))
          };
        if (oi(LS), null !== Pp && !await async function(pp, ip, cp, Op, Ip, Sp) {
            var xp;
            const Lp = (0, Pc.Y)(cp);
            if (null === Lp) return pp.crash(gI, new Error(`this ${Op} build has no openRenderer`)), !1;
            let Yp;
            sx = Lp;
            try {
              var Dp, Ap, Pp, Wp;
              const op = null !== (Dp = null === (Ap = wS) || void 0 === Ap ? void 0 : Ap.pagePreviews()) && void 0 !== Dp ? Dp : null,
                xp = null !== (Pp = null === (Wp = wS) || void 0 === Wp ? void 0 : Wp.previewModule(cp)) && void 0 !== Pp ? Pp : null;
              if (null === op || null === xp) {
                null === op || void 0 === op || op.endSession(!1), Yp = (0, bi.g)().sampleCount, await (0, Pc.j)(ip, Lp, Sp, XY, Yp, await Ip);
                const pp = (0, Pc.o)(cp);
                null === pp && console.warn(`${nI} this ${Op} build has no image registry: sky and model images won't show`), (0, yo.h)(pp)
              } else {
                (0, Qo.b)() && await (0, ii.m)();
                const cp = (0, Qo.G)();
                if (null !== cp) {
                  const ip = (0, Wc.o)(Lp);
                  return pp.crash(Qc.RENDER_RELOAD_SITE, new Error(`${cp}${void 0===ip?"":` (${ip.message})`}`)), !1
                }
                Yp = await op.bindSession(xp, ip, (async pp => (0, Pc.A)(Lp, gI, Sp, pp, XY, await Ip)))
              }
            } catch (op) {
              return pp.crash(gI, op), !1
            }(function(pp, ip) {
              const cp = pp,
                {
                  requestCapture: Op,
                  takeCapture: op
                } = cp;
              if ("function" !== typeof Op || "function" !== typeof op) return;
              const Ip = {
                request() {
                  Op.call(cp, ip)
                },
                take() {
                  var pp;
                  return null !== (pp = op.call(cp)) && void 0 !== pp ? pp : null
                }
              };
              window[ao] = Ip
            })(ip, Yp), oL = Yp, Zx = !0;
            const yp = performance.now();
            return zx.boundAtMs = null !== (xp = (0, Qo.J)()) && void 0 !== xp ? xp : yp, zx.indirectHangs = (0, Qo.x)(), zx.restoresSkipped = (0, Qo.K)(), console.info(`${nI} ${Op} renderer bound at ${Math.round(yp)} ms`), !pp.isStopped
          }(Mp, Rp, mp, Pp, yp, wp)) return null;
        if (null !== Pp) {
          var Ii, Si, xi;
          (0, di.C)(Pp);
          const pp = () => !Mp.isStopped && ID();
          cp.e(196).then((() => cp(34306))).then((ip => {
            let {
              devTools: cp
            } = ip;
            Mp.isStopped || cp.setHost(function(pp) {
              return {
                tools: Xo,
                async downloadScene(ip, cp) {
                  let {
                    width: Op,
                    height: op,
                    colouring: Ip
                  } = cp;
                  "screenshot" === ip && null === Ip ? await (0, Mo.g)(pp, Op, op) : console.warn("The Rust client's developer tools take uncoloured screenshots only")
                },
                setAmbientLightIntensity: () => (console.warn("The Rust client's renderer has no ambient light setting"), Promise.resolve()),
                capturePhoto: (ip, cp, Op) => (0, Mo.c)(pp, ip, cp, Op)
              }
            }(function(pp, ip) {
              return {
                canvas: pp,
                maxTextureSize: Co,
                drawing: ip,
                resize: (pp, ip, cp) => {
                  (0, Zc.A)(Ki.wb.Resize, 0, pp / cp, ip / cp, (0, Zc.n)(cp))
                },
                restoreSize: () => {
                  const ip = (0, bi.r)(pp);
                  null !== ip && (0, Zc.A)(Ki.wb.Resize, 0, ip.cssWidth, ip.cssHeight, (0, Zc.n)(ip.renderScale))
                },
                onFrameDrawn: pp => (Eo.add(pp), () => {
                  Eo.delete(pp)
                })
              }
            }(wp, pp)))
          }), (pp => {
            console.warn(`${nI} the developer tools didn't load: no captures this session`, pp)
          }));
          const ip = "webgpu" === Pp && null !== (Ii = null === Ap || void 0 === Ap || null === (Si = Ap.adapter) || void 0 === Si ? void 0 : Si.vendor) && void 0 !== Ii ? Ii : null;
          IL = {
            backend: Pp,
            canvas: wp,
            fallbackReason: null !== (xi = null === Ap || void 0 === Ap ? void 0 : Ap.reason) && void 0 !== xi ? xi : null,
            adapterVendor: ip
          }, nY();
          try {
            (0, UO.w)(Pp, wp, ip)
          } catch (op) {
            (0, UO.y)(), console.error(`${nI} the quality steps didn't start`, op)
          }
        }
        const {
          storagePullBreaks: Li,
          splitPassBreaks: Yi
        } = await yp;
        Yi && console.warn(`${nI} split_pass_breaks on: Windows Adreno 7xx (N-103) or ?sceneDepth=off`);
        const Di = (0, Vp.g)(Ap, (0, Bi.f)());
        if ((0, Vo.r)("webgpuloss")) {
          var Ai, Pi;
          const pp = {
            backend: Pp,
            reason: null !== (Ai = null === Ap || void 0 === Ap ? void 0 : Ap.reason) && void 0 !== Ai ? Ai : null,
            source: null !== (Pi = null === Ap || void 0 === Ap ? void 0 : Ap.source) && void 0 !== Pi ? Pi : null,
            storagePullBreaks: Li,
            noWebGpu: Di.messageKey
          };
          (0, pI.d)((ip => {
            ip.noteWasmPick(pp)
          }))
        }
        const Wi = "webgpu" === Pp;
        if (KS = (0, Vp.k)(Wi ? Mp : null, Wi && null !== (xp = null === (Yp = wS) || void 0 === Yp ? void 0 : Yp.pagePreviews().Dy) && void 0 !== xp ? xp : null, Di, BY), mL) return null;
        if (fp.reserveAtJoin((0, Do.o)(null !== Qp && void 0 !== Qp ? Qp : Mc.i)), Mp.isStopped) return null;
        const yi = pp => {
          if (Sx = performance.now(), xx = !1, null !== SL) try {
            SL.animationFrame(pp)
          } catch (op) {
            GY(op)
          }
          if (function(pp, ip) {
              return ip && !mL && !Dx && SD() && ID() && pp.framePaces(performance.now())
            }(Mp, eL)) {
            if (Mp.writePendingInput(), (0, Xp.c)(pp, VY), FY(!1, pp), null !== SL) try {
              SL.framePaced()
            } catch (op) {
              GY(op)
            }
            requestAnimationFrame(yi)
          } else KY(Mp, eL, "budget") && ((0, Ti.j)(Mp.lastFrameKind) && ID() && (0, Xp.c)(pp, VY), FY(eL && tL, pp), HL.frame(Mp.lastFrameKind, eL && ID(), pp), (0, Ti.e)(Mp.lastFrameKind) && Bi.D.drew(), WD(Mp), fp.afterFrame(), requestAnimationFrame(yi))
        };
        requestAnimationFrame(yi);
        return function(pp) {
          if (pp.has("inputLog") && (0, kO.f)((pp => {
              let {
                action: ip,
                down: cp,
                press: Op
              } = pp;
              console.info(`${RO} input ${ip} ${cp?"down":"up"} press ${Op} at ${performance.now().toFixed(1)}`)
            })), pp.has("inputDump")) {
            const pp = [];
            MO = pp, Object.assign(window, {
              bloxdInputDump: () => pp.join("\n")
            })
          }
        }(new URLSearchParams(window.location.search)), bS = function(pp) {
          let ip = null;
          const cp = () => {
              null !== ip && (clearInterval(ip), ip = null)
            },
            Op = () => {
              document.hidden ? ip ??= setInterval((() => {
                kD(pp) || cp()
              }), xS) : cp()
            };
          return document.addEventListener("visibilitychange", Op), Op(), () => {
            cp(), document.removeEventListener("visibilitychange", Op)
          }
        }(Mp), Mp
      }(ip).then((pp => {
        var ip;
        (Op(jS), qS(null !== pp), null !== pp && (Hp = performance.now()), mS(pp), null === pp) ? null === (ip = wS) || void 0 === ip || ip.pagePreviews().endSession(null === (0, vi.r)()): ix("booted")
      }), (pp => {
        Op(jS), qS(!1), mS(null), AD({
          site: GI,
          error: pp,
          header: null
        }, jS)
      }))
    }

    function lL() {
      const pp = kS;
      null !== pp && RL().then((ip => {
        let {
          pageBuiltInAnimationPack: cp
        } = ip;
        cp().provide(pp)
      }), (pp => {
        console.warn(`${nI} the built-in animation pack's chunk did not load: lifeforms stay in their rest pose`, pp)
      }))
    }
    const QL = new class {
      constructor(pp) {
        this.deps = pp, this.latest = 0, this.sx = null
      }
      apply(pp, ip) {
        return this.load(pp, ip, 0)
      }
      async load(pp, ip, cp) {
        var Op;
        const op = ++this.latest,
          Ip = this.deps.compiler;
        if (void 0 === ip || null === ip || "object" !== typeof ip || 0 === Object.keys(ip).length || null === Ip) return this.drop(pp), !1;
        if ((null === (Op = this.sx) || void 0 === Op ? void 0 : Op.module) === pp && (0, xc.Td)(this.sx.files, ip)) return !1;
        try {
          const [cp, Op] = await Promise.all([Ip(), this.deps.builtIns()]);
          if (op !== this.latest) return !1;
          const Sp = await cp(ip, Ac, {
            builtIns: Op
          });
          if (op !== this.latest) return !1;
          const xp = this.call(pp, Sp);
          if (void 0 === xp) throw new Dc("the compiled animations didn't read against the built-in pack");
          return this.sx = {
              module: pp,
              files: ip
            },
            function(pp) {
              for (let ip = 0; ip + 2 < pp.length; ip += 3) {
                ("error" === pp[ip] ? console.error : console.warn)(`Animation for the texture pack: ${pp[ip+1]}: ${pp[ip+2]}`)
              }
            }(xp), !0
        } catch (xp) {
          var Sp;
          if (op !== this.latest) return !1;
          this.drop(pp), 0 === cp && this.deps.warn("the texture pack's animations didn't load: lifeforms play the built-in ones", xp);
          const Op = (null !== (Sp = this.deps.retryAfterMs) && void 0 !== Sp ? Sp : Yc)[cp];
          return void 0 === Op || xp instanceof Dc || (0, Lc.g)(pp) || setTimeout((() => {
            op === this.latest && this.load(pp, ip, cp + 1)
          }), Op), !1
        }
      }
      call(pp, ip) {
        try {
          return pp.qOp(ip)
        } catch (cp) {
          throw (0, Lc.h)(pp, cp), cp
        }
      }
      clear(pp) {
        this.latest++, this.drop(pp)
      }
      drop(pp) {
        const ip = this.sx;
        if (this.sx = null, (null === ip || void 0 === ip ? void 0 : ip.module) === pp && !(0, Lc.g)(pp)) try {
          this.call(pp, null)
        } catch {}
      }
    }({
      compiler: Oc.e,
      builtIns: async () => {
        const {
          pageBuiltInAnimationPack: pp
        } = await RL();
        return pp().whenSet()
      },
      warn: BY
    });
    async function JL(pp, ip) {
      let Op = !1;
      await BL({
        matchmake: async () => {
          const {
            guestJoinTarget: op,
            guestJoinWithPack: Ip
          } = await cp.e(277).then((() => cp(51202)));
          return Op ? op(pp, ip, fY()) : (Op = !0, Ip(pp, ip, (ip => bY(pp, ip)), fY))
        },
        onFailure: pp => {
          (0, Qc.showJoinFailure)(pp, jS)
        },
        rejoin: VL,
        invalidateTrafficCode: pY
      })
    }
    async function BL(pp) {
      let {
        matchmake: ip,
        onFailure: cp,
        rejoin: op,
        invalidateTrafficCode: Ip,
        pageReady: Sp,
        signal: xp
      } = pp;
      const Lp = () => !0 === (null === xp || void 0 === xp ? void 0 : xp.aborted);
      let Yp;
      const Dp = jo.d.rejoinHold();
      jx = null;
      const Ap = (0, bc.V)("wasm", vD);
      let Pp = !1,
        Wp = performance.now();
      try {
        if (!await MS) return {
          kind: "stopped"
        };
        if (Lp()) return {
          kind: "OO"
        };
        qL().catch((() => {}));
        let pp = await ip();
        var ep, jp;
        if (Wp = performance.now(), !Lp()) wD(null !== (ep = null === (jp = pp.target.session) || void 0 === jp ? void 0 : jp.gameNameWithVariation) && void 0 !== ep ? ep : null);
        const cp = () => performance.now() - pp.matchedAt <= pp.freshMs,
          Op = TL(pp.target).catch((() => {}));
        cp() && !Lp() && (Yp = new Io(pp.target, {
          signal: xp
        }));
        const Ip = performance.now();
        if (null === await RS) return {
          kind: "stopped"
        };
        var kp, mp;
        if (function(pp) {
            var ip, cp;
            if (Up.c.markGameEngineConstructed(), dp) return;
            dp = !0;
            const Op = Math.max(pp, null !== (ip = vp) && void 0 !== ip ? ip : pp);
            (0, wp.i)("ready", Math.max(0, (null !== (cp = tp) && void 0 !== cp ? cp : Op) - Op) / 1e3)
          }(Ip), !Lp())
          if (null !== tp && null !== Hp ? ((0, yp.n)("wasm_loaded", tp), (0, yp.n)("wasm_core_ready", Hp)) : console.warn("[bloxd-wasm-client] a join found the core before boot marked its steps"), pp.target.session && (0, LI.c)(pp.target.session.gameNameWithVariation)) null === (kp = lS) || void 0 === kp || kp.prestart();
        if (await Op, !cp() && !Lp()) null === (mp = Yp) || void 0 === mp || mp.rematched(), pp = await ip(), Wp = performance.now();
        if (Lp()) return {
          kind: "OO"
        };
        const Dp = await async function(pp) {
          var ip, cp, Op;
          let {
            signal: op,
            rejoin: Ip = null,
            early: Sp,
            pageReady: xp
          } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (null !== op && void 0 !== op && op.aborted) throw new DOMException("the join was left", "AbortError");
          const Lp = (Yp = Tx, Dp = performance.now(), null !== Yp && Dp - Yp < gO);
          var Yp, Dp;
          Tx = null;
          const Ap = new AbortController,
            Pp = null !== (ip = null === (cp = pp.session) || void 0 === cp ? void 0 : cp.gameNameWithVariation) && void 0 !== ip ? ip : null;
          wD(Pp), hL({
            controller: Ap,
            game: Pp
          }), fx = null, null === (Op = ax) || void 0 === Op || Op.abort(), ax = null, Fx = !1, gx = null, Gx.clear();
          const Wp = () => {
            (0, Ei.h)(Ap, (0, Ei.e)(op))
          };
          null === op || void 0 === op || op.addEventListener("abort", Wp, {
            once: !0
          });
          try {
            var Up, wp, vp;
            const ip = await RS;
            if (null === ip || ip.isStopped || mL) throw new Error("no core is running to join a game with");
            if (pp.session && null !== KS) {
              const ip = await fL(KS.join(pp.session.gameNameWithVariation), Ap.signal);
              if ((0, Vo.r)("webgpuloss")) {
                const cp = pp.session.gameNameWithVariation,
                  Op = KS.couldntRunInJoinedGame();
                (0, pI.d)((pp => pp.noteWasmJoin(cp, ip, Op)))
              }
              if (null !== ip) throw new Vp.e(ip)
            }
            const [, , , {
              joinRoom: cp
            }] = await fL(Promise.all([(0, lp.n)(ip), TL(pp), null === xp || void 0 === xp ? void 0 : xp(), qL()]), Ap.signal), Op = pp.session, op = Op ? {
              ...OY,
              attachSocket: ip => {
                const cp = DY(ip, pp.endpoint);
                var op;
                null !== cp && (Rx = {
                  conn: cp,
                  info: Op
                }, null === (op = qx) || void 0 === op || op(Op.playerDbId));
                return cp
              }
            } : OY, Yp = await cp(op, pp, {
              signal: Ap.signal,
              early: Sp
            }).catch((pp => {
              throw function(pp) {
                if (!(pp instanceof np.d)) return pp;
                if ("roomError" === pp.stage && null !== gx) return NL(new np.d(pp.message, pp.stage, pp.code, gx), pp);
                const ip = "closed" === pp.stage && null !== bx ? Gx.get(bx.conn) : void 0;
                return void 0 === ip ? pp : NL(new np.d(pp.message, pp.stage, ip.code, null, pp.socketOpened), pp)
              }(pp)
            }));
            if (ux !== Ap) throw Yp.leave(), new DOMException("the join was left", "AbortError");
            nL(Yp), null === (Up = JS) || void 0 === Up || Up.newGame();
            const Dp = function(pp) {
              var ip, cp;
              const {
                session: Op
              } = pp, op = void 0 === Op ? pp.joinOptions.lobbyName : Op.lobbyName;
              return {
                endpoint: pp.endpoint,
                game: null !== (ip = null === Op || void 0 === Op ? void 0 : Op.gameNameWithVariation) && void 0 !== ip ? ip : pp.roomName,
                lobby: String(null !== op && void 0 !== op ? op : null),
                postCookies: null !== (cp = pp.postCookies) && void 0 !== cp ? cp : null
              }
            }(pp);
            ex.set(Yp, Dp), io(Dp);
            const Pp = performance.now(),
              Wp = {
                conn: Yp.conn,
                rejoin: Ip,
                game: null !== (wp = null === (vp = pp.session) || void 0 === vp ? void 0 : vp.gameNameWithVariation) && void 0 !== wp ? wp : "",
                joinedAt: Pp,
                rejoinedAt: Lp ? Pp : null,
                overflow: null
              };
            Mx = Wp,
              function(pp, ip) {
                tY();
                const cp = {
                  endpoint: ip,
                  roomId: pp.seat.room.roomId,
                  heldConn: 0,
                  dropCode: 0,
                  pendingHold: null,
                  resume: new mc({
                    reconnect: (pp, ip, Op) => async function(pp, ip, cp, Op) {
                      const {
                        roomId: op,
                        roomToken: Ip
                      } = dY(pp, ip), Sp = tS;
                      if (null === Sp || Sp.isStopped || mL) throw new Error("no core is running to resume the game on");
                      const {
                        resumeRoom: xp
                      } = await fL(qL(), cp), Lp = {
                        ...OY,
                        attachSocket: ip => Cx !== pp || 0 === pp.heldConn ? (ip.close(), null) : DY(ip, pp.endpoint, !0)
                      };
                      return xp(Lp, pp.endpoint, op, Ip, {
                        signal: cp,
                        onAttached: Op
                      })
                    }(cp, pp, ip, Op),
                    releaseSeat: pp => {
                      !async function(pp, ip) {
                        const {
                          roomId: cp,
                          roomToken: Op
                        } = dY(pp, ip);
                        try {
                          const {
                            leaveHeldSeat: ip
                          } = await qL();
                          await ip(pp.endpoint, cp, Op)
                        } catch (op) {
                          console.warn(`${nI} the held seat of a game left while it reconnected couldn't be released`, op)
                        }
                      }(cp, pp)
                    },
                    isLive: () => Cx === cp && null !== Mx && !mL,
                    ZC: pp => {
                      Nx = pp, vY()
                    },
                    onReconnected: pp => {
                      ! function(pp) {
                        const ip = dx;
                        if (null !== ip && ip !== pp) {
                          const cp = ex.get(ip);
                          void 0 !== cp && ex.set(pp, cp), vL === ip && (vL = pp), ip.detach()
                        }
                        nL(pp)
                      }(pp)
                    },
                    onGaveUp: (pp, ip) => {
                      ! function(pp, ip, cp) {
                        var Op, op;
                        console.warn(`${nI} gave up reconnecting (${cp.reason}, ${cp.attempts} attempts)`, cp.lastError), (0, Qc.reportReconnectGaveUp)(cp, jS);
                        const Ip = null !== (Op = null === (op = Mx) || void 0 === op ? void 0 : op.rejoin) && void 0 !== Op ? Op : null;
                        HY(pp, "gaveUp"), gL();
                        const Sp = {
                          code: pp.dropCode,
                          name: null,
                          reason: OS,
                          canReconnect: !ip,
                          automaticallyReconnect: !1,
                          requiresRefresh: !1
                        };
                        cY(Sp, ip ? null : Ip, !1, {
                          reasonKey: oS,
                          canPlayAgain: ip
                        })
                      }(cp, pp, ip)
                    }
                  })
                };
                Cx = cp, null !== Ex && Ex.conn === pp.conn && cp.resume.onInitialInfo(Ex)
              }(Yp, pp.endpoint), performance.mark(zI), (0, yp.n)("wasm_joined", Pp), setTimeout((() => {
                dx === Yp && (0, yp.g)()
              }), 0), lL(), console.info(`${nI} joined ${pp.roomName} as ${Yp.seat.sessionId} at ${Math.round(performance.now())} ms`);
            const tp = fx;
            fx = null, null !== tp && ZL(Wp, tp.mask, tp.frames);
            const Hp = Gx.get(Yp.conn);
            return Gx.clear(), void 0 !== Hp && (nL(null), iY(Yp.conn, Hp.code, Hp.reason)), Yp
          } finally {
            var tp;
            null === op || void 0 === op || op.removeEventListener("abort", Wp), ux === Ap && aL(dx, null), (null === (tp = bx) || void 0 === tp ? void 0 : tp.join) === Ap && (bx = null)
          }
        }(pp.target, {
          signal: xp,
          rejoin: op(pp.target),
          early: Yp,
          pageReady: Sp
        });
        return Pp = !0, {
          kind: "joined",
          game: Dp
        }
      } catch (qp) {
        if (qp instanceof DOMException && "AbortError" === qp.name || Lp()) return {
          kind: "OO"
        };
        if (mL) return {
          kind: "stopped"
        };
        if (Fx && (Fx = !1, await Ip().catch((pp => {
            console.warn(`${nI} the cached traffic code could not be dropped`, pp)
          }))), null === await RS) return {
          kind: "stopped"
        };
        if (qp instanceof Vp.e) return cp(qp, performance.now() - Wp), {
          kind: "failed",
          error: qp,
          reloading: !1
        };
        if (qp instanceof np.d && qp.code === Op.e.wasmClientNotAllowed.code && dL) return EY("this server refused the wasm client to this account", "refused"), {
          kind: "failed",
          error: qp,
          reloading: !0
        };
        const pp = qp instanceof np.d && qp.code === Op.e.outdatedVersion.code,
          ip = () => null === dx,
          op = await RD({
            site: Qc.JOIN_SITE,
            error: qp,
            outdated: pp
          }, (() => {
            cp(qp, performance.now() - Wp)
          }), {
            stillWanted: ip
          });
        return {
          kind: "failed",
          error: qp,
          reloading: op
        }
      } finally {
        var Rp;
        Pp || Ap.end(), jo.d.releaseHold(Dp);
        const pp = null === (Rp = Yp) || void 0 === Rp ? void 0 : Rp.release();
        pp && (0, Qc.reportUnusedSeat)(pp, jS)
      }
    }

    function NL(pp, ip) {
      return pp.stack = ip.stack, pp
    }

    function TL(pp) {
      return pp.session ? (0, lp.q)(uS, pp.session.gameNameWithVariation) : Promise.resolve()
    }

    function fL(pp, ip) {
      return (0, Ei.j)(ip), new Promise(((cp, Op) => {
        const op = () => {
          Op((0, Ei.e)(ip))
        };
        ip.addEventListener("abort", op, {
          once: !0
        }), pp.then((pp => {
          ip.removeEventListener("abort", op), cp(pp)
        }), (pp => {
          ip.removeEventListener("abort", op), Op(pp)
        }))
      }))
    }

    function bL() {
      hL(null)
    }

    function hL(pp) {
      var ip, cp, Op;
      (function() {
        const pp = Cx;
        null !== pp && HY(pp, "left")
      }(), null === ES || ES.left) || (ES.left = !0, null === (Op = (0, lp.k)()) || void 0 === Op || Op.socketLeft(), (0, Pp.p)({
        websocketUrl: null
      }));
      ux && (0, Ei.h)(ux, new DOMException("the join was left", "AbortError")), gL(null !== pp), null === (ip = KS) || void 0 === ip || ip.leave();
      const op = dx;
      null !== pp && jo.d.setGame(pp.game), aL(null, null !== (cp = null === pp || void 0 === pp ? void 0 : pp.controller) && void 0 !== cp ? cp : null), null === op || void 0 === op || op.leave(), FL(0), (0, Ri.f)()
    }

    function aL(pp, ip) {
      dx = pp, ux = ip, null === dx && null === ux && jo.d.setGame(void 0)
    }

    function nL(pp) {
      aL(pp, ux)
    }

    function FL(pp) {
      const ip = tS;
      return null !== DS && !mL && null !== ip && !ip.isStopped && (!!DS(np.l, 0, (0, np.F)(pp)) && (Wx = !0, 0 === pp || Dx || KY(ip, !1, "all"), !0))
    }

    function gL() {
      var pp, ip;
      arguments.length > 0 && void 0 !== arguments[0] && arguments[0] || (0, bc.f)();
      const cp = null !== (pp = null === (ip = Mx) || void 0 === ip ? void 0 : ip.overflow) && void 0 !== pp ? pp : null;
      Mx = null, null !== cp && (0, Qc.reportEventOverflow)(cp, jS)
    }

    function GL() {
      null !== dx || null !== ux ? bL() : AY()
    }

    function rL(pp, ip) {
      console.warn(`${nI} the event buffer refused records in ${ip} frames (categories ${pp})`), mL || (null !== Mx ? ZL(Mx, pp, ip) : null !== ux && function(pp, ip, cp) {
        var Op;
        const op = function(pp, ip) {
          return null === pp ? "drop" : pp.activated ? "keep" : 0 !== (ip & Vi.r.NetSession) ? "fail" : "drop"
        }((null === (Op = bx) || void 0 === Op ? void 0 : Op.join) === pp ? bx : null, ip);
        "keep" === op ? fx = {
          mask: ip,
          frames: cp
        } : "fail" === op && (0, Ei.h)(pp, new Error("the join's net session was lost to an event overflow"))
      }(ux, pp, ip))
    }

    function ZL(pp, ip, cp) {
      const Op = pp.overflow ??= {
        frames: 0,
        acks: 0,
        mask: 0,
        outcome: null
      };
      Op.frames += cp, Op.acks++, Op.mask |= ip;
      const op = function(pp, ip, cp) {
        if (0 === (pp & Vi.r.NetSession)) return "none";
        const Op = null !== ip.rejoinedAt && cp - ip.rejoinedAt < GO;
        return null === ip.rejoin || Op ? "fail" : "rejoin"
      }(ip, pp, performance.now());
      "none" !== op && queueMicrotask((() => {
        if (Mx !== pp) return;
        const ip = "rejoin" === op && performance.now() - hx >= ap.e;
        Op.outcome = ip ? "rejoined" : "failed", cY(function(pp, ip) {
          return {
            code: 0,
            name: "eventOverflow",
            reason: "Your game fell behind the server.",
            canReconnect: pp,
            automaticallyReconnect: ip,
            requiresRefresh: !1
          }
        }(null !== pp.rejoin, ip), pp.rejoin, ip), bL(), ip && (Tx = performance.now())
      }))
    }

    function zL() {
      dL && function(pp, ip) {
        let {
          mesh: cp,
          worldgen: Op,
          modelPool: op
        } = pp;
        "landingPage" === ip ? (null === cp || void 0 === cp || cp.stopWorkers(), null === Op || void 0 === Op || Op.stopWorker(), null === op || void 0 === op || op.stopWorkers()) : ((0, ci.j)(ip) || "inGame" === ip) && (null === cp || void 0 === cp || cp.restartWorkers(), null === op || void 0 === op || op.startWorkers())
      }({
        mesh: JS,
        worldgen: lS,
        modelPool: FS
      }, ci.c.get("gameState"))
    }

    function sL(pp) {
      eL = pp, uL && KL(uL, pp)
    }

    function KL(pp, ip) {
      pp.style.visibility = ip ? "visible" : "hidden"
    }

    function VL(pp) {
      var ip;
      const cp = pp.roomName,
        Op = null !== (ip = pp.joinOptions.lobbyName) && void 0 !== ip ? ip : null;
      return () => {
        JL(cp, Op)
      }
    }

    function pY() {
      return cp.e(277).then((() => cp(51202))).then((pp => {
        let {
          invalidateGuestTrafficCode: ip
        } = pp;
        return ip()
      })).catch((pp => {
        console.warn(`${nI} the cached traffic code could not be dropped`, pp)
      }))
    }

    function iY(pp, ip, cp) {
      var op, Ip;
      let Sp = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (mL) return;
      if ((null === (op = Mx) || void 0 === op ? void 0 : op.conn) !== pp) return void(null !== ux && Gx.set(pp, {
        code: ip,
        reason: cp
      }));
      const {
        rejoin: xp,
        game: Lp,
        joinedAt: Yp
      } = Mx;
      gL(), tY();
      const Dp = (0, ap.h)(ip, (0, ZO.c)(pp));
      if (console.info(`${nI} the game's connection closed with code ${ip} (${null!==(Ip=Dp.name)&&void 0!==Ip?Ip:"unrecognised"})`), ip === Op.e.gameOrPluginKick.code || Sp || (0, Qc.reportDisconnect)(Dp, jS, {
          closeReason: cp,
          sinceJoinedMs: performance.now() - Yp,
          game: Lp
        }), Dp.requiresRefresh) {
        const pp = "outdatedVersion" === Dp.name,
          cp = new Error(`the game's connection closed with code ${ip}`),
          Op = () => null === Mx && null === ux;
        return void RD({
          site: Qc.JOIN_SITE,
          error: cp,
          outdated: pp
        }, (() => {
          Op() && cY(Dp, null, !1)
        }), {
          stillWanted: Op
        })
      }
      const Ap = Dp.canReconnect ? xp : null,
        Pp = null !== Ap && Dp.automaticallyReconnect && performance.now() - hx >= ap.e;
      cY(Dp, Ap, Pp)
    }

    function cY(pp, ip, cp) {
      var Op;
      let op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
        reasonKey: null,
        canPlayAgain: !1
      };
      if (jL) return;
      jo.d.unwantedLeave(cp && null !== ip && 0 === nx.size), null === (Op = ax) || void 0 === Op || Op.abort();
      const Ip = new AbortController;
      ax = Ip;
      const Sp = null === ip ? null : () => {
        Ip.signal.aborted || (Ip.abort(), ip())
      };
      if (cp && null !== Sp) {
        hx = performance.now();
        const pp = setTimeout(Sp, ap.b);
        Ip.signal.addEventListener("abort", (() => {
          clearTimeout(pp)
        }))
      }
      const xp = {
        code: pp.code,
        name: pp.name,
        reason: pp.reason,
        reasonKey: op.reasonKey,
        reconnect: Sp,
        reconnecting: cp,
        requiresRefresh: pp.requiresRefresh,
        canPlayAgain: op.canPlayAgain
      };
      if (nx.size > 0)
        for (const Yp of [...nx]) try {
          Yp(xp)
        } catch (Lp) {
          console.error(`${nI} an unwanted-leave listener threw`, Lp)
        } else TO((0, JO.i)(pp, null !== Sp, cp), Ip.signal).then((ip => {
          ip && (null !== Sp ? Sp() : pp.requiresRefresh && (0, ii.i)())
        }))
    }
    const OY = {
      attachSocket: pp => DY(pp),
      onConnection: pp => (rx.add(pp), () => {
        rx.delete(pp)
      }),
      sendRaw: (pp, ip) => {
        const cp = ES;
        return null !== cp && cp.conn === pp && YD(cp, ip)
      },
      leaveRoom: FL,
      closeSocket: pp => {
        var ip;
        (null === (ip = ES) || void 0 === ip ? void 0 : ip.conn) === pp && AY()
      },
      flushNet: PY
    };

    function oY(pp) {
      var ip;
      let {
        aux: cp,
        payload: Op
      } = pp;
      null === (ip = tS) || void 0 === ip || ip.queueOptions(cp, Op)
    }

    function IY(pp, ip) {
      oY(function(pp, ip) {
        return To = pp ? {
          preventMovement: ip
        } : null, pp ? fo(ip) : {
          aux: Ki.cc.AdEnd,
          payload: No
        }
      }(pp, ip))
    }

    function SY(pp) {
      var ip;
      vx = pp, null === (ip = tS) || void 0 === ip || ip.setUiPrefs(pp)
    }

    function xY(pp, ip) {
      uS.setMaster(pp, ip)
    }

    function LY(pp) {
      var ip;
      tx = pp, null === (ip = tS) || void 0 === ip || ip.setEnvPrefs(pp)
    }

    function YY(pp) {
      var ip;
      Hx = pp, null === (ip = tS) || void 0 === ip || ip.setLookPrefs(pp)
    }

    function DY(pp) {
      var ip;
      let cp = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new URL(pp.url).origin,
        Op = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      if (pp.readyState === WebSocket.CLOSING || pp.readyState === WebSocket.CLOSED) return console.warn(`${nI} a closing or closed socket can't be attached`), null;
      const op = tS;
      if (!op || op.isStopped) return console.warn(`${nI} no core is running to attach a socket to`), pp.close(), null;
      if (null === (0, lp.k)()) return console.warn(`${nI} the game has not started to attach a socket to`), pp.close(), null;
      if (Ox > Ki.y) return console.warn(`${nI} this core has attached all the sockets it can; reload to play on`), pp.close(), null;
      if (Wx && !Dx && (KY(op, !1, "all"), op.isStopped || mL)) return pp.close(), null;
      AY();
      const Ip = Ox++;
      if (!kY(op, "open", Ip, Op ? Ki.ac.Resume : 0)) return pp.close(), null;
      Op || mi.c.reset(), bx = null === ux ? null : {
        join: ux,
        conn: Ip,
        activated: !1
      }, pp.binaryType = "arraybuffer";
      const Sp = new Rc.e((() => {
          ! function(pp, ip) {
            if (ES !== ip || pp.isStopped || null === UY(ip, iS)) return;
            ip.detach(), ES = null, yY(pp, ip, iS, "", !0), ip.ws.close()
          }(op, xp)
        })),
        xp = {
          ws: pp,
          conn: Ip,
          pending: [],
          pendingBytes: 0,
          left: !1,
          resume: Op,
          token: null,
          detach: () => {
            Sp.dispose(), pp.removeEventListener("message", Lp), pp.removeEventListener("open", Yp), pp.removeEventListener("close", Dp)
          }
        },
        Lp = pp => {
          if (pp.data instanceof ArrayBuffer) {
            var ip;
            const cp = new Uint8Array(pp.data);
            Sp.heard(), xp.token = null !== (ip = (0, qc.b)(cp)) && void 0 !== ip ? ip : xp.token,
              function(pp, ip, cp) {
                HD(pp, (() => {
                  pp.rings.net.writeFrame(ip, cp) || pp.crash(yc.m, `a socket frame of ${cp.byteLength} bytes did not fit the net-in ring`)
                }));
                const Op = pp.rings.net.cursor >= pS;
                !jD() && (Op || pp.netWrittenSinceFrame >= VI) && KY(pp, !1, document.hidden ? "all" : "budget");
                mD(pp)
              }(op, Ip, cp)
          }
        },
        Yp = () => {
          Op || (0, yp.n)("wasm_socket_open", performance.now());
          for (const ip of xp.pending.splice(0)) pp.send(ip);
          xp.pendingBytes = 0
        },
        Dp = pp => {
          if (ES === xp && op.rings.net.cursor > 0 && KY(op, !1, "all"), ES === xp) {
            if (xp.detach(), ES = null, yY(op, xp, pp.code, pp.reason) || WY(op, xp)) return;
            kY(op, "close", Ip), wY(Ip, xp.left), iY(Ip, pp.code, pp.reason)
          }
        };
      return pp.addEventListener("message", Lp), pp.addEventListener("open", Yp), pp.addEventListener("close", Dp), ES = xp, null === (ip = (0, lp.k)()) || void 0 === ip || ip.socketAttached(Ip), (0, Pp.p)({
        websocketUrl: cp
      }), Ip
    }

    function AY() {
      const pp = ES;
      if (!pp) return;
      const ip = tS,
        cp = pp.resume;
      cp && (PY(), ES !== pp) || (ES = null, pp.detach(), pp.ws.close(), null !== ip && (WY(ip, pp) || cp && yY(ip, pp, cS)) || (null !== ip && kY(ip, "close", pp.conn), wY(pp.conn, pp.left)))
    }

    function PY() {
      const pp = tS;
      null !== pp && !pp.isStopped && !mL && !Dx && pp.rings.net.cursor > 0 && KY(pp, !1, "all")
    }

    function WY(pp, ip) {
      var cp;
      if (!ip.resume) return !1;
      const Op = Cx;
      return null !== Op && null !== ip.token && "" !== ip.token && (Op.pendingHold = {
        conn: ip.conn,
        token: `${Op.roomId}:${ip.token}`
      }), kY(pp, "close", ip.conn), null === (cp = (0, lp.k)()) || void 0 === cp || cp.socketDetached(ip.conn), !0
    }

    function yY(pp, ip, cp) {
      let Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "",
        op = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
      const Ip = UY(ip, cp);
      if (null === Ip) return !1;
      const {
        sx: Sp,
        token: xp,
        game: Lp,
        joinedAt: Yp
      } = Ip;
      if (!kY(pp, "close", ip.conn, Ki.D.Held)) return !0;
      console.warn(`${nI} the game's connection ${op?"went silent":`dropped with code ${cp}`}, holding it`);
      const Dp = {
        closeReason: Op,
        sinceJoinedMs: performance.now() - Yp,
        game: Lp
      };
      return (0, Qc.reportDisconnect)((0, ap.h)(cp), jS, Dp, op ? "silent" : void 0), Sp.heldConn = ip.conn, Sp.dropCode = cp, Sp.pendingHold = {
        conn: ip.conn,
        token: `${Sp.roomId}:${xp}`
      }, Dx || KY(pp, !1, "all"), !0
    }

    function UY(pp, ip) {
      const cp = Cx,
        op = Mx,
        Ip = pp.token;
      return null === cp || null === op || mL || pp.left || op.conn !== pp.conn || null === Ip || "" === Ip ? null : (0, Op.j)(ip) && cp.resume.canHoldSeat() ? {
        sx: cp,
        token: Ip,
        game: op.game,
        joinedAt: op.joinedAt
      } : null
    }

    function wY(pp, ip) {
      var cp;
      null === (cp = (0, lp.k)()) || void 0 === cp || cp.closeGame(pp), (0, Bo.e)().close(pp), ip || (0, Pp.p)({
        websocketUrl: null
      })
    }

    function vY() {
      const pp = Nx;
      if (null === pp) return;
      const ip = (0, lp.k)();
      mL || null === ip || ip.ZC(pp) ? Nx = null : performance.now() - yx.pause >= SS && (yx.pause = performance.now(), console.warn(`${nI} the cmd ring had no room for SetPaused(${pp}): written before the next frame`))
    }

    function tY() {
      const pp = Cx;
      Cx = null, null === pp || void 0 === pp || pp.resume.dispose()
    }

    function HY(pp, ip) {
      var cp, Op;
      const {
        heldConn: op
      } = pp, Ip = pp.resume.resumingConn;
      pp.heldConn = 0, pp.pendingHold = null, Cx === pp && (Cx = null), "left" === ip ? pp.resume.leave() : pp.resume.dispose(), 0 === Bx || (null === (cp = ES) || void 0 === cp ? void 0 : cp.conn) !== Bx || "left" === ip && (null === (Op = dx) || void 0 === Op ? void 0 : Op.conn) === Bx || jY(Bx), "gaveUp" === ip && 0 !== Ip && jY(Ip), 0 !== op && "refused" !== ip && (console.info(`${nI} the game held through its drop ${"left"===ip?"was left":"is given up"}`), null === tS || tS.isStopped || kY(tS, "close", op), wY(op, !1))
    }

    function dY(pp, ip) {
      const cp = ip.indexOf(":");
      return {
        roomId: cp < 0 ? pp.roomId : ip.slice(0, cp),
        roomToken: ip.slice(cp + 1)
      }
    }

    function eY(pp) {
      (0, Uc.logClientMeasurement)("join_preload", pp, {
        client: "wasm"
      })
    }

    function uY(pp) {
      var ip;
      Ex = pp;
      const cp = pp.replayOffer && Jx !== pp.conn;
      Qx = cp ? pp.conn : 0, Xx = cp || lx.has(pp.conn) ? 0 : pp.conn, jp.admitted(), pp.conn === Bx && (Bx = 0);
      const Op = Cx;
      null !== Op && (null === (ip = Mx) || void 0 === ip ? void 0 : ip.conn) === pp.conn && Op.resume.onInitialInfo(pp)
    }

    function jY(pp) {
      var ip;
      const cp = ES;
      (null === cp || void 0 === cp ? void 0 : cp.conn) === pp && (cp.left = !0, null === (ip = (0, lp.k)()) || void 0 === ip || ip.socketLeft(), (0, Pp.p)({
        websocketUrl: null
      }), FL(pp) ? setTimeout((() => {
        ES === cp && AY()
      }), np.h) : AY())
    }

    function kY(pp, ip, cp) {
      let Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        op = !1;
      return HD(pp, (() => {
        const {
          net: Ip
        } = pp.rings;
        op = "open" === ip ? Ip.writeOpen(cp, Op) : Ip.writeClose(cp, Op), op || pp.crash(yc.m, `a socket ${ip} did not fit the net-in ring`)
      })), op
    }

    function mY(pp, ip, cp) {
      let Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      if (CY()) return (0, Qc.reportUnsupportedFallback)(pp, ip, cp, Op), void EY(`the wasm client can't run here (${cp}; ${ip})`, ip);
      (0, Qc.showUnsupported)(pp, "unsupported", cp, Op)
    }
    const RY = 1500;

    function qY(pp, ip) {
      const cp = 1 === pp.missing.length && pp.missing[0] === Pc.e,
        Op = ip ? "blockedAfterLoss" : cp ? "noContext" : "unsupported";
      return {
        decline: Op,
        detail: `No WebGPU or WebGL2, and WebGL1 lacks ${pp.missing.join(", ")}`,
        details: {
          missing: pp.missing.join(",")
        },
        retries: "unsupported" !== Op && CY()
      }
    }

    function MY(pp) {
      console.warn(`${nI} ${pp}: reloading once more onto the wasm client`), (0, Qo.l)(), (0, Qc.flushCrashReports)(ii.b).then(ii.i, ii.i)
    }

    function CY() {
      return dL && "wasm" !== (0, ji.f)(window.location.search)
    }

    function EY(pp, ip) {
      console.warn(`${nI} ${pp}: reloading on the JS client`), null !== ip && (0, ji.w)(ip), (0, ji.v)(null === ip ? "reloadOntoJs" : "decline");
      const cp = () => {
        (0, ii.g)(ji.D)
      };
      (0, Qc.flushCrashReports)(ii.b).then(cp, cp)
    }

    function XY(pp, ip, cp, Op) {
      return Kx(pp, ip, cp, Op)
    }

    function lY() {
      null === iL || null === tS || tS.isStopped || mL || null !== GS || null === DS || (GS = iL(DS, BY, NY().follow))
    }

    function QY() {
      var pp, ip, cp;
      return null !== (pp = null === (ip = dS) || void 0 === ip || null === (cp = ip.textures) || void 0 === cp ? void 0 : cp.files()) && void 0 !== pp ? pp : null
    }

    function JY(pp) {
      NY().follow((ip => {
        null !== ip && Promise.all([Promise.all([cp.e(204), cp.e(46)]).then((() => cp(51238))), (0, Qo.L)()]).then((pp => {
          let [{
            followPagePackFiles: cp
          }, Op] = pp;
          const op = null === Op || (0, Pc.s)(Op) ? "webgl" : Op.backend;
          cp(ip, uo.e, op, (pp => {
            uo.e.setPageFiles(pp)
          }), BY)
        }), (ip => {
          console.warn(`${nI} the texture pack's files didn't load: the previews draw the shipped ones until the next opens`, ip), pp()
        }))
      }))
    }

    function BY(pp, ip) {
      console.warn(`${nI} ${pp}`, ip)
    }

    function NY() {
      return HS ??= new Fo({
        load: pp => Promise.all([cp.e(204), cp.e(55)]).then((() => cp(51242))).then((ip => {
          let {
            startPageTexturePackFeed: cp
          } = ip;
          return cp(BY, pp)
        })),
        store: Fc.g,
        Yy: pp => {
          RS.then((() => {
            (0, Qc.reportTexturePackFeedLoadFailure)(pp, jS)
          }))
        }
      }), HS
    }
    const TY = pp => NY().follow(pp);

    function fY() {
      return NY().loaded()
    }
    const bY = function(pp, ip, cp) {
        let Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => performance.now(),
          op = 0;
        return async function(Ip, Sp) {
          let xp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => !0;
          const Lp = ++op,
            Yp = Op() + ip,
            Dp = await
          function(pp, ip) {
            let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {};
            return new Promise((Op => {
              const op = setTimeout((() => {
                Op(null), pp.then((pp => {
                  null !== pp && (pp.joinedWithout(), cp(pp))
                }))
              }), ip);
              pp.then((pp => {
                clearTimeout(op), Op(pp)
              }))
            }))
          }(pp(Ip), ip, (pp => {
            Lp === op && xp() && Sp(pp, Op() + ip).catch((pp => {
              cp("the texture pack step after the join failed", pp)
            }))
          }));
          return null === Dp ? null : Sp(Dp, Yp)
        }
      }((pp => (0, Wi.j)(pp) ? NY().request() : NY().forJoin()), no.b, BY),
      hY = function(pp, ip) {
        let cp = !1;
        return {
          setGamePackConfirm: pp => {
            cp = null !== pp, ip(pp)
          },
          packStep: (ip, Op, op) => pp(ip, Op, (() => cp && op()))
        }
      }(bY, (pp => {
        NY().setGamePackConfirm(pp)
      }));

    function aY(pp) {
      hY.setGamePackConfirm(pp)
    }

    function nY() {
      if (mL || null !== SL || null === cL || null === IL) return;
      const {
        backend: pp,
        canvas: ip,
        fallbackReason: cp,
        adapterVendor: Op
      } = IL, op = cL;
      cL = null;
      try {
        SL = op({
          backend: pp,
          canvas: ip,
          fallbackReason: cp,
          adapterVendor: Op,
          joinedGame: () => mL ? null : dx,
          canSend: () => !mL && null !== dx && dx.conn === Xx,
          inGame: gY,
          shaderPackReach: () => {
            var pp, ip;
            return null !== (pp = null === (ip = KS) || void 0 === ip ? void 0 : ip.reachInJoinedGame()) && void 0 !== pp ? pp : null
          },
          ZU: () => rS,
          msaa: () => oL > 1,
          writeCmd: (pp, ip, cp) => null !== DS && DS(pp, ip, cp),
          takeFailedMeshJobs: () => {
            var pp, ip;
            return null !== (pp = null === (ip = JS) || void 0 === ip ? void 0 : ip.takeFailedMeshJobs()) && void 0 !== pp ? pp : 0
          },
          readLoadCounts: pp => {
            var ip, cp;
            return null !== (ip = null === (cp = tS) || void 0 === cp ? void 0 : cp.readLoadCounts(pp)) && void 0 !== ip && ip
          },
          mainStalled: (pp, ip, cp) => {
            (0, Qc.reportMainStall)(pp, ip, cp, jS)
          }
        })
      } catch (Ip) {
        console.error(`${nI} the frame telemetry didn't start`, Ip)
      }
    }

    function FY(pp, ip) {
      try {
        var cp, Op, op;
        const Ip = Zx && null !== (cp = null === (Op = tS) || void 0 === Op || null === (op = Op.lastHeader) || void 0 === op ? void 0 : op.renderPending) && void 0 !== cp ? cp : 0;
        (0, UO.h)(ip, pp, gY() && !(null !== To), Ip)
      } catch (Ip) {
        (0, UO.y)(), console.error(`${nI} the quality steps stopped`, Ip)
      }
    }

    function gY() {
      return null !== dx && vL === dx && !mL
    }

    function GY(pp) {
      const ip = SL;
      SL = null;
      try {
        null === ip || void 0 === ip || ip.stop()
      } catch {}
      console.error(`${nI} the frame telemetry threw: it stops`, pp)
    }

    function rY(pp) {
      var ip, cp, Op, op;
      if ((0, Bo.e)().fire(pp), "message" === pp.type) {
        if (Ax++, pp.VD === Ki.Jc.ERROR && null !== ux) {
          var Ip;
          const {
            text: ip,
            dropsCache: cp
          } = (0, ap.n)((new TextDecoder).decode(pp.payload));
          Fx ||= cp, (null === (Ip = bx) || void 0 === Ip ? void 0 : Ip.conn) === pp.conn && (gx = ip)
        } else if (pp.VD === Vi.Zb.ResumeComplete) {
          var Sp;
          Jx = pp.conn, pp.conn === Qx && (Qx = 0, Xx = lx.has(pp.conn) ? 0 : pp.conn), null === (Sp = Cx) || void 0 === Sp || Sp.resume.onResumeComplete(pp.conn)
        }
        return
      }
      pp.phase === Ki.H.Left ? Px = pp.conn : pp.phase === Ki.H.Activated && (null === (ip = bx) || void 0 === ip ? void 0 : ip.conn) === pp.conn ? bx.activated = !0 : pp.phase === Ki.H.Resumed ? function(pp) {
        var ip, cp;
        Bx = pp;
        const Op = Cx;
        if (null === Op || 0 === Op.heldConn || (null === (ip = ES) || void 0 === ip ? void 0 : ip.conn) !== pp || !ES.resume || null === Mx) return;
        console.info(`${nI} the game resumed on conn ${pp}, waiting for its InitialInfo`);
        const op = Op.heldConn;
        Op.heldConn = 0, ES.resume = !1, Mx.conn = pp, (null === (cp = Rx) || void 0 === cp ? void 0 : cp.conn) === op && (Rx = {
          conn: pp,
          info: Rx.info
        }), mi.c.apply({
          shopInfo: null,
          _shopVersion: yi.b
        })
      }(pp.conn) : pp.phase === Ki.H.Held ? function(pp) {
        var ip;
        const cp = Cx,
          Op = null !== (ip = null === cp || void 0 === cp ? void 0 : cp.pendingHold) && void 0 !== ip ? ip : null;
        if (null !== cp && null !== Op && Op.conn === pp) return cp.pendingHold = null, cp.heldConn = pp, Bx = 0, console.warn(`${nI} the core holds the game, reconnecting`), void cp.resume.onDropped(Op.token);
        if (pp === Bx) {
          Bx = 0;
          const ip = tS;
          null === ip || ip.isStopped || (console.info(`${nI} the core held again a resumed game the shell ended before its InitialInfo: closing it again`), kY(ip, "close", pp))
        }
      }(pp.conn) : pp.phase === Ki.H.Closed && (null === (cp = Cx) || void 0 === cp || null === (Op = cp.pendingHold) || void 0 === Op ? void 0 : Op.conn) === pp.conn && (Cx.heldConn === pp.conn ? function(pp) {
        const ip = pp.heldConn,
          cp = pp.dropCode;
        HY(pp, "refused"), console.info(`${nI} the core didn't hold the game through its drop: it hadn't started`), queueMicrotask((() => {
          wY(ip, !1), iY(ip, cp, "", !0)
        }))
      }(Cx) : Cx.pendingHold = null), pp.phase !== Ki.H.Held && pp.phase !== Ki.H.Left && pp.phase !== Ki.H.Closed || (lx.add(pp.conn), pp.conn === Xx && (Xx = 0));
      const xp = Object.keys(Ki.H).find((ip => Ki.H[ip] === pp.phase)),
        Lp = 0 === pp.code ? "" : ` (code ${pp.code})`;
      console.info(`${nI} conn ${pp.conn}: ${null!==xp&&void 0!==xp?xp:pp.phase}${Lp}, ${Ax} raw messages so far`), (null === (op = dx) || void 0 === op ? void 0 : op.conn) !== pp.conn || pp.phase !== Ki.H.Left && pp.phase !== Ki.H.Closed || nL(null), mx !== pp.conn || pp.phase !== Ki.H.Left && pp.phase !== Ki.H.Closed || (mx = null, null === dx && null === ux && jo.d.setGame(void 0));
      for (const Dp of [...rx]) try {
        Dp(pp.conn, pp.phase, pp.code)
      } catch (Yp) {
        (0, pc.i)(Yp, `${nI} a connection listener threw`)
      }
    }

    function ZY() {
      (0, Qo.l)(), null === dx && null === ux || (0, gc.i)(), queueMicrotask((() => {
        try {
          DD()
        } catch (pp) {
          console.warn(`${nI} stopping before the reload threw`, pp)
        }(0, Qc.flushCrashReports)(ii.b).then(ii.i, ii.i)
      }))
    }

    function zY() {
      const pp = tS;
      null === pp || pp.isStopped || null === ES || Dx || !pp.hasPendingCommands() || KY(pp, !1, "budget")
    }

    function sY(pp) {
      var ip;
      const cp = dx;
      pp.persisted || null === cp || (null === (ip = ES) || void 0 === ip ? void 0 : ip.conn) !== cp.conn || ES.left || cp.leave()
    }

    function KY(pp, ip, Op) {
      let op = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const Ip = Dx;
      Dx = !0;
      try {
        const Ip = pp.rings.net.cursor >= pS;
        Ip && "all" !== Op && !document.hidden && PD("backlog", `a shown tab's net-in is ${pp.rings.net.cursor} bytes behind: one frame reads it all`);
        return function(pp, ip, Op, op) {
          var Ip, Sp, xp, Lp;
          if (mL) return !1;
          if (HD(pp, pD), mL || pp.isStopped) return !1;
          xD() && ix("modelsIn");
          vY(), ox = performance.now(), Px = null, Wx = !1, (0, Xp.K)(), null === (Ip = hS) || void 0 === Ip || Ip.beforeFrame(), CO(ox, pp), (0, Xp.B)(ox, iD), Yx = !0;
          const Yp = ip && SD();
          let Dp;
          try {
            Dp = pp.frame(ox, Yp, Op)
          } finally {
            Yx = !1
          }
          if (!Dp) return !1;
          OL.observe(null !== (Sp = null === (xp = pp.lastHeader) || void 0 === xp ? void 0 : xp.chunksCancelled) && void 0 !== Sp ? Sp : 0);
          const Ap = pp.lastFrameKind,
            Pp = (0, Ti.e)(Ap);
          (function(pp) {
            null !== SI && SI.afterFrame(performance.now(), pp)
          })(Pp), null === (Lp = xL) || void 0 === Lp || Lp.frame(pp, ox, Ap), ip && (tL = Pp);
          Pp && (0, Ji.e)(ox);
          if (null !== SL) try {
            SL.frameRan(pp, ox, performance.now(), Ap)
          } catch (Up) {
            GY(Up)
          }
          "drawn" === Ap && ID() && function() {
            for (const pp of [...Eo]) pp()
          }();
          pp.forEachNetOut(LD);
          const Wp = ES;
          null !== Px && (null === Wp || void 0 === Wp ? void 0 : Wp.conn) === Px && YD(Wp, np.p);
          oD(pp),
            function(pp) {
              const ip = 0 !== (pp.headerWord(Vi.x.LoadSteps) & Vi.I.JoinPreload);
              ip !== kx && (kx = ip, (0, Qc.setCrashAdPreload)(ip), (0, bc.M)())
            }(pp), ip && function(pp) {
              var ip, Op, op;
              if (null === dx || !SD()) return;
              const Ip = pp.headerWord(Vi.x.LoadSteps);
              null === wL || vL === dx && !wL.frame(ox, 0 !== (Ip & Vi.L.TerrainDrawn)) || (wL = null);
              if (0 === (Ip & Vi.I.PlayerBound)) return;
              const Sp = pp.lastHeader,
                xp = !Zx || 0 === (null === Sp || void 0 === Sp ? void 0 : Sp.renderPending);
              !AL && xp && (AL = !0, performance.mark(KI));
              if (vL === dx) return;
              const Lp = null !== (ip = null === Sp || void 0 === Sp ? void 0 : Sp.firstView) && void 0 !== ip ? ip : Ki.fb.NotYet;
              if (Zx && Lp === Ki.fb.NotYet) return;
              if (DL && (!0 !== (null === (Op = (0, lp.k)()) || void 0 === Op ? void 0 : Op.isSessionLive) || !xp)) return;
              vL = dx;
              const Yp = dx;
              if (setTimeout((() => {
                  dx === Yp && (0, yp.j)()
                }), 0), null === (op = KS) || void 0 === op || op.playable(), function() {
                  clearTimeout(CS), CS = setTimeout((() => {
                    gY() && uD((pp => {
                      let {
                        prefetchWorldgenWorker: ip
                      } = pp;
                      ip()
                    }))
                  }), YS)
                }(), DL) return;
              DL = !0, performance.mark(sI), (0, Vo.r)("render") && Promise.all([cp.e(78), cp.e(49)]).then((() => cp(4776))).then((pp => {
                let {
                  renderDebugPlayable: ip
                } = pp;
                ip()
              }), (pp => {
                console.warn("The render debug topic didn't load", pp)
              }));
              const Dp = Math.round(performance.now()),
                Ap = pp.readViewQueuedPrograms();
              null !== Ap && (0, yp.n)("wasm_view_links", Dp, (0, wi.pb)(Ap));
              const Pp = null === UL || null === WL ? 0 : Math.max(0, WL - UL),
                Wp = null === UL ? 0 : Math.max(0, Dp - UL),
                Up = Zx ? pp.readFirstViewWait(Pp, Wp) : null;
              null !== Up && (0, yp.l)(Up);
              if (Zx && Lp !== Ki.fb.Drawn) {
                const ip = Lp === Ki.fb.HeldBackstop ? "held_draws" : "long",
                  {
                    cause: cp
                  } = cD(pp);
                if (console.warn(`${nI} playable at ${Dp} ms on the first view's ${ip} backstop, ${cp}: it wasn't drawn whole in time`), (0, yp.n)("wasm_view_backstop", Dp, `${ip}:${cp}`), "long" === ip) {
                  var wp, vp;
                  const ip = null !== (wp = null === (vp = Mx) || void 0 === vp ? void 0 : vp.game) && void 0 !== wp ? wp : "";
                  wL = new Gc.e((() => {
                    const {
                      cause: cp,
                      census: Op
                    } = cD(pp);
                    (0, Qc.reportFirstViewNoTerrain)(ip, cp, Op, jS), (0, ui.q)("noTerrain")
                  }))
                }
              } else console.info(`${nI} playable at ${Dp} ms${Zx?"":" (no renderer)"}`);
              setTimeout(pL, 0), (0, qi.e)().catch((pp => {
                console.error(`${nI} item sprites didn't load, so item particles show the missing texture`, pp)
              })), Wo.b.warm()
            }(pp);
          (0, yc.J)(pp, {
            worldgen: lS,
            mesh: JS
          }),
          function(pp) {
            pp.forEachEvent(XO);
            for (const ip of EO) try {
              (0, kO.b)(ip)
            } catch (Up) {
              if ((0, pc.f)(Up)) {
                pp.crashOn(yc.i, Up);
                break
              }
              console.error(`${RO} an input action listener threw`, Up)
            }
            EO.length = 0
          }(pp), op && (0, Ni.d)();
          return !pp.isStopped
        }(pp, ip, "all" === Op || Ip, op)
      } finally {
        Dx = Ip, Ip || (Ix = performance.now())
      }
    }

    function VY(pp) {
      console.error(`${nI} a frame-start listener threw`, pp)
    }

    function pD() {
      var pp, ip, cp, Op;
      null === (pp = nS) || void 0 === pp || pp.drain(DS, AS), null === (ip = ZS) || void 0 === ip || ip.drain(DS), null === (cp = zS) || void 0 === cp || cp.drain(performance.now()), Vx(DS), null === (Op = GS) || void 0 === Op || Op.drain()
    }

    function iD(pp) {
      console.error(`${nI} a before-frame listener threw`, pp)
    }

    function cD(pp) {
      const ip = (0, lp.k)(),
        cp = (0, lp.u)(),
        Op = null === ip || null === cp ? null : cp.readDrawCensus(ip.api);
      return {
        cause: (0, Gc.i)(pp.headerWord(Vi.x.LoadSteps), Op),
        census: Op
      }
    }
    const OD = {
      ChunkRequested: "wasm_chunk_requested",
      ChunkStored: "wasm_chunk_stored",
      MeshLanded: "wasm_mesh_landed",
      PlayerChunk: "wasm_player_chunk",
      TerrainDrawn: "wasm_terrain_drawn"
    };

    function oD(pp) {
      var ip;
      if (DL) return;
      if (null === WL && SD() && (WL = performance.now()), null === dx || 0 === (pp.headerWord(Vi.x.LoadSteps) & Vi.I.PlayerBound) ? UL = null : UL ??= performance.now(), null === ux && null === dx) return;
      null === WL || yL || (yL = !0, (0, yp.n)("wasm_startup_loaded", WL));
      let cp = 0;
      null !== dx ? cp = -1 : !0 === (null === (ip = bx) || void 0 === ip ? void 0 : ip.activated) && (cp = ~Vi.L.TerrainDrawn);
      const Op = pp.headerWord(Vi.x.LoadSteps) & cp & ~PL;
      if (0 === Op) return;
      PL |= Op;
      const op = performance.now();
      for (const [Ip, Sp] of Object.entries(OD)) 0 !== (Op & Vi.L[Ip]) && (0, yp.n)(Sp, op)
    }

    function ID() {
      return Zx && SD()
    }

    function SD() {
      return sS && xD()
    }

    function xD() {
      return null === nS || nS.startupDone
    }

    function LD(pp, ip) {
      const cp = ES;
      (null === cp || void 0 === cp ? void 0 : cp.conn) === pp ? YD(cp, ip) : wx++
    }

    function YD(pp, ip) {
      const {
        ws: cp
      } = pp;
      return cp.readyState === WebSocket.OPEN ? (cp.send(ip), !0) : cp.readyState === WebSocket.CONNECTING && pp.pendingBytes + ip.byteLength <= IS ? (pp.pending.push(ip.slice()), pp.pendingBytes += ip.byteLength, !0) : (wx++, !1)
    }

    function DD() {
      var pp, ip, cp, Op, op, Ip, Sp, xp, Lp, Yp, Dp, Ap, Pp, Wp, yp, Up, wp;
      mL = !0, HL.stop(), (0, iI.endLookDebugTake)(), SI = null, tY(), (0, Xp.H)().unlockPointer(), (0, Xp.D)(null), null === (pp = aS) || void 0 === pp || pp(), aS = null, null === (ip = (0, lp.u)()) || void 0 === ip || ip.followCursorAim(null), (0, Ni.H)(), (0, lp.i)(), uS.stop(), null === (cp = LL) || void 0 === cp || cp(), LL = null, null === (Op = YL) || void 0 === Op || Op(), YL = null, null === (op = SL) || void 0 === op || op.stop(), SL = null, (0, Zc.r)(null), null === (Ip = XS) || void 0 === Ip || Ip(), XS = null, null === (Sp = lS) || void 0 === Sp || Sp.stop(), lS = null, null === (xp = JS) || void 0 === xp || xp.stop(), JS = null, null !== (Lp = dS) && void 0 !== Lp && null !== (Yp = Lp.textures) && void 0 !== Yp && Yp.assets && (0, Ho.j)(null), null === (Dp = dS) || void 0 === Dp || Dp.stop(), dS = null, eS = null;
      const vp = BS;
      BS = null, vp && (vp.stop(), tD(vp)), null === (Ap = ZS) || void 0 === Ap || Ap.dispose(), ZS = null, null === (Pp = zS) || void 0 === Pp || Pp.dispose(), zS = null, nS = null, null === (Wp = gS) || void 0 === Wp || Wp(), gS = null, null === (yp = bS) || void 0 === yp || yp(), bS = null, null !== Lx && (clearTimeout(Lx), Lx = null), null === (Up = hS) || void 0 === Up || Up.stop(), hS = null, bL(), jo.d.release(), AY();
      const tp = GS;
      GS = null;
      try {
        null === tp || void 0 === tp || tp.dispose()
      } catch (Hp) {
        console.warn(`${nI} the sky's images didn't release`, Hp)
      }(0, yo.h)(null), null === (wp = wS) || void 0 === wp || wp.pagePreviews().endSession(null === (0, vi.r)())
    }

    function AD(pp, ip) {
      var cp, Op;
      const op = null !== (cp = null === (Op = BS) || void 0 === Op ? void 0 : Op.details()) && void 0 !== cp ? cp : {},
        Ip = pp.site === gI || pp.site === GI || pp.site === Qc.RENDER_RELOAD_SITE || pp.site === rI ? pp.error instanceof WebAssembly.RuntimeError || pp.error instanceof Lc.b : !(0, Pc.w)(pp.error) && (0, yc.C)(pp);
      Ip && pp.error instanceof Error && (0, vi.Y)(pp.error);
      const Sp = Ip || pp.site === yc.p ? (0, Qc.readTrap)(pp.error) : null,
        xp = null !== Sp && (0, cc.h)(Sp.kind, Sp.refusedBytes) ? Sp.refusedBytes : 0,
        Lp = (0, Cc.p)(),
        Yp = null === NS ? (0, Do.t)(function() {
          try {
            return (0, vi.z)().buffer.byteLength
          } catch {
            return 0
          }
        }(), xp, Lp) : NS.ceilingMayRefuse(xp, Lp),
        Dp = xp > 0 && !Yp && CY();
      var Ap;
      if (Dp && ((0, ji.w)("oom"), (0, ji.v)("decline"), kL = !0), DD(), (0, Qo.b)()) return console.warn(`${nI} the session stopped at ${pp.site} as the page reloads`, pp.error), void((0, Pc.w)(pp.error) || (null === (Ap = pp.header) || void 0 === Ap ? void 0 : Ap.lastError) === Ki.M.CoreBusy || (0, Qc.reportStoppedCore)(pp, ip, Sp, {
        memoryDetails: op,
        declined: Dp
      }));
      (0, Qc.showCrash)(pp, ip, Sp, {
        memoryDetails: op,
        declined: Dp
      })
    }

    function PD(pp, ip) {
      const cp = performance.now();
      return !(cp - yx[pp] < SS) && (yx[pp] = cp, console.warn(`${nI} ${ip}`), !0)
    }

    function WD(pp) {
      const {
        input: ip,
        net: cp,
        worker: Op
      } = pp.rings, op = pp.optionsDropped, Ip = ip.dropped + op + cp.dropped + Op.dropped + wx;
      Ip !== Ux && PD("dropped", `${Ip} records dropped so far (input ${ip.dropped}, options ${op}, net ${cp.dropped}, worker ${Op.dropped}, net-out ${wx})`) && (Ux = Ip)
    }

    function yD() {
      var pp, ip;
      const cp = (0, fc.e)();
      if (null === cp) return null;
      const Op = (0, nc.s)(cp);
      return {
        ...Op,
        horizontal: Math.min(Op.horizontal, null !== (pp = null === (ip = BS) || void 0 === ip ? void 0 : ip.shedDistanceInUse()) && void 0 !== pp ? pp : 1 / 0)
      }
    }

    function UD(pp) {
      var ip, cp;
      return {
        samples: Zx ? oL : null,
        sunShadows: pp,
        renderDistance: null !== (ip = null === (cp = yD()) || void 0 === cp ? void 0 : cp.horizontal) && void 0 !== ip ? ip : null
      }
    }

    function wD(pp) {
      jx = pp, (0, bc.M)()
    }

    function vD() {
      var pp, ip, cp;
      const Op = yD();
      return {
        ...null === (pp = BS) || void 0 === pp ? void 0 : pp.pageKillSnapshot(),
        renderDistance: null !== (ip = null === Op || void 0 === Op ? void 0 : Op.horizontal) && void 0 !== ip ? ip : null,
        renderDistanceVertical: null !== (cp = null === Op || void 0 === Op ? void 0 : Op.vertical) && void 0 !== cp ? cp : null,
        chunkCap: TS,
        budgetBasis: fS,
        renderBackend: (0, Qo.C)(),
        adPreload: kx,
        ...(0, hc.d)(jx)
      }
    }

    function tD(pp) {
      var ip;
      console.info(`${nI} wasm memory at the session's end`, pp.details());
      const {
        wasmMainMiB: cp,
        wasmWorkersMiB: Op,
        peakStoredChunks: op
      } = pp.pageKillSnapshot(), Ip = navigator.deviceMemory;
      (0, Uc.logClientMeasurement)("wasm_memory_end", {
        wasmMainMiB: cp,
        wasmWorkersMiB: Op,
        peakStoredChunks: op
      }, {
        client: "wasm",
        renderBackend: null !== (ip = (0, Qo.C)()) && void 0 !== ip ? ip : "none",
        os: (0, ac.getOperatingSystem)(),
        deviceMemory: String(null !== Ip && void 0 !== Ip ? Ip : "unreported")
      })
    }

    function HD(pp, ip) {
      if (!pp.isStopped) try {
        ip()
      } catch (cp) {
        pp.crash(yc.s, cp)
      }
    }

    function dD() {
      return QS ??= cp.e(72).then((() => cp(51244))).catch((pp => {
        throw QS = null, pp
      })), QS
    }
    async function eD() {
      const {
        createWorldgenWorker: pp,
        worldgenWorkerReady: ip
      } = await dD();
      return await ip(), pp
    }

    function uD(pp) {
      var ip;
      null === (ip = QS) || void 0 === ip || ip.then(pp, (() => {}))
    }

    function jD() {
      return performance.now() - Math.max(Ix, Sx) >= xS
    }

    function kD(pp) {
      const ip = document.hidden || xx ? "all" : "budget";
      xx = !0;
      const cp = KY(pp, !1, ip);
      var Op;
      cp && (WD(pp), null === (Op = BS) || void 0 === Op || Op.afterFrame());
      return cp
    }

    function mD(pp) {
      pp.isStopped || 0 === pp.rings.net.cursor || jD() && !kD(pp) || pp.rings.net.cursor > 0 && performance.now() - Sx >= xS / 2 && function(pp) {
        Lx ??= setTimeout((() => {
          Lx = null, mD(pp)
        }), xS)
      }(pp)
    }

    function RD(pp, ip) {
      return async function(pp, ip, cp) {
        let {
          stop: Op,
          stillWanted: op,
          beforeReload: Ip
        } = cp;
        const Sp = await (0, rO.i)(pp, {
          stillWanted: op,
          beforeReload: async () => {
            Op(), await Promise.all([(0, Qc.flushCrashReports)(ii.b), null === Ip || void 0 === Ip ? void 0 : Ip()])
          },
          reload: ii.i
        });
        return Sp || ip(), Sp
      }(pp, ip, {
        ...arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        stop: DD
      })
    }
    let qD = !1;

    function MD() {
      return qD = !0, async function(pp, ip, Op) {
        const {
          gamePackSource: op
        } = await cp.e(276).then((() => cp(41273)));
        await hY.packStep(pp, ((cp, Op) => cp.packForGame(pp, op(ip), Op)), Op)
      }(...arguments)
    }

    function CD(pp) {
      ! function(pp, ip) {
        pp((pp => {
          null === pp || void 0 === pp || pp.subscribe((pp => {
            let {
              pack: cp,
              gameSource: Op
            } = pp;
            ip(null === Op || null === cp ? null : {
              pack: cp,
              source: "" === Op ? null : Op
            })
          }))
        }))
      }(TY, pp)
    }
    let ED = !1,
      XD = null,
      lD = !1,
      QD = !1;

    function JD() {
      var pp;
      ED || (ED = !0, XL("play", Kp), (0, Pp.o)(new rD), xp.gameBridge.attach(hp), hD().catch((() => {})), (0, lp.y)((pp => {
        Ai(pp.setTextHost)
      })), pp = TD, nx.add(pp), function(pp) {
        for (const ip of VS) pp(ip);
        px.add(pp)
      }((pp => {
        ND(BD[pp])
      })))
    }
    const BD = {
      booted: Ip.k.INITIALISE_NOA,
      texturesIn: Ip.k.REGISTRATION,
      modelsIn: Ip.k.SETUP_LIFEFORMS
    };

    function ND(pp) {
      Lp.m.GA("matchmakeAndPlayStepCompleted", {
        step: pp,
        totalSubSteps: 1
      })
    }

    function TD(pp) {
      if (!lD) return;
      const {
        gameNameWithVariation: ip,
        lobbyName: cp
      } = (0, Pp.d)();
      if (pp.code === Op.e.serverUpdating.code) return (new rD).leaveLive(), void bD(ip, cp);
      Lp.m.GA("unwantedLeftGame", {
        reason: fD(pp),
        requiresRefresh: pp.requiresRefresh,
        canReconnect: null !== pp.reconnect,
        automaticallyReconnect: pp.reconnecting,
        canPlayAgain: pp.canPlayAgain,
        gameNameWithVariation: ip,
        lobbyName: cp
      }), (new rD).leaveLive()
    }

    function fD(pp) {
      return null !== pp.reasonKey ? {
        translationKey: pp.reasonKey
      } : "gameOrPluginKick" === pp.name ? pp.reason : `You have disconnected from the server.\n${pp.reason}`
    }

    function bD(pp, ip) {
      var Op;
      Op = (0, Yp.E)(pp, ip), Promise.resolve().then((() => cp(1538))).then((pp => {
        let {
          navigatePreserveSearch: ip
        } = pp;
        ip(Op)
      })).catch((pp => {
        console.warn("[bloxd-wasm-client] the page's router didn't navigate: loading the page instead", pp), (0, ii.e)(Op)
      }))
    }

    function hD() {
      return XD ??= Promise.all([cp.e(73), cp.e(76), cp.e(75), cp.e(74), cp.e(90), cp.e(87), cp.e(273), cp.e(191), cp.e(228), cp.e(252), cp.e(275), cp.e(47)]).then((() => cp(41212))).then((pp => {
        try {
          pp.attachPlayGameSources()
        } catch (ip) {
          throw console.error("[bloxd-wasm-client] the play sources did not attach", ip),
            function(pp) {
              RS.then((ip => {
                null === ip || ip.isStopped || mL ? console.warn(`${nI} the play sources threw as they attached, after the client stopped`, pp) : AD({
                  site: rI,
                  error: pp,
                  header: null
                }, jS)
              }))
            }(ip), ip
        }
      }), (pp => {
        throw XD = null, new lp.e(pp)
      })), XD
    }
    async function aD(pp, ip) {
      JD(), qD = !0, lD = !0;
      let cp = {
          place: pp.place,
          matchedAt: pp.matchedAt
        },
        Sp = pp.place.gameNameWithVariation;
      const xp = (0, Ap.d)();
      let Lp = null;
      const Yp = await BL({
        matchmake: async () => {
          let ip = cp;
          if (cp = null, null === ip) {
            const cp = await pp.rematch();
            if (cp.isError()) throw Lp = cp.asError().forward(), new Error(cp.asError().message);
            ip = {
              place: cp.getValue(),
              matchedAt: performance.now()
            }
          }
          Sp = ip.place.gameNameWithVariation;
          return {
            target: await (0, gp.c)(pp.userContext, ip.place, fY(), xp),
            matchedAt: ip.matchedAt,
            freshMs: gp.b
          }
        },
        pageReady: hD,
        onFailure: (pp, ip) => {
          null === Lp && function(pp, ip) {
            (0, Qc.reportPageJoinFailure)(pp, jS, ip)
          }(pp, {
            sinceJoinStartMs: ip,
            game: Sp
          })
        },
        rejoin: () => () => {},
        invalidateTrafficCode: () => pp.userContext.invalidateTrafficCode(),
        signal: ip
      });
      switch (Yp.kind) {
        case "joined":
          if (xp) {
            setTimeout((() => {
              jp.ready()
            }), 0);
            const {
              game: pp
            } = Yp;
            (0, Ap.o)((() => {
              pp.endJoinAd() && ((0, yp.k)(), jp.adEnded())
            }))
          }
          return QD || (QD = !0, (0, mp.c)()), lD ? (ND(Ip.k.CONNECT_TO_GAME_SERVER), ND(Ip.k.SHADER_PACK), function() {
            var pp, ip;
            return null !== (pp = null === (ip = KS) || void 0 === ip ? void 0 : ip.runsInJoinedGame()) && void 0 !== pp && pp
          }() && (0, kp.c)(pp.userContext, Sp).catch((pp => {
            console.error("Failed to report the shader pack session", pp)
          })), function() {
            const pp = function() {
              var pp, ip;
              return null !== (pp = null === (ip = KS) || void 0 === ip ? void 0 : ip.couldntRunInJoinedGame()) && void 0 !== pp ? pp : null
            }();
            null !== pp && (0, kp.b)(pp)
          }(), op.d.value(void 0)) : GD("The server ended the game as it joined");
        case "failed":
          if (!Yp.reloading) {
            if (null !== Lp) return Lp;
            if ((Yp.error instanceof np.r || Yp.error instanceof np.d) && Yp.error.code === Op.e.serverUpdating.code) {
              if (ip.aborted) return GD("Left the game while it loaded");
              const {
                gameNameWithVariation: pp,
                lobbyName: cp
              } = (0, Pp.d)();
              return bD(pp, cp), GD("The server is updating")
            }
            return Yp.error instanceof Vp.e ? op.d.errorWithCode(Yp.error.messageKey, Ip.k.SHADER_PACK, {
              severity: "medium"
            }) : op.d.errorWithCode(function(pp) {
              if (pp instanceof np.D || pp instanceof Cp.f) return pp.message;
              if (nD(pp)) return (0, ap.k)(pp.code, pp.serverText);
              return ap.g
            }(Yp.error), Ip.k.CONNECT_TO_GAME_SERVER, {
              error: FD(Yp.error) ? Yp.error : void 0,
              severity: gD(Yp.error),
              gameServerUnreachable: (0, Fp.c)(Yp.error),
              joinFailure: (0, Fp.j)(Yp.error),
              rematch: (0, qp.c)(Yp.error),
              gameRefused: (0, Mp.b)(Yp.error)
            })
          }
          return GD("Reloading into the new build");
        case "stopped":
          return GD("The game client stopped, and shows why");
        case "OO":
          return GD("Left the game while it loaded")
      }
    }

    function nD(pp) {
      return pp instanceof np.r || pp instanceof np.d && "attach" !== pp.stage
    }

    function FD(pp) {
      return !(pp instanceof np.D) && !nD(pp) && void 0 === (0, Fp.c)(pp)
    }

    function gD(pp) {
      return nD(pp) ? pp instanceof np.d && (0, ap.h)(pp.code).requiresRefresh ? "medium" : "low" : FD(pp) || pp instanceof np.D ? "medium" : "low"
    }

    function GD(pp) {
      return op.d.errorWithCode(pp, Ip.k.CONNECT_TO_GAME_SERVER, {
        severity: "low",
        OO: !0
      })
    }
    class rD {
      leave(pp) {
        if ((0, Ep.b)()) {
          var ip, cp;
          if ((0, Sp.c)()) return;
          (0, Wp.c)(!0 === (null === (ip = (0, Ep.i)()) || void 0 === ip || null === (cp = ip.currentViewer) || void 0 === cp ? void 0 : cp.unsavedChanges), pp)
        } else this.leaveLive()
      }
      leaveLive() {
        var pp;
        qD && (null === (pp = fY()) || void 0 === pp || pp.endGamePack());
        if (!lD) return;
        lD = !1, (0, Rp.e)();
        try {
          var ip;
          null === (ip = (0, lp.u)()) || void 0 === ip || ip.clearWasmCameraScreen()
        } catch (Op) {
          console.error("[bloxd-wasm-client] the camera screen didn't clear", Op)
        }
        const {
          gameNameWithVariation: cp
        } = (0, Pp.d)();
        try {
          GL()
        } finally {
          (0, Pp.p)({
            websocketUrl: null
          }), Lp.m.GA("leaveGame", {
            gameNameWithVariation: cp
          }), (0, Dp.I)()
        }
      }
      isReplay() {
        return (0, Ep.b)()
      }
    }
  },
  41125: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => op,
      d: () => Op,
      g: () => xp,
      j: () => Sp
    });
    const Op = 12e4,
      op = 3e4,
      Ip = {
        hidden: () => "undefined" !== typeof document && document.hidden,
        listen: pp => "undefined" === typeof document ? () => {} : (document.addEventListener("visibilitychange", pp), () => {
          document.removeEventListener("visibilitychange", pp)
        })
      };

    function Sp(pp) {
      return `it sent no start within ${Math.round(pp)} ms`
    }
    class xp {
      constructor(pp, ip) {
        let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => performance.now(),
          Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Ip;
        this.timeoutMs = pp, this.onTimeout = ip, this.now = cp, this.visibility = Op, this.timer = null, this.counted = 0, this.step = null, this.unlisten = void 0, this.unlisten = Op.listen((() => {
          this.onVisibility()
        })), Op.hidden() || this.next()
      }
      cancel() {
        this.pause(), this.unlisten()
      }
      onVisibility() {
        this.visibility.hidden() ? (this.counted += this.credit(), this.pause()) : null === this.timer && this.next()
      }
      credit() {
        const pp = this.step;
        return null === pp ? 0 : Math.min(this.now() - pp.at, pp.ms)
      }
      pause() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null), this.step = null
      }
      next() {
        const pp = this.timeoutMs - this.counted;
        if (pp <= 0) return void this.arm(1e3, (() => {
          this.cancel(), this.onTimeout(this.counted)
        }));
        const ip = Math.min(pp, 5e3);
        this.step = {
          at: this.now(),
          ms: ip
        }, this.arm(ip, (() => {
          this.counted += this.credit(), this.step = null, this.next()
        }))
      }
      arm(pp, ip) {
        this.timer = setTimeout((() => {
          this.timer = null, ip()
        }), pp)
      }
    }
  },
  39849: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => xp
    });
    var Op = cp(337),
      op = cp(1014);
    const Ip = new Set(["bingo", "buildAFactory2", "classic", "testGym"]),
      Sp = new Set(["creativeFlat", "skyGrid"]);

    function xp(pp) {
      const ip = (0, Op.Mb)(pp);
      return "classic" !== ip ? Ip.has(ip) : !(0, op.j)(pp) && !Sp.has((0, Op.Ib)(pp))
    }
  },
  37964: (pp, ip, cp) => {
    function Op(pp) {
      return "string" !== typeof pp || 2 !== pp.length && ":" !== pp[2] ? null : pp[0] + pp[1]
    }
    cp.d(ip, {
      b: () => wp,
      f: () => jp,
      h: () => ep,
      i: () => kp,
      l: () => xp,
      o: () => Sp,
      r: () => Ip,
      t: () => Lp,
      w: () => vp,
      z: () => Up
    });
    const op = ["op:ytInitialPlayerResponse.adPlacements", "op:ytInitialPlayerResponse.playerAds", "op:ytInitialPlayerResponse.adSlots", "op:playerResponse.adPlacements", "op:playerResponse.playerAds", "op:playerResponse.adSlots"];

    function Ip(pp) {
      if (function(pp) {
          for (let ip = 0; ip < op.length; ip++)
            if (pp === op[ip]) return !0;
          return !1
        }(pp)) return !1;
      const ip = Op(pp);
      return "op" === ip || "ep" === ip || "wi" === ip || "pp" === ip || "fp:call" === pp || "fp:t" === pp
    }

    function Sp(pp) {
      return "fp" === Op(pp) && !Ip(pp)
    }

    function xp(pp) {
      if ("string" !== typeof pp) return !1;
      return "o" === pp[0] && "p" === pp[1] && (2 === pp.length || ":" === pp[2]) || "fp:call" === pp || "2" === pp || "t" === pp || "a" === pp
    }

    function Lp(pp, ip) {
      return `~${function(pp){return pp.length<2?pp:":"===pp[1]?pp[0]:pp[0]+pp[1]}(ip)}~${pp}`
    }
    const Yp = 200;

    function Dp(pp) {
      let ip = pp.length - 1;
      for (let cp = 0; cp < 2; cp++) {
        const cp = ip;
        for (; ip >= 0 && pp[ip] >= "0" && pp[ip] <= "9";) ip--;
        if (ip < 0 || ip === cp || ":" !== pp[ip]) return -1;
        ip--
      }
      return ip + 1
    }

    function Ap(pp) {
      return "unknown" === pp || Dp(pp) >= 0
    }

    function Pp(pp, ip) {
      return pp[ip] >= "\ud800" && pp[ip] <= "\udbff" && ip + 1 < pp.length && pp[ip + 1] >= "\udc00" && pp[ip + 1] <= "\udfff" ? 2 : 1
    }

    function Wp(pp, ip, cp) {
      return 2 === cp ? 4 : pp[ip] <= "\x7f" ? 1 : pp[ip] <= "\u07ff" ? 2 : 3
    }

    function yp(pp, ip, cp) {
      let Op = 0;
      for (; Op < ip;) {
        const ip = Pp(pp, Op),
          op = Wp(pp, Op, ip);
        if (op > cp) break;
        cp -= op, Op += ip
      }
      return Op
    }

    function Up(pp) {
      let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1 / 0;
      if ("string" !== typeof pp || pp.length > Yp || !Ap(pp)) return "t";
      let cp = 2;
      for (let xp = 0; xp < pp.length;) {
        const ip = Pp(pp, xp);
        cp += Wp(pp, xp, ip), xp += ip
      }
      if (cp <= ip) return `t ${pp}`;
      const Op = Dp(pp),
        op = ip - 2 - (pp.length - Op);
      if (op < 0) return "t";
      const Ip = yp(pp, Op, op);
      let Sp = "t ";
      for (let xp = 0; xp < Ip; xp++) Sp += pp[xp];
      for (let xp = Op; xp < pp.length; xp++) Sp += pp[xp];
      return Sp
    }
    const wp = 62;

    function vp(pp) {
      let ip = "so:";
      const cp = yp(pp, pp.length, wp - ip.length);
      for (let Op = 0; Op < cp; Op++) ip += pp[Op];
      return ip
    }
    const tp = "BABYLON ",
      Hp = "DECODE ",
      dp = "BABYLON@ ";

    function ep(pp) {
      return vp(tp + pp)
    }

    function jp(pp, ip) {
      return vp(dp + pp + " " + ip)
    }

    function kp(pp) {
      return vp(Hp + pp)
    }
  },
  41031: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => Op
    });
    const Op = {
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
  38200: pp => {
    pp.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAKUlEQVQYGWM8CwQMeAATHjmw1JBQwAh06v+LFy8yvH//noGXl/ccuq8A/vQKd00yOdIAAAAASUVORK5CYII="
  },
  38190: pp => {
    pp.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAALUlEQVQYGWM8CwQMeAATHjmw1JBQwAh06v8DBw4wCAoKMnBzczN8/PjxHLLPAORwCnfkvOdNAAAAAElFTkSuQmCC"
  },
  38206: pp => {
    pp.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAKUlEQVQYGWM8CwQMeAATHjmw1JBQwAh06v8DBw4wCAoKMvz58+ccuq8A8vQKd2AxC9MAAAAASUVORK5CYII="
  },
  38183: pp => {
    pp.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAANUlEQVQYGWM8CwQMeAATHjmw1JBQAHLp/wMHDvy/ePHi/4CAgP937tz5Ly6u+5/P3uw/KAgAgjwWhHm22JoAAAAASUVORK5CYII="
  },
  38198: pp => {
    pp.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAKUlEQVQYGWM8CwQMeAATHjmw1JBQwAh06v8DBw4wCAoKMvz58+ccuq8A8vQKd2AxC9MAAAAASUVORK5CYII="
  },
  38960: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => Ip
    });
    var Op = cp(2963);
    const op = ["none", "idle", "now"];

    function Ip() {
      const pp = () => (0, Op.H)();
      return {
        memoryBytes: () => (0, Op.z)().buffer.byteLength,
        reserveUpFront: ip => pp().kA(ip),
        reserveAhead: ip => pp().jA(ip),
        setCeiling: ip => {
          pp().mA(ip)
        },
        lowWater: () => op[pp().uA()] ?? "none",
        stats: () => function(pp) {
          const ip = new Uint32Array((0, Op.z)().buffer, pp, 17),
            cp = pp => ip[pp] ?? 0,
            op = pp => ({
              upFront: cp(pp),
              ahead: cp(pp + 1),
              onDemandInFrame: cp(pp + 2),
              onDemand: cp(pp + 3)
            });
          return {
            memoryBytes: cp(0),
            initialBytes: cp(1),
            liveBytes: cp(2),
            peakLiveBytes: cp(3),
            headroomBytes: cp(4),
            unusedBytes: cp(5),
            ceilingBytes: cp(6),
            reservesRefused: cp(7),
            grows: op(8),
            grownBytes: op(12),
            allocationsRefused: cp(16)
          }
        }(pp().RA()),
        takeBallast: () => pp().qA(),
        takePressure: () => pp().MA()
      }
    }
  },
  5167: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => xp,
      e: () => Sp,
      f: () => Op,
      j: () => Up,
      m: () => Ap,
      o: () => op,
      p: () => Ip,
      s: () => Yp,
      v: () => Dp,
      z: () => Pp
    });
    const Op = 5;

    function op(pp) {
      return pp === Op
    }

    function Ip(pp) {
      return [...pp.features]
    }
    const Sp = 262144,
      xp = 256,
      Lp = 256;

    function Yp(pp) {
      if ("object" !== typeof pp || null === pp || Array.isArray(pp)) return "The pack has no files.";
      const ip = [];
      for (const [cp, Op] of Object.entries(pp)) {
        if ("string" !== typeof Op) return `${cp} isn't text.`;
        ip.push({
          path: cp,
          source: Op
        })
      }
      return ip.sort(((pp, ip) => Ap(pp.path, ip.path))),
        function(pp) {
          if (0 === pp.length) return "The pack has no .wgsl files.";
          if (pp.length > xp) return `The pack has more than ${xp} .wgsl files.`;
          const ip = new Set;
          for (const {
              path: cp
            }
            of pp) {
            const pp = Wp(cp);
            if (null !== pp) return pp;
            if (ip.has(cp)) return `The pack has two files at ${cp}.`;
            ip.add(cp)
          }
          return Pp(pp) > Sp ? `The pack's .wgsl files are over ${Sp/1024} KB in total.` : null
        }(ip) ?? ip
    }

    function Dp(pp) {
      const ip = {};
      for (const cp of pp) ip[cp.path] = cp.source;
      return ip
    }

    function Ap(pp, ip) {
      return pp < ip ? -1 : pp > ip ? 1 : 0
    }

    function Pp(pp) {
      const ip = new TextEncoder;
      let cp = 0;
      for (const {
          source: Op
        }
        of pp) cp += ip.encode(Op).byteLength;
      return cp
    }

    function Wp(pp) {
      if (!pp.toLowerCase().endsWith(".wgsl")) return `${pp} isn't a .wgsl file.`;
      if (pp.length > Lp) return `A file path is over ${Lp} characters.`;
      if (pp.includes("\\") || /[\u0000-\u001f]/.test(pp)) return `${pp} isn't a valid file path.`;
      return pp.split("/").some((pp => "" === pp || "." === pp || ".." === pp)) ? `${pp} isn't a valid file path.` : null
    }
    const yp = /^(.*)\[rot\[([1-4])$/;

    function Up(pp, ip) {
      let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
      const Op = new Map;
      ip.forEach(((pp, ip) => {
        let {
          numAnimStates: cp,
          animStartIdx: op
        } = pp;
        for (let Ip = 1; Ip < cp; Ip++) Op.set(op + Ip - 1, ip)
      }));
      const op = Object.entries(pp),
        Ip = new Map;
      for (const [Up, wp] of op) {
        const pp = yp.exec(Up);
        "1" === pp?.[2] && Ip.set(pp[1], wp + 1)
      }
      const Sp = pp => {
          const ip = yp.exec(pp);
          return ip && Ip.has(ip[1]) ? {
            root: ip[1],
            rotation: Number(ip[2]) - 1
          } : null
        },
        xp = new Set(op.map((pp => {
          let [ip] = pp;
          return Sp(ip)?.root ?? ip
        }))),
        Lp = (pp, cp) => {
          const Op = pp.replace(/_?0$/, "");
          return (ip[cp]?.numAnimStates ?? 0) > 1 && !xp.has(Op) ? Op : pp
        },
        Yp = new Map;
      for (const [yp, Up] of op) Yp.set(Up, Lp(Sp(yp)?.root ?? yp, Up));
      const Dp = op.reduce(((pp, ip) => {
          let [, cp] = ip;
          return Math.max(pp, cp + 1)
        }), 0),
        Ap = Array.from({
          length: Dp
        }, ((pp, ip) => ({
          id: ip + 1,
          rotation: 0
        }))),
        Pp = new Map,
        Wp = new Map;
      for (const [yp, Up] of op) {
        const pp = Sp(yp),
          ip = Op.get(Up);
        if (void 0 !== ip) {
          const cp = Yp.get(ip);
          Wp.set(yp, {
            name: yp,
            texture: cp,
            kind: "frame"
          }), pp && !Wp.has(pp.root) && Wp.set(pp.root, {
            name: pp.root,
            texture: cp,
            kind: "frame"
          });
          continue
        }
        const cp = Yp.get(Up),
          op = pp?.root ?? yp;
        if (cp !== op && Wp.set(op, {
            name: op,
            texture: cp,
            kind: "frame"
          }), pp) {
          const ip = Ip.get(pp.root);
          Ap[Up] = {
            id: ip,
            rotation: pp.rotation
          }, Pp.set(cp, ip), Wp.set(yp, {
            name: yp,
            texture: cp,
            kind: "rotation"
          })
        } else Pp.set(cp, Up + 1)
      }
      for (const yp of Pp.keys()) Wp.delete(yp);
      for (const [yp, Up] of cp) {
        const pp = Pp.get(Up);
        void 0 === pp || Pp.has(yp) || (Pp.set(yp, pp), Wp.delete(yp))
      }
      return {
        named: [...Pp].sort(((pp, ip) => {
          let [cp] = pp, [Op] = ip;
          return cp < Op ? -1 : cp > Op ? 1 : 0
        })).map((pp => {
          let [ip, cp] = pp;
          return {
            name: ip,
            id: cp
          }
        })),
        aliases: [...Wp.values()],
        layers: Ap
      }
    }
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);