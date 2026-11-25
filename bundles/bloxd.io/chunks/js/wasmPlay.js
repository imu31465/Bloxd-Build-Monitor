export const id = 64;
export const ids = [64, 117, 118, 138];
export const modules = {
  39933: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => su,
      f: () => Uu
    });
    const su = "The world isn't loaded, so no blocks can be seen.",
      Uu = "The world isn't loaded, so nothing in it can be seen."
  },
  4872: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => Cu
    });
    var su = ju(22),
      Uu = ju(24),
      Zu = ju(1343),
      Xu = ju(2943);
    const lu = 3e4,
      qu = 1e3;

    function fu() {
      return "visible" === document.visibilityState && "inGame" === su.d.get("gameState") && (0, Zu.w)()
    }

    function Cu(uu, Eu) {
      (0, Xu.r)() || function(uu, Eu, ju) {
        let su = 0;
        const Uu = setInterval((() => {
          Eu() && (su += qu, su >= uu && (clearInterval(Uu), ju()))
        }), qu)
      }(lu, fu, (() => {
        Eu().then((() => {
          uu(`saved for the player after ${lu/1e3} s of play`), (0, Xu.A)(), Uu.h.TY("chat", {
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
  34416: (uu, Eu, ju) => {
    function su(uu, Eu) {
      return 0 === uu.length ? 0 : uu[Math.min(uu.length - 1, Math.floor(Eu * uu.length))]
    }

    function Uu(uu) {
      return uu.toFixed(1)
    }
    ju.d(Eu, {
      d: () => Uu,
      g: () => su
    })
  },
  38333: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => fu,
      e: () => Cu,
      g: () => eu,
      i: () => Mu,
      k: () => gu
    });
    var su = ju(4872),
      Uu = ju(34416),
      Zu = ju(2943);
    const Xu = 20,
      lu = ["totalMs", "slotMs", "workerMs", "applyMs", "ahead", "inFlight", "Mb", "jobMs"];

    function qu(uu) {
      return [...uu].sort(((uu, Eu) => uu - Eu))
    }
    const fu = [];

    function Cu(uu, Eu, ju) {
      return `${uu},${Eu},${ju}`
    }
    class bu {
      constructor() {
        this.pending = new Map, this.jobs = new Map, this.edits = [], this.nextEdit = 0, this.reported = 0, this.windowStart = performance.now(), this.frames = 0, this.lastFrameAt = 0, this.maxFrameMs = 0, this.jobsSent = 0, this.maxAhead = 0, this.maxCapacity = 0, this.roundTrips = [], this.windowEdits = [], this.outliers = 0, this.gaveUp = 0
      }
      edit(uu, Eu) {
        var ju;
        const su = null !== (ju = this.pending.get(uu)) && void 0 !== ju ? ju : [];
        su.push({
          editAt: Eu,
          meshJobId: 0
        }), this.pending.set(uu, su)
      }
      frame(uu) {
        this.lastFrameAt > 0 && (this.maxFrameMs = Math.max(this.maxFrameMs, uu - this.lastFrameAt)), this.lastFrameAt = uu, this.frames++, uu - this.windowStart >= 1e3 && this.summarise(uu)
      }
      sent(uu, Eu, ju, su, Uu, Zu, Xu) {
        this.jobs.set(Eu, {
          sentAt: Xu,
          receivedAt: 0,
          ahead: ju,
          inFlight: su,
          Mb: Uu,
          jobMs: 0
        }), this.jobsSent++, this.maxAhead = Math.max(this.maxAhead, ju), this.maxCapacity = Math.max(this.maxCapacity, Uu);
        for (const qu of null !== (lu = this.pending.get(uu)) && void 0 !== lu ? lu : []) {
          var lu;
          Zu.includes(qu.meshJobId) || (qu.meshJobId = Eu)
        }
      }
      received(uu, Eu, ju) {
        const su = this.jobs.get(uu);
        void 0 !== su && (this.roundTrips.push(ju - su.sentAt), su.receivedAt = ju, su.jobMs = Eu)
      }
      failed(uu) {
        this.jobs.delete(uu)
      }
      reassign(uu, Eu, ju) {
        this.jobs.delete(Eu);
        for (const Uu of null !== (su = this.pending.get(uu)) && void 0 !== su ? su : []) {
          var su;
          Uu.meshJobId === Eu && (Uu.meshJobId = ju)
        }
      }
      applied(uu, Eu, ju) {
        const su = this.jobs.get(Eu);
        this.jobs.delete(Eu), void 0 !== su && this.show(uu, su, ju, (uu => uu.meshJobId === Eu))
      }
      emptied(uu, Eu) {
        const ju = {
          sentAt: Eu,
          receivedAt: Eu,
          ahead: 0,
          inFlight: 0,
          Mb: 0,
          jobMs: 0
        };
        this.show(uu, ju, Eu, (() => !0))
      }
      show(uu, Eu, ju, su) {
        const Uu = this.pending.get(uu);
        if (!Uu) return;
        const Zu = Uu.filter((Uu => !su(Uu) || (this.record(uu, Uu.editAt, Eu, ju), !1)));
        Zu.length > 0 ? this.pending.set(uu, Zu) : this.pending.delete(uu)
      }
      HN(uu) {
        this.reported += uu, this === Nu && this.reported >= Xu && null !== Ou && (Ou(), Ou = null)
      }
      record(uu, Eu, ju, su) {
        const Uu = {
          totalMs: su - Eu,
          slotMs: ju.sentAt - Eu,
          workerMs: ju.receivedAt - ju.sentAt,
          applyMs: su - ju.receivedAt,
          ahead: ju.ahead,
          inFlight: ju.inFlight,
          Mb: ju.Mb,
          jobMs: ju.jobMs
        };
        if (this.edits[this.nextEdit] = Uu, this.nextEdit = (this.nextEdit + 1) % 500, this.windowEdits.push(Uu.totalMs), this.HN(1), Uu.totalMs < 100 || ++this.outliers > 5) return;
        const Xu = uu => Math.round(uu);
        (0, Zu.k)("remesh", `slow edit (${uu}) shown in ${Xu(Uu.totalMs)} ms: slot ${Xu(Uu.slotMs)}, worker ${Xu(Uu.workerMs)} (${Uu.ahead} ahead, ${Uu.inFlight}/${Uu.Mb} in flight; job ${Xu(Uu.jobMs)}), apply ${Xu(Uu.applyMs)}`)
      }
      summarise(uu) {
        const Eu = (uu - this.windowStart) / 1e3;
        for (const [ju, su] of this.pending) {
          const Eu = su.filter((Eu => uu - Eu.editAt <= 1e4));
          this.gaveUp += su.length - Eu.length, this.HN(su.length - Eu.length), Eu.length > 0 ? this.pending.set(ju, Eu) : this.pending.delete(ju)
        }
        for (const [ju, su] of this.jobs) uu - su.sentAt > (su.receivedAt > 0 ? 1e4 : 6e4) && this.jobs.delete(ju);
        if (this.jobsSent > 0 || this.roundTrips.length > 0 || this.windowEdits.length > 0 || this.gaveUp > 0) {
          const uu = qu(this.roundTrips),
            ju = qu(this.windowEdits),
            su = Math.max(0, this.outliers - 5);
          (0, Zu.k)("remesh", `${Math.round(this.frames/Eu)} fps (longest ${Math.round(this.maxFrameMs)} ms) | ${this.jobsSent} jobs sent, up to ${this.maxAhead} ahead on a worker, capacity ${this.maxCapacity} | round trip p50 ${Math.round((0,Uu.g)(uu,.5))} max ${Math.round((0,Uu.g)(uu,1))} ms | ${ju.length} edits shown, p50 ${Math.round((0,Uu.g)(ju,.5))} max ${Math.round((0,Uu.g)(ju,1))} ms${su>0?`, ${su} more slow`:""}${this.gaveUp>0?`, ${this.gaveUp} never shown`:""}`)
        }
        this.windowStart = uu, this.frames = 0, this.maxFrameMs = 0, this.jobsSent = 0, this.maxAhead = 0, this.maxCapacity = 0, this.roundTrips = [], this.windowEdits = [], this.outliers = 0, this.gaveUp = 0
      }
      stats() {
        const uu = lu.map((uu => {
          const Eu = qu(this.edits.map((Eu => Eu[uu])));
          return `${uu}: p50 ${Math.round((0,Uu.g)(Eu,.5))} p90 ${Math.round((0,Uu.g)(Eu,.9))} max ${Math.round((0,Uu.g)(Eu,1))}`
        }));
        return [`${this.edits.length} edits`, ...uu].join("\n")
      }
      dump() {
        const uu = this.edits.map((uu => lu.map((Eu => Math.round(10 * uu[Eu]) / 10)).join(",")));
        return [this.stats(), lu.join(","), ...uu].join("\n")
      }
    }
    class cu {
      constructor(uu, Eu) {
        this.log = uu, this.Uc = Eu
      }
      edit(uu, Eu, ju) {
        const [su, Uu, Zu] = this.Uc.zb.Esu(uu, Eu, ju), Xu = this.Uc.zb.CY.bY(su, Uu, Zu);
        Xu && Xu.qY && this.log.edit(Cu(su, Uu, Zu), performance.now())
      }
      sent(uu, Eu, ju, su, Uu) {
        this.log.sent(Cu(uu.i, uu.j, uu.k), Eu, ju, su, Uu, fu, performance.now())
      }
      received(uu) {
        this.log.received(uu.meshJobId, uu.jobMs, performance.now())
      }
      failed(uu) {
        this.log.failed(uu)
      }
      applied(uu, Eu) {
        this.log.applied(Cu(uu.i, uu.j, uu.k), Eu, performance.now())
      }
    }
    let Nu = null,
      Ou = null,
      Yu = !1,
      hu = null;

    function Du() {
      return new Promise((uu => {
        null !== Nu && Nu.reported >= Xu ? uu() : Ou = uu
      }))
    }

    function gu() {
      const uu = new bu;
      return Nu = uu, (0, Zu.j)("remesh", (() => uu.dump())), (0, Zu.c)("remeshStats", (() => {
        console.log(uu.stats())
      })), Yu || (Yu = !0, (0, su.c)((uu => {
        (0, Zu.k)("remesh", uu)
      }), Du)), uu
    }

    function Mu(uu) {
      const Eu = gu();
      hu = new cu(Eu, uu), uu.mG.meshProbe = hu, uu.on("beforeRender", (() => {
        Eu.frame(performance.now())
      }))
    }

    function eu(uu, Eu, ju) {
      var su;
      null === (su = hu) || void 0 === su || su.edit(uu, Eu, ju)
    }
  },
  34448: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => su
    });
    const su = new Set(["chunkBorders"])
  },
  34588: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => Xu,
      e: () => Uu,
      i: () => Cu
    });
    var su = ju(1614);

    function Uu(uu) {
      var Eu;
      return {
        ...Xu.store,
        yaw: Xu.store.yaw + (null !== (Eu = su.d[uu].previewYaw) && void 0 !== Eu ? Eu : 0)
      }
    }
    const Zu = {
        yaw: .61 * Math.PI,
        pitch: Math.PI / 2.05,
        radius: 30,
        target: [0, 0, 0]
      },
      Xu = {
        player: Zu,
        store: {
          ...Zu,
          radius: 33,
          target: [0, 3.9, 0]
        }
      };

    function lu(uu, Eu) {
      uu instanceof Promise ? uu.then(Eu).catch((uu => {
        console.error("Couldn't open the preview", uu)
      })) : Eu(uu)
    }
    class qu {
      constructor(uu) {
        this.opened = null, this.view = null, this.size = null, this.closed = !1, lu(uu, (uu => {
          this.closed ? uu.close() : (this.opened = uu, null !== this.size && uu.resize(this.size.width, this.size.height), null !== this.view && uu.show(this.view))
        }))
      }
      show(uu) {
        var Eu;
        this.view = uu, null === (Eu = this.opened) || void 0 === Eu || Eu.show(uu)
      }
      resize(uu, Eu) {
        var ju;
        this.size = {
          width: uu,
          height: Eu
        }, null === (ju = this.opened) || void 0 === ju || ju.resize(uu, Eu)
      }
      close() {
        var uu;
        this.closed = !0, null === (uu = this.opened) || void 0 === uu || uu.close(), this.opened = null
      }
    }
    class fu {
      constructor(uu) {
        this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(uu).then((uu => uu.ready)), lu(uu, (uu => {
          this.closed ? uu.close() : (this.opened = uu, null !== this.size && uu.resize(this.size.width, this.size.height))
        }))
      }
      get dev() {
        return this.opened.dev
      }
      isReady() {
        var uu, Eu;
        return null !== (uu = null === (Eu = this.opened) || void 0 === Eu ? void 0 : Eu.isReady()) && void 0 !== uu && uu
      }
      setCosmetic(uu, Eu) {
        var ju;
        null === (ju = this.opened) || void 0 === ju || ju.setCosmetic(uu, Eu)
      }
      playEmote(uu) {
        var Eu;
        null === (Eu = this.opened) || void 0 === Eu || Eu.playEmote(uu)
      }
      setOrbit(uu) {
        var Eu;
        null === (Eu = this.opened) || void 0 === Eu || Eu.setOrbit(uu)
      }
      resetCamera() {
        var uu;
        null === (uu = this.opened) || void 0 === uu || uu.resetCamera()
      }
      async untilDrawn(uu) {
        var Eu;
        await this.ready, await (null === (Eu = this.opened) || void 0 === Eu ? void 0 : Eu.untilDrawn(uu))
      }
      resize(uu, Eu) {
        var ju;
        this.size = {
          width: uu,
          height: Eu
        }, null === (ju = this.opened) || void 0 === ju || ju.resize(uu, Eu)
      }
      close() {
        var uu;
        this.closed = !0, null === (uu = this.opened) || void 0 === uu || uu.close(), this.opened = null
      }
    }
    const Cu = new class {
      constructor() {
        this.host = null, this.makeDefault = null
      }
      setHost(uu) {
        this.host = uu
      }
      setDefaultHost(uu) {
        this.makeDefault = uu
      }
      current() {
        if (null === this.host) {
          if (null === this.makeDefault) throw new Error("no preview host");
          this.host = this.makeDefault()
        }
        return this.host
      }
      openMob(uu) {
        return new qu(this.current().openMob(uu))
      }
      openPet(uu) {
        return new qu(this.current().openPet(uu))
      }
      openMobLineup(uu) {
        return new qu(this.current().openMobLineup(uu))
      }
      openCharacter(uu, Eu) {
        return new fu(this.current().openCharacter(uu, Eu))
      }
    }
  },
  5206: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => su.h,
      h: () => Uu,
      k: () => su.o
    });
    var su = ju(5209);
    const Uu = [!1, !0].flatMap((uu => ["terrain", "liquid", "model"].map((Eu => ({
      strict: uu,
      program: Eu
    })))))
  },
  39525: (uu, Eu, ju) => {
    ju.r(Eu), ju.d(Eu, {
      ShaderPackPage: () => qu,
      harnessShaderPackMode: () => cu,
      setHarnessUrlShaderPack: () => bu,
      shaderPackPage: () => Cu
    });
    var su = ju(91),
      Uu = ju(31),
      Zu = (ju(3653), ju(5206), ju(3651)),
      Xu = ju(6854);
    ju(6827);
    const lu = {
      status: "none"
    };
    class qu {
      constructor() {
        this.stored = null, this.compiling = null, this.pagePack = null, this.resolved = null
      }
      preload() {
        if (null === this.stored) {
          if ((0, Zu.e)(su.featureFlags.settings.canUseShaderPacks)) return this.stored = Promise.resolve(null), fu().then((uu => {
            uu && Uu.k.removeItem(Zu.c)
          })), this.stored;
          this.prefetchHint() && this.compiler().catch((() => {})), this.stored = this.readStored()
        }
        return this.stored
      }
      prefetchHint() {
        return (0, Zu.d)(su.featureFlags.settings.canUseShaderPacks)
      }
      async loadActive() {
        const uu = await this.load();
        return "active" === uu.status ? uu.pack : null
      }
      load() {
        return this.pagePack ??= this.read().catch((uu => (console.error("Failed to load the shader pack", uu), lu))).then((uu => (this.resolved ??= uu, uu))), this.pagePack
      }
      hasNone() {
        var uu;
        return "none" === (null === (uu = this.resolved) || void 0 === uu ? void 0 : uu.status)
      }
      block(uu) {
        this.resolved = {
          status: "blocked",
          messageKey: uu,
          variants: null
        }, this.pagePack = Promise.resolve(this.resolved)
      }
      compiler() {
        return this.compiling ??= Promise.all([ju.e(78), ju.e(136), ju.e(142)]).then((() => ju(42003))).then((uu => (uu.prefetchCompiler(), uu))), this.compiling
      }
      async readStored() {
        const uu = await fu();
        return uu && this.compiler().then((uu => uu.reconcileHint())).catch((uu => {
          console.error("Failed to correct the shader pack hint", uu)
        })), uu
      }
      async read() {
        const uu = await this.preload();
        return uu ? (await this.compiler()).compilePagePack(uu) : lu
      }
    }
    async function fu() {
      if (!(0, Zu.i)(su.featureFlags.settings.canUseShaderPacks)) return null;
      try {
        const uu = await (0, Xu.e)(!0);
        return uu || Uu.k.setItem(Zu.c, !1), uu
      } catch (uu) {
        return console.error("Failed to read the stored shader pack", uu), Uu.k.removeItem(Zu.c), null
      }
    }
    const Cu = new qu;

    function bu(uu, Eu) {}

    function cu() {
      return null
    }
  },
  39561: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => bu,
      f: () => cu
    });
    var su = ju(166),
      Uu = ju(193),
      Zu = ju(1547),
      Xu = ju(3099),
      lu = ju(1559),
      qu = ju(36856),
      fu = ju(701),
      Cu = ju(39525);

    function bu(uu) {
      (0, Xu.reportClientError)("matchmake_failed", uu, su.j[su.j.SHADER_PACK])
    }
    async function cu(uu, Eu) {
      var ju;
      const su = null === (ju = await Cu.shaderPackPage.preload()) || void 0 === ju ? void 0 : ju.listing,
        Xu = (0, qu.c)();
      su && null !== Xu && await lu.b.reportShaderPackSession(uu, {
        packId: su.packId,
        sourceHash: su.sourceHash,
        game: (0, Zu.f)(Eu, Uu.x, "other"),
        playSessionId: Xu,
        visitSessionId: (0, fu.f)()
      })
    }
  },
  6854: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => Uu,
      e: () => Zu
    });
    var su = ju(31);
    const Uu = "shaderPack";
    async function Zu() {
      var uu;
      let Eu = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (uu = await su.h.getItem(Uu, Eu)) && void 0 !== uu ? uu : null
    }
  },
  6827: (uu, Eu, ju) => {
    ju.r(Eu), ju.d(Eu, {
      loadShaderPackTextures: () => Xu,
      shaderPackTextures: () => lu
    });
    var su = ju(5209);
    let Uu = null,
      Zu = null;

    function Xu() {
      return Zu ??= Promise.all([ju.e(73), ju.e(190)]).then((() => ju(40746))).then((uu => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: Eu,
          textureNameToIndex: ju,
          textureAnimationData: Zu
        } = uu;
        return Uu ??= (0, su.j)(ju, Zu, Eu), Uu
      })), Zu
    }

    function lu() {
      if (null === Uu) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return Uu
    }
  },
  34501: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => Zu
    });
    var su = ju(1128);

    function Uu() {
      var uu, Eu;
      return null !== (uu = null === (Eu = screen.orientation) || void 0 === Eu ? void 0 : Eu.type) && void 0 !== uu ? uu : innerWidth > innerHeight ? "landscape" : "portrait"
    }
    const Zu = new class {
      constructor() {
        this.holding = !1, this.heldOrientation = "", this.releaseTimer = void 0, this.longHoldTimer = void 0, this.resizers = new Set, this.releaseWhenShown = () => {
          document.hidden || (document.removeEventListener("visibilitychange", this.releaseWhenShown), this.release())
        }
      }
      isHeld() {
        return this.holding && Uu() !== this.heldOrientation && (this.holding = !1), this.holding
      }
      hold() {
        this.heldOrientation = Uu(), this.holding = !0, clearTimeout(this.releaseTimer), document.removeEventListener("visibilitychange", this.releaseWhenShown), clearTimeout(this.longHoldTimer), this.longHoldTimer = setTimeout((() => {
          this.holding && (0, su.YY)(new Error("Game view size held for 60 s"))
        }), 6e4)
      }
      release() {
        clearTimeout(this.longHoldTimer), this.releaseTimer = setTimeout((() => {
          if (document.hidden) document.addEventListener("visibilitychange", this.releaseWhenShown);
          else {
            this.holding = !1;
            for (const uu of this.resizers) uu()
          }
        }), 1e3)
      }
      heldSizer(uu) {
        let Eu = !1;
        return () => {
          if (Eu && this.isHeld()) return null;
          const ju = uu();
          return Eu ||= null !== ju, ju
        }
      }
      onRelease(uu) {
        return this.resizers.add(uu), () => {
          this.resizers.delete(uu)
        }
      }
    }
  },
  39553: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => Uu
    });
    let su = !1;
    async function Uu(uu, Eu) {
      if (!su) {
        su = !0;
        try {
          const [{
            reloadBloxd: su
          }, {
            NotificationProvider: Uu
          }] = await Promise.all([Promise.resolve().then((() => ju(1779))), Promise.resolve().then((() => ju(1405)))]);
          if (!uu || !0 === await Uu.showPromptPopup({
              title: "Unsaved changes",
              subtitle: "Exit and lose your unsaved changes?",
              confirmText: "Exit",
              destructive: !0,
              cancelText: "Cancel",
              unlockPointerKey: "replayExitUnsavedChanges"
            }).getResult()) return void su(Eu)
        } catch (Uu) {
          console.error("Leaving the replay failed", Uu)
        }
        su = !1
      }
    }
  },
  41194: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => lu,
      c: () => qu
    });
    var su = ju(1802);
    const Uu = 33177600,
      Zu = 3e4;
    let Xu = !1;

    function lu(uu, Eu, ju) {
      let su = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const {
        scale: lu = 1,
        type: qu = "image/png",
        quality: fu
      } = su;
      if (!uu.drawing()) return Promise.reject(new Error("Screenshots need a game to be running"));
      if (Xu) return Promise.reject(new Error("A screenshot is already being taken"));
      Xu = !0;
      const Cu = function(uu, Eu, ju) {
        const su = Math.max(1, uu),
          Zu = Math.max(1, Eu),
          Xu = Math.min(1, ju / Math.max(su, Zu), Math.sqrt(Uu / (su * Zu)));
        return {
          width: Math.max(1, Math.floor(su * Xu)),
          height: Math.max(1, Math.floor(Zu * Xu))
        }
      }(Eu, ju, uu.maxTextureSize);
      return uu.resize(Cu.width, Cu.height, lu * Cu.width / Math.max(1, Eu)), new Promise(((Eu, ju) => {
        let su, Uu = 2,
          lu = null;
        const Cu = () => {
          var Eu;
          Xu = !1, null === (Eu = lu) || void 0 === Eu || Eu(), clearTimeout(su), uu.restoreSize()
        };
        su = setTimeout((() => {
          Cu(), ju(new Error("No frame was drawn to capture"))
        }), Zu), lu = uu.onFrameDrawn((() => {
          if (Uu--, Uu > 0) return;
          const {
            canvas: su
          } = uu, Zu = {
            width: su.width,
            height: su.height
          };
          try {
            su.toBlob((uu => {
              uu ? Eu({
                blob: uu,
                ...Zu
              }) : ju(new Error("The canvas gave no image"))
            }), qu, fu)
          } catch (Xu) {
            ju(Xu)
          } finally {
            Cu()
          }
        }))
      }))
    }
    async function qu(uu, Eu, ju) {
      try {
        const Uu = await lu(uu, Eu, ju);
        (0, su.d)(Uu.blob, `bloxd-screenshot-${Uu.width}x${Uu.height}-${Date.now()}.png`)
      } catch (Uu) {
        console.error("Error taking screenshot:", Uu)
      }
    }
  },
  38089: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => su
    });
    const su = {
      noaReady: null,
      chunkRequested: null,
      beforeServerListeners: null,
      wasmNetReady: null
    }
  },
  39474: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => Xu
    });
    var su = ju(337),
      Uu = ju(131),
      Zu = ju(31);

    function Xu() {
      Zu.k.setItem(su.Jb, Zu.k.getItem(su.Jb) + 1), (0, Uu.is99NightsCrazyGamesBundle)() && Zu.k.setItem(su.Fb, Zu.k.getItem(su.Fb) + 1)
    }
  },
  40912: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => lu
    });
    var su = ju(39933);

    function Uu(uu) {
      return {
        current: () => uu,
        watch: () => () => {}
      }
    }

    function Zu() {}
    const Xu = Object.freeze([0, 0, 0]),
      lu = {
        states: {
          health: Uu({
            health: null,
            maxHealth: null,
            shield: null,
            maxShield: null
          }),
          inventory: Uu({
            player: [],
            chestOrCreative: [],
            chest: null,
            creative: !1,
            selectedSlot: 0,
            freeSlots: 0
          }),
          hotbar: Uu({
            items: [],
            ammo: 0,
            selectedSlot: null
          }),
          stationItems: Uu({
            enchantable: {},
            salvageable: {}
          }),
          itemInfo: Uu({}),
          creativeVisibility: Uu({
            publicLobby: !1,
            shownInGame: {}
          }),
          aura: Uu(null),
          heldItemAim: Uu({
            gun: !1,
            aimable: !1,
            chargeName: null
          }),
          crouching: Uu(!1),
          gliderBoostFuel: Uu(0),
          flight: Uu({
            canFly: !1,
            flying: !1
          }),
          crafting: Uu({
            focus: null,
            recipes: [],
            detail: null
          }),
          players: Uu({
            ids: [],
            byId: {},
            localId: null
          }),
          lobbyLeaderboardRows: Uu({}),
          fullInventory: Uu(!1),
          crosshairTarget: Uu({
            interactPrompt: null,
            blockText: null,
            neededTool: null
          }),
          localPlayerAlive: Uu(!0),
          freeCamera: Uu({
            allowed: !1,
            movesFly: !1
          }),
          replay: Uu(null),
          replayEdits: Uu(null),
          replayRecorder: Uu({
            recording: !1,
            clipping: !1,
            hasClipBuffer: !1,
            seconds: 0
          }),
          replayVideoExporting: Uu(!1)
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
          selectHotbarSlot: Zu,
          removeInventoryItem: () => !1,
          swapInventorySlots: () => !1,
          moveInventoryItem: () => !1,
          quickMoveInventoryItem: () => null,
          closeChest: Zu,
          setInventoryOpen: Zu,
          changeIronChestPasskey: Zu,
          dragReplayCamera: Zu,
          applyTemporaryThirdPerson: Zu,
          holdEmoteWheel: Zu,
          recordFlyingMiddleText: Zu,
          focusCrafting: Zu,
          craftRecipe: () => ({
            aC: 0,
            yl: null,
            amountAddedToSlot: 0
          }),
          salvageItem: () => !1,
          enchantItem: Zu,
          setShopOpen: Zu,
          buyShopItem: Zu,
          lobbyManage: Zu,
          sendChatMessage: Zu,
          ignorePlayer: Zu,
          reportPlayer: Zu,
          reportWorldCodeChat: Zu,
          requestDiscordReportKey: Zu,
          reportLobbyOrGame: Zu,
          playEmote: Zu,
          updateMyCosmetic: Zu,
          writeOnBoard: Zu,
          writeBook: Zu,
          writeNameTag: Zu,
          setCustomLobbyBlock: Zu,
          openIronChest: Zu,
          sendCodeCollab: Zu,
          clickCodeBlock: Zu,
          bindCustomButtonKeys: Zu,
          pressCustomButton: Zu,
          moveReplayFreecam: Zu,
          holdReplayFreecamVertical: Zu,
          respawn: Zu,
          wakeUp: Zu,
          requestLeaderboard: Zu,
          completeTask: Zu,
          setServerCookie: Zu,
          answerUiRequest: Zu,
          chooseRewardedAd: Zu,
          setCameraZoom: Zu,
          setFreeCameraMovesFly: Zu,
          setBlockHighlight: Zu,
          setCrosshairInteractPrompt: Zu,
          setLookSensitivity: Zu,
          replayAction: Zu,
          setReplayPlaying: Zu,
          seekReplay: Zu,
          setReplayCameraMode: Zu,
          syncReplayCameraMode: Zu,
          setReplayCameraKeyframe: Zu,
          moveReplayCameraKeyframe: Zu,
          deleteReplayCameraKeyframes: Zu,
          setReplayPlaybackMark: Zu,
          cropReplay: () => !1,
          holdReplayForShaderPackFailure: Zu,
          exportReplayVideo: Zu,
          toggleRecording: Zu,
          saveClip: Zu,
          setRecorderPrefs: Zu,
          setReplayViewerOpen: Zu
        },
        queries: {
          enchantingOffer: () => ({
            perks: [],
            options: []
          }),
          worldCodeAiChunk: () => su.e,
          worldCodeAiGameState: () => su.f
        },
        lookups: {
          localPos: () => Xu,
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
  41188: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => Xu,
      f: () => Zu
    });
    var su = ju(2239),
      Uu = ju(1069);

    function Zu(uu, Eu) {
      return null !== uu.gameSource && (0, su.n)(Eu, uu.gameSource)
    }

    function Xu(uu, Eu) {
      if (null === uu.gameSource || "" === uu.gameSource || null === Eu) return !0;
      const ju = (0, Uu.l)(Eu) ? (0, Uu.q)(Eu) : null;
      return null !== ju && Zu(uu, ju)
    }
  },
  41158: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => lu
    });
    var su = ju(636),
      Uu = ju(41161),
      Zu = ju(41056);
    async function Xu(uu) {
      const Eu = await (0, Uu.l)({
        Helmet: ju(38347),
        Chestplate: ju(38352),
        Gauntlets: ju(38365),
        Leggings: ju(38357),
        Boots: ju(38361)
      } [su.d[uu]]);
      try {
        return (0, Zu.o)(Eu)
      } finally {
        Eu.close()
      }
    }
    const lu = new class {
      constructor() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Xu,
          Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Uu.p;
        this.decode = uu, this.register = Eu, this.decoded = new Map
      }
      warm() {
        for (let uu = 0; uu < su.d.length; uu++) this.part(uu).catch((Eu => {
          console.warn(`The grayscale armour ${su.d[uu]} image didn't decode ahead of use`, Eu)
        }))
      }
      async load(uu, Eu) {
        const {
          width: ju,
          height: Zu,
          pixels: Xu
        } = await this.part(uu), lu = new ImageData(function(uu, Eu) {
          const ju = new Uint8ClampedArray(uu.length);
          for (let su = 0; su < uu.length; su += 4) ju[su] = Math.round(uu[su] * Eu[0] / 255), ju[su + 1] = Math.round(uu[su + 1] * Eu[1] / 255), ju[su + 2] = Math.round(uu[su + 2] * Eu[2] / 255), ju[su + 3] = uu[su + 3];
          return ju
        }(Xu, function(uu) {
          return [uu >>> 16 & 255, uu >>> 8 & 255, 255 & uu]
        }(Eu)), ju, Zu);
        let qu;
        try {
          qu = await createImageBitmap(lu, {
            premultiplyAlpha: "none",
            colorSpaceConversion: "none"
          })
        } catch (fu) {
          throw new Uu.e("decode", `grayscale armour ${su.d[uu]}`, {
            cause: fu
          })
        }
        return {
          id: this.register(qu),
          width: ju,
          height: Zu
        }
      }
      part(uu) {
        const Eu = this.decoded.get(uu);
        if (void 0 !== Eu) return Eu;
        const ju = this.decode(uu).catch((Eu => {
          throw this.decoded.delete(uu), Eu instanceof Uu.e ? Eu : new Uu.e("decode", `grayscale armour ${su.d[uu]}`, {
            cause: Eu
          })
        }));
        return this.decoded.set(uu, ju), ju
      }
    }
  },
  41156: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => Xu,
      g: () => hu,
      h: () => Cu,
      j: () => bu,
      m: () => Yu
    });
    var su = ju(41040),
      Uu = ju(41158),
      Zu = ju(41161);
    const Xu = 396,
      lu = 1,
      qu = 2,
      fu = 3,
      Cu = {
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
      bu = {
        File: 0,
        Item: 1
      },
      cu = 0,
      Nu = 1,
      Ou = 2;

    function Yu(uu) {
      const Eu = (0, su.g)();
      Eu.catch((() => {}));
      let Uu = null;
      return {
        glbUrl: uu,
        lifeformAtlasUrl: async uu => (await Eu).lifeformAtlasUrl(uu),
        armourAtlasUrl: async () => (await ju.e(207).then((() => ju(34634)))).armourAtlasUrl,
        capeUrl: async uu => (await Eu).capeUrl(uu),
        attachmentImageUrl: async uu => (await Eu).attachmentImageUrl(uu),
        blockImageUrl: async uu => (await Eu).blockImageUrl(uu),
        groupAtlasUrl: async uu => (await Eu).groupAtlasUrl(uu),
        particleTextureUrl: async uu => (await Eu).particleTextureUrl(uu),
        particleItemUrl: async uu => (Uu ??= ju.e(38).then((() => ju(51322))).catch((uu => {
          throw Uu = null, uu
        })), (await Uu).particleItemUrl(uu))
      }
    }
    class hu {
      constructor(uu, Eu) {
        var ju, Xu, lu, qu;
        let fu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        this.sources = uu, this.onFailure = Eu, this.loading = new Map, this.glbImages = new Map, this.glbWrittenImages = new Map, this.glbTakenCount = new Map, this.answered = new Map, this.ready = [], this.load = void 0, this.release = void 0, this.fetchFile = void 0, this.greyscaleArmour = void 0, this.fO = !1, this.load = null !== (ju = fu.load) && void 0 !== ju ? ju : (uu, Eu) => (0, Zu.m)(uu, fu.fetchImage, Eu), this.release = null !== (Xu = fu.release) && void 0 !== Xu ? Xu : Zu.t, this.fetchFile = null !== (lu = fu.fetchFile) && void 0 !== lu ? lu : uu => (0, su.e)(uu), this.greyscaleArmour = null !== (qu = fu.greyscaleArmour) && void 0 !== qu ? qu : Uu.d
      }
      get waiting() {
        return this.ready.length
      }
      get inFlight() {
        return this.loading.size
      }
      glbWritten(uu, Eu) {
        this.glbWrittenImages.set(uu, wu(Eu))
      }
      glbTaken(uu, Eu) {
        const ju = this.glbWrittenImages.get(uu);
        this.glbWrittenImages.delete(uu), Eu && this.setGlbImages(uu, void 0 !== ju && ju.length > 0 ? ju : void 0)
      }
      setGlbImages(uu, Eu) {
        var ju;
        this.glbTakenCount.set(uu, (null !== (ju = this.glbTakenCount.get(uu)) && void 0 !== ju ? ju : 0) + 1), void 0 === Eu ? this.glbImages.delete(uu) : this.glbImages.set(uu, Eu);
        const su = [];
        for (const {
            key: Uu
          }
          of this.loading.values()) Uu.kind === Cu.Glb && Uu.word === uu && su.push(Uu);
        for (let Uu = this.ready.length - 1; Uu >= 0; Uu--) {
          const {
            key: Eu,
            id: ju
          } = this.ready[Uu];
          Eu.kind === Cu.Glb && Eu.word === uu && (this.ready.splice(Uu, 1), null !== ju && (this.answered.delete(ju), this.release(ju)), su.push(Eu))
        }
        this.loadAgain(su)
      }
      onEvent(uu) {
        if (this.fO) return;
        const Eu = new DataView(uu.buffer, uu.byteOffset, uu.byteLength);
        for (let ju = 0; ju + 8 <= uu.byteLength; ju += 8) {
          const uu = Eu.getUint8(ju),
            su = Eu.getUint32(ju + 4, !0);
          if (uu === fu) {
            this.answered.delete(su), this.release(su);
            continue
          }
          const Uu = {
            kind: Eu.getUint8(ju + 1),
            index: Eu.getUint8(ju + 2),
            word: su
          };
          uu === lu ? this.want(Uu) : uu === qu && this.loading.delete(Du(Uu))
        }
      }
      reload(uu, Eu) {
        const ju = ju => uu.includes(ju.kind) && (void 0 === Eu || Eu(ju)),
          su = new Map;
        for (const Uu of this.answered.values()) ju(Uu) && su.set(Du(Uu), Uu);
        for (const [Uu, {
            key: Zu
          }] of this.loading) ju(Zu) && su.set(Uu, Zu);
        this.loadAgain(su.values())
      }
      loadAgain(uu) {
        for (const Eu of uu) this.loading.delete(Du(Eu)), this.want(Eu)
      }
      drain(uu) {
        if (null !== uu)
          for (; this.ready.length > 0;) {
            if (!uu(Xu, 0, this.ready[0].record)) return;
            this.ready.shift()
          }
      }
      dispose() {
        this.fO = !0, this.loading.clear(), this.ready.length = 0;
        for (const uu of this.answered.keys()) this.release(uu);
        this.answered.clear()
      }
      want(uu) {
        const Eu = Du(uu);
        if (this.loading.has(Eu)) return;
        const ju = {
          key: uu
        };
        this.loading.set(Eu, ju), this.loadKey(uu).then((su => {
          this.fO || this.loading.get(Eu) !== ju ? this.release(su.id) : (this.loading.delete(Eu), this.answered.set(su.id, uu), this.ready.push({
            record: Mu(uu, cu, su),
            key: uu,
            id: su.id
          }))
        }), (su => {
          if (this.fO || this.loading.get(Eu) !== ju) return;
          this.loading.delete(Eu), this.onFailure({
            key: uu,
            error: su
          });
          const Uu = su instanceof Zu.e && "decode" === su.stage ? Nu : Ou;
          this.ready.push({
            record: Mu(uu, Uu, null),
            key: uu,
            id: null
          })
        }))
      }
      async loadKey(uu) {
        switch (uu.kind) {
          case Cu.Glb:
            return this.load(await this.glbImage(uu), "none");
          case Cu.LifeformAtlas:
            return this.load(gu(await this.sources.lifeformAtlasUrl(uu.word), uu), "none");
          case Cu.ArmourAtlas:
            return this.load(gu(await this.sources.armourAtlasUrl(), uu), "none");
          case Cu.Cape:
            return this.load(gu(await this.sources.capeUrl(uu.word), uu), "none");
          case Cu.AttachmentImage:
            return this.load(gu(await this.sources.attachmentImageUrl(uu.word), uu), "none");
          case Cu.GroupAtlas:
            return this.load(gu(await this.sources.groupAtlasUrl(uu.word), uu), "none");
          case Cu.BlockImage:
            return this.load(gu(await this.sources.blockImageUrl(uu.word), uu), "none");
          case Cu.Particle: {
            const Eu = await (uu.index === bu.Item ? this.sources.particleItemUrl(uu.word) : this.sources.particleTextureUrl(uu.word));
            return this.load(gu(Eu, uu), "flipY")
          }
          case Cu.GreyscaleArmour:
            return this.greyscaleArmour.load(uu.index, uu.word);
          default:
            throw new Zu.e("fetch", `image kind ${uu.kind}`, {
              cause: null
            })
        }
      }
      async glbImage(uu) {
        var Eu;
        let ju = this.glbImages.get(uu.word);
        if (void 0 === ju) {
          const Eu = this.glbTakenCount.get(uu.word),
            su = gu(await this.sources.glbUrl(uu.word), uu);
          try {
            ju = wu(await this.fetchFile(su))
          } catch (Uu) {
            throw new Zu.e("fetch", su, {
              cause: Uu
            })
          }
          this.glbTakenCount.get(uu.word) === Eu && this.glbImages.set(uu.word, ju)
        }
        const su = null === (Eu = ju) || void 0 === Eu ? void 0 : Eu[uu.index];
        if (!su) throw new Zu.e("decode", `image ${uu.index} of file ${2147483647&uu.word}`, {
          cause: null
        });
        return su
      }
    }

    function Du(uu) {
      let {
        kind: Eu,
        index: ju,
        word: su
      } = uu;
      return `${Eu}:${ju}:${su}`
    }

    function gu(uu, Eu) {
      if (null === uu) throw new Zu.e("fetch", `no URL for image ${Du(Eu)}`, {
        cause: null
      });
      return uu
    }

    function Mu(uu, Eu, ju) {
      var su, Uu, Zu;
      const Xu = new Uint8Array(16),
        lu = new DataView(Xu.buffer);
      return lu.setUint8(0, uu.kind), lu.setUint8(1, uu.index), lu.setUint8(2, Eu), lu.setUint32(4, uu.word, !0), lu.setUint32(8, null !== (su = null === ju || void 0 === ju ? void 0 : ju.id) && void 0 !== su ? su : 0, !0), lu.setUint16(12, Math.min(null !== (Uu = null === ju || void 0 === ju ? void 0 : ju.width) && void 0 !== Uu ? Uu : 0, 65535), !0), lu.setUint16(14, Math.min(null !== (Zu = null === ju || void 0 === ju ? void 0 : ju.height) && void 0 !== Zu ? Zu : 0, 65535), !0), Xu
    }
    const eu = 1179937895,
      Gu = 1313821514,
      pu = 5130562;

    function wu(uu) {
      var Eu;
      const ju = new DataView(uu.buffer, uu.byteOffset, uu.byteLength);
      if (uu.byteLength < 20 || ju.getUint32(0, !0) !== eu || ju.getUint32(16, !0) !== Gu) return [];
      let su, Uu = 20 + ju.getUint32(12, !0);
      try {
        su = JSON.parse((new TextDecoder).decode(uu.subarray(20, Uu)))
      } catch {
        return []
      }
      for (; Uu + 8 <= uu.byteLength && ju.getUint32(Uu + 4, !0) !== pu;) Uu += 8 + ju.getUint32(Uu, !0);
      const Zu = null !== (Eu = su.images) && void 0 !== Eu ? Eu : [];
      if (0 === Zu.length || Uu + 8 > uu.byteLength) return Zu.map((() => null));
      const Xu = uu.subarray(Uu + 8, Math.min(uu.byteLength, Uu + 8 + ju.getUint32(Uu, !0)));
      return Zu.map((uu => {
        var Eu, ju, Uu;
        const Zu = void 0 === uu.bufferView || null === (Eu = su.bufferViews) || void 0 === Eu ? void 0 : Eu[uu.bufferView];
        if (!Zu || 0 !== (null !== (ju = Zu.buffer) && void 0 !== ju ? ju : 0) || void 0 === Zu.byteLength) return null;
        const lu = null !== (Uu = Zu.byteOffset) && void 0 !== Uu ? Uu : 0,
          qu = lu + Zu.byteLength;
        return qu <= Xu.byteLength ? Xu.slice(lu, qu) : null
      }))
    }
  },
  40914: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => Xu,
      h: () => Zu,
      i: () => Uu
    });
    let su = null;

    function Uu(uu) {
      su = uu
    }

    function Zu(uu) {
      su === uu && (su = null)
    }

    function Xu() {
      var uu;
      null === (uu = su) || void 0 === uu || uu()
    }
  },
  36981: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => Cu,
      h: () => cu,
      j: () => Du,
      n: () => fu
    });
    var su = ju(22),
      Uu = ju(2516),
      Zu = ju(2519),
      Xu = ju(2522),
      lu = ju(2610),
      qu = ju(24);

    function fu(uu, Eu) {
      return (!(0, Xu.e)() || 0 === uu && 0 === Eu) && (0, Zu.v)(Uu.h.Joystick, 0, uu, Eu, 0)
    }
    const Cu = {
      Action1: 1,
      Action2: 2,
      Action3: 3,
      Attack: 4,
      Use: 5,
      Interact: 6,
      Boost: 7
    };

    function bu(uu) {
      return uu.classList.contains("TouchKeyHit") && Nu() ? null : uu.firstElementChild
    }

    function cu(uu) {
      return uu.classList.contains("TouchKeyHit") && !uu.classList.contains("CanvasZone") ? {
        whole: !Nu(),
        keyBox: null
      } : {
        whole: !1,
        keyBox: Ou(bu(uu))
      }
    }

    function Nu() {
      return document.documentElement.classList.contains(lu.i)
    }

    function Ou(uu) {
      return !(uu instanceof HTMLElement) || uu.offsetWidth <= 0 || uu.offsetHeight <= 0 ? null : {
        width: uu.offsetWidth,
        height: uu.offsetHeight
      }
    }

    function Yu(uu, Eu) {
      const ju = uu => Math.min(65535, Math.round(4 * uu));
      return (ju(uu) | ju(Eu) << 16) >>> 0
    }

    function hu(uu) {
      return {
        x: uu.left + uu.width / 2,
        y: uu.top + uu.height / 2,
        radius: Math.min(uu.width, uu.height) / 2
      }
    }
    const Du = new class {
      constructor(uu) {
        this.write = uu, this.elements = new Map, this.canvasLeft = 0, this.canvasTop = 0
      }
      set(uu, Eu) {
        let ju = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        Eu ? this.elements.set(uu, {
          element: Eu,
          hidden: ju
        }) : this.elements.delete(uu), this.measureOne(uu)
      }
      measure() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
          left: this.canvasLeft,
          top: this.canvasTop
        };
        this.canvasLeft = uu.left, this.canvasTop = uu.top;
        for (const Eu of this.elements.keys()) this.measureOne(Eu)
      }
      hitZone(uu, Eu) {
        let ju = null,
          su = 1;
        for (const Uu of this.elements.keys()) {
          const Zu = this.shown(Uu);
          if (!Zu) continue;
          const {
            rect: Xu,
            element: lu
          } = Zu, qu = hu(Xu), fu = Math.max(0, Xu.width / 2 - qu.radius), Cu = Math.max(0, Xu.height / 2 - qu.radius), cu = Math.max(0, Math.abs(uu - qu.x) - fu), Nu = Math.max(0, Math.abs(Eu - qu.y) - Cu), Yu = lu.firstElementChild;
          let Du = Math.hypot(cu, Nu) / qu.radius;
          const gu = Ou(bu(lu));
          gu && (Du = Math.min(Du, Math.max(2 * Math.abs(uu - qu.x) / gu.width, 2 * Math.abs(Eu - qu.y) / gu.height))), Du < su && (ju = {
            code: Uu,
            element: lu,
            key: Yu,
            ...qu
          }, su = Du)
        }
        return ju
      }
      measureOne(uu) {
        const Eu = this.shown(uu);
        if (!Eu) return void this.write(Uu.h.TouchZone, uu, 0, 0, 0);
        const {
          rect: ju,
          element: su
        } = Eu, Zu = hu(ju);
        this.write(Uu.h.TouchZone, uu, Zu.x - this.canvasLeft, Zu.y - this.canvasTop, Yu(ju.width, ju.height));
        const Xu = Ou(bu(su));
        this.write(Uu.h.TouchZone, 256 | uu, 0, 0, Xu ? Yu(Xu.width, Xu.height) : 0)
      }
      shown(uu) {
        const Eu = this.elements.get(uu),
          ju = su.d.get("worldPanelHud");
        if (!Eu || Eu.hidden || "none" === ju) return null;
        const Uu = Eu.element.getBoundingClientRect();
        return Uu.width <= 0 || Uu.height <= 0 ? null : {
          rect: Uu,
          element: Eu.element
        }
      }
    }(Zu.v);
    (0, qu.l)(lu.d, (() => {
      Du.measure()
    }))
  },
  40955: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => qu,
      h: () => fu
    });
    var su = ju(41075),
      Uu = ju(39367),
      Zu = ju(36850),
      Xu = ju(40960),
      lu = ju(40935);
    const qu = su.e.timeForPlayerToConnect - 1e4;
    async function fu(uu, Eu, ju, su) {
      let qu;
      try {
        qu = await uu.getTrafficCode()
      } catch (Ou) {
        throw console.error("[bloxd-wasm-client] could not get a traffic code", Ou), new lu.w(Ou)
      }
      const {
        gameNameWithVariation: fu,
        lobbyName: Cu
      } = Eu, bu = () => {
        const Eu = (0, Zu.f)(uu, fu, Cu, qu, (uu => {
          var Eu;
          return null !== (Eu = null === ju || void 0 === ju ? void 0 : ju.isUsingCustomGameTexturePack(uu)) && void 0 !== Eu && Eu
        }));
        Eu.joinOptions.wasmClient = !0;
        const Uu = (0, Xu.D)();
        return null !== Uu && (Eu.joinOptions.renderBackend = Uu), Eu.joinOptions.joinAdHold = su, Eu
      }, {
        roomName: cu,
        joinOptions: Nu
      } = bu();
      return {
        endpoint: Eu.endpoint,
        roomName: cu,
        joinOptions: Nu,
        session: {
          gameNameWithVariation: fu,
          lobbyName: Cu,
          playerDbId: uu.whamm
        },
        optionsAfterRefusal: async Eu => await (0, Uu.e)(uu, Eu) ? bu().joinOptions : null
      }
    }
  },
  41176: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => Cu,
      g: () => Zu,
      j: () => bu,
      m: () => Xu
    });
    var su = ju(41156),
      Uu = ju(41040);
    const Zu = new class {
      constructor() {
        this.page = null, this.session = void 0, this.follower = null, this.isWanted = !1, this.listeners = new Set, this.pageListeners = new Set, this.wantedListeners = new Set
      }
      get current() {
        return void 0 === this.session ? this.page : this.session
      }
      setPageFiles(uu) {
        this.change((() => {
          this.page = uu
        }))
      }
      setSessionFiles(uu) {
        const Eu = void 0 !== this.session && void 0 === uu;
        if (this.change((() => {
            this.session = uu
          })), Eu)
          for (const ju of [...this.pageListeners]) ju()
      }
      showsPage() {
        return void 0 === this.session
      }
      onPageShown(uu) {
        return this.pageListeners.add(uu), () => {
          this.pageListeners.delete(uu)
        }
      }
      setFollower(uu) {
        this.follower = uu, this.startFollower()
      }
      wanted() {
        this.isWanted = !0;
        for (const uu of [...this.wantedListeners]) uu();
        this.startFollower()
      }
      onWanted(uu) {
        return this.wantedListeners.add(uu), () => {
          this.wantedListeners.delete(uu)
        }
      }
      onChange(uu) {
        return this.listeners.add(uu), () => {
          this.listeners.delete(uu)
        }
      }
      startFollower() {
        const uu = this.follower;
        this.isWanted && null !== uu && (this.follower = null, uu((() => {
          this.follower = uu
        })))
      }
      change(uu) {
        const Eu = this.current;
        if (uu(), this.current !== Eu)
          for (const ju of this.listeners) ju()
      }
    };

    function Xu(uu, Eu) {
      return {
        ...uu,
        armourAtlasUrl: () => {
          var ju, su;
          return null !== (ju = null === (su = Eu()) || void 0 === su ? void 0 : su.armourAtlasUrl()) && void 0 !== ju ? ju : uu.armourAtlasUrl()
        },
        lifeformAtlasUrl: ju => qu(Eu(), (uu => uu.LIFEFORM_ATLAS_PATHS[ju]), (() => uu.lifeformAtlasUrl(ju))),
        groupAtlasUrl: ju => qu(Eu(), (uu => uu.GROUP_ATLAS_PATHS[ju]), (() => uu.groupAtlasUrl(ju))),
        particleItemUrl: su => fu(Eu(), (async () => {
          const uu = await ju.e(38).then((() => ju(51322))).catch((() => null));
          return (null === uu || void 0 === uu ? void 0 : uu.particleItemSprite(su)) || null
        }), (() => uu.particleItemUrl(su))),
        blockImageUrl: ju => fu(Eu(), (async () => {
          var uu, Eu;
          return null !== (uu = null === (Eu = await lu()) || void 0 === Eu ? void 0 : Eu.blockImageName(ju)) && void 0 !== uu ? uu : null
        }), (() => uu.blockImageUrl(ju)))
      }
    }

    function lu() {
      return (0, Uu.g)().catch((() => null))
    }

    function qu(uu, Eu, ju) {
      return fu(uu, (async () => {
        var uu;
        const ju = await lu(),
          su = null === ju ? null : Eu(ju),
          Uu = null !== (uu = null === su || void 0 === su ? void 0 : su.slice(su.lastIndexOf("/") + 1)) && void 0 !== uu ? uu : null;
        return "Player_Atlas" === Uu ? null : Uu
      }), ju)
    }
    async function fu(uu, Eu, ju) {
      if (null !== uu) {
        const ju = await Eu(),
          su = null === ju ? null : uu.textureUrl(ju);
        if (null !== su) return su
      }
      return ju()
    }
    const Cu = 0;

    function bu(uu) {
      const Eu = [su.h.ArmourAtlas, su.h.LifeformAtlas, su.h.GroupAtlas, su.h.BlockImage, su.h.Particle];
      uu.reload(Eu, (uu => {
        switch (uu.kind) {
          case su.h.Particle:
            return uu.index === su.j.Item;
          case su.h.LifeformAtlas:
            return uu.word !== Cu;
          default:
            return !0
        }
      }))
    }
  },
  41079: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => su,
      f: () => lu,
      j: () => Xu,
      m: () => Uu,
      p: () => Zu
    });
    const su = 1e3;

    function Uu() {
      qu((() => {
        window.location.reload()
      }))
    }

    function Zu() {
      return new Promise((() => {}))
    }

    function Xu(uu) {
      qu((() => {
        window.location.replace(uu(window.location.href))
      }))
    }

    function lu(uu) {
      Promise.resolve().then((() => ju(103))).then((Eu => {
        let {
          currentUrl: ju
        } = Eu;
        Xu((() => ju.mergeSearchParamsInto(uu)))
      }), (() => {
        Xu((() => uu))
      }))
    }

    function qu(uu) {
      null !== window.onbeforeunload ? Promise.resolve().then((() => ju(1779))).then((Eu => {
        let {
          prepareForUnloadWithoutConfirmation: ju
        } = Eu;
        try {
          ju()
        } catch (su) {
          console.warn("[bloxd-wasm-client] prepareForUnloadWithoutConfirmation threw: leaving plainly", su), window.onbeforeunload = null
        }
        uu()
      }), (() => {
        window.onbeforeunload = null, uu()
      })) : uu()
    }
  },
  5230: (uu, Eu, ju) => {
    function su(uu, Eu) {
      return Uu(uu, Eu)
    }

    function Uu(uu, Eu) {
      if (uu === Eu) return !0;
      if ("object" !== typeof uu || "object" !== typeof Eu || null === uu || null === Eu || Array.isArray(uu) !== Array.isArray(Eu)) return !1;
      const ju = uu,
        su = Eu,
        Zu = Object.keys(ju);
      return Zu.length === Object.keys(su).length && Zu.every((uu => Object.prototype.hasOwnProperty.call(su, uu) && Uu(ju[uu], su[uu])))
    }
    ju.d(Eu, {
      c: () => su
    })
  },
  41135: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => pu,
      i: () => eu,
      j: () => Yu,
      l: () => Ou
    });
    var su = ju(1866),
      Uu = ju(1259),
      Zu = ju(39362),
      Xu = ju(36870),
      lu = ju(39375),
      qu = ju(40935);
    const fu = {
        "X-Requested-With": "XMLHtttpRequest"
      },
      Cu = 3,
      bu = [500, 1500];

    function cu(uu) {
      const Eu = new URL(uu);
      return {
        secure: "https:" === Eu.protocol || "wss:" === Eu.protocol,
        host: Eu.host,
        pathname: Eu.pathname.replace(/\/+$/, ""),
        search: Eu.searchParams.toString()
      }
    }

    function Nu(uu, Eu, ju) {
      const {
        secure: su,
        host: Uu,
        pathname: Zu,
        search: Xu
      } = cu(uu);
      return `${su?"https":"http"}://${Uu}${Zu}/matchmake/${Eu}/${encodeURIComponent(ju)}${Xu?`?${Xu}`:""}`
    }

    function Ou(uu, Eu) {
      var ju;
      const su = null !== (ju = Eu.protocol) && void 0 !== ju ? ju : "ws";
      if ("ws" !== su) throw new Error(`seat reservation asks for the ${su} transport`);
      const {
        secure: Uu,
        host: Zu,
        pathname: Xu,
        search: lu
      } = cu(uu), qu = new URLSearchParams(lu);
      qu.append("sessionId", Eu.sessionId), Eu.reconnectionToken && qu.append("reconnectionToken", Eu.reconnectionToken);
      return `${Uu?"wss":"ws"}://${Eu.room.publicAddress||`${Zu}${Xu}`}/${Eu.room.processId}/${Eu.room.roomId}?${qu.toString()}`
    }
    async function Yu(uu, Eu, ju) {
      var lu;
      let fu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const cu = null !== (lu = fu.sleep) && void 0 !== lu ? lu : su.b,
        Ou = new Uu.d(fu.signal),
        Yu = new Xu.d((() => {
          (0, Uu.j)(Ou.controller, new Xu.g("seat"))
        })),
        {
          signal: Mu
        } = Ou;
      try {
        const su = await (0, Zu.e)((() => async function(uu, Eu, ju, su) {
          var Zu;
          const {
            signal: Xu,
            sleep: lu
          } = su, fu = Nu(uu, "joinOrCreate", Eu), cu = JSON.stringify(ju);
          let Ou = null;
          for (let Nu = 0; Nu < Cu; Nu++) {
            var Yu;
            if (Nu > 0) await lu(null !== (Yu = bu[Nu - 1]) && void 0 !== Yu ? Yu : 1500, Xu);
            let uu;
            (0, Uu.n)(Xu);
            try {
              uu = await Du(fu, cu, su)
            } catch (Mu) {
              (0, Uu.n)(Xu), Ou = hu(Mu);
              continue
            }
            const {
              response: Eu,
              answer: ju,
              refusal: Zu,
              lost: Cu
            } = uu;
            if (null === Cu) {
              if (null !== Zu) throw gu(Zu, ju);
              if (Eu.ok && null !== ju && wu(ju)) return ju;
              Ou = new qu.u(`seat request answered HTTP ${Eu.status}${null===ju?" without JSON":" without a seat"}`, !1, void 0, Eu.status)
            } else Ou = hu(Cu.error)
          }
          throw null !== (Zu = Ou) && void 0 !== Zu ? Zu : new qu.u("seat request made no attempt", !1)
        }(uu, Eu, ju, {
          ...fu,
          signal: Mu,
          sleep: cu
        })), Mu, cu);
        return Yu.answered(), su
      } finally {
        Yu.stop(), Ou.unfollow()
      }
    }

    function hu(uu) {
      return new qu.u(uu instanceof Error ? uu.message : String(uu), !0, uu)
    }
    async function Du(uu, Eu, ju) {
      var su;
      const {
        signal: Zu
      } = ju, Xu = null !== (su = ju.fetch) && void 0 !== su ? su : fetch, lu = await Xu(uu, {
        method: "POST",
        headers: {
          ...fu,
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: Eu,
        credentials: "include",
        signal: Zu
      }), {
        answer: qu,
        lost: Cu
      } = await async function(uu) {
        try {
          const Eu = await uu.json();
          return {
            answer: "object" === typeof Eu && null !== Eu ? Eu : null,
            lost: null
          }
        } catch (Eu) {
          return {
            answer: null,
            lost: Eu instanceof SyntaxError ? null : {
              error: Eu
            }
          }
        }
      }(lu), bu = null !== qu && "string" === typeof qu.error ? qu.error : null;
      var cu;
      null !== bu && (null === (cu = ju.onRefusal) || void 0 === cu || cu.call(ju));
      return (0, Uu.n)(Zu), {
        response: lu,
        answer: qu,
        refusal: bu,
        lost: Cu
      }
    }

    function gu(uu, Eu) {
      return new qu.o(uu, "number" === typeof(null === Eu || void 0 === Eu ? void 0 : Eu.code) ? Eu.code : 0, (0, lu.n)(uu).text)
    }
    class Mu extends Error {
      constructor(uu, Eu) {
        super(uu), this.code = Eu, this.name = "SeatHttpError"
      }
    }
    async function eu(uu, Eu, ju) {
      let su = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const {
        response: Uu,
        answer: Zu,
        refusal: Xu,
        lost: lu
      } = await Du(Nu(uu, "reconnect", Eu), JSON.stringify({
        reconnectionToken: ju
      }), su);
      if (null !== lu) throw lu.error;
      if (!Uu.ok) {
        const uu = null !== Zu && "number" === typeof Zu.code && 0 !== Zu.code ? Zu.code : Uu.status;
        throw new Mu(`the seat's reconnect was refused: ${null!==Xu&&void 0!==Xu?Xu:`HTTP ${Uu.status}`}`, uu)
      }
      if (null !== Xu) throw gu(Xu, Zu);
      if (null === Zu || !wu(Zu)) throw new Error("the seat's reconnect answered " + (null === Zu ? "without JSON" : "without a seat"));
      return {
        ...Zu,
        reconnectionToken: ju
      }
    }
    const Gu = 10;

    function pu(uu) {
      if (uu.byteLength < 2 || uu[0] !== Gu) return null;
      const Eu = 2 + uu[1];
      return Eu > uu.byteLength ? null : (new TextDecoder).decode(uu.subarray(2, Eu))
    }

    function wu(uu) {
      const Eu = uu.room;
      return "string" === typeof uu.sessionId && "object" === typeof Eu && null !== Eu && "string" === typeof Eu.roomId && "string" === typeof Eu.processId && "string" === typeof Eu.name
    }
  },
  40854: (uu, Eu, ju) => {
    ju.d(Eu, {
      A: () => wu,
      B: () => ku,
      C: () => eu,
      E: () => Gu,
      H: () => hu,
      K: () => au,
      O: () => vu,
      S: () => Ou,
      U: () => Vu,
      X: () => gu,
      _: () => Du,
      c: () => Uu,
      cb: () => Mu,
      g: () => Ku,
      gb: () => pu,
      k: () => mu,
      m: () => Nu,
      n: () => Yu,
      r: () => ou,
      s: () => Ju,
      w: () => Pu,
      y: () => du
    });
    var su = ju(3165);
    const Uu = {
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

    function Zu(uu, Eu) {
      return !ArrayBuffer.isView(uu) || uu instanceof DataView ? Array.isArray(uu) ? uu.map((uu => Eu(uu))) : uu : Array.from(uu, (uu => Eu(uu)))
    }

    function Xu(uu) {
      if ("string" !== typeof uu) return uu;
      for (let Eu = 0; Eu < uu.length; Eu++) {
        const ju = uu.charCodeAt(Eu);
        if (ju >= 55296 && ju <= 57343) return qu.decode(lu.encode(uu))
      }
      return uu
    }
    const lu = new TextEncoder,
      qu = new TextDecoder;

    function fu(uu) {
      return uu
    }
    let Cu;

    function bu(uu) {
      return null === uu || "object" !== typeof uu ? uu : [Xu(uu.ql), Xu(uu.fl)]
    }

    function cu(uu) {
      return null === uu || "object" !== typeof uu ? uu : [Zu(uu.RU, fu), Zu(uu.wl, fu)]
    }

    function Nu(uu) {
      return null === (Eu = uu) || "object" !== typeof Eu ? Eu : [Xu(Eu.VC), Xu(Eu.rC)];
      var Eu
    }

    function Ou(uu) {
      return null === (Eu = uu) || "object" !== typeof Eu ? Eu : [Eu.id, Eu.eC];
      var Eu
    }

    function Yu(uu) {
      return null === (Eu = uu) || "object" !== typeof Eu ? Eu : [Eu.lZ, Xu(Eu.qZ), Eu.fZ, Xu(Eu.cZ), Eu.hZ, Eu.DZ, Eu.mC, Xu(Eu.vC), Xu(Eu.KC)];
      var Eu
    }

    function hu(uu) {
      return null === (Eu = uu) || "object" !== typeof Eu ? Eu : [Zu(Eu.RX, fu), Eu.ul];
      var Eu
    }

    function Du(uu) {
      return null === (Eu = uu) || "object" !== typeof Eu ? Eu : [Zu(Eu.AX, (uu => Xu(uu))), Xu(Eu.yX), Eu.zX];
      var Eu
    }

    function gu(uu) {
      return null === (Eu = uu) || "object" !== typeof Eu ? Eu : [Zu(Eu.eq, fu), Xu(Eu.Gq), Eu.pq];
      var Eu
    }

    function Mu(uu) {
      return null === (Eu = uu) || "object" !== typeof Eu ? Eu : [Xu(Eu.iZ), Xu(Eu.WZ)];
      var Eu
    }

    function eu(uu) {
      return null === (Eu = uu) || "object" !== typeof Eu ? Eu : [Xu(Eu.Vl)];
      var Eu
    }

    function Gu(uu) {
      return Xu(uu)
    }

    function pu(uu) {
      return null === (Eu = uu) || "object" !== typeof Eu ? Eu : [Xu(Eu.DC), Xu(Eu.gC), Xu(Eu.ql), Xu(Eu.fl)];
      var Eu
    }

    function wu(uu) {
      return bu(uu)
    }

    function Ju(uu) {
      return bu(uu)
    }

    function du(uu) {
      return null === (Eu = uu) || "object" !== typeof Eu ? Eu : [Xu(Eu.bq)];
      var Eu
    }

    function au(uu) {
      return uu
    }

    function Pu(uu) {
      return null === (Eu = uu) || "object" !== typeof Eu ? Eu : [Xu(Eu.Xl), Xu(Eu.ll)];
      var Eu
    }

    function ou(uu) {
      return Xu(uu)
    }

    function ku(uu) {
      return cu(uu)
    }

    function mu(uu) {
      return cu(uu)
    }

    function vu(uu) {
      return null === (Eu = uu) || "object" !== typeof Eu ? Eu : [Xu(Eu.wq)];
      var Eu
    }

    function Ku(uu) {
      return (Cu ??= (0, su.d)().map((uu => uu.name)), Cu).map((Eu => {
        return "string" === typeof(ju = uu[Eu]) ? Xu(ju) : Zu(ju, fu);
        var ju
      }))
    }

    function Vu(uu) {
      return null === (Eu = uu) || "object" !== typeof Eu ? Eu : [Eu.qq, Eu.fq, Eu.Cq];
      var Eu
    }
  },
  41180: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => Zu
    });
    var su = ju(41188),
      Uu = ju(41176);
    const Zu = new class {
      constructor(uu) {
        this.pack = uu, this.game = void 0, this.settle = null, this.hold = null, this.endedWhileHeld = !1, this.gameListeners = new Set, uu.onWanted((() => {
          this.release()
        }))
      }
      setGame(uu) {
        if (void 0 === uu && null !== this.hold) return void(this.endedWhileHeld = !0);
        this.hold = null, this.endedWhileHeld = !1;
        const Eu = this.inGame();
        if (this.game = uu, this.update(), this.inGame() !== Eu)
          for (const ju of this.gameListeners) ju()
      }
      inGame() {
        return void 0 !== this.game
      }
      onGameChange(uu) {
        return this.gameListeners.add(uu), () => {
          this.gameListeners.delete(uu)
        }
      }
      unwantedLeave(uu) {
        uu && void 0 !== this.game ? this.hold = {
          game: this.game
        } : this.release()
      }
      rejoinHold() {
        return this.hold
      }
      releaseHold(uu) {
        null !== uu && uu === this.hold && this.release()
      }
      release() {
        if (null === this.hold) return;
        const uu = this.endedWhileHeld;
        this.hold = null, this.endedWhileHeld = !1, uu && this.setGame(void 0)
      }
      setSettled(uu) {
        this.settle = uu, this.update()
      }
      update() {
        void 0 === this.game ? this.pack.setSessionFiles(void 0) : null !== this.settle && (0, su.c)(this.settle.state, this.game) && this.pack.setSessionFiles(this.settle.files)
      }
    }(Uu.g)
  },
  5223: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => Xu,
      g: () => lu
    });
    var su = ju(2239),
      Uu = ju(5230);
    let Zu = null;

    function Xu(uu) {
      Zu = {
        pack: uu.metaData.id === su.e ? null : uu
      }
    }

    function lu(uu) {
      return !(null === Zu || !(0, Uu.c)(Zu.pack, uu)) && (Zu = null, !0)
    }
  },
  40930: (uu, Eu, ju) => {
    ju.r(Eu), ju.d(Eu, {
      followPageUiPack: () => mC,
      packForGame: () => kC,
      playWasmGame: () => LC,
      prefetchWasmPreviews: () => kq,
      setGamePackConfirm: () => Lf,
      startWasmPlay: () => QC,
      startWasmPreviews: () => oq
    });
    var su = ju(202),
      Uu = ju(1301),
      Zu = ju(166),
      Xu = ju(39392),
      lu = ju(1986),
      qu = ju(24),
      fu = ju(4858),
      Cu = ju(1362),
      bu = ju(1767),
      cu = ju(1369),
      Nu = ju(39553),
      Ou = ju(1353),
      Yu = ju(1856),
      hu = ju(3089);
    let Du = null,
      gu = null,
      Mu = null,
      eu = !1;

    function Gu() {
      Du ??= performance.now()
    }
    const pu = {
      ready: () => {
        Yu.e.markAdmissionAwaited()
      },
      adEnded: () => {
        Yu.e.markJoinAdEnded()
      },
      admitted: () => {
        Yu.e.markAdmitted()
      }
    };
    var wu = ju(39561),
      Ju = ju(39474),
      du = ju(36856),
      au = ju(39362),
      Pu = ju(9128),
      ou = ju(36870),
      ku = ju(40932),
      mu = ju(4962),
      vu = ju(40847),
      Ku = ju(40912),
      Vu = ju(40854);
    const ru = {
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

    function Qu(uu) {
      const Eu = {
        ...Ku.d[uu]
      };
      for (const ju of Object.keys(ru[uu])) delete Eu[ju];
      return Eu
    }

    function iu() {
      var uu, Eu;
      return null === (uu = null === (Eu = (0, vu.l)()) || void 0 === Eu ? void 0 : Eu.localPlayerAlive()) || void 0 === uu || uu
    }

    function Wu() {
      var uu, Eu;
      return null !== (uu = null === (Eu = (0, vu.l)()) || void 0 === Eu ? void 0 : Eu.localDeaths()) && void 0 !== uu ? uu : null
    }
    const Su = {
        current: iu,
        watch: uu => {
          let Eu = iu(),
            ju = Wu();
          return (0, mu.u)((() => {
            const su = iu(),
              Uu = Wu(),
              Zu = null !== Uu && null !== ju && Uu !== ju;
            ju = Uu, Zu ? (Eu || uu(!0), uu(!1), su && uu(!0), Eu = su) : su !== Eu && (Eu = su, uu(su))
          }))
        }
      },
      Iu = {
        states: {
          ...Qu("states"),
          localPlayerAlive: Su
        },
        events: {
          ...Qu("events"),
          localPlayerAliveSet: {
            watch: Su.watch
          }
        },
        commands: {
          ...Qu("commands"),
          respawn: () => {
            var uu;
            null === (uu = (0, vu.l)()) || void 0 === uu || uu.respawn()
          },
          playEmote: uu => {
            var Eu;
            null === (Eu = (0, vu.l)()) || void 0 === Eu || Eu.send(Vu.c.PlayEmote, (0, Vu.C)({
              Vl: uu
            }))
          },
          applyTemporaryThirdPerson: uu => {
            var Eu;
            let {
              durationMs: ju
            } = uu;
            null === (Eu = (0, vu.l)()) || void 0 === Eu || Eu.thirdPersonFor(ju)
          },
          bindCustomButtonKeys: uu => {
            var Eu;
            null === (Eu = (0, vu.l)()) || void 0 === Eu || Eu.bindCustomButtonKeys(uu)
          },
          pressCustomButton: uu => {
            var Eu;
            let {
              id: ju,
              down: su
            } = uu;
            null === (Eu = (0, vu.l)()) || void 0 === Eu || Eu.pressCustomButton(ju, su)
          },
          setLookSensitivity: () => {},
          wakeUp: uu => {
            const Eu = (0, Vu.O)({
                wq: uu
              }),
              ju = () => {
                const uu = (0, vu.l)();
                return !(null !== uu && void 0 !== uu && uu.isSessionLive) || uu.send(Vu.c.StopSleeping, Eu)
              };
            if (!ju()) {
              const uu = (0, mu.u)((() => {
                ju() && uu()
              }))
            }
          },
          setCameraZoom: uu => {
            var Eu;
            null === (Eu = (0, vu.l)()) || void 0 === Eu || Eu.setCameraZoom(uu)
          }
        },
        queries: Qu("queries"),
        lookups: {
          ...Qu("lookups"),
          cameraZoom: () => {
            var uu, Eu;
            return null !== (uu = null === (Eu = (0, vu.l)()) || void 0 === Eu ? void 0 : Eu.cameraZoom()) && void 0 !== uu ? uu : 0
          }
        }
      };
    var Fu = ju(39375),
      Bu = ju(40935),
      Lu = ju(40944),
      tu = ju(40955),
      xu = ju(1309),
      Tu = ju(103),
      Hu = ju(4709),
      Au = ju(3924),
      nu = ju(1217);
    const yu = {
      kX: () => (0, xu.g)(),
      inbuiltOverwritten: () => Hu.h,
      reflectApplyHit: () => nu.b,
      definerHit: () => Tu.currentUrl.c,
      emitReplaced: () => (0, qu.b)(),
      confirmMesh: () => (0, Au.c)(),
      confirmMeshHitStack: () => (0, Au.g)()
    };
    var zu = ju(40949),
      Ru = ju(41079);
    var uE = ju(22),
      EE = ju(1995),
      jE = ju(2040),
      sE = ju(1693),
      UE = ju(2083),
      ZE = ju(1244),
      XE = ju(1303),
      lE = ju(41083);

    function qE() {
      return XE.h.get().getCurrentLanguageCode()
    }

    function fE(uu) {
      const Eu = () => {
        uu({
          translate: (uu, Eu) => (0, ZE.w)(qE(), uu, Eu),
          keyBindingText: uu => {
            const Eu = (0, jE.v)(uu, uE.d.get("isTouchScreen"));
            return null !== Eu ? (0, ZE.x)(qE(), Eu.translationKey, Eu.params) : (0, jE.q)((0, jE.r)(uu))
          },
          isFriend: UE.e,
          hiddenNames: EE.e.shown,
          loadsFontRest: (0, lE.b)(qE())
        })
      };
      let ju = !1;
      const su = () => {
          const uu = qE();
          (0, ZE.m)(uu).then((() => {
            ju || uu !== qE() || Eu()
          }))
        },
        Uu = () => sE.b.getSocialState().friends.map((uu => uu.name.toLowerCase())).sort().join(" ");
      let Zu = Uu();
      Eu(), su();
      const Xu = [(0, XE.j)((() => {
        Eu(), su()
      })), (0, qu.l)("customBindingsChanged", Eu), (0, qu.l)("appManagerUpdated|isTouchScreen", Eu), (0, UE.b)((() => {
        const uu = Uu();
        uu !== Zu && (Zu = uu, Eu())
      })), EE.e.subscribe(Eu)];
      return () => {
        ju = !0;
        for (const uu of Xu) uu()
      }
    }
    var CE = ju(656),
      bE = ju(1069),
      cE = ju(2014),
      NE = ju(337),
      OE = ju(193),
      YE = ju(3017),
      hE = ju(3020),
      DE = ju(39069),
      gE = ju(4874),
      ME = ju(41093),
      eE = ju(719),
      GE = ju(680),
      pE = ju(3127),
      wE = ju(2011),
      JE = ju(3930),
      dE = ju(3467);
    let aE = null;
    var PE = ju(1255),
      oE = ju(1259),
      kE = ju(4611),
      mE = ju(3646),
      vE = ju(49),
      KE = ju(330),
      VE = ju(326),
      rE = ju(41110),
      QE = ju(4965),
      iE = ju(39110);
    var WE = ju(38089),
      SE = ju(41117);
    class IE {
      constructor(uu, Eu) {
        this.showView = uu, this.holdForAd = Eu
      }
      pointerUnlockRequestsChanged() {
        (0, rE.y)()
      }
      pointerLockDebugEntries() {
        return [{
          label: "Locked to the canvas",
          value: String((0, rE.q)())
        }]
      }
      setGameViewShown(uu) {
        this.showView(uu)
      }
      setGameView(uu) {
        (0, SE.m)(uu)
      }
      videoAdHold(uu, Eu) {
        this.holdForAd(uu, Eu)
      }
    }
    class FE {
      leave(uu) {
        ! function(uu) {
          if (null !== (0, cu.b)().websocketUrl) try {
            (0, mu.H)().leaveGame(uu)
          } finally {
            (0, cu.m)({
              websocketUrl: null
            })
          }
        }(uu)
      }
      isReplay() {
        return !1
      }
    }
    class BE {
      watchFrameStarts(uu) {
        return (0, mu.r)(uu)
      }
      watchFrames(uu) {
        return (0, mu.p)(uu)
      }
      watchTicks(uu) {
        return (0, mu.u)(uu)
      }
    }
    var LE = ju(41119);

    function tE(uu) {
      return uu >= 0 ? Math.min(1, uu) : 0
    }

    function xE(uu, Eu) {
      const {
        fade: ju
      } = uu;
      return null === ju || Eu - ju.at >= ju.ms ? uu.volume : ju.from + (uu.volume - ju.from) * Math.max(0, (Eu - ju.at) / ju.ms)
    }

    function TE(uu) {
      const Eu = Object.entries(uu),
        ju = new Uint32Array(Eu.length);
      let su = 0;
      for (const [Xu, [, lu]] of Eu.entries()) ju[Xu] = lu.length, su += lu.length;
      const Uu = new Float64Array(3 * su);
      let Zu = 0;
      for (const [, Xu] of Eu)
        for (const uu of Xu) Uu.set(uu, Zu), Zu += 3;
      return {
        blocks: Eu.map((uu => {
          let [Eu] = uu;
          return Eu
        })).join("\0"),
        counts: ju,
        values: Uu
      }
    }
    class HE {
      constructor(uu, Eu) {
        this.core = uu, this.warn = Eu, this.latest = 0
      }
      async feed() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : AE;
        const Eu = ++this.latest;
        let ju;
        try {
          ju = await uu()
        } catch (su) {
          return void(this.core.isStopped || Eu !== this.latest || this.warn("the block colours didn't load, so block particles draw grey", su))
        }
        Eu === this.latest && (this.core.setBlockColours(ju) || this.core.isStopped || this.warn("the core refused the block colours: block particles draw grey"))
      }
    }
    async function AE() {
      return TE((await ju.e(207).then((() => ju(34634)))).averageColors)
    }
    var nE = ju(4970),
      yE = ju(4976),
      zE = ju(40897),
      RE = ju(3410),
      uj = ju(36670),
      Ej = ju(40984),
      jj = ju(645),
      sj = ju(37454),
      Uj = ju(636),
      Zj = ju(349),
      Xj = ju(40971);
    const lj = [3e4, 12e4, 3e5];
    class qj extends Error {}
    const fj = {
      mobTypes: jj.l,
      vehicleTypes: sj.c,
      mobAiStates: jj.k,
      playerPoses: Uj.u
    };
    var Cj = ju(40963),
      bj = ju(40980),
      cj = ju(41011),
      Nj = ju(1128),
      Oj = ju(41121),
      Yj = ju(41128),
      hj = ju(3148),
      Dj = ju(39351),
      gj = ju(4986),
      Mj = ju(2516);
    const ej = Mj.x.KeysDisabled | Mj.x.LookFrozen | Mj.x.ClicksSuppressed,
      Gj = hj.e;
    var pj = (0, Yj.b)("resumingConn");
    class wj {
      constructor(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.shell = uu, this.now = Eu, this.session = void 0, this.attempt = null, this.landed = null, this.initialInfoConn = 0, this.initialInfoOffer = !1, this.completedEarlyConn = 0, Object.defineProperty(this, pj, {
          writable: !0,
          value: 0
        }), this.drops = 0, this.session = new Dj.e({
          reconnect: uu => this.reconnect(uu),
          isLive: () => uu.isLive(),
          onReconnected: Eu => {
            this.landed = Eu, uu.onReconnected(Eu), this.landIfResumed()
          },
          onGaveUp: (Eu, ju) => {
            this.abortAttempt(), uu.onGaveUp(Eu, ju)
          },
          freeze: Eu => {
            uu.Wm(Eu), (0, gj.g)(ej, Eu ? ej : 0, "reconnectFreeze")
          },
          releaseSeat: uu => {
            this.releaseSeat(uu)
          }
        })
      }
      isResuming() {
        return this.session.isResuming()
      }
      get resumingConn() {
        return (0, Oj.b)(this, pj)[pj]
      }
      canHoldSeat() {
        return this.session.canHoldSeat()
      }
      onInitialInfo(uu) {
        let {
          conn: Eu,
          graceMs: ju,
          sessionBased: su,
          replayOffer: Uu
        } = uu;
        this.session.onInitialInfo(ju, su), this.isResuming() && (this.initialInfoConn = Eu, this.initialInfoOffer = Uu, this.landIfResumed())
      }
      onResumeComplete(uu) {
        0 !== uu && (uu === (0, Oj.b)(this, pj)[pj] ? ((0, Oj.b)(this, pj)[pj] = 0, this.session.onResumed()) : this.isResuming() && (this.completedEarlyConn = uu))
      }
      onDropped(uu) {
        this.drops++, this.landed = null, this.initialInfoConn = 0, this.initialInfoOffer = !1, this.completedEarlyConn = 0, (0, Oj.b)(this, pj)[pj] = 0, this.session.onConnectionLost(uu)
      }
      leave() {
        this.session.leave(), this.dispose()
      }
      dispose() {
        this.abortAttempt(), this.landed = null, this.completedEarlyConn = 0, (0, Oj.b)(this, pj)[pj] = 0, this.session.end()
      }
      reconnect(uu) {
        const Eu = this.attempt;
        if (null !== Eu && this.awaitingJoinRoom(Eu)) return Eu.result;
        this.abortAttempt();
        const ju = new AbortController,
          su = this.drops,
          Uu = {
            attachedAt: null
          },
          Zu = this.shell.reconnect(uu, ju.signal, (() => {
            Uu.attachedAt = this.now()
          })).then((uu => {
            if (this.clearAttempt(Xu), this.drops !== su) throw new Error("the resumed room dropped before its attempt settled");
            return uu
          }), (uu => {
            throw this.clearAttempt(Xu), uu
          })),
          Xu = {
            abort: ju,
            socket: Uu,
            result: Zu
          };
        return this.attempt = Xu, Zu
      }
      clearAttempt(uu) {
        this.attempt === uu && (this.attempt = null)
      }
      abortAttempt() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new DOMException("the reconnect attempt was given up", "AbortError");
        const Eu = this.attempt;
        this.attempt = null, null === Eu || void 0 === Eu || Eu.abort.abort(uu)
      }
      awaitingJoinRoom(uu) {
        const Eu = uu.socket.attachedAt;
        return null !== Eu && this.now() - Eu < Gj
      }
      releaseSeat(uu) {
        const Eu = this.attempt,
          ju = null !== Eu && this.awaitingJoinRoom(Eu);
        this.abortAttempt(new Bu.r), ju || this.shell.releaseSeat(uu)
      }
      landIfResumed() {
        const uu = this.landed;
        if (null !== uu && uu.conn === this.initialInfoConn) {
          const Eu = this.initialInfoOffer && this.completedEarlyConn !== uu.conn;
          if (this.landed = null, this.initialInfoConn = 0, this.initialInfoOffer = !1, this.completedEarlyConn = 0, this.abortAttempt(), !Eu) return void this.session.onResumed();
          (0, Oj.b)(this, pj)[pj] = uu.conn, this.session.onResuming()
        }
      }
    }
    var Jj = ju(39354),
      dj = ju(41135),
      aj = ju(36866),
      Pj = ju(36860),
      oj = ju(2239),
      kj = ju(1955),
      mj = ju(4473),
      vj = ju(40988),
      Kj = ju(5223);

    function Vj(uu) {
      let {
        pack: Eu,
        gameSource: ju
      } = uu;
      if (null !== ju && "" !== ju) return `game:${ju}`;
      if (null === Eu) return "default";
      const {
        id: su,
        version: Uu
      } = Eu.metaData;
      if (su !== oj.p.CUSTOM) return `${su}@${Uu}`;
      const Zu = [];
      for (const Xu of [Eu.textureOverrides, Eu.modelOverrides, Eu.animations])
        for (const [uu, Eu] of Object.entries(null !== Xu && void 0 !== Xu ? Xu : {})) Zu.push(`${uu}:${Eu.length}`);
      return `${su}:${(0,kj.s)(Zu.join())}`
    }
    var rj = ju(4600),
      Qj = ju(3427),
      ij = ju(41138),
      Wj = ju(687),
      Sj = ju(3429),
      Ij = ju(91),
      Fj = ju(4688),
      Bj = ju(31),
      Lj = ju(4478),
      tj = ju(41054),
      xj = ju(4626),
      Tj = ju(2519),
      Hj = ju(1687),
      Aj = ju(1710),
      nj = ju(1343),
      yj = ju(107),
      zj = ju(308),
      Rj = ju(39384),
      us = ju(2522),
      Es = ju(4983);
    const ss = new Set([nE.sb.KeyDown, nE.sb.MouseMove, nE.sb.MouseDown, nE.sb.Wheel, nE.sb.TouchStart, nE.sb.TouchMove]);

    function Us(uu) {
      return (uu.shiftKey ? nE.Qb.Shift : 0) | (uu.ctrlKey ? nE.Qb.Ctrl : 0) | (uu.altKey ? nE.Qb.Alt : 0) | (uu.metaKey ? nE.Qb.Meta : 0) | ("repeat" in uu && uu.repeat ? nE.Qb.Repeat : 0) | (uu.isTrusted ? 0 : nE.Qb.Untrusted | function(uu) {
        try {
          const {
            editable: Eu,
            outsideView: ju
          } = (0, Rj.e)(uu.target);
          return (Eu ? nE.Qb.UntrustedEditable : 0) | (ju ? nE.Qb.UntrustedOutsideView : 0)
        } catch {
          return 0
        }
      }(uu))
    }

    function Zs(uu) {
      return "touchOnly" !== (0, yj.c)() && "function" === typeof uu.requestPointerLock
    }

    function Xs(uu) {
      return 0 === uu.button ? uu.altKey ? Es.k["Alt+Left Click"] : Es.k.Mouse1 : 1 === uu.button ? Es.k.Mouse2 : Es.k.Mouse3
    }
    const ls = new Set(["AltLeft", "AltRight", "ArrowUp", "ArrowDown"]),
      qs = new Map([
        ["AltLeft", "altKey"],
        ["AltRight", "altKey"],
        ["ControlLeft", "ctrlKey"],
        ["ControlRight", "ctrlKey"],
        ["ShiftLeft", "shiftKey"],
        ["ShiftRight", "shiftKey"],
        ["MetaLeft", "metaKey"],
        ["MetaRight", "metaKey"]
      ]),
      fs = 32768,
      Cs = 1;

    function bs(uu) {
      return Math.min(Math.max(Math.round(uu), 0), 65535)
    }

    function cs(uu, Eu, ju) {
      const su = [],
        Uu = (uu, Eu, ju, Uu) => {
          const Zu = uu => {
            (0, Aj.t)(uu) || ju(uu)
          };
          uu.addEventListener(Eu, Zu, Uu), su.push((() => {
            uu.removeEventListener(Eu, Zu, Uu)
          }))
        },
        Zu = {
          capture: !0,
          passive: !0
        },
        Xu = (uu, ju, su, Uu, Zu) => (!(0, us.e)() || !ss.has(uu)) && (Eu(uu, ju, su, Uu, Zu), !0),
        lu = () => document.pointerLockElement === uu,
        qu = (0, zj.f)(),
        fu = uu => {
          uu.ctrlKey && ju.ctrlCombosAreGames() && !(0, gj.d)(uu.target) && uu.preventDefault()
        },
        Cu = (uu, su, Uu) => {
          ju.inspect(uu, su, !1), Eu(nE.sb.KeyUp, su, 0, 0, (0, Tj.r)(Uu, uu.timeStamp)), ju.keyReleased(su)
        },
        bu = new Map,
        cu = (uu, Eu, ju) => uu[ju] || ("AltRight" === Eu || "ControlLeft" === Eu) && uu.getModifierState("AltGraph"),
        Nu = new Map,
        Ou = () => {
          bu.clear(), Nu.clear()
        },
        Yu = uu => {
          if (uu.isTrusted && document.hasFocus())
            for (const [Eu, ju] of Nu) Nu.delete(Eu), cu(uu, Eu, ju) || (bu.delete(Eu), Cu(uu, Es.k[Eu], Us(uu)))
        };
      uu.tabIndex = -1;
      let hu = 0,
        Du = 0;
      const gu = () => {
        const Eu = uu.getBoundingClientRect();
        hu = Eu.left, Du = Eu.top
      };
      let Mu = "mouse";
      const eu = () => !lu() && ("mouse" === Mu || !ju.touchUiShown()),
        Gu = (uu, Eu, ju) => {
          const su = (bs(uu.clientX - hu) | bs(uu.clientY - Du) << 16) >>> 0;
          Xu(nE.sb.MouseMove, nE.Tb.Point, Eu, ju, su)
        };
      let pu = !1,
        wu = 0;
      const Ju = () => {
        pu && (pu = !1, ju.viewShown() && (0, rE.P)())
      };
      su.push((() => {
        clearTimeout(wu)
      })), Uu(window, "keydown", (uu => {
        "Escape" === uu.key ? (0, rE.D)(!0) : uu.repeat || (0, gj.d)(uu.target) || (pu = !0, clearTimeout(wu), wu = window.setTimeout(Ju, 0))
      }), Zu), Uu(window, "keydown", (uu => {
        Ju(), fu(uu), Yu(uu);
        const Eu = Es.k[uu.code];
        if ("number" !== typeof Eu || !ju.viewShown()) return;
        const su = (0, gj.d)(uu.target);
        su || !ju.prevents(Eu) && !ls.has(uu.code) || uu.preventDefault(), uu.repeat || ju.inspect(uu, Eu, !0), Xu(nE.sb.KeyDown, Eu, 0, 0, (0, Tj.r)(Us(uu), uu.timeStamp)) && bu.set(uu.code, Eu), su || ju.keyPressed(Eu)
      }), {
        capture: !1,
        passive: !1
      }), Uu(window, "keyup", (uu => {
        "Escape" === uu.key && (0, rE.D)(!1), fu(uu), bu.delete(uu.code), Nu.delete(uu.code), Yu(uu);
        const Eu = Es.k[uu.code];
        "number" === typeof Eu && Cu(uu, Eu, Us(uu))
      }), {
        capture: !0,
        passive: !1
      }), Uu(window, "mousemove", (uu => {
        "mouse" === Mu && eu() ? Gu(uu, uu.movementX, uu.movementY) : lu() ? Xu(nE.sb.MouseMove, nE.Tb.Stamped, uu.movementX, uu.movementY, (0, Tj.r)(0, uu.timeStamp)) : Xu(nE.sb.MouseMove, 0, uu.movementX, uu.movementY, 0)
      }), Zu);
      let du = 0,
        au = 0;
      const Pu = [];
      let ou = !1,
        ku = !1;
      Uu(uu, "mousedown", (uu => {
        if ((0, us.e)()) return;
        Yu(uu);
        const su = 1 << uu.button;
        if (!lu() && (0, rE.M)() && (0, rE.e)() && (ku = !0, !ou)) return void(du |= su);
        du &= ~su;
        const Uu = uu.button <= 2 ? Xs(uu) : void 0;
        void 0 !== Uu && (Pu[uu.button] = Uu, ju.inspect(uu, Uu, !0)), eu() && Gu(uu, 0, 0), Eu(nE.sb.MouseDown, uu.button, uu.clientX, uu.clientY, (0, Tj.r)(Us(uu), uu.timeStamp)), au |= su, void 0 !== Uu && ju.keyPressed(Uu)
      }), Zu), Uu(window, "mouseup", (uu => {
        var su;
        Yu(uu);
        const Uu = 1 << uu.button,
          Zu = 0 !== (du & ~au & Uu);
        if (du &= ~Uu, au &= ~Uu, Zu) return;
        const Xu = uu.button <= 2 ? null !== (su = Pu[uu.button]) && void 0 !== su ? su : Xs(uu) : void 0;
        void 0 !== Xu && ju.inspect(uu, Xu, !1), Eu(nE.sb.MouseUp, uu.button, uu.clientX, uu.clientY, (0, Tj.r)(Us(uu), uu.timeStamp)), void 0 !== Xu && ju.keyReleased(Xu)
      }), Zu), Uu(uu, "contextmenu", (uu => {
        uu.preventDefault()
      }), {
        passive: !1
      });
      const mu = uu => {
        (lu() || (0, rE.o)() && (0, nj.w)()) && (uu.ctrlKey || qu && !document.fullscreenElement) && uu.preventDefault()
      };
      Uu(uu, "wheel", (uu => {
        mu(uu), Yu(uu), Xu(nE.sb.Wheel, uu.deltaMode, uu.deltaX, uu.deltaY, 0)
      }), {
        capture: !0,
        passive: !1
      });
      const vu = {
          capture: !0,
          passive: !1
        },
        Ku = uu => {
          uu ? window.addEventListener("wheel", mu, vu) : window.removeEventListener("wheel", mu, vu)
        };
      Ku((0, rE.o)()), su.push((0, rE.t)(Ku)), su.push((() => {
        Ku(!1)
      }));
      const Vu = new Map,
        ru = new Set,
        Qu = uu => {
          const Eu = "stylus" === uu.touchType;
          for (const ju of Vu.values())
            if (!ju.touched && (Eu || Math.abs(uu.clientX - ju.x) <= Cs && Math.abs(uu.clientY - ju.y) <= Cs)) return ju.touched = !0, !0;
          return !1
        },
        iu = uu => 32767 & uu,
        Wu = new Set,
        Su = uu => ju => {
          const su = (0, Tj.r)(Us(ju), ju.timeStamp);
          uu !== nE.sb.TouchStart && uu !== nE.sb.TouchMove || ((uu, ju) => {
            const su = uu.touches;
            if (su)
              for (const Uu of Wu) {
                let uu = !1;
                for (let Eu = 0; Eu < su.length && !uu; Eu++) uu = iu(su[Eu].identifier) === Uu;
                uu || (Wu.delete(Uu), Eu(nE.sb.TouchCancel, Uu, 0, 0, ju))
              }
          })(ju, su);
          const Uu = ju.changedTouches;
          for (let Eu = 0; Eu < Uu.length; Eu++) {
            const ju = Uu[Eu];
            if (uu === nE.sb.TouchStart && Qu(ju) && ru.add(ju.identifier), ru.has(ju.identifier)) {
              uu !== nE.sb.TouchEnd && uu !== nE.sb.TouchCancel || ru.delete(ju.identifier);
              continue
            }
            const Zu = iu(ju.identifier),
              lu = Xu(uu, Zu, ju.clientX - hu, ju.clientY - Du, su);
            uu === nE.sb.TouchStart ? lu && Wu.add(Zu) : uu !== nE.sb.TouchMove && Wu.delete(Zu)
          }
        },
        Iu = Su(nE.sb.TouchStart);
      Uu(uu, "touchstart", (uu => {
        uu.preventDefault(), (0, us.e)() || (ju.touchStarting(), Iu(uu))
      }), {
        passive: !1
      }), Uu(uu, "touchmove", Su(nE.sb.TouchMove), Zu), Uu(uu, "touchend", Su(nE.sb.TouchEnd), Zu), Uu(uu, "touchcancel", Su(nE.sb.TouchCancel), Zu);
      const Fu = uu => fs | 32767 & uu,
        Bu = (uu, Eu) => {
          Xu(uu, Fu(Eu.pointerId), Eu.clientX - hu, Eu.clientY - Du, (0, Tj.r)(Us(Eu), Eu.timeStamp))
        };
      Uu(window, "pointerdown", (Eu => {
        Mu = Eu.pointerType, "mouse" === Eu.pointerType && Eu.target !== uu && ju.viewShown() && (0, rE.S)()
      }), Zu), Uu(uu, "pointerdown", (uu => {
        "pen" === uu.pointerType && 0 === uu.button && (0, rE.o)() && (0, nj.w)() && (uu.preventDefault(), (0, us.e)() || (Vu.set(uu.pointerId, {
          x: uu.clientX,
          y: uu.clientY,
          touched: !1
        }), ju.touchStarting(), Bu(nE.sb.TouchStart, uu)))
      }), {
        passive: !1
      }), Uu(window, "pointermove", (uu => {
        Mu = uu.pointerType, Vu.has(uu.pointerId) && Bu(nE.sb.TouchMove, uu), "mouse" !== uu.pointerType && eu() && Gu(uu, 0, 0)
      }), Zu);
      const Lu = uu => Eu => {
        Vu.delete(Eu.pointerId) && Bu(uu, Eu)
      };
      Uu(window, "pointerup", Lu(nE.sb.TouchEnd), Zu), Uu(window, "pointercancel", Lu(nE.sb.TouchCancel), Zu);
      let tu = 0;
      const xu = () => {
          tu = 0, gu(), ju.resized()
        },
        Tu = () => {
          const uu = ju.sizeCanvas();
          null !== uu && Eu(nE.sb.Resize, 0, uu.cssWidth, uu.cssHeight, (0, Tj.i)(uu.renderScale)), gu(), ju.resized(), 0 === tu && (tu = requestAnimationFrame(xu))
        };
      Uu(window, "resize", Tu, Zu), su.push(ju.watchRenderScale(Tu)), su.push((() => {
        cancelAnimationFrame(tu)
      })), Uu(window, "focus", (uu => {
        uu.isTrusted && (Eu(nE.sb.Focus, 0, 0, 0, 0), ju.viewShown() && (0, rE.S)())
      }), {
        passive: !0
      });
      const Hu = () => {
          (0, rE.D)(!1), du = 0
        },
        Au = () => {
          Wu.clear(), Vu.clear(), ru.clear()
        };
      let nu = 0,
        yu = 0;
      Uu(window, "blur", (su => {
        Hu(), (0, rE.k)();
        for (const uu of bu.keys()) {
          const Eu = qs.get(uu);
          void 0 !== Eu && Nu.set(uu, Eu)
        }
        su.isTrusted && ((uu => {
          for (const [ju, su] of Vu) Eu(nE.sb.TouchCancel, Fu(ju), su.x, su.y, (0, Tj.r)(0, uu));
          Vu.clear()
        })(su.timeStamp), Eu(nE.sb.Blur, nE.r.KeepTouches, 0, 0, 0)), qu && su.isTrusted && (clearTimeout(yu), yu = window.setTimeout((() => {
          if (!document.hasFocus()) {
            for (const uu of bu.values()) Cu(su, uu, 0);
            Ou()
          }
        }), 0)), clearTimeout(nu), nu = window.setTimeout((() => {
          document.activeElement instanceof HTMLIFrameElement && (0, nj.w)() && ju.viewShown() && uu.focus({
            preventScroll: !0
          })
        }), 0)
      }), {
        passive: !0
      }), su.push((() => {
        clearTimeout(nu), clearTimeout(yu)
      })), Uu(window, "mousedown", (Eu => {
        qu && Eu.isTrusted && !document.hasFocus() && (0, nj.w)() && ju.viewShown() && (window.focus(), uu.focus({
          preventScroll: !0
        }))
      }), Zu), Uu(document, "visibilitychange", (() => {
        document.hidden ? (Eu(nE.sb.Blur, 0, 0, 0, 0), Au()) : document.hasFocus() && Eu(nE.sb.Focus, 0, 0, 0, 0)
      }), {
        passive: !0
      }), su.push((0, us.i)((() => {
        Hu(), Eu(nE.sb.Blur, nE.r.Release, 0, 0, 0), ju.keysReleased(), Ou(), au = 0, Au(), Eu(nE.sb.Joystick, 0, 0, 0, 0), document.hasFocus() && Eu(nE.sb.Focus, 0, 0, 0, 0)
      })));
      const zu = !ju.canLock(),
        Ru = () => zu && !(0, rE.o)() ? nE.lc.Lockless : nE.lc.Released,
        uE = () => {
          lu() && (ou = !1, ku = !1), Eu(nE.sb.PointerLock, lu() ? nE.lc.Locked : Ru(), 0, 0, 0), (0, rE.J)(lu())
        };
      return Uu(document, "pointerlockchange", uE, {
        passive: !0
      }), Uu(document, "pointerlockerror", (() => {
        ou ||= ku, ku = !1, (0, rE.r)()
      }), {
        passive: !0
      }), zu && su.push((0, rE.t)((() => {
        Eu(nE.sb.PointerLock, Ru(), 0, 0, 0)
      }))), Tu(), Eu(document.hasFocus() ? nE.sb.Focus : nE.sb.Blur, 0, 0, 0, 0), uE(), () => {
        for (const uu of su.splice(0)) uu()
      }
    }
    var Ns = ju(34501),
      Os = ju(34490),
      Ys = ju(2042);
    const hs = new Map(Es.e.map(((uu, Eu) => [uu, Eu]))),
      Ds = ["jump", "primary-fire", "alt-fire"],
      gs = ["primary-fire", "alt-fire"];

    function Ms(uu) {
      return `${Ys.e}${uu}`
    }
    const es = ["forward", "backward", "left", "right", "sprint", "jump"];

    function Gs(uu) {
      const Eu = [];
      for (const ju of uu) {
        const uu = "string" === typeof ju ? Es.k[ju] : void 0;
        "number" === typeof uu && Eu.push(uu)
      }
      return Eu
    }
    class ps {
      constructor() {
        this.keys = new Map, this.preventKeys = new Set, this.movementKeys = new Set, this.checkedDown = new Set, this.checkedUp = new Set;
        for (const [uu, Eu] of Object.entries(Es.h)) this.keys.set(uu, Eu);
        this.updateKeySets()
      }
      prevents(uu) {
        return this.preventKeys.has(uu)
      }
      moves(uu) {
        return this.movementKeys.has(uu)
      }
      checks(uu, Eu) {
        return (Eu ? this.checkedDown : this.checkedUp).has(uu)
      }
      sync(uu, Eu) {
        for (const [ju, su] of this.keys) {
          const Uu = uu(Ms(ju)),
            Zu = Array.isArray(Uu) ? Gs(Uu) : Es.h[ju];
          (Zu.length !== su.length || Zu.some(((uu, Eu) => uu !== su[Eu]))) && this.bind(ju, Zu, Eu)
        }
      }
      bind(uu, Eu, ju) {
        const su = hs.get(uu);
        if (void 0 !== su) {
          ju(nE.sb.Binding, 0, 0, 0, su | nE.o.Clear << 8);
          for (const Zu of [...Eu, ...null !== (Uu = Es.j[uu]) && void 0 !== Uu ? Uu : []]) {
            var Uu;
            ju(nE.sb.Binding, Zu, 0, 0, su | nE.o.Add << 8)
          }
          this.keys.set(uu, Eu), this.updateKeySets()
        }
      }
      updateKeySets() {
        this.preventKeys.clear();
        for (const su of Es.l)
          for (const Eu of null !== (uu = this.keys.get(Es.e[su])) && void 0 !== uu ? uu : []) {
            var uu;
            this.preventKeys.add(Eu)
          }
        this.movementKeys.clear();
        for (const su of es)
          for (const uu of null !== (Eu = this.keys.get(su)) && void 0 !== Eu ? Eu : []) {
            var Eu;
            this.movementKeys.add(uu)
          }
        for (const [su, Uu] of [
            [this.checkedDown, Ds],
            [this.checkedUp, gs]
          ]) {
          su.clear();
          for (const uu of Uu)
            for (const Eu of null !== (ju = this.keys.get(uu)) && void 0 !== ju ? ju : []) {
              var ju;
              su.add(Eu)
            }
        }
      }
    }
    var ws = ju(4979),
      ds = ju(36981);
    const as = "[bloxd-wasm-client]";

    function Ps() {
      return "inGame" === uE.d.get("gameState") && !(0, Hj.t)()
    }
    let os = null;

    function ks(uu, Eu) {
      os && Eu.writePendingInput() && os.push(function(uu, Eu) {
        let ju = "";
        for (const su of Eu) ju += su.toString(16).padStart(2, "0");
        return ju ? `${uu} ${ju}` : String(uu)
      }(uu, Eu.rings.input.written()))
    }
    const ms = [];

    function vs(uu, Eu, ju, su) {
      uu === nE.T.InputAction && su === nE.nb && ms.push(Eu.getUint32(ju, !0))
    }
    var Ks = ju(41140),
      Vs = ju(1251),
      rs = ju(37241);
    const Qs = {
      general: {
        ok: "OK",
        tryAgain: "Try Again",
        back: "Back",
        reload: "Reload",
        reconnect: "Rejoin"
      },
      wasmScreens: Vs.wasmScreens
    };

    function is(uu) {
      var Eu, ju;
      let su = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const [Uu, Zu] = uu.split(":");
      return (null !== (Eu = null === (ju = Qs[Uu]) || void 0 === ju ? void 0 : ju[Zu]) && void 0 !== Eu ? Eu : uu).replace(/\{\{(\w+)\}\}/g, ((uu, Eu) => {
        var ju;
        return null !== (ju = su[Eu]) && void 0 !== ju ? ju : uu
      }))
    }

    function Ws(uu, Eu) {
      (0, xj.d)();
      const ju = document.createElement("div");
      ju.setAttribute("role", "alertdialog"), ju.style.cssText = "position:fixed;top:0;right:0;bottom:0;left:0;z-index:100;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,0.7);font:16px sans-serif;color:#fff";
      const su = document.createElement("div");
      su.style.cssText = "max-width:28rem;padding:1.5rem;background:#1c2333;text-align:center";
      const Uu = document.createElement("h2");
      Uu.textContent = is(uu.title);
      const Zu = document.createElement("p");
      if (Zu.textContent = is(uu.help, uu.helpValues), Zu.style.whiteSpace = "pre-line", su.append(Uu, Zu), uu.discordLink) {
        const uu = document.createElement("a");
        uu.href = rs.e, uu.target = "_blank", uu.rel = "noreferrer", uu.style.color = "#8ab4ff", uu.textContent = is("wasmScreens:reportOnDiscord"), su.append(uu)
      }
      const Xu = document.createElement("div");
      return Xu.style.cssText = "display:flex;gap:1rem;justify-content:center;margin-top:1.5rem", su.append(Xu), ju.append(su), document.body.append(ju), new Promise((su => {
        const Uu = uu => {
            null === Eu || void 0 === Eu || Eu.removeEventListener("abort", Zu), ju.remove(), su(uu)
          },
          Zu = () => {
            Uu(!1)
          };
        null === Eu || void 0 === Eu || Eu.addEventListener("abort", Zu, {
          once: !0
        });
        const lu = (uu, Eu) => {
          const ju = document.createElement("button");
          ju.textContent = is(uu), ju.style.cssText = "padding:0.5rem 1.25rem;font:inherit", ju.addEventListener("click", (() => {
            Uu(Eu)
          })), Xu.append(ju)
        };
        null !== uu.cancel && lu(uu.cancel, !1), lu(uu.confirm, !0)
      }))
    }
    var Ss = ju(274),
      Is = ju(124);
    const Fs = new Set(["android", "ios"]);
    let Bs = null;

    function Ls() {
      return Bs ??= function() {
        let uu = null;
        try {
          var Eu, ju, su;
          const Uu = document.createElement("canvas"),
            Zu = {
              powerPreference: Is.d
            };
          if (uu = null !== (Eu = Uu.getContext("webgl2", Zu)) && void 0 !== Eu ? Eu : Uu.getContext("webgl", Zu), !uu) return null;
          const Xu = uu.getExtension("WEBGL_debug_renderer_info");
          if (!Xu) return "unknown";
          const lu = String(null !== (ju = uu.getParameter(Xu.UNMASKED_RENDERER_WEBGL)) && void 0 !== ju ? ju : "");
          return "" === lu ? "unknown" : (0, Ss.h)(String(null !== (su = uu.getParameter(Xu.UNMASKED_VENDOR_WEBGL)) && void 0 !== su ? su : ""), lu)
        } catch {
          return null
        } finally {
          try {
            var Uu, Zu;
            null === (Uu = uu) || void 0 === Uu || null === (Zu = Uu.getExtension("WEBGL_lose_context")) || void 0 === Zu || Zu.loseContext()
          } catch {}
        }
      }(), Bs
    }

    function ts(uu) {
      const Eu = (0, Ij.pageOperatingSystem)();
      return null === Eu ? null : function(uu, Eu, ju) {
        const su = "software_adapter" === uu.reason ? null : uu.adapter,
          Uu = null === su || "" === su.vendor ? null : (0, Ss.g)(su.vendor, su.architecture);
        return null !== Uu && "other_intel" !== Uu ? Uu : Fs.has(Eu) ? null : ju()
      }(uu, Eu, Ls)
    }
    const xs = 6e4,
      Ts = 3e5;
    var Hs = ju(3838);
    var As = ju(41149),
      ns = ju(692),
      ys = ju(13);

    function zs(uu, Eu) {
      const ju = ys.lb.encode(Eu);
      ! function(uu, Eu) {
        let ju = Eu >= 0 ? 2 * Eu : 2 * -Eu - 1;
        for (; ju >= 128;) uu.push(ju % 128 | 128), ju = Math.floor(ju / 128);
        uu.push(ju)
      }(uu, ju.length);
      for (const su of ju) uu.push(su)
    }
    let Rs, uU, EU;
    (() => {
      const uu = ["length", 0, "c", 134, "e", null, 208, "a", 10, "v", 1, void 0, "b", 3, 4, 15, 1023, 65536, 190, 55296, 56320, 2, 6, 12, 63, 128, 210, 216, 69, 192, "Invalid byte index", 84, 255, 224, 31, "Invalid continuation byte", 240, 7, 18, 138, !1, "resolv", "then", "postCo", "okies", "d", 77, 30, 60, "=", 153, 201, 207, 24, 1e3, "expire", "s=", ";", ";path=", "/", "Block ", "image "];

      function Eu() {}
      const su = (0, ys[uu[9]])("aGFyZHdhcmVDb25jdXJyZW5jeQ=" + uu[49]),
        Uu = (0, ys[uu[9]])("QkFCWUxPTg=="),
        Zu = (0, ys[uu[9]])("QW5kZXNpdGU="),
        Xu = (0, ys[uu[9]])("U21vb3RoIEdyYW5pdGU="),
        lu = (0, ys[uu[9]])("RGlvcml0ZQ=="),
        qu = async (su, Uu, Zu, Xu) => {
          const [{
            clientSideServerUrls: lu
          }, {
            HttpPayloadType: qu,
            postJsonWithMetricsCookiesAndCustomResponse: fu
          }] = await Promise.all([Promise[uu[41] + uu[4]]()[uu[42]](((...su) => (su[uu[0]] = uu[1], "N_ddKPq" in Eu && function() {
            ! function(...Eu) {
              function ju(...Eu) {
                for (Cu(Eu[uu[0]] = uu[10], Eu[uu[7]] = [], Eu[uu[12]] = uu[1], Eu[uu[13]] = Eu[uu[1]].length, Eu[uu[14]] = uu[11], Eu[uu[15]] = uu[11]); Eu[uu[12]] < Eu[uu[13]];) Cu(Eu[uu[14]] = Eu[uu[1]].charCodeAt(Eu[uu[12]]++), Eu[uu[14]] >= uu[19] && Eu[uu[14]] <= 56319 && Eu[uu[12]] < Eu[uu[13]] ? (Eu[uu[15]] = Eu[uu[1]].charCodeAt(Eu[uu[12]]++), (64512 & Eu[uu[15]]) == uu[20] ? Eu[uu[7]].push(((Eu[uu[14]] & uu[16]) << uu[8]) + (Eu[uu[15]] & uu[16]) + uu[17]) : (Eu[uu[7]].push(Eu[uu[14]]), Eu[uu[12]]--)) : Eu[uu[7]].push(Eu[uu[14]]));
                return Eu[uu[7]]
              }

              function su(...ju) {
                for (Cu(ju[uu[0]] = uu[10], ju[uu[10]] = ju[uu[1]].length, ju[uu[12]] = -uu[10], ju[uu[13]] = uu[11], ju[uu[14]] = ""); ++ju[uu[12]] < ju[uu[10]];) ju[uu[13]] = ju[uu[1]][ju[uu[12]]], ju[uu[13]] > 65535 && Cu(ju[uu[13]] -= uu[17], ju[uu[14]] += Eu[-uu[18]](ju[uu[13]] >>> uu[8] & uu[16] | uu[19]), ju[uu[13]] = uu[20] | ju[uu[13]] & uu[16]), ju[uu[14]] += Eu[-uu[18]](ju[uu[13]]);
                return ju[uu[14]]
              }

              function Uu(...Eu) {
                if (Eu[uu[0]] = uu[10], Eu[uu[1]] >= uu[19] && Eu[uu[1]] <= 57343) throw Error("Lone surrogate U+" + Eu[uu[1]].toString(16).toUpperCase() + " is not a scalar value")
              }

              function Zu(...ju) {
                return ju[uu[0]] = uu[21], Eu[-uu[18]](ju[uu[1]] >> ju[uu[10]] & uu[24] | uu[25])
              }

              function Xu(...ju) {
                return ju[uu[0]] = uu[10], (4294967168 & ju[uu[1]]) == uu[1] ? Eu[-uu[18]](ju[uu[1]]) : (ju[uu[7]] = "", (4294965248 & ju[uu[1]]) == uu[1] ? ju[uu[7]] = Eu[-uu[18]](ju[uu[1]] >> uu[22] & uu[34] | uu[29]) : (4294901760 & ju[uu[1]]) == uu[1] ? Cu(Uu(ju[uu[1]]), ju[uu[7]] = Eu[-uu[18]](ju[uu[1]] >> uu[23] & uu[15] | uu[33]), ju[uu[7]] += Zu(ju[uu[1]], uu[22])) : (4292870144 & ju[uu[1]]) == uu[1] && Cu(ju[uu[7]] = Eu[-uu[18]](ju[uu[1]] >> uu[38] & uu[37] | uu[36]), ju[uu[7]] += Zu(ju[uu[1]], uu[23]), ju[uu[7]] += Zu(ju[uu[1]], uu[22])), ju[uu[7]] += Eu[-uu[18]](ju[uu[1]] & uu[24] | uu[25]), ju[uu[7]])
              }

              function lu(...Eu) {
                for (Cu(Eu[uu[0]] = uu[10], Eu[uu[10]] = ju(Eu[uu[1]]), Eu[uu[12]] = Eu[uu[10]].length, Eu[uu[26]] = -uu[10], Eu[-uu[27]] = uu[11], Eu[uu[28]] = ""); ++Eu[uu[26]] < Eu[uu[12]];) Cu(Eu[-uu[27]] = Eu[uu[10]][Eu[uu[26]]], Eu[uu[28]] += Xu(Eu[-uu[27]]));
                return Eu[uu[28]]
              }

              function qu(...ju) {
                if (ju[uu[0]] = uu[1], Eu[uu[21]] >= Eu[uu[2]]) throw Error(uu[30]);
                if (Cu(ju[-uu[13]] = Eu[uu[31]][Eu[uu[21]]] & uu[32], Eu[uu[21]]++), (ju[-uu[13]] & uu[29]) == uu[25]) return ju[-uu[13]] & uu[24];
                throw Error(uu[35])
              }

              function fu() {
                var ju, su, Zu, Xu, lu;
                if (Cu(su = void 0, Zu = void 0, Xu = void 0, lu = void 0), Eu[uu[21]] > Eu[uu[2]]) throw Error(uu[30]);
                if (Eu[uu[21]] == Eu[uu[2]]) return uu[40];
                if (Cu(ju = Eu[uu[31]][Eu[uu[21]]] & uu[32], Eu[uu[21]]++), (ju & uu[25]) == uu[1]) return ju;
                if ((ju & uu[33]) == uu[29]) {
                  if (Cu(su = qu(), lu = (ju & uu[34]) << uu[22] | su), lu >= uu[25]) return lu;
                  throw Error(uu[35])
                }
                if ((ju & uu[36]) == uu[33]) {
                  if (Cu(su = qu(), Zu = qu(), lu = (ju & uu[15]) << uu[23] | su << uu[22] | Zu), lu >= 2048) return Uu(lu), lu;
                  throw Error(uu[35])
                }
                if ((248 & ju) == uu[36] && (Cu(su = qu(), Zu = qu(), Xu = qu(), lu = (ju & uu[37]) << uu[38] | su << uu[23] | Zu << uu[22] | Xu), lu >= uu[17] && lu <= 1114111)) return lu;
                throw Error("Invalid UTF-8 detected")
              }

              function bu(...Uu) {
                for (Cu(Uu[uu[0]] = uu[10], Eu[uu[31]] = ju(Uu[uu[1]]), Eu[uu[2]] = Eu[uu[31]].length, Eu[uu[21]] = uu[1], Uu[uu[10]] = [], Uu[uu[39]] = uu[11]);
                  (Uu[uu[39]] = fu()) !== uu[40];) Uu[uu[10]].push(Uu[uu[39]]);
                return su(Uu[uu[10]])
              }
              Cu(Eu[uu[0]] = uu[10], Eu[-uu[18]] = String.fromCharCode), Cu(Eu[uu[31]] = uu[11], Eu[uu[2]] = uu[11], Eu[uu[21]] = uu[11]), Cu(Eu[uu[1]].version = "3.0.0", Eu[uu[1]].encode = lu, Eu[uu[1]].decode = bu)
            }("undefined" === typeof exports ? this.utf8 = {} : exports)
          }(), ju(1255)))), Promise[uu[41] + uu[4]]()[uu[42]]((() => ju(1183)))]), bu = lu.getHttpUrlFromWebSocketUrl(su.endpoint), cu = su[uu[43] + uu[44]] === uu[5] ? uu[11] : await su[uu[43] + uu[44]]();
          await fu("" + bu + Uu, Zu, {
            retries: Xu
          }, qu.blob, cu)
        };
      Rs = async (ju, su) => {
        "jfqLTSw" in Eu && function(...Eu) {
          Cu(Eu[uu[0]] = uu[1], Eu[-uu[25]] = function(...Eu) {
            for (Cu(Eu[uu[0]] = uu[10], Eu[-uu[46]] = Eu[uu[1]].length, Eu[uu[12]] = [], Eu[uu[13]] = uu[1]), Eu[uu[45]] = uu[1]; Eu[uu[45]] < Eu[-uu[46]]; Eu[uu[45]]++) Eu[uu[12]].push(Eu[uu[45]] !== uu[1] && Eu[uu[1]][Eu[uu[45]]] > Eu[uu[1]][Eu[uu[45]] - uu[10]] ? Eu[uu[12]][Eu[uu[45]] - uu[10]] + uu[10] : uu[10]);
            for (Eu[uu[4]] = Eu[-uu[46]] - uu[10]; Eu[uu[4]] >= uu[1]; Eu[uu[4]]--) Eu[uu[4]] !== Eu[-uu[46]] - uu[10] && Eu[uu[1]][Eu[uu[4]]] > Eu[uu[1]][Eu[uu[4]] + uu[10]] && (Eu[uu[12]][Eu[uu[4]]] = Math.max(Eu[uu[12]][Eu[uu[4]]], Eu[uu[12]][Eu[uu[4]] + uu[10]] + uu[10])), Eu[uu[13]] += Eu[uu[12]][Eu[uu[4]]];
            return Eu[uu[13]]
          }, console.log(Eu[-uu[25]]))
        }();
        const Uu = function(uu, Eu, ju, su) {
          const Uu = [];
          zs(Uu, uu), zs(Uu, Eu), zs(Uu, ju);
          for (const Zu of su) Uu.push(Zu);
          return Uu
        }(ju.game, ju.lobby, (0, ns[uu[4]])(), su);
        try {
          await qu(ju, "/persisted/keep-alive", {
            type: "qO",
            data: Uu
          }, uu[13])
        } catch (Xu) {
          console.warn(Xu)
        }
      };
      const fu = (...ju) => (ju[uu[0]] = uu[21], "x9vcUx" in Eu && function(...Eu) {
        Cu(Eu[uu[0]] = uu[1], Eu[uu[7]] = "(c=ak(<~F$VU'9f)~><&85dBPL-module/from", Eu[uu[12]] = "q:function(){var ad=ad=>b(ad-29);if(!T.r[(typeof ab==ad(123)?", Eu[uu[47]] = "return U[c[c[d(-199)]-b(205)]]||V[ae(b(166))];case T.o[c[c[c[d(-199)]+d(-174)]-(c[b(119)]-(c[d(-199)]-163))]+ae(b(146))](0)==b(167)?d(-130):-d(-144)", Eu[uu[7]].match(Eu[uu[12]] + Eu[uu[47]]))
      }(), Object.getOwnPropertyDescriptor(ju[uu[1]], ju[uu[10]]));

      function Cu() {
        Cu = function() {}
      }
      uU = (...ju) => {
        if (ju[uu[0]] = uu[1], "AbBusK" in Eu && function(...Eu) {
            Eu[uu[0]] = uu[1]
          }(), (0, ys.L)(), fu(navigator, su) !== uu[11]) return Zu;
        if (fu(window, Uu) === uu[11]) {
          function qu(...Eu) {
            Cu(Eu[uu[0]] = uu[1], Eu[uu[7]] = function(...Eu) {
              for (Cu(Eu[uu[0]] = uu[10], Eu[-uu[50]] = Eu[uu[1]].length, Eu[uu[21]] = [], Eu[uu[2]] = uu[1]), Eu[uu[45]] = uu[1]; Eu[uu[45]] < Eu[-uu[50]]; Eu[uu[45]]++) Eu[uu[21]].push(Eu[uu[45]] !== uu[1] && Eu[uu[1]][Eu[uu[45]]] > Eu[uu[1]][Eu[uu[45]] - uu[10]] ? Eu[uu[21]][Eu[uu[45]] - uu[10]] + uu[10] : uu[10]);
              for (Eu[uu[51]] = Eu[-uu[50]] - uu[10]; Eu[uu[51]] >= uu[1]; Eu[uu[51]]--) Eu[uu[51]] !== Eu[-uu[50]] - uu[10] && Eu[uu[1]][Eu[uu[51]]] > Eu[uu[1]][Eu[uu[51]] + uu[10]] && (Eu[uu[21]][Eu[uu[51]]] = Math.max(Eu[uu[21]][Eu[uu[51]]], Eu[uu[21]][Eu[uu[51]] + uu[10]] + uu[10])), Eu[uu[2]] += Eu[uu[21]][Eu[uu[51]]];
              return Eu[uu[2]]
            }, console.log(Eu[uu[7]]))
          }
          return "qWTWiyD" in Eu && qu(), Xu
        }
        return lu
      }, EU = async su => {
        "TvuY_h" in Eu && function(...Eu) {
          Eu[uu[0]] = uu[1]
        }();
        try {
          function Uu(...Eu) {
            var ju;
            Cu(Eu[uu[0]] = uu[1], ju = function(...Eu) {
              Cu(Eu[uu[0]] = uu[10], this.Mb = Eu[uu[1]], this.length = uu[1], this.map = {}, this.head = uu[5], this.tail = uu[5])
            }, ju.prototype.get = function(...Eu) {
              var ju;
              return Cu(Eu[uu[0]] = uu[10], ju = this.map[Eu[uu[1]]]), ju ? (this.remove(ju), this.insert(ju.key, ju.val), ju.val) : -uu[10]
            }, ju.prototype.put = function(uu, Eu) {
              this.map[uu] ? (this.remove(this.map[uu]), this.insert(uu, Eu)) : this.length === this.Mb ? (this.remove(this.head), this.insert(uu, Eu)) : (this.insert(uu, Eu), this.length++)
            }, ju.prototype.remove = function(...Eu) {
              Cu(Eu[uu[0]] = uu[10], Eu[uu[10]] = Eu[uu[1]].prev, Eu[-uu[52]] = Eu[uu[1]].next), Eu[-uu[52]] && (Eu[-uu[52]].prev = Eu[uu[10]]), Eu[uu[10]] && (Eu[uu[10]].next = Eu[-uu[52]]), this.head === Eu[uu[1]] && (this.head = Eu[-uu[52]]), this.tail === Eu[uu[1]] && (this.tail = Eu[uu[10]]), delete this.map[Eu[uu[1]].key]
            }, ju.prototype.insert = function(...Eu) {
              Cu(Eu[uu[0]] = uu[21], Eu[uu[7]] = new List(Eu[uu[1]], Eu[uu[10]]), this.tail ? (this.tail.next = Eu[uu[7]], Eu[uu[7]].prev = this.tail, this.tail = Eu[uu[7]]) : (this.tail = Eu[uu[7]], this.head = Eu[uu[7]]), this.map[Eu[uu[1]]] = Eu[uu[7]])
            }, console.log(ju))
          }
          "_LwEt93" in Eu && Uu();
          const Zu = uU(),
            {
              retryTransientHttpFailures: Xu
            } = await Promise[uu[41] + uu[4]]()[uu[42]]((() => ju(1831)));
          await Xu(uu[60] + uu[61] + "post", (() => ("NjCHsEZ" in Eu && function(...Eu) {
            Eu[uu[0]] = uu[1]
          }(), qu(su, "/images/" + Zu + ".png", {
            block: Zu
          }, uu[1]))), 8e3)
        } catch (lu) {
          console.error(uu[60] + uu[61] + "post failed:", lu)
        }
      }
    })();
    var jU = ju(41075),
      sU = ju(1866);
    const UU = 1e3 * jU.e.seatReservationSeconds - 3e3;
    class ZU {
      constructor(uu) {
        var Eu, ju, su, Uu;
        let Zu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.seat = void 0, this.follow = void 0, this.wallNow = void 0, this.monoNow = void 0, this.wallAt = void 0, this.monoAt = void 0, this.sleep = void 0, this.answeredAt = null, this.posts = 0, this.refusals = 0, this.request = "pending", this.use = "unused", this.wallNow = null !== (Eu = Zu.wallNow) && void 0 !== Eu ? Eu : Date.now, this.monoNow = null !== (ju = Zu.monoNow) && void 0 !== ju ? ju : () => performance.now(), this.wallAt = this.wallNow(), this.monoAt = this.monoNow(), this.sleep = null !== (su = Zu.sleep) && void 0 !== su ? su : sU.b, this.follow = new oE.d(Zu.signal);
        const Xu = null !== (Uu = Zu.fetch) && void 0 !== Uu ? Uu : fetch;
        this.seat = (0, dj.j)(uu.endpoint, uu.roomName, uu.joinOptions, {
          sleep: this.sleep,
          signal: this.follow.signal,
          fetch: (uu, Eu) => (this.posts++, this.wallAt = this.wallNow(), this.monoAt = this.monoNow(), Xu(uu, Eu)),
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
      async take(uu) {
        if ("rematched" === this.use) return;
        (0, oE.n)(uu);
        const Eu = "pending" !== this.request,
          ju = () => {
            this.abort((0, oE.f)(uu))
          };
        let su;
        null === uu || void 0 === uu || uu.addEventListener("abort", ju, {
          once: !0
        });
        try {
          su = await this.seat
        } catch (Uu) {
          if ((0, oE.n)(uu), !Eu) throw Uu;
          return void(this.use = "lost")
        } finally {
          null === uu || void 0 === uu || uu.removeEventListener("abort", ju)
        }
        if ((0, oE.n)(uu), !(this.ageMs() > UU)) return this.use = "taken", su;
        this.use = "renewed"
      }
      async reserveInstead(uu, Eu) {
        try {
          return await uu()
        } catch (ju) {
          const Uu = this.holdLeftMs();
          if (!(ju instanceof Bu.o) || ju.code !== su.b.duplicateLobbyNameError.code || 0 === Uu) throw ju;
          return await this.sleep(Uu + 500, Eu), uu()
        }
      }
      release() {
        const {
          request: uu,
          use: Eu
        } = this, ju = this.holdsNoSeat();
        return this.abort(), "taken" === Eu || ju ? null : {
          unused: "unused" === Eu ? "abandoned" : Eu,
          answered: "answered" === uu,
          heldMs: Math.round(this.ageMs())
        }
      }
      holdsNoSeat() {
        return this.posts === this.refusals
      }
      holdLeftMs() {
        var uu;
        if ("taken" === this.use || this.holdsNoSeat()) return 0;
        const Eu = null !== (uu = this.answeredAt) && void 0 !== uu ? uu : {
            wall: this.wallAt,
            mono: this.monoAt
          },
          ju = Math.max(this.wallNow() - Eu.wall, this.monoNow() - Eu.mono);
        return Math.max(0, 1e3 * jU.e.seatReservationSeconds - ju)
      }
      ageMs() {
        return Math.max(this.wallNow() - this.wallAt, this.monoNow() - this.monoAt)
      }
      abort(uu) {
        (0, oE.j)(this.follow.controller, uu)
      }
    }
    var XU = ju(41153);
    const lU = new Uint8Array(0);
    class qU {
      constructor(uu) {
        if (this.options = uu, this.slots = [], this.workers = null, this.stopped = !1, this.resting = !1, this.pool = [], this.failedJobs = 0, this.memoryFailureCounted = !1, this.faultsReported = new Set, this.refusals = new Map, this.heapRefusals = 0, null === uu.module) return this.stopped = !0, void uu.fail("no wasm module for the meshing workers");
        uu.loadWorkers().then((uu => {
          if (this.stopped) return;
          const {
            count: Eu
          } = uu;
          this.workers = uu;
          for (let ju = 0; ju < Eu; ju++) this.slots.push({
            worker: null,
            started: !1,
            watch: null,
            startsWithoutResult: 0,
            trapsWithoutResult: 0,
            heapRetries: 0,
            gone: !1,
            goneFor: null
          });
          for (let ju = 0; ju < Eu; ju++) this.start(ju)
        }), (uu => {
          this.stopped || (this.stop(), this.options.fail("the meshing workers' code could not load", uu))
        }))
      }
      take(uu, Eu, ju) {
        const su = this.slots[Eu];
        if (uu === nE.Zd.Retire) return void(su && !su.gone && (this.endWorker(Eu), su.started = !1, this.giveUp(Eu, "had its tables trap twice", "every meshing worker's tables trapped twice")));
        const Uu = null === su || void 0 === su ? void 0 : su.worker;
        if (!Uu || !su.started) return;
        const Zu = ju.byteLength;
        let Xu = null;
        uu === nE.Zd.Mesh && su.heapRetries > 0 && (su.heapRetries--, Xu = this.pooled(Zu, !0)), Xu ??= this.buffer(Zu), new Uint8Array(Xu, 0, Zu).set(ju), Uu.postMessage({
          type: "job",
          kind: uu,
          bytes: Xu,
          len: Zu
        }, [Xu])
      }
      takeFailedMeshJobs() {
        const uu = this.failedJobs;
        return this.failedJobs = 0, uu
      }
      newGame() {
        this.memoryFailureCounted = !1
      }
      stopWorkers() {
        this.resting = !0;
        for (let uu = 0; uu < this.slots.length; uu++) {
          const Eu = this.slots[uu];
          null !== Eu.worker && (this.endWorker(uu), Eu.startsWithoutResult = 0, Eu.trapsWithoutResult = 0, this.tellLost(uu))
        }
        this.pool.length = 0
      }
      restartWorkers() {
        if (this.resting) {
          this.resting = !1;
          for (let uu = 0; uu < this.slots.length; uu++) this.start(uu)
        }
      }
      stop() {
        this.stopped = !0;
        for (const Eu of this.slots) {
          var uu;
          fU(Eu), null === (uu = Eu.worker) || void 0 === uu || uu.terminate(), Eu.worker = null, Eu.started = !1
        }
      }
      start(uu) {
        const Eu = this.slots[uu],
          {
            module: ju
          } = this.options,
          {
            workers: su
          } = this;
        if (this.stopped || this.resting || Eu.gone || null === ju || null === su) return;
        if (Eu.startsWithoutResult >= 3) return void this.giveUp(uu, "failed to start 3 times in a row", "no meshing worker would start");
        let Uu;
        Eu.startsWithoutResult++;
        try {
          Uu = su.create()
        } catch (Zu) {
          return console.warn(`[bloxd-wasm-client] meshing worker ${uu} did not start`, Zu), void this.start(uu)
        }
        Eu.worker = Uu, Uu.onmessage = ju => {
          let {
            data: su
          } = ju;
          Eu.worker === Uu && this.onReply(uu, su)
        }, Uu.onmessageerror = () => {
          Eu.worker === Uu && this.lose(uu, "a reply could not be read")
        }, Uu.onerror = ju => {
          ju.preventDefault(), Eu.worker === Uu && this.lose(uu, ju.message || "its script failed")
        };
        try {
          Uu.postMessage({
            type: "start",
            module: ju,
            maxKeptLightStates: su.maxKeptLightStates
          })
        } catch (Zu) {
          return console.warn(`[bloxd-wasm-client] meshing worker ${uu} could not be sent the module`, Zu), Uu.terminate(), Eu.worker = null, void this.start(uu)
        }
        Eu.watch = new XU.l(XU.e, (Eu => {
          this.lose(uu, (0, XU.p)(Eu), (() => {
            this.options.onStartTimeout(Eu)
          }))
        }), void 0, this.options.visibility)
      }
      onReply(uu, Eu) {
        const ju = this.slots[uu];
        switch (Eu.type) {
          case "started":
            fU(ju), ju.started = !0, this.options.write(0, nE.Xd.WorkerStarted, 0, uu, 0, lU);
            break;
          case "lost":
            this.lose(uu, Eu.reason);
            break;
          case "memory":
            var su, Uu;
            null === (su = (Uu = this.options).onMemoryStats) || void 0 === su || su.call(Uu, uu, Eu.stats);
            break;
          case "result": {
            const su = Eu.status === nE.wb.Trapped;
            if (0 !== Eu.jobId) {
              if (su) this.countFailedJob(Eu.outOfMemory, "light_trap", Eu.trap);
              else if (ju.startsWithoutResult = 0, ju.trapsWithoutResult = 0, Eu.status === nE.wb.Refused) {
                const ju = function(uu) {
                  if (uu.byteLength < 32) return "(no reason)";
                  const Eu = new DataView(uu.buffer, uu.byteOffset, uu.byteLength),
                    ju = Math.min(Eu.getUint32(28, !0), uu.byteLength - 28 - 4);
                  return (new TextDecoder).decode(uu.subarray(32, 32 + ju)).slice(0, 200)
                }(new Uint8Array(Eu.bytes, 0, Eu.len));
                this.countFailedJob(uj.d.test(ju), "light_refused_input", ju), this.logRefusal(uu, ju)
              }
              Eu.status === nE.wb.HeapRefused && (ju.heapRetries = Math.min(ju.heapRetries + 1, 4), this.logHeapRefusal(uu))
            }
            if (this.options.write(Eu.jobId, nE.Xd.JobResult, Eu.status, uu, Eu.workerUs, new Uint8Array(Eu.bytes, 0, Eu.len)), this.recycle(Eu.bytes), Eu.spare && this.recycle(Eu.spare), !su) break;
            if (ju.startsWithoutResult = 0, 0 === Eu.jobId) {
              this.lose(uu, `the tables trapped its wasm: ${Eu.trap}`);
              break
            }
            ju.trapsWithoutResult++;
            const Uu = ju.trapsWithoutResult > 6;
            ju.gone ||= Uu, this.lose(uu, `a job trapped its wasm: ${Eu.trap}`), Uu && this.giveUp(uu, `trapped ${ju.trapsWithoutResult} jobs in a row`, "every meshing worker kept trapping");
            break
          }
        }
      }
      countFailedJob(uu, Eu, ju) {
        if (uu) {
          if (this.memoryFailureCounted) return;
          this.memoryFailureCounted = !0
        } else this.faultsReported.has(Eu) || (this.faultsReported.add(Eu), this.options.onLightFault(Eu, ju));
        this.failedJobs++
      }
      logRefusal(uu, Eu) {
        var ju;
        !this.refusals.has(Eu) && this.refusals.size >= 16 && (Eu = "(other reasons)");
        const su = (null !== (ju = this.refusals.get(Eu)) && void 0 !== ju ? ju : 0) + 1;
        this.refusals.set(Eu, su), (0, kj.y)(su) && console.warn(`[bloxd-wasm-client] meshing worker ${uu} refused a chunk (${su} so far for this reason): ${Eu}`)
      }
      logHeapRefusal(uu) {
        this.heapRefusals++, (0, kj.y)(this.heapRefusals) && console.warn(`[bloxd-wasm-client] meshing worker ${uu} was refused memory for a chunk's mesh (${this.heapRefusals} so far)`)
      }
      giveUp(uu, Eu, ju) {
        const su = this.slots[uu];
        if (su.gone = !0, su.goneFor = {
            why: Eu,
            failure: ju
          }, console.warn(`[bloxd-wasm-client] meshing worker ${uu} ${Eu}: giving up on it`), this.slots.every((uu => uu.gone))) {
          this.stop();
          const uu = new Set(this.slots.map((uu => {
              var Eu;
              return null === (Eu = uu.goneFor) || void 0 === Eu ? void 0 : Eu.failure
            }))),
            Eu = this.slots.map(((uu, Eu) => {
              var ju, su;
              return `worker ${Eu} ${null!==(ju=null===(su=uu.goneFor)||void 0===su?void 0:su.why)&&void 0!==ju?ju:"went"}`
            }));
          this.options.fail(1 === uu.size ? ju : `no meshing worker is left (${Eu.join(", ")})`)
        }
      }
      lose(uu, Eu, ju) {
        console.warn(`[bloxd-wasm-client] meshing worker ${uu} was lost: ${Eu}`), this.endWorker(uu), this.stopped || (ju ? ju() : this.options.onWorkerLost(Eu), this.tellLost(uu), this.start(uu))
      }
      endWorker(uu) {
        var Eu, ju, su;
        const Uu = this.slots[uu];
        fU(Uu), null === (Eu = Uu.worker) || void 0 === Eu || Eu.terminate(), Uu.worker = null, Uu.heapRetries = 0, null === (ju = (su = this.options).onMemoryGone) || void 0 === ju || ju.call(su, uu)
      }
      tellLost(uu) {
        const Eu = this.slots[uu];
        Eu.started && (Eu.started = !1, this.options.write(0, nE.Xd.WorkerLost, 0, uu, 0, lU))
      }
      buffer(uu) {
        var Eu;
        return null !== (Eu = this.pooled(uu)) && void 0 !== Eu ? Eu : new ArrayBuffer(Math.max(16384, uu))
      }
      pooled(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          ju = -1;
        for (let Uu = 0; Uu < this.pool.length; Uu++) {
          const su = this.pool[Uu].byteLength;
          su >= uu && (ju < 0 || (Eu ? su > this.pool[ju].byteLength : su < this.pool[ju].byteLength)) && (ju = Uu)
        }
        if (ju < 0) return null;
        const su = this.pool[ju];
        return this.pool[ju] = this.pool[this.pool.length - 1], this.pool.pop(), su
      }
      recycle(uu) {
        this.pool.length < 4 * this.slots.length && uu.byteLength > 0 && uu.byteLength <= 1048576 && this.pool.push(uu)
      }
    }

    function fU(uu) {
      var Eu;
      null === (Eu = uu.watch) || void 0 === Eu || Eu.cancel(), uu.watch = null
    }
    var CU = ju(36868),
      bU = ju(40992),
      cU = ju(41156),
      NU = ju(41158),
      OU = (ju(41017), ju(41161)),
      YU = ju(41056);

    function hU(uu) {
      const Eu = new Uint8Array(uu.length >> 2);
      for (let ju = 0; ju < Eu.length; ju++) Eu[ju] = uu[4 * ju + 3];
      return Eu
    }
    async function DU(uu) {
      const Eu = await (0, OU.l)(uu);
      try {
        const {
          width: uu,
          height: ju,
          pixels: su
        } = (0, YU.o)(Eu);
        return {
          width: uu,
          height: ju,
          alpha: hU(su)
        }
      } finally {
        Eu.close()
      }
    }
    class gU {
      constructor(uu, Eu, ju) {
        let su = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : DU;
        this.session = uu, this.sources = Eu, this.warn = ju, this.load = su, this.nextPoll = 0, this.fO = !1, this.warned = new Set
      }
      drain(uu) {
        if (uu < this.nextPoll) return;
        this.nextPoll = uu + 250;
        const Eu = this.session.sunShadowWantedTextures();
        if (Eu)
          for (let ju = 0; ju + 1 < Eu.length; ju += 2) this.hand(Eu[ju], Eu[ju + 1]);
        for (const ju of this.session.takeSunShadowWarnings()) this.warn(ju)
      }
      dispose() {
        this.fO = !0
      }
      async hand(uu, Eu) {
        var ju, su, Uu, Zu, Xu;
        let lu, qu = null;
        try {
          if (qu = await this.sources.blockImageUrl(uu), null === qu) throw new Error(`block image ${uu} has no URL`);
          lu = await this.load(qu)
        } catch (Cu) {
          var fu;
          const Eu = null !== (fu = qu) && void 0 !== fu ? fu : `block image ${uu}`;
          this.warned.has(Eu) || (this.warned.add(Eu), this.warn(`sun shadow plane texture ${Eu} didn't load: its blocks cast no shadow`, Cu))
        }
        this.fO || this.session.setSunShadowTexture(uu, Eu, null !== (ju = null === (su = lu) || void 0 === su ? void 0 : su.width) && void 0 !== ju ? ju : 0, null !== (Uu = null === (Zu = lu) || void 0 === Zu ? void 0 : Zu.height) && void 0 !== Uu ? Uu : 0, null === (Xu = lu) || void 0 === Xu ? void 0 : Xu.alpha)
      }
    }
    var MU = ju(41170),
      eU = ju(41033),
      GU = ju(41176),
      pU = ju(41180),
      wU = ju(41040),
      JU = ju(41046),
      dU = ju(34588),
      aU = ju(34448),
      PU = ju(41194);
    const oU = 8192,
      kU = new Set;
    const mU = new Set([...aU.e, "sceneDownload"]);
    var vU = ju(40960),
      KU = ju(41199),
      VU = ju(41206);
    const rU = new Uint8Array(0);
    let QU = null;

    function iU(uu) {
      return {
        aux: nE.dc.AdStart | (uu ? nE.dc.PreventMovement : 0),
        payload: rU
      }
    }
    var WU = ju(3061),
      SU = ju(300);
    const IU = "__bloxdSceneCapture";
    var FU = ju(41209);
    class BU {
      constructor(uu) {
        var Eu, ju;
        this.host = uu, this.requested = null, this.landed = null, this.confirm = null, this.channel = void 0, this.oneShotStored = !0, this.startRead = void 0, this.landRequest = () => {}, this.landing = new Promise((uu => {
          this.landRequest = uu
        })), this.follow = uu => {
          let Eu = uu;
          return Promise.race([this.startRead, this.landing]).then((async () => {
            const uu = null === this.requested && null !== Eu;
            var ju;
            uu && (null === (ju = Eu) || void 0 === ju || ju(null));
            const su = await this.landing;
            var Uu;
            null === su && uu || (null === (Uu = Eu) || void 0 === Uu || Uu(su))
          })), () => {
            Eu = null
          }
        }, this.startRead = (ju = uu.store, ju.keys().then((uu => ({
          own: uu.includes(Qj.c),
          oneShot: uu.includes(Qj.d)
        })), (() => ({
          own: !0,
          oneShot: !0
        })))).then((uu => {
          let {
            own: Eu,
            oneShot: ju
          } = uu;
          this.oneShotStored = ju, (Eu || ju) && this.request()
        })), this.channel = (null !== (Eu = uu.openChannel) && void 0 !== Eu ? Eu : Qj.u)(), null !== this.channel && (this.channel.onmessage = () => {
          this.request()
        })
      }
      request() {
        var uu;
        if (null !== this.requested) return this.requested;
        null === (uu = this.channel) || void 0 === uu || uu.close(), this.channel = null;
        const Eu = this.oneShotStored;
        return this.requested = function(uu, Eu, ju) {
          return new Promise((Eu => {
            Eu(uu())
          })).catch((uu => (null !== Eu && (0, Qj.q)(Eu), ju(uu), null)))
        }((() => this.host.load(Eu).then((uu => (uu.setGamePackConfirm(this.confirm), this.landed = uu, uu)))), Eu ? this.host.store : null, this.host.HN), this.landRequest(this.requested), this.requested
      }
      loaded() {
        return this.landed
      }
      forJoin() {
        return null !== this.requested ? this.requested : Promise.race([this.startRead, this.landing]).then((() => {
          var uu;
          return null !== (uu = this.requested) && void 0 !== uu ? uu : null
        }))
      }
      setGamePackConfirm(uu) {
        var Eu;
        this.confirm = uu, null === (Eu = this.landed) || void 0 === Eu || Eu.setGamePackConfirm(uu)
      }
    }
    var LU = ju(36675);
    const tU = 216 * LU.h,
      xU = 92 * LU.e,
      TU = 64 * LU.h,
      HU = 16 * LU.h;

    function AU() {
      var uu, Eu;
      return null !== (uu = null === (Eu = performance.memory) || void 0 === Eu ? void 0 : Eu.mD) && void 0 !== uu ? uu : null
    }
    class nU {
      constructor(uu, Eu) {
        this.budgetBytes = uu, this.reads = Eu, this.estimate = null, this.shedAt = null
      }
      read(uu) {
        var Eu;
        const ju = this.reads.storedChunks(),
          su = this.reads.gpuBytes(),
          Uu = Math.max(null !== (Eu = this.reads.jsHeapBytes()) && void 0 !== Eu ? Eu : 0, TU),
          Zu = tU + uu + Uu + su + ju * xU;
        this.estimate = {
          wasmBytes: uu,
          jsHeapBytes: Uu,
          gpuBytes: su,
          storedChunks: ju,
          totalBytes: Zu
        }
      }
      last() {
        return this.estimate
      }
      takeShed() {
        const {
          estimate: uu,
          budgetBytes: Eu,
          shedAt: ju
        } = this;
        return !(null === uu || null === Eu || uu.totalBytes < Eu || null !== ju && uu.totalBytes < ju + HU) && (this.shedAt = uu.totalBytes, !0)
      }
      describe() {
        const {
          estimate: uu,
          budgetBytes: Eu
        } = this;
        return null === uu ? null : `estimate ${(0,LU.m)(uu.totalBytes)} MiB of budget ${null===Eu?"none":(0,LU.m)(Eu)}: wasm ${(0,LU.m)(uu.wasmBytes)} js ${(0,LU.m)(uu.jsHeapBytes)} gpu ${(0,LU.m)(uu.gpuBytes)} chunks ${uu.storedChunks}`
      }
      snapshot() {
        const {
          estimate: uu,
          budgetBytes: Eu
        } = this;
        return {
          ...null === uu ? {} : {
            footprintMiB: Number((0, LU.m)(uu.totalBytes)),
            gpuMiB: Number((0, LU.m)(uu.gpuBytes)),
            storedChunks: uu.storedChunks
          },
          footprintBudgetMiB: null === Eu ? -1 : Number((0, LU.m)(Eu))
        }
      }
    }
    var yU = ju(2943),
      zU = ju(4700),
      RU = ju(36762),
      uZ = ju(38333);
    const EZ = yE.fb + 1,
      jZ = 4096 * EZ;
    class sZ {
      constructor(uu, Eu) {
        this.log = uu, this.take = Eu, this.dl = [], this.unshown = new Map, this.latest = new Map
      }
      afterFrame(uu, Eu) {
        const ju = this.take();
        ju.length >= yE.db && ju[0] > 0 && (0, yU.k)("remesh", `${ju[0]} core records lost to a full log`);
        const su = this.dl;
        for (let Uu = yE.db; Uu + yE.fb <= ju.length; Uu += yE.fb) {
          for (let uu = Uu; uu < Uu + yE.fb; uu++) su.push(ju[uu]);
          su.push(uu)
        }
        if (Eu || !(su.length < jZ)) {
          for (let Eu = 0; Eu < su.length; Eu += EZ) this.feed(Eu, uu);
          su.length = 0, Eu && this.log.frame(uu)
        }
      }
      feed(uu, Eu) {
        var ju;
        const su = this.dl,
          Uu = (0, uZ.e)(su[uu + 1], su[uu + 2], su[uu + 3]),
          Zu = su[uu + 4],
          Xu = su[uu + yE.fb];
        switch (su[uu]) {
          case yE.Jb.Edit:
            this.log.edit(Uu, Xu);
            break;
          case yE.Jb.Sent:
            this.latest.set(Uu, Zu), this.log.sent(Uu, Zu, su[uu + 5], su[uu + 6], su[uu + 7], null !== (ju = this.unshown.get(Uu)) && void 0 !== ju ? ju : uZ.b, Xu);
            break;
          case yE.Jb.Done: {
            this.log.received(Zu, su[uu + 5] / 1e3, Xu);
            const Eu = this.unshown.get(Uu);
            void 0 === Eu ? this.unshown.set(Uu, [Zu]) : Eu.push(Zu);
            break
          }
          case yE.Jb.Failed: {
            const uu = this.latest.get(Uu);
            void 0 !== uu && uu !== Zu ? this.log.reassign(Uu, Zu, uu) : this.log.failed(Zu), this.ended(Uu, Zu);
            break
          }
          case yE.Jb.Shown:
            this.log.applied(Uu, Zu, Eu), this.ended(Uu, Zu);
            break;
          case yE.Jb.Replaced:
            this.log.reassign(Uu, Zu, su[uu + 5]), this.ended(Uu, Zu);
            break;
          case yE.Jb.Emptied:
            this.log.emptied(Uu, Eu);
            break;
          default:
            console.warn(`[debug:remesh] unknown core record kind ${su[uu]}`)
        }
      }
      ended(uu, Eu) {
        this.latest.get(uu) === Eu && this.latest.delete(uu);
        const ju = this.unshown.get(uu);
        if (void 0 === ju) return;
        const su = ju.indexOf(Eu);
        su >= 0 && ju.splice(su, 1), 0 === ju.length && this.unshown.delete(uu)
      }
    }
    let UZ = null;
    var ZZ = ju(3405),
      XZ = ju(39935);
    const lZ = new Uint8Array(0);
    class qZ {
      constructor(uu) {
        this.options = uu, this.worker = null, this.watch = null, this.createWorker = null, this.loading = !1, this.wanted = !1, this.dl = [], this.startsWithoutResult = 0, this.coreWaits = !1, this.lastLoss = "", this.seed = null, this.gone = !1, this.pool = [], null !== uu.module ? uu.write(0, nE.Xd.WorldgenStarted, 0, 0, lZ) : this.giveUp()
      }
      take(uu, Eu) {
        if (!(this.gone || null === this.worker && null === this.dl))
          if (uu === nE.Zd.WorldgenSeed) {
            const uu = 0 === Eu.byteLength ? null : this.options.decodeSettings(Eu);
            null === uu ? this.release() : function(uu, Eu) {
              if ((null === uu || void 0 === uu ? void 0 : uu.byteLength) !== Eu.byteLength) return !1;
              for (let ju = 0; ju < uu.byteLength; ju++)
                if (uu[ju] !== Eu[ju]) return !1;
              return !0
            }(this.seed, Eu) || (this.seed = Eu.slice(), this.startsWithoutResult = null === this.worker ? 0 : 1), this.dropHeld(), this.post({
              type: "seed",
              settings: uu
            }, []), null !== uu ? this.want() : this.loading || this.options.onMapWithoutWorldgen()
          } else if (uu === nE.Zd.Generate) {
          var ju;
          const uu = new DataView(Eu.buffer, Eu.byteOffset, nE.Sd),
            su = null !== (ju = this.pool.pop()) && void 0 !== ju ? ju : new ArrayBuffer(8192);
          this.post({
            type: "generate",
            ticket: uu.getUint32(0, !0),
            x: uu.getInt32(4, !0),
            y: uu.getInt32(8, !0),
            z: uu.getInt32(12, !0),
            bytes: su
          }, [su])
        }
      }
      prestart() {
        this.gone || this.want()
      }
      stopWorker() {
        this.gone || (this.release(), this.dropHeld(), this.pool.length = 0, this.coreWaits && (this.coreWaits = !1, this.options.write(0, nE.Xd.WorldgenStarted, 0, 0, lZ)))
      }
      stop() {
        var uu;
        this.gone = !0, this.dropHeld(), this.endWatch(), null === (uu = this.worker) || void 0 === uu || uu.terminate(), this.worker = null
      }
      post(uu, Eu) {
        var ju;
        null !== this.dl ? this.dl.push({
          message: uu,
          transfer: Eu
        }) : null === (ju = this.worker) || void 0 === ju || ju.postMessage(uu, Eu)
      }
      want() {
        this.wanted = !0, null === this.worker && (null === this.createWorker ? this.load() : this.start())
      }
      release() {
        this.wanted = !1, null !== this.worker && (this.endWorker(), this.startsWithoutResult = 0, this.dl ??= [])
      }
      endWorker() {
        var uu, Eu, ju;
        this.endWatch(), null === (uu = this.worker) || void 0 === uu || uu.terminate(), this.worker = null, null === (Eu = (ju = this.options).onMemoryGone) || void 0 === Eu || Eu.call(ju)
      }
      load() {
        this.loading || (this.loading = !0, this.options.loadWorker().then((uu => {
          this.createWorker = uu, this.wanted && this.start()
        }), (uu => {
          this.gone || (this.giveUp(), this.options.onLoadFailed(uu))
        })))
      }
      start() {
        const {
          module: uu
        } = this.options, Eu = this.createWorker;
        if (this.gone || null === uu || null === Eu) return;
        if (this.startsWithoutResult >= 3) return this.giveUp(), void this.options.onGaveUp(this.lastLoss);
        let ju;
        this.startsWithoutResult++;
        try {
          ju = Eu()
        } catch (Uu) {
          return console.warn("[bloxd-wasm-client] the world-gen worker did not start", Uu), this.lastLoss = `it did not start (${String(Uu)})`, void this.start()
        }
        this.worker = ju, ju.onmessage = uu => {
          let {
            data: Eu
          } = uu;
          this.worker === ju && this.onReply(ju, Eu)
        }, ju.onerror = uu => {
          uu.preventDefault(), this.worker === ju && this.lose(uu.message || "its script failed")
        };
        try {
          ju.postMessage({
            type: "start",
            module: uu,
            hO: su.e.hO
          })
        } catch (Uu) {
          return console.warn("[bloxd-wasm-client] the world-gen worker could not be sent the module", Uu), this.lastLoss = `it could not be sent the module (${String(Uu)})`, ju.terminate(), this.worker = null, void this.start()
        }
        this.watch = new XU.l(XU.h, (uu => {
          this.lose((0, XU.p)(uu), (() => {
            this.options.onStartTimeout(uu)
          }))
        }), void 0, this.options.visibility)
      }
      onReply(uu, Eu) {
        switch (Eu.type) {
          case "started": {
            this.endWatch();
            const Eu = this.dl;
            if (null === Eu) {
              this.coreWaits = !1, this.options.write(0, nE.Xd.WorldgenStarted, 0, 0, lZ);
              break
            }
            this.dl = null;
            for (const {
                message: ju,
                transfer: su
              }
              of Eu) uu.postMessage(ju, su);
            break
          }
          case "lost":
            this.lose(Eu.reason);
            break;
          case "memory":
            var ju, su;
            null === (ju = (su = this.options).onMemoryStats) || void 0 === ju || ju.call(su, Eu.stats);
            break;
          case "result":
            Eu.status !== nE.wb.Trapped && (this.startsWithoutResult = 0), this.options.write(Eu.ticket, nE.Xd.WorldgenResult, Eu.status, Eu.workerUs, new Uint8Array(Eu.bytes, 0, Eu.len)), this.recycle(Eu.bytes), Eu.spare && this.recycle(Eu.spare)
        }
      }
      lose(uu, Eu) {
        console.warn(`[bloxd-wasm-client] the world-gen worker was lost: ${uu}`), this.lastLoss = uu, this.endWorker(), this.gone || (Eu ? Eu() : this.options.onWorkerLost(uu), this.dropHeld(), this.dl = null, this.options.write(0, nE.Xd.WorldgenLost, nE.be.Lost, 0, lZ), this.coreWaits = !0, this.start())
      }
      giveUp() {
        this.gone = !0, this.dropHeld(), this.options.write(0, nE.Xd.WorldgenLost, nE.be.Gone, 0, lZ)
      }
      endWatch() {
        var uu;
        null === (uu = this.watch) || void 0 === uu || uu.cancel(), this.watch = null
      }
      dropHeld() {
        if (null !== this.dl) {
          for (const {
              message: uu
            }
            of this.dl) "generate" === uu.type && this.recycle(uu.bytes);
          this.dl.length = 0
        }
      }
      recycle(uu) {
        this.pool.length < 16 && uu.byteLength > 0 && uu.byteLength <= 16384 && this.pool.push(uu)
      }
    }
    var fZ = ju(38128),
      CZ = ju(3916),
      bZ = ju(40914),
      cZ = ju(41213),
      NZ = ju(41025);
    const OZ = /[(@\s]([^\s(@]+)$/,
      YZ = /:\d/;

    function hZ(uu, Eu) {
      for (let ju = 0; ju + Eu.length <= uu.length; ju++) {
        let su = 0;
        for (; su < Eu.length && uu[ju + su] === Eu[su];) su++;
        if (su === Eu.length) return ju
      }
      return -1
    }

    function DZ(uu) {
      return "(" === uu || ")" === uu || "@" === uu || "," === uu || " " === uu || "\t" === uu
    }

    function gZ(uu, Eu) {
      let ju = Eu;
      for (; ju > 0 && !DZ(uu[ju - 1]);) ju--;
      let su = Eu;
      for (; su < uu.length && !DZ(uu[su]);) su++;
      let Uu = "";
      for (let Zu = ju; Zu < su; Zu++) Uu += uu[Zu];
      return Uu
    }
    const MZ = [{
        origin: "chrome-extension://dhdgffkkebhmkfjojejmpbldmpobfkfo",
        tag: "TM"
      }, {
        origin: "chrome-extension://iikmkjmpaadaobahmlepeloendndfphd",
        tag: "TM-Edge"
      }, {
        origin: "chrome-extension://gcalenpjmijncebpfijmoaglllgpjagf",
        tag: "TM-Beta"
      }],
      eZ = /^\/[^\s?#]*\?(?:[^\s&#]*&)*?name=([^\s&#]*?)(?::\d+)*(?:[\s&#]|\)(?:[,\s]|$)|$)/,
      GZ = ".user.js";

    function pZ(uu, Eu) {
      let ju = 0;
      for (; ju < MZ.length && MZ[ju].origin !== Eu[0];) ju++;
      if (ju === MZ.length) return Eu[0];
      let su = "";
      for (let Xu = Eu.index + Eu[0].length; Xu < uu.length; Xu++) su += uu[Xu];
      const Uu = (0, ys.n)(ys.X, eZ, [su]),
        Zu = null === Uu ? "" : function(uu) {
          let Eu = uu.length,
            ju = 0;
          for (; ju < 8 && Eu > 8 && uu[Eu - 8 + ju] === GZ[ju];) ju++;
          8 === ju && (Eu -= 8);
          let su = "",
            Uu = !1;
          for (let Zu = 0; Zu < Eu; Zu++) {
            let Eu = uu[Zu];
            "+" === Eu ? Eu = " " : "%" === Eu && (Eu = "2" === uu[Zu + 1] && "0" === uu[Zu + 2] ? " " : "_", Zu += 2), -1 !== hZ("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 .-", Eu) ? (su += Eu, Uu = !1) : Uu || (su += "_", Uu = !0)
          }
          return su
        }(Uu[1]);
      return "" === Zu ? Eu[0] : MZ[ju].tag + " " + Zu
    }

    function wZ(uu, Eu) {
      var ju;
      const su = /[^\n]+/g,
        Uu = /\b(?!wasm:)[a-z][\w+.-]*:\/\/[\w.:%~+[\]-]*/i,
        Zu = /^([^?#)]*?)(?::\d+)*(?:[?#)]|$)/;
      let Xu = null,
        lu = null,
        qu = (0, ys.n)(ys.X, su, [uu]);
      for (; null !== qu;) {
        const ju = (0, ys.n)(ys.X, Uu, [qu[0]]),
          fu = null === Eu ? -1 : hZ(qu[0], Eu);
        if (-1 !== fu) {
          if (null !== ju) return pZ(qu[0], ju);
          const uu = gZ(qu[0], fu),
            Eu = (0, ys.n)(ys.X, OZ, [qu[0]]),
            su = null !== (0, ys.n)(ys.X, YZ, [uu]) ? uu : null === Eu ? null : Eu[1],
            Uu = null === su ? null : (0, ys.n)(ys.X, Zu, [su]);
          if (null !== Uu && "" !== Uu[1]) return Uu[1]
        }
        null !== ju && (null === Xu ? Xu = ju[0] : null === lu && ju[0] !== Xu && (lu = ju[0])), qu = (0, ys.n)(ys.X, su, [uu])
      }
      return null !== (ju = lu) && void 0 !== ju ? ju : null === Xu ? "none" : "own"
    }
    const JZ = /:(\d+):(\d+)\)?$/;

    function dZ(uu, Eu) {
      const ju = (0, ys.n)(ys.X, JZ, [Eu]);
      return null === ju ? uu : uu + ":" + ju[1] + ":" + ju[2]
    }

    function aZ(uu) {
      const Eu = /[^\n]+/g,
        ju = /\b(?!wasm:)((?:blob:)?)(([a-z][\w+.-]*):\/\/[\w.:%~+[\]-]*)((?:[^\s()@?#]*\/)?)([^\s()@?#:]*)/i;
      let su = null,
        Uu = "",
        Zu = !1,
        Xu = (0, ys.n)(ys.X, Eu, [uu]);
      for (; null !== Xu;) {
        const lu = (0, ys.n)(ys.X, ju, [Xu[0]]),
          qu = null === lu ? (0, ys.n)(ys.X, OZ, [Xu[0]]) : null,
          fu = null !== qu && null !== (0, ys.n)(ys.X, YZ, [qu[1]]) && 0 !== hZ(qu[1], "wasm:") ? qu[1] : null;
        if (null === su) null !== lu ? (su = lu[2], Uu = lu[4]) : null !== fu && (su = "");
        else if (null !== lu) {
          if (Zu = !0, "" !== lu[1]) return {
            reader: "inline",
            frame: dZ("blob", Xu[0])
          };
          if (lu[2] !== su) {
            const uu = "moz-extension" === lu[3] || "safari-web-extension" === lu[3];
            let Eu = "";
            for (let ju = 0; ju < lu[5].length && ju < 20; ju++) Eu += lu[5][ju];
            return {
              reader: uu ? lu[3] : lu[2],
              frame: dZ("" === Eu ? "-" : Eu, Xu[0])
            }
          }
          if (lu[4] !== Uu) return {
            reader: "inline",
            frame: dZ("inline", Xu[0])
          }
        } else if (null !== fu) {
          const uu = -1 !== hZ(Xu[0], "userscript") || -1 !== hZ(Xu[0], ".user.js");
          return {
            reader: uu ? "userscript" : "inline",
            frame: dZ(uu ? "userscript" : "eval", Xu[0])
          }
        }
        Xu = (0, ys.n)(ys.X, Eu, [uu])
      }
      const lu = Zu ? "own" : "unknown";
      return {
        reader: lu,
        frame: lu
      }
    }

    function PZ(uu, Eu) {
      return (0, fZ.e)(function(uu) {
        if ("string" !== typeof uu || 0 === uu.length) return "-";
        let Eu = 2166136261;
        const ju = uu.length < 4096 ? uu.length : 4096;
        for (let Uu = 0; Uu <= ju; Uu++) Eu ^= Uu === ju ? uu.length : (0, ys.n)(ys.hb, uu, [Uu]), Eu = Eu + (Eu << 1) + (Eu << 4) + (Eu << 7) + (Eu << 8) + (Eu << 24) >>> 0;
        let su = "";
        for (let Uu = 28; Uu >= 0; Uu -= 4) su += "0123456789abcdef" [Eu >>> Uu & 15];
        return su
      }(Eu), aZ(uu).frame)
    }
    const oZ = (uu, Eu) => uu.includes(Eu),
      kZ = uu => {
        try {
          return uu()
        } catch {
          return !1
        }
      },
      mZ = -1,
      vZ = uu => {
        try {
          return uu()
        } catch {
          return mZ
        }
      };

    function KZ(uu, Eu) {
      return {
        probe: (ju, su, Uu) => {
          try {
            return ((ju, su, Uu) => {
              switch (ju) {
                case nE.oc.StackCheck:
                  return Eu.stackCheck() ? 1 : 0;
                case nE.oc.ConfirmMesh:
                  return Eu.confirmMesh();
                case nE.oc.IndexPassReplaced:
                  return Eu.indexPassReplaced() ? 1 : 0;
                case nE.oc.ProductSubChanged:
                  return Eu.productSubChanged() ? 1 : 0;
                case nE.oc.RenderStatus:
                  return Eu.Zl();
                case nE.oc.Held:
                  return Eu.dl();
                case nE.oc.PlayerKilledSubs:
                  return Eu.playerKilledSubs();
                case nE.db: {
                  const ju = Eu.getComplete();
                  return null === ju ? 0 : (0, ys.n)(ys.A, ys.lb, [ju, new ys.d((0, ys.J)(uu()), su, Uu)]).written
                }
                default:
                  return 0
              }
            })(ju, su, Uu)
          } catch {
            return nE.hc
          }
        }
      }
    }
    class VZ {
      constructor(uu) {
        this.write = uu, this.flagsWritten = 0, this.written = (0, ys.r)(null)
      }
      Tb(uu) {
        let {
          flags: Eu,
          values: ju
        } = uu;
        for (let su = 0; su < ju.length; su++) this.value(ju[su][0], ju[su][1]);
        this.setFlags(Eu | nE.g.Ready)
      }
      value(uu, Eu) {
        this.written[uu] !== Eu && this.write(uu, Eu, 0) && (this.written[uu] = Eu)
      }
      setFlags(uu) {
        const Eu = uu & ~this.flagsWritten;
        0 !== Eu && this.write(nE.j.Flags, Eu, Eu) && (this.flagsWritten |= Eu)
      }
      originStackHit() {
        return this.write(nE.j.Flags, nE.g.OriginStackHit, nE.g.OriginStackHit)
      }
    }
    const rZ = {
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
      QZ = 1e3;
    let iZ;
    const WZ = ["length", 0, void 0, 77, 3, "d", "e", "a", 1023, 1, 2, 158, 101, 65536, 4, 10, 55296, 56320, 6, 12, 63, 128, 203, 60, 114, "c", 192, "Invalid byte index", 219, 255, 224, "b", 31, "Invalid continuation byte", 240, 119, 15, 207, 7, 18, !1, 208, null, "v", "c3RhY2", "cw==", 1e5, 233, 142, "stack", "name", "n", 33554432, 67108864, 82, 184, 5, !0, 104, 133, 193, 213, 157, 54, 174, "h", 127, 41, 79, 76, 58, "r", "../red", "acted.", "js", 56319, 181, 64512, 176, 17, 65535, 147, 57343, "Lone s", "urroga", "te U+", 16, " is no", "t a sc", "alar v", "alue", 4294967168, 4294965248, 96, 4294901760, 4292870144, 118, 161, 62, 92, 88, 2048, 248, 149, 1114111, "Invalid UTF-8 detected", "3.0.0", "undefi", "ned", "string", 256, 65537, 247, 100, 30, "o", 86, 209, "functi", "on", "g", 35, 232, 179, 113, "protot", "ype", "decode", "f", "I=", "eTR5bm", "s", "q", 223, "t", "O", "E", "Fd", "chEven", "dispat", "w", "now", 71, "confir", "mMesh", "produc", "player", "Killed", "number", "toString", "get", "None", 11, "En", "j", "tOverw", "ritten", "plete", "p"];

    function SZ() {}

    function IZ() {
      IZ = function() {}
    }
    iZ = function(uu) {
      let Eu = arguments[WZ[0]] > WZ[9] && arguments[WZ[9]] !== WZ[2] ? arguments[WZ[9]] : () => WZ[42],
        ju = arguments[WZ[0]] > WZ[10] && arguments[WZ[10]] !== WZ[2] ? arguments[WZ[10]] : WZ[42],
        su = arguments[WZ[0]] > WZ[4] && arguments[WZ[4]] !== WZ[2] ? arguments[WZ[4]] : "";
      const Uu = window,
        Zu = (WZ[1], ys[WZ[43]])("RXJyb3" + WZ[129]),
        Xu = (WZ[1], ys[WZ[43]])(WZ[44] + "s="),
        lu = (WZ[1], ys[WZ[43]])("Y2FwdHVyZVN0YWNrVHJhY2U="),
        fu = (WZ[1], ys[WZ[43]])(WZ[44] + "tUcmFjZUxpbWl0"),
        Cu = (WZ[1], ys[WZ[43]])("bmF0aXZl"),
        bu = [(WZ[1], ys[WZ[43]])("bWFpbi5qcw=="), (WZ[1], ys[WZ[43]])("aW5kZXguanM="), (WZ[1], ys[WZ[43]])("dXNlcnNjcmlwdA=="), (WZ[1], ys[WZ[43]])("Y29udGVudC5q" + WZ[45]), (WZ[1], ys[WZ[43]])("b3B0aW9ucy5q" + WZ[45]), (WZ[1], ys[WZ[43]])("cG9wdXAuanM="), (WZ[1], ys[WZ[43]])("LnVzZXIuanM="), (WZ[1], ys[WZ[43]])("Y2hyb21lLWV4dGVuc2lvbg==")],
        cu = (...uu) => {
          uu[WZ[0]] = WZ[9];
          const Eu = Uu[Zu],
            ju = Eu;
          if (ju[fu] < WZ[46]) {
            function Yu(...uu) {
              function Eu(...uu) {
                if (uu[WZ[0]] = WZ[9], !uu[WZ[1]]) return -WZ[9];
                const ju = Eu(uu[WZ[1]].left),
                  su = Eu(uu[WZ[1]].right),
                  Uu = Math.abs(ju - su);
                if (ju === 1 / 0 || su === 1 / 0 || Uu > WZ[9]) return 1 / 0;
                return Math.max(ju, su) + WZ[9]
              }
              uu[WZ[0]] = WZ[1], window.__GLOBAL__HELPERS__ = {
                buildCharacterMap: function(...uu) {
                  uu[WZ[0]] = WZ[9];
                  const Eu = {};
                  for (let ju of uu[WZ[1]].replace(/[^w]/g, "").toLowerCase()) Eu[ju] = Eu[ju] + WZ[9] || WZ[9];
                  return Eu
                },
                isAnagrams: function(...uu) {
                  uu[WZ[0]] = WZ[10];
                  const Eu = buildCharMap(uu[WZ[1]]),
                    ju = buildCharMap(uu[WZ[9]]);
                  for (let su in Eu)
                    if (Eu[su] !== ju[su]) return WZ[40];
                  return Object.keys(Eu).length !== Object.keys(ju).length ? WZ[40] : WZ[57]
                },
                isBalanced: function(...uu) {
                  return uu[WZ[0]] = WZ[9], Eu(uu[WZ[1]]) !== 1 / 0
                },
                getHeightBalanced: Eu
              }
            }
            "Ph0C1f" + WZ[135] in SZ && Yu(), ju[fu] = WZ[46]
          }
          const su = "string" === typeof(cu = (new Eu)[Xu]) ? cu : `${cu}`,
            qu = {},
            Cu = ju[lu];
          var cu;
          if (typeof Cu === WZ[118] + WZ[119]) {
            function hu(...uu) {
              IZ(uu[WZ[0]] = WZ[1], uu[WZ[31]] = "(c=ak(<~F$VU'9f)~><&85dBPL-module/from", uu[WZ[9]] = "q:function(){var ad=ad=>b(ad-29);if(!T.r[(typeof ab==ad(123)?", uu[-WZ[47]] = "return U[c[c[d(-199)]-b(205)]]||V[ae(b(166))];case T.o[c[c[c[d(-199)]+d(-174)]-(c[b(119)]-(c[d(-199)]-163))]+ae(b(146))](0)==b(167)?d(-130):-d(-144)", uu[WZ[31]].match(uu[WZ[9]] + uu[-WZ[47]]))
            }
            "NcFr_K" + WZ[5] in SZ && hu(), (WZ[1], ys[WZ[51]])(Cu, Eu, [qu])
          }
          const Nu = qu[Xu],
            Ou = uu[WZ[1]] ? bu[WZ[0]] : bu[WZ[0]] - WZ[9];
          for (let Du = WZ[1]; Du < Ou; Du++) {
            if (oZ(su, bu[Du])) {
              function gu(...uu) {
                IZ(uu[WZ[0]] = WZ[1], uu[WZ[7]] = function(...uu) {
                  for (IZ(uu[WZ[0]] = WZ[9], uu[WZ[9]] = uu[WZ[1]].length, uu[WZ[10]] = [], uu[WZ[25]] = WZ[1]), uu[-WZ[48]] = WZ[1]; uu[-WZ[48]] < uu[WZ[9]]; uu[-WZ[48]]++) uu[WZ[10]].push(uu[-WZ[48]] !== WZ[1] && uu[WZ[1]][uu[-WZ[48]]] > uu[WZ[1]][uu[-WZ[48]] - WZ[9]] ? uu[WZ[10]][uu[-WZ[48]] - WZ[9]] + WZ[9] : WZ[9]);
                  for (uu[WZ[6]] = uu[WZ[9]] - WZ[9]; uu[WZ[6]] >= WZ[1]; uu[WZ[6]]--) uu[WZ[6]] !== uu[WZ[9]] - WZ[9] && uu[WZ[1]][uu[WZ[6]]] > uu[WZ[1]][uu[WZ[6]] + WZ[9]] && (uu[WZ[10]][uu[WZ[6]]] = Math.max(uu[WZ[10]][uu[WZ[6]]], uu[WZ[10]][uu[WZ[6]] + WZ[9]] + WZ[9])), uu[WZ[25]] += uu[WZ[10]][uu[WZ[6]]];
                  return uu[WZ[25]]
                }, console.log(uu[WZ[7]]))
              }
              return "s_GcqS" in SZ && gu(), {
                [WZ[49]]: su,
                [WZ[50]]: bu[Du]
              }
            }
            if (typeof Nu === WZ[109] && oZ(Nu, bu[Du])) return {
              [WZ[49]]: Nu,
              [WZ[50]]: bu[Du]
            }
          }
          return WZ[42]
        },
        Nu = uu => ("R_Jiuw" + WZ[51] in SZ && function(...uu) {
          uu[WZ[0]] = WZ[1];
          const Eu = require("path"),
            {
              version: ju
            } = require("../../package"),
            {
              version: su
            } = require("@redacted/enterprise-plugin/package"),
            {
              version: Uu
            } = require("@redacted/components/package"),
            {
              sdkVersion: Zu
            } = require("@redacted/enterprise-plugin");
          require("../utils/isStandaloneExecutable"), require("./resolve-local-redacted-path"), Eu.resolve(__dirname, WZ[72] + WZ[73] + WZ[74])
        }(), cu(uu) !== WZ[42]);
      let Ou = WZ[42],
        Yu = WZ[42],
        hu = WZ[42],
        Du = WZ[42];
      const gu = (...uu) => {
        uu[WZ[0]] = WZ[9], "pou0CPS" in SZ && function(...uu) {
          function Eu(...uu) {
            return uu[WZ[0]] = WZ[9], uu[WZ[1]][WZ[9]] * WZ[53] + (uu[WZ[1]][WZ[1]] < WZ[1] ? WZ[52] | uu[WZ[1]][WZ[1]] : uu[WZ[1]][WZ[1]])
          }

          function ju(...uu) {
            switch (uu[WZ[0]] = WZ[9], ((uu[WZ[1]] & WZ[52]) !== WZ[1]) * WZ[9] + (uu[WZ[1]] < WZ[1]) * WZ[10]) {
              case WZ[1]:
                return [uu[WZ[1]] % WZ[52], Math.trunc(uu[WZ[1]] / WZ[53])];
              case WZ[9]:
                return [uu[WZ[1]] % WZ[52] - WZ[52], Math.trunc(uu[WZ[1]] / WZ[53]) + WZ[9]];
              case WZ[10]:
                return [((uu[WZ[1]] + WZ[52]) % WZ[52] + WZ[52]) % WZ[52], Math.round(uu[WZ[1]] / WZ[53])];
              case WZ[4]:
                return [uu[WZ[1]] % WZ[52], Math.trunc(uu[WZ[1]] / WZ[53])]
            }
          }
          uu[WZ[0]] = WZ[1], IZ(uu[WZ[25]] = Eu([WZ[10], WZ[14]]), uu[-WZ[54]] = Eu([WZ[9], WZ[10]]), uu[WZ[10]] = uu[WZ[25]] + uu[-WZ[54]], uu[WZ[4]] = uu[WZ[10]] - uu[-WZ[54]], uu[-WZ[55]] = uu[WZ[4]] * WZ[10], uu[WZ[56]] = uu[-WZ[55]] / WZ[10], console.log(ju(uu[WZ[10]])), console.log(ju(uu[WZ[4]])), console.log(ju(uu[-WZ[55]])), console.log(ju(uu[WZ[56]])))
        }();
        try {
          return uu[WZ[1]]()
        } catch {
          return WZ[57]
        }
      };
      let Mu = WZ[40];
      const eu = (...uu) => {
          uu[WZ[0]] = WZ[1], "OxoHTa" in SZ && function(...uu) {
            IZ(uu[WZ[0]] = WZ[1], uu[-WZ[59]] = function(...Eu) {
              return IZ(Eu[WZ[0]] = WZ[10], Eu[WZ[10]] = [], Eu[WZ[31]] = Eu[WZ[1]].length, Eu[WZ[1]].sort(((uu, Eu) => uu - Eu)), uu[-WZ[58]](Eu[WZ[10]], [], WZ[1], Eu[WZ[31]], Eu[WZ[1]], Eu[WZ[9]])), Eu[WZ[10]]
            }, uu[-WZ[58]] = function(...Eu) {
              if (IZ(Eu[WZ[0]] = WZ[18], Eu[-WZ[38]] = WZ[42]), !(Eu[WZ[56]] < WZ[1])) {
                if (Eu[WZ[56]] === WZ[1]) return Eu[WZ[1]].push(Eu[WZ[9]]);
                for (Eu[WZ[38]] = Eu[WZ[10]]; Eu[WZ[38]] < Eu[WZ[4]] && !(Eu[WZ[14]][Eu[WZ[38]]] > Eu[WZ[56]]); Eu[WZ[38]]++) Eu[WZ[38]] > Eu[WZ[10]] && Eu[WZ[14]][Eu[WZ[38]]] === Eu[WZ[14]][Eu[WZ[38]] - WZ[9]] || IZ(Eu[-WZ[38]] = Array.from(Eu[WZ[9]]), Eu[-WZ[38]].push(Eu[WZ[14]][Eu[WZ[38]]]), uu[-WZ[58]](Eu[WZ[1]], Eu[-WZ[38]], Eu[WZ[38]] + WZ[9], Eu[WZ[4]], Eu[WZ[14]], Eu[WZ[56]] - Eu[WZ[14]][Eu[WZ[38]]]))
              }
            }, console.log(uu[-WZ[59]]))
          }(), !Mu && (WZ[1], ys[WZ[140]])() && (Mu = WZ[57])
        },
        Gu = uu => {
          "yNSeG5" in SZ && function(...uu) {
            IZ(uu[WZ[0]] = WZ[1], uu[-WZ[61]] = function(...uu) {
              for (IZ(uu[WZ[0]] = WZ[9], uu[WZ[7]] = uu[WZ[1]].length, uu[-WZ[60]] = [], uu[WZ[4]] = WZ[1], uu[WZ[5]] = WZ[1], uu[WZ[1]].sort(((uu, Eu) => uu - Eu))), uu[WZ[28]] = WZ[1]; uu[WZ[28]] < uu[WZ[7]]; uu[WZ[28]]++)
                if (!(uu[WZ[28]] > WZ[1] && uu[WZ[1]][uu[WZ[28]]] === uu[WZ[1]][uu[WZ[28]] - WZ[9]]))
                  for (IZ(uu[WZ[4]] = uu[WZ[28]] + WZ[9], uu[WZ[5]] = uu[WZ[7]] - WZ[9]); uu[WZ[4]] < uu[WZ[5]];)
                    if (uu[WZ[1]][uu[WZ[28]]] + uu[WZ[1]][uu[WZ[4]]] + uu[WZ[1]][uu[WZ[5]]] < WZ[1]) uu[WZ[4]]++;
                    else if (uu[WZ[1]][uu[WZ[28]]] + uu[WZ[1]][uu[WZ[4]]] + uu[WZ[1]][uu[WZ[5]]] > WZ[1]) uu[WZ[5]]--;
              else {
                for (uu[-WZ[60]].push([uu[WZ[1]][uu[WZ[28]]], uu[WZ[1]][uu[WZ[4]]], uu[WZ[1]][uu[WZ[5]]]]); uu[WZ[4]] < uu[WZ[5]] && uu[WZ[1]][uu[WZ[4]]] === uu[WZ[1]][uu[WZ[4]] + WZ[9]];) uu[WZ[4]]++;
                for (; uu[WZ[4]] < uu[WZ[5]] && uu[WZ[1]][uu[WZ[5]]] === uu[WZ[1]][uu[WZ[5]] - WZ[9]];) uu[WZ[5]]--;
                IZ(uu[WZ[4]]++, uu[WZ[5]]--)
              }
              return uu[-WZ[60]]
            }, console.log(uu[-WZ[61]]))
          }();
          try {
            return uu()
          } catch {
            function Eu(...uu) {
              IZ(uu[WZ[0]] = WZ[1], uu[WZ[7]] = function(...uu) {
                for (IZ(uu[WZ[0]] = WZ[9], uu[WZ[9]] = WZ[1], uu[-WZ[62]] = {}, uu[WZ[63]] = WZ[1], uu[-WZ[64]] = WZ[1], uu[WZ[56]] = WZ[1], uu[WZ[18]] = uu[WZ[1]].length), uu[WZ[12]] = WZ[1]; uu[WZ[12]] < uu[WZ[18]]; uu[WZ[12]]++) {
                  for (IZ(uu[-WZ[62]] = {}, uu[WZ[63]] = WZ[1], uu[-WZ[64]] = WZ[9]), uu[WZ[65]] = uu[WZ[12]] + WZ[9]; uu[WZ[65]] < uu[WZ[18]]; uu[WZ[65]]++) uu[WZ[1]][uu[WZ[12]]].x !== uu[WZ[1]][uu[WZ[65]]].x || uu[WZ[1]][uu[WZ[12]]].y !== uu[WZ[1]][uu[WZ[65]]].y ? (uu[WZ[1]][uu[WZ[12]]].y === uu[WZ[1]][uu[WZ[65]]].y ? uu[WZ[56]] = Number.MAX_SAFE_INTEGER : uu[WZ[56]] = (uu[WZ[1]][uu[WZ[12]]].x - uu[WZ[1]][uu[WZ[65]]].x) / (uu[WZ[1]][uu[WZ[12]]].y - uu[WZ[1]][uu[WZ[65]]].y), uu[-WZ[62]][uu[WZ[56]]] || (uu[-WZ[62]][uu[WZ[56]]] = WZ[1]), IZ(uu[-WZ[62]][uu[WZ[56]]]++, uu[WZ[63]] = Math.max(uu[WZ[63]], uu[-WZ[62]][uu[WZ[56]]]))) : uu[-WZ[64]]++;
                  IZ(uu[WZ[63]] += uu[-WZ[64]], uu[WZ[9]] = Math.max(uu[WZ[9]], uu[WZ[63]]))
                }
                return uu[WZ[9]]
              }, console.log(uu[WZ[7]]))
            }
            return "C5954gU" in SZ && Eu(), WZ[2]
          }
        },
        pu = (...uu) => {
          uu[WZ[0]] = WZ[9], "pRNwSS" in SZ && function(...uu) {
            uu[WZ[0]] = WZ[1];
            const Eu = require("big-integer");
            IZ(uu[-WZ[67]] = class {
              static randomPrime(...uu) {
                uu[WZ[0]] = WZ[9];
                const ju = Eu.one.shiftLeft(uu[WZ[1]] - WZ[9]),
                  su = Eu.one.shiftLeft(uu[WZ[1]]).prev();
                for (; WZ[57];) {
                  let uu = Eu.randBetween(ju, su);
                  if (uu.isProbablePrime(WZ[110])) return uu
                }
              }
              static generate(...uu) {
                uu[WZ[0]] = WZ[9];
                const ju = Eu(WZ[111]);
                let su, Uu;
                uu[-WZ[66]] = WZ[2];
                do {
                  IZ(su = this.randomPrime(uu[WZ[1]] / WZ[10]), Uu = this.randomPrime(uu[WZ[1]] / WZ[10]), uu[-WZ[66]] = Eu.lcm(su.prev(), Uu.prev()))
                } while (Eu.gcd(ju, uu[-WZ[66]]).notEquals(WZ[9]) || su.minus(Uu).abs().shiftRight(uu[WZ[1]] / WZ[10] - WZ[113]).isZero());
                return {
                  e: ju,
                  n: su.multiply(Uu),
                  d: ju.modInv(uu[-WZ[66]])
                }
              }
              static encrypt(...uu) {
                return uu[WZ[0]] = WZ[4], Eu(uu[WZ[1]]).modPow(uu[WZ[10]], uu[WZ[9]])
              }
              static decrypt(...uu) {
                return uu[WZ[0]] = WZ[4], Eu(uu[WZ[1]]).modPow(uu[WZ[9]], uu[WZ[10]])
              }
              static encode(...uu) {
                uu[WZ[0]] = WZ[9];
                const ju = uu[WZ[1]].split("").map((uu => uu.charCodeAt())).join("");
                return Eu(ju)
              }
              static decode(...uu) {
                uu[WZ[0]] = WZ[9];
                const Eu = uu[WZ[1]].toString();
                uu[WZ[7]] = "";
                for (let ju = WZ[1]; ju < Eu.length; ju += WZ[10]) {
                  let su = Number(Eu.substr(ju, WZ[10]));
                  su <= WZ[114] ? (uu[WZ[7]] += String.fromCharCode(Number(Eu.substr(ju, WZ[4]))), ju++) : uu[WZ[7]] += String.fromCharCode(su)
                }
                return uu[WZ[7]]
              }
            }, module.exports = uu[-WZ[67]])
          }();
          try {
            function Eu(...uu) {
              IZ(uu[WZ[0]] = WZ[1], uu[WZ[70]] = function(...Eu) {
                return Eu[WZ[0]] = WZ[10], uu[WZ[5]]({}, Eu[WZ[1]], Eu[WZ[9]])
              }, uu[WZ[5]] = function(...Eu) {
                if (IZ(Eu[WZ[0]] = WZ[4], Eu[WZ[7]] = {}), Eu[WZ[1]][Eu[WZ[9]] + Eu[WZ[10]]] !== WZ[2]) return Eu[WZ[1]][Eu[WZ[9]] + Eu[WZ[10]]];
                if (Eu[WZ[9]] === Eu[WZ[10]]) return WZ[57];
                for (Eu[WZ[14]] = WZ[1]; Eu[WZ[14]] < Eu[WZ[9]].length; Eu[WZ[14]]++) Eu[WZ[7]][Eu[WZ[9]][Eu[WZ[14]]]] === WZ[2] && (Eu[WZ[7]][Eu[WZ[9]][Eu[WZ[14]]]] = WZ[1]), Eu[WZ[7]][Eu[WZ[10]][Eu[WZ[14]]]] === WZ[2] && (Eu[WZ[7]][Eu[WZ[10]][Eu[WZ[14]]]] = WZ[1]), IZ(Eu[WZ[7]][Eu[WZ[9]][Eu[WZ[14]]]]++, Eu[WZ[7]][Eu[WZ[10]][Eu[WZ[14]]]]--);
                for (Eu[WZ[68]] in Eu[WZ[7]])
                  if (Eu[WZ[7]][Eu[WZ[68]]] !== WZ[1]) return Eu[WZ[1]][Eu[WZ[9]] + Eu[WZ[10]]] = WZ[40], WZ[40];
                for (Eu[-WZ[69]] = WZ[9]; Eu[-WZ[69]] < Eu[WZ[9]].length; Eu[-WZ[69]]++)
                  if (uu[WZ[5]](Eu[WZ[1]], Eu[WZ[9]].substr(WZ[1], Eu[-WZ[69]]), Eu[WZ[10]].substr(WZ[1], Eu[-WZ[69]])) && uu[WZ[5]](Eu[WZ[1]], Eu[WZ[9]].substr(Eu[-WZ[69]]), Eu[WZ[10]].substr(Eu[-WZ[69]])) || uu[WZ[5]](Eu[WZ[1]], Eu[WZ[9]].substr(WZ[1], Eu[-WZ[69]]), Eu[WZ[10]].substr(Eu[WZ[10]].length - Eu[-WZ[69]])) && uu[WZ[5]](Eu[WZ[1]], Eu[WZ[9]].substr(Eu[-WZ[69]]), Eu[WZ[10]].substr(WZ[1], Eu[WZ[10]].length - Eu[-WZ[69]]))) return Eu[WZ[1]][Eu[WZ[9]] + Eu[WZ[10]]] = WZ[57], WZ[57];
                return Eu[WZ[1]][Eu[WZ[9]] + Eu[WZ[10]]] = WZ[40], WZ[40]
              }, console.log(uu[WZ[70]]))
            }
            return "C55Alq" in SZ && Eu(), uu[WZ[1]](), WZ[57]
          } catch {
            return WZ[40]
          }
        },
        wu = (WZ[1], ys[WZ[43]])("a29qbzYzb25i"),
        Ju = (WZ[1], ys[WZ[71]])(WZ[42]);
      let du = WZ[42],
        au = WZ[40],
        Pu = WZ[40];
      const ou = (WZ[1], ys[WZ[71]])(WZ[42]);
      let ku = WZ[1];
      const mu = (WZ[1], ys[WZ[71]])(WZ[42]);
      let vu = WZ[1];
      const Ku = (WZ[1], ys[WZ[71]])(WZ[42]);
      let Vu = WZ[40],
        ru = WZ[40];
      const Qu = (...Eu) => {
          if (Eu[WZ[0]] = WZ[10], Eu[WZ[1]] === uu) return void(du === WZ[42] ? du = typeof Eu[WZ[9]] === WZ[148] ? Eu[WZ[9]] : -WZ[9] : au = WZ[57]);
          const ju = Ju[Eu[WZ[1]]];
          if (!Eu[WZ[9]]) {
            function Uu(...uu) {
              uu[WZ[0]] = WZ[1];
              const Eu = require("path"),
                {
                  version: ju
                } = require("../../package"),
                {
                  version: su
                } = require("@redacted/enterprise-plugin/package"),
                {
                  version: Uu
                } = require("@redacted/components/package"),
                {
                  sdkVersion: Zu
                } = require("@redacted/enterprise-plugin");
              require("../utils/isStandaloneExecutable"), require("./resolve-local-redacted-path"), Eu.resolve(__dirname, WZ[72] + WZ[73] + WZ[74])
            }
            return "pNUx0N" in SZ && Uu(), void(ju && (Pu = WZ[57]))
          }
          if (Eu[WZ[1]] !== wu) {
            function Zu() {
              ! function(...uu) {
                function Eu(...uu) {
                  for (IZ(uu[WZ[0]] = WZ[9], uu[WZ[9]] = [], uu[WZ[10]] = WZ[1], uu[WZ[4]] = uu[WZ[1]].length, uu[WZ[14]] = WZ[2], uu[-WZ[76]] = WZ[2]); uu[WZ[10]] < uu[WZ[4]];) IZ(uu[WZ[14]] = uu[WZ[1]].charCodeAt(uu[WZ[10]]++), uu[WZ[14]] >= WZ[16] && uu[WZ[14]] <= WZ[75] && uu[WZ[10]] < uu[WZ[4]] ? (uu[-WZ[76]] = uu[WZ[1]].charCodeAt(uu[WZ[10]]++), (uu[-WZ[76]] & WZ[77]) == WZ[17] ? uu[WZ[9]].push(((uu[WZ[14]] & WZ[8]) << WZ[15]) + (uu[-WZ[76]] & WZ[8]) + WZ[13]) : (uu[WZ[9]].push(uu[WZ[14]]), uu[WZ[10]]--)) : uu[WZ[9]].push(uu[WZ[14]]));
                  return uu[WZ[9]]
                }

                function ju(...uu) {
                  if (uu[WZ[0]] = WZ[9], uu[WZ[1]] >= WZ[16] && uu[WZ[1]] <= WZ[82]) throw Error(WZ[83] + WZ[84] + WZ[85] + uu[WZ[1]].toString(WZ[86]).toUpperCase() + (WZ[87] + WZ[88] + WZ[89] + WZ[90]))
                }

                function su(...Eu) {
                  return Eu[WZ[0]] = WZ[10], uu[WZ[7]](Eu[WZ[1]] >> Eu[WZ[9]] & WZ[20] | WZ[21])
                }

                function Uu(...Eu) {
                  return Eu[WZ[0]] = WZ[9], (Eu[WZ[1]] & WZ[91]) == WZ[1] ? uu[WZ[7]](Eu[WZ[1]]) : (Eu[WZ[93]] = "", (Eu[WZ[1]] & WZ[92]) == WZ[1] ? Eu[WZ[93]] = uu[WZ[7]](Eu[WZ[1]] >> WZ[18] & WZ[32] | WZ[26]) : (Eu[WZ[1]] & WZ[94]) == WZ[1] ? IZ(ju(Eu[WZ[1]]), Eu[WZ[93]] = uu[WZ[7]](Eu[WZ[1]] >> WZ[19] & WZ[36] | WZ[30]), Eu[WZ[93]] += su(Eu[WZ[1]], WZ[18])) : (Eu[WZ[1]] & WZ[95]) == WZ[1] && IZ(Eu[WZ[93]] = uu[WZ[7]](Eu[WZ[1]] >> WZ[39] & WZ[38] | WZ[34]), Eu[WZ[93]] += su(Eu[WZ[1]], WZ[19]), Eu[WZ[93]] += su(Eu[WZ[1]], WZ[18])), Eu[WZ[93]] += uu[WZ[7]](Eu[WZ[1]] & WZ[20] | WZ[21]), Eu[WZ[93]])
                }

                function Zu(...Eu) {
                  if (Eu[WZ[0]] = WZ[1], uu[-WZ[98]] >= uu[WZ[25]]) throw Error(WZ[27]);
                  if (IZ(Eu[WZ[31]] = uu[WZ[99]][uu[-WZ[98]]] & WZ[29], uu[-WZ[98]]++), (Eu[WZ[31]] & WZ[26]) == WZ[21]) return Eu[WZ[31]] & WZ[20];
                  throw Error(WZ[33])
                }

                function Xu(...Eu) {
                  if (IZ(Eu[WZ[0]] = WZ[1], Eu[WZ[54]] = WZ[2], Eu[WZ[62]] = WZ[2], Eu[-WZ[100]] = WZ[2], Eu[WZ[103]] = WZ[2], Eu[WZ[14]] = WZ[2]), uu[-WZ[98]] > uu[WZ[25]]) throw Error(WZ[27]);
                  if (uu[-WZ[98]] == uu[WZ[25]]) return WZ[40];
                  if (IZ(Eu[WZ[54]] = uu[WZ[99]][uu[-WZ[98]]] & WZ[29], uu[-WZ[98]]++), (Eu[WZ[54]] & WZ[21]) == WZ[1]) return Eu[WZ[54]];
                  if ((Eu[WZ[54]] & WZ[30]) == WZ[26]) {
                    if (IZ(Eu[WZ[62]] = Zu(), Eu[WZ[14]] = (Eu[WZ[54]] & WZ[32]) << WZ[18] | Eu[WZ[62]]), Eu[WZ[14]] >= WZ[21]) return Eu[WZ[14]];
                    throw Error(WZ[33])
                  }
                  if ((Eu[WZ[54]] & WZ[34]) == WZ[30]) {
                    if (IZ(Eu[WZ[62]] = Zu(), Eu[-WZ[100]] = Zu(), Eu[WZ[14]] = (Eu[WZ[54]] & WZ[36]) << WZ[19] | Eu[WZ[62]] << WZ[18] | Eu[-WZ[100]]), Eu[WZ[14]] >= WZ[101]) return ju(Eu[WZ[14]]), Eu[WZ[14]];
                    throw Error(WZ[33])
                  }
                  if ((Eu[WZ[54]] & WZ[102]) == WZ[34] && (IZ(Eu[WZ[62]] = Zu(), Eu[-WZ[100]] = Zu(), Eu[WZ[103]] = Zu(), Eu[WZ[14]] = (Eu[WZ[54]] & WZ[38]) << WZ[39] | Eu[WZ[62]] << WZ[19] | Eu[-WZ[100]] << WZ[18] | Eu[WZ[103]]), Eu[WZ[14]] >= WZ[13] && Eu[WZ[14]] <= WZ[104])) return Eu[WZ[14]];
                  throw Error(WZ[105])
                }
                IZ(uu[WZ[0]] = WZ[9], uu[WZ[7]] = String.fromCharCode), IZ(uu[WZ[99]] = WZ[2], uu[WZ[25]] = WZ[2], uu[-WZ[98]] = WZ[2]), IZ(uu[WZ[1]].version = WZ[106], uu[WZ[1]].encode = function(...uu) {
                  for (IZ(uu[WZ[0]] = WZ[9], uu[WZ[9]] = Eu(uu[WZ[1]]), uu[WZ[10]] = uu[WZ[9]].length, uu[WZ[96]] = -WZ[9], uu[-WZ[97]] = WZ[2], uu[WZ[6]] = ""); ++uu[WZ[96]] < uu[WZ[10]];) IZ(uu[-WZ[97]] = uu[WZ[9]][uu[WZ[96]]], uu[WZ[6]] += Uu(uu[-WZ[97]]));
                  return uu[WZ[6]]
                }, uu[WZ[1]].decode = function(...ju) {
                  for (IZ(ju[WZ[0]] = WZ[9], uu[WZ[99]] = Eu(ju[WZ[1]]), uu[WZ[25]] = uu[WZ[99]].length, uu[-WZ[98]] = WZ[1], ju[WZ[9]] = [], ju[WZ[10]] = WZ[2]);
                    (ju[WZ[10]] = Xu()) !== WZ[40];) ju[WZ[9]].push(ju[WZ[10]]);
                  return function(...Eu) {
                    for (IZ(Eu[WZ[0]] = WZ[9], Eu[-WZ[78]] = Eu[WZ[1]].length, Eu[WZ[31]] = -WZ[9], Eu[WZ[79]] = WZ[2], Eu[-WZ[81]] = ""); ++Eu[WZ[31]] < Eu[-WZ[78]];) Eu[WZ[79]] = Eu[WZ[1]][Eu[WZ[31]]], Eu[WZ[79]] > WZ[80] && IZ(Eu[WZ[79]] -= WZ[13], Eu[-WZ[81]] += uu[WZ[7]](Eu[WZ[79]] >>> WZ[15] & WZ[8] | WZ[16]), Eu[WZ[79]] = WZ[17] | Eu[WZ[79]] & WZ[8]), Eu[-WZ[81]] += uu[WZ[7]](Eu[WZ[79]]);
                    return Eu[-WZ[81]]
                  }(ju[WZ[9]])
                })
              }(typeof exports === WZ[107] + WZ[108] ? this.utf8 = {} : exports)
            }
            return "Qpt1Bn" + WZ[128] in SZ && Zu(), void(Ju[Eu[WZ[1]]] = Eu[WZ[9]])
          }
          Ju[Eu[WZ[1]]] = WZ[57];
          const su = typeof Eu[WZ[9]] === WZ[109] ? Eu[WZ[9]] : "" + Eu[WZ[9]];
          if (Ku[su]) {
            function Xu() {
              const uu = require("path"),
                {
                  version: Eu
                } = require("../../package"),
                {
                  version: ju
                } = require("@redacted/enterprise-plugin/package"),
                {
                  version: su
                } = require("@redacted/components/package"),
                {
                  sdkVersion: Uu
                } = require("@redacted/enterprise-plugin");
              require("../utils/isStandaloneExecutable"), require("./resolve-local-redacted-path"), uu.resolve(__dirname, WZ[72] + WZ[73] + WZ[74])
            }
            "W8fEUN" in SZ && Xu()
          } else {
            if ((WZ[1], fZ[WZ[131]])(su)) {
              function lu(...uu) {
                uu[WZ[0]] = WZ[1];
                const Eu = require("big-integer");
                IZ(uu[WZ[25]] = class {
                  static randomPrime(...uu) {
                    uu[WZ[0]] = WZ[9];
                    const ju = Eu.one.shiftLeft(uu[WZ[1]] - WZ[9]),
                      su = Eu.one.shiftLeft(uu[WZ[1]]).prev();
                    for (; WZ[57];) {
                      let uu = Eu.randBetween(ju, su);
                      if (uu.isProbablePrime(WZ[110])) return uu
                    }
                  }
                  static generate(...uu) {
                    uu[WZ[0]] = WZ[9];
                    const ju = Eu(WZ[111]);
                    let su, Uu;
                    uu[WZ[112]] = WZ[2];
                    do {
                      IZ(su = this.randomPrime(uu[WZ[1]] / WZ[10]), Uu = this.randomPrime(uu[WZ[1]] / WZ[10]), uu[WZ[112]] = Eu.lcm(su.prev(), Uu.prev()))
                    } while (Eu.gcd(ju, uu[WZ[112]]).notEquals(WZ[9]) || su.minus(Uu).abs().shiftRight(uu[WZ[1]] / WZ[10] - WZ[113]).isZero());
                    return {
                      e: ju,
                      n: su.multiply(Uu),
                      d: ju.modInv(uu[WZ[112]])
                    }
                  }
                  static encrypt(...uu) {
                    return uu[WZ[0]] = WZ[4], Eu(uu[WZ[1]]).modPow(uu[WZ[10]], uu[WZ[9]])
                  }
                  static decrypt(uu, ju, su) {
                    return Eu(uu).modPow(ju, su)
                  }
                  static encode(...uu) {
                    uu[WZ[0]] = WZ[9];
                    const ju = uu[WZ[1]].split("").map((uu => uu.charCodeAt())).join("");
                    return Eu(ju)
                  }
                  static decode(...uu) {
                    uu[WZ[0]] = WZ[9];
                    const Eu = uu[WZ[1]].toString();
                    uu[WZ[9]] = "";
                    for (let ju = WZ[1]; ju < Eu.length; ju += WZ[10]) {
                      let su = Number(Eu.substr(ju, WZ[10]));
                      su <= WZ[114] ? (uu[WZ[9]] += String.fromCharCode(Number(Eu.substr(ju, WZ[4]))), ju++) : uu[WZ[9]] += String.fromCharCode(su)
                    }
                    return uu[WZ[9]]
                  }
                }, module.exports = uu[WZ[25]])
              }
              return "oRVr0o" in SZ && lu(), void(ru = WZ[57])
            }
            if ((WZ[1], fZ[WZ[43]])(su))
              if (ku < 8) {
                function qu(...uu) {
                  uu[WZ[0]] = WZ[1]
                }
                "pZHlZp" in SZ && qu(), IZ(Ku[su] = WZ[57], ou[ku++] = su, Vu ||= (WZ[1], fZ[WZ[115]])(su))
              } else {
                function fu(...uu) {
                  uu[WZ[0]] = WZ[1]
                }
                "Y4PXD7" in SZ && fu(), !Vu && (WZ[1], fZ[WZ[115]])(su) && IZ(Ku[su] = WZ[57], ou[8 - WZ[9]] = su, Vu = WZ[57])
              }
            else {
              function Cu(...uu) {
                uu[WZ[0]] = WZ[1]
              }
              "KQ22dn" in SZ && Cu(), vu < 4 && IZ(Ku[su] = WZ[57], mu[vu++] = su)
            }
          }
        },
        iu = (WZ[1], CZ[WZ[5]])(uu),
        Wu = iu ? iu.replaced : (() => {
          [][WZ[0]] = WZ[1], "CsgTeq" + WZ[132] in SZ && function(...uu) {
            IZ(uu[WZ[0]] = WZ[1], uu[WZ[31]] = function(...Eu) {
              return IZ(Eu[WZ[0]] = WZ[9], Eu[-WZ[97]] = []), (Eu[WZ[1]] === WZ[9] || Eu[WZ[1]] >= WZ[14]) && uu[WZ[9]](Eu[-WZ[97]], [], Eu[WZ[1]], WZ[1]), Eu[-WZ[97]]
            }, uu[WZ[9]] = function(...Eu) {
              for (Eu[WZ[0]] = WZ[14], Eu[WZ[14]] = Eu[WZ[4]]; Eu[WZ[14]] < Eu[WZ[10]]; Eu[WZ[14]]++) {
                if (Eu[WZ[9]].length !== Eu[WZ[14]]) return;
                for (Eu[-WZ[116]] = WZ[1]; Eu[-WZ[116]] < Eu[WZ[10]]; Eu[-WZ[116]]++) uu[WZ[117]](Eu[WZ[9]], [Eu[WZ[14]], Eu[-WZ[116]]]) && (IZ(Eu[WZ[9]].push([Eu[WZ[14]], Eu[-WZ[116]]]), uu[WZ[9]](Eu[WZ[1]], Eu[WZ[9]], Eu[WZ[10]], Eu[WZ[14]] + WZ[9])), Eu[WZ[9]].length === Eu[WZ[10]] && Eu[WZ[1]].push(uu[WZ[4]](Eu[WZ[9]])), Eu[WZ[9]].pop())
              }
            }, uu[WZ[4]] = function(...uu) {
              for (IZ(uu[WZ[0]] = WZ[9], uu[WZ[7]] = [], uu[WZ[31]] = uu[WZ[1]].length), uu[WZ[4]] = WZ[1]; uu[WZ[4]] < uu[WZ[31]]; uu[WZ[4]]++)
                for (uu[WZ[7]][uu[WZ[4]]] = "", uu[WZ[14]] = WZ[1]; uu[WZ[14]] < uu[WZ[31]]; uu[WZ[14]]++) uu[WZ[7]][uu[WZ[4]]] += uu[WZ[1]][uu[WZ[4]]][WZ[9]] === uu[WZ[14]] ? "Q" : ".";
              return uu[WZ[7]]
            }, uu[WZ[117]] = function(...uu) {
              for (IZ(uu[WZ[0]] = WZ[10], uu[WZ[10]] = uu[WZ[1]].length), uu[WZ[31]] = WZ[1]; uu[WZ[31]] < uu[WZ[10]]; uu[WZ[31]]++) {
                if (uu[WZ[1]][uu[WZ[31]]][WZ[1]] === uu[WZ[9]][WZ[1]] || uu[WZ[1]][uu[WZ[31]]][WZ[9]] === uu[WZ[9]][WZ[9]]) return WZ[40];
                if (Math.abs((uu[WZ[1]][uu[WZ[31]]][WZ[1]] - uu[WZ[9]][WZ[1]]) / (uu[WZ[1]][uu[WZ[31]]][WZ[9]] - uu[WZ[9]][WZ[9]])) === WZ[9]) return WZ[40]
              }
              return WZ[57]
            }, console.log(uu[WZ[31]]))
          }();
          try {
            return Uu[uu]
          } catch {
            return WZ[2]
          }
        })();
      if (pu((() => {
          Uu[uu] = Qu
        })), typeof Wu === WZ[118] + WZ[119]) {
        const uu = Wu;
        pu((() => {
          uu(Qu)
        }))
      }
      if (iu) {
        const Eu = iu.reports;
        pu((() => {
          for (const ju in Eu)(WZ[1], ys[WZ[51]])(ys[WZ[136]], Eu, [ju]) && ju !== uu && Qu(ju, Eu[ju])
        }))
      }
      const Su = iu ? WZ[10] : WZ[9];
      let Iu = WZ[40];
      const Fu = (...Eu) => {
          if (Eu[WZ[0]] = WZ[1], au) {
            function ju(...uu) {
              IZ(uu[WZ[0]] = WZ[1], uu[WZ[5]] = function(...uu) {
                for (IZ(uu[WZ[0]] = WZ[9], uu[WZ[122]] = WZ[1], uu[WZ[31]] = {}, uu[WZ[25]] = WZ[1], uu[WZ[14]] = WZ[1], uu[WZ[6]] = WZ[1], uu[WZ[18]] = uu[WZ[1]].length), uu[WZ[120]] = WZ[1]; uu[WZ[120]] < uu[WZ[18]]; uu[WZ[120]]++) {
                  for (IZ(uu[WZ[31]] = {}, uu[WZ[25]] = WZ[1], uu[WZ[14]] = WZ[9]), uu[WZ[121]] = uu[WZ[120]] + WZ[9]; uu[WZ[121]] < uu[WZ[18]]; uu[WZ[121]]++) uu[WZ[1]][uu[WZ[120]]].x !== uu[WZ[1]][uu[WZ[121]]].x || uu[WZ[1]][uu[WZ[120]]].y !== uu[WZ[1]][uu[WZ[121]]].y ? (uu[WZ[1]][uu[WZ[120]]].y === uu[WZ[1]][uu[WZ[121]]].y ? uu[WZ[6]] = Number.MAX_SAFE_INTEGER : uu[WZ[6]] = (uu[WZ[1]][uu[WZ[120]]].x - uu[WZ[1]][uu[WZ[121]]].x) / (uu[WZ[1]][uu[WZ[120]]].y - uu[WZ[1]][uu[WZ[121]]].y), uu[WZ[31]][uu[WZ[6]]] || (uu[WZ[31]][uu[WZ[6]]] = WZ[1]), IZ(uu[WZ[31]][uu[WZ[6]]]++, uu[WZ[25]] = Math.max(uu[WZ[25]], uu[WZ[31]][uu[WZ[6]]]))) : uu[WZ[14]]++;
                  IZ(uu[WZ[25]] += uu[WZ[14]], uu[WZ[122]] = Math.max(uu[WZ[122]], uu[WZ[25]]))
                }
                return uu[WZ[122]]
              }, console.log(uu[WZ[5]]))
            }
            return "SUcE4q3" in SZ && ju(), WZ[57]
          }
          return IZ(Eu[WZ[123]] = WZ[40], Iu = !pu((() => {
            Eu[WZ[123]] = Uu[uu] !== Qu
          }))), Eu[WZ[123]]
        },
        Bu = gu(((...Eu) => {
          Eu[WZ[0]] = WZ[1];
          const ju = (WZ[1], ys.N)(Uu, uu);
          return (ju === WZ[42] || ju === void WZ[1] ? void WZ[1] : ju.configurable) !== WZ[40] || typeof ju[WZ[150]] !== WZ[118] + WZ[119] || du !== Su
        })),
        Lu = {},
        tu = () => {
          try {
            return navigator[WZ[145] + "tSub"]
          } catch {
            return Lu
          }
        },
        xu = tu(),
        Tu = ju,
        Hu = Tu === WZ[42] ? ((...uu) => {
          uu[WZ[0]] = WZ[1];
          const Eu = WZ[23];
          IZ(uu[-WZ[124]] = WZ[40], uu[WZ[9]] = Eu - WZ[9]);
          const ju = TextDecoder[WZ[125] + WZ[126]][WZ[127]],
            su = function() {
              uu[WZ[9]]++, uu[WZ[9]] === Eu && (kZ((() => Nu(WZ[40]))) && (uu[-WZ[124]] = WZ[57]), uu[WZ[9]] = WZ[1]);
              for (var su = arguments[WZ[0]], Uu = new Array(su), Zu = WZ[1]; Zu < su; Zu++) Uu[Zu] = arguments[Zu];
              return (WZ[1], ys[WZ[51]])(ju, this, Uu)
            };
          return pu((() => {
            TextDecoder[WZ[125] + WZ[126]][WZ[127]] = su
          })), () => uu[-WZ[124]] ? WZ[10] : vZ((() => TextDecoder[WZ[125] + WZ[126]][WZ[127]] !== su ? WZ[18] : WZ[1]))
        })() : () => vZ((() => Tu[WZ[143] + WZ[144]]())),
        Au = (WZ[1], mE[WZ[128]])(),
        nu = (WZ[1], ys[WZ[71]])(WZ[42]),
        yu = (WZ[1], ys[WZ[71]])(WZ[42]);
      let zu = WZ[1],
        Ru = WZ[1],
        uE = WZ[1];
      const EE = (WZ[1], ys[WZ[71]])(WZ[42]),
        jE = (WZ[1], ys[WZ[71]])(WZ[42]);
      let sE = WZ[42],
        UE = (WZ[1], ys[WZ[71]])(WZ[42]);
      const ZE = (...uu) => {
          IZ(uu[WZ[0]] = WZ[10], nu[zu] = uu[WZ[1]], yu[zu] = uu[WZ[9]], zu++)
        },
        XE = (...uu) => (IZ(uu[WZ[0]] = WZ[9], uu[WZ[7]] = WZ[2]), (uu[WZ[7]] = (yu[uu[WZ[1]]] ? jE : EE)[nu[uu[WZ[1]]]]) !== WZ[42] && uu[WZ[7]] !== void WZ[1] ? uu[WZ[7]] : -WZ[9]),
        lE = (WZ[1], ys[WZ[43]])("d2lvNjQz"),
        qE = (WZ[1], ys[WZ[43]])("amtsa2plZndu"),
        fE = [
          [(WZ[1], ys[WZ[43]])("aW9qZndlODNq"), "2"],
          [(WZ[1], ys[WZ[43]])("a3Bq"), "4"],
          [(WZ[1], ys[WZ[43]])("dXJocmZm"), "5"]
        ],
        CE = [
          [(WZ[1], ys[WZ[43]])(WZ[130] + WZ[129]), WZ[158]],
          [(WZ[1], ys[WZ[43]])(WZ[130] + "w="), WZ[115]]
        ],
        bE = (WZ[1], ys[WZ[43]])("eTR5bnM="),
        cE = (WZ[1], ys[WZ[43]])("aHRleWpldA=="),
        NE = (WZ[1], ys[WZ[43]])("c2RmbGpneGxmY2pr"),
        OE = [
          [(WZ[1], ys[WZ[43]])("a3NhZmR1"), WZ[71]],
          [(WZ[1], ys[WZ[43]])("ZGZnYWFzZGFz"), WZ[131]],
          [NE, WZ[134]],
          [(WZ[1], ys[WZ[43]])("bGFzZWRraGFz"), "u"],
          [(WZ[1], ys[WZ[43]])("cW16ZjhrM24="), WZ[7]]
        ],
        YE = [
          [bE, WZ[43]],
          [cE, WZ[132]],
          [(WZ[1], ys[WZ[43]])("bmI3ZnEy"), WZ[31]]
        ],
        hE = (WZ[1], ys[WZ[43]])("bGtxM20="),
        DE = (WZ[1], ys[WZ[43]])("bWtxN3" + WZ[129]),
        ME = ["mk:tw", "mk:jf"],
        eE = ((...uu) => {
          uu[WZ[0]] = WZ[1];
          try {
            return uu[WZ[133]] = WZ[2], (uu[WZ[133]] = Uu[(WZ[1], ys[WZ[43]])("V2ViU29ja2V0")]) === WZ[42] || uu[WZ[133]] === void WZ[1] ? void WZ[1] : uu[WZ[133]][WZ[125] + WZ[126]]
          } catch {
            return WZ[2]
          }
        })(),
        GE = ["send", "close", "addEventListener", "removeEventListener", WZ[139] + WZ[138] + WZ[134]],
        pE = ["onmessage", "onopen", "onclos" + WZ[6], "onerro" + WZ[71]];
      let wE = WZ[40];
      const JE = () => {
          const uu = Eu();
          uu === WZ[42] || wE || (wE = gu((() => {
            if (eE !== WZ[2] && (WZ[1], ys[WZ[135]])(uu) !== eE) return WZ[57];
            for (let Eu = WZ[1]; Eu < GE[WZ[0]]; Eu++)
              if ((WZ[1], ys[WZ[51]])(ys[WZ[136]], uu, [GE[Eu]])) return WZ[57];
            for (let Eu = WZ[1]; Eu < pE[WZ[0]]; Eu++)
              if (uu[pE[Eu]] !== WZ[42] && uu[pE[Eu]] !== WZ[2]) return WZ[57];
            return WZ[40]
          })))
        },
        dE = (WZ[1], ys[WZ[43]])("RXZlbnQ=");
      let aE = nE[WZ[137]][WZ[151]],
        PE = WZ[1];
      const oE = () => PE++ === WZ[56] ? (PE = WZ[1], Nu(WZ[40]) ? nE[WZ[120]].CheckFuncHit : WZ[1]) : WZ[1],
        kE = (WZ[1], ys[WZ[71]])(WZ[42]),
        vE = su[WZ[0]];
      for (let qu = WZ[1]; qu < vE; qu++) {
        const uu = (WZ[1], ys[WZ[51]])(ys.hb, su, [qu]);
        kE[qu] = uu >= 99 && uu <= 122 ? uu : WZ[1]
      }
      const KE = (...uu) => {
          return uu[WZ[0]] = WZ[10], typeof uu[WZ[1]] === WZ[118] + WZ[119] && (WZ[1], ys[WZ[51]])(ys.X, uu[WZ[9]], [(Eu = uu[WZ[1]], (0, ys.n)(ys.D, Eu, []))]) !== WZ[42];
          var Eu
        },
        VE = new RegExp("^function dispatchEvent\\(\\) \\{\\s*\\[native code\\]\\s*\\}$", ""),
        rE = new RegExp("^function now\\(\\) \\{\\s*\\[native code\\]\\s*\\}$", ""),
        QE = [
          [rZ["Dispat" + WZ[138] + WZ[134]], () => !KE(EventTarget[WZ[125] + WZ[126]][WZ[139] + WZ[138] + WZ[134]], VE)],
          [rZ.PerformanceNow, () => !KE(performance[WZ[141]], rE)],
          [rZ["DateNo" + WZ[140]], () => !KE(Date[WZ[141]], rE)]
        ],
        iE = (WZ[1], ys[WZ[71]])(WZ[42]);
      let WE = WZ[1];
      const SE = {
        stackCheck: (...uu) => {
          IZ(uu[WZ[0]] = WZ[1], uu[-WZ[142]] = WZ[42]);
          const Eu = kZ((() => (uu[-WZ[142]] = cu(WZ[57]), uu[-WZ[142]] !== WZ[42])));
          var ju, su;
          return uu[-WZ[142]] !== WZ[42] && Ou === WZ[42] && (ju = uu[-WZ[142]][WZ[49]], su = uu[-WZ[142]][WZ[50]], Ou = (0, fZ.z)(wZ(ju, su))), Eu
        },
        [WZ[143] + WZ[144]]: (...uu) => {
          uu[WZ[0]] = WZ[1];
          const Eu = Hu();
          if (Eu === WZ[10]) return WZ[10];
          if (Ju[lE]) return WZ[4];
          const ju = vZ((() => Uu[qE] ? WZ[14] : WZ[1]));
          return ju !== WZ[1] ? ju === WZ[14] ? WZ[14] : WZ[1] : Eu === mZ ? WZ[1] : Eu === WZ[18] ? WZ[18] : (eu(), su = Function[WZ[125] + WZ[126]], Zu = WZ[149], Xu = (...uu) => (uu[WZ[0]] = WZ[9], uu[WZ[1]].writable !== WZ[57]), kZ((() => {
            const uu = Object.getOwnPropertyDescriptor(su, Zu);
            return void 0 !== uu && Xu(uu)
          })) ? WZ[38] : WZ[1]);
          var su, Zu, Xu
        },
        indexPassReplaced: Fu,
        [WZ[145] + "tSubChanged"]: (...uu) => {
          if (uu[WZ[0]] = WZ[1], xu === Lu || Iu) return WZ[40];
          const Eu = tu();
          return Eu !== Lu && Eu !== xu
        },
        dl: (...uu) => {
          IZ(uu[WZ[0]] = WZ[1], uu[-WZ[70]] = vE);
          for (let Eu = WZ[1]; Eu < QE[WZ[0]] + WE; Eu++) {
            const ju = Eu < QE[WZ[0]] ? QE[Eu] : iE[Eu - QE[WZ[0]]];
            ju[WZ[1]] < uu[-WZ[70]] && gu(ju[WZ[9]]) && (uu[-WZ[70]] = ju[WZ[1]])
          }
          return uu[-WZ[70]] < vE ? kE[uu[-WZ[70]]] : WZ[1]
        },
        Zl: () => Au ? mE[WZ[154]] : 8,
        [WZ[146] + WZ[147] + "Subs"]: (...uu) => {
          uu[WZ[0]] = WZ[1];
          const Eu = qu[WZ[65]].ZD[WZ[146] + WZ[147]];
          return typeof Eu === WZ[148] && Eu > WZ[1] ? Eu > WZ[80] ? WZ[80] : Eu : WZ[1]
        },
        ["getCom" + WZ[157]]: (...uu) => {
          IZ(uu[WZ[0]] = WZ[1], uu[WZ[31]] = WZ[2], zu = WZ[1]);
          for (let ju = WZ[1]; ju < ku; ju++) ZE(ou[ju], WZ[57]);
          for (let ju = WZ[1]; ju < fE[WZ[0]]; ju++) Ju[fE[ju][WZ[1]]] && ZE(fE[ju][WZ[9]], WZ[57]);
          const Eu = vZ((() => oZ(atob[WZ[149]](), Cu) ? WZ[1] : WZ[9]));
          Eu === WZ[9] && ZE(WZ[120], WZ[57]), eu();
          const su = Eu === mZ ? mZ : vZ(((...uu) => {
            uu[WZ[0]] = WZ[1];
            const Eu = Object.getOwnPropertyDescriptor(window, "atob");
            return Eu === WZ[2] ? mZ : Eu[WZ[150]] !== WZ[2] ? WZ[9] : WZ[1]
          }));
          su === WZ[9] && ZE(WZ[128], WZ[57]);
          const Uu = su === mZ;
          for (let ju = WZ[1]; ju < CE[WZ[0]] && !Uu; ju++) Ju[CE[ju][WZ[1]]] && ZE(CE[ju][WZ[9]], WZ[57]);
          const Zu = zu > ku;
          uu[WZ[9]] = WZ[42], ku === WZ[1] && (vu > WZ[1] ? uu[WZ[9]] = mu[WZ[1]] : ru ? uu[WZ[9]] = "fp" : Zu || (uu[WZ[9]] = Ju[bE] ? WZ[43] : Ju[cE] ? WZ[132] : WZ[42]));
          for (let ju = WZ[1]; ju < OE[WZ[0]] && !Uu; ju++) Ju[OE[ju][WZ[1]]] && ZE(OE[ju][WZ[9]], WZ[57]);
          const Xu = zu,
            lu = (WZ[1], NZ[WZ[6]])(),
            qu = lu !== WZ[42] && (WZ[1], gE[WZ[131]])(lu);
          qu && !Uu && ZE(lu, WZ[40]), Bu && ZE("ix", WZ[40]), Pu && ZE("il", WZ[40]);
          for (let ju = WZ[1]; ju < vu; ju++) ZE(mu[ju], WZ[57]);
          for (let ju = WZ[1]; ju < YE[WZ[0]]; ju++) Ju[YE[ju][WZ[1]]] && ZE(YE[ju][WZ[9]], WZ[57]);
          Ju[hE] && ZE("mk:lk", WZ[57]);
          const fu = ((...uu) => {
            uu[WZ[0]] = WZ[9];
            for (let Eu = WZ[1]; Eu < ME[WZ[0]]; Eu++)
              if (uu[WZ[1]] === ME[Eu]) return ME[Eu];
            return WZ[42]
          })(Ju[DE]);
          if (fu !== WZ[42] && ZE(fu, WZ[57]), ju !== WZ[42] && Gu(ju.emitReplaced) === WZ[57] && ZE("mk:em", WZ[57]), wE && ZE("3s", WZ[40]), ys.$ && ZE("3b", WZ[40]), eu(), Mu && ZE("3d", WZ[40]), Uu && ZE("3g", WZ[40]), lu === WZ[42] || qu || ZE(lu, WZ[40]), Ou !== WZ[42] && ZE(Ou, WZ[40]), Du === WZ[42] && ju !== WZ[42]) {
            const uu = Gu(ju[WZ[143] + "mMeshHitStack"]);
            typeof uu === WZ[109] && (Du = function(uu, Eu, ju) {
              let su = 0;
              for (; su < ju && -1 === hZ(uu, Eu[su]);) su++;
              return (0, fZ.m)(wZ(uu, su < ju ? Eu[su] : null))
            }(uu, bu, bu[WZ[0]] - WZ[9]))
          }
          var cu;
          if (Du !== WZ[42] && ZE(Du, WZ[40]), Yu === WZ[42] && mE[WZ[5]] !== WZ[42] && IZ((cu = mE[WZ[5]], Yu = (0, fZ.i)(aZ(cu).reader)), hu = PZ(mE[WZ[5]], Gu((() => mE[WZ[31]] === WZ[42] ? WZ[42] : (WZ[1], ys.kb)(mE[WZ[31]]))))), Yu !== WZ[42] && ZE(Yu, WZ[40]), hu !== WZ[42] && ZE(hu, WZ[40]), zu === WZ[1]) return WZ[42];
          if (uu[WZ[9]] === WZ[42] && yu[WZ[1]] && !(WZ[1], fZ[WZ[115]])(nu[WZ[1]]))
            for (let ju = WZ[9]; ju < Xu; ju++)
              if (yu[ju] && (WZ[1], fZ[WZ[115]])(nu[ju])) {
                const uu = nu[ju];
                for (let Eu = ju; Eu > WZ[1]; Eu--) IZ(nu[Eu] = nu[Eu - WZ[9]], yu[Eu] = yu[Eu - WZ[9]]);
                IZ(nu[WZ[1]] = uu, yu[WZ[1]] = WZ[57]);
                break
              } if (IZ(uu[WZ[5]] = WZ[1], uu[WZ[6]] = uu[WZ[9]] === WZ[42] ? WZ[1] : Xu), uu[WZ[6]] > WZ[1] && lu !== WZ[42] && qu && !Uu) {
            for (let Eu = uu[WZ[6]]; Eu > WZ[1]; Eu--) IZ(nu[Eu] = nu[Eu - WZ[9]], yu[Eu] = yu[Eu - WZ[9]]);
            IZ(nu[WZ[1]] = lu, yu[WZ[1]] = WZ[40], uu[WZ[5]] = WZ[9], uu[WZ[6]]++)
          }
          if (uu[-WZ[66]] = WZ[1], Ru++ % WZ[10] === WZ[9])
            for (let ju = WZ[9]; ju < zu; ju++) XE(ju) < XE(uu[-WZ[66]]) && (uu[-WZ[66]] = ju);
          const Nu = nu[uu[-WZ[66]]];
          (yu[uu[-WZ[66]]] ? jE : EE)[Nu] = uE++;
          const gu = uu[-WZ[66]] >= uu[WZ[5]] && uu[-WZ[66]] < uu[WZ[6]];
          if (!yu[uu[-WZ[66]]] || Nu === uu[WZ[9]] || uu[-WZ[66]] === WZ[1] && !gu) return Nu === WZ[134] ? (WZ[1], fZ.B)(Ju[NE], fZ[WZ[31]]) : Nu;
          const pu = (uu[WZ[31]] = uu[WZ[9]]) !== WZ[42] && uu[WZ[31]] !== void WZ[1] ? uu[WZ[31]] : nu[WZ[1]];
          return pu !== sE && IZ(sE = pu, UE = (WZ[1], ys[WZ[71]])(WZ[42])), UE[Nu] ??= (WZ[1], fZ[WZ[140]])(Nu, pu)
        }
      };
      let IE = nE[WZ[137]][WZ[151]];
      const FE = () => aE !== nE[WZ[137]][WZ[151]] ? aE : IE;
      let BE = WZ[1],
        LE = WZ[10],
        tE = WZ[1],
        xE = WZ[1];
      return {
        checks: SE,
        checkEvent: (...uu) => {
          uu[WZ[0]] = WZ[9];
          try {
            const Eu = Uu[dE];
            if (typeof Eu === WZ[118] + WZ[119] && !(uu[WZ[1]] instanceof Eu) && !(WZ[1], ys.G)(uu[WZ[1]])) return aE = nE[WZ[137]].NotEvent, WZ[1];
            if (uu[WZ[1]].isTrusted === WZ[40]) return WZ[1];
            let ju = WZ[1];
            for (const su in uu[WZ[1]]) ju++;
            return ju < WZ[15] ? (aE = nE[WZ[137]]["FewPropertie" + WZ[131]], WZ[1]) : oE()
          } catch {}
          return WZ[1]
        },
        checkPadCall: () => {
          try {
            return oE()
          } catch {
            return WZ[1]
          }
        },
        usedProp: FE,
        watchHeld: (uu, Eu) => {
          let ju;
          const su = pu((() => {
            ju = Eu()
          }));
          iE[WE++] = [uu, () => !su || Eu() !== ju]
        },
        Tb: (...uu) => {
          uu[WZ[0]] = WZ[1];
          const Eu = Fu();
          return (uu => {
            let Eu = WZ[2],
              su = WZ[2];
            if (ju !== WZ[42]) {
              const uu = Gu(ju.kX),
                Uu = "v3" === uu ? WZ[4] : "v5" === uu ? WZ[56] : "v6" === uu ? WZ[18] : WZ[10];
              Uu !== WZ[10] && (LE = Uu);
              const Zu = Gu(ju["inbuil" + WZ[155] + WZ[156]]);
              typeof Zu === WZ[148] && Zu >= WZ[1] && Zu <= WZ[152] && (Zu | WZ[1]) === Zu && (tE = Zu), IZ(Eu = Gu(ju.reflectApplyHit), su = Gu(ju.definerHit))
            }
            const Uu = uu ? WZ[36] : "11" === su ? WZ[152] : "13" === su ? 13 : Eu !== WZ[2] && Eu !== WZ[42] ? WZ[10] : "10" === su ? WZ[15] : "12" === su ? WZ[19] : WZ[1];
            Uu !== WZ[1] && (xE = Uu)
          })(Eu), BE++ % 10 === WZ[1] && (JE(), kZ((() => !oZ(Uu[Zu][WZ[149]][WZ[149]](), Cu))) && (IE = IE === nE[WZ[137]][WZ[153]] ? nE[WZ[137]][WZ[153]] : nE[WZ[137]].Fr), kZ((() => !oZ(Uu[Zu][WZ[149]](), Cu))) && (IE = nE[WZ[137]][WZ[153]])), {
            flags: Eu ? nE[WZ[120]].Butto : WZ[1],
            values: [
              [nE[WZ[154]].PhysicsVersion, LE],
              [nE[WZ[154]]["Inbuil" + WZ[155] + WZ[156]], tE],
              [nE[WZ[154]]["AltCom" + WZ[157]], xE],
              [nE[WZ[154]]["ProbeUsedPro" + WZ[158]], FE()]
            ]
          }
        }
      }
    };
    const FZ = "[bloxd-wasm-client]",
      BZ = "bloxdWasmDownloadFailed",
      LZ = Cj.h,
      tZ = "boot",
      xZ = "playSources",
      TZ = "wasmBuild",
      HZ = "bloxd-wasm-joined",
      AZ = "bloxd-wasm-first-view",
      nZ = "bloxd-wasm-playable-legacy",
      yZ = 1048576,
      zZ = 8 * yZ,
      RZ = 1006,
      uX = 1e3,
      EX = "You lost connection to the server.",
      jX = "general:lostConnection",
      sX = 1048576,
      UX = 5e3,
      ZX = 100,
      XX = [2e3, 1e4, 3e4],
      lX = 3e4;
    let qX = null,
      fX = null,
      CX = !1,
      bX = !1,
      cX = !1,
      NX = null,
      OX = null,
      YX = null,
      hX = null,
      DX = null,
      gX = null,
      MX = null;
    const eX = new class {
      constructor(uu, Eu) {
        let ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => performance.now();
        this.master = uu, this.soundOn = Eu, this.now = ju, this.player = null, this.local = [], this.stopped = !1
      }
      get loaded() {
        return null !== this.player
      }
      get queued() {
        return this.local.length
      }
      prepare() {
        var uu;
        null === (uu = this.player) || void 0 === uu || uu.prepare()
      }
      preload(uu) {
        var Eu;
        this.stopped || (null === (Eu = this.player) || void 0 === Eu || Eu.preload(uu))
      }
      endSession() {
        var uu, Eu;
        null === (uu = this.player) || void 0 === uu || uu.cancelPreload(), null === (Eu = this.player) || void 0 === Eu || Eu.freeSheetsAfterGame()
      }
      load(uu) {
        if (null !== this.player || this.stopped) return;
        this.player = uu, uu.setMaster(this.master, this.soundOn);
        const Eu = this.now(),
          ju = this.local;
        this.local = [];
        for (const Uu of ju)
          if (!(Uu.stopped || !Uu.loop && Eu - Uu.at >= 300)) try {
            this.start(Uu, uu, Eu)
          } catch (su) {
            console.error("[bloxd-wasm-client] a queued sound wouldn't start", su)
          }
      }
      start(uu, Eu, ju) {
        const {
          name: su,
          pos: Uu,
          ear: Zu,
          maxHearDist: Xu,
          refDistance: lu,
          loop: qu,
          fade: fu
        } = uu, Cu = Eu.playGame(su, xE(uu, ju), Uu, Zu, Xu, lu, qu);
        if (uu.sound = Cu, 1 !== uu.rate && Cu.rate(uu.rate), null !== uu.panner && Cu.setPannerAttr(uu.panner), null !== uu.moved && Cu.setPosition(uu.moved), null !== fu && ju - fu.at < fu.ms) {
          const Eu = tE(this.master);
          Eu > 0 ? Cu.fade(0, uu.volume * Eu, fu.at + fu.ms - ju) : Cu.setRelativeVolume(uu.volume)
        }
      }
      onAudioEvent(uu, Eu, ju, su) {
        var Uu, Zu;
        return null === (Uu = null === (Zu = this.player) || void 0 === Zu ? void 0 : Zu.onAudioEvent(uu, Eu, ju, su)) || void 0 === Uu || Uu
      }
      applyListener(uu) {
        var Eu;
        null === (Eu = this.player) || void 0 === Eu || Eu.applyListener(uu)
      }
      playGame(uu, Eu, ju, su, Uu, Zu, Xu) {
        if (this.stopped) return LE.e;
        if (this.player) return this.player.playGame(uu, Eu, ju, su, Uu, Zu, Xu);
        const lu = this.now();
        this.local = this.local.filter((uu => !uu.stopped && (uu.loop || lu - uu.at < 300)));
        const qu = {
          name: uu,
          volume: tE(Eu),
          fade: null,
          pos: ju && [ju[0], ju[1], ju[2]],
          ear: su && [su[0], su[1], su[2]],
          maxHearDist: Uu,
          refDistance: Zu,
          loop: Xu,
          rate: 1,
          panner: null,
          moved: null,
          at: lu,
          stopped: !1,
          sound: null
        };
        this.local.push(qu);
        const fu = {
          stop: () => {
            var uu;
            return qu.stopped = !0, null === (uu = qu.sound) || void 0 === uu || uu.stop(), fu
          },
          fade: (uu, Eu, ju) => {
            if (qu.sound) return qu.sound.fade(uu, Eu, ju), fu;
            const su = tE(this.master),
              Uu = tE(su > 0 ? Eu / su : Eu > 0 ? qu.volume : 0),
              Zu = this.now(),
              Xu = xE(qu, Zu);
            return qu.volume = Uu, qu.fade = ju > 0 && Xu !== Uu ? {
              from: Xu,
              at: Zu,
              ms: ju
            } : null, fu
          },
          rate: uu => (qu.sound ? qu.sound.rate(uu) : qu.rate = uu, fu),
          getVolume: () => qu.sound ? qu.sound.getVolume() : qu.volume * tE(this.master),
          getRelativeVolume: () => qu.sound ? qu.sound.getRelativeVolume() : qu.volume,
          setRelativeVolume: uu => (qu.sound ? qu.sound.setRelativeVolume(uu) : (qu.volume = tE(uu), qu.fade = null), fu),
          setPannerAttr: uu => (qu.sound ? qu.sound.setPannerAttr(uu) : qu.panner = {
            ...uu
          }, fu),
          setPosition: uu => (qu.sound ? qu.sound.setPosition(uu) : qu.moved = [uu[0], uu[1], uu[2]], fu)
        };
        return fu
      }
      setMaster(uu, Eu) {
        var ju;
        this.master = uu, this.soundOn = Eu, null === (ju = this.player) || void 0 === ju || ju.setMaster(uu, Eu)
      }
      stop() {
        var uu;
        this.stopped = !0, null === (uu = this.player) || void 0 === uu || uu.stopAll();
        for (const Eu of this.local) Eu.stopped = !0;
        this.local = []
      }
    }((0, vE.b)(), !0);
    let GX = {
        wasm: "unknown",
        client: String(CE.b)
      },
      pX = null,
      wX = () => {};
    const JX = new Promise((uu => {
      wX = uu
    }));
    let dX = () => {};
    const aX = new Promise((uu => {
      dX = uu
    }));
    let PX, oX = null,
      kX = null,
      mX = null,
      vX = null,
      KX = null,
      VX = null,
      rX = null,
      QX = null,
      iX = null,
      WX = null,
      SX = null,
      IX = null,
      FX = null,
      BX = null,
      LX = null,
      tX = null,
      xX = null,
      TX = null,
      HX = null,
      AX = !1,
      nX = null;
    const yX = new Set,
      zX = new Set;

    function RX(uu) {
      if (!yX.has(uu)) {
        yX.add(uu);
        for (const ju of zX) try {
          ju(uu)
        } catch (Eu) {
          console.error(`${FZ} a startup listener threw`, Eu)
        }
      }
    }

    function ul(uu) {
      AX = !0, uu.isStopped || RX("texturesIn")
    }
    let El = 1,
      jl = -1 / 0,
      sl = -1 / 0,
      Ul = -1 / 0,
      Zl = !1,
      Xl = null,
      ll = !1,
      ql = !1,
      fl = 0,
      Cl = null,
      bl = !1;
    const cl = {
      dropped: -1 / 0,
      pause: -1 / 0,
      backlog: -1 / 0
    };
    let Nl = 0,
      Ol = 0,
      Yl = null,
      hl = null,
      Dl = null,
      gl = null;
    const Ml = new WeakMap;
    let el = null,
      Gl = null,
      pl = !1,
      wl = null,
      Jl = null,
      dl = null,
      al = null,
      Pl = null,
      ol = null,
      kl = 0;
    const ml = new Set;
    let vl = 0,
      Kl = 0,
      Vl = 0,
      rl = null,
      Ql = null,
      il = null,
      Wl = null,
      Sl = -1 / 0,
      Il = null;
    const Fl = new Set;
    let Bl = !1,
      Ll = null;
    const tl = new Map,
      xl = new Set;
    let Tl = !1;
    const Hl = {
      adapter: null,
      boundAtMs: null,
      indirectHangs: null,
      restoresSkipped: null
    };
    let Al = null,
      nl = () => [0, 0],
      yl = () => {},
      zl = () => {},
      Rl = null,
      uq = null;
    const Eq = new class {
      constructor(uu) {
        this.reached = uu, this.next = 1
      }
      observe(uu) {
        if (!(uu < this.next)) {
          for (; this.next <= uu;) this.next *= 2;
          this.reached(uu)
        }
      }
    }((uu => {
      console.warn(`${FZ} chunk cancels from the server this session: ${uu}`)
    }));
    let jq = 1,
      sq = null,
      Uq = null,
      Zq = null,
      Xq = null,
      lq = null,
      qq = !1,
      fq = !1,
      Cq = 0,
      bq = null,
      cq = !1,
      Nq = null,
      Oq = null,
      Yq = null,
      hq = !1;
    const Dq = new class {
        constructor(uu) {
          this.TY = uu, this.lossPending = !1, this.undrawnSinceMs = null, this.lastFrameMs = 0, this.shown = !1
        }
        deviceLost() {
          this.lossPending = !0
        }
        frame(uu, Eu, ju) {
          (0, QE.e)(uu) && (this.lossPending = !1);
          const su = ju - this.lastFrameMs;
          this.lastFrameMs = ju, this.lossPending && Eu && (0, QE.k)(uu) ? (null === this.undrawnSinceMs || su > 1e3) && (this.undrawnSinceMs = ju) : this.undrawnSinceMs = null, this.show(null !== this.undrawnSinceMs && ju - this.undrawnSinceMs >= 2e3)
        }
        stop() {
          this.lossPending = !1, this.undrawnSinceMs = null, this.show(!1)
        }
        show(uu) {
          uu !== this.shown && (this.shown = uu, this.TY(uu))
        }
      }((uu => {
        qu.h.TY(Ou.e, uu)
      })),
      gq = new class {
        constructor(uu) {
          let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => performance.now();
          this.HN = uu, this.now = Eu, this.lostAtMs = null, this.asked = !1, this.watched = new WeakSet
        }
        watch(uu, Eu) {
          this.watched.has(uu) || (this.watched.add(uu), uu.addEventListener("webglcontextlost", (() => {
            Eu() && this.contextLost()
          })), uu.addEventListener("webglcontextrestored", (() => {
            Eu() ? this.contextRestored() : this.take()
          })))
        }
        frame(uu, Eu) {
          (0, QE.k)(uu) && Eu && null !== this.lostAtMs && this.now() - this.lostAtMs >= 1e3 && (this.asked = !0)
        }
        contextLost() {
          null === this.lostAtMs && (this.lostAtMs = this.now(), this.asked = !1)
        }
        contextRestored() {
          const uu = this.take();
          if (null !== uu) {
            const Eu = uu.asked ? "restore_context" : "natural";
            this.HN(`webgl_restored_${Eu}_${uu.delay}`, `WebGL2 context restored (${Eu}, wasm)`)
          }
        }
        gaveUp() {
          const uu = this.take();
          if (null !== uu) {
            const Eu = uu.asked ? "restore_tried" : "restore_untried";
            this.HN(`webgl_rejoin_${Eu}_${uu.delay}`, "WebGL2 context not restored: rejoining (wasm)")
          }
        }
        take() {
          if (null === this.lostAtMs) return null;
          const uu = (0, iE.n)(this.now() - this.lostAtMs);
          return this.lostAtMs = null, {
            delay: uu,
            asked: this.asked
          }
        }
      }(vj.reportRenderRecovery);
    let Mq = !1,
      eq = !0,
      Gq = null,
      pq = !1,
      wq = !1,
      Jq = !1;

    function dq() {
      return YX ??= Promise.all([ju.e(201), ju.e(144), ju.e(60)]).then((() => ju(51234))).then((uu => (OX = uu, Object.assign(globalThis, {
        bloxdPreviewPage: uu.pagePreviews()
      }), uu)), (uu => {
        throw YX = null, uu
      })), YX
    }

    function aq() {
      return NX ??= ju.e(58).then((() => ju(51252))).catch((uu => {
        throw NX = null, new vu.e(uu)
      })), NX
    }
    class Pq {
      constructor() {
        this.host = null
      }
      open(uu) {
        return null !== this.host ? uu(this.host) : dq().then((Eu => (this.host ??= new Eu.WasmPreviewHost(Eu.pagePreviews()), uu(this.host))))
      }
      openMob(uu) {
        return this.open((Eu => Eu.openMob(uu)))
      }
      openPet(uu) {
        return this.open((Eu => Eu.openPet(uu)))
      }
      openMobLineup(uu) {
        return this.open((Eu => Eu.openMobLineup(uu)))
      }
      openCharacter(uu, Eu) {
        return this.open((ju => ju.openCharacter(uu, Eu)))
      }
    }

    function oq() {
      cX || (cX = !0, dU.i.setHost(new Pq), (0, Qj.m)(), GU.g.setFollower(rf), Object.assign(globalThis, {
        bloxdPreviews: dU.i
      }))
    }

    function kq() {
      dq().then((uu => {
        uu.pagePreviews().prefetch()
      }), (() => {}))
    }

    function mq() {
      let uu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      if (bX) return;
      bX = !0, Mq = "play" === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "shell"), eq = !Mq, console.info(`${FZ} starting`), CX || (CX = !0, (0, Ou.N)(new IE(nq, Uf)), (0, cu.k)(new FE), (0, Ou.J)(new BE), (0, Ou.C)()), Mq && qu.h.subscribe("appManagerUpdated|gameState", Aq), oq(), (0, vj.setCrashScreen)((uu => {
        let {
          text: Eu,
          reload: ju
        } = uu;
        ! function(uu, Eu) {
          var ju, su;
          if (pq) return;
          pq = !0, (0, Wj.N)(), null === (ju = Il) || void 0 === ju || ju.abort(), Il = null, pU.e.release();
          const Uu = Mq ? null !== (su = uu.cancel) && void 0 !== su ? su : "general:back" : null;
          Ws({
            ...uu,
            cancel: Uu
          }).then((uu => {
            uu && Eu && wq ? ((0, GE.v)("reloadOntoJs"), (0, Ru.j)(GE.z)) : uu && Eu ? (0, Ru.m)() : Mq && (0, Ru.f)("/")
          }))
        }(Eu, ju)
      })), (0, bU.l)(), (0, mE.f)();
      let Eu = null;
      try {
        Eu = iZ("qtg7vtcfx3", (() => {
          var uu, Eu;
          return null !== (uu = null === (Eu = oX) || void 0 === Eu ? void 0 : Eu.ws) && void 0 !== uu ? uu : null
        }), uu, "euyfsxnmtv")
      } catch (Uu) {
        console.error(`${FZ} probes`, Uu)
      }
      const su = function() {
        const uu = (0, Hs.n)(),
          Eu = (0, Hs.g)();
        let ju = !1;
        return su => {
          uu && !ju && (ju = !0, (0, vj.reportStaleBuildReload)(uu, Eu, su))
        }
      }();
      Wf(), Mq || function() {
        const uu = function(uu) {
          var Eu;
          const ju = new URLSearchParams(uu),
            su = ju.get("game");
          return su ? {
            game: su,
            lobby: null !== (Eu = ju.get("lobby")) && void 0 !== Eu ? Eu : null
          } : null
        }(window.location.search);
        if (uu) return (0, bE.l)(uu.game) && Wf().request(), void Vq(uu.game, uu.lobby);
        const Eu = new URLSearchParams(window.location.search).get("ws");
        if (!Eu) return;
        JX.then((uu => {
          uu && async function(uu, Eu) {
            try {
              await (0, vu.m)(uu), wl = ff(new WebSocket(Eu)), null !== wl && pU.e.setGame(null), vq()
            } catch (Uu) {
              console.error(`${FZ} ?ws=${Eu} did not attach`, Uu)
            }
          }(uu, Eu)
        }))
      }(), async function(uu) {
        var Eu, su, Zu, Xu, lu, fu;
        if ("undefined" === typeof WebAssembly) return df("noWebAssembly", "unsupported", "This browser has no WebAssembly"), null;
        const Cu = (0, vU.U)(),
          bu = await async function(uu, Eu) {
            const ju = (0, Cj.t)(uu) ? Pf(uu, Eu) : null;
            if (null === ju || void 0 === ju || !ju.retries) return uu;
            console.warn(`${FZ} ${ju.detail}: picking again in ${af} ms`), await new Promise((uu => {
              setTimeout(uu, af)
            }));
            const su = await (0, vU.V)();
            if (!(0, Cj.t)(su)) {
              var Uu;
              (0, vj.reportNoBackendRetry)("reprobed", ju.decline, ju.detail, {
                ...ju.details,
                backend: null !== (Uu = null === su || void 0 === su ? void 0 : su.backend) && void 0 !== Uu ? Uu : "none"
              }), null !== su && (0, vU.S)(su.backend)
            }
            return su
          }(await (0, vU.O)(), Cu);
        if ((0, vj.setCrashBackend)((0, Cj.t)(bu) ? "unsupported" : null !== (Eu = null === bu || void 0 === bu ? void 0 : bu.backend) && void 0 !== Eu ? Eu : "none"), (0, Cj.t)(bu)) return function(uu) {
          let {
            decline: Eu,
            detail: ju,
            details: su,
            retries: Uu
          } = uu;
          if (Uu && (0, GE.o)()) return (0, vj.reportNoBackendRetry)("reload", Eu, ju, su), void of (`${ju}, again after ${af} ms`);
          df("browser", Eu, ju, Uu ? {
            ...su,
            afterReload: String(GE.u)
          } : su)
        }(Pf(bu, Cu)), null;
        if ((0, yU.p)("render")) try {
          const {
            startRenderDebug: uu
          } = await Promise.all([ju.e(78), ju.e(49)]).then((() => ju(4866)));
          uu(bu)
        } catch (OE) {
          console.warn("The render debug topic didn't load", OE)
        }
        if ((0, yU.p)("renderlite")) try {
          const {
            startRenderLite: uu
          } = await Promise.all([ju.e(273), ju.e(50)]).then((() => ju(51260)));
          Zq = uu(bu)
        } catch (OE) {
          console.warn("The renderlite debug topic didn't load", OE)
        }
        if ((0, yU.p)("renderprobe")) try {
          const {
            startRenderProbe: uu
          } = await ju.e(51).then((() => ju(51269)));
          uu(bu)
        } catch (OE) {
          console.warn("The renderprobe debug topic didn't load", OE)
        }
        if ("webgl" === (null === bu || void 0 === bu ? void 0 : bu.backend) && Mq && "wasm" !== (0, GE.h)(window.location.search)) {
          const uu = ts(bu);
          null !== uu && (0, pE.i)(uu)
        }
        const cu = null !== (su = null === bu || void 0 === bu ? void 0 : bu.backend) && void 0 !== su ? su : null;
        Hl.adapter = null !== (Zu = null === bu || void 0 === bu ? void 0 : bu.adapter) && void 0 !== Zu ? Zu : null, Hl.boundAtMs = null, Hl.indirectHangs = null, Hl.restoresSkipped = null;
        const Nu = !(0, Cj.jb)();
        null === bu || (0, Cj.K)(bu.reason) || console.info(`${FZ} drawing with ${bu.backend}: ${bu.reason}`);
        const Ou = (0, vU.B)();
        dX(!0), (0, vu.A)((uu => {
          try {
            null !== cu && (Rl = uu.startSkyFeed, Kf(), function(uu) {
              var Eu, ju;
              nl = uu.rasterText, dl = uu.setTextLocalPlayer, uu.setTextLocalPlayer(null !== (Eu = null === (ju = Jl) || void 0 === ju ? void 0 : ju.info.playerDbId) && void 0 !== Eu ? Eu : null), yl = uu.drainTextRerasters, zl = uu.loadTextIcons, uu.warmText((() => qq)), uu.textChanged(), qq && setTimeout(zl, 0)
            }(uu), uq = uu.startShellAnalytics, tf())
          } finally {
            Jq || (Xq = uu.followMenuPrefs({
              setSoundPrefs: Xf,
              setEnvPrefs: lf,
              setUiPrefs: Zf,
              setLookPrefs: qf
            }))
          }
        })), (0, vu.p)(eX).catch((uu => {
          console.warn(`${FZ} the game code did not load: a join asks again`, uu)
        }));
        const Yu = (0, vU.m)(bu);
        let hu, Du;
        Yu.catch((() => {})), "loading" === (0, YE.C)() && Gu();
        try {
          hu = function(uu) {
            const Eu = null !== uu && void 0 !== uu ? uu : document.createElement("canvas");
            Eu.id = "wasm-game-canvas", gq.watch(Eu, (() => null !== gl && XC())), (0, SU.j)();
            const ju = (0, SE.g)(),
              su = (0, SE.i)(ju);
            Eu.style.cssText = "position:absolute;top:0;left:0;display:block;touch-action:none;outline:none;background:#000", (0, WU.f)(Eu, su), (0, SE.d)(Eu, ju), Eu.width = su.bufferWidth, Eu.height = su.bufferHeight;
            const Uu = document.createElement("div");
            return Uu.style.cssText = "position:fixed;top:0;right:0;bottom:0;left:0;overflow:hidden", Uu.append(Eu), yq(Uu, eq), Gq = Uu, document.body.append(Uu), Eu
          }(null === cu ? null : await (await dq()).pagePreviews().beginSession())
        } catch (Uu) {
          return await PC({
            site: TZ,
            error: Uu
          }, (() => {
            (0, vj.showUnsupported)((0, rs.m)("fetch"), ZZ.f.fetch, `the previews did not load: ${String(Uu)}`)
          })), null
        }
        Gu();
        try {
          Du = await Yu
        } catch (Uu) {
          return await PC({
            site: TZ,
            error: Uu
          }, (() => {
            (0, vj.showUnsupported)((0, rs.m)("fetch"), ZZ.f.fetch, `the ${null!==cu&&void 0!==cu?cu:"client"} build did not load: ${String(Uu)}`)
          })), null
        }
        const Mu = (0, vU.h)(),
          eu = !Mu && !0 !== Bj.l.getItem(BZ),
          pu = !Mu && "loading" === (0, YE.C)();
        await (0, KU.b)(Du, {
          reloadFailedDownload: eu
        }), pu && !(0, YE.S)() && await (0, KU.b)(Du, {
          reloadFailedDownload: eu
        });
        gu = performance.now();
        const wu = GX;
        if (!(0, YE.S)()) {
          (0, YE.P)() && Bj.l.setItem(BZ, !0);
          const uu = (0, YE.r)();
          if ("call" === uu) cC({
            site: cj.r,
            error: (0, YE.q)(),
            header: null
          }, wu);
          else {
            const Eu = null !== uu && void 0 !== uu ? uu : "instantiate",
              ju = () => {
                (0, vj.showUnsupported)((0, rs.m)(Eu), ZZ.f[Eu], (0, YE.i)())
              };
            if ("compile" !== uu && "instantiate" !== uu || !kf())
              if ("fetch" === Eu) {
                const uu = [Du.url().href, ME.g.url().href];
                await PC({
                  site: TZ,
                  error: (0, YE.i)(),
                  urls: uu
                }, ju)
              } else ju();
            else {
              const Eu = (0, YE.i)(),
                ju = (0, RE.d)((0, YE.q)());
              if (ju && (0, GE.o)()) return (0, vj.reportCountedLoadFallback)((0, rs.m)(uu), ZZ.f[uu], Eu, "wasmReload"), of(`the wasm client ran out of memory to ${uu} here (${Eu})`), null;
              (0, vj.reportCountedLoadFallback)((0, rs.m)(uu), ZZ.f[uu], Eu, ju ? "declined" : "pageAlone"), mf(`the wasm client did not ${uu} here (${Eu})`, ju ? "oom" : null)
            }
          }
          return null
        }(0, hE.T)(Du.url()) && (0, vj.reportUnstreamedCoreLoad)();
        const Ju = (0, YE.F)();
        let du, au = wu;
        try {
          au = {
            ...wu,
            wasm: Ju.hb()
          };
          const {
            Ph: uu
          } = Du.bindings, Eu = uu.lsu();
          if (Eu !== nE.x) return cC({
            site: cj.b,
            error: `core ABI ${Eu}, page ABI ${nE.x}`,
            header: null
          }, au), null;
          const [ju, su] = (0, nE.ve)();
          du = new uu(ju, su)
        } catch (Uu) {
          return cC({
            site: cj.b,
            error: Uu,
            header: null
          }, au), null
        }
        GX = au, pX = Du.bindings;
        const Pu = new cj.h(du, YE.z, {
          onCrash: uu => {
            var Eu;
            null === (Eu = Zq) || void 0 === Eu || Eu.crashed(uu),
              function(uu, Eu, ju, su) {
                if ("webgpu" !== Eu || (0, vU.e)()) return !1;
                const Uu = function(uu) {
                  if (uu.site === cj.e && (0, Cj.x)(uu.error)) return "frames_refused";
                  return uu.site === LZ && (0, Cj.A)(uu.error) ? "start_failed" : null
                }(uu);
                if (null === Uu) return !1;
                if (null !== (0, Cj.gb)(Uu, su, (0, bj.b)(uu.error))) return (0, vj.countRenderLost)(Uu, uu.error, Hl), !1;
                return VE.B.reloaded(null, !1), (0, vj.reportRenderReload)("webgpu", "start_failed" === Uu ? 0 : 1, ju, {
                  cause: Uu,
                  error: uu.error,
                  context: Hl,
                  session: hC(null)
                }), nf(), !0
              }(uu, cu, au, Nu) || cC(uu, au)
          },
          onNetEvent: Af,
          onReconnectGrace: pf,
          onJoinPreloadEnded: Gf,
          onCoreErrors: (uu, Eu) => {
            var ju, su;
            uu.some((uu => {
              let {
                code: Eu
              } = uu;
              return Eu === nE.D.RenderDeviceLost
            })) && ((0, vU.x)(), Dq.deviceLost(), "webgpu" === cu && ((0, bj.d)(Al), VE.B.lost())), null === (ju = Zq) || void 0 === ju || ju.coreErrors(uu);
            const Uu = () => {
              (0, vj.reportCoreErrors)(uu, Eu, au, ((uu, Eu) => {
                var ju;
                return uu === nE.D.EnvUnknownSky ? (0, vj.unknownSkyWords)(wE.e.get("skyBox")) : uu === nE.D.RenderDeviceLost ? (0, vj.deviceLossWords)(Eu, Hl.boundAtMs) : null === (ju = Al) || void 0 === ju ? void 0 : ju.qsu(uu, Eu)
              }))
            };
            uu.some((uu => {
              let {
                code: Eu
              } = uu;
              return Eu === nE.D.EnvUnknownSky
            })) ? queueMicrotask(Uu) : Uu(), null === (su = nX) || void 0 === su || su.coreErrors(uu)
          },
          onRenderReload: (uu, Eu, ju) => {
            ! function(uu, Eu, ju, su, Uu, Zu) {
              var Xu;
              if ((0, vU.e)()) return;
              const lu = Eu === nE.Zc.WEBGPU,
                qu = su === nE.Zc.PIPELINE_FAILED ? "pipeline_failed" : "lost",
                fu = su === nE.Zc.RESTORE_LOST,
                Cu = lu && (0, VE.k)(Hl.adapter, ju, "lost" === qu, fu),
                bu = (0, bj.h)(Al);
              null === (Xu = Zq) || void 0 === Xu || Xu.reload(lu, ju, qu, null === bu || void 0 === bu ? void 0 : bu.message);
              const cu = lu ? (0, Cj.gb)(qu, Uu, bu) : null;
              if (null !== cu) {
                (0, vj.countRenderLost)(qu, bu, Hl);
                const Eu = void 0 === bu ? "" : ` (${bu.message})`;
                return void uu.crash(vj.RENDER_RELOAD_SITE, new Error(`${(0,vj.renderReloadMessage)("webgpu",qu,ju)} and ${cu}${Eu}`))
              }
              const Nu = lu ? "webgpu" : "webgl1" === Zu ? "webgl1" : "webgl";
              "lost" === qu && (0, vU.x)();
              lu || ((0, GE.s)(), gq.gaveUp());
              (0, vj.reportRenderReload)(Nu, ju, GX, {
                from: "game",
                cause: qu,
                restoreLost: fu,
                adapterRemembered: Cu,
                error: bu,
                context: Hl,
                session: hC(uu.sunShadowsHeld())
              }), nf()
            }(Pu, uu, Eu, ju, Nu, cu)
          },
          onEnvEvent: uu => {
            var Eu;
            uu.kind === nE.T.SkyImages ? null === (Eu = tX) || void 0 === Eu || Eu.onEvent(uu.payload) : uu.kind === nE.T.EnvLighting && (xX = 1 === uu.payload[0])
          },
          onImages: uu => {
            var Eu;
            null === (Eu = TX) || void 0 === Eu || Eu.onEvent(uu)
          },
          onModelRequest: uu => {
            var Eu;
            null === (Eu = FX) || void 0 === Eu || Eu.request(uu)
          },
          onModelTaken: (uu, Eu) => {
            var ju;
            null === (ju = FX) || void 0 === ju || ju.taken(uu, Eu)
          },
          onTerrainTexturesWanted: () => {
            queueMicrotask((() => {
              ! function(uu, Eu) {
                const ju = MX;
                if (null === ju || uu.isStopped) return;
                ju.restore((uu => {
                  (0, vj.reportTerrainTextureFailure)(uu, Eu)
                })).then((Eu => {
                  !1 !== Eu || uu.isStopped ? !0 === Eu && console.info(`${FZ} terrain textures handed over again after the renderer lost them`) : console.warn(`${FZ} the terrain textures couldn't be handed over again: the terrain draws blank`)
                }))
              }(Pu, au)
            }))
          },
          onKeepAlive: uu => {
            const Eu = null === gl ? void 0 : Ml.get(gl);
            void 0 !== Eu && Rs(Eu, uu)
          },
          onSends: () => {
            ! function(uu) {
              const Eu = performance.now();
              if (uu.forEachNetOut(fC), ZC(uu), (0, cj.E)(uu, {
                  worldgen: mX,
                  mesh: KX
                }), null !== Uq) try {
                Uq.sendsWent(uu, Eu, performance.now())
              } catch (Uu) {
                Hf(Uu)
              }
            }(Pu)
          }
        });
        if (hX = Pu, null === (Xu = WE.d.wasmNetReady) || void 0 === Xu || Xu.call(WE.d, (() => Pu.isStopped ? 0 : Pu.netKeptFrames)), null !== uu) {
          Pu.setAntiCheatProbes(KZ(YE.z, uu.checks)), uu.watchHeld(rZ.CoreFrame, (() => Pu.frame)), uu.watchHeld(rZ.GlueFrame, (() => du.frame));
          const Eu = function(uu, Eu) {
            const ju = new VZ(Eu);
            let su = !1;
            ju.Tb(uu.Tb());
            const Uu = (0, ys.db)((() => {
              ju.Tb(uu.Tb())
            }), QZ);
            let Zu = 6 * (0, ys.Q)() | 0;
            const Xu = () => {
              ++Zu < 6 || (Zu = 0, uu.checks.stackCheck() && (su = !0))
            };
            (0, cZ.j)(Xu);
            const lu = () => {
              const Eu = uu.checkPadCall();
              0 !== Eu && ju.setFlags(Eu)
            };
            return (0, bZ.i)(lu), {
              onSend: Xu,
              beforeFrame: () => {
                su && ju.originStackHit() && (su = !1)
              },
              onEvent: Eu => {
                const su = uu.checkEvent(Eu);
                ju.value(nE.j.ProbeUsedProp, uu.usedProp()), 0 !== su && ju.setFlags(su)
              },
              stop: () => {
                (0, ys.gb)(Uu), (0, cZ.f)(Xu), (0, bZ.h)(lu)
              }
            }
          }(uu, ((uu, Eu, ju) => {
            let su = !1;
            return eC(Pu, (() => {
              su = Pu.rings.input.writeRecord(nE.sb.AntiCheat, uu, Eu, ju, 0)
            })), su
          }));
          Pu.isStopped ? Eu.stop() : SX = Eu
        }
        qX = (uu, Eu, ju) => Pu.rings.cmd.writeCmd(uu, Eu, ju), fX = uu => Pu.rings.cmd.growForCmd(uu), bl = !1, Kf(), (0, vu.B)(Pu, {
          core: du,
          memory: YE.z,
          staleOr: (uu, Eu, ju, su) => PC({
            site: uu,
            error: Eu
          }, ju, su),
          reportReplayFault: (uu, Eu) => {
            (0, vj.reportReplayFault)(uu, Eu, GX)
          },
          audio: eX,
          options: wE.e,
          onNetEvent: Af,
          sessionInfo: uu => {
            var Eu;
            return (null === (Eu = Jl) || void 0 === Eu ? void 0 : Eu.conn) === uu ? Jl.info : null
          },
          onEventOverflow: Tq,
          replayShaderPack: uu => {
            var Eu;
            null === (Eu = nX) || void 0 === Eu || Eu.replay(uu)
          },
          hasPackModel: uu => {
            var Eu, ju;
            return null !== (null !== (Eu = null === (ju = Vf()) || void 0 === ju ? void 0 : ju.modelUrl(uu)) && void 0 !== Eu ? Eu : null)
          },
          beforeWrite: () => (!ll && Pu.rings.net.cursor > 0 && Rf(Pu, !1, "all"), !Pu.isStopped),
          beforeOp: () => (!ll && Pu.netWrittenSinceFrame > 0 && Rf(Pu, !1, "budget"), !Pu.isStopped)
        }), (0, mu.F)({
          lockPointer: () => {
            if (!Zs(hu)) return !1;
            try {
              Promise.resolve(hu.requestPointerLock()).catch((() => {}))
            } catch {
              return !1
            }
            return !0
          },
          unlockPointer: () => {
            (0, xj.d)()
          },
          leaveGame: () => {
            xq()
          },
          canvas: () => hu
        }), IX = (0, mu.u)((() => {
          var uu;
          const Eu = (0, vu.l)();
          null === (uu = (0, vu.w)()) || void 0 === uu || uu.followCursorAim(!0 === (null === Eu || void 0 === Eu ? void 0 : Eu.isSessionLive) ? Eu : null)
        })), Yl && Pu.setUiPrefs(Yl);
        hl && Pu.setEnvPrefs(hl);
        Dl && Pu.setLookPrefs(Dl);
        const ou = QU ? iU(QU.preventMovement) : null;
        ou && sf(ou);
        const ku = (0, Pj.k)(),
          Ku = (0, Pj.g)(Pu, ku);
        iX = ku.basis, (0, Fj.k)(null === Ku ? null : (0, aj.s)(Ku)), QX = Ku;
        const Vu = (0, DE.b)();
        let ru = 1 / 0,
          Qu = !0,
          iu = ku.shedFootprintBytes;
        const Wu = new CU.c(Vu, (() => du.Lh()), (uu => {
          Pu.crash(cj.l, uu)
        }));
        VX = Wu, rX = Wu, null !== Ku && Wu.setCeiling(Math.min((0, CU.p)(Ku), ru, (0, Pj.o)()));
        if (Qu) {
          Wu.setShed((uu => {
            const Eu = Pu.shedMemory("joinReserve" !== uu);
            return null !== Eu && (null === QX || Eu < QX) && (QX = Eu, (0, Fj.k)((0, aj.s)(Eu))), Eu
          }), ((uu, Eu, ju) => {
            1 === Eu ? (0, vj.reportMemoryShed)(uu, ju, GX) : console.warn(`${FZ} wasm memory: shed again (${uu}): shed ${Eu}`, ju.wasmMemoryShed)
          }), (() => Pu.addDistanceInUse()));
          const uu = (0, Cj.Z)(Ju);
          Wu.setFootprint(new nU(iu, {
            storedChunks: () => du.fsu(),
            gpuBytes: () => {
              var Eu;
              return null !== (Eu = null === uu || void 0 === uu ? void 0 : uu.Csu()) && void 0 !== Eu ? Eu : 0
            },
            jsHeapBytes: AU
          }))
        }
        window.addEventListener("pagehide", (() => {
          VX === Wu && (Wu.refreshStats(), MC(Wu))
        })), window.addEventListener("pagehide", yf), window.addEventListener("pagehide", zf), !1;
        const [Su, Iu] = (0, rj.h)();
        lq = (0, ij.e)((uu => Pu.setChunkAddDistance(uu.horizontal, uu.vertical)), {
          horizontal: Su,
          vertical: Iu
        }), Pu.setAmbientOcclusion(!0 !== Bj.k.getItem("disableAmbientOcclusion")), Pu.setPoseLod(!0 !== Bj.k.getItem(NE.Q)), Pu.setDebugLog(nE.I.Look, !0), Pu.setDebugLog(nE.I.CameraSet, !0), (0, RU.startLookDebug)("wasm", {
          look: () => Pu.takeDebugLog(nE.I.Look),
          cameraSets: () => Pu.takeDebugLog(nE.I.CameraSet)
        }), (0, yU.p)("remesh") && (Pu.setDebugLog(nE.I.Remesh, !0), Fu = () => Pu.takeDebugLog(nE.I.Remesh), UZ = new sZ((0, uZ.k)(), Fu));
        var Fu;
        const Bu = function(uu, Eu, ju, su) {
          const Uu = new ps,
            Zu = uu => Bj.k.getItem(uu);
          Uu.sync(Zu, Eu), (0, rE.V)();
          const Xu = (0, qu.l)("customBindingsChanged", (() => {
            Uu.sync(Zu, Eu)
          }));
          (0, Tj.o)(Eu);
          const lu = new Set,
            fu = (0, mu.u)((() => {
              var uu;
              lu.size > 0 && Ps() && !0 === (null === (uu = (0, vu.l)()) || void 0 === uu ? void 0 : uu.localPlayerAlive()) && qu.h.TY("usedKeyboard")
            })),
            Cu = Ns.c.heldSizer((() => (0, SE.q)(uu))),
            bu = cs(uu, Eu, {
              prevents: uu => Uu.prevents(uu),
              keyPressed: uu => {
                Uu.moves(uu) && (lu.add(uu), Ps() && qu.h.TY("usedKeyboard"))
              },
              keyReleased: uu => {
                lu.delete(uu)
              },
              keysReleased: () => {
                lu.clear()
              },
              resized: () => {
                ds.j.measure(uu.getBoundingClientRect()), (0, Os.m)()
              },
              sizeCanvas: Cu,
              watchRenderScale: Eu => {
                const ju = (0, SE.s)(uu, Eu),
                  su = Ns.c.onRelease(Eu);
                return () => {
                  ju(), su()
                }
              },
              touchStarting: () => {
                ds.j.measure(uu.getBoundingClientRect())
              },
              viewShown: ju,
              touchUiShown: () => uE.d.get("isTouchScreen"),
              ctrlCombosAreGames: Ps,
              inspect: (uu, Eu, ju) => {
                Uu.checks(Eu, ju) && su(uu)
              },
              canLock: () => Zs(uu)
            }),
            cu = (0, gj.c)(Eu);
          return () => {
            Xu(), fu(), (0, Tj.o)(null), cu(), bu()
          }
        }(hu, ((uu, Eu, ju, su, Uu) => {
          eC(Pu, (() => {
            Pu.rings.input.writeRecord(uu, Eu, ju, su, Uu)
          })), !ql && (0, Ks.h)(uu, Uu) && (0, Ks.d)((() => {
            hX !== Pu || Jq || Pu.isStopped || !lC() || Rf(Pu, !1, "budget", !1)
          }))
        }), (() => eq), (uu => {
          var Eu;
          null === (Eu = SX) || void 0 === Eu || Eu.onEvent(uu)
        }));
        if (Pu.isStopped) return Bu(), null;
        kX = Bu;
        const Lu = () => !Pu.isStopped && !pq;
        if (Pu.isStopped) return null;
        (0, YE.W)((() => {
          "call" === (0, YE.r)() && Pu.crash(cj.r, (0, YE.q)())
        }));
        const tu = (0, cj.F)(Pu.rings.worker, (() => {
          Rf(Pu, !1, document.hidden ? "all" : "budget")
        }));
        mX = function(uu, Eu) {
          return GC().then((uu => {
            let {
              prefetchWorldgenWorker: Eu
            } = uu;
            Eu()
          }), (() => {})), new qZ({
            module: (0, YE.A)(),
            decodeSettings: uu => {
              const Eu = (0, vu.w)();
              if (null === Eu) throw new Error("no game code to decode the world-gen seed with");
              return Eu.decodeMapSettings(uu)
            },
            loadWorker: pC,
            onMapWithoutWorldgen: () => {
              wC((uu => {
                let {
                  stopWorldgenWorkerPrefetch: Eu
                } = uu;
                Eu()
              }))
            },
            onLoadFailed: uu => {
              (0, vj.reportWorldgenLoadFailure)(uu, GX)
            },
            onWorkerLost: uu => {
              (0, vj.reportWorkerLost)(cj.A, uu, GX)
            },
            onStartTimeout: uu => {
              (0, vj.reportWorkerStartTimeout)(cj.A, uu, GX)
            },
            onGaveUp: uu => {
              (0, vj.reportWorldgenGaveUp)(uu, GX)
            },
            onMemoryStats: uu => {
              var Eu;
              null === (Eu = VX) || void 0 === Eu || Eu.noteWorldgen(uu)
            },
            onMemoryGone: () => {
              var uu;
              null === (uu = VX) || void 0 === uu || uu.worldgenGone()
            },
            write: (ju, su, Uu, Zu, Xu) => {
              eC(uu, (() => {
                uu.rings.worker.writeWorkerRecord(ju, su, Uu, 0, Zu, Xu) || uu.crash(cj.A, `a world-gen record of kind ${su} did not fit the worker-in ring`)
              })), Eu()
            }
          })
        }(Pu, tu), KX = function(uu, Eu) {
          return new qU({
            module: (0, YE.A)(),
            loadWorkers: async () => {
              const [{
                createMeshWorker: uu
              }, Eu] = await Promise.all([ju.e(41).then((() => ju(51307))), Promise.resolve().then((() => ju(91))).then((uu => {
                let {
                  isMobile: Eu
                } = uu;
                return Eu()
              }), (() => !1))]);
              return {
                create: uu,
                count: (0, kE.e)(navigator.hardwareConcurrency, Eu),
                maxKeptLightStates: Eu ? 1 : void 0
              }
            },
            write: (ju, su, Uu, Zu, Xu, lu) => {
              (0, Os.j)(), eC(uu, (() => {
                uu.rings.worker.writeWorkerRecord(ju, su, Uu, Zu, Xu, lu) || uu.crash(cj.m, `a meshing record of kind ${su} did not fit the worker-in ring`)
              })), Eu()
            },
            onWorkerLost: uu => {
              (0, vj.reportWorkerLost)(cj.m, uu, GX)
            },
            onLightFault: (uu, Eu) => {
              (0, vj.reportLightFault)(uu, Eu, GX)
            },
            onStartTimeout: uu => {
              (0, vj.reportWorkerStartTimeout)(cj.m, uu, GX)
            },
            onMemoryStats: (uu, Eu) => {
              var ju;
              null === (ju = VX) || void 0 === ju || ju.noteMeshWorker(uu, Eu)
            },
            onMemoryGone: uu => {
              var Eu;
              null === (Eu = VX) || void 0 === Eu || Eu.meshWorkerGone(uu)
            },
            fail: (Eu, ju) => {
              const su = () => {
                uu.crash(cj.m, void 0 === ju ? Eu : new Error(Eu, {
                  cause: ju
                }))
              };
              void 0 !== ju ? PC({
                site: cj.m,
                error: ju
              }, su) : su()
            }
          })
        }(Pu, tu), Aq();
        const xu = (0, wU.i)(PE.clientSideServerUrls.staticUrl, {
            onTableFailed: uu => {
              PC({
                site: vj.MODEL_FEED_SITE,
                error: uu
              }, (() => {}), {
                stillWanted: Lu
              })
            },
            packUrl: uu => {
              var Eu, ju;
              return null !== (Eu = null === (ju = Vf()) || void 0 === ju ? void 0 : ju.modelUrl(uu)) && void 0 !== Eu ? Eu : null
            }
          }),
          Tu = function(uu, Eu, ju) {
            const su = ju => {
              var su, Uu;
              return null !== (su = null === (Uu = Eu()) || void 0 === Uu ? void 0 : Uu.drawnUrl(ju)) && void 0 !== su ? su : uu.url(ju)
            };
            return (0, GU.m)((0, cU.m)(su), ju)
          }(xu, (() => FX), Vf),
          Hu = new cU.g(Tu, (uu => {
            console.warn(`${FZ} image ${uu.key.kind}:${uu.key.index}:${uu.key.word} failed`, uu.error)
          }));
        TX = Hu, HX = new gU(Pu, Tu, ((uu, Eu) => {
          void 0 === Eu ? console.warn(`${FZ} ${uu}`) : Qf(uu, Eu)
        }));
        const Au = new eU.g(xu, function(uu, Eu) {
          let su = !1,
            Uu = null,
            Zu = null;
          const Xu = {
              onUnavailable: (ju, su) => {
                Zu ??= PC({
                  site: vj.MODEL_POOL_SITE,
                  error: ju,
                  urls: su
                }, (() => {
                  (0, vj.reportModelPoolFailure)(ju, uu)
                }), {
                  stillWanted: Eu
                })
              },
              onDecoderFailed: (ju, su) => {
                const Uu = () => {
                  (0, vj.reportDracoDecoderFailure)(ju, uu)
                };
                void 0 !== su ? PC({
                  site: vj.MODEL_POOL_SITE,
                  error: ju,
                  urls: su
                }, Uu, {
                  stillWanted: Eu
                }) : Uu()
              },
              onWorkerLost: Eu => {
                (0, vj.reportWorkerLost)(vj.MODEL_POOL_SITE, Eu, uu)
              },
              onModuleRetry: (Eu, ju) => {
                (0, vj.reportModelsModuleRetry)(Eu, ju, uu)
              }
            },
            lu = ju.e(43).then((() => ju(51314))).then((uu => {
              let {
                pageModelPool: Eu
              } = uu;
              if (su) return null;
              const ju = Eu(Xu);
              return Uu = ju.unlisten, BX = ju.pool, Aq(), ju.pool
            }), (uu => (su || Xu.onUnavailable(uu, void 0), null)));
          return LX = () => {
            var uu;
            su = !0, null === (uu = Uu) || void 0 === uu || uu(), BX = null
          }, (uu, Eu) => lu.then((ju => {
            var su;
            return null !== (su = null === ju || void 0 === ju ? void 0 : ju.build(uu, Eu)) && void 0 !== su ? su : (0, JU.s)(uu, "the model workers did not load")
          })).then((uu => null !== Zu && (0, JU.l)(uu) ? Zu.then((() => uu)) : uu))
        }(au, Lu), (uu => {
          uu.startup ? (bC(), PC({
            site: vj.MODEL_FEED_SITE,
            error: uu.error,
            urls: "" === uu.url ? void 0 : [uu.url]
          }, (() => {
            (0, vj.reportModelFailure)(uu, au)
          }))) : (0, vj.reportModelFailure)(uu, au)
        }), {
          onWritten: (uu, Eu) => {
            Hu.glbWritten(uu, Eu)
          },
          onTaken: (uu, Eu) => {
            Hu.glbTaken(uu, Eu)
          },
          onPackFileFailed: (uu, Eu) => {
            console.warn(`${FZ} the texture pack's model file ${uu} failed: the shipped one loads`, Eu)
          }
        });
        FX = Au;
        const nu = new YU.c(Pu);
        MX = nu, nu.swap((uu => {
          const Eu = () => {
            (0, vj.reportTerrainTextureFailure)(uu, au)
          };
          if (qq) return void Eu();
          const ju = () => !qq,
            su = null === uu.url ? void 0 : [uu.url];
          PC({
            site: cj.y,
            error: uu.error,
            urls: su
          }, Eu, {
            stillWanted: ju
          })
        })).then((uu => {
          null !== uu && (uu || Pu.isStopped || console.warn(`${FZ} the core refused the terrain textures: terrain draws untextured`), ul(Pu))
        }));
        const yu = new HE(Pu, ((uu, Eu) => {
          console.warn(`${FZ} ${uu}`, ...void 0 === Eu ? [] : [Eu])
        }));
        yu.feed(), null !== cu && function(uu, Eu, su, Uu, Zu, Xu) {
          let lu = null,
            fu = null,
            Cu = !1;
          const bu = {
            textures: null,
            stop: () => {
              var uu, Eu;
              Cu = !0, null === (uu = fu) || void 0 === uu || uu(), null === (Eu = lu) || void 0 === Eu || Eu(), pU.e.setSettled(null), null !== pX && Kq.clear(pX)
            }
          };
          gX = bu, fu = Wf().follow((fu => {
            null !== fu && Promise.all([ju.e(204), ju.e(46)]).then((() => ju(51276))).then((ju => {
              let {
                PackTextures: cu
              } = ju;
              if (Cu || uu.isStopped) return;
              const Nu = new cu({
                feed: fu,
                terrain: Eu,
                backend: su,
                stopped: () => uu.isStopped,
                landed: () => {
                  ul(uu)
                },
                packSwapped: () => {
                  (0, GU.j)(Uu), Xu.feed((() => async function(uu) {
                    const Eu = null === uu ? null : await uu.averageColours;
                    return null === Eu ? AE() : TE(Eu)
                  }(Nu.assets))), (0, MU.l)(Nu.files()), Zu.refresh().then((uu => {
                    null !== uu && console.info(`${FZ} texture pack models: ${uu.resent} of ${uu.delivered} files written again, ${uu.refetched} refetched`)
                  }))
                },
                settled: (uu, Eu, ju) => {
                  var su;
                  (pU.e.setSettled({
                    state: uu,
                    files: Eu
                  }), function(uu, Eu, ju) {
                    const su = null === uu.gameSource && (0, Kj.g)(uu.pack);
                    if (null === Eu) return;
                    const Uu = (0, mj.h)(Eu.error),
                      Zu = su ? "settings" : Eu.source;
                    qu.h.TY(mj.c, {
                      failure: Uu,
                      source: Zu,
                      pack: Vj(uu)
                    }), (0, vj.reportTexturePackKeptOut)(Zu, Uu, Eu.error, ju)
                  }(uu, ju, GX), null === ju) && function(uu) {
                    const Eu = pX;
                    null !== Eu && Kq.apply(Eu, uu).then((Eu => {
                      Eu && uu && console.info(`${FZ} the texture pack's animations are in (${Object.keys(uu).length} files)`)
                    }))
                  }(null === (su = uu.pack) || void 0 === su ? void 0 : su.animations)
                },
                settling: () => {
                  pU.e.setSettled(null)
                },
                warn: Qf,
                maxTextureSize: () => Promise.resolve((0, Cj.mb)(document.createElement("canvas")))
              });
              bu.textures = Nu, lu = Nu.start()
            }), (uu => {
              console.warn(`${FZ} the texture pack's terrain didn't load: the built atlas stays`, uu)
            }))
          }))
        }(Pu, nu, cu, Hu, Au, yu);
        const EE = () => {
            Pu.setTextureLayers("")
          },
          jE = uu => {
            (aE ??= ju.e(54).then((() => ju(51316))).then((uu => {
              let {
                TEXTURE_NAMES: Eu
              } = uu;
              return Eu
            }), (uu => {
              throw aE = null, uu
            })), aE).then((uu => {
              Pu.setTextureLayers(uu) || Pu.isStopped || (console.warn(`${FZ} the core refused the texture names: textured Boxes draw textureNotFound`), EE())
            }), (Eu => {
              if (Pu.isStopped) return;
              const [ju, ...su] = uu;
              void 0 === ju ? PC({
                site: vj.TEXTURE_NAMES_SITE,
                error: Eu
              }, (() => {
                console.warn(`${FZ} the texture names didn't load, so textured Boxes draw textureNotFound`, Eu), EE()
              }), {
                stillWanted: Lu
              }) : setTimeout((() => {
                jE(su)
              }), ju)
            }))
          };
        if (jE(XX), null !== cu && !await async function(uu, Eu, ju, su, Zu, Xu) {
            var lu;
            const qu = (0, Cj.Z)(ju);
            if (null === qu) return uu.crash(LZ, new Error(`this ${su} build has no openRenderer`)), !1;
            let fu;
            Al = qu;
            try {
              var Cu, bu, cu, Nu;
              const Uu = null !== (Cu = null === (bu = OX) || void 0 === bu ? void 0 : bu.pagePreviews()) && void 0 !== Cu ? Cu : null,
                lu = null !== (cu = null === (Nu = OX) || void 0 === Nu ? void 0 : Nu.previewModule(ju)) && void 0 !== cu ? cu : null;
              if (null === Uu || null === lu) {
                null === Uu || void 0 === Uu || Uu.endSession(!1), fu = (0, SE.g)().sampleCount, await (0, Cj.j)(Eu, qu, Xu, vf, fu, await Zu);
                const uu = (0, Cj.q)(ju);
                null === uu && console.warn(`${FZ} this ${su} build has no image registry: sky and model images won't show`), (0, OU.h)(uu)
              } else {
                (0, vU.e)() && await (0, Ru.p)();
                const ju = (0, vU.H)();
                if (null !== ju) {
                  const Eu = (0, bj.h)(qu);
                  return uu.crash(vj.RENDER_RELOAD_SITE, new Error(`${ju}${void 0===Eu?"":` (${Eu.message})`}`)), !1
                }
                fu = await Uu.bindSession(lu, Eu, (async uu => (0, Cj.B)(qu, LZ, Xu, uu, vf, await Zu)))
              }
            } catch (Uu) {
              return uu.crash(LZ, Uu), !1
            }(function(uu, Eu) {
              const ju = uu,
                {
                  requestCapture: su,
                  takeCapture: Uu
                } = ju;
              if ("function" !== typeof su || "function" !== typeof Uu) return;
              const Zu = {
                request() {
                  su.call(ju, Eu)
                },
                take() {
                  var uu;
                  return null !== (uu = Uu.call(ju)) && void 0 !== uu ? uu : null
                }
              };
              window[IU] = Zu
            })(Eu, fu), jq = fu, Tl = !0;
            const Ou = performance.now();
            return Hl.boundAtMs = null !== (lu = (0, vU.K)()) && void 0 !== lu ? lu : Ou, Hl.indirectHangs = (0, vU.z)(), Hl.restoresSkipped = (0, vU.N)(), console.info(`${FZ} ${su} renderer bound at ${Math.round(Ou)} ms`), !uu.isStopped
          }(Pu, du, Ju, cu, Ou, hu)) return null;
        if (null !== cu) {
          var sE, UE, ZE;
          (0, gE.G)(cu);
          const uu = () => !Pu.isStopped && XC();
          ju.e(196).then((() => ju(34444))).then((Eu => {
            let {
              devTools: ju
            } = Eu;
            Pu.isStopped || ju.setHost(function(uu) {
              return {
                tools: mU,
                async downloadScene(Eu, ju) {
                  let {
                    width: su,
                    height: Uu,
                    colouring: Zu
                  } = ju;
                  "screenshot" === Eu && null === Zu ? await (0, PU.c)(uu, su, Uu) : console.warn("The Rust client's developer tools take uncoloured screenshots only")
                },
                setAmbientLightIntensity: () => (console.warn("The Rust client's renderer has no ambient light setting"), Promise.resolve()),
                capturePhoto: (Eu, ju, su) => (0, PU.b)(uu, Eu, ju, su)
              }
            }(function(uu, Eu) {
              return {
                canvas: uu,
                maxTextureSize: oU,
                drawing: Eu,
                resize: (uu, Eu, ju) => {
                  (0, Tj.v)(nE.sb.Resize, 0, uu / ju, Eu / ju, (0, Tj.i)(ju))
                },
                restoreSize: () => {
                  const Eu = (0, SE.q)(uu);
                  null !== Eu && (0, Tj.v)(nE.sb.Resize, 0, Eu.cssWidth, Eu.cssHeight, (0, Tj.i)(Eu.renderScale))
                },
                onFrameDrawn: uu => (kU.add(uu), () => {
                  kU.delete(uu)
                })
              }
            }(hu, uu)))
          }), (uu => {
            console.warn(`${FZ} the developer tools didn't load: no captures this session`, uu)
          }));
          const Eu = "webgpu" === cu && null !== (sE = null === bu || void 0 === bu || null === (UE = bu.adapter) || void 0 === UE ? void 0 : UE.vendor) && void 0 !== sE ? sE : null;
          sq = {
            backend: cu,
            canvas: hu,
            fallbackReason: null !== (ZE = null === bu || void 0 === bu ? void 0 : bu.reason) && void 0 !== ZE ? ZE : null,
            adapterVendor: Eu
          }, tf();
          try {
            (0, Os.q)(cu, hu, Eu)
          } catch (Uu) {
            (0, Os.r)(), console.error(`${FZ} the quality steps didn't start`, Uu)
          }
        }
        const {
          storagePullBreaks: XE,
          splitPassBreaks: lE
        } = await Ou;
        lE && console.warn(`${FZ} split_pass_breaks on: Windows Adreno 7xx (N-103) or ?sceneDepth=off`);
        const qE = (0, zu.g)(bu, (0, VE.g)());
        if ((0, yU.p)("webgpuloss")) {
          var fE, CE;
          const uu = {
            backend: cu,
            reason: null !== (fE = null === bu || void 0 === bu ? void 0 : bu.reason) && void 0 !== fE ? fE : null,
            source: null !== (CE = null === bu || void 0 === bu ? void 0 : bu.source) && void 0 !== CE ? CE : null,
            storagePullBreaks: XE,
            noWebGpu: qE.messageKey
          };
          (0, zU.c)((Eu => {
            Eu.noteWasmPick(uu)
          }))
        }
        const bE = "webgpu" === cu;
        if (nX = (0, zu.k)(bE ? Pu : null, bE && null !== (lu = null === (fu = OX) || void 0 === fu ? void 0 : fu.pagePreviews().AN) && void 0 !== lu ? lu : null, qE, Qf), Jq) return null;
        if (Wu.reserveAtJoin((0, CU.n)(null !== Ku && void 0 !== Ku ? Ku : aj.g)), Pu.isStopped) return null;
        const cE = uu => {
          if (Ul = performance.now(), Zl = !1, null !== Uq) try {
            Uq.animationFrame(uu)
          } catch (Uu) {
            Hf(Uu)
          }
          if (function(uu, Eu) {
              return Eu && !Jq && !ql && lC() && XC() && uu.framePaces(performance.now())
            }(Pu, eq)) {
            if (Pu.writePendingInput(), (0, mu.e)(uu, uC), xf(!1, uu), null !== Uq) try {
              Uq.framePaced()
            } catch (Uu) {
              Hf(Uu)
            }
            requestAnimationFrame(cE)
          } else Rf(Pu, eq, "budget") && ((0, QE.k)(Pu.lastFrameKind) && XC() && (0, mu.e)(uu, uC), xf(eq && hq, uu), Dq.frame(Pu.lastFrameKind, eq && XC(), uu), gq.frame(Pu.lastFrameKind, eq && XC()), (0, QE.e)(Pu.lastFrameKind) && VE.B.drew(), OC(Pu), Wu.afterFrame(), requestAnimationFrame(cE))
        };
        requestAnimationFrame(cE);
        return function(uu) {
          if (uu.has("inputLog") && (0, ws.f)((uu => {
              let {
                action: Eu,
                down: ju,
                press: su
              } = uu;
              console.info(`${as} input ${Eu} ${ju?"down":"up"} press ${su} at ${performance.now().toFixed(1)}`)
            })), uu.has("inputDump")) {
            const uu = [];
            os = uu, Object.assign(window, {
              bloxdInputDump: () => uu.join("\n")
            })
          }
        }(new URLSearchParams(window.location.search)), WX = function(uu) {
          let Eu = null;
          const ju = () => {
              null !== Eu && (clearInterval(Eu), Eu = null)
            },
            su = () => {
              document.hidden ? Eu ??= setInterval((() => {
                dC(uu) || ju()
              }), ZX) : ju()
            };
          return document.addEventListener("visibilitychange", su), su(), () => {
            ju(), document.removeEventListener("visibilitychange", su)
          }
        }(Pu), Pu
      }(Eu).then((uu => {
        var Eu;
        (su(GX), dX(null !== uu), null !== uu && (Mu = performance.now()), wX(uu), null === uu) ? null === (Eu = OX) || void 0 === Eu || Eu.pagePreviews().endSession(null === (0, YE.r)()): RX("booted")
      }), (uu => {
        su(GX), dX(!1), wX(null), cC({
          site: tZ,
          error: uu,
          header: null
        }, GX)
      }))
    }

    function vq() {
      const uu = pX;
      null !== uu && dq().then((Eu => {
        let {
          pageBuiltInAnimationPack: ju
        } = Eu;
        ju().provide(uu)
      }), (uu => {
        console.warn(`${FZ} the built-in animation pack's chunk did not load: lifeforms stay in their rest pose`, uu)
      }))
    }
    const Kq = new class {
      constructor(uu) {
        this.deps = uu, this.latest = 0, this.dl = null
      }
      apply(uu, Eu) {
        return this.load(uu, Eu, 0)
      }
      async load(uu, Eu, ju) {
        var su;
        const Uu = ++this.latest,
          Zu = this.deps.compiler;
        if (void 0 === Eu || null === Eu || "object" !== typeof Eu || 0 === Object.keys(Eu).length || null === Zu) return this.drop(uu), !1;
        if ((null === (su = this.dl) || void 0 === su ? void 0 : su.module) === uu && (0, Zj.he)(this.dl.files, Eu)) return !1;
        try {
          const [ju, su] = await Promise.all([Zu(), this.deps.builtIns()]);
          if (Uu !== this.latest) return !1;
          const Xu = await ju(Eu, fj, {
            builtIns: su
          });
          if (Uu !== this.latest) return !1;
          const lu = this.call(uu, Xu);
          if (void 0 === lu) throw new qj("the compiled animations didn't read against the built-in pack");
          return this.dl = {
              module: uu,
              files: Eu
            },
            function(uu) {
              for (let Eu = 0; Eu + 2 < uu.length; Eu += 3) {
                ("error" === uu[Eu] ? console.error : console.warn)(`Animation for the texture pack: ${uu[Eu+1]}: ${uu[Eu+2]}`)
              }
            }(lu), !0
        } catch (lu) {
          var Xu;
          if (Uu !== this.latest) return !1;
          this.drop(uu), 0 === ju && this.deps.warn("the texture pack's animations didn't load: lifeforms play the built-in ones", lu);
          const su = (null !== (Xu = this.deps.retryAfterMs) && void 0 !== Xu ? Xu : lj)[ju];
          return void 0 === su || lu instanceof qj || (0, Xj.k)(uu) || setTimeout((() => {
            Uu === this.latest && this.load(uu, Eu, ju + 1)
          }), su), !1
        }
      }
      call(uu, Eu) {
        try {
          return uu.Xsu(Eu)
        } catch (ju) {
          throw (0, Xj.l)(uu, ju), ju
        }
      }
      clear(uu) {
        this.latest++, this.drop(uu)
      }
      drop(uu) {
        const Eu = this.dl;
        if (this.dl = null, (null === Eu || void 0 === Eu ? void 0 : Eu.module) === uu && !(0, Xj.k)(uu)) try {
          this.call(uu, null)
        } catch {}
      }
    }({
      compiler: Ej.c,
      builtIns: async () => {
        const {
          pageBuiltInAnimationPack: uu
        } = await dq();
        return uu().whenSet()
      },
      warn: Qf
    });
    async function Vq(uu, Eu) {
      let su = !1;
      await rq({
        matchmake: async () => {
          const {
            guestJoinTarget: Uu,
            guestJoinWithPack: Zu
          } = await ju.e(277).then((() => ju(51254)));
          return su ? Uu(uu, Eu, If()) : (su = !0, Zu(uu, Eu, (Eu => Ff(uu, Eu)), If))
        },
        onFailure: uu => {
          (0, vj.showJoinFailure)(uu, GX)
        },
        rejoin: zq,
        invalidateTrafficCode: Rq
      })
    }
    async function rq(uu) {
      let {
        matchmake: Eu,
        onFailure: ju,
        rejoin: Uu,
        invalidateTrafficCode: Zu,
        pageReady: Xu,
        signal: lu
      } = uu;
      const qu = () => !0 === (null === lu || void 0 === lu ? void 0 : lu.aborted);
      let fu;
      const Cu = pU.e.rejoinHold();
      Gl = null;
      const bu = (0, Wj.K)("wasm", gC);
      let cu = !1,
        Nu = performance.now();
      try {
        if (!await aX) return {
          kind: "stopped"
        };
        if (qu()) return {
          kind: "Lj"
        };
        aq().catch((() => {}));
        let uu = await Eu();
        var Gu, pu;
        if (Nu = performance.now(), !qu()) DC(null !== (Gu = null === (pu = uu.target.session) || void 0 === pu ? void 0 : pu.gameNameWithVariation) && void 0 !== Gu ? Gu : null);
        const ju = () => performance.now() - uu.matchedAt <= uu.freshMs,
          su = iq(uu.target).catch((() => {}));
        ju() && !qu() && (fu = new ZU(uu.target, {
          signal: lu
        }));
        const Zu = performance.now();
        if (null === await JX) return {
          kind: "stopped"
        };
        var wu, Ju;
        if (function(uu) {
            var Eu, ju;
            if (Yu.e.markGameEngineConstructed(), eu) return;
            eu = !0;
            const su = Math.max(uu, null !== (Eu = Du) && void 0 !== Eu ? Eu : uu);
            (0, hu.h)("ready", Math.max(0, (null !== (ju = gu) && void 0 !== ju ? ju : su) - su) / 1e3)
          }(Zu), !qu())
          if (null !== gu && null !== Mu ? ((0, Ou.s)("wasm_loaded", gu), (0, Ou.s)("wasm_core_ready", Mu)) : console.warn("[bloxd-wasm-client] a join found the core before boot marked its steps"), uu.target.session && (0, XZ.d)(uu.target.session.gameNameWithVariation)) null === (wu = mX) || void 0 === wu || wu.prestart();
        if (await su, !ju() && !qu()) null === (Ju = fu) || void 0 === Ju || Ju.rematched(), uu = await Eu(), Nu = performance.now();
        if (qu()) return {
          kind: "Lj"
        };
        const Cu = await async function(uu) {
          var Eu, ju, su;
          let {
            signal: Uu,
            rejoin: Zu = null,
            early: Xu,
            pageReady: lu
          } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (null !== Uu && void 0 !== Uu && Uu.aborted) throw new DOMException("the join was left", "AbortError");
          const qu = (fu = Ql, Cu = performance.now(), null !== fu && Cu - fu < xs);
          var fu, Cu;
          Ql = null;
          const bu = new AbortController,
            cu = null !== (Eu = null === (ju = uu.session) || void 0 === ju ? void 0 : ju.gameNameWithVariation) && void 0 !== Eu ? Eu : null;
          DC(cu), Iq({
            controller: bu,
            game: cu
          }), il = null, null === (su = Il) || void 0 === su || su.abort(), Il = null, Bl = !1, Ll = null, tl.clear();
          const Nu = () => {
            (0, oE.j)(bu, (0, oE.f)(Uu))
          };
          null === Uu || void 0 === Uu || Uu.addEventListener("abort", Nu, {
            once: !0
          });
          try {
            var Yu, hu, Du;
            const Eu = await JX;
            if (null === Eu || Eu.isStopped || Jq) throw new Error("no core is running to join a game with");
            if (uu.session && null !== nX) {
              const Eu = await Wq(nX.join(uu.session.gameNameWithVariation), bu.signal);
              if ((0, yU.p)("webgpuloss")) {
                const ju = uu.session.gameNameWithVariation,
                  su = nX.couldntRunInJoinedGame();
                (0, zU.c)((uu => uu.noteWasmJoin(ju, Eu, su)))
              }
              if (null !== Eu) throw new zu.e(Eu)
            }
            const [, , , {
              joinRoom: ju
            }] = await Wq(Promise.all([(0, vu.m)(Eu), iq(uu), null === lu || void 0 === lu ? void 0 : lu(), aq()]), bu.signal), su = uu.session, Uu = su ? {
              ...jf,
              attachSocket: Eu => {
                const ju = ff(Eu, uu.endpoint);
                var Uu;
                null !== ju && (Jl = {
                  conn: ju,
                  info: su
                }, null === (Uu = dl) || void 0 === Uu || Uu(su.playerDbId));
                return ju
              }
            } : jf, fu = await ju(Uu, uu, {
              signal: bu.signal,
              early: Xu
            }).catch((uu => {
              throw function(uu) {
                if (!(uu instanceof Bu.e)) return uu;
                if ("roomError" === uu.stage && null !== Ll) return Qq(new Bu.e(uu.message, uu.stage, uu.code, Ll), uu);
                const Eu = "closed" === uu.stage && null !== Wl ? tl.get(Wl.conn) : void 0;
                return void 0 === Eu ? uu : Qq(new Bu.e(uu.message, uu.stage, Eu.code, null, uu.socketOpened), uu)
              }(uu)
            }));
            if (el !== bu) throw fu.leave(), new DOMException("the join was left", "AbortError");
            Bq(fu), null === (Yu = KX) || void 0 === Yu || Yu.newGame();
            const Cu = function(uu) {
              var Eu, ju;
              const {
                session: su
              } = uu, Uu = void 0 === su ? uu.joinOptions.lobbyName : su.lobbyName;
              return {
                endpoint: uu.endpoint,
                game: null !== (Eu = null === su || void 0 === su ? void 0 : su.gameNameWithVariation) && void 0 !== Eu ? Eu : uu.roomName,
                lobby: String(null !== Uu && void 0 !== Uu ? Uu : null),
                postCookies: null !== (ju = uu.postCookies) && void 0 !== ju ? ju : null
              }
            }(uu);
            Ml.set(fu, Cu), EU(Cu);
            const cu = performance.now(),
              Nu = {
                conn: fu.conn,
                rejoin: Zu,
                game: null !== (hu = null === (Du = uu.session) || void 0 === Du ? void 0 : Du.gameNameWithVariation) && void 0 !== hu ? hu : "",
                joinedAt: cu,
                rejoinedAt: qu ? cu : null,
                overflow: null
              };
            al = Nu,
              function(uu, Eu) {
                gf();
                const ju = {
                  endpoint: Eu,
                  roomId: uu.seat.room.roomId,
                  heldConn: 0,
                  dropCode: 0,
                  pendingHold: null,
                  resume: new wj({
                    reconnect: (uu, Eu, su) => async function(uu, Eu, ju, su) {
                      const {
                        roomId: Uu,
                        roomToken: Zu
                      } = ef(uu, Eu), Xu = hX;
                      if (null === Xu || Xu.isStopped || Jq) throw new Error("no core is running to resume the game on");
                      const {
                        resumeRoom: lu
                      } = await Wq(aq(), ju), qu = {
                        ...jf,
                        attachSocket: Eu => Pl !== uu || 0 === uu.heldConn ? (Eu.close(), null) : ff(Eu, uu.endpoint, !0)
                      };
                      return lu(qu, uu.endpoint, Uu, Zu, {
                        signal: ju,
                        onAttached: su
                      })
                    }(ju, uu, Eu, su),
                    releaseSeat: uu => {
                      !async function(uu, Eu) {
                        const {
                          roomId: ju,
                          roomToken: su
                        } = ef(uu, Eu);
                        try {
                          const {
                            leaveHeldSeat: Eu
                          } = await aq();
                          await Eu(uu.endpoint, ju, su)
                        } catch (Uu) {
                          console.warn(`${FZ} the held seat of a game left while it reconnected couldn't be released`, Uu)
                        }
                      }(ju, uu)
                    },
                    isLive: () => Pl === ju && null !== al && !Jq,
                    Wm: uu => {
                      rl = uu, Df()
                    },
                    onReconnected: uu => {
                      ! function(uu) {
                        const Eu = gl;
                        if (null !== Eu && Eu !== uu) {
                          const ju = Ml.get(Eu);
                          void 0 !== ju && Ml.set(uu, ju), Yq === Eu && (Yq = uu), Eu.detach()
                        }
                        Bq(uu)
                      }(uu)
                    },
                    onGaveUp: (uu, Eu) => {
                      ! function(uu, Eu, ju) {
                        var su, Uu;
                        console.warn(`${FZ} gave up reconnecting (${ju.reason}, ${ju.attempts} attempts)`, ju.lastError), (0, vj.reportReconnectGaveUp)(ju, GX);
                        const Zu = null !== (su = null === (Uu = al) || void 0 === Uu ? void 0 : Uu.rejoin) && void 0 !== su ? su : null;
                        Mf(uu, "gaveUp"), tq();
                        const Xu = {
                          code: uu.dropCode,
                          name: null,
                          reason: EX,
                          canReconnect: !Eu,
                          automaticallyReconnect: !1,
                          requiresRefresh: !1
                        };
                        Ef(Xu, Eu ? null : Zu, !1, {
                          reasonKey: jX,
                          canPlayAgain: Eu
                        })
                      }(ju, uu, Eu)
                    }
                  })
                };
                Pl = ju, null !== ol && ol.conn === uu.conn && ju.resume.onInitialInfo(ol)
              }(fu, uu.endpoint), performance.mark(HZ), (0, Ou.s)("wasm_joined", cu), setTimeout((() => {
                gl === fu && (0, Ou.h)()
              }), 0), vq(), console.info(`${FZ} joined ${uu.roomName} as ${fu.seat.sessionId} at ${Math.round(performance.now())} ms`);
            const gu = il;
            il = null, null !== gu && Hq(Nu, gu.mask, gu.frames);
            const Mu = tl.get(fu.conn);
            return tl.clear(), void 0 !== Mu && (Bq(null), uf(fu.conn, Mu.code, Mu.reason)), fu
          } finally {
            var gu;
            null === Uu || void 0 === Uu || Uu.removeEventListener("abort", Nu), el === bu && Fq(gl, null), (null === (gu = Wl) || void 0 === gu ? void 0 : gu.join) === bu && (Wl = null)
          }
        }(uu.target, {
          signal: lu,
          rejoin: Uu(uu.target),
          early: fu,
          pageReady: Xu
        });
        return cu = !0, {
          kind: "joined",
          game: Cu
        }
      } catch (au) {
        if (au instanceof DOMException && "AbortError" === au.name || qu()) return {
          kind: "Lj"
        };
        if (Jq) return {
          kind: "stopped"
        };
        if (Bl && (Bl = !1, await Zu().catch((uu => {
            console.warn(`${FZ} the cached traffic code could not be dropped`, uu)
          }))), null === await JX) return {
          kind: "stopped"
        };
        if (au instanceof zu.e) return ju(au, performance.now() - Nu), {
          kind: "failed",
          error: au,
          reloading: !1
        };
        if (au instanceof Bu.e && au.code === su.b.wasmClientNotAllowed.code && Mq) return mf("this server refused the wasm client to this account", "refused"), {
          kind: "failed",
          error: au,
          reloading: !0
        };
        const uu = au instanceof Bu.e && au.code === su.b.outdatedVersion.code,
          Eu = () => null === gl,
          Uu = await PC({
            site: vj.JOIN_SITE,
            error: au,
            outdated: uu
          }, (() => {
            ju(au, performance.now() - Nu)
          }), {
            stillWanted: Eu
          });
        return {
          kind: "failed",
          error: au,
          reloading: Uu
        }
      } finally {
        var du;
        cu || bu.end(), pU.e.releaseHold(Cu);
        const uu = null === (du = fu) || void 0 === du ? void 0 : du.release();
        uu && (0, vj.reportUnusedSeat)(uu, GX)
      }
    }

    function Qq(uu, Eu) {
      return uu.stack = Eu.stack, uu
    }

    function iq(uu) {
      return uu.session ? (0, vu.s)(eX, uu.session.gameNameWithVariation) : Promise.resolve()
    }

    function Wq(uu, Eu) {
      return (0, oE.n)(Eu), new Promise(((ju, su) => {
        const Uu = () => {
          su((0, oE.f)(Eu))
        };
        Eu.addEventListener("abort", Uu, {
          once: !0
        }), uu.then((uu => {
          Eu.removeEventListener("abort", Uu), ju(uu)
        }), (uu => {
          Eu.removeEventListener("abort", Uu), su(uu)
        }))
      }))
    }

    function Sq() {
      Iq(null)
    }

    function Iq(uu) {
      var Eu, ju, su;
      (function() {
        const uu = Pl;
        null !== uu && Mf(uu, "left")
      }(), null === oX || oX.left) || (oX.left = !0, null === (su = (0, vu.l)()) || void 0 === su || su.socketLeft(), (0, cu.m)({
        websocketUrl: null
      }));
      el && (0, oE.j)(el, new DOMException("the join was left", "AbortError")), tq(null !== uu), null === (Eu = nX) || void 0 === Eu || Eu.leave();
      const Uu = gl;
      null !== uu && pU.e.setGame(uu.game), Fq(null, null !== (ju = null === uu || void 0 === uu ? void 0 : uu.controller) && void 0 !== ju ? ju : null), null === Uu || void 0 === Uu || Uu.leave(), Lq(0), (0, JE.h)()
    }

    function Fq(uu, Eu) {
      gl = uu, el = Eu, null === gl && null === el && pU.e.setGame(void 0)
    }

    function Bq(uu) {
      Fq(uu, el)
    }

    function Lq(uu) {
      const Eu = hX;
      return null !== qX && !Jq && null !== Eu && !Eu.isStopped && (!!qX(Bu.j, 0, (0, Bu.y)(uu)) && (bl = !0, 0 === uu || ql || Rf(Eu, !1, "all"), !0))
    }

    function tq() {
      var uu, Eu;
      arguments.length > 0 && void 0 !== arguments[0] && arguments[0] || (0, Wj.h)();
      const ju = null !== (uu = null === (Eu = al) || void 0 === Eu ? void 0 : Eu.overflow) && void 0 !== uu ? uu : null;
      al = null, null !== ju && (0, vj.reportEventOverflow)(ju, GX)
    }

    function xq() {
      null !== gl || null !== el ? Sq() : Cf()
    }

    function Tq(uu, Eu) {
      console.warn(`${FZ} the event buffer refused records in ${Eu} frames (categories ${uu})`), Jq || (null !== al ? Hq(al, uu, Eu) : null !== el && function(uu, Eu, ju) {
        var su;
        const Uu = function(uu, Eu) {
          return null === uu ? "drop" : uu.activated ? "keep" : 0 !== (Eu & yE.v.NetSession) ? "fail" : "drop"
        }((null === (su = Wl) || void 0 === su ? void 0 : su.join) === uu ? Wl : null, Eu);
        "keep" === Uu ? il = {
          mask: Eu,
          frames: ju
        } : "fail" === Uu && (0, oE.j)(uu, new Error("the join's net session was lost to an event overflow"))
      }(el, uu, Eu))
    }

    function Hq(uu, Eu, ju) {
      const su = uu.overflow ??= {
        frames: 0,
        acks: 0,
        mask: 0,
        outcome: null
      };
      su.frames += ju, su.acks++, su.mask |= Eu;
      const Uu = function(uu, Eu, ju) {
        if (0 === (uu & yE.v.NetSession)) return "none";
        const su = null !== Eu.rejoinedAt && ju - Eu.rejoinedAt < Ts;
        return null === Eu.rejoin || su ? "fail" : "rejoin"
      }(Eu, uu, performance.now());
      "none" !== Uu && queueMicrotask((() => {
        if (al !== uu) return;
        const Eu = "rejoin" === Uu && performance.now() - Sl >= Fu.f;
        su.outcome = Eu ? "rejoined" : "failed", Ef(function(uu, Eu) {
          return {
            code: 0,
            name: "eventOverflow",
            reason: "Your game fell behind the server.",
            canReconnect: uu,
            automaticallyReconnect: Eu,
            requiresRefresh: !1
          }
        }(null !== uu.rejoin, Eu), uu.rejoin, Eu), Sq(), Eu && (Ql = performance.now())
      }))
    }

    function Aq() {
      Mq && function(uu, Eu) {
        let {
          mesh: ju,
          worldgen: su,
          modelPool: Uu
        } = uu;
        "landingPage" === Eu ? (null === ju || void 0 === ju || ju.stopWorkers(), null === su || void 0 === su || su.stopWorker(), null === Uu || void 0 === Uu || Uu.stopWorkers()) : ((0, uE.i)(Eu) || "inGame" === Eu) && (null === ju || void 0 === ju || ju.restartWorkers(), null === Uu || void 0 === Uu || Uu.startWorkers())
      }({
        mesh: KX,
        worldgen: mX,
        modelPool: BX
      }, uE.d.get("gameState"))
    }

    function nq(uu) {
      eq = uu, Gq && yq(Gq, uu)
    }

    function yq(uu, Eu) {
      uu.style.visibility = Eu ? "visible" : "hidden"
    }

    function zq(uu) {
      var Eu;
      const ju = uu.roomName,
        su = null !== (Eu = uu.joinOptions.lobbyName) && void 0 !== Eu ? Eu : null;
      return () => {
        Vq(ju, su)
      }
    }

    function Rq() {
      return ju.e(277).then((() => ju(51254))).then((uu => {
        let {
          invalidateGuestTrafficCode: Eu
        } = uu;
        return Eu()
      })).catch((uu => {
        console.warn(`${FZ} the cached traffic code could not be dropped`, uu)
      }))
    }

    function uf(uu, Eu, ju) {
      var Uu, Zu;
      let Xu = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (Jq) return;
      if ((null === (Uu = al) || void 0 === Uu ? void 0 : Uu.conn) !== uu) return void(null !== el && tl.set(uu, {
        code: Eu,
        reason: ju
      }));
      const {
        rejoin: lu,
        game: qu,
        joinedAt: fu
      } = al;
      tq(), gf();
      const Cu = (0, Fu.k)(Eu, (0, As.f)(uu));
      if (console.info(`${FZ} the game's connection closed with code ${Eu} (${null!==(Zu=Cu.name)&&void 0!==Zu?Zu:"unrecognised"})`), Eu === su.b.gameOrPluginKick.code || Xu || (0, vj.reportDisconnect)(Cu, GX, {
          closeReason: ju,
          sinceJoinedMs: performance.now() - fu,
          game: qu
        }), Cu.requiresRefresh) {
        const uu = "outdatedVersion" === Cu.name,
          ju = new Error(`the game's connection closed with code ${Eu}`),
          su = () => null === al && null === el;
        return void PC({
          site: vj.JOIN_SITE,
          error: ju,
          outdated: uu
        }, (() => {
          su() && Ef(Cu, null, !1)
        }), {
          stillWanted: su
        })
      }
      const bu = Cu.canReconnect ? lu : null,
        cu = null !== bu && Cu.automaticallyReconnect && performance.now() - Sl >= Fu.f;
      Ef(Cu, bu, cu)
    }

    function Ef(uu, Eu, ju) {
      var su;
      let Uu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
        reasonKey: null,
        canPlayAgain: !1
      };
      if (pq) return;
      pU.e.unwantedLeave(ju && null !== Eu && 0 === Fl.size), null === (su = Il) || void 0 === su || su.abort();
      const Zu = new AbortController;
      Il = Zu;
      const Xu = null === Eu ? null : () => {
        Zu.signal.aborted || (Zu.abort(), Eu())
      };
      if (ju && null !== Xu) {
        Sl = performance.now();
        const uu = setTimeout(Xu, Fu.e);
        Zu.signal.addEventListener("abort", (() => {
          clearTimeout(uu)
        }))
      }
      const lu = {
        code: uu.code,
        name: uu.name,
        reason: uu.reason,
        reasonKey: Uu.reasonKey,
        reconnect: Xu,
        reconnecting: ju,
        requiresRefresh: uu.requiresRefresh,
        canPlayAgain: Uu.canPlayAgain
      };
      if (Fl.size > 0)
        for (const fu of [...Fl]) try {
          fu(lu)
        } catch (qu) {
          console.error(`${FZ} an unwanted-leave listener threw`, qu)
        } else Ws((0, rs.k)(uu, null !== Xu, ju), Zu.signal).then((Eu => {
          Eu && (null !== Xu ? Xu() : uu.requiresRefresh && (0, Ru.m)())
        }))
    }
    const jf = {
      attachSocket: uu => ff(uu),
      onConnection: uu => (xl.add(uu), () => {
        xl.delete(uu)
      }),
      sendRaw: (uu, Eu) => {
        const ju = oX;
        return null !== ju && ju.conn === uu && CC(ju, Eu)
      },
      leaveRoom: Lq,
      closeSocket: uu => {
        var Eu;
        (null === (Eu = oX) || void 0 === Eu ? void 0 : Eu.conn) === uu && Cf()
      },
      flushNet: bf
    };

    function sf(uu) {
      var Eu;
      let {
        aux: ju,
        payload: su
      } = uu;
      null === (Eu = hX) || void 0 === Eu || Eu.queueOptions(ju, su)
    }

    function Uf(uu, Eu) {
      sf(function(uu, Eu) {
        return QU = uu ? {
          preventMovement: Eu
        } : null, uu ? iU(Eu) : {
          aux: nE.dc.AdEnd,
          payload: rU
        }
      }(uu, Eu))
    }

    function Zf(uu) {
      var Eu;
      Yl = uu, null === (Eu = hX) || void 0 === Eu || Eu.setUiPrefs(uu)
    }

    function Xf(uu, Eu) {
      eX.setMaster(uu, Eu)
    }

    function lf(uu) {
      var Eu;
      hl = uu, null === (Eu = hX) || void 0 === Eu || Eu.setEnvPrefs(uu)
    }

    function qf(uu) {
      var Eu;
      Dl = uu, null === (Eu = hX) || void 0 === Eu || Eu.setLookPrefs(uu)
    }

    function ff(uu) {
      var Eu;
      let ju = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new URL(uu.url).origin,
        su = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      if (uu.readyState === WebSocket.CLOSING || uu.readyState === WebSocket.CLOSED) return console.warn(`${FZ} a closing or closed socket can't be attached`), null;
      const Uu = hX;
      if (!Uu || Uu.isStopped) return console.warn(`${FZ} no core is running to attach a socket to`), uu.close(), null;
      if (null === (0, vu.l)()) return console.warn(`${FZ} the game has not started to attach a socket to`), uu.close(), null;
      if (El > nE.v) return console.warn(`${FZ} this core has attached all the sockets it can; reload to play on`), uu.close(), null;
      if (bl && !ql && (Rf(Uu, !1, "all"), Uu.isStopped || Jq)) return uu.close(), null;
      Cf();
      const Zu = El++;
      if (!Jf(Uu, "open", Zu, su ? nE.cc.Resume : 0)) return uu.close(), null;
      su || wE.e.reset(), Wl = null === el ? null : {
        join: el,
        conn: Zu,
        activated: !1
      }, uu.binaryType = "arraybuffer";
      const Xu = new Jj.d((() => {
          ! function(uu, Eu) {
            if (oX !== Eu || uu.isStopped || null === Yf(Eu, RZ)) return;
            Eu.detach(), oX = null, Of(uu, Eu, RZ, "", !0), Eu.ws.close()
          }(Uu, lu)
        })),
        lu = {
          ws: uu,
          conn: Zu,
          pending: [],
          pendingBytes: 0,
          left: !1,
          resume: su,
          token: null,
          detach: () => {
            Xu.dispose(), uu.removeEventListener("message", qu), uu.removeEventListener("open", fu), uu.removeEventListener("close", Cu)
          }
        },
        qu = uu => {
          if (uu.data instanceof ArrayBuffer) {
            var Eu;
            const ju = new Uint8Array(uu.data);
            Xu.heard(), lu.token = null !== (Eu = (0, dj.e)(ju)) && void 0 !== Eu ? Eu : lu.token,
              function(uu, Eu, ju) {
                eC(uu, (() => {
                  uu.rings.net.writeFrame(Eu, ju) || uu.crash(cj.q, `a socket frame of ${ju.byteLength} bytes did not fit the net-in ring`)
                }));
                const su = uu.rings.net.cursor >= zZ;
                !JC() && (su || uu.netWrittenSinceFrame >= yZ) && Rf(uu, !1, document.hidden ? "all" : "budget");
                aC(uu)
              }(Uu, Zu, ju)
          }
        },
        fu = () => {
          su || (0, Ou.s)("wasm_socket_open", performance.now());
          for (const Eu of lu.pending.splice(0)) uu.send(Eu);
          lu.pendingBytes = 0
        },
        Cu = uu => {
          if (oX === lu && Uu.rings.net.cursor > 0 && Rf(Uu, !1, "all"), oX === lu) {
            if (lu.detach(), oX = null, Of(Uu, lu, uu.code, uu.reason) || Nf(Uu, lu)) return;
            Jf(Uu, "close", Zu), hf(Zu, lu.left), uf(Zu, uu.code, uu.reason)
          }
        };
      return uu.addEventListener("message", qu), uu.addEventListener("open", fu), uu.addEventListener("close", Cu), oX = lu, null === (Eu = (0, vu.l)()) || void 0 === Eu || Eu.socketAttached(Zu), (0, cu.m)({
        websocketUrl: ju
      }), Zu
    }

    function Cf() {
      const uu = oX;
      if (!uu) return;
      const Eu = hX,
        ju = uu.resume;
      ju && (bf(), oX !== uu) || (oX = null, uu.detach(), uu.ws.close(), null !== Eu && (Nf(Eu, uu) || ju && Of(Eu, uu, uX)) || (null !== Eu && Jf(Eu, "close", uu.conn), hf(uu.conn, uu.left)))
    }

    function bf() {
      const uu = hX;
      null !== uu && !uu.isStopped && !Jq && !ql && uu.rings.net.cursor > 0 && Rf(uu, !1, "all")
    }

    function Nf(uu, Eu) {
      var ju;
      if (!Eu.resume) return !1;
      const su = Pl;
      return null !== su && null !== Eu.token && "" !== Eu.token && (su.pendingHold = {
        conn: Eu.conn,
        token: `${su.roomId}:${Eu.token}`
      }), Jf(uu, "close", Eu.conn), null === (ju = (0, vu.l)()) || void 0 === ju || ju.socketDetached(Eu.conn), !0
    }

    function Of(uu, Eu, ju) {
      let su = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "",
        Uu = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
      const Zu = Yf(Eu, ju);
      if (null === Zu) return !1;
      const {
        dl: Xu,
        token: lu,
        game: qu,
        joinedAt: fu
      } = Zu;
      if (!Jf(uu, "close", Eu.conn, nE.y.Held)) return !0;
      console.warn(`${FZ} the game's connection ${Uu?"went silent":`dropped with code ${ju}`}, holding it`);
      const Cu = {
        closeReason: su,
        sinceJoinedMs: performance.now() - fu,
        game: qu
      };
      return (0, vj.reportDisconnect)((0, Fu.k)(ju), GX, Cu, Uu ? "silent" : void 0), Xu.heldConn = Eu.conn, Xu.dropCode = ju, Xu.pendingHold = {
        conn: Eu.conn,
        token: `${Xu.roomId}:${lu}`
      }, ql || Rf(uu, !1, "all"), !0
    }

    function Yf(uu, Eu) {
      const ju = Pl,
        Uu = al,
        Zu = uu.token;
      return null === ju || null === Uu || Jq || uu.left || Uu.conn !== uu.conn || null === Zu || "" === Zu ? null : (0, su.h)(Eu) && ju.resume.canHoldSeat() ? {
        dl: ju,
        token: Zu,
        game: Uu.game,
        joinedAt: Uu.joinedAt
      } : null
    }

    function hf(uu, Eu) {
      var ju;
      null === (ju = (0, vu.l)()) || void 0 === ju || ju.closeGame(uu), (0, VU.b)().close(uu), Eu || (0, cu.m)({
        websocketUrl: null
      })
    }

    function Df() {
      const uu = rl;
      if (null === uu) return;
      const Eu = (0, vu.l)();
      Jq || null === Eu || Eu.Wm(uu) ? rl = null : performance.now() - cl.pause >= UX && (cl.pause = performance.now(), console.warn(`${FZ} the cmd ring had no room for SetPaused(${uu}): written before the next frame`))
    }

    function gf() {
      const uu = Pl;
      Pl = null, null === uu || void 0 === uu || uu.resume.dispose()
    }

    function Mf(uu, Eu) {
      var ju, su;
      const {
        heldConn: Uu
      } = uu, Zu = uu.resume.resumingConn;
      uu.heldConn = 0, uu.pendingHold = null, Pl === uu && (Pl = null), "left" === Eu ? uu.resume.leave() : uu.resume.dispose(), 0 === Vl || (null === (ju = oX) || void 0 === ju ? void 0 : ju.conn) !== Vl || "left" === Eu && (null === (su = gl) || void 0 === su ? void 0 : su.conn) === Vl || wf(Vl), "gaveUp" === Eu && 0 !== Zu && wf(Zu), 0 !== Uu && "refused" !== Eu && (console.info(`${FZ} the game held through its drop ${"left"===Eu?"was left":"is given up"}`), null === hX || hX.isStopped || Jf(hX, "close", Uu), hf(Uu, !1))
    }

    function ef(uu, Eu) {
      const ju = Eu.indexOf(":");
      return {
        roomId: ju < 0 ? uu.roomId : Eu.slice(0, ju),
        roomToken: Eu.slice(ju + 1)
      }
    }

    function Gf(uu) {
      (0, Nj.logClientMeasurement)("join_preload", uu, {
        client: "wasm"
      })
    }

    function pf(uu) {
      var Eu;
      ol = uu;
      const ju = uu.replayOffer && Kl !== uu.conn;
      vl = ju ? uu.conn : 0, kl = ju || ml.has(uu.conn) ? 0 : uu.conn, pu.admitted(), uu.conn === Vl && (Vl = 0);
      const su = Pl;
      null !== su && (null === (Eu = al) || void 0 === Eu ? void 0 : Eu.conn) === uu.conn && su.resume.onInitialInfo(uu)
    }

    function wf(uu) {
      var Eu;
      const ju = oX;
      (null === ju || void 0 === ju ? void 0 : ju.conn) === uu && (ju.left = !0, null === (Eu = (0, vu.l)()) || void 0 === Eu || Eu.socketLeft(), (0, cu.m)({
        websocketUrl: null
      }), Lq(uu) ? setTimeout((() => {
        oX === ju && Cf()
      }), Bu.h) : Cf())
    }

    function Jf(uu, Eu, ju) {
      let su = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        Uu = !1;
      return eC(uu, (() => {
        const {
          net: Zu
        } = uu.rings;
        Uu = "open" === Eu ? Zu.writeOpen(ju, su) : Zu.writeClose(ju, su), Uu || uu.crash(cj.q, `a socket ${Eu} did not fit the net-in ring`)
      })), Uu
    }

    function df(uu, Eu, ju) {
      let su = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      if (kf()) return (0, vj.reportUnsupportedFallback)(uu, Eu, ju, su), void mf(`the wasm client can't run here (${ju}; ${Eu})`, Eu);
      (0, vj.showUnsupported)(uu, "unsupported", ju, su)
    }
    const af = 1500;

    function Pf(uu, Eu) {
      const ju = 1 === uu.missing.length && uu.missing[0] === Cj.e,
        su = Eu ? "blockedAfterLoss" : ju ? "noContext" : "unsupported";
      return {
        decline: su,
        detail: `No WebGPU or WebGL2, and WebGL1 lacks ${uu.missing.join(", ")}`,
        details: {
          missing: uu.missing.join(",")
        },
        retries: "unsupported" !== su && kf()
      }
    }

    function of(uu) {
      console.warn(`${FZ} ${uu}: reloading once more onto the wasm client`), (0, vU.r)(), (0, vj.flushCrashReports)(Ru.b).then(Ru.m, Ru.m)
    }

    function kf() {
      return Mq && "wasm" !== (0, GE.h)(window.location.search)
    }

    function mf(uu, Eu) {
      console.warn(`${FZ} ${uu}: reloading on the JS client`), null !== Eu && (0, GE.x)(Eu), (0, GE.v)(null === Eu ? "reloadOntoJs" : "decline");
      const ju = () => {
        (0, Ru.j)(GE.z)
      };
      (0, vj.flushCrashReports)(Ru.b).then(ju, ju)
    }

    function vf(uu, Eu, ju, su) {
      return nl(uu, Eu, ju, su)
    }

    function Kf() {
      null === Rl || null === hX || hX.isStopped || Jq || null !== tX || null === qX || (tX = Rl(qX, Qf, Wf().follow))
    }

    function Vf() {
      var uu, Eu, ju;
      return null !== (uu = null === (Eu = gX) || void 0 === Eu || null === (ju = Eu.textures) || void 0 === ju ? void 0 : ju.files()) && void 0 !== uu ? uu : null
    }

    function rf(uu) {
      Wf().follow((Eu => {
        null !== Eu && Promise.all([Promise.all([ju.e(204), ju.e(46)]).then((() => ju(51288))), (0, vU.O)()]).then((uu => {
          let [{
            followPagePackFiles: ju
          }, su] = uu;
          const Uu = null === su || (0, Cj.t)(su) ? "webgl" : su.backend;
          ju(Eu, GU.g, Uu, (uu => {
            GU.g.setPageFiles(uu)
          }), Qf)
        }), (Eu => {
          console.warn(`${FZ} the texture pack's files didn't load: the previews draw the shipped ones until the next opens`, Eu), uu()
        }))
      }))
    }

    function Qf(uu, Eu) {
      console.warn(`${FZ} ${uu}`, Eu)
    }

    function Wf() {
      return DX ??= new BU({
        load: uu => Promise.all([ju.e(204), ju.e(55)]).then((() => ju(51295))).then((Eu => {
          let {
            startPageTexturePackFeed: ju
          } = Eu;
          return ju(Qf, uu)
        })),
        store: Bj.h,
        HN: uu => {
          JX.then((() => {
            (0, vj.reportTexturePackFeedLoadFailure)(uu, GX)
          }))
        }
      }), DX
    }
    const Sf = uu => Wf().follow(uu);

    function If() {
      return Wf().loaded()
    }
    const Ff = function(uu, Eu, ju) {
        let su = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => performance.now(),
          Uu = 0;
        return async function(Zu, Xu) {
          let lu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => !0;
          const qu = ++Uu,
            fu = su() + Eu,
            Cu = await
          function(uu, Eu) {
            let ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {};
            return new Promise((su => {
              const Uu = setTimeout((() => {
                su(null), uu.then((uu => {
                  null !== uu && (uu.joinedWithout(), ju(uu))
                }))
              }), Eu);
              uu.then((uu => {
                clearTimeout(Uu), su(uu)
              }))
            }))
          }(uu(Zu), Eu, (uu => {
            qu === Uu && lu() && Xu(uu, su() + Eu).catch((uu => {
              ju("the texture pack step after the join failed", uu)
            }))
          }));
          return null === Cu ? null : Xu(Cu, fu)
        }
      }((uu => (0, bE.l)(uu) ? Wf().request() : Wf().forJoin()), FU.d, Qf),
      Bf = function(uu, Eu) {
        let ju = !1;
        return {
          setGamePackConfirm: uu => {
            ju = null !== uu, Eu(uu)
          },
          packStep: (Eu, su, Uu) => uu(Eu, su, (() => ju && Uu()))
        }
      }(Ff, (uu => {
        Wf().setGamePackConfirm(uu)
      }));

    function Lf(uu) {
      Bf.setGamePackConfirm(uu)
    }

    function tf() {
      if (Jq || null !== Uq || null === uq || null === sq) return;
      const {
        backend: uu,
        canvas: Eu,
        fallbackReason: ju,
        adapterVendor: su
      } = sq, Uu = uq;
      uq = null;
      try {
        Uq = Uu({
          backend: uu,
          canvas: Eu,
          fallbackReason: ju,
          adapterVendor: su,
          joinedGame: () => Jq ? null : gl,
          canSend: () => !Jq && null !== gl && gl.conn === kl,
          inGame: Tf,
          shaderPackReach: () => {
            var uu, Eu;
            return null !== (uu = null === (Eu = nX) || void 0 === Eu ? void 0 : Eu.reachInJoinedGame()) && void 0 !== uu ? uu : null
          },
          aY: () => xX,
          msaa: () => jq > 1,
          writeCmd: (uu, Eu, ju) => null !== qX && qX(uu, Eu, ju),
          takeFailedMeshJobs: () => {
            var uu, Eu;
            return null !== (uu = null === (Eu = KX) || void 0 === Eu ? void 0 : Eu.takeFailedMeshJobs()) && void 0 !== uu ? uu : 0
          },
          readLoadCounts: uu => {
            var Eu, ju;
            return null !== (Eu = null === (ju = hX) || void 0 === ju ? void 0 : ju.readLoadCounts(uu)) && void 0 !== Eu && Eu
          },
          mainStalled: (uu, Eu, ju) => {
            (0, vj.reportMainStall)(uu, Eu, ju, GX)
          }
        })
      } catch (Zu) {
        console.error(`${FZ} the frame telemetry didn't start`, Zu)
      }
    }

    function xf(uu, Eu) {
      try {
        var ju, su, Uu;
        const Zu = Tl && null !== (ju = null === (su = hX) || void 0 === su || null === (Uu = su.lastHeader) || void 0 === Uu ? void 0 : Uu.renderPending) && void 0 !== ju ? ju : 0;
        (0, Os.f)(Eu, uu, Tf() && !(null !== QU), Zu)
      } catch (Zu) {
        (0, Os.r)(), console.error(`${FZ} the quality steps stopped`, Zu)
      }
    }

    function Tf() {
      return null !== gl && Yq === gl && !Jq
    }

    function Hf(uu) {
      const Eu = Uq;
      Uq = null;
      try {
        null === Eu || void 0 === Eu || Eu.stop()
      } catch {}
      console.error(`${FZ} the frame telemetry threw: it stops`, uu)
    }

    function Af(uu) {
      var Eu, ju, su, Uu;
      if ((0, VU.b)().fire(uu), "message" === uu.type) {
        if (fl++, uu.VC === nE.Mc.ERROR && null !== el) {
          var Zu;
          const {
            text: Eu,
            dropsCache: ju
          } = (0, Fu.n)((new TextDecoder).decode(uu.payload));
          Bl ||= ju, (null === (Zu = Wl) || void 0 === Zu ? void 0 : Zu.conn) === uu.conn && (Ll = Eu)
        } else if (uu.VC === yE.mc.ResumeComplete) {
          var Xu;
          Kl = uu.conn, uu.conn === vl && (vl = 0, kl = ml.has(uu.conn) ? 0 : uu.conn), null === (Xu = Pl) || void 0 === Xu || Xu.resume.onResumeComplete(uu.conn)
        }
        return
      }
      uu.phase === nE.z.Left ? Cl = uu.conn : uu.phase === nE.z.Activated && (null === (Eu = Wl) || void 0 === Eu ? void 0 : Eu.conn) === uu.conn ? Wl.activated = !0 : uu.phase === nE.z.Resumed ? function(uu) {
        var Eu, ju;
        Vl = uu;
        const su = Pl;
        if (null === su || 0 === su.heldConn || (null === (Eu = oX) || void 0 === Eu ? void 0 : Eu.conn) !== uu || !oX.resume || null === al) return;
        console.info(`${FZ} the game resumed on conn ${uu}, waiting for its InitialInfo`);
        const Uu = su.heldConn;
        su.heldConn = 0, oX.resume = !1, al.conn = uu, (null === (ju = Jl) || void 0 === ju ? void 0 : ju.conn) === Uu && (Jl = {
          conn: uu,
          info: Jl.info
        }), wE.e.apply({
          shopInfo: null,
          _shopVersion: cE.b
        })
      }(uu.conn) : uu.phase === nE.z.Held ? function(uu) {
        var Eu;
        const ju = Pl,
          su = null !== (Eu = null === ju || void 0 === ju ? void 0 : ju.pendingHold) && void 0 !== Eu ? Eu : null;
        if (null !== ju && null !== su && su.conn === uu) return ju.pendingHold = null, ju.heldConn = uu, Vl = 0, console.warn(`${FZ} the core holds the game, reconnecting`), void ju.resume.onDropped(su.token);
        if (uu === Vl) {
          Vl = 0;
          const Eu = hX;
          null === Eu || Eu.isStopped || (console.info(`${FZ} the core held again a resumed game the shell ended before its InitialInfo: closing it again`), Jf(Eu, "close", uu))
        }
      }(uu.conn) : uu.phase === nE.z.Closed && (null === (ju = Pl) || void 0 === ju || null === (su = ju.pendingHold) || void 0 === su ? void 0 : su.conn) === uu.conn && (Pl.heldConn === uu.conn ? function(uu) {
        const Eu = uu.heldConn,
          ju = uu.dropCode;
        Mf(uu, "refused"), console.info(`${FZ} the core didn't hold the game through its drop: it hadn't started`), queueMicrotask((() => {
          hf(Eu, !1), uf(Eu, ju, "", !0)
        }))
      }(Pl) : Pl.pendingHold = null), uu.phase !== nE.z.Held && uu.phase !== nE.z.Left && uu.phase !== nE.z.Closed || (ml.add(uu.conn), uu.conn === kl && (kl = 0));
      const lu = Object.keys(nE.z).find((Eu => nE.z[Eu] === uu.phase)),
        qu = 0 === uu.code ? "" : ` (code ${uu.code})`;
      console.info(`${FZ} conn ${uu.conn}: ${null!==lu&&void 0!==lu?lu:uu.phase}${qu}, ${fl} raw messages so far`), (null === (Uu = gl) || void 0 === Uu ? void 0 : Uu.conn) !== uu.conn || uu.phase !== nE.z.Left && uu.phase !== nE.z.Closed || Bq(null), wl !== uu.conn || uu.phase !== nE.z.Left && uu.phase !== nE.z.Closed || (wl = null, null === gl && null === el && pU.e.setGame(void 0));
      for (const Cu of [...xl]) try {
        Cu(uu.conn, uu.phase, uu.code)
      } catch (fu) {
        (0, zE.p)(fu, `${FZ} a connection listener threw`)
      }
    }

    function nf() {
      (0, vU.r)(), null === gl && null === el || (0, Lj.e)(), queueMicrotask((() => {
        try {
          bC()
        } catch (uu) {
          console.warn(`${FZ} stopping before the reload threw`, uu)
        }(0, vj.flushCrashReports)(Ru.b).then(Ru.m, Ru.m)
      }))
    }

    function yf() {
      const uu = hX;
      null === uu || uu.isStopped || null === oX || ql || !uu.hasPendingCommands() || Rf(uu, !1, "budget")
    }

    function zf(uu) {
      var Eu;
      const ju = gl;
      uu.persisted || null === ju || (null === (Eu = oX) || void 0 === Eu ? void 0 : Eu.conn) !== ju.conn || oX.left || ju.leave()
    }

    function Rf(uu, Eu, su) {
      let Uu = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const Zu = ql;
      ql = !0;
      try {
        const Zu = uu.rings.net.cursor >= zZ;
        Zu && "all" !== su && !document.hidden && NC("backlog", `a shown tab's net-in is ${uu.rings.net.cursor} bytes behind: one frame reads it all`);
        return function(uu, Eu, su, Uu) {
          var Zu, Xu, lu, qu;
          if (Jq) return !1;
          if (eC(uu, EC), Jq || uu.isStopped) return !1;
          qC() && RX("modelsIn");
          Df(), jl = performance.now(), Cl = null, bl = !1, (0, mu.I)(), null === (Zu = SX) || void 0 === Zu || Zu.beforeFrame(), ks(jl, uu), (0, mu.C)(jl, jC), ll = !0;
          const fu = Eu && lC();
          let Cu;
          try {
            Cu = uu.frame(jl, fu, su)
          } finally {
            ll = !1
          }
          if (!Cu) return !1;
          Eq.observe(null !== (Xu = null === (lu = uu.lastHeader) || void 0 === lu ? void 0 : lu.chunksCancelled) && void 0 !== Xu ? Xu : 0);
          const bu = uu.lastFrameKind,
            cu = (0, QE.e)(bu);
          (function(uu) {
            null !== UZ && UZ.afterFrame(performance.now(), uu)
          })(cu), null === (qu = Zq) || void 0 === qu || qu.frame(uu, jl, bu), Eu && (hq = cu);
          cu && (0, KE.c)(jl);
          if (null !== Uq) try {
            Uq.frameRan(uu, jl, performance.now(), bu)
          } catch (Yu) {
            Hf(Yu)
          }
          "drawn" === bu && XC() && function() {
            for (const uu of [...kU]) uu()
          }();
          uu.forEachNetOut(fC);
          const Nu = oX;
          null !== Cl && (null === Nu || void 0 === Nu ? void 0 : Nu.conn) === Cl && CC(Nu, Bu.n);
          ZC(uu),
            function(uu) {
              const Eu = 0 !== (uu.headerWord(yE.K.LoadSteps) & yE.V.JoinPreload);
              Eu !== pl && (pl = Eu, (0, vj.setCrashAdPreload)(Eu), (0, Wj.z)())
            }(uu), Eu && function(uu) {
              var Eu, su, Uu;
              if (null === gl || !lC()) return;
              const Zu = uu.headerWord(yE.K.LoadSteps);
              null === Oq || Yq === gl && !Oq.frame(jl, 0 !== (Zu & yE.X.TerrainDrawn)) || (Oq = null);
              if (0 === (Zu & yE.V.PlayerBound)) return;
              const Xu = uu.lastHeader,
                lu = !Tl || 0 === (null === Xu || void 0 === Xu ? void 0 : Xu.renderPending);
              !fq && lu && (fq = !0, performance.mark(nZ));
              if (Yq === gl) return;
              const qu = null !== (Eu = null === Xu || void 0 === Xu ? void 0 : Xu.firstView) && void 0 !== Eu ? Eu : nE.W.NotYet;
              if (Tl && qu === nE.W.NotYet) return;
              if (qq && (!0 !== (null === (su = (0, vu.l)()) || void 0 === su ? void 0 : su.isSessionLive) || !lu)) return;
              Yq = gl;
              const fu = gl;
              if (setTimeout((() => {
                  gl === fu && (0, Ou.j)()
                }), 0), null === (Uu = nX) || void 0 === Uu || Uu.playable(), function() {
                  clearTimeout(PX), PX = setTimeout((() => {
                    Tf() && wC((uu => {
                      let {
                        prefetchWorldgenWorker: Eu
                      } = uu;
                      Eu()
                    }))
                  }), lX)
                }(), qq) return;
              qq = !0, performance.mark(AZ), (0, yU.p)("render") && Promise.all([ju.e(78), ju.e(49)]).then((() => ju(4866))).then((uu => {
                let {
                  renderDebugPlayable: Eu
                } = uu;
                Eu()
              }), (uu => {
                console.warn("The render debug topic didn't load", uu)
              }));
              const Cu = Math.round(performance.now()),
                bu = uu.readViewQueuedPrograms();
              null !== bu && (0, Ou.s)("wasm_view_links", Cu, (0, OE.zb)(bu));
              const cu = null === Nq || null === bq ? 0 : Math.max(0, bq - Nq),
                Nu = null === Nq ? 0 : Math.max(0, Cu - Nq),
                Yu = Tl ? uu.readFirstViewWait(cu, Nu) : null;
              null !== Yu && (0, Ou.p)(Yu);
              if (Tl && qu !== nE.W.Drawn) {
                const Eu = qu === nE.W.HeldBackstop ? "held_draws" : "long",
                  {
                    cause: ju
                  } = sC(uu);
                if (console.warn(`${FZ} playable at ${Cu} ms on the first view's ${Eu} backstop, ${ju}: it wasn't drawn whole in time`), (0, Ou.s)("wasm_view_backstop", Cu, `${Eu}:${ju}`), "long" === Eu) {
                  var hu, Du;
                  const Eu = null !== (hu = null === (Du = al) || void 0 === Du ? void 0 : Du.game) && void 0 !== hu ? hu : "";
                  Oq = new tj.b((() => {
                    const {
                      cause: ju,
                      census: su
                    } = sC(uu);
                    (0, vj.reportFirstViewNoTerrain)(Eu, ju, su, GX), (0, eE.x)("noTerrain")
                  }))
                }
              } else console.info(`${FZ} playable at ${Cu} ms${Tl?"":" (no renderer)"}`);
              setTimeout(zl, 0), (0, dE.g)().catch((uu => {
                console.error(`${FZ} item sprites didn't load, so item particles show the missing texture`, uu)
              })), NU.d.warm()
            }(uu);
          (0, cj.E)(uu, {
            worldgen: mX,
            mesh: KX
          }),
          function(uu) {
            uu.forEachEvent(vs);
            for (const Eu of ms) try {
              (0, ws.b)(Eu)
            } catch (Yu) {
              if ((0, zE.k)(Yu)) {
                uu.crashOn(cj.j, Yu);
                break
              }
              console.error(`${as} an input action listener threw`, Yu)
            }
            ms.length = 0
          }(uu), Uu && (0, rE.b)();
          return !uu.isStopped
        }(uu, Eu, "all" === su || Zu, Uu)
      } finally {
        ql = Zu, Zu || (sl = performance.now())
      }
    }

    function uC(uu) {
      console.error(`${FZ} a frame-start listener threw`, uu)
    }

    function EC() {
      var uu, Eu, ju, su;
      null === (uu = FX) || void 0 === uu || uu.drain(qX, fX), null === (Eu = TX) || void 0 === Eu || Eu.drain(qX), null === (ju = HX) || void 0 === ju || ju.drain(performance.now()), yl(qX), null === (su = tX) || void 0 === su || su.drain()
    }

    function jC(uu) {
      console.error(`${FZ} a before-frame listener threw`, uu)
    }

    function sC(uu) {
      const Eu = (0, vu.l)(),
        ju = (0, vu.w)(),
        su = null === Eu || null === ju ? null : ju.readDrawCensus(Eu.api);
      return {
        cause: (0, tj.e)(uu.headerWord(yE.K.LoadSteps), su),
        census: su
      }
    }
    const UC = {
      ChunkRequested: "wasm_chunk_requested",
      ChunkStored: "wasm_chunk_stored",
      MeshLanded: "wasm_mesh_landed",
      PlayerChunk: "wasm_player_chunk",
      TerrainDrawn: "wasm_terrain_drawn"
    };

    function ZC(uu) {
      var Eu;
      if (qq) return;
      if (null === bq && lC() && (bq = performance.now()), null === gl || 0 === (uu.headerWord(yE.K.LoadSteps) & yE.V.PlayerBound) ? Nq = null : Nq ??= performance.now(), null === el && null === gl) return;
      null === bq || cq || (cq = !0, (0, Ou.s)("wasm_startup_loaded", bq));
      let ju = 0;
      null !== gl ? ju = -1 : !0 === (null === (Eu = Wl) || void 0 === Eu ? void 0 : Eu.activated) && (ju = ~yE.X.TerrainDrawn);
      const su = uu.headerWord(yE.K.LoadSteps) & ju & ~Cq;
      if (0 === su) return;
      Cq |= su;
      const Uu = performance.now();
      for (const [Zu, Xu] of Object.entries(UC)) 0 !== (su & yE.X[Zu]) && (0, Ou.s)(Xu, Uu)
    }

    function XC() {
      return Tl && lC()
    }

    function lC() {
      return AX && qC()
    }

    function qC() {
      return null === FX || FX.startupDone
    }

    function fC(uu, Eu) {
      const ju = oX;
      (null === ju || void 0 === ju ? void 0 : ju.conn) === uu ? CC(ju, Eu) : Ol++
    }

    function CC(uu, Eu) {
      const {
        ws: ju
      } = uu;
      return ju.readyState === WebSocket.OPEN ? (ju.send(Eu), !0) : ju.readyState === WebSocket.CONNECTING && uu.pendingBytes + Eu.byteLength <= sX ? (uu.pending.push(Eu.slice()), uu.pendingBytes += Eu.byteLength, !0) : (Ol++, !1)
    }

    function bC() {
      var uu, Eu, ju, su, Uu, Zu, Xu, lu, qu, fu, Cu, bu, cu, Nu, Ou, Yu, hu;
      Jq = !0, Dq.stop(), (0, RU.endLookDebugTake)(), UZ = null, gf(), (0, mu.H)().unlockPointer(), (0, mu.F)(null), null === (uu = IX) || void 0 === uu || uu(), IX = null, null === (Eu = (0, vu.w)()) || void 0 === Eu || Eu.followCursorAim(null), (0, rE.C)(), (0, vu.i)(), eX.stop(), null === (ju = Xq) || void 0 === ju || ju(), Xq = null, null === (su = lq) || void 0 === su || su(), lq = null, null === (Uu = Uq) || void 0 === Uu || Uu.stop(), Uq = null, (0, Tj.o)(null), null === (Zu = kX) || void 0 === Zu || Zu(), kX = null, null === (Xu = mX) || void 0 === Xu || Xu.stop(), mX = null, null === (lu = KX) || void 0 === lu || lu.stop(), KX = null, null !== (qu = gX) && void 0 !== qu && null !== (fu = qu.textures) && void 0 !== fu && fu.assets && (0, MU.l)(null), null === (Cu = gX) || void 0 === Cu || Cu.stop(), gX = null, MX = null;
      const Du = VX;
      VX = null, Du && (Du.stop(), MC(Du)), null === (bu = TX) || void 0 === bu || bu.dispose(), TX = null, null === (cu = HX) || void 0 === cu || cu.dispose(), HX = null, FX = null, null === (Nu = LX) || void 0 === Nu || Nu(), LX = null, null === (Ou = WX) || void 0 === Ou || Ou(), WX = null, null !== Xl && (clearTimeout(Xl), Xl = null), null === (Yu = SX) || void 0 === Yu || Yu.stop(), SX = null, Sq(), pU.e.release(), Cf();
      const gu = tX;
      tX = null;
      try {
        null === gu || void 0 === gu || gu.dispose()
      } catch (Mu) {
        console.warn(`${FZ} the sky's images didn't release`, Mu)
      }(0, OU.h)(null), null === (hu = OX) || void 0 === hu || hu.pagePreviews().endSession(null === (0, YE.r)())
    }

    function cC(uu, Eu) {
      var ju, su;
      const Uu = null !== (ju = null === (su = VX) || void 0 === su ? void 0 : su.details()) && void 0 !== ju ? ju : {},
        Zu = uu.site === LZ || uu.site === tZ || uu.site === vj.RENDER_RELOAD_SITE || uu.site === xZ ? uu.error instanceof WebAssembly.RuntimeError || uu.error instanceof Xj.d : !(0, Cj.x)(uu.error) && (0, cj.B)(uu);
      Zu && uu.error instanceof Error && (0, YE.U)(uu.error);
      const Xu = Zu || uu.site === cj.r ? (0, vj.readTrap)(uu.error) : null,
        lu = null !== Xu && (0, uj.h)(Xu.kind, Xu.refusedBytes) ? Xu.refusedBytes : 0,
        qu = (0, Pj.o)(),
        fu = null === rX ? (0, CU.r)(function() {
          try {
            return (0, YE.z)().buffer.byteLength
          } catch {
            return 0
          }
        }(), lu, qu) : rX.ceilingMayRefuse(lu, qu),
        Cu = lu > 0 && !fu && kf();
      var bu;
      if (Cu && ((0, GE.x)("oom"), (0, GE.v)("decline"), wq = !0), bC(), (0, vU.e)()) return console.warn(`${FZ} the session stopped at ${uu.site} as the page reloads`, uu.error), void((0, Cj.x)(uu.error) || (null === (bu = uu.header) || void 0 === bu ? void 0 : bu.lastError) === nE.D.CoreBusy || (0, vj.reportStoppedCore)(uu, Eu, Xu, {
        memoryDetails: Uu,
        declined: Cu
      }));
      (0, vj.showCrash)(uu, Eu, Xu, {
        memoryDetails: Uu,
        declined: Cu
      })
    }

    function NC(uu, Eu) {
      const ju = performance.now();
      return !(ju - cl[uu] < UX) && (cl[uu] = ju, console.warn(`${FZ} ${Eu}`), !0)
    }

    function OC(uu) {
      const {
        input: Eu,
        net: ju,
        worker: su
      } = uu.rings, Uu = uu.optionsDropped, Zu = Eu.dropped + Uu + ju.dropped + su.dropped + Ol;
      Zu !== Nl && NC("dropped", `${Zu} records dropped so far (input ${Eu.dropped}, options ${Uu}, net ${ju.dropped}, worker ${su.dropped}, net-out ${Ol})`) && (Nl = Zu)
    }

    function YC() {
      var uu, Eu;
      const ju = (0, ij.c)();
      if (null === ju) return null;
      const su = (0, Fj.q)(ju);
      return {
        ...su,
        horizontal: Math.min(su.horizontal, null !== (uu = null === (Eu = VX) || void 0 === Eu ? void 0 : Eu.shedDistanceInUse()) && void 0 !== uu ? uu : 1 / 0)
      }
    }

    function hC(uu) {
      var Eu, ju;
      return {
        samples: Tl ? jq : null,
        sunShadows: uu,
        renderDistance: null !== (Eu = null === (ju = YC()) || void 0 === ju ? void 0 : ju.horizontal) && void 0 !== Eu ? Eu : null
      }
    }

    function DC(uu) {
      Gl = uu, (0, Wj.z)()
    }

    function gC() {
      var uu, Eu, ju;
      const su = YC();
      return {
        ...null === (uu = VX) || void 0 === uu ? void 0 : uu.pageKillSnapshot(),
        renderDistance: null !== (Eu = null === su || void 0 === su ? void 0 : su.horizontal) && void 0 !== Eu ? Eu : null,
        renderDistanceVertical: null !== (ju = null === su || void 0 === su ? void 0 : su.vertical) && void 0 !== ju ? ju : null,
        chunkCap: QX,
        budgetBasis: iX,
        renderBackend: (0, vU.D)(),
        adPreload: pl,
        ...(0, Sj.e)(Gl)
      }
    }

    function MC(uu) {
      var Eu;
      console.info(`${FZ} wasm memory at the session's end`, uu.details());
      const {
        wasmMainMiB: ju,
        wasmWorkersMiB: su,
        peakStoredChunks: Uu
      } = uu.pageKillSnapshot(), Zu = navigator.deviceMemory;
      (0, Nj.logClientMeasurement)("wasm_memory_end", {
        wasmMainMiB: ju,
        wasmWorkersMiB: su,
        peakStoredChunks: Uu
      }, {
        client: "wasm",
        renderBackend: null !== (Eu = (0, vU.D)()) && void 0 !== Eu ? Eu : "none",
        os: (0, Ij.getOperatingSystem)(),
        deviceMemory: String(null !== Zu && void 0 !== Zu ? Zu : "unreported")
      })
    }

    function eC(uu, Eu) {
      if (!uu.isStopped) try {
        Eu()
      } catch (ju) {
        uu.crash(cj.s, ju)
      }
    }

    function GC() {
      return vX ??= ju.e(72).then((() => ju(51298))).catch((uu => {
        throw vX = null, uu
      })), vX
    }
    async function pC() {
      const {
        createWorldgenWorker: uu,
        worldgenWorkerReady: Eu
      } = await GC();
      return await Eu(), uu
    }

    function wC(uu) {
      var Eu;
      null === (Eu = vX) || void 0 === Eu || Eu.then(uu, (() => {}))
    }

    function JC() {
      return performance.now() - Math.max(sl, Ul) >= ZX
    }

    function dC(uu) {
      const Eu = document.hidden || Zl ? "all" : "budget";
      Zl = !0;
      const ju = Rf(uu, !1, Eu);
      var su;
      ju && (OC(uu), null === (su = VX) || void 0 === su || su.afterFrame());
      return ju
    }

    function aC(uu) {
      uu.isStopped || 0 === uu.rings.net.cursor || JC() && !dC(uu) || uu.rings.net.cursor > 0 && performance.now() - Ul >= ZX / 2 && function(uu) {
        Xl ??= setTimeout((() => {
          Xl = null, aC(uu)
        }), ZX)
      }(uu)
    }

    function PC(uu, Eu) {
      return async function(uu, Eu, ju) {
        let {
          stop: su,
          stillWanted: Uu,
          beforeReload: Zu
        } = ju;
        const Xu = await (0, Hs.j)(uu, {
          stillWanted: Uu,
          beforeReload: async () => {
            su(), await Promise.all([(0, vj.flushCrashReports)(Ru.b), null === Zu || void 0 === Zu ? void 0 : Zu()])
          },
          reload: Ru.m
        });
        return Xu || Eu(), Xu
      }(uu, Eu, {
        ...arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        stop: bC
      })
    }
    let oC = !1;

    function kC() {
      return oC = !0, async function(uu, Eu, su) {
        const {
          gamePackSource: Uu
        } = await ju.e(276).then((() => ju(41276)));
        await Bf.packStep(uu, ((ju, su) => ju.packForGame(uu, Uu(Eu), su)), su)
      }(...arguments)
    }

    function mC(uu) {
      ! function(uu, Eu) {
        uu((uu => {
          null === uu || void 0 === uu || uu.subscribe((uu => {
            let {
              pack: ju,
              gameSource: su
            } = uu;
            Eu(null === su || null === ju ? null : {
              pack: ju,
              source: "" === su ? null : su
            })
          }))
        }))
      }(Sf, uu)
    }
    let vC = !1,
      KC = null,
      VC = !1,
      rC = !1;

    function QC() {
      var uu;
      vC || (vC = !0, mq("play", yu), (0, cu.k)(new AC), lu.gameBridge.attach(Iu), BC().catch((() => {})), (0, vu.A)((uu => {
        fE(uu.setTextHost)
      })), uu = SC, Fl.add(uu), function(uu) {
        for (const Eu of yX) uu(Eu);
        zX.add(uu)
      }((uu => {
        WC(iC[uu])
      })))
    }
    const iC = {
      booted: Zu.j.INITIALISE_NOA,
      texturesIn: Zu.j.REGISTRATION,
      modelsIn: Zu.j.SETUP_LIFEFORMS
    };

    function WC(uu) {
      qu.h.TY("matchmakeAndPlayStepCompleted", {
        step: uu,
        totalSubSteps: 1
      })
    }

    function SC(uu) {
      if (!VC) return;
      const {
        gameNameWithVariation: Eu,
        lobbyName: ju
      } = (0, cu.b)();
      if (uu.code === su.b.serverUpdating.code) return (new AC).leaveLive(), void FC(Eu, ju);
      qu.h.TY("unwantedLeftGame", {
        reason: IC(uu),
        requiresRefresh: uu.requiresRefresh,
        canReconnect: null !== uu.reconnect,
        automaticallyReconnect: uu.reconnecting,
        canPlayAgain: uu.canPlayAgain,
        gameNameWithVariation: Eu,
        lobbyName: ju
      }), (new AC).leaveLive()
    }

    function IC(uu) {
      return null !== uu.reasonKey ? {
        translationKey: uu.reasonKey
      } : "gameOrPluginKick" === uu.name ? uu.reason : `You have disconnected from the server.\n${uu.reason}`
    }

    function FC(uu, Eu) {
      var su;
      su = (0, fu.G)(uu, Eu), Promise.resolve().then((() => ju(1570))).then((uu => {
        let {
          navigatePreserveSearch: Eu
        } = uu;
        Eu(su)
      })).catch((uu => {
        console.warn("[bloxd-wasm-client] the page's router didn't navigate: loading the page instead", uu), (0, Ru.f)(su)
      }))
    }

    function BC() {
      return KC ??= Promise.all([ju.e(73), ju.e(76), ju.e(75), ju.e(74), ju.e(90), ju.e(87), ju.e(273), ju.e(191), ju.e(228), ju.e(252), ju.e(275), ju.e(47)]).then((() => ju(41221))).then((uu => {
        try {
          uu.attachPlayGameSources()
        } catch (Eu) {
          throw console.error("[bloxd-wasm-client] the play sources did not attach", Eu),
            function(uu) {
              JX.then((Eu => {
                null === Eu || Eu.isStopped || Jq ? console.warn(`${FZ} the play sources threw as they attached, after the client stopped`, uu) : cC({
                  site: xZ,
                  error: uu,
                  header: null
                }, GX)
              }))
            }(Eu), Eu
        }
      }), (uu => {
        throw KC = null, new vu.e(uu)
      })), KC
    }
    async function LC(uu, Eu) {
      QC(), oC = !0, VC = !0;
      let ju = {
          place: uu.place,
          matchedAt: uu.matchedAt
        },
        Xu = uu.place.gameNameWithVariation;
      const lu = (0, bu.d)();
      let qu = null;
      const fu = await rq({
        matchmake: async () => {
          let Eu = ju;
          if (ju = null, null === Eu) {
            const ju = await uu.rematch();
            if (ju.isError()) throw qu = ju.asError().forward(), new Error(ju.asError().message);
            Eu = {
              place: ju.getValue(),
              matchedAt: performance.now()
            }
          }
          Xu = Eu.place.gameNameWithVariation;
          return {
            target: await (0, tu.h)(uu.userContext, Eu.place, If(), lu),
            matchedAt: Eu.matchedAt,
            freshMs: tu.d
          }
        },
        pageReady: BC,
        onFailure: (uu, Eu) => {
          null === qu && function(uu, Eu) {
            (0, vj.reportPageJoinFailure)(uu, GX, Eu)
          }(uu, {
            sinceJoinStartMs: Eu,
            game: Xu
          })
        },
        rejoin: () => () => {},
        invalidateTrafficCode: () => uu.userContext.invalidateTrafficCode(),
        signal: Eu
      });
      switch (fu.kind) {
        case "joined":
          if (lu) {
            setTimeout((() => {
              pu.ready()
            }), 0);
            const {
              game: uu
            } = fu;
            (0, bu.p)((() => {
              uu.endJoinAd() && ((0, Ou.l)(), pu.adEnded())
            }))
          }
          return rC || (rC = !0, (0, Ju.c)()), VC ? (WC(Zu.j.CONNECT_TO_GAME_SERVER), WC(Zu.j.SHADER_PACK), function() {
            var uu, Eu;
            return null !== (uu = null === (Eu = nX) || void 0 === Eu ? void 0 : Eu.runsInJoinedGame()) && void 0 !== uu && uu
          }() && (0, wu.f)(uu.userContext, Xu).catch((uu => {
            console.error("Failed to report the shader pack session", uu)
          })), function() {
            const uu = function() {
              var uu, Eu;
              return null !== (uu = null === (Eu = nX) || void 0 === Eu ? void 0 : Eu.couldntRunInJoinedGame()) && void 0 !== uu ? uu : null
            }();
            null !== uu && (0, wu.e)(uu)
          }(), Uu.c.value(void 0)) : HC("The server ended the game as it joined");
        case "failed":
          if (!fu.reloading) {
            if (null !== qu) return qu;
            if ((fu.error instanceof Bu.o || fu.error instanceof Bu.e) && fu.error.code === su.b.serverUpdating.code) {
              if (Eu.aborted) return HC("Left the game while it loaded");
              const {
                gameNameWithVariation: uu,
                lobbyName: ju
              } = (0, cu.b)();
              return FC(uu, ju), HC("The server is updating")
            }
            return fu.error instanceof zu.e ? Uu.c.errorWithCode(fu.error.messageKey, Zu.j.SHADER_PACK, {
              severity: "medium"
            }) : Uu.c.errorWithCode(function(uu) {
              if (uu instanceof Bu.w || uu instanceof ou.g) return uu.message;
              if (tC(uu)) return (0, Fu.m)(uu.code, uu.serverText);
              return Fu.i
            }(fu.error), Zu.j.CONNECT_TO_GAME_SERVER, {
              error: xC(fu.error) ? fu.error : void 0,
              severity: TC(fu.error),
              gameServerUnreachable: (0, Lu.c)(fu.error),
              joinFailure: (0, Lu.i)(fu.error),
              rematch: (0, au.d)(fu.error),
              gameRefused: (0, Pu.d)(fu.error)
            })
          }
          return HC("Reloading into the new build");
        case "stopped":
          return HC("The game client stopped, and shows why");
        case "Lj":
          return HC("Left the game while it loaded")
      }
    }

    function tC(uu) {
      return uu instanceof Bu.o || uu instanceof Bu.e && "attach" !== uu.stage
    }

    function xC(uu) {
      return !(uu instanceof Bu.w) && !tC(uu) && void 0 === (0, Lu.c)(uu)
    }

    function TC(uu) {
      return tC(uu) ? uu instanceof Bu.e && (0, Fu.k)(uu.code).requiresRefresh ? "medium" : "low" : xC(uu) || uu instanceof Bu.w ? "medium" : "low"
    }

    function HC(uu) {
      return Uu.c.errorWithCode(uu, Zu.j.CONNECT_TO_GAME_SERVER, {
        severity: "low",
        Lj: !0
      })
    }
    class AC {
      leave(uu) {
        if ((0, ku.d)()) {
          var Eu, ju;
          if ((0, Xu.c)()) return;
          (0, Nu.e)(!0 === (null === (Eu = (0, ku.j)()) || void 0 === Eu || null === (ju = Eu.currentViewer) || void 0 === ju ? void 0 : ju.unsavedChanges), uu)
        } else this.leaveLive()
      }
      leaveLive() {
        var uu;
        oC && (null === (uu = If()) || void 0 === uu || uu.endGamePack());
        if (!VC) return;
        VC = !1, (0, du.d)();
        try {
          var Eu;
          null === (Eu = (0, vu.w)()) || void 0 === Eu || Eu.clearWasmCameraScreen()
        } catch (su) {
          console.error("[bloxd-wasm-client] the camera screen didn't clear", su)
        }
        const {
          gameNameWithVariation: ju
        } = (0, cu.b)();
        try {
          xq()
        } finally {
          (0, cu.m)({
            websocketUrl: null
          }), qu.h.TY("leaveGame", {
            gameNameWithVariation: ju
          }), (0, Cu.E)()
        }
      }
      isReplay() {
        return (0, ku.d)()
      }
    }
  },
  41153: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => Uu,
      h: () => su,
      l: () => lu,
      p: () => Xu
    });
    const su = 12e4,
      Uu = 3e4,
      Zu = {
        hidden: () => "undefined" !== typeof document && document.hidden,
        listen: uu => "undefined" === typeof document ? () => {} : (document.addEventListener("visibilitychange", uu), () => {
          document.removeEventListener("visibilitychange", uu)
        })
      };

    function Xu(uu) {
      return `it sent no start within ${Math.round(uu)} ms`
    }
    class lu {
      constructor(uu, Eu) {
        let ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => performance.now(),
          su = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Zu;
        this.timeoutMs = uu, this.onTimeout = Eu, this.now = ju, this.visibility = su, this.timer = null, this.counted = 0, this.step = null, this.unlisten = void 0, this.unlisten = su.listen((() => {
          this.onVisibility()
        })), su.hidden() || this.next()
      }
      cancel() {
        this.pause(), this.unlisten()
      }
      onVisibility() {
        this.visibility.hidden() ? (this.counted += this.credit(), this.pause()) : null === this.timer && this.next()
      }
      credit() {
        const uu = this.step;
        return null === uu ? 0 : Math.min(this.now() - uu.at, uu.ms)
      }
      pause() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null), this.step = null
      }
      next() {
        const uu = this.timeoutMs - this.counted;
        if (uu <= 0) return void this.arm(1e3, (() => {
          this.cancel(), this.onTimeout(this.counted)
        }));
        const Eu = Math.min(uu, 5e3);
        this.step = {
          at: this.now(),
          ms: Eu
        }, this.arm(Eu, (() => {
          this.counted += this.credit(), this.step = null, this.next()
        }))
      }
      arm(uu, Eu) {
        this.timer = setTimeout((() => {
          this.timer = null, Eu()
        }), uu)
      }
    }
  },
  39935: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => lu
    });
    var su = ju(349),
      Uu = ju(1069);
    const Zu = new Set(["bingo", "buildAFactory2", "classic", "testGym"]),
      Xu = new Set(["creativeFlat", "skyGrid"]);

    function lu(uu) {
      const Eu = (0, su.Vb)(uu);
      return "classic" !== Eu ? Zu.has(Eu) : !(0, Uu.l)(uu) && !Xu.has((0, su.Qb)(uu))
    }
  },
  38128: (uu, Eu, ju) => {
    function su(uu) {
      return "string" !== typeof uu || 2 !== uu.length && ":" !== uu[2] ? null : uu[0] + uu[1]
    }
    ju.d(Eu, {
      B: () => Yu,
      b: () => hu,
      e: () => pu,
      i: () => Gu,
      m: () => wu,
      o: () => lu,
      s: () => Xu,
      v: () => Zu,
      w: () => qu,
      z: () => Du
    });
    const Uu = ["op:ytInitialPlayerResponse.adPlacements", "op:ytInitialPlayerResponse.playerAds", "op:ytInitialPlayerResponse.adSlots", "op:playerResponse.adPlacements", "op:playerResponse.playerAds", "op:playerResponse.adSlots"];

    function Zu(uu) {
      if (function(uu) {
          for (let Eu = 0; Eu < Uu.length; Eu++)
            if (uu === Uu[Eu]) return !0;
          return !1
        }(uu)) return !1;
      const Eu = su(uu);
      return "op" === Eu || "ep" === Eu || "wi" === Eu || "pp" === Eu || "fp:call" === uu || "fp:t" === uu
    }

    function Xu(uu) {
      return "fp" === su(uu) && !Zu(uu)
    }

    function lu(uu) {
      if ("string" !== typeof uu) return !1;
      return "o" === uu[0] && "p" === uu[1] && (2 === uu.length || ":" === uu[2]) || "fp:call" === uu || "2" === uu || "t" === uu || "a" === uu
    }

    function qu(uu, Eu) {
      return `~${function(uu){return uu.length<2?uu:":"===uu[1]?uu[0]:uu[0]+uu[1]}(Eu)}~${uu}`
    }
    const fu = 200;

    function Cu(uu) {
      let Eu = uu.length - 1;
      for (let ju = 0; ju < 2; ju++) {
        const ju = Eu;
        for (; Eu >= 0 && uu[Eu] >= "0" && uu[Eu] <= "9";) Eu--;
        if (Eu < 0 || Eu === ju || ":" !== uu[Eu]) return -1;
        Eu--
      }
      return Eu + 1
    }

    function bu(uu) {
      return "unknown" === uu || Cu(uu) >= 0
    }

    function cu(uu, Eu) {
      return uu[Eu] >= "\ud800" && uu[Eu] <= "\udbff" && Eu + 1 < uu.length && uu[Eu + 1] >= "\udc00" && uu[Eu + 1] <= "\udfff" ? 2 : 1
    }

    function Nu(uu, Eu, ju) {
      return 2 === ju ? 4 : uu[Eu] <= "\x7f" ? 1 : uu[Eu] <= "\u07ff" ? 2 : 3
    }

    function Ou(uu, Eu, ju) {
      let su = 0;
      for (; su < Eu;) {
        const Eu = cu(uu, su),
          Uu = Nu(uu, su, Eu);
        if (Uu > ju) break;
        ju -= Uu, su += Eu
      }
      return su
    }

    function Yu(uu) {
      let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1 / 0;
      if ("string" !== typeof uu || uu.length > fu || !bu(uu)) return "t";
      let ju = 2;
      for (let lu = 0; lu < uu.length;) {
        const Eu = cu(uu, lu);
        ju += Nu(uu, lu, Eu), lu += Eu
      }
      if (ju <= Eu) return `t ${uu}`;
      const su = Cu(uu),
        Uu = Eu - 2 - (uu.length - su);
      if (Uu < 0) return "t";
      const Zu = Ou(uu, su, Uu);
      let Xu = "t ";
      for (let lu = 0; lu < Zu; lu++) Xu += uu[lu];
      for (let lu = su; lu < uu.length; lu++) Xu += uu[lu];
      return Xu
    }
    const hu = 62;

    function Du(uu) {
      let Eu = "so:";
      const ju = Ou(uu, uu.length, hu - Eu.length);
      for (let su = 0; su < ju; su++) Eu += uu[su];
      return Eu
    }
    const gu = "BABYLON ",
      Mu = "DECODE ",
      eu = "BABYLON@ ";

    function Gu(uu) {
      return Du(gu + uu)
    }

    function pu(uu, Eu) {
      return Du(eu + uu + " " + Eu)
    }

    function wu(uu) {
      return Du(Mu + uu)
    }
  },
  41075: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => su
    });
    const su = {
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
  38361: uu => {
    uu.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAKUlEQVQYGWM8CwQMeAATHjmw1JBQwAh06v+LFy8yvH//noGXl/ccuq8A/vQKd00yOdIAAAAASUVORK5CYII="
  },
  38352: uu => {
    uu.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAALUlEQVQYGWM8CwQMeAATHjmw1JBQwAh06v8DBw4wCAoKMnBzczN8/PjxHLLPAORwCnfkvOdNAAAAAElFTkSuQmCC"
  },
  38365: uu => {
    uu.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAKUlEQVQYGWM8CwQMeAATHjmw1JBQwAh06v8DBw4wCAoKMvz58+ccuq8A8vQKd2AxC9MAAAAASUVORK5CYII="
  },
  38347: uu => {
    uu.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAANUlEQVQYGWM8CwQMeAATHjmw1JBQAHLp/wMHDvy/ePHi/4CAgP937tz5Ly6u+5/P3uw/KAgAgjwWhHm22JoAAAAASUVORK5CYII="
  },
  38357: uu => {
    uu.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAKUlEQVQYGWM8CwQMeAATHjmw1JBQwAh06v8DBw4wCAoKMvz58+ccuq8A8vQKd2AxC9MAAAAASUVORK5CYII="
  },
  39069: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => Zu
    });
    var su = ju(3017);
    const Uu = ["none", "idle", "now"];

    function Zu() {
      const uu = () => (0, su.F)();
      return {
        memoryBytes: () => (0, su.z)().buffer.byteLength,
        reserveUpFront: Eu => uu().Xb(Eu),
        reserveAhead: Eu => uu().Zb(Eu),
        setCeiling: Eu => {
          uu().lb(Eu)
        },
        lowWater: () => Uu[uu().Ub()] ?? "none",
        stats: () => function(uu) {
          const Eu = new Uint32Array((0, su.z)().buffer, uu, 17),
            ju = uu => Eu[uu] ?? 0,
            Uu = uu => ({
              upFront: ju(uu),
              ahead: ju(uu + 1),
              onDemandInFrame: ju(uu + 2),
              onDemand: ju(uu + 3)
            });
          return {
            memoryBytes: ju(0),
            initialBytes: ju(1),
            liveBytes: ju(2),
            peakLiveBytes: ju(3),
            headroomBytes: ju(4),
            unusedBytes: ju(5),
            ceilingBytes: ju(6),
            reservesRefused: ju(7),
            grows: Uu(8),
            grownBytes: Uu(12),
            allocationsRefused: ju(16)
          }
        }(uu().qb()),
        takeBallast: () => uu().fb(),
        takePressure: () => uu().Cb()
      }
    }
  },
  5209: (uu, Eu, ju) => {
    ju.d(Eu, {
      A: () => cu,
      c: () => lu,
      e: () => Xu,
      h: () => su,
      j: () => Yu,
      k: () => bu,
      o: () => Uu,
      p: () => Zu,
      s: () => fu,
      w: () => Cu
    });
    const su = 5;

    function Uu(uu) {
      return uu === su
    }

    function Zu(uu) {
      return [...uu.features]
    }
    const Xu = 262144,
      lu = 256,
      qu = 256;

    function fu(uu) {
      if ("object" !== typeof uu || null === uu || Array.isArray(uu)) return "The pack has no files.";
      const Eu = [];
      for (const [ju, su] of Object.entries(uu)) {
        if ("string" !== typeof su) return `${ju} isn't text.`;
        Eu.push({
          path: ju,
          source: su
        })
      }
      return Eu.sort(((uu, Eu) => bu(uu.path, Eu.path))),
        function(uu) {
          if (0 === uu.length) return "The pack has no .wgsl files.";
          if (uu.length > lu) return `The pack has more than ${lu} .wgsl files.`;
          const Eu = new Set;
          for (const {
              path: ju
            }
            of uu) {
            const uu = Nu(ju);
            if (null !== uu) return uu;
            if (Eu.has(ju)) return `The pack has two files at ${ju}.`;
            Eu.add(ju)
          }
          return cu(uu) > Xu ? `The pack's .wgsl files are over ${Xu/1024} KB in total.` : null
        }(Eu) ?? Eu
    }

    function Cu(uu) {
      const Eu = {};
      for (const ju of uu) Eu[ju.path] = ju.source;
      return Eu
    }

    function bu(uu, Eu) {
      return uu < Eu ? -1 : uu > Eu ? 1 : 0
    }

    function cu(uu) {
      const Eu = new TextEncoder;
      let ju = 0;
      for (const {
          source: su
        }
        of uu) ju += Eu.encode(su).byteLength;
      return ju
    }

    function Nu(uu) {
      if (!uu.toLowerCase().endsWith(".wgsl")) return `${uu} isn't a .wgsl file.`;
      if (uu.length > qu) return `A file path is over ${qu} characters.`;
      if (uu.includes("\\") || /[\u0000-\u001f]/.test(uu)) return `${uu} isn't a valid file path.`;
      return uu.split("/").some((uu => "" === uu || "." === uu || ".." === uu)) ? `${uu} isn't a valid file path.` : null
    }
    const Ou = /^(.*)\[rot\[([1-4])$/;

    function Yu(uu, Eu) {
      let ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
      const su = new Map;
      Eu.forEach(((uu, Eu) => {
        let {
          numAnimStates: ju,
          animStartIdx: Uu
        } = uu;
        for (let Zu = 1; Zu < ju; Zu++) su.set(Uu + Zu - 1, Eu)
      }));
      const Uu = Object.entries(uu),
        Zu = new Map;
      for (const [Yu, hu] of Uu) {
        const uu = Ou.exec(Yu);
        "1" === uu?.[2] && Zu.set(uu[1], hu + 1)
      }
      const Xu = uu => {
          const Eu = Ou.exec(uu);
          return Eu && Zu.has(Eu[1]) ? {
            root: Eu[1],
            rotation: Number(Eu[2]) - 1
          } : null
        },
        lu = new Set(Uu.map((uu => {
          let [Eu] = uu;
          return Xu(Eu)?.root ?? Eu
        }))),
        qu = (uu, ju) => {
          const su = uu.replace(/_?0$/, "");
          return (Eu[ju]?.numAnimStates ?? 0) > 1 && !lu.has(su) ? su : uu
        },
        fu = new Map;
      for (const [Ou, Yu] of Uu) fu.set(Yu, qu(Xu(Ou)?.root ?? Ou, Yu));
      const Cu = Uu.reduce(((uu, Eu) => {
          let [, ju] = Eu;
          return Math.max(uu, ju + 1)
        }), 0),
        bu = Array.from({
          length: Cu
        }, ((uu, Eu) => ({
          id: Eu + 1,
          rotation: 0
        }))),
        cu = new Map,
        Nu = new Map;
      for (const [Ou, Yu] of Uu) {
        const uu = Xu(Ou),
          Eu = su.get(Yu);
        if (void 0 !== Eu) {
          const ju = fu.get(Eu);
          Nu.set(Ou, {
            name: Ou,
            texture: ju,
            kind: "frame"
          }), uu && !Nu.has(uu.root) && Nu.set(uu.root, {
            name: uu.root,
            texture: ju,
            kind: "frame"
          });
          continue
        }
        const ju = fu.get(Yu),
          Uu = uu?.root ?? Ou;
        if (ju !== Uu && Nu.set(Uu, {
            name: Uu,
            texture: ju,
            kind: "frame"
          }), uu) {
          const Eu = Zu.get(uu.root);
          bu[Yu] = {
            id: Eu,
            rotation: uu.rotation
          }, cu.set(ju, Eu), Nu.set(Ou, {
            name: Ou,
            texture: ju,
            kind: "rotation"
          })
        } else cu.set(ju, Yu + 1)
      }
      for (const Ou of cu.keys()) Nu.delete(Ou);
      for (const [Ou, Yu] of ju) {
        const uu = cu.get(Yu);
        void 0 === uu || cu.has(Ou) || (cu.set(Ou, uu), Nu.delete(Ou))
      }
      return {
        named: [...cu].sort(((uu, Eu) => {
          let [ju] = uu, [su] = Eu;
          return ju < su ? -1 : ju > su ? 1 : 0
        })).map((uu => {
          let [Eu, ju] = uu;
          return {
            name: Eu,
            id: ju
          }
        })),
        aliases: [...Nu.values()],
        layers: bu
      }
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);