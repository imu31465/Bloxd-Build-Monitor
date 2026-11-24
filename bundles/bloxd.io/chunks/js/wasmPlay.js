export const id = 64;
export const ids = [64, 117, 118, 138];
export const modules = {
  39752: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => WT,
      f: () => zT
    });
    const WT = "The world isn't loaded, so no blocks can be seen.",
      zT = "The world isn't loaded, so nothing in it can be seen."
  },
  4778: (TT, UT, mT) => {
    mT.d(UT, {
      e: () => jT
    });
    var WT = mT(25),
      zT = mT(31),
      MT = mT(1388),
      gT = mT(2929);
    const nT = 3e4,
      HT = 1e3;

    function kT() {
      return "visible" === document.visibilityState && "inGame" === WT.b.get("gameState") && (0, MT.u)()
    }

    function jT(TT, UT) {
      (0, gT.v)() || function(TT, UT, mT) {
        let WT = 0;
        const zT = setInterval((() => {
          UT() && (WT += HT, WT >= TT && (clearInterval(zT), mT()))
        }), HT)
      }(nT, kT, (() => {
        UT().then((() => {
          TT(`saved for the player after ${nT/1e3} s of play`), (0, gT.M)(), zT.j.EZ("chat", {
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
  34123: (TT, UT, mT) => {
    function WT(TT, UT) {
      return 0 === TT.length ? 0 : TT[Math.min(TT.length - 1, Math.floor(UT * TT.length))]
    }

    function zT(TT) {
      return TT.toFixed(1)
    }
    mT.d(UT, {
      d: () => zT,
      h: () => WT
    })
  },
  38089: (TT, UT, mT) => {
    mT.d(UT, {
      e: () => kT,
      h: () => jT,
      l: () => iT,
      n: () => qT,
      r: () => fT
    });
    var WT = mT(4778),
      zT = mT(34123),
      MT = mT(2929);
    const gT = 20,
      nT = ["totalMs", "slotMs", "workerMs", "applyMs", "ahead", "inFlight", "fl", "jobMs"];

    function HT(TT) {
      return [...TT].sort(((TT, UT) => TT - UT))
    }
    const kT = [];

    function jT(TT, UT, mT) {
      return `${TT},${UT},${mT}`
    }
    class lT {
      constructor() {
        this.pending = new Map, this.jobs = new Map, this.edits = [], this.nextEdit = 0, this.reported = 0, this.windowStart = performance.now(), this.frames = 0, this.lastFrameAt = 0, this.maxFrameMs = 0, this.jobsSent = 0, this.maxAhead = 0, this.maxCapacity = 0, this.roundTrips = [], this.windowEdits = [], this.outliers = 0, this.gaveUp = 0
      }
      edit(TT, UT) {
        var mT;
        const WT = null !== (mT = this.pending.get(TT)) && void 0 !== mT ? mT : [];
        WT.push({
          editAt: UT,
          meshJobId: 0
        }), this.pending.set(TT, WT)
      }
      frame(TT) {
        this.lastFrameAt > 0 && (this.maxFrameMs = Math.max(this.maxFrameMs, TT - this.lastFrameAt)), this.lastFrameAt = TT, this.frames++, TT - this.windowStart >= 1e3 && this.summarise(TT)
      }
      sent(TT, UT, mT, WT, zT, MT, gT) {
        this.jobs.set(UT, {
          sentAt: gT,
          receivedAt: 0,
          ahead: mT,
          inFlight: WT,
          fl: zT,
          jobMs: 0
        }), this.jobsSent++, this.maxAhead = Math.max(this.maxAhead, mT), this.maxCapacity = Math.max(this.maxCapacity, zT);
        for (const HT of null !== (nT = this.pending.get(TT)) && void 0 !== nT ? nT : []) {
          var nT;
          MT.includes(HT.meshJobId) || (HT.meshJobId = UT)
        }
      }
      received(TT, UT, mT) {
        const WT = this.jobs.get(TT);
        void 0 !== WT && (this.roundTrips.push(mT - WT.sentAt), WT.receivedAt = mT, WT.jobMs = UT)
      }
      failed(TT) {
        this.jobs.delete(TT)
      }
      reassign(TT, UT, mT) {
        this.jobs.delete(UT);
        for (const zT of null !== (WT = this.pending.get(TT)) && void 0 !== WT ? WT : []) {
          var WT;
          zT.meshJobId === UT && (zT.meshJobId = mT)
        }
      }
      applied(TT, UT, mT) {
        const WT = this.jobs.get(UT);
        this.jobs.delete(UT), void 0 !== WT && this.show(TT, WT, mT, (TT => TT.meshJobId === UT))
      }
      emptied(TT, UT) {
        const mT = {
          sentAt: UT,
          receivedAt: UT,
          ahead: 0,
          inFlight: 0,
          fl: 0,
          jobMs: 0
        };
        this.show(TT, mT, UT, (() => !0))
      }
      show(TT, UT, mT, WT) {
        const zT = this.pending.get(TT);
        if (!zT) return;
        const MT = zT.filter((zT => !WT(zT) || (this.record(TT, zT.editAt, UT, mT), !1)));
        MT.length > 0 ? this.pending.set(TT, MT) : this.pending.delete(TT)
      }
      Gp(TT) {
        this.reported += TT, this === pT && this.reported >= gT && null !== BT && (BT(), BT = null)
      }
      record(TT, UT, mT, WT) {
        const zT = {
          totalMs: WT - UT,
          slotMs: mT.sentAt - UT,
          workerMs: mT.receivedAt - mT.sentAt,
          applyMs: WT - mT.receivedAt,
          ahead: mT.ahead,
          inFlight: mT.inFlight,
          fl: mT.fl,
          jobMs: mT.jobMs
        };
        if (this.edits[this.nextEdit] = zT, this.nextEdit = (this.nextEdit + 1) % 500, this.windowEdits.push(zT.totalMs), this.Gp(1), zT.totalMs < 100 || ++this.outliers > 5) return;
        const gT = TT => Math.round(TT);
        (0, MT.m)("remesh", `slow edit (${TT}) shown in ${gT(zT.totalMs)} ms: slot ${gT(zT.slotMs)}, worker ${gT(zT.workerMs)} (${zT.ahead} ahead, ${zT.inFlight}/${zT.fl} in flight; job ${gT(zT.jobMs)}), apply ${gT(zT.applyMs)}`)
      }
      summarise(TT) {
        const UT = (TT - this.windowStart) / 1e3;
        for (const [mT, WT] of this.pending) {
          const UT = WT.filter((UT => TT - UT.editAt <= 1e4));
          this.gaveUp += WT.length - UT.length, this.Gp(WT.length - UT.length), UT.length > 0 ? this.pending.set(mT, UT) : this.pending.delete(mT)
        }
        for (const [mT, WT] of this.jobs) TT - WT.sentAt > (WT.receivedAt > 0 ? 1e4 : 6e4) && this.jobs.delete(mT);
        if (this.jobsSent > 0 || this.roundTrips.length > 0 || this.windowEdits.length > 0 || this.gaveUp > 0) {
          const TT = HT(this.roundTrips),
            mT = HT(this.windowEdits),
            WT = Math.max(0, this.outliers - 5);
          (0, MT.m)("remesh", `${Math.round(this.frames/UT)} fps (longest ${Math.round(this.maxFrameMs)} ms) | ${this.jobsSent} jobs sent, up to ${this.maxAhead} ahead on a worker, capacity ${this.maxCapacity} | round trip p50 ${Math.round((0,zT.h)(TT,.5))} max ${Math.round((0,zT.h)(TT,1))} ms | ${mT.length} edits shown, p50 ${Math.round((0,zT.h)(mT,.5))} max ${Math.round((0,zT.h)(mT,1))} ms${WT>0?`, ${WT} more slow`:""}${this.gaveUp>0?`, ${this.gaveUp} never shown`:""}`)
        }
        this.windowStart = TT, this.frames = 0, this.maxFrameMs = 0, this.jobsSent = 0, this.maxAhead = 0, this.maxCapacity = 0, this.roundTrips = [], this.windowEdits = [], this.outliers = 0, this.gaveUp = 0
      }
      stats() {
        const TT = nT.map((TT => {
          const UT = HT(this.edits.map((UT => UT[TT])));
          return `${TT}: p50 ${Math.round((0,zT.h)(UT,.5))} p90 ${Math.round((0,zT.h)(UT,.9))} max ${Math.round((0,zT.h)(UT,1))}`
        }));
        return [`${this.edits.length} edits`, ...TT].join("\n")
      }
      dump() {
        const TT = this.edits.map((TT => nT.map((UT => Math.round(10 * TT[UT]) / 10)).join(",")));
        return [this.stats(), nT.join(","), ...TT].join("\n")
      }
    }
    class LT {
      constructor(TT, UT) {
        this.log = TT, this.Rl = UT
      }
      edit(TT, UT, mT) {
        const [WT, zT, MT] = this.Rl.Nl.zWT(TT, UT, mT), gT = this.Rl.Nl.lZ.LZ(WT, zT, MT);
        gT && gT.kZ && this.log.edit(jT(WT, zT, MT), performance.now())
      }
      sent(TT, UT, mT, WT, zT) {
        this.log.sent(jT(TT.i, TT.j, TT.k), UT, mT, WT, zT, kT, performance.now())
      }
      received(TT) {
        this.log.received(TT.meshJobId, TT.jobMs, performance.now())
      }
      failed(TT) {
        this.log.failed(TT)
      }
      applied(TT, UT) {
        this.log.applied(jT(TT.i, TT.j, TT.k), UT, performance.now())
      }
    }
    let pT = null,
      BT = null,
      ZT = !1,
      cT = null;

    function vT() {
      return new Promise((TT => {
        null !== pT && pT.reported >= gT ? TT() : BT = TT
      }))
    }

    function fT() {
      const TT = new lT;
      return pT = TT, (0, MT.j)("remesh", (() => TT.dump())), (0, MT.b)("remeshStats", (() => {
        console.log(TT.stats())
      })), ZT || (ZT = !0, (0, WT.e)((TT => {
        (0, MT.m)("remesh", TT)
      }), vT)), TT
    }

    function qT(TT) {
      const UT = fT();
      cT = new LT(UT, TT), TT.JY.meshProbe = cT, TT.on("beforeRender", (() => {
        UT.frame(performance.now())
      }))
    }

    function iT(TT, UT, mT) {
      var WT;
      null === (WT = cT) || void 0 === WT || WT.edit(TT, UT, mT)
    }
  },
  34156: (TT, UT, mT) => {
    mT.d(UT, {
      e: () => WT
    });
    const WT = new Set(["chunkBorders"])
  },
  34315: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => gT,
      e: () => zT,
      i: () => jT
    });
    var WT = mT(1688);

    function zT(TT) {
      var UT;
      return {
        ...gT.store,
        yaw: gT.store.yaw + (null !== (UT = WT.e[TT].previewYaw) && void 0 !== UT ? UT : 0)
      }
    }
    const MT = {
        yaw: .61 * Math.PI,
        pitch: Math.PI / 2.05,
        radius: 30,
        target: [0, 0, 0]
      },
      gT = {
        player: MT,
        store: {
          ...MT,
          radius: 33,
          target: [0, 3.9, 0]
        }
      };

    function nT(TT, UT) {
      TT instanceof Promise ? TT.then(UT).catch((TT => {
        console.error("Couldn't open the preview", TT)
      })) : UT(TT)
    }
    class HT {
      constructor(TT) {
        this.opened = null, this.view = null, this.size = null, this.closed = !1, nT(TT, (TT => {
          this.closed ? TT.close() : (this.opened = TT, null !== this.size && TT.resize(this.size.width, this.size.height), null !== this.view && TT.show(this.view))
        }))
      }
      show(TT) {
        var UT;
        this.view = TT, null === (UT = this.opened) || void 0 === UT || UT.show(TT)
      }
      resize(TT, UT) {
        var mT;
        this.size = {
          width: TT,
          height: UT
        }, null === (mT = this.opened) || void 0 === mT || mT.resize(TT, UT)
      }
      close() {
        var TT;
        this.closed = !0, null === (TT = this.opened) || void 0 === TT || TT.close(), this.opened = null
      }
    }
    class kT {
      constructor(TT) {
        this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(TT).then((TT => TT.ready)), nT(TT, (TT => {
          this.closed ? TT.close() : (this.opened = TT, null !== this.size && TT.resize(this.size.width, this.size.height))
        }))
      }
      get dev() {
        return this.opened.dev
      }
      isReady() {
        var TT, UT;
        return null !== (TT = null === (UT = this.opened) || void 0 === UT ? void 0 : UT.isReady()) && void 0 !== TT && TT
      }
      setCosmetic(TT, UT) {
        var mT;
        null === (mT = this.opened) || void 0 === mT || mT.setCosmetic(TT, UT)
      }
      playEmote(TT) {
        var UT;
        null === (UT = this.opened) || void 0 === UT || UT.playEmote(TT)
      }
      setOrbit(TT) {
        var UT;
        null === (UT = this.opened) || void 0 === UT || UT.setOrbit(TT)
      }
      resetCamera() {
        var TT;
        null === (TT = this.opened) || void 0 === TT || TT.resetCamera()
      }
      async untilDrawn(TT) {
        var UT;
        await this.ready, await (null === (UT = this.opened) || void 0 === UT ? void 0 : UT.untilDrawn(TT))
      }
      resize(TT, UT) {
        var mT;
        this.size = {
          width: TT,
          height: UT
        }, null === (mT = this.opened) || void 0 === mT || mT.resize(TT, UT)
      }
      close() {
        var TT;
        this.closed = !0, null === (TT = this.opened) || void 0 === TT || TT.close(), this.opened = null
      }
    }
    const jT = new class {
      constructor() {
        this.host = null, this.makeDefault = null
      }
      setHost(TT) {
        this.host = TT
      }
      setDefaultHost(TT) {
        this.makeDefault = TT
      }
      current() {
        if (null === this.host) {
          if (null === this.makeDefault) throw new Error("no preview host");
          this.host = this.makeDefault()
        }
        return this.host
      }
      openMob(TT) {
        return new HT(this.current().openMob(TT))
      }
      openPet(TT) {
        return new HT(this.current().openPet(TT))
      }
      openMobLineup(TT) {
        return new HT(this.current().openMobLineup(TT))
      }
      openCharacter(TT, UT) {
        return new kT(this.current().openCharacter(TT, UT))
      }
    }
  },
  5139: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => WT.j,
      e: () => zT,
      f: () => WT.q
    });
    var WT = mT(5142);
    const zT = [!1, !0].flatMap((TT => ["terrain", "liquid", "model"].map((UT => ({
      strict: TT,
      program: UT
    })))))
  },
  39343: (TT, UT, mT) => {
    mT.r(UT), mT.d(UT, {
      ShaderPackPage: () => HT,
      harnessShaderPackMode: () => LT,
      setHarnessUrlShaderPack: () => lT,
      shaderPackPage: () => jT
    });
    var WT = mT(102),
      zT = mT(44),
      MT = (mT(3559), mT(5139), mT(3551)),
      gT = mT(6723);
    mT(6698);
    const nT = {
      status: "none"
    };
    class HT {
      constructor() {
        this.stored = null, this.compiling = null, this.pagePack = null, this.resolved = null
      }
      preload() {
        if (null === this.stored) {
          if ((0, MT.m)(WT.featureFlags.settings.canUseShaderPacks)) return this.stored = Promise.resolve(null), kT().then((TT => {
            TT && zT.l.removeItem(MT.e)
          })), this.stored;
          this.prefetchHint() && this.compiler().catch((() => {})), this.stored = this.readStored()
        }
        return this.stored
      }
      prefetchHint() {
        return (0, MT.i)(WT.featureFlags.settings.canUseShaderPacks)
      }
      async loadActive() {
        const TT = await this.load();
        return "active" === TT.status ? TT.pack : null
      }
      load() {
        return this.pagePack ??= this.read().catch((TT => (console.error("Failed to load the shader pack", TT), nT))).then((TT => (this.resolved ??= TT, TT))), this.pagePack
      }
      hasNone() {
        var TT;
        return "none" === (null === (TT = this.resolved) || void 0 === TT ? void 0 : TT.status)
      }
      block(TT) {
        this.resolved = {
          status: "blocked",
          messageKey: TT,
          variants: null
        }, this.pagePack = Promise.resolve(this.resolved)
      }
      compiler() {
        return this.compiling ??= Promise.all([mT.e(78), mT.e(136), mT.e(142)]).then((() => mT(41880))).then((TT => (TT.prefetchCompiler(), TT))), this.compiling
      }
      async readStored() {
        const TT = await kT();
        return TT && this.compiler().then((TT => TT.reconcileHint())).catch((TT => {
          console.error("Failed to correct the shader pack hint", TT)
        })), TT
      }
      async read() {
        const TT = await this.preload();
        return TT ? (await this.compiler()).compilePagePack(TT) : nT
      }
    }
    async function kT() {
      if (!(0, MT.q)(WT.featureFlags.settings.canUseShaderPacks)) return null;
      try {
        const TT = await (0, gT.h)(!0);
        return TT || zT.l.setItem(MT.e, !1), TT
      } catch (TT) {
        return console.error("Failed to read the stored shader pack", TT), zT.l.removeItem(MT.e), null
      }
    }
    const jT = new HT;

    function lT(TT, UT) {}

    function LT() {
      return null
    }
  },
  39379: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => lT,
      h: () => LT
    });
    var WT = mT(166),
      zT = mT(193),
      MT = mT(1605),
      gT = mT(3068),
      nT = mT(1613),
      HT = mT(36539),
      kT = mT(696),
      jT = mT(39343);

    function lT(TT) {
      (0, gT.reportClientError)("matchmake_failed", TT, WT.j[WT.j.SHADER_PACK])
    }
    async function LT(TT, UT) {
      var mT;
      const WT = null === (mT = await jT.shaderPackPage.preload()) || void 0 === mT ? void 0 : mT.listing,
        gT = (0, HT.e)();
      WT && null !== gT && await nT.b.reportShaderPackSession(TT, {
        packId: WT.packId,
        sourceHash: WT.sourceHash,
        game: (0, MT.i)(UT, zT.z, "other"),
        playSessionId: gT,
        visitSessionId: (0, kT.d)()
      })
    }
  },
  6723: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => zT,
      h: () => MT
    });
    var WT = mT(44);
    const zT = "shaderPack";
    async function MT() {
      var TT;
      let UT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (TT = await WT.h.getItem(zT, UT)) && void 0 !== TT ? TT : null
    }
  },
  6698: (TT, UT, mT) => {
    mT.r(UT), mT.d(UT, {
      loadShaderPackTextures: () => gT,
      shaderPackTextures: () => nT
    });
    var WT = mT(5142);
    let zT = null,
      MT = null;

    function gT() {
      return MT ??= Promise.all([mT.e(73), mT.e(190)]).then((() => mT(40614))).then((TT => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: UT,
          textureNameToIndex: mT,
          textureAnimationData: MT
        } = TT;
        return zT ??= (0, WT.l)(mT, MT, UT), zT
      })), MT
    }

    function nT() {
      if (null === zT) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return zT
    }
  },
  34215: (TT, UT, mT) => {
    mT.d(UT, {
      e: () => MT
    });
    var WT = mT(1153);

    function zT() {
      var TT, UT;
      return null !== (TT = null === (UT = screen.orientation) || void 0 === UT ? void 0 : UT.type) && void 0 !== TT ? TT : innerWidth > innerHeight ? "landscape" : "portrait"
    }
    const MT = new class {
      constructor() {
        this.holding = !1, this.heldOrientation = "", this.releaseTimer = void 0, this.longHoldTimer = void 0, this.resizers = new Set, this.releaseWhenShown = () => {
          document.hidden || (document.removeEventListener("visibilitychange", this.releaseWhenShown), this.release())
        }
      }
      isHeld() {
        return this.holding && zT() !== this.heldOrientation && (this.holding = !1), this.holding
      }
      hold() {
        this.heldOrientation = zT(), this.holding = !0, clearTimeout(this.releaseTimer), document.removeEventListener("visibilitychange", this.releaseWhenShown), clearTimeout(this.longHoldTimer), this.longHoldTimer = setTimeout((() => {
          this.holding && (0, WT.cZ)(new Error("Game view size held for 60 s"))
        }), 6e4)
      }
      release() {
        clearTimeout(this.longHoldTimer), this.releaseTimer = setTimeout((() => {
          if (document.hidden) document.addEventListener("visibilitychange", this.releaseWhenShown);
          else {
            this.holding = !1;
            for (const TT of this.resizers) TT()
          }
        }), 1e3)
      }
      heldSizer(TT) {
        let UT = !1;
        return () => {
          if (UT && this.isHeld()) return null;
          const mT = TT();
          return UT ||= null !== mT, mT
        }
      }
      onRelease(TT) {
        return this.resizers.add(TT), () => {
          this.resizers.delete(TT)
        }
      }
    }
  },
  39368: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => zT
    });
    let WT = !1;
    async function zT(TT, UT) {
      if (!WT) {
        WT = !0;
        try {
          const [{
            reloadBloxd: WT
          }, {
            NotificationProvider: zT
          }] = await Promise.all([Promise.resolve().then((() => mT(1863))), Promise.resolve().then((() => mT(1457)))]);
          if (!TT || !0 === await zT.showPromptPopup({
              title: "Unsaved changes",
              subtitle: "Exit and lose your unsaved changes?",
              confirmText: "Exit",
              destructive: !0,
              cancelText: "Cancel",
              unlockPointerKey: "replayExitUnsavedChanges"
            }).getResult()) return void WT(UT)
        } catch (zT) {
          console.error("Leaving the replay failed", zT)
        }
        WT = !1
      }
    }
  },
  41110: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => nT,
      g: () => HT
    });
    var WT = mT(1876);
    const zT = 33177600,
      MT = 3e4;
    let gT = !1;

    function nT(TT, UT, mT) {
      let WT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const {
        scale: nT = 1,
        type: HT = "image/png",
        quality: kT
      } = WT;
      if (!TT.drawing()) return Promise.reject(new Error("Screenshots need a game to be running"));
      if (gT) return Promise.reject(new Error("A screenshot is already being taken"));
      gT = !0;
      const jT = function(TT, UT, mT) {
        const WT = Math.max(1, TT),
          MT = Math.max(1, UT),
          gT = Math.min(1, mT / Math.max(WT, MT), Math.sqrt(zT / (WT * MT)));
        return {
          width: Math.max(1, Math.floor(WT * gT)),
          height: Math.max(1, Math.floor(MT * gT))
        }
      }(UT, mT, TT.maxTextureSize);
      return TT.resize(jT.width, jT.height, nT * jT.width / Math.max(1, UT)), new Promise(((UT, mT) => {
        let WT, zT = 2,
          nT = null;
        const jT = () => {
          var UT;
          gT = !1, null === (UT = nT) || void 0 === UT || UT(), clearTimeout(WT), TT.restoreSize()
        };
        WT = setTimeout((() => {
          jT(), mT(new Error("No frame was drawn to capture"))
        }), MT), nT = TT.onFrameDrawn((() => {
          if (zT--, zT > 0) return;
          const {
            canvas: WT
          } = TT, MT = {
            width: WT.width,
            height: WT.height
          };
          try {
            WT.toBlob((TT => {
              TT ? UT({
                blob: TT,
                ...MT
              }) : mT(new Error("The canvas gave no image"))
            }), HT, kT)
          } catch (gT) {
            mT(gT)
          } finally {
            jT()
          }
        }))
      }))
    }
    async function HT(TT, UT, mT) {
      try {
        const zT = await nT(TT, UT, mT);
        (0, WT.c)(zT.blob, `bloxd-screenshot-${zT.width}x${zT.height}-${Date.now()}.png`)
      } catch (zT) {
        console.error("Error taking screenshot:", zT)
      }
    }
  },
  37822: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => WT
    });
    const WT = {
      noaReady: null,
      chunkRequested: null,
      beforeServerListeners: null,
      wasmNetReady: null
    }
  },
  39289: (TT, UT, mT) => {
    mT.d(UT, {
      e: () => gT
    });
    var WT = mT(351),
      zT = mT(133),
      MT = mT(44);

    function gT() {
      MT.l.setItem(WT.zb, MT.l.getItem(WT.zb) + 1), (0, zT.is99NightsCrazyGamesBundle)() && MT.l.setItem(WT.xb, MT.l.getItem(WT.xb) + 1)
    }
  },
  40798: (TT, UT, mT) => {
    mT.d(UT, {
      e: () => nT
    });
    var WT = mT(39752);

    function zT(TT) {
      return {
        current: () => TT,
        watch: () => () => {}
      }
    }

    function MT() {}
    const gT = Object.freeze([0, 0, 0]),
      nT = {
        states: {
          health: zT({
            health: null,
            maxHealth: null,
            shield: null,
            maxShield: null
          }),
          inventory: zT({
            player: [],
            chestOrCreative: [],
            chest: null,
            creative: !1,
            selectedSlot: 0,
            freeSlots: 0
          }),
          hotbar: zT({
            items: [],
            ammo: 0,
            selectedSlot: null
          }),
          stationItems: zT({
            enchantable: {},
            salvageable: {}
          }),
          itemInfo: zT({}),
          creativeVisibility: zT({
            publicLobby: !1,
            shownInGame: {}
          }),
          aura: zT(null),
          heldItemAim: zT({
            gun: !1,
            aimable: !1,
            chargeName: null
          }),
          crouching: zT(!1),
          gliderBoostFuel: zT(0),
          flight: zT({
            canFly: !1,
            flying: !1
          }),
          crafting: zT({
            focus: null,
            recipes: [],
            detail: null
          }),
          players: zT({
            ids: [],
            byId: {},
            localId: null
          }),
          lobbyLeaderboardRows: zT({}),
          fullInventory: zT(!1),
          crosshairTarget: zT({
            interactPrompt: null,
            blockText: null,
            neededTool: null
          }),
          localPlayerAlive: zT(!0),
          freeCamera: zT({
            allowed: !1,
            movesFly: !1
          }),
          replay: zT(null),
          replayEdits: zT(null),
          replayRecorder: zT({
            recording: !1,
            clipping: !1,
            hasClipBuffer: !1,
            seconds: 0
          }),
          replayVideoExporting: zT(!1)
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
          selectHotbarSlot: MT,
          removeInventoryItem: () => !1,
          swapInventorySlots: () => !1,
          moveInventoryItem: () => !1,
          quickMoveInventoryItem: () => null,
          closeChest: MT,
          setInventoryOpen: MT,
          changeIronChestPasskey: MT,
          dragReplayCamera: MT,
          applyTemporaryThirdPerson: MT,
          holdEmoteWheel: MT,
          recordFlyingMiddleText: MT,
          focusCrafting: MT,
          craftRecipe: () => ({
            Yj: 0,
            Dn: null,
            amountAddedToSlot: 0
          }),
          salvageItem: () => !1,
          enchantItem: MT,
          setShopOpen: MT,
          buyShopItem: MT,
          lobbyManage: MT,
          sendChatMessage: MT,
          ignorePlayer: MT,
          reportPlayer: MT,
          reportWorldCodeChat: MT,
          requestDiscordReportKey: MT,
          reportLobbyOrGame: MT,
          playEmote: MT,
          updateMyCosmetic: MT,
          writeOnBoard: MT,
          writeBook: MT,
          writeNameTag: MT,
          setCustomLobbyBlock: MT,
          openIronChest: MT,
          sendCodeCollab: MT,
          clickCodeBlock: MT,
          bindCustomButtonKeys: MT,
          pressCustomButton: MT,
          moveReplayFreecam: MT,
          holdReplayFreecamVertical: MT,
          respawn: MT,
          wakeUp: MT,
          requestLeaderboard: MT,
          completeTask: MT,
          setServerCookie: MT,
          answerUiRequest: MT,
          chooseRewardedAd: MT,
          setCameraZoom: MT,
          setFreeCameraMovesFly: MT,
          setBlockHighlight: MT,
          setCrosshairInteractPrompt: MT,
          setLookSensitivity: MT,
          replayAction: MT,
          setReplayPlaying: MT,
          seekReplay: MT,
          setReplayCameraMode: MT,
          syncReplayCameraMode: MT,
          setReplayCameraKeyframe: MT,
          moveReplayCameraKeyframe: MT,
          deleteReplayCameraKeyframes: MT,
          setReplayPlaybackMark: MT,
          cropReplay: () => !1,
          holdReplayForShaderPackFailure: MT,
          exportReplayVideo: MT,
          toggleRecording: MT,
          saveClip: MT,
          setRecorderPrefs: MT,
          setReplayViewerOpen: MT
        },
        queries: {
          enchantingOffer: () => ({
            perks: [],
            options: []
          }),
          worldCodeAiChunk: () => WT.b,
          worldCodeAiGameState: () => WT.f
        },
        lookups: {
          localPos: () => gT,
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
  41104: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => gT,
      f: () => MT
    });
    var WT = mT(2273),
      zT = mT(1089);

    function MT(TT, UT) {
      return null !== TT.gameSource && (0, WT.k)(UT, TT.gameSource)
    }

    function gT(TT, UT) {
      if (null === TT.gameSource || "" === TT.gameSource || null === UT) return !0;
      const mT = (0, zT.k)(UT) ? (0, zT.q)(UT) : null;
      return null !== mT && MT(TT, mT)
    }
  },
  41072: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => nT
    });
    var WT = mT(643),
      zT = mT(41080),
      MT = mT(40951);
    async function gT(TT) {
      const UT = await (0, zT.j)({
        Helmet: mT(38108),
        Chestplate: mT(38114),
        Gauntlets: mT(38122),
        Leggings: mT(38117),
        Boots: mT(38120)
      } [WT.b[TT]]);
      try {
        return (0, MT.o)(UT)
      } finally {
        UT.close()
      }
    }
    const nT = new class {
      constructor() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : gT,
          UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : zT.o;
        this.decode = TT, this.register = UT, this.decoded = new Map
      }
      warm() {
        for (let TT = 0; TT < WT.b.length; TT++) this.part(TT).catch((UT => {
          console.warn(`The grayscale armour ${WT.b[TT]} image didn't decode ahead of use`, UT)
        }))
      }
      async load(TT, UT) {
        const {
          width: mT,
          height: MT,
          pixels: gT
        } = await this.part(TT), nT = new ImageData(function(TT, UT) {
          const mT = new Uint8ClampedArray(TT.length);
          for (let WT = 0; WT < TT.length; WT += 4) mT[WT] = Math.round(TT[WT] * UT[0] / 255), mT[WT + 1] = Math.round(TT[WT + 1] * UT[1] / 255), mT[WT + 2] = Math.round(TT[WT + 2] * UT[2] / 255), mT[WT + 3] = TT[WT + 3];
          return mT
        }(gT, function(TT) {
          return [TT >>> 16 & 255, TT >>> 8 & 255, 255 & TT]
        }(UT)), mT, MT);
        let HT;
        try {
          HT = await createImageBitmap(nT, {
            premultiplyAlpha: "none",
            colorSpaceConversion: "none"
          })
        } catch (kT) {
          throw new zT.d("decode", `grayscale armour ${WT.b[TT]}`, {
            cause: kT
          })
        }
        return {
          id: this.register(HT),
          width: mT,
          height: MT
        }
      }
      part(TT) {
        const UT = this.decoded.get(TT);
        if (void 0 !== UT) return UT;
        const mT = this.decode(TT).catch((UT => {
          throw this.decoded.delete(TT), UT instanceof zT.d ? UT : new zT.d("decode", `grayscale armour ${WT.b[TT]}`, {
            cause: UT
          })
        }));
        return this.decoded.set(TT, mT), mT
      }
    }
  },
  41066: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => gT,
      h: () => cT,
      k: () => jT,
      o: () => lT,
      r: () => ZT
    });
    var WT = mT(40929),
      zT = mT(41072),
      MT = mT(41080);
    const gT = 396,
      nT = 1,
      HT = 2,
      kT = 3,
      jT = {
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
      lT = {
        File: 0,
        Item: 1
      },
      LT = 0,
      pT = 1,
      BT = 2;

    function ZT(TT) {
      const UT = (0, WT.q)();
      UT.catch((() => {}));
      let zT = null;
      return {
        glbUrl: TT,
        lifeformAtlasUrl: async TT => (await UT).lifeformAtlasUrl(TT),
        armourAtlasUrl: async () => (await mT.e(207).then((() => mT(34366)))).armourAtlasUrl,
        capeUrl: async TT => (await UT).capeUrl(TT),
        attachmentImageUrl: async TT => (await UT).attachmentImageUrl(TT),
        blockImageUrl: async TT => (await UT).blockImageUrl(TT),
        groupAtlasUrl: async TT => (await UT).groupAtlasUrl(TT),
        particleTextureUrl: async TT => (await UT).particleTextureUrl(TT),
        particleItemUrl: async TT => (zT ??= mT.e(38).then((() => mT(51184))).catch((TT => {
          throw zT = null, TT
        })), (await zT).particleItemUrl(TT))
      }
    }
    class cT {
      constructor(TT, UT) {
        var mT, gT, nT, HT;
        let kT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        this.sources = TT, this.onFailure = UT, this.loading = new Map, this.glbImages = new Map, this.glbWrittenImages = new Map, this.glbTakenCount = new Map, this.answered = new Map, this.ready = [], this.load = void 0, this.release = void 0, this.fetchFile = void 0, this.greyscaleArmour = void 0, this.kB = !1, this.load = null !== (mT = kT.load) && void 0 !== mT ? mT : (TT, UT) => (0, MT.l)(TT, kT.fetchImage, UT), this.release = null !== (gT = kT.release) && void 0 !== gT ? gT : MT.s, this.fetchFile = null !== (nT = kT.fetchFile) && void 0 !== nT ? nT : TT => (0, WT.j)(TT), this.greyscaleArmour = null !== (HT = kT.greyscaleArmour) && void 0 !== HT ? HT : zT.b
      }
      get waiting() {
        return this.ready.length
      }
      get inFlight() {
        return this.loading.size
      }
      glbWritten(TT, UT) {
        this.glbWrittenImages.set(TT, eT(UT))
      }
      glbTaken(TT, UT) {
        const mT = this.glbWrittenImages.get(TT);
        this.glbWrittenImages.delete(TT), UT && this.setGlbImages(TT, void 0 !== mT && mT.length > 0 ? mT : void 0)
      }
      setGlbImages(TT, UT) {
        var mT;
        this.glbTakenCount.set(TT, (null !== (mT = this.glbTakenCount.get(TT)) && void 0 !== mT ? mT : 0) + 1), void 0 === UT ? this.glbImages.delete(TT) : this.glbImages.set(TT, UT);
        const WT = [];
        for (const {
            key: zT
          }
          of this.loading.values()) zT.kind === jT.Glb && zT.word === TT && WT.push(zT);
        for (let zT = this.ready.length - 1; zT >= 0; zT--) {
          const {
            key: UT,
            id: mT
          } = this.ready[zT];
          UT.kind === jT.Glb && UT.word === TT && (this.ready.splice(zT, 1), null !== mT && (this.answered.delete(mT), this.release(mT)), WT.push(UT))
        }
        this.loadAgain(WT)
      }
      onEvent(TT) {
        if (this.kB) return;
        const UT = new DataView(TT.buffer, TT.byteOffset, TT.byteLength);
        for (let mT = 0; mT + 8 <= TT.byteLength; mT += 8) {
          const TT = UT.getUint8(mT),
            WT = UT.getUint32(mT + 4, !0);
          if (TT === kT) {
            this.answered.delete(WT), this.release(WT);
            continue
          }
          const zT = {
            kind: UT.getUint8(mT + 1),
            index: UT.getUint8(mT + 2),
            word: WT
          };
          TT === nT ? this.want(zT) : TT === HT && this.loading.delete(vT(zT))
        }
      }
      reload(TT, UT) {
        const mT = mT => TT.includes(mT.kind) && (void 0 === UT || UT(mT)),
          WT = new Map;
        for (const zT of this.answered.values()) mT(zT) && WT.set(vT(zT), zT);
        for (const [zT, {
            key: MT
          }] of this.loading) mT(MT) && WT.set(zT, MT);
        this.loadAgain(WT.values())
      }
      loadAgain(TT) {
        for (const UT of TT) this.loading.delete(vT(UT)), this.want(UT)
      }
      drain(TT) {
        if (null !== TT)
          for (; this.ready.length > 0;) {
            if (!TT(gT, 0, this.ready[0].record)) return;
            this.ready.shift()
          }
      }
      dispose() {
        this.kB = !0, this.loading.clear(), this.ready.length = 0;
        for (const TT of this.answered.keys()) this.release(TT);
        this.answered.clear()
      }
      want(TT) {
        const UT = vT(TT);
        if (this.loading.has(UT)) return;
        const mT = {
          key: TT
        };
        this.loading.set(UT, mT), this.loadKey(TT).then((WT => {
          this.kB || this.loading.get(UT) !== mT ? this.release(WT.id) : (this.loading.delete(UT), this.answered.set(WT.id, TT), this.ready.push({
            record: qT(TT, LT, WT),
            key: TT,
            id: WT.id
          }))
        }), (WT => {
          if (this.kB || this.loading.get(UT) !== mT) return;
          this.loading.delete(UT), this.onFailure({
            key: TT,
            error: WT
          });
          const zT = WT instanceof MT.d && "decode" === WT.stage ? pT : BT;
          this.ready.push({
            record: qT(TT, zT, null),
            key: TT,
            id: null
          })
        }))
      }
      async loadKey(TT) {
        switch (TT.kind) {
          case jT.Glb:
            return this.load(await this.glbImage(TT), "none");
          case jT.LifeformAtlas:
            return this.load(fT(await this.sources.lifeformAtlasUrl(TT.word), TT), "none");
          case jT.ArmourAtlas:
            return this.load(fT(await this.sources.armourAtlasUrl(), TT), "none");
          case jT.Cape:
            return this.load(fT(await this.sources.capeUrl(TT.word), TT), "none");
          case jT.AttachmentImage:
            return this.load(fT(await this.sources.attachmentImageUrl(TT.word), TT), "none");
          case jT.GroupAtlas:
            return this.load(fT(await this.sources.groupAtlasUrl(TT.word), TT), "none");
          case jT.BlockImage:
            return this.load(fT(await this.sources.blockImageUrl(TT.word), TT), "none");
          case jT.Particle: {
            const UT = await (TT.index === lT.Item ? this.sources.particleItemUrl(TT.word) : this.sources.particleTextureUrl(TT.word));
            return this.load(fT(UT, TT), "flipY")
          }
          case jT.GreyscaleArmour:
            return this.greyscaleArmour.load(TT.index, TT.word);
          default:
            throw new MT.d("fetch", `image kind ${TT.kind}`, {
              cause: null
            })
        }
      }
      async glbImage(TT) {
        var UT;
        let mT = this.glbImages.get(TT.word);
        if (void 0 === mT) {
          const UT = this.glbTakenCount.get(TT.word),
            WT = fT(await this.sources.glbUrl(TT.word), TT);
          try {
            mT = eT(await this.fetchFile(WT))
          } catch (zT) {
            throw new MT.d("fetch", WT, {
              cause: zT
            })
          }
          this.glbTakenCount.get(TT.word) === UT && this.glbImages.set(TT.word, mT)
        }
        const WT = null === (UT = mT) || void 0 === UT ? void 0 : UT[TT.index];
        if (!WT) throw new MT.d("decode", `image ${TT.index} of file ${2147483647&TT.word}`, {
          cause: null
        });
        return WT
      }
    }

    function vT(TT) {
      let {
        kind: UT,
        index: mT,
        word: WT
      } = TT;
      return `${UT}:${mT}:${WT}`
    }

    function fT(TT, UT) {
      if (null === TT) throw new MT.d("fetch", `no URL for image ${vT(UT)}`, {
        cause: null
      });
      return TT
    }

    function qT(TT, UT, mT) {
      var WT, zT, MT;
      const gT = new Uint8Array(16),
        nT = new DataView(gT.buffer);
      return nT.setUint8(0, TT.kind), nT.setUint8(1, TT.index), nT.setUint8(2, UT), nT.setUint32(4, TT.word, !0), nT.setUint32(8, null !== (WT = null === mT || void 0 === mT ? void 0 : mT.id) && void 0 !== WT ? WT : 0, !0), nT.setUint16(12, Math.min(null !== (zT = null === mT || void 0 === mT ? void 0 : mT.width) && void 0 !== zT ? zT : 0, 65535), !0), nT.setUint16(14, Math.min(null !== (MT = null === mT || void 0 === mT ? void 0 : mT.height) && void 0 !== MT ? MT : 0, 65535), !0), gT
    }
    const iT = 1179937895,
      bT = 1313821514,
      OT = 5130562;

    function eT(TT) {
      var UT;
      const mT = new DataView(TT.buffer, TT.byteOffset, TT.byteLength);
      if (TT.byteLength < 20 || mT.getUint32(0, !0) !== iT || mT.getUint32(16, !0) !== bT) return [];
      let WT, zT = 20 + mT.getUint32(12, !0);
      try {
        WT = JSON.parse((new TextDecoder).decode(TT.subarray(20, zT)))
      } catch {
        return []
      }
      for (; zT + 8 <= TT.byteLength && mT.getUint32(zT + 4, !0) !== OT;) zT += 8 + mT.getUint32(zT, !0);
      const MT = null !== (UT = WT.images) && void 0 !== UT ? UT : [];
      if (0 === MT.length || zT + 8 > TT.byteLength) return MT.map((() => null));
      const gT = TT.subarray(zT + 8, Math.min(TT.byteLength, zT + 8 + mT.getUint32(zT, !0)));
      return MT.map((TT => {
        var UT, mT, zT;
        const MT = void 0 === TT.bufferView || null === (UT = WT.bufferViews) || void 0 === UT ? void 0 : UT[TT.bufferView];
        if (!MT || 0 !== (null !== (mT = MT.buffer) && void 0 !== mT ? mT : 0) || void 0 === MT.byteLength) return null;
        const nT = null !== (zT = MT.byteOffset) && void 0 !== zT ? zT : 0,
          HT = nT + MT.byteLength;
        return HT <= gT.byteLength ? gT.slice(nT, HT) : null
      }))
    }
  },
  40802: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => gT,
      d: () => MT,
      e: () => zT
    });
    let WT = null;

    function zT(TT) {
      WT = TT
    }

    function MT(TT) {
      WT === TT && (WT = null)
    }

    function gT() {
      var TT;
      null === (TT = WT) || void 0 === TT || TT()
    }
  },
  36674: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => jT,
      g: () => LT,
      i: () => vT,
      l: () => kT
    });
    var WT = mT(25),
      zT = mT(2522),
      MT = mT(2525),
      gT = mT(2534),
      nT = mT(2608),
      HT = mT(31);

    function kT(TT, UT) {
      return (!(0, gT.c)() || 0 === TT && 0 === UT) && (0, MT.v)(zT.g.Joystick, 0, TT, UT, 0)
    }
    const jT = {
      Action1: 1,
      Action2: 2,
      Action3: 3,
      Attack: 4,
      Use: 5,
      Interact: 6,
      Boost: 7
    };

    function lT(TT) {
      return TT.classList.contains("TouchKeyHit") && pT() ? null : TT.firstElementChild
    }

    function LT(TT) {
      return TT.classList.contains("TouchKeyHit") && !TT.classList.contains("CanvasZone") ? {
        whole: !pT(),
        keyBox: null
      } : {
        whole: !1,
        keyBox: BT(lT(TT))
      }
    }

    function pT() {
      return document.documentElement.classList.contains(nT.g)
    }

    function BT(TT) {
      return !(TT instanceof HTMLElement) || TT.offsetWidth <= 0 || TT.offsetHeight <= 0 ? null : {
        width: TT.offsetWidth,
        height: TT.offsetHeight
      }
    }

    function ZT(TT, UT) {
      const mT = TT => Math.min(65535, Math.round(4 * TT));
      return (mT(TT) | mT(UT) << 16) >>> 0
    }

    function cT(TT) {
      return {
        x: TT.left + TT.width / 2,
        y: TT.top + TT.height / 2,
        radius: Math.min(TT.width, TT.height) / 2
      }
    }
    const vT = new class {
      constructor(TT) {
        this.write = TT, this.elements = new Map, this.canvasLeft = 0, this.canvasTop = 0
      }
      set(TT, UT) {
        let mT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        UT ? this.elements.set(TT, {
          element: UT,
          hidden: mT
        }) : this.elements.delete(TT), this.measureOne(TT)
      }
      measure() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
          left: this.canvasLeft,
          top: this.canvasTop
        };
        this.canvasLeft = TT.left, this.canvasTop = TT.top;
        for (const UT of this.elements.keys()) this.measureOne(UT)
      }
      hitZone(TT, UT) {
        let mT = null,
          WT = 1;
        for (const zT of this.elements.keys()) {
          const MT = this.shown(zT);
          if (!MT) continue;
          const {
            rect: gT,
            element: nT
          } = MT, HT = cT(gT), kT = Math.max(0, gT.width / 2 - HT.radius), jT = Math.max(0, gT.height / 2 - HT.radius), LT = Math.max(0, Math.abs(TT - HT.x) - kT), pT = Math.max(0, Math.abs(UT - HT.y) - jT), ZT = nT.firstElementChild;
          let vT = Math.hypot(LT, pT) / HT.radius;
          const fT = BT(lT(nT));
          fT && (vT = Math.min(vT, Math.max(2 * Math.abs(TT - HT.x) / fT.width, 2 * Math.abs(UT - HT.y) / fT.height))), vT < WT && (mT = {
            code: zT,
            element: nT,
            key: ZT,
            ...HT
          }, WT = vT)
        }
        return mT
      }
      measureOne(TT) {
        const UT = this.shown(TT);
        if (!UT) return void this.write(zT.g.TouchZone, TT, 0, 0, 0);
        const {
          rect: mT,
          element: WT
        } = UT, MT = cT(mT);
        this.write(zT.g.TouchZone, TT, MT.x - this.canvasLeft, MT.y - this.canvasTop, ZT(mT.width, mT.height));
        const gT = BT(lT(WT));
        this.write(zT.g.TouchZone, 256 | TT, 0, 0, gT ? ZT(gT.width, gT.height) : 0)
      }
      shown(TT) {
        const UT = this.elements.get(TT),
          mT = WT.b.get("worldPanelHud");
        if (!UT || UT.hidden || "none" === mT) return null;
        const zT = UT.element.getBoundingClientRect();
        return zT.width <= 0 || zT.height <= 0 ? null : {
          rect: zT,
          element: UT.element
        }
      }
    }(MT.v);
    (0, HT.k)(nT.d, (() => {
      vT.measure()
    }))
  },
  40848: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => HT,
      c: () => kT
    });
    var WT = mT(40979),
      zT = mT(39204),
      MT = mT(36534),
      gT = mT(40855),
      nT = mT(40824);
    const HT = WT.e.timeForPlayerToConnect - 1e4;
    async function kT(TT, UT, mT, WT) {
      let HT;
      try {
        HT = await TT.getTrafficCode()
      } catch (BT) {
        throw console.error("[bloxd-wasm-client] could not get a traffic code", BT), new nT.s(BT)
      }
      const {
        gameNameWithVariation: kT,
        lobbyName: jT
      } = UT, lT = () => {
        const UT = (0, MT.f)(TT, kT, jT, HT, (TT => {
          var UT;
          return null !== (UT = null === mT || void 0 === mT ? void 0 : mT.isUsingCustomGameTexturePack(TT)) && void 0 !== UT && UT
        }));
        UT.joinOptions.wasmClient = !0;
        const zT = (0, gT.F)();
        return null !== zT && (UT.joinOptions.renderBackend = zT), UT.joinOptions.joinAdHold = WT, UT
      }, {
        roomName: LT,
        joinOptions: pT
      } = lT();
      return {
        endpoint: UT.endpoint,
        roomName: LT,
        joinOptions: pT,
        session: {
          gameNameWithVariation: kT,
          lobbyName: jT,
          playerDbId: TT.whamm
        },
        optionsAfterRefusal: async UT => await (0, zT.d)(TT, UT) ? lT().joinOptions : null
      }
    }
  },
  41093: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => jT,
      e: () => MT,
      h: () => lT,
      l: () => gT
    });
    var WT = mT(41066),
      zT = mT(40929);
    const MT = new class {
      constructor() {
        this.page = null, this.session = void 0, this.follower = null, this.isWanted = !1, this.listeners = new Set, this.pageListeners = new Set, this.wantedListeners = new Set
      }
      get current() {
        return void 0 === this.session ? this.page : this.session
      }
      setPageFiles(TT) {
        this.change((() => {
          this.page = TT
        }))
      }
      setSessionFiles(TT) {
        const UT = void 0 !== this.session && void 0 === TT;
        if (this.change((() => {
            this.session = TT
          })), UT)
          for (const mT of [...this.pageListeners]) mT()
      }
      showsPage() {
        return void 0 === this.session
      }
      onPageShown(TT) {
        return this.pageListeners.add(TT), () => {
          this.pageListeners.delete(TT)
        }
      }
      setFollower(TT) {
        this.follower = TT, this.startFollower()
      }
      wanted() {
        this.isWanted = !0;
        for (const TT of [...this.wantedListeners]) TT();
        this.startFollower()
      }
      onWanted(TT) {
        return this.wantedListeners.add(TT), () => {
          this.wantedListeners.delete(TT)
        }
      }
      onChange(TT) {
        return this.listeners.add(TT), () => {
          this.listeners.delete(TT)
        }
      }
      startFollower() {
        const TT = this.follower;
        this.isWanted && null !== TT && (this.follower = null, TT((() => {
          this.follower = TT
        })))
      }
      change(TT) {
        const UT = this.current;
        if (TT(), this.current !== UT)
          for (const mT of this.listeners) mT()
      }
    };

    function gT(TT, UT) {
      return {
        ...TT,
        armourAtlasUrl: () => {
          var mT, WT;
          return null !== (mT = null === (WT = UT()) || void 0 === WT ? void 0 : WT.armourAtlasUrl()) && void 0 !== mT ? mT : TT.armourAtlasUrl()
        },
        lifeformAtlasUrl: mT => HT(UT(), (TT => TT.LIFEFORM_ATLAS_PATHS[mT]), (() => TT.lifeformAtlasUrl(mT))),
        groupAtlasUrl: mT => HT(UT(), (TT => TT.GROUP_ATLAS_PATHS[mT]), (() => TT.groupAtlasUrl(mT))),
        particleItemUrl: WT => kT(UT(), (async () => {
          const TT = await mT.e(38).then((() => mT(51184))).catch((() => null));
          return (null === TT || void 0 === TT ? void 0 : TT.particleItemSprite(WT)) || null
        }), (() => TT.particleItemUrl(WT))),
        blockImageUrl: mT => kT(UT(), (async () => {
          var TT, UT;
          return null !== (TT = null === (UT = await nT()) || void 0 === UT ? void 0 : UT.blockImageName(mT)) && void 0 !== TT ? TT : null
        }), (() => TT.blockImageUrl(mT)))
      }
    }

    function nT() {
      return (0, zT.q)().catch((() => null))
    }

    function HT(TT, UT, mT) {
      return kT(TT, (async () => {
        var TT;
        const mT = await nT(),
          WT = null === mT ? null : UT(mT),
          zT = null !== (TT = null === WT || void 0 === WT ? void 0 : WT.slice(WT.lastIndexOf("/") + 1)) && void 0 !== TT ? TT : null;
        return "Player_Atlas" === zT ? null : zT
      }), mT)
    }
    async function kT(TT, UT, mT) {
      if (null !== TT) {
        const mT = await UT(),
          WT = null === mT ? null : TT.textureUrl(mT);
        if (null !== WT) return WT
      }
      return mT()
    }
    const jT = 0;

    function lT(TT) {
      const UT = [WT.k.ArmourAtlas, WT.k.LifeformAtlas, WT.k.GroupAtlas, WT.k.BlockImage, WT.k.Particle];
      TT.reload(UT, (TT => {
        switch (TT.kind) {
          case WT.k.Particle:
            return TT.index === WT.o.Item;
          case WT.k.LifeformAtlas:
            return TT.word !== jT;
          default:
            return !0
        }
      }))
    }
  },
  40987: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => WT,
      d: () => nT,
      h: () => gT,
      k: () => zT,
      o: () => MT
    });
    const WT = 1e3;

    function zT() {
      HT((() => {
        window.location.reload()
      }))
    }

    function MT() {
      return new Promise((() => {}))
    }

    function gT(TT) {
      HT((() => {
        window.location.replace(TT(window.location.href))
      }))
    }

    function nT(TT) {
      Promise.resolve().then((() => mT(108))).then((UT => {
        let {
          currentUrl: mT
        } = UT;
        gT((() => mT.mergeSearchParamsInto(TT)))
      }), (() => {
        gT((() => TT))
      }))
    }

    function HT(TT) {
      null !== window.onbeforeunload ? Promise.resolve().then((() => mT(1863))).then((UT => {
        let {
          prepareForUnloadWithoutConfirmation: mT
        } = UT;
        try {
          mT()
        } catch (WT) {
          console.warn("[bloxd-wasm-client] prepareForUnloadWithoutConfirmation threw: leaving plainly", WT), window.onbeforeunload = null
        }
        TT()
      }), (() => {
        window.onbeforeunload = null, TT()
      })) : TT()
    }
  },
  5158: (TT, UT, mT) => {
    function WT(TT, UT) {
      return zT(TT, UT)
    }

    function zT(TT, UT) {
      if (TT === UT) return !0;
      if ("object" !== typeof TT || "object" !== typeof UT || null === TT || null === UT || Array.isArray(TT) !== Array.isArray(UT)) return !1;
      const mT = TT,
        WT = UT,
        MT = Object.keys(mT);
      return MT.length === Object.keys(WT).length && MT.every((TT => Object.prototype.hasOwnProperty.call(WT, TT) && zT(mT[TT], WT[TT])))
    }
    mT.d(UT, {
      c: () => WT
    })
  },
  41042: (TT, UT, mT) => {
    mT.d(UT, {
      e: () => OT,
      i: () => iT,
      j: () => ZT,
      l: () => BT
    });
    var WT = mT(1944),
      zT = mT(1308),
      MT = mT(39198),
      gT = mT(36565),
      nT = mT(39216),
      HT = mT(40824);
    const kT = {
        "X-Requested-With": "XMLHtttpRequest"
      },
      jT = 3,
      lT = [500, 1500];

    function LT(TT) {
      const UT = new URL(TT);
      return {
        secure: "https:" === UT.protocol || "wss:" === UT.protocol,
        host: UT.host,
        pathname: UT.pathname.replace(/\/+$/, ""),
        search: UT.searchParams.toString()
      }
    }

    function pT(TT, UT, mT) {
      const {
        secure: WT,
        host: zT,
        pathname: MT,
        search: gT
      } = LT(TT);
      return `${WT?"https":"http"}://${zT}${MT}/matchmake/${UT}/${encodeURIComponent(mT)}${gT?`?${gT}`:""}`
    }

    function BT(TT, UT) {
      var mT;
      const WT = null !== (mT = UT.protocol) && void 0 !== mT ? mT : "ws";
      if ("ws" !== WT) throw new Error(`seat reservation asks for the ${WT} transport`);
      const {
        secure: zT,
        host: MT,
        pathname: gT,
        search: nT
      } = LT(TT), HT = new URLSearchParams(nT);
      HT.append("sessionId", UT.sessionId), UT.reconnectionToken && HT.append("reconnectionToken", UT.reconnectionToken);
      return `${zT?"wss":"ws"}://${UT.room.publicAddress||`${MT}${gT}`}/${UT.room.processId}/${UT.room.roomId}?${HT.toString()}`
    }
    async function ZT(TT, UT, mT) {
      var nT;
      let kT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const LT = null !== (nT = kT.sleep) && void 0 !== nT ? nT : WT.d,
        BT = new zT.e(kT.signal),
        ZT = new gT.b((() => {
          (0, zT.k)(BT.controller, new gT.d("seat"))
        })),
        {
          signal: qT
        } = BT;
      try {
        const WT = await (0, MT.g)((() => async function(TT, UT, mT, WT) {
          var MT;
          const {
            signal: gT,
            sleep: nT
          } = WT, kT = pT(TT, "joinOrCreate", UT), LT = JSON.stringify(mT);
          let BT = null;
          for (let pT = 0; pT < jT; pT++) {
            var ZT;
            if (pT > 0) await nT(null !== (ZT = lT[pT - 1]) && void 0 !== ZT ? ZT : 1500, gT);
            let TT;
            (0, zT.m)(gT);
            try {
              TT = await vT(kT, LT, WT)
            } catch (qT) {
              (0, zT.m)(gT), BT = cT(qT);
              continue
            }
            const {
              response: UT,
              answer: mT,
              refusal: MT,
              lost: jT
            } = TT;
            if (null === jT) {
              if (null !== MT) throw fT(MT, mT);
              if (UT.ok && null !== mT && eT(mT)) return mT;
              BT = new HT.r(`seat request answered HTTP ${UT.status}${null===mT?" without JSON":" without a seat"}`, !1, void 0, UT.status)
            } else BT = cT(jT.error)
          }
          throw null !== (MT = BT) && void 0 !== MT ? MT : new HT.r("seat request made no attempt", !1)
        }(TT, UT, mT, {
          ...kT,
          signal: qT,
          sleep: LT
        })), qT, LT);
        return ZT.answered(), WT
      } finally {
        ZT.stop(), BT.unfollow()
      }
    }

    function cT(TT) {
      return new HT.r(TT instanceof Error ? TT.message : String(TT), !0, TT)
    }
    async function vT(TT, UT, mT) {
      var WT;
      const {
        signal: MT
      } = mT, gT = null !== (WT = mT.fetch) && void 0 !== WT ? WT : fetch, nT = await gT(TT, {
        method: "POST",
        headers: {
          ...kT,
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: UT,
        credentials: "include",
        signal: MT
      }), {
        answer: HT,
        lost: jT
      } = await async function(TT) {
        try {
          const UT = await TT.json();
          return {
            answer: "object" === typeof UT && null !== UT ? UT : null,
            lost: null
          }
        } catch (UT) {
          return {
            answer: null,
            lost: UT instanceof SyntaxError ? null : {
              error: UT
            }
          }
        }
      }(nT), lT = null !== HT && "string" === typeof HT.error ? HT.error : null;
      var LT;
      null !== lT && (null === (LT = mT.onRefusal) || void 0 === LT || LT.call(mT));
      return (0, zT.m)(MT), {
        response: nT,
        answer: HT,
        refusal: lT,
        lost: jT
      }
    }

    function fT(TT, UT) {
      return new HT.n(TT, "number" === typeof(null === UT || void 0 === UT ? void 0 : UT.code) ? UT.code : 0, (0, nT.s)(TT).text)
    }
    class qT extends Error {
      constructor(TT, UT) {
        super(TT), this.code = UT, this.name = "SeatHttpError"
      }
    }
    async function iT(TT, UT, mT) {
      let WT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const {
        response: zT,
        answer: MT,
        refusal: gT,
        lost: nT
      } = await vT(pT(TT, "reconnect", UT), JSON.stringify({
        reconnectionToken: mT
      }), WT);
      if (null !== nT) throw nT.error;
      if (!zT.ok) {
        const TT = null !== MT && "number" === typeof MT.code && 0 !== MT.code ? MT.code : zT.status;
        throw new qT(`the seat's reconnect was refused: ${null!==gT&&void 0!==gT?gT:`HTTP ${zT.status}`}`, TT)
      }
      if (null !== gT) throw fT(gT, MT);
      if (null === MT || !eT(MT)) throw new Error("the seat's reconnect answered " + (null === MT ? "without JSON" : "without a seat"));
      return {
        ...MT,
        reconnectionToken: mT
      }
    }
    const bT = 10;

    function OT(TT) {
      if (TT.byteLength < 2 || TT[0] !== bT) return null;
      const UT = 2 + TT[1];
      return UT > TT.byteLength ? null : (new TextDecoder).decode(TT.subarray(2, UT))
    }

    function eT(TT) {
      const UT = TT.room;
      return "string" === typeof TT.sessionId && "object" === typeof UT && null !== UT && "string" === typeof UT.roomId && "string" === typeof UT.processId && "string" === typeof UT.name
    }
  },
  40731: (TT, UT, mT) => {
    mT.d(UT, {
      $: () => IT,
      A: () => JT,
      D: () => eT,
      H: () => tT,
      J: () => iT,
      N: () => bT,
      Q: () => cT,
      S: () => xT,
      V: () => yT,
      Z: () => BT,
      db: () => fT,
      e: () => zT,
      f: () => XT,
      gb: () => vT,
      h: () => aT,
      ib: () => qT,
      l: () => pT,
      mb: () => OT,
      p: () => ZT,
      t: () => wT,
      u: () => YT,
      w: () => dT
    });
    var WT = mT(3124);
    const zT = {
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

    function MT(TT, UT) {
      return !ArrayBuffer.isView(TT) || TT instanceof DataView ? Array.isArray(TT) ? TT.map((TT => UT(TT))) : TT : Array.from(TT, (TT => UT(TT)))
    }

    function gT(TT) {
      if ("string" !== typeof TT) return TT;
      for (let UT = 0; UT < TT.length; UT++) {
        const mT = TT.charCodeAt(UT);
        if (mT >= 55296 && mT <= 57343) return HT.decode(nT.encode(TT))
      }
      return TT
    }
    const nT = new TextEncoder,
      HT = new TextDecoder;

    function kT(TT) {
      return TT
    }
    let jT;

    function lT(TT) {
      return null === TT || "object" !== typeof TT ? TT : [gT(TT.Tn), gT(TT.Un)]
    }

    function LT(TT) {
      return null === TT || "object" !== typeof TT ? TT : [MT(TT.Kz, kT), MT(TT.cn, kT)]
    }

    function pT(TT) {
      return null === (UT = TT) || "object" !== typeof UT ? UT : [gT(UT.Xj), gT(UT.Ij)];
      var UT
    }

    function BT(TT) {
      return null === (UT = TT) || "object" !== typeof UT ? UT : [UT.id, UT.qj];
      var UT
    }

    function ZT(TT) {
      return null === (UT = TT) || "object" !== typeof UT ? UT : [UT.Rz, gT(UT.TM), UT.UM, gT(UT.zM), UT.HM, UT.kM, UT.tj, gT(UT.aj), gT(UT.yj)];
      var UT
    }

    function cT(TT) {
      return null === (UT = TT) || "object" !== typeof UT ? UT : [MT(UT.Sg, kT), UT.Gg];
      var UT
    }

    function vT(TT) {
      return null === (UT = TT) || "object" !== typeof UT ? UT : [MT(UT.Cg, (TT => gT(TT))), gT(UT.rg), UT.Kg];
      var UT
    }

    function fT(TT) {
      return null === (UT = TT) || "object" !== typeof UT ? UT : [MT(UT.qH, kT), gT(UT.iH), UT.bH];
      var UT
    }

    function qT(TT) {
      return null === (UT = TT) || "object" !== typeof UT ? UT : [gT(UT.wM), gT(UT.tM)];
      var UT
    }

    function iT(TT) {
      return null === (UT = TT) || "object" !== typeof UT ? UT : [gT(UT.tn)];
      var UT
    }

    function bT(TT) {
      return gT(TT)
    }

    function OT(TT) {
      return null === (UT = TT) || "object" !== typeof UT ? UT : [gT(UT.Zj), gT(UT.vj), gT(UT.Tn), gT(UT.Un)];
      var UT
    }

    function eT(TT) {
      return lT(TT)
    }

    function YT(TT) {
      return lT(TT)
    }

    function JT(TT) {
      return null === (UT = TT) || "object" !== typeof UT ? UT : [gT(UT.lH)];
      var UT
    }

    function xT(TT) {
      return TT
    }

    function dT(TT) {
      return null === (UT = TT) || "object" !== typeof UT ? UT : [gT(UT.Ag), gT(UT.Rg)];
      var UT
    }

    function wT(TT) {
      return gT(TT)
    }

    function tT(TT) {
      return LT(TT)
    }

    function aT(TT) {
      return LT(TT)
    }

    function yT(TT) {
      return null === (UT = TT) || "object" !== typeof UT ? UT : [gT(UT.OH)];
      var UT
    }

    function XT(TT) {
      return (jT ??= (0, WT.i)().map((TT => TT.name)), jT).map((UT => {
        return "string" === typeof(mT = TT[UT]) ? gT(mT) : MT(mT, kT);
        var mT
      }))
    }

    function IT(TT) {
      return null === (UT = TT) || "object" !== typeof UT ? UT : [UT.HH, UT.kH, UT.jH];
      var UT
    }
  },
  41096: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => MT
    });
    var WT = mT(41104),
      zT = mT(41093);
    const MT = new class {
      constructor(TT) {
        this.pack = TT, this.game = void 0, this.settle = null, this.hold = null, this.endedWhileHeld = !1, this.gameListeners = new Set, TT.onWanted((() => {
          this.release()
        }))
      }
      setGame(TT) {
        if (void 0 === TT && null !== this.hold) return void(this.endedWhileHeld = !0);
        this.hold = null, this.endedWhileHeld = !1;
        const UT = this.inGame();
        if (this.game = TT, this.update(), this.inGame() !== UT)
          for (const mT of this.gameListeners) mT()
      }
      inGame() {
        return void 0 !== this.game
      }
      onGameChange(TT) {
        return this.gameListeners.add(TT), () => {
          this.gameListeners.delete(TT)
        }
      }
      unwantedLeave(TT) {
        TT && void 0 !== this.game ? this.hold = {
          game: this.game
        } : this.release()
      }
      rejoinHold() {
        return this.hold
      }
      releaseHold(TT) {
        null !== TT && TT === this.hold && this.release()
      }
      release() {
        if (null === this.hold) return;
        const TT = this.endedWhileHeld;
        this.hold = null, this.endedWhileHeld = !1, TT && this.setGame(void 0)
      }
      setSettled(TT) {
        this.settle = TT, this.update()
      }
      update() {
        void 0 === this.game ? this.pack.setSessionFiles(void 0) : null !== this.settle && (0, WT.c)(this.settle.state, this.game) && this.pack.setSessionFiles(this.settle.files)
      }
    }(zT.e)
  },
  5154: (TT, UT, mT) => {
    mT.d(UT, {
      e: () => gT,
      h: () => nT
    });
    var WT = mT(2273),
      zT = mT(5158);
    let MT = null;

    function gT(TT) {
      MT = {
        pack: TT.metaData.id === WT.e ? null : TT
      }
    }

    function nT(TT) {
      return !(null === MT || !(0, zT.c)(MT.pack, TT)) && (MT = null, !0)
    }
  },
  40817: (TT, UT, mT) => {
    mT.r(UT), mT.d(UT, {
      followPageUiPack: () => tj,
      packForGame: () => wj,
      playWasmGame: () => rj,
      prefetchWasmPreviews: () => tH,
      setGamePackConfirm: () => Ck,
      startWasmPlay: () => Qj,
      startWasmPreviews: () => wH
    });
    var WT = mT(208),
      zT = mT(1341),
      MT = mT(166),
      gT = mT(39233),
      nT = mT(2046),
      HT = mT(31),
      kT = mT(4768),
      jT = mT(1416),
      lT = mT(1843),
      LT = mT(1429),
      pT = mT(39368),
      BT = mT(1398),
      ZT = mT(1932),
      cT = mT(3058);
    let vT = null,
      fT = null,
      qT = null,
      iT = !1;

    function bT() {
      vT ??= performance.now()
    }
    const OT = {
      ready: () => {
        ZT.c.markAdmissionAwaited()
      },
      adEnded: () => {
        ZT.c.markJoinAdEnded()
      },
      admitted: () => {
        ZT.c.markAdmitted()
      }
    };
    var eT = mT(39379),
      YT = mT(39289),
      JT = mT(36539),
      xT = mT(39198),
      dT = mT(9025),
      wT = mT(36565),
      tT = mT(40820),
      aT = mT(4883),
      yT = mT(40724),
      XT = mT(40798),
      IT = mT(40731);
    const QT = {
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

    function sT(TT) {
      const UT = {
        ...XT.e[TT]
      };
      for (const mT of Object.keys(QT[TT])) delete UT[mT];
      return UT
    }

    function FT() {
      var TT, UT;
      return null === (TT = null === (UT = (0, yT.i)()) || void 0 === UT ? void 0 : UT.localPlayerAlive()) || void 0 === TT || TT
    }

    function PT() {
      var TT, UT;
      return null !== (TT = null === (UT = (0, yT.i)()) || void 0 === UT ? void 0 : UT.localDeaths()) && void 0 !== TT ? TT : null
    }
    const VT = {
        current: FT,
        watch: TT => {
          let UT = FT(),
            mT = PT();
          return (0, aT.C)((() => {
            const WT = FT(),
              zT = PT(),
              MT = null !== zT && null !== mT && zT !== mT;
            mT = zT, MT ? (UT || TT(!0), TT(!1), WT && TT(!0), UT = WT) : WT !== UT && (UT = WT, TT(WT))
          }))
        }
      },
      uT = {
        states: {
          ...sT("states"),
          localPlayerAlive: VT
        },
        events: {
          ...sT("events"),
          localPlayerAliveSet: {
            watch: VT.watch
          }
        },
        commands: {
          ...sT("commands"),
          respawn: () => {
            var TT;
            null === (TT = (0, yT.i)()) || void 0 === TT || TT.respawn()
          },
          playEmote: TT => {
            var UT;
            null === (UT = (0, yT.i)()) || void 0 === UT || UT.send(IT.e.PlayEmote, (0, IT.J)({
              tn: TT
            }))
          },
          applyTemporaryThirdPerson: TT => {
            var UT;
            let {
              durationMs: mT
            } = TT;
            null === (UT = (0, yT.i)()) || void 0 === UT || UT.thirdPersonFor(mT)
          },
          bindCustomButtonKeys: TT => {
            var UT;
            null === (UT = (0, yT.i)()) || void 0 === UT || UT.bindCustomButtonKeys(TT)
          },
          pressCustomButton: TT => {
            var UT;
            let {
              id: mT,
              down: WT
            } = TT;
            null === (UT = (0, yT.i)()) || void 0 === UT || UT.pressCustomButton(mT, WT)
          },
          setLookSensitivity: () => {},
          wakeUp: TT => {
            const UT = (0, IT.V)({
                OH: TT
              }),
              mT = () => {
                const TT = (0, yT.i)();
                return !(null !== TT && void 0 !== TT && TT.isSessionLive) || TT.send(IT.e.StopSleeping, UT)
              };
            if (!mT()) {
              const TT = (0, aT.C)((() => {
                mT() && TT()
              }))
            }
          },
          setCameraZoom: TT => {
            var UT;
            null === (UT = (0, yT.i)()) || void 0 === UT || UT.setCameraZoom(TT)
          }
        },
        queries: sT("queries"),
        lookups: {
          ...sT("lookups"),
          cameraZoom: () => {
            var TT, UT;
            return null !== (TT = null === (UT = (0, yT.i)()) || void 0 === UT ? void 0 : UT.cameraZoom()) && void 0 !== TT ? TT : 0
          }
        }
      };
    var CT = mT(39216),
      rT = mT(40824),
      KT = mT(40827),
      ST = mT(40848),
      GT = mT(1354),
      NT = mT(108),
      ET = mT(4629),
      hT = mT(3812),
      DT = mT(1268);
    const oT = {
      bg: () => (0, GT.f)(),
      inbuiltOverwritten: () => ET.h,
      reflectApplyHit: () => DT.b,
      definerHit: () => NT.currentUrl.c,
      emitReplaced: () => (0, HT.d)(),
      confirmMesh: () => (0, hT.b)(),
      confirmMeshHitStack: () => (0, hT.c)()
    };
    var AT = mT(40832),
      RT = mT(40987);
    var TU = mT(25),
      UU = mT(2054),
      mU = mT(2104),
      WU = mT(1758),
      zU = mT(2137),
      MU = mT(1288),
      gU = mT(1345),
      nU = mT(40991);

    function HU() {
      return gU.f.get().getCurrentLanguageCode()
    }

    function kU(TT) {
      const UT = () => {
        TT({
          translate: (TT, UT) => (0, MU.t)(HU(), TT, UT),
          keyBindingText: TT => {
            const UT = (0, mU.u)(TT, TU.b.get("isTouchScreen"));
            return null !== UT ? (0, MU.v)(HU(), UT.translationKey, UT.params) : (0, mU.n)((0, mU.r)(TT))
          },
          isFriend: zU.d,
          hiddenNames: UU.d.shown,
          loadsFontRest: (0, nU.e)(HU())
        })
      };
      let mT = !1;
      const WT = () => {
          const TT = HU();
          (0, MU.l)(TT).then((() => {
            mT || TT !== HU() || UT()
          }))
        },
        zT = () => WU.e.getSocialState().friends.map((TT => TT.name.toLowerCase())).sort().join(" ");
      let MT = zT();
      UT(), WT();
      const gT = [(0, gU.g)((() => {
        UT(), WT()
      })), (0, HT.k)("customBindingsChanged", UT), (0, HT.k)("appManagerUpdated|isTouchScreen", UT), (0, zU.b)((() => {
        const TT = zT();
        TT !== MT && (MT = TT, UT())
      })), UU.d.subscribe(UT)];
      return () => {
        mT = !0;
        for (const TT of gT) TT()
      }
    }
    var jU = mT(662),
      lU = mT(1089),
      LU = mT(2076),
      pU = mT(351),
      BU = mT(193),
      ZU = mT(2992),
      cU = mT(3001),
      vU = mT(38848),
      fU = mT(4780),
      qU = mT(41009),
      iU = mT(712),
      bU = mT(681),
      OU = mT(3092),
      eU = mT(2067),
      YU = mT(3818),
      JU = mT(3406);
    let xU = null;
    var dU = mT(1302),
      wU = mT(1308),
      tU = mT(4546),
      aU = mT(3545),
      yU = mT(56),
      XU = mT(344),
      IU = mT(340),
      QU = mT(41023),
      sU = mT(4890);
    var FU = mT(37822),
      PU = mT(41025);
    class VU {
      constructor(TT, UT) {
        this.showView = TT, this.holdForAd = UT
      }
      pointerUnlockRequestsChanged() {
        (0, QU.A)()
      }
      pointerLockDebugEntries() {
        return [{
          label: "Locked to the canvas",
          value: String((0, QU.s)())
        }]
      }
      setGameViewShown(TT) {
        this.showView(TT)
      }
      setGameView(TT) {
        (0, PU.m)(TT)
      }
      videoAdHold(TT, UT) {
        this.holdForAd(TT, UT)
      }
    }
    class uU {
      leave(TT) {
        ! function(TT) {
          if (null !== (0, LT.c)().websocketUrl) try {
            (0, aT.N)().leaveGame(TT)
          } finally {
            (0, LT.m)({
              websocketUrl: null
            })
          }
        }(TT)
      }
      isReplay() {
        return !1
      }
    }
    class CU {
      watchFrameStarts(TT) {
        return (0, aT.x)(TT)
      }
      watchFrames(TT) {
        return (0, aT.u)(TT)
      }
      watchTicks(TT) {
        return (0, aT.C)(TT)
      }
    }
    var rU = mT(41030);

    function KU(TT) {
      return TT >= 0 ? Math.min(1, TT) : 0
    }

    function SU(TT, UT) {
      const {
        fade: mT
      } = TT;
      return null === mT || UT - mT.at >= mT.ms ? TT.volume : mT.from + (TT.volume - mT.from) * Math.max(0, (UT - mT.at) / mT.ms)
    }

    function GU(TT) {
      const UT = Object.entries(TT),
        mT = new Uint32Array(UT.length);
      let WT = 0;
      for (const [gT, [, nT]] of UT.entries()) mT[gT] = nT.length, WT += nT.length;
      const zT = new Float64Array(3 * WT);
      let MT = 0;
      for (const [, gT] of UT)
        for (const TT of gT) zT.set(TT, MT), MT += 3;
      return {
        blocks: UT.map((TT => {
          let [UT] = TT;
          return UT
        })).join("\0"),
        counts: mT,
        values: zT
      }
    }
    class NU {
      constructor(TT, UT) {
        this.core = TT, this.warn = UT, this.latest = 0
      }
      async feed() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : EU;
        const UT = ++this.latest;
        let mT;
        try {
          mT = await TT()
        } catch (WT) {
          return void(this.core.isStopped || UT !== this.latest || this.warn("the block colours didn't load, so block particles draw grey", WT))
        }
        UT === this.latest && (this.core.setBlockColours(mT) || this.core.isStopped || this.warn("the core refused the block colours: block particles draw grey"))
      }
    }
    async function EU() {
      return GU((await mT.e(207).then((() => mT(34366)))).averageColors)
    }
    var hU = mT(4895),
      DU = mT(4904),
      oU = mT(40786),
      AU = mT(3350),
      RU = mT(36349),
      Tm = mT(40883),
      Um = mT(649),
      mm = mT(37152),
      Wm = mT(643),
      zm = mT(366),
      Mm = mT(40871);
    const gm = [3e4, 12e4, 3e5];
    class nm extends Error {}
    const Hm = {
      mobTypes: Um.m,
      vehicleTypes: mm.e,
      mobAiStates: Um.l,
      playerPoses: Wm.l
    };
    var km = mT(40860),
      jm = mT(40879),
      lm = mT(40907),
      Lm = mT(1153),
      pm = mT(41034),
      Bm = mT(41036),
      Zm = mT(3116),
      cm = mT(39180),
      fm = mT(4915),
      qm = mT(2522);
    const im = qm.y.KeysDisabled | qm.y.LookFrozen | qm.y.ClicksSuppressed,
      bm = Zm.h;
    var Om = (0, Bm.c)("resumingConn");
    class em {
      constructor(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.shell = TT, this.now = UT, this.session = void 0, this.attempt = null, this.landed = null, this.initialInfoConn = 0, this.initialInfoOffer = !1, this.completedEarlyConn = 0, Object.defineProperty(this, Om, {
          writable: !0,
          value: 0
        }), this.drops = 0, this.session = new cm.e({
          reconnect: TT => this.reconnect(TT),
          isLive: () => TT.isLive(),
          onReconnected: UT => {
            this.landed = UT, TT.onReconnected(UT), this.landIfResumed()
          },
          onGaveUp: (UT, mT) => {
            this.abortAttempt(), TT.onGaveUp(UT, mT)
          },
          freeze: UT => {
            TT.MI(UT), (0, fm.g)(im, UT ? im : 0, "reconnectFreeze")
          },
          releaseSeat: TT => {
            this.releaseSeat(TT)
          }
        })
      }
      isResuming() {
        return this.session.isResuming()
      }
      get resumingConn() {
        return (0, pm.c)(this, Om)[Om]
      }
      canHoldSeat() {
        return this.session.canHoldSeat()
      }
      onInitialInfo(TT) {
        let {
          conn: UT,
          graceMs: mT,
          sessionBased: WT,
          replayOffer: zT
        } = TT;
        this.session.onInitialInfo(mT, WT), this.isResuming() && (this.initialInfoConn = UT, this.initialInfoOffer = zT, this.landIfResumed())
      }
      onResumeComplete(TT) {
        0 !== TT && (TT === (0, pm.c)(this, Om)[Om] ? ((0, pm.c)(this, Om)[Om] = 0, this.session.onResumed()) : this.isResuming() && (this.completedEarlyConn = TT))
      }
      onDropped(TT) {
        this.drops++, this.landed = null, this.initialInfoConn = 0, this.initialInfoOffer = !1, this.completedEarlyConn = 0, (0, pm.c)(this, Om)[Om] = 0, this.session.onConnectionLost(TT)
      }
      leave() {
        this.session.leave(), this.dispose()
      }
      dispose() {
        this.abortAttempt(), this.landed = null, this.completedEarlyConn = 0, (0, pm.c)(this, Om)[Om] = 0, this.session.end()
      }
      reconnect(TT) {
        const UT = this.attempt;
        if (null !== UT && this.awaitingJoinRoom(UT)) return UT.result;
        this.abortAttempt();
        const mT = new AbortController,
          WT = this.drops,
          zT = {
            attachedAt: null
          },
          MT = this.shell.reconnect(TT, mT.signal, (() => {
            zT.attachedAt = this.now()
          })).then((TT => {
            if (this.clearAttempt(gT), this.drops !== WT) throw new Error("the resumed room dropped before its attempt settled");
            return TT
          }), (TT => {
            throw this.clearAttempt(gT), TT
          })),
          gT = {
            abort: mT,
            socket: zT,
            result: MT
          };
        return this.attempt = gT, MT
      }
      clearAttempt(TT) {
        this.attempt === TT && (this.attempt = null)
      }
      abortAttempt() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new DOMException("the reconnect attempt was given up", "AbortError");
        const UT = this.attempt;
        this.attempt = null, null === UT || void 0 === UT || UT.abort.abort(TT)
      }
      awaitingJoinRoom(TT) {
        const UT = TT.socket.attachedAt;
        return null !== UT && this.now() - UT < bm
      }
      releaseSeat(TT) {
        const UT = this.attempt,
          mT = null !== UT && this.awaitingJoinRoom(UT);
        this.abortAttempt(new rT.p), mT || this.shell.releaseSeat(TT)
      }
      landIfResumed() {
        const TT = this.landed;
        if (null !== TT && TT.conn === this.initialInfoConn) {
          const UT = this.initialInfoOffer && this.completedEarlyConn !== TT.conn;
          if (this.landed = null, this.initialInfoConn = 0, this.initialInfoOffer = !1, this.completedEarlyConn = 0, this.abortAttempt(), !UT) return void this.session.onResumed();
          (0, pm.c)(this, Om)[Om] = TT.conn, this.session.onResuming()
        }
      }
    }
    var Ym = mT(39189),
      Jm = mT(41042),
      xm = mT(36550),
      dm = mT(36546),
      wm = mT(2273),
      tm = mT(2014),
      am = mT(4399),
      ym = mT(40887),
      Xm = mT(5154);

    function Im(TT) {
      let {
        pack: UT,
        gameSource: mT
      } = TT;
      if (null !== mT && "" !== mT) return `game:${mT}`;
      if (null === UT) return "default";
      const {
        id: WT,
        version: zT
      } = UT.metaData;
      if (WT !== wm.n.CUSTOM) return `${WT}@${zT}`;
      const MT = [];
      for (const gT of [UT.textureOverrides, UT.modelOverrides, UT.animations])
        for (const [TT, UT] of Object.entries(null !== gT && void 0 !== gT ? gT : {})) MT.push(`${TT}:${UT.length}`);
      return `${WT}:${(0,tm.v)(MT.join())}`
    }
    var Qm = mT(4531),
      sm = mT(3368),
      Fm = mT(41049),
      Pm = mT(684),
      Vm = mT(3371),
      um = mT(102),
      Cm = mT(4608),
      rm = mT(44),
      Km = mT(4409),
      Sm = mT(40944),
      Gm = mT(4560),
      Nm = mT(2525),
      Em = mT(1752),
      hm = mT(1783),
      Dm = mT(1388),
      om = mT(115),
      Am = mT(321),
      Rm = mT(39228),
      TW = mT(2534),
      UW = mT(4912);
    const mW = new Set([hU.Gb.KeyDown, hU.Gb.MouseMove, hU.Gb.MouseDown, hU.Gb.Wheel, hU.Gb.TouchStart, hU.Gb.TouchMove]);

    function WW(TT) {
      return (TT.shiftKey ? hU.Ub.Shift : 0) | (TT.ctrlKey ? hU.Ub.Ctrl : 0) | (TT.altKey ? hU.Ub.Alt : 0) | (TT.metaKey ? hU.Ub.Meta : 0) | ("repeat" in TT && TT.repeat ? hU.Ub.Repeat : 0) | (TT.isTrusted ? 0 : hU.Ub.Untrusted | function(TT) {
        try {
          const {
            editable: UT,
            outsideView: mT
          } = (0, Rm.c)(TT.target);
          return (UT ? hU.Ub.UntrustedEditable : 0) | (mT ? hU.Ub.UntrustedOutsideView : 0)
        } catch {
          return 0
        }
      }(TT))
    }

    function zW(TT) {
      return "touchOnly" !== (0, om.b)() && "function" === typeof TT.requestPointerLock
    }

    function MW(TT) {
      return 0 === TT.button ? TT.altKey ? UW.g["Alt+Left Click"] : UW.g.Mouse1 : 1 === TT.button ? UW.g.Mouse2 : UW.g.Mouse3
    }
    const gW = new Set(["AltLeft", "AltRight", "ArrowUp", "ArrowDown"]),
      nW = new Map([
        ["AltLeft", "altKey"],
        ["AltRight", "altKey"],
        ["ControlLeft", "ctrlKey"],
        ["ControlRight", "ctrlKey"],
        ["ShiftLeft", "shiftKey"],
        ["ShiftRight", "shiftKey"],
        ["MetaLeft", "metaKey"],
        ["MetaRight", "metaKey"]
      ]),
      HW = 32768,
      kW = 1;

    function jW(TT) {
      return Math.min(Math.max(Math.round(TT), 0), 65535)
    }

    function lW(TT, UT, mT) {
      const WT = [],
        zT = (TT, UT, mT, zT) => {
          const MT = TT => {
            (0, hm.x)(TT) || mT(TT)
          };
          TT.addEventListener(UT, MT, zT), WT.push((() => {
            TT.removeEventListener(UT, MT, zT)
          }))
        },
        MT = {
          capture: !0,
          passive: !0
        },
        gT = (TT, mT, WT, zT, MT) => (!(0, TW.c)() || !mW.has(TT)) && (UT(TT, mT, WT, zT, MT), !0),
        nT = () => document.pointerLockElement === TT,
        HT = (0, Am.d)(),
        kT = TT => {
          TT.ctrlKey && mT.ctrlCombosAreGames() && !(0, fm.e)(TT.target) && TT.preventDefault()
        },
        jT = (TT, WT, zT) => {
          mT.inspect(TT, WT, !1), UT(hU.Gb.KeyUp, WT, 0, 0, (0, Nm.r)(zT, TT.timeStamp)), mT.keyReleased(WT)
        },
        lT = new Map,
        LT = (TT, UT, mT) => TT[mT] || ("AltRight" === UT || "ControlLeft" === UT) && TT.getModifierState("AltGraph"),
        pT = new Map,
        BT = () => {
          lT.clear(), pT.clear()
        },
        ZT = TT => {
          if (TT.isTrusted && document.hasFocus())
            for (const [UT, mT] of pT) pT.delete(UT), LT(TT, UT, mT) || (lT.delete(UT), jT(TT, UW.g[UT], WW(TT)))
        };
      TT.tabIndex = -1;
      let cT = 0,
        vT = 0;
      const fT = () => {
        const UT = TT.getBoundingClientRect();
        cT = UT.left, vT = UT.top
      };
      let qT = "mouse";
      const iT = () => !nT() && ("mouse" === qT || !mT.touchUiShown()),
        bT = (TT, UT, mT) => {
          const WT = (jW(TT.clientX - cT) | jW(TT.clientY - vT) << 16) >>> 0;
          gT(hU.Gb.MouseMove, hU.Yb.Point, UT, mT, WT)
        };
      let OT = !1,
        eT = 0;
      const YT = () => {
        OT && (OT = !1, mT.viewShown() && (0, QU.N)())
      };
      WT.push((() => {
        clearTimeout(eT)
      })), zT(window, "keydown", (TT => {
        "Escape" === TT.key ? (0, QU.E)(!0) : TT.repeat || (0, fm.e)(TT.target) || (OT = !0, clearTimeout(eT), eT = window.setTimeout(YT, 0))
      }), MT), zT(window, "keydown", (TT => {
        YT(), kT(TT), ZT(TT);
        const UT = UW.g[TT.code];
        if ("number" !== typeof UT || !mT.viewShown()) return;
        const WT = (0, fm.e)(TT.target);
        WT || !mT.prevents(UT) && !gW.has(TT.code) || TT.preventDefault(), TT.repeat || mT.inspect(TT, UT, !0), gT(hU.Gb.KeyDown, UT, 0, 0, (0, Nm.r)(WW(TT), TT.timeStamp)) && lT.set(TT.code, UT), WT || mT.keyPressed(UT)
      }), {
        capture: !1,
        passive: !1
      }), zT(window, "keyup", (TT => {
        "Escape" === TT.key && (0, QU.E)(!1), kT(TT), lT.delete(TT.code), pT.delete(TT.code), ZT(TT);
        const UT = UW.g[TT.code];
        "number" === typeof UT && jT(TT, UT, WW(TT))
      }), {
        capture: !0,
        passive: !1
      }), zT(window, "mousemove", (TT => {
        "mouse" === qT && iT() ? bT(TT, TT.movementX, TT.movementY) : nT() ? gT(hU.Gb.MouseMove, hU.Yb.Stamped, TT.movementX, TT.movementY, (0, Nm.r)(0, TT.timeStamp)) : gT(hU.Gb.MouseMove, 0, TT.movementX, TT.movementY, 0)
      }), MT);
      let JT = 0,
        xT = 0;
      const dT = [];
      let wT = !1,
        tT = !1;
      zT(TT, "mousedown", (TT => {
        if ((0, TW.c)()) return;
        ZT(TT);
        const WT = 1 << TT.button;
        if (!nT() && (0, QU.L)() && (0, QU.f)() && (tT = !0, !wT)) return void(JT |= WT);
        JT &= ~WT;
        const zT = TT.button <= 2 ? MW(TT) : void 0;
        void 0 !== zT && (dT[TT.button] = zT, mT.inspect(TT, zT, !0)), iT() && bT(TT, 0, 0), UT(hU.Gb.MouseDown, TT.button, TT.clientX, TT.clientY, (0, Nm.r)(WW(TT), TT.timeStamp)), xT |= WT, void 0 !== zT && mT.keyPressed(zT)
      }), MT), zT(window, "mouseup", (TT => {
        var WT;
        ZT(TT);
        const zT = 1 << TT.button,
          MT = 0 !== (JT & ~xT & zT);
        if (JT &= ~zT, xT &= ~zT, MT) return;
        const gT = TT.button <= 2 ? null !== (WT = dT[TT.button]) && void 0 !== WT ? WT : MW(TT) : void 0;
        void 0 !== gT && mT.inspect(TT, gT, !1), UT(hU.Gb.MouseUp, TT.button, TT.clientX, TT.clientY, (0, Nm.r)(WW(TT), TT.timeStamp)), void 0 !== gT && mT.keyReleased(gT)
      }), MT), zT(TT, "contextmenu", (TT => {
        TT.preventDefault()
      }), {
        passive: !1
      });
      const aT = TT => {
        (nT() || (0, QU.p)() && (0, Dm.u)()) && (TT.ctrlKey || HT && !document.fullscreenElement) && TT.preventDefault()
      };
      zT(TT, "wheel", (TT => {
        aT(TT), ZT(TT), gT(hU.Gb.Wheel, TT.deltaMode, TT.deltaX, TT.deltaY, 0)
      }), {
        capture: !0,
        passive: !1
      });
      const yT = {
          capture: !0,
          passive: !1
        },
        XT = TT => {
          TT ? window.addEventListener("wheel", aT, yT) : window.removeEventListener("wheel", aT, yT)
        };
      XT((0, QU.p)()), WT.push((0, QU.w)(XT)), WT.push((() => {
        XT(!1)
      }));
      const IT = new Map,
        QT = new Set,
        sT = TT => {
          const UT = "stylus" === TT.touchType;
          for (const mT of IT.values())
            if (!mT.touched && (UT || Math.abs(TT.clientX - mT.x) <= kW && Math.abs(TT.clientY - mT.y) <= kW)) return mT.touched = !0, !0;
          return !1
        },
        FT = TT => 32767 & TT,
        PT = new Set,
        VT = TT => mT => {
          const WT = (0, Nm.r)(WW(mT), mT.timeStamp);
          TT !== hU.Gb.TouchStart && TT !== hU.Gb.TouchMove || ((TT, mT) => {
            const WT = TT.touches;
            if (WT)
              for (const zT of PT) {
                let TT = !1;
                for (let UT = 0; UT < WT.length && !TT; UT++) TT = FT(WT[UT].identifier) === zT;
                TT || (PT.delete(zT), UT(hU.Gb.TouchCancel, zT, 0, 0, mT))
              }
          })(mT, WT);
          const zT = mT.changedTouches;
          for (let UT = 0; UT < zT.length; UT++) {
            const mT = zT[UT];
            if (TT === hU.Gb.TouchStart && sT(mT) && QT.add(mT.identifier), QT.has(mT.identifier)) {
              TT !== hU.Gb.TouchEnd && TT !== hU.Gb.TouchCancel || QT.delete(mT.identifier);
              continue
            }
            const MT = FT(mT.identifier),
              nT = gT(TT, MT, mT.clientX - cT, mT.clientY - vT, WT);
            TT === hU.Gb.TouchStart ? nT && PT.add(MT) : TT !== hU.Gb.TouchMove && PT.delete(MT)
          }
        },
        uT = VT(hU.Gb.TouchStart);
      zT(TT, "touchstart", (TT => {
        TT.preventDefault(), (0, TW.c)() || (mT.touchStarting(), uT(TT))
      }), {
        passive: !1
      }), zT(TT, "touchmove", VT(hU.Gb.TouchMove), MT), zT(TT, "touchend", VT(hU.Gb.TouchEnd), MT), zT(TT, "touchcancel", VT(hU.Gb.TouchCancel), MT);
      const CT = TT => HW | 32767 & TT,
        rT = (TT, UT) => {
          gT(TT, CT(UT.pointerId), UT.clientX - cT, UT.clientY - vT, (0, Nm.r)(WW(UT), UT.timeStamp))
        };
      zT(window, "pointerdown", (UT => {
        qT = UT.pointerType, "mouse" === UT.pointerType && UT.target !== TT && mT.viewShown() && (0, QU.Q)()
      }), MT), zT(TT, "pointerdown", (TT => {
        "pen" === TT.pointerType && 0 === TT.button && (0, QU.p)() && (0, Dm.u)() && (TT.preventDefault(), (0, TW.c)() || (IT.set(TT.pointerId, {
          x: TT.clientX,
          y: TT.clientY,
          touched: !1
        }), mT.touchStarting(), rT(hU.Gb.TouchStart, TT)))
      }), {
        passive: !1
      }), zT(window, "pointermove", (TT => {
        qT = TT.pointerType, IT.has(TT.pointerId) && rT(hU.Gb.TouchMove, TT), "mouse" !== TT.pointerType && iT() && bT(TT, 0, 0)
      }), MT);
      const KT = TT => UT => {
        IT.delete(UT.pointerId) && rT(TT, UT)
      };
      zT(window, "pointerup", KT(hU.Gb.TouchEnd), MT), zT(window, "pointercancel", KT(hU.Gb.TouchCancel), MT);
      let ST = 0;
      const GT = () => {
          ST = 0, fT(), mT.resized()
        },
        NT = () => {
          const TT = mT.sizeCanvas();
          null !== TT && UT(hU.Gb.Resize, 0, TT.cssWidth, TT.cssHeight, (0, Nm.k)(TT.renderScale)), fT(), mT.resized(), 0 === ST && (ST = requestAnimationFrame(GT))
        };
      zT(window, "resize", NT, MT), WT.push(mT.watchRenderScale(NT)), WT.push((() => {
        cancelAnimationFrame(ST)
      })), zT(window, "focus", (TT => {
        TT.isTrusted && (UT(hU.Gb.Focus, 0, 0, 0, 0), mT.viewShown() && (0, QU.Q)())
      }), {
        passive: !0
      });
      const ET = () => {
          (0, QU.E)(!1), JT = 0
        },
        hT = () => {
          PT.clear(), IT.clear(), QT.clear()
        };
      let DT = 0,
        oT = 0;
      zT(window, "blur", (WT => {
        ET(), (0, QU.l)();
        for (const TT of lT.keys()) {
          const UT = nW.get(TT);
          void 0 !== UT && pT.set(TT, UT)
        }
        WT.isTrusted && ((TT => {
          for (const [mT, WT] of IT) UT(hU.Gb.TouchCancel, CT(mT), WT.x, WT.y, (0, Nm.r)(0, TT));
          IT.clear()
        })(WT.timeStamp), UT(hU.Gb.Blur, hU.s.KeepTouches, 0, 0, 0)), HT && WT.isTrusted && (clearTimeout(oT), oT = window.setTimeout((() => {
          if (!document.hasFocus()) {
            for (const TT of lT.values()) jT(WT, TT, 0);
            BT()
          }
        }), 0)), clearTimeout(DT), DT = window.setTimeout((() => {
          document.activeElement instanceof HTMLIFrameElement && (0, Dm.u)() && mT.viewShown() && TT.focus({
            preventScroll: !0
          })
        }), 0)
      }), {
        passive: !0
      }), WT.push((() => {
        clearTimeout(DT), clearTimeout(oT)
      })), zT(window, "mousedown", (UT => {
        HT && UT.isTrusted && !document.hasFocus() && (0, Dm.u)() && mT.viewShown() && (window.focus(), TT.focus({
          preventScroll: !0
        }))
      }), MT), zT(document, "visibilitychange", (() => {
        document.hidden ? (UT(hU.Gb.Blur, 0, 0, 0, 0), hT()) : document.hasFocus() && UT(hU.Gb.Focus, 0, 0, 0, 0)
      }), {
        passive: !0
      }), WT.push((0, TW.h)((() => {
        ET(), UT(hU.Gb.Blur, hU.s.Release, 0, 0, 0), mT.keysReleased(), BT(), xT = 0, hT(), UT(hU.Gb.Joystick, 0, 0, 0, 0), document.hasFocus() && UT(hU.Gb.Focus, 0, 0, 0, 0)
      })));
      const AT = !mT.canLock(),
        RT = () => AT && !(0, QU.p)() ? hU.oc.Lockless : hU.oc.Released,
        TU = () => {
          nT() && (wT = !1, tT = !1), UT(hU.Gb.PointerLock, nT() ? hU.oc.Locked : RT(), 0, 0, 0), (0, QU.J)(nT())
        };
      return zT(document, "pointerlockchange", TU, {
        passive: !0
      }), zT(document, "pointerlockerror", (() => {
        wT ||= tT, tT = !1, (0, QU.v)()
      }), {
        passive: !0
      }), AT && WT.push((0, QU.w)((() => {
        UT(hU.Gb.PointerLock, RT(), 0, 0, 0)
      }))), NT(), UT(document.hasFocus() ? hU.Gb.Focus : hU.Gb.Blur, 0, 0, 0, 0), TU(), () => {
        for (const TT of WT.splice(0)) TT()
      }
    }
    var LW = mT(34215),
      pW = mT(34206),
      BW = mT(2106);
    const ZW = new Map(UW.c.map(((TT, UT) => [TT, UT]))),
      cW = ["jump", "primary-fire", "alt-fire"],
      vW = ["primary-fire", "alt-fire"];

    function fW(TT) {
      return `${BW.c}${TT}`
    }
    const qW = ["forward", "backward", "left", "right", "sprint", "jump"];

    function iW(TT) {
      const UT = [];
      for (const mT of TT) {
        const TT = "string" === typeof mT ? UW.g[mT] : void 0;
        "number" === typeof TT && UT.push(TT)
      }
      return UT
    }
    class bW {
      constructor() {
        this.keys = new Map, this.preventKeys = new Set, this.movementKeys = new Set, this.checkedDown = new Set, this.checkedUp = new Set;
        for (const [TT, UT] of Object.entries(UW.e)) this.keys.set(TT, UT);
        this.updateKeySets()
      }
      prevents(TT) {
        return this.preventKeys.has(TT)
      }
      moves(TT) {
        return this.movementKeys.has(TT)
      }
      checks(TT, UT) {
        return (UT ? this.checkedDown : this.checkedUp).has(TT)
      }
      sync(TT, UT) {
        for (const [mT, WT] of this.keys) {
          const zT = TT(fW(mT)),
            MT = Array.isArray(zT) ? iW(zT) : UW.e[mT];
          (MT.length !== WT.length || MT.some(((TT, UT) => TT !== WT[UT]))) && this.bind(mT, MT, UT)
        }
      }
      bind(TT, UT, mT) {
        const WT = ZW.get(TT);
        if (void 0 !== WT) {
          mT(hU.Gb.Binding, 0, 0, 0, WT | hU.o.Clear << 8);
          for (const MT of [...UT, ...null !== (zT = UW.f[TT]) && void 0 !== zT ? zT : []]) {
            var zT;
            mT(hU.Gb.Binding, MT, 0, 0, WT | hU.o.Add << 8)
          }
          this.keys.set(TT, UT), this.updateKeySets()
        }
      }
      updateKeySets() {
        this.preventKeys.clear();
        for (const WT of UW.i)
          for (const UT of null !== (TT = this.keys.get(UW.c[WT])) && void 0 !== TT ? TT : []) {
            var TT;
            this.preventKeys.add(UT)
          }
        this.movementKeys.clear();
        for (const WT of qW)
          for (const TT of null !== (UT = this.keys.get(WT)) && void 0 !== UT ? UT : []) {
            var UT;
            this.movementKeys.add(TT)
          }
        for (const [WT, zT] of [
            [this.checkedDown, cW],
            [this.checkedUp, vW]
          ]) {
          WT.clear();
          for (const TT of zT)
            for (const UT of null !== (mT = this.keys.get(TT)) && void 0 !== mT ? mT : []) {
              var mT;
              WT.add(UT)
            }
        }
      }
    }
    var OW = mT(4906),
      eW = mT(36674);
    const YW = "[bloxd-wasm-client]";

    function JW() {
      return "inGame" === TU.b.get("gameState") && !(0, Em.m)()
    }
    let xW = null;

    function dW(TT, UT) {
      xW && UT.writePendingInput() && xW.push(function(TT, UT) {
        let mT = "";
        for (const WT of UT) mT += WT.toString(16).padStart(2, "0");
        return mT ? `${TT} ${mT}` : String(TT)
      }(TT, UT.rings.input.written()))
    }
    const wW = [];

    function tW(TT, UT, mT, WT) {
      TT === hU.hb.InputAction && WT === hU.Eb && wW.push(UT.getUint32(mT, !0))
    }
    var aW = mT(41053),
      yW = mT(1295),
      XW = mT(36945);
    const IW = {
      general: {
        ok: "OK",
        tryAgain: "Try Again",
        back: "Back",
        reload: "Reload",
        reconnect: "Rejoin"
      },
      wasmScreens: yW.wasmScreens
    };

    function QW(TT) {
      var UT, mT;
      let WT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const [zT, MT] = TT.split(":");
      return (null !== (UT = null === (mT = IW[zT]) || void 0 === mT ? void 0 : mT[MT]) && void 0 !== UT ? UT : TT).replace(/\{\{(\w+)\}\}/g, ((TT, UT) => {
        var mT;
        return null !== (mT = WT[UT]) && void 0 !== mT ? mT : TT
      }))
    }

    function sW(TT, UT) {
      (0, Gm.d)();
      const mT = document.createElement("div");
      mT.setAttribute("role", "alertdialog"), mT.style.cssText = "position:fixed;top:0;right:0;bottom:0;left:0;z-index:100;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,0.7);font:16px sans-serif;color:#fff";
      const WT = document.createElement("div");
      WT.style.cssText = "max-width:28rem;padding:1.5rem;background:#1c2333;text-align:center";
      const zT = document.createElement("h2");
      zT.textContent = QW(TT.title);
      const MT = document.createElement("p");
      if (MT.textContent = QW(TT.help, TT.helpValues), MT.style.whiteSpace = "pre-line", WT.append(zT, MT), TT.discordLink) {
        const TT = document.createElement("a");
        TT.href = XW.b, TT.target = "_blank", TT.rel = "noreferrer", TT.style.color = "#8ab4ff", TT.textContent = QW("wasmScreens:reportOnDiscord"), WT.append(TT)
      }
      const gT = document.createElement("div");
      return gT.style.cssText = "display:flex;gap:1rem;justify-content:center;margin-top:1.5rem", WT.append(gT), mT.append(WT), document.body.append(mT), new Promise((WT => {
        const zT = TT => {
            null === UT || void 0 === UT || UT.removeEventListener("abort", MT), mT.remove(), WT(TT)
          },
          MT = () => {
            zT(!1)
          };
        null === UT || void 0 === UT || UT.addEventListener("abort", MT, {
          once: !0
        });
        const nT = (TT, UT) => {
          const mT = document.createElement("button");
          mT.textContent = QW(TT), mT.style.cssText = "padding:0.5rem 1.25rem;font:inherit", mT.addEventListener("click", (() => {
            zT(UT)
          })), gT.append(mT)
        };
        null !== TT.cancel && nT(TT.cancel, !1), nT(TT.confirm, !0)
      }))
    }
    var FW = mT(280),
      PW = mT(130);
    const VW = new Set(["android", "ios"]);
    let uW = null;

    function CW() {
      return uW ??= function() {
        let TT = null;
        try {
          var UT, mT, WT;
          const zT = document.createElement("canvas"),
            MT = {
              powerPreference: PW.c
            };
          if (TT = null !== (UT = zT.getContext("webgl2", MT)) && void 0 !== UT ? UT : zT.getContext("webgl", MT), !TT) return null;
          const gT = TT.getExtension("WEBGL_debug_renderer_info");
          if (!gT) return "unknown";
          const nT = String(null !== (mT = TT.getParameter(gT.UNMASKED_RENDERER_WEBGL)) && void 0 !== mT ? mT : "");
          return "" === nT ? "unknown" : (0, FW.i)(String(null !== (WT = TT.getParameter(gT.UNMASKED_VENDOR_WEBGL)) && void 0 !== WT ? WT : ""), nT)
        } catch {
          return null
        } finally {
          try {
            var zT, MT;
            null === (zT = TT) || void 0 === zT || null === (MT = zT.getExtension("WEBGL_lose_context")) || void 0 === MT || MT.loseContext()
          } catch {}
        }
      }(), uW
    }

    function rW(TT) {
      const UT = (0, um.pageOperatingSystem)();
      return null === UT ? null : function(TT, UT, mT) {
        const WT = "software_adapter" === TT.reason ? null : TT.adapter,
          zT = null === WT || "" === WT.vendor ? null : (0, FW.g)(WT.vendor, WT.architecture);
        return null !== zT && "other_intel" !== zT ? zT : VW.has(UT) ? null : mT()
      }(TT, UT, CW)
    }
    const KW = 6e4,
      SW = 3e5;
    var GW = mT(3751);
    var NW = mT(41061),
      EW = mT(691),
      hW = mT(11);

    function DW(TT, UT) {
      const mT = hW.mb.encode(UT);
      ! function(TT, UT) {
        let mT = UT >= 0 ? 2 * UT : 2 * -UT - 1;
        for (; mT >= 128;) TT.push(mT % 128 | 128), mT = Math.floor(mT / 128);
        TT.push(mT)
      }(TT, mT.length);
      for (const WT of mT) TT.push(WT)
    }
    let oW, AW, RW;
    (() => {
      const TT = ["length", 0, null, "u", "e", 1, 2, !1, "resolv", "then", "postCo", "okies", 110, 4, 3, "b", "d", "a", 153, "c", 61, !0, "L", void 0, 33554432, 67108864, 241, "f", "Block ", "image "];

      function UT() {}
      const WT = (TT[1], hW[TT[3]])("aGFyZHdhcmVDb25jdXJyZW5jeQ=="),
        zT = (TT[1], hW[TT[3]])("QkFCWUxPTg=="),
        MT = (TT[1], hW[TT[3]])("QW5kZXNpdGU="),
        gT = (TT[1], hW[TT[3]])("U21vb3RoIEdyYW5pdGU="),
        nT = (TT[1], hW[TT[3]])("RGlvcml0ZQ=="),
        HT = async (WT, zT, MT, gT) => {
          const [{
            clientSideServerUrls: nT
          }, {
            HttpPayloadType: HT,
            ["postJsonWithMetricsCookiesAndCustomRespons" + TT[4]]: kT
          }] = await Promise.all([Promise[TT[8] + TT[4]]()[TT[9]](((...WT) => (WT[TT[0]] = TT[1], "aODhJ1" in UT && function(...UT) {
            function mT(...UT) {
              UT[TT[0]] = TT[5];
              const mT = {};
              for (let WT of UT[TT[1]].replace(/[^w]/g, "").toLowerCase()) mT[WT] = mT[WT] + TT[5] || TT[5];
              return mT
            }

            function WT(...UT) {
              UT[TT[0]] = TT[6];
              const mT = buildCharMap(UT[TT[1]]),
                WT = buildCharMap(UT[TT[5]]);
              for (let zT in mT)
                if (mT[zT] !== WT[zT]) return TT[7];
              return Object.keys(mT).length !== Object.keys(WT).length ? TT[7] : TT[21]
            }

            function zT(...UT) {
              UT[TT[0]] = TT[5];
              return MT(UT[TT[1]]) !== 1 / 0
            }

            function MT(...UT) {
              if (UT[TT[0]] = TT[5], !UT[TT[1]]) return -TT[5];
              const mT = MT(UT[TT[1]].left),
                WT = MT(UT[TT[1]].right),
                zT = Math.abs(mT - WT);
              if (mT === 1 / 0 || WT === 1 / 0 || zT > TT[5]) return 1 / 0;
              return Math.max(mT, WT) + TT[5]
            }
            UT[TT[0]] = TT[1], window.__GLOBAL__HELPERS__ = {
              buildCharacterMap: mT,
              isAnagrams: WT,
              isBalanced: zT,
              getHeightBalanced: MT
            }
          }(), mT(1302)))), Promise[TT[8] + TT[4]]()[TT[9]]((() => mT(1231)))]), jT = nT.getHttpUrlFromWebSocketUrl(WT.endpoint), lT = WT[TT[10] + TT[11]] === TT[2] ? TT[23] : await WT[TT[10] + TT[11]]();
          await kT("" + jT + zT, MT, {
            retries: gT
          }, HT.blob, lT)
        };
      oW = async (mT, WT) => {
        const zT = function(TT, UT, mT, WT) {
          const zT = [];
          DW(zT, TT), DW(zT, UT), DW(zT, mT);
          for (const MT of WT) zT.push(MT);
          return zT
        }(mT.game, mT.lobby, (TT[1], EW[TT[15]])(), WT);
        try {
          await HT(mT, "/persisted/keep-alive", {
            type: "HB",
            data: zT
          }, TT[14])
        } catch (MT) {
          function nT(...UT) {
            jT(UT[TT[0]] = TT[1], UT[TT[17]] = function(...mT) {
              return jT(mT[TT[0]] = TT[5], mT[TT[12]] = []), (mT[TT[1]] === TT[5] || mT[TT[1]] >= TT[13]) && UT[TT[5]](mT[TT[12]], [], mT[TT[1]], TT[1]), mT[TT[12]]
            }, UT[TT[5]] = function(...mT) {
              for (mT[TT[0]] = TT[13], mT[TT[13]] = mT[TT[14]]; mT[TT[13]] < mT[TT[6]]; mT[TT[13]]++) {
                if (mT[TT[5]].length !== mT[TT[13]]) return;
                for (mT[TT[15]] = TT[1]; mT[TT[15]] < mT[TT[6]]; mT[TT[15]]++) UT[TT[19]](mT[TT[5]], [mT[TT[13]], mT[TT[15]]]) && (jT(mT[TT[5]].push([mT[TT[13]], mT[TT[15]]]), UT[TT[5]](mT[TT[1]], mT[TT[5]], mT[TT[6]], mT[TT[13]] + TT[5])), mT[TT[5]].length === mT[TT[6]] && mT[TT[1]].push(UT[TT[16]](mT[TT[5]])), mT[TT[5]].pop())
              }
            }, UT[TT[16]] = function(...UT) {
              for (jT(UT[TT[0]] = TT[5], UT[TT[17]] = [], UT[TT[15]] = UT[TT[1]].length), UT[TT[14]] = TT[1]; UT[TT[14]] < UT[TT[15]]; UT[TT[14]]++)
                for (UT[TT[17]][UT[TT[14]]] = "", UT[TT[18]] = TT[1]; UT[TT[18]] < UT[TT[15]]; UT[TT[18]]++) UT[TT[17]][UT[TT[14]]] += UT[TT[1]][UT[TT[14]]][TT[5]] === UT[TT[18]] ? "Q" : ".";
              return UT[TT[17]]
            }, UT[TT[19]] = function(...UT) {
              for (jT(UT[TT[0]] = TT[6], UT[-TT[20]] = UT[TT[1]].length), UT[TT[14]] = TT[1]; UT[TT[14]] < UT[-TT[20]]; UT[TT[14]]++) {
                if (UT[TT[1]][UT[TT[14]]][TT[1]] === UT[TT[5]][TT[1]] || UT[TT[1]][UT[TT[14]]][TT[5]] === UT[TT[5]][TT[5]]) return TT[7];
                if (Math.abs((UT[TT[1]][UT[TT[14]]][TT[1]] - UT[TT[5]][TT[1]]) / (UT[TT[1]][UT[TT[14]]][TT[5]] - UT[TT[5]][TT[5]])) === TT[5]) return TT[7]
              }
              return TT[21]
            }, console.log(UT[TT[17]]))
          }
          "G4G1ka" + TT[22] in UT && nT(), console.warn(MT)
        }
      };
      const kT = (...UT) => (UT[TT[0]] = TT[6], Object.getOwnPropertyDescriptor(UT[TT[1]], UT[TT[5]]));

      function jT() {
        jT = function() {}
      }
      AW = () => {
        if ((TT[1], hW[TT[22]])(), kT(navigator, WT) !== TT[23]) return MT;
        if (kT(window, zT) === TT[23]) {
          function mT(...UT) {
            function mT(...UT) {
              return UT[TT[0]] = TT[5], UT[TT[1]][TT[5]] * TT[25] + (UT[TT[1]][TT[1]] < TT[1] ? TT[24] | UT[TT[1]][TT[1]] : UT[TT[1]][TT[1]])
            }

            function WT(...UT) {
              switch (UT[TT[0]] = TT[5], ((UT[TT[1]] & TT[24]) !== TT[1]) * TT[5] + (UT[TT[1]] < TT[1]) * TT[6]) {
                case TT[1]:
                  return [UT[TT[1]] % TT[24], Math.trunc(UT[TT[1]] / TT[25])];
                case TT[5]:
                  return [UT[TT[1]] % TT[24] - TT[24], Math.trunc(UT[TT[1]] / TT[25]) + TT[5]];
                case TT[6]:
                  return [((UT[TT[1]] + TT[24]) % TT[24] + TT[24]) % TT[24], Math.round(UT[TT[1]] / TT[25])];
                case TT[14]:
                  return [UT[TT[1]] % TT[24], Math.trunc(UT[TT[1]] / TT[25])]
              }
            }
            UT[TT[0]] = TT[1], jT(UT[TT[26]] = mT([TT[6], TT[13]]), UT[TT[15]] = mT([TT[5], TT[6]]), UT[TT[19]] = UT[TT[26]] + UT[TT[15]], UT[TT[14]] = UT[TT[19]] - UT[TT[15]], UT[TT[4]] = UT[TT[14]] * TT[6], UT[TT[27]] = UT[TT[4]] / TT[6], console.log(WT(UT[TT[19]])), console.log(WT(UT[TT[14]])), console.log(WT(UT[TT[4]])), console.log(WT(UT[TT[27]])))
          }
          return "lUE51M" in UT && mT(), gT
        }
        return nT
      }, RW = async UT => {
        try {
          const WT = AW(),
            {
              retryTransientHttpFailures: zT
            } = await Promise[TT[8] + TT[4]]()[TT[9]]((() => mT(1915)));
          await zT(TT[28] + TT[29] + "post", (() => HT(UT, "/images/" + WT + ".png", {
            block: WT
          }, TT[1])), 8e3)
        } catch (zT) {
          console.error(TT[28] + TT[29] + "post failed:", zT)
        }
      }
    })();
    var Tz = mT(40979),
      Uz = mT(1944);
    const mz = 1e3 * Tz.e.seatReservationSeconds - 3e3;
    class Wz {
      constructor(TT) {
        var UT, mT, WT, zT;
        let MT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.seat = void 0, this.follow = void 0, this.wallNow = void 0, this.monoNow = void 0, this.wallAt = void 0, this.monoAt = void 0, this.sleep = void 0, this.answeredAt = null, this.posts = 0, this.refusals = 0, this.request = "pending", this.use = "unused", this.wallNow = null !== (UT = MT.wallNow) && void 0 !== UT ? UT : Date.now, this.monoNow = null !== (mT = MT.monoNow) && void 0 !== mT ? mT : () => performance.now(), this.wallAt = this.wallNow(), this.monoAt = this.monoNow(), this.sleep = null !== (WT = MT.sleep) && void 0 !== WT ? WT : Uz.d, this.follow = new wU.e(MT.signal);
        const gT = null !== (zT = MT.fetch) && void 0 !== zT ? zT : fetch;
        this.seat = (0, Jm.j)(TT.endpoint, TT.roomName, TT.joinOptions, {
          sleep: this.sleep,
          signal: this.follow.signal,
          fetch: (TT, UT) => (this.posts++, this.wallAt = this.wallNow(), this.monoAt = this.monoNow(), gT(TT, UT)),
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
      async take(TT) {
        if ("rematched" === this.use) return;
        (0, wU.m)(TT);
        const UT = "pending" !== this.request,
          mT = () => {
            this.abort((0, wU.i)(TT))
          };
        let WT;
        null === TT || void 0 === TT || TT.addEventListener("abort", mT, {
          once: !0
        });
        try {
          WT = await this.seat
        } catch (zT) {
          if ((0, wU.m)(TT), !UT) throw zT;
          return void(this.use = "lost")
        } finally {
          null === TT || void 0 === TT || TT.removeEventListener("abort", mT)
        }
        if ((0, wU.m)(TT), !(this.ageMs() > mz)) return this.use = "taken", WT;
        this.use = "renewed"
      }
      async reserveInstead(TT, UT) {
        try {
          return await TT()
        } catch (mT) {
          const zT = this.holdLeftMs();
          if (!(mT instanceof rT.n) || mT.code !== WT.e.duplicateLobbyNameError.code || 0 === zT) throw mT;
          return await this.sleep(zT + 500, UT), TT()
        }
      }
      release() {
        const {
          request: TT,
          use: UT
        } = this, mT = this.holdsNoSeat();
        return this.abort(), "taken" === UT || mT ? null : {
          unused: "unused" === UT ? "abandoned" : UT,
          answered: "answered" === TT,
          heldMs: Math.round(this.ageMs())
        }
      }
      holdsNoSeat() {
        return this.posts === this.refusals
      }
      holdLeftMs() {
        var TT;
        if ("taken" === this.use || this.holdsNoSeat()) return 0;
        const UT = null !== (TT = this.answeredAt) && void 0 !== TT ? TT : {
            wall: this.wallAt,
            mono: this.monoAt
          },
          mT = Math.max(this.wallNow() - UT.wall, this.monoNow() - UT.mono);
        return Math.max(0, 1e3 * Tz.e.seatReservationSeconds - mT)
      }
      ageMs() {
        return Math.max(this.wallNow() - this.wallAt, this.monoNow() - this.monoAt)
      }
      abort(TT) {
        (0, wU.k)(this.follow.controller, TT)
      }
    }
    var zz = mT(41063);
    const Mz = new Uint8Array(0);
    class gz {
      constructor(TT) {
        if (this.options = TT, this.slots = [], this.workers = null, this.stopped = !1, this.resting = !1, this.pool = [], this.failedJobs = 0, this.memoryFailureCounted = !1, this.faultsReported = new Set, this.refusals = new Map, this.heapRefusals = 0, null === TT.module) return this.stopped = !0, void TT.fail("no wasm module for the meshing workers");
        TT.loadWorkers().then((TT => {
          if (this.stopped) return;
          const {
            count: UT
          } = TT;
          this.workers = TT;
          for (let mT = 0; mT < UT; mT++) this.slots.push({
            worker: null,
            started: !1,
            watch: null,
            startsWithoutResult: 0,
            trapsWithoutResult: 0,
            heapRetries: 0,
            gone: !1,
            goneFor: null
          });
          for (let mT = 0; mT < UT; mT++) this.start(mT)
        }), (TT => {
          this.stopped || (this.stop(), this.options.fail("the meshing workers' code could not load", TT))
        }))
      }
      take(TT, UT, mT) {
        const WT = this.slots[UT];
        if (TT === hU.le.Retire) return void(WT && !WT.gone && (this.endWorker(UT), WT.started = !1, this.giveUp(UT, "had its tables trap twice", "every meshing worker's tables trapped twice")));
        const zT = null === WT || void 0 === WT ? void 0 : WT.worker;
        if (!zT || !WT.started) return;
        const MT = mT.byteLength;
        let gT = null;
        TT === hU.le.Mesh && WT.heapRetries > 0 && (WT.heapRetries--, gT = this.pooled(MT, !0)), gT ??= this.buffer(MT), new Uint8Array(gT, 0, MT).set(mT), zT.postMessage({
          type: "job",
          kind: TT,
          bytes: gT,
          len: MT
        }, [gT])
      }
      takeFailedMeshJobs() {
        const TT = this.failedJobs;
        return this.failedJobs = 0, TT
      }
      newGame() {
        this.memoryFailureCounted = !1
      }
      stopWorkers() {
        this.resting = !0;
        for (let TT = 0; TT < this.slots.length; TT++) {
          const UT = this.slots[TT];
          null !== UT.worker && (this.endWorker(TT), UT.startsWithoutResult = 0, UT.trapsWithoutResult = 0, this.tellLost(TT))
        }
        this.pool.length = 0
      }
      restartWorkers() {
        if (this.resting) {
          this.resting = !1;
          for (let TT = 0; TT < this.slots.length; TT++) this.start(TT)
        }
      }
      stop() {
        this.stopped = !0;
        for (const UT of this.slots) {
          var TT;
          nz(UT), null === (TT = UT.worker) || void 0 === TT || TT.terminate(), UT.worker = null, UT.started = !1
        }
      }
      start(TT) {
        const UT = this.slots[TT],
          {
            module: mT
          } = this.options,
          {
            workers: WT
          } = this;
        if (this.stopped || this.resting || UT.gone || null === mT || null === WT) return;
        if (UT.startsWithoutResult >= 3) return void this.giveUp(TT, "failed to start 3 times in a row", "no meshing worker would start");
        let zT;
        UT.startsWithoutResult++;
        try {
          zT = WT.create()
        } catch (MT) {
          return console.warn(`[bloxd-wasm-client] meshing worker ${TT} did not start`, MT), void this.start(TT)
        }
        UT.worker = zT, zT.onmessage = mT => {
          let {
            data: WT
          } = mT;
          UT.worker === zT && this.onReply(TT, WT)
        }, zT.onmessageerror = () => {
          UT.worker === zT && this.lose(TT, "a reply could not be read")
        }, zT.onerror = mT => {
          mT.preventDefault(), UT.worker === zT && this.lose(TT, mT.message || "its script failed")
        };
        try {
          zT.postMessage({
            type: "start",
            module: mT,
            maxKeptLightStates: WT.maxKeptLightStates
          })
        } catch (MT) {
          return console.warn(`[bloxd-wasm-client] meshing worker ${TT} could not be sent the module`, MT), zT.terminate(), UT.worker = null, void this.start(TT)
        }
        UT.watch = new zz.j(zz.b, (UT => {
          this.lose(TT, (0, zz.l)(UT), (() => {
            this.options.onStartTimeout(UT)
          }))
        }), void 0, this.options.visibility)
      }
      onReply(TT, UT) {
        const mT = this.slots[TT];
        switch (UT.type) {
          case "started":
            nz(mT), mT.started = !0, this.options.write(0, hU.ie.WorkerStarted, 0, TT, 0, Mz);
            break;
          case "lost":
            this.lose(TT, UT.reason);
            break;
          case "memory":
            var WT, zT;
            null === (WT = (zT = this.options).onMemoryStats) || void 0 === WT || WT.call(zT, TT, UT.stats);
            break;
          case "result": {
            const WT = UT.status === hU.Hb.Trapped;
            if (0 !== UT.jobId) {
              if (WT) this.countFailedJob(UT.outOfMemory, "light_trap", UT.trap);
              else if (mT.startsWithoutResult = 0, mT.trapsWithoutResult = 0, UT.status === hU.Hb.Refused) {
                const mT = function(TT) {
                  if (TT.byteLength < 32) return "(no reason)";
                  const UT = new DataView(TT.buffer, TT.byteOffset, TT.byteLength),
                    mT = Math.min(UT.getUint32(28, !0), TT.byteLength - 28 - 4);
                  return (new TextDecoder).decode(TT.subarray(32, 32 + mT)).slice(0, 200)
                }(new Uint8Array(UT.bytes, 0, UT.len));
                this.countFailedJob(RU.d.test(mT), "light_refused_input", mT), this.logRefusal(TT, mT)
              }
              UT.status === hU.Hb.HeapRefused && (mT.heapRetries = Math.min(mT.heapRetries + 1, 4), this.logHeapRefusal(TT))
            }
            if (this.options.write(UT.jobId, hU.ie.JobResult, UT.status, TT, UT.workerUs, new Uint8Array(UT.bytes, 0, UT.len)), this.recycle(UT.bytes), UT.spare && this.recycle(UT.spare), !WT) break;
            if (mT.startsWithoutResult = 0, 0 === UT.jobId) {
              this.lose(TT, `the tables trapped its wasm: ${UT.trap}`);
              break
            }
            mT.trapsWithoutResult++;
            const zT = mT.trapsWithoutResult > 6;
            mT.gone ||= zT, this.lose(TT, `a job trapped its wasm: ${UT.trap}`), zT && this.giveUp(TT, `trapped ${mT.trapsWithoutResult} jobs in a row`, "every meshing worker kept trapping");
            break
          }
        }
      }
      countFailedJob(TT, UT, mT) {
        if (TT) {
          if (this.memoryFailureCounted) return;
          this.memoryFailureCounted = !0
        } else this.faultsReported.has(UT) || (this.faultsReported.add(UT), this.options.onLightFault(UT, mT));
        this.failedJobs++
      }
      logRefusal(TT, UT) {
        var mT;
        !this.refusals.has(UT) && this.refusals.size >= 16 && (UT = "(other reasons)");
        const WT = (null !== (mT = this.refusals.get(UT)) && void 0 !== mT ? mT : 0) + 1;
        this.refusals.set(UT, WT), (0, tm.C)(WT) && console.warn(`[bloxd-wasm-client] meshing worker ${TT} refused a chunk (${WT} so far for this reason): ${UT}`)
      }
      logHeapRefusal(TT) {
        this.heapRefusals++, (0, tm.C)(this.heapRefusals) && console.warn(`[bloxd-wasm-client] meshing worker ${TT} was refused memory for a chunk's mesh (${this.heapRefusals} so far)`)
      }
      giveUp(TT, UT, mT) {
        const WT = this.slots[TT];
        if (WT.gone = !0, WT.goneFor = {
            why: UT,
            failure: mT
          }, console.warn(`[bloxd-wasm-client] meshing worker ${TT} ${UT}: giving up on it`), this.slots.every((TT => TT.gone))) {
          this.stop();
          const TT = new Set(this.slots.map((TT => {
              var UT;
              return null === (UT = TT.goneFor) || void 0 === UT ? void 0 : UT.failure
            }))),
            UT = this.slots.map(((TT, UT) => {
              var mT, WT;
              return `worker ${UT} ${null!==(mT=null===(WT=TT.goneFor)||void 0===WT?void 0:WT.why)&&void 0!==mT?mT:"went"}`
            }));
          this.options.fail(1 === TT.size ? mT : `no meshing worker is left (${UT.join(", ")})`)
        }
      }
      lose(TT, UT, mT) {
        console.warn(`[bloxd-wasm-client] meshing worker ${TT} was lost: ${UT}`), this.endWorker(TT), this.stopped || (mT ? mT() : this.options.onWorkerLost(UT), this.tellLost(TT), this.start(TT))
      }
      endWorker(TT) {
        var UT, mT, WT;
        const zT = this.slots[TT];
        nz(zT), null === (UT = zT.worker) || void 0 === UT || UT.terminate(), zT.worker = null, zT.heapRetries = 0, null === (mT = (WT = this.options).onMemoryGone) || void 0 === mT || mT.call(WT, TT)
      }
      tellLost(TT) {
        const UT = this.slots[TT];
        UT.started && (UT.started = !1, this.options.write(0, hU.ie.WorkerLost, 0, TT, 0, Mz))
      }
      buffer(TT) {
        var UT;
        return null !== (UT = this.pooled(TT)) && void 0 !== UT ? UT : new ArrayBuffer(Math.max(16384, TT))
      }
      pooled(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          mT = -1;
        for (let zT = 0; zT < this.pool.length; zT++) {
          const WT = this.pool[zT].byteLength;
          WT >= TT && (mT < 0 || (UT ? WT > this.pool[mT].byteLength : WT < this.pool[mT].byteLength)) && (mT = zT)
        }
        if (mT < 0) return null;
        const WT = this.pool[mT];
        return this.pool[mT] = this.pool[this.pool.length - 1], this.pool.pop(), WT
      }
      recycle(TT) {
        this.pool.length < 4 * this.slots.length && TT.byteLength > 0 && TT.byteLength <= 1048576 && this.pool.push(TT)
      }
    }

    function nz(TT) {
      var UT;
      null === (UT = TT.watch) || void 0 === UT || UT.cancel(), TT.watch = null
    }
    var Hz = mT(36557),
      kz = mT(40893),
      jz = mT(41066),
      lz = mT(41072),
      Lz = (mT(40912), mT(41080)),
      pz = mT(40951);

    function Bz(TT) {
      const UT = new Uint8Array(TT.length >> 2);
      for (let mT = 0; mT < UT.length; mT++) UT[mT] = TT[4 * mT + 3];
      return UT
    }
    async function Zz(TT) {
      const UT = await (0, Lz.j)(TT);
      try {
        const {
          width: TT,
          height: mT,
          pixels: WT
        } = (0, pz.o)(UT);
        return {
          width: TT,
          height: mT,
          alpha: Bz(WT)
        }
      } finally {
        UT.close()
      }
    }
    class cz {
      constructor(TT, UT, mT) {
        let WT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Zz;
        this.session = TT, this.sources = UT, this.warn = mT, this.load = WT, this.nextPoll = 0, this.kB = !1, this.warned = new Set
      }
      drain(TT) {
        if (TT < this.nextPoll) return;
        this.nextPoll = TT + 250;
        const UT = this.session.sunShadowWantedTextures();
        if (UT)
          for (let mT = 0; mT + 1 < UT.length; mT += 2) this.hand(UT[mT], UT[mT + 1]);
        for (const mT of this.session.takeSunShadowWarnings()) this.warn(mT)
      }
      dispose() {
        this.kB = !0
      }
      async hand(TT, UT) {
        var mT, WT, zT, MT, gT;
        let nT, HT = null;
        try {
          if (HT = await this.sources.blockImageUrl(TT), null === HT) throw new Error(`block image ${TT} has no URL`);
          nT = await this.load(HT)
        } catch (jT) {
          var kT;
          const UT = null !== (kT = HT) && void 0 !== kT ? kT : `block image ${TT}`;
          this.warned.has(UT) || (this.warned.add(UT), this.warn(`sun shadow plane texture ${UT} didn't load: its blocks cast no shadow`, jT))
        }
        this.kB || this.session.setSunShadowTexture(TT, UT, null !== (mT = null === (WT = nT) || void 0 === WT ? void 0 : WT.width) && void 0 !== mT ? mT : 0, null !== (zT = null === (MT = nT) || void 0 === MT ? void 0 : MT.height) && void 0 !== zT ? zT : 0, null === (gT = nT) || void 0 === gT ? void 0 : gT.alpha)
      }
    }
    var vz = mT(41085),
      fz = mT(40926),
      qz = mT(41093),
      iz = mT(41096),
      bz = mT(40929),
      Oz = mT(40935),
      ez = mT(34315),
      Yz = mT(34156),
      Jz = mT(41110);
    const xz = 8192,
      dz = new Set;
    const wz = new Set([...Yz.e, "sceneDownload"]);
    var tz = mT(40855),
      az = mT(41117),
      yz = mT(41121);
    const Xz = new Uint8Array(0);
    let Iz = null;

    function Qz(TT) {
      return {
        aux: hU.gc.AdStart | (TT ? hU.gc.PreventMovement : 0),
        payload: Xz
      }
    }
    var sz = mT(3032),
      Fz = mT(314);
    const Pz = "__bloxdSceneCapture";
    var Vz = mT(41127);
    class uz {
      constructor(TT) {
        var UT, mT;
        this.host = TT, this.requested = null, this.landed = null, this.confirm = null, this.channel = void 0, this.oneShotStored = !0, this.startRead = void 0, this.landRequest = () => {}, this.landing = new Promise((TT => {
          this.landRequest = TT
        })), this.follow = TT => {
          let UT = TT;
          return Promise.race([this.startRead, this.landing]).then((async () => {
            const TT = null === this.requested && null !== UT;
            var mT;
            TT && (null === (mT = UT) || void 0 === mT || mT(null));
            const WT = await this.landing;
            var zT;
            null === WT && TT || (null === (zT = UT) || void 0 === zT || zT(WT))
          })), () => {
            UT = null
          }
        }, this.startRead = (mT = TT.store, mT.keys().then((TT => ({
          own: TT.includes(sm.d),
          oneShot: TT.includes(sm.f)
        })), (() => ({
          own: !0,
          oneShot: !0
        })))).then((TT => {
          let {
            own: UT,
            oneShot: mT
          } = TT;
          this.oneShotStored = mT, (UT || mT) && this.request()
        })), this.channel = (null !== (UT = TT.openChannel) && void 0 !== UT ? UT : sm.v)(), null !== this.channel && (this.channel.onmessage = () => {
          this.request()
        })
      }
      request() {
        var TT;
        if (null !== this.requested) return this.requested;
        null === (TT = this.channel) || void 0 === TT || TT.close(), this.channel = null;
        const UT = this.oneShotStored;
        return this.requested = function(TT, UT, mT) {
          return new Promise((UT => {
            UT(TT())
          })).catch((TT => (null !== UT && (0, sm.r)(UT), mT(TT), null)))
        }((() => this.host.load(UT).then((TT => (TT.setGamePackConfirm(this.confirm), this.landed = TT, TT)))), UT ? this.host.store : null, this.host.Gp), this.landRequest(this.requested), this.requested
      }
      loaded() {
        return this.landed
      }
      forJoin() {
        return null !== this.requested ? this.requested : Promise.race([this.startRead, this.landing]).then((() => {
          var TT;
          return null !== (TT = this.requested) && void 0 !== TT ? TT : null
        }))
      }
      setGamePackConfirm(TT) {
        var UT;
        this.confirm = TT, null === (UT = this.landed) || void 0 === UT || UT.setGamePackConfirm(TT)
      }
    }
    var Cz = mT(36356);
    const rz = 216 * Cz.d,
      Kz = 92 * Cz.b,
      Sz = 64 * Cz.d,
      Gz = 16 * Cz.d;

    function Nz() {
      var TT, UT;
      return null !== (TT = null === (UT = performance.memory) || void 0 === UT ? void 0 : UT.wq) && void 0 !== TT ? TT : null
    }
    class Ez {
      constructor(TT, UT) {
        this.budgetBytes = TT, this.reads = UT, this.estimate = null, this.shedAt = null
      }
      read(TT) {
        var UT;
        const mT = this.reads.storedChunks(),
          WT = this.reads.gpuBytes(),
          zT = Math.max(null !== (UT = this.reads.jsHeapBytes()) && void 0 !== UT ? UT : 0, Sz),
          MT = rz + TT + zT + WT + mT * Kz;
        this.estimate = {
          wasmBytes: TT,
          jsHeapBytes: zT,
          gpuBytes: WT,
          storedChunks: mT,
          totalBytes: MT
        }
      }
      last() {
        return this.estimate
      }
      takeShed() {
        const {
          estimate: TT,
          budgetBytes: UT,
          shedAt: mT
        } = this;
        return !(null === TT || null === UT || TT.totalBytes < UT || null !== mT && TT.totalBytes < mT + Gz) && (this.shedAt = TT.totalBytes, !0)
      }
      describe() {
        const {
          estimate: TT,
          budgetBytes: UT
        } = this;
        return null === TT ? null : `estimate ${(0,Cz.f)(TT.totalBytes)} MiB of budget ${null===UT?"none":(0,Cz.f)(UT)}: wasm ${(0,Cz.f)(TT.wasmBytes)} js ${(0,Cz.f)(TT.jsHeapBytes)} gpu ${(0,Cz.f)(TT.gpuBytes)} chunks ${TT.storedChunks}`
      }
      snapshot() {
        const {
          estimate: TT,
          budgetBytes: UT
        } = this;
        return {
          ...null === TT ? {} : {
            footprintMiB: Number((0, Cz.f)(TT.totalBytes)),
            gpuMiB: Number((0, Cz.f)(TT.gpuBytes)),
            storedChunks: TT.storedChunks
          },
          footprintBudgetMiB: null === UT ? -1 : Number((0, Cz.f)(UT))
        }
      }
    }
    var hz = mT(2929),
      Dz = mT(4627),
      oz = mT(36447),
      Az = mT(38089);
    const Rz = DU.$ + 1,
      TM = 4096 * Rz;
    class UM {
      constructor(TT, UT) {
        this.log = TT, this.take = UT, this.fn = [], this.unshown = new Map, this.latest = new Map
      }
      afterFrame(TT, UT) {
        const mT = this.take();
        mT.length >= DU._ && mT[0] > 0 && (0, hz.m)("remesh", `${mT[0]} core records lost to a full log`);
        const WT = this.fn;
        for (let zT = DU._; zT + DU.$ <= mT.length; zT += DU.$) {
          for (let TT = zT; TT < zT + DU.$; TT++) WT.push(mT[TT]);
          WT.push(TT)
        }
        if (UT || !(WT.length < TM)) {
          for (let UT = 0; UT < WT.length; UT += Rz) this.feed(UT, TT);
          WT.length = 0, UT && this.log.frame(TT)
        }
      }
      feed(TT, UT) {
        var mT;
        const WT = this.fn,
          zT = (0, Az.h)(WT[TT + 1], WT[TT + 2], WT[TT + 3]),
          MT = WT[TT + 4],
          gT = WT[TT + DU.$];
        switch (WT[TT]) {
          case DU.yb.Edit:
            this.log.edit(zT, gT);
            break;
          case DU.yb.Sent:
            this.latest.set(zT, MT), this.log.sent(zT, MT, WT[TT + 5], WT[TT + 6], WT[TT + 7], null !== (mT = this.unshown.get(zT)) && void 0 !== mT ? mT : Az.e, gT);
            break;
          case DU.yb.Done: {
            this.log.received(MT, WT[TT + 5] / 1e3, gT);
            const UT = this.unshown.get(zT);
            void 0 === UT ? this.unshown.set(zT, [MT]) : UT.push(MT);
            break
          }
          case DU.yb.Failed: {
            const TT = this.latest.get(zT);
            void 0 !== TT && TT !== MT ? this.log.reassign(zT, MT, TT) : this.log.failed(MT), this.ended(zT, MT);
            break
          }
          case DU.yb.Shown:
            this.log.applied(zT, MT, UT), this.ended(zT, MT);
            break;
          case DU.yb.Replaced:
            this.log.reassign(zT, MT, WT[TT + 5]), this.ended(zT, MT);
            break;
          case DU.yb.Emptied:
            this.log.emptied(zT, UT);
            break;
          default:
            console.warn(`[debug:remesh] unknown core record kind ${WT[TT]}`)
        }
      }
      ended(TT, UT) {
        this.latest.get(TT) === UT && this.latest.delete(TT);
        const mT = this.unshown.get(TT);
        if (void 0 === mT) return;
        const WT = mT.indexOf(UT);
        WT >= 0 && mT.splice(WT, 1), 0 === mT.length && this.unshown.delete(TT)
      }
    }
    let mM = null;
    var WM = mT(3342),
      zM = mT(39760);
    const MM = new Uint8Array(0);
    class gM {
      constructor(TT) {
        this.options = TT, this.worker = null, this.watch = null, this.createWorker = null, this.loading = !1, this.wanted = !1, this.fn = [], this.startsWithoutResult = 0, this.coreWaits = !1, this.lastLoss = "", this.seed = null, this.gone = !1, this.pool = [], null !== TT.module ? TT.write(0, hU.ie.WorldgenStarted, 0, 0, MM) : this.giveUp()
      }
      take(TT, UT) {
        if (!(this.gone || null === this.worker && null === this.fn))
          if (TT === hU.le.WorldgenSeed) {
            const TT = 0 === UT.byteLength ? null : this.options.decodeSettings(UT);
            null === TT ? this.release() : function(TT, UT) {
              if ((null === TT || void 0 === TT ? void 0 : TT.byteLength) !== UT.byteLength) return !1;
              for (let mT = 0; mT < TT.byteLength; mT++)
                if (TT[mT] !== UT[mT]) return !1;
              return !0
            }(this.seed, UT) || (this.seed = UT.slice(), this.startsWithoutResult = null === this.worker ? 0 : 1), this.dropHeld(), this.post({
              type: "seed",
              settings: TT
            }, []), null !== TT ? this.want() : this.loading || this.options.onMapWithoutWorldgen()
          } else if (TT === hU.le.Generate) {
          var mT;
          const TT = new DataView(UT.buffer, UT.byteOffset, hU.be),
            WT = null !== (mT = this.pool.pop()) && void 0 !== mT ? mT : new ArrayBuffer(8192);
          this.post({
            type: "generate",
            ticket: TT.getUint32(0, !0),
            x: TT.getInt32(4, !0),
            y: TT.getInt32(8, !0),
            z: TT.getInt32(12, !0),
            bytes: WT
          }, [WT])
        }
      }
      prestart() {
        this.gone || this.want()
      }
      stopWorker() {
        this.gone || (this.release(), this.dropHeld(), this.pool.length = 0, this.coreWaits && (this.coreWaits = !1, this.options.write(0, hU.ie.WorldgenStarted, 0, 0, MM)))
      }
      stop() {
        var TT;
        this.gone = !0, this.dropHeld(), this.endWatch(), null === (TT = this.worker) || void 0 === TT || TT.terminate(), this.worker = null
      }
      post(TT, UT) {
        var mT;
        null !== this.fn ? this.fn.push({
          message: TT,
          transfer: UT
        }) : null === (mT = this.worker) || void 0 === mT || mT.postMessage(TT, UT)
      }
      want() {
        this.wanted = !0, null === this.worker && (null === this.createWorker ? this.load() : this.start())
      }
      release() {
        this.wanted = !1, null !== this.worker && (this.endWorker(), this.startsWithoutResult = 0, this.fn ??= [])
      }
      endWorker() {
        var TT, UT, mT;
        this.endWatch(), null === (TT = this.worker) || void 0 === TT || TT.terminate(), this.worker = null, null === (UT = (mT = this.options).onMemoryGone) || void 0 === UT || UT.call(mT)
      }
      load() {
        this.loading || (this.loading = !0, this.options.loadWorker().then((TT => {
          this.createWorker = TT, this.wanted && this.start()
        }), (TT => {
          this.gone || (this.giveUp(), this.options.onLoadFailed(TT))
        })))
      }
      start() {
        const {
          module: TT
        } = this.options, UT = this.createWorker;
        if (this.gone || null === TT || null === UT) return;
        if (this.startsWithoutResult >= 3) return this.giveUp(), void this.options.onGaveUp(this.lastLoss);
        let mT;
        this.startsWithoutResult++;
        try {
          mT = UT()
        } catch (zT) {
          return console.warn("[bloxd-wasm-client] the world-gen worker did not start", zT), this.lastLoss = `it did not start (${String(zT)})`, void this.start()
        }
        this.worker = mT, mT.onmessage = TT => {
          let {
            data: UT
          } = TT;
          this.worker === mT && this.onReply(mT, UT)
        }, mT.onerror = TT => {
          TT.preventDefault(), this.worker === mT && this.lose(TT.message || "its script failed")
        };
        try {
          mT.postMessage({
            type: "start",
            module: TT,
            cB: WT.f.cB
          })
        } catch (zT) {
          return console.warn("[bloxd-wasm-client] the world-gen worker could not be sent the module", zT), this.lastLoss = `it could not be sent the module (${String(zT)})`, mT.terminate(), this.worker = null, void this.start()
        }
        this.watch = new zz.j(zz.f, (TT => {
          this.lose((0, zz.l)(TT), (() => {
            this.options.onStartTimeout(TT)
          }))
        }), void 0, this.options.visibility)
      }
      onReply(TT, UT) {
        switch (UT.type) {
          case "started": {
            this.endWatch();
            const UT = this.fn;
            if (null === UT) {
              this.coreWaits = !1, this.options.write(0, hU.ie.WorldgenStarted, 0, 0, MM);
              break
            }
            this.fn = null;
            for (const {
                message: mT,
                transfer: WT
              }
              of UT) TT.postMessage(mT, WT);
            break
          }
          case "lost":
            this.lose(UT.reason);
            break;
          case "memory":
            var mT, WT;
            null === (mT = (WT = this.options).onMemoryStats) || void 0 === mT || mT.call(WT, UT.stats);
            break;
          case "result":
            UT.status !== hU.Hb.Trapped && (this.startsWithoutResult = 0), this.options.write(UT.ticket, hU.ie.WorldgenResult, UT.status, UT.workerUs, new Uint8Array(UT.bytes, 0, UT.len)), this.recycle(UT.bytes), UT.spare && this.recycle(UT.spare)
        }
      }
      lose(TT, UT) {
        console.warn(`[bloxd-wasm-client] the world-gen worker was lost: ${TT}`), this.lastLoss = TT, this.endWorker(), this.gone || (UT ? UT() : this.options.onWorkerLost(TT), this.dropHeld(), this.fn = null, this.options.write(0, hU.ie.WorldgenLost, hU.me.Lost, 0, MM), this.coreWaits = !0, this.start())
      }
      giveUp() {
        this.gone = !0, this.dropHeld(), this.options.write(0, hU.ie.WorldgenLost, hU.me.Gone, 0, MM)
      }
      endWatch() {
        var TT;
        null === (TT = this.watch) || void 0 === TT || TT.cancel(), this.watch = null
      }
      dropHeld() {
        if (null !== this.fn) {
          for (const {
              message: TT
            }
            of this.fn) "generate" === TT.type && this.recycle(TT.bytes);
          this.fn.length = 0
        }
      }
      recycle(TT) {
        this.pool.length < 16 && TT.byteLength > 0 && TT.byteLength <= 16384 && this.pool.push(TT)
      }
    }
    var nM = mT(37868),
      HM = mT(3810),
      kM = mT(40802),
      jM = mT(41130),
      lM = mT(40919);
    const LM = /[(@\s]([^\s(@]+)$/,
      pM = /:\d/;

    function BM(TT, UT) {
      for (let mT = 0; mT + UT.length <= TT.length; mT++) {
        let WT = 0;
        for (; WT < UT.length && TT[mT + WT] === UT[WT];) WT++;
        if (WT === UT.length) return mT
      }
      return -1
    }

    function ZM(TT) {
      return "(" === TT || ")" === TT || "@" === TT || "," === TT || " " === TT || "\t" === TT
    }

    function cM(TT, UT) {
      let mT = UT;
      for (; mT > 0 && !ZM(TT[mT - 1]);) mT--;
      let WT = UT;
      for (; WT < TT.length && !ZM(TT[WT]);) WT++;
      let zT = "";
      for (let MT = mT; MT < WT; MT++) zT += TT[MT];
      return zT
    }
    const vM = [{
        origin: "chrome-extension://dhdgffkkebhmkfjojejmpbldmpobfkfo",
        tag: "TM"
      }, {
        origin: "chrome-extension://iikmkjmpaadaobahmlepeloendndfphd",
        tag: "TM-Edge"
      }, {
        origin: "chrome-extension://gcalenpjmijncebpfijmoaglllgpjagf",
        tag: "TM-Beta"
      }],
      fM = /^\/[^\s?#]*\?(?:[^\s&#]*&)*?name=([^\s&#]*?)(?::\d+)*(?:[\s&#]|\)(?:[,\s]|$)|$)/,
      qM = ".user.js";

    function iM(TT, UT) {
      let mT = 0;
      for (; mT < vM.length && vM[mT].origin !== UT[0];) mT++;
      if (mT === vM.length) return UT[0];
      let WT = "";
      for (let gT = UT.index + UT[0].length; gT < TT.length; gT++) WT += TT[gT];
      const zT = (0, hW.q)(hW.X, fM, [WT]),
        MT = null === zT ? "" : function(TT) {
          let UT = TT.length,
            mT = 0;
          for (; mT < 8 && UT > 8 && TT[UT - 8 + mT] === qM[mT];) mT++;
          8 === mT && (UT -= 8);
          let WT = "",
            zT = !1;
          for (let MT = 0; MT < UT; MT++) {
            let UT = TT[MT];
            "+" === UT ? UT = " " : "%" === UT && (UT = "2" === TT[MT + 1] && "0" === TT[MT + 2] ? " " : "_", MT += 2), -1 !== BM("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 .-", UT) ? (WT += UT, zT = !1) : zT || (WT += "_", zT = !0)
          }
          return WT
        }(zT[1]);
      return "" === MT ? UT[0] : vM[mT].tag + " " + MT
    }

    function bM(TT, UT) {
      var mT;
      const WT = /[^\n]+/g,
        zT = /\b(?!wasm:)[a-z][\w+.-]*:\/\/[\w.:%~+[\]-]*/i,
        MT = /^([^?#)]*?)(?::\d+)*(?:[?#)]|$)/;
      let gT = null,
        nT = null,
        HT = (0, hW.q)(hW.X, WT, [TT]);
      for (; null !== HT;) {
        const mT = (0, hW.q)(hW.X, zT, [HT[0]]),
          kT = null === UT ? -1 : BM(HT[0], UT);
        if (-1 !== kT) {
          if (null !== mT) return iM(HT[0], mT);
          const TT = cM(HT[0], kT),
            UT = (0, hW.q)(hW.X, LM, [HT[0]]),
            WT = null !== (0, hW.q)(hW.X, pM, [TT]) ? TT : null === UT ? null : UT[1],
            zT = null === WT ? null : (0, hW.q)(hW.X, MT, [WT]);
          if (null !== zT && "" !== zT[1]) return zT[1]
        }
        null !== mT && (null === gT ? gT = mT[0] : null === nT && mT[0] !== gT && (nT = mT[0])), HT = (0, hW.q)(hW.X, WT, [TT])
      }
      return null !== (mT = nT) && void 0 !== mT ? mT : null === gT ? "none" : "own"
    }
    const OM = /:(\d+):(\d+)\)?$/;

    function eM(TT, UT) {
      const mT = (0, hW.q)(hW.X, OM, [UT]);
      return null === mT ? TT : TT + ":" + mT[1] + ":" + mT[2]
    }

    function YM(TT) {
      const UT = /[^\n]+/g,
        mT = /\b(?!wasm:)((?:blob:)?)(([a-z][\w+.-]*):\/\/[\w.:%~+[\]-]*)((?:[^\s()@?#]*\/)?)([^\s()@?#:]*)/i;
      let WT = null,
        zT = "",
        MT = !1,
        gT = (0, hW.q)(hW.X, UT, [TT]);
      for (; null !== gT;) {
        const nT = (0, hW.q)(hW.X, mT, [gT[0]]),
          HT = null === nT ? (0, hW.q)(hW.X, LM, [gT[0]]) : null,
          kT = null !== HT && null !== (0, hW.q)(hW.X, pM, [HT[1]]) && 0 !== BM(HT[1], "wasm:") ? HT[1] : null;
        if (null === WT) null !== nT ? (WT = nT[2], zT = nT[4]) : null !== kT && (WT = "");
        else if (null !== nT) {
          if (MT = !0, "" !== nT[1]) return {
            reader: "inline",
            frame: eM("blob", gT[0])
          };
          if (nT[2] !== WT) {
            const TT = "moz-extension" === nT[3] || "safari-web-extension" === nT[3];
            let UT = "";
            for (let mT = 0; mT < nT[5].length && mT < 20; mT++) UT += nT[5][mT];
            return {
              reader: TT ? nT[3] : nT[2],
              frame: eM("" === UT ? "-" : UT, gT[0])
            }
          }
          if (nT[4] !== zT) return {
            reader: "inline",
            frame: eM("inline", gT[0])
          }
        } else if (null !== kT) {
          const TT = -1 !== BM(gT[0], "userscript") || -1 !== BM(gT[0], ".user.js");
          return {
            reader: TT ? "userscript" : "inline",
            frame: eM(TT ? "userscript" : "eval", gT[0])
          }
        }
        gT = (0, hW.q)(hW.X, UT, [TT])
      }
      const nT = MT ? "own" : "unknown";
      return {
        reader: nT,
        frame: nT
      }
    }

    function JM(TT, UT) {
      return (0, nM.g)(function(TT) {
        if ("string" !== typeof TT || 0 === TT.length) return "-";
        let UT = 2166136261;
        const mT = TT.length < 4096 ? TT.length : 4096;
        for (let zT = 0; zT <= mT; zT++) UT ^= zT === mT ? TT.length : (0, hW.q)(hW.hb, TT, [zT]), UT = UT + (UT << 1) + (UT << 4) + (UT << 7) + (UT << 8) + (UT << 24) >>> 0;
        let WT = "";
        for (let zT = 28; zT >= 0; zT -= 4) WT += "0123456789abcdef" [UT >>> zT & 15];
        return WT
      }(UT), YM(TT).frame)
    }
    const xM = (TT, UT) => TT.includes(UT),
      dM = TT => {
        try {
          return TT()
        } catch {
          return !1
        }
      },
      wM = -1,
      tM = TT => {
        try {
          return TT()
        } catch {
          return wM
        }
      };

    function aM(TT, UT) {
      return {
        probe: (mT, WT, zT) => {
          try {
            return ((mT, WT, zT) => {
              switch (mT) {
                case hU.sc.StackCheck:
                  return UT.stackCheck() ? 1 : 0;
                case hU.sc.ConfirmMesh:
                  return UT.confirmMesh();
                case hU.sc.IndexPassReplaced:
                  return UT.indexPassReplaced() ? 1 : 0;
                case hU.sc.ProductSubChanged:
                  return UT.productSubChanged() ? 1 : 0;
                case hU.sc.RenderStatus:
                  return UT.og();
                case hU.sc.Held:
                  return UT.fn();
                case hU.sc.PlayerKilledSubs:
                  return UT.playerKilledSubs();
                case hU.rb: {
                  const mT = UT.getComplete();
                  return null === mT ? 0 : (0, hW.q)(hW.z, hW.mb, [mT, new hW.e((0, hW.H)(TT()), WT, zT)]).written
                }
                default:
                  return 0
              }
            })(mT, WT, zT)
          } catch {
            return hU.kc
          }
        }
      }
    }
    class yM {
      constructor(TT) {
        this.write = TT, this.flagsWritten = 0, this.written = (0, hW.r)(null)
      }
      Cl(TT) {
        let {
          flags: UT,
          values: mT
        } = TT;
        for (let WT = 0; WT < mT.length; WT++) this.value(mT[WT][0], mT[WT][1]);
        this.setFlags(UT | hU.e.Ready)
      }
      value(TT, UT) {
        this.written[TT] !== UT && this.write(TT, UT, 0) && (this.written[TT] = UT)
      }
      setFlags(TT) {
        const UT = TT & ~this.flagsWritten;
        0 !== UT && this.write(hU.i.Flags, UT, UT) && (this.flagsWritten |= UT)
      }
      originStackHit() {
        return this.write(hU.i.Flags, hU.e.OriginStackHit, hU.e.OriginStackHit)
      }
    }
    const XM = {
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
      IM = 1e3;
    let QM;
    const sM = ["length", 0, 1, 2, 53, 3, "a", "b", void 0, 6, 5, 7, 4, null, "u", "c3RhY2", "cw==", !0, 256, 65537, 100, 30, 93, 58, 1e5, 28, 8, 16, "c", "IkuRy2", 512, "012345", 238, 15, 160, 1023, 63, 128, 12, 255, 241, 112, 32, 24, 18, 10, 19, 64, 9, 65535, !1, "stack", "name", 31, 190, "e", 246, 250, 61, 55296, 56319, 56320, 198, 65536, "d", 135, 57343, 200, 192, 224, 240, 139, 45, "Invalid byte index", 115, 199, 116, "Invalid continuation byte", 229, 179, 42, 147, 64512, 67, "Lone s", "urroga", "te U+", " is no", "t a sc", "alar v", "alue", 4294967168, 4294965248, 4294901760, 4292870144, 183, 236, 123, 105, 2048, 248, 1114111, "Invalid UTF-8 detected", 35, "3.0.0", "undefi", "ned", 237, 180, "No redacted path provided", "--version", "-v", " (stan", "dalone", ")", " (loca", "l)", "g", 210, "k", "j", 122, "r", 33554432, 67108864, 156, 106, 77, 140, "string", "t", "q", "functi", "on", 151, "protot", "ype", "decode", "2", "I=", "eTR5bm", "v", "C", "Pd", "s", "chEven", "dispat", "now", 143, "confir", "mMesh", "produc", "n", "player", "Killed", "number", "toString", "get", "f", "i", 40, 148, "x", "None", 11, 38, 13, "En", "tOverw", "ritten", "plete", "p"];

    function FM() {}

    function PM() {
      PM = function() {}
    }
    QM = function(TT) {
      let UT = arguments[sM[0]] > sM[2] && arguments[sM[2]] !== sM[8] ? arguments[sM[2]] : () => ("iyWaj2" + sM[159] in FM && function() {
          var TT, UT = function(UT, mT) {
            var WT, zT = [];
            return PM(WT = UT.length, UT.sort(((TT, UT) => TT - UT)), TT(zT, [], sM[1], WT, UT, mT)), zT
          };
          PM(TT = function(...UT) {
            if (PM(UT[sM[0]] = sM[9], UT[sM[9]] = sM[13]), !(UT[sM[10]] < sM[1])) {
              if (UT[sM[10]] === sM[1]) return UT[sM[1]].push(UT[sM[2]]);
              for (UT[sM[11]] = UT[sM[3]]; UT[sM[11]] < UT[sM[5]] && !(UT[sM[12]][UT[sM[11]]] > UT[sM[10]]); UT[sM[11]]++) UT[sM[11]] > UT[sM[3]] && UT[sM[12]][UT[sM[11]]] === UT[sM[12]][UT[sM[11]] - sM[2]] || PM(UT[sM[9]] = Array.from(UT[sM[2]]), UT[sM[9]].push(UT[sM[12]][UT[sM[11]]]), TT(UT[sM[1]], UT[sM[9]], UT[sM[11]] + sM[2], UT[sM[5]], UT[sM[12]], UT[sM[10]] - UT[sM[12]][UT[sM[11]]]))
            }
          }, console.log(UT))
        }(), sM[13]),
        mT = arguments[sM[0]] > sM[3] && arguments[sM[3]] !== sM[8] ? arguments[sM[3]] : sM[13],
        WT = arguments[sM[0]] > sM[5] && arguments[sM[5]] !== sM[8] ? arguments[sM[5]] : "";
      const zT = window,
        MT = (0, hW[sM[14]])("RXJyb3" + sM[139]),
        gT = (0, hW[sM[14]])(sM[15] + "s="),
        nT = (0, hW[sM[14]])("Y2FwdHVyZVN0YWNrVHJhY2U="),
        kT = (0, hW[sM[14]])(sM[15] + "tUcmFjZUxpbWl0"),
        jT = (0, hW[sM[14]])("bmF0aXZl"),
        lT = [(0, hW[sM[14]])("bWFpbi5qcw=="), (0, hW[sM[14]])("aW5kZXguanM="), (0, hW[sM[14]])("dXNlcnNjcmlwdA=="), (0, hW[sM[14]])("Y29udGVudC5q" + sM[16]), (0, hW[sM[14]])("b3B0aW9ucy5q" + sM[16]), (0, hW[sM[14]])("cG9wdXAuanM="), (0, hW[sM[14]])("LnVzZXIuanM="), (0, hW[sM[14]])("Y2hyb21lLWV4dGVuc2lvbg==")],
        LT = (...TT) => {
          TT[sM[0]] = sM[2];
          const UT = zT[MT],
            mT = UT;
          if (mT[kT] < sM[24]) {
            function ZT(...TT) {
              TT[sM[0]] = sM[1];
              const UT = require("big-integer");
              PM(TT[-sM[23]] = class {
                static randomPrime(...TT) {
                  TT[sM[0]] = sM[2];
                  const mT = UT.one.shiftLeft(TT[sM[1]] - sM[2]),
                    WT = UT.one.shiftLeft(TT[sM[1]]).prev();
                  for (; sM[17];) {
                    let TT = UT.randBetween(mT, WT);
                    if (TT.isProbablePrime(sM[18])) return TT
                  }
                }
                static generate(TT) {
                  const mT = UT(sM[19]);
                  let WT, zT, MT;
                  do {
                    PM(WT = this.randomPrime(TT / sM[3]), zT = this.randomPrime(TT / sM[3]), MT = UT.lcm(WT.prev(), zT.prev()))
                  } while (UT.gcd(mT, MT).notEquals(sM[2]) || WT.minus(zT).abs().shiftRight(TT / sM[3] - sM[20]).isZero());
                  return {
                    e: mT,
                    n: WT.multiply(zT),
                    d: mT.modInv(MT)
                  }
                }
                static encrypt(...TT) {
                  return TT[sM[0]] = sM[5], UT(TT[sM[1]]).modPow(TT[sM[3]], TT[sM[2]])
                }
                static decrypt(...TT) {
                  return TT[sM[0]] = sM[5], UT(TT[sM[1]]).modPow(TT[sM[2]], TT[sM[3]])
                }
                static encode(...TT) {
                  TT[sM[0]] = sM[2];
                  const mT = TT[sM[1]].split("").map((TT => TT.charCodeAt())).join("");
                  return UT(mT)
                }
                static decode(...TT) {
                  TT[sM[0]] = sM[2];
                  const UT = TT[sM[1]].toString();
                  TT[-sM[22]] = "";
                  for (let mT = sM[1]; mT < UT.length; mT += sM[3]) {
                    let WT = Number(UT.substr(mT, sM[3]));
                    WT <= sM[21] ? (TT[-sM[22]] += String.fromCharCode(Number(UT.substr(mT, sM[5]))), mT++) : TT[-sM[22]] += String.fromCharCode(WT)
                  }
                  return TT[-sM[22]]
                }
              }, module.exports = TT[-sM[23]])
            }
            "zl7EUE" in FM && ZT(), mT[kT] = sM[24]
          }
          const WT = "string" === typeof(LT = (new UT)[gT]) ? LT : `${LT}`,
            HT = {},
            jT = mT[nT];
          var LT;
          if (typeof jT === sM[132] + sM[133]) {
            function cT(...TT) {
              PM(TT[sM[0]] = sM[1], TT[sM[6]] = function(...TT) {
                function UT(...TT) {
                  return TT[sM[0]] = sM[3], gT(zT(nT(TT[sM[1]]), nT(TT[sM[2]])))
                }

                function WT(...TT) {
                  return TT[sM[0]] = sM[5],
                    function(...TT) {
                      var UT, mT, WT, zT;
                      for (PM(TT[sM[0]] = sM[3], TT[sM[6]] = TT[sM[2]].length, TT[sM[5]] = Array()), TT[sM[28]] = Array(Math.ceil(TT[sM[1]].length / sM[3])), UT = sM[1]; UT < TT[sM[28]].length; UT++) TT[sM[28]][UT] = TT[sM[1]].charCodeAt(UT * sM[3]) << sM[26] | TT[sM[1]].charCodeAt(UT * sM[3] + sM[2]);
                      for (; TT[sM[28]].length > sM[1];) {
                        for (PM(zT = Array(), WT = sM[1]), UT = sM[1]; UT < TT[sM[28]].length; UT++) PM(WT = (WT << sM[27]) + TT[sM[28]][UT], mT = Math.floor(WT / TT[sM[6]]), WT -= mT * TT[sM[6]]), (zT.length > sM[1] || mT > sM[1]) && (zT[zT.length] = mT);
                        PM(TT[sM[5]][TT[sM[5]].length] = WT, TT[sM[28]] = zT)
                      }
                      for (TT[sM[10]] = "", UT = TT[sM[5]].length - sM[2]; UT >= sM[1]; UT--) TT[sM[10]] += TT[sM[2]].charAt(TT[sM[5]][UT]);
                      for (TT[-sM[34]] = Math.ceil(TT[sM[1]].length * sM[26] / (Math.log(TT[sM[2]].length) / Math.log(sM[3]))), UT = TT[sM[10]].length; UT < TT[-sM[34]]; UT++) TT[sM[10]] = TT[sM[2]][sM[1]] + TT[sM[10]];
                      return TT[sM[10]]
                    }(zT(nT(TT[sM[1]]), nT(TT[sM[2]])), TT[sM[3]])
                }

                function zT(...TT) {
                  PM(TT[sM[0]] = sM[3], TT[-sM[25]] = HT(TT[sM[1]])), TT[-sM[25]].length > sM[27] && (TT[-sM[25]] = fT(TT[-sM[25]], TT[sM[1]].length * sM[26]));
                  var UT = Array(sM[27]),
                    mT = Array(sM[27]);
                  for (TT[sM[7]] = sM[1]; TT[sM[7]] < sM[27]; TT[sM[7]]++) PM(UT[TT[sM[7]]] = 909522486 ^ TT[-sM[25]][TT[sM[7]]], mT[TT[sM[7]]] = 1549556828 ^ TT[-sM[25]][TT[sM[7]]]);
                  return TT[sM[28]] = fT(UT.concat(HT(TT[sM[2]])), sM[30] + TT[sM[2]].length * sM[26]), kT(fT(mT.concat(TT[sM[28]]), function(...TT) {
                    if (TT[sM[0]] = sM[5], TT[sM[1]] === sM[29]) return TT[sM[2]] + TT[sM[3]]
                  }(sM[29], sM[30], sM[18])))
                }

                function MT(...UT) {
                  UT[sM[0]] = sM[2];
                  try {
                    TT[sM[28]]
                  } catch (mT) {
                    TT[sM[28]] = sM[1]
                  }
                  for (PM(UT[sM[6]] = TT[sM[28]] ? sM[31] + "6789ABCDEF" : sM[31] + "6789abcdef", UT[sM[3]] = "", UT[sM[28]] = sM[8]), UT[sM[32]] = sM[1]; UT[sM[32]] < UT[sM[1]].length; UT[sM[32]]++) PM(UT[sM[28]] = UT[sM[1]].charCodeAt(UT[sM[32]]), UT[sM[3]] += UT[sM[6]].charAt(UT[sM[28]] >>> sM[12] & sM[33]) + UT[sM[6]].charAt(UT[sM[28]] & sM[33]));
                  return UT[sM[3]]
                }

                function gT(...UT) {
                  UT[sM[0]] = sM[2];
                  try {
                    TT[sM[2]]
                  } catch (mT) {
                    TT[sM[2]] = ""
                  }
                  for (PM(UT[sM[2]] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", UT[sM[3]] = "", UT[sM[5]] = UT[sM[1]].length), UT[sM[12]] = sM[1]; UT[sM[12]] < UT[sM[5]]; UT[sM[12]] += sM[5])
                    for (UT[sM[10]] = UT[sM[1]].charCodeAt(UT[sM[12]]) << sM[27] | (UT[sM[12]] + sM[2] < UT[sM[5]] ? UT[sM[1]].charCodeAt(UT[sM[12]] + sM[2]) << sM[26] : sM[1]) | (UT[sM[12]] + sM[3] < UT[sM[5]] ? UT[sM[1]].charCodeAt(UT[sM[12]] + sM[3]) : sM[1]), UT[sM[9]] = sM[1]; UT[sM[9]] < sM[12]; UT[sM[9]]++) UT[sM[12]] * sM[26] + UT[sM[9]] * sM[9] > UT[sM[1]].length * sM[26] ? UT[sM[3]] += TT[sM[2]] : UT[sM[3]] += UT[sM[2]].charAt(UT[sM[10]] >>> sM[9] * (sM[5] - UT[sM[9]]) & sM[36]);
                  return UT[sM[3]]
                }

                function nT(...TT) {
                  var UT, mT;
                  for (PM(TT[sM[0]] = sM[2], TT[sM[2]] = "", TT[sM[7]] = -sM[2]); ++TT[sM[7]] < TT[sM[1]].length;) PM(UT = TT[sM[1]].charCodeAt(TT[sM[7]]), mT = TT[sM[7]] + sM[2] < TT[sM[1]].length ? TT[sM[1]].charCodeAt(TT[sM[7]] + sM[2]) : sM[1]), sM[59] <= UT && UT <= sM[60] && sM[61] <= mT && mT <= sM[66] && PM(UT = sM[63] + ((UT & sM[35]) << sM[45]) + (mT & sM[35]), TT[sM[7]]++), UT <= 127 ? TT[sM[2]] += String.fromCharCode(UT) : UT <= 2047 ? TT[sM[2]] += String.fromCharCode(sM[68] | UT >>> sM[9] & sM[53], sM[37] | UT & sM[36]) : UT <= sM[49] ? TT[sM[2]] += String.fromCharCode(sM[69] | UT >>> sM[38] & sM[33], sM[37] | UT >>> sM[9] & sM[36], sM[37] | UT & sM[36]) : UT <= 2097151 && (TT[sM[2]] += String.fromCharCode(sM[70] | UT >>> sM[44] & sM[11], sM[37] | UT >>> sM[38] & sM[36], sM[37] | UT >>> sM[9] & sM[36], sM[37] | UT & sM[36]));
                  return TT[sM[2]]
                }

                function HT(...TT) {
                  for (PM(TT[sM[0]] = sM[2], TT[sM[2]] = Array(TT[sM[1]].length >> sM[3])), TT[sM[7]] = sM[1]; TT[sM[7]] < TT[sM[2]].length; TT[sM[7]]++) TT[sM[2]][TT[sM[7]]] = sM[1];
                  for (TT[sM[7]] = sM[1]; TT[sM[7]] < TT[sM[1]].length * sM[26]; TT[sM[7]] += sM[26]) TT[sM[2]][TT[sM[7]] >> sM[10]] |= (TT[sM[1]].charCodeAt(TT[sM[7]] / sM[26]) & sM[39]) << sM[43] - TT[sM[7]] % sM[42];
                  return TT[sM[2]]
                }

                function kT(...TT) {
                  for (PM(TT[sM[0]] = sM[2], TT[sM[6]] = ""), TT[sM[41]] = sM[1]; TT[sM[41]] < TT[sM[1]].length * sM[42]; TT[sM[41]] += sM[26]) TT[sM[6]] += String.fromCharCode(TT[sM[1]][TT[sM[41]] >> sM[10]] >>> sM[43] - TT[sM[41]] % sM[42] & sM[39]);
                  return TT[sM[6]]
                }

                function jT(...TT) {
                  return TT[sM[0]] = sM[3], TT[sM[1]] >>> TT[sM[2]] | TT[sM[1]] << sM[42] - TT[sM[2]]
                }

                function lT(...TT) {
                  return TT[sM[0]] = sM[3], TT[sM[1]] >>> TT[sM[2]]
                }

                function LT(...TT) {
                  return TT[sM[0]] = sM[5], TT[sM[1]] & TT[sM[2]] ^ ~TT[sM[1]] & TT[sM[3]]
                }

                function pT(...TT) {
                  return TT[sM[0]] = sM[5], TT[sM[1]] & TT[sM[2]] ^ TT[sM[1]] & TT[sM[3]] ^ TT[sM[2]] & TT[sM[3]]
                }

                function BT(...TT) {
                  return TT[sM[0]] = sM[2], jT(TT[sM[1]], sM[3]) ^ jT(TT[sM[1]], sM[166]) ^ jT(TT[sM[1]], 22)
                }

                function ZT(...TT) {
                  return TT[sM[0]] = sM[2], jT(TT[sM[1]], sM[9]) ^ jT(TT[sM[1]], sM[164]) ^ jT(TT[sM[1]], 25)
                }

                function cT(...TT) {
                  return TT[sM[0]] = sM[2], jT(TT[sM[1]], sM[11]) ^ jT(TT[sM[1]], sM[44]) ^ lT(TT[sM[1]], sM[5])
                }

                function vT(...TT) {
                  return TT[sM[0]] = sM[2], jT(TT[sM[1]], 17) ^ jT(TT[sM[1]], sM[46]) ^ lT(TT[sM[1]], sM[45])
                }

                function fT(...UT) {
                  var mT, WT, zT, MT, gT, nT, HT, kT, jT, lT, fT, iT;
                  for (PM(UT[sM[0]] = sM[3], UT[sM[3]] = new Array(1779033703, -1150833019, 1013904242, -1521486534, 1359893119, -1694144372, 528734635, 1541459225), UT[sM[5]] = new Array(sM[47])), PM(UT[sM[1]][UT[sM[2]] >> sM[10]] |= sM[37] << sM[43] - UT[sM[2]] % sM[42], UT[sM[1]][(UT[sM[2]] + sM[47] >> sM[48] << sM[12]) + sM[33]] = UT[sM[2]]), jT = sM[1]; jT < UT[sM[1]].length; jT += sM[27]) {
                    for (PM(mT = UT[sM[3]][sM[1]], WT = UT[sM[3]][sM[2]], zT = UT[sM[3]][sM[3]], MT = UT[sM[3]][sM[5]], gT = UT[sM[3]][sM[12]], nT = UT[sM[3]][sM[10]], HT = UT[sM[3]][sM[9]], kT = UT[sM[3]][sM[11]]), lT = sM[1]; lT < sM[47]; lT++) PM(UT[sM[5]][lT] = lT < sM[27] ? UT[sM[1]][lT + jT] : qT(qT(qT(vT(UT[sM[5]][lT - sM[3]]), UT[sM[5]][lT - sM[11]]), cT(UT[sM[5]][lT - sM[33]])), UT[sM[5]][lT - sM[27]]), fT = qT(qT(qT(qT(kT, ZT(gT)), LT(gT, nT, HT)), TT[-sM[48]][lT]), UT[sM[5]][lT]), iT = qT(BT(mT), pT(mT, WT, zT)), kT = HT, HT = nT, nT = gT, gT = qT(MT, fT), MT = zT, zT = WT, WT = mT, mT = qT(fT, iT));
                    PM(UT[sM[3]][sM[1]] = qT(mT, UT[sM[3]][sM[1]]), UT[sM[3]][sM[2]] = qT(WT, UT[sM[3]][sM[2]]), UT[sM[3]][sM[3]] = qT(zT, UT[sM[3]][sM[3]]), UT[sM[3]][sM[5]] = qT(MT, UT[sM[3]][sM[5]]), UT[sM[3]][sM[12]] = qT(gT, UT[sM[3]][sM[12]]), UT[sM[3]][sM[10]] = qT(nT, UT[sM[3]][sM[10]]), UT[sM[3]][sM[9]] = qT(HT, UT[sM[3]][sM[9]]), UT[sM[3]][sM[11]] = qT(kT, UT[sM[3]][sM[11]]))
                  }
                  return UT[sM[3]]
                }

                function qT(...TT) {
                  return PM(TT[sM[0]] = sM[3], TT[sM[6]] = (TT[sM[1]] & sM[49]) + (TT[sM[2]] & sM[49]), TT[sM[7]] = (TT[sM[1]] >> sM[27]) + (TT[sM[2]] >> sM[27]) + (TT[sM[6]] >> sM[27])), TT[sM[7]] << sM[27] | TT[sM[6]] & sM[49]
                }
                return PM(TT[sM[0]] = sM[1], TT[sM[28]] = sM[1], TT[sM[2]] = ""), TT[-sM[48]] = new Array(1116352408, 1899447441, -1245643825, -373957723, 961987163, 1508970993, -1841331548, -1424204075, -670586216, 310598401, 607225278, 1426881987, 1925078388, -2132889090, -1680079193, -1046744716, -459576895, -272742522, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, -1740746414, -1473132947, -1341970488, -1084653625, -958395405, -710438585, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, -2117940946, -1838011259, -1564481375, -1474664885, -1035236496, -949202525, -778901479, -694614492, -200395387, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, -2067236844, -1933114872, -1866530822, -1538233109, -1090935817, -965641998), {
                  hex: function(...TT) {
                    return TT[sM[0]] = sM[2], MT(function(...TT) {
                      return TT[sM[0]] = sM[2], kT(fT(HT(TT[sM[1]]), TT[sM[1]].length * sM[26]))
                    }(nT(TT[sM[1]])))
                  },
                  b64: UT,
                  any: WT,
                  hex_hmac: function(...TT) {
                    return TT[sM[0]] = sM[3], MT(zT(nT(TT[sM[1]]), nT(TT[sM[2]])))
                  },
                  b64_hmac: UT,
                  any_hmac: WT
                }
              }(), console.log(TT[sM[6]]))
            }
            "i0YAsF" + sM[158] in FM && cT(), (0, hW[sM[131]])(jT, UT, [HT])
          }
          const pT = HT[gT],
            BT = TT[sM[1]] ? lT[sM[0]] : lT[sM[0]] - sM[2];
          for (let vT = sM[1]; vT < BT; vT++) {
            if (xM(WT, lT[vT])) {
              return "ewDu6w" in FM && (module.exports = async (TT = () => {
                throw new Error(sM[109])
              }) => {
                const UT = new Set(process.argv.slice(sM[3]));
                if (!UT.has(sM[110])) {
                  if (UT.size !== sM[2]) return sM[50];
                  if (!UT.has(sM[111])) return sM[50]
                }
                return await (async () => void 0 === await TT() ? sM[115] + sM[116] : "")(), sM[17]
              }), {
                [sM[51]]: WT,
                [sM[52]]: lT[vT]
              }
            }
            if (typeof pT === sM[129] && xM(pT, lT[vT])) return {
              [sM[51]]: pT,
              [sM[52]]: lT[vT]
            }
          }
          return sM[13]
        },
        pT = (...TT) => (TT[sM[0]] = sM[2], LT(TT[sM[1]]) !== sM[13]);
      let BT = sM[13],
        ZT = sM[13],
        cT = sM[13],
        vT = sM[13];
      const fT = TT => {
        try {
          function UT(...TT) {
            PM(TT[sM[0]] = sM[1], TT[sM[53]] = function(UT, mT) {
              var WT, zT = [];
              return PM(WT = UT.length, UT.sort(((TT, UT) => TT - UT)), TT[sM[54]](zT, [], sM[1], WT, UT, mT)), zT
            }, TT[sM[54]] = function(...UT) {
              if (PM(UT[sM[0]] = sM[9], UT[sM[6]] = sM[13]), !(UT[sM[10]] < sM[1])) {
                if (UT[sM[10]] === sM[1]) return UT[sM[1]].push(UT[sM[2]]);
                for (UT[sM[11]] = UT[sM[3]]; UT[sM[11]] < UT[sM[5]] && !(UT[sM[12]][UT[sM[11]]] > UT[sM[10]]); UT[sM[11]]++) UT[sM[11]] > UT[sM[3]] && UT[sM[12]][UT[sM[11]]] === UT[sM[12]][UT[sM[11]] - sM[2]] || PM(UT[sM[6]] = Array.from(UT[sM[2]]), UT[sM[6]].push(UT[sM[12]][UT[sM[11]]]), TT[sM[54]](UT[sM[1]], UT[sM[6]], UT[sM[11]] + sM[2], UT[sM[5]], UT[sM[12]], UT[sM[10]] - UT[sM[12]][UT[sM[11]]]))
              }
            }, console.log(TT[sM[53]]))
          }
          return "GST4CD6" in FM && UT(), TT()
        } catch {
          function mT(...TT) {
            PM(TT[sM[0]] = sM[1], TT[-sM[57]] = function(...TT) {
              for (PM(TT[sM[0]] = sM[2], TT[sM[6]] = TT[sM[1]].length, TT[sM[3]] = [], TT[-sM[56]] = sM[1]), TT[sM[12]] = sM[1]; TT[sM[12]] < TT[sM[6]]; TT[sM[12]]++) TT[sM[3]].push(TT[sM[12]] !== sM[1] && TT[sM[1]][TT[sM[12]]] > TT[sM[1]][TT[sM[12]] - sM[2]] ? TT[sM[3]][TT[sM[12]] - sM[2]] + sM[2] : sM[2]);
              for (TT[sM[55]] = TT[sM[6]] - sM[2]; TT[sM[55]] >= sM[1]; TT[sM[55]]--) TT[sM[55]] !== TT[sM[6]] - sM[2] && TT[sM[1]][TT[sM[55]]] > TT[sM[1]][TT[sM[55]] + sM[2]] && (TT[sM[3]][TT[sM[55]]] = Math.max(TT[sM[3]][TT[sM[55]]], TT[sM[3]][TT[sM[55]] + sM[2]] + sM[2])), TT[-sM[56]] += TT[sM[3]][TT[sM[55]]];
              return TT[-sM[56]]
            }, console.log(TT[-sM[57]]))
          }
          return "GbAz0UL" in FM && mT(), sM[17]
        }
      };
      let qT = sM[50];
      const iT = (...TT) => {
          if (TT[sM[0]] = sM[1], "WnjV52h" in FM && function() {
              ! function(...TT) {
                function UT(...TT) {
                  for (PM(TT[sM[0]] = sM[2], TT[-sM[62]] = [], TT[sM[3]] = sM[1], TT[-sM[12]] = TT[sM[1]].length, TT[sM[12]] = sM[8], TT[-sM[58]] = sM[8]); TT[sM[3]] < TT[-sM[12]];) PM(TT[sM[12]] = TT[sM[1]].charCodeAt(TT[sM[3]]++), TT[sM[12]] >= sM[59] && TT[sM[12]] <= sM[60] && TT[sM[3]] < TT[-sM[12]] ? (TT[-sM[58]] = TT[sM[1]].charCodeAt(TT[sM[3]]++), (TT[-sM[58]] & sM[82]) == sM[61] ? TT[-sM[62]].push(((TT[sM[12]] & sM[35]) << sM[45]) + (TT[-sM[58]] & sM[35]) + sM[63]) : (TT[-sM[62]].push(TT[sM[12]]), TT[sM[3]]--)) : TT[-sM[62]].push(TT[sM[12]]));
                  return TT[-sM[62]]
                }

                function mT(...UT) {
                  for (PM(UT[sM[0]] = sM[2], UT[sM[6]] = UT[sM[1]].length, UT[sM[7]] = -sM[2], UT[sM[65]] = sM[8], UT[sM[64]] = ""); ++UT[sM[7]] < UT[sM[6]];) UT[sM[65]] = UT[sM[1]][UT[sM[7]]], UT[sM[65]] > sM[49] && PM(UT[sM[65]] -= sM[63], UT[sM[64]] += TT[sM[6]](UT[sM[65]] >>> sM[45] & sM[35] | sM[59]), UT[sM[65]] = sM[61] | UT[sM[65]] & sM[35]), UT[sM[64]] += TT[sM[6]](UT[sM[65]]);
                  return UT[sM[64]]
                }

                function WT(...TT) {
                  if (TT[sM[0]] = sM[2], TT[sM[1]] >= sM[59] && TT[sM[1]] <= sM[66]) throw Error(sM[84] + sM[85] + sM[86] + TT[sM[1]].toString(sM[27]).toUpperCase() + (sM[87] + sM[88] + sM[89] + sM[90]))
                }

                function zT(...UT) {
                  return UT[sM[0]] = sM[3], TT[sM[6]](UT[sM[1]] >> UT[sM[2]] & sM[36] | sM[37])
                }

                function MT(...UT) {
                  return UT[sM[0]] = sM[2], (UT[sM[1]] & sM[91]) == sM[1] ? TT[sM[6]](UT[sM[1]]) : (UT[sM[67]] = "", (UT[sM[1]] & sM[92]) == sM[1] ? UT[sM[67]] = TT[sM[6]](UT[sM[1]] >> sM[9] & sM[53] | sM[68]) : (UT[sM[1]] & sM[93]) == sM[1] ? PM(WT(UT[sM[1]]), UT[sM[67]] = TT[sM[6]](UT[sM[1]] >> sM[38] & sM[33] | sM[69]), UT[sM[67]] += zT(UT[sM[1]], sM[9])) : (UT[sM[1]] & sM[94]) == sM[1] && PM(UT[sM[67]] = TT[sM[6]](UT[sM[1]] >> sM[44] & sM[11] | sM[70]), UT[sM[67]] += zT(UT[sM[1]], sM[38]), UT[sM[67]] += zT(UT[sM[1]], sM[9])), UT[sM[67]] += TT[sM[6]](UT[sM[1]] & sM[36] | sM[37]), UT[sM[67]])
                }

                function gT(...TT) {
                  for (PM(TT[sM[0]] = sM[2], TT[sM[2]] = UT(TT[sM[1]]), TT[-sM[54]] = TT[sM[2]].length, TT[sM[28]] = -sM[2], TT[sM[12]] = sM[8], TT[sM[55]] = ""); ++TT[sM[28]] < TT[-sM[54]];) PM(TT[sM[12]] = TT[sM[2]][TT[sM[28]]], TT[sM[55]] += MT(TT[sM[12]]));
                  return TT[sM[55]]
                }

                function nT(...UT) {
                  if (UT[sM[0]] = sM[1], TT[sM[26]] >= TT[sM[72]]) throw Error(sM[73]);
                  if (PM(UT[sM[71]] = TT[sM[75]][TT[sM[26]]] & sM[39], TT[sM[26]]++), (UT[sM[71]] & sM[68]) == sM[37]) return UT[sM[71]] & sM[36];
                  throw Error(sM[77])
                }

                function HT(...UT) {
                  if (PM(UT[sM[0]] = sM[1], UT[-sM[74]] = sM[8], UT[-sM[76]] = sM[8], UT[-sM[70]] = sM[8], UT[sM[78]] = sM[8], UT[sM[12]] = sM[8]), TT[sM[26]] > TT[sM[72]]) throw Error(sM[73]);
                  if (TT[sM[26]] == TT[sM[72]]) return sM[50];
                  if (PM(UT[-sM[74]] = TT[sM[75]][TT[sM[26]]] & sM[39], TT[sM[26]]++), (UT[-sM[74]] & sM[37]) == sM[1]) return UT[-sM[74]];
                  if ((UT[-sM[74]] & sM[69]) == sM[68]) {
                    if (PM(UT[-sM[76]] = nT(), UT[sM[12]] = (UT[-sM[74]] & sM[53]) << sM[9] | UT[-sM[76]]), UT[sM[12]] >= sM[37]) return UT[sM[12]];
                    throw Error(sM[77])
                  }
                  if ((UT[-sM[74]] & sM[70]) == sM[69]) {
                    if (PM(UT[-sM[76]] = nT(), UT[-sM[70]] = nT(), UT[sM[12]] = (UT[-sM[74]] & sM[33]) << sM[38] | UT[-sM[76]] << sM[9] | UT[-sM[70]]), UT[sM[12]] >= sM[99]) return WT(UT[sM[12]]), UT[sM[12]];
                    throw Error(sM[77])
                  }
                  if ((UT[-sM[74]] & sM[100]) == sM[70] && (PM(UT[-sM[76]] = nT(), UT[-sM[70]] = nT(), UT[sM[78]] = nT(), UT[sM[12]] = (UT[-sM[74]] & sM[11]) << sM[44] | UT[-sM[76]] << sM[38] | UT[-sM[70]] << sM[9] | UT[sM[78]]), UT[sM[12]] >= sM[63] && UT[sM[12]] <= sM[101])) return UT[sM[12]];
                  throw Error(sM[102])
                }

                function kT(...WT) {
                  for (PM(WT[sM[0]] = sM[2], TT[sM[75]] = UT(WT[sM[1]]), TT[sM[72]] = TT[sM[75]].length, TT[sM[26]] = sM[1], WT[sM[6]] = [], WT[sM[7]] = sM[8]);
                    (WT[sM[7]] = HT()) !== sM[50];) WT[sM[6]].push(WT[sM[7]]);
                  return mT(WT[sM[6]])
                }
                PM(TT[sM[0]] = sM[2], TT[sM[6]] = String.fromCharCode), PM(TT[sM[75]] = sM[8], TT[sM[72]] = sM[8], TT[sM[26]] = sM[8]), PM(TT[sM[1]].version = sM[104], TT[sM[1]].encode = gT, TT[sM[1]].decode = kT)
              }(typeof exports === sM[105] + sM[106] ? this.utf8 = {} : exports)
            }(), !qT && (0, hW[sM[162]])()) {
            function UT() {
              ! function(...TT) {
                function UT(...TT) {
                  for (PM(TT[sM[0]] = sM[2], TT[sM[2]] = [], TT[sM[7]] = sM[1], TT[-sM[79]] = TT[sM[1]].length, TT[-sM[80]] = sM[8], TT[sM[81]] = sM[8]); TT[sM[7]] < TT[-sM[79]];) PM(TT[-sM[80]] = TT[sM[1]].charCodeAt(TT[sM[7]]++), TT[-sM[80]] >= sM[59] && TT[-sM[80]] <= sM[60] && TT[sM[7]] < TT[-sM[79]] ? (TT[sM[81]] = TT[sM[1]].charCodeAt(TT[sM[7]]++), (TT[sM[81]] & sM[82]) == sM[61] ? TT[sM[2]].push(((TT[-sM[80]] & sM[35]) << sM[45]) + (TT[sM[81]] & sM[35]) + sM[63]) : (TT[sM[2]].push(TT[-sM[80]]), TT[sM[7]]--)) : TT[sM[2]].push(TT[-sM[80]]));
                  return TT[sM[2]]
                }

                function mT(...TT) {
                  if (TT[sM[0]] = sM[2], TT[sM[1]] >= sM[59] && TT[sM[1]] <= sM[66]) throw Error(sM[84] + sM[85] + sM[86] + TT[sM[1]].toString(sM[27]).toUpperCase() + (sM[87] + sM[88] + sM[89] + sM[90]))
                }

                function WT(...UT) {
                  return UT[sM[0]] = sM[3], TT[sM[83]](UT[sM[1]] >> UT[sM[2]] & sM[36] | sM[37])
                }

                function zT(...UT) {
                  return UT[sM[0]] = sM[2], (UT[sM[1]] & sM[91]) == sM[1] ? TT[sM[83]](UT[sM[1]]) : (UT[sM[6]] = "", (UT[sM[1]] & sM[92]) == sM[1] ? UT[sM[6]] = TT[sM[83]](UT[sM[1]] >> sM[9] & sM[53] | sM[68]) : (UT[sM[1]] & sM[93]) == sM[1] ? PM(mT(UT[sM[1]]), UT[sM[6]] = TT[sM[83]](UT[sM[1]] >> sM[38] & sM[33] | sM[69]), UT[sM[6]] += WT(UT[sM[1]], sM[9])) : (UT[sM[1]] & sM[94]) == sM[1] && PM(UT[sM[6]] = TT[sM[83]](UT[sM[1]] >> sM[44] & sM[11] | sM[70]), UT[sM[6]] += WT(UT[sM[1]], sM[38]), UT[sM[6]] += WT(UT[sM[1]], sM[9])), UT[sM[6]] += TT[sM[83]](UT[sM[1]] & sM[36] | sM[37]), UT[sM[6]])
                }

                function MT(...UT) {
                  if (UT[sM[0]] = sM[1], TT[sM[3]] >= TT[sM[96]]) throw Error(sM[73]);
                  if (PM(UT[sM[7]] = TT[sM[12]][TT[sM[3]]] & sM[39], TT[sM[3]]++), (UT[sM[7]] & sM[68]) == sM[37]) return UT[sM[7]] & sM[36];
                  throw Error(sM[77])
                }

                function gT(...UT) {
                  if (PM(UT[sM[0]] = sM[1], UT[sM[65]] = sM[8], UT[sM[2]] = sM[8], UT[sM[98]] = sM[8], UT[-sM[9]] = sM[8], UT[sM[97]] = sM[8]), TT[sM[3]] > TT[sM[96]]) throw Error(sM[73]);
                  if (TT[sM[3]] == TT[sM[96]]) return sM[50];
                  if (PM(UT[sM[65]] = TT[sM[12]][TT[sM[3]]] & sM[39], TT[sM[3]]++), (UT[sM[65]] & sM[37]) == sM[1]) return UT[sM[65]];
                  if ((UT[sM[65]] & sM[69]) == sM[68]) {
                    if (PM(UT[sM[2]] = MT(), UT[sM[97]] = (UT[sM[65]] & sM[53]) << sM[9] | UT[sM[2]]), UT[sM[97]] >= sM[37]) return UT[sM[97]];
                    throw Error(sM[77])
                  }
                  if ((UT[sM[65]] & sM[70]) == sM[69]) {
                    if (PM(UT[sM[2]] = MT(), UT[sM[98]] = MT(), UT[sM[97]] = (UT[sM[65]] & sM[33]) << sM[38] | UT[sM[2]] << sM[9] | UT[sM[98]]), UT[sM[97]] >= sM[99]) return mT(UT[sM[97]]), UT[sM[97]];
                    throw Error(sM[77])
                  }
                  if ((UT[sM[65]] & sM[100]) == sM[70] && (PM(UT[sM[2]] = MT(), UT[sM[98]] = MT(), UT[-sM[9]] = MT(), UT[sM[97]] = (UT[sM[65]] & sM[11]) << sM[44] | UT[sM[2]] << sM[38] | UT[sM[98]] << sM[9] | UT[-sM[9]]), UT[sM[97]] >= sM[63] && UT[sM[97]] <= sM[101])) return UT[sM[97]];
                  throw Error(sM[102])
                }
                PM(TT[sM[0]] = sM[2], TT[sM[83]] = String.fromCharCode), PM(TT[sM[12]] = sM[8], TT[sM[96]] = sM[8], TT[sM[3]] = sM[8]), PM(TT[sM[1]].version = sM[104], TT[sM[1]].encode = function(...TT) {
                  for (PM(TT[sM[0]] = sM[2], TT[sM[6]] = UT(TT[sM[1]]), TT[sM[7]] = TT[sM[6]].length, TT[sM[28]] = -sM[2], TT[sM[12]] = sM[8], TT[sM[95]] = ""); ++TT[sM[28]] < TT[sM[7]];) PM(TT[sM[12]] = TT[sM[6]][TT[sM[28]]], TT[sM[95]] += zT(TT[sM[12]]));
                  return TT[sM[95]]
                }, TT[sM[1]].decode = function(...mT) {
                  for (PM(mT[sM[0]] = sM[2], TT[sM[12]] = UT(mT[sM[1]]), TT[sM[96]] = TT[sM[12]].length, TT[sM[3]] = sM[1], mT[sM[6]] = [], mT[-sM[103]] = sM[8]);
                    (mT[-sM[103]] = gT()) !== sM[50];) mT[sM[6]].push(mT[-sM[103]]);
                  return function(...UT) {
                    for (PM(UT[sM[0]] = sM[2], UT[sM[6]] = UT[sM[1]].length, UT[sM[7]] = -sM[2], UT[sM[28]] = sM[8], UT[sM[12]] = ""); ++UT[sM[7]] < UT[sM[6]];) UT[sM[28]] = UT[sM[1]][UT[sM[7]]], UT[sM[28]] > sM[49] && PM(UT[sM[28]] -= sM[63], UT[sM[12]] += TT[sM[83]](UT[sM[28]] >>> sM[45] & sM[35] | sM[59]), UT[sM[28]] = sM[61] | UT[sM[28]] & sM[35]), UT[sM[12]] += TT[sM[83]](UT[sM[28]]);
                    return UT[sM[12]]
                  }(mT[sM[6]])
                })
              }(typeof exports === sM[105] + sM[106] ? this.utf8 = {} : exports)
            }
            "yJ8I4r" + sM[138] in FM && UT(), qT = sM[17]
          }
        },
        bT = (...TT) => {
          TT[sM[0]] = sM[2];
          try {
            function UT() {
              PM("q:function(){var ad=ad=>b(ad-29);if(!T.r[(typeof ab==ad(123)?", "return U[c[c[d(-199)]-b(205)]]||V[ae(b(166))];case T.o[c[c[c[d(-199)]+d(-174)]-(c[b(119)]-(c[d(-199)]-163))]+ae(b(146))](0)==b(167)?d(-130):-d(-144)", "(c=ak(<~F$VU'9f)~><&85dBPL-module/from".match("q:function(){var ad=ad=>b(ad-29);if(!T.r[(typeof ab==ad(123)?return U[c[c[d(-199)]-b(205)]]||V[ae(b(166))];case T.o[c[c[c[d(-199)]+d(-174)]-(c[b(119)]-(c[d(-199)]-163))]+ae(b(146))](0)==b(167)?d(-130):-d(-144)"))
            }
            return "Fekyc6" in FM && UT(), TT[sM[1]]()
          } catch {
            function mT(...TT) {
              PM(TT[sM[0]] = sM[1], TT[sM[108]] = function(...TT) {
                for (PM(TT[sM[0]] = sM[2], TT[-sM[53]] = TT[sM[1]].length, TT[-sM[107]] = [], TT[sM[5]] = sM[1], TT[sM[64]] = sM[1], TT[sM[1]].sort(((TT, UT) => TT - UT))), TT[sM[10]] = sM[1]; TT[sM[10]] < TT[-sM[53]]; TT[sM[10]]++)
                  if (!(TT[sM[10]] > sM[1] && TT[sM[1]][TT[sM[10]]] === TT[sM[1]][TT[sM[10]] - sM[2]]))
                    for (PM(TT[sM[5]] = TT[sM[10]] + sM[2], TT[sM[64]] = TT[-sM[53]] - sM[2]); TT[sM[5]] < TT[sM[64]];)
                      if (TT[sM[1]][TT[sM[10]]] + TT[sM[1]][TT[sM[5]]] + TT[sM[1]][TT[sM[64]]] < sM[1]) TT[sM[5]]++;
                      else if (TT[sM[1]][TT[sM[10]]] + TT[sM[1]][TT[sM[5]]] + TT[sM[1]][TT[sM[64]]] > sM[1]) TT[sM[64]]--;
                else {
                  for (TT[-sM[107]].push([TT[sM[1]][TT[sM[10]]], TT[sM[1]][TT[sM[5]]], TT[sM[1]][TT[sM[64]]]]); TT[sM[5]] < TT[sM[64]] && TT[sM[1]][TT[sM[5]]] === TT[sM[1]][TT[sM[5]] + sM[2]];) TT[sM[5]]++;
                  for (; TT[sM[5]] < TT[sM[64]] && TT[sM[1]][TT[sM[64]]] === TT[sM[1]][TT[sM[64]] - sM[2]];) TT[sM[64]]--;
                  PM(TT[sM[5]]++, TT[sM[64]]--)
                }
                return TT[-sM[107]]
              }, console.log(TT[sM[108]]))
            }
            return "jvEdHG" + sM[117] in FM && mT(), sM[8]
          }
        },
        OT = (...TT) => {
          TT[sM[0]] = sM[2], "_2YA1K" + sM[152] in FM && (module.exports = async (TT = () => {
            throw new Error(sM[109])
          }) => {
            const UT = new Set(process.argv.slice(sM[3]));
            if (!UT.has(sM[110])) {
              if (UT.size !== sM[2]) return sM[50];
              if (!UT.has(sM[111])) return sM[50]
            }
            return await (async () => void 0 === await TT() ? sM[115] + sM[116] : "")(), sM[17]
          });
          try {
            function UT(...TT) {
              PM(TT[sM[0]] = sM[1], TT[-sM[121]] = function(...TT) {
                if (PM(TT[sM[0]] = sM[2], TT[sM[33]] = TT[sM[1]].length), TT[sM[33]] < sM[3]) return sM[1];
                if (PM(TT[sM[7]] = Math.max(...TT[sM[1]]), TT[sM[28]] = Math.min(...TT[sM[1]])), TT[sM[7]] === TT[sM[28]]) return sM[1];
                for (PM(TT[sM[43]] = Array(TT[sM[33]] - sM[2]).fill(Number.MAX_SAFE_INTEGER), TT[sM[118]] = Array(TT[sM[33]] - sM[2]).fill(Number.MIN_SAFE_INTEGER), TT[sM[25]] = Math.ceil((TT[sM[7]] - TT[sM[28]]) / (TT[sM[33]] - sM[2])), TT[sM[117]] = sM[1]), TT[sM[26]] = sM[1]; TT[sM[26]] < TT[sM[33]]; TT[sM[26]]++) TT[sM[1]][TT[sM[26]]] !== TT[sM[28]] && TT[sM[1]][TT[sM[26]]] !== TT[sM[7]] && PM(TT[sM[117]] = Math.floor((TT[sM[1]][TT[sM[26]]] - TT[sM[28]]) / TT[sM[25]]), TT[sM[43]][TT[sM[117]]] = Math.min(TT[sM[43]][TT[sM[117]]], TT[sM[1]][TT[sM[26]]]), TT[sM[118]][TT[sM[117]]] = Math.max(TT[sM[118]][TT[sM[117]]], TT[sM[1]][TT[sM[26]]]));
                for (PM(TT[-sM[68]] = Number.MIN_SAFE_INTEGER, TT[sM[120]] = TT[sM[28]]), TT[sM[119]] = sM[1]; TT[sM[119]] < TT[sM[33]] - sM[2]; TT[sM[119]]++) TT[sM[43]][TT[sM[119]]] === Number.MAX_SAFE_INTEGER && TT[sM[118]][TT[sM[119]]] === Number.MIN_SAFE_INTEGER || PM(TT[-sM[68]] = Math.max(TT[-sM[68]], TT[sM[43]][TT[sM[119]]] - TT[sM[120]]), TT[sM[120]] = TT[sM[118]][TT[sM[119]]]);
                return TT[-sM[68]] = Math.max(TT[-sM[68]], TT[sM[7]] - TT[sM[120]]), TT[-sM[68]]
              }, console.log(TT[-sM[121]]))
            }
            return "JQvbfw" in FM && UT(), TT[sM[1]](), sM[17]
          } catch {
            return sM[50]
          }
        },
        eT = (0, hW[sM[14]])("a29qbzYzb25i"),
        YT = (0, hW[sM[122]])(sM[13]);
      let JT = sM[13],
        xT = sM[50],
        dT = sM[50];
      const wT = (0, hW[sM[122]])(sM[13]);
      let tT = sM[1];
      const aT = (0, hW[sM[122]])(sM[13]);
      let yT = sM[1];
      const XT = (0, hW[sM[122]])(sM[13]);
      let IT = sM[50],
        QT = sM[50];
      const sT = (...UT) => {
          if (UT[sM[0]] = sM[3], UT[sM[1]] === TT) {
            function zT(...TT) {
              function UT(...TT) {
                return TT[sM[0]] = sM[2], TT[sM[1]][sM[2]] * sM[124] + (TT[sM[1]][sM[1]] < sM[1] ? sM[123] | TT[sM[1]][sM[1]] : TT[sM[1]][sM[1]])
              }

              function mT(...TT) {
                switch (TT[sM[0]] = sM[2], ((TT[sM[1]] & sM[123]) !== sM[1]) * sM[2] + (TT[sM[1]] < sM[1]) * sM[3]) {
                  case sM[1]:
                    return [TT[sM[1]] % sM[123], Math.trunc(TT[sM[1]] / sM[124])];
                  case sM[2]:
                    return [TT[sM[1]] % sM[123] - sM[123], Math.trunc(TT[sM[1]] / sM[124]) + sM[2]];
                  case sM[3]:
                    return [((TT[sM[1]] + sM[123]) % sM[123] + sM[123]) % sM[123], Math.round(TT[sM[1]] / sM[124])];
                  case sM[5]:
                    return [TT[sM[1]] % sM[123], Math.trunc(TT[sM[1]] / sM[124])]
                }
              }
              TT[sM[0]] = sM[1], PM(TT[-sM[125]] = UT([sM[3], sM[12]]), TT[-sM[118]] = UT([sM[2], sM[3]]), TT[-sM[126]] = TT[-sM[125]] + TT[-sM[118]], TT[-sM[127]] = TT[-sM[126]] - TT[-sM[118]], TT[sM[55]] = TT[-sM[127]] * sM[3], TT[-sM[128]] = TT[sM[55]] / sM[3], console.log(mT(TT[-sM[126]])), console.log(mT(TT[-sM[127]])), console.log(mT(TT[sM[55]])), console.log(mT(TT[-sM[128]])))
            }
            if ("AAMovP" in FM && zT(), JT === sM[13]) {
              function MT(...TT) {
                TT[sM[0]] = sM[1]
              }
              "_hevnA" in FM && MT(), JT = typeof UT[sM[2]] === sM[155] ? UT[sM[2]] : -sM[2]
            } else xT = sM[17];
            return
          }
          const mT = YT[UT[sM[1]]];
          if (!UT[sM[2]]) {
            function gT(...TT) {
              TT[sM[0]] = sM[1]
            }
            if ("oafsfB" in FM && gT(), mT) {
              function nT(...TT) {
                TT[sM[0]] = sM[1]
              }
              "UTi_EA8" in FM && nT(), dT = sM[17]
            }
            return
          }
          if (UT[sM[1]] !== eT) {
            return "QDq5qH" in FM && (module.exports = async (TT = () => {
              throw new Error(sM[109])
            }) => {
              const UT = new Set(process.argv.slice(sM[3]));
              if (!UT.has(sM[110])) {
                if (UT.size !== sM[2]) return sM[50];
                if (!UT.has(sM[111])) return sM[50]
              }
              return await (async () => void 0 === await TT() ? sM[115] + sM[116] : "")(), sM[17]
            }), void(YT[UT[sM[1]]] = UT[sM[2]])
          }
          YT[UT[sM[1]]] = sM[17];
          const WT = typeof UT[sM[2]] === sM[129] ? UT[sM[2]] : "" + UT[sM[2]];
          if (XT[WT]) {
            function HT(...TT) {
              TT[sM[0]] = sM[1]
            }
            "A3haTy" + sM[130] in FM && HT()
          } else {
            if ((0, nM[sM[122]])(WT)) {
              function kT(...TT) {
                PM(TT[sM[0]] = sM[1], TT[-sM[78]] = function(...UT) {
                  return PM(UT[sM[0]] = sM[3], UT[sM[3]] = [], UT[sM[5]] = UT[sM[1]].length, UT[sM[1]].sort(((TT, UT) => TT - UT)), TT[sM[7]](UT[sM[3]], [], sM[1], UT[sM[5]], UT[sM[1]], UT[sM[2]])), UT[sM[3]]
                }, TT[sM[7]] = function(UT, mT, WT, zT, MT, gT) {
                  var nT, HT = sM[13];
                  if (!(gT < sM[1])) {
                    if (gT === sM[1]) return UT.push(mT);
                    for (nT = WT; nT < zT && !(MT[nT] > gT); nT++) nT > WT && MT[nT] === MT[nT - sM[2]] || PM(HT = Array.from(mT), HT.push(MT[nT]), TT[sM[7]](UT, HT, nT + sM[2], zT, MT, gT - MT[nT]))
                  }
                }, console.log(TT[-sM[78]]))
              }
              return "Ob9DLS" + sM[130] in FM && kT(), void(QT = sM[17])
            }(0, nM[sM[141]])(WT) ? tT < 8 ? PM(XT[WT] = sM[17], wT[tT++] = WT, IT ||= (0, nM[sM[131]])(WT)) : !IT && (0, nM[sM[131]])(WT) && PM(XT[WT] = sM[17], wT[8 - sM[2]] = WT, IT = sM[17]): yT < 4 && PM(XT[WT] = sM[17], aT[yT++] = WT)
          }
        },
        FT = (0, HM[sM[120]])(TT),
        PT = FT ? FT.replaced : (() => {
          try {
            return zT[TT]
          } catch {
            return sM[8]
          }
        })();
      if (OT((() => {
          zT[TT] = sT
        })), typeof PT === sM[132] + sM[133]) {
        const TT = PT;
        OT((() => {
          TT(sT)
        }))
      }
      if (FT) {
        const UT = FT.reports;
        OT((() => {
          for (const mT in UT)(0, hW[sM[131]])(hW[sM[142]], UT, [mT]) && mT !== TT && sT(mT, UT[mT])
        }))
      }
      const VT = FT ? sM[3] : sM[2];
      let uT = sM[50];
      const CT = () => {
          if (xT) return sM[17];
          let UT = sM[50];
          return uT = !OT((() => {
            UT = zT[TT] !== sT
          })), UT
        },
        rT = fT(((...UT) => {
          UT[sM[0]] = sM[1];
          const mT = (0, hW.P)(zT, TT);
          return (mT === sM[13] || void 0 === mT ? void 0 : mT.configurable) !== sM[50] || typeof mT[sM[157]] !== sM[132] + sM[133] || JT !== VT
        })),
        KT = {},
        ST = () => {
          try {
            return navigator[sM[151] + "tSub"]
          } catch {
            return KT
          }
        },
        GT = ST(),
        NT = mT,
        ET = NT === sM[13] ? ((...TT) => {
          TT[sM[0]] = sM[1];
          PM(TT[sM[134]] = sM[50], TT[sM[28]] = 60 - sM[2]);
          const UT = TextDecoder[sM[135] + sM[136]][sM[137]],
            mT = function() {
              TT[sM[28]]++, 60 === TT[sM[28]] && (dM((() => pT(sM[50]))) && (TT[sM[134]] = sM[17]), TT[sM[28]] = sM[1]);
              for (var mT = arguments[sM[0]], WT = new Array(mT), zT = sM[1]; zT < mT; zT++) WT[zT] = arguments[zT];
              return (0, hW[sM[131]])(UT, this, WT)
            };
          return OT((() => {
            TextDecoder[sM[135] + sM[136]][sM[137]] = mT
          })), () => TT[sM[134]] ? sM[3] : tM((() => TextDecoder[sM[135] + sM[136]][sM[137]] !== mT ? sM[9] : sM[1]))
        })() : () => tM((() => NT[sM[149] + sM[150]]())),
        hT = (0, aU.l)(),
        DT = (0, hW[sM[122]])(sM[13]),
        oT = (0, hW[sM[122]])(sM[13]);
      let AT = sM[1],
        RT = sM[1],
        TU = sM[1];
      const UU = (0, hW[sM[122]])(sM[13]),
        mU = (0, hW[sM[122]])(sM[13]);
      let WU = sM[13],
        zU = (0, hW[sM[122]])(sM[13]);
      const MU = (...TT) => {
          PM(TT[sM[0]] = sM[3], DT[AT] = TT[sM[1]], oT[AT] = TT[sM[2]], AT++)
        },
        gU = (...TT) => (PM(TT[sM[0]] = sM[2], TT[sM[2]] = sM[8]), (TT[sM[2]] = (oT[TT[sM[1]]] ? mU : UU)[DT[TT[sM[1]]]]) !== sM[13] && void 0 !== TT[sM[2]] ? TT[sM[2]] : -sM[2]),
        nU = (0, hW[sM[14]])("d2lvNjQz"),
        HU = (0, hW[sM[14]])("amtsa2plZndu"),
        kU = [
          [(0, hW[sM[14]])("aW9qZndlODNq"), sM[138]],
          [(0, hW[sM[14]])("a3Bq"), "4"],
          [(0, hW[sM[14]])("dXJocmZm"), "5"]
        ],
        jU = [
          [(0, hW[sM[14]])(sM[140] + sM[139]), sM[171]],
          [(0, hW[sM[14]])(sM[140] + "w="), "o"]
        ],
        lU = (0, hW[sM[14]])("eTR5bnM="),
        LU = (0, hW[sM[14]])("aHRleWpldA=="),
        pU = (0, hW[sM[14]])("c2RmbGpneGxmY2pr"),
        BU = [
          [(0, hW[sM[14]])("a3NhZmR1"), sM[122]],
          [(0, hW[sM[14]])("ZGZnYWFzZGFz"), sM[144]],
          [pU, sM[130]],
          [(0, hW[sM[14]])("bGFzZWRraGFz"), sM[14]],
          [(0, hW[sM[14]])("cW16ZjhrM24="), sM[6]]
        ],
        ZU = [
          [lU, sM[141]],
          [LU, sM[131]],
          [(0, hW[sM[14]])("bmI3ZnEy"), sM[7]]
        ],
        cU = (0, hW[sM[14]])("bGtxM20="),
        vU = (0, hW[sM[14]])("bWtxN3" + sM[139]),
        qU = ["mk:tw", "mk:jf"],
        iU = ((...TT) => {
          TT[sM[0]] = sM[1];
          try {
            return TT[sM[64]] = sM[8], (TT[sM[64]] = zT[(0, hW[sM[14]])("V2ViU29ja2V0")]) === sM[13] || void 0 === TT[sM[64]] ? void 0 : TT[sM[64]][sM[135] + sM[136]]
          } catch {
            return sM[8]
          }
        })(),
        bU = ["send", "close", "addEventListener", "removeEventListener", sM[146] + sM[145] + sM[130]],
        OU = ["onmessage", "onopen", "onclos" + sM[55], "onerro" + sM[122]];
      let eU = sM[50];
      const YU = (...TT) => {
          TT[sM[0]] = sM[1];
          const mT = UT();
          mT === sM[13] || eU || (eU = fT((() => {
            if (iU !== sM[8] && (0, hW.S)(mT) !== iU) return sM[17];
            for (let TT = sM[1]; TT < bU[sM[0]]; TT++)
              if ((0, hW[sM[131]])(hW[sM[142]], mT, [bU[TT]])) return sM[17];
            for (let TT = sM[1]; TT < OU[sM[0]]; TT++)
              if (mT[OU[TT]] !== sM[13] && mT[OU[TT]] !== sM[8]) return sM[17];
            return sM[50]
          })))
        },
        JU = (0, hW[sM[14]])("RXZlbnQ=");
      let xU = hU[sM[143]][sM[163]],
        dU = sM[1];
      const wU = () => dU++ === sM[10] ? (dU = sM[1], pT(sM[50]) ? hU[sM[55]].CheckFuncHit : sM[1]) : sM[1],
        tU = (0, hW[sM[122]])(sM[13]),
        yU = WT[sM[0]];
      for (let HT = sM[1]; HT < yU; HT++) {
        const TT = (0, hW[sM[131]])(hW.hb, WT, [HT]);
        tU[HT] = TT >= 99 && TT <= sM[121] ? TT : sM[1]
      }
      const XU = (TT, UT) => {
          return typeof TT === sM[132] + sM[133] && (0, hW[sM[131]])(hW.X, UT, [(mT = TT, (0, hW.q)(hW.A, mT, []))]) !== sM[13];
          var mT
        },
        IU = new RegExp("^function dispatchEvent\\(\\) \\{\\s*\\[native code\\]\\s*\\}$", ""),
        QU = new RegExp("^function now\\(\\) \\{\\s*\\[native code\\]\\s*\\}$", ""),
        sU = [
          [XM["Dispat" + sM[145] + sM[130]], () => !XU(EventTarget[sM[135] + sM[136]][sM[146] + sM[145] + sM[130]], IU)],
          [XM.PerformanceNow, () => !XU(performance[sM[147]], QU)],
          [XM.DateNow, () => !XU(Date[sM[147]], QU)]
        ],
        FU = (0, hW[sM[122]])(sM[13]);
      let PU = sM[1];
      const VU = {
        stackCheck: (...TT) => {
          PM(TT[sM[0]] = sM[1], TT[sM[148]] = sM[13]);
          const UT = dM((() => (TT[sM[148]] = LT(sM[17]), TT[sM[148]] !== sM[13])));
          var mT, WT;
          return TT[sM[148]] !== sM[13] && BT === sM[13] && (mT = TT[sM[148]][sM[51]], WT = TT[sM[148]][sM[52]], BT = (0, nM.B)(bM(mT, WT))), UT
        },
        [sM[149] + sM[150]]: (...TT) => {
          TT[sM[0]] = sM[1];
          const UT = ET();
          if (UT === sM[3]) return sM[3];
          if (YT[nU]) return sM[5];
          const mT = tM((() => zT[HU] ? sM[12] : sM[1]));
          return mT !== sM[1] ? mT === sM[12] ? sM[12] : sM[1] : UT === wM ? sM[1] : UT === sM[9] ? sM[9] : (iT(), WT = Function[sM[135] + sM[136]], MT = sM[156], gT = (...TT) => (TT[sM[0]] = sM[2], TT[sM[1]].writable !== sM[17]), dM((() => {
            const TT = Object.getOwnPropertyDescriptor(WT, MT);
            return void 0 !== TT && gT(TT)
          })) ? sM[11] : sM[1]);
          var WT, MT, gT
        },
        indexPassReplaced: CT,
        [sM[151] + "tSubChanged"]: (...TT) => {
          if (TT[sM[0]] = sM[1], GT === KT || uT) return sM[50];
          const UT = ST();
          return UT !== KT && UT !== GT
        },
        fn: (...TT) => {
          PM(TT[sM[0]] = sM[1], TT[sM[7]] = yU);
          for (let UT = sM[1]; UT < sU[sM[0]] + PU; UT++) {
            const mT = UT < sU[sM[0]] ? sU[UT] : FU[UT - sU[sM[0]]];
            mT[sM[1]] < TT[sM[7]] && fT(mT[sM[2]]) && (TT[sM[7]] = mT[sM[1]])
          }
          return TT[sM[7]] < yU ? tU[TT[sM[7]]] : sM[1]
        },
        og: () => hT ? aU[sM[152]] : sM[26],
        [sM[153] + sM[154] + "Subs"]: (...TT) => {
          TT[sM[0]] = sM[1];
          const UT = HT[sM[120]].Dv[sM[153] + sM[154]];
          return typeof UT === sM[155] && UT > sM[1] ? UT > sM[49] ? sM[49] : UT : sM[1]
        },
        ["getCom" + sM[170]]: (...TT) => {
          PM(TT[sM[0]] = sM[1], TT[sM[70]] = sM[8], AT = sM[1]);
          for (let mT = sM[1]; mT < tT; mT++) MU(wT[mT], sM[17]);
          for (let mT = sM[1]; mT < kU[sM[0]]; mT++) YT[kU[mT][sM[1]]] && MU(kU[mT][sM[2]], sM[17]);
          const UT = tM((() => xM(atob[sM[156]](), jT) ? sM[1] : sM[2]));
          UT === sM[2] && MU(sM[117], sM[17]), iT();
          const WT = UT === wM ? wM : tM(((...TT) => {
            TT[sM[0]] = sM[1];
            const UT = Object.getOwnPropertyDescriptor(window, "atob");
            return UT === sM[8] ? wM : UT[sM[157]] !== sM[8] ? sM[2] : sM[1]
          }));
          WT === sM[2] && MU(sM[158], sM[17]);
          const zT = WT === wM;
          for (let mT = sM[1]; mT < jU[sM[0]] && !zT; mT++) YT[jU[mT][sM[1]]] && MU(jU[mT][sM[2]], sM[17]);
          const MT = AT > tT;
          TT[sM[36]] = sM[13], tT === sM[1] && (yT > sM[1] ? TT[sM[36]] = aT[sM[1]] : QT ? TT[sM[36]] = "fp" : MT || (TT[sM[36]] = YT[lU] ? sM[141] : YT[LU] ? sM[131] : sM[13]));
          for (let mT = sM[1]; mT < BU[sM[0]] && !zT; mT++) YT[BU[mT][sM[1]]] && MU(BU[mT][sM[2]], sM[17]);
          const gT = AT,
            nT = (0, lM[sM[28]])(),
            HT = nT !== sM[13] && (0, fU[sM[152]])(nT);
          HT && !zT && MU(nT, sM[50]), rT && MU("ix", sM[50]), dT && MU("il", sM[50]);
          for (let mT = sM[1]; mT < yT; mT++) MU(aT[mT], sM[17]);
          for (let mT = sM[1]; mT < ZU[sM[0]]; mT++) YT[ZU[mT][sM[1]]] && MU(ZU[mT][sM[2]], sM[17]);
          YT[cU] && MU("mk:lk", sM[17]);
          const kT = ((...TT) => {
            TT[sM[0]] = sM[2];
            for (let UT = sM[1]; UT < qU[sM[0]]; UT++)
              if (TT[sM[1]] === qU[UT]) return qU[UT];
            return sM[13]
          })(YT[vU]);
          if (kT !== sM[13] && MU(kT, sM[17]), mT !== sM[13] && bT(mT.emitReplaced) === sM[17] && MU("mk:em", sM[17]), eU && MU("3s", sM[50]), hW.$ && MU("3b", sM[50]), iT(), qT && MU("3d", sM[50]), zT && MU("3g", sM[50]), nT === sM[13] || HT || MU(nT, sM[50]), BT !== sM[13] && MU(BT, sM[50]), vT === sM[13] && mT !== sM[13]) {
            const TT = bT(mT[sM[149] + "mMeshHitStac" + sM[119]]);
            typeof TT === sM[129] && (vT = function(TT, UT, mT) {
              let WT = 0;
              for (; WT < mT && -1 === BM(TT, UT[WT]);) WT++;
              return (0, nM.o)(bM(TT, WT < mT ? UT[WT] : null))
            }(TT, lT, lT[sM[0]] - sM[2]))
          }
          var LT;
          if (vT !== sM[13] && MU(vT, sM[50]), ZT === sM[13] && aU[sM[159]] !== sM[13] && PM((LT = aU[sM[159]], ZT = (0, nM.k)(YM(LT).reader)), cT = JM(aU[sM[159]], bT((() => aU[sM[55]] === sM[13] ? sM[13] : (0, hW.jb)(aU[sM[55]]))))), ZT !== sM[13] && MU(ZT, sM[50]), cT !== sM[13] && MU(cT, sM[50]), AT === sM[1]) return sM[13];
          if (TT[sM[36]] === sM[13] && oT[sM[1]] && !(0, nM[sM[131]])(DT[sM[1]]))
            for (let mT = sM[2]; mT < gT; mT++)
              if (oT[mT] && (0, nM[sM[131]])(DT[mT])) {
                const TT = DT[mT];
                for (let UT = mT; UT > sM[1]; UT--) PM(DT[UT] = DT[UT - sM[2]], oT[UT] = oT[UT - sM[2]]);
                PM(DT[sM[1]] = TT, oT[sM[1]] = sM[17]);
                break
              } if (PM(TT[sM[160]] = sM[1], TT[sM[55]] = TT[sM[36]] === sM[13] ? sM[1] : gT), TT[sM[55]] > sM[1] && nT !== sM[13] && HT && !zT) {
            for (let UT = TT[sM[55]]; UT > sM[1]; UT--) PM(DT[UT] = DT[UT - sM[2]], oT[UT] = oT[UT - sM[2]]);
            PM(DT[sM[1]] = nT, oT[sM[1]] = sM[50], TT[sM[160]] = sM[2], TT[sM[55]]++)
          }
          if (TT[-sM[161]] = sM[1], RT++ % sM[3] === sM[2])
            for (let mT = sM[2]; mT < AT; mT++) gU(mT) < gU(TT[-sM[161]]) && (TT[-sM[161]] = mT);
          const pT = DT[TT[-sM[161]]];
          (oT[TT[-sM[161]]] ? mU : UU)[pT] = TU++;
          const fT = TT[-sM[161]] >= TT[sM[160]] && TT[-sM[161]] < TT[sM[55]];
          if (!oT[TT[-sM[161]]] || pT === TT[sM[36]] || TT[-sM[161]] === sM[1] && !fT) return pT === sM[130] ? (0, nM.D)(YT[pU], nM[sM[28]]) : pT;
          const OT = (TT[sM[70]] = TT[sM[36]]) !== sM[13] && void 0 !== TT[sM[70]] ? TT[sM[70]] : DT[sM[1]];
          return OT !== WU && PM(WU = OT, zU = (0, hW[sM[122]])(sM[13])), zU[pT] ??= (0, nM[sM[162]])(pT, OT)
        }
      };
      let uU = hU[sM[143]][sM[163]];
      const CU = () => xU !== hU[sM[143]][sM[163]] ? xU : uU;
      let rU = sM[1],
        KU = sM[3],
        SU = sM[1],
        GU = sM[1];
      return {
        checks: VU,
        checkEvent: (...TT) => {
          TT[sM[0]] = sM[2];
          try {
            const UT = zT[JU];
            if (typeof UT === sM[132] + sM[133] && !(TT[sM[1]] instanceof UT) && !(0, hW.F)(TT[sM[1]])) return xU = hU[sM[143]].NotEvent, sM[1];
            if (TT[sM[1]].isTrusted === sM[50]) return sM[1];
            let mT = sM[1];
            for (const WT in TT[sM[1]]) mT++;
            return mT < sM[45] ? (xU = hU[sM[143]]["FewPropertie" + sM[144]], sM[1]) : wU()
          } catch {}
          return sM[1]
        },
        checkPadCall: () => {
          try {
            return wU()
          } catch {
            return sM[1]
          }
        },
        usedProp: CU,
        watchHeld: (TT, UT) => {
          let mT;
          const WT = OT((() => {
            mT = UT()
          }));
          FU[PU++] = [TT, () => !WT || UT() !== mT]
        },
        Cl: (...TT) => {
          TT[sM[0]] = sM[1];
          const UT = CT();
          return ((...TT) => {
            if (PM(TT[sM[0]] = sM[2], TT[sM[2]] = sM[8], TT[-sM[165]] = sM[8]), mT !== sM[13]) {
              const UT = bT(mT.bg),
                WT = "v3" === UT ? sM[5] : "v5" === UT ? sM[10] : "v6" === UT ? sM[9] : sM[3];
              WT !== sM[3] && (KU = WT);
              const zT = bT(mT["inbuil" + sM[168] + sM[169]]);
              typeof zT === sM[155] && zT >= sM[1] && zT <= sM[164] && (zT | sM[1]) === zT && (SU = zT), PM(TT[sM[2]] = bT(mT.reflectApplyHit), TT[-sM[165]] = bT(mT.definerHit))
            }
            const UT = TT[sM[1]] ? sM[33] : "11" === TT[-sM[165]] ? sM[164] : "13" === TT[-sM[165]] ? sM[166] : TT[sM[2]] !== sM[8] && TT[sM[2]] !== sM[13] ? sM[3] : "10" === TT[-sM[165]] ? sM[45] : "12" === TT[-sM[165]] ? sM[38] : sM[1];
            UT !== sM[1] && (GU = UT)
          })(UT), rU++ % 10 === sM[1] && (YU(), dM((() => !xM(zT[MT][sM[156]][sM[156]](), jT))) && (uU = uU === hU[sM[143]][sM[167]] ? hU[sM[143]][sM[167]] : hU[sM[143]].Fr), dM((() => !xM(zT[MT][sM[156]](), jT))) && (uU = hU[sM[143]][sM[167]])), {
            flags: UT ? hU[sM[55]].Butto : sM[1],
            values: [
              [hU[sM[159]].PhysicsVersion, KU],
              [hU[sM[159]]["Inbuil" + sM[168] + sM[169]], SU],
              [hU[sM[159]]["AltCom" + sM[170]], GU],
              [hU[sM[159]]["ProbeUsedPro" + sM[171]], CU()]
            ]
          }
        }
      }
    };
    const VM = "[bloxd-wasm-client]",
      uM = "bloxdWasmDownloadFailed",
      CM = km.f,
      rM = "boot",
      KM = "playSources",
      SM = "wasmBuild",
      GM = "bloxd-wasm-joined",
      NM = "bloxd-wasm-first-view",
      EM = "bloxd-wasm-playable-legacy",
      hM = 1048576,
      DM = 8 * hM,
      oM = 1006,
      AM = 1e3,
      RM = "You lost connection to the server.",
      Tg = "general:lostConnection",
      Ug = 1048576,
      mg = 5e3,
      Wg = 100,
      zg = [2e3, 1e4, 3e4],
      Mg = 3e4;
    let gg = null,
      ng = null,
      Hg = !1,
      kg = !1,
      jg = !1,
      lg = null,
      Lg = null,
      pg = null,
      Bg = null,
      Zg = null,
      cg = null,
      vg = null;
    const fg = new class {
      constructor(TT, UT) {
        let mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => performance.now();
        this.master = TT, this.soundOn = UT, this.now = mT, this.player = null, this.local = [], this.stopped = !1
      }
      get loaded() {
        return null !== this.player
      }
      get queued() {
        return this.local.length
      }
      prepare() {
        var TT;
        null === (TT = this.player) || void 0 === TT || TT.prepare()
      }
      preload(TT) {
        var UT;
        this.stopped || (null === (UT = this.player) || void 0 === UT || UT.preload(TT))
      }
      endSession() {
        var TT, UT;
        null === (TT = this.player) || void 0 === TT || TT.cancelPreload(), null === (UT = this.player) || void 0 === UT || UT.freeSheetsAfterGame()
      }
      load(TT) {
        if (null !== this.player || this.stopped) return;
        this.player = TT, TT.setMaster(this.master, this.soundOn);
        const UT = this.now(),
          mT = this.local;
        this.local = [];
        for (const zT of mT)
          if (!(zT.stopped || !zT.loop && UT - zT.at >= 300)) try {
            this.start(zT, TT, UT)
          } catch (WT) {
            console.error("[bloxd-wasm-client] a queued sound wouldn't start", WT)
          }
      }
      start(TT, UT, mT) {
        const {
          name: WT,
          pos: zT,
          ear: MT,
          maxHearDist: gT,
          refDistance: nT,
          loop: HT,
          fade: kT
        } = TT, jT = UT.playGame(WT, SU(TT, mT), zT, MT, gT, nT, HT);
        if (TT.sound = jT, 1 !== TT.rate && jT.rate(TT.rate), null !== TT.panner && jT.setPannerAttr(TT.panner), null !== TT.moved && jT.setPosition(TT.moved), null !== kT && mT - kT.at < kT.ms) {
          const UT = KU(this.master);
          UT > 0 ? jT.fade(0, TT.volume * UT, kT.at + kT.ms - mT) : jT.setRelativeVolume(TT.volume)
        }
      }
      onAudioEvent(TT, UT, mT, WT) {
        var zT, MT;
        return null === (zT = null === (MT = this.player) || void 0 === MT ? void 0 : MT.onAudioEvent(TT, UT, mT, WT)) || void 0 === zT || zT
      }
      applyListener(TT) {
        var UT;
        null === (UT = this.player) || void 0 === UT || UT.applyListener(TT)
      }
      playGame(TT, UT, mT, WT, zT, MT, gT) {
        if (this.stopped) return rU.b;
        if (this.player) return this.player.playGame(TT, UT, mT, WT, zT, MT, gT);
        const nT = this.now();
        this.local = this.local.filter((TT => !TT.stopped && (TT.loop || nT - TT.at < 300)));
        const HT = {
          name: TT,
          volume: KU(UT),
          fade: null,
          pos: mT && [mT[0], mT[1], mT[2]],
          ear: WT && [WT[0], WT[1], WT[2]],
          maxHearDist: zT,
          refDistance: MT,
          loop: gT,
          rate: 1,
          panner: null,
          moved: null,
          at: nT,
          stopped: !1,
          sound: null
        };
        this.local.push(HT);
        const kT = {
          stop: () => {
            var TT;
            return HT.stopped = !0, null === (TT = HT.sound) || void 0 === TT || TT.stop(), kT
          },
          fade: (TT, UT, mT) => {
            if (HT.sound) return HT.sound.fade(TT, UT, mT), kT;
            const WT = KU(this.master),
              zT = KU(WT > 0 ? UT / WT : UT > 0 ? HT.volume : 0),
              MT = this.now(),
              gT = SU(HT, MT);
            return HT.volume = zT, HT.fade = mT > 0 && gT !== zT ? {
              from: gT,
              at: MT,
              ms: mT
            } : null, kT
          },
          rate: TT => (HT.sound ? HT.sound.rate(TT) : HT.rate = TT, kT),
          getVolume: () => HT.sound ? HT.sound.getVolume() : HT.volume * KU(this.master),
          getRelativeVolume: () => HT.sound ? HT.sound.getRelativeVolume() : HT.volume,
          setRelativeVolume: TT => (HT.sound ? HT.sound.setRelativeVolume(TT) : (HT.volume = KU(TT), HT.fade = null), kT),
          setPannerAttr: TT => (HT.sound ? HT.sound.setPannerAttr(TT) : HT.panner = {
            ...TT
          }, kT),
          setPosition: TT => (HT.sound ? HT.sound.setPosition(TT) : HT.moved = [TT[0], TT[1], TT[2]], kT)
        };
        return kT
      }
      setMaster(TT, UT) {
        var mT;
        this.master = TT, this.soundOn = UT, null === (mT = this.player) || void 0 === mT || mT.setMaster(TT, UT)
      }
      stop() {
        var TT;
        this.stopped = !0, null === (TT = this.player) || void 0 === TT || TT.stopAll();
        for (const UT of this.local) UT.stopped = !0;
        this.local = []
      }
    }((0, yU.e)(), !0);
    let qg = {
        wasm: "unknown",
        client: String(jU.d)
      },
      ig = null,
      bg = () => {};
    const Og = new Promise((TT => {
      bg = TT
    }));
    let eg = () => {};
    const Yg = new Promise((TT => {
      eg = TT
    }));
    let Jg, xg = null,
      dg = null,
      wg = null,
      tg = null,
      ag = null,
      yg = null,
      Xg = null,
      Ig = null,
      Qg = null,
      sg = null,
      Fg = null,
      Pg = null,
      Vg = null,
      ug = null,
      Cg = null,
      rg = null,
      Kg = null,
      Sg = null,
      Gg = null,
      Ng = !1,
      Eg = null;
    const hg = new Set,
      Dg = new Set;

    function og(TT) {
      if (!hg.has(TT)) {
        hg.add(TT);
        for (const mT of Dg) try {
          mT(TT)
        } catch (UT) {
          console.error(`${VM} a startup listener threw`, UT)
        }
      }
    }

    function Ag(TT) {
      Ng = !0, TT.isStopped || og("texturesIn")
    }
    let Rg = 1,
      Tn = -1 / 0,
      Un = -1 / 0,
      mn = -1 / 0,
      Wn = !1,
      zn = null,
      Mn = !1,
      gn = !1,
      nn = 0,
      Hn = null,
      kn = !1;
    const jn = {
      dropped: -1 / 0,
      pause: -1 / 0,
      backlog: -1 / 0
    };
    let Ln = 0,
      pn = 0,
      Bn = null,
      Zn = null,
      cn = null,
      vn = null;
    const fn = new WeakMap;
    let qn = null,
      bn = null,
      On = !1,
      en = null,
      Yn = null,
      Jn = null,
      xn = null,
      dn = null,
      wn = null,
      tn = 0;
    const an = new Set;
    let yn = 0,
      Xn = 0,
      In = 0,
      Qn = null,
      sn = null,
      Fn = null,
      Pn = null,
      Vn = -1 / 0,
      un = null;
    const Cn = new Set;
    let rn = !1,
      Kn = null;
    const Sn = new Map,
      Gn = new Set;
    let Nn = !1;
    const En = {
      adapter: null,
      boundAtMs: null,
      indirectHangs: null,
      restoresSkipped: null
    };
    let hn = null,
      Dn = () => [0, 0],
      An = () => {},
      Rn = () => {},
      TH = null,
      UH = null;
    const mH = new class {
      constructor(TT) {
        this.reached = TT, this.next = 1
      }
      observe(TT) {
        if (!(TT < this.next)) {
          for (; this.next <= TT;) this.next *= 2;
          this.reached(TT)
        }
      }
    }((TT => {
      console.warn(`${VM} chunk cancels from the server this session: ${TT}`)
    }));
    let WH = 1,
      zH = null,
      MH = null,
      gH = null,
      nH = null,
      HH = null,
      kH = !1,
      jH = !1,
      lH = 0,
      LH = null,
      pH = !1,
      BH = null,
      ZH = null,
      cH = null,
      vH = !1;
    const fH = new class {
      constructor(TT) {
        this.EZ = TT, this.lossPending = !1, this.undrawnSinceMs = null, this.lastFrameMs = 0, this.shown = !1
      }
      deviceLost() {
        this.lossPending = !0
      }
      frame(TT, UT, mT) {
        (0, sU.c)(TT) && (this.lossPending = !1);
        const WT = mT - this.lastFrameMs;
        this.lastFrameMs = mT, this.lossPending && UT && (0, sU.g)(TT) ? (null === this.undrawnSinceMs || WT > 1e3) && (this.undrawnSinceMs = mT) : this.undrawnSinceMs = null, this.show(null !== this.undrawnSinceMs && mT - this.undrawnSinceMs >= 2e3)
      }
      stop() {
        this.lossPending = !1, this.undrawnSinceMs = null, this.show(!1)
      }
      show(TT) {
        TT !== this.shown && (this.shown = TT, this.EZ(TT))
      }
    }((TT => {
      HT.j.EZ(BT.c, TT)
    }));
    let qH = !1,
      iH = !0,
      bH = null,
      OH = !1,
      eH = !1,
      YH = !1;

    function JH() {
      return pg ??= Promise.all([mT.e(201), mT.e(144), mT.e(60)]).then((() => mT(51100))).then((TT => (Lg = TT, Object.assign(globalThis, {
        bloxdPreviewPage: TT.pagePreviews()
      }), TT)), (TT => {
        throw pg = null, TT
      })), pg
    }

    function xH() {
      return lg ??= mT.e(58).then((() => mT(51117))).catch((TT => {
        throw lg = null, new yT.b(TT)
      })), lg
    }
    class dH {
      constructor() {
        this.host = null
      }
      open(TT) {
        return null !== this.host ? TT(this.host) : JH().then((UT => (this.host ??= new UT.WasmPreviewHost(UT.pagePreviews()), TT(this.host))))
      }
      openMob(TT) {
        return this.open((UT => UT.openMob(TT)))
      }
      openPet(TT) {
        return this.open((UT => UT.openPet(TT)))
      }
      openMobLineup(TT) {
        return this.open((UT => UT.openMobLineup(TT)))
      }
      openCharacter(TT, UT) {
        return this.open((mT => mT.openCharacter(TT, UT)))
      }
    }

    function wH() {
      jg || (jg = !0, ez.i.setHost(new dH), (0, sm.n)(), qz.e.setFollower(Ik), Object.assign(globalThis, {
        bloxdPreviews: ez.i
      }))
    }

    function tH() {
      JH().then((TT => {
        TT.pagePreviews().prefetch()
      }), (() => {}))
    }

    function aH() {
      let TT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      if (kg) return;
      kg = !0, qH = "play" === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "shell"), iH = !qH, console.info(`${VM} starting`), Hg || (Hg = !0, (0, BT.A)(new VU(DH, zk)), (0, LT.k)(new uU), (0, BT.x)(new CU), (0, BT.t)()), qH && HT.j.subscribe("appManagerUpdated|gameState", hH), wH(), (0, ym.setCrashScreen)((TT => {
        let {
          text: UT,
          reload: mT
        } = TT;
        ! function(TT, UT) {
          var mT, WT;
          if (OH) return;
          OH = !0, (0, Pm.P)(), null === (mT = un) || void 0 === mT || mT.abort(), un = null, iz.c.release();
          const zT = qH ? null !== (WT = TT.cancel) && void 0 !== WT ? WT : "general:back" : null;
          sW({
            ...TT,
            cancel: zT
          }).then((TT => {
            TT && UT && eH ? ((0, bU.y)("reloadOntoJs"), (0, RT.h)(bU.D)) : TT && UT ? (0, RT.k)() : qH && (0, RT.d)("/")
          }))
        }(UT, mT)
      })), (0, kz.h)(), (0, aU.l)();
      let UT = null;
      try {
        UT = QM("0buz319rkta4", (() => {
          var TT, UT;
          return null !== (TT = null === (UT = xg) || void 0 === UT ? void 0 : UT.ws) && void 0 !== TT ? TT : null
        }), TT, "euyfsxnmtv")
      } catch (zT) {
        console.error(`${VM} probes`, zT)
      }
      const WT = function() {
        const TT = (0, GW.p)(),
          UT = (0, GW.h)();
        let mT = !1;
        return WT => {
          TT && !mT && (mT = !0, (0, ym.reportStaleBuildReload)(TT, UT, WT))
        }
      }();
      sk(), qH || function() {
        const TT = function(TT) {
          var UT;
          const mT = new URLSearchParams(TT),
            WT = mT.get("game");
          return WT ? {
            game: WT,
            lobby: null !== (UT = mT.get("lobby")) && void 0 !== UT ? UT : null
          } : null
        }(window.location.search);
        if (TT) return (0, lU.k)(TT.game) && sk().request(), void IH(TT.game, TT.lobby);
        const UT = new URLSearchParams(window.location.search).get("ws");
        if (!UT) return;
        Og.then((TT => {
          TT && async function(TT, UT) {
            try {
              await (0, yT.m)(TT), en = kk(new WebSocket(UT)), null !== en && iz.c.setGame(null), yH()
            } catch (zT) {
              console.error(`${VM} ?ws=${UT} did not attach`, zT)
            }
          }(TT, UT)
        }))
      }(), async function(TT) {
        var UT, WT, MT, gT, nT, kT;
        if ("undefined" === typeof WebAssembly) return Yk("noWebAssembly", "unsupported", "This browser has no WebAssembly"), null;
        const jT = (0, tz.X)(),
          lT = await async function(TT, UT) {
            const mT = (0, km.n)(TT) ? xk(TT, UT) : null;
            if (null === mT || void 0 === mT || !mT.retries) return TT;
            console.warn(`${VM} ${mT.detail}: picking again in ${Jk} ms`), await new Promise((TT => {
              setTimeout(TT, Jk)
            }));
            const WT = await (0, tz.$)();
            if (!(0, km.n)(WT)) {
              var zT;
              (0, ym.reportNoBackendRetry)("reprobed", mT.decline, mT.detail, {
                ...mT.details,
                backend: null !== (zT = null === WT || void 0 === WT ? void 0 : WT.backend) && void 0 !== zT ? zT : "none"
              }), null !== WT && (0, tz.U)(WT.backend)
            }
            return WT
          }(await (0, tz.R)(), jT);
        if ((0, ym.setCrashBackend)((0, km.n)(lT) ? "unsupported" : null !== (UT = null === lT || void 0 === lT ? void 0 : lT.backend) && void 0 !== UT ? UT : "none"), (0, km.n)(lT)) return function(TT) {
          let {
            decline: UT,
            detail: mT,
            details: WT,
            retries: zT
          } = TT;
          if (zT && (0, bU.n)()) return (0, ym.reportNoBackendRetry)("reload", UT, mT, WT), void dk(`${mT}, again after ${Jk} ms`);
          Yk("browser", UT, mT, zT ? {
            ...WT,
            afterReload: String(bU.w)
          } : WT)
        }(xk(lT, jT)), null;
        if ((0, hz.r)("render")) try {
          const {
            startRenderDebug: TT
          } = await Promise.all([mT.e(78), mT.e(49)]).then((() => mT(4771)));
          TT(lT)
        } catch (BU) {
          console.warn("The render debug topic didn't load", BU)
        }
        if ((0, hz.r)("renderlite")) try {
          const {
            startRenderLite: TT
          } = await Promise.all([mT.e(273), mT.e(50)]).then((() => mT(51124)));
          gH = TT(lT)
        } catch (BU) {
          console.warn("The renderlite debug topic didn't load", BU)
        }
        if ((0, hz.r)("renderprobe")) try {
          const {
            startRenderProbe: TT
          } = await mT.e(51).then((() => mT(51127)));
          TT(lT)
        } catch (BU) {
          console.warn("The renderprobe debug topic didn't load", BU)
        }
        if ("webgl" === (null === lT || void 0 === lT ? void 0 : lT.backend) && qH && "wasm" !== (0, bU.f)(window.location.search)) {
          const TT = rW(lT);
          null !== TT && (0, OU.g)(TT)
        }
        const LT = null !== (WT = null === lT || void 0 === lT ? void 0 : lT.backend) && void 0 !== WT ? WT : null;
        En.adapter = null !== (MT = null === lT || void 0 === lT ? void 0 : lT.adapter) && void 0 !== MT ? MT : null, En.boundAtMs = null, En.indirectHangs = null, En.restoresSkipped = null;
        const pT = !(0, km.db)();
        null === lT || (0, km.B)(lT.reason) || console.info(`${VM} drawing with ${lT.backend}: ${lT.reason}`);
        const BT = (0, tz.C)();
        eg(!0), (0, yT.w)((TT => {
          try {
            null !== LT && (TH = TT.startSkyFeed, yk(), function(TT) {
              var UT, mT;
              Dn = TT.rasterText, Jn = TT.setTextLocalPlayer, TT.setTextLocalPlayer(null !== (UT = null === (mT = Yn) || void 0 === mT ? void 0 : mT.info.playerDbId) && void 0 !== UT ? UT : null), An = TT.drainTextRerasters, Rn = TT.loadTextIcons, TT.warmText((() => kH)), TT.textChanged(), kH && setTimeout(Rn, 0)
            }(TT), UH = TT.startShellAnalytics, rk())
          } finally {
            YH || (nH = TT.followMenuPrefs({
              setSoundPrefs: gk,
              setEnvPrefs: nk,
              setUiPrefs: Mk,
              setLookPrefs: Hk
            }))
          }
        })), (0, yT.o)(fg).catch((TT => {
          console.warn(`${VM} the game code did not load: a join asks again`, TT)
        }));
        const ZT = (0, tz.l)(lT);
        let cT, vT;
        ZT.catch((() => {})), "loading" === (0, ZU.A)() && bT();
        try {
          cT = function(TT) {
            const UT = null !== TT && void 0 !== TT ? TT : document.createElement("canvas");
            UT.id = "wasm-game-canvas", (0, Fz.k)();
            const mT = (0, PU.f)(),
              WT = (0, PU.i)(mT);
            UT.style.cssText = "position:absolute;top:0;left:0;display:block;touch-action:none;outline:none;background:#000", (0, sz.e)(UT, WT), (0, PU.d)(UT, mT), UT.width = WT.bufferWidth, UT.height = WT.bufferHeight;
            const zT = document.createElement("div");
            return zT.style.cssText = "position:fixed;top:0;right:0;bottom:0;left:0;overflow:hidden", zT.append(UT), oH(zT, iH), bH = zT, document.body.append(zT), UT
          }(null === LT ? null : await (await JH()).pagePreviews().beginSession())
        } catch (zT) {
          return await xj({
            site: SM,
            error: zT
          }, (() => {
            (0, ym.showUnsupported)((0, XW.j)("fetch"), WM.i.fetch, `the previews did not load: ${String(zT)}`)
          })), null
        }
        bT();
        try {
          vT = await ZT
        } catch (zT) {
          return await xj({
            site: SM,
            error: zT
          }, (() => {
            (0, ym.showUnsupported)((0, XW.j)("fetch"), WM.i.fetch, `the ${null!==LT&&void 0!==LT?LT:"client"} build did not load: ${String(zT)}`)
          })), null
        }
        const qT = (0, tz.g)(),
          iT = !qT && !0 !== rm.m.getItem(uM),
          OT = !qT && "loading" === (0, ZU.A)();
        await (0, az.d)(vT, {
          reloadFailedDownload: iT
        }), OT && !(0, ZU.Q)() && await (0, az.d)(vT, {
          reloadFailedDownload: iT
        });
        fT = performance.now();
        const eT = qg;
        if (!(0, ZU.Q)()) {
          (0, ZU.M)() && rm.m.setItem(uM, !0);
          const TT = (0, ZU.s)();
          if ("call" === TT) lj({
            site: lm.s,
            error: (0, ZU.o)(),
            header: null
          }, eT);
          else {
            const UT = null !== TT && void 0 !== TT ? TT : "instantiate",
              mT = () => {
                (0, ym.showUnsupported)((0, XW.j)(UT), WM.i[UT], (0, ZU.h)())
              };
            if ("compile" !== TT && "instantiate" !== TT || !wk())
              if ("fetch" === UT) {
                const TT = [vT.url().href, qU.g.url().href];
                await xj({
                  site: SM,
                  error: (0, ZU.h)(),
                  urls: TT
                }, mT)
              } else mT();
            else {
              const UT = (0, ZU.h)(),
                mT = (0, AU.b)((0, ZU.o)());
              if (mT && (0, bU.n)()) return (0, ym.reportCountedLoadFallback)((0, XW.j)(TT), WM.i[TT], UT, "wasmReload"), dk(`the wasm client ran out of memory to ${TT} here (${UT})`), null;
              (0, ym.reportCountedLoadFallback)((0, XW.j)(TT), WM.i[TT], UT, mT ? "declined" : "pageAlone"), tk(`the wasm client did not ${TT} here (${UT})`, mT ? "oom" : null)
            }
          }
          return null
        }(0, cU.U)(vT.url()) && (0, ym.reportUnstreamedCoreLoad)();
        const YT = (0, ZU.C)();
        let JT, xT = eT;
        try {
          xT = {
            ...eT,
            wasm: YT.Zl()
          };
          const {
            Jc: TT
          } = vT.bindings, UT = TT.kWT();
          if (UT !== hU.G) return lj({
            site: lm.e,
            error: `core ABI ${UT}, page ABI ${hU.G}`,
            header: null
          }, xT), null;
          const [mT, WT] = (0, hU.De)();
          JT = new TT(mT, WT)
        } catch (zT) {
          return lj({
            site: lm.e,
            error: zT,
            header: null
          }, xT), null
        }
        qg = xT, ig = vT.bindings;
        const dT = new lm.j(JT, ZU.u, {
          onCrash: TT => {
            var UT;
            null === (UT = gH) || void 0 === UT || UT.crashed(TT),
              function(TT, UT, mT, WT) {
                if ("webgpu" !== UT || (0, tz.d)()) return !1;
                const zT = function(TT) {
                  if (TT.site === lm.h && (0, km.p)(TT.error)) return "frames_refused";
                  return TT.site === CM && (0, km.s)(TT.error) ? "start_failed" : null
                }(TT);
                if (null === zT) return !1;
                if (null !== (0, km.$)(zT, WT, (0, jm.c)(TT.error))) return (0, ym.countRenderLost)(zT, TT.error, En), !1;
                return IU.y.reloaded(null, !1), (0, ym.reportRenderReload)("webgpu", "start_failed" === zT ? 0 : 1, mT, {
                  cause: zT,
                  error: TT.error,
                  context: En,
                  session: Zj(null)
                }), Ek(), !0
              }(TT, LT, xT, pT) || lj(TT, xT)
          },
          onNetEvent: Nk,
          onReconnectGrace: bk,
          onJoinPreloadEnded: ik,
          onCoreErrors: (TT, UT) => {
            var mT, WT;
            TT.some((TT => {
              let {
                code: UT
              } = TT;
              return UT === hU.S.RenderDeviceLost
            })) && ((0, tz.x)(), fH.deviceLost(), "webgpu" === LT && ((0, jm.e)(hn), IU.y.lost())), null === (mT = gH) || void 0 === mT || mT.coreErrors(TT);
            const zT = () => {
              (0, ym.reportCoreErrors)(TT, UT, xT, ((TT, UT) => {
                var mT;
                return TT === hU.S.EnvUnknownSky ? (0, ym.unknownSkyWords)(eU.d.get("skyBox")) : TT === hU.S.RenderDeviceLost ? (0, ym.deviceLossWords)(UT, En.boundAtMs) : null === (mT = hn) || void 0 === mT ? void 0 : mT.jWT(TT, UT)
              }))
            };
            TT.some((TT => {
              let {
                code: UT
              } = TT;
              return UT === hU.S.EnvUnknownSky
            })) ? queueMicrotask(zT) : zT(), null === (WT = Eg) || void 0 === WT || WT.coreErrors(TT)
          },
          onRenderReload: (TT, UT, mT) => {
            ! function(TT, UT, mT, WT, zT, MT) {
              var gT;
              if ((0, tz.d)()) return;
              const nT = UT === hU._c.WEBGPU,
                HT = WT === hU._c.PIPELINE_FAILED ? "pipeline_failed" : "lost",
                kT = WT === hU._c.RESTORE_LOST,
                jT = nT && (0, IU.j)(En.adapter, mT, "lost" === HT, kT),
                lT = (0, jm.j)(hn);
              null === (gT = gH) || void 0 === gT || gT.reload(nT, mT, HT, null === lT || void 0 === lT ? void 0 : lT.message);
              const LT = nT ? (0, km.$)(HT, zT, lT) : null;
              if (null !== LT) {
                (0, ym.countRenderLost)(HT, lT, En);
                const UT = void 0 === lT ? "" : ` (${lT.message})`;
                return void TT.crash(ym.RENDER_RELOAD_SITE, new Error(`${(0,ym.renderReloadMessage)("webgpu",HT,mT)} and ${LT}${UT}`))
              }
              const pT = nT ? "webgpu" : "webgl1" === MT ? "webgl1" : "webgl";
              "lost" === HT && (0, tz.x)();
              nT || (0, bU.u)();
              (0, ym.reportRenderReload)(pT, mT, qg, {
                from: "game",
                cause: HT,
                restoreLost: kT,
                adapterRemembered: jT,
                error: lT,
                context: En,
                session: Zj(TT.sunShadowsHeld())
              }), Ek()
            }(dT, TT, UT, mT, pT, LT)
          },
          onEnvEvent: TT => {
            var UT;
            TT.kind === hU.hb.SkyImages ? null === (UT = rg) || void 0 === UT || UT.onEvent(TT.payload) : TT.kind === hU.hb.EnvLighting && (Kg = 1 === TT.payload[0])
          },
          onImages: TT => {
            var UT;
            null === (UT = Sg) || void 0 === UT || UT.onEvent(TT)
          },
          onModelRequest: TT => {
            var UT;
            null === (UT = Vg) || void 0 === UT || UT.request(TT)
          },
          onModelTaken: (TT, UT) => {
            var mT;
            null === (mT = Vg) || void 0 === mT || mT.taken(TT, UT)
          },
          onTerrainTexturesWanted: () => {
            queueMicrotask((() => {
              ! function(TT, UT) {
                const mT = vg;
                if (null === mT || TT.isStopped) return;
                mT.restore((TT => {
                  (0, ym.reportTerrainTextureFailure)(TT, UT)
                })).then((UT => {
                  !1 !== UT || TT.isStopped ? !0 === UT && console.info(`${VM} terrain textures handed over again after the renderer lost them`) : console.warn(`${VM} the terrain textures couldn't be handed over again: the terrain draws blank`)
                }))
              }(dT, xT)
            }))
          },
          onKeepAlive: TT => {
            const UT = null === vn ? void 0 : fn.get(vn);
            void 0 !== UT && oW(UT, TT)
          },
          onSends: () => {
            ! function(TT) {
              const UT = performance.now();
              if (TT.forEachNetOut(Hj), zj(TT), (0, lm.H)(TT, {
                  worldgen: wg,
                  mesh: ag
                }), null !== MH) try {
                MH.sendsWent(TT, UT, performance.now())
              } catch (zT) {
                Gk(zT)
              }
            }(dT)
          }
        });
        if (Bg = dT, null === (gT = FU.c.wasmNetReady) || void 0 === gT || gT.call(FU.c, (() => dT.isStopped ? 0 : dT.netKeptFrames)), null !== TT) {
          dT.setAntiCheatProbes(aM(ZU.u, TT.checks)), TT.watchHeld(XM.CoreFrame, (() => dT.frame)), TT.watchHeld(XM.GlueFrame, (() => JT.frame));
          const UT = function(TT, UT) {
            const mT = new yM(UT);
            let WT = !1;
            mT.Cl(TT.Cl());
            const zT = (0, hW.db)((() => {
              mT.Cl(TT.Cl())
            }), IM);
            let MT = 6 * (0, hW.T)() | 0;
            const gT = () => {
              ++MT < 6 || (MT = 0, TT.checks.stackCheck() && (WT = !0))
            };
            (0, jM.f)(gT);
            const nT = () => {
              const UT = TT.checkPadCall();
              0 !== UT && mT.setFlags(UT)
            };
            return (0, kM.e)(nT), {
              onSend: gT,
              beforeFrame: () => {
                WT && mT.originStackHit() && (WT = !1)
              },
              onEvent: UT => {
                const WT = TT.checkEvent(UT);
                mT.value(hU.i.ProbeUsedProp, TT.usedProp()), 0 !== WT && mT.setFlags(WT)
              },
              stop: () => {
                (0, hW.gb)(zT), (0, jM.e)(gT), (0, kM.d)(nT)
              }
            }
          }(TT, ((TT, UT, mT) => {
            let WT = !1;
            return qj(dT, (() => {
              WT = dT.rings.input.writeRecord(hU.Gb.AntiCheat, TT, UT, mT, 0)
            })), WT
          }));
          dT.isStopped ? UT.stop() : Fg = UT
        }
        gg = (TT, UT, mT) => dT.rings.cmd.writeCmd(TT, UT, mT), ng = TT => dT.rings.cmd.growForCmd(TT), kn = !1, yk(), (0, yT.x)(dT, {
          core: JT,
          memory: ZU.u,
          staleOr: (TT, UT, mT, WT) => xj({
            site: TT,
            error: UT
          }, mT, WT),
          reportReplayFault: (TT, UT) => {
            (0, ym.reportReplayFault)(TT, UT, qg)
          },
          audio: fg,
          options: eU.d,
          onNetEvent: Nk,
          sessionInfo: TT => {
            var UT;
            return (null === (UT = Yn) || void 0 === UT ? void 0 : UT.conn) === TT ? Yn.info : null
          },
          onEventOverflow: NH,
          replayShaderPack: TT => {
            var UT;
            null === (UT = Eg) || void 0 === UT || UT.replay(TT)
          },
          hasPackModel: TT => {
            var UT, mT;
            return null !== (null !== (UT = null === (mT = Xk()) || void 0 === mT ? void 0 : mT.modelUrl(TT)) && void 0 !== UT ? UT : null)
          },
          beforeWrite: () => (!Mn && dT.rings.net.cursor > 0 && Ak(dT, !1, "all"), !dT.isStopped),
          beforeOp: () => (!Mn && dT.netWrittenSinceFrame > 0 && Ak(dT, !1, "budget"), !dT.isStopped)
        }), (0, aT.L)({
          lockPointer: () => {
            if (!zW(cT)) return !1;
            try {
              Promise.resolve(cT.requestPointerLock()).catch((() => {}))
            } catch {
              return !1
            }
            return !0
          },
          unlockPointer: () => {
            (0, Gm.d)()
          },
          leaveGame: () => {
            GH()
          },
          canvas: () => cT
        }), Pg = (0, aT.C)((() => {
          var TT;
          const UT = (0, yT.i)();
          null === (TT = (0, yT.v)()) || void 0 === TT || TT.followCursorAim(!0 === (null === UT || void 0 === UT ? void 0 : UT.isSessionLive) ? UT : null)
        })), Bn && dT.setUiPrefs(Bn);
        Zn && dT.setEnvPrefs(Zn);
        cn && dT.setLookPrefs(cn);
        const wT = Iz ? Qz(Iz.preventMovement) : null;
        wT && Wk(wT);
        const tT = (0, dm.k)(),
          XT = (0, dm.e)(dT, tT);
        Qg = tT.basis, (0, Cm.k)(null === XT ? null : (0, xm.p)(XT)), Ig = XT;
        const IT = (0, vU.c)();
        let QT = 1 / 0,
          sT = !0,
          FT = tT.shedFootprintBytes;
        const PT = new Hz.e(IT, (() => JT.uc()), (TT => {
          dT.crash(lm.m, TT)
        }));
        yg = PT, Xg = PT, null !== XT && PT.setCeiling(Math.min((0, Hz.t)(XT), QT, (0, dm.n)()));
        if (sT) {
          PT.setShed((TT => {
            const UT = dT.shedMemory("joinReserve" !== TT);
            return null !== UT && (null === Ig || UT < Ig) && (Ig = UT, (0, Cm.k)((0, xm.p)(UT))), UT
          }), ((TT, UT, mT) => {
            1 === UT ? (0, ym.reportMemoryShed)(TT, mT, qg) : console.warn(`${VM} wasm memory: shed again (${TT}): shed ${UT}`, mT.wasmMemoryShed)
          }), (() => dT.addDistanceInUse()));
          const TT = (0, km.O)(YT);
          PT.setFootprint(new Ez(FT, {
            storedChunks: () => JT.lWT(),
            gpuBytes: () => {
              var UT;
              return null !== (UT = null === TT || void 0 === TT ? void 0 : TT.LWT()) && void 0 !== UT ? UT : 0
            },
            jsHeapBytes: Nz
          }))
        }
        window.addEventListener("pagehide", (() => {
          yg === PT && (PT.refreshStats(), fj(PT))
        })), window.addEventListener("pagehide", hk), window.addEventListener("pagehide", Dk), !1;
        const [VT, uT] = (0, Qm.e)();
        HH = (0, Fm.c)((TT => dT.setChunkAddDistance(TT.horizontal, TT.vertical)), {
          horizontal: VT,
          vertical: uT
        }), dT.setAmbientOcclusion(!0 !== rm.l.getItem("disableAmbientOcclusion")), dT.setPoseLod(!0 !== rm.l.getItem(pU.K)), dT.setDebugLog(hU.X.Look, !0), dT.setDebugLog(hU.X.CameraSet, !0), (0, oz.startLookDebug)("wasm", {
          look: () => dT.takeDebugLog(hU.X.Look),
          cameraSets: () => dT.takeDebugLog(hU.X.CameraSet)
        }), (0, hz.r)("remesh") && (dT.setDebugLog(hU.X.Remesh, !0), CT = () => dT.takeDebugLog(hU.X.Remesh), mM = new UM((0, Az.r)(), CT));
        var CT;
        const rT = function(TT, UT, mT, WT) {
          const zT = new bW,
            MT = TT => rm.l.getItem(TT);
          zT.sync(MT, UT), (0, QU.T)();
          const gT = (0, HT.k)("customBindingsChanged", (() => {
            zT.sync(MT, UT)
          }));
          (0, Nm.o)(UT);
          const nT = new Set,
            kT = (0, aT.C)((() => {
              var TT;
              nT.size > 0 && JW() && !0 === (null === (TT = (0, yT.i)()) || void 0 === TT ? void 0 : TT.localPlayerAlive()) && HT.j.EZ("usedKeyboard")
            })),
            jT = LW.e.heldSizer((() => (0, PU.p)(TT))),
            lT = lW(TT, UT, {
              prevents: TT => zT.prevents(TT),
              keyPressed: TT => {
                zT.moves(TT) && (nT.add(TT), JW() && HT.j.EZ("usedKeyboard"))
              },
              keyReleased: TT => {
                nT.delete(TT)
              },
              keysReleased: () => {
                nT.clear()
              },
              resized: () => {
                eW.i.measure(TT.getBoundingClientRect()), (0, pW.g)()
              },
              sizeCanvas: jT,
              watchRenderScale: UT => {
                const mT = (0, PU.t)(TT, UT),
                  WT = LW.e.onRelease(UT);
                return () => {
                  mT(), WT()
                }
              },
              touchStarting: () => {
                eW.i.measure(TT.getBoundingClientRect())
              },
              viewShown: mT,
              touchUiShown: () => TU.b.get("isTouchScreen"),
              ctrlCombosAreGames: JW,
              inspect: (TT, UT, mT) => {
                zT.checks(UT, mT) && WT(TT)
              },
              canLock: () => zW(TT)
            }),
            LT = (0, fm.b)(UT);
          return () => {
            gT(), kT(), (0, Nm.o)(null), LT(), lT()
          }
        }(cT, ((TT, UT, mT, WT, zT) => {
          qj(dT, (() => {
            dT.rings.input.writeRecord(TT, UT, mT, WT, zT)
          })), !gn && (0, aW.e)(TT, zT) && (0, aW.c)((() => {
            Bg !== dT || YH || dT.isStopped || !gj() || Ak(dT, !1, "budget", !1)
          }))
        }), (() => iH), (TT => {
          var UT;
          null === (UT = Fg) || void 0 === UT || UT.onEvent(TT)
        }));
        if (dT.isStopped) return rT(), null;
        dg = rT;
        const KT = () => !dT.isStopped && !OH;
        if (dT.isStopped) return null;
        (0, ZU.U)((() => {
          "call" === (0, ZU.s)() && dT.crash(lm.s, (0, ZU.o)())
        }));
        const ST = (0, lm.K)(dT.rings.worker, (() => {
          Ak(dT, !1, document.hidden ? "all" : "budget")
        }));
        wg = function(TT, UT) {
          return ij().then((TT => {
            let {
              prefetchWorldgenWorker: UT
            } = TT;
            UT()
          }), (() => {})), new gM({
            module: (0, ZU.x)(),
            decodeSettings: TT => {
              const UT = (0, yT.v)();
              if (null === UT) throw new Error("no game code to decode the world-gen seed with");
              return UT.decodeMapSettings(TT)
            },
            loadWorker: bj,
            onMapWithoutWorldgen: () => {
              Oj((TT => {
                let {
                  stopWorldgenWorkerPrefetch: UT
                } = TT;
                UT()
              }))
            },
            onLoadFailed: TT => {
              (0, ym.reportWorldgenLoadFailure)(TT, qg)
            },
            onWorkerLost: TT => {
              (0, ym.reportWorkerLost)(lm.B, TT, qg)
            },
            onStartTimeout: TT => {
              (0, ym.reportWorkerStartTimeout)(lm.B, TT, qg)
            },
            onGaveUp: TT => {
              (0, ym.reportWorldgenGaveUp)(TT, qg)
            },
            onMemoryStats: TT => {
              var UT;
              null === (UT = yg) || void 0 === UT || UT.noteWorldgen(TT)
            },
            onMemoryGone: () => {
              var TT;
              null === (TT = yg) || void 0 === TT || TT.worldgenGone()
            },
            write: (mT, WT, zT, MT, gT) => {
              qj(TT, (() => {
                TT.rings.worker.writeWorkerRecord(mT, WT, zT, 0, MT, gT) || TT.crash(lm.B, `a world-gen record of kind ${WT} did not fit the worker-in ring`)
              })), UT()
            }
          })
        }(dT, ST), ag = function(TT, UT) {
          return new gz({
            module: (0, ZU.x)(),
            loadWorkers: async () => {
              const [{
                createMeshWorker: TT
              }, UT] = await Promise.all([mT.e(41).then((() => mT(51165))), Promise.resolve().then((() => mT(102))).then((TT => {
                let {
                  isMobile: UT
                } = TT;
                return UT()
              }), (() => !1))]);
              return {
                create: TT,
                count: (0, tU.b)(navigator.hardwareConcurrency, UT),
                maxKeptLightStates: UT ? 1 : void 0
              }
            },
            write: (mT, WT, zT, MT, gT, nT) => {
              (0, pW.e)(), qj(TT, (() => {
                TT.rings.worker.writeWorkerRecord(mT, WT, zT, MT, gT, nT) || TT.crash(lm.n, `a meshing record of kind ${WT} did not fit the worker-in ring`)
              })), UT()
            },
            onWorkerLost: TT => {
              (0, ym.reportWorkerLost)(lm.n, TT, qg)
            },
            onLightFault: (TT, UT) => {
              (0, ym.reportLightFault)(TT, UT, qg)
            },
            onStartTimeout: TT => {
              (0, ym.reportWorkerStartTimeout)(lm.n, TT, qg)
            },
            onMemoryStats: (TT, UT) => {
              var mT;
              null === (mT = yg) || void 0 === mT || mT.noteMeshWorker(TT, UT)
            },
            onMemoryGone: TT => {
              var UT;
              null === (UT = yg) || void 0 === UT || UT.meshWorkerGone(TT)
            },
            fail: (UT, mT) => {
              const WT = () => {
                TT.crash(lm.n, void 0 === mT ? UT : new Error(UT, {
                  cause: mT
                }))
              };
              void 0 !== mT ? xj({
                site: lm.n,
                error: mT
              }, WT) : WT()
            }
          })
        }(dT, ST), hH();
        const GT = (0, bz.s)(dU.clientSideServerUrls.staticUrl, {
            onTableFailed: TT => {
              xj({
                site: ym.MODEL_FEED_SITE,
                error: TT
              }, (() => {}), {
                stillWanted: KT
              })
            },
            packUrl: TT => {
              var UT, mT;
              return null !== (UT = null === (mT = Xk()) || void 0 === mT ? void 0 : mT.modelUrl(TT)) && void 0 !== UT ? UT : null
            }
          }),
          NT = function(TT, UT, mT) {
            const WT = mT => {
              var WT, zT;
              return null !== (WT = null === (zT = UT()) || void 0 === zT ? void 0 : zT.drawnUrl(mT)) && void 0 !== WT ? WT : TT.url(mT)
            };
            return (0, qz.l)((0, jz.r)(WT), mT)
          }(GT, (() => Vg), Xk),
          ET = new jz.h(NT, (TT => {
            console.warn(`${VM} image ${TT.key.kind}:${TT.key.index}:${TT.key.word} failed`, TT.error)
          }));
        Sg = ET, Gg = new cz(dT, NT, ((TT, UT) => {
          void 0 === UT ? console.warn(`${VM} ${TT}`) : Qk(TT, UT)
        }));
        const hT = new fz.g(GT, function(TT, UT) {
          let WT = !1,
            zT = null,
            MT = null;
          const gT = {
              onUnavailable: (mT, WT) => {
                MT ??= xj({
                  site: ym.MODEL_POOL_SITE,
                  error: mT,
                  urls: WT
                }, (() => {
                  (0, ym.reportModelPoolFailure)(mT, TT)
                }), {
                  stillWanted: UT
                })
              },
              onDecoderFailed: (mT, WT) => {
                const zT = () => {
                  (0, ym.reportDracoDecoderFailure)(mT, TT)
                };
                void 0 !== WT ? xj({
                  site: ym.MODEL_POOL_SITE,
                  error: mT,
                  urls: WT
                }, zT, {
                  stillWanted: UT
                }) : zT()
              },
              onWorkerLost: UT => {
                (0, ym.reportWorkerLost)(ym.MODEL_POOL_SITE, UT, TT)
              },
              onModuleRetry: (UT, mT) => {
                (0, ym.reportModelsModuleRetry)(UT, mT, TT)
              }
            },
            nT = mT.e(43).then((() => mT(51172))).then((TT => {
              let {
                pageModelPool: UT
              } = TT;
              if (WT) return null;
              const mT = UT(gT);
              return zT = mT.unlisten, ug = mT.pool, hH(), mT.pool
            }), (TT => (WT || gT.onUnavailable(TT, void 0), null)));
          return Cg = () => {
            var TT;
            WT = !0, null === (TT = zT) || void 0 === TT || TT(), ug = null
          }, (TT, UT) => nT.then((mT => {
            var WT;
            return null !== (WT = null === mT || void 0 === mT ? void 0 : mT.build(TT, UT)) && void 0 !== WT ? WT : (0, Oz.q)(TT, "the model workers did not load")
          })).then((TT => null !== MT && (0, Oz.j)(TT) ? MT.then((() => TT)) : TT))
        }(xT, KT), (TT => {
          TT.startup ? (jj(), xj({
            site: ym.MODEL_FEED_SITE,
            error: TT.error,
            urls: "" === TT.url ? void 0 : [TT.url]
          }, (() => {
            (0, ym.reportModelFailure)(TT, xT)
          }))) : (0, ym.reportModelFailure)(TT, xT)
        }), {
          onWritten: (TT, UT) => {
            ET.glbWritten(TT, UT)
          },
          onTaken: (TT, UT) => {
            ET.glbTaken(TT, UT)
          },
          onPackFileFailed: (TT, UT) => {
            console.warn(`${VM} the texture pack's model file ${TT} failed: the shipped one loads`, UT)
          }
        });
        Vg = hT;
        const DT = new pz.f(dT);
        vg = DT, DT.swap((TT => {
          const UT = () => {
            (0, ym.reportTerrainTextureFailure)(TT, xT)
          };
          if (kH) return void UT();
          const mT = () => !kH,
            WT = null === TT.url ? void 0 : [TT.url];
          xj({
            site: lm.y,
            error: TT.error,
            urls: WT
          }, UT, {
            stillWanted: mT
          })
        })).then((TT => {
          null !== TT && (TT || dT.isStopped || console.warn(`${VM} the core refused the terrain textures: terrain draws untextured`), Ag(dT))
        }));
        const oT = new NU(dT, ((TT, UT) => {
          console.warn(`${VM} ${TT}`, ...void 0 === UT ? [] : [UT])
        }));
        oT.feed(), null !== LT && function(TT, UT, WT, zT, MT, gT) {
          let nT = null,
            kT = null,
            jT = !1;
          const lT = {
            textures: null,
            stop: () => {
              var TT, UT;
              jT = !0, null === (TT = kT) || void 0 === TT || TT(), null === (UT = nT) || void 0 === UT || UT(), iz.c.setSettled(null), null !== ig && XH.clear(ig)
            }
          };
          cg = lT, kT = sk().follow((kT => {
            null !== kT && Promise.all([mT.e(204), mT.e(46)]).then((() => mT(51134))).then((mT => {
              let {
                PackTextures: LT
              } = mT;
              if (jT || TT.isStopped) return;
              const pT = new LT({
                feed: kT,
                terrain: UT,
                backend: WT,
                stopped: () => TT.isStopped,
                landed: () => {
                  Ag(TT)
                },
                packSwapped: () => {
                  (0, qz.h)(zT), gT.feed((() => async function(TT) {
                    const UT = null === TT ? null : await TT.averageColours;
                    return null === UT ? EU() : GU(UT)
                  }(pT.assets))), (0, vz.m)(pT.files()), MT.refresh().then((TT => {
                    null !== TT && console.info(`${VM} texture pack models: ${TT.resent} of ${TT.delivered} files written again, ${TT.refetched} refetched`)
                  }))
                },
                settled: (TT, UT, mT) => {
                  var WT;
                  (iz.c.setSettled({
                    state: TT,
                    files: UT
                  }), function(TT, UT, mT) {
                    const WT = null === TT.gameSource && (0, Xm.h)(TT.pack);
                    if (null === UT) return;
                    const zT = (0, am.g)(UT.error),
                      MT = WT ? "settings" : UT.source;
                    HT.j.EZ(am.c, {
                      failure: zT,
                      source: MT,
                      pack: Im(TT)
                    }), (0, ym.reportTexturePackKeptOut)(MT, zT, UT.error, mT)
                  }(TT, mT, qg), null === mT) && function(TT) {
                    const UT = ig;
                    null !== UT && XH.apply(UT, TT).then((UT => {
                      UT && TT && console.info(`${VM} the texture pack's animations are in (${Object.keys(TT).length} files)`)
                    }))
                  }(null === (WT = TT.pack) || void 0 === WT ? void 0 : WT.animations)
                },
                settling: () => {
                  iz.c.setSettled(null)
                },
                warn: Qk,
                maxTextureSize: () => Promise.resolve((0, km.hb)(document.createElement("canvas")))
              });
              lT.textures = pT, nT = pT.start()
            }), (TT => {
              console.warn(`${VM} the texture pack's terrain didn't load: the built atlas stays`, TT)
            }))
          }))
        }(dT, DT, LT, ET, hT, oT);
        const UU = () => {
            dT.setTextureLayers("")
          },
          mU = TT => {
            (xU ??= mT.e(54).then((() => mT(51179))).then((TT => {
              let {
                TEXTURE_NAMES: UT
              } = TT;
              return UT
            }), (TT => {
              throw xU = null, TT
            })), xU).then((TT => {
              dT.setTextureLayers(TT) || dT.isStopped || (console.warn(`${VM} the core refused the texture names: textured Boxes draw textureNotFound`), UU())
            }), (UT => {
              if (dT.isStopped) return;
              const [mT, ...WT] = TT;
              void 0 === mT ? xj({
                site: ym.TEXTURE_NAMES_SITE,
                error: UT
              }, (() => {
                console.warn(`${VM} the texture names didn't load, so textured Boxes draw textureNotFound`, UT), UU()
              }), {
                stillWanted: KT
              }) : setTimeout((() => {
                mU(WT)
              }), mT)
            }))
          };
        if (mU(zg), null !== LT && !await async function(TT, UT, mT, WT, MT, gT) {
            var nT;
            const HT = (0, km.O)(mT);
            if (null === HT) return TT.crash(CM, new Error(`this ${WT} build has no openRenderer`)), !1;
            let kT;
            hn = HT;
            try {
              var jT, lT, LT, pT;
              const zT = null !== (jT = null === (lT = Lg) || void 0 === lT ? void 0 : lT.pagePreviews()) && void 0 !== jT ? jT : null,
                nT = null !== (LT = null === (pT = Lg) || void 0 === pT ? void 0 : pT.previewModule(mT)) && void 0 !== LT ? LT : null;
              if (null === zT || null === nT) {
                null === zT || void 0 === zT || zT.endSession(!1), kT = (0, PU.f)().sampleCount, await (0, km.g)(UT, HT, gT, ak, kT, await MT);
                const TT = (0, km.k)(mT);
                null === TT && console.warn(`${VM} this ${WT} build has no image registry: sky and model images won't show`), (0, Lz.h)(TT)
              } else {
                (0, tz.d)() && await (0, RT.o)();
                const mT = (0, tz.J)();
                if (null !== mT) {
                  const UT = (0, jm.j)(HT);
                  return TT.crash(ym.RENDER_RELOAD_SITE, new Error(`${mT}${void 0===UT?"":` (${UT.message})`}`)), !1
                }
                kT = await zT.bindSession(nT, UT, (async TT => (0, km.u)(HT, CM, gT, TT, ak, await MT)))
              }
            } catch (zT) {
              return TT.crash(CM, zT), !1
            }(function(TT, UT) {
              const mT = TT,
                {
                  requestCapture: WT,
                  takeCapture: zT
                } = mT;
              if ("function" !== typeof WT || "function" !== typeof zT) return;
              const MT = {
                request() {
                  WT.call(mT, UT)
                },
                take() {
                  var TT;
                  return null !== (TT = zT.call(mT)) && void 0 !== TT ? TT : null
                }
              };
              window[Pz] = MT
            })(UT, kT), WH = kT, Nn = !0;
            const BT = performance.now();
            return En.boundAtMs = null !== (nT = (0, tz.L)()) && void 0 !== nT ? nT : BT, En.indirectHangs = (0, tz.A)(), En.restoresSkipped = (0, tz.O)(), console.info(`${VM} ${WT} renderer bound at ${Math.round(BT)} ms`), !TT.isStopped
          }(dT, JT, YT, LT, BT, cT)) return null;
        if (null !== LT) {
          var WU, zU, MU;
          (0, fU.I)(LT);
          const TT = () => !dT.isStopped && Mj();
          mT.e(196).then((() => mT(34152))).then((UT => {
            let {
              devTools: mT
            } = UT;
            dT.isStopped || mT.setHost(function(TT) {
              return {
                tools: wz,
                async downloadScene(UT, mT) {
                  let {
                    width: WT,
                    height: zT,
                    colouring: MT
                  } = mT;
                  "screenshot" === UT && null === MT ? await (0, Jz.g)(TT, WT, zT) : console.warn("The Rust client's developer tools take uncoloured screenshots only")
                },
                setAmbientLightIntensity: () => (console.warn("The Rust client's renderer has no ambient light setting"), Promise.resolve()),
                capturePhoto: (UT, mT, WT) => (0, Jz.c)(TT, UT, mT, WT)
              }
            }(function(TT, UT) {
              return {
                canvas: TT,
                maxTextureSize: xz,
                drawing: UT,
                resize: (TT, UT, mT) => {
                  (0, Nm.v)(hU.Gb.Resize, 0, TT / mT, UT / mT, (0, Nm.k)(mT))
                },
                restoreSize: () => {
                  const UT = (0, PU.p)(TT);
                  null !== UT && (0, Nm.v)(hU.Gb.Resize, 0, UT.cssWidth, UT.cssHeight, (0, Nm.k)(UT.renderScale))
                },
                onFrameDrawn: TT => (dz.add(TT), () => {
                  dz.delete(TT)
                })
              }
            }(cT, TT)))
          }), (TT => {
            console.warn(`${VM} the developer tools didn't load: no captures this session`, TT)
          }));
          const UT = "webgpu" === LT && null !== (WU = null === lT || void 0 === lT || null === (zU = lT.adapter) || void 0 === zU ? void 0 : zU.vendor) && void 0 !== WU ? WU : null;
          zH = {
            backend: LT,
            canvas: cT,
            fallbackReason: null !== (MU = null === lT || void 0 === lT ? void 0 : lT.reason) && void 0 !== MU ? MU : null,
            adapterVendor: UT
          }, rk();
          try {
            (0, pW.p)(LT, cT, UT)
          } catch (zT) {
            (0, pW.q)(), console.error(`${VM} the quality steps didn't start`, zT)
          }
        }
        const {
          storagePullBreaks: gU,
          splitPassBreaks: nU
        } = await BT;
        nU && console.warn(`${VM} split_pass_breaks on: Windows Adreno 7xx (N-103) or ?sceneDepth=off`);
        const HU = (0, AT.f)(lT, (0, IU.h)());
        if ((0, hz.r)("webgpuloss")) {
          var kU, jU;
          const TT = {
            backend: LT,
            reason: null !== (kU = null === lT || void 0 === lT ? void 0 : lT.reason) && void 0 !== kU ? kU : null,
            source: null !== (jU = null === lT || void 0 === lT ? void 0 : lT.source) && void 0 !== jU ? jU : null,
            storagePullBreaks: gU,
            noWebGpu: HU.messageKey
          };
          (0, Dz.c)((UT => {
            UT.noteWasmPick(TT)
          }))
        }
        const lU = "webgpu" === LT;
        if (Eg = (0, AT.h)(lU ? dT : null, lU && null !== (nT = null === (kT = Lg) || void 0 === kT ? void 0 : kT.pagePreviews().Np) && void 0 !== nT ? nT : null, HU, Qk), YH) return null;
        if (PT.reserveAtJoin((0, Hz.p)(null !== XT && void 0 !== XT ? XT : xm.h)), dT.isStopped) return null;
        const LU = TT => {
          if (mn = performance.now(), Wn = !1, null !== MH) try {
            MH.animationFrame(TT)
          } catch (zT) {
            Gk(zT)
          }
          if (function(TT, UT) {
              return UT && !YH && !gn && gj() && Mj() && TT.framePaces(performance.now())
            }(dT, iH)) {
            if (dT.writePendingInput(), (0, aT.g)(TT, Rk), Kk(!1, TT), null !== MH) try {
              MH.framePaced()
            } catch (zT) {
              Gk(zT)
            }
            requestAnimationFrame(LU)
          } else Ak(dT, iH, "budget") && ((0, sU.g)(dT.lastFrameKind) && Mj() && (0, aT.g)(TT, Rk), Kk(iH && vH, TT), fH.frame(dT.lastFrameKind, iH && Mj(), TT), (0, sU.c)(dT.lastFrameKind) && IU.y.drew(), pj(dT), PT.afterFrame(), requestAnimationFrame(LU))
        };
        requestAnimationFrame(LU);
        return function(TT) {
          if (TT.has("inputLog") && (0, OW.h)((TT => {
              let {
                action: UT,
                down: mT,
                press: WT
              } = TT;
              console.info(`${YW} input ${UT} ${mT?"down":"up"} press ${WT} at ${performance.now().toFixed(1)}`)
            })), TT.has("inputDump")) {
            const TT = [];
            xW = TT, Object.assign(window, {
              bloxdInputDump: () => TT.join("\n")
            })
          }
        }(new URLSearchParams(window.location.search)), sg = function(TT) {
          let UT = null;
          const mT = () => {
              null !== UT && (clearInterval(UT), UT = null)
            },
            WT = () => {
              document.hidden ? UT ??= setInterval((() => {
                Yj(TT) || mT()
              }), Wg) : mT()
            };
          return document.addEventListener("visibilitychange", WT), WT(), () => {
            mT(), document.removeEventListener("visibilitychange", WT)
          }
        }(dT), dT
      }(UT).then((TT => {
        var UT;
        (WT(qg), eg(null !== TT), null !== TT && (qT = performance.now()), bg(TT), null === TT) ? null === (UT = Lg) || void 0 === UT || UT.pagePreviews().endSession(null === (0, ZU.s)()): og("booted")
      }), (TT => {
        WT(qg), eg(!1), bg(null), lj({
          site: rM,
          error: TT,
          header: null
        }, qg)
      }))
    }

    function yH() {
      const TT = ig;
      null !== TT && JH().then((UT => {
        let {
          pageBuiltInAnimationPack: mT
        } = UT;
        mT().provide(TT)
      }), (TT => {
        console.warn(`${VM} the built-in animation pack's chunk did not load: lifeforms stay in their rest pose`, TT)
      }))
    }
    const XH = new class {
      constructor(TT) {
        this.deps = TT, this.latest = 0, this.fn = null
      }
      apply(TT, UT) {
        return this.load(TT, UT, 0)
      }
      async load(TT, UT, mT) {
        var WT;
        const zT = ++this.latest,
          MT = this.deps.compiler;
        if (void 0 === UT || null === UT || "object" !== typeof UT || 0 === Object.keys(UT).length || null === MT) return this.drop(TT), !1;
        if ((null === (WT = this.fn) || void 0 === WT ? void 0 : WT.module) === TT && (0, zm.ye)(this.fn.files, UT)) return !1;
        try {
          const [mT, WT] = await Promise.all([MT(), this.deps.builtIns()]);
          if (zT !== this.latest) return !1;
          const gT = await mT(UT, Hm, {
            builtIns: WT
          });
          if (zT !== this.latest) return !1;
          const nT = this.call(TT, gT);
          if (void 0 === nT) throw new nm("the compiled animations didn't read against the built-in pack");
          return this.fn = {
              module: TT,
              files: UT
            },
            function(TT) {
              for (let UT = 0; UT + 2 < TT.length; UT += 3) {
                ("error" === TT[UT] ? console.error : console.warn)(`Animation for the texture pack: ${TT[UT+1]}: ${TT[UT+2]}`)
              }
            }(nT), !0
        } catch (nT) {
          var gT;
          if (zT !== this.latest) return !1;
          this.drop(TT), 0 === mT && this.deps.warn("the texture pack's animations didn't load: lifeforms play the built-in ones", nT);
          const WT = (null !== (gT = this.deps.retryAfterMs) && void 0 !== gT ? gT : gm)[mT];
          return void 0 === WT || nT instanceof nm || (0, Mm.g)(TT) || setTimeout((() => {
            zT === this.latest && this.load(TT, UT, mT + 1)
          }), WT), !1
        }
      }
      call(TT, UT) {
        try {
          return TT.HWT(UT)
        } catch (mT) {
          throw (0, Mm.i)(TT, mT), mT
        }
      }
      clear(TT) {
        this.latest++, this.drop(TT)
      }
      drop(TT) {
        const UT = this.fn;
        if (this.fn = null, (null === UT || void 0 === UT ? void 0 : UT.module) === TT && !(0, Mm.g)(TT)) try {
          this.call(TT, null)
        } catch {}
      }
    }({
      compiler: Tm.b,
      builtIns: async () => {
        const {
          pageBuiltInAnimationPack: TT
        } = await JH();
        return TT().whenSet()
      },
      warn: Qk
    });
    async function IH(TT, UT) {
      let WT = !1;
      await QH({
        matchmake: async () => {
          const {
            guestJoinTarget: zT,
            guestJoinWithPack: MT
          } = await mT.e(277).then((() => mT(51121)));
          return WT ? zT(TT, UT, Pk()) : (WT = !0, MT(TT, UT, (UT => Vk(TT, UT)), Pk))
        },
        onFailure: TT => {
          (0, ym.showJoinFailure)(TT, qg)
        },
        rejoin: AH,
        invalidateTrafficCode: RH
      })
    }
    async function QH(TT) {
      let {
        matchmake: UT,
        onFailure: mT,
        rejoin: zT,
        invalidateTrafficCode: MT,
        pageReady: gT,
        signal: nT
      } = TT;
      const HT = () => !0 === (null === nT || void 0 === nT ? void 0 : nT.aborted);
      let kT;
      const jT = iz.c.rejoinHold();
      bn = null;
      const lT = (0, Pm.O)("wasm", vj);
      let LT = !1,
        pT = performance.now();
      try {
        if (!await Yg) return {
          kind: "stopped"
        };
        if (HT()) return {
          kind: "Km"
        };
        xH().catch((() => {}));
        let TT = await UT();
        var bT, OT;
        if (pT = performance.now(), !HT()) cj(null !== (bT = null === (OT = TT.target.session) || void 0 === OT ? void 0 : OT.gameNameWithVariation) && void 0 !== bT ? bT : null);
        const mT = () => performance.now() - TT.matchedAt <= TT.freshMs,
          WT = FH(TT.target).catch((() => {}));
        mT() && !HT() && (kT = new Wz(TT.target, {
          signal: nT
        }));
        const MT = performance.now();
        if (null === await Og) return {
          kind: "stopped"
        };
        var eT, YT;
        if (function(TT) {
            var UT, mT;
            if (ZT.c.markGameEngineConstructed(), iT) return;
            iT = !0;
            const WT = Math.max(TT, null !== (UT = vT) && void 0 !== UT ? UT : TT);
            (0, cT.h)("ready", Math.max(0, (null !== (mT = fT) && void 0 !== mT ? mT : WT) - WT) / 1e3)
          }(MT), !HT())
          if (null !== fT && null !== qT ? ((0, BT.i)("wasm_loaded", fT), (0, BT.i)("wasm_core_ready", qT)) : console.warn("[bloxd-wasm-client] a join found the core before boot marked its steps"), TT.target.session && (0, zM.e)(TT.target.session.gameNameWithVariation)) null === (eT = wg) || void 0 === eT || eT.prestart();
        if (await WT, !mT() && !HT()) null === (YT = kT) || void 0 === YT || YT.rematched(), TT = await UT(), pT = performance.now();
        if (HT()) return {
          kind: "Km"
        };
        const jT = await async function(TT) {
          var UT, mT, WT;
          let {
            signal: zT,
            rejoin: MT = null,
            early: gT,
            pageReady: nT
          } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (null !== zT && void 0 !== zT && zT.aborted) throw new DOMException("the join was left", "AbortError");
          const HT = (kT = sn, jT = performance.now(), null !== kT && jT - kT < KW);
          var kT, jT;
          sn = null;
          const lT = new AbortController,
            LT = null !== (UT = null === (mT = TT.session) || void 0 === mT ? void 0 : mT.gameNameWithVariation) && void 0 !== UT ? UT : null;
          cj(LT), uH({
            controller: lT,
            game: LT
          }), Fn = null, null === (WT = un) || void 0 === WT || WT.abort(), un = null, rn = !1, Kn = null, Sn.clear();
          const pT = () => {
            (0, wU.k)(lT, (0, wU.i)(zT))
          };
          null === zT || void 0 === zT || zT.addEventListener("abort", pT, {
            once: !0
          });
          try {
            var ZT, cT, vT;
            const UT = await Og;
            if (null === UT || UT.isStopped || YH) throw new Error("no core is running to join a game with");
            if (TT.session && null !== Eg) {
              const UT = await PH(Eg.join(TT.session.gameNameWithVariation), lT.signal);
              if ((0, hz.r)("webgpuloss")) {
                const mT = TT.session.gameNameWithVariation,
                  WT = Eg.couldntRunInJoinedGame();
                (0, Dz.c)((TT => TT.noteWasmJoin(mT, UT, WT)))
              }
              if (null !== UT) throw new AT.b(UT)
            }
            const [, , , {
              joinRoom: mT
            }] = await PH(Promise.all([(0, yT.m)(UT), FH(TT), null === nT || void 0 === nT ? void 0 : nT(), xH()]), lT.signal), WT = TT.session, zT = WT ? {
              ...mk,
              attachSocket: UT => {
                const mT = kk(UT, TT.endpoint);
                var zT;
                null !== mT && (Yn = {
                  conn: mT,
                  info: WT
                }, null === (zT = Jn) || void 0 === zT || zT(WT.playerDbId));
                return mT
              }
            } : mk, kT = await mT(zT, TT, {
              signal: lT.signal,
              early: gT
            }).catch((TT => {
              throw function(TT) {
                if (!(TT instanceof rT.d)) return TT;
                if ("roomError" === TT.stage && null !== Kn) return sH(new rT.d(TT.message, TT.stage, TT.code, Kn), TT);
                const UT = "closed" === TT.stage && null !== Pn ? Sn.get(Pn.conn) : void 0;
                return void 0 === UT ? TT : sH(new rT.d(TT.message, TT.stage, UT.code, null, TT.socketOpened), TT)
              }(TT)
            }));
            if (qn !== lT) throw kT.leave(), new DOMException("the join was left", "AbortError");
            rH(kT), null === (ZT = ag) || void 0 === ZT || ZT.newGame();
            const jT = function(TT) {
              var UT, mT;
              const {
                session: WT
              } = TT, zT = void 0 === WT ? TT.joinOptions.lobbyName : WT.lobbyName;
              return {
                endpoint: TT.endpoint,
                game: null !== (UT = null === WT || void 0 === WT ? void 0 : WT.gameNameWithVariation) && void 0 !== UT ? UT : TT.roomName,
                lobby: String(null !== zT && void 0 !== zT ? zT : null),
                postCookies: null !== (mT = TT.postCookies) && void 0 !== mT ? mT : null
              }
            }(TT);
            fn.set(kT, jT), RW(jT);
            const LT = performance.now(),
              pT = {
                conn: kT.conn,
                rejoin: MT,
                game: null !== (cT = null === (vT = TT.session) || void 0 === vT ? void 0 : vT.gameNameWithVariation) && void 0 !== cT ? cT : "",
                joinedAt: LT,
                rejoinedAt: HT ? LT : null,
                overflow: null
              };
            xn = pT,
              function(TT, UT) {
                vk();
                const mT = {
                  endpoint: UT,
                  roomId: TT.seat.room.roomId,
                  heldConn: 0,
                  dropCode: 0,
                  pendingHold: null,
                  resume: new em({
                    reconnect: (TT, UT, WT) => async function(TT, UT, mT, WT) {
                      const {
                        roomId: zT,
                        roomToken: MT
                      } = qk(TT, UT), gT = Bg;
                      if (null === gT || gT.isStopped || YH) throw new Error("no core is running to resume the game on");
                      const {
                        resumeRoom: nT
                      } = await PH(xH(), mT), HT = {
                        ...mk,
                        attachSocket: UT => dn !== TT || 0 === TT.heldConn ? (UT.close(), null) : kk(UT, TT.endpoint, !0)
                      };
                      return nT(HT, TT.endpoint, zT, MT, {
                        signal: mT,
                        onAttached: WT
                      })
                    }(mT, TT, UT, WT),
                    releaseSeat: TT => {
                      !async function(TT, UT) {
                        const {
                          roomId: mT,
                          roomToken: WT
                        } = qk(TT, UT);
                        try {
                          const {
                            leaveHeldSeat: UT
                          } = await xH();
                          await UT(TT.endpoint, mT, WT)
                        } catch (zT) {
                          console.warn(`${VM} the held seat of a game left while it reconnected couldn't be released`, zT)
                        }
                      }(mT, TT)
                    },
                    isLive: () => dn === mT && null !== xn && !YH,
                    MI: TT => {
                      Qn = TT, ck()
                    },
                    onReconnected: TT => {
                      ! function(TT) {
                        const UT = vn;
                        if (null !== UT && UT !== TT) {
                          const mT = fn.get(UT);
                          void 0 !== mT && fn.set(TT, mT), cH === UT && (cH = TT), UT.detach()
                        }
                        rH(TT)
                      }(TT)
                    },
                    onGaveUp: (TT, UT) => {
                      ! function(TT, UT, mT) {
                        var WT, zT;
                        console.warn(`${VM} gave up reconnecting (${mT.reason}, ${mT.attempts} attempts)`, mT.lastError), (0, ym.reportReconnectGaveUp)(mT, qg);
                        const MT = null !== (WT = null === (zT = xn) || void 0 === zT ? void 0 : zT.rejoin) && void 0 !== WT ? WT : null;
                        fk(TT, "gaveUp"), SH();
                        const gT = {
                          code: TT.dropCode,
                          name: null,
                          reason: RM,
                          canReconnect: !UT,
                          automaticallyReconnect: !1,
                          requiresRefresh: !1
                        };
                        Uk(gT, UT ? null : MT, !1, {
                          reasonKey: Tg,
                          canPlayAgain: UT
                        })
                      }(mT, TT, UT)
                    }
                  })
                };
                dn = mT, null !== wn && wn.conn === TT.conn && mT.resume.onInitialInfo(wn)
              }(kT, TT.endpoint), performance.mark(GM), (0, BT.i)("wasm_joined", LT), setTimeout((() => {
                vn === kT && (0, BT.d)()
              }), 0), yH(), console.info(`${VM} joined ${TT.roomName} as ${kT.seat.sessionId} at ${Math.round(performance.now())} ms`);
            const fT = Fn;
            Fn = null, null !== fT && EH(pT, fT.mask, fT.frames);
            const qT = Sn.get(kT.conn);
            return Sn.clear(), void 0 !== qT && (rH(null), Tk(kT.conn, qT.code, qT.reason)), kT
          } finally {
            var fT;
            null === zT || void 0 === zT || zT.removeEventListener("abort", pT), qn === lT && CH(vn, null), (null === (fT = Pn) || void 0 === fT ? void 0 : fT.join) === lT && (Pn = null)
          }
        }(TT.target, {
          signal: nT,
          rejoin: zT(TT.target),
          early: kT,
          pageReady: gT
        });
        return LT = !0, {
          kind: "joined",
          game: jT
        }
      } catch (xT) {
        if (xT instanceof DOMException && "AbortError" === xT.name || HT()) return {
          kind: "Km"
        };
        if (YH) return {
          kind: "stopped"
        };
        if (rn && (rn = !1, await MT().catch((TT => {
            console.warn(`${VM} the cached traffic code could not be dropped`, TT)
          }))), null === await Og) return {
          kind: "stopped"
        };
        if (xT instanceof AT.b) return mT(xT, performance.now() - pT), {
          kind: "failed",
          error: xT,
          reloading: !1
        };
        if (xT instanceof rT.d && xT.code === WT.e.wasmClientNotAllowed.code && qH) return tk("this server refused the wasm client to this account", "refused"), {
          kind: "failed",
          error: xT,
          reloading: !0
        };
        const TT = xT instanceof rT.d && xT.code === WT.e.outdatedVersion.code,
          UT = () => null === vn,
          zT = await xj({
            site: ym.JOIN_SITE,
            error: xT,
            outdated: TT
          }, (() => {
            mT(xT, performance.now() - pT)
          }), {
            stillWanted: UT
          });
        return {
          kind: "failed",
          error: xT,
          reloading: zT
        }
      } finally {
        var JT;
        LT || lT.end(), iz.c.releaseHold(jT);
        const TT = null === (JT = kT) || void 0 === JT ? void 0 : JT.release();
        TT && (0, ym.reportUnusedSeat)(TT, qg)
      }
    }

    function sH(TT, UT) {
      return TT.stack = UT.stack, TT
    }

    function FH(TT) {
      return TT.session ? (0, yT.s)(fg, TT.session.gameNameWithVariation) : Promise.resolve()
    }

    function PH(TT, UT) {
      return (0, wU.m)(UT), new Promise(((mT, WT) => {
        const zT = () => {
          WT((0, wU.i)(UT))
        };
        UT.addEventListener("abort", zT, {
          once: !0
        }), TT.then((TT => {
          UT.removeEventListener("abort", zT), mT(TT)
        }), (TT => {
          UT.removeEventListener("abort", zT), WT(TT)
        }))
      }))
    }

    function VH() {
      uH(null)
    }

    function uH(TT) {
      var UT, mT, WT;
      (function() {
        const TT = dn;
        null !== TT && fk(TT, "left")
      }(), null === xg || xg.left) || (xg.left = !0, null === (WT = (0, yT.i)()) || void 0 === WT || WT.socketLeft(), (0, LT.m)({
        websocketUrl: null
      }));
      qn && (0, wU.k)(qn, new DOMException("the join was left", "AbortError")), SH(null !== TT), null === (UT = Eg) || void 0 === UT || UT.leave();
      const zT = vn;
      null !== TT && iz.c.setGame(TT.game), CH(null, null !== (mT = null === TT || void 0 === TT ? void 0 : TT.controller) && void 0 !== mT ? mT : null), null === zT || void 0 === zT || zT.leave(), KH(0), (0, YU.f)()
    }

    function CH(TT, UT) {
      vn = TT, qn = UT, null === vn && null === qn && iz.c.setGame(void 0)
    }

    function rH(TT) {
      CH(TT, qn)
    }

    function KH(TT) {
      const UT = Bg;
      return null !== gg && !YH && null !== UT && !UT.isStopped && (!!gg(rT.h, 0, (0, rT.v)(TT)) && (kn = !0, 0 === TT || gn || Ak(UT, !1, "all"), !0))
    }

    function SH() {
      var TT, UT;
      arguments.length > 0 && void 0 !== arguments[0] && arguments[0] || (0, Pm.e)();
      const mT = null !== (TT = null === (UT = xn) || void 0 === UT ? void 0 : UT.overflow) && void 0 !== TT ? TT : null;
      xn = null, null !== mT && (0, ym.reportEventOverflow)(mT, qg)
    }

    function GH() {
      null !== vn || null !== qn ? VH() : jk()
    }

    function NH(TT, UT) {
      console.warn(`${VM} the event buffer refused records in ${UT} frames (categories ${TT})`), YH || (null !== xn ? EH(xn, TT, UT) : null !== qn && function(TT, UT, mT) {
        var WT;
        const zT = function(TT, UT) {
          return null === TT ? "drop" : TT.activated ? "keep" : 0 !== (UT & DU.s.NetSession) ? "fail" : "drop"
        }((null === (WT = Pn) || void 0 === WT ? void 0 : WT.join) === TT ? Pn : null, UT);
        "keep" === zT ? Fn = {
          mask: UT,
          frames: mT
        } : "fail" === zT && (0, wU.k)(TT, new Error("the join's net session was lost to an event overflow"))
      }(qn, TT, UT))
    }

    function EH(TT, UT, mT) {
      const WT = TT.overflow ??= {
        frames: 0,
        acks: 0,
        mask: 0,
        outcome: null
      };
      WT.frames += mT, WT.acks++, WT.mask |= UT;
      const zT = function(TT, UT, mT) {
        if (0 === (TT & DU.s.NetSession)) return "none";
        const WT = null !== UT.rejoinedAt && mT - UT.rejoinedAt < SW;
        return null === UT.rejoin || WT ? "fail" : "rejoin"
      }(UT, TT, performance.now());
      "none" !== zT && queueMicrotask((() => {
        if (xn !== TT) return;
        const UT = "rejoin" === zT && performance.now() - Vn >= CT.g;
        WT.outcome = UT ? "rejoined" : "failed", Uk(function(TT, UT) {
          return {
            code: 0,
            name: "eventOverflow",
            reason: "Your game fell behind the server.",
            canReconnect: TT,
            automaticallyReconnect: UT,
            requiresRefresh: !1
          }
        }(null !== TT.rejoin, UT), TT.rejoin, UT), VH(), UT && (sn = performance.now())
      }))
    }

    function hH() {
      qH && function(TT, UT) {
        let {
          mesh: mT,
          worldgen: WT,
          modelPool: zT
        } = TT;
        "landingPage" === UT ? (null === mT || void 0 === mT || mT.stopWorkers(), null === WT || void 0 === WT || WT.stopWorker(), null === zT || void 0 === zT || zT.stopWorkers()) : ((0, TU.d)(UT) || "inGame" === UT) && (null === mT || void 0 === mT || mT.restartWorkers(), null === zT || void 0 === zT || zT.startWorkers())
      }({
        mesh: ag,
        worldgen: wg,
        modelPool: ug
      }, TU.b.get("gameState"))
    }

    function DH(TT) {
      iH = TT, bH && oH(bH, TT)
    }

    function oH(TT, UT) {
      TT.style.visibility = UT ? "visible" : "hidden"
    }

    function AH(TT) {
      var UT;
      const mT = TT.roomName,
        WT = null !== (UT = TT.joinOptions.lobbyName) && void 0 !== UT ? UT : null;
      return () => {
        IH(mT, WT)
      }
    }

    function RH() {
      return mT.e(277).then((() => mT(51121))).then((TT => {
        let {
          invalidateGuestTrafficCode: UT
        } = TT;
        return UT()
      })).catch((TT => {
        console.warn(`${VM} the cached traffic code could not be dropped`, TT)
      }))
    }

    function Tk(TT, UT, mT) {
      var zT, MT;
      let gT = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (YH) return;
      if ((null === (zT = xn) || void 0 === zT ? void 0 : zT.conn) !== TT) return void(null !== qn && Sn.set(TT, {
        code: UT,
        reason: mT
      }));
      const {
        rejoin: nT,
        game: HT,
        joinedAt: kT
      } = xn;
      SH(), vk();
      const jT = (0, CT.o)(UT, (0, NW.h)(TT));
      if (console.info(`${VM} the game's connection closed with code ${UT} (${null!==(MT=jT.name)&&void 0!==MT?MT:"unrecognised"})`), UT === WT.e.gameOrPluginKick.code || gT || (0, ym.reportDisconnect)(jT, qg, {
          closeReason: mT,
          sinceJoinedMs: performance.now() - kT,
          game: HT
        }), jT.requiresRefresh) {
        const TT = "outdatedVersion" === jT.name,
          mT = new Error(`the game's connection closed with code ${UT}`),
          WT = () => null === xn && null === qn;
        return void xj({
          site: ym.JOIN_SITE,
          error: mT,
          outdated: TT
        }, (() => {
          WT() && Uk(jT, null, !1)
        }), {
          stillWanted: WT
        })
      }
      const lT = jT.canReconnect ? nT : null,
        LT = null !== lT && jT.automaticallyReconnect && performance.now() - Vn >= CT.g;
      Uk(jT, lT, LT)
    }

    function Uk(TT, UT, mT) {
      var WT;
      let zT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
        reasonKey: null,
        canPlayAgain: !1
      };
      if (OH) return;
      iz.c.unwantedLeave(mT && null !== UT && 0 === Cn.size), null === (WT = un) || void 0 === WT || WT.abort();
      const MT = new AbortController;
      un = MT;
      const gT = null === UT ? null : () => {
        MT.signal.aborted || (MT.abort(), UT())
      };
      if (mT && null !== gT) {
        Vn = performance.now();
        const TT = setTimeout(gT, CT.d);
        MT.signal.addEventListener("abort", (() => {
          clearTimeout(TT)
        }))
      }
      const nT = {
        code: TT.code,
        name: TT.name,
        reason: TT.reason,
        reasonKey: zT.reasonKey,
        reconnect: gT,
        reconnecting: mT,
        requiresRefresh: TT.requiresRefresh,
        canPlayAgain: zT.canPlayAgain
      };
      if (Cn.size > 0)
        for (const kT of [...Cn]) try {
          kT(nT)
        } catch (HT) {
          console.error(`${VM} an unwanted-leave listener threw`, HT)
        } else sW((0, XW.e)(TT, null !== gT, mT), MT.signal).then((UT => {
          UT && (null !== gT ? gT() : TT.requiresRefresh && (0, RT.k)())
        }))
    }
    const mk = {
      attachSocket: TT => kk(TT),
      onConnection: TT => (Gn.add(TT), () => {
        Gn.delete(TT)
      }),
      sendRaw: (TT, UT) => {
        const mT = xg;
        return null !== mT && mT.conn === TT && kj(mT, UT)
      },
      leaveRoom: KH,
      closeSocket: TT => {
        var UT;
        (null === (UT = xg) || void 0 === UT ? void 0 : UT.conn) === TT && jk()
      },
      flushNet: lk
    };

    function Wk(TT) {
      var UT;
      let {
        aux: mT,
        payload: WT
      } = TT;
      null === (UT = Bg) || void 0 === UT || UT.queueOptions(mT, WT)
    }

    function zk(TT, UT) {
      Wk(function(TT, UT) {
        return Iz = TT ? {
          preventMovement: UT
        } : null, TT ? Qz(UT) : {
          aux: hU.gc.AdEnd,
          payload: Xz
        }
      }(TT, UT))
    }

    function Mk(TT) {
      var UT;
      Bn = TT, null === (UT = Bg) || void 0 === UT || UT.setUiPrefs(TT)
    }

    function gk(TT, UT) {
      fg.setMaster(TT, UT)
    }

    function nk(TT) {
      var UT;
      Zn = TT, null === (UT = Bg) || void 0 === UT || UT.setEnvPrefs(TT)
    }

    function Hk(TT) {
      var UT;
      cn = TT, null === (UT = Bg) || void 0 === UT || UT.setLookPrefs(TT)
    }

    function kk(TT) {
      var UT;
      let mT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new URL(TT.url).origin,
        WT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      if (TT.readyState === WebSocket.CLOSING || TT.readyState === WebSocket.CLOSED) return console.warn(`${VM} a closing or closed socket can't be attached`), null;
      const zT = Bg;
      if (!zT || zT.isStopped) return console.warn(`${VM} no core is running to attach a socket to`), TT.close(), null;
      if (null === (0, yT.i)()) return console.warn(`${VM} the game has not started to attach a socket to`), TT.close(), null;
      if (Rg > hU.C) return console.warn(`${VM} this core has attached all the sockets it can; reload to play on`), TT.close(), null;
      if (kn && !gn && (Ak(zT, !1, "all"), zT.isStopped || YH)) return TT.close(), null;
      jk();
      const MT = Rg++;
      if (!ek(zT, "open", MT, WT ? hU.cc.Resume : 0)) return TT.close(), null;
      WT || eU.d.reset(), Pn = null === qn ? null : {
        join: qn,
        conn: MT,
        activated: !1
      }, TT.binaryType = "arraybuffer";
      const gT = new Ym.d((() => {
          ! function(TT, UT) {
            if (xg !== UT || TT.isStopped || null === Bk(UT, oM)) return;
            UT.detach(), xg = null, pk(TT, UT, oM, "", !0), UT.ws.close()
          }(zT, nT)
        })),
        nT = {
          ws: TT,
          conn: MT,
          pending: [],
          pendingBytes: 0,
          left: !1,
          resume: WT,
          token: null,
          detach: () => {
            gT.dispose(), TT.removeEventListener("message", HT), TT.removeEventListener("open", kT), TT.removeEventListener("close", jT)
          }
        },
        HT = TT => {
          if (TT.data instanceof ArrayBuffer) {
            var UT;
            const mT = new Uint8Array(TT.data);
            gT.heard(), nT.token = null !== (UT = (0, Jm.e)(mT)) && void 0 !== UT ? UT : nT.token,
              function(TT, UT, mT) {
                qj(TT, (() => {
                  TT.rings.net.writeFrame(UT, mT) || TT.crash(lm.o, `a socket frame of ${mT.byteLength} bytes did not fit the net-in ring`)
                }));
                const WT = TT.rings.net.cursor >= DM;
                !ej() && (WT || TT.netWrittenSinceFrame >= hM) && Ak(TT, !1, document.hidden ? "all" : "budget");
                Jj(TT)
              }(zT, MT, mT)
          }
        },
        kT = () => {
          WT || (0, BT.i)("wasm_socket_open", performance.now());
          for (const UT of nT.pending.splice(0)) TT.send(UT);
          nT.pendingBytes = 0
        },
        jT = TT => {
          if (xg === nT && zT.rings.net.cursor > 0 && Ak(zT, !1, "all"), xg === nT) {
            if (nT.detach(), xg = null, pk(zT, nT, TT.code, TT.reason) || Lk(zT, nT)) return;
            ek(zT, "close", MT), Zk(MT, nT.left), Tk(MT, TT.code, TT.reason)
          }
        };
      return TT.addEventListener("message", HT), TT.addEventListener("open", kT), TT.addEventListener("close", jT), xg = nT, null === (UT = (0, yT.i)()) || void 0 === UT || UT.socketAttached(MT), (0, LT.m)({
        websocketUrl: mT
      }), MT
    }

    function jk() {
      const TT = xg;
      if (!TT) return;
      const UT = Bg,
        mT = TT.resume;
      mT && (lk(), xg !== TT) || (xg = null, TT.detach(), TT.ws.close(), null !== UT && (Lk(UT, TT) || mT && pk(UT, TT, AM)) || (null !== UT && ek(UT, "close", TT.conn), Zk(TT.conn, TT.left)))
    }

    function lk() {
      const TT = Bg;
      null !== TT && !TT.isStopped && !YH && !gn && TT.rings.net.cursor > 0 && Ak(TT, !1, "all")
    }

    function Lk(TT, UT) {
      var mT;
      if (!UT.resume) return !1;
      const WT = dn;
      return null !== WT && null !== UT.token && "" !== UT.token && (WT.pendingHold = {
        conn: UT.conn,
        token: `${WT.roomId}:${UT.token}`
      }), ek(TT, "close", UT.conn), null === (mT = (0, yT.i)()) || void 0 === mT || mT.socketDetached(UT.conn), !0
    }

    function pk(TT, UT, mT) {
      let WT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "",
        zT = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
      const MT = Bk(UT, mT);
      if (null === MT) return !1;
      const {
        fn: gT,
        token: nT,
        game: HT,
        joinedAt: kT
      } = MT;
      if (!ek(TT, "close", UT.conn, hU.K.Held)) return !0;
      console.warn(`${VM} the game's connection ${zT?"went silent":`dropped with code ${mT}`}, holding it`);
      const jT = {
        closeReason: WT,
        sinceJoinedMs: performance.now() - kT,
        game: HT
      };
      return (0, ym.reportDisconnect)((0, CT.o)(mT), qg, jT, zT ? "silent" : void 0), gT.heldConn = UT.conn, gT.dropCode = mT, gT.pendingHold = {
        conn: UT.conn,
        token: `${gT.roomId}:${nT}`
      }, gn || Ak(TT, !1, "all"), !0
    }

    function Bk(TT, UT) {
      const mT = dn,
        zT = xn,
        MT = TT.token;
      return null === mT || null === zT || YH || TT.left || zT.conn !== TT.conn || null === MT || "" === MT ? null : (0, WT.i)(UT) && mT.resume.canHoldSeat() ? {
        fn: mT,
        token: MT,
        game: zT.game,
        joinedAt: zT.joinedAt
      } : null
    }

    function Zk(TT, UT) {
      var mT;
      null === (mT = (0, yT.i)()) || void 0 === mT || mT.closeGame(TT), (0, yz.c)().close(TT), UT || (0, LT.m)({
        websocketUrl: null
      })
    }

    function ck() {
      const TT = Qn;
      if (null === TT) return;
      const UT = (0, yT.i)();
      YH || null === UT || UT.MI(TT) ? Qn = null : performance.now() - jn.pause >= mg && (jn.pause = performance.now(), console.warn(`${VM} the cmd ring had no room for SetPaused(${TT}): written before the next frame`))
    }

    function vk() {
      const TT = dn;
      dn = null, null === TT || void 0 === TT || TT.resume.dispose()
    }

    function fk(TT, UT) {
      var mT, WT;
      const {
        heldConn: zT
      } = TT, MT = TT.resume.resumingConn;
      TT.heldConn = 0, TT.pendingHold = null, dn === TT && (dn = null), "left" === UT ? TT.resume.leave() : TT.resume.dispose(), 0 === In || (null === (mT = xg) || void 0 === mT ? void 0 : mT.conn) !== In || "left" === UT && (null === (WT = vn) || void 0 === WT ? void 0 : WT.conn) === In || Ok(In), "gaveUp" === UT && 0 !== MT && Ok(MT), 0 !== zT && "refused" !== UT && (console.info(`${VM} the game held through its drop ${"left"===UT?"was left":"is given up"}`), null === Bg || Bg.isStopped || ek(Bg, "close", zT), Zk(zT, !1))
    }

    function qk(TT, UT) {
      const mT = UT.indexOf(":");
      return {
        roomId: mT < 0 ? TT.roomId : UT.slice(0, mT),
        roomToken: UT.slice(mT + 1)
      }
    }

    function ik(TT) {
      (0, Lm.logClientMeasurement)("join_preload", TT, {
        client: "wasm"
      })
    }

    function bk(TT) {
      var UT;
      wn = TT;
      const mT = TT.replayOffer && Xn !== TT.conn;
      yn = mT ? TT.conn : 0, tn = mT || an.has(TT.conn) ? 0 : TT.conn, OT.admitted(), TT.conn === In && (In = 0);
      const WT = dn;
      null !== WT && (null === (UT = xn) || void 0 === UT ? void 0 : UT.conn) === TT.conn && WT.resume.onInitialInfo(TT)
    }

    function Ok(TT) {
      var UT;
      const mT = xg;
      (null === mT || void 0 === mT ? void 0 : mT.conn) === TT && (mT.left = !0, null === (UT = (0, yT.i)()) || void 0 === UT || UT.socketLeft(), (0, LT.m)({
        websocketUrl: null
      }), KH(TT) ? setTimeout((() => {
        xg === mT && jk()
      }), rT.f) : jk())
    }

    function ek(TT, UT, mT) {
      let WT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        zT = !1;
      return qj(TT, (() => {
        const {
          net: MT
        } = TT.rings;
        zT = "open" === UT ? MT.writeOpen(mT, WT) : MT.writeClose(mT, WT), zT || TT.crash(lm.o, `a socket ${UT} did not fit the net-in ring`)
      })), zT
    }

    function Yk(TT, UT, mT) {
      let WT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      if (wk()) return (0, ym.reportUnsupportedFallback)(TT, UT, mT, WT), void tk(`the wasm client can't run here (${mT}; ${UT})`, UT);
      (0, ym.showUnsupported)(TT, "unsupported", mT, WT)
    }
    const Jk = 1500;

    function xk(TT, UT) {
      const mT = 1 === TT.missing.length && TT.missing[0] === km.c,
        WT = UT ? "blockedAfterLoss" : mT ? "noContext" : "unsupported";
      return {
        decline: WT,
        detail: `No WebGPU or WebGL2, and WebGL1 lacks ${TT.missing.join(", ")}`,
        details: {
          missing: TT.missing.join(",")
        },
        retries: "unsupported" !== WT && wk()
      }
    }

    function dk(TT) {
      console.warn(`${VM} ${TT}: reloading once more onto the wasm client`), (0, tz.r)(), (0, ym.flushCrashReports)(RT.c).then(RT.k, RT.k)
    }

    function wk() {
      return qH && "wasm" !== (0, bU.f)(window.location.search)
    }

    function tk(TT, UT) {
      console.warn(`${VM} ${TT}: reloading on the JS client`), null !== UT && (0, bU.z)(UT), (0, bU.y)(null === UT ? "reloadOntoJs" : "decline");
      const mT = () => {
        (0, RT.h)(bU.D)
      };
      (0, ym.flushCrashReports)(RT.c).then(mT, mT)
    }

    function ak(TT, UT, mT, WT) {
      return Dn(TT, UT, mT, WT)
    }

    function yk() {
      null === TH || null === Bg || Bg.isStopped || YH || null !== rg || null === gg || (rg = TH(gg, Qk, sk().follow))
    }

    function Xk() {
      var TT, UT, mT;
      return null !== (TT = null === (UT = cg) || void 0 === UT || null === (mT = UT.textures) || void 0 === mT ? void 0 : mT.files()) && void 0 !== TT ? TT : null
    }

    function Ik(TT) {
      sk().follow((UT => {
        null !== UT && Promise.all([Promise.all([mT.e(204), mT.e(46)]).then((() => mT(51145))), (0, tz.R)()]).then((TT => {
          let [{
            followPagePackFiles: mT
          }, WT] = TT;
          const zT = null === WT || (0, km.n)(WT) ? "webgl" : WT.backend;
          mT(UT, qz.e, zT, (TT => {
            qz.e.setPageFiles(TT)
          }), Qk)
        }), (UT => {
          console.warn(`${VM} the texture pack's files didn't load: the previews draw the shipped ones until the next opens`, UT), TT()
        }))
      }))
    }

    function Qk(TT, UT) {
      console.warn(`${VM} ${TT}`, UT)
    }

    function sk() {
      return Zg ??= new uz({
        load: TT => Promise.all([mT.e(204), mT.e(55)]).then((() => mT(51154))).then((UT => {
          let {
            startPageTexturePackFeed: mT
          } = UT;
          return mT(Qk, TT)
        })),
        store: rm.h,
        Gp: TT => {
          Og.then((() => {
            (0, ym.reportTexturePackFeedLoadFailure)(TT, qg)
          }))
        }
      }), Zg
    }
    const Fk = TT => sk().follow(TT);

    function Pk() {
      return sk().loaded()
    }
    const Vk = function(TT, UT, mT) {
        let WT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => performance.now(),
          zT = 0;
        return async function(MT, gT) {
          let nT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => !0;
          const HT = ++zT,
            kT = WT() + UT,
            jT = await
          function(TT, UT) {
            let mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {};
            return new Promise((WT => {
              const zT = setTimeout((() => {
                WT(null), TT.then((TT => {
                  null !== TT && (TT.joinedWithout(), mT(TT))
                }))
              }), UT);
              TT.then((TT => {
                clearTimeout(zT), WT(TT)
              }))
            }))
          }(TT(MT), UT, (TT => {
            HT === zT && nT() && gT(TT, WT() + UT).catch((TT => {
              mT("the texture pack step after the join failed", TT)
            }))
          }));
          return null === jT ? null : gT(jT, kT)
        }
      }((TT => (0, lU.k)(TT) ? sk().request() : sk().forJoin()), Vz.c, Qk),
      uk = function(TT, UT) {
        let mT = !1;
        return {
          setGamePackConfirm: TT => {
            mT = null !== TT, UT(TT)
          },
          packStep: (UT, WT, zT) => TT(UT, WT, (() => mT && zT()))
        }
      }(Vk, (TT => {
        sk().setGamePackConfirm(TT)
      }));

    function Ck(TT) {
      uk.setGamePackConfirm(TT)
    }

    function rk() {
      if (YH || null !== MH || null === UH || null === zH) return;
      const {
        backend: TT,
        canvas: UT,
        fallbackReason: mT,
        adapterVendor: WT
      } = zH, zT = UH;
      UH = null;
      try {
        MH = zT({
          backend: TT,
          canvas: UT,
          fallbackReason: mT,
          adapterVendor: WT,
          joinedGame: () => YH ? null : vn,
          canSend: () => !YH && null !== vn && vn.conn === tn,
          inGame: Sk,
          shaderPackReach: () => {
            var TT, UT;
            return null !== (TT = null === (UT = Eg) || void 0 === UT ? void 0 : UT.reachInJoinedGame()) && void 0 !== TT ? TT : null
          },
          dZ: () => Kg,
          msaa: () => WH > 1,
          writeCmd: (TT, UT, mT) => null !== gg && gg(TT, UT, mT),
          takeFailedMeshJobs: () => {
            var TT, UT;
            return null !== (TT = null === (UT = ag) || void 0 === UT ? void 0 : UT.takeFailedMeshJobs()) && void 0 !== TT ? TT : 0
          },
          readLoadCounts: TT => {
            var UT, mT;
            return null !== (UT = null === (mT = Bg) || void 0 === mT ? void 0 : mT.readLoadCounts(TT)) && void 0 !== UT && UT
          },
          mainStalled: (TT, UT, mT) => {
            (0, ym.reportMainStall)(TT, UT, mT, qg)
          }
        })
      } catch (MT) {
        console.error(`${VM} the frame telemetry didn't start`, MT)
      }
    }

    function Kk(TT, UT) {
      try {
        var mT, WT, zT;
        const MT = Nn && null !== (mT = null === (WT = Bg) || void 0 === WT || null === (zT = WT.lastHeader) || void 0 === zT ? void 0 : zT.renderPending) && void 0 !== mT ? mT : 0;
        (0, pW.d)(UT, TT, Sk() && !(null !== Iz), MT)
      } catch (MT) {
        (0, pW.q)(), console.error(`${VM} the quality steps stopped`, MT)
      }
    }

    function Sk() {
      return null !== vn && cH === vn && !YH
    }

    function Gk(TT) {
      const UT = MH;
      MH = null;
      try {
        null === UT || void 0 === UT || UT.stop()
      } catch {}
      console.error(`${VM} the frame telemetry threw: it stops`, TT)
    }

    function Nk(TT) {
      var UT, mT, WT, zT;
      if ((0, yz.c)().fire(TT), "message" === TT.type) {
        if (nn++, TT.Xj === hU.Nc.ERROR && null !== qn) {
          var MT;
          const {
            text: UT,
            dropsCache: mT
          } = (0, CT.s)((new TextDecoder).decode(TT.payload));
          rn ||= mT, (null === (MT = Pn) || void 0 === MT ? void 0 : MT.conn) === TT.conn && (Kn = UT)
        } else if (TT.Xj === DU.$b.ResumeComplete) {
          var gT;
          Xn = TT.conn, TT.conn === yn && (yn = 0, tn = an.has(TT.conn) ? 0 : TT.conn), null === (gT = dn) || void 0 === gT || gT.resume.onResumeComplete(TT.conn)
        }
        return
      }
      TT.phase === hU.O.Left ? Hn = TT.conn : TT.phase === hU.O.Activated && (null === (UT = Pn) || void 0 === UT ? void 0 : UT.conn) === TT.conn ? Pn.activated = !0 : TT.phase === hU.O.Resumed ? function(TT) {
        var UT, mT;
        In = TT;
        const WT = dn;
        if (null === WT || 0 === WT.heldConn || (null === (UT = xg) || void 0 === UT ? void 0 : UT.conn) !== TT || !xg.resume || null === xn) return;
        console.info(`${VM} the game resumed on conn ${TT}, waiting for its InitialInfo`);
        const zT = WT.heldConn;
        WT.heldConn = 0, xg.resume = !1, xn.conn = TT, (null === (mT = Yn) || void 0 === mT ? void 0 : mT.conn) === zT && (Yn = {
          conn: TT,
          info: Yn.info
        }), eU.d.apply({
          shopInfo: null,
          _shopVersion: LU.c
        })
      }(TT.conn) : TT.phase === hU.O.Held ? function(TT) {
        var UT;
        const mT = dn,
          WT = null !== (UT = null === mT || void 0 === mT ? void 0 : mT.pendingHold) && void 0 !== UT ? UT : null;
        if (null !== mT && null !== WT && WT.conn === TT) return mT.pendingHold = null, mT.heldConn = TT, In = 0, console.warn(`${VM} the core holds the game, reconnecting`), void mT.resume.onDropped(WT.token);
        if (TT === In) {
          In = 0;
          const UT = Bg;
          null === UT || UT.isStopped || (console.info(`${VM} the core held again a resumed game the shell ended before its InitialInfo: closing it again`), ek(UT, "close", TT))
        }
      }(TT.conn) : TT.phase === hU.O.Closed && (null === (mT = dn) || void 0 === mT || null === (WT = mT.pendingHold) || void 0 === WT ? void 0 : WT.conn) === TT.conn && (dn.heldConn === TT.conn ? function(TT) {
        const UT = TT.heldConn,
          mT = TT.dropCode;
        fk(TT, "refused"), console.info(`${VM} the core didn't hold the game through its drop: it hadn't started`), queueMicrotask((() => {
          Zk(UT, !1), Tk(UT, mT, "", !0)
        }))
      }(dn) : dn.pendingHold = null), TT.phase !== hU.O.Held && TT.phase !== hU.O.Left && TT.phase !== hU.O.Closed || (an.add(TT.conn), TT.conn === tn && (tn = 0));
      const nT = Object.keys(hU.O).find((UT => hU.O[UT] === TT.phase)),
        HT = 0 === TT.code ? "" : ` (code ${TT.code})`;
      console.info(`${VM} conn ${TT.conn}: ${null!==nT&&void 0!==nT?nT:TT.phase}${HT}, ${nn} raw messages so far`), (null === (zT = vn) || void 0 === zT ? void 0 : zT.conn) !== TT.conn || TT.phase !== hU.O.Left && TT.phase !== hU.O.Closed || rH(null), en !== TT.conn || TT.phase !== hU.O.Left && TT.phase !== hU.O.Closed || (en = null, null === vn && null === qn && iz.c.setGame(void 0));
      for (const jT of [...Gn]) try {
        jT(TT.conn, TT.phase, TT.code)
      } catch (kT) {
        (0, oU.l)(kT, `${VM} a connection listener threw`)
      }
    }

    function Ek() {
      (0, tz.r)(), null === vn && null === qn || (0, Km.f)(), queueMicrotask((() => {
        try {
          jj()
        } catch (TT) {
          console.warn(`${VM} stopping before the reload threw`, TT)
        }(0, ym.flushCrashReports)(RT.c).then(RT.k, RT.k)
      }))
    }

    function hk() {
      const TT = Bg;
      null === TT || TT.isStopped || null === xg || gn || !TT.hasPendingCommands() || Ak(TT, !1, "budget")
    }

    function Dk(TT) {
      var UT;
      const mT = vn;
      TT.persisted || null === mT || (null === (UT = xg) || void 0 === UT ? void 0 : UT.conn) !== mT.conn || xg.left || mT.leave()
    }

    function Ak(TT, UT, WT) {
      let zT = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const MT = gn;
      gn = !0;
      try {
        const MT = TT.rings.net.cursor >= DM;
        MT && "all" !== WT && !document.hidden && Lj("backlog", `a shown tab's net-in is ${TT.rings.net.cursor} bytes behind: one frame reads it all`);
        return function(TT, UT, WT, zT) {
          var MT, gT, nT, HT;
          if (YH) return !1;
          if (qj(TT, Tj), YH || TT.isStopped) return !1;
          nj() && og("modelsIn");
          ck(), Tn = performance.now(), Hn = null, kn = !1, (0, aT.Q)(), null === (MT = Fg) || void 0 === MT || MT.beforeFrame(), dW(Tn, TT), (0, aT.K)(Tn, Uj), Mn = !0;
          const kT = UT && gj();
          let jT;
          try {
            jT = TT.frame(Tn, kT, WT)
          } finally {
            Mn = !1
          }
          if (!jT) return !1;
          mH.observe(null !== (gT = null === (nT = TT.lastHeader) || void 0 === nT ? void 0 : nT.chunksCancelled) && void 0 !== gT ? gT : 0);
          const lT = TT.lastFrameKind,
            LT = (0, sU.c)(lT);
          (function(TT) {
            null !== mM && mM.afterFrame(performance.now(), TT)
          })(LT), null === (HT = gH) || void 0 === HT || HT.frame(TT, Tn, lT), UT && (vH = LT);
          LT && (0, XU.d)(Tn);
          if (null !== MH) try {
            MH.frameRan(TT, Tn, performance.now(), lT)
          } catch (ZT) {
            Gk(ZT)
          }
          "drawn" === lT && Mj() && function() {
            for (const TT of [...dz]) TT()
          }();
          TT.forEachNetOut(Hj);
          const pT = xg;
          null !== Hn && (null === pT || void 0 === pT ? void 0 : pT.conn) === Hn && kj(pT, rT.j);
          zj(TT),
            function(TT) {
              const UT = 0 !== (TT.headerWord(DU.F.LoadSteps) & DU.R.JoinPreload);
              UT !== On && (On = UT, (0, ym.setCrashAdPreload)(UT), (0, Pm.C)())
            }(TT), UT && function(TT) {
              var UT, WT, zT;
              if (null === vn || !gj()) return;
              const MT = TT.headerWord(DU.F.LoadSteps);
              null === ZH || cH === vn && !ZH.frame(Tn, 0 !== (MT & DU.V.TerrainDrawn)) || (ZH = null);
              if (0 === (MT & DU.R.PlayerBound)) return;
              const gT = TT.lastHeader,
                nT = !Nn || 0 === (null === gT || void 0 === gT ? void 0 : gT.renderPending);
              !jH && nT && (jH = !0, performance.mark(EM));
              if (cH === vn) return;
              const HT = null !== (UT = null === gT || void 0 === gT ? void 0 : gT.firstView) && void 0 !== UT ? UT : hU.kb.NotYet;
              if (Nn && HT === hU.kb.NotYet) return;
              if (kH && (!0 !== (null === (WT = (0, yT.i)()) || void 0 === WT ? void 0 : WT.isSessionLive) || !nT)) return;
              cH = vn;
              const kT = vn;
              if (setTimeout((() => {
                  vn === kT && (0, BT.e)()
                }), 0), null === (zT = Eg) || void 0 === zT || zT.playable(), function() {
                  clearTimeout(Jg), Jg = setTimeout((() => {
                    Sk() && Oj((TT => {
                      let {
                        prefetchWorldgenWorker: UT
                      } = TT;
                      UT()
                    }))
                  }), Mg)
                }(), kH) return;
              kH = !0, performance.mark(NM), (0, hz.r)("render") && Promise.all([mT.e(78), mT.e(49)]).then((() => mT(4771))).then((TT => {
                let {
                  renderDebugPlayable: UT
                } = TT;
                UT()
              }), (TT => {
                console.warn("The render debug topic didn't load", TT)
              }));
              const jT = Math.round(performance.now()),
                lT = TT.readViewQueuedPrograms();
              null !== lT && (0, BT.i)("wasm_view_links", jT, (0, BU.Ab)(lT));
              const LT = null === BH || null === LH ? 0 : Math.max(0, LH - BH),
                pT = null === BH ? 0 : Math.max(0, jT - BH),
                ZT = Nn ? TT.readFirstViewWait(LT, pT) : null;
              null !== ZT && (0, BT.h)(ZT);
              if (Nn && HT !== hU.kb.Drawn) {
                const UT = HT === hU.kb.HeldBackstop ? "held_draws" : "long",
                  {
                    cause: mT
                  } = mj(TT);
                if (console.warn(`${VM} playable at ${jT} ms on the first view's ${UT} backstop, ${mT}: it wasn't drawn whole in time`), (0, BT.i)("wasm_view_backstop", jT, `${UT}:${mT}`), "long" === UT) {
                  var cT, vT;
                  const UT = null !== (cT = null === (vT = xn) || void 0 === vT ? void 0 : vT.game) && void 0 !== cT ? cT : "";
                  ZH = new Sm.d((() => {
                    const {
                      cause: mT,
                      census: WT
                    } = mj(TT);
                    (0, ym.reportFirstViewNoTerrain)(UT, mT, WT, qg), (0, iU.v)("noTerrain")
                  }))
                }
              } else console.info(`${VM} playable at ${jT} ms${Nn?"":" (no renderer)"}`);
              setTimeout(Rn, 0), (0, JU.f)().catch((TT => {
                console.error(`${VM} item sprites didn't load, so item particles show the missing texture`, TT)
              })), lz.b.warm()
            }(TT);
          (0, lm.H)(TT, {
            worldgen: wg,
            mesh: ag
          }),
          function(TT) {
            TT.forEachEvent(tW);
            for (const UT of wW) try {
              (0, OW.c)(UT)
            } catch (ZT) {
              if ((0, oU.h)(ZT)) {
                TT.crashOn(lm.k, ZT);
                break
              }
              console.error(`${YW} an input action listener threw`, ZT)
            }
            wW.length = 0
          }(TT), zT && (0, QU.e)();
          return !TT.isStopped
        }(TT, UT, "all" === WT || MT, zT)
      } finally {
        gn = MT, MT || (Un = performance.now())
      }
    }

    function Rk(TT) {
      console.error(`${VM} a frame-start listener threw`, TT)
    }

    function Tj() {
      var TT, UT, mT, WT;
      null === (TT = Vg) || void 0 === TT || TT.drain(gg, ng), null === (UT = Sg) || void 0 === UT || UT.drain(gg), null === (mT = Gg) || void 0 === mT || mT.drain(performance.now()), An(gg), null === (WT = rg) || void 0 === WT || WT.drain()
    }

    function Uj(TT) {
      console.error(`${VM} a before-frame listener threw`, TT)
    }

    function mj(TT) {
      const UT = (0, yT.i)(),
        mT = (0, yT.v)(),
        WT = null === UT || null === mT ? null : mT.readDrawCensus(UT.api);
      return {
        cause: (0, Sm.i)(TT.headerWord(DU.F.LoadSteps), WT),
        census: WT
      }
    }
    const Wj = {
      ChunkRequested: "wasm_chunk_requested",
      ChunkStored: "wasm_chunk_stored",
      MeshLanded: "wasm_mesh_landed",
      PlayerChunk: "wasm_player_chunk",
      TerrainDrawn: "wasm_terrain_drawn"
    };

    function zj(TT) {
      var UT;
      if (kH) return;
      if (null === LH && gj() && (LH = performance.now()), null === vn || 0 === (TT.headerWord(DU.F.LoadSteps) & DU.R.PlayerBound) ? BH = null : BH ??= performance.now(), null === qn && null === vn) return;
      null === LH || pH || (pH = !0, (0, BT.i)("wasm_startup_loaded", LH));
      let mT = 0;
      null !== vn ? mT = -1 : !0 === (null === (UT = Pn) || void 0 === UT ? void 0 : UT.activated) && (mT = ~DU.V.TerrainDrawn);
      const WT = TT.headerWord(DU.F.LoadSteps) & mT & ~lH;
      if (0 === WT) return;
      lH |= WT;
      const zT = performance.now();
      for (const [MT, gT] of Object.entries(Wj)) 0 !== (WT & DU.V[MT]) && (0, BT.i)(gT, zT)
    }

    function Mj() {
      return Nn && gj()
    }

    function gj() {
      return Ng && nj()
    }

    function nj() {
      return null === Vg || Vg.startupDone
    }

    function Hj(TT, UT) {
      const mT = xg;
      (null === mT || void 0 === mT ? void 0 : mT.conn) === TT ? kj(mT, UT) : pn++
    }

    function kj(TT, UT) {
      const {
        ws: mT
      } = TT;
      return mT.readyState === WebSocket.OPEN ? (mT.send(UT), !0) : mT.readyState === WebSocket.CONNECTING && TT.pendingBytes + UT.byteLength <= Ug ? (TT.pending.push(UT.slice()), TT.pendingBytes += UT.byteLength, !0) : (pn++, !1)
    }

    function jj() {
      var TT, UT, mT, WT, zT, MT, gT, nT, HT, kT, jT, lT, LT, pT, BT, ZT, cT;
      YH = !0, fH.stop(), (0, oz.endLookDebugTake)(), mM = null, vk(), (0, aT.N)().unlockPointer(), (0, aT.L)(null), null === (TT = Pg) || void 0 === TT || TT(), Pg = null, null === (UT = (0, yT.v)()) || void 0 === UT || UT.followCursorAim(null), (0, QU.B)(), (0, yT.f)(), fg.stop(), null === (mT = nH) || void 0 === mT || mT(), nH = null, null === (WT = HH) || void 0 === WT || WT(), HH = null, null === (zT = MH) || void 0 === zT || zT.stop(), MH = null, (0, Nm.o)(null), null === (MT = dg) || void 0 === MT || MT(), dg = null, null === (gT = wg) || void 0 === gT || gT.stop(), wg = null, null === (nT = ag) || void 0 === nT || nT.stop(), ag = null, null !== (HT = cg) && void 0 !== HT && null !== (kT = HT.textures) && void 0 !== kT && kT.assets && (0, vz.m)(null), null === (jT = cg) || void 0 === jT || jT.stop(), cg = null, vg = null;
      const vT = yg;
      yg = null, vT && (vT.stop(), fj(vT)), null === (lT = Sg) || void 0 === lT || lT.dispose(), Sg = null, null === (LT = Gg) || void 0 === LT || LT.dispose(), Gg = null, Vg = null, null === (pT = Cg) || void 0 === pT || pT(), Cg = null, null === (BT = sg) || void 0 === BT || BT(), sg = null, null !== zn && (clearTimeout(zn), zn = null), null === (ZT = Fg) || void 0 === ZT || ZT.stop(), Fg = null, VH(), iz.c.release(), jk();
      const fT = rg;
      rg = null;
      try {
        null === fT || void 0 === fT || fT.dispose()
      } catch (qT) {
        console.warn(`${VM} the sky's images didn't release`, qT)
      }(0, Lz.h)(null), null === (cT = Lg) || void 0 === cT || cT.pagePreviews().endSession(null === (0, ZU.s)())
    }

    function lj(TT, UT) {
      var mT, WT;
      const zT = null !== (mT = null === (WT = yg) || void 0 === WT ? void 0 : WT.details()) && void 0 !== mT ? mT : {},
        MT = TT.site === CM || TT.site === rM || TT.site === ym.RENDER_RELOAD_SITE || TT.site === KM ? TT.error instanceof WebAssembly.RuntimeError || TT.error instanceof Mm.b : !(0, km.p)(TT.error) && (0, lm.C)(TT);
      MT && TT.error instanceof Error && (0, ZU.R)(TT.error);
      const gT = MT || TT.site === lm.s ? (0, ym.readTrap)(TT.error) : null,
        nT = null !== gT && (0, RU.h)(gT.kind, gT.refusedBytes) ? gT.refusedBytes : 0,
        HT = (0, dm.n)(),
        kT = null === Xg ? (0, Hz.x)(function() {
          try {
            return (0, ZU.u)().buffer.byteLength
          } catch {
            return 0
          }
        }(), nT, HT) : Xg.ceilingMayRefuse(nT, HT),
        jT = nT > 0 && !kT && wk();
      var lT;
      if (jT && ((0, bU.z)("oom"), (0, bU.y)("decline"), eH = !0), jj(), (0, tz.d)()) return console.warn(`${VM} the session stopped at ${TT.site} as the page reloads`, TT.error), void((0, km.p)(TT.error) || (null === (lT = TT.header) || void 0 === lT ? void 0 : lT.lastError) === hU.S.CoreBusy || (0, ym.reportStoppedCore)(TT, UT, gT, {
        memoryDetails: zT,
        declined: jT
      }));
      (0, ym.showCrash)(TT, UT, gT, {
        memoryDetails: zT,
        declined: jT
      })
    }

    function Lj(TT, UT) {
      const mT = performance.now();
      return !(mT - jn[TT] < mg) && (jn[TT] = mT, console.warn(`${VM} ${UT}`), !0)
    }

    function pj(TT) {
      const {
        input: UT,
        net: mT,
        worker: WT
      } = TT.rings, zT = TT.optionsDropped, MT = UT.dropped + zT + mT.dropped + WT.dropped + pn;
      MT !== Ln && Lj("dropped", `${MT} records dropped so far (input ${UT.dropped}, options ${zT}, net ${mT.dropped}, worker ${WT.dropped}, net-out ${pn})`) && (Ln = MT)
    }

    function Bj() {
      var TT, UT;
      const mT = (0, Fm.b)();
      if (null === mT) return null;
      const WT = (0, Cm.n)(mT);
      return {
        ...WT,
        horizontal: Math.min(WT.horizontal, null !== (TT = null === (UT = yg) || void 0 === UT ? void 0 : UT.shedDistanceInUse()) && void 0 !== TT ? TT : 1 / 0)
      }
    }

    function Zj(TT) {
      var UT, mT;
      return {
        samples: Nn ? WH : null,
        sunShadows: TT,
        renderDistance: null !== (UT = null === (mT = Bj()) || void 0 === mT ? void 0 : mT.horizontal) && void 0 !== UT ? UT : null
      }
    }

    function cj(TT) {
      bn = TT, (0, Pm.C)()
    }

    function vj() {
      var TT, UT, mT;
      const WT = Bj();
      return {
        ...null === (TT = yg) || void 0 === TT ? void 0 : TT.pageKillSnapshot(),
        renderDistance: null !== (UT = null === WT || void 0 === WT ? void 0 : WT.horizontal) && void 0 !== UT ? UT : null,
        renderDistanceVertical: null !== (mT = null === WT || void 0 === WT ? void 0 : WT.vertical) && void 0 !== mT ? mT : null,
        chunkCap: Ig,
        budgetBasis: Qg,
        renderBackend: (0, tz.F)(),
        adPreload: On,
        ...(0, Vm.b)(bn)
      }
    }

    function fj(TT) {
      var UT;
      console.info(`${VM} wasm memory at the session's end`, TT.details());
      const {
        wasmMainMiB: mT,
        wasmWorkersMiB: WT,
        peakStoredChunks: zT
      } = TT.pageKillSnapshot(), MT = navigator.deviceMemory;
      (0, Lm.logClientMeasurement)("wasm_memory_end", {
        wasmMainMiB: mT,
        wasmWorkersMiB: WT,
        peakStoredChunks: zT
      }, {
        client: "wasm",
        renderBackend: null !== (UT = (0, tz.F)()) && void 0 !== UT ? UT : "none",
        os: (0, um.getOperatingSystem)(),
        deviceMemory: String(null !== MT && void 0 !== MT ? MT : "unreported")
      })
    }

    function qj(TT, UT) {
      if (!TT.isStopped) try {
        UT()
      } catch (mT) {
        TT.crash(lm.u, mT)
      }
    }

    function ij() {
      return tg ??= mT.e(72).then((() => mT(51163))).catch((TT => {
        throw tg = null, TT
      })), tg
    }
    async function bj() {
      const {
        createWorldgenWorker: TT,
        worldgenWorkerReady: UT
      } = await ij();
      return await UT(), TT
    }

    function Oj(TT) {
      var UT;
      null === (UT = tg) || void 0 === UT || UT.then(TT, (() => {}))
    }

    function ej() {
      return performance.now() - Math.max(Un, mn) >= Wg
    }

    function Yj(TT) {
      const UT = document.hidden || Wn ? "all" : "budget";
      Wn = !0;
      const mT = Ak(TT, !1, UT);
      var WT;
      mT && (pj(TT), null === (WT = yg) || void 0 === WT || WT.afterFrame());
      return mT
    }

    function Jj(TT) {
      TT.isStopped || 0 === TT.rings.net.cursor || ej() && !Yj(TT) || TT.rings.net.cursor > 0 && performance.now() - mn >= Wg / 2 && function(TT) {
        zn ??= setTimeout((() => {
          zn = null, Jj(TT)
        }), Wg)
      }(TT)
    }

    function xj(TT, UT) {
      return async function(TT, UT, mT) {
        let {
          stop: WT,
          stillWanted: zT,
          beforeReload: MT
        } = mT;
        const gT = await (0, GW.l)(TT, {
          stillWanted: zT,
          beforeReload: async () => {
            WT(), await Promise.all([(0, ym.flushCrashReports)(RT.c), null === MT || void 0 === MT ? void 0 : MT()])
          },
          reload: RT.k
        });
        return gT || UT(), gT
      }(TT, UT, {
        ...arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        stop: jj
      })
    }
    let dj = !1;

    function wj() {
      return dj = !0, async function(TT, UT, WT) {
        const {
          gamePackSource: zT
        } = await mT.e(276).then((() => mT(41194)));
        await uk.packStep(TT, ((mT, WT) => mT.packForGame(TT, zT(UT), WT)), WT)
      }(...arguments)
    }

    function tj(TT) {
      ! function(TT, UT) {
        TT((TT => {
          null === TT || void 0 === TT || TT.subscribe((TT => {
            let {
              pack: mT,
              gameSource: WT
            } = TT;
            UT(null === WT || null === mT ? null : {
              pack: mT,
              source: "" === WT ? null : WT
            })
          }))
        }))
      }(Fk, TT)
    }
    let aj = !1,
      yj = null,
      Xj = !1,
      Ij = !1;

    function Qj() {
      var TT;
      aj || (aj = !0, aH("play", oT), (0, LT.k)(new Ej), nT.gameBridge.attach(uT), Cj().catch((() => {})), (0, yT.w)((TT => {
        kU(TT.setTextHost)
      })), TT = Pj, Cn.add(TT), function(TT) {
        for (const UT of hg) TT(UT);
        Dg.add(TT)
      }((TT => {
        Fj(sj[TT])
      })))
    }
    const sj = {
      booted: MT.j.INITIALISE_NOA,
      texturesIn: MT.j.REGISTRATION,
      modelsIn: MT.j.SETUP_LIFEFORMS
    };

    function Fj(TT) {
      HT.j.EZ("matchmakeAndPlayStepCompleted", {
        step: TT,
        totalSubSteps: 1
      })
    }

    function Pj(TT) {
      if (!Xj) return;
      const {
        gameNameWithVariation: UT,
        lobbyName: mT
      } = (0, LT.c)();
      if (TT.code === WT.e.serverUpdating.code) return (new Ej).leaveLive(), void uj(UT, mT);
      HT.j.EZ("unwantedLeftGame", {
        reason: Vj(TT),
        requiresRefresh: TT.requiresRefresh,
        canReconnect: null !== TT.reconnect,
        automaticallyReconnect: TT.reconnecting,
        canPlayAgain: TT.canPlayAgain,
        gameNameWithVariation: UT,
        lobbyName: mT
      }), (new Ej).leaveLive()
    }

    function Vj(TT) {
      return null !== TT.reasonKey ? {
        translationKey: TT.reasonKey
      } : "gameOrPluginKick" === TT.name ? TT.reason : `You have disconnected from the server.\n${TT.reason}`
    }

    function uj(TT, UT) {
      var WT;
      WT = (0, kT.I)(TT, UT), Promise.resolve().then((() => mT(1633))).then((TT => {
        let {
          navigatePreserveSearch: UT
        } = TT;
        UT(WT)
      })).catch((TT => {
        console.warn("[bloxd-wasm-client] the page's router didn't navigate: loading the page instead", TT), (0, RT.d)(WT)
      }))
    }

    function Cj() {
      return yj ??= Promise.all([mT.e(73), mT.e(76), mT.e(75), mT.e(74), mT.e(90), mT.e(87), mT.e(273), mT.e(191), mT.e(228), mT.e(252), mT.e(275), mT.e(47)]).then((() => mT(41136))).then((TT => {
        try {
          TT.attachPlayGameSources()
        } catch (UT) {
          throw console.error("[bloxd-wasm-client] the play sources did not attach", UT),
            function(TT) {
              Og.then((UT => {
                null === UT || UT.isStopped || YH ? console.warn(`${VM} the play sources threw as they attached, after the client stopped`, TT) : lj({
                  site: KM,
                  error: TT,
                  header: null
                }, qg)
              }))
            }(UT), UT
        }
      }), (TT => {
        throw yj = null, new yT.b(TT)
      })), yj
    }
    async function rj(TT, UT) {
      Qj(), dj = !0, Xj = !0;
      let mT = {
          place: TT.place,
          matchedAt: TT.matchedAt
        },
        gT = TT.place.gameNameWithVariation;
      const nT = (0, lT.h)();
      let HT = null;
      const kT = await QH({
        matchmake: async () => {
          let UT = mT;
          if (mT = null, null === UT) {
            const mT = await TT.rematch();
            if (mT.isError()) throw HT = mT.asError().forward(), new Error(mT.asError().message);
            UT = {
              place: mT.getValue(),
              matchedAt: performance.now()
            }
          }
          gT = UT.place.gameNameWithVariation;
          return {
            target: await (0, ST.c)(TT.userContext, UT.place, Pk(), nT),
            matchedAt: UT.matchedAt,
            freshMs: ST.b
          }
        },
        pageReady: Cj,
        onFailure: (TT, UT) => {
          null === HT && function(TT, UT) {
            (0, ym.reportPageJoinFailure)(TT, qg, UT)
          }(TT, {
            sinceJoinStartMs: UT,
            game: gT
          })
        },
        rejoin: () => () => {},
        invalidateTrafficCode: () => TT.userContext.invalidateTrafficCode(),
        signal: UT
      });
      switch (kT.kind) {
        case "joined":
          if (nT) {
            setTimeout((() => {
              OT.ready()
            }), 0);
            const {
              game: TT
            } = kT;
            (0, lT.o)((() => {
              TT.endJoinAd() && ((0, BT.f)(), OT.adEnded())
            }))
          }
          return Ij || (Ij = !0, (0, YT.e)()), Xj ? (Fj(MT.j.CONNECT_TO_GAME_SERVER), Fj(MT.j.SHADER_PACK), function() {
            var TT, UT;
            return null !== (TT = null === (UT = Eg) || void 0 === UT ? void 0 : UT.runsInJoinedGame()) && void 0 !== TT && TT
          }() && (0, eT.h)(TT.userContext, gT).catch((TT => {
            console.error("Failed to report the shader pack session", TT)
          })), function() {
            const TT = function() {
              var TT, UT;
              return null !== (TT = null === (UT = Eg) || void 0 === UT ? void 0 : UT.couldntRunInJoinedGame()) && void 0 !== TT ? TT : null
            }();
            null !== TT && (0, eT.d)(TT)
          }(), zT.c.value(void 0)) : Nj("The server ended the game as it joined");
        case "failed":
          if (!kT.reloading) {
            if (null !== HT) return HT;
            if ((kT.error instanceof rT.n || kT.error instanceof rT.d) && kT.error.code === WT.e.serverUpdating.code) {
              if (UT.aborted) return Nj("Left the game while it loaded");
              const {
                gameNameWithVariation: TT,
                lobbyName: mT
              } = (0, LT.c)();
              return uj(TT, mT), Nj("The server is updating")
            }
            return kT.error instanceof AT.b ? zT.c.errorWithCode(kT.error.messageKey, MT.j.SHADER_PACK, {
              severity: "medium"
            }) : zT.c.errorWithCode(function(TT) {
              if (TT instanceof rT.s || TT instanceof wT.d) return TT.message;
              if (Kj(TT)) return (0, CT.p)(TT.code, TT.serverText);
              return CT.k
            }(kT.error), MT.j.CONNECT_TO_GAME_SERVER, {
              error: Sj(kT.error) ? kT.error : void 0,
              severity: Gj(kT.error),
              gameServerUnreachable: (0, KT.d)(kT.error),
              joinFailure: (0, KT.i)(kT.error),
              rematch: (0, xT.d)(kT.error),
              gameRefused: (0, dT.b)(kT.error)
            })
          }
          return Nj("Reloading into the new build");
        case "stopped":
          return Nj("The game client stopped, and shows why");
        case "Km":
          return Nj("Left the game while it loaded")
      }
    }

    function Kj(TT) {
      return TT instanceof rT.n || TT instanceof rT.d && "attach" !== TT.stage
    }

    function Sj(TT) {
      return !(TT instanceof rT.s) && !Kj(TT) && void 0 === (0, KT.d)(TT)
    }

    function Gj(TT) {
      return Kj(TT) ? TT instanceof rT.d && (0, CT.o)(TT.code).requiresRefresh ? "medium" : "low" : Sj(TT) || TT instanceof rT.s ? "medium" : "low"
    }

    function Nj(TT) {
      return zT.c.errorWithCode(TT, MT.j.CONNECT_TO_GAME_SERVER, {
        severity: "low",
        Km: !0
      })
    }
    class Ej {
      leave(TT) {
        if ((0, tT.e)()) {
          var UT, mT;
          if ((0, gT.d)()) return;
          (0, pT.c)(!0 === (null === (UT = (0, tT.p)()) || void 0 === UT || null === (mT = UT.currentViewer) || void 0 === mT ? void 0 : mT.unsavedChanges), TT)
        } else this.leaveLive()
      }
      leaveLive() {
        var TT;
        dj && (null === (TT = Pk()) || void 0 === TT || TT.endGamePack());
        if (!Xj) return;
        Xj = !1, (0, JT.f)();
        try {
          var UT;
          null === (UT = (0, yT.v)()) || void 0 === UT || UT.clearWasmCameraScreen()
        } catch (WT) {
          console.error("[bloxd-wasm-client] the camera screen didn't clear", WT)
        }
        const {
          gameNameWithVariation: mT
        } = (0, LT.c)();
        try {
          GH()
        } finally {
          (0, LT.m)({
            websocketUrl: null
          }), HT.j.EZ("leaveGame", {
            gameNameWithVariation: mT
          }), (0, jT.L)()
        }
      }
      isReplay() {
        return (0, tT.e)()
      }
    }
  },
  41063: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => zT,
      f: () => WT,
      j: () => nT,
      l: () => gT
    });
    const WT = 12e4,
      zT = 3e4,
      MT = {
        hidden: () => "undefined" !== typeof document && document.hidden,
        listen: TT => "undefined" === typeof document ? () => {} : (document.addEventListener("visibilitychange", TT), () => {
          document.removeEventListener("visibilitychange", TT)
        })
      };

    function gT(TT) {
      return `it sent no start within ${Math.round(TT)} ms`
    }
    class nT {
      constructor(TT, UT) {
        let mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => performance.now(),
          WT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : MT;
        this.timeoutMs = TT, this.onTimeout = UT, this.now = mT, this.visibility = WT, this.timer = null, this.counted = 0, this.step = null, this.unlisten = void 0, this.unlisten = WT.listen((() => {
          this.onVisibility()
        })), WT.hidden() || this.next()
      }
      cancel() {
        this.pause(), this.unlisten()
      }
      onVisibility() {
        this.visibility.hidden() ? (this.counted += this.credit(), this.pause()) : null === this.timer && this.next()
      }
      credit() {
        const TT = this.step;
        return null === TT ? 0 : Math.min(this.now() - TT.at, TT.ms)
      }
      pause() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null), this.step = null
      }
      next() {
        const TT = this.timeoutMs - this.counted;
        if (TT <= 0) return void this.arm(1e3, (() => {
          this.cancel(), this.onTimeout(this.counted)
        }));
        const UT = Math.min(TT, 5e3);
        this.step = {
          at: this.now(),
          ms: UT
        }, this.arm(UT, (() => {
          this.counted += this.credit(), this.step = null, this.next()
        }))
      }
      arm(TT, UT) {
        this.timer = setTimeout((() => {
          this.timer = null, UT()
        }), TT)
      }
    }
  },
  39760: (TT, UT, mT) => {
    mT.d(UT, {
      e: () => nT
    });
    var WT = mT(366),
      zT = mT(1089);
    const MT = new Set(["bingo", "buildAFactory2", "classic", "testGym"]),
      gT = new Set(["creativeFlat", "skyGrid"]);

    function nT(TT) {
      const UT = (0, WT.dc)(TT);
      return "classic" !== UT ? MT.has(UT) : !(0, zT.k)(TT) && !gT.has((0, WT._b)(TT))
    }
  },
  37868: (TT, UT, mT) => {
    function WT(TT) {
      return "string" !== typeof TT || 2 !== TT.length && ":" !== TT[2] ? null : TT[0] + TT[1]
    }
    mT.d(UT, {
      B: () => vT,
      D: () => ZT,
      c: () => cT,
      g: () => OT,
      k: () => bT,
      o: () => eT,
      q: () => nT,
      r: () => gT,
      v: () => MT,
      x: () => HT
    });
    const zT = ["op:ytInitialPlayerResponse.adPlacements", "op:ytInitialPlayerResponse.playerAds", "op:ytInitialPlayerResponse.adSlots", "op:playerResponse.adPlacements", "op:playerResponse.playerAds", "op:playerResponse.adSlots"];

    function MT(TT) {
      if (function(TT) {
          for (let UT = 0; UT < zT.length; UT++)
            if (TT === zT[UT]) return !0;
          return !1
        }(TT)) return !1;
      const UT = WT(TT);
      return "op" === UT || "ep" === UT || "wi" === UT || "pp" === UT || "fp:call" === TT || "fp:t" === TT
    }

    function gT(TT) {
      return "fp" === WT(TT) && !MT(TT)
    }

    function nT(TT) {
      if ("string" !== typeof TT) return !1;
      return "o" === TT[0] && "p" === TT[1] && (2 === TT.length || ":" === TT[2]) || "fp:call" === TT || "2" === TT || "t" === TT || "a" === TT
    }

    function HT(TT, UT) {
      return `~${function(TT){return TT.length<2?TT:":"===TT[1]?TT[0]:TT[0]+TT[1]}(UT)}~${TT}`
    }
    const kT = 200;

    function jT(TT) {
      let UT = TT.length - 1;
      for (let mT = 0; mT < 2; mT++) {
        const mT = UT;
        for (; UT >= 0 && TT[UT] >= "0" && TT[UT] <= "9";) UT--;
        if (UT < 0 || UT === mT || ":" !== TT[UT]) return -1;
        UT--
      }
      return UT + 1
    }

    function lT(TT) {
      return "unknown" === TT || jT(TT) >= 0
    }

    function LT(TT, UT) {
      return TT[UT] >= "\ud800" && TT[UT] <= "\udbff" && UT + 1 < TT.length && TT[UT + 1] >= "\udc00" && TT[UT + 1] <= "\udfff" ? 2 : 1
    }

    function pT(TT, UT, mT) {
      return 2 === mT ? 4 : TT[UT] <= "\x7f" ? 1 : TT[UT] <= "\u07ff" ? 2 : 3
    }

    function BT(TT, UT, mT) {
      let WT = 0;
      for (; WT < UT;) {
        const UT = LT(TT, WT),
          zT = pT(TT, WT, UT);
        if (zT > mT) break;
        mT -= zT, WT += UT
      }
      return WT
    }

    function ZT(TT) {
      let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1 / 0;
      if ("string" !== typeof TT || TT.length > kT || !lT(TT)) return "t";
      let mT = 2;
      for (let nT = 0; nT < TT.length;) {
        const UT = LT(TT, nT);
        mT += pT(TT, nT, UT), nT += UT
      }
      if (mT <= UT) return `t ${TT}`;
      const WT = jT(TT),
        zT = UT - 2 - (TT.length - WT);
      if (zT < 0) return "t";
      const MT = BT(TT, WT, zT);
      let gT = "t ";
      for (let nT = 0; nT < MT; nT++) gT += TT[nT];
      for (let nT = WT; nT < TT.length; nT++) gT += TT[nT];
      return gT
    }
    const cT = 62;

    function vT(TT) {
      let UT = "so:";
      const mT = BT(TT, TT.length, cT - UT.length);
      for (let WT = 0; WT < mT; WT++) UT += TT[WT];
      return UT
    }
    const fT = "BABYLON ",
      qT = "DECODE ",
      iT = "BABYLON@ ";

    function bT(TT) {
      return vT(fT + TT)
    }

    function OT(TT, UT) {
      return vT(iT + TT + " " + UT)
    }

    function eT(TT) {
      return vT(qT + TT)
    }
  },
  40979: (TT, UT, mT) => {
    mT.d(UT, {
      e: () => WT
    });
    const WT = {
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
  38120: TT => {
    TT.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAKUlEQVQYGWM8CwQMeAATHjmw1JBQwAh06v+LFy8yvH//noGXl/ccuq8A/vQKd00yOdIAAAAASUVORK5CYII="
  },
  38114: TT => {
    TT.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAALUlEQVQYGWM8CwQMeAATHjmw1JBQwAh06v8DBw4wCAoKMnBzczN8/PjxHLLPAORwCnfkvOdNAAAAAElFTkSuQmCC"
  },
  38122: TT => {
    TT.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAKUlEQVQYGWM8CwQMeAATHjmw1JBQwAh06v8DBw4wCAoKMvz58+ccuq8A8vQKd2AxC9MAAAAASUVORK5CYII="
  },
  38108: TT => {
    TT.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAANUlEQVQYGWM8CwQMeAATHjmw1JBQAHLp/wMHDvy/ePHi/4CAgP937tz5Ly6u+5/P3uw/KAgAgjwWhHm22JoAAAAASUVORK5CYII="
  },
  38117: TT => {
    TT.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAKUlEQVQYGWM8CwQMeAATHjmw1JBQwAh06v8DBw4wCAoKMvz58+ccuq8A8vQKd2AxC9MAAAAASUVORK5CYII="
  },
  38848: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => MT
    });
    var WT = mT(2992);
    const zT = ["none", "idle", "now"];

    function MT() {
      const TT = () => (0, WT.C)();
      return {
        memoryBytes: () => (0, WT.u)().buffer.byteLength,
        reserveUpFront: UT => TT().Ml(UT),
        reserveAhead: UT => TT().zl(UT),
        setCeiling: UT => {
          TT().gl(UT)
        },
        lowWater: () => zT[TT().Wl()] ?? "none",
        stats: () => function(TT) {
          const UT = new Uint32Array((0, WT.u)().buffer, TT, 17),
            mT = TT => UT[TT] ?? 0,
            zT = TT => ({
              upFront: mT(TT),
              ahead: mT(TT + 1),
              onDemandInFrame: mT(TT + 2),
              onDemand: mT(TT + 3)
            });
          return {
            memoryBytes: mT(0),
            initialBytes: mT(1),
            liveBytes: mT(2),
            peakLiveBytes: mT(3),
            headroomBytes: mT(4),
            unusedBytes: mT(5),
            ceilingBytes: mT(6),
            reservesRefused: mT(7),
            grows: zT(8),
            grownBytes: zT(12),
            allocationsRefused: mT(16)
          }
        }(TT().nl()),
        takeBallast: () => TT().Hl(),
        takePressure: () => TT().kl()
      }
    }
  },
  5142: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => nT,
      f: () => gT,
      j: () => WT,
      l: () => ZT,
      o: () => lT,
      q: () => zT,
      s: () => MT,
      v: () => kT,
      w: () => jT,
      x: () => LT
    });
    const WT = 5;

    function zT(TT) {
      return TT === WT
    }

    function MT(TT) {
      return [...TT.features]
    }
    const gT = 262144,
      nT = 256,
      HT = 256;

    function kT(TT) {
      if ("object" !== typeof TT || null === TT || Array.isArray(TT)) return "The pack has no files.";
      const UT = [];
      for (const [mT, WT] of Object.entries(TT)) {
        if ("string" !== typeof WT) return `${mT} isn't text.`;
        UT.push({
          path: mT,
          source: WT
        })
      }
      return UT.sort(((TT, UT) => lT(TT.path, UT.path))),
        function(TT) {
          if (0 === TT.length) return "The pack has no .wgsl files.";
          if (TT.length > nT) return `The pack has more than ${nT} .wgsl files.`;
          const UT = new Set;
          for (const {
              path: mT
            }
            of TT) {
            const TT = pT(mT);
            if (null !== TT) return TT;
            if (UT.has(mT)) return `The pack has two files at ${mT}.`;
            UT.add(mT)
          }
          return LT(TT) > gT ? `The pack's .wgsl files are over ${gT/1024} KB in total.` : null
        }(UT) ?? UT
    }

    function jT(TT) {
      const UT = {};
      for (const mT of TT) UT[mT.path] = mT.source;
      return UT
    }

    function lT(TT, UT) {
      return TT < UT ? -1 : TT > UT ? 1 : 0
    }

    function LT(TT) {
      const UT = new TextEncoder;
      let mT = 0;
      for (const {
          source: WT
        }
        of TT) mT += UT.encode(WT).byteLength;
      return mT
    }

    function pT(TT) {
      if (!TT.toLowerCase().endsWith(".wgsl")) return `${TT} isn't a .wgsl file.`;
      if (TT.length > HT) return `A file path is over ${HT} characters.`;
      if (TT.includes("\\") || /[\u0000-\u001f]/.test(TT)) return `${TT} isn't a valid file path.`;
      return TT.split("/").some((TT => "" === TT || "." === TT || ".." === TT)) ? `${TT} isn't a valid file path.` : null
    }
    const BT = /^(.*)\[rot\[([1-4])$/;

    function ZT(TT, UT) {
      let mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
      const WT = new Map;
      UT.forEach(((TT, UT) => {
        let {
          numAnimStates: mT,
          animStartIdx: zT
        } = TT;
        for (let MT = 1; MT < mT; MT++) WT.set(zT + MT - 1, UT)
      }));
      const zT = Object.entries(TT),
        MT = new Map;
      for (const [ZT, cT] of zT) {
        const TT = BT.exec(ZT);
        "1" === TT?.[2] && MT.set(TT[1], cT + 1)
      }
      const gT = TT => {
          const UT = BT.exec(TT);
          return UT && MT.has(UT[1]) ? {
            root: UT[1],
            rotation: Number(UT[2]) - 1
          } : null
        },
        nT = new Set(zT.map((TT => {
          let [UT] = TT;
          return gT(UT)?.root ?? UT
        }))),
        HT = (TT, mT) => {
          const WT = TT.replace(/_?0$/, "");
          return (UT[mT]?.numAnimStates ?? 0) > 1 && !nT.has(WT) ? WT : TT
        },
        kT = new Map;
      for (const [BT, ZT] of zT) kT.set(ZT, HT(gT(BT)?.root ?? BT, ZT));
      const jT = zT.reduce(((TT, UT) => {
          let [, mT] = UT;
          return Math.max(TT, mT + 1)
        }), 0),
        lT = Array.from({
          length: jT
        }, ((TT, UT) => ({
          id: UT + 1,
          rotation: 0
        }))),
        LT = new Map,
        pT = new Map;
      for (const [BT, ZT] of zT) {
        const TT = gT(BT),
          UT = WT.get(ZT);
        if (void 0 !== UT) {
          const mT = kT.get(UT);
          pT.set(BT, {
            name: BT,
            texture: mT,
            kind: "frame"
          }), TT && !pT.has(TT.root) && pT.set(TT.root, {
            name: TT.root,
            texture: mT,
            kind: "frame"
          });
          continue
        }
        const mT = kT.get(ZT),
          zT = TT?.root ?? BT;
        if (mT !== zT && pT.set(zT, {
            name: zT,
            texture: mT,
            kind: "frame"
          }), TT) {
          const UT = MT.get(TT.root);
          lT[ZT] = {
            id: UT,
            rotation: TT.rotation
          }, LT.set(mT, UT), pT.set(BT, {
            name: BT,
            texture: mT,
            kind: "rotation"
          })
        } else LT.set(mT, ZT + 1)
      }
      for (const BT of LT.keys()) pT.delete(BT);
      for (const [BT, ZT] of mT) {
        const TT = LT.get(ZT);
        void 0 === TT || LT.has(BT) || (LT.set(BT, TT), pT.delete(BT))
      }
      return {
        named: [...LT].sort(((TT, UT) => {
          let [mT] = TT, [WT] = UT;
          return mT < WT ? -1 : mT > WT ? 1 : 0
        })).map((TT => {
          let [UT, mT] = TT;
          return {
            name: UT,
            id: mT
          }
        })),
        aliases: [...pT.values()],
        layers: lT
      }
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);