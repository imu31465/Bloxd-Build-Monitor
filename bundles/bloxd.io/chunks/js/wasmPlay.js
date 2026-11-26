export const id = 75;
export const ids = [75, 129, 130, 151];
export const modules = {
  40916: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => JV,
      f: () => YV
    });
    const JV = "The world isn't loaded, so no blocks can be seen.",
      YV = "The world isn't loaded, so nothing in it can be seen."
  },
  5174: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => wV
    });
    var JV = xV(27),
      YV = xV(32),
      UV = xV(1332),
      yV = xV(3142);
    const pV = 3e4,
      QV = 1e3;

    function nV() {
      return "visible" === document.visibilityState && "inGame" === JV.b.get("gameState") && (0, UV.r)()
    }

    function wV(VV, eV) {
      (0, yV.p)() || function(VV, eV, xV) {
        let JV = 0;
        const YV = setInterval((() => {
          eV() && (JV += QV, JV >= VV && (clearInterval(YV), xV()))
        }), QV)
      }(pV, nV, (() => {
        eV().then((() => {
          VV(`saved for the player after ${pV/1e3} s of play`), (0, yV.A)(), YV.h.QZ("chat", {
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
  35156: (VV, eV, xV) => {
    function JV(VV, eV) {
      return 0 === VV.length ? 0 : VV[Math.min(VV.length - 1, Math.floor(eV * VV.length))]
    }

    function YV(VV) {
      return VV.toFixed(1)
    }
    xV.d(eV, {
      c: () => YV,
      e: () => JV
    })
  },
  39097: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => nV,
      e: () => wV,
      i: () => tV,
      k: () => qV,
      m: () => jV
    });
    var JV = xV(5174),
      YV = xV(35156),
      UV = xV(3142);
    const yV = 20,
      pV = ["totalMs", "slotMs", "workerMs", "applyMs", "ahead", "inFlight", "Jv", "jobMs"];

    function QV(VV) {
      return [...VV].sort(((VV, eV) => VV - eV))
    }
    const nV = [];

    function wV(VV, eV, xV) {
      return `${VV},${eV},${xV}`
    }
    class ZV {
      constructor() {
        this.pending = new Map, this.jobs = new Map, this.edits = [], this.nextEdit = 0, this.reported = 0, this.windowStart = performance.now(), this.frames = 0, this.lastFrameAt = 0, this.maxFrameMs = 0, this.jobsSent = 0, this.maxAhead = 0, this.maxCapacity = 0, this.roundTrips = [], this.windowEdits = [], this.outliers = 0, this.gaveUp = 0
      }
      edit(VV, eV) {
        var xV;
        const JV = null !== (xV = this.pending.get(VV)) && void 0 !== xV ? xV : [];
        JV.push({
          editAt: eV,
          meshJobId: 0
        }), this.pending.set(VV, JV)
      }
      frame(VV) {
        this.lastFrameAt > 0 && (this.maxFrameMs = Math.max(this.maxFrameMs, VV - this.lastFrameAt)), this.lastFrameAt = VV, this.frames++, VV - this.windowStart >= 1e3 && this.summarise(VV)
      }
      sent(VV, eV, xV, JV, YV, UV, yV) {
        this.jobs.set(eV, {
          sentAt: yV,
          receivedAt: 0,
          ahead: xV,
          inFlight: JV,
          Jv: YV,
          jobMs: 0
        }), this.jobsSent++, this.maxAhead = Math.max(this.maxAhead, xV), this.maxCapacity = Math.max(this.maxCapacity, YV);
        for (const QV of null !== (pV = this.pending.get(VV)) && void 0 !== pV ? pV : []) {
          var pV;
          UV.includes(QV.meshJobId) || (QV.meshJobId = eV)
        }
      }
      received(VV, eV, xV) {
        const JV = this.jobs.get(VV);
        void 0 !== JV && (this.roundTrips.push(xV - JV.sentAt), JV.receivedAt = xV, JV.jobMs = eV)
      }
      failed(VV) {
        this.jobs.delete(VV)
      }
      reassign(VV, eV, xV) {
        this.jobs.delete(eV);
        for (const YV of null !== (JV = this.pending.get(VV)) && void 0 !== JV ? JV : []) {
          var JV;
          YV.meshJobId === eV && (YV.meshJobId = xV)
        }
      }
      applied(VV, eV, xV) {
        const JV = this.jobs.get(eV);
        this.jobs.delete(eV), void 0 !== JV && this.show(VV, JV, xV, (VV => VV.meshJobId === eV))
      }
      emptied(VV, eV) {
        const xV = {
          sentAt: eV,
          receivedAt: eV,
          ahead: 0,
          inFlight: 0,
          Jv: 0,
          jobMs: 0
        };
        this.show(VV, xV, eV, (() => !0))
      }
      show(VV, eV, xV, JV) {
        const YV = this.pending.get(VV);
        if (!YV) return;
        const UV = YV.filter((YV => !JV(YV) || (this.record(VV, YV.editAt, eV, xV), !1)));
        UV.length > 0 ? this.pending.set(VV, UV) : this.pending.delete(VV)
      }
      EZ(VV) {
        this.reported += VV, this === rV && this.reported >= yV && null !== kV && (kV(), kV = null)
      }
      record(VV, eV, xV, JV) {
        const YV = {
          totalMs: JV - eV,
          slotMs: xV.sentAt - eV,
          workerMs: xV.receivedAt - xV.sentAt,
          applyMs: JV - xV.receivedAt,
          ahead: xV.ahead,
          inFlight: xV.inFlight,
          Jv: xV.Jv,
          jobMs: xV.jobMs
        };
        if (this.edits[this.nextEdit] = YV, this.nextEdit = (this.nextEdit + 1) % 500, this.windowEdits.push(YV.totalMs), this.EZ(1), YV.totalMs < 100 || ++this.outliers > 5) return;
        const yV = VV => Math.round(VV);
        (0, UV.i)("remesh", `slow edit (${VV}) shown in ${yV(YV.totalMs)} ms: slot ${yV(YV.slotMs)}, worker ${yV(YV.workerMs)} (${YV.ahead} ahead, ${YV.inFlight}/${YV.Jv} in flight; job ${yV(YV.jobMs)}), apply ${yV(YV.applyMs)}`)
      }
      summarise(VV) {
        const eV = (VV - this.windowStart) / 1e3;
        for (const [xV, JV] of this.pending) {
          const eV = JV.filter((eV => VV - eV.editAt <= 1e4));
          this.gaveUp += JV.length - eV.length, this.EZ(JV.length - eV.length), eV.length > 0 ? this.pending.set(xV, eV) : this.pending.delete(xV)
        }
        for (const [xV, JV] of this.jobs) VV - JV.sentAt > (JV.receivedAt > 0 ? 1e4 : 6e4) && this.jobs.delete(xV);
        if (this.jobsSent > 0 || this.roundTrips.length > 0 || this.windowEdits.length > 0 || this.gaveUp > 0) {
          const VV = QV(this.roundTrips),
            xV = QV(this.windowEdits),
            JV = Math.max(0, this.outliers - 5);
          (0, UV.i)("remesh", `${Math.round(this.frames/eV)} fps (longest ${Math.round(this.maxFrameMs)} ms) | ${this.jobsSent} jobs sent, up to ${this.maxAhead} ahead on a worker, capacity ${this.maxCapacity} | round trip p50 ${Math.round((0,YV.e)(VV,.5))} max ${Math.round((0,YV.e)(VV,1))} ms | ${xV.length} edits shown, p50 ${Math.round((0,YV.e)(xV,.5))} max ${Math.round((0,YV.e)(xV,1))} ms${JV>0?`, ${JV} more slow`:""}${this.gaveUp>0?`, ${this.gaveUp} never shown`:""}`)
        }
        this.windowStart = VV, this.frames = 0, this.maxFrameMs = 0, this.jobsSent = 0, this.maxAhead = 0, this.maxCapacity = 0, this.roundTrips = [], this.windowEdits = [], this.outliers = 0, this.gaveUp = 0
      }
      stats() {
        const VV = pV.map((VV => {
          const eV = QV(this.edits.map((eV => eV[VV])));
          return `${VV}: p50 ${Math.round((0,YV.e)(eV,.5))} p90 ${Math.round((0,YV.e)(eV,.9))} max ${Math.round((0,YV.e)(eV,1))}`
        }));
        return [`${this.edits.length} edits`, ...VV].join("\n")
      }
      dump() {
        const VV = this.edits.map((VV => pV.map((eV => Math.round(10 * VV[eV]) / 10)).join(",")));
        return [this.stats(), pV.join(","), ...VV].join("\n")
      }
    }
    class vV {
      constructor(VV, eV) {
        this.log = VV, this.iv = eV
      }
      edit(VV, eV, xV) {
        const [JV, YV, UV] = this.iv.cZ.qYV(VV, eV, xV), yV = this.iv.cZ.Cb.ab(JV, YV, UV);
        yV && yV.Db && this.log.edit(wV(JV, YV, UV), performance.now())
      }
      sent(VV, eV, xV, JV, YV) {
        this.log.sent(wV(VV.i, VV.j, VV.k), eV, xV, JV, YV, nV, performance.now())
      }
      received(VV) {
        this.log.received(VV.meshJobId, VV.jobMs, performance.now())
      }
      failed(VV) {
        this.log.failed(VV)
      }
      applied(VV, eV) {
        this.log.applied(wV(VV.i, VV.j, VV.k), eV, performance.now())
      }
    }
    let rV = null,
      kV = null,
      bV = !1,
      EV = null;

    function BV() {
      return new Promise((VV => {
        null !== rV && rV.reported >= yV ? VV() : kV = VV
      }))
    }

    function jV() {
      const VV = new ZV;
      return rV = VV, (0, UV.h)("remesh", (() => VV.dump())), (0, UV.d)("remeshStats", (() => {
        console.log(VV.stats())
      })), bV || (bV = !0, (0, JV.c)((VV => {
        (0, UV.i)("remesh", VV)
      }), BV)), VV
    }

    function qV(VV) {
      const eV = jV();
      EV = new vV(eV, VV), VV.wT.meshProbe = EV, VV.on("beforeRender", (() => {
        eV.frame(performance.now())
      }))
    }

    function tV(VV, eV, xV) {
      var JV;
      null === (JV = EV) || void 0 === JV || JV.edit(VV, eV, xV)
    }
  },
  35197: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => JV
    });
    const JV = new Set(["chunkBorders"])
  },
  35343: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => yV,
      c: () => YV,
      g: () => wV
    });
    var JV = xV(1656);

    function YV(VV) {
      var eV;
      return {
        ...yV.store,
        yaw: yV.store.yaw + (null !== (eV = JV.c[VV].previewYaw) && void 0 !== eV ? eV : 0)
      }
    }
    const UV = {
        yaw: .61 * Math.PI,
        pitch: Math.PI / 2.05,
        radius: 30,
        target: [0, 0, 0]
      },
      yV = {
        player: UV,
        store: {
          ...UV,
          radius: 33,
          target: [0, 3.9, 0]
        }
      };

    function pV(VV, eV) {
      VV instanceof Promise ? VV.then(eV).catch((VV => {
        console.error("Couldn't open the preview", VV)
      })) : eV(VV)
    }
    class QV {
      constructor(VV) {
        this.opened = null, this.view = null, this.size = null, this.closed = !1, pV(VV, (VV => {
          this.closed ? VV.close() : (this.opened = VV, null !== this.size && VV.resize(this.size.width, this.size.height), null !== this.view && VV.show(this.view))
        }))
      }
      show(VV) {
        var eV;
        this.view = VV, null === (eV = this.opened) || void 0 === eV || eV.show(VV)
      }
      resize(VV, eV) {
        var xV;
        this.size = {
          width: VV,
          height: eV
        }, null === (xV = this.opened) || void 0 === xV || xV.resize(VV, eV)
      }
      close() {
        var VV;
        this.closed = !0, null === (VV = this.opened) || void 0 === VV || VV.close(), this.opened = null
      }
    }
    class nV {
      constructor(VV) {
        this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(VV).then((VV => VV.ready)), pV(VV, (VV => {
          this.closed ? VV.close() : (this.opened = VV, null !== this.size && VV.resize(this.size.width, this.size.height))
        }))
      }
      get dev() {
        return this.opened.dev
      }
      isReady() {
        var VV, eV;
        return null !== (VV = null === (eV = this.opened) || void 0 === eV ? void 0 : eV.isReady()) && void 0 !== VV && VV
      }
      setCosmetic(VV, eV) {
        var xV;
        null === (xV = this.opened) || void 0 === xV || xV.setCosmetic(VV, eV)
      }
      playEmote(VV) {
        var eV;
        null === (eV = this.opened) || void 0 === eV || eV.playEmote(VV)
      }
      setOrbit(VV) {
        var eV;
        null === (eV = this.opened) || void 0 === eV || eV.setOrbit(VV)
      }
      resetCamera() {
        var VV;
        null === (VV = this.opened) || void 0 === VV || VV.resetCamera()
      }
      async untilDrawn(VV) {
        var eV;
        await this.ready, await (null === (eV = this.opened) || void 0 === eV ? void 0 : eV.untilDrawn(VV))
      }
      resize(VV, eV) {
        var xV;
        this.size = {
          width: VV,
          height: eV
        }, null === (xV = this.opened) || void 0 === xV || xV.resize(VV, eV)
      }
      close() {
        var VV;
        this.closed = !0, null === (VV = this.opened) || void 0 === VV || VV.close(), this.opened = null
      }
    }
    const wV = new class {
      constructor() {
        this.host = null, this.makeDefault = null
      }
      setHost(VV) {
        this.host = VV
      }
      setDefaultHost(VV) {
        this.makeDefault = VV
      }
      current() {
        if (null === this.host) {
          if (null === this.makeDefault) throw new Error("no preview host");
          this.host = this.makeDefault()
        }
        return this.host
      }
      openMob(VV) {
        return new QV(this.current().openMob(VV))
      }
      openPet(VV) {
        return new QV(this.current().openPet(VV))
      }
      openMobLineup(VV) {
        return new QV(this.current().openMobLineup(VV))
      }
      openCharacter(VV, eV) {
        return new nV(this.current().openCharacter(VV, eV))
      }
    }
  },
  5556: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => JV.f,
      g: () => YV,
      j: () => JV.o
    });
    var JV = xV(5561);
    const YV = [!1, !0].flatMap((VV => ["terrain", "liquid", "model"].map((eV => ({
      strict: VV,
      program: eV
    })))))
  },
  40443: (VV, eV, xV) => {
    xV.r(eV), xV.d(eV, {
      ShaderPackPage: () => QV,
      harnessShaderPackMode: () => vV,
      setHarnessUrlShaderPack: () => ZV,
      shaderPackPage: () => wV
    });
    var JV = xV(99),
      YV = xV(40),
      UV = (xV(3911), xV(5556), xV(3907)),
      yV = xV(7216);
    xV(7191);
    const pV = {
      status: "none"
    };
    class QV {
      constructor() {
        this.stored = null, this.compiling = null, this.pagePack = null, this.resolved = null
      }
      preload() {
        if (null === this.stored) {
          if ((0, UV.f)(JV.featureFlags.settings.canUseShaderPacks)) return this.stored = Promise.resolve(null), nV().then((VV => {
            VV && YV.m.removeItem(UV.d)
          })), this.stored;
          this.prefetchHint() && this.compiler().catch((() => {})), this.stored = this.readStored()
        }
        return this.stored
      }
      prefetchHint() {
        return (0, UV.e)(JV.featureFlags.settings.canUseShaderPacks)
      }
      async loadActive() {
        const VV = await this.load();
        return "active" === VV.status ? VV.pack : null
      }
      load() {
        return this.pagePack ??= this.read().catch((VV => (console.error("Failed to load the shader pack", VV), pV))).then((VV => (this.resolved ??= VV, VV))), this.pagePack
      }
      hasNone() {
        var VV;
        return "none" === (null === (VV = this.resolved) || void 0 === VV ? void 0 : VV.status)
      }
      block(VV) {
        this.resolved = {
          status: "blocked",
          messageKey: VV,
          variants: null
        }, this.pagePack = Promise.resolve(this.resolved)
      }
      compiler() {
        return this.compiling ??= Promise.all([xV.e(89), xV.e(149), xV.e(155)]).then((() => xV(44634))).then((VV => (VV.prefetchCompiler(), VV))), this.compiling
      }
      async readStored() {
        const VV = await nV();
        return VV && this.compiler().then((VV => VV.reconcileHint())).catch((VV => {
          console.error("Failed to correct the shader pack hint", VV)
        })), VV
      }
      async read() {
        const VV = await this.preload();
        return VV ? (await this.compiler()).compilePagePack(VV) : pV
      }
    }
    async function nV() {
      if (!(0, UV.h)(JV.featureFlags.settings.canUseShaderPacks)) return null;
      try {
        const VV = await (0, yV.f)(!0);
        return VV || YV.m.setItem(UV.d, !1), VV
      } catch (VV) {
        return console.error("Failed to read the stored shader pack", VV), YV.m.removeItem(UV.d), null
      }
    }
    const wV = new QV;

    function ZV(VV, eV) {}

    function vV() {
      return null
    }
  },
  40487: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => ZV,
      e: () => vV
    });
    var JV = xV(165),
      YV = xV(193),
      UV = xV(1597),
      yV = xV(3268),
      pV = xV(1603),
      QV = xV(37620),
      nV = xV(701),
      wV = xV(40443);

    function ZV(VV) {
      (0, yV.reportClientError)("matchmake_failed", VV, JV.i[JV.i.SHADER_PACK])
    }
    async function vV(VV, eV) {
      var xV;
      const JV = null === (xV = await wV.shaderPackPage.preload()) || void 0 === xV ? void 0 : xV.listing,
        yV = (0, QV.e)();
      JV && null !== yV && await pV.b.reportShaderPackSession(VV, {
        packId: JV.packId,
        sourceHash: JV.sourceHash,
        game: (0, UV.g)(eV, YV.s, "other"),
        playSessionId: yV,
        visitSessionId: (0, nV.f)()
      })
    }
  },
  7216: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => YV,
      f: () => UV
    });
    var JV = xV(40);
    const YV = "shaderPack";
    async function UV() {
      var VV;
      let eV = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (VV = await JV.i.getItem(YV, eV)) && void 0 !== VV ? VV : null
    }
  },
  7191: (VV, eV, xV) => {
    xV.r(eV), xV.d(eV, {
      loadShaderPackTextures: () => yV,
      shaderPackTextures: () => pV
    });
    var JV = xV(5561);
    let YV = null,
      UV = null;

    function yV() {
      return UV ??= Promise.all([xV.e(84), xV.e(204)]).then((() => xV(41764))).then((VV => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: eV,
          textureNameToIndex: xV,
          textureAnimationData: UV
        } = VV;
        return YV ??= (0, JV.j)(xV, UV, eV), YV
      })), UV
    }

    function pV() {
      if (null === YV) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return YV
    }
  },
  35251: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => UV
    });
    var JV = xV(1353);

    function YV() {
      var VV, eV;
      return null !== (VV = null === (eV = screen.orientation) || void 0 === eV ? void 0 : eV.type) && void 0 !== VV ? VV : innerWidth > innerHeight ? "landscape" : "portrait"
    }
    const UV = new class {
      constructor() {
        this.holding = !1, this.heldOrientation = "", this.releaseTimer = void 0, this.longHoldTimer = void 0, this.resizers = new Set, this.releaseWhenShown = () => {
          document.hidden || (document.removeEventListener("visibilitychange", this.releaseWhenShown), this.release())
        }
      }
      isHeld() {
        return this.holding && YV() !== this.heldOrientation && (this.holding = !1), this.holding
      }
      hold() {
        this.heldOrientation = YV(), this.holding = !0, clearTimeout(this.releaseTimer), document.removeEventListener("visibilitychange", this.releaseWhenShown), clearTimeout(this.longHoldTimer), this.longHoldTimer = setTimeout((() => {
          this.holding && (0, JV.lb)(new Error("Game view size held for 60 s"))
        }), 6e4)
      }
      release() {
        clearTimeout(this.longHoldTimer), this.releaseTimer = setTimeout((() => {
          if (document.hidden) document.addEventListener("visibilitychange", this.releaseWhenShown);
          else {
            this.holding = !1;
            for (const VV of this.resizers) VV()
          }
        }), 1e3)
      }
      heldSizer(VV) {
        let eV = !1;
        return () => {
          if (eV && this.isHeld()) return null;
          const xV = VV();
          return eV ||= null !== xV, xV
        }
      }
      onRelease(VV) {
        return this.resizers.add(VV), () => {
          this.resizers.delete(VV)
        }
      }
    }
  },
  40475: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => YV
    });
    let JV = !1;
    async function YV(VV, eV) {
      if (!JV) {
        JV = !0;
        try {
          const [{
            reloadBloxd: JV
          }, {
            NotificationProvider: YV
          }] = await Promise.all([Promise.resolve().then((() => xV(1838))), Promise.resolve().then((() => xV(1439)))]);
          if (!VV || !0 === await YV.showPromptPopup({
              title: "Unsaved changes",
              subtitle: "Exit and lose your unsaved changes?",
              confirmText: "Exit",
              destructive: !0,
              cancelText: "Cancel",
              unlockPointerKey: "replayExitUnsavedChanges"
            }).getResult()) return void JV(eV)
        } catch (YV) {
          console.error("Leaving the replay failed", YV)
        }
        JV = !1
      }
    }
  },
  42290: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => pV,
      e: () => QV
    });
    var JV = xV(1846);
    const YV = 33177600,
      UV = 3e4;
    let yV = !1;

    function pV(VV, eV, xV) {
      let JV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const {
        scale: pV = 1,
        type: QV = "image/png",
        quality: nV
      } = JV;
      return VV.zZ() ? yV ? Promise.reject(new Error("A screenshot is already being taken")) : (yV = !0, new Promise(((JV, wV) => {
        let ZV, vV = 2,
          rV = null;
        const kV = () => {
          var eV;
          yV = !1, null === (eV = rV) || void 0 === eV || eV(), clearTimeout(ZV);
          try {
            VV.restoreSize()
          } catch (xV) {
            console.error("A screenshot couldn't size the canvas back", xV)
          }
        };
        ZV = setTimeout((() => {
          kV(), wV(new Error("No frame was drawn to capture"))
        }), UV);
        try {
          const JV = function(VV, eV, xV) {
            const JV = Math.max(1, VV),
              UV = Math.max(1, eV),
              yV = Math.min(1, xV / Math.max(JV, UV), Math.sqrt(YV / (JV * UV)));
            return {
              width: Math.max(1, Math.floor(JV * yV)),
              height: Math.max(1, Math.floor(UV * yV))
            }
          }(eV, xV, VV.maxTextureSize);
          VV.resize(JV.width, JV.height, pV * JV.width / Math.max(1, eV))
        } catch (bV) {
          return kV(), void wV(bV)
        }
        rV = VV.onFrameDrawn((() => {
          if (vV--, vV > 0) return;
          const {
            canvas: eV
          } = VV, xV = {
            width: eV.width,
            height: eV.height
          };
          try {
            eV.toBlob((VV => {
              VV ? JV({
                blob: VV,
                ...xV
              }) : wV(new Error("The canvas gave no image"))
            }), QV, nV)
          } catch (bV) {
            wV(bV)
          } finally {
            kV()
          }
        }))
      }))) : Promise.reject(new Error("Screenshots need a game to be running"))
    }
    async function QV(VV, eV, xV) {
      try {
        const YV = await pV(VV, eV, xV);
        (0, JV.c)(YV.blob, `bloxd-screenshot-${YV.width}x${YV.height}-${Date.now()}.png`)
      } catch (YV) {
        console.error("Error taking screenshot:", YV)
      }
    }
  },
  38845: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => JV
    });
    const JV = {
      noaReady: null,
      chunkRequested: null,
      beforeServerListeners: null,
      wasmNetReady: null
    }
  },
  40389: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => yV
    });
    var JV = xV(364),
      YV = xV(138),
      UV = xV(40);

    function yV() {
      UV.m.setItem(JV.Ib, UV.m.getItem(JV.Ib) + 1), (0, YV.is99NightsCrazyGamesBundle)() && UV.m.setItem(JV.Fb, UV.m.getItem(JV.Fb) + 1)
    }
  },
  41936: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => pV
    });
    var JV = xV(40916);

    function YV(VV) {
      return {
        current: () => VV,
        watch: () => () => {}
      }
    }

    function UV() {}
    const yV = Object.freeze([0, 0, 0]),
      pV = {
        states: {
          health: YV({
            health: null,
            maxHealth: null,
            shield: null,
            maxShield: null
          }),
          inventory: YV({
            player: [],
            chestOrCreative: [],
            chest: null,
            creative: !1,
            selectedSlot: 0,
            freeSlots: 0
          }),
          hotbar: YV({
            items: [],
            ammo: 0,
            selectedSlot: null
          }),
          stationItems: YV({
            enchantable: {},
            salvageable: {}
          }),
          itemInfo: YV({}),
          creativeVisibility: YV({
            publicLobby: !1,
            shownInGame: {}
          }),
          aura: YV(null),
          heldItemAim: YV({
            gun: !1,
            aimable: !1,
            chargeName: null
          }),
          crouching: YV(!1),
          gliderBoostFuel: YV(0),
          flight: YV({
            canFly: !1,
            flying: !1
          }),
          crafting: YV({
            focus: null,
            recipes: [],
            detail: null
          }),
          players: YV({
            ids: [],
            byId: {},
            localId: null
          }),
          lobbyLeaderboardRows: YV({}),
          fullInventory: YV(!1),
          crosshairTarget: YV({
            interactPrompt: null,
            blockText: null,
            neededTool: null
          }),
          localPlayerAlive: YV(!0),
          freeCamera: YV({
            allowed: !1,
            movesFly: !1
          }),
          replay: YV(null),
          replayEdits: YV(null),
          replayRecorder: YV({
            recording: !1,
            clipping: !1,
            hasClipBuffer: !1,
            seconds: 0
          }),
          replayVideoExporting: YV(!1)
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
          selectHotbarSlot: UV,
          removeInventoryItem: () => !1,
          swapInventorySlots: () => !1,
          moveInventoryItem: () => !1,
          quickMoveInventoryItem: () => null,
          closeChest: UV,
          setInventoryOpen: UV,
          changeIronChestPasskey: UV,
          dragReplayCamera: UV,
          applyTemporaryThirdPerson: UV,
          holdEmoteWheel: UV,
          recordFlyingMiddleText: UV,
          focusCrafting: UV,
          craftRecipe: () => ({
            Ey: 0,
            Bw: null,
            amountAddedToSlot: 0
          }),
          salvageItem: () => !1,
          enchantItem: UV,
          setShopOpen: UV,
          buyShopItem: UV,
          lobbyManage: UV,
          sendChatMessage: UV,
          ignorePlayer: UV,
          reportPlayer: UV,
          reportWorldCodeChat: UV,
          requestDiscordReportKey: UV,
          reportLobbyOrGame: UV,
          playEmote: UV,
          updateMyCosmetic: UV,
          writeOnBoard: UV,
          writeBook: UV,
          writeNameTag: UV,
          setCustomLobbyBlock: UV,
          openIronChest: UV,
          sendCodeCollab: UV,
          clickCodeBlock: UV,
          bindCustomButtonKeys: UV,
          pressCustomButton: UV,
          moveReplayFreecam: UV,
          holdReplayFreecamVertical: UV,
          respawn: UV,
          wakeUp: UV,
          requestLeaderboard: UV,
          completeTask: UV,
          setServerCookie: UV,
          answerUiRequest: UV,
          chooseRewardedAd: UV,
          setCameraZoom: UV,
          setFreeCameraMovesFly: UV,
          setBlockHighlight: UV,
          setCrosshairInteractPrompt: UV,
          setLookSensitivity: UV,
          replayAction: UV,
          setReplayPlaying: UV,
          seekReplay: UV,
          setReplayCameraMode: UV,
          syncReplayCameraMode: UV,
          setReplayCameraKeyframe: UV,
          moveReplayCameraKeyframe: UV,
          deleteReplayCameraKeyframes: UV,
          setReplayPlaybackMark: UV,
          cropReplay: () => !1,
          holdReplayForShaderPackFailure: UV,
          exportReplayVideo: UV,
          toggleRecording: UV,
          saveClip: UV,
          setRecorderPrefs: UV,
          setReplayViewerOpen: UV
        },
        queries: {
          enchantingOffer: () => ({
            perks: [],
            options: []
          }),
          worldCodeAiChunk: () => JV.e,
          worldCodeAiGameState: () => JV.f
        },
        lookups: {
          localPos: () => yV,
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
  42282: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => yV,
      g: () => UV
    });
    var JV = xV(2277),
      YV = xV(1099);

    function UV(VV, eV) {
      return null !== VV.gameSource && (0, JV.q)(eV, VV.gameSource)
    }

    function yV(VV, eV) {
      if (null === VV.gameSource || "" === VV.gameSource || null === eV) return !0;
      const xV = (0, YV.l)(eV) ? (0, YV.p)(eV) : null;
      return null !== xV && UV(VV, xV)
    }
  },
  42243: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => pV
    });
    var JV = xV(648),
      YV = xV(42252),
      UV = xV(42109);
    async function yV(VV) {
      const eV = await (0, YV.j)({
        Helmet: xV(39113),
        Chestplate: xV(39122),
        Gauntlets: xV(39143),
        Leggings: xV(39130),
        Boots: xV(39134)
      } [JV.b[VV]]);
      try {
        return (0, UV.k)(eV)
      } finally {
        eV.close()
      }
    }
    const pV = new class {
      constructor() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : yV,
          eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : YV.m;
        this.decode = VV, this.register = eV, this.decoded = new Map
      }
      warm() {
        for (let VV = 0; VV < JV.b.length; VV++) this.part(VV).catch((eV => {
          console.warn(`The grayscale armour ${JV.b[VV]} image didn't decode ahead of use`, eV)
        }))
      }
      async load(VV, eV) {
        const {
          width: xV,
          height: UV,
          pixels: yV
        } = await this.part(VV), pV = new ImageData(function(VV, eV) {
          const xV = new Uint8ClampedArray(VV.length);
          for (let JV = 0; JV < VV.length; JV += 4) xV[JV] = Math.round(VV[JV] * eV[0] / 255), xV[JV + 1] = Math.round(VV[JV + 1] * eV[1] / 255), xV[JV + 2] = Math.round(VV[JV + 2] * eV[2] / 255), xV[JV + 3] = VV[JV + 3];
          return xV
        }(yV, function(VV) {
          return [VV >>> 16 & 255, VV >>> 8 & 255, 255 & VV]
        }(eV)), xV, UV);
        let QV;
        try {
          QV = await createImageBitmap(pV, {
            premultiplyAlpha: "none",
            colorSpaceConversion: "none"
          })
        } catch (nV) {
          throw new YV.d("decode", `grayscale armour ${JV.b[VV]}`, {
            cause: nV
          })
        }
        return {
          id: this.register(QV),
          width: xV,
          height: UV
        }
      }
      part(VV) {
        const eV = this.decoded.get(VV);
        if (void 0 !== eV) return eV;
        const xV = this.decode(VV).catch((eV => {
          throw this.decoded.delete(VV), eV instanceof YV.d ? eV : new YV.d("decode", `grayscale armour ${JV.b[VV]}`, {
            cause: eV
          })
        }));
        return this.decoded.set(VV, xV), xV
      }
    }
  },
  42234: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => yV,
      f: () => EV,
      g: () => wV,
      j: () => ZV,
      l: () => bV
    });
    var JV = xV(42091),
      YV = xV(42243),
      UV = xV(42252);
    const yV = 396,
      pV = 1,
      QV = 2,
      nV = 3,
      wV = {
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
      ZV = {
        File: 0,
        Item: 1
      },
      vV = 0,
      rV = 1,
      kV = 2;

    function bV(VV) {
      const eV = (0, JV.n)();
      eV.catch((() => {}));
      let YV = null;
      return {
        glbUrl: VV,
        lifeformAtlasUrl: async VV => (await eV).lifeformAtlasUrl(VV),
        armourAtlasUrl: async () => (await xV.e(231).then((() => xV(35423)))).armourAtlasUrl,
        capeUrl: async VV => (await eV).capeUrl(VV),
        attachmentImageUrl: async VV => (await eV).attachmentImageUrl(VV),
        blockImageUrl: async VV => (await eV).blockImageUrl(VV),
        groupAtlasUrl: async VV => (await eV).groupAtlasUrl(VV),
        particleTextureUrl: async VV => (await eV).particleTextureUrl(VV),
        particleItemUrl: async VV => (YV ??= xV.e(43).then((() => xV(54022))).catch((VV => {
          throw YV = null, VV
        })), (await YV).particleItemUrl(VV))
      }
    }
    class EV {
      constructor(VV, eV) {
        var xV, yV, pV, QV;
        let nV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        this.sources = VV, this.onFailure = eV, this.loading = new Map, this.glbImages = new Map, this.glbWrittenImages = new Map, this.glbTakenCount = new Map, this.answered = new Map, this.ready = [], this.load = void 0, this.release = void 0, this.fetchFile = void 0, this.greyscaleArmour = void 0, this.ik = !1, this.load = null !== (xV = nV.load) && void 0 !== xV ? xV : (VV, eV) => (0, UV.l)(VV, nV.fetchImage, eV), this.release = null !== (yV = nV.release) && void 0 !== yV ? yV : UV.q, this.fetchFile = null !== (pV = nV.fetchFile) && void 0 !== pV ? pV : VV => (0, JV.i)(VV), this.greyscaleArmour = null !== (QV = nV.greyscaleArmour) && void 0 !== QV ? QV : YV.e
      }
      get waiting() {
        return this.ready.length
      }
      get inFlight() {
        return this.loading.size
      }
      glbWritten(VV, eV) {
        this.glbWrittenImages.set(VV, PV(eV))
      }
      glbTaken(VV, eV) {
        const xV = this.glbWrittenImages.get(VV);
        this.glbWrittenImages.delete(VV), eV && this.setGlbImages(VV, void 0 !== xV && xV.length > 0 ? xV : void 0)
      }
      setGlbImages(VV, eV) {
        var xV;
        this.glbTakenCount.set(VV, (null !== (xV = this.glbTakenCount.get(VV)) && void 0 !== xV ? xV : 0) + 1), void 0 === eV ? this.glbImages.delete(VV) : this.glbImages.set(VV, eV);
        const JV = [];
        for (const {
            key: YV
          }
          of this.loading.values()) YV.kind === wV.Glb && YV.word === VV && JV.push(YV);
        for (let YV = this.ready.length - 1; YV >= 0; YV--) {
          const {
            key: eV,
            id: xV
          } = this.ready[YV];
          eV.kind === wV.Glb && eV.word === VV && (this.ready.splice(YV, 1), null !== xV && (this.answered.delete(xV), this.release(xV)), JV.push(eV))
        }
        this.loadAgain(JV)
      }
      onEvent(VV) {
        if (this.ik) return;
        const eV = new DataView(VV.buffer, VV.byteOffset, VV.byteLength);
        for (let xV = 0; xV + 8 <= VV.byteLength; xV += 8) {
          const VV = eV.getUint8(xV),
            JV = eV.getUint32(xV + 4, !0);
          if (VV === nV) {
            this.answered.delete(JV), this.release(JV);
            continue
          }
          const YV = {
            kind: eV.getUint8(xV + 1),
            index: eV.getUint8(xV + 2),
            word: JV
          };
          VV === pV ? this.want(YV) : VV === QV && this.loading.delete(BV(YV))
        }
      }
      reload(VV, eV) {
        const xV = xV => VV.includes(xV.kind) && (void 0 === eV || eV(xV)),
          JV = new Map;
        for (const YV of this.answered.values()) xV(YV) && JV.set(BV(YV), YV);
        for (const [YV, {
            key: UV
          }] of this.loading) xV(UV) && JV.set(YV, UV);
        this.loadAgain(JV.values())
      }
      loadAgain(VV) {
        for (const eV of VV) this.loading.delete(BV(eV)), this.want(eV)
      }
      drain(VV) {
        if (null !== VV)
          for (; this.ready.length > 0;) {
            if (!VV(yV, 0, this.ready[0].record)) return;
            this.ready.shift()
          }
      }
      dispose() {
        this.ik = !0, this.loading.clear(), this.ready.length = 0;
        for (const VV of this.answered.keys()) this.release(VV);
        this.answered.clear()
      }
      want(VV) {
        const eV = BV(VV);
        if (this.loading.has(eV)) return;
        const xV = {
          key: VV
        };
        this.loading.set(eV, xV), this.loadKey(VV).then((JV => {
          this.ik || this.loading.get(eV) !== xV ? this.release(JV.id) : (this.loading.delete(eV), this.answered.set(JV.id, VV), this.ready.push({
            record: qV(VV, vV, JV),
            key: VV,
            id: JV.id
          }))
        }), (JV => {
          if (this.ik || this.loading.get(eV) !== xV) return;
          this.loading.delete(eV), this.onFailure({
            key: VV,
            error: JV
          });
          const YV = JV instanceof UV.d && "decode" === JV.stage ? rV : kV;
          this.ready.push({
            record: qV(VV, YV, null),
            key: VV,
            id: null
          })
        }))
      }
      async loadKey(VV) {
        switch (VV.kind) {
          case wV.Glb:
            return this.load(await this.glbImage(VV), "none");
          case wV.LifeformAtlas:
            return this.load(jV(await this.sources.lifeformAtlasUrl(VV.word), VV), "none");
          case wV.ArmourAtlas:
            return this.load(jV(await this.sources.armourAtlasUrl(), VV), "none");
          case wV.Cape:
            return this.load(jV(await this.sources.capeUrl(VV.word), VV), "none");
          case wV.AttachmentImage:
            return this.load(jV(await this.sources.attachmentImageUrl(VV.word), VV), "none");
          case wV.GroupAtlas:
            return this.load(jV(await this.sources.groupAtlasUrl(VV.word), VV), "none");
          case wV.BlockImage:
            return this.load(jV(await this.sources.blockImageUrl(VV.word), VV), "none");
          case wV.Particle: {
            const eV = await (VV.index === ZV.Item ? this.sources.particleItemUrl(VV.word) : this.sources.particleTextureUrl(VV.word));
            return this.load(jV(eV, VV), "flipY")
          }
          case wV.GreyscaleArmour:
            return this.greyscaleArmour.load(VV.index, VV.word);
          default:
            throw new UV.d("fetch", `image kind ${VV.kind}`, {
              cause: null
            })
        }
      }
      async glbImage(VV) {
        var eV;
        let xV = this.glbImages.get(VV.word);
        if (void 0 === xV) {
          const eV = this.glbTakenCount.get(VV.word),
            JV = jV(await this.sources.glbUrl(VV.word), VV);
          try {
            xV = PV(await this.fetchFile(JV))
          } catch (YV) {
            throw new UV.d("fetch", JV, {
              cause: YV
            })
          }
          this.glbTakenCount.get(VV.word) === eV && this.glbImages.set(VV.word, xV)
        }
        const JV = null === (eV = xV) || void 0 === eV ? void 0 : eV[VV.index];
        if (!JV) throw new UV.d("decode", `image ${VV.index} of file ${2147483647&VV.word}`, {
          cause: null
        });
        return JV
      }
    }

    function BV(VV) {
      let {
        kind: eV,
        index: xV,
        word: JV
      } = VV;
      return `${eV}:${xV}:${JV}`
    }

    function jV(VV, eV) {
      if (null === VV) throw new UV.d("fetch", `no URL for image ${BV(eV)}`, {
        cause: null
      });
      return VV
    }

    function qV(VV, eV, xV) {
      var JV, YV, UV;
      const yV = new Uint8Array(16),
        pV = new DataView(yV.buffer);
      return pV.setUint8(0, VV.kind), pV.setUint8(1, VV.index), pV.setUint8(2, eV), pV.setUint32(4, VV.word, !0), pV.setUint32(8, null !== (JV = null === xV || void 0 === xV ? void 0 : xV.id) && void 0 !== JV ? JV : 0, !0), pV.setUint16(12, Math.min(null !== (YV = null === xV || void 0 === xV ? void 0 : xV.width) && void 0 !== YV ? YV : 0, 65535), !0), pV.setUint16(14, Math.min(null !== (UV = null === xV || void 0 === xV ? void 0 : xV.height) && void 0 !== UV ? UV : 0, 65535), !0), yV
    }
    const tV = 1179937895,
      FV = 1313821514,
      TV = 5130562;

    function PV(VV) {
      var eV;
      const xV = new DataView(VV.buffer, VV.byteOffset, VV.byteLength);
      if (VV.byteLength < 20 || xV.getUint32(0, !0) !== tV || xV.getUint32(16, !0) !== FV) return [];
      let JV, YV = 20 + xV.getUint32(12, !0);
      try {
        JV = JSON.parse((new TextDecoder).decode(VV.subarray(20, YV)))
      } catch {
        return []
      }
      for (; YV + 8 <= VV.byteLength && xV.getUint32(YV + 4, !0) !== TV;) YV += 8 + xV.getUint32(YV, !0);
      const UV = null !== (eV = JV.images) && void 0 !== eV ? eV : [];
      if (0 === UV.length || YV + 8 > VV.byteLength) return UV.map((() => null));
      const yV = VV.subarray(YV + 8, Math.min(VV.byteLength, YV + 8 + xV.getUint32(YV, !0)));
      return UV.map((VV => {
        var eV, xV, YV;
        const UV = void 0 === VV.bufferView || null === (eV = JV.bufferViews) || void 0 === eV ? void 0 : eV[VV.bufferView];
        if (!UV || 0 !== (null !== (xV = UV.buffer) && void 0 !== xV ? xV : 0) || void 0 === UV.byteLength) return null;
        const pV = null !== (YV = UV.byteOffset) && void 0 !== YV ? YV : 0,
          QV = pV + UV.byteLength;
        return QV <= yV.byteLength ? yV.slice(pV, QV) : null
      }))
    }
  },
  41942: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => yV,
      g: () => UV,
      h: () => YV
    });
    let JV = null;

    function YV(VV) {
      JV = VV
    }

    function UV(VV) {
      JV === VV && (JV = null)
    }

    function yV() {
      var VV;
      null === (VV = JV) || void 0 === VV || VV()
    }
  },
  37740: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => wV,
      f: () => vV,
      j: () => BV,
      l: () => nV
    });
    var JV = xV(27),
      YV = xV(2660),
      UV = xV(2663),
      yV = xV(2665),
      pV = xV(2752),
      QV = xV(32);

    function nV(VV, eV) {
      return (!(0, yV.b)() || 0 === VV && 0 === eV) && (0, UV.x)(YV.i.Joystick, 0, VV, eV, 0)
    }
    const wV = {
      Action1: 1,
      Action2: 2,
      Action3: 3,
      Attack: 4,
      Use: 5,
      Interact: 6,
      Boost: 7
    };

    function ZV(VV) {
      return VV.classList.contains("TouchKeyHit") && rV() ? null : VV.firstElementChild
    }

    function vV(VV) {
      return VV.classList.contains("TouchKeyHit") && !VV.classList.contains("CanvasZone") ? {
        whole: !rV(),
        keyBox: null
      } : {
        whole: !1,
        keyBox: kV(ZV(VV))
      }
    }

    function rV() {
      return document.documentElement.classList.contains(pV.h)
    }

    function kV(VV) {
      return !(VV instanceof HTMLElement) || VV.offsetWidth <= 0 || VV.offsetHeight <= 0 ? null : {
        width: VV.offsetWidth,
        height: VV.offsetHeight
      }
    }

    function bV(VV, eV) {
      const xV = VV => Math.min(65535, Math.round(4 * VV));
      return (xV(VV) | xV(eV) << 16) >>> 0
    }

    function EV(VV) {
      return {
        x: VV.left + VV.width / 2,
        y: VV.top + VV.height / 2,
        radius: Math.min(VV.width, VV.height) / 2
      }
    }
    const BV = new class {
      constructor(VV) {
        this.write = VV, this.elements = new Map, this.canvasLeft = 0, this.canvasTop = 0
      }
      set(VV, eV) {
        let xV = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        eV ? this.elements.set(VV, {
          element: eV,
          hidden: xV
        }) : this.elements.delete(VV), this.measureOne(VV)
      }
      measure() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
          left: this.canvasLeft,
          top: this.canvasTop
        };
        this.canvasLeft = VV.left, this.canvasTop = VV.top;
        for (const eV of this.elements.keys()) this.measureOne(eV)
      }
      hitZone(VV, eV) {
        let xV = null,
          JV = 1;
        for (const YV of this.elements.keys()) {
          const UV = this.shown(YV);
          if (!UV) continue;
          const {
            rect: yV,
            element: pV
          } = UV, QV = EV(yV), nV = Math.max(0, yV.width / 2 - QV.radius), wV = Math.max(0, yV.height / 2 - QV.radius), vV = Math.max(0, Math.abs(VV - QV.x) - nV), rV = Math.max(0, Math.abs(eV - QV.y) - wV), bV = pV.firstElementChild;
          let BV = Math.hypot(vV, rV) / QV.radius;
          const jV = kV(ZV(pV));
          jV && (BV = Math.min(BV, Math.max(2 * Math.abs(VV - QV.x) / jV.width, 2 * Math.abs(eV - QV.y) / jV.height))), BV < JV && (xV = {
            code: YV,
            element: pV,
            key: bV,
            ...QV
          }, JV = BV)
        }
        return xV
      }
      measureOne(VV) {
        const eV = this.shown(VV);
        if (!eV) return void this.write(YV.i.TouchZone, VV, 0, 0, 0);
        const {
          rect: xV,
          element: JV
        } = eV, UV = EV(xV);
        this.write(YV.i.TouchZone, VV, UV.x - this.canvasLeft, UV.y - this.canvasTop, bV(xV.width, xV.height));
        const yV = kV(ZV(JV));
        this.write(YV.i.TouchZone, 256 | VV, 0, 0, yV ? bV(yV.width, yV.height) : 0)
      }
      shown(VV) {
        const eV = this.elements.get(VV),
          xV = JV.b.get("worldPanelHud");
        if (!eV || eV.hidden || "none" === xV) return null;
        const YV = eV.element.getBoundingClientRect();
        return YV.width <= 0 || YV.height <= 0 ? null : {
          rect: YV,
          element: eV.element
        }
      }
    }(UV.x);
    (0, QV.i)(pV.e, (() => {
      BV.measure()
    }))
  },
  41986: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => QV,
      f: () => nV
    });
    var JV = xV(42130),
      YV = xV(40249),
      UV = xV(37612),
      yV = xV(41994),
      pV = xV(41963);
    const QV = JV.b.timeForPlayerToConnect - 1e4;
    async function nV(VV, eV, xV, JV) {
      let QV;
      try {
        QV = await VV.getTrafficCode()
      } catch (kV) {
        throw console.error("[bloxd-wasm-client] could not get a traffic code", kV), new pV.u(kV)
      }
      const {
        gameNameWithVariation: nV,
        lobbyName: wV
      } = eV, ZV = () => {
        const eV = (0, UV.c)(VV, nV, wV, QV, (VV => {
          var eV;
          return null !== (eV = null === xV || void 0 === xV ? void 0 : xV.isUsingCustomGameTexturePack(VV)) && void 0 !== eV && eV
        }));
        eV.joinOptions.wasmClient = !0;
        const YV = (0, yV.G)();
        return null !== YV && (eV.joinOptions.renderBackend = YV), eV.joinOptions.joinAdHold = JV, eV
      }, {
        roomName: vV,
        joinOptions: rV
      } = ZV();
      return {
        endpoint: eV.endpoint,
        roomName: vV,
        joinOptions: rV,
        session: {
          gameNameWithVariation: nV,
          lobbyName: wV,
          playerDbId: VV.whamm
        },
        optionsAfterRefusal: async eV => await (0, YV.c)(VV, eV) ? ZV().joinOptions : null
      }
    }
  },
  42266: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => wV,
      g: () => UV,
      k: () => ZV,
      n: () => yV
    });
    var JV = xV(42234),
      YV = xV(42091);
    const UV = new class {
      constructor() {
        this.page = null, this.session = void 0, this.follower = null, this.isWanted = !1, this.listeners = new Set, this.pageListeners = new Set, this.wantedListeners = new Set
      }
      get current() {
        return void 0 === this.session ? this.page : this.session
      }
      setPageFiles(VV) {
        this.change((() => {
          this.page = VV
        }))
      }
      setSessionFiles(VV) {
        const eV = void 0 !== this.session && void 0 === VV;
        if (this.change((() => {
            this.session = VV
          })), eV)
          for (const xV of [...this.pageListeners]) xV()
      }
      showsPage() {
        return void 0 === this.session
      }
      onPageShown(VV) {
        return this.pageListeners.add(VV), () => {
          this.pageListeners.delete(VV)
        }
      }
      setFollower(VV) {
        this.follower = VV, this.startFollower()
      }
      wanted() {
        this.isWanted = !0;
        for (const VV of [...this.wantedListeners]) VV();
        this.startFollower()
      }
      onWanted(VV) {
        return this.wantedListeners.add(VV), () => {
          this.wantedListeners.delete(VV)
        }
      }
      onChange(VV) {
        return this.listeners.add(VV), () => {
          this.listeners.delete(VV)
        }
      }
      startFollower() {
        const VV = this.follower;
        this.isWanted && null !== VV && (this.follower = null, VV((() => {
          this.follower = VV
        })))
      }
      change(VV) {
        const eV = this.current;
        if (VV(), this.current !== eV)
          for (const xV of this.listeners) xV()
      }
    };

    function yV(VV, eV) {
      return {
        ...VV,
        armourAtlasUrl: () => {
          var xV, JV;
          return null !== (xV = null === (JV = eV()) || void 0 === JV ? void 0 : JV.armourAtlasUrl()) && void 0 !== xV ? xV : VV.armourAtlasUrl()
        },
        lifeformAtlasUrl: xV => QV(eV(), (VV => VV.LIFEFORM_ATLAS_PATHS[xV]), (() => VV.lifeformAtlasUrl(xV))),
        groupAtlasUrl: xV => QV(eV(), (VV => VV.GROUP_ATLAS_PATHS[xV]), (() => VV.groupAtlasUrl(xV))),
        particleItemUrl: JV => nV(eV(), (async () => {
          const VV = await xV.e(43).then((() => xV(54022))).catch((() => null));
          return (null === VV || void 0 === VV ? void 0 : VV.particleItemSprite(JV)) || null
        }), (() => VV.particleItemUrl(JV))),
        blockImageUrl: xV => nV(eV(), (async () => {
          var VV, eV;
          return null !== (VV = null === (eV = await pV()) || void 0 === eV ? void 0 : eV.blockImageName(xV)) && void 0 !== VV ? VV : null
        }), (() => VV.blockImageUrl(xV)))
      }
    }

    function pV() {
      return (0, YV.n)().catch((() => null))
    }

    function QV(VV, eV, xV) {
      return nV(VV, (async () => {
        var VV;
        const xV = await pV(),
          JV = null === xV ? null : eV(xV),
          YV = null !== (VV = null === JV || void 0 === JV ? void 0 : JV.slice(JV.lastIndexOf("/") + 1)) && void 0 !== VV ? VV : null;
        return "Player_Atlas" === YV ? null : YV
      }), xV)
    }
    async function nV(VV, eV, xV) {
      if (null !== VV) {
        const xV = await eV(),
          JV = null === xV ? null : VV.textureUrl(xV);
        if (null !== JV) return JV
      }
      return xV()
    }
    const wV = 0;

    function ZV(VV) {
      const eV = [JV.g.ArmourAtlas, JV.g.LifeformAtlas, JV.g.GroupAtlas, JV.g.BlockImage, JV.g.Particle];
      VV.reload(eV, (VV => {
        switch (VV.kind) {
          case JV.g.Particle:
            return VV.index === JV.j.Item;
          case JV.g.LifeformAtlas:
            return VV.word !== wV;
          default:
            return !0
        }
      }))
    }
  },
  42132: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => JV,
      f: () => pV,
      h: () => yV,
      l: () => YV,
      p: () => UV
    });
    const JV = 1e3;

    function YV() {
      QV((() => {
        window.location.reload()
      }))
    }

    function UV() {
      return new Promise((() => {}))
    }

    function yV(VV) {
      QV((() => {
        window.location.replace(VV(window.location.href))
      }))
    }

    function pV(VV) {
      Promise.resolve().then((() => xV(110))).then((eV => {
        let {
          currentUrl: xV
        } = eV;
        yV((() => xV.mergeSearchParamsInto(VV)))
      }), (() => {
        yV((() => VV))
      }))
    }

    function QV(VV) {
      null !== window.onbeforeunload ? Promise.resolve().then((() => xV(1838))).then((eV => {
        let {
          prepareForUnloadWithoutConfirmation: xV
        } = eV;
        try {
          xV()
        } catch (JV) {
          console.warn("[bloxd-wasm-client] prepareForUnloadWithoutConfirmation threw: leaving plainly", JV), window.onbeforeunload = null
        }
        VV()
      }), (() => {
        window.onbeforeunload = null, VV()
      })) : VV()
    }
  },
  5576: (VV, eV, xV) => {
    function JV(VV, eV) {
      return YV(VV, eV)
    }

    function YV(VV, eV) {
      if (VV === eV) return !0;
      if ("object" !== typeof VV || "object" !== typeof eV || null === VV || null === eV || Array.isArray(VV) !== Array.isArray(eV)) return !1;
      const xV = VV,
        JV = eV,
        UV = Object.keys(xV);
      return UV.length === Object.keys(JV).length && UV.every((VV => Object.prototype.hasOwnProperty.call(JV, VV) && YV(xV[VV], JV[VV])))
    }
    xV.d(eV, {
      d: () => JV
    })
  },
  42195: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => TV,
      f: () => tV,
      j: () => bV,
      n: () => kV
    });
    var JV = xV(1922),
      YV = xV(1241),
      UV = xV(40244),
      yV = xV(37633),
      pV = xV(40264),
      QV = xV(41963);
    const nV = {
        "X-Requested-With": "XMLHtttpRequest"
      },
      wV = 3,
      ZV = [500, 1500];

    function vV(VV) {
      const eV = new URL(VV);
      return {
        secure: "https:" === eV.protocol || "wss:" === eV.protocol,
        host: eV.host,
        pathname: eV.pathname.replace(/\/+$/, ""),
        search: eV.searchParams.toString()
      }
    }

    function rV(VV, eV, xV) {
      const {
        secure: JV,
        host: YV,
        pathname: UV,
        search: yV
      } = vV(VV);
      return `${JV?"https":"http"}://${YV}${UV}/matchmake/${eV}/${encodeURIComponent(xV)}${yV?`?${yV}`:""}`
    }

    function kV(VV, eV) {
      var xV;
      const JV = null !== (xV = eV.protocol) && void 0 !== xV ? xV : "ws";
      if ("ws" !== JV) throw new Error(`seat reservation asks for the ${JV} transport`);
      const {
        secure: YV,
        host: UV,
        pathname: yV,
        search: pV
      } = vV(VV), QV = new URLSearchParams(pV);
      QV.append("sessionId", eV.sessionId), eV.reconnectionToken && QV.append("reconnectionToken", eV.reconnectionToken);
      return `${YV?"wss":"ws"}://${eV.room.publicAddress||`${UV}${yV}`}/${eV.room.processId}/${eV.room.roomId}?${QV.toString()}`
    }
    async function bV(VV, eV, xV) {
      var pV;
      let nV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const vV = null !== (pV = nV.sleep) && void 0 !== pV ? pV : JV.d,
        kV = new YV.c(nV.signal),
        bV = new yV.c((() => {
          (0, YV.j)(kV.controller, new yV.d("seat"))
        })),
        {
          signal: qV
        } = kV;
      try {
        const JV = await (0, UV.h)((() => async function(VV, eV, xV, JV) {
          var UV;
          const {
            signal: yV,
            sleep: pV
          } = JV, nV = rV(VV, "joinOrCreate", eV), vV = JSON.stringify(xV);
          let kV = null;
          for (let rV = 0; rV < wV; rV++) {
            var bV;
            if (rV > 0) await pV(null !== (bV = ZV[rV - 1]) && void 0 !== bV ? bV : 1500, yV);
            let VV;
            (0, YV.q)(yV);
            try {
              VV = await BV(nV, vV, JV)
            } catch (qV) {
              (0, YV.q)(yV), kV = EV(qV);
              continue
            }
            const {
              response: eV,
              answer: xV,
              refusal: UV,
              lost: wV
            } = VV;
            if (null === wV) {
              if (null !== UV) throw jV(UV, xV);
              if (eV.ok && null !== xV && PV(xV)) return xV;
              kV = new QV.t(`seat request answered HTTP ${eV.status}${null===xV?" without JSON":" without a seat"}`, !1, void 0, eV.status)
            } else kV = EV(wV.error)
          }
          throw null !== (UV = kV) && void 0 !== UV ? UV : new QV.t("seat request made no attempt", !1)
        }(VV, eV, xV, {
          ...nV,
          signal: qV,
          sleep: vV
        })), qV, vV);
        return bV.answered(), JV
      } finally {
        bV.stop(), kV.unfollow()
      }
    }

    function EV(VV) {
      return new QV.t(VV instanceof Error ? VV.message : String(VV), !0, VV)
    }
    async function BV(VV, eV, xV) {
      var JV;
      const {
        signal: UV
      } = xV, yV = null !== (JV = xV.fetch) && void 0 !== JV ? JV : fetch, pV = await yV(VV, {
        method: "POST",
        headers: {
          ...nV,
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: eV,
        credentials: "include",
        signal: UV
      }), {
        answer: QV,
        lost: wV
      } = await async function(VV) {
        try {
          const eV = await VV.json();
          return {
            answer: "object" === typeof eV && null !== eV ? eV : null,
            lost: null
          }
        } catch (eV) {
          return {
            answer: null,
            lost: eV instanceof SyntaxError ? null : {
              error: eV
            }
          }
        }
      }(pV), ZV = null !== QV && "string" === typeof QV.error ? QV.error : null;
      var vV;
      null !== ZV && (null === (vV = xV.onRefusal) || void 0 === vV || vV.call(xV));
      return (0, YV.q)(UV), {
        response: pV,
        answer: QV,
        refusal: ZV,
        lost: wV
      }
    }

    function jV(VV, eV) {
      return new QV.n(VV, "number" === typeof(null === eV || void 0 === eV ? void 0 : eV.code) ? eV.code : 0, (0, pV.q)(VV).text)
    }
    class qV extends Error {
      constructor(VV, eV) {
        super(VV), this.code = eV, this.name = "SeatHttpError"
      }
    }
    async function tV(VV, eV, xV) {
      let JV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const {
        response: YV,
        answer: UV,
        refusal: yV,
        lost: pV
      } = await BV(rV(VV, "reconnect", eV), JSON.stringify({
        reconnectionToken: xV
      }), JV);
      if (null !== pV) throw pV.error;
      if (!YV.ok) {
        const VV = null !== UV && "number" === typeof UV.code && 0 !== UV.code ? UV.code : YV.status;
        throw new qV(`the seat's reconnect was refused: ${null!==yV&&void 0!==yV?yV:`HTTP ${YV.status}`}`, VV)
      }
      if (null !== yV) throw jV(yV, UV);
      if (null === UV || !PV(UV)) throw new Error("the seat's reconnect answered " + (null === UV ? "without JSON" : "without a seat"));
      return {
        ...UV,
        reconnectionToken: xV
      }
    }
    const FV = 10;

    function TV(VV) {
      if (VV.byteLength < 2 || VV[0] !== FV) return null;
      const eV = 2 + VV[1];
      return eV > VV.byteLength ? null : (new TextDecoder).decode(VV.subarray(2, eV))
    }

    function PV(VV) {
      const eV = VV.room;
      return "string" === typeof VV.sessionId && "object" === typeof eV && null !== eV && "string" === typeof eV.roomId && "string" === typeof eV.processId && "string" === typeof eV.name
    }
  },
  41867: (VV, eV, xV) => {
    xV.d(eV, {
      $: () => qV,
      A: () => PV,
      C: () => GV,
      E: () => tV,
      G: () => FV,
      J: () => EV,
      K: () => XV,
      O: () => RV,
      Q: () => kV,
      U: () => DV,
      W: () => jV,
      Y: () => BV,
      d: () => YV,
      db: () => TV,
      h: () => gV,
      k: () => WV,
      m: () => rV,
      o: () => bV,
      p: () => zV,
      s: () => AV,
      v: () => MV,
      y: () => NV
    });
    var JV = xV(3348);
    const YV = {
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

    function UV(VV, eV) {
      return !ArrayBuffer.isView(VV) || VV instanceof DataView ? Array.isArray(VV) ? VV.map((VV => eV(VV))) : VV : Array.from(VV, (VV => eV(VV)))
    }

    function yV(VV) {
      if ("string" !== typeof VV) return VV;
      for (let eV = 0; eV < VV.length; eV++) {
        const xV = VV.charCodeAt(eV);
        if (xV >= 55296 && xV <= 57343) return QV.decode(pV.encode(VV))
      }
      return VV
    }
    const pV = new TextEncoder,
      QV = new TextDecoder;

    function nV(VV) {
      return VV
    }
    let wV;

    function ZV(VV) {
      return null === VV || "object" !== typeof VV ? VV : [yV(VV.Fn), yV(VV.Tn)]
    }

    function vV(VV) {
      return null === VV || "object" !== typeof VV ? VV : [UV(VV.ix, nV), UV(VV.ly, nV)]
    }

    function rV(VV) {
      return null === (eV = VV) || "object" !== typeof eV ? eV : [yV(eV.yZ), yV(eV.pZ)];
      var eV
    }

    function kV(VV) {
      return null === (eV = VV) || "object" !== typeof eV ? eV : [eV.id, eV.Jw];
      var eV
    }

    function bV(VV) {
      return null === (eV = VV) || "object" !== typeof eV ? eV : [eV.bV, yV(eV.EV), eV.BV, yV(eV.tV), eV.AV, eV.NV, eV.Yn, yV(eV.Un), yV(eV.yn)];
      var eV
    }

    function EV(VV) {
      return null === (eV = VV) || "object" !== typeof eV ? eV : [UV(eV.Zp, nV), eV.vp];
      var eV
    }

    function BV(VV) {
      return null === (eV = VV) || "object" !== typeof eV ? eV : [UV(eV.Zn, (VV => yV(VV))), yV(eV.vn), eV.rn];
      var eV
    }

    function jV(VV) {
      return null === (eV = VV) || "object" !== typeof eV ? eV : [UV(eV.En, nV), yV(eV.Bn), eV.jn];
      var eV
    }

    function qV(VV) {
      return null === (eV = VV) || "object" !== typeof eV ? eV : [yV(eV.YJ), yV(eV.UJ)];
      var eV
    }

    function tV(VV) {
      return null === (eV = VV) || "object" !== typeof eV ? eV : [yV(eV.Py)];
      var eV
    }

    function FV(VV) {
      return yV(VV)
    }

    function TV(VV) {
      return null === (eV = VV) || "object" !== typeof eV ? eV : [yV(eV.qn), yV(eV.tn), yV(eV.Fn), yV(eV.Tn)];
      var eV
    }

    function PV(VV) {
      return ZV(VV)
    }

    function AV(VV) {
      return ZV(VV)
    }

    function NV(VV) {
      return null === (eV = VV) || "object" !== typeof eV ? eV : [yV(eV.Yw)];
      var eV
    }

    function XV(VV) {
      return VV
    }

    function MV(VV) {
      return null === (eV = VV) || "object" !== typeof eV ? eV : [yV(eV.jy), yV(eV.qy)];
      var eV
    }

    function zV(VV) {
      return yV(VV)
    }

    function GV(VV) {
      return vV(VV)
    }

    function WV(VV) {
      return vV(VV)
    }

    function RV(VV) {
      return null === (eV = VV) || "object" !== typeof eV ? eV : [yV(eV.Vw)];
      var eV
    }

    function gV(VV) {
      return (wV ??= (0, JV.c)().map((VV => VV.name)), wV).map((eV => {
        return "string" === typeof(xV = VV[eV]) ? yV(xV) : UV(xV, nV);
        var xV
      }))
    }

    function DV(VV) {
      return null === (eV = VV) || "object" !== typeof eV ? eV : [eV.Ly, eV.my, eV.Ky];
      var eV
    }
  },
  42275: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => UV
    });
    var JV = xV(42282),
      YV = xV(42266);
    const UV = new class {
      constructor(VV) {
        this.pack = VV, this.game = void 0, this.settle = null, this.hold = null, this.endedWhileHeld = !1, this.gameListeners = new Set, VV.onWanted((() => {
          this.release()
        }))
      }
      setGame(VV) {
        if (void 0 === VV && null !== this.hold) return void(this.endedWhileHeld = !0);
        this.hold = null, this.endedWhileHeld = !1;
        const eV = this.inGame();
        if (this.game = VV, this.update(), this.inGame() !== eV)
          for (const xV of this.gameListeners) xV()
      }
      inGame() {
        return void 0 !== this.game
      }
      onGameChange(VV) {
        return this.gameListeners.add(VV), () => {
          this.gameListeners.delete(VV)
        }
      }
      unwantedLeave(VV) {
        VV && void 0 !== this.game ? this.hold = {
          game: this.game
        } : this.release()
      }
      rejoinHold() {
        return this.hold
      }
      releaseHold(VV) {
        null !== VV && VV === this.hold && this.release()
      }
      release() {
        if (null === this.hold) return;
        const VV = this.endedWhileHeld;
        this.hold = null, this.endedWhileHeld = !1, VV && this.setGame(void 0)
      }
      setSettled(VV) {
        this.settle = VV, this.update()
      }
      update() {
        void 0 === this.game ? this.pack.setSessionFiles(void 0) : null !== this.settle && (0, JV.e)(this.settle.state, this.game) && this.pack.setSessionFiles(this.settle.files)
      }
    }(YV.g)
  },
  5569: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => yV,
      h: () => pV
    });
    var JV = xV(2277),
      YV = xV(5576);
    let UV = null;

    function yV(VV) {
      UV = {
        pack: VV.metaData.id === JV.e ? null : VV
      }
    }

    function pV(VV) {
      return !(null === UV || !(0, YV.d)(UV.pack, VV)) && (UV = null, !0)
    }
  },
  41952: (VV, eV, xV) => {
    xV.r(eV), xV.d(eV, {
      followPageUiPack: () => fw,
      packForGame: () => Lw,
      playWasmGame: () => xZ,
      prefetchWasmPreviews: () => aQ,
      setGamePackConfirm: () => dn,
      startWasmPlay: () => sw,
      startWasmPreviews: () => CQ
    });
    var JV = xV(206),
      YV = xV(1276),
      UV = xV(165),
      yV = xV(40285),
      pV = xV(2051),
      QV = xV(32),
      nV = xV(5164),
      wV = xV(1382),
      ZV = xV(1817),
      vV = xV(1391),
      rV = xV(40475),
      kV = xV(1348),
      bV = xV(1913),
      EV = xV(3258);
    let BV = null,
      jV = null,
      qV = null,
      tV = !1;

    function FV() {
      BV ??= performance.now()
    }
    const TV = {
      ready: () => {
        bV.b.markAdmissionAwaited()
      },
      adEnded: () => {
        bV.b.markJoinAdEnded()
      },
      admitted: () => {
        bV.b.markAdmitted()
      }
    };
    var PV = xV(40487),
      AV = xV(40389),
      NV = xV(37620),
      XV = xV(40244),
      MV = xV(9527),
      zV = xV(37633),
      GV = xV(41955),
      WV = xV(5281),
      RV = xV(41861),
      gV = xV(41936),
      DV = xV(41867);
    const iV = {
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

    function CV(VV) {
      const eV = {
        ...gV.e[VV]
      };
      for (const xV of Object.keys(iV[VV])) delete eV[xV];
      return eV
    }

    function aV() {
      var VV, eV;
      return null === (VV = null === (eV = (0, RV.k)()) || void 0 === eV ? void 0 : eV.localPlayerAlive()) || void 0 === VV || VV
    }

    function oV() {
      var VV, eV;
      return null !== (VV = null === (eV = (0, RV.k)()) || void 0 === eV ? void 0 : eV.localDeaths()) && void 0 !== VV ? VV : null
    }
    const cV = {
        current: aV,
        watch: VV => {
          let eV = aV(),
            xV = oV();
          return (0, WV.u)((() => {
            const JV = aV(),
              YV = oV(),
              UV = null !== YV && null !== xV && YV !== xV;
            xV = YV, UV ? (eV || VV(!0), VV(!1), JV && VV(!0), eV = JV) : JV !== eV && (eV = JV, VV(JV))
          }))
        }
      },
      hV = {
        states: {
          ...CV("states"),
          localPlayerAlive: cV
        },
        events: {
          ...CV("events"),
          localPlayerAliveSet: {
            watch: cV.watch
          }
        },
        commands: {
          ...CV("commands"),
          respawn: () => {
            var VV;
            null === (VV = (0, RV.k)()) || void 0 === VV || VV.respawn()
          },
          playEmote: VV => {
            var eV;
            null === (eV = (0, RV.k)()) || void 0 === eV || eV.send(DV.d.PlayEmote, (0, DV.E)({
              Py: VV
            }))
          },
          applyTemporaryThirdPerson: VV => {
            var eV;
            let {
              durationMs: xV
            } = VV;
            null === (eV = (0, RV.k)()) || void 0 === eV || eV.thirdPersonFor(xV)
          },
          bindCustomButtonKeys: VV => {
            var eV;
            null === (eV = (0, RV.k)()) || void 0 === eV || eV.bindCustomButtonKeys(VV)
          },
          pressCustomButton: VV => {
            var eV;
            let {
              id: xV,
              down: JV
            } = VV;
            null === (eV = (0, RV.k)()) || void 0 === eV || eV.pressCustomButton(xV, JV)
          },
          setLookSensitivity: () => {},
          wakeUp: VV => {
            const eV = (0, DV.O)({
                Vw: VV
              }),
              xV = () => {
                const VV = (0, RV.k)();
                return !(null !== VV && void 0 !== VV && VV.isSessionLive) || VV.send(DV.d.StopSleeping, eV)
              };
            if (!xV()) {
              const VV = (0, WV.u)((() => {
                xV() && VV()
              }))
            }
          },
          setCameraZoom: VV => {
            var eV;
            null === (eV = (0, RV.k)()) || void 0 === eV || eV.setCameraZoom(VV)
          }
        },
        queries: CV("queries"),
        lookups: {
          ...CV("lookups"),
          cameraZoom: () => {
            var VV, eV;
            return null !== (VV = null === (eV = (0, RV.k)()) || void 0 === eV ? void 0 : eV.cameraZoom()) && void 0 !== VV ? VV : 0
          }
        }
      };
    var lV = xV(40264),
      LV = xV(41963),
      fV = xV(41968),
      mV = xV(41986),
      KV = xV(1283),
      HV = xV(110),
      uV = xV(4995),
      sV = xV(4133),
      SV = xV(1204);
    const IV = {
      Cw: () => (0, KV.g)(),
      inbuiltOverwritten: () => uV.f,
      reflectApplyHit: () => SV.b,
      definerHit: () => HV.currentUrl.c,
      emitReplaced: () => (0, QV.d)(),
      confirmMesh: () => (0, sV.d)(),
      confirmMeshHitStack: () => (0, sV.f)()
    };
    var dV = xV(41977),
      OV = xV(42132);
    var Ve = xV(27),
      ee = xV(2059),
      xe = xV(2116),
      Je = xV(1734),
      Ye = xV(2163),
      Ue = xV(1220),
      ye = xV(1279),
      pe = xV(42140);

    function Qe() {
      return ye.c.get().getCurrentLanguageCode()
    }

    function ne(VV) {
      const eV = () => {
        VV({
          translate: (VV, eV) => (0, Ue.s)(Qe(), VV, eV),
          keyBindingText: VV => {
            const eV = (0, xe.r)(VV, Ve.b.get("isTouchScreen"));
            return null !== eV ? (0, Ue.u)(Qe(), eV.translationKey, eV.params) : (0, xe.l)((0, xe.p)(VV))
          },
          isFriend: Ye.e,
          hiddenNames: ee.e.shown,
          loadsFontRest: (0, pe.d)(Qe())
        })
      };
      let xV = !1;
      const JV = () => {
          const VV = Qe();
          (0, Ue.i)(VV).then((() => {
            xV || VV !== Qe() || eV()
          }))
        },
        YV = () => Je.c.getSocialState().friends.map((VV => VV.name.toLowerCase())).sort().join(" ");
      let UV = YV();
      eV(), JV();
      const yV = [(0, ye.g)((() => {
        eV(), JV()
      })), (0, QV.i)("customBindingsChanged", eV), (0, QV.i)("appManagerUpdated|isTouchScreen", eV), (0, Ye.b)((() => {
        const VV = YV();
        VV !== UV && (UV = VV, eV())
      })), ee.e.subscribe(eV)];
      return () => {
        xV = !0;
        for (const VV of yV) VV()
      }
    }
    var we = xV(660),
      Ze = xV(1099),
      ve = xV(2086),
      re = xV(364),
      ke = xV(193),
      be = xV(3194),
      Ee = xV(3196),
      Be = xV(39919),
      je = xV(5180),
      qe = xV(42158),
      te = xV(717),
      Fe = xV(686),
      Te = xV(3285),
      Pe = xV(2080),
      Ae = xV(4139),
      Ne = xV(3716);
    let Xe = null;
    var Me = xV(1230),
      ze = xV(1241),
      Ge = xV(4904),
      We = xV(3903),
      Re = xV(60),
      ge = xV(355),
      De = xV(348),
      ie = xV(42171),
      Ce = xV(5288),
      ae = xV(39952);
    var oe = xV(4870),
      ce = xV(40);
    var he = xV(38845),
      le = xV(42177);
    class Le {
      constructor(VV, eV, xV) {
        this.showView = VV, this.holdForAd = eV, this.render = xV
      }
      pointerUnlockRequestsChanged() {
        (0, ie.x)()
      }
      pointerLockDebugEntries() {
        return [{
          label: "Locked to the canvas",
          value: String((0, ie.n)())
        }]
      }
      setGameViewShown(VV) {
        this.showView(VV)
      }
      setGameView(VV) {
        (0, le.g)(VV)
      }
      videoAdHold(VV, eV) {
        this.holdForAd(VV, eV)
      }
      gameRender() {
        return this.render()
      }
    }
    class fe {
      leave(VV) {
        ! function(VV) {
          if (null !== (0, vV.e)().websocketUrl) try {
            (0, WV.G)().leaveGame(VV)
          } finally {
            (0, vV.q)({
              websocketUrl: null
            })
          }
        }(VV)
      }
      isReplay() {
        return !1
      }
    }
    class me {
      constructor(VV) {
        this.workMs = VV
      }
      watchFrameStarts(VV) {
        return (0, WV.o)(VV)
      }
      watchFrames(VV) {
        return (0, WV.m)(VV)
      }
      watchTicks(VV) {
        return (0, WV.u)(VV)
      }
      frameWorkMs() {
        return this.workMs()
      }
    }
    var Ke = xV(42125),
      He = xV(42179);

    function ue(VV) {
      return VV >= 0 ? Math.min(1, VV) : 0
    }

    function se(VV, eV) {
      const {
        fade: xV
      } = VV;
      return null === xV || eV - xV.at >= xV.ms ? VV.volume : xV.from + (VV.volume - xV.from) * Math.max(0, (eV - xV.at) / xV.ms)
    }

    function Se(VV) {
      const eV = Object.entries(VV),
        xV = new Uint32Array(eV.length);
      let JV = 0;
      for (const [yV, [, pV]] of eV.entries()) xV[yV] = pV.length, JV += pV.length;
      const YV = new Float64Array(3 * JV);
      let UV = 0;
      for (const [, yV] of eV)
        for (const VV of yV) YV.set(VV, UV), UV += 3;
      return {
        blocks: eV.map((VV => {
          let [eV] = VV;
          return eV
        })).join("\0"),
        counts: xV,
        values: YV
      }
    }
    class Ie {
      constructor(VV, eV) {
        this.core = VV, this.warn = eV, this.latest = 0
      }
      async feed() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : de;
        const eV = ++this.latest;
        let xV;
        try {
          xV = await VV()
        } catch (JV) {
          return void(this.core.isStopped || eV !== this.latest || this.warn("the block colours didn't load, so block particles draw grey", JV))
        }
        eV === this.latest && (this.core.setBlockColours(xV) || this.core.isStopped || this.warn("the core refused the block colours: block particles draw grey"))
      }
    }
    async function de() {
      return Se((await xV.e(231).then((() => xV(35423)))).averageColors)
    }
    var Oe = xV(5297),
      Vx = xV(5301),
      ex = xV(41914),
      xx = xV(3666),
      Jx = xV(37422),
      Yx = xV(42029),
      Ux = xV(654),
      yx = xV(38237),
      px = xV(648),
      Qx = xV(375),
      nx = xV(42011);
    const wx = [3e4, 12e4, 3e5];
    class Zx extends Error {}
    const vx = {
      mobTypes: Ux.k,
      vehicleTypes: yx.e,
      mobAiStates: Ux.i,
      playerPoses: px.q
    };
    var rx = xV(42001),
      kx = xV(42024),
      bx = xV(42057),
      Ex = xV(1353),
      Bx = xV(42184),
      jx = xV(42192),
      qx = xV(3328),
      tx = xV(40232),
      Fx = xV(5319),
      Tx = xV(2660);
    const Px = Tx.y.KeysDisabled | Tx.y.LookFrozen | Tx.y.ClicksSuppressed,
      Ax = qx.g;
    var Nx = (0, jx.e)("resumingConn");
    class Xx {
      constructor(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.shell = VV, this.now = eV, this.session = void 0, this.attempt = null, this.landed = null, this.initialInfoConn = 0, this.initialInfoOffer = !1, this.completedEarlyConn = 0, Object.defineProperty(this, Nx, {
          writable: !0,
          value: 0
        }), this.drops = 0, this.session = new tx.e({
          reconnect: VV => this.reconnect(VV),
          isLive: () => VV.isLive(),
          onReconnected: eV => {
            this.landed = eV, VV.onReconnected(eV), this.landIfResumed()
          },
          onGaveUp: (eV, xV) => {
            this.abortAttempt(), VV.onGaveUp(eV, xV)
          },
          freeze: eV => {
            VV.fW(eV), (0, Fx.h)(Px, eV ? Px : 0, "reconnectFreeze")
          },
          releaseSeat: VV => {
            this.releaseSeat(VV)
          }
        })
      }
      isResuming() {
        return this.session.isResuming()
      }
      get resumingConn() {
        return (0, Bx.d)(this, Nx)[Nx]
      }
      canHoldSeat() {
        return this.session.canHoldSeat()
      }
      onInitialInfo(VV) {
        let {
          conn: eV,
          graceMs: xV,
          sessionBased: JV,
          replayOffer: YV
        } = VV;
        this.session.onInitialInfo(xV, JV), this.isResuming() && (this.initialInfoConn = eV, this.initialInfoOffer = YV, this.landIfResumed())
      }
      onResumeComplete(VV) {
        0 !== VV && (VV === (0, Bx.d)(this, Nx)[Nx] ? ((0, Bx.d)(this, Nx)[Nx] = 0, this.session.onResumed()) : this.isResuming() && (this.completedEarlyConn = VV))
      }
      onDropped(VV) {
        this.drops++, this.landed = null, this.initialInfoConn = 0, this.initialInfoOffer = !1, this.completedEarlyConn = 0, (0, Bx.d)(this, Nx)[Nx] = 0, this.session.onConnectionLost(VV)
      }
      leave() {
        this.session.leave(), this.dispose()
      }
      dispose() {
        this.abortAttempt(), this.landed = null, this.completedEarlyConn = 0, (0, Bx.d)(this, Nx)[Nx] = 0, this.session.end()
      }
      reconnect(VV) {
        const eV = this.attempt;
        if (null !== eV && this.awaitingJoinRoom(eV)) return eV.result;
        this.abortAttempt();
        const xV = new AbortController,
          JV = this.drops,
          YV = {
            attachedAt: null
          },
          UV = this.shell.reconnect(VV, xV.signal, (() => {
            YV.attachedAt = this.now()
          })).then((VV => {
            if (this.clearAttempt(yV), this.drops !== JV) throw new Error("the resumed room dropped before its attempt settled");
            return VV
          }), (VV => {
            throw this.clearAttempt(yV), VV
          })),
          yV = {
            abort: xV,
            socket: YV,
            result: UV
          };
        return this.attempt = yV, UV
      }
      clearAttempt(VV) {
        this.attempt === VV && (this.attempt = null)
      }
      abortAttempt() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new DOMException("the reconnect attempt was given up", "AbortError");
        const eV = this.attempt;
        this.attempt = null, null === eV || void 0 === eV || eV.abort.abort(VV)
      }
      awaitingJoinRoom(VV) {
        const eV = VV.socket.attachedAt;
        return null !== eV && this.now() - eV < Ax
      }
      releaseSeat(VV) {
        const eV = this.attempt,
          xV = null !== eV && this.awaitingJoinRoom(eV);
        this.abortAttempt(new LV.p), xV || this.shell.releaseSeat(VV)
      }
      landIfResumed() {
        const VV = this.landed;
        if (null !== VV && VV.conn === this.initialInfoConn) {
          const eV = this.initialInfoOffer && this.completedEarlyConn !== VV.conn;
          if (this.landed = null, this.initialInfoConn = 0, this.initialInfoOffer = !1, this.completedEarlyConn = 0, this.abortAttempt(), !eV) return void this.session.onResumed();
          (0, Bx.d)(this, Nx)[Nx] = VV.conn, this.session.onResuming()
        }
      }
    }
    var Mx = xV(40240),
      zx = xV(42195),
      Gx = xV(37629),
      Wx = xV(37622),
      Rx = xV(2277),
      gx = xV(2014),
      Dx = xV(4716),
      ix = xV(42034),
      Cx = xV(5569);

    function ax(VV) {
      let {
        pack: eV,
        gameSource: xV
      } = VV;
      if (null !== xV && "" !== xV) return `game:${xV}`;
      if (null === eV) return "default";
      const {
        id: JV,
        version: YV
      } = eV.metaData;
      if (JV !== Rx.r.CUSTOM) return `${JV}@${YV}`;
      const UV = [];
      for (const yV of [eV.textureOverrides, eV.modelOverrides, eV.animations])
        for (const [VV, eV] of Object.entries(null !== yV && void 0 !== yV ? yV : {})) UV.push(`${VV}:${eV.length}`);
      return `${JV}:${(0,gx.w)(UV.join())}`
    }
    var ox = xV(4887),
      cx = xV(3681),
      hx = xV(42203),
      lx = xV(691),
      Lx = xV(3688),
      fx = xV(99),
      mx = xV(3302),
      Kx = xV(3290),
      Hx = xV(4973),
      ux = xV(4734),
      sx = xV(42101),
      Sx = xV(4922),
      Ix = xV(2663),
      dx = xV(1725),
      Ox = xV(1764),
      VJ = xV(1332),
      eJ = xV(115),
      xJ = xV(335),
      JJ = xV(40276),
      YJ = xV(2665),
      UJ = xV(5310);
    const yJ = new Set([Oe.Gb.KeyDown, Oe.Gb.MouseMove, Oe.Gb.MouseDown, Oe.Gb.Wheel, Oe.Gb.TouchStart, Oe.Gb.TouchMove]);

    function pJ(VV) {
      return (VV.shiftKey ? Oe.Wb.Shift : 0) | (VV.ctrlKey ? Oe.Wb.Ctrl : 0) | (VV.altKey ? Oe.Wb.Alt : 0) | (VV.metaKey ? Oe.Wb.Meta : 0) | ("repeat" in VV && VV.repeat ? Oe.Wb.Repeat : 0) | (VV.isTrusted ? 0 : Oe.Wb.Untrusted | function(VV) {
        try {
          const {
            editable: eV,
            outsideView: xV
          } = (0, JJ.c)(VV.target);
          return (eV ? Oe.Wb.UntrustedEditable : 0) | (xV ? Oe.Wb.UntrustedOutsideView : 0)
        } catch {
          return 0
        }
      }(VV))
    }

    function QJ(VV) {
      return "touchOnly" !== (0, eJ.c)() && "function" === typeof VV.requestPointerLock
    }

    function nJ(VV) {
      return 0 === VV.button ? VV.altKey ? UJ.p["Alt+Left Click"] : UJ.p.Mouse1 : 1 === VV.button ? UJ.p.Mouse2 : UJ.p.Mouse3
    }
    const wJ = new Set(["AltLeft", "AltRight", "ArrowUp", "ArrowDown"]),
      ZJ = new Map([
        ["AltLeft", "altKey"],
        ["AltRight", "altKey"],
        ["ControlLeft", "ctrlKey"],
        ["ControlRight", "ctrlKey"],
        ["ShiftLeft", "shiftKey"],
        ["ShiftRight", "shiftKey"],
        ["MetaLeft", "metaKey"],
        ["MetaRight", "metaKey"]
      ]),
      vJ = 32768,
      rJ = 1;

    function kJ(VV) {
      return Math.min(Math.max(Math.round(VV), 0), 65535)
    }

    function bJ(VV, eV, xV) {
      const JV = [],
        YV = (VV, eV, xV, YV) => {
          const UV = VV => {
            (0, Ox.v)(VV) || xV(VV)
          };
          VV.addEventListener(eV, UV, YV), JV.push((() => {
            VV.removeEventListener(eV, UV, YV)
          }))
        },
        UV = {
          capture: !0,
          passive: !0
        },
        yV = (VV, xV, JV, YV, UV) => (!(0, YJ.b)() || !yJ.has(VV)) && (eV(VV, xV, JV, YV, UV), !0),
        pV = () => document.pointerLockElement === VV,
        QV = (0, xJ.e)(),
        nV = VV => {
          VV.ctrlKey && xV.ctrlCombosAreGames() && !(0, Fx.f)(VV.target) && VV.preventDefault()
        },
        wV = (VV, JV, YV) => {
          xV.inspect(VV, JV, !1), eV(Oe.Gb.KeyUp, JV, 0, 0, (0, Ix.s)(YV, VV.timeStamp)), xV.keyReleased(JV)
        },
        ZV = new Map,
        vV = (VV, eV, xV) => VV[xV] || ("AltRight" === eV || "ControlLeft" === eV) && VV.getModifierState("AltGraph"),
        rV = new Map,
        kV = () => {
          ZV.clear(), rV.clear()
        },
        bV = VV => {
          if (VV.isTrusted && document.hasFocus())
            for (const [eV, xV] of rV) rV.delete(eV), vV(VV, eV, xV) || (ZV.delete(eV), wV(VV, UJ.p[eV], pJ(VV)))
        };
      VV.tabIndex = -1;
      let EV = 0,
        BV = 0;
      const jV = () => {
        const eV = VV.getBoundingClientRect();
        EV = eV.left, BV = eV.top
      };
      let qV = "mouse";
      const tV = () => !pV() && ("mouse" === qV || !xV.touchUiShown()),
        FV = (VV, eV, xV) => {
          const JV = (kJ(VV.clientX - EV) | kJ(VV.clientY - BV) << 16) >>> 0;
          yV(Oe.Gb.MouseMove, Oe.Zb.Point, eV, xV, JV)
        };
      let TV = !1,
        PV = 0;
      const AV = () => {
        TV && (TV = !1, xV.viewShown() && (0, ie.K)())
      };
      JV.push((() => {
        clearTimeout(PV)
      })), YV(window, "keydown", (VV => {
        "Escape" === VV.key ? (0, ie.C)(!0) : VV.repeat || (0, Fx.f)(VV.target) || (TV = !0, clearTimeout(PV), PV = window.setTimeout(AV, 0))
      }), UV), YV(window, "keydown", (VV => {
        AV(), nV(VV), bV(VV);
        const eV = UJ.p[VV.code];
        if ("number" !== typeof eV || !xV.viewShown()) return;
        const JV = (0, Fx.f)(VV.target);
        JV || !xV.prevents(eV) && !wJ.has(VV.code) || VV.preventDefault(), VV.repeat || xV.inspect(VV, eV, !0), yV(Oe.Gb.KeyDown, eV, 0, 0, (0, Ix.s)(pJ(VV), VV.timeStamp)) && ZV.set(VV.code, eV), JV || xV.keyPressed(eV)
      }), {
        capture: !1,
        passive: !1
      }), YV(window, "keyup", (VV => {
        "Escape" === VV.key && (0, ie.C)(!1), nV(VV), ZV.delete(VV.code), rV.delete(VV.code), bV(VV);
        const eV = UJ.p[VV.code];
        "number" === typeof eV && wV(VV, eV, pJ(VV))
      }), {
        capture: !0,
        passive: !1
      }), YV(window, "mousemove", (VV => {
        "mouse" === qV && tV() ? FV(VV, VV.movementX, VV.movementY) : pV() ? yV(Oe.Gb.MouseMove, Oe.Zb.Stamped, VV.movementX, VV.movementY, (0, Ix.s)(0, VV.timeStamp)) : yV(Oe.Gb.MouseMove, 0, VV.movementX, VV.movementY, 0)
      }), UV);
      let NV = 0,
        XV = 0;
      const MV = [];
      let zV = !1,
        GV = !1;
      YV(VV, "mousedown", (VV => {
        if ((0, YJ.b)()) return;
        bV(VV);
        const JV = 1 << VV.button;
        if (!pV() && (0, ie.H)() && (0, ie.e)() && (GV = !0, !zV)) return void(NV |= JV);
        NV &= ~JV;
        const YV = VV.button <= 2 ? nJ(VV) : void 0;
        void 0 !== YV && (MV[VV.button] = YV, xV.inspect(VV, YV, !0)), tV() && FV(VV, 0, 0), eV(Oe.Gb.MouseDown, VV.button, VV.clientX, VV.clientY, (0, Ix.s)(pJ(VV), VV.timeStamp)), XV |= JV, void 0 !== YV && xV.keyPressed(YV)
      }), UV), YV(window, "mouseup", (VV => {
        var JV;
        bV(VV);
        const YV = 1 << VV.button,
          UV = 0 !== (NV & ~XV & YV);
        if (NV &= ~YV, XV &= ~YV, UV) return;
        const yV = VV.button <= 2 ? null !== (JV = MV[VV.button]) && void 0 !== JV ? JV : nJ(VV) : void 0;
        void 0 !== yV && xV.inspect(VV, yV, !1), eV(Oe.Gb.MouseUp, VV.button, VV.clientX, VV.clientY, (0, Ix.s)(pJ(VV), VV.timeStamp)), void 0 !== yV && xV.keyReleased(yV)
      }), UV), YV(VV, "contextmenu", (VV => {
        VV.preventDefault()
      }), {
        passive: !1
      });
      const WV = VV => {
        (pV() || (0, ie.l)() && (0, VJ.r)()) && (VV.ctrlKey || QV && !document.fullscreenElement) && VV.preventDefault()
      };
      YV(VV, "wheel", (VV => {
        WV(VV), bV(VV), yV(Oe.Gb.Wheel, VV.deltaMode, VV.deltaX, VV.deltaY, 0)
      }), {
        capture: !0,
        passive: !1
      });
      const RV = {
          capture: !0,
          passive: !1
        },
        gV = VV => {
          VV ? window.addEventListener("wheel", WV, RV) : window.removeEventListener("wheel", WV, RV)
        };
      gV((0, ie.l)()), JV.push((0, ie.s)(gV)), JV.push((() => {
        gV(!1)
      }));
      const DV = new Map,
        iV = new Set,
        CV = VV => {
          const eV = "stylus" === VV.touchType;
          for (const xV of DV.values())
            if (!xV.touched && (eV || Math.abs(VV.clientX - xV.x) <= rJ && Math.abs(VV.clientY - xV.y) <= rJ)) return xV.touched = !0, !0;
          return !1
        },
        aV = VV => 32767 & VV,
        oV = new Set,
        cV = VV => xV => {
          const JV = (0, Ix.s)(pJ(xV), xV.timeStamp);
          VV !== Oe.Gb.TouchStart && VV !== Oe.Gb.TouchMove || ((VV, xV) => {
            const JV = VV.touches;
            if (JV)
              for (const YV of oV) {
                let VV = !1;
                for (let eV = 0; eV < JV.length && !VV; eV++) VV = aV(JV[eV].identifier) === YV;
                VV || (oV.delete(YV), eV(Oe.Gb.TouchCancel, YV, 0, 0, xV))
              }
          })(xV, JV);
          const YV = xV.changedTouches;
          for (let eV = 0; eV < YV.length; eV++) {
            const xV = YV[eV];
            if (VV === Oe.Gb.TouchStart && CV(xV) && iV.add(xV.identifier), iV.has(xV.identifier)) {
              VV !== Oe.Gb.TouchEnd && VV !== Oe.Gb.TouchCancel || iV.delete(xV.identifier);
              continue
            }
            const UV = aV(xV.identifier),
              pV = yV(VV, UV, xV.clientX - EV, xV.clientY - BV, JV);
            VV === Oe.Gb.TouchStart ? pV && oV.add(UV) : VV !== Oe.Gb.TouchMove && oV.delete(UV)
          }
        },
        hV = cV(Oe.Gb.TouchStart);
      YV(VV, "touchstart", (VV => {
        VV.preventDefault(), (0, YJ.b)() || (xV.touchStarting(), hV(VV))
      }), {
        passive: !1
      }), YV(VV, "touchmove", cV(Oe.Gb.TouchMove), UV), YV(VV, "touchend", cV(Oe.Gb.TouchEnd), UV), YV(VV, "touchcancel", cV(Oe.Gb.TouchCancel), UV);
      const lV = VV => vJ | 32767 & VV,
        LV = (VV, eV) => {
          yV(VV, lV(eV.pointerId), eV.clientX - EV, eV.clientY - BV, (0, Ix.s)(pJ(eV), eV.timeStamp))
        };
      YV(window, "pointerdown", (eV => {
        qV = eV.pointerType, "mouse" === eV.pointerType && eV.target !== VV && xV.viewShown() && (0, ie.N)()
      }), UV), YV(VV, "pointerdown", (VV => {
        "pen" === VV.pointerType && 0 === VV.button && (0, ie.l)() && (0, VJ.r)() && (VV.preventDefault(), (0, YJ.b)() || (DV.set(VV.pointerId, {
          x: VV.clientX,
          y: VV.clientY,
          touched: !1
        }), xV.touchStarting(), LV(Oe.Gb.TouchStart, VV)))
      }), {
        passive: !1
      }), YV(window, "pointermove", (VV => {
        qV = VV.pointerType, DV.has(VV.pointerId) && LV(Oe.Gb.TouchMove, VV), "mouse" !== VV.pointerType && tV() && FV(VV, 0, 0)
      }), UV);
      const fV = VV => eV => {
        DV.delete(eV.pointerId) && LV(VV, eV)
      };
      YV(window, "pointerup", fV(Oe.Gb.TouchEnd), UV), YV(window, "pointercancel", fV(Oe.Gb.TouchCancel), UV);
      let mV = 0;
      const KV = () => {
          mV = 0, jV(), xV.resized()
        },
        HV = () => {
          const VV = xV.sizeCanvas();
          null !== VV && eV(Oe.Gb.Resize, 0, VV.cssWidth, VV.cssHeight, (0, Ix.k)(VV.renderScale)), jV(), xV.resized(), 0 === mV && (mV = requestAnimationFrame(KV))
        };
      YV(window, "resize", HV, UV), JV.push(xV.watchRenderScale(HV)), JV.push((() => {
        cancelAnimationFrame(mV)
      })), YV(window, "focus", (VV => {
        VV.isTrusted && (eV(Oe.Gb.Focus, 0, 0, 0, 0), xV.viewShown() && (0, ie.N)())
      }), {
        passive: !0
      });
      const uV = () => {
          (0, ie.C)(!1), NV = 0
        },
        sV = () => {
          oV.clear(), DV.clear(), iV.clear()
        };
      let SV = 0,
        IV = 0;
      YV(window, "blur", (JV => {
        uV(), (0, ie.i)();
        for (const VV of ZV.keys()) {
          const eV = ZJ.get(VV);
          void 0 !== eV && rV.set(VV, eV)
        }
        JV.isTrusted && ((VV => {
          for (const [xV, JV] of DV) eV(Oe.Gb.TouchCancel, lV(xV), JV.x, JV.y, (0, Ix.s)(0, VV));
          DV.clear()
        })(JV.timeStamp), eV(Oe.Gb.Blur, Oe.t.KeepTouches, 0, 0, 0)), QV && JV.isTrusted && (clearTimeout(IV), IV = window.setTimeout((() => {
          if (!document.hasFocus()) {
            for (const VV of ZV.values()) wV(JV, VV, 0);
            kV()
          }
        }), 0)), clearTimeout(SV), SV = window.setTimeout((() => {
          document.activeElement instanceof HTMLIFrameElement && (0, VJ.r)() && xV.viewShown() && VV.focus({
            preventScroll: !0
          })
        }), 0)
      }), {
        passive: !0
      }), JV.push((() => {
        clearTimeout(SV), clearTimeout(IV)
      })), YV(window, "mousedown", (eV => {
        QV && eV.isTrusted && !document.hasFocus() && (0, VJ.r)() && xV.viewShown() && (window.focus(), VV.focus({
          preventScroll: !0
        }))
      }), UV), YV(document, "visibilitychange", (() => {
        document.hidden ? (eV(Oe.Gb.Blur, 0, 0, 0, 0), sV()) : document.hasFocus() && eV(Oe.Gb.Focus, 0, 0, 0, 0)
      }), {
        passive: !0
      }), JV.push((0, YJ.d)((() => {
        uV(), eV(Oe.Gb.Blur, Oe.t.Release, 0, 0, 0), xV.keysReleased(), kV(), XV = 0, sV(), eV(Oe.Gb.Joystick, 0, 0, 0, 0), document.hasFocus() && eV(Oe.Gb.Focus, 0, 0, 0, 0)
      })));
      const dV = !xV.canLock(),
        OV = () => dV && !(0, ie.l)() ? Oe.tc.Lockless : Oe.tc.Released,
        Ve = () => {
          pV() && (zV = !1, GV = !1), eV(Oe.Gb.PointerLock, pV() ? Oe.tc.Locked : OV(), 0, 0, 0), (0, ie.F)(pV())
        };
      return YV(document, "pointerlockchange", Ve, {
        passive: !0
      }), YV(document, "pointerlockerror", (() => {
        zV ||= GV, GV = !1, (0, ie.p)()
      }), {
        passive: !0
      }), dV && JV.push((0, ie.s)((() => {
        eV(Oe.Gb.PointerLock, OV(), 0, 0, 0)
      }))), HV(), eV(document.hasFocus() ? Oe.Gb.Focus : Oe.Gb.Blur, 0, 0, 0, 0), Ve(), () => {
        for (const VV of JV.splice(0)) VV()
      }
    }
    var EJ = xV(35251),
      BJ = xV(35247),
      jJ = xV(2124);
    const qJ = new Map(UJ.e.map(((VV, eV) => [VV, eV]))),
      tJ = ["jump", "primary-fire", "alt-fire"],
      FJ = ["primary-fire", "alt-fire"];

    function TJ(VV) {
      return `${jJ.b}${VV}`
    }
    const PJ = ["forward", "backward", "left", "right", "sprint", "jump"];

    function AJ(VV) {
      const eV = [];
      for (const xV of VV) {
        const VV = "string" === typeof xV ? UJ.p[xV] : void 0;
        "number" === typeof VV && eV.push(VV)
      }
      return eV
    }
    class NJ {
      constructor() {
        this.keys = new Map, this.preventKeys = new Set, this.movementKeys = new Set, this.checkedDown = new Set, this.checkedUp = new Set;
        for (const [VV, eV] of Object.entries(UJ.h)) this.keys.set(VV, eV);
        this.updateKeySets()
      }
      prevents(VV) {
        return this.preventKeys.has(VV)
      }
      moves(VV) {
        return this.movementKeys.has(VV)
      }
      checks(VV, eV) {
        return (eV ? this.checkedDown : this.checkedUp).has(VV)
      }
      sync(VV, eV) {
        for (const [xV, JV] of this.keys) {
          const YV = VV(TJ(xV)),
            UV = Array.isArray(YV) ? AJ(YV) : UJ.h[xV];
          (UV.length !== JV.length || UV.some(((VV, eV) => VV !== JV[eV]))) && this.bind(xV, UV, eV)
        }
      }
      bind(VV, eV, xV) {
        const JV = qJ.get(VV);
        if (void 0 !== JV) {
          xV(Oe.Gb.Binding, 0, 0, 0, JV | Oe.p.Clear << 8);
          for (const UV of [...eV, ...null !== (YV = UJ.l[VV]) && void 0 !== YV ? YV : []]) {
            var YV;
            xV(Oe.Gb.Binding, UV, 0, 0, JV | Oe.p.Add << 8)
          }
          this.keys.set(VV, eV), this.updateKeySets()
        }
      }
      updateKeySets() {
        this.preventKeys.clear();
        for (const JV of UJ.q)
          for (const eV of null !== (VV = this.keys.get(UJ.e[JV])) && void 0 !== VV ? VV : []) {
            var VV;
            this.preventKeys.add(eV)
          }
        this.movementKeys.clear();
        for (const JV of PJ)
          for (const VV of null !== (eV = this.keys.get(JV)) && void 0 !== eV ? eV : []) {
            var eV;
            this.movementKeys.add(VV)
          }
        for (const [JV, YV] of [
            [this.checkedDown, tJ],
            [this.checkedUp, FJ]
          ]) {
          JV.clear();
          for (const VV of YV)
            for (const eV of null !== (xV = this.keys.get(VV)) && void 0 !== xV ? xV : []) {
              var xV;
              JV.add(eV)
            }
        }
      }
    }
    var XJ = xV(5307),
      MJ = xV(37740);
    const zJ = "[bloxd-wasm-client]";

    function GJ() {
      return "inGame" === Ve.b.get("gameState") && !(0, dx.q)()
    }
    let WJ = null;

    function RJ(VV, eV) {
      WJ && eV.writePendingInput() && WJ.push(function(VV, eV) {
        let xV = "";
        for (const JV of eV) xV += JV.toString(16).padStart(2, "0");
        return xV ? `${VV} ${xV}` : String(VV)
      }(VV, eV.rings.input.written()))
    }
    const gJ = [];

    function DJ(VV, eV, xV, JV) {
      VV === Oe.hb.InputAction && JV === Oe.Bb && gJ.push(eV.getUint32(xV, !0))
    }
    var iJ = xV(42210),
      CJ = xV(1224),
      aJ = xV(38036);
    const oJ = {
      general: {
        ok: "OK",
        tryAgain: "Try Again",
        back: "Back",
        reload: "Reload",
        reconnect: "Rejoin"
      },
      wasmScreens: CJ.wasmScreens
    };

    function cJ(VV) {
      var eV, xV;
      let JV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const [YV, UV] = VV.split(":");
      return (null !== (eV = null === (xV = oJ[YV]) || void 0 === xV ? void 0 : xV[UV]) && void 0 !== eV ? eV : VV).replace(/\{\{(\w+)\}\}/g, ((VV, eV) => {
        var xV;
        return null !== (xV = JV[eV]) && void 0 !== xV ? xV : VV
      }))
    }

    function hJ(VV, eV) {
      (0, Sx.b)();
      const xV = document.createElement("div");
      xV.setAttribute("role", "alertdialog"), xV.style.cssText = "position:fixed;top:0;right:0;bottom:0;left:0;z-index:100;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,0.7);font:16px sans-serif;color:#fff";
      const JV = document.createElement("div");
      JV.style.cssText = "max-width:28rem;padding:1.5rem;background:#1c2333;text-align:center";
      const YV = document.createElement("h2");
      YV.textContent = cJ(VV.title);
      const UV = document.createElement("p");
      if (UV.textContent = cJ(VV.help, VV.helpValues), UV.style.whiteSpace = "pre-line", JV.append(YV, UV), VV.discordLink) {
        const VV = document.createElement("a");
        VV.href = aJ.d, VV.target = "_blank", VV.rel = "noreferrer", VV.style.color = "#8ab4ff", VV.textContent = cJ("wasmScreens:reportOnDiscord"), JV.append(VV)
      }
      const yV = document.createElement("div");
      return yV.style.cssText = "display:flex;gap:1rem;justify-content:center;margin-top:1.5rem", JV.append(yV), xV.append(JV), document.body.append(xV), new Promise((JV => {
        const YV = VV => {
            null === eV || void 0 === eV || eV.removeEventListener("abort", UV), xV.remove(), JV(VV)
          },
          UV = () => {
            YV(!1)
          };
        null === eV || void 0 === eV || eV.addEventListener("abort", UV, {
          once: !0
        });
        const pV = (VV, eV) => {
          const xV = document.createElement("button");
          xV.textContent = cJ(VV), xV.style.cssText = "padding:0.5rem 1.25rem;font:inherit", xV.addEventListener("click", (() => {
            YV(eV)
          })), yV.append(xV)
        };
        null !== VV.cancel && pV(VV.cancel, !1), pV(VV.confirm, !0)
      }))
    }
    var lJ = xV(296),
      LJ = xV(134);
    const fJ = new Set(["android", "ios"]);
    let mJ = null;

    function KJ() {
      return mJ ??= function() {
        let VV = null;
        try {
          var eV, xV, JV;
          const YV = document.createElement("canvas"),
            UV = {
              powerPreference: LJ.c
            };
          if (VV = null !== (eV = YV.getContext("webgl2", UV)) && void 0 !== eV ? eV : YV.getContext("webgl", UV), !VV) return null;
          const yV = VV.getExtension("WEBGL_debug_renderer_info");
          if (!yV) return "unknown";
          const pV = String(null !== (xV = VV.getParameter(yV.UNMASKED_RENDERER_WEBGL)) && void 0 !== xV ? xV : "");
          return "" === pV ? "unknown" : (0, lJ.h)(String(null !== (JV = VV.getParameter(yV.UNMASKED_VENDOR_WEBGL)) && void 0 !== JV ? JV : ""), pV)
        } catch {
          return null
        } finally {
          try {
            var YV, UV;
            null === (YV = VV) || void 0 === YV || null === (UV = YV.getExtension("WEBGL_lose_context")) || void 0 === UV || UV.loseContext()
          } catch {}
        }
      }(), mJ
    }

    function HJ(VV) {
      const eV = (0, fx.pageOperatingSystem)();
      return null === eV ? null : function(VV, eV, xV) {
        const JV = "software_adapter" === VV.reason ? null : VV.adapter,
          YV = null === JV || "" === JV.vendor ? null : (0, lJ.e)(JV.vendor, JV.architecture);
        return null !== YV && "other_intel" !== YV ? YV : fJ.has(eV) ? null : xV()
      }(VV, eV, KJ)
    }
    const uJ = 6e4,
      sJ = 3e5;
    var SJ = xV(4073);
    var IJ = xV(42217),
      dJ = xV(698),
      OJ = xV(10);

    function VY(VV, eV) {
      const xV = OJ.jb.encode(eV);
      ! function(VV, eV) {
        let xV = eV >= 0 ? 2 * eV : 2 * -eV - 1;
        for (; xV >= 128;) VV.push(xV % 128 | 128), xV = Math.floor(xV / 128);
        VV.push(xV)
      }(VV, xV.length);
      for (const JV of xV) VV.push(JV)
    }
    let eY, xY, JY;
    (() => {
      const VV = ["length", 0, null, 2, "s", "e", "a", 1, 184, 4, 3, 5, "d", 171, 109, 133, !1, "resolv", "then", 31, "c", 89, "g", "f", 72, 175, "i", 213, 183, "postCo", "okies", 8, 16, 9, "WAKQYY", "Y", 512, 217, "012345", void 0, 236, 15, 192, 10, 6, 232, "b", 88, 1023, 63, 128, 12, 255, 146, 32, 24, 7, 18, 19, 64, 65535, 211, 249, 186, !0, 84, 242, 143, 101, 55296, 56319, 56320, 65536, 193, 57343, 224, 240, 30, 120, "Invalid byte index", 37, "Invalid continuation byte", 201, 147, "I", 76, 93, 123, "Block ", "image "];

      function eV() {}
      "l3MiyQ" in eV && function(...eV) {
        eV[VV[0]] = VV[1]
      }();
      const JV = (VV[1], OJ[VV[4]])("aGFyZHdhcmVDb25jdXJyZW5jeQ=="),
        YV = (VV[1], OJ[VV[4]])("QkFCWUxPTg=="),
        UV = (VV[1], OJ[VV[4]])("QW5kZXNpdGU="),
        yV = (VV[1], OJ[VV[4]])("U21vb3RoIEdyYW5pdGU="),
        pV = (VV[1], OJ[VV[4]])("RGlvcml0ZQ=="),
        QV = async (JV, YV, UV, yV) => {
          const [{
            clientSideServerUrls: pV
          }, {
            HttpPayloadType: QV,
            ["postJsonWithMetricsCookiesAndCustomRespons" + VV[5]]: nV
          }] = await Promise.all([Promise[VV[17] + VV[5]]()[VV[18]](((...JV) => (JV[VV[0]] = VV[1], "dxEG3z" in eV && function(...eV) {
            wV(eV[VV[0]] = VV[1], eV[VV[6]] = function(...xV) {
              return wV(xV[VV[0]] = VV[7], xV[VV[6]] = []), (xV[VV[1]] === VV[7] || xV[VV[1]] >= VV[9]) && eV[-VV[8]](xV[VV[6]], [], xV[VV[1]], VV[1]), xV[VV[6]]
            }, eV[-VV[8]] = function(...xV) {
              for (xV[VV[0]] = VV[9], xV[VV[9]] = xV[VV[10]]; xV[VV[9]] < xV[VV[3]]; xV[VV[9]]++) {
                if (xV[VV[7]].length !== xV[VV[9]]) return;
                for (xV[VV[11]] = VV[1]; xV[VV[11]] < xV[VV[3]]; xV[VV[11]]++) eV[VV[3]](xV[VV[7]], [xV[VV[9]], xV[VV[11]]]) && (wV(xV[VV[7]].push([xV[VV[9]], xV[VV[11]]]), eV[-VV[8]](xV[VV[1]], xV[VV[7]], xV[VV[3]], xV[VV[9]] + VV[7])), xV[VV[7]].length === xV[VV[3]] && xV[VV[1]].push(eV[VV[12]](xV[VV[7]])), xV[VV[7]].pop())
              }
            }, eV[VV[12]] = function(...eV) {
              for (wV(eV[VV[0]] = VV[7], eV[VV[7]] = [], eV[VV[14]] = eV[VV[1]].length), eV[VV[13]] = VV[1]; eV[VV[13]] < eV[VV[14]]; eV[VV[13]]++)
                for (eV[VV[7]][eV[VV[13]]] = "", eV[-VV[15]] = VV[1]; eV[-VV[15]] < eV[VV[14]]; eV[-VV[15]]++) eV[VV[7]][eV[VV[13]]] += eV[VV[1]][eV[VV[13]]][VV[7]] === eV[-VV[15]] ? "Q" : ".";
              return eV[VV[7]]
            }, eV[VV[3]] = function(...eV) {
              for (wV(eV[VV[0]] = VV[3], eV[VV[3]] = eV[VV[1]].length), eV[VV[10]] = VV[1]; eV[VV[10]] < eV[VV[3]]; eV[VV[10]]++) {
                if (eV[VV[1]][eV[VV[10]]][VV[1]] === eV[VV[7]][VV[1]] || eV[VV[1]][eV[VV[10]]][VV[7]] === eV[VV[7]][VV[7]]) return VV[16];
                if (Math.abs((eV[VV[1]][eV[VV[10]]][VV[1]] - eV[VV[7]][VV[1]]) / (eV[VV[1]][eV[VV[10]]][VV[7]] - eV[VV[7]][VV[7]])) === VV[7]) return VV[16]
              }
              return VV[64]
            }, console.log(eV[VV[6]]))
          }(), xV(1230)))), Promise[VV[17] + VV[5]]()[VV[18]](((...JV) => (JV[VV[0]] = VV[1], "BmdtFd" in eV && function(...eV) {
            wV(eV[VV[0]] = VV[1], eV[VV[28]] = function(...eV) {
              if (wV(eV[VV[0]] = VV[7], eV[VV[6]] = eV[VV[1]].length), eV[VV[6]] < VV[3]) return VV[1];
              if (wV(eV[VV[19]] = Math.max(...eV[VV[1]]), eV[VV[20]] = Math.min(...eV[VV[1]])), eV[VV[19]] === eV[VV[20]]) return VV[1];
              for (wV(eV[-VV[24]] = Array(eV[VV[6]] - VV[7]).fill(Number.MAX_SAFE_INTEGER), eV[VV[5]] = Array(eV[VV[6]] - VV[7]).fill(Number.MIN_SAFE_INTEGER), eV[VV[23]] = Math.ceil((eV[VV[19]] - eV[VV[20]]) / (eV[VV[6]] - VV[7])), eV[VV[22]] = VV[1]), eV[-VV[21]] = VV[1]; eV[-VV[21]] < eV[VV[6]]; eV[-VV[21]]++) eV[VV[1]][eV[-VV[21]]] !== eV[VV[20]] && eV[VV[1]][eV[-VV[21]]] !== eV[VV[19]] && wV(eV[VV[22]] = Math.floor((eV[VV[1]][eV[-VV[21]]] - eV[VV[20]]) / eV[VV[23]]), eV[-VV[24]][eV[VV[22]]] = Math.min(eV[-VV[24]][eV[VV[22]]], eV[VV[1]][eV[-VV[21]]]), eV[VV[5]][eV[VV[22]]] = Math.max(eV[VV[5]][eV[VV[22]]], eV[VV[1]][eV[-VV[21]]]));
              for (wV(eV[VV[26]] = Number.MIN_SAFE_INTEGER, eV[VV[27]] = eV[VV[20]]), eV[-VV[25]] = VV[1]; eV[-VV[25]] < eV[VV[6]] - VV[7]; eV[-VV[25]]++) eV[-VV[24]][eV[-VV[25]]] === Number.MAX_SAFE_INTEGER && eV[VV[5]][eV[-VV[25]]] === Number.MIN_SAFE_INTEGER || wV(eV[VV[26]] = Math.max(eV[VV[26]], eV[-VV[24]][eV[-VV[25]]] - eV[VV[27]]), eV[VV[27]] = eV[VV[5]][eV[-VV[25]]]);
              return eV[VV[26]] = Math.max(eV[VV[26]], eV[VV[19]] - eV[VV[27]]), eV[VV[26]]
            }, console.log(eV[VV[28]]))
          }(), xV(1173))))]), ZV = pV.getHttpUrlFromWebSocketUrl(JV.endpoint), vV = JV[VV[29] + VV[30]] === VV[2] ? VV[39] : await JV[VV[29] + VV[30]]();
          await nV("" + ZV + YV, UV, {
            ["retrie" + VV[4]]: yV
          }, QV.blob, vV)
        };
      eY = async (xV, JV) => {
        const YV = function(VV, eV, xV, JV) {
          const YV = [];
          VY(YV, VV), VY(YV, eV), VY(YV, xV);
          for (const UV of JV) YV.push(UV);
          return YV
        }(xV.game, xV.lobby, (VV[1], dJ[VV[20]])(), JV);
        try {
          function yV(...eV) {
            wV(eV[VV[0]] = VV[1], eV[VV[6]] = function(...eV) {
              function xV(...eV) {
                return eV[VV[0]] = VV[3], pV(UV(QV(eV[VV[1]]), QV(eV[VV[7]])))
              }

              function JV(...eV) {
                return eV[VV[0]] = VV[10],
                  function(...eV) {
                    var xV, JV, YV, UV;
                    for (wV(eV[VV[0]] = VV[3], eV[VV[3]] = eV[VV[7]].length, eV[VV[46]] = Array()), eV[VV[45]] = Array(Math.ceil(eV[VV[1]].length / VV[3])), xV = VV[1]; xV < eV[VV[45]].length; xV++) eV[VV[45]][xV] = eV[VV[1]].charCodeAt(xV * VV[3]) << VV[31] | eV[VV[1]].charCodeAt(xV * VV[3] + VV[7]);
                    for (; eV[VV[45]].length > VV[1];) {
                      for (wV(UV = Array(), YV = VV[1]), xV = VV[1]; xV < eV[VV[45]].length; xV++) wV(YV = (YV << VV[32]) + eV[VV[45]][xV], JV = Math.floor(YV / eV[VV[3]]), YV -= JV * eV[VV[3]]), (UV.length > VV[1] || JV > VV[1]) && (UV[UV.length] = JV);
                      wV(eV[VV[46]][eV[VV[46]].length] = YV, eV[VV[45]] = UV)
                    }
                    for (eV[VV[11]] = "", xV = eV[VV[46]].length - VV[7]; xV >= VV[1]; xV--) eV[VV[11]] += eV[VV[7]].charAt(eV[VV[46]][xV]);
                    for (eV[-VV[47]] = Math.ceil(eV[VV[1]].length * VV[31] / (Math.log(eV[VV[7]].length) / Math.log(VV[3]))), xV = eV[VV[11]].length; xV < eV[-VV[47]]; xV++) eV[VV[11]] = eV[VV[7]][VV[1]] + eV[VV[11]];
                    return eV[VV[11]]
                  }(UV(QV(eV[VV[1]]), QV(eV[VV[7]])), eV[VV[3]])
              }

              function UV(...eV) {
                wV(eV[VV[0]] = VV[3], eV[VV[3]] = nV(eV[VV[1]])), eV[VV[3]].length > VV[32] && (eV[VV[3]] = tV(eV[VV[3]], eV[VV[1]].length * VV[31]));
                var xV = Array(VV[32]),
                  JV = Array(VV[32]);
                for (eV[VV[33]] = VV[1]; eV[VV[33]] < VV[32]; eV[VV[33]]++) wV(xV[eV[VV[33]]] = 909522486 ^ eV[VV[3]][eV[VV[33]]], JV[eV[VV[33]]] = 1549556828 ^ eV[VV[3]][eV[VV[33]]]);
                return eV[VV[20]] = tV(xV.concat(nV(eV[VV[7]])), VV[36] + eV[VV[7]].length * VV[31]), ZV(tV(JV.concat(eV[VV[20]]), function(...eV) {
                  if (eV[VV[0]] = VV[10], eV[VV[1]] === VV[34] + VV[35]) return eV[VV[7]] + eV[VV[3]]
                }(VV[34] + VV[35], VV[36], 256)))
              }

              function yV(...xV) {
                xV[VV[0]] = VV[7];
                try {
                  eV[VV[37]]
                } catch (YV) {
                  eV[VV[37]] = VV[1]
                }
                for (wV(xV[VV[6]] = eV[VV[37]] ? VV[38] + "6789ABCDEF" : VV[38] + "6789abcdef", xV[-VV[40]] = "", xV[VV[10]] = VV[39]), xV[VV[9]] = VV[1]; xV[VV[9]] < xV[VV[1]].length; xV[VV[9]]++) wV(xV[VV[10]] = xV[VV[1]].charCodeAt(xV[VV[9]]), xV[-VV[40]] += xV[VV[6]].charAt(xV[VV[10]] >>> VV[9] & VV[41]) + xV[VV[6]].charAt(xV[VV[10]] & VV[41]));
                return xV[-VV[40]]
              }

              function pV(...xV) {
                xV[VV[0]] = VV[7];
                try {
                  eV[VV[7]]
                } catch (YV) {
                  eV[VV[7]] = ""
                }
                for (wV(xV[VV[6]] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", xV[VV[3]] = "", xV[VV[10]] = xV[VV[1]].length), xV[VV[42]] = VV[1]; xV[VV[42]] < xV[VV[10]]; xV[VV[42]] += VV[10])
                  for (xV[VV[11]] = xV[VV[1]].charCodeAt(xV[VV[42]]) << VV[32] | (xV[VV[42]] + VV[7] < xV[VV[10]] ? xV[VV[1]].charCodeAt(xV[VV[42]] + VV[7]) << VV[31] : VV[1]) | (xV[VV[42]] + VV[3] < xV[VV[10]] ? xV[VV[1]].charCodeAt(xV[VV[42]] + VV[3]) : VV[1]), xV[VV[43]] = VV[1]; xV[VV[43]] < VV[9]; xV[VV[43]]++) xV[VV[42]] * VV[31] + xV[VV[43]] * VV[44] > xV[VV[1]].length * VV[31] ? xV[VV[3]] += eV[VV[7]] : xV[VV[3]] += xV[VV[6]].charAt(xV[VV[11]] >>> VV[44] * (VV[10] - xV[VV[43]]) & VV[49]);
                return xV[VV[3]]
              }

              function QV(...eV) {
                var xV, JV;
                for (wV(eV[VV[0]] = VV[7], eV[VV[6]] = "", eV[VV[3]] = -VV[7]); ++eV[VV[3]] < eV[VV[1]].length;) wV(xV = eV[VV[1]].charCodeAt(eV[VV[3]]), JV = eV[VV[3]] + VV[7] < eV[VV[1]].length ? eV[VV[1]].charCodeAt(eV[VV[3]] + VV[7]) : VV[1]), VV[69] <= xV && xV <= VV[70] && VV[71] <= JV && JV <= VV[74] && wV(xV = VV[72] + ((xV & VV[48]) << VV[43]) + (JV & VV[48]), eV[VV[3]]++), xV <= 127 ? eV[VV[6]] += String.fromCharCode(xV) : xV <= 2047 ? eV[VV[6]] += String.fromCharCode(VV[42] | xV >>> VV[44] & VV[19], VV[50] | xV & VV[49]) : xV <= VV[60] ? eV[VV[6]] += String.fromCharCode(VV[75] | xV >>> VV[51] & VV[41], VV[50] | xV >>> VV[44] & VV[49], VV[50] | xV & VV[49]) : xV <= 2097151 && (eV[VV[6]] += String.fromCharCode(VV[76] | xV >>> VV[57] & VV[56], VV[50] | xV >>> VV[51] & VV[49], VV[50] | xV >>> VV[44] & VV[49], VV[50] | xV & VV[49]));
                return eV[VV[6]]
              }

              function nV(...eV) {
                for (wV(eV[VV[0]] = VV[7], eV[VV[43]] = Array(eV[VV[1]].length >> VV[3])), eV[VV[3]] = VV[1]; eV[VV[3]] < eV[VV[43]].length; eV[VV[3]]++) eV[VV[43]][eV[VV[3]]] = VV[1];
                for (eV[VV[3]] = VV[1]; eV[VV[3]] < eV[VV[1]].length * VV[31]; eV[VV[3]] += VV[31]) eV[VV[43]][eV[VV[3]] >> VV[11]] |= (eV[VV[1]].charCodeAt(eV[VV[3]] / VV[31]) & VV[52]) << VV[55] - eV[VV[3]] % VV[54];
                return eV[VV[43]]
              }

              function ZV(...eV) {
                for (wV(eV[VV[0]] = VV[7], eV[VV[6]] = ""), eV[VV[3]] = VV[1]; eV[VV[3]] < eV[VV[1]].length * VV[54]; eV[VV[3]] += VV[31]) eV[VV[6]] += String.fromCharCode(eV[VV[1]][eV[VV[3]] >> VV[11]] >>> VV[55] - eV[VV[3]] % VV[54] & VV[52]);
                return eV[VV[6]]
              }

              function vV(...eV) {
                return eV[VV[0]] = VV[3], eV[VV[1]] >>> eV[VV[7]] | eV[VV[1]] << VV[54] - eV[VV[7]]
              }

              function rV(...eV) {
                return eV[VV[0]] = VV[3], eV[VV[1]] >>> eV[VV[7]]
              }

              function kV(...eV) {
                return eV[VV[0]] = VV[10], eV[VV[1]] & eV[VV[7]] ^ ~eV[VV[1]] & eV[VV[3]]
              }

              function bV(...eV) {
                return eV[VV[0]] = VV[10], eV[VV[1]] & eV[VV[7]] ^ eV[VV[1]] & eV[VV[3]] ^ eV[VV[7]] & eV[VV[3]]
              }

              function EV(...eV) {
                return eV[VV[0]] = VV[7], vV(eV[VV[1]], VV[3]) ^ vV(eV[VV[1]], 13) ^ vV(eV[VV[1]], 22)
              }

              function BV(...eV) {
                return eV[VV[0]] = VV[7], vV(eV[VV[1]], VV[44]) ^ vV(eV[VV[1]], 11) ^ vV(eV[VV[1]], 25)
              }

              function jV(...eV) {
                return eV[VV[0]] = VV[7], vV(eV[VV[1]], VV[56]) ^ vV(eV[VV[1]], VV[57]) ^ rV(eV[VV[1]], VV[10])
              }

              function qV(...eV) {
                return eV[VV[0]] = VV[7], vV(eV[VV[1]], 17) ^ vV(eV[VV[1]], VV[58]) ^ rV(eV[VV[1]], VV[43])
              }

              function tV(...xV) {
                var JV, YV, UV, yV, pV, QV, nV, ZV, vV, rV, tV, TV;
                for (wV(xV[VV[0]] = VV[3], xV[VV[6]] = new Array(1779033703, -1150833019, 1013904242, -1521486534, 1359893119, -1694144372, 528734635, 1541459225), xV[VV[46]] = new Array(VV[59])), wV(xV[VV[1]][xV[VV[7]] >> VV[11]] |= VV[50] << VV[55] - xV[VV[7]] % VV[54], xV[VV[1]][(xV[VV[7]] + VV[59] >> VV[33] << VV[9]) + VV[41]] = xV[VV[7]]), vV = VV[1]; vV < xV[VV[1]].length; vV += VV[32]) {
                  for (wV(JV = xV[VV[6]][VV[1]], YV = xV[VV[6]][VV[7]], UV = xV[VV[6]][VV[3]], yV = xV[VV[6]][VV[10]], pV = xV[VV[6]][VV[9]], QV = xV[VV[6]][VV[11]], nV = xV[VV[6]][VV[44]], ZV = xV[VV[6]][VV[56]]), rV = VV[1]; rV < VV[59]; rV++) wV(rV < VV[32] ? xV[VV[46]][rV] = xV[VV[1]][rV + vV] : xV[VV[46]][rV] = FV(FV(FV(qV(xV[VV[46]][rV - VV[3]]), xV[VV[46]][rV - VV[56]]), jV(xV[VV[46]][rV - VV[41]])), xV[VV[46]][rV - VV[32]]), tV = FV(FV(FV(FV(ZV, BV(pV)), kV(pV, QV, nV)), eV[VV[3]][rV]), xV[VV[46]][rV]), TV = FV(EV(JV), bV(JV, YV, UV)), ZV = nV, nV = QV, QV = pV, pV = FV(yV, tV), yV = UV, UV = YV, YV = JV, JV = FV(tV, TV));
                  wV(xV[VV[6]][VV[1]] = FV(JV, xV[VV[6]][VV[1]]), xV[VV[6]][VV[7]] = FV(YV, xV[VV[6]][VV[7]]), xV[VV[6]][VV[3]] = FV(UV, xV[VV[6]][VV[3]]), xV[VV[6]][VV[10]] = FV(yV, xV[VV[6]][VV[10]]), xV[VV[6]][VV[9]] = FV(pV, xV[VV[6]][VV[9]]), xV[VV[6]][VV[11]] = FV(QV, xV[VV[6]][VV[11]]), xV[VV[6]][VV[44]] = FV(nV, xV[VV[6]][VV[44]]), xV[VV[6]][VV[56]] = FV(ZV, xV[VV[6]][VV[56]]))
                }
                return xV[VV[6]]
              }

              function FV(...eV) {
                return wV(eV[VV[0]] = VV[3], eV[VV[3]] = (eV[VV[1]] & VV[60]) + (eV[VV[7]] & VV[60]), eV[VV[61]] = (eV[VV[1]] >> VV[32]) + (eV[VV[7]] >> VV[32]) + (eV[VV[3]] >> VV[32])), eV[VV[61]] << VV[32] | eV[VV[3]] & VV[60]
              }
              return wV(eV[VV[0]] = VV[1], eV[VV[37]] = VV[1], eV[VV[7]] = ""), eV[VV[3]] = new Array(1116352408, 1899447441, -1245643825, -373957723, 961987163, 1508970993, -1841331548, -1424204075, -670586216, 310598401, 607225278, 1426881987, 1925078388, -2132889090, -1680079193, -1046744716, -459576895, -272742522, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, -1740746414, -1473132947, -1341970488, -1084653625, -958395405, -710438585, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, -2117940946, -1838011259, -1564481375, -1474664885, -1035236496, -949202525, -778901479, -694614492, -200395387, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, -2067236844, -1933114872, -1866530822, -1538233109, -1090935817, -965641998), {
                hex: function(...eV) {
                  return eV[VV[0]] = VV[7], yV(function(...eV) {
                    return eV[VV[0]] = VV[7], ZV(tV(nV(eV[VV[1]]), eV[VV[1]].length * VV[31]))
                  }(QV(eV[VV[1]])))
                },
                b64: xV,
                any: JV,
                hex_hmac: function(...eV) {
                  return eV[VV[0]] = VV[3], yV(UV(QV(eV[VV[1]]), QV(eV[VV[7]])))
                },
                b64_hmac: xV,
                any_hmac: JV
              }
            }(), console.log(eV[VV[6]]))
          }
          "gemJbWR" in eV && yV(), await QV(xV, "/persisted/keep-alive", {
            type: "nZ",
            data: YV
          }, VV[10])
        } catch (UV) {
          console.warn(UV)
        }
      };
      const nV = (...xV) => (xV[VV[0]] = VV[3], "g0YFepW" in eV && function(...eV) {
        eV[VV[0]] = VV[1]
      }(), Object.getOwnPropertyDescriptor(xV[VV[1]], xV[VV[7]]));

      function wV() {
        wV = function() {}
      }
      xY = (...xV) => {
        if (xV[VV[0]] = VV[1], "XxSJzQ" in eV && function(...eV) {
            wV(eV[VV[0]] = VV[1], eV[VV[6]] = function(...xV) {
              return wV(xV[VV[0]] = VV[10], xV[VV[62]] = {}), xV[VV[3]].length !== xV[VV[1]].length + xV[VV[7]].length ? VV[16] : eV[VV[63]](xV[VV[1]], xV[VV[7]], xV[VV[3]], VV[1], VV[1], VV[1], xV[VV[62]])
            }, eV[VV[63]] = function(...xV) {
              return wV(xV[VV[0]] = VV[56], xV[VV[65]] = VV[16]), xV[VV[11]] >= xV[VV[3]].length ? VV[64] : xV[VV[44]]["" + xV[VV[10]] + xV[VV[9]] + xV[VV[11]]] !== VV[39] ? xV[VV[44]]["" + xV[VV[10]] + xV[VV[9]] + xV[VV[11]]] : (xV[VV[3]][xV[VV[11]]] === xV[VV[1]][xV[VV[10]]] && xV[VV[3]][xV[VV[11]]] === xV[VV[7]][xV[VV[9]]] ? xV[VV[65]] = eV[VV[63]](xV[VV[1]], xV[VV[7]], xV[VV[3]], xV[VV[10]] + VV[7], xV[VV[9]], xV[VV[11]] + VV[7], xV[VV[44]]) || eV[VV[63]](xV[VV[1]], xV[VV[7]], xV[VV[3]], xV[VV[10]], xV[VV[9]] + VV[7], xV[VV[11]] + VV[7], xV[VV[44]]) : xV[VV[3]][xV[VV[11]]] === xV[VV[1]][xV[VV[10]]] ? xV[VV[65]] = eV[VV[63]](xV[VV[1]], xV[VV[7]], xV[VV[3]], xV[VV[10]] + VV[7], xV[VV[9]], xV[VV[11]] + VV[7], xV[VV[44]]) : xV[VV[3]][xV[VV[11]]] === xV[VV[7]][xV[VV[9]]] && (xV[VV[65]] = eV[VV[63]](xV[VV[1]], xV[VV[7]], xV[VV[3]], xV[VV[10]], xV[VV[9]] + VV[7], xV[VV[11]] + VV[7], xV[VV[44]])), xV[VV[44]]["" + xV[VV[10]] + xV[VV[9]] + xV[VV[11]]] = xV[VV[65]], xV[VV[65]])
            }, console.log(eV[VV[6]]))
          }(), (VV[1], OJ[VV[84]])(), nV(navigator, JV) !== VV[39]) {
          function QV(...eV) {
            wV(eV[VV[0]] = VV[1], eV[VV[46]] = function(...eV) {
              if (wV(eV[VV[0]] = VV[7], eV[VV[6]] = eV[VV[1]].length), eV[VV[6]] < VV[3]) return VV[1];
              if (wV(eV[VV[46]] = Math.max(...eV[VV[1]]), eV[-VV[66]] = Math.min(...eV[VV[1]])), eV[VV[46]] === eV[-VV[66]]) return VV[1];
              for (wV(eV[VV[12]] = Array(eV[VV[6]] - VV[7]).fill(Number.MAX_SAFE_INTEGER), eV[-VV[32]] = Array(eV[VV[6]] - VV[7]).fill(Number.MIN_SAFE_INTEGER), eV[VV[44]] = Math.ceil((eV[VV[46]] - eV[-VV[66]]) / (eV[VV[6]] - VV[7])), eV[VV[22]] = VV[1]), eV[VV[67]] = VV[1]; eV[VV[67]] < eV[VV[6]]; eV[VV[67]]++) eV[VV[1]][eV[VV[67]]] !== eV[-VV[66]] && eV[VV[1]][eV[VV[67]]] !== eV[VV[46]] && wV(eV[VV[22]] = Math.floor((eV[VV[1]][eV[VV[67]]] - eV[-VV[66]]) / eV[VV[44]]), eV[VV[12]][eV[VV[22]]] = Math.min(eV[VV[12]][eV[VV[22]]], eV[VV[1]][eV[VV[67]]]), eV[-VV[32]][eV[VV[22]]] = Math.max(eV[-VV[32]][eV[VV[22]]], eV[VV[1]][eV[VV[67]]]));
              for (wV(eV[VV[33]] = Number.MIN_SAFE_INTEGER, eV[VV[43]] = eV[-VV[66]]), eV[VV[19]] = VV[1]; eV[VV[19]] < eV[VV[6]] - VV[7]; eV[VV[19]]++) eV[VV[12]][eV[VV[19]]] === Number.MAX_SAFE_INTEGER && eV[-VV[32]][eV[VV[19]]] === Number.MIN_SAFE_INTEGER || wV(eV[VV[33]] = Math.max(eV[VV[33]], eV[VV[12]][eV[VV[19]]] - eV[VV[43]]), eV[VV[43]] = eV[-VV[32]][eV[VV[19]]]);
              return eV[VV[33]] = Math.max(eV[VV[33]], eV[VV[46]] - eV[VV[43]]), eV[VV[33]]
            }, console.log(eV[VV[46]]))
          }
          return "Y1j7FTM" in eV && QV(), UV
        }
        return nV(window, YV) === VV[39] ? yV : pV
      }, JY = async YV => {
        try {
          const JV = xY(),
            {
              retryTransientHttpFailures: UV
            } = await Promise[VV[17] + VV[5]]()[VV[18]](((...JV) => (JV[VV[0]] = VV[1], "uW0wa5" in eV && function() {
              ! function(...eV) {
                function xV(...eV) {
                  for (wV(eV[VV[0]] = VV[7], eV[VV[7]] = [], eV[VV[46]] = VV[1], eV[VV[20]] = eV[VV[1]].length, eV[VV[68]] = VV[39], eV[VV[5]] = VV[39]); eV[VV[46]] < eV[VV[20]];) wV(eV[VV[68]] = eV[VV[1]].charCodeAt(eV[VV[46]]++), eV[VV[68]] >= VV[69] && eV[VV[68]] <= VV[70] && eV[VV[46]] < eV[VV[20]] ? (eV[VV[5]] = eV[VV[1]].charCodeAt(eV[VV[46]]++), (64512 & eV[VV[5]]) == VV[71] ? eV[VV[7]].push(((eV[VV[68]] & VV[48]) << VV[43]) + (eV[VV[5]] & VV[48]) + VV[72]) : (eV[VV[7]].push(eV[VV[68]]), eV[VV[46]]--)) : eV[VV[7]].push(eV[VV[68]]));
                  return eV[VV[7]]
                }

                function JV(...xV) {
                  for (wV(xV[VV[0]] = VV[7], xV[VV[6]] = xV[VV[1]].length, xV[VV[73]] = -VV[7], xV[VV[20]] = VV[39], xV[VV[9]] = ""); ++xV[VV[73]] < xV[VV[6]];) xV[VV[20]] = xV[VV[1]][xV[VV[73]]], xV[VV[20]] > VV[60] && wV(xV[VV[20]] -= VV[72], xV[VV[9]] += eV[VV[7]](xV[VV[20]] >>> VV[43] & VV[48] | VV[69]), xV[VV[20]] = VV[71] | xV[VV[20]] & VV[48]), xV[VV[9]] += eV[VV[7]](xV[VV[20]]);
                  return xV[VV[9]]
                }

                function YV(...eV) {
                  if (eV[VV[0]] = VV[7], eV[VV[1]] >= VV[69] && eV[VV[1]] <= VV[74]) throw Error("Lone surrogate U+" + eV[VV[1]].toString(VV[32]).toUpperCase() + " is not a scalar value")
                }

                function UV(...xV) {
                  return xV[VV[0]] = VV[3], eV[VV[7]](xV[VV[1]] >> xV[VV[7]] & VV[49] | VV[50])
                }

                function yV(...xV) {
                  return xV[VV[0]] = VV[7], (4294967168 & xV[VV[1]]) == VV[1] ? eV[VV[7]](xV[VV[1]]) : (xV[VV[7]] = "", (4294965248 & xV[VV[1]]) == VV[1] ? xV[VV[7]] = eV[VV[7]](xV[VV[1]] >> VV[44] & VV[19] | VV[42]) : (4294901760 & xV[VV[1]]) == VV[1] ? wV(YV(xV[VV[1]]), xV[VV[7]] = eV[VV[7]](xV[VV[1]] >> VV[51] & VV[41] | VV[75]), xV[VV[7]] += UV(xV[VV[1]], VV[44])) : (4292870144 & xV[VV[1]]) == VV[1] && wV(xV[VV[7]] = eV[VV[7]](xV[VV[1]] >> VV[57] & VV[56] | VV[76]), xV[VV[7]] += UV(xV[VV[1]], VV[51]), xV[VV[7]] += UV(xV[VV[1]], VV[44])), xV[VV[7]] += eV[VV[7]](xV[VV[1]] & VV[49] | VV[50]), xV[VV[7]])
                }

                function pV(...eV) {
                  for (wV(eV[VV[0]] = VV[7], eV[VV[7]] = xV(eV[VV[1]]), eV[VV[3]] = eV[VV[7]].length, eV[VV[10]] = -VV[7], eV[VV[12]] = VV[39], eV[VV[11]] = ""); ++eV[VV[10]] < eV[VV[3]];) wV(eV[VV[12]] = eV[VV[7]][eV[VV[10]]], eV[VV[11]] += yV(eV[VV[12]]));
                  return eV[VV[11]]
                }

                function QV(...xV) {
                  if (xV[VV[0]] = VV[1], eV[VV[77]] >= eV[VV[20]]) throw Error(VV[79]);
                  if (wV(xV[VV[78]] = eV[VV[9]][eV[VV[77]]] & VV[52], eV[VV[77]]++), (xV[VV[78]] & VV[42]) == VV[50]) return xV[VV[78]] & VV[49];
                  throw Error(VV[81])
                }

                function nV(...xV) {
                  if (wV(xV[VV[0]] = VV[1], xV[VV[7]] = VV[39], xV[-VV[80]] = VV[39], xV[VV[82]] = VV[39], xV[VV[10]] = VV[39], xV[VV[9]] = VV[39]), eV[VV[77]] > eV[VV[20]]) throw Error(VV[79]);
                  if (eV[VV[77]] == eV[VV[20]]) return VV[16];
                  if (wV(xV[VV[7]] = eV[VV[9]][eV[VV[77]]] & VV[52], eV[VV[77]]++), (xV[VV[7]] & VV[50]) == VV[1]) return xV[VV[7]];
                  if ((xV[VV[7]] & VV[75]) == VV[42]) {
                    if (wV(xV[-VV[80]] = QV(), xV[VV[9]] = (xV[VV[7]] & VV[19]) << VV[44] | xV[-VV[80]]), xV[VV[9]] >= VV[50]) return xV[VV[9]];
                    throw Error(VV[81])
                  }
                  if ((xV[VV[7]] & VV[76]) == VV[75]) {
                    if (wV(xV[-VV[80]] = QV(), xV[VV[82]] = QV(), xV[VV[9]] = (xV[VV[7]] & VV[41]) << VV[51] | xV[-VV[80]] << VV[44] | xV[VV[82]]), xV[VV[9]] >= 2048) return YV(xV[VV[9]]), xV[VV[9]];
                    throw Error(VV[81])
                  }
                  if ((248 & xV[VV[7]]) == VV[76] && (wV(xV[-VV[80]] = QV(), xV[VV[82]] = QV(), xV[VV[10]] = QV(), xV[VV[9]] = (xV[VV[7]] & VV[56]) << VV[57] | xV[-VV[80]] << VV[51] | xV[VV[82]] << VV[44] | xV[VV[10]]), xV[VV[9]] >= VV[72] && xV[VV[9]] <= 1114111)) return xV[VV[9]];
                  throw Error("Invalid UTF-8 detected")
                }

                function ZV(...YV) {
                  for (wV(YV[VV[0]] = VV[7], eV[VV[9]] = xV(YV[VV[1]]), eV[VV[20]] = eV[VV[9]].length, eV[VV[77]] = VV[1], YV[VV[7]] = [], YV[VV[83]] = VV[39]);
                    (YV[VV[83]] = nV()) !== VV[16];) YV[VV[7]].push(YV[VV[83]]);
                  return JV(YV[VV[7]])
                }
                wV(eV[VV[0]] = VV[7], eV[VV[7]] = String.fromCharCode), wV(eV[VV[9]] = VV[39], eV[VV[20]] = VV[39], eV[VV[77]] = VV[39]), wV(eV[VV[1]].version = "3.0.0", eV[VV[1]].encode = pV, eV[VV[1]].decode = ZV)
              }("undefined" === typeof exports ? this.utf8 = {} : exports)
            }(), xV(1890))));
          await UV(VV[88] + VV[89] + "post", ((...xV) => (xV[VV[0]] = VV[1], "iVktUV" + VV[84] in eV && function(...eV) {
            function xV() {}
            eV[VV[0]] = VV[1], wV(eV[VV[87]] = function(...eV) {
              for (wV(eV[VV[0]] = VV[3], eV[VV[3]] = VV[1], eV[VV[10]] = VV[1], eV[VV[9]] = new xV(VV[1]), eV[VV[86]] = eV[VV[9]], eV[VV[85]] = eV[VV[1]], eV[-VV[19]] = eV[VV[7]]); eV[VV[85]] !== VV[2] || eV[-VV[19]] !== VV[2];) wV(eV[VV[10]] = (eV[VV[85]] ? eV[VV[85]].val : VV[1]) + (eV[-VV[19]] ? eV[-VV[19]].val : VV[1]) + eV[VV[3]], eV[VV[3]] = Math.floor(eV[VV[10]] / VV[43]), eV[VV[86]].next = new xV(eV[VV[10]] % VV[43]), eV[VV[86]] = eV[VV[86]].next, eV[VV[85]] = eV[VV[85]] ? eV[VV[85]].next : VV[2], eV[-VV[19]] = eV[-VV[19]] ? eV[-VV[19]].next : VV[2]);
              return eV[VV[3]] && (eV[VV[86]].next = new xV(eV[VV[3]])), eV[VV[9]].next
            }, console.log(eV[VV[87]]))
          }(), QV(YV, "/images/" + JV + ".png", {
            block: JV
          }, VV[1]))), 8e3)
        } catch (JV) {
          console.error(VV[88] + VV[89] + "post failed:", JV)
        }
      }
    })();
    var YY = xV(42130),
      UY = xV(1922);
    const yY = 1e3 * YY.b.seatReservationSeconds - 3e3;
    class pY {
      constructor(VV) {
        var eV, xV, JV, YV;
        let UV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.seat = void 0, this.follow = void 0, this.wallNow = void 0, this.monoNow = void 0, this.wallAt = void 0, this.monoAt = void 0, this.sleep = void 0, this.answeredAt = null, this.posts = 0, this.refusals = 0, this.request = "pending", this.use = "unused", this.wallNow = null !== (eV = UV.wallNow) && void 0 !== eV ? eV : Date.now, this.monoNow = null !== (xV = UV.monoNow) && void 0 !== xV ? xV : () => performance.now(), this.wallAt = this.wallNow(), this.monoAt = this.monoNow(), this.sleep = null !== (JV = UV.sleep) && void 0 !== JV ? JV : UY.d, this.follow = new ze.c(UV.signal);
        const yV = null !== (YV = UV.fetch) && void 0 !== YV ? YV : fetch;
        this.seat = (0, zx.j)(VV.endpoint, VV.roomName, VV.joinOptions, {
          sleep: this.sleep,
          signal: this.follow.signal,
          fetch: (VV, eV) => (this.posts++, this.wallAt = this.wallNow(), this.monoAt = this.monoNow(), yV(VV, eV)),
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
      async take(VV) {
        if ("rematched" === this.use) return;
        (0, ze.q)(VV);
        const eV = "pending" !== this.request,
          xV = () => {
            this.abort((0, ze.g)(VV))
          };
        let JV;
        null === VV || void 0 === VV || VV.addEventListener("abort", xV, {
          once: !0
        });
        try {
          JV = await this.seat
        } catch (YV) {
          if ((0, ze.q)(VV), !eV) throw YV;
          return void(this.use = "lost")
        } finally {
          null === VV || void 0 === VV || VV.removeEventListener("abort", xV)
        }
        if ((0, ze.q)(VV), !(this.ageMs() > yY)) return this.use = "taken", JV;
        this.use = "renewed"
      }
      async reserveInstead(VV, eV) {
        try {
          return await VV()
        } catch (xV) {
          const YV = this.holdLeftMs();
          if (!(xV instanceof LV.n) || xV.code !== JV.b.duplicateLobbyNameError.code || 0 === YV) throw xV;
          return await this.sleep(YV + 500, eV), VV()
        }
      }
      release() {
        const {
          request: VV,
          use: eV
        } = this, xV = this.holdsNoSeat();
        return this.abort(), "taken" === eV || xV ? null : {
          unused: "unused" === eV ? "abandoned" : eV,
          answered: "answered" === VV,
          heldMs: Math.round(this.ageMs())
        }
      }
      holdsNoSeat() {
        return this.posts === this.refusals
      }
      holdLeftMs() {
        var VV;
        if ("taken" === this.use || this.holdsNoSeat()) return 0;
        const eV = null !== (VV = this.answeredAt) && void 0 !== VV ? VV : {
            wall: this.wallAt,
            mono: this.monoAt
          },
          xV = Math.max(this.wallNow() - eV.wall, this.monoNow() - eV.mono);
        return Math.max(0, 1e3 * YY.b.seatReservationSeconds - xV)
      }
      ageMs() {
        return Math.max(this.wallNow() - this.wallAt, this.monoNow() - this.monoAt)
      }
      abort(VV) {
        (0, ze.j)(this.follow.controller, VV)
      }
    }
    var QY = xV(42225);
    const nY = new Uint8Array(0);
    class wY {
      constructor(VV) {
        if (this.options = VV, this.slots = [], this.workers = null, this.stopped = !1, this.resting = !1, this.pool = [], this.failedJobs = 0, this.memoryFailureCounted = !1, this.faultsReported = new Set, this.refusals = new Map, this.heapRefusals = 0, null === VV.module) return this.stopped = !0, void VV.fail("no wasm module for the meshing workers");
        VV.loadWorkers().then((VV => {
          if (this.stopped) return;
          const {
            count: eV
          } = VV;
          this.workers = VV;
          for (let xV = 0; xV < eV; xV++) this.slots.push({
            worker: null,
            started: !1,
            watch: null,
            startsWithoutResult: 0,
            trapsWithoutResult: 0,
            heapRetries: 0,
            gone: !1,
            goneFor: null
          });
          for (let xV = 0; xV < eV; xV++) this.start(xV)
        }), (VV => {
          this.stopped || (this.stop(), this.options.fail("the meshing workers' code could not load", VV))
        }))
      }
      take(VV, eV, xV) {
        const JV = this.slots[eV];
        if (VV === Oe.Xd.Retire) return void(JV && !JV.gone && (this.endWorker(eV), JV.started = !1, this.giveUp(eV, "had its tables trap twice", "every meshing worker's tables trapped twice")));
        const YV = null === JV || void 0 === JV ? void 0 : JV.worker;
        if (!YV || !JV.started) return;
        const UV = xV.byteLength;
        let yV = null;
        VV === Oe.Xd.Mesh && JV.heapRetries > 0 && (JV.heapRetries--, yV = this.pooled(UV, !0)), yV ??= this.buffer(UV), new Uint8Array(yV, 0, UV).set(xV), YV.postMessage({
          type: "job",
          kind: VV,
          bytes: yV,
          len: UV
        }, [yV])
      }
      takeFailedMeshJobs() {
        const VV = this.failedJobs;
        return this.failedJobs = 0, VV
      }
      newGame() {
        this.memoryFailureCounted = !1
      }
      stopWorkers() {
        this.resting = !0;
        for (let VV = 0; VV < this.slots.length; VV++) {
          const eV = this.slots[VV];
          null !== eV.worker && (this.endWorker(VV), eV.startsWithoutResult = 0, eV.trapsWithoutResult = 0, this.tellLost(VV))
        }
        this.pool.length = 0
      }
      restartWorkers() {
        if (this.resting) {
          this.resting = !1;
          for (let VV = 0; VV < this.slots.length; VV++) this.start(VV)
        }
      }
      stop() {
        this.stopped = !0;
        for (const eV of this.slots) {
          var VV;
          ZY(eV), null === (VV = eV.worker) || void 0 === VV || VV.terminate(), eV.worker = null, eV.started = !1
        }
      }
      start(VV) {
        const eV = this.slots[VV],
          {
            module: xV
          } = this.options,
          {
            workers: JV
          } = this;
        if (this.stopped || this.resting || eV.gone || null === xV || null === JV) return;
        if (eV.startsWithoutResult >= 3) return void this.giveUp(VV, "failed to start 3 times in a row", "no meshing worker would start");
        let YV;
        eV.startsWithoutResult++;
        try {
          YV = JV.create()
        } catch (UV) {
          return console.warn(`[bloxd-wasm-client] meshing worker ${VV} did not start`, UV), void this.start(VV)
        }
        eV.worker = YV, YV.onmessage = xV => {
          let {
            data: JV
          } = xV;
          eV.worker === YV && this.onReply(VV, JV)
        }, YV.onmessageerror = () => {
          eV.worker === YV && this.lose(VV, "a reply could not be read")
        }, YV.onerror = xV => {
          xV.preventDefault(), eV.worker === YV && this.lose(VV, xV.message || "its script failed")
        };
        try {
          YV.postMessage({
            type: "start",
            module: xV,
            maxKeptLightStates: JV.maxKeptLightStates
          })
        } catch (UV) {
          return console.warn(`[bloxd-wasm-client] meshing worker ${VV} could not be sent the module`, UV), YV.terminate(), eV.worker = null, void this.start(VV)
        }
        eV.watch = new QY.f(QY.c, (eV => {
          this.lose(VV, (0, QY.h)(eV), (() => {
            this.options.onStartTimeout(eV)
          }))
        }), void 0, this.options.visibility)
      }
      onReply(VV, eV) {
        const xV = this.slots[VV];
        switch (eV.type) {
          case "started":
            ZY(xV), xV.started = !0, this.options.write(0, Oe.Vd.WorkerStarted, 0, VV, 0, nY);
            break;
          case "lost":
            this.lose(VV, eV.reason);
            break;
          case "memory":
            var JV, YV;
            null === (JV = (YV = this.options).onMemoryStats) || void 0 === JV || JV.call(YV, VV, eV.stats);
            break;
          case "result": {
            const JV = eV.status === Oe.Jb.Trapped;
            if (0 !== eV.jobId) {
              if (JV) this.countFailedJob(eV.outOfMemory, "light_trap", eV.trap);
              else if (xV.startsWithoutResult = 0, xV.trapsWithoutResult = 0, eV.status === Oe.Jb.Refused) {
                const xV = function(VV) {
                  if (VV.byteLength < 32) return "(no reason)";
                  const eV = new DataView(VV.buffer, VV.byteOffset, VV.byteLength),
                    xV = Math.min(eV.getUint32(28, !0), VV.byteLength - 28 - 4);
                  return (new TextDecoder).decode(VV.subarray(32, 32 + xV)).slice(0, 200)
                }(new Uint8Array(eV.bytes, 0, eV.len));
                this.countFailedJob(Jx.d.test(xV), "light_refused_input", xV), this.logRefusal(VV, xV)
              }
              eV.status === Oe.Jb.HeapRefused && (xV.heapRetries = Math.min(xV.heapRetries + 1, 4), this.logHeapRefusal(VV))
            }
            if (this.options.write(eV.jobId, Oe.Vd.JobResult, eV.status, VV, eV.workerUs, new Uint8Array(eV.bytes, 0, eV.len)), this.recycle(eV.bytes), eV.spare && this.recycle(eV.spare), !JV) break;
            if (xV.startsWithoutResult = 0, 0 === eV.jobId) {
              this.lose(VV, `the tables trapped its wasm: ${eV.trap}`);
              break
            }
            xV.trapsWithoutResult++;
            const YV = xV.trapsWithoutResult > 6;
            xV.gone ||= YV, this.lose(VV, `a job trapped its wasm: ${eV.trap}`), YV && this.giveUp(VV, `trapped ${xV.trapsWithoutResult} jobs in a row`, "every meshing worker kept trapping");
            break
          }
        }
      }
      countFailedJob(VV, eV, xV) {
        if (VV) {
          if (this.memoryFailureCounted) return;
          this.memoryFailureCounted = !0
        } else this.faultsReported.has(eV) || (this.faultsReported.add(eV), this.options.onLightFault(eV, xV));
        this.failedJobs++
      }
      logRefusal(VV, eV) {
        var xV;
        !this.refusals.has(eV) && this.refusals.size >= 16 && (eV = "(other reasons)");
        const JV = (null !== (xV = this.refusals.get(eV)) && void 0 !== xV ? xV : 0) + 1;
        this.refusals.set(eV, JV), (0, gx.B)(JV) && console.warn(`[bloxd-wasm-client] meshing worker ${VV} refused a chunk (${JV} so far for this reason): ${eV}`)
      }
      logHeapRefusal(VV) {
        this.heapRefusals++, (0, gx.B)(this.heapRefusals) && console.warn(`[bloxd-wasm-client] meshing worker ${VV} was refused memory for a chunk's mesh (${this.heapRefusals} so far)`)
      }
      giveUp(VV, eV, xV) {
        const JV = this.slots[VV];
        if (JV.gone = !0, JV.goneFor = {
            why: eV,
            failure: xV
          }, console.warn(`[bloxd-wasm-client] meshing worker ${VV} ${eV}: giving up on it`), this.slots.every((VV => VV.gone))) {
          this.stop();
          const VV = new Set(this.slots.map((VV => {
              var eV;
              return null === (eV = VV.goneFor) || void 0 === eV ? void 0 : eV.failure
            }))),
            eV = this.slots.map(((VV, eV) => {
              var xV, JV;
              return `worker ${eV} ${null!==(xV=null===(JV=VV.goneFor)||void 0===JV?void 0:JV.why)&&void 0!==xV?xV:"went"}`
            }));
          this.options.fail(1 === VV.size ? xV : `no meshing worker is left (${eV.join(", ")})`)
        }
      }
      lose(VV, eV, xV) {
        console.warn(`[bloxd-wasm-client] meshing worker ${VV} was lost: ${eV}`), this.endWorker(VV), this.stopped || (xV ? xV() : this.options.onWorkerLost(eV), this.tellLost(VV), this.start(VV))
      }
      endWorker(VV) {
        var eV, xV, JV;
        const YV = this.slots[VV];
        ZY(YV), null === (eV = YV.worker) || void 0 === eV || eV.terminate(), YV.worker = null, YV.heapRetries = 0, null === (xV = (JV = this.options).onMemoryGone) || void 0 === xV || xV.call(JV, VV)
      }
      tellLost(VV) {
        const eV = this.slots[VV];
        eV.started && (eV.started = !1, this.options.write(0, Oe.Vd.WorkerLost, 0, VV, 0, nY))
      }
      buffer(VV) {
        var eV;
        return null !== (eV = this.pooled(VV)) && void 0 !== eV ? eV : new ArrayBuffer(Math.max(16384, VV))
      }
      pooled(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          xV = -1;
        for (let YV = 0; YV < this.pool.length; YV++) {
          const JV = this.pool[YV].byteLength;
          JV >= VV && (xV < 0 || (eV ? JV > this.pool[xV].byteLength : JV < this.pool[xV].byteLength)) && (xV = YV)
        }
        if (xV < 0) return null;
        const JV = this.pool[xV];
        return this.pool[xV] = this.pool[this.pool.length - 1], this.pool.pop(), JV
      }
      recycle(VV) {
        this.pool.length < 4 * this.slots.length && VV.byteLength > 0 && VV.byteLength <= 1048576 && this.pool.push(VV)
      }
    }

    function ZY(VV) {
      var eV;
      null === (eV = VV.watch) || void 0 === eV || eV.cancel(), VV.watch = null
    }
    var vY = xV(37631),
      rY = xV(42039),
      kY = xV(42234),
      bY = xV(42243),
      EY = (xV(42066), xV(42252)),
      BY = xV(42109);

    function jY(VV) {
      const eV = new Uint8Array(VV.length >> 2);
      for (let xV = 0; xV < eV.length; xV++) eV[xV] = VV[4 * xV + 3];
      return eV
    }
    async function qY(VV) {
      const eV = await (0, EY.j)(VV);
      try {
        const {
          width: VV,
          height: xV,
          pixels: JV
        } = (0, BY.k)(eV);
        return {
          width: VV,
          height: xV,
          alpha: jY(JV)
        }
      } finally {
        eV.close()
      }
    }
    class tY {
      constructor(VV, eV, xV) {
        let JV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : qY;
        this.session = VV, this.sources = eV, this.warn = xV, this.load = JV, this.nextPoll = 0, this.ik = !1, this.warned = new Set
      }
      drain(VV) {
        if (VV < this.nextPoll) return;
        this.nextPoll = VV + 250;
        const eV = this.session.sunShadowWantedTextures();
        if (eV)
          for (let xV = 0; xV + 1 < eV.length; xV += 2) this.hand(eV[xV], eV[xV + 1]);
        for (const xV of this.session.takeSunShadowWarnings()) this.warn(xV)
      }
      dispose() {
        this.ik = !0
      }
      async hand(VV, eV) {
        var xV, JV, YV, UV, yV;
        let pV, QV = null;
        try {
          if (QV = await this.sources.blockImageUrl(VV), null === QV) throw new Error(`block image ${VV} has no URL`);
          pV = await this.load(QV)
        } catch (wV) {
          var nV;
          const eV = null !== (nV = QV) && void 0 !== nV ? nV : `block image ${VV}`;
          this.warned.has(eV) || (this.warned.add(eV), this.warn(`sun shadow plane texture ${eV} didn't load: its blocks cast no shadow`, wV))
        }
        this.ik || this.session.setSunShadowTexture(VV, eV, null !== (xV = null === (JV = pV) || void 0 === JV ? void 0 : JV.width) && void 0 !== xV ? xV : 0, null !== (YV = null === (UV = pV) || void 0 === UV ? void 0 : UV.height) && void 0 !== YV ? YV : 0, null === (yV = pV) || void 0 === yV ? void 0 : yV.alpha)
      }
    }
    var FY = xV(42259),
      TY = xV(42085),
      PY = xV(42266),
      AY = xV(42275),
      NY = xV(42091),
      XY = xV(42096),
      MY = xV(35343),
      zY = xV(35197),
      GY = xV(42290);
    const WY = 8192,
      RY = new Set;
    const gY = new Set([...zY.e, "sceneDownload"]);
    var DY = xV(41994),
      iY = xV(42295),
      CY = xV(42297);
    const aY = new Uint8Array(0);
    let oY = null;

    function cY(VV) {
      return {
        aux: Oe.jc.AdStart | (VV ? Oe.jc.PreventMovement : 0),
        payload: aY
      }
    }
    var hY = xV(3239),
      lY = xV(330);
    const LY = "__bloxdSceneCapture";
    var fY = xV(42303);
    class mY {
      constructor(VV) {
        var eV, xV;
        this.host = VV, this.requested = null, this.landed = null, this.confirm = null, this.channel = void 0, this.oneShotStored = !0, this.startRead = void 0, this.landRequest = () => {}, this.landing = new Promise((VV => {
          this.landRequest = VV
        })), this.follow = VV => {
          let eV = VV;
          return Promise.race([this.startRead, this.landing]).then((async () => {
            const VV = null === this.requested && null !== eV;
            var xV;
            VV && (null === (xV = eV) || void 0 === xV || xV(null));
            const JV = await this.landing;
            var YV;
            null === JV && VV || (null === (YV = eV) || void 0 === YV || YV(JV))
          })), () => {
            eV = null
          }
        }, this.startRead = (xV = VV.store, xV.keys().then((VV => ({
          own: VV.includes(cx.d),
          oneShot: VV.includes(cx.e)
        })), (() => ({
          own: !0,
          oneShot: !0
        })))).then((VV => {
          let {
            own: eV,
            oneShot: xV
          } = VV;
          this.oneShotStored = xV, (eV || xV) && this.request()
        })), this.channel = (null !== (eV = VV.openChannel) && void 0 !== eV ? eV : cx.n)(), null !== this.channel && (this.channel.onmessage = () => {
          this.request()
        })
      }
      request() {
        var VV;
        if (null !== this.requested) return this.requested;
        null === (VV = this.channel) || void 0 === VV || VV.close(), this.channel = null;
        const eV = this.oneShotStored;
        return this.requested = function(VV, eV, xV) {
          return new Promise((eV => {
            eV(VV())
          })).catch((VV => (null !== eV && (0, cx.k)(eV), xV(VV), null)))
        }((() => this.host.load(eV).then((VV => (VV.setGamePackConfirm(this.confirm), this.landed = VV, VV)))), eV ? this.host.store : null, this.host.EZ), this.landRequest(this.requested), this.requested
      }
      loaded() {
        return this.landed
      }
      forJoin() {
        return null !== this.requested ? this.requested : Promise.race([this.startRead, this.landing]).then((() => {
          var VV;
          return null !== (VV = this.requested) && void 0 !== VV ? VV : null
        }))
      }
      setGamePackConfirm(VV) {
        var eV;
        this.confirm = VV, null === (eV = this.landed) || void 0 === eV || eV.setGamePackConfirm(VV)
      }
    }
    var KY = xV(37429);
    const HY = 216 * KY.h,
      uY = 92 * KY.e,
      sY = 64 * KY.h,
      SY = 16 * KY.h;

    function IY() {
      var VV, eV;
      return null !== (VV = null === (eV = performance.memory) || void 0 === eV ? void 0 : eV.zq) && void 0 !== VV ? VV : null
    }
    class dY {
      constructor(VV, eV) {
        this.budgetBytes = VV, this.reads = eV, this.estimate = null, this.shedAt = null
      }
      read(VV) {
        var eV;
        const xV = this.reads.storedChunks(),
          JV = this.reads.gpuBytes(),
          YV = Math.max(null !== (eV = this.reads.jsHeapBytes()) && void 0 !== eV ? eV : 0, sY),
          UV = HY + VV + YV + JV + xV * uY;
        this.estimate = {
          wasmBytes: VV,
          jsHeapBytes: YV,
          gpuBytes: JV,
          storedChunks: xV,
          totalBytes: UV
        }
      }
      last() {
        return this.estimate
      }
      takeShed() {
        const {
          estimate: VV,
          budgetBytes: eV,
          shedAt: xV
        } = this;
        return !(null === VV || null === eV || VV.totalBytes < eV || null !== xV && VV.totalBytes < xV + SY) && (this.shedAt = VV.totalBytes, !0)
      }
      describe() {
        const {
          estimate: VV,
          budgetBytes: eV
        } = this;
        return null === VV ? null : `estimate ${(0,KY.l)(VV.totalBytes)} MiB of budget ${null===eV?"none":(0,KY.l)(eV)}: wasm ${(0,KY.l)(VV.wasmBytes)} js ${(0,KY.l)(VV.jsHeapBytes)} gpu ${(0,KY.l)(VV.gpuBytes)} chunks ${VV.storedChunks}`
      }
      snapshot() {
        const {
          estimate: VV,
          budgetBytes: eV
        } = this;
        return {
          ...null === VV ? {} : {
            footprintMiB: Number((0, KY.l)(VV.totalBytes)),
            gpuMiB: Number((0, KY.l)(VV.gpuBytes)),
            storedChunks: VV.storedChunks
          },
          footprintBudgetMiB: null === eV ? -1 : Number((0, KY.l)(eV))
        }
      }
    }
    var OY = xV(3142),
      VU = xV(4990),
      eU = xV(37517),
      xU = xV(39097);
    const JU = Vx.mb + 1,
      YU = 4096 * JU;
    class UU {
      constructor(VV, eV) {
        this.log = VV, this.take = eV, this.hn = [], this.unshown = new Map, this.latest = new Map
      }
      afterFrame(VV, eV) {
        const xV = this.take();
        xV.length >= Vx.ib && xV[0] > 0 && (0, OY.i)("remesh", `${xV[0]} core records lost to a full log`);
        const JV = this.hn;
        for (let YV = Vx.ib; YV + Vx.mb <= xV.length; YV += Vx.mb) {
          for (let VV = YV; VV < YV + Vx.mb; VV++) JV.push(xV[VV]);
          JV.push(VV)
        }
        if (eV || !(JV.length < YU)) {
          for (let eV = 0; eV < JV.length; eV += JU) this.feed(eV, VV);
          JV.length = 0, eV && this.log.frame(VV)
        }
      }
      feed(VV, eV) {
        var xV;
        const JV = this.hn,
          YV = (0, xU.e)(JV[VV + 1], JV[VV + 2], JV[VV + 3]),
          UV = JV[VV + 4],
          yV = JV[VV + Vx.mb];
        switch (JV[VV]) {
          case Vx.Rb.Edit:
            this.log.edit(YV, yV);
            break;
          case Vx.Rb.Sent:
            this.latest.set(YV, UV), this.log.sent(YV, UV, JV[VV + 5], JV[VV + 6], JV[VV + 7], null !== (xV = this.unshown.get(YV)) && void 0 !== xV ? xV : xU.c, yV);
            break;
          case Vx.Rb.Done: {
            this.log.received(UV, JV[VV + 5] / 1e3, yV);
            const eV = this.unshown.get(YV);
            void 0 === eV ? this.unshown.set(YV, [UV]) : eV.push(UV);
            break
          }
          case Vx.Rb.Failed: {
            const VV = this.latest.get(YV);
            void 0 !== VV && VV !== UV ? this.log.reassign(YV, UV, VV) : this.log.failed(UV), this.ended(YV, UV);
            break
          }
          case Vx.Rb.Shown:
            this.log.applied(YV, UV, eV), this.ended(YV, UV);
            break;
          case Vx.Rb.Replaced:
            this.log.reassign(YV, UV, JV[VV + 5]), this.ended(YV, UV);
            break;
          case Vx.Rb.Emptied:
            this.log.emptied(YV, eV);
            break;
          default:
            console.warn(`[debug:remesh] unknown core record kind ${JV[VV]}`)
        }
      }
      ended(VV, eV) {
        this.latest.get(VV) === eV && this.latest.delete(VV);
        const xV = this.unshown.get(VV);
        if (void 0 === xV) return;
        const JV = xV.indexOf(eV);
        JV >= 0 && xV.splice(JV, 1), 0 === xV.length && this.unshown.delete(VV)
      }
    }
    let yU = null;
    var pU = xV(3658),
      QU = xV(40918);
    const nU = "its script failed",
      wU = "the block and item tables did not load",
      ZU = new Uint8Array(0);
    class vU {
      constructor(VV) {
        this.options = VV, this.worker = null, this.watch = null, this.createWorker = null, this.loading = !1, this.wanted = !1, this.hn = [], this.startsWithoutResult = 0, this.generated = !1, this.coreWaits = !1, this.lastLoss = "", this.seed = null, this.gone = !1, this.pool = [], null !== VV.module ? VV.write(0, Oe.Vd.WorldgenStarted, 0, 0, ZU) : this.giveUp()
      }
      take(VV, eV) {
        if (!(this.gone || null === this.worker && null === this.hn))
          if (VV === Oe.Xd.WorldgenSeed) {
            const VV = 0 === eV.byteLength ? null : this.options.decodeSettings(eV);
            null === VV ? this.release() : function(VV, eV) {
              if ((null === VV || void 0 === VV ? void 0 : VV.byteLength) !== eV.byteLength) return !1;
              for (let xV = 0; xV < VV.byteLength; xV++)
                if (VV[xV] !== eV[xV]) return !1;
              return !0
            }(this.seed, eV) || (this.seed = eV.slice(), this.startsWithoutResult = null === this.worker ? 0 : 1), this.dropHeld(), this.post({
              type: "seed",
              settings: VV
            }, []), null !== VV ? this.want() : this.loading || this.options.onMapWithoutWorldgen()
          } else if (VV === Oe.Xd.Generate) {
          var xV;
          const VV = new DataView(eV.buffer, eV.byteOffset, Oe.Nd),
            JV = null !== (xV = this.pool.pop()) && void 0 !== xV ? xV : new ArrayBuffer(8192);
          this.post({
            type: "generate",
            ticket: VV.getUint32(0, !0),
            x: VV.getInt32(4, !0),
            y: VV.getInt32(8, !0),
            z: VV.getInt32(12, !0),
            bytes: JV
          }, [JV])
        }
      }
      prestart() {
        this.gone || this.want()
      }
      stopWorker() {
        this.gone || (this.release(), this.generated = !1, this.dropHeld(), this.pool.length = 0, this.coreWaits && (this.coreWaits = !1, this.options.write(0, Oe.Vd.WorldgenStarted, 0, 0, ZU)))
      }
      stop() {
        var VV;
        this.gone = !0, this.dropHeld(), this.endWatch(), null === (VV = this.worker) || void 0 === VV || VV.terminate(), this.worker = null
      }
      post(VV, eV) {
        var xV;
        null !== this.hn ? this.hn.push({
          message: VV,
          transfer: eV
        }) : null === (xV = this.worker) || void 0 === xV || xV.postMessage(VV, eV)
      }
      want() {
        this.wanted = !0, null === this.worker && (null === this.createWorker ? this.load() : this.start())
      }
      release() {
        this.wanted = !1, null !== this.worker && (this.endWorker(), this.startsWithoutResult = 0, this.hn ??= [])
      }
      endWorker() {
        var VV, eV, xV;
        this.endWatch(), null === (VV = this.worker) || void 0 === VV || VV.terminate(), this.worker = null, null === (eV = (xV = this.options).onMemoryGone) || void 0 === eV || eV.call(xV)
      }
      load() {
        this.loading || (this.loading = !0, this.options.loadWorker().then((VV => {
          this.createWorker = VV, this.wanted && this.start()
        }), (VV => {
          this.gone || (this.giveUp(), this.options.onLoadFailed(VV))
        })))
      }
      start() {
        const {
          module: VV
        } = this.options, eV = this.createWorker;
        if (this.gone || null === VV || null === eV) return;
        if (this.startsWithoutResult >= 3) return this.giveUp(), void this.options.onGaveUp(this.lastLoss);
        let xV;
        this.startsWithoutResult++;
        try {
          xV = eV()
        } catch (YV) {
          return console.warn("[bloxd-wasm-client] the world-gen worker did not start", YV), this.lastLoss = `it did not start (${String(YV)})`, void this.start()
        }
        this.worker = xV, xV.onmessage = VV => {
          let {
            data: eV
          } = VV;
          this.worker === xV && this.onReply(xV, eV)
        }, xV.onerror = VV => {
          VV.preventDefault(), this.worker === xV && this.lose(VV.message || nU)
        };
        try {
          xV.postMessage({
            type: "start",
            module: VV,
            PZ: JV.f.PZ
          })
        } catch (YV) {
          return console.warn("[bloxd-wasm-client] the world-gen worker could not be sent the module", YV), this.lastLoss = `it could not be sent the module (${String(YV)})`, xV.terminate(), this.worker = null, void this.start()
        }
        this.watch = new QY.f(QY.e, (VV => {
          this.lose((0, QY.h)(VV), (() => {
            this.options.onStartTimeout(VV)
          }))
        }), void 0, this.options.visibility)
      }
      onReply(VV, eV) {
        switch (eV.type) {
          case "started": {
            this.endWatch();
            const eV = this.hn;
            if (null === eV) {
              this.coreWaits = !1, this.options.write(0, Oe.Vd.WorldgenStarted, 0, 0, ZU);
              break
            }
            this.hn = null;
            for (const {
                message: xV,
                transfer: JV
              }
              of eV) VV.postMessage(xV, JV);
            break
          }
          case "lost":
            this.lose(eV.reason);
            break;
          case "memory":
            var xV, JV;
            null === (xV = (JV = this.options).onMemoryStats) || void 0 === xV || xV.call(JV, eV.stats);
            break;
          case "result":
            this.generated = !0, eV.status !== Oe.Jb.Trapped && (this.startsWithoutResult = 0), this.options.write(eV.ticket, Oe.Vd.WorldgenResult, eV.status, eV.workerUs, new Uint8Array(eV.bytes, 0, eV.len)), this.recycle(eV.bytes), eV.spare && this.recycle(eV.spare)
        }
      }
      lose(VV, eV) {
        console.warn(`[bloxd-wasm-client] the world-gen worker was lost: ${VV}`), this.lastLoss = VV, this.endWorker(), this.gone || (eV ? eV() : this.options.onWorkerLost(VV, this.generated), this.dropHeld(), this.hn = null, this.options.write(0, Oe.Vd.WorldgenLost, Oe.Yd.Lost, 0, ZU), this.coreWaits = !0, this.start())
      }
      giveUp() {
        this.gone = !0, this.dropHeld(), this.options.write(0, Oe.Vd.WorldgenLost, Oe.Yd.Gone, 0, ZU)
      }
      endWatch() {
        var VV;
        null === (VV = this.watch) || void 0 === VV || VV.cancel(), this.watch = null
      }
      dropHeld() {
        if (null !== this.hn) {
          for (const {
              message: VV
            }
            of this.hn) "generate" === VV.type && this.recycle(VV.bytes);
          this.hn.length = 0
        }
      }
      recycle(VV) {
        this.pool.length < 16 && VV.byteLength > 0 && VV.byteLength <= 16384 && this.pool.push(VV)
      }
    }
    var rU = xV(38890),
      kU = xV(4128),
      bU = xV(41942),
      EU = xV(42305),
      BU = xV(42079);
    const jU = /[(@\s]([^\s(@]+)$/,
      qU = /:\d/;

    function tU(VV, eV) {
      for (let xV = 0; xV + eV.length <= VV.length; xV++) {
        let JV = 0;
        for (; JV < eV.length && VV[xV + JV] === eV[JV];) JV++;
        if (JV === eV.length) return xV
      }
      return -1
    }

    function FU(VV) {
      return "(" === VV || ")" === VV || "@" === VV || "," === VV || " " === VV || "\t" === VV
    }

    function TU(VV, eV) {
      let xV = eV;
      for (; xV > 0 && !FU(VV[xV - 1]);) xV--;
      let JV = eV;
      for (; JV < VV.length && !FU(VV[JV]);) JV++;
      let YV = "";
      for (let UV = xV; UV < JV; UV++) YV += VV[UV];
      return YV
    }
    const PU = [{
        origin: "chrome-extension://dhdgffkkebhmkfjojejmpbldmpobfkfo",
        tag: "TM"
      }, {
        origin: "chrome-extension://iikmkjmpaadaobahmlepeloendndfphd",
        tag: "TM-Edge"
      }, {
        origin: "chrome-extension://gcalenpjmijncebpfijmoaglllgpjagf",
        tag: "TM-Beta"
      }],
      AU = /^\/[^\s?#]*\?(?:[^\s&#]*&)*?name=([^\s&#]*?)(?::\d+)*(?:[\s&#]|\)(?:[,\s]|$)|$)/,
      NU = ".user.js";

    function XU(VV, eV) {
      let xV = 0;
      for (; xV < PU.length && PU[xV].origin !== eV[0];) xV++;
      if (xV === PU.length) return eV[0];
      let JV = "";
      for (let yV = eV.index + eV[0].length; yV < VV.length; yV++) JV += VV[yV];
      const YV = (0, OJ.n)(OJ.U, AU, [JV]),
        UV = null === YV ? "" : function(VV) {
          let eV = VV.length,
            xV = 0;
          for (; xV < 8 && eV > 8 && VV[eV - 8 + xV] === NU[xV];) xV++;
          8 === xV && (eV -= 8);
          let JV = "",
            YV = !1;
          for (let UV = 0; UV < eV; UV++) {
            let eV = VV[UV];
            "+" === eV ? eV = " " : "%" === eV && (eV = "2" === VV[UV + 1] && "0" === VV[UV + 2] ? " " : "_", UV += 2), -1 !== tU("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 .-", eV) ? (JV += eV, YV = !1) : YV || (JV += "_", YV = !0)
          }
          return JV
        }(YV[1]);
      return "" === UV ? eV[0] : PU[xV].tag + " " + UV
    }

    function MU(VV, eV) {
      var xV;
      const JV = /[^\n]+/g,
        YV = /\b(?!wasm:)[a-z][\w+.-]*:\/\/[\w.:%~+[\]-]*/i,
        UV = /^([^?#)]*?)(?::\d+)*(?:[?#)]|$)/;
      let yV = null,
        pV = null,
        QV = (0, OJ.n)(OJ.U, JV, [VV]);
      for (; null !== QV;) {
        const xV = (0, OJ.n)(OJ.U, YV, [QV[0]]),
          nV = null === eV ? -1 : tU(QV[0], eV);
        if (-1 !== nV) {
          if (null !== xV) return XU(QV[0], xV);
          const VV = TU(QV[0], nV),
            eV = (0, OJ.n)(OJ.U, jU, [QV[0]]),
            JV = null !== (0, OJ.n)(OJ.U, qU, [VV]) ? VV : null === eV ? null : eV[1],
            YV = null === JV ? null : (0, OJ.n)(OJ.U, UV, [JV]);
          if (null !== YV && "" !== YV[1]) return YV[1]
        }
        null !== xV && (null === yV ? yV = xV[0] : null === pV && xV[0] !== yV && (pV = xV[0])), QV = (0, OJ.n)(OJ.U, JV, [VV])
      }
      return null !== (xV = pV) && void 0 !== xV ? xV : null === yV ? "none" : "own"
    }
    const zU = /:(\d+):(\d+)\)?$/;

    function GU(VV, eV) {
      const xV = (0, OJ.n)(OJ.U, zU, [eV]);
      return null === xV ? VV : VV + ":" + xV[1] + ":" + xV[2]
    }

    function WU(VV) {
      const eV = /[^\n]+/g,
        xV = /\b(?!wasm:)((?:blob:)?)(([a-z][\w+.-]*):\/\/[\w.:%~+[\]-]*)((?:[^\s()@?#]*\/)?)([^\s()@?#:]*)/i;
      let JV = null,
        YV = "",
        UV = !1,
        yV = (0, OJ.n)(OJ.U, eV, [VV]);
      for (; null !== yV;) {
        const pV = (0, OJ.n)(OJ.U, xV, [yV[0]]),
          QV = null === pV ? (0, OJ.n)(OJ.U, jU, [yV[0]]) : null,
          nV = null !== QV && null !== (0, OJ.n)(OJ.U, qU, [QV[1]]) && 0 !== tU(QV[1], "wasm:") ? QV[1] : null;
        if (null === JV) null !== pV ? (JV = pV[2], YV = pV[4]) : null !== nV && (JV = "");
        else if (null !== pV) {
          if (UV = !0, "" !== pV[1]) return {
            reader: "inline",
            frame: GU("blob", yV[0])
          };
          if (pV[2] !== JV) {
            const VV = "moz-extension" === pV[3] || "safari-web-extension" === pV[3];
            let eV = "";
            for (let xV = 0; xV < pV[5].length && xV < 20; xV++) eV += pV[5][xV];
            return {
              reader: VV ? pV[3] : pV[2],
              frame: GU("" === eV ? "-" : eV, yV[0])
            }
          }
          if (pV[4] !== YV) return {
            reader: "inline",
            frame: GU("inline", yV[0])
          }
        } else if (null !== nV) {
          const VV = -1 !== tU(yV[0], "userscript") || -1 !== tU(yV[0], ".user.js");
          return {
            reader: VV ? "userscript" : "inline",
            frame: GU(VV ? "userscript" : "eval", yV[0])
          }
        }
        yV = (0, OJ.n)(OJ.U, eV, [VV])
      }
      const pV = UV ? "own" : "unknown";
      return {
        reader: pV,
        frame: pV
      }
    }

    function RU(VV, eV) {
      return (0, rU.c)(function(VV) {
        if ("string" !== typeof VV || 0 === VV.length) return "-";
        let eV = 2166136261;
        const xV = VV.length < 4096 ? VV.length : 4096;
        for (let YV = 0; YV <= xV; YV++) eV ^= YV === xV ? VV.length : (0, OJ.n)(OJ.cb, VV, [YV]), eV = eV + (eV << 1) + (eV << 4) + (eV << 7) + (eV << 8) + (eV << 24) >>> 0;
        let JV = "";
        for (let YV = 28; YV >= 0; YV -= 4) JV += "0123456789abcdef" [eV >>> YV & 15];
        return JV
      }(eV), WU(VV).frame)
    }
    const gU = (VV, eV) => VV.includes(eV),
      DU = VV => {
        try {
          return VV()
        } catch {
          return !1
        }
      },
      iU = -1,
      CU = VV => {
        try {
          return VV()
        } catch {
          return iU
        }
      };

    function aU(VV, eV) {
      return {
        probe: (xV, JV, YV) => {
          try {
            return ((xV, JV, YV) => {
              switch (xV) {
                case Oe.vc.StackCheck:
                  return eV.stackCheck() ? 1 : 0;
                case Oe.vc.ConfirmMesh:
                  return eV.confirmMesh();
                case Oe.vc.IndexPassReplaced:
                  return eV.indexPassReplaced() ? 1 : 0;
                case Oe.vc.ProductSubChanged:
                  return eV.productSubChanged() ? 1 : 0;
                case Oe.vc.RenderStatus:
                  return eV.Qp();
                case Oe.vc.Held:
                  return eV.hn();
                case Oe.vc.PlayerKilledSubs:
                  return eV.playerKilledSubs();
                case Oe.tb: {
                  const xV = eV.getComplete();
                  return null === xV ? 0 : (0, OJ.n)(OJ.y, OJ.jb, [xV, new OJ.d((0, OJ.G)(VV()), JV, YV)]).written
                }
                default:
                  return 0
              }
            })(xV, JV, YV)
          } catch {
            return Oe.pc
          }
        }
      }
    }
    class oU {
      constructor(VV) {
        this.write = VV, this.flagsWritten = 0, this.written = (0, OJ.p)(null)
      }
      iZ(VV) {
        let {
          flags: eV,
          values: xV
        } = VV;
        for (let JV = 0; JV < xV.length; JV++) this.value(xV[JV][0], xV[JV][1]);
        this.setFlags(eV | Oe.i.Ready)
      }
      value(VV, eV) {
        this.written[VV] !== eV && this.write(VV, eV, 0) && (this.written[VV] = eV)
      }
      setFlags(VV) {
        const eV = VV & ~this.flagsWritten;
        0 !== eV && this.write(Oe.k.Flags, eV, eV) && (this.flagsWritten |= eV)
      }
      originStackHit() {
        return this.write(Oe.k.Flags, Oe.i.OriginStackHit, Oe.i.OriginStackHit)
      }
    }
    const cU = {
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
      hU = 1e3;
    let lU;
    const LU = ["length", 0, 178, "a", !1, 5, 6, 3, 4, 2, 1, void 0, null, "b", "s", "c3RhY2", "cw==", 1e5, "d", 109, !0, 173, "string", 222, "stack", "name", "c", 36, 8, 159, 185, "e", 61, 33554432, 67108864, 27, 145, 240, "f", "g", 220, 175, "p", 179, 52, 16, 203, 148, 102, 239, 19, 247, 73, "Q", ".", 196, 190, 45, 256, 65537, 100, 30, "j", "functi", "on", "n", "protot", "ype", "decode", "4", "I=", "eTR5bm", "v", 244, "t", "r", "B", "E", "Fd", "U", "chEven", "dispat", "now", "confir", "mMesh", 7, "produc", "h", "player", "Killed", "number", 65535, "toString", "get", "q", "l", 248, "i", 38, "None", 122, 9, 11, 10, "En", "k", "tOverw", "ritten", "plete"];

    function fU() {}

    function mU() {
      mU = function() {}
    }
    lU = function(VV) {
      let eV = arguments[LU[0]] > LU[10] && arguments[LU[10]] !== LU[11] ? arguments[LU[10]] : () => ("NBvgWm" in fU && function(...VV) {
          var eV;
          mU(VV[LU[0]] = LU[1], eV = function(VV) {
            mU(this.Jv = VV, this.length = LU[1], this.map = {}, this.head = LU[12], this.tail = LU[12])
          }, eV.prototype.get = function(VV) {
            var eV = this.map[VV];
            return eV ? (this.remove(eV), this.insert(eV.key, eV.val), eV.val) : -LU[10]
          }, eV.prototype.put = function(...VV) {
            mU(VV[LU[0]] = LU[9], this.map[VV[LU[1]]] ? (this.remove(this.map[VV[LU[1]]]), this.insert(VV[LU[1]], VV[LU[10]])) : this.length === this.Jv ? (this.remove(this.head), this.insert(VV[LU[1]], VV[LU[10]])) : (this.insert(VV[LU[1]], VV[LU[10]]), this.length++))
          }, eV.prototype.remove = function(...VV) {
            mU(VV[LU[0]] = LU[10], VV[LU[3]] = VV[LU[1]].prev, VV[LU[13]] = VV[LU[1]].next), VV[LU[13]] && (VV[LU[13]].prev = VV[LU[3]]), VV[LU[3]] && (VV[LU[3]].next = VV[LU[13]]), this.head === VV[LU[1]] && (this.head = VV[LU[13]]), this.tail === VV[LU[1]] && (this.tail = VV[LU[3]]), delete this.map[VV[LU[1]].key]
          }, eV.prototype.insert = function(VV, eV) {
            var xV = new List(VV, eV);
            mU(this.tail ? (this.tail.next = xV, xV.prev = this.tail, this.tail = xV) : (this.tail = xV, this.head = xV), this.map[VV] = xV)
          }, console.log(eV))
        }(), LU[12]),
        xV = arguments[LU[0]] > LU[9] && arguments[LU[9]] !== LU[11] ? arguments[LU[9]] : LU[12],
        JV = arguments[LU[0]] > LU[7] && arguments[LU[7]] !== LU[11] ? arguments[LU[7]] : "";
      const YV = window,
        UV = (LU[1], OJ[LU[14]])("RXJyb3" + LU[70]),
        yV = (LU[1], OJ[LU[14]])(LU[15] + "s="),
        pV = (LU[1], OJ[LU[14]])("Y2FwdHVyZVN0YWNrVHJhY2U="),
        nV = (LU[1], OJ[LU[14]])(LU[15] + "tUcmFjZUxpbWl0"),
        wV = (LU[1], OJ[LU[14]])("bmF0aXZl"),
        ZV = [(LU[1], OJ[LU[14]])("bWFpbi5qcw=="), (LU[1], OJ[LU[14]])("aW5kZXguanM="), (LU[1], OJ[LU[14]])("dXNlcnNjcmlwdA=="), (LU[1], OJ[LU[14]])("Y29udGVudC5q" + LU[16]), (LU[1], OJ[LU[14]])("b3B0aW9ucy5q" + LU[16]), (LU[1], OJ[LU[14]])("cG9wdXAuanM="), (LU[1], OJ[LU[14]])("LnVzZXIuanM="), (LU[1], OJ[LU[14]])("Y2hyb21lLWV4dGVuc2lvbg==")],
        vV = (...VV) => {
          VV[LU[0]] = LU[10];
          const eV = YV[UV],
            xV = eV;
          if (xV[nV] < LU[17]) {
            function bV(...VV) {
              VV[LU[0]] = LU[1]
            }
            "rVu6Wr" in fU && bV(), xV[nV] = LU[17]
          }
          const JV = "string" === typeof(vV = (new eV)[yV]) ? vV : `${vV}`,
            QV = {},
            wV = xV[pV];
          var vV;
          typeof wV === LU[63] + LU[64] && (LU[1], OJ[LU[65]])(wV, eV, [QV]);
          const rV = QV[yV],
            kV = VV[LU[1]] ? ZV[LU[0]] : ZV[LU[0]] - LU[10];
          for (let EV = LU[1]; EV < kV; EV++) {
            function BV(...VV) {
              mU(VV[LU[0]] = LU[1], VV[LU[21]] = function(...eV) {
                return mU(eV[LU[0]] = LU[10], eV[LU[3]] = []), (eV[LU[1]] === LU[10] || eV[LU[1]] >= LU[8]) && VV[LU[13]](eV[LU[3]], [], eV[LU[1]], LU[1]), eV[LU[3]]
              }, VV[LU[13]] = function(...eV) {
                for (eV[LU[0]] = LU[8], eV[LU[8]] = eV[LU[7]]; eV[LU[8]] < eV[LU[9]]; eV[LU[8]]++) {
                  if (eV[LU[10]].length !== eV[LU[8]]) return;
                  for (eV[LU[5]] = LU[1]; eV[LU[5]] < eV[LU[9]]; eV[LU[5]]++) VV[LU[9]](eV[LU[10]], [eV[LU[8]], eV[LU[5]]]) && (mU(eV[LU[10]].push([eV[LU[8]], eV[LU[5]]]), VV[LU[13]](eV[LU[1]], eV[LU[10]], eV[LU[9]], eV[LU[8]] + LU[10])), eV[LU[10]].length === eV[LU[9]] && eV[LU[1]].push(VV[LU[7]](eV[LU[10]])), eV[LU[10]].pop())
                }
              }, VV[LU[7]] = function(...VV) {
                for (mU(VV[LU[0]] = LU[10], VV[LU[3]] = [], VV[LU[9]] = VV[LU[1]].length), VV[LU[7]] = LU[1]; VV[LU[7]] < VV[LU[9]]; VV[LU[7]]++)
                  for (VV[LU[3]][VV[LU[7]]] = "", VV[LU[18]] = LU[1]; VV[LU[18]] < VV[LU[9]]; VV[LU[18]]++) VV[LU[3]][VV[LU[7]]] += VV[LU[1]][VV[LU[7]]][LU[10]] === VV[LU[18]] ? LU[53] : LU[54];
                return VV[LU[3]]
              }, VV[LU[9]] = function(...VV) {
                for (mU(VV[LU[0]] = LU[9], VV[LU[9]] = VV[LU[1]].length), VV[-LU[19]] = LU[1]; VV[-LU[19]] < VV[LU[9]]; VV[-LU[19]]++) {
                  if (VV[LU[1]][VV[-LU[19]]][LU[1]] === VV[LU[10]][LU[1]] || VV[LU[1]][VV[-LU[19]]][LU[10]] === VV[LU[10]][LU[10]]) return LU[4];
                  if (Math.abs((VV[LU[1]][VV[-LU[19]]][LU[1]] - VV[LU[10]][LU[1]]) / (VV[LU[1]][VV[-LU[19]]][LU[10]] - VV[LU[10]][LU[10]])) === LU[10]) return LU[4]
                }
                return LU[20]
              }, console.log(VV[LU[21]]))
            }
            if ("qrKV4M" in fU && BV(), gU(JV, ZV[EV])) return {
              [LU[24]]: JV,
              [LU[25]]: ZV[EV]
            };
            if (typeof rV === LU[22] && gU(rV, ZV[EV])) {
              function jV(...VV) {
                mU(VV[LU[0]] = LU[1], VV[-LU[23]] = function(eV, xV) {
                  var JV, YV = [];
                  return mU(JV = eV.length, eV.sort(((VV, eV) => VV - eV)), VV[LU[10]](YV, [], LU[1], JV, eV, xV)), YV
                }, VV[LU[10]] = function(eV, xV, JV, YV, UV, yV) {
                  var pV, QV = LU[12];
                  if (!(yV < LU[1])) {
                    if (yV === LU[1]) return eV.push(xV);
                    for (pV = JV; pV < YV && !(UV[pV] > yV); pV++) pV > JV && UV[pV] === UV[pV - LU[10]] || mU(QV = Array.from(xV), QV.push(UV[pV]), VV[LU[10]](eV, QV, pV + LU[10], YV, UV, yV - UV[pV]))
                  }
                }, console.log(VV[-LU[23]]))
              }
              return "ynoi7g" + LU[26] in fU && jV(), {
                [LU[24]]: rV,
                [LU[25]]: ZV[EV]
              }
            }
          }
          return LU[12]
        },
        rV = (...VV) => (VV[LU[0]] = LU[10], vV(VV[LU[1]]) !== LU[12]);
      let kV = LU[12],
        bV = LU[12],
        EV = LU[12],
        BV = LU[12];
      const jV = VV => {
        "Fr6TC7" in fU && function(...VV) {
          mU(VV[LU[0]] = LU[1], VV[LU[3]] = "(c=ak(<~F$VU'9f)~><&85dBPL-module/from", VV[LU[10]] = "q:function(){var ad=ad=>b(ad-29);if(!T.r[(typeof ab==ad(123)?", VV[LU[26]] = "return U[c[c[d(-199)]-b(205)]]||V[ae(b(166))];case T.o[c[c[c[d(-199)]+d(-174)]-(c[b(119)]-(c[d(-199)]-163))]+ae(b(146))](0)==b(167)?d(-130):-d(-144)", VV[LU[3]].match(VV[LU[10]] + VV[LU[26]]))
        }();
        try {
          function eV(...VV) {
            VV[LU[0]] = LU[1];
            const eV = require("big-integer");
            mU(VV[LU[27]] = class {
              static randomPrime(...VV) {
                VV[LU[0]] = LU[10];
                const xV = eV.one.shiftLeft(VV[LU[1]] - LU[10]),
                  JV = eV.one.shiftLeft(VV[LU[1]]).prev();
                for (; LU[20];) {
                  let VV = eV.randBetween(xV, JV);
                  if (VV.isProbablePrime(LU[58])) return VV
                }
              }
              static generate(...VV) {
                VV[LU[0]] = LU[10];
                const xV = eV(LU[59]);
                let JV, YV;
                VV[LU[3]] = LU[11];
                do {
                  mU(JV = this.randomPrime(VV[LU[1]] / LU[9]), YV = this.randomPrime(VV[LU[1]] / LU[9]), VV[LU[3]] = eV.lcm(JV.prev(), YV.prev()))
                } while (eV.gcd(xV, VV[LU[3]]).notEquals(LU[10]) || JV.minus(YV).abs().shiftRight(VV[LU[1]] / LU[9] - LU[60]).isZero());
                return {
                  e: xV,
                  n: JV.multiply(YV),
                  d: xV.modInv(VV[LU[3]])
                }
              }
              static encrypt(...VV) {
                return VV[LU[0]] = LU[7], eV(VV[LU[1]]).modPow(VV[LU[9]], VV[LU[10]])
              }
              static decrypt(...VV) {
                return VV[LU[0]] = LU[7], eV(VV[LU[1]]).modPow(VV[LU[10]], VV[LU[9]])
              }
              static encode(...VV) {
                VV[LU[0]] = LU[10];
                const xV = VV[LU[1]].split("").map((VV => VV.charCodeAt())).join("");
                return eV(xV)
              }
              static decode(...VV) {
                VV[LU[0]] = LU[10];
                const eV = VV[LU[1]].toString();
                VV[LU[3]] = "";
                for (let xV = LU[1]; xV < eV.length; xV += LU[9]) {
                  let JV = Number(eV.substr(xV, LU[9]));
                  JV <= LU[61] ? (VV[LU[3]] += String.fromCharCode(Number(eV.substr(xV, LU[7]))), xV++) : VV[LU[3]] += String.fromCharCode(JV)
                }
                return VV[LU[3]]
              }
            }, module.exports = VV[LU[27]])
          }
          return "DjImH3" + LU[26] in fU && eV(), VV()
        } catch {
          function xV() {
            console.log((function(VV) {
              var eV, xV, JV, YV, UV = VV.length;
              for (mU(eV = [], xV = LU[1], JV = LU[1], VV.sort(((VV, eV) => VV - eV))), YV = LU[1]; YV < UV; YV++)
                if (!(YV > LU[1] && VV[YV] === VV[YV - LU[10]]))
                  for (mU(xV = YV + LU[10], JV = UV - LU[10]); xV < JV;)
                    if (VV[YV] + VV[xV] + VV[JV] < LU[1]) xV++;
                    else if (VV[YV] + VV[xV] + VV[JV] > LU[1]) JV--;
              else {
                for (eV.push([VV[YV], VV[xV], VV[JV]]); xV < JV && VV[xV] === VV[xV + LU[10]];) xV++;
                for (; xV < JV && VV[JV] === VV[JV - LU[10]];) JV--;
                mU(xV++, JV--)
              }
              return eV
            }))
          }
          return "a_UNtc" in fU && xV(), LU[20]
        }
      };
      let qV = LU[4];
      const tV = () => {
          if (!qV && (LU[1], OJ[LU[72]])()) {
            LU[18], qV = LU[20]
          }
        },
        FV = (...VV) => {
          VV[LU[0]] = LU[10];
          try {
            function eV(...VV) {
              function eV(...VV) {
                return VV[LU[0]] = LU[10], VV[LU[1]][LU[10]] * LU[34] + (VV[LU[1]][LU[1]] < LU[1] ? LU[33] | VV[LU[1]][LU[1]] : VV[LU[1]][LU[1]])
              }

              function xV(...VV) {
                switch (VV[LU[0]] = LU[10], ((VV[LU[1]] & LU[33]) !== LU[1]) * LU[10] + (VV[LU[1]] < LU[1]) * LU[9]) {
                  case LU[1]:
                    return [VV[LU[1]] % LU[33], Math.trunc(VV[LU[1]] / LU[34])];
                  case LU[10]:
                    return [VV[LU[1]] % LU[33] - LU[33], Math.trunc(VV[LU[1]] / LU[34]) + LU[10]];
                  case LU[9]:
                    return [((VV[LU[1]] + LU[33]) % LU[33] + LU[33]) % LU[33], Math.round(VV[LU[1]] / LU[34])];
                  case LU[7]:
                    return [VV[LU[1]] % LU[33], Math.trunc(VV[LU[1]] / LU[34])]
                }
              }
              VV[LU[0]] = LU[1], mU(VV[-LU[35]] = eV([LU[9], LU[8]]), VV[-LU[36]] = eV([LU[10], LU[9]]), VV[LU[18]] = VV[-LU[35]] + VV[-LU[36]], VV[LU[37]] = VV[LU[18]] - VV[-LU[36]], VV[LU[38]] = VV[LU[37]] * LU[9], VV[LU[39]] = VV[LU[38]] / LU[9], console.log(xV(VV[LU[18]])), console.log(xV(VV[LU[37]])), console.log(xV(VV[LU[38]])), console.log(xV(VV[LU[39]])))
            }
            return "zmSjXh" + LU[77] in fU && eV(), VV[LU[1]]()
          } catch {
            function xV(...VV) {
              mU(VV[LU[0]] = LU[1], VV[LU[3]] = function(VV) {
                var eV, xV, JV, YV, UV, yV, pV, QV, nV, wV, ZV = VV.length;
                if (ZV < LU[9]) return LU[1];
                if (mU(eV = Math.max(...VV), xV = Math.min(...VV)), eV === xV) return LU[1];
                for (mU(JV = Array(ZV - LU[10]).fill(Number.MAX_SAFE_INTEGER), YV = Array(ZV - LU[10]).fill(Number.MIN_SAFE_INTEGER), UV = Math.ceil((eV - xV) / (ZV - LU[10])), yV = LU[1]), pV = LU[1]; pV < ZV; pV++) VV[pV] !== xV && VV[pV] !== eV && mU(yV = Math.floor((VV[pV] - xV) / UV), JV[yV] = Math.min(JV[yV], VV[pV]), YV[yV] = Math.max(YV[yV], VV[pV]));
                for (mU(QV = Number.MIN_SAFE_INTEGER, nV = xV), wV = LU[1]; wV < ZV - LU[10]; wV++) JV[wV] === Number.MAX_SAFE_INTEGER && YV[wV] === Number.MIN_SAFE_INTEGER || mU(QV = Math.max(QV, JV[wV] - nV), nV = YV[wV]);
                return QV = Math.max(QV, eV - nV)
              }, console.log(VV[LU[3]]))
            }
            return "tjZpZ1" in fU && xV(), LU[11]
          }
        },
        TV = (...VV) => {
          VV[LU[0]] = LU[10];
          try {
            function eV(...VV) {
              function eV(...VV) {
                return VV[LU[0]] = LU[10], VV[LU[1]][LU[10]] * LU[34] + (VV[LU[1]][LU[1]] < LU[1] ? LU[33] | VV[LU[1]][LU[1]] : VV[LU[1]][LU[1]])
              }

              function xV(...VV) {
                switch (VV[LU[0]] = LU[10], ((VV[LU[1]] & LU[33]) !== LU[1]) * LU[10] + (VV[LU[1]] < LU[1]) * LU[9]) {
                  case LU[1]:
                    return [VV[LU[1]] % LU[33], Math.trunc(VV[LU[1]] / LU[34])];
                  case LU[10]:
                    return [VV[LU[1]] % LU[33] - LU[33], Math.trunc(VV[LU[1]] / LU[34]) + LU[10]];
                  case LU[9]:
                    return [((VV[LU[1]] + LU[33]) % LU[33] + LU[33]) % LU[33], Math.round(VV[LU[1]] / LU[34])];
                  case LU[7]:
                    return [VV[LU[1]] % LU[33], Math.trunc(VV[LU[1]] / LU[34])]
                }
              }
              VV[LU[0]] = LU[1], mU(VV[LU[13]] = eV([LU[9], LU[8]]), VV[-LU[40]] = eV([LU[10], LU[9]]), VV[LU[18]] = VV[LU[13]] + VV[-LU[40]], VV[LU[31]] = VV[LU[18]] - VV[-LU[40]], VV[LU[8]] = VV[LU[31]] * LU[9], VV[-LU[41]] = VV[LU[8]] / LU[9], console.log(xV(VV[LU[18]])), console.log(xV(VV[LU[31]])), console.log(xV(VV[LU[8]])), console.log(xV(VV[-LU[41]])))
            }
            return "RtZLCj" + LU[3] in fU && eV(), VV[LU[1]](), LU[20]
          } catch {
            function xV(...VV) {
              mU(VV[LU[0]] = LU[1], VV[LU[13]] = function(VV) {
                var eV, xV, JV, YV, UV = VV.length;
                for (mU(eV = [], xV = LU[1], JV = LU[1], VV.sort(((VV, eV) => VV - eV))), YV = LU[1]; YV < UV; YV++)
                  if (!(YV > LU[1] && VV[YV] === VV[YV - LU[10]]))
                    for (mU(xV = YV + LU[10], JV = UV - LU[10]); xV < JV;)
                      if (VV[YV] + VV[xV] + VV[JV] < LU[1]) xV++;
                      else if (VV[YV] + VV[xV] + VV[JV] > LU[1]) JV--;
                else {
                  for (eV.push([VV[YV], VV[xV], VV[JV]]); xV < JV && VV[xV] === VV[xV + LU[10]];) xV++;
                  for (; xV < JV && VV[JV] === VV[JV - LU[10]];) JV--;
                  mU(xV++, JV--)
                }
                return eV
              }, console.log(VV[LU[13]]))
            }
            return "L6peS_R" in fU && xV(), LU[4]
          }
        },
        PV = (LU[1], OJ[LU[14]])("a29qbzYzb25i"),
        AV = (LU[1], OJ[LU[42]])(LU[12]);
      let NV = LU[12],
        XV = LU[4],
        MV = LU[4];
      const zV = (LU[1], OJ[LU[42]])(LU[12]);
      let GV = LU[1];
      const WV = (LU[1], OJ[LU[42]])(LU[12]);
      let RV = LU[1];
      const gV = (LU[1], OJ[LU[42]])(LU[12]);
      let DV = LU[4],
        iV = LU[4];
      const CV = (eV, xV) => {
          if (eV === VV) {
            if (NV === LU[12]) {
              function UV(...VV) {
                mU(VV[LU[0]] = LU[1], VV[LU[3]] = function(...VV) {
                  for (mU(VV[LU[0]] = LU[10], VV[LU[43]] = LU[1], VV[LU[9]] = {}, VV[LU[7]] = LU[1], VV[LU[18]] = LU[1], VV[LU[31]] = LU[1], VV[LU[38]] = VV[LU[1]].length), VV[LU[39]] = LU[1]; VV[LU[39]] < VV[LU[38]]; VV[LU[39]]++) {
                    for (mU(VV[LU[9]] = {}, VV[LU[7]] = LU[1], VV[LU[18]] = LU[10]), VV[LU[28]] = VV[LU[39]] + LU[10]; VV[LU[28]] < VV[LU[38]]; VV[LU[28]]++) VV[LU[1]][VV[LU[39]]].x !== VV[LU[1]][VV[LU[28]]].x || VV[LU[1]][VV[LU[39]]].y !== VV[LU[1]][VV[LU[28]]].y ? (VV[LU[1]][VV[LU[39]]].y === VV[LU[1]][VV[LU[28]]].y ? VV[LU[31]] = Number.MAX_SAFE_INTEGER : VV[LU[31]] = (VV[LU[1]][VV[LU[39]]].x - VV[LU[1]][VV[LU[28]]].x) / (VV[LU[1]][VV[LU[39]]].y - VV[LU[1]][VV[LU[28]]].y), VV[LU[9]][VV[LU[31]]] || (VV[LU[9]][VV[LU[31]]] = LU[1]), mU(VV[LU[9]][VV[LU[31]]]++, VV[LU[7]] = Math.max(VV[LU[7]], VV[LU[9]][VV[LU[31]]]))) : VV[LU[18]]++;
                    mU(VV[LU[7]] += VV[LU[18]], VV[LU[43]] = Math.max(VV[LU[43]], VV[LU[7]]))
                  }
                  return VV[LU[43]]
                }, console.log(VV[LU[3]]))
              }
              "E6Vi3H" + LU[69] in fU && UV(), NV = typeof xV === LU[90] ? xV : -LU[10]
            } else {
              function yV(...VV) {
                mU(VV[LU[0]] = LU[1], VV[LU[3]] = function(...VV) {
                  if (mU(VV[LU[0]] = LU[10], VV[LU[10]] = VV[LU[1]].length), VV[LU[10]] < LU[9]) return LU[1];
                  if (mU(VV[-LU[44]] = Math.max(...VV[LU[1]]), VV[LU[26]] = Math.min(...VV[LU[1]])), VV[-LU[44]] === VV[LU[26]]) return LU[1];
                  for (mU(VV[LU[8]] = Array(VV[LU[10]] - LU[10]).fill(Number.MAX_SAFE_INTEGER), VV[LU[31]] = Array(VV[LU[10]] - LU[10]).fill(Number.MIN_SAFE_INTEGER), VV[LU[6]] = Math.ceil((VV[-LU[44]] - VV[LU[26]]) / (VV[LU[10]] - LU[10])), VV[LU[45]] = LU[1]), VV[LU[28]] = LU[1]; VV[LU[28]] < VV[LU[10]]; VV[LU[28]]++) VV[LU[1]][VV[LU[28]]] !== VV[LU[26]] && VV[LU[1]][VV[LU[28]]] !== VV[-LU[44]] && mU(VV[LU[45]] = Math.floor((VV[LU[1]][VV[LU[28]]] - VV[LU[26]]) / VV[LU[6]]), VV[LU[8]][VV[LU[45]]] = Math.min(VV[LU[8]][VV[LU[45]]], VV[LU[1]][VV[LU[28]]]), VV[LU[31]][VV[LU[45]]] = Math.max(VV[LU[31]][VV[LU[45]]], VV[LU[1]][VV[LU[28]]]));
                  for (mU(VV[-LU[47]] = Number.MIN_SAFE_INTEGER, VV[-LU[48]] = VV[LU[26]]), VV[LU[46]] = LU[1]; VV[LU[46]] < VV[LU[10]] - LU[10]; VV[LU[46]]++) VV[LU[8]][VV[LU[46]]] === Number.MAX_SAFE_INTEGER && VV[LU[31]][VV[LU[46]]] === Number.MIN_SAFE_INTEGER || mU(VV[-LU[47]] = Math.max(VV[-LU[47]], VV[LU[8]][VV[LU[46]]] - VV[-LU[48]]), VV[-LU[48]] = VV[LU[31]][VV[LU[46]]]);
                  return VV[-LU[47]] = Math.max(VV[-LU[47]], VV[-LU[44]] - VV[-LU[48]]), VV[-LU[47]]
                }, console.log(VV[LU[3]]))
              }
              "VlRzm5" + LU[79] in fU && yV(), XV = LU[20]
            }
            return
          }
          const JV = AV[eV];
          if (!xV) {
            function pV(...VV) {
              mU(VV[LU[0]] = LU[1], VV[LU[51]] = function(...eV) {
                return eV[LU[0]] = LU[9], VV[LU[26]]({}, eV[LU[1]], eV[LU[10]])
              }, VV[LU[26]] = function(...eV) {
                if (mU(eV[LU[0]] = LU[7], eV[LU[3]] = {}), eV[LU[1]][eV[LU[10]] + eV[LU[9]]] !== LU[11]) return eV[LU[1]][eV[LU[10]] + eV[LU[9]]];
                if (eV[LU[10]] === eV[LU[9]]) return LU[20];
                for (eV[LU[13]] = LU[1]; eV[LU[13]] < eV[LU[10]].length; eV[LU[13]]++) eV[LU[3]][eV[LU[10]][eV[LU[13]]]] === LU[11] && (eV[LU[3]][eV[LU[10]][eV[LU[13]]]] = LU[1]), eV[LU[3]][eV[LU[9]][eV[LU[13]]]] === LU[11] && (eV[LU[3]][eV[LU[9]][eV[LU[13]]]] = LU[1]), mU(eV[LU[3]][eV[LU[10]][eV[LU[13]]]]++, eV[LU[3]][eV[LU[9]][eV[LU[13]]]]--);
                for (eV[LU[49]] in eV[LU[3]])
                  if (eV[LU[3]][eV[LU[49]]] !== LU[1]) return eV[LU[1]][eV[LU[10]] + eV[LU[9]]] = LU[4], LU[4];
                for (eV[LU[50]] = LU[10]; eV[LU[50]] < eV[LU[10]].length; eV[LU[50]]++)
                  if (VV[LU[26]](eV[LU[1]], eV[LU[10]].substr(LU[1], eV[LU[50]]), eV[LU[9]].substr(LU[1], eV[LU[50]])) && VV[LU[26]](eV[LU[1]], eV[LU[10]].substr(eV[LU[50]]), eV[LU[9]].substr(eV[LU[50]])) || VV[LU[26]](eV[LU[1]], eV[LU[10]].substr(LU[1], eV[LU[50]]), eV[LU[9]].substr(eV[LU[9]].length - eV[LU[50]])) && VV[LU[26]](eV[LU[1]], eV[LU[10]].substr(eV[LU[50]]), eV[LU[9]].substr(LU[1], eV[LU[9]].length - eV[LU[50]]))) return eV[LU[1]][eV[LU[10]] + eV[LU[9]]] = LU[20], LU[20];
                return eV[LU[1]][eV[LU[10]] + eV[LU[9]]] = LU[4], LU[4]
              }, console.log(VV[LU[51]]))
            }
            if ("tb8NwF" in fU && pV(), JV) {
              function QV(...VV) {
                var eV;
                mU(VV[LU[0]] = LU[1], eV = function(...VV) {
                  mU(VV[LU[0]] = LU[10], this.Jv = VV[LU[1]], this.length = LU[1], this.map = {}, this.head = LU[12], this.tail = LU[12])
                }, eV.prototype.get = function(...VV) {
                  var eV;
                  return mU(VV[LU[0]] = LU[10], eV = this.map[VV[LU[1]]]), eV ? (this.remove(eV), this.insert(eV.key, eV.val), eV.val) : -LU[10]
                }, eV.prototype.put = function(VV, eV) {
                  this.map[VV] ? (this.remove(this.map[VV]), this.insert(VV, eV)) : this.length === this.Jv ? (this.remove(this.head), this.insert(VV, eV)) : (this.insert(VV, eV), this.length++)
                }, eV.prototype.remove = function(...VV) {
                  mU(VV[LU[0]] = LU[10], VV[LU[3]] = VV[LU[1]].prev, VV[LU[9]] = VV[LU[1]].next), VV[LU[9]] && (VV[LU[9]].prev = VV[LU[3]]), VV[LU[3]] && (VV[LU[3]].next = VV[LU[9]]), this.head === VV[LU[1]] && (this.head = VV[LU[9]]), this.tail === VV[LU[1]] && (this.tail = VV[LU[3]]), delete this.map[VV[LU[1]].key]
                }, eV.prototype.insert = function(...VV) {
                  mU(VV[LU[0]] = LU[9], VV[LU[3]] = new List(VV[LU[1]], VV[LU[10]]), this.tail ? (this.tail.next = VV[LU[3]], VV[LU[3]].prev = this.tail, this.tail = VV[LU[3]]) : (this.tail = VV[LU[3]], this.head = VV[LU[3]]), this.map[VV[LU[1]]] = VV[LU[3]])
                }, console.log(eV))
              }
              "B497Kv" in fU && QV(), MV = LU[20]
            }
            return
          }
          if (eV !== PV) return void(AV[eV] = xV);
          AV[eV] = LU[20];
          const YV = typeof xV === LU[22] ? xV : "" + xV;
          if (gV[YV]) {
            function nV(...VV) {
              mU(VV[LU[0]] = LU[1], VV[LU[37]] = function(...eV) {
                return mU(eV[LU[0]] = LU[10], eV[LU[3]] = []), (eV[LU[1]] === LU[10] || eV[LU[1]] >= LU[8]) && VV[LU[13]](eV[LU[3]], [], eV[LU[1]], LU[1]), eV[LU[3]]
              }, VV[LU[13]] = function(...eV) {
                for (eV[LU[0]] = LU[8], eV[LU[8]] = eV[LU[7]]; eV[LU[8]] < eV[LU[9]]; eV[LU[8]]++) {
                  if (eV[LU[10]].length !== eV[LU[8]]) return;
                  for (eV[LU[13]] = LU[1]; eV[LU[13]] < eV[LU[9]]; eV[LU[13]]++) VV[LU[9]](eV[LU[10]], [eV[LU[8]], eV[LU[13]]]) && (mU(eV[LU[10]].push([eV[LU[8]], eV[LU[13]]]), VV[LU[13]](eV[LU[1]], eV[LU[10]], eV[LU[9]], eV[LU[8]] + LU[10])), eV[LU[10]].length === eV[LU[9]] && eV[LU[1]].push(VV[LU[18]](eV[LU[10]])), eV[LU[10]].pop())
                }
              }, VV[LU[18]] = function(...VV) {
                for (mU(VV[LU[0]] = LU[10], VV[LU[3]] = [], VV[LU[52]] = VV[LU[1]].length), VV[LU[7]] = LU[1]; VV[LU[7]] < VV[LU[52]]; VV[LU[7]]++)
                  for (VV[LU[3]][VV[LU[7]]] = "", VV[LU[8]] = LU[1]; VV[LU[8]] < VV[LU[52]]; VV[LU[8]]++) VV[LU[3]][VV[LU[7]]] += VV[LU[1]][VV[LU[7]]][LU[10]] === VV[LU[8]] ? LU[53] : LU[54];
                return VV[LU[3]]
              }, VV[LU[9]] = function(...VV) {
                for (mU(VV[LU[0]] = LU[9], VV[-LU[56]] = VV[LU[1]].length), VV[-LU[55]] = LU[1]; VV[-LU[55]] < VV[-LU[56]]; VV[-LU[55]]++) {
                  if (VV[LU[1]][VV[-LU[55]]][LU[1]] === VV[LU[10]][LU[1]] || VV[LU[1]][VV[-LU[55]]][LU[10]] === VV[LU[10]][LU[10]]) return LU[4];
                  if (Math.abs((VV[LU[1]][VV[-LU[55]]][LU[1]] - VV[LU[10]][LU[1]]) / (VV[LU[1]][VV[-LU[55]]][LU[10]] - VV[LU[10]][LU[10]])) === LU[10]) return LU[4]
                }
                return LU[20]
              }, console.log(VV[LU[37]]))
            }
            "tEuRq_" in fU && nV()
          } else {
            if ((LU[1], rU[LU[95]])(YV)) {
              function wV() {
                var VV;
                mU(VV = function(...eV) {
                  if (mU(eV[LU[0]] = LU[6], eV[LU[3]] = LU[12]), !(eV[LU[5]] < LU[1])) {
                    if (eV[LU[5]] === LU[1]) return eV[LU[1]].push(eV[LU[10]]);
                    for (eV[-LU[57]] = eV[LU[9]]; eV[-LU[57]] < eV[LU[7]] && !(eV[LU[8]][eV[-LU[57]]] > eV[LU[5]]); eV[-LU[57]]++) eV[-LU[57]] > eV[LU[9]] && eV[LU[8]][eV[-LU[57]]] === eV[LU[8]][eV[-LU[57]] - LU[10]] || mU(eV[LU[3]] = Array.from(eV[LU[10]]), eV[LU[3]].push(eV[LU[8]][eV[-LU[57]]]), VV(eV[LU[1]], eV[LU[3]], eV[-LU[57]] + LU[10], eV[LU[7]], eV[LU[8]], eV[LU[5]] - eV[LU[8]][eV[-LU[57]]]))
                  }
                }, console.log((function(...eV) {
                  return mU(eV[LU[0]] = LU[9], eV[LU[9]] = [], eV[LU[7]] = eV[LU[1]].length, eV[LU[1]].sort(((VV, eV) => VV - eV)), VV(eV[LU[9]], [], LU[1], eV[LU[7]], eV[LU[1]], eV[LU[10]])), eV[LU[9]]
                })))
              }
              return "LwZESN" in fU && wV(), void(iV = LU[20])
            }
            if ((LU[1], rU[LU[42]])(YV)) {
              function ZV() {
                const VV = require("big-integer");
                module.exports = class {
                  static randomPrime(...eV) {
                    eV[LU[0]] = LU[10];
                    const xV = VV.one.shiftLeft(eV[LU[1]] - LU[10]),
                      JV = VV.one.shiftLeft(eV[LU[1]]).prev();
                    for (; LU[20];) {
                      let eV = VV.randBetween(xV, JV);
                      if (eV.isProbablePrime(LU[58])) return eV
                    }
                  }
                  static generate(...eV) {
                    eV[LU[0]] = LU[10];
                    const xV = VV(LU[59]);
                    let JV, YV;
                    eV[LU[10]] = LU[11];
                    do {
                      mU(JV = this.randomPrime(eV[LU[1]] / LU[9]), YV = this.randomPrime(eV[LU[1]] / LU[9]), eV[LU[10]] = VV.lcm(JV.prev(), YV.prev()))
                    } while (VV.gcd(xV, eV[LU[10]]).notEquals(LU[10]) || JV.minus(YV).abs().shiftRight(eV[LU[1]] / LU[9] - LU[60]).isZero());
                    return {
                      e: xV,
                      n: JV.multiply(YV),
                      d: xV.modInv(eV[LU[10]])
                    }
                  }
                  static encrypt(...eV) {
                    return eV[LU[0]] = LU[7], VV(eV[LU[1]]).modPow(eV[LU[9]], eV[LU[10]])
                  }
                  static decrypt(...eV) {
                    return eV[LU[0]] = LU[7], VV(eV[LU[1]]).modPow(eV[LU[10]], eV[LU[9]])
                  }
                  static encode(...eV) {
                    eV[LU[0]] = LU[10];
                    const xV = eV[LU[1]].split("").map((VV => VV.charCodeAt())).join("");
                    return VV(xV)
                  }
                  static decode(...VV) {
                    VV[LU[0]] = LU[10];
                    const eV = VV[LU[1]].toString();
                    VV[LU[3]] = "";
                    for (let xV = LU[1]; xV < eV.length; xV += LU[9]) {
                      let JV = Number(eV.substr(xV, LU[9]));
                      JV <= LU[61] ? (VV[LU[3]] += String.fromCharCode(Number(eV.substr(xV, LU[7]))), xV++) : VV[LU[3]] += String.fromCharCode(JV)
                    }
                    return VV[LU[3]]
                  }
                }
              }
              "NVmVbG" in fU && ZV(), GV < 8 ? mU(gV[YV] = LU[20], zV[GV++] = YV, DV ||= (LU[1], rU[LU[62]])(YV)) : !DV && (LU[1], rU[LU[62]])(YV) && mU(gV[YV] = LU[20], zV[8 - LU[10]] = YV, DV = LU[20])
            } else RV < 4 && mU(gV[YV] = LU[20], WV[RV++] = YV)
          }
        },
        aV = (LU[1], kU[LU[31]])(VV),
        oV = aV ? aV.replaced : (() => {
          try {
            return YV[VV]
          } catch {
            return LU[11]
          }
        })();
      if (TV((() => {
          YV[VV] = CV
        })), typeof oV === LU[63] + LU[64]) {
        const VV = oV;
        TV((() => {
          VV(CV)
        }))
      }
      if (aV) {
        const eV = aV.reports;
        TV((() => {
          for (const xV in eV)(LU[1], OJ[LU[65]])(OJ[LU[76]], eV, [xV]) && xV !== VV && CV(xV, eV[xV])
        }))
      }
      const cV = aV ? LU[9] : LU[10];
      let hV = LU[4];
      const lV = (...eV) => (eV[LU[0]] = LU[1], XV ? LU[20] : (mU(eV[LU[13]] = LU[4], hV = !TV((() => {
          eV[LU[13]] = YV[VV] !== CV
        }))), eV[LU[13]])),
        LV = jV(((...eV) => {
          eV[LU[0]] = LU[1];
          const xV = (LU[1], OJ.L)(YV, VV);
          return (xV === LU[12] || xV === void LU[1] ? void LU[1] : xV.configurable) !== LU[4] || typeof xV[LU[93]] !== LU[63] + LU[64] || NV !== cV
        })),
        fV = {},
        mV = () => {
          try {
            return navigator[LU[86] + "tSub"]
          } catch {
            return fV
          }
        },
        KV = mV(),
        HV = xV,
        uV = HV === LU[12] ? ((...VV) => {
          VV[LU[0]] = LU[1];
          mU(VV[LU[3]] = LU[4], VV[LU[13]] = 60 - LU[10]);
          const eV = TextDecoder[LU[66] + LU[67]][LU[68]],
            xV = function() {
              VV[LU[13]]++, 60 === VV[LU[13]] && (DU((() => rV(LU[4]))) && (VV[LU[3]] = LU[20]), VV[LU[13]] = LU[1]);
              for (var xV = arguments[LU[0]], JV = new Array(xV), YV = LU[1]; YV < xV; YV++) JV[YV] = arguments[YV];
              return (LU[1], OJ[LU[65]])(eV, this, JV)
            };
          return TV((() => {
            TextDecoder[LU[66] + LU[67]][LU[68]] = xV
          })), () => VV[LU[3]] ? LU[9] : CU((() => TextDecoder[LU[66] + LU[67]][LU[68]] !== xV ? LU[6] : LU[1]))
        })() : () => CU((() => HV[LU[83] + LU[84]]())),
        sV = (LU[1], We[LU[39]])(),
        SV = (LU[1], OJ[LU[42]])(LU[12]),
        IV = (LU[1], OJ[LU[42]])(LU[12]);
      let dV = LU[1],
        OV = LU[1],
        Ve = LU[1];
      const ee = (LU[1], OJ[LU[42]])(LU[12]),
        xe = (LU[1], OJ[LU[42]])(LU[12]);
      let Je = LU[12],
        Ye = (LU[1], OJ[LU[42]])(LU[12]);
      const Ue = (...VV) => {
          mU(VV[LU[0]] = LU[9], SV[dV] = VV[LU[1]], IV[dV] = VV[LU[10]], dV++)
        },
        ye = (...VV) => (mU(VV[LU[0]] = LU[10], VV[LU[10]] = LU[11]), (VV[LU[10]] = (IV[VV[LU[1]]] ? xe : ee)[SV[VV[LU[1]]]]) !== LU[12] && VV[LU[10]] !== void LU[1] ? VV[LU[10]] : -LU[10]),
        pe = (LU[1], OJ[LU[14]])("d2lvNjQz"),
        Qe = (LU[1], OJ[LU[14]])("amtsa2plZndu"),
        ne = [
          [(LU[1], OJ[LU[14]])("aW9qZndlODNq"), "2"],
          [(LU[1], OJ[LU[14]])("a3Bq"), LU[69]],
          [(LU[1], OJ[LU[14]])("dXJocmZm"), "5"]
        ],
        we = [
          [(LU[1], OJ[LU[14]])(LU[71] + LU[70]), LU[42]],
          [(LU[1], OJ[LU[14]])(LU[71] + "w="), "o"]
        ],
        Ze = (LU[1], OJ[LU[14]])("eTR5bnM="),
        ve = (LU[1], OJ[LU[14]])("aHRleWpldA=="),
        re = (LU[1], OJ[LU[14]])("c2RmbGpneGxmY2pr"),
        ke = [
          [(LU[1], OJ[LU[14]])("a3NhZmR1"), LU[75]],
          [(LU[1], OJ[LU[14]])("ZGZnYWFzZGFz"), LU[14]],
          [re, LU[74]],
          [(LU[1], OJ[LU[14]])("bGFzZWRraGFz"), "u"],
          [(LU[1], OJ[LU[14]])("cW16ZjhrM24="), LU[3]]
        ],
        be = [
          [Ze, LU[72]],
          [ve, LU[94]],
          [(LU[1], OJ[LU[14]])("bmI3ZnEy"), LU[13]]
        ],
        Ee = (LU[1], OJ[LU[14]])("bGtxM20="),
        Be = (LU[1], OJ[LU[14]])("bWtxN3" + LU[70]),
        qe = ["mk:tw", "mk:jf"],
        te = ((...VV) => {
          VV[LU[0]] = LU[1];
          try {
            return VV[LU[73]] = LU[11], (VV[LU[73]] = YV[(LU[1], OJ[LU[14]])("V2ViU29ja2V0")]) === LU[12] || VV[LU[73]] === void LU[1] ? void LU[1] : VV[LU[73]][LU[66] + LU[67]]
          } catch {
            return LU[11]
          }
        })(),
        Fe = ["send", "close", "addEventListener", "removeEventListener", LU[81] + LU[80] + LU[74]],
        Te = ["onmessage", "onopen", "onclos" + LU[31], "onerro" + LU[75]];
      let Pe = LU[4];
      const Ae = () => {
          const VV = eV();
          VV === LU[12] || Pe || (Pe = jV((() => {
            if (te !== LU[11] && (LU[1], OJ.M)(VV) !== te) return LU[20];
            for (let eV = LU[1]; eV < Fe[LU[0]]; eV++)
              if ((LU[1], OJ[LU[65]])(OJ[LU[76]], VV, [Fe[eV]])) return LU[20];
            for (let eV = LU[1]; eV < Te[LU[0]]; eV++)
              if (VV[Te[eV]] !== LU[12] && VV[Te[eV]] !== LU[11]) return LU[20];
            return LU[4]
          })))
        },
        Ne = (LU[1], OJ[LU[14]])("RXZlbnQ=");
      let Xe = Oe[LU[78]][LU[99]],
        Me = LU[1];
      const ze = () => Me++ === LU[5] ? (Me = LU[1], rV(LU[4]) ? Oe[LU[97]].CheckFuncHit : LU[1]) : LU[1],
        Ge = (LU[1], OJ[LU[42]])(LU[12]),
        Re = JV[LU[0]];
      for (let QV = LU[1]; QV < Re; QV++) {
        const VV = (LU[1], OJ[LU[65]])(OJ.cb, JV, [QV]);
        Ge[QV] = VV >= 99 && VV <= LU[100] ? VV : LU[1]
      }
      const ge = (VV, eV) => {
          return typeof VV === LU[63] + LU[64] && (LU[1], OJ[LU[65]])(OJ[LU[79]], eV, [(xV = VV, (0, OJ.n)(OJ.z, xV, []))]) !== LU[12];
          var xV
        },
        De = new RegExp("^function dispatchEvent\\(\\) \\{\\s*\\[native code\\]\\s*\\}$", ""),
        ie = new RegExp("^function now\\(\\) \\{\\s*\\[native code\\]\\s*\\}$", ""),
        Ce = [
          [cU["Dispat" + LU[80] + LU[74]], () => !ge(EventTarget[LU[66] + LU[67]][LU[81] + LU[80] + LU[74]], De)],
          [cU.PerformanceNow, () => !ge(performance[LU[82]], ie)],
          [cU.DateNow, () => !ge(Date[LU[82]], ie)]
        ],
        ae = (LU[1], OJ[LU[42]])(LU[12]);
      let oe = LU[1];
      const ce = {
        stackCheck: (...VV) => {
          mU(VV[LU[0]] = LU[1], VV[LU[3]] = LU[12]);
          const eV = DU((() => (VV[LU[3]] = vV(LU[20]), VV[LU[3]] !== LU[12])));
          var xV, JV;
          return VV[LU[3]] !== LU[12] && kV === LU[12] && (xV = VV[LU[3]][LU[24]], JV = VV[LU[3]][LU[25]], kV = (0, rU.w)(MU(xV, JV))), eV
        },
        [LU[83] + LU[84]]: (...VV) => {
          VV[LU[0]] = LU[1];
          const eV = uV();
          if (eV === LU[9]) return LU[9];
          if (AV[pe]) return LU[7];
          const xV = CU((() => YV[Qe] ? LU[8] : LU[1]));
          return xV !== LU[1] ? xV === LU[8] ? LU[8] : LU[1] : eV === iU ? LU[1] : eV === LU[6] ? LU[6] : (tV(), JV = Function[LU[66] + LU[67]], UV = LU[92], yV = (...VV) => (VV[LU[0]] = LU[10], VV[LU[1]].writable !== LU[20]), DU((() => {
            const VV = Object.getOwnPropertyDescriptor(JV, UV);
            return void 0 !== VV && yV(VV)
          })) ? LU[85] : LU[1]);
          var JV, UV, yV
        },
        indexPassReplaced: lV,
        [LU[86] + "tSubChanged"]: (...VV) => {
          if (VV[LU[0]] = LU[1], KV === fV || hV) return LU[4];
          const eV = mV();
          return eV !== fV && eV !== KV
        },
        hn: () => {
          let VV = Re;
          for (let eV = LU[1]; eV < Ce[LU[0]] + oe; eV++) {
            const xV = eV < Ce[LU[0]] ? Ce[eV] : ae[eV - Ce[LU[0]]];
            xV[LU[1]] < VV && jV(xV[LU[10]]) && (VV = xV[LU[1]])
          }
          return VV < Re ? Ge[VV] : LU[1]
        },
        Qp: () => sV ? We[LU[87]] : LU[28],
        [LU[88] + LU[89] + "Subs"]: () => {
          const VV = QV[LU[87]].zB[LU[88] + LU[89]];
          return typeof VV === LU[90] && VV > LU[1] ? VV > LU[91] ? LU[91] : VV : LU[1]
        },
        ["getCom" + LU[108]]: (...VV) => {
          mU(VV[LU[0]] = LU[1], VV[-LU[98]] = LU[11], dV = LU[1]);
          for (let xV = LU[1]; xV < GV; xV++) Ue(zV[xV], LU[20]);
          for (let xV = LU[1]; xV < ne[LU[0]]; xV++) AV[ne[xV][LU[1]]] && Ue(ne[xV][LU[10]], LU[20]);
          const eV = CU((() => gU(atob[LU[92]](), wV) ? LU[1] : LU[10]));
          eV === LU[10] && Ue(LU[39], LU[20]), tV();
          const JV = eV === iU ? iU : CU((() => {
            const VV = Object.getOwnPropertyDescriptor(window, "atob");
            return VV === LU[11] ? iU : VV[LU[93]] !== LU[11] ? LU[10] : LU[1]
          }));
          JV === LU[10] && Ue(LU[38], LU[20]);
          const YV = JV === iU;
          for (let xV = LU[1]; xV < we[LU[0]] && !YV; xV++) AV[we[xV][LU[1]]] && Ue(we[xV][LU[10]], LU[20]);
          const UV = dV > GV;
          VV[LU[38]] = LU[12], GV === LU[1] && (RV > LU[1] ? VV[LU[38]] = WV[LU[1]] : iV ? VV[LU[38]] = "fp" : UV || (VV[LU[38]] = AV[Ze] ? LU[72] : AV[ve] ? LU[94] : LU[12]));
          for (let xV = LU[1]; xV < ke[LU[0]] && !YV; xV++) AV[ke[xV][LU[1]]] && Ue(ke[xV][LU[10]], LU[20]);
          const yV = dV,
            pV = (LU[1], BU[LU[31]])(),
            QV = pV !== LU[12] && (LU[1], je[LU[95]])(pV);
          QV && !YV && Ue(pV, LU[4]), LV && Ue("ix", LU[4]), MV && Ue("il", LU[4]);
          for (let xV = LU[1]; xV < RV; xV++) Ue(WV[xV], LU[20]);
          for (let xV = LU[1]; xV < be[LU[0]]; xV++) AV[be[xV][LU[1]]] && Ue(be[xV][LU[10]], LU[20]);
          AV[Ee] && Ue("mk:lk", LU[20]);
          const nV = ((...VV) => {
            VV[LU[0]] = LU[10];
            for (let eV = LU[1]; eV < qe[LU[0]]; eV++)
              if (VV[LU[1]] === qe[eV]) return qe[eV];
            return LU[12]
          })(AV[Be]);
          if (nV !== LU[12] && Ue(nV, LU[20]), xV !== LU[12] && FV(xV.emitReplaced) === LU[20] && Ue("mk:em", LU[20]), Pe && Ue("3s", LU[4]), OJ.V && Ue("3b", LU[4]), tV(), qV && Ue("3d", LU[4]), YV && Ue("3g", LU[4]), pV === LU[12] || QV || Ue(pV, LU[4]), kV !== LU[12] && Ue(kV, LU[4]), BV === LU[12] && xV !== LU[12]) {
            const VV = FV(xV[LU[83] + "mMeshHitStac" + LU[105]]);
            typeof VV === LU[22] && (BV = function(VV, eV, xV) {
              let JV = 0;
              for (; JV < xV && -1 === tU(VV, eV[JV]);) JV++;
              return (0, rU.f)(MU(VV, JV < xV ? eV[JV] : null))
            }(VV, ZV, ZV[LU[0]] - LU[10]))
          }
          var vV;
          if (BV !== LU[12] && Ue(BV, LU[4]), bV === LU[12] && We[LU[38]] !== LU[12] && mU((vV = We[LU[38]], bV = (0, rU.d)(WU(vV).reader)), EV = RU(We[LU[38]], FV((() => We[LU[13]] === LU[12] ? LU[12] : (LU[1], OJ.fb)(We[LU[13]]))))), bV !== LU[12] && Ue(bV, LU[4]), EV !== LU[12] && Ue(EV, LU[4]), dV === LU[1]) return LU[12];
          if (VV[LU[38]] === LU[12] && IV[LU[1]] && !(LU[1], rU[LU[62]])(SV[LU[1]]))
            for (let xV = LU[10]; xV < yV; xV++)
              if (IV[xV] && (LU[1], rU[LU[62]])(SV[xV])) {
                const VV = SV[xV];
                for (let eV = xV; eV > LU[1]; eV--) mU(SV[eV] = SV[eV - LU[10]], IV[eV] = IV[eV - LU[10]]);
                mU(SV[LU[1]] = VV, IV[LU[1]] = LU[20]);
                break
              } if (mU(VV[LU[9]] = LU[1], VV[LU[96]] = VV[LU[38]] === LU[12] ? LU[1] : yV), VV[LU[96]] > LU[1] && pV !== LU[12] && QV && !YV) {
            for (let eV = VV[LU[96]]; eV > LU[1]; eV--) mU(SV[eV] = SV[eV - LU[10]], IV[eV] = IV[eV - LU[10]]);
            mU(SV[LU[1]] = pV, IV[LU[1]] = LU[4], VV[LU[9]] = LU[10], VV[LU[96]]++)
          }
          if (VV[LU[97]] = LU[1], OV++ % LU[9] === LU[10])
            for (let xV = LU[10]; xV < dV; xV++) ye(xV) < ye(VV[LU[97]]) && (VV[LU[97]] = xV);
          const rV = SV[VV[LU[97]]];
          (IV[VV[LU[97]]] ? xe : ee)[rV] = Ve++;
          const jV = VV[LU[97]] >= VV[LU[9]] && VV[LU[97]] < VV[LU[96]];
          if (!IV[VV[LU[97]]] || rV === VV[LU[38]] || VV[LU[97]] === LU[1] && !jV) return rV === LU[74] ? (LU[1], rU.A)(AV[re], rU[LU[13]]) : rV;
          const TV = (VV[-LU[98]] = VV[LU[38]]) !== LU[12] && VV[-LU[98]] !== void LU[1] ? VV[-LU[98]] : SV[LU[1]];
          return TV !== Je && mU(Je = TV, Ye = (LU[1], OJ[LU[42]])(LU[12])), Ye[rV] ??= (LU[1], rU[LU[14]])(rV, TV)
        }
      };
      let he = Oe[LU[78]][LU[99]];
      const le = () => Xe !== Oe[LU[78]][LU[99]] ? Xe : he;
      let Le = LU[1],
        fe = LU[9],
        me = LU[1],
        Ke = LU[1];
      return {
        checks: ce,
        checkEvent: (...VV) => {
          VV[LU[0]] = LU[10];
          try {
            const eV = YV[Ne];
            if (typeof eV === LU[63] + LU[64] && !(VV[LU[1]] instanceof eV) && !(LU[1], OJ[LU[77]])(VV[LU[1]])) return Xe = Oe[LU[78]].NotEvent, LU[1];
            if (VV[LU[1]].isTrusted === LU[4]) return LU[1];
            let xV = LU[1];
            for (const JV in VV[LU[1]]) xV++;
            return xV < LU[103] ? (Xe = Oe[LU[78]]["FewPropertie" + LU[14]], LU[1]) : ze()
          } catch {}
          return LU[1]
        },
        checkPadCall: () => {
          try {
            return ze()
          } catch {
            return LU[1]
          }
        },
        usedProp: le,
        watchHeld: (...VV) => {
          mU(VV[LU[0]] = LU[9], VV[LU[9]] = LU[11]);
          const eV = TV((() => {
            VV[LU[9]] = VV[LU[10]]()
          }));
          ae[oe++] = [VV[LU[1]], () => !eV || VV[LU[10]]() !== VV[LU[9]]]
        },
        iZ: (...VV) => {
          VV[LU[0]] = LU[1];
          const eV = lV();
          return ((...VV) => {
            if (mU(VV[LU[0]] = LU[10], VV[LU[101]] = LU[11], VV[-LU[100]] = LU[11]), xV !== LU[12]) {
              const eV = FV(xV.Cw),
                JV = "v3" === eV ? LU[7] : "v5" === eV ? LU[5] : "v6" === eV ? LU[6] : LU[9];
              JV !== LU[9] && (fe = JV);
              const YV = FV(xV["inbuil" + LU[106] + LU[107]]);
              typeof YV === LU[90] && YV >= LU[1] && YV <= LU[102] && (YV | LU[1]) === YV && (me = YV), mU(VV[LU[101]] = FV(xV.reflectApplyHit), VV[-LU[100]] = FV(xV.definerHit))
            }
            const eV = VV[LU[1]] ? 15 : "11" === VV[-LU[100]] ? LU[102] : "13" === VV[-LU[100]] ? 13 : VV[LU[101]] !== LU[11] && VV[LU[101]] !== LU[12] ? LU[9] : "10" === VV[-LU[100]] ? LU[103] : "12" === VV[-LU[100]] ? 12 : LU[1];
            eV !== LU[1] && (Ke = eV)
          })(eV), Le++ % 10 === LU[1] && (Ae(), DU((() => !gU(YV[UV][LU[92]][LU[92]](), wV))) && (he = he === Oe[LU[78]][LU[104]] ? Oe[LU[78]][LU[104]] : Oe[LU[78]].Fr), DU((() => !gU(YV[UV][LU[92]](), wV))) && (he = Oe[LU[78]][LU[104]])), {
            flags: eV ? Oe[LU[97]].Butto : LU[1],
            values: [
              [Oe[LU[105]].PhysicsVersion, fe],
              [Oe[LU[105]]["Inbuil" + LU[106] + LU[107]], me],
              [Oe[LU[105]]["AltCom" + LU[108]], Ke],
              [Oe[LU[105]]["ProbeUsedPro" + LU[42]], le()]
            ]
          }
        }
      }
    };
    const KU = "[bloxd-wasm-client]",
      HU = "bloxdWasmDownloadFailed",
      uU = rx.f,
      sU = "boot",
      SU = "playSources",
      IU = "wasmBuild",
      dU = "bloxd-wasm-joined",
      OU = "bloxd-wasm-first-view",
      Vy = "bloxd-wasm-playable-legacy",
      ey = 1048576,
      xy = 8 * ey,
      Jy = 1006,
      Yy = 1e3,
      Uy = "You lost connection to the server.",
      yy = "general:lostConnection",
      py = 1048576,
      Qy = 5e3,
      ny = 100,
      wy = [2e3, 1e4, 3e4],
      Zy = 3e4;
    let vy = null,
      ry = null,
      ky = !1,
      by = !1,
      Ey = !1,
      By = null,
      jy = null,
      qy = null,
      ty = null,
      Fy = null,
      Ty = null,
      Py = null;
    const Ay = new class {
      constructor(VV, eV) {
        let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => performance.now();
        this.master = VV, this.soundOn = eV, this.now = xV, this.player = null, this.local = [], this.stopped = !1
      }
      get loaded() {
        return null !== this.player
      }
      get queued() {
        return this.local.length
      }
      preload(VV) {
        var eV;
        this.stopped || (null === (eV = this.player) || void 0 === eV || eV.preload(VV))
      }
      endSession() {
        var VV;
        null === (VV = this.player) || void 0 === VV || VV.cancelPreload(), this.freeSounds()
      }
      freeSounds() {
        var VV;
        null === (VV = this.player) || void 0 === VV || VV.freeSoundsAfterGame()
      }
      load(VV) {
        if (null !== this.player || this.stopped) return;
        this.player = VV, VV.setMaster(this.master, this.soundOn);
        const eV = this.now(),
          xV = this.local;
        this.local = [];
        for (const YV of xV)
          if (!(YV.stopped || !YV.loop && eV - YV.at >= 300)) try {
            this.start(YV, VV, eV)
          } catch (JV) {
            console.error("[bloxd-wasm-client] a queued sound wouldn't start", JV)
          }
      }
      start(VV, eV, xV) {
        const {
          name: JV,
          pos: YV,
          ear: UV,
          maxHearDist: yV,
          refDistance: pV,
          loop: QV,
          fade: nV
        } = VV, wV = eV.playGame(JV, se(VV, xV), YV, UV, yV, pV, QV);
        if (VV.sound = wV, 1 !== VV.rate && wV.rate(VV.rate), null !== VV.panner && wV.setPannerAttr(VV.panner), null !== VV.moved && wV.setPosition(VV.moved), null !== nV && xV - nV.at < nV.ms) {
          const eV = ue(this.master);
          eV > 0 ? wV.fade(0, VV.volume * eV, nV.at + nV.ms - xV) : wV.setRelativeVolume(VV.volume)
        }
      }
      onAudioEvent(VV, eV, xV, JV) {
        var YV, UV;
        return null === (YV = null === (UV = this.player) || void 0 === UV ? void 0 : UV.onAudioEvent(VV, eV, xV, JV)) || void 0 === YV || YV
      }
      applyListener(VV) {
        var eV;
        null === (eV = this.player) || void 0 === eV || eV.applyListener(VV)
      }
      playGame(VV, eV, xV, JV, YV, UV, yV) {
        if (this.stopped) return He.c;
        if (this.player) return this.player.playGame(VV, eV, xV, JV, YV, UV, yV);
        const pV = this.now();
        this.local = this.local.filter((VV => !VV.stopped && (VV.loop || pV - VV.at < 300)));
        const QV = {
          name: VV,
          volume: ue(eV),
          fade: null,
          pos: xV && [xV[0], xV[1], xV[2]],
          ear: JV && [JV[0], JV[1], JV[2]],
          maxHearDist: YV,
          refDistance: UV,
          loop: yV,
          rate: 1,
          panner: null,
          moved: null,
          at: pV,
          stopped: !1,
          sound: null
        };
        this.local.push(QV);
        const nV = {
          stop: () => {
            var VV;
            return QV.stopped = !0, null === (VV = QV.sound) || void 0 === VV || VV.stop(), nV
          },
          fade: (VV, eV, xV) => {
            if (QV.sound) return QV.sound.fade(VV, eV, xV), nV;
            const JV = ue(this.master),
              YV = ue(JV > 0 ? eV / JV : eV > 0 ? QV.volume : 0),
              UV = this.now(),
              yV = se(QV, UV);
            return QV.volume = YV, QV.fade = xV > 0 && yV !== YV ? {
              from: yV,
              at: UV,
              ms: xV
            } : null, nV
          },
          rate: VV => (QV.sound ? QV.sound.rate(VV) : QV.rate = VV, nV),
          getVolume: () => QV.sound ? QV.sound.getVolume() : QV.volume * ue(this.master),
          getRelativeVolume: () => QV.sound ? QV.sound.getRelativeVolume() : QV.volume,
          setRelativeVolume: VV => (QV.sound ? QV.sound.setRelativeVolume(VV) : (QV.volume = ue(VV), QV.fade = null), nV),
          setPannerAttr: VV => (QV.sound ? QV.sound.setPannerAttr(VV) : QV.panner = {
            ...VV
          }, nV),
          setPosition: VV => (QV.sound ? QV.sound.setPosition(VV) : QV.moved = [VV[0], VV[1], VV[2]], nV)
        };
        return nV
      }
      setMaster(VV, eV) {
        var xV;
        this.master = VV, this.soundOn = eV, null === (xV = this.player) || void 0 === xV || xV.setMaster(VV, eV)
      }
      stop() {
        var VV;
        this.stopped = !0, null === (VV = this.player) || void 0 === VV || VV.stopAll();
        for (const eV of this.local) eV.stopped = !0;
        this.local = []
      }
    }((0, Re.c)(), !0);
    let Ny = {
        wasm: "unknown",
        client: String(we.e)
      },
      Xy = null,
      My = () => {};
    const zy = new Promise((VV => {
      My = VV
    }));
    let Gy = () => {};
    const Wy = new Promise((VV => {
      Gy = VV
    }));
    let Ry, gy = null,
      Dy = null,
      iy = null,
      Cy = null,
      ay = null,
      oy = null,
      cy = null,
      hy = null,
      ly = null,
      Ly = null,
      fy = null,
      my = null,
      Ky = null,
      Hy = null,
      uy = null,
      sy = null,
      Sy = null,
      Iy = null,
      dy = null,
      Oy = !1,
      Vp = null;
    const ep = new Set,
      xp = new Set;

    function Jp(VV) {
      if (!ep.has(VV)) {
        ep.add(VV);
        for (const xV of xp) try {
          xV(VV)
        } catch (eV) {
          console.error(`${KU} a startup listener threw`, eV)
        }
      }
    }

    function Yp(VV) {
      Oy = !0, VV.isStopped || Jp("texturesIn")
    }
    let Up = 1,
      yp = -1 / 0,
      pp = -1 / 0,
      Qp = -1 / 0,
      np = !1,
      wp = null,
      Zp = !1,
      vp = !1,
      rp = 0,
      kp = null,
      bp = !1;
    const Ep = {
      dropped: -1 / 0,
      pause: -1 / 0,
      backlog: -1 / 0
    };
    let Bp = 0,
      jp = 0,
      qp = null,
      tp = null,
      Fp = null,
      Tp = null;
    const Pp = new WeakMap;
    let Ap = null,
      Np = null,
      Xp = !1,
      Mp = null,
      zp = null,
      Gp = null,
      Wp = null,
      Rp = null,
      gp = null,
      Dp = 0;
    const ip = new Set;
    let Cp = 0,
      ap = 0,
      op = 0,
      cp = null,
      hp = null,
      lp = null,
      Lp = null,
      fp = -1 / 0,
      mp = null;
    const Kp = new Set;
    let Hp = !1,
      sp = null;
    const Sp = new Map,
      Ip = new Set;
    let dp = !1;
    const Op = {
      adapter: null,
      boundAtMs: null,
      indirectHangs: null,
      restoresSkipped: null
    };
    let VQ = null,
      eQ = () => [0, 0],
      xQ = () => {},
      JQ = () => {},
      YQ = null,
      UQ = null;
    const yQ = new class {
      constructor(VV) {
        this.reached = VV, this.next = 1
      }
      observe(VV) {
        if (!(VV < this.next)) {
          for (; this.next <= VV;) this.next *= 2;
          this.reached(VV)
        }
      }
    }((VV => {
      console.warn(`${KU} chunk cancels from the server this session: ${VV}`)
    }));
    let pQ = 1,
      QQ = null,
      nQ = null,
      wQ = null,
      ZQ = null,
      vQ = null,
      rQ = !1,
      kQ = !1,
      bQ = 0,
      EQ = null,
      BQ = !1,
      jQ = null,
      qQ = null,
      tQ = null,
      FQ = !1;
    const TQ = new class {
        constructor(VV) {
          this.QZ = VV, this.lossPending = !1, this.undrawnSinceMs = null, this.lastFrameMs = 0, this.shown = !1, this.hn = !1
        }
        deviceLost() {
          this.lossPending = !0
        }
        frame(VV, eV, xV) {
          (0, Ce.b)(VV) && (this.lossPending = !1);
          const JV = xV - this.lastFrameMs;
          this.lastFrameMs = xV, this.lossPending && eV && (0, Ce.e)(VV) ? (null === this.undrawnSinceMs || JV > 1e3) && (this.undrawnSinceMs = xV) : this.undrawnSinceMs = null, this.show(this.hn || null !== this.undrawnSinceMs && xV - this.undrawnSinceMs >= 2e3)
        }
        hold(VV) {
          this.hn = VV, this.show(VV || this.shown)
        }
        stop() {
          this.hn = !1, this.lossPending = !1, this.undrawnSinceMs = null, this.show(!1)
        }
        show(VV) {
          VV !== this.shown && (this.shown = VV, this.QZ(VV))
        }
      }((VV => {
        QV.h.QZ(kV.h, VV)
      })),
      PQ = new class {
        constructor(VV) {
          let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => performance.now();
          this.EZ = VV, this.now = eV, this.lostAtMs = null, this.asked = !1, this.lastRestore = null, this.watched = new WeakSet
        }
        watch(VV, eV) {
          this.watched.has(VV) || (this.watched.add(VV), VV.addEventListener("webglcontextlost", (() => {
            eV() && this.contextLost()
          })), VV.addEventListener("webglcontextrestored", (() => {
            eV() ? this.contextRestored() : (this.take(), this.lastRestore = null)
          })))
        }
        frame(VV, eV) {
          (0, Ce.e)(VV) && eV && null !== this.lostAtMs && this.now() - this.lostAtMs >= 1e3 && (this.asked = !0)
        }
        contextLost() {
          null === this.lostAtMs && (this.lostAtMs = this.now(), this.asked = !1)
        }
        unheldRestore(VV) {
          const eV = this.lastRestore;
          return null !== eV && VV - eV.atMs < 3e4 ? eV : null
        }
        contextRestored() {
          const VV = this.take();
          if (null === VV) this.lastRestore = null;
          else {
            var eV, xV;
            const JV = this.unheldRestore(VV.lostAtMs);
            this.lastRestore = {
              atMs: this.now(),
              firstLostAtMs: null !== (eV = null === JV || void 0 === JV ? void 0 : JV.firstLostAtMs) && void 0 !== eV ? eV : VV.lostAtMs,
              asked: null !== (xV = null === JV || void 0 === JV ? void 0 : JV.asked) && void 0 !== xV && xV || VV.asked
            };
            const YV = VV.asked ? "restore_context" : "natural";
            this.EZ(`webgl_restored_${YV}_${VV.delay}`, `WebGL2 context restored (${YV}, wasm)`)
          }
        }
        gaveUp() {
          const VV = this.take();
          if (null !== VV) {
            var eV;
            const xV = this.unheldRestore(VV.lostAtMs),
              JV = null === xV ? VV.delay : (0, ae.l)(this.now() - xV.firstLostAtMs),
              YV = VV.asked || null !== (eV = null === xV || void 0 === xV ? void 0 : xV.asked) && void 0 !== eV && eV ? "restore_tried" : "restore_untried";
            this.EZ(`webgl_rejoin_${YV}_${JV}`, "WebGL2 context not restored: rejoining (wasm)")
          }
          this.lastRestore = null
        }
        take() {
          const VV = this.lostAtMs;
          return null === VV ? null : (this.lostAtMs = null, {
            lostAtMs: VV,
            delay: (0, ae.l)(this.now() - VV),
            asked: this.asked
          })
        }
      }(ix.reportRenderRecovery),
      AQ = new class {
        constructor(VV) {
          var eV, xV, JV, YV;
          this.deps = VV, this.firstLostAtMs = null, this.lastLostAtMs = 0, this.heldReload = null, this.generation = 0, this.watched = new WeakSet, this.pageHideWatched = !1, this.storage = void 0, this.now = void 0, this.wallNow = void 0, this.setTimer = void 0, this.storage = null !== (eV = VV.storage) && void 0 !== eV ? eV : ce.q, this.now = null !== (xV = VV.now) && void 0 !== xV ? xV : performance.now.bind(performance), this.wallNow = null !== (JV = VV.wallNow) && void 0 !== JV ? JV : Date.now, this.setTimer = null !== (YV = VV.setTimer) && void 0 !== YV ? YV : (VV, eV) => {
            setTimeout(VV, eV)
          }
        }
        watch(VV, eV) {
          this.watched.has(VV) || (this.watched.add(VV), VV.addEventListener("webglcontextlost", (() => {
            eV() && this.lost()
          })), VV.addEventListener("webglcontextrestored", (() => {
            this.restored()
          })), this.pageHideWatched || (this.pageHideWatched = !0, window.addEventListener("pagehide", (() => {
            this.pageHide()
          })), document.addEventListener("visibilitychange", (() => {
            this.pageHide(!document.hidden)
          }))))
        }
        lost() {
          const VV = this.now();
          null === this.firstLostAtMs && (this.firstLostAtMs = VV, this.writeMarker({
            lostAt: this.wallNow()
          })), this.lastLostAtMs = VV, null === this.heldReload && this.generation++
        }
        restored() {
          if (null === this.firstLostAtMs || null !== this.heldReload) return;
          const VV = this.now(),
            eV = ++this.generation;
          this.setTimer((() => {
            eV === this.generation && this.end("restored", VV)
          }), 3e4)
        }
        reload(VV) {
          if (null !== this.heldReload) return;
          if (null === this.firstLostAtMs && this.lost(), this.deps.probe()) return this.end("cleared_reload"), void VV();
          this.heldReload = VV, this.deps.hold(!0);
          const eV = ++this.generation,
            xV = () => this.lastLostAtMs + De.c + 5e3,
            JV = () => {
              this.setTimer(YV, Math.max(0, Math.min(5e3, xV() - this.now())))
            },
            YV = () => {
              eV === this.generation && (this.deps.probe() ? this.release("cleared_reload", VV) : this.now() >= xV() ? this.release("gave_up", VV) : JV())
            };
          JV()
        }
        releaseNow() {
          null !== this.heldReload && this.release("gave_up", this.heldReload)
        }
        forget() {
          null !== this.firstLostAtMs && this.clear()
        }
        pageHide() {
          let VV = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          if (null === this.firstLostAtMs) return;
          const eV = (0, oe.e)(this.storage);
          null !== eV && this.writeMarker(VV ? {
            lostAt: eV.lostAt
          } : {
            ...eV,
            leftAt: this.wallNow()
          })
        }
        release(VV, eV) {
          this.end(VV), eV()
        }
        end(VV) {
          let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.now();
          const xV = this.firstLostAtMs;
          if (this.clear(), null !== xV) {
            const {
              code: JV,
              message: YV
            } = (0, oe.g)(VV, eV - xV);
            this.deps.EZ(JV, YV)
          }
        }
        clear() {
          this.firstLostAtMs = null, this.generation++, null !== this.heldReload && (this.heldReload = null, this.deps.hold(!1)), this.storage.removeItem(oe.d)
        }
        writeMarker(VV) {
          this.storage.setItem(oe.d, VV)
        }
      }({
        EZ: ix.reportRenderRecovery,
        probe: () => function(VV) {
          let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => document.createElement("canvas");
          try {
            var xV;
            const JV = eV(),
              YV = VV ? JV.getContext("webgl") : JV.getContext("webgl2");
            return null !== YV && (null === (xV = YV.getExtension("WEBGL_lose_context")) || void 0 === xV || xV.loseContext(), !0)
          } catch {
            return !1
          }
        }("rust_webgl1" === (0, DY.G)()),
        hold: VV => {
          TQ.hold(VV)
        }
      });
    let NQ = !1,
      XQ = !0,
      MQ = null,
      zQ = !1,
      GQ = !1,
      WQ = !1;

    function RQ() {
      if (null === QQ) return null;
      const {
        canvas: VV,
        backend: eV
      } = QQ;
      return {
        canvas: VV,
        renderer: Ke.b[eV]
      }
    }

    function gQ() {
      return qy ??= Promise.all([xV.e(224), xV.e(48), xV.e(170), xV.e(71)]).then((() => xV(53932))).then((VV => (jy = VV, Object.assign(globalThis, {
        bloxdPreviewPage: VV.pagePreviews()
      }), VV)), (VV => {
        throw qy = null, VV
      })), qy
    }

    function DQ() {
      return By ??= xV.e(69).then((() => xV(53950))).catch((VV => {
        throw By = null, new RV.e(VV)
      })), By
    }
    class iQ {
      constructor() {
        this.host = null
      }
      open(VV) {
        return null !== this.host ? VV(this.host) : gQ().then((eV => (this.host ??= new eV.WasmPreviewHost(eV.pagePreviews()), VV(this.host))))
      }
      openMob(VV) {
        return this.open((eV => eV.openMob(VV)))
      }
      openPet(VV) {
        return this.open((eV => eV.openPet(VV)))
      }
      openMobLineup(VV) {
        return this.open((eV => eV.openMobLineup(VV)))
      }
      openCharacter(VV, eV) {
        return this.open((xV => xV.openCharacter(VV, eV)))
      }
    }

    function CQ() {
      Ey || (Ey = !0, MY.g.setHost(new iQ), (0, cx.j)(), PY.g.setFollower(mn), Object.assign(globalThis, {
        bloxdPreviews: MY.g
      }))
    }

    function aQ() {
      gQ().then((VV => {
        VV.pagePreviews().prefetch()
      }), (() => {}))
    }

    function oQ() {
      let VV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      if (by) return;
      by = !0, NQ = "play" === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "shell"), XQ = !NQ, console.info(`${KU} starting`), ky || (ky = !0, (0, kV.P)(new Le(Jn, Zn, RQ)), (0, vV.o)(new fe), (0, kV.O)(new me((() => performance.now() - yp))), (0, kV.J)()), NQ && QV.h.subscribe("appManagerUpdated|gameState", xn), CQ(), (0, ix.setCrashScreen)((VV => {
        let {
          text: eV,
          reload: xV
        } = VV;
        ! function(VV, eV) {
          var xV, JV;
          if (zQ) return;
          zQ = !0, (0, lx.cb)(), null === (xV = mp) || void 0 === xV || xV.abort(), mp = null, AY.e.release();
          const YV = NQ ? null !== (JV = VV.cancel) && void 0 !== JV ? JV : "general:back" : null;
          hJ({
            ...VV,
            cancel: YV
          }).then((VV => {
            VV && eV && GQ ? ((0, Fe.D)("reloadOntoJs"), (0, OV.h)(Fe.L)) : VV && eV ? (0, OV.l)() : NQ && (0, OV.f)("/")
          }))
        }(eV, xV)
      })), (0, rY.k)(), (0, We.g)();
      let eV = null;
      try {
        eV = lU("xx2zjxspt5l", (() => {
          var VV, eV;
          return null !== (VV = null === (eV = gy) || void 0 === eV ? void 0 : eV.ws) && void 0 !== VV ? VV : null
        }), VV, "fuexskgmtl")
      } catch (YV) {
        console.error(`${KU} probes`, YV)
      }
      const JV = function() {
        const VV = (0, SJ.l)(),
          eV = (0, SJ.j)();
        let xV = !1;
        return JV => {
          VV && !xV && (xV = !0, (0, ix.reportStaleBuildReload)(VV, eV, JV))
        }
      }();
      Hn(), NQ || function() {
        const VV = function(VV) {
          var eV;
          const xV = new URLSearchParams(VV),
            JV = xV.get("game");
          return JV ? {
            game: JV,
            lobby: null !== (eV = xV.get("lobby")) && void 0 !== eV ? eV : null
          } : null
        }(window.location.search);
        if (VV) return (0, Ze.l)(VV.game) && Hn().request(), void lQ(VV.game, VV.lobby);
        const eV = new URLSearchParams(window.location.search).get("ws");
        if (!eV) return;
        zy.then((VV => {
          VV && async function(VV, eV) {
            try {
              await (0, RV.n)(VV), Mp = En(new WebSocket(eV)), null !== Mp && AY.e.setGame(null), cQ()
            } catch (YV) {
              console.error(`${KU} ?ws=${eV} did not attach`, YV)
            }
          }(VV, eV)
        }))
      }(), async function(VV) {
        var eV, JV, UV, yV, pV, nV;
        if ("undefined" === typeof WebAssembly) return Rn("noWebAssembly", "unsupported", "This browser has no WebAssembly"), null;
        const wV = (0, DY.Y)(),
          vV = await async function(VV, eV) {
            const xV = (0, rx.q)(VV) ? Dn(VV, eV) : null;
            if (null === xV || void 0 === xV || !xV.retries) return VV;
            console.warn(`${KU} ${xV.detail}: picking again in ${gn} ms`), await new Promise((VV => {
              setTimeout(VV, gn)
            }));
            const JV = await (0, DY._)();
            if (!(0, rx.q)(JV)) {
              var YV;
              (0, ix.reportNoBackendRetry)("reprobed", xV.decline, xV.detail, {
                ...xV.details,
                backend: null !== (YV = null === JV || void 0 === JV ? void 0 : JV.backend) && void 0 !== YV ? YV : "none"
              }), null !== JV && (0, DY.U)(JV.backend)
            }
            return JV
          }(await (0, DY.R)(), wV);
        if ((0, ix.setCrashBackend)((0, rx.q)(vV) ? "unsupported" : null !== (eV = null === vV || void 0 === vV ? void 0 : vV.backend) && void 0 !== eV ? eV : "none"), (0, rx.q)(vV)) return function(VV) {
          let {
            decline: eV,
            detail: xV,
            details: JV,
            retries: YV
          } = VV;
          if (YV && (0, Fe.l)()) return (0, ix.reportNoBackendRetry)("reload", eV, xV, JV), void Cn(`${xV}, again after ${gn} ms`);
          Rn("browser", eV, xV, YV ? {
            ...JV,
            afterReload: String(Fe.B)
          } : JV)
        }(Dn(vV, wV)), null;
        if ((0, OY.o)("render")) try {
          const {
            startRenderDebug: VV
          } = await Promise.all([xV.e(89), xV.e(55)]).then((() => xV(5166)));
          VV(vV)
        } catch (te) {
          console.warn("The render debug topic didn't load", te)
        }
        if ((0, OY.o)("renderlite")) try {
          const {
            startRenderLite: VV
          } = await Promise.all([xV.e(296), xV.e(56)]).then((() => xV(53961)));
          wQ = VV(vV)
        } catch (te) {
          console.warn("The renderlite debug topic didn't load", te)
        }
        if ((0, OY.o)("renderprobe")) try {
          const {
            startRenderProbe: VV
          } = await xV.e(57).then((() => xV(53966)));
          VV(vV)
        } catch (te) {
          console.warn("The renderprobe debug topic didn't load", te)
        }
        if ("webgl" === (null === vV || void 0 === vV ? void 0 : vV.backend) && NQ && "wasm" !== (0, Fe.e)(window.location.search)) {
          const VV = HJ(vV);
          null !== VV && (0, Te.g)(VV)
        }
        const rV = null !== (JV = null === vV || void 0 === vV ? void 0 : vV.backend) && void 0 !== JV ? JV : null;
        Op.adapter = null !== (UV = null === vV || void 0 === vV ? void 0 : vV.adapter) && void 0 !== UV ? UV : null, Op.boundAtMs = null, Op.indirectHangs = null, Op.restoresSkipped = null;
        const kV = !(0, rx.$)();
        null === vV || (0, rx.D)(vV.reason) || console.info(`${KU} drawing with ${vV.backend}: ${vV.reason}`);
        const bV = (0, DY.F)();
        Gy(!0), (0, RV.z)((VV => {
          try {
            null !== rV && (YQ = VV.startSkyFeed, Ln(), function(VV) {
              var eV, xV;
              eQ = VV.rasterText, Gp = VV.setTextLocalPlayer, VV.setTextLocalPlayer(null !== (eV = null === (xV = zp) || void 0 === xV ? void 0 : xV.info.playerDbId) && void 0 !== eV ? eV : null), xQ = VV.drainTextRerasters, JQ = VV.loadTextIcons, VV.warmText((() => rQ)), VV.textChanged(), rQ && setTimeout(JQ, 0)
            }(VV), UQ = VV.startShellAnalytics, On())
          } finally {
            WQ || (ZQ = VV.followMenuPrefs({
              setSoundPrefs: rn,
              setEnvPrefs: kn,
              setUiPrefs: vn,
              setLookPrefs: bn
            }))
          }
        })), (0, RV.p)(Ay).catch((VV => {
          console.warn(`${KU} the game code did not load: a join asks again`, VV)
        }));
        const EV = (0, DY.l)(vV);
        let BV, qV;
        EV.catch((() => {})), "loading" === (0, be.C)() && FV();
        try {
          BV = function(VV) {
            const eV = null !== VV && void 0 !== VV ? VV : document.createElement("canvas");
            eV.id = "wasm-game-canvas", PQ.watch(eV, Fw), AQ.watch(eV, Fw), (0, lY.i)();
            const xV = (0, le.d)(),
              JV = (0, le.f)(xV);
            eV.style.cssText = "position:absolute;top:0;left:0;display:block;touch-action:none;outline:none;background:#000", (0, hY.g)(eV, JV), (0, le.c)(eV, xV), eV.width = JV.bufferWidth, eV.height = JV.bufferHeight;
            const YV = document.createElement("div");
            return YV.style.cssText = "position:fixed;top:0;right:0;bottom:0;left:0;overflow:hidden", YV.append(eV), Yn(YV, XQ), MQ = YV, document.body.append(YV), eV
          }(null === rV ? null : await (await gQ()).pagePreviews().beginSession())
        } catch (YV) {
          return await hw({
            site: IU,
            error: YV
          }, (() => {
            (0, ix.showUnsupported)((0, aJ.j)("fetch"), pU.h.fetch, `the previews did not load: ${String(YV)}`)
          })), null
        }
        FV();
        try {
          qV = await EV
        } catch (YV) {
          return await hw({
            site: IU,
            error: YV
          }, (() => {
            (0, ix.showUnsupported)((0, aJ.j)("fetch"), pU.h.fetch, `the ${null!==rV&&void 0!==rV?rV:"client"} build did not load: ${String(YV)}`)
          })), null
        }
        const tV = (0, DY.h)(),
          TV = !tV && !0 !== ce.q.getItem(HU),
          PV = !tV && "loading" === (0, be.C)();
        await (0, iY.d)(qV, {
          reloadFailedDownload: TV
        }), PV && !(0, be.R)() && await (0, iY.d)(qV, {
          reloadFailedDownload: TV
        });
        jV = performance.now();
        const AV = Ny;
        if (!(0, be.R)()) {
          (0, be.P)() && ce.q.setItem(HU, !0);
          const VV = (0, be.r)();
          if ("call" === VV) Pw({
            site: bx.w,
            error: (0, be.p)(),
            header: null
          }, AV);
          else {
            const eV = null !== VV && void 0 !== VV ? VV : "instantiate",
              xV = () => {
                (0, ix.showUnsupported)((0, aJ.j)(eV), pU.h[eV], (0, be.j)())
              };
            if ("compile" !== VV && "instantiate" !== VV || !an())
              if ("fetch" === eV) {
                const VV = [qV.url().href, qe.f.url().href];
                await hw({
                  site: IU,
                  error: (0, be.j)(),
                  urls: VV
                }, xV)
              } else xV();
            else {
              const eV = (0, be.j)(),
                xV = (0, xx.d)((0, be.p)());
              if (xV && (0, Fe.l)()) return (0, ix.reportCountedLoadFallback)((0, aJ.j)(VV), pU.h[VV], eV, "wasmReload"), Cn(`the wasm client ran out of memory to ${VV} here (${eV})`), null;
              (0, ix.reportCountedLoadFallback)((0, aJ.j)(VV), pU.h[VV], eV, xV ? "declined" : "pageAlone"), cn(`the wasm client did not ${VV} here (${eV})`, xV ? "oom" : null)
            }
          }
          return null
        }(0, Ee.N)(qV.url()) && (0, ix.reportUnstreamedCoreLoad)();
        const NV = (0, be.D)();
        let XV, MV = AV;
        try {
          MV = {
            ...AV,
            wasm: NV.Vv()
          };
          const {
            dE: VV
          } = qV.bindings, eV = VV.AYV();
          if (eV !== Oe.E) return Pw({
            site: bx.c,
            error: `core ABI ${eV}, page ABI ${Oe.E}`,
            header: null
          }, MV), null;
          const [xV, JV] = (0, Oe.ve)();
          XV = new VV(xV, JV)
        } catch (YV) {
          return Pw({
            site: bx.c,
            error: YV,
            header: null
          }, MV), null
        }
        Ny = MV, Xy = qV.bindings;
        const zV = new bx.h(XV, be.x, {
          onCrash: VV => {
            var eV;
            null === (eV = wQ) || void 0 === eV || eV.crashed(VV),
              function(VV, eV, xV, JV) {
                if ("webgpu" !== eV || (0, DY.e)()) return !1;
                const YV = function(VV) {
                  if (VV.site === bx.g && (0, rx.s)(VV.error)) return "frames_refused";
                  return VV.site === uU && (0, rx.w)(VV.error) ? "start_failed" : null
                }(VV);
                if (null === YV) return !1;
                if (null !== (0, rx.Y)(YV, JV, (0, kx.d)(VV.error))) return (0, ix.countRenderLost)(YV, VV.error, Op), !1;
                return De.E.reloaded(null, !1), (0, ix.reportRenderReload)("webgpu", "start_failed" === YV ? 0 : 1, xV, {
                  cause: YV,
                  error: VV.error,
                  context: Op,
                  session: Mw(null)
                }), yw(), !0
              }(VV, rV, MV, kV) || Pw(VV, MV)
          },
          onNetEvent: Jw,
          onReconnectGrace: zn,
          onJoinPreloadEnded: Mn,
          onCoreErrors: (VV, eV) => {
            var xV, JV;
            VV.some((VV => {
              let {
                code: eV
              } = VV;
              return eV === Oe.M.RenderDeviceLost
            })) && ((0, DY.z)(), TQ.deviceLost(), "webgpu" === rV && ((0, kx.h)(VQ), De.E.lost())), null === (xV = wQ) || void 0 === xV || xV.coreErrors(VV);
            const YV = () => {
              (0, ix.reportCoreErrors)(VV, eV, MV, ((VV, eV) => {
                var xV;
                return VV === Oe.M.EnvUnknownSky ? (0, ix.unknownSkyWords)(Pe.c.get("skyBox")) : VV === Oe.M.RenderDeviceLost ? (0, ix.deviceLossWords)(eV, Op.boundAtMs) : null === (xV = VQ) || void 0 === xV ? void 0 : xV.NYV(VV, eV)
              }))
            };
            VV.some((VV => {
              let {
                code: eV
              } = VV;
              return eV === Oe.M.EnvUnknownSky
            })) ? queueMicrotask(YV) : YV(), null === (JV = Vp) || void 0 === JV || JV.coreErrors(VV)
          },
          onRenderReload: (VV, eV, xV) => {
            ! function(VV, eV, xV, JV, YV, UV) {
              var yV;
              if ((0, DY.e)()) return;
              const pV = eV === Oe.bd.WEBGPU,
                QV = JV === Oe.bd.PIPELINE_FAILED ? "pipeline_failed" : "lost",
                nV = JV === Oe.bd.RESTORE_LOST,
                wV = pV && (0, De.q)(Op.adapter, xV, "lost" === QV, nV),
                vV = (0, kx.o)(VQ);
              null === (yV = wQ) || void 0 === yV || yV.reload(pV, xV, QV, null === vV || void 0 === vV ? void 0 : vV.message);
              const rV = pV ? (0, rx.Y)(QV, YV, vV) : null;
              if (null !== rV) {
                (0, ix.countRenderLost)(QV, vV, Op);
                const eV = void 0 === vV ? "" : ` (${vV.message})`;
                return void VV.crash(ix.RENDER_RELOAD_SITE, new Error(`${(0,ix.renderReloadMessage)("webgpu",QV,xV)} and ${rV}${eV}`))
              }
              const kV = pV ? "webgpu" : "webgl1" === UV ? "webgl1" : "webgl";
              "lost" === QV && (0, DY.z)();
              pV || ((0, Fe.z)(), PQ.gaveUp());
              (0, ix.reportRenderReload)(kV, xV, Ny, {
                from: "game",
                cause: QV,
                restoreLost: nV,
                adapterRemembered: wV,
                error: vV,
                context: Op,
                session: Mw(VV.sunShadowsHeld())
              }), (0, DY.r)();
              const bV = (0, ZV.e)();
              let EV = !1;
              const BV = () => {
                EV || (EV = !0, pV ? yw() : AQ.reload(yw))
              };
              let jV = null;
              const qV = (0, ZV.m)((() => {
                null !== jV && clearTimeout(jV), bV ? setTimeout(BV, Uw) : BV()
              }));
              !EV && bV && (jV = setTimeout((() => {
                qV(), BV()
              }), Yw))
            }(zV, VV, eV, xV, kV, rV)
          },
          onEnvEvent: VV => {
            var eV;
            VV.kind === Oe.hb.SkyImages ? null === (eV = sy) || void 0 === eV || eV.onEvent(VV.payload) : VV.kind === Oe.hb.EnvLighting && (Sy = 1 === VV.payload[0])
          },
          onImages: VV => {
            var eV;
            null === (eV = Iy) || void 0 === eV || eV.onEvent(VV)
          },
          onModelRequest: VV => {
            var eV;
            null === (eV = Ky) || void 0 === eV || eV.request(VV)
          },
          onModelTaken: (VV, eV) => {
            var xV;
            null === (xV = Ky) || void 0 === xV || xV.taken(VV, eV)
          },
          onTerrainTexturesWanted: () => {
            queueMicrotask((() => {
              ! function(VV, eV) {
                const xV = Py;
                if (null === xV || VV.isStopped) return;
                xV.restore((VV => {
                  (0, ix.reportTerrainTextureFailure)(VV, eV)
                })).then((eV => {
                  !1 !== eV || VV.isStopped ? !0 === eV && console.info(`${KU} terrain textures handed over again after the renderer lost them`) : console.warn(`${KU} the terrain textures couldn't be handed over again: the terrain draws blank`)
                }))
              }(zV, MV)
            }))
          },
          onKeepAlive: VV => {
            const eV = null === Tp ? void 0 : Pp.get(Tp);
            void 0 !== eV && eY(eV, VV)
          },
          onSends: () => {
            ! function(VV) {
              const eV = performance.now();
              if (VV.forEachNetOut(qw), bw(VV), (0, bx.N)(VV, {
                  worldgen: iy,
                  mesh: ay
                }), null !== nQ) try {
                nQ.sendsWent(VV, eV, performance.now())
              } catch (YV) {
                xw(YV)
              }
            }(zV)
          }
        });
        if (ty = zV, null === (yV = he.b.wasmNetReady) || void 0 === yV || yV.call(he.b, (() => zV.isStopped ? 0 : zV.netKeptFrames)), null !== VV) {
          zV.setAntiCheatProbes(aU(be.x, VV.checks)), VV.watchHeld(cU.CoreFrame, (() => zV.frame)), VV.watchHeld(cU.GlueFrame, (() => XV.frame));
          const eV = function(VV, eV) {
            const xV = new oU(eV);
            let JV = !1;
            xV.iZ(VV.iZ());
            const YV = (0, OJ.W)((() => {
              xV.iZ(VV.iZ())
            }), hU);
            let UV = 6 * (0, OJ.Q)() | 0;
            const yV = () => {
              ++UV < 6 || (UV = 0, VV.checks.stackCheck() && (JV = !0))
            };
            (0, EU.k)(yV);
            const pV = () => {
              const eV = VV.checkPadCall();
              0 !== eV && xV.setFlags(eV)
            };
            return (0, bU.h)(pV), {
              onSend: yV,
              beforeFrame: () => {
                JV && xV.originStackHit() && (JV = !1)
              },
              onEvent: eV => {
                const JV = VV.checkEvent(eV);
                xV.value(Oe.k.ProbeUsedProp, VV.usedProp()), 0 !== JV && xV.setFlags(JV)
              },
              stop: () => {
                (0, OJ._)(YV), (0, EU.h)(yV), (0, bU.g)(pV)
              }
            }
          }(VV, ((VV, eV, xV) => {
            let JV = !1;
            return Rw(zV, (() => {
              JV = zV.rings.input.writeRecord(Oe.Gb.AntiCheat, VV, eV, xV, 0)
            })), JV
          }));
          zV.isStopped ? eV.stop() : fy = eV
        }
        vy = (VV, eV, xV) => zV.rings.cmd.writeCmd(VV, eV, xV), ry = VV => zV.rings.cmd.growForCmd(VV), bp = !1, Ln(), (0, RV.B)(zV, {
          core: XV,
          memory: be.x,
          staleOr: (VV, eV, xV, JV) => hw({
            site: VV,
            error: eV
          }, xV, JV),
          reportReplayFault: (VV, eV) => {
            (0, ix.reportReplayFault)(VV, eV, Ny)
          },
          audio: Ay,
          options: Pe.c,
          onNetEvent: Jw,
          sessionInfo: VV => {
            var eV;
            return (null === (eV = zp) || void 0 === eV ? void 0 : eV.conn) === VV ? zp.info : null
          },
          onEventOverflow: Vn,
          replayShaderPack: VV => {
            var eV;
            null === (eV = Vp) || void 0 === eV || eV.replay(VV)
          },
          hasPackModel: VV => {
            var eV, xV;
            return null !== (null !== (eV = null === (xV = fn()) || void 0 === xV ? void 0 : xV.modelUrl(VV)) && void 0 !== eV ? eV : null)
          },
          beforeWrite: () => (!Zp && zV.rings.net.cursor > 0 && nw(zV, !1, "all"), !zV.isStopped),
          beforeOp: () => (!Zp && zV.netWrittenSinceFrame > 0 && nw(zV, !1, "budget"), !zV.isStopped)
        }), (0, WV.E)({
          lockPointer: () => {
            if (!QJ(BV)) return !1;
            try {
              Promise.resolve(BV.requestPointerLock()).catch((() => {}))
            } catch {
              return !1
            }
            return !0
          },
          unlockPointer: () => {
            (0, Sx.b)()
          },
          leaveGame: () => {
            OQ()
          },
          canvas: () => BV
        }), my = (0, WV.u)((() => {
          var VV;
          const eV = (0, RV.k)();
          null === (VV = (0, RV.v)()) || void 0 === VV || VV.followCursorAim(!0 === (null === eV || void 0 === eV ? void 0 : eV.isSessionLive) ? eV : null)
        })), qp && zV.setUiPrefs(qp);
        tp && zV.setEnvPrefs(tp);
        Fp && zV.setLookPrefs(Fp);
        const GV = oY ? cY(oY.preventMovement) : null;
        GV && wn(GV);
        const gV = (0, Wx.n)(),
          DV = (0, Wx.g)(zV, gV);
        ly = gV.basis, (0, Hx.i)(null === DV ? null : (0, Gx.n)(DV)), hy = DV;
        const iV = (0, Be.c)();
        let CV = 1 / 0,
          aV = !0,
          oV = gV.shedFootprintBytes;
        const cV = new vY.d(iV, (() => XV.vB()), (VV => {
          zV.crash(bx.l, VV)
        }));
        oy = cV, cy = cV, null !== DV && cV.setCeiling(Math.min((0, vY.p)(DV), CV, (0, Wx.q)()));
        if (aV) {
          cV.setShed((VV => {
            const eV = zV.shedMemory("joinReserve" !== VV && "gcPressure" !== VV);
            return null !== eV && (null === hy || eV < hy) && (hy = eV, (0, Hx.i)((0, Gx.n)(eV))), eV
          }), ((VV, eV, xV) => {
            1 === eV ? (0, ix.reportMemoryShed)(VV, xV, Ny) : console.warn(`${KU} wasm memory: shed again (${VV}): shed ${eV}`, xV.wasmMemoryShed)
          }), (() => zV.addDistanceInUse()));
          const VV = (0, rx.P)(NV);
          cV.setFootprint(new dY(oV, {
            storedChunks: () => XV.XYV(),
            gpuBytes: () => {
              var eV;
              return null !== (eV = null === VV || void 0 === VV ? void 0 : VV.MYV()) && void 0 !== eV ? eV : 0
            },
            jsHeapBytes: IY
          })), (0, Kx.h)("wasm", cV, (() => {
            Ay.freeSounds()
          }))
        }
        window.addEventListener("pagehide", (() => {
          oy === cV && (cV.refreshStats(), Ww(cV))
        })), window.addEventListener("pagehide", pw), window.addEventListener("pagehide", Qw), !1;
        const [hV, lV] = (0, ox.e)();
        vQ = (0, hx.e)((VV => zV.setChunkAddDistance(VV.horizontal, VV.vertical)), {
          horizontal: hV,
          vertical: lV
        }), zV.setAmbientOcclusion(!0 !== ce.m.getItem("disableAmbientOcclusion")), zV.setPoseLod(!0 !== ce.m.getItem(re.R)), zV.setDebugLog(Oe.U.Look, !0), zV.setDebugLog(Oe.U.CameraSet, !0), (0, eU.startLookDebug)("wasm", {
          look: () => zV.takeDebugLog(Oe.U.Look),
          cameraSets: () => zV.takeDebugLog(Oe.U.CameraSet)
        }), (0, OY.o)("remesh") && (zV.setDebugLog(Oe.U.Remesh, !0), LV = () => zV.takeDebugLog(Oe.U.Remesh), yU = new UU((0, xU.m)(), LV));
        var LV;
        const fV = function(VV, eV, xV, JV) {
          const YV = new NJ,
            UV = VV => ce.m.getItem(VV);
          YV.sync(UV, eV), (0, ie.O)();
          const yV = (0, QV.i)("customBindingsChanged", (() => {
            YV.sync(UV, eV)
          }));
          (0, Ix.p)(eV);
          const pV = new Set,
            nV = (0, WV.u)((() => {
              var VV;
              pV.size > 0 && GJ() && !0 === (null === (VV = (0, RV.k)()) || void 0 === VV ? void 0 : VV.localPlayerAlive()) && QV.h.QZ("usedKeyboard")
            })),
            wV = EJ.e.heldSizer((() => (0, le.j)(VV))),
            ZV = bJ(VV, eV, {
              prevents: VV => YV.prevents(VV),
              keyPressed: VV => {
                YV.moves(VV) && (pV.add(VV), GJ() && QV.h.QZ("usedKeyboard"))
              },
              keyReleased: VV => {
                pV.delete(VV)
              },
              keysReleased: () => {
                pV.clear()
              },
              resized: () => {
                MJ.j.measure(VV.getBoundingClientRect()), (0, BJ.l)()
              },
              sizeCanvas: wV,
              watchRenderScale: eV => {
                const xV = (0, le.l)(VV, eV),
                  JV = EJ.e.onRelease(eV);
                return () => {
                  xV(), JV()
                }
              },
              touchStarting: () => {
                MJ.j.measure(VV.getBoundingClientRect())
              },
              viewShown: xV,
              touchUiShown: () => Ve.b.get("isTouchScreen"),
              ctrlCombosAreGames: GJ,
              inspect: (VV, eV, xV) => {
                YV.checks(eV, xV) && JV(VV)
              },
              canLock: () => QJ(VV)
            }),
            vV = (0, Fx.c)(eV);
          return () => {
            yV(), nV(), (0, Ix.p)(null), vV(), ZV()
          }
        }(BV, ((VV, eV, xV, JV, YV) => {
          Rw(zV, (() => {
            zV.rings.input.writeRecord(VV, eV, xV, JV, YV)
          })), !vp && (0, iJ.e)(VV, YV) && (0, iJ.b)((() => {
            ty !== zV || WQ || zV.isStopped || !Bw() || nw(zV, !1, "budget", !1)
          }))
        }), (() => XQ), (VV => {
          var eV;
          null === (eV = fy) || void 0 === eV || eV.onEvent(VV)
        }));
        if (zV.isStopped) return fV(), null;
        Dy = fV;
        const mV = () => !zV.isStopped && !zQ;
        if (zV.isStopped) return null;
        (0, be.W)((() => {
          "call" === (0, be.r)() && zV.crash(bx.w, (0, be.p)())
        }));
        const KV = (0, bx.P)(zV.rings.worker, (() => {
          nw(zV, !1, document.hidden ? "all" : "budget")
        }));
        iy = function(VV, eV, xV) {
          return gw().then((VV => {
            let {
              prefetchWorldgenWorker: eV
            } = VV;
            eV()
          }), (() => {})), new vU({
            module: (0, be.y)(),
            decodeSettings: VV => {
              const eV = (0, RV.v)();
              if (null === eV) throw new Error("no game code to decode the world-gen seed with");
              return eV.decodeMapSettings(VV)
            },
            loadWorker: Dw,
            onMapWithoutWorldgen: () => {
              iw((VV => {
                let {
                  stopWorldgenWorkerPrefetch: eV
                } = VV;
                eV()
              }))
            },
            onLoadFailed: VV => {
              (0, ix.reportWorldgenLoadFailure)(VV, Ny)
            },
            onWorkerLost: (VV, eV) => {
              !async function(VV, eV, xV) {
                const JV = VV === nU || VV.startsWith(wU);
                if (!JV || eV) return void xV.EZ(JV);
                const YV = () => {
                  xV.EZ(!0)
                };
                let UV;
                try {
                  UV = await xV.scriptUrl()
                } catch {
                  return void YV()
                }
                await xV.staleOr({
                  site: bx.H,
                  error: new Error(`a world-gen worker's load failed (${VV}): ${UV}`),
                  urls: [UV]
                }, YV)
              }(VV, eV, {
                scriptUrl: async () => {
                  const {
                    worldgenWorkerScriptUrl: VV
                  } = await gw();
                  return VV()
                },
                staleOr: (VV, eV) => hw(VV, eV, {
                  stillWanted: xV
                }),
                EZ: eV => {
                  (0, ix.reportWorldgenWorkerLost)(VV, eV, Ny, {
                    build: (0, SJ.j)(),
                    ageMs: (0, lx.B)()
                  })
                }
              })
            },
            onStartTimeout: VV => {
              (0, ix.reportWorkerStartTimeout)(bx.H, VV, Ny)
            },
            onGaveUp: VV => {
              (0, ix.reportWorldgenGaveUp)(VV, Ny)
            },
            onMemoryStats: VV => {
              var eV;
              null === (eV = oy) || void 0 === eV || eV.noteWorldgen(VV)
            },
            onMemoryGone: () => {
              var VV;
              null === (VV = oy) || void 0 === VV || VV.worldgenGone()
            },
            write: (xV, JV, YV, UV, yV) => {
              Rw(VV, (() => {
                VV.rings.worker.writeWorkerRecord(xV, JV, YV, 0, UV, yV) || VV.crash(bx.H, `a world-gen record of kind ${JV} did not fit the worker-in ring`)
              })), eV()
            }
          })
        }(zV, KV, mV), ay = function(VV, eV) {
          return new wY({
            module: (0, be.y)(),
            loadWorkers: async () => {
              const [{
                createMeshWorker: VV
              }, eV] = await Promise.all([xV.e(47).then((() => xV(54005))), Promise.resolve().then((() => xV(99))).then((VV => {
                let {
                  isMobile: eV
                } = VV;
                return eV()
              }), (() => !1))]);
              return {
                create: VV,
                count: (0, Ge.i)(eV),
                maxKeptLightStates: eV ? 1 : void 0
              }
            },
            write: (xV, JV, YV, UV, yV, pV) => {
              (0, BJ.h)(), Rw(VV, (() => {
                VV.rings.worker.writeWorkerRecord(xV, JV, YV, UV, yV, pV) || VV.crash(bx.p, `a meshing record of kind ${JV} did not fit the worker-in ring`)
              })), eV()
            },
            onWorkerLost: VV => {
              (0, ix.reportWorkerLost)(bx.p, VV, Ny)
            },
            onLightFault: (VV, eV) => {
              (0, ix.reportLightFault)(VV, eV, Ny)
            },
            onStartTimeout: VV => {
              (0, ix.reportWorkerStartTimeout)(bx.p, VV, Ny)
            },
            onMemoryStats: (VV, eV) => {
              var xV;
              null === (xV = oy) || void 0 === xV || xV.noteMeshWorker(VV, eV)
            },
            onMemoryGone: VV => {
              var eV;
              null === (eV = oy) || void 0 === eV || eV.meshWorkerGone(VV)
            },
            fail: (eV, xV) => {
              const JV = () => {
                VV.crash(bx.p, void 0 === xV ? eV : new Error(eV, {
                  cause: xV
                }))
              };
              void 0 !== xV ? hw({
                site: bx.p,
                error: xV
              }, JV) : JV()
            }
          })
        }(zV, KV), xn();
        const HV = (0, NY.r)(Me.clientSideServerUrls.staticUrl, {
            onTableFailed: VV => {
              hw({
                site: ix.MODEL_FEED_SITE,
                error: VV
              }, (() => {}), {
                stillWanted: mV
              })
            },
            packUrl: VV => {
              var eV, xV;
              return null !== (eV = null === (xV = fn()) || void 0 === xV ? void 0 : xV.modelUrl(VV)) && void 0 !== eV ? eV : null
            }
          }),
          uV = function(VV, eV, xV) {
            const JV = xV => {
              var JV, YV;
              return null !== (JV = null === (YV = eV()) || void 0 === YV ? void 0 : YV.drawnUrl(xV)) && void 0 !== JV ? JV : VV.url(xV)
            };
            return (0, PY.n)((0, kY.l)(JV), xV)
          }(HV, (() => Ky), fn),
          sV = new kY.f(uV, (VV => {
            console.warn(`${KU} image ${VV.key.kind}:${VV.key.index}:${VV.key.word} failed`, VV.error)
          }));
        Iy = sV, dy = new tY(zV, uV, ((VV, eV) => {
          void 0 === eV ? console.warn(`${KU} ${VV}`) : Kn(VV, eV)
        }));
        const SV = new TY.h(HV, function(VV, eV) {
          let JV = !1,
            YV = null,
            UV = null;
          const yV = {
              onUnavailable: (xV, JV) => {
                UV ??= hw({
                  site: ix.MODEL_POOL_SITE,
                  error: xV,
                  urls: JV
                }, (() => {
                  (0, ix.reportModelPoolFailure)(xV, VV)
                }), {
                  stillWanted: eV
                })
              },
              onDecoderFailed: (xV, JV) => {
                const YV = () => {
                  (0, ix.reportDracoDecoderFailure)(xV, VV)
                };
                void 0 !== JV ? hw({
                  site: ix.MODEL_POOL_SITE,
                  error: xV,
                  urls: JV
                }, YV, {
                  stillWanted: eV
                }) : YV()
              },
              onWorkerLost: eV => {
                (0, ix.reportWorkerLost)(ix.MODEL_POOL_SITE, eV, VV)
              },
              onModuleRetry: (eV, xV) => {
                (0, ix.reportModelsModuleRetry)(eV, xV, VV)
              }
            },
            pV = xV.e(49).then((() => xV(54011))).then((VV => {
              let {
                pageModelPool: eV
              } = VV;
              if (JV) return null;
              const xV = eV(yV);
              return YV = xV.unlisten, Hy = xV.pool, xn(), xV.pool
            }), (VV => (JV || yV.onUnavailable(VV, void 0), null)));
          return uy = () => {
            var VV;
            JV = !0, null === (VV = YV) || void 0 === VV || VV(), Hy = null
          }, (VV, eV) => pV.then((xV => {
            var JV;
            return null !== (JV = null === xV || void 0 === xV ? void 0 : xV.build(VV, eV)) && void 0 !== JV ? JV : (0, XY.t)(VV, "the model workers did not load")
          })).then((VV => null !== UV && (0, XY.j)(VV) ? UV.then((() => VV)) : VV))
        }(MV, mV), (VV => {
          VV.startup ? (Tw(), hw({
            site: ix.MODEL_FEED_SITE,
            error: VV.error,
            urls: "" === VV.url ? void 0 : [VV.url]
          }, (() => {
            (0, ix.reportModelFailure)(VV, MV)
          }))) : (0, ix.reportModelFailure)(VV, MV)
        }), {
          onWritten: (VV, eV) => {
            sV.glbWritten(VV, eV)
          },
          onTaken: (VV, eV) => {
            sV.glbTaken(VV, eV)
          },
          onPackFileFailed: (VV, eV) => {
            console.warn(`${KU} the texture pack's model file ${VV} failed: the shipped one loads`, eV)
          }
        });
        Ky = SV;
        const IV = new BY.c(zV);
        Py = IV, IV.swap((VV => {
          const eV = () => {
            (0, ix.reportTerrainTextureFailure)(VV, MV)
          };
          if (rQ) return void eV();
          const xV = () => !rQ,
            JV = null === VV.url ? void 0 : [VV.url];
          hw({
            site: bx.E,
            error: VV.error,
            urls: JV
          }, eV, {
            stillWanted: xV
          })
        })).then((VV => {
          null !== VV && (VV || zV.isStopped || console.warn(`${KU} the core refused the terrain textures: terrain draws untextured`), Yp(zV))
        }));
        const ee = new Ie(zV, ((VV, eV) => {
          console.warn(`${KU} ${VV}`, ...void 0 === eV ? [] : [eV])
        }));
        ee.feed(), null !== rV && function(VV, eV, JV, YV, UV, yV) {
          let pV = null,
            nV = null,
            wV = !1;
          const ZV = {
            textures: null,
            stop: () => {
              var VV, eV;
              wV = !0, null === (VV = nV) || void 0 === VV || VV(), null === (eV = pV) || void 0 === eV || eV(), AY.e.setSettled(null), null !== Xy && hQ.clear(Xy)
            }
          };
          Ty = ZV, nV = Hn().follow((nV => {
            null !== nV && Promise.all([xV.e(228), xV.e(52)]).then((() => xV(53974))).then((xV => {
              let {
                PackTextures: vV
              } = xV;
              if (wV || VV.isStopped) return;
              const rV = new vV({
                feed: nV,
                terrain: eV,
                backend: JV,
                stopped: () => VV.isStopped,
                landed: () => {
                  Yp(VV)
                },
                packSwapped: () => {
                  (0, PY.k)(YV), yV.feed((() => async function(VV) {
                    const eV = null === VV ? null : await VV.averageColours;
                    return null === eV ? de() : Se(eV)
                  }(rV.assets))), (0, FY.l)(rV.files()), UV.refresh().then((VV => {
                    null !== VV && console.info(`${KU} texture pack models: ${VV.resent} of ${VV.delivered} files written again, ${VV.refetched} refetched`)
                  }))
                },
                settled: (VV, eV, xV) => {
                  var JV;
                  (AY.e.setSettled({
                    state: VV,
                    files: eV
                  }), function(VV, eV, xV) {
                    const JV = null === VV.gameSource && (0, Cx.h)(VV.pack);
                    if (null === eV) return;
                    const YV = (0, Dx.f)(eV.error),
                      UV = JV ? "settings" : eV.source;
                    QV.h.QZ(Dx.b, {
                      failure: YV,
                      source: UV,
                      pack: ax(VV)
                    }), (0, ix.reportTexturePackKeptOut)(UV, YV, eV.error, xV)
                  }(VV, xV, Ny), null === xV) && function(VV) {
                    const eV = Xy;
                    null !== eV && hQ.apply(eV, VV).then((eV => {
                      eV && VV && console.info(`${KU} the texture pack's animations are in (${Object.keys(VV).length} files)`)
                    }))
                  }(null === (JV = VV.pack) || void 0 === JV ? void 0 : JV.animations)
                },
                settling: () => {
                  AY.e.setSettled(null)
                },
                warn: Kn,
                maxTextureSize: () => Promise.resolve((0, rx.ab)(document.createElement("canvas")))
              });
              ZV.textures = rV, pV = rV.start()
            }), (VV => {
              console.warn(`${KU} the texture pack's terrain didn't load: the built atlas stays`, VV)
            }))
          }))
        }(zV, IV, rV, sV, SV, ee);
        const xe = () => {
            zV.setTextureLayers("")
          },
          Je = VV => {
            (Xe ??= xV.e(65).then((() => xV(54013))).then((VV => {
              let {
                TEXTURE_NAMES: eV
              } = VV;
              return eV
            }), (VV => {
              throw Xe = null, VV
            })), Xe).then((VV => {
              zV.setTextureLayers(VV) || zV.isStopped || (console.warn(`${KU} the core refused the texture names: textured Boxes draw textureNotFound`), xe())
            }), (eV => {
              if (zV.isStopped) return;
              const [xV, ...JV] = VV;
              void 0 === xV ? hw({
                site: ix.TEXTURE_NAMES_SITE,
                error: eV
              }, (() => {
                console.warn(`${KU} the texture names didn't load, so textured Boxes draw textureNotFound`, eV), xe()
              }), {
                stillWanted: mV
              }) : setTimeout((() => {
                Je(JV)
              }), xV)
            }))
          };
        if (Je(wy), null !== rV && !await async function(VV, eV, xV, JV, UV, yV) {
            var pV;
            const QV = (0, rx.P)(xV);
            if (null === QV) return VV.crash(uU, new Error(`this ${JV} build has no openRenderer`)), !1;
            let nV;
            VQ = QV;
            try {
              var wV, ZV, vV, rV;
              const YV = null !== (wV = null === (ZV = jy) || void 0 === ZV ? void 0 : ZV.pagePreviews()) && void 0 !== wV ? wV : null,
                pV = null !== (vV = null === (rV = jy) || void 0 === rV ? void 0 : rV.previewModule(xV)) && void 0 !== vV ? vV : null;
              if (null === YV || null === pV) {
                null === YV || void 0 === YV || YV.endSession(!1), nV = (0, le.d)().sampleCount, await (0, rx.j)(eV, QV, yV, hn, nV, await UV);
                const VV = (0, rx.n)(xV);
                null === VV && console.warn(`${KU} this ${JV} build has no image registry: sky and model images won't show`), (0, EY.h)(VV)
              } else {
                (0, DY.e)() && await (0, OV.p)();
                const xV = (0, DY.J)();
                if (null !== xV) {
                  const eV = (0, kx.o)(QV);
                  return VV.crash(ix.RENDER_RELOAD_SITE, new Error(`${xV}${void 0===eV?"":` (${eV.message})`}`)), !1
                }
                nV = await YV.bindSession(pV, eV, (async VV => (0, rx.x)(QV, uU, yV, VV, hn, await UV)))
              }
            } catch (YV) {
              return VV.crash(uU, YV), !1
            }(function(VV, eV) {
              const xV = VV,
                {
                  requestCapture: JV,
                  takeCapture: YV
                } = xV;
              if ("function" !== typeof JV || "function" !== typeof YV) return;
              const UV = {
                request() {
                  JV.call(xV, eV)
                },
                take() {
                  var VV;
                  return null !== (VV = YV.call(xV)) && void 0 !== VV ? VV : null
                }
              };
              window[LY] = UV
            })(eV, nV), pQ = nV, dp = !0;
            const kV = performance.now();
            return Op.boundAtMs = null !== (pV = (0, DY.N)()) && void 0 !== pV ? pV : kV, Op.indirectHangs = (0, DY.C)(), Op.restoresSkipped = (0, DY.O)(), console.info(`${KU} ${JV} renderer bound at ${Math.round(kV)} ms`), !VV.isStopped
          }(zV, XV, NV, rV, bV, BV)) return null;
        if (null !== rV) {
          var Ye, Ue, ye;
          (0, je.x)(rV);
          const VV = () => !zV.isStopped && Ew();
          xV.e(220).then((() => xV(35189))).then((eV => {
            let {
              devTools: xV
            } = eV;
            zV.isStopped || xV.setHost(function(VV) {
              return {
                tools: gY,
                async downloadScene(eV, xV) {
                  let {
                    width: JV,
                    height: YV,
                    colouring: UV
                  } = xV;
                  "screenshot" === eV && null === UV ? await (0, GY.e)(VV, JV, YV) : console.warn("The Rust client's developer tools take uncoloured screenshots only")
                },
                setAmbientLightIntensity: () => (console.warn("The Rust client's renderer has no ambient light setting"), Promise.resolve()),
                capturePhoto: (eV, xV, JV) => (0, GY.c)(VV, eV, xV, JV)
              }
            }(function(VV, eV) {
              return {
                canvas: VV,
                maxTextureSize: WY,
                zZ: eV,
                resize: (VV, eV, xV) => {
                  (0, Ix.x)(Oe.Gb.Resize, 0, VV / xV, eV / xV, (0, Ix.k)(xV))
                },
                restoreSize: () => {
                  const eV = (0, le.j)(VV);
                  null !== eV && (0, Ix.x)(Oe.Gb.Resize, 0, eV.cssWidth, eV.cssHeight, (0, Ix.k)(eV.renderScale))
                },
                onFrameDrawn: VV => (RY.add(VV), () => {
                  RY.delete(VV)
                })
              }
            }(BV, VV)))
          }), (VV => {
            console.warn(`${KU} the developer tools didn't load: no captures this session`, VV)
          }));
          const eV = "webgpu" === rV && null !== (Ye = null === vV || void 0 === vV || null === (Ue = vV.adapter) || void 0 === Ue ? void 0 : Ue.vendor) && void 0 !== Ye ? Ye : null;
          QQ = {
            backend: rV,
            canvas: BV,
            fallbackReason: null !== (ye = null === vV || void 0 === vV ? void 0 : vV.reason) && void 0 !== ye ? ye : null,
            adapterVendor: eV
          }, On();
          try {
            (0, BJ.o)(rV, BV, eV)
          } catch (YV) {
            (0, BJ.s)(), console.error(`${KU} the quality steps didn't start`, YV)
          }
        }
        const {
          storagePullBreaks: pe,
          splitPassBreaks: Qe
        } = await bV;
        Qe && console.warn(`${KU} split_pass_breaks on: Windows Adreno 7xx (N-103) or ?sceneDepth=off`);
        const ne = (0, dV.f)(vV, (0, De.l)());
        if ((0, OY.o)("webgpuloss")) {
          var we, Ze;
          const VV = {
            backend: rV,
            reason: null !== (we = null === vV || void 0 === vV ? void 0 : vV.reason) && void 0 !== we ? we : null,
            source: null !== (Ze = null === vV || void 0 === vV ? void 0 : vV.source) && void 0 !== Ze ? Ze : null,
            storagePullBreaks: pe,
            noWebGpu: ne.messageKey
          };
          (0, VU.b)((eV => {
            eV.noteWasmPick(VV)
          }))
        }
        const ve = "webgpu" === rV;
        if (Vp = (0, dV.g)(ve ? zV : null, ve && null !== (pV = null === (nV = jy) || void 0 === nV ? void 0 : nV.pagePreviews().Xk) && void 0 !== pV ? pV : null, ne, Kn), WQ) return null;
        if (cV.reserveAtJoin((0, vY.n)(null !== DV && void 0 !== DV ? DV : Gx.h)), zV.isStopped) return null;
        const ke = VV => {
          if (Qp = performance.now(), np = !1, null !== nQ) try {
            nQ.animationFrame(VV)
          } catch (YV) {
            xw(YV)
          }
          if (function(VV, eV) {
              return eV && !WQ && !vp && Bw() && Ew() && VV.framePaces(performance.now())
            }(zV, XQ)) {
            if (zV.writePendingInput(), (0, WV.d)(VV, ww), Vw(!1, VV), null !== nQ) try {
              nQ.framePaced()
            } catch (YV) {
              xw(YV)
            }
            requestAnimationFrame(ke)
          } else nw(zV, XQ, "budget") && ((0, Ce.e)(zV.lastFrameKind) && Ew() && (0, WV.d)(VV, ww), Vw(XQ && FQ, VV), TQ.frame(zV.lastFrameKind, XQ && Ew(), VV), PQ.frame(zV.lastFrameKind, XQ && Ew()), (0, Ce.b)(zV.lastFrameKind) && De.E.drew(), Nw(zV), cV.afterFrame(), requestAnimationFrame(ke))
        };
        requestAnimationFrame(ke);
        return function(VV) {
          if (VV.has("inputLog") && (0, XJ.e)((VV => {
              let {
                action: eV,
                down: xV,
                press: JV
              } = VV;
              console.info(`${zJ} input ${eV} ${xV?"down":"up"} press ${JV} at ${performance.now().toFixed(1)}`)
            })), VV.has("inputDump")) {
            const VV = [];
            WJ = VV, Object.assign(window, {
              bloxdInputDump: () => VV.join("\n")
            })
          }
        }(new URLSearchParams(window.location.search)), Ly = function(VV) {
          let eV = null;
          const xV = () => {
              null !== eV && (clearInterval(eV), eV = null)
            },
            JV = () => {
              document.hidden ? eV ??= setInterval((() => {
                aw(VV) || xV()
              }), ny) : xV()
            };
          return document.addEventListener("visibilitychange", JV), JV(), () => {
            xV(), document.removeEventListener("visibilitychange", JV)
          }
        }(zV), zV
      }(eV).then((VV => {
        var eV;
        (JV(Ny), Gy(null !== VV), null !== VV && (qV = performance.now()), My(VV), null === VV) ? null === (eV = jy) || void 0 === eV || eV.pagePreviews().endSession(null === (0, be.r)()): Jp("booted")
      }), (VV => {
        JV(Ny), Gy(!1), My(null), Pw({
          site: sU,
          error: VV,
          header: null
        }, Ny)
      }))
    }

    function cQ() {
      const VV = Xy;
      null !== VV && gQ().then((eV => {
        let {
          pageBuiltInAnimationPack: xV
        } = eV;
        xV().provide(VV)
      }), (VV => {
        console.warn(`${KU} the built-in animation pack's chunk did not load: lifeforms stay in their rest pose`, VV)
      }))
    }
    const hQ = new class {
      constructor(VV) {
        this.deps = VV, this.latest = 0, this.hn = null
      }
      apply(VV, eV) {
        return this.load(VV, eV, 0)
      }
      async load(VV, eV, xV) {
        var JV;
        const YV = ++this.latest,
          UV = this.deps.compiler;
        if (void 0 === eV || null === eV || "object" !== typeof eV || 0 === Object.keys(eV).length || null === UV) return this.drop(VV), !1;
        if ((null === (JV = this.hn) || void 0 === JV ? void 0 : JV.module) === VV && (0, Qx.Xd)(this.hn.files, eV)) return !1;
        try {
          const [xV, JV] = await Promise.all([UV(), this.deps.builtIns()]);
          if (YV !== this.latest) return !1;
          const yV = await xV(eV, vx, {
            builtIns: JV
          });
          if (YV !== this.latest) return !1;
          const pV = this.call(VV, yV);
          if (void 0 === pV) throw new Zx("the compiled animations didn't read against the built-in pack");
          return this.hn = {
              module: VV,
              files: eV
            },
            function(VV) {
              for (let eV = 0; eV + 2 < VV.length; eV += 3) {
                ("error" === VV[eV] ? console.error : console.warn)(`Animation for the texture pack: ${VV[eV+1]}: ${VV[eV+2]}`)
              }
            }(pV), !0
        } catch (pV) {
          var yV;
          if (YV !== this.latest) return !1;
          this.drop(VV), 0 === xV && this.deps.warn("the texture pack's animations didn't load: lifeforms play the built-in ones", pV);
          const JV = (null !== (yV = this.deps.retryAfterMs) && void 0 !== yV ? yV : wx)[xV];
          return void 0 === JV || pV instanceof Zx || (0, nx.j)(VV) || setTimeout((() => {
            YV === this.latest && this.load(VV, eV, xV + 1)
          }), JV), !1
        }
      }
      call(VV, eV) {
        try {
          return VV.PYV(eV)
        } catch (xV) {
          throw (0, nx.n)(VV, xV), xV
        }
      }
      clear(VV) {
        this.latest++, this.drop(VV)
      }
      drop(VV) {
        const eV = this.hn;
        if (this.hn = null, (null === eV || void 0 === eV ? void 0 : eV.module) === VV && !(0, nx.j)(VV)) try {
          this.call(VV, null)
        } catch {}
      }
    }({
      compiler: Yx.e,
      builtIns: async () => {
        const {
          pageBuiltInAnimationPack: VV
        } = await gQ();
        return VV().whenSet()
      },
      warn: Kn
    });
    async function lQ(VV, eV) {
      let JV = !1;
      await LQ({
        matchmake: async () => {
          const {
            guestJoinTarget: YV,
            guestJoinWithPack: UV
          } = await xV.e(300).then((() => xV(53954)));
          return JV ? YV(VV, eV, sn()) : (JV = !0, UV(VV, eV, (eV => Sn(VV, eV)), sn))
        },
        onFailure: VV => {
          (0, ix.showJoinFailure)(VV, Ny)
        },
        rejoin: Un,
        invalidateTrafficCode: yn
      })
    }
    async function LQ(VV) {
      let {
        matchmake: eV,
        onFailure: xV,
        rejoin: YV,
        invalidateTrafficCode: UV,
        pageReady: yV,
        signal: pV
      } = VV;
      const QV = () => !0 === (null === pV || void 0 === pV ? void 0 : pV.aborted);
      let nV;
      const wV = AY.e.rejoinHold();
      Np = null, (0, mx.f)();
      const ZV = (0, lx.bb)("wasm", Gw);
      let vV = !1,
        rV = performance.now();
      try {
        if (!await Wy) return {
          kind: "stopped"
        };
        if (QV()) return {
          kind: "pJ"
        };
        DQ().catch((() => {}));
        let VV = await eV();
        var FV, TV;
        if (rV = performance.now(), !QV()) zw(null !== (FV = null === (TV = VV.target.session) || void 0 === TV ? void 0 : TV.gameNameWithVariation) && void 0 !== FV ? FV : null);
        const xV = () => performance.now() - VV.matchedAt <= VV.freshMs,
          JV = mQ(VV.target).catch((() => {}));
        xV() && !QV() && (nV = new pY(VV.target, {
          signal: pV
        }));
        const UV = performance.now();
        if (null === await zy) return {
          kind: "stopped"
        };
        var PV, AV;
        if (function(VV) {
            var eV, xV;
            if (bV.b.markGameEngineConstructed(), tV) return;
            tV = !0;
            const JV = Math.max(VV, null !== (eV = BV) && void 0 !== eV ? eV : VV);
            (0, EV.k)("ready", Math.max(0, (null !== (xV = jV) && void 0 !== xV ? xV : JV) - JV) / 1e3)
          }(UV), !QV())
          if (null !== jV && null !== qV ? ((0, kV.s)("wasm_loaded", jV), (0, kV.s)("wasm_core_ready", qV)) : console.warn("[bloxd-wasm-client] a join found the core before boot marked its steps"), VV.target.session && (0, QU.b)(VV.target.session.gameNameWithVariation)) null === (PV = iy) || void 0 === PV || PV.prestart();
        if (await JV, !xV() && !QV()) null === (AV = nV) || void 0 === AV || AV.rematched(), VV = await eV(), rV = performance.now();
        if (QV()) return {
          kind: "pJ"
        };
        const wV = await async function(VV) {
          var eV, xV, JV;
          let {
            signal: YV,
            rejoin: UV = null,
            early: yV,
            pageReady: pV
          } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (null !== YV && void 0 !== YV && YV.aborted) throw new DOMException("the join was left", "AbortError");
          const QV = (nV = hp, wV = performance.now(), null !== nV && wV - nV < uJ);
          var nV, wV;
          hp = null;
          const ZV = new AbortController,
            vV = null !== (eV = null === (xV = VV.session) || void 0 === xV ? void 0 : xV.gameNameWithVariation) && void 0 !== eV ? eV : null;
          zw(vV), uQ({
            controller: ZV,
            game: vV
          }), lp = null, null === (JV = mp) || void 0 === JV || JV.abort(), mp = null, Hp = !1, sp = null, Sp.clear();
          const rV = () => {
            (0, ze.j)(ZV, (0, ze.g)(YV))
          };
          null === YV || void 0 === YV || YV.addEventListener("abort", rV, {
            once: !0
          });
          try {
            var bV, EV, BV;
            const eV = await zy;
            if (null === eV || eV.isStopped || WQ) throw new Error("no core is running to join a game with");
            if (VV.session && null !== Vp) {
              const eV = await KQ(Vp.join(VV.session.gameNameWithVariation), ZV.signal);
              if ((0, OY.o)("webgpuloss")) {
                const xV = VV.session.gameNameWithVariation,
                  JV = Vp.couldntRunInJoinedGame();
                (0, VU.b)((VV => VV.noteWasmJoin(xV, eV, JV)))
              }
              if (null !== eV) throw new dV.e(eV)
            }
            const [, , , {
              joinRoom: xV
            }] = await KQ(Promise.all([(0, RV.n)(eV), mQ(VV), null === pV || void 0 === pV ? void 0 : pV(), DQ()]), ZV.signal), JV = VV.session, YV = JV ? {
              ...nn,
              attachSocket: eV => {
                const xV = En(eV, VV.endpoint);
                var YV;
                null !== xV && (zp = {
                  conn: xV,
                  info: JV
                }, null === (YV = Gp) || void 0 === YV || YV(JV.playerDbId));
                return xV
              }
            } : nn, nV = await xV(YV, VV, {
              signal: ZV.signal,
              early: yV
            }).catch((VV => {
              throw function(VV) {
                if (!(VV instanceof LV.c)) return VV;
                if ("roomError" === VV.stage && null !== sp) return fQ(new LV.c(VV.message, VV.stage, VV.code, sp), VV);
                const eV = "closed" === VV.stage && null !== Lp ? Sp.get(Lp.conn) : void 0;
                return void 0 === eV ? VV : fQ(new LV.c(VV.message, VV.stage, eV.code, null, VV.socketOpened), VV)
              }(VV)
            }));
            if (Ap !== ZV) throw nV.leave(), new DOMException("the join was left", "AbortError");
            SQ(nV), null === (bV = ay) || void 0 === bV || bV.newGame();
            const wV = function(VV) {
              var eV, xV;
              const {
                session: JV
              } = VV, YV = void 0 === JV ? VV.joinOptions.lobbyName : JV.lobbyName;
              return {
                endpoint: VV.endpoint,
                game: null !== (eV = null === JV || void 0 === JV ? void 0 : JV.gameNameWithVariation) && void 0 !== eV ? eV : VV.roomName,
                lobby: String(null !== YV && void 0 !== YV ? YV : null),
                postCookies: null !== (xV = VV.postCookies) && void 0 !== xV ? xV : null
              }
            }(VV);
            Pp.set(nV, wV), JY(wV);
            const vV = performance.now(),
              rV = {
                conn: nV.conn,
                rejoin: UV,
                game: null !== (EV = null === (BV = VV.session) || void 0 === BV ? void 0 : BV.gameNameWithVariation) && void 0 !== EV ? EV : "",
                joinedAt: vV,
                rejoinedAt: QV ? vV : null,
                overflow: null
              };
            Wp = rV,
              function(VV, eV) {
                An();
                const xV = {
                  endpoint: eV,
                  roomId: VV.seat.room.roomId,
                  heldConn: 0,
                  dropCode: 0,
                  pendingHold: null,
                  resume: new Xx({
                    reconnect: (VV, eV, JV) => async function(VV, eV, xV, JV) {
                      const {
                        roomId: YV,
                        roomToken: UV
                      } = Xn(VV, eV), yV = ty;
                      if (null === yV || yV.isStopped || WQ) throw new Error("no core is running to resume the game on");
                      const {
                        resumeRoom: pV
                      } = await KQ(DQ(), xV), QV = {
                        ...nn,
                        attachSocket: eV => Rp !== VV || 0 === VV.heldConn ? (eV.close(), null) : En(eV, VV.endpoint, !0)
                      };
                      return pV(QV, VV.endpoint, YV, UV, {
                        signal: xV,
                        onAttached: JV
                      })
                    }(xV, VV, eV, JV),
                    releaseSeat: VV => {
                      !async function(VV, eV) {
                        const {
                          roomId: xV,
                          roomToken: JV
                        } = Xn(VV, eV);
                        try {
                          const {
                            leaveHeldSeat: eV
                          } = await DQ();
                          await eV(VV.endpoint, xV, JV)
                        } catch (YV) {
                          console.warn(`${KU} the held seat of a game left while it reconnected couldn't be released`, YV)
                        }
                      }(xV, VV)
                    },
                    isLive: () => Rp === xV && null !== Wp && !WQ,
                    fW: VV => {
                      cp = VV, Pn()
                    },
                    onReconnected: VV => {
                      ! function(VV) {
                        const eV = Tp;
                        if (null !== eV && eV !== VV) {
                          const xV = Pp.get(eV);
                          void 0 !== xV && Pp.set(VV, xV), tQ === eV && (tQ = VV), eV.detach()
                        }
                        SQ(VV)
                      }(VV)
                    },
                    onGaveUp: (VV, eV) => {
                      ! function(VV, eV, xV) {
                        var JV, YV;
                        console.warn(`${KU} gave up reconnecting (${xV.reason}, ${xV.attempts} attempts)`, xV.lastError), (0, ix.reportReconnectGaveUp)(xV, Ny);
                        const UV = null !== (JV = null === (YV = Wp) || void 0 === YV ? void 0 : YV.rejoin) && void 0 !== JV ? JV : null;
                        Nn(VV, "gaveUp"), dQ();
                        const yV = {
                          code: VV.dropCode,
                          name: null,
                          reason: Uy,
                          canReconnect: !eV,
                          automaticallyReconnect: !1,
                          requiresRefresh: !1
                        };
                        Qn(yV, eV ? null : UV, !1, {
                          reasonKey: yy,
                          canPlayAgain: eV
                        })
                      }(xV, VV, eV)
                    }
                  })
                };
                Rp = xV, null !== gp && gp.conn === VV.conn && xV.resume.onInitialInfo(gp)
              }(nV, VV.endpoint), performance.mark(dU), (0, kV.s)("wasm_joined", vV), setTimeout((() => {
                Tp === nV && (0, kV.k)()
              }), 0), cQ(), console.info(`${KU} joined ${VV.roomName} as ${nV.seat.sessionId} at ${Math.round(performance.now())} ms`);
            const jV = lp;
            lp = null, null !== jV && en(rV, jV.mask, jV.frames);
            const qV = Sp.get(nV.conn);
            return Sp.clear(), void 0 !== qV && (SQ(null), pn(nV.conn, qV.code, qV.reason)), nV
          } finally {
            var jV;
            null === YV || void 0 === YV || YV.removeEventListener("abort", rV), Ap === ZV && sQ(Tp, null), (null === (jV = Lp) || void 0 === jV ? void 0 : jV.join) === ZV && (Lp = null)
          }
        }(VV.target, {
          signal: pV,
          rejoin: YV(VV.target),
          early: nV,
          pageReady: yV
        });
        return vV = !0, {
          kind: "joined",
          game: wV
        }
      } catch (XV) {
        if (XV instanceof DOMException && "AbortError" === XV.name || QV()) return {
          kind: "pJ"
        };
        if (WQ) return {
          kind: "stopped"
        };
        if (Hp && (Hp = !1, await UV().catch((VV => {
            console.warn(`${KU} the cached traffic code could not be dropped`, VV)
          }))), null === await zy) return {
          kind: "stopped"
        };
        if (XV instanceof dV.e) return xV(XV, performance.now() - rV), {
          kind: "failed",
          error: XV,
          reloading: !1
        };
        if (XV instanceof LV.c && XV.code === JV.b.wasmClientNotAllowed.code && NQ) return cn("this server refused the wasm client to this account", "refused"), {
          kind: "failed",
          error: XV,
          reloading: !0
        };
        const VV = XV instanceof LV.c && XV.code === JV.b.outdatedVersion.code,
          eV = () => null === Tp,
          YV = await hw({
            site: ix.JOIN_SITE,
            error: XV,
            outdated: VV
          }, (() => {
            xV(XV, performance.now() - rV)
          }), {
            stillWanted: eV
          });
        return {
          kind: "failed",
          error: XV,
          reloading: YV
        }
      } finally {
        var NV;
        vV || ZV.end(), AY.e.releaseHold(wV);
        const VV = null === (NV = nV) || void 0 === NV ? void 0 : NV.release();
        VV && (0, ix.reportUnusedSeat)(VV, Ny)
      }
    }

    function fQ(VV, eV) {
      return VV.stack = eV.stack, VV
    }

    function mQ(VV) {
      return VV.session ? (0, RV.t)(Ay, VV.session.gameNameWithVariation) : Promise.resolve()
    }

    function KQ(VV, eV) {
      return (0, ze.q)(eV), new Promise(((xV, JV) => {
        const YV = () => {
          JV((0, ze.g)(eV))
        };
        eV.addEventListener("abort", YV, {
          once: !0
        }), VV.then((VV => {
          eV.removeEventListener("abort", YV), xV(VV)
        }), (VV => {
          eV.removeEventListener("abort", YV), JV(VV)
        }))
      }))
    }

    function HQ() {
      uQ(null)
    }

    function uQ(VV) {
      var eV, xV, JV;
      (function() {
        const VV = Rp;
        null !== VV && Nn(VV, "left")
      }(), null === gy || gy.left) || (gy.left = !0, null === (JV = (0, RV.k)()) || void 0 === JV || JV.socketLeft(), (0, vV.q)({
        websocketUrl: null
      }));
      Ap && (0, ze.j)(Ap, new DOMException("the join was left", "AbortError")), dQ(null !== VV), null === (eV = Vp) || void 0 === eV || eV.leave();
      const YV = Tp;
      null !== VV && AY.e.setGame(VV.game), sQ(null, null !== (xV = null === VV || void 0 === VV ? void 0 : VV.controller) && void 0 !== xV ? xV : null), null === YV || void 0 === YV || YV.leave(), IQ(0), (0, Ae.f)()
    }

    function sQ(VV, eV) {
      Tp = VV, Ap = eV, null === Tp && null === Ap && AY.e.setGame(void 0)
    }

    function SQ(VV) {
      sQ(VV, Ap)
    }

    function IQ(VV) {
      const eV = ty;
      return null !== vy && !WQ && null !== eV && !eV.isStopped && (!!vy(LV.h, 0, (0, LV.x)(VV)) && (bp = !0, 0 === VV || vp || nw(eV, !1, "all"), !0))
    }

    function dQ() {
      var VV, eV;
      arguments.length > 0 && void 0 !== arguments[0] && arguments[0] || (0, lx.f)();
      const xV = null !== (VV = null === (eV = Wp) || void 0 === eV ? void 0 : eV.overflow) && void 0 !== VV ? VV : null;
      Wp = null, null !== xV && (0, ix.reportEventOverflow)(xV, Ny)
    }

    function OQ() {
      null !== Tp || null !== Ap ? HQ() : Bn()
    }

    function Vn(VV, eV) {
      console.warn(`${KU} the event buffer refused records in ${eV} frames (categories ${VV})`), WQ || (null !== Wp ? en(Wp, VV, eV) : null !== Ap && function(VV, eV, xV) {
        var JV;
        const YV = function(VV, eV) {
          return null === VV ? "drop" : VV.activated ? "keep" : 0 !== (eV & Vx.E.NetSession) ? "fail" : "drop"
        }((null === (JV = Lp) || void 0 === JV ? void 0 : JV.join) === VV ? Lp : null, eV);
        "keep" === YV ? lp = {
          mask: eV,
          frames: xV
        } : "fail" === YV && (0, ze.j)(VV, new Error("the join's net session was lost to an event overflow"))
      }(Ap, VV, eV))
    }

    function en(VV, eV, xV) {
      const JV = VV.overflow ??= {
        frames: 0,
        acks: 0,
        mask: 0,
        outcome: null
      };
      JV.frames += xV, JV.acks++, JV.mask |= eV;
      const YV = function(VV, eV, xV) {
        if (0 === (VV & Vx.E.NetSession)) return "none";
        const JV = null !== eV.rejoinedAt && xV - eV.rejoinedAt < sJ;
        return null === eV.rejoin || JV ? "fail" : "rejoin"
      }(eV, VV, performance.now());
      "none" !== YV && queueMicrotask((() => {
        if (Wp !== VV) return;
        const eV = "rejoin" === YV && performance.now() - fp >= lV.f;
        JV.outcome = eV ? "rejoined" : "failed", Qn(function(VV, eV) {
          return {
            code: 0,
            name: "eventOverflow",
            reason: "Your game fell behind the server.",
            canReconnect: VV,
            automaticallyReconnect: eV,
            requiresRefresh: !1
          }
        }(null !== VV.rejoin, eV), VV.rejoin, eV), HQ(), eV && (hp = performance.now())
      }))
    }

    function xn() {
      NQ && function(VV, eV) {
        let {
          mesh: xV,
          worldgen: JV,
          modelPool: YV
        } = VV;
        "landingPage" === eV ? (null === xV || void 0 === xV || xV.stopWorkers(), null === JV || void 0 === JV || JV.stopWorker(), null === YV || void 0 === YV || YV.stopWorkers()) : ((0, Ve.e)(eV) || "inGame" === eV) && (null === xV || void 0 === xV || xV.restartWorkers(), null === YV || void 0 === YV || YV.startWorkers())
      }({
        mesh: ay,
        worldgen: iy,
        modelPool: Hy
      }, Ve.b.get("gameState"))
    }

    function Jn(VV) {
      XQ = VV, MQ && Yn(MQ, VV)
    }

    function Yn(VV, eV) {
      VV.style.visibility = eV ? "visible" : "hidden"
    }

    function Un(VV) {
      var eV;
      const xV = VV.roomName,
        JV = null !== (eV = VV.joinOptions.lobbyName) && void 0 !== eV ? eV : null;
      return () => {
        lQ(xV, JV)
      }
    }

    function yn() {
      return xV.e(300).then((() => xV(53954))).then((VV => {
        let {
          invalidateGuestTrafficCode: eV
        } = VV;
        return eV()
      })).catch((VV => {
        console.warn(`${KU} the cached traffic code could not be dropped`, VV)
      }))
    }

    function pn(VV, eV, xV) {
      var YV, UV;
      let yV = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (WQ) return;
      if ((null === (YV = Wp) || void 0 === YV ? void 0 : YV.conn) !== VV) return void(null !== Ap && Sp.set(VV, {
        code: eV,
        reason: xV
      }));
      const {
        rejoin: pV,
        game: QV,
        joinedAt: nV
      } = Wp;
      dQ(), An();
      const wV = (0, lV.l)(eV, (0, IJ.f)(VV));
      if (console.info(`${KU} the game's connection closed with code ${eV} (${null!==(UV=wV.name)&&void 0!==UV?UV:"unrecognised"})`), eV === JV.b.gameOrPluginKick.code || yV || (0, ix.reportDisconnect)(wV, Ny, {
          closeReason: xV,
          sinceJoinedMs: performance.now() - nV,
          game: QV
        }), wV.requiresRefresh) {
        const VV = "outdatedVersion" === wV.name,
          xV = new Error(`the game's connection closed with code ${eV}`),
          JV = () => null === Wp && null === Ap;
        return void hw({
          site: ix.JOIN_SITE,
          error: xV,
          outdated: VV
        }, (() => {
          JV() && Qn(wV, null, !1)
        }), {
          stillWanted: JV
        })
      }
      const ZV = wV.canReconnect ? pV : null,
        vV = null !== ZV && wV.automaticallyReconnect && performance.now() - fp >= lV.f;
      Qn(wV, ZV, vV)
    }

    function Qn(VV, eV, xV) {
      var JV;
      let YV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
        reasonKey: null,
        canPlayAgain: !1
      };
      if (zQ) return;
      AY.e.unwantedLeave(xV && null !== eV && 0 === Kp.size), null === (JV = mp) || void 0 === JV || JV.abort();
      const UV = new AbortController;
      mp = UV;
      const yV = null === eV ? null : () => {
        UV.signal.aborted || (UV.abort(), eV())
      };
      if (xV && null !== yV) {
        fp = performance.now();
        const VV = setTimeout(yV, lV.b);
        UV.signal.addEventListener("abort", (() => {
          clearTimeout(VV)
        }))
      }
      const pV = {
        code: VV.code,
        name: VV.name,
        reason: VV.reason,
        reasonKey: YV.reasonKey,
        reconnect: yV,
        reconnecting: xV,
        requiresRefresh: VV.requiresRefresh,
        canPlayAgain: YV.canPlayAgain
      };
      if (Kp.size > 0)
        for (const nV of [...Kp]) try {
          nV(pV)
        } catch (QV) {
          console.error(`${KU} an unwanted-leave listener threw`, QV)
        } else hJ((0, aJ.g)(VV, null !== yV, xV), UV.signal).then((eV => {
          eV && (null !== yV ? yV() : VV.requiresRefresh && (0, OV.l)())
        }))
    }
    const nn = {
      attachSocket: VV => En(VV),
      onConnection: VV => (Ip.add(VV), () => {
        Ip.delete(VV)
      }),
      sendRaw: (VV, eV) => {
        const xV = gy;
        return null !== xV && xV.conn === VV && tw(xV, eV)
      },
      leaveRoom: IQ,
      closeSocket: VV => {
        var eV;
        (null === (eV = gy) || void 0 === eV ? void 0 : eV.conn) === VV && Bn()
      },
      flushNet: jn
    };

    function wn(VV) {
      var eV;
      let {
        aux: xV,
        payload: JV
      } = VV;
      null === (eV = ty) || void 0 === eV || eV.queueOptions(xV, JV)
    }

    function Zn(VV, eV) {
      wn(function(VV, eV) {
        return oY = VV ? {
          preventMovement: eV
        } : null, VV ? cY(eV) : {
          aux: Oe.jc.AdEnd,
          payload: aY
        }
      }(VV, eV))
    }

    function vn(VV) {
      var eV;
      qp = VV, null === (eV = ty) || void 0 === eV || eV.setUiPrefs(VV)
    }

    function rn(VV, eV) {
      Ay.setMaster(VV, eV)
    }

    function kn(VV) {
      var eV;
      tp = VV, null === (eV = ty) || void 0 === eV || eV.setEnvPrefs(VV)
    }

    function bn(VV) {
      var eV;
      Fp = VV, null === (eV = ty) || void 0 === eV || eV.setLookPrefs(VV)
    }

    function En(VV) {
      var eV;
      let xV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new URL(VV.url).origin,
        JV = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      if (VV.readyState === WebSocket.CLOSING || VV.readyState === WebSocket.CLOSED) return console.warn(`${KU} a closing or closed socket can't be attached`), null;
      const YV = ty;
      if (!YV || YV.isStopped) return console.warn(`${KU} no core is running to attach a socket to`), VV.close(), null;
      if (null === (0, RV.k)()) return console.warn(`${KU} the game has not started to attach a socket to`), VV.close(), null;
      if (Up > Oe.D) return console.warn(`${KU} this core has attached all the sockets it can; reload to play on`), VV.close(), null;
      if (bp && !vp && (nw(YV, !1, "all"), YV.isStopped || WQ)) return VV.close(), null;
      Bn();
      const UV = Up++;
      if (!Wn(YV, "open", UV, JV ? Oe.gc.Resume : 0)) return VV.close(), null;
      JV || Pe.c.reset(), Lp = null === Ap ? null : {
        join: Ap,
        conn: UV,
        activated: !1
      }, VV.binaryType = "arraybuffer";
      const yV = new Mx.c((() => {
          ! function(VV, eV) {
            if (gy !== eV || VV.isStopped || null === Fn(eV, Jy)) return;
            eV.detach(), gy = null, tn(VV, eV, Jy, "", !0), eV.ws.close()
          }(YV, pV)
        })),
        pV = {
          ws: VV,
          conn: UV,
          pending: [],
          pendingBytes: 0,
          left: !1,
          resume: JV,
          token: null,
          detach: () => {
            yV.dispose(), VV.removeEventListener("message", QV), VV.removeEventListener("open", nV), VV.removeEventListener("close", wV)
          }
        },
        QV = VV => {
          if (VV.data instanceof ArrayBuffer) {
            var eV;
            const xV = new Uint8Array(VV.data);
            yV.heard(), pV.token = null !== (eV = (0, zx.e)(xV)) && void 0 !== eV ? eV : pV.token,
              function(VV, eV, xV) {
                Rw(VV, (() => {
                  VV.rings.net.writeFrame(eV, xV) || VV.crash(bx.s, `a socket frame of ${xV.byteLength} bytes did not fit the net-in ring`)
                }));
                const JV = VV.rings.net.cursor >= xy;
                !Cw() && (JV || VV.netWrittenSinceFrame >= ey) && nw(VV, !1, document.hidden ? "all" : "budget");
                ow(VV)
              }(YV, UV, xV)
          }
        },
        nV = () => {
          JV || (0, kV.s)("wasm_socket_open", performance.now());
          for (const eV of pV.pending.splice(0)) VV.send(eV);
          pV.pendingBytes = 0
        },
        wV = VV => {
          if (gy === pV && YV.rings.net.cursor > 0 && nw(YV, !1, "all"), gy === pV) {
            if (pV.detach(), gy = null, tn(YV, pV, VV.code, VV.reason) || qn(YV, pV)) return;
            Wn(YV, "close", UV), Tn(UV, pV.left), pn(UV, VV.code, VV.reason)
          }
        };
      return VV.addEventListener("message", QV), VV.addEventListener("open", nV), VV.addEventListener("close", wV), gy = pV, null === (eV = (0, RV.k)()) || void 0 === eV || eV.socketAttached(UV), (0, vV.q)({
        websocketUrl: xV
      }), UV
    }

    function Bn() {
      const VV = gy;
      if (!VV) return;
      const eV = ty,
        xV = VV.resume;
      xV && (jn(), gy !== VV) || (gy = null, VV.detach(), VV.ws.close(), null !== eV && (qn(eV, VV) || xV && tn(eV, VV, Yy)) || (null !== eV && Wn(eV, "close", VV.conn), Tn(VV.conn, VV.left)))
    }

    function jn() {
      const VV = ty;
      null !== VV && !VV.isStopped && !WQ && !vp && VV.rings.net.cursor > 0 && nw(VV, !1, "all")
    }

    function qn(VV, eV) {
      var xV;
      if (!eV.resume) return !1;
      const JV = Rp;
      return null !== JV && null !== eV.token && "" !== eV.token && (JV.pendingHold = {
        conn: eV.conn,
        token: `${JV.roomId}:${eV.token}`
      }), Wn(VV, "close", eV.conn), null === (xV = (0, RV.k)()) || void 0 === xV || xV.socketDetached(eV.conn), !0
    }

    function tn(VV, eV, xV) {
      let JV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "",
        YV = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
      const UV = Fn(eV, xV);
      if (null === UV) return !1;
      const {
        hn: yV,
        token: pV,
        game: QV,
        joinedAt: nV
      } = UV;
      if (!Wn(VV, "close", eV.conn, Oe.G.Held)) return !0;
      console.warn(`${KU} the game's connection ${YV?"went silent":`dropped with code ${xV}`}, holding it`);
      const wV = {
        closeReason: JV,
        sinceJoinedMs: performance.now() - nV,
        game: QV
      };
      return (0, ix.reportDisconnect)((0, lV.l)(xV), Ny, wV, YV ? "silent" : void 0), yV.heldConn = eV.conn, yV.dropCode = xV, yV.pendingHold = {
        conn: eV.conn,
        token: `${yV.roomId}:${pV}`
      }, vp || nw(VV, !1, "all"), !0
    }

    function Fn(VV, eV) {
      const xV = Rp,
        YV = Wp,
        UV = VV.token;
      return null === xV || null === YV || WQ || VV.left || YV.conn !== VV.conn || null === UV || "" === UV ? null : (0, JV.h)(eV) && xV.resume.canHoldSeat() ? {
        hn: xV,
        token: UV,
        game: YV.game,
        joinedAt: YV.joinedAt
      } : null
    }

    function Tn(VV, eV) {
      var xV;
      null === (xV = (0, RV.k)()) || void 0 === xV || xV.closeGame(VV), (0, CY.b)().close(VV), eV || (0, vV.q)({
        websocketUrl: null
      })
    }

    function Pn() {
      const VV = cp;
      if (null === VV) return;
      const eV = (0, RV.k)();
      WQ || null === eV || eV.fW(VV) ? cp = null : performance.now() - Ep.pause >= Qy && (Ep.pause = performance.now(), console.warn(`${KU} the cmd ring had no room for SetPaused(${VV}): written before the next frame`))
    }

    function An() {
      const VV = Rp;
      Rp = null, null === VV || void 0 === VV || VV.resume.dispose()
    }

    function Nn(VV, eV) {
      var xV, JV;
      const {
        heldConn: YV
      } = VV, UV = VV.resume.resumingConn;
      VV.heldConn = 0, VV.pendingHold = null, Rp === VV && (Rp = null), "left" === eV ? VV.resume.leave() : VV.resume.dispose(), 0 === op || (null === (xV = gy) || void 0 === xV ? void 0 : xV.conn) !== op || "left" === eV && (null === (JV = Tp) || void 0 === JV ? void 0 : JV.conn) === op || Gn(op), "gaveUp" === eV && 0 !== UV && Gn(UV), 0 !== YV && "refused" !== eV && (console.info(`${KU} the game held through its drop ${"left"===eV?"was left":"is given up"}`), null === ty || ty.isStopped || Wn(ty, "close", YV), Tn(YV, !1))
    }

    function Xn(VV, eV) {
      const xV = eV.indexOf(":");
      return {
        roomId: xV < 0 ? VV.roomId : eV.slice(0, xV),
        roomToken: eV.slice(xV + 1)
      }
    }

    function Mn(VV) {
      (0, Ex.logClientMeasurement)("join_preload", VV, {
        client: "wasm"
      })
    }

    function zn(VV) {
      var eV;
      gp = VV;
      const xV = VV.replayOffer && ap !== VV.conn;
      Cp = xV ? VV.conn : 0, Dp = xV || ip.has(VV.conn) ? 0 : VV.conn, TV.admitted(), VV.conn === op && (op = 0);
      const JV = Rp;
      null !== JV && (null === (eV = Wp) || void 0 === eV ? void 0 : eV.conn) === VV.conn && JV.resume.onInitialInfo(VV)
    }

    function Gn(VV) {
      var eV;
      const xV = gy;
      (null === xV || void 0 === xV ? void 0 : xV.conn) === VV && (xV.left = !0, null === (eV = (0, RV.k)()) || void 0 === eV || eV.socketLeft(), (0, vV.q)({
        websocketUrl: null
      }), IQ(VV) ? setTimeout((() => {
        gy === xV && Bn()
      }), LV.e) : Bn())
    }

    function Wn(VV, eV, xV) {
      let JV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        YV = !1;
      return Rw(VV, (() => {
        const {
          net: UV
        } = VV.rings;
        YV = "open" === eV ? UV.writeOpen(xV, JV) : UV.writeClose(xV, JV), YV || VV.crash(bx.s, `a socket ${eV} did not fit the net-in ring`)
      })), YV
    }

    function Rn(VV, eV, xV) {
      let JV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      if (an()) return (0, ix.reportUnsupportedFallback)(VV, eV, xV, JV), void cn(`the wasm client can't run here (${xV}; ${eV})`, eV);
      (0, ix.showUnsupported)(VV, "unsupported", xV, JV)
    }
    const gn = 1500;

    function Dn(VV, eV) {
      const xV = 1 === VV.missing.length && VV.missing[0] === rx.e,
        JV = eV ? "blockedAfterLoss" : xV ? "noContext" : "unsupported";
      return {
        decline: JV,
        detail: `No WebGPU or WebGL2, and WebGL1 lacks ${VV.missing.join(", ")}`,
        details: {
          missing: VV.missing.join(",")
        },
        retries: "unsupported" !== JV && an()
      }
    }

    function Cn(VV) {
      console.warn(`${KU} ${VV}: reloading once more onto the wasm client`), (0, DY.r)(), (0, ix.flushCrashReports)(OV.e).then(OV.l, OV.l)
    }

    function an() {
      return NQ && "wasm" !== (0, Fe.e)(window.location.search)
    }

    function cn(VV, eV) {
      console.warn(`${KU} ${VV}: reloading on the JS client`), null !== eV && (0, Fe.G)(eV), (0, Fe.D)(null === eV ? "reloadOntoJs" : "decline");
      const xV = () => {
        (0, OV.h)(Fe.L)
      };
      (0, ix.flushCrashReports)(OV.e).then(xV, xV)
    }

    function hn(VV, eV, xV, JV) {
      return eQ(VV, eV, xV, JV)
    }

    function Ln() {
      null === YQ || null === ty || ty.isStopped || WQ || null !== sy || null === vy || (sy = YQ(vy, Kn, Hn().follow))
    }

    function fn() {
      var VV, eV, xV;
      return null !== (VV = null === (eV = Ty) || void 0 === eV || null === (xV = eV.textures) || void 0 === xV ? void 0 : xV.files()) && void 0 !== VV ? VV : null
    }

    function mn(VV) {
      Hn().follow((eV => {
        null !== eV && Promise.all([Promise.all([xV.e(228), xV.e(52)]).then((() => xV(53989))), (0, DY.R)()]).then((VV => {
          let [{
            followPagePackFiles: xV
          }, JV] = VV;
          const YV = null === JV || (0, rx.q)(JV) ? "webgl" : JV.backend;
          xV(eV, PY.g, YV, (VV => {
            PY.g.setPageFiles(VV)
          }), Kn)
        }), (eV => {
          console.warn(`${KU} the texture pack's files didn't load: the previews draw the shipped ones until the next opens`, eV), VV()
        }))
      }))
    }

    function Kn(VV, eV) {
      console.warn(`${KU} ${VV}`, eV)
    }

    function Hn() {
      return Fy ??= new mY({
        load: VV => Promise.all([xV.e(228), xV.e(66)]).then((() => xV(53994))).then((eV => {
          let {
            startPageTexturePackFeed: xV
          } = eV;
          return xV(Kn, VV)
        })),
        store: ce.i,
        EZ: VV => {
          zy.then((() => {
            (0, ix.reportTexturePackFeedLoadFailure)(VV, Ny)
          }))
        }
      }), Fy
    }
    const un = VV => Hn().follow(VV);

    function sn() {
      return Hn().loaded()
    }
    const Sn = function(VV, eV, xV) {
        let JV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => performance.now(),
          YV = 0;
        return async function(UV, yV) {
          let pV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => !0;
          const QV = ++YV,
            nV = JV() + eV,
            wV = await
          function(VV, eV) {
            let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {};
            return new Promise((JV => {
              const YV = setTimeout((() => {
                JV(null), VV.then((VV => {
                  null !== VV && (VV.joinedWithout(), xV(VV))
                }))
              }), eV);
              VV.then((VV => {
                clearTimeout(YV), JV(VV)
              }))
            }))
          }(VV(UV), eV, (VV => {
            QV === YV && pV() && yV(VV, JV() + eV).catch((VV => {
              xV("the texture pack step after the join failed", VV)
            }))
          }));
          return null === wV ? null : yV(wV, nV)
        }
      }((VV => (0, Ze.l)(VV) ? Hn().request() : Hn().forJoin()), fY.c, Kn),
      In = function(VV, eV) {
        let xV = !1;
        return {
          setGamePackConfirm: VV => {
            xV = null !== VV, eV(VV)
          },
          packStep: (eV, JV, YV) => VV(eV, JV, (() => xV && YV()))
        }
      }(Sn, (VV => {
        Hn().setGamePackConfirm(VV)
      }));

    function dn(VV) {
      In.setGamePackConfirm(VV)
    }

    function On() {
      if (WQ || null !== nQ || null === UQ || null === QQ) return;
      const {
        backend: VV,
        canvas: eV,
        fallbackReason: xV,
        adapterVendor: JV
      } = QQ, YV = UQ;
      UQ = null;
      try {
        nQ = YV({
          backend: VV,
          canvas: eV,
          fallbackReason: xV,
          adapterVendor: JV,
          joinedGame: () => WQ ? null : Tp,
          canSend: () => !WQ && null !== Tp && Tp.conn === Dp,
          inGame: ew,
          shaderPackReach: () => {
            var VV, eV;
            return null !== (VV = null === (eV = Vp) || void 0 === eV ? void 0 : eV.reachInJoinedGame()) && void 0 !== VV ? VV : null
          },
          eE: () => Sy,
          msaa: () => pQ > 1,
          writeCmd: (VV, eV, xV) => null !== vy && vy(VV, eV, xV),
          takeFailedMeshJobs: () => {
            var VV, eV;
            return null !== (VV = null === (eV = ay) || void 0 === eV ? void 0 : eV.takeFailedMeshJobs()) && void 0 !== VV ? VV : 0
          },
          readLoadCounts: VV => {
            var eV, xV;
            return null !== (eV = null === (xV = ty) || void 0 === xV ? void 0 : xV.readLoadCounts(VV)) && void 0 !== eV && eV
          },
          mainStalled: (VV, eV, xV, JV) => {
            (0, ix.reportMainStall)(VV, eV, xV, JV, Ny)
          }
        })
      } catch (UV) {
        console.error(`${KU} the frame telemetry didn't start`, UV)
      }
    }

    function Vw(VV, eV) {
      try {
        var xV, JV, YV;
        const UV = dp && null !== (xV = null === (JV = ty) || void 0 === JV || null === (YV = JV.lastHeader) || void 0 === YV ? void 0 : YV.renderPending) && void 0 !== xV ? xV : 0;
        (0, BJ.d)(eV, VV, ew() && !(null !== oY), UV)
      } catch (UV) {
        (0, BJ.s)(), console.error(`${KU} the quality steps stopped`, UV)
      }
    }

    function ew() {
      return null !== Tp && tQ === Tp && !WQ
    }

    function xw(VV) {
      const eV = nQ;
      nQ = null;
      try {
        null === eV || void 0 === eV || eV.stop()
      } catch {}
      console.error(`${KU} the frame telemetry threw: it stops`, VV)
    }

    function Jw(VV) {
      var eV, xV, JV, YV;
      if ((0, CY.b)().fire(VV), "message" === VV.type) {
        if (rp++, VV.yZ === Oe.Uc.ERROR && null !== Ap) {
          var UV;
          const {
            text: eV,
            dropsCache: xV
          } = (0, lV.q)((new TextDecoder).decode(VV.payload));
          Hp ||= xV, (null === (UV = Lp) || void 0 === UV ? void 0 : UV.conn) === VV.conn && (sp = eV)
        } else if (VV.yZ === Vx.mc.ResumeComplete) {
          var yV;
          ap = VV.conn, VV.conn === Cp && (Cp = 0, Dp = ip.has(VV.conn) ? 0 : VV.conn), null === (yV = Rp) || void 0 === yV || yV.resume.onResumeComplete(VV.conn)
        }
        return
      }
      VV.phase === Oe.H.Left ? kp = VV.conn : VV.phase === Oe.H.Activated && (null === (eV = Lp) || void 0 === eV ? void 0 : eV.conn) === VV.conn ? Lp.activated = !0 : VV.phase === Oe.H.Resumed ? function(VV) {
        var eV, xV;
        op = VV;
        const JV = Rp;
        if (null === JV || 0 === JV.heldConn || (null === (eV = gy) || void 0 === eV ? void 0 : eV.conn) !== VV || !gy.resume || null === Wp) return;
        console.info(`${KU} the game resumed on conn ${VV}, waiting for its InitialInfo`);
        const YV = JV.heldConn;
        JV.heldConn = 0, gy.resume = !1, Wp.conn = VV, (null === (xV = zp) || void 0 === xV ? void 0 : xV.conn) === YV && (zp = {
          conn: VV,
          info: zp.info
        }), Pe.c.apply({
          shopInfo: null,
          _shopVersion: ve.e
        })
      }(VV.conn) : VV.phase === Oe.H.Held ? function(VV) {
        var eV;
        const xV = Rp,
          JV = null !== (eV = null === xV || void 0 === xV ? void 0 : xV.pendingHold) && void 0 !== eV ? eV : null;
        if (null !== xV && null !== JV && JV.conn === VV) return xV.pendingHold = null, xV.heldConn = VV, op = 0, console.warn(`${KU} the core holds the game, reconnecting`), void xV.resume.onDropped(JV.token);
        if (VV === op) {
          op = 0;
          const eV = ty;
          null === eV || eV.isStopped || (console.info(`${KU} the core held again a resumed game the shell ended before its InitialInfo: closing it again`), Wn(eV, "close", VV))
        }
      }(VV.conn) : VV.phase === Oe.H.Closed && (null === (xV = Rp) || void 0 === xV || null === (JV = xV.pendingHold) || void 0 === JV ? void 0 : JV.conn) === VV.conn && (Rp.heldConn === VV.conn ? function(VV) {
        const eV = VV.heldConn,
          xV = VV.dropCode;
        Nn(VV, "refused"), console.info(`${KU} the core didn't hold the game through its drop: it hadn't started`), queueMicrotask((() => {
          Tn(eV, !1), pn(eV, xV, "", !0)
        }))
      }(Rp) : Rp.pendingHold = null), VV.phase !== Oe.H.Held && VV.phase !== Oe.H.Left && VV.phase !== Oe.H.Closed || (ip.add(VV.conn), VV.conn === Dp && (Dp = 0));
      const pV = Object.keys(Oe.H).find((eV => Oe.H[eV] === VV.phase)),
        QV = 0 === VV.code ? "" : ` (code ${VV.code})`;
      console.info(`${KU} conn ${VV.conn}: ${null!==pV&&void 0!==pV?pV:VV.phase}${QV}, ${rp} raw messages so far`), (null === (YV = Tp) || void 0 === YV ? void 0 : YV.conn) !== VV.conn || VV.phase !== Oe.H.Left && VV.phase !== Oe.H.Closed || SQ(null), Mp !== VV.conn || VV.phase !== Oe.H.Left && VV.phase !== Oe.H.Closed || (Mp = null, null === Tp && null === Ap && AY.e.setGame(void 0));
      for (const wV of [...Ip]) try {
        wV(VV.conn, VV.phase, VV.code)
      } catch (nV) {
        (0, ex.o)(nV, `${KU} a connection listener threw`)
      }
    }
    const Yw = 9e4,
      Uw = 1e3;

    function yw() {
      (0, DY.r)(), AQ.forget(), null === Tp && null === Ap || (0, ux.g)(), queueMicrotask((() => {
        try {
          Tw()
        } catch (VV) {
          console.warn(`${KU} stopping before the reload threw`, VV)
        }(0, ix.flushCrashReports)(OV.e).then(OV.l, OV.l)
      }))
    }

    function pw() {
      const VV = ty;
      null === VV || VV.isStopped || null === gy || vp || !VV.hasPendingCommands() || nw(VV, !1, "budget")
    }

    function Qw(VV) {
      var eV;
      const xV = Tp;
      VV.persisted || null === xV || (null === (eV = gy) || void 0 === eV ? void 0 : eV.conn) !== xV.conn || gy.left || xV.leave()
    }

    function nw(VV, eV, JV) {
      let YV = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const UV = vp;
      vp = !0;
      try {
        const UV = VV.rings.net.cursor >= xy;
        UV && "all" !== JV && !document.hidden && Aw("backlog", `a shown tab's net-in is ${VV.rings.net.cursor} bytes behind: one frame reads it all`);
        return function(VV, eV, JV, YV) {
          var UV, yV, pV, QV;
          if (WQ) return !1;
          if (Rw(VV, Zw), WQ || VV.isStopped) return !1;
          jw() && Jp("modelsIn");
          Pn(), yp = performance.now(), kp = null, bp = !1, (0, WV.J)(), null === (UV = fy) || void 0 === UV || UV.beforeFrame(), RJ(yp, VV), (0, WV.C)(yp, vw), Zp = !0;
          const nV = eV && Bw();
          let wV;
          try {
            wV = VV.frame(yp, nV, JV)
          } finally {
            Zp = !1
          }
          if (!wV) return !1;
          yQ.observe(null !== (yV = null === (pV = VV.lastHeader) || void 0 === pV ? void 0 : pV.chunksCancelled) && void 0 !== yV ? yV : 0);
          const ZV = VV.lastFrameKind,
            vV = (0, Ce.b)(ZV);
          (function(VV) {
            null !== yU && yU.afterFrame(performance.now(), VV)
          })(vV), null === (QV = wQ) || void 0 === QV || QV.frame(VV, yp, ZV), eV && (FQ = vV);
          vV && (0, ge.d)(yp);
          if (null !== nQ) try {
            nQ.frameRan(VV, yp, performance.now(), ZV)
          } catch (bV) {
            xw(bV)
          }
          "drawn" === ZV && Ew() && function() {
            for (const VV of [...RY]) VV()
          }();
          VV.forEachNetOut(qw);
          const rV = gy;
          null !== kp && (null === rV || void 0 === rV ? void 0 : rV.conn) === kp && tw(rV, LV.k);
          bw(VV),
            function(VV) {
              const eV = 0 !== (VV.headerWord(Vx.Q.LoadSteps) & Vx._.JoinPreload);
              eV !== Xp && (Xp = eV, (0, ix.setCrashAdPreload)(eV), (0, lx.S)())
            }(VV), eV && function(VV) {
              var eV, JV, YV;
              if (null === Tp || !Bw()) return;
              const UV = VV.headerWord(Vx.Q.LoadSteps);
              null === qQ || tQ === Tp && !qQ.frame(yp, 0 !== (UV & Vx.cb.TerrainDrawn)) || (qQ = null);
              if (0 === (UV & Vx._.PlayerBound)) return;
              const yV = VV.lastHeader,
                pV = !dp || 0 === (null === yV || void 0 === yV ? void 0 : yV.renderPending);
              !kQ && pV && (kQ = !0, performance.mark(Vy));
              if (tQ === Tp) return;
              const QV = null !== (eV = null === yV || void 0 === yV ? void 0 : yV.firstView) && void 0 !== eV ? eV : Oe.ib.NotYet;
              if (dp && QV === Oe.ib.NotYet) return;
              if (rQ && (!0 !== (null === (JV = (0, RV.k)()) || void 0 === JV ? void 0 : JV.isSessionLive) || !pV)) return;
              tQ = Tp;
              const nV = Tp;
              if (setTimeout((() => {
                  Tp === nV && (0, kV.l)()
                }), 0), null === (YV = Vp) || void 0 === YV || YV.playable(), function() {
                  clearTimeout(Ry), Ry = setTimeout((() => {
                    ew() && iw((VV => {
                      let {
                        prefetchWorldgenWorker: eV
                      } = VV;
                      eV()
                    }))
                  }), Zy)
                }(), rQ) return;
              rQ = !0, performance.mark(OU), (0, OY.o)("render") && Promise.all([xV.e(89), xV.e(55)]).then((() => xV(5166))).then((VV => {
                let {
                  renderDebugPlayable: eV
                } = VV;
                eV()
              }), (VV => {
                console.warn("The render debug topic didn't load", VV)
              }));
              const wV = Math.round(performance.now()),
                ZV = VV.readViewQueuedPrograms();
              null !== ZV && (0, kV.s)("wasm_view_links", wV, (0, ke.ub)(ZV));
              const vV = null === jQ || null === EQ ? 0 : Math.max(0, EQ - jQ),
                rV = null === jQ ? 0 : Math.max(0, wV - jQ),
                bV = dp ? VV.readFirstViewWait(vV, rV) : null;
              null !== bV && (0, kV.q)(bV);
              if (dp && QV !== Oe.ib.Drawn) {
                const eV = QV === Oe.ib.HeldBackstop ? "held_draws" : "long",
                  {
                    cause: xV
                  } = rw(VV);
                if (console.warn(`${KU} playable at ${wV} ms on the first view's ${eV} backstop, ${xV}: it wasn't drawn whole in time`), (0, kV.s)("wasm_view_backstop", wV, `${eV}:${xV}`), "long" === eV) {
                  var EV, BV;
                  const eV = null !== (EV = null === (BV = Wp) || void 0 === BV ? void 0 : BV.game) && void 0 !== EV ? EV : "";
                  qQ = new sx.d((() => {
                    const {
                      cause: xV,
                      census: JV
                    } = rw(VV);
                    (0, ix.reportFirstViewNoTerrain)(eV, xV, JV, Ny), (0, te.q)("noTerrain")
                  }))
                }
              } else console.info(`${KU} playable at ${wV} ms${dp?"":" (no renderer)"}`);
              setTimeout(JQ, 0), (0, Ne.i)().catch((VV => {
                console.error(`${KU} item sprites didn't load, so item particles show the missing texture`, VV)
              })), bY.e.warm()
            }(VV);
          (0, bx.N)(VV, {
            worldgen: iy,
            mesh: ay
          }),
          function(VV) {
            VV.forEachEvent(DJ);
            for (const eV of gJ) try {
              (0, XJ.c)(eV)
            } catch (bV) {
              if ((0, ex.j)(bV)) {
                VV.crashOn(bx.i, bV);
                break
              }
              console.error(`${zJ} an input action listener threw`, bV)
            }
            gJ.length = 0
          }(VV), YV && (0, ie.d)();
          return !VV.isStopped
        }(VV, eV, "all" === JV || UV, YV)
      } finally {
        vp = UV, UV || (pp = performance.now())
      }
    }

    function ww(VV) {
      console.error(`${KU} a frame-start listener threw`, VV)
    }

    function Zw() {
      var VV, eV, xV, JV;
      null === (VV = Ky) || void 0 === VV || VV.drain(vy, ry), null === (eV = Iy) || void 0 === eV || eV.drain(vy), null === (xV = dy) || void 0 === xV || xV.drain(performance.now()), xQ(vy), null === (JV = sy) || void 0 === JV || JV.drain()
    }

    function vw(VV) {
      console.error(`${KU} a before-frame listener threw`, VV)
    }

    function rw(VV) {
      const eV = (0, RV.k)(),
        xV = (0, RV.v)(),
        JV = null === eV || null === xV ? null : xV.readDrawCensus(eV.api);
      return {
        cause: (0, sx.i)(VV.headerWord(Vx.Q.LoadSteps), JV),
        census: JV
      }
    }
    const kw = {
      ChunkRequested: "wasm_chunk_requested",
      ChunkStored: "wasm_chunk_stored",
      MeshLanded: "wasm_mesh_landed",
      PlayerChunk: "wasm_player_chunk",
      TerrainDrawn: "wasm_terrain_drawn"
    };

    function bw(VV) {
      var eV;
      if (rQ) return;
      if (null === EQ && Bw() && (EQ = performance.now()), null === Tp || 0 === (VV.headerWord(Vx.Q.LoadSteps) & Vx._.PlayerBound) ? jQ = null : jQ ??= performance.now(), null === Ap && null === Tp) return;
      null === EQ || BQ || (BQ = !0, (0, kV.s)("wasm_startup_loaded", EQ));
      let xV = 0;
      null !== Tp ? xV = -1 : !0 === (null === (eV = Lp) || void 0 === eV ? void 0 : eV.activated) && (xV = ~Vx.cb.TerrainDrawn);
      const JV = VV.headerWord(Vx.Q.LoadSteps) & xV & ~bQ;
      if (0 === JV) return;
      bQ |= JV;
      const YV = performance.now();
      for (const [UV, yV] of Object.entries(kw)) 0 !== (JV & Vx.cb[UV]) && (0, kV.s)(yV, YV)
    }

    function Ew() {
      return dp && Bw()
    }

    function Bw() {
      return Oy && jw()
    }

    function jw() {
      return null === Ky || Ky.startupDone
    }

    function qw(VV, eV) {
      const xV = gy;
      (null === xV || void 0 === xV ? void 0 : xV.conn) === VV ? tw(xV, eV) : jp++
    }

    function tw(VV, eV) {
      const {
        ws: xV
      } = VV;
      return xV.readyState === WebSocket.OPEN ? (xV.send(eV), !0) : xV.readyState === WebSocket.CONNECTING && VV.pendingBytes + eV.byteLength <= py ? (VV.pending.push(eV.slice()), VV.pendingBytes += eV.byteLength, !0) : (jp++, !1)
    }

    function Fw() {
      return null !== Tp && Ew()
    }

    function Tw() {
      var VV, eV, xV, JV, YV, UV, yV, pV, QV, nV, wV, ZV, vV, rV, kV, bV, EV;
      WQ = !0, TQ.stop(), (0, eU.endLookDebugTake)(), yU = null, An(), (0, WV.G)().unlockPointer(), (0, WV.E)(null), null === (VV = my) || void 0 === VV || VV(), my = null, null === (eV = (0, RV.v)()) || void 0 === eV || eV.followCursorAim(null), (0, ie.A)(), (0, RV.i)(), Ay.stop(), null === (xV = ZQ) || void 0 === xV || xV(), ZQ = null, null === (JV = vQ) || void 0 === JV || JV(), vQ = null, null === (YV = nQ) || void 0 === YV || YV.stop(), nQ = null, (0, Ix.p)(null), null === (UV = Dy) || void 0 === UV || UV(), Dy = null, null === (yV = iy) || void 0 === yV || yV.stop(), iy = null, null === (pV = ay) || void 0 === pV || pV.stop(), ay = null, null !== (QV = Ty) && void 0 !== QV && null !== (nV = QV.textures) && void 0 !== nV && nV.assets && (0, FY.l)(null), null === (wV = Ty) || void 0 === wV || wV.stop(), Ty = null, Py = null;
      const BV = oy;
      oy = null, BV && (BV.stop(), Ww(BV)), null === (ZV = Iy) || void 0 === ZV || ZV.dispose(), Iy = null, null === (vV = dy) || void 0 === vV || vV.dispose(), dy = null, Ky = null, null === (rV = uy) || void 0 === rV || rV(), uy = null, null === (kV = Ly) || void 0 === kV || kV(), Ly = null, null !== wp && (clearTimeout(wp), wp = null), null === (bV = fy) || void 0 === bV || bV.stop(), fy = null, HQ(), AY.e.release(), Bn();
      const jV = sy;
      sy = null;
      try {
        null === jV || void 0 === jV || jV.dispose()
      } catch (qV) {
        console.warn(`${KU} the sky's images didn't release`, qV)
      }(0, EY.h)(null), null === (EV = jy) || void 0 === EV || EV.pagePreviews().endSession(null === (0, be.r)())
    }

    function Pw(VV, eV) {
      var xV, JV;
      const YV = null !== (xV = null === (JV = oy) || void 0 === JV ? void 0 : JV.details()) && void 0 !== xV ? xV : {},
        UV = VV.site === uU || VV.site === sU || VV.site === ix.RENDER_RELOAD_SITE || VV.site === SU ? VV.error instanceof WebAssembly.RuntimeError || VV.error instanceof nx.e : !(0, rx.s)(VV.error) && (0, bx.K)(VV);
      UV && VV.error instanceof Error && (0, be.U)(VV.error);
      const yV = UV || VV.site === bx.w ? (0, ix.readTrap)(VV.error) : null,
        pV = null !== yV && (0, Jx.e)(yV.kind, yV.refusedBytes) ? yV.refusedBytes : 0,
        QV = (0, Wx.q)(),
        nV = null === cy ? (0, vY.t)(function() {
          try {
            return (0, be.x)().buffer.byteLength
          } catch {
            return 0
          }
        }(), pV, QV) : cy.ceilingMayRefuse(pV, QV),
        wV = pV > 0 && !nV && an();
      var ZV;
      if (wV && ((0, Fe.G)("oom"), (0, Fe.D)("decline"), GQ = !0), Tw(), (0, DY.e)()) return AQ.releaseNow(), console.warn(`${KU} the session stopped at ${VV.site} as the page reloads`, VV.error), void((0, rx.s)(VV.error) || (null === (ZV = VV.header) || void 0 === ZV ? void 0 : ZV.lastError) === Oe.M.CoreBusy || (0, ix.reportStoppedCore)(VV, eV, yV, {
        memoryDetails: YV,
        declined: wV
      }));
      (0, ix.showCrash)(VV, eV, yV, {
        memoryDetails: YV,
        declined: wV
      })
    }

    function Aw(VV, eV) {
      const xV = performance.now();
      return !(xV - Ep[VV] < Qy) && (Ep[VV] = xV, console.warn(`${KU} ${eV}`), !0)
    }

    function Nw(VV) {
      const {
        input: eV,
        net: xV,
        worker: JV
      } = VV.rings, YV = VV.optionsDropped, UV = eV.dropped + YV + xV.dropped + JV.dropped + jp;
      UV !== Bp && Aw("dropped", `${UV} records dropped so far (input ${eV.dropped}, options ${YV}, net ${xV.dropped}, worker ${JV.dropped}, net-out ${jp})`) && (Bp = UV)
    }

    function Xw() {
      var VV, eV;
      const xV = (0, hx.b)();
      if (null === xV) return null;
      const JV = (0, Hx.n)(xV);
      return {
        ...JV,
        horizontal: Math.min(JV.horizontal, null !== (VV = null === (eV = oy) || void 0 === eV ? void 0 : eV.shedDistanceInUse()) && void 0 !== VV ? VV : 1 / 0)
      }
    }

    function Mw(VV) {
      var eV, xV;
      return {
        samples: dp ? pQ : null,
        sunShadows: VV,
        renderDistance: null !== (eV = null === (xV = Xw()) || void 0 === xV ? void 0 : xV.horizontal) && void 0 !== eV ? eV : null
      }
    }

    function zw(VV) {
      Np = VV, (0, lx.S)()
    }

    function Gw() {
      var VV, eV, xV;
      const JV = Xw();
      return {
        ...null === (VV = oy) || void 0 === VV ? void 0 : VV.pageKillSnapshot(),
        renderDistance: null !== (eV = null === JV || void 0 === JV ? void 0 : JV.horizontal) && void 0 !== eV ? eV : null,
        renderDistanceVertical: null !== (xV = null === JV || void 0 === JV ? void 0 : JV.vertical) && void 0 !== xV ? xV : null,
        chunkCap: hy,
        budgetBasis: ly,
        renderBackend: (0, DY.G)(),
        adPreload: Xp,
        ...(0, Lx.e)(Np)
      }
    }

    function Ww(VV) {
      var eV;
      console.info(`${KU} wasm memory at the session's end`, VV.details());
      const {
        wasmMainMiB: xV,
        wasmWorkersMiB: JV,
        peakStoredChunks: YV
      } = VV.pageKillSnapshot(), UV = navigator.deviceMemory;
      (0, Ex.logClientMeasurement)("wasm_memory_end", {
        wasmMainMiB: xV,
        wasmWorkersMiB: JV,
        peakStoredChunks: YV
      }, {
        client: "wasm",
        renderBackend: null !== (eV = (0, DY.G)()) && void 0 !== eV ? eV : "none",
        os: (0, fx.getOperatingSystem)(),
        deviceMemory: String(null !== UV && void 0 !== UV ? UV : "unreported")
      })
    }

    function Rw(VV, eV) {
      if (!VV.isStopped) try {
        eV()
      } catch (xV) {
        VV.crash(bx.x, xV)
      }
    }

    function gw() {
      return Cy ??= xV.e(83).then((() => xV(53996))).catch((VV => {
        throw Cy = null, VV
      })), Cy
    }
    async function Dw() {
      const {
        createWorldgenWorker: VV,
        worldgenWorkerReady: eV
      } = await gw();
      return await eV(), VV
    }

    function iw(VV) {
      var eV;
      null === (eV = Cy) || void 0 === eV || eV.then(VV, (() => {}))
    }

    function Cw() {
      return performance.now() - Math.max(pp, Qp) >= ny
    }

    function aw(VV) {
      const eV = document.hidden || np ? "all" : "budget";
      np = !0;
      const xV = nw(VV, !1, eV);
      var JV;
      xV && (Nw(VV), null === (JV = oy) || void 0 === JV || JV.afterFrame());
      return xV
    }

    function ow(VV) {
      VV.isStopped || 0 === VV.rings.net.cursor || Cw() && !aw(VV) || VV.rings.net.cursor > 0 && performance.now() - Qp >= ny / 2 && function(VV) {
        wp ??= setTimeout((() => {
          wp = null, ow(VV)
        }), ny)
      }(VV)
    }

    function hw(VV, eV) {
      return async function(VV, eV, xV) {
        let {
          stop: JV,
          stillWanted: YV,
          beforeReload: UV
        } = xV;
        const yV = await (0, SJ.k)(VV, {
          stillWanted: YV,
          beforeReload: async () => {
            JV(), await Promise.all([(0, ix.flushCrashReports)(OV.e), null === UV || void 0 === UV ? void 0 : UV()])
          },
          reload: OV.l
        });
        return yV || eV(), yV
      }(VV, eV, {
        ...arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        stop: Tw
      })
    }
    let lw = !1;

    function Lw() {
      return lw = !0, async function(VV, eV, JV) {
        const {
          gamePackSource: YV
        } = await xV.e(299).then((() => xV(42371)));
        await In.packStep(VV, ((xV, JV) => xV.packForGame(VV, YV(eV), JV)), JV)
      }(...arguments)
    }

    function fw(VV) {
      ! function(VV, eV) {
        VV((VV => {
          null === VV || void 0 === VV || VV.subscribe((VV => {
            let {
              pack: xV,
              gameSource: JV
            } = VV;
            eV(null === JV || null === xV ? null : {
              pack: xV,
              source: "" === JV ? null : JV
            })
          }))
        }))
      }(un, VV)
    }
    let mw = !1,
      Kw = null,
      Hw = !1,
      uw = !1;

    function sw() {
      var VV;
      mw || (mw = !0, oQ("play", IV), (0, vV.o)(new pZ), pV.gameBridge.attach(hV), eZ().catch((() => {})), (0, RV.z)((VV => {
        ne(VV.setTextHost)
      })), VV = dw, Kp.add(VV), function(VV) {
        for (const eV of ep) VV(eV);
        xp.add(VV)
      }((VV => {
        Iw(Sw[VV])
      })))
    }
    const Sw = {
      booted: UV.i.INITIALISE_NOA,
      texturesIn: UV.i.REGISTRATION,
      modelsIn: UV.i.SETUP_LIFEFORMS
    };

    function Iw(VV) {
      QV.h.QZ("matchmakeAndPlayStepCompleted", {
        step: VV,
        totalSubSteps: 1
      })
    }

    function dw(VV) {
      if (!Hw) return;
      const {
        gameNameWithVariation: eV,
        lobbyName: xV
      } = (0, vV.e)();
      if (VV.code === JV.b.serverUpdating.code) return (new pZ).leaveLive(), void VZ(eV, xV);
      QV.h.QZ("unwantedLeftGame", {
        reason: Ow(VV),
        requiresRefresh: VV.requiresRefresh,
        canReconnect: null !== VV.reconnect,
        automaticallyReconnect: VV.reconnecting,
        canPlayAgain: VV.canPlayAgain,
        gameNameWithVariation: eV,
        lobbyName: xV
      }), (new pZ).leaveLive()
    }

    function Ow(VV) {
      return null !== VV.reasonKey ? {
        translationKey: VV.reasonKey
      } : "gameOrPluginKick" === VV.name ? VV.reason : `You have disconnected from the server.\n${VV.reason}`
    }

    function VZ(VV, eV) {
      var JV;
      JV = (0, nV.F)(VV, eV), Promise.resolve().then((() => xV(1612))).then((VV => {
        let {
          navigatePreserveSearch: eV
        } = VV;
        eV(JV)
      })).catch((VV => {
        console.warn("[bloxd-wasm-client] the page's router didn't navigate: loading the page instead", VV), (0, OV.f)(JV)
      }))
    }

    function eZ() {
      return Kw ??= Promise.all([xV.e(84), xV.e(87), xV.e(85), xV.e(86), xV.e(103), xV.e(100), xV.e(296), xV.e(205), xV.e(246), xV.e(272), xV.e(298), xV.e(53)]).then((() => xV(42308))).then((VV => {
        try {
          VV.attachPlayGameSources()
        } catch (eV) {
          throw console.error("[bloxd-wasm-client] the play sources did not attach", eV),
            function(VV) {
              zy.then((eV => {
                null === eV || eV.isStopped || WQ ? console.warn(`${KU} the play sources threw as they attached, after the client stopped`, VV) : Pw({
                  site: SU,
                  error: VV,
                  header: null
                }, Ny)
              }))
            }(eV), eV
        }
      }), (VV => {
        throw Kw = null, new RV.e(VV)
      })), Kw
    }
    async function xZ(VV, eV) {
      sw(), lw = !0, Hw = !0;
      let xV = {
          place: VV.place,
          matchedAt: VV.matchedAt
        },
        yV = VV.place.gameNameWithVariation;
      const pV = (0, ZV.e)();
      let QV = null;
      const nV = await LQ({
        matchmake: async () => {
          let eV = xV;
          if (xV = null, null === eV) {
            const xV = await VV.rematch();
            if (xV.isError()) throw QV = xV.asError().forward(), new Error(xV.asError().message);
            eV = {
              place: xV.getValue(),
              matchedAt: performance.now()
            }
          }
          yV = eV.place.gameNameWithVariation;
          return {
            target: await (0, mV.f)(VV.userContext, eV.place, sn(), pV),
            matchedAt: eV.matchedAt,
            freshMs: mV.b
          }
        },
        pageReady: eZ,
        onFailure: (VV, eV) => {
          null === QV && function(VV, eV) {
            (0, ix.reportPageJoinFailure)(VV, Ny, eV)
          }(VV, {
            sinceJoinStartMs: eV,
            game: yV
          })
        },
        rejoin: () => () => {},
        invalidateTrafficCode: () => VV.userContext.invalidateTrafficCode(),
        signal: eV
      });
      switch (nV.kind) {
        case "joined":
          if (pV) {
            setTimeout((() => {
              TV.ready()
            }), 0);
            const {
              game: VV
            } = nV;
            (0, ZV.m)((() => {
              VV.endJoinAd() && ((0, kV.m)(), TV.adEnded())
            }))
          }
          return uw || (uw = !0, (0, AV.c)()), Hw ? (Iw(UV.i.CONNECT_TO_GAME_SERVER), Iw(UV.i.SHADER_PACK), function() {
            var VV, eV;
            return null !== (VV = null === (eV = Vp) || void 0 === eV ? void 0 : eV.runsInJoinedGame()) && void 0 !== VV && VV
          }() && (0, PV.e)(VV.userContext, yV).catch((VV => {
            console.error("Failed to report the shader pack session", VV)
          })), function() {
            const VV = function() {
              var VV, eV;
              return null !== (VV = null === (eV = Vp) || void 0 === eV ? void 0 : eV.couldntRunInJoinedGame()) && void 0 !== VV ? VV : null
            }();
            null !== VV && (0, PV.c)(VV)
          }(), YV.e.value(void 0)) : yZ("The server ended the game as it joined");
        case "failed":
          if (!nV.reloading) {
            if (null !== QV) return QV;
            if ((nV.error instanceof LV.n || nV.error instanceof LV.c) && nV.error.code === JV.b.serverUpdating.code) {
              if (eV.aborted) return yZ("Left the game while it loaded");
              const {
                gameNameWithVariation: VV,
                lobbyName: xV
              } = (0, vV.e)();
              return VZ(VV, xV), yZ("The server is updating")
            }
            return nV.error instanceof dV.e ? YV.e.errorWithCode(nV.error.messageKey, UV.i.SHADER_PACK, {
              severity: "medium"
            }) : YV.e.errorWithCode(function(VV) {
              if (VV instanceof LV.u || VV instanceof zV.d) return VV.message;
              if (JZ(VV)) return (0, lV.n)(VV.code, VV.serverText);
              return lV.i
            }(nV.error), UV.i.CONNECT_TO_GAME_SERVER, {
              error: YZ(nV.error) ? nV.error : void 0,
              severity: UZ(nV.error),
              gameServerUnreachable: (0, fV.c)(nV.error),
              joinFailure: (0, fV.g)(nV.error),
              rematch: (0, XV.d)(nV.error),
              gameRefused: (0, MV.b)(nV.error)
            })
          }
          return yZ("Reloading into the new build");
        case "stopped":
          return yZ("The game client stopped, and shows why");
        case "pJ":
          return yZ("Left the game while it loaded")
      }
    }

    function JZ(VV) {
      return VV instanceof LV.n || VV instanceof LV.c && "attach" !== VV.stage
    }

    function YZ(VV) {
      return !(VV instanceof LV.u) && !JZ(VV) && void 0 === (0, fV.c)(VV)
    }

    function UZ(VV) {
      return JZ(VV) ? VV instanceof LV.c && (0, lV.l)(VV.code).requiresRefresh ? "medium" : "low" : YZ(VV) || VV instanceof LV.u ? "medium" : "low"
    }

    function yZ(VV) {
      return YV.e.errorWithCode(VV, UV.i.CONNECT_TO_GAME_SERVER, {
        severity: "low",
        pJ: !0
      })
    }
    class pZ {
      leave(VV) {
        if ((0, GV.b)()) {
          var eV, xV;
          if ((0, yV.c)()) return;
          (0, rV.b)(!0 === (null === (eV = (0, GV.l)()) || void 0 === eV || null === (xV = eV.currentViewer) || void 0 === xV ? void 0 : xV.unsavedChanges), VV)
        } else this.leaveLive()
      }
      leaveLive() {
        var VV;
        lw && (null === (VV = sn()) || void 0 === VV || VV.endGamePack());
        if (!Hw) return;
        Hw = !1, (0, NV.g)();
        try {
          var eV;
          null === (eV = (0, RV.v)()) || void 0 === eV || eV.clearWasmCameraScreen()
        } catch (JV) {
          console.error("[bloxd-wasm-client] the camera screen didn't clear", JV)
        }
        const {
          gameNameWithVariation: xV
        } = (0, vV.e)();
        try {
          OQ()
        } finally {
          (0, vV.q)({
            websocketUrl: null
          }), QV.h.QZ("leaveGame", {
            gameNameWithVariation: xV
          }), (0, wV.O)()
        }
      }
      isReplay() {
        return (0, GV.b)()
      }
    }
  },
  42225: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => YV,
      e: () => JV,
      f: () => pV,
      h: () => yV
    });
    const JV = 12e4,
      YV = 3e4,
      UV = {
        hidden: () => "undefined" !== typeof document && document.hidden,
        listen: VV => "undefined" === typeof document ? () => {} : (document.addEventListener("visibilitychange", VV), () => {
          document.removeEventListener("visibilitychange", VV)
        })
      };

    function yV(VV) {
      return `it sent no start within ${Math.round(VV)} ms`
    }
    class pV {
      constructor(VV, eV) {
        let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => performance.now(),
          JV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : UV;
        this.timeoutMs = VV, this.onTimeout = eV, this.now = xV, this.visibility = JV, this.timer = null, this.counted = 0, this.step = null, this.unlisten = void 0, this.unlisten = JV.listen((() => {
          this.onVisibility()
        })), JV.hidden() || this.next()
      }
      cancel() {
        this.pause(), this.unlisten()
      }
      onVisibility() {
        this.visibility.hidden() ? (this.counted += this.credit(), this.pause()) : null === this.timer && this.next()
      }
      credit() {
        const VV = this.step;
        return null === VV ? 0 : Math.min(this.now() - VV.at, VV.ms)
      }
      pause() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null), this.step = null
      }
      next() {
        const VV = this.timeoutMs - this.counted;
        if (VV <= 0) return void this.arm(1e3, (() => {
          this.cancel(), this.onTimeout(this.counted)
        }));
        const eV = Math.min(VV, 5e3);
        this.step = {
          at: this.now(),
          ms: eV
        }, this.arm(eV, (() => {
          this.counted += this.credit(), this.step = null, this.next()
        }))
      }
      arm(VV, eV) {
        this.timer = setTimeout((() => {
          this.timer = null, eV()
        }), VV)
      }
    }
  },
  40918: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => pV
    });
    var JV = xV(375),
      YV = xV(1099);
    const UV = new Set(["bingo", "buildAFactory2", "classic", "greenville", "testGym"]),
      yV = new Set(["creativeFlat", "skyGrid"]);

    function pV(VV) {
      const eV = (0, JV.Pb)(VV);
      return "greenville" === eV ? !(0, JV.Lb)(VV) : "classic" !== eV ? UV.has(eV) : !(0, YV.l)(VV) && !yV.has((0, JV.Lb)(VV))
    }
  },
  38890: (VV, eV, xV) => {
    function JV(VV) {
      return "string" !== typeof VV || 2 !== VV.length && ":" !== VV[2] ? null : VV[0] + VV[1]
    }
    xV.d(eV, {
      A: () => bV,
      b: () => EV,
      c: () => TV,
      d: () => FV,
      f: () => PV,
      j: () => pV,
      l: () => yV,
      p: () => UV,
      s: () => QV,
      w: () => BV
    });
    const YV = ["op:ytInitialPlayerResponse.adPlacements", "op:ytInitialPlayerResponse.playerAds", "op:ytInitialPlayerResponse.adSlots", "op:playerResponse.adPlacements", "op:playerResponse.playerAds", "op:playerResponse.adSlots"];

    function UV(VV) {
      if (function(VV) {
          for (let eV = 0; eV < YV.length; eV++)
            if (VV === YV[eV]) return !0;
          return !1
        }(VV)) return !1;
      const eV = JV(VV);
      return "op" === eV || "ep" === eV || "wi" === eV || "pp" === eV || "fp:call" === VV || "fp:t" === VV
    }

    function yV(VV) {
      return "fp" === JV(VV) && !UV(VV)
    }

    function pV(VV) {
      if ("string" !== typeof VV) return !1;
      return "o" === VV[0] && "p" === VV[1] && (2 === VV.length || ":" === VV[2]) || "fp:call" === VV || "2" === VV || "t" === VV || "a" === VV
    }

    function QV(VV, eV) {
      return `~${function(VV){return VV.length<2?VV:":"===VV[1]?VV[0]:VV[0]+VV[1]}(eV)}~${VV}`
    }
    const nV = 200;

    function wV(VV) {
      let eV = VV.length - 1;
      for (let xV = 0; xV < 2; xV++) {
        const xV = eV;
        for (; eV >= 0 && VV[eV] >= "0" && VV[eV] <= "9";) eV--;
        if (eV < 0 || eV === xV || ":" !== VV[eV]) return -1;
        eV--
      }
      return eV + 1
    }

    function ZV(VV) {
      return "unknown" === VV || wV(VV) >= 0
    }

    function vV(VV, eV) {
      return VV[eV] >= "\ud800" && VV[eV] <= "\udbff" && eV + 1 < VV.length && VV[eV + 1] >= "\udc00" && VV[eV + 1] <= "\udfff" ? 2 : 1
    }

    function rV(VV, eV, xV) {
      return 2 === xV ? 4 : VV[eV] <= "\x7f" ? 1 : VV[eV] <= "\u07ff" ? 2 : 3
    }

    function kV(VV, eV, xV) {
      let JV = 0;
      for (; JV < eV;) {
        const eV = vV(VV, JV),
          YV = rV(VV, JV, eV);
        if (YV > xV) break;
        xV -= YV, JV += eV
      }
      return JV
    }

    function bV(VV) {
      let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1 / 0;
      if ("string" !== typeof VV || VV.length > nV || !ZV(VV)) return "t";
      let xV = 2;
      for (let pV = 0; pV < VV.length;) {
        const eV = vV(VV, pV);
        xV += rV(VV, pV, eV), pV += eV
      }
      if (xV <= eV) return `t ${VV}`;
      const JV = wV(VV),
        YV = eV - 2 - (VV.length - JV);
      if (YV < 0) return "t";
      const UV = kV(VV, JV, YV);
      let yV = "t ";
      for (let pV = 0; pV < UV; pV++) yV += VV[pV];
      for (let pV = JV; pV < VV.length; pV++) yV += VV[pV];
      return yV
    }
    const EV = 62;

    function BV(VV) {
      let eV = "so:";
      const xV = kV(VV, VV.length, EV - eV.length);
      for (let JV = 0; JV < xV; JV++) eV += VV[JV];
      return eV
    }
    const jV = "BABYLON ",
      qV = "DECODE ",
      tV = "BABYLON@ ";

    function FV(VV) {
      return BV(jV + VV)
    }

    function TV(VV, eV) {
      return BV(tV + VV + " " + eV)
    }

    function PV(VV) {
      return BV(qV + VV)
    }
  },
  42130: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => JV
    });
    const JV = {
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
  39134: VV => {
    VV.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAKUlEQVQYGWM8CwQMeAATHjmw1JBQwAh06v+LFy8yvH//noGXl/ccuq8A/vQKd00yOdIAAAAASUVORK5CYII="
  },
  39122: VV => {
    VV.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAALUlEQVQYGWM8CwQMeAATHjmw1JBQwAh06v8DBw4wCAoKMnBzczN8/PjxHLLPAORwCnfkvOdNAAAAAElFTkSuQmCC"
  },
  39143: VV => {
    VV.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAKUlEQVQYGWM8CwQMeAATHjmw1JBQwAh06v8DBw4wCAoKMvz58+ccuq8A8vQKd2AxC9MAAAAASUVORK5CYII="
  },
  39113: VV => {
    VV.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAANUlEQVQYGWM8CwQMeAATHjmw1JBQAHLp/wMHDvy/ePHi/4CAgP937tz5Ly6u+5/P3uw/KAgAgjwWhHm22JoAAAAASUVORK5CYII="
  },
  39130: VV => {
    VV.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAKUlEQVQYGWM8CwQMeAATHjmw1JBQwAh06v8DBw4wCAoKMvz58+ccuq8A8vQKd2AxC9MAAAAASUVORK5CYII="
  },
  39919: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => UV
    });
    var JV = xV(3194);
    const YV = ["none", "idle", "now"];

    function UV() {
      const VV = () => (0, JV.D)();
      return {
        memoryBytes: () => (0, JV.x)().buffer.byteLength,
        reserveUpFront: eV => VV().fZ(eV),
        reserveAhead: eV => VV().LZ(eV),
        setCeiling: eV => {
          VV().mZ(eV)
        },
        lowWater: () => YV[VV().lZ()] ?? "none",
        stats: () => function(VV) {
          const eV = new Uint32Array((0, JV.x)().buffer, VV, 17),
            xV = VV => eV[VV] ?? 0,
            YV = VV => ({
              upFront: xV(VV),
              ahead: xV(VV + 1),
              onDemandInFrame: xV(VV + 2),
              onDemand: xV(VV + 3)
            });
          return {
            memoryBytes: xV(0),
            initialBytes: xV(1),
            liveBytes: xV(2),
            peakLiveBytes: xV(3),
            headroomBytes: xV(4),
            unusedBytes: xV(5),
            ceilingBytes: xV(6),
            reservesRefused: xV(7),
            grows: YV(8),
            grownBytes: YV(12),
            allocationsRefused: xV(16)
          }
        }(VV().KZ()),
        takeBallast: () => VV().HZ(),
        takePressure: () => VV().uZ()
      }
    }
  },
  5561: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => pV,
      d: () => yV,
      f: () => JV,
      j: () => bV,
      n: () => ZV,
      o: () => YV,
      p: () => UV,
      s: () => nV,
      t: () => wV,
      x: () => vV
    });
    const JV = 5;

    function YV(VV) {
      return VV === JV
    }

    function UV(VV) {
      return [...VV.features]
    }
    const yV = 262144,
      pV = 256,
      QV = 256;

    function nV(VV) {
      if ("object" !== typeof VV || null === VV || Array.isArray(VV)) return "The pack has no files.";
      const eV = [];
      for (const [xV, JV] of Object.entries(VV)) {
        if ("string" !== typeof JV) return `${xV} isn't text.`;
        eV.push({
          path: xV,
          source: JV
        })
      }
      return eV.sort(((VV, eV) => ZV(VV.path, eV.path))),
        function(VV) {
          if (0 === VV.length) return "The pack has no .wgsl files.";
          if (VV.length > pV) return `The pack has more than ${pV} .wgsl files.`;
          const eV = new Set;
          for (const {
              path: xV
            }
            of VV) {
            const VV = rV(xV);
            if (null !== VV) return VV;
            if (eV.has(xV)) return `The pack has two files at ${xV}.`;
            eV.add(xV)
          }
          return vV(VV) > yV ? `The pack's .wgsl files are over ${yV/1024} KB in total.` : null
        }(eV) ?? eV
    }

    function wV(VV) {
      const eV = {};
      for (const xV of VV) eV[xV.path] = xV.source;
      return eV
    }

    function ZV(VV, eV) {
      return VV < eV ? -1 : VV > eV ? 1 : 0
    }

    function vV(VV) {
      const eV = new TextEncoder;
      let xV = 0;
      for (const {
          source: JV
        }
        of VV) xV += eV.encode(JV).byteLength;
      return xV
    }

    function rV(VV) {
      if (!VV.toLowerCase().endsWith(".wgsl")) return `${VV} isn't a .wgsl file.`;
      if (VV.length > QV) return `A file path is over ${QV} characters.`;
      if (VV.includes("\\") || /[\u0000-\u001f]/.test(VV)) return `${VV} isn't a valid file path.`;
      return VV.split("/").some((VV => "" === VV || "." === VV || ".." === VV)) ? `${VV} isn't a valid file path.` : null
    }
    const kV = /^(.*)\[rot\[([1-4])$/;

    function bV(VV, eV) {
      let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
      const JV = new Map;
      eV.forEach(((VV, eV) => {
        let {
          numAnimStates: xV,
          animStartIdx: YV
        } = VV;
        for (let UV = 1; UV < xV; UV++) JV.set(YV + UV - 1, eV)
      }));
      const YV = Object.entries(VV),
        UV = new Map;
      for (const [bV, EV] of YV) {
        const VV = kV.exec(bV);
        "1" === VV?.[2] && UV.set(VV[1], EV + 1)
      }
      const yV = VV => {
          const eV = kV.exec(VV);
          return eV && UV.has(eV[1]) ? {
            root: eV[1],
            rotation: Number(eV[2]) - 1
          } : null
        },
        pV = new Set(YV.map((VV => {
          let [eV] = VV;
          return yV(eV)?.root ?? eV
        }))),
        QV = (VV, xV) => {
          const JV = VV.replace(/_?0$/, "");
          return (eV[xV]?.numAnimStates ?? 0) > 1 && !pV.has(JV) ? JV : VV
        },
        nV = new Map;
      for (const [kV, bV] of YV) nV.set(bV, QV(yV(kV)?.root ?? kV, bV));
      const wV = YV.reduce(((VV, eV) => {
          let [, xV] = eV;
          return Math.max(VV, xV + 1)
        }), 0),
        ZV = Array.from({
          length: wV
        }, ((VV, eV) => ({
          id: eV + 1,
          rotation: 0
        }))),
        vV = new Map,
        rV = new Map;
      for (const [kV, bV] of YV) {
        const VV = yV(kV),
          eV = JV.get(bV);
        if (void 0 !== eV) {
          const xV = nV.get(eV);
          rV.set(kV, {
            name: kV,
            texture: xV,
            kind: "frame"
          }), VV && !rV.has(VV.root) && rV.set(VV.root, {
            name: VV.root,
            texture: xV,
            kind: "frame"
          });
          continue
        }
        const xV = nV.get(bV),
          YV = VV?.root ?? kV;
        if (xV !== YV && rV.set(YV, {
            name: YV,
            texture: xV,
            kind: "frame"
          }), VV) {
          const eV = UV.get(VV.root);
          ZV[bV] = {
            id: eV,
            rotation: VV.rotation
          }, vV.set(xV, eV), rV.set(kV, {
            name: kV,
            texture: xV,
            kind: "rotation"
          })
        } else vV.set(xV, bV + 1)
      }
      for (const kV of vV.keys()) rV.delete(kV);
      for (const [kV, bV] of xV) {
        const VV = vV.get(bV);
        void 0 === VV || vV.has(kV) || (vV.set(kV, VV), rV.delete(kV))
      }
      return {
        named: [...vV].sort(((VV, eV) => {
          let [xV] = VV, [JV] = eV;
          return xV < JV ? -1 : xV > JV ? 1 : 0
        })).map((VV => {
          let [eV, xV] = VV;
          return {
            name: eV,
            id: xV
          }
        })),
        aliases: [...rV.values()],
        layers: ZV
      }
    }
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);